/*!
   JW Player version 8.5.2
   Copyright (c) 2018, JW Player, All Rights Reserved 
   This source code and its use and distribution is subject to the terms 
   and conditions of the applicable license agreement. 
   https://www.jwplayer.com/tos/
   This product includes portions of other software. For the full text of licenses, see
   https://ssl.p.jwpcdn.com/player/v/8.5.2/notice.txt
*/
window.jwplayer = function (t) {
  function e(e) {
    for (var n, i, o = e[0], u = e[1], a = 0, s = []; a < o.length; a++) i = o[a], r[i] && s.push(r[i][0]), r[i] = 0;
    for (n in u) Object.prototype.hasOwnProperty.call(u, n) && (t[n] = u[n]);
    for (c && c(e); s.length;) s.shift()()
  }
  var n = {},
    r = {
      17: 0
    };

  function i(e) {
    if (n[e]) return n[e].exports;
    var r = n[e] = {
      i: e,
      l: !1,
      exports: {}
    };
    return t[e].call(r.exports, r, r.exports, i), r.l = !0, r.exports
  }
  i.e = function (t) {
    var e = [],
      n = r[t];
    if (0 !== n)
      if (n) e.push(n[2]);
      else {
        var o = new Promise(function (e, i) {
          n = r[t] = [e, i]
        });
        e.push(n[2] = o);
        var u = document.getElementsByTagName("head")[0],
          a = document.createElement("script");
        a.charset = "utf-8", a.timeout = 35, i.nc && a.setAttribute("nonce", i.nc), a.src = i.p + "" + ({
          0: "related",
          1: "provider.html5",
          2: "jwplayer.controls",
          3: "polyfills.intersection-observer",
          4: "jwplayer.core",
          5: "jwplayer.core.controls",
          6: "jwplayer.core.controls.polyfills",
          7: "jwplayer.core.controls.html5",
          8: "jwplayer.core.controls.polyfills.html5",
          9: "provider.flash",
          10: "provider.hlsjs",
          11: "provider.shaka",
          12: "polyfills.webvtt",
          13: "jwplayer.vr",
          14: "provider.airplay",
          15: "provider.cast",
          16: "vttparser"
        } [t] || t) + ".js";
        var c = setTimeout(function () {
          s({
            type: "timeout",
            target: a
          })
        }, 35e3);

        function s(e) {
          a.onerror = a.onload = null, clearTimeout(c);
          var n = r[t];
          if (0 !== n) {
            if (n) {
              var i = e && ("load" === e.type ? "missing" : e.type),
                o = e && e.target && e.target.src,
                u = new Error("Loading chunk " + t + " failed.\n(" + i + ": " + o + ")");
              u.type = i, u.request = o, n[1](u)
            }
            r[t] = void 0
          }
        }
        a.onerror = a.onload = s, u.appendChild(a)
      }
    return Promise.all(e)
  }, i.m = t, i.c = n, i.d = function (t, e, n) {
    i.o(t, e) || Object.defineProperty(t, e, {
      configurable: !1,
      enumerable: !0,
      get: n
    })
  }, i.r = function (t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    })
  }, i.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t.default
    } : function () {
      return t
    };
    return i.d(e, "a", e), e
  }, i.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e)
  }, i.p = "", i.oe = function (t) {
    throw console.error(t), t
  };
  var o = window.webpackJsonpjwplayer = window.webpackJsonpjwplayer || [],
    u = o.push.bind(o);
  o.push = e, o = o.slice();
  for (var a = 0; a < o.length; a++) e(o[a]);
  var c = u;
  return i(i.s = 59)
}([function (t, e, n) {
  "use strict";
  n.d(e, "i", function () {
    return C
  }), n.d(e, "A", function () {
    return x
  }), n.d(e, "F", function () {
    return P
  }), n.d(e, "l", function () {
    return _
  }), n.d(e, "k", function () {
    return M
  }), n.d(e, "a", function () {
    return F
  }), n.d(e, "b", function () {
    return R
  }), n.d(e, "G", function () {
    return B
  }), n.d(e, "n", function () {
    return Q
  }), n.d(e, "H", function () {
    return X
  }), n.d(e, "e", function () {
    return W
  }), n.d(e, "J", function () {
    return U
  }), n.d(e, "m", function () {
    return J
  }), n.d(e, "h", function () {
    return K
  }), n.d(e, "p", function () {
    return Y
  }), n.d(e, "c", function () {
    return G
  }), n.d(e, "C", function () {
    return et
  }), n.d(e, "I", function () {
    return it
  }), n.d(e, "q", function () {
    return at
  }), n.d(e, "g", function () {
    return ct
  }), n.d(e, "j", function () {
    return st
  }), n.d(e, "D", function () {
    return lt
  }), n.d(e, "w", function () {
    return dt
  }), n.d(e, "t", function () {
    return gt
  }), n.d(e, "v", function () {
    return mt
  }), n.d(e, "x", function () {
    return bt
  }), n.d(e, "s", function () {
    return yt
  }), n.d(e, "u", function () {
    return jt
  }), n.d(e, "r", function () {
    return wt
  }), n.d(e, "y", function () {
    return Ot
  }), n.d(e, "o", function () {
    return kt
  }), n.d(e, "d", function () {
    return xt
  }), n.d(e, "E", function () {
    return St
  }), n.d(e, "B", function () {
    return Pt
  }), n.d(e, "z", function () {
    return Et
  });
  var r = n(16),
    i = {},
    o = Array.prototype,
    u = Object.prototype,
    a = Function.prototype,
    c = o.slice,
    s = o.concat,
    l = u.toString,
    f = u.hasOwnProperty,
    d = o.map,
    p = o.reduce,
    h = o.forEach,
    v = o.filter,
    g = o.every,
    m = o.some,
    b = o.indexOf,
    y = Array.isArray,
    j = Object.keys,
    w = a.bind,
    O = window.isFinite,
    C = function (t, e, n) {
      var r = void 0,
        o = void 0;
      if (null == t) return t;
      if (h && t.forEach === h) t.forEach(e, n);
      else if (t.length === +t.length) {
        for (r = 0, o = t.length; r < o; r++)
          if (e.call(n, t[r], r, t) === i) return
      } else {
        var u = ot(t);
        for (r = 0, o = u.length; r < o; r++)
          if (e.call(n, t[u[r]], u[r], t) === i) return
      }
      return t
    },
    k = C,
    x = function (t, e, n) {
      var r = [];
      return null == t ? r : d && t.map === d ? t.map(e, n) : (C(t, function (t, i, o) {
        r.push(e.call(n, t, i, o))
      }), r)
    },
    S = x,
    P = function (t, e, n, r) {
      var i = arguments.length > 2;
      if (null == t && (t = []), p && t.reduce === p) return r && (e = G(e, r)), i ? t.reduce(e, n) : t.reduce(e);
      if (C(t, function (t, o, u) {
          i ? n = e.call(r, n, t, o, u) : (n = t, i = !0)
        }), !i) throw new TypeError("Reduce of empty array with no initial value");
      return n
    },
    T = P,
    E = P,
    _ = function (t, e, n) {
      var r = void 0;
      return R(t, function (t, i, o) {
        if (e.call(n, t, i, o)) return r = t, !0
      }), r
    },
    A = _,
    M = function (t, e, n) {
      var r = [];
      return null == t ? r : v && t.filter === v ? t.filter(e, n) : (C(t, function (t, i, o) {
        e.call(n, t, i, o) && r.push(t)
      }), r)
    },
    N = M,
    F = function (t, e, n) {
      e || (e = kt);
      var r = !0;
      return null == t ? r : g && t.every === g ? t.every(e, n) : (C(t, function (t, o, u) {
        if (!(r = r && e.call(n, t, o, u))) return i
      }), !!r)
    },
    I = F,
    R = function (t, e, n) {
      e || (e = kt);
      var r = !1;
      return null == t ? r : m && t.some === m ? t.some(e, n) : (C(t, function (t, o, u) {
        if (r || (r = e.call(n, t, o, u))) return i
      }), !!r)
    },
    L = R,
    B = function (t) {
      return null == t ? 0 : t.length === +t.length ? t.length : ot(t).length
    },
    D = function (t, e) {
      var n = void 0;
      return function () {
        return --t > 0 && (n = e.apply(this, arguments)), t <= 1 && (e = null), n
      }
    },
    z = function (t) {
      return null == t ? kt : gt(t) ? t : St(t)
    },
    q = function (t) {
      return function (e, n, r) {
        var i = {};
        return n = z(n), C(e, function (o, u) {
          var a = n.call(r, o, u, e);
          t(i, a, o)
        }), i
      }
    },
    Q = q(function (t, e, n) {
      Ct(t, e) ? t[e].push(n) : t[e] = [n]
    }),
    V = q(function (t, e, n) {
      t[e] = n
    }),
    X = function (t, e, n, r) {
      for (var i = (n = z(n)).call(r, e), o = 0, u = t.length; o < u;) {
        var a = o + u >>> 1;
        n.call(r, t[a]) < i ? o = a + 1 : u = a
      }
      return o
    },
    W = function (t, e) {
      return null != t && (t.length !== +t.length && (t = ut(t)), Y(t, e) >= 0)
    },
    H = W,
    U = function (t, e) {
      return M(t, Pt(e))
    },
    J = function (t, e) {
      return _(t, Pt(e))
    },
    K = function (t) {
      var e = s.apply(o, c.call(arguments, 1));
      return M(t, function (t) {
        return !W(e, t)
      })
    },
    Y = function (t, e, n) {
      if (null == t) return -1;
      var r = 0,
        i = t.length;
      if (n) {
        if ("number" != typeof n) return t[r = X(t, e)] === e ? r : -1;
        r = n < 0 ? Math.max(0, i + n) : n
      }
      if (b && t.indexOf === b) return t.indexOf(e, n);
      for (; r < i; r++)
        if (t[r] === e) return r;
      return -1
    },
    $ = function () {},
    G = function (t, e) {
      var n = void 0,
        r = void 0;
      if (w && t.bind === w) return w.apply(t, c.call(arguments, 1));
      if (!gt(t)) throw new TypeError;
      return n = c.call(arguments, 2), r = function () {
        if (!(this instanceof r)) return t.apply(e, n.concat(c.call(arguments)));
        $.prototype = t.prototype;
        var i = new $;
        $.prototype = null;
        var o = t.apply(i, n.concat(c.call(arguments)));
        return Object(o) === o ? o : i
      }
    },
    Z = function (t) {
      var e = c.call(arguments, 1);
      return function () {
        for (var n = 0, r = e.slice(), i = 0, o = r.length; i < o; i++) Ct(r[i], "partial") && (r[i] = arguments[n++]);
        for (; n < arguments.length;) r.push(arguments[n++]);
        return t.apply(this, r)
      }
    },
    tt = Z(D, 2),
    et = function (t, e) {
      var n = {};
      return e || (e = kt),
        function () {
          var r = e.apply(this, arguments);
          return Ct(n, r) ? n[r] : n[r] = t.apply(this, arguments)
        }
    },
    nt = function (t, e) {
      var n = c.call(arguments, 2);
      return setTimeout(function () {
        return t.apply(null, n)
      }, e)
    },
    rt = Z(nt, {
      partial: Z
    }, 1),
    it = function (t, e, n) {
      var r = void 0,
        i = void 0,
        o = void 0,
        u = null,
        a = 0;
      n || (n = {});
      var c = function () {
        a = !1 === n.leading ? 0 : Tt(), u = null, o = t.apply(r, i), r = i = null
      };
      return function () {
        a || !1 !== n.leading || (a = Tt);
        var s = e - (Tt - a);
        return r = this, i = arguments, s <= 0 ? (clearTimeout(u), u = null, a = Tt, o = t.apply(r, i), r = i = null) : u || !1 === n.trailing || (u = setTimeout(c, s)), o
      }
    },
    ot = function (t) {
      if (!dt(t)) return [];
      if (j) return j(t);
      var e = [];
      for (var n in t) Ct(t, n) && e.push(n);
      return e
    },
    ut = function (t) {
      for (var e = ot(t), n = ot.length, r = Array(n), i = 0; i < n; i++) r[i] = t[e[i]];
      return r
    },
    at = function (t) {
      for (var e = {}, n = ot(t), r = 0, i = n.length; r < i; r++) e[t[n[r]]] = n[r];
      return e
    },
    ct = function (t) {
      return C(c.call(arguments, 1), function (e) {
        if (e)
          for (var n in e) void 0 === t[n] && (t[n] = e[n])
      }), t
    },
    st = Object.assign || function (t) {
      return C(c.call(arguments, 1), function (e) {
        if (e)
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
      }), t
    },
    lt = function (t) {
      var e = {},
        n = s.apply(o, c.call(arguments, 1));
      return C(n, function (n) {
        n in t && (e[n] = t[n])
      }), e
    },
    ft = y || function (t) {
      return "[object Array]" == l.call(t)
    },
    dt = function (t) {
      return t === Object(t)
    },
    pt = [];
  C(["Function", "String", "Number", "Date", "RegExp"], function (t) {
    pt[t] = function (e) {
      return l.call(e) == "[object " + t + "]"
    }
  }), pt.Function = function (t) {
    return "function" == typeof t
  };
  var ht = pt.Date,
    vt = pt.RegExp,
    gt = pt.Function,
    mt = pt.Number,
    bt = pt.String,
    yt = function (t) {
      return O(t) && !jt(parseFloat(t))
    },
    jt = function (t) {
      return mt(t) && t != +t
    },
    wt = function (t) {
      return !0 === t || !1 === t || "[object Boolean]" == l.call(t)
    },
    Ot = function (t) {
      return void 0 === t
    },
    Ct = function (t, e) {
      return f.call(t, e)
    },
    kt = function (t) {
      return t
    },
    xt = function (t) {
      return function () {
        return t
      }
    },
    St = function (t) {
      return function (e) {
        return e[t]
      }
    },
    Pt = function (t) {
      return function (e) {
        if (e === t) return !0;
        for (var n in t)
          if (t[n] !== e[n]) return !1;
        return !0
      }
    },
    Tt = r.a,
    Et = function (t) {
      return mt(t) && !jt(t)
    };
  e.f = {
    after: function (t, e) {
      return function () {
        if (--t < 1) return e.apply(this, arguments)
      }
    },
    all: F,
    any: R,
    before: D,
    bind: G,
    clone: function (t) {
      return dt(t) ? ft(t) ? t.slice() : st({}, t) : t
    },
    collect: S,
    compact: function (t) {
      return M(t, kt)
    },
    constant: xt,
    contains: W,
    defaults: ct,
    defer: rt,
    delay: nt,
    detect: A,
    difference: K,
    each: C,
    every: I,
    extend: st,
    filter: M,
    find: _,
    findWhere: J,
    foldl: T,
    forEach: k,
    groupBy: Q,
    has: Ct,
    identity: kt,
    include: H,
    indexBy: V,
    indexOf: Y,
    inject: E,
    invert: at,
    isArray: ft,
    isBoolean: wt,
    isDate: ht,
    isFinite: yt,
    isFunction: gt,
    isNaN: jt,
    isNull: function (t) {
      return null === t
    },
    isNumber: mt,
    isObject: dt,
    isRegExp: vt,
    isString: bt,
    isUndefined: Ot,
    isValidNumber: Et,
    keys: ot,
    last: function (t, e, n) {
      if (null != t) return null == e || n ? t[t.length - 1] : c.call(t, Math.max(t.length - e, 0))
    },
    map: x,
    matches: Pt,
    max: function (t, e, n) {
      if (!e && ft(t) && t[0] === +t[0] && t.length < 65535) return Math.max.apply(Math, t);
      var r = -1 / 0,
        i = -1 / 0;
      return C(t, function (t, o, u) {
        var a = e ? e.call(n, t, o, u) : t;
        a > i && (r = t, i = a)
      }), r
    },
    memoize: et,
    now: Tt,
    omit: function (t) {
      var e = {},
        n = s.apply(o, c.call(arguments, 1));
      for (var r in t) W(n, r) || (e[r] = t[r]);
      return e
    },
    once: tt,
    partial: Z,
    pick: lt,
    pluck: function (t, e) {
      return x(t, St(e))
    },
    property: St,
    propertyOf: function (t) {
      return null == t ? function () {} : function (e) {
        return t[e]
      }
    },
    reduce: P,
    reject: function (t, e, n) {
      return M(t, function (t, r, i) {
        return !e.call(n, t, r, i)
      }, n)
    },
    result: function (t, e) {
      if (null != t) {
        var n = t[e];
        return gt(n) ? n.call(t) : n
      }
    },
    select: N,
    size: B,
    some: L,
    sortedIndex: X,
    throttle: it,
    where: U,
    without: function (t) {
      return K(t, c.call(arguments, 1))
    }
  }
}, function (t, e, n) {
  "use strict";
  n.d(e, "x", function () {
    return o
  }), n.d(e, "w", function () {
    return u
  }), n.d(e, "s", function () {
    return a
  }), n.d(e, "r", function () {
    return c
  }), n.d(e, "q", function () {
    return s
  }), n.d(e, "t", function () {
    return l
  }), n.d(e, "u", function () {
    return f
  }), n.d(e, "a", function () {
    return d
  }), n.d(e, "b", function () {
    return p
  }), n.d(e, "v", function () {
    return h
  }), n.d(e, "c", function () {
    return v
  }), n.d(e, "e", function () {
    return g
  }), n.d(e, "d", function () {
    return m
  }), n.d(e, "h", function () {
    return b
  }), n.d(e, "f", function () {
    return y
  }), n.d(e, "g", function () {
    return j
  }), n.d(e, "l", function () {
    return w
  }), n.d(e, "i", function () {
    return O
  }), n.d(e, "j", function () {
    return C
  }), n.d(e, "k", function () {
    return k
  }), n.d(e, "m", function () {
    return x
  }), n.d(e, "n", function () {
    return S
  }), n.d(e, "o", function () {
    return P
  }), n.d(e, "p", function () {
    return T
  }), n.d(e, "z", function () {
    return E
  }), n.d(e, "y", function () {
    return _
  });
  var r = n(0),
    i = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
      }
      return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e
      }
    }();
  var o = 1e5,
    u = 100001,
    a = 100011,
    c = 100012,
    s = 100013,
    l = 101e3,
    f = 102e3,
    d = 200001,
    p = 202e3,
    h = 104e3,
    v = 203e3,
    g = 203640,
    m = 204e3,
    b = 210001,
    y = 21e4,
    j = 214e3,
    w = "cantPlayVideo",
    O = "badConnection",
    C = "cantLoadPlayer",
    k = "cantPlayInBrowser",
    x = "liveStreamDown",
    S = "protectedContent",
    P = "technicalError",
    T = function () {
      function t(e, n) {
        var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        ! function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, t), this.code = Object(r.z)(n) ? n : 0, this.key = e, this.sourceError = i
      }
      return i(t, null, [{
        key: "logMessage",
        value: function (t) {
          var e = t % 1e3,
            n = Math.floor((t - e) / 1e3),
            r = t;
          return e >= 400 && e < 600 && (r = n + "400-" + n + "599"), "JW Player Error " + t + ". For more information see https://developer.jwplayer.com/jw-player/docs/developer-guide/api/errors-reference#" + r
        }
      }]), t
    }();

  function E(t, e, n) {
    return n instanceof T && n.code ? n : new T(t, e, n)
  }

  function _(t, e) {
    var n = E(P, e, t);
    return n.code = (t.code || 0) + e, n
  }
}, function (t, e, n) {
  "use strict";
  n.d(e, "h", function () {
    return o
  }), n.d(e, "d", function () {
    return u
  }), n.d(e, "i", function () {
    return a
  }), n.d(e, "a", function () {
    return c
  }), n.d(e, "b", function () {
    return s
  }), n.d(e, "f", function () {
    return l
  }), n.d(e, "c", function () {
    return f
  }), n.d(e, "e", function () {
    return d
  }), n.d(e, "g", function () {
    return p
  });
  var r = n(0),
    i = window.parseFloat;

  function o(t) {
    return t.replace(/^\s+|\s+$/g, "")
  }

  function u(t, e, n) {
    for (t = "" + t, n = n || "0"; t.length < e;) t = n + t;
    return t
  }

  function a(t, e) {
    for (var n = t.attributes, r = 0; r < n.length; r++)
      if (n[r].name && n[r].name.toLowerCase() === e.toLowerCase()) return n[r].value.toString();
    return ""
  }

  function c(t) {
    if (!t || "rtmp" === t.substr(0, 4)) return "";
    var e = /[(,]format=(m3u8|mpd)-/i.exec(t);
    return e ? e[1] : (t = t.split("?")[0].split("#")[0]).lastIndexOf(".") > -1 ? t.substr(t.lastIndexOf(".") + 1, t.length).toLowerCase() : void 0
  }

  function s(t) {
    var e = (t / 60 | 0) % 60,
      n = t % 60;
    return u(t / 3600 | 0, 2) + ":" + u(e, 2) + ":" + u(n.toFixed(3), 6)
  }

  function l(t, e) {
    if (!t) return 0;
    if (Object(r.z)(t)) return t;
    var n = t.replace(",", "."),
      o = n.slice(-1),
      u = n.split(":"),
      a = u.length,
      c = 0;
    if ("s" === o) c = i(n);
    else if ("m" === o) c = 60 * i(n);
    else if ("h" === o) c = 3600 * i(n);
    else if (a > 1) {
      var s = a - 1;
      4 === a && (e && (c = i(u[s]) / e), s -= 1), c += i(u[s]), c += 60 * i(u[s - 1]), a >= 3 && (c += 3600 * i(u[s - 2]))
    } else c = i(n);
    return Object(r.z)(c) ? c : 0
  }

  function f(t, e, n) {
    if (Object(r.x)(t) && "%" === t.slice(-1)) {
      var o = i(t);
      return e && Object(r.z)(e) && Object(r.z)(o) ? e * o / 100 : null
    }
    return l(t, n)
  }

  function d(t, e) {
    return t.map(function (t) {
      return e + t
    })
  }

  function p(t, e) {
    return t.map(function (t) {
      return t + e
    })
  }
}, function (t, e, n) {
  "use strict";
  n.d(e, "Ia", function () {
    return r
  }), n.d(e, "La", function () {
    return i
  }), n.d(e, "Ja", function () {
    return o
  }), n.d(e, "Na", function () {
    return u
  }), n.d(e, "Oa", function () {
    return a
  }), n.d(e, "Ka", function () {
    return c
  }), n.d(e, "Ma", function () {
    return s
  }), n.d(e, "Pa", function () {
    return l
  }), n.d(e, "s", function () {
    return f
  }), n.d(e, "u", function () {
    return d
  }), n.d(e, "t", function () {
    return p
  }), n.d(e, "n", function () {
    return h
  }), n.d(e, "q", function () {
    return v
  }), n.d(e, "Qa", function () {
    return g
  }), n.d(e, "r", function () {
    return m
  }), n.d(e, "X", function () {
    return b
  }), n.d(e, "U", function () {
    return y
  }), n.d(e, "v", function () {
    return j
  }), n.d(e, "W", function () {
    return w
  }), n.d(e, "w", function () {
    return O
  }), n.d(e, "a", function () {
    return C
  }), n.d(e, "b", function () {
    return k
  }), n.d(e, "c", function () {
    return x
  }), n.d(e, "d", function () {
    return S
  }), n.d(e, "e", function () {
    return P
  }), n.d(e, "h", function () {
    return T
  }), n.d(e, "E", function () {
    return E
  }), n.d(e, "Fa", function () {
    return _
  }), n.d(e, "O", function () {
    return A
  }), n.d(e, "B", function () {
    return M
  }), n.d(e, "A", function () {
    return N
  }), n.d(e, "D", function () {
    return F
  }), n.d(e, "p", function () {
    return I
  }), n.d(e, "Aa", function () {
    return R
  }), n.d(e, "m", function () {
    return L
  }), n.d(e, "F", function () {
    return B
  }), n.d(e, "G", function () {
    return D
  }), n.d(e, "L", function () {
    return z
  }), n.d(e, "M", function () {
    return q
  }), n.d(e, "P", function () {
    return Q
  }), n.d(e, "Ha", function () {
    return V
  }), n.d(e, "Z", function () {
    return X
  }), n.d(e, "C", function () {
    return W
  }), n.d(e, "Q", function () {
    return H
  }), n.d(e, "N", function () {
    return U
  }), n.d(e, "R", function () {
    return J
  }), n.d(e, "T", function () {
    return K
  }), n.d(e, "K", function () {
    return Y
  }), n.d(e, "J", function () {
    return $
  }), n.d(e, "H", function () {
    return G
  }), n.d(e, "I", function () {
    return Z
  }), n.d(e, "S", function () {
    return tt
  }), n.d(e, "o", function () {
    return et
  }), n.d(e, "x", function () {
    return nt
  }), n.d(e, "Ga", function () {
    return rt
  }), n.d(e, "Ba", function () {
    return it
  }), n.d(e, "Ca", function () {
    return ot
  }), n.d(e, "f", function () {
    return ut
  }), n.d(e, "g", function () {
    return at
  }), n.d(e, "Y", function () {
    return ct
  }), n.d(e, "z", function () {
    return st
  }), n.d(e, "l", function () {
    return lt
  }), n.d(e, "k", function () {
    return ft
  }), n.d(e, "Da", function () {
    return dt
  }), n.d(e, "Ea", function () {
    return pt
  }), n.d(e, "Ra", function () {
    return ht
  }), n.d(e, "y", function () {
    return vt
  }), n.d(e, "j", function () {
    return gt
  }), n.d(e, "V", function () {
    return mt
  }), n.d(e, "i", function () {
    return bt
  });
  var r = "buffering",
    i = "idle",
    o = "complete",
    u = "paused",
    a = "playing",
    c = "error",
    s = "loading",
    l = "stalled",
    f = "drag",
    d = "dragStart",
    p = "dragEnd",
    h = "click",
    v = "doubleClick",
    g = "tap",
    m = "doubleTap",
    b = "over",
    y = "move",
    j = "enter",
    w = "out",
    O = c,
    C = "adClick",
    k = "adPause",
    x = "adPlay",
    S = "adSkipped",
    P = "adTime",
    T = "autostartNotAllowed",
    E = o,
    _ = "ready",
    A = "seek",
    M = "beforePlay",
    N = "beforeComplete",
    F = "bufferFull",
    I = "displayClick",
    R = "playlistComplete",
    L = "cast",
    B = "mediaError",
    D = "firstFrame",
    z = "playAttempt",
    q = "playAttemptFailed",
    Q = "seeked",
    V = "setupError",
    X = "state",
    W = "bufferChange",
    H = "time",
    U = "ratechange",
    J = "mediaType",
    K = "volume",
    Y = "mute",
    $ = "meta",
    G = "levels",
    Z = "levelsChanged",
    tt = "visualQuality",
    et = "controls",
    nt = "fullscreen",
    rt = "resize",
    it = "playlistItem",
    ot = "playlist",
    ut = "audioTracks",
    at = "audioTrackChanged",
    ct = "playbackRateChanged",
    st = "logoClick",
    lt = "captionsList",
    ft = "captionsChanged",
    dt = "providerChanged",
    pt = "providerFirstFrame",
    ht = "userAction",
    vt = "instreamClick",
    gt = "breakpoint",
    mt = "fullscreenchange",
    bt = "bandwidthEstimate"
}, function (t, e, n) {
  "use strict";
  n.d(e, "b", function () {
    return i
  }), n.d(e, "d", function () {
    return o
  }), n.d(e, "a", function () {
    return u
  }), n.d(e, "c", function () {
    return a
  });
  var r = n(2);

  function i(t) {
    var e = "";
    return t && (t.localName ? e = t.localName : t.baseName && (e = t.baseName)), e
  }

  function o(t) {
    var e = "";
    return t && (t.textContent ? e = Object(r.h)(t.textContent) : t.text && (e = Object(r.h)(t.text))), e
  }

  function u(t, e) {
    return t.childNodes[e]
  }

  function a(t) {
    return t.childNodes ? t.childNodes.length : 0
  }
}, function (t, e, n) {
  "use strict";
  var r = setTimeout;

  function i() {}

  function o(t) {
    if (!(this instanceof o)) throw new TypeError("Promises must be constructed via new");
    if ("function" != typeof t) throw new TypeError("not a function");
    this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], l(t, this)
  }

  function u(t, e) {
    for (; 3 === t._state;) t = t._value;
    0 !== t._state ? (t._handled = !0, o._immediateFn(function () {
      var n = 1 === t._state ? e.onFulfilled : e.onRejected;
      if (null !== n) {
        var r;
        try {
          r = n(t._value)
        } catch (t) {
          return void c(e.promise, t)
        }
        a(e.promise, r)
      } else(1 === t._state ? a : c)(e.promise, t._value)
    })) : t._deferreds.push(e)
  }

  function a(t, e) {
    try {
      if (e === t) throw new TypeError("A promise cannot be resolved with itself.");
      if (e && ("object" == typeof e || "function" == typeof e)) {
        var n = e.then;
        if (e instanceof o) return t._state = 3, t._value = e, void s(t);
        if ("function" == typeof n) return void l((r = n, i = e, function () {
          r.apply(i, arguments)
        }), t)
      }
      t._state = 1, t._value = e, s(t)
    } catch (e) {
      c(t, e)
    }
    var r, i
  }

  function c(t, e) {
    t._state = 2, t._value = e, s(t)
  }

  function s(t) {
    2 === t._state && 0 === t._deferreds.length && o._immediateFn(function () {
      t._handled || o._unhandledRejectionFn(t._value)
    });
    for (var e = 0, n = t._deferreds.length; e < n; e++) u(t, t._deferreds[e]);
    t._deferreds = null
  }

  function l(t, e) {
    var n = !1;
    try {
      t(function (t) {
        n || (n = !0, a(e, t))
      }, function (t) {
        n || (n = !0, c(e, t))
      })
    } catch (t) {
      if (n) return;
      n = !0, c(e, t)
    }
  }
  o.prototype.catch = function (t) {
    return this.then(null, t)
  }, o.prototype.then = function (t, e) {
    var n = new this.constructor(i);
    return u(this, new function (t, e, n) {
      this.onFulfilled = "function" == typeof t ? t : null, this.onRejected = "function" == typeof e ? e : null, this.promise = n
    }(t, e, n)), n
  }, o.prototype.finally = function (t) {
    var e = this.constructor;
    return this.then(function (n) {
      return e.resolve(t()).then(function () {
        return n
      })
    }, function (n) {
      return e.resolve(t()).then(function () {
        return e.reject(n)
      })
    })
  }, o.all = function (t) {
    return new o(function (e, n) {
      if (!t || void 0 === t.length) throw new TypeError("Promise.all accepts an array");
      var r = Array.prototype.slice.call(t);
      if (0 === r.length) return e([]);
      var i = r.length;

      function o(t, u) {
        try {
          if (u && ("object" == typeof u || "function" == typeof u)) {
            var a = u.then;
            if ("function" == typeof a) return void a.call(u, function (e) {
              o(t, e)
            }, n)
          }
          r[t] = u, 0 == --i && e(r)
        } catch (t) {
          n(t)
        }
      }
      for (var u = 0; u < r.length; u++) o(u, r[u])
    })
  }, o.resolve = function (t) {
    return t && "object" == typeof t && t.constructor === o ? t : new o(function (e) {
      e(t)
    })
  }, o.reject = function (t) {
    return new o(function (e, n) {
      n(t)
    })
  }, o.race = function (t) {
    return new o(function (e, n) {
      for (var r = 0, i = t.length; r < i; r++) t[r].then(e, n)
    })
  }, o._immediateFn = "function" == typeof setImmediate && function (t) {
    setImmediate(t)
  } || function (t) {
    r(t, 0)
  }, o._unhandledRejectionFn = function (t) {
    "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t)
  };
  var f = o;
  n.d(e, "b", function () {
    return p
  });
  var d = window.Promise || (window.Promise = f),
    p = d.resolve();
  e.a = d
}, function (t, e, n) {
  "use strict";
  n.d(e, "c", function () {
    return o
  }), n.d(e, "d", function () {
    return u
  }), n.d(e, "b", function () {
    return a
  }), n.d(e, "e", function () {
    return c
  }), n.d(e, "f", function () {
    return s
  });
  var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
      return typeof t
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    },
    i = [].slice;

  function o(t, e, n) {
    if (!f(this, "on", t, [e, n]) || !e) return this;
    var r = this._events || (this._events = {});
    return (r[t] || (r[t] = [])).push({
      callback: e,
      context: n
    }), this
  }

  function u(t, e, n) {
    if (!f(this, "once", t, [e, n]) || !e) return this;
    var r = 0,
      i = this,
      o = function n() {
        r++ || (i.off(t, n), e.apply(this, arguments))
      };
    return o._callback = e, this.on(t, o, n)
  }

  function a(t, e, n) {
    if (!this._events || !f(this, "off", t, [e, n])) return this;
    if (!t && !e && !n) return delete this._events, this;
    for (var r = t ? [t] : Object.keys(this._events), i = 0, o = r.length; i < o; i++) {
      t = r[i];
      var u = this._events[t];
      if (u) {
        var a = this._events[t] = [];
        if (e || n)
          for (var c = 0, s = u.length; c < s; c++) {
            var l = u[c];
            (e && e !== l.callback && e !== l.callback._callback || n && n !== l.context) && a.push(l)
          }
        a.length || delete this._events[t]
      }
    }
    return this
  }

  function c(t) {
    if (!this._events) return this;
    var e = i.call(arguments, 1);
    if (!f(this, "trigger", t, e)) return this;
    var n = this._events[t],
      r = this._events.all;
    return n && d(n, e, this), r && d(r, arguments, this), this
  }

  function s(t) {
    if (!this._events) return this;
    var e = i.call(arguments, 1);
    if (!f(this, "trigger", t, e)) return this;
    var n = this._events[t],
      r = this._events.all;
    return n && d(n, e, this, t), r && d(r, arguments, this, t), this
  }
  var l = /\s+/;

  function f(t, e, n, i) {
    if (!n) return !0;
    if ("object" === (void 0 === n ? "undefined" : r(n))) {
      for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && t[e].apply(t, [o, n[o]].concat(i));
      return !1
    }
    if (l.test(n)) {
      for (var u = n.split(l), a = 0, c = u.length; a < c; a++) t[e].apply(t, [u[a]].concat(i));
      return !1
    }
    return !0
  }

  function d(t, e, n, r) {
    for (var i = -1, o = t.length; ++i < o;) {
      var u = t[i];
      if (r) try {
        u.callback.apply(u.context || n, e)
      } catch (t) {
        console.log('Error in "' + r + '" event handler:', t)
      } else u.callback.apply(u.context || n, e)
    }
  }
  e.a = {
    on: o,
    once: u,
    off: a,
    trigger: c
  }
}, function (t, e, n) {
  "use strict";
  n.r(e);
  var r = n(8);

  function i(t, e) {
    if (t && t.length > e) return t[e]
  }
  var o = n(0);
  n.d(e, "Browser", function () {
    return a
  }), n.d(e, "OS", function () {
    return c
  }), n.d(e, "Features", function () {
    return s
  });
  var u = navigator.userAgent;
  var a = {},
    c = {},
    s = {};
  Object.defineProperties(a, {
    androidNative: {
      get: Object(o.C)(r.c),
      enumerable: !0
    },
    chrome: {
      get: Object(o.C)(r.d),
      enumerable: !0
    },
    edge: {
      get: Object(o.C)(r.e),
      enumerable: !0
    },
    facebook: {
      get: Object(o.C)(r.g),
      enumerable: !0
    },
    firefox: {
      get: Object(o.C)(r.f),
      enumerable: !0
    },
    ie: {
      get: Object(o.C)(r.i),
      enumerable: !0
    },
    msie: {
      get: Object(o.C)(r.n),
      enumerable: !0
    },
    safari: {
      get: Object(o.C)(r.q),
      enumerable: !0
    },
    version: {
      get: Object(o.C)(function (t, e) {
        var n = void 0,
          r = void 0,
          i = void 0,
          o = void 0;
        return t.chrome ? n = -1 !== e.indexOf("Chrome") ? e.substring(e.indexOf("Chrome") + 7) : e.substring(e.indexOf("CriOS") + 6) : t.safari ? n = e.substring(e.indexOf("Version") + 8) : t.firefox ? n = e.substring(e.indexOf("Firefox") + 8) : t.edge ? n = e.substring(e.indexOf("Edge") + 5) : t.ie && (-1 !== e.indexOf("rv:") ? n = e.substring(e.indexOf("rv:") + 3) : -1 !== e.indexOf("MSIE") && (n = e.substring(e.indexOf("MSIE") + 5))), n && (-1 !== (o = n.indexOf(";")) && (n = n.substring(0, o)), -1 !== (o = n.indexOf(" ")) && (n = n.substring(0, o)), -1 !== (o = n.indexOf(")")) && (n = n.substring(0, o)), r = parseInt(n, 10), i = parseInt(n.split(".")[1], 10)), {
          version: n,
          major: r,
          minor: i
        }
      }.bind(void 0, a, u)),
      enumerable: !0
    }
  }), Object.defineProperties(c, {
    android: {
      get: Object(o.C)(r.b),
      enumerable: !0
    },
    iOS: {
      get: Object(o.C)(r.j),
      enumerable: !0
    },
    mobile: {
      get: Object(o.C)(r.o),
      enumerable: !0
    },
    mac: {
      get: Object(o.C)(r.p),
      enumerable: !0
    },
    iPad: {
      get: Object(o.C)(r.k),
      enumerable: !0
    },
    iPhone: {
      get: Object(o.C)(r.l),
      enumerable: !0
    },
    windows: {
      get: Object(o.C)(function () {
        return u.indexOf("Windows") > -1
      }),
      enumerable: !0
    },
    version: {
      get: Object(o.C)(function (t, e) {
        var n = void 0,
          r = void 0,
          o = void 0;
        if (t.windows) switch (n = i(/Windows(?: NT|)? ([._\d]+)/.exec(e), 1)) {
          case "6.1":
            n = "7.0";
            break;
          case "6.2":
            n = "8.0";
            break;
          case "6.3":
            n = "8.1"
        } else t.android ? n = i(/Android ([._\d]+)/.exec(e), 1) : t.iOS ? n = i(/OS ([._\d]+)/.exec(e), 1) : t.mac && (n = i(/Mac OS X (10[._\d]+)/.exec(e), 1));
        if (n) {
          r = parseInt(n, 10);
          var u = n.split(/[._]/);
          u && (o = parseInt(u[1], 10))
        }
        return {
          version: n,
          major: r,
          minor: o
        }
      }.bind(void 0, c, u)),
      enumerable: !0
    }
  }), Object.defineProperties(s, {
    flash: {
      get: Object(o.C)(r.h),
      enumerable: !0
    },
    flashVersion: {
      get: Object(o.C)(r.a),
      enumerable: !0
    },
    iframe: {
      get: Object(o.C)(r.m),
      enumerable: !0
    },
    passiveEvents: {
      get: Object(o.C)(function () {
        var t = !1;
        try {
          var e = Object.defineProperty({}, "passive", {
            get: function () {
              t = !0
            }
          });
          window.addEventListener("testPassive", null, e), window.removeEventListener("testPassive", null, e)
        } catch (t) {}
        return t
      }),
      enumerable: !0
    },
    backgroundLoading: {
      get: Object(o.C)(function () {
        return !(c.iOS || a.safari)
      }),
      enumerable: !0
    }
  })
}, function (t, e, n) {
  "use strict";
  n.d(e, "h", function () {
    return u
  }), n.d(e, "f", function () {
    return a
  }), n.d(e, "l", function () {
    return s
  }), n.d(e, "k", function () {
    return l
  }), n.d(e, "p", function () {
    return f
  }), n.d(e, "g", function () {
    return d
  }), n.d(e, "e", function () {
    return p
  }), n.d(e, "n", function () {
    return h
  }), n.d(e, "d", function () {
    return v
  }), n.d(e, "i", function () {
    return g
  }), n.d(e, "q", function () {
    return m
  }), n.d(e, "j", function () {
    return b
  }), n.d(e, "c", function () {
    return y
  }), n.d(e, "b", function () {
    return j
  }), n.d(e, "o", function () {
    return w
  }), n.d(e, "m", function () {
    return O
  }), n.d(e, "a", function () {
    return C
  });
  var r = navigator.userAgent;

  function i(t) {
    return null !== r.match(t)
  }

  function o(t) {
    return function () {
      return i(t)
    }
  }

  function u() {
    var t = C();
    return !!(t && t >= 18)
  }
  var a = o(/gecko\//i),
    c = o(/trident\/.+rv:\s*11/i),
    s = o(/iP(hone|od)/i),
    l = o(/iPad/i),
    f = o(/Macintosh/i),
    d = o(/FBAV/i);

  function p() {
    return i(/\sEdge\/\d+/i)
  }

  function h() {
    return i(/msie/i)
  }

  function v() {
    return i(/\s(?:(?:Headless)?Chrome|CriOS)\//i) && !p() && !i(/UCBrowser/i)
  }

  function g() {
    return p() || c() || h()
  }

  function m() {
    return i(/safari/i) && !i(/(?:Chrome|CriOS|chromium|android|phantom)/i)
  }

  function b() {
    return i(/iP(hone|ad|od)/i)
  }

  function y() {
    return !(i(/chrome\/[123456789]/i) && !i(/chrome\/18/i) && !a()) && j()
  }

  function j() {
    return i(/Android/i) && !i(/Windows Phone/i)
  }

  function w() {
    return b() || j() || i(/Windows Phone/i)
  }

  function O() {
    try {
      return window.self !== window.top
    } catch (t) {
      return !0
    }
  }

  function C() {
    if (j()) return 0;
    var t = navigator.plugins,
      e = void 0;
    if (t && (e = t["Shockwave Flash"]) && e.description) return parseFloat(e.description.replace(/\D+(\d+\.?\d*).*/, "$1"));
    if (void 0 !== window.ActiveXObject) {
      try {
        if (e = new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash")) return parseFloat(e.GetVariable("$version").split(" ")[1].replace(/\s*,\s*/, "."))
      } catch (t) {
        return 0
      }
      return e
    }
    return 0
  }
}, function (t, e, n) {
  "use strict";
  n.d(e, "a", function () {
    return f
  }), n.d(e, "c", function () {
    return d
  }), n.d(e, "b", function () {
    return p
  });
  var r = n(25),
    i = n(26),
    o = n(15),
    u = n(14),
    a = n(37),
    c = n(5),
    s = n(1),
    l = null,
    f = {};

  function d(t) {
    return l || (l = function (t) {
      var e = t.get("controls"),
        l = h(),
        d = function (t, e) {
          var n = t.get("playlist");
          if (Array.isArray(n) && n.length)
            for (var u = Object(i.c)(Object(r.a)(n[0]), t), a = 0; a < u.length; a++)
              for (var c = u[a], s = t.getProviders(), l = 0; l < o.a.length; l++) {
                var f = o.a[l];
                if (s.providerSupports(f, c)) return f.name === e
              }
          return !1
        }(t, "html5");
      if (e && l && d) return v = n.e(8).then(function (t) {
        n(35);
        var e = n(19).default;
        return a.a.controls = n(20).default, Object(u.a)(n(123).default), e
      }.bind(null, n)).catch(p(s.t + 105)), f.html5 = v, v;
      var v;
      if (e && d) return function () {
        var t = n.e(7).then(function (t) {
          var e = n(19).default;
          return a.a.controls = n(20).default, Object(u.a)(n(123).default), e
        }.bind(null, n)).catch(p(s.t + 104));
        return f.html5 = t, t
      }();
      if (e && l) return n.e(6).then(function (t) {
        n(35);
        var e = n(19).default;
        return a.a.controls = n(20).default, e
      }.bind(null, n)).catch(p(s.t + 103));
      if (e) return n.e(5).then(function (t) {
        var e = n(19).default;
        return a.a.controls = n(20).default, e
      }.bind(null, n)).catch(p(s.t + 102));
      return (h() ? n.e(3).then(function (t) {
        return n(35)
      }.bind(null, n)).catch(p(s.t + 120)) : c.b).then(function () {
        return n.e(4).then(function (t) {
          return n(19).default
        }.bind(null, n)).catch(p(s.t + 101))
      })
    }(t)), l
  }

  function p(t, e) {
    return function () {
      throw new s.p(s.j, t, e)
    }
  }

  function h() {
    var t = window.IntersectionObserverEntry;
    return !(t && "IntersectionObserver" in window && "intersectionRatio" in t.prototype)
  }
}, function (t, e, n) {
  "use strict";
  n.d(e, "h", function () {
    return o
  }), n.d(e, "e", function () {
    return u
  }), n.d(e, "o", function () {
    return a
  }), n.d(e, "d", function () {
    return l
  }), n.d(e, "a", function () {
    return f
  }), n.d(e, "l", function () {
    return d
  }), n.d(e, "m", function () {
    return p
  }), n.d(e, "p", function () {
    return h
  }), n.d(e, "n", function () {
    return v
  }), n.d(e, "g", function () {
    return g
  }), n.d(e, "b", function () {
    return m
  }), n.d(e, "f", function () {
    return b
  }), n.d(e, "c", function () {
    return y
  }), n.d(e, "j", function () {
    return j
  }), n.d(e, "i", function () {
    return w
  }), n.d(e, "k", function () {
    return O
  });
  var r = n(2),
    i = n(0);

  function o(t, e) {
    return t.classList.contains(e)
  }

  function u(t) {
    var e = document.createElement("div");
    return e.innerHTML = t, e.firstChild
  }

  function a(t) {
    return t + (t.toString().indexOf("%") > 0 ? "" : "px")
  }

  function c(t) {
    return Object(i.x)(t.className) ? t.className.split(" ") : []
  }

  function s(t, e) {
    e = Object(r.h)(e), t.className !== e && (t.className = e)
  }

  function l(t) {
    return t.classList ? t.classList : c(t)
  }

  function f(t, e) {
    var n = c(t);
    (Array.isArray(e) ? e : e.split(" ")).forEach(function (t) {
      Object(i.e)(n, t) || n.push(t)
    }), s(t, n.join(" "))
  }

  function d(t, e) {
    var n = c(t),
      r = Array.isArray(e) ? e : e.split(" ");
    s(t, Object(i.h)(n, r).join(" "))
  }

  function p(t, e, n) {
    var r = t.className || "";
    e.test(r) ? r = r.replace(e, n) : n && (r += " " + n), s(t, r)
  }

  function h(t, e, n) {
    var r = o(t, e);
    (n = Object(i.r)(n) ? n : !r) !== r && (n ? f(t, e) : d(t, e))
  }

  function v(t, e, n) {
    t.setAttribute(e, n)
  }

  function g(t) {
    for (; t.firstChild;) t.removeChild(t.firstChild)
  }

  function m(t) {
    var e = document.createElement("link");
    e.rel = "stylesheet", e.href = t, document.getElementsByTagName("head")[0].appendChild(e)
  }

  function b(t) {
    t && g(t)
  }

  function y(t) {
    var e = {
      left: 0,
      right: 0,
      width: 0,
      height: 0,
      top: 0,
      bottom: 0
    };
    if (!t || !document.body.contains(t)) return e;
    var n = t.getBoundingClientRect(),
      r = window.pageYOffset,
      i = window.pageXOffset;
    return n.width || n.height || n.left || n.top ? (e.left = n.left + i, e.right = n.right + i, e.top = n.top + r, e.bottom = n.bottom + r, e.width = n.right - n.left, e.height = n.bottom - n.top, e) : e
  }

  function j(t, e) {
    t.insertBefore(e, t.firstChild)
  }

  function w(t) {
    return t.nextElementSibling
  }

  function O(t) {
    return t.previousElementSibling
  }
}, function (t, e, n) {
  "use strict";
  n.r(e), n.d(e, "exists", function () {
    return i
  }), n.d(e, "isHTTPS", function () {
    return o
  }), n.d(e, "isRtmp", function () {
    return u
  }), n.d(e, "isYouTube", function () {
    return a
  }), n.d(e, "typeOf", function () {
    return c
  });
  var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
    return typeof t
  } : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
  };

  function i(t) {
    switch (void 0 === t ? "undefined" : r(t)) {
      case "string":
        return t.length > 0;
      case "object":
        return null !== t;
      case "undefined":
        return !1;
      default:
        return !0
    }
  }

  function o() {
    return "https:" === window.location.protocol
  }

  function u(t, e) {
    return 0 === t.indexOf("rtmp:") || "rtmp" === e
  }

  function a(t, e) {
    return "youtube" === e || /^(http|\/\/).*(youtube\.com|youtu\.be)\/.+/.test(t)
  }

  function c(t) {
    if (null === t) return "null";
    var e = void 0 === t ? "undefined" : r(t);
    return "object" === e && Array.isArray(t) ? "array" : e
  }
}, function (t, e, n) {
  "use strict";
  n.r(e), n.d(e, "getAbsolutePath", function () {
    return o
  }), n.d(e, "isAbsolutePath", function () {
    return u
  }), n.d(e, "parseXML", function () {
    return c
  }), n.d(e, "serialize", function () {
    return s
  }), n.d(e, "parseDimension", function () {
    return l
  }), n.d(e, "timeFormat", function () {
    return f
  });
  var r = n(11),
    i = n(0);

  function o(t, e) {
    if (Object(r.exists)(e) || (e = document.location.href), Object(r.exists)(t)) {
      if (u(t)) return t;
      var n = e.substring(0, e.indexOf("://") + 3),
        i = e.substring(n.length, e.indexOf("/", n.length + 1)),
        o = void 0;
      if (0 === t.indexOf("/")) o = t.split("/");
      else {
        var a = e.split("?")[0];
        o = (a = a.substring(n.length + i.length + 1, a.lastIndexOf("/"))).split("/").concat(t.split("/"))
      }
      for (var c = [], s = 0; s < o.length; s++) o[s] && Object(r.exists)(o[s]) && "." !== o[s] && (".." === o[s] ? c.pop() : c.push(o[s]));
      return n + i + "/" + c.join("/")
    }
  }

  function u(t) {
    return /^(?:(?:https?|file):)?\/\//.test(t)
  }

  function a(t) {
    return Object(i.b)(t, function (t) {
      return "parsererror" === t.nodeName
    })
  }

  function c(t) {
    var e = null;
    try {
      (a((e = (new window.DOMParser).parseFromString(t, "text/xml")).childNodes) || e.childNodes && a(e.childNodes[0].childNodes)) && (e = null)
    } catch (t) {}
    return e
  }

  function s(t) {
    if (void 0 === t) return null;
    if ("string" == typeof t && t.length < 6) {
      var e = t.toLowerCase();
      if ("true" === e) return !0;
      if ("false" === e) return !1;
      if (!Object(i.u)(Number(t)) && !Object(i.u)(parseFloat(t))) return Number(t)
    }
    return t
  }

  function l(t) {
    return "string" == typeof t ? "" === t ? 0 : t.lastIndexOf("%") > -1 ? t : parseInt(t.replace("px", ""), 10) : t
  }

  function f(t, e) {
    if (t <= 0 && !e || Object(i.u)(parseInt(t))) return "00:00";
    var n = t < 0 ? "-" : "";
    t = Math.abs(t);
    var r = Math.floor(t / 3600),
      o = Math.floor((t - 3600 * r) / 60),
      u = Math.floor(t % 60);
    return n + (r ? r + ":" : "") + (o < 10 ? "0" : "") + o + ":" + (u < 10 ? "0" : "") + u
  }
}, function (t, e, n) {
  "use strict";
  e.a = []
}, function (t, e, n) {
  "use strict";
  n.d(e, "a", function () {
    return a
  });
  var r = n(33),
    i = n(15),
    o = n(54),
    u = n(0);

  function a(t) {
    var e = t.getName().name;
    if (!r.a[e]) {
      if (!Object(u.l)(i.a, Object(u.B)({
          name: e
        }))) {
        if (!Object(u.t)(t.supports)) throw new Error("Tried to register a provider with an invalid object");
        i.a.unshift({
          name: e,
          supports: t.supports
        })
      }
      Object(u.g)(t.prototype, o.a), r.a[e] = t
    }
  }
}, function (t, e, n) {
  "use strict";
  var r = n(29),
    i = n(7),
    o = n(17),
    u = n(0),
    a = n(11),
    c = n(36),
    s = Object(u.l)(r.a, Object(u.B)({
      name: "html5"
    })),
    l = s.supports;
  s.supports = function (t, e) {
    var n = l.apply(this, arguments);
    if (n && t.drm && "hls" === t.type) {
      var r = Object(o.a)(e)("drm");
      if (r && t.drm.fairplay) {
        var i = window.WebKitMediaKeys;
        return i && i.isTypeSupported && i.isTypeSupported("com.apple.fps.1_0", "video/mp4")
      }
      return r
    }
    return n
  }, r.a.push({
    name: "shaka",
    supports: function (t) {
      if (t.drm && !Object(c.a)(t.drm)) return !1;
      var e = window.MediaSource;
      if (!window.HTMLVideoElement || !e) return !1;
      var n = !0;
      return t.mediaTypes && (n = Object(u.a)(t.mediaTypes, function (t) {
        return e.isTypeSupported(t)
      })), n && ("dash" === t.type || "mpd" === t.type || (t.file || "").indexOf("mpd-time-csf") > -1)
    }
  }), r.a.splice(0, 0, {
    name: "hlsjs",
    supports: function (t) {
      if (t.drm) return !1;
      var e = t.file.indexOf(".m3u8") > -1,
        n = "hls" === t.type || "m3u8" === t.type;
      if (!e && !n) return !1;
      var r = i.Browser.chrome || i.Browser.firefox || i.Browser.edge || i.Browser.ie && 11 === i.Browser.version.major,
        o = i.OS.android && !1 === t.hlsjsdefault,
        u = i.Browser.safari && !!t.safarihlsjs;
      return !!window.MediaSource && !!window.MediaSource.isTypeSupported && window.MediaSource.isTypeSupported('video/mp4;codecs="avc1.4d400d,mp4a.40.2"') && (r || u) && !o
    }
  }), r.a.push({
    name: "flash",
    supports: function (t) {
      if (!i.Features.flash || t.drm) return !1;
      var e = t.type;
      return "hls" === e || "m3u8" === e || !Object(a.isRtmp)(t.file, e) && ["flv", "f4v", "mov", "m4a", "m4v", "mp4", "aac", "f4a", "mp3", "mpeg", "smil"].indexOf(e) > -1
    }
  }), e.a = r.a
}, function (t, e, n) {
  "use strict";
  n.d(e, "a", function () {
    return r
  });
  var r = Date.now || function () {
    return (new Date).getTime()
  }
}, function (t, e, n) {
  "use strict";
  n.d(e, "a", function () {
    return h
  });
  var r = "free",
    i = "starter",
    o = "business",
    u = "premium",
    a = "enterprise",
    c = "platinum",
    s = "ads",
    l = "unlimited",
    f = "trial",
    d = "invalid",
    p = "expired";

  function h(t) {
    var e = {
      setup: [r, i, o, u, a, s, l, f, c],
      drm: [a, s, l, f],
      ads: [s, l, f, c, a],
      jwpsrv: [r, i, o, u, a, s, f, c, d, p],
      discovery: [s, a, f, l]
    };
    return function (n) {
      return e[n] && e[n].indexOf(t) > -1
    }
  }
}, function (t, e, n) {
  "use strict";
  n.r(e), n.d(e, "getScriptPath", function () {
    return i
  }), n.d(e, "repo", function () {
    return o
  }), n.d(e, "versionCheck", function () {
    return u
  }), n.d(e, "loadFrom", function () {
    return a
  });
  var r = n(28),
    i = function (t) {
      for (var e = document.getElementsByTagName("script"), n = 0; n < e.length; n++) {
        var r = e[n].src;
        if (r) {
          var i = r.lastIndexOf("/" + t);
          if (i >= 0) return r.substr(0, i + 1)
        }
      }
      return ""
    },
    o = function () {
      var t = "//ssl.p.jwpcdn.com/player/v/8.5.2/";
      return "" + ("file:" === window.location.protocol ? "https:" : "") + t
    },
    u = function (t) {
      var e = ("0" + t).split(/\W/),
        n = r.a.split(/\W/),
        i = parseFloat(e[0]),
        o = parseFloat(n[0]);
      return !(i > o) && !(i === o && parseFloat("0" + e[1]) > parseFloat(n[1]))
    },
    a = function () {
      return o()
    }
}, , , function (t, e, n) {
  "use strict";
  e.a = {
    debug: !1
  }
}, function (t, e, n) {
  "use strict";
  n.d(e, "a", function () {
    return a
  }), n.d(e, "b", function () {
    return c
  }), n.d(e, "d", function () {
    return s
  }), n.d(e, "e", function () {
    return d
  }), n.d(e, "c", function () {
    return h
  });
  var r = n(2),
    i = n(40),
    o = n.n(i),
    u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
      return typeof t
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    },
    a = o.a.clear;

  function c(t, e, n, r) {
    n = n || "all-players";
    var i = "";
    if ("object" === (void 0 === e ? "undefined" : u(e))) {
      var a = document.createElement("div");
      s(a, e);
      var c = a.style.cssText;
      r && c && (c = c.replace(/;/g, " !important;")), i = "{" + c + "}"
    } else "string" == typeof e && (i = e);
    "" !== i && "{}" !== i ? o.a.style([
      [t, t + i]
    ], n) : o.a.clear(n, t)
  }

  function s(t, e) {
    if (void 0 !== t && null !== t) {
      void 0 === t.length && (t = [t]);
      var n = void 0,
        r = {};
      for (n in e) Object.prototype.hasOwnProperty.call(e, n) && (r[n] = f(n, e[n]));
      for (var i = 0; i < t.length; i++) {
        var o = t[i],
          u = void 0;
        if (void 0 !== o && null !== o)
          for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (u = l(n), o.style[u] !== r[n] && (o.style[u] = r[n]))
      }
    }
  }

  function l(t) {
    t = t.split("-");
    for (var e = 1; e < t.length; e++) t[e] = t[e].charAt(0).toUpperCase() + t[e].slice(1);
    return t.join("")
  }

  function f(t, e) {
    return "" === e || void 0 === e || null === e ? "" : "string" == typeof e && isNaN(e) ? /png|gif|jpe?g/i.test(e) && e.indexOf("url") < 0 ? "url(" + e + ")" : e : 0 === e || "z-index" === t || "opacity" === t ? "" + e : /color/i.test(t) ? "#" + Object(r.d)(e.toString(16).replace(/^0x/i, ""), 6) : Math.ceil(e) + "px"
  }

  function d(t, e) {
    s(t, {
      transform: e,
      webkitTransform: e,
      msTransform: e,
      mozTransform: e,
      oTransform: e
    })
  }
  var p = void 0;

  function h(t, e) {
    var n = "rgb",
      r = void 0 !== e && 100 !== e;
    if (r && (n += "a"), !p) {
      var i = document.createElement("canvas");
      i.height = 1, i.width = 1, p = i.getContext("2d")
    }
    t ? isNaN(parseInt(t, 16)) || (t = "#" + t) : t = "#000000", p.clearRect(0, 0, 1, 1), p.fillStyle = t, p.fillRect(0, 0, 1, 1);
    var o = p.getImageData(0, 0, 1, 1).data;
    return n += "(" + o[0] + ", " + o[1] + ", " + o[2], r && (n += ", " + e / 100), n + ")"
  }
}, function (t, e, n) {
  "use strict";
  var r = n(5),
    i = n(24),
    o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
      return typeof t
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    },
    u = function () {
      this.load = function (t, e, n, u) {
        return n && "object" === (void 0 === n ? "undefined" : o(n)) ? r.a.all(Object.keys(n).filter(function (t) {
          return t
        }).map(function (r) {
          var o = n[r];
          return e.setupPlugin(r).then(function (e) {
            if (!u.attributes._destroyed) return Object(i.a)(e, o, t)
          }).catch(function (t) {
            return e.removePlugin(r), t instanceof Error ? t : new Error("Error in " + r + ' "' + t + '"')
          })
        })) : r.b
      }
    },
    a = n(31),
    c = {},
    s = function (t) {
      return t.replace(/^(.*\/)?([^-]*)-?.*\.(js)$/, "$2")
    },
    l = function () {},
    f = l.prototype;
  f.setupPlugin = function (t) {
    var e = this.getPlugin(t);
    return e ? (e.url !== t && Object(a.a)('JW Plugin "' + s(t) + '" already loaded from "' + e.url + '". Ignoring "' + t + '."'), e.promise) : this.addPlugin(t).load()
  }, f.addPlugin = function (t) {
    var e = s(t),
      n = c[e];
    return n || (n = new i.b(t), c[e] = n), n
  }, f.getPlugin = function (t) {
    return c[s(t)]
  }, f.removePlugin = function (t) {
    delete c[s(t)]
  }, f.getPlugins = function () {
    return c
  };
  var d = l;
  n.d(e, "b", function () {
    return h
  }), n.d(e, "a", function () {
    return v
  });
  var p = new d,
    h = function (t, e, n) {
      var r = p.addPlugin(t);
      r.js || r.registerPlugin(t, e, n)
    };

  function v(t, e) {
    var n = t.get("plugins");
    return window.jwplayerPluginJsonp = h, (t.pluginLoader = t.pluginLoader || new u).load(e, p, n, t).then(function (e) {
      if (!t.attributes._destroyed) return e && e.forEach(function (t) {
        t instanceof Error && Object(a.a)(t.message)
      }), delete window.jwplayerPluginJsonp, e
    })
  }
}, function (t, e, n) {
  "use strict";
  n.d(e, "a", function () {
    return d
  });
  var r = n(0),
    i = n(5),
    o = n(30),
    u = n(12),
    a = n(2),
    c = 0,
    s = 1,
    l = function (t) {
      if ("string" == typeof t) {
        var e = (t = t.split("?")[0]).indexOf("://");
        if (e > 0) return c;
        var n = t.indexOf("/"),
          r = Object(a.a)(t);
        return !(e < 0 && n < 0) || r && isNaN(r) ? s : 2
      }
    };
  var f = function (t) {
    this.url = t, this.promise_ = null
  };

  function d(t, e, n) {
    var i = t.name,
      o = document.createElement("div");
    o.id = n.id + "_" + i, o.className = "jw-plugin jw-reset";
    var u = Object(r.j)({}, e),
      a = t.getNewInstance(n, u, o);
    return n.addPlugin(i, a), a
  }
  Object.defineProperties(f.prototype, {
    promise: {
      get: function () {
        return this.promise_ || this.load()
      },
      set: function () {}
    }
  }), Object(r.j)(f.prototype, {
    load: function () {
      var t = this,
        e = this.promise_;
      if (!e) {
        if (2 === l(this.url)) e = i.a.resolve(this);
        else {
          var n = new o.a(function (t) {
            switch (l(t)) {
              case c:
                return t;
              case s:
                return Object(u.getAbsolutePath)(t, window.location.href)
            }
          }(this.url));
          this.loader = n, e = n.load().then(function () {
            return t
          })
        }
        this.promise_ = e
      }
      return e
    },
    registerPlugin: function (t, e, n) {
      this.name = t, this.target = e, this.js = n
    },
    getNewInstance: function (t, e, n) {
      var r = this.js;
      if ("function" != typeof r) throw new Error('"' + this.url + '" did not call registerPlugin');
      var i = new r(t, e, n);
      return i.addToPlayer = function () {
        var e = t.getContainer().querySelector(".jw-overlays");
        e && (n.left = e.style.left, n.top = e.style.top, e.appendChild(n), i.displayArea = e)
      }, i.resizeHandler = function () {
        var t = i.displayArea;
        t && i.resize(t.clientWidth, t.clientHeight)
      }, i
    }
  }), e.b = f
}, function (t, e, n) {
  "use strict";
  var r = n(0),
    i = n(32),
    o = function (t) {
      if (t && t.file) return Object(r.j)({}, {
        kind: "captions",
        default: !1
      }, t)
    },
    u = Array.isArray;
  e.a = function (t) {
    u((t = t || {}).tracks) || delete t.tracks;
    var e = Object(r.j)({}, {
      sources: [],
      tracks: [],
      minDvrWindow: 120,
      dvrSeekLimit: 25
    }, t);
    e.dvrSeekLimit < 5 && (e.dvrSeekLimit = 5), e.sources !== Object(e.sources) || u(e.sources) || (e.sources = [Object(i.a)(e.sources)]), u(e.sources) && 0 !== e.sources.length || (t.levels ? e.sources = t.levels : e.sources = [Object(i.a)(t)]);
    for (var n = 0; n < e.sources.length; n++) {
      var a = e.sources[n];
      if (a) {
        var c = a.default;
        a.default = !!c && "true" === c.toString(), e.sources[n].label || (e.sources[n].label = n.toString()), e.sources[n] = Object(i.a)(e.sources[n])
      }
    }
    return e.sources = e.sources.filter(function (t) {
      return !!t
    }), u(e.tracks) || (e.tracks = []), u(e.captions) && (e.tracks = e.tracks.concat(e.captions), delete e.captions), e.tracks = e.tracks.map(o).filter(function (t) {
      return !!t
    }), e
  }
}, function (t, e, n) {
  "use strict";
  var r = n(0),
    i = {
      none: !0,
      metadata: !0,
      auto: !0
    };

  function o(t, e) {
    return i[t] ? t : i[e] ? e : "metadata"
  }
  var u = n(25),
    a = n(32),
    c = n(41),
    s = n(1);
  n.d(e, "b", function () {
    return l
  }), n.d(e, "e", function () {
    return f
  }), n.d(e, "d", function () {
    return d
  }), n.d(e, "c", function () {
    return p
  });

  function l(t, e, n) {
    return delete Object(r.j)({}, n).playlist, t.map(function (t) {
      return d(e, t, n)
    }).filter(function (t) {
      return !!t
    })
  }

  function f(t) {
    if (!Array.isArray(t) || 0 === t.length) throw new s.p(s.l, 630)
  }

  function d(t, e, n) {
    var i = t.getProviders(),
      u = t.get("preload"),
      a = Object(r.j)({}, e);
    if (a.preload = o(e.preload, u), a.allSources = h(e, t), a.sources = v(a.allSources, i), a.sources.length) return a.file = a.sources[0].file, a.feedData = n, a
  }
  var p = function (t, e) {
    return v(h(t, e), e.getProviders())
  };

  function h(t, e) {
    var n = e.attributes,
      r = t.sources,
      i = t.allSources,
      u = t.preload,
      c = t.drm,
      s = g(t.withCredentials, n.withCredentials);
    return (i || r).map(function (t) {
      if (t !== Object(t)) return null;
      m(t, n, "androidhls"), m(t, n, "hlsjsdefault"), m(t, n, "safarihlsjs"), t.preload = o(t.preload, u);
      var e = t.drm || c || n.drm;
      e && (t.drm = e);
      var r = g(t.withCredentials, s);
      return void 0 !== r && (t.withCredentials = r), Object(a.a)(t)
    }).filter(function (t) {
      return !!t
    })
  }

  function v(t, e) {
    e && e.choose || (e = new c.a);
    var n = function (t, e) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n],
          i = e.choose(r),
          o = i.providerToCheck;
        if (o) return {
          type: r.type,
          provider: o
        }
      }
      return null
    }(t, e);
    if (!n) return [];
    var r = n.provider,
      i = n.type;
    return t.filter(function (t) {
      return t.type === i && e.providerSupports(r, t)
    })
  }

  function g(t, e) {
    return void 0 === t ? e : t
  }

  function m(t, e, n) {
    n in e && (t[n] = e[n])
  }
  e.a = function (t) {
    return (Array.isArray(t) ? t : [t]).map(u.a)
  }
}, function (t, e, n) {
  "use strict";
  var r = n(0),
    i = n(16),
    o = window.performance || {
      timing: {}
    },
    u = o.timing.navigationStart || Object(i.a)();

  function a() {
    return u + o.now()
  }
  "now" in o || (o.now = function () {
    return Object(i.a)() - u
  });
  e.a = function () {
    var t = {},
      e = {},
      n = {},
      i = {};
    return {
      start: function (e) {
        t[e] = a(), n[e] = n[e] + 1 || 1
      },
      end: function (n) {
        if (t[n]) {
          var r = a() - t[n];
          delete t[n], e[n] = e[n] + r || r
        }
      },
      dump: function () {
        var o = Object(r.j)({}, e);
        for (var u in t)
          if (Object.prototype.hasOwnProperty.call(t, u)) {
            var c = a() - t[u];
            o[u] = o[u] + c || c
          }
        return {
          counts: Object(r.j)({}, n),
          sums: o,
          events: Object(r.j)({}, i)
        }
      },
      tick: function (t) {
        i[t] = a()
      },
      clear: function (t) {
        delete i[t]
      },
      between: function (t, e) {
        return i[e] && i[t] ? i[e] - i[t] : null
      }
    }
  }
}, function (t, e, n) {
  "use strict";
  n.d(e, "a", function () {
    return r
  });
  var r = "8.5.2+commercial_v8-5-2.283.commercial.53425ae.hlsjs..jwplayer.458b450.dai.ac94f63.freewheel.503251f.googima.b6bb1db.vast.489ac96.analytics.706e657.gapro.f664e4e.related.210b617"
}, function (t, e, n) {
  "use strict";
  n.d(e, "b", function () {
    return c
  });
  var r = n(58),
    i = n(11),
    o = n(38),
    u = {
      aac: "audio/mp4",
      mp4: "video/mp4",
      f4v: "video/mp4",
      m4v: "video/mp4",
      mov: "video/mp4",
      mp3: "audio/mpeg",
      mpeg: "audio/mpeg",
      ogv: "video/ogg",
      ogg: "video/ogg",
      oga: "video/ogg",
      vorbis: "video/ogg",
      webm: "video/webm",
      f4a: "video/aac",
      m3u8: "application/vnd.apple.mpegurl",
      m3u: "application/vnd.apple.mpegurl",
      hls: "application/vnd.apple.mpegurl"
    },
    a = [{
      name: "html5",
      supports: c
    }];

  function c(t) {
    if (!1 === Object(r.a)(t)) return !1;
    if (!o.a.canPlayType) return !1;
    var e = t.file,
      n = t.type;
    if (Object(i.isRtmp)(e, n)) return !1;
    var a = t.mimeType || u[n];
    return !!a && !!o.a.canPlayType(a)
  }
  e.a = a
}, function (t, e, n) {
  "use strict";
  var r = n(0),
    i = n(6),
    o = n(3),
    u = n(5),
    a = {},
    c = 15e3,
    s = 2,
    l = 3;

  function f(t) {
    var e = document.createElement("link");
    return e.type = "text/css", e.rel = "stylesheet", e.href = t, e
  }

  function d(t) {
    var e = document.createElement("script");
    return e.type = "text/javascript", e.charset = "utf-8", e.async = !0, e.timeout = c, e.src = t, e
  }
  var p = function (t, e) {
    var n = this,
      r = 0;

    function i(t) {
      r = s, n.trigger(o.w, t).off()
    }

    function p(t) {
      r = l, n.trigger(o.Ja, t).off()
    }
    this.getStatus = function () {
      return r
    }, this.load = function () {
      var n = a[t];
      return 0 !== r ? n : (n && n.then(p).catch(i), r = 1, n = new u.a(function (n, r) {
        var o = (e ? f : d)(t),
          u = function () {
            o.onerror = o.onload = null, clearTimeout(s)
          },
          a = function (t) {
            u(), i(t), r(t)
          },
          s = setTimeout(function () {
            a(new Error("Network timeout " + t))
          }, c);
        o.onerror = function () {
          a(new Error("Failed to load " + t))
        }, o.onload = function (t) {
          u(), p(t), n(t)
        };
        var l = document.getElementsByTagName("head")[0] || document.documentElement;
        l.insertBefore(o, l.firstChild)
      }), a[t] = n, n)
    }
  };
  Object(r.j)(p.prototype, i.a), e.a = p
}, function (t, e, n) {
  "use strict";
  n.d(e, "a", function () {
    return r
  });
  var r = "function" == typeof console.log ? console.log.bind(console) : function () {}
}, function (t, e, n) {
  "use strict";
  var r = n(0),
    i = n(11),
    o = n(2);
  e.a = function (t) {
    if (t && t.file) {
      var e = Object(r.j)({}, {
        default: !1
      }, t);
      e.file = Object(o.h)("" + e.file);
      var n = /^[^/]+\/(?:x-)?([^/]+)$/;
      if (n.test(e.type) && (e.mimeType = e.type, e.type = e.type.replace(n, "$1")), Object(i.isYouTube)(e.file) ? e.type = "youtube" : Object(i.isRtmp)(e.file) ? e.type = "rtmp" : e.type || (e.type = Object(o.a)(e.file)), e.type) {
        switch (e.type) {
          case "m3u8":
          case "vnd.apple.mpegurl":
            e.type = "hls";
            break;
          case "dash+xml":
            e.type = "dash";
            break;
          case "m4a":
            e.type = "aac";
            break;
          case "smil":
            e.type = "rtmp"
        }
        return Object.keys(e).forEach(function (t) {
          "" === e[t] && delete e[t]
        }), e
      }
    }
  }
}, function (t, e, n) {
  "use strict";
  e.a = {}
}, function (t, e, n) {
  "use strict";
  n.d(e, "b", function () {
    return x
  });
  var r = n(7),
    i = n(3),
    o = n(50),
    u = n(16),
    a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
      return typeof t
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    },
    c = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
      }
      return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e
      }
    }(),
    s = function t(e, n, r) {
      null === e && (e = Function.prototype);
      var i = Object.getOwnPropertyDescriptor(e, n);
      if (void 0 === i) {
        var o = Object.getPrototypeOf(e);
        return null === o ? void 0 : t(o, n, r)
      }
      if ("value" in i) return i.value;
      var u = i.get;
      return void 0 !== u ? u.call(r) : void 0
    };
  var l = "ontouchstart" in window,
    f = "PointerEvent" in window && !r.OS.android,
    d = !(f || l && r.OS.mobile),
    p = "window",
    h = r.Features.passiveEvents,
    v = !!h && {
      passive: !0
    },
    g = 6,
    m = 300,
    b = 500,
    y = void 0,
    j = function (t) {
      function e(t, n) {
        ! function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, e);
        var r = function (t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
          }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this)),
          i = !(n = n || {}).preventScrolling;
        return r.directSelect = !!n.directSelect, r.dragged = !1, r.enableDoubleTap = !1, r.el = t, r.handlers = {}, r.lastClick = 0, r.lastStart = 0, r.passive = i, r.pointerId = null, r.startX = 0, r.startY = 0, r
      }
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
      }(e, o["a"]), c(e, [{
        key: "on",
        value: function (t, n, r) {
          return O(t) && (this.handlers[t] || k[t](this)), s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "on", this).call(this, t, n, r)
        }
      }, {
        key: "off",
        value: function (t, n, r) {
          var i = this;
          if (O(t)) P(this, t);
          else if (!t) {
            var o = this.handlers;
            Object.keys(o).forEach(function (t) {
              P(i, t)
            })
          }
          return s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "off", this).call(this, t, n, r)
        }
      }, {
        key: "destroy",
        value: function () {
          this.off(), f && T(this), this.el = null
        }
      }]), e
    }();
  e.a = j;
  var w = /\s+/;

  function O(t) {
    return t && !(w.test(t) || "object" === (void 0 === t ? "undefined" : a(t)))
  }

  function C(t) {
    if (!t.handlers.init) {
      var e = t.el,
        n = t.passive,
        r = !!h && {
          passive: n
        },
        o = function (i) {
          if (! function (t) {
              if ("which" in t) return 3 === t.which;
              if ("button" in t) return 2 === t.button;
              return !1
            }(i)) {
            var o = i.target,
              s = i.type;
            if (!t.directSelect || o === e) {
              var l = A(i),
                f = l.pageX,
                d = l.pageY;
              if (t.dragged = !1, t.lastStart = Object(u.a)(), t.startX = f, t.startY = d, P(t, p), "pointerdown" === s && i.isPrimary) {
                if (!n) {
                  var h = i.pointerId;
                  t.pointerId = h, e.setPointerCapture(h)
                }
                S(t, p, "pointermove", a, r), S(t, p, "pointercancel", c), S(t, p, "pointerup", c)
              } else "mousedown" === s ? (S(t, p, "mousemove", a, r), S(t, p, "mouseup", c)) : "touchstart" === s && (S(t, p, "touchmove", a, r), S(t, p, "touchcancel", c), S(t, p, "touchend", c), n || M(i))
            }
          }
        },
        a = function (e) {
          if (t.dragged) _(t, i.s, e);
          else {
            var r = A(e),
              o = r.pageX,
              u = r.pageY,
              a = o - t.startX,
              c = u - t.startY;
            a * a + c * c > g * g && (_(t, i.u, e), t.dragged = !0, _(t, i.s, e))
          }
          n || "touchmove" !== e.type || M(e)
        },
        c = function (n) {
          if (clearTimeout(y), T(t), P(t, p), t.dragged) t.dragged = !1, _(t, i.t, n);
          else if (-1 === n.type.indexOf("cancel") && e.contains(n.target)) {
            if (Object(u.a)() - t.lastStart > b) return;
            var r = "pointerup" === n.type || "pointercancel" === n.type,
              o = "mouseup" === n.type || r && "mouse" === n.pointerType;
            ! function (t, e, n) {
              if (t.enableDoubleTap)
                if (Object(u.a)() - t.lastClick < m) {
                  var r = n ? i.q : i.r;
                  _(t, r, e), t.lastClick = 0
                } else t.lastClick = Object(u.a)()
            }(t, n, o), o ? _(t, i.n, n) : (_(t, i.Qa, n), "touchend" !== n.type || h || M(n))
          }
        };
      f ? S(t, "init", "pointerdown", o, r) : (d && S(t, "init", "mousedown", o, r), S(t, "init", "touchstart", o, r))
    }
  }
  var k = {
    drag: function (t) {
      C(t)
    },
    dragStart: function (t) {
      C(t)
    },
    dragEnd: function (t) {
      C(t)
    },
    click: function (t) {
      C(t)
    },
    tap: function (t) {
      C(t)
    },
    doubleTap: function (t) {
      t.enableDoubleTap = !0, C(t)
    },
    doubleClick: function (t) {
      t.enableDoubleTap = !0, C(t)
    },
    longPress: function (t) {
      if (r.OS.iOS) {
        var e = function () {
          clearTimeout(y)
        };
        S(t, "longPress", "touchstart", function (n) {
          e(), y = setTimeout(function () {
            _(t, "longPress", n)
          }, b)
        }), S(t, "longPress", "touchmove", e), S(t, "longPress", "touchcancel", e), S(t, "longPress", "touchend", e)
      } else t.el.oncontextmenu = function (e) {
        return _(t, "longPress", e), !1
      }
    },
    focus: function (t) {
      S(t, "focus", "focus", function (e) {
        E(t, "focus", e)
      })
    },
    blur: function (t) {
      S(t, "blur", "blur", function (e) {
        E(t, "blur", e)
      })
    },
    over: function (t) {
      (f || d) && S(t, i.X, f ? "pointerover" : "mouseover", function (e) {
        "touch" !== e.pointerType && _(t, i.X, e)
      })
    },
    out: function (t) {
      if (f) {
        var e = t.el;
        S(t, i.W, "pointerout", function (n) {
          if ("touch" !== n.pointerType && "x" in n) {
            var r = document.elementFromPoint(n.x, n.y);
            e.contains(r) || _(t, i.W, n)
          }
        })
      } else d && S(t, i.W, "mouseout", function (e) {
        _(t, i.W, e)
      })
    },
    move: function (t) {
      (f || d) && S(t, i.U, f ? "pointermove" : "mousemove", function (e) {
        "touch" !== e.pointerType && _(t, i.U, e)
      })
    },
    enter: function (t) {
      S(t, i.v, "keydown", function (e) {
        "Enter" !== e.key && 13 !== e.keyCode || (e.stopPropagation(), E(t, i.v, e))
      })
    },
    gesture: function (t) {
      var e = function (e) {
        return _(t, "gesture", e)
      };
      S(t, "gesture", "click", e), S(t, "gesture", "keydown", e)
    }
  };

  function x(t) {
    var e = t.ownerDocument || t;
    return e.defaultView || e.parentWindow || window
  }

  function S(t, e, n, r, i) {
    var o = t.handlers[e];
    if (o || (o = t.handlers[e] = {}), o[n]) throw new Error(e + " " + n + " already registered");
    o[n] = r;
    var u = t.el;
    (e === p ? x(u) : u).addEventListener(n, r, i || v)
  }

  function P(t, e) {
    var n = t.el,
      r = t.handlers,
      i = e === p ? x(n) : n,
      o = r[e];
    o && (Object.keys(o).forEach(function (t) {
      i.removeEventListener(t, o[t])
    }), r[e] = null)
  }

  function T(t) {
    var e = t.el;
    null !== t.pointerId && (e.releasePointerCapture(t.pointerId), t.pointerId = null)
  }

  function E(t, e, n) {
    var r = t.el,
      i = n.target;
    t.trigger(e, {
      type: e,
      sourceEvent: n,
      currentTarget: r,
      target: i
    })
  }

  function _(t, e, n) {
    var r = function (t, e, n) {
      var r = e.target,
        i = e.touches,
        o = e.changedTouches,
        u = e.pointerType,
        a = void 0;
      i || o ? (a = i && i.length ? i[0] : o[0], u = u || "touch") : (a = e, u = u || "mouse");
      var c = a,
        s = c.pageX,
        l = c.pageY;
      return {
        type: t,
        pointerType: u,
        pageX: s,
        pageY: l,
        sourceEvent: e,
        currentTarget: n,
        target: r
      }
    }(e, n, t.el);
    t.trigger(e, r)
  }

  function A(t) {
    return 0 === t.type.indexOf("touch") ? (t.originalEvent || t).changedTouches[0] : t
  }

  function M(t) {
    t.preventDefault && t.preventDefault()
  }
}, , function (t, e, n) {
  "use strict";
  n.d(e, "b", function () {
    return s
  }), n.d(e, "d", function () {
    return l
  }), n.d(e, "c", function () {
    return f
  }), n.d(e, "a", function () {
    return d
  });
  var r = n(17),
    i = n(5),
    o = [{
      configName: "clearkey",
      keyName: "org.w3.clearkey"
    }, {
      configName: "widevine",
      keyName: "com.widevine.alpha"
    }, {
      configName: "playready",
      keyName: "com.microsoft.playready"
    }],
    u = [],
    a = {},
    c = void 0;

  function s(t) {
    return t.some(function (t) {
      return !!t.drm || t.sources.some(function (t) {
        return !!t.drm
      })
    })
  }

  function l(t) {
    return c || ((navigator.requestMediaKeySystemAccess && MediaKeySystemAccess.prototype.getConfiguration || window.MSMediaKeys) && Object(r.a)(t)("drm") ? (o.forEach(function (t) {
      var e, n, r = (e = t.keyName, n = [{
        initDataTypes: ["cenc"],
        videoCapabilities: [{
          contentType: 'video/mp4;codecs="avc1.4d401e"'
        }],
        audioCapabilities: [{
          contentType: 'audio/mp4;codecs="mp4a.40.2"'
        }]
      }], navigator.requestMediaKeySystemAccess ? navigator.requestMediaKeySystemAccess(e, n) : new i.a(function (t, n) {
        var r = void 0;
        try {
          r = new window.MSMediaKeys(e)
        } catch (t) {
          return void n(t)
        }
        t(r)
      })).then(function () {
        a[t.configName] = !0
      }).catch(function () {
        a[t.configName] = !1
      });
      u.push(r)
    }), c = i.a.all(u)) : i.b)
  }

  function f(t) {
    return a[t]
  }

  function d(t) {
    if (c) return Object.keys(t).some(function (t) {
      return f(t)
    })
  }
}, function (t, e, n) {
  "use strict";
  n.d(e, "a", function () {
    return o
  }), n.d(e, "b", function () {
    return u
  });
  var r = n(9),
    i = null,
    o = {};

  function u() {
    return i || (i = n.e(2).then(function (t) {
      var e = n(20).default;
      return o.controls = e, e
    }.bind(null, n)).catch(function () {
      i = null, Object(r.b)(130)()
    })), i
  }
}, function (t, e, n) {
  "use strict";
  var r = document.createElement("video");
  e.a = r
}, function (t, e, n) {
  "use strict";
  n.d(e, "a", function () {
    return g
  });
  var r = n(0),
    i = n(12),
    o = n(1),
    u = 1,
    a = 2,
    c = 3,
    s = 4,
    l = 5,
    f = 6,
    d = 601,
    p = 602,
    h = 611,
    v = function () {};

  function g(t, e, n, d) {
    t === Object(t) && (t = (d = t).url);
    var j = void 0,
      w = Object(r.j)({
        xhr: null,
        url: t,
        withCredentials: !1,
        retryWithoutCredentials: !1,
        timeout: 6e4,
        timeoutId: -1,
        oncomplete: e || v,
        onerror: n || v,
        mimeType: d && !d.responseType ? "text/xml" : "",
        requireValidXML: !1,
        responseType: d && d.plainText ? "text" : "",
        useDomParser: !1,
        requestFilter: null
      }, d),
      O = function (t, e) {
        return function (t, n) {
          var i = t.currentTarget || e.xhr;
          if (clearTimeout(e.timeoutId), e.retryWithoutCredentials && e.xhr.withCredentials) {
            m(i);
            var u = Object(r.j)({}, e, {
              xhr: null,
              withCredentials: !1,
              retryWithoutCredentials: !1
            });
            g(u)
          } else !n && i.status >= 400 && i.status < 600 && (n = i.status), b(e, n ? o.l : o.o, n || f, t)
        }
      }(0, w);
    if ("XMLHttpRequest" in window) {
      if (j = w.xhr = w.xhr || new window.XMLHttpRequest, "function" == typeof w.requestFilter) {
        var C = void 0;
        try {
          C = w.requestFilter({
            url: t,
            xhr: j
          })
        } catch (t) {
          return O(t, l), j
        }
        C && "open" in C && "send" in C && (j = w.xhr = C)
      }
      j.onreadystatechange = function (t) {
        return function (e) {
          var n = e.currentTarget || t.xhr;
          if (4 === n.readyState) {
            if (clearTimeout(t.timeoutId), n.status >= 400) return void b(t, o.l, n.status < 600 ? n.status : f);
            if (200 === n.status) return function (t) {
              return function (e) {
                var n = e.currentTarget || t.xhr;
                if (clearTimeout(t.timeoutId), t.responseType) {
                  if ("json" === t.responseType) return function (t, e) {
                    if (!t.response || "string" == typeof t.response && '"' !== t.responseText.substr(1)) try {
                      t = Object(r.j)({}, t, {
                        response: JSON.parse(t.responseText)
                      })
                    } catch (t) {
                      return void b(e, o.l, h, t)
                    }
                    return e.oncomplete(t)
                  }(n, t)
                } else {
                  var u = n.responseXML,
                    a = void 0;
                  if (u) try {
                    a = u.firstChild
                  } catch (t) {}
                  if (u && a) return y(n, u, t);
                  if (t.useDomParser && n.responseText && !u && (u = Object(i.parseXML)(n.responseText)) && u.firstChild) return y(n, u, t);
                  if (t.requireValidXML) return void b(t, o.l, p)
                }
                t.oncomplete(n)
              }
            }(t)(e)
          }
        }
      }(w), j.onerror = O, "overrideMimeType" in j ? w.mimeType && j.overrideMimeType(w.mimeType) : w.useDomParser = !0;
      try {
        t = t.replace(/#.*$/, ""), j.open("GET", t, !0)
      } catch (t) {
        return O(t, c), j
      }
      if (w.responseType) try {
        j.responseType = w.responseType
      } catch (t) {}
      w.timeout && (w.timeoutId = setTimeout(function () {
        m(j), b(w, o.o, u)
      }, w.timeout), j.onabort = function () {
        clearTimeout(w.timeoutId)
      });
      try {
        w.withCredentials && "withCredentials" in j && (j.withCredentials = !0), j.send()
      } catch (t) {
        O(t, s)
      }
      return j
    }
    b(w, o.o, a)
  }

  function m(t) {
    t.onload = null, t.onprogress = null, t.onreadystatechange = null, t.onerror = null, "abort" in t && t.abort()
  }

  function b(t, e, n, r) {
    t.onerror(e, t.url, t.xhr, new o.p(e, n, r))
  }

  function y(t, e, n) {
    var i = e.documentElement;
    if (!n.requireValidXML || "parsererror" !== i.nodeName && !i.getElementsByTagName("parsererror").length) return t.responseXML || (t = Object(r.j)({}, t, {
      responseXML: e
    })), n.oncomplete(t);
    b(n, o.l, d)
  }
}, function (t, e) {
  var n, r, i = {},
    o = {},
    u = (n = function () {
      return document.head || document.getElementsByTagName("head")[0]
    }, function () {
      return void 0 === r && (r = n.apply(this, arguments)), r
    });

  function a(t) {
    var e = document.createElement("style");
    return e.type = "text/css", e.setAttribute("data-jwplayer-id", t),
      function (t) {
        u().appendChild(t)
      }(e), e
  }

  function c(t, e) {
    var n, r, i, u = o[t];
    u || (u = o[t] = {
      element: a(t),
      counter: 0
    });
    var c = u.counter++;
    return n = u.element, i = function () {
        f(n, c, "")
      }, (r = function (t) {
        f(n, c, t)
      })(e.css),
      function (t) {
        if (t) {
          if (t.css === e.css && t.media === e.media) return;
          r((e = t).css)
        } else i()
      }
  }
  t.exports = {
    style: function (t, e) {
      ! function (t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n],
            o = (i[t] || {})[r.id];
          if (o) {
            for (var u = 0; u < o.parts.length; u++) o.parts[u](r.parts[u]);
            for (; u < r.parts.length; u++) o.parts.push(c(t, r.parts[u]))
          } else {
            for (var a = [], u = 0; u < r.parts.length; u++) a.push(c(t, r.parts[u]));
            i[t] = i[t] || {}, i[t][r.id] = {
              id: r.id,
              parts: a
            }
          }
        }
      }(e, function (t) {
        for (var e = [], n = {}, r = 0; r < t.length; r++) {
          var i = t[r],
            o = i[0],
            u = i[1],
            a = i[2],
            c = {
              css: u,
              media: a
            };
          n[o] ? n[o].parts.push(c) : e.push(n[o] = {
            id: o,
            parts: [c]
          })
        }
        return e
      }(t))
    },
    clear: function (t, e) {
      var n = i[t];
      if (!n) return;
      if (e) {
        var r = n[e];
        if (r)
          for (var o = 0; o < r.parts.length; o += 1) r.parts[o]();
        return
      }
      for (var u = Object.keys(n), a = 0; a < u.length; a += 1)
        for (var c = n[u[a]], s = 0; s < c.parts.length; s += 1) c.parts[s]();
      delete i[t]
    }
  };
  var s, l = (s = [], function (t, e) {
    return s[t] = e, s.filter(Boolean).join("\n")
  });

  function f(t, e, n) {
    if (t.styleSheet) t.styleSheet.cssText = l(e, n);
    else {
      var r = document.createTextNode(n),
        i = t.childNodes[e];
      i ? t.replaceChild(r, i) : t.appendChild(r)
    }
  }
}, function (t, e, n) {
  "use strict";
  var r = n(0),
    i = n(15),
    o = n(14),
    u = n(33),
    a = n(9),
    c = n(5);

  function s(t) {
    this.config = t || {}
  }
  var l = {
    html5: function () {
      return n.e(1).then(function (t) {
        var e = n(123).default;
        return Object(o.a)(e), e
      }.bind(null, n)).catch(Object(a.b)(152))
    }
  };
  Object(r.j)(s.prototype, {
    load: function (t) {
      var e = l[t],
        n = function () {
          return c.a.reject(new Error("Failed to load media"))
        };
      return e ? e().then(function () {
        var e = u.a[t];
        return e || n()
      }) : n()
    },
    providerSupports: function (t, e) {
      return t.supports(e)
    },
    choose: function (t) {
      if (t === Object(t))
        for (var e = i.a.length, n = 0; n < e; n++) {
          var r = i.a[n];
          if (this.providerSupports(r, t)) return {
            priority: e - n - 1,
            name: r.name,
            type: t.type,
            providerToCheck: r,
            provider: u.a[r.name]
          }
        }
      return {}
    }
  });
  var f = s,
    d = void 0;
  Object(r.j)(l, {
    shaka: function () {
      return n.e(11).then(function (t) {
        var e = n(142).default;
        return Object(o.a)(e), e
      }.bind(null, n)).catch(Object(a.b)(154))
    },
    hlsjs: function () {
      return n.e(10).then(function (t) {
        var e = n(143).default;
        return e.setEdition && e.setEdition(d), Object(o.a)(e), e
      }.bind(null, n)).catch(Object(a.b)(153))
    },
    flash: function () {
      return n.e(9).then(function (t) {
        var e = n(140).default;
        return Object(o.a)(e), e
      }.bind(null, n)).catch(Object(a.b)(151))
    }
  }), f.prototype.providerSupports = function (t, e) {
    return d = this.config.edition, t.supports(e, d)
  };
  e.a = f
}, function (t, e, n) {
  "use strict";
  var r = function (t, e, n, r) {
      var i = r ? ("(" + n + ": " + r + ")").replace(/\s+/g, "&nbsp;") : "";
      return '<div id="' + t + '" class="jw-error jw-reset"><div class="jw-error-msg jw-info-overlay jw-reset"><style>[id="' + t + '"].jw-error{background:#000;overflow:hidden;position:relative}[id="' + t + '"] .jw-error-msg{top:50%;left:50%;position:absolute;transform:translate(-50%,-50%)}[id="' + t + '"] .jw-error-text{color:#FFF;font:14px/1.35 Arial,Helvetica,sans-serif}</style><div class="jw-icon jw-reset"></div><div class="jw-info-container jw-reset"><div class="jw-error-text jw-reset">' + (e || "") + '<span class="jw-break jw-reset"></span>' + i + "</div></div></div></div>"
    },
    i = n(10),
    o = n(22);

  function u(t, e) {
    var n = e.message,
      u = e.code,
      a = r(t.get("id"), n, t.get("localization").errors.errorCode, u),
      c = t.get("width"),
      s = t.get("height"),
      l = Object(i.e)(a);
    return Object(o.d)(l, {
      width: c.toString().indexOf("%") > 0 ? c : c + "px",
      height: s.toString().indexOf("%") > 0 ? s : s + "px"
    }), l
  }
  n.d(e, "a", function () {
    return u
  })
}, function (t, e, n) {
  "use strict";
  n.d(e, "a", function () {
    return r
  });
  var r = window.atob
}, function (t, e, n) {
  "use strict";
  var r = n(4),
    i = n(2);

  function o(t) {
    for (var e = [], n = 0; n < Object(r.c)(t); n++) {
      var i = t.childNodes[n];
      "jwplayer" === i.prefix && "mediatypes" === Object(r.b)(i).toLowerCase() && e.push(Object(r.d)(i))
    }
    return e
  }
  var u = function t(e, n) {
      var u, a, c = [];
      for (var s = 0; s < Object(r.c)(e); s++) {
        var l = e.childNodes[s];
        if ("media" === l.prefix) {
          if (!Object(r.b)(l)) continue;
          switch (Object(r.b)(l).toLowerCase()) {
            case "content":
              if (Object(i.i)(l, "duration") && (n.duration = Object(i.f)(Object(i.i)(l, "duration"))), Object(i.i)(l, "url")) {
                n.sources || (n.sources = []);
                var f = {
                    file: Object(i.i)(l, "url"),
                    type: Object(i.i)(l, "type"),
                    width: Object(i.i)(l, "width"),
                    label: Object(i.i)(l, "label")
                  },
                  d = o(l);
                d.length && (f.mediaTypes = d), n.sources.push(f)
              }
              Object(r.c)(l) > 0 && (n = t(l, n));
              break;
            case "title":
              n.title = Object(r.d)(l);
              break;
            case "description":
              n.description = Object(r.d)(l);
              break;
            case "guid":
              n.mediaid = Object(r.d)(l);
              break;
            case "thumbnail":
              n.image || (n.image = Object(i.i)(l, "url"));
              break;
            case "group":
              t(l, n);
              break;
            case "subtitle":
              var p = {};
              p.file = Object(i.i)(l, "url"), p.kind = "captions", Object(i.i)(l, "lang").length > 0 && (p.label = (u = Object(i.i)(l, "lang"), (a = {
                zh: "Chinese",
                nl: "Dutch",
                en: "English",
                fr: "French",
                de: "German",
                it: "Italian",
                ja: "Japanese",
                pt: "Portuguese",
                ru: "Russian",
                es: "Spanish"
              })[u] ? a[u] : u)), c.push(p)
          }
        }
      }
      n.hasOwnProperty("tracks") || (n.tracks = []);
      for (var h = 0; h < c.length; h++) n.tracks.push(c[h]);
      return n
    },
    a = n(12),
    c = function (t, e) {
      for (var n = "default", o = [], u = [], c = 0; c < t.childNodes.length; c++) {
        var s = t.childNodes[c];
        if ("jwplayer" === s.prefix) {
          var l = Object(r.b)(s);
          "source" === l ? (delete e.sources, o.push({
            file: Object(i.i)(s, "file"),
            default: Object(i.i)(s, n),
            label: Object(i.i)(s, "label"),
            type: Object(i.i)(s, "type")
          })) : "track" === l ? (delete e.tracks, u.push({
            file: Object(i.i)(s, "file"),
            default: Object(i.i)(s, n),
            kind: Object(i.i)(s, "kind"),
            label: Object(i.i)(s, "label")
          })) : (e[l] = Object(a.serialize)(Object(r.d)(s)), "file" === l && e.sources && delete e.sources)
        }
        e.file || (e.file = e.link)
      }
      if (o.length) {
        e.sources = [];
        for (var f = 0; f < o.length; f++) o[f].file.length > 0 && (o[f][n] = "true" === o[f][n], o[f].label.length || delete o[f].label, e.sources.push(o[f]))
      }
      if (u.length) {
        e.tracks = [];
        for (var d = 0; d < u.length; d++) u[d].file.length > 0 && (u[d][n] = "true" === u[d][n], u[d].kind = u[d].kind.length ? u[d].kind : "captions", u[d].label.length || delete u[d].label, e.tracks.push(u[d]))
      }
      return e
    },
    s = n(25);

  function l(t) {
    var e = [];
    e.feedData = {};
    for (var n = 0; n < Object(r.c)(t); n++) {
      var i = Object(r.a)(t, n);
      if ("channel" === Object(r.b)(i).toLowerCase())
        for (var o = 0; o < Object(r.c)(i); o++) {
          var u = Object(r.a)(i, o),
            a = Object(r.b)(u).toLowerCase();
          "item" === a ? e.push(f(u)) : a && (e.feedData[a] = Object(r.d)(u))
        }
    }
    return e
  }

  function f(t) {
    for (var e = {}, n = 0; n < t.childNodes.length; n++) {
      var o = t.childNodes[n],
        a = Object(r.b)(o);
      if (a) switch (a.toLowerCase()) {
        case "enclosure":
          e.file = Object(i.i)(o, "url");
          break;
        case "title":
          e.title = Object(r.d)(o);
          break;
        case "guid":
          e.mediaid = Object(r.d)(o);
          break;
        case "pubdate":
          e.date = Object(r.d)(o);
          break;
        case "description":
          e.description = Object(r.d)(o);
          break;
        case "link":
          e.link = Object(r.d)(o);
          break;
        case "category":
          e.tags ? e.tags += Object(r.d)(o) : e.tags = Object(r.d)(o)
      }
    }
    return new s.a(c(t, u(t, e)))
  }
  n.d(e, "a", function () {
    return l
  })
}, function (t, e, n) {
  "use strict";
  n.d(e, "a", function () {
    return o
  });
  var r = n(43);

  function i(t) {
    for (var e = new Array(Math.ceil(t.length / 4)), n = 0; n < e.length; n++) e[n] = t.charCodeAt(4 * n) + (t.charCodeAt(4 * n + 1) << 8) + (t.charCodeAt(4 * n + 2) << 16) + (t.charCodeAt(4 * n + 3) << 24);
    return e
  }

  function o(t, e) {
    if (t = String(t), e = String(e), 0 === t.length) return "";
    for (var n, o = i(Object(r.a)(t)), u = i((n = e, unescape(encodeURIComponent(n))).slice(0, 16)), a = o.length, c = o[a - 1], s = o[0], l = void 0, f = void 0, d = 2654435769 * Math.floor(6 + 52 / a); d;) {
      f = d >>> 2 & 3;
      for (var p = a - 1; p >= 0; p--) l = ((c = o[p > 0 ? p - 1 : a - 1]) >>> 5 ^ s << 2) + (s >>> 3 ^ c << 4) ^ (d ^ s) + (u[3 & p ^ f] ^ c), s = o[p] -= l;
      d -= 2654435769
    }
    return function (t) {
      try {
        return decodeURIComponent(escape(t))
      } catch (e) {
        return t
      }
    }(function (t) {
      for (var e = new Array(t.length), n = 0; n < t.length; n++) e[n] = String.fromCharCode(255 & t[n], t[n] >>> 8 & 255, t[n] >>> 16 & 255, t[n] >>> 24 & 255);
      return e.join("")
    }(o).replace(/\0+$/, ""))
  }
}, function (t, e, n) {
  "use strict";
  var r = n(45),
    i = n(17),
    o = n(43),
    u = "invalid";
  e.a = function (t) {
    var e = void 0,
      n = void 0,
      a = void 0;
    this.edition = function () {
        return a && a.getTime() < (new Date).getTime() ? "expired" : e
      }, this.token = function () {
        return n
      }, this.expiration = function () {
        return a
      },
      function (t, c) {
        try {
          var s = Object(r.a)(t, Object(o.a)(c)).split("/");
          "pro" === (e = s[0]) && (e = "premium");
          var l = Object(i.a)(e);
          if (s.length > 2 && l("setup")) {
            n = s[1];
            var f = parseInt(s[2]);
            f > 0 && (a = new Date).setTime(f)
          } else e = u
        } catch (t) {
          e = u
        }
      }(t || "", "NDh2aU1Cb0NHRG5hcDFRZQ==")
  }
}, function (t, e, n) {
  "use strict";
  n.d(e, "b", function () {
    return r
  }), n.d(e, "a", function () {
    return i
  });
  var r = {
      audioMode: !1,
      flashBlocked: !1,
      item: 0,
      itemMeta: {},
      playbackRate: 1,
      playRejected: !1,
      state: n(3).La,
      itemReady: !1,
      controlsEnabled: !1
    },
    i = {
      position: 0,
      duration: 0,
      buffer: 0,
      currentTime: 0
    }
}, function (t, e, n) {
  "use strict";
  n.d(e, "b", function () {
    return i
  }), n.d(e, "a", function () {
    return o
  });
  var r = n(21);

  function i(t, e) {
    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
    if (r.a.debug) return t.apply(e || this, n);
    try {
      return t.apply(e || this, n)
    } catch (e) {
      return new o(t.name, e)
    }
  }

  function o(t, e) {
    this.name = t, this.message = e.message || e.toString(), this.error = e
  }
}, function (t, e, n) {
  "use strict";
  n.d(e, "a", function () {
    return r
  });
  var r = function (t, e, n) {
    return Math.max(Math.min(t, n), e)
  }
}, function (t, e, n) {
  "use strict";
  var r = n(0),
    i = n(6);
  var o = function t() {
    ! function (t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }(this, t)
  };
  e.a = o, o.prototype = Object(r.j)({}, i.a)
}, function (t, e, n) {
  "use strict";
  var r = n(6),
    i = {
      on: r.a.on,
      once: r.a.once,
      off: r.a.off,
      trigger: r.a.trigger,
      get: function (t) {
        return this.attributes = this.attributes || {}, this.attributes[t]
      },
      set: function (t, e) {
        if (this.attributes = this.attributes || {}, this.attributes[t] !== e) {
          var n = this.attributes[t];
          this.attributes[t] = e, this.trigger("change:" + t, this, e, n)
        }
      },
      clone: function () {
        var t = {},
          e = this.attributes;
        if (e)
          for (var n in e) t[n] = e[n];
        return t
      },
      change: function (t, e, n) {
        this.on("change:" + t, e, n);
        var r = this.get(t);
        return e.call(n, this, r, r), this
      }
    };
  e.a = i
}, function (t, e, n) {
  "use strict";
  n.d(e, "c", function () {
    return r
  }), n.d(e, "b", function () {
    return i
  }), n.d(e, "a", function () {
    return o
  });
  var r = 4,
    i = 2,
    o = 1
}, function (t, e, n) {
  "use strict";

  function r(t, e, n) {
    var r = [],
      i = {};

    function o() {
      for (; r.length > 0;) {
        var e = r.shift(),
          n = e.command,
          o = e.args;
        (i[n] || t[n]).apply(t, o)
      }
    }
    e.forEach(function (e) {
      var u = t[e];
      i[e] = u, t[e] = function () {
        var t = Array.prototype.slice.call(arguments, 0);
        n() ? r.push({
          command: e,
          args: t
        }) : (o(), u && u.apply(this, t))
      }
    }), Object.defineProperty(this, "queue", {
      enumerable: !0,
      get: function () {
        return r
      }
    }), this.flush = o, this.empty = function () {
      r.length = 0
    }, this.off = function () {
      e.forEach(function (e) {
        var n = i[e];
        n && (t[e] = n, delete i[e])
      })
    }, this.destroy = function () {
      this.off(), this.empty()
    }
  }
  n.d(e, "a", function () {
    return r
  })
}, function (t, e, n) {
  "use strict";
  var r = n(3),
    i = function () {},
    o = function () {
      return !1
    },
    u = {
      name: "default"
    },
    a = {
      supports: o,
      play: i,
      pause: i,
      preload: i,
      load: i,
      stop: i,
      volume: i,
      mute: i,
      seek: i,
      resize: i,
      remove: i,
      destroy: i,
      eventsOn_: i,
      eventsOff_: i,
      setVisibility: i,
      setFullscreen: i,
      getFullscreen: o,
      supportsFullscreen: o,
      getContainer: i,
      setContainer: i,
      getName: function () {
        return u
      },
      getQualityLevels: i,
      getCurrentQuality: i,
      setCurrentQuality: i,
      getAudioTracks: i,
      getCurrentAudioTrack: i,
      setCurrentAudioTrack: i,
      getSeekRange: function () {
        return {
          start: 0,
          end: this.getDuration()
        }
      },
      setPlaybackRate: i,
      getPlaybackRate: function () {
        return 1
      },
      getBandwidthEstimate: function () {
        return null
      },
      setControls: i,
      attachMedia: i,
      detachMedia: i,
      init: i,
      setState: function (t) {
        this.state = t, this.trigger(r.Z, {
          newstate: t
        })
      },
      sendMediaType: function (t) {
        var e = t[0],
          n = e.type,
          i = e.mimeType,
          o = "aac" === n || "mp3" === n || "mpeg" === n || i && 0 === i.indexOf("audio/");
        this.trigger(r.R, {
          mediaType: o ? "audio" : "video"
        })
      }
    };
  e.a = a
}, function (t, e, n) {
  "use strict";
  var r = n(0),
    i = n(53),
    o = n(18),
    u = n(12),
    a = n(7),
    c = {
      autostart: !1,
      bandwidthEstimate: null,
      bitrateSelection: null,
      castAvailable: !1,
      controls: !0,
      defaultPlaybackRate: 1,
      displaydescription: !0,
      displaytitle: !0,
      height: 360,
      liveTimeout: null,
      localization: {
        airplay: "AirPlay",
        audioTracks: "Audio Tracks",
        buffer: "Loading",
        cast: "Chromecast",
        cc: "Closed Captions",
        close: "Close",
        copied: "Copied",
        errors: {
          badConnection: "This video cannot be played because of a problem with your internet connection.",
          cantLoadPlayer: "Sorry, the video player failed to load.",
          cantPlayInBrowser: "The video cannot be played in this browser.",
          cantPlayVideo: "This video file cannot be played.",
          errorCode: "Error Code",
          liveStreamDown: "The live stream is either down or has ended.",
          protectedContent: "There was a problem providing access to protected content.",
          technicalError: "This video cannot be played because of a technical error."
        },
        fullscreen: "Fullscreen",
        hd: "Quality",
        liveBroadcast: "Live",
        loadingAd: "Loading ad",
        more: "More",
        next: "Next",
        nextUp: "Next Up",
        nextUpClose: "Next Up Close",
        pause: "Pause",
        player: "Video Player",
        play: "Play",
        playback: "Start Playback",
        playbackRates: "Playback Rates",
        playlist: "Playlist",
        prev: "Previous",
        related: "More Videos",
        replay: "Replay",
        rewind: "Rewind 10 Seconds",
        settings: "Settings",
        stop: "Stop",
        unmute: "Unmute",
        videoInfo: "About This Video",
        volume: "Volume"
      },
      mute: !1,
      nextUpDisplay: !0,
      playbackRateControls: !1,
      playbackRates: [.5, 1, 1.25, 1.5, 2],
      renderCaptionsNatively: !1,
      repeat: !1,
      stretching: "uniform",
      volume: 90,
      width: 640
    };

  function s(t) {
    return t.slice && "px" === t.slice(-2) && (t = t.slice(0, -2)), t
  }
  var l = function (t, e) {
      var i = Object(r.j)({}, (window.jwplayer || {}).defaults, e, t);
      ! function (t) {
        Object.keys(t).forEach(function (e) {
          "id" !== e && (t[e] = Object(u.serialize)(t[e]))
        })
      }(i), i.localization = Object(r.j)({}, c.localization, i.localization), i.localization.errors = Object(r.j)({}, c.localization.errors, i.localization.errors);
      var l = Object(r.j)({}, c, i);
      "." === l.base && (l.base = Object(o.getScriptPath)("jwplayer.js")), l.base = (l.base || Object(o.loadFrom)()).replace(/\/?$/, "/"), n.p = l.base, l.width = s(l.width), l.height = s(l.height), l.aspectratio = function (t, e) {
        if (-1 === e.toString().indexOf("%")) return 0;
        if ("string" != typeof t || !t) return 0;
        if (/^\d*\.?\d+%$/.test(t)) return t;
        var n = t.indexOf(":");
        if (-1 === n) return 0;
        var r = parseFloat(t.substr(0, n)),
          i = parseFloat(t.substr(n + 1));
        return r <= 0 || i <= 0 ? 0 : i / r * 100 + "%"
      }(l.aspectratio, l.width), l.volume = Object(r.z)(l.volume) ? Math.min(Math.max(0, l.volume), 100) : c.volume, l.mute = !!l.mute;
      var f = l.playbackRateControls;
      if (f) {
        var d = l.playbackRates;
        Array.isArray(f) && (d = f), (d = d.filter(function (t) {
          return Object(r.v)(t) && t >= .25 && t <= 4
        }).map(function (t) {
          return Math.round(100 * t) / 100
        })).indexOf(1) < 0 && d.push(1), d.sort(), l.playbackRateControls = !0, l.playbackRates = d
      }(!l.playbackRateControls || l.playbackRates.indexOf(l.defaultPlaybackRate) < 0) && (l.defaultPlaybackRate = 1), l.playbackRate = l.defaultPlaybackRate, l.aspectratio || delete l.aspectratio;
      var p = l.playlist;
      if (p) Array.isArray(p.playlist) && (l.feedData = p, l.playlist = p.playlist);
      else {
        var h = Object(r.D)(l, ["title", "description", "type", "mediaid", "image", "file", "sources", "tracks", "preload", "duration"]);
        l.playlist = [h]
      }
      l.qualityLabels = l.qualityLabels || l.hlslabels, delete l.duration;
      var v = l.liveTimeout;
      null !== v && (Object(r.z)(v) ? 0 !== v && (v = Math.max(30, v)) : v = null, l.liveTimeout = v);
      var g, m, b = parseFloat(l.bandwidthEstimate),
        y = parseFloat(l.bitrateSelection);
      return l.bandwidthEstimate = Object(r.z)(b) ? b : (g = l.defaultBandwidthEstimate, m = parseFloat(g), Object(r.z)(m) ? Math.max(m, 1) : c.bandwidthEstimate), l.bitrateSelection = Object(r.z)(y) ? y : c.bitrateSelection, l.backgroundLoading = Object(r.r)(l.backgroundLoading) ? l.backgroundLoading : a.Features.backgroundLoading, l
    },
    f = n(46),
    d = n(1),
    p = n(17);

  function h(t) {
    var e = "file:" === window.location.protocol ? "https:" : "",
      n = {
        jwpsrv: "//ssl.p.jwpcdn.com/player/v/8.5.2/jwpsrv.js",
        dai: "//ssl.p.jwpcdn.com/player/plugins/dai/v/0.4.1/dai.js",
        vast: "//ssl.p.jwpcdn.com/player/plugins/vast/v/8.4.8/vast.js",
        googima: "//ssl.p.jwpcdn.com/player/plugins/googima/v/8.5.0/googima.js",
        freewheel: "//ssl.p.jwpcdn.com/player/plugins/freewheel/v/2.1.9/freewheel.js",
        related: "//ssl.p.jwpcdn.com/player/plugins/related/v/7.0.0/related.js",
        gapro: "//ssl.p.jwpcdn.com/player/plugins/gapro/v/2.1.3/gapro.js"
      } [t];
    return n ? e + n : ""
  }

  function v(t, e, n) {
    e && (t[e.client || h(n)] = e, delete e.client)
  }
  var g = function (t, e) {
      var i = l(t, e),
        u = i.key || window.jwplayer && window.jwplayer.key,
        a = new f.a(u).edition();
      if (i.key = u, i.edition = a, i.error = null, "unlimited" === a) {
        var c = Object(o.getScriptPath)("jwplayer.js");
        if (!c) throw new Error("Error setting up player: Could not locate jwplayer.js script tag");
        n.p = c
      }
      if ("invalid" === a || "expired" === a) {
        var s = void 0 === u ? "missing" : a;
        i.error = new d.p(d.j, function (t) {
          switch (t) {
            case "missing":
              return d.s;
            case "expired":
              return d.q;
            default:
              return d.r
          }
        }(s))
      }
      i.flashplayer = function (t) {
        var e = t.flashplayer;
        return e || (e = (Object(o.getScriptPath)("jwplayer.js") || t.base) + "jwplayer.flash.swf"), "http:" === window.location.protocol && (e = e.replace(/^https/, "http")), e
      }(i), i.plugins = function (t) {
        var e = Object(r.j)({}, t.plugins),
          n = t.edition,
          i = Object(p.a)(n);
        if (i("ads")) {
          var o = Object(r.j)({}, t.advertising),
            u = o.client;
          if (u) {
            var a = h(u) || u;
            e[a] = o, delete o.client
          }
        }
        if (i("jwpsrv")) {
          var c = t.analytics;
          c !== Object(c) && (c = {}), v(e, c, "jwpsrv")
        }
        return v(e, t.ga, "gapro"), e
      }(i);
      var g = i.ab;
      return g && Object.keys(g.tests).forEach(function (t) {
        g.tests[t].forEach(function (t) {
          t.addConfig && t.addConfig(i, t.selection)
        })
      }), i
    },
    m = n(9),
    b = n(3),
    y = n(5),
    j = n(57),
    w = n(26),
    O = n(30);

  function C(t) {
    var e = t.get("playlist");
    if ("string" == typeof e) return new y.a(function (n, r) {
      var i = new j.a;
      i.on(b.Ca, function (e) {
        var r = e.playlist;
        delete e.playlist, k(t, r, e), n()
      }), i.on(b.w, function (e) {
        k(t, [], {}), r(Object(d.y)(e, d.u))
      }), i.load(e)
    });
    var n = t.get("feedData") || {};
    return k(t, e, n), y.b
  }

  function k(t, e, n) {
    var r = t.attributes;
    r.playlist = Object(w.a)(e), r.feedData = n
  }

  function x(t) {
    var e = t.get("skin") ? t.get("skin").url : void 0;
    if ("string" == typeof e && ! function (t) {
        for (var e = document.styleSheets, n = 0, r = e.length; n < r; n++)
          if (e[n].href === t) return !0;
        return !1
      }(e)) {
      return new O.a(e, !0).load().catch(function (t) {
        return t
      })
    }
    return y.b
  }

  function S(t) {
    return t.attributes._destroyed
  }
  var P = function (t, e, n) {
      return S(t) ? y.a.reject() : y.a.all(n.concat([(r = t, C(r).then(function () {
        if (!S(r)) {
          var t = Object(w.b)(r.get("playlist"), r);
          r.attributes.playlist = t;
          try {
            Object(w.e)(t)
          } catch (t) {
            throw t.code += d.u, t
          }
          var e = r.getProviders(),
            n = e.choose(t[0].sources[0]),
            i = n.provider,
            o = n.name;
          return "function" == typeof i ? i : m.a.html5 && "html5" === o ? m.a.html5 : e.load(o).catch(function (t) {
            throw Object(d.y)(t, d.v)
          })
        }
      })), x(t)]));
      var r
    },
    T = n(36),
    E = n(24),
    _ = 301129;

  function A(t, e, r) {
    return r.push(function (t, e) {
        var r = t.get("related"),
          i = Object(p.a)(t.get("edition")),
          o = r === Object(r) && i("discovery");
        if (!1 !== t.get("controls") || o) {
          var u = !1 !== t.get("visualplaylist") || o;
          return o || (r = {
            disableRelated: !0
          }), r.showButton = u, n.e(0).then(function (t) {
            var i = new E.b;
            i.name = "related", i.js = n(144).default, Object(E.a)(i, r, e)
          }.bind(null, n)).catch(Object(m.b)(_)).catch(function (t) {
            console.warn(d.p.logMessage(t.code))
          })
        }
        return y.b
      }(t, e)),
      function (t) {
        return C(t).then(function () {
          return t.get("drm") || Object(T.b)(t.get("playlist")) ? Object(T.d)(t.get("edition")) : y.b
        })
      }(t).then(function () {
        return P(t, e, r)
      })
  }
  var M = n(23),
    N = function (t) {
      var e = void 0;
      this.start = function (n) {
        var r = A(t, n, [Object(m.c)(t), Object(M.a)(t, n)]),
          i = new y.a(function (t, n) {
            e = setTimeout(function () {
              var t = new d.p(d.j, d.w);
              n(t)
            }, 3e4);
            var i = function () {
              clearTimeout(e), t()
            };
            r.then(i).catch(i)
          });
        return y.a.race([r, i])
      }, this.destroy = function () {
        clearTimeout(e), t.set("_destroyed", !0), t = null
      }
    },
    F = n(41),
    I = n(27),
    R = n(21),
    L = {
      removeItem: function () {}
    };
  try {
    L = window.localStorage || L
  } catch (t) {}

  function B(t, e) {
    this.namespace = t, this.items = e
  }
  Object(r.j)(B.prototype, {
    getAllItems: function () {
      var t = this;
      return this.items.reduce(function (e, n) {
        var r = L[t.namespace + "." + n];
        return r && (e[n] = Object(u.serialize)(r)), e
      }, {})
    },
    track: function (t) {
      var e = this;
      this.items.forEach(function (n) {
        t.on("change:" + n, function (t, r) {
          try {
            L[e.namespace + "." + n] = r
          } catch (t) {
            R.a.debug && console.error(t)
          }
        })
      })
    },
    clear: function () {
      var t = this;
      this.items.forEach(function (e) {
        L.removeItem(t.namespace + "." + e)
      })
    }
  });
  var D = B,
    z = n(51),
    q = n(47),
    Q = n(6),
    V = n(42),
    X = n(52);

  function W(t) {
    t.src || t.load()
  }

  function H() {
    var t = document.createElement("video");
    return t.className = "jw-video jw-reset", t.setAttribute("tabindex", "-1"), t.setAttribute("disableRemotePlayback", ""), t.setAttribute("webkit-playsinline", ""), t.setAttribute("playsinline", ""), t
  }
  var U = n(56),
    J = n(34);
  n.d(e, "b", function () {
    return G
  });
  var K = function () {};
  Object(r.j)(K.prototype, z.a);
  var Y = function (t) {
    this._events = {}, this.modelShim = new K, this.modelShim._qoeItem = new I.a, this.mediaShim = {}, this.setup = new N(this.modelShim), this.currentContainer = this.originalContainer = t, this.apiQueue = new i.a(this, ["load", "play", "pause", "seek", "stop", "playlistItem", "playlistNext", "playlistPrev", "next", "preload", "setConfig", "setCurrentAudioTrack", "setCurrentCaptions", "setCurrentQuality", "setFullscreen", "addButton", "removeButton", "castToggle", "setMute", "setVolume", "setPlaybackRate", "setCues", "setPlaylistItem", "resize", "setCaptions", "setControls"], function () {
      return !0
    })
  };

  function $(t, e) {
    e && e.code && (e.sourceError && console.error(e.sourceError), console.error(d.p.logMessage(e.code)))
  }

  function G(t, e) {
    if (!document.body.contains(t.currentContainer)) {
      var n = document.getElementById(t.get("id"));
      n && (t.currentContainer = n)
    }
    t.currentContainer.parentElement && t.currentContainer.parentElement.replaceChild(e, t.currentContainer), t.currentContainer = e
  }
  Object(r.j)(Y.prototype, {
    on: Q.a.on,
    once: Q.a.once,
    off: Q.a.off,
    trigger: Q.a.trigger,
    init: function (t, e) {
      var n = this,
        i = this.modelShim,
        o = new D("jwplayer", ["volume", "mute", "captionLabel", "bandwidthEstimate", "bitrateSelection", "qualityLabel"]),
        u = o && o.getAllItems();
      i.attributes = i.attributes || {}, Object(r.j)(this.mediaShim, q.a);
      var a = t,
        c = g(Object(r.j)({}, t), u);
      c.id = e.id, c.setupConfig = a, Object(r.j)(i.attributes, c, q.b), i.getProviders = function () {
        return new F.a(c)
      }, i.setProvider = function () {};
      var s = function () {
        for (var t = X.c, e = [], n = [], r = 0; r < t; r++) {
          var i = H();
          e.push(i), n.push(i), W(i)
        }
        var o = n.shift(),
          u = n.shift(),
          a = !1;
        return {
          primed: function () {
            return a
          },
          prime: function () {
            e.forEach(W), a = !0
          },
          played: function () {
            a = !0
          },
          getPrimedElement: function () {
            return n.length ? n.shift() : null
          },
          getAdElement: function () {
            return o
          },
          getTestElement: function () {
            return u
          },
          clean: function (t) {
            if (t.src) {
              t.removeAttribute("src");
              try {
                t.load()
              } catch (t) {}
            }
          },
          recycle: function (t) {
            t && !n.some(function (e) {
              return e === t
            }) && (this.clean(t), n.push(t))
          },
          syncVolume: function (t) {
            var n = Math.min(Math.max(0, t / 100), 1);
            e.forEach(function (t) {
              t.volume = n
            })
          },
          syncMute: function (t) {
            e.forEach(function (e) {
              e.muted = t
            })
          }
        }
      }();
      i.get("backgroundLoading") || (s = Object(U.a)(s.getPrimedElement(), s));
      var l = new J.a(Object(J.b)(this.originalContainer)).once("gesture", function () {
        s.prime(), n.preload(), l.destroy()
      });
      return i.on("change:errorEvent", $), this.setup.start(e).then(function (t) {
        var u = t[0];
        if (n.setup) {
          var a = n.modelShim.clone();
          if (a.error) throw a.error;
          var c = n.apiQueue.queue.slice(0);
          n.apiQueue.destroy(), Object(r.j)(n, u.prototype), n.setup(a, e, n.originalContainer, n._events, c, s);
          var l = n._model;
          return i.off("change:errorEvent", $), l.on("change:errorEvent", $), o.track(l), n.updatePlaylist(l.get("playlist"), l.get("feedData")).catch(function (t) {
            throw Object(d.y)(t, d.u)
          })
        }
      }).then(function () {
        n.setup && n.playerReady()
      }).catch(function (t) {
        n.setup && function (t, e) {
          y.b.then(function () {
            var n = Object(d.z)(d.o, d.x, e),
              r = t._model || t.modelShim;
            n.message = n.message || r.get("localization").errors[n.key], delete n.key;
            var i = Object(V.a)(t, n);
            V.a.cloneIcon && i.querySelector(".jw-icon").appendChild(V.a.cloneIcon("error")), G(t, i), r.set("errorEvent", n), r.set("state", b.Ka), t.trigger(b.Ha, n)
          })
        }(n, t)
      })
    },
    playerDestroy: function () {
      this.apiQueue && this.apiQueue.destroy(), this.setup && this.setup.destroy(), this.off(), this._events = this._model = this.modelShim = this.originalContainer = this.apiQueue = this.setup = null
    },
    getContainer: function () {
      return this.currentContainer
    },
    get: function (t) {
      if (this.modelShim) return t in this.mediaShim ? this.mediaShim[t] : this.modelShim.get(t)
    },
    getItemQoe: function () {
      return this.modelShim._qoeItem
    },
    getConfig: function () {
      return Object(r.j)({}, this.modelShim.attributes, this.mediaShim)
    },
    getCurrentCaptions: function () {
      return this.get("captionsIndex")
    },
    getWidth: function () {
      return this.get("containerWidth")
    },
    getHeight: function () {
      return this.get("containerHeight")
    },
    getMute: function () {
      return this.get("mute")
    },
    getProvider: function () {
      return this.get("provider")
    },
    getState: function () {
      return this.get("state")
    },
    getAudioTracks: function () {
      return null
    },
    getCaptionsList: function () {
      return null
    },
    getQualityLevels: function () {
      return null
    },
    getVisualQuality: function () {
      return null
    },
    getCurrentQuality: function () {
      return -1
    },
    getCurrentAudioTrack: function () {
      return -1
    },
    getSafeRegion: function () {
      return {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      }
    },
    isBeforeComplete: function () {
      return !1
    },
    isBeforePlay: function () {
      return !1
    },
    createInstream: function () {
      return null
    },
    skipAd: function () {},
    attachMedia: function () {},
    detachMedia: function () {
      return null
    }
  });
  e.a = Y
}, function (t, e, n) {
  "use strict";
  n.d(e, "a", function () {
    return i
  });
  var r = n(0);

  function i(t, e) {
    return Object(r.j)({}, e, {
      prime: function () {
        t.src || t.load()
      },
      getPrimedElement: function () {
        return t
      },
      clean: function () {
        e.clean(t)
      },
      recycle: function () {
        e.clean(t)
      }
    })
  }
}, function (t, e, n) {
  "use strict";
  var r = n(0),
    i = n(3),
    o = n(4),
    u = n(44),
    a = n(39),
    c = n(6),
    s = n(1);
  e.a = function () {
    var t = Object(r.j)(this, c.a);

    function e(e) {
      try {
        var a = e.responseXML ? e.responseXML.childNodes : null,
          c = "",
          l = void 0;
        if (a) {
          for (var f = 0; f < a.length && 8 === (c = a[f]).nodeType; f++);
          if ("xml" === Object(o.b)(c) && (c = c.nextSibling), "rss" === Object(o.b)(c)) {
            var d = Object(u.a)(c);
            l = Object(r.j)({
              playlist: d
            }, d.feedData)
          }
        }
        if (!l) try {
          var p = JSON.parse(e.responseText);
          if (Array.isArray(p)) l = {
            playlist: p
          };
          else {
            if (!Array.isArray(p.playlist)) throw Error("Playlist is not an array");
            l = p
          }
        } catch (t) {
          throw new s.p(s.l, 621, t)
        }
        t.trigger(i.Ca, l)
      } catch (t) {
        n(t)
      }
    }

    function n(e) {
      e.code || (e = new s.p(s.l, 0)), t.trigger(i.w, e)
    }
    this.load = function (t) {
      Object(a.a)(t, e, function (t, e, r, i) {
        n(i)
      })
    }, this.destroy = function () {
      this.off()
    }
  }
}, function (t, e, n) {
  "use strict";
  n.d(e, "a", function () {
    return i
  });
  var r = n(7);

  function i(t) {
    return "hls" === t.type && r.OS.android ? !1 !== t.androidhls && (!r.Browser.firefox && parseFloat(r.OS.version.version) >= 4.4) : null
  }
}, function (t, e, n) {
  "use strict";
  n.r(e);
  var r = n(0),
    i = n(18),
    o = n(13),
    u = n(15),
    a = n(14),
    c = {
      availableProviders: u.a,
      registerProvider: a.a
    },
    s = n(23);
  c.registerPlugin = function (t, e, n) {
    "jwpsrv" !== t && Object(s.b)(t, e, n)
  };
  var l = c,
    f = n(28),
    d = n(21),
    p = n(7),
    h = n(55),
    v = n(3),
    g = n(27),
    m = n(6),
    b = n(11),
    y = n(12),
    j = n(2),
    w = n(48),
    O = n(8),
    C = n(10),
    k = n(22),
    x = n(39),
    S = n(49),
    P = n(31);
  var T = Object(r.j)({}, y, b, i, {
      addClass: C.a,
      hasClass: C.h,
      removeClass: C.l,
      replaceClass: C.m,
      toggleClass: C.p,
      classList: C.d,
      styleDimension: C.o,
      createElement: C.e,
      emptyElement: C.g,
      addStyleSheet: C.b,
      bounds: C.c,
      css: k.b,
      clearCss: k.a,
      style: k.d,
      transform: k.e,
      getRgba: k.c,
      ajax: x.a,
      crossdomain: function (t) {
        var e = document.createElement("a"),
          n = document.createElement("a");
        e.href = location.href;
        try {
          return n.href = t, n.href = n.href, e.protocol + "//" + e.host != n.protocol + "//" + n.host
        } catch (t) {}
        return !0
      },
      tryCatch: w.b,
      Error: w.a,
      Timer: g.a,
      log: P.a,
      between: S.a,
      foreach: function (t, e) {
        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n])
      },
      flashVersion: O.a,
      isIframe: O.m,
      indexOf: r.p,
      trim: j.h,
      pad: j.d,
      extension: j.a,
      hms: j.b,
      seconds: j.f,
      prefix: j.e,
      suffix: j.g,
      noop: function () {}
    }),
    E = 0;

  function _(t, e) {
    var n = new h.a(e);
    return n.on(v.Fa, function (e) {
      t._qoe.tick("ready"), e.setupTime = t._qoe.between("setup", "ready")
    }), n.on("all", function (e, n) {
      t.trigger(e, n)
    }), n
  }

  function A(t, e) {
    var n = t.plugins;
    Object.keys(n).forEach(function (t) {
      delete n[t]
    }), e.get("setupConfig") && t.trigger("remove"), t.off(), e.playerDestroy(), e.getContainer().removeAttribute("data-jwplayer-id")
  }

  function M(t) {
    var e = ++E,
      n = t.id || "player-" + e,
      i = new g.a,
      u = {},
      a = _(this, t);
    i.tick("init"), t.setAttribute("data-jwplayer-id", n), Object.defineProperties(this, {
      id: {
        get: function () {
          return n
        }
      },
      uniqueId: {
        get: function () {
          return e
        }
      },
      plugins: {
        get: function () {
          return u
        }
      },
      _qoe: {
        get: function () {
          return i
        }
      },
      version: {
        get: function () {
          return f.a
        }
      },
      Events: {
        get: function () {
          return m.a
        }
      },
      utils: {
        get: function () {
          return T
        }
      },
      _: {
        get: function () {
          return r.f
        }
      }
    }), Object(r.j)(this, {
      _events: {},
      setup: function (e) {
        return i.clear("ready"), i.tick("setup"), A(this, a), (a = _(this, t)).init(e, this), this.on(e.events, null, this)
      },
      remove: function () {
        return function (t) {
          for (var e = o.a.length; e--;)
            if (o.a[e].uniqueId === t.uniqueId) {
              o.a.splice(e, 1);
              break
            }
        }(this), A(this, a), this
      },
      qoe: function () {
        var t = a.getItemQoe();
        return {
          setupTime: this._qoe.between("setup", "ready"),
          firstFrame: t.getFirstFrame ? t.getFirstFrame() : null,
          player: this._qoe.dump(),
          item: t.dump()
        }
      },
      getAudioTracks: function () {
        return a.getAudioTracks()
      },
      getBuffer: function () {
        return a.get("buffer")
      },
      getCaptions: function () {
        return a.get("captions")
      },
      getCaptionsList: function () {
        return a.getCaptionsList()
      },
      getConfig: function () {
        return a.getConfig()
      },
      getContainer: function () {
        return a.getContainer()
      },
      getControls: function () {
        return a.get("controls")
      },
      getCurrentAudioTrack: function () {
        return a.getCurrentAudioTrack()
      },
      getCurrentCaptions: function () {
        return a.getCurrentCaptions()
      },
      getCurrentQuality: function () {
        return a.getCurrentQuality()
      },
      getCurrentTime: function () {
        return a.get("currentTime")
      },
      getDuration: function () {
        return a.get("duration")
      },
      getEnvironment: function () {
        return p
      },
      getFullscreen: function () {
        return a.get("fullscreen")
      },
      getHeight: function () {
        return a.getHeight()
      },
      getItemMeta: function () {
        return a.get("itemMeta") || {}
      },
      getMute: function () {
        return a.getMute()
      },
      getPlaybackRate: function () {
        return a.get("playbackRate")
      },
      getPlaylist: function () {
        return a.get("playlist")
      },
      getPlaylistIndex: function () {
        return a.get("item")
      },
      getPlaylistItem: function (t) {
        if (!T.exists(t)) return a.get("playlistItem");
        var e = this.getPlaylist();
        return e ? e[t] : null
      },
      getPosition: function () {
        return a.get("position")
      },
      getProvider: function () {
        return a.getProvider()
      },
      getQualityLevels: function () {
        return a.getQualityLevels()
      },
      getSafeRegion: function () {
        var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return a.getSafeRegion(t)
      },
      getState: function () {
        return a.getState()
      },
      getStretching: function () {
        return a.get("stretching")
      },
      getViewable: function () {
        return a.get("viewable")
      },
      getVisualQuality: function () {
        return a.getVisualQuality()
      },
      getVolume: function () {
        return a.get("volume")
      },
      getWidth: function () {
        return a.getWidth()
      },
      setCaptions: function (t) {
        return a.setCaptions(t), this
      },
      setConfig: function (t) {
        return a.setConfig(t), this
      },
      setControls: function (t) {
        return a.setControls(t), this
      },
      setCurrentAudioTrack: function (t) {
        a.setCurrentAudioTrack(t)
      },
      setCurrentCaptions: function (t) {
        a.setCurrentCaptions(t)
      },
      setCurrentQuality: function (t) {
        a.setCurrentQuality(t)
      },
      setFullscreen: function (t) {
        return a.setFullscreen(t), this
      },
      setMute: function (t) {
        return a.setMute(t), this
      },
      setPlaybackRate: function (t) {
        return a.setPlaybackRate(t), this
      },
      setPlaylistItem: function (t, e) {
        return a.setPlaylistItem(t, e), this
      },
      setCues: function (t) {
        return a.setCues(t), this
      },
      setVolume: function (t) {
        return a.setVolume(t), this
      },
      load: function (t, e) {
        return a.load(t, e), this
      },
      play: function (t) {
        return a.play(t), this
      },
      pause: function (t) {
        return a.pause(t), this
      },
      playToggle: function (t) {
        switch (this.getState()) {
          case v.Oa:
          case v.Ia:
            return this.pause(t);
          default:
            return this.play(t)
        }
      },
      seek: function (t, e) {
        return a.seek(t, e), this
      },
      playlistItem: function (t, e) {
        return a.playlistItem(t, e), this
      },
      playlistNext: function (t) {
        return a.playlistNext(t), this
      },
      playlistPrev: function (t) {
        return a.playlistPrev(t), this
      },
      next: function (t) {
        return a.next(t), this
      },
      castToggle: function () {
        return a.castToggle(), this
      },
      createInstream: function () {
        return a.createInstream()
      },
      skipAd: function () {
        return a.skipAd(), this
      },
      stop: function () {
        return a.stop(), this
      },
      resize: function (t, e) {
        return a.resize(t, e), this
      },
      addButton: function (t, e, n, r, i) {
        return a.addButton(t, e, n, r, i), this
      },
      removeButton: function (t) {
        return a.removeButton(t), this
      },
      attachMedia: function () {
        return a.attachMedia(), this
      },
      detachMedia: function () {
        return a.detachMedia(), this
      },
      isBeforeComplete: function () {
        return a.isBeforeComplete()
      },
      isBeforePlay: function () {
        return a.isBeforePlay()
      }
    })
  }
  Object(r.j)(M.prototype, {
    on: function (t, e, n) {
      return m.c.call(this, t, e, n)
    },
    once: function (t, e, n) {
      return m.d.call(this, t, e, n)
    },
    off: function (t, e, n) {
      return m.b.call(this, t, e, n)
    },
    trigger: function (t, e) {
      return (e = r.f.isObject(e) ? Object(r.j)({}, e) : {}).type = t, d.a.debug ? m.e.call(this, t, e) : m.f.call(this, t, e)
    },
    getPlugin: function (t) {
      return this.plugins[t]
    },
    addPlugin: function (t, e) {
      this.plugins[t] = e, this.on("ready", e.addToPlayer), e.resize && this.on("resize", e.resizeHandler)
    },
    registerPlugin: function (t, e, n) {
      Object(s.b)(t, e, n)
    },
    getAdBlock: function () {
      return !1
    },
    playAd: function (t) {},
    pauseAd: function (t) {}
  }), n.p = Object(i.loadFrom)();
  var N = function (t) {
    var e = void 0,
      n = void 0;
    if (t ? "string" == typeof t ? (e = F(t)) || (n = document.getElementById(t)) : "number" == typeof t ? e = o.a[t] : t.nodeType && (e = F((n = t).id || n.getAttribute("data-jwplayer-id"))) : e = o.a[0], e) return e;
    if (n) {
      var r = new M(n);
      return o.a.push(r), r
    }
    return {
      registerPlugin: s.b
    }
  };

  function F(t) {
    for (var e = 0; e < o.a.length; e++)
      if (o.a[e].id === t) return o.a[e];
    return null
  }
  Object.defineProperties(N, {
    api: {
      get: function () {
        return l
      },
      set: function () {}
    },
    version: {
      get: function () {
        return f.a
      },
      set: function () {}
    },
    debug: {
      get: function () {
        return d.a.debug
      },
      set: function (t) {
        d.a.debug = !!t
      }
    }
  });
  var I = N,
    R = n(34),
    L = n(46),
    B = n(30),
    D = n(45),
    z = n(44),
    q = n(38),
    Q = r.f.extend,
    V = {};
  V.api = l, V._ = r.f, V.version = "8.5.2+commercial_v8-5-2.283.commercial.53425ae.hlsjs..jwplayer.458b450.dai.ac94f63.freewheel.503251f.googima.b6bb1db.vast.489ac96.analytics.706e657.gapro.f664e4e.related.210b617", V.utils = Object(r.j)(T, {
    key: L.a,
    extend: Q,
    scriptloader: B.a,
    rssparser: {
      parse: z.a
    },
    tea: D.a,
    UI: R.a
  }), V.utils.css.style = V.utils.style, V.vid = q.a;
  var X = V,
    W = window;
  Object(r.j)(I, X), "function" == typeof W.define && W.define.amd && W.define([], function () {
    return I
  });
  var H = I;
  W.jwplayer && (H = W.jwplayer);
  e.default = H
}]).default;


var jwDefaults = {
  "aspectratio": "16:9",
  "autostart": false,
  "controls": true,
  "displaydescription": true,
  "displaytitle": true,
  "flashplayer": "//ssl.p.jwpcdn.com/player/v/8.5.2/jwplayer.flash.swf",
  "height": 260,
  "key": "AgBc1NiOQGy20+Fdvp/rl5Q0oh4EgWsYIaHhH6Cm+Q+4YGhl7JrQC4mAYbM=",
  "mute": false,
  "ph": 1,
  "pid": "bfIbW5Pe",
  "playbackRateControls": false,
  "preload": "metadata",
  "repeat": false,
  "stagevideo": false,
  "stretching": "uniform",
  "width": "100%"
};
jwplayer.defaults = jwDefaults;