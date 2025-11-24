function El(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var rs = { exports: {} }, sr = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Tu = Object.getOwnPropertySymbols, jc = Object.prototype.hasOwnProperty, bc = Object.prototype.propertyIsEnumerable;
function zc(e) {
  if (e == null)
    throw new TypeError("Object.assign cannot be called with null or undefined");
  return Object(e);
}
function Gc() {
  try {
    if (!Object.assign)
      return !1;
    var e = new String("abc");
    if (e[5] = "de", Object.getOwnPropertyNames(e)[0] === "5")
      return !1;
    for (var t = {}, n = 0; n < 10; n++)
      t["_" + String.fromCharCode(n)] = n;
    var r = Object.getOwnPropertyNames(t).map(function(o) {
      return t[o];
    });
    if (r.join("") !== "0123456789")
      return !1;
    var i = {};
    return "abcdefghijklmnopqrst".split("").forEach(function(o) {
      i[o] = o;
    }), Object.keys(Object.assign({}, i)).join("") === "abcdefghijklmnopqrst";
  } catch {
    return !1;
  }
}
var is = Gc() ? Object.assign : function(e, t) {
  for (var n, r = zc(e), i, o = 1; o < arguments.length; o++) {
    n = Object(arguments[o]);
    for (var l in n)
      jc.call(n, l) && (r[l] = n[l]);
    if (Tu) {
      i = Tu(n);
      for (var u = 0; u < i.length; u++)
        bc.call(n, i[u]) && (r[i[u]] = n[i[u]]);
    }
  }
  return r;
}, os = { exports: {} }, H = {};
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wl = is, sn = 60103, ls = 60106;
H.Fragment = 60107;
H.StrictMode = 60108;
H.Profiler = 60114;
var us = 60109, as = 60110, ss = 60112;
H.Suspense = 60113;
var fs = 60115, cs = 60116;
if (typeof Symbol == "function" && Symbol.for) {
  var Le = Symbol.for;
  sn = Le("react.element"), ls = Le("react.portal"), H.Fragment = Le("react.fragment"), H.StrictMode = Le("react.strict_mode"), H.Profiler = Le("react.profiler"), us = Le("react.provider"), as = Le("react.context"), ss = Le("react.forward_ref"), H.Suspense = Le("react.suspense"), fs = Le("react.memo"), cs = Le("react.lazy");
}
var _u = typeof Symbol == "function" && Symbol.iterator;
function Vc(e) {
  return e === null || typeof e != "object" ? null : (e = _u && e[_u] || e["@@iterator"], typeof e == "function" ? e : null);
}
function fr(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var ds = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, ps = {};
function fn(e, t, n) {
  this.props = e, this.context = t, this.refs = ps, this.updater = n || ds;
}
fn.prototype.isReactComponent = {};
fn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error(fr(85));
  this.updater.enqueueSetState(this, e, t, "setState");
};
fn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function hs() {
}
hs.prototype = fn.prototype;
function Sl(e, t, n) {
  this.props = e, this.context = t, this.refs = ps, this.updater = n || ds;
}
var xl = Sl.prototype = new hs();
xl.constructor = Sl;
wl(xl, fn.prototype);
xl.isPureReactComponent = !0;
var Tl = { current: null }, ms = Object.prototype.hasOwnProperty, vs = { key: !0, ref: !0, __self: !0, __source: !0 };
function ys(e, t, n) {
  var r, i = {}, o = null, l = null;
  if (t != null) for (r in t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (o = "" + t.key), t) ms.call(t, r) && !vs.hasOwnProperty(r) && (i[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) i.children = n;
  else if (1 < u) {
    for (var a = Array(u), s = 0; s < u; s++) a[s] = arguments[s + 2];
    i.children = a;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) i[r] === void 0 && (i[r] = u[r]);
  return { $$typeof: sn, type: e, key: o, ref: l, props: i, _owner: Tl.current };
}
function $c(e, t) {
  return { $$typeof: sn, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function _l(e) {
  return typeof e == "object" && e !== null && e.$$typeof === sn;
}
function Wc(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Pu = /\/+/g;
function Wi(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Wc("" + e.key) : t.toString(36);
}
function Mr(e, t, n, r, i) {
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
        case sn:
        case ls:
          l = !0;
      }
  }
  if (l) return l = e, i = i(l), e = r === "" ? "." + Wi(l, 0) : r, Array.isArray(i) ? (n = "", e != null && (n = e.replace(Pu, "$&/") + "/"), Mr(i, t, n, "", function(s) {
    return s;
  })) : i != null && (_l(i) && (i = $c(i, n + (!i.key || l && l.key === i.key ? "" : ("" + i.key).replace(Pu, "$&/") + "/") + e)), t.push(i)), 1;
  if (l = 0, r = r === "" ? "." : r + ":", Array.isArray(e)) for (var u = 0; u < e.length; u++) {
    o = e[u];
    var a = r + Wi(o, u);
    l += Mr(o, t, n, a, i);
  }
  else if (a = Vc(e), typeof a == "function") for (e = a.call(e), u = 0; !(o = e.next()).done; ) o = o.value, a = r + Wi(o, u++), l += Mr(o, t, n, a, i);
  else if (o === "object") throw t = "" + e, Error(fr(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t));
  return l;
}
function Er(e, t, n) {
  if (e == null) return e;
  var r = [], i = 0;
  return Mr(e, r, "", "", function(o) {
    return t.call(n, o, i++);
  }), r;
}
function Xc(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), e._status = 0, e._result = t, t.then(function(n) {
      e._status === 0 && (n = n.default, e._status = 1, e._result = n);
    }, function(n) {
      e._status === 0 && (e._status = 2, e._result = n);
    });
  }
  if (e._status === 1) return e._result;
  throw e._result;
}
var gs = { current: null };
function Qe() {
  var e = gs.current;
  if (e === null) throw Error(fr(321));
  return e;
}
var Qc = { ReactCurrentDispatcher: gs, ReactCurrentBatchConfig: { transition: 0 }, ReactCurrentOwner: Tl, IsSomeRendererActing: { current: !1 }, assign: wl };
H.Children = { map: Er, forEach: function(e, t, n) {
  Er(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Er(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Er(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!_l(e)) throw Error(fr(143));
  return e;
} };
H.Component = fn;
H.PureComponent = Sl;
H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Qc;
H.cloneElement = function(e, t, n) {
  if (e == null) throw Error(fr(267, e));
  var r = wl({}, e.props), i = e.key, o = e.ref, l = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, l = Tl.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (a in t) ms.call(t, a) && !vs.hasOwnProperty(a) && (r[a] = t[a] === void 0 && u !== void 0 ? u[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    u = Array(a);
    for (var s = 0; s < a; s++) u[s] = arguments[s + 2];
    r.children = u;
  }
  return {
    $$typeof: sn,
    type: e.type,
    key: i,
    ref: o,
    props: r,
    _owner: l
  };
};
H.createContext = function(e, t) {
  return t === void 0 && (t = null), e = { $$typeof: as, _calculateChangedBits: t, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null }, e.Provider = { $$typeof: us, _context: e }, e.Consumer = e;
};
H.createElement = ys;
H.createFactory = function(e) {
  var t = ys.bind(null, e);
  return t.type = e, t;
};
H.createRef = function() {
  return { current: null };
};
H.forwardRef = function(e) {
  return { $$typeof: ss, render: e };
};
H.isValidElement = _l;
H.lazy = function(e) {
  return { $$typeof: cs, _payload: { _status: -1, _result: e }, _init: Xc };
};
H.memo = function(e, t) {
  return { $$typeof: fs, type: e, compare: t === void 0 ? null : t };
};
H.useCallback = function(e, t) {
  return Qe().useCallback(e, t);
};
H.useContext = function(e, t) {
  return Qe().useContext(e, t);
};
H.useDebugValue = function() {
};
H.useEffect = function(e, t) {
  return Qe().useEffect(e, t);
};
H.useImperativeHandle = function(e, t, n) {
  return Qe().useImperativeHandle(e, t, n);
};
H.useLayoutEffect = function(e, t) {
  return Qe().useLayoutEffect(e, t);
};
H.useMemo = function(e, t) {
  return Qe().useMemo(e, t);
};
H.useReducer = function(e, t, n) {
  return Qe().useReducer(e, t, n);
};
H.useRef = function(e) {
  return Qe().useRef(e);
};
H.useState = function(e) {
  return Qe().useState(e);
};
H.version = "17.0.2";
os.exports = H;
var le = os.exports;
const be = /* @__PURE__ */ El(le);
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zc = le, Es = 60103;
sr.Fragment = 60107;
if (typeof Symbol == "function" && Symbol.for) {
  var Cu = Symbol.for;
  Es = Cu("react.element"), sr.Fragment = Cu("react.fragment");
}
var Yc = Zc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Kc = Object.prototype.hasOwnProperty, Jc = { key: !0, ref: !0, __self: !0, __source: !0 };
function ws(e, t, n) {
  var r, i = {}, o = null, l = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (l = t.ref);
  for (r in t) Kc.call(t, r) && !Jc.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) i[r] === void 0 && (i[r] = t[r]);
  return { $$typeof: Es, type: e, key: o, ref: l, props: i, _owner: Yc.current };
}
sr.jsx = ws;
sr.jsxs = ws;
rs.exports = sr;
var Q = rs.exports, Ss = { exports: {} }, Oe = {}, xs = { exports: {} }, Ts = {};
/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  var t, n, r, i;
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
  if (typeof window > "u" || typeof MessageChannel != "function") {
    var a = null, s = null, p = function() {
      if (a !== null) try {
        var x = e.unstable_now();
        a(!0, x), a = null;
      } catch (I) {
        throw setTimeout(p, 0), I;
      }
    };
    t = function(x) {
      a !== null ? setTimeout(t, 0, x) : (a = x, setTimeout(p, 0));
    }, n = function(x, I) {
      s = setTimeout(x, I);
    }, r = function() {
      clearTimeout(s);
    }, e.unstable_shouldYield = function() {
      return !1;
    }, i = e.unstable_forceFrameRate = function() {
    };
  } else {
    var y = window.setTimeout, h = window.clearTimeout;
    if (typeof console < "u") {
      var E = window.cancelAnimationFrame;
      typeof window.requestAnimationFrame != "function" && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), typeof E != "function" && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
    }
    var T = !1, w = null, d = -1, f = 5, c = 0;
    e.unstable_shouldYield = function() {
      return e.unstable_now() >= c;
    }, i = function() {
    }, e.unstable_forceFrameRate = function(x) {
      0 > x || 125 < x ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : f = 0 < x ? Math.floor(1e3 / x) : 5;
    };
    var m = new MessageChannel(), v = m.port2;
    m.port1.onmessage = function() {
      if (w !== null) {
        var x = e.unstable_now();
        c = x + f;
        try {
          w(!0, x) ? v.postMessage(null) : (T = !1, w = null);
        } catch (I) {
          throw v.postMessage(null), I;
        }
      } else T = !1;
    }, t = function(x) {
      w = x, T || (T = !0, v.postMessage(null));
    }, n = function(x, I) {
      d = y(function() {
        x(e.unstable_now());
      }, I);
    }, r = function() {
      h(d), d = -1;
    };
  }
  function C(x, I) {
    var R = x.length;
    x.push(I);
    e: for (; ; ) {
      var V = R - 1 >>> 1, J = x[V];
      if (J !== void 0 && 0 < L(J, I)) x[V] = I, x[R] = J, R = V;
      else break e;
    }
  }
  function S(x) {
    return x = x[0], x === void 0 ? null : x;
  }
  function O(x) {
    var I = x[0];
    if (I !== void 0) {
      var R = x.pop();
      if (R !== I) {
        x[0] = R;
        e: for (var V = 0, J = x.length; V < J; ) {
          var yt = 2 * (V + 1) - 1, gt = x[yt], yn = yt + 1, Dt = x[yn];
          if (gt !== void 0 && 0 > L(gt, R)) Dt !== void 0 && 0 > L(Dt, gt) ? (x[V] = Dt, x[yn] = R, V = yn) : (x[V] = gt, x[yt] = R, V = yt);
          else if (Dt !== void 0 && 0 > L(Dt, R)) x[V] = Dt, x[yn] = R, V = yn;
          else break e;
        }
      }
      return I;
    }
    return null;
  }
  function L(x, I) {
    var R = x.sortIndex - I.sortIndex;
    return R !== 0 ? R : x.id - I.id;
  }
  var N = [], K = [], zi = 1, xe = null, ne = 3, gr = !1, vt = !1, vn = !1;
  function Gi(x) {
    for (var I = S(K); I !== null; ) {
      if (I.callback === null) O(K);
      else if (I.startTime <= x) O(K), I.sortIndex = I.expirationTime, C(N, I);
      else break;
      I = S(K);
    }
  }
  function Vi(x) {
    if (vn = !1, Gi(x), !vt) if (S(N) !== null) vt = !0, t($i);
    else {
      var I = S(K);
      I !== null && n(Vi, I.startTime - x);
    }
  }
  function $i(x, I) {
    vt = !1, vn && (vn = !1, r()), gr = !0;
    var R = ne;
    try {
      for (Gi(I), xe = S(N); xe !== null && (!(xe.expirationTime > I) || x && !e.unstable_shouldYield()); ) {
        var V = xe.callback;
        if (typeof V == "function") {
          xe.callback = null, ne = xe.priorityLevel;
          var J = V(xe.expirationTime <= I);
          I = e.unstable_now(), typeof J == "function" ? xe.callback = J : xe === S(N) && O(N), Gi(I);
        } else O(N);
        xe = S(N);
      }
      if (xe !== null) var yt = !0;
      else {
        var gt = S(K);
        gt !== null && n(Vi, gt.startTime - I), yt = !1;
      }
      return yt;
    } finally {
      xe = null, ne = R, gr = !1;
    }
  }
  var Uc = i;
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(x) {
    x.callback = null;
  }, e.unstable_continueExecution = function() {
    vt || gr || (vt = !0, t($i));
  }, e.unstable_getCurrentPriorityLevel = function() {
    return ne;
  }, e.unstable_getFirstCallbackNode = function() {
    return S(N);
  }, e.unstable_next = function(x) {
    switch (ne) {
      case 1:
      case 2:
      case 3:
        var I = 3;
        break;
      default:
        I = ne;
    }
    var R = ne;
    ne = I;
    try {
      return x();
    } finally {
      ne = R;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = Uc, e.unstable_runWithPriority = function(x, I) {
    switch (x) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        x = 3;
    }
    var R = ne;
    ne = x;
    try {
      return I();
    } finally {
      ne = R;
    }
  }, e.unstable_scheduleCallback = function(x, I, R) {
    var V = e.unstable_now();
    switch (typeof R == "object" && R !== null ? (R = R.delay, R = typeof R == "number" && 0 < R ? V + R : V) : R = V, x) {
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
    return J = R + J, x = { id: zi++, callback: I, priorityLevel: x, startTime: R, expirationTime: J, sortIndex: -1 }, R > V ? (x.sortIndex = R, C(K, x), S(N) === null && x === S(K) && (vn ? r() : vn = !0, n(Vi, R - V))) : (x.sortIndex = J, C(N, x), vt || gr || (vt = !0, t($i))), x;
  }, e.unstable_wrapCallback = function(x) {
    var I = ne;
    return function() {
      var R = ne;
      ne = I;
      try {
        return x.apply(this, arguments);
      } finally {
        ne = R;
      }
    };
  };
})(Ts);
xs.exports = Ts;
var qc = xs.exports;
/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vi = le, b = is, Z = qc;
function g(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
if (!vi) throw Error(g(227));
var _s = /* @__PURE__ */ new Set(), Qn = {};
function Lt(e, t) {
  nn(e, t), nn(e + "Capture", t);
}
function nn(e, t) {
  for (Qn[e] = t, e = 0; e < t.length; e++) _s.add(t[e]);
}
var Xe = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ed = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Nu = Object.prototype.hasOwnProperty, Ou = {}, ku = {};
function td(e) {
  return Nu.call(ku, e) ? !0 : Nu.call(Ou, e) ? !1 : ed.test(e) ? ku[e] = !0 : (Ou[e] = !0, !1);
}
function nd(e, t, n, r) {
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
function rd(e, t, n, r) {
  if (t === null || typeof t > "u" || nd(e, t, n, r)) return !0;
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
function pe(e, t, n, r, i, o, l) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = l;
}
var te = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  te[e] = new pe(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  te[t] = new pe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  te[e] = new pe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  te[e] = new pe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  te[e] = new pe(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  te[e] = new pe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  te[e] = new pe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  te[e] = new pe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  te[e] = new pe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Pl = /[\-:]([a-z])/g;
function Cl(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Pl,
    Cl
  );
  te[t] = new pe(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Pl, Cl);
  te[t] = new pe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Pl, Cl);
  te[t] = new pe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  te[e] = new pe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
te.xlinkHref = new pe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  te[e] = new pe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Nl(e, t, n, r) {
  var i = te.hasOwnProperty(t) ? te[t] : null, o = i !== null ? i.type === 0 : r ? !1 : !(!(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N");
  o || (rd(t, n, i, r) && (n = null), r || i === null ? td(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Rt = vi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, In = 60103, St = 60106, Ye = 60107, Ol = 60108, Dn = 60114, kl = 60109, Il = 60110, yi = 60112, Fn = 60113, $r = 60120, gi = 60115, Ll = 60116, Rl = 60121, Ml = 60128, Ps = 60129, Al = 60130, So = 60131;
if (typeof Symbol == "function" && Symbol.for) {
  var X = Symbol.for;
  In = X("react.element"), St = X("react.portal"), Ye = X("react.fragment"), Ol = X("react.strict_mode"), Dn = X("react.profiler"), kl = X("react.provider"), Il = X("react.context"), yi = X("react.forward_ref"), Fn = X("react.suspense"), $r = X("react.suspense_list"), gi = X("react.memo"), Ll = X("react.lazy"), Rl = X("react.block"), X("react.scope"), Ml = X("react.opaque.id"), Ps = X("react.debug_trace_mode"), Al = X("react.offscreen"), So = X("react.legacy_hidden");
}
var Iu = typeof Symbol == "function" && Symbol.iterator;
function gn(e) {
  return e === null || typeof e != "object" ? null : (e = Iu && e[Iu] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Xi;
function Ln(e) {
  if (Xi === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Xi = t && t[1] || "";
  }
  return `
` + Xi + e;
}
var Qi = !1;
function wr(e, t) {
  if (!e || Qi) return "";
  Qi = !0;
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
      for (var i = a.stack.split(`
`), o = r.stack.split(`
`), l = i.length - 1, u = o.length - 1; 1 <= l && 0 <= u && i[l] !== o[u]; ) u--;
      for (; 1 <= l && 0 <= u; l--, u--) if (i[l] !== o[u]) {
        if (l !== 1 || u !== 1)
          do
            if (l--, u--, 0 > u || i[l] !== o[u]) return `
` + i[l].replace(" at new ", " at ");
          while (1 <= l && 0 <= u);
        break;
      }
    }
  } finally {
    Qi = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Ln(e) : "";
}
function id(e) {
  switch (e.tag) {
    case 5:
      return Ln(e.type);
    case 16:
      return Ln("Lazy");
    case 13:
      return Ln("Suspense");
    case 19:
      return Ln("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = wr(e.type, !1), e;
    case 11:
      return e = wr(e.type.render, !1), e;
    case 22:
      return e = wr(e.type._render, !1), e;
    case 1:
      return e = wr(e.type, !0), e;
    default:
      return "";
  }
}
function Wt(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Ye:
      return "Fragment";
    case St:
      return "Portal";
    case Dn:
      return "Profiler";
    case Ol:
      return "StrictMode";
    case Fn:
      return "Suspense";
    case $r:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Il:
      return (e.displayName || "Context") + ".Consumer";
    case kl:
      return (e._context.displayName || "Context") + ".Provider";
    case yi:
      var t = e.render;
      return t = t.displayName || t.name || "", e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef");
    case gi:
      return Wt(e.type);
    case Rl:
      return Wt(e._render);
    case Ll:
      t = e._payload, e = e._init;
      try {
        return Wt(e(t));
      } catch {
      }
  }
  return null;
}
function at(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "object":
    case "string":
    case "undefined":
      return e;
    default:
      return "";
  }
}
function Cs(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function od(e) {
  var t = Cs(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function Sr(e) {
  e._valueTracker || (e._valueTracker = od(e));
}
function Ns(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Cs(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Wr(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function xo(e, t) {
  var n = t.checked;
  return b({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Lu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = at(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Os(e, t) {
  t = t.checked, t != null && Nl(e, "checked", t, !1);
}
function To(e, t) {
  Os(e, t);
  var n = at(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? _o(e, t.type, n) : t.hasOwnProperty("defaultValue") && _o(e, t.type, at(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Ru(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function _o(e, t, n) {
  (t !== "number" || Wr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
function ld(e) {
  var t = "";
  return vi.Children.forEach(e, function(n) {
    n != null && (t += n);
  }), t;
}
function Po(e, t) {
  return e = b({ children: void 0 }, t), (t = ld(t.children)) && (e.children = t), e;
}
function Xt(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + at(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        e[i].selected = !0, r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Co(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(g(91));
  return b({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Mu(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(g(92));
      if (Array.isArray(n)) {
        if (!(1 >= n.length)) throw Error(g(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: at(n) };
}
function ks(e, t) {
  var n = at(t.value), r = at(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Au(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
var No = { html: "http://www.w3.org/1999/xhtml", svg: "http://www.w3.org/2000/svg" };
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
function Oo(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Is(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var xr, Ls = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, i);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== No.svg || "innerHTML" in e) e.innerHTML = t;
  else {
    for (xr = xr || document.createElement("div"), xr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = xr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Zn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Bn = {
  animationIterationCount: !0,
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
}, ud = ["Webkit", "ms", "Moz", "O"];
Object.keys(Bn).forEach(function(e) {
  ud.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Bn[t] = Bn[e];
  });
});
function Rs(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Bn.hasOwnProperty(e) && Bn[e] ? ("" + t).trim() : t + "px";
}
function Ms(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, i = Rs(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
  }
}
var ad = b({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function ko(e, t) {
  if (t) {
    if (ad[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(g(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(g(60));
      if (!(typeof t.dangerouslySetInnerHTML == "object" && "__html" in t.dangerouslySetInnerHTML)) throw Error(g(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(g(62));
  }
}
function Io(e, t) {
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
function Hl(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Lo = null, Qt = null, Zt = null;
function Hu(e) {
  if (e = dr(e)) {
    if (typeof Lo != "function") throw Error(g(280));
    var t = e.stateNode;
    t && (t = _i(t), Lo(e.stateNode, e.type, t));
  }
}
function As(e) {
  Qt ? Zt ? Zt.push(e) : Zt = [e] : Qt = e;
}
function Hs() {
  if (Qt) {
    var e = Qt, t = Zt;
    if (Zt = Qt = null, Hu(e), t) for (e = 0; e < t.length; e++) Hu(t[e]);
  }
}
function Dl(e, t) {
  return e(t);
}
function Ds(e, t, n, r, i) {
  return e(t, n, r, i);
}
function Fl() {
}
var Fs = Dl, xt = !1, Zi = !1;
function Bl() {
  (Qt !== null || Zt !== null) && (Fl(), Hs());
}
function sd(e, t, n) {
  if (Zi) return e(t, n);
  Zi = !0;
  try {
    return Fs(e, t, n);
  } finally {
    Zi = !1, Bl();
  }
}
function Yn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = _i(n);
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
  if (n && typeof n != "function") throw Error(g(231, t, typeof n));
  return n;
}
var Ro = !1;
if (Xe) try {
  var En = {};
  Object.defineProperty(En, "passive", { get: function() {
    Ro = !0;
  } }), window.addEventListener("test", En, En), window.removeEventListener("test", En, En);
} catch {
  Ro = !1;
}
function fd(e, t, n, r, i, o, l, u, a) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (p) {
    this.onError(p);
  }
}
var Un = !1, Xr = null, Qr = !1, Mo = null, cd = { onError: function(e) {
  Un = !0, Xr = e;
} };
function dd(e, t, n, r, i, o, l, u, a) {
  Un = !1, Xr = null, fd.apply(cd, arguments);
}
function pd(e, t, n, r, i, o, l, u, a) {
  if (dd.apply(this, arguments), Un) {
    if (Un) {
      var s = Xr;
      Un = !1, Xr = null;
    } else throw Error(g(198));
    Qr || (Qr = !0, Mo = s);
  }
}
function Mt(e) {
  var t = e, n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 1026 && (n = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Bs(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Du(e) {
  if (Mt(e) !== e) throw Error(g(188));
}
function hd(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Mt(e), t === null) throw Error(g(188));
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
        if (o === n) return Du(i), e;
        if (o === r) return Du(i), t;
        o = o.sibling;
      }
      throw Error(g(188));
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
        if (!l) throw Error(g(189));
      }
    }
    if (n.alternate !== r) throw Error(g(190));
  }
  if (n.tag !== 3) throw Error(g(188));
  return n.stateNode.current === n ? e : t;
}
function Us(e) {
  if (e = hd(e), !e) return null;
  for (var t = e; ; ) {
    if (t.tag === 5 || t.tag === 6) return t;
    if (t.child) t.child.return = t, t = t.child;
    else {
      if (t === e) break;
      for (; !t.sibling; ) {
        if (!t.return || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return null;
}
function Fu(e, t) {
  for (var n = e.alternate; t !== null; ) {
    if (t === e || t === n) return !0;
    t = t.return;
  }
  return !1;
}
var js, Ul, bs, zs, Ao = !1, Ae = [], et = null, tt = null, nt = null, Kn = /* @__PURE__ */ new Map(), Jn = /* @__PURE__ */ new Map(), wn = [], Bu = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Ho(e, t, n, r, i) {
  return { blockedOn: e, domEventName: t, eventSystemFlags: n | 16, nativeEvent: i, targetContainers: [r] };
}
function Uu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      et = null;
      break;
    case "dragenter":
    case "dragleave":
      tt = null;
      break;
    case "mouseover":
    case "mouseout":
      nt = null;
      break;
    case "pointerover":
    case "pointerout":
      Kn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Jn.delete(t.pointerId);
  }
}
function Sn(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o ? (e = Ho(t, n, r, i, o), t !== null && (t = dr(t), t !== null && Ul(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
}
function md(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return et = Sn(et, e, t, n, r, i), !0;
    case "dragenter":
      return tt = Sn(tt, e, t, n, r, i), !0;
    case "mouseover":
      return nt = Sn(nt, e, t, n, r, i), !0;
    case "pointerover":
      var o = i.pointerId;
      return Kn.set(o, Sn(Kn.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return o = i.pointerId, Jn.set(o, Sn(Jn.get(o) || null, e, t, n, r, i)), !0;
  }
  return !1;
}
function vd(e) {
  var t = Tt(e.target);
  if (t !== null) {
    var n = Mt(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Bs(n), t !== null) {
          e.blockedOn = t, zs(e.lanePriority, function() {
            Z.unstable_runWithPriority(e.priority, function() {
              bs(n);
            });
          });
          return;
        }
      } else if (t === 3 && n.stateNode.hydrate) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ar(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Gl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n !== null) return t = dr(n), t !== null && Ul(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function ju(e, t, n) {
  Ar(e) && n.delete(t);
}
function yd() {
  for (Ao = !1; 0 < Ae.length; ) {
    var e = Ae[0];
    if (e.blockedOn !== null) {
      e = dr(e.blockedOn), e !== null && js(e);
      break;
    }
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Gl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n !== null) {
        e.blockedOn = n;
        break;
      }
      t.shift();
    }
    e.blockedOn === null && Ae.shift();
  }
  et !== null && Ar(et) && (et = null), tt !== null && Ar(tt) && (tt = null), nt !== null && Ar(nt) && (nt = null), Kn.forEach(ju), Jn.forEach(ju);
}
function xn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Ao || (Ao = !0, Z.unstable_scheduleCallback(Z.unstable_NormalPriority, yd)));
}
function Gs(e) {
  function t(i) {
    return xn(i, e);
  }
  if (0 < Ae.length) {
    xn(Ae[0], e);
    for (var n = 1; n < Ae.length; n++) {
      var r = Ae[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (et !== null && xn(et, e), tt !== null && xn(tt, e), nt !== null && xn(nt, e), Kn.forEach(t), Jn.forEach(t), n = 0; n < wn.length; n++) r = wn[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < wn.length && (n = wn[0], n.blockedOn === null); ) vd(n), n.blockedOn === null && wn.shift();
}
function Tr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var jt = { animationend: Tr("Animation", "AnimationEnd"), animationiteration: Tr("Animation", "AnimationIteration"), animationstart: Tr("Animation", "AnimationStart"), transitionend: Tr("Transition", "TransitionEnd") }, Yi = {}, Vs = {};
Xe && (Vs = document.createElement("div").style, "AnimationEvent" in window || (delete jt.animationend.animation, delete jt.animationiteration.animation, delete jt.animationstart.animation), "TransitionEvent" in window || delete jt.transitionend.transition);
function Ei(e) {
  if (Yi[e]) return Yi[e];
  if (!jt[e]) return e;
  var t = jt[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Vs) return Yi[e] = t[n];
  return e;
}
var $s = Ei("animationend"), Ws = Ei("animationiteration"), Xs = Ei("animationstart"), Qs = Ei("transitionend"), Zs = /* @__PURE__ */ new Map(), jl = /* @__PURE__ */ new Map(), gd = [
  "abort",
  "abort",
  $s,
  "animationEnd",
  Ws,
  "animationIteration",
  Xs,
  "animationStart",
  "canplay",
  "canPlay",
  "canplaythrough",
  "canPlayThrough",
  "durationchange",
  "durationChange",
  "emptied",
  "emptied",
  "encrypted",
  "encrypted",
  "ended",
  "ended",
  "error",
  "error",
  "gotpointercapture",
  "gotPointerCapture",
  "load",
  "load",
  "loadeddata",
  "loadedData",
  "loadedmetadata",
  "loadedMetadata",
  "loadstart",
  "loadStart",
  "lostpointercapture",
  "lostPointerCapture",
  "playing",
  "playing",
  "progress",
  "progress",
  "seeking",
  "seeking",
  "stalled",
  "stalled",
  "suspend",
  "suspend",
  "timeupdate",
  "timeUpdate",
  Qs,
  "transitionEnd",
  "waiting",
  "waiting"
];
function bl(e, t) {
  for (var n = 0; n < e.length; n += 2) {
    var r = e[n], i = e[n + 1];
    i = "on" + (i[0].toUpperCase() + i.slice(1)), jl.set(r, t), Zs.set(r, i), Lt(i, [r]);
  }
}
var Ed = Z.unstable_now;
Ed();
var F = 8;
function Bt(e) {
  if (1 & e) return F = 15, 1;
  if (2 & e) return F = 14, 2;
  if (4 & e) return F = 13, 4;
  var t = 24 & e;
  return t !== 0 ? (F = 12, t) : e & 32 ? (F = 11, 32) : (t = 192 & e, t !== 0 ? (F = 10, t) : e & 256 ? (F = 9, 256) : (t = 3584 & e, t !== 0 ? (F = 8, t) : e & 4096 ? (F = 7, 4096) : (t = 4186112 & e, t !== 0 ? (F = 6, t) : (t = 62914560 & e, t !== 0 ? (F = 5, t) : e & 67108864 ? (F = 4, 67108864) : e & 134217728 ? (F = 3, 134217728) : (t = 805306368 & e, t !== 0 ? (F = 2, t) : 1073741824 & e ? (F = 1, 1073741824) : (F = 8, e))))));
}
function wd(e) {
  switch (e) {
    case 99:
      return 15;
    case 98:
      return 10;
    case 97:
    case 96:
      return 8;
    case 95:
      return 2;
    default:
      return 0;
  }
}
function Sd(e) {
  switch (e) {
    case 15:
    case 14:
      return 99;
    case 13:
    case 12:
    case 11:
    case 10:
      return 98;
    case 9:
    case 8:
    case 7:
    case 6:
    case 4:
    case 5:
      return 97;
    case 3:
    case 2:
    case 1:
      return 95;
    case 0:
      return 90;
    default:
      throw Error(g(358, e));
  }
}
function qn(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return F = 0;
  var r = 0, i = 0, o = e.expiredLanes, l = e.suspendedLanes, u = e.pingedLanes;
  if (o !== 0) r = o, i = F = 15;
  else if (o = n & 134217727, o !== 0) {
    var a = o & ~l;
    a !== 0 ? (r = Bt(a), i = F) : (u &= o, u !== 0 && (r = Bt(u), i = F));
  } else o = n & ~l, o !== 0 ? (r = Bt(o), i = F) : u !== 0 && (r = Bt(u), i = F);
  if (r === 0) return 0;
  if (r = 31 - st(r), r = n & ((0 > r ? 0 : 1 << r) << 1) - 1, t !== 0 && t !== r && !(t & l)) {
    if (Bt(t), i <= F) return t;
    F = i;
  }
  if (t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - st(t), i = 1 << n, r |= e[n], t &= ~i;
  return r;
}
function Ys(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Zr(e, t) {
  switch (e) {
    case 15:
      return 1;
    case 14:
      return 2;
    case 12:
      return e = Ut(24 & ~t), e === 0 ? Zr(10, t) : e;
    case 10:
      return e = Ut(192 & ~t), e === 0 ? Zr(8, t) : e;
    case 8:
      return e = Ut(3584 & ~t), e === 0 && (e = Ut(4186112 & ~t), e === 0 && (e = 512)), e;
    case 2:
      return t = Ut(805306368 & ~t), t === 0 && (t = 268435456), t;
  }
  throw Error(g(358, e));
}
function Ut(e) {
  return e & -e;
}
function Ki(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function wi(e, t, n) {
  e.pendingLanes |= t;
  var r = t - 1;
  e.suspendedLanes &= r, e.pingedLanes &= r, e = e.eventTimes, t = 31 - st(t), e[t] = n;
}
var st = Math.clz32 ? Math.clz32 : _d, xd = Math.log, Td = Math.LN2;
function _d(e) {
  return e === 0 ? 32 : 31 - (xd(e) / Td | 0) | 0;
}
var Pd = Z.unstable_UserBlockingPriority, Cd = Z.unstable_runWithPriority, Hr = !0;
function Nd(e, t, n, r) {
  xt || Fl();
  var i = zl, o = xt;
  xt = !0;
  try {
    Ds(i, e, t, n, r);
  } finally {
    (xt = o) || Bl();
  }
}
function Od(e, t, n, r) {
  Cd(Pd, zl.bind(null, e, t, n, r));
}
function zl(e, t, n, r) {
  if (Hr) {
    var i;
    if ((i = (t & 4) === 0) && 0 < Ae.length && -1 < Bu.indexOf(e)) e = Ho(null, e, t, n, r), Ae.push(e);
    else {
      var o = Gl(e, t, n, r);
      if (o === null) i && Uu(e, r);
      else {
        if (i) {
          if (-1 < Bu.indexOf(e)) {
            e = Ho(o, e, t, n, r), Ae.push(e);
            return;
          }
          if (md(o, e, t, n, r)) return;
          Uu(e, r);
        }
        sf(e, t, r, null, n);
      }
    }
  }
}
function Gl(e, t, n, r) {
  var i = Hl(r);
  if (i = Tt(i), i !== null) {
    var o = Mt(i);
    if (o === null) i = null;
    else {
      var l = o.tag;
      if (l === 13) {
        if (i = Bs(o), i !== null) return i;
        i = null;
      } else if (l === 3) {
        if (o.stateNode.hydrate) return o.tag === 3 ? o.stateNode.containerInfo : null;
        i = null;
      } else o !== i && (i = null);
    }
  }
  return sf(e, t, r, i, n), null;
}
var Ke = null, Vl = null, Dr = null;
function Ks() {
  if (Dr) return Dr;
  var e, t = Vl, n = t.length, r, i = "value" in Ke ? Ke.value : Ke.textContent, o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++) ;
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === i[o - r]; r++) ;
  return Dr = i.slice(e, 1 < r ? 1 - r : void 0);
}
function Fr(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function _r() {
  return !0;
}
function bu() {
  return !1;
}
function we(e) {
  function t(n, r, i, o, l) {
    this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = o, this.target = l, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(o) : o[u]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? _r : bu, this.isPropagationStopped = bu, this;
  }
  return b(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = _r);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = _r);
  }, persist: function() {
  }, isPersistent: _r }), t;
}
var cn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, $l = we(cn), cr = b({}, cn, { view: 0, detail: 0 }), kd = we(cr), Ji, qi, Tn, Si = b({}, cr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Wl, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Tn && (Tn && e.type === "mousemove" ? (Ji = e.screenX - Tn.screenX, qi = e.screenY - Tn.screenY) : qi = Ji = 0, Tn = e), Ji);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : qi;
} }), zu = we(Si), Id = b({}, Si, { dataTransfer: 0 }), Ld = we(Id), Rd = b({}, cr, { relatedTarget: 0 }), eo = we(Rd), Md = b({}, cn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Ad = we(Md), Hd = b({}, cn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Dd = we(Hd), Fd = b({}, cn, { data: 0 }), Gu = we(Fd), Bd = {
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
}, Ud = {
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
}, jd = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function bd(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = jd[e]) ? !!t[e] : !1;
}
function Wl() {
  return bd;
}
var zd = b({}, cr, { key: function(e) {
  if (e.key) {
    var t = Bd[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Fr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Ud[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Wl, charCode: function(e) {
  return e.type === "keypress" ? Fr(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Fr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Gd = we(zd), Vd = b({}, Si, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Vu = we(Vd), $d = b({}, cr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Wl }), Wd = we($d), Xd = b({}, cn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Qd = we(Xd), Zd = b({}, Si, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Yd = we(Zd), Kd = [9, 13, 27, 32], Xl = Xe && "CompositionEvent" in window, jn = null;
Xe && "documentMode" in document && (jn = document.documentMode);
var Jd = Xe && "TextEvent" in window && !jn, Js = Xe && (!Xl || jn && 8 < jn && 11 >= jn), $u = " ", Wu = !1;
function qs(e, t) {
  switch (e) {
    case "keyup":
      return Kd.indexOf(t.keyCode) !== -1;
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
function ef(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var bt = !1;
function qd(e, t) {
  switch (e) {
    case "compositionend":
      return ef(t);
    case "keypress":
      return t.which !== 32 ? null : (Wu = !0, $u);
    case "textInput":
      return e = t.data, e === $u && Wu ? null : e;
    default:
      return null;
  }
}
function ep(e, t) {
  if (bt) return e === "compositionend" || !Xl && qs(e, t) ? (e = Ks(), Dr = Vl = Ke = null, bt = !1, e) : null;
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
      return Js && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var tp = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Xu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!tp[e.type] : t === "textarea";
}
function tf(e, t, n, r) {
  As(r), t = Yr(t, "onChange"), 0 < t.length && (n = new $l("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var bn = null, er = null;
function np(e) {
  lf(e, 0);
}
function xi(e) {
  var t = Gt(e);
  if (Ns(t)) return e;
}
function rp(e, t) {
  if (e === "change") return t;
}
var nf = !1;
if (Xe) {
  var to;
  if (Xe) {
    var no = "oninput" in document;
    if (!no) {
      var Qu = document.createElement("div");
      Qu.setAttribute("oninput", "return;"), no = typeof Qu.oninput == "function";
    }
    to = no;
  } else to = !1;
  nf = to && (!document.documentMode || 9 < document.documentMode);
}
function Zu() {
  bn && (bn.detachEvent("onpropertychange", rf), er = bn = null);
}
function rf(e) {
  if (e.propertyName === "value" && xi(er)) {
    var t = [];
    if (tf(t, er, e, Hl(e)), e = np, xt) e(t);
    else {
      xt = !0;
      try {
        Dl(e, t);
      } finally {
        xt = !1, Bl();
      }
    }
  }
}
function ip(e, t, n) {
  e === "focusin" ? (Zu(), bn = t, er = n, bn.attachEvent("onpropertychange", rf)) : e === "focusout" && Zu();
}
function op(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return xi(er);
}
function lp(e, t) {
  if (e === "click") return xi(t);
}
function up(e, t) {
  if (e === "input" || e === "change") return xi(t);
}
function ap(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Te = typeof Object.is == "function" ? Object.is : ap, sp = Object.prototype.hasOwnProperty;
function tr(e, t) {
  if (Te(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) if (!sp.call(t, n[r]) || !Te(e[n[r]], t[n[r]])) return !1;
  return !0;
}
function Yu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ku(e, t) {
  var n = Yu(e);
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
    n = Yu(n);
  }
}
function of(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? of(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Ju() {
  for (var e = window, t = Wr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Wr(e.document);
  }
  return t;
}
function Do(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
var fp = Xe && "documentMode" in document && 11 >= document.documentMode, zt = null, Fo = null, zn = null, Bo = !1;
function qu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Bo || zt == null || zt !== Wr(r) || (r = zt, "selectionStart" in r && Do(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), zn && tr(zn, r) || (zn = r, r = Yr(Fo, "onSelect"), 0 < r.length && (t = new $l("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = zt)));
}
bl(
  "cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),
  0
);
bl("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1);
bl(gd, 2);
for (var ea = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), ro = 0; ro < ea.length; ro++) jl.set(ea[ro], 0);
nn("onMouseEnter", ["mouseout", "mouseover"]);
nn("onMouseLeave", ["mouseout", "mouseover"]);
nn("onPointerEnter", ["pointerout", "pointerover"]);
nn("onPointerLeave", ["pointerout", "pointerover"]);
Lt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Lt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Lt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Lt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Lt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Lt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Rn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), cp = new Set("cancel close invalid load scroll toggle".split(" ").concat(Rn));
function ta(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, pd(r, t, void 0, e), e.currentTarget = null;
}
function lf(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t) for (var l = r.length - 1; 0 <= l; l--) {
        var u = r[l], a = u.instance, s = u.currentTarget;
        if (u = u.listener, a !== o && i.isPropagationStopped()) break e;
        ta(i, u, s), o = a;
      }
      else for (l = 0; l < r.length; l++) {
        if (u = r[l], a = u.instance, s = u.currentTarget, u = u.listener, a !== o && i.isPropagationStopped()) break e;
        ta(i, u, s), o = a;
      }
    }
  }
  if (Qr) throw e = Mo, Qr = !1, Mo = null, e;
}
function B(e, t) {
  var n = cf(t), r = e + "__bubble";
  n.has(r) || (af(t, e, 2, !1), n.add(r));
}
var na = "_reactListening" + Math.random().toString(36).slice(2);
function uf(e) {
  e[na] || (e[na] = !0, _s.forEach(function(t) {
    cp.has(t) || ra(t, !1, e, null), ra(t, !0, e, null);
  }));
}
function ra(e, t, n, r) {
  var i = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 0, o = n;
  e === "selectionchange" && n.nodeType !== 9 && (o = n.ownerDocument);
  var l = cf(o), u = e + "__" + (t ? "capture" : "bubble");
  l.has(u) || (t && (i |= 4), af(o, e, i, t), l.add(u));
}
function af(e, t, n, r) {
  var i = jl.get(t);
  switch (i === void 0 ? 2 : i) {
    case 0:
      i = Nd;
      break;
    case 1:
      i = Od;
      break;
    default:
      i = zl;
  }
  n = i.bind(null, t, n, e), i = void 0, !Ro || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: i }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, !1);
}
function sf(e, t, n, r, i) {
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
        if (l = Tt(u), l === null) return;
        if (a = l.tag, a === 5 || a === 6) {
          r = o = l;
          continue e;
        }
        u = u.parentNode;
      }
    }
    r = r.return;
  }
  sd(function() {
    var s = o, p = Hl(n), y = [];
    e: {
      var h = Zs.get(e);
      if (h !== void 0) {
        var E = $l, T = e;
        switch (e) {
          case "keypress":
            if (Fr(n) === 0) break e;
          case "keydown":
          case "keyup":
            E = Gd;
            break;
          case "focusin":
            T = "focus", E = eo;
            break;
          case "focusout":
            T = "blur", E = eo;
            break;
          case "beforeblur":
          case "afterblur":
            E = eo;
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
            E = zu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            E = Ld;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            E = Wd;
            break;
          case $s:
          case Ws:
          case Xs:
            E = Ad;
            break;
          case Qs:
            E = Qd;
            break;
          case "scroll":
            E = kd;
            break;
          case "wheel":
            E = Yd;
            break;
          case "copy":
          case "cut":
          case "paste":
            E = Dd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            E = Vu;
        }
        var w = (t & 4) !== 0, d = !w && e === "scroll", f = w ? h !== null ? h + "Capture" : null : h;
        w = [];
        for (var c = s, m; c !== null; ) {
          m = c;
          var v = m.stateNode;
          if (m.tag === 5 && v !== null && (m = v, f !== null && (v = Yn(c, f), v != null && w.push(nr(c, v, m)))), d) break;
          c = c.return;
        }
        0 < w.length && (h = new E(h, T, null, n, p), y.push({ event: h, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (h = e === "mouseover" || e === "pointerover", E = e === "mouseout" || e === "pointerout", h && !(t & 16) && (T = n.relatedTarget || n.fromElement) && (Tt(T) || T[dn])) break e;
        if ((E || h) && (h = p.window === p ? p : (h = p.ownerDocument) ? h.defaultView || h.parentWindow : window, E ? (T = n.relatedTarget || n.toElement, E = s, T = T ? Tt(T) : null, T !== null && (d = Mt(T), T !== d || T.tag !== 5 && T.tag !== 6) && (T = null)) : (E = null, T = s), E !== T)) {
          if (w = zu, v = "onMouseLeave", f = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (w = Vu, v = "onPointerLeave", f = "onPointerEnter", c = "pointer"), d = E == null ? h : Gt(E), m = T == null ? h : Gt(T), h = new w(v, c + "leave", E, n, p), h.target = d, h.relatedTarget = m, v = null, Tt(p) === s && (w = new w(f, c + "enter", T, n, p), w.target = m, w.relatedTarget = d, v = w), d = v, E && T) t: {
            for (w = E, f = T, c = 0, m = w; m; m = Ft(m)) c++;
            for (m = 0, v = f; v; v = Ft(v)) m++;
            for (; 0 < c - m; ) w = Ft(w), c--;
            for (; 0 < m - c; ) f = Ft(f), m--;
            for (; c--; ) {
              if (w === f || f !== null && w === f.alternate) break t;
              w = Ft(w), f = Ft(f);
            }
            w = null;
          }
          else w = null;
          E !== null && ia(y, h, E, w, !1), T !== null && d !== null && ia(y, d, T, w, !0);
        }
      }
      e: {
        if (h = s ? Gt(s) : window, E = h.nodeName && h.nodeName.toLowerCase(), E === "select" || E === "input" && h.type === "file") var C = rp;
        else if (Xu(h)) if (nf) C = up;
        else {
          C = op;
          var S = ip;
        }
        else (E = h.nodeName) && E.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (C = lp);
        if (C && (C = C(e, s))) {
          tf(y, C, n, p);
          break e;
        }
        S && S(e, h, s), e === "focusout" && (S = h._wrapperState) && S.controlled && h.type === "number" && _o(h, "number", h.value);
      }
      switch (S = s ? Gt(s) : window, e) {
        case "focusin":
          (Xu(S) || S.contentEditable === "true") && (zt = S, Fo = s, zn = null);
          break;
        case "focusout":
          zn = Fo = zt = null;
          break;
        case "mousedown":
          Bo = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Bo = !1, qu(y, n, p);
          break;
        case "selectionchange":
          if (fp) break;
        case "keydown":
        case "keyup":
          qu(y, n, p);
      }
      var O;
      if (Xl) e: {
        switch (e) {
          case "compositionstart":
            var L = "onCompositionStart";
            break e;
          case "compositionend":
            L = "onCompositionEnd";
            break e;
          case "compositionupdate":
            L = "onCompositionUpdate";
            break e;
        }
        L = void 0;
      }
      else bt ? qs(e, n) && (L = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (L = "onCompositionStart");
      L && (Js && n.locale !== "ko" && (bt || L !== "onCompositionStart" ? L === "onCompositionEnd" && bt && (O = Ks()) : (Ke = p, Vl = "value" in Ke ? Ke.value : Ke.textContent, bt = !0)), S = Yr(s, L), 0 < S.length && (L = new Gu(L, e, null, n, p), y.push({ event: L, listeners: S }), O ? L.data = O : (O = ef(n), O !== null && (L.data = O)))), (O = Jd ? qd(e, n) : ep(e, n)) && (s = Yr(s, "onBeforeInput"), 0 < s.length && (p = new Gu(
        "onBeforeInput",
        "beforeinput",
        null,
        n,
        p
      ), y.push({ event: p, listeners: s }), p.data = O));
    }
    lf(y, t);
  });
}
function nr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Yr(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e, o = i.stateNode;
    i.tag === 5 && o !== null && (i = o, o = Yn(e, n), o != null && r.unshift(nr(e, o, i)), o = Yn(e, t), o != null && r.push(nr(e, o, i))), e = e.return;
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
function ia(e, t, n, r, i) {
  for (var o = t._reactName, l = []; n !== null && n !== r; ) {
    var u = n, a = u.alternate, s = u.stateNode;
    if (a !== null && a === r) break;
    u.tag === 5 && s !== null && (u = s, i ? (a = Yn(n, o), a != null && l.unshift(nr(n, a, u))) : i || (a = Yn(n, o), a != null && l.push(nr(n, a, u)))), n = n.return;
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
function Kr() {
}
var io = null, oo = null;
function ff(e, t) {
  switch (e) {
    case "button":
    case "input":
    case "select":
    case "textarea":
      return !!t.autoFocus;
  }
  return !1;
}
function Uo(e, t) {
  return e === "textarea" || e === "option" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var oa = typeof setTimeout == "function" ? setTimeout : void 0, dp = typeof clearTimeout == "function" ? clearTimeout : void 0;
function Ql(e) {
  e.nodeType === 1 ? e.textContent = "" : e.nodeType === 9 && (e = e.body, e != null && (e.textContent = ""));
}
function Yt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
  }
  return e;
}
function la(e) {
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
var lo = 0;
function pp(e) {
  return { $$typeof: Ml, toString: e, valueOf: e };
}
var Ti = Math.random().toString(36).slice(2), Je = "__reactFiber$" + Ti, Jr = "__reactProps$" + Ti, dn = "__reactContainer$" + Ti, ua = "__reactEvents$" + Ti;
function Tt(e) {
  var t = e[Je];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[dn] || n[Je]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = la(e); e !== null; ) {
        if (n = e[Je]) return n;
        e = la(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function dr(e) {
  return e = e[Je] || e[dn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Gt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(g(33));
}
function _i(e) {
  return e[Jr] || null;
}
function cf(e) {
  var t = e[ua];
  return t === void 0 && (t = e[ua] = /* @__PURE__ */ new Set()), t;
}
var jo = [], Vt = -1;
function pt(e) {
  return { current: e };
}
function j(e) {
  0 > Vt || (e.current = jo[Vt], jo[Vt] = null, Vt--);
}
function G(e, t) {
  Vt++, jo[Vt] = e.current, e.current = t;
}
var ft = {}, ue = pt(ft), ve = pt(!1), Nt = ft;
function rn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return ft;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var i = {}, o;
  for (o in n) i[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i;
}
function ye(e) {
  return e = e.childContextTypes, e != null;
}
function qr() {
  j(ve), j(ue);
}
function aa(e, t, n) {
  if (ue.current !== ft) throw Error(g(168));
  G(ue, t), G(ve, n);
}
function df(e, t, n) {
  var r = e.stateNode;
  if (e = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in e)) throw Error(g(108, Wt(t) || "Unknown", i));
  return b({}, n, r);
}
function Br(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || ft, Nt = ue.current, G(ue, e), G(ve, ve.current), !0;
}
function sa(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(g(169));
  n ? (e = df(e, t, Nt), r.__reactInternalMemoizedMergedChildContext = e, j(ve), j(ue), G(ue, e)) : j(ve), G(ve, n);
}
var Zl = null, Ct = null, hp = Z.unstable_runWithPriority, Yl = Z.unstable_scheduleCallback, bo = Z.unstable_cancelCallback, mp = Z.unstable_shouldYield, fa = Z.unstable_requestPaint, zo = Z.unstable_now, vp = Z.unstable_getCurrentPriorityLevel, Pi = Z.unstable_ImmediatePriority, pf = Z.unstable_UserBlockingPriority, hf = Z.unstable_NormalPriority, mf = Z.unstable_LowPriority, vf = Z.unstable_IdlePriority, uo = {}, yp = fa !== void 0 ? fa : function() {
}, ze = null, Ur = null, ao = !1, ca = zo(), ie = 1e4 > ca ? zo : function() {
  return zo() - ca;
};
function on() {
  switch (vp()) {
    case Pi:
      return 99;
    case pf:
      return 98;
    case hf:
      return 97;
    case mf:
      return 96;
    case vf:
      return 95;
    default:
      throw Error(g(332));
  }
}
function yf(e) {
  switch (e) {
    case 99:
      return Pi;
    case 98:
      return pf;
    case 97:
      return hf;
    case 96:
      return mf;
    case 95:
      return vf;
    default:
      throw Error(g(332));
  }
}
function Ot(e, t) {
  return e = yf(e), hp(e, t);
}
function rr(e, t, n) {
  return e = yf(e), Yl(e, t, n);
}
function je() {
  if (Ur !== null) {
    var e = Ur;
    Ur = null, bo(e);
  }
  gf();
}
function gf() {
  if (!ao && ze !== null) {
    ao = !0;
    var e = 0;
    try {
      var t = ze;
      Ot(99, function() {
        for (; e < t.length; e++) {
          var n = t[e];
          do
            n = n(!0);
          while (n !== null);
        }
      }), ze = null;
    } catch (n) {
      throw ze !== null && (ze = ze.slice(e + 1)), Yl(Pi, je), n;
    } finally {
      ao = !1;
    }
  }
}
var gp = Rt.ReactCurrentBatchConfig;
function Re(e, t) {
  if (e && e.defaultProps) {
    t = b({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var ei = pt(null), ti = null, $t = null, ni = null;
function Kl() {
  ni = $t = ti = null;
}
function Jl(e) {
  var t = ei.current;
  j(ei), e.type._context._currentValue = t;
}
function Ef(e, t) {
  for (; e !== null; ) {
    var n = e.alternate;
    if ((e.childLanes & t) === t) {
      if (n === null || (n.childLanes & t) === t) break;
      n.childLanes |= t;
    } else e.childLanes |= t, n !== null && (n.childLanes |= t);
    e = e.return;
  }
}
function Kt(e, t) {
  ti = e, ni = $t = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Me = !0), e.firstContext = null);
}
function Ce(e, t) {
  if (ni !== e && t !== !1 && t !== 0)
    if ((typeof t != "number" || t === 1073741823) && (ni = e, t = 1073741823), t = { context: e, observedBits: t, next: null }, $t === null) {
      if (ti === null) throw Error(g(308));
      $t = t, ti.dependencies = { lanes: 0, firstContext: t, responders: null };
    } else $t = $t.next = t;
  return e._currentValue;
}
var Ze = !1;
function ql(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null }, effects: null };
}
function wf(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function rt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function it(e, t) {
  if (e = e.updateQueue, e !== null) {
    e = e.shared;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
}
function da(e, t) {
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
function ir(e, t, n, r) {
  var i = e.updateQueue;
  Ze = !1;
  var o = i.firstBaseUpdate, l = i.lastBaseUpdate, u = i.shared.pending;
  if (u !== null) {
    i.shared.pending = null;
    var a = u, s = a.next;
    a.next = null, l === null ? o = s : l.next = s, l = a;
    var p = e.alternate;
    if (p !== null) {
      p = p.updateQueue;
      var y = p.lastBaseUpdate;
      y !== l && (y === null ? p.firstBaseUpdate = s : y.next = s, p.lastBaseUpdate = a);
    }
  }
  if (o !== null) {
    y = i.baseState, l = 0, p = s = a = null;
    do {
      u = o.lane;
      var h = o.eventTime;
      if ((r & u) === u) {
        p !== null && (p = p.next = {
          eventTime: h,
          lane: 0,
          tag: o.tag,
          payload: o.payload,
          callback: o.callback,
          next: null
        });
        e: {
          var E = e, T = o;
          switch (u = t, h = n, T.tag) {
            case 1:
              if (E = T.payload, typeof E == "function") {
                y = E.call(h, y, u);
                break e;
              }
              y = E;
              break e;
            case 3:
              E.flags = E.flags & -4097 | 64;
            case 0:
              if (E = T.payload, u = typeof E == "function" ? E.call(h, y, u) : E, u == null) break e;
              y = b({}, y, u);
              break e;
            case 2:
              Ze = !0;
          }
        }
        o.callback !== null && (e.flags |= 32, u = i.effects, u === null ? i.effects = [o] : u.push(o));
      } else h = { eventTime: h, lane: u, tag: o.tag, payload: o.payload, callback: o.callback, next: null }, p === null ? (s = p = h, a = y) : p = p.next = h, l |= u;
      if (o = o.next, o === null) {
        if (u = i.shared.pending, u === null) break;
        o = u.next, u.next = null, i.lastBaseUpdate = u, i.shared.pending = null;
      }
    } while (!0);
    p === null && (a = y), i.baseState = a, i.firstBaseUpdate = s, i.lastBaseUpdate = p, hr |= l, e.lanes = l, e.memoizedState = y;
  }
}
function pa(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], i = r.callback;
    if (i !== null) {
      if (r.callback = null, r = n, typeof i != "function") throw Error(g(191, i));
      i.call(r);
    }
  }
}
var Sf = new vi.Component().refs;
function ri(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : b({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ci = { isMounted: function(e) {
  return (e = e._reactInternals) ? Mt(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Ee(), i = ot(e), o = rt(r, i);
  o.payload = t, n != null && (o.callback = n), it(e, o), lt(e, i, r);
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Ee(), i = ot(e), o = rt(r, i);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), it(e, o), lt(e, i, r);
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Ee(), r = ot(e), i = rt(n, r);
  i.tag = 2, t != null && (i.callback = t), it(e, i), lt(e, r, n);
} };
function ha(e, t, n, r, i, o, l) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, l) : t.prototype && t.prototype.isPureReactComponent ? !tr(n, r) || !tr(i, o) : !0;
}
function xf(e, t, n) {
  var r = !1, i = ft, o = t.contextType;
  return typeof o == "object" && o !== null ? o = Ce(o) : (i = ye(t) ? Nt : ue.current, r = t.contextTypes, o = (r = r != null) ? rn(e, i) : ft), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ci, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function ma(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ci.enqueueReplaceState(t, t.state, null);
}
function Go(e, t, n, r) {
  var i = e.stateNode;
  i.props = n, i.state = e.memoizedState, i.refs = Sf, ql(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? i.context = Ce(o) : (o = ye(t) ? Nt : ue.current, i.context = rn(e, o)), ir(e, n, i, r), i.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (ri(e, t, o, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && Ci.enqueueReplaceState(i, i.state, null), ir(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4);
}
var Pr = Array.isArray;
function _n(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(g(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(g(147, e));
      var i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(o) {
        var l = r.refs;
        l === Sf && (l = r.refs = {}), o === null ? delete l[i] : l[i] = o;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string") throw Error(g(284));
    if (!n._owner) throw Error(g(290, e));
  }
  return e;
}
function Cr(e, t) {
  if (e.type !== "textarea") throw Error(g(31, Object.prototype.toString.call(t) === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : t));
}
function Tf(e) {
  function t(d, f) {
    if (e) {
      var c = d.lastEffect;
      c !== null ? (c.nextEffect = f, d.lastEffect = f) : d.firstEffect = d.lastEffect = f, f.nextEffect = null, f.flags = 8;
    }
  }
  function n(d, f) {
    if (!e) return null;
    for (; f !== null; ) t(d, f), f = f.sibling;
    return null;
  }
  function r(d, f) {
    for (d = /* @__PURE__ */ new Map(); f !== null; ) f.key !== null ? d.set(f.key, f) : d.set(f.index, f), f = f.sibling;
    return d;
  }
  function i(d, f) {
    return d = dt(d, f), d.index = 0, d.sibling = null, d;
  }
  function o(d, f, c) {
    return d.index = c, e ? (c = d.alternate, c !== null ? (c = c.index, c < f ? (d.flags = 2, f) : c) : (d.flags = 2, f)) : f;
  }
  function l(d) {
    return e && d.alternate === null && (d.flags = 2), d;
  }
  function u(d, f, c, m) {
    return f === null || f.tag !== 6 ? (f = ho(c, d.mode, m), f.return = d, f) : (f = i(f, c), f.return = d, f);
  }
  function a(d, f, c, m) {
    return f !== null && f.elementType === c.type ? (m = i(f, c.props), m.ref = _n(d, f, c), m.return = d, m) : (m = Gr(c.type, c.key, c.props, null, d.mode, m), m.ref = _n(d, f, c), m.return = d, m);
  }
  function s(d, f, c, m) {
    return f === null || f.tag !== 4 || f.stateNode.containerInfo !== c.containerInfo || f.stateNode.implementation !== c.implementation ? (f = mo(c, d.mode, m), f.return = d, f) : (f = i(f, c.children || []), f.return = d, f);
  }
  function p(d, f, c, m, v) {
    return f === null || f.tag !== 7 ? (f = tn(c, d.mode, m, v), f.return = d, f) : (f = i(f, c), f.return = d, f);
  }
  function y(d, f, c) {
    if (typeof f == "string" || typeof f == "number") return f = ho("" + f, d.mode, c), f.return = d, f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case In:
          return c = Gr(f.type, f.key, f.props, null, d.mode, c), c.ref = _n(d, null, f), c.return = d, c;
        case St:
          return f = mo(f, d.mode, c), f.return = d, f;
      }
      if (Pr(f) || gn(f)) return f = tn(
        f,
        d.mode,
        c,
        null
      ), f.return = d, f;
      Cr(d, f);
    }
    return null;
  }
  function h(d, f, c, m) {
    var v = f !== null ? f.key : null;
    if (typeof c == "string" || typeof c == "number") return v !== null ? null : u(d, f, "" + c, m);
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case In:
          return c.key === v ? c.type === Ye ? p(d, f, c.props.children, m, v) : a(d, f, c, m) : null;
        case St:
          return c.key === v ? s(d, f, c, m) : null;
      }
      if (Pr(c) || gn(c)) return v !== null ? null : p(d, f, c, m, null);
      Cr(d, c);
    }
    return null;
  }
  function E(d, f, c, m, v) {
    if (typeof m == "string" || typeof m == "number") return d = d.get(c) || null, u(f, d, "" + m, v);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case In:
          return d = d.get(m.key === null ? c : m.key) || null, m.type === Ye ? p(f, d, m.props.children, v, m.key) : a(f, d, m, v);
        case St:
          return d = d.get(m.key === null ? c : m.key) || null, s(f, d, m, v);
      }
      if (Pr(m) || gn(m)) return d = d.get(c) || null, p(f, d, m, v, null);
      Cr(f, m);
    }
    return null;
  }
  function T(d, f, c, m) {
    for (var v = null, C = null, S = f, O = f = 0, L = null; S !== null && O < c.length; O++) {
      S.index > O ? (L = S, S = null) : L = S.sibling;
      var N = h(d, S, c[O], m);
      if (N === null) {
        S === null && (S = L);
        break;
      }
      e && S && N.alternate === null && t(d, S), f = o(N, f, O), C === null ? v = N : C.sibling = N, C = N, S = L;
    }
    if (O === c.length) return n(d, S), v;
    if (S === null) {
      for (; O < c.length; O++) S = y(d, c[O], m), S !== null && (f = o(S, f, O), C === null ? v = S : C.sibling = S, C = S);
      return v;
    }
    for (S = r(d, S); O < c.length; O++) L = E(S, d, O, c[O], m), L !== null && (e && L.alternate !== null && S.delete(L.key === null ? O : L.key), f = o(L, f, O), C === null ? v = L : C.sibling = L, C = L);
    return e && S.forEach(function(K) {
      return t(d, K);
    }), v;
  }
  function w(d, f, c, m) {
    var v = gn(c);
    if (typeof v != "function") throw Error(g(150));
    if (c = v.call(c), c == null) throw Error(g(151));
    for (var C = v = null, S = f, O = f = 0, L = null, N = c.next(); S !== null && !N.done; O++, N = c.next()) {
      S.index > O ? (L = S, S = null) : L = S.sibling;
      var K = h(d, S, N.value, m);
      if (K === null) {
        S === null && (S = L);
        break;
      }
      e && S && K.alternate === null && t(d, S), f = o(K, f, O), C === null ? v = K : C.sibling = K, C = K, S = L;
    }
    if (N.done) return n(d, S), v;
    if (S === null) {
      for (; !N.done; O++, N = c.next()) N = y(d, N.value, m), N !== null && (f = o(N, f, O), C === null ? v = N : C.sibling = N, C = N);
      return v;
    }
    for (S = r(d, S); !N.done; O++, N = c.next()) N = E(S, d, O, N.value, m), N !== null && (e && N.alternate !== null && S.delete(N.key === null ? O : N.key), f = o(N, f, O), C === null ? v = N : C.sibling = N, C = N);
    return e && S.forEach(function(zi) {
      return t(d, zi);
    }), v;
  }
  return function(d, f, c, m) {
    var v = typeof c == "object" && c !== null && c.type === Ye && c.key === null;
    v && (c = c.props.children);
    var C = typeof c == "object" && c !== null;
    if (C) switch (c.$$typeof) {
      case In:
        e: {
          for (C = c.key, v = f; v !== null; ) {
            if (v.key === C) {
              switch (v.tag) {
                case 7:
                  if (c.type === Ye) {
                    n(d, v.sibling), f = i(v, c.props.children), f.return = d, d = f;
                    break e;
                  }
                  break;
                default:
                  if (v.elementType === c.type) {
                    n(d, v.sibling), f = i(v, c.props), f.ref = _n(d, v, c), f.return = d, d = f;
                    break e;
                  }
              }
              n(d, v);
              break;
            } else t(d, v);
            v = v.sibling;
          }
          c.type === Ye ? (f = tn(c.props.children, d.mode, m, c.key), f.return = d, d = f) : (m = Gr(c.type, c.key, c.props, null, d.mode, m), m.ref = _n(d, f, c), m.return = d, d = m);
        }
        return l(d);
      case St:
        e: {
          for (v = c.key; f !== null; ) {
            if (f.key === v) if (f.tag === 4 && f.stateNode.containerInfo === c.containerInfo && f.stateNode.implementation === c.implementation) {
              n(d, f.sibling), f = i(f, c.children || []), f.return = d, d = f;
              break e;
            } else {
              n(d, f);
              break;
            }
            else t(d, f);
            f = f.sibling;
          }
          f = mo(c, d.mode, m), f.return = d, d = f;
        }
        return l(d);
    }
    if (typeof c == "string" || typeof c == "number") return c = "" + c, f !== null && f.tag === 6 ? (n(d, f.sibling), f = i(f, c), f.return = d, d = f) : (n(d, f), f = ho(c, d.mode, m), f.return = d, d = f), l(d);
    if (Pr(c)) return T(d, f, c, m);
    if (gn(c)) return w(d, f, c, m);
    if (C && Cr(d, c), typeof c > "u" && !v) switch (d.tag) {
      case 1:
      case 22:
      case 0:
      case 11:
      case 15:
        throw Error(g(152, Wt(d.type) || "Component"));
    }
    return n(d, f);
  };
}
var ii = Tf(!0), _f = Tf(!1), pr = {}, Fe = pt(pr), or = pt(pr), lr = pt(pr);
function _t(e) {
  if (e === pr) throw Error(g(174));
  return e;
}
function Vo(e, t) {
  switch (G(lr, t), G(or, e), G(Fe, pr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Oo(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Oo(t, e);
  }
  j(Fe), G(Fe, t);
}
function ln() {
  j(Fe), j(or), j(lr);
}
function va(e) {
  _t(lr.current);
  var t = _t(Fe.current), n = Oo(t, e.type);
  t !== n && (G(or, e), G(Fe, n));
}
function eu(e) {
  or.current === e && (j(Fe), j(or));
}
var z = pt(0);
function oi(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 64) return t;
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
var Ve = null, qe = null, Be = !1;
function Pf(e, t) {
  var n = _e(5, null, null, 0);
  n.elementType = "DELETED", n.type = "DELETED", n.stateNode = t, n.return = e, n.flags = 8, e.lastEffect !== null ? (e.lastEffect.nextEffect = n, e.lastEffect = n) : e.firstEffect = e.lastEffect = n;
}
function ya(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, !0) : !1;
    case 13:
      return !1;
    default:
      return !1;
  }
}
function $o(e) {
  if (Be) {
    var t = qe;
    if (t) {
      var n = t;
      if (!ya(e, t)) {
        if (t = Yt(n.nextSibling), !t || !ya(e, t)) {
          e.flags = e.flags & -1025 | 2, Be = !1, Ve = e;
          return;
        }
        Pf(Ve, n);
      }
      Ve = e, qe = Yt(t.firstChild);
    } else e.flags = e.flags & -1025 | 2, Be = !1, Ve = e;
  }
}
function ga(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Ve = e;
}
function Nr(e) {
  if (e !== Ve) return !1;
  if (!Be) return ga(e), Be = !0, !1;
  var t = e.type;
  if (e.tag !== 5 || t !== "head" && t !== "body" && !Uo(t, e.memoizedProps)) for (t = qe; t; ) Pf(e, t), t = Yt(t.nextSibling);
  if (ga(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(g(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              qe = Yt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      qe = null;
    }
  } else qe = Ve ? Yt(e.stateNode.nextSibling) : null;
  return !0;
}
function so() {
  qe = Ve = null, Be = !1;
}
var Jt = [];
function tu() {
  for (var e = 0; e < Jt.length; e++) Jt[e]._workInProgressVersionPrimary = null;
  Jt.length = 0;
}
var Gn = Rt.ReactCurrentDispatcher, Pe = Rt.ReactCurrentBatchConfig, ur = 0, $ = null, re = null, q = null, li = !1, Vn = !1;
function he() {
  throw Error(g(321));
}
function nu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Te(e[n], t[n])) return !1;
  return !0;
}
function ru(e, t, n, r, i, o) {
  if (ur = o, $ = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Gn.current = e === null || e.memoizedState === null ? wp : Sp, e = n(r, i), Vn) {
    o = 0;
    do {
      if (Vn = !1, !(25 > o)) throw Error(g(301));
      o += 1, q = re = null, t.updateQueue = null, Gn.current = xp, e = n(r, i);
    } while (Vn);
  }
  if (Gn.current = fi, t = re !== null && re.next !== null, ur = 0, q = re = $ = null, li = !1, t) throw Error(g(300));
  return e;
}
function Pt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return q === null ? $.memoizedState = q = e : q = q.next = e, q;
}
function At() {
  if (re === null) {
    var e = $.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = re.next;
  var t = q === null ? $.memoizedState : q.next;
  if (t !== null) q = t, re = e;
  else {
    if (e === null) throw Error(g(310));
    re = e, e = { memoizedState: re.memoizedState, baseState: re.baseState, baseQueue: re.baseQueue, queue: re.queue, next: null }, q === null ? $.memoizedState = q = e : q = q.next = e;
  }
  return q;
}
function He(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Pn(e) {
  var t = At(), n = t.queue;
  if (n === null) throw Error(g(311));
  n.lastRenderedReducer = e;
  var r = re, i = r.baseQueue, o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var l = i.next;
      i.next = o.next, o.next = l;
    }
    r.baseQueue = i = o, n.pending = null;
  }
  if (i !== null) {
    i = i.next, r = r.baseState;
    var u = l = o = null, a = i;
    do {
      var s = a.lane;
      if ((ur & s) === s) u !== null && (u = u.next = { lane: 0, action: a.action, eagerReducer: a.eagerReducer, eagerState: a.eagerState, next: null }), r = a.eagerReducer === e ? a.eagerState : e(r, a.action);
      else {
        var p = {
          lane: s,
          action: a.action,
          eagerReducer: a.eagerReducer,
          eagerState: a.eagerState,
          next: null
        };
        u === null ? (l = u = p, o = r) : u = u.next = p, $.lanes |= s, hr |= s;
      }
      a = a.next;
    } while (a !== null && a !== i);
    u === null ? o = r : u.next = l, Te(r, t.memoizedState) || (Me = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = u, n.lastRenderedState = r;
  }
  return [t.memoizedState, n.dispatch];
}
function Cn(e) {
  var t = At(), n = t.queue;
  if (n === null) throw Error(g(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, i = n.pending, o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var l = i = i.next;
    do
      o = e(o, l.action), l = l.next;
    while (l !== i);
    Te(o, t.memoizedState) || (Me = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function Ea(e, t, n) {
  var r = t._getVersion;
  r = r(t._source);
  var i = t._workInProgressVersionPrimary;
  if (i !== null ? e = i === r : (e = e.mutableReadLanes, (e = (ur & e) === e) && (t._workInProgressVersionPrimary = r, Jt.push(t))), e) return n(t._source);
  throw Jt.push(t), Error(g(350));
}
function Cf(e, t, n, r) {
  var i = de;
  if (i === null) throw Error(g(349));
  var o = t._getVersion, l = o(t._source), u = Gn.current, a = u.useState(function() {
    return Ea(i, t, n);
  }), s = a[1], p = a[0];
  a = q;
  var y = e.memoizedState, h = y.refs, E = h.getSnapshot, T = y.source;
  y = y.subscribe;
  var w = $;
  return e.memoizedState = { refs: h, source: t, subscribe: r }, u.useEffect(function() {
    h.getSnapshot = n, h.setSnapshot = s;
    var d = o(t._source);
    if (!Te(l, d)) {
      d = n(t._source), Te(p, d) || (s(d), d = ot(w), i.mutableReadLanes |= d & i.pendingLanes), d = i.mutableReadLanes, i.entangledLanes |= d;
      for (var f = i.entanglements, c = d; 0 < c; ) {
        var m = 31 - st(c), v = 1 << m;
        f[m] |= d, c &= ~v;
      }
    }
  }, [n, t, r]), u.useEffect(function() {
    return r(t._source, function() {
      var d = h.getSnapshot, f = h.setSnapshot;
      try {
        f(d(t._source));
        var c = ot(w);
        i.mutableReadLanes |= c & i.pendingLanes;
      } catch (m) {
        f(function() {
          throw m;
        });
      }
    });
  }, [t, r]), Te(E, n) && Te(T, t) && Te(y, r) || (e = { pending: null, dispatch: null, lastRenderedReducer: He, lastRenderedState: p }, e.dispatch = s = lu.bind(null, $, e), a.queue = e, a.baseQueue = null, p = Ea(i, t, n), a.memoizedState = a.baseState = p), p;
}
function Nf(e, t, n) {
  var r = At();
  return Cf(r, e, t, n);
}
function Nn(e) {
  var t = Pt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = t.queue = { pending: null, dispatch: null, lastRenderedReducer: He, lastRenderedState: e }, e = e.dispatch = lu.bind(null, $, e), [t.memoizedState, e];
}
function ui(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = $.updateQueue, t === null ? (t = { lastEffect: null }, $.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function wa(e) {
  var t = Pt();
  return e = { current: e }, t.memoizedState = e;
}
function ai() {
  return At().memoizedState;
}
function Wo(e, t, n, r) {
  var i = Pt();
  $.flags |= e, i.memoizedState = ui(1 | t, n, void 0, r === void 0 ? null : r);
}
function iu(e, t, n, r) {
  var i = At();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (re !== null) {
    var l = re.memoizedState;
    if (o = l.destroy, r !== null && nu(r, l.deps)) {
      ui(t, n, o, r);
      return;
    }
  }
  $.flags |= e, i.memoizedState = ui(1 | t, n, o, r);
}
function Sa(e, t) {
  return Wo(516, 4, e, t);
}
function si(e, t) {
  return iu(516, 4, e, t);
}
function Of(e, t) {
  return iu(4, 2, e, t);
}
function kf(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function If(e, t, n) {
  return n = n != null ? n.concat([e]) : null, iu(4, 2, kf.bind(null, t, e), n);
}
function ou() {
}
function Lf(e, t) {
  var n = At();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && nu(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Rf(e, t) {
  var n = At();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && nu(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Ep(e, t) {
  var n = on();
  Ot(98 > n ? 98 : n, function() {
    e(!0);
  }), Ot(97 < n ? 97 : n, function() {
    var r = Pe.transition;
    Pe.transition = 1;
    try {
      e(!1), t();
    } finally {
      Pe.transition = r;
    }
  });
}
function lu(e, t, n) {
  var r = Ee(), i = ot(e), o = { lane: i, action: n, eagerReducer: null, eagerState: null, next: null }, l = t.pending;
  if (l === null ? o.next = o : (o.next = l.next, l.next = o), t.pending = o, l = e.alternate, e === $ || l !== null && l === $) Vn = li = !0;
  else {
    if (e.lanes === 0 && (l === null || l.lanes === 0) && (l = t.lastRenderedReducer, l !== null)) try {
      var u = t.lastRenderedState, a = l(u, n);
      if (o.eagerReducer = l, o.eagerState = a, Te(a, u)) return;
    } catch {
    } finally {
    }
    lt(e, i, r);
  }
}
var fi = { readContext: Ce, useCallback: he, useContext: he, useEffect: he, useImperativeHandle: he, useLayoutEffect: he, useMemo: he, useReducer: he, useRef: he, useState: he, useDebugValue: he, useDeferredValue: he, useTransition: he, useMutableSource: he, useOpaqueIdentifier: he, unstable_isNewReconciler: !1 }, wp = { readContext: Ce, useCallback: function(e, t) {
  return Pt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Ce, useEffect: Sa, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Wo(4, 2, kf.bind(
    null,
    t,
    e
  ), n);
}, useLayoutEffect: function(e, t) {
  return Wo(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Pt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Pt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = r.queue = { pending: null, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, e = e.dispatch = lu.bind(null, $, e), [r.memoizedState, e];
}, useRef: wa, useState: Nn, useDebugValue: ou, useDeferredValue: function(e) {
  var t = Nn(e), n = t[0], r = t[1];
  return Sa(function() {
    var i = Pe.transition;
    Pe.transition = 1;
    try {
      r(e);
    } finally {
      Pe.transition = i;
    }
  }, [e]), n;
}, useTransition: function() {
  var e = Nn(!1), t = e[0];
  return e = Ep.bind(null, e[1]), wa(e), [e, t];
}, useMutableSource: function(e, t, n) {
  var r = Pt();
  return r.memoizedState = { refs: { getSnapshot: t, setSnapshot: null }, source: e, subscribe: n }, Cf(r, e, t, n);
}, useOpaqueIdentifier: function() {
  if (Be) {
    var e = !1, t = pp(function() {
      throw e || (e = !0, n("r:" + (lo++).toString(36))), Error(g(355));
    }), n = Nn(t)[1];
    return !($.mode & 2) && ($.flags |= 516, ui(
      5,
      function() {
        n("r:" + (lo++).toString(36));
      },
      void 0,
      null
    )), t;
  }
  return t = "r:" + (lo++).toString(36), Nn(t), t;
}, unstable_isNewReconciler: !1 }, Sp = { readContext: Ce, useCallback: Lf, useContext: Ce, useEffect: si, useImperativeHandle: If, useLayoutEffect: Of, useMemo: Rf, useReducer: Pn, useRef: ai, useState: function() {
  return Pn(He);
}, useDebugValue: ou, useDeferredValue: function(e) {
  var t = Pn(He), n = t[0], r = t[1];
  return si(function() {
    var i = Pe.transition;
    Pe.transition = 1;
    try {
      r(e);
    } finally {
      Pe.transition = i;
    }
  }, [e]), n;
}, useTransition: function() {
  var e = Pn(He)[0];
  return [
    ai().current,
    e
  ];
}, useMutableSource: Nf, useOpaqueIdentifier: function() {
  return Pn(He)[0];
}, unstable_isNewReconciler: !1 }, xp = { readContext: Ce, useCallback: Lf, useContext: Ce, useEffect: si, useImperativeHandle: If, useLayoutEffect: Of, useMemo: Rf, useReducer: Cn, useRef: ai, useState: function() {
  return Cn(He);
}, useDebugValue: ou, useDeferredValue: function(e) {
  var t = Cn(He), n = t[0], r = t[1];
  return si(function() {
    var i = Pe.transition;
    Pe.transition = 1;
    try {
      r(e);
    } finally {
      Pe.transition = i;
    }
  }, [e]), n;
}, useTransition: function() {
  var e = Cn(He)[0];
  return [
    ai().current,
    e
  ];
}, useMutableSource: Nf, useOpaqueIdentifier: function() {
  return Cn(He)[0];
}, unstable_isNewReconciler: !1 }, Tp = Rt.ReactCurrentOwner, Me = !1;
function me(e, t, n, r) {
  t.child = e === null ? _f(t, null, n, r) : ii(t, e.child, n, r);
}
function xa(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return Kt(t, i), r = ru(e, t, n, r, o, i), e !== null && !Me ? (t.updateQueue = e.updateQueue, t.flags &= -517, e.lanes &= ~i, $e(e, t, i)) : (t.flags |= 1, me(e, t, r, i), t.child);
}
function Ta(e, t, n, r, i, o) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" && !du(l) && l.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = l, Mf(e, t, l, r, i, o)) : (e = Gr(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  return l = e.child, !(i & o) && (i = l.memoizedProps, n = n.compare, n = n !== null ? n : tr, n(i, r) && e.ref === t.ref) ? $e(e, t, o) : (t.flags |= 1, e = dt(l, r), e.ref = t.ref, e.return = t, t.child = e);
}
function Mf(e, t, n, r, i, o) {
  if (e !== null && tr(e.memoizedProps, r) && e.ref === t.ref) if (Me = !1, (o & i) !== 0) e.flags & 16384 && (Me = !0);
  else return t.lanes = e.lanes, $e(e, t, o);
  return Xo(e, t, n, r, o);
}
function fo(e, t, n) {
  var r = t.pendingProps, i = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden" || r.mode === "unstable-defer-without-hiding") if (!(t.mode & 4)) t.memoizedState = { baseLanes: 0 }, kr(t, n);
  else if (n & 1073741824) t.memoizedState = { baseLanes: 0 }, kr(t, o !== null ? o.baseLanes : n);
  else return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e }, kr(t, e), null;
  else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, kr(t, r);
  return me(e, t, i, n), t.child;
}
function Af(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 128);
}
function Xo(e, t, n, r, i) {
  var o = ye(n) ? Nt : ue.current;
  return o = rn(t, o), Kt(t, i), n = ru(e, t, n, r, o, i), e !== null && !Me ? (t.updateQueue = e.updateQueue, t.flags &= -517, e.lanes &= ~i, $e(e, t, i)) : (t.flags |= 1, me(e, t, n, i), t.child);
}
function _a(e, t, n, r, i) {
  if (ye(n)) {
    var o = !0;
    Br(t);
  } else o = !1;
  if (Kt(t, i), t.stateNode === null) e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2), xf(t, n, r), Go(t, n, r, i), r = !0;
  else if (e === null) {
    var l = t.stateNode, u = t.memoizedProps;
    l.props = u;
    var a = l.context, s = n.contextType;
    typeof s == "object" && s !== null ? s = Ce(s) : (s = ye(n) ? Nt : ue.current, s = rn(t, s));
    var p = n.getDerivedStateFromProps, y = typeof p == "function" || typeof l.getSnapshotBeforeUpdate == "function";
    y || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (u !== r || a !== s) && ma(t, l, r, s), Ze = !1;
    var h = t.memoizedState;
    l.state = h, ir(t, r, l, i), a = t.memoizedState, u !== r || h !== a || ve.current || Ze ? (typeof p == "function" && (ri(t, n, p, r), a = t.memoizedState), (u = Ze || ha(t, n, u, r, h, a, s)) ? (y || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (t.flags |= 4)) : (typeof l.componentDidMount == "function" && (t.flags |= 4), t.memoizedProps = r, t.memoizedState = a), l.props = r, l.state = a, l.context = s, r = u) : (typeof l.componentDidMount == "function" && (t.flags |= 4), r = !1);
  } else {
    l = t.stateNode, wf(e, t), u = t.memoizedProps, s = t.type === t.elementType ? u : Re(t.type, u), l.props = s, y = t.pendingProps, h = l.context, a = n.contextType, typeof a == "object" && a !== null ? a = Ce(a) : (a = ye(n) ? Nt : ue.current, a = rn(t, a));
    var E = n.getDerivedStateFromProps;
    (p = typeof E == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (u !== y || h !== a) && ma(t, l, r, a), Ze = !1, h = t.memoizedState, l.state = h, ir(t, r, l, i);
    var T = t.memoizedState;
    u !== y || h !== T || ve.current || Ze ? (typeof E == "function" && (ri(t, n, E, r), T = t.memoizedState), (s = Ze || ha(t, n, s, r, h, T, a)) ? (p || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(
      r,
      T,
      a
    ), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, T, a)), typeof l.componentDidUpdate == "function" && (t.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 256)) : (typeof l.componentDidUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 256), t.memoizedProps = r, t.memoizedState = T), l.props = r, l.state = T, l.context = a, r = s) : (typeof l.componentDidUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 256), r = !1);
  }
  return Qo(e, t, n, r, o, i);
}
function Qo(e, t, n, r, i, o) {
  Af(e, t);
  var l = (t.flags & 64) !== 0;
  if (!r && !l) return i && sa(t, n, !1), $e(e, t, o);
  r = t.stateNode, Tp.current = t;
  var u = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && l ? (t.child = ii(t, e.child, null, o), t.child = ii(t, null, u, o)) : me(e, t, u, o), t.memoizedState = r.state, i && sa(t, n, !0), t.child;
}
function Pa(e) {
  var t = e.stateNode;
  t.pendingContext ? aa(e, t.pendingContext, t.pendingContext !== t.context) : t.context && aa(e, t.context, !1), Vo(e, t.containerInfo);
}
var Or = { dehydrated: null, retryLane: 0 };
function Ca(e, t, n) {
  var r = t.pendingProps, i = z.current, o = !1, l;
  return (l = (t.flags & 64) !== 0) || (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), l ? (o = !0, t.flags &= -65) : e !== null && e.memoizedState === null || r.fallback === void 0 || r.unstable_avoidThisFallback === !0 || (i |= 1), G(z, i & 1), e === null ? (r.fallback !== void 0 && $o(t), e = r.children, i = r.fallback, o ? (e = Na(t, e, i, n), t.child.memoizedState = { baseLanes: n }, t.memoizedState = Or, e) : typeof r.unstable_expectedLoadTime == "number" ? (e = Na(t, e, i, n), t.child.memoizedState = { baseLanes: n }, t.memoizedState = Or, t.lanes = 33554432, e) : (n = pu({ mode: "visible", children: e }, t.mode, n, null), n.return = t, t.child = n)) : e.memoizedState !== null ? o ? (r = ka(e, t, r.children, r.fallback, n), o = t.child, i = e.child.memoizedState, o.memoizedState = i === null ? { baseLanes: n } : { baseLanes: i.baseLanes | n }, o.childLanes = e.childLanes & ~n, t.memoizedState = Or, r) : (n = Oa(e, t, r.children, n), t.memoizedState = null, n) : o ? (r = ka(e, t, r.children, r.fallback, n), o = t.child, i = e.child.memoizedState, o.memoizedState = i === null ? { baseLanes: n } : { baseLanes: i.baseLanes | n }, o.childLanes = e.childLanes & ~n, t.memoizedState = Or, r) : (n = Oa(e, t, r.children, n), t.memoizedState = null, n);
}
function Na(e, t, n, r) {
  var i = e.mode, o = e.child;
  return t = { mode: "hidden", children: t }, !(i & 2) && o !== null ? (o.childLanes = 0, o.pendingProps = t) : o = pu(t, i, 0, null), n = tn(n, i, r, null), o.return = e, n.return = e, o.sibling = n, e.child = o, n;
}
function Oa(e, t, n, r) {
  var i = e.child;
  return e = i.sibling, n = dt(i, { mode: "visible", children: n }), !(t.mode & 2) && (n.lanes = r), n.return = t, n.sibling = null, e !== null && (e.nextEffect = null, e.flags = 8, t.firstEffect = t.lastEffect = e), t.child = n;
}
function ka(e, t, n, r, i) {
  var o = t.mode, l = e.child;
  e = l.sibling;
  var u = { mode: "hidden", children: n };
  return !(o & 2) && t.child !== l ? (n = t.child, n.childLanes = 0, n.pendingProps = u, l = n.lastEffect, l !== null ? (t.firstEffect = n.firstEffect, t.lastEffect = l, l.nextEffect = null) : t.firstEffect = t.lastEffect = null) : n = dt(l, u), e !== null ? r = dt(e, r) : (r = tn(r, o, i, null), r.flags |= 2), r.return = t, n.return = t, n.sibling = r, t.child = n, r;
}
function Ia(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  n !== null && (n.lanes |= t), Ef(e.return, t);
}
function co(e, t, n, r, i, o) {
  var l = e.memoizedState;
  l === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i, lastEffect: o } : (l.isBackwards = t, l.rendering = null, l.renderingStartTime = 0, l.last = r, l.tail = n, l.tailMode = i, l.lastEffect = o);
}
function La(e, t, n) {
  var r = t.pendingProps, i = r.revealOrder, o = r.tail;
  if (me(e, t, r.children, n), r = z.current, r & 2) r = r & 1 | 2, t.flags |= 64;
  else {
    if (e !== null && e.flags & 64) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Ia(e, n);
      else if (e.tag === 19) Ia(e, n);
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
  if (G(z, r), !(t.mode & 2)) t.memoizedState = null;
  else switch (i) {
    case "forwards":
      for (n = t.child, i = null; n !== null; ) e = n.alternate, e !== null && oi(e) === null && (i = n), n = n.sibling;
      n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), co(t, !1, i, n, o, t.lastEffect);
      break;
    case "backwards":
      for (n = null, i = t.child, t.child = null; i !== null; ) {
        if (e = i.alternate, e !== null && oi(e) === null) {
          t.child = i;
          break;
        }
        e = i.sibling, i.sibling = n, n = i, i = e;
      }
      co(t, !0, n, null, o, t.lastEffect);
      break;
    case "together":
      co(t, !1, null, null, void 0, t.lastEffect);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function $e(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), hr |= t.lanes, n & t.childLanes) {
    if (e !== null && t.child !== e.child) throw Error(g(153));
    if (t.child !== null) {
      for (e = t.child, n = dt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = dt(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  return null;
}
var Hf, Zo, Df, Ff;
Hf = function(e, t) {
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
Zo = function() {
};
Df = function(e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    e = t.stateNode, _t(Fe.current);
    var o = null;
    switch (n) {
      case "input":
        i = xo(e, i), r = xo(e, r), o = [];
        break;
      case "option":
        i = Po(e, i), r = Po(e, r), o = [];
        break;
      case "select":
        i = b({}, i, { value: void 0 }), r = b({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        i = Co(e, i), r = Co(e, r), o = [];
        break;
      default:
        typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Kr);
    }
    ko(n, r);
    var l;
    n = null;
    for (s in i) if (!r.hasOwnProperty(s) && i.hasOwnProperty(s) && i[s] != null) if (s === "style") {
      var u = i[s];
      for (l in u) u.hasOwnProperty(l) && (n || (n = {}), n[l] = "");
    } else s !== "dangerouslySetInnerHTML" && s !== "children" && s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (Qn.hasOwnProperty(s) ? o || (o = []) : (o = o || []).push(s, null));
    for (s in r) {
      var a = r[s];
      if (u = i != null ? i[s] : void 0, r.hasOwnProperty(s) && a !== u && (a != null || u != null)) if (s === "style") if (u) {
        for (l in u) !u.hasOwnProperty(l) || a && a.hasOwnProperty(l) || (n || (n = {}), n[l] = "");
        for (l in a) a.hasOwnProperty(l) && u[l] !== a[l] && (n || (n = {}), n[l] = a[l]);
      } else n || (o || (o = []), o.push(s, n)), n = a;
      else s === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, u = u ? u.__html : void 0, a != null && u !== a && (o = o || []).push(s, a)) : s === "children" ? typeof a != "string" && typeof a != "number" || (o = o || []).push(s, "" + a) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && (Qn.hasOwnProperty(s) ? (a != null && s === "onScroll" && B("scroll", e), o || u === a || (o = [])) : typeof a == "object" && a !== null && a.$$typeof === Ml ? a.toString() : (o = o || []).push(s, a));
    }
    n && (o = o || []).push(
      "style",
      n
    );
    var s = o;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
Ff = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function On(e, t) {
  if (!Be) switch (e.tailMode) {
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
function _p(e, t, n) {
  var r = t.pendingProps;
  switch (t.tag) {
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
      return null;
    case 1:
      return ye(t.type) && qr(), null;
    case 3:
      return ln(), j(ve), j(ue), tu(), r = t.stateNode, r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Nr(t) ? t.flags |= 4 : r.hydrate || (t.flags |= 256)), Zo(t), null;
    case 5:
      eu(t);
      var i = _t(lr.current);
      if (n = t.type, e !== null && t.stateNode != null) Df(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 128);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(g(166));
          return null;
        }
        if (e = _t(Fe.current), Nr(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[Je] = t, r[Jr] = o, n) {
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
              for (e = 0; e < Rn.length; e++) B(Rn[e], r);
              break;
            case "source":
              B("error", r);
              break;
            case "img":
            case "image":
            case "link":
              B("error", r), B("load", r);
              break;
            case "details":
              B("toggle", r);
              break;
            case "input":
              Lu(r, o), B("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, B("invalid", r);
              break;
            case "textarea":
              Mu(r, o), B("invalid", r);
          }
          ko(n, o), e = null;
          for (var l in o) o.hasOwnProperty(l) && (i = o[l], l === "children" ? typeof i == "string" ? r.textContent !== i && (e = ["children", i]) : typeof i == "number" && r.textContent !== "" + i && (e = ["children", "" + i]) : Qn.hasOwnProperty(l) && i != null && l === "onScroll" && B("scroll", r));
          switch (n) {
            case "input":
              Sr(r), Ru(r, o, !0);
              break;
            case "textarea":
              Sr(r), Au(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Kr);
          }
          r = e, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          switch (l = i.nodeType === 9 ? i : i.ownerDocument, e === No.html && (e = Is(n)), e === No.html ? n === "script" ? (e = l.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, { is: r.is }) : (e = l.createElement(n), n === "select" && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[Je] = t, e[Jr] = r, Hf(e, t, !1, !1), t.stateNode = e, l = Io(n, r), n) {
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
              for (i = 0; i < Rn.length; i++) B(Rn[i], e);
              i = r;
              break;
            case "source":
              B("error", e), i = r;
              break;
            case "img":
            case "image":
            case "link":
              B("error", e), B("load", e), i = r;
              break;
            case "details":
              B("toggle", e), i = r;
              break;
            case "input":
              Lu(e, r), i = xo(e, r), B("invalid", e);
              break;
            case "option":
              i = Po(e, r);
              break;
            case "select":
              e._wrapperState = { wasMultiple: !!r.multiple }, i = b({}, r, { value: void 0 }), B("invalid", e);
              break;
            case "textarea":
              Mu(e, r), i = Co(e, r), B("invalid", e);
              break;
            default:
              i = r;
          }
          ko(n, i);
          var u = i;
          for (o in u) if (u.hasOwnProperty(o)) {
            var a = u[o];
            o === "style" ? Ms(e, a) : o === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && Ls(e, a)) : o === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Zn(e, a) : typeof a == "number" && Zn(e, "" + a) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Qn.hasOwnProperty(o) ? a != null && o === "onScroll" && B("scroll", e) : a != null && Nl(e, o, a, l));
          }
          switch (n) {
            case "input":
              Sr(e), Ru(e, r, !1);
              break;
            case "textarea":
              Sr(e), Au(e);
              break;
            case "option":
              r.value != null && e.setAttribute("value", "" + at(r.value));
              break;
            case "select":
              e.multiple = !!r.multiple, o = r.value, o != null ? Xt(e, !!r.multiple, o, !1) : r.defaultValue != null && Xt(e, !!r.multiple, r.defaultValue, !0);
              break;
            default:
              typeof i.onClick == "function" && (e.onclick = Kr);
          }
          ff(n, r) && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 128);
      }
      return null;
    case 6:
      if (e && t.stateNode != null) Ff(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(g(166));
        n = _t(lr.current), _t(Fe.current), Nr(t) ? (r = t.stateNode, n = t.memoizedProps, r[Je] = t, r.nodeValue !== n && (t.flags |= 4)) : (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Je] = t, t.stateNode = r);
      }
      return null;
    case 13:
      return j(z), r = t.memoizedState, t.flags & 64 ? (t.lanes = n, t) : (r = r !== null, n = !1, e === null ? t.memoizedProps.fallback !== void 0 && Nr(t) : n = e.memoizedState !== null, r && !n && t.mode & 2 && (e === null && t.memoizedProps.unstable_avoidThisFallback !== !0 || z.current & 1 ? ee === 0 && (ee = 3) : ((ee === 0 || ee === 3) && (ee = 4), de === null || !(hr & 134217727) && !(hn & 134217727) || qt(de, oe))), (r || n) && (t.flags |= 4), null);
    case 4:
      return ln(), Zo(t), e === null && uf(t.stateNode.containerInfo), null;
    case 10:
      return Jl(t), null;
    case 17:
      return ye(t.type) && qr(), null;
    case 19:
      if (j(z), r = t.memoizedState, r === null) return null;
      if (o = (t.flags & 64) !== 0, l = r.rendering, l === null) if (o) On(r, !1);
      else {
        if (ee !== 0 || e !== null && e.flags & 64) for (e = t.child; e !== null; ) {
          if (l = oi(e), l !== null) {
            for (t.flags |= 64, On(r, !1), o = l.updateQueue, o !== null && (t.updateQueue = o, t.flags |= 4), r.lastEffect === null && (t.firstEffect = null), t.lastEffect = r.lastEffect, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 2, o.nextEffect = null, o.firstEffect = null, o.lastEffect = null, l = o.alternate, l === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = l.childLanes, o.lanes = l.lanes, o.child = l.child, o.memoizedProps = l.memoizedProps, o.memoizedState = l.memoizedState, o.updateQueue = l.updateQueue, o.type = l.type, e = l.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return G(z, z.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        r.tail !== null && ie() > tl && (t.flags |= 64, o = !0, On(r, !1), t.lanes = 33554432);
      }
      else {
        if (!o) if (e = oi(l), e !== null) {
          if (t.flags |= 64, o = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), On(r, !0), r.tail === null && r.tailMode === "hidden" && !l.alternate && !Be) return t = t.lastEffect = r.lastEffect, t !== null && (t.nextEffect = null), null;
        } else 2 * ie() - r.renderingStartTime > tl && n !== 1073741824 && (t.flags |= 64, o = !0, On(r, !1), t.lanes = 33554432);
        r.isBackwards ? (l.sibling = t.child, t.child = l) : (n = r.last, n !== null ? n.sibling = l : t.child = l, r.last = l);
      }
      return r.tail !== null ? (n = r.tail, r.rendering = n, r.tail = n.sibling, r.lastEffect = t.lastEffect, r.renderingStartTime = ie(), n.sibling = null, t = z.current, G(z, o ? t & 1 | 2 : t & 1), n) : null;
    case 23:
    case 24:
      return cu(), e !== null && e.memoizedState !== null != (t.memoizedState !== null) && r.mode !== "unstable-defer-without-hiding" && (t.flags |= 4), null;
  }
  throw Error(g(156, t.tag));
}
function Pp(e) {
  switch (e.tag) {
    case 1:
      ye(e.type) && qr();
      var t = e.flags;
      return t & 4096 ? (e.flags = t & -4097 | 64, e) : null;
    case 3:
      if (ln(), j(ve), j(ue), tu(), t = e.flags, t & 64) throw Error(g(285));
      return e.flags = t & -4097 | 64, e;
    case 5:
      return eu(e), null;
    case 13:
      return j(z), t = e.flags, t & 4096 ? (e.flags = t & -4097 | 64, e) : null;
    case 19:
      return j(z), null;
    case 4:
      return ln(), null;
    case 10:
      return Jl(e), null;
    case 23:
    case 24:
      return cu(), null;
    default:
      return null;
  }
}
function uu(e, t) {
  try {
    var n = "", r = t;
    do
      n += id(r), r = r.return;
    while (r);
    var i = n;
  } catch (o) {
    i = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: t, stack: i };
}
function Yo(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Cp = typeof WeakMap == "function" ? WeakMap : Map;
function Bf(e, t, n) {
  n = rt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    di || (di = !0, nl = r), Yo(e, t);
  }, n;
}
function Uf(e, t, n) {
  n = rt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    n.payload = function() {
      return Yo(e, t), r(i);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    typeof r != "function" && (De === null ? De = /* @__PURE__ */ new Set([this]) : De.add(this), Yo(e, t));
    var l = t.stack;
    this.componentDidCatch(t.value, { componentStack: l !== null ? l : "" });
  }), n;
}
var Np = typeof WeakSet == "function" ? WeakSet : Set;
function Ra(e) {
  var t = e.ref;
  if (t !== null) if (typeof t == "function") try {
    t(null);
  } catch (n) {
    ut(e, n);
  }
  else t.current = null;
}
function Op(e, t) {
  switch (t.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      return;
    case 1:
      if (t.flags & 256 && e !== null) {
        var n = e.memoizedProps, r = e.memoizedState;
        e = t.stateNode, t = e.getSnapshotBeforeUpdate(t.elementType === t.type ? n : Re(t.type, n), r), e.__reactInternalSnapshotBeforeUpdate = t;
      }
      return;
    case 3:
      t.flags & 256 && Ql(t.stateNode.containerInfo);
      return;
    case 5:
    case 6:
    case 4:
    case 17:
      return;
  }
  throw Error(g(163));
}
function kp(e, t, n) {
  switch (n.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      if (t = n.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        e = t = t.next;
        do {
          if ((e.tag & 3) === 3) {
            var r = e.create;
            e.destroy = r();
          }
          e = e.next;
        } while (e !== t);
      }
      if (t = n.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        e = t = t.next;
        do {
          var i = e;
          r = i.next, i = i.tag, i & 4 && i & 1 && (Qf(n, e), Fp(n, e)), e = r;
        } while (e !== t);
      }
      return;
    case 1:
      e = n.stateNode, n.flags & 4 && (t === null ? e.componentDidMount() : (r = n.elementType === n.type ? t.memoizedProps : Re(n.type, t.memoizedProps), e.componentDidUpdate(
        r,
        t.memoizedState,
        e.__reactInternalSnapshotBeforeUpdate
      ))), t = n.updateQueue, t !== null && pa(n, t, e);
      return;
    case 3:
      if (t = n.updateQueue, t !== null) {
        if (e = null, n.child !== null) switch (n.child.tag) {
          case 5:
            e = n.child.stateNode;
            break;
          case 1:
            e = n.child.stateNode;
        }
        pa(n, t, e);
      }
      return;
    case 5:
      e = n.stateNode, t === null && n.flags & 4 && ff(n.type, n.memoizedProps) && e.focus();
      return;
    case 6:
      return;
    case 4:
      return;
    case 12:
      return;
    case 13:
      n.memoizedState === null && (n = n.alternate, n !== null && (n = n.memoizedState, n !== null && (n = n.dehydrated, n !== null && Gs(n))));
      return;
    case 19:
    case 17:
    case 20:
    case 21:
    case 23:
    case 24:
      return;
  }
  throw Error(g(163));
}
function Ma(e, t) {
  for (var n = e; ; ) {
    if (n.tag === 5) {
      var r = n.stateNode;
      if (t) r = r.style, typeof r.setProperty == "function" ? r.setProperty("display", "none", "important") : r.display = "none";
      else {
        r = n.stateNode;
        var i = n.memoizedProps.style;
        i = i != null && i.hasOwnProperty("display") ? i.display : null, r.style.display = Rs("display", i);
      }
    } else if (n.tag === 6) n.stateNode.nodeValue = t ? "" : n.memoizedProps;
    else if ((n.tag !== 23 && n.tag !== 24 || n.memoizedState === null || n === e) && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === e) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === e) return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
}
function Aa(e, t) {
  if (Ct && typeof Ct.onCommitFiberUnmount == "function") try {
    Ct.onCommitFiberUnmount(Zl, t);
  } catch {
  }
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      if (e = t.updateQueue, e !== null && (e = e.lastEffect, e !== null)) {
        var n = e = e.next;
        do {
          var r = n, i = r.destroy;
          if (r = r.tag, i !== void 0) if (r & 4) Qf(t, n);
          else {
            r = t;
            try {
              i();
            } catch (o) {
              ut(r, o);
            }
          }
          n = n.next;
        } while (n !== e);
      }
      break;
    case 1:
      if (Ra(t), e = t.stateNode, typeof e.componentWillUnmount == "function") try {
        e.props = t.memoizedProps, e.state = t.memoizedState, e.componentWillUnmount();
      } catch (o) {
        ut(
          t,
          o
        );
      }
      break;
    case 5:
      Ra(t);
      break;
    case 4:
      jf(e, t);
  }
}
function Ha(e) {
  e.alternate = null, e.child = null, e.dependencies = null, e.firstEffect = null, e.lastEffect = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.return = null, e.updateQueue = null;
}
function Da(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Fa(e) {
  e: {
    for (var t = e.return; t !== null; ) {
      if (Da(t)) break e;
      t = t.return;
    }
    throw Error(g(160));
  }
  var n = t;
  switch (t = n.stateNode, n.tag) {
    case 5:
      var r = !1;
      break;
    case 3:
      t = t.containerInfo, r = !0;
      break;
    case 4:
      t = t.containerInfo, r = !0;
      break;
    default:
      throw Error(g(161));
  }
  n.flags & 16 && (Zn(t, ""), n.flags &= -17);
  e: t: for (n = e; ; ) {
    for (; n.sibling === null; ) {
      if (n.return === null || Da(n.return)) {
        n = null;
        break e;
      }
      n = n.return;
    }
    for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
      if (n.flags & 2 || n.child === null || n.tag === 4) continue t;
      n.child.return = n, n = n.child;
    }
    if (!(n.flags & 2)) {
      n = n.stateNode;
      break e;
    }
  }
  r ? Ko(e, n, t) : Jo(e, n, t);
}
function Ko(e, t, n) {
  var r = e.tag, i = r === 5 || r === 6;
  if (i) e = i ? e.stateNode : e.stateNode.instance, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Kr));
  else if (r !== 4 && (e = e.child, e !== null)) for (Ko(e, t, n), e = e.sibling; e !== null; ) Ko(e, t, n), e = e.sibling;
}
function Jo(e, t, n) {
  var r = e.tag, i = r === 5 || r === 6;
  if (i) e = i ? e.stateNode : e.stateNode.instance, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Jo(e, t, n), e = e.sibling; e !== null; ) Jo(e, t, n), e = e.sibling;
}
function jf(e, t) {
  for (var n = t, r = !1, i, o; ; ) {
    if (!r) {
      r = n.return;
      e: for (; ; ) {
        if (r === null) throw Error(g(160));
        switch (i = r.stateNode, r.tag) {
          case 5:
            o = !1;
            break e;
          case 3:
            i = i.containerInfo, o = !0;
            break e;
          case 4:
            i = i.containerInfo, o = !0;
            break e;
        }
        r = r.return;
      }
      r = !0;
    }
    if (n.tag === 5 || n.tag === 6) {
      e: for (var l = e, u = n, a = u; ; ) if (Aa(l, a), a.child !== null && a.tag !== 4) a.child.return = a, a = a.child;
      else {
        if (a === u) break e;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === u) break e;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      o ? (l = i, u = n.stateNode, l.nodeType === 8 ? l.parentNode.removeChild(u) : l.removeChild(u)) : i.removeChild(n.stateNode);
    } else if (n.tag === 4) {
      if (n.child !== null) {
        i = n.stateNode.containerInfo, o = !0, n.child.return = n, n = n.child;
        continue;
      }
    } else if (Aa(e, n), n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return, n.tag === 4 && (r = !1);
    }
    n.sibling.return = n.return, n = n.sibling;
  }
}
function po(e, t) {
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      var n = t.updateQueue;
      if (n = n !== null ? n.lastEffect : null, n !== null) {
        var r = n = n.next;
        do
          (r.tag & 3) === 3 && (e = r.destroy, r.destroy = void 0, e !== void 0 && e()), r = r.next;
        while (r !== n);
      }
      return;
    case 1:
      return;
    case 5:
      if (n = t.stateNode, n != null) {
        r = t.memoizedProps;
        var i = e !== null ? e.memoizedProps : r;
        e = t.type;
        var o = t.updateQueue;
        if (t.updateQueue = null, o !== null) {
          for (n[Jr] = r, e === "input" && r.type === "radio" && r.name != null && Os(n, r), Io(e, i), t = Io(e, r), i = 0; i < o.length; i += 2) {
            var l = o[i], u = o[i + 1];
            l === "style" ? Ms(n, u) : l === "dangerouslySetInnerHTML" ? Ls(n, u) : l === "children" ? Zn(n, u) : Nl(n, l, u, t);
          }
          switch (e) {
            case "input":
              To(n, r);
              break;
            case "textarea":
              ks(n, r);
              break;
            case "select":
              e = n._wrapperState.wasMultiple, n._wrapperState.wasMultiple = !!r.multiple, o = r.value, o != null ? Xt(n, !!r.multiple, o, !1) : e !== !!r.multiple && (r.defaultValue != null ? Xt(n, !!r.multiple, r.defaultValue, !0) : Xt(n, !!r.multiple, r.multiple ? [] : "", !1));
          }
        }
      }
      return;
    case 6:
      if (t.stateNode === null) throw Error(g(162));
      t.stateNode.nodeValue = t.memoizedProps;
      return;
    case 3:
      n = t.stateNode, n.hydrate && (n.hydrate = !1, Gs(n.containerInfo));
      return;
    case 12:
      return;
    case 13:
      t.memoizedState !== null && (fu = ie(), Ma(t.child, !0)), Ba(t);
      return;
    case 19:
      Ba(t);
      return;
    case 17:
      return;
    case 23:
    case 24:
      Ma(t, t.memoizedState !== null);
      return;
  }
  throw Error(g(163));
}
function Ba(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Np()), t.forEach(function(r) {
      var i = jp.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(i, i));
    });
  }
}
function Ip(e, t) {
  return e !== null && (e = e.memoizedState, e === null || e.dehydrated !== null) ? (t = t.memoizedState, t !== null && t.dehydrated === null) : !1;
}
var Lp = Math.ceil, ci = Rt.ReactCurrentDispatcher, au = Rt.ReactCurrentOwner, k = 0, de = null, W = null, oe = 0, kt = 0, qo = pt(0), ee = 0, Ni = null, pn = 0, hr = 0, hn = 0, su = 0, el = null, fu = 0, tl = 1 / 0;
function mn() {
  tl = ie() + 500;
}
var _ = null, di = !1, nl = null, De = null, ct = !1, $n = null, Mn = 90, rl = [], il = [], We = null, Wn = 0, ol = null, jr = -1, Ge = 0, br = 0, Xn = null, zr = !1;
function Ee() {
  return k & 48 ? ie() : jr !== -1 ? jr : jr = ie();
}
function ot(e) {
  if (e = e.mode, !(e & 2)) return 1;
  if (!(e & 4)) return on() === 99 ? 1 : 2;
  if (Ge === 0 && (Ge = pn), gp.transition !== 0) {
    br !== 0 && (br = el !== null ? el.pendingLanes : 0), e = Ge;
    var t = 4186112 & ~br;
    return t &= -t, t === 0 && (e = 4186112 & ~e, t = e & -e, t === 0 && (t = 8192)), t;
  }
  return e = on(), k & 4 && e === 98 ? e = Zr(12, Ge) : (e = wd(e), e = Zr(e, Ge)), e;
}
function lt(e, t, n) {
  if (50 < Wn) throw Wn = 0, ol = null, Error(g(185));
  if (e = Oi(e, t), e === null) return null;
  wi(e, t, n), e === de && (hn |= t, ee === 4 && qt(e, oe));
  var r = on();
  t === 1 ? k & 8 && !(k & 48) ? ll(e) : (Ne(e, n), k === 0 && (mn(), je())) : (!(k & 4) || r !== 98 && r !== 99 || (We === null ? We = /* @__PURE__ */ new Set([e]) : We.add(e)), Ne(e, n)), el = e;
}
function Oi(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
function Ne(e, t) {
  for (var n = e.callbackNode, r = e.suspendedLanes, i = e.pingedLanes, o = e.expirationTimes, l = e.pendingLanes; 0 < l; ) {
    var u = 31 - st(l), a = 1 << u, s = o[u];
    if (s === -1) {
      if (!(a & r) || a & i) {
        s = t, Bt(a);
        var p = F;
        o[u] = 10 <= p ? s + 250 : 6 <= p ? s + 5e3 : -1;
      }
    } else s <= t && (e.expiredLanes |= a);
    l &= ~a;
  }
  if (r = qn(e, e === de ? oe : 0), t = F, r === 0) n !== null && (n !== uo && bo(n), e.callbackNode = null, e.callbackPriority = 0);
  else {
    if (n !== null) {
      if (e.callbackPriority === t) return;
      n !== uo && bo(n);
    }
    t === 15 ? (n = ll.bind(null, e), ze === null ? (ze = [n], Ur = Yl(Pi, gf)) : ze.push(n), n = uo) : t === 14 ? n = rr(99, ll.bind(null, e)) : (n = Sd(t), n = rr(n, bf.bind(null, e))), e.callbackPriority = t, e.callbackNode = n;
  }
}
function bf(e) {
  if (jr = -1, br = Ge = 0, k & 48) throw Error(g(327));
  var t = e.callbackNode;
  if (ht() && e.callbackNode !== t) return null;
  var n = qn(e, e === de ? oe : 0);
  if (n === 0) return null;
  var r = n, i = k;
  k |= 16;
  var o = $f();
  (de !== e || oe !== r) && (mn(), en(e, r));
  do
    try {
      Ap();
      break;
    } catch (u) {
      Vf(e, u);
    }
  while (!0);
  if (Kl(), ci.current = o, k = i, W !== null ? r = 0 : (de = null, oe = 0, r = ee), pn & hn) en(e, 0);
  else if (r !== 0) {
    if (r === 2 && (k |= 64, e.hydrate && (e.hydrate = !1, Ql(e.containerInfo)), n = Ys(e), n !== 0 && (r = An(e, n))), r === 1) throw t = Ni, en(e, 0), qt(e, n), Ne(e, ie()), t;
    switch (e.finishedWork = e.current.alternate, e.finishedLanes = n, r) {
      case 0:
      case 1:
        throw Error(g(345));
      case 2:
        wt(e);
        break;
      case 3:
        if (qt(e, n), (n & 62914560) === n && (r = fu + 500 - ie(), 10 < r)) {
          if (qn(e, 0) !== 0) break;
          if (i = e.suspendedLanes, (i & n) !== n) {
            Ee(), e.pingedLanes |= e.suspendedLanes & i;
            break;
          }
          e.timeoutHandle = oa(wt.bind(null, e), r);
          break;
        }
        wt(e);
        break;
      case 4:
        if (qt(e, n), (n & 4186112) === n) break;
        for (r = e.eventTimes, i = -1; 0 < n; ) {
          var l = 31 - st(n);
          o = 1 << l, l = r[l], l > i && (i = l), n &= ~o;
        }
        if (n = i, n = ie() - n, n = (120 > n ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * Lp(n / 1960)) - n, 10 < n) {
          e.timeoutHandle = oa(wt.bind(null, e), n);
          break;
        }
        wt(e);
        break;
      case 5:
        wt(e);
        break;
      default:
        throw Error(g(329));
    }
  }
  return Ne(e, ie()), e.callbackNode === t ? bf.bind(null, e) : null;
}
function qt(e, t) {
  for (t &= ~su, t &= ~hn, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - st(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function ll(e) {
  if (k & 48) throw Error(g(327));
  if (ht(), e === de && e.expiredLanes & oe) {
    var t = oe, n = An(e, t);
    pn & hn && (t = qn(e, t), n = An(e, t));
  } else t = qn(e, 0), n = An(e, t);
  if (e.tag !== 0 && n === 2 && (k |= 64, e.hydrate && (e.hydrate = !1, Ql(e.containerInfo)), t = Ys(e), t !== 0 && (n = An(e, t))), n === 1) throw n = Ni, en(e, 0), qt(e, t), Ne(e, ie()), n;
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, wt(e), Ne(e, ie()), null;
}
function Rp() {
  if (We !== null) {
    var e = We;
    We = null, e.forEach(function(t) {
      t.expiredLanes |= 24 & t.pendingLanes, Ne(t, ie());
    });
  }
  je();
}
function zf(e, t) {
  var n = k;
  k |= 1;
  try {
    return e(t);
  } finally {
    k = n, k === 0 && (mn(), je());
  }
}
function Gf(e, t) {
  var n = k;
  k &= -2, k |= 8;
  try {
    return e(t);
  } finally {
    k = n, k === 0 && (mn(), je());
  }
}
function kr(e, t) {
  G(qo, kt), kt |= t, pn |= t;
}
function cu() {
  kt = qo.current, j(qo);
}
function en(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, dp(n)), W !== null) for (n = W.return; n !== null; ) {
    var r = n;
    switch (r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && qr();
        break;
      case 3:
        ln(), j(ve), j(ue), tu();
        break;
      case 5:
        eu(r);
        break;
      case 4:
        ln();
        break;
      case 13:
        j(z);
        break;
      case 19:
        j(z);
        break;
      case 10:
        Jl(r);
        break;
      case 23:
      case 24:
        cu();
    }
    n = n.return;
  }
  de = e, W = dt(e.current, null), oe = kt = pn = t, ee = 0, Ni = null, su = hn = hr = 0;
}
function Vf(e, t) {
  do {
    var n = W;
    try {
      if (Kl(), Gn.current = fi, li) {
        for (var r = $.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), r = r.next;
        }
        li = !1;
      }
      if (ur = 0, q = re = $ = null, Vn = !1, au.current = null, n === null || n.return === null) {
        ee = 1, Ni = t, W = null;
        break;
      }
      e: {
        var o = e, l = n.return, u = n, a = t;
        if (t = oe, u.flags |= 2048, u.firstEffect = u.lastEffect = null, a !== null && typeof a == "object" && typeof a.then == "function") {
          var s = a;
          if (!(u.mode & 2)) {
            var p = u.alternate;
            p ? (u.updateQueue = p.updateQueue, u.memoizedState = p.memoizedState, u.lanes = p.lanes) : (u.updateQueue = null, u.memoizedState = null);
          }
          var y = (z.current & 1) !== 0, h = l;
          do {
            var E;
            if (E = h.tag === 13) {
              var T = h.memoizedState;
              if (T !== null) E = T.dehydrated !== null;
              else {
                var w = h.memoizedProps;
                E = w.fallback === void 0 ? !1 : w.unstable_avoidThisFallback !== !0 ? !0 : !y;
              }
            }
            if (E) {
              var d = h.updateQueue;
              if (d === null) {
                var f = /* @__PURE__ */ new Set();
                f.add(s), h.updateQueue = f;
              } else d.add(s);
              if (!(h.mode & 2)) {
                if (h.flags |= 64, u.flags |= 16384, u.flags &= -2981, u.tag === 1) if (u.alternate === null) u.tag = 17;
                else {
                  var c = rt(-1, 1);
                  c.tag = 2, it(u, c);
                }
                u.lanes |= 1;
                break e;
              }
              a = void 0, u = t;
              var m = o.pingCache;
              if (m === null ? (m = o.pingCache = new Cp(), a = /* @__PURE__ */ new Set(), m.set(s, a)) : (a = m.get(s), a === void 0 && (a = /* @__PURE__ */ new Set(), m.set(s, a))), !a.has(u)) {
                a.add(u);
                var v = Up.bind(null, o, s, u);
                s.then(v, v);
              }
              h.flags |= 4096, h.lanes = t;
              break e;
            }
            h = h.return;
          } while (h !== null);
          a = Error((Wt(u.type) || "A React component") + ` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`);
        }
        ee !== 5 && (ee = 2), a = uu(a, u), h = l;
        do {
          switch (h.tag) {
            case 3:
              o = a, h.flags |= 4096, t &= -t, h.lanes |= t;
              var C = Bf(h, o, t);
              da(h, C);
              break e;
            case 1:
              o = a;
              var S = h.type, O = h.stateNode;
              if (!(h.flags & 64) && (typeof S.getDerivedStateFromError == "function" || O !== null && typeof O.componentDidCatch == "function" && (De === null || !De.has(O)))) {
                h.flags |= 4096, t &= -t, h.lanes |= t;
                var L = Uf(h, o, t);
                da(h, L);
                break e;
              }
          }
          h = h.return;
        } while (h !== null);
      }
      Xf(n);
    } catch (N) {
      t = N, W === n && n !== null && (W = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function $f() {
  var e = ci.current;
  return ci.current = fi, e === null ? fi : e;
}
function An(e, t) {
  var n = k;
  k |= 16;
  var r = $f();
  de === e && oe === t || en(e, t);
  do
    try {
      Mp();
      break;
    } catch (i) {
      Vf(e, i);
    }
  while (!0);
  if (Kl(), k = n, ci.current = r, W !== null) throw Error(g(261));
  return de = null, oe = 0, ee;
}
function Mp() {
  for (; W !== null; ) Wf(W);
}
function Ap() {
  for (; W !== null && !mp(); ) Wf(W);
}
function Wf(e) {
  var t = Zf(e.alternate, e, kt);
  e.memoizedProps = e.pendingProps, t === null ? Xf(e) : W = t, au.current = null;
}
function Xf(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 2048) {
      if (n = Pp(t), n !== null) {
        n.flags &= 2047, W = n;
        return;
      }
      e !== null && (e.firstEffect = e.lastEffect = null, e.flags |= 2048);
    } else {
      if (n = _p(n, t, kt), n !== null) {
        W = n;
        return;
      }
      if (n = t, n.tag !== 24 && n.tag !== 23 || n.memoizedState === null || kt & 1073741824 || !(n.mode & 4)) {
        for (var r = 0, i = n.child; i !== null; ) r |= i.lanes | i.childLanes, i = i.sibling;
        n.childLanes = r;
      }
      e !== null && !(e.flags & 2048) && (e.firstEffect === null && (e.firstEffect = t.firstEffect), t.lastEffect !== null && (e.lastEffect !== null && (e.lastEffect.nextEffect = t.firstEffect), e.lastEffect = t.lastEffect), 1 < t.flags && (e.lastEffect !== null ? e.lastEffect.nextEffect = t : e.firstEffect = t, e.lastEffect = t));
    }
    if (t = t.sibling, t !== null) {
      W = t;
      return;
    }
    W = t = e;
  } while (t !== null);
  ee === 0 && (ee = 5);
}
function wt(e) {
  var t = on();
  return Ot(99, Hp.bind(null, e, t)), null;
}
function Hp(e, t) {
  do
    ht();
  while ($n !== null);
  if (k & 48) throw Error(g(327));
  var n = e.finishedWork;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(g(177));
  e.callbackNode = null;
  var r = n.lanes | n.childLanes, i = r, o = e.pendingLanes & ~i;
  e.pendingLanes = i, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= i, e.mutableReadLanes &= i, e.entangledLanes &= i, i = e.entanglements;
  for (var l = e.eventTimes, u = e.expirationTimes; 0 < o; ) {
    var a = 31 - st(o), s = 1 << a;
    i[a] = 0, l[a] = -1, u[a] = -1, o &= ~s;
  }
  if (We !== null && !(r & 24) && We.has(e) && We.delete(e), e === de && (W = de = null, oe = 0), 1 < n.flags ? n.lastEffect !== null ? (n.lastEffect.nextEffect = n, r = n.firstEffect) : r = n : r = n.firstEffect, r !== null) {
    if (i = k, k |= 32, au.current = null, io = Hr, l = Ju(), Do(l)) {
      if ("selectionStart" in l) u = { start: l.selectionStart, end: l.selectionEnd };
      else e: if (u = (u = l.ownerDocument) && u.defaultView || window, (s = u.getSelection && u.getSelection()) && s.rangeCount !== 0) {
        u = s.anchorNode, o = s.anchorOffset, a = s.focusNode, s = s.focusOffset;
        try {
          u.nodeType, a.nodeType;
        } catch {
          u = null;
          break e;
        }
        var p = 0, y = -1, h = -1, E = 0, T = 0, w = l, d = null;
        t: for (; ; ) {
          for (var f; w !== u || o !== 0 && w.nodeType !== 3 || (y = p + o), w !== a || s !== 0 && w.nodeType !== 3 || (h = p + s), w.nodeType === 3 && (p += w.nodeValue.length), (f = w.firstChild) !== null; )
            d = w, w = f;
          for (; ; ) {
            if (w === l) break t;
            if (d === u && ++E === o && (y = p), d === a && ++T === s && (h = p), (f = w.nextSibling) !== null) break;
            w = d, d = w.parentNode;
          }
          w = f;
        }
        u = y === -1 || h === -1 ? null : { start: y, end: h };
      } else u = null;
      u = u || { start: 0, end: 0 };
    } else u = null;
    oo = { focusedElem: l, selectionRange: u }, Hr = !1, Xn = null, zr = !1, _ = r;
    do
      try {
        Dp();
      } catch (N) {
        if (_ === null) throw Error(g(330));
        ut(_, N), _ = _.nextEffect;
      }
    while (_ !== null);
    Xn = null, _ = r;
    do
      try {
        for (l = e; _ !== null; ) {
          var c = _.flags;
          if (c & 16 && Zn(_.stateNode, ""), c & 128) {
            var m = _.alternate;
            if (m !== null) {
              var v = m.ref;
              v !== null && (typeof v == "function" ? v(null) : v.current = null);
            }
          }
          switch (c & 1038) {
            case 2:
              Fa(_), _.flags &= -3;
              break;
            case 6:
              Fa(_), _.flags &= -3, po(_.alternate, _);
              break;
            case 1024:
              _.flags &= -1025;
              break;
            case 1028:
              _.flags &= -1025, po(_.alternate, _);
              break;
            case 4:
              po(_.alternate, _);
              break;
            case 8:
              u = _, jf(l, u);
              var C = u.alternate;
              Ha(u), C !== null && Ha(C);
          }
          _ = _.nextEffect;
        }
      } catch (N) {
        if (_ === null) throw Error(g(330));
        ut(_, N), _ = _.nextEffect;
      }
    while (_ !== null);
    if (v = oo, m = Ju(), c = v.focusedElem, l = v.selectionRange, m !== c && c && c.ownerDocument && of(c.ownerDocument.documentElement, c)) {
      for (l !== null && Do(c) && (m = l.start, v = l.end, v === void 0 && (v = m), "selectionStart" in c ? (c.selectionStart = m, c.selectionEnd = Math.min(v, c.value.length)) : (v = (m = c.ownerDocument || document) && m.defaultView || window, v.getSelection && (v = v.getSelection(), u = c.textContent.length, C = Math.min(l.start, u), l = l.end === void 0 ? C : Math.min(l.end, u), !v.extend && C > l && (u = l, l = C, C = u), u = Ku(c, C), o = Ku(c, l), u && o && (v.rangeCount !== 1 || v.anchorNode !== u.node || v.anchorOffset !== u.offset || v.focusNode !== o.node || v.focusOffset !== o.offset) && (m = m.createRange(), m.setStart(u.node, u.offset), v.removeAllRanges(), C > l ? (v.addRange(m), v.extend(o.node, o.offset)) : (m.setEnd(o.node, o.offset), v.addRange(m)))))), m = [], v = c; v = v.parentNode; ) v.nodeType === 1 && m.push({ element: v, left: v.scrollLeft, top: v.scrollTop });
      for (typeof c.focus == "function" && c.focus(), c = 0; c < m.length; c++) v = m[c], v.element.scrollLeft = v.left, v.element.scrollTop = v.top;
    }
    Hr = !!io, oo = io = null, e.current = n, _ = r;
    do
      try {
        for (c = e; _ !== null; ) {
          var S = _.flags;
          if (S & 36 && kp(c, _.alternate, _), S & 128) {
            m = void 0;
            var O = _.ref;
            if (O !== null) {
              var L = _.stateNode;
              switch (_.tag) {
                case 5:
                  m = L;
                  break;
                default:
                  m = L;
              }
              typeof O == "function" ? O(m) : O.current = m;
            }
          }
          _ = _.nextEffect;
        }
      } catch (N) {
        if (_ === null) throw Error(g(330));
        ut(_, N), _ = _.nextEffect;
      }
    while (_ !== null);
    _ = null, yp(), k = i;
  } else e.current = n;
  if (ct) ct = !1, $n = e, Mn = t;
  else for (_ = r; _ !== null; ) t = _.nextEffect, _.nextEffect = null, _.flags & 8 && (S = _, S.sibling = null, S.stateNode = null), _ = t;
  if (r = e.pendingLanes, r === 0 && (De = null), r === 1 ? e === ol ? Wn++ : (Wn = 0, ol = e) : Wn = 0, n = n.stateNode, Ct && typeof Ct.onCommitFiberRoot == "function") try {
    Ct.onCommitFiberRoot(Zl, n, void 0, (n.current.flags & 64) === 64);
  } catch {
  }
  if (Ne(e, ie()), di) throw di = !1, e = nl, nl = null, e;
  return k & 8 || je(), null;
}
function Dp() {
  for (; _ !== null; ) {
    var e = _.alternate;
    zr || Xn === null || (_.flags & 8 ? Fu(_, Xn) && (zr = !0) : _.tag === 13 && Ip(e, _) && Fu(_, Xn) && (zr = !0));
    var t = _.flags;
    t & 256 && Op(e, _), !(t & 512) || ct || (ct = !0, rr(97, function() {
      return ht(), null;
    })), _ = _.nextEffect;
  }
}
function ht() {
  if (Mn !== 90) {
    var e = 97 < Mn ? 97 : Mn;
    return Mn = 90, Ot(e, Bp);
  }
  return !1;
}
function Fp(e, t) {
  rl.push(t, e), ct || (ct = !0, rr(97, function() {
    return ht(), null;
  }));
}
function Qf(e, t) {
  il.push(t, e), ct || (ct = !0, rr(97, function() {
    return ht(), null;
  }));
}
function Bp() {
  if ($n === null) return !1;
  var e = $n;
  if ($n = null, k & 48) throw Error(g(331));
  var t = k;
  k |= 32;
  var n = il;
  il = [];
  for (var r = 0; r < n.length; r += 2) {
    var i = n[r], o = n[r + 1], l = i.destroy;
    if (i.destroy = void 0, typeof l == "function") try {
      l();
    } catch (a) {
      if (o === null) throw Error(g(330));
      ut(o, a);
    }
  }
  for (n = rl, rl = [], r = 0; r < n.length; r += 2) {
    i = n[r], o = n[r + 1];
    try {
      var u = i.create;
      i.destroy = u();
    } catch (a) {
      if (o === null) throw Error(g(330));
      ut(o, a);
    }
  }
  for (u = e.current.firstEffect; u !== null; ) e = u.nextEffect, u.nextEffect = null, u.flags & 8 && (u.sibling = null, u.stateNode = null), u = e;
  return k = t, je(), !0;
}
function Ua(e, t, n) {
  t = uu(n, t), t = Bf(e, t, 1), it(e, t), t = Ee(), e = Oi(e, 1), e !== null && (wi(e, 1, t), Ne(e, t));
}
function ut(e, t) {
  if (e.tag === 3) Ua(e, e, t);
  else for (var n = e.return; n !== null; ) {
    if (n.tag === 3) {
      Ua(n, e, t);
      break;
    } else if (n.tag === 1) {
      var r = n.stateNode;
      if (typeof n.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (De === null || !De.has(r))) {
        e = uu(t, e);
        var i = Uf(n, e, 1);
        if (it(n, i), i = Ee(), n = Oi(n, 1), n !== null) wi(n, 1, i), Ne(n, i);
        else if (typeof r.componentDidCatch == "function" && (De === null || !De.has(r))) try {
          r.componentDidCatch(t, e);
        } catch {
        }
        break;
      }
    }
    n = n.return;
  }
}
function Up(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Ee(), e.pingedLanes |= e.suspendedLanes & n, de === e && (oe & n) === n && (ee === 4 || ee === 3 && (oe & 62914560) === oe && 500 > ie() - fu ? en(e, 0) : su |= n), Ne(e, t);
}
function jp(e, t) {
  var n = e.stateNode;
  n !== null && n.delete(t), t = 0, t === 0 && (t = e.mode, t & 2 ? t & 4 ? (Ge === 0 && (Ge = pn), t = Ut(62914560 & ~Ge), t === 0 && (t = 4194304)) : t = on() === 99 ? 1 : 2 : t = 1), n = Ee(), e = Oi(e, t), e !== null && (wi(e, t, n), Ne(e, n));
}
var Zf;
Zf = function(e, t, n) {
  var r = t.lanes;
  if (e !== null) if (e.memoizedProps !== t.pendingProps || ve.current) Me = !0;
  else if (n & r) Me = !!(e.flags & 16384);
  else {
    switch (Me = !1, t.tag) {
      case 3:
        Pa(t), so();
        break;
      case 5:
        va(t);
        break;
      case 1:
        ye(t.type) && Br(t);
        break;
      case 4:
        Vo(t, t.stateNode.containerInfo);
        break;
      case 10:
        r = t.memoizedProps.value;
        var i = t.type._context;
        G(ei, i._currentValue), i._currentValue = r;
        break;
      case 13:
        if (t.memoizedState !== null)
          return n & t.child.childLanes ? Ca(e, t, n) : (G(z, z.current & 1), t = $e(e, t, n), t !== null ? t.sibling : null);
        G(z, z.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, e.flags & 64) {
          if (r) return La(e, t, n);
          t.flags |= 64;
        }
        if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), G(z, z.current), r) break;
        return null;
      case 23:
      case 24:
        return t.lanes = 0, fo(e, t, n);
    }
    return $e(e, t, n);
  }
  else Me = !1;
  switch (t.lanes = 0, t.tag) {
    case 2:
      if (r = t.type, e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2), e = t.pendingProps, i = rn(t, ue.current), Kt(t, n), i = ru(null, t, r, e, i, n), t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0) {
        if (t.tag = 1, t.memoizedState = null, t.updateQueue = null, ye(r)) {
          var o = !0;
          Br(t);
        } else o = !1;
        t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, ql(t);
        var l = r.getDerivedStateFromProps;
        typeof l == "function" && ri(t, r, l, e), i.updater = Ci, t.stateNode = i, i._reactInternals = t, Go(t, r, e, n), t = Qo(null, t, r, !0, o, n);
      } else t.tag = 0, me(null, t, i, n), t = t.child;
      return t;
    case 16:
      i = t.elementType;
      e: {
        switch (e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2), e = t.pendingProps, o = i._init, i = o(i._payload), t.type = i, o = t.tag = zp(i), e = Re(i, e), o) {
          case 0:
            t = Xo(null, t, i, e, n);
            break e;
          case 1:
            t = _a(null, t, i, e, n);
            break e;
          case 11:
            t = xa(null, t, i, e, n);
            break e;
          case 14:
            t = Ta(null, t, i, Re(i.type, e), r, n);
            break e;
        }
        throw Error(g(306, i, ""));
      }
      return t;
    case 0:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Re(r, i), Xo(e, t, r, i, n);
    case 1:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Re(r, i), _a(e, t, r, i, n);
    case 3:
      if (Pa(t), r = t.updateQueue, e === null || r === null) throw Error(g(282));
      if (r = t.pendingProps, i = t.memoizedState, i = i !== null ? i.element : null, wf(e, t), ir(t, r, null, n), r = t.memoizedState.element, r === i) so(), t = $e(e, t, n);
      else {
        if (i = t.stateNode, (o = i.hydrate) && (qe = Yt(t.stateNode.containerInfo.firstChild), Ve = t, o = Be = !0), o) {
          if (e = i.mutableSourceEagerHydrationData, e != null) for (i = 0; i < e.length; i += 2) o = e[i], o._workInProgressVersionPrimary = e[i + 1], Jt.push(o);
          for (n = _f(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 1024, n = n.sibling;
        } else me(e, t, r, n), so();
        t = t.child;
      }
      return t;
    case 5:
      return va(t), e === null && $o(t), r = t.type, i = t.pendingProps, o = e !== null ? e.memoizedProps : null, l = i.children, Uo(r, i) ? l = null : o !== null && Uo(r, o) && (t.flags |= 16), Af(e, t), me(e, t, l, n), t.child;
    case 6:
      return e === null && $o(t), null;
    case 13:
      return Ca(e, t, n);
    case 4:
      return Vo(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = ii(t, null, r, n) : me(e, t, r, n), t.child;
    case 11:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Re(r, i), xa(e, t, r, i, n);
    case 7:
      return me(e, t, t.pendingProps, n), t.child;
    case 8:
      return me(
        e,
        t,
        t.pendingProps.children,
        n
      ), t.child;
    case 12:
      return me(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        r = t.type._context, i = t.pendingProps, l = t.memoizedProps, o = i.value;
        var u = t.type._context;
        if (G(ei, u._currentValue), u._currentValue = o, l !== null) if (u = l.value, o = Te(u, o) ? 0 : (typeof r._calculateChangedBits == "function" ? r._calculateChangedBits(u, o) : 1073741823) | 0, o === 0) {
          if (l.children === i.children && !ve.current) {
            t = $e(e, t, n);
            break e;
          }
        } else for (u = t.child, u !== null && (u.return = t); u !== null; ) {
          var a = u.dependencies;
          if (a !== null) {
            l = u.child;
            for (var s = a.firstContext; s !== null; ) {
              if (s.context === r && s.observedBits & o) {
                u.tag === 1 && (s = rt(-1, n & -n), s.tag = 2, it(u, s)), u.lanes |= n, s = u.alternate, s !== null && (s.lanes |= n), Ef(u.return, n), a.lanes |= n;
                break;
              }
              s = s.next;
            }
          } else l = u.tag === 10 && u.type === t.type ? null : u.child;
          if (l !== null) l.return = u;
          else for (l = u; l !== null; ) {
            if (l === t) {
              l = null;
              break;
            }
            if (u = l.sibling, u !== null) {
              u.return = l.return, l = u;
              break;
            }
            l = l.return;
          }
          u = l;
        }
        me(e, t, i.children, n), t = t.child;
      }
      return t;
    case 9:
      return i = t.type, o = t.pendingProps, r = o.children, Kt(t, n), i = Ce(
        i,
        o.unstable_observedBits
      ), r = r(i), t.flags |= 1, me(e, t, r, n), t.child;
    case 14:
      return i = t.type, o = Re(i, t.pendingProps), o = Re(i.type, o), Ta(e, t, i, o, r, n);
    case 15:
      return Mf(e, t, t.type, t.pendingProps, r, n);
    case 17:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Re(r, i), e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2), t.tag = 1, ye(r) ? (e = !0, Br(t)) : e = !1, Kt(t, n), xf(t, r, i), Go(t, r, i, n), Qo(null, t, r, !0, e, n);
    case 19:
      return La(e, t, n);
    case 23:
      return fo(e, t, n);
    case 24:
      return fo(e, t, n);
  }
  throw Error(g(156, t.tag));
};
function bp(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.flags = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function _e(e, t, n, r) {
  return new bp(e, t, n, r);
}
function du(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function zp(e) {
  if (typeof e == "function") return du(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === yi) return 11;
    if (e === gi) return 14;
  }
  return 2;
}
function dt(e, t) {
  var n = e.alternate;
  return n === null ? (n = _e(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.nextEffect = null, n.firstEffect = null, n.lastEffect = null), n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Gr(e, t, n, r, i, o) {
  var l = 2;
  if (r = e, typeof e == "function") du(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else e: switch (e) {
    case Ye:
      return tn(n.children, i, o, t);
    case Ps:
      l = 8, i |= 16;
      break;
    case Ol:
      l = 8, i |= 1;
      break;
    case Dn:
      return e = _e(12, n, t, i | 8), e.elementType = Dn, e.type = Dn, e.lanes = o, e;
    case Fn:
      return e = _e(13, n, t, i), e.type = Fn, e.elementType = Fn, e.lanes = o, e;
    case $r:
      return e = _e(19, n, t, i), e.elementType = $r, e.lanes = o, e;
    case Al:
      return pu(n, i, o, t);
    case So:
      return e = _e(24, n, t, i), e.elementType = So, e.lanes = o, e;
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case kl:
          l = 10;
          break e;
        case Il:
          l = 9;
          break e;
        case yi:
          l = 11;
          break e;
        case gi:
          l = 14;
          break e;
        case Ll:
          l = 16, r = null;
          break e;
        case Rl:
          l = 22;
          break e;
      }
      throw Error(g(130, e == null ? e : typeof e, ""));
  }
  return t = _e(l, n, t, i), t.elementType = e, t.type = r, t.lanes = o, t;
}
function tn(e, t, n, r) {
  return e = _e(7, e, r, t), e.lanes = n, e;
}
function pu(e, t, n, r) {
  return e = _e(23, e, r, t), e.elementType = Al, e.lanes = n, e;
}
function ho(e, t, n) {
  return e = _e(6, e, null, t), e.lanes = n, e;
}
function mo(e, t, n) {
  return t = _e(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Gp(e, t, n) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.pendingContext = this.context = null, this.hydrate = n, this.callbackNode = null, this.callbackPriority = 0, this.eventTimes = Ki(0), this.expirationTimes = Ki(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ki(0), this.mutableSourceEagerHydrationData = null;
}
function Vp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: St, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function pi(e, t, n, r) {
  var i = t.current, o = Ee(), l = ot(i);
  e: if (n) {
    n = n._reactInternals;
    t: {
      if (Mt(n) !== n || n.tag !== 1) throw Error(g(170));
      var u = n;
      do {
        switch (u.tag) {
          case 3:
            u = u.stateNode.context;
            break t;
          case 1:
            if (ye(u.type)) {
              u = u.stateNode.__reactInternalMemoizedMergedChildContext;
              break t;
            }
        }
        u = u.return;
      } while (u !== null);
      throw Error(g(171));
    }
    if (n.tag === 1) {
      var a = n.type;
      if (ye(a)) {
        n = df(n, a, u);
        break e;
      }
    }
    n = u;
  } else n = ft;
  return t.context === null ? t.context = n : t.pendingContext = n, t = rt(o, l), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), it(i, t), lt(i, l, o), l;
}
function vo(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ja(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function hu(e, t) {
  ja(e, t), (e = e.alternate) && ja(e, t);
}
function $p() {
  return null;
}
function mu(e, t, n) {
  var r = n != null && n.hydrationOptions != null && n.hydrationOptions.mutableSources || null;
  if (n = new Gp(e, t, n != null && n.hydrate === !0), t = _e(3, null, null, t === 2 ? 7 : t === 1 ? 3 : 0), n.current = t, t.stateNode = n, ql(t), e[dn] = n.current, uf(e.nodeType === 8 ? e.parentNode : e), r) for (e = 0; e < r.length; e++) {
    t = r[e];
    var i = t._getVersion;
    i = i(t._source), n.mutableSourceEagerHydrationData == null ? n.mutableSourceEagerHydrationData = [t, i] : n.mutableSourceEagerHydrationData.push(t, i);
  }
  this._internalRoot = n;
}
mu.prototype.render = function(e) {
  pi(e, this._internalRoot, null, null);
};
mu.prototype.unmount = function() {
  var e = this._internalRoot, t = e.containerInfo;
  pi(null, e, null, function() {
    t[dn] = null;
  });
};
function mr(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Wp(e, t) {
  if (t || (t = e ? e.nodeType === 9 ? e.documentElement : e.firstChild : null, t = !(!t || t.nodeType !== 1 || !t.hasAttribute("data-reactroot"))), !t) for (var n; n = e.lastChild; ) e.removeChild(n);
  return new mu(e, 0, t ? { hydrate: !0 } : void 0);
}
function ki(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var l = o._internalRoot;
    if (typeof i == "function") {
      var u = i;
      i = function() {
        var s = vo(l);
        u.call(s);
      };
    }
    pi(t, l, e, i);
  } else {
    if (o = n._reactRootContainer = Wp(n, r), l = o._internalRoot, typeof i == "function") {
      var a = i;
      i = function() {
        var s = vo(l);
        a.call(s);
      };
    }
    Gf(function() {
      pi(t, l, e, i);
    });
  }
  return vo(l);
}
js = function(e) {
  if (e.tag === 13) {
    var t = Ee();
    lt(e, 4, t), hu(e, 4);
  }
};
Ul = function(e) {
  if (e.tag === 13) {
    var t = Ee();
    lt(e, 67108864, t), hu(e, 67108864);
  }
};
bs = function(e) {
  if (e.tag === 13) {
    var t = Ee(), n = ot(e);
    lt(e, n, t), hu(e, n);
  }
};
zs = function(e, t) {
  return t();
};
Lo = function(e, t, n) {
  switch (t) {
    case "input":
      if (To(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = _i(r);
            if (!i) throw Error(g(90));
            Ns(r), To(r, i);
          }
        }
      }
      break;
    case "textarea":
      ks(e, n);
      break;
    case "select":
      t = n.value, t != null && Xt(e, !!n.multiple, t, !1);
  }
};
Dl = zf;
Ds = function(e, t, n, r, i) {
  var o = k;
  k |= 4;
  try {
    return Ot(98, e.bind(null, t, n, r, i));
  } finally {
    k = o, k === 0 && (mn(), je());
  }
};
Fl = function() {
  !(k & 49) && (Rp(), ht());
};
Fs = function(e, t) {
  var n = k;
  k |= 2;
  try {
    return e(t);
  } finally {
    k = n, k === 0 && (mn(), je());
  }
};
function Yf(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!mr(t)) throw Error(g(200));
  return Vp(e, t, null, n);
}
var Xp = { Events: [dr, Gt, _i, As, Hs, ht, { current: !1 }] }, kn = { findFiberByHostInstance: Tt, bundleType: 0, version: "17.0.2", rendererPackageName: "react-dom" }, Qp = { bundleType: kn.bundleType, version: kn.version, rendererPackageName: kn.rendererPackageName, rendererConfig: kn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Rt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Us(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: kn.findFiberByHostInstance || $p, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ir = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ir.isDisabled && Ir.supportsFiber) try {
    Zl = Ir.inject(Qp), Ct = Ir;
  } catch {
  }
}
Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Xp;
Oe.createPortal = Yf;
Oe.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(g(188)) : Error(g(268, Object.keys(e)));
  return e = Us(t), e = e === null ? null : e.stateNode, e;
};
Oe.flushSync = function(e, t) {
  var n = k;
  if (n & 48) return e(t);
  k |= 1;
  try {
    if (e) return Ot(99, e.bind(null, t));
  } finally {
    k = n, je();
  }
};
Oe.hydrate = function(e, t, n) {
  if (!mr(t)) throw Error(g(200));
  return ki(null, e, t, !0, n);
};
Oe.render = function(e, t, n) {
  if (!mr(t)) throw Error(g(200));
  return ki(null, e, t, !1, n);
};
Oe.unmountComponentAtNode = function(e) {
  if (!mr(e)) throw Error(g(40));
  return e._reactRootContainer ? (Gf(function() {
    ki(null, null, e, !1, function() {
      e._reactRootContainer = null, e[dn] = null;
    });
  }), !0) : !1;
};
Oe.unstable_batchedUpdates = zf;
Oe.unstable_createPortal = function(e, t) {
  return Yf(e, t, 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null);
};
Oe.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!mr(n)) throw Error(g(200));
  if (e == null || e._reactInternals === void 0) throw Error(g(38));
  return ki(e, t, n, !1, r);
};
Oe.version = "17.0.2";
function Kf() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Kf);
    } catch (e) {
      console.error(e);
    }
}
Kf(), Ss.exports = Oe;
var Zp = Ss.exports, ul = function(e, t) {
  return ul = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
  }, ul(e, t);
};
function ke(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  ul(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var P = function() {
  return P = Object.assign || function(t) {
    for (var n, r = 1, i = arguments.length; r < i; r++) {
      n = arguments[r];
      for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, P.apply(this, arguments);
};
function Ii(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
}
function ce(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, i = t.length, o; r < i; r++)
    (o || !(r in t)) && (o || (o = Array.prototype.slice.call(t, 0, r)), o[r] = t[r]);
  return e.concat(o || Array.prototype.slice.call(t));
}
function se(e, t) {
  var n = t && t.cache ? t.cache : th, r = t && t.serializer ? t.serializer : eh, i = t && t.strategy ? t.strategy : Jp;
  return i(e, {
    cache: n,
    serializer: r
  });
}
function Yp(e) {
  return e == null || typeof e == "number" || typeof e == "boolean";
}
function Kp(e, t, n, r) {
  var i = Yp(r) ? r : n(r), o = t.get(i);
  return typeof o > "u" && (o = e.call(this, r), t.set(i, o)), o;
}
function Jf(e, t, n) {
  var r = Array.prototype.slice.call(arguments, 3), i = n(r), o = t.get(i);
  return typeof o > "u" && (o = e.apply(this, r), t.set(i, o)), o;
}
function qf(e, t, n, r, i) {
  return n.bind(t, e, r, i);
}
function Jp(e, t) {
  var n = e.length === 1 ? Kp : Jf;
  return qf(e, this, n, t.cache.create(), t.serializer);
}
function qp(e, t) {
  return qf(e, this, Jf, t.cache.create(), t.serializer);
}
var eh = function() {
  return JSON.stringify(arguments);
};
function vu() {
  this.cache = /* @__PURE__ */ Object.create(null);
}
vu.prototype.get = function(e) {
  return this.cache[e];
};
vu.prototype.set = function(e, t) {
  this.cache[e] = t;
};
var th = {
  create: function() {
    return new vu();
  }
}, fe = {
  variadic: qp
};
function ec(e, t, n) {
  if (n === void 0 && (n = Error), !e)
    throw new n(t);
}
se(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.NumberFormat).bind.apply(e, ce([void 0], t, !1)))();
}, {
  strategy: fe.variadic
});
se(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.DateTimeFormat).bind.apply(e, ce([void 0], t, !1)))();
}, {
  strategy: fe.variadic
});
se(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.PluralRules).bind.apply(e, ce([void 0], t, !1)))();
}, {
  strategy: fe.variadic
});
se(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.Locale).bind.apply(e, ce([void 0], t, !1)))();
}, {
  strategy: fe.variadic
});
se(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.ListFormat).bind.apply(e, ce([void 0], t, !1)))();
}, {
  strategy: fe.variadic
});
var M;
(function(e) {
  e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(M || (M = {}));
var U;
(function(e) {
  e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
})(U || (U = {}));
var un;
(function(e) {
  e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
})(un || (un = {}));
function ba(e) {
  return e.type === U.literal;
}
function nh(e) {
  return e.type === U.argument;
}
function tc(e) {
  return e.type === U.number;
}
function nc(e) {
  return e.type === U.date;
}
function rc(e) {
  return e.type === U.time;
}
function ic(e) {
  return e.type === U.select;
}
function oc(e) {
  return e.type === U.plural;
}
function rh(e) {
  return e.type === U.pound;
}
function lc(e) {
  return e.type === U.tag;
}
function uc(e) {
  return !!(e && typeof e == "object" && e.type === un.number);
}
function al(e) {
  return !!(e && typeof e == "object" && e.type === un.dateTime);
}
var ac = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, ih = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function oh(e) {
  var t = {};
  return e.replace(ih, function(n) {
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
var lh = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function uh(e) {
  if (e.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var t = e.split(lh).filter(function(h) {
    return h.length > 0;
  }), n = [], r = 0, i = t; r < i.length; r++) {
    var o = i[r], l = o.split("/");
    if (l.length === 0)
      throw new Error("Invalid number skeleton");
    for (var u = l[0], a = l.slice(1), s = 0, p = a; s < p.length; s++) {
      var y = p[s];
      if (y.length === 0)
        throw new Error("Invalid number skeleton");
    }
    n.push({ stem: u, options: a });
  }
  return n;
}
function ah(e) {
  return e.replace(/^(.*?)-/, "");
}
var za = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, sc = /^(@+)?(\+|#+)?[rs]?$/g, sh = /(\*)(0+)|(#+)(0+)|(0+)/g, fc = /^(0+)$/;
function Ga(e) {
  var t = {};
  return e[e.length - 1] === "r" ? t.roundingPriority = "morePrecision" : e[e.length - 1] === "s" && (t.roundingPriority = "lessPrecision"), e.replace(sc, function(n, r, i) {
    return typeof i != "string" ? (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length) : i === "+" ? t.minimumSignificantDigits = r.length : r[0] === "#" ? t.maximumSignificantDigits = r.length : (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length + (typeof i == "string" ? i.length : 0)), "";
  }), t;
}
function cc(e) {
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
function fh(e) {
  var t;
  if (e[0] === "E" && e[1] === "E" ? (t = {
    notation: "engineering"
  }, e = e.slice(2)) : e[0] === "E" && (t = {
    notation: "scientific"
  }, e = e.slice(1)), t) {
    var n = e.slice(0, 2);
    if (n === "+!" ? (t.signDisplay = "always", e = e.slice(2)) : n === "+?" && (t.signDisplay = "exceptZero", e = e.slice(2)), !fc.test(e))
      throw new Error("Malformed concise eng/scientific notation");
    t.minimumIntegerDigits = e.length;
  }
  return t;
}
function Va(e) {
  var t = {}, n = cc(e);
  return n || t;
}
function ch(e) {
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
        t.style = "unit", t.unit = ah(i.options[0]);
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
        t = P(P(P({}, t), { notation: "scientific" }), i.options.reduce(function(a, s) {
          return P(P({}, a), Va(s));
        }, {}));
        continue;
      case "engineering":
        t = P(P(P({}, t), { notation: "engineering" }), i.options.reduce(function(a, s) {
          return P(P({}, a), Va(s));
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
        i.options[0].replace(sh, function(a, s, p, y, h, E) {
          if (s)
            t.minimumIntegerDigits = p.length;
          else {
            if (y && h)
              throw new Error("We currently do not support maximum integer digits");
            if (E)
              throw new Error("We currently do not support exact integer digits");
          }
          return "";
        });
        continue;
    }
    if (fc.test(i.stem)) {
      t.minimumIntegerDigits = i.stem.length;
      continue;
    }
    if (za.test(i.stem)) {
      if (i.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      i.stem.replace(za, function(a, s, p, y, h, E) {
        return p === "*" ? t.minimumFractionDigits = s.length : y && y[0] === "#" ? t.maximumFractionDigits = y.length : h && E ? (t.minimumFractionDigits = h.length, t.maximumFractionDigits = h.length + E.length) : (t.minimumFractionDigits = s.length, t.maximumFractionDigits = s.length), "";
      });
      var o = i.options[0];
      o === "w" ? t = P(P({}, t), { trailingZeroDisplay: "stripIfInteger" }) : o && (t = P(P({}, t), Ga(o)));
      continue;
    }
    if (sc.test(i.stem)) {
      t = P(P({}, t), Ga(i.stem));
      continue;
    }
    var l = cc(i.stem);
    l && (t = P(P({}, t), l));
    var u = fh(i.stem);
    u && (t = P(P({}, t), u));
  }
  return t;
}
var Lr = {
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
function dh(e, t) {
  for (var n = "", r = 0; r < e.length; r++) {
    var i = e.charAt(r);
    if (i === "j") {
      for (var o = 0; r + 1 < e.length && e.charAt(r + 1) === i; )
        o++, r++;
      var l = 1 + (o & 1), u = o < 2 ? 1 : 3 + (o >> 1), a = "a", s = ph(t);
      for ((s == "H" || s == "k") && (u = 0); u-- > 0; )
        n += a;
      for (; l-- > 0; )
        n = s + n;
    } else i === "J" ? n += "H" : n += i;
  }
  return n;
}
function ph(e) {
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
  var i = Lr[r || ""] || Lr[n || ""] || Lr["".concat(n, "-001")] || Lr["001"];
  return i[0];
}
var yo, hh = new RegExp("^".concat(ac.source, "*")), mh = new RegExp("".concat(ac.source, "*$"));
function A(e, t) {
  return { start: e, end: t };
}
var vh = !!String.prototype.startsWith && "_a".startsWith("a", 1), yh = !!String.fromCodePoint, gh = !!Object.fromEntries, Eh = !!String.prototype.codePointAt, wh = !!String.prototype.trimStart, Sh = !!String.prototype.trimEnd, xh = !!Number.isSafeInteger, Th = xh ? Number.isSafeInteger : function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
}, sl = !0;
try {
  var _h = pc("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  sl = ((yo = _h.exec("a")) === null || yo === void 0 ? void 0 : yo[0]) === "a";
} catch {
  sl = !1;
}
var $a = vh ? (
  // Native
  function(t, n, r) {
    return t.startsWith(n, r);
  }
) : (
  // For IE11
  function(t, n, r) {
    return t.slice(r, r + n.length) === n;
  }
), fl = yh ? String.fromCodePoint : (
  // IE11
  function() {
    for (var t = [], n = 0; n < arguments.length; n++)
      t[n] = arguments[n];
    for (var r = "", i = t.length, o = 0, l; i > o; ) {
      if (l = t[o++], l > 1114111)
        throw RangeError(l + " is not a valid code point");
      r += l < 65536 ? String.fromCharCode(l) : String.fromCharCode(((l -= 65536) >> 10) + 55296, l % 1024 + 56320);
    }
    return r;
  }
), Wa = (
  // native
  gh ? Object.fromEntries : (
    // Ponyfill
    function(t) {
      for (var n = {}, r = 0, i = t; r < i.length; r++) {
        var o = i[r], l = o[0], u = o[1];
        n[l] = u;
      }
      return n;
    }
  )
), dc = Eh ? (
  // Native
  function(t, n) {
    return t.codePointAt(n);
  }
) : (
  // IE 11
  function(t, n) {
    var r = t.length;
    if (!(n < 0 || n >= r)) {
      var i = t.charCodeAt(n), o;
      return i < 55296 || i > 56319 || n + 1 === r || (o = t.charCodeAt(n + 1)) < 56320 || o > 57343 ? i : (i - 55296 << 10) + (o - 56320) + 65536;
    }
  }
), Ph = wh ? (
  // Native
  function(t) {
    return t.trimStart();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(hh, "");
  }
), Ch = Sh ? (
  // Native
  function(t) {
    return t.trimEnd();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(mh, "");
  }
);
function pc(e, t) {
  return new RegExp(e, t);
}
var cl;
if (sl) {
  var Xa = pc("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  cl = function(t, n) {
    var r;
    Xa.lastIndex = n;
    var i = Xa.exec(t);
    return (r = i[1]) !== null && r !== void 0 ? r : "";
  };
} else
  cl = function(t, n) {
    for (var r = []; ; ) {
      var i = dc(t, n);
      if (i === void 0 || hc(i) || Ih(i))
        break;
      r.push(i), n += i >= 65536 ? 2 : 1;
    }
    return fl.apply(void 0, r);
  };
var Nh = (
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
        var o = this.char();
        if (o === 123) {
          var l = this.parseArgument(t, r);
          if (l.err)
            return l;
          i.push(l.val);
        } else {
          if (o === 125 && t > 0)
            break;
          if (o === 35 && (n === "plural" || n === "selectordinal")) {
            var u = this.clonePosition();
            this.bump(), i.push({
              type: U.pound,
              location: A(u, this.clonePosition())
            });
          } else if (o === 60 && !this.ignoreTag && this.peek() === 47) {
            if (r)
              break;
            return this.error(M.UNMATCHED_CLOSING_TAG, A(this.clonePosition(), this.clonePosition()));
          } else if (o === 60 && !this.ignoreTag && dl(this.peek() || 0)) {
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
            type: U.literal,
            value: "<".concat(i, "/>"),
            location: A(r, this.clonePosition())
          },
          err: null
        };
      if (this.bumpIf(">")) {
        var o = this.parseMessage(t + 1, n, !0);
        if (o.err)
          return o;
        var l = o.val, u = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !dl(this.char()))
            return this.error(M.INVALID_TAG, A(u, this.clonePosition()));
          var a = this.clonePosition(), s = this.parseTagName();
          return i !== s ? this.error(M.UNMATCHED_CLOSING_TAG, A(a, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: U.tag,
              value: i,
              children: l,
              location: A(r, this.clonePosition())
            },
            err: null
          } : this.error(M.INVALID_TAG, A(u, this.clonePosition())));
        } else
          return this.error(M.UNCLOSED_TAG, A(r, this.clonePosition()));
      } else
        return this.error(M.INVALID_TAG, A(r, this.clonePosition()));
    }, e.prototype.parseTagName = function() {
      var t = this.offset();
      for (this.bump(); !this.isEOF() && kh(this.char()); )
        this.bump();
      return this.message.slice(t, this.offset());
    }, e.prototype.parseLiteral = function(t, n) {
      for (var r = this.clonePosition(), i = ""; ; ) {
        var o = this.tryParseQuote(n);
        if (o) {
          i += o;
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
      var a = A(r, this.clonePosition());
      return {
        val: { type: U.literal, value: i, location: a },
        err: null
      };
    }, e.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !Oh(this.peek() || 0)) ? (this.bump(), "<") : null;
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
      return fl.apply(void 0, n);
    }, e.prototype.tryParseUnquoted = function(t, n) {
      if (this.isEOF())
        return null;
      var r = this.char();
      return r === 60 || r === 123 || r === 35 && (n === "plural" || n === "selectordinal") || r === 125 && t > 0 ? null : (this.bump(), fl(r));
    }, e.prototype.parseArgument = function(t, n) {
      var r = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error(M.EXPECT_ARGUMENT_CLOSING_BRACE, A(r, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(M.EMPTY_ARGUMENT, A(r, this.clonePosition()));
      var i = this.parseIdentifierIfPossible().value;
      if (!i)
        return this.error(M.MALFORMED_ARGUMENT, A(r, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(M.EXPECT_ARGUMENT_CLOSING_BRACE, A(r, this.clonePosition()));
      switch (this.char()) {
        case 125:
          return this.bump(), {
            val: {
              type: U.argument,
              // value does not include the opening and closing braces.
              value: i,
              location: A(r, this.clonePosition())
            },
            err: null
          };
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(M.EXPECT_ARGUMENT_CLOSING_BRACE, A(r, this.clonePosition())) : this.parseArgumentOptions(t, n, i, r);
        default:
          return this.error(M.MALFORMED_ARGUMENT, A(r, this.clonePosition()));
      }
    }, e.prototype.parseIdentifierIfPossible = function() {
      var t = this.clonePosition(), n = this.offset(), r = cl(this.message, n), i = n + r.length;
      this.bumpTo(i);
      var o = this.clonePosition(), l = A(t, o);
      return { value: r, location: l };
    }, e.prototype.parseArgumentOptions = function(t, n, r, i) {
      var o, l = this.clonePosition(), u = this.parseIdentifierIfPossible().value, a = this.clonePosition();
      switch (u) {
        case "":
          return this.error(M.EXPECT_ARGUMENT_TYPE, A(l, a));
        case "number":
        case "date":
        case "time": {
          this.bumpSpace();
          var s = null;
          if (this.bumpIf(",")) {
            this.bumpSpace();
            var p = this.clonePosition(), y = this.parseSimpleArgStyleIfPossible();
            if (y.err)
              return y;
            var h = Ch(y.val);
            if (h.length === 0)
              return this.error(M.EXPECT_ARGUMENT_STYLE, A(this.clonePosition(), this.clonePosition()));
            var E = A(p, this.clonePosition());
            s = { style: h, styleLocation: E };
          }
          var T = this.tryParseArgumentClose(i);
          if (T.err)
            return T;
          var w = A(i, this.clonePosition());
          if (s && $a(s == null ? void 0 : s.style, "::", 0)) {
            var d = Ph(s.style.slice(2));
            if (u === "number") {
              var y = this.parseNumberSkeletonFromString(d, s.styleLocation);
              return y.err ? y : {
                val: { type: U.number, value: r, location: w, style: y.val },
                err: null
              };
            } else {
              if (d.length === 0)
                return this.error(M.EXPECT_DATE_TIME_SKELETON, w);
              var f = d;
              this.locale && (f = dh(d, this.locale));
              var h = {
                type: un.dateTime,
                pattern: f,
                location: s.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? oh(f) : {}
              }, c = u === "date" ? U.date : U.time;
              return {
                val: { type: c, value: r, location: w, style: h },
                err: null
              };
            }
          }
          return {
            val: {
              type: u === "number" ? U.number : u === "date" ? U.date : U.time,
              value: r,
              location: w,
              style: (o = s == null ? void 0 : s.style) !== null && o !== void 0 ? o : null
            },
            err: null
          };
        }
        case "plural":
        case "selectordinal":
        case "select": {
          var m = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(","))
            return this.error(M.EXPECT_SELECT_ARGUMENT_OPTIONS, A(m, P({}, m)));
          this.bumpSpace();
          var v = this.parseIdentifierIfPossible(), C = 0;
          if (u !== "select" && v.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(M.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, A(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var y = this.tryParseDecimalInteger(M.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, M.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (y.err)
              return y;
            this.bumpSpace(), v = this.parseIdentifierIfPossible(), C = y.val;
          }
          var S = this.tryParsePluralOrSelectOptions(t, u, n, v);
          if (S.err)
            return S;
          var T = this.tryParseArgumentClose(i);
          if (T.err)
            return T;
          var O = A(i, this.clonePosition());
          return u === "select" ? {
            val: {
              type: U.select,
              value: r,
              options: Wa(S.val),
              location: O
            },
            err: null
          } : {
            val: {
              type: U.plural,
              value: r,
              options: Wa(S.val),
              offset: C,
              pluralType: u === "plural" ? "cardinal" : "ordinal",
              location: O
            },
            err: null
          };
        }
        default:
          return this.error(M.INVALID_ARGUMENT_TYPE, A(l, a));
      }
    }, e.prototype.tryParseArgumentClose = function(t) {
      return this.isEOF() || this.char() !== 125 ? this.error(M.EXPECT_ARGUMENT_CLOSING_BRACE, A(t, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, e.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var t = 0, n = this.clonePosition(); !this.isEOF(); ) {
        var r = this.char();
        switch (r) {
          case 39: {
            this.bump();
            var i = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(M.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, A(i, this.clonePosition()));
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
        r = uh(t);
      } catch {
        return this.error(M.INVALID_NUMBER_SKELETON, n);
      }
      return {
        val: {
          type: un.number,
          tokens: r,
          location: n,
          parsedOptions: this.shouldParseSkeletons ? ch(r) : {}
        },
        err: null
      };
    }, e.prototype.tryParsePluralOrSelectOptions = function(t, n, r, i) {
      for (var o, l = !1, u = [], a = /* @__PURE__ */ new Set(), s = i.value, p = i.location; ; ) {
        if (s.length === 0) {
          var y = this.clonePosition();
          if (n !== "select" && this.bumpIf("=")) {
            var h = this.tryParseDecimalInteger(M.EXPECT_PLURAL_ARGUMENT_SELECTOR, M.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (h.err)
              return h;
            p = A(y, this.clonePosition()), s = this.message.slice(y.offset, this.offset());
          } else
            break;
        }
        if (a.has(s))
          return this.error(n === "select" ? M.DUPLICATE_SELECT_ARGUMENT_SELECTOR : M.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, p);
        s === "other" && (l = !0), this.bumpSpace();
        var E = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(n === "select" ? M.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : M.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, A(this.clonePosition(), this.clonePosition()));
        var T = this.parseMessage(t + 1, n, r);
        if (T.err)
          return T;
        var w = this.tryParseArgumentClose(E);
        if (w.err)
          return w;
        u.push([
          s,
          {
            value: T.val,
            location: A(E, this.clonePosition())
          }
        ]), a.add(s), this.bumpSpace(), o = this.parseIdentifierIfPossible(), s = o.value, p = o.location;
      }
      return u.length === 0 ? this.error(n === "select" ? M.EXPECT_SELECT_ARGUMENT_SELECTOR : M.EXPECT_PLURAL_ARGUMENT_SELECTOR, A(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !l ? this.error(M.MISSING_OTHER_CLAUSE, A(this.clonePosition(), this.clonePosition())) : { val: u, err: null };
    }, e.prototype.tryParseDecimalInteger = function(t, n) {
      var r = 1, i = this.clonePosition();
      this.bumpIf("+") || this.bumpIf("-") && (r = -1);
      for (var o = !1, l = 0; !this.isEOF(); ) {
        var u = this.char();
        if (u >= 48 && u <= 57)
          o = !0, l = l * 10 + (u - 48), this.bump();
        else
          break;
      }
      var a = A(i, this.clonePosition());
      return o ? (l *= r, Th(l) ? { val: l, err: null } : this.error(n, a)) : this.error(t, a);
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
      var n = dc(this.message, t);
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
      if ($a(this.message, t, this.offset())) {
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
      for (; !this.isEOF() && hc(this.char()); )
        this.bump();
    }, e.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var t = this.char(), n = this.offset(), r = this.message.charCodeAt(n + (t >= 65536 ? 2 : 1));
      return r ?? null;
    }, e;
  }()
);
function dl(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function Oh(e) {
  return dl(e) || e === 47;
}
function kh(e) {
  return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
function hc(e) {
  return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
}
function Ih(e) {
  return e >= 33 && e <= 35 || e === 36 || e >= 37 && e <= 39 || e === 40 || e === 41 || e === 42 || e === 43 || e === 44 || e === 45 || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || e === 91 || e === 92 || e === 93 || e === 94 || e === 96 || e === 123 || e === 124 || e === 125 || e === 126 || e === 161 || e >= 162 && e <= 165 || e === 166 || e === 167 || e === 169 || e === 171 || e === 172 || e === 174 || e === 176 || e === 177 || e === 182 || e === 187 || e === 191 || e === 215 || e === 247 || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || e === 8216 || e === 8217 || e === 8218 || e >= 8219 && e <= 8220 || e === 8221 || e === 8222 || e === 8223 || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || e === 8249 || e === 8250 || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || e === 8260 || e === 8261 || e === 8262 || e >= 8263 && e <= 8273 || e === 8274 || e === 8275 || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || e === 8608 || e >= 8609 && e <= 8610 || e === 8611 || e >= 8612 && e <= 8613 || e === 8614 || e >= 8615 && e <= 8621 || e === 8622 || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || e === 8658 || e === 8659 || e === 8660 || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || e === 8968 || e === 8969 || e === 8970 || e === 8971 || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || e === 9001 || e === 9002 || e >= 9003 && e <= 9083 || e === 9084 || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || e === 9655 || e >= 9656 && e <= 9664 || e === 9665 || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || e === 9839 || e >= 9840 && e <= 10087 || e === 10088 || e === 10089 || e === 10090 || e === 10091 || e === 10092 || e === 10093 || e === 10094 || e === 10095 || e === 10096 || e === 10097 || e === 10098 || e === 10099 || e === 10100 || e === 10101 || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || e === 10181 || e === 10182 || e >= 10183 && e <= 10213 || e === 10214 || e === 10215 || e === 10216 || e === 10217 || e === 10218 || e === 10219 || e === 10220 || e === 10221 || e === 10222 || e === 10223 || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || e === 10627 || e === 10628 || e === 10629 || e === 10630 || e === 10631 || e === 10632 || e === 10633 || e === 10634 || e === 10635 || e === 10636 || e === 10637 || e === 10638 || e === 10639 || e === 10640 || e === 10641 || e === 10642 || e === 10643 || e === 10644 || e === 10645 || e === 10646 || e === 10647 || e === 10648 || e >= 10649 && e <= 10711 || e === 10712 || e === 10713 || e === 10714 || e === 10715 || e >= 10716 && e <= 10747 || e === 10748 || e === 10749 || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || e === 11158 || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || e === 11778 || e === 11779 || e === 11780 || e === 11781 || e >= 11782 && e <= 11784 || e === 11785 || e === 11786 || e === 11787 || e === 11788 || e === 11789 || e >= 11790 && e <= 11798 || e === 11799 || e >= 11800 && e <= 11801 || e === 11802 || e === 11803 || e === 11804 || e === 11805 || e >= 11806 && e <= 11807 || e === 11808 || e === 11809 || e === 11810 || e === 11811 || e === 11812 || e === 11813 || e === 11814 || e === 11815 || e === 11816 || e === 11817 || e >= 11818 && e <= 11822 || e === 11823 || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || e === 11840 || e === 11841 || e === 11842 || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || e === 11858 || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || e === 12296 || e === 12297 || e === 12298 || e === 12299 || e === 12300 || e === 12301 || e === 12302 || e === 12303 || e === 12304 || e === 12305 || e >= 12306 && e <= 12307 || e === 12308 || e === 12309 || e === 12310 || e === 12311 || e === 12312 || e === 12313 || e === 12314 || e === 12315 || e === 12316 || e === 12317 || e >= 12318 && e <= 12319 || e === 12320 || e === 12336 || e === 64830 || e === 64831 || e >= 65093 && e <= 65094;
}
function pl(e) {
  e.forEach(function(t) {
    if (delete t.location, ic(t) || oc(t))
      for (var n in t.options)
        delete t.options[n].location, pl(t.options[n].value);
    else tc(t) && uc(t.style) || (nc(t) || rc(t)) && al(t.style) ? delete t.style.location : lc(t) && pl(t.children);
  });
}
function Lh(e, t) {
  t === void 0 && (t = {}), t = P({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, t);
  var n = new Nh(e, t).parse();
  if (n.err) {
    var r = SyntaxError(M[n.err.kind]);
    throw r.location = n.err.location, r.originalMessage = n.err.message, r;
  }
  return t != null && t.captureLocation || pl(n.val), n.val;
}
var Ue;
(function(e) {
  e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API";
})(Ue || (Ue = {}));
var mt = (
  /** @class */
  function(e) {
    ke(t, e);
    function t(n, r, i) {
      var o = e.call(this, n) || this;
      return o.code = r, o.originalMessage = i, o;
    }
    return t.prototype.toString = function() {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    }, t;
  }(Error)
), Qa = (
  /** @class */
  function(e) {
    ke(t, e);
    function t(n, r, i, o) {
      return e.call(this, 'Invalid values for "'.concat(n, '": "').concat(r, '". Options are "').concat(Object.keys(i).join('", "'), '"'), Ue.INVALID_VALUE, o) || this;
    }
    return t;
  }(mt)
), Rh = (
  /** @class */
  function(e) {
    ke(t, e);
    function t(n, r, i) {
      return e.call(this, 'Value for "'.concat(n, '" must be of type ').concat(r), Ue.INVALID_VALUE, i) || this;
    }
    return t;
  }(mt)
), Mh = (
  /** @class */
  function(e) {
    ke(t, e);
    function t(n, r) {
      return e.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(r, '"'), Ue.MISSING_VALUE, r) || this;
    }
    return t;
  }(mt)
), ae;
(function(e) {
  e[e.literal = 0] = "literal", e[e.object = 1] = "object";
})(ae || (ae = {}));
function Ah(e) {
  return e.length < 2 ? e : e.reduce(function(t, n) {
    var r = t[t.length - 1];
    return !r || r.type !== ae.literal || n.type !== ae.literal ? t.push(n) : r.value += n.value, t;
  }, []);
}
function mc(e) {
  return typeof e == "function";
}
function Vr(e, t, n, r, i, o, l) {
  if (e.length === 1 && ba(e[0]))
    return [
      {
        type: ae.literal,
        value: e[0].value
      }
    ];
  for (var u = [], a = 0, s = e; a < s.length; a++) {
    var p = s[a];
    if (ba(p)) {
      u.push({
        type: ae.literal,
        value: p.value
      });
      continue;
    }
    if (rh(p)) {
      typeof o == "number" && u.push({
        type: ae.literal,
        value: n.getNumberFormat(t).format(o)
      });
      continue;
    }
    var y = p.value;
    if (!(i && y in i))
      throw new Mh(y, l);
    var h = i[y];
    if (nh(p)) {
      (!h || typeof h == "string" || typeof h == "number") && (h = typeof h == "string" || typeof h == "number" ? String(h) : ""), u.push({
        type: typeof h == "string" ? ae.literal : ae.object,
        value: h
      });
      continue;
    }
    if (nc(p)) {
      var E = typeof p.style == "string" ? r.date[p.style] : al(p.style) ? p.style.parsedOptions : void 0;
      u.push({
        type: ae.literal,
        value: n.getDateTimeFormat(t, E).format(h)
      });
      continue;
    }
    if (rc(p)) {
      var E = typeof p.style == "string" ? r.time[p.style] : al(p.style) ? p.style.parsedOptions : r.time.medium;
      u.push({
        type: ae.literal,
        value: n.getDateTimeFormat(t, E).format(h)
      });
      continue;
    }
    if (tc(p)) {
      var E = typeof p.style == "string" ? r.number[p.style] : uc(p.style) ? p.style.parsedOptions : void 0;
      E && E.scale && (h = h * (E.scale || 1)), u.push({
        type: ae.literal,
        value: n.getNumberFormat(t, E).format(h)
      });
      continue;
    }
    if (lc(p)) {
      var T = p.children, w = p.value, d = i[w];
      if (!mc(d))
        throw new Rh(w, "function", l);
      var f = Vr(T, t, n, r, i, o), c = d(f.map(function(C) {
        return C.value;
      }));
      Array.isArray(c) || (c = [c]), u.push.apply(u, c.map(function(C) {
        return {
          type: typeof C == "string" ? ae.literal : ae.object,
          value: C
        };
      }));
    }
    if (ic(p)) {
      var m = p.options[h] || p.options.other;
      if (!m)
        throw new Qa(p.value, h, Object.keys(p.options), l);
      u.push.apply(u, Vr(m.value, t, n, r, i));
      continue;
    }
    if (oc(p)) {
      var m = p.options["=".concat(h)];
      if (!m) {
        if (!Intl.PluralRules)
          throw new mt(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, Ue.MISSING_INTL_API, l);
        var v = n.getPluralRules(t, { type: p.pluralType }).select(h - (p.offset || 0));
        m = p.options[v] || p.options.other;
      }
      if (!m)
        throw new Qa(p.value, h, Object.keys(p.options), l);
      u.push.apply(u, Vr(m.value, t, n, r, i, h - (p.offset || 0)));
      continue;
    }
  }
  return Ah(u);
}
function Hh(e, t) {
  return t ? P(P(P({}, e || {}), t || {}), Object.keys(e).reduce(function(n, r) {
    return n[r] = P(P({}, e[r]), t[r] || {}), n;
  }, {})) : e;
}
function Dh(e, t) {
  return t ? Object.keys(e).reduce(function(n, r) {
    return n[r] = Hh(e[r], t[r]), n;
  }, P({}, e)) : e;
}
function go(e) {
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
function Fh(e) {
  return e === void 0 && (e = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: se(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.NumberFormat).bind.apply(t, ce([void 0], n, !1)))();
    }, {
      cache: go(e.number),
      strategy: fe.variadic
    }),
    getDateTimeFormat: se(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.DateTimeFormat).bind.apply(t, ce([void 0], n, !1)))();
    }, {
      cache: go(e.dateTime),
      strategy: fe.variadic
    }),
    getPluralRules: se(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.PluralRules).bind.apply(t, ce([void 0], n, !1)))();
    }, {
      cache: go(e.pluralRules),
      strategy: fe.variadic
    })
  };
}
var vc = (
  /** @class */
  function() {
    function e(t, n, r, i) {
      n === void 0 && (n = e.defaultLocale);
      var o = this;
      if (this.formatterCache = {
        number: {},
        dateTime: {},
        pluralRules: {}
      }, this.format = function(a) {
        var s = o.formatToParts(a);
        if (s.length === 1)
          return s[0].value;
        var p = s.reduce(function(y, h) {
          return !y.length || h.type !== ae.literal || typeof y[y.length - 1] != "string" ? y.push(h.value) : y[y.length - 1] += h.value, y;
        }, []);
        return p.length <= 1 ? p[0] || "" : p;
      }, this.formatToParts = function(a) {
        return Vr(o.ast, o.locales, o.formatters, o.formats, a, void 0, o.message);
      }, this.resolvedOptions = function() {
        var a;
        return {
          locale: ((a = o.resolvedLocale) === null || a === void 0 ? void 0 : a.toString()) || Intl.NumberFormat.supportedLocalesOf(o.locales)[0]
        };
      }, this.getAst = function() {
        return o.ast;
      }, this.locales = n, this.resolvedLocale = e.resolveLocale(n), typeof t == "string") {
        if (this.message = t, !e.__parse)
          throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
        var l = i || {};
        l.formatters;
        var u = Ii(l, ["formatters"]);
        this.ast = e.__parse(t, P(P({}, u), { locale: this.resolvedLocale }));
      } else
        this.ast = t;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = Dh(e.formats, r), this.formatters = i && i.formatters || Fh(this.formatterCache);
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
    }, e.__parse = Lh, e.formats = {
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
), It;
(function(e) {
  e.FORMAT_ERROR = "FORMAT_ERROR", e.UNSUPPORTED_FORMATTER = "UNSUPPORTED_FORMATTER", e.INVALID_CONFIG = "INVALID_CONFIG", e.MISSING_DATA = "MISSING_DATA", e.MISSING_TRANSLATION = "MISSING_TRANSLATION";
})(It || (It = {}));
var vr = (
  /** @class */
  function(e) {
    ke(t, e);
    function t(n, r, i) {
      var o = this, l = i ? i instanceof Error ? i : new Error(String(i)) : void 0;
      return o = e.call(this, "[@formatjs/intl Error ".concat(n, "] ").concat(r, `
`).concat(l ? `
`.concat(l.message, `
`).concat(l.stack) : "")) || this, o.code = n, typeof Error.captureStackTrace == "function" && Error.captureStackTrace(o, t), o;
    }
    return t;
  }(Error)
), Bh = (
  /** @class */
  function(e) {
    ke(t, e);
    function t(n, r) {
      return e.call(this, It.UNSUPPORTED_FORMATTER, n, r) || this;
    }
    return t;
  }(vr)
), Uh = (
  /** @class */
  function(e) {
    ke(t, e);
    function t(n, r) {
      return e.call(this, It.INVALID_CONFIG, n, r) || this;
    }
    return t;
  }(vr)
), Za = (
  /** @class */
  function(e) {
    ke(t, e);
    function t(n, r) {
      return e.call(this, It.MISSING_DATA, n, r) || this;
    }
    return t;
  }(vr)
), Ie = (
  /** @class */
  function(e) {
    ke(t, e);
    function t(n, r, i) {
      var o = e.call(this, It.FORMAT_ERROR, "".concat(n, `
Locale: `).concat(r, `
`), i) || this;
      return o.locale = r, o;
    }
    return t;
  }(vr)
), Eo = (
  /** @class */
  function(e) {
    ke(t, e);
    function t(n, r, i, o) {
      var l = e.call(this, "".concat(n, `
MessageID: `).concat(i == null ? void 0 : i.id, `
Default Message: `).concat(i == null ? void 0 : i.defaultMessage, `
Description: `).concat(i == null ? void 0 : i.description, `
`), r, o) || this;
      return l.descriptor = i, l.locale = r, l;
    }
    return t;
  }(Ie)
), jh = (
  /** @class */
  function(e) {
    ke(t, e);
    function t(n, r) {
      var i = e.call(this, It.MISSING_TRANSLATION, 'Missing message: "'.concat(n.id, '" for locale "').concat(r, '", using ').concat(n.defaultMessage ? "default message (".concat(typeof n.defaultMessage == "string" ? n.defaultMessage : n.defaultMessage.map(function(o) {
        var l;
        return (l = o.value) !== null && l !== void 0 ? l : JSON.stringify(o);
      }).join(), ")") : "id", " as fallback.")) || this;
      return i.descriptor = n, i;
    }
    return t;
  }(vr)
);
function Ht(e, t, n) {
  return n === void 0 && (n = {}), t.reduce(function(r, i) {
    return i in e ? r[i] = e[i] : i in n && (r[i] = n[i]), r;
  }, {});
}
var bh = function(e) {
}, zh = function(e) {
}, yc = {
  formats: {},
  messages: {},
  timeZone: void 0,
  defaultLocale: "en",
  defaultFormats: {},
  fallbackOnEmptyString: !0,
  onError: bh,
  onWarn: zh
};
function gc() {
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
function Et(e) {
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
function Gh(e) {
  e === void 0 && (e = gc());
  var t = Intl.RelativeTimeFormat, n = Intl.ListFormat, r = Intl.DisplayNames, i = se(function() {
    for (var u, a = [], s = 0; s < arguments.length; s++)
      a[s] = arguments[s];
    return new ((u = Intl.DateTimeFormat).bind.apply(u, ce([void 0], a, !1)))();
  }, {
    cache: Et(e.dateTime),
    strategy: fe.variadic
  }), o = se(function() {
    for (var u, a = [], s = 0; s < arguments.length; s++)
      a[s] = arguments[s];
    return new ((u = Intl.NumberFormat).bind.apply(u, ce([void 0], a, !1)))();
  }, {
    cache: Et(e.number),
    strategy: fe.variadic
  }), l = se(function() {
    for (var u, a = [], s = 0; s < arguments.length; s++)
      a[s] = arguments[s];
    return new ((u = Intl.PluralRules).bind.apply(u, ce([void 0], a, !1)))();
  }, {
    cache: Et(e.pluralRules),
    strategy: fe.variadic
  });
  return {
    getDateTimeFormat: i,
    getNumberFormat: o,
    getMessageFormat: se(function(u, a, s, p) {
      return new vc(u, a, s, P({ formatters: {
        getNumberFormat: o,
        getDateTimeFormat: i,
        getPluralRules: l
      } }, p || {}));
    }, {
      cache: Et(e.message),
      strategy: fe.variadic
    }),
    getRelativeTimeFormat: se(function() {
      for (var u = [], a = 0; a < arguments.length; a++)
        u[a] = arguments[a];
      return new (t.bind.apply(t, ce([void 0], u, !1)))();
    }, {
      cache: Et(e.relativeTime),
      strategy: fe.variadic
    }),
    getPluralRules: l,
    getListFormat: se(function() {
      for (var u = [], a = 0; a < arguments.length; a++)
        u[a] = arguments[a];
      return new (n.bind.apply(n, ce([void 0], u, !1)))();
    }, {
      cache: Et(e.list),
      strategy: fe.variadic
    }),
    getDisplayNames: se(function() {
      for (var u = [], a = 0; a < arguments.length; a++)
        u[a] = arguments[a];
      return new (r.bind.apply(r, ce([void 0], u, !1)))();
    }, {
      cache: Et(e.displayNames),
      strategy: fe.variadic
    })
  };
}
function yu(e, t, n, r) {
  var i = e && e[t], o;
  if (i && (o = i[n]), o)
    return o;
  r(new Bh("No ".concat(t, " format named: ").concat(n)));
}
function Rr(e, t) {
  return Object.keys(e).reduce(function(n, r) {
    return n[r] = P({ timeZone: t }, e[r]), n;
  }, {});
}
function Ya(e, t) {
  var n = Object.keys(P(P({}, e), t));
  return n.reduce(function(r, i) {
    return r[i] = P(P({}, e[i] || {}), t[i] || {}), r;
  }, {});
}
function Ka(e, t) {
  if (!t)
    return e;
  var n = vc.formats;
  return P(P(P({}, n), e), { date: Ya(Rr(n.date, t), Rr(e.date || {}, t)), time: Ya(Rr(n.time, t), Rr(e.time || {}, t)) });
}
var hl = function(e, t, n, r, i) {
  var o = e.locale, l = e.formats, u = e.messages, a = e.defaultLocale, s = e.defaultFormats, p = e.fallbackOnEmptyString, y = e.onError, h = e.timeZone, E = e.defaultRichTextElements;
  n === void 0 && (n = { id: "" });
  var T = n.id, w = n.defaultMessage;
  ec(!!T, "[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");
  var d = String(T), f = (
    // In case messages is Object.create(null)
    // e.g import('foo.json') from webpack)
    // See https://github.com/formatjs/formatjs/issues/1914
    u && Object.prototype.hasOwnProperty.call(u, d) && u[d]
  );
  if (Array.isArray(f) && f.length === 1 && f[0].type === U.literal)
    return f[0].value;
  if (!r && f && typeof f == "string" && !E)
    return f.replace(/'\{(.*?)\}'/gi, "{$1}");
  if (r = P(P({}, E), r || {}), l = Ka(l, h), s = Ka(s, h), !f) {
    if (p === !1 && f === "")
      return f;
    if ((!w || o && o.toLowerCase() !== a.toLowerCase()) && y(new jh(n, o)), w)
      try {
        var c = t.getMessageFormat(w, a, s, i);
        return c.format(r);
      } catch (m) {
        return y(new Eo('Error formatting default message for: "'.concat(d, '", rendering default message verbatim'), o, n, m)), typeof w == "string" ? w : d;
      }
    return d;
  }
  try {
    var c = t.getMessageFormat(f, o, l, P({ formatters: t }, i || {}));
    return c.format(r);
  } catch (m) {
    y(new Eo('Error formatting message: "'.concat(d, '", using ').concat(w ? "default message" : "id", " as fallback."), o, n, m));
  }
  if (w)
    try {
      var c = t.getMessageFormat(w, a, s, i);
      return c.format(r);
    } catch (m) {
      y(new Eo('Error formatting the default message for: "'.concat(d, '", rendering message verbatim'), o, n, m));
    }
  return typeof f == "string" ? f : typeof w == "string" ? w : d;
}, Ec = [
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
function Li(e, t, n, r) {
  var i = e.locale, o = e.formats, l = e.onError, u = e.timeZone;
  r === void 0 && (r = {});
  var a = r.format, s = P(P({}, u && { timeZone: u }), a && yu(o, t, a, l)), p = Ht(r, Ec, s);
  return t === "time" && !p.hour && !p.minute && !p.second && !p.timeStyle && !p.dateStyle && (p = P(P({}, p), { hour: "numeric", minute: "numeric" })), n(i, p);
}
function Vh(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var i = n[0], o = n[1], l = o === void 0 ? {} : o, u = typeof i == "string" ? new Date(i || 0) : i;
  try {
    return Li(e, "date", t, l).format(u);
  } catch (a) {
    e.onError(new Ie("Error formatting date.", e.locale, a));
  }
  return String(u);
}
function $h(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var i = n[0], o = n[1], l = o === void 0 ? {} : o, u = typeof i == "string" ? new Date(i || 0) : i;
  try {
    return Li(e, "time", t, l).format(u);
  } catch (a) {
    e.onError(new Ie("Error formatting time.", e.locale, a));
  }
  return String(u);
}
function Wh(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var i = n[0], o = n[1], l = n[2], u = l === void 0 ? {} : l, a = e.timeZone, s = e.locale, p = e.onError, y = Ht(u, Ec, a ? { timeZone: a } : {});
  try {
    return t(s, y).formatRange(i, o);
  } catch (h) {
    p(new Ie("Error formatting date time range.", e.locale, h));
  }
  return String(i);
}
function Xh(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var i = n[0], o = n[1], l = o === void 0 ? {} : o, u = typeof i == "string" ? new Date(i || 0) : i;
  try {
    return Li(e, "date", t, l).formatToParts(u);
  } catch (a) {
    e.onError(new Ie("Error formatting date.", e.locale, a));
  }
  return [];
}
function Qh(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var i = n[0], o = n[1], l = o === void 0 ? {} : o, u = typeof i == "string" ? new Date(i || 0) : i;
  try {
    return Li(e, "time", t, l).formatToParts(u);
  } catch (a) {
    e.onError(new Ie("Error formatting time.", e.locale, a));
  }
  return [];
}
var Zh = [
  "style",
  "type",
  "fallback",
  "languageDisplay"
];
function Yh(e, t, n, r) {
  var i = e.locale, o = e.onError, l = Intl.DisplayNames;
  l || o(new mt(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`, Ue.MISSING_INTL_API));
  var u = Ht(r, Zh);
  try {
    return t(i, u).of(n);
  } catch (a) {
    o(new Ie("Error formatting display name.", i, a));
  }
}
var Kh = [
  "type",
  "style"
], Ja = Date.now();
function Jh(e) {
  return "".concat(Ja, "_").concat(e, "_").concat(Ja);
}
function qh(e, t, n, r) {
  r === void 0 && (r = {});
  var i = wc(e, t, n, r).reduce(function(o, l) {
    var u = l.value;
    return typeof u != "string" ? o.push(u) : typeof o[o.length - 1] == "string" ? o[o.length - 1] += u : o.push(u), o;
  }, []);
  return i.length === 1 ? i[0] : i.length === 0 ? "" : i;
}
function wc(e, t, n, r) {
  var i = e.locale, o = e.onError;
  r === void 0 && (r = {});
  var l = Intl.ListFormat;
  l || o(new mt(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`, Ue.MISSING_INTL_API));
  var u = Ht(r, Kh);
  try {
    var a = {}, s = n.map(function(p, y) {
      if (typeof p == "object") {
        var h = Jh(y);
        return a[h] = p, h;
      }
      return String(p);
    });
    return t(i, u).formatToParts(s).map(function(p) {
      return p.type === "literal" ? p : P(P({}, p), { value: a[p.value] || p.value });
    });
  } catch (p) {
    o(new Ie("Error formatting list.", i, p));
  }
  return n;
}
var em = ["type"];
function tm(e, t, n, r) {
  var i = e.locale, o = e.onError;
  r === void 0 && (r = {}), Intl.PluralRules || o(new mt(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, Ue.MISSING_INTL_API));
  var l = Ht(r, em);
  try {
    return t(i, l).select(n);
  } catch (u) {
    o(new Ie("Error formatting plural.", i, u));
  }
  return "other";
}
var nm = ["numeric", "style"];
function rm(e, t, n) {
  var r = e.locale, i = e.formats, o = e.onError;
  n === void 0 && (n = {});
  var l = n.format, u = !!l && yu(i, "relative", l, o) || {}, a = Ht(n, nm, u);
  return t(r, a);
}
function im(e, t, n, r, i) {
  i === void 0 && (i = {}), r || (r = "second");
  var o = Intl.RelativeTimeFormat;
  o || e.onError(new mt(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`, Ue.MISSING_INTL_API));
  try {
    return rm(e, t, i).format(n, r);
  } catch (l) {
    e.onError(new Ie("Error formatting relative time.", e.locale, l));
  }
  return String(n);
}
var om = [
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
function Sc(e, t, n) {
  var r = e.locale, i = e.formats, o = e.onError;
  n === void 0 && (n = {});
  var l = n.format, u = l && yu(i, "number", l, o) || {}, a = Ht(n, om, u);
  return t(r, a);
}
function lm(e, t, n, r) {
  r === void 0 && (r = {});
  try {
    return Sc(e, t, r).format(n);
  } catch (i) {
    e.onError(new Ie("Error formatting number.", e.locale, i));
  }
  return String(n);
}
function um(e, t, n, r) {
  r === void 0 && (r = {});
  try {
    return Sc(e, t, r).formatToParts(n);
  } catch (i) {
    e.onError(new Ie("Error formatting number.", e.locale, i));
  }
  return [];
}
function am(e) {
  var t = e ? e[Object.keys(e)[0]] : void 0;
  return typeof t == "string";
}
function sm(e) {
  e.onWarn && e.defaultRichTextElements && am(e.messages || {}) && e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.io/docs/getting-started/message-distribution`);
}
function fm(e, t) {
  var n = Gh(t), r = P(P({}, yc), e), i = r.locale, o = r.defaultLocale, l = r.onError;
  return i ? !Intl.NumberFormat.supportedLocalesOf(i).length && l ? l(new Za('Missing locale data for locale: "'.concat(i, '" in Intl.NumberFormat. Using default locale: "').concat(o, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : !Intl.DateTimeFormat.supportedLocalesOf(i).length && l && l(new Za('Missing locale data for locale: "'.concat(i, '" in Intl.DateTimeFormat. Using default locale: "').concat(o, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : (l && l(new Uh('"locale" was not configured, using "'.concat(o, '" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))), r.locale = r.defaultLocale || "en"), sm(r), P(P({}, r), {
    formatters: n,
    formatNumber: lm.bind(null, r, n.getNumberFormat),
    formatNumberToParts: um.bind(null, r, n.getNumberFormat),
    formatRelativeTime: im.bind(null, r, n.getRelativeTimeFormat),
    formatDate: Vh.bind(null, r, n.getDateTimeFormat),
    formatDateToParts: Xh.bind(null, r, n.getDateTimeFormat),
    formatTime: $h.bind(null, r, n.getDateTimeFormat),
    formatDateTimeRange: Wh.bind(null, r, n.getDateTimeFormat),
    formatTimeToParts: Qh.bind(null, r, n.getDateTimeFormat),
    formatPlural: tm.bind(null, r, n.getPluralRules),
    // @ts-expect-error TODO: will get to this later
    formatMessage: hl.bind(null, r, n),
    // @ts-expect-error TODO: will get to this later
    $t: hl.bind(null, r, n),
    formatList: qh.bind(null, r, n.getListFormat),
    formatListToParts: wc.bind(null, r, n.getListFormat),
    formatDisplayName: Yh.bind(null, r, n.getDisplayNames)
  });
}
function xc(e) {
  ec(e, "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.");
}
var Tc = P(P({}, yc), { textComponent: le.Fragment });
function cm(e) {
  return function(t) {
    return e(le.Children.toArray(t));
  };
}
function dm(e, t) {
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
var _c = { exports: {} }, D = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Y = typeof Symbol == "function" && Symbol.for, gu = Y ? Symbol.for("react.element") : 60103, Eu = Y ? Symbol.for("react.portal") : 60106, Ri = Y ? Symbol.for("react.fragment") : 60107, Mi = Y ? Symbol.for("react.strict_mode") : 60108, Ai = Y ? Symbol.for("react.profiler") : 60114, Hi = Y ? Symbol.for("react.provider") : 60109, Di = Y ? Symbol.for("react.context") : 60110, wu = Y ? Symbol.for("react.async_mode") : 60111, Fi = Y ? Symbol.for("react.concurrent_mode") : 60111, Bi = Y ? Symbol.for("react.forward_ref") : 60112, Ui = Y ? Symbol.for("react.suspense") : 60113, pm = Y ? Symbol.for("react.suspense_list") : 60120, ji = Y ? Symbol.for("react.memo") : 60115, bi = Y ? Symbol.for("react.lazy") : 60116, hm = Y ? Symbol.for("react.block") : 60121, mm = Y ? Symbol.for("react.fundamental") : 60117, vm = Y ? Symbol.for("react.responder") : 60118, ym = Y ? Symbol.for("react.scope") : 60119;
function Se(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case gu:
        switch (e = e.type, e) {
          case wu:
          case Fi:
          case Ri:
          case Ai:
          case Mi:
          case Ui:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Di:
              case Bi:
              case bi:
              case ji:
              case Hi:
                return e;
              default:
                return t;
            }
        }
      case Eu:
        return t;
    }
  }
}
function Pc(e) {
  return Se(e) === Fi;
}
D.AsyncMode = wu;
D.ConcurrentMode = Fi;
D.ContextConsumer = Di;
D.ContextProvider = Hi;
D.Element = gu;
D.ForwardRef = Bi;
D.Fragment = Ri;
D.Lazy = bi;
D.Memo = ji;
D.Portal = Eu;
D.Profiler = Ai;
D.StrictMode = Mi;
D.Suspense = Ui;
D.isAsyncMode = function(e) {
  return Pc(e) || Se(e) === wu;
};
D.isConcurrentMode = Pc;
D.isContextConsumer = function(e) {
  return Se(e) === Di;
};
D.isContextProvider = function(e) {
  return Se(e) === Hi;
};
D.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === gu;
};
D.isForwardRef = function(e) {
  return Se(e) === Bi;
};
D.isFragment = function(e) {
  return Se(e) === Ri;
};
D.isLazy = function(e) {
  return Se(e) === bi;
};
D.isMemo = function(e) {
  return Se(e) === ji;
};
D.isPortal = function(e) {
  return Se(e) === Eu;
};
D.isProfiler = function(e) {
  return Se(e) === Ai;
};
D.isStrictMode = function(e) {
  return Se(e) === Mi;
};
D.isSuspense = function(e) {
  return Se(e) === Ui;
};
D.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Ri || e === Fi || e === Ai || e === Mi || e === Ui || e === pm || typeof e == "object" && e !== null && (e.$$typeof === bi || e.$$typeof === ji || e.$$typeof === Hi || e.$$typeof === Di || e.$$typeof === Bi || e.$$typeof === mm || e.$$typeof === vm || e.$$typeof === ym || e.$$typeof === hm);
};
D.typeOf = Se;
_c.exports = D;
var gm = _c.exports, Cc = gm, Em = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, wm = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Nc = {};
Nc[Cc.ForwardRef] = Em;
Nc[Cc.Memo] = wm;
var Su = typeof window < "u" && !window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = le.createContext(null)) : le.createContext(null);
Su.Consumer;
var Sm = Su.Provider, xm = Sm, Tm = Su;
function Oc() {
  var e = le.useContext(Tm);
  return xc(e), e;
}
var ml;
(function(e) {
  e.formatDate = "FormattedDate", e.formatTime = "FormattedTime", e.formatNumber = "FormattedNumber", e.formatList = "FormattedList", e.formatDisplayName = "FormattedDisplayName";
})(ml || (ml = {}));
var vl;
(function(e) {
  e.formatDate = "FormattedDateParts", e.formatTime = "FormattedTimeParts", e.formatNumber = "FormattedNumberParts", e.formatList = "FormattedListParts";
})(vl || (vl = {}));
function kc(e) {
  var t = function(n) {
    var r = Oc(), i = n.value, o = n.children, l = Ii(n, ["value", "children"]), u = typeof i == "string" ? new Date(i || 0) : i, a = e === "formatDate" ? r.formatDateToParts(u, l) : r.formatTimeToParts(u, l);
    return o(a);
  };
  return t.displayName = vl[e], t;
}
function yr(e) {
  var t = function(n) {
    var r = Oc(), i = n.value, o = n.children, l = Ii(
      n,
      ["value", "children"]
    ), u = r[e](i, l);
    if (typeof o == "function")
      return o(u);
    var a = r.textComponent || le.Fragment;
    return le.createElement(a, null, u);
  };
  return t.displayName = ml[e], t;
}
function Ic(e) {
  return e && Object.keys(e).reduce(function(t, n) {
    var r = e[n];
    return t[n] = mc(r) ? cm(r) : r, t;
  }, {});
}
var qa = function(e, t, n, r) {
  for (var i = [], o = 4; o < arguments.length; o++)
    i[o - 4] = arguments[o];
  var l = Ic(r), u = hl.apply(void 0, ce([
    e,
    t,
    n,
    l
  ], i, !1));
  return Array.isArray(u) ? le.Children.toArray(u) : u;
}, es = function(e, t) {
  var n = e.defaultRichTextElements, r = Ii(e, ["defaultRichTextElements"]), i = Ic(n), o = fm(P(P(P({}, Tc), r), { defaultRichTextElements: i }), t), l = {
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
  return P(P({}, o), {
    formatMessage: qa.bind(
      null,
      l,
      // @ts-expect-error fix this
      o.formatters
    ),
    // @ts-expect-error fix this
    $t: qa.bind(null, l, o.formatters)
  });
};
function wo(e) {
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
var _m = (
  /** @class */
  function(e) {
    ke(t, e);
    function t() {
      var n = e !== null && e.apply(this, arguments) || this;
      return n.cache = gc(), n.state = {
        cache: n.cache,
        intl: es(wo(n.props), n.cache),
        prevConfig: wo(n.props)
      }, n;
    }
    return t.getDerivedStateFromProps = function(n, r) {
      var i = r.prevConfig, o = r.cache, l = wo(n);
      return dm(i, l) ? null : {
        intl: es(l, o),
        prevConfig: l
      };
    }, t.prototype.render = function() {
      return xc(this.state.intl), le.createElement(xm, { value: this.state.intl }, this.props.children);
    }, t.displayName = "IntlProvider", t.defaultProps = Tc, t;
  }(le.PureComponent)
);
yr("formatDate");
yr("formatTime");
yr("formatNumber");
yr("formatList");
yr("formatDisplayName");
kc("formatDate");
kc("formatTime");
var Lc = { exports: {} }, Pm = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", Cm = Pm, Nm = Cm;
function Rc() {
}
function Mc() {
}
Mc.resetWarningCache = Rc;
var Om = function() {
  function e(r, i, o, l, u, a) {
    if (a !== Nm) {
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
    checkPropTypes: Mc,
    resetWarningCache: Rc
  };
  return n.PropTypes = n, n;
};
Lc.exports = Om();
var km = Lc.exports;
const ge = /* @__PURE__ */ El(km);
var Ac = { exports: {} };
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
})(Ac);
var Im = Ac.exports;
const Lm = /* @__PURE__ */ El(Im);
let ts = 0;
const Rm = (e = "id") => (ts += 1, `${e}${ts}`);
var Mm = ["children"];
function an(e) {
  "@babel/helpers - typeof";
  return an = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, an(e);
}
function Am(e, t) {
  if (e == null) return {};
  var n = Hm(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      r = o[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Hm(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, o;
  for (o = 0; o < r.length; o++)
    i = r[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Dm(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Fm(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Fc(r.key), r);
  }
}
function Bm(e, t, n) {
  return t && Fm(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Um(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && yl(e, t);
}
function yl(e, t) {
  return yl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, yl(e, t);
}
function jm(e) {
  var t = Dc();
  return function() {
    var r = hi(e), i;
    if (t) {
      var o = hi(this).constructor;
      i = Reflect.construct(r, arguments, o);
    } else
      i = r.apply(this, arguments);
    return bm(this, i);
  };
}
function bm(e, t) {
  if (t && (an(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Hc(e);
}
function Hc(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Dc() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Dc = function() {
    return !!e;
  })();
}
function hi(e) {
  return hi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, hi(e);
}
function zm(e, t, n) {
  return t = Fc(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Fc(e) {
  var t = Gm(e, "string");
  return an(t) == "symbol" ? t : t + "";
}
function Gm(e, t) {
  if (an(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (an(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Hn = /* @__PURE__ */ function(e) {
  return e.MOVED = "MOVED", e.REMOVED = "REMOVED", e.FORMAT = "FORMAT", e.MOVED_AND_FORMAT = "MOVED_AND_FORMAT", e;
}({});
function Vm(e, t, n) {
  var r = /* @__PURE__ */ function(i) {
    Um(l, i);
    var o = jm(l);
    function l(u) {
      var a;
      return Dm(this, l), a = o.call(this, u), a.transformProps = a.transformProps.bind(Hc(a)), a;
    }
    return Bm(l, [{
      key: "warn",
      value: function(a) {
      }
    }, {
      key: "transformProps",
      value: function(a, s) {
        if (n[s] === void 0)
          return a[s] = this.props[s], a;
        var p = n[s], y = p.deprType, h = p.newName, E = p.expect, T = p.transform, w = p.message;
        switch (y) {
          case Hn.MOVED:
            this.warn("".concat(t, ": The prop '").concat(s, "' has been moved to '").concat(h, "'.")), a[h] = this.props[s];
            break;
          case Hn.REMOVED:
            this.warn("".concat(t, ": The prop '").concat(s, "' has been removed. '").concat(w, "'"));
            break;
          case Hn.FORMAT:
            E(this.props[s]) ? a[s] = this.props[s] : (this.warn("".concat(t, ": The prop '").concat(s, "' expects a new format. ").concat(w)), a[s] = T(this.props[s], this.props));
            break;
          case Hn.MOVED_AND_FORMAT:
            this.warn("".concat(t, ": The prop '").concat(s, "' has been moved to '").concat(h, "' and expects a new format. ").concat(w)), a[h] = T(this.props[s], this.props);
            break;
          default:
            a[s] = this.props[s];
            break;
        }
        return a;
      }
    }, {
      key: "render",
      value: function() {
        var a = Object.keys(this.props).reduce(this.transformProps, {}), s = a.children, p = Am(a, Mm);
        return /* @__PURE__ */ be.createElement(e, p, this.props.children || s);
      }
    }]), l;
  }(be.Component);
  return zm(r, "displayName", "withDeprecatedProps(".concat(t, ")")), r;
}
function ar(e) {
  "@babel/helpers - typeof";
  return ar = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ar(e);
}
var $m = ["src", "id", "className", "hidden", "screenReaderText", "svgAttrs", "size"];
function mi() {
  return mi = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, mi.apply(this, arguments);
}
function ns(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Wm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ns(Object(n), !0).forEach(function(r) {
      Bc(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ns(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Bc(e, t, n) {
  return t = Xm(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Xm(e) {
  var t = Qm(e, "string");
  return ar(t) == "symbol" ? t : t + "";
}
function Qm(e, t) {
  if (ar(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (ar(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Zm(e, t) {
  if (e == null) return {};
  var n = Ym(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      r = o[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Ym(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, o;
  for (o = 0; o < r.length; o++)
    i = r[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function xu(e) {
  var t = e.src, n = e.id, r = e.className, i = e.hidden, o = e.screenReaderText, l = e.svgAttrs, u = e.size, a = Zm(e, $m);
  if (t) {
    var s = l["aria-label"] || l["aria-labelledby"], p = Wm({}, l);
    return s || (p["aria-label"] = void 0, p["aria-hidden"] = !0), /* @__PURE__ */ be.createElement("span", mi({
      className: Lm("pgn__icon", Bc({}, "pgn__icon__".concat(u), !!u), r),
      id: n
    }, a), /* @__PURE__ */ be.createElement(t, mi({
      role: "img",
      focusable: !1
    }, p)), o && /* @__PURE__ */ be.createElement("span", {
      className: "sr-only"
    }, o));
  }
  return /* @__PURE__ */ be.createElement(be.Fragment, null, /* @__PURE__ */ be.createElement("span", {
    id: n || Rm("Icon"),
    className: r,
    "aria-hidden": i
  }), o && /* @__PURE__ */ be.createElement("span", {
    className: "sr-only"
  }, o));
}
xu.propTypes = {
  /**
   * An icon component to render.
   * Example import of a Paragon icon component: `import { Check } from '@openedx/paragon/icons';`
   */
  src: ge.oneOfType([ge.element, ge.elementType]),
  /** HTML element attributes to pass through to the underlying svg element */
  svgAttrs: ge.shape({
    "aria-label": ge.string,
    "aria-labelledby": ge.string
  }),
  /**
   * the `id` property of the Icon element, by default this value is generated
   * with the `newId` function with the `prefix` of `Icon`.
   */
  id: ge.string,
  /** The size of the icon. */
  size: ge.oneOf(["xs", "sm", "md", "lg"]),
  /** A class name that will define what the Icon looks like. */
  className: ge.string,
  /**
   * a boolean that determines the value of `aria-hidden` attribute on the Icon span,
   * this value is `true` by default.
   */
  hidden: ge.bool,
  /**
   * a string or an element that will be used on a secondary span leveraging the `sr-only` style
   * for screenreader only text, this value is `undefined` by default. This value is recommended for use unless
   * the Icon is being used in a way that is purely decorative or provides no additional context for screen
   * reader users. This field should be thought of the same way an `alt` attribute would be used for `image` tags.
   */
  screenReaderText: ge.oneOfType([ge.string, ge.element])
};
xu.defaultProps = {
  src: null,
  svgAttrs: {},
  id: void 0,
  hidden: !0,
  screenReaderText: void 0,
  size: void 0,
  className: void 0
};
const Km = Vm(xu, "Icon", {
  className: {
    deprType: Hn.FORMAT,
    expect: function(t) {
      return typeof t == "string";
    },
    transform: function(t) {
      return Array.isArray(t) ? t.join(" ") : t;
    },
    message: "It should be a string."
  }
});
function gl() {
  return gl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, gl.apply(this, arguments);
}
var Jm = function(t) {
  return /* @__PURE__ */ le.createElement("svg", gl({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, t), /* @__PURE__ */ le.createElement("path", {
    d: "M19 9h-4V3H9v6H5l7 7 7-7ZM5 18v2h14v-2H5Z",
    fill: "currentColor"
  }));
};
const qm = ({
  displayName: e,
  title: t,
  description: n,
  audioUrl: r,
  showControls: i,
  autoplay: o,
  showDownload: l
}) => r ? /* @__PURE__ */ Q.jsxs("div", { className: "audio-player-student-view", children: [
  t && /* @__PURE__ */ Q.jsx("h6", { className: "audio-player-title", children: t }),
  n && /* @__PURE__ */ Q.jsx(
    "div",
    {
      className: "audio-player-description",
      dangerouslySetInnerHTML: { __html: n }
    }
  ),
  /* @__PURE__ */ Q.jsxs("div", { className: "audio-player-container", children: [
    /* @__PURE__ */ Q.jsxs(
      "audio",
      {
        controls: i,
        autoPlay: o,
        className: "audio-player",
        "aria-label": t || e,
        children: [
          /* @__PURE__ */ Q.jsx("source", { src: r, type: "audio/mpeg" }),
          /* @__PURE__ */ Q.jsxs("p", { children: [
            "Your browser does not support the audio element.",
            l && /* @__PURE__ */ Q.jsxs(Q.Fragment, { children: [
              " ",
              /* @__PURE__ */ Q.jsx("a", { href: r, download: !0, children: "Download the audio file" }),
              "."
            ] })
          ] })
        ]
      }
    ),
    l && /* @__PURE__ */ Q.jsxs(
      "a",
      {
        href: r,
        download: !0,
        className: "audio-player-download-link",
        "aria-label": "Download audio file",
        children: [
          /* @__PURE__ */ Q.jsx(Km, { src: Jm, className: "download-icon" }),
          "Download Audio"
        ]
      }
    )
  ] })
] }) : /* @__PURE__ */ Q.jsx("div", { className: "audio-player-student-view", children: /* @__PURE__ */ Q.jsx("div", { className: "audio-player-error", children: /* @__PURE__ */ Q.jsx("p", { children: "No audio file has been configured. Please configure this component in Studio." }) }) }), e0 = (e, t) => {
  Zp.render(
    /* @__PURE__ */ Q.jsx(le.StrictMode, { children: /* @__PURE__ */ Q.jsx(_m, { locale: "en", children: /* @__PURE__ */ Q.jsx(
      qm,
      {
        displayName: t.displayName,
        title: t.title,
        description: t.description,
        audioUrl: t.audioUrl,
        showControls: t.showControls,
        autoplay: t.autoplay,
        showDownload: t.showDownload
      }
    ) }) }),
    e
  );
};
export {
  e0 as renderBlock
};
//# sourceMappingURL=student-ui.js.map
