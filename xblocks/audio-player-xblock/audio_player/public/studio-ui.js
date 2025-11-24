var cE = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Oo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var wy = { exports: {} }, So = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Tm = Object.getOwnPropertySymbols, fE = Object.prototype.hasOwnProperty, pE = Object.prototype.propertyIsEnumerable;
function dE(e) {
  if (e == null)
    throw new TypeError("Object.assign cannot be called with null or undefined");
  return Object(e);
}
function mE() {
  try {
    if (!Object.assign)
      return !1;
    var e = new String("abc");
    if (e[5] = "de", Object.getOwnPropertyNames(e)[0] === "5")
      return !1;
    for (var t = {}, n = 0; n < 10; n++)
      t["_" + String.fromCharCode(n)] = n;
    var r = Object.getOwnPropertyNames(t).map(function(a) {
      return t[a];
    });
    if (r.join("") !== "0123456789")
      return !1;
    var i = {};
    return "abcdefghijklmnopqrst".split("").forEach(function(a) {
      i[a] = a;
    }), Object.keys(Object.assign({}, i)).join("") === "abcdefghijklmnopqrst";
  } catch {
    return !1;
  }
}
var Ey = mE() ? Object.assign : function(e, t) {
  for (var n, r = dE(e), i, a = 1; a < arguments.length; a++) {
    n = Object(arguments[a]);
    for (var o in n)
      fE.call(n, o) && (r[o] = n[o]);
    if (Tm) {
      i = Tm(n);
      for (var s = 0; s < i.length; s++)
        pE.call(n, i[s]) && (r[i[s]] = n[i[s]]);
    }
  }
  return r;
}, Oy = { exports: {} }, he = {};
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gp = Ey, ji = 60103, Sy = 60106;
he.Fragment = 60107;
he.StrictMode = 60108;
he.Profiler = 60114;
var Cy = 60109, ky = 60110, Py = 60112;
he.Suspense = 60113;
var _y = 60115, Ay = 60116;
if (typeof Symbol == "function" && Symbol.for) {
  var $t = Symbol.for;
  ji = $t("react.element"), Sy = $t("react.portal"), he.Fragment = $t("react.fragment"), he.StrictMode = $t("react.strict_mode"), he.Profiler = $t("react.profiler"), Cy = $t("react.provider"), ky = $t("react.context"), Py = $t("react.forward_ref"), he.Suspense = $t("react.suspense"), _y = $t("react.memo"), Ay = $t("react.lazy");
}
var Im = typeof Symbol == "function" && Symbol.iterator;
function hE(e) {
  return e === null || typeof e != "object" ? null : (e = Im && e[Im] || e["@@iterator"], typeof e == "function" ? e : null);
}
function Co(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Ty = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Iy = {};
function Ni(e, t, n) {
  this.props = e, this.context = t, this.refs = Iy, this.updater = n || Ty;
}
Ni.prototype.isReactComponent = {};
Ni.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error(Co(85));
  this.updater.enqueueSetState(this, e, t, "setState");
};
Ni.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function jy() {
}
jy.prototype = Ni.prototype;
function yp(e, t, n) {
  this.props = e, this.context = t, this.refs = Iy, this.updater = n || Ty;
}
var bp = yp.prototype = new jy();
bp.constructor = yp;
gp(bp, Ni.prototype);
bp.isPureReactComponent = !0;
var xp = { current: null }, Ny = Object.prototype.hasOwnProperty, Ry = { key: !0, ref: !0, __self: !0, __source: !0 };
function Dy(e, t, n) {
  var r, i = {}, a = null, o = null;
  if (t != null) for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (a = "" + t.key), t) Ny.call(t, r) && !Ry.hasOwnProperty(r) && (i[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) i.children = n;
  else if (1 < s) {
    for (var l = Array(s), u = 0; u < s; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (e && e.defaultProps) for (r in s = e.defaultProps, s) i[r] === void 0 && (i[r] = s[r]);
  return { $$typeof: ji, type: e, key: a, ref: o, props: i, _owner: xp.current };
}
function vE(e, t) {
  return { $$typeof: ji, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function wp(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ji;
}
function gE(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var jm = /\/+/g;
function hu(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? gE("" + e.key) : t.toString(36);
}
function cs(e, t, n, r, i) {
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
        case ji:
        case Sy:
          o = !0;
      }
  }
  if (o) return o = e, i = i(o), e = r === "" ? "." + hu(o, 0) : r, Array.isArray(i) ? (n = "", e != null && (n = e.replace(jm, "$&/") + "/"), cs(i, t, n, "", function(u) {
    return u;
  })) : i != null && (wp(i) && (i = vE(i, n + (!i.key || o && o.key === i.key ? "" : ("" + i.key).replace(jm, "$&/") + "/") + e)), t.push(i)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", Array.isArray(e)) for (var s = 0; s < e.length; s++) {
    a = e[s];
    var l = r + hu(a, s);
    o += cs(a, t, n, l, i);
  }
  else if (l = hE(e), typeof l == "function") for (e = l.call(e), s = 0; !(a = e.next()).done; ) a = a.value, l = r + hu(a, s++), o += cs(a, t, n, l, i);
  else if (a === "object") throw t = "" + e, Error(Co(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t));
  return o;
}
function Vo(e, t, n) {
  if (e == null) return e;
  var r = [], i = 0;
  return cs(e, r, "", "", function(a) {
    return t.call(n, a, i++);
  }), r;
}
function yE(e) {
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
var Fy = { current: null };
function On() {
  var e = Fy.current;
  if (e === null) throw Error(Co(321));
  return e;
}
var bE = { ReactCurrentDispatcher: Fy, ReactCurrentBatchConfig: { transition: 0 }, ReactCurrentOwner: xp, IsSomeRendererActing: { current: !1 }, assign: gp };
he.Children = { map: Vo, forEach: function(e, t, n) {
  Vo(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Vo(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Vo(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!wp(e)) throw Error(Co(143));
  return e;
} };
he.Component = Ni;
he.PureComponent = yp;
he.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = bE;
he.cloneElement = function(e, t, n) {
  if (e == null) throw Error(Co(267, e));
  var r = gp({}, e.props), i = e.key, a = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (a = t.ref, o = xp.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
    for (l in t) Ny.call(t, l) && !Ry.hasOwnProperty(l) && (r[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    s = Array(l);
    for (var u = 0; u < l; u++) s[u] = arguments[u + 2];
    r.children = s;
  }
  return {
    $$typeof: ji,
    type: e.type,
    key: i,
    ref: a,
    props: r,
    _owner: o
  };
};
he.createContext = function(e, t) {
  return t === void 0 && (t = null), e = { $$typeof: ky, _calculateChangedBits: t, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null }, e.Provider = { $$typeof: Cy, _context: e }, e.Consumer = e;
};
he.createElement = Dy;
he.createFactory = function(e) {
  var t = Dy.bind(null, e);
  return t.type = e, t;
};
he.createRef = function() {
  return { current: null };
};
he.forwardRef = function(e) {
  return { $$typeof: Py, render: e };
};
he.isValidElement = wp;
he.lazy = function(e) {
  return { $$typeof: Ay, _payload: { _status: -1, _result: e }, _init: yE };
};
he.memo = function(e, t) {
  return { $$typeof: _y, type: e, compare: t === void 0 ? null : t };
};
he.useCallback = function(e, t) {
  return On().useCallback(e, t);
};
he.useContext = function(e, t) {
  return On().useContext(e, t);
};
he.useDebugValue = function() {
};
he.useEffect = function(e, t) {
  return On().useEffect(e, t);
};
he.useImperativeHandle = function(e, t, n) {
  return On().useImperativeHandle(e, t, n);
};
he.useLayoutEffect = function(e, t) {
  return On().useLayoutEffect(e, t);
};
he.useMemo = function(e, t) {
  return On().useMemo(e, t);
};
he.useReducer = function(e, t, n) {
  return On().useReducer(e, t, n);
};
he.useRef = function(e) {
  return On().useRef(e);
};
he.useState = function(e) {
  return On().useState(e);
};
he.version = "17.0.2";
Oy.exports = he;
var S = Oy.exports;
const y = /* @__PURE__ */ Oo(S);
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xE = S, My = 60103;
So.Fragment = 60107;
if (typeof Symbol == "function" && Symbol.for) {
  var Nm = Symbol.for;
  My = Nm("react.element"), So.Fragment = Nm("react.fragment");
}
var wE = xE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, EE = Object.prototype.hasOwnProperty, OE = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ly(e, t, n) {
  var r, i = {}, a = null, o = null;
  n !== void 0 && (a = "" + n), t.key !== void 0 && (a = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (r in t) EE.call(t, r) && !OE.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) i[r] === void 0 && (i[r] = t[r]);
  return { $$typeof: My, type: e, key: a, ref: o, props: i, _owner: wE.current };
}
So.jsx = Ly;
So.jsxs = Ly;
wy.exports = So;
var ae = wy.exports, By = { exports: {} }, Nt = {}, $y = { exports: {} }, zy = {};
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
  if (typeof window > "u" || typeof MessageChannel != "function") {
    var l = null, u = null, c = function() {
      if (l !== null) try {
        var O = e.unstable_now();
        l(!0, O), l = null;
      } catch (A) {
        throw setTimeout(c, 0), A;
      }
    };
    t = function(O) {
      l !== null ? setTimeout(t, 0, O) : (l = O, setTimeout(c, 0));
    }, n = function(O, A) {
      u = setTimeout(O, A);
    }, r = function() {
      clearTimeout(u);
    }, e.unstable_shouldYield = function() {
      return !1;
    }, i = e.unstable_forceFrameRate = function() {
    };
  } else {
    var d = window.setTimeout, p = window.clearTimeout;
    if (typeof console < "u") {
      var g = window.cancelAnimationFrame;
      typeof window.requestAnimationFrame != "function" && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), typeof g != "function" && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
    }
    var x = !1, w = null, h = -1, m = 5, v = 0;
    e.unstable_shouldYield = function() {
      return e.unstable_now() >= v;
    }, i = function() {
    }, e.unstable_forceFrameRate = function(O) {
      0 > O || 125 < O ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : m = 0 < O ? Math.floor(1e3 / O) : 5;
    };
    var b = new MessageChannel(), E = b.port2;
    b.port1.onmessage = function() {
      if (w !== null) {
        var O = e.unstable_now();
        v = O + m;
        try {
          w(!0, O) ? E.postMessage(null) : (x = !1, w = null);
        } catch (A) {
          throw E.postMessage(null), A;
        }
      } else x = !1;
    }, t = function(O) {
      w = O, x || (x = !0, E.postMessage(null));
    }, n = function(O, A) {
      h = d(function() {
        O(e.unstable_now());
      }, A);
    }, r = function() {
      p(h), h = -1;
    };
  }
  function C(O, A) {
    var F = O.length;
    O.push(A);
    e: for (; ; ) {
      var V = F - 1 >>> 1, G = O[V];
      if (G !== void 0 && 0 < N(G, A)) O[V] = A, O[F] = G, F = V;
      else break e;
    }
  }
  function k(O) {
    return O = O[0], O === void 0 ? null : O;
  }
  function P(O) {
    var A = O[0];
    if (A !== void 0) {
      var F = O.pop();
      if (F !== A) {
        O[0] = F;
        e: for (var V = 0, G = O.length; V < G; ) {
          var Y = 2 * (V + 1) - 1, X = O[Y], re = Y + 1, oe = O[re];
          if (X !== void 0 && 0 > N(X, F)) oe !== void 0 && 0 > N(oe, X) ? (O[V] = oe, O[re] = F, V = re) : (O[V] = X, O[Y] = F, V = Y);
          else if (oe !== void 0 && 0 > N(oe, F)) O[V] = oe, O[re] = F, V = re;
          else break e;
        }
      }
      return A;
    }
    return null;
  }
  function N(O, A) {
    var F = O.sortIndex - A.sortIndex;
    return F !== 0 ? F : O.id - A.id;
  }
  var T = [], $ = [], Z = 1, B = null, j = 3, M = !1, L = !1, I = !1;
  function _(O) {
    for (var A = k($); A !== null; ) {
      if (A.callback === null) P($);
      else if (A.startTime <= O) P($), A.sortIndex = A.expirationTime, C(T, A);
      else break;
      A = k($);
    }
  }
  function R(O) {
    if (I = !1, _(O), !L) if (k(T) !== null) L = !0, t(D);
    else {
      var A = k($);
      A !== null && n(R, A.startTime - O);
    }
  }
  function D(O, A) {
    L = !1, I && (I = !1, r()), M = !0;
    var F = j;
    try {
      for (_(A), B = k(T); B !== null && (!(B.expirationTime > A) || O && !e.unstable_shouldYield()); ) {
        var V = B.callback;
        if (typeof V == "function") {
          B.callback = null, j = B.priorityLevel;
          var G = V(B.expirationTime <= A);
          A = e.unstable_now(), typeof G == "function" ? B.callback = G : B === k(T) && P(T), _(A);
        } else P(T);
        B = k(T);
      }
      if (B !== null) var Y = !0;
      else {
        var X = k($);
        X !== null && n(R, X.startTime - A), Y = !1;
      }
      return Y;
    } finally {
      B = null, j = F, M = !1;
    }
  }
  var H = i;
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(O) {
    O.callback = null;
  }, e.unstable_continueExecution = function() {
    L || M || (L = !0, t(D));
  }, e.unstable_getCurrentPriorityLevel = function() {
    return j;
  }, e.unstable_getFirstCallbackNode = function() {
    return k(T);
  }, e.unstable_next = function(O) {
    switch (j) {
      case 1:
      case 2:
      case 3:
        var A = 3;
        break;
      default:
        A = j;
    }
    var F = j;
    j = A;
    try {
      return O();
    } finally {
      j = F;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = H, e.unstable_runWithPriority = function(O, A) {
    switch (O) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        O = 3;
    }
    var F = j;
    j = O;
    try {
      return A();
    } finally {
      j = F;
    }
  }, e.unstable_scheduleCallback = function(O, A, F) {
    var V = e.unstable_now();
    switch (typeof F == "object" && F !== null ? (F = F.delay, F = typeof F == "number" && 0 < F ? V + F : V) : F = V, O) {
      case 1:
        var G = -1;
        break;
      case 2:
        G = 250;
        break;
      case 5:
        G = 1073741823;
        break;
      case 4:
        G = 1e4;
        break;
      default:
        G = 5e3;
    }
    return G = F + G, O = { id: Z++, callback: A, priorityLevel: O, startTime: F, expirationTime: G, sortIndex: -1 }, F > V ? (O.sortIndex = F, C($, O), k(T) === null && O === k($) && (I ? r() : I = !0, n(R, F - V))) : (O.sortIndex = G, C(T, O), L || M || (L = !0, t(D))), O;
  }, e.unstable_wrapCallback = function(O) {
    var A = j;
    return function() {
      var F = j;
      j = A;
      try {
        return O.apply(this, arguments);
      } finally {
        j = F;
      }
    };
  };
})(zy);
$y.exports = zy;
var SE = $y.exports;
/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sl = S, _e = Ey, He = SE;
function U(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
if (!Sl) throw Error(U(227));
var Hy = /* @__PURE__ */ new Set(), Na = {};
function Rr(e, t) {
  gi(e, t), gi(e + "Capture", t);
}
function gi(e, t) {
  for (Na[e] = t, e = 0; e < t.length; e++) Hy.add(t[e]);
}
var vn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), CE = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Rm = Object.prototype.hasOwnProperty, Dm = {}, Fm = {};
function kE(e) {
  return Rm.call(Fm, e) ? !0 : Rm.call(Dm, e) ? !1 : CE.test(e) ? Fm[e] = !0 : (Dm[e] = !0, !1);
}
function PE(e, t, n, r) {
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
function _E(e, t, n, r) {
  if (t === null || typeof t > "u" || PE(e, t, n, r)) return !0;
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
function ft(e, t, n, r, i, a, o) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = a, this.removeEmptyString = o;
}
var Ye = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Ye[e] = new ft(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Ye[t] = new ft(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Ye[e] = new ft(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Ye[e] = new ft(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Ye[e] = new ft(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Ye[e] = new ft(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Ye[e] = new ft(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Ye[e] = new ft(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Ye[e] = new ft(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ep = /[\-:]([a-z])/g;
function Op(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Ep,
    Op
  );
  Ye[t] = new ft(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Ep, Op);
  Ye[t] = new ft(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Ep, Op);
  Ye[t] = new ft(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Ye[e] = new ft(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ye.xlinkHref = new ft("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Ye[e] = new ft(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Sp(e, t, n, r) {
  var i = Ye.hasOwnProperty(t) ? Ye[t] : null, a = i !== null ? i.type === 0 : r ? !1 : !(!(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N");
  a || (_E(t, n, i, r) && (n = null), r || i === null ? kE(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Dr = Sl.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, la = 60103, vr = 60106, Nn = 60107, Cp = 60108, ga = 60114, kp = 60109, Pp = 60110, Cl = 60112, ya = 60113, Ps = 60120, kl = 60115, _p = 60116, Ap = 60121, Tp = 60128, Vy = 60129, Ip = 60130, ac = 60131;
if (typeof Symbol == "function" && Symbol.for) {
  var ze = Symbol.for;
  la = ze("react.element"), vr = ze("react.portal"), Nn = ze("react.fragment"), Cp = ze("react.strict_mode"), ga = ze("react.profiler"), kp = ze("react.provider"), Pp = ze("react.context"), Cl = ze("react.forward_ref"), ya = ze("react.suspense"), Ps = ze("react.suspense_list"), kl = ze("react.memo"), _p = ze("react.lazy"), Ap = ze("react.block"), ze("react.scope"), Tp = ze("react.opaque.id"), Vy = ze("react.debug_trace_mode"), Ip = ze("react.offscreen"), ac = ze("react.legacy_hidden");
}
var Mm = typeof Symbol == "function" && Symbol.iterator;
function qi(e) {
  return e === null || typeof e != "object" ? null : (e = Mm && e[Mm] || e["@@iterator"], typeof e == "function" ? e : null);
}
var vu;
function ua(e) {
  if (vu === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    vu = t && t[1] || "";
  }
  return `
` + vu + e;
}
var gu = !1;
function Uo(e, t) {
  if (!e || gu) return "";
  gu = !0;
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
      } catch (l) {
        var r = l;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (l) {
        r = l;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (l) {
        r = l;
      }
      e();
    }
  } catch (l) {
    if (l && r && typeof l.stack == "string") {
      for (var i = l.stack.split(`
`), a = r.stack.split(`
`), o = i.length - 1, s = a.length - 1; 1 <= o && 0 <= s && i[o] !== a[s]; ) s--;
      for (; 1 <= o && 0 <= s; o--, s--) if (i[o] !== a[s]) {
        if (o !== 1 || s !== 1)
          do
            if (o--, s--, 0 > s || i[o] !== a[s]) return `
` + i[o].replace(" at new ", " at ");
          while (1 <= o && 0 <= s);
        break;
      }
    }
  } finally {
    gu = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? ua(e) : "";
}
function AE(e) {
  switch (e.tag) {
    case 5:
      return ua(e.type);
    case 16:
      return ua("Lazy");
    case 13:
      return ua("Suspense");
    case 19:
      return ua("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Uo(e.type, !1), e;
    case 11:
      return e = Uo(e.type.render, !1), e;
    case 22:
      return e = Uo(e.type._render, !1), e;
    case 1:
      return e = Uo(e.type, !0), e;
    default:
      return "";
  }
}
function ai(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Nn:
      return "Fragment";
    case vr:
      return "Portal";
    case ga:
      return "Profiler";
    case Cp:
      return "StrictMode";
    case ya:
      return "Suspense";
    case Ps:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Pp:
      return (e.displayName || "Context") + ".Consumer";
    case kp:
      return (e._context.displayName || "Context") + ".Provider";
    case Cl:
      var t = e.render;
      return t = t.displayName || t.name || "", e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef");
    case kl:
      return ai(e.type);
    case Ap:
      return ai(e._render);
    case _p:
      t = e._payload, e = e._init;
      try {
        return ai(e(t));
      } catch {
      }
  }
  return null;
}
function qn(e) {
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
function Uy(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function TE(e) {
  var t = Uy(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function Wo(e) {
  e._valueTracker || (e._valueTracker = TE(e));
}
function Wy(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Uy(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function _s(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function oc(e, t) {
  var n = t.checked;
  return _e({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Lm(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = qn(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Gy(e, t) {
  t = t.checked, t != null && Sp(e, "checked", t, !1);
}
function sc(e, t) {
  Gy(e, t);
  var n = qn(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? lc(e, t.type, n) : t.hasOwnProperty("defaultValue") && lc(e, t.type, qn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Bm(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function lc(e, t, n) {
  (t !== "number" || _s(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
function IE(e) {
  var t = "";
  return Sl.Children.forEach(e, function(n) {
    n != null && (t += n);
  }), t;
}
function uc(e, t) {
  return e = _e({ children: void 0 }, t), (t = IE(t.children)) && (e.children = t), e;
}
function oi(e, t, n, r) {
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
function cc(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(U(91));
  return _e({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function $m(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(U(92));
      if (Array.isArray(n)) {
        if (!(1 >= n.length)) throw Error(U(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: qn(n) };
}
function Ky(e, t) {
  var n = qn(t.value), r = qn(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function zm(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
var fc = { html: "http://www.w3.org/1999/xhtml", svg: "http://www.w3.org/2000/svg" };
function qy(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function pc(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? qy(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Go, Yy = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, i);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== fc.svg || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Go = Go || document.createElement("div"), Go.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Go.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Ra(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ba = {
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
}, jE = ["Webkit", "ms", "Moz", "O"];
Object.keys(ba).forEach(function(e) {
  jE.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), ba[t] = ba[e];
  });
});
function Xy(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || ba.hasOwnProperty(e) && ba[e] ? ("" + t).trim() : t + "px";
}
function Qy(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, i = Xy(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
  }
}
var NE = _e({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function dc(e, t) {
  if (t) {
    if (NE[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(U(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(U(60));
      if (!(typeof t.dangerouslySetInnerHTML == "object" && "__html" in t.dangerouslySetInnerHTML)) throw Error(U(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(U(62));
  }
}
function mc(e, t) {
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
function jp(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var hc = null, si = null, li = null;
function Hm(e) {
  if (e = Po(e)) {
    if (typeof hc != "function") throw Error(U(280));
    var t = e.stateNode;
    t && (t = jl(t), hc(e.stateNode, e.type, t));
  }
}
function Zy(e) {
  si ? li ? li.push(e) : li = [e] : si = e;
}
function Jy() {
  if (si) {
    var e = si, t = li;
    if (li = si = null, Hm(e), t) for (e = 0; e < t.length; e++) Hm(t[e]);
  }
}
function Np(e, t) {
  return e(t);
}
function e0(e, t, n, r, i) {
  return e(t, n, r, i);
}
function Rp() {
}
var t0 = Np, gr = !1, yu = !1;
function Dp() {
  (si !== null || li !== null) && (Rp(), Jy());
}
function RE(e, t, n) {
  if (yu) return e(t, n);
  yu = !0;
  try {
    return t0(e, t, n);
  } finally {
    yu = !1, Dp();
  }
}
function Da(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = jl(n);
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
  if (n && typeof n != "function") throw Error(U(231, t, typeof n));
  return n;
}
var vc = !1;
if (vn) try {
  var Yi = {};
  Object.defineProperty(Yi, "passive", { get: function() {
    vc = !0;
  } }), window.addEventListener("test", Yi, Yi), window.removeEventListener("test", Yi, Yi);
} catch {
  vc = !1;
}
function DE(e, t, n, r, i, a, o, s, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var xa = !1, As = null, Ts = !1, gc = null, FE = { onError: function(e) {
  xa = !0, As = e;
} };
function ME(e, t, n, r, i, a, o, s, l) {
  xa = !1, As = null, DE.apply(FE, arguments);
}
function LE(e, t, n, r, i, a, o, s, l) {
  if (ME.apply(this, arguments), xa) {
    if (xa) {
      var u = As;
      xa = !1, As = null;
    } else throw Error(U(198));
    Ts || (Ts = !0, gc = u);
  }
}
function Fr(e) {
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
function n0(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Vm(e) {
  if (Fr(e) !== e) throw Error(U(188));
}
function BE(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Fr(e), t === null) throw Error(U(188));
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
        if (a === n) return Vm(i), e;
        if (a === r) return Vm(i), t;
        a = a.sibling;
      }
      throw Error(U(188));
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
        if (!o) throw Error(U(189));
      }
    }
    if (n.alternate !== r) throw Error(U(190));
  }
  if (n.tag !== 3) throw Error(U(188));
  return n.stateNode.current === n ? e : t;
}
function r0(e) {
  if (e = BE(e), !e) return null;
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
function Um(e, t) {
  for (var n = e.alternate; t !== null; ) {
    if (t === e || t === n) return !0;
    t = t.return;
  }
  return !1;
}
var i0, Fp, a0, o0, yc = !1, qt = [], Bn = null, $n = null, zn = null, Fa = /* @__PURE__ */ new Map(), Ma = /* @__PURE__ */ new Map(), Xi = [], Wm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function bc(e, t, n, r, i) {
  return { blockedOn: e, domEventName: t, eventSystemFlags: n | 16, nativeEvent: i, targetContainers: [r] };
}
function Gm(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Bn = null;
      break;
    case "dragenter":
    case "dragleave":
      $n = null;
      break;
    case "mouseover":
    case "mouseout":
      zn = null;
      break;
    case "pointerover":
    case "pointerout":
      Fa.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ma.delete(t.pointerId);
  }
}
function Qi(e, t, n, r, i, a) {
  return e === null || e.nativeEvent !== a ? (e = bc(t, n, r, i, a), t !== null && (t = Po(t), t !== null && Fp(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
}
function $E(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return Bn = Qi(Bn, e, t, n, r, i), !0;
    case "dragenter":
      return $n = Qi($n, e, t, n, r, i), !0;
    case "mouseover":
      return zn = Qi(zn, e, t, n, r, i), !0;
    case "pointerover":
      var a = i.pointerId;
      return Fa.set(a, Qi(Fa.get(a) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return a = i.pointerId, Ma.set(a, Qi(Ma.get(a) || null, e, t, n, r, i)), !0;
  }
  return !1;
}
function zE(e) {
  var t = yr(e.target);
  if (t !== null) {
    var n = Fr(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = n0(n), t !== null) {
          e.blockedOn = t, o0(e.lanePriority, function() {
            He.unstable_runWithPriority(e.priority, function() {
              a0(n);
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
function fs(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = $p(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n !== null) return t = Po(n), t !== null && Fp(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Km(e, t, n) {
  fs(e) && n.delete(t);
}
function HE() {
  for (yc = !1; 0 < qt.length; ) {
    var e = qt[0];
    if (e.blockedOn !== null) {
      e = Po(e.blockedOn), e !== null && i0(e);
      break;
    }
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = $p(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n !== null) {
        e.blockedOn = n;
        break;
      }
      t.shift();
    }
    e.blockedOn === null && qt.shift();
  }
  Bn !== null && fs(Bn) && (Bn = null), $n !== null && fs($n) && ($n = null), zn !== null && fs(zn) && (zn = null), Fa.forEach(Km), Ma.forEach(Km);
}
function Zi(e, t) {
  e.blockedOn === t && (e.blockedOn = null, yc || (yc = !0, He.unstable_scheduleCallback(He.unstable_NormalPriority, HE)));
}
function s0(e) {
  function t(i) {
    return Zi(i, e);
  }
  if (0 < qt.length) {
    Zi(qt[0], e);
    for (var n = 1; n < qt.length; n++) {
      var r = qt[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Bn !== null && Zi(Bn, e), $n !== null && Zi($n, e), zn !== null && Zi(zn, e), Fa.forEach(t), Ma.forEach(t), n = 0; n < Xi.length; n++) r = Xi[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Xi.length && (n = Xi[0], n.blockedOn === null); ) zE(n), n.blockedOn === null && Xi.shift();
}
function Ko(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Kr = { animationend: Ko("Animation", "AnimationEnd"), animationiteration: Ko("Animation", "AnimationIteration"), animationstart: Ko("Animation", "AnimationStart"), transitionend: Ko("Transition", "TransitionEnd") }, bu = {}, l0 = {};
vn && (l0 = document.createElement("div").style, "AnimationEvent" in window || (delete Kr.animationend.animation, delete Kr.animationiteration.animation, delete Kr.animationstart.animation), "TransitionEvent" in window || delete Kr.transitionend.transition);
function Pl(e) {
  if (bu[e]) return bu[e];
  if (!Kr[e]) return e;
  var t = Kr[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in l0) return bu[e] = t[n];
  return e;
}
var u0 = Pl("animationend"), c0 = Pl("animationiteration"), f0 = Pl("animationstart"), p0 = Pl("transitionend"), d0 = /* @__PURE__ */ new Map(), Mp = /* @__PURE__ */ new Map(), VE = [
  "abort",
  "abort",
  u0,
  "animationEnd",
  c0,
  "animationIteration",
  f0,
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
  p0,
  "transitionEnd",
  "waiting",
  "waiting"
];
function Lp(e, t) {
  for (var n = 0; n < e.length; n += 2) {
    var r = e[n], i = e[n + 1];
    i = "on" + (i[0].toUpperCase() + i.slice(1)), Mp.set(r, t), d0.set(r, i), Rr(i, [r]);
  }
}
var UE = He.unstable_now;
UE();
var Ee = 8;
function Wr(e) {
  if (1 & e) return Ee = 15, 1;
  if (2 & e) return Ee = 14, 2;
  if (4 & e) return Ee = 13, 4;
  var t = 24 & e;
  return t !== 0 ? (Ee = 12, t) : e & 32 ? (Ee = 11, 32) : (t = 192 & e, t !== 0 ? (Ee = 10, t) : e & 256 ? (Ee = 9, 256) : (t = 3584 & e, t !== 0 ? (Ee = 8, t) : e & 4096 ? (Ee = 7, 4096) : (t = 4186112 & e, t !== 0 ? (Ee = 6, t) : (t = 62914560 & e, t !== 0 ? (Ee = 5, t) : e & 67108864 ? (Ee = 4, 67108864) : e & 134217728 ? (Ee = 3, 134217728) : (t = 805306368 & e, t !== 0 ? (Ee = 2, t) : 1073741824 & e ? (Ee = 1, 1073741824) : (Ee = 8, e))))));
}
function WE(e) {
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
function GE(e) {
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
      throw Error(U(358, e));
  }
}
function La(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return Ee = 0;
  var r = 0, i = 0, a = e.expiredLanes, o = e.suspendedLanes, s = e.pingedLanes;
  if (a !== 0) r = a, i = Ee = 15;
  else if (a = n & 134217727, a !== 0) {
    var l = a & ~o;
    l !== 0 ? (r = Wr(l), i = Ee) : (s &= a, s !== 0 && (r = Wr(s), i = Ee));
  } else a = n & ~o, a !== 0 ? (r = Wr(a), i = Ee) : s !== 0 && (r = Wr(s), i = Ee);
  if (r === 0) return 0;
  if (r = 31 - Yn(r), r = n & ((0 > r ? 0 : 1 << r) << 1) - 1, t !== 0 && t !== r && !(t & o)) {
    if (Wr(t), i <= Ee) return t;
    Ee = i;
  }
  if (t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Yn(t), i = 1 << n, r |= e[n], t &= ~i;
  return r;
}
function m0(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Is(e, t) {
  switch (e) {
    case 15:
      return 1;
    case 14:
      return 2;
    case 12:
      return e = Gr(24 & ~t), e === 0 ? Is(10, t) : e;
    case 10:
      return e = Gr(192 & ~t), e === 0 ? Is(8, t) : e;
    case 8:
      return e = Gr(3584 & ~t), e === 0 && (e = Gr(4186112 & ~t), e === 0 && (e = 512)), e;
    case 2:
      return t = Gr(805306368 & ~t), t === 0 && (t = 268435456), t;
  }
  throw Error(U(358, e));
}
function Gr(e) {
  return e & -e;
}
function xu(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function _l(e, t, n) {
  e.pendingLanes |= t;
  var r = t - 1;
  e.suspendedLanes &= r, e.pingedLanes &= r, e = e.eventTimes, t = 31 - Yn(t), e[t] = n;
}
var Yn = Math.clz32 ? Math.clz32 : YE, KE = Math.log, qE = Math.LN2;
function YE(e) {
  return e === 0 ? 32 : 31 - (KE(e) / qE | 0) | 0;
}
var XE = He.unstable_UserBlockingPriority, QE = He.unstable_runWithPriority, ps = !0;
function ZE(e, t, n, r) {
  gr || Rp();
  var i = Bp, a = gr;
  gr = !0;
  try {
    e0(i, e, t, n, r);
  } finally {
    (gr = a) || Dp();
  }
}
function JE(e, t, n, r) {
  QE(XE, Bp.bind(null, e, t, n, r));
}
function Bp(e, t, n, r) {
  if (ps) {
    var i;
    if ((i = (t & 4) === 0) && 0 < qt.length && -1 < Wm.indexOf(e)) e = bc(null, e, t, n, r), qt.push(e);
    else {
      var a = $p(e, t, n, r);
      if (a === null) i && Gm(e, r);
      else {
        if (i) {
          if (-1 < Wm.indexOf(e)) {
            e = bc(a, e, t, n, r), qt.push(e);
            return;
          }
          if ($E(a, e, t, n, r)) return;
          Gm(e, r);
        }
        k0(e, t, r, null, n);
      }
    }
  }
}
function $p(e, t, n, r) {
  var i = jp(r);
  if (i = yr(i), i !== null) {
    var a = Fr(i);
    if (a === null) i = null;
    else {
      var o = a.tag;
      if (o === 13) {
        if (i = n0(a), i !== null) return i;
        i = null;
      } else if (o === 3) {
        if (a.stateNode.hydrate) return a.tag === 3 ? a.stateNode.containerInfo : null;
        i = null;
      } else a !== i && (i = null);
    }
  }
  return k0(e, t, r, i, n), null;
}
var Rn = null, zp = null, ds = null;
function h0() {
  if (ds) return ds;
  var e, t = zp, n = t.length, r, i = "value" in Rn ? Rn.value : Rn.textContent, a = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++) ;
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === i[a - r]; r++) ;
  return ds = i.slice(e, 1 < r ? 1 - r : void 0);
}
function ms(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function qo() {
  return !0;
}
function qm() {
  return !1;
}
function wt(e) {
  function t(n, r, i, a, o) {
    this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = a, this.target = o, this.currentTarget = null;
    for (var s in e) e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(a) : a[s]);
    return this.isDefaultPrevented = (a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1) ? qo : qm, this.isPropagationStopped = qm, this;
  }
  return _e(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = qo);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = qo);
  }, persist: function() {
  }, isPersistent: qo }), t;
}
var Ri = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Hp = wt(Ri), ko = _e({}, Ri, { view: 0, detail: 0 }), e1 = wt(ko), wu, Eu, Ji, Al = _e({}, ko, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Vp, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Ji && (Ji && e.type === "mousemove" ? (wu = e.screenX - Ji.screenX, Eu = e.screenY - Ji.screenY) : Eu = wu = 0, Ji = e), wu);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Eu;
} }), Ym = wt(Al), t1 = _e({}, Al, { dataTransfer: 0 }), n1 = wt(t1), r1 = _e({}, ko, { relatedTarget: 0 }), Ou = wt(r1), i1 = _e({}, Ri, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), a1 = wt(i1), o1 = _e({}, Ri, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), s1 = wt(o1), l1 = _e({}, Ri, { data: 0 }), Xm = wt(l1), u1 = {
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
}, c1 = {
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
}, f1 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function p1(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = f1[e]) ? !!t[e] : !1;
}
function Vp() {
  return p1;
}
var d1 = _e({}, ko, { key: function(e) {
  if (e.key) {
    var t = u1[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = ms(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? c1[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Vp, charCode: function(e) {
  return e.type === "keypress" ? ms(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? ms(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), m1 = wt(d1), h1 = _e({}, Al, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Qm = wt(h1), v1 = _e({}, ko, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Vp }), g1 = wt(v1), y1 = _e({}, Ri, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), b1 = wt(y1), x1 = _e({}, Al, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), w1 = wt(x1), E1 = [9, 13, 27, 32], Up = vn && "CompositionEvent" in window, wa = null;
vn && "documentMode" in document && (wa = document.documentMode);
var O1 = vn && "TextEvent" in window && !wa, v0 = vn && (!Up || wa && 8 < wa && 11 >= wa), Zm = " ", Jm = !1;
function g0(e, t) {
  switch (e) {
    case "keyup":
      return E1.indexOf(t.keyCode) !== -1;
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
function y0(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var qr = !1;
function S1(e, t) {
  switch (e) {
    case "compositionend":
      return y0(t);
    case "keypress":
      return t.which !== 32 ? null : (Jm = !0, Zm);
    case "textInput":
      return e = t.data, e === Zm && Jm ? null : e;
    default:
      return null;
  }
}
function C1(e, t) {
  if (qr) return e === "compositionend" || !Up && g0(e, t) ? (e = h0(), ds = zp = Rn = null, qr = !1, e) : null;
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
      return v0 && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var k1 = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function eh(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!k1[e.type] : t === "textarea";
}
function b0(e, t, n, r) {
  Zy(r), t = js(t, "onChange"), 0 < t.length && (n = new Hp("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Ea = null, Ba = null;
function P1(e) {
  O0(e, 0);
}
function Tl(e) {
  var t = Xr(e);
  if (Wy(t)) return e;
}
function _1(e, t) {
  if (e === "change") return t;
}
var x0 = !1;
if (vn) {
  var Su;
  if (vn) {
    var Cu = "oninput" in document;
    if (!Cu) {
      var th = document.createElement("div");
      th.setAttribute("oninput", "return;"), Cu = typeof th.oninput == "function";
    }
    Su = Cu;
  } else Su = !1;
  x0 = Su && (!document.documentMode || 9 < document.documentMode);
}
function nh() {
  Ea && (Ea.detachEvent("onpropertychange", w0), Ba = Ea = null);
}
function w0(e) {
  if (e.propertyName === "value" && Tl(Ba)) {
    var t = [];
    if (b0(t, Ba, e, jp(e)), e = P1, gr) e(t);
    else {
      gr = !0;
      try {
        Np(e, t);
      } finally {
        gr = !1, Dp();
      }
    }
  }
}
function A1(e, t, n) {
  e === "focusin" ? (nh(), Ea = t, Ba = n, Ea.attachEvent("onpropertychange", w0)) : e === "focusout" && nh();
}
function T1(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Tl(Ba);
}
function I1(e, t) {
  if (e === "click") return Tl(t);
}
function j1(e, t) {
  if (e === "input" || e === "change") return Tl(t);
}
function N1(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var kt = typeof Object.is == "function" ? Object.is : N1, R1 = Object.prototype.hasOwnProperty;
function $a(e, t) {
  if (kt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) if (!R1.call(t, n[r]) || !kt(e[n[r]], t[n[r]])) return !1;
  return !0;
}
function rh(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ih(e, t) {
  var n = rh(e);
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
    n = rh(n);
  }
}
function E0(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? E0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function ah() {
  for (var e = window, t = _s(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = _s(e.document);
  }
  return t;
}
function xc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
var D1 = vn && "documentMode" in document && 11 >= document.documentMode, Yr = null, wc = null, Oa = null, Ec = !1;
function oh(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ec || Yr == null || Yr !== _s(r) || (r = Yr, "selectionStart" in r && xc(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Oa && $a(Oa, r) || (Oa = r, r = js(wc, "onSelect"), 0 < r.length && (t = new Hp("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Yr)));
}
Lp(
  "cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),
  0
);
Lp("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1);
Lp(VE, 2);
for (var sh = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), ku = 0; ku < sh.length; ku++) Mp.set(sh[ku], 0);
gi("onMouseEnter", ["mouseout", "mouseover"]);
gi("onMouseLeave", ["mouseout", "mouseover"]);
gi("onPointerEnter", ["pointerout", "pointerover"]);
gi("onPointerLeave", ["pointerout", "pointerover"]);
Rr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Rr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Rr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Rr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Rr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Rr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var ca = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), F1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(ca));
function lh(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, LE(r, t, void 0, e), e.currentTarget = null;
}
function O0(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], i = r.event;
    r = r.listeners;
    e: {
      var a = void 0;
      if (t) for (var o = r.length - 1; 0 <= o; o--) {
        var s = r[o], l = s.instance, u = s.currentTarget;
        if (s = s.listener, l !== a && i.isPropagationStopped()) break e;
        lh(i, s, u), a = l;
      }
      else for (o = 0; o < r.length; o++) {
        if (s = r[o], l = s.instance, u = s.currentTarget, s = s.listener, l !== a && i.isPropagationStopped()) break e;
        lh(i, s, u), a = l;
      }
    }
  }
  if (Ts) throw e = gc, Ts = !1, gc = null, e;
}
function Se(e, t) {
  var n = _0(t), r = e + "__bubble";
  n.has(r) || (C0(t, e, 2, !1), n.add(r));
}
var uh = "_reactListening" + Math.random().toString(36).slice(2);
function S0(e) {
  e[uh] || (e[uh] = !0, Hy.forEach(function(t) {
    F1.has(t) || ch(t, !1, e, null), ch(t, !0, e, null);
  }));
}
function ch(e, t, n, r) {
  var i = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 0, a = n;
  e === "selectionchange" && n.nodeType !== 9 && (a = n.ownerDocument);
  var o = _0(a), s = e + "__" + (t ? "capture" : "bubble");
  o.has(s) || (t && (i |= 4), C0(a, e, i, t), o.add(s));
}
function C0(e, t, n, r) {
  var i = Mp.get(t);
  switch (i === void 0 ? 2 : i) {
    case 0:
      i = ZE;
      break;
    case 1:
      i = JE;
      break;
    default:
      i = Bp;
  }
  n = i.bind(null, t, n, e), i = void 0, !vc || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: i }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, !1);
}
function k0(e, t, n, r, i) {
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
        if (o = yr(s), o === null) return;
        if (l = o.tag, l === 5 || l === 6) {
          r = a = o;
          continue e;
        }
        s = s.parentNode;
      }
    }
    r = r.return;
  }
  RE(function() {
    var u = a, c = jp(n), d = [];
    e: {
      var p = d0.get(e);
      if (p !== void 0) {
        var g = Hp, x = e;
        switch (e) {
          case "keypress":
            if (ms(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = m1;
            break;
          case "focusin":
            x = "focus", g = Ou;
            break;
          case "focusout":
            x = "blur", g = Ou;
            break;
          case "beforeblur":
          case "afterblur":
            g = Ou;
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
            g = Ym;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = n1;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = g1;
            break;
          case u0:
          case c0:
          case f0:
            g = a1;
            break;
          case p0:
            g = b1;
            break;
          case "scroll":
            g = e1;
            break;
          case "wheel":
            g = w1;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = s1;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = Qm;
        }
        var w = (t & 4) !== 0, h = !w && e === "scroll", m = w ? p !== null ? p + "Capture" : null : p;
        w = [];
        for (var v = u, b; v !== null; ) {
          b = v;
          var E = b.stateNode;
          if (b.tag === 5 && E !== null && (b = E, m !== null && (E = Da(v, m), E != null && w.push(za(v, E, b)))), h) break;
          v = v.return;
        }
        0 < w.length && (p = new g(p, x, null, n, c), d.push({ event: p, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (p = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", p && !(t & 16) && (x = n.relatedTarget || n.fromElement) && (yr(x) || x[Di])) break e;
        if ((g || p) && (p = c.window === c ? c : (p = c.ownerDocument) ? p.defaultView || p.parentWindow : window, g ? (x = n.relatedTarget || n.toElement, g = u, x = x ? yr(x) : null, x !== null && (h = Fr(x), x !== h || x.tag !== 5 && x.tag !== 6) && (x = null)) : (g = null, x = u), g !== x)) {
          if (w = Ym, E = "onMouseLeave", m = "onMouseEnter", v = "mouse", (e === "pointerout" || e === "pointerover") && (w = Qm, E = "onPointerLeave", m = "onPointerEnter", v = "pointer"), h = g == null ? p : Xr(g), b = x == null ? p : Xr(x), p = new w(E, v + "leave", g, n, c), p.target = h, p.relatedTarget = b, E = null, yr(c) === u && (w = new w(m, v + "enter", x, n, c), w.target = b, w.relatedTarget = h, E = w), h = E, g && x) t: {
            for (w = g, m = x, v = 0, b = w; b; b = Vr(b)) v++;
            for (b = 0, E = m; E; E = Vr(E)) b++;
            for (; 0 < v - b; ) w = Vr(w), v--;
            for (; 0 < b - v; ) m = Vr(m), b--;
            for (; v--; ) {
              if (w === m || m !== null && w === m.alternate) break t;
              w = Vr(w), m = Vr(m);
            }
            w = null;
          }
          else w = null;
          g !== null && fh(d, p, g, w, !1), x !== null && h !== null && fh(d, h, x, w, !0);
        }
      }
      e: {
        if (p = u ? Xr(u) : window, g = p.nodeName && p.nodeName.toLowerCase(), g === "select" || g === "input" && p.type === "file") var C = _1;
        else if (eh(p)) if (x0) C = j1;
        else {
          C = T1;
          var k = A1;
        }
        else (g = p.nodeName) && g.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (C = I1);
        if (C && (C = C(e, u))) {
          b0(d, C, n, c);
          break e;
        }
        k && k(e, p, u), e === "focusout" && (k = p._wrapperState) && k.controlled && p.type === "number" && lc(p, "number", p.value);
      }
      switch (k = u ? Xr(u) : window, e) {
        case "focusin":
          (eh(k) || k.contentEditable === "true") && (Yr = k, wc = u, Oa = null);
          break;
        case "focusout":
          Oa = wc = Yr = null;
          break;
        case "mousedown":
          Ec = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ec = !1, oh(d, n, c);
          break;
        case "selectionchange":
          if (D1) break;
        case "keydown":
        case "keyup":
          oh(d, n, c);
      }
      var P;
      if (Up) e: {
        switch (e) {
          case "compositionstart":
            var N = "onCompositionStart";
            break e;
          case "compositionend":
            N = "onCompositionEnd";
            break e;
          case "compositionupdate":
            N = "onCompositionUpdate";
            break e;
        }
        N = void 0;
      }
      else qr ? g0(e, n) && (N = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
      N && (v0 && n.locale !== "ko" && (qr || N !== "onCompositionStart" ? N === "onCompositionEnd" && qr && (P = h0()) : (Rn = c, zp = "value" in Rn ? Rn.value : Rn.textContent, qr = !0)), k = js(u, N), 0 < k.length && (N = new Xm(N, e, null, n, c), d.push({ event: N, listeners: k }), P ? N.data = P : (P = y0(n), P !== null && (N.data = P)))), (P = O1 ? S1(e, n) : C1(e, n)) && (u = js(u, "onBeforeInput"), 0 < u.length && (c = new Xm(
        "onBeforeInput",
        "beforeinput",
        null,
        n,
        c
      ), d.push({ event: c, listeners: u }), c.data = P));
    }
    O0(d, t);
  });
}
function za(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function js(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e, a = i.stateNode;
    i.tag === 5 && a !== null && (i = a, a = Da(e, n), a != null && r.unshift(za(e, a, i)), a = Da(e, t), a != null && r.push(za(e, a, i))), e = e.return;
  }
  return r;
}
function Vr(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function fh(e, t, n, r, i) {
  for (var a = t._reactName, o = []; n !== null && n !== r; ) {
    var s = n, l = s.alternate, u = s.stateNode;
    if (l !== null && l === r) break;
    s.tag === 5 && u !== null && (s = u, i ? (l = Da(n, a), l != null && o.unshift(za(n, l, s))) : i || (l = Da(n, a), l != null && o.push(za(n, l, s)))), n = n.return;
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
function Ns() {
}
var Pu = null, _u = null;
function P0(e, t) {
  switch (e) {
    case "button":
    case "input":
    case "select":
    case "textarea":
      return !!t.autoFocus;
  }
  return !1;
}
function Oc(e, t) {
  return e === "textarea" || e === "option" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var ph = typeof setTimeout == "function" ? setTimeout : void 0, M1 = typeof clearTimeout == "function" ? clearTimeout : void 0;
function Wp(e) {
  e.nodeType === 1 ? e.textContent = "" : e.nodeType === 9 && (e = e.body, e != null && (e.textContent = ""));
}
function ui(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
  }
  return e;
}
function dh(e) {
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
var Au = 0;
function L1(e) {
  return { $$typeof: Tp, toString: e, valueOf: e };
}
var Il = Math.random().toString(36).slice(2), Dn = "__reactFiber$" + Il, Rs = "__reactProps$" + Il, Di = "__reactContainer$" + Il, mh = "__reactEvents$" + Il;
function yr(e) {
  var t = e[Dn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Di] || n[Dn]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = dh(e); e !== null; ) {
        if (n = e[Dn]) return n;
        e = dh(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Po(e) {
  return e = e[Dn] || e[Di], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Xr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(U(33));
}
function jl(e) {
  return e[Rs] || null;
}
function _0(e) {
  var t = e[mh];
  return t === void 0 && (t = e[mh] = /* @__PURE__ */ new Set()), t;
}
var Sc = [], Qr = -1;
function ar(e) {
  return { current: e };
}
function ke(e) {
  0 > Qr || (e.current = Sc[Qr], Sc[Qr] = null, Qr--);
}
function Ne(e, t) {
  Qr++, Sc[Qr] = e.current, e.current = t;
}
var Xn = {}, rt = ar(Xn), mt = ar(!1), kr = Xn;
function yi(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Xn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var i = {}, a;
  for (a in n) i[a] = t[a];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i;
}
function ht(e) {
  return e = e.childContextTypes, e != null;
}
function Ds() {
  ke(mt), ke(rt);
}
function hh(e, t, n) {
  if (rt.current !== Xn) throw Error(U(168));
  Ne(rt, t), Ne(mt, n);
}
function A0(e, t, n) {
  var r = e.stateNode;
  if (e = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in e)) throw Error(U(108, ai(t) || "Unknown", i));
  return _e({}, n, r);
}
function hs(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Xn, kr = rt.current, Ne(rt, e), Ne(mt, mt.current), !0;
}
function vh(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(U(169));
  n ? (e = A0(e, t, kr), r.__reactInternalMemoizedMergedChildContext = e, ke(mt), ke(rt), Ne(rt, e)) : ke(mt), Ne(mt, n);
}
var Gp = null, Or = null, B1 = He.unstable_runWithPriority, Kp = He.unstable_scheduleCallback, Cc = He.unstable_cancelCallback, $1 = He.unstable_shouldYield, gh = He.unstable_requestPaint, kc = He.unstable_now, z1 = He.unstable_getCurrentPriorityLevel, Nl = He.unstable_ImmediatePriority, T0 = He.unstable_UserBlockingPriority, I0 = He.unstable_NormalPriority, j0 = He.unstable_LowPriority, N0 = He.unstable_IdlePriority, Tu = {}, H1 = gh !== void 0 ? gh : function() {
}, cn = null, vs = null, Iu = !1, yh = kc(), Je = 1e4 > yh ? kc : function() {
  return kc() - yh;
};
function bi() {
  switch (z1()) {
    case Nl:
      return 99;
    case T0:
      return 98;
    case I0:
      return 97;
    case j0:
      return 96;
    case N0:
      return 95;
    default:
      throw Error(U(332));
  }
}
function R0(e) {
  switch (e) {
    case 99:
      return Nl;
    case 98:
      return T0;
    case 97:
      return I0;
    case 96:
      return j0;
    case 95:
      return N0;
    default:
      throw Error(U(332));
  }
}
function Pr(e, t) {
  return e = R0(e), B1(e, t);
}
function Ha(e, t, n) {
  return e = R0(e), Kp(e, t, n);
}
function on() {
  if (vs !== null) {
    var e = vs;
    vs = null, Cc(e);
  }
  D0();
}
function D0() {
  if (!Iu && cn !== null) {
    Iu = !0;
    var e = 0;
    try {
      var t = cn;
      Pr(99, function() {
        for (; e < t.length; e++) {
          var n = t[e];
          do
            n = n(!0);
          while (n !== null);
        }
      }), cn = null;
    } catch (n) {
      throw cn !== null && (cn = cn.slice(e + 1)), Kp(Nl, on), n;
    } finally {
      Iu = !1;
    }
  }
}
var V1 = Dr.ReactCurrentBatchConfig;
function zt(e, t) {
  if (e && e.defaultProps) {
    t = _e({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Fs = ar(null), Ms = null, Zr = null, Ls = null;
function qp() {
  Ls = Zr = Ms = null;
}
function Yp(e) {
  var t = Fs.current;
  ke(Fs), e.type._context._currentValue = t;
}
function F0(e, t) {
  for (; e !== null; ) {
    var n = e.alternate;
    if ((e.childLanes & t) === t) {
      if (n === null || (n.childLanes & t) === t) break;
      n.childLanes |= t;
    } else e.childLanes |= t, n !== null && (n.childLanes |= t);
    e = e.return;
  }
}
function ci(e, t) {
  Ms = e, Ls = Zr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Vt = !0), e.firstContext = null);
}
function At(e, t) {
  if (Ls !== e && t !== !1 && t !== 0)
    if ((typeof t != "number" || t === 1073741823) && (Ls = e, t = 1073741823), t = { context: e, observedBits: t, next: null }, Zr === null) {
      if (Ms === null) throw Error(U(308));
      Zr = t, Ms.dependencies = { lanes: 0, firstContext: t, responders: null };
    } else Zr = Zr.next = t;
  return e._currentValue;
}
var In = !1;
function Xp(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null }, effects: null };
}
function M0(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Hn(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Vn(e, t) {
  if (e = e.updateQueue, e !== null) {
    e = e.shared;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
}
function bh(e, t) {
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
function Va(e, t, n, r) {
  var i = e.updateQueue;
  In = !1;
  var a = i.firstBaseUpdate, o = i.lastBaseUpdate, s = i.shared.pending;
  if (s !== null) {
    i.shared.pending = null;
    var l = s, u = l.next;
    l.next = null, o === null ? a = u : o.next = u, o = l;
    var c = e.alternate;
    if (c !== null) {
      c = c.updateQueue;
      var d = c.lastBaseUpdate;
      d !== o && (d === null ? c.firstBaseUpdate = u : d.next = u, c.lastBaseUpdate = l);
    }
  }
  if (a !== null) {
    d = i.baseState, o = 0, c = u = l = null;
    do {
      s = a.lane;
      var p = a.eventTime;
      if ((r & s) === s) {
        c !== null && (c = c.next = {
          eventTime: p,
          lane: 0,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null
        });
        e: {
          var g = e, x = a;
          switch (s = t, p = n, x.tag) {
            case 1:
              if (g = x.payload, typeof g == "function") {
                d = g.call(p, d, s);
                break e;
              }
              d = g;
              break e;
            case 3:
              g.flags = g.flags & -4097 | 64;
            case 0:
              if (g = x.payload, s = typeof g == "function" ? g.call(p, d, s) : g, s == null) break e;
              d = _e({}, d, s);
              break e;
            case 2:
              In = !0;
          }
        }
        a.callback !== null && (e.flags |= 32, s = i.effects, s === null ? i.effects = [a] : s.push(a));
      } else p = { eventTime: p, lane: s, tag: a.tag, payload: a.payload, callback: a.callback, next: null }, c === null ? (u = c = p, l = d) : c = c.next = p, o |= s;
      if (a = a.next, a === null) {
        if (s = i.shared.pending, s === null) break;
        a = s.next, s.next = null, i.lastBaseUpdate = s, i.shared.pending = null;
      }
    } while (!0);
    c === null && (l = d), i.baseState = l, i.firstBaseUpdate = u, i.lastBaseUpdate = c, Ao |= o, e.lanes = o, e.memoizedState = d;
  }
}
function xh(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], i = r.callback;
    if (i !== null) {
      if (r.callback = null, r = n, typeof i != "function") throw Error(U(191, i));
      i.call(r);
    }
  }
}
var L0 = new Sl.Component().refs;
function Bs(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : _e({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Rl = { isMounted: function(e) {
  return (e = e._reactInternals) ? Fr(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = bt(), i = Un(e), a = Hn(r, i);
  a.payload = t, n != null && (a.callback = n), Vn(e, a), Wn(e, i, r);
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = bt(), i = Un(e), a = Hn(r, i);
  a.tag = 1, a.payload = t, n != null && (a.callback = n), Vn(e, a), Wn(e, i, r);
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = bt(), r = Un(e), i = Hn(n, r);
  i.tag = 2, t != null && (i.callback = t), Vn(e, i), Wn(e, r, n);
} };
function wh(e, t, n, r, i, a, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !$a(n, r) || !$a(i, a) : !0;
}
function B0(e, t, n) {
  var r = !1, i = Xn, a = t.contextType;
  return typeof a == "object" && a !== null ? a = At(a) : (i = ht(t) ? kr : rt.current, r = t.contextTypes, a = (r = r != null) ? yi(e, i) : Xn), t = new t(n, a), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Rl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = a), t;
}
function Eh(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Rl.enqueueReplaceState(t, t.state, null);
}
function Pc(e, t, n, r) {
  var i = e.stateNode;
  i.props = n, i.state = e.memoizedState, i.refs = L0, Xp(e);
  var a = t.contextType;
  typeof a == "object" && a !== null ? i.context = At(a) : (a = ht(t) ? kr : rt.current, i.context = yi(e, a)), Va(e, n, i, r), i.state = e.memoizedState, a = t.getDerivedStateFromProps, typeof a == "function" && (Bs(e, t, a, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && Rl.enqueueReplaceState(i, i.state, null), Va(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4);
}
var Yo = Array.isArray;
function ea(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(U(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(U(147, e));
      var i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(a) {
        var o = r.refs;
        o === L0 && (o = r.refs = {}), a === null ? delete o[i] : o[i] = a;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string") throw Error(U(284));
    if (!n._owner) throw Error(U(290, e));
  }
  return e;
}
function Xo(e, t) {
  if (e.type !== "textarea") throw Error(U(31, Object.prototype.toString.call(t) === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : t));
}
function $0(e) {
  function t(h, m) {
    if (e) {
      var v = h.lastEffect;
      v !== null ? (v.nextEffect = m, h.lastEffect = m) : h.firstEffect = h.lastEffect = m, m.nextEffect = null, m.flags = 8;
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
    return h = Zn(h, m), h.index = 0, h.sibling = null, h;
  }
  function a(h, m, v) {
    return h.index = v, e ? (v = h.alternate, v !== null ? (v = v.index, v < m ? (h.flags = 2, m) : v) : (h.flags = 2, m)) : m;
  }
  function o(h) {
    return e && h.alternate === null && (h.flags = 2), h;
  }
  function s(h, m, v, b) {
    return m === null || m.tag !== 6 ? (m = Fu(v, h.mode, b), m.return = h, m) : (m = i(m, v), m.return = h, m);
  }
  function l(h, m, v, b) {
    return m !== null && m.elementType === v.type ? (b = i(m, v.props), b.ref = ea(h, m, v), b.return = h, b) : (b = xs(v.type, v.key, v.props, null, h.mode, b), b.ref = ea(h, m, v), b.return = h, b);
  }
  function u(h, m, v, b) {
    return m === null || m.tag !== 4 || m.stateNode.containerInfo !== v.containerInfo || m.stateNode.implementation !== v.implementation ? (m = Mu(v, h.mode, b), m.return = h, m) : (m = i(m, v.children || []), m.return = h, m);
  }
  function c(h, m, v, b, E) {
    return m === null || m.tag !== 7 ? (m = mi(v, h.mode, b, E), m.return = h, m) : (m = i(m, v), m.return = h, m);
  }
  function d(h, m, v) {
    if (typeof m == "string" || typeof m == "number") return m = Fu("" + m, h.mode, v), m.return = h, m;
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case la:
          return v = xs(m.type, m.key, m.props, null, h.mode, v), v.ref = ea(h, null, m), v.return = h, v;
        case vr:
          return m = Mu(m, h.mode, v), m.return = h, m;
      }
      if (Yo(m) || qi(m)) return m = mi(
        m,
        h.mode,
        v,
        null
      ), m.return = h, m;
      Xo(h, m);
    }
    return null;
  }
  function p(h, m, v, b) {
    var E = m !== null ? m.key : null;
    if (typeof v == "string" || typeof v == "number") return E !== null ? null : s(h, m, "" + v, b);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case la:
          return v.key === E ? v.type === Nn ? c(h, m, v.props.children, b, E) : l(h, m, v, b) : null;
        case vr:
          return v.key === E ? u(h, m, v, b) : null;
      }
      if (Yo(v) || qi(v)) return E !== null ? null : c(h, m, v, b, null);
      Xo(h, v);
    }
    return null;
  }
  function g(h, m, v, b, E) {
    if (typeof b == "string" || typeof b == "number") return h = h.get(v) || null, s(m, h, "" + b, E);
    if (typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case la:
          return h = h.get(b.key === null ? v : b.key) || null, b.type === Nn ? c(m, h, b.props.children, E, b.key) : l(m, h, b, E);
        case vr:
          return h = h.get(b.key === null ? v : b.key) || null, u(m, h, b, E);
      }
      if (Yo(b) || qi(b)) return h = h.get(v) || null, c(m, h, b, E, null);
      Xo(m, b);
    }
    return null;
  }
  function x(h, m, v, b) {
    for (var E = null, C = null, k = m, P = m = 0, N = null; k !== null && P < v.length; P++) {
      k.index > P ? (N = k, k = null) : N = k.sibling;
      var T = p(h, k, v[P], b);
      if (T === null) {
        k === null && (k = N);
        break;
      }
      e && k && T.alternate === null && t(h, k), m = a(T, m, P), C === null ? E = T : C.sibling = T, C = T, k = N;
    }
    if (P === v.length) return n(h, k), E;
    if (k === null) {
      for (; P < v.length; P++) k = d(h, v[P], b), k !== null && (m = a(k, m, P), C === null ? E = k : C.sibling = k, C = k);
      return E;
    }
    for (k = r(h, k); P < v.length; P++) N = g(k, h, P, v[P], b), N !== null && (e && N.alternate !== null && k.delete(N.key === null ? P : N.key), m = a(N, m, P), C === null ? E = N : C.sibling = N, C = N);
    return e && k.forEach(function($) {
      return t(h, $);
    }), E;
  }
  function w(h, m, v, b) {
    var E = qi(v);
    if (typeof E != "function") throw Error(U(150));
    if (v = E.call(v), v == null) throw Error(U(151));
    for (var C = E = null, k = m, P = m = 0, N = null, T = v.next(); k !== null && !T.done; P++, T = v.next()) {
      k.index > P ? (N = k, k = null) : N = k.sibling;
      var $ = p(h, k, T.value, b);
      if ($ === null) {
        k === null && (k = N);
        break;
      }
      e && k && $.alternate === null && t(h, k), m = a($, m, P), C === null ? E = $ : C.sibling = $, C = $, k = N;
    }
    if (T.done) return n(h, k), E;
    if (k === null) {
      for (; !T.done; P++, T = v.next()) T = d(h, T.value, b), T !== null && (m = a(T, m, P), C === null ? E = T : C.sibling = T, C = T);
      return E;
    }
    for (k = r(h, k); !T.done; P++, T = v.next()) T = g(k, h, P, T.value, b), T !== null && (e && T.alternate !== null && k.delete(T.key === null ? P : T.key), m = a(T, m, P), C === null ? E = T : C.sibling = T, C = T);
    return e && k.forEach(function(Z) {
      return t(h, Z);
    }), E;
  }
  return function(h, m, v, b) {
    var E = typeof v == "object" && v !== null && v.type === Nn && v.key === null;
    E && (v = v.props.children);
    var C = typeof v == "object" && v !== null;
    if (C) switch (v.$$typeof) {
      case la:
        e: {
          for (C = v.key, E = m; E !== null; ) {
            if (E.key === C) {
              switch (E.tag) {
                case 7:
                  if (v.type === Nn) {
                    n(h, E.sibling), m = i(E, v.props.children), m.return = h, h = m;
                    break e;
                  }
                  break;
                default:
                  if (E.elementType === v.type) {
                    n(h, E.sibling), m = i(E, v.props), m.ref = ea(h, E, v), m.return = h, h = m;
                    break e;
                  }
              }
              n(h, E);
              break;
            } else t(h, E);
            E = E.sibling;
          }
          v.type === Nn ? (m = mi(v.props.children, h.mode, b, v.key), m.return = h, h = m) : (b = xs(v.type, v.key, v.props, null, h.mode, b), b.ref = ea(h, m, v), b.return = h, h = b);
        }
        return o(h);
      case vr:
        e: {
          for (E = v.key; m !== null; ) {
            if (m.key === E) if (m.tag === 4 && m.stateNode.containerInfo === v.containerInfo && m.stateNode.implementation === v.implementation) {
              n(h, m.sibling), m = i(m, v.children || []), m.return = h, h = m;
              break e;
            } else {
              n(h, m);
              break;
            }
            else t(h, m);
            m = m.sibling;
          }
          m = Mu(v, h.mode, b), m.return = h, h = m;
        }
        return o(h);
    }
    if (typeof v == "string" || typeof v == "number") return v = "" + v, m !== null && m.tag === 6 ? (n(h, m.sibling), m = i(m, v), m.return = h, h = m) : (n(h, m), m = Fu(v, h.mode, b), m.return = h, h = m), o(h);
    if (Yo(v)) return x(h, m, v, b);
    if (qi(v)) return w(h, m, v, b);
    if (C && Xo(h, v), typeof v > "u" && !E) switch (h.tag) {
      case 1:
      case 22:
      case 0:
      case 11:
      case 15:
        throw Error(U(152, ai(h.type) || "Component"));
    }
    return n(h, m);
  };
}
var $s = $0(!0), z0 = $0(!1), _o = {}, en = ar(_o), Ua = ar(_o), Wa = ar(_o);
function br(e) {
  if (e === _o) throw Error(U(174));
  return e;
}
function _c(e, t) {
  switch (Ne(Wa, t), Ne(Ua, e), Ne(en, _o), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : pc(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = pc(t, e);
  }
  ke(en), Ne(en, t);
}
function xi() {
  ke(en), ke(Ua), ke(Wa);
}
function Oh(e) {
  br(Wa.current);
  var t = br(en.current), n = pc(t, e.type);
  t !== n && (Ne(Ua, e), Ne(en, n));
}
function Qp(e) {
  Ua.current === e && (ke(en), ke(Ua));
}
var je = ar(0);
function zs(e) {
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
var dn = null, Fn = null, tn = !1;
function H0(e, t) {
  var n = Pt(5, null, null, 0);
  n.elementType = "DELETED", n.type = "DELETED", n.stateNode = t, n.return = e, n.flags = 8, e.lastEffect !== null ? (e.lastEffect.nextEffect = n, e.lastEffect = n) : e.firstEffect = e.lastEffect = n;
}
function Sh(e, t) {
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
function Ac(e) {
  if (tn) {
    var t = Fn;
    if (t) {
      var n = t;
      if (!Sh(e, t)) {
        if (t = ui(n.nextSibling), !t || !Sh(e, t)) {
          e.flags = e.flags & -1025 | 2, tn = !1, dn = e;
          return;
        }
        H0(dn, n);
      }
      dn = e, Fn = ui(t.firstChild);
    } else e.flags = e.flags & -1025 | 2, tn = !1, dn = e;
  }
}
function Ch(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  dn = e;
}
function Qo(e) {
  if (e !== dn) return !1;
  if (!tn) return Ch(e), tn = !0, !1;
  var t = e.type;
  if (e.tag !== 5 || t !== "head" && t !== "body" && !Oc(t, e.memoizedProps)) for (t = Fn; t; ) H0(e, t), t = ui(t.nextSibling);
  if (Ch(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(U(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Fn = ui(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Fn = null;
    }
  } else Fn = dn ? ui(e.stateNode.nextSibling) : null;
  return !0;
}
function ju() {
  Fn = dn = null, tn = !1;
}
var fi = [];
function Zp() {
  for (var e = 0; e < fi.length; e++) fi[e]._workInProgressVersionPrimary = null;
  fi.length = 0;
}
var Sa = Dr.ReactCurrentDispatcher, _t = Dr.ReactCurrentBatchConfig, Ga = 0, Fe = null, Ze = null, Ge = null, Hs = !1, Ca = !1;
function pt() {
  throw Error(U(321));
}
function Jp(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!kt(e[n], t[n])) return !1;
  return !0;
}
function ed(e, t, n, r, i, a) {
  if (Ga = a, Fe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Sa.current = e === null || e.memoizedState === null ? W1 : G1, e = n(r, i), Ca) {
    a = 0;
    do {
      if (Ca = !1, !(25 > a)) throw Error(U(301));
      a += 1, Ge = Ze = null, t.updateQueue = null, Sa.current = K1, e = n(r, i);
    } while (Ca);
  }
  if (Sa.current = Gs, t = Ze !== null && Ze.next !== null, Ga = 0, Ge = Ze = Fe = null, Hs = !1, t) throw Error(U(300));
  return e;
}
function xr() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Ge === null ? Fe.memoizedState = Ge = e : Ge = Ge.next = e, Ge;
}
function Mr() {
  if (Ze === null) {
    var e = Fe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ze.next;
  var t = Ge === null ? Fe.memoizedState : Ge.next;
  if (t !== null) Ge = t, Ze = e;
  else {
    if (e === null) throw Error(U(310));
    Ze = e, e = { memoizedState: Ze.memoizedState, baseState: Ze.baseState, baseQueue: Ze.baseQueue, queue: Ze.queue, next: null }, Ge === null ? Fe.memoizedState = Ge = e : Ge = Ge.next = e;
  }
  return Ge;
}
function Yt(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ta(e) {
  var t = Mr(), n = t.queue;
  if (n === null) throw Error(U(311));
  n.lastRenderedReducer = e;
  var r = Ze, i = r.baseQueue, a = n.pending;
  if (a !== null) {
    if (i !== null) {
      var o = i.next;
      i.next = a.next, a.next = o;
    }
    r.baseQueue = i = a, n.pending = null;
  }
  if (i !== null) {
    i = i.next, r = r.baseState;
    var s = o = a = null, l = i;
    do {
      var u = l.lane;
      if ((Ga & u) === u) s !== null && (s = s.next = { lane: 0, action: l.action, eagerReducer: l.eagerReducer, eagerState: l.eagerState, next: null }), r = l.eagerReducer === e ? l.eagerState : e(r, l.action);
      else {
        var c = {
          lane: u,
          action: l.action,
          eagerReducer: l.eagerReducer,
          eagerState: l.eagerState,
          next: null
        };
        s === null ? (o = s = c, a = r) : s = s.next = c, Fe.lanes |= u, Ao |= u;
      }
      l = l.next;
    } while (l !== null && l !== i);
    s === null ? a = r : s.next = o, kt(r, t.memoizedState) || (Vt = !0), t.memoizedState = r, t.baseState = a, t.baseQueue = s, n.lastRenderedState = r;
  }
  return [t.memoizedState, n.dispatch];
}
function na(e) {
  var t = Mr(), n = t.queue;
  if (n === null) throw Error(U(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, i = n.pending, a = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = i = i.next;
    do
      a = e(a, o.action), o = o.next;
    while (o !== i);
    kt(a, t.memoizedState) || (Vt = !0), t.memoizedState = a, t.baseQueue === null && (t.baseState = a), n.lastRenderedState = a;
  }
  return [a, r];
}
function kh(e, t, n) {
  var r = t._getVersion;
  r = r(t._source);
  var i = t._workInProgressVersionPrimary;
  if (i !== null ? e = i === r : (e = e.mutableReadLanes, (e = (Ga & e) === e) && (t._workInProgressVersionPrimary = r, fi.push(t))), e) return n(t._source);
  throw fi.push(t), Error(U(350));
}
function V0(e, t, n, r) {
  var i = ct;
  if (i === null) throw Error(U(349));
  var a = t._getVersion, o = a(t._source), s = Sa.current, l = s.useState(function() {
    return kh(i, t, n);
  }), u = l[1], c = l[0];
  l = Ge;
  var d = e.memoizedState, p = d.refs, g = p.getSnapshot, x = d.source;
  d = d.subscribe;
  var w = Fe;
  return e.memoizedState = { refs: p, source: t, subscribe: r }, s.useEffect(function() {
    p.getSnapshot = n, p.setSnapshot = u;
    var h = a(t._source);
    if (!kt(o, h)) {
      h = n(t._source), kt(c, h) || (u(h), h = Un(w), i.mutableReadLanes |= h & i.pendingLanes), h = i.mutableReadLanes, i.entangledLanes |= h;
      for (var m = i.entanglements, v = h; 0 < v; ) {
        var b = 31 - Yn(v), E = 1 << b;
        m[b] |= h, v &= ~E;
      }
    }
  }, [n, t, r]), s.useEffect(function() {
    return r(t._source, function() {
      var h = p.getSnapshot, m = p.setSnapshot;
      try {
        m(h(t._source));
        var v = Un(w);
        i.mutableReadLanes |= v & i.pendingLanes;
      } catch (b) {
        m(function() {
          throw b;
        });
      }
    });
  }, [t, r]), kt(g, n) && kt(x, t) && kt(d, r) || (e = { pending: null, dispatch: null, lastRenderedReducer: Yt, lastRenderedState: c }, e.dispatch = u = rd.bind(null, Fe, e), l.queue = e, l.baseQueue = null, c = kh(i, t, n), l.memoizedState = l.baseState = c), c;
}
function U0(e, t, n) {
  var r = Mr();
  return V0(r, e, t, n);
}
function ra(e) {
  var t = xr();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = t.queue = { pending: null, dispatch: null, lastRenderedReducer: Yt, lastRenderedState: e }, e = e.dispatch = rd.bind(null, Fe, e), [t.memoizedState, e];
}
function Vs(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Fe.updateQueue, t === null ? (t = { lastEffect: null }, Fe.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Ph(e) {
  var t = xr();
  return e = { current: e }, t.memoizedState = e;
}
function Us() {
  return Mr().memoizedState;
}
function Tc(e, t, n, r) {
  var i = xr();
  Fe.flags |= e, i.memoizedState = Vs(1 | t, n, void 0, r === void 0 ? null : r);
}
function td(e, t, n, r) {
  var i = Mr();
  r = r === void 0 ? null : r;
  var a = void 0;
  if (Ze !== null) {
    var o = Ze.memoizedState;
    if (a = o.destroy, r !== null && Jp(r, o.deps)) {
      Vs(t, n, a, r);
      return;
    }
  }
  Fe.flags |= e, i.memoizedState = Vs(1 | t, n, a, r);
}
function _h(e, t) {
  return Tc(516, 4, e, t);
}
function Ws(e, t) {
  return td(516, 4, e, t);
}
function W0(e, t) {
  return td(4, 2, e, t);
}
function G0(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function K0(e, t, n) {
  return n = n != null ? n.concat([e]) : null, td(4, 2, G0.bind(null, t, e), n);
}
function nd() {
}
function q0(e, t) {
  var n = Mr();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Jp(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Y0(e, t) {
  var n = Mr();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Jp(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function U1(e, t) {
  var n = bi();
  Pr(98 > n ? 98 : n, function() {
    e(!0);
  }), Pr(97 < n ? 97 : n, function() {
    var r = _t.transition;
    _t.transition = 1;
    try {
      e(!1), t();
    } finally {
      _t.transition = r;
    }
  });
}
function rd(e, t, n) {
  var r = bt(), i = Un(e), a = { lane: i, action: n, eagerReducer: null, eagerState: null, next: null }, o = t.pending;
  if (o === null ? a.next = a : (a.next = o.next, o.next = a), t.pending = a, o = e.alternate, e === Fe || o !== null && o === Fe) Ca = Hs = !0;
  else {
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
      var s = t.lastRenderedState, l = o(s, n);
      if (a.eagerReducer = o, a.eagerState = l, kt(l, s)) return;
    } catch {
    } finally {
    }
    Wn(e, i, r);
  }
}
var Gs = { readContext: At, useCallback: pt, useContext: pt, useEffect: pt, useImperativeHandle: pt, useLayoutEffect: pt, useMemo: pt, useReducer: pt, useRef: pt, useState: pt, useDebugValue: pt, useDeferredValue: pt, useTransition: pt, useMutableSource: pt, useOpaqueIdentifier: pt, unstable_isNewReconciler: !1 }, W1 = { readContext: At, useCallback: function(e, t) {
  return xr().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: At, useEffect: _h, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Tc(4, 2, G0.bind(
    null,
    t,
    e
  ), n);
}, useLayoutEffect: function(e, t) {
  return Tc(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = xr();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = xr();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = r.queue = { pending: null, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, e = e.dispatch = rd.bind(null, Fe, e), [r.memoizedState, e];
}, useRef: Ph, useState: ra, useDebugValue: nd, useDeferredValue: function(e) {
  var t = ra(e), n = t[0], r = t[1];
  return _h(function() {
    var i = _t.transition;
    _t.transition = 1;
    try {
      r(e);
    } finally {
      _t.transition = i;
    }
  }, [e]), n;
}, useTransition: function() {
  var e = ra(!1), t = e[0];
  return e = U1.bind(null, e[1]), Ph(e), [e, t];
}, useMutableSource: function(e, t, n) {
  var r = xr();
  return r.memoizedState = { refs: { getSnapshot: t, setSnapshot: null }, source: e, subscribe: n }, V0(r, e, t, n);
}, useOpaqueIdentifier: function() {
  if (tn) {
    var e = !1, t = L1(function() {
      throw e || (e = !0, n("r:" + (Au++).toString(36))), Error(U(355));
    }), n = ra(t)[1];
    return !(Fe.mode & 2) && (Fe.flags |= 516, Vs(
      5,
      function() {
        n("r:" + (Au++).toString(36));
      },
      void 0,
      null
    )), t;
  }
  return t = "r:" + (Au++).toString(36), ra(t), t;
}, unstable_isNewReconciler: !1 }, G1 = { readContext: At, useCallback: q0, useContext: At, useEffect: Ws, useImperativeHandle: K0, useLayoutEffect: W0, useMemo: Y0, useReducer: ta, useRef: Us, useState: function() {
  return ta(Yt);
}, useDebugValue: nd, useDeferredValue: function(e) {
  var t = ta(Yt), n = t[0], r = t[1];
  return Ws(function() {
    var i = _t.transition;
    _t.transition = 1;
    try {
      r(e);
    } finally {
      _t.transition = i;
    }
  }, [e]), n;
}, useTransition: function() {
  var e = ta(Yt)[0];
  return [
    Us().current,
    e
  ];
}, useMutableSource: U0, useOpaqueIdentifier: function() {
  return ta(Yt)[0];
}, unstable_isNewReconciler: !1 }, K1 = { readContext: At, useCallback: q0, useContext: At, useEffect: Ws, useImperativeHandle: K0, useLayoutEffect: W0, useMemo: Y0, useReducer: na, useRef: Us, useState: function() {
  return na(Yt);
}, useDebugValue: nd, useDeferredValue: function(e) {
  var t = na(Yt), n = t[0], r = t[1];
  return Ws(function() {
    var i = _t.transition;
    _t.transition = 1;
    try {
      r(e);
    } finally {
      _t.transition = i;
    }
  }, [e]), n;
}, useTransition: function() {
  var e = na(Yt)[0];
  return [
    Us().current,
    e
  ];
}, useMutableSource: U0, useOpaqueIdentifier: function() {
  return na(Yt)[0];
}, unstable_isNewReconciler: !1 }, q1 = Dr.ReactCurrentOwner, Vt = !1;
function dt(e, t, n, r) {
  t.child = e === null ? z0(t, null, n, r) : $s(t, e.child, n, r);
}
function Ah(e, t, n, r, i) {
  n = n.render;
  var a = t.ref;
  return ci(t, i), r = ed(e, t, n, r, a, i), e !== null && !Vt ? (t.updateQueue = e.updateQueue, t.flags &= -517, e.lanes &= ~i, mn(e, t, i)) : (t.flags |= 1, dt(e, t, r, i), t.child);
}
function Th(e, t, n, r, i, a) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !ud(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, X0(e, t, o, r, i, a)) : (e = xs(n.type, null, r, t, t.mode, a), e.ref = t.ref, e.return = t, t.child = e);
  }
  return o = e.child, !(i & a) && (i = o.memoizedProps, n = n.compare, n = n !== null ? n : $a, n(i, r) && e.ref === t.ref) ? mn(e, t, a) : (t.flags |= 1, e = Zn(o, r), e.ref = t.ref, e.return = t, t.child = e);
}
function X0(e, t, n, r, i, a) {
  if (e !== null && $a(e.memoizedProps, r) && e.ref === t.ref) if (Vt = !1, (a & i) !== 0) e.flags & 16384 && (Vt = !0);
  else return t.lanes = e.lanes, mn(e, t, a);
  return Ic(e, t, n, r, a);
}
function Nu(e, t, n) {
  var r = t.pendingProps, i = r.children, a = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden" || r.mode === "unstable-defer-without-hiding") if (!(t.mode & 4)) t.memoizedState = { baseLanes: 0 }, Jo(t, n);
  else if (n & 1073741824) t.memoizedState = { baseLanes: 0 }, Jo(t, a !== null ? a.baseLanes : n);
  else return e = a !== null ? a.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e }, Jo(t, e), null;
  else a !== null ? (r = a.baseLanes | n, t.memoizedState = null) : r = n, Jo(t, r);
  return dt(e, t, i, n), t.child;
}
function Q0(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 128);
}
function Ic(e, t, n, r, i) {
  var a = ht(n) ? kr : rt.current;
  return a = yi(t, a), ci(t, i), n = ed(e, t, n, r, a, i), e !== null && !Vt ? (t.updateQueue = e.updateQueue, t.flags &= -517, e.lanes &= ~i, mn(e, t, i)) : (t.flags |= 1, dt(e, t, n, i), t.child);
}
function Ih(e, t, n, r, i) {
  if (ht(n)) {
    var a = !0;
    hs(t);
  } else a = !1;
  if (ci(t, i), t.stateNode === null) e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2), B0(t, n, r), Pc(t, n, r, i), r = !0;
  else if (e === null) {
    var o = t.stateNode, s = t.memoizedProps;
    o.props = s;
    var l = o.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = At(u) : (u = ht(n) ? kr : rt.current, u = yi(t, u));
    var c = n.getDerivedStateFromProps, d = typeof c == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    d || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (s !== r || l !== u) && Eh(t, o, r, u), In = !1;
    var p = t.memoizedState;
    o.state = p, Va(t, r, o, i), l = t.memoizedState, s !== r || p !== l || mt.current || In ? (typeof c == "function" && (Bs(t, n, c, r), l = t.memoizedState), (s = In || wh(t, n, s, r, p, l, u)) ? (d || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4)) : (typeof o.componentDidMount == "function" && (t.flags |= 4), t.memoizedProps = r, t.memoizedState = l), o.props = r, o.state = l, o.context = u, r = s) : (typeof o.componentDidMount == "function" && (t.flags |= 4), r = !1);
  } else {
    o = t.stateNode, M0(e, t), s = t.memoizedProps, u = t.type === t.elementType ? s : zt(t.type, s), o.props = u, d = t.pendingProps, p = o.context, l = n.contextType, typeof l == "object" && l !== null ? l = At(l) : (l = ht(n) ? kr : rt.current, l = yi(t, l));
    var g = n.getDerivedStateFromProps;
    (c = typeof g == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (s !== d || p !== l) && Eh(t, o, r, l), In = !1, p = t.memoizedState, o.state = p, Va(t, r, o, i);
    var x = t.memoizedState;
    s !== d || p !== x || mt.current || In ? (typeof g == "function" && (Bs(t, n, g, r), x = t.memoizedState), (u = In || wh(t, n, u, r, p, x, l)) ? (c || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(
      r,
      x,
      l
    ), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, x, l)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 256)) : (typeof o.componentDidUpdate != "function" || s === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && p === e.memoizedState || (t.flags |= 256), t.memoizedProps = r, t.memoizedState = x), o.props = r, o.state = x, o.context = l, r = u) : (typeof o.componentDidUpdate != "function" || s === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && p === e.memoizedState || (t.flags |= 256), r = !1);
  }
  return jc(e, t, n, r, a, i);
}
function jc(e, t, n, r, i, a) {
  Q0(e, t);
  var o = (t.flags & 64) !== 0;
  if (!r && !o) return i && vh(t, n, !1), mn(e, t, a);
  r = t.stateNode, q1.current = t;
  var s = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && o ? (t.child = $s(t, e.child, null, a), t.child = $s(t, null, s, a)) : dt(e, t, s, a), t.memoizedState = r.state, i && vh(t, n, !0), t.child;
}
function jh(e) {
  var t = e.stateNode;
  t.pendingContext ? hh(e, t.pendingContext, t.pendingContext !== t.context) : t.context && hh(e, t.context, !1), _c(e, t.containerInfo);
}
var Zo = { dehydrated: null, retryLane: 0 };
function Nh(e, t, n) {
  var r = t.pendingProps, i = je.current, a = !1, o;
  return (o = (t.flags & 64) !== 0) || (o = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), o ? (a = !0, t.flags &= -65) : e !== null && e.memoizedState === null || r.fallback === void 0 || r.unstable_avoidThisFallback === !0 || (i |= 1), Ne(je, i & 1), e === null ? (r.fallback !== void 0 && Ac(t), e = r.children, i = r.fallback, a ? (e = Rh(t, e, i, n), t.child.memoizedState = { baseLanes: n }, t.memoizedState = Zo, e) : typeof r.unstable_expectedLoadTime == "number" ? (e = Rh(t, e, i, n), t.child.memoizedState = { baseLanes: n }, t.memoizedState = Zo, t.lanes = 33554432, e) : (n = cd({ mode: "visible", children: e }, t.mode, n, null), n.return = t, t.child = n)) : e.memoizedState !== null ? a ? (r = Fh(e, t, r.children, r.fallback, n), a = t.child, i = e.child.memoizedState, a.memoizedState = i === null ? { baseLanes: n } : { baseLanes: i.baseLanes | n }, a.childLanes = e.childLanes & ~n, t.memoizedState = Zo, r) : (n = Dh(e, t, r.children, n), t.memoizedState = null, n) : a ? (r = Fh(e, t, r.children, r.fallback, n), a = t.child, i = e.child.memoizedState, a.memoizedState = i === null ? { baseLanes: n } : { baseLanes: i.baseLanes | n }, a.childLanes = e.childLanes & ~n, t.memoizedState = Zo, r) : (n = Dh(e, t, r.children, n), t.memoizedState = null, n);
}
function Rh(e, t, n, r) {
  var i = e.mode, a = e.child;
  return t = { mode: "hidden", children: t }, !(i & 2) && a !== null ? (a.childLanes = 0, a.pendingProps = t) : a = cd(t, i, 0, null), n = mi(n, i, r, null), a.return = e, n.return = e, a.sibling = n, e.child = a, n;
}
function Dh(e, t, n, r) {
  var i = e.child;
  return e = i.sibling, n = Zn(i, { mode: "visible", children: n }), !(t.mode & 2) && (n.lanes = r), n.return = t, n.sibling = null, e !== null && (e.nextEffect = null, e.flags = 8, t.firstEffect = t.lastEffect = e), t.child = n;
}
function Fh(e, t, n, r, i) {
  var a = t.mode, o = e.child;
  e = o.sibling;
  var s = { mode: "hidden", children: n };
  return !(a & 2) && t.child !== o ? (n = t.child, n.childLanes = 0, n.pendingProps = s, o = n.lastEffect, o !== null ? (t.firstEffect = n.firstEffect, t.lastEffect = o, o.nextEffect = null) : t.firstEffect = t.lastEffect = null) : n = Zn(o, s), e !== null ? r = Zn(e, r) : (r = mi(r, a, i, null), r.flags |= 2), r.return = t, n.return = t, n.sibling = r, t.child = n, r;
}
function Mh(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  n !== null && (n.lanes |= t), F0(e.return, t);
}
function Ru(e, t, n, r, i, a) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i, lastEffect: a } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i, o.lastEffect = a);
}
function Lh(e, t, n) {
  var r = t.pendingProps, i = r.revealOrder, a = r.tail;
  if (dt(e, t, r.children, n), r = je.current, r & 2) r = r & 1 | 2, t.flags |= 64;
  else {
    if (e !== null && e.flags & 64) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Mh(e, n);
      else if (e.tag === 19) Mh(e, n);
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
  if (Ne(je, r), !(t.mode & 2)) t.memoizedState = null;
  else switch (i) {
    case "forwards":
      for (n = t.child, i = null; n !== null; ) e = n.alternate, e !== null && zs(e) === null && (i = n), n = n.sibling;
      n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), Ru(t, !1, i, n, a, t.lastEffect);
      break;
    case "backwards":
      for (n = null, i = t.child, t.child = null; i !== null; ) {
        if (e = i.alternate, e !== null && zs(e) === null) {
          t.child = i;
          break;
        }
        e = i.sibling, i.sibling = n, n = i, i = e;
      }
      Ru(t, !0, n, null, a, t.lastEffect);
      break;
    case "together":
      Ru(t, !1, null, null, void 0, t.lastEffect);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function mn(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Ao |= t.lanes, n & t.childLanes) {
    if (e !== null && t.child !== e.child) throw Error(U(153));
    if (t.child !== null) {
      for (e = t.child, n = Zn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Zn(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  return null;
}
var Z0, Nc, J0, eb;
Z0 = function(e, t) {
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
Nc = function() {
};
J0 = function(e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    e = t.stateNode, br(en.current);
    var a = null;
    switch (n) {
      case "input":
        i = oc(e, i), r = oc(e, r), a = [];
        break;
      case "option":
        i = uc(e, i), r = uc(e, r), a = [];
        break;
      case "select":
        i = _e({}, i, { value: void 0 }), r = _e({}, r, { value: void 0 }), a = [];
        break;
      case "textarea":
        i = cc(e, i), r = cc(e, r), a = [];
        break;
      default:
        typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ns);
    }
    dc(n, r);
    var o;
    n = null;
    for (u in i) if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null) if (u === "style") {
      var s = i[u];
      for (o in s) s.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
    } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Na.hasOwnProperty(u) ? a || (a = []) : (a = a || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (s = i != null ? i[u] : void 0, r.hasOwnProperty(u) && l !== s && (l != null || s != null)) if (u === "style") if (s) {
        for (o in s) !s.hasOwnProperty(o) || l && l.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
        for (o in l) l.hasOwnProperty(o) && s[o] !== l[o] && (n || (n = {}), n[o] = l[o]);
      } else n || (a || (a = []), a.push(u, n)), n = l;
      else u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, s = s ? s.__html : void 0, l != null && s !== l && (a = a || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (a = a || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Na.hasOwnProperty(u) ? (l != null && u === "onScroll" && Se("scroll", e), a || s === l || (a = [])) : typeof l == "object" && l !== null && l.$$typeof === Tp ? l.toString() : (a = a || []).push(u, l));
    }
    n && (a = a || []).push(
      "style",
      n
    );
    var u = a;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
eb = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function ia(e, t) {
  if (!tn) switch (e.tailMode) {
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
function Y1(e, t, n) {
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
      return ht(t.type) && Ds(), null;
    case 3:
      return xi(), ke(mt), ke(rt), Zp(), r = t.stateNode, r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Qo(t) ? t.flags |= 4 : r.hydrate || (t.flags |= 256)), Nc(t), null;
    case 5:
      Qp(t);
      var i = br(Wa.current);
      if (n = t.type, e !== null && t.stateNode != null) J0(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 128);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(U(166));
          return null;
        }
        if (e = br(en.current), Qo(t)) {
          r = t.stateNode, n = t.type;
          var a = t.memoizedProps;
          switch (r[Dn] = t, r[Rs] = a, n) {
            case "dialog":
              Se("cancel", r), Se("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Se("load", r);
              break;
            case "video":
            case "audio":
              for (e = 0; e < ca.length; e++) Se(ca[e], r);
              break;
            case "source":
              Se("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Se("error", r), Se("load", r);
              break;
            case "details":
              Se("toggle", r);
              break;
            case "input":
              Lm(r, a), Se("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!a.multiple }, Se("invalid", r);
              break;
            case "textarea":
              $m(r, a), Se("invalid", r);
          }
          dc(n, a), e = null;
          for (var o in a) a.hasOwnProperty(o) && (i = a[o], o === "children" ? typeof i == "string" ? r.textContent !== i && (e = ["children", i]) : typeof i == "number" && r.textContent !== "" + i && (e = ["children", "" + i]) : Na.hasOwnProperty(o) && i != null && o === "onScroll" && Se("scroll", r));
          switch (n) {
            case "input":
              Wo(r), Bm(r, a, !0);
              break;
            case "textarea":
              Wo(r), zm(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof a.onClick == "function" && (r.onclick = Ns);
          }
          r = e, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          switch (o = i.nodeType === 9 ? i : i.ownerDocument, e === fc.html && (e = qy(n)), e === fc.html ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[Dn] = t, e[Rs] = r, Z0(e, t, !1, !1), t.stateNode = e, o = mc(n, r), n) {
            case "dialog":
              Se("cancel", e), Se("close", e), i = r;
              break;
            case "iframe":
            case "object":
            case "embed":
              Se("load", e), i = r;
              break;
            case "video":
            case "audio":
              for (i = 0; i < ca.length; i++) Se(ca[i], e);
              i = r;
              break;
            case "source":
              Se("error", e), i = r;
              break;
            case "img":
            case "image":
            case "link":
              Se("error", e), Se("load", e), i = r;
              break;
            case "details":
              Se("toggle", e), i = r;
              break;
            case "input":
              Lm(e, r), i = oc(e, r), Se("invalid", e);
              break;
            case "option":
              i = uc(e, r);
              break;
            case "select":
              e._wrapperState = { wasMultiple: !!r.multiple }, i = _e({}, r, { value: void 0 }), Se("invalid", e);
              break;
            case "textarea":
              $m(e, r), i = cc(e, r), Se("invalid", e);
              break;
            default:
              i = r;
          }
          dc(n, i);
          var s = i;
          for (a in s) if (s.hasOwnProperty(a)) {
            var l = s[a];
            a === "style" ? Qy(e, l) : a === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && Yy(e, l)) : a === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Ra(e, l) : typeof l == "number" && Ra(e, "" + l) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (Na.hasOwnProperty(a) ? l != null && a === "onScroll" && Se("scroll", e) : l != null && Sp(e, a, l, o));
          }
          switch (n) {
            case "input":
              Wo(e), Bm(e, r, !1);
              break;
            case "textarea":
              Wo(e), zm(e);
              break;
            case "option":
              r.value != null && e.setAttribute("value", "" + qn(r.value));
              break;
            case "select":
              e.multiple = !!r.multiple, a = r.value, a != null ? oi(e, !!r.multiple, a, !1) : r.defaultValue != null && oi(e, !!r.multiple, r.defaultValue, !0);
              break;
            default:
              typeof i.onClick == "function" && (e.onclick = Ns);
          }
          P0(n, r) && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 128);
      }
      return null;
    case 6:
      if (e && t.stateNode != null) eb(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(U(166));
        n = br(Wa.current), br(en.current), Qo(t) ? (r = t.stateNode, n = t.memoizedProps, r[Dn] = t, r.nodeValue !== n && (t.flags |= 4)) : (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Dn] = t, t.stateNode = r);
      }
      return null;
    case 13:
      return ke(je), r = t.memoizedState, t.flags & 64 ? (t.lanes = n, t) : (r = r !== null, n = !1, e === null ? t.memoizedProps.fallback !== void 0 && Qo(t) : n = e.memoizedState !== null, r && !n && t.mode & 2 && (e === null && t.memoizedProps.unstable_avoidThisFallback !== !0 || je.current & 1 ? Ke === 0 && (Ke = 3) : ((Ke === 0 || Ke === 3) && (Ke = 4), ct === null || !(Ao & 134217727) && !(Mi & 134217727) || pi(ct, et))), (r || n) && (t.flags |= 4), null);
    case 4:
      return xi(), Nc(t), e === null && S0(t.stateNode.containerInfo), null;
    case 10:
      return Yp(t), null;
    case 17:
      return ht(t.type) && Ds(), null;
    case 19:
      if (ke(je), r = t.memoizedState, r === null) return null;
      if (a = (t.flags & 64) !== 0, o = r.rendering, o === null) if (a) ia(r, !1);
      else {
        if (Ke !== 0 || e !== null && e.flags & 64) for (e = t.child; e !== null; ) {
          if (o = zs(e), o !== null) {
            for (t.flags |= 64, ia(r, !1), a = o.updateQueue, a !== null && (t.updateQueue = a, t.flags |= 4), r.lastEffect === null && (t.firstEffect = null), t.lastEffect = r.lastEffect, r = n, n = t.child; n !== null; ) a = n, e = r, a.flags &= 2, a.nextEffect = null, a.firstEffect = null, a.lastEffect = null, o = a.alternate, o === null ? (a.childLanes = 0, a.lanes = e, a.child = null, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = o.childLanes, a.lanes = o.lanes, a.child = o.child, a.memoizedProps = o.memoizedProps, a.memoizedState = o.memoizedState, a.updateQueue = o.updateQueue, a.type = o.type, e = o.dependencies, a.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return Ne(je, je.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        r.tail !== null && Je() > Bc && (t.flags |= 64, a = !0, ia(r, !1), t.lanes = 33554432);
      }
      else {
        if (!a) if (e = zs(o), e !== null) {
          if (t.flags |= 64, a = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), ia(r, !0), r.tail === null && r.tailMode === "hidden" && !o.alternate && !tn) return t = t.lastEffect = r.lastEffect, t !== null && (t.nextEffect = null), null;
        } else 2 * Je() - r.renderingStartTime > Bc && n !== 1073741824 && (t.flags |= 64, a = !0, ia(r, !1), t.lanes = 33554432);
        r.isBackwards ? (o.sibling = t.child, t.child = o) : (n = r.last, n !== null ? n.sibling = o : t.child = o, r.last = o);
      }
      return r.tail !== null ? (n = r.tail, r.rendering = n, r.tail = n.sibling, r.lastEffect = t.lastEffect, r.renderingStartTime = Je(), n.sibling = null, t = je.current, Ne(je, a ? t & 1 | 2 : t & 1), n) : null;
    case 23:
    case 24:
      return ld(), e !== null && e.memoizedState !== null != (t.memoizedState !== null) && r.mode !== "unstable-defer-without-hiding" && (t.flags |= 4), null;
  }
  throw Error(U(156, t.tag));
}
function X1(e) {
  switch (e.tag) {
    case 1:
      ht(e.type) && Ds();
      var t = e.flags;
      return t & 4096 ? (e.flags = t & -4097 | 64, e) : null;
    case 3:
      if (xi(), ke(mt), ke(rt), Zp(), t = e.flags, t & 64) throw Error(U(285));
      return e.flags = t & -4097 | 64, e;
    case 5:
      return Qp(e), null;
    case 13:
      return ke(je), t = e.flags, t & 4096 ? (e.flags = t & -4097 | 64, e) : null;
    case 19:
      return ke(je), null;
    case 4:
      return xi(), null;
    case 10:
      return Yp(e), null;
    case 23:
    case 24:
      return ld(), null;
    default:
      return null;
  }
}
function id(e, t) {
  try {
    var n = "", r = t;
    do
      n += AE(r), r = r.return;
    while (r);
    var i = n;
  } catch (a) {
    i = `
Error generating stack: ` + a.message + `
` + a.stack;
  }
  return { value: e, source: t, stack: i };
}
function Rc(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Q1 = typeof WeakMap == "function" ? WeakMap : Map;
function tb(e, t, n) {
  n = Hn(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    qs || (qs = !0, $c = r), Rc(e, t);
  }, n;
}
function nb(e, t, n) {
  n = Hn(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    n.payload = function() {
      return Rc(e, t), r(i);
    };
  }
  var a = e.stateNode;
  return a !== null && typeof a.componentDidCatch == "function" && (n.callback = function() {
    typeof r != "function" && (Xt === null ? Xt = /* @__PURE__ */ new Set([this]) : Xt.add(this), Rc(e, t));
    var o = t.stack;
    this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
  }), n;
}
var Z1 = typeof WeakSet == "function" ? WeakSet : Set;
function Bh(e) {
  var t = e.ref;
  if (t !== null) if (typeof t == "function") try {
    t(null);
  } catch (n) {
    Gn(e, n);
  }
  else t.current = null;
}
function J1(e, t) {
  switch (t.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      return;
    case 1:
      if (t.flags & 256 && e !== null) {
        var n = e.memoizedProps, r = e.memoizedState;
        e = t.stateNode, t = e.getSnapshotBeforeUpdate(t.elementType === t.type ? n : zt(t.type, n), r), e.__reactInternalSnapshotBeforeUpdate = t;
      }
      return;
    case 3:
      t.flags & 256 && Wp(t.stateNode.containerInfo);
      return;
    case 5:
    case 6:
    case 4:
    case 17:
      return;
  }
  throw Error(U(163));
}
function eO(e, t, n) {
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
          r = i.next, i = i.tag, i & 4 && i & 1 && (fb(n, e), lO(n, e)), e = r;
        } while (e !== t);
      }
      return;
    case 1:
      e = n.stateNode, n.flags & 4 && (t === null ? e.componentDidMount() : (r = n.elementType === n.type ? t.memoizedProps : zt(n.type, t.memoizedProps), e.componentDidUpdate(
        r,
        t.memoizedState,
        e.__reactInternalSnapshotBeforeUpdate
      ))), t = n.updateQueue, t !== null && xh(n, t, e);
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
        xh(n, t, e);
      }
      return;
    case 5:
      e = n.stateNode, t === null && n.flags & 4 && P0(n.type, n.memoizedProps) && e.focus();
      return;
    case 6:
      return;
    case 4:
      return;
    case 12:
      return;
    case 13:
      n.memoizedState === null && (n = n.alternate, n !== null && (n = n.memoizedState, n !== null && (n = n.dehydrated, n !== null && s0(n))));
      return;
    case 19:
    case 17:
    case 20:
    case 21:
    case 23:
    case 24:
      return;
  }
  throw Error(U(163));
}
function $h(e, t) {
  for (var n = e; ; ) {
    if (n.tag === 5) {
      var r = n.stateNode;
      if (t) r = r.style, typeof r.setProperty == "function" ? r.setProperty("display", "none", "important") : r.display = "none";
      else {
        r = n.stateNode;
        var i = n.memoizedProps.style;
        i = i != null && i.hasOwnProperty("display") ? i.display : null, r.style.display = Xy("display", i);
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
function zh(e, t) {
  if (Or && typeof Or.onCommitFiberUnmount == "function") try {
    Or.onCommitFiberUnmount(Gp, t);
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
          if (r = r.tag, i !== void 0) if (r & 4) fb(t, n);
          else {
            r = t;
            try {
              i();
            } catch (a) {
              Gn(r, a);
            }
          }
          n = n.next;
        } while (n !== e);
      }
      break;
    case 1:
      if (Bh(t), e = t.stateNode, typeof e.componentWillUnmount == "function") try {
        e.props = t.memoizedProps, e.state = t.memoizedState, e.componentWillUnmount();
      } catch (a) {
        Gn(
          t,
          a
        );
      }
      break;
    case 5:
      Bh(t);
      break;
    case 4:
      rb(e, t);
  }
}
function Hh(e) {
  e.alternate = null, e.child = null, e.dependencies = null, e.firstEffect = null, e.lastEffect = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.return = null, e.updateQueue = null;
}
function Vh(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Uh(e) {
  e: {
    for (var t = e.return; t !== null; ) {
      if (Vh(t)) break e;
      t = t.return;
    }
    throw Error(U(160));
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
      throw Error(U(161));
  }
  n.flags & 16 && (Ra(t, ""), n.flags &= -17);
  e: t: for (n = e; ; ) {
    for (; n.sibling === null; ) {
      if (n.return === null || Vh(n.return)) {
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
  r ? Dc(e, n, t) : Fc(e, n, t);
}
function Dc(e, t, n) {
  var r = e.tag, i = r === 5 || r === 6;
  if (i) e = i ? e.stateNode : e.stateNode.instance, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ns));
  else if (r !== 4 && (e = e.child, e !== null)) for (Dc(e, t, n), e = e.sibling; e !== null; ) Dc(e, t, n), e = e.sibling;
}
function Fc(e, t, n) {
  var r = e.tag, i = r === 5 || r === 6;
  if (i) e = i ? e.stateNode : e.stateNode.instance, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Fc(e, t, n), e = e.sibling; e !== null; ) Fc(e, t, n), e = e.sibling;
}
function rb(e, t) {
  for (var n = t, r = !1, i, a; ; ) {
    if (!r) {
      r = n.return;
      e: for (; ; ) {
        if (r === null) throw Error(U(160));
        switch (i = r.stateNode, r.tag) {
          case 5:
            a = !1;
            break e;
          case 3:
            i = i.containerInfo, a = !0;
            break e;
          case 4:
            i = i.containerInfo, a = !0;
            break e;
        }
        r = r.return;
      }
      r = !0;
    }
    if (n.tag === 5 || n.tag === 6) {
      e: for (var o = e, s = n, l = s; ; ) if (zh(o, l), l.child !== null && l.tag !== 4) l.child.return = l, l = l.child;
      else {
        if (l === s) break e;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === s) break e;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
      a ? (o = i, s = n.stateNode, o.nodeType === 8 ? o.parentNode.removeChild(s) : o.removeChild(s)) : i.removeChild(n.stateNode);
    } else if (n.tag === 4) {
      if (n.child !== null) {
        i = n.stateNode.containerInfo, a = !0, n.child.return = n, n = n.child;
        continue;
      }
    } else if (zh(e, n), n.child !== null) {
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
function Du(e, t) {
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
        var a = t.updateQueue;
        if (t.updateQueue = null, a !== null) {
          for (n[Rs] = r, e === "input" && r.type === "radio" && r.name != null && Gy(n, r), mc(e, i), t = mc(e, r), i = 0; i < a.length; i += 2) {
            var o = a[i], s = a[i + 1];
            o === "style" ? Qy(n, s) : o === "dangerouslySetInnerHTML" ? Yy(n, s) : o === "children" ? Ra(n, s) : Sp(n, o, s, t);
          }
          switch (e) {
            case "input":
              sc(n, r);
              break;
            case "textarea":
              Ky(n, r);
              break;
            case "select":
              e = n._wrapperState.wasMultiple, n._wrapperState.wasMultiple = !!r.multiple, a = r.value, a != null ? oi(n, !!r.multiple, a, !1) : e !== !!r.multiple && (r.defaultValue != null ? oi(n, !!r.multiple, r.defaultValue, !0) : oi(n, !!r.multiple, r.multiple ? [] : "", !1));
          }
        }
      }
      return;
    case 6:
      if (t.stateNode === null) throw Error(U(162));
      t.stateNode.nodeValue = t.memoizedProps;
      return;
    case 3:
      n = t.stateNode, n.hydrate && (n.hydrate = !1, s0(n.containerInfo));
      return;
    case 12:
      return;
    case 13:
      t.memoizedState !== null && (sd = Je(), $h(t.child, !0)), Wh(t);
      return;
    case 19:
      Wh(t);
      return;
    case 17:
      return;
    case 23:
    case 24:
      $h(t, t.memoizedState !== null);
      return;
  }
  throw Error(U(163));
}
function Wh(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Z1()), t.forEach(function(r) {
      var i = fO.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(i, i));
    });
  }
}
function tO(e, t) {
  return e !== null && (e = e.memoizedState, e === null || e.dehydrated !== null) ? (t = t.memoizedState, t !== null && t.dehydrated === null) : !1;
}
var nO = Math.ceil, Ks = Dr.ReactCurrentDispatcher, ad = Dr.ReactCurrentOwner, ue = 0, ct = null, Be = null, et = 0, _r = 0, Mc = ar(0), Ke = 0, Dl = null, Fi = 0, Ao = 0, Mi = 0, od = 0, Lc = null, sd = 0, Bc = 1 / 0;
function Li() {
  Bc = Je() + 500;
}
var Q = null, qs = !1, $c = null, Xt = null, Qn = !1, ka = null, fa = 90, zc = [], Hc = [], hn = null, Pa = 0, Vc = null, gs = -1, fn = 0, ys = 0, _a = null, bs = !1;
function bt() {
  return ue & 48 ? Je() : gs !== -1 ? gs : gs = Je();
}
function Un(e) {
  if (e = e.mode, !(e & 2)) return 1;
  if (!(e & 4)) return bi() === 99 ? 1 : 2;
  if (fn === 0 && (fn = Fi), V1.transition !== 0) {
    ys !== 0 && (ys = Lc !== null ? Lc.pendingLanes : 0), e = fn;
    var t = 4186112 & ~ys;
    return t &= -t, t === 0 && (e = 4186112 & ~e, t = e & -e, t === 0 && (t = 8192)), t;
  }
  return e = bi(), ue & 4 && e === 98 ? e = Is(12, fn) : (e = WE(e), e = Is(e, fn)), e;
}
function Wn(e, t, n) {
  if (50 < Pa) throw Pa = 0, Vc = null, Error(U(185));
  if (e = Fl(e, t), e === null) return null;
  _l(e, t, n), e === ct && (Mi |= t, Ke === 4 && pi(e, et));
  var r = bi();
  t === 1 ? ue & 8 && !(ue & 48) ? Uc(e) : (Tt(e, n), ue === 0 && (Li(), on())) : (!(ue & 4) || r !== 98 && r !== 99 || (hn === null ? hn = /* @__PURE__ */ new Set([e]) : hn.add(e)), Tt(e, n)), Lc = e;
}
function Fl(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
function Tt(e, t) {
  for (var n = e.callbackNode, r = e.suspendedLanes, i = e.pingedLanes, a = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var s = 31 - Yn(o), l = 1 << s, u = a[s];
    if (u === -1) {
      if (!(l & r) || l & i) {
        u = t, Wr(l);
        var c = Ee;
        a[s] = 10 <= c ? u + 250 : 6 <= c ? u + 5e3 : -1;
      }
    } else u <= t && (e.expiredLanes |= l);
    o &= ~l;
  }
  if (r = La(e, e === ct ? et : 0), t = Ee, r === 0) n !== null && (n !== Tu && Cc(n), e.callbackNode = null, e.callbackPriority = 0);
  else {
    if (n !== null) {
      if (e.callbackPriority === t) return;
      n !== Tu && Cc(n);
    }
    t === 15 ? (n = Uc.bind(null, e), cn === null ? (cn = [n], vs = Kp(Nl, D0)) : cn.push(n), n = Tu) : t === 14 ? n = Ha(99, Uc.bind(null, e)) : (n = GE(t), n = Ha(n, ib.bind(null, e))), e.callbackPriority = t, e.callbackNode = n;
  }
}
function ib(e) {
  if (gs = -1, ys = fn = 0, ue & 48) throw Error(U(327));
  var t = e.callbackNode;
  if (or() && e.callbackNode !== t) return null;
  var n = La(e, e === ct ? et : 0);
  if (n === 0) return null;
  var r = n, i = ue;
  ue |= 16;
  var a = lb();
  (ct !== e || et !== r) && (Li(), di(e, r));
  do
    try {
      aO();
      break;
    } catch (s) {
      sb(e, s);
    }
  while (!0);
  if (qp(), Ks.current = a, ue = i, Be !== null ? r = 0 : (ct = null, et = 0, r = Ke), Fi & Mi) di(e, 0);
  else if (r !== 0) {
    if (r === 2 && (ue |= 64, e.hydrate && (e.hydrate = !1, Wp(e.containerInfo)), n = m0(e), n !== 0 && (r = pa(e, n))), r === 1) throw t = Dl, di(e, 0), pi(e, n), Tt(e, Je()), t;
    switch (e.finishedWork = e.current.alternate, e.finishedLanes = n, r) {
      case 0:
      case 1:
        throw Error(U(345));
      case 2:
        pr(e);
        break;
      case 3:
        if (pi(e, n), (n & 62914560) === n && (r = sd + 500 - Je(), 10 < r)) {
          if (La(e, 0) !== 0) break;
          if (i = e.suspendedLanes, (i & n) !== n) {
            bt(), e.pingedLanes |= e.suspendedLanes & i;
            break;
          }
          e.timeoutHandle = ph(pr.bind(null, e), r);
          break;
        }
        pr(e);
        break;
      case 4:
        if (pi(e, n), (n & 4186112) === n) break;
        for (r = e.eventTimes, i = -1; 0 < n; ) {
          var o = 31 - Yn(n);
          a = 1 << o, o = r[o], o > i && (i = o), n &= ~a;
        }
        if (n = i, n = Je() - n, n = (120 > n ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * nO(n / 1960)) - n, 10 < n) {
          e.timeoutHandle = ph(pr.bind(null, e), n);
          break;
        }
        pr(e);
        break;
      case 5:
        pr(e);
        break;
      default:
        throw Error(U(329));
    }
  }
  return Tt(e, Je()), e.callbackNode === t ? ib.bind(null, e) : null;
}
function pi(e, t) {
  for (t &= ~od, t &= ~Mi, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Yn(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Uc(e) {
  if (ue & 48) throw Error(U(327));
  if (or(), e === ct && e.expiredLanes & et) {
    var t = et, n = pa(e, t);
    Fi & Mi && (t = La(e, t), n = pa(e, t));
  } else t = La(e, 0), n = pa(e, t);
  if (e.tag !== 0 && n === 2 && (ue |= 64, e.hydrate && (e.hydrate = !1, Wp(e.containerInfo)), t = m0(e), t !== 0 && (n = pa(e, t))), n === 1) throw n = Dl, di(e, 0), pi(e, t), Tt(e, Je()), n;
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, pr(e), Tt(e, Je()), null;
}
function rO() {
  if (hn !== null) {
    var e = hn;
    hn = null, e.forEach(function(t) {
      t.expiredLanes |= 24 & t.pendingLanes, Tt(t, Je());
    });
  }
  on();
}
function ab(e, t) {
  var n = ue;
  ue |= 1;
  try {
    return e(t);
  } finally {
    ue = n, ue === 0 && (Li(), on());
  }
}
function ob(e, t) {
  var n = ue;
  ue &= -2, ue |= 8;
  try {
    return e(t);
  } finally {
    ue = n, ue === 0 && (Li(), on());
  }
}
function Jo(e, t) {
  Ne(Mc, _r), _r |= t, Fi |= t;
}
function ld() {
  _r = Mc.current, ke(Mc);
}
function di(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, M1(n)), Be !== null) for (n = Be.return; n !== null; ) {
    var r = n;
    switch (r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Ds();
        break;
      case 3:
        xi(), ke(mt), ke(rt), Zp();
        break;
      case 5:
        Qp(r);
        break;
      case 4:
        xi();
        break;
      case 13:
        ke(je);
        break;
      case 19:
        ke(je);
        break;
      case 10:
        Yp(r);
        break;
      case 23:
      case 24:
        ld();
    }
    n = n.return;
  }
  ct = e, Be = Zn(e.current, null), et = _r = Fi = t, Ke = 0, Dl = null, od = Mi = Ao = 0;
}
function sb(e, t) {
  do {
    var n = Be;
    try {
      if (qp(), Sa.current = Gs, Hs) {
        for (var r = Fe.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), r = r.next;
        }
        Hs = !1;
      }
      if (Ga = 0, Ge = Ze = Fe = null, Ca = !1, ad.current = null, n === null || n.return === null) {
        Ke = 1, Dl = t, Be = null;
        break;
      }
      e: {
        var a = e, o = n.return, s = n, l = t;
        if (t = et, s.flags |= 2048, s.firstEffect = s.lastEffect = null, l !== null && typeof l == "object" && typeof l.then == "function") {
          var u = l;
          if (!(s.mode & 2)) {
            var c = s.alternate;
            c ? (s.updateQueue = c.updateQueue, s.memoizedState = c.memoizedState, s.lanes = c.lanes) : (s.updateQueue = null, s.memoizedState = null);
          }
          var d = (je.current & 1) !== 0, p = o;
          do {
            var g;
            if (g = p.tag === 13) {
              var x = p.memoizedState;
              if (x !== null) g = x.dehydrated !== null;
              else {
                var w = p.memoizedProps;
                g = w.fallback === void 0 ? !1 : w.unstable_avoidThisFallback !== !0 ? !0 : !d;
              }
            }
            if (g) {
              var h = p.updateQueue;
              if (h === null) {
                var m = /* @__PURE__ */ new Set();
                m.add(u), p.updateQueue = m;
              } else h.add(u);
              if (!(p.mode & 2)) {
                if (p.flags |= 64, s.flags |= 16384, s.flags &= -2981, s.tag === 1) if (s.alternate === null) s.tag = 17;
                else {
                  var v = Hn(-1, 1);
                  v.tag = 2, Vn(s, v);
                }
                s.lanes |= 1;
                break e;
              }
              l = void 0, s = t;
              var b = a.pingCache;
              if (b === null ? (b = a.pingCache = new Q1(), l = /* @__PURE__ */ new Set(), b.set(u, l)) : (l = b.get(u), l === void 0 && (l = /* @__PURE__ */ new Set(), b.set(u, l))), !l.has(s)) {
                l.add(s);
                var E = cO.bind(null, a, u, s);
                u.then(E, E);
              }
              p.flags |= 4096, p.lanes = t;
              break e;
            }
            p = p.return;
          } while (p !== null);
          l = Error((ai(s.type) || "A React component") + ` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`);
        }
        Ke !== 5 && (Ke = 2), l = id(l, s), p = o;
        do {
          switch (p.tag) {
            case 3:
              a = l, p.flags |= 4096, t &= -t, p.lanes |= t;
              var C = tb(p, a, t);
              bh(p, C);
              break e;
            case 1:
              a = l;
              var k = p.type, P = p.stateNode;
              if (!(p.flags & 64) && (typeof k.getDerivedStateFromError == "function" || P !== null && typeof P.componentDidCatch == "function" && (Xt === null || !Xt.has(P)))) {
                p.flags |= 4096, t &= -t, p.lanes |= t;
                var N = nb(p, a, t);
                bh(p, N);
                break e;
              }
          }
          p = p.return;
        } while (p !== null);
      }
      cb(n);
    } catch (T) {
      t = T, Be === n && n !== null && (Be = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function lb() {
  var e = Ks.current;
  return Ks.current = Gs, e === null ? Gs : e;
}
function pa(e, t) {
  var n = ue;
  ue |= 16;
  var r = lb();
  ct === e && et === t || di(e, t);
  do
    try {
      iO();
      break;
    } catch (i) {
      sb(e, i);
    }
  while (!0);
  if (qp(), ue = n, Ks.current = r, Be !== null) throw Error(U(261));
  return ct = null, et = 0, Ke;
}
function iO() {
  for (; Be !== null; ) ub(Be);
}
function aO() {
  for (; Be !== null && !$1(); ) ub(Be);
}
function ub(e) {
  var t = pb(e.alternate, e, _r);
  e.memoizedProps = e.pendingProps, t === null ? cb(e) : Be = t, ad.current = null;
}
function cb(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 2048) {
      if (n = X1(t), n !== null) {
        n.flags &= 2047, Be = n;
        return;
      }
      e !== null && (e.firstEffect = e.lastEffect = null, e.flags |= 2048);
    } else {
      if (n = Y1(n, t, _r), n !== null) {
        Be = n;
        return;
      }
      if (n = t, n.tag !== 24 && n.tag !== 23 || n.memoizedState === null || _r & 1073741824 || !(n.mode & 4)) {
        for (var r = 0, i = n.child; i !== null; ) r |= i.lanes | i.childLanes, i = i.sibling;
        n.childLanes = r;
      }
      e !== null && !(e.flags & 2048) && (e.firstEffect === null && (e.firstEffect = t.firstEffect), t.lastEffect !== null && (e.lastEffect !== null && (e.lastEffect.nextEffect = t.firstEffect), e.lastEffect = t.lastEffect), 1 < t.flags && (e.lastEffect !== null ? e.lastEffect.nextEffect = t : e.firstEffect = t, e.lastEffect = t));
    }
    if (t = t.sibling, t !== null) {
      Be = t;
      return;
    }
    Be = t = e;
  } while (t !== null);
  Ke === 0 && (Ke = 5);
}
function pr(e) {
  var t = bi();
  return Pr(99, oO.bind(null, e, t)), null;
}
function oO(e, t) {
  do
    or();
  while (ka !== null);
  if (ue & 48) throw Error(U(327));
  var n = e.finishedWork;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(U(177));
  e.callbackNode = null;
  var r = n.lanes | n.childLanes, i = r, a = e.pendingLanes & ~i;
  e.pendingLanes = i, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= i, e.mutableReadLanes &= i, e.entangledLanes &= i, i = e.entanglements;
  for (var o = e.eventTimes, s = e.expirationTimes; 0 < a; ) {
    var l = 31 - Yn(a), u = 1 << l;
    i[l] = 0, o[l] = -1, s[l] = -1, a &= ~u;
  }
  if (hn !== null && !(r & 24) && hn.has(e) && hn.delete(e), e === ct && (Be = ct = null, et = 0), 1 < n.flags ? n.lastEffect !== null ? (n.lastEffect.nextEffect = n, r = n.firstEffect) : r = n : r = n.firstEffect, r !== null) {
    if (i = ue, ue |= 32, ad.current = null, Pu = ps, o = ah(), xc(o)) {
      if ("selectionStart" in o) s = { start: o.selectionStart, end: o.selectionEnd };
      else e: if (s = (s = o.ownerDocument) && s.defaultView || window, (u = s.getSelection && s.getSelection()) && u.rangeCount !== 0) {
        s = u.anchorNode, a = u.anchorOffset, l = u.focusNode, u = u.focusOffset;
        try {
          s.nodeType, l.nodeType;
        } catch {
          s = null;
          break e;
        }
        var c = 0, d = -1, p = -1, g = 0, x = 0, w = o, h = null;
        t: for (; ; ) {
          for (var m; w !== s || a !== 0 && w.nodeType !== 3 || (d = c + a), w !== l || u !== 0 && w.nodeType !== 3 || (p = c + u), w.nodeType === 3 && (c += w.nodeValue.length), (m = w.firstChild) !== null; )
            h = w, w = m;
          for (; ; ) {
            if (w === o) break t;
            if (h === s && ++g === a && (d = c), h === l && ++x === u && (p = c), (m = w.nextSibling) !== null) break;
            w = h, h = w.parentNode;
          }
          w = m;
        }
        s = d === -1 || p === -1 ? null : { start: d, end: p };
      } else s = null;
      s = s || { start: 0, end: 0 };
    } else s = null;
    _u = { focusedElem: o, selectionRange: s }, ps = !1, _a = null, bs = !1, Q = r;
    do
      try {
        sO();
      } catch (T) {
        if (Q === null) throw Error(U(330));
        Gn(Q, T), Q = Q.nextEffect;
      }
    while (Q !== null);
    _a = null, Q = r;
    do
      try {
        for (o = e; Q !== null; ) {
          var v = Q.flags;
          if (v & 16 && Ra(Q.stateNode, ""), v & 128) {
            var b = Q.alternate;
            if (b !== null) {
              var E = b.ref;
              E !== null && (typeof E == "function" ? E(null) : E.current = null);
            }
          }
          switch (v & 1038) {
            case 2:
              Uh(Q), Q.flags &= -3;
              break;
            case 6:
              Uh(Q), Q.flags &= -3, Du(Q.alternate, Q);
              break;
            case 1024:
              Q.flags &= -1025;
              break;
            case 1028:
              Q.flags &= -1025, Du(Q.alternate, Q);
              break;
            case 4:
              Du(Q.alternate, Q);
              break;
            case 8:
              s = Q, rb(o, s);
              var C = s.alternate;
              Hh(s), C !== null && Hh(C);
          }
          Q = Q.nextEffect;
        }
      } catch (T) {
        if (Q === null) throw Error(U(330));
        Gn(Q, T), Q = Q.nextEffect;
      }
    while (Q !== null);
    if (E = _u, b = ah(), v = E.focusedElem, o = E.selectionRange, b !== v && v && v.ownerDocument && E0(v.ownerDocument.documentElement, v)) {
      for (o !== null && xc(v) && (b = o.start, E = o.end, E === void 0 && (E = b), "selectionStart" in v ? (v.selectionStart = b, v.selectionEnd = Math.min(E, v.value.length)) : (E = (b = v.ownerDocument || document) && b.defaultView || window, E.getSelection && (E = E.getSelection(), s = v.textContent.length, C = Math.min(o.start, s), o = o.end === void 0 ? C : Math.min(o.end, s), !E.extend && C > o && (s = o, o = C, C = s), s = ih(v, C), a = ih(v, o), s && a && (E.rangeCount !== 1 || E.anchorNode !== s.node || E.anchorOffset !== s.offset || E.focusNode !== a.node || E.focusOffset !== a.offset) && (b = b.createRange(), b.setStart(s.node, s.offset), E.removeAllRanges(), C > o ? (E.addRange(b), E.extend(a.node, a.offset)) : (b.setEnd(a.node, a.offset), E.addRange(b)))))), b = [], E = v; E = E.parentNode; ) E.nodeType === 1 && b.push({ element: E, left: E.scrollLeft, top: E.scrollTop });
      for (typeof v.focus == "function" && v.focus(), v = 0; v < b.length; v++) E = b[v], E.element.scrollLeft = E.left, E.element.scrollTop = E.top;
    }
    ps = !!Pu, _u = Pu = null, e.current = n, Q = r;
    do
      try {
        for (v = e; Q !== null; ) {
          var k = Q.flags;
          if (k & 36 && eO(v, Q.alternate, Q), k & 128) {
            b = void 0;
            var P = Q.ref;
            if (P !== null) {
              var N = Q.stateNode;
              switch (Q.tag) {
                case 5:
                  b = N;
                  break;
                default:
                  b = N;
              }
              typeof P == "function" ? P(b) : P.current = b;
            }
          }
          Q = Q.nextEffect;
        }
      } catch (T) {
        if (Q === null) throw Error(U(330));
        Gn(Q, T), Q = Q.nextEffect;
      }
    while (Q !== null);
    Q = null, H1(), ue = i;
  } else e.current = n;
  if (Qn) Qn = !1, ka = e, fa = t;
  else for (Q = r; Q !== null; ) t = Q.nextEffect, Q.nextEffect = null, Q.flags & 8 && (k = Q, k.sibling = null, k.stateNode = null), Q = t;
  if (r = e.pendingLanes, r === 0 && (Xt = null), r === 1 ? e === Vc ? Pa++ : (Pa = 0, Vc = e) : Pa = 0, n = n.stateNode, Or && typeof Or.onCommitFiberRoot == "function") try {
    Or.onCommitFiberRoot(Gp, n, void 0, (n.current.flags & 64) === 64);
  } catch {
  }
  if (Tt(e, Je()), qs) throw qs = !1, e = $c, $c = null, e;
  return ue & 8 || on(), null;
}
function sO() {
  for (; Q !== null; ) {
    var e = Q.alternate;
    bs || _a === null || (Q.flags & 8 ? Um(Q, _a) && (bs = !0) : Q.tag === 13 && tO(e, Q) && Um(Q, _a) && (bs = !0));
    var t = Q.flags;
    t & 256 && J1(e, Q), !(t & 512) || Qn || (Qn = !0, Ha(97, function() {
      return or(), null;
    })), Q = Q.nextEffect;
  }
}
function or() {
  if (fa !== 90) {
    var e = 97 < fa ? 97 : fa;
    return fa = 90, Pr(e, uO);
  }
  return !1;
}
function lO(e, t) {
  zc.push(t, e), Qn || (Qn = !0, Ha(97, function() {
    return or(), null;
  }));
}
function fb(e, t) {
  Hc.push(t, e), Qn || (Qn = !0, Ha(97, function() {
    return or(), null;
  }));
}
function uO() {
  if (ka === null) return !1;
  var e = ka;
  if (ka = null, ue & 48) throw Error(U(331));
  var t = ue;
  ue |= 32;
  var n = Hc;
  Hc = [];
  for (var r = 0; r < n.length; r += 2) {
    var i = n[r], a = n[r + 1], o = i.destroy;
    if (i.destroy = void 0, typeof o == "function") try {
      o();
    } catch (l) {
      if (a === null) throw Error(U(330));
      Gn(a, l);
    }
  }
  for (n = zc, zc = [], r = 0; r < n.length; r += 2) {
    i = n[r], a = n[r + 1];
    try {
      var s = i.create;
      i.destroy = s();
    } catch (l) {
      if (a === null) throw Error(U(330));
      Gn(a, l);
    }
  }
  for (s = e.current.firstEffect; s !== null; ) e = s.nextEffect, s.nextEffect = null, s.flags & 8 && (s.sibling = null, s.stateNode = null), s = e;
  return ue = t, on(), !0;
}
function Gh(e, t, n) {
  t = id(n, t), t = tb(e, t, 1), Vn(e, t), t = bt(), e = Fl(e, 1), e !== null && (_l(e, 1, t), Tt(e, t));
}
function Gn(e, t) {
  if (e.tag === 3) Gh(e, e, t);
  else for (var n = e.return; n !== null; ) {
    if (n.tag === 3) {
      Gh(n, e, t);
      break;
    } else if (n.tag === 1) {
      var r = n.stateNode;
      if (typeof n.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Xt === null || !Xt.has(r))) {
        e = id(t, e);
        var i = nb(n, e, 1);
        if (Vn(n, i), i = bt(), n = Fl(n, 1), n !== null) _l(n, 1, i), Tt(n, i);
        else if (typeof r.componentDidCatch == "function" && (Xt === null || !Xt.has(r))) try {
          r.componentDidCatch(t, e);
        } catch {
        }
        break;
      }
    }
    n = n.return;
  }
}
function cO(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = bt(), e.pingedLanes |= e.suspendedLanes & n, ct === e && (et & n) === n && (Ke === 4 || Ke === 3 && (et & 62914560) === et && 500 > Je() - sd ? di(e, 0) : od |= n), Tt(e, t);
}
function fO(e, t) {
  var n = e.stateNode;
  n !== null && n.delete(t), t = 0, t === 0 && (t = e.mode, t & 2 ? t & 4 ? (fn === 0 && (fn = Fi), t = Gr(62914560 & ~fn), t === 0 && (t = 4194304)) : t = bi() === 99 ? 1 : 2 : t = 1), n = bt(), e = Fl(e, t), e !== null && (_l(e, t, n), Tt(e, n));
}
var pb;
pb = function(e, t, n) {
  var r = t.lanes;
  if (e !== null) if (e.memoizedProps !== t.pendingProps || mt.current) Vt = !0;
  else if (n & r) Vt = !!(e.flags & 16384);
  else {
    switch (Vt = !1, t.tag) {
      case 3:
        jh(t), ju();
        break;
      case 5:
        Oh(t);
        break;
      case 1:
        ht(t.type) && hs(t);
        break;
      case 4:
        _c(t, t.stateNode.containerInfo);
        break;
      case 10:
        r = t.memoizedProps.value;
        var i = t.type._context;
        Ne(Fs, i._currentValue), i._currentValue = r;
        break;
      case 13:
        if (t.memoizedState !== null)
          return n & t.child.childLanes ? Nh(e, t, n) : (Ne(je, je.current & 1), t = mn(e, t, n), t !== null ? t.sibling : null);
        Ne(je, je.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, e.flags & 64) {
          if (r) return Lh(e, t, n);
          t.flags |= 64;
        }
        if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), Ne(je, je.current), r) break;
        return null;
      case 23:
      case 24:
        return t.lanes = 0, Nu(e, t, n);
    }
    return mn(e, t, n);
  }
  else Vt = !1;
  switch (t.lanes = 0, t.tag) {
    case 2:
      if (r = t.type, e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2), e = t.pendingProps, i = yi(t, rt.current), ci(t, n), i = ed(null, t, r, e, i, n), t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0) {
        if (t.tag = 1, t.memoizedState = null, t.updateQueue = null, ht(r)) {
          var a = !0;
          hs(t);
        } else a = !1;
        t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, Xp(t);
        var o = r.getDerivedStateFromProps;
        typeof o == "function" && Bs(t, r, o, e), i.updater = Rl, t.stateNode = i, i._reactInternals = t, Pc(t, r, e, n), t = jc(null, t, r, !0, a, n);
      } else t.tag = 0, dt(null, t, i, n), t = t.child;
      return t;
    case 16:
      i = t.elementType;
      e: {
        switch (e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2), e = t.pendingProps, a = i._init, i = a(i._payload), t.type = i, a = t.tag = dO(i), e = zt(i, e), a) {
          case 0:
            t = Ic(null, t, i, e, n);
            break e;
          case 1:
            t = Ih(null, t, i, e, n);
            break e;
          case 11:
            t = Ah(null, t, i, e, n);
            break e;
          case 14:
            t = Th(null, t, i, zt(i.type, e), r, n);
            break e;
        }
        throw Error(U(306, i, ""));
      }
      return t;
    case 0:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : zt(r, i), Ic(e, t, r, i, n);
    case 1:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : zt(r, i), Ih(e, t, r, i, n);
    case 3:
      if (jh(t), r = t.updateQueue, e === null || r === null) throw Error(U(282));
      if (r = t.pendingProps, i = t.memoizedState, i = i !== null ? i.element : null, M0(e, t), Va(t, r, null, n), r = t.memoizedState.element, r === i) ju(), t = mn(e, t, n);
      else {
        if (i = t.stateNode, (a = i.hydrate) && (Fn = ui(t.stateNode.containerInfo.firstChild), dn = t, a = tn = !0), a) {
          if (e = i.mutableSourceEagerHydrationData, e != null) for (i = 0; i < e.length; i += 2) a = e[i], a._workInProgressVersionPrimary = e[i + 1], fi.push(a);
          for (n = z0(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 1024, n = n.sibling;
        } else dt(e, t, r, n), ju();
        t = t.child;
      }
      return t;
    case 5:
      return Oh(t), e === null && Ac(t), r = t.type, i = t.pendingProps, a = e !== null ? e.memoizedProps : null, o = i.children, Oc(r, i) ? o = null : a !== null && Oc(r, a) && (t.flags |= 16), Q0(e, t), dt(e, t, o, n), t.child;
    case 6:
      return e === null && Ac(t), null;
    case 13:
      return Nh(e, t, n);
    case 4:
      return _c(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = $s(t, null, r, n) : dt(e, t, r, n), t.child;
    case 11:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : zt(r, i), Ah(e, t, r, i, n);
    case 7:
      return dt(e, t, t.pendingProps, n), t.child;
    case 8:
      return dt(
        e,
        t,
        t.pendingProps.children,
        n
      ), t.child;
    case 12:
      return dt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        r = t.type._context, i = t.pendingProps, o = t.memoizedProps, a = i.value;
        var s = t.type._context;
        if (Ne(Fs, s._currentValue), s._currentValue = a, o !== null) if (s = o.value, a = kt(s, a) ? 0 : (typeof r._calculateChangedBits == "function" ? r._calculateChangedBits(s, a) : 1073741823) | 0, a === 0) {
          if (o.children === i.children && !mt.current) {
            t = mn(e, t, n);
            break e;
          }
        } else for (s = t.child, s !== null && (s.return = t); s !== null; ) {
          var l = s.dependencies;
          if (l !== null) {
            o = s.child;
            for (var u = l.firstContext; u !== null; ) {
              if (u.context === r && u.observedBits & a) {
                s.tag === 1 && (u = Hn(-1, n & -n), u.tag = 2, Vn(s, u)), s.lanes |= n, u = s.alternate, u !== null && (u.lanes |= n), F0(s.return, n), l.lanes |= n;
                break;
              }
              u = u.next;
            }
          } else o = s.tag === 10 && s.type === t.type ? null : s.child;
          if (o !== null) o.return = s;
          else for (o = s; o !== null; ) {
            if (o === t) {
              o = null;
              break;
            }
            if (s = o.sibling, s !== null) {
              s.return = o.return, o = s;
              break;
            }
            o = o.return;
          }
          s = o;
        }
        dt(e, t, i.children, n), t = t.child;
      }
      return t;
    case 9:
      return i = t.type, a = t.pendingProps, r = a.children, ci(t, n), i = At(
        i,
        a.unstable_observedBits
      ), r = r(i), t.flags |= 1, dt(e, t, r, n), t.child;
    case 14:
      return i = t.type, a = zt(i, t.pendingProps), a = zt(i.type, a), Th(e, t, i, a, r, n);
    case 15:
      return X0(e, t, t.type, t.pendingProps, r, n);
    case 17:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : zt(r, i), e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2), t.tag = 1, ht(r) ? (e = !0, hs(t)) : e = !1, ci(t, n), B0(t, r, i), Pc(t, r, i, n), jc(null, t, r, !0, e, n);
    case 19:
      return Lh(e, t, n);
    case 23:
      return Nu(e, t, n);
    case 24:
      return Nu(e, t, n);
  }
  throw Error(U(156, t.tag));
};
function pO(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.flags = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Pt(e, t, n, r) {
  return new pO(e, t, n, r);
}
function ud(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function dO(e) {
  if (typeof e == "function") return ud(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Cl) return 11;
    if (e === kl) return 14;
  }
  return 2;
}
function Zn(e, t) {
  var n = e.alternate;
  return n === null ? (n = Pt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.nextEffect = null, n.firstEffect = null, n.lastEffect = null), n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function xs(e, t, n, r, i, a) {
  var o = 2;
  if (r = e, typeof e == "function") ud(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else e: switch (e) {
    case Nn:
      return mi(n.children, i, a, t);
    case Vy:
      o = 8, i |= 16;
      break;
    case Cp:
      o = 8, i |= 1;
      break;
    case ga:
      return e = Pt(12, n, t, i | 8), e.elementType = ga, e.type = ga, e.lanes = a, e;
    case ya:
      return e = Pt(13, n, t, i), e.type = ya, e.elementType = ya, e.lanes = a, e;
    case Ps:
      return e = Pt(19, n, t, i), e.elementType = Ps, e.lanes = a, e;
    case Ip:
      return cd(n, i, a, t);
    case ac:
      return e = Pt(24, n, t, i), e.elementType = ac, e.lanes = a, e;
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case kp:
          o = 10;
          break e;
        case Pp:
          o = 9;
          break e;
        case Cl:
          o = 11;
          break e;
        case kl:
          o = 14;
          break e;
        case _p:
          o = 16, r = null;
          break e;
        case Ap:
          o = 22;
          break e;
      }
      throw Error(U(130, e == null ? e : typeof e, ""));
  }
  return t = Pt(o, n, t, i), t.elementType = e, t.type = r, t.lanes = a, t;
}
function mi(e, t, n, r) {
  return e = Pt(7, e, r, t), e.lanes = n, e;
}
function cd(e, t, n, r) {
  return e = Pt(23, e, r, t), e.elementType = Ip, e.lanes = n, e;
}
function Fu(e, t, n) {
  return e = Pt(6, e, null, t), e.lanes = n, e;
}
function Mu(e, t, n) {
  return t = Pt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function mO(e, t, n) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.pendingContext = this.context = null, this.hydrate = n, this.callbackNode = null, this.callbackPriority = 0, this.eventTimes = xu(0), this.expirationTimes = xu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = xu(0), this.mutableSourceEagerHydrationData = null;
}
function hO(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: vr, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Ys(e, t, n, r) {
  var i = t.current, a = bt(), o = Un(i);
  e: if (n) {
    n = n._reactInternals;
    t: {
      if (Fr(n) !== n || n.tag !== 1) throw Error(U(170));
      var s = n;
      do {
        switch (s.tag) {
          case 3:
            s = s.stateNode.context;
            break t;
          case 1:
            if (ht(s.type)) {
              s = s.stateNode.__reactInternalMemoizedMergedChildContext;
              break t;
            }
        }
        s = s.return;
      } while (s !== null);
      throw Error(U(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (ht(l)) {
        n = A0(n, l, s);
        break e;
      }
    }
    n = s;
  } else n = Xn;
  return t.context === null ? t.context = n : t.pendingContext = n, t = Hn(a, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), Vn(i, t), Wn(i, o, a), o;
}
function Lu(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Kh(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function fd(e, t) {
  Kh(e, t), (e = e.alternate) && Kh(e, t);
}
function vO() {
  return null;
}
function pd(e, t, n) {
  var r = n != null && n.hydrationOptions != null && n.hydrationOptions.mutableSources || null;
  if (n = new mO(e, t, n != null && n.hydrate === !0), t = Pt(3, null, null, t === 2 ? 7 : t === 1 ? 3 : 0), n.current = t, t.stateNode = n, Xp(t), e[Di] = n.current, S0(e.nodeType === 8 ? e.parentNode : e), r) for (e = 0; e < r.length; e++) {
    t = r[e];
    var i = t._getVersion;
    i = i(t._source), n.mutableSourceEagerHydrationData == null ? n.mutableSourceEagerHydrationData = [t, i] : n.mutableSourceEagerHydrationData.push(t, i);
  }
  this._internalRoot = n;
}
pd.prototype.render = function(e) {
  Ys(e, this._internalRoot, null, null);
};
pd.prototype.unmount = function() {
  var e = this._internalRoot, t = e.containerInfo;
  Ys(null, e, null, function() {
    t[Di] = null;
  });
};
function To(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function gO(e, t) {
  if (t || (t = e ? e.nodeType === 9 ? e.documentElement : e.firstChild : null, t = !(!t || t.nodeType !== 1 || !t.hasAttribute("data-reactroot"))), !t) for (var n; n = e.lastChild; ) e.removeChild(n);
  return new pd(e, 0, t ? { hydrate: !0 } : void 0);
}
function Ml(e, t, n, r, i) {
  var a = n._reactRootContainer;
  if (a) {
    var o = a._internalRoot;
    if (typeof i == "function") {
      var s = i;
      i = function() {
        var u = Lu(o);
        s.call(u);
      };
    }
    Ys(t, o, e, i);
  } else {
    if (a = n._reactRootContainer = gO(n, r), o = a._internalRoot, typeof i == "function") {
      var l = i;
      i = function() {
        var u = Lu(o);
        l.call(u);
      };
    }
    ob(function() {
      Ys(t, o, e, i);
    });
  }
  return Lu(o);
}
i0 = function(e) {
  if (e.tag === 13) {
    var t = bt();
    Wn(e, 4, t), fd(e, 4);
  }
};
Fp = function(e) {
  if (e.tag === 13) {
    var t = bt();
    Wn(e, 67108864, t), fd(e, 67108864);
  }
};
a0 = function(e) {
  if (e.tag === 13) {
    var t = bt(), n = Un(e);
    Wn(e, n, t), fd(e, n);
  }
};
o0 = function(e, t) {
  return t();
};
hc = function(e, t, n) {
  switch (t) {
    case "input":
      if (sc(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = jl(r);
            if (!i) throw Error(U(90));
            Wy(r), sc(r, i);
          }
        }
      }
      break;
    case "textarea":
      Ky(e, n);
      break;
    case "select":
      t = n.value, t != null && oi(e, !!n.multiple, t, !1);
  }
};
Np = ab;
e0 = function(e, t, n, r, i) {
  var a = ue;
  ue |= 4;
  try {
    return Pr(98, e.bind(null, t, n, r, i));
  } finally {
    ue = a, ue === 0 && (Li(), on());
  }
};
Rp = function() {
  !(ue & 49) && (rO(), or());
};
t0 = function(e, t) {
  var n = ue;
  ue |= 2;
  try {
    return e(t);
  } finally {
    ue = n, ue === 0 && (Li(), on());
  }
};
function db(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!To(t)) throw Error(U(200));
  return hO(e, t, null, n);
}
var yO = { Events: [Po, Xr, jl, Zy, Jy, or, { current: !1 }] }, aa = { findFiberByHostInstance: yr, bundleType: 0, version: "17.0.2", rendererPackageName: "react-dom" }, bO = { bundleType: aa.bundleType, version: aa.version, rendererPackageName: aa.rendererPackageName, rendererConfig: aa.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Dr.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = r0(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: aa.findFiberByHostInstance || vO, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var es = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!es.isDisabled && es.supportsFiber) try {
    Gp = es.inject(bO), Or = es;
  } catch {
  }
}
Nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yO;
Nt.createPortal = db;
Nt.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(U(188)) : Error(U(268, Object.keys(e)));
  return e = r0(t), e = e === null ? null : e.stateNode, e;
};
Nt.flushSync = function(e, t) {
  var n = ue;
  if (n & 48) return e(t);
  ue |= 1;
  try {
    if (e) return Pr(99, e.bind(null, t));
  } finally {
    ue = n, on();
  }
};
Nt.hydrate = function(e, t, n) {
  if (!To(t)) throw Error(U(200));
  return Ml(null, e, t, !0, n);
};
Nt.render = function(e, t, n) {
  if (!To(t)) throw Error(U(200));
  return Ml(null, e, t, !1, n);
};
Nt.unmountComponentAtNode = function(e) {
  if (!To(e)) throw Error(U(40));
  return e._reactRootContainer ? (ob(function() {
    Ml(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Di] = null;
    });
  }), !0) : !1;
};
Nt.unstable_batchedUpdates = ab;
Nt.unstable_createPortal = function(e, t) {
  return db(e, t, 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null);
};
Nt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!To(n)) throw Error(U(200));
  if (e == null || e._reactInternals === void 0) throw Error(U(38));
  return Ml(e, t, n, !1, r);
};
Nt.version = "17.0.2";
function mb() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(mb);
    } catch (e) {
      console.error(e);
    }
}
mb(), By.exports = Nt;
var hb = By.exports;
const Jr = /* @__PURE__ */ Oo(hb);
var Wc = function(e, t) {
  return Wc = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
  }, Wc(e, t);
};
function Rt(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Wc(e, t);
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
function wi(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
}
function Et(e, t, n, r) {
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
function Bi(e, t) {
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
function qh(e, t) {
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
function qe(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, i = t.length, a; r < i; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function lt(e, t) {
  var n = t && t.cache ? t.cache : CO, r = t && t.serializer ? t.serializer : SO, i = t && t.strategy ? t.strategy : EO;
  return i(e, {
    cache: n,
    serializer: r
  });
}
function xO(e) {
  return e == null || typeof e == "number" || typeof e == "boolean";
}
function wO(e, t, n, r) {
  var i = xO(r) ? r : n(r), a = t.get(i);
  return typeof a > "u" && (a = e.call(this, r), t.set(i, a)), a;
}
function vb(e, t, n) {
  var r = Array.prototype.slice.call(arguments, 3), i = n(r), a = t.get(i);
  return typeof a > "u" && (a = e.apply(this, r), t.set(i, a)), a;
}
function gb(e, t, n, r, i) {
  return n.bind(t, e, r, i);
}
function EO(e, t) {
  var n = e.length === 1 ? wO : vb;
  return gb(e, this, n, t.cache.create(), t.serializer);
}
function OO(e, t) {
  return gb(e, this, vb, t.cache.create(), t.serializer);
}
var SO = function() {
  return JSON.stringify(arguments);
};
function dd() {
  this.cache = /* @__PURE__ */ Object.create(null);
}
dd.prototype.get = function(e) {
  return this.cache[e];
};
dd.prototype.set = function(e, t) {
  this.cache[e] = t;
};
var CO = {
  create: function() {
    return new dd();
  }
}, ut = {
  variadic: OO
};
function yb(e, t, n) {
  if (n === void 0 && (n = Error), !e)
    throw new n(t);
}
lt(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.NumberFormat).bind.apply(e, qe([void 0], t, !1)))();
}, {
  strategy: ut.variadic
});
lt(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.DateTimeFormat).bind.apply(e, qe([void 0], t, !1)))();
}, {
  strategy: ut.variadic
});
lt(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.PluralRules).bind.apply(e, qe([void 0], t, !1)))();
}, {
  strategy: ut.variadic
});
lt(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.Locale).bind.apply(e, qe([void 0], t, !1)))();
}, {
  strategy: ut.variadic
});
lt(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.ListFormat).bind.apply(e, qe([void 0], t, !1)))();
}, {
  strategy: ut.variadic
});
var de;
(function(e) {
  e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(de || (de = {}));
var Ce;
(function(e) {
  e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
})(Ce || (Ce = {}));
var Ei;
(function(e) {
  e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
})(Ei || (Ei = {}));
function Yh(e) {
  return e.type === Ce.literal;
}
function kO(e) {
  return e.type === Ce.argument;
}
function bb(e) {
  return e.type === Ce.number;
}
function xb(e) {
  return e.type === Ce.date;
}
function wb(e) {
  return e.type === Ce.time;
}
function Eb(e) {
  return e.type === Ce.select;
}
function Ob(e) {
  return e.type === Ce.plural;
}
function PO(e) {
  return e.type === Ce.pound;
}
function Sb(e) {
  return e.type === Ce.tag;
}
function Cb(e) {
  return !!(e && typeof e == "object" && e.type === Ei.number);
}
function Gc(e) {
  return !!(e && typeof e == "object" && e.type === Ei.dateTime);
}
var kb = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, _O = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function AO(e) {
  var t = {};
  return e.replace(_O, function(n) {
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
var TO = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function IO(e) {
  if (e.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var t = e.split(TO).filter(function(p) {
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
function jO(e) {
  return e.replace(/^(.*?)-/, "");
}
var Xh = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, Pb = /^(@+)?(\+|#+)?[rs]?$/g, NO = /(\*)(0+)|(#+)(0+)|(0+)/g, _b = /^(0+)$/;
function Qh(e) {
  var t = {};
  return e[e.length - 1] === "r" ? t.roundingPriority = "morePrecision" : e[e.length - 1] === "s" && (t.roundingPriority = "lessPrecision"), e.replace(Pb, function(n, r, i) {
    return typeof i != "string" ? (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length) : i === "+" ? t.minimumSignificantDigits = r.length : r[0] === "#" ? t.maximumSignificantDigits = r.length : (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length + (typeof i == "string" ? i.length : 0)), "";
  }), t;
}
function Ab(e) {
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
function RO(e) {
  var t;
  if (e[0] === "E" && e[1] === "E" ? (t = {
    notation: "engineering"
  }, e = e.slice(2)) : e[0] === "E" && (t = {
    notation: "scientific"
  }, e = e.slice(1)), t) {
    var n = e.slice(0, 2);
    if (n === "+!" ? (t.signDisplay = "always", e = e.slice(2)) : n === "+?" && (t.signDisplay = "exceptZero", e = e.slice(2)), !_b.test(e))
      throw new Error("Malformed concise eng/scientific notation");
    t.minimumIntegerDigits = e.length;
  }
  return t;
}
function Zh(e) {
  var t = {}, n = Ab(e);
  return n || t;
}
function DO(e) {
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
        t.style = "unit", t.unit = jO(i.options[0]);
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
          return J(J({}, l), Zh(u));
        }, {}));
        continue;
      case "engineering":
        t = J(J(J({}, t), { notation: "engineering" }), i.options.reduce(function(l, u) {
          return J(J({}, l), Zh(u));
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
        i.options[0].replace(NO, function(l, u, c, d, p, g) {
          if (u)
            t.minimumIntegerDigits = c.length;
          else {
            if (d && p)
              throw new Error("We currently do not support maximum integer digits");
            if (g)
              throw new Error("We currently do not support exact integer digits");
          }
          return "";
        });
        continue;
    }
    if (_b.test(i.stem)) {
      t.minimumIntegerDigits = i.stem.length;
      continue;
    }
    if (Xh.test(i.stem)) {
      if (i.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      i.stem.replace(Xh, function(l, u, c, d, p, g) {
        return c === "*" ? t.minimumFractionDigits = u.length : d && d[0] === "#" ? t.maximumFractionDigits = d.length : p && g ? (t.minimumFractionDigits = p.length, t.maximumFractionDigits = p.length + g.length) : (t.minimumFractionDigits = u.length, t.maximumFractionDigits = u.length), "";
      });
      var a = i.options[0];
      a === "w" ? t = J(J({}, t), { trailingZeroDisplay: "stripIfInteger" }) : a && (t = J(J({}, t), Qh(a)));
      continue;
    }
    if (Pb.test(i.stem)) {
      t = J(J({}, t), Qh(i.stem));
      continue;
    }
    var o = Ab(i.stem);
    o && (t = J(J({}, t), o));
    var s = RO(i.stem);
    s && (t = J(J({}, t), s));
  }
  return t;
}
var ts = {
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
function FO(e, t) {
  for (var n = "", r = 0; r < e.length; r++) {
    var i = e.charAt(r);
    if (i === "j") {
      for (var a = 0; r + 1 < e.length && e.charAt(r + 1) === i; )
        a++, r++;
      var o = 1 + (a & 1), s = a < 2 ? 1 : 3 + (a >> 1), l = "a", u = MO(t);
      for ((u == "H" || u == "k") && (s = 0); s-- > 0; )
        n += l;
      for (; o-- > 0; )
        n = u + n;
    } else i === "J" ? n += "H" : n += i;
  }
  return n;
}
function MO(e) {
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
  var i = ts[r || ""] || ts[n || ""] || ts["".concat(n, "-001")] || ts["001"];
  return i[0];
}
var Bu, LO = new RegExp("^".concat(kb.source, "*")), BO = new RegExp("".concat(kb.source, "*$"));
function me(e, t) {
  return { start: e, end: t };
}
var $O = !!String.prototype.startsWith && "_a".startsWith("a", 1), zO = !!String.fromCodePoint, HO = !!Object.fromEntries, VO = !!String.prototype.codePointAt, UO = !!String.prototype.trimStart, WO = !!String.prototype.trimEnd, GO = !!Number.isSafeInteger, KO = GO ? Number.isSafeInteger : function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
}, Kc = !0;
try {
  var qO = Ib("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Kc = ((Bu = qO.exec("a")) === null || Bu === void 0 ? void 0 : Bu[0]) === "a";
} catch {
  Kc = !1;
}
var Jh = $O ? (
  // Native
  function(t, n, r) {
    return t.startsWith(n, r);
  }
) : (
  // For IE11
  function(t, n, r) {
    return t.slice(r, r + n.length) === n;
  }
), qc = zO ? String.fromCodePoint : (
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
), ev = (
  // native
  HO ? Object.fromEntries : (
    // Ponyfill
    function(t) {
      for (var n = {}, r = 0, i = t; r < i.length; r++) {
        var a = i[r], o = a[0], s = a[1];
        n[o] = s;
      }
      return n;
    }
  )
), Tb = VO ? (
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
), YO = UO ? (
  // Native
  function(t) {
    return t.trimStart();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(LO, "");
  }
), XO = WO ? (
  // Native
  function(t) {
    return t.trimEnd();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(BO, "");
  }
);
function Ib(e, t) {
  return new RegExp(e, t);
}
var Yc;
if (Kc) {
  var tv = Ib("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Yc = function(t, n) {
    var r;
    tv.lastIndex = n;
    var i = tv.exec(t);
    return (r = i[1]) !== null && r !== void 0 ? r : "";
  };
} else
  Yc = function(t, n) {
    for (var r = []; ; ) {
      var i = Tb(t, n);
      if (i === void 0 || jb(i) || eS(i))
        break;
      r.push(i), n += i >= 65536 ? 2 : 1;
    }
    return qc.apply(void 0, r);
  };
var QO = (
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
          } else if (a === 60 && !this.ignoreTag && Xc(this.peek() || 0)) {
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
          if (this.isEOF() || !Xc(this.char()))
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
      for (this.bump(); !this.isEOF() && JO(this.char()); )
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
      !ZO(this.peek() || 0)) ? (this.bump(), "<") : null;
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
      return qc.apply(void 0, n);
    }, e.prototype.tryParseUnquoted = function(t, n) {
      if (this.isEOF())
        return null;
      var r = this.char();
      return r === 60 || r === 123 || r === 35 && (n === "plural" || n === "selectordinal") || r === 125 && t > 0 ? null : (this.bump(), qc(r));
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
      var t = this.clonePosition(), n = this.offset(), r = Yc(this.message, n), i = n + r.length;
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
            var p = XO(d.val);
            if (p.length === 0)
              return this.error(de.EXPECT_ARGUMENT_STYLE, me(this.clonePosition(), this.clonePosition()));
            var g = me(c, this.clonePosition());
            u = { style: p, styleLocation: g };
          }
          var x = this.tryParseArgumentClose(i);
          if (x.err)
            return x;
          var w = me(i, this.clonePosition());
          if (u && Jh(u == null ? void 0 : u.style, "::", 0)) {
            var h = YO(u.style.slice(2));
            if (s === "number") {
              var d = this.parseNumberSkeletonFromString(h, u.styleLocation);
              return d.err ? d : {
                val: { type: Ce.number, value: r, location: w, style: d.val },
                err: null
              };
            } else {
              if (h.length === 0)
                return this.error(de.EXPECT_DATE_TIME_SKELETON, w);
              var m = h;
              this.locale && (m = FO(h, this.locale));
              var p = {
                type: Ei.dateTime,
                pattern: m,
                location: u.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? AO(m) : {}
              }, v = s === "date" ? Ce.date : Ce.time;
              return {
                val: { type: v, value: r, location: w, style: p },
                err: null
              };
            }
          }
          return {
            val: {
              type: s === "number" ? Ce.number : s === "date" ? Ce.date : Ce.time,
              value: r,
              location: w,
              style: (a = u == null ? void 0 : u.style) !== null && a !== void 0 ? a : null
            },
            err: null
          };
        }
        case "plural":
        case "selectordinal":
        case "select": {
          var b = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(","))
            return this.error(de.EXPECT_SELECT_ARGUMENT_OPTIONS, me(b, J({}, b)));
          this.bumpSpace();
          var E = this.parseIdentifierIfPossible(), C = 0;
          if (s !== "select" && E.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(de.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, me(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var d = this.tryParseDecimalInteger(de.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, de.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (d.err)
              return d;
            this.bumpSpace(), E = this.parseIdentifierIfPossible(), C = d.val;
          }
          var k = this.tryParsePluralOrSelectOptions(t, s, n, E);
          if (k.err)
            return k;
          var x = this.tryParseArgumentClose(i);
          if (x.err)
            return x;
          var P = me(i, this.clonePosition());
          return s === "select" ? {
            val: {
              type: Ce.select,
              value: r,
              options: ev(k.val),
              location: P
            },
            err: null
          } : {
            val: {
              type: Ce.plural,
              value: r,
              options: ev(k.val),
              offset: C,
              pluralType: s === "plural" ? "cardinal" : "ordinal",
              location: P
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
        r = IO(t);
      } catch {
        return this.error(de.INVALID_NUMBER_SKELETON, n);
      }
      return {
        val: {
          type: Ei.number,
          tokens: r,
          location: n,
          parsedOptions: this.shouldParseSkeletons ? DO(r) : {}
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
        var g = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(n === "select" ? de.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : de.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, me(this.clonePosition(), this.clonePosition()));
        var x = this.parseMessage(t + 1, n, r);
        if (x.err)
          return x;
        var w = this.tryParseArgumentClose(g);
        if (w.err)
          return w;
        s.push([
          u,
          {
            value: x.val,
            location: me(g, this.clonePosition())
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
      return a ? (o *= r, KO(o) ? { val: o, err: null } : this.error(n, l)) : this.error(t, l);
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
      var n = Tb(this.message, t);
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
      if (Jh(this.message, t, this.offset())) {
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
      for (; !this.isEOF() && jb(this.char()); )
        this.bump();
    }, e.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var t = this.char(), n = this.offset(), r = this.message.charCodeAt(n + (t >= 65536 ? 2 : 1));
      return r ?? null;
    }, e;
  }()
);
function Xc(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function ZO(e) {
  return Xc(e) || e === 47;
}
function JO(e) {
  return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
function jb(e) {
  return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
}
function eS(e) {
  return e >= 33 && e <= 35 || e === 36 || e >= 37 && e <= 39 || e === 40 || e === 41 || e === 42 || e === 43 || e === 44 || e === 45 || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || e === 91 || e === 92 || e === 93 || e === 94 || e === 96 || e === 123 || e === 124 || e === 125 || e === 126 || e === 161 || e >= 162 && e <= 165 || e === 166 || e === 167 || e === 169 || e === 171 || e === 172 || e === 174 || e === 176 || e === 177 || e === 182 || e === 187 || e === 191 || e === 215 || e === 247 || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || e === 8216 || e === 8217 || e === 8218 || e >= 8219 && e <= 8220 || e === 8221 || e === 8222 || e === 8223 || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || e === 8249 || e === 8250 || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || e === 8260 || e === 8261 || e === 8262 || e >= 8263 && e <= 8273 || e === 8274 || e === 8275 || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || e === 8608 || e >= 8609 && e <= 8610 || e === 8611 || e >= 8612 && e <= 8613 || e === 8614 || e >= 8615 && e <= 8621 || e === 8622 || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || e === 8658 || e === 8659 || e === 8660 || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || e === 8968 || e === 8969 || e === 8970 || e === 8971 || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || e === 9001 || e === 9002 || e >= 9003 && e <= 9083 || e === 9084 || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || e === 9655 || e >= 9656 && e <= 9664 || e === 9665 || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || e === 9839 || e >= 9840 && e <= 10087 || e === 10088 || e === 10089 || e === 10090 || e === 10091 || e === 10092 || e === 10093 || e === 10094 || e === 10095 || e === 10096 || e === 10097 || e === 10098 || e === 10099 || e === 10100 || e === 10101 || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || e === 10181 || e === 10182 || e >= 10183 && e <= 10213 || e === 10214 || e === 10215 || e === 10216 || e === 10217 || e === 10218 || e === 10219 || e === 10220 || e === 10221 || e === 10222 || e === 10223 || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || e === 10627 || e === 10628 || e === 10629 || e === 10630 || e === 10631 || e === 10632 || e === 10633 || e === 10634 || e === 10635 || e === 10636 || e === 10637 || e === 10638 || e === 10639 || e === 10640 || e === 10641 || e === 10642 || e === 10643 || e === 10644 || e === 10645 || e === 10646 || e === 10647 || e === 10648 || e >= 10649 && e <= 10711 || e === 10712 || e === 10713 || e === 10714 || e === 10715 || e >= 10716 && e <= 10747 || e === 10748 || e === 10749 || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || e === 11158 || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || e === 11778 || e === 11779 || e === 11780 || e === 11781 || e >= 11782 && e <= 11784 || e === 11785 || e === 11786 || e === 11787 || e === 11788 || e === 11789 || e >= 11790 && e <= 11798 || e === 11799 || e >= 11800 && e <= 11801 || e === 11802 || e === 11803 || e === 11804 || e === 11805 || e >= 11806 && e <= 11807 || e === 11808 || e === 11809 || e === 11810 || e === 11811 || e === 11812 || e === 11813 || e === 11814 || e === 11815 || e === 11816 || e === 11817 || e >= 11818 && e <= 11822 || e === 11823 || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || e === 11840 || e === 11841 || e === 11842 || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || e === 11858 || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || e === 12296 || e === 12297 || e === 12298 || e === 12299 || e === 12300 || e === 12301 || e === 12302 || e === 12303 || e === 12304 || e === 12305 || e >= 12306 && e <= 12307 || e === 12308 || e === 12309 || e === 12310 || e === 12311 || e === 12312 || e === 12313 || e === 12314 || e === 12315 || e === 12316 || e === 12317 || e >= 12318 && e <= 12319 || e === 12320 || e === 12336 || e === 64830 || e === 64831 || e >= 65093 && e <= 65094;
}
function Qc(e) {
  e.forEach(function(t) {
    if (delete t.location, Eb(t) || Ob(t))
      for (var n in t.options)
        delete t.options[n].location, Qc(t.options[n].value);
    else bb(t) && Cb(t.style) || (xb(t) || wb(t)) && Gc(t.style) ? delete t.style.location : Sb(t) && Qc(t.children);
  });
}
function tS(e, t) {
  t === void 0 && (t = {}), t = J({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, t);
  var n = new QO(e, t).parse();
  if (n.err) {
    var r = SyntaxError(de[n.err.kind]);
    throw r.location = n.err.location, r.originalMessage = n.err.message, r;
  }
  return t != null && t.captureLocation || Qc(n.val), n.val;
}
var an;
(function(e) {
  e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API";
})(an || (an = {}));
var sr = (
  /** @class */
  function(e) {
    Rt(t, e);
    function t(n, r, i) {
      var a = e.call(this, n) || this;
      return a.code = r, a.originalMessage = i, a;
    }
    return t.prototype.toString = function() {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    }, t;
  }(Error)
), nv = (
  /** @class */
  function(e) {
    Rt(t, e);
    function t(n, r, i, a) {
      return e.call(this, 'Invalid values for "'.concat(n, '": "').concat(r, '". Options are "').concat(Object.keys(i).join('", "'), '"'), an.INVALID_VALUE, a) || this;
    }
    return t;
  }(sr)
), nS = (
  /** @class */
  function(e) {
    Rt(t, e);
    function t(n, r, i) {
      return e.call(this, 'Value for "'.concat(n, '" must be of type ').concat(r), an.INVALID_VALUE, i) || this;
    }
    return t;
  }(sr)
), rS = (
  /** @class */
  function(e) {
    Rt(t, e);
    function t(n, r) {
      return e.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(r, '"'), an.MISSING_VALUE, r) || this;
    }
    return t;
  }(sr)
), st;
(function(e) {
  e[e.literal = 0] = "literal", e[e.object = 1] = "object";
})(st || (st = {}));
function iS(e) {
  return e.length < 2 ? e : e.reduce(function(t, n) {
    var r = t[t.length - 1];
    return !r || r.type !== st.literal || n.type !== st.literal ? t.push(n) : r.value += n.value, t;
  }, []);
}
function Nb(e) {
  return typeof e == "function";
}
function ws(e, t, n, r, i, a, o) {
  if (e.length === 1 && Yh(e[0]))
    return [
      {
        type: st.literal,
        value: e[0].value
      }
    ];
  for (var s = [], l = 0, u = e; l < u.length; l++) {
    var c = u[l];
    if (Yh(c)) {
      s.push({
        type: st.literal,
        value: c.value
      });
      continue;
    }
    if (PO(c)) {
      typeof a == "number" && s.push({
        type: st.literal,
        value: n.getNumberFormat(t).format(a)
      });
      continue;
    }
    var d = c.value;
    if (!(i && d in i))
      throw new rS(d, o);
    var p = i[d];
    if (kO(c)) {
      (!p || typeof p == "string" || typeof p == "number") && (p = typeof p == "string" || typeof p == "number" ? String(p) : ""), s.push({
        type: typeof p == "string" ? st.literal : st.object,
        value: p
      });
      continue;
    }
    if (xb(c)) {
      var g = typeof c.style == "string" ? r.date[c.style] : Gc(c.style) ? c.style.parsedOptions : void 0;
      s.push({
        type: st.literal,
        value: n.getDateTimeFormat(t, g).format(p)
      });
      continue;
    }
    if (wb(c)) {
      var g = typeof c.style == "string" ? r.time[c.style] : Gc(c.style) ? c.style.parsedOptions : r.time.medium;
      s.push({
        type: st.literal,
        value: n.getDateTimeFormat(t, g).format(p)
      });
      continue;
    }
    if (bb(c)) {
      var g = typeof c.style == "string" ? r.number[c.style] : Cb(c.style) ? c.style.parsedOptions : void 0;
      g && g.scale && (p = p * (g.scale || 1)), s.push({
        type: st.literal,
        value: n.getNumberFormat(t, g).format(p)
      });
      continue;
    }
    if (Sb(c)) {
      var x = c.children, w = c.value, h = i[w];
      if (!Nb(h))
        throw new nS(w, "function", o);
      var m = ws(x, t, n, r, i, a), v = h(m.map(function(C) {
        return C.value;
      }));
      Array.isArray(v) || (v = [v]), s.push.apply(s, v.map(function(C) {
        return {
          type: typeof C == "string" ? st.literal : st.object,
          value: C
        };
      }));
    }
    if (Eb(c)) {
      var b = c.options[p] || c.options.other;
      if (!b)
        throw new nv(c.value, p, Object.keys(c.options), o);
      s.push.apply(s, ws(b.value, t, n, r, i));
      continue;
    }
    if (Ob(c)) {
      var b = c.options["=".concat(p)];
      if (!b) {
        if (!Intl.PluralRules)
          throw new sr(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, an.MISSING_INTL_API, o);
        var E = n.getPluralRules(t, { type: c.pluralType }).select(p - (c.offset || 0));
        b = c.options[E] || c.options.other;
      }
      if (!b)
        throw new nv(c.value, p, Object.keys(c.options), o);
      s.push.apply(s, ws(b.value, t, n, r, i, p - (c.offset || 0)));
      continue;
    }
  }
  return iS(s);
}
function aS(e, t) {
  return t ? J(J(J({}, e || {}), t || {}), Object.keys(e).reduce(function(n, r) {
    return n[r] = J(J({}, e[r]), t[r] || {}), n;
  }, {})) : e;
}
function oS(e, t) {
  return t ? Object.keys(e).reduce(function(n, r) {
    return n[r] = aS(e[r], t[r]), n;
  }, J({}, e)) : e;
}
function $u(e) {
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
function sS(e) {
  return e === void 0 && (e = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: lt(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.NumberFormat).bind.apply(t, qe([void 0], n, !1)))();
    }, {
      cache: $u(e.number),
      strategy: ut.variadic
    }),
    getDateTimeFormat: lt(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.DateTimeFormat).bind.apply(t, qe([void 0], n, !1)))();
    }, {
      cache: $u(e.dateTime),
      strategy: ut.variadic
    }),
    getPluralRules: lt(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.PluralRules).bind.apply(t, qe([void 0], n, !1)))();
    }, {
      cache: $u(e.pluralRules),
      strategy: ut.variadic
    })
  };
}
var Rb = (
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
          return !d.length || p.type !== st.literal || typeof d[d.length - 1] != "string" ? d.push(p.value) : d[d.length - 1] += p.value, d;
        }, []);
        return c.length <= 1 ? c[0] || "" : c;
      }, this.formatToParts = function(l) {
        return ws(a.ast, a.locales, a.formatters, a.formats, l, void 0, a.message);
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
        var s = wi(o, ["formatters"]);
        this.ast = e.__parse(t, J(J({}, s), { locale: this.resolvedLocale }));
      } else
        this.ast = t;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = oS(e.formats, r), this.formatters = i && i.formatters || sS(this.formatterCache);
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
    }, e.__parse = tS, e.formats = {
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
), Ar;
(function(e) {
  e.FORMAT_ERROR = "FORMAT_ERROR", e.UNSUPPORTED_FORMATTER = "UNSUPPORTED_FORMATTER", e.INVALID_CONFIG = "INVALID_CONFIG", e.MISSING_DATA = "MISSING_DATA", e.MISSING_TRANSLATION = "MISSING_TRANSLATION";
})(Ar || (Ar = {}));
var Io = (
  /** @class */
  function(e) {
    Rt(t, e);
    function t(n, r, i) {
      var a = this, o = i ? i instanceof Error ? i : new Error(String(i)) : void 0;
      return a = e.call(this, "[@formatjs/intl Error ".concat(n, "] ").concat(r, `
`).concat(o ? `
`.concat(o.message, `
`).concat(o.stack) : "")) || this, a.code = n, typeof Error.captureStackTrace == "function" && Error.captureStackTrace(a, t), a;
    }
    return t;
  }(Error)
), lS = (
  /** @class */
  function(e) {
    Rt(t, e);
    function t(n, r) {
      return e.call(this, Ar.UNSUPPORTED_FORMATTER, n, r) || this;
    }
    return t;
  }(Io)
), uS = (
  /** @class */
  function(e) {
    Rt(t, e);
    function t(n, r) {
      return e.call(this, Ar.INVALID_CONFIG, n, r) || this;
    }
    return t;
  }(Io)
), rv = (
  /** @class */
  function(e) {
    Rt(t, e);
    function t(n, r) {
      return e.call(this, Ar.MISSING_DATA, n, r) || this;
    }
    return t;
  }(Io)
), Dt = (
  /** @class */
  function(e) {
    Rt(t, e);
    function t(n, r, i) {
      var a = e.call(this, Ar.FORMAT_ERROR, "".concat(n, `
Locale: `).concat(r, `
`), i) || this;
      return a.locale = r, a;
    }
    return t;
  }(Io)
), zu = (
  /** @class */
  function(e) {
    Rt(t, e);
    function t(n, r, i, a) {
      var o = e.call(this, "".concat(n, `
MessageID: `).concat(i == null ? void 0 : i.id, `
Default Message: `).concat(i == null ? void 0 : i.defaultMessage, `
Description: `).concat(i == null ? void 0 : i.description, `
`), r, a) || this;
      return o.descriptor = i, o.locale = r, o;
    }
    return t;
  }(Dt)
), cS = (
  /** @class */
  function(e) {
    Rt(t, e);
    function t(n, r) {
      var i = e.call(this, Ar.MISSING_TRANSLATION, 'Missing message: "'.concat(n.id, '" for locale "').concat(r, '", using ').concat(n.defaultMessage ? "default message (".concat(typeof n.defaultMessage == "string" ? n.defaultMessage : n.defaultMessage.map(function(a) {
        var o;
        return (o = a.value) !== null && o !== void 0 ? o : JSON.stringify(a);
      }).join(), ")") : "id", " as fallback.")) || this;
      return i.descriptor = n, i;
    }
    return t;
  }(Io)
);
function Lr(e, t, n) {
  return n === void 0 && (n = {}), t.reduce(function(r, i) {
    return i in e ? r[i] = e[i] : i in n && (r[i] = n[i]), r;
  }, {});
}
var fS = function(e) {
}, pS = function(e) {
}, Db = {
  formats: {},
  messages: {},
  timeZone: void 0,
  defaultLocale: "en",
  defaultFormats: {},
  fallbackOnEmptyString: !0,
  onError: fS,
  onWarn: pS
};
function Fb() {
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
function cr(e) {
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
function dS(e) {
  e === void 0 && (e = Fb());
  var t = Intl.RelativeTimeFormat, n = Intl.ListFormat, r = Intl.DisplayNames, i = lt(function() {
    for (var s, l = [], u = 0; u < arguments.length; u++)
      l[u] = arguments[u];
    return new ((s = Intl.DateTimeFormat).bind.apply(s, qe([void 0], l, !1)))();
  }, {
    cache: cr(e.dateTime),
    strategy: ut.variadic
  }), a = lt(function() {
    for (var s, l = [], u = 0; u < arguments.length; u++)
      l[u] = arguments[u];
    return new ((s = Intl.NumberFormat).bind.apply(s, qe([void 0], l, !1)))();
  }, {
    cache: cr(e.number),
    strategy: ut.variadic
  }), o = lt(function() {
    for (var s, l = [], u = 0; u < arguments.length; u++)
      l[u] = arguments[u];
    return new ((s = Intl.PluralRules).bind.apply(s, qe([void 0], l, !1)))();
  }, {
    cache: cr(e.pluralRules),
    strategy: ut.variadic
  });
  return {
    getDateTimeFormat: i,
    getNumberFormat: a,
    getMessageFormat: lt(function(s, l, u, c) {
      return new Rb(s, l, u, J({ formatters: {
        getNumberFormat: a,
        getDateTimeFormat: i,
        getPluralRules: o
      } }, c || {}));
    }, {
      cache: cr(e.message),
      strategy: ut.variadic
    }),
    getRelativeTimeFormat: lt(function() {
      for (var s = [], l = 0; l < arguments.length; l++)
        s[l] = arguments[l];
      return new (t.bind.apply(t, qe([void 0], s, !1)))();
    }, {
      cache: cr(e.relativeTime),
      strategy: ut.variadic
    }),
    getPluralRules: o,
    getListFormat: lt(function() {
      for (var s = [], l = 0; l < arguments.length; l++)
        s[l] = arguments[l];
      return new (n.bind.apply(n, qe([void 0], s, !1)))();
    }, {
      cache: cr(e.list),
      strategy: ut.variadic
    }),
    getDisplayNames: lt(function() {
      for (var s = [], l = 0; l < arguments.length; l++)
        s[l] = arguments[l];
      return new (r.bind.apply(r, qe([void 0], s, !1)))();
    }, {
      cache: cr(e.displayNames),
      strategy: ut.variadic
    })
  };
}
function md(e, t, n, r) {
  var i = e && e[t], a;
  if (i && (a = i[n]), a)
    return a;
  r(new lS("No ".concat(t, " format named: ").concat(n)));
}
function ns(e, t) {
  return Object.keys(e).reduce(function(n, r) {
    return n[r] = J({ timeZone: t }, e[r]), n;
  }, {});
}
function iv(e, t) {
  var n = Object.keys(J(J({}, e), t));
  return n.reduce(function(r, i) {
    return r[i] = J(J({}, e[i] || {}), t[i] || {}), r;
  }, {});
}
function av(e, t) {
  if (!t)
    return e;
  var n = Rb.formats;
  return J(J(J({}, n), e), { date: iv(ns(n.date, t), ns(e.date || {}, t)), time: iv(ns(n.time, t), ns(e.time || {}, t)) });
}
var Zc = function(e, t, n, r, i) {
  var a = e.locale, o = e.formats, s = e.messages, l = e.defaultLocale, u = e.defaultFormats, c = e.fallbackOnEmptyString, d = e.onError, p = e.timeZone, g = e.defaultRichTextElements;
  n === void 0 && (n = { id: "" });
  var x = n.id, w = n.defaultMessage;
  yb(!!x, "[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");
  var h = String(x), m = (
    // In case messages is Object.create(null)
    // e.g import('foo.json') from webpack)
    // See https://github.com/formatjs/formatjs/issues/1914
    s && Object.prototype.hasOwnProperty.call(s, h) && s[h]
  );
  if (Array.isArray(m) && m.length === 1 && m[0].type === Ce.literal)
    return m[0].value;
  if (!r && m && typeof m == "string" && !g)
    return m.replace(/'\{(.*?)\}'/gi, "{$1}");
  if (r = J(J({}, g), r || {}), o = av(o, p), u = av(u, p), !m) {
    if (c === !1 && m === "")
      return m;
    if ((!w || a && a.toLowerCase() !== l.toLowerCase()) && d(new cS(n, a)), w)
      try {
        var v = t.getMessageFormat(w, l, u, i);
        return v.format(r);
      } catch (b) {
        return d(new zu('Error formatting default message for: "'.concat(h, '", rendering default message verbatim'), a, n, b)), typeof w == "string" ? w : h;
      }
    return h;
  }
  try {
    var v = t.getMessageFormat(m, a, o, J({ formatters: t }, i || {}));
    return v.format(r);
  } catch (b) {
    d(new zu('Error formatting message: "'.concat(h, '", using ').concat(w ? "default message" : "id", " as fallback."), a, n, b));
  }
  if (w)
    try {
      var v = t.getMessageFormat(w, l, u, i);
      return v.format(r);
    } catch (b) {
      d(new zu('Error formatting the default message for: "'.concat(h, '", rendering message verbatim'), a, n, b));
    }
  return typeof m == "string" ? m : typeof w == "string" ? w : h;
}, Mb = [
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
function Ll(e, t, n, r) {
  var i = e.locale, a = e.formats, o = e.onError, s = e.timeZone;
  r === void 0 && (r = {});
  var l = r.format, u = J(J({}, s && { timeZone: s }), l && md(a, t, l, o)), c = Lr(r, Mb, u);
  return t === "time" && !c.hour && !c.minute && !c.second && !c.timeStyle && !c.dateStyle && (c = J(J({}, c), { hour: "numeric", minute: "numeric" })), n(i, c);
}
function mS(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var i = n[0], a = n[1], o = a === void 0 ? {} : a, s = typeof i == "string" ? new Date(i || 0) : i;
  try {
    return Ll(e, "date", t, o).format(s);
  } catch (l) {
    e.onError(new Dt("Error formatting date.", e.locale, l));
  }
  return String(s);
}
function hS(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var i = n[0], a = n[1], o = a === void 0 ? {} : a, s = typeof i == "string" ? new Date(i || 0) : i;
  try {
    return Ll(e, "time", t, o).format(s);
  } catch (l) {
    e.onError(new Dt("Error formatting time.", e.locale, l));
  }
  return String(s);
}
function vS(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var i = n[0], a = n[1], o = n[2], s = o === void 0 ? {} : o, l = e.timeZone, u = e.locale, c = e.onError, d = Lr(s, Mb, l ? { timeZone: l } : {});
  try {
    return t(u, d).formatRange(i, a);
  } catch (p) {
    c(new Dt("Error formatting date time range.", e.locale, p));
  }
  return String(i);
}
function gS(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var i = n[0], a = n[1], o = a === void 0 ? {} : a, s = typeof i == "string" ? new Date(i || 0) : i;
  try {
    return Ll(e, "date", t, o).formatToParts(s);
  } catch (l) {
    e.onError(new Dt("Error formatting date.", e.locale, l));
  }
  return [];
}
function yS(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var i = n[0], a = n[1], o = a === void 0 ? {} : a, s = typeof i == "string" ? new Date(i || 0) : i;
  try {
    return Ll(e, "time", t, o).formatToParts(s);
  } catch (l) {
    e.onError(new Dt("Error formatting time.", e.locale, l));
  }
  return [];
}
var bS = [
  "style",
  "type",
  "fallback",
  "languageDisplay"
];
function xS(e, t, n, r) {
  var i = e.locale, a = e.onError, o = Intl.DisplayNames;
  o || a(new sr(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`, an.MISSING_INTL_API));
  var s = Lr(r, bS);
  try {
    return t(i, s).of(n);
  } catch (l) {
    a(new Dt("Error formatting display name.", i, l));
  }
}
var wS = [
  "type",
  "style"
], ov = Date.now();
function ES(e) {
  return "".concat(ov, "_").concat(e, "_").concat(ov);
}
function OS(e, t, n, r) {
  r === void 0 && (r = {});
  var i = Lb(e, t, n, r).reduce(function(a, o) {
    var s = o.value;
    return typeof s != "string" ? a.push(s) : typeof a[a.length - 1] == "string" ? a[a.length - 1] += s : a.push(s), a;
  }, []);
  return i.length === 1 ? i[0] : i.length === 0 ? "" : i;
}
function Lb(e, t, n, r) {
  var i = e.locale, a = e.onError;
  r === void 0 && (r = {});
  var o = Intl.ListFormat;
  o || a(new sr(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`, an.MISSING_INTL_API));
  var s = Lr(r, wS);
  try {
    var l = {}, u = n.map(function(c, d) {
      if (typeof c == "object") {
        var p = ES(d);
        return l[p] = c, p;
      }
      return String(c);
    });
    return t(i, s).formatToParts(u).map(function(c) {
      return c.type === "literal" ? c : J(J({}, c), { value: l[c.value] || c.value });
    });
  } catch (c) {
    a(new Dt("Error formatting list.", i, c));
  }
  return n;
}
var SS = ["type"];
function CS(e, t, n, r) {
  var i = e.locale, a = e.onError;
  r === void 0 && (r = {}), Intl.PluralRules || a(new sr(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, an.MISSING_INTL_API));
  var o = Lr(r, SS);
  try {
    return t(i, o).select(n);
  } catch (s) {
    a(new Dt("Error formatting plural.", i, s));
  }
  return "other";
}
var kS = ["numeric", "style"];
function PS(e, t, n) {
  var r = e.locale, i = e.formats, a = e.onError;
  n === void 0 && (n = {});
  var o = n.format, s = !!o && md(i, "relative", o, a) || {}, l = Lr(n, kS, s);
  return t(r, l);
}
function _S(e, t, n, r, i) {
  i === void 0 && (i = {}), r || (r = "second");
  var a = Intl.RelativeTimeFormat;
  a || e.onError(new sr(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`, an.MISSING_INTL_API));
  try {
    return PS(e, t, i).format(n, r);
  } catch (o) {
    e.onError(new Dt("Error formatting relative time.", e.locale, o));
  }
  return String(n);
}
var AS = [
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
function Bb(e, t, n) {
  var r = e.locale, i = e.formats, a = e.onError;
  n === void 0 && (n = {});
  var o = n.format, s = o && md(i, "number", o, a) || {}, l = Lr(n, AS, s);
  return t(r, l);
}
function TS(e, t, n, r) {
  r === void 0 && (r = {});
  try {
    return Bb(e, t, r).format(n);
  } catch (i) {
    e.onError(new Dt("Error formatting number.", e.locale, i));
  }
  return String(n);
}
function IS(e, t, n, r) {
  r === void 0 && (r = {});
  try {
    return Bb(e, t, r).formatToParts(n);
  } catch (i) {
    e.onError(new Dt("Error formatting number.", e.locale, i));
  }
  return [];
}
function jS(e) {
  var t = e ? e[Object.keys(e)[0]] : void 0;
  return typeof t == "string";
}
function NS(e) {
  e.onWarn && e.defaultRichTextElements && jS(e.messages || {}) && e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.io/docs/getting-started/message-distribution`);
}
function RS(e, t) {
  var n = dS(t), r = J(J({}, Db), e), i = r.locale, a = r.defaultLocale, o = r.onError;
  return i ? !Intl.NumberFormat.supportedLocalesOf(i).length && o ? o(new rv('Missing locale data for locale: "'.concat(i, '" in Intl.NumberFormat. Using default locale: "').concat(a, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : !Intl.DateTimeFormat.supportedLocalesOf(i).length && o && o(new rv('Missing locale data for locale: "'.concat(i, '" in Intl.DateTimeFormat. Using default locale: "').concat(a, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : (o && o(new uS('"locale" was not configured, using "'.concat(a, '" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))), r.locale = r.defaultLocale || "en"), NS(r), J(J({}, r), {
    formatters: n,
    formatNumber: TS.bind(null, r, n.getNumberFormat),
    formatNumberToParts: IS.bind(null, r, n.getNumberFormat),
    formatRelativeTime: _S.bind(null, r, n.getRelativeTimeFormat),
    formatDate: mS.bind(null, r, n.getDateTimeFormat),
    formatDateToParts: gS.bind(null, r, n.getDateTimeFormat),
    formatTime: hS.bind(null, r, n.getDateTimeFormat),
    formatDateTimeRange: vS.bind(null, r, n.getDateTimeFormat),
    formatTimeToParts: yS.bind(null, r, n.getDateTimeFormat),
    formatPlural: CS.bind(null, r, n.getPluralRules),
    // @ts-expect-error TODO: will get to this later
    formatMessage: Zc.bind(null, r, n),
    // @ts-expect-error TODO: will get to this later
    $t: Zc.bind(null, r, n),
    formatList: OS.bind(null, r, n.getListFormat),
    formatListToParts: Lb.bind(null, r, n.getListFormat),
    formatDisplayName: xS.bind(null, r, n.getDisplayNames)
  });
}
function $b(e) {
  yb(e, "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.");
}
var zb = J(J({}, Db), { textComponent: S.Fragment });
function DS(e) {
  return function(t) {
    return e(S.Children.toArray(t));
  };
}
function Jc(e, t) {
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
var Hb = { exports: {} }, be = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ve = typeof Symbol == "function" && Symbol.for, hd = Ve ? Symbol.for("react.element") : 60103, vd = Ve ? Symbol.for("react.portal") : 60106, Bl = Ve ? Symbol.for("react.fragment") : 60107, $l = Ve ? Symbol.for("react.strict_mode") : 60108, zl = Ve ? Symbol.for("react.profiler") : 60114, Hl = Ve ? Symbol.for("react.provider") : 60109, Vl = Ve ? Symbol.for("react.context") : 60110, gd = Ve ? Symbol.for("react.async_mode") : 60111, Ul = Ve ? Symbol.for("react.concurrent_mode") : 60111, Wl = Ve ? Symbol.for("react.forward_ref") : 60112, Gl = Ve ? Symbol.for("react.suspense") : 60113, FS = Ve ? Symbol.for("react.suspense_list") : 60120, Kl = Ve ? Symbol.for("react.memo") : 60115, ql = Ve ? Symbol.for("react.lazy") : 60116, MS = Ve ? Symbol.for("react.block") : 60121, LS = Ve ? Symbol.for("react.fundamental") : 60117, BS = Ve ? Symbol.for("react.responder") : 60118, $S = Ve ? Symbol.for("react.scope") : 60119;
function Ot(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case hd:
        switch (e = e.type, e) {
          case gd:
          case Ul:
          case Bl:
          case zl:
          case $l:
          case Gl:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Vl:
              case Wl:
              case ql:
              case Kl:
              case Hl:
                return e;
              default:
                return t;
            }
        }
      case vd:
        return t;
    }
  }
}
function Vb(e) {
  return Ot(e) === Ul;
}
be.AsyncMode = gd;
be.ConcurrentMode = Ul;
be.ContextConsumer = Vl;
be.ContextProvider = Hl;
be.Element = hd;
be.ForwardRef = Wl;
be.Fragment = Bl;
be.Lazy = ql;
be.Memo = Kl;
be.Portal = vd;
be.Profiler = zl;
be.StrictMode = $l;
be.Suspense = Gl;
be.isAsyncMode = function(e) {
  return Vb(e) || Ot(e) === gd;
};
be.isConcurrentMode = Vb;
be.isContextConsumer = function(e) {
  return Ot(e) === Vl;
};
be.isContextProvider = function(e) {
  return Ot(e) === Hl;
};
be.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === hd;
};
be.isForwardRef = function(e) {
  return Ot(e) === Wl;
};
be.isFragment = function(e) {
  return Ot(e) === Bl;
};
be.isLazy = function(e) {
  return Ot(e) === ql;
};
be.isMemo = function(e) {
  return Ot(e) === Kl;
};
be.isPortal = function(e) {
  return Ot(e) === vd;
};
be.isProfiler = function(e) {
  return Ot(e) === zl;
};
be.isStrictMode = function(e) {
  return Ot(e) === $l;
};
be.isSuspense = function(e) {
  return Ot(e) === Gl;
};
be.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Bl || e === Ul || e === zl || e === $l || e === Gl || e === FS || typeof e == "object" && e !== null && (e.$$typeof === ql || e.$$typeof === Kl || e.$$typeof === Hl || e.$$typeof === Vl || e.$$typeof === Wl || e.$$typeof === LS || e.$$typeof === BS || e.$$typeof === $S || e.$$typeof === MS);
};
be.typeOf = Ot;
Hb.exports = be;
var zS = Hb.exports, Ub = zS, HS = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, VS = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Wb = {};
Wb[Ub.ForwardRef] = HS;
Wb[Ub.Memo] = VS;
var yd = typeof window < "u" && !window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = S.createContext(null)) : S.createContext(null);
yd.Consumer;
var US = yd.Provider, WS = US, GS = yd;
function $i() {
  var e = S.useContext(GS);
  return $b(e), e;
}
var ef;
(function(e) {
  e.formatDate = "FormattedDate", e.formatTime = "FormattedTime", e.formatNumber = "FormattedNumber", e.formatList = "FormattedList", e.formatDisplayName = "FormattedDisplayName";
})(ef || (ef = {}));
var tf;
(function(e) {
  e.formatDate = "FormattedDateParts", e.formatTime = "FormattedTimeParts", e.formatNumber = "FormattedNumberParts", e.formatList = "FormattedListParts";
})(tf || (tf = {}));
function Gb(e) {
  var t = function(n) {
    var r = $i(), i = n.value, a = n.children, o = wi(n, ["value", "children"]), s = typeof i == "string" ? new Date(i || 0) : i, l = e === "formatDate" ? r.formatDateToParts(s, o) : r.formatTimeToParts(s, o);
    return a(l);
  };
  return t.displayName = tf[e], t;
}
function jo(e) {
  var t = function(n) {
    var r = $i(), i = n.value, a = n.children, o = wi(
      n,
      ["value", "children"]
    ), s = r[e](i, o);
    if (typeof a == "function")
      return a(s);
    var l = r.textComponent || S.Fragment;
    return S.createElement(l, null, s);
  };
  return t.displayName = ef[e], t;
}
function Kb(e) {
  return e && Object.keys(e).reduce(function(t, n) {
    var r = e[n];
    return t[n] = Nb(r) ? DS(r) : r, t;
  }, {});
}
var sv = function(e, t, n, r) {
  for (var i = [], a = 4; a < arguments.length; a++)
    i[a - 4] = arguments[a];
  var o = Kb(r), s = Zc.apply(void 0, qe([
    e,
    t,
    n,
    o
  ], i, !1));
  return Array.isArray(s) ? S.Children.toArray(s) : s;
}, lv = function(e, t) {
  var n = e.defaultRichTextElements, r = wi(e, ["defaultRichTextElements"]), i = Kb(n), a = RS(J(J(J({}, zb), r), { defaultRichTextElements: i }), t), o = {
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
    formatMessage: sv.bind(
      null,
      o,
      // @ts-expect-error fix this
      a.formatters
    ),
    // @ts-expect-error fix this
    $t: sv.bind(null, o, a.formatters)
  });
};
function Hu(e) {
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
var KS = (
  /** @class */
  function(e) {
    Rt(t, e);
    function t() {
      var n = e !== null && e.apply(this, arguments) || this;
      return n.cache = Fb(), n.state = {
        cache: n.cache,
        intl: lv(Hu(n.props), n.cache),
        prevConfig: Hu(n.props)
      }, n;
    }
    return t.getDerivedStateFromProps = function(n, r) {
      var i = r.prevConfig, a = r.cache, o = Hu(n);
      return Jc(i, o) ? null : {
        intl: lv(o, a),
        prevConfig: o
      };
    }, t.prototype.render = function() {
      return $b(this.state.intl), S.createElement(WS, { value: this.state.intl }, this.props.children);
    }, t.displayName = "IntlProvider", t.defaultProps = zb, t;
  }(S.PureComponent)
);
function qS(e, t) {
  var n = e.values, r = wi(e, ["values"]), i = t.values, a = wi(t, ["values"]);
  return Jc(i, n) && Jc(r, a);
}
function qb(e) {
  var t = $i(), n = t.formatMessage, r = t.textComponent, i = r === void 0 ? S.Fragment : r, a = e.id, o = e.description, s = e.defaultMessage, l = e.values, u = e.children, c = e.tagName, d = c === void 0 ? i : c, p = e.ignoreTag, g = { id: a, description: o, defaultMessage: s }, x = n(g, l, {
    ignoreTag: p
  });
  return typeof u == "function" ? u(Array.isArray(x) ? x : [x]) : d ? S.createElement(d, null, S.Children.toArray(x)) : S.createElement(S.Fragment, null, x);
}
qb.displayName = "FormattedMessage";
var Ka = S.memo(qb, qS);
Ka.displayName = "MemoizedFormattedMessage";
jo("formatDate");
jo("formatTime");
jo("formatNumber");
jo("formatList");
jo("formatDisplayName");
Gb("formatDate");
Gb("formatTime");
var Yb = { exports: {} }, YS = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", XS = YS, QS = XS;
function Xb() {
}
function Qb() {
}
Qb.resetWarningCache = Xb;
var ZS = function() {
  function e(r, i, a, o, s, l) {
    if (l !== QS) {
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
    checkPropTypes: Qb,
    resetWarningCache: Xb
  };
  return n.PropTypes = n, n;
};
Yb.exports = ZS();
var JS = Yb.exports;
const f = /* @__PURE__ */ Oo(JS);
var Zb = { exports: {} };
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
})(Zb);
var eC = Zb.exports;
const q = /* @__PURE__ */ Oo(eC);
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
var bd = /* @__PURE__ */ y.createContext({});
bd.Consumer;
bd.Provider;
function Re(e, t) {
  var n = S.useContext(bd);
  return e || n[t] || t;
}
function tC() {
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
var nC = ["as", "disabled", "onKeyDown"];
function uv(e) {
  return !e || e.trim() === "#";
}
var xd = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.as, r = n === void 0 ? "a" : n, i = e.disabled, a = e.onKeyDown, o = ve(e, nC), s = function(c) {
    var d = o.href, p = o.onClick;
    if ((i || uv(d)) && c.preventDefault(), i) {
      c.stopPropagation();
      return;
    }
    p && p(c);
  }, l = function(c) {
    c.key === " " && (c.preventDefault(), s(c));
  };
  return uv(o.href) && (o.role = o.role || "button", o.href = o.href || "#"), i && (o.tabIndex = -1, o["aria-disabled"] = !0), /* @__PURE__ */ y.createElement(r, ne({
    ref: t
  }, o, {
    onClick: s,
    onKeyDown: tC(l, a)
  }));
});
xd.displayName = "SafeAnchor";
var rC = ["bsPrefix", "variant", "size", "active", "className", "block", "type", "as"], iC = {
  variant: "primary",
  active: !1,
  disabled: !1
}, wd = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.variant, i = e.size, a = e.active, o = e.className, s = e.block, l = e.type, u = e.as, c = ve(e, rC), d = Re(n, "btn"), p = q(o, d, a && "active", r && d + "-" + r, s && d + "-block", i && d + "-" + i);
  if (c.href)
    return /* @__PURE__ */ y.createElement(xd, ne({}, c, {
      as: u,
      ref: t,
      className: q(p, c.disabled && "disabled")
    }));
  t && (c.ref = t), l ? c.type = l : u || (c.type = "button");
  var g = u || "button";
  return /* @__PURE__ */ y.createElement(g, ne({}, c, {
    className: p
  }));
});
wd.displayName = "Button";
wd.defaultProps = iC;
var aC = ["children"];
function Oi(e) {
  "@babel/helpers - typeof";
  return Oi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Oi(e);
}
function oC(e, t) {
  if (e == null) return {};
  var n = sC(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function sC(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function lC(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function uC(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, tx(r.key), r);
  }
}
function cC(e, t, n) {
  return t && uC(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function fC(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && nf(e, t);
}
function nf(e, t) {
  return nf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, nf(e, t);
}
function pC(e) {
  var t = ex();
  return function() {
    var r = Xs(e), i;
    if (t) {
      var a = Xs(this).constructor;
      i = Reflect.construct(r, arguments, a);
    } else
      i = r.apply(this, arguments);
    return dC(this, i);
  };
}
function dC(e, t) {
  if (t && (Oi(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Jb(e);
}
function Jb(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ex() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (ex = function() {
    return !!e;
  })();
}
function Xs(e) {
  return Xs = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Xs(e);
}
function mC(e, t, n) {
  return t = tx(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function tx(e) {
  var t = hC(e, "string");
  return Oi(t) == "symbol" ? t : t + "";
}
function hC(e, t) {
  if (Oi(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Oi(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Mn = /* @__PURE__ */ function(e) {
  return e.MOVED = "MOVED", e.REMOVED = "REMOVED", e.FORMAT = "FORMAT", e.MOVED_AND_FORMAT = "MOVED_AND_FORMAT", e;
}({});
function Ed(e, t, n) {
  var r = /* @__PURE__ */ function(i) {
    fC(o, i);
    var a = pC(o);
    function o(s) {
      var l;
      return lC(this, o), l = a.call(this, s), l.transformProps = l.transformProps.bind(Jb(l)), l;
    }
    return cC(o, [{
      key: "warn",
      value: function(l) {
      }
    }, {
      key: "transformProps",
      value: function(l, u) {
        if (n[u] === void 0)
          return l[u] = this.props[u], l;
        var c = n[u], d = c.deprType, p = c.newName, g = c.expect, x = c.transform, w = c.message;
        switch (d) {
          case Mn.MOVED:
            this.warn("".concat(t, ": The prop '").concat(u, "' has been moved to '").concat(p, "'.")), l[p] = this.props[u];
            break;
          case Mn.REMOVED:
            this.warn("".concat(t, ": The prop '").concat(u, "' has been removed. '").concat(w, "'"));
            break;
          case Mn.FORMAT:
            g(this.props[u]) ? l[u] = this.props[u] : (this.warn("".concat(t, ": The prop '").concat(u, "' expects a new format. ").concat(w)), l[u] = x(this.props[u], this.props));
            break;
          case Mn.MOVED_AND_FORMAT:
            this.warn("".concat(t, ": The prop '").concat(u, "' has been moved to '").concat(p, "' and expects a new format. ").concat(w)), l[p] = x(this.props[u], this.props);
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
        var l = Object.keys(this.props).reduce(this.transformProps, {}), u = l.children, c = oC(l, aC);
        return /* @__PURE__ */ y.createElement(e, c, this.props.children || u);
      }
    }]), o;
  }(y.Component);
  return mC(r, "displayName", "withDeprecatedProps(".concat(t, ")")), r;
}
function Si(e) {
  "@babel/helpers - typeof";
  return Si = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Si(e);
}
var vC = ["buttonType", "className", "children", "isClose", "type", "inputRef"];
function rf() {
  return rf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, rf.apply(this, arguments);
}
function gC(e, t, n) {
  return t = nx(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function yC(e, t) {
  if (e == null) return {};
  var n = bC(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function bC(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function xC(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function wC(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, nx(r.key), r);
  }
}
function EC(e, t, n) {
  return t && wC(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function nx(e) {
  var t = OC(e, "string");
  return Si(t) == "symbol" ? t : t + "";
}
function OC(e, t) {
  if (Si(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Si(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function SC(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && af(e, t);
}
function af(e, t) {
  return af = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, af(e, t);
}
function CC(e) {
  var t = rx();
  return function() {
    var r = Qs(e), i;
    if (t) {
      var a = Qs(this).constructor;
      i = Reflect.construct(r, arguments, a);
    } else
      i = r.apply(this, arguments);
    return kC(this, i);
  };
}
function kC(e, t) {
  if (t && (Si(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return da(e);
}
function da(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function rx() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (rx = function() {
    return !!e;
  })();
}
function Qs(e) {
  return Qs = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Qs(e);
}
var Od = /* @__PURE__ */ function(e) {
  SC(n, e);
  var t = CC(n);
  function n(r) {
    var i;
    xC(this, n), i = t.call(this, r);
    var a = r.onBlur, o = r.onKeyDown;
    return i.onBlur = a.bind(da(i)), i.onKeyDown = o.bind(da(i)), i.onClick = i.onClick.bind(da(i)), i.setRefs = i.setRefs.bind(da(i)), i;
  }
  return EC(n, [{
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
      var c = yC(i, vC);
      return /* @__PURE__ */ y.createElement("button", rf({}, c, {
        className: q(["btn", o], gC({}, "btn-".concat(a), a !== void 0), {
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
}(y.Component), PC = {
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
Od.propTypes = PC;
Od.defaultProps = {
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
const _C = Ed(Od, "Button", {
  label: {
    deprType: Mn.MOVED,
    newName: "children"
  },
  className: {
    deprType: Mn.FORMAT,
    expect: function(t) {
      return typeof t == "string";
    },
    transform: function(t) {
      return Array.isArray(t) ? t.join(" ") : t;
    },
    message: "It should be a string."
  }
});
let cv = 0;
const Sd = (e = "id") => (cv += 1, `${e}${cv}`);
function qa(e) {
  "@babel/helpers - typeof";
  return qa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, qa(e);
}
var AC = ["src", "id", "className", "hidden", "screenReaderText", "svgAttrs", "size"];
function Zs() {
  return Zs = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Zs.apply(this, arguments);
}
function fv(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function TC(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? fv(Object(n), !0).forEach(function(r) {
      ix(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : fv(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function ix(e, t, n) {
  return t = IC(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function IC(e) {
  var t = jC(e, "string");
  return qa(t) == "symbol" ? t : t + "";
}
function jC(e, t) {
  if (qa(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (qa(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function NC(e, t) {
  if (e == null) return {};
  var n = RC(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function RC(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Cd(e) {
  var t = e.src, n = e.id, r = e.className, i = e.hidden, a = e.screenReaderText, o = e.svgAttrs, s = e.size, l = NC(e, AC);
  if (t) {
    var u = o["aria-label"] || o["aria-labelledby"], c = TC({}, o);
    return u || (c["aria-label"] = void 0, c["aria-hidden"] = !0), /* @__PURE__ */ y.createElement("span", Zs({
      className: q("pgn__icon", ix({}, "pgn__icon__".concat(s), !!s), r),
      id: n
    }, l), /* @__PURE__ */ y.createElement(t, Zs({
      role: "img",
      focusable: !1
    }, c)), a && /* @__PURE__ */ y.createElement("span", {
      className: "sr-only"
    }, a));
  }
  return /* @__PURE__ */ y.createElement(y.Fragment, null, /* @__PURE__ */ y.createElement("span", {
    id: n || Sd("Icon"),
    className: r,
    "aria-hidden": i
  }), a && /* @__PURE__ */ y.createElement("span", {
    className: "sr-only"
  }, a));
}
Cd.propTypes = {
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
Cd.defaultProps = {
  src: null,
  svgAttrs: {},
  id: void 0,
  hidden: !0,
  screenReaderText: void 0,
  size: void 0,
  className: void 0
};
const gn = Ed(Cd, "Icon", {
  className: {
    deprType: Mn.FORMAT,
    expect: function(t) {
      return typeof t == "string";
    },
    transform: function(t) {
      return Array.isArray(t) ? t.join(" ") : t;
    },
    message: "It should be a string."
  }
});
function Ya(e) {
  "@babel/helpers - typeof";
  return Ya = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ya(e);
}
var DC = ["children", "iconAfter", "iconBefore"];
function pv(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Js(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? pv(Object(n), !0).forEach(function(r) {
      FC(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : pv(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function FC(e, t, n) {
  return t = MC(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function MC(e) {
  var t = LC(e, "string");
  return Ya(t) == "symbol" ? t : t + "";
}
function LC(e, t) {
  if (Ya(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Ya(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function of() {
  return of = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, of.apply(this, arguments);
}
function BC(e, t) {
  if (e == null) return {};
  var n = $C(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function $C(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var yn = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.children, r = e.iconAfter, i = e.iconBefore, a = BC(e, DC);
  return /* @__PURE__ */ y.createElement(wd, of({}, a, {
    className: q(a.className),
    ref: t
  }), i && /* @__PURE__ */ y.createElement(gn, {
    className: "btn-icon-before",
    size: a.size,
    src: i
  }), n, r && /* @__PURE__ */ y.createElement(gn, {
    className: "btn-icon-after",
    size: a.size,
    src: r
  }));
});
yn.propTypes = Js(Js({}, yn.propTypes), {}, {
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
yn.defaultProps = Js(Js({}, yn.defaultProps), {}, {
  children: void 0,
  className: void 0,
  iconBefore: void 0,
  iconAfter: void 0,
  disabled: !1
});
yn.Deprecated = _C;
f.elementType, f.string, f.oneOf(["sm", "md", "lg"]), f.bool, f.bool, f.string;
f.string, f.string;
var dv = { exports: {} }, sf = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = n;
  function n(r) {
    function i(o, s, l, u, c, d) {
      var p = u || "<<anonymous>>", g = d || l;
      if (s[l] == null)
        return o ? new Error("Required " + c + " `" + g + "` was not specified " + ("in `" + p + "`.")) : null;
      for (var x = arguments.length, w = Array(x > 6 ? x - 6 : 0), h = 6; h < x; h++)
        w[h - 6] = arguments[h];
      return r.apply(void 0, [s, l, p, c, g].concat(w));
    }
    var a = i.bind(null, !1);
    return a.isRequired = i.bind(null, !0), a;
  }
  e.exports = t.default;
})(sf, sf.exports);
var zC = sf.exports;
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = a;
  var n = zC, r = i(n);
  function i(o) {
    return o && o.__esModule ? o : { default: o };
  }
  function a() {
    for (var o = arguments.length, s = Array(o), l = 0; l < o; l++)
      s[l] = arguments[l];
    function u() {
      for (var c = arguments.length, d = Array(c), p = 0; p < c; p++)
        d[p] = arguments[p];
      var g = null;
      return s.forEach(function(x) {
        if (g == null) {
          var w = x.apply(void 0, d);
          w != null && (g = w);
        }
      }), g;
    }
    return (0, r.default)(u);
  }
  e.exports = t.default;
})(dv, dv.exports);
var HC = ["as", "className", "type", "tooltip"], VC = {
  /**
   * Specify whether the feedback is for valid or invalid fields
   *
   * @type {('valid'|'invalid')}
   */
  type: f.string,
  /** Display feedback as a tooltip. */
  tooltip: f.bool,
  as: f.elementType
}, No = /* @__PURE__ */ y.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  function(e, t) {
    var n = e.as, r = n === void 0 ? "div" : n, i = e.className, a = e.type, o = a === void 0 ? "valid" : a, s = e.tooltip, l = s === void 0 ? !1 : s, u = ve(e, HC);
    return /* @__PURE__ */ y.createElement(r, ne({}, u, {
      ref: t,
      className: q(i, o + "-" + (l ? "tooltip" : "feedback"))
    }));
  }
);
No.displayName = "Feedback";
No.propTypes = VC;
var Ut = /* @__PURE__ */ y.createContext({
  controlId: void 0
}), UC = ["id", "bsPrefix", "bsCustomPrefix", "className", "type", "isValid", "isInvalid", "isStatic", "as"], kd = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.id, r = e.bsPrefix, i = e.bsCustomPrefix, a = e.className, o = e.type, s = o === void 0 ? "checkbox" : o, l = e.isValid, u = l === void 0 ? !1 : l, c = e.isInvalid, d = c === void 0 ? !1 : c, p = e.isStatic, g = e.as, x = g === void 0 ? "input" : g, w = ve(e, UC), h = S.useContext(Ut), m = h.controlId, v = h.custom, b = v ? [i, "custom-control-input"] : [r, "form-check-input"], E = b[0], C = b[1];
  return r = Re(E, C), /* @__PURE__ */ y.createElement(x, ne({}, w, {
    ref: t,
    type: s,
    id: n || m,
    className: q(a, r, u && "is-valid", d && "is-invalid", p && "position-static")
  }));
});
kd.displayName = "FormCheckInput";
var WC = ["bsPrefix", "bsCustomPrefix", "className", "htmlFor"], Pd = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.bsCustomPrefix, i = e.className, a = e.htmlFor, o = ve(e, WC), s = S.useContext(Ut), l = s.controlId, u = s.custom, c = u ? [r, "custom-control-label"] : [n, "form-check-label"], d = c[0], p = c[1];
  return n = Re(d, p), /* @__PURE__ */ y.createElement("label", ne({}, o, {
    ref: t,
    htmlFor: a || l,
    className: q(i, n)
  }));
});
Pd.displayName = "FormCheckLabel";
var GC = ["id", "bsPrefix", "bsCustomPrefix", "inline", "disabled", "isValid", "isInvalid", "feedbackTooltip", "feedback", "className", "style", "title", "type", "label", "children", "custom", "as"], Br = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.id, r = e.bsPrefix, i = e.bsCustomPrefix, a = e.inline, o = a === void 0 ? !1 : a, s = e.disabled, l = s === void 0 ? !1 : s, u = e.isValid, c = u === void 0 ? !1 : u, d = e.isInvalid, p = d === void 0 ? !1 : d, g = e.feedbackTooltip, x = g === void 0 ? !1 : g, w = e.feedback, h = e.className, m = e.style, v = e.title, b = v === void 0 ? "" : v, E = e.type, C = E === void 0 ? "checkbox" : E, k = e.label, P = e.children, N = e.custom, T = e.as, $ = T === void 0 ? "input" : T, Z = ve(e, GC), B = C === "switch" ? !0 : N, j = B ? [i, "custom-control"] : [r, "form-check"], M = j[0], L = j[1];
  r = Re(M, L);
  var I = S.useContext(Ut), _ = I.controlId, R = S.useMemo(function() {
    return {
      controlId: n || _,
      custom: B
    };
  }, [_, B, n]), D = B || k != null && k !== !1 && !P, H = /* @__PURE__ */ y.createElement(kd, ne({}, Z, {
    type: C === "switch" ? "checkbox" : C,
    ref: t,
    isValid: c,
    isInvalid: p,
    isStatic: !D,
    disabled: l,
    as: $
  }));
  return /* @__PURE__ */ y.createElement(Ut.Provider, {
    value: R
  }, /* @__PURE__ */ y.createElement("div", {
    style: m,
    className: q(h, r, B && "custom-" + C, o && r + "-inline")
  }, P || /* @__PURE__ */ y.createElement(y.Fragment, null, H, D && /* @__PURE__ */ y.createElement(Pd, {
    title: b
  }, k), (c || p) && /* @__PURE__ */ y.createElement(No, {
    type: c ? "valid" : "invalid",
    tooltip: x
  }, w))));
});
Br.displayName = "FormCheck";
Br.Input = kd;
Br.Label = Pd;
var KC = ["id", "bsPrefix", "bsCustomPrefix", "className", "isValid", "isInvalid", "lang", "as"], _d = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.id, r = e.bsPrefix, i = e.bsCustomPrefix, a = e.className, o = e.isValid, s = e.isInvalid, l = e.lang, u = e.as, c = u === void 0 ? "input" : u, d = ve(e, KC), p = S.useContext(Ut), g = p.controlId, x = p.custom, w = "file", h = x ? [i, "custom-file-input"] : [r, "form-control-file"], m = h[0], v = h[1];
  return r = Re(m, v), /* @__PURE__ */ y.createElement(c, ne({}, d, {
    ref: t,
    id: n || g,
    type: w,
    lang: l,
    className: q(a, r, o && "is-valid", s && "is-invalid")
  }));
});
_d.displayName = "FormFileInput";
var qC = ["bsPrefix", "bsCustomPrefix", "className", "htmlFor"], el = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.bsCustomPrefix, i = e.className, a = e.htmlFor, o = ve(e, qC), s = S.useContext(Ut), l = s.controlId, u = s.custom, c = u ? [r, "custom-file-label"] : [n, "form-file-label"], d = c[0], p = c[1];
  return n = Re(d, p), /* @__PURE__ */ y.createElement("label", ne({}, o, {
    ref: t,
    htmlFor: a || l,
    className: q(i, n),
    "data-browse": o["data-browse"]
  }));
});
el.displayName = "FormFileLabel";
var YC = ["id", "bsPrefix", "bsCustomPrefix", "disabled", "isValid", "isInvalid", "feedbackTooltip", "feedback", "className", "style", "label", "children", "custom", "lang", "data-browse", "as", "inputAs"], Yl = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.id, r = e.bsPrefix, i = e.bsCustomPrefix, a = e.disabled, o = a === void 0 ? !1 : a, s = e.isValid, l = s === void 0 ? !1 : s, u = e.isInvalid, c = u === void 0 ? !1 : u, d = e.feedbackTooltip, p = d === void 0 ? !1 : d, g = e.feedback, x = e.className, w = e.style, h = e.label, m = e.children, v = e.custom, b = e.lang, E = e["data-browse"], C = e.as, k = C === void 0 ? "div" : C, P = e.inputAs, N = P === void 0 ? "input" : P, T = ve(e, YC), $ = v ? [i, "custom"] : [r, "form-file"], Z = $[0], B = $[1];
  r = Re(Z, B);
  var j = "file", M = S.useContext(Ut), L = M.controlId, I = S.useMemo(function() {
    return {
      controlId: n || L,
      custom: v
    };
  }, [L, v, n]), _ = h != null && h !== !1 && !m, R = /* @__PURE__ */ y.createElement(_d, ne({}, T, {
    ref: t,
    isValid: l,
    isInvalid: c,
    disabled: o,
    as: N,
    lang: b
  }));
  return /* @__PURE__ */ y.createElement(Ut.Provider, {
    value: I
  }, /* @__PURE__ */ y.createElement(k, {
    style: w,
    className: q(x, r, v && "custom-" + j)
  }, m || /* @__PURE__ */ y.createElement(y.Fragment, null, v ? /* @__PURE__ */ y.createElement(y.Fragment, null, R, _ && /* @__PURE__ */ y.createElement(el, {
    "data-browse": E
  }, h)) : /* @__PURE__ */ y.createElement(y.Fragment, null, _ && /* @__PURE__ */ y.createElement(el, null, h), R), (l || c) && /* @__PURE__ */ y.createElement(No, {
    type: l ? "valid" : "invalid",
    tooltip: p
  }, g))));
});
Yl.displayName = "FormFile";
Yl.Input = _d;
Yl.Label = el;
var XC = function() {
}, QC = XC;
const ZC = /* @__PURE__ */ Oo(QC);
var JC = ["bsPrefix", "bsCustomPrefix", "type", "size", "htmlSize", "id", "className", "isValid", "isInvalid", "plaintext", "readOnly", "custom", "as"], ax = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.bsCustomPrefix, i = e.type, a = e.size, o = e.htmlSize, s = e.id, l = e.className, u = e.isValid, c = u === void 0 ? !1 : u, d = e.isInvalid, p = d === void 0 ? !1 : d, g = e.plaintext, x = e.readOnly, w = e.custom, h = e.as, m = h === void 0 ? "input" : h, v = ve(e, JC), b = S.useContext(Ut), E = b.controlId, C = w ? [r, "custom"] : [n, "form-control"], k = C[0], P = C[1];
  n = Re(k, P);
  var N;
  if (g) {
    var T;
    N = (T = {}, T[n + "-plaintext"] = !0, T);
  } else if (i === "file") {
    var $;
    N = ($ = {}, $[n + "-file"] = !0, $);
  } else if (i === "range") {
    var Z;
    N = (Z = {}, Z[n + "-range"] = !0, Z);
  } else if (m === "select" && w) {
    var B;
    N = (B = {}, B[n + "-select"] = !0, B[n + "-select-" + a] = a, B);
  } else {
    var j;
    N = (j = {}, j[n] = !0, j[n + "-" + a] = a, j);
  }
  return /* @__PURE__ */ y.createElement(m, ne({}, v, {
    type: i,
    size: o,
    ref: t,
    readOnly: x,
    id: s || E,
    className: q(l, N, c && "is-valid", p && "is-invalid")
  }));
});
ax.displayName = "FormControl";
const ox = Object.assign(ax, {
  Feedback: No
});
var ek = ["bsPrefix", "className", "children", "controlId", "as"], sx = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.className, i = e.children, a = e.controlId, o = e.as, s = o === void 0 ? "div" : o, l = ve(e, ek);
  n = Re(n, "form-group");
  var u = S.useMemo(function() {
    return {
      controlId: a
    };
  }, [a]);
  return /* @__PURE__ */ y.createElement(Ut.Provider, {
    value: u
  }, /* @__PURE__ */ y.createElement(s, ne({}, l, {
    ref: t,
    className: q(r, n)
  }), i));
});
sx.displayName = "FormGroup";
var tk = ["bsPrefix", "className", "as"], nk = ["xl", "lg", "md", "sm", "xs"], lx = /* @__PURE__ */ y.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  function(e, t) {
    var n = e.bsPrefix, r = e.className, i = e.as, a = i === void 0 ? "div" : i, o = ve(e, tk), s = Re(n, "col"), l = [], u = [];
    return nk.forEach(function(c) {
      var d = o[c];
      delete o[c];
      var p, g, x;
      if (typeof d == "object" && d != null) {
        var w = d.span;
        p = w === void 0 ? !0 : w, g = d.offset, x = d.order;
      } else
        p = d;
      var h = c !== "xs" ? "-" + c : "";
      p && l.push(p === !0 ? "" + s + h : "" + s + h + "-" + p), x != null && u.push("order" + h + "-" + x), g != null && u.push("offset" + h + "-" + g);
    }), l.length || l.push(s), /* @__PURE__ */ y.createElement(a, ne({}, o, {
      ref: t,
      className: q.apply(void 0, [r].concat(l, u))
    }));
  }
);
lx.displayName = "Col";
var rk = ["as", "bsPrefix", "column", "srOnly", "className", "htmlFor"], ik = {
  column: !1,
  srOnly: !1
}, Ad = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.as, r = n === void 0 ? "label" : n, i = e.bsPrefix, a = e.column, o = e.srOnly, s = e.className, l = e.htmlFor, u = ve(e, rk), c = S.useContext(Ut), d = c.controlId;
  i = Re(i, "form-label");
  var p = "col-form-label";
  typeof a == "string" && (p = p + " " + p + "-" + a);
  var g = q(s, i, o && "sr-only", a && p);
  return l = l || d, a ? /* @__PURE__ */ y.createElement(lx, ne({
    ref: t,
    as: "label",
    className: g,
    htmlFor: l
  }, u)) : (
    // eslint-disable-next-line jsx-a11y/label-has-for, jsx-a11y/label-has-associated-control
    /* @__PURE__ */ y.createElement(r, ne({
      ref: t,
      className: g,
      htmlFor: l
    }, u))
  );
});
Ad.displayName = "FormLabel";
Ad.defaultProps = ik;
var ak = ["bsPrefix", "className", "as", "muted"], ux = /* @__PURE__ */ y.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  function(e, t) {
    var n = e.bsPrefix, r = e.className, i = e.as, a = i === void 0 ? "small" : i, o = e.muted, s = ve(e, ak);
    return n = Re(n, "form-text"), /* @__PURE__ */ y.createElement(a, ne({}, s, {
      ref: t,
      className: q(r, n, o && "text-muted")
    }));
  }
);
ux.displayName = "FormText";
var Xl = /* @__PURE__ */ y.forwardRef(function(e, t) {
  return /* @__PURE__ */ y.createElement(Br, ne({}, e, {
    ref: t,
    type: "switch"
  }));
});
Xl.displayName = "Switch";
Xl.Input = Br.Input;
Xl.Label = Br.Label;
var ok = /-(.)/g;
function sk(e) {
  return e.replace(ok, function(t, n) {
    return n.toUpperCase();
  });
}
var lk = ["className", "bsPrefix", "as"], uk = function(t) {
  return t[0].toUpperCase() + sk(t).slice(1);
};
function Wt(e, t) {
  var n = t === void 0 ? {} : t, r = n.displayName, i = r === void 0 ? uk(e) : r, a = n.Component, o = n.defaultProps, s = /* @__PURE__ */ y.forwardRef(function(l, u) {
    var c = l.className, d = l.bsPrefix, p = l.as, g = p === void 0 ? a || "div" : p, x = ve(l, lk), w = Re(d, e);
    return /* @__PURE__ */ y.createElement(g, ne({
      ref: u,
      className: q(c, w)
    }, x));
  });
  return s.defaultProps = o, s.displayName = i, s;
}
var ck = ["bsPrefix", "inline", "className", "validated", "as"], fk = Wt("form-row"), pk = {
  inline: !1
}, se = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.inline, i = e.className, a = e.validated, o = e.as, s = o === void 0 ? "form" : o, l = ve(e, ck);
  return n = Re(n, "form"), /* @__PURE__ */ y.createElement(s, ne({}, l, {
    ref: t,
    className: q(i, a && "was-validated", r && n + "-inline")
  }));
});
se.displayName = "Form";
se.defaultProps = pk;
se.Row = fk;
se.Group = sx;
se.Control = ox;
se.Check = Br;
se.File = Yl;
se.Switch = Xl;
se.Label = Ad;
se.Text = ux;
function Kn(e) {
  return typeof e == "string" || e instanceof String;
}
function mv(e) {
  var t;
  return typeof e == "object" && e != null && (e == null || (t = e.constructor) == null ? void 0 : t.name) === "Object";
}
function cx(e, t) {
  return Array.isArray(t) ? cx(e, (n, r) => t.includes(r)) : Object.entries(e).reduce((n, r) => {
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
function dk(e) {
  switch (e) {
    case te.LEFT:
      return te.FORCE_LEFT;
    case te.RIGHT:
      return te.FORCE_RIGHT;
    default:
      return e;
  }
}
function Vu(e) {
  return e.replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1");
}
function tl(e, t) {
  if (t === e) return !0;
  const n = Array.isArray(t), r = Array.isArray(e);
  let i;
  if (n && r) {
    if (t.length != e.length) return !1;
    for (i = 0; i < t.length; i++) if (!tl(t[i], e[i])) return !1;
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
    for (i = 0; i < u.length; i++) if (!tl(e[u[i]], t[u[i]])) return !1;
    return !0;
  } else if (t && e && typeof t == "function" && typeof e == "function")
    return t.toString() === e.toString();
  return !1;
}
class mk {
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
function le(e, t) {
  return new le.InputMask(e, t);
}
function fx(e) {
  if (e == null) throw new Error("mask property should be defined");
  return e instanceof RegExp ? le.MaskedRegExp : Kn(e) ? le.MaskedPattern : e === Date ? le.MaskedDate : e === Number ? le.MaskedNumber : Array.isArray(e) || e === Array ? le.MaskedDynamic : le.Masked && e.prototype instanceof le.Masked ? e : le.Masked && e instanceof le.Masked ? e.constructor : e instanceof Function ? le.MaskedFunction : (console.warn("Mask not found for mask", e), le.Masked);
}
function Xa(e) {
  if (!e) throw new Error("Options in not defined");
  if (le.Masked) {
    if (e.prototype instanceof le.Masked) return {
      mask: e
    };
    const {
      mask: t = void 0,
      ...n
    } = e instanceof le.Masked ? {
      mask: e
    } : mv(e) && e.mask instanceof le.Masked ? e : {};
    if (t) {
      const r = t.mask;
      return {
        ...cx(t, (i, a) => !a.startsWith("_")),
        mask: t.constructor,
        _mask: r,
        ...n
      };
    }
  }
  return mv(e) ? {
    ...e
  } : {
    mask: e
  };
}
function bn(e) {
  if (le.Masked && e instanceof le.Masked) return e;
  const t = Xa(e), n = fx(t.mask);
  if (!n) throw new Error("Masked class is not found for provided mask " + t.mask + ", appropriate module needs to be imported manually before creating mask.");
  return t.mask === n && delete t.mask, t._mask && (t.mask = t._mask, delete t._mask), new n(t);
}
le.createMask = bn;
class Td {
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
le.MaskElement = Td;
const hv = 90, hk = 89;
class Ql extends Td {
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
    if (this._handlers.redo && (t.keyCode === hv && t.shiftKey && (t.metaKey || t.ctrlKey) || t.keyCode === hk && t.ctrlKey))
      return t.preventDefault(), this._handlers.redo(t);
    if (this._handlers.undo && t.keyCode === hv && (t.metaKey || t.ctrlKey))
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
le.HTMLMaskElement = Ql;
class vk extends Ql {
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
le.HTMLMaskElement = Ql;
class px extends Ql {
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
le.HTMLContenteditableMaskElement = px;
class Zl {
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
    this.currentIndex < this.states.length - 1 && (this.states.length = this.currentIndex + 1), this.states.push(t), this.states.length > Zl.MAX_LENGTH && this.states.shift(), this.currentIndex = this.states.length - 1;
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
Zl.MAX_LENGTH = 100;
class gk {
  /**
    View element
  */
  /** Internal {@link Masked} model */
  constructor(t, n) {
    this.el = t instanceof Td ? t : t.isContentEditable && t.tagName !== "INPUT" && t.tagName !== "TEXTAREA" ? new px(t) : new vk(t), this.masked = bn(n), this._listeners = {}, this._value = "", this._unmaskedValue = "", this._rawInputValue = "", this.history = new Zl(), this._saveSelection = this._saveSelection.bind(this), this._onInput = this._onInput.bind(this), this._onChange = this._onChange.bind(this), this._onDrop = this._onDrop.bind(this), this._onFocus = this._onFocus.bind(this), this._onClick = this._onClick.bind(this), this._onUndo = this._onUndo.bind(this), this._onRedo = this._onRedo.bind(this), this.alignCursor = this.alignCursor.bind(this), this.alignCursorFriendly = this.alignCursorFriendly.bind(this), this._bindEvents(), this.updateValue(), this._onChange();
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
    if (!(t instanceof le.Masked) && this.masked.constructor === fx(t)) {
      this.masked.updateOptions({
        mask: t
      });
      return;
    }
    const n = t instanceof le.Masked ? t : bn({
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
    const n = new mk({
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
le.InputMask = gk;
class ce {
  /** Inserted symbols */
  /** Additional offset if any changes occurred before tail */
  /** Raw inserted is used by dynamic mask */
  /** Can skip chars */
  static normalize(t) {
    return Array.isArray(t) ? t : [t, new ce()];
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
le.ChangeDetails = ce;
class Qt {
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
class tt {
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
      ...tt.DEFAULTS,
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
    return t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length), new Qt(this.extractInput(t, n), t);
  }
  /** Appends tail */
  appendTail(t) {
    return Kn(t) && (t = new Qt(String(t))), t.appendTo(this);
  }
  /** Appends char */
  _appendCharRaw(t, n) {
    return t ? (this._value += t, new ce({
      inserted: t,
      rawInserted: t
    })) : new ce();
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
      s || (a = new ce(), this.state = i, r && o && (r.state = o));
    }
    return a;
  }
  /** Appends optional placeholder at the end */
  _appendPlaceholder() {
    return new ce();
  }
  /** Appends optional eager placeholder at the end */
  _appendEager() {
    return new ce();
  }
  /** Appends symbols considering flags */
  append(t, n, r) {
    if (!Kn(t)) throw new Error("value should be string");
    const i = Kn(r) ? new Qt(String(r)) : r;
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
    return t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length), this._value = this.displayValue.slice(0, t) + this.displayValue.slice(n), new ce();
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
    return n === void 0 && (n = {}), ce.normalize(this.prepare ? this.prepare(t, this, n) : t);
  }
  /** Prepares each char before mask processing */
  doPrepareChar(t, n) {
    return n === void 0 && (n = {}), ce.normalize(this.prepareChar ? this.prepareChar(t, this, n) : t);
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
    l && (i = dk(i), u = this.extractInput(0, o, {
      raw: !0
    }));
    let c = t;
    const d = new ce();
    if (i !== te.NONE && (c = this.nearestInputPos(t, n > 1 && t !== 0 && !l ? te.NONE : i), d.tailShift = c - t), d.aggregate(this.remove(c)), l && i !== te.NONE && u === this.rawInputValue)
      if (i === te.FORCE_LEFT) {
        let p;
        for (; u === this.rawInputValue && (p = this.displayValue.length); )
          d.aggregate(new ce({
            tailShift: -1
          })).aggregate(this.remove(p - 1));
      } else i === te.FORCE_RIGHT && s.unshift();
    return d.aggregate(this.append(r, a, s));
  }
  maskEquals(t) {
    return this.mask === t;
  }
  optionsIsChanged(t) {
    return !tl(this, t);
  }
  typedValueEquals(t) {
    const n = this.typedValue;
    return t === n || tt.EMPTY_VALUES.includes(t) && tt.EMPTY_VALUES.includes(n) || (this.format ? this.format(t, this) === this.format(this.typedValue, this) : !1);
  }
  pad(t) {
    return new ce();
  }
}
tt.DEFAULTS = {
  skipInvalid: !0
};
tt.EMPTY_VALUES = [void 0, null, ""];
le.Masked = tt;
class wr {
  /** */
  constructor(t, n) {
    t === void 0 && (t = []), n === void 0 && (n = 0), this.chunks = t, this.from = n;
  }
  toString() {
    return this.chunks.map(String).join("");
  }
  extend(t) {
    if (!String(t)) return;
    t = Kn(t) ? new Qt(String(t)) : t;
    const n = this.chunks[this.chunks.length - 1], r = n && // if stops are same or tail has no stop
    (n.stop === t.stop || t.stop == null) && // if tail chunk goes just after last chunk
    t.from === n.from + n.toString().length;
    if (t instanceof Qt)
      r ? n.extend(t.toString()) : this.chunks.push(t);
    else if (t instanceof wr) {
      if (t.stop == null) {
        let i;
        for (; t.chunks.length && t.chunks[0].stop == null; )
          i = t.chunks.shift(), i.from += t.from, this.extend(i);
      }
      t.toString() && (t.stop = t.blockIndex, this.chunks.push(t));
    }
  }
  appendTo(t) {
    if (!(t instanceof le.MaskedPattern))
      return new Qt(this.toString()).appendTo(t);
    const n = new ce();
    for (let r = 0; r < this.chunks.length; ++r) {
      const i = this.chunks[r], a = t._mapPosToBlock(t.displayValue.length), o = i.stop;
      let s;
      if (o != null && // if block not found or stop is behind lastBlock
      (!a || a.index <= o) && ((i instanceof wr || // for continuous block also check if stop is exist
      t._stops.indexOf(o) >= 0) && n.aggregate(t._appendPlaceholder(o)), s = i instanceof wr && t._blocks[o]), s) {
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
      const a = "chunks" in i ? new wr() : new Qt();
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
class yk {
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
class dx {
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
    return t === void 0 && (t = 0), n === void 0 && (n = this._value.length), this._value = this._value.slice(0, t) + this._value.slice(n), this._value || (this._isRawInput = !1), new ce();
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
    if (n === void 0 && (n = {}), this.isFilled) return new ce();
    const r = this.eager === !0 || this.eager === "append", a = this.char === t && (this.isUnmasking || n.input || n.raw) && (!n.raw || !r) && !n.tail, o = new ce({
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
    const t = new ce();
    return this.isFilled || (this._value = t.inserted = this.char), t;
  }
  extractTail() {
    return new Qt("");
  }
  appendTail(t) {
    return Kn(t) && (t = new Qt(String(t))), t.appendTo(this);
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
class nl {
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
    this.masked = bn(l), Object.assign(this, {
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
    return t === void 0 && (t = 0), n === void 0 && (n = this.value.length), t === 0 && n >= 1 ? (this.isFilled = !1, this.masked.remove(t, n)) : new ce();
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
    if (n === void 0 && (n = {}), this.isFilled) return new ce();
    const r = this.masked.state;
    let i = this.masked._appendChar(t, this.currentMaskFlags(n));
    return i.inserted && this.doValidate(n) === !1 && (i = new ce(), this.masked.state = r), !i.inserted && !this.isOptional && !this.lazy && !n.input && (i.inserted = this.placeholderChar), i.skip = !i.inserted && !this.isOptional, this.isFilled = !!i.inserted, i;
  }
  append(t, n, r) {
    return this.masked.append(t, this.currentMaskFlags(n), r);
  }
  _appendPlaceholder() {
    return this.isFilled || this.isOptional ? new ce() : (this.isFilled = !0, new ce({
      inserted: this.placeholderChar
    }));
  }
  _appendEager() {
    return new ce();
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
    return new ce();
  }
}
nl.DEFAULT_DEFINITIONS = {
  0: /\d/,
  a: /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
  // http://stackoverflow.com/a/22075070
  "*": /./
};
class bk extends tt {
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
le.MaskedRegExp = bk;
class nt extends tt {
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
      ...nt.DEFAULTS,
      ...t,
      definitions: Object.assign({}, nl.DEFAULT_DEFINITIONS, t == null ? void 0 : t.definitions)
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
        c.sort((p, g) => g.length - p.length);
        const d = c[0];
        if (d) {
          const {
            expose: p,
            repeat: g,
            ...x
          } = Xa(this.blocks[d]), w = {
            lazy: this.lazy,
            eager: this.eager,
            placeholderChar: this.placeholderChar,
            displayChar: this.displayChar,
            overwrite: this.overwrite,
            autofix: this.autofix,
            ...x,
            repeat: g,
            parent: this
          }, h = g != null ? new le.RepeatBlock(
            w
            /* TODO */
          ) : bn(w);
          h && (this._blocks.push(h), p && (this.exposeBlock = h), this._maskedBlocks[d] || (this._maskedBlocks[d] = []), this._maskedBlocks[d].push(this._blocks.length - 1)), a += d.length - 1;
          continue;
        }
      }
      let o = n[a], s = o in t;
      if (o === nt.STOP_CHAR) {
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
      if (o === nt.ESCAPE_CHAR) {
        if (++a, o = n[a], !o) break;
        s = !1;
      }
      const l = s ? new nl({
        isOptional: i,
        lazy: this.lazy,
        eager: this.eager,
        placeholderChar: this.placeholderChar,
        displayChar: this.displayChar,
        ...Xa(t[o]),
        parent: this
      }) : new dx({
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
    const n = new ce();
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
    const r = this._mapPosToBlock(this.displayValue.length), i = new ce();
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
    const r = new wr();
    return t === n || this._forEachBlocksInRange(t, n, (i, a, o, s) => {
      const l = i.extractTail(o, s);
      l.stop = this._findStopBefore(a), l.from = this._blockStartPos(a), l instanceof wr && (l.blockIndex = a), r.extend(l);
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
    const n = new ce();
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
    const r = new yk(this, t);
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
    const n = new ce();
    return this._forEachBlocksInRange(0, this.displayValue.length, (r) => n.aggregate(r.pad(t))), n;
  }
}
nt.DEFAULTS = {
  ...tt.DEFAULTS,
  lazy: !0,
  placeholderChar: "_"
};
nt.STOP_CHAR = "`";
nt.ESCAPE_CHAR = "\\";
nt.InputDefinition = nl;
nt.FixedDefinition = dx;
le.MaskedPattern = nt;
class Es extends nt {
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
    const n = new ce();
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
le.MaskedRange = Es;
const xk = "d{.}`m{.}`Y";
class pn extends nt {
  static extractPatternOptions(t) {
    const {
      mask: n,
      pattern: r,
      ...i
    } = t;
    return {
      ...i,
      mask: Kn(n) ? n : r
    };
  }
  /** Pattern mask for date according to {@link MaskedDate#format} */
  /** Start date */
  /** End date */
  /** Format typed value to string */
  /** Parse string to get typed value */
  constructor(t) {
    super(pn.extractPatternOptions({
      ...pn.DEFAULTS,
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
      ...pn.DEFAULTS,
      ...t
    }, o = Object.assign({}, pn.GET_DEFAULT_BLOCKS());
    t.min && (o.Y.from = t.min.getFullYear()), t.max && (o.Y.to = t.max.getFullYear()), t.min && t.max && o.Y.from === o.Y.to && (o.m.from = t.min.getMonth() + 1, o.m.to = t.max.getMonth() + 1, o.m.from === o.m.to && (o.d.from = t.min.getDate(), o.d.to = t.max.getDate())), Object.assign(o, this.blocks, i), super._update({
      ...a,
      mask: Kn(n) ? n : r,
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
    return super.optionsIsChanged(pn.extractPatternOptions(t));
  }
}
pn.GET_DEFAULT_BLOCKS = () => ({
  d: {
    mask: Es,
    from: 1,
    to: 31,
    maxLength: 2
  },
  m: {
    mask: Es,
    from: 1,
    to: 12,
    maxLength: 2
  },
  Y: {
    mask: Es,
    from: 1900,
    to: 9999
  }
});
pn.DEFAULTS = {
  ...nt.DEFAULTS,
  mask: Date,
  pattern: xk,
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
le.MaskedDate = pn;
class Jl extends tt {
  constructor(t) {
    super({
      ...Jl.DEFAULTS,
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
      } = Xa(n), a = bn({
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
    const i = n.tail && n._beforeTailState != null ? n._beforeTailState._value : this.value, a = this.rawInputValue, o = n.tail && n._beforeTailState != null ? n._beforeTailState._rawInputValue : a, s = a.slice(o.length), l = this.currentMask, u = new ce(), c = l == null ? void 0 : l.state;
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
    const n = new ce();
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
    const r = new ce();
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
      return tl(n, a) && n.maskEquals(i);
    }) : super.maskEquals(t);
  }
  typedValueEquals(t) {
    var n;
    return !!((n = this.currentMask) != null && n.typedValueEquals(t));
  }
}
Jl.DEFAULTS = {
  ...tt.DEFAULTS,
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
le.MaskedDynamic = Jl;
class eu extends nt {
  constructor(t) {
    super({
      ...eu.DEFAULTS,
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
    return new ce({
      skip: !this.isComplete
    });
  }
  extractTail(t, n) {
    return t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length), new Qt("", t);
  }
  remove(t, n) {
    if (t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length), t === n) return new ce();
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
eu.DEFAULTS = {
  ...nt.DEFAULTS,
  matchValue: (e, t, n) => e.indexOf(t, n) === n
};
le.MaskedEnum = eu;
class wk extends tt {
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
le.MaskedFunction = wk;
var mx;
class yt extends tt {
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
      ...yt.DEFAULTS,
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
    const t = "^" + (this.allowNegative ? "[+|\\-]?" : ""), n = "\\d*", r = (this.scale ? "(" + Vu(this.radix) + "\\d{0," + this.scale + "})?" : "") + "$";
    this._numberRegExp = new RegExp(t + n + r), this._mapToRadixRegExp = new RegExp("[" + this.mapToRadix.map(Vu).join("") + "]", "g"), this._thousandsSeparatorRegExp = new RegExp(Vu(this.thousandsSeparator), "g");
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
      this.min != null && this.min < 0 && this.number < this.min && (p = this.min), this.max != null && this.max > 0 && this.number > this.max && (p = this.max), p != null && (this.autofix ? (this._value = this.format(p, this).replace(yt.UNMASKED_RADIX, this.radix), l || (l = a === this._value && !n.tail)) : s = !1), s && (s = !!this._value.match(this._numberRegExp));
    }
    let u;
    s ? u = new ce({
      inserted: this._value.slice(a.length),
      rawInserted: l ? "" : t,
      skip: l
    }) : (this._value = a, u = new ce()), this._value = this._insertThousandsSeparators(this._value);
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
    return new ce({
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
    const i = this.scale === 0 && t !== this.thousandsSeparator && (t === this.radix || t === yt.UNMASKED_RADIX || this.mapToRadix.includes(t));
    return super.doSkipInvalid(t, n, r) && !i;
  }
  get unmaskedValue() {
    return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, yt.UNMASKED_RADIX);
  }
  set unmaskedValue(t) {
    super.unmaskedValue = t;
  }
  get typedValue() {
    return this.parse(this.unmaskedValue, this);
  }
  set typedValue(t) {
    this.rawInputValue = this.format(t, this).replace(yt.UNMASKED_RADIX, this.radix);
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
    return (super.typedValueEquals(t) || yt.EMPTY_VALUES.includes(t) && yt.EMPTY_VALUES.includes(this.typedValue)) && !(t === 0 && this.value === "");
  }
}
mx = yt;
yt.UNMASKED_RADIX = ".";
yt.EMPTY_VALUES = [...tt.EMPTY_VALUES, 0];
yt.DEFAULTS = {
  ...tt.DEFAULTS,
  mask: Number,
  radix: ",",
  thousandsSeparator: "",
  mapToRadix: [mx.UNMASKED_RADIX],
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
le.MaskedNumber = yt;
const lf = {
  MASKED: "value",
  UNMASKED: "unmaskedValue",
  TYPED: "typedValue"
};
function hx(e, t, n) {
  t === void 0 && (t = lf.MASKED), n === void 0 && (n = lf.MASKED);
  const r = bn(e);
  return (i) => r.runIsolated((a) => (a[t] = i, a[n]));
}
function Ek(e, t, n, r) {
  return hx(t, n, r)(e);
}
le.PIPE_TYPE = lf;
le.createPipe = hx;
le.pipe = Ek;
class Ok extends nt {
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
    } = Xa(t);
    this._blockOpts = Object.assign({}, this._blockOpts, o);
    const s = bn(this._blockOpts);
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
      return this._blocks.push(bn(this._blockOpts)), this.mask += "m", this._blocks[this._blocks.length - 1];
  }
  _appendCharRaw(t, n) {
    n === void 0 && (n = {});
    const r = new ce();
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
le.RepeatBlock = Ok;
try {
  globalThis.IMask = le;
} catch {
}
const vx = {
  // common
  mask: f.oneOfType([f.array, f.func, f.string, f.instanceOf(RegExp), f.oneOf([Date, Number, le.Masked]), f.instanceOf(le.Masked)]),
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
}, gx = Object.keys(vx).filter((e) => e !== "value"), Sk = ["value", "unmask", "onAccept", "onComplete", "inputRef"], Ck = gx.filter((e) => Sk.indexOf(e) < 0);
function kk(e) {
  var t;
  const n = (t = class extends y.Component {
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
      a === void 0 && (a = this._extractMaskOptionsFromProps(this.props)), this.maskRef = le(this.element, a).on("accept", this._onAccept.bind(this)).on("complete", this._onComplete.bind(this)), "value" in this.props && this.props.value !== void 0 && (this.maskValue = this.props.value);
    }
    destroyMask() {
      this.maskRef && (this.maskRef.destroy(), delete this.maskRef);
    }
    _extractMaskOptionsFromProps(a) {
      const {
        ...o
      } = a;
      return Object.keys(o).filter((s) => Ck.indexOf(s) < 0).forEach((s) => {
        delete o[s];
      }), o;
    }
    _extractNonMaskProps(a) {
      const {
        ...o
      } = a;
      return gx.forEach((s) => {
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
      return y.createElement(e, {
        ...this._extractNonMaskProps(this.props),
        inputRef: this._inputRef
      });
    }
  }, t.displayName = void 0, t.propTypes = void 0, t), r = e.displayName || e.name || "Component";
  return n.displayName = "IMask(" + r + ")", n.propTypes = vx, y.forwardRef((i, a) => y.createElement(n, {
    ...i,
    ref: a
  }));
}
const Pk = kk((e) => {
  let {
    inputRef: t,
    ...n
  } = e;
  return y.createElement("input", {
    ...n,
    ref: t
  });
}), _k = (e, t) => y.createElement(Pk, {
  ...e,
  ref: t
}), Ak = y.forwardRef(_k), Tk = (e = {}) => Object.entries(e).reduce((t, [n, r]) => (r !== void 0 && (t[n] = r), t), {}), Sr = (...e) => (n) => {
  e.filter((r) => typeof r == "function").forEach((r) => r(n));
}, Ik = ({ defaultValue: e, value: t }) => {
  const [n, r] = S.useState(!!e || e === 0);
  return [!!t || t === 0 || n, (o) => r(o.target.value)];
}, vv = (e, t) => {
  const [n, r] = S.useState([]), i = (l) => (r((u) => [...u, l]), l), a = () => {
    const l = Sd(`${e}-`);
    return i(l);
  }, o = (l) => {
    r((u) => u.filter((c) => c !== l));
  };
  return [n, (l) => {
    const [u, c] = S.useState(l);
    return S.useEffect(() => (l ? i(l) : u || c(a()), () => o(u)), [u, l]), u;
  }];
}, Jn = {
  SMALL: "sm",
  LARGE: "lg"
}, Ht = {
  DEFAULT: "default",
  VALID: "valid",
  INVALID: "invalid",
  WARNING: "warning",
  CRITERIA_EMPTY: "criteria-empty",
  CRITERIA_VALID: "criteria-valid",
  CRITERIA_INVALID: "criteria-invalid"
};
function Qa(e) {
  "@babel/helpers - typeof";
  return Qa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Qa(e);
}
function gv(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function An(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? gv(Object(n), !0).forEach(function(r) {
      jk(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : gv(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function jk(e, t, n) {
  return t = Nk(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Nk(e) {
  var t = Rk(e, "string");
  return Qa(t) == "symbol" ? t : t + "";
}
function Rk(e, t) {
  if (Qa(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Qa(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Os(e, t) {
  return Lk(e) || Mk(e, t) || Fk(e, t) || Dk();
}
function Dk() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Fk(e, t) {
  if (e) {
    if (typeof e == "string") return yv(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return yv(e, t);
  }
}
function yv(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Mk(e, t) {
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
function Lk(e) {
  if (Array.isArray(e)) return e;
}
var Uu = function(t) {
  return t;
}, Bk = function() {
}, yx = /* @__PURE__ */ y.createContext({
  getControlProps: Uu,
  useSetIsControlGroupEffect: Bk,
  getLabelProps: Uu,
  getDescriptorProps: Uu,
  hasFormGroupProvider: !1
}), Ft = function() {
  return y.useContext(yx);
}, $k = function(t) {
  var n = S.useState(t), r = Os(n, 2), i = r[0], a = r[1], o = function(l) {
    S.useEffect(function() {
      return a(l);
    }, [l]);
  };
  return [i, o];
};
function zi(e) {
  var t = e.children, n = e.controlId, r = e.isInvalid, i = e.isValid, a = e.size, o = S.useMemo(function() {
    return n || Sd("form-field");
  }, [n]), s = vv(o), l = Os(s, 2), u = l[0], c = l[1], d = vv(o), p = Os(d, 2), g = p[0], x = p[1], w = $k(!1), h = Os(w, 2), m = h[0], v = h[1], b = S.useCallback(function(P) {
    var N = m ? g : void 0;
    return Tk(An(An({}, P), {}, {
      "aria-describedby": q(P["aria-describedby"], u) || void 0,
      "aria-labelledby": q(P["aria-labelledby"], N) || void 0,
      id: o
    }));
  }, [m, u, g, o]), E = function(N) {
    var T = x(N == null ? void 0 : N.id);
    return m ? An(An({}, N), {}, {
      id: T
    }) : An(An({}, N), {}, {
      htmlFor: o
    });
  }, C = function(N) {
    var T = c(N == null ? void 0 : N.id);
    return An(An({}, N), {}, {
      id: T
    });
  }, k = {
    getControlProps: b,
    getLabelProps: E,
    getDescriptorProps: C,
    useSetIsControlGroupEffect: v,
    isControlGroup: m,
    controlId: o,
    isInvalid: r,
    isValid: i,
    size: a,
    hasFormGroupProvider: !0
  };
  return /* @__PURE__ */ y.createElement(yx.Provider, {
    value: k
  }, t);
}
zi.propTypes = {
  children: f.node.isRequired,
  controlId: f.string,
  isInvalid: f.bool,
  isValid: f.bool,
  size: f.oneOf([Jn.SMALL, Jn.LARGE])
};
zi.defaultProps = {
  controlId: void 0,
  isInvalid: void 0,
  isValid: void 0,
  size: void 0
};
function uf() {
  return uf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, uf.apply(this, arguments);
}
var zk = function(t) {
  return /* @__PURE__ */ S.createElement("svg", uf({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, t), /* @__PURE__ */ S.createElement("path", {
    d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2Zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59Z",
    fill: "currentColor"
  }));
};
function cf() {
  return cf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, cf.apply(this, arguments);
}
var Hk = function(t) {
  return /* @__PURE__ */ S.createElement("svg", cf({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, t), /* @__PURE__ */ S.createElement("path", {
    d: "M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2Z",
    fill: "currentColor"
  }));
};
function ff() {
  return ff = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ff.apply(this, arguments);
}
var Vk = function(t) {
  return /* @__PURE__ */ S.createElement("svg", ff({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, t), /* @__PURE__ */ S.createElement("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z",
    fill: "currentColor"
  }));
};
function pf() {
  return pf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, pf.apply(this, arguments);
}
var Uk = function(t) {
  return /* @__PURE__ */ S.createElement("svg", pf({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, t), /* @__PURE__ */ S.createElement("path", {
    d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z",
    fill: "currentColor"
  }));
};
function df() {
  return df = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, df.apply(this, arguments);
}
var Wk = function(t) {
  return /* @__PURE__ */ S.createElement("svg", df({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, t), /* @__PURE__ */ S.createElement("path", {
    d: "M5 10h4v6h6v-6h4l-7-7-7 7zm0 8v2h14v-2H5z",
    fill: "currentColor"
  }));
};
function mf() {
  return mf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, mf.apply(this, arguments);
}
var Gk = function(t) {
  return /* @__PURE__ */ S.createElement("svg", mf({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, t), /* @__PURE__ */ S.createElement("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm1 15h-2v-6h2v6Zm0-8h-2V7h2v2Z",
    fill: "currentColor"
  }));
};
function hf() {
  return hf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, hf.apply(this, arguments);
}
var Kk = function(t) {
  return /* @__PURE__ */ S.createElement("svg", hf({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, t), /* @__PURE__ */ S.createElement("path", {
    d: "M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",
    fill: "currentColor"
  }));
};
function vf() {
  return vf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, vf.apply(this, arguments);
}
var qk = function(t) {
  return /* @__PURE__ */ S.createElement("svg", vf({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, t), /* @__PURE__ */ S.createElement("path", {
    d: "M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z",
    fill: "currentColor"
  }));
};
function gf() {
  return gf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, gf.apply(this, arguments);
}
var Yk = function(t) {
  return /* @__PURE__ */ S.createElement("svg", gf({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, t), /* @__PURE__ */ S.createElement("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8Z",
    fill: "currentColor"
  }));
};
function yf() {
  return yf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, yf.apply(this, arguments);
}
var Xk = function(t) {
  return /* @__PURE__ */ S.createElement("svg", yf({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, t), /* @__PURE__ */ S.createElement("path", {
    xmlns: "http://www.w3.org/2000/svg",
    d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z",
    fill: "currentColor"
  }));
}, Qk = ["children", "type", "icon", "muted", "hasIcon"], ln;
function Za(e) {
  "@babel/helpers - typeof";
  return Za = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Za(e);
}
function bf() {
  return bf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, bf.apply(this, arguments);
}
function Zk(e, t) {
  if (e == null) return {};
  var n = Jk(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Jk(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function fr(e, t, n) {
  return t = eP(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function eP(e) {
  var t = tP(e, "string");
  return Za(t) == "symbol" ? t : t + "";
}
function tP(e, t) {
  if (Za(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Za(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var nP = (ln = {}, fr(ln, Ht.DEFAULT, null), fr(ln, Ht.VALID, Hk), fr(ln, Ht.INVALID, Uk), fr(ln, Ht.WARNING, Xk), fr(ln, Ht.CRITERIA_EMPTY, Yk), fr(ln, Ht.CRITERIA_VALID, Vk), fr(ln, Ht.CRITERIA_INVALID, zk), ln), rP = function(t) {
  var n = t.isInvalid, r = t.isValid;
  return r ? Ht.VALID : n ? Ht.INVALID : Ht.DEFAULT;
};
function Id(e) {
  var t = e.type, n = e.customIcon;
  if (n)
    return n;
  var r = nP[t];
  return r ? /* @__PURE__ */ y.createElement(gn, {
    src: r
  }) : null;
}
Id.propTypes = {
  type: f.oneOf(Object.values(Ht)),
  customIcon: f.node
};
Id.defaultProps = {
  type: void 0,
  customIcon: void 0
};
function tu(e) {
  var t = e.children, n = e.type, r = e.icon, i = e.muted, a = e.hasIcon, o = Zk(e, Qk), s = q(o.className, "pgn__form-text", "pgn__form-text-".concat(n), {
    "text-muted": i
  });
  return /* @__PURE__ */ y.createElement("div", bf({}, o, {
    className: s
  }), a && /* @__PURE__ */ y.createElement(Id, {
    customIcon: r,
    type: n
  }), /* @__PURE__ */ y.createElement("div", null, t));
}
var iP = ["default", "valid", "invalid", "warning", "criteria-empty", "criteria-valid", "criteria-invalid"];
tu.propTypes = {
  /** Specifies contents of the component. */
  children: f.node.isRequired,
  /** Specifies class name to append to the base element. */
  className: f.string,
  /** Specifies whether to show an icon next to the text. */
  hasIcon: f.bool,
  /** Specifies text type, this affects styling. */
  type: f.oneOf(iP),
  /** Specifies icon to show, will only be shown if `hasIcon` prop is set to `true`. */
  icon: f.node,
  /** Specifies whether to show text with muted styling. */
  muted: f.bool
};
tu.defaultProps = {
  hasIcon: !0,
  type: "default",
  icon: void 0,
  className: void 0,
  muted: !1
};
var aP = ["children"];
function xf() {
  return xf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, xf.apply(this, arguments);
}
function oP(e, t) {
  if (e == null) return {};
  var n = sP(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function sP(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function er(e) {
  var t = e.children, n = oP(e, aP), r = Ft(), i = r.getDescriptorProps, a = r.isInvalid, o = r.isValid, s = i(n), l = q("pgn__form-control-description", n.className), u = n.type || rP({
    isInvalid: a,
    isValid: o
  });
  return /* @__PURE__ */ y.createElement(tu, xf({}, s, {
    className: l,
    type: u
  }), t);
}
var lP = ["default", "valid", "invalid", "warning", "criteria-empty", "criteria-valid", "criteria-invalid"];
er.propTypes = {
  /** Specifies contents of the component. */
  children: f.node.isRequired,
  /** Specifies class name to append to the base element. */
  className: f.string,
  /** Specifies whether to show an icon next to the text. */
  hasIcon: f.bool,
  /** Specifies feedback type, this affects styling. */
  type: f.oneOf(lP),
  /** Specifies icon to show, will only be shown if `hasIcon` prop is set to `true`. */
  icon: f.node,
  /** Specifies whether to show feedback with muted styling. */
  muted: f.bool
};
er.defaultProps = {
  hasIcon: !0,
  type: void 0,
  icon: void 0,
  className: void 0,
  muted: !1
};
function bx(e) {
  var t = e.children, n = Ft(), r = n.controlId;
  return /* @__PURE__ */ y.createElement("div", {
    className: "pgn__form-control-floating-label"
  }, /* @__PURE__ */ y.createElement("div", {
    className: "pgn__form-control-floating-label-content"
  }, /* @__PURE__ */ y.createElement("label", {
    className: "pgn__form-control-floating-label-text",
    htmlFor: r
  }, t)));
}
bx.propTypes = {
  children: f.node.isRequired
};
function rl(e) {
  var t = e.children, n = e.location;
  return /* @__PURE__ */ y.createElement("div", {
    className: "pgn__form-control-decorator pgn__form-control-decorator-".concat(n)
  }, t);
}
rl.propTypes = {
  children: f.node.isRequired,
  location: f.oneOf(["leading", "trailing"])
};
rl.defaultProps = {
  location: "leading"
};
var uP = ["children", "leadingElement", "trailingElement", "floatingLabel", "className"];
function wf() {
  return wf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, wf.apply(this, arguments);
}
function cP(e, t) {
  if (e == null) return {};
  var n = fP(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function fP(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function jd(e) {
  var t = e.children, n = e.leadingElement, r = e.trailingElement, i = e.floatingLabel, a = e.className, o = cP(e, uP), s = Ft(), l = o.size || s.size;
  return /* @__PURE__ */ y.createElement("div", wf({
    className: q("pgn__form-control-decorator-group", {
      "has-prepended-node": !!n,
      "has-appended-node": !!r,
      "has-leading-element": !!n,
      "has-trailing-element": !!r,
      "has-floating-label": !!i,
      "pgn__form-control-decorator-group-lg": l === Jn.LARGE,
      "pgn__form-control-decorator-group-sm": l === Jn.SMALL
    }, a)
  }, o), t, n && /* @__PURE__ */ y.createElement(rl, {
    location: "leading"
  }, n), r && /* @__PURE__ */ y.createElement(rl, {
    location: "trailing"
  }, r), i && /* @__PURE__ */ y.createElement(bx, null, i));
}
jd.propTypes = {
  children: f.node.isRequired,
  leadingElement: f.node,
  trailingElement: f.node,
  floatingLabel: f.node,
  className: f.string,
  size: f.oneOf([Jn.SMALL, Jn.LARGE])
};
jd.defaultProps = {
  leadingElement: void 0,
  trailingElement: void 0,
  floatingLabel: void 0,
  className: void 0,
  size: void 0
};
function Ja(e) {
  "@babel/helpers - typeof";
  return Ja = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ja(e);
}
var pP = ["as", "className", "controlClassName", "leadingElement", "trailingElement", "floatingLabel", "autoResize", "onChange", "inputMask"], dP = ["isInvalid", "isValid", "getControlProps"];
function Ef() {
  return Ef = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Ef.apply(this, arguments);
}
function bv(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function xv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? bv(Object(n), !0).forEach(function(r) {
      mP(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : bv(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function mP(e, t, n) {
  return t = hP(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function hP(e) {
  var t = vP(e, "string");
  return Ja(t) == "symbol" ? t : t + "";
}
function vP(e, t) {
  if (Ja(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Ja(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function gP(e, t) {
  return wP(e) || xP(e, t) || bP(e, t) || yP();
}
function yP() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function bP(e, t) {
  if (e) {
    if (typeof e == "string") return wv(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return wv(e, t);
  }
}
function wv(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function xP(e, t) {
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
function wP(e) {
  if (Array.isArray(e)) return e;
}
function Ev(e, t) {
  if (e == null) return {};
  var n = EP(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function EP(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var Hi = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.as, r = e.className, i = e.controlClassName, a = e.leadingElement, o = e.trailingElement, s = e.floatingLabel, l = e.autoResize, u = e.onChange, c = e.inputMask, d = Ev(e, pP), p = Ft(), g = p.isInvalid, x = p.isValid, w = p.getControlProps, h = Ev(p, dP), m = y.useRef(), v = t || m, b = d.size || h.size, E = Ik({
    defaultValue: d.defaultValue,
    value: d.value
  }), C = gP(E, 2), k = C[0], P = C[1], N = S.useCallback(function() {
    n === "textarea" && l && (!v.current.initialHeight && !v.current.offsets && (v.current.initialHeight = v.current.offsetHeight, v.current.offsets = v.current.offsetHeight - v.current.clientHeight), v.current.style.height = "".concat(v.current.initialHeight, "px"), v.current.style.height = "".concat(v.current.scrollHeight + v.current.offsets, "px"));
  }, [n, l, v]);
  S.useEffect(function() {
    N();
  }, [N]);
  var T = w(xv(xv({}, d), {}, {
    // eslint-disable-next-line react/prop-types
    onBlur: Sr(P, d.onBlur)
  })), $ = function(B) {
    N(), u && u(B);
  };
  return /* @__PURE__ */ y.createElement(jd, {
    size: b,
    leadingElement: a,
    trailingElement: o,
    floatingLabel: s,
    className: r
  }, /* @__PURE__ */ y.createElement(ox, Ef({
    as: c ? Ak : n,
    ref: v,
    size: b,
    isInvalid: g,
    isValid: x,
    className: q(i, {
      "has-value": k
    }),
    onChange: $,
    mask: c
  }, T)));
}), OP = ["sm", "lg"];
Hi.Feedback = er;
Hi.Description = er;
Hi.propTypes = {
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
  size: f.oneOf(OP),
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
Hi.defaultProps = {
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
function eo(e) {
  "@babel/helpers - typeof";
  return eo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, eo(e);
}
var SP = ["children", "isInline"];
function Ov(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Sv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ov(Object(n), !0).forEach(function(r) {
      CP(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ov(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function CP(e, t, n) {
  return t = kP(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function kP(e) {
  var t = PP(e, "string");
  return eo(t) == "symbol" ? t : t + "";
}
function PP(e, t) {
  if (eo(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (eo(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function _P(e, t) {
  if (e == null) return {};
  var n = AP(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function AP(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Ro(e) {
  var t = e.children, n = e.isInline, r = _P(e, SP), i = Ft(), a = i.size, o = i.isControlGroup, s = i.getLabelProps, l = q("pgn__form-label", {
    "pgn__form-label-inline": n,
    "pgn__form-label-lg": a === Jn.LARGE,
    "pgn__form-label-sm": a === Jn.SMALL
  }, r.className), u = s(Sv(Sv({}, r), {}, {
    className: l
  })), c = o ? "p" : "label";
  return /* @__PURE__ */ y.createElement(c, u, t);
}
var TP = ["sm", "lg"];
Ro.propTypes = {
  /** Specifies class name to append to the base element. */
  className: f.string,
  /** Specifies contents of the component. */
  children: f.node.isRequired,
  /** Specifies whether the component should be displayed with inline styling. */
  isInline: f.bool,
  /** Specifies size of the component. */
  size: f.oneOf(TP)
};
Ro.defaultProps = {
  isInline: !1,
  size: void 0,
  className: void 0
};
function to(e) {
  "@babel/helpers - typeof";
  return to = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, to(e);
}
var IP = ["children", "controlId", "isInvalid", "isValid", "size", "as"];
function Cv(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function kv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Cv(Object(n), !0).forEach(function(r) {
      jP(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Cv(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function jP(e, t, n) {
  return t = NP(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function NP(e) {
  var t = RP(e, "string");
  return to(t) == "symbol" ? t : t + "";
}
function RP(e, t) {
  if (to(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (to(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function DP(e, t) {
  if (e == null) return {};
  var n = FP(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function FP(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Nd(e) {
  var t = e.children, n = e.controlId, r = e.isInvalid, i = e.isValid, a = e.size, o = e.as, s = DP(e, IP);
  return /* @__PURE__ */ y.createElement(o, kv(kv({}, s), {}, {
    className: q("pgn__form-group", s.className)
  }), /* @__PURE__ */ y.createElement(zi, {
    controlId: n,
    isInvalid: r,
    isValid: i,
    size: a
  }, t));
}
var MP = ["sm", "lg"];
Nd.propTypes = {
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
  size: f.oneOf(MP)
};
Nd.defaultProps = {
  as: "div",
  className: void 0,
  controlId: void 0,
  isInvalid: !1,
  isValid: !1,
  size: void 0
};
function no(e) {
  "@babel/helpers - typeof";
  return no = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, no(e);
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
function _v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Pv(Object(n), !0).forEach(function(r) {
      LP(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Pv(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function LP(e, t, n) {
  return t = BP(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function BP(e) {
  var t = $P(e, "string");
  return no(t) == "symbol" ? t : t + "";
}
function $P(e, t) {
  if (no(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (no(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var zP = function(t) {
  return t;
}, xx = /* @__PURE__ */ y.createContext({
  getRadioControlProps: zP,
  hasRadioSetProvider: !1
}), HP = function() {
  return S.useContext(xx);
};
function Rd(e) {
  var t = e.children, n = e.name, r = e.onBlur, i = e.onFocus, a = e.onChange, o = e.value, s = e.defaultValue, l = !s && o !== void 0, u = function(p) {
    return _v(_v({}, p), {}, {
      name: n,
      /* istanbul ignore next */
      onBlur: p.onBlur ? Sr(r, p.onBlur) : r,
      /* istanbul ignore next */
      onFocus: p.onFocus ? Sr(i, p.onFocus) : i,
      /* istanbul ignore next */
      onChange: p.onChange ? Sr(a, p.onChange) : a,
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
  return /* @__PURE__ */ y.createElement(xx.Provider, {
    value: c
  }, t);
}
Rd.propTypes = {
  children: f.node.isRequired,
  name: f.string.isRequired,
  onBlur: f.func,
  onFocus: f.func,
  onChange: f.func,
  value: f.string,
  defaultValue: f.string
};
Rd.defaultProps = {
  onBlur: void 0,
  onFocus: void 0,
  onChange: void 0,
  value: void 0,
  defaultValue: void 0
};
var VP = ["children", "className", "controlClassName", "labelClassName", "description", "isInvalid", "isValid"];
function ro(e) {
  "@babel/helpers - typeof";
  return ro = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ro(e);
}
function UP(e, t) {
  if (e == null) return {};
  var n = WP(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function WP(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function il() {
  return il = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, il.apply(this, arguments);
}
function Av(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Tv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Av(Object(n), !0).forEach(function(r) {
      GP(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Av(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function GP(e, t, n) {
  return t = KP(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function KP(e) {
  var t = qP(e, "string");
  return ro(t) == "symbol" ? t : t + "";
}
function qP(e, t) {
  if (ro(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (ro(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Dd = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = Ft(), r = n.getControlProps, i = HP(), a = i.getRadioControlProps, o = i.hasRadioSetProvider, s = r(Tv(Tv({}, e), {}, {
    className: q("pgn__form-radio-input", e.className)
  }));
  return o && (s = a(s)), /* @__PURE__ */ y.createElement("input", il({}, s, {
    type: "radio",
    ref: t
  }));
});
Dd.propTypes = {
  className: f.string
};
Dd.defaultProps = {
  className: void 0
};
var Fd = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.children, r = e.className, i = e.controlClassName, a = e.labelClassName, o = e.description, s = e.isInvalid, l = e.isValid, u = UP(e, VP);
  return /* @__PURE__ */ y.createElement(zi, {
    controlId: u.id,
    isInvalid: s,
    isValid: l
  }, /* @__PURE__ */ y.createElement("div", {
    className: q("pgn__form-radio", r, {
      "pgn__form-control-valid": l,
      "pgn__form-control-invalid": s,
      "pgn__form-control-disabled": u.disabled
    })
  }, /* @__PURE__ */ y.createElement(Dd, il({
    ref: t,
    className: i
  }, u)), /* @__PURE__ */ y.createElement("div", null, /* @__PURE__ */ y.createElement(Ro, {
    className: a
  }, n), o && /* @__PURE__ */ y.createElement(er, {
    hasIcon: !1
  }, o))));
});
Fd.propTypes = {
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
Fd.defaultProps = {
  id: void 0,
  className: void 0,
  controlClassName: void 0,
  labelClassName: void 0,
  description: void 0,
  isInvalid: !1,
  isValid: !1,
  disabled: !1
};
function io(e) {
  "@babel/helpers - typeof";
  return io = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, io(e);
}
var YP = ["as", "className", "isInline", "children"];
function Iv(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function XP(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Iv(Object(n), !0).forEach(function(r) {
      QP(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Iv(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function QP(e, t, n) {
  return t = ZP(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function ZP(e) {
  var t = JP(e, "string");
  return io(t) == "symbol" ? t : t + "";
}
function JP(e, t) {
  if (io(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (io(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function e_(e, t) {
  if (e == null) return {};
  var n = t_(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function t_(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function nu(e) {
  var t = e.as, n = e.className, r = e.isInline, i = e.children, a = e_(e, YP);
  return /* @__PURE__ */ y.createElement(t, XP({
    className: q(n, {
      "pgn__form-control-set": !r,
      "pgn__form-control-set-inline": r
    })
  }, a), i);
}
nu.propTypes = {
  /** Specifies the base element */
  as: f.elementType,
  /** A class name to append to the base element. */
  className: f.string,
  /** Specifies whether the component should be displayed with inline styling. */
  isInline: f.bool,
  /** Specifies contents of the component. */
  children: f.node
};
nu.defaultProps = {
  as: "div",
  className: void 0,
  isInline: !1,
  children: null
};
var n_ = ["children", "name", "value", "defaultValue", "isInline", "onChange", "onFocus", "onBlur"];
function Of() {
  return Of = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Of.apply(this, arguments);
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
function Md(e) {
  var t = e.children, n = e.name, r = e.value, i = e.defaultValue, a = e.isInline, o = e.onChange, s = e.onFocus, l = e.onBlur, u = r_(e, n_), c = Ft(), d = c.getControlProps, p = c.useSetIsControlGroupEffect;
  p(!0);
  var g = d(u);
  return /* @__PURE__ */ y.createElement(Rd, {
    name: n,
    value: r,
    defaultValue: i,
    onFocus: s,
    onBlur: l,
    onChange: o
  }, /* @__PURE__ */ y.createElement(nu, Of({
    role: "radiogroup",
    isInline: a
  }, g), t));
}
Md.propTypes = {
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
Md.defaultProps = {
  className: void 0,
  value: void 0,
  defaultValue: void 0,
  isInline: !1,
  onChange: void 0,
  onFocus: void 0,
  onBlur: void 0
};
let rs;
const a_ = new Uint8Array(16);
function o_() {
  if (!rs && (rs = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !rs))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return rs(a_);
}
const Ue = [];
for (let e = 0; e < 256; ++e)
  Ue.push((e + 256).toString(16).slice(1));
function s_(e, t = 0) {
  return Ue[e[t + 0]] + Ue[e[t + 1]] + Ue[e[t + 2]] + Ue[e[t + 3]] + "-" + Ue[e[t + 4]] + Ue[e[t + 5]] + "-" + Ue[e[t + 6]] + Ue[e[t + 7]] + "-" + Ue[e[t + 8]] + Ue[e[t + 9]] + "-" + Ue[e[t + 10]] + Ue[e[t + 11]] + Ue[e[t + 12]] + Ue[e[t + 13]] + Ue[e[t + 14]] + Ue[e[t + 15]];
}
const l_ = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), jv = {
  randomUUID: l_
};
function u_(e, t, n) {
  if (jv.randomUUID && !e)
    return jv.randomUUID();
  e = e || {};
  const r = e.random || (e.rng || o_)();
  return r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, s_(r);
}
const c_ = (e, t, n) => (r, i, a, ...o) => t(r) && r[i] === void 0 ? new Error(
  `${a}: ${i} is required when ${n}`
) : e(r, i, a, ...o), f_ = (e, t) => t.every((n) => e[n] !== void 0), Wu = (e, t) => c_(
  e,
  (n) => Array.isArray(t) ? f_(n, t) : n[t] === !0,
  `${t} ${Array.isArray(t) ? "are defined" : "is truthy"}`
);
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
function p_(e, t, n) {
  return (t = m_(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Nv(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function z(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Nv(Object(n), !0).forEach(function(r) {
      p_(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Nv(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function d_(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function m_(e) {
  var t = d_(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
const Rv = () => {
};
let Ld = {}, wx = {}, Ex = null, Ox = {
  mark: Rv,
  measure: Rv
};
try {
  typeof window < "u" && (Ld = window), typeof document < "u" && (wx = document), typeof MutationObserver < "u" && (Ex = MutationObserver), typeof performance < "u" && (Ox = performance);
} catch {
}
const {
  userAgent: Dv = ""
} = Ld.navigator || {}, tr = Ld, Pe = wx, Fv = Ex, is = Ox;
tr.document;
const Sn = !!Pe.documentElement && !!Pe.head && typeof Pe.addEventListener == "function" && typeof Pe.createElement == "function", Sx = ~Dv.indexOf("MSIE") || ~Dv.indexOf("Trident/");
var h_ = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/, v_ = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, Cx = {
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
}, g_ = {
  GROUP: "duotone-group",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, kx = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], it = "classic", ru = "duotone", y_ = "sharp", b_ = "sharp-duotone", Px = [it, ru, y_, b_], x_ = {
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
}, w_ = {
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
}, E_ = /* @__PURE__ */ new Map([["classic", {
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
}]]), O_ = {
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
}, S_ = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], Mv = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, C_ = ["kit"], k_ = {
  kit: {
    "fa-kit": "fak"
  }
}, P_ = ["fak", "fakd"], __ = {
  kit: {
    fak: "fa-kit"
  }
}, Lv = {
  kit: {
    kit: "fak"
  },
  "kit-duotone": {
    "kit-duotone": "fakd"
  }
}, as = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, A_ = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], T_ = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], I_ = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, j_ = {
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
}, N_ = {
  classic: ["fas", "far", "fal", "fat", "fad"],
  duotone: ["fadr", "fadl", "fadt"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"]
}, Sf = {
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
}, R_ = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands"], Cf = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", ...A_, ...R_], D_ = ["solid", "regular", "light", "thin", "duotone", "brands"], _x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], F_ = _x.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), M_ = [...Object.keys(N_), ...D_, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", as.GROUP, as.SWAP_OPACITY, as.PRIMARY, as.SECONDARY].concat(_x.map((e) => "".concat(e, "x"))).concat(F_.map((e) => "w-".concat(e))), L_ = {
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
const xn = "___FONT_AWESOME___", kf = 16, Ax = "fa", Tx = "svg-inline--fa", Tr = "data-fa-i2svg", Pf = "data-fa-pseudo-element", B_ = "data-fa-pseudo-element-pending", Bd = "data-prefix", $d = "data-icon", Bv = "fontawesome-i2svg", $_ = "async", z_ = ["HTML", "HEAD", "STYLE", "SCRIPT"], Ix = (() => {
  try {
    return !0;
  } catch {
    return !1;
  }
})();
function Do(e) {
  return new Proxy(e, {
    get(t, n) {
      return n in t ? t[n] : t[it];
    }
  });
}
const jx = z({}, Cx);
jx[it] = z(z(z(z({}, {
  "fa-duotone": "duotone"
}), Cx[it]), Mv.kit), Mv["kit-duotone"]);
const H_ = Do(jx), _f = z({}, O_);
_f[it] = z(z(z(z({}, {
  duotone: "fad"
}), _f[it]), Lv.kit), Lv["kit-duotone"]);
const $v = Do(_f), Af = z({}, Sf);
Af[it] = z(z({}, Af[it]), __.kit);
const zd = Do(Af), Tf = z({}, j_);
Tf[it] = z(z({}, Tf[it]), k_.kit);
Do(Tf);
const V_ = h_, Nx = "fa-layers-text", U_ = v_, W_ = z({}, x_);
Do(W_);
const G_ = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], Gu = g_, K_ = [...C_, ...M_], Aa = tr.FontAwesomeConfig || {};
function q_(e) {
  var t = Pe.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function Y_(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
Pe && typeof Pe.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((t) => {
  let [n, r] = t;
  const i = Y_(q_(n));
  i != null && (Aa[r] = i);
});
const Rx = {
  styleDefault: "solid",
  familyDefault: it,
  cssPrefix: Ax,
  replacementClass: Tx,
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
Aa.familyPrefix && (Aa.cssPrefix = Aa.familyPrefix);
const Ci = z(z({}, Rx), Aa);
Ci.autoReplaceSvg || (Ci.observeMutations = !1);
const ee = {};
Object.keys(Rx).forEach((e) => {
  Object.defineProperty(ee, e, {
    enumerable: !0,
    set: function(t) {
      Ci[e] = t, Ta.forEach((n) => n(ee));
    },
    get: function() {
      return Ci[e];
    }
  });
});
Object.defineProperty(ee, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    Ci.cssPrefix = e, Ta.forEach((t) => t(ee));
  },
  get: function() {
    return Ci.cssPrefix;
  }
});
tr.FontAwesomeConfig = ee;
const Ta = [];
function X_(e) {
  return Ta.push(e), () => {
    Ta.splice(Ta.indexOf(e), 1);
  };
}
const Tn = kf, Zt = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function Q_(e) {
  if (!e || !Sn)
    return;
  const t = Pe.createElement("style");
  t.setAttribute("type", "text/css"), t.innerHTML = e;
  const n = Pe.head.childNodes;
  let r = null;
  for (let i = n.length - 1; i > -1; i--) {
    const a = n[i], o = (a.tagName || "").toUpperCase();
    ["STYLE", "LINK"].indexOf(o) > -1 && (r = a);
  }
  return Pe.head.insertBefore(t, r), e;
}
const Z_ = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function ao() {
  let e = 12, t = "";
  for (; e-- > 0; )
    t += Z_[Math.random() * 62 | 0];
  return t;
}
function Vi(e) {
  const t = [];
  for (let n = (e || []).length >>> 0; n--; )
    t[n] = e[n];
  return t;
}
function Hd(e) {
  return e.classList ? Vi(e.classList) : (e.getAttribute("class") || "").split(" ").filter((t) => t);
}
function Dx(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function J_(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, '="').concat(Dx(e[n]), '" '), "").trim();
}
function iu(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, ": ").concat(e[n].trim(), ";"), "");
}
function Vd(e) {
  return e.size !== Zt.size || e.x !== Zt.x || e.y !== Zt.y || e.rotate !== Zt.rotate || e.flipX || e.flipY;
}
function eA(e) {
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
function tA(e) {
  let {
    transform: t,
    width: n = kf,
    height: r = kf,
    startCentered: i = !1
  } = e, a = "";
  return i && Sx ? a += "translate(".concat(t.x / Tn - n / 2, "em, ").concat(t.y / Tn - r / 2, "em) ") : i ? a += "translate(calc(-50% + ".concat(t.x / Tn, "em), calc(-50% + ").concat(t.y / Tn, "em)) ") : a += "translate(".concat(t.x / Tn, "em, ").concat(t.y / Tn, "em) "), a += "scale(".concat(t.size / Tn * (t.flipX ? -1 : 1), ", ").concat(t.size / Tn * (t.flipY ? -1 : 1), ") "), a += "rotate(".concat(t.rotate, "deg) "), a;
}
var nA = `:root, :host {
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
function Fx() {
  const e = Ax, t = Tx, n = ee.cssPrefix, r = ee.replacementClass;
  let i = nA;
  if (n !== e || r !== t) {
    const a = new RegExp("\\.".concat(e, "\\-"), "g"), o = new RegExp("\\--".concat(e, "\\-"), "g"), s = new RegExp("\\.".concat(t), "g");
    i = i.replace(a, ".".concat(n, "-")).replace(o, "--".concat(n, "-")).replace(s, ".".concat(r));
  }
  return i;
}
let zv = !1;
function Ku() {
  ee.autoAddCss && !zv && (Q_(Fx()), zv = !0);
}
var rA = {
  mixout() {
    return {
      dom: {
        css: Fx,
        insertCss: Ku
      }
    };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        Ku();
      },
      beforeI2svg() {
        Ku();
      }
    };
  }
};
const wn = tr || {};
wn[xn] || (wn[xn] = {});
wn[xn].styles || (wn[xn].styles = {});
wn[xn].hooks || (wn[xn].hooks = {});
wn[xn].shims || (wn[xn].shims = []);
var Jt = wn[xn];
const Mx = [], Lx = function() {
  Pe.removeEventListener("DOMContentLoaded", Lx), al = 1, Mx.map((e) => e());
};
let al = !1;
Sn && (al = (Pe.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(Pe.readyState), al || Pe.addEventListener("DOMContentLoaded", Lx));
function iA(e) {
  Sn && (al ? setTimeout(e, 0) : Mx.push(e));
}
function Fo(e) {
  const {
    tag: t,
    attributes: n = {},
    children: r = []
  } = e;
  return typeof e == "string" ? Dx(e) : "<".concat(t, " ").concat(J_(n), ">").concat(r.map(Fo).join(""), "</").concat(t, ">");
}
function Hv(e, t, n) {
  if (e && e[t] && e[t][n])
    return {
      prefix: t,
      iconName: n,
      icon: e[t][n]
    };
}
var qu = function(t, n, r, i) {
  var a = Object.keys(t), o = a.length, s = n, l, u, c;
  for (r === void 0 ? (l = 1, c = t[a[0]]) : (l = 0, c = r); l < o; l++)
    u = a[l], c = s(c, t[u], u, t);
  return c;
};
function aA(e) {
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
function If(e) {
  const t = aA(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function oA(e, t) {
  const n = e.length;
  let r = e.charCodeAt(t), i;
  return r >= 55296 && r <= 56319 && n > t + 1 && (i = e.charCodeAt(t + 1), i >= 56320 && i <= 57343) ? (r - 55296) * 1024 + i - 56320 + 65536 : r;
}
function Vv(e) {
  return Object.keys(e).reduce((t, n) => {
    const r = e[n];
    return !!r.icon ? t[r.iconName] = r.icon : t[n] = r, t;
  }, {});
}
function jf(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks: r = !1
  } = n, i = Vv(t);
  typeof Jt.hooks.addPack == "function" && !r ? Jt.hooks.addPack(e, Vv(t)) : Jt.styles[e] = z(z({}, Jt.styles[e] || {}), i), e === "fas" && jf("fa", t);
}
const {
  styles: oo,
  shims: sA
} = Jt, Bx = Object.keys(zd), lA = Bx.reduce((e, t) => (e[t] = Object.keys(zd[t]), e), {});
let Ud = null, $x = {}, zx = {}, Hx = {}, Vx = {}, Ux = {};
function uA(e) {
  return ~K_.indexOf(e);
}
function cA(e, t) {
  const n = t.split("-"), r = n[0], i = n.slice(1).join("-");
  return r === e && i !== "" && !uA(i) ? i : null;
}
const Wx = () => {
  const e = (r) => qu(oo, (i, a, o) => (i[o] = qu(a, r, {}), i), {});
  $x = e((r, i, a) => (i[3] && (r[i[3]] = a), i[2] && i[2].filter((s) => typeof s == "number").forEach((s) => {
    r[s.toString(16)] = a;
  }), r)), zx = e((r, i, a) => (r[a] = a, i[2] && i[2].filter((s) => typeof s == "string").forEach((s) => {
    r[s] = a;
  }), r)), Ux = e((r, i, a) => {
    const o = i[2];
    return r[a] = a, o.forEach((s) => {
      r[s] = a;
    }), r;
  });
  const t = "far" in oo || ee.autoFetchSvg, n = qu(sA, (r, i) => {
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
  Hx = n.names, Vx = n.unicodes, Ud = au(ee.styleDefault, {
    family: ee.familyDefault
  });
};
X_((e) => {
  Ud = au(e.styleDefault, {
    family: ee.familyDefault
  });
});
Wx();
function Wd(e, t) {
  return ($x[e] || {})[t];
}
function fA(e, t) {
  return (zx[e] || {})[t];
}
function Er(e, t) {
  return (Ux[e] || {})[t];
}
function Gx(e) {
  return Hx[e] || {
    prefix: null,
    iconName: null
  };
}
function pA(e) {
  const t = Vx[e], n = Wd("fas", e);
  return t || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function nr() {
  return Ud;
}
const Kx = () => ({
  prefix: null,
  iconName: null,
  rest: []
});
function dA(e) {
  let t = it;
  const n = Bx.reduce((r, i) => (r[i] = "".concat(ee.cssPrefix, "-").concat(i), r), {});
  return Px.forEach((r) => {
    (e.includes(n[r]) || e.some((i) => lA[r].includes(i))) && (t = r);
  }), t;
}
function au(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: n = it
  } = t, r = H_[n][e];
  if (n === ru && !e)
    return "fad";
  const i = $v[n][e] || $v[n][r], a = e in Jt.styles ? e : null;
  return i || a || null;
}
function mA(e) {
  let t = [], n = null;
  return e.forEach((r) => {
    const i = cA(ee.cssPrefix, r);
    i ? n = i : r && t.push(r);
  }), {
    iconName: n,
    rest: t
  };
}
function Uv(e) {
  return e.sort().filter((t, n, r) => r.indexOf(t) === n);
}
function ou(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups: n = !1
  } = t;
  let r = null;
  const i = Cf.concat(T_), a = Uv(e.filter((d) => i.includes(d))), o = Uv(e.filter((d) => !Cf.includes(d))), s = a.filter((d) => (r = d, !kx.includes(d))), [l = null] = s, u = dA(a), c = z(z({}, mA(o)), {}, {
    prefix: au(l, {
      family: u
    })
  });
  return z(z(z({}, c), yA({
    values: e,
    family: u,
    styles: oo,
    config: ee,
    canonical: c,
    givenPrefix: r
  })), hA(n, r, c));
}
function hA(e, t, n) {
  let {
    prefix: r,
    iconName: i
  } = n;
  if (e || !r || !i)
    return {
      prefix: r,
      iconName: i
    };
  const a = t === "fa" ? Gx(i) : {}, o = Er(r, i);
  return i = a.iconName || o || i, r = a.prefix || r, r === "far" && !oo.far && oo.fas && !ee.autoFetchSvg && (r = "fas"), {
    prefix: r,
    iconName: i
  };
}
const vA = Px.filter((e) => e !== it || e !== ru), gA = Object.keys(Sf).filter((e) => e !== it).map((e) => Object.keys(Sf[e])).flat();
function yA(e) {
  const {
    values: t,
    family: n,
    canonical: r,
    givenPrefix: i = "",
    styles: a = {},
    config: o = {}
  } = e, s = n === ru, l = t.includes("fa-duotone") || t.includes("fad"), u = o.familyDefault === "duotone", c = r.prefix === "fad" || r.prefix === "fa-duotone";
  if (!s && (l || u || c) && (r.prefix = "fad"), (t.includes("fa-brands") || t.includes("fab")) && (r.prefix = "fab"), !r.prefix && vA.includes(n) && (Object.keys(a).find((p) => gA.includes(p)) || o.autoFetchSvg)) {
    const p = E_.get(n).defaultShortPrefixId;
    r.prefix = p, r.iconName = Er(r.prefix, r.iconName) || r.iconName;
  }
  return (r.prefix === "fa" || i === "fa") && (r.prefix = nr() || "fas"), r;
}
class bA {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    const i = n.reduce(this._pullDefinitions, {});
    Object.keys(i).forEach((a) => {
      this.definitions[a] = z(z({}, this.definitions[a] || {}), i[a]), jf(a, i[a]);
      const o = zd[it][a];
      o && jf(o, i[a]), Wx();
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
let Wv = [], ei = {};
const hi = {}, xA = Object.keys(hi);
function wA(e, t) {
  let {
    mixoutsTo: n
  } = t;
  return Wv = e, ei = {}, Object.keys(hi).forEach((r) => {
    xA.indexOf(r) === -1 && delete hi[r];
  }), Wv.forEach((r) => {
    const i = r.mixout ? r.mixout() : {};
    if (Object.keys(i).forEach((a) => {
      typeof i[a] == "function" && (n[a] = i[a]), typeof i[a] == "object" && Object.keys(i[a]).forEach((o) => {
        n[a] || (n[a] = {}), n[a][o] = i[a][o];
      });
    }), r.hooks) {
      const a = r.hooks();
      Object.keys(a).forEach((o) => {
        ei[o] || (ei[o] = []), ei[o].push(a[o]);
      });
    }
    r.provides && r.provides(hi);
  }), n;
}
function Nf(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
    r[i - 2] = arguments[i];
  return (ei[e] || []).forEach((o) => {
    t = o.apply(null, [t, ...r]);
  }), t;
}
function Ir(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  (ei[e] || []).forEach((a) => {
    a.apply(null, n);
  });
}
function rr() {
  const e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return hi[e] ? hi[e].apply(null, t) : void 0;
}
function Rf(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  let {
    iconName: t
  } = e;
  const n = e.prefix || nr();
  if (t)
    return t = Er(n, t) || t, Hv(qx.definitions, n, t) || Hv(Jt.styles, n, t);
}
const qx = new bA(), EA = () => {
  ee.autoReplaceSvg = !1, ee.observeMutations = !1, Ir("noAuto");
}, OA = {
  i2svg: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return Sn ? (Ir("beforeI2svg", e), rr("pseudoElements2svg", e), rr("i2svg", e)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot: t
    } = e;
    ee.autoReplaceSvg === !1 && (ee.autoReplaceSvg = !0), ee.observeMutations = !0, iA(() => {
      CA({
        autoReplaceSvgRoot: t
      }), Ir("watch", e);
    });
  }
}, SA = {
  icon: (e) => {
    if (e === null)
      return null;
    if (typeof e == "object" && e.prefix && e.iconName)
      return {
        prefix: e.prefix,
        iconName: Er(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      const t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], n = au(e[0]);
      return {
        prefix: n,
        iconName: Er(n, t) || t
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(ee.cssPrefix, "-")) > -1 || e.match(V_))) {
      const t = ou(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: t.prefix || nr(),
        iconName: Er(t.prefix, t.iconName) || t.iconName
      };
    }
    if (typeof e == "string") {
      const t = nr();
      return {
        prefix: t,
        iconName: Er(t, e) || e
      };
    }
  }
}, St = {
  noAuto: EA,
  config: ee,
  dom: OA,
  parse: SA,
  library: qx,
  findIconDefinition: Rf,
  toHtml: Fo
}, CA = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: t = Pe
  } = e;
  (Object.keys(Jt.styles).length > 0 || ee.autoFetchSvg) && Sn && ee.autoReplaceSvg && St.dom.i2svg({
    node: t
  });
};
function su(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map((n) => Fo(n));
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (!Sn) return;
      const n = Pe.createElement("div");
      return n.innerHTML = e.html, n.children;
    }
  }), e;
}
function kA(e) {
  let {
    children: t,
    main: n,
    mask: r,
    attributes: i,
    styles: a,
    transform: o
  } = e;
  if (Vd(o) && n.found && !r.found) {
    const {
      width: s,
      height: l
    } = n, u = {
      x: s / l / 2,
      y: 0.5
    };
    i.style = iu(z(z({}, a), {}, {
      "transform-origin": "".concat(u.x + o.x / 16, "em ").concat(u.y + o.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: i,
    children: t
  }];
}
function PA(e) {
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
      attributes: z(z({}, i), {}, {
        id: o
      }),
      children: r
    }]
  }];
}
function Gd(e) {
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
    height: g
  } = n.found ? n : t, x = P_.includes(r), w = [ee.replacementClass, i ? "".concat(ee.cssPrefix, "-").concat(i) : ""].filter((C) => c.classes.indexOf(C) === -1).filter((C) => C !== "" || !!C).concat(c.classes).join(" ");
  let h = {
    children: [],
    attributes: z(z({}, c.attributes), {}, {
      "data-prefix": r,
      "data-icon": i,
      class: w,
      role: c.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(p, " ").concat(g)
    })
  };
  const m = x && !~c.classes.indexOf("fa-fw") ? {
    width: "".concat(p / g * 16 * 0.0625, "em")
  } : {};
  d && (h.attributes[Tr] = ""), s && (h.children.push({
    tag: "title",
    attributes: {
      id: h.attributes["aria-labelledby"] || "title-".concat(u || ao())
    },
    children: [s]
  }), delete h.attributes.title);
  const v = z(z({}, h), {}, {
    prefix: r,
    iconName: i,
    main: t,
    mask: n,
    maskId: l,
    transform: a,
    symbol: o,
    styles: z(z({}, m), c.styles)
  }), {
    children: b,
    attributes: E
  } = n.found && t.found ? rr("generateAbstractMask", v) || {
    children: [],
    attributes: {}
  } : rr("generateAbstractIcon", v) || {
    children: [],
    attributes: {}
  };
  return v.children = b, v.attributes = E, o ? PA(v) : kA(v);
}
function Gv(e) {
  const {
    content: t,
    width: n,
    height: r,
    transform: i,
    title: a,
    extra: o,
    watchable: s = !1
  } = e, l = z(z(z({}, o.attributes), a ? {
    title: a
  } : {}), {}, {
    class: o.classes.join(" ")
  });
  s && (l[Tr] = "");
  const u = z({}, o.styles);
  Vd(i) && (u.transform = tA({
    transform: i,
    startCentered: !0,
    width: n,
    height: r
  }), u["-webkit-transform"] = u.transform);
  const c = iu(u);
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
function _A(e) {
  const {
    content: t,
    title: n,
    extra: r
  } = e, i = z(z(z({}, r.attributes), n ? {
    title: n
  } : {}), {}, {
    class: r.classes.join(" ")
  }), a = iu(r.styles);
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
  styles: Yu
} = Jt;
function Df(e) {
  const t = e[0], n = e[1], [r] = e.slice(4);
  let i = null;
  return Array.isArray(r) ? i = {
    tag: "g",
    attributes: {
      class: "".concat(ee.cssPrefix, "-").concat(Gu.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(ee.cssPrefix, "-").concat(Gu.SECONDARY),
        fill: "currentColor",
        d: r[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(ee.cssPrefix, "-").concat(Gu.PRIMARY),
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
const AA = {
  found: !1,
  width: 512,
  height: 512
};
function TA(e, t) {
  !Ix && !ee.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function Ff(e, t) {
  let n = t;
  return t === "fa" && ee.styleDefault !== null && (t = nr()), new Promise((r, i) => {
    if (n === "fa") {
      const a = Gx(e) || {};
      e = a.iconName || e, t = a.prefix || t;
    }
    if (e && t && Yu[t] && Yu[t][e]) {
      const a = Yu[t][e];
      return r(Df(a));
    }
    TA(e, t), r(z(z({}, AA), {}, {
      icon: ee.showMissingIcons && e ? rr("missingIconAbstract") || {} : {}
    }));
  });
}
const Kv = () => {
}, Mf = ee.measurePerformance && is && is.mark && is.measure ? is : {
  mark: Kv,
  measure: Kv
}, ma = 'FA "6.7.2"', IA = (e) => (Mf.mark("".concat(ma, " ").concat(e, " begins")), () => Yx(e)), Yx = (e) => {
  Mf.mark("".concat(ma, " ").concat(e, " ends")), Mf.measure("".concat(ma, " ").concat(e), "".concat(ma, " ").concat(e, " begins"), "".concat(ma, " ").concat(e, " ends"));
};
var Kd = {
  begin: IA,
  end: Yx
};
const Ss = () => {
};
function qv(e) {
  return typeof (e.getAttribute ? e.getAttribute(Tr) : null) == "string";
}
function jA(e) {
  const t = e.getAttribute ? e.getAttribute(Bd) : null, n = e.getAttribute ? e.getAttribute($d) : null;
  return t && n;
}
function NA(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(ee.replacementClass);
}
function RA() {
  return ee.autoReplaceSvg === !0 ? Cs.replace : Cs[ee.autoReplaceSvg] || Cs.replace;
}
function DA(e) {
  return Pe.createElementNS("http://www.w3.org/2000/svg", e);
}
function FA(e) {
  return Pe.createElement(e);
}
function Xx(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: n = e.tag === "svg" ? DA : FA
  } = t;
  if (typeof e == "string")
    return Pe.createTextNode(e);
  const r = n(e.tag);
  return Object.keys(e.attributes || []).forEach(function(a) {
    r.setAttribute(a, e.attributes[a]);
  }), (e.children || []).forEach(function(a) {
    r.appendChild(Xx(a, {
      ceFn: n
    }));
  }), r;
}
function MA(e) {
  let t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
const Cs = {
  replace: function(e) {
    const t = e[0];
    if (t.parentNode)
      if (e[1].forEach((n) => {
        t.parentNode.insertBefore(Xx(n), t);
      }), t.getAttribute(Tr) === null && ee.keepOriginalSource) {
        let n = Pe.createComment(MA(t));
        t.parentNode.replaceChild(n, t);
      } else
        t.remove();
  },
  nest: function(e) {
    const t = e[0], n = e[1];
    if (~Hd(t).indexOf(ee.replacementClass))
      return Cs.replace(e);
    const r = new RegExp("".concat(ee.cssPrefix, "-.*"));
    if (delete n[0].attributes.id, n[0].attributes.class) {
      const a = n[0].attributes.class.split(" ").reduce((o, s) => (s === ee.replacementClass || s.match(r) ? o.toSvg.push(s) : o.toNode.push(s), o), {
        toNode: [],
        toSvg: []
      });
      n[0].attributes.class = a.toSvg.join(" "), a.toNode.length === 0 ? t.removeAttribute("class") : t.setAttribute("class", a.toNode.join(" "));
    }
    const i = n.map((a) => Fo(a)).join(`
`);
    t.setAttribute(Tr, ""), t.innerHTML = i;
  }
};
function Yv(e) {
  e();
}
function Qx(e, t) {
  const n = typeof t == "function" ? t : Ss;
  if (e.length === 0)
    n();
  else {
    let r = Yv;
    ee.mutateApproach === $_ && (r = tr.requestAnimationFrame || Yv), r(() => {
      const i = RA(), a = Kd.begin("mutate");
      e.map(i), a(), n();
    });
  }
}
let qd = !1;
function Zx() {
  qd = !0;
}
function Lf() {
  qd = !1;
}
let ol = null;
function Xv(e) {
  if (!Fv || !ee.observeMutations)
    return;
  const {
    treeCallback: t = Ss,
    nodeCallback: n = Ss,
    pseudoElementsCallback: r = Ss,
    observeMutationsRoot: i = Pe
  } = e;
  ol = new Fv((a) => {
    if (qd) return;
    const o = nr();
    Vi(a).forEach((s) => {
      if (s.type === "childList" && s.addedNodes.length > 0 && !qv(s.addedNodes[0]) && (ee.searchPseudoElements && r(s.target), t(s.target)), s.type === "attributes" && s.target.parentNode && ee.searchPseudoElements && r(s.target.parentNode), s.type === "attributes" && qv(s.target) && ~G_.indexOf(s.attributeName))
        if (s.attributeName === "class" && jA(s.target)) {
          const {
            prefix: l,
            iconName: u
          } = ou(Hd(s.target));
          s.target.setAttribute(Bd, l || o), u && s.target.setAttribute($d, u);
        } else NA(s.target) && n(s.target);
    });
  }), Sn && ol.observe(i, {
    childList: !0,
    attributes: !0,
    characterData: !0,
    subtree: !0
  });
}
function LA() {
  ol && ol.disconnect();
}
function BA(e) {
  const t = e.getAttribute("style");
  let n = [];
  return t && (n = t.split(";").reduce((r, i) => {
    const a = i.split(":"), o = a[0], s = a.slice(1);
    return o && s.length > 0 && (r[o] = s.join(":").trim()), r;
  }, {})), n;
}
function $A(e) {
  const t = e.getAttribute("data-prefix"), n = e.getAttribute("data-icon"), r = e.innerText !== void 0 ? e.innerText.trim() : "";
  let i = ou(Hd(e));
  return i.prefix || (i.prefix = nr()), t && n && (i.prefix = t, i.iconName = n), i.iconName && i.prefix || (i.prefix && r.length > 0 && (i.iconName = fA(i.prefix, e.innerText) || Wd(i.prefix, If(e.innerText))), !i.iconName && ee.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (i.iconName = e.firstChild.data)), i;
}
function zA(e) {
  const t = Vi(e.attributes).reduce((i, a) => (i.name !== "class" && i.name !== "style" && (i[a.name] = a.value), i), {}), n = e.getAttribute("title"), r = e.getAttribute("data-fa-title-id");
  return ee.autoA11y && (n ? t["aria-labelledby"] = "".concat(ee.replacementClass, "-title-").concat(r || ao()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function HA() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: Zt,
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
function Qv(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  };
  const {
    iconName: n,
    prefix: r,
    rest: i
  } = $A(e), a = zA(e), o = Nf("parseNodeAttributes", {}, e);
  let s = t.styleParser ? BA(e) : [];
  return z({
    iconName: n,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: r,
    transform: Zt,
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
  styles: VA
} = Jt;
function Jx(e) {
  const t = ee.autoReplaceSvg === "nest" ? Qv(e, {
    styleParser: !1
  }) : Qv(e);
  return ~t.extra.classes.indexOf(Nx) ? rr("generateLayersText", e, t) : rr("generateSvgReplacementMutation", e, t);
}
function UA() {
  return [...S_, ...Cf];
}
function Zv(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!Sn) return Promise.resolve();
  const n = Pe.documentElement.classList, r = (c) => n.add("".concat(Bv, "-").concat(c)), i = (c) => n.remove("".concat(Bv, "-").concat(c)), a = ee.autoFetchSvg ? UA() : kx.concat(Object.keys(VA));
  a.includes("fa") || a.push("fa");
  const o = [".".concat(Nx, ":not([").concat(Tr, "])")].concat(a.map((c) => ".".concat(c, ":not([").concat(Tr, "])"))).join(", ");
  if (o.length === 0)
    return Promise.resolve();
  let s = [];
  try {
    s = Vi(e.querySelectorAll(o));
  } catch {
  }
  if (s.length > 0)
    r("pending"), i("complete");
  else
    return Promise.resolve();
  const l = Kd.begin("onTree"), u = s.reduce((c, d) => {
    try {
      const p = Jx(d);
      p && c.push(p);
    } catch (p) {
      Ix || p.name === "MissingIcon" && console.error(p);
    }
    return c;
  }, []);
  return new Promise((c, d) => {
    Promise.all(u).then((p) => {
      Qx(p, () => {
        r("active"), r("complete"), i("pending"), typeof t == "function" && t(), l(), c();
      });
    }).catch((p) => {
      l(), d(p);
    });
  });
}
function WA(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  Jx(e).then((n) => {
    n && Qx([n], t);
  });
}
function GA(e) {
  return function(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = (t || {}).icon ? t : Rf(t || {});
    let {
      mask: i
    } = n;
    return i && (i = (i || {}).icon ? i : Rf(i || {})), e(r, z(z({}, n), {}, {
      mask: i
    }));
  };
}
const KA = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: n = Zt,
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
    icon: g
  } = e;
  return su(z({
    type: "icon"
  }, e), () => (Ir("beforeDOMElementCreation", {
    iconDefinition: e,
    params: t
  }), ee.autoA11y && (o ? u["aria-labelledby"] = "".concat(ee.replacementClass, "-title-").concat(s || ao()) : (u["aria-hidden"] = "true", u.focusable = "false")), Gd({
    icons: {
      main: Df(g),
      mask: i ? Df(i.icon) : {
        found: !1,
        width: null,
        height: null,
        icon: {}
      }
    },
    prefix: d,
    iconName: p,
    transform: z(z({}, Zt), n),
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
var qA = {
  mixout() {
    return {
      icon: GA(KA)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.treeCallback = Zv, e.nodeCallback = WA, e;
      }
    };
  },
  provides(e) {
    e.i2svg = function(t) {
      const {
        node: n = Pe,
        callback: r = () => {
        }
      } = t;
      return Zv(n, r);
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
      return new Promise((p, g) => {
        Promise.all([Ff(r, o), u.iconName ? Ff(u.iconName, u.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then((x) => {
          let [w, h] = x;
          p([t, Gd({
            icons: {
              main: w,
              mask: h
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
        }).catch(g);
      });
    }, e.generateAbstractIcon = function(t) {
      let {
        children: n,
        attributes: r,
        main: i,
        transform: a,
        styles: o
      } = t;
      const s = iu(o);
      s.length > 0 && (r.style = s);
      let l;
      return Vd(a) && (l = rr("generateAbstractTransformGrouping", {
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
}, YA = {
  mixout() {
    return {
      layer(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          classes: n = []
        } = t;
        return su({
          type: "layer"
        }, () => {
          Ir("beforeDOMElementCreation", {
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
}, XA = {
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
        return su({
          type: "counter",
          content: e
        }, () => (Ir("beforeDOMElementCreation", {
          content: e,
          params: t
        }), _A({
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
}, QA = {
  mixout() {
    return {
      text(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          transform: n = Zt,
          title: r = null,
          classes: i = [],
          attributes: a = {},
          styles: o = {}
        } = t;
        return su({
          type: "text",
          content: e
        }, () => (Ir("beforeDOMElementCreation", {
          content: e,
          params: t
        }), Gv({
          content: e,
          transform: z(z({}, Zt), n),
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
      if (Sx) {
        const l = parseInt(getComputedStyle(t).fontSize, 10), u = t.getBoundingClientRect();
        o = u.width / l, s = u.height / l;
      }
      return ee.autoA11y && !r && (a.attributes["aria-hidden"] = "true"), Promise.resolve([t, Gv({
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
const ZA = new RegExp('"', "ug"), Jv = [1105920, 1112319], eg = z(z(z(z({}, {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  }
}), w_), L_), I_), Bf = Object.keys(eg).reduce((e, t) => (e[t.toLowerCase()] = eg[t], e), {}), JA = Object.keys(Bf).reduce((e, t) => {
  const n = Bf[t];
  return e[t] = n[900] || [...Object.entries(n)][0][1], e;
}, {});
function eT(e) {
  const t = e.replace(ZA, ""), n = oA(t, 0), r = n >= Jv[0] && n <= Jv[1], i = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: If(i ? t[0] : t),
    isSecondary: r || i
  };
}
function tT(e, t) {
  const n = e.replace(/^['"]|['"]$/g, "").toLowerCase(), r = parseInt(t), i = isNaN(r) ? "normal" : r;
  return (Bf[n] || {})[i] || JA[n];
}
function tg(e, t) {
  const n = "".concat(B_).concat(t.replace(":", "-"));
  return new Promise((r, i) => {
    if (e.getAttribute(n) !== null)
      return r();
    const o = Vi(e.children).filter((p) => p.getAttribute(Pf) === t)[0], s = tr.getComputedStyle(e, t), l = s.getPropertyValue("font-family"), u = l.match(U_), c = s.getPropertyValue("font-weight"), d = s.getPropertyValue("content");
    if (o && !u)
      return e.removeChild(o), r();
    if (u && d !== "none" && d !== "") {
      const p = s.getPropertyValue("content");
      let g = tT(l, c);
      const {
        value: x,
        isSecondary: w
      } = eT(p), h = u[0].startsWith("FontAwesome");
      let m = Wd(g, x), v = m;
      if (h) {
        const b = pA(x);
        b.iconName && b.prefix && (m = b.iconName, g = b.prefix);
      }
      if (m && !w && (!o || o.getAttribute(Bd) !== g || o.getAttribute($d) !== v)) {
        e.setAttribute(n, v), o && e.removeChild(o);
        const b = HA(), {
          extra: E
        } = b;
        E.attributes[Pf] = t, Ff(m, g).then((C) => {
          const k = Gd(z(z({}, b), {}, {
            icons: {
              main: C,
              mask: Kx()
            },
            prefix: g,
            iconName: v,
            extra: E,
            watchable: !0
          })), P = Pe.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(P, e.firstChild) : e.appendChild(P), P.outerHTML = k.map((N) => Fo(N)).join(`
`), e.removeAttribute(n), r();
        }).catch(i);
      } else
        r();
    } else
      r();
  });
}
function nT(e) {
  return Promise.all([tg(e, "::before"), tg(e, "::after")]);
}
function rT(e) {
  return e.parentNode !== document.head && !~z_.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(Pf) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function ng(e) {
  if (Sn)
    return new Promise((t, n) => {
      const r = Vi(e.querySelectorAll("*")).filter(rT).map(nT), i = Kd.begin("searchPseudoElements");
      Zx(), Promise.all(r).then(() => {
        i(), Lf(), t();
      }).catch(() => {
        i(), Lf(), n();
      });
    });
}
var iT = {
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.pseudoElementsCallback = ng, e;
      }
    };
  },
  provides(e) {
    e.pseudoElements2svg = function(t) {
      const {
        node: n = Pe
      } = t;
      ee.searchPseudoElements && ng(n);
    };
  }
};
let rg = !1;
var aT = {
  mixout() {
    return {
      dom: {
        unwatch() {
          Zx(), rg = !0;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        Xv(Nf("mutationObserverCallbacks", {}));
      },
      noAuto() {
        LA();
      },
      watch(e) {
        const {
          observeMutationsRoot: t
        } = e;
        rg ? Lf() : Xv(Nf("mutationObserverCallbacks", {
          observeMutationsRoot: t
        }));
      }
    };
  }
};
const ig = (e) => {
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
var oT = {
  mixout() {
    return {
      parse: {
        transform: (e) => ig(e)
      }
    };
  },
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-transform");
        return n && (e.transform = ig(n)), e;
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
        attributes: z({}, p.outer),
        children: [{
          tag: "g",
          attributes: z({}, p.inner),
          children: [{
            tag: n.icon.tag,
            children: n.icon.children,
            attributes: z(z({}, n.icon.attributes), p.path)
          }]
        }]
      };
    };
  }
};
const Xu = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function ag(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function sT(e) {
  return e.tag === "g" ? e.children : [e];
}
var lT = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-mask"), r = n ? ou(n.split(" ").map((i) => i.trim())) : Kx();
        return r.prefix || (r.prefix = nr()), e.mask = r, e.maskId = t.getAttribute("data-fa-mask-id"), e;
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
      } = a, p = eA({
        transform: s,
        containerWidth: c,
        iconWidth: l
      }), g = {
        tag: "rect",
        attributes: z(z({}, Xu), {}, {
          fill: "white"
        })
      }, x = u.children ? {
        children: u.children.map(ag)
      } : {}, w = {
        tag: "g",
        attributes: z({}, p.inner),
        children: [ag(z({
          tag: u.tag,
          attributes: z(z({}, u.attributes), p.path)
        }, x))]
      }, h = {
        tag: "g",
        attributes: z({}, p.outer),
        children: [w]
      }, m = "mask-".concat(o || ao()), v = "clip-".concat(o || ao()), b = {
        tag: "mask",
        attributes: z(z({}, Xu), {}, {
          id: m,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [g, h]
      }, E = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: v
          },
          children: sT(d)
        }, b]
      };
      return n.push(E, {
        tag: "rect",
        attributes: z({
          fill: "currentColor",
          "clip-path": "url(#".concat(v, ")"),
          mask: "url(#".concat(m, ")")
        }, Xu)
      }), {
        children: n,
        attributes: r
      };
    };
  }
}, uT = {
  provides(e) {
    let t = !1;
    tr.matchMedia && (t = tr.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
      const n = [], r = {
        fill: "currentColor"
      }, i = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      n.push({
        tag: "path",
        attributes: z(z({}, r), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      const a = z(z({}, i), {}, {
        attributeName: "opacity"
      }), o = {
        tag: "circle",
        attributes: z(z({}, r), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return t || o.children.push({
        tag: "animate",
        attributes: z(z({}, i), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: z(z({}, a), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), n.push(o), n.push({
        tag: "path",
        attributes: z(z({}, r), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: t ? [] : [{
          tag: "animate",
          attributes: z(z({}, a), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), t || n.push({
        tag: "path",
        attributes: z(z({}, r), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: z(z({}, a), {}, {
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
}, cT = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-symbol"), r = n === null ? !1 : n === "" ? !0 : n;
        return e.symbol = r, e;
      }
    };
  }
}, fT = [rA, qA, YA, XA, QA, iT, aT, oT, lT, uT, cT];
wA(fT, {
  mixoutsTo: St
});
St.noAuto;
St.config;
St.library;
St.dom;
const $f = St.parse;
St.findIconDefinition;
St.toHtml;
const pT = St.icon;
St.layer;
St.text;
St.counter;
function og(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Ln(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? og(Object(n), !0).forEach(function(r) {
      ti(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : og(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function sl(e) {
  "@babel/helpers - typeof";
  return sl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, sl(e);
}
function ti(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function dT(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function ew(e, t) {
  if (e == null) return {};
  var n = dT(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function zf(e) {
  return mT(e) || hT(e) || vT(e) || gT();
}
function mT(e) {
  if (Array.isArray(e)) return Hf(e);
}
function hT(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function vT(e, t) {
  if (e) {
    if (typeof e == "string") return Hf(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Hf(e, t);
  }
}
function Hf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function gT() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function yT(e) {
  var t, n = e.beat, r = e.fade, i = e.beatFade, a = e.bounce, o = e.shake, s = e.flash, l = e.spin, u = e.spinPulse, c = e.spinReverse, d = e.pulse, p = e.fixedWidth, g = e.inverse, x = e.border, w = e.listItem, h = e.flip, m = e.size, v = e.rotation, b = e.pull, E = (t = {
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
    "fa-inverse": g,
    "fa-border": x,
    "fa-li": w,
    "fa-flip": h === !0,
    "fa-flip-horizontal": h === "horizontal" || h === "both",
    "fa-flip-vertical": h === "vertical" || h === "both"
  }, ti(t, "fa-".concat(m), typeof m < "u" && m !== null), ti(t, "fa-rotate-".concat(v), typeof v < "u" && v !== null && v !== 0), ti(t, "fa-pull-".concat(b), typeof b < "u" && b !== null), ti(t, "fa-swap-opacity", e.swapOpacity), t);
  return Object.keys(E).map(function(C) {
    return E[C] ? C : null;
  }).filter(function(C) {
    return C;
  });
}
function bT(e) {
  return e = e - 0, e === e;
}
function tw(e) {
  return bT(e) ? e : (e = e.replace(/[\-_\s]+(.)?/g, function(t, n) {
    return n ? n.toUpperCase() : "";
  }), e.substr(0, 1).toLowerCase() + e.substr(1));
}
var xT = ["style"];
function wT(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function ET(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var r = n.indexOf(":"), i = tw(n.slice(0, r)), a = n.slice(r + 1).trim();
    return i.startsWith("webkit") ? t[wT(i)] = a : t[i] = a, t;
  }, {});
}
function nw(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string")
    return t;
  var r = (t.children || []).map(function(l) {
    return nw(e, l);
  }), i = Object.keys(t.attributes || {}).reduce(function(l, u) {
    var c = t.attributes[u];
    switch (u) {
      case "class":
        l.attrs.className = c, delete t.attributes.class;
        break;
      case "style":
        l.attrs.style = ET(c);
        break;
      default:
        u.indexOf("aria-") === 0 || u.indexOf("data-") === 0 ? l.attrs[u.toLowerCase()] = c : l.attrs[tw(u)] = c;
    }
    return l;
  }, {
    attrs: {}
  }), a = n.style, o = a === void 0 ? {} : a, s = ew(n, xT);
  return i.attrs.style = Ln(Ln({}, i.attrs.style), o), e.apply(void 0, [t.tag, Ln(Ln({}, i.attrs), s)].concat(zf(r)));
}
var rw = !1;
try {
  rw = !0;
} catch {
}
function OT() {
  if (!rw && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function sg(e) {
  if (e && sl(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if ($f.icon)
    return $f.icon(e);
  if (e === null)
    return null;
  if (e && sl(e) === "object" && e.prefix && e.iconName)
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
function Qu(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? ti({}, e, t) : {};
}
var ST = ["forwardedRef"];
function Mo(e) {
  var t = e.forwardedRef, n = ew(e, ST), r = n.icon, i = n.mask, a = n.symbol, o = n.className, s = n.title, l = n.titleId, u = n.maskId, c = sg(r), d = Qu("classes", [].concat(zf(yT(n)), zf(o.split(" ")))), p = Qu("transform", typeof n.transform == "string" ? $f.transform(n.transform) : n.transform), g = Qu("mask", sg(i)), x = pT(c, Ln(Ln(Ln(Ln({}, d), p), g), {}, {
    symbol: a,
    title: s,
    titleId: l,
    maskId: u
  }));
  if (!x)
    return OT("Could not find icon", c), null;
  var w = x.abstract, h = {
    ref: t
  };
  return Object.keys(n).forEach(function(m) {
    Mo.defaultProps.hasOwnProperty(m) || (h[m] = n[m]);
  }), CT(w[0], h);
}
Mo.displayName = "FontAwesomeIcon";
Mo.propTypes = {
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
Mo.defaultProps = {
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
var CT = nw.bind(null, y.createElement);
function lg() {
  return S.useState(null);
}
const ug = (e) => !e || typeof e == "function" ? e : (t) => {
  e.current = t;
};
function kT(e, t) {
  const n = ug(e), r = ug(t);
  return (i) => {
    n && n(i), r && r(i);
  };
}
function PT(e, t) {
  return S.useMemo(() => kT(e, t), [e, t]);
}
var vt = "top", It = "bottom", jt = "right", gt = "left", Yd = "auto", Lo = [vt, It, jt, gt], ki = "start", so = "end", _T = "clippingParents", iw = "viewport", oa = "popper", AT = "reference", cg = /* @__PURE__ */ Lo.reduce(function(e, t) {
  return e.concat([t + "-" + ki, t + "-" + so]);
}, []), Xd = /* @__PURE__ */ [].concat(Lo, [Yd]).reduce(function(e, t) {
  return e.concat([t, t + "-" + ki, t + "-" + so]);
}, []), TT = "beforeRead", IT = "read", jT = "afterRead", NT = "beforeMain", RT = "main", DT = "afterMain", FT = "beforeWrite", MT = "write", LT = "afterWrite", BT = [TT, IT, jT, NT, RT, DT, FT, MT, LT];
function nn(e) {
  return e.split("-")[0];
}
function xt(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function jr(e) {
  var t = xt(e).Element;
  return e instanceof t || e instanceof Element;
}
function rn(e) {
  var t = xt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Qd(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = xt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var Cr = Math.max, ll = Math.min, Pi = Math.round;
function Vf() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function aw() {
  return !/^((?!chrome|android).)*safari/i.test(Vf());
}
function _i(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), i = 1, a = 1;
  t && rn(e) && (i = e.offsetWidth > 0 && Pi(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && Pi(r.height) / e.offsetHeight || 1);
  var o = jr(e) ? xt(e) : window, s = o.visualViewport, l = !aw() && n, u = (r.left + (l && s ? s.offsetLeft : 0)) / i, c = (r.top + (l && s ? s.offsetTop : 0)) / a, d = r.width / i, p = r.height / a;
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
function Zd(e) {
  var t = _i(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function ow(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Qd(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function ir(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function En(e) {
  return xt(e).getComputedStyle(e);
}
function $T(e) {
  return ["table", "td", "th"].indexOf(ir(e)) >= 0;
}
function lr(e) {
  return ((jr(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function lu(e) {
  return ir(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Qd(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    lr(e)
  );
}
function fg(e) {
  return !rn(e) || // https://github.com/popperjs/popper-core/issues/837
  En(e).position === "fixed" ? null : e.offsetParent;
}
function zT(e) {
  var t = /firefox/i.test(Vf()), n = /Trident/i.test(Vf());
  if (n && rn(e)) {
    var r = En(e);
    if (r.position === "fixed")
      return null;
  }
  var i = lu(e);
  for (Qd(i) && (i = i.host); rn(i) && ["html", "body"].indexOf(ir(i)) < 0; ) {
    var a = En(i);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function Bo(e) {
  for (var t = xt(e), n = fg(e); n && $T(n) && En(n).position === "static"; )
    n = fg(n);
  return n && (ir(n) === "html" || ir(n) === "body" && En(n).position === "static") ? t : n || zT(e) || t;
}
function Jd(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Ia(e, t, n) {
  return Cr(e, ll(t, n));
}
function HT(e, t, n) {
  var r = Ia(e, t, n);
  return r > n ? n : r;
}
function sw() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function lw(e) {
  return Object.assign({}, sw(), e);
}
function uw(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var VT = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, lw(typeof t != "number" ? t : uw(t, Lo));
};
function UT(e) {
  var t, n = e.state, r = e.name, i = e.options, a = n.elements.arrow, o = n.modifiersData.popperOffsets, s = nn(n.placement), l = Jd(s), u = [gt, jt].indexOf(s) >= 0, c = u ? "height" : "width";
  if (!(!a || !o)) {
    var d = VT(i.padding, n), p = Zd(a), g = l === "y" ? vt : gt, x = l === "y" ? It : jt, w = n.rects.reference[c] + n.rects.reference[l] - o[l] - n.rects.popper[c], h = o[l] - n.rects.reference[l], m = Bo(a), v = m ? l === "y" ? m.clientHeight || 0 : m.clientWidth || 0 : 0, b = w / 2 - h / 2, E = d[g], C = v - p[c] - d[x], k = v / 2 - p[c] / 2 + b, P = Ia(E, k, C), N = l;
    n.modifiersData[r] = (t = {}, t[N] = P, t.centerOffset = P - k, t);
  }
}
function WT(e) {
  var t = e.state, n = e.options, r = n.element, i = r === void 0 ? "[data-popper-arrow]" : r;
  i != null && (typeof i == "string" && (i = t.elements.popper.querySelector(i), !i) || ow(t.elements.popper, i) && (t.elements.arrow = i));
}
const GT = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: UT,
  effect: WT,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Ai(e) {
  return e.split("-")[1];
}
var KT = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function qT(e, t) {
  var n = e.x, r = e.y, i = t.devicePixelRatio || 1;
  return {
    x: Pi(n * i) / i || 0,
    y: Pi(r * i) / i || 0
  };
}
function pg(e) {
  var t, n = e.popper, r = e.popperRect, i = e.placement, a = e.variation, o = e.offsets, s = e.position, l = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, d = e.isFixed, p = o.x, g = p === void 0 ? 0 : p, x = o.y, w = x === void 0 ? 0 : x, h = typeof c == "function" ? c({
    x: g,
    y: w
  }) : {
    x: g,
    y: w
  };
  g = h.x, w = h.y;
  var m = o.hasOwnProperty("x"), v = o.hasOwnProperty("y"), b = gt, E = vt, C = window;
  if (u) {
    var k = Bo(n), P = "clientHeight", N = "clientWidth";
    if (k === xt(n) && (k = lr(n), En(k).position !== "static" && s === "absolute" && (P = "scrollHeight", N = "scrollWidth")), k = k, i === vt || (i === gt || i === jt) && a === so) {
      E = It;
      var T = d && k === C && C.visualViewport ? C.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        k[P]
      );
      w -= T - r.height, w *= l ? 1 : -1;
    }
    if (i === gt || (i === vt || i === It) && a === so) {
      b = jt;
      var $ = d && k === C && C.visualViewport ? C.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        k[N]
      );
      g -= $ - r.width, g *= l ? 1 : -1;
    }
  }
  var Z = Object.assign({
    position: s
  }, u && KT), B = c === !0 ? qT({
    x: g,
    y: w
  }, xt(n)) : {
    x: g,
    y: w
  };
  if (g = B.x, w = B.y, l) {
    var j;
    return Object.assign({}, Z, (j = {}, j[E] = v ? "0" : "", j[b] = m ? "0" : "", j.transform = (C.devicePixelRatio || 1) <= 1 ? "translate(" + g + "px, " + w + "px)" : "translate3d(" + g + "px, " + w + "px, 0)", j));
  }
  return Object.assign({}, Z, (t = {}, t[E] = v ? w + "px" : "", t[b] = m ? g + "px" : "", t.transform = "", t));
}
function YT(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, i = r === void 0 ? !0 : r, a = n.adaptive, o = a === void 0 ? !0 : a, s = n.roundOffsets, l = s === void 0 ? !0 : s, u = {
    placement: nn(t.placement),
    variation: Ai(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, pg(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: o,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, pg(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const XT = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: YT,
  data: {}
};
var os = {
  passive: !0
};
function QT(e) {
  var t = e.state, n = e.instance, r = e.options, i = r.scroll, a = i === void 0 ? !0 : i, o = r.resize, s = o === void 0 ? !0 : o, l = xt(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && u.forEach(function(c) {
    c.addEventListener("scroll", n.update, os);
  }), s && l.addEventListener("resize", n.update, os), function() {
    a && u.forEach(function(c) {
      c.removeEventListener("scroll", n.update, os);
    }), s && l.removeEventListener("resize", n.update, os);
  };
}
const ZT = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: QT,
  data: {}
};
var JT = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function ks(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return JT[t];
  });
}
var e2 = {
  start: "end",
  end: "start"
};
function dg(e) {
  return e.replace(/start|end/g, function(t) {
    return e2[t];
  });
}
function em(e) {
  var t = xt(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function tm(e) {
  return _i(lr(e)).left + em(e).scrollLeft;
}
function t2(e, t) {
  var n = xt(e), r = lr(e), i = n.visualViewport, a = r.clientWidth, o = r.clientHeight, s = 0, l = 0;
  if (i) {
    a = i.width, o = i.height;
    var u = aw();
    (u || !u && t === "fixed") && (s = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: a,
    height: o,
    x: s + tm(e),
    y: l
  };
}
function n2(e) {
  var t, n = lr(e), r = em(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, a = Cr(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), o = Cr(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), s = -r.scrollLeft + tm(e), l = -r.scrollTop;
  return En(i || n).direction === "rtl" && (s += Cr(n.clientWidth, i ? i.clientWidth : 0) - a), {
    width: a,
    height: o,
    x: s,
    y: l
  };
}
function nm(e) {
  var t = En(e), n = t.overflow, r = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + i + r);
}
function cw(e) {
  return ["html", "body", "#document"].indexOf(ir(e)) >= 0 ? e.ownerDocument.body : rn(e) && nm(e) ? e : cw(lu(e));
}
function ja(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = cw(e), i = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = xt(r), o = i ? [a].concat(a.visualViewport || [], nm(r) ? r : []) : r, s = t.concat(o);
  return i ? s : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    s.concat(ja(lu(o)))
  );
}
function Uf(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function r2(e, t) {
  var n = _i(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function mg(e, t, n) {
  return t === iw ? Uf(t2(e, n)) : jr(t) ? r2(t, n) : Uf(n2(lr(e)));
}
function i2(e) {
  var t = ja(lu(e)), n = ["absolute", "fixed"].indexOf(En(e).position) >= 0, r = n && rn(e) ? Bo(e) : e;
  return jr(r) ? t.filter(function(i) {
    return jr(i) && ow(i, r) && ir(i) !== "body";
  }) : [];
}
function a2(e, t, n, r) {
  var i = t === "clippingParents" ? i2(e) : [].concat(t), a = [].concat(i, [n]), o = a[0], s = a.reduce(function(l, u) {
    var c = mg(e, u, r);
    return l.top = Cr(c.top, l.top), l.right = ll(c.right, l.right), l.bottom = ll(c.bottom, l.bottom), l.left = Cr(c.left, l.left), l;
  }, mg(e, o, r));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function fw(e) {
  var t = e.reference, n = e.element, r = e.placement, i = r ? nn(r) : null, a = r ? Ai(r) : null, o = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, l;
  switch (i) {
    case vt:
      l = {
        x: o,
        y: t.y - n.height
      };
      break;
    case It:
      l = {
        x: o,
        y: t.y + t.height
      };
      break;
    case jt:
      l = {
        x: t.x + t.width,
        y: s
      };
      break;
    case gt:
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
  var u = i ? Jd(i) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (a) {
      case ki:
        l[u] = l[u] - (t[c] / 2 - n[c] / 2);
        break;
      case so:
        l[u] = l[u] + (t[c] / 2 - n[c] / 2);
        break;
    }
  }
  return l;
}
function lo(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, i = r === void 0 ? e.placement : r, a = n.strategy, o = a === void 0 ? e.strategy : a, s = n.boundary, l = s === void 0 ? _T : s, u = n.rootBoundary, c = u === void 0 ? iw : u, d = n.elementContext, p = d === void 0 ? oa : d, g = n.altBoundary, x = g === void 0 ? !1 : g, w = n.padding, h = w === void 0 ? 0 : w, m = lw(typeof h != "number" ? h : uw(h, Lo)), v = p === oa ? AT : oa, b = e.rects.popper, E = e.elements[x ? v : p], C = a2(jr(E) ? E : E.contextElement || lr(e.elements.popper), l, c, o), k = _i(e.elements.reference), P = fw({
    reference: k,
    element: b,
    placement: i
  }), N = Uf(Object.assign({}, b, P)), T = p === oa ? N : k, $ = {
    top: C.top - T.top + m.top,
    bottom: T.bottom - C.bottom + m.bottom,
    left: C.left - T.left + m.left,
    right: T.right - C.right + m.right
  }, Z = e.modifiersData.offset;
  if (p === oa && Z) {
    var B = Z[i];
    Object.keys($).forEach(function(j) {
      var M = [jt, It].indexOf(j) >= 0 ? 1 : -1, L = [vt, It].indexOf(j) >= 0 ? "y" : "x";
      $[j] += B[L] * M;
    });
  }
  return $;
}
function o2(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, i = n.boundary, a = n.rootBoundary, o = n.padding, s = n.flipVariations, l = n.allowedAutoPlacements, u = l === void 0 ? Xd : l, c = Ai(r), d = c ? s ? cg : cg.filter(function(x) {
    return Ai(x) === c;
  }) : Lo, p = d.filter(function(x) {
    return u.indexOf(x) >= 0;
  });
  p.length === 0 && (p = d);
  var g = p.reduce(function(x, w) {
    return x[w] = lo(e, {
      placement: w,
      boundary: i,
      rootBoundary: a,
      padding: o
    })[nn(w)], x;
  }, {});
  return Object.keys(g).sort(function(x, w) {
    return g[x] - g[w];
  });
}
function s2(e) {
  if (nn(e) === Yd)
    return [];
  var t = ks(e);
  return [dg(e), t, dg(t)];
}
function l2(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var i = n.mainAxis, a = i === void 0 ? !0 : i, o = n.altAxis, s = o === void 0 ? !0 : o, l = n.fallbackPlacements, u = n.padding, c = n.boundary, d = n.rootBoundary, p = n.altBoundary, g = n.flipVariations, x = g === void 0 ? !0 : g, w = n.allowedAutoPlacements, h = t.options.placement, m = nn(h), v = m === h, b = l || (v || !x ? [ks(h)] : s2(h)), E = [h].concat(b).reduce(function(V, G) {
      return V.concat(nn(G) === Yd ? o2(t, {
        placement: G,
        boundary: c,
        rootBoundary: d,
        padding: u,
        flipVariations: x,
        allowedAutoPlacements: w
      }) : G);
    }, []), C = t.rects.reference, k = t.rects.popper, P = /* @__PURE__ */ new Map(), N = !0, T = E[0], $ = 0; $ < E.length; $++) {
      var Z = E[$], B = nn(Z), j = Ai(Z) === ki, M = [vt, It].indexOf(B) >= 0, L = M ? "width" : "height", I = lo(t, {
        placement: Z,
        boundary: c,
        rootBoundary: d,
        altBoundary: p,
        padding: u
      }), _ = M ? j ? jt : gt : j ? It : vt;
      C[L] > k[L] && (_ = ks(_));
      var R = ks(_), D = [];
      if (a && D.push(I[B] <= 0), s && D.push(I[_] <= 0, I[R] <= 0), D.every(function(V) {
        return V;
      })) {
        T = Z, N = !1;
        break;
      }
      P.set(Z, D);
    }
    if (N)
      for (var H = x ? 3 : 1, O = function(G) {
        var Y = E.find(function(X) {
          var re = P.get(X);
          if (re)
            return re.slice(0, G).every(function(oe) {
              return oe;
            });
        });
        if (Y)
          return T = Y, "break";
      }, A = H; A > 0; A--) {
        var F = O(A);
        if (F === "break") break;
      }
    t.placement !== T && (t.modifiersData[r]._skip = !0, t.placement = T, t.reset = !0);
  }
}
const u2 = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: l2,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function hg(e, t, n) {
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
function vg(e) {
  return [vt, jt, It, gt].some(function(t) {
    return e[t] >= 0;
  });
}
function c2(e) {
  var t = e.state, n = e.name, r = t.rects.reference, i = t.rects.popper, a = t.modifiersData.preventOverflow, o = lo(t, {
    elementContext: "reference"
  }), s = lo(t, {
    altBoundary: !0
  }), l = hg(o, r), u = hg(s, i, a), c = vg(l), d = vg(u);
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
const f2 = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: c2
};
function p2(e, t, n) {
  var r = nn(e), i = [gt, vt].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, o = a[0], s = a[1];
  return o = o || 0, s = (s || 0) * i, [gt, jt].indexOf(r) >= 0 ? {
    x: s,
    y: o
  } : {
    x: o,
    y: s
  };
}
function d2(e) {
  var t = e.state, n = e.options, r = e.name, i = n.offset, a = i === void 0 ? [0, 0] : i, o = Xd.reduce(function(c, d) {
    return c[d] = p2(d, t.rects, a), c;
  }, {}), s = o[t.placement], l = s.x, u = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = o;
}
const m2 = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: d2
};
function h2(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = fw({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const v2 = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: h2,
  data: {}
};
function g2(e) {
  return e === "x" ? "y" : "x";
}
function y2(e) {
  var t = e.state, n = e.options, r = e.name, i = n.mainAxis, a = i === void 0 ? !0 : i, o = n.altAxis, s = o === void 0 ? !1 : o, l = n.boundary, u = n.rootBoundary, c = n.altBoundary, d = n.padding, p = n.tether, g = p === void 0 ? !0 : p, x = n.tetherOffset, w = x === void 0 ? 0 : x, h = lo(t, {
    boundary: l,
    rootBoundary: u,
    padding: d,
    altBoundary: c
  }), m = nn(t.placement), v = Ai(t.placement), b = !v, E = Jd(m), C = g2(E), k = t.modifiersData.popperOffsets, P = t.rects.reference, N = t.rects.popper, T = typeof w == "function" ? w(Object.assign({}, t.rects, {
    placement: t.placement
  })) : w, $ = typeof T == "number" ? {
    mainAxis: T,
    altAxis: T
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, T), Z = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, B = {
    x: 0,
    y: 0
  };
  if (k) {
    if (a) {
      var j, M = E === "y" ? vt : gt, L = E === "y" ? It : jt, I = E === "y" ? "height" : "width", _ = k[E], R = _ + h[M], D = _ - h[L], H = g ? -N[I] / 2 : 0, O = v === ki ? P[I] : N[I], A = v === ki ? -N[I] : -P[I], F = t.elements.arrow, V = g && F ? Zd(F) : {
        width: 0,
        height: 0
      }, G = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : sw(), Y = G[M], X = G[L], re = Ia(0, P[I], V[I]), oe = b ? P[I] / 2 - H - re - Y - $.mainAxis : O - re - Y - $.mainAxis, pe = b ? -P[I] / 2 + H + re + X + $.mainAxis : A + re + X + $.mainAxis, fe = t.elements.arrow && Bo(t.elements.arrow), xe = fe ? E === "y" ? fe.clientTop || 0 : fe.clientLeft || 0 : 0, $e = (j = Z == null ? void 0 : Z[E]) != null ? j : 0, at = _ + oe - $e - xe, ot = _ + pe - $e, Mt = Ia(g ? ll(R, at) : R, _, g ? Cr(D, ot) : D);
      k[E] = Mt, B[E] = Mt - _;
    }
    if (s) {
      var we, K = E === "x" ? vt : gt, ge = E === "x" ? It : jt, ye = k[C], Me = C === "y" ? "height" : "width", Xe = ye + h[K], Pn = ye - h[ge], W = [vt, gt].indexOf(m) !== -1, ie = (we = Z == null ? void 0 : Z[C]) != null ? we : 0, Oe = W ? Xe : ye - P[Me] - N[Me] - ie + $.altAxis, Ae = W ? ye + P[Me] + N[Me] - ie - $.altAxis : Pn, Le = g && W ? HT(Oe, ye, Ae) : Ia(g ? Oe : Xe, ye, g ? Ae : Pn);
      k[C] = Le, B[C] = Le - ye;
    }
    t.modifiersData[r] = B;
  }
}
const b2 = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: y2,
  requiresIfExists: ["offset"]
};
function x2(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function w2(e) {
  return e === xt(e) || !rn(e) ? em(e) : x2(e);
}
function E2(e) {
  var t = e.getBoundingClientRect(), n = Pi(t.width) / e.offsetWidth || 1, r = Pi(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function O2(e, t, n) {
  n === void 0 && (n = !1);
  var r = rn(t), i = rn(t) && E2(t), a = lr(t), o = _i(e, i, n), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((ir(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  nm(a)) && (s = w2(t)), rn(t) ? (l = _i(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = tm(a))), {
    x: o.left + s.scrollLeft - l.x,
    y: o.top + s.scrollTop - l.y,
    width: o.width,
    height: o.height
  };
}
function S2(e) {
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
function C2(e) {
  var t = S2(e);
  return BT.reduce(function(n, r) {
    return n.concat(t.filter(function(i) {
      return i.phase === r;
    }));
  }, []);
}
function k2(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function P2(e) {
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
var gg = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function yg() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function _2(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, i = t.defaultOptions, a = i === void 0 ? gg : i;
  return function(s, l, u) {
    u === void 0 && (u = a);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, gg, a),
      modifiersData: {},
      elements: {
        reference: s,
        popper: l
      },
      attributes: {},
      styles: {}
    }, d = [], p = !1, g = {
      state: c,
      setOptions: function(m) {
        var v = typeof m == "function" ? m(c.options) : m;
        w(), c.options = Object.assign({}, a, c.options, v), c.scrollParents = {
          reference: jr(s) ? ja(s) : s.contextElement ? ja(s.contextElement) : [],
          popper: ja(l)
        };
        var b = C2(P2([].concat(r, c.options.modifiers)));
        return c.orderedModifiers = b.filter(function(E) {
          return E.enabled;
        }), x(), g.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!p) {
          var m = c.elements, v = m.reference, b = m.popper;
          if (yg(v, b)) {
            c.rects = {
              reference: O2(v, Bo(b), c.options.strategy === "fixed"),
              popper: Zd(b)
            }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function($) {
              return c.modifiersData[$.name] = Object.assign({}, $.data);
            });
            for (var E = 0; E < c.orderedModifiers.length; E++) {
              if (c.reset === !0) {
                c.reset = !1, E = -1;
                continue;
              }
              var C = c.orderedModifiers[E], k = C.fn, P = C.options, N = P === void 0 ? {} : P, T = C.name;
              typeof k == "function" && (c = k({
                state: c,
                options: N,
                name: T,
                instance: g
              }) || c);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: k2(function() {
        return new Promise(function(h) {
          g.forceUpdate(), h(c);
        });
      }),
      destroy: function() {
        w(), p = !0;
      }
    };
    if (!yg(s, l))
      return g;
    g.setOptions(u).then(function(h) {
      !p && u.onFirstUpdate && u.onFirstUpdate(h);
    });
    function x() {
      c.orderedModifiers.forEach(function(h) {
        var m = h.name, v = h.options, b = v === void 0 ? {} : v, E = h.effect;
        if (typeof E == "function") {
          var C = E({
            state: c,
            name: m,
            instance: g,
            options: b
          }), k = function() {
          };
          d.push(C || k);
        }
      });
    }
    function w() {
      d.forEach(function(h) {
        return h();
      }), d = [];
    }
    return g;
  };
}
var A2 = _2({
  defaultModifiers: [f2, v2, XT, ZT, m2, u2, b2, GT]
});
function pw() {
  const e = S.useRef(!0), t = S.useRef(() => e.current);
  return S.useEffect(() => (e.current = !0, () => {
    e.current = !1;
  }), []), t.current;
}
function T2(e) {
  const t = pw();
  return [e[0], S.useCallback((n) => {
    if (t())
      return e[1](n);
  }, [t, e[1]])];
}
var bg = function(t) {
  return {
    position: t,
    top: "0",
    left: "0",
    opacity: "0",
    pointerEvents: "none"
  };
}, I2 = {
  name: "applyStyles",
  enabled: !1
}, j2 = {
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
}, N2 = [];
function R2(e, t, n) {
  var r = n === void 0 ? {} : n, i = r.enabled, a = i === void 0 ? !0 : i, o = r.placement, s = o === void 0 ? "bottom" : o, l = r.strategy, u = l === void 0 ? "absolute" : l, c = r.modifiers, d = c === void 0 ? N2 : c, p = ve(r, ["enabled", "placement", "strategy", "modifiers"]), g = S.useRef(), x = S.useCallback(function() {
    var E;
    (E = g.current) == null || E.update();
  }, []), w = S.useCallback(function() {
    var E;
    (E = g.current) == null || E.forceUpdate();
  }, []), h = T2(S.useState({
    placement: s,
    update: x,
    forceUpdate: w,
    attributes: {},
    styles: {
      popper: bg(u),
      arrow: {}
    }
  })), m = h[0], v = h[1], b = S.useMemo(function() {
    return {
      name: "updateStateModifier",
      enabled: !0,
      phase: "write",
      requires: ["computeStyles"],
      fn: function(C) {
        var k = C.state, P = {}, N = {};
        Object.keys(k.elements).forEach(function(T) {
          P[T] = k.styles[T], N[T] = k.attributes[T];
        }), v({
          state: k,
          styles: P,
          attributes: N,
          update: x,
          forceUpdate: w,
          placement: k.placement
        });
      }
    };
  }, [x, w, v]);
  return S.useEffect(function() {
    !g.current || !a || g.current.setOptions({
      placement: s,
      strategy: u,
      modifiers: [].concat(d, [b, I2])
    });
  }, [u, s, b, a]), S.useEffect(function() {
    if (!(!a || e == null || t == null))
      return g.current = A2(e, t, ne({}, p, {
        placement: s,
        strategy: u,
        modifiers: [].concat(d, [j2, b])
      })), function() {
        g.current != null && (g.current.destroy(), g.current = void 0, v(function(E) {
          return ne({}, E, {
            attributes: {},
            styles: {
              popper: bg(u)
            }
          });
        }));
      };
  }, [a, e, t]), m;
}
function dw(e, t) {
  if (e.contains) return e.contains(t);
  if (e.compareDocumentPosition) return e === t || !!(e.compareDocumentPosition(t) & 16);
}
const D2 = !!(typeof window < "u" && window.document && window.document.createElement);
var Wf = !1, Gf = !1;
try {
  var Zu = {
    get passive() {
      return Wf = !0;
    },
    get once() {
      return Gf = Wf = !0;
    }
  };
  D2 && (window.addEventListener("test", Zu, Zu), window.removeEventListener("test", Zu, !0));
} catch {
}
function F2(e, t, n, r) {
  if (r && typeof r != "boolean" && !Gf) {
    var i = r.once, a = r.capture, o = n;
    !Gf && i && (o = n.__once || function s(l) {
      this.removeEventListener(t, s, a), n.call(this, l);
    }, n.__once = o), e.addEventListener(t, o, Wf ? r : a);
  }
  e.addEventListener(t, n, r);
}
function M2(e, t, n, r) {
  var i = r && typeof r != "boolean" ? r.capture : r;
  e.removeEventListener(t, n, i), n.__once && e.removeEventListener(t, n.__once, i);
}
function ni(e, t, n, r) {
  return F2(e, t, n, r), function() {
    M2(e, t, n, r);
  };
}
function L2(e) {
  const t = S.useRef(e);
  return S.useEffect(() => {
    t.current = e;
  }, [e]), t;
}
function Kf(e) {
  const t = L2(e);
  return S.useCallback(function(...n) {
    return t.current && t.current(...n);
  }, [t]);
}
function rm(e) {
  return e && e.ownerDocument || document;
}
function ul(e) {
  return e && "setState" in e ? Jr.findDOMNode(e) : e ?? null;
}
const B2 = function(e) {
  return rm(ul(e));
};
var $2 = 27, xg = function() {
};
function z2(e) {
  return e.button === 0;
}
function H2(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
var wg = function(t) {
  return t && ("current" in t ? t.current : t);
};
function V2(e, t, n) {
  var r = n === void 0 ? {} : n, i = r.disabled, a = r.clickTrigger, o = a === void 0 ? "click" : a, s = S.useRef(!1), l = t || xg, u = S.useCallback(function(p) {
    var g, x = wg(e);
    ZC(!!x, "RootClose captured a close event but does not have a ref to compare it to. useRootClose(), should be passed a ref that resolves to a DOM node"), s.current = !x || H2(p) || !z2(p) || !!dw(x, (g = p.composedPath == null ? void 0 : p.composedPath()[0]) != null ? g : p.target);
  }, [e]), c = Kf(function(p) {
    s.current || l(p);
  }), d = Kf(function(p) {
    p.keyCode === $2 && l(p);
  });
  S.useEffect(function() {
    if (!(i || e == null)) {
      var p = window.event, g = B2(wg(e)), x = ni(g, o, u, !0), w = ni(g, o, function(v) {
        if (v === p) {
          p = void 0;
          return;
        }
        c(v);
      }), h = ni(g, "keyup", function(v) {
        if (v === p) {
          p = void 0;
          return;
        }
        d(v);
      }), m = [];
      return "ontouchstart" in g.documentElement && (m = [].slice.call(g.body.children).map(function(v) {
        return ni(v, "mousemove", xg);
      })), function() {
        x(), w(), h(), m.forEach(function(v) {
          return v();
        });
      };
    }
  }, [e, i, o, u, c, d]);
}
var Ju = function(t) {
  var n;
  return typeof document > "u" ? null : t == null ? rm().body : (typeof t == "function" && (t = t()), t && "current" in t && (t = t.current), (n = t) != null && n.nodeType && t || null);
};
function Eg(e, t) {
  var n = S.useState(function() {
    return Ju(e);
  }), r = n[0], i = n[1];
  if (!r) {
    var a = Ju(e);
    a && i(a);
  }
  return S.useEffect(function() {
  }, [t, r]), S.useEffect(function() {
    var o = Ju(e);
    o !== r && i(o);
  }, [e, r]), r;
}
function U2(e) {
  var t = {};
  return Array.isArray(e) ? (e == null || e.forEach(function(n) {
    t[n.name] = n;
  }), t) : e || t;
}
function W2(e) {
  return e === void 0 && (e = {}), Array.isArray(e) ? e : Object.keys(e).map(function(t) {
    return e[t].name = t, e[t];
  });
}
function G2(e) {
  var t, n, r, i, a = e.enabled, o = e.enableEvents, s = e.placement, l = e.flip, u = e.offset, c = e.fixed, d = e.containerPadding, p = e.arrowElement, g = e.popperConfig, x = g === void 0 ? {} : g, w = U2(x.modifiers);
  return ne({}, x, {
    placement: s,
    enabled: a,
    strategy: c ? "fixed" : x.strategy,
    modifiers: W2(ne({}, w, {
      eventListeners: {
        enabled: o
      },
      preventOverflow: ne({}, w.preventOverflow, {
        options: d ? ne({
          padding: d
        }, (t = w.preventOverflow) == null ? void 0 : t.options) : (n = w.preventOverflow) == null ? void 0 : n.options
      }),
      offset: {
        options: ne({
          offset: u
        }, (r = w.offset) == null ? void 0 : r.options)
      },
      arrow: ne({}, w.arrow, {
        enabled: !!p,
        options: ne({}, (i = w.arrow) == null ? void 0 : i.options, {
          element: p
        })
      }),
      flip: ne({
        enabled: !!l
      }, w.flip)
    }))
  });
}
var im = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.flip, r = e.offset, i = e.placement, a = e.containerPadding, o = a === void 0 ? 5 : a, s = e.popperConfig, l = s === void 0 ? {} : s, u = e.transition, c = lg(), d = c[0], p = c[1], g = lg(), x = g[0], w = g[1], h = PT(p, t), m = Eg(e.container), v = Eg(e.target), b = S.useState(!e.show), E = b[0], C = b[1], k = R2(v, d, G2({
    placement: i,
    enableEvents: !!e.show,
    containerPadding: o || 5,
    flip: n,
    offset: r,
    arrowElement: x,
    popperConfig: l
  })), P = k.styles, N = k.attributes, T = ve(k, ["styles", "attributes"]);
  e.show ? E && C(!1) : !e.transition && !E && C(!0);
  var $ = function() {
    C(!0), e.onExited && e.onExited.apply(e, arguments);
  }, Z = e.show || u && !E;
  if (V2(d, e.onHide, {
    disabled: !e.rootClose || e.rootCloseDisabled,
    clickTrigger: e.rootCloseEvent
  }), !Z)
    return null;
  var B = e.children(ne({}, T, {
    show: !!e.show,
    props: ne({}, N.popper, {
      style: P.popper,
      ref: h
    }),
    arrowProps: ne({}, N.arrow, {
      style: P.arrow,
      ref: w
    })
  }));
  if (u) {
    var j = e.onExit, M = e.onExiting, L = e.onEnter, I = e.onEntering, _ = e.onEntered;
    B = /* @__PURE__ */ y.createElement(u, {
      in: e.show,
      appear: !0,
      onExit: j,
      onExiting: M,
      onExited: $,
      onEnter: L,
      onEntering: I,
      onEntered: _
    }, B);
  }
  return m ? /* @__PURE__ */ Jr.createPortal(B, m) : null;
});
im.displayName = "Overlay";
im.propTypes = {
  /**
   * Set the visibility of the Overlay
   */
  show: f.bool,
  /** Specify where the overlay element is positioned in relation to the target element */
  placement: f.oneOf(Xd),
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
function ec(e, t) {
  return e.classList ? !!t && e.classList.contains(t) : (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ") !== -1;
}
function tc(e) {
  var t = window.getComputedStyle(e), n = parseFloat(t.marginTop) || 0, r = parseFloat(t.marginRight) || 0, i = parseFloat(t.marginBottom) || 0, a = parseFloat(t.marginLeft) || 0;
  return {
    top: n,
    right: r,
    bottom: i,
    left: a
  };
}
function K2() {
  var e = S.useRef(null), t = S.useRef(null), n = S.useRef(null), r = Re(void 0, "popover"), i = Re(void 0, "dropdown-menu"), a = S.useCallback(function(u) {
    !u || !(ec(u, r) || ec(u, i)) || (t.current = tc(u), u.style.margin = "0", e.current = u);
  }, [r, i]), o = S.useMemo(function() {
    return {
      name: "offset",
      options: {
        offset: function(c) {
          var d = c.placement;
          if (!t.current) return [0, 0];
          var p = t.current, g = p.top, x = p.left, w = p.bottom, h = p.right;
          switch (d.split("-")[0]) {
            case "top":
              return [0, w];
            case "left":
              return [0, h];
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
  }, [t]), s = S.useMemo(function() {
    return {
      name: "arrow",
      options: {
        padding: function() {
          if (!n.current)
            return 0;
          var c = n.current, d = c.top, p = c.right, g = d || p;
          return {
            top: g,
            left: g,
            right: g,
            bottom: g
          };
        }
      }
    };
  }, [n]), l = S.useMemo(function() {
    return {
      name: "popoverArrowMargins",
      enabled: !0,
      phase: "main",
      fn: function() {
      },
      requiresIfExists: ["arrow"],
      effect: function(c) {
        var d = c.state;
        if (!(!e.current || !d.elements.arrow || !ec(e.current, r))) {
          if (d.modifiersData["arrow#persistent"]) {
            var p = tc(d.elements.arrow), g = p.top, x = p.right, w = g || x;
            d.modifiersData["arrow#persistent"].padding = {
              top: w,
              left: w,
              right: w,
              bottom: w
            };
          } else
            n.current = tc(d.elements.arrow);
          return d.elements.arrow.style.margin = "0", function() {
            d.elements.arrow && (d.elements.arrow.style.margin = "");
          };
        }
      }
    };
  }, [r]);
  return [a, [o, s, l]];
}
function qf(e, t) {
  return qf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, qf(e, t);
}
function mw(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, qf(e, t);
}
const Og = {
  disabled: !1
}, hw = y.createContext(null);
var q2 = function(t) {
  return t.scrollTop;
}, ha = "unmounted", dr = "exited", jn = "entering", mr = "entered", Yf = "exiting", Cn = /* @__PURE__ */ function(e) {
  mw(t, e);
  function t(r, i) {
    var a;
    a = e.call(this, r, i) || this;
    var o = i, s = o && !o.isMounting ? r.enter : r.appear, l;
    return a.appearStatus = null, r.in ? s ? (l = dr, a.appearStatus = jn) : l = mr : r.unmountOnExit || r.mountOnEnter ? l = ha : l = dr, a.state = {
      status: l
    }, a.nextCallback = null, a;
  }
  t.getDerivedStateFromProps = function(i, a) {
    var o = i.in;
    return o && a.status === ha ? {
      status: dr
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(i) {
    var a = null;
    if (i !== this.props) {
      var o = this.state.status;
      this.props.in ? o !== jn && o !== mr && (a = jn) : (o === jn || o === mr) && (a = Yf);
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
      if (this.cancelNextCallback(), a === jn) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var o = this.props.nodeRef ? this.props.nodeRef.current : Jr.findDOMNode(this);
          o && q2(o);
        }
        this.performEnter(i);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === dr && this.setState({
      status: ha
    });
  }, n.performEnter = function(i) {
    var a = this, o = this.props.enter, s = this.context ? this.context.isMounting : i, l = this.props.nodeRef ? [s] : [Jr.findDOMNode(this), s], u = l[0], c = l[1], d = this.getTimeouts(), p = s ? d.appear : d.enter;
    if (!i && !o || Og.disabled) {
      this.safeSetState({
        status: mr
      }, function() {
        a.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, c), this.safeSetState({
      status: jn
    }, function() {
      a.props.onEntering(u, c), a.onTransitionEnd(p, function() {
        a.safeSetState({
          status: mr
        }, function() {
          a.props.onEntered(u, c);
        });
      });
    });
  }, n.performExit = function() {
    var i = this, a = this.props.exit, o = this.getTimeouts(), s = this.props.nodeRef ? void 0 : Jr.findDOMNode(this);
    if (!a || Og.disabled) {
      this.safeSetState({
        status: dr
      }, function() {
        i.props.onExited(s);
      });
      return;
    }
    this.props.onExit(s), this.safeSetState({
      status: Yf
    }, function() {
      i.props.onExiting(s), i.onTransitionEnd(o.exit, function() {
        i.safeSetState({
          status: dr
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
    var o = this.props.nodeRef ? this.props.nodeRef.current : Jr.findDOMNode(this), s = i == null && !this.props.addEndListener;
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
    if (i === ha)
      return null;
    var a = this.props, o = a.children;
    a.in, a.mountOnEnter, a.unmountOnExit, a.appear, a.enter, a.exit, a.timeout, a.addEndListener, a.onEnter, a.onEntering, a.onEntered, a.onExit, a.onExiting, a.onExited, a.nodeRef;
    var s = ve(a, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ y.createElement(hw.Provider, {
        value: null
      }, typeof o == "function" ? o(i, s) : y.cloneElement(y.Children.only(o), s))
    );
  }, t;
}(y.Component);
Cn.contextType = hw;
Cn.propTypes = {};
function Ur() {
}
Cn.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Ur,
  onEntering: Ur,
  onEntered: Ur,
  onExit: Ur,
  onExiting: Ur,
  onExited: Ur
};
Cn.UNMOUNTED = ha;
Cn.EXITED = dr;
Cn.ENTERING = jn;
Cn.ENTERED = mr;
Cn.EXITING = Yf;
function Y2(e) {
  var t = rm(e);
  return t && t.defaultView || window;
}
function X2(e, t) {
  return Y2(e).getComputedStyle(e, t);
}
var Q2 = /([A-Z])/g;
function Z2(e) {
  return e.replace(Q2, "-$1").toLowerCase();
}
var J2 = /^ms-/;
function ss(e) {
  return Z2(e).replace(J2, "-ms-");
}
var eI = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function tI(e) {
  return !!(e && eI.test(e));
}
function vw(e, t) {
  var n = "", r = "";
  if (typeof t == "string")
    return e.style.getPropertyValue(ss(t)) || X2(e).getPropertyValue(ss(t));
  Object.keys(t).forEach(function(i) {
    var a = t[i];
    !a && a !== 0 ? e.style.removeProperty(ss(i)) : tI(i) ? r += i + "(" + a + ") " : n += ss(i) + ": " + a + ";";
  }), r && (n += "transform: " + r + ";"), e.style.cssText += ";" + n;
}
function nI(e, t, n, r) {
  if (r === void 0 && (r = !0), e) {
    var i = document.createEvent("HTMLEvents");
    i.initEvent(t, n, r), e.dispatchEvent(i);
  }
}
function rI(e) {
  var t = vw(e, "transitionDuration") || "", n = t.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(t) * n;
}
function iI(e, t, n) {
  n === void 0 && (n = 5);
  var r = !1, i = setTimeout(function() {
    r || nI(e, "transitionend", !0);
  }, t + n), a = ni(e, "transitionend", function() {
    r = !0;
  }, {
    once: !0
  });
  return function() {
    clearTimeout(i), a();
  };
}
function aI(e, t, n, r) {
  n == null && (n = rI(e) || 0);
  var i = iI(e, n, r), a = ni(e, "transitionend", t);
  return function() {
    i(), a();
  };
}
function Sg(e, t) {
  var n = vw(e, t) || "", r = n.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(n) * r;
}
function oI(e, t) {
  var n = Sg(e, "transitionDuration"), r = Sg(e, "transitionDelay"), i = aI(e, function(a) {
    a.target === e && (i(), t(a));
  }, n + r);
}
function sI(e) {
  e.offsetHeight;
}
var lI = ["className", "children"], ls, uI = {
  in: !1,
  timeout: 300,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1
}, cI = (ls = {}, ls[jn] = "show", ls[mr] = "show", ls), Ui = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.className, r = e.children, i = ve(e, lI), a = S.useCallback(function(o) {
    sI(o), i.onEnter && i.onEnter(o);
  }, [i]);
  return /* @__PURE__ */ y.createElement(Cn, ne({
    ref: t,
    addEndListener: oI
  }, i, {
    onEnter: a
  }), function(o, s) {
    return /* @__PURE__ */ y.cloneElement(r, ne({}, s, {
      className: q("fade", n, r.props.className, cI[o])
    }));
  });
});
Ui.defaultProps = uI;
Ui.displayName = "Fade";
var fI = ["children", "transition", "popperConfig"], pI = ["props", "arrowProps", "show", "update", "forceUpdate", "placement", "state"], dI = {
  transition: Ui,
  rootClose: !1,
  show: !1,
  placement: "top"
};
function mI(e, t) {
  var n = e.ref, r = t.ref;
  e.ref = n.__wrapped || (n.__wrapped = function(i) {
    return n(ul(i));
  }), t.ref = r.__wrapped || (r.__wrapped = function(i) {
    return r(ul(i));
  });
}
function gw(e) {
  var t = e.children, n = e.transition, r = e.popperConfig, i = r === void 0 ? {} : r, a = ve(e, fI), o = S.useRef({}), s = K2(), l = s[0], u = s[1], c = n === !0 ? Ui : n || null;
  return /* @__PURE__ */ y.createElement(im, ne({}, a, {
    ref: l,
    popperConfig: ne({}, i, {
      modifiers: u.concat(i.modifiers || [])
    }),
    transition: c
  }), function(d) {
    var p, g = d.props, x = d.arrowProps, w = d.show, h = d.update;
    d.forceUpdate;
    var m = d.placement, v = d.state, b = ve(d, pI);
    mI(g, x);
    var E = Object.assign(o.current, {
      state: v,
      scheduleUpdate: h,
      placement: m,
      outOfBoundaries: (v == null || (p = v.modifiersData.hide) == null ? void 0 : p.isReferenceHidden) || !1
    });
    return typeof t == "function" ? t(ne({}, b, g, {
      placement: m,
      show: w
    }, !n && w && {
      className: "show"
    }, {
      popper: E,
      arrowProps: x
    })) : /* @__PURE__ */ y.cloneElement(t, ne({}, b, g, {
      placement: m,
      arrowProps: x,
      popper: E,
      className: q(t.props.className, !n && w && "show"),
      style: ne({}, t.props.style, g.style)
    }));
  });
}
gw.defaultProps = dI;
function hI(e) {
  const t = S.useRef(e);
  return t.current = e, t;
}
function vI(e) {
  const t = hI(e);
  S.useEffect(() => () => t.current(), []);
}
const Xf = 2 ** 31 - 1;
function yw(e, t, n) {
  const r = n - Date.now();
  e.current = r <= Xf ? setTimeout(t, r) : setTimeout(() => yw(e, t, n), Xf);
}
function gI() {
  const e = pw(), t = S.useRef();
  return vI(() => clearTimeout(t.current)), S.useMemo(() => {
    const n = () => clearTimeout(t.current);
    function r(i, a = 0) {
      e() && (n(), a <= Xf ? t.current = setTimeout(i, a) : yw(t, i, Date.now() + a));
    }
    return {
      set: r,
      clear: n,
      handleRef: t
    };
  }, []);
}
function Cg(e) {
  return "default" + e.charAt(0).toUpperCase() + e.substr(1);
}
function yI(e) {
  var t = bI(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function bI(e, t) {
  if (typeof e != "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function bw(e, t, n) {
  var r = S.useRef(e !== void 0), i = S.useState(t), a = i[0], o = i[1], s = e !== void 0, l = r.current;
  return r.current = s, !s && l && a !== t && o(t), [s ? e : a, S.useCallback(function(u) {
    for (var c = arguments.length, d = new Array(c > 1 ? c - 1 : 0), p = 1; p < c; p++)
      d[p - 1] = arguments[p];
    n && n.apply(void 0, [u].concat(d)), o(u);
  }, [n])];
}
function xI(e, t) {
  return Object.keys(t).reduce(function(n, r) {
    var i, a = n, o = a[Cg(r)], s = a[r], l = ve(a, [Cg(r), r].map(yI)), u = t[r], c = bw(s, o, e[u]), d = c[0], p = c[1];
    return ne({}, l, (i = {}, i[r] = d, i[u] = p, i));
  }, e);
}
var wI = ["trigger", "overlay", "children", "popperConfig", "show", "defaultShow", "onToggle", "delay", "placement", "flip"], EI = /* @__PURE__ */ function(e) {
  mw(t, e);
  function t() {
    return e.apply(this, arguments) || this;
  }
  var n = t.prototype;
  return n.render = function() {
    return this.props.children;
  }, t;
}(y.Component);
function OI(e) {
  return e && typeof e == "object" ? e : {
    show: e,
    hide: e
  };
}
function kg(e, t, n) {
  var r = t[0], i = r.currentTarget, a = r.relatedTarget || r.nativeEvent[n];
  (!a || a !== i) && !dw(i, a) && e.apply(void 0, t);
}
var SI = {
  defaultShow: !1,
  trigger: ["hover", "focus"]
};
function xw(e) {
  var t = e.trigger, n = e.overlay, r = e.children, i = e.popperConfig, a = i === void 0 ? {} : i, o = e.show, s = e.defaultShow, l = s === void 0 ? !1 : s, u = e.onToggle, c = e.delay, d = e.placement, p = e.flip, g = p === void 0 ? d && d.indexOf("auto") !== -1 : p, x = ve(e, wI), w = S.useRef(null), h = gI(), m = S.useRef(""), v = bw(o, l, u), b = v[0], E = v[1], C = OI(c), k = typeof r != "function" ? y.Children.only(r).props : {}, P = k.onFocus, N = k.onBlur, T = k.onClick, $ = S.useCallback(function() {
    return ul(w.current);
  }, []), Z = S.useCallback(function() {
    if (h.clear(), m.current = "show", !C.show) {
      E(!0);
      return;
    }
    h.set(function() {
      m.current === "show" && E(!0);
    }, C.show);
  }, [C.show, E, h]), B = S.useCallback(function() {
    if (h.clear(), m.current = "hide", !C.hide) {
      E(!1);
      return;
    }
    h.set(function() {
      m.current === "hide" && E(!1);
    }, C.hide);
  }, [C.hide, E, h]), j = S.useCallback(function() {
    Z();
    for (var H = arguments.length, O = new Array(H), A = 0; A < H; A++)
      O[A] = arguments[A];
    P == null || P.apply(void 0, O);
  }, [Z, P]), M = S.useCallback(function() {
    B();
    for (var H = arguments.length, O = new Array(H), A = 0; A < H; A++)
      O[A] = arguments[A];
    N == null || N.apply(void 0, O);
  }, [B, N]), L = S.useCallback(function() {
    E(!b), T && T.apply(void 0, arguments);
  }, [T, E, b]), I = S.useCallback(function() {
    for (var H = arguments.length, O = new Array(H), A = 0; A < H; A++)
      O[A] = arguments[A];
    kg(Z, O, "fromElement");
  }, [Z]), _ = S.useCallback(function() {
    for (var H = arguments.length, O = new Array(H), A = 0; A < H; A++)
      O[A] = arguments[A];
    kg(B, O, "toElement");
  }, [B]), R = t == null ? [] : [].concat(t), D = {};
  return R.indexOf("click") !== -1 && (D.onClick = L), R.indexOf("focus") !== -1 && (D.onFocus = j, D.onBlur = M), R.indexOf("hover") !== -1 && (D.onMouseOver = I, D.onMouseOut = _), /* @__PURE__ */ y.createElement(y.Fragment, null, typeof r == "function" ? r(ne({}, D, {
    ref: w
  })) : /* @__PURE__ */ y.createElement(EI, {
    ref: w
  }, /* @__PURE__ */ S.cloneElement(r, D)), /* @__PURE__ */ y.createElement(gw, ne({}, x, {
    show: b,
    onHide: B,
    flip: g,
    placement: d,
    popperConfig: a,
    target: $
  }), n));
}
xw.defaultProps = SI;
var ww = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"], CI = ["hover", "click", "focus"];
function am(e) {
  return /* @__PURE__ */ y.createElement(xw, e, e.children);
}
var Pg = f.oneOf(CI);
f.node.isRequired, f.oneOfType([f.elementType, f.func]), f.func, f.func, f.func, f.func, f.func, f.func, f.func, f.oneOf(ww), f.shape({}), f.bool, f.oneOf(["click", "mousedown"]), f.bool, f.oneOfType([f.elementType, f.func]), f.oneOfType([f.object, f.bool]);
am.propTypes = {
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
  placement: f.oneOf(ww),
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
  trigger: f.oneOfType([Pg, f.arrayOf(Pg)])
};
am.defaultProps = {
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
var _g = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = n;
  function n(r) {
    return function(a, o, s, l, u) {
      var c = s || "<<anonymous>>", d = u || o;
      if (a[o] == null)
        return new Error("The " + l + " `" + d + "` is required to make " + ("`" + c + "` accessible for users of assistive ") + "technologies such as screen readers.");
      for (var p = arguments.length, g = Array(p > 5 ? p - 5 : 0), x = 5; x < p; x++)
        g[x - 5] = arguments[x];
      return r.apply(void 0, [a, o, s, l, u].concat(g));
    };
  }
  e.exports = t.default;
})(_g, _g.exports);
var kI = ["bsPrefix", "placement", "className", "style", "children", "arrowProps", "popper", "show"], PI = {
  placement: "right"
}, uu = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.placement, i = e.className, a = e.style, o = e.children, s = e.arrowProps;
  e.popper, e.show;
  var l = ve(e, kI);
  n = Re(n, "tooltip");
  var u = (r == null ? void 0 : r.split("-")) || [], c = u[0];
  return /* @__PURE__ */ y.createElement("div", ne({
    ref: t,
    style: a,
    role: "tooltip",
    "x-placement": c,
    className: q(i, n, "bs-tooltip-" + c)
  }, l), /* @__PURE__ */ y.createElement("div", ne({
    className: "arrow"
  }, s)), /* @__PURE__ */ y.createElement("div", {
    className: n + "-inner"
  }, o));
});
uu.defaultProps = PI;
uu.displayName = "Tooltip";
function uo(e) {
  "@babel/helpers - typeof";
  return uo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, uo(e);
}
var _I = ["children", "variant"];
function Ag(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function cl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ag(Object(n), !0).forEach(function(r) {
      AI(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ag(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function AI(e, t, n) {
  return t = TI(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function TI(e) {
  var t = II(e, "string");
  return uo(t) == "symbol" ? t : t + "";
}
function II(e, t) {
  if (uo(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (uo(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Qf() {
  return Qf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Qf.apply(this, arguments);
}
function jI(e, t) {
  if (e == null) return {};
  var n = NI(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function NI(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var RI = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"], fl = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.children, r = e.variant, i = jI(e, _I);
  return /* @__PURE__ */ y.createElement(uu, Qf({}, i, {
    className: q({
      "tooltip-light": r === "light"
    }, i.className),
    ref: t
  }), n);
});
fl.propTypes = cl(cl({}, uu.propTypes), {}, {
  /** An html id attribute, necessary for accessibility. */
  id: f.string.isRequired,
  /**
   * Sets the direction the `Tooltip` is positioned towards.
   *
   * This is generally provided by the `Overlay` component positioning the tooltip.
   */
  placement: f.oneOf(RI),
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
fl.defaultProps = cl(cl({}, fl.defaultProps), {}, {
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
function co(e) {
  "@babel/helpers - typeof";
  return co = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, co(e);
}
var DI = ["className", "alt", "invertColors", "icon", "src", "iconClassNames", "onClick", "size", "variant", "iconAs", "isActive"], FI = ["tooltipPlacement", "tooltipContent", "variant", "invertColors"];
function pl() {
  return pl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, pl.apply(this, arguments);
}
function MI(e, t, n) {
  return t = LI(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function LI(e) {
  var t = BI(e, "string");
  return co(t) == "symbol" ? t : t + "";
}
function BI(e, t) {
  if (co(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (co(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ew(e, t) {
  if (e == null) return {};
  var n = $I(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function $I(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var $o = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.className, r = e.alt, i = e.invertColors, a = e.icon, o = e.src, s = e.iconClassNames, l = e.onClick, u = e.size, c = e.variant, d = e.iconAs, p = e.isActive, g = Ew(e, DI), x = i ? "inverse-" : "", w = p ? "".concat(c, "-") : "", h = d || Mo;
  return /* @__PURE__ */ y.createElement("button", pl({
    "aria-label": r,
    className: q("btn-icon", "btn-icon-".concat(x).concat(c), "btn-icon-".concat(u), MI({}, "btn-icon-".concat(x).concat(w, "active"), p), n),
    onClick: l,
    type: "button",
    ref: t
  }, g), /* @__PURE__ */ y.createElement("span", {
    className: "btn-icon__icon-container"
  }, /* @__PURE__ */ y.createElement(h, {
    className: q("btn-icon__icon", s),
    icon: a,
    src: o
  })));
});
$o.defaultProps = {
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
$o.propTypes = {
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
function om(e) {
  var t = e.tooltipPlacement, n = e.tooltipContent, r = e.variant, i = e.invertColors, a = Ew(e, FI), o = i ? "inverse-" : "";
  return /* @__PURE__ */ y.createElement(am, {
    placement: t,
    overlay: /* @__PURE__ */ y.createElement(fl, {
      id: "iconbutton-tooltip-".concat(t),
      variant: o ? "light" : ""
    }, n)
  }, /* @__PURE__ */ y.createElement($o, pl({
    variant: r,
    invertColors: i
  }, a)));
}
om.defaultProps = {
  tooltipPlacement: "top",
  variant: "primary",
  invertColors: !1
};
om.propTypes = {
  /** tooltip placement can be top, left, right etc, per https://popper.js.org/docs/v2/constructors/#options  */
  tooltipPlacement: f.string,
  /** any valid JSX or text to be rendered as tooltip contents */
  tooltipContent: f.node.isRequired,
  /** Type of button (uses Bootstrap options) */
  variant: f.oneOf(["primary", "secondary", "success", "warning", "danger", "light", "dark", "black", "brand"]),
  /** Changes icon styles for dark background */
  invertColors: f.bool
};
$o.IconButtonWithTooltip = om;
var zI = ["bsPrefix", "variant", "animation", "size", "children", "as", "className"], Ow = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.variant, i = e.animation, a = e.size, o = e.children, s = e.as, l = s === void 0 ? "div" : s, u = e.className, c = ve(e, zI);
  n = Re(n, "spinner");
  var d = n + "-" + i;
  return /* @__PURE__ */ y.createElement(l, ne({
    ref: t
  }, c, {
    className: q(u, d, a && d + "-" + a, r && "text-" + r)
  }), o);
});
Ow.displayName = "Spinner";
function fo(e) {
  "@babel/helpers - typeof";
  return fo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, fo(e);
}
var HI = ["className", "screenReaderText"];
function Zf() {
  return Zf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Zf.apply(this, arguments);
}
function Tg(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Ig(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Tg(Object(n), !0).forEach(function(r) {
      VI(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Tg(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function VI(e, t, n) {
  return t = UI(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function UI(e) {
  var t = WI(e, "string");
  return fo(t) == "symbol" ? t : t + "";
}
function WI(e, t) {
  if (fo(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (fo(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function GI(e, t) {
  if (e == null) return {};
  var n = KI(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function KI(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var cu = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.className, r = e.screenReaderText, i = GI(e, HI), a = Ig(Ig({}, i), {}, {
    className: q("pgn__spinner", n),
    role: r ? "status" : void 0
  });
  return /* @__PURE__ */ y.createElement(Ow, Zf({}, a, {
    ref: t
  }), r && /* @__PURE__ */ y.createElement("span", {
    className: "sr-only"
  }, r));
});
cu.propTypes = {
  /** Specifies the class name for the component. */
  className: f.string,
  /** Specifies the screen reader content for a11y. */
  screenReaderText: f.node
};
cu.defaultProps = {
  className: void 0,
  screenReaderText: void 0
};
function qI(e, t) {
  return ZI(e) || QI(e, t) || XI(e, t) || YI();
}
function YI() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function XI(e, t) {
  if (e) {
    if (typeof e == "string") return jg(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return jg(e, t);
  }
}
function jg(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function QI(e, t) {
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
function ZI(e) {
  if (Array.isArray(e)) return e;
}
function JI(e) {
  var t = e.event, n = e.currentIndex, r = e.activeElement;
  n !== -1 && (r.click(), t.preventDefault());
}
function ej(e) {
  var t = e.event, n = e.currentIndex, r = e.availableElements;
  n === -1 && r[0].focus();
  var i;
  if ((t.key === "ArrowDown" || t.key === "ArrowRight") && (i = r[(n + 1) % r.length]), (t.key === "ArrowUp" || t.key === "ArrowLeft") && (i = n - 1 < 0 ? r[n - 1 + r.length] : r[n - 1]), t.key === "End" && (i = r[r.length - 1]), t.key === "Home") {
    var a = qI(r, 1);
    i = a[0];
  }
  i && i.focus(), t.preventDefault();
}
function tj(e) {
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
          s === "Enter" && JI({
            event: t,
            currentIndex: d,
            activeElement: u
          }), ej({
            event: t,
            currentIndex: d,
            availableElements: c
          });
        }
      }
    }
  }
}
function nj(e) {
  var t = e || {}, n = t.selectors, r = t.ignoredKeys, i = S.useRef();
  return S.useEffect(function() {
    var a = function(s) {
      tj({
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
const Ng = {
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
function po(e) {
  "@babel/helpers - typeof";
  return po = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, po(e);
}
var rj = ["children", "arrowKeyNavigationSelector", "ignoredArrowKeysNames", "screenReaderText", "value", "isLoading", "isValueRequired", "valueRequiredErrorMessageText", "isSelectionRequired", "selectionRequiredErrorMessageText", "hasCustomError", "customErrorMessageText", "onChange", "helpMessage"], ij = ["children", "onClick"];
function Jf() {
  return Jf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Jf.apply(this, arguments);
}
function Rg(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Dg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Rg(Object(n), !0).forEach(function(r) {
      aj(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Rg(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function aj(e, t, n) {
  return t = oj(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function oj(e) {
  var t = sj(e, "string");
  return po(t) == "symbol" ? t : t + "";
}
function sj(e, t) {
  if (po(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (po(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function un(e, t) {
  return fj(e) || cj(e, t) || uj(e, t) || lj();
}
function lj() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function uj(e, t) {
  if (e) {
    if (typeof e == "string") return Fg(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Fg(e, t);
  }
}
function Fg(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function cj(e, t) {
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
function fj(e) {
  if (Array.isArray(e)) return e;
}
function Mg(e, t) {
  if (e == null) return {};
  var n = pj(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function pj(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var sm = /* @__PURE__ */ S.forwardRef(function(e, t) {
  var n = e.children, r = e.arrowKeyNavigationSelector, i = e.ignoredArrowKeysNames, a = e.screenReaderText, o = e.value, s = e.isLoading, l = e.isValueRequired, u = e.valueRequiredErrorMessageText, c = e.isSelectionRequired, d = e.selectionRequiredErrorMessageText, p = e.hasCustomError, g = e.customErrorMessageText, x = e.onChange, w = e.helpMessage, h = Mg(e, rj), m = $i(), v = S.useRef(), b = nj({
    selectors: r,
    ignoredKeys: i
  }), E = S.useState(!1), C = un(E, 2), k = C[0], P = C[1], N = S.useState(!1), T = un(N, 2), $ = T[0], Z = T[1], B = S.useState(!1), j = un(B, 2), M = j[0], L = j[1], I = S.useState(!1), _ = un(I, 2), R = _[0], D = _[1], H = S.useState((o == null ? void 0 : o.userProvidedText) || ""), O = un(H, 2), A = O[0], F = O[1], V = S.useState([]), G = un(V, 2), Y = G[0], X = G[1], re = S.useState(null), oe = un(re, 2), pe = oe[0], fe = oe[1], xe = S.useState(!0), $e = un(xe, 2), at = $e[0], ot = $e[1], Mt = S.useState(""), we = un(Mt, 2), K = we[0], ge = we[1], ye = function(De) {
    fe(De);
  }, Me = function() {
    X([]), P(!1), fe(null);
  }, Xe = function(De, Qe) {
    var Lt = De.currentTarget.getAttribute("data-value"), Bt = De.currentTarget.id;
    L(!0), D(!0), F(Lt), x && (!o || o && Lt !== o.selectionValue) && x({
      userProvidedText: Lt,
      selectionValue: Lt,
      selectionId: Bt
    }), Me(), Qe && Qe(De);
  };
  function Pn() {
    var Ie = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", De = y.Children.map(n, function(Qe) {
      var Lt, Bt = Qe.props, Ho = Bt.children, oE = Bt.onClick, sE = Mg(Bt, ij), Am = (Lt = Qe.props.id) !== null && Lt !== void 0 ? Lt : u_();
      return /* @__PURE__ */ y.cloneElement(Qe, Dg(Dg({}, sE), {}, {
        children: Ho,
        "data-value": Ho,
        onClick: function(uE) {
          return Xe(uE, oE);
        },
        id: Am,
        onFocus: function() {
          return ye(Am);
        }
      }));
    });
    return Ie.length > 0 && (De = De.filter(function(Qe) {
      return Qe.props.children.toLowerCase().includes(Ie.toLowerCase());
    })), De;
  }
  var W = function() {
    X(Pn(A)), ot(!0), ge(""), P(!0);
  }, ie = function() {
    k ? Me() : W();
  }, Oe = /* @__PURE__ */ y.createElement($o, {
    className: "pgn__form-autosuggest__icon-button",
    "data-testid": "autosuggest-iconbutton",
    tabIndex: "-1",
    src: k ? qk : Kk,
    iconAs: gn,
    size: "sm",
    variant: "secondary",
    alt: k ? m.formatMessage(Ng.iconButtonClosed) : m.formatMessage(Ng.iconButtonOpened),
    onClick: ie
  }), Ae = function() {
    Z(!0);
  }, Le = function() {
    if (p) {
      ot(!1), ge(g);
      return;
    }
    if (l && !M) {
      ot(!1), ge(u);
      return;
    }
    if (M && c && !R) {
      ot(!1), ge(d);
      return;
    }
    ot(!0), ge("");
  };
  S.useImperativeHandle(t, function() {
    return {
      // expose updateErrorStateAndErrorMessage so consumers can trigger validation
      // when changing the value of the control externally
      updateErrorStateAndErrorMessage: Le
    };
  });
  var _n = function() {
    Z(!1), Me(), Le();
  }, sn = function(De) {
    if ($) {
      if (De.key === "Escape") {
        De.preventDefault(), v && v.current.focus(), Me();
        return;
      }
      De.key === "Tab" && _n();
    }
  }, zr = function(De) {
    b.current && !b.current.contains(De.target) && $ && _n();
  };
  S.useEffect(function() {
    return document.addEventListener("keydown", sn), document.addEventListener("click", zr, !0), function() {
      document.removeEventListener("click", zr, !0), document.removeEventListener("keydown", sn);
    };
  }), S.useEffect(function() {
    var Ie;
    F(o && (Ie = o.userProvidedText) !== null && Ie !== void 0 ? Ie : ""), L(!!o && !!o.userProvidedText), D(!!o && !!o.selectionValue);
  }, [o]);
  var Wi = function() {
    W();
  }, Gi = function(De) {
    var Qe = De.target.value;
    if (!Qe.length) {
      F(""), L(!1), D(!1), X([]), Me(), x && x({
        userProvidedText: "",
        selectionValue: "",
        selectionId: ""
      });
      return;
    }
    L(!0);
    var Lt = Pn(Qe);
    X(Lt);
    var Bt = Lt.find(function(Ho) {
      return Ho.props.children.toLowerCase() === Qe.toLowerCase();
    });
    if (!Bt) {
      D(!1), F(Qe), x && x({
        userProvidedText: Qe,
        selectionValue: "",
        selectionId: ""
      });
      return;
    }
    D(!0), F(Bt.props.children), x && x({
      userProvidedText: Bt.props.children,
      selectionValue: Bt.props.children,
      selectionId: Bt.props.id
    });
  }, Hr = Ft(), Ki = Hr.getControlProps, ur = Ki(h);
  return /* @__PURE__ */ y.createElement("div", {
    className: "pgn__form-autosuggest__wrapper",
    ref: b,
    onFocus: Ae
  }, /* @__PURE__ */ y.createElement("div", {
    "aria-live": "assertive",
    className: "sr-only",
    "data-testid": "autosuggest-screen-reader-options-count"
  }, "".concat(Y.length, " options found")), /* @__PURE__ */ y.createElement(zi, {
    controlId: ur.id,
    isInvalid: !at
  }, /* @__PURE__ */ y.createElement(Hi, Jf({
    ref: v,
    "aria-expanded": (Y.length > 0).toString(),
    "aria-owns": "pgn__form-autosuggest__dropdown-box",
    role: "combobox",
    "aria-autocomplete": "list",
    autoComplete: "off",
    value: A,
    "aria-invalid": K,
    "aria-activedescendant": pe,
    onChange: Gi,
    onClick: Wi,
    trailingElement: Oe,
    "data-testid": "autosuggest-textbox-input"
  }, ur)), w && at && /* @__PURE__ */ y.createElement(er, {
    type: "default"
  }, w), !at && /* @__PURE__ */ y.createElement(er, {
    type: "invalid",
    "feedback-for": ur.name
  }, K)), /* @__PURE__ */ y.createElement("ul", {
    id: "pgn__form-autosuggest__dropdown-box",
    className: "pgn__form-autosuggest__dropdown",
    role: "listbox"
  }, s ? /* @__PURE__ */ y.createElement("div", {
    className: "pgn__form-autosuggest__dropdown-loading"
  }, /* @__PURE__ */ y.createElement(cu, {
    animation: "border",
    variant: "dark",
    screenReaderText: a,
    "data-testid": "autosuggest-loading-spinner"
  })) : Y.length > 0 && Y));
});
sm.defaultProps = {
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
sm.propTypes = {
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
  valueRequiredErrorMessageText: Wu(f.string, "isValueRequired"),
  /** Specifies if freeform values trigger an error state */
  isSelectionRequired: f.bool,
  /** Informs user they must make a selection. */
  selectionRequiredErrorMessageText: Wu(f.string, "isSelectionRequired"),
  /** Specifies the control is in a consumer provided error state */
  hasCustomError: f.bool,
  /** Informs user of other errors. */
  customErrorMessageText: Wu(f.string, "hasCustomError"),
  /** Specifies the name of the base input element. */
  name: f.string,
  /** Selected list item is read-only. */
  readOnly: f.bool,
  /** Specifies the content of the `FormAutosuggest`. */
  children: f.node,
  /** Specifies the screen reader text */
  screenReaderText: f.string
};
function mo(e) {
  "@babel/helpers - typeof";
  return mo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, mo(e);
}
var dj = ["as", "children", "defaultSelected", "iconAfter", "iconBefore"];
function Lg(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Bg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Lg(Object(n), !0).forEach(function(r) {
      mj(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Lg(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function mj(e, t, n) {
  return t = hj(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function hj(e) {
  var t = vj(e, "string");
  return mo(t) == "symbol" ? t : t + "";
}
function vj(e, t) {
  if (mo(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (mo(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
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
function lm(e) {
  var t = e.as, n = e.children;
  e.defaultSelected;
  var r = e.iconAfter, i = e.iconBefore, a = gj(e, dj), o = q(a.className, "pgn__menu-item");
  return /* @__PURE__ */ y.createElement(t, Bg(Bg({}, a), {}, {
    className: o
  }), /* @__PURE__ */ y.createElement(y.Fragment, null, i && /* @__PURE__ */ y.createElement(gn, {
    className: "btn-icon-before",
    src: i
  }), /* @__PURE__ */ y.createElement("span", {
    className: "pgn__menu-item-text"
  }, n), /* @__PURE__ */ y.createElement("span", {
    className: "pgn__menu-item-content-spacer"
  }), r && /* @__PURE__ */ y.createElement(gn, {
    className: "btn-icon-after",
    src: r
  })));
}
lm.propTypes = {
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
lm.defaultProps = {
  defaultSelected: !1,
  as: "button",
  className: void 0,
  children: null,
  iconBefore: void 0,
  iconAfter: void 0
};
var bj = ["children", "className", "onClick"];
function ep() {
  return ep = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ep.apply(this, arguments);
}
function xj(e, t) {
  if (e == null) return {};
  var n = wj(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function wj(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function um(e) {
  var t = e.children, n = e.className, r = e.onClick, i = xj(e, bj);
  return /* @__PURE__ */ y.createElement(lm, ep({
    as: "li",
    "data-testid": "autosuggest-optionitem",
    role: "option",
    tabIndex: "-1",
    onClick: r,
    className: q(n, "dropdown-item")
  }, i), t);
}
um.defaultProps = {
  className: null,
  children: null,
  onClick: null
};
um.propTypes = {
  /** Specifies class name to append to the base element. */
  className: f.string,
  /** Specifies the text-content of the `FormAutosuggestOption`. */
  children: f.string,
  /** A click handler for the `FormAutosuggestOption` */
  onClick: f.func
};
function ho(e) {
  "@babel/helpers - typeof";
  return ho = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ho(e);
}
function $g(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function zg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? $g(Object(n), !0).forEach(function(r) {
      Ej(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : $g(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Ej(e, t, n) {
  return t = Oj(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Oj(e) {
  var t = Sj(e, "string");
  return ho(t) == "symbol" ? t : t + "";
}
function Sj(e, t) {
  if (ho(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (ho(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Cj = function(t) {
  return t;
}, Sw = /* @__PURE__ */ y.createContext({
  getCheckboxControlProps: Cj,
  hasCheckboxSetProvider: !1
}), Cw = function() {
  return S.useContext(Sw);
};
function cm(e) {
  var t = e.children, n = e.name, r = e.onBlur, i = e.onFocus, a = e.onChange, o = e.value, s = e.defaultValue, l = !s && Array.isArray(o), u = function(p) {
    return zg(zg({}, p), {}, {
      name: n,
      /* istanbul ignore next */
      onBlur: p.onBlur ? Sr(r, p.onBlur) : r,
      /* istanbul ignore next */
      onFocus: p.onFocus ? Sr(i, p.onFocus) : i,
      /* istanbul ignore next */
      onChange: p.onChange ? Sr(a, p.onChange) : a,
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
  return /* @__PURE__ */ y.createElement(Sw.Provider, {
    value: c
  }, t);
}
cm.propTypes = {
  children: f.node.isRequired,
  name: f.string,
  onBlur: f.func,
  onFocus: f.func,
  onChange: f.func,
  value: f.arrayOf(f.string),
  defaultValue: f.arrayOf(f.string)
};
cm.defaultProps = {
  onBlur: void 0,
  name: void 0,
  onFocus: void 0,
  onChange: void 0,
  value: void 0,
  defaultValue: void 0
};
function vo(e) {
  "@babel/helpers - typeof";
  return vo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, vo(e);
}
var kj = ["isIndeterminate"], Pj = ["children", "className", "controlClassName", "labelClassName", "description", "isInvalid", "isValid", "controlAs", "floatLabelLeft"];
function dl() {
  return dl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, dl.apply(this, arguments);
}
function Hg(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ri(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Hg(Object(n), !0).forEach(function(r) {
      _j(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Hg(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function _j(e, t, n) {
  return t = Aj(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Aj(e) {
  var t = Tj(e, "string");
  return vo(t) == "symbol" ? t : t + "";
}
function Tj(e, t) {
  if (vo(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (vo(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function kw(e, t) {
  if (e == null) return {};
  var n = Ij(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Ij(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var fm = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.isIndeterminate, r = kw(e, kj), i = Cw(), a = i.getCheckboxControlProps, o = i.hasCheckboxSetProvider, s = y.useRef(), l = t || s, u = Ft(), c = u.getControlProps, d = c(ri(ri({}, r), {}, {
    className: q("pgn__form-checkbox-input", r.className)
  }));
  return o && (d = a(d)), y.useEffect(function() {
    l.current && (l.current.indeterminate = n);
  }, [l, n]), /* @__PURE__ */ y.createElement("input", dl({
    type: "checkbox"
  }, d, {
    ref: l
  }));
});
fm.propTypes = {
  /** Specifies whether the checkbox should be rendered in indeterminate state. */
  isIndeterminate: f.bool,
  /** Specifies class name to append to the base element. */
  className: f.string
};
fm.defaultProps = {
  isIndeterminate: !1,
  className: void 0
};
var fu = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.children, r = e.className, i = e.controlClassName, a = e.labelClassName, o = e.description, s = e.isInvalid, l = e.isValid, u = e.controlAs, c = e.floatLabelLeft, d = kw(e, Pj), p = Cw(), g = p.hasCheckboxSetProvider, x = Ft(), w = x.hasFormGroupProvider, h = x.useSetIsControlGroupEffect, m = x.getControlProps;
  h(!0);
  var v = w && !g, b = v ? ri(ri({}, m({})), {}, {
    role: "group"
  }) : {}, E = /* @__PURE__ */ y.createElement(u, ri(ri({}, d), {}, {
    className: i,
    ref: t
  }));
  return /* @__PURE__ */ y.createElement(zi, {
    controlId: d.id,
    isInvalid: s,
    isValid: l
  }, /* @__PURE__ */ y.createElement("div", dl({
    className: q("pgn__form-checkbox", r, {
      "pgn__form-control-valid": l,
      "pgn__form-control-invalid": s,
      "pgn__form-control-disabled": d.disabled,
      "pgn__form-control-label-left": !!c
    })
  }, b), E, /* @__PURE__ */ y.createElement("div", null, /* @__PURE__ */ y.createElement(Ro, {
    className: a
  }, n), o && /* @__PURE__ */ y.createElement(er, {
    hasIcon: !1
  }, o))));
});
fu.propTypes = {
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
fu.defaultProps = {
  id: void 0,
  className: void 0,
  controlClassName: void 0,
  labelClassName: void 0,
  description: void 0,
  isInvalid: !1,
  isValid: !1,
  controlAs: fm,
  floatLabelLeft: !1,
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
var jj = ["isIndeterminate"], Nj = ["children", "className", "helperText"];
function ml() {
  return ml = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ml.apply(this, arguments);
}
function Vg(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Ug(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Vg(Object(n), !0).forEach(function(r) {
      Rj(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Vg(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Rj(e, t, n) {
  return t = Dj(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Dj(e) {
  var t = Fj(e, "string");
  return go(t) == "symbol" ? t : t + "";
}
function Fj(e, t) {
  if (go(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (go(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Pw(e, t) {
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
var pm = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.isIndeterminate, r = Pw(e, jj), i = y.useRef(), a = t || i, o = Ft(), s = o.getControlProps, l = s(Ug(Ug({}, r), {}, {
    className: q("pgn__form-switch-input", r.className)
  }));
  return y.useEffect(function() {
    a.current && (a.current.indeterminate = n);
  }, [a, n]), /* @__PURE__ */ y.createElement("input", ml({
    type: "checkbox"
  }, l, {
    ref: a
  }));
});
pm.propTypes = {
  /** Specifies whether input should be rendered in indeterminate state. */
  isIndeterminate: f.bool,
  /** Specifies class name to append to the base element. */
  className: f.string
};
pm.defaultProps = {
  isIndeterminate: !1,
  className: void 0
};
var dm = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.children, r = e.className, i = e.helperText, a = Pw(e, Nj);
  return /* @__PURE__ */ y.createElement("div", {
    className: "d-inline-flex flex-column"
  }, /* @__PURE__ */ y.createElement(fu, ml({
    className: q("pgn__form-switch", r)
  }, a, {
    role: "switch",
    ref: t,
    controlAs: pm,
    isValid: null,
    isInvalid: null,
    description: null
  }), n), i && /* @__PURE__ */ y.createElement("div", {
    className: "pgn__form-switch-helper-text"
  }, i));
});
dm.propTypes = {
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
dm.defaultProps = {
  className: void 0,
  labelClassName: void 0,
  helperText: void 0,
  floatLabelLeft: !1
};
var Lj = ["children", "name", "value", "defaultValue", "isInline", "onChange", "onFocus", "onBlur"];
function tp() {
  return tp = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, tp.apply(this, arguments);
}
function Bj(e, t) {
  if (e == null) return {};
  var n = $j(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function $j(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function pu(e) {
  var t = e.children, n = e.name, r = e.value, i = e.defaultValue, a = e.isInline, o = e.onChange, s = e.onFocus, l = e.onBlur, u = Bj(e, Lj), c = Ft(), d = c.getControlProps, p = c.useSetIsControlGroupEffect;
  p(!0);
  var g = d(u);
  return /* @__PURE__ */ y.createElement(cm, {
    name: n,
    value: r,
    defaultValue: i,
    onFocus: s,
    onBlur: l,
    onChange: o
  }, /* @__PURE__ */ y.createElement(nu, tp({
    role: "group",
    isInline: a
  }, g), t));
}
pu.propTypes = {
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
pu.defaultProps = {
  className: void 0,
  value: void 0,
  defaultValue: void 0,
  isInline: !1,
  onChange: void 0,
  onFocus: void 0,
  onBlur: void 0
};
se.Control = Hi;
se.Radio = Fd;
se.RadioSet = Md;
se.Autosuggest = sm;
se.AutosuggestOption = um;
se.Checkbox = fu;
se.CheckboxSet = pu;
se.Switch = dm;
se.SwitchSet = pu;
se.Label = Ro;
se.Group = Nd;
se.Text = tu;
var zj = ["label", "onClick", "className"], Hj = {
  label: f.string.isRequired,
  onClick: f.func
}, Vj = {
  label: "Close"
}, du = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.label, r = e.onClick, i = e.className, a = ve(e, zj);
  return /* @__PURE__ */ y.createElement("button", ne({
    ref: t,
    type: "button",
    className: q("close", i),
    onClick: r
  }, a), /* @__PURE__ */ y.createElement("span", {
    "aria-hidden": "true"
  }, "×"), /* @__PURE__ */ y.createElement("span", {
    className: "sr-only"
  }, n));
});
du.displayName = "CloseButton";
du.propTypes = Hj;
du.defaultProps = Vj;
const mu = function(e) {
  return /* @__PURE__ */ y.forwardRef(function(t, n) {
    return /* @__PURE__ */ y.createElement("div", ne({}, t, {
      ref: n,
      className: q(t.className, e)
    }));
  });
};
var Uj = ["bsPrefix", "show", "closeLabel", "className", "children", "variant", "onClose", "dismissible", "transition"], _w = mu("h4");
_w.displayName = "DivStyledAsH4";
var Wj = Wt("alert-heading", {
  Component: _w
}), Gj = Wt("alert-link", {
  Component: xd
}), Kj = {
  show: !0,
  transition: Ui,
  closeLabel: "Close alert"
}, kn = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = xI(e, {
    show: "onClose"
  }), r = n.bsPrefix, i = n.show, a = n.closeLabel, o = n.className, s = n.children, l = n.variant, u = n.onClose, c = n.dismissible, d = n.transition, p = ve(n, Uj), g = Re(r, "alert"), x = Kf(function(m) {
    u && u(!1, m);
  }), w = d === !0 ? Ui : d, h = /* @__PURE__ */ y.createElement("div", ne({
    role: "alert"
  }, w ? void 0 : p, {
    ref: t,
    className: q(o, g, l && g + "-" + l, c && g + "-dismissible")
  }), c && /* @__PURE__ */ y.createElement(du, {
    onClick: x,
    label: a
  }), s);
  return w ? /* @__PURE__ */ y.createElement(w, ne({
    unmountOnExit: !0
  }, p, {
    ref: void 0,
    in: i
  }), h) : i ? h : null;
});
kn.displayName = "Alert";
kn.defaultProps = Kj;
kn.Link = Gj;
kn.Heading = Wj;
var Aw = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r(S);
  })(typeof self < "u" ? self : cE, function(n) {
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
      function o(j, M) {
        return d(j) || c(j, M) || l(j, M) || s();
      }
      function s() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function l(j, M) {
        if (j) {
          if (typeof j == "string") return u(j, M);
          var L = Object.prototype.toString.call(j).slice(8, -1);
          return L === "Object" && j.constructor && (L = j.constructor.name), L === "Map" || L === "Set" ? Array.from(j) : L === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(L) ? u(j, M) : void 0;
        }
      }
      function u(j, M) {
        (M == null || M > j.length) && (M = j.length);
        for (var L = 0, I = new Array(M); L < M; L++) I[L] = j[L];
        return I;
      }
      function c(j, M) {
        if (typeof Symbol < "u" && Symbol.iterator in Object(j)) {
          var L = [], I = !0, _ = !1, R = void 0;
          try {
            for (var D, H = j[Symbol.iterator](); !(I = (D = H.next()).done) && (L.push(D.value), !M || L.length !== M); I = !0) ;
          } catch (O) {
            _ = !0, R = O;
          } finally {
            try {
              I || H.return == null || H.return();
            } finally {
              if (_) throw R;
            }
          }
          return L;
        }
      }
      function d(j) {
        if (Array.isArray(j)) return j;
      }
      var p = a(1), g = a.n(p), x = a(8), w = a.n(x), h = a(2), m = a(10), v = a.n(m), b = a(3), E = a(6), C = function(j) {
        return j.query || Object(b.a)(j);
      }, k = function(j) {
        if (!j) return null;
        var M = Object.keys(j);
        return M.length === 0 ? null : M.reduce(function(L, I) {
          return L[Object(h.a)(I)] = j[I], L;
        }, {});
      }, P = function() {
        var j = g.a.useRef(!1);
        return g.a.useEffect(function() {
          j.current = !0;
        }, []), j.current;
      }, N = function(j) {
        var M = g.a.useContext(E.a), L = function() {
          return k(j) || k(M);
        }, I = g.a.useState(L), _ = o(I, 2), R = _[0], D = _[1];
        return g.a.useEffect(function() {
          var H = L();
          v()(R, H) || D(H);
        }, [j, M]), R;
      }, T = function(j) {
        var M = function() {
          return C(j);
        }, L = g.a.useState(M), I = o(L, 2), _ = I[0], R = I[1];
        return g.a.useEffect(function() {
          var D = M();
          _ !== D && R(D);
        }, [j]), _;
      }, $ = function(j, M) {
        var L = function() {
          return w()(j, M || {}, !!M);
        }, I = g.a.useState(L), _ = o(I, 2), R = _[0], D = _[1], H = P();
        return g.a.useEffect(function() {
          return H && D(L()), function() {
            R.dispose();
          };
        }, [j, M]), R;
      }, Z = function(j) {
        var M = g.a.useState(j.matches), L = o(M, 2), I = L[0], _ = L[1];
        return g.a.useEffect(function() {
          var R = function() {
            _(j.matches);
          };
          return j.addListener(R), R(), function() {
            j.removeListener(R);
          };
        }, [j]), I;
      }, B = function(j, M, L) {
        var I = N(M), _ = T(j);
        if (!_) throw new Error("Invalid or missing MediaQuery!");
        var R = $(_, I), D = Z(R), H = P();
        return g.a.useEffect(function() {
          H && L && L(D);
        }, [D]), D;
      };
      i.a = B;
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
      }, u = function(p, g) {
        var x = Object(o.a)(p);
        return typeof g == "number" && (g = "".concat(g, "px")), g === !0 ? x : g === !1 ? l(x) : "(".concat(x, ": ").concat(g, ")");
      }, c = function(p) {
        return p.join(" and ");
      }, d = function(p) {
        var g = [];
        return Object.keys(s.a.all).forEach(function(x) {
          var w = p[x];
          w != null && g.push(u(x, w));
        }), c(g);
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
        function g(b) {
          v && v.addListener(b);
        }
        function x(b) {
          v && v.removeListener(b);
        }
        function w(b) {
          m.matches = b.matches, m.media = b.media;
        }
        function h() {
          v && v.removeListener(w);
        }
        var m = this;
        if (u && !p) {
          var v = u.call(window, c);
          this.matches = v.matches, this.media = v.media, v.addListener(w);
        } else this.matches = l(c, d), this.media = c;
        this.addListener = g, this.removeListener = x, this.dispose = h;
      }
      function s(c, d, p) {
        return new o(c, d, p);
      }
      var l = a(9).match, u = typeof window < "u" ? window.matchMedia : null;
      r.exports = s;
    }, function(r, i, a) {
      function o(h, m) {
        return s(h).some(function(v) {
          var b = v.inverse, E = v.type === "all" || m.type === v.type;
          if (E && b || !E && !b) return !1;
          var C = v.expressions.every(function(k) {
            var P = k.feature, N = k.modifier, T = k.value, $ = m[P];
            if (!$) return !1;
            switch (P) {
              case "orientation":
              case "scan":
                return $.toLowerCase() === T.toLowerCase();
              case "width":
              case "height":
              case "device-width":
              case "device-height":
                T = c(T), $ = c($);
                break;
              case "resolution":
                T = u(T), $ = u($);
                break;
              case "aspect-ratio":
              case "device-aspect-ratio":
              case "device-pixel-ratio":
                T = l(T), $ = l($);
                break;
              case "grid":
              case "color":
              case "color-index":
              case "monochrome":
                T = parseInt(T, 10) || 1, $ = parseInt($, 10) || 0;
            }
            switch (N) {
              case "min":
                return $ >= T;
              case "max":
                return $ <= T;
              default:
                return $ === T;
            }
          });
          return C && !b || !C && b;
        });
      }
      function s(h) {
        return h.split(",").map(function(m) {
          m = m.trim();
          var v = m.match(d), b = v[1], E = v[2], C = v[3] || "", k = {};
          return k.inverse = !!b && b.toLowerCase() === "not", k.type = E ? E.toLowerCase() : "all", C = C.match(/\([^\)]+\)/g) || [], k.expressions = C.map(function(P) {
            var N = P.match(p), T = N[1].toLowerCase().match(g);
            return {
              modifier: T[1],
              feature: T[2],
              value: N[2]
            };
          }), k;
        });
      }
      function l(h) {
        var m, v = Number(h);
        return v || (m = h.match(/^(\d+)\s*\/\s*(\d+)$/), v = m[1] / m[2]), v;
      }
      function u(h) {
        var m = parseFloat(h);
        switch (String(h).match(w)[1]) {
          case "dpcm":
            return m / 2.54;
          case "dppx":
            return 96 * m;
          default:
            return m;
        }
      }
      function c(h) {
        var m = parseFloat(h);
        switch (String(h).match(x)[1]) {
          case "em":
          case "rem":
            return 16 * m;
          case "cm":
            return 96 * m / 2.54;
          case "mm":
            return 96 * m / 2.54 / 10;
          case "in":
            return 96 * m;
          case "pt":
            return 72 * m;
          case "pc":
            return 72 * m / 12;
          default:
            return m;
        }
      }
      i.match = o, i.parse = s;
      var d = /(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i, p = /\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/, g = /^(?:(min|max)-)?(.+)/, x = /(em|rem|px|cm|mm|in|pt|pc)?$/, w = /(dpi|dpcm|dppx)?$/;
    }, function(r, i, a) {
      function o(s, l) {
        if (s === l) return !0;
        if (!s || !l) return !1;
        var u = Object.keys(s), c = Object.keys(l), d = u.length;
        if (c.length !== d) return !1;
        for (var p = 0; p < d; p++) {
          var g = u[p];
          if (s[g] !== l[g] || !Object.prototype.hasOwnProperty.call(l, g)) return !1;
        }
        return !0;
      }
      r.exports = o;
    }, function(r, i, a) {
      function o(h, m) {
        var v = Object.keys(h);
        if (Object.getOwnPropertySymbols) {
          var b = Object.getOwnPropertySymbols(h);
          m && (b = b.filter(function(E) {
            return Object.getOwnPropertyDescriptor(h, E).enumerable;
          })), v.push.apply(v, b);
        }
        return v;
      }
      function s(h) {
        for (var m = 1; m < arguments.length; m++) {
          var v = arguments[m] != null ? arguments[m] : {};
          m % 2 ? o(Object(v), !0).forEach(function(b) {
            l(h, b, v[b]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(h, Object.getOwnPropertyDescriptors(v)) : o(Object(v)).forEach(function(b) {
            Object.defineProperty(h, b, Object.getOwnPropertyDescriptor(v, b));
          });
        }
        return h;
      }
      function l(h, m, v) {
        return m in h ? Object.defineProperty(h, m, {
          value: v,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : h[m] = v, h;
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
      }, g = s({
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
      }, p), x = {
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
      }, w = s(s({}, x), g);
      p.type = Object.keys(x), i.a = {
        all: w,
        types: x,
        matchers: p,
        features: g
      };
    }, function(r, i, a) {
      var o = a(4);
      r.exports = a(14)(o.isElement, !0);
    }, function(r, i, a) {
      (function() {
        function o(K) {
          return typeof K == "string" || typeof K == "function" || K === N || K === M || K === $ || K === T || K === I || K === _ || typeof K == "object" && K !== null && (K.$$typeof === D || K.$$typeof === R || K.$$typeof === Z || K.$$typeof === B || K.$$typeof === L || K.$$typeof === O || K.$$typeof === A || K.$$typeof === F || K.$$typeof === H);
        }
        function s(K) {
          if (typeof K == "object" && K !== null) {
            var ge = K.$$typeof;
            switch (ge) {
              case k:
                var ye = K.type;
                switch (ye) {
                  case j:
                  case M:
                  case N:
                  case $:
                  case T:
                  case I:
                    return ye;
                  default:
                    var Me = ye && ye.$$typeof;
                    switch (Me) {
                      case B:
                      case L:
                      case D:
                      case R:
                      case Z:
                        return Me;
                      default:
                        return ge;
                    }
                }
              case P:
                return ge;
            }
          }
        }
        function l(K) {
          return we || (we = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), u(K) || s(K) === j;
        }
        function u(K) {
          return s(K) === M;
        }
        function c(K) {
          return s(K) === B;
        }
        function d(K) {
          return s(K) === Z;
        }
        function p(K) {
          return typeof K == "object" && K !== null && K.$$typeof === k;
        }
        function g(K) {
          return s(K) === L;
        }
        function x(K) {
          return s(K) === N;
        }
        function w(K) {
          return s(K) === D;
        }
        function h(K) {
          return s(K) === R;
        }
        function m(K) {
          return s(K) === P;
        }
        function v(K) {
          return s(K) === $;
        }
        function b(K) {
          return s(K) === T;
        }
        function E(K) {
          return s(K) === I;
        }
        var C = typeof Symbol == "function" && Symbol.for, k = C ? Symbol.for("react.element") : 60103, P = C ? Symbol.for("react.portal") : 60106, N = C ? Symbol.for("react.fragment") : 60107, T = C ? Symbol.for("react.strict_mode") : 60108, $ = C ? Symbol.for("react.profiler") : 60114, Z = C ? Symbol.for("react.provider") : 60109, B = C ? Symbol.for("react.context") : 60110, j = C ? Symbol.for("react.async_mode") : 60111, M = C ? Symbol.for("react.concurrent_mode") : 60111, L = C ? Symbol.for("react.forward_ref") : 60112, I = C ? Symbol.for("react.suspense") : 60113, _ = C ? Symbol.for("react.suspense_list") : 60120, R = C ? Symbol.for("react.memo") : 60115, D = C ? Symbol.for("react.lazy") : 60116, H = C ? Symbol.for("react.block") : 60121, O = C ? Symbol.for("react.fundamental") : 60117, A = C ? Symbol.for("react.responder") : 60118, F = C ? Symbol.for("react.scope") : 60119, V = j, G = M, Y = B, X = Z, re = k, oe = L, pe = N, fe = D, xe = R, $e = P, at = $, ot = T, Mt = I, we = !1;
        i.AsyncMode = V, i.ConcurrentMode = G, i.ContextConsumer = Y, i.ContextProvider = X, i.Element = re, i.ForwardRef = oe, i.Fragment = pe, i.Lazy = fe, i.Memo = xe, i.Portal = $e, i.Profiler = at, i.StrictMode = ot, i.Suspense = Mt, i.isAsyncMode = l, i.isConcurrentMode = u, i.isContextConsumer = c, i.isContextProvider = d, i.isElement = p, i.isForwardRef = g, i.isFragment = x, i.isLazy = w, i.isMemo = h, i.isPortal = m, i.isProfiler = v, i.isStrictMode = b, i.isSuspense = E, i.isValidElementType = o, i.typeOf = s;
      })();
    }, function(r, i, a) {
      function o() {
        return null;
      }
      var s = a(4), l = a(15), u = a(5), c = a(16), d = Function.call.bind(Object.prototype.hasOwnProperty), p = function() {
      };
      p = function(g) {
        var x = "Warning: " + g;
        typeof console < "u" && console.error(x);
        try {
          throw new Error(x);
        } catch {
        }
      }, r.exports = function(g, x) {
        function w(O) {
          var A = O && (_ && O[_] || O[R]);
          if (typeof A == "function") return A;
        }
        function h(O, A) {
          return O === A ? O !== 0 || 1 / O == 1 / A : O !== O && A !== A;
        }
        function m(O) {
          this.message = O, this.stack = "";
        }
        function v(O) {
          function A(Y, X, re, oe, pe, fe, xe) {
            if (oe = oe || D, fe = fe || re, xe !== u) {
              if (x) {
                var $e = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
                throw $e.name = "Invariant Violation", $e;
              }
              if (typeof console < "u") {
                var at = oe + ":" + re;
                !F[at] && V < 3 && (p("You are manually calling a React.PropTypes validation function for the `" + fe + "` prop on `" + oe + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."), F[at] = !0, V++);
              }
            }
            return X[re] == null ? Y ? new m(X[re] === null ? "The " + pe + " `" + fe + "` is marked as required in `" + oe + "`, but its value is `null`." : "The " + pe + " `" + fe + "` is marked as required in `" + oe + "`, but its value is `undefined`.") : null : O(X, re, oe, pe, fe);
          }
          var F = {}, V = 0, G = A.bind(null, !1);
          return G.isRequired = A.bind(null, !0), G;
        }
        function b(O) {
          function A(F, V, G, Y, X, re) {
            var oe = F[V];
            return j(oe) !== O ? new m("Invalid " + Y + " `" + X + "` of type `" + M(oe) + "` supplied to `" + G + "`, expected `" + O + "`.") : null;
          }
          return v(A);
        }
        function E(O) {
          function A(F, V, G, Y, X) {
            if (typeof O != "function") return new m("Property `" + X + "` of component `" + G + "` has invalid PropType notation inside arrayOf.");
            var re = F[V];
            if (!Array.isArray(re))
              return new m("Invalid " + Y + " `" + X + "` of type `" + j(re) + "` supplied to `" + G + "`, expected an array.");
            for (var oe = 0; oe < re.length; oe++) {
              var pe = O(re, oe, G, Y, X + "[" + oe + "]", u);
              if (pe instanceof Error) return pe;
            }
            return null;
          }
          return v(A);
        }
        function C(O) {
          function A(F, V, G, Y, X) {
            if (!(F[V] instanceof O)) {
              var re = O.name || D;
              return new m("Invalid " + Y + " `" + X + "` of type `" + I(F[V]) + "` supplied to `" + G + "`, expected instance of `" + re + "`.");
            }
            return null;
          }
          return v(A);
        }
        function k(O) {
          function A(F, V, G, Y, X) {
            for (var re = F[V], oe = 0; oe < O.length; oe++) if (h(re, O[oe])) return null;
            var pe = JSON.stringify(O, function(fe, xe) {
              return M(xe) === "symbol" ? String(xe) : xe;
            });
            return new m("Invalid " + Y + " `" + X + "` of value `" + String(re) + "` supplied to `" + G + "`, expected one of " + pe + ".");
          }
          return Array.isArray(O) ? v(A) : (p(arguments.length > 1 ? "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])." : "Invalid argument supplied to oneOf, expected an array."), o);
        }
        function P(O) {
          function A(F, V, G, Y, X) {
            if (typeof O != "function") return new m("Property `" + X + "` of component `" + G + "` has invalid PropType notation inside objectOf.");
            var re = F[V], oe = j(re);
            if (oe !== "object") return new m("Invalid " + Y + " `" + X + "` of type `" + oe + "` supplied to `" + G + "`, expected an object.");
            for (var pe in re) if (d(re, pe)) {
              var fe = O(re, pe, G, Y, X + "." + pe, u);
              if (fe instanceof Error) return fe;
            }
            return null;
          }
          return v(A);
        }
        function N(O) {
          function A(G, Y, X, re, oe) {
            for (var pe = 0; pe < O.length; pe++)
              if ((0, O[pe])(G, Y, X, re, oe, u) == null) return null;
            return new m("Invalid " + re + " `" + oe + "` supplied to `" + X + "`.");
          }
          if (!Array.isArray(O)) return p("Invalid argument supplied to oneOfType, expected an instance of array."), o;
          for (var F = 0; F < O.length; F++) {
            var V = O[F];
            if (typeof V != "function") return p("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + L(V) + " at index " + F + "."), o;
          }
          return v(A);
        }
        function T(O) {
          function A(F, V, G, Y, X) {
            var re = F[V], oe = j(re);
            if (oe !== "object") return new m("Invalid " + Y + " `" + X + "` of type `" + oe + "` supplied to `" + G + "`, expected `object`.");
            for (var pe in O) {
              var fe = O[pe];
              if (fe) {
                var xe = fe(re, pe, G, Y, X + "." + pe, u);
                if (xe) return xe;
              }
            }
            return null;
          }
          return v(A);
        }
        function $(O) {
          function A(F, V, G, Y, X) {
            var re = F[V], oe = j(re);
            if (oe !== "object") return new m("Invalid " + Y + " `" + X + "` of type `" + oe + "` supplied to `" + G + "`, expected `object`.");
            var pe = l({}, F[V], O);
            for (var fe in pe) {
              var xe = O[fe];
              if (!xe) return new m("Invalid " + Y + " `" + X + "` key `" + fe + "` supplied to `" + G + "`.\nBad object: " + JSON.stringify(F[V], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(O), null, "  "));
              var $e = xe(re, fe, G, Y, X + "." + fe, u);
              if ($e) return $e;
            }
            return null;
          }
          return v(A);
        }
        function Z(O) {
          switch (typeof O) {
            case "number":
            case "string":
            case "undefined":
              return !0;
            case "boolean":
              return !O;
            case "object":
              if (Array.isArray(O)) return O.every(Z);
              if (O === null || g(O)) return !0;
              var A = w(O);
              if (!A) return !1;
              var F, V = A.call(O);
              if (A !== O.entries) {
                for (; !(F = V.next()).done; ) if (!Z(F.value)) return !1;
              } else for (; !(F = V.next()).done; ) {
                var G = F.value;
                if (G && !Z(G[1])) return !1;
              }
              return !0;
            default:
              return !1;
          }
        }
        function B(O, A) {
          return O === "symbol" || !!A && (A["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && A instanceof Symbol);
        }
        function j(O) {
          var A = typeof O;
          return Array.isArray(O) ? "array" : O instanceof RegExp ? "object" : B(A, O) ? "symbol" : A;
        }
        function M(O) {
          if (O == null) return "" + O;
          var A = j(O);
          if (A === "object") {
            if (O instanceof Date) return "date";
            if (O instanceof RegExp) return "regexp";
          }
          return A;
        }
        function L(O) {
          var A = M(O);
          switch (A) {
            case "array":
            case "object":
              return "an " + A;
            case "boolean":
            case "date":
            case "regexp":
              return "a " + A;
            default:
              return A;
          }
        }
        function I(O) {
          return O.constructor && O.constructor.name ? O.constructor.name : D;
        }
        var _ = typeof Symbol == "function" && Symbol.iterator, R = "@@iterator", D = "<<anonymous>>", H = {
          array: b("array"),
          bool: b("boolean"),
          func: b("function"),
          number: b("number"),
          object: b("object"),
          string: b("string"),
          symbol: b("symbol"),
          any: function() {
            return v(o);
          }(),
          arrayOf: E,
          element: function() {
            function O(A, F, V, G, Y) {
              var X = A[F];
              return g(X) ? null : new m("Invalid " + G + " `" + Y + "` of type `" + j(X) + "` supplied to `" + V + "`, expected a single ReactElement.");
            }
            return v(O);
          }(),
          elementType: function() {
            function O(A, F, V, G, Y) {
              var X = A[F];
              return s.isValidElementType(X) ? null : new m("Invalid " + G + " `" + Y + "` of type `" + j(X) + "` supplied to `" + V + "`, expected a single ReactElement type.");
            }
            return v(O);
          }(),
          instanceOf: C,
          node: function() {
            function O(A, F, V, G, Y) {
              return Z(A[F]) ? null : new m("Invalid " + G + " `" + Y + "` supplied to `" + V + "`, expected a ReactNode.");
            }
            return v(O);
          }(),
          objectOf: P,
          oneOf: k,
          oneOfType: N,
          shape: T,
          exact: $
        };
        return m.prototype = Error.prototype, H.checkPropTypes = c, H.resetWarningCache = c.resetWarningCache, H.PropTypes = H, H;
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
          if (Object.getOwnPropertyNames(d).map(function(x) {
            return d[x];
          }).join("") !== "0123456789") return !1;
          var g = {};
          return "abcdefghijklmnopqrst".split("").forEach(function(x) {
            g[x] = x;
          }), Object.keys(Object.assign({}, g)).join("") === "abcdefghijklmnopqrst";
        } catch {
          return !1;
        }
      }() ? Object.assign : function(c, d) {
        for (var p, g, x = o(c), w = 1; w < arguments.length; w++) {
          p = Object(arguments[w]);
          for (var h in p) l.call(p, h) && (x[h] = p[h]);
          if (s) {
            g = s(p);
            for (var m = 0; m < g.length; m++) u.call(p, g[m]) && (x[g[m]] = p[g[m]]);
          }
        }
        return x;
      };
    }, function(r, i, a) {
      function o(d, p, g, x, w) {
        for (var h in d) if (c(d, h)) {
          var m;
          try {
            if (typeof d[h] != "function") {
              var v = Error((x || "React class") + ": " + g + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof d[h] + "`.");
              throw v.name = "Invariant Violation", v;
            }
            m = d[h](p, h, x, g, null, l);
          } catch (E) {
            m = E;
          }
          if (!m || m instanceof Error || s((x || "React class") + ": type specification of " + g + " `" + h + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof m + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."), m instanceof Error && !(m.message in u)) {
            u[m.message] = !0;
            var b = w ? w() : "";
            s("Failed " + g + " type: " + m.message + (b ?? ""));
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
        var p, g, x = s(c, d);
        if (Object.getOwnPropertySymbols) {
          var w = Object.getOwnPropertySymbols(c);
          for (g = 0; g < w.length; g++) p = w[g], d.indexOf(p) >= 0 || Object.prototype.propertyIsEnumerable.call(c, p) && (x[p] = c[p]);
        }
        return x;
      }
      function s(c, d) {
        if (c == null) return {};
        var p, g, x = {}, w = Object.keys(c);
        for (g = 0; g < w.length; g++) p = w[g], d.indexOf(p) >= 0 || (x[p] = c[p]);
        return x;
      }
      function l(c) {
        var d = c.children, p = c.device, g = c.onChange, x = o(c, ["children", "device", "onChange"]), w = Object(u.a)(x, p, g);
        return typeof d == "function" ? d(w) : w ? d : null;
      }
      i.a = l;
      var u = a(0);
    }]);
  });
})(Aw);
var qj = Aw.exports;
const Yj = "576px", Xj = {
  sm: Yj
}, {
  sm: Qj
} = Xj, Zj = {
  extraSmall: {
    maxWidth: parseFloat(Qj) || 575.98
  }
};
function yo(e) {
  "@babel/helpers - typeof";
  return yo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, yo(e);
}
var Jj = ["as", "isStacked", "children"];
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
function Gg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Wg(Object(n), !0).forEach(function(r) {
      eN(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Wg(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function eN(e, t, n) {
  return t = tN(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function tN(e) {
  var t = nN(e, "string");
  return yo(t) == "symbol" ? t : t + "";
}
function nN(e, t) {
  if (yo(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (yo(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function rN(e, t) {
  if (e == null) return {};
  var n = iN(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function iN(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function bo(e) {
  var t = e.as, n = e.isStacked, r = e.children, i = rN(e, Jj);
  return /* @__PURE__ */ y.createElement(t, Gg(Gg({}, i), {}, {
    className: q(i.className, {
      "pgn__action-row": !n,
      "pgn__action-row-stacked": n
    })
  }), r);
}
bo.propTypes = {
  /** Specifies the base element */
  as: f.elementType,
  /** Specifies class name to append to the base element */
  className: f.string,
  /** Specifies the contents of the row */
  children: f.node,
  /** Specifies whether row should be displayed horizontally */
  isStacked: f.bool
};
bo.defaultProps = {
  as: "div",
  className: void 0,
  children: null,
  isStacked: !1
};
function aN() {
  return /* @__PURE__ */ y.createElement("span", {
    className: "pgn__action-row-spacer"
  });
}
bo.Spacer = aN;
function xo(e) {
  "@babel/helpers - typeof";
  return xo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, xo(e);
}
var oN = ["children", "icon", "actions", "dismissible", "onClose", "closeLabel", "stacked"];
function Kg(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function hl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Kg(Object(n), !0).forEach(function(r) {
      sN(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Kg(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function sN(e, t, n) {
  return t = lN(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function lN(e) {
  var t = uN(e, "string");
  return xo(t) == "symbol" ? t : t + "";
}
function uN(e, t) {
  if (xo(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (xo(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function np() {
  return np = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, np.apply(this, arguments);
}
function cN(e, t) {
  return mN(e) || dN(e, t) || pN(e, t) || fN();
}
function fN() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function pN(e, t) {
  if (e) {
    if (typeof e == "string") return qg(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return qg(e, t);
  }
}
function qg(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function dN(e, t) {
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
function mN(e) {
  if (Array.isArray(e)) return e;
}
function hN(e, t) {
  if (e == null) return {};
  var n = vN(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function vN(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var Nr = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.children, r = e.icon, i = e.actions, a = e.dismissible, o = e.onClose, s = e.closeLabel, l = e.stacked, u = hN(e, oN), c = S.useState(l), d = cN(c, 2), p = d[0], g = d[1], x = qj.useMediaQuery({
    maxWidth: Zj.extraSmall.maxWidth
  }), w = "sm";
  S.useEffect(function() {
    g(x ? !0 : l);
  }, [x, l]);
  var h = S.useCallback(function(m) {
    var v = {
      size: w,
      key: m.props.children
    };
    return /* @__PURE__ */ y.cloneElement(m, v);
  }, []);
  return /* @__PURE__ */ y.createElement(kn, np({}, u, {
    className: q("alert-content", u.className),
    ref: t
  }), r && /* @__PURE__ */ y.createElement(gn, {
    src: r,
    className: "alert-icon"
  }), /* @__PURE__ */ y.createElement("div", {
    className: q({
      "pgn__alert-message-wrapper": !p,
      "pgn__alert-message-wrapper-stacked": p
    })
  }, /* @__PURE__ */ y.createElement("div", {
    className: "alert-message-content"
  }, n), (a || (i == null ? void 0 : i.length) > 0) && /* @__PURE__ */ y.createElement(bo, {
    className: "pgn__alert-actions"
  }, /* @__PURE__ */ y.createElement(bo.Spacer, null), a && /* @__PURE__ */ y.createElement(yn, {
    size: w,
    variant: "tertiary",
    onClick: o
  }, s || /* @__PURE__ */ y.createElement(Ka, {
    id: "pgn.Alert.closeLabel",
    defaultMessage: "Dismiss",
    description: "Label of a close button on Alert component"
  })), i && i.map(h))));
}), Tw = mu("h4");
Tw.displayName = "DivStyledAsH4";
function mm(e) {
  return /* @__PURE__ */ y.createElement(kn.Heading, e);
}
function hm(e) {
  return /* @__PURE__ */ y.createElement(kn.Link, e);
}
var Iw = {
  /** Specifies the base element */
  as: f.elementType,
  /** Overrides underlying component base CSS class name */
  bsPrefix: f.string
};
hm.propTypes = Iw;
mm.propTypes = Iw;
hm.defaultProps = {
  as: "a",
  bsPrefix: "alert-link"
};
mm.defaultProps = {
  as: Tw,
  bsPrefix: "alert-heading"
};
Nr.propTypes = hl(hl({}, kn.propTypes), {}, {
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
Nr.defaultProps = hl(hl({}, kn.defaultProps), {}, {
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
Nr.Heading = mm;
Nr.Link = hm;
var jw = /* @__PURE__ */ y.createContext(null);
jw.displayName = "CardContext";
var gN = ["bsPrefix", "className", "variant", "as"], yN = {
  variant: null
}, vm = /* @__PURE__ */ y.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  function(e, t) {
    var n = e.bsPrefix, r = e.className, i = e.variant, a = e.as, o = a === void 0 ? "img" : a, s = ve(e, gN), l = Re(n, "card-img");
    return /* @__PURE__ */ y.createElement(o, ne({
      ref: t,
      className: q(i ? l + "-" + i : l, r)
    }, s));
  }
);
vm.displayName = "CardImg";
vm.defaultProps = yN;
var bN = ["bsPrefix", "className", "bg", "text", "border", "body", "children", "as"], xN = mu("h5"), wN = mu("h6"), Nw = Wt("card-body"), EN = Wt("card-title", {
  Component: xN
}), ON = Wt("card-subtitle", {
  Component: wN
}), SN = Wt("card-link", {
  Component: "a"
}), CN = Wt("card-text", {
  Component: "p"
}), kN = Wt("card-header"), PN = Wt("card-footer"), _N = Wt("card-img-overlay"), AN = {
  body: !1
}, Ct = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.className, i = e.bg, a = e.text, o = e.border, s = e.body, l = e.children, u = e.as, c = u === void 0 ? "div" : u, d = ve(e, bN), p = Re(n, "card"), g = S.useMemo(function() {
    return {
      cardHeaderBsPrefix: p + "-header"
    };
  }, [p]);
  return /* @__PURE__ */ y.createElement(jw.Provider, {
    value: g
  }, /* @__PURE__ */ y.createElement(c, ne({
    ref: t
  }, d, {
    className: q(r, p, i && "bg-" + i, a && "text-" + a, o && "border-" + o)
  }), s ? (
    // @ts-ignore
    /* @__PURE__ */ y.createElement(Nw, null, l)
  ) : l));
});
Ct.displayName = "Card";
Ct.defaultProps = AN;
Ct.Img = vm;
Ct.Title = EN;
Ct.Subtitle = ON;
Ct.Body = Nw;
Ct.Link = SN;
Ct.Text = CN;
Ct.Header = kN;
Ct.Footer = PN;
Ct.ImgOverlay = _N;
var $r = /* @__PURE__ */ S.createContext({});
function gm(e) {
  var t = e.orientation, n = e.children, r = e.isLoading, i = e.variant;
  return /* @__PURE__ */ y.createElement($r.Provider, {
    value: {
      orientation: t,
      isLoading: r,
      variant: i
    }
  }, n);
}
gm.propTypes = {
  /** Specifies which orientation to use. */
  orientation: f.oneOf(["horizontal", "vertical"]),
  /** Specifies loading state. */
  isLoading: f.bool,
  /** Specifies content of the component. */
  children: f.node,
  /** Specifies `Card` style variant */
  variant: f.oneOf(["light", "dark", "muted"])
};
gm.defaultProps = {
  orientation: "vertical",
  isLoading: !1,
  children: null,
  variant: "light"
};
const TN = y.createContext({}), Rw = !0;
function IN({ baseColor: e, highlightColor: t, width: n, height: r, borderRadius: i, circle: a, direction: o, duration: s, enableAnimation: l = Rw, customHighlightBackground: u }) {
  const c = {};
  return o === "rtl" && (c["--animation-direction"] = "reverse"), typeof s == "number" && (c["--animation-duration"] = `${s}s`), l || (c["--pseudo-element-display"] = "none"), (typeof n == "string" || typeof n == "number") && (c.width = n), (typeof r == "string" || typeof r == "number") && (c.height = r), (typeof i == "string" || typeof i == "number") && (c.borderRadius = i), a && (c.borderRadius = "50%"), typeof e < "u" && (c["--base-color"] = e), typeof t < "u" && (c["--highlight-color"] = t), typeof u == "string" && (c["--custom-highlight-background"] = u), c;
}
function Ti({ count: e = 1, wrapper: t, className: n, containerClassName: r, containerTestId: i, circle: a = !1, style: o, ...s }) {
  var l, u, c;
  const d = y.useContext(TN), p = { ...s };
  for (const [b, E] of Object.entries(s))
    typeof E > "u" && delete p[b];
  const g = {
    ...d,
    ...p,
    circle: a
  }, x = {
    ...o,
    ...IN(g)
  };
  let w = "react-loading-skeleton";
  n && (w += ` ${n}`);
  const h = (l = g.inline) !== null && l !== void 0 ? l : !1, m = [], v = Math.ceil(e);
  for (let b = 0; b < v; b++) {
    let E = x;
    if (v > e && b === v - 1) {
      const k = (u = E.width) !== null && u !== void 0 ? u : "100%", P = e % 1, N = typeof k == "number" ? k * P : `calc(${k} * ${P})`;
      E = { ...E, width: N };
    }
    const C = y.createElement("span", { className: w, style: E, key: b }, "‌");
    h ? m.push(C) : m.push(y.createElement(
      y.Fragment,
      { key: b },
      C,
      y.createElement("br", null)
    ));
  }
  return y.createElement("span", { className: r, "data-testid": i, "aria-live": "polite", "aria-busy": (c = g.enableAnimation) !== null && c !== void 0 ? c : Rw }, t ? m.map((b, E) => y.createElement(t, { key: E }, b)) : m);
}
var jN = 20, ym = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.actions, r = e.className, i = e.size, a = e.subtitle, o = e.title, s = e.skeletonHeight, l = e.skeletonWidth, u = S.useContext($r), c = u.isLoading, d = S.useCallback(function(p) {
    if (/* @__PURE__ */ y.isValidElement(p)) {
      var g = p.props.children, x = {
        size: i,
        children: Array.isArray(g) ? g.map(d) : d(g)
      };
      return /* @__PURE__ */ y.cloneElement(p, x);
    }
    return p;
  }, [i]);
  return c ? /* @__PURE__ */ y.createElement("div", {
    className: q("pgn__card-header", r)
  }, /* @__PURE__ */ y.createElement(Ti, {
    containerClassName: "pgn__card-header-loader",
    height: s,
    width: l
  })) : /* @__PURE__ */ y.createElement("div", {
    className: q("pgn__card-header", r),
    ref: t
  }, /* @__PURE__ */ y.createElement("div", {
    className: "pgn__card-header-content"
  }, o && /* @__PURE__ */ y.createElement("div", {
    className: "pgn__card-header-title-".concat(i)
  }, o), a && /* @__PURE__ */ y.createElement("div", {
    className: "pgn__card-header-subtitle-".concat(i)
  }, a)), n && /* @__PURE__ */ y.createElement("div", {
    className: "pgn__card-header-actions"
  }, i !== "md" ? d(n) : n));
});
ym.propTypes = {
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
ym.defaultProps = {
  actions: null,
  className: null,
  size: "md",
  title: null,
  subtitle: null,
  skeletonHeight: jN,
  skeletonWidth: null
};
var NN = ["className"];
function rp() {
  return rp = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, rp.apply(this, arguments);
}
function RN(e, t) {
  if (e == null) return {};
  var n = DN(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function DN(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var bm = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.className, r = RN(e, NN);
  return /* @__PURE__ */ y.createElement("div", rp({
    className: q("pgn__card-divider", n),
    ref: t
  }, r));
});
bm.propTypes = {
  /** Specifies class name to append to the base element. */
  className: f.string
};
bm.defaultProps = {
  className: void 0
};
var FN = 100, xm = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.className, r = e.children, i = e.title, a = e.actions, o = e.muted, s = e.skeletonHeight, l = e.skeletonWidth, u = S.useContext($r), c = u.isLoading;
  return c ? /* @__PURE__ */ y.createElement("div", {
    className: q("pgn__card-section", n, {
      "is-muted": o
    })
  }, /* @__PURE__ */ y.createElement(Ti, {
    containerClassName: "pgn__card-section-loader",
    height: s,
    width: l
  })) : /* @__PURE__ */ y.createElement("div", {
    className: q("pgn__card-section", n, {
      "is-muted": o
    }),
    ref: t
  }, i && /* @__PURE__ */ y.createElement("div", {
    className: "pgn__card-section-title"
  }, i), r, a && /* @__PURE__ */ y.createElement("div", {
    className: "pgn__card-section-actions"
  }, a));
});
xm.propTypes = {
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
xm.defaultProps = {
  children: null,
  className: void 0,
  title: void 0,
  actions: void 0,
  muted: !1,
  skeletonHeight: FN,
  skeletonWidth: void 0
};
var MN = 18, wm = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.children, r = e.className, i = e.isStacked, a = e.textElement, o = e.skeletonHeight, s = e.skeletonWidth, l = e.orientation, u = S.useContext($r), c = u.orientation, d = u.isLoading, p = l || c, g = "pgn__card-footer ".concat(p).concat(i ? "-stacked" : ""), x = "pgn__card-footer-text ".concat(p).concat(i ? "-stacked" : "");
  return d ? /* @__PURE__ */ y.createElement("div", {
    className: q(r, g)
  }, /* @__PURE__ */ y.createElement(Ti, {
    containerClassName: "pgn__card-footer-loader",
    height: o,
    width: s
  })) : /* @__PURE__ */ y.createElement("div", {
    className: q(r, g),
    ref: t
  }, a && /* @__PURE__ */ y.createElement("div", {
    className: x
  }, a), n);
});
wm.propTypes = {
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
wm.defaultProps = {
  children: null,
  className: void 0,
  textElement: void 0,
  isStacked: !1,
  orientation: void 0,
  skeletonHeight: MN,
  skeletonWidth: void 0
};
const Dw = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXwAAACMCAYAAAB/AhJnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAH6SURBVHgB7dRBEYBADACxwuDf5j0QUXywiYhc7zk7APzd3gNAgvABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIp4BaNpp2Q/3/wfPkGyXOQAAAABJRU5ErkJggg==";
function Yg(e, t) {
  return zN(e) || $N(e, t) || BN(e, t) || LN();
}
function LN() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function BN(e, t) {
  if (e) {
    if (typeof e == "string") return Xg(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Xg(e, t);
  }
}
function Xg(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function $N(e, t) {
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
function zN(e) {
  if (Array.isArray(e)) return e;
}
var HN = 140, VN = 41, Em = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.src, r = e.fallbackSrc, i = e.srcAlt, a = e.logoSrc, o = e.fallbackLogoSrc, s = e.logoAlt, l = e.skeletonHeight, u = e.skeletonWidth, c = e.logoSkeleton, d = e.logoSkeletonHeight, p = e.logoSkeletonWidth, g = e.className, x = e.imageLoadingType, w = S.useContext($r), h = w.orientation, m = w.isLoading, v = S.useState(!1), b = Yg(v, 2), E = b[0], C = b[1], k = S.useState(!1), P = Yg(k, 2), N = P[0], T = P[1], $ = "pgn__card-wrapper-image-cap ".concat(h);
  if (m)
    return /* @__PURE__ */ y.createElement("div", {
      className: q($, g),
      "data-testid": "image-loader-wrapper"
    }, /* @__PURE__ */ y.createElement(Ti, {
      containerClassName: "pgn__card-image-cap-loader",
      height: h === "horizontal" ? "100%" : l,
      width: u
    }), c && /* @__PURE__ */ y.createElement(Ti, {
      containerClassName: "pgn__card-logo-cap",
      height: d,
      width: p
    }));
  var Z = function(j, M, L) {
    var I = j.currentTarget;
    if (!M || I.src.endsWith(M)) {
      L === "imageCap" ? I.src = Dw : T(!1);
      return;
    }
    I.src = M;
  };
  return /* @__PURE__ */ y.createElement("div", {
    className: q(g, $),
    ref: t
  }, !!n && /* @__PURE__ */ y.createElement("img", {
    className: q("pgn__card-image-cap", {
      show: E
    }),
    src: n,
    onError: function(j) {
      return Z(j, r, "imageCap");
    },
    onLoad: function() {
      return C(!0);
    },
    alt: i,
    loading: x
  }), !!a && /* @__PURE__ */ y.createElement("img", {
    className: q("pgn__card-logo-cap", {
      show: N
    }),
    src: a,
    onError: function(j) {
      return Z(j, o, "logoCap");
    },
    onLoad: function() {
      return T(!0);
    },
    alt: s,
    loading: x
  }));
});
Em.propTypes = {
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
Em.defaultProps = {
  src: void 0,
  fallbackSrc: Dw,
  logoSrc: void 0,
  fallbackLogoSrc: void 0,
  className: void 0,
  srcAlt: void 0,
  logoAlt: void 0,
  skeletonHeight: HN,
  logoSkeleton: !1,
  logoSkeletonHeight: VN,
  skeletonWidth: void 0,
  logoSkeletonWidth: void 0,
  imageLoadingType: "eager"
};
var UN = ["className", "children"];
function ip() {
  return ip = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ip.apply(this, arguments);
}
function WN(e, t) {
  if (e == null) return {};
  var n = GN(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function GN(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var Om = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.className, r = e.children, i = WN(e, UN);
  return /* @__PURE__ */ y.createElement("div", ip({
    className: q("pgn__card-body", n),
    ref: t
  }, i), r);
});
Om.propTypes = {
  /** Specifies the content of the component. */
  children: f.node,
  /** The class to append to the base element. */
  className: f.string
};
Om.defaultProps = {
  children: void 0,
  className: void 0
};
var KN = ["className", "children", "variant", "icon", "title", "actions"];
function ap() {
  return ap = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ap.apply(this, arguments);
}
function qN(e, t) {
  if (e == null) return {};
  var n = YN(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function YN(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var Sm = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.className, r = e.children, i = e.variant, a = e.icon, o = e.title, s = e.actions, l = qN(e, KN), u = S.useContext($r), c = u.isLoading;
  return c ? /* @__PURE__ */ y.createElement("div", {
    className: q("pgn__card-status", n),
    "data-testid": "card-status-skeleton",
    ref: t
  }, /* @__PURE__ */ y.createElement(Ti, null)) : /* @__PURE__ */ y.createElement("div", ap({
    className: q("pgn__card-status", "pgn__card-status__".concat(i), n),
    ref: t
  }, l), /* @__PURE__ */ y.createElement("div", {
    className: "pgn__card-status__content"
  }, a && /* @__PURE__ */ y.createElement(gn, {
    className: "pgn__card-status__content-icon",
    src: a
  }), /* @__PURE__ */ y.createElement("div", {
    className: "pgn__card-status__message-content"
  }, o && /* @__PURE__ */ y.createElement("div", {
    className: "pgn__card-status__heading"
  }, o), r)), !!s && /* @__PURE__ */ y.createElement("div", {
    className: "pgn__card-status__actions"
  }, s));
});
Sm.propTypes = {
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
Sm.defaultProps = {
  className: void 0,
  icon: void 0,
  variant: "warning",
  title: void 0,
  actions: void 0
};
function wo(e) {
  "@babel/helpers - typeof";
  return wo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, wo(e);
}
var XN = ["orientation", "isLoading", "className", "isClickable", "muted", "variant"];
function Qg(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Zg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Qg(Object(n), !0).forEach(function(r) {
      Fw(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Qg(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function op() {
  return op = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, op.apply(this, arguments);
}
function Fw(e, t, n) {
  return t = QN(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function QN(e) {
  var t = ZN(e, "string");
  return wo(t) == "symbol" ? t : t + "";
}
function ZN(e, t) {
  if (wo(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (wo(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function JN(e, t) {
  if (e == null) return {};
  var n = eR(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function eR(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var tR = ["light", "dark", "muted"], Cm = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.orientation, r = e.isLoading, i = e.className, a = e.isClickable, o = e.muted, s = e.variant, l = JN(e, XN), u = o ? "muted" : s;
  return /* @__PURE__ */ y.createElement(gm, {
    orientation: n,
    isLoading: r,
    variant: u
  }, /* @__PURE__ */ y.createElement(Ct, op({}, l, {
    className: q(i, "pgn__card", Fw({
      horizontal: n === "horizontal",
      clickable: a
    }, "pgn__card-".concat(u), u)),
    ref: t,
    tabIndex: a ? 0 : -1
  })));
});
Cm.propTypes = {
  /** Specifies class name to append to the base element. */
  className: f.string,
  /** Specifies which orientation to use. */
  orientation: f.oneOf(["vertical", "horizontal"]),
  /** Specifies whether the `Card` is clickable, if `true` appropriate `hover` and `focus` styling will be added. */
  isClickable: f.bool,
  /** Specifies loading state. */
  isLoading: f.bool,
  /** Specifies `Card` style variant. */
  variant: f.oneOf(tR),
  /** **Deprecated**. Specifies whether `Card` uses `muted` variant. Use `variant="muted"` instead. */
  muted: f.bool
};
Cm.defaultProps = Zg(Zg({}, Ct.defaultProps), {}, {
  className: void 0,
  orientation: "vertical",
  isClickable: !1,
  variant: "light",
  isLoading: !1
});
var We = Ed(Cm, "Card", {
  muted: {
    deprType: Mn.REMOVED,
    message: 'Use "variant" prop instead, i.e. variant="muted"'
  }
});
We.Status = Sm;
We.Header = ym;
We.Divider = bm;
We.Section = xm;
We.Footer = wm;
We.ImageCap = Em;
We.Context = $r;
We.Body = Om;
const nR = /* @__PURE__ */ new Map([
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
function Ii(e, t, n) {
  const r = rR(e), { webkitRelativePath: i } = e, a = typeof t == "string" ? t : typeof i == "string" && i.length > 0 ? i : `./${e.name}`;
  return typeof r.path != "string" && Jg(r, "path", a), Jg(r, "relativePath", a), r;
}
function rR(e) {
  const { name: t } = e;
  if (t && t.lastIndexOf(".") !== -1 && !e.type) {
    const r = t.split(".").pop().toLowerCase(), i = nR.get(r);
    i && Object.defineProperty(e, "type", {
      value: i,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return e;
}
function Jg(e, t, n) {
  Object.defineProperty(e, t, {
    value: n,
    writable: !1,
    configurable: !1,
    enumerable: !0
  });
}
const iR = [
  // Thumbnail cache files for macOS and Windows
  ".DS_Store",
  // macOs
  "Thumbs.db"
  // Windows
];
function aR(e) {
  return Et(this, void 0, void 0, function* () {
    return vl(e) && oR(e.dataTransfer) ? cR(e.dataTransfer, e.type) : sR(e) ? lR(e) : Array.isArray(e) && e.every((t) => "getFile" in t && typeof t.getFile == "function") ? uR(e) : [];
  });
}
function oR(e) {
  return vl(e);
}
function sR(e) {
  return vl(e) && vl(e.target);
}
function vl(e) {
  return typeof e == "object" && e !== null;
}
function lR(e) {
  return sp(e.target.files).map((t) => Ii(t));
}
function uR(e) {
  return Et(this, void 0, void 0, function* () {
    return (yield Promise.all(e.map((n) => n.getFile()))).map((n) => Ii(n));
  });
}
function cR(e, t) {
  return Et(this, void 0, void 0, function* () {
    if (e.items) {
      const n = sp(e.items).filter((i) => i.kind === "file");
      if (t !== "drop")
        return n;
      const r = yield Promise.all(n.map(fR));
      return ey(Mw(r));
    }
    return ey(sp(e.files).map((n) => Ii(n)));
  });
}
function ey(e) {
  return e.filter((t) => iR.indexOf(t.name) === -1);
}
function sp(e) {
  if (e === null)
    return [];
  const t = [];
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    t.push(r);
  }
  return t;
}
function fR(e) {
  if (typeof e.webkitGetAsEntry != "function")
    return ty(e);
  const t = e.webkitGetAsEntry();
  return t && t.isDirectory ? Lw(t) : ty(e, t);
}
function Mw(e) {
  return e.reduce((t, n) => [
    ...t,
    ...Array.isArray(n) ? Mw(n) : [n]
  ], []);
}
function ty(e, t) {
  return Et(this, void 0, void 0, function* () {
    var n;
    if (globalThis.isSecureContext && typeof e.getAsFileSystemHandle == "function") {
      const a = yield e.getAsFileSystemHandle();
      if (a === null)
        throw new Error(`${e} is not a File`);
      if (a !== void 0) {
        const o = yield a.getFile();
        return o.handle = a, Ii(o);
      }
    }
    const r = e.getAsFile();
    if (!r)
      throw new Error(`${e} is not a File`);
    return Ii(r, (n = t == null ? void 0 : t.fullPath) !== null && n !== void 0 ? n : void 0);
  });
}
function pR(e) {
  return Et(this, void 0, void 0, function* () {
    return e.isDirectory ? Lw(e) : dR(e);
  });
}
function Lw(e) {
  const t = e.createReader();
  return new Promise((n, r) => {
    const i = [];
    function a() {
      t.readEntries((o) => Et(this, void 0, void 0, function* () {
        if (o.length) {
          const s = Promise.all(o.map(pR));
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
function dR(e) {
  return Et(this, void 0, void 0, function* () {
    return new Promise((t, n) => {
      e.file((r) => {
        const i = Ii(r, e.fullPath);
        t(i);
      }, (r) => {
        n(r);
      });
    });
  });
}
var nc = function(e, t) {
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
function ny(e) {
  return vR(e) || hR(e) || $w(e) || mR();
}
function mR() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function hR(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function vR(e) {
  if (Array.isArray(e)) return lp(e);
}
function ry(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function iy(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ry(Object(n), !0).forEach(function(r) {
      Bw(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ry(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Bw(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Eo(e, t) {
  return bR(e) || yR(e, t) || $w(e, t) || gR();
}
function gR() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function $w(e, t) {
  if (e) {
    if (typeof e == "string") return lp(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return lp(e, t);
  }
}
function lp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function yR(e, t) {
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
function bR(e) {
  if (Array.isArray(e)) return e;
}
var xR = typeof nc == "function" ? nc : nc.default, zw = "file-invalid-type", Hw = "file-too-large", Vw = "file-too-small", wR = "too-many-files", rc = {
  FileInvalidType: zw,
  FileTooLarge: Hw,
  FileTooSmall: Vw
}, ER = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = t.split(","), r = n.length > 1 ? "one of ".concat(n.join(", ")) : n[0];
  return {
    code: zw,
    message: "File type must be ".concat(r)
  };
}, ay = function(t) {
  return {
    code: Hw,
    message: "File is larger than ".concat(t, " ").concat(t === 1 ? "byte" : "bytes")
  };
}, oy = function(t) {
  return {
    code: Vw,
    message: "File is smaller than ".concat(t, " ").concat(t === 1 ? "byte" : "bytes")
  };
}, OR = {
  code: wR,
  message: "Too many files"
};
function Uw(e, t) {
  var n = e.type === "application/x-moz-file" || xR(e, t);
  return [n, n ? null : ER(t)];
}
function Ww(e, t, n) {
  if (hr(e.size))
    if (hr(t) && hr(n)) {
      if (e.size > n) return [!1, ay(n)];
      if (e.size < t) return [!1, oy(t)];
    } else {
      if (hr(t) && e.size < t) return [!1, oy(t)];
      if (hr(n) && e.size > n) return [!1, ay(n)];
    }
  return [!0, null];
}
function hr(e) {
  return e != null;
}
function SR(e) {
  var t = e.files, n = e.accept, r = e.minSize, i = e.maxSize, a = e.multiple, o = e.maxFiles, s = e.validator;
  return !a && t.length > 1 || a && o >= 1 && t.length > o ? !1 : t.every(function(l) {
    var u = Uw(l, n), c = Eo(u, 1), d = c[0], p = Ww(l, r, i), g = Eo(p, 1), x = g[0], w = s ? s(l) : null;
    return d && x && !w;
  });
}
function gl(e) {
  return typeof e.isPropagationStopped == "function" ? e.isPropagationStopped() : typeof e.cancelBubble < "u" ? e.cancelBubble : !1;
}
function us(e) {
  return e.dataTransfer ? Array.prototype.some.call(e.dataTransfer.types, function(t) {
    return t === "Files" || t === "application/x-moz-file";
  }) : !!e.target && !!e.target.files;
}
function sy(e) {
  e.preventDefault();
}
function CR(e) {
  return e.indexOf("MSIE") !== -1 || e.indexOf("Trident/") !== -1;
}
function kR(e) {
  return e.indexOf("Edge/") !== -1;
}
function PR() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.navigator.userAgent;
  return CR(e) || kR(e);
}
function Gt() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function(r) {
    for (var i = arguments.length, a = new Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++)
      a[o - 1] = arguments[o];
    return t.some(function(s) {
      return !gl(r) && s && s.apply(void 0, [r].concat(a)), gl(r);
    });
  };
}
function _R() {
  return "showOpenFilePicker" in window;
}
function AR(e) {
  if (hr(e)) {
    var t = Object.entries(e).filter(function(n) {
      var r = Eo(n, 2), i = r[0], a = r[1], o = !0;
      return Gw(i) || (console.warn('Skipped "'.concat(i, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), o = !1), (!Array.isArray(a) || !a.every(Kw)) && (console.warn('Skipped "'.concat(i, '" because an invalid file extension was provided.')), o = !1), o;
    }).reduce(function(n, r) {
      var i = Eo(r, 2), a = i[0], o = i[1];
      return iy(iy({}, n), {}, Bw({}, a, o));
    }, {});
    return [{
      // description is required due to https://crbug.com/1264708
      description: "Files",
      accept: t
    }];
  }
  return e;
}
function TR(e) {
  if (hr(e))
    return Object.entries(e).reduce(function(t, n) {
      var r = Eo(n, 2), i = r[0], a = r[1];
      return [].concat(ny(t), [i], ny(a));
    }, []).filter(function(t) {
      return Gw(t) || Kw(t);
    }).join(",");
}
function IR(e) {
  return e instanceof DOMException && (e.name === "AbortError" || e.code === e.ABORT_ERR);
}
function jR(e) {
  return e instanceof DOMException && (e.name === "SecurityError" || e.code === e.SECURITY_ERR);
}
function Gw(e) {
  return e === "audio/*" || e === "video/*" || e === "image/*" || e === "text/*" || e === "application/*" || /\w+\/[-+.\w]+/g.test(e);
}
function Kw(e) {
  return /^.*\.[\w]+$/.test(e);
}
var NR = ["children"], RR = ["open"], DR = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"], FR = ["refKey", "onChange", "onClick"];
function MR(e) {
  return $R(e) || BR(e) || qw(e) || LR();
}
function LR() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function BR(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function $R(e) {
  if (Array.isArray(e)) return up(e);
}
function ic(e, t) {
  return VR(e) || HR(e, t) || qw(e, t) || zR();
}
function zR() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function qw(e, t) {
  if (e) {
    if (typeof e == "string") return up(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return up(e, t);
  }
}
function up(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function HR(e, t) {
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
function VR(e) {
  if (Array.isArray(e)) return e;
}
function ly(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Te(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ly(Object(n), !0).forEach(function(r) {
      cp(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ly(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function cp(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function yl(e, t) {
  if (e == null) return {};
  var n = UR(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function UR(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var km = /* @__PURE__ */ S.forwardRef(function(e, t) {
  var n = e.children, r = yl(e, NR), i = Xw(r), a = i.open, o = yl(i, RR);
  return S.useImperativeHandle(t, function() {
    return {
      open: a
    };
  }, [a]), /* @__PURE__ */ y.createElement(S.Fragment, null, n(Te(Te({}, o), {}, {
    open: a
  })));
});
km.displayName = "Dropzone";
var Yw = {
  disabled: !1,
  getFilesFromEvent: aR,
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
km.defaultProps = Yw;
km.propTypes = {
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
var fp = {
  isFocused: !1,
  isFileDialogActive: !1,
  isDragActive: !1,
  isDragAccept: !1,
  isDragReject: !1,
  acceptedFiles: [],
  fileRejections: []
};
function Xw() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = Te(Te({}, Yw), e), n = t.accept, r = t.disabled, i = t.getFilesFromEvent, a = t.maxSize, o = t.minSize, s = t.multiple, l = t.maxFiles, u = t.onDragEnter, c = t.onDragLeave, d = t.onDragOver, p = t.onDrop, g = t.onDropAccepted, x = t.onDropRejected, w = t.onFileDialogCancel, h = t.onFileDialogOpen, m = t.useFsAccessApi, v = t.autoFocus, b = t.preventDropOnDocument, E = t.noClick, C = t.noKeyboard, k = t.noDrag, P = t.noDragEventsBubbling, N = t.onError, T = t.validator, $ = S.useMemo(function() {
    return TR(n);
  }, [n]), Z = S.useMemo(function() {
    return AR(n);
  }, [n]), B = S.useMemo(function() {
    return typeof h == "function" ? h : uy;
  }, [h]), j = S.useMemo(function() {
    return typeof w == "function" ? w : uy;
  }, [w]), M = S.useRef(null), L = S.useRef(null), I = S.useReducer(WR, fp), _ = ic(I, 2), R = _[0], D = _[1], H = R.isFocused, O = R.isFileDialogActive, A = S.useRef(typeof window < "u" && window.isSecureContext && m && _R()), F = function() {
    !A.current && O && setTimeout(function() {
      if (L.current) {
        var ie = L.current.files;
        ie.length || (D({
          type: "closeDialog"
        }), j());
      }
    }, 300);
  };
  S.useEffect(function() {
    return window.addEventListener("focus", F, !1), function() {
      window.removeEventListener("focus", F, !1);
    };
  }, [L, O, j, A]);
  var V = S.useRef([]), G = function(ie) {
    M.current && M.current.contains(ie.target) || (ie.preventDefault(), V.current = []);
  };
  S.useEffect(function() {
    return b && (document.addEventListener("dragover", sy, !1), document.addEventListener("drop", G, !1)), function() {
      b && (document.removeEventListener("dragover", sy), document.removeEventListener("drop", G));
    };
  }, [M, b]), S.useEffect(function() {
    return !r && v && M.current && M.current.focus(), function() {
    };
  }, [M, v, r]);
  var Y = S.useCallback(function(W) {
    N ? N(W) : console.error(W);
  }, [N]), X = S.useCallback(function(W) {
    W.preventDefault(), W.persist(), ye(W), V.current = [].concat(MR(V.current), [W.target]), us(W) && Promise.resolve(i(W)).then(function(ie) {
      if (!(gl(W) && !P)) {
        var Oe = ie.length, Ae = Oe > 0 && SR({
          files: ie,
          accept: $,
          minSize: o,
          maxSize: a,
          multiple: s,
          maxFiles: l,
          validator: T
        }), Le = Oe > 0 && !Ae;
        D({
          isDragAccept: Ae,
          isDragReject: Le,
          isDragActive: !0,
          type: "setDraggedFiles"
        }), u && u(W);
      }
    }).catch(function(ie) {
      return Y(ie);
    });
  }, [i, u, Y, P, $, o, a, s, l, T]), re = S.useCallback(function(W) {
    W.preventDefault(), W.persist(), ye(W);
    var ie = us(W);
    if (ie && W.dataTransfer)
      try {
        W.dataTransfer.dropEffect = "copy";
      } catch {
      }
    return ie && d && d(W), !1;
  }, [d, P]), oe = S.useCallback(function(W) {
    W.preventDefault(), W.persist(), ye(W);
    var ie = V.current.filter(function(Ae) {
      return M.current && M.current.contains(Ae);
    }), Oe = ie.indexOf(W.target);
    Oe !== -1 && ie.splice(Oe, 1), V.current = ie, !(ie.length > 0) && (D({
      type: "setDraggedFiles",
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1
    }), us(W) && c && c(W));
  }, [M, c, P]), pe = S.useCallback(function(W, ie) {
    var Oe = [], Ae = [];
    W.forEach(function(Le) {
      var _n = Uw(Le, $), sn = ic(_n, 2), zr = sn[0], Wi = sn[1], Gi = Ww(Le, o, a), Hr = ic(Gi, 2), Ki = Hr[0], ur = Hr[1], Ie = T ? T(Le) : null;
      if (zr && Ki && !Ie)
        Oe.push(Le);
      else {
        var De = [Wi, ur];
        Ie && (De = De.concat(Ie)), Ae.push({
          file: Le,
          errors: De.filter(function(Qe) {
            return Qe;
          })
        });
      }
    }), (!s && Oe.length > 1 || s && l >= 1 && Oe.length > l) && (Oe.forEach(function(Le) {
      Ae.push({
        file: Le,
        errors: [OR]
      });
    }), Oe.splice(0)), D({
      acceptedFiles: Oe,
      fileRejections: Ae,
      isDragReject: Ae.length > 0,
      type: "setFiles"
    }), p && p(Oe, Ae, ie), Ae.length > 0 && x && x(Ae, ie), Oe.length > 0 && g && g(Oe, ie);
  }, [D, s, $, o, a, l, p, g, x, T]), fe = S.useCallback(function(W) {
    W.preventDefault(), W.persist(), ye(W), V.current = [], us(W) && Promise.resolve(i(W)).then(function(ie) {
      gl(W) && !P || pe(ie, W);
    }).catch(function(ie) {
      return Y(ie);
    }), D({
      type: "reset"
    });
  }, [i, pe, Y, P]), xe = S.useCallback(function() {
    if (A.current) {
      D({
        type: "openDialog"
      }), B();
      var W = {
        multiple: s,
        types: Z
      };
      window.showOpenFilePicker(W).then(function(ie) {
        return i(ie);
      }).then(function(ie) {
        pe(ie, null), D({
          type: "closeDialog"
        });
      }).catch(function(ie) {
        IR(ie) ? (j(ie), D({
          type: "closeDialog"
        })) : jR(ie) ? (A.current = !1, L.current ? (L.current.value = null, L.current.click()) : Y(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))) : Y(ie);
      });
      return;
    }
    L.current && (D({
      type: "openDialog"
    }), B(), L.current.value = null, L.current.click());
  }, [D, B, j, m, pe, Y, Z, s]), $e = S.useCallback(function(W) {
    !M.current || !M.current.isEqualNode(W.target) || (W.key === " " || W.key === "Enter" || W.keyCode === 32 || W.keyCode === 13) && (W.preventDefault(), xe());
  }, [M, xe]), at = S.useCallback(function() {
    D({
      type: "focus"
    });
  }, []), ot = S.useCallback(function() {
    D({
      type: "blur"
    });
  }, []), Mt = S.useCallback(function() {
    E || (PR() ? setTimeout(xe, 0) : xe());
  }, [E, xe]), we = function(ie) {
    return r ? null : ie;
  }, K = function(ie) {
    return C ? null : we(ie);
  }, ge = function(ie) {
    return k ? null : we(ie);
  }, ye = function(ie) {
    P && ie.stopPropagation();
  }, Me = S.useMemo(function() {
    return function() {
      var W = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, ie = W.refKey, Oe = ie === void 0 ? "ref" : ie, Ae = W.role, Le = W.onKeyDown, _n = W.onFocus, sn = W.onBlur, zr = W.onClick, Wi = W.onDragEnter, Gi = W.onDragOver, Hr = W.onDragLeave, Ki = W.onDrop, ur = yl(W, DR);
      return Te(Te(cp({
        onKeyDown: K(Gt(Le, $e)),
        onFocus: K(Gt(_n, at)),
        onBlur: K(Gt(sn, ot)),
        onClick: we(Gt(zr, Mt)),
        onDragEnter: ge(Gt(Wi, X)),
        onDragOver: ge(Gt(Gi, re)),
        onDragLeave: ge(Gt(Hr, oe)),
        onDrop: ge(Gt(Ki, fe)),
        role: typeof Ae == "string" && Ae !== "" ? Ae : "presentation"
      }, Oe, M), !r && !C ? {
        tabIndex: 0
      } : {}), ur);
    };
  }, [M, $e, at, ot, Mt, X, re, oe, fe, C, k, r]), Xe = S.useCallback(function(W) {
    W.stopPropagation();
  }, []), Pn = S.useMemo(function() {
    return function() {
      var W = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, ie = W.refKey, Oe = ie === void 0 ? "ref" : ie, Ae = W.onChange, Le = W.onClick, _n = yl(W, FR), sn = cp({
        accept: $,
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
        onChange: we(Gt(Ae, fe)),
        onClick: we(Gt(Le, Xe)),
        tabIndex: -1
      }, Oe, L);
      return Te(Te({}, sn), _n);
    };
  }, [L, n, s, fe, r]);
  return Te(Te({}, R), {}, {
    isFocused: H && !r,
    getRootProps: Me,
    getInputProps: Pn,
    rootRef: M,
    inputRef: L,
    open: we(xe)
  });
}
function WR(e, t) {
  switch (t.type) {
    case "focus":
      return Te(Te({}, e), {}, {
        isFocused: !0
      });
    case "blur":
      return Te(Te({}, e), {}, {
        isFocused: !1
      });
    case "openDialog":
      return Te(Te({}, fp), {}, {
        isFileDialogActive: !0
      });
    case "closeDialog":
      return Te(Te({}, e), {}, {
        isFileDialogActive: !1
      });
    case "setDraggedFiles":
      return Te(Te({}, e), {}, {
        isDragActive: t.isDragActive,
        isDragAccept: t.isDragAccept,
        isDragReject: t.isDragReject
      });
    case "setFiles":
      return Te(Te({}, e), {}, {
        acceptedFiles: t.acceptedFiles,
        fileRejections: t.fileRejections,
        isDragReject: t.isDragReject
      });
    case "reset":
      return Te({}, fp);
    default:
      return e;
  }
}
function uy() {
}
var GR = /* @__PURE__ */ new Map([
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
function zo(e, t) {
  var n = KR(e);
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
function KR(e) {
  var t = e.name, n = t && t.lastIndexOf(".") !== -1;
  if (n && !e.type) {
    var r = t.split(".").pop().toLowerCase(), i = GR.get(r);
    i && Object.defineProperty(e, "type", {
      value: i,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return e;
}
var qR = [
  // Thumbnail cache files for macOS and Windows
  ".DS_Store",
  "Thumbs.db"
  // Windows
];
function YR(e) {
  return Et(this, void 0, void 0, function() {
    return Bi(this, function(t) {
      return bl(e) && XR(e.dataTransfer) ? [2, eD(e.dataTransfer, e.type)] : QR(e) ? [2, ZR(e)] : Array.isArray(e) && e.every(function(n) {
        return "getFile" in n && typeof n.getFile == "function";
      }) ? [2, JR(e)] : [2, []];
    });
  });
}
function XR(e) {
  return bl(e);
}
function QR(e) {
  return bl(e) && bl(e.target);
}
function bl(e) {
  return typeof e == "object" && e !== null;
}
function ZR(e) {
  return pp(e.target.files).map(function(t) {
    return zo(t);
  });
}
function JR(e) {
  return Et(this, void 0, void 0, function() {
    var t;
    return Bi(this, function(n) {
      switch (n.label) {
        case 0:
          return [4, Promise.all(e.map(function(r) {
            return r.getFile();
          }))];
        case 1:
          return t = n.sent(), [2, t.map(function(r) {
            return zo(r);
          })];
      }
    });
  });
}
function eD(e, t) {
  return Et(this, void 0, void 0, function() {
    var n, r;
    return Bi(this, function(i) {
      switch (i.label) {
        case 0:
          return e.items ? (n = pp(e.items).filter(function(a) {
            return a.kind === "file";
          }), t !== "drop" ? [2, n] : [4, Promise.all(n.map(tD))]) : [3, 2];
        case 1:
          return r = i.sent(), [2, cy(Qw(r))];
        case 2:
          return [2, cy(pp(e.files).map(function(a) {
            return zo(a);
          }))];
      }
    });
  });
}
function cy(e) {
  return e.filter(function(t) {
    return qR.indexOf(t.name) === -1;
  });
}
function pp(e) {
  if (e === null)
    return [];
  for (var t = [], n = 0; n < e.length; n++) {
    var r = e[n];
    t.push(r);
  }
  return t;
}
function tD(e) {
  if (typeof e.webkitGetAsEntry != "function")
    return fy(e);
  var t = e.webkitGetAsEntry();
  return t && t.isDirectory ? Zw(t) : fy(e);
}
function Qw(e) {
  return e.reduce(function(t, n) {
    return qe(qe([], qh(t), !1), qh(Array.isArray(n) ? Qw(n) : [n]), !1);
  }, []);
}
function fy(e) {
  var t = e.getAsFile();
  if (!t)
    return Promise.reject("".concat(e, " is not a File"));
  var n = zo(t);
  return Promise.resolve(n);
}
function nD(e) {
  return Et(this, void 0, void 0, function() {
    return Bi(this, function(t) {
      return [2, e.isDirectory ? Zw(e) : rD(e)];
    });
  });
}
function Zw(e) {
  var t = e.createReader();
  return new Promise(function(n, r) {
    var i = [];
    function a() {
      var o = this;
      t.readEntries(function(s) {
        return Et(o, void 0, void 0, function() {
          var l, u, c;
          return Bi(this, function(d) {
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
                c = Promise.all(s.map(nD)), i.push(c), a(), d.label = 6;
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
function rD(e) {
  return Et(this, void 0, void 0, function() {
    return Bi(this, function(t) {
      return [2, new Promise(function(n, r) {
        e.file(function(i) {
          var a = zo(i, e.fullPath);
          n(a);
        }, function(i) {
          r(i);
        });
      })];
    });
  });
}
function Jw(e) {
  var t = e.message;
  return /* @__PURE__ */ y.createElement("div", {
    className: "pgn__dropzone-error-wrapper"
  }, t);
}
Jw.propTypes = {
  message: f.oneOfType([f.string, f.element]).isRequired
};
var iD = ["errorMsgs"];
function dp() {
  return dp = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, dp.apply(this, arguments);
}
function aD(e, t) {
  if (e == null) return {};
  var n = oD(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function oD(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function eE(e) {
  var t = e.errorMsgs, n = aD(e, iD);
  return /* @__PURE__ */ y.createElement(Nr, dp({
    variant: "danger",
    icon: Gk,
    className: "pgn__dropzone-generic-alert"
  }, n), t.map(function(r) {
    return /* @__PURE__ */ y.createElement("span", {
      key: r
    }, r);
  }));
}
eE.propTypes = {
  errorMsgs: f.arrayOf(f.string).isRequired
};
function sD(e, t) {
  var n = 0;
  return y.Children.map(e, function(r) {
    return /* @__PURE__ */ y.isValidElement(r) ? t(r, n++) : r;
  });
}
var lD = ["min", "now", "max", "label", "srOnly", "striped", "animated", "className", "style", "variant", "bsPrefix"], uD = ["isChild"], cD = ["min", "now", "max", "label", "srOnly", "striped", "animated", "bsPrefix", "variant", "className", "children"], py = 1e3, fD = {
  min: 0,
  max: 100,
  animated: !1,
  isChild: !1,
  srOnly: !1,
  striped: !1
};
function pD(e, t, n) {
  var r = (e - t) / (n - t) * 100;
  return Math.round(r * py) / py;
}
function dy(e, t) {
  var n, r = e.min, i = e.now, a = e.max, o = e.label, s = e.srOnly, l = e.striped, u = e.animated, c = e.className, d = e.style, p = e.variant, g = e.bsPrefix, x = ve(e, lD);
  return /* @__PURE__ */ y.createElement("div", ne({
    ref: t
  }, x, {
    role: "progressbar",
    className: q(c, g + "-bar", (n = {}, n["bg-" + p] = p, n[g + "-bar-animated"] = u, n[g + "-bar-striped"] = u || l, n)),
    style: ne({
      width: pD(i, r, a) + "%"
    }, d),
    "aria-valuenow": i,
    "aria-valuemin": r,
    "aria-valuemax": a
  }), s ? /* @__PURE__ */ y.createElement("span", {
    className: "sr-only"
  }, o) : o);
}
var vi = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.isChild, r = ve(e, uD);
  if (r.bsPrefix = Re(r.bsPrefix, "progress"), n)
    return dy(r, t);
  var i = r.min, a = r.now, o = r.max, s = r.label, l = r.srOnly, u = r.striped, c = r.animated, d = r.bsPrefix, p = r.variant, g = r.className, x = r.children, w = ve(r, cD);
  return /* @__PURE__ */ y.createElement("div", ne({
    ref: t
  }, w, {
    className: q(g, d)
  }), x ? sD(x, function(h) {
    return /* @__PURE__ */ S.cloneElement(h, {
      isChild: !0
    });
  }) : dy({
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
vi.displayName = "ProgressBar";
vi.defaultProps = fD;
var dD = ["className", "variant", "children", "arrowPlacement"];
function mp() {
  return mp = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, mp.apply(this, arguments);
}
function mD(e, t) {
  if (e == null) return {};
  var n = hD(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function hD(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var xl = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.className, r = e.variant, i = e.children, a = e.arrowPlacement, o = mD(e, dD);
  return /* @__PURE__ */ y.createElement("span", mp({
    className: q(n, "pgn__annotation", "pgn__annotation-".concat(r, "-").concat(a)),
    ref: t
  }, o), i);
});
xl.defaultProps = {
  className: void 0,
  variant: "success",
  arrowPlacement: "bottom"
};
xl.propTypes = {
  /** Specifies contents of the component. */
  children: f.node.isRequired,
  /** Specifies class name to append to the base element. */
  className: f.string,
  /** Specifies variant to use. */
  variant: f.oneOf(["error", "success", "warning", "light", "dark"]),
  /** Specifies arrow position. */
  arrowPlacement: f.oneOf(["top", "right", "bottom", "left"])
};
const my = (e, t = "ltr", n = !0, r = "pgn__annotation") => {
  if (!e.current || !e.current.style)
    return !1;
  const { children: i } = e.current;
  let a = 0;
  for (let o = 0; o < i.length; o++) {
    const s = i[o].getBoundingClientRect();
    i[o].className.includes(r) ? a += s.width / 2 : a += n ? 0 : s.width;
  }
  return e.current.style[t === "rtl" ? "marginRight" : "marginLeft"] = `${-a}px`, !0;
}, hy = (e, t) => t === "rtl" ? { right: `${e}%` } : { left: `${e}%` };
var vD = ["now", "label", "variant", "threshold", "thresholdLabel", "thresholdVariant", "progressHint", "thresholdHint"];
function hp() {
  return hp = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, hp.apply(this, arguments);
}
function gD(e, t) {
  if (e == null) return {};
  var n = yD(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function yD(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var vy = "pgn__annotation", gy = 50, tE = "warning", nE = "dark", wl = ["dark", "warning", "success", "error"];
function rE(e) {
  return /* @__PURE__ */ y.createElement(vi, e);
}
function Pm(e) {
  var t = e.now, n = e.label, r = e.variant, i = e.threshold, a = e.thresholdLabel, o = e.thresholdVariant, s = e.progressHint, l = e.thresholdHint, u = gD(e, vD), c = y.useRef(), d = y.useRef(), p = (i || 0) - (t || 0), g = t < gy, x = i < gy, w = wl.includes(r) ? r : tE, h = wl.includes(o) ? o : nE, m = window.getComputedStyle(document.body).getPropertyValue("direction"), v = S.useCallback(function() {
    my(c, m, g, vy), my(d, m, x, vy);
  }, [m, g, x]);
  S.useEffect(function() {
    v();
    var E = new ResizeObserver(function() {
      v();
    }), C = c.current;
    return E.observe(C), function() {
      return C && E.unobserve(C);
    };
  }, [v]);
  var b = function(C) {
    return /* @__PURE__ */ y.createElement("span", {
      className: "pgn__progress-hint",
      "data-testid": "progress-hint"
    }, C);
  };
  return /* @__PURE__ */ y.createElement("div", {
    className: "pgn__progress-annotated"
  }, !!n && /* @__PURE__ */ y.createElement("div", {
    className: "pgn__progress-info",
    style: hy(t, m),
    ref: c
  }, !g && b(s), /* @__PURE__ */ y.createElement(xl, {
    variant: w
  }, n), g && b(s)), /* @__PURE__ */ y.createElement(vi, null, /* @__PURE__ */ y.createElement(vi, hp({}, u, {
    now: t,
    className: q("pgn__progress-bar--".concat(w), p > 0 ? "pgn__progress-tick--white" : "pgn__progress-tick--black"),
    srOnly: !0
  })), !!i && /* @__PURE__ */ y.createElement(vi, {
    now: p,
    className: "pgn__progress-bar--".concat(h),
    srOnly: !0
  })), !!i && !!a && /* @__PURE__ */ y.createElement("div", {
    className: "pgn__progress-info",
    style: hy(i, m),
    ref: d
  }, !x && b(l), /* @__PURE__ */ y.createElement(xl, {
    arrowPlacement: "top",
    variant: h
  }, a), x && b(l)));
}
Pm.propTypes = {
  /** Current value of progress. */
  now: f.number,
  /** Show label that represents visual percentage. */
  label: f.node,
  /** The `ProgressBar` style variant to use. */
  variant: f.oneOf(wl),
  /** Specifies an additional `className` to add to the base element. */
  className: f.string,
  /** Threshold current value. */
  threshold: f.number,
  /** Specifies label for `threshold`. */
  thresholdLabel: f.node,
  /** Variant for threshold value. */
  thresholdVariant: f.oneOf(wl),
  /** Text near the progress annotation. */
  progressHint: f.node,
  /** Text near the threshold annotation. */
  thresholdHint: f.node
};
Pm.defaultProps = {
  now: void 0,
  label: void 0,
  variant: tE,
  className: void 0,
  threshold: void 0,
  thresholdLabel: void 0,
  thresholdVariant: nE,
  progressHint: void 0,
  thresholdHint: void 0
};
rE.Annotated = Pm;
function iE(e) {
  var t = e.percent, n = e.variant, r = e.name, i = e.onCancel;
  return n === "spinner" ? /* @__PURE__ */ y.createElement(cu, {
    animation: "border",
    "aria-live": "polite",
    screenReaderText: "Uploading ".concat(r, ", ").concat(t, "% done."),
    "data-testid": "upload-spinner"
  }) : /* @__PURE__ */ y.createElement("div", {
    className: "w-50"
  }, /* @__PURE__ */ y.createElement("p", {
    className: "text-muted"
  }, /* @__PURE__ */ y.createElement(Ka, {
    id: "pgn.Dropzone.UploadProgress.uploadLabel",
    defaultMessage: "Uploading {filename}.",
    description: "A text that is shown near a progress bar during file upload in Dropzone component.",
    values: {
      filename: r
    }
  })), /* @__PURE__ */ y.createElement("div", {
    className: "d-flex justify-content-between align-items-center w-100"
  }, /* @__PURE__ */ y.createElement(rE, {
    now: t,
    label: "".concat(t, "%"),
    variant: "success",
    className: "flex-grow-1",
    "data-testid": "upload-progress-bar"
  }), /* @__PURE__ */ y.createElement(yn, {
    variant: "tertiary",
    className: "ml-3",
    onClick: i
  }, /* @__PURE__ */ y.createElement(Ka, {
    id: "pgn.Dropzone.UploadProgress.cancelLabel",
    defaultMessage: "Cancel",
    description: "Label of a cancel button that is shown during file upload in Dropzone component."
  }))));
}
iE.propTypes = {
  variant: f.oneOf(["spinner", "bar"]).isRequired,
  percent: f.number.isRequired,
  name: f.string.isRequired,
  onCancel: f.func.isRequired
};
const bD = (e) => Object.keys(e).length > 1 ? !0 : Object.keys(e).length === 0 ? !1 : Object.values(e)[0].length > 1, aE = (e) => Object.entries(e).reduce((t, n) => {
  const [r, i] = n;
  let a;
  return i.length > 0 ? a = `${i.join(", ").replaceAll(".", "").toUpperCase()}, ` : r.endsWith("/*") ? a = `${r.slice(0, -2)}, ` : a = `${r.split("/").pop().toUpperCase()}, `, t + a;
}, "").slice(0, -2), ii = (e) => {
  if (e === 0)
    return "0 Bytes";
  const t = 1024, n = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], r = Math.floor(Math.log(e) / Math.log(t));
  return `${parseFloat((e / t ** r).toFixed(2))}${n[r]}`;
}, Kt = {
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
function El(e) {
  var t = e.accept, n = e.minSize, r = e.maxSize, i = $i(), a = function() {
    var s, l;
    if (t) {
      var u = aE(t), c = u.lastIndexOf(",");
      s = i.formatMessage(Kt.fileTypeRestriction, {
        count: c === -1 ? 1 : 2,
        firstPart: c === -1 ? u : u.slice(0, c),
        secondPart: c !== -1 && u.slice(c + 1)
      });
    }
    return n && r && Number.isFinite(r) ? l = i.formatMessage(Kt.fileSizeBetween, {
      sizeMin: ii(n),
      sizeMax: ii(r)
    }) : r && Number.isFinite(r) ? l = i.formatMessage(Kt.fileSizeMax, {
      sizeMax: ii(r)
    }) : n && (l = i.formatMessage(Kt.fileSizeMin, {
      sizeMin: ii(n)
    })), s && l ? "".concat(s, " (").concat(l, ")") : s || l;
  };
  return /* @__PURE__ */ y.createElement(y.Fragment, null, /* @__PURE__ */ y.createElement("div", {
    className: "pgn__dropzone__upload-icon-wrapper"
  }, /* @__PURE__ */ y.createElement(gn, {
    src: Wk,
    className: "pgn__dropzone__upload-icon"
  })), /* @__PURE__ */ y.createElement("p", null, /* @__PURE__ */ y.createElement(Ka, {
    id: "pgn.Dropzone.DefaultContent.label",
    description: "A text that appears as a label for input of Dropzone component.",
    defaultMessage: "Drag and drop your file here or click to upload."
  })), [t, n, r].some(function(o) {
    return o;
  }) && /* @__PURE__ */ y.createElement("p", {
    className: "pgn__dropzone__upload-restriction-message"
  }, a()));
}
El.propTypes = {
  accept: f.objectOf(f.arrayOf(f.string)),
  maxSize: f.number,
  minSize: f.number
};
El.defaultProps = {
  accept: void 0,
  maxSize: void 0,
  minSize: void 0
};
function Ol(e) {
  "@babel/helpers - typeof";
  return Ol = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ol(e);
}
var xD = ["className", "accept", "minSize", "maxSize", "validator", "errorMessages", "progressVariant", "inputComponent", "onProcessUpload", "onUploadProgress", "onUploadCancel"];
function vp() {
  return vp = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, vp.apply(this, arguments);
}
function va() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  va = function() {
    return t;
  };
  var e, t = {}, n = Object.prototype, r = n.hasOwnProperty, i = Object.defineProperty || function(I, _, R) {
    I[_] = R.value;
  }, a = typeof Symbol == "function" ? Symbol : {}, o = a.iterator || "@@iterator", s = a.asyncIterator || "@@asyncIterator", l = a.toStringTag || "@@toStringTag";
  function u(I, _, R) {
    return Object.defineProperty(I, _, { value: R, enumerable: !0, configurable: !0, writable: !0 }), I[_];
  }
  try {
    u({}, "");
  } catch {
    u = function(R, D, H) {
      return R[D] = H;
    };
  }
  function c(I, _, R, D) {
    var H = _ && _.prototype instanceof m ? _ : m, O = Object.create(H.prototype), A = new M(D || []);
    return i(O, "_invoke", { value: $(I, R, A) }), O;
  }
  function d(I, _, R) {
    try {
      return { type: "normal", arg: I.call(_, R) };
    } catch (D) {
      return { type: "throw", arg: D };
    }
  }
  t.wrap = c;
  var p = "suspendedStart", g = "suspendedYield", x = "executing", w = "completed", h = {};
  function m() {
  }
  function v() {
  }
  function b() {
  }
  var E = {};
  u(E, o, function() {
    return this;
  });
  var C = Object.getPrototypeOf, k = C && C(C(L([])));
  k && k !== n && r.call(k, o) && (E = k);
  var P = b.prototype = m.prototype = Object.create(E);
  function N(I) {
    ["next", "throw", "return"].forEach(function(_) {
      u(I, _, function(R) {
        return this._invoke(_, R);
      });
    });
  }
  function T(I, _) {
    function R(H, O, A, F) {
      var V = d(I[H], I, O);
      if (V.type !== "throw") {
        var G = V.arg, Y = G.value;
        return Y && Ol(Y) == "object" && r.call(Y, "__await") ? _.resolve(Y.__await).then(function(X) {
          R("next", X, A, F);
        }, function(X) {
          R("throw", X, A, F);
        }) : _.resolve(Y).then(function(X) {
          G.value = X, A(G);
        }, function(X) {
          return R("throw", X, A, F);
        });
      }
      F(V.arg);
    }
    var D;
    i(this, "_invoke", { value: function(O, A) {
      function F() {
        return new _(function(V, G) {
          R(O, A, V, G);
        });
      }
      return D = D ? D.then(F, F) : F();
    } });
  }
  function $(I, _, R) {
    var D = p;
    return function(H, O) {
      if (D === x) throw Error("Generator is already running");
      if (D === w) {
        if (H === "throw") throw O;
        return { value: e, done: !0 };
      }
      for (R.method = H, R.arg = O; ; ) {
        var A = R.delegate;
        if (A) {
          var F = Z(A, R);
          if (F) {
            if (F === h) continue;
            return F;
          }
        }
        if (R.method === "next") R.sent = R._sent = R.arg;
        else if (R.method === "throw") {
          if (D === p) throw D = w, R.arg;
          R.dispatchException(R.arg);
        } else R.method === "return" && R.abrupt("return", R.arg);
        D = x;
        var V = d(I, _, R);
        if (V.type === "normal") {
          if (D = R.done ? w : g, V.arg === h) continue;
          return { value: V.arg, done: R.done };
        }
        V.type === "throw" && (D = w, R.method = "throw", R.arg = V.arg);
      }
    };
  }
  function Z(I, _) {
    var R = _.method, D = I.iterator[R];
    if (D === e) return _.delegate = null, R === "throw" && I.iterator.return && (_.method = "return", _.arg = e, Z(I, _), _.method === "throw") || R !== "return" && (_.method = "throw", _.arg = new TypeError("The iterator does not provide a '" + R + "' method")), h;
    var H = d(D, I.iterator, _.arg);
    if (H.type === "throw") return _.method = "throw", _.arg = H.arg, _.delegate = null, h;
    var O = H.arg;
    return O ? O.done ? (_[I.resultName] = O.value, _.next = I.nextLoc, _.method !== "return" && (_.method = "next", _.arg = e), _.delegate = null, h) : O : (_.method = "throw", _.arg = new TypeError("iterator result is not an object"), _.delegate = null, h);
  }
  function B(I) {
    var _ = { tryLoc: I[0] };
    1 in I && (_.catchLoc = I[1]), 2 in I && (_.finallyLoc = I[2], _.afterLoc = I[3]), this.tryEntries.push(_);
  }
  function j(I) {
    var _ = I.completion || {};
    _.type = "normal", delete _.arg, I.completion = _;
  }
  function M(I) {
    this.tryEntries = [{ tryLoc: "root" }], I.forEach(B, this), this.reset(!0);
  }
  function L(I) {
    if (I || I === "") {
      var _ = I[o];
      if (_) return _.call(I);
      if (typeof I.next == "function") return I;
      if (!isNaN(I.length)) {
        var R = -1, D = function H() {
          for (; ++R < I.length; ) if (r.call(I, R)) return H.value = I[R], H.done = !1, H;
          return H.value = e, H.done = !0, H;
        };
        return D.next = D;
      }
    }
    throw new TypeError(Ol(I) + " is not iterable");
  }
  return v.prototype = b, i(P, "constructor", { value: b, configurable: !0 }), i(b, "constructor", { value: v, configurable: !0 }), v.displayName = u(b, l, "GeneratorFunction"), t.isGeneratorFunction = function(I) {
    var _ = typeof I == "function" && I.constructor;
    return !!_ && (_ === v || (_.displayName || _.name) === "GeneratorFunction");
  }, t.mark = function(I) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(I, b) : (I.__proto__ = b, u(I, l, "GeneratorFunction")), I.prototype = Object.create(P), I;
  }, t.awrap = function(I) {
    return { __await: I };
  }, N(T.prototype), u(T.prototype, s, function() {
    return this;
  }), t.AsyncIterator = T, t.async = function(I, _, R, D, H) {
    H === void 0 && (H = Promise);
    var O = new T(c(I, _, R, D), H);
    return t.isGeneratorFunction(_) ? O : O.next().then(function(A) {
      return A.done ? A.value : O.next();
    });
  }, N(P), u(P, l, "Generator"), u(P, o, function() {
    return this;
  }), u(P, "toString", function() {
    return "[object Generator]";
  }), t.keys = function(I) {
    var _ = Object(I), R = [];
    for (var D in _) R.push(D);
    return R.reverse(), function H() {
      for (; R.length; ) {
        var O = R.pop();
        if (O in _) return H.value = O, H.done = !1, H;
      }
      return H.done = !0, H;
    };
  }, t.values = L, M.prototype = { constructor: M, reset: function(_) {
    if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(j), !_) for (var R in this) R.charAt(0) === "t" && r.call(this, R) && !isNaN(+R.slice(1)) && (this[R] = e);
  }, stop: function() {
    this.done = !0;
    var _ = this.tryEntries[0].completion;
    if (_.type === "throw") throw _.arg;
    return this.rval;
  }, dispatchException: function(_) {
    if (this.done) throw _;
    var R = this;
    function D(G, Y) {
      return A.type = "throw", A.arg = _, R.next = G, Y && (R.method = "next", R.arg = e), !!Y;
    }
    for (var H = this.tryEntries.length - 1; H >= 0; --H) {
      var O = this.tryEntries[H], A = O.completion;
      if (O.tryLoc === "root") return D("end");
      if (O.tryLoc <= this.prev) {
        var F = r.call(O, "catchLoc"), V = r.call(O, "finallyLoc");
        if (F && V) {
          if (this.prev < O.catchLoc) return D(O.catchLoc, !0);
          if (this.prev < O.finallyLoc) return D(O.finallyLoc);
        } else if (F) {
          if (this.prev < O.catchLoc) return D(O.catchLoc, !0);
        } else {
          if (!V) throw Error("try statement without catch or finally");
          if (this.prev < O.finallyLoc) return D(O.finallyLoc);
        }
      }
    }
  }, abrupt: function(_, R) {
    for (var D = this.tryEntries.length - 1; D >= 0; --D) {
      var H = this.tryEntries[D];
      if (H.tryLoc <= this.prev && r.call(H, "finallyLoc") && this.prev < H.finallyLoc) {
        var O = H;
        break;
      }
    }
    O && (_ === "break" || _ === "continue") && O.tryLoc <= R && R <= O.finallyLoc && (O = null);
    var A = O ? O.completion : {};
    return A.type = _, A.arg = R, O ? (this.method = "next", this.next = O.finallyLoc, h) : this.complete(A);
  }, complete: function(_, R) {
    if (_.type === "throw") throw _.arg;
    return _.type === "break" || _.type === "continue" ? this.next = _.arg : _.type === "return" ? (this.rval = this.arg = _.arg, this.method = "return", this.next = "end") : _.type === "normal" && R && (this.next = R), h;
  }, finish: function(_) {
    for (var R = this.tryEntries.length - 1; R >= 0; --R) {
      var D = this.tryEntries[R];
      if (D.finallyLoc === _) return this.complete(D.completion, D.afterLoc), j(D), h;
    }
  }, catch: function(_) {
    for (var R = this.tryEntries.length - 1; R >= 0; --R) {
      var D = this.tryEntries[R];
      if (D.tryLoc === _) {
        var H = D.completion;
        if (H.type === "throw") {
          var O = H.arg;
          j(D);
        }
        return O;
      }
    }
    throw Error("illegal catch attempt");
  }, delegateYield: function(_, R, D) {
    return this.delegate = { iterator: L(_), resultName: R, nextLoc: D }, this.method === "next" && (this.arg = e), h;
  } }, t;
}
function yy(e, t, n, r, i, a, o) {
  try {
    var s = e[a](o), l = s.value;
  } catch (u) {
    n(u);
    return;
  }
  s.done ? t(l) : Promise.resolve(l).then(r, i);
}
function by(e) {
  return function() {
    var t = this, n = arguments;
    return new Promise(function(r, i) {
      var a = e.apply(t, n);
      function o(l) {
        yy(a, r, i, o, s, "next", l);
      }
      function s(l) {
        yy(a, r, i, o, s, "throw", l);
      }
      o(void 0);
    });
  };
}
function sa(e, t) {
  return SD(e) || OD(e, t) || ED(e, t) || wD();
}
function wD() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ED(e, t) {
  if (e) {
    if (typeof e == "string") return xy(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return xy(e, t);
  }
}
function xy(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function OD(e, t) {
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
function SD(e) {
  if (Array.isArray(e)) return e;
}
function CD(e, t) {
  if (e == null) return {};
  var n = kD(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function kD(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function _m(e) {
  var t = e.className, n = e.accept, r = e.minSize, i = e.maxSize, a = e.validator, o = e.errorMessages, s = e.progressVariant, l = e.inputComponent, u = e.onProcessUpload, c = e.onUploadProgress, d = e.onUploadCancel, p = CD(e, xD), g = S.useState(!1), x = sa(g, 2), w = x[0], h = x[1], m = S.useState([]), v = sa(m, 2), b = v[0], E = v[1], C = S.useState(0), k = sa(C, 2), P = k[0], N = k[1], T = S.useState(void 0), $ = sa(T, 2), Z = $[0], B = $[1], j = S.useState(void 0), M = sa(j, 2), L = M[0], I = M[1], _ = $i(), R = o.uploadError, D = o.invalidSizeLess, H = o.invalidSizeMore, O = o.invalidType, A = o.multipleDragged, F = /* @__PURE__ */ function() {
    var we = by(/* @__PURE__ */ va().mark(function K(ge) {
      var ye;
      return va().wrap(function(Xe) {
        for (; ; ) switch (Xe.prev = Xe.next) {
          case 0:
            return b && E([]), Xe.next = 3, YR(ge);
          case 3:
            ye = Xe.sent, ye && ye.length > 1 && h(!0);
          case 5:
          case "end":
            return Xe.stop();
        }
      }, K);
    }));
    return function(ge) {
      return we.apply(this, arguments);
    };
  }(), V = function() {
    w && h(!1);
  }, G = function(K) {
    w ? h(!1) : E(K[0].errors.map(function(ge) {
      switch (ge.code) {
        case rc.FileTooLarge:
          return H || _.formatMessage(Kt.invalidSizeMore, {
            size: ii(i)
          });
        case rc.FileTooSmall:
          return D || _.formatMessage(Kt.invalidSizeLess, {
            size: ii(r)
          });
        case rc.FileInvalidType:
          return O || _.formatMessage(Kt.invalidType, {
            count: bD(n) ? 2 : 1,
            typeString: aE(n)
          });
        default:
          return _.formatMessage(Kt.unexpectedValidationError);
      }
    }));
  }, Y = function(K) {
    var ge = Math.round(K.loaded * 100 / K.total);
    N(ge), c(ge, K);
  }, X = function(K) {
    K.code !== "ERR_CANCELED" && (N(0), E([R || _.formatMessage(Kt.uploadError)]));
  }, re = function(K) {
    var ge = new AbortController();
    I(ge);
    var ye = {
      onUploadProgress: Y,
      signal: ge.signal
    };
    u({
      fileData: K,
      requestConfig: ye,
      handleError: X
    });
  }, oe = /* @__PURE__ */ function() {
    var we = by(/* @__PURE__ */ va().mark(function K(ge) {
      var ye, Me, Xe;
      return va().wrap(function(W) {
        for (; ; ) switch (W.prev = W.next) {
          case 0:
            if (ye = ge[0], !a) {
              W.next = 8;
              break;
            }
            return W.next = 4, a(ye);
          case 4:
            if (Me = W.sent, !Me) {
              W.next = 8;
              break;
            }
            return E([Me]), W.abrupt("return");
          case 8:
            b && E([]), Xe = new FormData(), Xe.append("file", ye), B(ye.name), re(Xe);
          case 13:
          case "end":
            return W.stop();
        }
      }, K);
    }));
    return function(ge) {
      return we.apply(this, arguments);
    };
  }(), pe = function() {
    L.abort(), N(0), d();
  }, fe = Xw({
    multiple: !1,
    maxFiles: 1,
    maxSize: i,
    minSize: r,
    onDragLeave: V,
    onDragEnter: F,
    onDropRejected: G,
    onDropAccepted: oe,
    accept: n,
    disabled: P && P !== 100
  }), xe = fe.getRootProps, $e = fe.getInputProps, at = fe.isDragActive, ot = fe.isDragReject, Mt = function() {
    return w ? /* @__PURE__ */ y.createElement(Jw, {
      message: A || _.formatMessage(Kt.multipleDragged)
    }) : b.length > 0 ? /* @__PURE__ */ y.createElement(y.Fragment, null, /* @__PURE__ */ y.createElement(eE, {
      errorMsgs: b
    }), l || /* @__PURE__ */ y.createElement(El, {
      minSize: r,
      maxSize: i,
      accept: n
    })) : P && P !== 100 ? /* @__PURE__ */ y.createElement(iE, {
      variant: s,
      percent: P,
      name: Z,
      onCancel: pe
    }) : l || /* @__PURE__ */ y.createElement(El, {
      minSize: r,
      maxSize: i,
      accept: n
    });
  };
  return /* @__PURE__ */ y.createElement("div", vp({
    "data-testid": "dropzone-container"
  }, xe({
    className: q("pgn__dropzone", t, {
      "pgn__dropzone-validation-error": w || b.length > 0 || ot,
      "pgn__dropzone-active": at && !ot
    })
  }), p), /* @__PURE__ */ y.createElement("input", $e()), /* @__PURE__ */ y.createElement("div", {
    className: "d-flex flex-column justify-content-around align-items-center w-100"
  }, Mt()));
}
_m.defaultProps = {
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
_m.propTypes = {
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
function PD() {
  const e = "csrftoken", t = document.cookie.split(";");
  for (let r = 0; r < t.length; r++) {
    const i = t[r].trim();
    if (i.startsWith(e + "="))
      return i.substring(e.length + 1);
  }
  const n = document.querySelector('meta[name="csrf-token"]');
  return n ? n.getAttribute("content") || "" : (console.warn("CSRF token not found"), "");
}
async function _D(e, t, n = {}) {
  const r = e.handlerUrl(e.element, t);
  try {
    const i = await fetch(r, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": PD()
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
const AD = ({ runtime: e, fields: t }) => {
  const [n, r] = S.useState(t.display_name), [i, a] = S.useState(t.title || ""), [o, s] = S.useState(t.description || ""), [l, u] = S.useState(t.audio_url || ""), [c, d] = S.useState(t.show_controls !== !1), [p, g] = S.useState(t.autoplay === !0), [x, w] = S.useState(t.show_download !== !1), [h, m] = S.useState(!1), [v, b] = S.useState(!1), [E, C] = S.useState(!1), [k, P] = S.useState(null), N = () => {
    const B = "csrftoken", j = document.cookie.split(";");
    for (let M = 0; M < j.length; M++) {
      const L = j[M].trim();
      if (L.startsWith(B + "="))
        return L.substring(B.length + 1);
    }
    return "";
  }, T = async ({ fileData: B, handleError: j }) => {
    b(!0), P(null);
    try {
      const M = `/assets/${t.course_id}/`, L = await fetch(M, {
        method: "POST",
        headers: {
          "X-CSRFToken": N(),
          Accept: "application/json"
        },
        body: B
      }), I = L.headers.get("content-type");
      let _;
      if (I != null && I.includes("application/json") ? _ = await L.json() : _ = { error: await L.text() || "Upload failed" }, L.ok && _.asset)
        u(_.asset.url), C(!0), P({ type: "success", text: "Audio file uploaded successfully!" });
      else {
        const R = _.error || _.msg || "Upload failed", D = new Error(R);
        j(D), P({ type: "error", text: R });
      }
    } catch (M) {
      console.error("Audio upload error:", M);
      const L = M instanceof Error ? M.message : "Upload failed";
      j(M), P({ type: "error", text: L });
    } finally {
      b(!1);
    }
  }, $ = async () => {
    m(!0), P(null);
    try {
      if (!n.trim()) {
        P({ type: "error", text: "Display name is required" }), m(!1);
        return;
      }
      if (!l.trim()) {
        P({ type: "error", text: "Audio URL is required" }), m(!1);
        return;
      }
      if (!E)
        try {
          new URL(l);
        } catch {
          P({ type: "error", text: "Please enter a valid URL for the audio file" }), m(!1);
          return;
        }
      e.notify && e.notify("save", { state: "start" });
      const B = await _D(e, "save_data", {
        display_name: n,
        title: i,
        description: o,
        audio_url: l,
        show_controls: c,
        autoplay: p,
        show_download: x
      });
      B.success ? (P({ type: "success", text: "Changes saved successfully!" }), e.notify && e.notify("save", { state: "end" })) : (P({ type: "error", text: B.error || "Failed to save changes." }), e.notify && e.notify("save", { state: "end" }));
    } catch (B) {
      console.error("Save error:", B), P({ type: "error", text: "An error occurred while saving." }), e.notify && e.notify("save", { state: "end" });
    } finally {
      m(!1);
    }
  }, Z = () => {
    e.notify && e.notify("cancel", {});
  };
  return /* @__PURE__ */ ae.jsxs("div", { className: "audio-player-studio-view", children: [
    k && /* @__PURE__ */ ae.jsx(
      Nr,
      {
        variant: k.type === "success" ? "success" : "danger",
        dismissible: !0,
        onClose: () => P(null),
        children: k.text
      }
    ),
    /* @__PURE__ */ ae.jsxs(se, { children: [
      /* @__PURE__ */ ae.jsxs(We, { className: "mb-4", children: [
        /* @__PURE__ */ ae.jsx(We.Header, { title: "Basic Settings" }),
        /* @__PURE__ */ ae.jsxs(We.Section, { children: [
          /* @__PURE__ */ ae.jsxs(se.Group, { className: "mb-3", children: [
            /* @__PURE__ */ ae.jsx(se.Label, { children: "Display Name *" }),
            /* @__PURE__ */ ae.jsx(
              se.Control,
              {
                type: "text",
                value: n,
                onChange: (B) => r(B.target.value),
                placeholder: "Audio Player"
              }
            ),
            /* @__PURE__ */ ae.jsx(se.Text, { children: "The name shown in the course outline." })
          ] }),
          /* @__PURE__ */ ae.jsxs(se.Group, { className: "mb-3", children: [
            /* @__PURE__ */ ae.jsx(se.Label, { children: "Title (Optional)" }),
            /* @__PURE__ */ ae.jsx(
              se.Control,
              {
                type: "text",
                value: i,
                onChange: (B) => a(B.target.value),
                placeholder: "e.g., Lecture Introduction"
              }
            ),
            /* @__PURE__ */ ae.jsx(se.Text, { children: "Optional heading displayed above the audio player." })
          ] }),
          /* @__PURE__ */ ae.jsxs(se.Group, { className: "mb-3", children: [
            /* @__PURE__ */ ae.jsx(se.Label, { children: "Description (Optional)" }),
            /* @__PURE__ */ ae.jsx(
              se.Control,
              {
                as: "textarea",
                rows: 4,
                value: o,
                onChange: (B) => s(B.target.value),
                placeholder: "Optional text content displayed alongside the audio..."
              }
            ),
            /* @__PURE__ */ ae.jsx(se.Text, { children: "Optional text content. Supports basic HTML (p, strong, em, a, ul, ol, li)." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ ae.jsxs(We, { className: "mb-4", children: [
        /* @__PURE__ */ ae.jsx(We.Header, { title: "Audio File" }),
        /* @__PURE__ */ ae.jsxs(We.Section, { children: [
          /* @__PURE__ */ ae.jsxs(se.Group, { className: "mb-3", children: [
            /* @__PURE__ */ ae.jsx(se.Label, { children: "Upload Audio File" }),
            /* @__PURE__ */ ae.jsx(
              _m,
              {
                onProcessUpload: T,
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
            /* @__PURE__ */ ae.jsx(se.Text, { children: "Upload audio files (MP3, M4A, OGG, WAV, WebM). Maximum size: 50MB." })
          ] }),
          /* @__PURE__ */ ae.jsxs(se.Group, { className: "mb-3", children: [
            /* @__PURE__ */ ae.jsx(se.Label, { children: "Or Enter Audio URL *" }),
            /* @__PURE__ */ ae.jsx(
              se.Control,
              {
                type: "url",
                value: l,
                onChange: (B) => {
                  u(B.target.value), C(!1);
                },
                placeholder: "https://example.com/audio.mp3",
                disabled: v
              }
            ),
            /* @__PURE__ */ ae.jsx(se.Text, { children: "Alternatively, enter a direct URL to an audio file." })
          ] }),
          l && !v && /* @__PURE__ */ ae.jsxs("div", { className: "audio-preview mt-3", children: [
            /* @__PURE__ */ ae.jsx(se.Label, { children: "Preview" }),
            /* @__PURE__ */ ae.jsxs("audio", { controls: !0, className: "w-100", children: [
              /* @__PURE__ */ ae.jsx("source", { src: l, type: "audio/mpeg" }),
              "Your browser does not support audio preview."
            ] }),
            /* @__PURE__ */ ae.jsx("small", { className: "text-muted d-block mt-2", children: l })
          ] }),
          v && /* @__PURE__ */ ae.jsx(Nr, { variant: "info", className: "mt-3", children: "Uploading audio file..." })
        ] })
      ] }),
      /* @__PURE__ */ ae.jsxs(We, { className: "mb-4", children: [
        /* @__PURE__ */ ae.jsx(We.Header, { title: "Playback Settings" }),
        /* @__PURE__ */ ae.jsxs(We.Section, { children: [
          /* @__PURE__ */ ae.jsxs(se.Group, { className: "mb-3", children: [
            /* @__PURE__ */ ae.jsx(
              se.Switch,
              {
                checked: c,
                onChange: (B) => d(B.target.checked),
                children: "Show Controls"
              }
            ),
            /* @__PURE__ */ ae.jsx(se.Text, { children: "Display play/pause, volume, and progress controls. Recommended: ON" })
          ] }),
          /* @__PURE__ */ ae.jsxs(se.Group, { className: "mb-3", children: [
            /* @__PURE__ */ ae.jsx(
              se.Switch,
              {
                checked: p,
                onChange: (B) => g(B.target.checked),
                children: "Auto-play"
              }
            ),
            /* @__PURE__ */ ae.jsx(se.Text, { className: "text-warning", children: "⚠️ Automatically start playback when page loads. Not recommended for accessibility." })
          ] }),
          /* @__PURE__ */ ae.jsxs(se.Group, { className: "mb-3", children: [
            /* @__PURE__ */ ae.jsx(
              se.Switch,
              {
                checked: x,
                onChange: (B) => w(B.target.checked),
                children: "Allow Download"
              }
            ),
            /* @__PURE__ */ ae.jsx(se.Text, { children: "Display a download link for students." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ ae.jsxs("div", { className: "d-flex justify-content-end", children: [
        /* @__PURE__ */ ae.jsx(yn, { variant: "tertiary", onClick: Z, disabled: h, className: "mr-2", children: "Cancel" }),
        /* @__PURE__ */ ae.jsx(yn, { variant: "primary", onClick: $, disabled: h, children: h ? "Saving..." : "Save" })
      ] })
    ] })
  ] });
}, ID = (e, t, n) => {
  e.element = t, hb.render(
    /* @__PURE__ */ ae.jsx(S.StrictMode, { children: /* @__PURE__ */ ae.jsx(KS, { locale: "en", children: /* @__PURE__ */ ae.jsx(AD, { runtime: e, fields: n.fields }) }) }),
    t
  );
};
export {
  ID as renderBlock
};
//# sourceMappingURL=studio-ui.js.map
