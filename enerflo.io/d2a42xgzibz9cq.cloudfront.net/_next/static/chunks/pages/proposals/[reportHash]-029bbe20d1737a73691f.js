(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [550], {
        41647: function(e, t, r) {
            "use strict";
            var n = r(61682);

            function o(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(Object(r), !0).forEach((function(t) {
                        n(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : o(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            t.default = function(e, t) {
                var r = a.default,
                    n = {
                        loading: function(e) {
                            e.error, e.isLoading;
                            return e.pastDelay, null
                        }
                    };
                e instanceof Promise ? n.loader = function() {
                    return e
                } : "function" === typeof e ? n.loader = e : "object" === typeof e && (n = u(u({}, n), e));
                if (n = u(u({}, n), t), "object" === typeof e && !(e instanceof Promise) && (e.render && (n.render = function(t, r) {
                        return e.render(r, t)
                    }), e.modules)) {
                    r = a.default.Map;
                    var o = {},
                        i = e.modules();
                    Object.keys(i).forEach((function(e) {
                        var t = i[e];
                        "function" !== typeof t.then ? o[e] = t : o[e] = function() {
                            return t.then((function(e) {
                                return e.default || e
                            }))
                        }
                    })), n.loader = o
                }
                n.loadableGenerated && delete(n = u(u({}, n), n.loadableGenerated)).loadableGenerated;
                if ("boolean" === typeof n.ssr) {
                    if (!n.ssr) return delete n.ssr, l(r, n);
                    delete n.ssr
                }
                return r(n)
            };
            i(r(67294));
            var a = i(r(95547));

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function l(e, t) {
                return delete t.webpack, delete t.modules, e(t)
            }
        },
        28903: function(e, t, r) {
            "use strict";
            var n;
            t.__esModule = !0, t.LoadableContext = void 0;
            var o = ((n = r(67294)) && n.__esModule ? n : {
                default: n
            }).default.createContext(null);
            t.LoadableContext = o
        },
        95547: function(e, t, r) {
            "use strict";
            var n = r(61682),
                o = r(2553),
                u = r(62012);

            function a(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function i(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(r), !0).forEach((function(t) {
                        n(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function l(e, t) {
                var r;
                if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (r = function(e, t) {
                            if (!e) return;
                            if ("string" === typeof e) return c(e, t);
                            var r = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === r && e.constructor && (r = e.constructor.name);
                            if ("Map" === r || "Set" === r) return Array.from(e);
                            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return c(e, t)
                        }(e)) || t && e && "number" === typeof e.length) {
                        r && (e = r);
                        var n = 0,
                            o = function() {};
                        return {
                            s: o,
                            n: function() {
                                return n >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[n++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: o
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var u, a = !0,
                    i = !1;
                return {
                    s: function() {
                        r = e[Symbol.iterator]()
                    },
                    n: function() {
                        var e = r.next();
                        return a = e.done, e
                    },
                    e: function(e) {
                        i = !0, u = e
                    },
                    f: function() {
                        try {
                            a || null == r.return || r.return()
                        } finally {
                            if (i) throw u
                        }
                    }
                }
            }

            function c(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            t.__esModule = !0, t.default = void 0;
            var s, f = (s = r(67294)) && s.__esModule ? s : {
                    default: s
                },
                d = r(67161),
                p = r(28903);
            var h = [],
                y = [],
                b = !1;

            function m(e) {
                var t = e(),
                    r = {
                        loading: !0,
                        loaded: null,
                        error: null
                    };
                return r.promise = t.then((function(e) {
                    return r.loading = !1, r.loaded = e, e
                })).catch((function(e) {
                    throw r.loading = !1, r.error = e, e
                })), r
            }

            function v(e) {
                var t = {
                        loading: !1,
                        loaded: {},
                        error: null
                    },
                    r = [];
                try {
                    Object.keys(e).forEach((function(n) {
                        var o = m(e[n]);
                        o.loading ? t.loading = !0 : (t.loaded[n] = o.loaded, t.error = o.error), r.push(o.promise), o.promise.then((function(e) {
                            t.loaded[n] = e
                        })).catch((function(e) {
                            t.error = e
                        }))
                    }))
                } catch (n) {
                    t.error = n
                }
                return t.promise = Promise.all(r).then((function(e) {
                    return t.loading = !1, e
                })).catch((function(e) {
                    throw t.loading = !1, e
                })), t
            }

            function _(e, t) {
                return f.default.createElement(function(e) {
                    return e && e.__esModule ? e.default : e
                }(e), t)
            }

            function g(e, t) {
                var r = Object.assign({
                        loader: null,
                        loading: null,
                        delay: 200,
                        timeout: null,
                        render: _,
                        webpack: null,
                        modules: null
                    }, t),
                    n = null;

                function o() {
                    if (!n) {
                        var t = new O(e, r);
                        n = {
                            getCurrentValue: t.getCurrentValue.bind(t),
                            subscribe: t.subscribe.bind(t),
                            retry: t.retry.bind(t),
                            promise: t.promise.bind(t)
                        }
                    }
                    return n.promise()
                }
                if (!b && "function" === typeof r.webpack) {
                    var u = r.webpack();
                    y.push((function(e) {
                        var t, r = l(u);
                        try {
                            for (r.s(); !(t = r.n()).done;) {
                                var n = t.value;
                                if (-1 !== e.indexOf(n)) return o()
                            }
                        } catch (a) {
                            r.e(a)
                        } finally {
                            r.f()
                        }
                    }))
                }
                var a = function(e, t) {
                    o();
                    var u = f.default.useContext(p.LoadableContext),
                        a = (0, d.useSubscription)(n);
                    return f.default.useImperativeHandle(t, (function() {
                        return {
                            retry: n.retry
                        }
                    }), []), u && Array.isArray(r.modules) && r.modules.forEach((function(e) {
                        u(e)
                    })), f.default.useMemo((function() {
                        return a.loading || a.error ? f.default.createElement(r.loading, {
                            isLoading: a.loading,
                            pastDelay: a.pastDelay,
                            timedOut: a.timedOut,
                            error: a.error,
                            retry: n.retry
                        }) : a.loaded ? r.render(a.loaded, e) : null
                    }), [e, a])
                };
                return a.preload = function() {
                    return o()
                }, a.displayName = "LoadableComponent", f.default.forwardRef(a)
            }
            var O = function() {
                function e(t, r) {
                    o(this, e), this._loadFn = t, this._opts = r, this._callbacks = new Set, this._delay = null, this._timeout = null, this.retry()
                }
                return u(e, [{
                    key: "promise",
                    value: function() {
                        return this._res.promise
                    }
                }, {
                    key: "retry",
                    value: function() {
                        var e = this;
                        this._clearTimeouts(), this._res = this._loadFn(this._opts.loader), this._state = {
                            pastDelay: !1,
                            timedOut: !1
                        };
                        var t = this._res,
                            r = this._opts;
                        t.loading && ("number" === typeof r.delay && (0 === r.delay ? this._state.pastDelay = !0 : this._delay = setTimeout((function() {
                            e._update({
                                pastDelay: !0
                            })
                        }), r.delay)), "number" === typeof r.timeout && (this._timeout = setTimeout((function() {
                            e._update({
                                timedOut: !0
                            })
                        }), r.timeout))), this._res.promise.then((function() {
                            e._update({}), e._clearTimeouts()
                        })).catch((function(t) {
                            e._update({}), e._clearTimeouts()
                        })), this._update({})
                    }
                }, {
                    key: "_update",
                    value: function(e) {
                        this._state = i(i({}, this._state), {}, {
                            error: this._res.error,
                            loaded: this._res.loaded,
                            loading: this._res.loading
                        }, e), this._callbacks.forEach((function(e) {
                            return e()
                        }))
                    }
                }, {
                    key: "_clearTimeouts",
                    value: function() {
                        clearTimeout(this._delay), clearTimeout(this._timeout)
                    }
                }, {
                    key: "getCurrentValue",
                    value: function() {
                        return this._state
                    }
                }, {
                    key: "subscribe",
                    value: function(e) {
                        var t = this;
                        return this._callbacks.add(e),
                            function() {
                                t._callbacks.delete(e)
                            }
                    }
                }]), e
            }();

            function w(e) {
                return g(m, e)
            }

            function j(e, t) {
                for (var r = []; e.length;) {
                    var n = e.pop();
                    r.push(n(t))
                }
                return Promise.all(r).then((function() {
                    if (e.length) return j(e, t)
                }))
            }
            w.Map = function(e) {
                if ("function" !== typeof e.render) throw new Error("LoadableMap requires a `render(loaded, props)` function");
                return g(v, e)
            }, w.preloadAll = function() {
                return new Promise((function(e, t) {
                    j(h).then(e, t)
                }))
            }, w.preloadReady = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return new Promise((function(t) {
                    var r = function() {
                        return b = !0, t()
                    };
                    j(y, e).then(r, r)
                }))
            }, window.__NEXT_PRELOADREADY = w.preloadReady;
            var P = w;
            t.default = P
        },
        59023: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                __N_SSP: function() {
                    return l
                }
            });
            var n = r(85893),
                o = r(2962),
                u = r(5152),
                a = (r(67294), r(28216)),
                i = (0, u.default)((function() {
                    return Promise.all([r.e(898), r.e(385), r.e(458), r.e(315), r.e(601), r.e(112), r.e(209), r.e(70)]).then(r.bind(r, 38070))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [38070]
                        },
                        modules: ["proposals/[reportHash].tsx -> ../../src/ProposalDeck"]
                    }
                }),
                l = !0;

            function c() {
                var e = (0, a.v9)((function(e) {
                    var t;
                    return null === (t = e.proposal.data) || void 0 === t ? void 0 : t.customer
                }));
                return (0, n.jsx)(o.PB, {
                    title: e ? "".concat(e.firstName, " ").concat(e.lastName) : void 0
                })
            }
            t.default = function(e) {
                var t = e.reportHash,
                    r = e.printMode;
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(i, {
                        reportHash: t,
                        printMode: r
                    }), (0, n.jsx)(c, {})]
                })
            }
        },
        2520: function(e, t, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/proposals/[reportHash]", function() {
                return r(59023)
            }])
        },
        5152: function(e, t, r) {
            e.exports = r(41647)
        }
    },
    function(e) {
        var t = function(t) {
            return e(e.s = t)
        };
        e.O(0, [774, 888, 179], (function() {
            return t(49484), t(2520)
        }));
        var r = e.O();
        _N_E = r
    }
]);
//# sourceMappingURL=[reportHash]-029bbe20d1737a73691f.js.map