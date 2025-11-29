var rv = Object.defineProperty;
var nv = (e, t, r) => t in e ? rv(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var ds = (e, t, r) => nv(e, typeof t != "symbol" ? t + "" : t, r);
function Jr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var _f = { exports: {} }, mo = {}, Pf = { exports: {} }, $ = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yn = Symbol.for("react.element"), iv = Symbol.for("react.portal"), ov = Symbol.for("react.fragment"), av = Symbol.for("react.strict_mode"), uv = Symbol.for("react.profiler"), lv = Symbol.for("react.provider"), sv = Symbol.for("react.context"), cv = Symbol.for("react.forward_ref"), fv = Symbol.for("react.suspense"), dv = Symbol.for("react.memo"), hv = Symbol.for("react.lazy"), hs = Symbol.iterator;
function pv(e) {
  return e === null || typeof e != "object" ? null : (e = hs && e[hs] || e["@@iterator"], typeof e == "function" ? e : null);
}
var If = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, kf = Object.assign, Nf = {};
function en(e, t, r) {
  this.props = e, this.context = t, this.refs = Nf, this.updater = r || If;
}
en.prototype.isReactComponent = {};
en.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
en.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function bf() {
}
bf.prototype = en.prototype;
function Ku(e, t, r) {
  this.props = e, this.context = t, this.refs = Nf, this.updater = r || If;
}
var qu = Ku.prototype = new bf();
qu.constructor = Ku;
kf(qu, en.prototype);
qu.isPureReactComponent = !0;
var ps = Array.isArray, Rf = Object.prototype.hasOwnProperty, Ju = { current: null }, Lf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Mf(e, t, r) {
  var n, i = {}, o = null, a = null;
  if (t != null) for (n in t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (o = "" + t.key), t) Rf.call(t, n) && !Lf.hasOwnProperty(n) && (i[n] = t[n]);
  var u = arguments.length - 2;
  if (u === 1) i.children = r;
  else if (1 < u) {
    for (var l = Array(u), s = 0; s < u; s++) l[s] = arguments[s + 2];
    i.children = l;
  }
  if (e && e.defaultProps) for (n in u = e.defaultProps, u) i[n] === void 0 && (i[n] = u[n]);
  return { $$typeof: Yn, type: e, key: o, ref: a, props: i, _owner: Ju.current };
}
function vv(e, t) {
  return { $$typeof: Yn, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function el(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Yn;
}
function mv(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(r) {
    return t[r];
  });
}
var vs = /\/+/g;
function Zo(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? mv("" + e.key) : t.toString(36);
}
function Di(e, t, r, n, i) {
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
        case Yn:
        case iv:
          a = !0;
      }
  }
  if (a) return a = e, i = i(a), e = n === "" ? "." + Zo(a, 0) : n, ps(i) ? (r = "", e != null && (r = e.replace(vs, "$&/") + "/"), Di(i, t, r, "", function(s) {
    return s;
  })) : i != null && (el(i) && (i = vv(i, r + (!i.key || a && a.key === i.key ? "" : ("" + i.key).replace(vs, "$&/") + "/") + e)), t.push(i)), 1;
  if (a = 0, n = n === "" ? "." : n + ":", ps(e)) for (var u = 0; u < e.length; u++) {
    o = e[u];
    var l = n + Zo(o, u);
    a += Di(o, t, r, l, i);
  }
  else if (l = pv(e), typeof l == "function") for (e = l.call(e), u = 0; !(o = e.next()).done; ) o = o.value, l = n + Zo(o, u++), a += Di(o, t, r, l, i);
  else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return a;
}
function ri(e, t, r) {
  if (e == null) return e;
  var n = [], i = 0;
  return Di(e, n, "", "", function(o) {
    return t.call(r, o, i++);
  }), n;
}
function gv(e) {
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
var _e = { current: null }, _i = { transition: null }, yv = { ReactCurrentDispatcher: _e, ReactCurrentBatchConfig: _i, ReactCurrentOwner: Ju };
function Af() {
  throw Error("act(...) is not supported in production builds of React.");
}
$.Children = { map: ri, forEach: function(e, t, r) {
  ri(e, function() {
    t.apply(this, arguments);
  }, r);
}, count: function(e) {
  var t = 0;
  return ri(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return ri(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!el(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
$.Component = en;
$.Fragment = ov;
$.Profiler = uv;
$.PureComponent = Ku;
$.StrictMode = av;
$.Suspense = fv;
$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yv;
$.act = Af;
$.cloneElement = function(e, t, r) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var n = kf({}, e.props), i = e.key, o = e.ref, a = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, a = Ju.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (l in t) Rf.call(t, l) && !Lf.hasOwnProperty(l) && (n[l] = t[l] === void 0 && u !== void 0 ? u[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) n.children = r;
  else if (1 < l) {
    u = Array(l);
    for (var s = 0; s < l; s++) u[s] = arguments[s + 2];
    n.children = u;
  }
  return { $$typeof: Yn, type: e.type, key: i, ref: o, props: n, _owner: a };
};
$.createContext = function(e) {
  return e = { $$typeof: sv, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: lv, _context: e }, e.Consumer = e;
};
$.createElement = Mf;
$.createFactory = function(e) {
  var t = Mf.bind(null, e);
  return t.type = e, t;
};
$.createRef = function() {
  return { current: null };
};
$.forwardRef = function(e) {
  return { $$typeof: cv, render: e };
};
$.isValidElement = el;
$.lazy = function(e) {
  return { $$typeof: hv, _payload: { _status: -1, _result: e }, _init: gv };
};
$.memo = function(e, t) {
  return { $$typeof: dv, type: e, compare: t === void 0 ? null : t };
};
$.startTransition = function(e) {
  var t = _i.transition;
  _i.transition = {};
  try {
    e();
  } finally {
    _i.transition = t;
  }
};
$.unstable_act = Af;
$.useCallback = function(e, t) {
  return _e.current.useCallback(e, t);
};
$.useContext = function(e) {
  return _e.current.useContext(e);
};
$.useDebugValue = function() {
};
$.useDeferredValue = function(e) {
  return _e.current.useDeferredValue(e);
};
$.useEffect = function(e, t) {
  return _e.current.useEffect(e, t);
};
$.useId = function() {
  return _e.current.useId();
};
$.useImperativeHandle = function(e, t, r) {
  return _e.current.useImperativeHandle(e, t, r);
};
$.useInsertionEffect = function(e, t) {
  return _e.current.useInsertionEffect(e, t);
};
$.useLayoutEffect = function(e, t) {
  return _e.current.useLayoutEffect(e, t);
};
$.useMemo = function(e, t) {
  return _e.current.useMemo(e, t);
};
$.useReducer = function(e, t, r) {
  return _e.current.useReducer(e, t, r);
};
$.useRef = function(e) {
  return _e.current.useRef(e);
};
$.useState = function(e) {
  return _e.current.useState(e);
};
$.useSyncExternalStore = function(e, t, r) {
  return _e.current.useSyncExternalStore(e, t, r);
};
$.useTransition = function() {
  return _e.current.useTransition();
};
$.version = "18.3.1";
Pf.exports = $;
var w = Pf.exports;
const b = /* @__PURE__ */ Jr(w);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sv = w, Ev = Symbol.for("react.element"), wv = Symbol.for("react.fragment"), Tv = Object.prototype.hasOwnProperty, xv = Sv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Cv = { key: !0, ref: !0, __self: !0, __source: !0 };
function Hf(e, t, r) {
  var n, i = {}, o = null, a = null;
  r !== void 0 && (o = "" + r), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (a = t.ref);
  for (n in t) Tv.call(t, n) && !Cv.hasOwnProperty(n) && (i[n] = t[n]);
  if (e && e.defaultProps) for (n in t = e.defaultProps, t) i[n] === void 0 && (i[n] = t[n]);
  return { $$typeof: Ev, type: e, key: o, ref: a, props: i, _owner: xv.current };
}
mo.Fragment = wv;
mo.jsx = Hf;
mo.jsxs = Hf;
_f.exports = mo;
var k = _f.exports, Ff = { exports: {} }, Be = {}, Bf = { exports: {} }, $f = {};
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
  function t(_, M) {
    var H = _.length;
    _.push(M);
    e: for (; 0 < H; ) {
      var N = H - 1 >>> 1, F = _[N];
      if (0 < i(F, M)) _[N] = M, _[H] = F, H = N;
      else break e;
    }
  }
  function r(_) {
    return _.length === 0 ? null : _[0];
  }
  function n(_) {
    if (_.length === 0) return null;
    var M = _[0], H = _.pop();
    if (H !== M) {
      _[0] = H;
      e: for (var N = 0, F = _.length, V = F >>> 1; N < V; ) {
        var Se = 2 * (N + 1) - 1, qt = _[Se], lt = Se + 1, Jt = _[lt];
        if (0 > i(qt, H)) lt < F && 0 > i(Jt, qt) ? (_[N] = Jt, _[lt] = H, N = lt) : (_[N] = qt, _[Se] = H, N = Se);
        else if (lt < F && 0 > i(Jt, H)) _[N] = Jt, _[lt] = H, N = lt;
        else break e;
      }
    }
    return M;
  }
  function i(_, M) {
    var H = _.sortIndex - M.sortIndex;
    return H !== 0 ? H : _.id - M.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function() {
      return o.now();
    };
  } else {
    var a = Date, u = a.now();
    e.unstable_now = function() {
      return a.now() - u;
    };
  }
  var l = [], s = [], c = 1, h = null, f = 3, m = !1, S = !1, g = !1, O = typeof setTimeout == "function" ? setTimeout : null, p = typeof clearTimeout == "function" ? clearTimeout : null, d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(_) {
    for (var M = r(s); M !== null; ) {
      if (M.callback === null) n(s);
      else if (M.startTime <= _) n(s), M.sortIndex = M.expirationTime, t(l, M);
      else break;
      M = r(s);
    }
  }
  function y(_) {
    if (g = !1, v(_), !S) if (r(l) !== null) S = !0, an(T);
    else {
      var M = r(s);
      M !== null && gt(y, M.startTime - _);
    }
  }
  function T(_, M) {
    S = !1, g && (g = !1, p(D), D = -1), m = !0;
    var H = f;
    try {
      for (v(M), h = r(l); h !== null && (!(h.expirationTime > M) || _ && !ue()); ) {
        var N = h.callback;
        if (typeof N == "function") {
          h.callback = null, f = h.priorityLevel;
          var F = N(h.expirationTime <= M);
          M = e.unstable_now(), typeof F == "function" ? h.callback = F : h === r(l) && n(l), v(M);
        } else n(l);
        h = r(l);
      }
      if (h !== null) var V = !0;
      else {
        var Se = r(s);
        Se !== null && gt(y, Se.startTime - M), V = !1;
      }
      return V;
    } finally {
      h = null, f = H, m = !1;
    }
  }
  var x = !1, C = null, D = -1, G = 5, L = -1;
  function ue() {
    return !(e.unstable_now() - L < G);
  }
  function et() {
    if (C !== null) {
      var _ = e.unstable_now();
      L = _;
      var M = !0;
      try {
        M = C(!0, _);
      } finally {
        M ? mt() : (x = !1, C = null);
      }
    } else x = !1;
  }
  var mt;
  if (typeof d == "function") mt = function() {
    d(et);
  };
  else if (typeof MessageChannel < "u") {
    var wr = new MessageChannel(), on = wr.port2;
    wr.port1.onmessage = et, mt = function() {
      on.postMessage(null);
    };
  } else mt = function() {
    O(et, 0);
  };
  function an(_) {
    C = _, x || (x = !0, mt());
  }
  function gt(_, M) {
    D = O(function() {
      _(e.unstable_now());
    }, M);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(_) {
    _.callback = null;
  }, e.unstable_continueExecution = function() {
    S || m || (S = !0, an(T));
  }, e.unstable_forceFrameRate = function(_) {
    0 > _ || 125 < _ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : G = 0 < _ ? Math.floor(1e3 / _) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return f;
  }, e.unstable_getFirstCallbackNode = function() {
    return r(l);
  }, e.unstable_next = function(_) {
    switch (f) {
      case 1:
      case 2:
      case 3:
        var M = 3;
        break;
      default:
        M = f;
    }
    var H = f;
    f = M;
    try {
      return _();
    } finally {
      f = H;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(_, M) {
    switch (_) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        _ = 3;
    }
    var H = f;
    f = _;
    try {
      return M();
    } finally {
      f = H;
    }
  }, e.unstable_scheduleCallback = function(_, M, H) {
    var N = e.unstable_now();
    switch (typeof H == "object" && H !== null ? (H = H.delay, H = typeof H == "number" && 0 < H ? N + H : N) : H = N, _) {
      case 1:
        var F = -1;
        break;
      case 2:
        F = 250;
        break;
      case 5:
        F = 1073741823;
        break;
      case 4:
        F = 1e4;
        break;
      default:
        F = 5e3;
    }
    return F = H + F, _ = { id: c++, callback: M, priorityLevel: _, startTime: H, expirationTime: F, sortIndex: -1 }, H > N ? (_.sortIndex = H, t(s, _), r(l) === null && _ === r(s) && (g ? (p(D), D = -1) : g = !0, gt(y, H - N))) : (_.sortIndex = F, t(l, _), S || m || (S = !0, an(T))), _;
  }, e.unstable_shouldYield = ue, e.unstable_wrapCallback = function(_) {
    var M = f;
    return function() {
      var H = f;
      f = M;
      try {
        return _.apply(this, arguments);
      } finally {
        f = H;
      }
    };
  };
})($f);
Bf.exports = $f;
var Ov = Bf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dv = w, He = Ov;
function E(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++) t += "&args[]=" + encodeURIComponent(arguments[r]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Uf = /* @__PURE__ */ new Set(), bn = {};
function gr(e, t) {
  Gr(e, t), Gr(e + "Capture", t);
}
function Gr(e, t) {
  for (bn[e] = t, e = 0; e < t.length; e++) Uf.add(t[e]);
}
var xt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Aa = Object.prototype.hasOwnProperty, _v = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ms = {}, gs = {};
function Pv(e) {
  return Aa.call(gs, e) ? !0 : Aa.call(ms, e) ? !1 : _v.test(e) ? gs[e] = !0 : (ms[e] = !0, !1);
}
function Iv(e, t, r, n) {
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
function kv(e, t, r, n) {
  if (t === null || typeof t > "u" || Iv(e, t, r, n)) return !0;
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
function Pe(e, t, r, n, i, o, a) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = n, this.attributeNamespace = i, this.mustUseProperty = r, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = a;
}
var he = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  he[e] = new Pe(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  he[t] = new Pe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  he[e] = new Pe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  he[e] = new Pe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  he[e] = new Pe(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  he[e] = new Pe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  he[e] = new Pe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  he[e] = new Pe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  he[e] = new Pe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var tl = /[\-:]([a-z])/g;
function rl(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    tl,
    rl
  );
  he[t] = new Pe(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(tl, rl);
  he[t] = new Pe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(tl, rl);
  he[t] = new Pe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  he[e] = new Pe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
he.xlinkHref = new Pe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  he[e] = new Pe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function nl(e, t, r, n) {
  var i = he.hasOwnProperty(t) ? he[t] : null;
  (i !== null ? i.type !== 0 : n || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (kv(t, r, i, n) && (r = null), n || i === null ? Pv(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r)) : i.mustUseProperty ? e[i.propertyName] = r === null ? i.type === 3 ? !1 : "" : r : (t = i.attributeName, n = i.attributeNamespace, r === null ? e.removeAttribute(t) : (i = i.type, r = i === 3 || i === 4 && r === !0 ? "" : "" + r, n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))));
}
var _t = Dv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ni = Symbol.for("react.element"), Dr = Symbol.for("react.portal"), _r = Symbol.for("react.fragment"), il = Symbol.for("react.strict_mode"), Ha = Symbol.for("react.profiler"), jf = Symbol.for("react.provider"), zf = Symbol.for("react.context"), ol = Symbol.for("react.forward_ref"), Fa = Symbol.for("react.suspense"), Ba = Symbol.for("react.suspense_list"), al = Symbol.for("react.memo"), kt = Symbol.for("react.lazy"), Gf = Symbol.for("react.offscreen"), ys = Symbol.iterator;
function un(e) {
  return e === null || typeof e != "object" ? null : (e = ys && e[ys] || e["@@iterator"], typeof e == "function" ? e : null);
}
var te = Object.assign, Ko;
function gn(e) {
  if (Ko === void 0) try {
    throw Error();
  } catch (r) {
    var t = r.stack.trim().match(/\n( *(at )?)/);
    Ko = t && t[1] || "";
  }
  return `
` + Ko + e;
}
var qo = !1;
function Jo(e, t) {
  if (!e || qo) return "";
  qo = !0;
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
`), a = i.length - 1, u = o.length - 1; 1 <= a && 0 <= u && i[a] !== o[u]; ) u--;
      for (; 1 <= a && 0 <= u; a--, u--) if (i[a] !== o[u]) {
        if (a !== 1 || u !== 1)
          do
            if (a--, u--, 0 > u || i[a] !== o[u]) {
              var l = `
` + i[a].replace(" at new ", " at ");
              return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l;
            }
          while (1 <= a && 0 <= u);
        break;
      }
    }
  } finally {
    qo = !1, Error.prepareStackTrace = r;
  }
  return (e = e ? e.displayName || e.name : "") ? gn(e) : "";
}
function Nv(e) {
  switch (e.tag) {
    case 5:
      return gn(e.type);
    case 16:
      return gn("Lazy");
    case 13:
      return gn("Suspense");
    case 19:
      return gn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Jo(e.type, !1), e;
    case 11:
      return e = Jo(e.type.render, !1), e;
    case 1:
      return e = Jo(e.type, !0), e;
    default:
      return "";
  }
}
function $a(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case _r:
      return "Fragment";
    case Dr:
      return "Portal";
    case Ha:
      return "Profiler";
    case il:
      return "StrictMode";
    case Fa:
      return "Suspense";
    case Ba:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case zf:
      return (e.displayName || "Context") + ".Consumer";
    case jf:
      return (e._context.displayName || "Context") + ".Provider";
    case ol:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case al:
      return t = e.displayName || null, t !== null ? t : $a(e.type) || "Memo";
    case kt:
      t = e._payload, e = e._init;
      try {
        return $a(e(t));
      } catch {
      }
  }
  return null;
}
function bv(e) {
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
      return $a(t);
    case 8:
      return t === il ? "StrictMode" : "Mode";
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
function Vt(e) {
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
function Vf(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Rv(e) {
  var t = Vf(e) ? "checked" : "value", r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), n = "" + e[t];
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
function ii(e) {
  e._valueTracker || (e._valueTracker = Rv(e));
}
function Wf(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var r = t.getValue(), n = "";
  return e && (n = Vf(e) ? e.checked ? "true" : "false" : e.value), e = n, e !== r ? (t.setValue(e), !0) : !1;
}
function Gi(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ua(e, t) {
  var r = t.checked;
  return te({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: r ?? e._wrapperState.initialChecked });
}
function Ss(e, t) {
  var r = t.defaultValue == null ? "" : t.defaultValue, n = t.checked != null ? t.checked : t.defaultChecked;
  r = Vt(t.value != null ? t.value : r), e._wrapperState = { initialChecked: n, initialValue: r, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Xf(e, t) {
  t = t.checked, t != null && nl(e, "checked", t, !1);
}
function ja(e, t) {
  Xf(e, t);
  var r = Vt(t.value), n = t.type;
  if (r != null) n === "number" ? (r === 0 && e.value === "" || e.value != r) && (e.value = "" + r) : e.value !== "" + r && (e.value = "" + r);
  else if (n === "submit" || n === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? za(e, t.type, r) : t.hasOwnProperty("defaultValue") && za(e, t.type, Vt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Es(e, t, r) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var n = t.type;
    if (!(n !== "submit" && n !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, r || t === e.value || (e.value = t), e.defaultValue = t;
  }
  r = e.name, r !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, r !== "" && (e.name = r);
}
function za(e, t, r) {
  (t !== "number" || Gi(e.ownerDocument) !== e) && (r == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
}
var yn = Array.isArray;
function Fr(e, t, r, n) {
  if (e = e.options, t) {
    t = {};
    for (var i = 0; i < r.length; i++) t["$" + r[i]] = !0;
    for (r = 0; r < e.length; r++) i = t.hasOwnProperty("$" + e[r].value), e[r].selected !== i && (e[r].selected = i), i && n && (e[r].defaultSelected = !0);
  } else {
    for (r = "" + Vt(r), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === r) {
        e[i].selected = !0, n && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ga(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(E(91));
  return te({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function ws(e, t) {
  var r = t.value;
  if (r == null) {
    if (r = t.children, t = t.defaultValue, r != null) {
      if (t != null) throw Error(E(92));
      if (yn(r)) {
        if (1 < r.length) throw Error(E(93));
        r = r[0];
      }
      t = r;
    }
    t == null && (t = ""), r = t;
  }
  e._wrapperState = { initialValue: Vt(r) };
}
function Qf(e, t) {
  var r = Vt(t.value), n = Vt(t.defaultValue);
  r != null && (r = "" + r, r !== e.value && (e.value = r), t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)), n != null && (e.defaultValue = "" + n);
}
function Ts(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Yf(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Va(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Yf(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var oi, Zf = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, r, n, i) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, r, n, i);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (oi = oi || document.createElement("div"), oi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = oi.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Rn(e, t) {
  if (t) {
    var r = e.firstChild;
    if (r && r === e.lastChild && r.nodeType === 3) {
      r.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var xn = {
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
}, Lv = ["Webkit", "ms", "Moz", "O"];
Object.keys(xn).forEach(function(e) {
  Lv.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), xn[t] = xn[e];
  });
});
function Kf(e, t, r) {
  return t == null || typeof t == "boolean" || t === "" ? "" : r || typeof t != "number" || t === 0 || xn.hasOwnProperty(e) && xn[e] ? ("" + t).trim() : t + "px";
}
function qf(e, t) {
  e = e.style;
  for (var r in t) if (t.hasOwnProperty(r)) {
    var n = r.indexOf("--") === 0, i = Kf(r, t[r], n);
    r === "float" && (r = "cssFloat"), n ? e.setProperty(r, i) : e[r] = i;
  }
}
var Mv = te({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Wa(e, t) {
  if (t) {
    if (Mv[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(E(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(E(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(E(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(E(62));
  }
}
function Xa(e, t) {
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
var Qa = null;
function ul(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Ya = null, Br = null, $r = null;
function xs(e) {
  if (e = qn(e)) {
    if (typeof Ya != "function") throw Error(E(280));
    var t = e.stateNode;
    t && (t = wo(t), Ya(e.stateNode, e.type, t));
  }
}
function Jf(e) {
  Br ? $r ? $r.push(e) : $r = [e] : Br = e;
}
function ed() {
  if (Br) {
    var e = Br, t = $r;
    if ($r = Br = null, xs(e), t) for (e = 0; e < t.length; e++) xs(t[e]);
  }
}
function td(e, t) {
  return e(t);
}
function rd() {
}
var ea = !1;
function nd(e, t, r) {
  if (ea) return e(t, r);
  ea = !0;
  try {
    return td(e, t, r);
  } finally {
    ea = !1, (Br !== null || $r !== null) && (rd(), ed());
  }
}
function Ln(e, t) {
  var r = e.stateNode;
  if (r === null) return null;
  var n = wo(r);
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
  if (r && typeof r != "function") throw Error(E(231, t, typeof r));
  return r;
}
var Za = !1;
if (xt) try {
  var ln = {};
  Object.defineProperty(ln, "passive", { get: function() {
    Za = !0;
  } }), window.addEventListener("test", ln, ln), window.removeEventListener("test", ln, ln);
} catch {
  Za = !1;
}
function Av(e, t, r, n, i, o, a, u, l) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(r, s);
  } catch (c) {
    this.onError(c);
  }
}
var Cn = !1, Vi = null, Wi = !1, Ka = null, Hv = { onError: function(e) {
  Cn = !0, Vi = e;
} };
function Fv(e, t, r, n, i, o, a, u, l) {
  Cn = !1, Vi = null, Av.apply(Hv, arguments);
}
function Bv(e, t, r, n, i, o, a, u, l) {
  if (Fv.apply(this, arguments), Cn) {
    if (Cn) {
      var s = Vi;
      Cn = !1, Vi = null;
    } else throw Error(E(198));
    Wi || (Wi = !0, Ka = s);
  }
}
function yr(e) {
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
function id(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Cs(e) {
  if (yr(e) !== e) throw Error(E(188));
}
function $v(e) {
  var t = e.alternate;
  if (!t) {
    if (t = yr(e), t === null) throw Error(E(188));
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
        if (o === r) return Cs(i), e;
        if (o === n) return Cs(i), t;
        o = o.sibling;
      }
      throw Error(E(188));
    }
    if (r.return !== n.return) r = i, n = o;
    else {
      for (var a = !1, u = i.child; u; ) {
        if (u === r) {
          a = !0, r = i, n = o;
          break;
        }
        if (u === n) {
          a = !0, n = i, r = o;
          break;
        }
        u = u.sibling;
      }
      if (!a) {
        for (u = o.child; u; ) {
          if (u === r) {
            a = !0, r = o, n = i;
            break;
          }
          if (u === n) {
            a = !0, n = o, r = i;
            break;
          }
          u = u.sibling;
        }
        if (!a) throw Error(E(189));
      }
    }
    if (r.alternate !== n) throw Error(E(190));
  }
  if (r.tag !== 3) throw Error(E(188));
  return r.stateNode.current === r ? e : t;
}
function od(e) {
  return e = $v(e), e !== null ? ad(e) : null;
}
function ad(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = ad(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var ud = He.unstable_scheduleCallback, Os = He.unstable_cancelCallback, Uv = He.unstable_shouldYield, jv = He.unstable_requestPaint, ne = He.unstable_now, zv = He.unstable_getCurrentPriorityLevel, ll = He.unstable_ImmediatePriority, ld = He.unstable_UserBlockingPriority, Xi = He.unstable_NormalPriority, Gv = He.unstable_LowPriority, sd = He.unstable_IdlePriority, go = null, ht = null;
function Vv(e) {
  if (ht && typeof ht.onCommitFiberRoot == "function") try {
    ht.onCommitFiberRoot(go, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var ot = Math.clz32 ? Math.clz32 : Qv, Wv = Math.log, Xv = Math.LN2;
function Qv(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Wv(e) / Xv | 0) | 0;
}
var ai = 64, ui = 4194304;
function Sn(e) {
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
function Qi(e, t) {
  var r = e.pendingLanes;
  if (r === 0) return 0;
  var n = 0, i = e.suspendedLanes, o = e.pingedLanes, a = r & 268435455;
  if (a !== 0) {
    var u = a & ~i;
    u !== 0 ? n = Sn(u) : (o &= a, o !== 0 && (n = Sn(o)));
  } else a = r & ~i, a !== 0 ? n = Sn(a) : o !== 0 && (n = Sn(o));
  if (n === 0) return 0;
  if (t !== 0 && t !== n && !(t & i) && (i = n & -n, o = t & -t, i >= o || i === 16 && (o & 4194240) !== 0)) return t;
  if (n & 4 && (n |= r & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= n; 0 < t; ) r = 31 - ot(t), i = 1 << r, n |= e[r], t &= ~i;
  return n;
}
function Yv(e, t) {
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
function Zv(e, t) {
  for (var r = e.suspendedLanes, n = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var a = 31 - ot(o), u = 1 << a, l = i[a];
    l === -1 ? (!(u & r) || u & n) && (i[a] = Yv(u, t)) : l <= t && (e.expiredLanes |= u), o &= ~u;
  }
}
function qa(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function cd() {
  var e = ai;
  return ai <<= 1, !(ai & 4194240) && (ai = 64), e;
}
function ta(e) {
  for (var t = [], r = 0; 31 > r; r++) t.push(e);
  return t;
}
function Zn(e, t, r) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - ot(t), e[t] = r;
}
function Kv(e, t) {
  var r = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var n = e.eventTimes;
  for (e = e.expirationTimes; 0 < r; ) {
    var i = 31 - ot(r), o = 1 << i;
    t[i] = 0, n[i] = -1, e[i] = -1, r &= ~o;
  }
}
function sl(e, t) {
  var r = e.entangledLanes |= t;
  for (e = e.entanglements; r; ) {
    var n = 31 - ot(r), i = 1 << n;
    i & t | e[n] & t && (e[n] |= t), r &= ~i;
  }
}
var W = 0;
function fd(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var dd, cl, hd, pd, vd, Ja = !1, li = [], Ht = null, Ft = null, Bt = null, Mn = /* @__PURE__ */ new Map(), An = /* @__PURE__ */ new Map(), Rt = [], qv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Ds(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Ht = null;
      break;
    case "dragenter":
    case "dragleave":
      Ft = null;
      break;
    case "mouseover":
    case "mouseout":
      Bt = null;
      break;
    case "pointerover":
    case "pointerout":
      Mn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      An.delete(t.pointerId);
  }
}
function sn(e, t, r, n, i, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: r, eventSystemFlags: n, nativeEvent: o, targetContainers: [i] }, t !== null && (t = qn(t), t !== null && cl(t)), e) : (e.eventSystemFlags |= n, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
}
function Jv(e, t, r, n, i) {
  switch (t) {
    case "focusin":
      return Ht = sn(Ht, e, t, r, n, i), !0;
    case "dragenter":
      return Ft = sn(Ft, e, t, r, n, i), !0;
    case "mouseover":
      return Bt = sn(Bt, e, t, r, n, i), !0;
    case "pointerover":
      var o = i.pointerId;
      return Mn.set(o, sn(Mn.get(o) || null, e, t, r, n, i)), !0;
    case "gotpointercapture":
      return o = i.pointerId, An.set(o, sn(An.get(o) || null, e, t, r, n, i)), !0;
  }
  return !1;
}
function md(e) {
  var t = or(e.target);
  if (t !== null) {
    var r = yr(t);
    if (r !== null) {
      if (t = r.tag, t === 13) {
        if (t = id(r), t !== null) {
          e.blockedOn = t, vd(e.priority, function() {
            hd(r);
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
function Pi(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var r = eu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (r === null) {
      r = e.nativeEvent;
      var n = new r.constructor(r.type, r);
      Qa = n, r.target.dispatchEvent(n), Qa = null;
    } else return t = qn(r), t !== null && cl(t), e.blockedOn = r, !1;
    t.shift();
  }
  return !0;
}
function _s(e, t, r) {
  Pi(e) && r.delete(t);
}
function em() {
  Ja = !1, Ht !== null && Pi(Ht) && (Ht = null), Ft !== null && Pi(Ft) && (Ft = null), Bt !== null && Pi(Bt) && (Bt = null), Mn.forEach(_s), An.forEach(_s);
}
function cn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Ja || (Ja = !0, He.unstable_scheduleCallback(He.unstable_NormalPriority, em)));
}
function Hn(e) {
  function t(i) {
    return cn(i, e);
  }
  if (0 < li.length) {
    cn(li[0], e);
    for (var r = 1; r < li.length; r++) {
      var n = li[r];
      n.blockedOn === e && (n.blockedOn = null);
    }
  }
  for (Ht !== null && cn(Ht, e), Ft !== null && cn(Ft, e), Bt !== null && cn(Bt, e), Mn.forEach(t), An.forEach(t), r = 0; r < Rt.length; r++) n = Rt[r], n.blockedOn === e && (n.blockedOn = null);
  for (; 0 < Rt.length && (r = Rt[0], r.blockedOn === null); ) md(r), r.blockedOn === null && Rt.shift();
}
var Ur = _t.ReactCurrentBatchConfig, Yi = !0;
function tm(e, t, r, n) {
  var i = W, o = Ur.transition;
  Ur.transition = null;
  try {
    W = 1, fl(e, t, r, n);
  } finally {
    W = i, Ur.transition = o;
  }
}
function rm(e, t, r, n) {
  var i = W, o = Ur.transition;
  Ur.transition = null;
  try {
    W = 4, fl(e, t, r, n);
  } finally {
    W = i, Ur.transition = o;
  }
}
function fl(e, t, r, n) {
  if (Yi) {
    var i = eu(e, t, r, n);
    if (i === null) fa(e, t, n, Zi, r), Ds(e, n);
    else if (Jv(i, e, t, r, n)) n.stopPropagation();
    else if (Ds(e, n), t & 4 && -1 < qv.indexOf(e)) {
      for (; i !== null; ) {
        var o = qn(i);
        if (o !== null && dd(o), o = eu(e, t, r, n), o === null && fa(e, t, n, Zi, r), o === i) break;
        i = o;
      }
      i !== null && n.stopPropagation();
    } else fa(e, t, n, null, r);
  }
}
var Zi = null;
function eu(e, t, r, n) {
  if (Zi = null, e = ul(n), e = or(e), e !== null) if (t = yr(e), t === null) e = null;
  else if (r = t.tag, r === 13) {
    if (e = id(t), e !== null) return e;
    e = null;
  } else if (r === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Zi = e, null;
}
function gd(e) {
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
      switch (zv()) {
        case ll:
          return 1;
        case ld:
          return 4;
        case Xi:
        case Gv:
          return 16;
        case sd:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Mt = null, dl = null, Ii = null;
function yd() {
  if (Ii) return Ii;
  var e, t = dl, r = t.length, n, i = "value" in Mt ? Mt.value : Mt.textContent, o = i.length;
  for (e = 0; e < r && t[e] === i[e]; e++) ;
  var a = r - e;
  for (n = 1; n <= a && t[r - n] === i[o - n]; n++) ;
  return Ii = i.slice(e, 1 < n ? 1 - n : void 0);
}
function ki(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function si() {
  return !0;
}
function Ps() {
  return !1;
}
function $e(e) {
  function t(r, n, i, o, a) {
    this._reactName = r, this._targetInst = i, this.type = n, this.nativeEvent = o, this.target = a, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (r = e[u], this[u] = r ? r(o) : o[u]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? si : Ps, this.isPropagationStopped = Ps, this;
  }
  return te(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var r = this.nativeEvent;
    r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = !1), this.isDefaultPrevented = si);
  }, stopPropagation: function() {
    var r = this.nativeEvent;
    r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0), this.isPropagationStopped = si);
  }, persist: function() {
  }, isPersistent: si }), t;
}
var tn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, hl = $e(tn), Kn = te({}, tn, { view: 0, detail: 0 }), nm = $e(Kn), ra, na, fn, yo = te({}, Kn, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: pl, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== fn && (fn && e.type === "mousemove" ? (ra = e.screenX - fn.screenX, na = e.screenY - fn.screenY) : na = ra = 0, fn = e), ra);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : na;
} }), Is = $e(yo), im = te({}, yo, { dataTransfer: 0 }), om = $e(im), am = te({}, Kn, { relatedTarget: 0 }), ia = $e(am), um = te({}, tn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), lm = $e(um), sm = te({}, tn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), cm = $e(sm), fm = te({}, tn, { data: 0 }), ks = $e(fm), dm = {
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
}, hm = {
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
}, pm = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function vm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = pm[e]) ? !!t[e] : !1;
}
function pl() {
  return vm;
}
var mm = te({}, Kn, { key: function(e) {
  if (e.key) {
    var t = dm[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = ki(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? hm[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: pl, charCode: function(e) {
  return e.type === "keypress" ? ki(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? ki(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), gm = $e(mm), ym = te({}, yo, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ns = $e(ym), Sm = te({}, Kn, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: pl }), Em = $e(Sm), wm = te({}, tn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Tm = $e(wm), xm = te({}, yo, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Cm = $e(xm), Om = [9, 13, 27, 32], vl = xt && "CompositionEvent" in window, On = null;
xt && "documentMode" in document && (On = document.documentMode);
var Dm = xt && "TextEvent" in window && !On, Sd = xt && (!vl || On && 8 < On && 11 >= On), bs = " ", Rs = !1;
function Ed(e, t) {
  switch (e) {
    case "keyup":
      return Om.indexOf(t.keyCode) !== -1;
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
function wd(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Pr = !1;
function _m(e, t) {
  switch (e) {
    case "compositionend":
      return wd(t);
    case "keypress":
      return t.which !== 32 ? null : (Rs = !0, bs);
    case "textInput":
      return e = t.data, e === bs && Rs ? null : e;
    default:
      return null;
  }
}
function Pm(e, t) {
  if (Pr) return e === "compositionend" || !vl && Ed(e, t) ? (e = yd(), Ii = dl = Mt = null, Pr = !1, e) : null;
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
      return Sd && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Im = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Ls(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Im[e.type] : t === "textarea";
}
function Td(e, t, r, n) {
  Jf(n), t = Ki(t, "onChange"), 0 < t.length && (r = new hl("onChange", "change", null, r, n), e.push({ event: r, listeners: t }));
}
var Dn = null, Fn = null;
function km(e) {
  Rd(e, 0);
}
function So(e) {
  var t = Nr(e);
  if (Wf(t)) return e;
}
function Nm(e, t) {
  if (e === "change") return t;
}
var xd = !1;
if (xt) {
  var oa;
  if (xt) {
    var aa = "oninput" in document;
    if (!aa) {
      var Ms = document.createElement("div");
      Ms.setAttribute("oninput", "return;"), aa = typeof Ms.oninput == "function";
    }
    oa = aa;
  } else oa = !1;
  xd = oa && (!document.documentMode || 9 < document.documentMode);
}
function As() {
  Dn && (Dn.detachEvent("onpropertychange", Cd), Fn = Dn = null);
}
function Cd(e) {
  if (e.propertyName === "value" && So(Fn)) {
    var t = [];
    Td(t, Fn, e, ul(e)), nd(km, t);
  }
}
function bm(e, t, r) {
  e === "focusin" ? (As(), Dn = t, Fn = r, Dn.attachEvent("onpropertychange", Cd)) : e === "focusout" && As();
}
function Rm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return So(Fn);
}
function Lm(e, t) {
  if (e === "click") return So(t);
}
function Mm(e, t) {
  if (e === "input" || e === "change") return So(t);
}
function Am(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var ut = typeof Object.is == "function" ? Object.is : Am;
function Bn(e, t) {
  if (ut(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (n = 0; n < r.length; n++) {
    var i = r[n];
    if (!Aa.call(t, i) || !ut(e[i], t[i])) return !1;
  }
  return !0;
}
function Hs(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Fs(e, t) {
  var r = Hs(e);
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
    r = Hs(r);
  }
}
function Od(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Od(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Dd() {
  for (var e = window, t = Gi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var r = typeof t.contentWindow.location.href == "string";
    } catch {
      r = !1;
    }
    if (r) e = t.contentWindow;
    else break;
    t = Gi(e.document);
  }
  return t;
}
function ml(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Hm(e) {
  var t = Dd(), r = e.focusedElem, n = e.selectionRange;
  if (t !== r && r && r.ownerDocument && Od(r.ownerDocument.documentElement, r)) {
    if (n !== null && ml(r)) {
      if (t = n.start, e = n.end, e === void 0 && (e = t), "selectionStart" in r) r.selectionStart = t, r.selectionEnd = Math.min(e, r.value.length);
      else if (e = (t = r.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var i = r.textContent.length, o = Math.min(n.start, i);
        n = n.end === void 0 ? o : Math.min(n.end, i), !e.extend && o > n && (i = n, n = o, o = i), i = Fs(r, o);
        var a = Fs(
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
var Fm = xt && "documentMode" in document && 11 >= document.documentMode, Ir = null, tu = null, _n = null, ru = !1;
function Bs(e, t, r) {
  var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
  ru || Ir == null || Ir !== Gi(n) || (n = Ir, "selectionStart" in n && ml(n) ? n = { start: n.selectionStart, end: n.selectionEnd } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = { anchorNode: n.anchorNode, anchorOffset: n.anchorOffset, focusNode: n.focusNode, focusOffset: n.focusOffset }), _n && Bn(_n, n) || (_n = n, n = Ki(tu, "onSelect"), 0 < n.length && (t = new hl("onSelect", "select", null, t, r), e.push({ event: t, listeners: n }), t.target = Ir)));
}
function ci(e, t) {
  var r = {};
  return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit" + e] = "webkit" + t, r["Moz" + e] = "moz" + t, r;
}
var kr = { animationend: ci("Animation", "AnimationEnd"), animationiteration: ci("Animation", "AnimationIteration"), animationstart: ci("Animation", "AnimationStart"), transitionend: ci("Transition", "TransitionEnd") }, ua = {}, _d = {};
xt && (_d = document.createElement("div").style, "AnimationEvent" in window || (delete kr.animationend.animation, delete kr.animationiteration.animation, delete kr.animationstart.animation), "TransitionEvent" in window || delete kr.transitionend.transition);
function Eo(e) {
  if (ua[e]) return ua[e];
  if (!kr[e]) return e;
  var t = kr[e], r;
  for (r in t) if (t.hasOwnProperty(r) && r in _d) return ua[e] = t[r];
  return e;
}
var Pd = Eo("animationend"), Id = Eo("animationiteration"), kd = Eo("animationstart"), Nd = Eo("transitionend"), bd = /* @__PURE__ */ new Map(), $s = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Xt(e, t) {
  bd.set(e, t), gr(t, [e]);
}
for (var la = 0; la < $s.length; la++) {
  var sa = $s[la], Bm = sa.toLowerCase(), $m = sa[0].toUpperCase() + sa.slice(1);
  Xt(Bm, "on" + $m);
}
Xt(Pd, "onAnimationEnd");
Xt(Id, "onAnimationIteration");
Xt(kd, "onAnimationStart");
Xt("dblclick", "onDoubleClick");
Xt("focusin", "onFocus");
Xt("focusout", "onBlur");
Xt(Nd, "onTransitionEnd");
Gr("onMouseEnter", ["mouseout", "mouseover"]);
Gr("onMouseLeave", ["mouseout", "mouseover"]);
Gr("onPointerEnter", ["pointerout", "pointerover"]);
Gr("onPointerLeave", ["pointerout", "pointerover"]);
gr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
gr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
gr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
gr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
gr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
gr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var En = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Um = new Set("cancel close invalid load scroll toggle".split(" ").concat(En));
function Us(e, t, r) {
  var n = e.type || "unknown-event";
  e.currentTarget = r, Bv(n, t, void 0, e), e.currentTarget = null;
}
function Rd(e, t) {
  t = (t & 4) !== 0;
  for (var r = 0; r < e.length; r++) {
    var n = e[r], i = n.event;
    n = n.listeners;
    e: {
      var o = void 0;
      if (t) for (var a = n.length - 1; 0 <= a; a--) {
        var u = n[a], l = u.instance, s = u.currentTarget;
        if (u = u.listener, l !== o && i.isPropagationStopped()) break e;
        Us(i, u, s), o = l;
      }
      else for (a = 0; a < n.length; a++) {
        if (u = n[a], l = u.instance, s = u.currentTarget, u = u.listener, l !== o && i.isPropagationStopped()) break e;
        Us(i, u, s), o = l;
      }
    }
  }
  if (Wi) throw e = Ka, Wi = !1, Ka = null, e;
}
function Y(e, t) {
  var r = t[uu];
  r === void 0 && (r = t[uu] = /* @__PURE__ */ new Set());
  var n = e + "__bubble";
  r.has(n) || (Ld(t, e, 2, !1), r.add(n));
}
function ca(e, t, r) {
  var n = 0;
  t && (n |= 4), Ld(r, e, n, t);
}
var fi = "_reactListening" + Math.random().toString(36).slice(2);
function $n(e) {
  if (!e[fi]) {
    e[fi] = !0, Uf.forEach(function(r) {
      r !== "selectionchange" && (Um.has(r) || ca(r, !1, e), ca(r, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[fi] || (t[fi] = !0, ca("selectionchange", !1, t));
  }
}
function Ld(e, t, r, n) {
  switch (gd(t)) {
    case 1:
      var i = tm;
      break;
    case 4:
      i = rm;
      break;
    default:
      i = fl;
  }
  r = i.bind(null, t, r, e), i = void 0, !Za || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), n ? i !== void 0 ? e.addEventListener(t, r, { capture: !0, passive: i }) : e.addEventListener(t, r, !0) : i !== void 0 ? e.addEventListener(t, r, { passive: i }) : e.addEventListener(t, r, !1);
}
function fa(e, t, r, n, i) {
  var o = n;
  if (!(t & 1) && !(t & 2) && n !== null) e: for (; ; ) {
    if (n === null) return;
    var a = n.tag;
    if (a === 3 || a === 4) {
      var u = n.stateNode.containerInfo;
      if (u === i || u.nodeType === 8 && u.parentNode === i) break;
      if (a === 4) for (a = n.return; a !== null; ) {
        var l = a.tag;
        if ((l === 3 || l === 4) && (l = a.stateNode.containerInfo, l === i || l.nodeType === 8 && l.parentNode === i)) return;
        a = a.return;
      }
      for (; u !== null; ) {
        if (a = or(u), a === null) return;
        if (l = a.tag, l === 5 || l === 6) {
          n = o = a;
          continue e;
        }
        u = u.parentNode;
      }
    }
    n = n.return;
  }
  nd(function() {
    var s = o, c = ul(r), h = [];
    e: {
      var f = bd.get(e);
      if (f !== void 0) {
        var m = hl, S = e;
        switch (e) {
          case "keypress":
            if (ki(r) === 0) break e;
          case "keydown":
          case "keyup":
            m = gm;
            break;
          case "focusin":
            S = "focus", m = ia;
            break;
          case "focusout":
            S = "blur", m = ia;
            break;
          case "beforeblur":
          case "afterblur":
            m = ia;
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
            m = Is;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            m = om;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            m = Em;
            break;
          case Pd:
          case Id:
          case kd:
            m = lm;
            break;
          case Nd:
            m = Tm;
            break;
          case "scroll":
            m = nm;
            break;
          case "wheel":
            m = Cm;
            break;
          case "copy":
          case "cut":
          case "paste":
            m = cm;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            m = Ns;
        }
        var g = (t & 4) !== 0, O = !g && e === "scroll", p = g ? f !== null ? f + "Capture" : null : f;
        g = [];
        for (var d = s, v; d !== null; ) {
          v = d;
          var y = v.stateNode;
          if (v.tag === 5 && y !== null && (v = y, p !== null && (y = Ln(d, p), y != null && g.push(Un(d, y, v)))), O) break;
          d = d.return;
        }
        0 < g.length && (f = new m(f, S, null, r, c), h.push({ event: f, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (f = e === "mouseover" || e === "pointerover", m = e === "mouseout" || e === "pointerout", f && r !== Qa && (S = r.relatedTarget || r.fromElement) && (or(S) || S[Ct])) break e;
        if ((m || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window, m ? (S = r.relatedTarget || r.toElement, m = s, S = S ? or(S) : null, S !== null && (O = yr(S), S !== O || S.tag !== 5 && S.tag !== 6) && (S = null)) : (m = null, S = s), m !== S)) {
          if (g = Is, y = "onMouseLeave", p = "onMouseEnter", d = "mouse", (e === "pointerout" || e === "pointerover") && (g = Ns, y = "onPointerLeave", p = "onPointerEnter", d = "pointer"), O = m == null ? f : Nr(m), v = S == null ? f : Nr(S), f = new g(y, d + "leave", m, r, c), f.target = O, f.relatedTarget = v, y = null, or(c) === s && (g = new g(p, d + "enter", S, r, c), g.target = v, g.relatedTarget = O, y = g), O = y, m && S) t: {
            for (g = m, p = S, d = 0, v = g; v; v = Tr(v)) d++;
            for (v = 0, y = p; y; y = Tr(y)) v++;
            for (; 0 < d - v; ) g = Tr(g), d--;
            for (; 0 < v - d; ) p = Tr(p), v--;
            for (; d--; ) {
              if (g === p || p !== null && g === p.alternate) break t;
              g = Tr(g), p = Tr(p);
            }
            g = null;
          }
          else g = null;
          m !== null && js(h, f, m, g, !1), S !== null && O !== null && js(h, O, S, g, !0);
        }
      }
      e: {
        if (f = s ? Nr(s) : window, m = f.nodeName && f.nodeName.toLowerCase(), m === "select" || m === "input" && f.type === "file") var T = Nm;
        else if (Ls(f)) if (xd) T = Mm;
        else {
          T = Rm;
          var x = bm;
        }
        else (m = f.nodeName) && m.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (T = Lm);
        if (T && (T = T(e, s))) {
          Td(h, T, r, c);
          break e;
        }
        x && x(e, f, s), e === "focusout" && (x = f._wrapperState) && x.controlled && f.type === "number" && za(f, "number", f.value);
      }
      switch (x = s ? Nr(s) : window, e) {
        case "focusin":
          (Ls(x) || x.contentEditable === "true") && (Ir = x, tu = s, _n = null);
          break;
        case "focusout":
          _n = tu = Ir = null;
          break;
        case "mousedown":
          ru = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ru = !1, Bs(h, r, c);
          break;
        case "selectionchange":
          if (Fm) break;
        case "keydown":
        case "keyup":
          Bs(h, r, c);
      }
      var C;
      if (vl) e: {
        switch (e) {
          case "compositionstart":
            var D = "onCompositionStart";
            break e;
          case "compositionend":
            D = "onCompositionEnd";
            break e;
          case "compositionupdate":
            D = "onCompositionUpdate";
            break e;
        }
        D = void 0;
      }
      else Pr ? Ed(e, r) && (D = "onCompositionEnd") : e === "keydown" && r.keyCode === 229 && (D = "onCompositionStart");
      D && (Sd && r.locale !== "ko" && (Pr || D !== "onCompositionStart" ? D === "onCompositionEnd" && Pr && (C = yd()) : (Mt = c, dl = "value" in Mt ? Mt.value : Mt.textContent, Pr = !0)), x = Ki(s, D), 0 < x.length && (D = new ks(D, e, null, r, c), h.push({ event: D, listeners: x }), C ? D.data = C : (C = wd(r), C !== null && (D.data = C)))), (C = Dm ? _m(e, r) : Pm(e, r)) && (s = Ki(s, "onBeforeInput"), 0 < s.length && (c = new ks("onBeforeInput", "beforeinput", null, r, c), h.push({ event: c, listeners: s }), c.data = C));
    }
    Rd(h, t);
  });
}
function Un(e, t, r) {
  return { instance: e, listener: t, currentTarget: r };
}
function Ki(e, t) {
  for (var r = t + "Capture", n = []; e !== null; ) {
    var i = e, o = i.stateNode;
    i.tag === 5 && o !== null && (i = o, o = Ln(e, r), o != null && n.unshift(Un(e, o, i)), o = Ln(e, t), o != null && n.push(Un(e, o, i))), e = e.return;
  }
  return n;
}
function Tr(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function js(e, t, r, n, i) {
  for (var o = t._reactName, a = []; r !== null && r !== n; ) {
    var u = r, l = u.alternate, s = u.stateNode;
    if (l !== null && l === n) break;
    u.tag === 5 && s !== null && (u = s, i ? (l = Ln(r, o), l != null && a.unshift(Un(r, l, u))) : i || (l = Ln(r, o), l != null && a.push(Un(r, l, u)))), r = r.return;
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var jm = /\r\n?/g, zm = /\u0000|\uFFFD/g;
function zs(e) {
  return (typeof e == "string" ? e : "" + e).replace(jm, `
`).replace(zm, "");
}
function di(e, t, r) {
  if (t = zs(t), zs(e) !== t && r) throw Error(E(425));
}
function qi() {
}
var nu = null, iu = null;
function ou(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var au = typeof setTimeout == "function" ? setTimeout : void 0, Gm = typeof clearTimeout == "function" ? clearTimeout : void 0, Gs = typeof Promise == "function" ? Promise : void 0, Vm = typeof queueMicrotask == "function" ? queueMicrotask : typeof Gs < "u" ? function(e) {
  return Gs.resolve(null).then(e).catch(Wm);
} : au;
function Wm(e) {
  setTimeout(function() {
    throw e;
  });
}
function da(e, t) {
  var r = t, n = 0;
  do {
    var i = r.nextSibling;
    if (e.removeChild(r), i && i.nodeType === 8) if (r = i.data, r === "/$") {
      if (n === 0) {
        e.removeChild(i), Hn(t);
        return;
      }
      n--;
    } else r !== "$" && r !== "$?" && r !== "$!" || n++;
    r = i;
  } while (r);
  Hn(t);
}
function $t(e) {
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
function Vs(e) {
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
var rn = Math.random().toString(36).slice(2), dt = "__reactFiber$" + rn, jn = "__reactProps$" + rn, Ct = "__reactContainer$" + rn, uu = "__reactEvents$" + rn, Xm = "__reactListeners$" + rn, Qm = "__reactHandles$" + rn;
function or(e) {
  var t = e[dt];
  if (t) return t;
  for (var r = e.parentNode; r; ) {
    if (t = r[Ct] || r[dt]) {
      if (r = t.alternate, t.child !== null || r !== null && r.child !== null) for (e = Vs(e); e !== null; ) {
        if (r = e[dt]) return r;
        e = Vs(e);
      }
      return t;
    }
    e = r, r = e.parentNode;
  }
  return null;
}
function qn(e) {
  return e = e[dt] || e[Ct], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Nr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(E(33));
}
function wo(e) {
  return e[jn] || null;
}
var lu = [], br = -1;
function Qt(e) {
  return { current: e };
}
function K(e) {
  0 > br || (e.current = lu[br], lu[br] = null, br--);
}
function Q(e, t) {
  br++, lu[br] = e.current, e.current = t;
}
var Wt = {}, ye = Qt(Wt), Ne = Qt(!1), cr = Wt;
function Vr(e, t) {
  var r = e.type.contextTypes;
  if (!r) return Wt;
  var n = e.stateNode;
  if (n && n.__reactInternalMemoizedUnmaskedChildContext === t) return n.__reactInternalMemoizedMaskedChildContext;
  var i = {}, o;
  for (o in r) i[o] = t[o];
  return n && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i;
}
function be(e) {
  return e = e.childContextTypes, e != null;
}
function Ji() {
  K(Ne), K(ye);
}
function Ws(e, t, r) {
  if (ye.current !== Wt) throw Error(E(168));
  Q(ye, t), Q(Ne, r);
}
function Md(e, t, r) {
  var n = e.stateNode;
  if (t = t.childContextTypes, typeof n.getChildContext != "function") return r;
  n = n.getChildContext();
  for (var i in n) if (!(i in t)) throw Error(E(108, bv(e) || "Unknown", i));
  return te({}, r, n);
}
function eo(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Wt, cr = ye.current, Q(ye, e), Q(Ne, Ne.current), !0;
}
function Xs(e, t, r) {
  var n = e.stateNode;
  if (!n) throw Error(E(169));
  r ? (e = Md(e, t, cr), n.__reactInternalMemoizedMergedChildContext = e, K(Ne), K(ye), Q(ye, e)) : K(Ne), Q(Ne, r);
}
var St = null, To = !1, ha = !1;
function Ad(e) {
  St === null ? St = [e] : St.push(e);
}
function Ym(e) {
  To = !0, Ad(e);
}
function Yt() {
  if (!ha && St !== null) {
    ha = !0;
    var e = 0, t = W;
    try {
      var r = St;
      for (W = 1; e < r.length; e++) {
        var n = r[e];
        do
          n = n(!0);
        while (n !== null);
      }
      St = null, To = !1;
    } catch (i) {
      throw St !== null && (St = St.slice(e + 1)), ud(ll, Yt), i;
    } finally {
      W = t, ha = !1;
    }
  }
  return null;
}
var Rr = [], Lr = 0, to = null, ro = 0, Ge = [], Ve = 0, fr = null, Et = 1, wt = "";
function tr(e, t) {
  Rr[Lr++] = ro, Rr[Lr++] = to, to = e, ro = t;
}
function Hd(e, t, r) {
  Ge[Ve++] = Et, Ge[Ve++] = wt, Ge[Ve++] = fr, fr = e;
  var n = Et;
  e = wt;
  var i = 32 - ot(n) - 1;
  n &= ~(1 << i), r += 1;
  var o = 32 - ot(t) + i;
  if (30 < o) {
    var a = i - i % 5;
    o = (n & (1 << a) - 1).toString(32), n >>= a, i -= a, Et = 1 << 32 - ot(t) + i | r << i | n, wt = o + e;
  } else Et = 1 << o | r << i | n, wt = e;
}
function gl(e) {
  e.return !== null && (tr(e, 1), Hd(e, 1, 0));
}
function yl(e) {
  for (; e === to; ) to = Rr[--Lr], Rr[Lr] = null, ro = Rr[--Lr], Rr[Lr] = null;
  for (; e === fr; ) fr = Ge[--Ve], Ge[Ve] = null, wt = Ge[--Ve], Ge[Ve] = null, Et = Ge[--Ve], Ge[Ve] = null;
}
var Ae = null, Me = null, q = !1, it = null;
function Fd(e, t) {
  var r = Xe(5, null, null, 0);
  r.elementType = "DELETED", r.stateNode = t, r.return = e, t = e.deletions, t === null ? (e.deletions = [r], e.flags |= 16) : t.push(r);
}
function Qs(e, t) {
  switch (e.tag) {
    case 5:
      var r = e.type;
      return t = t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ae = e, Me = $t(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ae = e, Me = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (r = fr !== null ? { id: Et, overflow: wt } : null, e.memoizedState = { dehydrated: t, treeContext: r, retryLane: 1073741824 }, r = Xe(18, null, null, 0), r.stateNode = t, r.return = e, e.child = r, Ae = e, Me = null, !0) : !1;
    default:
      return !1;
  }
}
function su(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function cu(e) {
  if (q) {
    var t = Me;
    if (t) {
      var r = t;
      if (!Qs(e, t)) {
        if (su(e)) throw Error(E(418));
        t = $t(r.nextSibling);
        var n = Ae;
        t && Qs(e, t) ? Fd(n, r) : (e.flags = e.flags & -4097 | 2, q = !1, Ae = e);
      }
    } else {
      if (su(e)) throw Error(E(418));
      e.flags = e.flags & -4097 | 2, q = !1, Ae = e;
    }
  }
}
function Ys(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Ae = e;
}
function hi(e) {
  if (e !== Ae) return !1;
  if (!q) return Ys(e), q = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ou(e.type, e.memoizedProps)), t && (t = Me)) {
    if (su(e)) throw Bd(), Error(E(418));
    for (; t; ) Fd(e, t), t = $t(t.nextSibling);
  }
  if (Ys(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(E(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var r = e.data;
          if (r === "/$") {
            if (t === 0) {
              Me = $t(e.nextSibling);
              break e;
            }
            t--;
          } else r !== "$" && r !== "$!" && r !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Me = null;
    }
  } else Me = Ae ? $t(e.stateNode.nextSibling) : null;
  return !0;
}
function Bd() {
  for (var e = Me; e; ) e = $t(e.nextSibling);
}
function Wr() {
  Me = Ae = null, q = !1;
}
function Sl(e) {
  it === null ? it = [e] : it.push(e);
}
var Zm = _t.ReactCurrentBatchConfig;
function dn(e, t, r) {
  if (e = r.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (r._owner) {
      if (r = r._owner, r) {
        if (r.tag !== 1) throw Error(E(309));
        var n = r.stateNode;
      }
      if (!n) throw Error(E(147, e));
      var i = n, o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(a) {
        var u = i.refs;
        a === null ? delete u[o] : u[o] = a;
      }, t._stringRef = o, t);
    }
    if (typeof e != "string") throw Error(E(284));
    if (!r._owner) throw Error(E(290, e));
  }
  return e;
}
function pi(e, t) {
  throw e = Object.prototype.toString.call(t), Error(E(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Zs(e) {
  var t = e._init;
  return t(e._payload);
}
function $d(e) {
  function t(p, d) {
    if (e) {
      var v = p.deletions;
      v === null ? (p.deletions = [d], p.flags |= 16) : v.push(d);
    }
  }
  function r(p, d) {
    if (!e) return null;
    for (; d !== null; ) t(p, d), d = d.sibling;
    return null;
  }
  function n(p, d) {
    for (p = /* @__PURE__ */ new Map(); d !== null; ) d.key !== null ? p.set(d.key, d) : p.set(d.index, d), d = d.sibling;
    return p;
  }
  function i(p, d) {
    return p = Gt(p, d), p.index = 0, p.sibling = null, p;
  }
  function o(p, d, v) {
    return p.index = v, e ? (v = p.alternate, v !== null ? (v = v.index, v < d ? (p.flags |= 2, d) : v) : (p.flags |= 2, d)) : (p.flags |= 1048576, d);
  }
  function a(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function u(p, d, v, y) {
    return d === null || d.tag !== 6 ? (d = Ea(v, p.mode, y), d.return = p, d) : (d = i(d, v), d.return = p, d);
  }
  function l(p, d, v, y) {
    var T = v.type;
    return T === _r ? c(p, d, v.props.children, y, v.key) : d !== null && (d.elementType === T || typeof T == "object" && T !== null && T.$$typeof === kt && Zs(T) === d.type) ? (y = i(d, v.props), y.ref = dn(p, d, v), y.return = p, y) : (y = Hi(v.type, v.key, v.props, null, p.mode, y), y.ref = dn(p, d, v), y.return = p, y);
  }
  function s(p, d, v, y) {
    return d === null || d.tag !== 4 || d.stateNode.containerInfo !== v.containerInfo || d.stateNode.implementation !== v.implementation ? (d = wa(v, p.mode, y), d.return = p, d) : (d = i(d, v.children || []), d.return = p, d);
  }
  function c(p, d, v, y, T) {
    return d === null || d.tag !== 7 ? (d = sr(v, p.mode, y, T), d.return = p, d) : (d = i(d, v), d.return = p, d);
  }
  function h(p, d, v) {
    if (typeof d == "string" && d !== "" || typeof d == "number") return d = Ea("" + d, p.mode, v), d.return = p, d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case ni:
          return v = Hi(d.type, d.key, d.props, null, p.mode, v), v.ref = dn(p, null, d), v.return = p, v;
        case Dr:
          return d = wa(d, p.mode, v), d.return = p, d;
        case kt:
          var y = d._init;
          return h(p, y(d._payload), v);
      }
      if (yn(d) || un(d)) return d = sr(d, p.mode, v, null), d.return = p, d;
      pi(p, d);
    }
    return null;
  }
  function f(p, d, v, y) {
    var T = d !== null ? d.key : null;
    if (typeof v == "string" && v !== "" || typeof v == "number") return T !== null ? null : u(p, d, "" + v, y);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case ni:
          return v.key === T ? l(p, d, v, y) : null;
        case Dr:
          return v.key === T ? s(p, d, v, y) : null;
        case kt:
          return T = v._init, f(
            p,
            d,
            T(v._payload),
            y
          );
      }
      if (yn(v) || un(v)) return T !== null ? null : c(p, d, v, y, null);
      pi(p, v);
    }
    return null;
  }
  function m(p, d, v, y, T) {
    if (typeof y == "string" && y !== "" || typeof y == "number") return p = p.get(v) || null, u(d, p, "" + y, T);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case ni:
          return p = p.get(y.key === null ? v : y.key) || null, l(d, p, y, T);
        case Dr:
          return p = p.get(y.key === null ? v : y.key) || null, s(d, p, y, T);
        case kt:
          var x = y._init;
          return m(p, d, v, x(y._payload), T);
      }
      if (yn(y) || un(y)) return p = p.get(v) || null, c(d, p, y, T, null);
      pi(d, y);
    }
    return null;
  }
  function S(p, d, v, y) {
    for (var T = null, x = null, C = d, D = d = 0, G = null; C !== null && D < v.length; D++) {
      C.index > D ? (G = C, C = null) : G = C.sibling;
      var L = f(p, C, v[D], y);
      if (L === null) {
        C === null && (C = G);
        break;
      }
      e && C && L.alternate === null && t(p, C), d = o(L, d, D), x === null ? T = L : x.sibling = L, x = L, C = G;
    }
    if (D === v.length) return r(p, C), q && tr(p, D), T;
    if (C === null) {
      for (; D < v.length; D++) C = h(p, v[D], y), C !== null && (d = o(C, d, D), x === null ? T = C : x.sibling = C, x = C);
      return q && tr(p, D), T;
    }
    for (C = n(p, C); D < v.length; D++) G = m(C, p, D, v[D], y), G !== null && (e && G.alternate !== null && C.delete(G.key === null ? D : G.key), d = o(G, d, D), x === null ? T = G : x.sibling = G, x = G);
    return e && C.forEach(function(ue) {
      return t(p, ue);
    }), q && tr(p, D), T;
  }
  function g(p, d, v, y) {
    var T = un(v);
    if (typeof T != "function") throw Error(E(150));
    if (v = T.call(v), v == null) throw Error(E(151));
    for (var x = T = null, C = d, D = d = 0, G = null, L = v.next(); C !== null && !L.done; D++, L = v.next()) {
      C.index > D ? (G = C, C = null) : G = C.sibling;
      var ue = f(p, C, L.value, y);
      if (ue === null) {
        C === null && (C = G);
        break;
      }
      e && C && ue.alternate === null && t(p, C), d = o(ue, d, D), x === null ? T = ue : x.sibling = ue, x = ue, C = G;
    }
    if (L.done) return r(
      p,
      C
    ), q && tr(p, D), T;
    if (C === null) {
      for (; !L.done; D++, L = v.next()) L = h(p, L.value, y), L !== null && (d = o(L, d, D), x === null ? T = L : x.sibling = L, x = L);
      return q && tr(p, D), T;
    }
    for (C = n(p, C); !L.done; D++, L = v.next()) L = m(C, p, D, L.value, y), L !== null && (e && L.alternate !== null && C.delete(L.key === null ? D : L.key), d = o(L, d, D), x === null ? T = L : x.sibling = L, x = L);
    return e && C.forEach(function(et) {
      return t(p, et);
    }), q && tr(p, D), T;
  }
  function O(p, d, v, y) {
    if (typeof v == "object" && v !== null && v.type === _r && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case ni:
          e: {
            for (var T = v.key, x = d; x !== null; ) {
              if (x.key === T) {
                if (T = v.type, T === _r) {
                  if (x.tag === 7) {
                    r(p, x.sibling), d = i(x, v.props.children), d.return = p, p = d;
                    break e;
                  }
                } else if (x.elementType === T || typeof T == "object" && T !== null && T.$$typeof === kt && Zs(T) === x.type) {
                  r(p, x.sibling), d = i(x, v.props), d.ref = dn(p, x, v), d.return = p, p = d;
                  break e;
                }
                r(p, x);
                break;
              } else t(p, x);
              x = x.sibling;
            }
            v.type === _r ? (d = sr(v.props.children, p.mode, y, v.key), d.return = p, p = d) : (y = Hi(v.type, v.key, v.props, null, p.mode, y), y.ref = dn(p, d, v), y.return = p, p = y);
          }
          return a(p);
        case Dr:
          e: {
            for (x = v.key; d !== null; ) {
              if (d.key === x) if (d.tag === 4 && d.stateNode.containerInfo === v.containerInfo && d.stateNode.implementation === v.implementation) {
                r(p, d.sibling), d = i(d, v.children || []), d.return = p, p = d;
                break e;
              } else {
                r(p, d);
                break;
              }
              else t(p, d);
              d = d.sibling;
            }
            d = wa(v, p.mode, y), d.return = p, p = d;
          }
          return a(p);
        case kt:
          return x = v._init, O(p, d, x(v._payload), y);
      }
      if (yn(v)) return S(p, d, v, y);
      if (un(v)) return g(p, d, v, y);
      pi(p, v);
    }
    return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v, d !== null && d.tag === 6 ? (r(p, d.sibling), d = i(d, v), d.return = p, p = d) : (r(p, d), d = Ea(v, p.mode, y), d.return = p, p = d), a(p)) : r(p, d);
  }
  return O;
}
var Xr = $d(!0), Ud = $d(!1), no = Qt(null), io = null, Mr = null, El = null;
function wl() {
  El = Mr = io = null;
}
function Tl(e) {
  var t = no.current;
  K(no), e._currentValue = t;
}
function fu(e, t, r) {
  for (; e !== null; ) {
    var n = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, n !== null && (n.childLanes |= t)) : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t), e === r) break;
    e = e.return;
  }
}
function jr(e, t) {
  io = e, El = Mr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (ke = !0), e.firstContext = null);
}
function Ye(e) {
  var t = e._currentValue;
  if (El !== e) if (e = { context: e, memoizedValue: t, next: null }, Mr === null) {
    if (io === null) throw Error(E(308));
    Mr = e, io.dependencies = { lanes: 0, firstContext: e };
  } else Mr = Mr.next = e;
  return t;
}
var ar = null;
function xl(e) {
  ar === null ? ar = [e] : ar.push(e);
}
function jd(e, t, r, n) {
  var i = t.interleaved;
  return i === null ? (r.next = r, xl(t)) : (r.next = i.next, i.next = r), t.interleaved = r, Ot(e, n);
}
function Ot(e, t) {
  e.lanes |= t;
  var r = e.alternate;
  for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; ) e.childLanes |= t, r = e.alternate, r !== null && (r.childLanes |= t), r = e, e = e.return;
  return r.tag === 3 ? r.stateNode : null;
}
var Nt = !1;
function Cl(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function zd(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Tt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Ut(e, t, r) {
  var n = e.updateQueue;
  if (n === null) return null;
  if (n = n.shared, z & 2) {
    var i = n.pending;
    return i === null ? t.next = t : (t.next = i.next, i.next = t), n.pending = t, Ot(e, r);
  }
  return i = n.interleaved, i === null ? (t.next = t, xl(n)) : (t.next = i.next, i.next = t), n.interleaved = t, Ot(e, r);
}
function Ni(e, t, r) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (r & 4194240) !== 0)) {
    var n = t.lanes;
    n &= e.pendingLanes, r |= n, t.lanes = r, sl(e, r);
  }
}
function Ks(e, t) {
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
function oo(e, t, r, n) {
  var i = e.updateQueue;
  Nt = !1;
  var o = i.firstBaseUpdate, a = i.lastBaseUpdate, u = i.shared.pending;
  if (u !== null) {
    i.shared.pending = null;
    var l = u, s = l.next;
    l.next = null, a === null ? o = s : a.next = s, a = l;
    var c = e.alternate;
    c !== null && (c = c.updateQueue, u = c.lastBaseUpdate, u !== a && (u === null ? c.firstBaseUpdate = s : u.next = s, c.lastBaseUpdate = l));
  }
  if (o !== null) {
    var h = i.baseState;
    a = 0, c = s = l = null, u = o;
    do {
      var f = u.lane, m = u.eventTime;
      if ((n & f) === f) {
        c !== null && (c = c.next = {
          eventTime: m,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var S = e, g = u;
          switch (f = t, m = r, g.tag) {
            case 1:
              if (S = g.payload, typeof S == "function") {
                h = S.call(m, h, f);
                break e;
              }
              h = S;
              break e;
            case 3:
              S.flags = S.flags & -65537 | 128;
            case 0:
              if (S = g.payload, f = typeof S == "function" ? S.call(m, h, f) : S, f == null) break e;
              h = te({}, h, f);
              break e;
            case 2:
              Nt = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, f = i.effects, f === null ? i.effects = [u] : f.push(u));
      } else m = { eventTime: m, lane: f, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, c === null ? (s = c = m, l = h) : c = c.next = m, a |= f;
      if (u = u.next, u === null) {
        if (u = i.shared.pending, u === null) break;
        f = u, u = f.next, f.next = null, i.lastBaseUpdate = f, i.shared.pending = null;
      }
    } while (!0);
    if (c === null && (l = h), i.baseState = l, i.firstBaseUpdate = s, i.lastBaseUpdate = c, t = i.shared.interleaved, t !== null) {
      i = t;
      do
        a |= i.lane, i = i.next;
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    hr |= a, e.lanes = a, e.memoizedState = h;
  }
}
function qs(e, t, r) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var n = e[t], i = n.callback;
    if (i !== null) {
      if (n.callback = null, n = r, typeof i != "function") throw Error(E(191, i));
      i.call(n);
    }
  }
}
var Jn = {}, pt = Qt(Jn), zn = Qt(Jn), Gn = Qt(Jn);
function ur(e) {
  if (e === Jn) throw Error(E(174));
  return e;
}
function Ol(e, t) {
  switch (Q(Gn, t), Q(zn, e), Q(pt, Jn), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Va(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Va(t, e);
  }
  K(pt), Q(pt, t);
}
function Qr() {
  K(pt), K(zn), K(Gn);
}
function Gd(e) {
  ur(Gn.current);
  var t = ur(pt.current), r = Va(t, e.type);
  t !== r && (Q(zn, e), Q(pt, r));
}
function Dl(e) {
  zn.current === e && (K(pt), K(zn));
}
var J = Qt(0);
function ao(e) {
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
var pa = [];
function _l() {
  for (var e = 0; e < pa.length; e++) pa[e]._workInProgressVersionPrimary = null;
  pa.length = 0;
}
var bi = _t.ReactCurrentDispatcher, va = _t.ReactCurrentBatchConfig, dr = 0, ee = null, oe = null, le = null, uo = !1, Pn = !1, Vn = 0, Km = 0;
function pe() {
  throw Error(E(321));
}
function Pl(e, t) {
  if (t === null) return !1;
  for (var r = 0; r < t.length && r < e.length; r++) if (!ut(e[r], t[r])) return !1;
  return !0;
}
function Il(e, t, r, n, i, o) {
  if (dr = o, ee = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, bi.current = e === null || e.memoizedState === null ? tg : rg, e = r(n, i), Pn) {
    o = 0;
    do {
      if (Pn = !1, Vn = 0, 25 <= o) throw Error(E(301));
      o += 1, le = oe = null, t.updateQueue = null, bi.current = ng, e = r(n, i);
    } while (Pn);
  }
  if (bi.current = lo, t = oe !== null && oe.next !== null, dr = 0, le = oe = ee = null, uo = !1, t) throw Error(E(300));
  return e;
}
function kl() {
  var e = Vn !== 0;
  return Vn = 0, e;
}
function ft() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return le === null ? ee.memoizedState = le = e : le = le.next = e, le;
}
function Ze() {
  if (oe === null) {
    var e = ee.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = oe.next;
  var t = le === null ? ee.memoizedState : le.next;
  if (t !== null) le = t, oe = e;
  else {
    if (e === null) throw Error(E(310));
    oe = e, e = { memoizedState: oe.memoizedState, baseState: oe.baseState, baseQueue: oe.baseQueue, queue: oe.queue, next: null }, le === null ? ee.memoizedState = le = e : le = le.next = e;
  }
  return le;
}
function Wn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ma(e) {
  var t = Ze(), r = t.queue;
  if (r === null) throw Error(E(311));
  r.lastRenderedReducer = e;
  var n = oe, i = n.baseQueue, o = r.pending;
  if (o !== null) {
    if (i !== null) {
      var a = i.next;
      i.next = o.next, o.next = a;
    }
    n.baseQueue = i = o, r.pending = null;
  }
  if (i !== null) {
    o = i.next, n = n.baseState;
    var u = a = null, l = null, s = o;
    do {
      var c = s.lane;
      if ((dr & c) === c) l !== null && (l = l.next = { lane: 0, action: s.action, hasEagerState: s.hasEagerState, eagerState: s.eagerState, next: null }), n = s.hasEagerState ? s.eagerState : e(n, s.action);
      else {
        var h = {
          lane: c,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null
        };
        l === null ? (u = l = h, a = n) : l = l.next = h, ee.lanes |= c, hr |= c;
      }
      s = s.next;
    } while (s !== null && s !== o);
    l === null ? a = n : l.next = u, ut(n, t.memoizedState) || (ke = !0), t.memoizedState = n, t.baseState = a, t.baseQueue = l, r.lastRenderedState = n;
  }
  if (e = r.interleaved, e !== null) {
    i = e;
    do
      o = i.lane, ee.lanes |= o, hr |= o, i = i.next;
    while (i !== e);
  } else i === null && (r.lanes = 0);
  return [t.memoizedState, r.dispatch];
}
function ga(e) {
  var t = Ze(), r = t.queue;
  if (r === null) throw Error(E(311));
  r.lastRenderedReducer = e;
  var n = r.dispatch, i = r.pending, o = t.memoizedState;
  if (i !== null) {
    r.pending = null;
    var a = i = i.next;
    do
      o = e(o, a.action), a = a.next;
    while (a !== i);
    ut(o, t.memoizedState) || (ke = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), r.lastRenderedState = o;
  }
  return [o, n];
}
function Vd() {
}
function Wd(e, t) {
  var r = ee, n = Ze(), i = t(), o = !ut(n.memoizedState, i);
  if (o && (n.memoizedState = i, ke = !0), n = n.queue, Nl(Yd.bind(null, r, n, e), [e]), n.getSnapshot !== t || o || le !== null && le.memoizedState.tag & 1) {
    if (r.flags |= 2048, Xn(9, Qd.bind(null, r, n, i, t), void 0, null), se === null) throw Error(E(349));
    dr & 30 || Xd(r, t, i);
  }
  return i;
}
function Xd(e, t, r) {
  e.flags |= 16384, e = { getSnapshot: t, value: r }, t = ee.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ee.updateQueue = t, t.stores = [e]) : (r = t.stores, r === null ? t.stores = [e] : r.push(e));
}
function Qd(e, t, r, n) {
  t.value = r, t.getSnapshot = n, Zd(t) && Kd(e);
}
function Yd(e, t, r) {
  return r(function() {
    Zd(t) && Kd(e);
  });
}
function Zd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var r = t();
    return !ut(e, r);
  } catch {
    return !0;
  }
}
function Kd(e) {
  var t = Ot(e, 1);
  t !== null && at(t, e, 1, -1);
}
function Js(e) {
  var t = ft();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Wn, lastRenderedState: e }, t.queue = e, e = e.dispatch = eg.bind(null, ee, e), [t.memoizedState, e];
}
function Xn(e, t, r, n) {
  return e = { tag: e, create: t, destroy: r, deps: n, next: null }, t = ee.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ee.updateQueue = t, t.lastEffect = e.next = e) : (r = t.lastEffect, r === null ? t.lastEffect = e.next = e : (n = r.next, r.next = e, e.next = n, t.lastEffect = e)), e;
}
function qd() {
  return Ze().memoizedState;
}
function Ri(e, t, r, n) {
  var i = ft();
  ee.flags |= e, i.memoizedState = Xn(1 | t, r, void 0, n === void 0 ? null : n);
}
function xo(e, t, r, n) {
  var i = Ze();
  n = n === void 0 ? null : n;
  var o = void 0;
  if (oe !== null) {
    var a = oe.memoizedState;
    if (o = a.destroy, n !== null && Pl(n, a.deps)) {
      i.memoizedState = Xn(t, r, o, n);
      return;
    }
  }
  ee.flags |= e, i.memoizedState = Xn(1 | t, r, o, n);
}
function ec(e, t) {
  return Ri(8390656, 8, e, t);
}
function Nl(e, t) {
  return xo(2048, 8, e, t);
}
function Jd(e, t) {
  return xo(4, 2, e, t);
}
function eh(e, t) {
  return xo(4, 4, e, t);
}
function th(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function rh(e, t, r) {
  return r = r != null ? r.concat([e]) : null, xo(4, 4, th.bind(null, t, e), r);
}
function bl() {
}
function nh(e, t) {
  var r = Ze();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && Pl(t, n[1]) ? n[0] : (r.memoizedState = [e, t], e);
}
function ih(e, t) {
  var r = Ze();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && Pl(t, n[1]) ? n[0] : (e = e(), r.memoizedState = [e, t], e);
}
function oh(e, t, r) {
  return dr & 21 ? (ut(r, t) || (r = cd(), ee.lanes |= r, hr |= r, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, ke = !0), e.memoizedState = r);
}
function qm(e, t) {
  var r = W;
  W = r !== 0 && 4 > r ? r : 4, e(!0);
  var n = va.transition;
  va.transition = {};
  try {
    e(!1), t();
  } finally {
    W = r, va.transition = n;
  }
}
function ah() {
  return Ze().memoizedState;
}
function Jm(e, t, r) {
  var n = zt(e);
  if (r = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null }, uh(e)) lh(t, r);
  else if (r = jd(e, t, r, n), r !== null) {
    var i = De();
    at(r, e, n, i), sh(r, t, n);
  }
}
function eg(e, t, r) {
  var n = zt(e), i = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null };
  if (uh(e)) lh(t, i);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
      var a = t.lastRenderedState, u = o(a, r);
      if (i.hasEagerState = !0, i.eagerState = u, ut(u, a)) {
        var l = t.interleaved;
        l === null ? (i.next = i, xl(t)) : (i.next = l.next, l.next = i), t.interleaved = i;
        return;
      }
    } catch {
    } finally {
    }
    r = jd(e, t, i, n), r !== null && (i = De(), at(r, e, n, i), sh(r, t, n));
  }
}
function uh(e) {
  var t = e.alternate;
  return e === ee || t !== null && t === ee;
}
function lh(e, t) {
  Pn = uo = !0;
  var r = e.pending;
  r === null ? t.next = t : (t.next = r.next, r.next = t), e.pending = t;
}
function sh(e, t, r) {
  if (r & 4194240) {
    var n = t.lanes;
    n &= e.pendingLanes, r |= n, t.lanes = r, sl(e, r);
  }
}
var lo = { readContext: Ye, useCallback: pe, useContext: pe, useEffect: pe, useImperativeHandle: pe, useInsertionEffect: pe, useLayoutEffect: pe, useMemo: pe, useReducer: pe, useRef: pe, useState: pe, useDebugValue: pe, useDeferredValue: pe, useTransition: pe, useMutableSource: pe, useSyncExternalStore: pe, useId: pe, unstable_isNewReconciler: !1 }, tg = { readContext: Ye, useCallback: function(e, t) {
  return ft().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Ye, useEffect: ec, useImperativeHandle: function(e, t, r) {
  return r = r != null ? r.concat([e]) : null, Ri(
    4194308,
    4,
    th.bind(null, t, e),
    r
  );
}, useLayoutEffect: function(e, t) {
  return Ri(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Ri(4, 2, e, t);
}, useMemo: function(e, t) {
  var r = ft();
  return t = t === void 0 ? null : t, e = e(), r.memoizedState = [e, t], e;
}, useReducer: function(e, t, r) {
  var n = ft();
  return t = r !== void 0 ? r(t) : t, n.memoizedState = n.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, n.queue = e, e = e.dispatch = Jm.bind(null, ee, e), [n.memoizedState, e];
}, useRef: function(e) {
  var t = ft();
  return e = { current: e }, t.memoizedState = e;
}, useState: Js, useDebugValue: bl, useDeferredValue: function(e) {
  return ft().memoizedState = e;
}, useTransition: function() {
  var e = Js(!1), t = e[0];
  return e = qm.bind(null, e[1]), ft().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, r) {
  var n = ee, i = ft();
  if (q) {
    if (r === void 0) throw Error(E(407));
    r = r();
  } else {
    if (r = t(), se === null) throw Error(E(349));
    dr & 30 || Xd(n, t, r);
  }
  i.memoizedState = r;
  var o = { value: r, getSnapshot: t };
  return i.queue = o, ec(Yd.bind(
    null,
    n,
    o,
    e
  ), [e]), n.flags |= 2048, Xn(9, Qd.bind(null, n, o, r, t), void 0, null), r;
}, useId: function() {
  var e = ft(), t = se.identifierPrefix;
  if (q) {
    var r = wt, n = Et;
    r = (n & ~(1 << 32 - ot(n) - 1)).toString(32) + r, t = ":" + t + "R" + r, r = Vn++, 0 < r && (t += "H" + r.toString(32)), t += ":";
  } else r = Km++, t = ":" + t + "r" + r.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, rg = {
  readContext: Ye,
  useCallback: nh,
  useContext: Ye,
  useEffect: Nl,
  useImperativeHandle: rh,
  useInsertionEffect: Jd,
  useLayoutEffect: eh,
  useMemo: ih,
  useReducer: ma,
  useRef: qd,
  useState: function() {
    return ma(Wn);
  },
  useDebugValue: bl,
  useDeferredValue: function(e) {
    var t = Ze();
    return oh(t, oe.memoizedState, e);
  },
  useTransition: function() {
    var e = ma(Wn)[0], t = Ze().memoizedState;
    return [e, t];
  },
  useMutableSource: Vd,
  useSyncExternalStore: Wd,
  useId: ah,
  unstable_isNewReconciler: !1
}, ng = { readContext: Ye, useCallback: nh, useContext: Ye, useEffect: Nl, useImperativeHandle: rh, useInsertionEffect: Jd, useLayoutEffect: eh, useMemo: ih, useReducer: ga, useRef: qd, useState: function() {
  return ga(Wn);
}, useDebugValue: bl, useDeferredValue: function(e) {
  var t = Ze();
  return oe === null ? t.memoizedState = e : oh(t, oe.memoizedState, e);
}, useTransition: function() {
  var e = ga(Wn)[0], t = Ze().memoizedState;
  return [e, t];
}, useMutableSource: Vd, useSyncExternalStore: Wd, useId: ah, unstable_isNewReconciler: !1 };
function rt(e, t) {
  if (e && e.defaultProps) {
    t = te({}, t), e = e.defaultProps;
    for (var r in e) t[r] === void 0 && (t[r] = e[r]);
    return t;
  }
  return t;
}
function du(e, t, r, n) {
  t = e.memoizedState, r = r(n, t), r = r == null ? t : te({}, t, r), e.memoizedState = r, e.lanes === 0 && (e.updateQueue.baseState = r);
}
var Co = { isMounted: function(e) {
  return (e = e._reactInternals) ? yr(e) === e : !1;
}, enqueueSetState: function(e, t, r) {
  e = e._reactInternals;
  var n = De(), i = zt(e), o = Tt(n, i);
  o.payload = t, r != null && (o.callback = r), t = Ut(e, o, i), t !== null && (at(t, e, i, n), Ni(t, e, i));
}, enqueueReplaceState: function(e, t, r) {
  e = e._reactInternals;
  var n = De(), i = zt(e), o = Tt(n, i);
  o.tag = 1, o.payload = t, r != null && (o.callback = r), t = Ut(e, o, i), t !== null && (at(t, e, i, n), Ni(t, e, i));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var r = De(), n = zt(e), i = Tt(r, n);
  i.tag = 2, t != null && (i.callback = t), t = Ut(e, i, n), t !== null && (at(t, e, n, r), Ni(t, e, n));
} };
function tc(e, t, r, n, i, o, a) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, o, a) : t.prototype && t.prototype.isPureReactComponent ? !Bn(r, n) || !Bn(i, o) : !0;
}
function ch(e, t, r) {
  var n = !1, i = Wt, o = t.contextType;
  return typeof o == "object" && o !== null ? o = Ye(o) : (i = be(t) ? cr : ye.current, n = t.contextTypes, o = (n = n != null) ? Vr(e, i) : Wt), t = new t(r, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Co, e.stateNode = t, t._reactInternals = e, n && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function rc(e, t, r, n) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(r, n), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(r, n), t.state !== e && Co.enqueueReplaceState(t, t.state, null);
}
function hu(e, t, r, n) {
  var i = e.stateNode;
  i.props = r, i.state = e.memoizedState, i.refs = {}, Cl(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? i.context = Ye(o) : (o = be(t) ? cr : ye.current, i.context = Vr(e, o)), i.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (du(e, t, o, r), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && Co.enqueueReplaceState(i, i.state, null), oo(e, r, i, n), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Yr(e, t) {
  try {
    var r = "", n = t;
    do
      r += Nv(n), n = n.return;
    while (n);
    var i = r;
  } catch (o) {
    i = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function ya(e, t, r) {
  return { value: e, source: null, stack: r ?? null, digest: t ?? null };
}
function pu(e, t) {
  try {
    console.error(t.value);
  } catch (r) {
    setTimeout(function() {
      throw r;
    });
  }
}
var ig = typeof WeakMap == "function" ? WeakMap : Map;
function fh(e, t, r) {
  r = Tt(-1, r), r.tag = 3, r.payload = { element: null };
  var n = t.value;
  return r.callback = function() {
    co || (co = !0, Cu = n), pu(e, t);
  }, r;
}
function dh(e, t, r) {
  r = Tt(-1, r), r.tag = 3;
  var n = e.type.getDerivedStateFromError;
  if (typeof n == "function") {
    var i = t.value;
    r.payload = function() {
      return n(i);
    }, r.callback = function() {
      pu(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (r.callback = function() {
    pu(e, t), typeof n != "function" && (jt === null ? jt = /* @__PURE__ */ new Set([this]) : jt.add(this));
    var a = t.stack;
    this.componentDidCatch(t.value, { componentStack: a !== null ? a : "" });
  }), r;
}
function nc(e, t, r) {
  var n = e.pingCache;
  if (n === null) {
    n = e.pingCache = new ig();
    var i = /* @__PURE__ */ new Set();
    n.set(t, i);
  } else i = n.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), n.set(t, i));
  i.has(r) || (i.add(r), e = yg.bind(null, e, t, r), t.then(e, e));
}
function ic(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function oc(e, t, r, n, i) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, r.flags |= 131072, r.flags &= -52805, r.tag === 1 && (r.alternate === null ? r.tag = 17 : (t = Tt(-1, 1), t.tag = 2, Ut(r, t, 1))), r.lanes |= 1), e);
}
var og = _t.ReactCurrentOwner, ke = !1;
function Te(e, t, r, n) {
  t.child = e === null ? Ud(t, null, r, n) : Xr(t, e.child, r, n);
}
function ac(e, t, r, n, i) {
  r = r.render;
  var o = t.ref;
  return jr(t, i), n = Il(e, t, r, n, o, i), r = kl(), e !== null && !ke ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Dt(e, t, i)) : (q && r && gl(t), t.flags |= 1, Te(e, t, n, i), t.child);
}
function uc(e, t, r, n, i) {
  if (e === null) {
    var o = r.type;
    return typeof o == "function" && !$l(o) && o.defaultProps === void 0 && r.compare === null && r.defaultProps === void 0 ? (t.tag = 15, t.type = o, hh(e, t, o, n, i)) : (e = Hi(r.type, null, n, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & i)) {
    var a = o.memoizedProps;
    if (r = r.compare, r = r !== null ? r : Bn, r(a, n) && e.ref === t.ref) return Dt(e, t, i);
  }
  return t.flags |= 1, e = Gt(o, n), e.ref = t.ref, e.return = t, t.child = e;
}
function hh(e, t, r, n, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Bn(o, n) && e.ref === t.ref) if (ke = !1, t.pendingProps = n = o, (e.lanes & i) !== 0) e.flags & 131072 && (ke = !0);
    else return t.lanes = e.lanes, Dt(e, t, i);
  }
  return vu(e, t, r, n, i);
}
function ph(e, t, r) {
  var n = t.pendingProps, i = n.children, o = e !== null ? e.memoizedState : null;
  if (n.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Q(Hr, Le), Le |= r;
  else {
    if (!(r & 1073741824)) return e = o !== null ? o.baseLanes | r : r, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Q(Hr, Le), Le |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, n = o !== null ? o.baseLanes : r, Q(Hr, Le), Le |= n;
  }
  else o !== null ? (n = o.baseLanes | r, t.memoizedState = null) : n = r, Q(Hr, Le), Le |= n;
  return Te(e, t, i, r), t.child;
}
function vh(e, t) {
  var r = t.ref;
  (e === null && r !== null || e !== null && e.ref !== r) && (t.flags |= 512, t.flags |= 2097152);
}
function vu(e, t, r, n, i) {
  var o = be(r) ? cr : ye.current;
  return o = Vr(t, o), jr(t, i), r = Il(e, t, r, n, o, i), n = kl(), e !== null && !ke ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Dt(e, t, i)) : (q && n && gl(t), t.flags |= 1, Te(e, t, r, i), t.child);
}
function lc(e, t, r, n, i) {
  if (be(r)) {
    var o = !0;
    eo(t);
  } else o = !1;
  if (jr(t, i), t.stateNode === null) Li(e, t), ch(t, r, n), hu(t, r, n, i), n = !0;
  else if (e === null) {
    var a = t.stateNode, u = t.memoizedProps;
    a.props = u;
    var l = a.context, s = r.contextType;
    typeof s == "object" && s !== null ? s = Ye(s) : (s = be(r) ? cr : ye.current, s = Vr(t, s));
    var c = r.getDerivedStateFromProps, h = typeof c == "function" || typeof a.getSnapshotBeforeUpdate == "function";
    h || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (u !== n || l !== s) && rc(t, a, n, s), Nt = !1;
    var f = t.memoizedState;
    a.state = f, oo(t, n, a, i), l = t.memoizedState, u !== n || f !== l || Ne.current || Nt ? (typeof c == "function" && (du(t, r, c, n), l = t.memoizedState), (u = Nt || tc(t, r, u, n, f, l, s)) ? (h || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = n, t.memoizedState = l), a.props = n, a.state = l, a.context = s, n = u) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), n = !1);
  } else {
    a = t.stateNode, zd(e, t), u = t.memoizedProps, s = t.type === t.elementType ? u : rt(t.type, u), a.props = s, h = t.pendingProps, f = a.context, l = r.contextType, typeof l == "object" && l !== null ? l = Ye(l) : (l = be(r) ? cr : ye.current, l = Vr(t, l));
    var m = r.getDerivedStateFromProps;
    (c = typeof m == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (u !== h || f !== l) && rc(t, a, n, l), Nt = !1, f = t.memoizedState, a.state = f, oo(t, n, a, i);
    var S = t.memoizedState;
    u !== h || f !== S || Ne.current || Nt ? (typeof m == "function" && (du(t, r, m, n), S = t.memoizedState), (s = Nt || tc(t, r, s, n, f, S, l) || !1) ? (c || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(n, S, l), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(n, S, l)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || u === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = n, t.memoizedState = S), a.props = n, a.state = S, a.context = l, n = s) : (typeof a.componentDidUpdate != "function" || u === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), n = !1);
  }
  return mu(e, t, r, n, o, i);
}
function mu(e, t, r, n, i, o) {
  vh(e, t);
  var a = (t.flags & 128) !== 0;
  if (!n && !a) return i && Xs(t, r, !1), Dt(e, t, o);
  n = t.stateNode, og.current = t;
  var u = a && typeof r.getDerivedStateFromError != "function" ? null : n.render();
  return t.flags |= 1, e !== null && a ? (t.child = Xr(t, e.child, null, o), t.child = Xr(t, null, u, o)) : Te(e, t, u, o), t.memoizedState = n.state, i && Xs(t, r, !0), t.child;
}
function mh(e) {
  var t = e.stateNode;
  t.pendingContext ? Ws(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ws(e, t.context, !1), Ol(e, t.containerInfo);
}
function sc(e, t, r, n, i) {
  return Wr(), Sl(i), t.flags |= 256, Te(e, t, r, n), t.child;
}
var gu = { dehydrated: null, treeContext: null, retryLane: 0 };
function yu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function gh(e, t, r) {
  var n = t.pendingProps, i = J.current, o = !1, a = (t.flags & 128) !== 0, u;
  if ((u = a) || (u = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), u ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), Q(J, i & 1), e === null)
    return cu(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (a = n.children, e = n.fallback, o ? (n = t.mode, o = t.child, a = { mode: "hidden", children: a }, !(n & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = a) : o = _o(a, n, 0, null), e = sr(e, n, r, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = yu(r), t.memoizedState = gu, e) : Rl(t, a));
  if (i = e.memoizedState, i !== null && (u = i.dehydrated, u !== null)) return ag(e, t, a, n, u, i, r);
  if (o) {
    o = n.fallback, a = t.mode, i = e.child, u = i.sibling;
    var l = { mode: "hidden", children: n.children };
    return !(a & 1) && t.child !== i ? (n = t.child, n.childLanes = 0, n.pendingProps = l, t.deletions = null) : (n = Gt(i, l), n.subtreeFlags = i.subtreeFlags & 14680064), u !== null ? o = Gt(u, o) : (o = sr(o, a, r, null), o.flags |= 2), o.return = t, n.return = t, n.sibling = o, t.child = n, n = o, o = t.child, a = e.child.memoizedState, a = a === null ? yu(r) : { baseLanes: a.baseLanes | r, cachePool: null, transitions: a.transitions }, o.memoizedState = a, o.childLanes = e.childLanes & ~r, t.memoizedState = gu, n;
  }
  return o = e.child, e = o.sibling, n = Gt(o, { mode: "visible", children: n.children }), !(t.mode & 1) && (n.lanes = r), n.return = t, n.sibling = null, e !== null && (r = t.deletions, r === null ? (t.deletions = [e], t.flags |= 16) : r.push(e)), t.child = n, t.memoizedState = null, n;
}
function Rl(e, t) {
  return t = _o({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function vi(e, t, r, n) {
  return n !== null && Sl(n), Xr(t, e.child, null, r), e = Rl(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function ag(e, t, r, n, i, o, a) {
  if (r)
    return t.flags & 256 ? (t.flags &= -257, n = ya(Error(E(422))), vi(e, t, a, n)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = n.fallback, i = t.mode, n = _o({ mode: "visible", children: n.children }, i, 0, null), o = sr(o, i, a, null), o.flags |= 2, n.return = t, o.return = t, n.sibling = o, t.child = n, t.mode & 1 && Xr(t, e.child, null, a), t.child.memoizedState = yu(a), t.memoizedState = gu, o);
  if (!(t.mode & 1)) return vi(e, t, a, null);
  if (i.data === "$!") {
    if (n = i.nextSibling && i.nextSibling.dataset, n) var u = n.dgst;
    return n = u, o = Error(E(419)), n = ya(o, n, void 0), vi(e, t, a, n);
  }
  if (u = (a & e.childLanes) !== 0, ke || u) {
    if (n = se, n !== null) {
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
      i = i & (n.suspendedLanes | a) ? 0 : i, i !== 0 && i !== o.retryLane && (o.retryLane = i, Ot(e, i), at(n, e, i, -1));
    }
    return Bl(), n = ya(Error(E(421))), vi(e, t, a, n);
  }
  return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Sg.bind(null, e), i._reactRetry = t, null) : (e = o.treeContext, Me = $t(i.nextSibling), Ae = t, q = !0, it = null, e !== null && (Ge[Ve++] = Et, Ge[Ve++] = wt, Ge[Ve++] = fr, Et = e.id, wt = e.overflow, fr = t), t = Rl(t, n.children), t.flags |= 4096, t);
}
function cc(e, t, r) {
  e.lanes |= t;
  var n = e.alternate;
  n !== null && (n.lanes |= t), fu(e.return, t, r);
}
function Sa(e, t, r, n, i) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: n, tail: r, tailMode: i } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = n, o.tail = r, o.tailMode = i);
}
function yh(e, t, r) {
  var n = t.pendingProps, i = n.revealOrder, o = n.tail;
  if (Te(e, t, n.children, r), n = J.current, n & 2) n = n & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && cc(e, r, t);
      else if (e.tag === 19) cc(e, r, t);
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
  if (Q(J, n), !(t.mode & 1)) t.memoizedState = null;
  else switch (i) {
    case "forwards":
      for (r = t.child, i = null; r !== null; ) e = r.alternate, e !== null && ao(e) === null && (i = r), r = r.sibling;
      r = i, r === null ? (i = t.child, t.child = null) : (i = r.sibling, r.sibling = null), Sa(t, !1, i, r, o);
      break;
    case "backwards":
      for (r = null, i = t.child, t.child = null; i !== null; ) {
        if (e = i.alternate, e !== null && ao(e) === null) {
          t.child = i;
          break;
        }
        e = i.sibling, i.sibling = r, r = i, i = e;
      }
      Sa(t, !0, r, null, o);
      break;
    case "together":
      Sa(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Li(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Dt(e, t, r) {
  if (e !== null && (t.dependencies = e.dependencies), hr |= t.lanes, !(r & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(E(153));
  if (t.child !== null) {
    for (e = t.child, r = Gt(e, e.pendingProps), t.child = r, r.return = t; e.sibling !== null; ) e = e.sibling, r = r.sibling = Gt(e, e.pendingProps), r.return = t;
    r.sibling = null;
  }
  return t.child;
}
function ug(e, t, r) {
  switch (t.tag) {
    case 3:
      mh(t), Wr();
      break;
    case 5:
      Gd(t);
      break;
    case 1:
      be(t.type) && eo(t);
      break;
    case 4:
      Ol(t, t.stateNode.containerInfo);
      break;
    case 10:
      var n = t.type._context, i = t.memoizedProps.value;
      Q(no, n._currentValue), n._currentValue = i;
      break;
    case 13:
      if (n = t.memoizedState, n !== null)
        return n.dehydrated !== null ? (Q(J, J.current & 1), t.flags |= 128, null) : r & t.child.childLanes ? gh(e, t, r) : (Q(J, J.current & 1), e = Dt(e, t, r), e !== null ? e.sibling : null);
      Q(J, J.current & 1);
      break;
    case 19:
      if (n = (r & t.childLanes) !== 0, e.flags & 128) {
        if (n) return yh(e, t, r);
        t.flags |= 128;
      }
      if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), Q(J, J.current), n) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, ph(e, t, r);
  }
  return Dt(e, t, r);
}
var Sh, Su, Eh, wh;
Sh = function(e, t) {
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
Su = function() {
};
Eh = function(e, t, r, n) {
  var i = e.memoizedProps;
  if (i !== n) {
    e = t.stateNode, ur(pt.current);
    var o = null;
    switch (r) {
      case "input":
        i = Ua(e, i), n = Ua(e, n), o = [];
        break;
      case "select":
        i = te({}, i, { value: void 0 }), n = te({}, n, { value: void 0 }), o = [];
        break;
      case "textarea":
        i = Ga(e, i), n = Ga(e, n), o = [];
        break;
      default:
        typeof i.onClick != "function" && typeof n.onClick == "function" && (e.onclick = qi);
    }
    Wa(r, n);
    var a;
    r = null;
    for (s in i) if (!n.hasOwnProperty(s) && i.hasOwnProperty(s) && i[s] != null) if (s === "style") {
      var u = i[s];
      for (a in u) u.hasOwnProperty(a) && (r || (r = {}), r[a] = "");
    } else s !== "dangerouslySetInnerHTML" && s !== "children" && s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (bn.hasOwnProperty(s) ? o || (o = []) : (o = o || []).push(s, null));
    for (s in n) {
      var l = n[s];
      if (u = i != null ? i[s] : void 0, n.hasOwnProperty(s) && l !== u && (l != null || u != null)) if (s === "style") if (u) {
        for (a in u) !u.hasOwnProperty(a) || l && l.hasOwnProperty(a) || (r || (r = {}), r[a] = "");
        for (a in l) l.hasOwnProperty(a) && u[a] !== l[a] && (r || (r = {}), r[a] = l[a]);
      } else r || (o || (o = []), o.push(
        s,
        r
      )), r = l;
      else s === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, u = u ? u.__html : void 0, l != null && u !== l && (o = o || []).push(s, l)) : s === "children" ? typeof l != "string" && typeof l != "number" || (o = o || []).push(s, "" + l) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && (bn.hasOwnProperty(s) ? (l != null && s === "onScroll" && Y("scroll", e), o || u === l || (o = [])) : (o = o || []).push(s, l));
    }
    r && (o = o || []).push("style", r);
    var s = o;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
wh = function(e, t, r, n) {
  r !== n && (t.flags |= 4);
};
function hn(e, t) {
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
function ve(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, r = 0, n = 0;
  if (t) for (var i = e.child; i !== null; ) r |= i.lanes | i.childLanes, n |= i.subtreeFlags & 14680064, n |= i.flags & 14680064, i.return = e, i = i.sibling;
  else for (i = e.child; i !== null; ) r |= i.lanes | i.childLanes, n |= i.subtreeFlags, n |= i.flags, i.return = e, i = i.sibling;
  return e.subtreeFlags |= n, e.childLanes = r, t;
}
function lg(e, t, r) {
  var n = t.pendingProps;
  switch (yl(t), t.tag) {
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
      return ve(t), null;
    case 1:
      return be(t.type) && Ji(), ve(t), null;
    case 3:
      return n = t.stateNode, Qr(), K(Ne), K(ye), _l(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (hi(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, it !== null && (_u(it), it = null))), Su(e, t), ve(t), null;
    case 5:
      Dl(t);
      var i = ur(Gn.current);
      if (r = t.type, e !== null && t.stateNode != null) Eh(e, t, r, n, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!n) {
          if (t.stateNode === null) throw Error(E(166));
          return ve(t), null;
        }
        if (e = ur(pt.current), hi(t)) {
          n = t.stateNode, r = t.type;
          var o = t.memoizedProps;
          switch (n[dt] = t, n[jn] = o, e = (t.mode & 1) !== 0, r) {
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
              for (i = 0; i < En.length; i++) Y(En[i], n);
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
              Ss(n, o), Y("invalid", n);
              break;
            case "select":
              n._wrapperState = { wasMultiple: !!o.multiple }, Y("invalid", n);
              break;
            case "textarea":
              ws(n, o), Y("invalid", n);
          }
          Wa(r, o), i = null;
          for (var a in o) if (o.hasOwnProperty(a)) {
            var u = o[a];
            a === "children" ? typeof u == "string" ? n.textContent !== u && (o.suppressHydrationWarning !== !0 && di(n.textContent, u, e), i = ["children", u]) : typeof u == "number" && n.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && di(
              n.textContent,
              u,
              e
            ), i = ["children", "" + u]) : bn.hasOwnProperty(a) && u != null && a === "onScroll" && Y("scroll", n);
          }
          switch (r) {
            case "input":
              ii(n), Es(n, o, !0);
              break;
            case "textarea":
              ii(n), Ts(n);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (n.onclick = qi);
          }
          n = i, t.updateQueue = n, n !== null && (t.flags |= 4);
        } else {
          a = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Yf(r)), e === "http://www.w3.org/1999/xhtml" ? r === "script" ? (e = a.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof n.is == "string" ? e = a.createElement(r, { is: n.is }) : (e = a.createElement(r), r === "select" && (a = e, n.multiple ? a.multiple = !0 : n.size && (a.size = n.size))) : e = a.createElementNS(e, r), e[dt] = t, e[jn] = n, Sh(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (a = Xa(r, n), r) {
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
                for (i = 0; i < En.length; i++) Y(En[i], e);
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
                Ss(e, n), i = Ua(e, n), Y("invalid", e);
                break;
              case "option":
                i = n;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!n.multiple }, i = te({}, n, { value: void 0 }), Y("invalid", e);
                break;
              case "textarea":
                ws(e, n), i = Ga(e, n), Y("invalid", e);
                break;
              default:
                i = n;
            }
            Wa(r, i), u = i;
            for (o in u) if (u.hasOwnProperty(o)) {
              var l = u[o];
              o === "style" ? qf(e, l) : o === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && Zf(e, l)) : o === "children" ? typeof l == "string" ? (r !== "textarea" || l !== "") && Rn(e, l) : typeof l == "number" && Rn(e, "" + l) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (bn.hasOwnProperty(o) ? l != null && o === "onScroll" && Y("scroll", e) : l != null && nl(e, o, l, a));
            }
            switch (r) {
              case "input":
                ii(e), Es(e, n, !1);
                break;
              case "textarea":
                ii(e), Ts(e);
                break;
              case "option":
                n.value != null && e.setAttribute("value", "" + Vt(n.value));
                break;
              case "select":
                e.multiple = !!n.multiple, o = n.value, o != null ? Fr(e, !!n.multiple, o, !1) : n.defaultValue != null && Fr(
                  e,
                  !!n.multiple,
                  n.defaultValue,
                  !0
                );
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = qi);
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
      return ve(t), null;
    case 6:
      if (e && t.stateNode != null) wh(e, t, e.memoizedProps, n);
      else {
        if (typeof n != "string" && t.stateNode === null) throw Error(E(166));
        if (r = ur(Gn.current), ur(pt.current), hi(t)) {
          if (n = t.stateNode, r = t.memoizedProps, n[dt] = t, (o = n.nodeValue !== r) && (e = Ae, e !== null)) switch (e.tag) {
            case 3:
              di(n.nodeValue, r, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && di(n.nodeValue, r, (e.mode & 1) !== 0);
          }
          o && (t.flags |= 4);
        } else n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n), n[dt] = t, t.stateNode = n;
      }
      return ve(t), null;
    case 13:
      if (K(J), n = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (q && Me !== null && t.mode & 1 && !(t.flags & 128)) Bd(), Wr(), t.flags |= 98560, o = !1;
        else if (o = hi(t), n !== null && n.dehydrated !== null) {
          if (e === null) {
            if (!o) throw Error(E(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(E(317));
            o[dt] = t;
          } else Wr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          ve(t), o = !1;
        } else it !== null && (_u(it), it = null), o = !0;
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = r, t) : (n = n !== null, n !== (e !== null && e.memoizedState !== null) && n && (t.child.flags |= 8192, t.mode & 1 && (e === null || J.current & 1 ? ae === 0 && (ae = 3) : Bl())), t.updateQueue !== null && (t.flags |= 4), ve(t), null);
    case 4:
      return Qr(), Su(e, t), e === null && $n(t.stateNode.containerInfo), ve(t), null;
    case 10:
      return Tl(t.type._context), ve(t), null;
    case 17:
      return be(t.type) && Ji(), ve(t), null;
    case 19:
      if (K(J), o = t.memoizedState, o === null) return ve(t), null;
      if (n = (t.flags & 128) !== 0, a = o.rendering, a === null) if (n) hn(o, !1);
      else {
        if (ae !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (a = ao(e), a !== null) {
            for (t.flags |= 128, hn(o, !1), n = a.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), t.subtreeFlags = 0, n = r, r = t.child; r !== null; ) o = r, e = n, o.flags &= 14680066, a = o.alternate, a === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = a.childLanes, o.lanes = a.lanes, o.child = a.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = a.memoizedProps, o.memoizedState = a.memoizedState, o.updateQueue = a.updateQueue, o.type = a.type, e = a.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), r = r.sibling;
            return Q(J, J.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        o.tail !== null && ne() > Zr && (t.flags |= 128, n = !0, hn(o, !1), t.lanes = 4194304);
      }
      else {
        if (!n) if (e = ao(a), e !== null) {
          if (t.flags |= 128, n = !0, r = e.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), hn(o, !0), o.tail === null && o.tailMode === "hidden" && !a.alternate && !q) return ve(t), null;
        } else 2 * ne() - o.renderingStartTime > Zr && r !== 1073741824 && (t.flags |= 128, n = !0, hn(o, !1), t.lanes = 4194304);
        o.isBackwards ? (a.sibling = t.child, t.child = a) : (r = o.last, r !== null ? r.sibling = a : t.child = a, o.last = a);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = ne(), t.sibling = null, r = J.current, Q(J, n ? r & 1 | 2 : r & 1), t) : (ve(t), null);
    case 22:
    case 23:
      return Fl(), n = t.memoizedState !== null, e !== null && e.memoizedState !== null !== n && (t.flags |= 8192), n && t.mode & 1 ? Le & 1073741824 && (ve(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ve(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(E(156, t.tag));
}
function sg(e, t) {
  switch (yl(t), t.tag) {
    case 1:
      return be(t.type) && Ji(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Qr(), K(Ne), K(ye), _l(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Dl(t), null;
    case 13:
      if (K(J), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(E(340));
        Wr();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return K(J), null;
    case 4:
      return Qr(), null;
    case 10:
      return Tl(t.type._context), null;
    case 22:
    case 23:
      return Fl(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var mi = !1, ge = !1, cg = typeof WeakSet == "function" ? WeakSet : Set, P = null;
function Ar(e, t) {
  var r = e.ref;
  if (r !== null) if (typeof r == "function") try {
    r(null);
  } catch (n) {
    re(e, t, n);
  }
  else r.current = null;
}
function Eu(e, t, r) {
  try {
    r();
  } catch (n) {
    re(e, t, n);
  }
}
var fc = !1;
function fg(e, t) {
  if (nu = Yi, e = Dd(), ml(e)) {
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
        var a = 0, u = -1, l = -1, s = 0, c = 0, h = e, f = null;
        t: for (; ; ) {
          for (var m; h !== r || i !== 0 && h.nodeType !== 3 || (u = a + i), h !== o || n !== 0 && h.nodeType !== 3 || (l = a + n), h.nodeType === 3 && (a += h.nodeValue.length), (m = h.firstChild) !== null; )
            f = h, h = m;
          for (; ; ) {
            if (h === e) break t;
            if (f === r && ++s === i && (u = a), f === o && ++c === n && (l = a), (m = h.nextSibling) !== null) break;
            h = f, f = h.parentNode;
          }
          h = m;
        }
        r = u === -1 || l === -1 ? null : { start: u, end: l };
      } else r = null;
    }
    r = r || { start: 0, end: 0 };
  } else r = null;
  for (iu = { focusedElem: e, selectionRange: r }, Yi = !1, P = t; P !== null; ) if (t = P, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, P = e;
  else for (; P !== null; ) {
    t = P;
    try {
      var S = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (S !== null) {
            var g = S.memoizedProps, O = S.memoizedState, p = t.stateNode, d = p.getSnapshotBeforeUpdate(t.elementType === t.type ? g : rt(t.type, g), O);
            p.__reactInternalSnapshotBeforeUpdate = d;
          }
          break;
        case 3:
          var v = t.stateNode.containerInfo;
          v.nodeType === 1 ? v.textContent = "" : v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(E(163));
      }
    } catch (y) {
      re(t, t.return, y);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, P = e;
      break;
    }
    P = t.return;
  }
  return S = fc, fc = !1, S;
}
function In(e, t, r) {
  var n = t.updateQueue;
  if (n = n !== null ? n.lastEffect : null, n !== null) {
    var i = n = n.next;
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        i.destroy = void 0, o !== void 0 && Eu(t, r, o);
      }
      i = i.next;
    } while (i !== n);
  }
}
function Oo(e, t) {
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
function wu(e) {
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
function Th(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Th(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[dt], delete t[jn], delete t[uu], delete t[Xm], delete t[Qm])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function xh(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function dc(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || xh(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Tu(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6) e = e.stateNode, t ? r.nodeType === 8 ? r.parentNode.insertBefore(e, t) : r.insertBefore(e, t) : (r.nodeType === 8 ? (t = r.parentNode, t.insertBefore(e, r)) : (t = r, t.appendChild(e)), r = r._reactRootContainer, r != null || t.onclick !== null || (t.onclick = qi));
  else if (n !== 4 && (e = e.child, e !== null)) for (Tu(e, t, r), e = e.sibling; e !== null; ) Tu(e, t, r), e = e.sibling;
}
function xu(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6) e = e.stateNode, t ? r.insertBefore(e, t) : r.appendChild(e);
  else if (n !== 4 && (e = e.child, e !== null)) for (xu(e, t, r), e = e.sibling; e !== null; ) xu(e, t, r), e = e.sibling;
}
var fe = null, nt = !1;
function It(e, t, r) {
  for (r = r.child; r !== null; ) Ch(e, t, r), r = r.sibling;
}
function Ch(e, t, r) {
  if (ht && typeof ht.onCommitFiberUnmount == "function") try {
    ht.onCommitFiberUnmount(go, r);
  } catch {
  }
  switch (r.tag) {
    case 5:
      ge || Ar(r, t);
    case 6:
      var n = fe, i = nt;
      fe = null, It(e, t, r), fe = n, nt = i, fe !== null && (nt ? (e = fe, r = r.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r)) : fe.removeChild(r.stateNode));
      break;
    case 18:
      fe !== null && (nt ? (e = fe, r = r.stateNode, e.nodeType === 8 ? da(e.parentNode, r) : e.nodeType === 1 && da(e, r), Hn(e)) : da(fe, r.stateNode));
      break;
    case 4:
      n = fe, i = nt, fe = r.stateNode.containerInfo, nt = !0, It(e, t, r), fe = n, nt = i;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ge && (n = r.updateQueue, n !== null && (n = n.lastEffect, n !== null))) {
        i = n = n.next;
        do {
          var o = i, a = o.destroy;
          o = o.tag, a !== void 0 && (o & 2 || o & 4) && Eu(r, t, a), i = i.next;
        } while (i !== n);
      }
      It(e, t, r);
      break;
    case 1:
      if (!ge && (Ar(r, t), n = r.stateNode, typeof n.componentWillUnmount == "function")) try {
        n.props = r.memoizedProps, n.state = r.memoizedState, n.componentWillUnmount();
      } catch (u) {
        re(r, t, u);
      }
      It(e, t, r);
      break;
    case 21:
      It(e, t, r);
      break;
    case 22:
      r.mode & 1 ? (ge = (n = ge) || r.memoizedState !== null, It(e, t, r), ge = n) : It(e, t, r);
      break;
    default:
      It(e, t, r);
  }
}
function hc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var r = e.stateNode;
    r === null && (r = e.stateNode = new cg()), t.forEach(function(n) {
      var i = Eg.bind(null, e, n);
      r.has(n) || (r.add(n), n.then(i, i));
    });
  }
}
function tt(e, t) {
  var r = t.deletions;
  if (r !== null) for (var n = 0; n < r.length; n++) {
    var i = r[n];
    try {
      var o = e, a = t, u = a;
      e: for (; u !== null; ) {
        switch (u.tag) {
          case 5:
            fe = u.stateNode, nt = !1;
            break e;
          case 3:
            fe = u.stateNode.containerInfo, nt = !0;
            break e;
          case 4:
            fe = u.stateNode.containerInfo, nt = !0;
            break e;
        }
        u = u.return;
      }
      if (fe === null) throw Error(E(160));
      Ch(o, a, i), fe = null, nt = !1;
      var l = i.alternate;
      l !== null && (l.return = null), i.return = null;
    } catch (s) {
      re(i, t, s);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Oh(t, e), t = t.sibling;
}
function Oh(e, t) {
  var r = e.alternate, n = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (tt(t, e), st(e), n & 4) {
        try {
          In(3, e, e.return), Oo(3, e);
        } catch (g) {
          re(e, e.return, g);
        }
        try {
          In(5, e, e.return);
        } catch (g) {
          re(e, e.return, g);
        }
      }
      break;
    case 1:
      tt(t, e), st(e), n & 512 && r !== null && Ar(r, r.return);
      break;
    case 5:
      if (tt(t, e), st(e), n & 512 && r !== null && Ar(r, r.return), e.flags & 32) {
        var i = e.stateNode;
        try {
          Rn(i, "");
        } catch (g) {
          re(e, e.return, g);
        }
      }
      if (n & 4 && (i = e.stateNode, i != null)) {
        var o = e.memoizedProps, a = r !== null ? r.memoizedProps : o, u = e.type, l = e.updateQueue;
        if (e.updateQueue = null, l !== null) try {
          u === "input" && o.type === "radio" && o.name != null && Xf(i, o), Xa(u, a);
          var s = Xa(u, o);
          for (a = 0; a < l.length; a += 2) {
            var c = l[a], h = l[a + 1];
            c === "style" ? qf(i, h) : c === "dangerouslySetInnerHTML" ? Zf(i, h) : c === "children" ? Rn(i, h) : nl(i, c, h, s);
          }
          switch (u) {
            case "input":
              ja(i, o);
              break;
            case "textarea":
              Qf(i, o);
              break;
            case "select":
              var f = i._wrapperState.wasMultiple;
              i._wrapperState.wasMultiple = !!o.multiple;
              var m = o.value;
              m != null ? Fr(i, !!o.multiple, m, !1) : f !== !!o.multiple && (o.defaultValue != null ? Fr(
                i,
                !!o.multiple,
                o.defaultValue,
                !0
              ) : Fr(i, !!o.multiple, o.multiple ? [] : "", !1));
          }
          i[jn] = o;
        } catch (g) {
          re(e, e.return, g);
        }
      }
      break;
    case 6:
      if (tt(t, e), st(e), n & 4) {
        if (e.stateNode === null) throw Error(E(162));
        i = e.stateNode, o = e.memoizedProps;
        try {
          i.nodeValue = o;
        } catch (g) {
          re(e, e.return, g);
        }
      }
      break;
    case 3:
      if (tt(t, e), st(e), n & 4 && r !== null && r.memoizedState.isDehydrated) try {
        Hn(t.containerInfo);
      } catch (g) {
        re(e, e.return, g);
      }
      break;
    case 4:
      tt(t, e), st(e);
      break;
    case 13:
      tt(t, e), st(e), i = e.child, i.flags & 8192 && (o = i.memoizedState !== null, i.stateNode.isHidden = o, !o || i.alternate !== null && i.alternate.memoizedState !== null || (Al = ne())), n & 4 && hc(e);
      break;
    case 22:
      if (c = r !== null && r.memoizedState !== null, e.mode & 1 ? (ge = (s = ge) || c, tt(t, e), ge = s) : tt(t, e), st(e), n & 8192) {
        if (s = e.memoizedState !== null, (e.stateNode.isHidden = s) && !c && e.mode & 1) for (P = e, c = e.child; c !== null; ) {
          for (h = P = c; P !== null; ) {
            switch (f = P, m = f.child, f.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                In(4, f, f.return);
                break;
              case 1:
                Ar(f, f.return);
                var S = f.stateNode;
                if (typeof S.componentWillUnmount == "function") {
                  n = f, r = f.return;
                  try {
                    t = n, S.props = t.memoizedProps, S.state = t.memoizedState, S.componentWillUnmount();
                  } catch (g) {
                    re(n, r, g);
                  }
                }
                break;
              case 5:
                Ar(f, f.return);
                break;
              case 22:
                if (f.memoizedState !== null) {
                  vc(h);
                  continue;
                }
            }
            m !== null ? (m.return = f, P = m) : vc(h);
          }
          c = c.sibling;
        }
        e: for (c = null, h = e; ; ) {
          if (h.tag === 5) {
            if (c === null) {
              c = h;
              try {
                i = h.stateNode, s ? (o = i.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = h.stateNode, l = h.memoizedProps.style, a = l != null && l.hasOwnProperty("display") ? l.display : null, u.style.display = Kf("display", a));
              } catch (g) {
                re(e, e.return, g);
              }
            }
          } else if (h.tag === 6) {
            if (c === null) try {
              h.stateNode.nodeValue = s ? "" : h.memoizedProps;
            } catch (g) {
              re(e, e.return, g);
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
      tt(t, e), st(e), n & 4 && hc(e);
      break;
    case 21:
      break;
    default:
      tt(
        t,
        e
      ), st(e);
  }
}
function st(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var r = e.return; r !== null; ) {
          if (xh(r)) {
            var n = r;
            break e;
          }
          r = r.return;
        }
        throw Error(E(160));
      }
      switch (n.tag) {
        case 5:
          var i = n.stateNode;
          n.flags & 32 && (Rn(i, ""), n.flags &= -33);
          var o = dc(e);
          xu(e, o, i);
          break;
        case 3:
        case 4:
          var a = n.stateNode.containerInfo, u = dc(e);
          Tu(e, u, a);
          break;
        default:
          throw Error(E(161));
      }
    } catch (l) {
      re(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function dg(e, t, r) {
  P = e, Dh(e);
}
function Dh(e, t, r) {
  for (var n = (e.mode & 1) !== 0; P !== null; ) {
    var i = P, o = i.child;
    if (i.tag === 22 && n) {
      var a = i.memoizedState !== null || mi;
      if (!a) {
        var u = i.alternate, l = u !== null && u.memoizedState !== null || ge;
        u = mi;
        var s = ge;
        if (mi = a, (ge = l) && !s) for (P = i; P !== null; ) a = P, l = a.child, a.tag === 22 && a.memoizedState !== null ? mc(i) : l !== null ? (l.return = a, P = l) : mc(i);
        for (; o !== null; ) P = o, Dh(o), o = o.sibling;
        P = i, mi = u, ge = s;
      }
      pc(e);
    } else i.subtreeFlags & 8772 && o !== null ? (o.return = i, P = o) : pc(e);
  }
}
function pc(e) {
  for (; P !== null; ) {
    var t = P;
    if (t.flags & 8772) {
      var r = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            ge || Oo(5, t);
            break;
          case 1:
            var n = t.stateNode;
            if (t.flags & 4 && !ge) if (r === null) n.componentDidMount();
            else {
              var i = t.elementType === t.type ? r.memoizedProps : rt(t.type, r.memoizedProps);
              n.componentDidUpdate(i, r.memoizedState, n.__reactInternalSnapshotBeforeUpdate);
            }
            var o = t.updateQueue;
            o !== null && qs(t, o, n);
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
              qs(t, a, r);
            }
            break;
          case 5:
            var u = t.stateNode;
            if (r === null && t.flags & 4) {
              r = u;
              var l = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  l.autoFocus && r.focus();
                  break;
                case "img":
                  l.src && (r.src = l.src);
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
                  h !== null && Hn(h);
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
            throw Error(E(163));
        }
        ge || t.flags & 512 && wu(t);
      } catch (f) {
        re(t, t.return, f);
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
function vc(e) {
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
function mc(e) {
  for (; P !== null; ) {
    var t = P;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var r = t.return;
          try {
            Oo(4, t);
          } catch (l) {
            re(t, r, l);
          }
          break;
        case 1:
          var n = t.stateNode;
          if (typeof n.componentDidMount == "function") {
            var i = t.return;
            try {
              n.componentDidMount();
            } catch (l) {
              re(t, i, l);
            }
          }
          var o = t.return;
          try {
            wu(t);
          } catch (l) {
            re(t, o, l);
          }
          break;
        case 5:
          var a = t.return;
          try {
            wu(t);
          } catch (l) {
            re(t, a, l);
          }
      }
    } catch (l) {
      re(t, t.return, l);
    }
    if (t === e) {
      P = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      u.return = t.return, P = u;
      break;
    }
    P = t.return;
  }
}
var hg = Math.ceil, so = _t.ReactCurrentDispatcher, Ll = _t.ReactCurrentOwner, Qe = _t.ReactCurrentBatchConfig, z = 0, se = null, ie = null, de = 0, Le = 0, Hr = Qt(0), ae = 0, Qn = null, hr = 0, Do = 0, Ml = 0, kn = null, Ie = null, Al = 0, Zr = 1 / 0, yt = null, co = !1, Cu = null, jt = null, gi = !1, At = null, fo = 0, Nn = 0, Ou = null, Mi = -1, Ai = 0;
function De() {
  return z & 6 ? ne() : Mi !== -1 ? Mi : Mi = ne();
}
function zt(e) {
  return e.mode & 1 ? z & 2 && de !== 0 ? de & -de : Zm.transition !== null ? (Ai === 0 && (Ai = cd()), Ai) : (e = W, e !== 0 || (e = window.event, e = e === void 0 ? 16 : gd(e.type)), e) : 1;
}
function at(e, t, r, n) {
  if (50 < Nn) throw Nn = 0, Ou = null, Error(E(185));
  Zn(e, r, n), (!(z & 2) || e !== se) && (e === se && (!(z & 2) && (Do |= r), ae === 4 && Lt(e, de)), Re(e, n), r === 1 && z === 0 && !(t.mode & 1) && (Zr = ne() + 500, To && Yt()));
}
function Re(e, t) {
  var r = e.callbackNode;
  Zv(e, t);
  var n = Qi(e, e === se ? de : 0);
  if (n === 0) r !== null && Os(r), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = n & -n, e.callbackPriority !== t) {
    if (r != null && Os(r), t === 1) e.tag === 0 ? Ym(gc.bind(null, e)) : Ad(gc.bind(null, e)), Vm(function() {
      !(z & 6) && Yt();
    }), r = null;
    else {
      switch (fd(n)) {
        case 1:
          r = ll;
          break;
        case 4:
          r = ld;
          break;
        case 16:
          r = Xi;
          break;
        case 536870912:
          r = sd;
          break;
        default:
          r = Xi;
      }
      r = Lh(r, _h.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = r;
  }
}
function _h(e, t) {
  if (Mi = -1, Ai = 0, z & 6) throw Error(E(327));
  var r = e.callbackNode;
  if (zr() && e.callbackNode !== r) return null;
  var n = Qi(e, e === se ? de : 0);
  if (n === 0) return null;
  if (n & 30 || n & e.expiredLanes || t) t = ho(e, n);
  else {
    t = n;
    var i = z;
    z |= 2;
    var o = Ih();
    (se !== e || de !== t) && (yt = null, Zr = ne() + 500, lr(e, t));
    do
      try {
        mg();
        break;
      } catch (u) {
        Ph(e, u);
      }
    while (!0);
    wl(), so.current = o, z = i, ie !== null ? t = 0 : (se = null, de = 0, t = ae);
  }
  if (t !== 0) {
    if (t === 2 && (i = qa(e), i !== 0 && (n = i, t = Du(e, i))), t === 1) throw r = Qn, lr(e, 0), Lt(e, n), Re(e, ne()), r;
    if (t === 6) Lt(e, n);
    else {
      if (i = e.current.alternate, !(n & 30) && !pg(i) && (t = ho(e, n), t === 2 && (o = qa(e), o !== 0 && (n = o, t = Du(e, o))), t === 1)) throw r = Qn, lr(e, 0), Lt(e, n), Re(e, ne()), r;
      switch (e.finishedWork = i, e.finishedLanes = n, t) {
        case 0:
        case 1:
          throw Error(E(345));
        case 2:
          rr(e, Ie, yt);
          break;
        case 3:
          if (Lt(e, n), (n & 130023424) === n && (t = Al + 500 - ne(), 10 < t)) {
            if (Qi(e, 0) !== 0) break;
            if (i = e.suspendedLanes, (i & n) !== n) {
              De(), e.pingedLanes |= e.suspendedLanes & i;
              break;
            }
            e.timeoutHandle = au(rr.bind(null, e, Ie, yt), t);
            break;
          }
          rr(e, Ie, yt);
          break;
        case 4:
          if (Lt(e, n), (n & 4194240) === n) break;
          for (t = e.eventTimes, i = -1; 0 < n; ) {
            var a = 31 - ot(n);
            o = 1 << a, a = t[a], a > i && (i = a), n &= ~o;
          }
          if (n = i, n = ne() - n, n = (120 > n ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * hg(n / 1960)) - n, 10 < n) {
            e.timeoutHandle = au(rr.bind(null, e, Ie, yt), n);
            break;
          }
          rr(e, Ie, yt);
          break;
        case 5:
          rr(e, Ie, yt);
          break;
        default:
          throw Error(E(329));
      }
    }
  }
  return Re(e, ne()), e.callbackNode === r ? _h.bind(null, e) : null;
}
function Du(e, t) {
  var r = kn;
  return e.current.memoizedState.isDehydrated && (lr(e, t).flags |= 256), e = ho(e, t), e !== 2 && (t = Ie, Ie = r, t !== null && _u(t)), e;
}
function _u(e) {
  Ie === null ? Ie = e : Ie.push.apply(Ie, e);
}
function pg(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var r = t.updateQueue;
      if (r !== null && (r = r.stores, r !== null)) for (var n = 0; n < r.length; n++) {
        var i = r[n], o = i.getSnapshot;
        i = i.value;
        try {
          if (!ut(o(), i)) return !1;
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
function Lt(e, t) {
  for (t &= ~Ml, t &= ~Do, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var r = 31 - ot(t), n = 1 << r;
    e[r] = -1, t &= ~n;
  }
}
function gc(e) {
  if (z & 6) throw Error(E(327));
  zr();
  var t = Qi(e, 0);
  if (!(t & 1)) return Re(e, ne()), null;
  var r = ho(e, t);
  if (e.tag !== 0 && r === 2) {
    var n = qa(e);
    n !== 0 && (t = n, r = Du(e, n));
  }
  if (r === 1) throw r = Qn, lr(e, 0), Lt(e, t), Re(e, ne()), r;
  if (r === 6) throw Error(E(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, rr(e, Ie, yt), Re(e, ne()), null;
}
function Hl(e, t) {
  var r = z;
  z |= 1;
  try {
    return e(t);
  } finally {
    z = r, z === 0 && (Zr = ne() + 500, To && Yt());
  }
}
function pr(e) {
  At !== null && At.tag === 0 && !(z & 6) && zr();
  var t = z;
  z |= 1;
  var r = Qe.transition, n = W;
  try {
    if (Qe.transition = null, W = 1, e) return e();
  } finally {
    W = n, Qe.transition = r, z = t, !(z & 6) && Yt();
  }
}
function Fl() {
  Le = Hr.current, K(Hr);
}
function lr(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var r = e.timeoutHandle;
  if (r !== -1 && (e.timeoutHandle = -1, Gm(r)), ie !== null) for (r = ie.return; r !== null; ) {
    var n = r;
    switch (yl(n), n.tag) {
      case 1:
        n = n.type.childContextTypes, n != null && Ji();
        break;
      case 3:
        Qr(), K(Ne), K(ye), _l();
        break;
      case 5:
        Dl(n);
        break;
      case 4:
        Qr();
        break;
      case 13:
        K(J);
        break;
      case 19:
        K(J);
        break;
      case 10:
        Tl(n.type._context);
        break;
      case 22:
      case 23:
        Fl();
    }
    r = r.return;
  }
  if (se = e, ie = e = Gt(e.current, null), de = Le = t, ae = 0, Qn = null, Ml = Do = hr = 0, Ie = kn = null, ar !== null) {
    for (t = 0; t < ar.length; t++) if (r = ar[t], n = r.interleaved, n !== null) {
      r.interleaved = null;
      var i = n.next, o = r.pending;
      if (o !== null) {
        var a = o.next;
        o.next = i, n.next = a;
      }
      r.pending = n;
    }
    ar = null;
  }
  return e;
}
function Ph(e, t) {
  do {
    var r = ie;
    try {
      if (wl(), bi.current = lo, uo) {
        for (var n = ee.memoizedState; n !== null; ) {
          var i = n.queue;
          i !== null && (i.pending = null), n = n.next;
        }
        uo = !1;
      }
      if (dr = 0, le = oe = ee = null, Pn = !1, Vn = 0, Ll.current = null, r === null || r.return === null) {
        ae = 1, Qn = t, ie = null;
        break;
      }
      e: {
        var o = e, a = r.return, u = r, l = t;
        if (t = de, u.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
          var s = l, c = u, h = c.tag;
          if (!(c.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var f = c.alternate;
            f ? (c.updateQueue = f.updateQueue, c.memoizedState = f.memoizedState, c.lanes = f.lanes) : (c.updateQueue = null, c.memoizedState = null);
          }
          var m = ic(a);
          if (m !== null) {
            m.flags &= -257, oc(m, a, u, o, t), m.mode & 1 && nc(o, s, t), t = m, l = s;
            var S = t.updateQueue;
            if (S === null) {
              var g = /* @__PURE__ */ new Set();
              g.add(l), t.updateQueue = g;
            } else S.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              nc(o, s, t), Bl();
              break e;
            }
            l = Error(E(426));
          }
        } else if (q && u.mode & 1) {
          var O = ic(a);
          if (O !== null) {
            !(O.flags & 65536) && (O.flags |= 256), oc(O, a, u, o, t), Sl(Yr(l, u));
            break e;
          }
        }
        o = l = Yr(l, u), ae !== 4 && (ae = 2), kn === null ? kn = [o] : kn.push(o), o = a;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var p = fh(o, l, t);
              Ks(o, p);
              break e;
            case 1:
              u = l;
              var d = o.type, v = o.stateNode;
              if (!(o.flags & 128) && (typeof d.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (jt === null || !jt.has(v)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var y = dh(o, u, t);
                Ks(o, y);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Nh(r);
    } catch (T) {
      t = T, ie === r && r !== null && (ie = r = r.return);
      continue;
    }
    break;
  } while (!0);
}
function Ih() {
  var e = so.current;
  return so.current = lo, e === null ? lo : e;
}
function Bl() {
  (ae === 0 || ae === 3 || ae === 2) && (ae = 4), se === null || !(hr & 268435455) && !(Do & 268435455) || Lt(se, de);
}
function ho(e, t) {
  var r = z;
  z |= 2;
  var n = Ih();
  (se !== e || de !== t) && (yt = null, lr(e, t));
  do
    try {
      vg();
      break;
    } catch (i) {
      Ph(e, i);
    }
  while (!0);
  if (wl(), z = r, so.current = n, ie !== null) throw Error(E(261));
  return se = null, de = 0, ae;
}
function vg() {
  for (; ie !== null; ) kh(ie);
}
function mg() {
  for (; ie !== null && !Uv(); ) kh(ie);
}
function kh(e) {
  var t = Rh(e.alternate, e, Le);
  e.memoizedProps = e.pendingProps, t === null ? Nh(e) : ie = t, Ll.current = null;
}
function Nh(e) {
  var t = e;
  do {
    var r = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (r = sg(r, t), r !== null) {
        r.flags &= 32767, ie = r;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        ae = 6, ie = null;
        return;
      }
    } else if (r = lg(r, t, Le), r !== null) {
      ie = r;
      return;
    }
    if (t = t.sibling, t !== null) {
      ie = t;
      return;
    }
    ie = t = e;
  } while (t !== null);
  ae === 0 && (ae = 5);
}
function rr(e, t, r) {
  var n = W, i = Qe.transition;
  try {
    Qe.transition = null, W = 1, gg(e, t, r, n);
  } finally {
    Qe.transition = i, W = n;
  }
  return null;
}
function gg(e, t, r, n) {
  do
    zr();
  while (At !== null);
  if (z & 6) throw Error(E(327));
  r = e.finishedWork;
  var i = e.finishedLanes;
  if (r === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, r === e.current) throw Error(E(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = r.lanes | r.childLanes;
  if (Kv(e, o), e === se && (ie = se = null, de = 0), !(r.subtreeFlags & 2064) && !(r.flags & 2064) || gi || (gi = !0, Lh(Xi, function() {
    return zr(), null;
  })), o = (r.flags & 15990) !== 0, r.subtreeFlags & 15990 || o) {
    o = Qe.transition, Qe.transition = null;
    var a = W;
    W = 1;
    var u = z;
    z |= 4, Ll.current = null, fg(e, r), Oh(r, e), Hm(iu), Yi = !!nu, iu = nu = null, e.current = r, dg(r), jv(), z = u, W = a, Qe.transition = o;
  } else e.current = r;
  if (gi && (gi = !1, At = e, fo = i), o = e.pendingLanes, o === 0 && (jt = null), Vv(r.stateNode), Re(e, ne()), t !== null) for (n = e.onRecoverableError, r = 0; r < t.length; r++) i = t[r], n(i.value, { componentStack: i.stack, digest: i.digest });
  if (co) throw co = !1, e = Cu, Cu = null, e;
  return fo & 1 && e.tag !== 0 && zr(), o = e.pendingLanes, o & 1 ? e === Ou ? Nn++ : (Nn = 0, Ou = e) : Nn = 0, Yt(), null;
}
function zr() {
  if (At !== null) {
    var e = fd(fo), t = Qe.transition, r = W;
    try {
      if (Qe.transition = null, W = 16 > e ? 16 : e, At === null) var n = !1;
      else {
        if (e = At, At = null, fo = 0, z & 6) throw Error(E(331));
        var i = z;
        for (z |= 4, P = e.current; P !== null; ) {
          var o = P, a = o.child;
          if (P.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var l = 0; l < u.length; l++) {
                var s = u[l];
                for (P = s; P !== null; ) {
                  var c = P;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      In(8, c, o);
                  }
                  var h = c.child;
                  if (h !== null) h.return = c, P = h;
                  else for (; P !== null; ) {
                    c = P;
                    var f = c.sibling, m = c.return;
                    if (Th(c), c === s) {
                      P = null;
                      break;
                    }
                    if (f !== null) {
                      f.return = m, P = f;
                      break;
                    }
                    P = m;
                  }
                }
              }
              var S = o.alternate;
              if (S !== null) {
                var g = S.child;
                if (g !== null) {
                  S.child = null;
                  do {
                    var O = g.sibling;
                    g.sibling = null, g = O;
                  } while (g !== null);
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
                In(9, o, o.return);
            }
            var p = o.sibling;
            if (p !== null) {
              p.return = o.return, P = p;
              break e;
            }
            P = o.return;
          }
        }
        var d = e.current;
        for (P = d; P !== null; ) {
          a = P;
          var v = a.child;
          if (a.subtreeFlags & 2064 && v !== null) v.return = a, P = v;
          else e: for (a = d; P !== null; ) {
            if (u = P, u.flags & 2048) try {
              switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  Oo(9, u);
              }
            } catch (T) {
              re(u, u.return, T);
            }
            if (u === a) {
              P = null;
              break e;
            }
            var y = u.sibling;
            if (y !== null) {
              y.return = u.return, P = y;
              break e;
            }
            P = u.return;
          }
        }
        if (z = i, Yt(), ht && typeof ht.onPostCommitFiberRoot == "function") try {
          ht.onPostCommitFiberRoot(go, e);
        } catch {
        }
        n = !0;
      }
      return n;
    } finally {
      W = r, Qe.transition = t;
    }
  }
  return !1;
}
function yc(e, t, r) {
  t = Yr(r, t), t = fh(e, t, 1), e = Ut(e, t, 1), t = De(), e !== null && (Zn(e, 1, t), Re(e, t));
}
function re(e, t, r) {
  if (e.tag === 3) yc(e, e, r);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      yc(t, e, r);
      break;
    } else if (t.tag === 1) {
      var n = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (jt === null || !jt.has(n))) {
        e = Yr(r, e), e = dh(t, e, 1), t = Ut(t, e, 1), e = De(), t !== null && (Zn(t, 1, e), Re(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function yg(e, t, r) {
  var n = e.pingCache;
  n !== null && n.delete(t), t = De(), e.pingedLanes |= e.suspendedLanes & r, se === e && (de & r) === r && (ae === 4 || ae === 3 && (de & 130023424) === de && 500 > ne() - Al ? lr(e, 0) : Ml |= r), Re(e, t);
}
function bh(e, t) {
  t === 0 && (e.mode & 1 ? (t = ui, ui <<= 1, !(ui & 130023424) && (ui = 4194304)) : t = 1);
  var r = De();
  e = Ot(e, t), e !== null && (Zn(e, t, r), Re(e, r));
}
function Sg(e) {
  var t = e.memoizedState, r = 0;
  t !== null && (r = t.retryLane), bh(e, r);
}
function Eg(e, t) {
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
      throw Error(E(314));
  }
  n !== null && n.delete(t), bh(e, r);
}
var Rh;
Rh = function(e, t, r) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Ne.current) ke = !0;
  else {
    if (!(e.lanes & r) && !(t.flags & 128)) return ke = !1, ug(e, t, r);
    ke = !!(e.flags & 131072);
  }
  else ke = !1, q && t.flags & 1048576 && Hd(t, ro, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var n = t.type;
      Li(e, t), e = t.pendingProps;
      var i = Vr(t, ye.current);
      jr(t, r), i = Il(null, t, n, e, i, r);
      var o = kl();
      return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, be(n) ? (o = !0, eo(t)) : o = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, Cl(t), i.updater = Co, t.stateNode = i, i._reactInternals = t, hu(t, n, e, r), t = mu(null, t, n, !0, o, r)) : (t.tag = 0, q && o && gl(t), Te(null, t, i, r), t = t.child), t;
    case 16:
      n = t.elementType;
      e: {
        switch (Li(e, t), e = t.pendingProps, i = n._init, n = i(n._payload), t.type = n, i = t.tag = Tg(n), e = rt(n, e), i) {
          case 0:
            t = vu(null, t, n, e, r);
            break e;
          case 1:
            t = lc(null, t, n, e, r);
            break e;
          case 11:
            t = ac(null, t, n, e, r);
            break e;
          case 14:
            t = uc(null, t, n, rt(n.type, e), r);
            break e;
        }
        throw Error(E(
          306,
          n,
          ""
        ));
      }
      return t;
    case 0:
      return n = t.type, i = t.pendingProps, i = t.elementType === n ? i : rt(n, i), vu(e, t, n, i, r);
    case 1:
      return n = t.type, i = t.pendingProps, i = t.elementType === n ? i : rt(n, i), lc(e, t, n, i, r);
    case 3:
      e: {
        if (mh(t), e === null) throw Error(E(387));
        n = t.pendingProps, o = t.memoizedState, i = o.element, zd(e, t), oo(t, n, null, r);
        var a = t.memoizedState;
        if (n = a.element, o.isDehydrated) if (o = { element: n, isDehydrated: !1, cache: a.cache, pendingSuspenseBoundaries: a.pendingSuspenseBoundaries, transitions: a.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
          i = Yr(Error(E(423)), t), t = sc(e, t, n, r, i);
          break e;
        } else if (n !== i) {
          i = Yr(Error(E(424)), t), t = sc(e, t, n, r, i);
          break e;
        } else for (Me = $t(t.stateNode.containerInfo.firstChild), Ae = t, q = !0, it = null, r = Ud(t, null, n, r), t.child = r; r; ) r.flags = r.flags & -3 | 4096, r = r.sibling;
        else {
          if (Wr(), n === i) {
            t = Dt(e, t, r);
            break e;
          }
          Te(e, t, n, r);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Gd(t), e === null && cu(t), n = t.type, i = t.pendingProps, o = e !== null ? e.memoizedProps : null, a = i.children, ou(n, i) ? a = null : o !== null && ou(n, o) && (t.flags |= 32), vh(e, t), Te(e, t, a, r), t.child;
    case 6:
      return e === null && cu(t), null;
    case 13:
      return gh(e, t, r);
    case 4:
      return Ol(t, t.stateNode.containerInfo), n = t.pendingProps, e === null ? t.child = Xr(t, null, n, r) : Te(e, t, n, r), t.child;
    case 11:
      return n = t.type, i = t.pendingProps, i = t.elementType === n ? i : rt(n, i), ac(e, t, n, i, r);
    case 7:
      return Te(e, t, t.pendingProps, r), t.child;
    case 8:
      return Te(e, t, t.pendingProps.children, r), t.child;
    case 12:
      return Te(e, t, t.pendingProps.children, r), t.child;
    case 10:
      e: {
        if (n = t.type._context, i = t.pendingProps, o = t.memoizedProps, a = i.value, Q(no, n._currentValue), n._currentValue = a, o !== null) if (ut(o.value, a)) {
          if (o.children === i.children && !Ne.current) {
            t = Dt(e, t, r);
            break e;
          }
        } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
          var u = o.dependencies;
          if (u !== null) {
            a = o.child;
            for (var l = u.firstContext; l !== null; ) {
              if (l.context === n) {
                if (o.tag === 1) {
                  l = Tt(-1, r & -r), l.tag = 2;
                  var s = o.updateQueue;
                  if (s !== null) {
                    s = s.shared;
                    var c = s.pending;
                    c === null ? l.next = l : (l.next = c.next, c.next = l), s.pending = l;
                  }
                }
                o.lanes |= r, l = o.alternate, l !== null && (l.lanes |= r), fu(
                  o.return,
                  r,
                  t
                ), u.lanes |= r;
                break;
              }
              l = l.next;
            }
          } else if (o.tag === 10) a = o.type === t.type ? null : o.child;
          else if (o.tag === 18) {
            if (a = o.return, a === null) throw Error(E(341));
            a.lanes |= r, u = a.alternate, u !== null && (u.lanes |= r), fu(a, r, t), a = o.sibling;
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
        Te(e, t, i.children, r), t = t.child;
      }
      return t;
    case 9:
      return i = t.type, n = t.pendingProps.children, jr(t, r), i = Ye(i), n = n(i), t.flags |= 1, Te(e, t, n, r), t.child;
    case 14:
      return n = t.type, i = rt(n, t.pendingProps), i = rt(n.type, i), uc(e, t, n, i, r);
    case 15:
      return hh(e, t, t.type, t.pendingProps, r);
    case 17:
      return n = t.type, i = t.pendingProps, i = t.elementType === n ? i : rt(n, i), Li(e, t), t.tag = 1, be(n) ? (e = !0, eo(t)) : e = !1, jr(t, r), ch(t, n, i), hu(t, n, i, r), mu(null, t, n, !0, e, r);
    case 19:
      return yh(e, t, r);
    case 22:
      return ph(e, t, r);
  }
  throw Error(E(156, t.tag));
};
function Lh(e, t) {
  return ud(e, t);
}
function wg(e, t, r, n) {
  this.tag = e, this.key = r, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Xe(e, t, r, n) {
  return new wg(e, t, r, n);
}
function $l(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Tg(e) {
  if (typeof e == "function") return $l(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === ol) return 11;
    if (e === al) return 14;
  }
  return 2;
}
function Gt(e, t) {
  var r = e.alternate;
  return r === null ? (r = Xe(e.tag, t, e.key, e.mode), r.elementType = e.elementType, r.type = e.type, r.stateNode = e.stateNode, r.alternate = e, e.alternate = r) : (r.pendingProps = t, r.type = e.type, r.flags = 0, r.subtreeFlags = 0, r.deletions = null), r.flags = e.flags & 14680064, r.childLanes = e.childLanes, r.lanes = e.lanes, r.child = e.child, r.memoizedProps = e.memoizedProps, r.memoizedState = e.memoizedState, r.updateQueue = e.updateQueue, t = e.dependencies, r.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, r.sibling = e.sibling, r.index = e.index, r.ref = e.ref, r;
}
function Hi(e, t, r, n, i, o) {
  var a = 2;
  if (n = e, typeof e == "function") $l(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else e: switch (e) {
    case _r:
      return sr(r.children, i, o, t);
    case il:
      a = 8, i |= 8;
      break;
    case Ha:
      return e = Xe(12, r, t, i | 2), e.elementType = Ha, e.lanes = o, e;
    case Fa:
      return e = Xe(13, r, t, i), e.elementType = Fa, e.lanes = o, e;
    case Ba:
      return e = Xe(19, r, t, i), e.elementType = Ba, e.lanes = o, e;
    case Gf:
      return _o(r, i, o, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case jf:
          a = 10;
          break e;
        case zf:
          a = 9;
          break e;
        case ol:
          a = 11;
          break e;
        case al:
          a = 14;
          break e;
        case kt:
          a = 16, n = null;
          break e;
      }
      throw Error(E(130, e == null ? e : typeof e, ""));
  }
  return t = Xe(a, r, t, i), t.elementType = e, t.type = n, t.lanes = o, t;
}
function sr(e, t, r, n) {
  return e = Xe(7, e, n, t), e.lanes = r, e;
}
function _o(e, t, r, n) {
  return e = Xe(22, e, n, t), e.elementType = Gf, e.lanes = r, e.stateNode = { isHidden: !1 }, e;
}
function Ea(e, t, r) {
  return e = Xe(6, e, null, t), e.lanes = r, e;
}
function wa(e, t, r) {
  return t = Xe(4, e.children !== null ? e.children : [], e.key, t), t.lanes = r, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function xg(e, t, r, n, i) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ta(0), this.expirationTimes = ta(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ta(0), this.identifierPrefix = n, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
}
function Ul(e, t, r, n, i, o, a, u, l) {
  return e = new xg(e, t, r, u, l), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = Xe(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: n, isDehydrated: r, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Cl(o), e;
}
function Cg(e, t, r) {
  var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Dr, key: n == null ? null : "" + n, children: e, containerInfo: t, implementation: r };
}
function Mh(e) {
  if (!e) return Wt;
  e = e._reactInternals;
  e: {
    if (yr(e) !== e || e.tag !== 1) throw Error(E(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (be(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(E(171));
  }
  if (e.tag === 1) {
    var r = e.type;
    if (be(r)) return Md(e, r, t);
  }
  return t;
}
function Ah(e, t, r, n, i, o, a, u, l) {
  return e = Ul(r, n, !0, e, i, o, a, u, l), e.context = Mh(null), r = e.current, n = De(), i = zt(r), o = Tt(n, i), o.callback = t ?? null, Ut(r, o, i), e.current.lanes = i, Zn(e, i, n), Re(e, n), e;
}
function Po(e, t, r, n) {
  var i = t.current, o = De(), a = zt(i);
  return r = Mh(r), t.context === null ? t.context = r : t.pendingContext = r, t = Tt(o, a), t.payload = { element: e }, n = n === void 0 ? null : n, n !== null && (t.callback = n), e = Ut(i, t, a), e !== null && (at(e, i, a, o), Ni(e, i, a)), a;
}
function po(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Sc(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var r = e.retryLane;
    e.retryLane = r !== 0 && r < t ? r : t;
  }
}
function jl(e, t) {
  Sc(e, t), (e = e.alternate) && Sc(e, t);
}
function Og() {
  return null;
}
var Hh = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function zl(e) {
  this._internalRoot = e;
}
Io.prototype.render = zl.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(E(409));
  Po(e, t, null, null);
};
Io.prototype.unmount = zl.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    pr(function() {
      Po(null, e, null, null);
    }), t[Ct] = null;
  }
};
function Io(e) {
  this._internalRoot = e;
}
Io.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = pd();
    e = { blockedOn: null, target: e, priority: t };
    for (var r = 0; r < Rt.length && t !== 0 && t < Rt[r].priority; r++) ;
    Rt.splice(r, 0, e), r === 0 && md(e);
  }
};
function Gl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function ko(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Ec() {
}
function Dg(e, t, r, n, i) {
  if (i) {
    if (typeof n == "function") {
      var o = n;
      n = function() {
        var s = po(a);
        o.call(s);
      };
    }
    var a = Ah(t, n, e, 0, null, !1, !1, "", Ec);
    return e._reactRootContainer = a, e[Ct] = a.current, $n(e.nodeType === 8 ? e.parentNode : e), pr(), a;
  }
  for (; i = e.lastChild; ) e.removeChild(i);
  if (typeof n == "function") {
    var u = n;
    n = function() {
      var s = po(l);
      u.call(s);
    };
  }
  var l = Ul(e, 0, !1, null, null, !1, !1, "", Ec);
  return e._reactRootContainer = l, e[Ct] = l.current, $n(e.nodeType === 8 ? e.parentNode : e), pr(function() {
    Po(t, l, r, n);
  }), l;
}
function No(e, t, r, n, i) {
  var o = r._reactRootContainer;
  if (o) {
    var a = o;
    if (typeof i == "function") {
      var u = i;
      i = function() {
        var l = po(a);
        u.call(l);
      };
    }
    Po(t, a, e, i);
  } else a = Dg(r, t, e, i, n);
  return po(a);
}
dd = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var r = Sn(t.pendingLanes);
        r !== 0 && (sl(t, r | 1), Re(t, ne()), !(z & 6) && (Zr = ne() + 500, Yt()));
      }
      break;
    case 13:
      pr(function() {
        var n = Ot(e, 1);
        if (n !== null) {
          var i = De();
          at(n, e, 1, i);
        }
      }), jl(e, 1);
  }
};
cl = function(e) {
  if (e.tag === 13) {
    var t = Ot(e, 134217728);
    if (t !== null) {
      var r = De();
      at(t, e, 134217728, r);
    }
    jl(e, 134217728);
  }
};
hd = function(e) {
  if (e.tag === 13) {
    var t = zt(e), r = Ot(e, t);
    if (r !== null) {
      var n = De();
      at(r, e, t, n);
    }
    jl(e, t);
  }
};
pd = function() {
  return W;
};
vd = function(e, t) {
  var r = W;
  try {
    return W = e, t();
  } finally {
    W = r;
  }
};
Ya = function(e, t, r) {
  switch (t) {
    case "input":
      if (ja(e, r), t = r.name, r.type === "radio" && t != null) {
        for (r = e; r.parentNode; ) r = r.parentNode;
        for (r = r.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== e && n.form === e.form) {
            var i = wo(n);
            if (!i) throw Error(E(90));
            Wf(n), ja(n, i);
          }
        }
      }
      break;
    case "textarea":
      Qf(e, r);
      break;
    case "select":
      t = r.value, t != null && Fr(e, !!r.multiple, t, !1);
  }
};
td = Hl;
rd = pr;
var _g = { usingClientEntryPoint: !1, Events: [qn, Nr, wo, Jf, ed, Hl] }, pn = { findFiberByHostInstance: or, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Pg = { bundleType: pn.bundleType, version: pn.version, rendererPackageName: pn.rendererPackageName, rendererConfig: pn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: _t.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = od(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: pn.findFiberByHostInstance || Og, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var yi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!yi.isDisabled && yi.supportsFiber) try {
    go = yi.inject(Pg), ht = yi;
  } catch {
  }
}
Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _g;
Be.createPortal = function(e, t) {
  var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Gl(t)) throw Error(E(200));
  return Cg(e, t, null, r);
};
Be.createRoot = function(e, t) {
  if (!Gl(e)) throw Error(E(299));
  var r = !1, n = "", i = Hh;
  return t != null && (t.unstable_strictMode === !0 && (r = !0), t.identifierPrefix !== void 0 && (n = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = Ul(e, 1, !1, null, null, r, !1, n, i), e[Ct] = t.current, $n(e.nodeType === 8 ? e.parentNode : e), new zl(t);
};
Be.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(E(188)) : (e = Object.keys(e).join(","), Error(E(268, e)));
  return e = od(t), e = e === null ? null : e.stateNode, e;
};
Be.flushSync = function(e) {
  return pr(e);
};
Be.hydrate = function(e, t, r) {
  if (!ko(t)) throw Error(E(200));
  return No(null, e, t, !0, r);
};
Be.hydrateRoot = function(e, t, r) {
  if (!Gl(e)) throw Error(E(405));
  var n = r != null && r.hydratedSources || null, i = !1, o = "", a = Hh;
  if (r != null && (r.unstable_strictMode === !0 && (i = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (a = r.onRecoverableError)), t = Ah(t, null, e, 1, r ?? null, i, !1, o, a), e[Ct] = t.current, $n(e), n) for (e = 0; e < n.length; e++) r = n[e], i = r._getVersion, i = i(r._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [r, i] : t.mutableSourceEagerHydrationData.push(
    r,
    i
  );
  return new Io(t);
};
Be.render = function(e, t, r) {
  if (!ko(t)) throw Error(E(200));
  return No(null, e, t, !1, r);
};
Be.unmountComponentAtNode = function(e) {
  if (!ko(e)) throw Error(E(40));
  return e._reactRootContainer ? (pr(function() {
    No(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Ct] = null;
    });
  }), !0) : !1;
};
Be.unstable_batchedUpdates = Hl;
Be.unstable_renderSubtreeIntoContainer = function(e, t, r, n) {
  if (!ko(r)) throw Error(E(200));
  if (e == null || e._reactInternals === void 0) throw Error(E(38));
  return No(e, t, r, !1, n);
};
Be.version = "18.3.1-next-f1338f8080-20240426";
function Fh() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Fh);
    } catch (e) {
      console.error(e);
    }
}
Fh(), Ff.exports = Be;
var Bh = Ff.exports;
const Si = /* @__PURE__ */ Jr(Bh);
var $h, wc = Bh;
$h = wc.createRoot, wc.hydrateRoot;
var Pu = function(e, t) {
  return Pu = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i]);
  }, Pu(e, t);
};
function qe(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Pu(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}
var I = function() {
  return I = Object.assign || function(t) {
    for (var r, n = 1, i = arguments.length; n < i; n++) {
      r = arguments[n];
      for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
    }
    return t;
  }, I.apply(this, arguments);
};
function Kr(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
  return r;
}
function Oe(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, i = t.length, o; n < i; n++)
    (o || !(n in t)) && (o || (o = Array.prototype.slice.call(t, 0, n)), o[n] = t[n]);
  return e.concat(o || Array.prototype.slice.call(t));
}
function xe(e, t) {
  var r = t && t.cache ? t.cache : Lg, n = t && t.serializer ? t.serializer : Rg, i = t && t.strategy ? t.strategy : Ng;
  return i(e, {
    cache: r,
    serializer: n
  });
}
function Ig(e) {
  return e == null || typeof e == "number" || typeof e == "boolean";
}
function kg(e, t, r, n) {
  var i = Ig(n) ? n : r(n), o = t.get(i);
  return typeof o > "u" && (o = e.call(this, n), t.set(i, o)), o;
}
function Uh(e, t, r) {
  var n = Array.prototype.slice.call(arguments, 3), i = r(n), o = t.get(i);
  return typeof o > "u" && (o = e.apply(this, n), t.set(i, o)), o;
}
function jh(e, t, r, n, i) {
  return r.bind(t, e, n, i);
}
function Ng(e, t) {
  var r = e.length === 1 ? kg : Uh;
  return jh(e, this, r, t.cache.create(), t.serializer);
}
function bg(e, t) {
  return jh(e, this, Uh, t.cache.create(), t.serializer);
}
var Rg = function() {
  return JSON.stringify(arguments);
};
function Vl() {
  this.cache = /* @__PURE__ */ Object.create(null);
}
Vl.prototype.get = function(e) {
  return this.cache[e];
};
Vl.prototype.set = function(e, t) {
  this.cache[e] = t;
};
var Lg = {
  create: function() {
    return new Vl();
  }
}, Ce = {
  variadic: bg
};
function zh(e, t, r) {
  if (r === void 0 && (r = Error), !e)
    throw new r(t);
}
xe(function() {
  for (var e, t = [], r = 0; r < arguments.length; r++)
    t[r] = arguments[r];
  return new ((e = Intl.NumberFormat).bind.apply(e, Oe([void 0], t, !1)))();
}, {
  strategy: Ce.variadic
});
xe(function() {
  for (var e, t = [], r = 0; r < arguments.length; r++)
    t[r] = arguments[r];
  return new ((e = Intl.DateTimeFormat).bind.apply(e, Oe([void 0], t, !1)))();
}, {
  strategy: Ce.variadic
});
xe(function() {
  for (var e, t = [], r = 0; r < arguments.length; r++)
    t[r] = arguments[r];
  return new ((e = Intl.PluralRules).bind.apply(e, Oe([void 0], t, !1)))();
}, {
  strategy: Ce.variadic
});
xe(function() {
  for (var e, t = [], r = 0; r < arguments.length; r++)
    t[r] = arguments[r];
  return new ((e = Intl.Locale).bind.apply(e, Oe([void 0], t, !1)))();
}, {
  strategy: Ce.variadic
});
xe(function() {
  for (var e, t = [], r = 0; r < arguments.length; r++)
    t[r] = arguments[r];
  return new ((e = Intl.ListFormat).bind.apply(e, Oe([void 0], t, !1)))();
}, {
  strategy: Ce.variadic
});
var U;
(function(e) {
  e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(U || (U = {}));
var Z;
(function(e) {
  e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
})(Z || (Z = {}));
var qr;
(function(e) {
  e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
})(qr || (qr = {}));
function Tc(e) {
  return e.type === Z.literal;
}
function Mg(e) {
  return e.type === Z.argument;
}
function Gh(e) {
  return e.type === Z.number;
}
function Vh(e) {
  return e.type === Z.date;
}
function Wh(e) {
  return e.type === Z.time;
}
function Xh(e) {
  return e.type === Z.select;
}
function Qh(e) {
  return e.type === Z.plural;
}
function Ag(e) {
  return e.type === Z.pound;
}
function Yh(e) {
  return e.type === Z.tag;
}
function Zh(e) {
  return !!(e && typeof e == "object" && e.type === qr.number);
}
function Iu(e) {
  return !!(e && typeof e == "object" && e.type === qr.dateTime);
}
var Kh = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, Hg = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function Fg(e) {
  var t = {};
  return e.replace(Hg, function(r) {
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
var Bg = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function $g(e) {
  if (e.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var t = e.split(Bg).filter(function(f) {
    return f.length > 0;
  }), r = [], n = 0, i = t; n < i.length; n++) {
    var o = i[n], a = o.split("/");
    if (a.length === 0)
      throw new Error("Invalid number skeleton");
    for (var u = a[0], l = a.slice(1), s = 0, c = l; s < c.length; s++) {
      var h = c[s];
      if (h.length === 0)
        throw new Error("Invalid number skeleton");
    }
    r.push({ stem: u, options: l });
  }
  return r;
}
function Ug(e) {
  return e.replace(/^(.*?)-/, "");
}
var xc = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, qh = /^(@+)?(\+|#+)?[rs]?$/g, jg = /(\*)(0+)|(#+)(0+)|(0+)/g, Jh = /^(0+)$/;
function Cc(e) {
  var t = {};
  return e[e.length - 1] === "r" ? t.roundingPriority = "morePrecision" : e[e.length - 1] === "s" && (t.roundingPriority = "lessPrecision"), e.replace(qh, function(r, n, i) {
    return typeof i != "string" ? (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length) : i === "+" ? t.minimumSignificantDigits = n.length : n[0] === "#" ? t.maximumSignificantDigits = n.length : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length + (typeof i == "string" ? i.length : 0)), "";
  }), t;
}
function ep(e) {
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
function zg(e) {
  var t;
  if (e[0] === "E" && e[1] === "E" ? (t = {
    notation: "engineering"
  }, e = e.slice(2)) : e[0] === "E" && (t = {
    notation: "scientific"
  }, e = e.slice(1)), t) {
    var r = e.slice(0, 2);
    if (r === "+!" ? (t.signDisplay = "always", e = e.slice(2)) : r === "+?" && (t.signDisplay = "exceptZero", e = e.slice(2)), !Jh.test(e))
      throw new Error("Malformed concise eng/scientific notation");
    t.minimumIntegerDigits = e.length;
  }
  return t;
}
function Oc(e) {
  var t = {}, r = ep(e);
  return r || t;
}
function Gg(e) {
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
        t.style = "unit", t.unit = Ug(i.options[0]);
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
        t = I(I(I({}, t), { notation: "scientific" }), i.options.reduce(function(l, s) {
          return I(I({}, l), Oc(s));
        }, {}));
        continue;
      case "engineering":
        t = I(I(I({}, t), { notation: "engineering" }), i.options.reduce(function(l, s) {
          return I(I({}, l), Oc(s));
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
        i.options[0].replace(jg, function(l, s, c, h, f, m) {
          if (s)
            t.minimumIntegerDigits = c.length;
          else {
            if (h && f)
              throw new Error("We currently do not support maximum integer digits");
            if (m)
              throw new Error("We currently do not support exact integer digits");
          }
          return "";
        });
        continue;
    }
    if (Jh.test(i.stem)) {
      t.minimumIntegerDigits = i.stem.length;
      continue;
    }
    if (xc.test(i.stem)) {
      if (i.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      i.stem.replace(xc, function(l, s, c, h, f, m) {
        return c === "*" ? t.minimumFractionDigits = s.length : h && h[0] === "#" ? t.maximumFractionDigits = h.length : f && m ? (t.minimumFractionDigits = f.length, t.maximumFractionDigits = f.length + m.length) : (t.minimumFractionDigits = s.length, t.maximumFractionDigits = s.length), "";
      });
      var o = i.options[0];
      o === "w" ? t = I(I({}, t), { trailingZeroDisplay: "stripIfInteger" }) : o && (t = I(I({}, t), Cc(o)));
      continue;
    }
    if (qh.test(i.stem)) {
      t = I(I({}, t), Cc(i.stem));
      continue;
    }
    var a = ep(i.stem);
    a && (t = I(I({}, t), a));
    var u = zg(i.stem);
    u && (t = I(I({}, t), u));
  }
  return t;
}
var Ei = {
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
function Vg(e, t) {
  for (var r = "", n = 0; n < e.length; n++) {
    var i = e.charAt(n);
    if (i === "j") {
      for (var o = 0; n + 1 < e.length && e.charAt(n + 1) === i; )
        o++, n++;
      var a = 1 + (o & 1), u = o < 2 ? 1 : 3 + (o >> 1), l = "a", s = Wg(t);
      for ((s == "H" || s == "k") && (u = 0); u-- > 0; )
        r += l;
      for (; a-- > 0; )
        r = s + r;
    } else i === "J" ? r += "H" : r += i;
  }
  return r;
}
function Wg(e) {
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
  var i = Ei[n || ""] || Ei[r || ""] || Ei["".concat(r, "-001")] || Ei["001"];
  return i[0];
}
var Ta, Xg = new RegExp("^".concat(Kh.source, "*")), Qg = new RegExp("".concat(Kh.source, "*$"));
function j(e, t) {
  return { start: e, end: t };
}
var Yg = !!String.prototype.startsWith && "_a".startsWith("a", 1), Zg = !!String.fromCodePoint, Kg = !!Object.fromEntries, qg = !!String.prototype.codePointAt, Jg = !!String.prototype.trimStart, ey = !!String.prototype.trimEnd, ty = !!Number.isSafeInteger, ry = ty ? Number.isSafeInteger : function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
}, ku = !0;
try {
  var ny = rp("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  ku = ((Ta = ny.exec("a")) === null || Ta === void 0 ? void 0 : Ta[0]) === "a";
} catch {
  ku = !1;
}
var Dc = Yg ? (
  // Native
  function(t, r, n) {
    return t.startsWith(r, n);
  }
) : (
  // For IE11
  function(t, r, n) {
    return t.slice(n, n + r.length) === r;
  }
), Nu = Zg ? String.fromCodePoint : (
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
), _c = (
  // native
  Kg ? Object.fromEntries : (
    // Ponyfill
    function(t) {
      for (var r = {}, n = 0, i = t; n < i.length; n++) {
        var o = i[n], a = o[0], u = o[1];
        r[a] = u;
      }
      return r;
    }
  )
), tp = qg ? (
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
), iy = Jg ? (
  // Native
  function(t) {
    return t.trimStart();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(Xg, "");
  }
), oy = ey ? (
  // Native
  function(t) {
    return t.trimEnd();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(Qg, "");
  }
);
function rp(e, t) {
  return new RegExp(e, t);
}
var bu;
if (ku) {
  var Pc = rp("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  bu = function(t, r) {
    var n;
    Pc.lastIndex = r;
    var i = Pc.exec(t);
    return (n = i[1]) !== null && n !== void 0 ? n : "";
  };
} else
  bu = function(t, r) {
    for (var n = []; ; ) {
      var i = tp(t, r);
      if (i === void 0 || np(i) || sy(i))
        break;
      n.push(i), r += i >= 65536 ? 2 : 1;
    }
    return Nu.apply(void 0, n);
  };
var ay = (
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
            var u = this.clonePosition();
            this.bump(), i.push({
              type: Z.pound,
              location: j(u, this.clonePosition())
            });
          } else if (o === 60 && !this.ignoreTag && this.peek() === 47) {
            if (n)
              break;
            return this.error(U.UNMATCHED_CLOSING_TAG, j(this.clonePosition(), this.clonePosition()));
          } else if (o === 60 && !this.ignoreTag && Ru(this.peek() || 0)) {
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
        var a = o.val, u = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !Ru(this.char()))
            return this.error(U.INVALID_TAG, j(u, this.clonePosition()));
          var l = this.clonePosition(), s = this.parseTagName();
          return i !== s ? this.error(U.UNMATCHED_CLOSING_TAG, j(l, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: Z.tag,
              value: i,
              children: a,
              location: j(n, this.clonePosition())
            },
            err: null
          } : this.error(U.INVALID_TAG, j(u, this.clonePosition())));
        } else
          return this.error(U.UNCLOSED_TAG, j(n, this.clonePosition()));
      } else
        return this.error(U.INVALID_TAG, j(n, this.clonePosition()));
    }, e.prototype.parseTagName = function() {
      var t = this.offset();
      for (this.bump(); !this.isEOF() && ly(this.char()); )
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
        var u = this.tryParseLeftAngleBracket();
        if (u) {
          i += u;
          continue;
        }
        break;
      }
      var l = j(n, this.clonePosition());
      return {
        val: { type: Z.literal, value: i, location: l },
        err: null
      };
    }, e.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !uy(this.peek() || 0)) ? (this.bump(), "<") : null;
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
      return Nu.apply(void 0, r);
    }, e.prototype.tryParseUnquoted = function(t, r) {
      if (this.isEOF())
        return null;
      var n = this.char();
      return n === 60 || n === 123 || n === 35 && (r === "plural" || r === "selectordinal") || n === 125 && t > 0 ? null : (this.bump(), Nu(n));
    }, e.prototype.parseArgument = function(t, r) {
      var n = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error(U.EXPECT_ARGUMENT_CLOSING_BRACE, j(n, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(U.EMPTY_ARGUMENT, j(n, this.clonePosition()));
      var i = this.parseIdentifierIfPossible().value;
      if (!i)
        return this.error(U.MALFORMED_ARGUMENT, j(n, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(U.EXPECT_ARGUMENT_CLOSING_BRACE, j(n, this.clonePosition()));
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
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(U.EXPECT_ARGUMENT_CLOSING_BRACE, j(n, this.clonePosition())) : this.parseArgumentOptions(t, r, i, n);
        default:
          return this.error(U.MALFORMED_ARGUMENT, j(n, this.clonePosition()));
      }
    }, e.prototype.parseIdentifierIfPossible = function() {
      var t = this.clonePosition(), r = this.offset(), n = bu(this.message, r), i = r + n.length;
      this.bumpTo(i);
      var o = this.clonePosition(), a = j(t, o);
      return { value: n, location: a };
    }, e.prototype.parseArgumentOptions = function(t, r, n, i) {
      var o, a = this.clonePosition(), u = this.parseIdentifierIfPossible().value, l = this.clonePosition();
      switch (u) {
        case "":
          return this.error(U.EXPECT_ARGUMENT_TYPE, j(a, l));
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
            var f = oy(h.val);
            if (f.length === 0)
              return this.error(U.EXPECT_ARGUMENT_STYLE, j(this.clonePosition(), this.clonePosition()));
            var m = j(c, this.clonePosition());
            s = { style: f, styleLocation: m };
          }
          var S = this.tryParseArgumentClose(i);
          if (S.err)
            return S;
          var g = j(i, this.clonePosition());
          if (s && Dc(s == null ? void 0 : s.style, "::", 0)) {
            var O = iy(s.style.slice(2));
            if (u === "number") {
              var h = this.parseNumberSkeletonFromString(O, s.styleLocation);
              return h.err ? h : {
                val: { type: Z.number, value: n, location: g, style: h.val },
                err: null
              };
            } else {
              if (O.length === 0)
                return this.error(U.EXPECT_DATE_TIME_SKELETON, g);
              var p = O;
              this.locale && (p = Vg(O, this.locale));
              var f = {
                type: qr.dateTime,
                pattern: p,
                location: s.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? Fg(p) : {}
              }, d = u === "date" ? Z.date : Z.time;
              return {
                val: { type: d, value: n, location: g, style: f },
                err: null
              };
            }
          }
          return {
            val: {
              type: u === "number" ? Z.number : u === "date" ? Z.date : Z.time,
              value: n,
              location: g,
              style: (o = s == null ? void 0 : s.style) !== null && o !== void 0 ? o : null
            },
            err: null
          };
        }
        case "plural":
        case "selectordinal":
        case "select": {
          var v = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(","))
            return this.error(U.EXPECT_SELECT_ARGUMENT_OPTIONS, j(v, I({}, v)));
          this.bumpSpace();
          var y = this.parseIdentifierIfPossible(), T = 0;
          if (u !== "select" && y.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(U.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, j(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var h = this.tryParseDecimalInteger(U.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, U.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (h.err)
              return h;
            this.bumpSpace(), y = this.parseIdentifierIfPossible(), T = h.val;
          }
          var x = this.tryParsePluralOrSelectOptions(t, u, r, y);
          if (x.err)
            return x;
          var S = this.tryParseArgumentClose(i);
          if (S.err)
            return S;
          var C = j(i, this.clonePosition());
          return u === "select" ? {
            val: {
              type: Z.select,
              value: n,
              options: _c(x.val),
              location: C
            },
            err: null
          } : {
            val: {
              type: Z.plural,
              value: n,
              options: _c(x.val),
              offset: T,
              pluralType: u === "plural" ? "cardinal" : "ordinal",
              location: C
            },
            err: null
          };
        }
        default:
          return this.error(U.INVALID_ARGUMENT_TYPE, j(a, l));
      }
    }, e.prototype.tryParseArgumentClose = function(t) {
      return this.isEOF() || this.char() !== 125 ? this.error(U.EXPECT_ARGUMENT_CLOSING_BRACE, j(t, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, e.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var t = 0, r = this.clonePosition(); !this.isEOF(); ) {
        var n = this.char();
        switch (n) {
          case 39: {
            this.bump();
            var i = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(U.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, j(i, this.clonePosition()));
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
        n = $g(t);
      } catch {
        return this.error(U.INVALID_NUMBER_SKELETON, r);
      }
      return {
        val: {
          type: qr.number,
          tokens: n,
          location: r,
          parsedOptions: this.shouldParseSkeletons ? Gg(n) : {}
        },
        err: null
      };
    }, e.prototype.tryParsePluralOrSelectOptions = function(t, r, n, i) {
      for (var o, a = !1, u = [], l = /* @__PURE__ */ new Set(), s = i.value, c = i.location; ; ) {
        if (s.length === 0) {
          var h = this.clonePosition();
          if (r !== "select" && this.bumpIf("=")) {
            var f = this.tryParseDecimalInteger(U.EXPECT_PLURAL_ARGUMENT_SELECTOR, U.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (f.err)
              return f;
            c = j(h, this.clonePosition()), s = this.message.slice(h.offset, this.offset());
          } else
            break;
        }
        if (l.has(s))
          return this.error(r === "select" ? U.DUPLICATE_SELECT_ARGUMENT_SELECTOR : U.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
        s === "other" && (a = !0), this.bumpSpace();
        var m = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(r === "select" ? U.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : U.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, j(this.clonePosition(), this.clonePosition()));
        var S = this.parseMessage(t + 1, r, n);
        if (S.err)
          return S;
        var g = this.tryParseArgumentClose(m);
        if (g.err)
          return g;
        u.push([
          s,
          {
            value: S.val,
            location: j(m, this.clonePosition())
          }
        ]), l.add(s), this.bumpSpace(), o = this.parseIdentifierIfPossible(), s = o.value, c = o.location;
      }
      return u.length === 0 ? this.error(r === "select" ? U.EXPECT_SELECT_ARGUMENT_SELECTOR : U.EXPECT_PLURAL_ARGUMENT_SELECTOR, j(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !a ? this.error(U.MISSING_OTHER_CLAUSE, j(this.clonePosition(), this.clonePosition())) : { val: u, err: null };
    }, e.prototype.tryParseDecimalInteger = function(t, r) {
      var n = 1, i = this.clonePosition();
      this.bumpIf("+") || this.bumpIf("-") && (n = -1);
      for (var o = !1, a = 0; !this.isEOF(); ) {
        var u = this.char();
        if (u >= 48 && u <= 57)
          o = !0, a = a * 10 + (u - 48), this.bump();
        else
          break;
      }
      var l = j(i, this.clonePosition());
      return o ? (a *= n, ry(a) ? { val: a, err: null } : this.error(r, l)) : this.error(t, l);
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
      var r = tp(this.message, t);
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
      if (Dc(this.message, t, this.offset())) {
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
      for (; !this.isEOF() && np(this.char()); )
        this.bump();
    }, e.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var t = this.char(), r = this.offset(), n = this.message.charCodeAt(r + (t >= 65536 ? 2 : 1));
      return n ?? null;
    }, e;
  }()
);
function Ru(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function uy(e) {
  return Ru(e) || e === 47;
}
function ly(e) {
  return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
function np(e) {
  return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
}
function sy(e) {
  return e >= 33 && e <= 35 || e === 36 || e >= 37 && e <= 39 || e === 40 || e === 41 || e === 42 || e === 43 || e === 44 || e === 45 || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || e === 91 || e === 92 || e === 93 || e === 94 || e === 96 || e === 123 || e === 124 || e === 125 || e === 126 || e === 161 || e >= 162 && e <= 165 || e === 166 || e === 167 || e === 169 || e === 171 || e === 172 || e === 174 || e === 176 || e === 177 || e === 182 || e === 187 || e === 191 || e === 215 || e === 247 || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || e === 8216 || e === 8217 || e === 8218 || e >= 8219 && e <= 8220 || e === 8221 || e === 8222 || e === 8223 || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || e === 8249 || e === 8250 || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || e === 8260 || e === 8261 || e === 8262 || e >= 8263 && e <= 8273 || e === 8274 || e === 8275 || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || e === 8608 || e >= 8609 && e <= 8610 || e === 8611 || e >= 8612 && e <= 8613 || e === 8614 || e >= 8615 && e <= 8621 || e === 8622 || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || e === 8658 || e === 8659 || e === 8660 || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || e === 8968 || e === 8969 || e === 8970 || e === 8971 || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || e === 9001 || e === 9002 || e >= 9003 && e <= 9083 || e === 9084 || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || e === 9655 || e >= 9656 && e <= 9664 || e === 9665 || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || e === 9839 || e >= 9840 && e <= 10087 || e === 10088 || e === 10089 || e === 10090 || e === 10091 || e === 10092 || e === 10093 || e === 10094 || e === 10095 || e === 10096 || e === 10097 || e === 10098 || e === 10099 || e === 10100 || e === 10101 || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || e === 10181 || e === 10182 || e >= 10183 && e <= 10213 || e === 10214 || e === 10215 || e === 10216 || e === 10217 || e === 10218 || e === 10219 || e === 10220 || e === 10221 || e === 10222 || e === 10223 || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || e === 10627 || e === 10628 || e === 10629 || e === 10630 || e === 10631 || e === 10632 || e === 10633 || e === 10634 || e === 10635 || e === 10636 || e === 10637 || e === 10638 || e === 10639 || e === 10640 || e === 10641 || e === 10642 || e === 10643 || e === 10644 || e === 10645 || e === 10646 || e === 10647 || e === 10648 || e >= 10649 && e <= 10711 || e === 10712 || e === 10713 || e === 10714 || e === 10715 || e >= 10716 && e <= 10747 || e === 10748 || e === 10749 || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || e === 11158 || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || e === 11778 || e === 11779 || e === 11780 || e === 11781 || e >= 11782 && e <= 11784 || e === 11785 || e === 11786 || e === 11787 || e === 11788 || e === 11789 || e >= 11790 && e <= 11798 || e === 11799 || e >= 11800 && e <= 11801 || e === 11802 || e === 11803 || e === 11804 || e === 11805 || e >= 11806 && e <= 11807 || e === 11808 || e === 11809 || e === 11810 || e === 11811 || e === 11812 || e === 11813 || e === 11814 || e === 11815 || e === 11816 || e === 11817 || e >= 11818 && e <= 11822 || e === 11823 || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || e === 11840 || e === 11841 || e === 11842 || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || e === 11858 || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || e === 12296 || e === 12297 || e === 12298 || e === 12299 || e === 12300 || e === 12301 || e === 12302 || e === 12303 || e === 12304 || e === 12305 || e >= 12306 && e <= 12307 || e === 12308 || e === 12309 || e === 12310 || e === 12311 || e === 12312 || e === 12313 || e === 12314 || e === 12315 || e === 12316 || e === 12317 || e >= 12318 && e <= 12319 || e === 12320 || e === 12336 || e === 64830 || e === 64831 || e >= 65093 && e <= 65094;
}
function Lu(e) {
  e.forEach(function(t) {
    if (delete t.location, Xh(t) || Qh(t))
      for (var r in t.options)
        delete t.options[r].location, Lu(t.options[r].value);
    else Gh(t) && Zh(t.style) || (Vh(t) || Wh(t)) && Iu(t.style) ? delete t.style.location : Yh(t) && Lu(t.children);
  });
}
function cy(e, t) {
  t === void 0 && (t = {}), t = I({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, t);
  var r = new ay(e, t).parse();
  if (r.err) {
    var n = SyntaxError(U[r.err.kind]);
    throw n.location = r.err.location, n.originalMessage = r.err.message, n;
  }
  return t != null && t.captureLocation || Lu(r.val), r.val;
}
var vt;
(function(e) {
  e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API";
})(vt || (vt = {}));
var Zt = (
  /** @class */
  function(e) {
    qe(t, e);
    function t(r, n, i) {
      var o = e.call(this, r) || this;
      return o.code = n, o.originalMessage = i, o;
    }
    return t.prototype.toString = function() {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    }, t;
  }(Error)
), Ic = (
  /** @class */
  function(e) {
    qe(t, e);
    function t(r, n, i, o) {
      return e.call(this, 'Invalid values for "'.concat(r, '": "').concat(n, '". Options are "').concat(Object.keys(i).join('", "'), '"'), vt.INVALID_VALUE, o) || this;
    }
    return t;
  }(Zt)
), fy = (
  /** @class */
  function(e) {
    qe(t, e);
    function t(r, n, i) {
      return e.call(this, 'Value for "'.concat(r, '" must be of type ').concat(n), vt.INVALID_VALUE, i) || this;
    }
    return t;
  }(Zt)
), dy = (
  /** @class */
  function(e) {
    qe(t, e);
    function t(r, n) {
      return e.call(this, 'The intl string context variable "'.concat(r, '" was not provided to the string "').concat(n, '"'), vt.MISSING_VALUE, n) || this;
    }
    return t;
  }(Zt)
), Ee;
(function(e) {
  e[e.literal = 0] = "literal", e[e.object = 1] = "object";
})(Ee || (Ee = {}));
function hy(e) {
  return e.length < 2 ? e : e.reduce(function(t, r) {
    var n = t[t.length - 1];
    return !n || n.type !== Ee.literal || r.type !== Ee.literal ? t.push(r) : n.value += r.value, t;
  }, []);
}
function ip(e) {
  return typeof e == "function";
}
function Fi(e, t, r, n, i, o, a) {
  if (e.length === 1 && Tc(e[0]))
    return [
      {
        type: Ee.literal,
        value: e[0].value
      }
    ];
  for (var u = [], l = 0, s = e; l < s.length; l++) {
    var c = s[l];
    if (Tc(c)) {
      u.push({
        type: Ee.literal,
        value: c.value
      });
      continue;
    }
    if (Ag(c)) {
      typeof o == "number" && u.push({
        type: Ee.literal,
        value: r.getNumberFormat(t).format(o)
      });
      continue;
    }
    var h = c.value;
    if (!(i && h in i))
      throw new dy(h, a);
    var f = i[h];
    if (Mg(c)) {
      (!f || typeof f == "string" || typeof f == "number") && (f = typeof f == "string" || typeof f == "number" ? String(f) : ""), u.push({
        type: typeof f == "string" ? Ee.literal : Ee.object,
        value: f
      });
      continue;
    }
    if (Vh(c)) {
      var m = typeof c.style == "string" ? n.date[c.style] : Iu(c.style) ? c.style.parsedOptions : void 0;
      u.push({
        type: Ee.literal,
        value: r.getDateTimeFormat(t, m).format(f)
      });
      continue;
    }
    if (Wh(c)) {
      var m = typeof c.style == "string" ? n.time[c.style] : Iu(c.style) ? c.style.parsedOptions : n.time.medium;
      u.push({
        type: Ee.literal,
        value: r.getDateTimeFormat(t, m).format(f)
      });
      continue;
    }
    if (Gh(c)) {
      var m = typeof c.style == "string" ? n.number[c.style] : Zh(c.style) ? c.style.parsedOptions : void 0;
      m && m.scale && (f = f * (m.scale || 1)), u.push({
        type: Ee.literal,
        value: r.getNumberFormat(t, m).format(f)
      });
      continue;
    }
    if (Yh(c)) {
      var S = c.children, g = c.value, O = i[g];
      if (!ip(O))
        throw new fy(g, "function", a);
      var p = Fi(S, t, r, n, i, o), d = O(p.map(function(T) {
        return T.value;
      }));
      Array.isArray(d) || (d = [d]), u.push.apply(u, d.map(function(T) {
        return {
          type: typeof T == "string" ? Ee.literal : Ee.object,
          value: T
        };
      }));
    }
    if (Xh(c)) {
      var v = c.options[f] || c.options.other;
      if (!v)
        throw new Ic(c.value, f, Object.keys(c.options), a);
      u.push.apply(u, Fi(v.value, t, r, n, i));
      continue;
    }
    if (Qh(c)) {
      var v = c.options["=".concat(f)];
      if (!v) {
        if (!Intl.PluralRules)
          throw new Zt(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, vt.MISSING_INTL_API, a);
        var y = r.getPluralRules(t, { type: c.pluralType }).select(f - (c.offset || 0));
        v = c.options[y] || c.options.other;
      }
      if (!v)
        throw new Ic(c.value, f, Object.keys(c.options), a);
      u.push.apply(u, Fi(v.value, t, r, n, i, f - (c.offset || 0)));
      continue;
    }
  }
  return hy(u);
}
function py(e, t) {
  return t ? I(I(I({}, e || {}), t || {}), Object.keys(e).reduce(function(r, n) {
    return r[n] = I(I({}, e[n]), t[n] || {}), r;
  }, {})) : e;
}
function vy(e, t) {
  return t ? Object.keys(e).reduce(function(r, n) {
    return r[n] = py(e[n], t[n]), r;
  }, I({}, e)) : e;
}
function xa(e) {
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
function my(e) {
  return e === void 0 && (e = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: xe(function() {
      for (var t, r = [], n = 0; n < arguments.length; n++)
        r[n] = arguments[n];
      return new ((t = Intl.NumberFormat).bind.apply(t, Oe([void 0], r, !1)))();
    }, {
      cache: xa(e.number),
      strategy: Ce.variadic
    }),
    getDateTimeFormat: xe(function() {
      for (var t, r = [], n = 0; n < arguments.length; n++)
        r[n] = arguments[n];
      return new ((t = Intl.DateTimeFormat).bind.apply(t, Oe([void 0], r, !1)))();
    }, {
      cache: xa(e.dateTime),
      strategy: Ce.variadic
    }),
    getPluralRules: xe(function() {
      for (var t, r = [], n = 0; n < arguments.length; n++)
        r[n] = arguments[n];
      return new ((t = Intl.PluralRules).bind.apply(t, Oe([void 0], r, !1)))();
    }, {
      cache: xa(e.pluralRules),
      strategy: Ce.variadic
    })
  };
}
var op = (
  /** @class */
  function() {
    function e(t, r, n, i) {
      r === void 0 && (r = e.defaultLocale);
      var o = this;
      if (this.formatterCache = {
        number: {},
        dateTime: {},
        pluralRules: {}
      }, this.format = function(l) {
        var s = o.formatToParts(l);
        if (s.length === 1)
          return s[0].value;
        var c = s.reduce(function(h, f) {
          return !h.length || f.type !== Ee.literal || typeof h[h.length - 1] != "string" ? h.push(f.value) : h[h.length - 1] += f.value, h;
        }, []);
        return c.length <= 1 ? c[0] || "" : c;
      }, this.formatToParts = function(l) {
        return Fi(o.ast, o.locales, o.formatters, o.formats, l, void 0, o.message);
      }, this.resolvedOptions = function() {
        var l;
        return {
          locale: ((l = o.resolvedLocale) === null || l === void 0 ? void 0 : l.toString()) || Intl.NumberFormat.supportedLocalesOf(o.locales)[0]
        };
      }, this.getAst = function() {
        return o.ast;
      }, this.locales = r, this.resolvedLocale = e.resolveLocale(r), typeof t == "string") {
        if (this.message = t, !e.__parse)
          throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
        var a = i || {};
        a.formatters;
        var u = Kr(a, ["formatters"]);
        this.ast = e.__parse(t, I(I({}, u), { locale: this.resolvedLocale }));
      } else
        this.ast = t;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = vy(e.formats, n), this.formatters = i && i.formatters || my(this.formatterCache);
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
    }, e.__parse = cy, e.formats = {
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
), vr;
(function(e) {
  e.FORMAT_ERROR = "FORMAT_ERROR", e.UNSUPPORTED_FORMATTER = "UNSUPPORTED_FORMATTER", e.INVALID_CONFIG = "INVALID_CONFIG", e.MISSING_DATA = "MISSING_DATA", e.MISSING_TRANSLATION = "MISSING_TRANSLATION";
})(vr || (vr = {}));
var ei = (
  /** @class */
  function(e) {
    qe(t, e);
    function t(r, n, i) {
      var o = this, a = i ? i instanceof Error ? i : new Error(String(i)) : void 0;
      return o = e.call(this, "[@formatjs/intl Error ".concat(r, "] ").concat(n, `
`).concat(a ? `
`.concat(a.message, `
`).concat(a.stack) : "")) || this, o.code = r, typeof Error.captureStackTrace == "function" && Error.captureStackTrace(o, t), o;
    }
    return t;
  }(Error)
), gy = (
  /** @class */
  function(e) {
    qe(t, e);
    function t(r, n) {
      return e.call(this, vr.UNSUPPORTED_FORMATTER, r, n) || this;
    }
    return t;
  }(ei)
), yy = (
  /** @class */
  function(e) {
    qe(t, e);
    function t(r, n) {
      return e.call(this, vr.INVALID_CONFIG, r, n) || this;
    }
    return t;
  }(ei)
), kc = (
  /** @class */
  function(e) {
    qe(t, e);
    function t(r, n) {
      return e.call(this, vr.MISSING_DATA, r, n) || this;
    }
    return t;
  }(ei)
), Je = (
  /** @class */
  function(e) {
    qe(t, e);
    function t(r, n, i) {
      var o = e.call(this, vr.FORMAT_ERROR, "".concat(r, `
Locale: `).concat(n, `
`), i) || this;
      return o.locale = n, o;
    }
    return t;
  }(ei)
), Ca = (
  /** @class */
  function(e) {
    qe(t, e);
    function t(r, n, i, o) {
      var a = e.call(this, "".concat(r, `
MessageID: `).concat(i == null ? void 0 : i.id, `
Default Message: `).concat(i == null ? void 0 : i.defaultMessage, `
Description: `).concat(i == null ? void 0 : i.description, `
`), n, o) || this;
      return a.descriptor = i, a.locale = n, a;
    }
    return t;
  }(Je)
), Sy = (
  /** @class */
  function(e) {
    qe(t, e);
    function t(r, n) {
      var i = e.call(this, vr.MISSING_TRANSLATION, 'Missing message: "'.concat(r.id, '" for locale "').concat(n, '", using ').concat(r.defaultMessage ? "default message (".concat(typeof r.defaultMessage == "string" ? r.defaultMessage : r.defaultMessage.map(function(o) {
        var a;
        return (a = o.value) !== null && a !== void 0 ? a : JSON.stringify(o);
      }).join(), ")") : "id", " as fallback.")) || this;
      return i.descriptor = r, i;
    }
    return t;
  }(ei)
);
function Sr(e, t, r) {
  return r === void 0 && (r = {}), t.reduce(function(n, i) {
    return i in e ? n[i] = e[i] : i in r && (n[i] = r[i]), n;
  }, {});
}
var Ey = function(e) {
}, wy = function(e) {
}, ap = {
  formats: {},
  messages: {},
  timeZone: void 0,
  defaultLocale: "en",
  defaultFormats: {},
  fallbackOnEmptyString: !0,
  onError: Ey,
  onWarn: wy
};
function up() {
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
function er(e) {
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
function Ty(e) {
  e === void 0 && (e = up());
  var t = Intl.RelativeTimeFormat, r = Intl.ListFormat, n = Intl.DisplayNames, i = xe(function() {
    for (var u, l = [], s = 0; s < arguments.length; s++)
      l[s] = arguments[s];
    return new ((u = Intl.DateTimeFormat).bind.apply(u, Oe([void 0], l, !1)))();
  }, {
    cache: er(e.dateTime),
    strategy: Ce.variadic
  }), o = xe(function() {
    for (var u, l = [], s = 0; s < arguments.length; s++)
      l[s] = arguments[s];
    return new ((u = Intl.NumberFormat).bind.apply(u, Oe([void 0], l, !1)))();
  }, {
    cache: er(e.number),
    strategy: Ce.variadic
  }), a = xe(function() {
    for (var u, l = [], s = 0; s < arguments.length; s++)
      l[s] = arguments[s];
    return new ((u = Intl.PluralRules).bind.apply(u, Oe([void 0], l, !1)))();
  }, {
    cache: er(e.pluralRules),
    strategy: Ce.variadic
  });
  return {
    getDateTimeFormat: i,
    getNumberFormat: o,
    getMessageFormat: xe(function(u, l, s, c) {
      return new op(u, l, s, I({ formatters: {
        getNumberFormat: o,
        getDateTimeFormat: i,
        getPluralRules: a
      } }, c || {}));
    }, {
      cache: er(e.message),
      strategy: Ce.variadic
    }),
    getRelativeTimeFormat: xe(function() {
      for (var u = [], l = 0; l < arguments.length; l++)
        u[l] = arguments[l];
      return new (t.bind.apply(t, Oe([void 0], u, !1)))();
    }, {
      cache: er(e.relativeTime),
      strategy: Ce.variadic
    }),
    getPluralRules: a,
    getListFormat: xe(function() {
      for (var u = [], l = 0; l < arguments.length; l++)
        u[l] = arguments[l];
      return new (r.bind.apply(r, Oe([void 0], u, !1)))();
    }, {
      cache: er(e.list),
      strategy: Ce.variadic
    }),
    getDisplayNames: xe(function() {
      for (var u = [], l = 0; l < arguments.length; l++)
        u[l] = arguments[l];
      return new (n.bind.apply(n, Oe([void 0], u, !1)))();
    }, {
      cache: er(e.displayNames),
      strategy: Ce.variadic
    })
  };
}
function Wl(e, t, r, n) {
  var i = e && e[t], o;
  if (i && (o = i[r]), o)
    return o;
  n(new gy("No ".concat(t, " format named: ").concat(r)));
}
function wi(e, t) {
  return Object.keys(e).reduce(function(r, n) {
    return r[n] = I({ timeZone: t }, e[n]), r;
  }, {});
}
function Nc(e, t) {
  var r = Object.keys(I(I({}, e), t));
  return r.reduce(function(n, i) {
    return n[i] = I(I({}, e[i] || {}), t[i] || {}), n;
  }, {});
}
function bc(e, t) {
  if (!t)
    return e;
  var r = op.formats;
  return I(I(I({}, r), e), { date: Nc(wi(r.date, t), wi(e.date || {}, t)), time: Nc(wi(r.time, t), wi(e.time || {}, t)) });
}
var Mu = function(e, t, r, n, i) {
  var o = e.locale, a = e.formats, u = e.messages, l = e.defaultLocale, s = e.defaultFormats, c = e.fallbackOnEmptyString, h = e.onError, f = e.timeZone, m = e.defaultRichTextElements;
  r === void 0 && (r = { id: "" });
  var S = r.id, g = r.defaultMessage;
  zh(!!S, "[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");
  var O = String(S), p = (
    // In case messages is Object.create(null)
    // e.g import('foo.json') from webpack)
    // See https://github.com/formatjs/formatjs/issues/1914
    u && Object.prototype.hasOwnProperty.call(u, O) && u[O]
  );
  if (Array.isArray(p) && p.length === 1 && p[0].type === Z.literal)
    return p[0].value;
  if (!n && p && typeof p == "string" && !m)
    return p.replace(/'\{(.*?)\}'/gi, "{$1}");
  if (n = I(I({}, m), n || {}), a = bc(a, f), s = bc(s, f), !p) {
    if (c === !1 && p === "")
      return p;
    if ((!g || o && o.toLowerCase() !== l.toLowerCase()) && h(new Sy(r, o)), g)
      try {
        var d = t.getMessageFormat(g, l, s, i);
        return d.format(n);
      } catch (v) {
        return h(new Ca('Error formatting default message for: "'.concat(O, '", rendering default message verbatim'), o, r, v)), typeof g == "string" ? g : O;
      }
    return O;
  }
  try {
    var d = t.getMessageFormat(p, o, a, I({ formatters: t }, i || {}));
    return d.format(n);
  } catch (v) {
    h(new Ca('Error formatting message: "'.concat(O, '", using ').concat(g ? "default message" : "id", " as fallback."), o, r, v));
  }
  if (g)
    try {
      var d = t.getMessageFormat(g, l, s, i);
      return d.format(n);
    } catch (v) {
      h(new Ca('Error formatting the default message for: "'.concat(O, '", rendering message verbatim'), o, r, v));
    }
  return typeof p == "string" ? p : typeof g == "string" ? g : O;
}, lp = [
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
function bo(e, t, r, n) {
  var i = e.locale, o = e.formats, a = e.onError, u = e.timeZone;
  n === void 0 && (n = {});
  var l = n.format, s = I(I({}, u && { timeZone: u }), l && Wl(o, t, l, a)), c = Sr(n, lp, s);
  return t === "time" && !c.hour && !c.minute && !c.second && !c.timeStyle && !c.dateStyle && (c = I(I({}, c), { hour: "numeric", minute: "numeric" })), r(i, c);
}
function xy(e, t) {
  for (var r = [], n = 2; n < arguments.length; n++)
    r[n - 2] = arguments[n];
  var i = r[0], o = r[1], a = o === void 0 ? {} : o, u = typeof i == "string" ? new Date(i || 0) : i;
  try {
    return bo(e, "date", t, a).format(u);
  } catch (l) {
    e.onError(new Je("Error formatting date.", e.locale, l));
  }
  return String(u);
}
function Cy(e, t) {
  for (var r = [], n = 2; n < arguments.length; n++)
    r[n - 2] = arguments[n];
  var i = r[0], o = r[1], a = o === void 0 ? {} : o, u = typeof i == "string" ? new Date(i || 0) : i;
  try {
    return bo(e, "time", t, a).format(u);
  } catch (l) {
    e.onError(new Je("Error formatting time.", e.locale, l));
  }
  return String(u);
}
function Oy(e, t) {
  for (var r = [], n = 2; n < arguments.length; n++)
    r[n - 2] = arguments[n];
  var i = r[0], o = r[1], a = r[2], u = a === void 0 ? {} : a, l = e.timeZone, s = e.locale, c = e.onError, h = Sr(u, lp, l ? { timeZone: l } : {});
  try {
    return t(s, h).formatRange(i, o);
  } catch (f) {
    c(new Je("Error formatting date time range.", e.locale, f));
  }
  return String(i);
}
function Dy(e, t) {
  for (var r = [], n = 2; n < arguments.length; n++)
    r[n - 2] = arguments[n];
  var i = r[0], o = r[1], a = o === void 0 ? {} : o, u = typeof i == "string" ? new Date(i || 0) : i;
  try {
    return bo(e, "date", t, a).formatToParts(u);
  } catch (l) {
    e.onError(new Je("Error formatting date.", e.locale, l));
  }
  return [];
}
function _y(e, t) {
  for (var r = [], n = 2; n < arguments.length; n++)
    r[n - 2] = arguments[n];
  var i = r[0], o = r[1], a = o === void 0 ? {} : o, u = typeof i == "string" ? new Date(i || 0) : i;
  try {
    return bo(e, "time", t, a).formatToParts(u);
  } catch (l) {
    e.onError(new Je("Error formatting time.", e.locale, l));
  }
  return [];
}
var Py = [
  "style",
  "type",
  "fallback",
  "languageDisplay"
];
function Iy(e, t, r, n) {
  var i = e.locale, o = e.onError, a = Intl.DisplayNames;
  a || o(new Zt(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`, vt.MISSING_INTL_API));
  var u = Sr(n, Py);
  try {
    return t(i, u).of(r);
  } catch (l) {
    o(new Je("Error formatting display name.", i, l));
  }
}
var ky = [
  "type",
  "style"
], Rc = Date.now();
function Ny(e) {
  return "".concat(Rc, "_").concat(e, "_").concat(Rc);
}
function by(e, t, r, n) {
  n === void 0 && (n = {});
  var i = sp(e, t, r, n).reduce(function(o, a) {
    var u = a.value;
    return typeof u != "string" ? o.push(u) : typeof o[o.length - 1] == "string" ? o[o.length - 1] += u : o.push(u), o;
  }, []);
  return i.length === 1 ? i[0] : i.length === 0 ? "" : i;
}
function sp(e, t, r, n) {
  var i = e.locale, o = e.onError;
  n === void 0 && (n = {});
  var a = Intl.ListFormat;
  a || o(new Zt(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`, vt.MISSING_INTL_API));
  var u = Sr(n, ky);
  try {
    var l = {}, s = r.map(function(c, h) {
      if (typeof c == "object") {
        var f = Ny(h);
        return l[f] = c, f;
      }
      return String(c);
    });
    return t(i, u).formatToParts(s).map(function(c) {
      return c.type === "literal" ? c : I(I({}, c), { value: l[c.value] || c.value });
    });
  } catch (c) {
    o(new Je("Error formatting list.", i, c));
  }
  return r;
}
var Ry = ["type"];
function Ly(e, t, r, n) {
  var i = e.locale, o = e.onError;
  n === void 0 && (n = {}), Intl.PluralRules || o(new Zt(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, vt.MISSING_INTL_API));
  var a = Sr(n, Ry);
  try {
    return t(i, a).select(r);
  } catch (u) {
    o(new Je("Error formatting plural.", i, u));
  }
  return "other";
}
var My = ["numeric", "style"];
function Ay(e, t, r) {
  var n = e.locale, i = e.formats, o = e.onError;
  r === void 0 && (r = {});
  var a = r.format, u = !!a && Wl(i, "relative", a, o) || {}, l = Sr(r, My, u);
  return t(n, l);
}
function Hy(e, t, r, n, i) {
  i === void 0 && (i = {}), n || (n = "second");
  var o = Intl.RelativeTimeFormat;
  o || e.onError(new Zt(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`, vt.MISSING_INTL_API));
  try {
    return Ay(e, t, i).format(r, n);
  } catch (a) {
    e.onError(new Je("Error formatting relative time.", e.locale, a));
  }
  return String(r);
}
var Fy = [
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
function cp(e, t, r) {
  var n = e.locale, i = e.formats, o = e.onError;
  r === void 0 && (r = {});
  var a = r.format, u = a && Wl(i, "number", a, o) || {}, l = Sr(r, Fy, u);
  return t(n, l);
}
function By(e, t, r, n) {
  n === void 0 && (n = {});
  try {
    return cp(e, t, n).format(r);
  } catch (i) {
    e.onError(new Je("Error formatting number.", e.locale, i));
  }
  return String(r);
}
function $y(e, t, r, n) {
  n === void 0 && (n = {});
  try {
    return cp(e, t, n).formatToParts(r);
  } catch (i) {
    e.onError(new Je("Error formatting number.", e.locale, i));
  }
  return [];
}
function Uy(e) {
  var t = e ? e[Object.keys(e)[0]] : void 0;
  return typeof t == "string";
}
function jy(e) {
  e.onWarn && e.defaultRichTextElements && Uy(e.messages || {}) && e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.io/docs/getting-started/message-distribution`);
}
function zy(e, t) {
  var r = Ty(t), n = I(I({}, ap), e), i = n.locale, o = n.defaultLocale, a = n.onError;
  return i ? !Intl.NumberFormat.supportedLocalesOf(i).length && a ? a(new kc('Missing locale data for locale: "'.concat(i, '" in Intl.NumberFormat. Using default locale: "').concat(o, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : !Intl.DateTimeFormat.supportedLocalesOf(i).length && a && a(new kc('Missing locale data for locale: "'.concat(i, '" in Intl.DateTimeFormat. Using default locale: "').concat(o, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : (a && a(new yy('"locale" was not configured, using "'.concat(o, '" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))), n.locale = n.defaultLocale || "en"), jy(n), I(I({}, n), {
    formatters: r,
    formatNumber: By.bind(null, n, r.getNumberFormat),
    formatNumberToParts: $y.bind(null, n, r.getNumberFormat),
    formatRelativeTime: Hy.bind(null, n, r.getRelativeTimeFormat),
    formatDate: xy.bind(null, n, r.getDateTimeFormat),
    formatDateToParts: Dy.bind(null, n, r.getDateTimeFormat),
    formatTime: Cy.bind(null, n, r.getDateTimeFormat),
    formatDateTimeRange: Oy.bind(null, n, r.getDateTimeFormat),
    formatTimeToParts: _y.bind(null, n, r.getDateTimeFormat),
    formatPlural: Ly.bind(null, n, r.getPluralRules),
    // @ts-expect-error TODO: will get to this later
    formatMessage: Mu.bind(null, n, r),
    // @ts-expect-error TODO: will get to this later
    $t: Mu.bind(null, n, r),
    formatList: by.bind(null, n, r.getListFormat),
    formatListToParts: sp.bind(null, n, r.getListFormat),
    formatDisplayName: Iy.bind(null, n, r.getDisplayNames)
  });
}
function fp(e) {
  zh(e, "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.");
}
var dp = I(I({}, ap), { textComponent: w.Fragment });
function Gy(e) {
  return function(t) {
    return e(w.Children.toArray(t));
  };
}
function Au(e, t) {
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
var hp = { exports: {} }, X = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ce = typeof Symbol == "function" && Symbol.for, Xl = ce ? Symbol.for("react.element") : 60103, Ql = ce ? Symbol.for("react.portal") : 60106, Ro = ce ? Symbol.for("react.fragment") : 60107, Lo = ce ? Symbol.for("react.strict_mode") : 60108, Mo = ce ? Symbol.for("react.profiler") : 60114, Ao = ce ? Symbol.for("react.provider") : 60109, Ho = ce ? Symbol.for("react.context") : 60110, Yl = ce ? Symbol.for("react.async_mode") : 60111, Fo = ce ? Symbol.for("react.concurrent_mode") : 60111, Bo = ce ? Symbol.for("react.forward_ref") : 60112, $o = ce ? Symbol.for("react.suspense") : 60113, Vy = ce ? Symbol.for("react.suspense_list") : 60120, Uo = ce ? Symbol.for("react.memo") : 60115, jo = ce ? Symbol.for("react.lazy") : 60116, Wy = ce ? Symbol.for("react.block") : 60121, Xy = ce ? Symbol.for("react.fundamental") : 60117, Qy = ce ? Symbol.for("react.responder") : 60118, Yy = ce ? Symbol.for("react.scope") : 60119;
function Ue(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Xl:
        switch (e = e.type, e) {
          case Yl:
          case Fo:
          case Ro:
          case Mo:
          case Lo:
          case $o:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Ho:
              case Bo:
              case jo:
              case Uo:
              case Ao:
                return e;
              default:
                return t;
            }
        }
      case Ql:
        return t;
    }
  }
}
function pp(e) {
  return Ue(e) === Fo;
}
X.AsyncMode = Yl;
X.ConcurrentMode = Fo;
X.ContextConsumer = Ho;
X.ContextProvider = Ao;
X.Element = Xl;
X.ForwardRef = Bo;
X.Fragment = Ro;
X.Lazy = jo;
X.Memo = Uo;
X.Portal = Ql;
X.Profiler = Mo;
X.StrictMode = Lo;
X.Suspense = $o;
X.isAsyncMode = function(e) {
  return pp(e) || Ue(e) === Yl;
};
X.isConcurrentMode = pp;
X.isContextConsumer = function(e) {
  return Ue(e) === Ho;
};
X.isContextProvider = function(e) {
  return Ue(e) === Ao;
};
X.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Xl;
};
X.isForwardRef = function(e) {
  return Ue(e) === Bo;
};
X.isFragment = function(e) {
  return Ue(e) === Ro;
};
X.isLazy = function(e) {
  return Ue(e) === jo;
};
X.isMemo = function(e) {
  return Ue(e) === Uo;
};
X.isPortal = function(e) {
  return Ue(e) === Ql;
};
X.isProfiler = function(e) {
  return Ue(e) === Mo;
};
X.isStrictMode = function(e) {
  return Ue(e) === Lo;
};
X.isSuspense = function(e) {
  return Ue(e) === $o;
};
X.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Ro || e === Fo || e === Mo || e === Lo || e === $o || e === Vy || typeof e == "object" && e !== null && (e.$$typeof === jo || e.$$typeof === Uo || e.$$typeof === Ao || e.$$typeof === Ho || e.$$typeof === Bo || e.$$typeof === Xy || e.$$typeof === Qy || e.$$typeof === Yy || e.$$typeof === Wy);
};
X.typeOf = Ue;
hp.exports = X;
var Zy = hp.exports, vp = Zy, Ky = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, qy = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, mp = {};
mp[vp.ForwardRef] = Ky;
mp[vp.Memo] = qy;
var Zl = typeof window < "u" && !window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = w.createContext(null)) : w.createContext(null);
Zl.Consumer;
var Jy = Zl.Provider, e0 = Jy, t0 = Zl;
function Kl() {
  var e = w.useContext(t0);
  return fp(e), e;
}
var Hu;
(function(e) {
  e.formatDate = "FormattedDate", e.formatTime = "FormattedTime", e.formatNumber = "FormattedNumber", e.formatList = "FormattedList", e.formatDisplayName = "FormattedDisplayName";
})(Hu || (Hu = {}));
var Fu;
(function(e) {
  e.formatDate = "FormattedDateParts", e.formatTime = "FormattedTimeParts", e.formatNumber = "FormattedNumberParts", e.formatList = "FormattedListParts";
})(Fu || (Fu = {}));
function gp(e) {
  var t = function(r) {
    var n = Kl(), i = r.value, o = r.children, a = Kr(r, ["value", "children"]), u = typeof i == "string" ? new Date(i || 0) : i, l = e === "formatDate" ? n.formatDateToParts(u, a) : n.formatTimeToParts(u, a);
    return o(l);
  };
  return t.displayName = Fu[e], t;
}
function ti(e) {
  var t = function(r) {
    var n = Kl(), i = r.value, o = r.children, a = Kr(
      r,
      ["value", "children"]
    ), u = n[e](i, a);
    if (typeof o == "function")
      return o(u);
    var l = n.textComponent || w.Fragment;
    return w.createElement(l, null, u);
  };
  return t.displayName = Hu[e], t;
}
function yp(e) {
  return e && Object.keys(e).reduce(function(t, r) {
    var n = e[r];
    return t[r] = ip(n) ? Gy(n) : n, t;
  }, {});
}
var Lc = function(e, t, r, n) {
  for (var i = [], o = 4; o < arguments.length; o++)
    i[o - 4] = arguments[o];
  var a = yp(n), u = Mu.apply(void 0, Oe([
    e,
    t,
    r,
    a
  ], i, !1));
  return Array.isArray(u) ? w.Children.toArray(u) : u;
}, Mc = function(e, t) {
  var r = e.defaultRichTextElements, n = Kr(e, ["defaultRichTextElements"]), i = yp(r), o = zy(I(I(I({}, dp), n), { defaultRichTextElements: i }), t), a = {
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
  return I(I({}, o), {
    formatMessage: Lc.bind(
      null,
      a,
      // @ts-expect-error fix this
      o.formatters
    ),
    // @ts-expect-error fix this
    $t: Lc.bind(null, a, o.formatters)
  });
};
function Oa(e) {
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
var r0 = (
  /** @class */
  function(e) {
    qe(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.cache = up(), r.state = {
        cache: r.cache,
        intl: Mc(Oa(r.props), r.cache),
        prevConfig: Oa(r.props)
      }, r;
    }
    return t.getDerivedStateFromProps = function(r, n) {
      var i = n.prevConfig, o = n.cache, a = Oa(r);
      return Au(i, a) ? null : {
        intl: Mc(a, o),
        prevConfig: a
      };
    }, t.prototype.render = function() {
      return fp(this.state.intl), w.createElement(e0, { value: this.state.intl }, this.props.children);
    }, t.displayName = "IntlProvider", t.defaultProps = dp, t;
  }(w.PureComponent)
);
function n0(e, t) {
  var r = e.values, n = Kr(e, ["values"]), i = t.values, o = Kr(t, ["values"]);
  return Au(i, r) && Au(n, o);
}
function Sp(e) {
  var t = Kl(), r = t.formatMessage, n = t.textComponent, i = n === void 0 ? w.Fragment : n, o = e.id, a = e.description, u = e.defaultMessage, l = e.values, s = e.children, c = e.tagName, h = c === void 0 ? i : c, f = e.ignoreTag, m = { id: o, description: a, defaultMessage: u }, S = r(m, l, {
    ignoreTag: f
  });
  return typeof s == "function" ? s(Array.isArray(S) ? S : [S]) : h ? w.createElement(h, null, w.Children.toArray(S)) : w.createElement(w.Fragment, null, S);
}
Sp.displayName = "FormattedMessage";
var Ep = w.memo(Sp, n0);
Ep.displayName = "MemoizedFormattedMessage";
ti("formatDate");
ti("formatTime");
ti("formatNumber");
ti("formatList");
ti("formatDisplayName");
gp("formatDate");
gp("formatTime");
var wp = w.createContext({
  dragDropManager: void 0
}), We;
(function(e) {
  e.SOURCE = "SOURCE", e.TARGET = "TARGET";
})(We || (We = {}));
function A(e, t) {
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
var ql = "dnd-core/INIT_COORDS", zo = "dnd-core/BEGIN_DRAG", Jl = "dnd-core/PUBLISH_DRAG_SOURCE", Go = "dnd-core/HOVER", Vo = "dnd-core/DROP", Wo = "dnd-core/END_DRAG";
function Ac(e, t) {
  return {
    type: ql,
    payload: {
      sourceClientOffset: t || null,
      clientOffset: e || null
    }
  };
}
function Bi(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Bi = function(r) {
    return typeof r;
  } : Bi = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Bi(e);
}
function i0(e, t, r) {
  return t.split(".").reduce(function(n, i) {
    return n && n[i] ? n[i] : r || null;
  }, e);
}
function o0(e, t) {
  return e.filter(function(r) {
    return r !== t;
  });
}
function Tp(e) {
  return Bi(e) === "object";
}
function a0(e, t) {
  var r = /* @__PURE__ */ new Map(), n = function(a) {
    r.set(a, r.has(a) ? r.get(a) + 1 : 1);
  };
  e.forEach(n), t.forEach(n);
  var i = [];
  return r.forEach(function(o, a) {
    o === 1 && i.push(a);
  }), i;
}
function u0(e, t) {
  return e.filter(function(r) {
    return t.indexOf(r) > -1;
  });
}
var l0 = {
  type: ql,
  payload: {
    clientOffset: null,
    sourceClientOffset: null
  }
};
function s0(e) {
  return function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      publishSource: !0
    }, i = n.publishSource, o = i === void 0 ? !0 : i, a = n.clientOffset, u = n.getSourceClientOffset, l = e.getMonitor(), s = e.getRegistry();
    e.dispatch(Ac(a)), c0(r, l, s);
    var c = h0(r, l);
    if (c === null) {
      e.dispatch(l0);
      return;
    }
    var h = null;
    if (a) {
      if (!u)
        throw new Error("getSourceClientOffset must be defined");
      f0(u), h = u(c);
    }
    e.dispatch(Ac(a, h));
    var f = s.getSource(c), m = f.beginDrag(l, c);
    if (m != null) {
      d0(m), s.pinSource(c);
      var S = s.getSourceType(c);
      return {
        type: zo,
        payload: {
          itemType: S,
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
function c0(e, t, r) {
  A(!t.isDragging(), "Cannot call beginDrag while dragging."), e.forEach(function(n) {
    A(r.getSource(n), "Expected sourceIds to be registered.");
  });
}
function f0(e) {
  A(typeof e == "function", "When clientOffset is provided, getSourceClientOffset must be a function.");
}
function d0(e) {
  A(Tp(e), "Item must be an object.");
}
function h0(e, t) {
  for (var r = null, n = e.length - 1; n >= 0; n--)
    if (t.canDragSource(e[n])) {
      r = e[n];
      break;
    }
  return r;
}
function p0(e) {
  return function() {
    var r = e.getMonitor();
    if (r.isDragging())
      return {
        type: Jl
      };
  };
}
function Bu(e, t) {
  return t === null ? e === null : Array.isArray(e) ? e.some(function(r) {
    return r === t;
  }) : e === t;
}
function v0(e) {
  return function(r) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = n.clientOffset;
    m0(r);
    var o = r.slice(0), a = e.getMonitor(), u = e.getRegistry();
    g0(o, a, u);
    var l = a.getItemType();
    return y0(o, u, l), S0(o, a, u), {
      type: Go,
      payload: {
        targetIds: o,
        clientOffset: i || null
      }
    };
  };
}
function m0(e) {
  A(Array.isArray(e), "Expected targetIds to be an array.");
}
function g0(e, t, r) {
  A(t.isDragging(), "Cannot call hover while not dragging."), A(!t.didDrop(), "Cannot call hover after drop.");
  for (var n = 0; n < e.length; n++) {
    var i = e[n];
    A(e.lastIndexOf(i) === n, "Expected targetIds to be unique in the passed array.");
    var o = r.getTarget(i);
    A(o, "Expected targetIds to be registered.");
  }
}
function y0(e, t, r) {
  for (var n = e.length - 1; n >= 0; n--) {
    var i = e[n], o = t.getTargetType(i);
    Bu(o, r) || e.splice(n, 1);
  }
}
function S0(e, t, r) {
  e.forEach(function(n) {
    var i = r.getTarget(n);
    i.hover(t, n);
  });
}
function Hc(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Fc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Hc(Object(r), !0).forEach(function(n) {
      E0(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Hc(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function E0(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function w0(e) {
  return function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = e.getMonitor(), i = e.getRegistry();
    T0(n);
    var o = O0(n);
    o.forEach(function(a, u) {
      var l = x0(a, u, i, n), s = {
        type: Vo,
        payload: {
          dropResult: Fc(Fc({}, r), l)
        }
      };
      e.dispatch(s);
    });
  };
}
function T0(e) {
  A(e.isDragging(), "Cannot call drop while not dragging."), A(!e.didDrop(), "Cannot call drop twice during one drag operation.");
}
function x0(e, t, r, n) {
  var i = r.getTarget(e), o = i ? i.drop(n, e) : void 0;
  return C0(o), typeof o > "u" && (o = t === 0 ? {} : n.getDropResult()), o;
}
function C0(e) {
  A(typeof e > "u" || Tp(e), "Drop result must either be an object or undefined.");
}
function O0(e) {
  var t = e.getTargetIds().filter(e.canDropOnTarget, e);
  return t.reverse(), t;
}
function D0(e) {
  return function() {
    var r = e.getMonitor(), n = e.getRegistry();
    _0(r);
    var i = r.getSourceId();
    if (i != null) {
      var o = n.getSource(i, !0);
      o.endDrag(r, i), n.unpinSource();
    }
    return {
      type: Wo
    };
  };
}
function _0(e) {
  A(e.isDragging(), "Cannot call endDrag while not dragging.");
}
function P0(e) {
  return {
    beginDrag: s0(e),
    publishDragSource: p0(e),
    hover: v0(e),
    drop: w0(e),
    endDrag: D0(e)
  };
}
function I0(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function k0(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function N0(e, t, r) {
  return t && k0(e.prototype, t), e;
}
function vn(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var b0 = /* @__PURE__ */ function() {
  function e(t, r) {
    var n = this;
    I0(this, e), vn(this, "store", void 0), vn(this, "monitor", void 0), vn(this, "backend", void 0), vn(this, "isSetUp", !1), vn(this, "handleRefCountChange", function() {
      var i = n.store.getState().refCount > 0;
      n.backend && (i && !n.isSetUp ? (n.backend.setup(), n.isSetUp = !0) : !i && n.isSetUp && (n.backend.teardown(), n.isSetUp = !1));
    }), this.store = t, this.monitor = r, t.subscribe(this.handleRefCountChange);
  }
  return N0(e, [{
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
          for (var u = arguments.length, l = new Array(u), s = 0; s < u; s++)
            l[s] = arguments[s];
          var c = a.apply(r, l);
          typeof c < "u" && n(c);
        };
      }
      var o = P0(this);
      return Object.keys(o).reduce(function(a, u) {
        var l = o[u];
        return a[u] = i(l), a;
      }, {});
    }
  }, {
    key: "dispatch",
    value: function(r) {
      this.store.dispatch(r);
    }
  }]), e;
}();
function je(e) {
  return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. ";
}
var Bc = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}(), $c = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
}, Uc = {
  INIT: "@@redux/INIT" + $c(),
  REPLACE: "@@redux/REPLACE" + $c()
};
function R0(e) {
  if (typeof e != "object" || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function xp(e, t, r) {
  var n;
  if (typeof t == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function")
    throw new Error(je(0));
  if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
    if (typeof r != "function")
      throw new Error(je(1));
    return r(xp)(e, t);
  }
  if (typeof e != "function")
    throw new Error(je(2));
  var i = e, o = t, a = [], u = a, l = !1;
  function s() {
    u === a && (u = a.slice());
  }
  function c() {
    if (l)
      throw new Error(je(3));
    return o;
  }
  function h(g) {
    if (typeof g != "function")
      throw new Error(je(4));
    if (l)
      throw new Error(je(5));
    var O = !0;
    return s(), u.push(g), function() {
      if (O) {
        if (l)
          throw new Error(je(6));
        O = !1, s();
        var d = u.indexOf(g);
        u.splice(d, 1), a = null;
      }
    };
  }
  function f(g) {
    if (!R0(g))
      throw new Error(je(7));
    if (typeof g.type > "u")
      throw new Error(je(8));
    if (l)
      throw new Error(je(9));
    try {
      l = !0, o = i(o, g);
    } finally {
      l = !1;
    }
    for (var O = a = u, p = 0; p < O.length; p++) {
      var d = O[p];
      d();
    }
    return g;
  }
  function m(g) {
    if (typeof g != "function")
      throw new Error(je(10));
    i = g, f({
      type: Uc.REPLACE
    });
  }
  function S() {
    var g, O = h;
    return g = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function(d) {
        if (typeof d != "object" || d === null)
          throw new Error(je(11));
        function v() {
          d.next && d.next(c());
        }
        v();
        var y = O(v);
        return {
          unsubscribe: y
        };
      }
    }, g[Bc] = function() {
      return this;
    }, g;
  }
  return f({
    type: Uc.INIT
  }), n = {
    dispatch: f,
    subscribe: h,
    getState: c,
    replaceReducer: m
  }, n[Bc] = S, n;
}
var L0 = function(t, r) {
  return t === r;
};
function M0(e, t) {
  return !e && !t ? !0 : !e || !t ? !1 : e.x === t.x && e.y === t.y;
}
function A0(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : L0;
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; ++n)
    if (!r(e[n], t[n]))
      return !1;
  return !0;
}
function jc(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function zc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? jc(Object(r), !0).forEach(function(n) {
      H0(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : jc(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function H0(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var Gc = {
  initialSourceClientOffset: null,
  initialClientOffset: null,
  clientOffset: null
};
function F0() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Gc, t = arguments.length > 1 ? arguments[1] : void 0, r = t.payload;
  switch (t.type) {
    case ql:
    case zo:
      return {
        initialSourceClientOffset: r.sourceClientOffset,
        initialClientOffset: r.clientOffset,
        clientOffset: r.clientOffset
      };
    case Go:
      return M0(e.clientOffset, r.clientOffset) ? e : zc(zc({}, e), {}, {
        clientOffset: r.clientOffset
      });
    case Wo:
    case Vo:
      return Gc;
    default:
      return e;
  }
}
var es = "dnd-core/ADD_SOURCE", ts = "dnd-core/ADD_TARGET", rs = "dnd-core/REMOVE_SOURCE", Xo = "dnd-core/REMOVE_TARGET";
function B0(e) {
  return {
    type: es,
    payload: {
      sourceId: e
    }
  };
}
function $0(e) {
  return {
    type: ts,
    payload: {
      targetId: e
    }
  };
}
function U0(e) {
  return {
    type: rs,
    payload: {
      sourceId: e
    }
  };
}
function j0(e) {
  return {
    type: Xo,
    payload: {
      targetId: e
    }
  };
}
function Vc(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ze(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Vc(Object(r), !0).forEach(function(n) {
      z0(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Vc(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function z0(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var G0 = {
  itemType: null,
  item: null,
  sourceId: null,
  targetIds: [],
  dropResult: null,
  didDrop: !1,
  isSourcePublic: null
};
function V0() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : G0, t = arguments.length > 1 ? arguments[1] : void 0, r = t.payload;
  switch (t.type) {
    case zo:
      return ze(ze({}, e), {}, {
        itemType: r.itemType,
        item: r.item,
        sourceId: r.sourceId,
        isSourcePublic: r.isSourcePublic,
        dropResult: null,
        didDrop: !1
      });
    case Jl:
      return ze(ze({}, e), {}, {
        isSourcePublic: !0
      });
    case Go:
      return ze(ze({}, e), {}, {
        targetIds: r.targetIds
      });
    case Xo:
      return e.targetIds.indexOf(r.targetId) === -1 ? e : ze(ze({}, e), {}, {
        targetIds: o0(e.targetIds, r.targetId)
      });
    case Vo:
      return ze(ze({}, e), {}, {
        dropResult: r.dropResult,
        didDrop: !0,
        targetIds: []
      });
    case Wo:
      return ze(ze({}, e), {}, {
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
function W0() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, t = arguments.length > 1 ? arguments[1] : void 0;
  switch (t.type) {
    case es:
    case ts:
      return e + 1;
    case rs:
    case Xo:
      return e - 1;
    default:
      return e;
  }
}
var vo = [], ns = [];
vo.__IS_NONE__ = !0;
ns.__IS_ALL__ = !0;
function X0(e, t) {
  if (e === vo)
    return !1;
  if (e === ns || typeof t > "u")
    return !0;
  var r = u0(t, e);
  return r.length > 0;
}
function Q0() {
  var e = arguments.length > 1 ? arguments[1] : void 0;
  switch (e.type) {
    case Go:
      break;
    case es:
    case ts:
    case Xo:
    case rs:
      return vo;
    case zo:
    case Jl:
    case Wo:
    case Vo:
    default:
      return ns;
  }
  var t = e.payload, r = t.targetIds, n = r === void 0 ? [] : r, i = t.prevTargetIds, o = i === void 0 ? [] : i, a = a0(n, o), u = a.length > 0 || !A0(n, o);
  if (!u)
    return vo;
  var l = o[o.length - 1], s = n[n.length - 1];
  return l !== s && (l && a.push(l), s && a.push(s)), a;
}
function Y0() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
  return e + 1;
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
      Z0(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Wc(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Z0(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function K0() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
  return {
    dirtyHandlerIds: Q0(e.dirtyHandlerIds, {
      type: t.type,
      payload: Xc(Xc({}, t.payload), {}, {
        prevTargetIds: i0(e, "dragOperation.targetIds", [])
      })
    }),
    dragOffset: F0(e.dragOffset, t),
    refCount: W0(e.refCount, t),
    dragOperation: V0(e.dragOperation, t),
    stateId: Y0(e.stateId)
  };
}
function q0(e, t) {
  return {
    x: e.x + t.x,
    y: e.y + t.y
  };
}
function Cp(e, t) {
  return {
    x: e.x - t.x,
    y: e.y - t.y
  };
}
function J0(e) {
  var t = e.clientOffset, r = e.initialClientOffset, n = e.initialSourceClientOffset;
  return !t || !r || !n ? null : Cp(q0(t, n), r);
}
function eS(e) {
  var t = e.clientOffset, r = e.initialClientOffset;
  return !t || !r ? null : Cp(t, r);
}
function tS(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function rS(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function nS(e, t, r) {
  return t && rS(e.prototype, t), e;
}
function Qc(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var iS = /* @__PURE__ */ function() {
  function e(t, r) {
    tS(this, e), Qc(this, "store", void 0), Qc(this, "registry", void 0), this.store = t, this.registry = r;
  }
  return nS(e, [{
    key: "subscribeToStateChange",
    value: function(r) {
      var n = this, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        handlerIds: void 0
      }, o = i.handlerIds;
      A(typeof r == "function", "listener must be a function."), A(typeof o > "u" || Array.isArray(o), "handlerIds, when specified, must be an array of strings.");
      var a = this.store.getState().stateId, u = function() {
        var s = n.store.getState(), c = s.stateId;
        try {
          var h = c === a || c === a + 1 && !X0(s.dirtyHandlerIds, o);
          h || r();
        } finally {
          a = c;
        }
      };
      return this.store.subscribe(u);
    }
  }, {
    key: "subscribeToOffsetChange",
    value: function(r) {
      var n = this;
      A(typeof r == "function", "listener must be a function.");
      var i = this.store.getState().dragOffset, o = function() {
        var u = n.store.getState().dragOffset;
        u !== i && (i = u, r());
      };
      return this.store.subscribe(o);
    }
  }, {
    key: "canDragSource",
    value: function(r) {
      if (!r)
        return !1;
      var n = this.registry.getSource(r);
      return A(n, "Expected to find a valid source. sourceId=".concat(r)), this.isDragging() ? !1 : n.canDrag(this, r);
    }
  }, {
    key: "canDropOnTarget",
    value: function(r) {
      if (!r)
        return !1;
      var n = this.registry.getTarget(r);
      if (A(n, "Expected to find a valid target. targetId=".concat(r)), !this.isDragging() || this.didDrop())
        return !1;
      var i = this.registry.getTargetType(r), o = this.getItemType();
      return Bu(i, o) && n.canDrop(this, r);
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
      if (A(n, "Expected to find a valid source. sourceId=".concat(r)), !this.isDragging() || !this.isSourcePublic())
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
      if (a && !Bu(o, a))
        return !1;
      var u = this.getTargetIds();
      if (!u.length)
        return !1;
      var l = u.indexOf(r);
      return i ? l === u.length - 1 : l > -1;
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
      return J0(this.store.getState().dragOffset);
    }
  }, {
    key: "getDifferenceFromInitialOffset",
    value: function() {
      return eS(this.store.getState().dragOffset);
    }
  }]), e;
}(), oS = 0;
function aS() {
  return oS++;
}
function $i(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? $i = function(r) {
    return typeof r;
  } : $i = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, $i(e);
}
function uS(e) {
  A(typeof e.canDrag == "function", "Expected canDrag to be a function."), A(typeof e.beginDrag == "function", "Expected beginDrag to be a function."), A(typeof e.endDrag == "function", "Expected endDrag to be a function.");
}
function lS(e) {
  A(typeof e.canDrop == "function", "Expected canDrop to be a function."), A(typeof e.hover == "function", "Expected hover to be a function."), A(typeof e.drop == "function", "Expected beginDrag to be a function.");
}
function $u(e, t) {
  if (t && Array.isArray(e)) {
    e.forEach(function(r) {
      return $u(r, !1);
    });
    return;
  }
  A(typeof e == "string" || $i(e) === "symbol", t ? "Type can only be a string, a symbol, or an array of either." : "Type can only be a string or a symbol.");
}
const Yc = typeof global < "u" ? global : self, Op = Yc.MutationObserver || Yc.WebKitMutationObserver;
function Dp(e) {
  return function() {
    const r = setTimeout(i, 0), n = setInterval(i, 50);
    function i() {
      clearTimeout(r), clearInterval(n), e();
    }
  };
}
function sS(e) {
  let t = 1;
  const r = new Op(e), n = document.createTextNode("");
  return r.observe(n, {
    characterData: !0
  }), function() {
    t = -t, n.data = t;
  };
}
const cS = typeof Op == "function" ? (
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
  sS
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
  Dp
);
class fS {
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
    }, this.requestFlush = cS(this.flush), this.requestErrorThrow = Dp(() => {
      if (this.pendingErrors.length)
        throw this.pendingErrors.shift();
    });
  }
}
class dS {
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
class hS {
  create(t) {
    const r = this.freeTasks, n = r.length ? r.pop() : new dS(
      this.onError,
      (i) => r[r.length] = i
    );
    return n.task = t, n;
  }
  constructor(t) {
    this.onError = t, this.freeTasks = [];
  }
}
const _p = new fS(), pS = new hS(_p.registerPendingError);
function vS(e) {
  _p.enqueueTask(pS.create(e));
}
function mS(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function gS(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function yS(e, t, r) {
  return t && gS(e.prototype, t), e;
}
function xr(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function SS(e, t) {
  return xS(e) || TS(e, t) || wS(e, t) || ES();
}
function ES() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function wS(e, t) {
  if (e) {
    if (typeof e == "string") return Zc(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Zc(e, t);
  }
}
function Zc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function TS(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n = [], i = !0, o = !1, a, u;
    try {
      for (r = r.call(e); !(i = (a = r.next()).done) && (n.push(a.value), !(t && n.length === t)); i = !0)
        ;
    } catch (l) {
      o = !0, u = l;
    } finally {
      try {
        !i && r.return != null && r.return();
      } finally {
        if (o) throw u;
      }
    }
    return n;
  }
}
function xS(e) {
  if (Array.isArray(e)) return e;
}
function CS(e) {
  var t = aS().toString();
  switch (e) {
    case We.SOURCE:
      return "S".concat(t);
    case We.TARGET:
      return "T".concat(t);
    default:
      throw new Error("Unknown Handler Role: ".concat(e));
  }
}
function Kc(e) {
  switch (e[0]) {
    case "S":
      return We.SOURCE;
    case "T":
      return We.TARGET;
    default:
      A(!1, "Cannot parse handler ID: ".concat(e));
  }
}
function qc(e, t) {
  var r = e.entries(), n = !1;
  do {
    var i = r.next(), o = i.done, a = SS(i.value, 2), u = a[1];
    if (u === t)
      return !0;
    n = !!o;
  } while (!n);
  return !1;
}
var OS = /* @__PURE__ */ function() {
  function e(t) {
    mS(this, e), xr(this, "types", /* @__PURE__ */ new Map()), xr(this, "dragSources", /* @__PURE__ */ new Map()), xr(this, "dropTargets", /* @__PURE__ */ new Map()), xr(this, "pinnedSourceId", null), xr(this, "pinnedSource", null), xr(this, "store", void 0), this.store = t;
  }
  return yS(e, [{
    key: "addSource",
    value: function(r, n) {
      $u(r), uS(n);
      var i = this.addHandler(We.SOURCE, r, n);
      return this.store.dispatch(B0(i)), i;
    }
  }, {
    key: "addTarget",
    value: function(r, n) {
      $u(r, !0), lS(n);
      var i = this.addHandler(We.TARGET, r, n);
      return this.store.dispatch($0(i)), i;
    }
  }, {
    key: "containsHandler",
    value: function(r) {
      return qc(this.dragSources, r) || qc(this.dropTargets, r);
    }
  }, {
    key: "getSource",
    value: function(r) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      A(this.isSourceId(r), "Expected a valid source ID.");
      var i = n && r === this.pinnedSourceId, o = i ? this.pinnedSource : this.dragSources.get(r);
      return o;
    }
  }, {
    key: "getTarget",
    value: function(r) {
      return A(this.isTargetId(r), "Expected a valid target ID."), this.dropTargets.get(r);
    }
  }, {
    key: "getSourceType",
    value: function(r) {
      return A(this.isSourceId(r), "Expected a valid source ID."), this.types.get(r);
    }
  }, {
    key: "getTargetType",
    value: function(r) {
      return A(this.isTargetId(r), "Expected a valid target ID."), this.types.get(r);
    }
  }, {
    key: "isSourceId",
    value: function(r) {
      var n = Kc(r);
      return n === We.SOURCE;
    }
  }, {
    key: "isTargetId",
    value: function(r) {
      var n = Kc(r);
      return n === We.TARGET;
    }
  }, {
    key: "removeSource",
    value: function(r) {
      var n = this;
      A(this.getSource(r), "Expected an existing source."), this.store.dispatch(U0(r)), vS(function() {
        n.dragSources.delete(r), n.types.delete(r);
      });
    }
  }, {
    key: "removeTarget",
    value: function(r) {
      A(this.getTarget(r), "Expected an existing target."), this.store.dispatch(j0(r)), this.dropTargets.delete(r), this.types.delete(r);
    }
  }, {
    key: "pinSource",
    value: function(r) {
      var n = this.getSource(r);
      A(n, "Expected an existing source."), this.pinnedSourceId = r, this.pinnedSource = n;
    }
  }, {
    key: "unpinSource",
    value: function() {
      A(this.pinnedSource, "No source is pinned at the time."), this.pinnedSourceId = null, this.pinnedSource = null;
    }
  }, {
    key: "addHandler",
    value: function(r, n, i) {
      var o = CS(r);
      return this.types.set(o, n), r === We.SOURCE ? this.dragSources.set(o, i) : r === We.TARGET && this.dropTargets.set(o, i), o;
    }
  }]), e;
}();
function DS(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1, i = _S(n), o = new iS(i, new OS(i)), a = new b0(i, o), u = e(a, t, r);
  return a.receiveBackend(u), a;
}
function _S(e) {
  var t = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION__;
  return xp(K0, e && t && t({
    name: "dnd-core",
    instanceId: "dnd-core"
  }));
}
var PS = ["children"];
function IS(e, t) {
  return RS(e) || bS(e, t) || NS(e, t) || kS();
}
function kS() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function NS(e, t) {
  if (e) {
    if (typeof e == "string") return Jc(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Jc(e, t);
  }
}
function Jc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function bS(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n = [], i = !0, o = !1, a, u;
    try {
      for (r = r.call(e); !(i = (a = r.next()).done) && (n.push(a.value), !(t && n.length === t)); i = !0)
        ;
    } catch (l) {
      o = !0, u = l;
    } finally {
      try {
        !i && r.return != null && r.return();
      } finally {
        if (o) throw u;
      }
    }
    return n;
  }
}
function RS(e) {
  if (Array.isArray(e)) return e;
}
function LS(e, t) {
  if (e == null) return {};
  var r = MS(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      n = o[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function MS(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, o;
  for (o = 0; o < n.length; o++)
    i = n[o], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var ef = 0, Ui = Symbol.for("__REACT_DND_CONTEXT_INSTANCE__"), AS = w.memo(function(t) {
  var r = t.children, n = LS(t, PS), i = HS(n), o = IS(i, 2), a = o[0], u = o[1];
  return w.useEffect(function() {
    if (u) {
      var l = Pp();
      return ++ef, function() {
        --ef === 0 && (l[Ui] = null);
      };
    }
  }, []), k.jsx(wp.Provider, Object.assign({
    value: a
  }, {
    children: r
  }), void 0);
});
function HS(e) {
  if ("manager" in e) {
    var t = {
      dragDropManager: e.manager
    };
    return [t, !1];
  }
  var r = FS(e.backend, e.context, e.options, e.debugMode), n = !e.context;
  return [r, n];
}
function FS(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Pp(), r = arguments.length > 2 ? arguments[2] : void 0, n = arguments.length > 3 ? arguments[3] : void 0, i = t;
  return i[Ui] || (i[Ui] = {
    dragDropManager: DS(e, t, r, n)
  }), i[Ui];
}
function Pp() {
  return typeof global < "u" ? global : window;
}
function BS(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function $S(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function US(e, t, r) {
  return t && $S(e.prototype, t), e;
}
function tf(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var Da = !1, _a = !1, jS = /* @__PURE__ */ function() {
  function e(t) {
    BS(this, e), tf(this, "internalMonitor", void 0), tf(this, "sourceId", null), this.internalMonitor = t.getMonitor();
  }
  return US(e, [{
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
      A(!Da, "You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
      try {
        return Da = !0, this.internalMonitor.canDragSource(this.sourceId);
      } finally {
        Da = !1;
      }
    }
  }, {
    key: "isDragging",
    value: function() {
      if (!this.sourceId)
        return !1;
      A(!_a, "You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
      try {
        return _a = !0, this.internalMonitor.isDraggingSource(this.sourceId);
      } finally {
        _a = !1;
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
function zS(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function GS(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function VS(e, t, r) {
  return t && GS(e.prototype, t), e;
}
function rf(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var Pa = !1, WS = /* @__PURE__ */ function() {
  function e(t) {
    zS(this, e), rf(this, "internalMonitor", void 0), rf(this, "targetId", null), this.internalMonitor = t.getMonitor();
  }
  return VS(e, [{
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
      A(!Pa, "You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");
      try {
        return Pa = !0, this.internalMonitor.canDropOnTarget(this.targetId);
      } finally {
        Pa = !1;
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
function XS(e) {
  if (typeof e.type != "string") {
    var t = e.type.displayName || e.type.name || "the component";
    throw new Error("Only native element nodes can now be passed to React DnD connectors." + "You can either wrap ".concat(t, " into a <div>, or turn it into a ") + "drag source or a drop target itself.");
  }
}
function QS(e) {
  return function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    if (!w.isValidElement(t)) {
      var n = t;
      return e(n, r), n;
    }
    var i = t;
    XS(i);
    var o = r ? function(a) {
      return e(a, r);
    } : e;
    return YS(i, o);
  };
}
function Ip(e) {
  var t = {};
  return Object.keys(e).forEach(function(r) {
    var n = e[r];
    if (r.endsWith("Ref"))
      t[r] = e[r];
    else {
      var i = QS(n);
      t[r] = function() {
        return i;
      };
    }
  }), t;
}
function nf(e, t) {
  typeof e == "function" ? e(t) : e.current = t;
}
function YS(e, t) {
  var r = e.ref;
  return A(typeof r != "string", "Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"), r ? w.cloneElement(e, {
    ref: function(i) {
      nf(r, i), nf(t, i);
    }
  }) : w.cloneElement(e, {
    ref: t
  });
}
function ji(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ji = function(r) {
    return typeof r;
  } : ji = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, ji(e);
}
function Uu(e) {
  return (
    // eslint-disable-next-line no-prototype-builtins
    e !== null && ji(e) === "object" && Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function ju(e, t, r, n) {
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
  for (var u = Object.prototype.hasOwnProperty.bind(t), l = 0; l < o.length; l++) {
    var s = o[l];
    if (!u(s))
      return !1;
    var c = e[s], h = t[s];
    if (i = void 0, i === !1 || i === void 0 && c !== h)
      return !1;
  }
  return !0;
}
function ZS(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function KS(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function qS(e, t, r) {
  return t && KS(e.prototype, t), e;
}
function me(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var JS = /* @__PURE__ */ function() {
  function e(t) {
    var r = this;
    ZS(this, e), me(this, "hooks", Ip({
      dragSource: function(i, o) {
        r.clearDragSource(), r.dragSourceOptions = o || null, Uu(i) ? r.dragSourceRef = i : r.dragSourceNode = i, r.reconnectDragSource();
      },
      dragPreview: function(i, o) {
        r.clearDragPreview(), r.dragPreviewOptions = o || null, Uu(i) ? r.dragPreviewRef = i : r.dragPreviewNode = i, r.reconnectDragPreview();
      }
    })), me(this, "handlerId", null), me(this, "dragSourceRef", null), me(this, "dragSourceNode", void 0), me(this, "dragSourceOptionsInternal", null), me(this, "dragSourceUnsubscribe", void 0), me(this, "dragPreviewRef", null), me(this, "dragPreviewNode", void 0), me(this, "dragPreviewOptionsInternal", null), me(this, "dragPreviewUnsubscribe", void 0), me(this, "lastConnectedHandlerId", null), me(this, "lastConnectedDragSource", null), me(this, "lastConnectedDragSourceOptions", null), me(this, "lastConnectedDragPreview", null), me(this, "lastConnectedDragPreviewOptions", null), me(this, "backend", void 0), this.backend = t;
  }
  return qS(e, [{
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
      return !ju(this.lastConnectedDragSourceOptions, this.dragSourceOptions);
    }
  }, {
    key: "didDragPreviewOptionsChange",
    value: function() {
      return !ju(this.lastConnectedDragPreviewOptions, this.dragPreviewOptions);
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
function eE(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function tE(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function rE(e, t, r) {
  return t && tE(e.prototype, t), e;
}
function ct(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var nE = /* @__PURE__ */ function() {
  function e(t) {
    var r = this;
    eE(this, e), ct(this, "hooks", Ip({
      dropTarget: function(i, o) {
        r.clearDropTarget(), r.dropTargetOptions = o, Uu(i) ? r.dropTargetRef = i : r.dropTargetNode = i, r.reconnect();
      }
    })), ct(this, "handlerId", null), ct(this, "dropTargetRef", null), ct(this, "dropTargetNode", void 0), ct(this, "dropTargetOptionsInternal", null), ct(this, "unsubscribeDropTarget", void 0), ct(this, "lastConnectedHandlerId", null), ct(this, "lastConnectedDropTarget", null), ct(this, "lastConnectedDropTargetOptions", null), ct(this, "backend", void 0), this.backend = t;
  }
  return rE(e, [{
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
      return !ju(this.lastConnectedDropTargetOptions, this.dropTargetOptions);
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
function iE(e, t, r) {
  var n = r.getRegistry(), i = n.addTarget(e, t);
  return [i, function() {
    return n.removeTarget(i);
  }];
}
function oE(e, t, r) {
  var n = r.getRegistry(), i = n.addSource(e, t);
  return [i, function() {
    return n.removeSource(i);
  }];
}
var mr = typeof window < "u" ? w.useLayoutEffect : w.useEffect;
function zi(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? zi = function(r) {
    return typeof r;
  } : zi = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, zi(e);
}
function aE(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function uE(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function lE(e, t, r) {
  return t && uE(e.prototype, t), e;
}
function Ia(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var sE = /* @__PURE__ */ function() {
  function e(t, r, n) {
    aE(this, e), Ia(this, "spec", void 0), Ia(this, "monitor", void 0), Ia(this, "connector", void 0), this.spec = t, this.monitor = r, this.connector = n;
  }
  return lE(e, [{
    key: "beginDrag",
    value: function() {
      var r, n = this.spec, i = this.monitor, o = null;
      return zi(n.item) === "object" ? o = n.item : typeof n.item == "function" ? o = n.item(i) : o = {}, (r = o) !== null && r !== void 0 ? r : null;
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
function cE(e, t, r) {
  var n = w.useMemo(function() {
    return new sE(e, t, r);
  }, [t, r]);
  return w.useEffect(function() {
    n.spec = e;
  }, [e]), n;
}
function nn() {
  var e = w.useContext(wp), t = e.dragDropManager;
  return A(t != null, "Expected drag drop context"), t;
}
function fE(e) {
  return w.useMemo(function() {
    var t = e.type;
    return A(t != null, "spec.type must be defined"), t;
  }, [e]);
}
function dE(e, t) {
  return mE(e) || vE(e, t) || pE(e, t) || hE();
}
function hE() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function pE(e, t) {
  if (e) {
    if (typeof e == "string") return of(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return of(e, t);
  }
}
function of(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function vE(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n = [], i = !0, o = !1, a, u;
    try {
      for (r = r.call(e); !(i = (a = r.next()).done) && (n.push(a.value), !(t && n.length === t)); i = !0)
        ;
    } catch (l) {
      o = !0, u = l;
    } finally {
      try {
        !i && r.return != null && r.return();
      } finally {
        if (o) throw u;
      }
    }
    return n;
  }
}
function mE(e) {
  if (Array.isArray(e)) return e;
}
function gE(e, t, r) {
  var n = nn(), i = cE(e, t, r), o = fE(e);
  mr(function() {
    if (o != null) {
      var u = oE(o, i, n), l = dE(u, 2), s = l[0], c = l[1];
      return t.receiveHandlerId(s), r.receiveHandlerId(s), c;
    }
  }, [n, t, r, i, o]);
}
function yE(e) {
  return TE(e) || wE(e) || EE(e) || SE();
}
function SE() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function EE(e, t) {
  if (e) {
    if (typeof e == "string") return zu(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return zu(e, t);
  }
}
function wE(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function TE(e) {
  if (Array.isArray(e)) return zu(e);
}
function zu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function kp(e, t) {
  var r = yE(t || []);
  return t == null && typeof e != "function" && r.push(e), w.useMemo(function() {
    return typeof e == "function" ? e() : e;
  }, r);
}
function xE() {
  var e = nn();
  return w.useMemo(function() {
    return new jS(e);
  }, [e]);
}
function CE(e, t) {
  var r = nn(), n = w.useMemo(function() {
    return new JS(r.getBackend());
  }, [r]);
  return mr(function() {
    return n.dragSourceOptions = e || null, n.reconnect(), function() {
      return n.disconnectDragSource();
    };
  }, [n, e]), mr(function() {
    return n.dragPreviewOptions = t || null, n.reconnect(), function() {
      return n.disconnectDragPreview();
    };
  }, [n, t]), n;
}
var OE = function e(t, r) {
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
const DE = /* @__PURE__ */ Jr(OE);
function _E(e, t) {
  return NE(e) || kE(e, t) || IE(e, t) || PE();
}
function PE() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function IE(e, t) {
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
function kE(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n = [], i = !0, o = !1, a, u;
    try {
      for (r = r.call(e); !(i = (a = r.next()).done) && (n.push(a.value), !(t && n.length === t)); i = !0)
        ;
    } catch (l) {
      o = !0, u = l;
    } finally {
      try {
        !i && r.return != null && r.return();
      } finally {
        if (o) throw u;
      }
    }
    return n;
  }
}
function NE(e) {
  if (Array.isArray(e)) return e;
}
function bE(e, t, r) {
  var n = w.useState(function() {
    return t(e);
  }), i = _E(n, 2), o = i[0], a = i[1], u = w.useCallback(function() {
    var l = t(e);
    DE(o, l) || (a(l), r && r());
  }, [o, e, r]);
  return mr(u), [o, u];
}
function RE(e, t) {
  return HE(e) || AE(e, t) || ME(e, t) || LE();
}
function LE() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ME(e, t) {
  if (e) {
    if (typeof e == "string") return uf(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return uf(e, t);
  }
}
function uf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function AE(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n = [], i = !0, o = !1, a, u;
    try {
      for (r = r.call(e); !(i = (a = r.next()).done) && (n.push(a.value), !(t && n.length === t)); i = !0)
        ;
    } catch (l) {
      o = !0, u = l;
    } finally {
      try {
        !i && r.return != null && r.return();
      } finally {
        if (o) throw u;
      }
    }
    return n;
  }
}
function HE(e) {
  if (Array.isArray(e)) return e;
}
function FE(e, t, r) {
  var n = bE(e, t, r), i = RE(n, 2), o = i[0], a = i[1];
  return mr(function() {
    var l = e.getHandlerId();
    if (l != null)
      return e.subscribeToStateChange(a, {
        handlerIds: [l]
      });
  }, [e, a]), o;
}
function Np(e, t, r) {
  return FE(t, e || function() {
    return {};
  }, function() {
    return r.reconnect();
  });
}
function BE(e) {
  return w.useMemo(function() {
    return e.hooks.dragSource();
  }, [e]);
}
function $E(e) {
  return w.useMemo(function() {
    return e.hooks.dragPreview();
  }, [e]);
}
function UE(e, t) {
  var r = kp(e, t);
  A(!r.begin, "useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)");
  var n = xE(), i = CE(r.options, r.previewOptions);
  return gE(r, n, i), [Np(r.collect, n, i), BE(i), $E(i)];
}
function jE(e) {
  var t = e.accept;
  return w.useMemo(function() {
    return A(e.accept != null, "accept must be defined"), Array.isArray(t) ? t : [t];
  }, [t]);
}
function zE(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function GE(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function VE(e, t, r) {
  return t && GE(e.prototype, t), e;
}
function lf(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var WE = /* @__PURE__ */ function() {
  function e(t, r) {
    zE(this, e), lf(this, "spec", void 0), lf(this, "monitor", void 0), this.spec = t, this.monitor = r;
  }
  return VE(e, [{
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
function XE(e, t) {
  var r = w.useMemo(function() {
    return new WE(e, t);
  }, [t]);
  return w.useEffect(function() {
    r.spec = e;
  }, [e]), r;
}
function QE(e, t) {
  return qE(e) || KE(e, t) || ZE(e, t) || YE();
}
function YE() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ZE(e, t) {
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
function KE(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n = [], i = !0, o = !1, a, u;
    try {
      for (r = r.call(e); !(i = (a = r.next()).done) && (n.push(a.value), !(t && n.length === t)); i = !0)
        ;
    } catch (l) {
      o = !0, u = l;
    } finally {
      try {
        !i && r.return != null && r.return();
      } finally {
        if (o) throw u;
      }
    }
    return n;
  }
}
function qE(e) {
  if (Array.isArray(e)) return e;
}
function JE(e, t, r) {
  var n = nn(), i = XE(e, t), o = jE(e);
  mr(function() {
    var u = iE(o, i, n), l = QE(u, 2), s = l[0], c = l[1];
    return t.receiveHandlerId(s), r.receiveHandlerId(s), c;
  }, [n, t, i, r, o.map(function(a) {
    return a.toString();
  }).join("|")]);
}
function ew() {
  var e = nn();
  return w.useMemo(function() {
    return new WS(e);
  }, [e]);
}
function tw(e) {
  var t = nn(), r = w.useMemo(function() {
    return new nE(t.getBackend());
  }, [t]);
  return mr(function() {
    return r.dropTargetOptions = e || null, r.reconnect(), function() {
      return r.disconnectDropTarget();
    };
  }, [e]), r;
}
function rw(e) {
  return w.useMemo(function() {
    return e.hooks.dropTarget();
  }, [e]);
}
function nw(e, t) {
  var r = kp(e, t), n = ew(), i = tw(r.options);
  return JE(r, n, i), [Np(r.collect, n, i), rw(i)];
}
function bp(e) {
  var t = null, r = function() {
    return t == null && (t = e()), t;
  };
  return r;
}
function iw(e, t) {
  return e.filter(function(r) {
    return r !== t;
  });
}
function ow(e, t) {
  var r = /* @__PURE__ */ new Set(), n = function(a) {
    return r.add(a);
  };
  e.forEach(n), t.forEach(n);
  var i = [];
  return r.forEach(function(o) {
    return i.push(o);
  }), i;
}
function aw(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function uw(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function lw(e, t, r) {
  return t && uw(e.prototype, t), e;
}
function cf(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var sw = /* @__PURE__ */ function() {
  function e(t) {
    aw(this, e), cf(this, "entered", []), cf(this, "isNodeInDocument", void 0), this.isNodeInDocument = t;
  }
  return lw(e, [{
    key: "enter",
    value: function(r) {
      var n = this, i = this.entered.length, o = function(u) {
        return n.isNodeInDocument(u) && (!u.contains || u.contains(r));
      };
      return this.entered = ow(this.entered.filter(o), [r]), i === 0 && this.entered.length > 0;
    }
  }, {
    key: "leave",
    value: function(r) {
      var n = this.entered.length;
      return this.entered = iw(this.entered.filter(this.isNodeInDocument), r), n > 0 && this.entered.length === 0;
    }
  }, {
    key: "reset",
    value: function() {
      this.entered = [];
    }
  }]), e;
}(), cw = bp(function() {
  return /firefox/i.test(navigator.userAgent);
}), Rp = bp(function() {
  return !!window.safari;
});
function fw(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function dw(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function hw(e, t, r) {
  return t && dw(e.prototype, t), e;
}
function mn(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var ff = /* @__PURE__ */ function() {
  function e(t, r) {
    fw(this, e), mn(this, "xs", void 0), mn(this, "ys", void 0), mn(this, "c1s", void 0), mn(this, "c2s", void 0), mn(this, "c3s", void 0);
    for (var n = t.length, i = [], o = 0; o < n; o++)
      i.push(o);
    i.sort(function(D, G) {
      return t[D] < t[G] ? -1 : 1;
    });
    for (var a = [], u = [], l, s, c = 0; c < n - 1; c++)
      l = t[c + 1] - t[c], s = r[c + 1] - r[c], a.push(l), u.push(s / l);
    for (var h = [u[0]], f = 0; f < a.length - 1; f++) {
      var m = u[f], S = u[f + 1];
      if (m * S <= 0)
        h.push(0);
      else {
        l = a[f];
        var g = a[f + 1], O = l + g;
        h.push(3 * O / ((O + g) / m + (O + l) / S));
      }
    }
    h.push(u[u.length - 1]);
    for (var p = [], d = [], v, y = 0; y < h.length - 1; y++) {
      v = u[y];
      var T = h[y], x = 1 / a[y], C = T + h[y + 1] - v - v;
      p.push((v - T - C) * x), d.push(C * x * x);
    }
    this.xs = t, this.ys = r, this.c1s = h, this.c2s = p, this.c3s = d;
  }
  return hw(e, [{
    key: "interpolate",
    value: function(r) {
      var n = this.xs, i = this.ys, o = this.c1s, a = this.c2s, u = this.c3s, l = n.length - 1;
      if (r === n[l])
        return i[l];
      for (var s = 0, c = u.length - 1, h; s <= c; ) {
        h = Math.floor(0.5 * (s + c));
        var f = n[h];
        if (f < r)
          s = h + 1;
        else if (f > r)
          c = h - 1;
        else
          return i[h];
      }
      l = Math.max(0, c);
      var m = r - n[l], S = m * m;
      return i[l] + o[l] * m + a[l] * S + u[l] * m * S;
    }
  }]), e;
}(), pw = 1;
function Lp(e) {
  var t = e.nodeType === pw ? e : e.parentElement;
  if (!t)
    return null;
  var r = t.getBoundingClientRect(), n = r.top, i = r.left;
  return {
    x: i,
    y: n
  };
}
function Ti(e) {
  return {
    x: e.clientX,
    y: e.clientY
  };
}
function vw(e) {
  var t;
  return e.nodeName === "IMG" && (cw() || !((t = document.documentElement) !== null && t !== void 0 && t.contains(e)));
}
function mw(e, t, r, n) {
  var i = e ? t.width : r, o = e ? t.height : n;
  return Rp() && e && (o /= window.devicePixelRatio, i /= window.devicePixelRatio), {
    dragPreviewWidth: i,
    dragPreviewHeight: o
  };
}
function gw(e, t, r, n, i) {
  var o = vw(t), a = o ? e : t, u = Lp(a), l = {
    x: r.x - u.x,
    y: r.y - u.y
  }, s = e.offsetWidth, c = e.offsetHeight, h = n.anchorX, f = n.anchorY, m = mw(o, t, s, c), S = m.dragPreviewWidth, g = m.dragPreviewHeight, O = function() {
    var C = new ff([0, 0.5, 1], [
      // Dock to the top
      l.y,
      // Align at the center
      l.y / c * g,
      // Dock to the bottom
      l.y + g - c
    ]), D = C.interpolate(f);
    return Rp() && o && (D += (window.devicePixelRatio - 1) * g), D;
  }, p = function() {
    var C = new ff([0, 0.5, 1], [
      // Dock to the left
      l.x,
      // Align at the center
      l.x / s * S,
      // Dock to the right
      l.x + S - s
    ]);
    return C.interpolate(h);
  }, d = i.offsetX, v = i.offsetY, y = d === 0 || d, T = v === 0 || v;
  return {
    x: y ? d : p(),
    y: T ? v : O()
  };
}
var Mp = "__NATIVE_FILE__", Ap = "__NATIVE_URL__", Hp = "__NATIVE_TEXT__", Fp = "__NATIVE_HTML__";
const df = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FILE: Mp,
  HTML: Fp,
  TEXT: Hp,
  URL: Ap
}, Symbol.toStringTag, { value: "Module" }));
function ka(e, t, r) {
  var n = t.reduce(function(i, o) {
    return i || e.getData(o);
  }, "");
  return n ?? r;
}
var Cr;
function xi(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var Gu = (Cr = {}, xi(Cr, Mp, {
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
}), xi(Cr, Fp, {
  exposeProperties: {
    html: function(t, r) {
      return ka(t, r, "");
    },
    dataTransfer: function(t) {
      return t;
    }
  },
  matchesTypes: ["Html", "text/html"]
}), xi(Cr, Ap, {
  exposeProperties: {
    urls: function(t, r) {
      return ka(t, r, "").split(`
`);
    },
    dataTransfer: function(t) {
      return t;
    }
  },
  matchesTypes: ["Url", "text/uri-list"]
}), xi(Cr, Hp, {
  exposeProperties: {
    text: function(t, r) {
      return ka(t, r, "");
    },
    dataTransfer: function(t) {
      return t;
    }
  },
  matchesTypes: ["Text", "text/plain"]
}), Cr);
function yw(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Sw(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function Ew(e, t, r) {
  return t && Sw(e.prototype, t), e;
}
function hf(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var ww = /* @__PURE__ */ function() {
  function e(t) {
    yw(this, e), hf(this, "item", void 0), hf(this, "config", void 0), this.config = t, this.item = {}, this.initializeExposedProperties();
  }
  return Ew(e, [{
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
function Tw(e, t) {
  var r = new ww(Gu[e]);
  return r.loadDataTransfer(t), r;
}
function Na(e) {
  if (!e)
    return null;
  var t = Array.prototype.slice.call(e.types || []);
  return Object.keys(Gu).filter(function(r) {
    var n = Gu[r].matchesTypes;
    return n.some(function(i) {
      return t.indexOf(i) > -1;
    });
  })[0] || null;
}
function xw(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Cw(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function Ow(e, t, r) {
  return t && Cw(e.prototype, t), e;
}
function ba(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var Dw = /* @__PURE__ */ function() {
  function e(t, r) {
    xw(this, e), ba(this, "ownerDocument", null), ba(this, "globalContext", void 0), ba(this, "optionsArgs", void 0), this.globalContext = t, this.optionsArgs = r;
  }
  return Ow(e, [{
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
function pf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function vf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? pf(Object(r), !0).forEach(function(n) {
      B(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : pf(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function _w(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Pw(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function Iw(e, t, r) {
  return t && Pw(e.prototype, t), e;
}
function B(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var kw = /* @__PURE__ */ function() {
  function e(t, r, n) {
    var i = this;
    _w(this, e), B(this, "options", void 0), B(this, "actions", void 0), B(this, "monitor", void 0), B(this, "registry", void 0), B(this, "enterLeaveCounter", void 0), B(this, "sourcePreviewNodes", /* @__PURE__ */ new Map()), B(this, "sourcePreviewNodeOptions", /* @__PURE__ */ new Map()), B(this, "sourceNodes", /* @__PURE__ */ new Map()), B(this, "sourceNodeOptions", /* @__PURE__ */ new Map()), B(this, "dragStartSourceIds", null), B(this, "dropTargetIds", []), B(this, "dragEnterTargetIds", []), B(this, "currentNativeSource", null), B(this, "currentNativeHandle", null), B(this, "currentDragSourceNode", null), B(this, "altKeyPressed", !1), B(this, "mouseMoveTimeoutTimer", null), B(this, "asyncEndDragFrameId", null), B(this, "dragOverTargetIds", null), B(this, "lastClientOffset", null), B(this, "hoverRafId", null), B(this, "getSourceClientOffset", function(o) {
      var a = i.sourceNodes.get(o);
      return a && Lp(a) || null;
    }), B(this, "endDragNativeItem", function() {
      i.isDraggingNativeItem() && (i.actions.endDrag(), i.currentNativeHandle && i.registry.removeSource(i.currentNativeHandle), i.currentNativeHandle = null, i.currentNativeSource = null);
    }), B(this, "isNodeInDocument", function(o) {
      return !!(o && i.document && i.document.body && i.document.body.contains(o));
    }), B(this, "endDragIfSourceWasRemovedFromDOM", function() {
      var o = i.currentDragSourceNode;
      o == null || i.isNodeInDocument(o) || i.clearCurrentDragSourceNode() && i.monitor.isDragging() && i.actions.endDrag();
    }), B(this, "handleTopDragStartCapture", function() {
      i.clearCurrentDragSourceNode(), i.dragStartSourceIds = [];
    }), B(this, "handleTopDragStart", function(o) {
      if (!o.defaultPrevented) {
        var a = i.dragStartSourceIds;
        i.dragStartSourceIds = null;
        var u = Ti(o);
        i.monitor.isDragging() && i.actions.endDrag(), i.actions.beginDrag(a || [], {
          publishSource: !1,
          getSourceClientOffset: i.getSourceClientOffset,
          clientOffset: u
        });
        var l = o.dataTransfer, s = Na(l);
        if (i.monitor.isDragging()) {
          if (l && typeof l.setDragImage == "function") {
            var c = i.monitor.getSourceId(), h = i.sourceNodes.get(c), f = i.sourcePreviewNodes.get(c) || h;
            if (f) {
              var m = i.getCurrentSourcePreviewNodeOptions(), S = m.anchorX, g = m.anchorY, O = m.offsetX, p = m.offsetY, d = {
                anchorX: S,
                anchorY: g
              }, v = {
                offsetX: O,
                offsetY: p
              }, y = gw(h, f, u, d, v);
              l.setDragImage(f, y.x, y.y);
            }
          }
          try {
            l == null || l.setData("application/json", {});
          } catch {
          }
          i.setCurrentDragSourceNode(o.target);
          var T = i.getCurrentSourcePreviewNodeOptions(), x = T.captureDraggingState;
          x ? i.actions.publishDragSource() : setTimeout(function() {
            return i.actions.publishDragSource();
          }, 0);
        } else if (s)
          i.beginDragNativeItem(s);
        else {
          if (l && !l.types && (o.target && !o.target.hasAttribute || !o.target.hasAttribute("draggable")))
            return;
          o.preventDefault();
        }
      }
    }), B(this, "handleTopDragEndCapture", function() {
      i.clearCurrentDragSourceNode() && i.monitor.isDragging() && i.actions.endDrag();
    }), B(this, "handleTopDragEnterCapture", function(o) {
      i.dragEnterTargetIds = [];
      var a = i.enterLeaveCounter.enter(o.target);
      if (!(!a || i.monitor.isDragging())) {
        var u = o.dataTransfer, l = Na(u);
        l && i.beginDragNativeItem(l, u);
      }
    }), B(this, "handleTopDragEnter", function(o) {
      var a = i.dragEnterTargetIds;
      if (i.dragEnterTargetIds = [], !!i.monitor.isDragging()) {
        i.altKeyPressed = o.altKey, a.length > 0 && i.actions.hover(a, {
          clientOffset: Ti(o)
        });
        var u = a.some(function(l) {
          return i.monitor.canDropOnTarget(l);
        });
        u && (o.preventDefault(), o.dataTransfer && (o.dataTransfer.dropEffect = i.getCurrentDropEffect()));
      }
    }), B(this, "handleTopDragOverCapture", function() {
      i.dragOverTargetIds = [];
    }), B(this, "handleTopDragOver", function(o) {
      var a = i.dragOverTargetIds;
      if (i.dragOverTargetIds = [], !i.monitor.isDragging()) {
        o.preventDefault(), o.dataTransfer && (o.dataTransfer.dropEffect = "none");
        return;
      }
      i.altKeyPressed = o.altKey, i.lastClientOffset = Ti(o), i.hoverRafId === null && typeof requestAnimationFrame < "u" && (i.hoverRafId = requestAnimationFrame(function() {
        i.monitor.isDragging() && i.actions.hover(a || [], {
          clientOffset: i.lastClientOffset
        }), i.hoverRafId = null;
      }));
      var u = (a || []).some(function(l) {
        return i.monitor.canDropOnTarget(l);
      });
      u ? (o.preventDefault(), o.dataTransfer && (o.dataTransfer.dropEffect = i.getCurrentDropEffect())) : i.isDraggingNativeItem() ? o.preventDefault() : (o.preventDefault(), o.dataTransfer && (o.dataTransfer.dropEffect = "none"));
    }), B(this, "handleTopDragLeaveCapture", function(o) {
      i.isDraggingNativeItem() && o.preventDefault();
      var a = i.enterLeaveCounter.leave(o.target);
      a && i.isDraggingNativeItem() && setTimeout(function() {
        return i.endDragNativeItem();
      }, 0);
    }), B(this, "handleTopDropCapture", function(o) {
      if (i.dropTargetIds = [], i.isDraggingNativeItem()) {
        var a;
        o.preventDefault(), (a = i.currentNativeSource) === null || a === void 0 || a.loadDataTransfer(o.dataTransfer);
      } else Na(o.dataTransfer) && o.preventDefault();
      i.enterLeaveCounter.reset();
    }), B(this, "handleTopDrop", function(o) {
      var a = i.dropTargetIds;
      i.dropTargetIds = [], i.actions.hover(a, {
        clientOffset: Ti(o)
      }), i.actions.drop({
        dropEffect: i.getCurrentDropEffect()
      }), i.isDraggingNativeItem() ? i.endDragNativeItem() : i.monitor.isDragging() && i.actions.endDrag();
    }), B(this, "handleSelectStart", function(o) {
      var a = o.target;
      typeof a.dragDrop == "function" && (a.tagName === "INPUT" || a.tagName === "SELECT" || a.tagName === "TEXTAREA" || a.isContentEditable || (o.preventDefault(), a.dragDrop()));
    }), this.options = new Dw(r, n), this.actions = t.getActions(), this.monitor = t.getMonitor(), this.registry = t.getRegistry(), this.enterLeaveCounter = new sw(this.isNodeInDocument);
  }
  return Iw(e, [{
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
      }, u = function(s) {
        return o.handleSelectStart(s);
      };
      return n.setAttribute("draggable", "true"), n.addEventListener("dragstart", a), n.addEventListener("selectstart", u), function() {
        o.sourceNodes.delete(r), o.sourceNodeOptions.delete(r), n.removeEventListener("dragstart", a), n.removeEventListener("selectstart", u), n.setAttribute("draggable", "false");
      };
    }
  }, {
    key: "connectDropTarget",
    value: function(r, n) {
      var i = this, o = function(s) {
        return i.handleDragEnter(s, r);
      }, a = function(s) {
        return i.handleDragOver(s, r);
      }, u = function(s) {
        return i.handleDrop(s, r);
      };
      return n.addEventListener("dragenter", o), n.addEventListener("dragover", a), n.addEventListener("drop", u), function() {
        n.removeEventListener("dragenter", o), n.removeEventListener("dragover", a), n.removeEventListener("drop", u);
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
      return vf({
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
      return vf({
        anchorX: 0.5,
        anchorY: 0.5,
        captureDraggingState: !1
      }, n || {});
    }
  }, {
    key: "isDraggingNativeItem",
    value: function() {
      var r = this.monitor.getItemType();
      return Object.keys(df).some(function(n) {
        return df[n] === r;
      });
    }
  }, {
    key: "beginDragNativeItem",
    value: function(r, n) {
      this.clearCurrentDragSourceNode(), this.currentNativeSource = Tw(r, n), this.currentNativeHandle = this.registry.addSource(r, this.currentNativeSource), this.actions.beginDrag([this.currentNativeHandle]);
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
}(), Nw = function(t, r, n) {
  return new kw(t, r, n);
}, Bp = { exports: {} };
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
        var u = arguments[a];
        u && (o = i(o, n(u)));
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
      for (var u in o)
        t.call(o, u) && o[u] && (a = i(a, u));
      return a;
    }
    function i(o, a) {
      return a ? o ? o + " " + a : o + a : o;
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(Bp);
var bw = Bp.exports;
const Ke = /* @__PURE__ */ Jr(bw);
function Fe() {
  return Fe = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Fe.apply(null, arguments);
}
function Kt(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function mf(e) {
  return "default" + e.charAt(0).toUpperCase() + e.substr(1);
}
function Rw(e) {
  var t = Lw(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function Lw(e, t) {
  if (typeof e != "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function Mw(e, t, r) {
  var n = w.useRef(e !== void 0), i = w.useState(t), o = i[0], a = i[1], u = e !== void 0, l = n.current;
  return n.current = u, !u && l && o !== t && a(t), [u ? e : o, w.useCallback(function(s) {
    for (var c = arguments.length, h = new Array(c > 1 ? c - 1 : 0), f = 1; f < c; f++)
      h[f - 1] = arguments[f];
    r && r.apply(void 0, [s].concat(h)), a(s);
  }, [r])];
}
function Aw(e, t) {
  return Object.keys(t).reduce(function(r, n) {
    var i, o = r, a = o[mf(n)], u = o[n], l = Kt(o, [mf(n), n].map(Rw)), s = t[n], c = Mw(u, a, e[s]), h = c[0], f = c[1];
    return Fe({}, l, (i = {}, i[n] = h, i[s] = f, i));
  }, e);
}
function Vu(e, t) {
  return Vu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, Vu(e, t);
}
function Hw(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Vu(e, t);
}
var is = /* @__PURE__ */ b.createContext({});
is.Consumer;
is.Provider;
function os(e, t) {
  var r = w.useContext(is);
  return e || r[t] || t;
}
function Fw(e) {
  return e && e.ownerDocument || document;
}
function Bw(e) {
  var t = Fw(e);
  return t && t.defaultView || window;
}
function $w(e, t) {
  return Bw(e).getComputedStyle(e, t);
}
var Uw = /([A-Z])/g;
function jw(e) {
  return e.replace(Uw, "-$1").toLowerCase();
}
var zw = /^ms-/;
function Ci(e) {
  return jw(e).replace(zw, "-ms-");
}
var Gw = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function Vw(e) {
  return !!(e && Gw.test(e));
}
function $p(e, t) {
  var r = "", n = "";
  if (typeof t == "string")
    return e.style.getPropertyValue(Ci(t)) || $w(e).getPropertyValue(Ci(t));
  Object.keys(t).forEach(function(i) {
    var o = t[i];
    !o && o !== 0 ? e.style.removeProperty(Ci(i)) : Vw(i) ? n += i + "(" + o + ") " : r += Ci(i) + ": " + o + ";";
  }), n && (r += "transform: " + n + ";"), e.style.cssText += ";" + r;
}
var Up = { exports: {} }, Ww = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", Xw = Ww, Qw = Xw;
function jp() {
}
function zp() {
}
zp.resetWarningCache = jp;
var Yw = function() {
  function e(n, i, o, a, u, l) {
    if (l !== Qw) {
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
    checkPropTypes: zp,
    resetWarningCache: jp
  };
  return r.PropTypes = r, r;
};
Up.exports = Yw();
var Zw = Up.exports;
const R = /* @__PURE__ */ Jr(Zw), gf = {
  disabled: !1
}, Gp = b.createContext(null);
var Kw = function(t) {
  return t.scrollTop;
}, wn = "unmounted", nr = "exited", bt = "entering", ir = "entered", Wu = "exiting", Pt = /* @__PURE__ */ function(e) {
  Hw(t, e);
  function t(n, i) {
    var o;
    o = e.call(this, n, i) || this;
    var a = i, u = a && !a.isMounting ? n.enter : n.appear, l;
    return o.appearStatus = null, n.in ? u ? (l = nr, o.appearStatus = bt) : l = ir : n.unmountOnExit || n.mountOnEnter ? l = wn : l = nr, o.state = {
      status: l
    }, o.nextCallback = null, o;
  }
  t.getDerivedStateFromProps = function(i, o) {
    var a = i.in;
    return a && o.status === wn ? {
      status: nr
    } : null;
  };
  var r = t.prototype;
  return r.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, r.componentDidUpdate = function(i) {
    var o = null;
    if (i !== this.props) {
      var a = this.state.status;
      this.props.in ? a !== bt && a !== ir && (o = bt) : (a === bt || a === ir) && (o = Wu);
    }
    this.updateStatus(!1, o);
  }, r.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, r.getTimeouts = function() {
    var i = this.props.timeout, o, a, u;
    return o = a = u = i, i != null && typeof i != "number" && (o = i.exit, a = i.enter, u = i.appear !== void 0 ? i.appear : a), {
      exit: o,
      enter: a,
      appear: u
    };
  }, r.updateStatus = function(i, o) {
    if (i === void 0 && (i = !1), o !== null)
      if (this.cancelNextCallback(), o === bt) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var a = this.props.nodeRef ? this.props.nodeRef.current : Si.findDOMNode(this);
          a && Kw(a);
        }
        this.performEnter(i);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === nr && this.setState({
      status: wn
    });
  }, r.performEnter = function(i) {
    var o = this, a = this.props.enter, u = this.context ? this.context.isMounting : i, l = this.props.nodeRef ? [u] : [Si.findDOMNode(this), u], s = l[0], c = l[1], h = this.getTimeouts(), f = u ? h.appear : h.enter;
    if (!i && !a || gf.disabled) {
      this.safeSetState({
        status: ir
      }, function() {
        o.props.onEntered(s);
      });
      return;
    }
    this.props.onEnter(s, c), this.safeSetState({
      status: bt
    }, function() {
      o.props.onEntering(s, c), o.onTransitionEnd(f, function() {
        o.safeSetState({
          status: ir
        }, function() {
          o.props.onEntered(s, c);
        });
      });
    });
  }, r.performExit = function() {
    var i = this, o = this.props.exit, a = this.getTimeouts(), u = this.props.nodeRef ? void 0 : Si.findDOMNode(this);
    if (!o || gf.disabled) {
      this.safeSetState({
        status: nr
      }, function() {
        i.props.onExited(u);
      });
      return;
    }
    this.props.onExit(u), this.safeSetState({
      status: Wu
    }, function() {
      i.props.onExiting(u), i.onTransitionEnd(a.exit, function() {
        i.safeSetState({
          status: nr
        }, function() {
          i.props.onExited(u);
        });
      });
    });
  }, r.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, r.safeSetState = function(i, o) {
    o = this.setNextCallback(o), this.setState(i, o);
  }, r.setNextCallback = function(i) {
    var o = this, a = !0;
    return this.nextCallback = function(u) {
      a && (a = !1, o.nextCallback = null, i(u));
    }, this.nextCallback.cancel = function() {
      a = !1;
    }, this.nextCallback;
  }, r.onTransitionEnd = function(i, o) {
    this.setNextCallback(o);
    var a = this.props.nodeRef ? this.props.nodeRef.current : Si.findDOMNode(this), u = i == null && !this.props.addEndListener;
    if (!a || u) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var l = this.props.nodeRef ? [this.nextCallback] : [a, this.nextCallback], s = l[0], c = l[1];
      this.props.addEndListener(s, c);
    }
    i != null && setTimeout(this.nextCallback, i);
  }, r.render = function() {
    var i = this.state.status;
    if (i === wn)
      return null;
    var o = this.props, a = o.children;
    o.in, o.mountOnEnter, o.unmountOnExit, o.appear, o.enter, o.exit, o.timeout, o.addEndListener, o.onEnter, o.onEntering, o.onEntered, o.onExit, o.onExiting, o.onExited, o.nodeRef;
    var u = Kt(o, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ b.createElement(Gp.Provider, {
        value: null
      }, typeof a == "function" ? a(i, u) : b.cloneElement(b.Children.only(a), u))
    );
  }, t;
}(b.Component);
Pt.contextType = Gp;
Pt.propTypes = {};
function Or() {
}
Pt.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Or,
  onEntering: Or,
  onEntered: Or,
  onExit: Or,
  onExiting: Or,
  onExited: Or
};
Pt.UNMOUNTED = wn;
Pt.EXITED = nr;
Pt.ENTERING = bt;
Pt.ENTERED = ir;
Pt.EXITING = Wu;
const qw = !!(typeof window < "u" && window.document && window.document.createElement);
var Xu = !1, Qu = !1;
try {
  var Ra = {
    get passive() {
      return Xu = !0;
    },
    get once() {
      return Qu = Xu = !0;
    }
  };
  qw && (window.addEventListener("test", Ra, Ra), window.removeEventListener("test", Ra, !0));
} catch {
}
function Jw(e, t, r, n) {
  if (n && typeof n != "boolean" && !Qu) {
    var i = n.once, o = n.capture, a = r;
    !Qu && i && (a = r.__once || function u(l) {
      this.removeEventListener(t, u, o), r.call(this, l);
    }, r.__once = a), e.addEventListener(t, a, Xu ? n : o);
  }
  e.addEventListener(t, r, n);
}
function e1(e, t, r, n) {
  var i = n && typeof n != "boolean" ? n.capture : n;
  e.removeEventListener(t, r, i), r.__once && e.removeEventListener(t, r.__once, i);
}
function Vp(e, t, r, n) {
  return Jw(e, t, r, n), function() {
    e1(e, t, r, n);
  };
}
function t1(e, t, r, n) {
  if (n === void 0 && (n = !0), e) {
    var i = document.createEvent("HTMLEvents");
    i.initEvent(t, r, n), e.dispatchEvent(i);
  }
}
function r1(e) {
  var t = $p(e, "transitionDuration") || "", r = t.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(t) * r;
}
function n1(e, t, r) {
  r === void 0 && (r = 5);
  var n = !1, i = setTimeout(function() {
    n || t1(e, "transitionend", !0);
  }, t + r), o = Vp(e, "transitionend", function() {
    n = !0;
  }, {
    once: !0
  });
  return function() {
    clearTimeout(i), o();
  };
}
function i1(e, t, r, n) {
  r == null && (r = r1(e) || 0);
  var i = n1(e, r, n), o = Vp(e, "transitionend", t);
  return function() {
    i(), o();
  };
}
function yf(e, t) {
  var r = $p(e, t) || "", n = r.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(r) * n;
}
function o1(e, t) {
  var r = yf(e, "transitionDuration"), n = yf(e, "transitionDelay"), i = i1(e, function(o) {
    o.target === e && (i(), t(o));
  }, r + n);
}
function a1() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return t.filter(function(n) {
    return n != null;
  }).reduce(function(n, i) {
    if (typeof i != "function")
      throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");
    return n === null ? i : function() {
      for (var a = arguments.length, u = new Array(a), l = 0; l < a; l++)
        u[l] = arguments[l];
      n.apply(this, u), i.apply(this, u);
    };
  }, null);
}
function u1(e) {
  e.offsetHeight;
}
function l1(e) {
  const t = w.useRef(e);
  return w.useEffect(() => {
    t.current = e;
  }, [e]), t;
}
function s1(e) {
  const t = l1(e);
  return w.useCallback(function(...r) {
    return t.current && t.current(...r);
  }, [t]);
}
var c1 = ["className", "children"], Oi, f1 = {
  in: !1,
  timeout: 300,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1
}, d1 = (Oi = {}, Oi[bt] = "show", Oi[ir] = "show", Oi), Qo = /* @__PURE__ */ b.forwardRef(function(e, t) {
  var r = e.className, n = e.children, i = Kt(e, c1), o = w.useCallback(function(a) {
    u1(a), i.onEnter && i.onEnter(a);
  }, [i]);
  return /* @__PURE__ */ b.createElement(Pt, Fe({
    ref: t,
    addEndListener: o1
  }, i, {
    onEnter: o
  }), function(a, u) {
    return /* @__PURE__ */ b.cloneElement(n, Fe({}, u, {
      className: Ke("fade", r, n.props.className, d1[a])
    }));
  });
});
Qo.defaultProps = f1;
Qo.displayName = "Fade";
var h1 = ["label", "onClick", "className"], p1 = {
  label: R.string.isRequired,
  onClick: R.func
}, v1 = {
  label: "Close"
}, Yo = /* @__PURE__ */ b.forwardRef(function(e, t) {
  var r = e.label, n = e.onClick, i = e.className, o = Kt(e, h1);
  return /* @__PURE__ */ b.createElement("button", Fe({
    ref: t,
    type: "button",
    className: Ke("close", i),
    onClick: n
  }, o), /* @__PURE__ */ b.createElement("span", {
    "aria-hidden": "true"
  }, "×"), /* @__PURE__ */ b.createElement("span", {
    className: "sr-only"
  }, r));
});
Yo.displayName = "CloseButton";
Yo.propTypes = p1;
Yo.defaultProps = v1;
const Wp = function(e) {
  return /* @__PURE__ */ b.forwardRef(function(t, r) {
    return /* @__PURE__ */ b.createElement("div", Fe({}, t, {
      ref: r,
      className: Ke(t.className, e)
    }));
  });
};
var m1 = /-(.)/g;
function g1(e) {
  return e.replace(m1, function(t, r) {
    return r.toUpperCase();
  });
}
var y1 = ["className", "bsPrefix", "as"], S1 = function(t) {
  return t[0].toUpperCase() + g1(t).slice(1);
};
function Xp(e, t) {
  var r = t === void 0 ? {} : t, n = r.displayName, i = n === void 0 ? S1(e) : n, o = r.Component, a = r.defaultProps, u = /* @__PURE__ */ b.forwardRef(function(l, s) {
    var c = l.className, h = l.bsPrefix, f = l.as, m = f === void 0 ? o || "div" : f, S = Kt(l, y1), g = os(h, e);
    return /* @__PURE__ */ b.createElement(m, Fe({
      ref: s,
      className: Ke(c, g)
    }, S));
  });
  return u.defaultProps = a, u.displayName = i, u;
}
var E1 = ["as", "disabled", "onKeyDown"];
function Sf(e) {
  return !e || e.trim() === "#";
}
var as = /* @__PURE__ */ b.forwardRef(function(e, t) {
  var r = e.as, n = r === void 0 ? "a" : r, i = e.disabled, o = e.onKeyDown, a = Kt(e, E1), u = function(c) {
    var h = a.href, f = a.onClick;
    if ((i || Sf(h)) && c.preventDefault(), i) {
      c.stopPropagation();
      return;
    }
    f && f(c);
  }, l = function(c) {
    c.key === " " && (c.preventDefault(), u(c));
  };
  return Sf(a.href) && (a.role = a.role || "button", a.href = a.href || "#"), i && (a.tabIndex = -1, a["aria-disabled"] = !0), /* @__PURE__ */ b.createElement(n, Fe({
    ref: t
  }, a, {
    onClick: u,
    onKeyDown: a1(l, o)
  }));
});
as.displayName = "SafeAnchor";
var w1 = ["bsPrefix", "show", "closeLabel", "className", "children", "variant", "onClose", "dismissible", "transition"], Qp = Wp("h4");
Qp.displayName = "DivStyledAsH4";
var T1 = Xp("alert-heading", {
  Component: Qp
}), x1 = Xp("alert-link", {
  Component: as
}), C1 = {
  show: !0,
  transition: Qo,
  closeLabel: "Close alert"
}, Er = /* @__PURE__ */ b.forwardRef(function(e, t) {
  var r = Aw(e, {
    show: "onClose"
  }), n = r.bsPrefix, i = r.show, o = r.closeLabel, a = r.className, u = r.children, l = r.variant, s = r.onClose, c = r.dismissible, h = r.transition, f = Kt(r, w1), m = os(n, "alert"), S = s1(function(p) {
    s && s(!1, p);
  }), g = h === !0 ? Qo : h, O = /* @__PURE__ */ b.createElement("div", Fe({
    role: "alert"
  }, g ? void 0 : f, {
    ref: t,
    className: Ke(a, m, l && m + "-" + l, c && m + "-dismissible")
  }), c && /* @__PURE__ */ b.createElement(Yo, {
    onClick: S,
    label: o
  }), u);
  return g ? /* @__PURE__ */ b.createElement(g, Fe({
    unmountOnExit: !0
  }, f, {
    ref: void 0,
    in: i
  }), O) : i ? O : null;
});
Er.displayName = "Alert";
Er.defaultProps = C1;
Er.Link = x1;
Er.Heading = T1;
var O1 = ["bsPrefix", "variant", "size", "active", "className", "block", "type", "as"], D1 = {
  variant: "primary",
  active: !1,
  disabled: !1
}, us = /* @__PURE__ */ b.forwardRef(function(e, t) {
  var r = e.bsPrefix, n = e.variant, i = e.size, o = e.active, a = e.className, u = e.block, l = e.type, s = e.as, c = Kt(e, O1), h = os(r, "btn"), f = Ke(a, h, o && "active", n && h + "-" + n, u && h + "-block", i && h + "-" + i);
  if (c.href)
    return /* @__PURE__ */ b.createElement(as, Fe({}, c, {
      as: s,
      ref: t,
      className: Ke(f, c.disabled && "disabled")
    }));
  t && (c.ref = t), l ? c.type = l : s || (c.type = "button");
  var m = s || "button";
  return /* @__PURE__ */ b.createElement(m, Fe({}, c, {
    className: f
  }));
});
us.displayName = "Button";
us.defaultProps = D1;
var ls = {};
ls.match = b1;
ls.parse = Yp;
var _1 = /(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i, P1 = /\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/, I1 = /^(?:(min|max)-)?(.+)/, k1 = /(em|rem|px|cm|mm|in|pt|pc)?$/, N1 = /(dpi|dpcm|dppx)?$/;
function b1(e, t) {
  return Yp(e).some(function(r) {
    var n = r.inverse, i = r.type === "all" || t.type === r.type;
    if (i && n || !(i || n))
      return !1;
    var o = r.expressions.every(function(a) {
      var u = a.feature, l = a.modifier, s = a.value, c = t[u];
      if (!c)
        return !1;
      switch (u) {
        case "orientation":
        case "scan":
          return c.toLowerCase() === s.toLowerCase();
        case "width":
        case "height":
        case "device-width":
        case "device-height":
          s = Tf(s), c = Tf(c);
          break;
        case "resolution":
          s = wf(s), c = wf(c);
          break;
        case "aspect-ratio":
        case "device-aspect-ratio":
        case /* Deprecated */
        "device-pixel-ratio":
          s = Ef(s), c = Ef(c);
          break;
        case "grid":
        case "color":
        case "color-index":
        case "monochrome":
          s = parseInt(s, 10) || 1, c = parseInt(c, 10) || 0;
          break;
      }
      switch (l) {
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
function Yp(e) {
  return e.split(",").map(function(t) {
    t = t.trim();
    var r = t.match(_1), n = r[1], i = r[2], o = r[3] || "", a = {};
    return a.inverse = !!n && n.toLowerCase() === "not", a.type = i ? i.toLowerCase() : "all", o = o.match(/\([^\)]+\)/g) || [], a.expressions = o.map(function(u) {
      var l = u.match(P1), s = l[1].toLowerCase().match(I1);
      return {
        modifier: s[1],
        feature: s[2],
        value: l[2]
      };
    }), a;
  });
}
function Ef(e) {
  var t = Number(e), r;
  return t || (r = e.match(/^(\d+)\s*\/\s*(\d+)$/), t = r[1] / r[2]), t;
}
function wf(e) {
  var t = parseFloat(e), r = String(e).match(N1)[1];
  switch (r) {
    case "dpcm":
      return t / 2.54;
    case "dppx":
      return t * 96;
    default:
      return t;
  }
}
function Tf(e) {
  var t = parseFloat(e), r = String(e).match(k1)[1];
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
var R1 = ls.match, xf = typeof window < "u" ? window.matchMedia : null;
function L1(e, t, r) {
  var n = this, i;
  xf && !r && (i = xf.call(window, e)), i ? (this.matches = i.matches, this.media = i.media, i.addListener(u)) : (this.matches = R1(e, t), this.media = e), this.addListener = o, this.removeListener = a, this.dispose = l;
  function o(s) {
    i && i.addListener(s);
  }
  function a(s) {
    i && i.removeListener(s);
  }
  function u(s) {
    n.matches = s.matches, n.media = s.media;
  }
  function l() {
    i && i.removeListener(u);
  }
}
function M1(e, t, r) {
  return new L1(e, t, r);
}
var A1 = M1;
const H1 = /* @__PURE__ */ Jr(A1);
var F1 = /[A-Z]/g, B1 = /^ms-/, La = {};
function $1(e) {
  return "-" + e.toLowerCase();
}
function Zp(e) {
  if (La.hasOwnProperty(e))
    return La[e];
  var t = e.replace(F1, $1);
  return La[e] = B1.test(t) ? "-" + t : t;
}
function U1(e, t) {
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
const we = R.oneOfType([R.string, R.number]), Kp = {
  all: R.bool,
  grid: R.bool,
  aural: R.bool,
  braille: R.bool,
  handheld: R.bool,
  print: R.bool,
  projection: R.bool,
  screen: R.bool,
  tty: R.bool,
  tv: R.bool,
  embossed: R.bool
}, j1 = {
  orientation: R.oneOf(["portrait", "landscape"]),
  scan: R.oneOf(["progressive", "interlace"]),
  aspectRatio: R.string,
  deviceAspectRatio: R.string,
  height: we,
  deviceHeight: we,
  width: we,
  deviceWidth: we,
  color: R.bool,
  colorIndex: R.bool,
  monochrome: R.bool,
  resolution: we,
  type: Object.keys(Kp)
}, { type: ST, ...z1 } = j1, G1 = {
  minAspectRatio: R.string,
  maxAspectRatio: R.string,
  minDeviceAspectRatio: R.string,
  maxDeviceAspectRatio: R.string,
  minHeight: we,
  maxHeight: we,
  minDeviceHeight: we,
  maxDeviceHeight: we,
  minWidth: we,
  maxWidth: we,
  minDeviceWidth: we,
  maxDeviceWidth: we,
  minColor: R.number,
  maxColor: R.number,
  minColorIndex: R.number,
  maxColorIndex: R.number,
  minMonochrome: R.number,
  maxMonochrome: R.number,
  minResolution: we,
  maxResolution: we,
  ...z1
}, V1 = { ...Kp, ...G1 };
var W1 = {
  all: V1
};
const X1 = (e) => `not ${e}`, Q1 = (e, t) => {
  const r = Zp(e);
  return typeof t == "number" && (t = `${t}px`), t === !0 ? r : t === !1 ? X1(r) : `(${r}: ${t})`;
}, Y1 = (e) => e.join(" and "), Z1 = (e) => {
  const t = [];
  return Object.keys(W1.all).forEach((r) => {
    const n = e[r];
    n != null && t.push(Q1(r, n));
  }), Y1(t);
}, K1 = w.createContext(void 0), q1 = (e) => e.query || Z1(e), Cf = (e) => e ? Object.keys(e).reduce((r, n) => (r[Zp(n)] = e[n], r), {}) : void 0, qp = () => {
  const e = w.useRef(!1);
  return w.useEffect(() => {
    e.current = !0;
  }, []), e.current;
}, J1 = (e) => {
  const t = w.useContext(K1), r = () => Cf(e) || Cf(t), [n, i] = w.useState(r);
  return w.useEffect(() => {
    const o = r();
    U1(n, o) || i(o);
  }, [e, t]), n;
}, eT = (e) => {
  const t = () => q1(e), [r, n] = w.useState(t);
  return w.useEffect(() => {
    const i = t();
    r !== i && n(i);
  }, [e]), r;
}, tT = (e, t) => {
  const r = () => H1(e, t || {}, !!t), [n, i] = w.useState(r), o = qp();
  return w.useEffect(() => {
    if (o) {
      const a = r();
      return i(a), () => {
        a && a.dispose();
      };
    }
  }, [e, t]), n;
}, rT = (e) => {
  const [t, r] = w.useState(e.matches);
  return w.useEffect(() => {
    const n = (i) => {
      r(i.matches);
    };
    return e.addListener(n), r(e.matches), () => {
      e.removeListener(n);
    };
  }, [e]), t;
}, nT = (e, t, r) => {
  const n = J1(t), i = eT(e);
  if (!i)
    throw new Error("Invalid or missing MediaQuery!");
  const o = tT(i, n), a = rT(o);
  return qp(), w.useEffect(() => {
  }, [a]), w.useEffect(() => () => {
    o && o.dispose();
  }, []), a;
};
let Of = 0;
const iT = (e = "id") => (Of += 1, `${e}${Of}`);
let Tn = /* @__PURE__ */ function(e) {
  return e.MOVED = "MOVED", e.REMOVED = "REMOVED", e.FORMAT = "FORMAT", e.MOVED_AND_FORMAT = "MOVED_AND_FORMAT", e;
}({});
function oT(e, t, r) {
  class n extends b.Component {
    constructor(o) {
      super(o), this.transformProps = this.transformProps.bind(this);
    }
    warn(o) {
    }
    transformProps(o, a) {
      if (r[a] === void 0)
        return o[a] = this.props[a], o;
      const {
        deprType: u,
        newName: l,
        expect: s,
        transform: c,
        message: h
      } = r[a];
      switch (u) {
        case Tn.MOVED:
          this.warn(`${t}: The prop '${a}' has been moved to '${l}'.`), o[l] = this.props[a];
          break;
        case Tn.REMOVED:
          this.warn(`${t}: The prop '${a}' has been removed. '${h}'`);
          break;
        case Tn.FORMAT:
          s(this.props[a]) ? o[a] = this.props[a] : (this.warn(`${t}: The prop '${a}' expects a new format. ${h}`), o[a] = c(this.props[a], this.props));
          break;
        case Tn.MOVED_AND_FORMAT: {
          const f = this.props[a];
          let m = `${t}: The prop '${a}' has been moved to '${l}'`;
          s && !s(f) && (m += " and expects a new format"), m += h ? `. ${h}` : "", this.warn(m), o[l] = c ? c(f, this.props) : f;
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
      return /* @__PURE__ */ b.createElement(e, {
        ...a
      }, this.props.children || o);
    }
  }
  return (
    // eslint-disable-next-line react/static-property-placement
    ds(n, "displayName", `withDeprecatedProps(${t})`), n
  );
}
function ss({
  src: e,
  id: t,
  className: r,
  hidden: n,
  screenReaderText: i,
  svgAttrs: o,
  size: a,
  ...u
}) {
  if (e) {
    const l = o["aria-label"] || o["aria-labelledby"], s = {
      ...o
    };
    return l || (s["aria-label"] = void 0, s["aria-hidden"] = !0), /* @__PURE__ */ b.createElement("span", {
      className: Ke("pgn__icon", {
        [`pgn__icon__${a}`]: !!a
      }, r),
      id: t,
      ...u
    }, /* @__PURE__ */ b.createElement(e, {
      role: "img",
      focusable: !1,
      ...s
    }), i && /* @__PURE__ */ b.createElement("span", {
      className: "sr-only"
    }, i));
  }
  return /* @__PURE__ */ b.createElement(b.Fragment, null, /* @__PURE__ */ b.createElement("span", {
    id: t || iT("Icon"),
    className: r,
    "aria-hidden": n
  }), i && /* @__PURE__ */ b.createElement("span", {
    className: "sr-only"
  }, i));
}
ss.propTypes = {
  /**
   * An icon component to render.
   * Example import of a Paragon icon component: `import { Check } from '@openedx/paragon/icons';`
   */
  src: R.elementType,
  /** HTML element attributes to pass through to the underlying svg element */
  svgAttrs: R.shape({
    "aria-label": R.string,
    "aria-labelledby": R.string
  }),
  /**
   * the `id` property of the Icon element, by default this value is generated
   * with the `newId` function with the `prefix` of `Icon`.
   */
  id: R.string,
  /** The size of the icon. */
  size: R.oneOf(["xs", "sm", "md", "lg"]),
  /** A class name that will define what the Icon looks like. */
  className: R.string,
  /**
   * a boolean that determines the value of `aria-hidden` attribute on the Icon span,
   * this value is `true` by default.
   */
  hidden: R.bool,
  /**
   * a string or an element that will be used on a secondary span leveraging the `sr-only` style
   * for screenreader only text, this value is `undefined` by default. This value is recommended for use unless
   * the Icon is being used in a way that is purely decorative or provides no additional context for screen
   * reader users. This field should be thought of the same way an `alt` attribute would be used for `image` tags.
   */
  screenReaderText: R.oneOfType([R.string, R.element])
};
ss.defaultProps = {
  src: null,
  svgAttrs: {},
  id: void 0,
  hidden: !0,
  screenReaderText: void 0,
  size: void 0,
  className: void 0
};
const Yu = oT(ss, "Icon", {
  className: {
    deprType: Tn.FORMAT,
    expect: (e) => typeof e == "string",
    transform: (e) => Array.isArray(e) ? e.join(" ") : e,
    message: "It should be a string."
  }
}), aT = "576px", uT = {
  sm: aT
}, {
  sm: lT
} = uT, sT = {
  extraSmall: {
    maxWidth: parseFloat(lT) || 575.98
  }
}, cT = /* @__PURE__ */ b.forwardRef(({
  children: e,
  iconAfter: t,
  iconBefore: r,
  size: n,
  ...i
}, o) => /* @__PURE__ */ b.createElement(us, {
  size: n,
  ...i,
  className: Ke(i.className),
  ref: o
}, r && /* @__PURE__ */ b.createElement(Yu, {
  className: "btn-icon-before",
  size: n,
  src: r
}), e, t && /* @__PURE__ */ b.createElement(Yu, {
  className: "btn-icon-after",
  size: n,
  src: t
})));
function Zu({
  as: e = "div",
  isStacked: t = !1,
  children: r,
  ...n
}) {
  return /* @__PURE__ */ b.createElement(e, {
    ...n,
    className: Ke(n.className, {
      "pgn__action-row": !t,
      "pgn__action-row-stacked": t
    })
  }, r);
}
function fT() {
  return /* @__PURE__ */ b.createElement("span", {
    className: "pgn__action-row-spacer"
  });
}
Zu.Spacer = fT;
const cs = /* @__PURE__ */ w.forwardRef(({
  children: e,
  icon: t,
  actions: r,
  dismissible: n = !1,
  onClose: i = () => {
  },
  closeLabel: o,
  stacked: a = !1,
  show: u = !0,
  ...l
}, s) => {
  const [c, h] = w.useState(a), f = nT({
    maxWidth: sT.extraSmall.maxWidth
  }), m = "sm";
  w.useEffect(() => {
    h(f ? !0 : a);
  }, [f, a]);
  const S = w.useCallback((g) => {
    const O = {
      size: m,
      key: g.props.children
    };
    return /* @__PURE__ */ w.cloneElement(g, O);
  }, []);
  return /* @__PURE__ */ b.createElement(Er, {
    ...l,
    className: Ke("alert-content", l.className),
    show: u,
    ref: s
  }, t && /* @__PURE__ */ b.createElement(Yu, {
    src: t,
    className: "alert-icon"
  }), /* @__PURE__ */ b.createElement("div", {
    className: Ke({
      "pgn__alert-message-wrapper": !c,
      "pgn__alert-message-wrapper-stacked": c
    })
  }, /* @__PURE__ */ b.createElement("div", {
    className: "alert-message-content"
  }, e), (n || r && r.length > 0) && /* @__PURE__ */ b.createElement(Zu, {
    className: "pgn__alert-actions"
  }, /* @__PURE__ */ b.createElement(Zu.Spacer, null), n && /* @__PURE__ */ b.createElement(cT, {
    size: m,
    variant: "tertiary",
    onClick: i
  }, o || /* @__PURE__ */ b.createElement(Ep, {
    id: "pgn.Alert.closeLabel",
    defaultMessage: "Dismiss",
    description: "Label of a close button on Alert component"
  })), r && r.map(S))));
}), Jp = Wp("h4");
Jp.displayName = "DivStyledAsH4";
function dT({
  as: e = Jp,
  bsPrefix: t = "alert-heading",
  ...r
}) {
  return /* @__PURE__ */ b.createElement(Er.Heading, {
    as: e,
    bsPrefix: t,
    ...r
  });
}
function hT({
  as: e = "a",
  bsPrefix: t = "alert-link",
  ...r
}) {
  return /* @__PURE__ */ b.createElement(Er.Link, {
    as: e,
    bsPrefix: t,
    ...r
  });
}
cs.Heading = dT;
cs.Link = hT;
function pT() {
  const e = "csrftoken", t = document.cookie.split(";");
  for (let n = 0; n < t.length; n++) {
    const i = t[n].trim();
    if (i.startsWith(e + "="))
      return i.substring(e.length + 1);
  }
  const r = document.querySelector('meta[name="csrf-token"]');
  return r ? r.getAttribute("content") || "" : (console.warn("CSRF token not found"), "");
}
async function Ma(e, t, r = {}) {
  const n = e.handlerUrl(e.element, t);
  try {
    const i = await fetch(n, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": pT()
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
const ev = "TERM", vT = ({
  id: e,
  term: t,
  isMatched: r,
  isCorrect: n,
  disabled: i
}) => {
  const [{ isDragging: o }, a] = UE(() => ({
    type: ev,
    item: { id: e, term: t },
    canDrag: !i,
    collect: (l) => ({
      isDragging: l.isDragging()
    })
  }), [e, t, i]), u = () => {
    const l = ["draggable-term"];
    return o && l.push("dragging"), r && (l.push("matched"), n !== void 0 && l.push(n ? "correct" : "incorrect")), i && l.push("disabled"), l.join(" ");
  };
  return /* @__PURE__ */ k.jsxs(
    "div",
    {
      ref: a,
      className: u(),
      "data-id": e,
      "data-type": "term",
      style: {
        opacity: o ? 0.5 : 1,
        cursor: i ? "not-allowed" : "grab"
      },
      children: [
        /* @__PURE__ */ k.jsx("div", { className: "term-content", children: t }),
        r && /* @__PURE__ */ k.jsx("div", { className: "match-indicator", children: n ? "✓" : "✗" })
      ]
    }
  );
}, mT = ({
  id: e,
  description: t,
  matchedTerm: r,
  isCorrect: n,
  onDrop: i,
  disabled: o
}) => {
  const [{ isOver: a, canDrop: u }, l] = nw(() => ({
    accept: ev,
    drop: (c) => {
      o || i(c.id, e);
    },
    canDrop: () => !o,
    collect: (c) => ({
      isOver: c.isOver(),
      canDrop: c.canDrop()
    })
  }), [e, i, o]), s = () => {
    const c = ["droppable-description"];
    return a && u && c.push("hover"), r && (c.push("has-match"), n !== void 0 && c.push(n ? "correct" : "incorrect")), o && c.push("disabled"), c.join(" ");
  };
  return /* @__PURE__ */ k.jsxs(
    "div",
    {
      ref: l,
      className: s(),
      "data-id": e,
      "data-type": "description",
      style: {
        backgroundColor: a && u ? "#e3f2fd" : void 0
      },
      children: [
        /* @__PURE__ */ k.jsx("div", { className: "description-content", children: t }),
        r && /* @__PURE__ */ k.jsxs("div", { className: "matched-term", children: [
          /* @__PURE__ */ k.jsx("span", { className: "term-label", children: r }),
          n !== void 0 && /* @__PURE__ */ k.jsx("span", { className: "match-indicator", children: n ? "✓" : "✗" })
        ] }),
        !r && /* @__PURE__ */ k.jsx("div", { className: "drop-hint", children: "Drop term here" })
      ]
    }
  );
}, Df = ({
  termId: e,
  descriptionId: t,
  isCorrect: r,
  isAnswerOverlay: n = !1,
  containerRef: i
}) => {
  const [o, a] = w.useState(null), u = () => {
    if (!i.current) return;
    const T = i.current.querySelector(`[data-id="${e}"][data-type="term"]`), x = i.current.querySelector(`[data-id="${t}"][data-type="description"]`), C = i.current.querySelector(".connectors-svg");
    if (!T || !x || !C) return;
    const D = T.getBoundingClientRect(), G = x.getBoundingClientRect(), L = C.getBoundingClientRect(), ue = 5, et = D.right - L.left + ue, mt = D.top - L.top + D.height / 2, wr = G.left - L.left - ue, on = G.top - L.top + G.height / 2;
    a({ startX: et, startY: mt, endX: wr, endY: on });
  };
  if (w.useEffect(() => (u(), window.addEventListener("resize", u), () => window.removeEventListener("resize", u)), [e, t, i]), !o) return null;
  const { startX: l, startY: s, endX: c, endY: h } = o, f = l + (c - l) * 0.3, m = s, S = l + (c - l) * 0.7, O = `M ${l} ${s} C ${f} ${m}, ${S} ${h}, ${c} ${h}`, p = r ? "#178253" : "#c32d3a", d = n ? "5,5" : "none", v = n ? 2 : 3, y = n ? 0.6 : 0.8;
  return /* @__PURE__ */ k.jsxs("g", { className: "connector-line", children: [
    /* @__PURE__ */ k.jsx(
      "path",
      {
        d: O,
        stroke: p,
        strokeWidth: v,
        strokeDasharray: d,
        fill: "none",
        strokeLinecap: "round",
        opacity: y
      }
    ),
    /* @__PURE__ */ k.jsx(
      "circle",
      {
        cx: l,
        cy: s,
        r: "5",
        fill: p,
        opacity: y
      }
    ),
    /* @__PURE__ */ k.jsx(
      "circle",
      {
        cx: c,
        cy: h,
        r: "5",
        fill: p,
        opacity: y
      }
    )
  ] });
}, gT = ({
  runtime: e,
  displayName: t,
  questionText: r,
  terms: n,
  descriptions: i,
  studentMatches: o,
  currentScore: a,
  maxScore: u,
  attemptsRemaining: l,
  feedbackMode: s,
  lastSubmissionResult: c,
  isGraded: h
}) => {
  const [f, m] = w.useState(o), [S, g] = w.useState(a), [O, p] = w.useState(!1), [d, v] = w.useState(null), [y, T] = w.useState(!1), [x, C] = w.useState(null), [D, G] = w.useState(!1), [L, ue] = w.useState(null), et = w.useRef(null), mt = w.useCallback(async (N, F) => {
    if (s === "on_submit") {
      m((V) => ({
        ...V,
        [N]: {
          correct: !1,
          // Won't know until submission
          descriptionId: F
        }
      }));
      return;
    }
    p(!0), v(null);
    try {
      const V = await Ma(e, "submit_match", {
        pairId: N,
        descriptionId: F
      });
      V.success ? (m((Se) => ({
        ...Se,
        [N]: {
          correct: V.correct,
          descriptionId: F
        }
      })), g(V.score)) : v(V.error || "Failed to submit match");
    } catch (V) {
      console.error("Match submission error:", V), v("An error occurred. Please try again.");
    } finally {
      p(!1);
    }
  }, [e, s]), wr = w.useCallback(async () => {
    p(!0), v(null);
    try {
      const N = Object.entries(f).reduce((V, [Se, qt]) => (V[Se] = { descriptionId: qt.descriptionId }, V), {}), F = await Ma(e, "submit_all_matches", {
        matches: N
      });
      F.success ? (m(F.results), g(F.score), T(!0), C(F)) : v(F.error || "Failed to submit matches");
    } catch (N) {
      console.error("Batch submission error:", N), v("An error occurred. Please try again.");
    } finally {
      p(!1);
    }
  }, [e, f]), on = w.useCallback(() => {
    m({}), T(!1), C(null), G(!1), ue(null), v(null);
  }, []), an = w.useCallback(async () => {
    if (D) {
      G(!1), ue(null);
      return;
    }
    try {
      const N = await Ma(
        e,
        "get_correct_answers",
        {}
      );
      N.success && (ue(N.correctMatches), G(!0));
    } catch (N) {
      console.error("Error fetching correct answers:", N), v("Failed to load correct answers");
    }
  }, [e, D]), gt = n.length, _ = Object.values(f).filter((N) => N.correct).length, M = gt > 0 ? _ / gt * 100 : 0, H = _ === gt && gt > 0;
  return /* @__PURE__ */ k.jsx(AS, { backend: Nw, children: /* @__PURE__ */ k.jsxs("div", { className: "drag-drop-matching-student-view", ref: et, children: [
    /* @__PURE__ */ k.jsxs("div", { className: "problem-header", children: [
      /* @__PURE__ */ k.jsx("h3", { className: "problem-title", children: t }),
      /* @__PURE__ */ k.jsxs("div", { className: "problem-points", children: [
        u.toFixed(u % 1 === 0 ? 0 : 1),
        "/",
        u.toFixed(u % 1 === 0 ? 0 : 1),
        " point",
        u !== 1 ? "s" : "",
        " (",
        h ? "graded" : "ungraded",
        ")"
      ] })
    ] }),
    /* @__PURE__ */ k.jsx("div", { className: "problem-question", dangerouslySetInnerHTML: { __html: r } }),
    (d || l === 0) && /* @__PURE__ */ k.jsx(cs, { variant: "danger", className: "mb-3", children: d || (l === 0 ? "Maximum attempts exceeded" : null) }),
    s === "immediate" && /* @__PURE__ */ k.jsxs("div", { className: `score-display ${H ? "score-correct" : "score-incorrect"}`, children: [
      /* @__PURE__ */ k.jsx("strong", { children: "Current Score:" }),
      " ",
      S.toFixed(2),
      " / ",
      u.toFixed(2),
      "(",
      M.toFixed(0),
      "% - ",
      _,
      " of ",
      gt,
      " correct)"
    ] }),
    /* @__PURE__ */ k.jsxs("div", { className: "matching-container", children: [
      /* @__PURE__ */ k.jsxs("div", { className: "terms-column", children: [
        /* @__PURE__ */ k.jsx("h4", { className: "column-header", children: "Terms" }),
        /* @__PURE__ */ k.jsx("div", { className: "items-list", children: n.map((N) => {
          var V;
          const F = s === "immediate" || y;
          return /* @__PURE__ */ k.jsx(
            vT,
            {
              id: N.id,
              term: N.term,
              isMatched: !!f[N.id],
              isCorrect: F ? (V = f[N.id]) == null ? void 0 : V.correct : void 0,
              disabled: O || s === "on_submit" && y
            },
            N.id
          );
        }) })
      ] }),
      /* @__PURE__ */ k.jsx("div", { className: "connectors-column", children: /* @__PURE__ */ k.jsxs("svg", { className: "connectors-svg", width: "100%", height: "100%", children: [
        Object.entries(f).map(([N, F]) => {
          const V = s === "immediate" || y;
          return /* @__PURE__ */ k.jsx(
            Df,
            {
              termId: N,
              descriptionId: F.descriptionId,
              isCorrect: V ? F.correct : void 0,
              containerRef: et
            },
            N
          );
        }),
        D && L && Object.entries(L).map(([N, F]) => {
          const V = f[N];
          return V && V.correct && V.descriptionId === F ? null : /* @__PURE__ */ k.jsx(
            Df,
            {
              termId: N,
              descriptionId: F,
              isCorrect: !0,
              isAnswerOverlay: !0,
              containerRef: et
            },
            `answer-${N}`
          );
        })
      ] }) }),
      /* @__PURE__ */ k.jsxs("div", { className: "descriptions-column", children: [
        /* @__PURE__ */ k.jsx("h4", { className: "column-header", children: "Descriptions" }),
        /* @__PURE__ */ k.jsx("div", { className: "items-list", children: i.map((N, F) => {
          var lt, Jt;
          const V = (lt = Object.entries(f).find(
            ([fs, tv]) => tv.descriptionId === N.id
          )) == null ? void 0 : lt[0], Se = V ? n.find((fs) => fs.id === V) : void 0, qt = s === "immediate" || y;
          return /* @__PURE__ */ k.jsx(
            mT,
            {
              id: N.id,
              description: N.description,
              matchedTerm: Se == null ? void 0 : Se.term,
              isCorrect: qt && V ? (Jt = f[V]) == null ? void 0 : Jt.correct : void 0,
              onDrop: mt,
              disabled: O || s === "on_submit" && y
            },
            N.id
          );
        }) })
      ] })
    ] }),
    s === "on_submit" && /* @__PURE__ */ k.jsxs("div", { className: "action", children: [
      y && /* @__PURE__ */ k.jsxs("div", { className: "problem-action-buttons-wrapper", children: [
        /* @__PURE__ */ k.jsx("span", { className: "problem-action-button-wrapper", children: /* @__PURE__ */ k.jsx(
          "button",
          {
            type: "button",
            className: "reset problem-action-btn btn-link btn-small",
            onClick: on,
            disabled: O,
            "aria-label": "Reset problem",
            children: "Reset"
          }
        ) }),
        /* @__PURE__ */ k.jsx("span", { className: "problem-action-button-wrapper", children: /* @__PURE__ */ k.jsx(
          "button",
          {
            type: "button",
            className: "show problem-action-btn btn-link btn-small",
            onClick: an,
            disabled: O,
            "aria-label": D ? "Hide correct answers" : "Show correct answers",
            children: D ? "Hide Answer" : "Show Answer"
          }
        ) })
      ] }),
      /* @__PURE__ */ k.jsxs("div", { className: "submit-attempt-container", children: [
        /* @__PURE__ */ k.jsx(
          "button",
          {
            type: "button",
            className: "submit btn-brand",
            onClick: wr,
            disabled: O || Object.keys(f).length === 0 || y || l === 0,
            "aria-label": "Submit answer",
            children: O ? "Submitting..." : "Submit"
          }
        ),
        y && x && /* @__PURE__ */ k.jsxs("div", { className: "submission-feedback", children: [
          /* @__PURE__ */ k.jsxs("div", { className: `notification notification-${x.allCorrect ? "correct" : "incorrect"}`, children: [
            /* @__PURE__ */ k.jsx("div", { className: "notification-icon", children: x.allCorrect ? "✓" : "✗" }),
            /* @__PURE__ */ k.jsx("div", { className: "notification-content", children: /* @__PURE__ */ k.jsxs("p", { children: [
              x.allCorrect ? "Correct" : "Incorrect",
              "(",
              x.score.toFixed(2),
              "/",
              x.maxScore.toFixed(2),
              " point",
              x.maxScore !== 1 ? "s" : "",
              ")"
            ] }) })
          ] }),
          x.explanation && /* @__PURE__ */ k.jsxs("div", { className: "notification notification-explanation", children: [
            /* @__PURE__ */ k.jsx("div", { className: "notification-icon", children: "📋" }),
            /* @__PURE__ */ k.jsx("div", { className: "notification-content", children: /* @__PURE__ */ k.jsx("div", { dangerouslySetInnerHTML: { __html: x.explanation } }) })
          ] }),
          D && /* @__PURE__ */ k.jsxs("div", { className: "notification notification-answer", children: [
            /* @__PURE__ */ k.jsx("div", { className: "notification-icon", children: "ℹ" }),
            /* @__PURE__ */ k.jsx("div", { className: "notification-content", children: /* @__PURE__ */ k.jsx("p", { children: "Correct answers are displayed with green connectors" }) })
          ] })
        ] })
      ] })
    ] })
  ] }) });
}, ET = (e, t) => {
  $h(e).render(
    /* @__PURE__ */ k.jsxs(w.StrictMode, { children: [
      /* @__PURE__ */ k.jsx(r0, { locale: "en", children: /* @__PURE__ */ k.jsx(
        gT,
        {
          runtime: t.runtime,
          displayName: t.displayName,
          questionText: t.questionText,
          terms: t.terms,
          descriptions: t.descriptions,
          studentMatches: t.studentMatches,
          currentScore: t.currentScore,
          maxScore: t.maxScore,
          attemptsRemaining: t.attemptsRemaining,
          feedbackMode: t.feedbackMode,
          lastSubmissionResult: t.lastSubmissionResult
        }
      ) }),
      "    "
    ] })
  );
};
export {
  ET as renderBlock
};
//# sourceMappingURL=student-ui.js.map
