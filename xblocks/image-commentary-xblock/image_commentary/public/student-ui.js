var Rc = Object.defineProperty;
var Ic = (e, t, n) => t in e ? Rc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var bi = (e, t, n) => Ic(e, typeof t != "symbol" ? t + "" : t, n);
function Yo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var fs = { exports: {} }, ul = {}, ds = { exports: {} }, L = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tr = Symbol.for("react.element"), Oc = Symbol.for("react.portal"), Dc = Symbol.for("react.fragment"), Mc = Symbol.for("react.strict_mode"), Fc = Symbol.for("react.profiler"), jc = Symbol.for("react.provider"), $c = Symbol.for("react.context"), Uc = Symbol.for("react.forward_ref"), Bc = Symbol.for("react.suspense"), Hc = Symbol.for("react.memo"), Vc = Symbol.for("react.lazy"), eu = Symbol.iterator;
function Qc(e) {
  return e === null || typeof e != "object" ? null : (e = eu && e[eu] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ps = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, ms = Object.assign, hs = {};
function dn(e, t, n) {
  this.props = e, this.context = t, this.refs = hs, this.updater = n || ps;
}
dn.prototype.isReactComponent = {};
dn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
dn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function vs() {
}
vs.prototype = dn.prototype;
function Xo(e, t, n) {
  this.props = e, this.context = t, this.refs = hs, this.updater = n || ps;
}
var Go = Xo.prototype = new vs();
Go.constructor = Xo;
ms(Go, dn.prototype);
Go.isPureReactComponent = !0;
var tu = Array.isArray, ys = Object.prototype.hasOwnProperty, Zo = { current: null }, gs = { key: !0, ref: !0, __self: !0, __source: !0 };
function ws(e, t, n) {
  var r, l = {}, o = null, i = null;
  if (t != null) for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (o = "" + t.key), t) ys.call(t, r) && !gs.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), a = 0; a < u; a++) s[a] = arguments[a + 2];
    l.children = s;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) l[r] === void 0 && (l[r] = u[r]);
  return { $$typeof: tr, type: e, key: o, ref: i, props: l, _owner: Zo.current };
}
function Wc(e, t) {
  return { $$typeof: tr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Jo(e) {
  return typeof e == "object" && e !== null && e.$$typeof === tr;
}
function Kc(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var nu = /\/+/g;
function Nl(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Kc("" + e.key) : t.toString(36);
}
function xr(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else switch (o) {
    case "string":
    case "number":
      i = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case tr:
        case Oc:
          i = !0;
      }
  }
  if (i) return i = e, l = l(i), e = r === "" ? "." + Nl(i, 0) : r, tu(l) ? (n = "", e != null && (n = e.replace(nu, "$&/") + "/"), xr(l, t, n, "", function(a) {
    return a;
  })) : l != null && (Jo(l) && (l = Wc(l, n + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(nu, "$&/") + "/") + e)), t.push(l)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", tu(e)) for (var u = 0; u < e.length; u++) {
    o = e[u];
    var s = r + Nl(o, u);
    i += xr(o, t, n, s, l);
  }
  else if (s = Qc(e), typeof s == "function") for (e = s.call(e), u = 0; !(o = e.next()).done; ) o = o.value, s = r + Nl(o, u++), i += xr(o, t, n, s, l);
  else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function sr(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return xr(e, r, "", "", function(o) {
    return t.call(n, o, l++);
  }), r;
}
function Yc(e) {
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
var fe = { current: null }, Pr = { transition: null }, Xc = { ReactCurrentDispatcher: fe, ReactCurrentBatchConfig: Pr, ReactCurrentOwner: Zo };
function ks() {
  throw Error("act(...) is not supported in production builds of React.");
}
L.Children = { map: sr, forEach: function(e, t, n) {
  sr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return sr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return sr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Jo(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
L.Component = dn;
L.Fragment = Dc;
L.Profiler = Fc;
L.PureComponent = Xo;
L.StrictMode = Mc;
L.Suspense = Bc;
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Xc;
L.act = ks;
L.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = ms({}, e.props), l = e.key, o = e.ref, i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, i = Zo.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (s in t) ys.call(t, s) && !gs.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var a = 0; a < s; a++) u[a] = arguments[a + 2];
    r.children = u;
  }
  return { $$typeof: tr, type: e.type, key: l, ref: o, props: r, _owner: i };
};
L.createContext = function(e) {
  return e = { $$typeof: $c, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: jc, _context: e }, e.Consumer = e;
};
L.createElement = ws;
L.createFactory = function(e) {
  var t = ws.bind(null, e);
  return t.type = e, t;
};
L.createRef = function() {
  return { current: null };
};
L.forwardRef = function(e) {
  return { $$typeof: Uc, render: e };
};
L.isValidElement = Jo;
L.lazy = function(e) {
  return { $$typeof: Vc, _payload: { _status: -1, _result: e }, _init: Yc };
};
L.memo = function(e, t) {
  return { $$typeof: Hc, type: e, compare: t === void 0 ? null : t };
};
L.startTransition = function(e) {
  var t = Pr.transition;
  Pr.transition = {};
  try {
    e();
  } finally {
    Pr.transition = t;
  }
};
L.unstable_act = ks;
L.useCallback = function(e, t) {
  return fe.current.useCallback(e, t);
};
L.useContext = function(e) {
  return fe.current.useContext(e);
};
L.useDebugValue = function() {
};
L.useDeferredValue = function(e) {
  return fe.current.useDeferredValue(e);
};
L.useEffect = function(e, t) {
  return fe.current.useEffect(e, t);
};
L.useId = function() {
  return fe.current.useId();
};
L.useImperativeHandle = function(e, t, n) {
  return fe.current.useImperativeHandle(e, t, n);
};
L.useInsertionEffect = function(e, t) {
  return fe.current.useInsertionEffect(e, t);
};
L.useLayoutEffect = function(e, t) {
  return fe.current.useLayoutEffect(e, t);
};
L.useMemo = function(e, t) {
  return fe.current.useMemo(e, t);
};
L.useReducer = function(e, t, n) {
  return fe.current.useReducer(e, t, n);
};
L.useRef = function(e) {
  return fe.current.useRef(e);
};
L.useState = function(e) {
  return fe.current.useState(e);
};
L.useSyncExternalStore = function(e, t, n) {
  return fe.current.useSyncExternalStore(e, t, n);
};
L.useTransition = function() {
  return fe.current.useTransition();
};
L.version = "18.3.1";
ds.exports = L;
var ae = ds.exports;
const x = /* @__PURE__ */ Yo(ae);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gc = ae, Zc = Symbol.for("react.element"), Jc = Symbol.for("react.fragment"), qc = Object.prototype.hasOwnProperty, bc = Gc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, ef = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ss(e, t, n) {
  var r, l = {}, o = null, i = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t) qc.call(t, r) && !ef.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: Zc, type: e, key: o, ref: i, props: l, _owner: bc.current };
}
ul.Fragment = Jc;
ul.jsx = Ss;
ul.jsxs = Ss;
fs.exports = ul;
var oe = fs.exports, Es = { exports: {} }, Ee = {}, _s = { exports: {} }, Cs = {};
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
  function t(N, T) {
    var z = N.length;
    N.push(T);
    e: for (; 0 < z; ) {
      var W = z - 1 >>> 1, Z = N[W];
      if (0 < l(Z, T)) N[W] = T, N[z] = Z, z = W;
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var T = N[0], z = N.pop();
    if (z !== T) {
      N[0] = z;
      e: for (var W = 0, Z = N.length, ir = Z >>> 1; W < ir; ) {
        var kt = 2 * (W + 1) - 1, Pl = N[kt], St = kt + 1, ur = N[St];
        if (0 > l(Pl, z)) St < Z && 0 > l(ur, Pl) ? (N[W] = ur, N[St] = z, W = St) : (N[W] = Pl, N[kt] = z, W = kt);
        else if (St < Z && 0 > l(ur, z)) N[W] = ur, N[St] = z, W = St;
        else break e;
      }
    }
    return T;
  }
  function l(N, T) {
    var z = N.sortIndex - T.sortIndex;
    return z !== 0 ? z : N.id - T.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function() {
      return o.now();
    };
  } else {
    var i = Date, u = i.now();
    e.unstable_now = function() {
      return i.now() - u;
    };
  }
  var s = [], a = [], h = 1, m = null, p = 3, g = !1, w = !1, k = !1, D = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(N) {
    for (var T = n(a); T !== null; ) {
      if (T.callback === null) r(a);
      else if (T.startTime <= N) r(a), T.sortIndex = T.expirationTime, t(s, T);
      else break;
      T = n(a);
    }
  }
  function v(N) {
    if (k = !1, d(N), !w) if (n(s) !== null) w = !0, Cl(E);
    else {
      var T = n(a);
      T !== null && xl(v, T.startTime - N);
    }
  }
  function E(N, T) {
    w = !1, k && (k = !1, f(A), A = -1), g = !0;
    var z = p;
    try {
      for (d(T), m = n(s); m !== null && (!(m.expirationTime > T) || N && !ze()); ) {
        var W = m.callback;
        if (typeof W == "function") {
          m.callback = null, p = m.priorityLevel;
          var Z = W(m.expirationTime <= T);
          T = e.unstable_now(), typeof Z == "function" ? m.callback = Z : m === n(s) && r(s), d(T);
        } else r(s);
        m = n(s);
      }
      if (m !== null) var ir = !0;
      else {
        var kt = n(a);
        kt !== null && xl(v, kt.startTime - T), ir = !1;
      }
      return ir;
    } finally {
      m = null, p = z, g = !1;
    }
  }
  var _ = !1, P = null, A = -1, F = 5, R = -1;
  function ze() {
    return !(e.unstable_now() - R < F);
  }
  function hn() {
    if (P !== null) {
      var N = e.unstable_now();
      R = N;
      var T = !0;
      try {
        T = P(!0, N);
      } finally {
        T ? vn() : (_ = !1, P = null);
      }
    } else _ = !1;
  }
  var vn;
  if (typeof c == "function") vn = function() {
    c(hn);
  };
  else if (typeof MessageChannel < "u") {
    var qi = new MessageChannel(), Lc = qi.port2;
    qi.port1.onmessage = hn, vn = function() {
      Lc.postMessage(null);
    };
  } else vn = function() {
    D(hn, 0);
  };
  function Cl(N) {
    P = N, _ || (_ = !0, vn());
  }
  function xl(N, T) {
    A = D(function() {
      N(e.unstable_now());
    }, T);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(N) {
    N.callback = null;
  }, e.unstable_continueExecution = function() {
    w || g || (w = !0, Cl(E));
  }, e.unstable_forceFrameRate = function(N) {
    0 > N || 125 < N ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : F = 0 < N ? Math.floor(1e3 / N) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return p;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(s);
  }, e.unstable_next = function(N) {
    switch (p) {
      case 1:
      case 2:
      case 3:
        var T = 3;
        break;
      default:
        T = p;
    }
    var z = p;
    p = T;
    try {
      return N();
    } finally {
      p = z;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(N, T) {
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
    var z = p;
    p = N;
    try {
      return T();
    } finally {
      p = z;
    }
  }, e.unstable_scheduleCallback = function(N, T, z) {
    var W = e.unstable_now();
    switch (typeof z == "object" && z !== null ? (z = z.delay, z = typeof z == "number" && 0 < z ? W + z : W) : z = W, N) {
      case 1:
        var Z = -1;
        break;
      case 2:
        Z = 250;
        break;
      case 5:
        Z = 1073741823;
        break;
      case 4:
        Z = 1e4;
        break;
      default:
        Z = 5e3;
    }
    return Z = z + Z, N = { id: h++, callback: T, priorityLevel: N, startTime: z, expirationTime: Z, sortIndex: -1 }, z > W ? (N.sortIndex = z, t(a, N), n(s) === null && N === n(a) && (k ? (f(A), A = -1) : k = !0, xl(v, z - W))) : (N.sortIndex = Z, t(s, N), w || g || (w = !0, Cl(E))), N;
  }, e.unstable_shouldYield = ze, e.unstable_wrapCallback = function(N) {
    var T = p;
    return function() {
      var z = p;
      p = T;
      try {
        return N.apply(this, arguments);
      } finally {
        p = z;
      }
    };
  };
})(Cs);
_s.exports = Cs;
var tf = _s.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nf = ae, Se = tf;
function y(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var xs = /* @__PURE__ */ new Set(), jn = {};
function Ot(e, t) {
  rn(e, t), rn(e + "Capture", t);
}
function rn(e, t) {
  for (jn[e] = t, e = 0; e < t.length; e++) xs.add(t[e]);
}
var Ge = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), eo = Object.prototype.hasOwnProperty, rf = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ru = {}, lu = {};
function lf(e) {
  return eo.call(lu, e) ? !0 : eo.call(ru, e) ? !1 : rf.test(e) ? lu[e] = !0 : (ru[e] = !0, !1);
}
function of(e, t, n, r) {
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
function uf(e, t, n, r) {
  if (t === null || typeof t > "u" || of(e, t, n, r)) return !0;
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
function de(e, t, n, r, l, o, i) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = i;
}
var ne = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ne[e] = new de(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ne[t] = new de(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ne[e] = new de(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ne[e] = new de(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ne[e] = new de(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ne[e] = new de(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ne[e] = new de(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ne[e] = new de(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ne[e] = new de(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var qo = /[\-:]([a-z])/g;
function bo(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    qo,
    bo
  );
  ne[t] = new de(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(qo, bo);
  ne[t] = new de(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(qo, bo);
  ne[t] = new de(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ne[e] = new de(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ne.xlinkHref = new de("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ne[e] = new de(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ei(e, t, n, r) {
  var l = ne.hasOwnProperty(t) ? ne[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (uf(t, n, l, r) && (n = null), r || l === null ? lf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var be = nf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ar = Symbol.for("react.element"), jt = Symbol.for("react.portal"), $t = Symbol.for("react.fragment"), ti = Symbol.for("react.strict_mode"), to = Symbol.for("react.profiler"), Ps = Symbol.for("react.provider"), Ns = Symbol.for("react.context"), ni = Symbol.for("react.forward_ref"), no = Symbol.for("react.suspense"), ro = Symbol.for("react.suspense_list"), ri = Symbol.for("react.memo"), tt = Symbol.for("react.lazy"), As = Symbol.for("react.offscreen"), ou = Symbol.iterator;
function yn(e) {
  return e === null || typeof e != "object" ? null : (e = ou && e[ou] || e["@@iterator"], typeof e == "function" ? e : null);
}
var V = Object.assign, Al;
function xn(e) {
  if (Al === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Al = t && t[1] || "";
  }
  return `
` + Al + e;
}
var Tl = !1;
function zl(e, t) {
  if (!e || Tl) return "";
  Tl = !0;
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
      } catch (a) {
        var r = a;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (a) {
        r = a;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == "string") {
      for (var l = a.stack.split(`
`), o = r.stack.split(`
`), i = l.length - 1, u = o.length - 1; 1 <= i && 0 <= u && l[i] !== o[u]; ) u--;
      for (; 1 <= i && 0 <= u; i--, u--) if (l[i] !== o[u]) {
        if (i !== 1 || u !== 1)
          do
            if (i--, u--, 0 > u || l[i] !== o[u]) {
              var s = `
` + l[i].replace(" at new ", " at ");
              return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
            }
          while (1 <= i && 0 <= u);
        break;
      }
    }
  } finally {
    Tl = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? xn(e) : "";
}
function sf(e) {
  switch (e.tag) {
    case 5:
      return xn(e.type);
    case 16:
      return xn("Lazy");
    case 13:
      return xn("Suspense");
    case 19:
      return xn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = zl(e.type, !1), e;
    case 11:
      return e = zl(e.type.render, !1), e;
    case 1:
      return e = zl(e.type, !0), e;
    default:
      return "";
  }
}
function lo(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case $t:
      return "Fragment";
    case jt:
      return "Portal";
    case to:
      return "Profiler";
    case ti:
      return "StrictMode";
    case no:
      return "Suspense";
    case ro:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Ns:
      return (e.displayName || "Context") + ".Consumer";
    case Ps:
      return (e._context.displayName || "Context") + ".Provider";
    case ni:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case ri:
      return t = e.displayName || null, t !== null ? t : lo(e.type) || "Memo";
    case tt:
      t = e._payload, e = e._init;
      try {
        return lo(e(t));
      } catch {
      }
  }
  return null;
}
function af(e) {
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
      return lo(t);
    case 8:
      return t === ti ? "StrictMode" : "Mode";
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
function ht(e) {
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
function Ts(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function cf(e) {
  var t = Ts(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var l = n.get, o = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return l.call(this);
    }, set: function(i) {
      r = "" + i, o.call(this, i);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(i) {
      r = "" + i;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function cr(e) {
  e._valueTracker || (e._valueTracker = cf(e));
}
function zs(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Ts(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Fr(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function oo(e, t) {
  var n = t.checked;
  return V({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function iu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = ht(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Ls(e, t) {
  t = t.checked, t != null && ei(e, "checked", t, !1);
}
function io(e, t) {
  Ls(e, t);
  var n = ht(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? uo(e, t.type, n) : t.hasOwnProperty("defaultValue") && uo(e, t.type, ht(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function uu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function uo(e, t, n) {
  (t !== "number" || Fr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Pn = Array.isArray;
function Jt(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + ht(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function so(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(y(91));
  return V({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function su(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(y(92));
      if (Pn(n)) {
        if (1 < n.length) throw Error(y(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: ht(n) };
}
function Rs(e, t) {
  var n = ht(t.value), r = ht(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function au(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Is(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ao(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Is(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var fr, Os = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (fr = fr || document.createElement("div"), fr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = fr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function $n(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Tn = {
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
}, ff = ["Webkit", "ms", "Moz", "O"];
Object.keys(Tn).forEach(function(e) {
  ff.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Tn[t] = Tn[e];
  });
});
function Ds(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Tn.hasOwnProperty(e) && Tn[e] ? ("" + t).trim() : t + "px";
}
function Ms(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = Ds(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var df = V({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function co(e, t) {
  if (t) {
    if (df[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(y(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(y(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(y(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(y(62));
  }
}
function fo(e, t) {
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
var po = null;
function li(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var mo = null, qt = null, bt = null;
function cu(e) {
  if (e = lr(e)) {
    if (typeof mo != "function") throw Error(y(280));
    var t = e.stateNode;
    t && (t = dl(t), mo(e.stateNode, e.type, t));
  }
}
function Fs(e) {
  qt ? bt ? bt.push(e) : bt = [e] : qt = e;
}
function js() {
  if (qt) {
    var e = qt, t = bt;
    if (bt = qt = null, cu(e), t) for (e = 0; e < t.length; e++) cu(t[e]);
  }
}
function $s(e, t) {
  return e(t);
}
function Us() {
}
var Ll = !1;
function Bs(e, t, n) {
  if (Ll) return e(t, n);
  Ll = !0;
  try {
    return $s(e, t, n);
  } finally {
    Ll = !1, (qt !== null || bt !== null) && (Us(), js());
  }
}
function Un(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = dl(n);
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
  if (n && typeof n != "function") throw Error(y(231, t, typeof n));
  return n;
}
var ho = !1;
if (Ge) try {
  var gn = {};
  Object.defineProperty(gn, "passive", { get: function() {
    ho = !0;
  } }), window.addEventListener("test", gn, gn), window.removeEventListener("test", gn, gn);
} catch {
  ho = !1;
}
function pf(e, t, n, r, l, o, i, u, s) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (h) {
    this.onError(h);
  }
}
var zn = !1, jr = null, $r = !1, vo = null, mf = { onError: function(e) {
  zn = !0, jr = e;
} };
function hf(e, t, n, r, l, o, i, u, s) {
  zn = !1, jr = null, pf.apply(mf, arguments);
}
function vf(e, t, n, r, l, o, i, u, s) {
  if (hf.apply(this, arguments), zn) {
    if (zn) {
      var a = jr;
      zn = !1, jr = null;
    } else throw Error(y(198));
    $r || ($r = !0, vo = a);
  }
}
function Dt(e) {
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
function Hs(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function fu(e) {
  if (Dt(e) !== e) throw Error(y(188));
}
function yf(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Dt(e), t === null) throw Error(y(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (r = l.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return fu(l), e;
        if (o === r) return fu(l), t;
        o = o.sibling;
      }
      throw Error(y(188));
    }
    if (n.return !== r.return) n = l, r = o;
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          i = !0, n = l, r = o;
          break;
        }
        if (u === r) {
          i = !0, r = l, n = o;
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            i = !0, n = o, r = l;
            break;
          }
          if (u === r) {
            i = !0, r = o, n = l;
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(y(189));
      }
    }
    if (n.alternate !== r) throw Error(y(190));
  }
  if (n.tag !== 3) throw Error(y(188));
  return n.stateNode.current === n ? e : t;
}
function Vs(e) {
  return e = yf(e), e !== null ? Qs(e) : null;
}
function Qs(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Qs(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ws = Se.unstable_scheduleCallback, du = Se.unstable_cancelCallback, gf = Se.unstable_shouldYield, wf = Se.unstable_requestPaint, K = Se.unstable_now, kf = Se.unstable_getCurrentPriorityLevel, oi = Se.unstable_ImmediatePriority, Ks = Se.unstable_UserBlockingPriority, Ur = Se.unstable_NormalPriority, Sf = Se.unstable_LowPriority, Ys = Se.unstable_IdlePriority, sl = null, He = null;
function Ef(e) {
  if (He && typeof He.onCommitFiberRoot == "function") try {
    He.onCommitFiberRoot(sl, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var De = Math.clz32 ? Math.clz32 : xf, _f = Math.log, Cf = Math.LN2;
function xf(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (_f(e) / Cf | 0) | 0;
}
var dr = 64, pr = 4194304;
function Nn(e) {
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
function Br(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, l = e.suspendedLanes, o = e.pingedLanes, i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? r = Nn(u) : (o &= i, o !== 0 && (r = Nn(o)));
  } else i = n & ~l, i !== 0 ? r = Nn(i) : o !== 0 && (r = Nn(o));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, o = t & -t, l >= o || l === 16 && (o & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - De(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function Pf(e, t) {
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
function Nf(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var i = 31 - De(o), u = 1 << i, s = l[i];
    s === -1 ? (!(u & n) || u & r) && (l[i] = Pf(u, t)) : s <= t && (e.expiredLanes |= u), o &= ~u;
  }
}
function yo(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Xs() {
  var e = dr;
  return dr <<= 1, !(dr & 4194240) && (dr = 64), e;
}
function Rl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function nr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - De(t), e[t] = n;
}
function Af(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - De(n), o = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~o;
  }
}
function ii(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - De(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var O = 0;
function Gs(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Zs, ui, Js, qs, bs, go = !1, mr = [], ut = null, st = null, at = null, Bn = /* @__PURE__ */ new Map(), Hn = /* @__PURE__ */ new Map(), rt = [], Tf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function pu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      ut = null;
      break;
    case "dragenter":
    case "dragleave":
      st = null;
      break;
    case "mouseover":
    case "mouseout":
      at = null;
      break;
    case "pointerover":
    case "pointerout":
      Bn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Hn.delete(t.pointerId);
  }
}
function wn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }, t !== null && (t = lr(t), t !== null && ui(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function zf(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return ut = wn(ut, e, t, n, r, l), !0;
    case "dragenter":
      return st = wn(st, e, t, n, r, l), !0;
    case "mouseover":
      return at = wn(at, e, t, n, r, l), !0;
    case "pointerover":
      var o = l.pointerId;
      return Bn.set(o, wn(Bn.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return o = l.pointerId, Hn.set(o, wn(Hn.get(o) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function ea(e) {
  var t = Ct(e.target);
  if (t !== null) {
    var n = Dt(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Hs(n), t !== null) {
          e.blockedOn = t, bs(e.priority, function() {
            Js(n);
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
function Nr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = wo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      po = r, n.target.dispatchEvent(r), po = null;
    } else return t = lr(n), t !== null && ui(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function mu(e, t, n) {
  Nr(e) && n.delete(t);
}
function Lf() {
  go = !1, ut !== null && Nr(ut) && (ut = null), st !== null && Nr(st) && (st = null), at !== null && Nr(at) && (at = null), Bn.forEach(mu), Hn.forEach(mu);
}
function kn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, go || (go = !0, Se.unstable_scheduleCallback(Se.unstable_NormalPriority, Lf)));
}
function Vn(e) {
  function t(l) {
    return kn(l, e);
  }
  if (0 < mr.length) {
    kn(mr[0], e);
    for (var n = 1; n < mr.length; n++) {
      var r = mr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (ut !== null && kn(ut, e), st !== null && kn(st, e), at !== null && kn(at, e), Bn.forEach(t), Hn.forEach(t), n = 0; n < rt.length; n++) r = rt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < rt.length && (n = rt[0], n.blockedOn === null); ) ea(n), n.blockedOn === null && rt.shift();
}
var en = be.ReactCurrentBatchConfig, Hr = !0;
function Rf(e, t, n, r) {
  var l = O, o = en.transition;
  en.transition = null;
  try {
    O = 1, si(e, t, n, r);
  } finally {
    O = l, en.transition = o;
  }
}
function If(e, t, n, r) {
  var l = O, o = en.transition;
  en.transition = null;
  try {
    O = 4, si(e, t, n, r);
  } finally {
    O = l, en.transition = o;
  }
}
function si(e, t, n, r) {
  if (Hr) {
    var l = wo(e, t, n, r);
    if (l === null) Hl(e, t, r, Vr, n), pu(e, r);
    else if (zf(l, e, t, n, r)) r.stopPropagation();
    else if (pu(e, r), t & 4 && -1 < Tf.indexOf(e)) {
      for (; l !== null; ) {
        var o = lr(l);
        if (o !== null && Zs(o), o = wo(e, t, n, r), o === null && Hl(e, t, r, Vr, n), o === l) break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Hl(e, t, r, null, n);
  }
}
var Vr = null;
function wo(e, t, n, r) {
  if (Vr = null, e = li(r), e = Ct(e), e !== null) if (t = Dt(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Hs(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Vr = e, null;
}
function ta(e) {
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
      switch (kf()) {
        case oi:
          return 1;
        case Ks:
          return 4;
        case Ur:
        case Sf:
          return 16;
        case Ys:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var ot = null, ai = null, Ar = null;
function na() {
  if (Ar) return Ar;
  var e, t = ai, n = t.length, r, l = "value" in ot ? ot.value : ot.textContent, o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++) ;
  return Ar = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Tr(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function hr() {
  return !0;
}
function hu() {
  return !1;
}
function _e(e) {
  function t(n, r, l, o, i) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(o) : o[u]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? hr : hu, this.isPropagationStopped = hu, this;
  }
  return V(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = hr);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = hr);
  }, persist: function() {
  }, isPersistent: hr }), t;
}
var pn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, ci = _e(pn), rr = V({}, pn, { view: 0, detail: 0 }), Of = _e(rr), Il, Ol, Sn, al = V({}, rr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: fi, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Sn && (Sn && e.type === "mousemove" ? (Il = e.screenX - Sn.screenX, Ol = e.screenY - Sn.screenY) : Ol = Il = 0, Sn = e), Il);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Ol;
} }), vu = _e(al), Df = V({}, al, { dataTransfer: 0 }), Mf = _e(Df), Ff = V({}, rr, { relatedTarget: 0 }), Dl = _e(Ff), jf = V({}, pn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), $f = _e(jf), Uf = V({}, pn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Bf = _e(Uf), Hf = V({}, pn, { data: 0 }), yu = _e(Hf), Vf = {
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
}, Qf = {
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
}, Wf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Kf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Wf[e]) ? !!t[e] : !1;
}
function fi() {
  return Kf;
}
var Yf = V({}, rr, { key: function(e) {
  if (e.key) {
    var t = Vf[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Tr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Qf[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: fi, charCode: function(e) {
  return e.type === "keypress" ? Tr(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Tr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Xf = _e(Yf), Gf = V({}, al, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), gu = _e(Gf), Zf = V({}, rr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: fi }), Jf = _e(Zf), qf = V({}, pn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), bf = _e(qf), ed = V({}, al, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), td = _e(ed), nd = [9, 13, 27, 32], di = Ge && "CompositionEvent" in window, Ln = null;
Ge && "documentMode" in document && (Ln = document.documentMode);
var rd = Ge && "TextEvent" in window && !Ln, ra = Ge && (!di || Ln && 8 < Ln && 11 >= Ln), wu = " ", ku = !1;
function la(e, t) {
  switch (e) {
    case "keyup":
      return nd.indexOf(t.keyCode) !== -1;
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
function oa(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Ut = !1;
function ld(e, t) {
  switch (e) {
    case "compositionend":
      return oa(t);
    case "keypress":
      return t.which !== 32 ? null : (ku = !0, wu);
    case "textInput":
      return e = t.data, e === wu && ku ? null : e;
    default:
      return null;
  }
}
function od(e, t) {
  if (Ut) return e === "compositionend" || !di && la(e, t) ? (e = na(), Ar = ai = ot = null, Ut = !1, e) : null;
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
      return ra && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var id = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Su(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!id[e.type] : t === "textarea";
}
function ia(e, t, n, r) {
  Fs(r), t = Qr(t, "onChange"), 0 < t.length && (n = new ci("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Rn = null, Qn = null;
function ud(e) {
  ya(e, 0);
}
function cl(e) {
  var t = Vt(e);
  if (zs(t)) return e;
}
function sd(e, t) {
  if (e === "change") return t;
}
var ua = !1;
if (Ge) {
  var Ml;
  if (Ge) {
    var Fl = "oninput" in document;
    if (!Fl) {
      var Eu = document.createElement("div");
      Eu.setAttribute("oninput", "return;"), Fl = typeof Eu.oninput == "function";
    }
    Ml = Fl;
  } else Ml = !1;
  ua = Ml && (!document.documentMode || 9 < document.documentMode);
}
function _u() {
  Rn && (Rn.detachEvent("onpropertychange", sa), Qn = Rn = null);
}
function sa(e) {
  if (e.propertyName === "value" && cl(Qn)) {
    var t = [];
    ia(t, Qn, e, li(e)), Bs(ud, t);
  }
}
function ad(e, t, n) {
  e === "focusin" ? (_u(), Rn = t, Qn = n, Rn.attachEvent("onpropertychange", sa)) : e === "focusout" && _u();
}
function cd(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return cl(Qn);
}
function fd(e, t) {
  if (e === "click") return cl(t);
}
function dd(e, t) {
  if (e === "input" || e === "change") return cl(t);
}
function pd(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var je = typeof Object.is == "function" ? Object.is : pd;
function Wn(e, t) {
  if (je(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!eo.call(t, l) || !je(e[l], t[l])) return !1;
  }
  return !0;
}
function Cu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function xu(e, t) {
  var n = Cu(e);
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
    n = Cu(n);
  }
}
function aa(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? aa(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function ca() {
  for (var e = window, t = Fr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Fr(e.document);
  }
  return t;
}
function pi(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function md(e) {
  var t = ca(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && aa(n.ownerDocument.documentElement, n)) {
    if (r !== null && pi(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, o = Math.min(r.start, l);
        r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = xu(n, o);
        var i = xu(
          n,
          r
        );
        l && i && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var hd = Ge && "documentMode" in document && 11 >= document.documentMode, Bt = null, ko = null, In = null, So = !1;
function Pu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  So || Bt == null || Bt !== Fr(r) || (r = Bt, "selectionStart" in r && pi(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), In && Wn(In, r) || (In = r, r = Qr(ko, "onSelect"), 0 < r.length && (t = new ci("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Bt)));
}
function vr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Ht = { animationend: vr("Animation", "AnimationEnd"), animationiteration: vr("Animation", "AnimationIteration"), animationstart: vr("Animation", "AnimationStart"), transitionend: vr("Transition", "TransitionEnd") }, jl = {}, fa = {};
Ge && (fa = document.createElement("div").style, "AnimationEvent" in window || (delete Ht.animationend.animation, delete Ht.animationiteration.animation, delete Ht.animationstart.animation), "TransitionEvent" in window || delete Ht.transitionend.transition);
function fl(e) {
  if (jl[e]) return jl[e];
  if (!Ht[e]) return e;
  var t = Ht[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in fa) return jl[e] = t[n];
  return e;
}
var da = fl("animationend"), pa = fl("animationiteration"), ma = fl("animationstart"), ha = fl("transitionend"), va = /* @__PURE__ */ new Map(), Nu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function yt(e, t) {
  va.set(e, t), Ot(t, [e]);
}
for (var $l = 0; $l < Nu.length; $l++) {
  var Ul = Nu[$l], vd = Ul.toLowerCase(), yd = Ul[0].toUpperCase() + Ul.slice(1);
  yt(vd, "on" + yd);
}
yt(da, "onAnimationEnd");
yt(pa, "onAnimationIteration");
yt(ma, "onAnimationStart");
yt("dblclick", "onDoubleClick");
yt("focusin", "onFocus");
yt("focusout", "onBlur");
yt(ha, "onTransitionEnd");
rn("onMouseEnter", ["mouseout", "mouseover"]);
rn("onMouseLeave", ["mouseout", "mouseover"]);
rn("onPointerEnter", ["pointerout", "pointerover"]);
rn("onPointerLeave", ["pointerout", "pointerover"]);
Ot("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Ot("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Ot("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ot("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Ot("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Ot("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var An = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), gd = new Set("cancel close invalid load scroll toggle".split(" ").concat(An));
function Au(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, vf(r, t, void 0, e), e.currentTarget = null;
}
function ya(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t) for (var i = r.length - 1; 0 <= i; i--) {
        var u = r[i], s = u.instance, a = u.currentTarget;
        if (u = u.listener, s !== o && l.isPropagationStopped()) break e;
        Au(l, u, a), o = s;
      }
      else for (i = 0; i < r.length; i++) {
        if (u = r[i], s = u.instance, a = u.currentTarget, u = u.listener, s !== o && l.isPropagationStopped()) break e;
        Au(l, u, a), o = s;
      }
    }
  }
  if ($r) throw e = vo, $r = !1, vo = null, e;
}
function j(e, t) {
  var n = t[Po];
  n === void 0 && (n = t[Po] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (ga(t, e, 2, !1), n.add(r));
}
function Bl(e, t, n) {
  var r = 0;
  t && (r |= 4), ga(n, e, r, t);
}
var yr = "_reactListening" + Math.random().toString(36).slice(2);
function Kn(e) {
  if (!e[yr]) {
    e[yr] = !0, xs.forEach(function(n) {
      n !== "selectionchange" && (gd.has(n) || Bl(n, !1, e), Bl(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[yr] || (t[yr] = !0, Bl("selectionchange", !1, t));
  }
}
function ga(e, t, n, r) {
  switch (ta(t)) {
    case 1:
      var l = Rf;
      break;
    case 4:
      l = If;
      break;
    default:
      l = si;
  }
  n = l.bind(null, t, n, e), l = void 0, !ho || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function Hl(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var i = r.tag;
    if (i === 3 || i === 4) {
      var u = r.stateNode.containerInfo;
      if (u === l || u.nodeType === 8 && u.parentNode === l) break;
      if (i === 4) for (i = r.return; i !== null; ) {
        var s = i.tag;
        if ((s === 3 || s === 4) && (s = i.stateNode.containerInfo, s === l || s.nodeType === 8 && s.parentNode === l)) return;
        i = i.return;
      }
      for (; u !== null; ) {
        if (i = Ct(u), i === null) return;
        if (s = i.tag, s === 5 || s === 6) {
          r = o = i;
          continue e;
        }
        u = u.parentNode;
      }
    }
    r = r.return;
  }
  Bs(function() {
    var a = o, h = li(n), m = [];
    e: {
      var p = va.get(e);
      if (p !== void 0) {
        var g = ci, w = e;
        switch (e) {
          case "keypress":
            if (Tr(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = Xf;
            break;
          case "focusin":
            w = "focus", g = Dl;
            break;
          case "focusout":
            w = "blur", g = Dl;
            break;
          case "beforeblur":
          case "afterblur":
            g = Dl;
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
            g = vu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = Mf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = Jf;
            break;
          case da:
          case pa:
          case ma:
            g = $f;
            break;
          case ha:
            g = bf;
            break;
          case "scroll":
            g = Of;
            break;
          case "wheel":
            g = td;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = Bf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = gu;
        }
        var k = (t & 4) !== 0, D = !k && e === "scroll", f = k ? p !== null ? p + "Capture" : null : p;
        k = [];
        for (var c = a, d; c !== null; ) {
          d = c;
          var v = d.stateNode;
          if (d.tag === 5 && v !== null && (d = v, f !== null && (v = Un(c, f), v != null && k.push(Yn(c, v, d)))), D) break;
          c = c.return;
        }
        0 < k.length && (p = new g(p, w, null, n, h), m.push({ event: p, listeners: k }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (p = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", p && n !== po && (w = n.relatedTarget || n.fromElement) && (Ct(w) || w[Ze])) break e;
        if ((g || p) && (p = h.window === h ? h : (p = h.ownerDocument) ? p.defaultView || p.parentWindow : window, g ? (w = n.relatedTarget || n.toElement, g = a, w = w ? Ct(w) : null, w !== null && (D = Dt(w), w !== D || w.tag !== 5 && w.tag !== 6) && (w = null)) : (g = null, w = a), g !== w)) {
          if (k = vu, v = "onMouseLeave", f = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (k = gu, v = "onPointerLeave", f = "onPointerEnter", c = "pointer"), D = g == null ? p : Vt(g), d = w == null ? p : Vt(w), p = new k(v, c + "leave", g, n, h), p.target = D, p.relatedTarget = d, v = null, Ct(h) === a && (k = new k(f, c + "enter", w, n, h), k.target = d, k.relatedTarget = D, v = k), D = v, g && w) t: {
            for (k = g, f = w, c = 0, d = k; d; d = Ft(d)) c++;
            for (d = 0, v = f; v; v = Ft(v)) d++;
            for (; 0 < c - d; ) k = Ft(k), c--;
            for (; 0 < d - c; ) f = Ft(f), d--;
            for (; c--; ) {
              if (k === f || f !== null && k === f.alternate) break t;
              k = Ft(k), f = Ft(f);
            }
            k = null;
          }
          else k = null;
          g !== null && Tu(m, p, g, k, !1), w !== null && D !== null && Tu(m, D, w, k, !0);
        }
      }
      e: {
        if (p = a ? Vt(a) : window, g = p.nodeName && p.nodeName.toLowerCase(), g === "select" || g === "input" && p.type === "file") var E = sd;
        else if (Su(p)) if (ua) E = dd;
        else {
          E = cd;
          var _ = ad;
        }
        else (g = p.nodeName) && g.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (E = fd);
        if (E && (E = E(e, a))) {
          ia(m, E, n, h);
          break e;
        }
        _ && _(e, p, a), e === "focusout" && (_ = p._wrapperState) && _.controlled && p.type === "number" && uo(p, "number", p.value);
      }
      switch (_ = a ? Vt(a) : window, e) {
        case "focusin":
          (Su(_) || _.contentEditable === "true") && (Bt = _, ko = a, In = null);
          break;
        case "focusout":
          In = ko = Bt = null;
          break;
        case "mousedown":
          So = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          So = !1, Pu(m, n, h);
          break;
        case "selectionchange":
          if (hd) break;
        case "keydown":
        case "keyup":
          Pu(m, n, h);
      }
      var P;
      if (di) e: {
        switch (e) {
          case "compositionstart":
            var A = "onCompositionStart";
            break e;
          case "compositionend":
            A = "onCompositionEnd";
            break e;
          case "compositionupdate":
            A = "onCompositionUpdate";
            break e;
        }
        A = void 0;
      }
      else Ut ? la(e, n) && (A = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (A = "onCompositionStart");
      A && (ra && n.locale !== "ko" && (Ut || A !== "onCompositionStart" ? A === "onCompositionEnd" && Ut && (P = na()) : (ot = h, ai = "value" in ot ? ot.value : ot.textContent, Ut = !0)), _ = Qr(a, A), 0 < _.length && (A = new yu(A, e, null, n, h), m.push({ event: A, listeners: _ }), P ? A.data = P : (P = oa(n), P !== null && (A.data = P)))), (P = rd ? ld(e, n) : od(e, n)) && (a = Qr(a, "onBeforeInput"), 0 < a.length && (h = new yu("onBeforeInput", "beforeinput", null, n, h), m.push({ event: h, listeners: a }), h.data = P));
    }
    ya(m, t);
  });
}
function Yn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Qr(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, o = l.stateNode;
    l.tag === 5 && o !== null && (l = o, o = Un(e, n), o != null && r.unshift(Yn(e, o, l)), o = Un(e, t), o != null && r.push(Yn(e, o, l))), e = e.return;
  }
  return r;
}
function Ft(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Tu(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n, s = u.alternate, a = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 && a !== null && (u = a, l ? (s = Un(n, o), s != null && i.unshift(Yn(n, s, u))) : l || (s = Un(n, o), s != null && i.push(Yn(n, s, u)))), n = n.return;
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var wd = /\r\n?/g, kd = /\u0000|\uFFFD/g;
function zu(e) {
  return (typeof e == "string" ? e : "" + e).replace(wd, `
`).replace(kd, "");
}
function gr(e, t, n) {
  if (t = zu(t), zu(e) !== t && n) throw Error(y(425));
}
function Wr() {
}
var Eo = null, _o = null;
function Co(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var xo = typeof setTimeout == "function" ? setTimeout : void 0, Sd = typeof clearTimeout == "function" ? clearTimeout : void 0, Lu = typeof Promise == "function" ? Promise : void 0, Ed = typeof queueMicrotask == "function" ? queueMicrotask : typeof Lu < "u" ? function(e) {
  return Lu.resolve(null).then(e).catch(_d);
} : xo;
function _d(e) {
  setTimeout(function() {
    throw e;
  });
}
function Vl(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
      if (r === 0) {
        e.removeChild(l), Vn(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  Vn(t);
}
function ct(e) {
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
function Ru(e) {
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
var mn = Math.random().toString(36).slice(2), Be = "__reactFiber$" + mn, Xn = "__reactProps$" + mn, Ze = "__reactContainer$" + mn, Po = "__reactEvents$" + mn, Cd = "__reactListeners$" + mn, xd = "__reactHandles$" + mn;
function Ct(e) {
  var t = e[Be];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Ze] || n[Be]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Ru(e); e !== null; ) {
        if (n = e[Be]) return n;
        e = Ru(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function lr(e) {
  return e = e[Be] || e[Ze], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Vt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(y(33));
}
function dl(e) {
  return e[Xn] || null;
}
var No = [], Qt = -1;
function gt(e) {
  return { current: e };
}
function $(e) {
  0 > Qt || (e.current = No[Qt], No[Qt] = null, Qt--);
}
function M(e, t) {
  Qt++, No[Qt] = e.current, e.current = t;
}
var vt = {}, ue = gt(vt), he = gt(!1), Tt = vt;
function ln(e, t) {
  var n = e.type.contextTypes;
  if (!n) return vt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, o;
  for (o in n) l[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function ve(e) {
  return e = e.childContextTypes, e != null;
}
function Kr() {
  $(he), $(ue);
}
function Iu(e, t, n) {
  if (ue.current !== vt) throw Error(y(168));
  M(ue, t), M(he, n);
}
function wa(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(y(108, af(e) || "Unknown", l));
  return V({}, n, r);
}
function Yr(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || vt, Tt = ue.current, M(ue, e), M(he, he.current), !0;
}
function Ou(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(y(169));
  n ? (e = wa(e, t, Tt), r.__reactInternalMemoizedMergedChildContext = e, $(he), $(ue), M(ue, e)) : $(he), M(he, n);
}
var We = null, pl = !1, Ql = !1;
function ka(e) {
  We === null ? We = [e] : We.push(e);
}
function Pd(e) {
  pl = !0, ka(e);
}
function wt() {
  if (!Ql && We !== null) {
    Ql = !0;
    var e = 0, t = O;
    try {
      var n = We;
      for (O = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      We = null, pl = !1;
    } catch (l) {
      throw We !== null && (We = We.slice(e + 1)), Ws(oi, wt), l;
    } finally {
      O = t, Ql = !1;
    }
  }
  return null;
}
var Wt = [], Kt = 0, Xr = null, Gr = 0, Ce = [], xe = 0, zt = null, Ke = 1, Ye = "";
function Et(e, t) {
  Wt[Kt++] = Gr, Wt[Kt++] = Xr, Xr = e, Gr = t;
}
function Sa(e, t, n) {
  Ce[xe++] = Ke, Ce[xe++] = Ye, Ce[xe++] = zt, zt = e;
  var r = Ke;
  e = Ye;
  var l = 32 - De(r) - 1;
  r &= ~(1 << l), n += 1;
  var o = 32 - De(t) + l;
  if (30 < o) {
    var i = l - l % 5;
    o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, Ke = 1 << 32 - De(t) + l | n << l | r, Ye = o + e;
  } else Ke = 1 << o | n << l | r, Ye = e;
}
function mi(e) {
  e.return !== null && (Et(e, 1), Sa(e, 1, 0));
}
function hi(e) {
  for (; e === Xr; ) Xr = Wt[--Kt], Wt[Kt] = null, Gr = Wt[--Kt], Wt[Kt] = null;
  for (; e === zt; ) zt = Ce[--xe], Ce[xe] = null, Ye = Ce[--xe], Ce[xe] = null, Ke = Ce[--xe], Ce[xe] = null;
}
var ke = null, we = null, U = !1, Oe = null;
function Ea(e, t) {
  var n = Pe(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Du(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, ke = e, we = ct(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, ke = e, we = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = zt !== null ? { id: Ke, overflow: Ye } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Pe(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, ke = e, we = null, !0) : !1;
    default:
      return !1;
  }
}
function Ao(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function To(e) {
  if (U) {
    var t = we;
    if (t) {
      var n = t;
      if (!Du(e, t)) {
        if (Ao(e)) throw Error(y(418));
        t = ct(n.nextSibling);
        var r = ke;
        t && Du(e, t) ? Ea(r, n) : (e.flags = e.flags & -4097 | 2, U = !1, ke = e);
      }
    } else {
      if (Ao(e)) throw Error(y(418));
      e.flags = e.flags & -4097 | 2, U = !1, ke = e;
    }
  }
}
function Mu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  ke = e;
}
function wr(e) {
  if (e !== ke) return !1;
  if (!U) return Mu(e), U = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Co(e.type, e.memoizedProps)), t && (t = we)) {
    if (Ao(e)) throw _a(), Error(y(418));
    for (; t; ) Ea(e, t), t = ct(t.nextSibling);
  }
  if (Mu(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(y(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              we = ct(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      we = null;
    }
  } else we = ke ? ct(e.stateNode.nextSibling) : null;
  return !0;
}
function _a() {
  for (var e = we; e; ) e = ct(e.nextSibling);
}
function on() {
  we = ke = null, U = !1;
}
function vi(e) {
  Oe === null ? Oe = [e] : Oe.push(e);
}
var Nd = be.ReactCurrentBatchConfig;
function En(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(y(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(y(147, e));
      var l = r, o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(i) {
        var u = l.refs;
        i === null ? delete u[o] : u[o] = i;
      }, t._stringRef = o, t);
    }
    if (typeof e != "string") throw Error(y(284));
    if (!n._owner) throw Error(y(290, e));
  }
  return e;
}
function kr(e, t) {
  throw e = Object.prototype.toString.call(t), Error(y(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Fu(e) {
  var t = e._init;
  return t(e._payload);
}
function Ca(e) {
  function t(f, c) {
    if (e) {
      var d = f.deletions;
      d === null ? (f.deletions = [c], f.flags |= 16) : d.push(c);
    }
  }
  function n(f, c) {
    if (!e) return null;
    for (; c !== null; ) t(f, c), c = c.sibling;
    return null;
  }
  function r(f, c) {
    for (f = /* @__PURE__ */ new Map(); c !== null; ) c.key !== null ? f.set(c.key, c) : f.set(c.index, c), c = c.sibling;
    return f;
  }
  function l(f, c) {
    return f = mt(f, c), f.index = 0, f.sibling = null, f;
  }
  function o(f, c, d) {
    return f.index = d, e ? (d = f.alternate, d !== null ? (d = d.index, d < c ? (f.flags |= 2, c) : d) : (f.flags |= 2, c)) : (f.flags |= 1048576, c);
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, c, d, v) {
    return c === null || c.tag !== 6 ? (c = Jl(d, f.mode, v), c.return = f, c) : (c = l(c, d), c.return = f, c);
  }
  function s(f, c, d, v) {
    var E = d.type;
    return E === $t ? h(f, c, d.props.children, v, d.key) : c !== null && (c.elementType === E || typeof E == "object" && E !== null && E.$$typeof === tt && Fu(E) === c.type) ? (v = l(c, d.props), v.ref = En(f, c, d), v.return = f, v) : (v = Mr(d.type, d.key, d.props, null, f.mode, v), v.ref = En(f, c, d), v.return = f, v);
  }
  function a(f, c, d, v) {
    return c === null || c.tag !== 4 || c.stateNode.containerInfo !== d.containerInfo || c.stateNode.implementation !== d.implementation ? (c = ql(d, f.mode, v), c.return = f, c) : (c = l(c, d.children || []), c.return = f, c);
  }
  function h(f, c, d, v, E) {
    return c === null || c.tag !== 7 ? (c = At(d, f.mode, v, E), c.return = f, c) : (c = l(c, d), c.return = f, c);
  }
  function m(f, c, d) {
    if (typeof c == "string" && c !== "" || typeof c == "number") return c = Jl("" + c, f.mode, d), c.return = f, c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case ar:
          return d = Mr(c.type, c.key, c.props, null, f.mode, d), d.ref = En(f, null, c), d.return = f, d;
        case jt:
          return c = ql(c, f.mode, d), c.return = f, c;
        case tt:
          var v = c._init;
          return m(f, v(c._payload), d);
      }
      if (Pn(c) || yn(c)) return c = At(c, f.mode, d, null), c.return = f, c;
      kr(f, c);
    }
    return null;
  }
  function p(f, c, d, v) {
    var E = c !== null ? c.key : null;
    if (typeof d == "string" && d !== "" || typeof d == "number") return E !== null ? null : u(f, c, "" + d, v);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case ar:
          return d.key === E ? s(f, c, d, v) : null;
        case jt:
          return d.key === E ? a(f, c, d, v) : null;
        case tt:
          return E = d._init, p(
            f,
            c,
            E(d._payload),
            v
          );
      }
      if (Pn(d) || yn(d)) return E !== null ? null : h(f, c, d, v, null);
      kr(f, d);
    }
    return null;
  }
  function g(f, c, d, v, E) {
    if (typeof v == "string" && v !== "" || typeof v == "number") return f = f.get(d) || null, u(c, f, "" + v, E);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case ar:
          return f = f.get(v.key === null ? d : v.key) || null, s(c, f, v, E);
        case jt:
          return f = f.get(v.key === null ? d : v.key) || null, a(c, f, v, E);
        case tt:
          var _ = v._init;
          return g(f, c, d, _(v._payload), E);
      }
      if (Pn(v) || yn(v)) return f = f.get(d) || null, h(c, f, v, E, null);
      kr(c, v);
    }
    return null;
  }
  function w(f, c, d, v) {
    for (var E = null, _ = null, P = c, A = c = 0, F = null; P !== null && A < d.length; A++) {
      P.index > A ? (F = P, P = null) : F = P.sibling;
      var R = p(f, P, d[A], v);
      if (R === null) {
        P === null && (P = F);
        break;
      }
      e && P && R.alternate === null && t(f, P), c = o(R, c, A), _ === null ? E = R : _.sibling = R, _ = R, P = F;
    }
    if (A === d.length) return n(f, P), U && Et(f, A), E;
    if (P === null) {
      for (; A < d.length; A++) P = m(f, d[A], v), P !== null && (c = o(P, c, A), _ === null ? E = P : _.sibling = P, _ = P);
      return U && Et(f, A), E;
    }
    for (P = r(f, P); A < d.length; A++) F = g(P, f, A, d[A], v), F !== null && (e && F.alternate !== null && P.delete(F.key === null ? A : F.key), c = o(F, c, A), _ === null ? E = F : _.sibling = F, _ = F);
    return e && P.forEach(function(ze) {
      return t(f, ze);
    }), U && Et(f, A), E;
  }
  function k(f, c, d, v) {
    var E = yn(d);
    if (typeof E != "function") throw Error(y(150));
    if (d = E.call(d), d == null) throw Error(y(151));
    for (var _ = E = null, P = c, A = c = 0, F = null, R = d.next(); P !== null && !R.done; A++, R = d.next()) {
      P.index > A ? (F = P, P = null) : F = P.sibling;
      var ze = p(f, P, R.value, v);
      if (ze === null) {
        P === null && (P = F);
        break;
      }
      e && P && ze.alternate === null && t(f, P), c = o(ze, c, A), _ === null ? E = ze : _.sibling = ze, _ = ze, P = F;
    }
    if (R.done) return n(
      f,
      P
    ), U && Et(f, A), E;
    if (P === null) {
      for (; !R.done; A++, R = d.next()) R = m(f, R.value, v), R !== null && (c = o(R, c, A), _ === null ? E = R : _.sibling = R, _ = R);
      return U && Et(f, A), E;
    }
    for (P = r(f, P); !R.done; A++, R = d.next()) R = g(P, f, A, R.value, v), R !== null && (e && R.alternate !== null && P.delete(R.key === null ? A : R.key), c = o(R, c, A), _ === null ? E = R : _.sibling = R, _ = R);
    return e && P.forEach(function(hn) {
      return t(f, hn);
    }), U && Et(f, A), E;
  }
  function D(f, c, d, v) {
    if (typeof d == "object" && d !== null && d.type === $t && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case ar:
          e: {
            for (var E = d.key, _ = c; _ !== null; ) {
              if (_.key === E) {
                if (E = d.type, E === $t) {
                  if (_.tag === 7) {
                    n(f, _.sibling), c = l(_, d.props.children), c.return = f, f = c;
                    break e;
                  }
                } else if (_.elementType === E || typeof E == "object" && E !== null && E.$$typeof === tt && Fu(E) === _.type) {
                  n(f, _.sibling), c = l(_, d.props), c.ref = En(f, _, d), c.return = f, f = c;
                  break e;
                }
                n(f, _);
                break;
              } else t(f, _);
              _ = _.sibling;
            }
            d.type === $t ? (c = At(d.props.children, f.mode, v, d.key), c.return = f, f = c) : (v = Mr(d.type, d.key, d.props, null, f.mode, v), v.ref = En(f, c, d), v.return = f, f = v);
          }
          return i(f);
        case jt:
          e: {
            for (_ = d.key; c !== null; ) {
              if (c.key === _) if (c.tag === 4 && c.stateNode.containerInfo === d.containerInfo && c.stateNode.implementation === d.implementation) {
                n(f, c.sibling), c = l(c, d.children || []), c.return = f, f = c;
                break e;
              } else {
                n(f, c);
                break;
              }
              else t(f, c);
              c = c.sibling;
            }
            c = ql(d, f.mode, v), c.return = f, f = c;
          }
          return i(f);
        case tt:
          return _ = d._init, D(f, c, _(d._payload), v);
      }
      if (Pn(d)) return w(f, c, d, v);
      if (yn(d)) return k(f, c, d, v);
      kr(f, d);
    }
    return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, c !== null && c.tag === 6 ? (n(f, c.sibling), c = l(c, d), c.return = f, f = c) : (n(f, c), c = Jl(d, f.mode, v), c.return = f, f = c), i(f)) : n(f, c);
  }
  return D;
}
var un = Ca(!0), xa = Ca(!1), Zr = gt(null), Jr = null, Yt = null, yi = null;
function gi() {
  yi = Yt = Jr = null;
}
function wi(e) {
  var t = Zr.current;
  $(Zr), e._currentValue = t;
}
function zo(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function tn(e, t) {
  Jr = e, yi = Yt = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (me = !0), e.firstContext = null);
}
function Ae(e) {
  var t = e._currentValue;
  if (yi !== e) if (e = { context: e, memoizedValue: t, next: null }, Yt === null) {
    if (Jr === null) throw Error(y(308));
    Yt = e, Jr.dependencies = { lanes: 0, firstContext: e };
  } else Yt = Yt.next = e;
  return t;
}
var xt = null;
function ki(e) {
  xt === null ? xt = [e] : xt.push(e);
}
function Pa(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, ki(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Je(e, r);
}
function Je(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var nt = !1;
function Si(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Na(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Xe(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function ft(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, I & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Je(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, ki(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Je(e, n);
}
function zr(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ii(e, n);
  }
}
function ju(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var l = null, o = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var i = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        o === null ? l = o = i : o = o.next = i, n = n.next;
      } while (n !== null);
      o === null ? l = o = t : o = o.next = t;
    } else l = o = t;
    n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function qr(e, t, n, r) {
  var l = e.updateQueue;
  nt = !1;
  var o = l.firstBaseUpdate, i = l.lastBaseUpdate, u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u, a = s.next;
    s.next = null, i === null ? o = a : i.next = a, i = s;
    var h = e.alternate;
    h !== null && (h = h.updateQueue, u = h.lastBaseUpdate, u !== i && (u === null ? h.firstBaseUpdate = a : u.next = a, h.lastBaseUpdate = s));
  }
  if (o !== null) {
    var m = l.baseState;
    i = 0, h = a = s = null, u = o;
    do {
      var p = u.lane, g = u.eventTime;
      if ((r & p) === p) {
        h !== null && (h = h.next = {
          eventTime: g,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var w = e, k = u;
          switch (p = t, g = n, k.tag) {
            case 1:
              if (w = k.payload, typeof w == "function") {
                m = w.call(g, m, p);
                break e;
              }
              m = w;
              break e;
            case 3:
              w.flags = w.flags & -65537 | 128;
            case 0:
              if (w = k.payload, p = typeof w == "function" ? w.call(g, m, p) : w, p == null) break e;
              m = V({}, m, p);
              break e;
            case 2:
              nt = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, p = l.effects, p === null ? l.effects = [u] : p.push(u));
      } else g = { eventTime: g, lane: p, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, h === null ? (a = h = g, s = m) : h = h.next = g, i |= p;
      if (u = u.next, u === null) {
        if (u = l.shared.pending, u === null) break;
        p = u, u = p.next, p.next = null, l.lastBaseUpdate = p, l.shared.pending = null;
      }
    } while (!0);
    if (h === null && (s = m), l.baseState = s, l.firstBaseUpdate = a, l.lastBaseUpdate = h, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        i |= l.lane, l = l.next;
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    Rt |= i, e.lanes = i, e.memoizedState = m;
  }
}
function $u(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(y(191, l));
      l.call(r);
    }
  }
}
var or = {}, Ve = gt(or), Gn = gt(or), Zn = gt(or);
function Pt(e) {
  if (e === or) throw Error(y(174));
  return e;
}
function Ei(e, t) {
  switch (M(Zn, t), M(Gn, e), M(Ve, or), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ao(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ao(t, e);
  }
  $(Ve), M(Ve, t);
}
function sn() {
  $(Ve), $(Gn), $(Zn);
}
function Aa(e) {
  Pt(Zn.current);
  var t = Pt(Ve.current), n = ao(t, e.type);
  t !== n && (M(Gn, e), M(Ve, n));
}
function _i(e) {
  Gn.current === e && ($(Ve), $(Gn));
}
var B = gt(0);
function br(e) {
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
var Wl = [];
function Ci() {
  for (var e = 0; e < Wl.length; e++) Wl[e]._workInProgressVersionPrimary = null;
  Wl.length = 0;
}
var Lr = be.ReactCurrentDispatcher, Kl = be.ReactCurrentBatchConfig, Lt = 0, H = null, X = null, J = null, el = !1, On = !1, Jn = 0, Ad = 0;
function re() {
  throw Error(y(321));
}
function xi(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!je(e[n], t[n])) return !1;
  return !0;
}
function Pi(e, t, n, r, l, o) {
  if (Lt = o, H = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Lr.current = e === null || e.memoizedState === null ? Rd : Id, e = n(r, l), On) {
    o = 0;
    do {
      if (On = !1, Jn = 0, 25 <= o) throw Error(y(301));
      o += 1, J = X = null, t.updateQueue = null, Lr.current = Od, e = n(r, l);
    } while (On);
  }
  if (Lr.current = tl, t = X !== null && X.next !== null, Lt = 0, J = X = H = null, el = !1, t) throw Error(y(300));
  return e;
}
function Ni() {
  var e = Jn !== 0;
  return Jn = 0, e;
}
function Ue() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return J === null ? H.memoizedState = J = e : J = J.next = e, J;
}
function Te() {
  if (X === null) {
    var e = H.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = X.next;
  var t = J === null ? H.memoizedState : J.next;
  if (t !== null) J = t, X = e;
  else {
    if (e === null) throw Error(y(310));
    X = e, e = { memoizedState: X.memoizedState, baseState: X.baseState, baseQueue: X.baseQueue, queue: X.queue, next: null }, J === null ? H.memoizedState = J = e : J = J.next = e;
  }
  return J;
}
function qn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Yl(e) {
  var t = Te(), n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = X, l = r.baseQueue, o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      l.next = o.next, o.next = i;
    }
    r.baseQueue = l = o, n.pending = null;
  }
  if (l !== null) {
    o = l.next, r = r.baseState;
    var u = i = null, s = null, a = o;
    do {
      var h = a.lane;
      if ((Lt & h) === h) s !== null && (s = s.next = { lane: 0, action: a.action, hasEagerState: a.hasEagerState, eagerState: a.eagerState, next: null }), r = a.hasEagerState ? a.eagerState : e(r, a.action);
      else {
        var m = {
          lane: h,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null
        };
        s === null ? (u = s = m, i = r) : s = s.next = m, H.lanes |= h, Rt |= h;
      }
      a = a.next;
    } while (a !== null && a !== o);
    s === null ? i = r : s.next = u, je(r, t.memoizedState) || (me = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = s, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      o = l.lane, H.lanes |= o, Rt |= o, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Xl(e) {
  var t = Te(), n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = l = l.next;
    do
      o = e(o, i.action), i = i.next;
    while (i !== l);
    je(o, t.memoizedState) || (me = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function Ta() {
}
function za(e, t) {
  var n = H, r = Te(), l = t(), o = !je(r.memoizedState, l);
  if (o && (r.memoizedState = l, me = !0), r = r.queue, Ai(Ia.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || J !== null && J.memoizedState.tag & 1) {
    if (n.flags |= 2048, bn(9, Ra.bind(null, n, r, l, t), void 0, null), q === null) throw Error(y(349));
    Lt & 30 || La(n, t, l);
  }
  return l;
}
function La(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = H.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, H.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Ra(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Oa(t) && Da(e);
}
function Ia(e, t, n) {
  return n(function() {
    Oa(t) && Da(e);
  });
}
function Oa(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !je(e, n);
  } catch {
    return !0;
  }
}
function Da(e) {
  var t = Je(e, 1);
  t !== null && Me(t, e, 1, -1);
}
function Uu(e) {
  var t = Ue();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: qn, lastRenderedState: e }, t.queue = e, e = e.dispatch = Ld.bind(null, H, e), [t.memoizedState, e];
}
function bn(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = H.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, H.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Ma() {
  return Te().memoizedState;
}
function Rr(e, t, n, r) {
  var l = Ue();
  H.flags |= e, l.memoizedState = bn(1 | t, n, void 0, r === void 0 ? null : r);
}
function ml(e, t, n, r) {
  var l = Te();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (X !== null) {
    var i = X.memoizedState;
    if (o = i.destroy, r !== null && xi(r, i.deps)) {
      l.memoizedState = bn(t, n, o, r);
      return;
    }
  }
  H.flags |= e, l.memoizedState = bn(1 | t, n, o, r);
}
function Bu(e, t) {
  return Rr(8390656, 8, e, t);
}
function Ai(e, t) {
  return ml(2048, 8, e, t);
}
function Fa(e, t) {
  return ml(4, 2, e, t);
}
function ja(e, t) {
  return ml(4, 4, e, t);
}
function $a(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Ua(e, t, n) {
  return n = n != null ? n.concat([e]) : null, ml(4, 4, $a.bind(null, t, e), n);
}
function Ti() {
}
function Ba(e, t) {
  var n = Te();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && xi(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Ha(e, t) {
  var n = Te();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && xi(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Va(e, t, n) {
  return Lt & 21 ? (je(n, t) || (n = Xs(), H.lanes |= n, Rt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, me = !0), e.memoizedState = n);
}
function Td(e, t) {
  var n = O;
  O = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Kl.transition;
  Kl.transition = {};
  try {
    e(!1), t();
  } finally {
    O = n, Kl.transition = r;
  }
}
function Qa() {
  return Te().memoizedState;
}
function zd(e, t, n) {
  var r = pt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Wa(e)) Ka(t, n);
  else if (n = Pa(e, t, n, r), n !== null) {
    var l = ce();
    Me(n, e, r, l), Ya(n, t, r);
  }
}
function Ld(e, t, n) {
  var r = pt(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Wa(e)) Ka(t, l);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
      var i = t.lastRenderedState, u = o(i, n);
      if (l.hasEagerState = !0, l.eagerState = u, je(u, i)) {
        var s = t.interleaved;
        s === null ? (l.next = l, ki(t)) : (l.next = s.next, s.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = Pa(e, t, l, r), n !== null && (l = ce(), Me(n, e, r, l), Ya(n, t, r));
  }
}
function Wa(e) {
  var t = e.alternate;
  return e === H || t !== null && t === H;
}
function Ka(e, t) {
  On = el = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Ya(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ii(e, n);
  }
}
var tl = { readContext: Ae, useCallback: re, useContext: re, useEffect: re, useImperativeHandle: re, useInsertionEffect: re, useLayoutEffect: re, useMemo: re, useReducer: re, useRef: re, useState: re, useDebugValue: re, useDeferredValue: re, useTransition: re, useMutableSource: re, useSyncExternalStore: re, useId: re, unstable_isNewReconciler: !1 }, Rd = { readContext: Ae, useCallback: function(e, t) {
  return Ue().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Ae, useEffect: Bu, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Rr(
    4194308,
    4,
    $a.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Rr(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Rr(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Ue();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Ue();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = zd.bind(null, H, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Ue();
  return e = { current: e }, t.memoizedState = e;
}, useState: Uu, useDebugValue: Ti, useDeferredValue: function(e) {
  return Ue().memoizedState = e;
}, useTransition: function() {
  var e = Uu(!1), t = e[0];
  return e = Td.bind(null, e[1]), Ue().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = H, l = Ue();
  if (U) {
    if (n === void 0) throw Error(y(407));
    n = n();
  } else {
    if (n = t(), q === null) throw Error(y(349));
    Lt & 30 || La(r, t, n);
  }
  l.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return l.queue = o, Bu(Ia.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, bn(9, Ra.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = Ue(), t = q.identifierPrefix;
  if (U) {
    var n = Ye, r = Ke;
    n = (r & ~(1 << 32 - De(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Jn++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Ad++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Id = {
  readContext: Ae,
  useCallback: Ba,
  useContext: Ae,
  useEffect: Ai,
  useImperativeHandle: Ua,
  useInsertionEffect: Fa,
  useLayoutEffect: ja,
  useMemo: Ha,
  useReducer: Yl,
  useRef: Ma,
  useState: function() {
    return Yl(qn);
  },
  useDebugValue: Ti,
  useDeferredValue: function(e) {
    var t = Te();
    return Va(t, X.memoizedState, e);
  },
  useTransition: function() {
    var e = Yl(qn)[0], t = Te().memoizedState;
    return [e, t];
  },
  useMutableSource: Ta,
  useSyncExternalStore: za,
  useId: Qa,
  unstable_isNewReconciler: !1
}, Od = { readContext: Ae, useCallback: Ba, useContext: Ae, useEffect: Ai, useImperativeHandle: Ua, useInsertionEffect: Fa, useLayoutEffect: ja, useMemo: Ha, useReducer: Xl, useRef: Ma, useState: function() {
  return Xl(qn);
}, useDebugValue: Ti, useDeferredValue: function(e) {
  var t = Te();
  return X === null ? t.memoizedState = e : Va(t, X.memoizedState, e);
}, useTransition: function() {
  var e = Xl(qn)[0], t = Te().memoizedState;
  return [e, t];
}, useMutableSource: Ta, useSyncExternalStore: za, useId: Qa, unstable_isNewReconciler: !1 };
function Re(e, t) {
  if (e && e.defaultProps) {
    t = V({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Lo(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : V({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var hl = { isMounted: function(e) {
  return (e = e._reactInternals) ? Dt(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = ce(), l = pt(e), o = Xe(r, l);
  o.payload = t, n != null && (o.callback = n), t = ft(e, o, l), t !== null && (Me(t, e, l, r), zr(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = ce(), l = pt(e), o = Xe(r, l);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = ft(e, o, l), t !== null && (Me(t, e, l, r), zr(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = ce(), r = pt(e), l = Xe(n, r);
  l.tag = 2, t != null && (l.callback = t), t = ft(e, l, r), t !== null && (Me(t, e, r, n), zr(t, e, r));
} };
function Hu(e, t, n, r, l, o, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !Wn(n, r) || !Wn(l, o) : !0;
}
function Xa(e, t, n) {
  var r = !1, l = vt, o = t.contextType;
  return typeof o == "object" && o !== null ? o = Ae(o) : (l = ve(t) ? Tt : ue.current, r = t.contextTypes, o = (r = r != null) ? ln(e, l) : vt), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = hl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function Vu(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && hl.enqueueReplaceState(t, t.state, null);
}
function Ro(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, Si(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? l.context = Ae(o) : (o = ve(t) ? Tt : ue.current, l.context = ln(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Lo(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && hl.enqueueReplaceState(l, l.state, null), qr(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function an(e, t) {
  try {
    var n = "", r = t;
    do
      n += sf(r), r = r.return;
    while (r);
    var l = n;
  } catch (o) {
    l = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Gl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Io(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Dd = typeof WeakMap == "function" ? WeakMap : Map;
function Ga(e, t, n) {
  n = Xe(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    rl || (rl = !0, Vo = r), Io(e, t);
  }, n;
}
function Za(e, t, n) {
  n = Xe(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      Io(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    Io(e, t), typeof r != "function" && (dt === null ? dt = /* @__PURE__ */ new Set([this]) : dt.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
  }), n;
}
function Qu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Dd();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = Gd.bind(null, e, t, n), t.then(e, e));
}
function Wu(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ku(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Xe(-1, 1), t.tag = 2, ft(n, t, 1))), n.lanes |= 1), e);
}
var Md = be.ReactCurrentOwner, me = !1;
function se(e, t, n, r) {
  t.child = e === null ? xa(t, null, n, r) : un(t, e.child, n, r);
}
function Yu(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return tn(t, l), r = Pi(e, t, n, r, o, l), n = Ni(), e !== null && !me ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, qe(e, t, l)) : (U && n && mi(t), t.flags |= 1, se(e, t, r, l), t.child);
}
function Xu(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !Fi(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Ja(e, t, o, r, l)) : (e = Mr(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & l)) {
    var i = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Wn, n(i, r) && e.ref === t.ref) return qe(e, t, l);
  }
  return t.flags |= 1, e = mt(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Ja(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Wn(o, r) && e.ref === t.ref) if (me = !1, t.pendingProps = r = o, (e.lanes & l) !== 0) e.flags & 131072 && (me = !0);
    else return t.lanes = e.lanes, qe(e, t, l);
  }
  return Oo(e, t, n, r, l);
}
function qa(e, t, n) {
  var r = t.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, M(Gt, ge), ge |= n;
  else {
    if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, M(Gt, ge), ge |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, M(Gt, ge), ge |= r;
  }
  else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, M(Gt, ge), ge |= r;
  return se(e, t, l, n), t.child;
}
function ba(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Oo(e, t, n, r, l) {
  var o = ve(n) ? Tt : ue.current;
  return o = ln(t, o), tn(t, l), n = Pi(e, t, n, r, o, l), r = Ni(), e !== null && !me ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, qe(e, t, l)) : (U && r && mi(t), t.flags |= 1, se(e, t, n, l), t.child);
}
function Gu(e, t, n, r, l) {
  if (ve(n)) {
    var o = !0;
    Yr(t);
  } else o = !1;
  if (tn(t, l), t.stateNode === null) Ir(e, t), Xa(t, n, r), Ro(t, n, r, l), r = !0;
  else if (e === null) {
    var i = t.stateNode, u = t.memoizedProps;
    i.props = u;
    var s = i.context, a = n.contextType;
    typeof a == "object" && a !== null ? a = Ae(a) : (a = ve(n) ? Tt : ue.current, a = ln(t, a));
    var h = n.getDerivedStateFromProps, m = typeof h == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    m || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || s !== a) && Vu(t, i, r, a), nt = !1;
    var p = t.memoizedState;
    i.state = p, qr(t, r, i, l), s = t.memoizedState, u !== r || p !== s || he.current || nt ? (typeof h == "function" && (Lo(t, n, h, r), s = t.memoizedState), (u = nt || Hu(t, n, u, r, p, s, a)) ? (m || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), i.props = r, i.state = s, i.context = a, r = u) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    i = t.stateNode, Na(e, t), u = t.memoizedProps, a = t.type === t.elementType ? u : Re(t.type, u), i.props = a, m = t.pendingProps, p = i.context, s = n.contextType, typeof s == "object" && s !== null ? s = Ae(s) : (s = ve(n) ? Tt : ue.current, s = ln(t, s));
    var g = n.getDerivedStateFromProps;
    (h = typeof g == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== m || p !== s) && Vu(t, i, r, s), nt = !1, p = t.memoizedState, i.state = p, qr(t, r, i, l);
    var w = t.memoizedState;
    u !== m || p !== w || he.current || nt ? (typeof g == "function" && (Lo(t, n, g, r), w = t.memoizedState), (a = nt || Hu(t, n, a, r, p, w, s) || !1) ? (h || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, w, s), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, w, s)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = w), i.props = r, i.state = w, i.context = s, r = a) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Do(e, t, n, r, o, l);
}
function Do(e, t, n, r, l, o) {
  ba(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && Ou(t, n, !1), qe(e, t, o);
  r = t.stateNode, Md.current = t;
  var u = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = un(t, e.child, null, o), t.child = un(t, null, u, o)) : se(e, t, u, o), t.memoizedState = r.state, l && Ou(t, n, !0), t.child;
}
function ec(e) {
  var t = e.stateNode;
  t.pendingContext ? Iu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Iu(e, t.context, !1), Ei(e, t.containerInfo);
}
function Zu(e, t, n, r, l) {
  return on(), vi(l), t.flags |= 256, se(e, t, n, r), t.child;
}
var Mo = { dehydrated: null, treeContext: null, retryLane: 0 };
function Fo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function tc(e, t, n) {
  var r = t.pendingProps, l = B.current, o = !1, i = (t.flags & 128) !== 0, u;
  if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), M(B, l & 1), e === null)
    return To(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, i = { mode: "hidden", children: i }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = gl(i, r, 0, null), e = At(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Fo(n), t.memoizedState = Mo, e) : zi(t, i));
  if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null)) return Fd(e, t, i, r, u, l, n);
  if (o) {
    o = r.fallback, i = t.mode, l = e.child, u = l.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(i & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = mt(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? o = mt(u, o) : (o = At(o, i, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, i = e.child.memoizedState, i = i === null ? Fo(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, o.memoizedState = i, o.childLanes = e.childLanes & ~n, t.memoizedState = Mo, r;
  }
  return o = e.child, e = o.sibling, r = mt(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function zi(e, t) {
  return t = gl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Sr(e, t, n, r) {
  return r !== null && vi(r), un(t, e.child, null, n), e = zi(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Fd(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Gl(Error(y(422))), Sr(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = gl({ mode: "visible", children: r.children }, l, 0, null), o = At(o, l, i, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && un(t, e.child, null, i), t.child.memoizedState = Fo(i), t.memoizedState = Mo, o);
  if (!(t.mode & 1)) return Sr(e, t, i, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var u = r.dgst;
    return r = u, o = Error(y(419)), r = Gl(o, r, void 0), Sr(e, t, i, r);
  }
  if (u = (i & e.childLanes) !== 0, me || u) {
    if (r = q, r !== null) {
      switch (i & -i) {
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
      l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, Je(e, l), Me(r, e, l, -1));
    }
    return Mi(), r = Gl(Error(y(421))), Sr(e, t, i, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Zd.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, we = ct(l.nextSibling), ke = t, U = !0, Oe = null, e !== null && (Ce[xe++] = Ke, Ce[xe++] = Ye, Ce[xe++] = zt, Ke = e.id, Ye = e.overflow, zt = t), t = zi(t, r.children), t.flags |= 4096, t);
}
function Ju(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), zo(e.return, t, n);
}
function Zl(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = l);
}
function nc(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, o = r.tail;
  if (se(e, t, r.children, n), r = B.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Ju(e, n, t);
      else if (e.tag === 19) Ju(e, n, t);
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
  if (M(B, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && br(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Zl(t, !1, l, n, o);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && br(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      Zl(t, !0, n, null, o);
      break;
    case "together":
      Zl(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Ir(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function qe(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Rt |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(y(153));
  if (t.child !== null) {
    for (e = t.child, n = mt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = mt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function jd(e, t, n) {
  switch (t.tag) {
    case 3:
      ec(t), on();
      break;
    case 5:
      Aa(t);
      break;
    case 1:
      ve(t.type) && Yr(t);
      break;
    case 4:
      Ei(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      M(Zr, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (M(B, B.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? tc(e, t, n) : (M(B, B.current & 1), e = qe(e, t, n), e !== null ? e.sibling : null);
      M(B, B.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return nc(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), M(B, B.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, qa(e, t, n);
  }
  return qe(e, t, n);
}
var rc, jo, lc, oc;
rc = function(e, t) {
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
jo = function() {
};
lc = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, Pt(Ve.current);
    var o = null;
    switch (n) {
      case "input":
        l = oo(e, l), r = oo(e, r), o = [];
        break;
      case "select":
        l = V({}, l, { value: void 0 }), r = V({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        l = so(e, l), r = so(e, r), o = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Wr);
    }
    co(n, r);
    var i;
    n = null;
    for (a in l) if (!r.hasOwnProperty(a) && l.hasOwnProperty(a) && l[a] != null) if (a === "style") {
      var u = l[a];
      for (i in u) u.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
    } else a !== "dangerouslySetInnerHTML" && a !== "children" && a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (jn.hasOwnProperty(a) ? o || (o = []) : (o = o || []).push(a, null));
    for (a in r) {
      var s = r[a];
      if (u = l != null ? l[a] : void 0, r.hasOwnProperty(a) && s !== u && (s != null || u != null)) if (a === "style") if (u) {
        for (i in u) !u.hasOwnProperty(i) || s && s.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
        for (i in s) s.hasOwnProperty(i) && u[i] !== s[i] && (n || (n = {}), n[i] = s[i]);
      } else n || (o || (o = []), o.push(
        a,
        n
      )), n = s;
      else a === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (o = o || []).push(a, s)) : a === "children" ? typeof s != "string" && typeof s != "number" || (o = o || []).push(a, "" + s) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && (jn.hasOwnProperty(a) ? (s != null && a === "onScroll" && j("scroll", e), o || u === s || (o = [])) : (o = o || []).push(a, s));
    }
    n && (o = o || []).push("style", n);
    var a = o;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
oc = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function _n(e, t) {
  if (!U) switch (e.tailMode) {
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
function le(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function $d(e, t, n) {
  var r = t.pendingProps;
  switch (hi(t), t.tag) {
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
      return le(t), null;
    case 1:
      return ve(t.type) && Kr(), le(t), null;
    case 3:
      return r = t.stateNode, sn(), $(he), $(ue), Ci(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (wr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Oe !== null && (Ko(Oe), Oe = null))), jo(e, t), le(t), null;
    case 5:
      _i(t);
      var l = Pt(Zn.current);
      if (n = t.type, e !== null && t.stateNode != null) lc(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(y(166));
          return le(t), null;
        }
        if (e = Pt(Ve.current), wr(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[Be] = t, r[Xn] = o, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              j("cancel", r), j("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              j("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < An.length; l++) j(An[l], r);
              break;
            case "source":
              j("error", r);
              break;
            case "img":
            case "image":
            case "link":
              j(
                "error",
                r
              ), j("load", r);
              break;
            case "details":
              j("toggle", r);
              break;
            case "input":
              iu(r, o), j("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, j("invalid", r);
              break;
            case "textarea":
              su(r, o), j("invalid", r);
          }
          co(n, o), l = null;
          for (var i in o) if (o.hasOwnProperty(i)) {
            var u = o[i];
            i === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && gr(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && gr(
              r.textContent,
              u,
              e
            ), l = ["children", "" + u]) : jn.hasOwnProperty(i) && u != null && i === "onScroll" && j("scroll", r);
          }
          switch (n) {
            case "input":
              cr(r), uu(r, o, !0);
              break;
            case "textarea":
              cr(r), au(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Wr);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Is(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[Be] = t, e[Xn] = r, rc(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (i = fo(n, r), n) {
              case "dialog":
                j("cancel", e), j("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                j("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < An.length; l++) j(An[l], e);
                l = r;
                break;
              case "source":
                j("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                j(
                  "error",
                  e
                ), j("load", e), l = r;
                break;
              case "details":
                j("toggle", e), l = r;
                break;
              case "input":
                iu(e, r), l = oo(e, r), j("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = V({}, r, { value: void 0 }), j("invalid", e);
                break;
              case "textarea":
                su(e, r), l = so(e, r), j("invalid", e);
                break;
              default:
                l = r;
            }
            co(n, l), u = l;
            for (o in u) if (u.hasOwnProperty(o)) {
              var s = u[o];
              o === "style" ? Ms(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Os(e, s)) : o === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && $n(e, s) : typeof s == "number" && $n(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (jn.hasOwnProperty(o) ? s != null && o === "onScroll" && j("scroll", e) : s != null && ei(e, o, s, i));
            }
            switch (n) {
              case "input":
                cr(e), uu(e, r, !1);
                break;
              case "textarea":
                cr(e), au(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + ht(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? Jt(e, !!r.multiple, o, !1) : r.defaultValue != null && Jt(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Wr);
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
      return le(t), null;
    case 6:
      if (e && t.stateNode != null) oc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(y(166));
        if (n = Pt(Zn.current), Pt(Ve.current), wr(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Be] = t, (o = r.nodeValue !== n) && (e = ke, e !== null)) switch (e.tag) {
            case 3:
              gr(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && gr(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          o && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Be] = t, t.stateNode = r;
      }
      return le(t), null;
    case 13:
      if ($(B), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (U && we !== null && t.mode & 1 && !(t.flags & 128)) _a(), on(), t.flags |= 98560, o = !1;
        else if (o = wr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o) throw Error(y(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(y(317));
            o[Be] = t;
          } else on(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          le(t), o = !1;
        } else Oe !== null && (Ko(Oe), Oe = null), o = !0;
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || B.current & 1 ? G === 0 && (G = 3) : Mi())), t.updateQueue !== null && (t.flags |= 4), le(t), null);
    case 4:
      return sn(), jo(e, t), e === null && Kn(t.stateNode.containerInfo), le(t), null;
    case 10:
      return wi(t.type._context), le(t), null;
    case 17:
      return ve(t.type) && Kr(), le(t), null;
    case 19:
      if ($(B), o = t.memoizedState, o === null) return le(t), null;
      if (r = (t.flags & 128) !== 0, i = o.rendering, i === null) if (r) _n(o, !1);
      else {
        if (G !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (i = br(e), i !== null) {
            for (t.flags |= 128, _n(o, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return M(B, B.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        o.tail !== null && K() > cn && (t.flags |= 128, r = !0, _n(o, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = br(i), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), _n(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !U) return le(t), null;
        } else 2 * K() - o.renderingStartTime > cn && n !== 1073741824 && (t.flags |= 128, r = !0, _n(o, !1), t.lanes = 4194304);
        o.isBackwards ? (i.sibling = t.child, t.child = i) : (n = o.last, n !== null ? n.sibling = i : t.child = i, o.last = i);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = K(), t.sibling = null, n = B.current, M(B, r ? n & 1 | 2 : n & 1), t) : (le(t), null);
    case 22:
    case 23:
      return Di(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? ge & 1073741824 && (le(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : le(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(y(156, t.tag));
}
function Ud(e, t) {
  switch (hi(t), t.tag) {
    case 1:
      return ve(t.type) && Kr(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return sn(), $(he), $(ue), Ci(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return _i(t), null;
    case 13:
      if ($(B), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(y(340));
        on();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return $(B), null;
    case 4:
      return sn(), null;
    case 10:
      return wi(t.type._context), null;
    case 22:
    case 23:
      return Di(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Er = !1, ie = !1, Bd = typeof WeakSet == "function" ? WeakSet : Set, C = null;
function Xt(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    Q(e, t, r);
  }
  else n.current = null;
}
function $o(e, t, n) {
  try {
    n();
  } catch (r) {
    Q(e, t, r);
  }
}
var qu = !1;
function Hd(e, t) {
  if (Eo = Hr, e = ca(), pi(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var l = r.anchorOffset, o = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, o.nodeType;
        } catch {
          n = null;
          break e;
        }
        var i = 0, u = -1, s = -1, a = 0, h = 0, m = e, p = null;
        t: for (; ; ) {
          for (var g; m !== n || l !== 0 && m.nodeType !== 3 || (u = i + l), m !== o || r !== 0 && m.nodeType !== 3 || (s = i + r), m.nodeType === 3 && (i += m.nodeValue.length), (g = m.firstChild) !== null; )
            p = m, m = g;
          for (; ; ) {
            if (m === e) break t;
            if (p === n && ++a === l && (u = i), p === o && ++h === r && (s = i), (g = m.nextSibling) !== null) break;
            m = p, p = m.parentNode;
          }
          m = g;
        }
        n = u === -1 || s === -1 ? null : { start: u, end: s };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (_o = { focusedElem: e, selectionRange: n }, Hr = !1, C = t; C !== null; ) if (t = C, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, C = e;
  else for (; C !== null; ) {
    t = C;
    try {
      var w = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (w !== null) {
            var k = w.memoizedProps, D = w.memoizedState, f = t.stateNode, c = f.getSnapshotBeforeUpdate(t.elementType === t.type ? k : Re(t.type, k), D);
            f.__reactInternalSnapshotBeforeUpdate = c;
          }
          break;
        case 3:
          var d = t.stateNode.containerInfo;
          d.nodeType === 1 ? d.textContent = "" : d.nodeType === 9 && d.documentElement && d.removeChild(d.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(y(163));
      }
    } catch (v) {
      Q(t, t.return, v);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, C = e;
      break;
    }
    C = t.return;
  }
  return w = qu, qu = !1, w;
}
function Dn(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        l.destroy = void 0, o !== void 0 && $o(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function vl(e, t) {
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
function Uo(e) {
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
function ic(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, ic(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Be], delete t[Xn], delete t[Po], delete t[Cd], delete t[xd])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function uc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function bu(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || uc(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Bo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Wr));
  else if (r !== 4 && (e = e.child, e !== null)) for (Bo(e, t, n), e = e.sibling; e !== null; ) Bo(e, t, n), e = e.sibling;
}
function Ho(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Ho(e, t, n), e = e.sibling; e !== null; ) Ho(e, t, n), e = e.sibling;
}
var b = null, Ie = !1;
function et(e, t, n) {
  for (n = n.child; n !== null; ) sc(e, t, n), n = n.sibling;
}
function sc(e, t, n) {
  if (He && typeof He.onCommitFiberUnmount == "function") try {
    He.onCommitFiberUnmount(sl, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      ie || Xt(n, t);
    case 6:
      var r = b, l = Ie;
      b = null, et(e, t, n), b = r, Ie = l, b !== null && (Ie ? (e = b, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : b.removeChild(n.stateNode));
      break;
    case 18:
      b !== null && (Ie ? (e = b, n = n.stateNode, e.nodeType === 8 ? Vl(e.parentNode, n) : e.nodeType === 1 && Vl(e, n), Vn(e)) : Vl(b, n.stateNode));
      break;
    case 4:
      r = b, l = Ie, b = n.stateNode.containerInfo, Ie = !0, et(e, t, n), b = r, Ie = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ie && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var o = l, i = o.destroy;
          o = o.tag, i !== void 0 && (o & 2 || o & 4) && $o(n, t, i), l = l.next;
        } while (l !== r);
      }
      et(e, t, n);
      break;
    case 1:
      if (!ie && (Xt(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (u) {
        Q(n, t, u);
      }
      et(e, t, n);
      break;
    case 21:
      et(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (ie = (r = ie) || n.memoizedState !== null, et(e, t, n), ie = r) : et(e, t, n);
      break;
    default:
      et(e, t, n);
  }
}
function es(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Bd()), t.forEach(function(r) {
      var l = Jd.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function Le(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var l = n[r];
    try {
      var o = e, i = t, u = i;
      e: for (; u !== null; ) {
        switch (u.tag) {
          case 5:
            b = u.stateNode, Ie = !1;
            break e;
          case 3:
            b = u.stateNode.containerInfo, Ie = !0;
            break e;
          case 4:
            b = u.stateNode.containerInfo, Ie = !0;
            break e;
        }
        u = u.return;
      }
      if (b === null) throw Error(y(160));
      sc(o, i, l), b = null, Ie = !1;
      var s = l.alternate;
      s !== null && (s.return = null), l.return = null;
    } catch (a) {
      Q(l, t, a);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) ac(t, e), t = t.sibling;
}
function ac(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Le(t, e), $e(e), r & 4) {
        try {
          Dn(3, e, e.return), vl(3, e);
        } catch (k) {
          Q(e, e.return, k);
        }
        try {
          Dn(5, e, e.return);
        } catch (k) {
          Q(e, e.return, k);
        }
      }
      break;
    case 1:
      Le(t, e), $e(e), r & 512 && n !== null && Xt(n, n.return);
      break;
    case 5:
      if (Le(t, e), $e(e), r & 512 && n !== null && Xt(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          $n(l, "");
        } catch (k) {
          Q(e, e.return, k);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var o = e.memoizedProps, i = n !== null ? n.memoizedProps : o, u = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null) try {
          u === "input" && o.type === "radio" && o.name != null && Ls(l, o), fo(u, i);
          var a = fo(u, o);
          for (i = 0; i < s.length; i += 2) {
            var h = s[i], m = s[i + 1];
            h === "style" ? Ms(l, m) : h === "dangerouslySetInnerHTML" ? Os(l, m) : h === "children" ? $n(l, m) : ei(l, h, m, a);
          }
          switch (u) {
            case "input":
              io(l, o);
              break;
            case "textarea":
              Rs(l, o);
              break;
            case "select":
              var p = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!o.multiple;
              var g = o.value;
              g != null ? Jt(l, !!o.multiple, g, !1) : p !== !!o.multiple && (o.defaultValue != null ? Jt(
                l,
                !!o.multiple,
                o.defaultValue,
                !0
              ) : Jt(l, !!o.multiple, o.multiple ? [] : "", !1));
          }
          l[Xn] = o;
        } catch (k) {
          Q(e, e.return, k);
        }
      }
      break;
    case 6:
      if (Le(t, e), $e(e), r & 4) {
        if (e.stateNode === null) throw Error(y(162));
        l = e.stateNode, o = e.memoizedProps;
        try {
          l.nodeValue = o;
        } catch (k) {
          Q(e, e.return, k);
        }
      }
      break;
    case 3:
      if (Le(t, e), $e(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Vn(t.containerInfo);
      } catch (k) {
        Q(e, e.return, k);
      }
      break;
    case 4:
      Le(t, e), $e(e);
      break;
    case 13:
      Le(t, e), $e(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (Ii = K())), r & 4 && es(e);
      break;
    case 22:
      if (h = n !== null && n.memoizedState !== null, e.mode & 1 ? (ie = (a = ie) || h, Le(t, e), ie = a) : Le(t, e), $e(e), r & 8192) {
        if (a = e.memoizedState !== null, (e.stateNode.isHidden = a) && !h && e.mode & 1) for (C = e, h = e.child; h !== null; ) {
          for (m = C = h; C !== null; ) {
            switch (p = C, g = p.child, p.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Dn(4, p, p.return);
                break;
              case 1:
                Xt(p, p.return);
                var w = p.stateNode;
                if (typeof w.componentWillUnmount == "function") {
                  r = p, n = p.return;
                  try {
                    t = r, w.props = t.memoizedProps, w.state = t.memoizedState, w.componentWillUnmount();
                  } catch (k) {
                    Q(r, n, k);
                  }
                }
                break;
              case 5:
                Xt(p, p.return);
                break;
              case 22:
                if (p.memoizedState !== null) {
                  ns(m);
                  continue;
                }
            }
            g !== null ? (g.return = p, C = g) : ns(m);
          }
          h = h.sibling;
        }
        e: for (h = null, m = e; ; ) {
          if (m.tag === 5) {
            if (h === null) {
              h = m;
              try {
                l = m.stateNode, a ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = m.stateNode, s = m.memoizedProps.style, i = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = Ds("display", i));
              } catch (k) {
                Q(e, e.return, k);
              }
            }
          } else if (m.tag === 6) {
            if (h === null) try {
              m.stateNode.nodeValue = a ? "" : m.memoizedProps;
            } catch (k) {
              Q(e, e.return, k);
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
      Le(t, e), $e(e), r & 4 && es(e);
      break;
    case 21:
      break;
    default:
      Le(
        t,
        e
      ), $e(e);
  }
}
function $e(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (uc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(y(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && ($n(l, ""), r.flags &= -33);
          var o = bu(e);
          Ho(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, u = bu(e);
          Bo(e, u, i);
          break;
        default:
          throw Error(y(161));
      }
    } catch (s) {
      Q(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Vd(e, t, n) {
  C = e, cc(e);
}
function cc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; C !== null; ) {
    var l = C, o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Er;
      if (!i) {
        var u = l.alternate, s = u !== null && u.memoizedState !== null || ie;
        u = Er;
        var a = ie;
        if (Er = i, (ie = s) && !a) for (C = l; C !== null; ) i = C, s = i.child, i.tag === 22 && i.memoizedState !== null ? rs(l) : s !== null ? (s.return = i, C = s) : rs(l);
        for (; o !== null; ) C = o, cc(o), o = o.sibling;
        C = l, Er = u, ie = a;
      }
      ts(e);
    } else l.subtreeFlags & 8772 && o !== null ? (o.return = l, C = o) : ts(e);
  }
}
function ts(e) {
  for (; C !== null; ) {
    var t = C;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            ie || vl(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !ie) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : Re(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var o = t.updateQueue;
            o !== null && $u(t, o, r);
            break;
          case 3:
            var i = t.updateQueue;
            if (i !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode;
              }
              $u(t, i, n);
            }
            break;
          case 5:
            var u = t.stateNode;
            if (n === null && t.flags & 4) {
              n = u;
              var s = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  s.autoFocus && n.focus();
                  break;
                case "img":
                  s.src && (n.src = s.src);
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
              var a = t.alternate;
              if (a !== null) {
                var h = a.memoizedState;
                if (h !== null) {
                  var m = h.dehydrated;
                  m !== null && Vn(m);
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
            throw Error(y(163));
        }
        ie || t.flags & 512 && Uo(t);
      } catch (p) {
        Q(t, t.return, p);
      }
    }
    if (t === e) {
      C = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, C = n;
      break;
    }
    C = t.return;
  }
}
function ns(e) {
  for (; C !== null; ) {
    var t = C;
    if (t === e) {
      C = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, C = n;
      break;
    }
    C = t.return;
  }
}
function rs(e) {
  for (; C !== null; ) {
    var t = C;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            vl(4, t);
          } catch (s) {
            Q(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              Q(t, l, s);
            }
          }
          var o = t.return;
          try {
            Uo(t);
          } catch (s) {
            Q(t, o, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Uo(t);
          } catch (s) {
            Q(t, i, s);
          }
      }
    } catch (s) {
      Q(t, t.return, s);
    }
    if (t === e) {
      C = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      u.return = t.return, C = u;
      break;
    }
    C = t.return;
  }
}
var Qd = Math.ceil, nl = be.ReactCurrentDispatcher, Li = be.ReactCurrentOwner, Ne = be.ReactCurrentBatchConfig, I = 0, q = null, Y = null, te = 0, ge = 0, Gt = gt(0), G = 0, er = null, Rt = 0, yl = 0, Ri = 0, Mn = null, pe = null, Ii = 0, cn = 1 / 0, Qe = null, rl = !1, Vo = null, dt = null, _r = !1, it = null, ll = 0, Fn = 0, Qo = null, Or = -1, Dr = 0;
function ce() {
  return I & 6 ? K() : Or !== -1 ? Or : Or = K();
}
function pt(e) {
  return e.mode & 1 ? I & 2 && te !== 0 ? te & -te : Nd.transition !== null ? (Dr === 0 && (Dr = Xs()), Dr) : (e = O, e !== 0 || (e = window.event, e = e === void 0 ? 16 : ta(e.type)), e) : 1;
}
function Me(e, t, n, r) {
  if (50 < Fn) throw Fn = 0, Qo = null, Error(y(185));
  nr(e, n, r), (!(I & 2) || e !== q) && (e === q && (!(I & 2) && (yl |= n), G === 4 && lt(e, te)), ye(e, r), n === 1 && I === 0 && !(t.mode & 1) && (cn = K() + 500, pl && wt()));
}
function ye(e, t) {
  var n = e.callbackNode;
  Nf(e, t);
  var r = Br(e, e === q ? te : 0);
  if (r === 0) n !== null && du(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && du(n), t === 1) e.tag === 0 ? Pd(ls.bind(null, e)) : ka(ls.bind(null, e)), Ed(function() {
      !(I & 6) && wt();
    }), n = null;
    else {
      switch (Gs(r)) {
        case 1:
          n = oi;
          break;
        case 4:
          n = Ks;
          break;
        case 16:
          n = Ur;
          break;
        case 536870912:
          n = Ys;
          break;
        default:
          n = Ur;
      }
      n = gc(n, fc.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function fc(e, t) {
  if (Or = -1, Dr = 0, I & 6) throw Error(y(327));
  var n = e.callbackNode;
  if (nn() && e.callbackNode !== n) return null;
  var r = Br(e, e === q ? te : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ol(e, r);
  else {
    t = r;
    var l = I;
    I |= 2;
    var o = pc();
    (q !== e || te !== t) && (Qe = null, cn = K() + 500, Nt(e, t));
    do
      try {
        Yd();
        break;
      } catch (u) {
        dc(e, u);
      }
    while (!0);
    gi(), nl.current = o, I = l, Y !== null ? t = 0 : (q = null, te = 0, t = G);
  }
  if (t !== 0) {
    if (t === 2 && (l = yo(e), l !== 0 && (r = l, t = Wo(e, l))), t === 1) throw n = er, Nt(e, 0), lt(e, r), ye(e, K()), n;
    if (t === 6) lt(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !Wd(l) && (t = ol(e, r), t === 2 && (o = yo(e), o !== 0 && (r = o, t = Wo(e, o))), t === 1)) throw n = er, Nt(e, 0), lt(e, r), ye(e, K()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          _t(e, pe, Qe);
          break;
        case 3:
          if (lt(e, r), (r & 130023424) === r && (t = Ii + 500 - K(), 10 < t)) {
            if (Br(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              ce(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = xo(_t.bind(null, e, pe, Qe), t);
            break;
          }
          _t(e, pe, Qe);
          break;
        case 4:
          if (lt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - De(r);
            o = 1 << i, i = t[i], i > l && (l = i), r &= ~o;
          }
          if (r = l, r = K() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Qd(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = xo(_t.bind(null, e, pe, Qe), r);
            break;
          }
          _t(e, pe, Qe);
          break;
        case 5:
          _t(e, pe, Qe);
          break;
        default:
          throw Error(y(329));
      }
    }
  }
  return ye(e, K()), e.callbackNode === n ? fc.bind(null, e) : null;
}
function Wo(e, t) {
  var n = Mn;
  return e.current.memoizedState.isDehydrated && (Nt(e, t).flags |= 256), e = ol(e, t), e !== 2 && (t = pe, pe = n, t !== null && Ko(t)), e;
}
function Ko(e) {
  pe === null ? pe = e : pe.push.apply(pe, e);
}
function Wd(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var l = n[r], o = l.getSnapshot;
        l = l.value;
        try {
          if (!je(o(), l)) return !1;
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
function lt(e, t) {
  for (t &= ~Ri, t &= ~yl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - De(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function ls(e) {
  if (I & 6) throw Error(y(327));
  nn();
  var t = Br(e, 0);
  if (!(t & 1)) return ye(e, K()), null;
  var n = ol(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = yo(e);
    r !== 0 && (t = r, n = Wo(e, r));
  }
  if (n === 1) throw n = er, Nt(e, 0), lt(e, t), ye(e, K()), n;
  if (n === 6) throw Error(y(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, _t(e, pe, Qe), ye(e, K()), null;
}
function Oi(e, t) {
  var n = I;
  I |= 1;
  try {
    return e(t);
  } finally {
    I = n, I === 0 && (cn = K() + 500, pl && wt());
  }
}
function It(e) {
  it !== null && it.tag === 0 && !(I & 6) && nn();
  var t = I;
  I |= 1;
  var n = Ne.transition, r = O;
  try {
    if (Ne.transition = null, O = 1, e) return e();
  } finally {
    O = r, Ne.transition = n, I = t, !(I & 6) && wt();
  }
}
function Di() {
  ge = Gt.current, $(Gt);
}
function Nt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Sd(n)), Y !== null) for (n = Y.return; n !== null; ) {
    var r = n;
    switch (hi(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Kr();
        break;
      case 3:
        sn(), $(he), $(ue), Ci();
        break;
      case 5:
        _i(r);
        break;
      case 4:
        sn();
        break;
      case 13:
        $(B);
        break;
      case 19:
        $(B);
        break;
      case 10:
        wi(r.type._context);
        break;
      case 22:
      case 23:
        Di();
    }
    n = n.return;
  }
  if (q = e, Y = e = mt(e.current, null), te = ge = t, G = 0, er = null, Ri = yl = Rt = 0, pe = Mn = null, xt !== null) {
    for (t = 0; t < xt.length; t++) if (n = xt[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var l = r.next, o = n.pending;
      if (o !== null) {
        var i = o.next;
        o.next = l, r.next = i;
      }
      n.pending = r;
    }
    xt = null;
  }
  return e;
}
function dc(e, t) {
  do {
    var n = Y;
    try {
      if (gi(), Lr.current = tl, el) {
        for (var r = H.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        el = !1;
      }
      if (Lt = 0, J = X = H = null, On = !1, Jn = 0, Li.current = null, n === null || n.return === null) {
        G = 1, er = t, Y = null;
        break;
      }
      e: {
        var o = e, i = n.return, u = n, s = t;
        if (t = te, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var a = s, h = u, m = h.tag;
          if (!(h.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var p = h.alternate;
            p ? (h.updateQueue = p.updateQueue, h.memoizedState = p.memoizedState, h.lanes = p.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var g = Wu(i);
          if (g !== null) {
            g.flags &= -257, Ku(g, i, u, o, t), g.mode & 1 && Qu(o, a, t), t = g, s = a;
            var w = t.updateQueue;
            if (w === null) {
              var k = /* @__PURE__ */ new Set();
              k.add(s), t.updateQueue = k;
            } else w.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Qu(o, a, t), Mi();
              break e;
            }
            s = Error(y(426));
          }
        } else if (U && u.mode & 1) {
          var D = Wu(i);
          if (D !== null) {
            !(D.flags & 65536) && (D.flags |= 256), Ku(D, i, u, o, t), vi(an(s, u));
            break e;
          }
        }
        o = s = an(s, u), G !== 4 && (G = 2), Mn === null ? Mn = [o] : Mn.push(o), o = i;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var f = Ga(o, s, t);
              ju(o, f);
              break e;
            case 1:
              u = s;
              var c = o.type, d = o.stateNode;
              if (!(o.flags & 128) && (typeof c.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (dt === null || !dt.has(d)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var v = Za(o, u, t);
                ju(o, v);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      hc(n);
    } catch (E) {
      t = E, Y === n && n !== null && (Y = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function pc() {
  var e = nl.current;
  return nl.current = tl, e === null ? tl : e;
}
function Mi() {
  (G === 0 || G === 3 || G === 2) && (G = 4), q === null || !(Rt & 268435455) && !(yl & 268435455) || lt(q, te);
}
function ol(e, t) {
  var n = I;
  I |= 2;
  var r = pc();
  (q !== e || te !== t) && (Qe = null, Nt(e, t));
  do
    try {
      Kd();
      break;
    } catch (l) {
      dc(e, l);
    }
  while (!0);
  if (gi(), I = n, nl.current = r, Y !== null) throw Error(y(261));
  return q = null, te = 0, G;
}
function Kd() {
  for (; Y !== null; ) mc(Y);
}
function Yd() {
  for (; Y !== null && !gf(); ) mc(Y);
}
function mc(e) {
  var t = yc(e.alternate, e, ge);
  e.memoizedProps = e.pendingProps, t === null ? hc(e) : Y = t, Li.current = null;
}
function hc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Ud(n, t), n !== null) {
        n.flags &= 32767, Y = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        G = 6, Y = null;
        return;
      }
    } else if (n = $d(n, t, ge), n !== null) {
      Y = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      Y = t;
      return;
    }
    Y = t = e;
  } while (t !== null);
  G === 0 && (G = 5);
}
function _t(e, t, n) {
  var r = O, l = Ne.transition;
  try {
    Ne.transition = null, O = 1, Xd(e, t, n, r);
  } finally {
    Ne.transition = l, O = r;
  }
  return null;
}
function Xd(e, t, n, r) {
  do
    nn();
  while (it !== null);
  if (I & 6) throw Error(y(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(y(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (Af(e, o), e === q && (Y = q = null, te = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || _r || (_r = !0, gc(Ur, function() {
    return nn(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = Ne.transition, Ne.transition = null;
    var i = O;
    O = 1;
    var u = I;
    I |= 4, Li.current = null, Hd(e, n), ac(n, e), md(_o), Hr = !!Eo, _o = Eo = null, e.current = n, Vd(n), wf(), I = u, O = i, Ne.transition = o;
  } else e.current = n;
  if (_r && (_r = !1, it = e, ll = l), o = e.pendingLanes, o === 0 && (dt = null), Ef(n.stateNode), ye(e, K()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (rl) throw rl = !1, e = Vo, Vo = null, e;
  return ll & 1 && e.tag !== 0 && nn(), o = e.pendingLanes, o & 1 ? e === Qo ? Fn++ : (Fn = 0, Qo = e) : Fn = 0, wt(), null;
}
function nn() {
  if (it !== null) {
    var e = Gs(ll), t = Ne.transition, n = O;
    try {
      if (Ne.transition = null, O = 16 > e ? 16 : e, it === null) var r = !1;
      else {
        if (e = it, it = null, ll = 0, I & 6) throw Error(y(331));
        var l = I;
        for (I |= 4, C = e.current; C !== null; ) {
          var o = C, i = o.child;
          if (C.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var a = u[s];
                for (C = a; C !== null; ) {
                  var h = C;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Dn(8, h, o);
                  }
                  var m = h.child;
                  if (m !== null) m.return = h, C = m;
                  else for (; C !== null; ) {
                    h = C;
                    var p = h.sibling, g = h.return;
                    if (ic(h), h === a) {
                      C = null;
                      break;
                    }
                    if (p !== null) {
                      p.return = g, C = p;
                      break;
                    }
                    C = g;
                  }
                }
              }
              var w = o.alternate;
              if (w !== null) {
                var k = w.child;
                if (k !== null) {
                  w.child = null;
                  do {
                    var D = k.sibling;
                    k.sibling = null, k = D;
                  } while (k !== null);
                }
              }
              C = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) i.return = o, C = i;
          else e: for (; C !== null; ) {
            if (o = C, o.flags & 2048) switch (o.tag) {
              case 0:
              case 11:
              case 15:
                Dn(9, o, o.return);
            }
            var f = o.sibling;
            if (f !== null) {
              f.return = o.return, C = f;
              break e;
            }
            C = o.return;
          }
        }
        var c = e.current;
        for (C = c; C !== null; ) {
          i = C;
          var d = i.child;
          if (i.subtreeFlags & 2064 && d !== null) d.return = i, C = d;
          else e: for (i = c; C !== null; ) {
            if (u = C, u.flags & 2048) try {
              switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  vl(9, u);
              }
            } catch (E) {
              Q(u, u.return, E);
            }
            if (u === i) {
              C = null;
              break e;
            }
            var v = u.sibling;
            if (v !== null) {
              v.return = u.return, C = v;
              break e;
            }
            C = u.return;
          }
        }
        if (I = l, wt(), He && typeof He.onPostCommitFiberRoot == "function") try {
          He.onPostCommitFiberRoot(sl, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      O = n, Ne.transition = t;
    }
  }
  return !1;
}
function os(e, t, n) {
  t = an(n, t), t = Ga(e, t, 1), e = ft(e, t, 1), t = ce(), e !== null && (nr(e, 1, t), ye(e, t));
}
function Q(e, t, n) {
  if (e.tag === 3) os(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      os(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (dt === null || !dt.has(r))) {
        e = an(n, e), e = Za(t, e, 1), t = ft(t, e, 1), e = ce(), t !== null && (nr(t, 1, e), ye(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Gd(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = ce(), e.pingedLanes |= e.suspendedLanes & n, q === e && (te & n) === n && (G === 4 || G === 3 && (te & 130023424) === te && 500 > K() - Ii ? Nt(e, 0) : Ri |= n), ye(e, t);
}
function vc(e, t) {
  t === 0 && (e.mode & 1 ? (t = pr, pr <<= 1, !(pr & 130023424) && (pr = 4194304)) : t = 1);
  var n = ce();
  e = Je(e, t), e !== null && (nr(e, t, n), ye(e, n));
}
function Zd(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), vc(e, n);
}
function Jd(e, t) {
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
      throw Error(y(314));
  }
  r !== null && r.delete(t), vc(e, n);
}
var yc;
yc = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || he.current) me = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return me = !1, jd(e, t, n);
    me = !!(e.flags & 131072);
  }
  else me = !1, U && t.flags & 1048576 && Sa(t, Gr, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Ir(e, t), e = t.pendingProps;
      var l = ln(t, ue.current);
      tn(t, n), l = Pi(null, t, r, e, l, n);
      var o = Ni();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, ve(r) ? (o = !0, Yr(t)) : o = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Si(t), l.updater = hl, t.stateNode = l, l._reactInternals = t, Ro(t, r, e, n), t = Do(null, t, r, !0, o, n)) : (t.tag = 0, U && o && mi(t), se(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Ir(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = bd(r), e = Re(r, e), l) {
          case 0:
            t = Oo(null, t, r, e, n);
            break e;
          case 1:
            t = Gu(null, t, r, e, n);
            break e;
          case 11:
            t = Yu(null, t, r, e, n);
            break e;
          case 14:
            t = Xu(null, t, r, Re(r.type, e), n);
            break e;
        }
        throw Error(y(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Re(r, l), Oo(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Re(r, l), Gu(e, t, r, l, n);
    case 3:
      e: {
        if (ec(t), e === null) throw Error(y(387));
        r = t.pendingProps, o = t.memoizedState, l = o.element, Na(e, t), qr(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
          l = an(Error(y(423)), t), t = Zu(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = an(Error(y(424)), t), t = Zu(e, t, r, n, l);
          break e;
        } else for (we = ct(t.stateNode.containerInfo.firstChild), ke = t, U = !0, Oe = null, n = xa(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (on(), r === l) {
            t = qe(e, t, n);
            break e;
          }
          se(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Aa(t), e === null && To(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, Co(r, l) ? i = null : o !== null && Co(r, o) && (t.flags |= 32), ba(e, t), se(e, t, i, n), t.child;
    case 6:
      return e === null && To(t), null;
    case 13:
      return tc(e, t, n);
    case 4:
      return Ei(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = un(t, null, r, n) : se(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Re(r, l), Yu(e, t, r, l, n);
    case 7:
      return se(e, t, t.pendingProps, n), t.child;
    case 8:
      return se(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return se(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, i = l.value, M(Zr, r._currentValue), r._currentValue = i, o !== null) if (je(o.value, i)) {
          if (o.children === l.children && !he.current) {
            t = qe(e, t, n);
            break e;
          }
        } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
          var u = o.dependencies;
          if (u !== null) {
            i = o.child;
            for (var s = u.firstContext; s !== null; ) {
              if (s.context === r) {
                if (o.tag === 1) {
                  s = Xe(-1, n & -n), s.tag = 2;
                  var a = o.updateQueue;
                  if (a !== null) {
                    a = a.shared;
                    var h = a.pending;
                    h === null ? s.next = s : (s.next = h.next, h.next = s), a.pending = s;
                  }
                }
                o.lanes |= n, s = o.alternate, s !== null && (s.lanes |= n), zo(
                  o.return,
                  n,
                  t
                ), u.lanes |= n;
                break;
              }
              s = s.next;
            }
          } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
          else if (o.tag === 18) {
            if (i = o.return, i === null) throw Error(y(341));
            i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), zo(i, n, t), i = o.sibling;
          } else i = o.child;
          if (i !== null) i.return = o;
          else for (i = o; i !== null; ) {
            if (i === t) {
              i = null;
              break;
            }
            if (o = i.sibling, o !== null) {
              o.return = i.return, i = o;
              break;
            }
            i = i.return;
          }
          o = i;
        }
        se(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, tn(t, n), l = Ae(l), r = r(l), t.flags |= 1, se(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = Re(r, t.pendingProps), l = Re(r.type, l), Xu(e, t, r, l, n);
    case 15:
      return Ja(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Re(r, l), Ir(e, t), t.tag = 1, ve(r) ? (e = !0, Yr(t)) : e = !1, tn(t, n), Xa(t, r, l), Ro(t, r, l, n), Do(null, t, r, !0, e, n);
    case 19:
      return nc(e, t, n);
    case 22:
      return qa(e, t, n);
  }
  throw Error(y(156, t.tag));
};
function gc(e, t) {
  return Ws(e, t);
}
function qd(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Pe(e, t, n, r) {
  return new qd(e, t, n, r);
}
function Fi(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function bd(e) {
  if (typeof e == "function") return Fi(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === ni) return 11;
    if (e === ri) return 14;
  }
  return 2;
}
function mt(e, t) {
  var n = e.alternate;
  return n === null ? (n = Pe(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Mr(e, t, n, r, l, o) {
  var i = 2;
  if (r = e, typeof e == "function") Fi(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else e: switch (e) {
    case $t:
      return At(n.children, l, o, t);
    case ti:
      i = 8, l |= 8;
      break;
    case to:
      return e = Pe(12, n, t, l | 2), e.elementType = to, e.lanes = o, e;
    case no:
      return e = Pe(13, n, t, l), e.elementType = no, e.lanes = o, e;
    case ro:
      return e = Pe(19, n, t, l), e.elementType = ro, e.lanes = o, e;
    case As:
      return gl(n, l, o, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Ps:
          i = 10;
          break e;
        case Ns:
          i = 9;
          break e;
        case ni:
          i = 11;
          break e;
        case ri:
          i = 14;
          break e;
        case tt:
          i = 16, r = null;
          break e;
      }
      throw Error(y(130, e == null ? e : typeof e, ""));
  }
  return t = Pe(i, n, t, l), t.elementType = e, t.type = r, t.lanes = o, t;
}
function At(e, t, n, r) {
  return e = Pe(7, e, r, t), e.lanes = n, e;
}
function gl(e, t, n, r) {
  return e = Pe(22, e, r, t), e.elementType = As, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Jl(e, t, n) {
  return e = Pe(6, e, null, t), e.lanes = n, e;
}
function ql(e, t, n) {
  return t = Pe(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function ep(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Rl(0), this.expirationTimes = Rl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Rl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function ji(e, t, n, r, l, o, i, u, s) {
  return e = new ep(e, t, n, u, s), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = Pe(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Si(o), e;
}
function tp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: jt, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function wc(e) {
  if (!e) return vt;
  e = e._reactInternals;
  e: {
    if (Dt(e) !== e || e.tag !== 1) throw Error(y(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ve(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(y(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ve(n)) return wa(e, n, t);
  }
  return t;
}
function kc(e, t, n, r, l, o, i, u, s) {
  return e = ji(n, r, !0, e, l, o, i, u, s), e.context = wc(null), n = e.current, r = ce(), l = pt(n), o = Xe(r, l), o.callback = t ?? null, ft(n, o, l), e.current.lanes = l, nr(e, l, r), ye(e, r), e;
}
function wl(e, t, n, r) {
  var l = t.current, o = ce(), i = pt(l);
  return n = wc(n), t.context === null ? t.context = n : t.pendingContext = n, t = Xe(o, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = ft(l, t, i), e !== null && (Me(e, l, i, o), zr(e, l, i)), i;
}
function il(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function is(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function $i(e, t) {
  is(e, t), (e = e.alternate) && is(e, t);
}
function np() {
  return null;
}
var Sc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Ui(e) {
  this._internalRoot = e;
}
kl.prototype.render = Ui.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(y(409));
  wl(e, t, null, null);
};
kl.prototype.unmount = Ui.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    It(function() {
      wl(null, e, null, null);
    }), t[Ze] = null;
  }
};
function kl(e) {
  this._internalRoot = e;
}
kl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = qs();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < rt.length && t !== 0 && t < rt[n].priority; n++) ;
    rt.splice(n, 0, e), n === 0 && ea(e);
  }
};
function Bi(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Sl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function us() {
}
function rp(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var a = il(i);
        o.call(a);
      };
    }
    var i = kc(t, r, e, 0, null, !1, !1, "", us);
    return e._reactRootContainer = i, e[Ze] = i.current, Kn(e.nodeType === 8 ? e.parentNode : e), It(), i;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var a = il(s);
      u.call(a);
    };
  }
  var s = ji(e, 0, !1, null, null, !1, !1, "", us);
  return e._reactRootContainer = s, e[Ze] = s.current, Kn(e.nodeType === 8 ? e.parentNode : e), It(function() {
    wl(t, s, n, r);
  }), s;
}
function El(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function() {
        var s = il(i);
        u.call(s);
      };
    }
    wl(t, i, e, l);
  } else i = rp(n, t, e, l, r);
  return il(i);
}
Zs = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Nn(t.pendingLanes);
        n !== 0 && (ii(t, n | 1), ye(t, K()), !(I & 6) && (cn = K() + 500, wt()));
      }
      break;
    case 13:
      It(function() {
        var r = Je(e, 1);
        if (r !== null) {
          var l = ce();
          Me(r, e, 1, l);
        }
      }), $i(e, 1);
  }
};
ui = function(e) {
  if (e.tag === 13) {
    var t = Je(e, 134217728);
    if (t !== null) {
      var n = ce();
      Me(t, e, 134217728, n);
    }
    $i(e, 134217728);
  }
};
Js = function(e) {
  if (e.tag === 13) {
    var t = pt(e), n = Je(e, t);
    if (n !== null) {
      var r = ce();
      Me(n, e, t, r);
    }
    $i(e, t);
  }
};
qs = function() {
  return O;
};
bs = function(e, t) {
  var n = O;
  try {
    return O = e, t();
  } finally {
    O = n;
  }
};
mo = function(e, t, n) {
  switch (t) {
    case "input":
      if (io(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = dl(r);
            if (!l) throw Error(y(90));
            zs(r), io(r, l);
          }
        }
      }
      break;
    case "textarea":
      Rs(e, n);
      break;
    case "select":
      t = n.value, t != null && Jt(e, !!n.multiple, t, !1);
  }
};
$s = Oi;
Us = It;
var lp = { usingClientEntryPoint: !1, Events: [lr, Vt, dl, Fs, js, Oi] }, Cn = { findFiberByHostInstance: Ct, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, op = { bundleType: Cn.bundleType, version: Cn.version, rendererPackageName: Cn.rendererPackageName, rendererConfig: Cn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: be.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Vs(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Cn.findFiberByHostInstance || np, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Cr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Cr.isDisabled && Cr.supportsFiber) try {
    sl = Cr.inject(op), He = Cr;
  } catch {
  }
}
Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = lp;
Ee.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Bi(t)) throw Error(y(200));
  return tp(e, t, null, n);
};
Ee.createRoot = function(e, t) {
  if (!Bi(e)) throw Error(y(299));
  var n = !1, r = "", l = Sc;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = ji(e, 1, !1, null, null, n, !1, r, l), e[Ze] = t.current, Kn(e.nodeType === 8 ? e.parentNode : e), new Ui(t);
};
Ee.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(y(188)) : (e = Object.keys(e).join(","), Error(y(268, e)));
  return e = Vs(t), e = e === null ? null : e.stateNode, e;
};
Ee.flushSync = function(e) {
  return It(e);
};
Ee.hydrate = function(e, t, n) {
  if (!Sl(t)) throw Error(y(200));
  return El(null, e, t, !0, n);
};
Ee.hydrateRoot = function(e, t, n) {
  if (!Bi(e)) throw Error(y(405));
  var r = n != null && n.hydratedSources || null, l = !1, o = "", i = Sc;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = kc(t, null, e, 1, n ?? null, l, !1, o, i), e[Ze] = t.current, Kn(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new kl(t);
};
Ee.render = function(e, t, n) {
  if (!Sl(t)) throw Error(y(200));
  return El(null, e, t, !1, n);
};
Ee.unmountComponentAtNode = function(e) {
  if (!Sl(e)) throw Error(y(40));
  return e._reactRootContainer ? (It(function() {
    El(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Ze] = null;
    });
  }), !0) : !1;
};
Ee.unstable_batchedUpdates = Oi;
Ee.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Sl(n)) throw Error(y(200));
  if (e == null || e._reactInternals === void 0) throw Error(y(38));
  return El(e, t, n, !1, r);
};
Ee.version = "18.3.1-next-f1338f8080-20240426";
function Ec() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ec);
    } catch (e) {
      console.error(e);
    }
}
Ec(), Es.exports = Ee;
var ip = Es.exports, _c, ss = ip;
_c = ss.createRoot, ss.hydrateRoot;
var Cc = { exports: {} }, up = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", sp = up, ap = sp;
function xc() {
}
function Pc() {
}
Pc.resetWarningCache = xc;
var cp = function() {
  function e(r, l, o, i, u, s) {
    if (s !== ap) {
      var a = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw a.name = "Invariant Violation", a;
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
    checkPropTypes: Pc,
    resetWarningCache: xc
  };
  return n.PropTypes = n, n;
};
Cc.exports = cp();
var fp = Cc.exports;
const S = /* @__PURE__ */ Yo(fp);
var Nc = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function n() {
      for (var o = "", i = 0; i < arguments.length; i++) {
        var u = arguments[i];
        u && (o = l(o, r(u)));
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
      var i = "";
      for (var u in o)
        t.call(o, u) && o[u] && (i = l(i, u));
      return i;
    }
    function l(o, i) {
      return i ? o ? o + " " + i : o + i : o;
    }
    e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
  })();
})(Nc);
var dp = Nc.exports;
const ee = /* @__PURE__ */ Yo(dp), _l = /* @__PURE__ */ x.forwardRef(({
  className: e,
  children: t,
  ...n
}, r) => /* @__PURE__ */ x.createElement("div", {
  className: ee("pgn__card-body", e),
  ref: r,
  ...n
}, t));
_l.propTypes = {
  /** Specifies the content of the component. */
  children: S.node,
  /** The class to append to the base element. */
  className: S.string
};
_l.defaultProps = {
  children: void 0,
  className: void 0
};
const as = "card", bl = ["primary", "secondary", "success", "danger", "warning", "info", "dark", "light"], pp = ["white", "muted"], Hi = /* @__PURE__ */ x.forwardRef(({
  prefix: e,
  className: t,
  bgColor: n,
  textColor: r,
  borderColor: l,
  hasBody: o = !1,
  children: i,
  as: u = "div",
  ...s
}, a) => {
  const h = ee(t, e ? `${e}-${as}` : as, n && `bg-${n}`, r && `text-${r}`, l && `border-${l}`);
  return /* @__PURE__ */ x.createElement(u, {
    ref: a,
    ...s,
    className: h
  }, o ? /* @__PURE__ */ x.createElement(_l, null, i) : i);
});
Hi.propTypes = {
  /** Prefix for component CSS classes. */
  prefix: S.string,
  /** Background color of the card. */
  bgColor: S.oneOf(bl),
  /** Text color of the card. */
  textColor: S.oneOf([...bl, ...pp]),
  /** Border color of the card. */
  borderColor: S.oneOf(bl),
  /** Determines whether the card should render its children inside a `CardBody` wrapper. */
  hasBody: S.bool,
  /** Set a custom element for this component. */
  as: S.elementType,
  /** Additional CSS class names to apply to the card element. */
  className: S.string,
  /** The content to render inside the card. */
  children: S.node
};
const Mt = /* @__PURE__ */ ae.createContext({});
function Vi({
  orientation: e,
  children: t,
  isLoading: n,
  variant: r
}) {
  return /* @__PURE__ */ x.createElement(Mt.Provider, {
    value: {
      orientation: e,
      isLoading: n,
      variant: r
    }
  }, t);
}
Vi.propTypes = {
  /** Specifies which orientation to use. */
  orientation: S.oneOf(["horizontal", "vertical"]),
  /** Specifies loading state. */
  isLoading: S.bool,
  /** Specifies content of the component. */
  children: S.node,
  /** Specifies `Card` style variant */
  variant: S.oneOf(["light", "dark", "muted"])
};
Vi.defaultProps = {
  orientation: "vertical",
  isLoading: !1,
  children: null,
  variant: "light"
};
const mp = x.createContext({}), Ac = !0;
function hp({ baseColor: e, highlightColor: t, width: n, height: r, borderRadius: l, circle: o, direction: i, duration: u, enableAnimation: s = Ac }) {
  const a = {};
  return i === "rtl" && (a["--animation-direction"] = "reverse"), typeof u == "number" && (a["--animation-duration"] = `${u}s`), s || (a["--pseudo-element-display"] = "none"), (typeof n == "string" || typeof n == "number") && (a.width = n), (typeof r == "string" || typeof r == "number") && (a.height = r), (typeof l == "string" || typeof l == "number") && (a.borderRadius = l), o && (a.borderRadius = "50%"), typeof e < "u" && (a["--base-color"] = e), typeof t < "u" && (a["--highlight-color"] = t), a;
}
function fn({ count: e = 1, wrapper: t, className: n, containerClassName: r, containerTestId: l, circle: o = !1, style: i, ...u }) {
  var s, a, h;
  const m = x.useContext(mp), p = { ...u };
  for (const [d, v] of Object.entries(u))
    typeof v > "u" && delete p[d];
  const g = {
    ...m,
    ...p,
    circle: o
  }, w = {
    ...i,
    ...hp(g)
  };
  let k = "react-loading-skeleton";
  n && (k += ` ${n}`);
  const D = (s = g.inline) !== null && s !== void 0 ? s : !1, f = [], c = Math.ceil(e);
  for (let d = 0; d < c; d++) {
    let v = w;
    if (c > e && d === c - 1) {
      const _ = (a = v.width) !== null && a !== void 0 ? a : "100%", P = e % 1, A = typeof _ == "number" ? _ * P : `calc(${_} * ${P})`;
      v = { ...v, width: A };
    }
    const E = x.createElement("span", { className: k, style: v, key: d }, "‌");
    D ? f.push(E) : f.push(x.createElement(
      x.Fragment,
      { key: d },
      E,
      x.createElement("br", null)
    ));
  }
  return x.createElement("span", { className: r, "data-testid": l, "aria-live": "polite", "aria-busy": (h = g.enableAnimation) !== null && h !== void 0 ? h : Ac }, t ? f.map((d, v) => x.createElement(t, { key: v }, d)) : f);
}
const vp = 20, Qi = /* @__PURE__ */ x.forwardRef(({
  actions: e,
  className: t,
  size: n,
  subtitle: r,
  title: l,
  skeletonHeight: o,
  skeletonWidth: i
}, u) => {
  const {
    isLoading: s
  } = ae.useContext(Mt), a = ae.useCallback((h) => {
    if (/* @__PURE__ */ x.isValidElement(h)) {
      const {
        children: m
      } = h.props, p = {
        size: n,
        children: Array.isArray(m) ? m.map(a) : a(m)
      };
      return /* @__PURE__ */ x.cloneElement(h, p);
    }
    return h;
  }, [n]);
  return s ? /* @__PURE__ */ x.createElement("div", {
    className: ee("pgn__card-header", t)
  }, /* @__PURE__ */ x.createElement(fn, {
    containerClassName: "pgn__card-header-loader",
    height: o,
    width: i
  })) : /* @__PURE__ */ x.createElement("div", {
    className: ee("pgn__card-header", t),
    ref: u
  }, /* @__PURE__ */ x.createElement("div", {
    className: "pgn__card-header-content"
  }, l && /* @__PURE__ */ x.createElement("div", {
    className: `pgn__card-header-title-${n}`
  }, l), r && /* @__PURE__ */ x.createElement("div", {
    className: `pgn__card-header-subtitle-${n}`
  }, r)), e && /* @__PURE__ */ x.createElement("div", {
    className: "pgn__card-header-actions"
  }, n !== "md" ? a(e) : e));
});
Qi.propTypes = {
  /** Optional node to render on the top right of the card header,
   *  i.e. ActionRow or a DropdownMenu.
   * */
  actions: S.node,
  /** The class name for the CardHeader component */
  className: S.string,
  /** The title for the CardHeader component */
  title: S.node,
  /** The size of the CardHeader component */
  size: S.oneOf(["sm", "md"]),
  /** The subtitle of the CardHeader component */
  subtitle: S.node,
  /** Specifies height of skeleton in loading state. */
  skeletonHeight: S.number,
  /** Specifies width of  skeleton in loading state. */
  skeletonWidth: S.number
};
Qi.defaultProps = {
  actions: null,
  className: null,
  size: "md",
  title: null,
  subtitle: null,
  skeletonHeight: vp,
  skeletonWidth: null
};
const Wi = /* @__PURE__ */ x.forwardRef(({
  className: e,
  ...t
}, n) => /* @__PURE__ */ x.createElement("div", {
  className: ee("pgn__card-divider", e),
  ref: n,
  ...t
}));
Wi.propTypes = {
  /** Specifies class name to append to the base element. */
  className: S.string
};
Wi.defaultProps = {
  className: void 0
};
const yp = 100, Ki = /* @__PURE__ */ x.forwardRef(({
  className: e,
  children: t,
  title: n,
  actions: r,
  muted: l,
  skeletonHeight: o,
  skeletonWidth: i
}, u) => {
  const {
    isLoading: s
  } = ae.useContext(Mt);
  return s ? /* @__PURE__ */ x.createElement("div", {
    className: ee("pgn__card-section", e, {
      "is-muted": l
    })
  }, /* @__PURE__ */ x.createElement(fn, {
    containerClassName: "pgn__card-section-loader",
    height: o,
    width: i
  })) : /* @__PURE__ */ x.createElement("div", {
    className: ee("pgn__card-section", e, {
      "is-muted": l
    }),
    ref: u
  }, n && /* @__PURE__ */ x.createElement("div", {
    className: "pgn__card-section-title"
  }, n), t, r && /* @__PURE__ */ x.createElement("div", {
    className: "pgn__card-section-actions"
  }, r));
});
Ki.propTypes = {
  /** Specifies class name to append to the base element. */
  className: S.string,
  /** Specifies contents of the component. */
  children: S.node,
  /** Specifies title of the `Section`. */
  title: S.node,
  /** Specifies node to render on the bottom right of the `Section` (i.e. `ActionRow`). */
  actions: S.node,
  /** Specifies whether to display `Section` with muted styling. */
  muted: S.bool,
  /** Specifies height of skeleton in loading state. */
  skeletonHeight: S.number,
  /** Specifies width of skeleton in loading state. */
  skeletonWidth: S.number
};
Ki.defaultProps = {
  children: null,
  className: void 0,
  title: void 0,
  actions: void 0,
  muted: !1,
  skeletonHeight: yp,
  skeletonWidth: void 0
};
const gp = 18, Yi = /* @__PURE__ */ x.forwardRef(({
  children: e,
  className: t,
  isStacked: n,
  textElement: r,
  skeletonHeight: l,
  skeletonWidth: o,
  orientation: i
}, u) => {
  const {
    orientation: s,
    isLoading: a
  } = ae.useContext(Mt), h = i || s, m = `pgn__card-footer ${h}${n ? "-stacked" : ""}`, p = `pgn__card-footer-text ${h}${n ? "-stacked" : ""}`;
  return a ? /* @__PURE__ */ x.createElement("div", {
    className: ee(t, m)
  }, /* @__PURE__ */ x.createElement(fn, {
    containerClassName: "pgn__card-footer-loader",
    height: l,
    width: o
  })) : /* @__PURE__ */ x.createElement("div", {
    className: ee(t, m),
    ref: u
  }, r && /* @__PURE__ */ x.createElement("div", {
    className: p
  }, r), e);
});
Yi.propTypes = {
  /** Specifies contents of the component. */
  children: S.node,
  /** Specifies class name to append to the base element. */
  className: S.string,
  /** Optional node to display near actions. Should be either a plain text or an element containing text (e.g. link). */
  textElement: S.node,
  /** Specifies whether to use stacked variant. */
  isStacked: S.bool,
  /** Specifies which orientation to use. This prop will override context value if provided. */
  orientation: S.oneOf(["horizontal", "vertical"]),
  /** Specifies height of skeleton in loading state. */
  skeletonHeight: S.number,
  /** Specifies width of skeleton in loading state. */
  skeletonWidth: S.number
};
Yi.defaultProps = {
  children: null,
  className: void 0,
  textElement: void 0,
  isStacked: !1,
  orientation: void 0,
  skeletonHeight: gp,
  skeletonWidth: void 0
};
const Tc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXwAAACMCAYAAAB/AhJnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAH6SURBVHgB7dRBEYBADACxwuDf5j0QUXywiYhc7zk7APzd3gNAgvABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIp4BaNpp2Q/3/wfPkGyXOQAAAABJRU5ErkJggg==", wp = 140, kp = 41, Xi = /* @__PURE__ */ x.forwardRef(({
  src: e,
  fallbackSrc: t,
  srcAlt: n,
  logoSrc: r,
  fallbackLogoSrc: l,
  logoAlt: o,
  skeletonHeight: i,
  skeletonWidth: u,
  logoSkeleton: s,
  logoSkeletonHeight: a,
  logoSkeletonWidth: h,
  className: m,
  imageLoadingType: p
}, g) => {
  const {
    orientation: w,
    isLoading: k
  } = ae.useContext(Mt), [D, f] = ae.useState(!1), [c, d] = ae.useState(!1), v = `pgn__card-wrapper-image-cap ${w}`;
  if (k)
    return /* @__PURE__ */ x.createElement("div", {
      className: ee(v, m),
      "data-testid": "image-loader-wrapper"
    }, /* @__PURE__ */ x.createElement(fn, {
      containerClassName: "pgn__card-image-cap-loader",
      height: w === "horizontal" ? "100%" : i,
      width: u
    }), s && /* @__PURE__ */ x.createElement(fn, {
      containerClassName: "pgn__card-logo-cap",
      height: a,
      width: h
    }));
  const E = (_, P, A) => {
    const {
      currentTarget: F
    } = _;
    if (!P || F.src.endsWith(P)) {
      A === "imageCap" ? F.src = Tc : d(!1);
      return;
    }
    F.src = P;
  };
  return /* @__PURE__ */ x.createElement("div", {
    className: ee(m, v),
    ref: g
  }, !!e && /* @__PURE__ */ x.createElement("img", {
    className: ee("pgn__card-image-cap", {
      show: D
    }),
    src: e,
    onError: (_) => E(_, t, "imageCap"),
    onLoad: () => f(!0),
    alt: n,
    loading: p
  }), !!r && /* @__PURE__ */ x.createElement("img", {
    className: ee("pgn__card-logo-cap", {
      show: c
    }),
    src: r,
    onError: (_) => E(_, l, "logoCap"),
    onLoad: () => d(!0),
    alt: o,
    loading: p
  }));
});
Xi.propTypes = {
  /** Specifies class name to append to the base element. */
  className: S.string,
  /** Specifies image src. */
  src: S.string,
  /** Specifies fallback image src. */
  fallbackSrc: S.string,
  /** Specifies image alt text. */
  srcAlt: S.string,
  /** Specifies logo src to put on top of the image. */
  logoSrc: S.string,
  /** Specifies fallback image logo src. */
  fallbackLogoSrc: S.string,
  /** Specifies logo image alt text. */
  logoAlt: S.string,
  /** Specifies height of Image skeleton in loading state. */
  skeletonHeight: S.number,
  /** Specifies width of Image skeleton in loading state. */
  skeletonWidth: S.number,
  /** Specifies whether the cap should be displayed during loading. */
  logoSkeleton: S.bool,
  /** Specifies height of Logo skeleton in loading state. */
  logoSkeletonHeight: S.number,
  /** Specifies width of Logo skeleton in loading state. */
  logoSkeletonWidth: S.number,
  /** Specifies loading type for images */
  imageLoadingType: S.oneOf(["eager", "lazy"])
};
Xi.defaultProps = {
  src: void 0,
  fallbackSrc: Tc,
  logoSrc: void 0,
  fallbackLogoSrc: void 0,
  className: void 0,
  srcAlt: void 0,
  logoAlt: void 0,
  skeletonHeight: wp,
  logoSkeleton: !1,
  logoSkeletonHeight: kp,
  skeletonWidth: void 0,
  logoSkeletonWidth: void 0,
  imageLoadingType: "eager"
};
let cs = 0;
const Sp = (e = "id") => (cs += 1, `${e}${cs}`);
let Zt = /* @__PURE__ */ function(e) {
  return e.MOVED = "MOVED", e.REMOVED = "REMOVED", e.FORMAT = "FORMAT", e.MOVED_AND_FORMAT = "MOVED_AND_FORMAT", e;
}({});
function zc(e, t, n) {
  class r extends x.Component {
    constructor(o) {
      super(o), this.transformProps = this.transformProps.bind(this);
    }
    warn(o) {
    }
    transformProps(o, i) {
      if (n[i] === void 0)
        return o[i] = this.props[i], o;
      const {
        deprType: u,
        newName: s,
        expect: a,
        transform: h,
        message: m
      } = n[i];
      switch (u) {
        case Zt.MOVED:
          this.warn(`${t}: The prop '${i}' has been moved to '${s}'.`), o[s] = this.props[i];
          break;
        case Zt.REMOVED:
          this.warn(`${t}: The prop '${i}' has been removed. '${m}'`);
          break;
        case Zt.FORMAT:
          a(this.props[i]) ? o[i] = this.props[i] : (this.warn(`${t}: The prop '${i}' expects a new format. ${m}`), o[i] = h(this.props[i], this.props));
          break;
        case Zt.MOVED_AND_FORMAT: {
          const p = this.props[i];
          let g = `${t}: The prop '${i}' has been moved to '${s}'`;
          a && !a(p) && (g += " and expects a new format"), g += m ? `. ${m}` : "", this.warn(g), o[s] = h ? h(p, this.props) : p;
          break;
        }
        default:
          o[i] = this.props[i];
          break;
      }
      return o;
    }
    render() {
      const {
        children: o,
        ...i
      } = Object.keys(this.props).reduce(this.transformProps, {});
      return /* @__PURE__ */ x.createElement(e, {
        ...i
      }, this.props.children || o);
    }
  }
  return (
    // eslint-disable-next-line react/static-property-placement
    bi(r, "displayName", `withDeprecatedProps(${t})`), r
  );
}
function Gi({
  src: e,
  id: t,
  className: n,
  hidden: r,
  screenReaderText: l,
  svgAttrs: o,
  size: i,
  ...u
}) {
  if (e) {
    const s = o["aria-label"] || o["aria-labelledby"], a = {
      ...o
    };
    return s || (a["aria-label"] = void 0, a["aria-hidden"] = !0), /* @__PURE__ */ x.createElement("span", {
      className: ee("pgn__icon", {
        [`pgn__icon__${i}`]: !!i
      }, n),
      id: t,
      ...u
    }, /* @__PURE__ */ x.createElement(e, {
      role: "img",
      focusable: !1,
      ...a
    }), l && /* @__PURE__ */ x.createElement("span", {
      className: "sr-only"
    }, l));
  }
  return /* @__PURE__ */ x.createElement(x.Fragment, null, /* @__PURE__ */ x.createElement("span", {
    id: t || Sp("Icon"),
    className: n,
    "aria-hidden": r
  }), l && /* @__PURE__ */ x.createElement("span", {
    className: "sr-only"
  }, l));
}
Gi.propTypes = {
  /**
   * An icon component to render.
   * Example import of a Paragon icon component: `import { Check } from '@openedx/paragon/icons';`
   */
  src: S.elementType,
  /** HTML element attributes to pass through to the underlying svg element */
  svgAttrs: S.shape({
    "aria-label": S.string,
    "aria-labelledby": S.string
  }),
  /**
   * the `id` property of the Icon element, by default this value is generated
   * with the `newId` function with the `prefix` of `Icon`.
   */
  id: S.string,
  /** The size of the icon. */
  size: S.oneOf(["xs", "sm", "md", "lg"]),
  /** A class name that will define what the Icon looks like. */
  className: S.string,
  /**
   * a boolean that determines the value of `aria-hidden` attribute on the Icon span,
   * this value is `true` by default.
   */
  hidden: S.bool,
  /**
   * a string or an element that will be used on a secondary span leveraging the `sr-only` style
   * for screenreader only text, this value is `undefined` by default. This value is recommended for use unless
   * the Icon is being used in a way that is purely decorative or provides no additional context for screen
   * reader users. This field should be thought of the same way an `alt` attribute would be used for `image` tags.
   */
  screenReaderText: S.oneOfType([S.string, S.element])
};
Gi.defaultProps = {
  src: null,
  svgAttrs: {},
  id: void 0,
  hidden: !0,
  screenReaderText: void 0,
  size: void 0,
  className: void 0
};
const Ep = zc(Gi, "Icon", {
  className: {
    deprType: Zt.FORMAT,
    expect: (e) => typeof e == "string",
    transform: (e) => Array.isArray(e) ? e.join(" ") : e,
    message: "It should be a string."
  }
}), Zi = /* @__PURE__ */ x.forwardRef(({
  className: e,
  children: t,
  variant: n,
  icon: r,
  title: l,
  actions: o,
  ...i
}, u) => {
  const {
    isLoading: s
  } = ae.useContext(Mt);
  return s ? /* @__PURE__ */ x.createElement("div", {
    className: ee("pgn__card-status", e),
    "data-testid": "card-status-skeleton",
    ref: u
  }, /* @__PURE__ */ x.createElement(fn, null)) : /* @__PURE__ */ x.createElement("div", {
    className: ee("pgn__card-status", `pgn__card-status__${n}`, e),
    ref: u,
    ...i
  }, /* @__PURE__ */ x.createElement("div", {
    className: "pgn__card-status__content"
  }, r && /* @__PURE__ */ x.createElement(Ep, {
    className: "pgn__card-status__content-icon",
    src: r
  }), /* @__PURE__ */ x.createElement("div", {
    className: "pgn__card-status__message-content"
  }, l && /* @__PURE__ */ x.createElement("div", {
    className: "pgn__card-status__heading"
  }, l), t)), !!o && /* @__PURE__ */ x.createElement("div", {
    className: "pgn__card-status__actions"
  }, o));
});
Zi.propTypes = {
  /** Specifies the content of the component. */
  children: S.node.isRequired,
  /** The class to append to the base element. */
  className: S.string,
  /** Icon that will be shown in the top-left corner. */
  icon: S.func,
  /** Specifies variant to use. */
  variant: S.oneOf(["primary", "success", "danger", "warning"]),
  /** Specifies title for the `Card.Status`. */
  title: S.oneOfType([S.element, S.string]),
  /** Specifies any optional actions, e.g. button(s). */
  actions: S.node
};
Zi.defaultProps = {
  className: void 0,
  icon: void 0,
  variant: "warning",
  title: void 0,
  actions: void 0
};
const _p = ["light", "dark", "muted"], Ji = /* @__PURE__ */ x.forwardRef(({
  orientation: e,
  isLoading: t,
  className: n,
  isClickable: r,
  muted: l,
  variant: o,
  ...i
}, u) => {
  const s = l ? "muted" : o;
  return /* @__PURE__ */ x.createElement(Vi, {
    orientation: e,
    isLoading: t,
    variant: s
  }, /* @__PURE__ */ x.createElement(Hi, {
    ...i,
    className: ee(n, "pgn__card", {
      horizontal: e === "horizontal",
      clickable: r,
      [`pgn__card-${s}`]: s
    }),
    ref: u,
    tabIndex: r ? 0 : -1
  }));
});
Ji.propTypes = {
  /** Specifies class name to append to the base element. */
  className: S.string,
  /** Specifies which orientation to use. */
  orientation: S.oneOf(["vertical", "horizontal"]),
  /** Specifies whether the `Card` is clickable, if `true` appropriate `hover` and `focus` styling will be added. */
  isClickable: S.bool,
  /** Specifies loading state. */
  isLoading: S.bool,
  /** Specifies `Card` style variant. */
  variant: S.oneOf(_p),
  /** **Deprecated**. Specifies whether `Card` uses `muted` variant. Use `variant="muted"` instead. */
  muted: S.bool
};
Ji.defaultProps = {
  ...Hi.defaultProps,
  className: void 0,
  orientation: "vertical",
  isClickable: !1,
  variant: "light",
  isLoading: !1
};
const Fe = zc(Ji, "Card", {
  muted: {
    deprType: Zt.REMOVED,
    message: 'Use "variant" prop instead, i.e. variant="muted"'
  }
});
Fe.Status = Zi;
Fe.Header = Qi;
Fe.Divider = Wi;
Fe.Section = Ki;
Fe.Footer = Yi;
Fe.ImageCap = Xi;
Fe.Context = Mt;
Fe.Body = _l;
const Cp = ({
  displayName: e,
  imageUrl: t,
  markers: n
}) => {
  const [r, l] = ae.useState(!1), [o, i] = ae.useState(null), u = (p) => {
    i(o === p ? null : p);
  }, s = (p) => `marker-${p}`, a = (p) => `header-${p}`, h = (p, g) => {
    (p.key === "Enter" || p.key === " ") && (p.preventDefault(), u(g));
  }, m = (p, g) => {
    const w = o === p.id;
    return /* @__PURE__ */ oe.jsxs("div", { children: [
      /* @__PURE__ */ oe.jsx(
        "div",
        {
          role: "button",
          tabIndex: 0,
          className: `image-commentary-marker ${s(p.type)} ${w ? "active" : ""}`,
          style: {
            left: `${p.x}%`,
            top: `${p.y}%`
          },
          onClick: () => u(p.id),
          onKeyDown: (k) => h(k, p.id),
          "aria-label": `View commentary: ${p.label}`,
          children: g + 1
        }
      ),
      w && /* @__PURE__ */ oe.jsxs(
        "div",
        {
          className: "custom-popover",
          style: {
            left: `${p.x}%`,
            top: `${p.y}%`
          },
          children: [
            /* @__PURE__ */ oe.jsx("div", { className: `popover-header ${a(p.type)}`, children: p.label }),
            /* @__PURE__ */ oe.jsx("div", { className: "popover-body", children: p.commentary })
          ]
        }
      )
    ] }, p.id);
  };
  return /* @__PURE__ */ oe.jsx("div", { className: "image-commentary-student-view", children: /* @__PURE__ */ oe.jsxs(Fe, { children: [
    e && /* @__PURE__ */ oe.jsx(Fe.Header, { title: e }),
    /* @__PURE__ */ oe.jsxs(Fe.Section, { children: [
      t ? /* @__PURE__ */ oe.jsxs("div", { className: "image-commentary-container", children: [
        /* @__PURE__ */ oe.jsx(
          "img",
          {
            src: t,
            alt: e,
            onLoad: () => l(!0)
          }
        ),
        r && n.map((p, g) => m(p, g))
      ] }) : /* @__PURE__ */ oe.jsx("div", { className: "text-center p-4 bg-light rounded", children: /* @__PURE__ */ oe.jsx("p", { className: "text-muted mb-0", children: "No image configured" }) }),
      n.length === 0 && t && /* @__PURE__ */ oe.jsx("p", { className: "text-muted text-center mt-3 mb-0", children: "No commentary markers added yet" })
    ] })
  ] }) });
}, Pp = (e, t) => {
  _c(e).render(
    /* @__PURE__ */ oe.jsxs(ae.StrictMode, { children: [
      /* @__PURE__ */ oe.jsx(
        Cp,
        {
          displayName: t.displayName,
          imageUrl: t.imageUrl,
          markers: t.markers
        }
      ),
      "    "
    ] })
  );
};
export {
  Pp as renderBlock
};
//# sourceMappingURL=student-ui.js.map
