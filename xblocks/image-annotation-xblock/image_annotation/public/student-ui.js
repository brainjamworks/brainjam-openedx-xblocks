var fg = Object.defineProperty;
var dg = (e, t, r) => t in e ? fg(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var ws = (e, t, r) => dg(e, typeof t != "symbol" ? t + "" : t, r);
function ln(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Af = { exports: {} }, Co = {}, Hf = { exports: {} }, B = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ri = Symbol.for("react.element"), hg = Symbol.for("react.portal"), pg = Symbol.for("react.fragment"), gg = Symbol.for("react.strict_mode"), mg = Symbol.for("react.profiler"), vg = Symbol.for("react.provider"), yg = Symbol.for("react.context"), Sg = Symbol.for("react.forward_ref"), Eg = Symbol.for("react.suspense"), wg = Symbol.for("react.memo"), xg = Symbol.for("react.lazy"), xs = Symbol.iterator;
function Tg(e) {
  return e === null || typeof e != "object" ? null : (e = xs && e[xs] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Ff = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Bf = Object.assign, $f = {};
function un(e, t, r) {
  this.props = e, this.context = t, this.refs = $f, this.updater = r || Ff;
}
un.prototype.isReactComponent = {};
un.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
un.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function jf() {
}
jf.prototype = un.prototype;
function au(e, t, r) {
  this.props = e, this.context = t, this.refs = $f, this.updater = r || Ff;
}
var lu = au.prototype = new jf();
lu.constructor = au;
Bf(lu, un.prototype);
lu.isPureReactComponent = !0;
var Ts = Array.isArray, Uf = Object.prototype.hasOwnProperty, uu = { current: null }, zf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Gf(e, t, r) {
  var n, i = {}, o = null, a = null;
  if (t != null) for (n in t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (o = "" + t.key), t) Uf.call(t, n) && !zf.hasOwnProperty(n) && (i[n] = t[n]);
  var l = arguments.length - 2;
  if (l === 1) i.children = r;
  else if (1 < l) {
    for (var u = Array(l), s = 0; s < l; s++) u[s] = arguments[s + 2];
    i.children = u;
  }
  if (e && e.defaultProps) for (n in l = e.defaultProps, l) i[n] === void 0 && (i[n] = l[n]);
  return { $$typeof: ri, type: e, key: o, ref: a, props: i, _owner: uu.current };
}
function Cg(e, t) {
  return { $$typeof: ri, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function su(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ri;
}
function Og(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(r) {
    return t[r];
  });
}
var Cs = /\/+/g;
function aa(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Og("" + e.key) : t.toString(36);
}
function Li(e, t, r, n, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else switch (o) {
    case "string":
    case "number":
      a = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case ri:
        case hg:
          a = !0;
      }
  }
  if (a) return a = e, i = i(a), e = n === "" ? "." + aa(a, 0) : n, Ts(i) ? (r = "", e != null && (r = e.replace(Cs, "$&/") + "/"), Li(i, t, r, "", function(s) {
    return s;
  })) : i != null && (su(i) && (i = Cg(i, r + (!i.key || a && a.key === i.key ? "" : ("" + i.key).replace(Cs, "$&/") + "/") + e)), t.push(i)), 1;
  if (a = 0, n = n === "" ? "." : n + ":", Ts(e)) for (var l = 0; l < e.length; l++) {
    o = e[l];
    var u = n + aa(o, l);
    a += Li(o, t, r, u, i);
  }
  else if (u = Tg(e), typeof u == "function") for (e = u.call(e), l = 0; !(o = e.next()).done; ) o = o.value, u = n + aa(o, l++), a += Li(o, t, r, u, i);
  else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return a;
}
function ci(e, t, r) {
  if (e == null) return e;
  var n = [], i = 0;
  return Li(e, n, "", "", function(o) {
    return t.call(r, o, i++);
  }), n;
}
function Dg(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(r) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = r);
    }, function(r) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = r);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Me = { current: null }, Mi = { transition: null }, _g = { ReactCurrentDispatcher: Me, ReactCurrentBatchConfig: Mi, ReactCurrentOwner: uu };
function Vf() {
  throw Error("act(...) is not supported in production builds of React.");
}
B.Children = { map: ci, forEach: function(e, t, r) {
  ci(e, function() {
    t.apply(this, arguments);
  }, r);
}, count: function(e) {
  var t = 0;
  return ci(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return ci(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!su(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
B.Component = un;
B.Fragment = pg;
B.Profiler = mg;
B.PureComponent = au;
B.StrictMode = gg;
B.Suspense = Eg;
B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _g;
B.act = Vf;
B.cloneElement = function(e, t, r) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var n = Bf({}, e.props), i = e.key, o = e.ref, a = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, a = uu.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
    for (u in t) Uf.call(t, u) && !zf.hasOwnProperty(u) && (n[u] = t[u] === void 0 && l !== void 0 ? l[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) n.children = r;
  else if (1 < u) {
    l = Array(u);
    for (var s = 0; s < u; s++) l[s] = arguments[s + 2];
    n.children = l;
  }
  return { $$typeof: ri, type: e.type, key: i, ref: o, props: n, _owner: a };
};
B.createContext = function(e) {
  return e = { $$typeof: yg, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: vg, _context: e }, e.Consumer = e;
};
B.createElement = Gf;
B.createFactory = function(e) {
  var t = Gf.bind(null, e);
  return t.type = e, t;
};
B.createRef = function() {
  return { current: null };
};
B.forwardRef = function(e) {
  return { $$typeof: Sg, render: e };
};
B.isValidElement = su;
B.lazy = function(e) {
  return { $$typeof: xg, _payload: { _status: -1, _result: e }, _init: Dg };
};
B.memo = function(e, t) {
  return { $$typeof: wg, type: e, compare: t === void 0 ? null : t };
};
B.startTransition = function(e) {
  var t = Mi.transition;
  Mi.transition = {};
  try {
    e();
  } finally {
    Mi.transition = t;
  }
};
B.unstable_act = Vf;
B.useCallback = function(e, t) {
  return Me.current.useCallback(e, t);
};
B.useContext = function(e) {
  return Me.current.useContext(e);
};
B.useDebugValue = function() {
};
B.useDeferredValue = function(e) {
  return Me.current.useDeferredValue(e);
};
B.useEffect = function(e, t) {
  return Me.current.useEffect(e, t);
};
B.useId = function() {
  return Me.current.useId();
};
B.useImperativeHandle = function(e, t, r) {
  return Me.current.useImperativeHandle(e, t, r);
};
B.useInsertionEffect = function(e, t) {
  return Me.current.useInsertionEffect(e, t);
};
B.useLayoutEffect = function(e, t) {
  return Me.current.useLayoutEffect(e, t);
};
B.useMemo = function(e, t) {
  return Me.current.useMemo(e, t);
};
B.useReducer = function(e, t, r) {
  return Me.current.useReducer(e, t, r);
};
B.useRef = function(e) {
  return Me.current.useRef(e);
};
B.useState = function(e) {
  return Me.current.useState(e);
};
B.useSyncExternalStore = function(e, t, r) {
  return Me.current.useSyncExternalStore(e, t, r);
};
B.useTransition = function() {
  return Me.current.useTransition();
};
B.version = "18.3.1";
Hf.exports = B;
var x = Hf.exports;
const N = /* @__PURE__ */ ln(x);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ig = x, Pg = Symbol.for("react.element"), kg = Symbol.for("react.fragment"), Ng = Object.prototype.hasOwnProperty, bg = Ig.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Rg = { key: !0, ref: !0, __self: !0, __source: !0 };
function Wf(e, t, r) {
  var n, i = {}, o = null, a = null;
  r !== void 0 && (o = "" + r), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (a = t.ref);
  for (n in t) Ng.call(t, n) && !Rg.hasOwnProperty(n) && (i[n] = t[n]);
  if (e && e.defaultProps) for (n in t = e.defaultProps, t) i[n] === void 0 && (i[n] = t[n]);
  return { $$typeof: Pg, type: e, key: o, ref: a, props: i, _owner: bg.current };
}
Co.Fragment = kg;
Co.jsx = Wf;
Co.jsxs = Wf;
Af.exports = Co;
var O = Af.exports, Xf = { exports: {} }, Qe = {}, Qf = { exports: {} }, Yf = {};
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
  function t(I, b) {
    var H = I.length;
    I.push(b);
    e: for (; 0 < H; ) {
      var Q = H - 1 >>> 1, re = I[Q];
      if (0 < i(re, b)) I[Q] = b, I[H] = re, H = Q;
      else break e;
    }
  }
  function r(I) {
    return I.length === 0 ? null : I[0];
  }
  function n(I) {
    if (I.length === 0) return null;
    var b = I[0], H = I.pop();
    if (H !== b) {
      I[0] = H;
      e: for (var Q = 0, re = I.length, Ke = re >>> 1; Q < Ke; ) {
        var z = 2 * (Q + 1) - 1, dn = I[z], Ot = z + 1, Dt = I[Ot];
        if (0 > i(dn, H)) Ot < re && 0 > i(Dt, dn) ? (I[Q] = Dt, I[Ot] = H, Q = Ot) : (I[Q] = dn, I[z] = H, Q = z);
        else if (Ot < re && 0 > i(Dt, H)) I[Q] = Dt, I[Ot] = H, Q = Ot;
        else break e;
      }
    }
    return b;
  }
  function i(I, b) {
    var H = I.sortIndex - b.sortIndex;
    return H !== 0 ? H : I.id - b.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function() {
      return o.now();
    };
  } else {
    var a = Date, l = a.now();
    e.unstable_now = function() {
      return a.now() - l;
    };
  }
  var u = [], s = [], c = 1, h = null, d = 3, m = !1, y = !1, v = !1, _ = typeof setTimeout == "function" ? setTimeout : null, p = typeof clearTimeout == "function" ? clearTimeout : null, f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(I) {
    for (var b = r(s); b !== null; ) {
      if (b.callback === null) n(s);
      else if (b.startTime <= I) n(s), b.sortIndex = b.expirationTime, t(u, b);
      else break;
      b = r(s);
    }
  }
  function S(I) {
    if (v = !1, g(I), !y) if (r(u) !== null) y = !0, Ee(T);
    else {
      var b = r(s);
      b !== null && Ue(S, b.startTime - I);
    }
  }
  function T(I, b) {
    y = !1, v && (v = !1, p(E), E = -1), m = !0;
    var H = d;
    try {
      for (g(b), h = r(u); h !== null && (!(h.expirationTime > b) || I && !G()); ) {
        var Q = h.callback;
        if (typeof Q == "function") {
          h.callback = null, d = h.priorityLevel;
          var re = Q(h.expirationTime <= b);
          b = e.unstable_now(), typeof re == "function" ? h.callback = re : h === r(u) && n(u), g(b);
        } else n(u);
        h = r(u);
      }
      if (h !== null) var Ke = !0;
      else {
        var z = r(s);
        z !== null && Ue(S, z.startTime - b), Ke = !1;
      }
      return Ke;
    } finally {
      h = null, d = H, m = !1;
    }
  }
  var C = !1, D = null, E = -1, A = 5, R = -1;
  function G() {
    return !(e.unstable_now() - R < A);
  }
  function fe() {
    if (D !== null) {
      var I = e.unstable_now();
      R = I;
      var b = !0;
      try {
        b = D(!0, I);
      } finally {
        b ? _e() : (C = !1, D = null);
      }
    } else C = !1;
  }
  var _e;
  if (typeof f == "function") _e = function() {
    f(fe);
  };
  else if (typeof MessageChannel < "u") {
    var de = new MessageChannel(), Ct = de.port2;
    de.port1.onmessage = fe, _e = function() {
      Ct.postMessage(null);
    };
  } else _e = function() {
    _(fe, 0);
  };
  function Ee(I) {
    D = I, C || (C = !0, _e());
  }
  function Ue(I, b) {
    E = _(function() {
      I(e.unstable_now());
    }, b);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(I) {
    I.callback = null;
  }, e.unstable_continueExecution = function() {
    y || m || (y = !0, Ee(T));
  }, e.unstable_forceFrameRate = function(I) {
    0 > I || 125 < I ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : A = 0 < I ? Math.floor(1e3 / I) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return d;
  }, e.unstable_getFirstCallbackNode = function() {
    return r(u);
  }, e.unstable_next = function(I) {
    switch (d) {
      case 1:
      case 2:
      case 3:
        var b = 3;
        break;
      default:
        b = d;
    }
    var H = d;
    d = b;
    try {
      return I();
    } finally {
      d = H;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(I, b) {
    switch (I) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        I = 3;
    }
    var H = d;
    d = I;
    try {
      return b();
    } finally {
      d = H;
    }
  }, e.unstable_scheduleCallback = function(I, b, H) {
    var Q = e.unstable_now();
    switch (typeof H == "object" && H !== null ? (H = H.delay, H = typeof H == "number" && 0 < H ? Q + H : Q) : H = Q, I) {
      case 1:
        var re = -1;
        break;
      case 2:
        re = 250;
        break;
      case 5:
        re = 1073741823;
        break;
      case 4:
        re = 1e4;
        break;
      default:
        re = 5e3;
    }
    return re = H + re, I = { id: c++, callback: b, priorityLevel: I, startTime: H, expirationTime: re, sortIndex: -1 }, H > Q ? (I.sortIndex = H, t(s, I), r(u) === null && I === r(s) && (v ? (p(E), E = -1) : v = !0, Ue(S, H - Q))) : (I.sortIndex = re, t(u, I), y || m || (y = !0, Ee(T))), I;
  }, e.unstable_shouldYield = G, e.unstable_wrapCallback = function(I) {
    var b = d;
    return function() {
      var H = d;
      d = b;
      try {
        return I.apply(this, arguments);
      } finally {
        d = H;
      }
    };
  };
})(Yf);
Qf.exports = Yf;
var Lg = Qf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mg = x, We = Lg;
function w(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++) t += "&args[]=" + encodeURIComponent(arguments[r]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Zf = /* @__PURE__ */ new Set(), Bn = {};
function Cr(e, t) {
  Kr(e, t), Kr(e + "Capture", t);
}
function Kr(e, t) {
  for (Bn[e] = t, e = 0; e < t.length; e++) Zf.add(t[e]);
}
var bt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Va = Object.prototype.hasOwnProperty, Ag = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Os = {}, Ds = {};
function Hg(e) {
  return Va.call(Ds, e) ? !0 : Va.call(Os, e) ? !1 : Ag.test(e) ? Ds[e] = !0 : (Os[e] = !0, !1);
}
function Fg(e, t, r, n) {
  if (r !== null && r.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return n ? !1 : r !== null ? !r.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Bg(e, t, r, n) {
  if (t === null || typeof t > "u" || Fg(e, t, r, n)) return !0;
  if (n) return !1;
  if (r !== null) switch (r.type) {
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
function Ae(e, t, r, n, i, o, a) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = n, this.attributeNamespace = i, this.mustUseProperty = r, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = a;
}
var Se = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Se[e] = new Ae(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Se[t] = new Ae(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Se[e] = new Ae(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Se[e] = new Ae(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Se[e] = new Ae(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Se[e] = new Ae(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Se[e] = new Ae(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Se[e] = new Ae(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Se[e] = new Ae(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var cu = /[\-:]([a-z])/g;
function fu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    cu,
    fu
  );
  Se[t] = new Ae(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(cu, fu);
  Se[t] = new Ae(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(cu, fu);
  Se[t] = new Ae(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Se[e] = new Ae(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Se.xlinkHref = new Ae("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Se[e] = new Ae(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function du(e, t, r, n) {
  var i = Se.hasOwnProperty(t) ? Se[t] : null;
  (i !== null ? i.type !== 0 : n || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Bg(t, r, i, n) && (r = null), n || i === null ? Hg(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r)) : i.mustUseProperty ? e[i.propertyName] = r === null ? i.type === 3 ? !1 : "" : r : (t = i.attributeName, n = i.attributeNamespace, r === null ? e.removeAttribute(t) : (i = i.type, r = i === 3 || i === 4 && r === !0 ? "" : "" + r, n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))));
}
var At = Mg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, fi = Symbol.for("react.element"), Rr = Symbol.for("react.portal"), Lr = Symbol.for("react.fragment"), hu = Symbol.for("react.strict_mode"), Wa = Symbol.for("react.profiler"), Kf = Symbol.for("react.provider"), qf = Symbol.for("react.context"), pu = Symbol.for("react.forward_ref"), Xa = Symbol.for("react.suspense"), Qa = Symbol.for("react.suspense_list"), gu = Symbol.for("react.memo"), Bt = Symbol.for("react.lazy"), Jf = Symbol.for("react.offscreen"), _s = Symbol.iterator;
function pn(e) {
  return e === null || typeof e != "object" ? null : (e = _s && e[_s] || e["@@iterator"], typeof e == "function" ? e : null);
}
var te = Object.assign, la;
function Cn(e) {
  if (la === void 0) try {
    throw Error();
  } catch (r) {
    var t = r.stack.trim().match(/\n( *(at )?)/);
    la = t && t[1] || "";
  }
  return `
` + la + e;
}
var ua = !1;
function sa(e, t) {
  if (!e || ua) return "";
  ua = !0;
  var r = Error.prepareStackTrace;
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
        var n = s;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (s) {
        n = s;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (s) {
        n = s;
      }
      e();
    }
  } catch (s) {
    if (s && n && typeof s.stack == "string") {
      for (var i = s.stack.split(`
`), o = n.stack.split(`
`), a = i.length - 1, l = o.length - 1; 1 <= a && 0 <= l && i[a] !== o[l]; ) l--;
      for (; 1 <= a && 0 <= l; a--, l--) if (i[a] !== o[l]) {
        if (a !== 1 || l !== 1)
          do
            if (a--, l--, 0 > l || i[a] !== o[l]) {
              var u = `
` + i[a].replace(" at new ", " at ");
              return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u;
            }
          while (1 <= a && 0 <= l);
        break;
      }
    }
  } finally {
    ua = !1, Error.prepareStackTrace = r;
  }
  return (e = e ? e.displayName || e.name : "") ? Cn(e) : "";
}
function $g(e) {
  switch (e.tag) {
    case 5:
      return Cn(e.type);
    case 16:
      return Cn("Lazy");
    case 13:
      return Cn("Suspense");
    case 19:
      return Cn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = sa(e.type, !1), e;
    case 11:
      return e = sa(e.type.render, !1), e;
    case 1:
      return e = sa(e.type, !0), e;
    default:
      return "";
  }
}
function Ya(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Lr:
      return "Fragment";
    case Rr:
      return "Portal";
    case Wa:
      return "Profiler";
    case hu:
      return "StrictMode";
    case Xa:
      return "Suspense";
    case Qa:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case qf:
      return (e.displayName || "Context") + ".Consumer";
    case Kf:
      return (e._context.displayName || "Context") + ".Provider";
    case pu:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case gu:
      return t = e.displayName || null, t !== null ? t : Ya(e.type) || "Memo";
    case Bt:
      t = e._payload, e = e._init;
      try {
        return Ya(e(t));
      } catch {
      }
  }
  return null;
}
function jg(e) {
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
      return Ya(t);
    case 8:
      return t === hu ? "StrictMode" : "Mode";
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
function er(e) {
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
function ed(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Ug(e) {
  var t = ed(e) ? "checked" : "value", r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), n = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof r < "u" && typeof r.get == "function" && typeof r.set == "function") {
    var i = r.get, o = r.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return i.call(this);
    }, set: function(a) {
      n = "" + a, o.call(this, a);
    } }), Object.defineProperty(e, t, { enumerable: r.enumerable }), { getValue: function() {
      return n;
    }, setValue: function(a) {
      n = "" + a;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function di(e) {
  e._valueTracker || (e._valueTracker = Ug(e));
}
function td(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var r = t.getValue(), n = "";
  return e && (n = ed(e) ? e.checked ? "true" : "false" : e.value), e = n, e !== r ? (t.setValue(e), !0) : !1;
}
function qi(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Za(e, t) {
  var r = t.checked;
  return te({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: r ?? e._wrapperState.initialChecked });
}
function Is(e, t) {
  var r = t.defaultValue == null ? "" : t.defaultValue, n = t.checked != null ? t.checked : t.defaultChecked;
  r = er(t.value != null ? t.value : r), e._wrapperState = { initialChecked: n, initialValue: r, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function rd(e, t) {
  t = t.checked, t != null && du(e, "checked", t, !1);
}
function Ka(e, t) {
  rd(e, t);
  var r = er(t.value), n = t.type;
  if (r != null) n === "number" ? (r === 0 && e.value === "" || e.value != r) && (e.value = "" + r) : e.value !== "" + r && (e.value = "" + r);
  else if (n === "submit" || n === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? qa(e, t.type, r) : t.hasOwnProperty("defaultValue") && qa(e, t.type, er(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Ps(e, t, r) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var n = t.type;
    if (!(n !== "submit" && n !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, r || t === e.value || (e.value = t), e.defaultValue = t;
  }
  r = e.name, r !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, r !== "" && (e.name = r);
}
function qa(e, t, r) {
  (t !== "number" || qi(e.ownerDocument) !== e) && (r == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
}
var On = Array.isArray;
function Vr(e, t, r, n) {
  if (e = e.options, t) {
    t = {};
    for (var i = 0; i < r.length; i++) t["$" + r[i]] = !0;
    for (r = 0; r < e.length; r++) i = t.hasOwnProperty("$" + e[r].value), e[r].selected !== i && (e[r].selected = i), i && n && (e[r].defaultSelected = !0);
  } else {
    for (r = "" + er(r), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === r) {
        e[i].selected = !0, n && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ja(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(w(91));
  return te({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function ks(e, t) {
  var r = t.value;
  if (r == null) {
    if (r = t.children, t = t.defaultValue, r != null) {
      if (t != null) throw Error(w(92));
      if (On(r)) {
        if (1 < r.length) throw Error(w(93));
        r = r[0];
      }
      t = r;
    }
    t == null && (t = ""), r = t;
  }
  e._wrapperState = { initialValue: er(r) };
}
function nd(e, t) {
  var r = er(t.value), n = er(t.defaultValue);
  r != null && (r = "" + r, r !== e.value && (e.value = r), t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)), n != null && (e.defaultValue = "" + n);
}
function Ns(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function id(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function el(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? id(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var hi, od = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, r, n, i) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, r, n, i);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (hi = hi || document.createElement("div"), hi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = hi.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function $n(e, t) {
  if (t) {
    var r = e.firstChild;
    if (r && r === e.lastChild && r.nodeType === 3) {
      r.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var kn = {
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
}, zg = ["Webkit", "ms", "Moz", "O"];
Object.keys(kn).forEach(function(e) {
  zg.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), kn[t] = kn[e];
  });
});
function ad(e, t, r) {
  return t == null || typeof t == "boolean" || t === "" ? "" : r || typeof t != "number" || t === 0 || kn.hasOwnProperty(e) && kn[e] ? ("" + t).trim() : t + "px";
}
function ld(e, t) {
  e = e.style;
  for (var r in t) if (t.hasOwnProperty(r)) {
    var n = r.indexOf("--") === 0, i = ad(r, t[r], n);
    r === "float" && (r = "cssFloat"), n ? e.setProperty(r, i) : e[r] = i;
  }
}
var Gg = te({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function tl(e, t) {
  if (t) {
    if (Gg[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(w(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(w(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(w(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(w(62));
  }
}
function rl(e, t) {
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
var nl = null;
function mu(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var il = null, Wr = null, Xr = null;
function bs(e) {
  if (e = oi(e)) {
    if (typeof il != "function") throw Error(w(280));
    var t = e.stateNode;
    t && (t = Po(t), il(e.stateNode, e.type, t));
  }
}
function ud(e) {
  Wr ? Xr ? Xr.push(e) : Xr = [e] : Wr = e;
}
function sd() {
  if (Wr) {
    var e = Wr, t = Xr;
    if (Xr = Wr = null, bs(e), t) for (e = 0; e < t.length; e++) bs(t[e]);
  }
}
function cd(e, t) {
  return e(t);
}
function fd() {
}
var ca = !1;
function dd(e, t, r) {
  if (ca) return e(t, r);
  ca = !0;
  try {
    return cd(e, t, r);
  } finally {
    ca = !1, (Wr !== null || Xr !== null) && (fd(), sd());
  }
}
function jn(e, t) {
  var r = e.stateNode;
  if (r === null) return null;
  var n = Po(r);
  if (n === null) return null;
  r = n[t];
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
      (n = !n.disabled) || (e = e.type, n = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !n;
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (r && typeof r != "function") throw Error(w(231, t, typeof r));
  return r;
}
var ol = !1;
if (bt) try {
  var gn = {};
  Object.defineProperty(gn, "passive", { get: function() {
    ol = !0;
  } }), window.addEventListener("test", gn, gn), window.removeEventListener("test", gn, gn);
} catch {
  ol = !1;
}
function Vg(e, t, r, n, i, o, a, l, u) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(r, s);
  } catch (c) {
    this.onError(c);
  }
}
var Nn = !1, Ji = null, eo = !1, al = null, Wg = { onError: function(e) {
  Nn = !0, Ji = e;
} };
function Xg(e, t, r, n, i, o, a, l, u) {
  Nn = !1, Ji = null, Vg.apply(Wg, arguments);
}
function Qg(e, t, r, n, i, o, a, l, u) {
  if (Xg.apply(this, arguments), Nn) {
    if (Nn) {
      var s = Ji;
      Nn = !1, Ji = null;
    } else throw Error(w(198));
    eo || (eo = !0, al = s);
  }
}
function Or(e) {
  var t = e, r = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (r = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? r : null;
}
function hd(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Rs(e) {
  if (Or(e) !== e) throw Error(w(188));
}
function Yg(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Or(e), t === null) throw Error(w(188));
    return t !== e ? null : e;
  }
  for (var r = e, n = t; ; ) {
    var i = r.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (n = i.return, n !== null) {
        r = n;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === r) return Rs(i), e;
        if (o === n) return Rs(i), t;
        o = o.sibling;
      }
      throw Error(w(188));
    }
    if (r.return !== n.return) r = i, n = o;
    else {
      for (var a = !1, l = i.child; l; ) {
        if (l === r) {
          a = !0, r = i, n = o;
          break;
        }
        if (l === n) {
          a = !0, n = i, r = o;
          break;
        }
        l = l.sibling;
      }
      if (!a) {
        for (l = o.child; l; ) {
          if (l === r) {
            a = !0, r = o, n = i;
            break;
          }
          if (l === n) {
            a = !0, n = o, r = i;
            break;
          }
          l = l.sibling;
        }
        if (!a) throw Error(w(189));
      }
    }
    if (r.alternate !== n) throw Error(w(190));
  }
  if (r.tag !== 3) throw Error(w(188));
  return r.stateNode.current === r ? e : t;
}
function pd(e) {
  return e = Yg(e), e !== null ? gd(e) : null;
}
function gd(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = gd(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var md = We.unstable_scheduleCallback, Ls = We.unstable_cancelCallback, Zg = We.unstable_shouldYield, Kg = We.unstable_requestPaint, ie = We.unstable_now, qg = We.unstable_getCurrentPriorityLevel, vu = We.unstable_ImmediatePriority, vd = We.unstable_UserBlockingPriority, to = We.unstable_NormalPriority, Jg = We.unstable_LowPriority, yd = We.unstable_IdlePriority, Oo = null, wt = null;
function em(e) {
  if (wt && typeof wt.onCommitFiberRoot == "function") try {
    wt.onCommitFiberRoot(Oo, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var pt = Math.clz32 ? Math.clz32 : nm, tm = Math.log, rm = Math.LN2;
function nm(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (tm(e) / rm | 0) | 0;
}
var pi = 64, gi = 4194304;
function Dn(e) {
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
function ro(e, t) {
  var r = e.pendingLanes;
  if (r === 0) return 0;
  var n = 0, i = e.suspendedLanes, o = e.pingedLanes, a = r & 268435455;
  if (a !== 0) {
    var l = a & ~i;
    l !== 0 ? n = Dn(l) : (o &= a, o !== 0 && (n = Dn(o)));
  } else a = r & ~i, a !== 0 ? n = Dn(a) : o !== 0 && (n = Dn(o));
  if (n === 0) return 0;
  if (t !== 0 && t !== n && !(t & i) && (i = n & -n, o = t & -t, i >= o || i === 16 && (o & 4194240) !== 0)) return t;
  if (n & 4 && (n |= r & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= n; 0 < t; ) r = 31 - pt(t), i = 1 << r, n |= e[r], t &= ~i;
  return n;
}
function im(e, t) {
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
function om(e, t) {
  for (var r = e.suspendedLanes, n = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var a = 31 - pt(o), l = 1 << a, u = i[a];
    u === -1 ? (!(l & r) || l & n) && (i[a] = im(l, t)) : u <= t && (e.expiredLanes |= l), o &= ~l;
  }
}
function ll(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Sd() {
  var e = pi;
  return pi <<= 1, !(pi & 4194240) && (pi = 64), e;
}
function fa(e) {
  for (var t = [], r = 0; 31 > r; r++) t.push(e);
  return t;
}
function ni(e, t, r) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - pt(t), e[t] = r;
}
function am(e, t) {
  var r = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var n = e.eventTimes;
  for (e = e.expirationTimes; 0 < r; ) {
    var i = 31 - pt(r), o = 1 << i;
    t[i] = 0, n[i] = -1, e[i] = -1, r &= ~o;
  }
}
function yu(e, t) {
  var r = e.entangledLanes |= t;
  for (e = e.entanglements; r; ) {
    var n = 31 - pt(r), i = 1 << n;
    i & t | e[n] & t && (e[n] |= t), r &= ~i;
  }
}
var V = 0;
function Ed(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var wd, Su, xd, Td, Cd, ul = !1, mi = [], Wt = null, Xt = null, Qt = null, Un = /* @__PURE__ */ new Map(), zn = /* @__PURE__ */ new Map(), Ut = [], lm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Ms(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Wt = null;
      break;
    case "dragenter":
    case "dragleave":
      Xt = null;
      break;
    case "mouseover":
    case "mouseout":
      Qt = null;
      break;
    case "pointerover":
    case "pointerout":
      Un.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      zn.delete(t.pointerId);
  }
}
function mn(e, t, r, n, i, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: r, eventSystemFlags: n, nativeEvent: o, targetContainers: [i] }, t !== null && (t = oi(t), t !== null && Su(t)), e) : (e.eventSystemFlags |= n, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
}
function um(e, t, r, n, i) {
  switch (t) {
    case "focusin":
      return Wt = mn(Wt, e, t, r, n, i), !0;
    case "dragenter":
      return Xt = mn(Xt, e, t, r, n, i), !0;
    case "mouseover":
      return Qt = mn(Qt, e, t, r, n, i), !0;
    case "pointerover":
      var o = i.pointerId;
      return Un.set(o, mn(Un.get(o) || null, e, t, r, n, i)), !0;
    case "gotpointercapture":
      return o = i.pointerId, zn.set(o, mn(zn.get(o) || null, e, t, r, n, i)), !0;
  }
  return !1;
}
function Od(e) {
  var t = dr(e.target);
  if (t !== null) {
    var r = Or(t);
    if (r !== null) {
      if (t = r.tag, t === 13) {
        if (t = hd(r), t !== null) {
          e.blockedOn = t, Cd(e.priority, function() {
            xd(r);
          });
          return;
        }
      } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ai(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var r = sl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (r === null) {
      r = e.nativeEvent;
      var n = new r.constructor(r.type, r);
      nl = n, r.target.dispatchEvent(n), nl = null;
    } else return t = oi(r), t !== null && Su(t), e.blockedOn = r, !1;
    t.shift();
  }
  return !0;
}
function As(e, t, r) {
  Ai(e) && r.delete(t);
}
function sm() {
  ul = !1, Wt !== null && Ai(Wt) && (Wt = null), Xt !== null && Ai(Xt) && (Xt = null), Qt !== null && Ai(Qt) && (Qt = null), Un.forEach(As), zn.forEach(As);
}
function vn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, ul || (ul = !0, We.unstable_scheduleCallback(We.unstable_NormalPriority, sm)));
}
function Gn(e) {
  function t(i) {
    return vn(i, e);
  }
  if (0 < mi.length) {
    vn(mi[0], e);
    for (var r = 1; r < mi.length; r++) {
      var n = mi[r];
      n.blockedOn === e && (n.blockedOn = null);
    }
  }
  for (Wt !== null && vn(Wt, e), Xt !== null && vn(Xt, e), Qt !== null && vn(Qt, e), Un.forEach(t), zn.forEach(t), r = 0; r < Ut.length; r++) n = Ut[r], n.blockedOn === e && (n.blockedOn = null);
  for (; 0 < Ut.length && (r = Ut[0], r.blockedOn === null); ) Od(r), r.blockedOn === null && Ut.shift();
}
var Qr = At.ReactCurrentBatchConfig, no = !0;
function cm(e, t, r, n) {
  var i = V, o = Qr.transition;
  Qr.transition = null;
  try {
    V = 1, Eu(e, t, r, n);
  } finally {
    V = i, Qr.transition = o;
  }
}
function fm(e, t, r, n) {
  var i = V, o = Qr.transition;
  Qr.transition = null;
  try {
    V = 4, Eu(e, t, r, n);
  } finally {
    V = i, Qr.transition = o;
  }
}
function Eu(e, t, r, n) {
  if (no) {
    var i = sl(e, t, r, n);
    if (i === null) wa(e, t, n, io, r), Ms(e, n);
    else if (um(i, e, t, r, n)) n.stopPropagation();
    else if (Ms(e, n), t & 4 && -1 < lm.indexOf(e)) {
      for (; i !== null; ) {
        var o = oi(i);
        if (o !== null && wd(o), o = sl(e, t, r, n), o === null && wa(e, t, n, io, r), o === i) break;
        i = o;
      }
      i !== null && n.stopPropagation();
    } else wa(e, t, n, null, r);
  }
}
var io = null;
function sl(e, t, r, n) {
  if (io = null, e = mu(n), e = dr(e), e !== null) if (t = Or(e), t === null) e = null;
  else if (r = t.tag, r === 13) {
    if (e = hd(t), e !== null) return e;
    e = null;
  } else if (r === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return io = e, null;
}
function Dd(e) {
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
      switch (qg()) {
        case vu:
          return 1;
        case vd:
          return 4;
        case to:
        case Jg:
          return 16;
        case yd:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Gt = null, wu = null, Hi = null;
function _d() {
  if (Hi) return Hi;
  var e, t = wu, r = t.length, n, i = "value" in Gt ? Gt.value : Gt.textContent, o = i.length;
  for (e = 0; e < r && t[e] === i[e]; e++) ;
  var a = r - e;
  for (n = 1; n <= a && t[r - n] === i[o - n]; n++) ;
  return Hi = i.slice(e, 1 < n ? 1 - n : void 0);
}
function Fi(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function vi() {
  return !0;
}
function Hs() {
  return !1;
}
function Ye(e) {
  function t(r, n, i, o, a) {
    this._reactName = r, this._targetInst = i, this.type = n, this.nativeEvent = o, this.target = a, this.currentTarget = null;
    for (var l in e) e.hasOwnProperty(l) && (r = e[l], this[l] = r ? r(o) : o[l]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? vi : Hs, this.isPropagationStopped = Hs, this;
  }
  return te(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var r = this.nativeEvent;
    r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = !1), this.isDefaultPrevented = vi);
  }, stopPropagation: function() {
    var r = this.nativeEvent;
    r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0), this.isPropagationStopped = vi);
  }, persist: function() {
  }, isPersistent: vi }), t;
}
var sn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, xu = Ye(sn), ii = te({}, sn, { view: 0, detail: 0 }), dm = Ye(ii), da, ha, yn, Do = te({}, ii, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Tu, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== yn && (yn && e.type === "mousemove" ? (da = e.screenX - yn.screenX, ha = e.screenY - yn.screenY) : ha = da = 0, yn = e), da);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : ha;
} }), Fs = Ye(Do), hm = te({}, Do, { dataTransfer: 0 }), pm = Ye(hm), gm = te({}, ii, { relatedTarget: 0 }), pa = Ye(gm), mm = te({}, sn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), vm = Ye(mm), ym = te({}, sn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Sm = Ye(ym), Em = te({}, sn, { data: 0 }), Bs = Ye(Em), wm = {
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
}, xm = {
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
}, Tm = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Cm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Tm[e]) ? !!t[e] : !1;
}
function Tu() {
  return Cm;
}
var Om = te({}, ii, { key: function(e) {
  if (e.key) {
    var t = wm[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Fi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? xm[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Tu, charCode: function(e) {
  return e.type === "keypress" ? Fi(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Fi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Dm = Ye(Om), _m = te({}, Do, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), $s = Ye(_m), Im = te({}, ii, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Tu }), Pm = Ye(Im), km = te({}, sn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Nm = Ye(km), bm = te({}, Do, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Rm = Ye(bm), Lm = [9, 13, 27, 32], Cu = bt && "CompositionEvent" in window, bn = null;
bt && "documentMode" in document && (bn = document.documentMode);
var Mm = bt && "TextEvent" in window && !bn, Id = bt && (!Cu || bn && 8 < bn && 11 >= bn), js = " ", Us = !1;
function Pd(e, t) {
  switch (e) {
    case "keyup":
      return Lm.indexOf(t.keyCode) !== -1;
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
function kd(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Mr = !1;
function Am(e, t) {
  switch (e) {
    case "compositionend":
      return kd(t);
    case "keypress":
      return t.which !== 32 ? null : (Us = !0, js);
    case "textInput":
      return e = t.data, e === js && Us ? null : e;
    default:
      return null;
  }
}
function Hm(e, t) {
  if (Mr) return e === "compositionend" || !Cu && Pd(e, t) ? (e = _d(), Hi = wu = Gt = null, Mr = !1, e) : null;
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
      return Id && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Fm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function zs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Fm[e.type] : t === "textarea";
}
function Nd(e, t, r, n) {
  ud(n), t = oo(t, "onChange"), 0 < t.length && (r = new xu("onChange", "change", null, r, n), e.push({ event: r, listeners: t }));
}
var Rn = null, Vn = null;
function Bm(e) {
  Ud(e, 0);
}
function _o(e) {
  var t = Fr(e);
  if (td(t)) return e;
}
function $m(e, t) {
  if (e === "change") return t;
}
var bd = !1;
if (bt) {
  var ga;
  if (bt) {
    var ma = "oninput" in document;
    if (!ma) {
      var Gs = document.createElement("div");
      Gs.setAttribute("oninput", "return;"), ma = typeof Gs.oninput == "function";
    }
    ga = ma;
  } else ga = !1;
  bd = ga && (!document.documentMode || 9 < document.documentMode);
}
function Vs() {
  Rn && (Rn.detachEvent("onpropertychange", Rd), Vn = Rn = null);
}
function Rd(e) {
  if (e.propertyName === "value" && _o(Vn)) {
    var t = [];
    Nd(t, Vn, e, mu(e)), dd(Bm, t);
  }
}
function jm(e, t, r) {
  e === "focusin" ? (Vs(), Rn = t, Vn = r, Rn.attachEvent("onpropertychange", Rd)) : e === "focusout" && Vs();
}
function Um(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return _o(Vn);
}
function zm(e, t) {
  if (e === "click") return _o(t);
}
function Gm(e, t) {
  if (e === "input" || e === "change") return _o(t);
}
function Vm(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var mt = typeof Object.is == "function" ? Object.is : Vm;
function Wn(e, t) {
  if (mt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (n = 0; n < r.length; n++) {
    var i = r[n];
    if (!Va.call(t, i) || !mt(e[i], t[i])) return !1;
  }
  return !0;
}
function Ws(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Xs(e, t) {
  var r = Ws(e);
  e = 0;
  for (var n; r; ) {
    if (r.nodeType === 3) {
      if (n = e + r.textContent.length, e <= t && n >= t) return { node: r, offset: t - e };
      e = n;
    }
    e: {
      for (; r; ) {
        if (r.nextSibling) {
          r = r.nextSibling;
          break e;
        }
        r = r.parentNode;
      }
      r = void 0;
    }
    r = Ws(r);
  }
}
function Ld(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ld(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Md() {
  for (var e = window, t = qi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var r = typeof t.contentWindow.location.href == "string";
    } catch {
      r = !1;
    }
    if (r) e = t.contentWindow;
    else break;
    t = qi(e.document);
  }
  return t;
}
function Ou(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Wm(e) {
  var t = Md(), r = e.focusedElem, n = e.selectionRange;
  if (t !== r && r && r.ownerDocument && Ld(r.ownerDocument.documentElement, r)) {
    if (n !== null && Ou(r)) {
      if (t = n.start, e = n.end, e === void 0 && (e = t), "selectionStart" in r) r.selectionStart = t, r.selectionEnd = Math.min(e, r.value.length);
      else if (e = (t = r.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var i = r.textContent.length, o = Math.min(n.start, i);
        n = n.end === void 0 ? o : Math.min(n.end, i), !e.extend && o > n && (i = n, n = o, o = i), i = Xs(r, o);
        var a = Xs(
          r,
          n
        );
        i && a && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== a.node || e.focusOffset !== a.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), o > n ? (e.addRange(t), e.extend(a.node, a.offset)) : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = r; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof r.focus == "function" && r.focus(), r = 0; r < t.length; r++) e = t[r], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var Xm = bt && "documentMode" in document && 11 >= document.documentMode, Ar = null, cl = null, Ln = null, fl = !1;
function Qs(e, t, r) {
  var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
  fl || Ar == null || Ar !== qi(n) || (n = Ar, "selectionStart" in n && Ou(n) ? n = { start: n.selectionStart, end: n.selectionEnd } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = { anchorNode: n.anchorNode, anchorOffset: n.anchorOffset, focusNode: n.focusNode, focusOffset: n.focusOffset }), Ln && Wn(Ln, n) || (Ln = n, n = oo(cl, "onSelect"), 0 < n.length && (t = new xu("onSelect", "select", null, t, r), e.push({ event: t, listeners: n }), t.target = Ar)));
}
function yi(e, t) {
  var r = {};
  return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit" + e] = "webkit" + t, r["Moz" + e] = "moz" + t, r;
}
var Hr = { animationend: yi("Animation", "AnimationEnd"), animationiteration: yi("Animation", "AnimationIteration"), animationstart: yi("Animation", "AnimationStart"), transitionend: yi("Transition", "TransitionEnd") }, va = {}, Ad = {};
bt && (Ad = document.createElement("div").style, "AnimationEvent" in window || (delete Hr.animationend.animation, delete Hr.animationiteration.animation, delete Hr.animationstart.animation), "TransitionEvent" in window || delete Hr.transitionend.transition);
function Io(e) {
  if (va[e]) return va[e];
  if (!Hr[e]) return e;
  var t = Hr[e], r;
  for (r in t) if (t.hasOwnProperty(r) && r in Ad) return va[e] = t[r];
  return e;
}
var Hd = Io("animationend"), Fd = Io("animationiteration"), Bd = Io("animationstart"), $d = Io("transitionend"), jd = /* @__PURE__ */ new Map(), Ys = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function rr(e, t) {
  jd.set(e, t), Cr(t, [e]);
}
for (var ya = 0; ya < Ys.length; ya++) {
  var Sa = Ys[ya], Qm = Sa.toLowerCase(), Ym = Sa[0].toUpperCase() + Sa.slice(1);
  rr(Qm, "on" + Ym);
}
rr(Hd, "onAnimationEnd");
rr(Fd, "onAnimationIteration");
rr(Bd, "onAnimationStart");
rr("dblclick", "onDoubleClick");
rr("focusin", "onFocus");
rr("focusout", "onBlur");
rr($d, "onTransitionEnd");
Kr("onMouseEnter", ["mouseout", "mouseover"]);
Kr("onMouseLeave", ["mouseout", "mouseover"]);
Kr("onPointerEnter", ["pointerout", "pointerover"]);
Kr("onPointerLeave", ["pointerout", "pointerover"]);
Cr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Cr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Cr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Cr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Cr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Cr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var _n = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Zm = new Set("cancel close invalid load scroll toggle".split(" ").concat(_n));
function Zs(e, t, r) {
  var n = e.type || "unknown-event";
  e.currentTarget = r, Qg(n, t, void 0, e), e.currentTarget = null;
}
function Ud(e, t) {
  t = (t & 4) !== 0;
  for (var r = 0; r < e.length; r++) {
    var n = e[r], i = n.event;
    n = n.listeners;
    e: {
      var o = void 0;
      if (t) for (var a = n.length - 1; 0 <= a; a--) {
        var l = n[a], u = l.instance, s = l.currentTarget;
        if (l = l.listener, u !== o && i.isPropagationStopped()) break e;
        Zs(i, l, s), o = u;
      }
      else for (a = 0; a < n.length; a++) {
        if (l = n[a], u = l.instance, s = l.currentTarget, l = l.listener, u !== o && i.isPropagationStopped()) break e;
        Zs(i, l, s), o = u;
      }
    }
  }
  if (eo) throw e = al, eo = !1, al = null, e;
}
function Y(e, t) {
  var r = t[ml];
  r === void 0 && (r = t[ml] = /* @__PURE__ */ new Set());
  var n = e + "__bubble";
  r.has(n) || (zd(t, e, 2, !1), r.add(n));
}
function Ea(e, t, r) {
  var n = 0;
  t && (n |= 4), zd(r, e, n, t);
}
var Si = "_reactListening" + Math.random().toString(36).slice(2);
function Xn(e) {
  if (!e[Si]) {
    e[Si] = !0, Zf.forEach(function(r) {
      r !== "selectionchange" && (Zm.has(r) || Ea(r, !1, e), Ea(r, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Si] || (t[Si] = !0, Ea("selectionchange", !1, t));
  }
}
function zd(e, t, r, n) {
  switch (Dd(t)) {
    case 1:
      var i = cm;
      break;
    case 4:
      i = fm;
      break;
    default:
      i = Eu;
  }
  r = i.bind(null, t, r, e), i = void 0, !ol || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), n ? i !== void 0 ? e.addEventListener(t, r, { capture: !0, passive: i }) : e.addEventListener(t, r, !0) : i !== void 0 ? e.addEventListener(t, r, { passive: i }) : e.addEventListener(t, r, !1);
}
function wa(e, t, r, n, i) {
  var o = n;
  if (!(t & 1) && !(t & 2) && n !== null) e: for (; ; ) {
    if (n === null) return;
    var a = n.tag;
    if (a === 3 || a === 4) {
      var l = n.stateNode.containerInfo;
      if (l === i || l.nodeType === 8 && l.parentNode === i) break;
      if (a === 4) for (a = n.return; a !== null; ) {
        var u = a.tag;
        if ((u === 3 || u === 4) && (u = a.stateNode.containerInfo, u === i || u.nodeType === 8 && u.parentNode === i)) return;
        a = a.return;
      }
      for (; l !== null; ) {
        if (a = dr(l), a === null) return;
        if (u = a.tag, u === 5 || u === 6) {
          n = o = a;
          continue e;
        }
        l = l.parentNode;
      }
    }
    n = n.return;
  }
  dd(function() {
    var s = o, c = mu(r), h = [];
    e: {
      var d = jd.get(e);
      if (d !== void 0) {
        var m = xu, y = e;
        switch (e) {
          case "keypress":
            if (Fi(r) === 0) break e;
          case "keydown":
          case "keyup":
            m = Dm;
            break;
          case "focusin":
            y = "focus", m = pa;
            break;
          case "focusout":
            y = "blur", m = pa;
            break;
          case "beforeblur":
          case "afterblur":
            m = pa;
            break;
          case "click":
            if (r.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            m = Fs;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            m = pm;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            m = Pm;
            break;
          case Hd:
          case Fd:
          case Bd:
            m = vm;
            break;
          case $d:
            m = Nm;
            break;
          case "scroll":
            m = dm;
            break;
          case "wheel":
            m = Rm;
            break;
          case "copy":
          case "cut":
          case "paste":
            m = Sm;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            m = $s;
        }
        var v = (t & 4) !== 0, _ = !v && e === "scroll", p = v ? d !== null ? d + "Capture" : null : d;
        v = [];
        for (var f = s, g; f !== null; ) {
          g = f;
          var S = g.stateNode;
          if (g.tag === 5 && S !== null && (g = S, p !== null && (S = jn(f, p), S != null && v.push(Qn(f, S, g)))), _) break;
          f = f.return;
        }
        0 < v.length && (d = new m(d, y, null, r, c), h.push({ event: d, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (d = e === "mouseover" || e === "pointerover", m = e === "mouseout" || e === "pointerout", d && r !== nl && (y = r.relatedTarget || r.fromElement) && (dr(y) || y[Rt])) break e;
        if ((m || d) && (d = c.window === c ? c : (d = c.ownerDocument) ? d.defaultView || d.parentWindow : window, m ? (y = r.relatedTarget || r.toElement, m = s, y = y ? dr(y) : null, y !== null && (_ = Or(y), y !== _ || y.tag !== 5 && y.tag !== 6) && (y = null)) : (m = null, y = s), m !== y)) {
          if (v = Fs, S = "onMouseLeave", p = "onMouseEnter", f = "mouse", (e === "pointerout" || e === "pointerover") && (v = $s, S = "onPointerLeave", p = "onPointerEnter", f = "pointer"), _ = m == null ? d : Fr(m), g = y == null ? d : Fr(y), d = new v(S, f + "leave", m, r, c), d.target = _, d.relatedTarget = g, S = null, dr(c) === s && (v = new v(p, f + "enter", y, r, c), v.target = g, v.relatedTarget = _, S = v), _ = S, m && y) t: {
            for (v = m, p = y, f = 0, g = v; g; g = Pr(g)) f++;
            for (g = 0, S = p; S; S = Pr(S)) g++;
            for (; 0 < f - g; ) v = Pr(v), f--;
            for (; 0 < g - f; ) p = Pr(p), g--;
            for (; f--; ) {
              if (v === p || p !== null && v === p.alternate) break t;
              v = Pr(v), p = Pr(p);
            }
            v = null;
          }
          else v = null;
          m !== null && Ks(h, d, m, v, !1), y !== null && _ !== null && Ks(h, _, y, v, !0);
        }
      }
      e: {
        if (d = s ? Fr(s) : window, m = d.nodeName && d.nodeName.toLowerCase(), m === "select" || m === "input" && d.type === "file") var T = $m;
        else if (zs(d)) if (bd) T = Gm;
        else {
          T = Um;
          var C = jm;
        }
        else (m = d.nodeName) && m.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (T = zm);
        if (T && (T = T(e, s))) {
          Nd(h, T, r, c);
          break e;
        }
        C && C(e, d, s), e === "focusout" && (C = d._wrapperState) && C.controlled && d.type === "number" && qa(d, "number", d.value);
      }
      switch (C = s ? Fr(s) : window, e) {
        case "focusin":
          (zs(C) || C.contentEditable === "true") && (Ar = C, cl = s, Ln = null);
          break;
        case "focusout":
          Ln = cl = Ar = null;
          break;
        case "mousedown":
          fl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          fl = !1, Qs(h, r, c);
          break;
        case "selectionchange":
          if (Xm) break;
        case "keydown":
        case "keyup":
          Qs(h, r, c);
      }
      var D;
      if (Cu) e: {
        switch (e) {
          case "compositionstart":
            var E = "onCompositionStart";
            break e;
          case "compositionend":
            E = "onCompositionEnd";
            break e;
          case "compositionupdate":
            E = "onCompositionUpdate";
            break e;
        }
        E = void 0;
      }
      else Mr ? Pd(e, r) && (E = "onCompositionEnd") : e === "keydown" && r.keyCode === 229 && (E = "onCompositionStart");
      E && (Id && r.locale !== "ko" && (Mr || E !== "onCompositionStart" ? E === "onCompositionEnd" && Mr && (D = _d()) : (Gt = c, wu = "value" in Gt ? Gt.value : Gt.textContent, Mr = !0)), C = oo(s, E), 0 < C.length && (E = new Bs(E, e, null, r, c), h.push({ event: E, listeners: C }), D ? E.data = D : (D = kd(r), D !== null && (E.data = D)))), (D = Mm ? Am(e, r) : Hm(e, r)) && (s = oo(s, "onBeforeInput"), 0 < s.length && (c = new Bs("onBeforeInput", "beforeinput", null, r, c), h.push({ event: c, listeners: s }), c.data = D));
    }
    Ud(h, t);
  });
}
function Qn(e, t, r) {
  return { instance: e, listener: t, currentTarget: r };
}
function oo(e, t) {
  for (var r = t + "Capture", n = []; e !== null; ) {
    var i = e, o = i.stateNode;
    i.tag === 5 && o !== null && (i = o, o = jn(e, r), o != null && n.unshift(Qn(e, o, i)), o = jn(e, t), o != null && n.push(Qn(e, o, i))), e = e.return;
  }
  return n;
}
function Pr(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ks(e, t, r, n, i) {
  for (var o = t._reactName, a = []; r !== null && r !== n; ) {
    var l = r, u = l.alternate, s = l.stateNode;
    if (u !== null && u === n) break;
    l.tag === 5 && s !== null && (l = s, i ? (u = jn(r, o), u != null && a.unshift(Qn(r, u, l))) : i || (u = jn(r, o), u != null && a.push(Qn(r, u, l)))), r = r.return;
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var Km = /\r\n?/g, qm = /\u0000|\uFFFD/g;
function qs(e) {
  return (typeof e == "string" ? e : "" + e).replace(Km, `
`).replace(qm, "");
}
function Ei(e, t, r) {
  if (t = qs(t), qs(e) !== t && r) throw Error(w(425));
}
function ao() {
}
var dl = null, hl = null;
function pl(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var gl = typeof setTimeout == "function" ? setTimeout : void 0, Jm = typeof clearTimeout == "function" ? clearTimeout : void 0, Js = typeof Promise == "function" ? Promise : void 0, ev = typeof queueMicrotask == "function" ? queueMicrotask : typeof Js < "u" ? function(e) {
  return Js.resolve(null).then(e).catch(tv);
} : gl;
function tv(e) {
  setTimeout(function() {
    throw e;
  });
}
function xa(e, t) {
  var r = t, n = 0;
  do {
    var i = r.nextSibling;
    if (e.removeChild(r), i && i.nodeType === 8) if (r = i.data, r === "/$") {
      if (n === 0) {
        e.removeChild(i), Gn(t);
        return;
      }
      n--;
    } else r !== "$" && r !== "$?" && r !== "$!" || n++;
    r = i;
  } while (r);
  Gn(t);
}
function Yt(e) {
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
function ec(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var r = e.data;
      if (r === "$" || r === "$!" || r === "$?") {
        if (t === 0) return e;
        t--;
      } else r === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var cn = Math.random().toString(36).slice(2), Et = "__reactFiber$" + cn, Yn = "__reactProps$" + cn, Rt = "__reactContainer$" + cn, ml = "__reactEvents$" + cn, rv = "__reactListeners$" + cn, nv = "__reactHandles$" + cn;
function dr(e) {
  var t = e[Et];
  if (t) return t;
  for (var r = e.parentNode; r; ) {
    if (t = r[Rt] || r[Et]) {
      if (r = t.alternate, t.child !== null || r !== null && r.child !== null) for (e = ec(e); e !== null; ) {
        if (r = e[Et]) return r;
        e = ec(e);
      }
      return t;
    }
    e = r, r = e.parentNode;
  }
  return null;
}
function oi(e) {
  return e = e[Et] || e[Rt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Fr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(w(33));
}
function Po(e) {
  return e[Yn] || null;
}
var vl = [], Br = -1;
function nr(e) {
  return { current: e };
}
function K(e) {
  0 > Br || (e.current = vl[Br], vl[Br] = null, Br--);
}
function X(e, t) {
  Br++, vl[Br] = e.current, e.current = t;
}
var tr = {}, De = nr(tr), Be = nr(!1), vr = tr;
function qr(e, t) {
  var r = e.type.contextTypes;
  if (!r) return tr;
  var n = e.stateNode;
  if (n && n.__reactInternalMemoizedUnmaskedChildContext === t) return n.__reactInternalMemoizedMaskedChildContext;
  var i = {}, o;
  for (o in r) i[o] = t[o];
  return n && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i;
}
function $e(e) {
  return e = e.childContextTypes, e != null;
}
function lo() {
  K(Be), K(De);
}
function tc(e, t, r) {
  if (De.current !== tr) throw Error(w(168));
  X(De, t), X(Be, r);
}
function Gd(e, t, r) {
  var n = e.stateNode;
  if (t = t.childContextTypes, typeof n.getChildContext != "function") return r;
  n = n.getChildContext();
  for (var i in n) if (!(i in t)) throw Error(w(108, jg(e) || "Unknown", i));
  return te({}, r, n);
}
function uo(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || tr, vr = De.current, X(De, e), X(Be, Be.current), !0;
}
function rc(e, t, r) {
  var n = e.stateNode;
  if (!n) throw Error(w(169));
  r ? (e = Gd(e, t, vr), n.__reactInternalMemoizedMergedChildContext = e, K(Be), K(De), X(De, e)) : K(Be), X(Be, r);
}
var It = null, ko = !1, Ta = !1;
function Vd(e) {
  It === null ? It = [e] : It.push(e);
}
function iv(e) {
  ko = !0, Vd(e);
}
function ir() {
  if (!Ta && It !== null) {
    Ta = !0;
    var e = 0, t = V;
    try {
      var r = It;
      for (V = 1; e < r.length; e++) {
        var n = r[e];
        do
          n = n(!0);
        while (n !== null);
      }
      It = null, ko = !1;
    } catch (i) {
      throw It !== null && (It = It.slice(e + 1)), md(vu, ir), i;
    } finally {
      V = t, Ta = !1;
    }
  }
  return null;
}
var $r = [], jr = 0, so = null, co = 0, et = [], tt = 0, yr = null, Pt = 1, kt = "";
function ur(e, t) {
  $r[jr++] = co, $r[jr++] = so, so = e, co = t;
}
function Wd(e, t, r) {
  et[tt++] = Pt, et[tt++] = kt, et[tt++] = yr, yr = e;
  var n = Pt;
  e = kt;
  var i = 32 - pt(n) - 1;
  n &= ~(1 << i), r += 1;
  var o = 32 - pt(t) + i;
  if (30 < o) {
    var a = i - i % 5;
    o = (n & (1 << a) - 1).toString(32), n >>= a, i -= a, Pt = 1 << 32 - pt(t) + i | r << i | n, kt = o + e;
  } else Pt = 1 << o | r << i | n, kt = e;
}
function Du(e) {
  e.return !== null && (ur(e, 1), Wd(e, 1, 0));
}
function _u(e) {
  for (; e === so; ) so = $r[--jr], $r[jr] = null, co = $r[--jr], $r[jr] = null;
  for (; e === yr; ) yr = et[--tt], et[tt] = null, kt = et[--tt], et[tt] = null, Pt = et[--tt], et[tt] = null;
}
var Ve = null, Ge = null, q = !1, ht = null;
function Xd(e, t) {
  var r = nt(5, null, null, 0);
  r.elementType = "DELETED", r.stateNode = t, r.return = e, t = e.deletions, t === null ? (e.deletions = [r], e.flags |= 16) : t.push(r);
}
function nc(e, t) {
  switch (e.tag) {
    case 5:
      var r = e.type;
      return t = t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ve = e, Ge = Yt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ve = e, Ge = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (r = yr !== null ? { id: Pt, overflow: kt } : null, e.memoizedState = { dehydrated: t, treeContext: r, retryLane: 1073741824 }, r = nt(18, null, null, 0), r.stateNode = t, r.return = e, e.child = r, Ve = e, Ge = null, !0) : !1;
    default:
      return !1;
  }
}
function yl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Sl(e) {
  if (q) {
    var t = Ge;
    if (t) {
      var r = t;
      if (!nc(e, t)) {
        if (yl(e)) throw Error(w(418));
        t = Yt(r.nextSibling);
        var n = Ve;
        t && nc(e, t) ? Xd(n, r) : (e.flags = e.flags & -4097 | 2, q = !1, Ve = e);
      }
    } else {
      if (yl(e)) throw Error(w(418));
      e.flags = e.flags & -4097 | 2, q = !1, Ve = e;
    }
  }
}
function ic(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Ve = e;
}
function wi(e) {
  if (e !== Ve) return !1;
  if (!q) return ic(e), q = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !pl(e.type, e.memoizedProps)), t && (t = Ge)) {
    if (yl(e)) throw Qd(), Error(w(418));
    for (; t; ) Xd(e, t), t = Yt(t.nextSibling);
  }
  if (ic(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(w(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var r = e.data;
          if (r === "/$") {
            if (t === 0) {
              Ge = Yt(e.nextSibling);
              break e;
            }
            t--;
          } else r !== "$" && r !== "$!" && r !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Ge = null;
    }
  } else Ge = Ve ? Yt(e.stateNode.nextSibling) : null;
  return !0;
}
function Qd() {
  for (var e = Ge; e; ) e = Yt(e.nextSibling);
}
function Jr() {
  Ge = Ve = null, q = !1;
}
function Iu(e) {
  ht === null ? ht = [e] : ht.push(e);
}
var ov = At.ReactCurrentBatchConfig;
function Sn(e, t, r) {
  if (e = r.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (r._owner) {
      if (r = r._owner, r) {
        if (r.tag !== 1) throw Error(w(309));
        var n = r.stateNode;
      }
      if (!n) throw Error(w(147, e));
      var i = n, o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(a) {
        var l = i.refs;
        a === null ? delete l[o] : l[o] = a;
      }, t._stringRef = o, t);
    }
    if (typeof e != "string") throw Error(w(284));
    if (!r._owner) throw Error(w(290, e));
  }
  return e;
}
function xi(e, t) {
  throw e = Object.prototype.toString.call(t), Error(w(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function oc(e) {
  var t = e._init;
  return t(e._payload);
}
function Yd(e) {
  function t(p, f) {
    if (e) {
      var g = p.deletions;
      g === null ? (p.deletions = [f], p.flags |= 16) : g.push(f);
    }
  }
  function r(p, f) {
    if (!e) return null;
    for (; f !== null; ) t(p, f), f = f.sibling;
    return null;
  }
  function n(p, f) {
    for (p = /* @__PURE__ */ new Map(); f !== null; ) f.key !== null ? p.set(f.key, f) : p.set(f.index, f), f = f.sibling;
    return p;
  }
  function i(p, f) {
    return p = Jt(p, f), p.index = 0, p.sibling = null, p;
  }
  function o(p, f, g) {
    return p.index = g, e ? (g = p.alternate, g !== null ? (g = g.index, g < f ? (p.flags |= 2, f) : g) : (p.flags |= 2, f)) : (p.flags |= 1048576, f);
  }
  function a(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function l(p, f, g, S) {
    return f === null || f.tag !== 6 ? (f = ka(g, p.mode, S), f.return = p, f) : (f = i(f, g), f.return = p, f);
  }
  function u(p, f, g, S) {
    var T = g.type;
    return T === Lr ? c(p, f, g.props.children, S, g.key) : f !== null && (f.elementType === T || typeof T == "object" && T !== null && T.$$typeof === Bt && oc(T) === f.type) ? (S = i(f, g.props), S.ref = Sn(p, f, g), S.return = p, S) : (S = Vi(g.type, g.key, g.props, null, p.mode, S), S.ref = Sn(p, f, g), S.return = p, S);
  }
  function s(p, f, g, S) {
    return f === null || f.tag !== 4 || f.stateNode.containerInfo !== g.containerInfo || f.stateNode.implementation !== g.implementation ? (f = Na(g, p.mode, S), f.return = p, f) : (f = i(f, g.children || []), f.return = p, f);
  }
  function c(p, f, g, S, T) {
    return f === null || f.tag !== 7 ? (f = mr(g, p.mode, S, T), f.return = p, f) : (f = i(f, g), f.return = p, f);
  }
  function h(p, f, g) {
    if (typeof f == "string" && f !== "" || typeof f == "number") return f = ka("" + f, p.mode, g), f.return = p, f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case fi:
          return g = Vi(f.type, f.key, f.props, null, p.mode, g), g.ref = Sn(p, null, f), g.return = p, g;
        case Rr:
          return f = Na(f, p.mode, g), f.return = p, f;
        case Bt:
          var S = f._init;
          return h(p, S(f._payload), g);
      }
      if (On(f) || pn(f)) return f = mr(f, p.mode, g, null), f.return = p, f;
      xi(p, f);
    }
    return null;
  }
  function d(p, f, g, S) {
    var T = f !== null ? f.key : null;
    if (typeof g == "string" && g !== "" || typeof g == "number") return T !== null ? null : l(p, f, "" + g, S);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case fi:
          return g.key === T ? u(p, f, g, S) : null;
        case Rr:
          return g.key === T ? s(p, f, g, S) : null;
        case Bt:
          return T = g._init, d(
            p,
            f,
            T(g._payload),
            S
          );
      }
      if (On(g) || pn(g)) return T !== null ? null : c(p, f, g, S, null);
      xi(p, g);
    }
    return null;
  }
  function m(p, f, g, S, T) {
    if (typeof S == "string" && S !== "" || typeof S == "number") return p = p.get(g) || null, l(f, p, "" + S, T);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case fi:
          return p = p.get(S.key === null ? g : S.key) || null, u(f, p, S, T);
        case Rr:
          return p = p.get(S.key === null ? g : S.key) || null, s(f, p, S, T);
        case Bt:
          var C = S._init;
          return m(p, f, g, C(S._payload), T);
      }
      if (On(S) || pn(S)) return p = p.get(g) || null, c(f, p, S, T, null);
      xi(f, S);
    }
    return null;
  }
  function y(p, f, g, S) {
    for (var T = null, C = null, D = f, E = f = 0, A = null; D !== null && E < g.length; E++) {
      D.index > E ? (A = D, D = null) : A = D.sibling;
      var R = d(p, D, g[E], S);
      if (R === null) {
        D === null && (D = A);
        break;
      }
      e && D && R.alternate === null && t(p, D), f = o(R, f, E), C === null ? T = R : C.sibling = R, C = R, D = A;
    }
    if (E === g.length) return r(p, D), q && ur(p, E), T;
    if (D === null) {
      for (; E < g.length; E++) D = h(p, g[E], S), D !== null && (f = o(D, f, E), C === null ? T = D : C.sibling = D, C = D);
      return q && ur(p, E), T;
    }
    for (D = n(p, D); E < g.length; E++) A = m(D, p, E, g[E], S), A !== null && (e && A.alternate !== null && D.delete(A.key === null ? E : A.key), f = o(A, f, E), C === null ? T = A : C.sibling = A, C = A);
    return e && D.forEach(function(G) {
      return t(p, G);
    }), q && ur(p, E), T;
  }
  function v(p, f, g, S) {
    var T = pn(g);
    if (typeof T != "function") throw Error(w(150));
    if (g = T.call(g), g == null) throw Error(w(151));
    for (var C = T = null, D = f, E = f = 0, A = null, R = g.next(); D !== null && !R.done; E++, R = g.next()) {
      D.index > E ? (A = D, D = null) : A = D.sibling;
      var G = d(p, D, R.value, S);
      if (G === null) {
        D === null && (D = A);
        break;
      }
      e && D && G.alternate === null && t(p, D), f = o(G, f, E), C === null ? T = G : C.sibling = G, C = G, D = A;
    }
    if (R.done) return r(
      p,
      D
    ), q && ur(p, E), T;
    if (D === null) {
      for (; !R.done; E++, R = g.next()) R = h(p, R.value, S), R !== null && (f = o(R, f, E), C === null ? T = R : C.sibling = R, C = R);
      return q && ur(p, E), T;
    }
    for (D = n(p, D); !R.done; E++, R = g.next()) R = m(D, p, E, R.value, S), R !== null && (e && R.alternate !== null && D.delete(R.key === null ? E : R.key), f = o(R, f, E), C === null ? T = R : C.sibling = R, C = R);
    return e && D.forEach(function(fe) {
      return t(p, fe);
    }), q && ur(p, E), T;
  }
  function _(p, f, g, S) {
    if (typeof g == "object" && g !== null && g.type === Lr && g.key === null && (g = g.props.children), typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case fi:
          e: {
            for (var T = g.key, C = f; C !== null; ) {
              if (C.key === T) {
                if (T = g.type, T === Lr) {
                  if (C.tag === 7) {
                    r(p, C.sibling), f = i(C, g.props.children), f.return = p, p = f;
                    break e;
                  }
                } else if (C.elementType === T || typeof T == "object" && T !== null && T.$$typeof === Bt && oc(T) === C.type) {
                  r(p, C.sibling), f = i(C, g.props), f.ref = Sn(p, C, g), f.return = p, p = f;
                  break e;
                }
                r(p, C);
                break;
              } else t(p, C);
              C = C.sibling;
            }
            g.type === Lr ? (f = mr(g.props.children, p.mode, S, g.key), f.return = p, p = f) : (S = Vi(g.type, g.key, g.props, null, p.mode, S), S.ref = Sn(p, f, g), S.return = p, p = S);
          }
          return a(p);
        case Rr:
          e: {
            for (C = g.key; f !== null; ) {
              if (f.key === C) if (f.tag === 4 && f.stateNode.containerInfo === g.containerInfo && f.stateNode.implementation === g.implementation) {
                r(p, f.sibling), f = i(f, g.children || []), f.return = p, p = f;
                break e;
              } else {
                r(p, f);
                break;
              }
              else t(p, f);
              f = f.sibling;
            }
            f = Na(g, p.mode, S), f.return = p, p = f;
          }
          return a(p);
        case Bt:
          return C = g._init, _(p, f, C(g._payload), S);
      }
      if (On(g)) return y(p, f, g, S);
      if (pn(g)) return v(p, f, g, S);
      xi(p, g);
    }
    return typeof g == "string" && g !== "" || typeof g == "number" ? (g = "" + g, f !== null && f.tag === 6 ? (r(p, f.sibling), f = i(f, g), f.return = p, p = f) : (r(p, f), f = ka(g, p.mode, S), f.return = p, p = f), a(p)) : r(p, f);
  }
  return _;
}
var en = Yd(!0), Zd = Yd(!1), fo = nr(null), ho = null, Ur = null, Pu = null;
function ku() {
  Pu = Ur = ho = null;
}
function Nu(e) {
  var t = fo.current;
  K(fo), e._currentValue = t;
}
function El(e, t, r) {
  for (; e !== null; ) {
    var n = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, n !== null && (n.childLanes |= t)) : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t), e === r) break;
    e = e.return;
  }
}
function Yr(e, t) {
  ho = e, Pu = Ur = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Fe = !0), e.firstContext = null);
}
function ot(e) {
  var t = e._currentValue;
  if (Pu !== e) if (e = { context: e, memoizedValue: t, next: null }, Ur === null) {
    if (ho === null) throw Error(w(308));
    Ur = e, ho.dependencies = { lanes: 0, firstContext: e };
  } else Ur = Ur.next = e;
  return t;
}
var hr = null;
function bu(e) {
  hr === null ? hr = [e] : hr.push(e);
}
function Kd(e, t, r, n) {
  var i = t.interleaved;
  return i === null ? (r.next = r, bu(t)) : (r.next = i.next, i.next = r), t.interleaved = r, Lt(e, n);
}
function Lt(e, t) {
  e.lanes |= t;
  var r = e.alternate;
  for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; ) e.childLanes |= t, r = e.alternate, r !== null && (r.childLanes |= t), r = e, e = e.return;
  return r.tag === 3 ? r.stateNode : null;
}
var $t = !1;
function Ru(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function qd(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Nt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Zt(e, t, r) {
  var n = e.updateQueue;
  if (n === null) return null;
  if (n = n.shared, U & 2) {
    var i = n.pending;
    return i === null ? t.next = t : (t.next = i.next, i.next = t), n.pending = t, Lt(e, r);
  }
  return i = n.interleaved, i === null ? (t.next = t, bu(n)) : (t.next = i.next, i.next = t), n.interleaved = t, Lt(e, r);
}
function Bi(e, t, r) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (r & 4194240) !== 0)) {
    var n = t.lanes;
    n &= e.pendingLanes, r |= n, t.lanes = r, yu(e, r);
  }
}
function ac(e, t) {
  var r = e.updateQueue, n = e.alternate;
  if (n !== null && (n = n.updateQueue, r === n)) {
    var i = null, o = null;
    if (r = r.firstBaseUpdate, r !== null) {
      do {
        var a = { eventTime: r.eventTime, lane: r.lane, tag: r.tag, payload: r.payload, callback: r.callback, next: null };
        o === null ? i = o = a : o = o.next = a, r = r.next;
      } while (r !== null);
      o === null ? i = o = t : o = o.next = t;
    } else i = o = t;
    r = { baseState: n.baseState, firstBaseUpdate: i, lastBaseUpdate: o, shared: n.shared, effects: n.effects }, e.updateQueue = r;
    return;
  }
  e = r.lastBaseUpdate, e === null ? r.firstBaseUpdate = t : e.next = t, r.lastBaseUpdate = t;
}
function po(e, t, r, n) {
  var i = e.updateQueue;
  $t = !1;
  var o = i.firstBaseUpdate, a = i.lastBaseUpdate, l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var u = l, s = u.next;
    u.next = null, a === null ? o = s : a.next = s, a = u;
    var c = e.alternate;
    c !== null && (c = c.updateQueue, l = c.lastBaseUpdate, l !== a && (l === null ? c.firstBaseUpdate = s : l.next = s, c.lastBaseUpdate = u));
  }
  if (o !== null) {
    var h = i.baseState;
    a = 0, c = s = u = null, l = o;
    do {
      var d = l.lane, m = l.eventTime;
      if ((n & d) === d) {
        c !== null && (c = c.next = {
          eventTime: m,
          lane: 0,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null
        });
        e: {
          var y = e, v = l;
          switch (d = t, m = r, v.tag) {
            case 1:
              if (y = v.payload, typeof y == "function") {
                h = y.call(m, h, d);
                break e;
              }
              h = y;
              break e;
            case 3:
              y.flags = y.flags & -65537 | 128;
            case 0:
              if (y = v.payload, d = typeof y == "function" ? y.call(m, h, d) : y, d == null) break e;
              h = te({}, h, d);
              break e;
            case 2:
              $t = !0;
          }
        }
        l.callback !== null && l.lane !== 0 && (e.flags |= 64, d = i.effects, d === null ? i.effects = [l] : d.push(l));
      } else m = { eventTime: m, lane: d, tag: l.tag, payload: l.payload, callback: l.callback, next: null }, c === null ? (s = c = m, u = h) : c = c.next = m, a |= d;
      if (l = l.next, l === null) {
        if (l = i.shared.pending, l === null) break;
        d = l, l = d.next, d.next = null, i.lastBaseUpdate = d, i.shared.pending = null;
      }
    } while (!0);
    if (c === null && (u = h), i.baseState = u, i.firstBaseUpdate = s, i.lastBaseUpdate = c, t = i.shared.interleaved, t !== null) {
      i = t;
      do
        a |= i.lane, i = i.next;
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    Er |= a, e.lanes = a, e.memoizedState = h;
  }
}
function lc(e, t, r) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var n = e[t], i = n.callback;
    if (i !== null) {
      if (n.callback = null, n = r, typeof i != "function") throw Error(w(191, i));
      i.call(n);
    }
  }
}
var ai = {}, xt = nr(ai), Zn = nr(ai), Kn = nr(ai);
function pr(e) {
  if (e === ai) throw Error(w(174));
  return e;
}
function Lu(e, t) {
  switch (X(Kn, t), X(Zn, e), X(xt, ai), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : el(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = el(t, e);
  }
  K(xt), X(xt, t);
}
function tn() {
  K(xt), K(Zn), K(Kn);
}
function Jd(e) {
  pr(Kn.current);
  var t = pr(xt.current), r = el(t, e.type);
  t !== r && (X(Zn, e), X(xt, r));
}
function Mu(e) {
  Zn.current === e && (K(xt), K(Zn));
}
var J = nr(0);
function go(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var r = t.memoizedState;
      if (r !== null && (r = r.dehydrated, r === null || r.data === "$?" || r.data === "$!")) return t;
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
var Ca = [];
function Au() {
  for (var e = 0; e < Ca.length; e++) Ca[e]._workInProgressVersionPrimary = null;
  Ca.length = 0;
}
var $i = At.ReactCurrentDispatcher, Oa = At.ReactCurrentBatchConfig, Sr = 0, ee = null, se = null, pe = null, mo = !1, Mn = !1, qn = 0, av = 0;
function xe() {
  throw Error(w(321));
}
function Hu(e, t) {
  if (t === null) return !1;
  for (var r = 0; r < t.length && r < e.length; r++) if (!mt(e[r], t[r])) return !1;
  return !0;
}
function Fu(e, t, r, n, i, o) {
  if (Sr = o, ee = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, $i.current = e === null || e.memoizedState === null ? cv : fv, e = r(n, i), Mn) {
    o = 0;
    do {
      if (Mn = !1, qn = 0, 25 <= o) throw Error(w(301));
      o += 1, pe = se = null, t.updateQueue = null, $i.current = dv, e = r(n, i);
    } while (Mn);
  }
  if ($i.current = vo, t = se !== null && se.next !== null, Sr = 0, pe = se = ee = null, mo = !1, t) throw Error(w(300));
  return e;
}
function Bu() {
  var e = qn !== 0;
  return qn = 0, e;
}
function St() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return pe === null ? ee.memoizedState = pe = e : pe = pe.next = e, pe;
}
function at() {
  if (se === null) {
    var e = ee.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = se.next;
  var t = pe === null ? ee.memoizedState : pe.next;
  if (t !== null) pe = t, se = e;
  else {
    if (e === null) throw Error(w(310));
    se = e, e = { memoizedState: se.memoizedState, baseState: se.baseState, baseQueue: se.baseQueue, queue: se.queue, next: null }, pe === null ? ee.memoizedState = pe = e : pe = pe.next = e;
  }
  return pe;
}
function Jn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Da(e) {
  var t = at(), r = t.queue;
  if (r === null) throw Error(w(311));
  r.lastRenderedReducer = e;
  var n = se, i = n.baseQueue, o = r.pending;
  if (o !== null) {
    if (i !== null) {
      var a = i.next;
      i.next = o.next, o.next = a;
    }
    n.baseQueue = i = o, r.pending = null;
  }
  if (i !== null) {
    o = i.next, n = n.baseState;
    var l = a = null, u = null, s = o;
    do {
      var c = s.lane;
      if ((Sr & c) === c) u !== null && (u = u.next = { lane: 0, action: s.action, hasEagerState: s.hasEagerState, eagerState: s.eagerState, next: null }), n = s.hasEagerState ? s.eagerState : e(n, s.action);
      else {
        var h = {
          lane: c,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null
        };
        u === null ? (l = u = h, a = n) : u = u.next = h, ee.lanes |= c, Er |= c;
      }
      s = s.next;
    } while (s !== null && s !== o);
    u === null ? a = n : u.next = l, mt(n, t.memoizedState) || (Fe = !0), t.memoizedState = n, t.baseState = a, t.baseQueue = u, r.lastRenderedState = n;
  }
  if (e = r.interleaved, e !== null) {
    i = e;
    do
      o = i.lane, ee.lanes |= o, Er |= o, i = i.next;
    while (i !== e);
  } else i === null && (r.lanes = 0);
  return [t.memoizedState, r.dispatch];
}
function _a(e) {
  var t = at(), r = t.queue;
  if (r === null) throw Error(w(311));
  r.lastRenderedReducer = e;
  var n = r.dispatch, i = r.pending, o = t.memoizedState;
  if (i !== null) {
    r.pending = null;
    var a = i = i.next;
    do
      o = e(o, a.action), a = a.next;
    while (a !== i);
    mt(o, t.memoizedState) || (Fe = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), r.lastRenderedState = o;
  }
  return [o, n];
}
function eh() {
}
function th(e, t) {
  var r = ee, n = at(), i = t(), o = !mt(n.memoizedState, i);
  if (o && (n.memoizedState = i, Fe = !0), n = n.queue, $u(ih.bind(null, r, n, e), [e]), n.getSnapshot !== t || o || pe !== null && pe.memoizedState.tag & 1) {
    if (r.flags |= 2048, ei(9, nh.bind(null, r, n, i, t), void 0, null), ge === null) throw Error(w(349));
    Sr & 30 || rh(r, t, i);
  }
  return i;
}
function rh(e, t, r) {
  e.flags |= 16384, e = { getSnapshot: t, value: r }, t = ee.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ee.updateQueue = t, t.stores = [e]) : (r = t.stores, r === null ? t.stores = [e] : r.push(e));
}
function nh(e, t, r, n) {
  t.value = r, t.getSnapshot = n, oh(t) && ah(e);
}
function ih(e, t, r) {
  return r(function() {
    oh(t) && ah(e);
  });
}
function oh(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var r = t();
    return !mt(e, r);
  } catch {
    return !0;
  }
}
function ah(e) {
  var t = Lt(e, 1);
  t !== null && gt(t, e, 1, -1);
}
function uc(e) {
  var t = St();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Jn, lastRenderedState: e }, t.queue = e, e = e.dispatch = sv.bind(null, ee, e), [t.memoizedState, e];
}
function ei(e, t, r, n) {
  return e = { tag: e, create: t, destroy: r, deps: n, next: null }, t = ee.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ee.updateQueue = t, t.lastEffect = e.next = e) : (r = t.lastEffect, r === null ? t.lastEffect = e.next = e : (n = r.next, r.next = e, e.next = n, t.lastEffect = e)), e;
}
function lh() {
  return at().memoizedState;
}
function ji(e, t, r, n) {
  var i = St();
  ee.flags |= e, i.memoizedState = ei(1 | t, r, void 0, n === void 0 ? null : n);
}
function No(e, t, r, n) {
  var i = at();
  n = n === void 0 ? null : n;
  var o = void 0;
  if (se !== null) {
    var a = se.memoizedState;
    if (o = a.destroy, n !== null && Hu(n, a.deps)) {
      i.memoizedState = ei(t, r, o, n);
      return;
    }
  }
  ee.flags |= e, i.memoizedState = ei(1 | t, r, o, n);
}
function sc(e, t) {
  return ji(8390656, 8, e, t);
}
function $u(e, t) {
  return No(2048, 8, e, t);
}
function uh(e, t) {
  return No(4, 2, e, t);
}
function sh(e, t) {
  return No(4, 4, e, t);
}
function ch(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function fh(e, t, r) {
  return r = r != null ? r.concat([e]) : null, No(4, 4, ch.bind(null, t, e), r);
}
function ju() {
}
function dh(e, t) {
  var r = at();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && Hu(t, n[1]) ? n[0] : (r.memoizedState = [e, t], e);
}
function hh(e, t) {
  var r = at();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && Hu(t, n[1]) ? n[0] : (e = e(), r.memoizedState = [e, t], e);
}
function ph(e, t, r) {
  return Sr & 21 ? (mt(r, t) || (r = Sd(), ee.lanes |= r, Er |= r, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Fe = !0), e.memoizedState = r);
}
function lv(e, t) {
  var r = V;
  V = r !== 0 && 4 > r ? r : 4, e(!0);
  var n = Oa.transition;
  Oa.transition = {};
  try {
    e(!1), t();
  } finally {
    V = r, Oa.transition = n;
  }
}
function gh() {
  return at().memoizedState;
}
function uv(e, t, r) {
  var n = qt(e);
  if (r = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null }, mh(e)) vh(t, r);
  else if (r = Kd(e, t, r, n), r !== null) {
    var i = Le();
    gt(r, e, n, i), yh(r, t, n);
  }
}
function sv(e, t, r) {
  var n = qt(e), i = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null };
  if (mh(e)) vh(t, i);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
      var a = t.lastRenderedState, l = o(a, r);
      if (i.hasEagerState = !0, i.eagerState = l, mt(l, a)) {
        var u = t.interleaved;
        u === null ? (i.next = i, bu(t)) : (i.next = u.next, u.next = i), t.interleaved = i;
        return;
      }
    } catch {
    } finally {
    }
    r = Kd(e, t, i, n), r !== null && (i = Le(), gt(r, e, n, i), yh(r, t, n));
  }
}
function mh(e) {
  var t = e.alternate;
  return e === ee || t !== null && t === ee;
}
function vh(e, t) {
  Mn = mo = !0;
  var r = e.pending;
  r === null ? t.next = t : (t.next = r.next, r.next = t), e.pending = t;
}
function yh(e, t, r) {
  if (r & 4194240) {
    var n = t.lanes;
    n &= e.pendingLanes, r |= n, t.lanes = r, yu(e, r);
  }
}
var vo = { readContext: ot, useCallback: xe, useContext: xe, useEffect: xe, useImperativeHandle: xe, useInsertionEffect: xe, useLayoutEffect: xe, useMemo: xe, useReducer: xe, useRef: xe, useState: xe, useDebugValue: xe, useDeferredValue: xe, useTransition: xe, useMutableSource: xe, useSyncExternalStore: xe, useId: xe, unstable_isNewReconciler: !1 }, cv = { readContext: ot, useCallback: function(e, t) {
  return St().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: ot, useEffect: sc, useImperativeHandle: function(e, t, r) {
  return r = r != null ? r.concat([e]) : null, ji(
    4194308,
    4,
    ch.bind(null, t, e),
    r
  );
}, useLayoutEffect: function(e, t) {
  return ji(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return ji(4, 2, e, t);
}, useMemo: function(e, t) {
  var r = St();
  return t = t === void 0 ? null : t, e = e(), r.memoizedState = [e, t], e;
}, useReducer: function(e, t, r) {
  var n = St();
  return t = r !== void 0 ? r(t) : t, n.memoizedState = n.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, n.queue = e, e = e.dispatch = uv.bind(null, ee, e), [n.memoizedState, e];
}, useRef: function(e) {
  var t = St();
  return e = { current: e }, t.memoizedState = e;
}, useState: uc, useDebugValue: ju, useDeferredValue: function(e) {
  return St().memoizedState = e;
}, useTransition: function() {
  var e = uc(!1), t = e[0];
  return e = lv.bind(null, e[1]), St().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, r) {
  var n = ee, i = St();
  if (q) {
    if (r === void 0) throw Error(w(407));
    r = r();
  } else {
    if (r = t(), ge === null) throw Error(w(349));
    Sr & 30 || rh(n, t, r);
  }
  i.memoizedState = r;
  var o = { value: r, getSnapshot: t };
  return i.queue = o, sc(ih.bind(
    null,
    n,
    o,
    e
  ), [e]), n.flags |= 2048, ei(9, nh.bind(null, n, o, r, t), void 0, null), r;
}, useId: function() {
  var e = St(), t = ge.identifierPrefix;
  if (q) {
    var r = kt, n = Pt;
    r = (n & ~(1 << 32 - pt(n) - 1)).toString(32) + r, t = ":" + t + "R" + r, r = qn++, 0 < r && (t += "H" + r.toString(32)), t += ":";
  } else r = av++, t = ":" + t + "r" + r.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, fv = {
  readContext: ot,
  useCallback: dh,
  useContext: ot,
  useEffect: $u,
  useImperativeHandle: fh,
  useInsertionEffect: uh,
  useLayoutEffect: sh,
  useMemo: hh,
  useReducer: Da,
  useRef: lh,
  useState: function() {
    return Da(Jn);
  },
  useDebugValue: ju,
  useDeferredValue: function(e) {
    var t = at();
    return ph(t, se.memoizedState, e);
  },
  useTransition: function() {
    var e = Da(Jn)[0], t = at().memoizedState;
    return [e, t];
  },
  useMutableSource: eh,
  useSyncExternalStore: th,
  useId: gh,
  unstable_isNewReconciler: !1
}, dv = { readContext: ot, useCallback: dh, useContext: ot, useEffect: $u, useImperativeHandle: fh, useInsertionEffect: uh, useLayoutEffect: sh, useMemo: hh, useReducer: _a, useRef: lh, useState: function() {
  return _a(Jn);
}, useDebugValue: ju, useDeferredValue: function(e) {
  var t = at();
  return se === null ? t.memoizedState = e : ph(t, se.memoizedState, e);
}, useTransition: function() {
  var e = _a(Jn)[0], t = at().memoizedState;
  return [e, t];
}, useMutableSource: eh, useSyncExternalStore: th, useId: gh, unstable_isNewReconciler: !1 };
function ft(e, t) {
  if (e && e.defaultProps) {
    t = te({}, t), e = e.defaultProps;
    for (var r in e) t[r] === void 0 && (t[r] = e[r]);
    return t;
  }
  return t;
}
function wl(e, t, r, n) {
  t = e.memoizedState, r = r(n, t), r = r == null ? t : te({}, t, r), e.memoizedState = r, e.lanes === 0 && (e.updateQueue.baseState = r);
}
var bo = { isMounted: function(e) {
  return (e = e._reactInternals) ? Or(e) === e : !1;
}, enqueueSetState: function(e, t, r) {
  e = e._reactInternals;
  var n = Le(), i = qt(e), o = Nt(n, i);
  o.payload = t, r != null && (o.callback = r), t = Zt(e, o, i), t !== null && (gt(t, e, i, n), Bi(t, e, i));
}, enqueueReplaceState: function(e, t, r) {
  e = e._reactInternals;
  var n = Le(), i = qt(e), o = Nt(n, i);
  o.tag = 1, o.payload = t, r != null && (o.callback = r), t = Zt(e, o, i), t !== null && (gt(t, e, i, n), Bi(t, e, i));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var r = Le(), n = qt(e), i = Nt(r, n);
  i.tag = 2, t != null && (i.callback = t), t = Zt(e, i, n), t !== null && (gt(t, e, n, r), Bi(t, e, n));
} };
function cc(e, t, r, n, i, o, a) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, o, a) : t.prototype && t.prototype.isPureReactComponent ? !Wn(r, n) || !Wn(i, o) : !0;
}
function Sh(e, t, r) {
  var n = !1, i = tr, o = t.contextType;
  return typeof o == "object" && o !== null ? o = ot(o) : (i = $e(t) ? vr : De.current, n = t.contextTypes, o = (n = n != null) ? qr(e, i) : tr), t = new t(r, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = bo, e.stateNode = t, t._reactInternals = e, n && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function fc(e, t, r, n) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(r, n), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(r, n), t.state !== e && bo.enqueueReplaceState(t, t.state, null);
}
function xl(e, t, r, n) {
  var i = e.stateNode;
  i.props = r, i.state = e.memoizedState, i.refs = {}, Ru(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? i.context = ot(o) : (o = $e(t) ? vr : De.current, i.context = qr(e, o)), i.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (wl(e, t, o, r), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && bo.enqueueReplaceState(i, i.state, null), po(e, r, i, n), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function rn(e, t) {
  try {
    var r = "", n = t;
    do
      r += $g(n), n = n.return;
    while (n);
    var i = r;
  } catch (o) {
    i = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Ia(e, t, r) {
  return { value: e, source: null, stack: r ?? null, digest: t ?? null };
}
function Tl(e, t) {
  try {
    console.error(t.value);
  } catch (r) {
    setTimeout(function() {
      throw r;
    });
  }
}
var hv = typeof WeakMap == "function" ? WeakMap : Map;
function Eh(e, t, r) {
  r = Nt(-1, r), r.tag = 3, r.payload = { element: null };
  var n = t.value;
  return r.callback = function() {
    So || (So = !0, Rl = n), Tl(e, t);
  }, r;
}
function wh(e, t, r) {
  r = Nt(-1, r), r.tag = 3;
  var n = e.type.getDerivedStateFromError;
  if (typeof n == "function") {
    var i = t.value;
    r.payload = function() {
      return n(i);
    }, r.callback = function() {
      Tl(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (r.callback = function() {
    Tl(e, t), typeof n != "function" && (Kt === null ? Kt = /* @__PURE__ */ new Set([this]) : Kt.add(this));
    var a = t.stack;
    this.componentDidCatch(t.value, { componentStack: a !== null ? a : "" });
  }), r;
}
function dc(e, t, r) {
  var n = e.pingCache;
  if (n === null) {
    n = e.pingCache = new hv();
    var i = /* @__PURE__ */ new Set();
    n.set(t, i);
  } else i = n.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), n.set(t, i));
  i.has(r) || (i.add(r), e = _v.bind(null, e, t, r), t.then(e, e));
}
function hc(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function pc(e, t, r, n, i) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, r.flags |= 131072, r.flags &= -52805, r.tag === 1 && (r.alternate === null ? r.tag = 17 : (t = Nt(-1, 1), t.tag = 2, Zt(r, t, 1))), r.lanes |= 1), e);
}
var pv = At.ReactCurrentOwner, Fe = !1;
function ke(e, t, r, n) {
  t.child = e === null ? Zd(t, null, r, n) : en(t, e.child, r, n);
}
function gc(e, t, r, n, i) {
  r = r.render;
  var o = t.ref;
  return Yr(t, i), n = Fu(e, t, r, n, o, i), r = Bu(), e !== null && !Fe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Mt(e, t, i)) : (q && r && Du(t), t.flags |= 1, ke(e, t, n, i), t.child);
}
function mc(e, t, r, n, i) {
  if (e === null) {
    var o = r.type;
    return typeof o == "function" && !Yu(o) && o.defaultProps === void 0 && r.compare === null && r.defaultProps === void 0 ? (t.tag = 15, t.type = o, xh(e, t, o, n, i)) : (e = Vi(r.type, null, n, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & i)) {
    var a = o.memoizedProps;
    if (r = r.compare, r = r !== null ? r : Wn, r(a, n) && e.ref === t.ref) return Mt(e, t, i);
  }
  return t.flags |= 1, e = Jt(o, n), e.ref = t.ref, e.return = t, t.child = e;
}
function xh(e, t, r, n, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Wn(o, n) && e.ref === t.ref) if (Fe = !1, t.pendingProps = n = o, (e.lanes & i) !== 0) e.flags & 131072 && (Fe = !0);
    else return t.lanes = e.lanes, Mt(e, t, i);
  }
  return Cl(e, t, r, n, i);
}
function Th(e, t, r) {
  var n = t.pendingProps, i = n.children, o = e !== null ? e.memoizedState : null;
  if (n.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, X(Gr, ze), ze |= r;
  else {
    if (!(r & 1073741824)) return e = o !== null ? o.baseLanes | r : r, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, X(Gr, ze), ze |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, n = o !== null ? o.baseLanes : r, X(Gr, ze), ze |= n;
  }
  else o !== null ? (n = o.baseLanes | r, t.memoizedState = null) : n = r, X(Gr, ze), ze |= n;
  return ke(e, t, i, r), t.child;
}
function Ch(e, t) {
  var r = t.ref;
  (e === null && r !== null || e !== null && e.ref !== r) && (t.flags |= 512, t.flags |= 2097152);
}
function Cl(e, t, r, n, i) {
  var o = $e(r) ? vr : De.current;
  return o = qr(t, o), Yr(t, i), r = Fu(e, t, r, n, o, i), n = Bu(), e !== null && !Fe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Mt(e, t, i)) : (q && n && Du(t), t.flags |= 1, ke(e, t, r, i), t.child);
}
function vc(e, t, r, n, i) {
  if ($e(r)) {
    var o = !0;
    uo(t);
  } else o = !1;
  if (Yr(t, i), t.stateNode === null) Ui(e, t), Sh(t, r, n), xl(t, r, n, i), n = !0;
  else if (e === null) {
    var a = t.stateNode, l = t.memoizedProps;
    a.props = l;
    var u = a.context, s = r.contextType;
    typeof s == "object" && s !== null ? s = ot(s) : (s = $e(r) ? vr : De.current, s = qr(t, s));
    var c = r.getDerivedStateFromProps, h = typeof c == "function" || typeof a.getSnapshotBeforeUpdate == "function";
    h || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (l !== n || u !== s) && fc(t, a, n, s), $t = !1;
    var d = t.memoizedState;
    a.state = d, po(t, n, a, i), u = t.memoizedState, l !== n || d !== u || Be.current || $t ? (typeof c == "function" && (wl(t, r, c, n), u = t.memoizedState), (l = $t || cc(t, r, l, n, d, u, s)) ? (h || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = n, t.memoizedState = u), a.props = n, a.state = u, a.context = s, n = l) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), n = !1);
  } else {
    a = t.stateNode, qd(e, t), l = t.memoizedProps, s = t.type === t.elementType ? l : ft(t.type, l), a.props = s, h = t.pendingProps, d = a.context, u = r.contextType, typeof u == "object" && u !== null ? u = ot(u) : (u = $e(r) ? vr : De.current, u = qr(t, u));
    var m = r.getDerivedStateFromProps;
    (c = typeof m == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (l !== h || d !== u) && fc(t, a, n, u), $t = !1, d = t.memoizedState, a.state = d, po(t, n, a, i);
    var y = t.memoizedState;
    l !== h || d !== y || Be.current || $t ? (typeof m == "function" && (wl(t, r, m, n), y = t.memoizedState), (s = $t || cc(t, r, s, n, d, y, u) || !1) ? (c || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(n, y, u), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(n, y, u)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), t.memoizedProps = n, t.memoizedState = y), a.props = n, a.state = y, a.context = u, n = s) : (typeof a.componentDidUpdate != "function" || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), n = !1);
  }
  return Ol(e, t, r, n, o, i);
}
function Ol(e, t, r, n, i, o) {
  Ch(e, t);
  var a = (t.flags & 128) !== 0;
  if (!n && !a) return i && rc(t, r, !1), Mt(e, t, o);
  n = t.stateNode, pv.current = t;
  var l = a && typeof r.getDerivedStateFromError != "function" ? null : n.render();
  return t.flags |= 1, e !== null && a ? (t.child = en(t, e.child, null, o), t.child = en(t, null, l, o)) : ke(e, t, l, o), t.memoizedState = n.state, i && rc(t, r, !0), t.child;
}
function Oh(e) {
  var t = e.stateNode;
  t.pendingContext ? tc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && tc(e, t.context, !1), Lu(e, t.containerInfo);
}
function yc(e, t, r, n, i) {
  return Jr(), Iu(i), t.flags |= 256, ke(e, t, r, n), t.child;
}
var Dl = { dehydrated: null, treeContext: null, retryLane: 0 };
function _l(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Dh(e, t, r) {
  var n = t.pendingProps, i = J.current, o = !1, a = (t.flags & 128) !== 0, l;
  if ((l = a) || (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), l ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), X(J, i & 1), e === null)
    return Sl(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (a = n.children, e = n.fallback, o ? (n = t.mode, o = t.child, a = { mode: "hidden", children: a }, !(n & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = a) : o = Mo(a, n, 0, null), e = mr(e, n, r, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = _l(r), t.memoizedState = Dl, e) : Uu(t, a));
  if (i = e.memoizedState, i !== null && (l = i.dehydrated, l !== null)) return gv(e, t, a, n, l, i, r);
  if (o) {
    o = n.fallback, a = t.mode, i = e.child, l = i.sibling;
    var u = { mode: "hidden", children: n.children };
    return !(a & 1) && t.child !== i ? (n = t.child, n.childLanes = 0, n.pendingProps = u, t.deletions = null) : (n = Jt(i, u), n.subtreeFlags = i.subtreeFlags & 14680064), l !== null ? o = Jt(l, o) : (o = mr(o, a, r, null), o.flags |= 2), o.return = t, n.return = t, n.sibling = o, t.child = n, n = o, o = t.child, a = e.child.memoizedState, a = a === null ? _l(r) : { baseLanes: a.baseLanes | r, cachePool: null, transitions: a.transitions }, o.memoizedState = a, o.childLanes = e.childLanes & ~r, t.memoizedState = Dl, n;
  }
  return o = e.child, e = o.sibling, n = Jt(o, { mode: "visible", children: n.children }), !(t.mode & 1) && (n.lanes = r), n.return = t, n.sibling = null, e !== null && (r = t.deletions, r === null ? (t.deletions = [e], t.flags |= 16) : r.push(e)), t.child = n, t.memoizedState = null, n;
}
function Uu(e, t) {
  return t = Mo({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Ti(e, t, r, n) {
  return n !== null && Iu(n), en(t, e.child, null, r), e = Uu(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function gv(e, t, r, n, i, o, a) {
  if (r)
    return t.flags & 256 ? (t.flags &= -257, n = Ia(Error(w(422))), Ti(e, t, a, n)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = n.fallback, i = t.mode, n = Mo({ mode: "visible", children: n.children }, i, 0, null), o = mr(o, i, a, null), o.flags |= 2, n.return = t, o.return = t, n.sibling = o, t.child = n, t.mode & 1 && en(t, e.child, null, a), t.child.memoizedState = _l(a), t.memoizedState = Dl, o);
  if (!(t.mode & 1)) return Ti(e, t, a, null);
  if (i.data === "$!") {
    if (n = i.nextSibling && i.nextSibling.dataset, n) var l = n.dgst;
    return n = l, o = Error(w(419)), n = Ia(o, n, void 0), Ti(e, t, a, n);
  }
  if (l = (a & e.childLanes) !== 0, Fe || l) {
    if (n = ge, n !== null) {
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
      i = i & (n.suspendedLanes | a) ? 0 : i, i !== 0 && i !== o.retryLane && (o.retryLane = i, Lt(e, i), gt(n, e, i, -1));
    }
    return Qu(), n = Ia(Error(w(421))), Ti(e, t, a, n);
  }
  return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Iv.bind(null, e), i._reactRetry = t, null) : (e = o.treeContext, Ge = Yt(i.nextSibling), Ve = t, q = !0, ht = null, e !== null && (et[tt++] = Pt, et[tt++] = kt, et[tt++] = yr, Pt = e.id, kt = e.overflow, yr = t), t = Uu(t, n.children), t.flags |= 4096, t);
}
function Sc(e, t, r) {
  e.lanes |= t;
  var n = e.alternate;
  n !== null && (n.lanes |= t), El(e.return, t, r);
}
function Pa(e, t, r, n, i) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: n, tail: r, tailMode: i } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = n, o.tail = r, o.tailMode = i);
}
function _h(e, t, r) {
  var n = t.pendingProps, i = n.revealOrder, o = n.tail;
  if (ke(e, t, n.children, r), n = J.current, n & 2) n = n & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Sc(e, r, t);
      else if (e.tag === 19) Sc(e, r, t);
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
    n &= 1;
  }
  if (X(J, n), !(t.mode & 1)) t.memoizedState = null;
  else switch (i) {
    case "forwards":
      for (r = t.child, i = null; r !== null; ) e = r.alternate, e !== null && go(e) === null && (i = r), r = r.sibling;
      r = i, r === null ? (i = t.child, t.child = null) : (i = r.sibling, r.sibling = null), Pa(t, !1, i, r, o);
      break;
    case "backwards":
      for (r = null, i = t.child, t.child = null; i !== null; ) {
        if (e = i.alternate, e !== null && go(e) === null) {
          t.child = i;
          break;
        }
        e = i.sibling, i.sibling = r, r = i, i = e;
      }
      Pa(t, !0, r, null, o);
      break;
    case "together":
      Pa(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Ui(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Mt(e, t, r) {
  if (e !== null && (t.dependencies = e.dependencies), Er |= t.lanes, !(r & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(w(153));
  if (t.child !== null) {
    for (e = t.child, r = Jt(e, e.pendingProps), t.child = r, r.return = t; e.sibling !== null; ) e = e.sibling, r = r.sibling = Jt(e, e.pendingProps), r.return = t;
    r.sibling = null;
  }
  return t.child;
}
function mv(e, t, r) {
  switch (t.tag) {
    case 3:
      Oh(t), Jr();
      break;
    case 5:
      Jd(t);
      break;
    case 1:
      $e(t.type) && uo(t);
      break;
    case 4:
      Lu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var n = t.type._context, i = t.memoizedProps.value;
      X(fo, n._currentValue), n._currentValue = i;
      break;
    case 13:
      if (n = t.memoizedState, n !== null)
        return n.dehydrated !== null ? (X(J, J.current & 1), t.flags |= 128, null) : r & t.child.childLanes ? Dh(e, t, r) : (X(J, J.current & 1), e = Mt(e, t, r), e !== null ? e.sibling : null);
      X(J, J.current & 1);
      break;
    case 19:
      if (n = (r & t.childLanes) !== 0, e.flags & 128) {
        if (n) return _h(e, t, r);
        t.flags |= 128;
      }
      if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), X(J, J.current), n) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Th(e, t, r);
  }
  return Mt(e, t, r);
}
var Ih, Il, Ph, kh;
Ih = function(e, t) {
  for (var r = t.child; r !== null; ) {
    if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
    else if (r.tag !== 4 && r.child !== null) {
      r.child.return = r, r = r.child;
      continue;
    }
    if (r === t) break;
    for (; r.sibling === null; ) {
      if (r.return === null || r.return === t) return;
      r = r.return;
    }
    r.sibling.return = r.return, r = r.sibling;
  }
};
Il = function() {
};
Ph = function(e, t, r, n) {
  var i = e.memoizedProps;
  if (i !== n) {
    e = t.stateNode, pr(xt.current);
    var o = null;
    switch (r) {
      case "input":
        i = Za(e, i), n = Za(e, n), o = [];
        break;
      case "select":
        i = te({}, i, { value: void 0 }), n = te({}, n, { value: void 0 }), o = [];
        break;
      case "textarea":
        i = Ja(e, i), n = Ja(e, n), o = [];
        break;
      default:
        typeof i.onClick != "function" && typeof n.onClick == "function" && (e.onclick = ao);
    }
    tl(r, n);
    var a;
    r = null;
    for (s in i) if (!n.hasOwnProperty(s) && i.hasOwnProperty(s) && i[s] != null) if (s === "style") {
      var l = i[s];
      for (a in l) l.hasOwnProperty(a) && (r || (r = {}), r[a] = "");
    } else s !== "dangerouslySetInnerHTML" && s !== "children" && s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (Bn.hasOwnProperty(s) ? o || (o = []) : (o = o || []).push(s, null));
    for (s in n) {
      var u = n[s];
      if (l = i != null ? i[s] : void 0, n.hasOwnProperty(s) && u !== l && (u != null || l != null)) if (s === "style") if (l) {
        for (a in l) !l.hasOwnProperty(a) || u && u.hasOwnProperty(a) || (r || (r = {}), r[a] = "");
        for (a in u) u.hasOwnProperty(a) && l[a] !== u[a] && (r || (r = {}), r[a] = u[a]);
      } else r || (o || (o = []), o.push(
        s,
        r
      )), r = u;
      else s === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, l = l ? l.__html : void 0, u != null && l !== u && (o = o || []).push(s, u)) : s === "children" ? typeof u != "string" && typeof u != "number" || (o = o || []).push(s, "" + u) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && (Bn.hasOwnProperty(s) ? (u != null && s === "onScroll" && Y("scroll", e), o || l === u || (o = [])) : (o = o || []).push(s, u));
    }
    r && (o = o || []).push("style", r);
    var s = o;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
kh = function(e, t, r, n) {
  r !== n && (t.flags |= 4);
};
function En(e, t) {
  if (!q) switch (e.tailMode) {
    case "hidden":
      t = e.tail;
      for (var r = null; t !== null; ) t.alternate !== null && (r = t), t = t.sibling;
      r === null ? e.tail = null : r.sibling = null;
      break;
    case "collapsed":
      r = e.tail;
      for (var n = null; r !== null; ) r.alternate !== null && (n = r), r = r.sibling;
      n === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : n.sibling = null;
  }
}
function Te(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, r = 0, n = 0;
  if (t) for (var i = e.child; i !== null; ) r |= i.lanes | i.childLanes, n |= i.subtreeFlags & 14680064, n |= i.flags & 14680064, i.return = e, i = i.sibling;
  else for (i = e.child; i !== null; ) r |= i.lanes | i.childLanes, n |= i.subtreeFlags, n |= i.flags, i.return = e, i = i.sibling;
  return e.subtreeFlags |= n, e.childLanes = r, t;
}
function vv(e, t, r) {
  var n = t.pendingProps;
  switch (_u(t), t.tag) {
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
      return Te(t), null;
    case 1:
      return $e(t.type) && lo(), Te(t), null;
    case 3:
      return n = t.stateNode, tn(), K(Be), K(De), Au(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (wi(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, ht !== null && (Al(ht), ht = null))), Il(e, t), Te(t), null;
    case 5:
      Mu(t);
      var i = pr(Kn.current);
      if (r = t.type, e !== null && t.stateNode != null) Ph(e, t, r, n, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!n) {
          if (t.stateNode === null) throw Error(w(166));
          return Te(t), null;
        }
        if (e = pr(xt.current), wi(t)) {
          n = t.stateNode, r = t.type;
          var o = t.memoizedProps;
          switch (n[Et] = t, n[Yn] = o, e = (t.mode & 1) !== 0, r) {
            case "dialog":
              Y("cancel", n), Y("close", n);
              break;
            case "iframe":
            case "object":
            case "embed":
              Y("load", n);
              break;
            case "video":
            case "audio":
              for (i = 0; i < _n.length; i++) Y(_n[i], n);
              break;
            case "source":
              Y("error", n);
              break;
            case "img":
            case "image":
            case "link":
              Y(
                "error",
                n
              ), Y("load", n);
              break;
            case "details":
              Y("toggle", n);
              break;
            case "input":
              Is(n, o), Y("invalid", n);
              break;
            case "select":
              n._wrapperState = { wasMultiple: !!o.multiple }, Y("invalid", n);
              break;
            case "textarea":
              ks(n, o), Y("invalid", n);
          }
          tl(r, o), i = null;
          for (var a in o) if (o.hasOwnProperty(a)) {
            var l = o[a];
            a === "children" ? typeof l == "string" ? n.textContent !== l && (o.suppressHydrationWarning !== !0 && Ei(n.textContent, l, e), i = ["children", l]) : typeof l == "number" && n.textContent !== "" + l && (o.suppressHydrationWarning !== !0 && Ei(
              n.textContent,
              l,
              e
            ), i = ["children", "" + l]) : Bn.hasOwnProperty(a) && l != null && a === "onScroll" && Y("scroll", n);
          }
          switch (r) {
            case "input":
              di(n), Ps(n, o, !0);
              break;
            case "textarea":
              di(n), Ns(n);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (n.onclick = ao);
          }
          n = i, t.updateQueue = n, n !== null && (t.flags |= 4);
        } else {
          a = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = id(r)), e === "http://www.w3.org/1999/xhtml" ? r === "script" ? (e = a.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof n.is == "string" ? e = a.createElement(r, { is: n.is }) : (e = a.createElement(r), r === "select" && (a = e, n.multiple ? a.multiple = !0 : n.size && (a.size = n.size))) : e = a.createElementNS(e, r), e[Et] = t, e[Yn] = n, Ih(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (a = rl(r, n), r) {
              case "dialog":
                Y("cancel", e), Y("close", e), i = n;
                break;
              case "iframe":
              case "object":
              case "embed":
                Y("load", e), i = n;
                break;
              case "video":
              case "audio":
                for (i = 0; i < _n.length; i++) Y(_n[i], e);
                i = n;
                break;
              case "source":
                Y("error", e), i = n;
                break;
              case "img":
              case "image":
              case "link":
                Y(
                  "error",
                  e
                ), Y("load", e), i = n;
                break;
              case "details":
                Y("toggle", e), i = n;
                break;
              case "input":
                Is(e, n), i = Za(e, n), Y("invalid", e);
                break;
              case "option":
                i = n;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!n.multiple }, i = te({}, n, { value: void 0 }), Y("invalid", e);
                break;
              case "textarea":
                ks(e, n), i = Ja(e, n), Y("invalid", e);
                break;
              default:
                i = n;
            }
            tl(r, i), l = i;
            for (o in l) if (l.hasOwnProperty(o)) {
              var u = l[o];
              o === "style" ? ld(e, u) : o === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && od(e, u)) : o === "children" ? typeof u == "string" ? (r !== "textarea" || u !== "") && $n(e, u) : typeof u == "number" && $n(e, "" + u) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Bn.hasOwnProperty(o) ? u != null && o === "onScroll" && Y("scroll", e) : u != null && du(e, o, u, a));
            }
            switch (r) {
              case "input":
                di(e), Ps(e, n, !1);
                break;
              case "textarea":
                di(e), Ns(e);
                break;
              case "option":
                n.value != null && e.setAttribute("value", "" + er(n.value));
                break;
              case "select":
                e.multiple = !!n.multiple, o = n.value, o != null ? Vr(e, !!n.multiple, o, !1) : n.defaultValue != null && Vr(
                  e,
                  !!n.multiple,
                  n.defaultValue,
                  !0
                );
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = ao);
            }
            switch (r) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!n.autoFocus;
                break e;
              case "img":
                n = !0;
                break e;
              default:
                n = !1;
            }
          }
          n && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return Te(t), null;
    case 6:
      if (e && t.stateNode != null) kh(e, t, e.memoizedProps, n);
      else {
        if (typeof n != "string" && t.stateNode === null) throw Error(w(166));
        if (r = pr(Kn.current), pr(xt.current), wi(t)) {
          if (n = t.stateNode, r = t.memoizedProps, n[Et] = t, (o = n.nodeValue !== r) && (e = Ve, e !== null)) switch (e.tag) {
            case 3:
              Ei(n.nodeValue, r, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Ei(n.nodeValue, r, (e.mode & 1) !== 0);
          }
          o && (t.flags |= 4);
        } else n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n), n[Et] = t, t.stateNode = n;
      }
      return Te(t), null;
    case 13:
      if (K(J), n = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (q && Ge !== null && t.mode & 1 && !(t.flags & 128)) Qd(), Jr(), t.flags |= 98560, o = !1;
        else if (o = wi(t), n !== null && n.dehydrated !== null) {
          if (e === null) {
            if (!o) throw Error(w(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(w(317));
            o[Et] = t;
          } else Jr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Te(t), o = !1;
        } else ht !== null && (Al(ht), ht = null), o = !0;
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = r, t) : (n = n !== null, n !== (e !== null && e.memoizedState !== null) && n && (t.child.flags |= 8192, t.mode & 1 && (e === null || J.current & 1 ? ce === 0 && (ce = 3) : Qu())), t.updateQueue !== null && (t.flags |= 4), Te(t), null);
    case 4:
      return tn(), Il(e, t), e === null && Xn(t.stateNode.containerInfo), Te(t), null;
    case 10:
      return Nu(t.type._context), Te(t), null;
    case 17:
      return $e(t.type) && lo(), Te(t), null;
    case 19:
      if (K(J), o = t.memoizedState, o === null) return Te(t), null;
      if (n = (t.flags & 128) !== 0, a = o.rendering, a === null) if (n) En(o, !1);
      else {
        if (ce !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (a = go(e), a !== null) {
            for (t.flags |= 128, En(o, !1), n = a.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), t.subtreeFlags = 0, n = r, r = t.child; r !== null; ) o = r, e = n, o.flags &= 14680066, a = o.alternate, a === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = a.childLanes, o.lanes = a.lanes, o.child = a.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = a.memoizedProps, o.memoizedState = a.memoizedState, o.updateQueue = a.updateQueue, o.type = a.type, e = a.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), r = r.sibling;
            return X(J, J.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        o.tail !== null && ie() > nn && (t.flags |= 128, n = !0, En(o, !1), t.lanes = 4194304);
      }
      else {
        if (!n) if (e = go(a), e !== null) {
          if (t.flags |= 128, n = !0, r = e.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), En(o, !0), o.tail === null && o.tailMode === "hidden" && !a.alternate && !q) return Te(t), null;
        } else 2 * ie() - o.renderingStartTime > nn && r !== 1073741824 && (t.flags |= 128, n = !0, En(o, !1), t.lanes = 4194304);
        o.isBackwards ? (a.sibling = t.child, t.child = a) : (r = o.last, r !== null ? r.sibling = a : t.child = a, o.last = a);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = ie(), t.sibling = null, r = J.current, X(J, n ? r & 1 | 2 : r & 1), t) : (Te(t), null);
    case 22:
    case 23:
      return Xu(), n = t.memoizedState !== null, e !== null && e.memoizedState !== null !== n && (t.flags |= 8192), n && t.mode & 1 ? ze & 1073741824 && (Te(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Te(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(w(156, t.tag));
}
function yv(e, t) {
  switch (_u(t), t.tag) {
    case 1:
      return $e(t.type) && lo(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return tn(), K(Be), K(De), Au(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Mu(t), null;
    case 13:
      if (K(J), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(w(340));
        Jr();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return K(J), null;
    case 4:
      return tn(), null;
    case 10:
      return Nu(t.type._context), null;
    case 22:
    case 23:
      return Xu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ci = !1, Oe = !1, Sv = typeof WeakSet == "function" ? WeakSet : Set, P = null;
function zr(e, t) {
  var r = e.ref;
  if (r !== null) if (typeof r == "function") try {
    r(null);
  } catch (n) {
    ne(e, t, n);
  }
  else r.current = null;
}
function Pl(e, t, r) {
  try {
    r();
  } catch (n) {
    ne(e, t, n);
  }
}
var Ec = !1;
function Ev(e, t) {
  if (dl = no, e = Md(), Ou(e)) {
    if ("selectionStart" in e) var r = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      r = (r = e.ownerDocument) && r.defaultView || window;
      var n = r.getSelection && r.getSelection();
      if (n && n.rangeCount !== 0) {
        r = n.anchorNode;
        var i = n.anchorOffset, o = n.focusNode;
        n = n.focusOffset;
        try {
          r.nodeType, o.nodeType;
        } catch {
          r = null;
          break e;
        }
        var a = 0, l = -1, u = -1, s = 0, c = 0, h = e, d = null;
        t: for (; ; ) {
          for (var m; h !== r || i !== 0 && h.nodeType !== 3 || (l = a + i), h !== o || n !== 0 && h.nodeType !== 3 || (u = a + n), h.nodeType === 3 && (a += h.nodeValue.length), (m = h.firstChild) !== null; )
            d = h, h = m;
          for (; ; ) {
            if (h === e) break t;
            if (d === r && ++s === i && (l = a), d === o && ++c === n && (u = a), (m = h.nextSibling) !== null) break;
            h = d, d = h.parentNode;
          }
          h = m;
        }
        r = l === -1 || u === -1 ? null : { start: l, end: u };
      } else r = null;
    }
    r = r || { start: 0, end: 0 };
  } else r = null;
  for (hl = { focusedElem: e, selectionRange: r }, no = !1, P = t; P !== null; ) if (t = P, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, P = e;
  else for (; P !== null; ) {
    t = P;
    try {
      var y = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (y !== null) {
            var v = y.memoizedProps, _ = y.memoizedState, p = t.stateNode, f = p.getSnapshotBeforeUpdate(t.elementType === t.type ? v : ft(t.type, v), _);
            p.__reactInternalSnapshotBeforeUpdate = f;
          }
          break;
        case 3:
          var g = t.stateNode.containerInfo;
          g.nodeType === 1 ? g.textContent = "" : g.nodeType === 9 && g.documentElement && g.removeChild(g.documentElement);
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
      ne(t, t.return, S);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, P = e;
      break;
    }
    P = t.return;
  }
  return y = Ec, Ec = !1, y;
}
function An(e, t, r) {
  var n = t.updateQueue;
  if (n = n !== null ? n.lastEffect : null, n !== null) {
    var i = n = n.next;
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        i.destroy = void 0, o !== void 0 && Pl(t, r, o);
      }
      i = i.next;
    } while (i !== n);
  }
}
function Ro(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var r = t = t.next;
    do {
      if ((r.tag & e) === e) {
        var n = r.create;
        r.destroy = n();
      }
      r = r.next;
    } while (r !== t);
  }
}
function kl(e) {
  var t = e.ref;
  if (t !== null) {
    var r = e.stateNode;
    switch (e.tag) {
      case 5:
        e = r;
        break;
      default:
        e = r;
    }
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function Nh(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Nh(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Et], delete t[Yn], delete t[ml], delete t[rv], delete t[nv])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function bh(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function wc(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || bh(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Nl(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6) e = e.stateNode, t ? r.nodeType === 8 ? r.parentNode.insertBefore(e, t) : r.insertBefore(e, t) : (r.nodeType === 8 ? (t = r.parentNode, t.insertBefore(e, r)) : (t = r, t.appendChild(e)), r = r._reactRootContainer, r != null || t.onclick !== null || (t.onclick = ao));
  else if (n !== 4 && (e = e.child, e !== null)) for (Nl(e, t, r), e = e.sibling; e !== null; ) Nl(e, t, r), e = e.sibling;
}
function bl(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6) e = e.stateNode, t ? r.insertBefore(e, t) : r.appendChild(e);
  else if (n !== 4 && (e = e.child, e !== null)) for (bl(e, t, r), e = e.sibling; e !== null; ) bl(e, t, r), e = e.sibling;
}
var ve = null, dt = !1;
function Ft(e, t, r) {
  for (r = r.child; r !== null; ) Rh(e, t, r), r = r.sibling;
}
function Rh(e, t, r) {
  if (wt && typeof wt.onCommitFiberUnmount == "function") try {
    wt.onCommitFiberUnmount(Oo, r);
  } catch {
  }
  switch (r.tag) {
    case 5:
      Oe || zr(r, t);
    case 6:
      var n = ve, i = dt;
      ve = null, Ft(e, t, r), ve = n, dt = i, ve !== null && (dt ? (e = ve, r = r.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r)) : ve.removeChild(r.stateNode));
      break;
    case 18:
      ve !== null && (dt ? (e = ve, r = r.stateNode, e.nodeType === 8 ? xa(e.parentNode, r) : e.nodeType === 1 && xa(e, r), Gn(e)) : xa(ve, r.stateNode));
      break;
    case 4:
      n = ve, i = dt, ve = r.stateNode.containerInfo, dt = !0, Ft(e, t, r), ve = n, dt = i;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Oe && (n = r.updateQueue, n !== null && (n = n.lastEffect, n !== null))) {
        i = n = n.next;
        do {
          var o = i, a = o.destroy;
          o = o.tag, a !== void 0 && (o & 2 || o & 4) && Pl(r, t, a), i = i.next;
        } while (i !== n);
      }
      Ft(e, t, r);
      break;
    case 1:
      if (!Oe && (zr(r, t), n = r.stateNode, typeof n.componentWillUnmount == "function")) try {
        n.props = r.memoizedProps, n.state = r.memoizedState, n.componentWillUnmount();
      } catch (l) {
        ne(r, t, l);
      }
      Ft(e, t, r);
      break;
    case 21:
      Ft(e, t, r);
      break;
    case 22:
      r.mode & 1 ? (Oe = (n = Oe) || r.memoizedState !== null, Ft(e, t, r), Oe = n) : Ft(e, t, r);
      break;
    default:
      Ft(e, t, r);
  }
}
function xc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var r = e.stateNode;
    r === null && (r = e.stateNode = new Sv()), t.forEach(function(n) {
      var i = Pv.bind(null, e, n);
      r.has(n) || (r.add(n), n.then(i, i));
    });
  }
}
function ct(e, t) {
  var r = t.deletions;
  if (r !== null) for (var n = 0; n < r.length; n++) {
    var i = r[n];
    try {
      var o = e, a = t, l = a;
      e: for (; l !== null; ) {
        switch (l.tag) {
          case 5:
            ve = l.stateNode, dt = !1;
            break e;
          case 3:
            ve = l.stateNode.containerInfo, dt = !0;
            break e;
          case 4:
            ve = l.stateNode.containerInfo, dt = !0;
            break e;
        }
        l = l.return;
      }
      if (ve === null) throw Error(w(160));
      Rh(o, a, i), ve = null, dt = !1;
      var u = i.alternate;
      u !== null && (u.return = null), i.return = null;
    } catch (s) {
      ne(i, t, s);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Lh(t, e), t = t.sibling;
}
function Lh(e, t) {
  var r = e.alternate, n = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (ct(t, e), vt(e), n & 4) {
        try {
          An(3, e, e.return), Ro(3, e);
        } catch (v) {
          ne(e, e.return, v);
        }
        try {
          An(5, e, e.return);
        } catch (v) {
          ne(e, e.return, v);
        }
      }
      break;
    case 1:
      ct(t, e), vt(e), n & 512 && r !== null && zr(r, r.return);
      break;
    case 5:
      if (ct(t, e), vt(e), n & 512 && r !== null && zr(r, r.return), e.flags & 32) {
        var i = e.stateNode;
        try {
          $n(i, "");
        } catch (v) {
          ne(e, e.return, v);
        }
      }
      if (n & 4 && (i = e.stateNode, i != null)) {
        var o = e.memoizedProps, a = r !== null ? r.memoizedProps : o, l = e.type, u = e.updateQueue;
        if (e.updateQueue = null, u !== null) try {
          l === "input" && o.type === "radio" && o.name != null && rd(i, o), rl(l, a);
          var s = rl(l, o);
          for (a = 0; a < u.length; a += 2) {
            var c = u[a], h = u[a + 1];
            c === "style" ? ld(i, h) : c === "dangerouslySetInnerHTML" ? od(i, h) : c === "children" ? $n(i, h) : du(i, c, h, s);
          }
          switch (l) {
            case "input":
              Ka(i, o);
              break;
            case "textarea":
              nd(i, o);
              break;
            case "select":
              var d = i._wrapperState.wasMultiple;
              i._wrapperState.wasMultiple = !!o.multiple;
              var m = o.value;
              m != null ? Vr(i, !!o.multiple, m, !1) : d !== !!o.multiple && (o.defaultValue != null ? Vr(
                i,
                !!o.multiple,
                o.defaultValue,
                !0
              ) : Vr(i, !!o.multiple, o.multiple ? [] : "", !1));
          }
          i[Yn] = o;
        } catch (v) {
          ne(e, e.return, v);
        }
      }
      break;
    case 6:
      if (ct(t, e), vt(e), n & 4) {
        if (e.stateNode === null) throw Error(w(162));
        i = e.stateNode, o = e.memoizedProps;
        try {
          i.nodeValue = o;
        } catch (v) {
          ne(e, e.return, v);
        }
      }
      break;
    case 3:
      if (ct(t, e), vt(e), n & 4 && r !== null && r.memoizedState.isDehydrated) try {
        Gn(t.containerInfo);
      } catch (v) {
        ne(e, e.return, v);
      }
      break;
    case 4:
      ct(t, e), vt(e);
      break;
    case 13:
      ct(t, e), vt(e), i = e.child, i.flags & 8192 && (o = i.memoizedState !== null, i.stateNode.isHidden = o, !o || i.alternate !== null && i.alternate.memoizedState !== null || (Vu = ie())), n & 4 && xc(e);
      break;
    case 22:
      if (c = r !== null && r.memoizedState !== null, e.mode & 1 ? (Oe = (s = Oe) || c, ct(t, e), Oe = s) : ct(t, e), vt(e), n & 8192) {
        if (s = e.memoizedState !== null, (e.stateNode.isHidden = s) && !c && e.mode & 1) for (P = e, c = e.child; c !== null; ) {
          for (h = P = c; P !== null; ) {
            switch (d = P, m = d.child, d.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                An(4, d, d.return);
                break;
              case 1:
                zr(d, d.return);
                var y = d.stateNode;
                if (typeof y.componentWillUnmount == "function") {
                  n = d, r = d.return;
                  try {
                    t = n, y.props = t.memoizedProps, y.state = t.memoizedState, y.componentWillUnmount();
                  } catch (v) {
                    ne(n, r, v);
                  }
                }
                break;
              case 5:
                zr(d, d.return);
                break;
              case 22:
                if (d.memoizedState !== null) {
                  Cc(h);
                  continue;
                }
            }
            m !== null ? (m.return = d, P = m) : Cc(h);
          }
          c = c.sibling;
        }
        e: for (c = null, h = e; ; ) {
          if (h.tag === 5) {
            if (c === null) {
              c = h;
              try {
                i = h.stateNode, s ? (o = i.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (l = h.stateNode, u = h.memoizedProps.style, a = u != null && u.hasOwnProperty("display") ? u.display : null, l.style.display = ad("display", a));
              } catch (v) {
                ne(e, e.return, v);
              }
            }
          } else if (h.tag === 6) {
            if (c === null) try {
              h.stateNode.nodeValue = s ? "" : h.memoizedProps;
            } catch (v) {
              ne(e, e.return, v);
            }
          } else if ((h.tag !== 22 && h.tag !== 23 || h.memoizedState === null || h === e) && h.child !== null) {
            h.child.return = h, h = h.child;
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            c === h && (c = null), h = h.return;
          }
          c === h && (c = null), h.sibling.return = h.return, h = h.sibling;
        }
      }
      break;
    case 19:
      ct(t, e), vt(e), n & 4 && xc(e);
      break;
    case 21:
      break;
    default:
      ct(
        t,
        e
      ), vt(e);
  }
}
function vt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var r = e.return; r !== null; ) {
          if (bh(r)) {
            var n = r;
            break e;
          }
          r = r.return;
        }
        throw Error(w(160));
      }
      switch (n.tag) {
        case 5:
          var i = n.stateNode;
          n.flags & 32 && ($n(i, ""), n.flags &= -33);
          var o = wc(e);
          bl(e, o, i);
          break;
        case 3:
        case 4:
          var a = n.stateNode.containerInfo, l = wc(e);
          Nl(e, l, a);
          break;
        default:
          throw Error(w(161));
      }
    } catch (u) {
      ne(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function wv(e, t, r) {
  P = e, Mh(e);
}
function Mh(e, t, r) {
  for (var n = (e.mode & 1) !== 0; P !== null; ) {
    var i = P, o = i.child;
    if (i.tag === 22 && n) {
      var a = i.memoizedState !== null || Ci;
      if (!a) {
        var l = i.alternate, u = l !== null && l.memoizedState !== null || Oe;
        l = Ci;
        var s = Oe;
        if (Ci = a, (Oe = u) && !s) for (P = i; P !== null; ) a = P, u = a.child, a.tag === 22 && a.memoizedState !== null ? Oc(i) : u !== null ? (u.return = a, P = u) : Oc(i);
        for (; o !== null; ) P = o, Mh(o), o = o.sibling;
        P = i, Ci = l, Oe = s;
      }
      Tc(e);
    } else i.subtreeFlags & 8772 && o !== null ? (o.return = i, P = o) : Tc(e);
  }
}
function Tc(e) {
  for (; P !== null; ) {
    var t = P;
    if (t.flags & 8772) {
      var r = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Oe || Ro(5, t);
            break;
          case 1:
            var n = t.stateNode;
            if (t.flags & 4 && !Oe) if (r === null) n.componentDidMount();
            else {
              var i = t.elementType === t.type ? r.memoizedProps : ft(t.type, r.memoizedProps);
              n.componentDidUpdate(i, r.memoizedState, n.__reactInternalSnapshotBeforeUpdate);
            }
            var o = t.updateQueue;
            o !== null && lc(t, o, n);
            break;
          case 3:
            var a = t.updateQueue;
            if (a !== null) {
              if (r = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  r = t.child.stateNode;
                  break;
                case 1:
                  r = t.child.stateNode;
              }
              lc(t, a, r);
            }
            break;
          case 5:
            var l = t.stateNode;
            if (r === null && t.flags & 4) {
              r = l;
              var u = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  u.autoFocus && r.focus();
                  break;
                case "img":
                  u.src && (r.src = u.src);
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
                  var h = c.dehydrated;
                  h !== null && Gn(h);
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
        Oe || t.flags & 512 && kl(t);
      } catch (d) {
        ne(t, t.return, d);
      }
    }
    if (t === e) {
      P = null;
      break;
    }
    if (r = t.sibling, r !== null) {
      r.return = t.return, P = r;
      break;
    }
    P = t.return;
  }
}
function Cc(e) {
  for (; P !== null; ) {
    var t = P;
    if (t === e) {
      P = null;
      break;
    }
    var r = t.sibling;
    if (r !== null) {
      r.return = t.return, P = r;
      break;
    }
    P = t.return;
  }
}
function Oc(e) {
  for (; P !== null; ) {
    var t = P;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var r = t.return;
          try {
            Ro(4, t);
          } catch (u) {
            ne(t, r, u);
          }
          break;
        case 1:
          var n = t.stateNode;
          if (typeof n.componentDidMount == "function") {
            var i = t.return;
            try {
              n.componentDidMount();
            } catch (u) {
              ne(t, i, u);
            }
          }
          var o = t.return;
          try {
            kl(t);
          } catch (u) {
            ne(t, o, u);
          }
          break;
        case 5:
          var a = t.return;
          try {
            kl(t);
          } catch (u) {
            ne(t, a, u);
          }
      }
    } catch (u) {
      ne(t, t.return, u);
    }
    if (t === e) {
      P = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      l.return = t.return, P = l;
      break;
    }
    P = t.return;
  }
}
var xv = Math.ceil, yo = At.ReactCurrentDispatcher, zu = At.ReactCurrentOwner, it = At.ReactCurrentBatchConfig, U = 0, ge = null, ae = null, ye = 0, ze = 0, Gr = nr(0), ce = 0, ti = null, Er = 0, Lo = 0, Gu = 0, Hn = null, He = null, Vu = 0, nn = 1 / 0, _t = null, So = !1, Rl = null, Kt = null, Oi = !1, Vt = null, Eo = 0, Fn = 0, Ll = null, zi = -1, Gi = 0;
function Le() {
  return U & 6 ? ie() : zi !== -1 ? zi : zi = ie();
}
function qt(e) {
  return e.mode & 1 ? U & 2 && ye !== 0 ? ye & -ye : ov.transition !== null ? (Gi === 0 && (Gi = Sd()), Gi) : (e = V, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Dd(e.type)), e) : 1;
}
function gt(e, t, r, n) {
  if (50 < Fn) throw Fn = 0, Ll = null, Error(w(185));
  ni(e, r, n), (!(U & 2) || e !== ge) && (e === ge && (!(U & 2) && (Lo |= r), ce === 4 && zt(e, ye)), je(e, n), r === 1 && U === 0 && !(t.mode & 1) && (nn = ie() + 500, ko && ir()));
}
function je(e, t) {
  var r = e.callbackNode;
  om(e, t);
  var n = ro(e, e === ge ? ye : 0);
  if (n === 0) r !== null && Ls(r), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = n & -n, e.callbackPriority !== t) {
    if (r != null && Ls(r), t === 1) e.tag === 0 ? iv(Dc.bind(null, e)) : Vd(Dc.bind(null, e)), ev(function() {
      !(U & 6) && ir();
    }), r = null;
    else {
      switch (Ed(n)) {
        case 1:
          r = vu;
          break;
        case 4:
          r = vd;
          break;
        case 16:
          r = to;
          break;
        case 536870912:
          r = yd;
          break;
        default:
          r = to;
      }
      r = zh(r, Ah.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = r;
  }
}
function Ah(e, t) {
  if (zi = -1, Gi = 0, U & 6) throw Error(w(327));
  var r = e.callbackNode;
  if (Zr() && e.callbackNode !== r) return null;
  var n = ro(e, e === ge ? ye : 0);
  if (n === 0) return null;
  if (n & 30 || n & e.expiredLanes || t) t = wo(e, n);
  else {
    t = n;
    var i = U;
    U |= 2;
    var o = Fh();
    (ge !== e || ye !== t) && (_t = null, nn = ie() + 500, gr(e, t));
    do
      try {
        Ov();
        break;
      } catch (l) {
        Hh(e, l);
      }
    while (!0);
    ku(), yo.current = o, U = i, ae !== null ? t = 0 : (ge = null, ye = 0, t = ce);
  }
  if (t !== 0) {
    if (t === 2 && (i = ll(e), i !== 0 && (n = i, t = Ml(e, i))), t === 1) throw r = ti, gr(e, 0), zt(e, n), je(e, ie()), r;
    if (t === 6) zt(e, n);
    else {
      if (i = e.current.alternate, !(n & 30) && !Tv(i) && (t = wo(e, n), t === 2 && (o = ll(e), o !== 0 && (n = o, t = Ml(e, o))), t === 1)) throw r = ti, gr(e, 0), zt(e, n), je(e, ie()), r;
      switch (e.finishedWork = i, e.finishedLanes = n, t) {
        case 0:
        case 1:
          throw Error(w(345));
        case 2:
          sr(e, He, _t);
          break;
        case 3:
          if (zt(e, n), (n & 130023424) === n && (t = Vu + 500 - ie(), 10 < t)) {
            if (ro(e, 0) !== 0) break;
            if (i = e.suspendedLanes, (i & n) !== n) {
              Le(), e.pingedLanes |= e.suspendedLanes & i;
              break;
            }
            e.timeoutHandle = gl(sr.bind(null, e, He, _t), t);
            break;
          }
          sr(e, He, _t);
          break;
        case 4:
          if (zt(e, n), (n & 4194240) === n) break;
          for (t = e.eventTimes, i = -1; 0 < n; ) {
            var a = 31 - pt(n);
            o = 1 << a, a = t[a], a > i && (i = a), n &= ~o;
          }
          if (n = i, n = ie() - n, n = (120 > n ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * xv(n / 1960)) - n, 10 < n) {
            e.timeoutHandle = gl(sr.bind(null, e, He, _t), n);
            break;
          }
          sr(e, He, _t);
          break;
        case 5:
          sr(e, He, _t);
          break;
        default:
          throw Error(w(329));
      }
    }
  }
  return je(e, ie()), e.callbackNode === r ? Ah.bind(null, e) : null;
}
function Ml(e, t) {
  var r = Hn;
  return e.current.memoizedState.isDehydrated && (gr(e, t).flags |= 256), e = wo(e, t), e !== 2 && (t = He, He = r, t !== null && Al(t)), e;
}
function Al(e) {
  He === null ? He = e : He.push.apply(He, e);
}
function Tv(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var r = t.updateQueue;
      if (r !== null && (r = r.stores, r !== null)) for (var n = 0; n < r.length; n++) {
        var i = r[n], o = i.getSnapshot;
        i = i.value;
        try {
          if (!mt(o(), i)) return !1;
        } catch {
          return !1;
        }
      }
    }
    if (r = t.child, t.subtreeFlags & 16384 && r !== null) r.return = t, t = r;
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
function zt(e, t) {
  for (t &= ~Gu, t &= ~Lo, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var r = 31 - pt(t), n = 1 << r;
    e[r] = -1, t &= ~n;
  }
}
function Dc(e) {
  if (U & 6) throw Error(w(327));
  Zr();
  var t = ro(e, 0);
  if (!(t & 1)) return je(e, ie()), null;
  var r = wo(e, t);
  if (e.tag !== 0 && r === 2) {
    var n = ll(e);
    n !== 0 && (t = n, r = Ml(e, n));
  }
  if (r === 1) throw r = ti, gr(e, 0), zt(e, t), je(e, ie()), r;
  if (r === 6) throw Error(w(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, sr(e, He, _t), je(e, ie()), null;
}
function Wu(e, t) {
  var r = U;
  U |= 1;
  try {
    return e(t);
  } finally {
    U = r, U === 0 && (nn = ie() + 500, ko && ir());
  }
}
function wr(e) {
  Vt !== null && Vt.tag === 0 && !(U & 6) && Zr();
  var t = U;
  U |= 1;
  var r = it.transition, n = V;
  try {
    if (it.transition = null, V = 1, e) return e();
  } finally {
    V = n, it.transition = r, U = t, !(U & 6) && ir();
  }
}
function Xu() {
  ze = Gr.current, K(Gr);
}
function gr(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var r = e.timeoutHandle;
  if (r !== -1 && (e.timeoutHandle = -1, Jm(r)), ae !== null) for (r = ae.return; r !== null; ) {
    var n = r;
    switch (_u(n), n.tag) {
      case 1:
        n = n.type.childContextTypes, n != null && lo();
        break;
      case 3:
        tn(), K(Be), K(De), Au();
        break;
      case 5:
        Mu(n);
        break;
      case 4:
        tn();
        break;
      case 13:
        K(J);
        break;
      case 19:
        K(J);
        break;
      case 10:
        Nu(n.type._context);
        break;
      case 22:
      case 23:
        Xu();
    }
    r = r.return;
  }
  if (ge = e, ae = e = Jt(e.current, null), ye = ze = t, ce = 0, ti = null, Gu = Lo = Er = 0, He = Hn = null, hr !== null) {
    for (t = 0; t < hr.length; t++) if (r = hr[t], n = r.interleaved, n !== null) {
      r.interleaved = null;
      var i = n.next, o = r.pending;
      if (o !== null) {
        var a = o.next;
        o.next = i, n.next = a;
      }
      r.pending = n;
    }
    hr = null;
  }
  return e;
}
function Hh(e, t) {
  do {
    var r = ae;
    try {
      if (ku(), $i.current = vo, mo) {
        for (var n = ee.memoizedState; n !== null; ) {
          var i = n.queue;
          i !== null && (i.pending = null), n = n.next;
        }
        mo = !1;
      }
      if (Sr = 0, pe = se = ee = null, Mn = !1, qn = 0, zu.current = null, r === null || r.return === null) {
        ce = 1, ti = t, ae = null;
        break;
      }
      e: {
        var o = e, a = r.return, l = r, u = t;
        if (t = ye, l.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
          var s = u, c = l, h = c.tag;
          if (!(c.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var d = c.alternate;
            d ? (c.updateQueue = d.updateQueue, c.memoizedState = d.memoizedState, c.lanes = d.lanes) : (c.updateQueue = null, c.memoizedState = null);
          }
          var m = hc(a);
          if (m !== null) {
            m.flags &= -257, pc(m, a, l, o, t), m.mode & 1 && dc(o, s, t), t = m, u = s;
            var y = t.updateQueue;
            if (y === null) {
              var v = /* @__PURE__ */ new Set();
              v.add(u), t.updateQueue = v;
            } else y.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              dc(o, s, t), Qu();
              break e;
            }
            u = Error(w(426));
          }
        } else if (q && l.mode & 1) {
          var _ = hc(a);
          if (_ !== null) {
            !(_.flags & 65536) && (_.flags |= 256), pc(_, a, l, o, t), Iu(rn(u, l));
            break e;
          }
        }
        o = u = rn(u, l), ce !== 4 && (ce = 2), Hn === null ? Hn = [o] : Hn.push(o), o = a;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var p = Eh(o, u, t);
              ac(o, p);
              break e;
            case 1:
              l = u;
              var f = o.type, g = o.stateNode;
              if (!(o.flags & 128) && (typeof f.getDerivedStateFromError == "function" || g !== null && typeof g.componentDidCatch == "function" && (Kt === null || !Kt.has(g)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var S = wh(o, l, t);
                ac(o, S);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      $h(r);
    } catch (T) {
      t = T, ae === r && r !== null && (ae = r = r.return);
      continue;
    }
    break;
  } while (!0);
}
function Fh() {
  var e = yo.current;
  return yo.current = vo, e === null ? vo : e;
}
function Qu() {
  (ce === 0 || ce === 3 || ce === 2) && (ce = 4), ge === null || !(Er & 268435455) && !(Lo & 268435455) || zt(ge, ye);
}
function wo(e, t) {
  var r = U;
  U |= 2;
  var n = Fh();
  (ge !== e || ye !== t) && (_t = null, gr(e, t));
  do
    try {
      Cv();
      break;
    } catch (i) {
      Hh(e, i);
    }
  while (!0);
  if (ku(), U = r, yo.current = n, ae !== null) throw Error(w(261));
  return ge = null, ye = 0, ce;
}
function Cv() {
  for (; ae !== null; ) Bh(ae);
}
function Ov() {
  for (; ae !== null && !Zg(); ) Bh(ae);
}
function Bh(e) {
  var t = Uh(e.alternate, e, ze);
  e.memoizedProps = e.pendingProps, t === null ? $h(e) : ae = t, zu.current = null;
}
function $h(e) {
  var t = e;
  do {
    var r = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (r = yv(r, t), r !== null) {
        r.flags &= 32767, ae = r;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        ce = 6, ae = null;
        return;
      }
    } else if (r = vv(r, t, ze), r !== null) {
      ae = r;
      return;
    }
    if (t = t.sibling, t !== null) {
      ae = t;
      return;
    }
    ae = t = e;
  } while (t !== null);
  ce === 0 && (ce = 5);
}
function sr(e, t, r) {
  var n = V, i = it.transition;
  try {
    it.transition = null, V = 1, Dv(e, t, r, n);
  } finally {
    it.transition = i, V = n;
  }
  return null;
}
function Dv(e, t, r, n) {
  do
    Zr();
  while (Vt !== null);
  if (U & 6) throw Error(w(327));
  r = e.finishedWork;
  var i = e.finishedLanes;
  if (r === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, r === e.current) throw Error(w(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = r.lanes | r.childLanes;
  if (am(e, o), e === ge && (ae = ge = null, ye = 0), !(r.subtreeFlags & 2064) && !(r.flags & 2064) || Oi || (Oi = !0, zh(to, function() {
    return Zr(), null;
  })), o = (r.flags & 15990) !== 0, r.subtreeFlags & 15990 || o) {
    o = it.transition, it.transition = null;
    var a = V;
    V = 1;
    var l = U;
    U |= 4, zu.current = null, Ev(e, r), Lh(r, e), Wm(hl), no = !!dl, hl = dl = null, e.current = r, wv(r), Kg(), U = l, V = a, it.transition = o;
  } else e.current = r;
  if (Oi && (Oi = !1, Vt = e, Eo = i), o = e.pendingLanes, o === 0 && (Kt = null), em(r.stateNode), je(e, ie()), t !== null) for (n = e.onRecoverableError, r = 0; r < t.length; r++) i = t[r], n(i.value, { componentStack: i.stack, digest: i.digest });
  if (So) throw So = !1, e = Rl, Rl = null, e;
  return Eo & 1 && e.tag !== 0 && Zr(), o = e.pendingLanes, o & 1 ? e === Ll ? Fn++ : (Fn = 0, Ll = e) : Fn = 0, ir(), null;
}
function Zr() {
  if (Vt !== null) {
    var e = Ed(Eo), t = it.transition, r = V;
    try {
      if (it.transition = null, V = 16 > e ? 16 : e, Vt === null) var n = !1;
      else {
        if (e = Vt, Vt = null, Eo = 0, U & 6) throw Error(w(331));
        var i = U;
        for (U |= 4, P = e.current; P !== null; ) {
          var o = P, a = o.child;
          if (P.flags & 16) {
            var l = o.deletions;
            if (l !== null) {
              for (var u = 0; u < l.length; u++) {
                var s = l[u];
                for (P = s; P !== null; ) {
                  var c = P;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      An(8, c, o);
                  }
                  var h = c.child;
                  if (h !== null) h.return = c, P = h;
                  else for (; P !== null; ) {
                    c = P;
                    var d = c.sibling, m = c.return;
                    if (Nh(c), c === s) {
                      P = null;
                      break;
                    }
                    if (d !== null) {
                      d.return = m, P = d;
                      break;
                    }
                    P = m;
                  }
                }
              }
              var y = o.alternate;
              if (y !== null) {
                var v = y.child;
                if (v !== null) {
                  y.child = null;
                  do {
                    var _ = v.sibling;
                    v.sibling = null, v = _;
                  } while (v !== null);
                }
              }
              P = o;
            }
          }
          if (o.subtreeFlags & 2064 && a !== null) a.return = o, P = a;
          else e: for (; P !== null; ) {
            if (o = P, o.flags & 2048) switch (o.tag) {
              case 0:
              case 11:
              case 15:
                An(9, o, o.return);
            }
            var p = o.sibling;
            if (p !== null) {
              p.return = o.return, P = p;
              break e;
            }
            P = o.return;
          }
        }
        var f = e.current;
        for (P = f; P !== null; ) {
          a = P;
          var g = a.child;
          if (a.subtreeFlags & 2064 && g !== null) g.return = a, P = g;
          else e: for (a = f; P !== null; ) {
            if (l = P, l.flags & 2048) try {
              switch (l.tag) {
                case 0:
                case 11:
                case 15:
                  Ro(9, l);
              }
            } catch (T) {
              ne(l, l.return, T);
            }
            if (l === a) {
              P = null;
              break e;
            }
            var S = l.sibling;
            if (S !== null) {
              S.return = l.return, P = S;
              break e;
            }
            P = l.return;
          }
        }
        if (U = i, ir(), wt && typeof wt.onPostCommitFiberRoot == "function") try {
          wt.onPostCommitFiberRoot(Oo, e);
        } catch {
        }
        n = !0;
      }
      return n;
    } finally {
      V = r, it.transition = t;
    }
  }
  return !1;
}
function _c(e, t, r) {
  t = rn(r, t), t = Eh(e, t, 1), e = Zt(e, t, 1), t = Le(), e !== null && (ni(e, 1, t), je(e, t));
}
function ne(e, t, r) {
  if (e.tag === 3) _c(e, e, r);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      _c(t, e, r);
      break;
    } else if (t.tag === 1) {
      var n = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (Kt === null || !Kt.has(n))) {
        e = rn(r, e), e = wh(t, e, 1), t = Zt(t, e, 1), e = Le(), t !== null && (ni(t, 1, e), je(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function _v(e, t, r) {
  var n = e.pingCache;
  n !== null && n.delete(t), t = Le(), e.pingedLanes |= e.suspendedLanes & r, ge === e && (ye & r) === r && (ce === 4 || ce === 3 && (ye & 130023424) === ye && 500 > ie() - Vu ? gr(e, 0) : Gu |= r), je(e, t);
}
function jh(e, t) {
  t === 0 && (e.mode & 1 ? (t = gi, gi <<= 1, !(gi & 130023424) && (gi = 4194304)) : t = 1);
  var r = Le();
  e = Lt(e, t), e !== null && (ni(e, t, r), je(e, r));
}
function Iv(e) {
  var t = e.memoizedState, r = 0;
  t !== null && (r = t.retryLane), jh(e, r);
}
function Pv(e, t) {
  var r = 0;
  switch (e.tag) {
    case 13:
      var n = e.stateNode, i = e.memoizedState;
      i !== null && (r = i.retryLane);
      break;
    case 19:
      n = e.stateNode;
      break;
    default:
      throw Error(w(314));
  }
  n !== null && n.delete(t), jh(e, r);
}
var Uh;
Uh = function(e, t, r) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Be.current) Fe = !0;
  else {
    if (!(e.lanes & r) && !(t.flags & 128)) return Fe = !1, mv(e, t, r);
    Fe = !!(e.flags & 131072);
  }
  else Fe = !1, q && t.flags & 1048576 && Wd(t, co, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var n = t.type;
      Ui(e, t), e = t.pendingProps;
      var i = qr(t, De.current);
      Yr(t, r), i = Fu(null, t, n, e, i, r);
      var o = Bu();
      return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, $e(n) ? (o = !0, uo(t)) : o = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, Ru(t), i.updater = bo, t.stateNode = i, i._reactInternals = t, xl(t, n, e, r), t = Ol(null, t, n, !0, o, r)) : (t.tag = 0, q && o && Du(t), ke(null, t, i, r), t = t.child), t;
    case 16:
      n = t.elementType;
      e: {
        switch (Ui(e, t), e = t.pendingProps, i = n._init, n = i(n._payload), t.type = n, i = t.tag = Nv(n), e = ft(n, e), i) {
          case 0:
            t = Cl(null, t, n, e, r);
            break e;
          case 1:
            t = vc(null, t, n, e, r);
            break e;
          case 11:
            t = gc(null, t, n, e, r);
            break e;
          case 14:
            t = mc(null, t, n, ft(n.type, e), r);
            break e;
        }
        throw Error(w(
          306,
          n,
          ""
        ));
      }
      return t;
    case 0:
      return n = t.type, i = t.pendingProps, i = t.elementType === n ? i : ft(n, i), Cl(e, t, n, i, r);
    case 1:
      return n = t.type, i = t.pendingProps, i = t.elementType === n ? i : ft(n, i), vc(e, t, n, i, r);
    case 3:
      e: {
        if (Oh(t), e === null) throw Error(w(387));
        n = t.pendingProps, o = t.memoizedState, i = o.element, qd(e, t), po(t, n, null, r);
        var a = t.memoizedState;
        if (n = a.element, o.isDehydrated) if (o = { element: n, isDehydrated: !1, cache: a.cache, pendingSuspenseBoundaries: a.pendingSuspenseBoundaries, transitions: a.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
          i = rn(Error(w(423)), t), t = yc(e, t, n, r, i);
          break e;
        } else if (n !== i) {
          i = rn(Error(w(424)), t), t = yc(e, t, n, r, i);
          break e;
        } else for (Ge = Yt(t.stateNode.containerInfo.firstChild), Ve = t, q = !0, ht = null, r = Zd(t, null, n, r), t.child = r; r; ) r.flags = r.flags & -3 | 4096, r = r.sibling;
        else {
          if (Jr(), n === i) {
            t = Mt(e, t, r);
            break e;
          }
          ke(e, t, n, r);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Jd(t), e === null && Sl(t), n = t.type, i = t.pendingProps, o = e !== null ? e.memoizedProps : null, a = i.children, pl(n, i) ? a = null : o !== null && pl(n, o) && (t.flags |= 32), Ch(e, t), ke(e, t, a, r), t.child;
    case 6:
      return e === null && Sl(t), null;
    case 13:
      return Dh(e, t, r);
    case 4:
      return Lu(t, t.stateNode.containerInfo), n = t.pendingProps, e === null ? t.child = en(t, null, n, r) : ke(e, t, n, r), t.child;
    case 11:
      return n = t.type, i = t.pendingProps, i = t.elementType === n ? i : ft(n, i), gc(e, t, n, i, r);
    case 7:
      return ke(e, t, t.pendingProps, r), t.child;
    case 8:
      return ke(e, t, t.pendingProps.children, r), t.child;
    case 12:
      return ke(e, t, t.pendingProps.children, r), t.child;
    case 10:
      e: {
        if (n = t.type._context, i = t.pendingProps, o = t.memoizedProps, a = i.value, X(fo, n._currentValue), n._currentValue = a, o !== null) if (mt(o.value, a)) {
          if (o.children === i.children && !Be.current) {
            t = Mt(e, t, r);
            break e;
          }
        } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
          var l = o.dependencies;
          if (l !== null) {
            a = o.child;
            for (var u = l.firstContext; u !== null; ) {
              if (u.context === n) {
                if (o.tag === 1) {
                  u = Nt(-1, r & -r), u.tag = 2;
                  var s = o.updateQueue;
                  if (s !== null) {
                    s = s.shared;
                    var c = s.pending;
                    c === null ? u.next = u : (u.next = c.next, c.next = u), s.pending = u;
                  }
                }
                o.lanes |= r, u = o.alternate, u !== null && (u.lanes |= r), El(
                  o.return,
                  r,
                  t
                ), l.lanes |= r;
                break;
              }
              u = u.next;
            }
          } else if (o.tag === 10) a = o.type === t.type ? null : o.child;
          else if (o.tag === 18) {
            if (a = o.return, a === null) throw Error(w(341));
            a.lanes |= r, l = a.alternate, l !== null && (l.lanes |= r), El(a, r, t), a = o.sibling;
          } else a = o.child;
          if (a !== null) a.return = o;
          else for (a = o; a !== null; ) {
            if (a === t) {
              a = null;
              break;
            }
            if (o = a.sibling, o !== null) {
              o.return = a.return, a = o;
              break;
            }
            a = a.return;
          }
          o = a;
        }
        ke(e, t, i.children, r), t = t.child;
      }
      return t;
    case 9:
      return i = t.type, n = t.pendingProps.children, Yr(t, r), i = ot(i), n = n(i), t.flags |= 1, ke(e, t, n, r), t.child;
    case 14:
      return n = t.type, i = ft(n, t.pendingProps), i = ft(n.type, i), mc(e, t, n, i, r);
    case 15:
      return xh(e, t, t.type, t.pendingProps, r);
    case 17:
      return n = t.type, i = t.pendingProps, i = t.elementType === n ? i : ft(n, i), Ui(e, t), t.tag = 1, $e(n) ? (e = !0, uo(t)) : e = !1, Yr(t, r), Sh(t, n, i), xl(t, n, i, r), Ol(null, t, n, !0, e, r);
    case 19:
      return _h(e, t, r);
    case 22:
      return Th(e, t, r);
  }
  throw Error(w(156, t.tag));
};
function zh(e, t) {
  return md(e, t);
}
function kv(e, t, r, n) {
  this.tag = e, this.key = r, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function nt(e, t, r, n) {
  return new kv(e, t, r, n);
}
function Yu(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Nv(e) {
  if (typeof e == "function") return Yu(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === pu) return 11;
    if (e === gu) return 14;
  }
  return 2;
}
function Jt(e, t) {
  var r = e.alternate;
  return r === null ? (r = nt(e.tag, t, e.key, e.mode), r.elementType = e.elementType, r.type = e.type, r.stateNode = e.stateNode, r.alternate = e, e.alternate = r) : (r.pendingProps = t, r.type = e.type, r.flags = 0, r.subtreeFlags = 0, r.deletions = null), r.flags = e.flags & 14680064, r.childLanes = e.childLanes, r.lanes = e.lanes, r.child = e.child, r.memoizedProps = e.memoizedProps, r.memoizedState = e.memoizedState, r.updateQueue = e.updateQueue, t = e.dependencies, r.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, r.sibling = e.sibling, r.index = e.index, r.ref = e.ref, r;
}
function Vi(e, t, r, n, i, o) {
  var a = 2;
  if (n = e, typeof e == "function") Yu(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else e: switch (e) {
    case Lr:
      return mr(r.children, i, o, t);
    case hu:
      a = 8, i |= 8;
      break;
    case Wa:
      return e = nt(12, r, t, i | 2), e.elementType = Wa, e.lanes = o, e;
    case Xa:
      return e = nt(13, r, t, i), e.elementType = Xa, e.lanes = o, e;
    case Qa:
      return e = nt(19, r, t, i), e.elementType = Qa, e.lanes = o, e;
    case Jf:
      return Mo(r, i, o, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Kf:
          a = 10;
          break e;
        case qf:
          a = 9;
          break e;
        case pu:
          a = 11;
          break e;
        case gu:
          a = 14;
          break e;
        case Bt:
          a = 16, n = null;
          break e;
      }
      throw Error(w(130, e == null ? e : typeof e, ""));
  }
  return t = nt(a, r, t, i), t.elementType = e, t.type = n, t.lanes = o, t;
}
function mr(e, t, r, n) {
  return e = nt(7, e, n, t), e.lanes = r, e;
}
function Mo(e, t, r, n) {
  return e = nt(22, e, n, t), e.elementType = Jf, e.lanes = r, e.stateNode = { isHidden: !1 }, e;
}
function ka(e, t, r) {
  return e = nt(6, e, null, t), e.lanes = r, e;
}
function Na(e, t, r) {
  return t = nt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = r, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function bv(e, t, r, n, i) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = fa(0), this.expirationTimes = fa(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = fa(0), this.identifierPrefix = n, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
}
function Zu(e, t, r, n, i, o, a, l, u) {
  return e = new bv(e, t, r, l, u), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = nt(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: n, isDehydrated: r, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ru(o), e;
}
function Rv(e, t, r) {
  var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Rr, key: n == null ? null : "" + n, children: e, containerInfo: t, implementation: r };
}
function Gh(e) {
  if (!e) return tr;
  e = e._reactInternals;
  e: {
    if (Or(e) !== e || e.tag !== 1) throw Error(w(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if ($e(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(w(171));
  }
  if (e.tag === 1) {
    var r = e.type;
    if ($e(r)) return Gd(e, r, t);
  }
  return t;
}
function Vh(e, t, r, n, i, o, a, l, u) {
  return e = Zu(r, n, !0, e, i, o, a, l, u), e.context = Gh(null), r = e.current, n = Le(), i = qt(r), o = Nt(n, i), o.callback = t ?? null, Zt(r, o, i), e.current.lanes = i, ni(e, i, n), je(e, n), e;
}
function Ao(e, t, r, n) {
  var i = t.current, o = Le(), a = qt(i);
  return r = Gh(r), t.context === null ? t.context = r : t.pendingContext = r, t = Nt(o, a), t.payload = { element: e }, n = n === void 0 ? null : n, n !== null && (t.callback = n), e = Zt(i, t, a), e !== null && (gt(e, i, a, o), Bi(e, i, a)), a;
}
function xo(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ic(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var r = e.retryLane;
    e.retryLane = r !== 0 && r < t ? r : t;
  }
}
function Ku(e, t) {
  Ic(e, t), (e = e.alternate) && Ic(e, t);
}
function Lv() {
  return null;
}
var Wh = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function qu(e) {
  this._internalRoot = e;
}
Ho.prototype.render = qu.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(w(409));
  Ao(e, t, null, null);
};
Ho.prototype.unmount = qu.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    wr(function() {
      Ao(null, e, null, null);
    }), t[Rt] = null;
  }
};
function Ho(e) {
  this._internalRoot = e;
}
Ho.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Td();
    e = { blockedOn: null, target: e, priority: t };
    for (var r = 0; r < Ut.length && t !== 0 && t < Ut[r].priority; r++) ;
    Ut.splice(r, 0, e), r === 0 && Od(e);
  }
};
function Ju(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Fo(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Pc() {
}
function Mv(e, t, r, n, i) {
  if (i) {
    if (typeof n == "function") {
      var o = n;
      n = function() {
        var s = xo(a);
        o.call(s);
      };
    }
    var a = Vh(t, n, e, 0, null, !1, !1, "", Pc);
    return e._reactRootContainer = a, e[Rt] = a.current, Xn(e.nodeType === 8 ? e.parentNode : e), wr(), a;
  }
  for (; i = e.lastChild; ) e.removeChild(i);
  if (typeof n == "function") {
    var l = n;
    n = function() {
      var s = xo(u);
      l.call(s);
    };
  }
  var u = Zu(e, 0, !1, null, null, !1, !1, "", Pc);
  return e._reactRootContainer = u, e[Rt] = u.current, Xn(e.nodeType === 8 ? e.parentNode : e), wr(function() {
    Ao(t, u, r, n);
  }), u;
}
function Bo(e, t, r, n, i) {
  var o = r._reactRootContainer;
  if (o) {
    var a = o;
    if (typeof i == "function") {
      var l = i;
      i = function() {
        var u = xo(a);
        l.call(u);
      };
    }
    Ao(t, a, e, i);
  } else a = Mv(r, t, e, i, n);
  return xo(a);
}
wd = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var r = Dn(t.pendingLanes);
        r !== 0 && (yu(t, r | 1), je(t, ie()), !(U & 6) && (nn = ie() + 500, ir()));
      }
      break;
    case 13:
      wr(function() {
        var n = Lt(e, 1);
        if (n !== null) {
          var i = Le();
          gt(n, e, 1, i);
        }
      }), Ku(e, 1);
  }
};
Su = function(e) {
  if (e.tag === 13) {
    var t = Lt(e, 134217728);
    if (t !== null) {
      var r = Le();
      gt(t, e, 134217728, r);
    }
    Ku(e, 134217728);
  }
};
xd = function(e) {
  if (e.tag === 13) {
    var t = qt(e), r = Lt(e, t);
    if (r !== null) {
      var n = Le();
      gt(r, e, t, n);
    }
    Ku(e, t);
  }
};
Td = function() {
  return V;
};
Cd = function(e, t) {
  var r = V;
  try {
    return V = e, t();
  } finally {
    V = r;
  }
};
il = function(e, t, r) {
  switch (t) {
    case "input":
      if (Ka(e, r), t = r.name, r.type === "radio" && t != null) {
        for (r = e; r.parentNode; ) r = r.parentNode;
        for (r = r.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== e && n.form === e.form) {
            var i = Po(n);
            if (!i) throw Error(w(90));
            td(n), Ka(n, i);
          }
        }
      }
      break;
    case "textarea":
      nd(e, r);
      break;
    case "select":
      t = r.value, t != null && Vr(e, !!r.multiple, t, !1);
  }
};
cd = Wu;
fd = wr;
var Av = { usingClientEntryPoint: !1, Events: [oi, Fr, Po, ud, sd, Wu] }, wn = { findFiberByHostInstance: dr, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Hv = { bundleType: wn.bundleType, version: wn.version, rendererPackageName: wn.rendererPackageName, rendererConfig: wn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: At.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = pd(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: wn.findFiberByHostInstance || Lv, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Di = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Di.isDisabled && Di.supportsFiber) try {
    Oo = Di.inject(Hv), wt = Di;
  } catch {
  }
}
Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Av;
Qe.createPortal = function(e, t) {
  var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ju(t)) throw Error(w(200));
  return Rv(e, t, null, r);
};
Qe.createRoot = function(e, t) {
  if (!Ju(e)) throw Error(w(299));
  var r = !1, n = "", i = Wh;
  return t != null && (t.unstable_strictMode === !0 && (r = !0), t.identifierPrefix !== void 0 && (n = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = Zu(e, 1, !1, null, null, r, !1, n, i), e[Rt] = t.current, Xn(e.nodeType === 8 ? e.parentNode : e), new qu(t);
};
Qe.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(w(188)) : (e = Object.keys(e).join(","), Error(w(268, e)));
  return e = pd(t), e = e === null ? null : e.stateNode, e;
};
Qe.flushSync = function(e) {
  return wr(e);
};
Qe.hydrate = function(e, t, r) {
  if (!Fo(t)) throw Error(w(200));
  return Bo(null, e, t, !0, r);
};
Qe.hydrateRoot = function(e, t, r) {
  if (!Ju(e)) throw Error(w(405));
  var n = r != null && r.hydratedSources || null, i = !1, o = "", a = Wh;
  if (r != null && (r.unstable_strictMode === !0 && (i = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (a = r.onRecoverableError)), t = Vh(t, null, e, 1, r ?? null, i, !1, o, a), e[Rt] = t.current, Xn(e), n) for (e = 0; e < n.length; e++) r = n[e], i = r._getVersion, i = i(r._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [r, i] : t.mutableSourceEagerHydrationData.push(
    r,
    i
  );
  return new Ho(t);
};
Qe.render = function(e, t, r) {
  if (!Fo(t)) throw Error(w(200));
  return Bo(null, e, t, !1, r);
};
Qe.unmountComponentAtNode = function(e) {
  if (!Fo(e)) throw Error(w(40));
  return e._reactRootContainer ? (wr(function() {
    Bo(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Rt] = null;
    });
  }), !0) : !1;
};
Qe.unstable_batchedUpdates = Wu;
Qe.unstable_renderSubtreeIntoContainer = function(e, t, r, n) {
  if (!Fo(r)) throw Error(w(200));
  if (e == null || e._reactInternals === void 0) throw Error(w(38));
  return Bo(e, t, r, !1, n);
};
Qe.version = "18.3.1-next-f1338f8080-20240426";
function Xh() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Xh);
    } catch (e) {
      console.error(e);
    }
}
Xh(), Xf.exports = Qe;
var Qh = Xf.exports;
const _i = /* @__PURE__ */ ln(Qh);
var Yh, kc = Qh;
Yh = kc.createRoot, kc.hydrateRoot;
var Hl = function(e, t) {
  return Hl = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i]);
  }, Hl(e, t);
};
function ut(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Hl(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}
var k = function() {
  return k = Object.assign || function(t) {
    for (var r, n = 1, i = arguments.length; n < i; n++) {
      r = arguments[n];
      for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
    }
    return t;
  }, k.apply(this, arguments);
};
function on(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
  return r;
}
function Re(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, i = t.length, o; n < i; n++)
    (o || !(n in t)) && (o || (o = Array.prototype.slice.call(t, 0, n)), o[n] = t[n]);
  return e.concat(o || Array.prototype.slice.call(t));
}
function Ne(e, t) {
  var r = t && t.cache ? t.cache : zv, n = t && t.serializer ? t.serializer : Uv, i = t && t.strategy ? t.strategy : $v;
  return i(e, {
    cache: r,
    serializer: n
  });
}
function Fv(e) {
  return e == null || typeof e == "number" || typeof e == "boolean";
}
function Bv(e, t, r, n) {
  var i = Fv(n) ? n : r(n), o = t.get(i);
  return typeof o > "u" && (o = e.call(this, n), t.set(i, o)), o;
}
function Zh(e, t, r) {
  var n = Array.prototype.slice.call(arguments, 3), i = r(n), o = t.get(i);
  return typeof o > "u" && (o = e.apply(this, n), t.set(i, o)), o;
}
function Kh(e, t, r, n, i) {
  return r.bind(t, e, n, i);
}
function $v(e, t) {
  var r = e.length === 1 ? Bv : Zh;
  return Kh(e, this, r, t.cache.create(), t.serializer);
}
function jv(e, t) {
  return Kh(e, this, Zh, t.cache.create(), t.serializer);
}
var Uv = function() {
  return JSON.stringify(arguments);
};
function es() {
  this.cache = /* @__PURE__ */ Object.create(null);
}
es.prototype.get = function(e) {
  return this.cache[e];
};
es.prototype.set = function(e, t) {
  this.cache[e] = t;
};
var zv = {
  create: function() {
    return new es();
  }
}, be = {
  variadic: jv
};
function qh(e, t, r) {
  if (r === void 0 && (r = Error), !e)
    throw new r(t);
}
Ne(function() {
  for (var e, t = [], r = 0; r < arguments.length; r++)
    t[r] = arguments[r];
  return new ((e = Intl.NumberFormat).bind.apply(e, Re([void 0], t, !1)))();
}, {
  strategy: be.variadic
});
Ne(function() {
  for (var e, t = [], r = 0; r < arguments.length; r++)
    t[r] = arguments[r];
  return new ((e = Intl.DateTimeFormat).bind.apply(e, Re([void 0], t, !1)))();
}, {
  strategy: be.variadic
});
Ne(function() {
  for (var e, t = [], r = 0; r < arguments.length; r++)
    t[r] = arguments[r];
  return new ((e = Intl.PluralRules).bind.apply(e, Re([void 0], t, !1)))();
}, {
  strategy: be.variadic
});
Ne(function() {
  for (var e, t = [], r = 0; r < arguments.length; r++)
    t[r] = arguments[r];
  return new ((e = Intl.Locale).bind.apply(e, Re([void 0], t, !1)))();
}, {
  strategy: be.variadic
});
Ne(function() {
  for (var e, t = [], r = 0; r < arguments.length; r++)
    t[r] = arguments[r];
  return new ((e = Intl.ListFormat).bind.apply(e, Re([void 0], t, !1)))();
}, {
  strategy: be.variadic
});
var $;
(function(e) {
  e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})($ || ($ = {}));
var Z;
(function(e) {
  e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
})(Z || (Z = {}));
var an;
(function(e) {
  e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
})(an || (an = {}));
function Nc(e) {
  return e.type === Z.literal;
}
function Gv(e) {
  return e.type === Z.argument;
}
function Jh(e) {
  return e.type === Z.number;
}
function ep(e) {
  return e.type === Z.date;
}
function tp(e) {
  return e.type === Z.time;
}
function rp(e) {
  return e.type === Z.select;
}
function np(e) {
  return e.type === Z.plural;
}
function Vv(e) {
  return e.type === Z.pound;
}
function ip(e) {
  return e.type === Z.tag;
}
function op(e) {
  return !!(e && typeof e == "object" && e.type === an.number);
}
function Fl(e) {
  return !!(e && typeof e == "object" && e.type === an.dateTime);
}
var ap = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, Wv = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function Xv(e) {
  var t = {};
  return e.replace(Wv, function(r) {
    var n = r.length;
    switch (r[0]) {
      case "G":
        t.era = n === 4 ? "long" : n === 5 ? "narrow" : "short";
        break;
      case "y":
        t.year = n === 2 ? "2-digit" : "numeric";
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
        t.month = ["numeric", "2-digit", "short", "long", "narrow"][n - 1];
        break;
      case "w":
      case "W":
        throw new RangeError("`w/W` (week) patterns are not supported");
      case "d":
        t.day = ["numeric", "2-digit"][n - 1];
        break;
      case "D":
      case "F":
      case "g":
        throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
      case "E":
        t.weekday = n === 4 ? "long" : n === 5 ? "narrow" : "short";
        break;
      case "e":
        if (n < 4)
          throw new RangeError("`e..eee` (weekday) patterns are not supported");
        t.weekday = ["short", "long", "narrow", "short"][n - 4];
        break;
      case "c":
        if (n < 4)
          throw new RangeError("`c..ccc` (weekday) patterns are not supported");
        t.weekday = ["short", "long", "narrow", "short"][n - 4];
        break;
      case "a":
        t.hour12 = !0;
        break;
      case "b":
      case "B":
        throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
      case "h":
        t.hourCycle = "h12", t.hour = ["numeric", "2-digit"][n - 1];
        break;
      case "H":
        t.hourCycle = "h23", t.hour = ["numeric", "2-digit"][n - 1];
        break;
      case "K":
        t.hourCycle = "h11", t.hour = ["numeric", "2-digit"][n - 1];
        break;
      case "k":
        t.hourCycle = "h24", t.hour = ["numeric", "2-digit"][n - 1];
        break;
      case "j":
      case "J":
      case "C":
        throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
      case "m":
        t.minute = ["numeric", "2-digit"][n - 1];
        break;
      case "s":
        t.second = ["numeric", "2-digit"][n - 1];
        break;
      case "S":
      case "A":
        throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
      case "z":
        t.timeZoneName = n < 4 ? "short" : "long";
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
var Qv = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function Yv(e) {
  if (e.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var t = e.split(Qv).filter(function(d) {
    return d.length > 0;
  }), r = [], n = 0, i = t; n < i.length; n++) {
    var o = i[n], a = o.split("/");
    if (a.length === 0)
      throw new Error("Invalid number skeleton");
    for (var l = a[0], u = a.slice(1), s = 0, c = u; s < c.length; s++) {
      var h = c[s];
      if (h.length === 0)
        throw new Error("Invalid number skeleton");
    }
    r.push({ stem: l, options: u });
  }
  return r;
}
function Zv(e) {
  return e.replace(/^(.*?)-/, "");
}
var bc = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, lp = /^(@+)?(\+|#+)?[rs]?$/g, Kv = /(\*)(0+)|(#+)(0+)|(0+)/g, up = /^(0+)$/;
function Rc(e) {
  var t = {};
  return e[e.length - 1] === "r" ? t.roundingPriority = "morePrecision" : e[e.length - 1] === "s" && (t.roundingPriority = "lessPrecision"), e.replace(lp, function(r, n, i) {
    return typeof i != "string" ? (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length) : i === "+" ? t.minimumSignificantDigits = n.length : n[0] === "#" ? t.maximumSignificantDigits = n.length : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length + (typeof i == "string" ? i.length : 0)), "";
  }), t;
}
function sp(e) {
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
function qv(e) {
  var t;
  if (e[0] === "E" && e[1] === "E" ? (t = {
    notation: "engineering"
  }, e = e.slice(2)) : e[0] === "E" && (t = {
    notation: "scientific"
  }, e = e.slice(1)), t) {
    var r = e.slice(0, 2);
    if (r === "+!" ? (t.signDisplay = "always", e = e.slice(2)) : r === "+?" && (t.signDisplay = "exceptZero", e = e.slice(2)), !up.test(e))
      throw new Error("Malformed concise eng/scientific notation");
    t.minimumIntegerDigits = e.length;
  }
  return t;
}
function Lc(e) {
  var t = {}, r = sp(e);
  return r || t;
}
function Jv(e) {
  for (var t = {}, r = 0, n = e; r < n.length; r++) {
    var i = n[r];
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
        t.style = "unit", t.unit = Zv(i.options[0]);
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
        t = k(k(k({}, t), { notation: "scientific" }), i.options.reduce(function(u, s) {
          return k(k({}, u), Lc(s));
        }, {}));
        continue;
      case "engineering":
        t = k(k(k({}, t), { notation: "engineering" }), i.options.reduce(function(u, s) {
          return k(k({}, u), Lc(s));
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
        i.options[0].replace(Kv, function(u, s, c, h, d, m) {
          if (s)
            t.minimumIntegerDigits = c.length;
          else {
            if (h && d)
              throw new Error("We currently do not support maximum integer digits");
            if (m)
              throw new Error("We currently do not support exact integer digits");
          }
          return "";
        });
        continue;
    }
    if (up.test(i.stem)) {
      t.minimumIntegerDigits = i.stem.length;
      continue;
    }
    if (bc.test(i.stem)) {
      if (i.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      i.stem.replace(bc, function(u, s, c, h, d, m) {
        return c === "*" ? t.minimumFractionDigits = s.length : h && h[0] === "#" ? t.maximumFractionDigits = h.length : d && m ? (t.minimumFractionDigits = d.length, t.maximumFractionDigits = d.length + m.length) : (t.minimumFractionDigits = s.length, t.maximumFractionDigits = s.length), "";
      });
      var o = i.options[0];
      o === "w" ? t = k(k({}, t), { trailingZeroDisplay: "stripIfInteger" }) : o && (t = k(k({}, t), Rc(o)));
      continue;
    }
    if (lp.test(i.stem)) {
      t = k(k({}, t), Rc(i.stem));
      continue;
    }
    var a = sp(i.stem);
    a && (t = k(k({}, t), a));
    var l = qv(i.stem);
    l && (t = k(k({}, t), l));
  }
  return t;
}
var Ii = {
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
function ey(e, t) {
  for (var r = "", n = 0; n < e.length; n++) {
    var i = e.charAt(n);
    if (i === "j") {
      for (var o = 0; n + 1 < e.length && e.charAt(n + 1) === i; )
        o++, n++;
      var a = 1 + (o & 1), l = o < 2 ? 1 : 3 + (o >> 1), u = "a", s = ty(t);
      for ((s == "H" || s == "k") && (l = 0); l-- > 0; )
        r += u;
      for (; a-- > 0; )
        r = s + r;
    } else i === "J" ? r += "H" : r += i;
  }
  return r;
}
function ty(e) {
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
  var r = e.language, n;
  r !== "root" && (n = e.maximize().region);
  var i = Ii[n || ""] || Ii[r || ""] || Ii["".concat(r, "-001")] || Ii["001"];
  return i[0];
}
var ba, ry = new RegExp("^".concat(ap.source, "*")), ny = new RegExp("".concat(ap.source, "*$"));
function j(e, t) {
  return { start: e, end: t };
}
var iy = !!String.prototype.startsWith && "_a".startsWith("a", 1), oy = !!String.fromCodePoint, ay = !!Object.fromEntries, ly = !!String.prototype.codePointAt, uy = !!String.prototype.trimStart, sy = !!String.prototype.trimEnd, cy = !!Number.isSafeInteger, fy = cy ? Number.isSafeInteger : function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
}, Bl = !0;
try {
  var dy = fp("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Bl = ((ba = dy.exec("a")) === null || ba === void 0 ? void 0 : ba[0]) === "a";
} catch {
  Bl = !1;
}
var Mc = iy ? (
  // Native
  function(t, r, n) {
    return t.startsWith(r, n);
  }
) : (
  // For IE11
  function(t, r, n) {
    return t.slice(n, n + r.length) === r;
  }
), $l = oy ? String.fromCodePoint : (
  // IE11
  function() {
    for (var t = [], r = 0; r < arguments.length; r++)
      t[r] = arguments[r];
    for (var n = "", i = t.length, o = 0, a; i > o; ) {
      if (a = t[o++], a > 1114111)
        throw RangeError(a + " is not a valid code point");
      n += a < 65536 ? String.fromCharCode(a) : String.fromCharCode(((a -= 65536) >> 10) + 55296, a % 1024 + 56320);
    }
    return n;
  }
), Ac = (
  // native
  ay ? Object.fromEntries : (
    // Ponyfill
    function(t) {
      for (var r = {}, n = 0, i = t; n < i.length; n++) {
        var o = i[n], a = o[0], l = o[1];
        r[a] = l;
      }
      return r;
    }
  )
), cp = ly ? (
  // Native
  function(t, r) {
    return t.codePointAt(r);
  }
) : (
  // IE 11
  function(t, r) {
    var n = t.length;
    if (!(r < 0 || r >= n)) {
      var i = t.charCodeAt(r), o;
      return i < 55296 || i > 56319 || r + 1 === n || (o = t.charCodeAt(r + 1)) < 56320 || o > 57343 ? i : (i - 55296 << 10) + (o - 56320) + 65536;
    }
  }
), hy = uy ? (
  // Native
  function(t) {
    return t.trimStart();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(ry, "");
  }
), py = sy ? (
  // Native
  function(t) {
    return t.trimEnd();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(ny, "");
  }
);
function fp(e, t) {
  return new RegExp(e, t);
}
var jl;
if (Bl) {
  var Hc = fp("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  jl = function(t, r) {
    var n;
    Hc.lastIndex = r;
    var i = Hc.exec(t);
    return (n = i[1]) !== null && n !== void 0 ? n : "";
  };
} else
  jl = function(t, r) {
    for (var n = []; ; ) {
      var i = cp(t, r);
      if (i === void 0 || dp(i) || yy(i))
        break;
      n.push(i), r += i >= 65536 ? 2 : 1;
    }
    return $l.apply(void 0, n);
  };
var gy = (
  /** @class */
  function() {
    function e(t, r) {
      r === void 0 && (r = {}), this.message = t, this.position = { offset: 0, line: 1, column: 1 }, this.ignoreTag = !!r.ignoreTag, this.locale = r.locale, this.requiresOtherClause = !!r.requiresOtherClause, this.shouldParseSkeletons = !!r.shouldParseSkeletons;
    }
    return e.prototype.parse = function() {
      if (this.offset() !== 0)
        throw Error("parser can only be used once");
      return this.parseMessage(0, "", !1);
    }, e.prototype.parseMessage = function(t, r, n) {
      for (var i = []; !this.isEOF(); ) {
        var o = this.char();
        if (o === 123) {
          var a = this.parseArgument(t, n);
          if (a.err)
            return a;
          i.push(a.val);
        } else {
          if (o === 125 && t > 0)
            break;
          if (o === 35 && (r === "plural" || r === "selectordinal")) {
            var l = this.clonePosition();
            this.bump(), i.push({
              type: Z.pound,
              location: j(l, this.clonePosition())
            });
          } else if (o === 60 && !this.ignoreTag && this.peek() === 47) {
            if (n)
              break;
            return this.error($.UNMATCHED_CLOSING_TAG, j(this.clonePosition(), this.clonePosition()));
          } else if (o === 60 && !this.ignoreTag && Ul(this.peek() || 0)) {
            var a = this.parseTag(t, r);
            if (a.err)
              return a;
            i.push(a.val);
          } else {
            var a = this.parseLiteral(t, r);
            if (a.err)
              return a;
            i.push(a.val);
          }
        }
      }
      return { val: i, err: null };
    }, e.prototype.parseTag = function(t, r) {
      var n = this.clonePosition();
      this.bump();
      var i = this.parseTagName();
      if (this.bumpSpace(), this.bumpIf("/>"))
        return {
          val: {
            type: Z.literal,
            value: "<".concat(i, "/>"),
            location: j(n, this.clonePosition())
          },
          err: null
        };
      if (this.bumpIf(">")) {
        var o = this.parseMessage(t + 1, r, !0);
        if (o.err)
          return o;
        var a = o.val, l = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !Ul(this.char()))
            return this.error($.INVALID_TAG, j(l, this.clonePosition()));
          var u = this.clonePosition(), s = this.parseTagName();
          return i !== s ? this.error($.UNMATCHED_CLOSING_TAG, j(u, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: Z.tag,
              value: i,
              children: a,
              location: j(n, this.clonePosition())
            },
            err: null
          } : this.error($.INVALID_TAG, j(l, this.clonePosition())));
        } else
          return this.error($.UNCLOSED_TAG, j(n, this.clonePosition()));
      } else
        return this.error($.INVALID_TAG, j(n, this.clonePosition()));
    }, e.prototype.parseTagName = function() {
      var t = this.offset();
      for (this.bump(); !this.isEOF() && vy(this.char()); )
        this.bump();
      return this.message.slice(t, this.offset());
    }, e.prototype.parseLiteral = function(t, r) {
      for (var n = this.clonePosition(), i = ""; ; ) {
        var o = this.tryParseQuote(r);
        if (o) {
          i += o;
          continue;
        }
        var a = this.tryParseUnquoted(t, r);
        if (a) {
          i += a;
          continue;
        }
        var l = this.tryParseLeftAngleBracket();
        if (l) {
          i += l;
          continue;
        }
        break;
      }
      var u = j(n, this.clonePosition());
      return {
        val: { type: Z.literal, value: i, location: u },
        err: null
      };
    }, e.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !my(this.peek() || 0)) ? (this.bump(), "<") : null;
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
      var r = [this.char()];
      for (this.bump(); !this.isEOF(); ) {
        var n = this.char();
        if (n === 39)
          if (this.peek() === 39)
            r.push(39), this.bump();
          else {
            this.bump();
            break;
          }
        else
          r.push(n);
        this.bump();
      }
      return $l.apply(void 0, r);
    }, e.prototype.tryParseUnquoted = function(t, r) {
      if (this.isEOF())
        return null;
      var n = this.char();
      return n === 60 || n === 123 || n === 35 && (r === "plural" || r === "selectordinal") || n === 125 && t > 0 ? null : (this.bump(), $l(n));
    }, e.prototype.parseArgument = function(t, r) {
      var n = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error($.EXPECT_ARGUMENT_CLOSING_BRACE, j(n, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error($.EMPTY_ARGUMENT, j(n, this.clonePosition()));
      var i = this.parseIdentifierIfPossible().value;
      if (!i)
        return this.error($.MALFORMED_ARGUMENT, j(n, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error($.EXPECT_ARGUMENT_CLOSING_BRACE, j(n, this.clonePosition()));
      switch (this.char()) {
        case 125:
          return this.bump(), {
            val: {
              type: Z.argument,
              // value does not include the opening and closing braces.
              value: i,
              location: j(n, this.clonePosition())
            },
            err: null
          };
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error($.EXPECT_ARGUMENT_CLOSING_BRACE, j(n, this.clonePosition())) : this.parseArgumentOptions(t, r, i, n);
        default:
          return this.error($.MALFORMED_ARGUMENT, j(n, this.clonePosition()));
      }
    }, e.prototype.parseIdentifierIfPossible = function() {
      var t = this.clonePosition(), r = this.offset(), n = jl(this.message, r), i = r + n.length;
      this.bumpTo(i);
      var o = this.clonePosition(), a = j(t, o);
      return { value: n, location: a };
    }, e.prototype.parseArgumentOptions = function(t, r, n, i) {
      var o, a = this.clonePosition(), l = this.parseIdentifierIfPossible().value, u = this.clonePosition();
      switch (l) {
        case "":
          return this.error($.EXPECT_ARGUMENT_TYPE, j(a, u));
        case "number":
        case "date":
        case "time": {
          this.bumpSpace();
          var s = null;
          if (this.bumpIf(",")) {
            this.bumpSpace();
            var c = this.clonePosition(), h = this.parseSimpleArgStyleIfPossible();
            if (h.err)
              return h;
            var d = py(h.val);
            if (d.length === 0)
              return this.error($.EXPECT_ARGUMENT_STYLE, j(this.clonePosition(), this.clonePosition()));
            var m = j(c, this.clonePosition());
            s = { style: d, styleLocation: m };
          }
          var y = this.tryParseArgumentClose(i);
          if (y.err)
            return y;
          var v = j(i, this.clonePosition());
          if (s && Mc(s == null ? void 0 : s.style, "::", 0)) {
            var _ = hy(s.style.slice(2));
            if (l === "number") {
              var h = this.parseNumberSkeletonFromString(_, s.styleLocation);
              return h.err ? h : {
                val: { type: Z.number, value: n, location: v, style: h.val },
                err: null
              };
            } else {
              if (_.length === 0)
                return this.error($.EXPECT_DATE_TIME_SKELETON, v);
              var p = _;
              this.locale && (p = ey(_, this.locale));
              var d = {
                type: an.dateTime,
                pattern: p,
                location: s.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? Xv(p) : {}
              }, f = l === "date" ? Z.date : Z.time;
              return {
                val: { type: f, value: n, location: v, style: d },
                err: null
              };
            }
          }
          return {
            val: {
              type: l === "number" ? Z.number : l === "date" ? Z.date : Z.time,
              value: n,
              location: v,
              style: (o = s == null ? void 0 : s.style) !== null && o !== void 0 ? o : null
            },
            err: null
          };
        }
        case "plural":
        case "selectordinal":
        case "select": {
          var g = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(","))
            return this.error($.EXPECT_SELECT_ARGUMENT_OPTIONS, j(g, k({}, g)));
          this.bumpSpace();
          var S = this.parseIdentifierIfPossible(), T = 0;
          if (l !== "select" && S.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error($.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, j(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var h = this.tryParseDecimalInteger($.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, $.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (h.err)
              return h;
            this.bumpSpace(), S = this.parseIdentifierIfPossible(), T = h.val;
          }
          var C = this.tryParsePluralOrSelectOptions(t, l, r, S);
          if (C.err)
            return C;
          var y = this.tryParseArgumentClose(i);
          if (y.err)
            return y;
          var D = j(i, this.clonePosition());
          return l === "select" ? {
            val: {
              type: Z.select,
              value: n,
              options: Ac(C.val),
              location: D
            },
            err: null
          } : {
            val: {
              type: Z.plural,
              value: n,
              options: Ac(C.val),
              offset: T,
              pluralType: l === "plural" ? "cardinal" : "ordinal",
              location: D
            },
            err: null
          };
        }
        default:
          return this.error($.INVALID_ARGUMENT_TYPE, j(a, u));
      }
    }, e.prototype.tryParseArgumentClose = function(t) {
      return this.isEOF() || this.char() !== 125 ? this.error($.EXPECT_ARGUMENT_CLOSING_BRACE, j(t, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, e.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var t = 0, r = this.clonePosition(); !this.isEOF(); ) {
        var n = this.char();
        switch (n) {
          case 39: {
            this.bump();
            var i = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error($.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, j(i, this.clonePosition()));
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
                val: this.message.slice(r.offset, this.offset()),
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
        val: this.message.slice(r.offset, this.offset()),
        err: null
      };
    }, e.prototype.parseNumberSkeletonFromString = function(t, r) {
      var n = [];
      try {
        n = Yv(t);
      } catch {
        return this.error($.INVALID_NUMBER_SKELETON, r);
      }
      return {
        val: {
          type: an.number,
          tokens: n,
          location: r,
          parsedOptions: this.shouldParseSkeletons ? Jv(n) : {}
        },
        err: null
      };
    }, e.prototype.tryParsePluralOrSelectOptions = function(t, r, n, i) {
      for (var o, a = !1, l = [], u = /* @__PURE__ */ new Set(), s = i.value, c = i.location; ; ) {
        if (s.length === 0) {
          var h = this.clonePosition();
          if (r !== "select" && this.bumpIf("=")) {
            var d = this.tryParseDecimalInteger($.EXPECT_PLURAL_ARGUMENT_SELECTOR, $.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (d.err)
              return d;
            c = j(h, this.clonePosition()), s = this.message.slice(h.offset, this.offset());
          } else
            break;
        }
        if (u.has(s))
          return this.error(r === "select" ? $.DUPLICATE_SELECT_ARGUMENT_SELECTOR : $.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
        s === "other" && (a = !0), this.bumpSpace();
        var m = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(r === "select" ? $.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : $.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, j(this.clonePosition(), this.clonePosition()));
        var y = this.parseMessage(t + 1, r, n);
        if (y.err)
          return y;
        var v = this.tryParseArgumentClose(m);
        if (v.err)
          return v;
        l.push([
          s,
          {
            value: y.val,
            location: j(m, this.clonePosition())
          }
        ]), u.add(s), this.bumpSpace(), o = this.parseIdentifierIfPossible(), s = o.value, c = o.location;
      }
      return l.length === 0 ? this.error(r === "select" ? $.EXPECT_SELECT_ARGUMENT_SELECTOR : $.EXPECT_PLURAL_ARGUMENT_SELECTOR, j(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !a ? this.error($.MISSING_OTHER_CLAUSE, j(this.clonePosition(), this.clonePosition())) : { val: l, err: null };
    }, e.prototype.tryParseDecimalInteger = function(t, r) {
      var n = 1, i = this.clonePosition();
      this.bumpIf("+") || this.bumpIf("-") && (n = -1);
      for (var o = !1, a = 0; !this.isEOF(); ) {
        var l = this.char();
        if (l >= 48 && l <= 57)
          o = !0, a = a * 10 + (l - 48), this.bump();
        else
          break;
      }
      var u = j(i, this.clonePosition());
      return o ? (a *= n, fy(a) ? { val: a, err: null } : this.error(r, u)) : this.error(t, u);
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
      var r = cp(this.message, t);
      if (r === void 0)
        throw Error("Offset ".concat(t, " is at invalid UTF-16 code unit boundary"));
      return r;
    }, e.prototype.error = function(t, r) {
      return {
        val: null,
        err: {
          kind: t,
          message: this.message,
          location: r
        }
      };
    }, e.prototype.bump = function() {
      if (!this.isEOF()) {
        var t = this.char();
        t === 10 ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += t < 65536 ? 1 : 2);
      }
    }, e.prototype.bumpIf = function(t) {
      if (Mc(this.message, t, this.offset())) {
        for (var r = 0; r < t.length; r++)
          this.bump();
        return !0;
      }
      return !1;
    }, e.prototype.bumpUntil = function(t) {
      var r = this.offset(), n = this.message.indexOf(t, r);
      return n >= 0 ? (this.bumpTo(n), !0) : (this.bumpTo(this.message.length), !1);
    }, e.prototype.bumpTo = function(t) {
      if (this.offset() > t)
        throw Error("targetOffset ".concat(t, " must be greater than or equal to the current offset ").concat(this.offset()));
      for (t = Math.min(t, this.message.length); ; ) {
        var r = this.offset();
        if (r === t)
          break;
        if (r > t)
          throw Error("targetOffset ".concat(t, " is at invalid UTF-16 code unit boundary"));
        if (this.bump(), this.isEOF())
          break;
      }
    }, e.prototype.bumpSpace = function() {
      for (; !this.isEOF() && dp(this.char()); )
        this.bump();
    }, e.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var t = this.char(), r = this.offset(), n = this.message.charCodeAt(r + (t >= 65536 ? 2 : 1));
      return n ?? null;
    }, e;
  }()
);
function Ul(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function my(e) {
  return Ul(e) || e === 47;
}
function vy(e) {
  return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
function dp(e) {
  return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
}
function yy(e) {
  return e >= 33 && e <= 35 || e === 36 || e >= 37 && e <= 39 || e === 40 || e === 41 || e === 42 || e === 43 || e === 44 || e === 45 || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || e === 91 || e === 92 || e === 93 || e === 94 || e === 96 || e === 123 || e === 124 || e === 125 || e === 126 || e === 161 || e >= 162 && e <= 165 || e === 166 || e === 167 || e === 169 || e === 171 || e === 172 || e === 174 || e === 176 || e === 177 || e === 182 || e === 187 || e === 191 || e === 215 || e === 247 || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || e === 8216 || e === 8217 || e === 8218 || e >= 8219 && e <= 8220 || e === 8221 || e === 8222 || e === 8223 || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || e === 8249 || e === 8250 || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || e === 8260 || e === 8261 || e === 8262 || e >= 8263 && e <= 8273 || e === 8274 || e === 8275 || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || e === 8608 || e >= 8609 && e <= 8610 || e === 8611 || e >= 8612 && e <= 8613 || e === 8614 || e >= 8615 && e <= 8621 || e === 8622 || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || e === 8658 || e === 8659 || e === 8660 || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || e === 8968 || e === 8969 || e === 8970 || e === 8971 || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || e === 9001 || e === 9002 || e >= 9003 && e <= 9083 || e === 9084 || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || e === 9655 || e >= 9656 && e <= 9664 || e === 9665 || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || e === 9839 || e >= 9840 && e <= 10087 || e === 10088 || e === 10089 || e === 10090 || e === 10091 || e === 10092 || e === 10093 || e === 10094 || e === 10095 || e === 10096 || e === 10097 || e === 10098 || e === 10099 || e === 10100 || e === 10101 || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || e === 10181 || e === 10182 || e >= 10183 && e <= 10213 || e === 10214 || e === 10215 || e === 10216 || e === 10217 || e === 10218 || e === 10219 || e === 10220 || e === 10221 || e === 10222 || e === 10223 || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || e === 10627 || e === 10628 || e === 10629 || e === 10630 || e === 10631 || e === 10632 || e === 10633 || e === 10634 || e === 10635 || e === 10636 || e === 10637 || e === 10638 || e === 10639 || e === 10640 || e === 10641 || e === 10642 || e === 10643 || e === 10644 || e === 10645 || e === 10646 || e === 10647 || e === 10648 || e >= 10649 && e <= 10711 || e === 10712 || e === 10713 || e === 10714 || e === 10715 || e >= 10716 && e <= 10747 || e === 10748 || e === 10749 || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || e === 11158 || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || e === 11778 || e === 11779 || e === 11780 || e === 11781 || e >= 11782 && e <= 11784 || e === 11785 || e === 11786 || e === 11787 || e === 11788 || e === 11789 || e >= 11790 && e <= 11798 || e === 11799 || e >= 11800 && e <= 11801 || e === 11802 || e === 11803 || e === 11804 || e === 11805 || e >= 11806 && e <= 11807 || e === 11808 || e === 11809 || e === 11810 || e === 11811 || e === 11812 || e === 11813 || e === 11814 || e === 11815 || e === 11816 || e === 11817 || e >= 11818 && e <= 11822 || e === 11823 || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || e === 11840 || e === 11841 || e === 11842 || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || e === 11858 || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || e === 12296 || e === 12297 || e === 12298 || e === 12299 || e === 12300 || e === 12301 || e === 12302 || e === 12303 || e === 12304 || e === 12305 || e >= 12306 && e <= 12307 || e === 12308 || e === 12309 || e === 12310 || e === 12311 || e === 12312 || e === 12313 || e === 12314 || e === 12315 || e === 12316 || e === 12317 || e >= 12318 && e <= 12319 || e === 12320 || e === 12336 || e === 64830 || e === 64831 || e >= 65093 && e <= 65094;
}
function zl(e) {
  e.forEach(function(t) {
    if (delete t.location, rp(t) || np(t))
      for (var r in t.options)
        delete t.options[r].location, zl(t.options[r].value);
    else Jh(t) && op(t.style) || (ep(t) || tp(t)) && Fl(t.style) ? delete t.style.location : ip(t) && zl(t.children);
  });
}
function Sy(e, t) {
  t === void 0 && (t = {}), t = k({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, t);
  var r = new gy(e, t).parse();
  if (r.err) {
    var n = SyntaxError($[r.err.kind]);
    throw n.location = r.err.location, n.originalMessage = r.err.message, n;
  }
  return t != null && t.captureLocation || zl(r.val), r.val;
}
var Tt;
(function(e) {
  e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API";
})(Tt || (Tt = {}));
var or = (
  /** @class */
  function(e) {
    ut(t, e);
    function t(r, n, i) {
      var o = e.call(this, r) || this;
      return o.code = n, o.originalMessage = i, o;
    }
    return t.prototype.toString = function() {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    }, t;
  }(Error)
), Fc = (
  /** @class */
  function(e) {
    ut(t, e);
    function t(r, n, i, o) {
      return e.call(this, 'Invalid values for "'.concat(r, '": "').concat(n, '". Options are "').concat(Object.keys(i).join('", "'), '"'), Tt.INVALID_VALUE, o) || this;
    }
    return t;
  }(or)
), Ey = (
  /** @class */
  function(e) {
    ut(t, e);
    function t(r, n, i) {
      return e.call(this, 'Value for "'.concat(r, '" must be of type ').concat(n), Tt.INVALID_VALUE, i) || this;
    }
    return t;
  }(or)
), wy = (
  /** @class */
  function(e) {
    ut(t, e);
    function t(r, n) {
      return e.call(this, 'The intl string context variable "'.concat(r, '" was not provided to the string "').concat(n, '"'), Tt.MISSING_VALUE, n) || this;
    }
    return t;
  }(or)
), Ie;
(function(e) {
  e[e.literal = 0] = "literal", e[e.object = 1] = "object";
})(Ie || (Ie = {}));
function xy(e) {
  return e.length < 2 ? e : e.reduce(function(t, r) {
    var n = t[t.length - 1];
    return !n || n.type !== Ie.literal || r.type !== Ie.literal ? t.push(r) : n.value += r.value, t;
  }, []);
}
function hp(e) {
  return typeof e == "function";
}
function Wi(e, t, r, n, i, o, a) {
  if (e.length === 1 && Nc(e[0]))
    return [
      {
        type: Ie.literal,
        value: e[0].value
      }
    ];
  for (var l = [], u = 0, s = e; u < s.length; u++) {
    var c = s[u];
    if (Nc(c)) {
      l.push({
        type: Ie.literal,
        value: c.value
      });
      continue;
    }
    if (Vv(c)) {
      typeof o == "number" && l.push({
        type: Ie.literal,
        value: r.getNumberFormat(t).format(o)
      });
      continue;
    }
    var h = c.value;
    if (!(i && h in i))
      throw new wy(h, a);
    var d = i[h];
    if (Gv(c)) {
      (!d || typeof d == "string" || typeof d == "number") && (d = typeof d == "string" || typeof d == "number" ? String(d) : ""), l.push({
        type: typeof d == "string" ? Ie.literal : Ie.object,
        value: d
      });
      continue;
    }
    if (ep(c)) {
      var m = typeof c.style == "string" ? n.date[c.style] : Fl(c.style) ? c.style.parsedOptions : void 0;
      l.push({
        type: Ie.literal,
        value: r.getDateTimeFormat(t, m).format(d)
      });
      continue;
    }
    if (tp(c)) {
      var m = typeof c.style == "string" ? n.time[c.style] : Fl(c.style) ? c.style.parsedOptions : n.time.medium;
      l.push({
        type: Ie.literal,
        value: r.getDateTimeFormat(t, m).format(d)
      });
      continue;
    }
    if (Jh(c)) {
      var m = typeof c.style == "string" ? n.number[c.style] : op(c.style) ? c.style.parsedOptions : void 0;
      m && m.scale && (d = d * (m.scale || 1)), l.push({
        type: Ie.literal,
        value: r.getNumberFormat(t, m).format(d)
      });
      continue;
    }
    if (ip(c)) {
      var y = c.children, v = c.value, _ = i[v];
      if (!hp(_))
        throw new Ey(v, "function", a);
      var p = Wi(y, t, r, n, i, o), f = _(p.map(function(T) {
        return T.value;
      }));
      Array.isArray(f) || (f = [f]), l.push.apply(l, f.map(function(T) {
        return {
          type: typeof T == "string" ? Ie.literal : Ie.object,
          value: T
        };
      }));
    }
    if (rp(c)) {
      var g = c.options[d] || c.options.other;
      if (!g)
        throw new Fc(c.value, d, Object.keys(c.options), a);
      l.push.apply(l, Wi(g.value, t, r, n, i));
      continue;
    }
    if (np(c)) {
      var g = c.options["=".concat(d)];
      if (!g) {
        if (!Intl.PluralRules)
          throw new or(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, Tt.MISSING_INTL_API, a);
        var S = r.getPluralRules(t, { type: c.pluralType }).select(d - (c.offset || 0));
        g = c.options[S] || c.options.other;
      }
      if (!g)
        throw new Fc(c.value, d, Object.keys(c.options), a);
      l.push.apply(l, Wi(g.value, t, r, n, i, d - (c.offset || 0)));
      continue;
    }
  }
  return xy(l);
}
function Ty(e, t) {
  return t ? k(k(k({}, e || {}), t || {}), Object.keys(e).reduce(function(r, n) {
    return r[n] = k(k({}, e[n]), t[n] || {}), r;
  }, {})) : e;
}
function Cy(e, t) {
  return t ? Object.keys(e).reduce(function(r, n) {
    return r[n] = Ty(e[n], t[n]), r;
  }, k({}, e)) : e;
}
function Ra(e) {
  return {
    create: function() {
      return {
        get: function(t) {
          return e[t];
        },
        set: function(t, r) {
          e[t] = r;
        }
      };
    }
  };
}
function Oy(e) {
  return e === void 0 && (e = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: Ne(function() {
      for (var t, r = [], n = 0; n < arguments.length; n++)
        r[n] = arguments[n];
      return new ((t = Intl.NumberFormat).bind.apply(t, Re([void 0], r, !1)))();
    }, {
      cache: Ra(e.number),
      strategy: be.variadic
    }),
    getDateTimeFormat: Ne(function() {
      for (var t, r = [], n = 0; n < arguments.length; n++)
        r[n] = arguments[n];
      return new ((t = Intl.DateTimeFormat).bind.apply(t, Re([void 0], r, !1)))();
    }, {
      cache: Ra(e.dateTime),
      strategy: be.variadic
    }),
    getPluralRules: Ne(function() {
      for (var t, r = [], n = 0; n < arguments.length; n++)
        r[n] = arguments[n];
      return new ((t = Intl.PluralRules).bind.apply(t, Re([void 0], r, !1)))();
    }, {
      cache: Ra(e.pluralRules),
      strategy: be.variadic
    })
  };
}
var pp = (
  /** @class */
  function() {
    function e(t, r, n, i) {
      r === void 0 && (r = e.defaultLocale);
      var o = this;
      if (this.formatterCache = {
        number: {},
        dateTime: {},
        pluralRules: {}
      }, this.format = function(u) {
        var s = o.formatToParts(u);
        if (s.length === 1)
          return s[0].value;
        var c = s.reduce(function(h, d) {
          return !h.length || d.type !== Ie.literal || typeof h[h.length - 1] != "string" ? h.push(d.value) : h[h.length - 1] += d.value, h;
        }, []);
        return c.length <= 1 ? c[0] || "" : c;
      }, this.formatToParts = function(u) {
        return Wi(o.ast, o.locales, o.formatters, o.formats, u, void 0, o.message);
      }, this.resolvedOptions = function() {
        var u;
        return {
          locale: ((u = o.resolvedLocale) === null || u === void 0 ? void 0 : u.toString()) || Intl.NumberFormat.supportedLocalesOf(o.locales)[0]
        };
      }, this.getAst = function() {
        return o.ast;
      }, this.locales = r, this.resolvedLocale = e.resolveLocale(r), typeof t == "string") {
        if (this.message = t, !e.__parse)
          throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
        var a = i || {};
        a.formatters;
        var l = on(a, ["formatters"]);
        this.ast = e.__parse(t, k(k({}, l), { locale: this.resolvedLocale }));
      } else
        this.ast = t;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = Cy(e.formats, n), this.formatters = i && i.formatters || Oy(this.formatterCache);
    }
    return Object.defineProperty(e, "defaultLocale", {
      get: function() {
        return e.memoizedDefaultLocale || (e.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale), e.memoizedDefaultLocale;
      },
      enumerable: !1,
      configurable: !0
    }), e.memoizedDefaultLocale = null, e.resolveLocale = function(t) {
      if (!(typeof Intl.Locale > "u")) {
        var r = Intl.NumberFormat.supportedLocalesOf(t);
        return r.length > 0 ? new Intl.Locale(r[0]) : new Intl.Locale(typeof t == "string" ? t : t[0]);
      }
    }, e.__parse = Sy, e.formats = {
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
), xr;
(function(e) {
  e.FORMAT_ERROR = "FORMAT_ERROR", e.UNSUPPORTED_FORMATTER = "UNSUPPORTED_FORMATTER", e.INVALID_CONFIG = "INVALID_CONFIG", e.MISSING_DATA = "MISSING_DATA", e.MISSING_TRANSLATION = "MISSING_TRANSLATION";
})(xr || (xr = {}));
var li = (
  /** @class */
  function(e) {
    ut(t, e);
    function t(r, n, i) {
      var o = this, a = i ? i instanceof Error ? i : new Error(String(i)) : void 0;
      return o = e.call(this, "[@formatjs/intl Error ".concat(r, "] ").concat(n, `
`).concat(a ? `
`.concat(a.message, `
`).concat(a.stack) : "")) || this, o.code = r, typeof Error.captureStackTrace == "function" && Error.captureStackTrace(o, t), o;
    }
    return t;
  }(Error)
), Dy = (
  /** @class */
  function(e) {
    ut(t, e);
    function t(r, n) {
      return e.call(this, xr.UNSUPPORTED_FORMATTER, r, n) || this;
    }
    return t;
  }(li)
), _y = (
  /** @class */
  function(e) {
    ut(t, e);
    function t(r, n) {
      return e.call(this, xr.INVALID_CONFIG, r, n) || this;
    }
    return t;
  }(li)
), Bc = (
  /** @class */
  function(e) {
    ut(t, e);
    function t(r, n) {
      return e.call(this, xr.MISSING_DATA, r, n) || this;
    }
    return t;
  }(li)
), st = (
  /** @class */
  function(e) {
    ut(t, e);
    function t(r, n, i) {
      var o = e.call(this, xr.FORMAT_ERROR, "".concat(r, `
Locale: `).concat(n, `
`), i) || this;
      return o.locale = n, o;
    }
    return t;
  }(li)
), La = (
  /** @class */
  function(e) {
    ut(t, e);
    function t(r, n, i, o) {
      var a = e.call(this, "".concat(r, `
MessageID: `).concat(i == null ? void 0 : i.id, `
Default Message: `).concat(i == null ? void 0 : i.defaultMessage, `
Description: `).concat(i == null ? void 0 : i.description, `
`), n, o) || this;
      return a.descriptor = i, a.locale = n, a;
    }
    return t;
  }(st)
), Iy = (
  /** @class */
  function(e) {
    ut(t, e);
    function t(r, n) {
      var i = e.call(this, xr.MISSING_TRANSLATION, 'Missing message: "'.concat(r.id, '" for locale "').concat(n, '", using ').concat(r.defaultMessage ? "default message (".concat(typeof r.defaultMessage == "string" ? r.defaultMessage : r.defaultMessage.map(function(o) {
        var a;
        return (a = o.value) !== null && a !== void 0 ? a : JSON.stringify(o);
      }).join(), ")") : "id", " as fallback.")) || this;
      return i.descriptor = r, i;
    }
    return t;
  }(li)
);
function Dr(e, t, r) {
  return r === void 0 && (r = {}), t.reduce(function(n, i) {
    return i in e ? n[i] = e[i] : i in r && (n[i] = r[i]), n;
  }, {});
}
var Py = function(e) {
}, ky = function(e) {
}, gp = {
  formats: {},
  messages: {},
  timeZone: void 0,
  defaultLocale: "en",
  defaultFormats: {},
  fallbackOnEmptyString: !0,
  onError: Py,
  onWarn: ky
};
function mp() {
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
function lr(e) {
  return {
    create: function() {
      return {
        get: function(t) {
          return e[t];
        },
        set: function(t, r) {
          e[t] = r;
        }
      };
    }
  };
}
function Ny(e) {
  e === void 0 && (e = mp());
  var t = Intl.RelativeTimeFormat, r = Intl.ListFormat, n = Intl.DisplayNames, i = Ne(function() {
    for (var l, u = [], s = 0; s < arguments.length; s++)
      u[s] = arguments[s];
    return new ((l = Intl.DateTimeFormat).bind.apply(l, Re([void 0], u, !1)))();
  }, {
    cache: lr(e.dateTime),
    strategy: be.variadic
  }), o = Ne(function() {
    for (var l, u = [], s = 0; s < arguments.length; s++)
      u[s] = arguments[s];
    return new ((l = Intl.NumberFormat).bind.apply(l, Re([void 0], u, !1)))();
  }, {
    cache: lr(e.number),
    strategy: be.variadic
  }), a = Ne(function() {
    for (var l, u = [], s = 0; s < arguments.length; s++)
      u[s] = arguments[s];
    return new ((l = Intl.PluralRules).bind.apply(l, Re([void 0], u, !1)))();
  }, {
    cache: lr(e.pluralRules),
    strategy: be.variadic
  });
  return {
    getDateTimeFormat: i,
    getNumberFormat: o,
    getMessageFormat: Ne(function(l, u, s, c) {
      return new pp(l, u, s, k({ formatters: {
        getNumberFormat: o,
        getDateTimeFormat: i,
        getPluralRules: a
      } }, c || {}));
    }, {
      cache: lr(e.message),
      strategy: be.variadic
    }),
    getRelativeTimeFormat: Ne(function() {
      for (var l = [], u = 0; u < arguments.length; u++)
        l[u] = arguments[u];
      return new (t.bind.apply(t, Re([void 0], l, !1)))();
    }, {
      cache: lr(e.relativeTime),
      strategy: be.variadic
    }),
    getPluralRules: a,
    getListFormat: Ne(function() {
      for (var l = [], u = 0; u < arguments.length; u++)
        l[u] = arguments[u];
      return new (r.bind.apply(r, Re([void 0], l, !1)))();
    }, {
      cache: lr(e.list),
      strategy: be.variadic
    }),
    getDisplayNames: Ne(function() {
      for (var l = [], u = 0; u < arguments.length; u++)
        l[u] = arguments[u];
      return new (n.bind.apply(n, Re([void 0], l, !1)))();
    }, {
      cache: lr(e.displayNames),
      strategy: be.variadic
    })
  };
}
function ts(e, t, r, n) {
  var i = e && e[t], o;
  if (i && (o = i[r]), o)
    return o;
  n(new Dy("No ".concat(t, " format named: ").concat(r)));
}
function Pi(e, t) {
  return Object.keys(e).reduce(function(r, n) {
    return r[n] = k({ timeZone: t }, e[n]), r;
  }, {});
}
function $c(e, t) {
  var r = Object.keys(k(k({}, e), t));
  return r.reduce(function(n, i) {
    return n[i] = k(k({}, e[i] || {}), t[i] || {}), n;
  }, {});
}
function jc(e, t) {
  if (!t)
    return e;
  var r = pp.formats;
  return k(k(k({}, r), e), { date: $c(Pi(r.date, t), Pi(e.date || {}, t)), time: $c(Pi(r.time, t), Pi(e.time || {}, t)) });
}
var Gl = function(e, t, r, n, i) {
  var o = e.locale, a = e.formats, l = e.messages, u = e.defaultLocale, s = e.defaultFormats, c = e.fallbackOnEmptyString, h = e.onError, d = e.timeZone, m = e.defaultRichTextElements;
  r === void 0 && (r = { id: "" });
  var y = r.id, v = r.defaultMessage;
  qh(!!y, "[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");
  var _ = String(y), p = (
    // In case messages is Object.create(null)
    // e.g import('foo.json') from webpack)
    // See https://github.com/formatjs/formatjs/issues/1914
    l && Object.prototype.hasOwnProperty.call(l, _) && l[_]
  );
  if (Array.isArray(p) && p.length === 1 && p[0].type === Z.literal)
    return p[0].value;
  if (!n && p && typeof p == "string" && !m)
    return p.replace(/'\{(.*?)\}'/gi, "{$1}");
  if (n = k(k({}, m), n || {}), a = jc(a, d), s = jc(s, d), !p) {
    if (c === !1 && p === "")
      return p;
    if ((!v || o && o.toLowerCase() !== u.toLowerCase()) && h(new Iy(r, o)), v)
      try {
        var f = t.getMessageFormat(v, u, s, i);
        return f.format(n);
      } catch (g) {
        return h(new La('Error formatting default message for: "'.concat(_, '", rendering default message verbatim'), o, r, g)), typeof v == "string" ? v : _;
      }
    return _;
  }
  try {
    var f = t.getMessageFormat(p, o, a, k({ formatters: t }, i || {}));
    return f.format(n);
  } catch (g) {
    h(new La('Error formatting message: "'.concat(_, '", using ').concat(v ? "default message" : "id", " as fallback."), o, r, g));
  }
  if (v)
    try {
      var f = t.getMessageFormat(v, u, s, i);
      return f.format(n);
    } catch (g) {
      h(new La('Error formatting the default message for: "'.concat(_, '", rendering message verbatim'), o, r, g));
    }
  return typeof p == "string" ? p : typeof v == "string" ? v : _;
}, vp = [
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
function $o(e, t, r, n) {
  var i = e.locale, o = e.formats, a = e.onError, l = e.timeZone;
  n === void 0 && (n = {});
  var u = n.format, s = k(k({}, l && { timeZone: l }), u && ts(o, t, u, a)), c = Dr(n, vp, s);
  return t === "time" && !c.hour && !c.minute && !c.second && !c.timeStyle && !c.dateStyle && (c = k(k({}, c), { hour: "numeric", minute: "numeric" })), r(i, c);
}
function by(e, t) {
  for (var r = [], n = 2; n < arguments.length; n++)
    r[n - 2] = arguments[n];
  var i = r[0], o = r[1], a = o === void 0 ? {} : o, l = typeof i == "string" ? new Date(i || 0) : i;
  try {
    return $o(e, "date", t, a).format(l);
  } catch (u) {
    e.onError(new st("Error formatting date.", e.locale, u));
  }
  return String(l);
}
function Ry(e, t) {
  for (var r = [], n = 2; n < arguments.length; n++)
    r[n - 2] = arguments[n];
  var i = r[0], o = r[1], a = o === void 0 ? {} : o, l = typeof i == "string" ? new Date(i || 0) : i;
  try {
    return $o(e, "time", t, a).format(l);
  } catch (u) {
    e.onError(new st("Error formatting time.", e.locale, u));
  }
  return String(l);
}
function Ly(e, t) {
  for (var r = [], n = 2; n < arguments.length; n++)
    r[n - 2] = arguments[n];
  var i = r[0], o = r[1], a = r[2], l = a === void 0 ? {} : a, u = e.timeZone, s = e.locale, c = e.onError, h = Dr(l, vp, u ? { timeZone: u } : {});
  try {
    return t(s, h).formatRange(i, o);
  } catch (d) {
    c(new st("Error formatting date time range.", e.locale, d));
  }
  return String(i);
}
function My(e, t) {
  for (var r = [], n = 2; n < arguments.length; n++)
    r[n - 2] = arguments[n];
  var i = r[0], o = r[1], a = o === void 0 ? {} : o, l = typeof i == "string" ? new Date(i || 0) : i;
  try {
    return $o(e, "date", t, a).formatToParts(l);
  } catch (u) {
    e.onError(new st("Error formatting date.", e.locale, u));
  }
  return [];
}
function Ay(e, t) {
  for (var r = [], n = 2; n < arguments.length; n++)
    r[n - 2] = arguments[n];
  var i = r[0], o = r[1], a = o === void 0 ? {} : o, l = typeof i == "string" ? new Date(i || 0) : i;
  try {
    return $o(e, "time", t, a).formatToParts(l);
  } catch (u) {
    e.onError(new st("Error formatting time.", e.locale, u));
  }
  return [];
}
var Hy = [
  "style",
  "type",
  "fallback",
  "languageDisplay"
];
function Fy(e, t, r, n) {
  var i = e.locale, o = e.onError, a = Intl.DisplayNames;
  a || o(new or(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`, Tt.MISSING_INTL_API));
  var l = Dr(n, Hy);
  try {
    return t(i, l).of(r);
  } catch (u) {
    o(new st("Error formatting display name.", i, u));
  }
}
var By = [
  "type",
  "style"
], Uc = Date.now();
function $y(e) {
  return "".concat(Uc, "_").concat(e, "_").concat(Uc);
}
function jy(e, t, r, n) {
  n === void 0 && (n = {});
  var i = yp(e, t, r, n).reduce(function(o, a) {
    var l = a.value;
    return typeof l != "string" ? o.push(l) : typeof o[o.length - 1] == "string" ? o[o.length - 1] += l : o.push(l), o;
  }, []);
  return i.length === 1 ? i[0] : i.length === 0 ? "" : i;
}
function yp(e, t, r, n) {
  var i = e.locale, o = e.onError;
  n === void 0 && (n = {});
  var a = Intl.ListFormat;
  a || o(new or(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`, Tt.MISSING_INTL_API));
  var l = Dr(n, By);
  try {
    var u = {}, s = r.map(function(c, h) {
      if (typeof c == "object") {
        var d = $y(h);
        return u[d] = c, d;
      }
      return String(c);
    });
    return t(i, l).formatToParts(s).map(function(c) {
      return c.type === "literal" ? c : k(k({}, c), { value: u[c.value] || c.value });
    });
  } catch (c) {
    o(new st("Error formatting list.", i, c));
  }
  return r;
}
var Uy = ["type"];
function zy(e, t, r, n) {
  var i = e.locale, o = e.onError;
  n === void 0 && (n = {}), Intl.PluralRules || o(new or(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, Tt.MISSING_INTL_API));
  var a = Dr(n, Uy);
  try {
    return t(i, a).select(r);
  } catch (l) {
    o(new st("Error formatting plural.", i, l));
  }
  return "other";
}
var Gy = ["numeric", "style"];
function Vy(e, t, r) {
  var n = e.locale, i = e.formats, o = e.onError;
  r === void 0 && (r = {});
  var a = r.format, l = !!a && ts(i, "relative", a, o) || {}, u = Dr(r, Gy, l);
  return t(n, u);
}
function Wy(e, t, r, n, i) {
  i === void 0 && (i = {}), n || (n = "second");
  var o = Intl.RelativeTimeFormat;
  o || e.onError(new or(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`, Tt.MISSING_INTL_API));
  try {
    return Vy(e, t, i).format(r, n);
  } catch (a) {
    e.onError(new st("Error formatting relative time.", e.locale, a));
  }
  return String(r);
}
var Xy = [
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
function Sp(e, t, r) {
  var n = e.locale, i = e.formats, o = e.onError;
  r === void 0 && (r = {});
  var a = r.format, l = a && ts(i, "number", a, o) || {}, u = Dr(r, Xy, l);
  return t(n, u);
}
function Qy(e, t, r, n) {
  n === void 0 && (n = {});
  try {
    return Sp(e, t, n).format(r);
  } catch (i) {
    e.onError(new st("Error formatting number.", e.locale, i));
  }
  return String(r);
}
function Yy(e, t, r, n) {
  n === void 0 && (n = {});
  try {
    return Sp(e, t, n).formatToParts(r);
  } catch (i) {
    e.onError(new st("Error formatting number.", e.locale, i));
  }
  return [];
}
function Zy(e) {
  var t = e ? e[Object.keys(e)[0]] : void 0;
  return typeof t == "string";
}
function Ky(e) {
  e.onWarn && e.defaultRichTextElements && Zy(e.messages || {}) && e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.io/docs/getting-started/message-distribution`);
}
function qy(e, t) {
  var r = Ny(t), n = k(k({}, gp), e), i = n.locale, o = n.defaultLocale, a = n.onError;
  return i ? !Intl.NumberFormat.supportedLocalesOf(i).length && a ? a(new Bc('Missing locale data for locale: "'.concat(i, '" in Intl.NumberFormat. Using default locale: "').concat(o, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : !Intl.DateTimeFormat.supportedLocalesOf(i).length && a && a(new Bc('Missing locale data for locale: "'.concat(i, '" in Intl.DateTimeFormat. Using default locale: "').concat(o, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : (a && a(new _y('"locale" was not configured, using "'.concat(o, '" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))), n.locale = n.defaultLocale || "en"), Ky(n), k(k({}, n), {
    formatters: r,
    formatNumber: Qy.bind(null, n, r.getNumberFormat),
    formatNumberToParts: Yy.bind(null, n, r.getNumberFormat),
    formatRelativeTime: Wy.bind(null, n, r.getRelativeTimeFormat),
    formatDate: by.bind(null, n, r.getDateTimeFormat),
    formatDateToParts: My.bind(null, n, r.getDateTimeFormat),
    formatTime: Ry.bind(null, n, r.getDateTimeFormat),
    formatDateTimeRange: Ly.bind(null, n, r.getDateTimeFormat),
    formatTimeToParts: Ay.bind(null, n, r.getDateTimeFormat),
    formatPlural: zy.bind(null, n, r.getPluralRules),
    // @ts-expect-error TODO: will get to this later
    formatMessage: Gl.bind(null, n, r),
    // @ts-expect-error TODO: will get to this later
    $t: Gl.bind(null, n, r),
    formatList: jy.bind(null, n, r.getListFormat),
    formatListToParts: yp.bind(null, n, r.getListFormat),
    formatDisplayName: Fy.bind(null, n, r.getDisplayNames)
  });
}
function Ep(e) {
  qh(e, "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.");
}
var wp = k(k({}, gp), { textComponent: x.Fragment });
function Jy(e) {
  return function(t) {
    return e(x.Children.toArray(t));
  };
}
function Vl(e, t) {
  if (e === t)
    return !0;
  if (!e || !t)
    return !1;
  var r = Object.keys(e), n = Object.keys(t), i = r.length;
  if (n.length !== i)
    return !1;
  for (var o = 0; o < i; o++) {
    var a = r[o];
    if (e[a] !== t[a] || !Object.prototype.hasOwnProperty.call(t, a))
      return !1;
  }
  return !0;
}
var xp = { exports: {} }, W = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var me = typeof Symbol == "function" && Symbol.for, rs = me ? Symbol.for("react.element") : 60103, ns = me ? Symbol.for("react.portal") : 60106, jo = me ? Symbol.for("react.fragment") : 60107, Uo = me ? Symbol.for("react.strict_mode") : 60108, zo = me ? Symbol.for("react.profiler") : 60114, Go = me ? Symbol.for("react.provider") : 60109, Vo = me ? Symbol.for("react.context") : 60110, is = me ? Symbol.for("react.async_mode") : 60111, Wo = me ? Symbol.for("react.concurrent_mode") : 60111, Xo = me ? Symbol.for("react.forward_ref") : 60112, Qo = me ? Symbol.for("react.suspense") : 60113, e0 = me ? Symbol.for("react.suspense_list") : 60120, Yo = me ? Symbol.for("react.memo") : 60115, Zo = me ? Symbol.for("react.lazy") : 60116, t0 = me ? Symbol.for("react.block") : 60121, r0 = me ? Symbol.for("react.fundamental") : 60117, n0 = me ? Symbol.for("react.responder") : 60118, i0 = me ? Symbol.for("react.scope") : 60119;
function Ze(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case rs:
        switch (e = e.type, e) {
          case is:
          case Wo:
          case jo:
          case zo:
          case Uo:
          case Qo:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Vo:
              case Xo:
              case Zo:
              case Yo:
              case Go:
                return e;
              default:
                return t;
            }
        }
      case ns:
        return t;
    }
  }
}
function Tp(e) {
  return Ze(e) === Wo;
}
W.AsyncMode = is;
W.ConcurrentMode = Wo;
W.ContextConsumer = Vo;
W.ContextProvider = Go;
W.Element = rs;
W.ForwardRef = Xo;
W.Fragment = jo;
W.Lazy = Zo;
W.Memo = Yo;
W.Portal = ns;
W.Profiler = zo;
W.StrictMode = Uo;
W.Suspense = Qo;
W.isAsyncMode = function(e) {
  return Tp(e) || Ze(e) === is;
};
W.isConcurrentMode = Tp;
W.isContextConsumer = function(e) {
  return Ze(e) === Vo;
};
W.isContextProvider = function(e) {
  return Ze(e) === Go;
};
W.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === rs;
};
W.isForwardRef = function(e) {
  return Ze(e) === Xo;
};
W.isFragment = function(e) {
  return Ze(e) === jo;
};
W.isLazy = function(e) {
  return Ze(e) === Zo;
};
W.isMemo = function(e) {
  return Ze(e) === Yo;
};
W.isPortal = function(e) {
  return Ze(e) === ns;
};
W.isProfiler = function(e) {
  return Ze(e) === zo;
};
W.isStrictMode = function(e) {
  return Ze(e) === Uo;
};
W.isSuspense = function(e) {
  return Ze(e) === Qo;
};
W.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === jo || e === Wo || e === zo || e === Uo || e === Qo || e === e0 || typeof e == "object" && e !== null && (e.$$typeof === Zo || e.$$typeof === Yo || e.$$typeof === Go || e.$$typeof === Vo || e.$$typeof === Xo || e.$$typeof === r0 || e.$$typeof === n0 || e.$$typeof === i0 || e.$$typeof === t0);
};
W.typeOf = Ze;
xp.exports = W;
var o0 = xp.exports, Cp = o0, a0 = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, l0 = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Op = {};
Op[Cp.ForwardRef] = a0;
Op[Cp.Memo] = l0;
var os = typeof window < "u" && !window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = x.createContext(null)) : x.createContext(null);
os.Consumer;
var u0 = os.Provider, s0 = u0, c0 = os;
function as() {
  var e = x.useContext(c0);
  return Ep(e), e;
}
var Wl;
(function(e) {
  e.formatDate = "FormattedDate", e.formatTime = "FormattedTime", e.formatNumber = "FormattedNumber", e.formatList = "FormattedList", e.formatDisplayName = "FormattedDisplayName";
})(Wl || (Wl = {}));
var Xl;
(function(e) {
  e.formatDate = "FormattedDateParts", e.formatTime = "FormattedTimeParts", e.formatNumber = "FormattedNumberParts", e.formatList = "FormattedListParts";
})(Xl || (Xl = {}));
function Dp(e) {
  var t = function(r) {
    var n = as(), i = r.value, o = r.children, a = on(r, ["value", "children"]), l = typeof i == "string" ? new Date(i || 0) : i, u = e === "formatDate" ? n.formatDateToParts(l, a) : n.formatTimeToParts(l, a);
    return o(u);
  };
  return t.displayName = Xl[e], t;
}
function ui(e) {
  var t = function(r) {
    var n = as(), i = r.value, o = r.children, a = on(
      r,
      ["value", "children"]
    ), l = n[e](i, a);
    if (typeof o == "function")
      return o(l);
    var u = n.textComponent || x.Fragment;
    return x.createElement(u, null, l);
  };
  return t.displayName = Wl[e], t;
}
function _p(e) {
  return e && Object.keys(e).reduce(function(t, r) {
    var n = e[r];
    return t[r] = hp(n) ? Jy(n) : n, t;
  }, {});
}
var zc = function(e, t, r, n) {
  for (var i = [], o = 4; o < arguments.length; o++)
    i[o - 4] = arguments[o];
  var a = _p(n), l = Gl.apply(void 0, Re([
    e,
    t,
    r,
    a
  ], i, !1));
  return Array.isArray(l) ? x.Children.toArray(l) : l;
}, Gc = function(e, t) {
  var r = e.defaultRichTextElements, n = on(e, ["defaultRichTextElements"]), i = _p(r), o = qy(k(k(k({}, wp), n), { defaultRichTextElements: i }), t), a = {
    locale: o.locale,
    timeZone: o.timeZone,
    fallbackOnEmptyString: o.fallbackOnEmptyString,
    formats: o.formats,
    defaultLocale: o.defaultLocale,
    defaultFormats: o.defaultFormats,
    messages: o.messages,
    onError: o.onError,
    defaultRichTextElements: i
  };
  return k(k({}, o), {
    formatMessage: zc.bind(
      null,
      a,
      // @ts-expect-error fix this
      o.formatters
    ),
    // @ts-expect-error fix this
    $t: zc.bind(null, a, o.formatters)
  });
};
function Ma(e) {
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
var f0 = (
  /** @class */
  function(e) {
    ut(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.cache = mp(), r.state = {
        cache: r.cache,
        intl: Gc(Ma(r.props), r.cache),
        prevConfig: Ma(r.props)
      }, r;
    }
    return t.getDerivedStateFromProps = function(r, n) {
      var i = n.prevConfig, o = n.cache, a = Ma(r);
      return Vl(i, a) ? null : {
        intl: Gc(a, o),
        prevConfig: a
      };
    }, t.prototype.render = function() {
      return Ep(this.state.intl), x.createElement(s0, { value: this.state.intl }, this.props.children);
    }, t.displayName = "IntlProvider", t.defaultProps = wp, t;
  }(x.PureComponent)
);
function d0(e, t) {
  var r = e.values, n = on(e, ["values"]), i = t.values, o = on(t, ["values"]);
  return Vl(i, r) && Vl(n, o);
}
function Ip(e) {
  var t = as(), r = t.formatMessage, n = t.textComponent, i = n === void 0 ? x.Fragment : n, o = e.id, a = e.description, l = e.defaultMessage, u = e.values, s = e.children, c = e.tagName, h = c === void 0 ? i : c, d = e.ignoreTag, m = { id: o, description: a, defaultMessage: l }, y = r(m, u, {
    ignoreTag: d
  });
  return typeof s == "function" ? s(Array.isArray(y) ? y : [y]) : h ? x.createElement(h, null, x.Children.toArray(y)) : x.createElement(x.Fragment, null, y);
}
Ip.displayName = "FormattedMessage";
var Pp = x.memo(Ip, d0);
Pp.displayName = "MemoizedFormattedMessage";
ui("formatDate");
ui("formatTime");
ui("formatNumber");
ui("formatList");
ui("formatDisplayName");
Dp("formatDate");
Dp("formatTime");
var kp = x.createContext({
  dragDropManager: void 0
}), rt;
(function(e) {
  e.SOURCE = "SOURCE", e.TARGET = "TARGET";
})(rt || (rt = {}));
function M(e, t) {
  for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++)
    n[i - 2] = arguments[i];
  if (!e) {
    var o;
    if (t === void 0)
      o = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var a = 0;
      o = new Error(t.replace(/%s/g, function() {
        return n[a++];
      })), o.name = "Invariant Violation";
    }
    throw o.framesToPop = 1, o;
  }
}
var ls = "dnd-core/INIT_COORDS", Ko = "dnd-core/BEGIN_DRAG", us = "dnd-core/PUBLISH_DRAG_SOURCE", qo = "dnd-core/HOVER", Jo = "dnd-core/DROP", ea = "dnd-core/END_DRAG";
function Vc(e, t) {
  return {
    type: ls,
    payload: {
      sourceClientOffset: t || null,
      clientOffset: e || null
    }
  };
}
function Xi(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Xi = function(r) {
    return typeof r;
  } : Xi = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Xi(e);
}
function h0(e, t, r) {
  return t.split(".").reduce(function(n, i) {
    return n && n[i] ? n[i] : r || null;
  }, e);
}
function p0(e, t) {
  return e.filter(function(r) {
    return r !== t;
  });
}
function Np(e) {
  return Xi(e) === "object";
}
function g0(e, t) {
  var r = /* @__PURE__ */ new Map(), n = function(a) {
    r.set(a, r.has(a) ? r.get(a) + 1 : 1);
  };
  e.forEach(n), t.forEach(n);
  var i = [];
  return r.forEach(function(o, a) {
    o === 1 && i.push(a);
  }), i;
}
function m0(e, t) {
  return e.filter(function(r) {
    return t.indexOf(r) > -1;
  });
}
var v0 = {
  type: ls,
  payload: {
    clientOffset: null,
    sourceClientOffset: null
  }
};
function y0(e) {
  return function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      publishSource: !0
    }, i = n.publishSource, o = i === void 0 ? !0 : i, a = n.clientOffset, l = n.getSourceClientOffset, u = e.getMonitor(), s = e.getRegistry();
    e.dispatch(Vc(a)), S0(r, u, s);
    var c = x0(r, u);
    if (c === null) {
      e.dispatch(v0);
      return;
    }
    var h = null;
    if (a) {
      if (!l)
        throw new Error("getSourceClientOffset must be defined");
      E0(l), h = l(c);
    }
    e.dispatch(Vc(a, h));
    var d = s.getSource(c), m = d.beginDrag(u, c);
    if (m != null) {
      w0(m), s.pinSource(c);
      var y = s.getSourceType(c);
      return {
        type: Ko,
        payload: {
          itemType: y,
          item: m,
          sourceId: c,
          clientOffset: a || null,
          sourceClientOffset: h || null,
          isSourcePublic: !!o
        }
      };
    }
  };
}
function S0(e, t, r) {
  M(!t.isDragging(), "Cannot call beginDrag while dragging."), e.forEach(function(n) {
    M(r.getSource(n), "Expected sourceIds to be registered.");
  });
}
function E0(e) {
  M(typeof e == "function", "When clientOffset is provided, getSourceClientOffset must be a function.");
}
function w0(e) {
  M(Np(e), "Item must be an object.");
}
function x0(e, t) {
  for (var r = null, n = e.length - 1; n >= 0; n--)
    if (t.canDragSource(e[n])) {
      r = e[n];
      break;
    }
  return r;
}
function T0(e) {
  return function() {
    var r = e.getMonitor();
    if (r.isDragging())
      return {
        type: us
      };
  };
}
function Ql(e, t) {
  return t === null ? e === null : Array.isArray(e) ? e.some(function(r) {
    return r === t;
  }) : e === t;
}
function C0(e) {
  return function(r) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = n.clientOffset;
    O0(r);
    var o = r.slice(0), a = e.getMonitor(), l = e.getRegistry();
    D0(o, a, l);
    var u = a.getItemType();
    return _0(o, l, u), I0(o, a, l), {
      type: qo,
      payload: {
        targetIds: o,
        clientOffset: i || null
      }
    };
  };
}
function O0(e) {
  M(Array.isArray(e), "Expected targetIds to be an array.");
}
function D0(e, t, r) {
  M(t.isDragging(), "Cannot call hover while not dragging."), M(!t.didDrop(), "Cannot call hover after drop.");
  for (var n = 0; n < e.length; n++) {
    var i = e[n];
    M(e.lastIndexOf(i) === n, "Expected targetIds to be unique in the passed array.");
    var o = r.getTarget(i);
    M(o, "Expected targetIds to be registered.");
  }
}
function _0(e, t, r) {
  for (var n = e.length - 1; n >= 0; n--) {
    var i = e[n], o = t.getTargetType(i);
    Ql(o, r) || e.splice(n, 1);
  }
}
function I0(e, t, r) {
  e.forEach(function(n) {
    var i = r.getTarget(n);
    i.hover(t, n);
  });
}
function Wc(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Xc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Wc(Object(r), !0).forEach(function(n) {
      P0(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Wc(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function P0(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function k0(e) {
  return function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = e.getMonitor(), i = e.getRegistry();
    N0(n);
    var o = L0(n);
    o.forEach(function(a, l) {
      var u = b0(a, l, i, n), s = {
        type: Jo,
        payload: {
          dropResult: Xc(Xc({}, r), u)
        }
      };
      e.dispatch(s);
    });
  };
}
function N0(e) {
  M(e.isDragging(), "Cannot call drop while not dragging."), M(!e.didDrop(), "Cannot call drop twice during one drag operation.");
}
function b0(e, t, r, n) {
  var i = r.getTarget(e), o = i ? i.drop(n, e) : void 0;
  return R0(o), typeof o > "u" && (o = t === 0 ? {} : n.getDropResult()), o;
}
function R0(e) {
  M(typeof e > "u" || Np(e), "Drop result must either be an object or undefined.");
}
function L0(e) {
  var t = e.getTargetIds().filter(e.canDropOnTarget, e);
  return t.reverse(), t;
}
function M0(e) {
  return function() {
    var r = e.getMonitor(), n = e.getRegistry();
    A0(r);
    var i = r.getSourceId();
    if (i != null) {
      var o = n.getSource(i, !0);
      o.endDrag(r, i), n.unpinSource();
    }
    return {
      type: ea
    };
  };
}
function A0(e) {
  M(e.isDragging(), "Cannot call endDrag while not dragging.");
}
function H0(e) {
  return {
    beginDrag: y0(e),
    publishDragSource: T0(e),
    hover: C0(e),
    drop: k0(e),
    endDrag: M0(e)
  };
}
function F0(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function B0(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function $0(e, t, r) {
  return t && B0(e.prototype, t), e;
}
function xn(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var j0 = /* @__PURE__ */ function() {
  function e(t, r) {
    var n = this;
    F0(this, e), xn(this, "store", void 0), xn(this, "monitor", void 0), xn(this, "backend", void 0), xn(this, "isSetUp", !1), xn(this, "handleRefCountChange", function() {
      var i = n.store.getState().refCount > 0;
      n.backend && (i && !n.isSetUp ? (n.backend.setup(), n.isSetUp = !0) : !i && n.isSetUp && (n.backend.teardown(), n.isSetUp = !1));
    }), this.store = t, this.monitor = r, t.subscribe(this.handleRefCountChange);
  }
  return $0(e, [{
    key: "receiveBackend",
    value: function(r) {
      this.backend = r;
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
      var r = this, n = this.store.dispatch;
      function i(a) {
        return function() {
          for (var l = arguments.length, u = new Array(l), s = 0; s < l; s++)
            u[s] = arguments[s];
          var c = a.apply(r, u);
          typeof c < "u" && n(c);
        };
      }
      var o = H0(this);
      return Object.keys(o).reduce(function(a, l) {
        var u = o[l];
        return a[l] = i(u), a;
      }, {});
    }
  }, {
    key: "dispatch",
    value: function(r) {
      this.store.dispatch(r);
    }
  }]), e;
}();
function qe(e) {
  return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. ";
}
var Qc = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}(), Yc = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
}, Zc = {
  INIT: "@@redux/INIT" + Yc(),
  REPLACE: "@@redux/REPLACE" + Yc()
};
function U0(e) {
  if (typeof e != "object" || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function bp(e, t, r) {
  var n;
  if (typeof t == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function")
    throw new Error(qe(0));
  if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
    if (typeof r != "function")
      throw new Error(qe(1));
    return r(bp)(e, t);
  }
  if (typeof e != "function")
    throw new Error(qe(2));
  var i = e, o = t, a = [], l = a, u = !1;
  function s() {
    l === a && (l = a.slice());
  }
  function c() {
    if (u)
      throw new Error(qe(3));
    return o;
  }
  function h(v) {
    if (typeof v != "function")
      throw new Error(qe(4));
    if (u)
      throw new Error(qe(5));
    var _ = !0;
    return s(), l.push(v), function() {
      if (_) {
        if (u)
          throw new Error(qe(6));
        _ = !1, s();
        var f = l.indexOf(v);
        l.splice(f, 1), a = null;
      }
    };
  }
  function d(v) {
    if (!U0(v))
      throw new Error(qe(7));
    if (typeof v.type > "u")
      throw new Error(qe(8));
    if (u)
      throw new Error(qe(9));
    try {
      u = !0, o = i(o, v);
    } finally {
      u = !1;
    }
    for (var _ = a = l, p = 0; p < _.length; p++) {
      var f = _[p];
      f();
    }
    return v;
  }
  function m(v) {
    if (typeof v != "function")
      throw new Error(qe(10));
    i = v, d({
      type: Zc.REPLACE
    });
  }
  function y() {
    var v, _ = h;
    return v = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function(f) {
        if (typeof f != "object" || f === null)
          throw new Error(qe(11));
        function g() {
          f.next && f.next(c());
        }
        g();
        var S = _(g);
        return {
          unsubscribe: S
        };
      }
    }, v[Qc] = function() {
      return this;
    }, v;
  }
  return d({
    type: Zc.INIT
  }), n = {
    dispatch: d,
    subscribe: h,
    getState: c,
    replaceReducer: m
  }, n[Qc] = y, n;
}
var z0 = function(t, r) {
  return t === r;
};
function G0(e, t) {
  return !e && !t ? !0 : !e || !t ? !1 : e.x === t.x && e.y === t.y;
}
function V0(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : z0;
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; ++n)
    if (!r(e[n], t[n]))
      return !1;
  return !0;
}
function Kc(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function qc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Kc(Object(r), !0).forEach(function(n) {
      W0(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Kc(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function W0(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var Jc = {
  initialSourceClientOffset: null,
  initialClientOffset: null,
  clientOffset: null
};
function X0() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Jc, t = arguments.length > 1 ? arguments[1] : void 0, r = t.payload;
  switch (t.type) {
    case ls:
    case Ko:
      return {
        initialSourceClientOffset: r.sourceClientOffset,
        initialClientOffset: r.clientOffset,
        clientOffset: r.clientOffset
      };
    case qo:
      return G0(e.clientOffset, r.clientOffset) ? e : qc(qc({}, e), {}, {
        clientOffset: r.clientOffset
      });
    case ea:
    case Jo:
      return Jc;
    default:
      return e;
  }
}
var ss = "dnd-core/ADD_SOURCE", cs = "dnd-core/ADD_TARGET", fs = "dnd-core/REMOVE_SOURCE", ta = "dnd-core/REMOVE_TARGET";
function Q0(e) {
  return {
    type: ss,
    payload: {
      sourceId: e
    }
  };
}
function Y0(e) {
  return {
    type: cs,
    payload: {
      targetId: e
    }
  };
}
function Z0(e) {
  return {
    type: fs,
    payload: {
      sourceId: e
    }
  };
}
function K0(e) {
  return {
    type: ta,
    payload: {
      targetId: e
    }
  };
}
function ef(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Je(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ef(Object(r), !0).forEach(function(n) {
      q0(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ef(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function q0(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var J0 = {
  itemType: null,
  item: null,
  sourceId: null,
  targetIds: [],
  dropResult: null,
  didDrop: !1,
  isSourcePublic: null
};
function eS() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : J0, t = arguments.length > 1 ? arguments[1] : void 0, r = t.payload;
  switch (t.type) {
    case Ko:
      return Je(Je({}, e), {}, {
        itemType: r.itemType,
        item: r.item,
        sourceId: r.sourceId,
        isSourcePublic: r.isSourcePublic,
        dropResult: null,
        didDrop: !1
      });
    case us:
      return Je(Je({}, e), {}, {
        isSourcePublic: !0
      });
    case qo:
      return Je(Je({}, e), {}, {
        targetIds: r.targetIds
      });
    case ta:
      return e.targetIds.indexOf(r.targetId) === -1 ? e : Je(Je({}, e), {}, {
        targetIds: p0(e.targetIds, r.targetId)
      });
    case Jo:
      return Je(Je({}, e), {}, {
        dropResult: r.dropResult,
        didDrop: !0,
        targetIds: []
      });
    case ea:
      return Je(Je({}, e), {}, {
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
function tS() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, t = arguments.length > 1 ? arguments[1] : void 0;
  switch (t.type) {
    case ss:
    case cs:
      return e + 1;
    case fs:
    case ta:
      return e - 1;
    default:
      return e;
  }
}
var To = [], ds = [];
To.__IS_NONE__ = !0;
ds.__IS_ALL__ = !0;
function rS(e, t) {
  if (e === To)
    return !1;
  if (e === ds || typeof t > "u")
    return !0;
  var r = m0(t, e);
  return r.length > 0;
}
function nS() {
  var e = arguments.length > 1 ? arguments[1] : void 0;
  switch (e.type) {
    case qo:
      break;
    case ss:
    case cs:
    case ta:
    case fs:
      return To;
    case Ko:
    case us:
    case ea:
    case Jo:
    default:
      return ds;
  }
  var t = e.payload, r = t.targetIds, n = r === void 0 ? [] : r, i = t.prevTargetIds, o = i === void 0 ? [] : i, a = g0(n, o), l = a.length > 0 || !V0(n, o);
  if (!l)
    return To;
  var u = o[o.length - 1], s = n[n.length - 1];
  return u !== s && (u && a.push(u), s && a.push(s)), a;
}
function iS() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
  return e + 1;
}
function tf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function rf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? tf(Object(r), !0).forEach(function(n) {
      oS(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : tf(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function oS(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function aS() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
  return {
    dirtyHandlerIds: nS(e.dirtyHandlerIds, {
      type: t.type,
      payload: rf(rf({}, t.payload), {}, {
        prevTargetIds: h0(e, "dragOperation.targetIds", [])
      })
    }),
    dragOffset: X0(e.dragOffset, t),
    refCount: tS(e.refCount, t),
    dragOperation: eS(e.dragOperation, t),
    stateId: iS(e.stateId)
  };
}
function lS(e, t) {
  return {
    x: e.x + t.x,
    y: e.y + t.y
  };
}
function Rp(e, t) {
  return {
    x: e.x - t.x,
    y: e.y - t.y
  };
}
function uS(e) {
  var t = e.clientOffset, r = e.initialClientOffset, n = e.initialSourceClientOffset;
  return !t || !r || !n ? null : Rp(lS(t, n), r);
}
function sS(e) {
  var t = e.clientOffset, r = e.initialClientOffset;
  return !t || !r ? null : Rp(t, r);
}
function cS(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function fS(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function dS(e, t, r) {
  return t && fS(e.prototype, t), e;
}
function nf(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var hS = /* @__PURE__ */ function() {
  function e(t, r) {
    cS(this, e), nf(this, "store", void 0), nf(this, "registry", void 0), this.store = t, this.registry = r;
  }
  return dS(e, [{
    key: "subscribeToStateChange",
    value: function(r) {
      var n = this, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        handlerIds: void 0
      }, o = i.handlerIds;
      M(typeof r == "function", "listener must be a function."), M(typeof o > "u" || Array.isArray(o), "handlerIds, when specified, must be an array of strings.");
      var a = this.store.getState().stateId, l = function() {
        var s = n.store.getState(), c = s.stateId;
        try {
          var h = c === a || c === a + 1 && !rS(s.dirtyHandlerIds, o);
          h || r();
        } finally {
          a = c;
        }
      };
      return this.store.subscribe(l);
    }
  }, {
    key: "subscribeToOffsetChange",
    value: function(r) {
      var n = this;
      M(typeof r == "function", "listener must be a function.");
      var i = this.store.getState().dragOffset, o = function() {
        var l = n.store.getState().dragOffset;
        l !== i && (i = l, r());
      };
      return this.store.subscribe(o);
    }
  }, {
    key: "canDragSource",
    value: function(r) {
      if (!r)
        return !1;
      var n = this.registry.getSource(r);
      return M(n, "Expected to find a valid source. sourceId=".concat(r)), this.isDragging() ? !1 : n.canDrag(this, r);
    }
  }, {
    key: "canDropOnTarget",
    value: function(r) {
      if (!r)
        return !1;
      var n = this.registry.getTarget(r);
      if (M(n, "Expected to find a valid target. targetId=".concat(r)), !this.isDragging() || this.didDrop())
        return !1;
      var i = this.registry.getTargetType(r), o = this.getItemType();
      return Ql(i, o) && n.canDrop(this, r);
    }
  }, {
    key: "isDragging",
    value: function() {
      return !!this.getItemType();
    }
  }, {
    key: "isDraggingSource",
    value: function(r) {
      if (!r)
        return !1;
      var n = this.registry.getSource(r, !0);
      if (M(n, "Expected to find a valid source. sourceId=".concat(r)), !this.isDragging() || !this.isSourcePublic())
        return !1;
      var i = this.registry.getSourceType(r), o = this.getItemType();
      return i !== o ? !1 : n.isDragging(this, r);
    }
  }, {
    key: "isOverTarget",
    value: function(r) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        shallow: !1
      };
      if (!r)
        return !1;
      var i = n.shallow;
      if (!this.isDragging())
        return !1;
      var o = this.registry.getTargetType(r), a = this.getItemType();
      if (a && !Ql(o, a))
        return !1;
      var l = this.getTargetIds();
      if (!l.length)
        return !1;
      var u = l.indexOf(r);
      return i ? u === l.length - 1 : u > -1;
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
      return uS(this.store.getState().dragOffset);
    }
  }, {
    key: "getDifferenceFromInitialOffset",
    value: function() {
      return sS(this.store.getState().dragOffset);
    }
  }]), e;
}(), pS = 0;
function gS() {
  return pS++;
}
function Qi(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Qi = function(r) {
    return typeof r;
  } : Qi = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Qi(e);
}
function mS(e) {
  M(typeof e.canDrag == "function", "Expected canDrag to be a function."), M(typeof e.beginDrag == "function", "Expected beginDrag to be a function."), M(typeof e.endDrag == "function", "Expected endDrag to be a function.");
}
function vS(e) {
  M(typeof e.canDrop == "function", "Expected canDrop to be a function."), M(typeof e.hover == "function", "Expected hover to be a function."), M(typeof e.drop == "function", "Expected beginDrag to be a function.");
}
function Yl(e, t) {
  if (t && Array.isArray(e)) {
    e.forEach(function(r) {
      return Yl(r, !1);
    });
    return;
  }
  M(typeof e == "string" || Qi(e) === "symbol", t ? "Type can only be a string, a symbol, or an array of either." : "Type can only be a string or a symbol.");
}
const of = typeof global < "u" ? global : self, Lp = of.MutationObserver || of.WebKitMutationObserver;
function Mp(e) {
  return function() {
    const r = setTimeout(i, 0), n = setInterval(i, 50);
    function i() {
      clearTimeout(r), clearInterval(n), e();
    }
  };
}
function yS(e) {
  let t = 1;
  const r = new Lp(e), n = document.createTextNode("");
  return r.observe(n, {
    characterData: !0
  }), function() {
    t = -t, n.data = t;
  };
}
const SS = typeof Lp == "function" ? (
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
  yS
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
  Mp
);
class ES {
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
    const { queue: r, requestFlush: n } = this;
    r.length || (n(), this.flushing = !0), r[r.length] = t;
  }
  constructor() {
    this.queue = [], this.pendingErrors = [], this.flushing = !1, this.index = 0, this.capacity = 1024, this.flush = () => {
      const { queue: t } = this;
      for (; this.index < t.length; ) {
        const r = this.index;
        if (this.index++, t[r].call(), this.index > this.capacity) {
          for (let n = 0, i = t.length - this.index; n < i; n++)
            t[n] = t[n + this.index];
          t.length -= this.index, this.index = 0;
        }
      }
      t.length = 0, this.index = 0, this.flushing = !1;
    }, this.registerPendingError = (t) => {
      this.pendingErrors.push(t), this.requestErrorThrow();
    }, this.requestFlush = SS(this.flush), this.requestErrorThrow = Mp(() => {
      if (this.pendingErrors.length)
        throw this.pendingErrors.shift();
    });
  }
}
class wS {
  call() {
    try {
      this.task && this.task();
    } catch (t) {
      this.onError(t);
    } finally {
      this.task = null, this.release(this);
    }
  }
  constructor(t, r) {
    this.onError = t, this.release = r, this.task = null;
  }
}
class xS {
  create(t) {
    const r = this.freeTasks, n = r.length ? r.pop() : new wS(
      this.onError,
      (i) => r[r.length] = i
    );
    return n.task = t, n;
  }
  constructor(t) {
    this.onError = t, this.freeTasks = [];
  }
}
const Ap = new ES(), TS = new xS(Ap.registerPendingError);
function CS(e) {
  Ap.enqueueTask(TS.create(e));
}
function OS(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function DS(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function _S(e, t, r) {
  return t && DS(e.prototype, t), e;
}
function kr(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function IS(e, t) {
  return bS(e) || NS(e, t) || kS(e, t) || PS();
}
function PS() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function kS(e, t) {
  if (e) {
    if (typeof e == "string") return af(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return af(e, t);
  }
}
function af(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function NS(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n = [], i = !0, o = !1, a, l;
    try {
      for (r = r.call(e); !(i = (a = r.next()).done) && (n.push(a.value), !(t && n.length === t)); i = !0)
        ;
    } catch (u) {
      o = !0, l = u;
    } finally {
      try {
        !i && r.return != null && r.return();
      } finally {
        if (o) throw l;
      }
    }
    return n;
  }
}
function bS(e) {
  if (Array.isArray(e)) return e;
}
function RS(e) {
  var t = gS().toString();
  switch (e) {
    case rt.SOURCE:
      return "S".concat(t);
    case rt.TARGET:
      return "T".concat(t);
    default:
      throw new Error("Unknown Handler Role: ".concat(e));
  }
}
function lf(e) {
  switch (e[0]) {
    case "S":
      return rt.SOURCE;
    case "T":
      return rt.TARGET;
    default:
      M(!1, "Cannot parse handler ID: ".concat(e));
  }
}
function uf(e, t) {
  var r = e.entries(), n = !1;
  do {
    var i = r.next(), o = i.done, a = IS(i.value, 2), l = a[1];
    if (l === t)
      return !0;
    n = !!o;
  } while (!n);
  return !1;
}
var LS = /* @__PURE__ */ function() {
  function e(t) {
    OS(this, e), kr(this, "types", /* @__PURE__ */ new Map()), kr(this, "dragSources", /* @__PURE__ */ new Map()), kr(this, "dropTargets", /* @__PURE__ */ new Map()), kr(this, "pinnedSourceId", null), kr(this, "pinnedSource", null), kr(this, "store", void 0), this.store = t;
  }
  return _S(e, [{
    key: "addSource",
    value: function(r, n) {
      Yl(r), mS(n);
      var i = this.addHandler(rt.SOURCE, r, n);
      return this.store.dispatch(Q0(i)), i;
    }
  }, {
    key: "addTarget",
    value: function(r, n) {
      Yl(r, !0), vS(n);
      var i = this.addHandler(rt.TARGET, r, n);
      return this.store.dispatch(Y0(i)), i;
    }
  }, {
    key: "containsHandler",
    value: function(r) {
      return uf(this.dragSources, r) || uf(this.dropTargets, r);
    }
  }, {
    key: "getSource",
    value: function(r) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      M(this.isSourceId(r), "Expected a valid source ID.");
      var i = n && r === this.pinnedSourceId, o = i ? this.pinnedSource : this.dragSources.get(r);
      return o;
    }
  }, {
    key: "getTarget",
    value: function(r) {
      return M(this.isTargetId(r), "Expected a valid target ID."), this.dropTargets.get(r);
    }
  }, {
    key: "getSourceType",
    value: function(r) {
      return M(this.isSourceId(r), "Expected a valid source ID."), this.types.get(r);
    }
  }, {
    key: "getTargetType",
    value: function(r) {
      return M(this.isTargetId(r), "Expected a valid target ID."), this.types.get(r);
    }
  }, {
    key: "isSourceId",
    value: function(r) {
      var n = lf(r);
      return n === rt.SOURCE;
    }
  }, {
    key: "isTargetId",
    value: function(r) {
      var n = lf(r);
      return n === rt.TARGET;
    }
  }, {
    key: "removeSource",
    value: function(r) {
      var n = this;
      M(this.getSource(r), "Expected an existing source."), this.store.dispatch(Z0(r)), CS(function() {
        n.dragSources.delete(r), n.types.delete(r);
      });
    }
  }, {
    key: "removeTarget",
    value: function(r) {
      M(this.getTarget(r), "Expected an existing target."), this.store.dispatch(K0(r)), this.dropTargets.delete(r), this.types.delete(r);
    }
  }, {
    key: "pinSource",
    value: function(r) {
      var n = this.getSource(r);
      M(n, "Expected an existing source."), this.pinnedSourceId = r, this.pinnedSource = n;
    }
  }, {
    key: "unpinSource",
    value: function() {
      M(this.pinnedSource, "No source is pinned at the time."), this.pinnedSourceId = null, this.pinnedSource = null;
    }
  }, {
    key: "addHandler",
    value: function(r, n, i) {
      var o = RS(r);
      return this.types.set(o, n), r === rt.SOURCE ? this.dragSources.set(o, i) : r === rt.TARGET && this.dropTargets.set(o, i), o;
    }
  }]), e;
}();
function MS(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1, i = AS(n), o = new hS(i, new LS(i)), a = new j0(i, o), l = e(a, t, r);
  return a.receiveBackend(l), a;
}
function AS(e) {
  var t = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION__;
  return bp(aS, e && t && t({
    name: "dnd-core",
    instanceId: "dnd-core"
  }));
}
var HS = ["children"];
function FS(e, t) {
  return US(e) || jS(e, t) || $S(e, t) || BS();
}
function BS() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function $S(e, t) {
  if (e) {
    if (typeof e == "string") return sf(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return sf(e, t);
  }
}
function sf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function jS(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n = [], i = !0, o = !1, a, l;
    try {
      for (r = r.call(e); !(i = (a = r.next()).done) && (n.push(a.value), !(t && n.length === t)); i = !0)
        ;
    } catch (u) {
      o = !0, l = u;
    } finally {
      try {
        !i && r.return != null && r.return();
      } finally {
        if (o) throw l;
      }
    }
    return n;
  }
}
function US(e) {
  if (Array.isArray(e)) return e;
}
function zS(e, t) {
  if (e == null) return {};
  var r = GS(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      n = o[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function GS(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, o;
  for (o = 0; o < n.length; o++)
    i = n[o], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var cf = 0, Yi = Symbol.for("__REACT_DND_CONTEXT_INSTANCE__"), VS = x.memo(function(t) {
  var r = t.children, n = zS(t, HS), i = WS(n), o = FS(i, 2), a = o[0], l = o[1];
  return x.useEffect(function() {
    if (l) {
      var u = Hp();
      return ++cf, function() {
        --cf === 0 && (u[Yi] = null);
      };
    }
  }, []), O.jsx(kp.Provider, Object.assign({
    value: a
  }, {
    children: r
  }), void 0);
});
function WS(e) {
  if ("manager" in e) {
    var t = {
      dragDropManager: e.manager
    };
    return [t, !1];
  }
  var r = XS(e.backend, e.context, e.options, e.debugMode), n = !e.context;
  return [r, n];
}
function XS(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Hp(), r = arguments.length > 2 ? arguments[2] : void 0, n = arguments.length > 3 ? arguments[3] : void 0, i = t;
  return i[Yi] || (i[Yi] = {
    dragDropManager: MS(e, t, r, n)
  }), i[Yi];
}
function Hp() {
  return typeof global < "u" ? global : window;
}
function QS(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function YS(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function ZS(e, t, r) {
  return t && YS(e.prototype, t), e;
}
function ff(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var Aa = !1, Ha = !1, KS = /* @__PURE__ */ function() {
  function e(t) {
    QS(this, e), ff(this, "internalMonitor", void 0), ff(this, "sourceId", null), this.internalMonitor = t.getMonitor();
  }
  return ZS(e, [{
    key: "receiveHandlerId",
    value: function(r) {
      this.sourceId = r;
    }
  }, {
    key: "getHandlerId",
    value: function() {
      return this.sourceId;
    }
  }, {
    key: "canDrag",
    value: function() {
      M(!Aa, "You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
      try {
        return Aa = !0, this.internalMonitor.canDragSource(this.sourceId);
      } finally {
        Aa = !1;
      }
    }
  }, {
    key: "isDragging",
    value: function() {
      if (!this.sourceId)
        return !1;
      M(!Ha, "You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
      try {
        return Ha = !0, this.internalMonitor.isDraggingSource(this.sourceId);
      } finally {
        Ha = !1;
      }
    }
  }, {
    key: "subscribeToStateChange",
    value: function(r, n) {
      return this.internalMonitor.subscribeToStateChange(r, n);
    }
  }, {
    key: "isDraggingSource",
    value: function(r) {
      return this.internalMonitor.isDraggingSource(r);
    }
  }, {
    key: "isOverTarget",
    value: function(r, n) {
      return this.internalMonitor.isOverTarget(r, n);
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
    value: function(r) {
      return this.internalMonitor.subscribeToOffsetChange(r);
    }
  }, {
    key: "canDragSource",
    value: function(r) {
      return this.internalMonitor.canDragSource(r);
    }
  }, {
    key: "canDropOnTarget",
    value: function(r) {
      return this.internalMonitor.canDropOnTarget(r);
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
function qS(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function JS(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function eE(e, t, r) {
  return t && JS(e.prototype, t), e;
}
function df(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var Fa = !1, tE = /* @__PURE__ */ function() {
  function e(t) {
    qS(this, e), df(this, "internalMonitor", void 0), df(this, "targetId", null), this.internalMonitor = t.getMonitor();
  }
  return eE(e, [{
    key: "receiveHandlerId",
    value: function(r) {
      this.targetId = r;
    }
  }, {
    key: "getHandlerId",
    value: function() {
      return this.targetId;
    }
  }, {
    key: "subscribeToStateChange",
    value: function(r, n) {
      return this.internalMonitor.subscribeToStateChange(r, n);
    }
  }, {
    key: "canDrop",
    value: function() {
      if (!this.targetId)
        return !1;
      M(!Fa, "You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");
      try {
        return Fa = !0, this.internalMonitor.canDropOnTarget(this.targetId);
      } finally {
        Fa = !1;
      }
    }
  }, {
    key: "isOver",
    value: function(r) {
      return this.targetId ? this.internalMonitor.isOverTarget(this.targetId, r) : !1;
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
function rE(e) {
  if (typeof e.type != "string") {
    var t = e.type.displayName || e.type.name || "the component";
    throw new Error("Only native element nodes can now be passed to React DnD connectors." + "You can either wrap ".concat(t, " into a <div>, or turn it into a ") + "drag source or a drop target itself.");
  }
}
function nE(e) {
  return function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    if (!x.isValidElement(t)) {
      var n = t;
      return e(n, r), n;
    }
    var i = t;
    rE(i);
    var o = r ? function(a) {
      return e(a, r);
    } : e;
    return iE(i, o);
  };
}
function Fp(e) {
  var t = {};
  return Object.keys(e).forEach(function(r) {
    var n = e[r];
    if (r.endsWith("Ref"))
      t[r] = e[r];
    else {
      var i = nE(n);
      t[r] = function() {
        return i;
      };
    }
  }), t;
}
function hf(e, t) {
  typeof e == "function" ? e(t) : e.current = t;
}
function iE(e, t) {
  var r = e.ref;
  return M(typeof r != "string", "Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"), r ? x.cloneElement(e, {
    ref: function(i) {
      hf(r, i), hf(t, i);
    }
  }) : x.cloneElement(e, {
    ref: t
  });
}
function Zi(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Zi = function(r) {
    return typeof r;
  } : Zi = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Zi(e);
}
function Zl(e) {
  return (
    // eslint-disable-next-line no-prototype-builtins
    e !== null && Zi(e) === "object" && Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function Kl(e, t, r, n) {
  var i = void 0;
  if (i !== void 0)
    return !!i;
  if (e === t)
    return !0;
  if (typeof e != "object" || !e || typeof t != "object" || !t)
    return !1;
  var o = Object.keys(e), a = Object.keys(t);
  if (o.length !== a.length)
    return !1;
  for (var l = Object.prototype.hasOwnProperty.bind(t), u = 0; u < o.length; u++) {
    var s = o[u];
    if (!l(s))
      return !1;
    var c = e[s], h = t[s];
    if (i = void 0, i === !1 || i === void 0 && c !== h)
      return !1;
  }
  return !0;
}
function oE(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function aE(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function lE(e, t, r) {
  return t && aE(e.prototype, t), e;
}
function Ce(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var uE = /* @__PURE__ */ function() {
  function e(t) {
    var r = this;
    oE(this, e), Ce(this, "hooks", Fp({
      dragSource: function(i, o) {
        r.clearDragSource(), r.dragSourceOptions = o || null, Zl(i) ? r.dragSourceRef = i : r.dragSourceNode = i, r.reconnectDragSource();
      },
      dragPreview: function(i, o) {
        r.clearDragPreview(), r.dragPreviewOptions = o || null, Zl(i) ? r.dragPreviewRef = i : r.dragPreviewNode = i, r.reconnectDragPreview();
      }
    })), Ce(this, "handlerId", null), Ce(this, "dragSourceRef", null), Ce(this, "dragSourceNode", void 0), Ce(this, "dragSourceOptionsInternal", null), Ce(this, "dragSourceUnsubscribe", void 0), Ce(this, "dragPreviewRef", null), Ce(this, "dragPreviewNode", void 0), Ce(this, "dragPreviewOptionsInternal", null), Ce(this, "dragPreviewUnsubscribe", void 0), Ce(this, "lastConnectedHandlerId", null), Ce(this, "lastConnectedDragSource", null), Ce(this, "lastConnectedDragSourceOptions", null), Ce(this, "lastConnectedDragPreview", null), Ce(this, "lastConnectedDragPreviewOptions", null), Ce(this, "backend", void 0), this.backend = t;
  }
  return lE(e, [{
    key: "receiveHandlerId",
    value: function(r) {
      this.handlerId !== r && (this.handlerId = r, this.reconnect());
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
    set: function(r) {
      this.dragSourceOptionsInternal = r;
    }
  }, {
    key: "dragPreviewOptions",
    get: function() {
      return this.dragPreviewOptionsInternal;
    },
    set: function(r) {
      this.dragPreviewOptionsInternal = r;
    }
  }, {
    key: "reconnect",
    value: function() {
      this.reconnectDragSource(), this.reconnectDragPreview();
    }
  }, {
    key: "reconnectDragSource",
    value: function() {
      var r = this.dragSource, n = this.didHandlerIdChange() || this.didConnectedDragSourceChange() || this.didDragSourceOptionsChange();
      if (n && this.disconnectDragSource(), !!this.handlerId) {
        if (!r) {
          this.lastConnectedDragSource = r;
          return;
        }
        n && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDragSource = r, this.lastConnectedDragSourceOptions = this.dragSourceOptions, this.dragSourceUnsubscribe = this.backend.connectDragSource(this.handlerId, r, this.dragSourceOptions));
      }
    }
  }, {
    key: "reconnectDragPreview",
    value: function() {
      var r = this.dragPreview, n = this.didHandlerIdChange() || this.didConnectedDragPreviewChange() || this.didDragPreviewOptionsChange();
      if (n && this.disconnectDragPreview(), !!this.handlerId) {
        if (!r) {
          this.lastConnectedDragPreview = r;
          return;
        }
        n && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDragPreview = r, this.lastConnectedDragPreviewOptions = this.dragPreviewOptions, this.dragPreviewUnsubscribe = this.backend.connectDragPreview(this.handlerId, r, this.dragPreviewOptions));
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
      return !Kl(this.lastConnectedDragSourceOptions, this.dragSourceOptions);
    }
  }, {
    key: "didDragPreviewOptionsChange",
    value: function() {
      return !Kl(this.lastConnectedDragPreviewOptions, this.dragPreviewOptions);
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
function sE(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function cE(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function fE(e, t, r) {
  return t && cE(e.prototype, t), e;
}
function yt(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var dE = /* @__PURE__ */ function() {
  function e(t) {
    var r = this;
    sE(this, e), yt(this, "hooks", Fp({
      dropTarget: function(i, o) {
        r.clearDropTarget(), r.dropTargetOptions = o, Zl(i) ? r.dropTargetRef = i : r.dropTargetNode = i, r.reconnect();
      }
    })), yt(this, "handlerId", null), yt(this, "dropTargetRef", null), yt(this, "dropTargetNode", void 0), yt(this, "dropTargetOptionsInternal", null), yt(this, "unsubscribeDropTarget", void 0), yt(this, "lastConnectedHandlerId", null), yt(this, "lastConnectedDropTarget", null), yt(this, "lastConnectedDropTargetOptions", null), yt(this, "backend", void 0), this.backend = t;
  }
  return fE(e, [{
    key: "connectTarget",
    get: function() {
      return this.dropTarget;
    }
  }, {
    key: "reconnect",
    value: function() {
      var r = this.didHandlerIdChange() || this.didDropTargetChange() || this.didOptionsChange();
      r && this.disconnectDropTarget();
      var n = this.dropTarget;
      if (this.handlerId) {
        if (!n) {
          this.lastConnectedDropTarget = n;
          return;
        }
        r && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDropTarget = n, this.lastConnectedDropTargetOptions = this.dropTargetOptions, this.unsubscribeDropTarget = this.backend.connectDropTarget(this.handlerId, n, this.dropTargetOptions));
      }
    }
  }, {
    key: "receiveHandlerId",
    value: function(r) {
      r !== this.handlerId && (this.handlerId = r, this.reconnect());
    }
  }, {
    key: "dropTargetOptions",
    get: function() {
      return this.dropTargetOptionsInternal;
    },
    set: function(r) {
      this.dropTargetOptionsInternal = r;
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
      return !Kl(this.lastConnectedDropTargetOptions, this.dropTargetOptions);
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
function hE(e, t, r) {
  var n = r.getRegistry(), i = n.addTarget(e, t);
  return [i, function() {
    return n.removeTarget(i);
  }];
}
function pE(e, t, r) {
  var n = r.getRegistry(), i = n.addSource(e, t);
  return [i, function() {
    return n.removeSource(i);
  }];
}
var Tr = typeof window < "u" ? x.useLayoutEffect : x.useEffect;
function Ki(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ki = function(r) {
    return typeof r;
  } : Ki = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Ki(e);
}
function gE(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function mE(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function vE(e, t, r) {
  return t && mE(e.prototype, t), e;
}
function Ba(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var yE = /* @__PURE__ */ function() {
  function e(t, r, n) {
    gE(this, e), Ba(this, "spec", void 0), Ba(this, "monitor", void 0), Ba(this, "connector", void 0), this.spec = t, this.monitor = r, this.connector = n;
  }
  return vE(e, [{
    key: "beginDrag",
    value: function() {
      var r, n = this.spec, i = this.monitor, o = null;
      return Ki(n.item) === "object" ? o = n.item : typeof n.item == "function" ? o = n.item(i) : o = {}, (r = o) !== null && r !== void 0 ? r : null;
    }
  }, {
    key: "canDrag",
    value: function() {
      var r = this.spec, n = this.monitor;
      return typeof r.canDrag == "boolean" ? r.canDrag : typeof r.canDrag == "function" ? r.canDrag(n) : !0;
    }
  }, {
    key: "isDragging",
    value: function(r, n) {
      var i = this.spec, o = this.monitor, a = i.isDragging;
      return a ? a(o) : n === r.getSourceId();
    }
  }, {
    key: "endDrag",
    value: function() {
      var r = this.spec, n = this.monitor, i = this.connector, o = r.end;
      o && o(n.getItem(), n), i.reconnect();
    }
  }]), e;
}();
function SE(e, t, r) {
  var n = x.useMemo(function() {
    return new yE(e, t, r);
  }, [t, r]);
  return x.useEffect(function() {
    n.spec = e;
  }, [e]), n;
}
function fn() {
  var e = x.useContext(kp), t = e.dragDropManager;
  return M(t != null, "Expected drag drop context"), t;
}
function EE(e) {
  return x.useMemo(function() {
    var t = e.type;
    return M(t != null, "spec.type must be defined"), t;
  }, [e]);
}
function wE(e, t) {
  return OE(e) || CE(e, t) || TE(e, t) || xE();
}
function xE() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function TE(e, t) {
  if (e) {
    if (typeof e == "string") return pf(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return pf(e, t);
  }
}
function pf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function CE(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n = [], i = !0, o = !1, a, l;
    try {
      for (r = r.call(e); !(i = (a = r.next()).done) && (n.push(a.value), !(t && n.length === t)); i = !0)
        ;
    } catch (u) {
      o = !0, l = u;
    } finally {
      try {
        !i && r.return != null && r.return();
      } finally {
        if (o) throw l;
      }
    }
    return n;
  }
}
function OE(e) {
  if (Array.isArray(e)) return e;
}
function DE(e, t, r) {
  var n = fn(), i = SE(e, t, r), o = EE(e);
  Tr(function() {
    if (o != null) {
      var l = pE(o, i, n), u = wE(l, 2), s = u[0], c = u[1];
      return t.receiveHandlerId(s), r.receiveHandlerId(s), c;
    }
  }, [n, t, r, i, o]);
}
function _E(e) {
  return NE(e) || kE(e) || PE(e) || IE();
}
function IE() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function PE(e, t) {
  if (e) {
    if (typeof e == "string") return ql(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ql(e, t);
  }
}
function kE(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function NE(e) {
  if (Array.isArray(e)) return ql(e);
}
function ql(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function Bp(e, t) {
  var r = _E(t || []);
  return t == null && typeof e != "function" && r.push(e), x.useMemo(function() {
    return typeof e == "function" ? e() : e;
  }, r);
}
function bE() {
  var e = fn();
  return x.useMemo(function() {
    return new KS(e);
  }, [e]);
}
function RE(e, t) {
  var r = fn(), n = x.useMemo(function() {
    return new uE(r.getBackend());
  }, [r]);
  return Tr(function() {
    return n.dragSourceOptions = e || null, n.reconnect(), function() {
      return n.disconnectDragSource();
    };
  }, [n, e]), Tr(function() {
    return n.dragPreviewOptions = t || null, n.reconnect(), function() {
      return n.disconnectDragPreview();
    };
  }, [n, t]), n;
}
var LE = function e(t, r) {
  if (t === r) return !0;
  if (t && r && typeof t == "object" && typeof r == "object") {
    if (t.constructor !== r.constructor) return !1;
    var n, i, o;
    if (Array.isArray(t)) {
      if (n = t.length, n != r.length) return !1;
      for (i = n; i-- !== 0; )
        if (!e(t[i], r[i])) return !1;
      return !0;
    }
    if (t.constructor === RegExp) return t.source === r.source && t.flags === r.flags;
    if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === r.valueOf();
    if (t.toString !== Object.prototype.toString) return t.toString() === r.toString();
    if (o = Object.keys(t), n = o.length, n !== Object.keys(r).length) return !1;
    for (i = n; i-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(r, o[i])) return !1;
    for (i = n; i-- !== 0; ) {
      var a = o[i];
      if (!e(t[a], r[a])) return !1;
    }
    return !0;
  }
  return t !== t && r !== r;
};
const ME = /* @__PURE__ */ ln(LE);
function AE(e, t) {
  return $E(e) || BE(e, t) || FE(e, t) || HE();
}
function HE() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function FE(e, t) {
  if (e) {
    if (typeof e == "string") return gf(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return gf(e, t);
  }
}
function gf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function BE(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n = [], i = !0, o = !1, a, l;
    try {
      for (r = r.call(e); !(i = (a = r.next()).done) && (n.push(a.value), !(t && n.length === t)); i = !0)
        ;
    } catch (u) {
      o = !0, l = u;
    } finally {
      try {
        !i && r.return != null && r.return();
      } finally {
        if (o) throw l;
      }
    }
    return n;
  }
}
function $E(e) {
  if (Array.isArray(e)) return e;
}
function jE(e, t, r) {
  var n = x.useState(function() {
    return t(e);
  }), i = AE(n, 2), o = i[0], a = i[1], l = x.useCallback(function() {
    var u = t(e);
    ME(o, u) || (a(u), r && r());
  }, [o, e, r]);
  return Tr(l), [o, l];
}
function UE(e, t) {
  return WE(e) || VE(e, t) || GE(e, t) || zE();
}
function zE() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function GE(e, t) {
  if (e) {
    if (typeof e == "string") return mf(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return mf(e, t);
  }
}
function mf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function VE(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n = [], i = !0, o = !1, a, l;
    try {
      for (r = r.call(e); !(i = (a = r.next()).done) && (n.push(a.value), !(t && n.length === t)); i = !0)
        ;
    } catch (u) {
      o = !0, l = u;
    } finally {
      try {
        !i && r.return != null && r.return();
      } finally {
        if (o) throw l;
      }
    }
    return n;
  }
}
function WE(e) {
  if (Array.isArray(e)) return e;
}
function XE(e, t, r) {
  var n = jE(e, t, r), i = UE(n, 2), o = i[0], a = i[1];
  return Tr(function() {
    var u = e.getHandlerId();
    if (u != null)
      return e.subscribeToStateChange(a, {
        handlerIds: [u]
      });
  }, [e, a]), o;
}
function $p(e, t, r) {
  return XE(t, e || function() {
    return {};
  }, function() {
    return r.reconnect();
  });
}
function QE(e) {
  return x.useMemo(function() {
    return e.hooks.dragSource();
  }, [e]);
}
function YE(e) {
  return x.useMemo(function() {
    return e.hooks.dragPreview();
  }, [e]);
}
function ZE(e, t) {
  var r = Bp(e, t);
  M(!r.begin, "useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)");
  var n = bE(), i = RE(r.options, r.previewOptions);
  return DE(r, n, i), [$p(r.collect, n, i), QE(i), YE(i)];
}
function KE(e) {
  var t = e.accept;
  return x.useMemo(function() {
    return M(e.accept != null, "accept must be defined"), Array.isArray(t) ? t : [t];
  }, [t]);
}
function qE(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function JE(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function ew(e, t, r) {
  return t && JE(e.prototype, t), e;
}
function vf(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var tw = /* @__PURE__ */ function() {
  function e(t, r) {
    qE(this, e), vf(this, "spec", void 0), vf(this, "monitor", void 0), this.spec = t, this.monitor = r;
  }
  return ew(e, [{
    key: "canDrop",
    value: function() {
      var r = this.spec, n = this.monitor;
      return r.canDrop ? r.canDrop(n.getItem(), n) : !0;
    }
  }, {
    key: "hover",
    value: function() {
      var r = this.spec, n = this.monitor;
      r.hover && r.hover(n.getItem(), n);
    }
  }, {
    key: "drop",
    value: function() {
      var r = this.spec, n = this.monitor;
      if (r.drop)
        return r.drop(n.getItem(), n);
    }
  }]), e;
}();
function rw(e, t) {
  var r = x.useMemo(function() {
    return new tw(e, t);
  }, [t]);
  return x.useEffect(function() {
    r.spec = e;
  }, [e]), r;
}
function nw(e, t) {
  return lw(e) || aw(e, t) || ow(e, t) || iw();
}
function iw() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ow(e, t) {
  if (e) {
    if (typeof e == "string") return yf(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return yf(e, t);
  }
}
function yf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function aw(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n = [], i = !0, o = !1, a, l;
    try {
      for (r = r.call(e); !(i = (a = r.next()).done) && (n.push(a.value), !(t && n.length === t)); i = !0)
        ;
    } catch (u) {
      o = !0, l = u;
    } finally {
      try {
        !i && r.return != null && r.return();
      } finally {
        if (o) throw l;
      }
    }
    return n;
  }
}
function lw(e) {
  if (Array.isArray(e)) return e;
}
function uw(e, t, r) {
  var n = fn(), i = rw(e, t), o = KE(e);
  Tr(function() {
    var l = hE(o, i, n), u = nw(l, 2), s = u[0], c = u[1];
    return t.receiveHandlerId(s), r.receiveHandlerId(s), c;
  }, [n, t, i, r, o.map(function(a) {
    return a.toString();
  }).join("|")]);
}
function sw() {
  var e = fn();
  return x.useMemo(function() {
    return new tE(e);
  }, [e]);
}
function cw(e) {
  var t = fn(), r = x.useMemo(function() {
    return new dE(t.getBackend());
  }, [t]);
  return Tr(function() {
    return r.dropTargetOptions = e || null, r.reconnect(), function() {
      return r.disconnectDropTarget();
    };
  }, [e]), r;
}
function fw(e) {
  return x.useMemo(function() {
    return e.hooks.dropTarget();
  }, [e]);
}
function jp(e, t) {
  var r = Bp(e, t), n = sw(), i = cw(r.options);
  return uw(r, n, i), [$p(r.collect, n, i), fw(i)];
}
function Up(e) {
  var t = null, r = function() {
    return t == null && (t = e()), t;
  };
  return r;
}
function dw(e, t) {
  return e.filter(function(r) {
    return r !== t;
  });
}
function hw(e, t) {
  var r = /* @__PURE__ */ new Set(), n = function(a) {
    return r.add(a);
  };
  e.forEach(n), t.forEach(n);
  var i = [];
  return r.forEach(function(o) {
    return i.push(o);
  }), i;
}
function pw(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function gw(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function mw(e, t, r) {
  return t && gw(e.prototype, t), e;
}
function Sf(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var vw = /* @__PURE__ */ function() {
  function e(t) {
    pw(this, e), Sf(this, "entered", []), Sf(this, "isNodeInDocument", void 0), this.isNodeInDocument = t;
  }
  return mw(e, [{
    key: "enter",
    value: function(r) {
      var n = this, i = this.entered.length, o = function(l) {
        return n.isNodeInDocument(l) && (!l.contains || l.contains(r));
      };
      return this.entered = hw(this.entered.filter(o), [r]), i === 0 && this.entered.length > 0;
    }
  }, {
    key: "leave",
    value: function(r) {
      var n = this.entered.length;
      return this.entered = dw(this.entered.filter(this.isNodeInDocument), r), n > 0 && this.entered.length === 0;
    }
  }, {
    key: "reset",
    value: function() {
      this.entered = [];
    }
  }]), e;
}(), yw = Up(function() {
  return /firefox/i.test(navigator.userAgent);
}), zp = Up(function() {
  return !!window.safari;
});
function Sw(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ew(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function ww(e, t, r) {
  return t && Ew(e.prototype, t), e;
}
function Tn(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var Ef = /* @__PURE__ */ function() {
  function e(t, r) {
    Sw(this, e), Tn(this, "xs", void 0), Tn(this, "ys", void 0), Tn(this, "c1s", void 0), Tn(this, "c2s", void 0), Tn(this, "c3s", void 0);
    for (var n = t.length, i = [], o = 0; o < n; o++)
      i.push(o);
    i.sort(function(E, A) {
      return t[E] < t[A] ? -1 : 1;
    });
    for (var a = [], l = [], u, s, c = 0; c < n - 1; c++)
      u = t[c + 1] - t[c], s = r[c + 1] - r[c], a.push(u), l.push(s / u);
    for (var h = [l[0]], d = 0; d < a.length - 1; d++) {
      var m = l[d], y = l[d + 1];
      if (m * y <= 0)
        h.push(0);
      else {
        u = a[d];
        var v = a[d + 1], _ = u + v;
        h.push(3 * _ / ((_ + v) / m + (_ + u) / y));
      }
    }
    h.push(l[l.length - 1]);
    for (var p = [], f = [], g, S = 0; S < h.length - 1; S++) {
      g = l[S];
      var T = h[S], C = 1 / a[S], D = T + h[S + 1] - g - g;
      p.push((g - T - D) * C), f.push(D * C * C);
    }
    this.xs = t, this.ys = r, this.c1s = h, this.c2s = p, this.c3s = f;
  }
  return ww(e, [{
    key: "interpolate",
    value: function(r) {
      var n = this.xs, i = this.ys, o = this.c1s, a = this.c2s, l = this.c3s, u = n.length - 1;
      if (r === n[u])
        return i[u];
      for (var s = 0, c = l.length - 1, h; s <= c; ) {
        h = Math.floor(0.5 * (s + c));
        var d = n[h];
        if (d < r)
          s = h + 1;
        else if (d > r)
          c = h - 1;
        else
          return i[h];
      }
      u = Math.max(0, c);
      var m = r - n[u], y = m * m;
      return i[u] + o[u] * m + a[u] * y + l[u] * m * y;
    }
  }]), e;
}(), xw = 1;
function Gp(e) {
  var t = e.nodeType === xw ? e : e.parentElement;
  if (!t)
    return null;
  var r = t.getBoundingClientRect(), n = r.top, i = r.left;
  return {
    x: i,
    y: n
  };
}
function ki(e) {
  return {
    x: e.clientX,
    y: e.clientY
  };
}
function Tw(e) {
  var t;
  return e.nodeName === "IMG" && (yw() || !((t = document.documentElement) !== null && t !== void 0 && t.contains(e)));
}
function Cw(e, t, r, n) {
  var i = e ? t.width : r, o = e ? t.height : n;
  return zp() && e && (o /= window.devicePixelRatio, i /= window.devicePixelRatio), {
    dragPreviewWidth: i,
    dragPreviewHeight: o
  };
}
function Ow(e, t, r, n, i) {
  var o = Tw(t), a = o ? e : t, l = Gp(a), u = {
    x: r.x - l.x,
    y: r.y - l.y
  }, s = e.offsetWidth, c = e.offsetHeight, h = n.anchorX, d = n.anchorY, m = Cw(o, t, s, c), y = m.dragPreviewWidth, v = m.dragPreviewHeight, _ = function() {
    var D = new Ef([0, 0.5, 1], [
      // Dock to the top
      u.y,
      // Align at the center
      u.y / c * v,
      // Dock to the bottom
      u.y + v - c
    ]), E = D.interpolate(d);
    return zp() && o && (E += (window.devicePixelRatio - 1) * v), E;
  }, p = function() {
    var D = new Ef([0, 0.5, 1], [
      // Dock to the left
      u.x,
      // Align at the center
      u.x / s * y,
      // Dock to the right
      u.x + y - s
    ]);
    return D.interpolate(h);
  }, f = i.offsetX, g = i.offsetY, S = f === 0 || f, T = g === 0 || g;
  return {
    x: S ? f : p(),
    y: T ? g : _()
  };
}
var Vp = "__NATIVE_FILE__", Wp = "__NATIVE_URL__", Xp = "__NATIVE_TEXT__", Qp = "__NATIVE_HTML__";
const wf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FILE: Vp,
  HTML: Qp,
  TEXT: Xp,
  URL: Wp
}, Symbol.toStringTag, { value: "Module" }));
function $a(e, t, r) {
  var n = t.reduce(function(i, o) {
    return i || e.getData(o);
  }, "");
  return n ?? r;
}
var Nr;
function Ni(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var Jl = (Nr = {}, Ni(Nr, Vp, {
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
}), Ni(Nr, Qp, {
  exposeProperties: {
    html: function(t, r) {
      return $a(t, r, "");
    },
    dataTransfer: function(t) {
      return t;
    }
  },
  matchesTypes: ["Html", "text/html"]
}), Ni(Nr, Wp, {
  exposeProperties: {
    urls: function(t, r) {
      return $a(t, r, "").split(`
`);
    },
    dataTransfer: function(t) {
      return t;
    }
  },
  matchesTypes: ["Url", "text/uri-list"]
}), Ni(Nr, Xp, {
  exposeProperties: {
    text: function(t, r) {
      return $a(t, r, "");
    },
    dataTransfer: function(t) {
      return t;
    }
  },
  matchesTypes: ["Text", "text/plain"]
}), Nr);
function Dw(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function _w(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function Iw(e, t, r) {
  return t && _w(e.prototype, t), e;
}
function xf(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var Pw = /* @__PURE__ */ function() {
  function e(t) {
    Dw(this, e), xf(this, "item", void 0), xf(this, "config", void 0), this.config = t, this.item = {}, this.initializeExposedProperties();
  }
  return Iw(e, [{
    key: "initializeExposedProperties",
    value: function() {
      var r = this;
      Object.keys(this.config.exposeProperties).forEach(function(n) {
        Object.defineProperty(r.item, n, {
          configurable: !0,
          enumerable: !0,
          get: function() {
            return console.warn(`Browser doesn't allow reading "`.concat(n, '" until the drop event.')), null;
          }
        });
      });
    }
  }, {
    key: "loadDataTransfer",
    value: function(r) {
      var n = this;
      if (r) {
        var i = {};
        Object.keys(this.config.exposeProperties).forEach(function(o) {
          i[o] = {
            value: n.config.exposeProperties[o](r, n.config.matchesTypes),
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
    value: function(r, n) {
      return n === r.getSourceId();
    }
  }, {
    key: "endDrag",
    value: function() {
    }
  }]), e;
}();
function kw(e, t) {
  var r = new Pw(Jl[e]);
  return r.loadDataTransfer(t), r;
}
function ja(e) {
  if (!e)
    return null;
  var t = Array.prototype.slice.call(e.types || []);
  return Object.keys(Jl).filter(function(r) {
    var n = Jl[r].matchesTypes;
    return n.some(function(i) {
      return t.indexOf(i) > -1;
    });
  })[0] || null;
}
function Nw(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function bw(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function Rw(e, t, r) {
  return t && bw(e.prototype, t), e;
}
function Ua(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var Lw = /* @__PURE__ */ function() {
  function e(t, r) {
    Nw(this, e), Ua(this, "ownerDocument", null), Ua(this, "globalContext", void 0), Ua(this, "optionsArgs", void 0), this.globalContext = t, this.optionsArgs = r;
  }
  return Rw(e, [{
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
      var r;
      return (r = this.globalContext) !== null && r !== void 0 && r.document ? this.globalContext.document : this.window ? this.window.document : void 0;
    }
  }, {
    key: "rootElement",
    get: function() {
      var r;
      return ((r = this.optionsArgs) === null || r === void 0 ? void 0 : r.rootElement) || this.window;
    }
  }]), e;
}();
function Tf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Cf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Tf(Object(r), !0).forEach(function(n) {
      F(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Tf(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Mw(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Aw(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function Hw(e, t, r) {
  return t && Aw(e.prototype, t), e;
}
function F(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var Fw = /* @__PURE__ */ function() {
  function e(t, r, n) {
    var i = this;
    Mw(this, e), F(this, "options", void 0), F(this, "actions", void 0), F(this, "monitor", void 0), F(this, "registry", void 0), F(this, "enterLeaveCounter", void 0), F(this, "sourcePreviewNodes", /* @__PURE__ */ new Map()), F(this, "sourcePreviewNodeOptions", /* @__PURE__ */ new Map()), F(this, "sourceNodes", /* @__PURE__ */ new Map()), F(this, "sourceNodeOptions", /* @__PURE__ */ new Map()), F(this, "dragStartSourceIds", null), F(this, "dropTargetIds", []), F(this, "dragEnterTargetIds", []), F(this, "currentNativeSource", null), F(this, "currentNativeHandle", null), F(this, "currentDragSourceNode", null), F(this, "altKeyPressed", !1), F(this, "mouseMoveTimeoutTimer", null), F(this, "asyncEndDragFrameId", null), F(this, "dragOverTargetIds", null), F(this, "lastClientOffset", null), F(this, "hoverRafId", null), F(this, "getSourceClientOffset", function(o) {
      var a = i.sourceNodes.get(o);
      return a && Gp(a) || null;
    }), F(this, "endDragNativeItem", function() {
      i.isDraggingNativeItem() && (i.actions.endDrag(), i.currentNativeHandle && i.registry.removeSource(i.currentNativeHandle), i.currentNativeHandle = null, i.currentNativeSource = null);
    }), F(this, "isNodeInDocument", function(o) {
      return !!(o && i.document && i.document.body && i.document.body.contains(o));
    }), F(this, "endDragIfSourceWasRemovedFromDOM", function() {
      var o = i.currentDragSourceNode;
      o == null || i.isNodeInDocument(o) || i.clearCurrentDragSourceNode() && i.monitor.isDragging() && i.actions.endDrag();
    }), F(this, "handleTopDragStartCapture", function() {
      i.clearCurrentDragSourceNode(), i.dragStartSourceIds = [];
    }), F(this, "handleTopDragStart", function(o) {
      if (!o.defaultPrevented) {
        var a = i.dragStartSourceIds;
        i.dragStartSourceIds = null;
        var l = ki(o);
        i.monitor.isDragging() && i.actions.endDrag(), i.actions.beginDrag(a || [], {
          publishSource: !1,
          getSourceClientOffset: i.getSourceClientOffset,
          clientOffset: l
        });
        var u = o.dataTransfer, s = ja(u);
        if (i.monitor.isDragging()) {
          if (u && typeof u.setDragImage == "function") {
            var c = i.monitor.getSourceId(), h = i.sourceNodes.get(c), d = i.sourcePreviewNodes.get(c) || h;
            if (d) {
              var m = i.getCurrentSourcePreviewNodeOptions(), y = m.anchorX, v = m.anchorY, _ = m.offsetX, p = m.offsetY, f = {
                anchorX: y,
                anchorY: v
              }, g = {
                offsetX: _,
                offsetY: p
              }, S = Ow(h, d, l, f, g);
              u.setDragImage(d, S.x, S.y);
            }
          }
          try {
            u == null || u.setData("application/json", {});
          } catch {
          }
          i.setCurrentDragSourceNode(o.target);
          var T = i.getCurrentSourcePreviewNodeOptions(), C = T.captureDraggingState;
          C ? i.actions.publishDragSource() : setTimeout(function() {
            return i.actions.publishDragSource();
          }, 0);
        } else if (s)
          i.beginDragNativeItem(s);
        else {
          if (u && !u.types && (o.target && !o.target.hasAttribute || !o.target.hasAttribute("draggable")))
            return;
          o.preventDefault();
        }
      }
    }), F(this, "handleTopDragEndCapture", function() {
      i.clearCurrentDragSourceNode() && i.monitor.isDragging() && i.actions.endDrag();
    }), F(this, "handleTopDragEnterCapture", function(o) {
      i.dragEnterTargetIds = [];
      var a = i.enterLeaveCounter.enter(o.target);
      if (!(!a || i.monitor.isDragging())) {
        var l = o.dataTransfer, u = ja(l);
        u && i.beginDragNativeItem(u, l);
      }
    }), F(this, "handleTopDragEnter", function(o) {
      var a = i.dragEnterTargetIds;
      if (i.dragEnterTargetIds = [], !!i.monitor.isDragging()) {
        i.altKeyPressed = o.altKey, a.length > 0 && i.actions.hover(a, {
          clientOffset: ki(o)
        });
        var l = a.some(function(u) {
          return i.monitor.canDropOnTarget(u);
        });
        l && (o.preventDefault(), o.dataTransfer && (o.dataTransfer.dropEffect = i.getCurrentDropEffect()));
      }
    }), F(this, "handleTopDragOverCapture", function() {
      i.dragOverTargetIds = [];
    }), F(this, "handleTopDragOver", function(o) {
      var a = i.dragOverTargetIds;
      if (i.dragOverTargetIds = [], !i.monitor.isDragging()) {
        o.preventDefault(), o.dataTransfer && (o.dataTransfer.dropEffect = "none");
        return;
      }
      i.altKeyPressed = o.altKey, i.lastClientOffset = ki(o), i.hoverRafId === null && typeof requestAnimationFrame < "u" && (i.hoverRafId = requestAnimationFrame(function() {
        i.monitor.isDragging() && i.actions.hover(a || [], {
          clientOffset: i.lastClientOffset
        }), i.hoverRafId = null;
      }));
      var l = (a || []).some(function(u) {
        return i.monitor.canDropOnTarget(u);
      });
      l ? (o.preventDefault(), o.dataTransfer && (o.dataTransfer.dropEffect = i.getCurrentDropEffect())) : i.isDraggingNativeItem() ? o.preventDefault() : (o.preventDefault(), o.dataTransfer && (o.dataTransfer.dropEffect = "none"));
    }), F(this, "handleTopDragLeaveCapture", function(o) {
      i.isDraggingNativeItem() && o.preventDefault();
      var a = i.enterLeaveCounter.leave(o.target);
      a && i.isDraggingNativeItem() && setTimeout(function() {
        return i.endDragNativeItem();
      }, 0);
    }), F(this, "handleTopDropCapture", function(o) {
      if (i.dropTargetIds = [], i.isDraggingNativeItem()) {
        var a;
        o.preventDefault(), (a = i.currentNativeSource) === null || a === void 0 || a.loadDataTransfer(o.dataTransfer);
      } else ja(o.dataTransfer) && o.preventDefault();
      i.enterLeaveCounter.reset();
    }), F(this, "handleTopDrop", function(o) {
      var a = i.dropTargetIds;
      i.dropTargetIds = [], i.actions.hover(a, {
        clientOffset: ki(o)
      }), i.actions.drop({
        dropEffect: i.getCurrentDropEffect()
      }), i.isDraggingNativeItem() ? i.endDragNativeItem() : i.monitor.isDragging() && i.actions.endDrag();
    }), F(this, "handleSelectStart", function(o) {
      var a = o.target;
      typeof a.dragDrop == "function" && (a.tagName === "INPUT" || a.tagName === "SELECT" || a.tagName === "TEXTAREA" || a.isContentEditable || (o.preventDefault(), a.dragDrop()));
    }), this.options = new Lw(r, n), this.actions = t.getActions(), this.monitor = t.getMonitor(), this.registry = t.getRegistry(), this.enterLeaveCounter = new vw(this.isNodeInDocument);
  }
  return Hw(e, [{
    key: "profile",
    value: function() {
      var r, n;
      return {
        sourcePreviewNodes: this.sourcePreviewNodes.size,
        sourcePreviewNodeOptions: this.sourcePreviewNodeOptions.size,
        sourceNodeOptions: this.sourceNodeOptions.size,
        sourceNodes: this.sourceNodes.size,
        dragStartSourceIds: ((r = this.dragStartSourceIds) === null || r === void 0 ? void 0 : r.length) || 0,
        dropTargetIds: this.dropTargetIds.length,
        dragEnterTargetIds: this.dragEnterTargetIds.length,
        dragOverTargetIds: ((n = this.dragOverTargetIds) === null || n === void 0 ? void 0 : n.length) || 0
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
      var r = this.rootElement;
      if (r !== void 0) {
        if (r.__isReactDndBackendSetUp)
          throw new Error("Cannot have two HTML5 backends at the same time.");
        r.__isReactDndBackendSetUp = !0, this.addEventListeners(r);
      }
    }
  }, {
    key: "teardown",
    value: function() {
      var r = this.rootElement;
      if (r !== void 0 && (r.__isReactDndBackendSetUp = !1, this.removeEventListeners(this.rootElement), this.clearCurrentDragSourceNode(), this.asyncEndDragFrameId)) {
        var n;
        (n = this.window) === null || n === void 0 || n.cancelAnimationFrame(this.asyncEndDragFrameId);
      }
    }
  }, {
    key: "connectDragPreview",
    value: function(r, n, i) {
      var o = this;
      return this.sourcePreviewNodeOptions.set(r, i), this.sourcePreviewNodes.set(r, n), function() {
        o.sourcePreviewNodes.delete(r), o.sourcePreviewNodeOptions.delete(r);
      };
    }
  }, {
    key: "connectDragSource",
    value: function(r, n, i) {
      var o = this;
      this.sourceNodes.set(r, n), this.sourceNodeOptions.set(r, i);
      var a = function(s) {
        return o.handleDragStart(s, r);
      }, l = function(s) {
        return o.handleSelectStart(s);
      };
      return n.setAttribute("draggable", "true"), n.addEventListener("dragstart", a), n.addEventListener("selectstart", l), function() {
        o.sourceNodes.delete(r), o.sourceNodeOptions.delete(r), n.removeEventListener("dragstart", a), n.removeEventListener("selectstart", l), n.setAttribute("draggable", "false");
      };
    }
  }, {
    key: "connectDropTarget",
    value: function(r, n) {
      var i = this, o = function(s) {
        return i.handleDragEnter(s, r);
      }, a = function(s) {
        return i.handleDragOver(s, r);
      }, l = function(s) {
        return i.handleDrop(s, r);
      };
      return n.addEventListener("dragenter", o), n.addEventListener("dragover", a), n.addEventListener("drop", l), function() {
        n.removeEventListener("dragenter", o), n.removeEventListener("dragover", a), n.removeEventListener("drop", l);
      };
    }
  }, {
    key: "addEventListeners",
    value: function(r) {
      r.addEventListener && (r.addEventListener("dragstart", this.handleTopDragStart), r.addEventListener("dragstart", this.handleTopDragStartCapture, !0), r.addEventListener("dragend", this.handleTopDragEndCapture, !0), r.addEventListener("dragenter", this.handleTopDragEnter), r.addEventListener("dragenter", this.handleTopDragEnterCapture, !0), r.addEventListener("dragleave", this.handleTopDragLeaveCapture, !0), r.addEventListener("dragover", this.handleTopDragOver), r.addEventListener("dragover", this.handleTopDragOverCapture, !0), r.addEventListener("drop", this.handleTopDrop), r.addEventListener("drop", this.handleTopDropCapture, !0));
    }
  }, {
    key: "removeEventListeners",
    value: function(r) {
      r.removeEventListener && (r.removeEventListener("dragstart", this.handleTopDragStart), r.removeEventListener("dragstart", this.handleTopDragStartCapture, !0), r.removeEventListener("dragend", this.handleTopDragEndCapture, !0), r.removeEventListener("dragenter", this.handleTopDragEnter), r.removeEventListener("dragenter", this.handleTopDragEnterCapture, !0), r.removeEventListener("dragleave", this.handleTopDragLeaveCapture, !0), r.removeEventListener("dragover", this.handleTopDragOver), r.removeEventListener("dragover", this.handleTopDragOverCapture, !0), r.removeEventListener("drop", this.handleTopDrop), r.removeEventListener("drop", this.handleTopDropCapture, !0));
    }
  }, {
    key: "getCurrentSourceNodeOptions",
    value: function() {
      var r = this.monitor.getSourceId(), n = this.sourceNodeOptions.get(r);
      return Cf({
        dropEffect: this.altKeyPressed ? "copy" : "move"
      }, n || {});
    }
  }, {
    key: "getCurrentDropEffect",
    value: function() {
      return this.isDraggingNativeItem() ? "copy" : this.getCurrentSourceNodeOptions().dropEffect;
    }
  }, {
    key: "getCurrentSourcePreviewNodeOptions",
    value: function() {
      var r = this.monitor.getSourceId(), n = this.sourcePreviewNodeOptions.get(r);
      return Cf({
        anchorX: 0.5,
        anchorY: 0.5,
        captureDraggingState: !1
      }, n || {});
    }
  }, {
    key: "isDraggingNativeItem",
    value: function() {
      var r = this.monitor.getItemType();
      return Object.keys(wf).some(function(n) {
        return wf[n] === r;
      });
    }
  }, {
    key: "beginDragNativeItem",
    value: function(r, n) {
      this.clearCurrentDragSourceNode(), this.currentNativeSource = kw(r, n), this.currentNativeHandle = this.registry.addSource(r, this.currentNativeSource), this.actions.beginDrag([this.currentNativeHandle]);
    }
  }, {
    key: "setCurrentDragSourceNode",
    value: function(r) {
      var n = this;
      this.clearCurrentDragSourceNode(), this.currentDragSourceNode = r;
      var i = 1e3;
      this.mouseMoveTimeoutTimer = setTimeout(function() {
        var o;
        return (o = n.rootElement) === null || o === void 0 ? void 0 : o.addEventListener("mousemove", n.endDragIfSourceWasRemovedFromDOM, !0);
      }, i);
    }
  }, {
    key: "clearCurrentDragSourceNode",
    value: function() {
      if (this.currentDragSourceNode) {
        if (this.currentDragSourceNode = null, this.rootElement) {
          var r;
          (r = this.window) === null || r === void 0 || r.clearTimeout(this.mouseMoveTimeoutTimer || void 0), this.rootElement.removeEventListener("mousemove", this.endDragIfSourceWasRemovedFromDOM, !0);
        }
        return this.mouseMoveTimeoutTimer = null, !0;
      }
      return !1;
    }
  }, {
    key: "handleDragStart",
    value: function(r, n) {
      r.defaultPrevented || (this.dragStartSourceIds || (this.dragStartSourceIds = []), this.dragStartSourceIds.unshift(n));
    }
  }, {
    key: "handleDragEnter",
    value: function(r, n) {
      this.dragEnterTargetIds.unshift(n);
    }
  }, {
    key: "handleDragOver",
    value: function(r, n) {
      this.dragOverTargetIds === null && (this.dragOverTargetIds = []), this.dragOverTargetIds.unshift(n);
    }
  }, {
    key: "handleDrop",
    value: function(r, n) {
      this.dropTargetIds.unshift(n);
    }
  }]), e;
}(), Bw = function(t, r, n) {
  return new Fw(t, r, n);
}, Yp = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function r() {
      for (var o = "", a = 0; a < arguments.length; a++) {
        var l = arguments[a];
        l && (o = i(o, n(l)));
      }
      return o;
    }
    function n(o) {
      if (typeof o == "string" || typeof o == "number")
        return o;
      if (typeof o != "object")
        return "";
      if (Array.isArray(o))
        return r.apply(null, o);
      if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]"))
        return o.toString();
      var a = "";
      for (var l in o)
        t.call(o, l) && o[l] && (a = i(a, l));
      return a;
    }
    function i(o, a) {
      return a ? o ? o + " " + a : o + a : o;
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(Yp);
var $w = Yp.exports;
const lt = /* @__PURE__ */ ln($w);
function Xe() {
  return Xe = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Xe.apply(null, arguments);
}
function ar(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function Of(e) {
  return "default" + e.charAt(0).toUpperCase() + e.substr(1);
}
function jw(e) {
  var t = Uw(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function Uw(e, t) {
  if (typeof e != "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function zw(e, t, r) {
  var n = x.useRef(e !== void 0), i = x.useState(t), o = i[0], a = i[1], l = e !== void 0, u = n.current;
  return n.current = l, !l && u && o !== t && a(t), [l ? e : o, x.useCallback(function(s) {
    for (var c = arguments.length, h = new Array(c > 1 ? c - 1 : 0), d = 1; d < c; d++)
      h[d - 1] = arguments[d];
    r && r.apply(void 0, [s].concat(h)), a(s);
  }, [r])];
}
function Gw(e, t) {
  return Object.keys(t).reduce(function(r, n) {
    var i, o = r, a = o[Of(n)], l = o[n], u = ar(o, [Of(n), n].map(jw)), s = t[n], c = zw(l, a, e[s]), h = c[0], d = c[1];
    return Xe({}, u, (i = {}, i[n] = h, i[s] = d, i));
  }, e);
}
function eu(e, t) {
  return eu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, eu(e, t);
}
function Vw(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, eu(e, t);
}
var hs = /* @__PURE__ */ N.createContext({});
hs.Consumer;
hs.Provider;
function ps(e, t) {
  var r = x.useContext(hs);
  return e || r[t] || t;
}
function Ww(e) {
  return e && e.ownerDocument || document;
}
function Xw(e) {
  var t = Ww(e);
  return t && t.defaultView || window;
}
function Qw(e, t) {
  return Xw(e).getComputedStyle(e, t);
}
var Yw = /([A-Z])/g;
function Zw(e) {
  return e.replace(Yw, "-$1").toLowerCase();
}
var Kw = /^ms-/;
function bi(e) {
  return Zw(e).replace(Kw, "-ms-");
}
var qw = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function Jw(e) {
  return !!(e && qw.test(e));
}
function Zp(e, t) {
  var r = "", n = "";
  if (typeof t == "string")
    return e.style.getPropertyValue(bi(t)) || Qw(e).getPropertyValue(bi(t));
  Object.keys(t).forEach(function(i) {
    var o = t[i];
    !o && o !== 0 ? e.style.removeProperty(bi(i)) : Jw(i) ? n += i + "(" + o + ") " : r += bi(i) + ": " + o + ";";
  }), n && (r += "transform: " + n + ";"), e.style.cssText += ";" + r;
}
var Kp = { exports: {} }, e1 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", t1 = e1, r1 = t1;
function qp() {
}
function Jp() {
}
Jp.resetWarningCache = qp;
var n1 = function() {
  function e(n, i, o, a, l, u) {
    if (u !== r1) {
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
  var r = {
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
    checkPropTypes: Jp,
    resetWarningCache: qp
  };
  return r.PropTypes = r, r;
};
Kp.exports = n1();
var i1 = Kp.exports;
const L = /* @__PURE__ */ ln(i1), Df = {
  disabled: !1
}, eg = N.createContext(null);
var o1 = function(t) {
  return t.scrollTop;
}, In = "unmounted", cr = "exited", jt = "entering", fr = "entered", tu = "exiting", Ht = /* @__PURE__ */ function(e) {
  Vw(t, e);
  function t(n, i) {
    var o;
    o = e.call(this, n, i) || this;
    var a = i, l = a && !a.isMounting ? n.enter : n.appear, u;
    return o.appearStatus = null, n.in ? l ? (u = cr, o.appearStatus = jt) : u = fr : n.unmountOnExit || n.mountOnEnter ? u = In : u = cr, o.state = {
      status: u
    }, o.nextCallback = null, o;
  }
  t.getDerivedStateFromProps = function(i, o) {
    var a = i.in;
    return a && o.status === In ? {
      status: cr
    } : null;
  };
  var r = t.prototype;
  return r.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, r.componentDidUpdate = function(i) {
    var o = null;
    if (i !== this.props) {
      var a = this.state.status;
      this.props.in ? a !== jt && a !== fr && (o = jt) : (a === jt || a === fr) && (o = tu);
    }
    this.updateStatus(!1, o);
  }, r.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, r.getTimeouts = function() {
    var i = this.props.timeout, o, a, l;
    return o = a = l = i, i != null && typeof i != "number" && (o = i.exit, a = i.enter, l = i.appear !== void 0 ? i.appear : a), {
      exit: o,
      enter: a,
      appear: l
    };
  }, r.updateStatus = function(i, o) {
    if (i === void 0 && (i = !1), o !== null)
      if (this.cancelNextCallback(), o === jt) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var a = this.props.nodeRef ? this.props.nodeRef.current : _i.findDOMNode(this);
          a && o1(a);
        }
        this.performEnter(i);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === cr && this.setState({
      status: In
    });
  }, r.performEnter = function(i) {
    var o = this, a = this.props.enter, l = this.context ? this.context.isMounting : i, u = this.props.nodeRef ? [l] : [_i.findDOMNode(this), l], s = u[0], c = u[1], h = this.getTimeouts(), d = l ? h.appear : h.enter;
    if (!i && !a || Df.disabled) {
      this.safeSetState({
        status: fr
      }, function() {
        o.props.onEntered(s);
      });
      return;
    }
    this.props.onEnter(s, c), this.safeSetState({
      status: jt
    }, function() {
      o.props.onEntering(s, c), o.onTransitionEnd(d, function() {
        o.safeSetState({
          status: fr
        }, function() {
          o.props.onEntered(s, c);
        });
      });
    });
  }, r.performExit = function() {
    var i = this, o = this.props.exit, a = this.getTimeouts(), l = this.props.nodeRef ? void 0 : _i.findDOMNode(this);
    if (!o || Df.disabled) {
      this.safeSetState({
        status: cr
      }, function() {
        i.props.onExited(l);
      });
      return;
    }
    this.props.onExit(l), this.safeSetState({
      status: tu
    }, function() {
      i.props.onExiting(l), i.onTransitionEnd(a.exit, function() {
        i.safeSetState({
          status: cr
        }, function() {
          i.props.onExited(l);
        });
      });
    });
  }, r.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, r.safeSetState = function(i, o) {
    o = this.setNextCallback(o), this.setState(i, o);
  }, r.setNextCallback = function(i) {
    var o = this, a = !0;
    return this.nextCallback = function(l) {
      a && (a = !1, o.nextCallback = null, i(l));
    }, this.nextCallback.cancel = function() {
      a = !1;
    }, this.nextCallback;
  }, r.onTransitionEnd = function(i, o) {
    this.setNextCallback(o);
    var a = this.props.nodeRef ? this.props.nodeRef.current : _i.findDOMNode(this), l = i == null && !this.props.addEndListener;
    if (!a || l) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var u = this.props.nodeRef ? [this.nextCallback] : [a, this.nextCallback], s = u[0], c = u[1];
      this.props.addEndListener(s, c);
    }
    i != null && setTimeout(this.nextCallback, i);
  }, r.render = function() {
    var i = this.state.status;
    if (i === In)
      return null;
    var o = this.props, a = o.children;
    o.in, o.mountOnEnter, o.unmountOnExit, o.appear, o.enter, o.exit, o.timeout, o.addEndListener, o.onEnter, o.onEntering, o.onEntered, o.onExit, o.onExiting, o.onExited, o.nodeRef;
    var l = ar(o, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ N.createElement(eg.Provider, {
        value: null
      }, typeof a == "function" ? a(i, l) : N.cloneElement(N.Children.only(a), l))
    );
  }, t;
}(N.Component);
Ht.contextType = eg;
Ht.propTypes = {};
function br() {
}
Ht.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: br,
  onEntering: br,
  onEntered: br,
  onExit: br,
  onExiting: br,
  onExited: br
};
Ht.UNMOUNTED = In;
Ht.EXITED = cr;
Ht.ENTERING = jt;
Ht.ENTERED = fr;
Ht.EXITING = tu;
const a1 = !!(typeof window < "u" && window.document && window.document.createElement);
var ru = !1, nu = !1;
try {
  var za = {
    get passive() {
      return ru = !0;
    },
    get once() {
      return nu = ru = !0;
    }
  };
  a1 && (window.addEventListener("test", za, za), window.removeEventListener("test", za, !0));
} catch {
}
function l1(e, t, r, n) {
  if (n && typeof n != "boolean" && !nu) {
    var i = n.once, o = n.capture, a = r;
    !nu && i && (a = r.__once || function l(u) {
      this.removeEventListener(t, l, o), r.call(this, u);
    }, r.__once = a), e.addEventListener(t, a, ru ? n : o);
  }
  e.addEventListener(t, r, n);
}
function u1(e, t, r, n) {
  var i = n && typeof n != "boolean" ? n.capture : n;
  e.removeEventListener(t, r, i), r.__once && e.removeEventListener(t, r.__once, i);
}
function tg(e, t, r, n) {
  return l1(e, t, r, n), function() {
    u1(e, t, r, n);
  };
}
function s1(e, t, r, n) {
  if (n === void 0 && (n = !0), e) {
    var i = document.createEvent("HTMLEvents");
    i.initEvent(t, r, n), e.dispatchEvent(i);
  }
}
function c1(e) {
  var t = Zp(e, "transitionDuration") || "", r = t.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(t) * r;
}
function f1(e, t, r) {
  r === void 0 && (r = 5);
  var n = !1, i = setTimeout(function() {
    n || s1(e, "transitionend", !0);
  }, t + r), o = tg(e, "transitionend", function() {
    n = !0;
  }, {
    once: !0
  });
  return function() {
    clearTimeout(i), o();
  };
}
function d1(e, t, r, n) {
  r == null && (r = c1(e) || 0);
  var i = f1(e, r, n), o = tg(e, "transitionend", t);
  return function() {
    i(), o();
  };
}
function _f(e, t) {
  var r = Zp(e, t) || "", n = r.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(r) * n;
}
function h1(e, t) {
  var r = _f(e, "transitionDuration"), n = _f(e, "transitionDelay"), i = d1(e, function(o) {
    o.target === e && (i(), t(o));
  }, r + n);
}
function p1() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return t.filter(function(n) {
    return n != null;
  }).reduce(function(n, i) {
    if (typeof i != "function")
      throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");
    return n === null ? i : function() {
      for (var a = arguments.length, l = new Array(a), u = 0; u < a; u++)
        l[u] = arguments[u];
      n.apply(this, l), i.apply(this, l);
    };
  }, null);
}
function g1(e) {
  e.offsetHeight;
}
function m1(e) {
  const t = x.useRef(e);
  return x.useEffect(() => {
    t.current = e;
  }, [e]), t;
}
function v1(e) {
  const t = m1(e);
  return x.useCallback(function(...r) {
    return t.current && t.current(...r);
  }, [t]);
}
var y1 = ["className", "children"], Ri, S1 = {
  in: !1,
  timeout: 300,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1
}, E1 = (Ri = {}, Ri[jt] = "show", Ri[fr] = "show", Ri), ra = /* @__PURE__ */ N.forwardRef(function(e, t) {
  var r = e.className, n = e.children, i = ar(e, y1), o = x.useCallback(function(a) {
    g1(a), i.onEnter && i.onEnter(a);
  }, [i]);
  return /* @__PURE__ */ N.createElement(Ht, Xe({
    ref: t,
    addEndListener: h1
  }, i, {
    onEnter: o
  }), function(a, l) {
    return /* @__PURE__ */ N.cloneElement(n, Xe({}, l, {
      className: lt("fade", r, n.props.className, E1[a])
    }));
  });
});
ra.defaultProps = S1;
ra.displayName = "Fade";
var w1 = ["label", "onClick", "className"], x1 = {
  label: L.string.isRequired,
  onClick: L.func
}, T1 = {
  label: "Close"
}, na = /* @__PURE__ */ N.forwardRef(function(e, t) {
  var r = e.label, n = e.onClick, i = e.className, o = ar(e, w1);
  return /* @__PURE__ */ N.createElement("button", Xe({
    ref: t,
    type: "button",
    className: lt("close", i),
    onClick: n
  }, o), /* @__PURE__ */ N.createElement("span", {
    "aria-hidden": "true"
  }, "×"), /* @__PURE__ */ N.createElement("span", {
    className: "sr-only"
  }, r));
});
na.displayName = "CloseButton";
na.propTypes = x1;
na.defaultProps = T1;
const rg = function(e) {
  return /* @__PURE__ */ N.forwardRef(function(t, r) {
    return /* @__PURE__ */ N.createElement("div", Xe({}, t, {
      ref: r,
      className: lt(t.className, e)
    }));
  });
};
var C1 = /-(.)/g;
function O1(e) {
  return e.replace(C1, function(t, r) {
    return r.toUpperCase();
  });
}
var D1 = ["className", "bsPrefix", "as"], _1 = function(t) {
  return t[0].toUpperCase() + O1(t).slice(1);
};
function ng(e, t) {
  var r = t === void 0 ? {} : t, n = r.displayName, i = n === void 0 ? _1(e) : n, o = r.Component, a = r.defaultProps, l = /* @__PURE__ */ N.forwardRef(function(u, s) {
    var c = u.className, h = u.bsPrefix, d = u.as, m = d === void 0 ? o || "div" : d, y = ar(u, D1), v = ps(h, e);
    return /* @__PURE__ */ N.createElement(m, Xe({
      ref: s,
      className: lt(c, v)
    }, y));
  });
  return l.defaultProps = a, l.displayName = i, l;
}
var I1 = ["as", "disabled", "onKeyDown"];
function If(e) {
  return !e || e.trim() === "#";
}
var gs = /* @__PURE__ */ N.forwardRef(function(e, t) {
  var r = e.as, n = r === void 0 ? "a" : r, i = e.disabled, o = e.onKeyDown, a = ar(e, I1), l = function(c) {
    var h = a.href, d = a.onClick;
    if ((i || If(h)) && c.preventDefault(), i) {
      c.stopPropagation();
      return;
    }
    d && d(c);
  }, u = function(c) {
    c.key === " " && (c.preventDefault(), l(c));
  };
  return If(a.href) && (a.role = a.role || "button", a.href = a.href || "#"), i && (a.tabIndex = -1, a["aria-disabled"] = !0), /* @__PURE__ */ N.createElement(n, Xe({
    ref: t
  }, a, {
    onClick: l,
    onKeyDown: p1(u, o)
  }));
});
gs.displayName = "SafeAnchor";
var P1 = ["bsPrefix", "show", "closeLabel", "className", "children", "variant", "onClose", "dismissible", "transition"], ig = rg("h4");
ig.displayName = "DivStyledAsH4";
var k1 = ng("alert-heading", {
  Component: ig
}), N1 = ng("alert-link", {
  Component: gs
}), b1 = {
  show: !0,
  transition: ra,
  closeLabel: "Close alert"
}, _r = /* @__PURE__ */ N.forwardRef(function(e, t) {
  var r = Gw(e, {
    show: "onClose"
  }), n = r.bsPrefix, i = r.show, o = r.closeLabel, a = r.className, l = r.children, u = r.variant, s = r.onClose, c = r.dismissible, h = r.transition, d = ar(r, P1), m = ps(n, "alert"), y = v1(function(p) {
    s && s(!1, p);
  }), v = h === !0 ? ra : h, _ = /* @__PURE__ */ N.createElement("div", Xe({
    role: "alert"
  }, v ? void 0 : d, {
    ref: t,
    className: lt(a, m, u && m + "-" + u, c && m + "-dismissible")
  }), c && /* @__PURE__ */ N.createElement(na, {
    onClick: y,
    label: o
  }), l);
  return v ? /* @__PURE__ */ N.createElement(v, Xe({
    unmountOnExit: !0
  }, d, {
    ref: void 0,
    in: i
  }), _) : i ? _ : null;
});
_r.displayName = "Alert";
_r.defaultProps = b1;
_r.Link = N1;
_r.Heading = k1;
var R1 = ["bsPrefix", "variant", "size", "active", "className", "block", "type", "as"], L1 = {
  variant: "primary",
  active: !1,
  disabled: !1
}, ms = /* @__PURE__ */ N.forwardRef(function(e, t) {
  var r = e.bsPrefix, n = e.variant, i = e.size, o = e.active, a = e.className, l = e.block, u = e.type, s = e.as, c = ar(e, R1), h = ps(r, "btn"), d = lt(a, h, o && "active", n && h + "-" + n, l && h + "-block", i && h + "-" + i);
  if (c.href)
    return /* @__PURE__ */ N.createElement(gs, Xe({}, c, {
      as: s,
      ref: t,
      className: lt(d, c.disabled && "disabled")
    }));
  t && (c.ref = t), u ? c.type = u : s || (c.type = "button");
  var m = s || "button";
  return /* @__PURE__ */ N.createElement(m, Xe({}, c, {
    className: d
  }));
});
ms.displayName = "Button";
ms.defaultProps = L1;
var vs = {};
vs.match = $1;
vs.parse = og;
var M1 = /(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i, A1 = /\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/, H1 = /^(?:(min|max)-)?(.+)/, F1 = /(em|rem|px|cm|mm|in|pt|pc)?$/, B1 = /(dpi|dpcm|dppx)?$/;
function $1(e, t) {
  return og(e).some(function(r) {
    var n = r.inverse, i = r.type === "all" || t.type === r.type;
    if (i && n || !(i || n))
      return !1;
    var o = r.expressions.every(function(a) {
      var l = a.feature, u = a.modifier, s = a.value, c = t[l];
      if (!c)
        return !1;
      switch (l) {
        case "orientation":
        case "scan":
          return c.toLowerCase() === s.toLowerCase();
        case "width":
        case "height":
        case "device-width":
        case "device-height":
          s = Nf(s), c = Nf(c);
          break;
        case "resolution":
          s = kf(s), c = kf(c);
          break;
        case "aspect-ratio":
        case "device-aspect-ratio":
        case /* Deprecated */
        "device-pixel-ratio":
          s = Pf(s), c = Pf(c);
          break;
        case "grid":
        case "color":
        case "color-index":
        case "monochrome":
          s = parseInt(s, 10) || 1, c = parseInt(c, 10) || 0;
          break;
      }
      switch (u) {
        case "min":
          return c >= s;
        case "max":
          return c <= s;
        default:
          return c === s;
      }
    });
    return o && !n || !o && n;
  });
}
function og(e) {
  return e.split(",").map(function(t) {
    t = t.trim();
    var r = t.match(M1), n = r[1], i = r[2], o = r[3] || "", a = {};
    return a.inverse = !!n && n.toLowerCase() === "not", a.type = i ? i.toLowerCase() : "all", o = o.match(/\([^\)]+\)/g) || [], a.expressions = o.map(function(l) {
      var u = l.match(A1), s = u[1].toLowerCase().match(H1);
      return {
        modifier: s[1],
        feature: s[2],
        value: u[2]
      };
    }), a;
  });
}
function Pf(e) {
  var t = Number(e), r;
  return t || (r = e.match(/^(\d+)\s*\/\s*(\d+)$/), t = r[1] / r[2]), t;
}
function kf(e) {
  var t = parseFloat(e), r = String(e).match(B1)[1];
  switch (r) {
    case "dpcm":
      return t / 2.54;
    case "dppx":
      return t * 96;
    default:
      return t;
  }
}
function Nf(e) {
  var t = parseFloat(e), r = String(e).match(F1)[1];
  switch (r) {
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
var j1 = vs.match, bf = typeof window < "u" ? window.matchMedia : null;
function U1(e, t, r) {
  var n = this, i;
  bf && !r && (i = bf.call(window, e)), i ? (this.matches = i.matches, this.media = i.media, i.addListener(l)) : (this.matches = j1(e, t), this.media = e), this.addListener = o, this.removeListener = a, this.dispose = u;
  function o(s) {
    i && i.addListener(s);
  }
  function a(s) {
    i && i.removeListener(s);
  }
  function l(s) {
    n.matches = s.matches, n.media = s.media;
  }
  function u() {
    i && i.removeListener(l);
  }
}
function z1(e, t, r) {
  return new U1(e, t, r);
}
var G1 = z1;
const V1 = /* @__PURE__ */ ln(G1);
var W1 = /[A-Z]/g, X1 = /^ms-/, Ga = {};
function Q1(e) {
  return "-" + e.toLowerCase();
}
function ag(e) {
  if (Ga.hasOwnProperty(e))
    return Ga[e];
  var t = e.replace(W1, Q1);
  return Ga[e] = X1.test(t) ? "-" + t : t;
}
function Y1(e, t) {
  if (e === t)
    return !0;
  if (!e || !t)
    return !1;
  const r = Object.keys(e), n = Object.keys(t), i = r.length;
  if (n.length !== i)
    return !1;
  for (let o = 0; o < i; o++) {
    const a = r[o];
    if (e[a] !== t[a] || !Object.prototype.hasOwnProperty.call(t, a))
      return !1;
  }
  return !0;
}
const Pe = L.oneOfType([L.string, L.number]), lg = {
  all: L.bool,
  grid: L.bool,
  aural: L.bool,
  braille: L.bool,
  handheld: L.bool,
  print: L.bool,
  projection: L.bool,
  screen: L.bool,
  tty: L.bool,
  tv: L.bool,
  embossed: L.bool
}, Z1 = {
  orientation: L.oneOf(["portrait", "landscape"]),
  scan: L.oneOf(["progressive", "interlace"]),
  aspectRatio: L.string,
  deviceAspectRatio: L.string,
  height: Pe,
  deviceHeight: Pe,
  width: Pe,
  deviceWidth: Pe,
  color: L.bool,
  colorIndex: L.bool,
  monochrome: L.bool,
  resolution: Pe,
  type: Object.keys(lg)
}, { type: Ix, ...K1 } = Z1, q1 = {
  minAspectRatio: L.string,
  maxAspectRatio: L.string,
  minDeviceAspectRatio: L.string,
  maxDeviceAspectRatio: L.string,
  minHeight: Pe,
  maxHeight: Pe,
  minDeviceHeight: Pe,
  maxDeviceHeight: Pe,
  minWidth: Pe,
  maxWidth: Pe,
  minDeviceWidth: Pe,
  maxDeviceWidth: Pe,
  minColor: L.number,
  maxColor: L.number,
  minColorIndex: L.number,
  maxColorIndex: L.number,
  minMonochrome: L.number,
  maxMonochrome: L.number,
  minResolution: Pe,
  maxResolution: Pe,
  ...K1
}, J1 = { ...lg, ...q1 };
var ex = {
  all: J1
};
const tx = (e) => `not ${e}`, rx = (e, t) => {
  const r = ag(e);
  return typeof t == "number" && (t = `${t}px`), t === !0 ? r : t === !1 ? tx(r) : `(${r}: ${t})`;
}, nx = (e) => e.join(" and "), ix = (e) => {
  const t = [];
  return Object.keys(ex.all).forEach((r) => {
    const n = e[r];
    n != null && t.push(rx(r, n));
  }), nx(t);
}, ox = x.createContext(void 0), ax = (e) => e.query || ix(e), Rf = (e) => e ? Object.keys(e).reduce((r, n) => (r[ag(n)] = e[n], r), {}) : void 0, ug = () => {
  const e = x.useRef(!1);
  return x.useEffect(() => {
    e.current = !0;
  }, []), e.current;
}, lx = (e) => {
  const t = x.useContext(ox), r = () => Rf(e) || Rf(t), [n, i] = x.useState(r);
  return x.useEffect(() => {
    const o = r();
    Y1(n, o) || i(o);
  }, [e, t]), n;
}, ux = (e) => {
  const t = () => ax(e), [r, n] = x.useState(t);
  return x.useEffect(() => {
    const i = t();
    r !== i && n(i);
  }, [e]), r;
}, sx = (e, t) => {
  const r = () => V1(e, t || {}, !!t), [n, i] = x.useState(r), o = ug();
  return x.useEffect(() => {
    if (o) {
      const a = r();
      return i(a), () => {
        a && a.dispose();
      };
    }
  }, [e, t]), n;
}, cx = (e) => {
  const [t, r] = x.useState(e.matches);
  return x.useEffect(() => {
    const n = (i) => {
      r(i.matches);
    };
    return e.addListener(n), r(e.matches), () => {
      e.removeListener(n);
    };
  }, [e]), t;
}, fx = (e, t, r) => {
  const n = lx(t), i = ux(e);
  if (!i)
    throw new Error("Invalid or missing MediaQuery!");
  const o = sx(i, n), a = cx(o);
  return ug(), x.useEffect(() => {
  }, [a]), x.useEffect(() => () => {
    o && o.dispose();
  }, []), a;
};
let Lf = 0;
const dx = (e = "id") => (Lf += 1, `${e}${Lf}`);
let Pn = /* @__PURE__ */ function(e) {
  return e.MOVED = "MOVED", e.REMOVED = "REMOVED", e.FORMAT = "FORMAT", e.MOVED_AND_FORMAT = "MOVED_AND_FORMAT", e;
}({});
function hx(e, t, r) {
  class n extends N.Component {
    constructor(o) {
      super(o), this.transformProps = this.transformProps.bind(this);
    }
    warn(o) {
    }
    transformProps(o, a) {
      if (r[a] === void 0)
        return o[a] = this.props[a], o;
      const {
        deprType: l,
        newName: u,
        expect: s,
        transform: c,
        message: h
      } = r[a];
      switch (l) {
        case Pn.MOVED:
          this.warn(`${t}: The prop '${a}' has been moved to '${u}'.`), o[u] = this.props[a];
          break;
        case Pn.REMOVED:
          this.warn(`${t}: The prop '${a}' has been removed. '${h}'`);
          break;
        case Pn.FORMAT:
          s(this.props[a]) ? o[a] = this.props[a] : (this.warn(`${t}: The prop '${a}' expects a new format. ${h}`), o[a] = c(this.props[a], this.props));
          break;
        case Pn.MOVED_AND_FORMAT: {
          const d = this.props[a];
          let m = `${t}: The prop '${a}' has been moved to '${u}'`;
          s && !s(d) && (m += " and expects a new format"), m += h ? `. ${h}` : "", this.warn(m), o[u] = c ? c(d, this.props) : d;
          break;
        }
        default:
          o[a] = this.props[a];
          break;
      }
      return o;
    }
    render() {
      const {
        children: o,
        ...a
      } = Object.keys(this.props).reduce(this.transformProps, {});
      return /* @__PURE__ */ N.createElement(e, {
        ...a
      }, this.props.children || o);
    }
  }
  return (
    // eslint-disable-next-line react/static-property-placement
    ws(n, "displayName", `withDeprecatedProps(${t})`), n
  );
}
function ys({
  src: e,
  id: t,
  className: r,
  hidden: n,
  screenReaderText: i,
  svgAttrs: o,
  size: a,
  ...l
}) {
  if (e) {
    const u = o["aria-label"] || o["aria-labelledby"], s = {
      ...o
    };
    return u || (s["aria-label"] = void 0, s["aria-hidden"] = !0), /* @__PURE__ */ N.createElement("span", {
      className: lt("pgn__icon", {
        [`pgn__icon__${a}`]: !!a
      }, r),
      id: t,
      ...l
    }, /* @__PURE__ */ N.createElement(e, {
      role: "img",
      focusable: !1,
      ...s
    }), i && /* @__PURE__ */ N.createElement("span", {
      className: "sr-only"
    }, i));
  }
  return /* @__PURE__ */ N.createElement(N.Fragment, null, /* @__PURE__ */ N.createElement("span", {
    id: t || dx("Icon"),
    className: r,
    "aria-hidden": n
  }), i && /* @__PURE__ */ N.createElement("span", {
    className: "sr-only"
  }, i));
}
ys.propTypes = {
  /**
   * An icon component to render.
   * Example import of a Paragon icon component: `import { Check } from '@openedx/paragon/icons';`
   */
  src: L.elementType,
  /** HTML element attributes to pass through to the underlying svg element */
  svgAttrs: L.shape({
    "aria-label": L.string,
    "aria-labelledby": L.string
  }),
  /**
   * the `id` property of the Icon element, by default this value is generated
   * with the `newId` function with the `prefix` of `Icon`.
   */
  id: L.string,
  /** The size of the icon. */
  size: L.oneOf(["xs", "sm", "md", "lg"]),
  /** A class name that will define what the Icon looks like. */
  className: L.string,
  /**
   * a boolean that determines the value of `aria-hidden` attribute on the Icon span,
   * this value is `true` by default.
   */
  hidden: L.bool,
  /**
   * a string or an element that will be used on a secondary span leveraging the `sr-only` style
   * for screenreader only text, this value is `undefined` by default. This value is recommended for use unless
   * the Icon is being used in a way that is purely decorative or provides no additional context for screen
   * reader users. This field should be thought of the same way an `alt` attribute would be used for `image` tags.
   */
  screenReaderText: L.oneOfType([L.string, L.element])
};
ys.defaultProps = {
  src: null,
  svgAttrs: {},
  id: void 0,
  hidden: !0,
  screenReaderText: void 0,
  size: void 0,
  className: void 0
};
const iu = hx(ys, "Icon", {
  className: {
    deprType: Pn.FORMAT,
    expect: (e) => typeof e == "string",
    transform: (e) => Array.isArray(e) ? e.join(" ") : e,
    message: "It should be a string."
  }
}), px = "576px", gx = {
  sm: px
}, {
  sm: mx
} = gx, vx = {
  extraSmall: {
    maxWidth: parseFloat(mx) || 575.98
  }
}, yx = /* @__PURE__ */ N.forwardRef(({
  children: e,
  iconAfter: t,
  iconBefore: r,
  size: n,
  ...i
}, o) => /* @__PURE__ */ N.createElement(ms, {
  size: n,
  ...i,
  className: lt(i.className),
  ref: o
}, r && /* @__PURE__ */ N.createElement(iu, {
  className: "btn-icon-before",
  size: n,
  src: r
}), e, t && /* @__PURE__ */ N.createElement(iu, {
  className: "btn-icon-after",
  size: n,
  src: t
})));
function ou({
  as: e = "div",
  isStacked: t = !1,
  children: r,
  ...n
}) {
  return /* @__PURE__ */ N.createElement(e, {
    ...n,
    className: lt(n.className, {
      "pgn__action-row": !t,
      "pgn__action-row-stacked": t
    })
  }, r);
}
function Sx() {
  return /* @__PURE__ */ N.createElement("span", {
    className: "pgn__action-row-spacer"
  });
}
ou.Spacer = Sx;
const ia = /* @__PURE__ */ x.forwardRef(({
  children: e,
  icon: t,
  actions: r,
  dismissible: n = !1,
  onClose: i = () => {
  },
  closeLabel: o,
  stacked: a = !1,
  show: l = !0,
  ...u
}, s) => {
  const [c, h] = x.useState(a), d = fx({
    maxWidth: vx.extraSmall.maxWidth
  }), m = "sm";
  x.useEffect(() => {
    h(d ? !0 : a);
  }, [d, a]);
  const y = x.useCallback((v) => {
    const _ = {
      size: m,
      key: v.props.children
    };
    return /* @__PURE__ */ x.cloneElement(v, _);
  }, []);
  return /* @__PURE__ */ N.createElement(_r, {
    ...u,
    className: lt("alert-content", u.className),
    show: l,
    ref: s
  }, t && /* @__PURE__ */ N.createElement(iu, {
    src: t,
    className: "alert-icon"
  }), /* @__PURE__ */ N.createElement("div", {
    className: lt({
      "pgn__alert-message-wrapper": !c,
      "pgn__alert-message-wrapper-stacked": c
    })
  }, /* @__PURE__ */ N.createElement("div", {
    className: "alert-message-content"
  }, e), (n || r && r.length > 0) && /* @__PURE__ */ N.createElement(ou, {
    className: "pgn__alert-actions"
  }, /* @__PURE__ */ N.createElement(ou.Spacer, null), n && /* @__PURE__ */ N.createElement(yx, {
    size: m,
    variant: "tertiary",
    onClick: i
  }, o || /* @__PURE__ */ N.createElement(Pp, {
    id: "pgn.Alert.closeLabel",
    defaultMessage: "Dismiss",
    description: "Label of a close button on Alert component"
  })), r && r.map(y))));
}), sg = rg("h4");
sg.displayName = "DivStyledAsH4";
function Ex({
  as: e = sg,
  bsPrefix: t = "alert-heading",
  ...r
}) {
  return /* @__PURE__ */ N.createElement(_r.Heading, {
    as: e,
    bsPrefix: t,
    ...r
  });
}
function wx({
  as: e = "a",
  bsPrefix: t = "alert-link",
  ...r
}) {
  return /* @__PURE__ */ N.createElement(_r.Link, {
    as: e,
    bsPrefix: t,
    ...r
  });
}
ia.Heading = Ex;
ia.Link = wx;
function xx() {
  const e = "csrftoken", t = document.cookie.split(";");
  for (let n = 0; n < t.length; n++) {
    const i = t[n].trim();
    if (i.startsWith(e + "="))
      return i.substring(e.length + 1);
  }
  const r = document.querySelector('meta[name="csrf-token"]');
  return r ? r.getAttribute("content") || "" : (console.warn("CSRF token not found"), "");
}
async function Mf(e, t, r = {}) {
  const n = e.handlerUrl(e.element, t);
  try {
    const i = await fetch(n, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": xx()
        // ARCHITECTURAL: CSRF protection
      },
      body: JSON.stringify(r)
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
const Ss = "LABEL", cg = ({
  label: e,
  placement: t,
  isCorrect: r,
  disabled: n,
  scale: i = 1
}) => {
  const [{ isDragging: o }, a] = ZE(() => ({
    type: Ss,
    item: { labelId: e.id, label: e.label },
    canDrag: !n,
    collect: (g) => ({
      isDragging: g.isDragging()
    })
  }), [e.id, e.label, n]), l = t ? t.x : e.startX, u = t ? t.y : e.startY, s = !!t, c = () => {
    const g = ["draggable-label"];
    return o && g.push("dragging"), s ? (g.push("placed"), r !== void 0 && g.push(r ? "correct" : "incorrect")) : g.push("unplaced"), n && g.push("disabled"), g.join(" ");
  }, h = l * i, d = u * i, m = e.width * i, y = e.height * i, v = e.type || "normal", _ = Math.min(m, y) / 2, p = () => s ? r === !0 ? "#28a745" : r === !1 ? "#dc3545" : "#ff9800" : "#6c757d", f = () => !s || r === void 0 ? null : /* @__PURE__ */ O.jsx(
    "div",
    {
      className: "correctness-indicator",
      style: {
        position: "absolute",
        top: "-4px",
        right: "-4px",
        width: `${Math.max(16 * i, 12)}px`,
        height: `${Math.max(16 * i, 12)}px`,
        borderRadius: "50%",
        backgroundColor: r ? "#28a745" : "#dc3545",
        color: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: `${Math.max(10 * i, 8)}px`,
        fontWeight: "bold",
        border: "2px solid #ffffff",
        boxShadow: "0 1px 4px rgba(0, 0, 0, 0.2)"
      },
      children: r ? "✓" : "✗"
    }
  );
  if (v === "normal")
    return /* @__PURE__ */ O.jsxs(
      "div",
      {
        ref: a,
        className: c(),
        "data-label-id": e.id,
        "data-type": "label",
        style: {
          position: "absolute",
          // Pixel positioning with scale - center at (x, y) in scaled pixels
          left: `${h}px`,
          top: `${d}px`,
          width: `${m}px`,
          height: `${y}px`,
          // Equal width/height for perfect circle
          // Center the element at the position (skip when in label bank)
          transform: t ? "translate(-50%, -50%)" : "none",
          opacity: o ? 0.5 : 1,
          cursor: n ? "not-allowed" : "grab",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: p(),
          color: "#ffffff",
          borderRadius: `${_}px`,
          // Circular with pixel radius
          border: "2px solid #ffffff",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
          fontWeight: "bold",
          fontSize: `${Math.max(14 * i, 12)}px`,
          userSelect: "none",
          transition: "all 0.2s ease",
          zIndex: o ? 1e3 : s ? 10 : 5
        },
        children: [
          /* @__PURE__ */ O.jsx("div", { className: "label-content", children: e.label }),
          f()
        ]
      }
    );
  if (v === "dot") {
    const g = 15 * i, S = m - g, T = y - g;
    return /* @__PURE__ */ O.jsxs(
      "div",
      {
        ref: a,
        className: c(),
        "data-label-id": e.id,
        "data-type": "label",
        style: {
          position: "absolute",
          // Pixel positioning with scale
          left: `${h}px`,
          top: `${d}px`,
          width: `${m}px`,
          height: `${y}px`,
          transform: t ? "translate(-25%, -25%)" : "none",
          // Offset so dot (at bottom-left) is at (x, y) (skip in bank)
          opacity: o ? 0.5 : 1,
          cursor: n ? "not-allowed" : "grab",
          userSelect: "none",
          zIndex: o ? 1e3 : s ? 10 : 5
        },
        children: [
          /* @__PURE__ */ O.jsx(
            "div",
            {
              style: {
                position: "absolute",
                left: 0,
                bottom: 0,
                width: `${g}px`,
                height: `${g}px`,
                borderRadius: "50%",
                backgroundColor: p(),
                border: "2px solid #ffffff",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)"
              }
            }
          ),
          /* @__PURE__ */ O.jsx(
            "div",
            {
              style: {
                position: "absolute",
                right: 0,
                top: 0,
                width: `${S}px`,
                height: `${T}px`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: p(),
                color: "#ffffff",
                borderRadius: `${Math.max(8 * i, 6)}px`,
                border: "2px solid #ffffff",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
                fontWeight: "bold",
                fontSize: `${Math.max(14 * i, 12)}px`,
                padding: `${Math.max(4 * i, 2)}px ${Math.max(8 * i, 4)}px`
              },
              children: e.label
            }
          ),
          f()
        ]
      }
    );
  }
  if (v === "cross") {
    const g = 12 * i, S = m - g, T = y - g;
    return /* @__PURE__ */ O.jsxs(
      "div",
      {
        ref: a,
        className: c(),
        "data-label-id": e.id,
        "data-type": "label",
        style: {
          position: "absolute",
          // Pixel positioning with scale
          left: `${h}px`,
          top: `${d}px`,
          width: `${m}px`,
          height: `${y}px`,
          transform: t ? "translate(-25%, -25%)" : "none",
          // Offset so cross (at bottom-left) is at (x, y) (skip in bank)
          opacity: o ? 0.5 : 1,
          cursor: n ? "not-allowed" : "grab",
          userSelect: "none",
          zIndex: o ? 1e3 : s ? 10 : 5
        },
        children: [
          /* @__PURE__ */ O.jsxs(
            "svg",
            {
              style: {
                position: "absolute",
                left: 0,
                bottom: 0,
                width: `${g}px`,
                height: `${g}px`,
                filter: "drop-shadow(0 2px 8px rgba(0, 0, 0, 0.15))"
              },
              viewBox: "0 0 20 20",
              preserveAspectRatio: "none",
              children: [
                /* @__PURE__ */ O.jsx(
                  "line",
                  {
                    x1: "0",
                    y1: "0",
                    x2: "20",
                    y2: "20",
                    stroke: p(),
                    strokeWidth: "3",
                    strokeLinecap: "round"
                  }
                ),
                /* @__PURE__ */ O.jsx(
                  "line",
                  {
                    x1: "20",
                    y1: "0",
                    x2: "0",
                    y2: "20",
                    stroke: p(),
                    strokeWidth: "3",
                    strokeLinecap: "round"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ O.jsx(
            "div",
            {
              style: {
                position: "absolute",
                right: 0,
                top: 0,
                width: `${S}px`,
                height: `${T}px`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: p(),
                color: "#ffffff",
                borderRadius: `${Math.max(8 * i, 6)}px`,
                border: "2px solid #ffffff",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
                fontWeight: "bold",
                fontSize: `${Math.max(14 * i, 12)}px`,
                padding: `${Math.max(4 * i, 2)}px ${Math.max(8 * i, 4)}px`,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap"
              },
              children: e.label
            }
          ),
          f()
        ]
      }
    );
  }
  return null;
}, Tx = ({
  zone: e,
  isOccupied: t,
  visible: r = !1,
  scale: n
}) => {
  const i = e.radius * 2 * n, o = () => r ? t ? "rgba(108, 117, 125, 0.2)" : "rgba(0, 123, 255, 0.2)" : "transparent", a = () => r ? t ? "2px solid #6c757d" : "2px dashed #007bff" : "none";
  return /* @__PURE__ */ O.jsx(
    "div",
    {
      className: `drop-zone ${t ? "occupied" : "empty"}`,
      "data-zone-id": e.id,
      "data-correct-answer": e.correctAnswer,
      title: r ? `Zone ${e.id} - ${e.description || "Drop zone"}` : void 0,
      style: {
        position: "absolute",
        // Use pixel coordinates with scale
        left: `${e.x * n}px`,
        top: `${e.y * n}px`,
        width: `${i}px`,
        height: `${i}px`,
        // Equal width/height for perfect circle
        // Offset by half to center (using CSS transform)
        transform: "translate(-50%, -50%)",
        borderRadius: "50%",
        // Circular shape
        backgroundColor: o(),
        border: a(),
        pointerEvents: "none",
        transition: "all 0.2s ease",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: `${Math.max(10 * n, 8)}px`,
        color: r ? "#6c757d" : "transparent",
        zIndex: 1
      },
      children: r && /* @__PURE__ */ O.jsxs(
        "div",
        {
          className: "zone-label",
          style: {
            textAlign: "center",
            fontWeight: "bold",
            userSelect: "none",
            pointerEvents: "none"
          },
          children: [
            e.correctAnswer,
            e.description && /* @__PURE__ */ O.jsx("div", { style: { fontSize: "0.8em", fontWeight: "normal" }, children: e.description })
          ]
        }
      )
    }
  );
}, Cx = ({
  labels: e,
  placements: t,
  onLabelRemove: r,
  disabled: n
}) => {
  const [{ isOver: i }, o] = jp(() => ({
    accept: Ss,
    drop: (s) => {
      r(s.labelId);
    },
    collect: (s) => ({
      isOver: s.isOver()
    })
  }), [r]), a = e.filter((s) => {
    var c;
    return !((c = t[s.id]) != null && c.inZone);
  }), l = {
    normal: a.filter((s) => (s.type || "normal") === "normal"),
    dot: a.filter((s) => s.type === "dot"),
    cross: a.filter((s) => s.type === "cross")
  }, u = {
    normal: "Badges",
    dot: "Dot Markers",
    cross: "Cross Markers"
  };
  return /* @__PURE__ */ O.jsxs(
    "div",
    {
      ref: o,
      className: `label-bank ${i ? "drag-over" : ""}`,
      children: [
        /* @__PURE__ */ O.jsxs("div", { className: "label-bank-header", children: [
          /* @__PURE__ */ O.jsx("h4", { className: "label-bank-title", children: "Available Labels" }),
          /* @__PURE__ */ O.jsx("p", { className: "label-bank-description", children: a.length > 0 ? "Drag these labels onto the image" : "Drop labels here to remove from zones" })
        ] }),
        /* @__PURE__ */ O.jsx("div", { className: "label-bank-items", children: a.length > 0 ? /* @__PURE__ */ O.jsx(O.Fragment, { children: ["normal", "dot", "cross"].map((s) => {
          const c = l[s];
          return c.length === 0 ? null : /* @__PURE__ */ O.jsxs("div", { className: "label-group", children: [
            /* @__PURE__ */ O.jsx("div", { className: "group-header", children: u[s] }),
            /* @__PURE__ */ O.jsx("div", { className: "group-items", children: c.map((h) => /* @__PURE__ */ O.jsx("div", { style: { position: "relative", width: `${h.width}px`, height: `${h.height}px`, overflow: "visible" }, children: /* @__PURE__ */ O.jsx(
              cg,
              {
                label: h,
                placement: void 0,
                disabled: n,
                scale: 1
              }
            ) }, h.id)) })
          ] }, s);
        }) }) : /* @__PURE__ */ O.jsx("div", { className: "label-bank-empty", children: "All labels placed on image" }) })
      ]
    }
  );
}, Ox = ({
  backgroundImageUrl: e,
  backgroundImageWidth: t,
  backgroundImageHeight: r,
  labels: n,
  dropZones: i,
  placements: o,
  snapEnabled: a,
  onLabelDrop: l,
  onLabelRemove: u,
  disabled: s,
  showingAnswer: c = !1,
  showZones: h = !1
}) => {
  const d = x.useRef(null), [m, y] = x.useState(!1), [v, _] = x.useState(null), [p, f] = x.useState(1), [g, S] = x.useState(t), [{ isOver: T }, C] = jp(() => ({
    accept: Ss,
    drop: (E, A) => {
      var Ke;
      const R = d.current;
      if (!R) return;
      const G = A.getSourceClientOffset();
      if (!G) return;
      const fe = n.find((z) => z.id === E.labelId);
      if (!fe) return;
      const _e = fe.type || "normal", de = fe.width * p, Ct = fe.height * p;
      let Ee, Ue;
      if (_e === "normal")
        Ee = G.x + de / 2, Ue = G.y + Ct / 2;
      else if (_e === "dot") {
        const z = 15 * p;
        Ee = G.x + z / 2, Ue = G.y + Ct - z / 2;
      } else if (_e === "cross") {
        const z = 12 * p;
        Ee = G.x + z / 2, Ue = G.y + Ct - z / 2;
      } else
        Ee = G.x + de / 2, Ue = G.y + Ct / 2;
      const I = R.getBoundingClientRect(), b = Ee - I.left, H = Ue - I.top, Q = b / p, re = H / p;
      if (a) {
        for (const z of i)
          if (Math.sqrt(
            Math.pow(Q - z.x, 2) + Math.pow(re - z.y, 2)
          ) <= z.radius) {
            if ((Ke = Object.entries(o).find(
              ([Ir, oe]) => oe.inZone === z.id && Ir !== E.labelId
            )) == null ? void 0 : Ke[0])
              return console.log("Zone occupied:", z.id), { snapped: !1, occupied: !0, zoneId: z.id };
            let Dt = z.x, hn = z.y;
            if (_e === "dot" || _e === "cross") {
              const Ir = _e === "dot" ? 15 : 12;
              Dt = z.x + fe.width * 0.25 - Ir / 2, hn = z.y - fe.height * 0.75 + Ir / 2;
            }
            return console.log("Label snapped to zone:", z.id), l(E.labelId, Dt, hn, z.id), { snapped: !0, zoneId: z.id };
          }
      }
      return { snapped: !1 };
    },
    collect: (E) => ({
      isOver: E.isOver({ shallow: !0 })
    })
  }), [p, i, a, l, t, r, o, n]);
  x.useEffect(() => {
    if (y(!1), _(null), !e || e.trim() === "") {
      _("No background image configured. Please configure an image in Studio.");
      return;
    }
    const E = new Image();
    E.onload = () => {
      y(!0), _(null);
      const A = E.naturalWidth;
      if (S(A), d.current) {
        const G = d.current.clientWidth / A;
        f(G);
      }
    }, E.onerror = () => {
      console.error("Failed to load background image:", e), _(`Failed to load image: ${e}. Please check the image URL in Studio.`);
    }, E.src = e;
  }, [e]), x.useEffect(() => {
    const E = () => {
      if (d.current) {
        const R = d.current.clientWidth / g;
        f(R);
      }
    };
    return window.addEventListener("resize", E), () => window.removeEventListener("resize", E);
  }, [g]);
  const D = /* @__PURE__ */ new Set();
  return Object.values(o).forEach((E) => {
    E.inZone && D.add(E.inZone);
  }), v ? /* @__PURE__ */ O.jsxs(ia, { variant: "danger", className: "mb-3", children: [
    /* @__PURE__ */ O.jsx("strong", { children: "Image Loading Error:" }),
    " ",
    v
  ] }) : m ? /* @__PURE__ */ O.jsxs("div", { className: "assessment-canvas-container", children: [
    /* @__PURE__ */ O.jsx(
      Cx,
      {
        labels: n,
        placements: o,
        onLabelRemove: u,
        disabled: s || c
      }
    ),
    /* @__PURE__ */ O.jsxs(
      "div",
      {
        ref: (E) => {
          d.current = E, C(E);
        },
        className: "assessment-canvas",
        style: {
          position: "relative",
          width: "100%",
          maxWidth: `${t}px`,
          margin: "0 auto"
        },
        children: [
          /* @__PURE__ */ O.jsx(
            "img",
            {
              src: e,
              alt: "Assessment background",
              className: "canvas-background-image",
              style: {
                width: "100%",
                height: "auto",
                display: "block",
                userSelect: "none",
                pointerEvents: "none"
              }
            }
          ),
          /* @__PURE__ */ O.jsx(
            "div",
            {
              className: "drop-zones-layer",
              style: {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                pointerEvents: s || c ? "none" : "auto"
              },
              children: i.map((E) => /* @__PURE__ */ O.jsx(
                Tx,
                {
                  zone: E,
                  isOccupied: D.has(E.id),
                  visible: E.visible ?? h,
                  scale: p
                },
                E.id
              ))
            }
          ),
          /* @__PURE__ */ O.jsx(
            "div",
            {
              className: "labels-layer",
              style: {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                pointerEvents: s || c ? "none" : "auto"
              },
              children: n.map((E) => {
                const A = o[E.id];
                return A != null && A.inZone ? /* @__PURE__ */ O.jsx(
                  cg,
                  {
                    label: E,
                    placement: A,
                    isCorrect: A == null ? void 0 : A.correct,
                    disabled: s || c,
                    scale: p
                  },
                  E.id
                ) : null;
              })
            }
          )
        ]
      }
    )
  ] }) : /* @__PURE__ */ O.jsx("div", { className: "assessment-canvas-loading", children: /* @__PURE__ */ O.jsx("div", { className: "spinner-border", role: "status", children: /* @__PURE__ */ O.jsx("span", { className: "sr-only", children: "Loading image..." }) }) });
}, Dx = ({
  runtime: e,
  displayName: t,
  questionText: r,
  backgroundImageUrl: n,
  backgroundImageWidth: i,
  backgroundImageHeight: o,
  labels: a,
  dropZones: l,
  studentPlacements: u,
  currentScore: s,
  maxScore: c,
  attemptsRemaining: h,
  feedbackMode: d,
  isGraded: m,
  snapEnabled: y,
  showCorrectOnSubmit: v,
  hasSubmitted: _,
  lastSubmissionResult: p
}) => {
  const [f, g] = x.useState(u), [S, T] = x.useState({}), [C, D] = x.useState(s), [E, A] = x.useState(!1), [R, G] = x.useState(null), [fe, _e] = x.useState(_), [de, Ct] = x.useState(p || null), [Ee, Ue] = x.useState(!1), I = x.useCallback(async (oe, le, he, we) => {
    if (d === "on_submit") {
      g((ue) => ({
        ...ue,
        [oe]: {
          labelId: oe,
          x: le,
          y: he,
          inZone: we,
          correct: void 0
          // No feedback until submission
        }
      }));
      return;
    }
    A(!0);
    try {
      const ue = await Mf(
        e,
        "submit_placement",
        {
          labelId: oe,
          position: { x: le, y: he },
          zoneId: we
        }
      );
      ue.success && (g((si) => ({
        ...si,
        [oe]: {
          labelId: oe,
          x: le,
          y: he,
          inZone: we,
          correct: ue.correct
          // Server returns correctness
        }
      })), D(ue.score));
    } catch (ue) {
      console.error("Error submitting label placement:", ue), G("Failed to validate placement. Please try again.");
    } finally {
      A(!1);
    }
  }, [e, d]), b = x.useCallback((oe) => {
    g((le) => {
      const he = { ...le };
      return delete he[oe], he;
    });
  }, []), H = x.useCallback(async () => {
    A(!0), G(null);
    try {
      const oe = Object.entries(f).reduce((he, [we, ue]) => (he[we] = {
        position: { x: ue.x, y: ue.y },
        zoneId: ue.inZone || null
      }, he), {}), le = await Mf(e, "submit_all_placements", {
        placements: oe
      });
      if (le.success) {
        console.log("Submission completed - Score:", le.score, "/", le.maxScore);
        const he = { ...f };
        Object.entries(le.results).forEach(([we, ue]) => {
          he[we] && (he[we].correct = ue.correct, he[we].inZone = ue.zone_id || void 0);
        }), g(he), D(le.score), _e(!0), Ct(le);
      } else
        G("Failed to submit placements");
    } catch (oe) {
      console.error("Submission error:", oe), G("An error occurred. Please try again.");
    } finally {
      A(!1);
    }
  }, [e, f]), Q = x.useCallback(() => {
    g({}), _e(!1), Ct(null), Ue(!1), G(null);
  }, []), re = x.useCallback(() => {
    if (Ee)
      g(S), Ue(!1);
    else {
      if (!de) return;
      T(f);
      const oe = {};
      a.forEach((le) => {
        const he = de.results[le.id];
        if (he && he.expected_zone) {
          const we = l.find((ue) => ue.id === he.expected_zone);
          if (we) {
            let ue = we.x, si = we.y;
            const oa = le.type || "normal";
            if (oa === "dot" || oa === "cross") {
              const Es = oa === "dot" ? 15 : 12;
              ue = we.x + le.width * 0.25 - Es / 2, si = we.y - le.height * 0.75 + Es / 2;
            }
            oe[le.id] = {
              labelId: le.id,
              x: ue,
              y: si,
              inZone: we.id,
              correct: !0
            };
          }
        }
      }), g(oe), Ue(!0);
    }
  }, [Ee, de, f, a, l, S]), Ke = a.length, z = Object.keys(f).length, Dt = new Set(Object.values(f).map((oe) => oe.inZone).filter(Boolean)).size === l.length && !fe && h !== 0, hn = Object.values(f).filter((oe) => oe.correct === !0).length, Ir = hn === Ke && Ke > 0 && z === Ke;
  return /* @__PURE__ */ O.jsx(VS, { backend: Bw, children: /* @__PURE__ */ O.jsxs("div", { className: "image-annotation-student-view", children: [
    /* @__PURE__ */ O.jsxs("div", { className: "problem-header", children: [
      /* @__PURE__ */ O.jsx("h3", { className: "problem-title", children: t }),
      /* @__PURE__ */ O.jsxs("div", { className: "problem-points", children: [
        c.toFixed(c % 1 === 0 ? 0 : 1),
        "/",
        c.toFixed(c % 1 === 0 ? 0 : 1),
        " point",
        c !== 1 ? "s" : "",
        " (",
        m ? "graded" : "ungraded",
        ")"
      ] })
    ] }),
    /* @__PURE__ */ O.jsx("div", { className: "problem-question", dangerouslySetInnerHTML: { __html: r } }),
    (R || h === 0) && /* @__PURE__ */ O.jsx(ia, { variant: "danger", className: "mb-3", children: R || "Maximum attempts exceeded" }),
    d === "immediate" && /* @__PURE__ */ O.jsxs("div", { className: `score-display ${Ir ? "score-correct" : "score-incorrect"}`, children: [
      /* @__PURE__ */ O.jsx("strong", { children: "Current Score:" }),
      " ",
      C.toFixed(2),
      " / ",
      c.toFixed(2),
      " ",
      "(",
      (C / c * 100).toFixed(0),
      "% - ",
      hn,
      " of ",
      Ke,
      " correct)"
    ] }),
    fe && /* @__PURE__ */ O.jsxs("div", { className: "score-display", children: [
      /* @__PURE__ */ O.jsx("strong", { children: "Score:" }),
      " ",
      C.toFixed(2),
      " / ",
      c.toFixed(2),
      "(",
      (C / c * 100).toFixed(0),
      "%)"
    ] }),
    /* @__PURE__ */ O.jsx(
      Ox,
      {
        backgroundImageUrl: n,
        backgroundImageWidth: i,
        backgroundImageHeight: o,
        labels: a,
        dropZones: l,
        placements: f,
        snapEnabled: y,
        onLabelDrop: I,
        onLabelRemove: b,
        disabled: E || d === "on_submit" && fe,
        showingAnswer: Ee,
        showZones: !0
      }
    ),
    d === "on_submit" && /* @__PURE__ */ O.jsxs("div", { className: "action", children: [
      fe && /* @__PURE__ */ O.jsxs("div", { className: "problem-action-buttons-wrapper", children: [
        /* @__PURE__ */ O.jsx("span", { className: "problem-action-button-wrapper", children: /* @__PURE__ */ O.jsx(
          "button",
          {
            type: "button",
            className: "reset problem-action-btn btn-link btn-small",
            onClick: Q,
            disabled: E,
            "aria-label": "Reset problem",
            children: "Reset"
          }
        ) }),
        v && /* @__PURE__ */ O.jsx("span", { className: "problem-action-button-wrapper", children: /* @__PURE__ */ O.jsx(
          "button",
          {
            type: "button",
            className: "show problem-action-btn btn-link btn-small",
            onClick: re,
            disabled: E,
            "aria-label": Ee ? "Hide correct answers" : "Show correct answers",
            children: Ee ? "Hide Answer" : "Show Answer"
          }
        ) })
      ] }),
      /* @__PURE__ */ O.jsxs("div", { className: "submit-attempt-container", children: [
        /* @__PURE__ */ O.jsx(
          "button",
          {
            type: "button",
            className: "submit btn-brand",
            onClick: H,
            disabled: E || !Dt,
            "aria-label": "Submit answer",
            children: E ? "Submitting..." : "Submit"
          }
        ),
        fe && de && /* @__PURE__ */ O.jsxs("div", { className: "submission-feedback", children: [
          /* @__PURE__ */ O.jsxs("div", { className: `notification notification-${de.allCorrect ? "correct" : "incorrect"}`, children: [
            /* @__PURE__ */ O.jsx("div", { className: "notification-icon", children: de.allCorrect ? "✓" : "✗" }),
            /* @__PURE__ */ O.jsx("div", { className: "notification-content", children: /* @__PURE__ */ O.jsxs("p", { children: [
              de.allCorrect ? "Correct" : "Incorrect",
              "(",
              de.score.toFixed(2),
              "/",
              de.maxScore.toFixed(2),
              " point",
              de.maxScore !== 1 ? "s" : "",
              ")"
            ] }) })
          ] }),
          de.explanation && /* @__PURE__ */ O.jsxs("div", { className: "notification notification-explanation", children: [
            /* @__PURE__ */ O.jsx("div", { className: "notification-icon", children: "📋" }),
            /* @__PURE__ */ O.jsx("div", { className: "notification-content", children: /* @__PURE__ */ O.jsx("div", { dangerouslySetInnerHTML: { __html: de.explanation } }) })
          ] }),
          Ee && /* @__PURE__ */ O.jsxs("div", { className: "notification notification-answer", children: [
            /* @__PURE__ */ O.jsx("div", { className: "notification-icon", children: "ℹ" }),
            /* @__PURE__ */ O.jsx("div", { className: "notification-content", children: /* @__PURE__ */ O.jsx("p", { children: "Correct label positions are highlighted on the image above" }) })
          ] })
        ] })
      ] })
    ] })
  ] }) });
}, Px = (e, t) => {
  Yh(e).render(
    /* @__PURE__ */ O.jsx(x.StrictMode, { children: /* @__PURE__ */ O.jsx(f0, { locale: "en", children: /* @__PURE__ */ O.jsx(
      Dx,
      {
        runtime: t.runtime,
        url: t.url,
        displayName: t.displayName,
        questionText: t.questionText,
        backgroundImageUrl: t.backgroundImageUrl,
        backgroundImageWidth: t.backgroundImageWidth,
        backgroundImageHeight: t.backgroundImageHeight,
        labels: t.labels,
        dropZones: t.dropZones,
        studentPlacements: t.studentPlacements,
        currentScore: t.currentScore,
        maxScore: t.maxScore,
        attemptsRemaining: t.attemptsRemaining,
        feedbackMode: t.feedbackMode,
        isGraded: t.isGraded,
        snapEnabled: t.snapEnabled,
        snapRadius: t.snapRadius,
        showCorrectOnSubmit: t.showCorrectOnSubmit,
        hasSubmitted: t.hasSubmitted,
        lastSubmissionResult: t.lastSubmissionResult
      }
    ) }) })
  );
};
export {
  Px as renderBlock
};
//# sourceMappingURL=student-ui.js.map
