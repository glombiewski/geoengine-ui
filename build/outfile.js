"bundle";
System.register("app/info-area.component.js", ["angular2/core", "ng2-material/all", "rxjs/Rx"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1,
      all_1,
      Rx_1;
  var InfoAreaComponent;
  return {
    setters: [function(core_1_1) {
      core_1 = core_1_1;
    }, function(all_1_1) {
      all_1 = all_1_1;
    }, function(Rx_1_1) {
      Rx_1 = Rx_1_1;
    }],
    execute: function() {
      InfoAreaComponent = (function() {
        function InfoAreaComponent() {}
        InfoAreaComponent.prototype.toggleLayersVisible = function() {
          this.layerListVisible$.next(!this.layerListVisible$.getValue());
        };
        __decorate([core_1.Input('layerListVisible'), __metadata('design:type', Rx_1.BehaviorSubject)], InfoAreaComponent.prototype, "layerListVisible$", void 0);
        InfoAreaComponent = __decorate([core_1.Component({
          selector: 'info-area-component',
          template: "\n    <md-toolbar class=\"md-accent\" layout=\"column\">\n        <div layout=\"row\" layout-align=\"space-between center\">\n            <button md-button aria-label=\"User\">\n                <i md-icon>person</i>\n                Username\n            </button>\n            <button md-button class=\"md-icon-button\" aria-label=\"Help\">\n                <i md-icon>help</i>\n            </button>\n        </div>\n        <md-divider></md-divider>\n        <h1 flex=\"grow\" layout=\"row\" layout-align=\"center center\">WAVE</h1>\n        <md-divider></md-divider>\n        <div layout=\"row\" layout-align=\"space-between center\">\n            <button md-button class=\"md-icon-button\" aria-label=\"Settings\">\n                <i md-icon>menu</i>\n            </button>\n            Layers\n            <button md-button class=\"md-icon-button\" aria-label=\"Settings\"\n                    (click)=\"toggleLayersVisible()\" [ngSwitch]=\"layerListVisible$ | async\">\n                <i *ngSwitchWhen=\"true\" md-icon>expand_less</i>\n                <i *ngSwitchWhen=\"false\" md-icon>expand_more</i>\n            </button>\n        </div>\n    </md-toolbar>\n    ",
          styles: ["\n    md-toolbar {\n        height: 100%;\n    }\n    h1 {\n        opacity: 0.5;\n        font-size: 34px;\n    }\n    .material-icons {\n        vertical-align: middle;\n    }\n    "],
          directives: [all_1.MATERIAL_DIRECTIVES],
          changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), __metadata('design:paramtypes', [])], InfoAreaComponent);
        return InfoAreaComponent;
      }());
      exports_1("InfoAreaComponent", InfoAreaComponent);
    }
  };
});

System.register("app/tab.component.js", ["angular2/core", "ng2-material/all"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1,
      all_1;
  var TabComponent;
  return {
    setters: [function(core_1_1) {
      core_1 = core_1_1;
    }, function(all_1_1) {
      all_1 = all_1_1;
    }],
    execute: function() {
      TabComponent = (function() {
        function TabComponent(changeDetectorRef, ngZone) {
          this.changeDetectorRef = changeDetectorRef;
          this.ngZone = ngZone;
          this.zoomInEmitter = new core_1.EventEmitter();
          this.zoomOutEmitter = new core_1.EventEmitter();
          this.zoomLayerEmitter = new core_1.EventEmitter();
          this.zoomProjectEmitter = new core_1.EventEmitter();
          this.zoomMapEmitter = new core_1.EventEmitter();
          this.addDataEmitter = new core_1.EventEmitter();
          this.removeLayerEmitter = new core_1.EventEmitter();
        }
        TabComponent.prototype.ngAfterViewInit = function() {
          var _this = this;
          setTimeout(function() {
            _this.changeDetectorRef.markForCheck();
          }, 0);
        };
        __decorate([core_1.Input(), __metadata('design:type', Boolean)], TabComponent.prototype, "layerSelected", void 0);
        __decorate([core_1.Output('zoomIn'), __metadata('design:type', Object)], TabComponent.prototype, "zoomInEmitter", void 0);
        __decorate([core_1.Output('zoomOut'), __metadata('design:type', Object)], TabComponent.prototype, "zoomOutEmitter", void 0);
        __decorate([core_1.Output('zoomLayer'), __metadata('design:type', Object)], TabComponent.prototype, "zoomLayerEmitter", void 0);
        __decorate([core_1.Output('zoomProject'), __metadata('design:type', Object)], TabComponent.prototype, "zoomProjectEmitter", void 0);
        __decorate([core_1.Output('zoomMap'), __metadata('design:type', Object)], TabComponent.prototype, "zoomMapEmitter", void 0);
        __decorate([core_1.Output('addData'), __metadata('design:type', Object)], TabComponent.prototype, "addDataEmitter", void 0);
        __decorate([core_1.Output('removeLayer'), __metadata('design:type', Object)], TabComponent.prototype, "removeLayerEmitter", void 0);
        TabComponent = __decorate([core_1.Component({
          selector: 'tab-component',
          templateUrl: 'templates/tab.html',
          styles: ["\n    .selected {\n      background-color: #f5f5f5 !important;\n    }\n    fieldset {\n        border-style: solid;\n        border-width: 1px;\n        padding: 0px;\n    }\n    fieldset .material-icons {\n        vertical-align: middle;\n    }\n    fieldset [md-fab] .material-icons {\n        vertical-align: baseline;\n    }\n    button {\n        height: 36px;\n    }\n    button[disabled] {\n        background-color: transparent;\n    }\n    "],
          directives: [all_1.MATERIAL_DIRECTIVES],
          changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), __metadata('design:paramtypes', [core_1.ChangeDetectorRef, core_1.NgZone])], TabComponent);
        return TabComponent;
      }());
      exports_1("TabComponent", TabComponent);
    }
  };
});

System.register("app/info-bar.component.js", ["angular2/core", "ng2-material/all", "rxjs/Rx"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1,
      all_1,
      Rx_1;
  var InfoBarComponent;
  return {
    setters: [function(core_1_1) {
      core_1 = core_1_1;
    }, function(all_1_1) {
      all_1 = all_1_1;
    }, function(Rx_1_1) {
      Rx_1 = Rx_1_1;
    }],
    execute: function() {
      InfoBarComponent = (function() {
        function InfoBarComponent() {
          this.citationString = 'none';
        }
        InfoBarComponent.prototype.toggleTableOpen = function() {
          this.dataTableVisible$.next(!this.dataTableVisible$.getValue());
        };
        __decorate([core_1.Input(), __metadata('design:type', String)], InfoBarComponent.prototype, "citationString", void 0);
        __decorate([core_1.Input('dataTableVisible'), __metadata('design:type', Rx_1.BehaviorSubject)], InfoBarComponent.prototype, "dataTableVisible$", void 0);
        InfoBarComponent = __decorate([core_1.Component({
          selector: 'info-bar-component',
          template: "\n    <button md-button class=\"md-icon-button\" aria-label=\"Settings\"\n            (click)=\"toggleTableOpen()\" [ngSwitch]=\"dataTableVisible$ | async\">\n        <i *ngSwitchWhen=\"true\" md-icon>expand_more</i>\n        <i *ngSwitchWhen=\"false\" md-icon>expand_less</i>\n    </button>\n    <small>\n    Data Table\n    <hr>\n    Citation:\n    {{citationString}}\n    </small>\n    ",
          styles: ["\n    hr {\n        transform:rotate(90deg);\n        margin: 0px 10px;\n        display: inline;\n        border: 1px solid rgba(255, 255, 255, 0.87059);\n    }\n    "],
          directives: [all_1.MATERIAL_DIRECTIVES],
          changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), __metadata('design:paramtypes', [])], InfoBarComponent);
        return InfoBarComponent;
      }());
      exports_1("InfoBarComponent", InfoBarComponent);
    }
  };
});

System.registerDynamic("node_modules/ng2-dragula/src/app/directives/dragula.directive.js", ["angular2/core", "../providers/dragula.provider", "dragula"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('angular2/core');
  var dragula_provider_1 = $__require('../providers/dragula.provider');
  var dragula = $__require('dragula');
  var Dragula = (function() {
    function Dragula(el, dragulaService) {
      this.el = el;
      this.dragulaService = dragulaService;
      this.container = el.nativeElement;
    }
    Dragula.prototype.ngOnInit = function() {
      var _this = this;
      var bag = this.dragulaService.find(this.bag);
      var checkModel = function() {
        if (_this.dragulaModel) {
          if (_this.drake.models) {
            _this.drake.models.push(_this.dragulaModel);
          } else {
            _this.drake.models = [_this.dragulaModel];
          }
        }
      };
      if (bag) {
        this.drake = bag.drake;
        checkModel();
        this.drake.containers.push(this.container);
      } else {
        this.drake = dragula({containers: [this.container]});
        checkModel();
        this.dragulaService.add(this.bag, this.drake);
      }
    };
    Dragula.prototype.ngOnChanges = function(changes) {
      if (changes && changes['dragulaModel']) {
        if (this.drake) {
          if (this.drake.models) {
            var modelIndex = this.drake.models.indexOf(changes['dragulaModel'].previousValue);
            this.drake.models.splice(modelIndex, 1, changes['dragulaModel'].currentValue);
          } else {
            this.drake.models = [changes['dragulaModel'].currentValue];
          }
        }
      }
    };
    __decorate([core_1.Input('dragula'), __metadata('design:type', String)], Dragula.prototype, "bag", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Object)], Dragula.prototype, "dragulaModel", void 0);
    Dragula = __decorate([core_1.Directive({selector: '[dragula]'}), __metadata('design:paramtypes', [core_1.ElementRef, dragula_provider_1.DragulaService])], Dragula);
    return Dragula;
  }());
  exports.Dragula = Dragula;
  return module.exports;
});

(function() {
var define = System.amdDefine;
!function(e) {
  if ("object" == typeof exports && "undefined" != typeof module)
    module.exports = e();
  else if ("function" == typeof define && define.amd)
    define("dragula", [], e);
  else {
    var n;
    n = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, n.dragula = e();
  }
}(function() {
  return function e(n, t, r) {
    function o(u, c) {
      if (!t[u]) {
        if (!n[u]) {
          var a = "function" == typeof require && require;
          if (!c && a)
            return a(u, !0);
          if (i)
            return i(u, !0);
          var f = new Error("Cannot find module '" + u + "'");
          throw f.code = "MODULE_NOT_FOUND", f;
        }
        var l = t[u] = {exports: {}};
        n[u][0].call(l.exports, function(e) {
          var t = n[u][1][e];
          return o(t ? t : e);
        }, l, l.exports, e, n, t, r);
      }
      return t[u].exports;
    }
    for (var i = "function" == typeof require && require,
        u = 0; u < r.length; u++)
      o(r[u]);
    return o;
  }({
    1: [function(e, n, t) {
      "use strict";
      function r(e) {
        var n = u[e];
        return n ? n.lastIndex = 0 : u[e] = n = new RegExp(c + e + a, "g"), n;
      }
      function o(e, n) {
        var t = e.className;
        t.length ? r(n).test(t) || (e.className += " " + n) : e.className = n;
      }
      function i(e, n) {
        e.className = e.className.replace(r(n), " ").trim();
      }
      var u = {},
          c = "(?:^|\\s)",
          a = "(?:\\s|$)";
      n.exports = {
        add: o,
        rm: i
      };
    }, {}],
    2: [function(e, n, t) {
      (function(t) {
        "use strict";
        function r(e, n) {
          function t(e) {
            return -1 !== fe.containers.indexOf(e) || ae.isContainer(e);
          }
          function r(e) {
            var n = e ? "remove" : "add";
            o(S, n, "mousedown", O), o(S, n, "mouseup", I);
          }
          function c(e) {
            var n = e ? "remove" : "add";
            o(S, n, "mousemove", N);
          }
          function m(e) {
            var n = e ? "remove" : "add";
            w[n](S, "selectstart", C), w[n](S, "click", C);
          }
          function h() {
            r(!0), I({});
          }
          function C(e) {
            ue && e.preventDefault();
          }
          function O(e) {
            ee = e.clientX, ne = e.clientY;
            var n = 1 !== i(e) || e.metaKey || e.ctrlKey;
            if (!n) {
              var t = e.target,
                  r = T(t);
              r && (ue = r, c(), "mousedown" === e.type && (p(t) ? t.focus() : e.preventDefault()));
            }
          }
          function N(e) {
            if (ue) {
              if (0 === i(e))
                return void I({});
              if (void 0 === e.clientX || e.clientX !== ee || void 0 === e.clientY || e.clientY !== ne) {
                if (ae.ignoreInputTextSelection) {
                  var n = y("clientX", e),
                      t = y("clientY", e),
                      r = x.elementFromPoint(n, t);
                  if (p(r))
                    return;
                }
                var o = ue;
                c(!0), m(), P(), Y(o);
                var a = u(Q);
                W = y("pageX", e) - a.left, Z = y("pageY", e) - a.top, E.add(oe || Q, "gu-transit"), F(), q(e);
              }
            }
          }
          function T(e) {
            if (!(fe.dragging && G || t(e))) {
              for (var n = e; v(e) && t(v(e)) === !1; ) {
                if (ae.invalid(e, n))
                  return;
                if (e = v(e), !e)
                  return;
              }
              var r = v(e);
              if (r && !ae.invalid(e, n)) {
                var o = ae.moves(e, r, n, g(e));
                if (o)
                  return {
                    item: e,
                    source: r
                  };
              }
            }
          }
          function X(e) {
            var n = T(e);
            n && Y(n);
          }
          function Y(e) {
            V(e.item, e.source) && (oe = e.item.cloneNode(!0), fe.emit("cloned", oe, e.item, "copy")), J = e.source, Q = e.item, te = re = g(e.item), fe.dragging = !0, fe.emit("drag", Q, J);
          }
          function B() {
            return !1;
          }
          function P() {
            if (fe.dragging) {
              var e = oe || Q;
              L(e, v(e));
            }
          }
          function D() {
            ue = !1, c(!0), m(!0);
          }
          function I(e) {
            if (D(), fe.dragging) {
              var n = oe || Q,
                  t = y("clientX", e),
                  r = y("clientY", e),
                  o = a(G, t, r),
                  i = k(o, t, r);
              i && (oe && ae.copySortSource || !oe || i !== J) ? L(n, i) : ae.removeOnSpill ? R() : A();
            }
          }
          function L(e, n) {
            var t = v(e);
            oe && ae.copySortSource && n === J && t.removeChild(Q), j(n) ? fe.emit("cancel", e, J, J) : fe.emit("drop", e, n, J, re), M();
          }
          function R() {
            if (fe.dragging) {
              var e = oe || Q,
                  n = v(e);
              n && n.removeChild(e), fe.emit(oe ? "cancel" : "remove", e, n, J), M();
            }
          }
          function A(e) {
            if (fe.dragging) {
              var n = arguments.length > 0 ? e : ae.revertOnSpill,
                  t = oe || Q,
                  r = v(t),
                  o = j(r);
              o === !1 && n && (oe ? r.removeChild(oe) : J.insertBefore(t, te)), o || n ? fe.emit("cancel", t, J, J) : fe.emit("drop", t, r, J, re), M();
            }
          }
          function M() {
            var e = oe || Q;
            D(), K(), e && E.rm(e, "gu-transit"), ie && clearTimeout(ie), fe.dragging = !1, ce && fe.emit("out", e, ce, J), fe.emit("dragend", e), J = Q = oe = te = re = ie = ce = null;
          }
          function j(e, n) {
            var t;
            return t = void 0 !== n ? n : G ? re : g(oe || Q), e === J && t === te;
          }
          function k(e, n, r) {
            function o() {
              var o = t(i);
              if (o === !1)
                return !1;
              var u = z(i, e),
                  c = H(i, u, n, r),
                  a = j(i, c);
              return a ? !0 : ae.accepts(Q, i, J, c);
            }
            for (var i = e; i && !o(); )
              i = v(i);
            return i;
          }
          function q(e) {
            function n(e) {
              fe.emit(e, f, ce, J);
            }
            function t() {
              s && n("over");
            }
            function r() {
              ce && n("out");
            }
            if (G) {
              e.preventDefault();
              var o = y("clientX", e),
                  i = y("clientY", e),
                  u = o - W,
                  c = i - Z;
              G.style.left = u + "px", G.style.top = c + "px";
              var f = oe || Q,
                  l = a(G, o, i),
                  d = k(l, o, i),
                  s = null !== d && d !== ce;
              (s || null === d) && (r(), ce = d, t());
              var p = v(f);
              if (d === J && oe && !ae.copySortSource)
                return void(p && p.removeChild(f));
              var m,
                  h = z(d, l);
              if (null !== h)
                m = H(d, h, o, i);
              else {
                if (ae.revertOnSpill !== !0 || oe)
                  return void(oe && p && p.removeChild(f));
                m = te, d = J;
              }
              (null === m && s || m !== f && m !== g(f)) && (re = m, d.insertBefore(f, m), fe.emit("shadow", f, d, J));
            }
          }
          function U(e) {
            E.rm(e, "gu-hide");
          }
          function _(e) {
            fe.dragging && E.add(e, "gu-hide");
          }
          function F() {
            if (!G) {
              var e = Q.getBoundingClientRect();
              G = Q.cloneNode(!0), G.style.width = d(e) + "px", G.style.height = s(e) + "px", E.rm(G, "gu-transit"), E.add(G, "gu-mirror"), ae.mirrorContainer.appendChild(G), o(S, "add", "mousemove", q), E.add(ae.mirrorContainer, "gu-unselectable"), fe.emit("cloned", G, Q, "mirror");
            }
          }
          function K() {
            G && (E.rm(ae.mirrorContainer, "gu-unselectable"), o(S, "remove", "mousemove", q), v(G).removeChild(G), G = null);
          }
          function z(e, n) {
            for (var t = n; t !== e && v(t) !== e; )
              t = v(t);
            return t === S ? null : t;
          }
          function H(e, n, t, r) {
            function o() {
              var n,
                  o,
                  i,
                  u = e.children.length;
              for (n = 0; u > n; n++) {
                if (o = e.children[n], i = o.getBoundingClientRect(), c && i.left + i.width / 2 > t)
                  return o;
                if (!c && i.top + i.height / 2 > r)
                  return o;
              }
              return null;
            }
            function i() {
              var e = n.getBoundingClientRect();
              return u(c ? t > e.left + d(e) / 2 : r > e.top + s(e) / 2);
            }
            function u(e) {
              return e ? g(n) : n;
            }
            var c = "horizontal" === ae.direction,
                a = n !== e ? i() : o();
            return a;
          }
          function V(e, n) {
            return "boolean" == typeof ae.copy ? ae.copy : ae.copy(e, n);
          }
          var $ = arguments.length;
          1 === $ && Array.isArray(e) === !1 && (n = e, e = []);
          var G,
              J,
              Q,
              W,
              Z,
              ee,
              ne,
              te,
              re,
              oe,
              ie,
              ue,
              ce = null,
              ae = n || {};
          void 0 === ae.moves && (ae.moves = l), void 0 === ae.accepts && (ae.accepts = l), void 0 === ae.invalid && (ae.invalid = B), void 0 === ae.containers && (ae.containers = e || []), void 0 === ae.isContainer && (ae.isContainer = f), void 0 === ae.copy && (ae.copy = !1), void 0 === ae.copySortSource && (ae.copySortSource = !1), void 0 === ae.revertOnSpill && (ae.revertOnSpill = !1), void 0 === ae.removeOnSpill && (ae.removeOnSpill = !1), void 0 === ae.direction && (ae.direction = "vertical"), void 0 === ae.ignoreInputTextSelection && (ae.ignoreInputTextSelection = !0), void 0 === ae.mirrorContainer && (ae.mirrorContainer = x.body);
          var fe = b({
            containers: ae.containers,
            start: X,
            end: P,
            cancel: A,
            remove: R,
            destroy: h,
            dragging: !1
          });
          return ae.removeOnSpill === !0 && fe.on("over", U).on("out", _), r(), fe;
        }
        function o(e, n, r, o) {
          var i = {
            mouseup: "touchend",
            mousedown: "touchstart",
            mousemove: "touchmove"
          },
              u = {
                mouseup: "pointerup",
                mousedown: "pointerdown",
                mousemove: "pointermove"
              },
              c = {
                mouseup: "MSPointerUp",
                mousedown: "MSPointerDown",
                mousemove: "MSPointerMove"
              };
          t.navigator.pointerEnabled ? w[n](e, u[r], o) : t.navigator.msPointerEnabled ? w[n](e, c[r], o) : (w[n](e, i[r], o), w[n](e, r, o));
        }
        function i(e) {
          if (void 0 !== e.touches)
            return e.touches.length;
          if (void 0 !== e.which && 0 !== e.which)
            return e.which;
          if (void 0 !== e.buttons)
            return e.buttons;
          var n = e.button;
          return void 0 !== n ? 1 & n ? 1 : 2 & n ? 3 : 4 & n ? 2 : 0 : void 0;
        }
        function u(e) {
          var n = e.getBoundingClientRect();
          return {
            left: n.left + c("scrollLeft", "pageXOffset"),
            top: n.top + c("scrollTop", "pageYOffset")
          };
        }
        function c(e, n) {
          return "undefined" != typeof t[n] ? t[n] : S.clientHeight ? S[e] : x.body[e];
        }
        function a(e, n, t) {
          var r,
              o = e || {},
              i = o.className;
          return o.className += " gu-hide", r = x.elementFromPoint(n, t), o.className = i, r;
        }
        function f() {
          return !1;
        }
        function l() {
          return !0;
        }
        function d(e) {
          return e.width || e.right - e.left;
        }
        function s(e) {
          return e.height || e.bottom - e.top;
        }
        function v(e) {
          return e.parentNode === x ? null : e.parentNode;
        }
        function p(e) {
          return "INPUT" === e.tagName || "TEXTAREA" === e.tagName || "SELECT" === e.tagName || m(e);
        }
        function m(e) {
          return e ? "false" === e.contentEditable ? !1 : "true" === e.contentEditable ? !0 : m(v(e)) : !1;
        }
        function g(e) {
          function n() {
            var n = e;
            do
              n = n.nextSibling;
 while (n && 1 !== n.nodeType);
            return n;
          }
          return e.nextElementSibling || n();
        }
        function h(e) {
          return e.targetTouches && e.targetTouches.length ? e.targetTouches[0] : e.changedTouches && e.changedTouches.length ? e.changedTouches[0] : e;
        }
        function y(e, n) {
          var t = h(n),
              r = {
                pageX: "clientX",
                pageY: "clientY"
              };
          return e in r && !(e in t) && r[e] in t && (e = r[e]), t[e];
        }
        var b = e("contra/emitter"),
            w = e("crossvent"),
            E = e("./classes"),
            x = document,
            S = x.documentElement;
        n.exports = r;
      }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {
      "./classes": 1,
      "contra/emitter": 4,
      crossvent: 8
    }],
    3: [function(e, n, t) {
      "use strict";
      var r = e("ticky");
      n.exports = function(e, n, t) {
        e && r(function() {
          e.apply(t || null, n || []);
        });
      };
    }, {ticky: 6}],
    4: [function(e, n, t) {
      "use strict";
      var r = e("atoa"),
          o = e("./debounce");
      n.exports = function(e, n) {
        var t = n || {},
            i = {};
        return void 0 === e && (e = {}), e.on = function(n, t) {
          return i[n] ? i[n].push(t) : i[n] = [t], e;
        }, e.once = function(n, t) {
          return t._once = !0, e.on(n, t), e;
        }, e.off = function(n, t) {
          var r = arguments.length;
          if (1 === r)
            delete i[n];
          else if (0 === r)
            i = {};
          else {
            var o = i[n];
            if (!o)
              return e;
            o.splice(o.indexOf(t), 1);
          }
          return e;
        }, e.emit = function() {
          var n = r(arguments);
          return e.emitterSnapshot(n.shift()).apply(this, n);
        }, e.emitterSnapshot = function(n) {
          var u = (i[n] || []).slice(0);
          return function() {
            var i = r(arguments),
                c = this || e;
            if ("error" === n && t["throws"] !== !1 && !u.length)
              throw 1 === i.length ? i[0] : i;
            return u.forEach(function(r) {
              t.async ? o(r, i, c) : r.apply(c, i), r._once && e.off(n, r);
            }), e;
          };
        }, e;
      };
    }, {
      "./debounce": 3,
      atoa: 5
    }],
    5: [function(e, n, t) {
      n.exports = function(e, n) {
        return Array.prototype.slice.call(e, n);
      };
    }, {}],
    6: [function(e, n, t) {
      var r,
          o = "function" == typeof setImmediate;
      r = o ? function(e) {
        setImmediate(e);
      } : function(e) {
        setTimeout(e, 0);
      }, n.exports = r;
    }, {}],
    7: [function(e, n, t) {
      (function(e) {
        function t() {
          try {
            var e = new r("cat", {detail: {foo: "bar"}});
            return "cat" === e.type && "bar" === e.detail.foo;
          } catch (n) {}
          return !1;
        }
        var r = e.CustomEvent;
        n.exports = t() ? r : "function" == typeof document.createEvent ? function(e, n) {
          var t = document.createEvent("CustomEvent");
          return n ? t.initCustomEvent(e, n.bubbles, n.cancelable, n.detail) : t.initCustomEvent(e, !1, !1, void 0), t;
        } : function(e, n) {
          var t = document.createEventObject();
          return t.type = e, n ? (t.bubbles = Boolean(n.bubbles), t.cancelable = Boolean(n.cancelable), t.detail = n.detail) : (t.bubbles = !1, t.cancelable = !1, t.detail = void 0), t;
        };
      }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {}],
    8: [function(e, n, t) {
      (function(t) {
        "use strict";
        function r(e, n, t, r) {
          return e.addEventListener(n, t, r);
        }
        function o(e, n, t) {
          return e.attachEvent("on" + n, f(e, n, t));
        }
        function i(e, n, t, r) {
          return e.removeEventListener(n, t, r);
        }
        function u(e, n, t) {
          var r = l(e, n, t);
          return r ? e.detachEvent("on" + n, r) : void 0;
        }
        function c(e, n, t) {
          function r() {
            var e;
            return p.createEvent ? (e = p.createEvent("Event"), e.initEvent(n, !0, !0)) : p.createEventObject && (e = p.createEventObject()), e;
          }
          function o() {
            return new s(n, {detail: t});
          }
          var i = -1 === v.indexOf(n) ? o() : r();
          e.dispatchEvent ? e.dispatchEvent(i) : e.fireEvent("on" + n, i);
        }
        function a(e, n, r) {
          return function(n) {
            var o = n || t.event;
            o.target = o.target || o.srcElement, o.preventDefault = o.preventDefault || function() {
              o.returnValue = !1;
            }, o.stopPropagation = o.stopPropagation || function() {
              o.cancelBubble = !0;
            }, o.which = o.which || o.keyCode, r.call(e, o);
          };
        }
        function f(e, n, t) {
          var r = l(e, n, t) || a(e, n, t);
          return h.push({
            wrapper: r,
            element: e,
            type: n,
            fn: t
          }), r;
        }
        function l(e, n, t) {
          var r = d(e, n, t);
          if (r) {
            var o = h[r].wrapper;
            return h.splice(r, 1), o;
          }
        }
        function d(e, n, t) {
          var r,
              o;
          for (r = 0; r < h.length; r++)
            if (o = h[r], o.element === e && o.type === n && o.fn === t)
              return r;
        }
        var s = e("custom-event"),
            v = e("./eventmap"),
            p = t.document,
            m = r,
            g = i,
            h = [];
        t.addEventListener || (m = o, g = u), n.exports = {
          add: m,
          remove: g,
          fabricate: c
        };
      }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {
      "./eventmap": 9,
      "custom-event": 7
    }],
    9: [function(e, n, t) {
      (function(e) {
        "use strict";
        var t = [],
            r = "",
            o = /^on/;
        for (r in e)
          o.test(r) && t.push(r.slice(2));
        n.exports = t;
      }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {}]
  }, {}, [2])(2);
});

})();
System.registerDynamic("node_modules/ng2-dragula/src/app/providers/dragula.provider.js", ["dragula", "angular2/core"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var dragula = $__require('dragula');
  var core_1 = $__require('angular2/core');
  var DragulaService = (function() {
    function DragulaService() {
      this.cancel = new core_1.EventEmitter();
      this.cloned = new core_1.EventEmitter();
      this.drag = new core_1.EventEmitter();
      this.dragend = new core_1.EventEmitter();
      this.drop = new core_1.EventEmitter();
      this.out = new core_1.EventEmitter();
      this.over = new core_1.EventEmitter();
      this.remove = new core_1.EventEmitter();
      this.shadow = new core_1.EventEmitter();
      this.dropModel = new core_1.EventEmitter();
      this.removeModel = new core_1.EventEmitter();
      this.events = ['cancel', 'cloned', 'drag', 'dragend', 'drop', 'out', 'over', 'remove', 'shadow', 'dropModel', 'removeModel'];
      this.bags = [];
    }
    DragulaService.prototype.add = function(name, drake) {
      var bag = this.find(name);
      if (bag) {
        throw new Error('Bag named: "' + name + '" already exists.');
      }
      bag = {
        name: name,
        drake: drake
      };
      this.bags.push(bag);
      if (drake.models) {
        this.handleModels(name, drake);
      }
      if (!bag.initEvents) {
        this.setupEvents(bag);
      }
      return bag;
    };
    DragulaService.prototype.find = function(name) {
      for (var i = 0; i < this.bags.length; i++) {
        if (this.bags[i].name === name) {
          return this.bags[i];
        }
      }
    };
    DragulaService.prototype.destroy = function(name) {
      var bag = this.find(name);
      var i = this.bags.indexOf(bag);
      this.bags.splice(i, 1);
      bag.drake.destroy();
    };
    DragulaService.prototype.setOptions = function(name, options) {
      var bag = this.add(name, dragula(options));
      this.handleModels(name, bag.drake);
    };
    DragulaService.prototype.handleModels = function(name, drake) {
      var _this = this;
      var dragElm;
      var dragIndex;
      var dropIndex;
      var sourceModel;
      drake.on('remove', function(el, source) {
        if (!drake.models) {
          return;
        }
        sourceModel = drake.models[drake.containers.indexOf(source)];
        sourceModel.splice(dragIndex, 1);
        _this.removeModel.emit([name, el, source]);
      });
      drake.on('drag', function(el, source) {
        dragElm = el;
        dragIndex = _this.domIndexOf(el, source);
      });
      drake.on('drop', function(dropElm, target, source) {
        if (!drake.models) {
          return;
        }
        dropIndex = _this.domIndexOf(dropElm, target);
        sourceModel = drake.models[drake.containers.indexOf(source)];
        if (target === source) {
          sourceModel.splice(dropIndex, 0, sourceModel.splice(dragIndex, 1)[0]);
        } else {
          var notCopy = dragElm === dropElm;
          var targetModel = drake.models[drake.containers.indexOf(target)];
          var dropElmModel = notCopy ? sourceModel[dragIndex] : JSON.parse(JSON.stringify(sourceModel[dragIndex]));
          if (notCopy) {
            sourceModel.splice(dragIndex, 1);
          }
          targetModel.splice(dropIndex, 0, dropElmModel);
          target.removeChild(dropElm);
        }
        _this.dropModel.emit([name, dropElm, target, source]);
      });
    };
    DragulaService.prototype.setupEvents = function(bag) {
      bag.initEvents = true;
      var that = this;
      var emitter = function(type) {
        function replicate() {
          var args = Array.prototype.slice.call(arguments);
          that[type].emit([bag.name].concat(args));
        }
        bag.drake.on(type, replicate);
      };
      this.events.forEach(emitter);
    };
    DragulaService.prototype.domIndexOf = function(child, parent) {
      return Array.prototype.indexOf.call(parent.children, child);
    };
    DragulaService = __decorate([core_1.Injectable(), __metadata('design:paramtypes', [])], DragulaService);
    return DragulaService;
  }());
  exports.DragulaService = DragulaService;
  return module.exports;
});

System.registerDynamic("node_modules/ng2-dragula/ng2-dragula.js", ["./src/app/directives/dragula.directive", "./src/app/providers/dragula.provider"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  function __export(m) {
    for (var p in m)
      if (!exports.hasOwnProperty(p))
        exports[p] = m[p];
  }
  var dragula_directive_1 = $__require('./src/app/directives/dragula.directive');
  var dragula_provider_1 = $__require('./src/app/providers/dragula.provider');
  __export($__require('./src/app/directives/dragula.directive'));
  __export($__require('./src/app/providers/dragula.provider'));
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.default = {
    directives: [dragula_directive_1.Dragula],
    providers: [dragula_provider_1.DragulaService]
  };
  return module.exports;
});

System.register("app/layer.component.js", ["angular2/core", "ng2-material/all", "ng2-dragula/ng2-dragula", "./services/layer.service"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1,
      all_1,
      ng2_dragula_1,
      layer_service_1;
  var LayerComponent;
  return {
    setters: [function(core_1_1) {
      core_1 = core_1_1;
    }, function(all_1_1) {
      all_1 = all_1_1;
    }, function(ng2_dragula_1_1) {
      ng2_dragula_1 = ng2_dragula_1_1;
    }, function(layer_service_1_1) {
      layer_service_1 = layer_service_1_1;
    }],
    execute: function() {
      LayerComponent = (function() {
        function LayerComponent(dragulaService, layerService) {
          this.dragulaService = dragulaService;
          this.layerService = layerService;
          dragulaService.setOptions('layer-bag', {
            removeOnSpill: false,
            revertOnSpill: true
          });
          this.handleDragAndDrop();
        }
        LayerComponent.prototype.handleDragAndDrop = function() {
          var _this = this;
          var dragIndex;
          var dropIndex;
          this.dragulaService.drag.subscribe(function(value) {
            var _ = value[0],
                listItem = value[1],
                list = value[2];
            dragIndex = _this.domIndexOf(listItem, list);
          });
          this.dragulaService.drop.subscribe(function(value) {
            var _ = value[0],
                listItem = value[1],
                list = value[2];
            dropIndex = _this.domIndexOf(listItem, list);
            var layers = _this.layerService.getLayers().getValue();
            layers.splice(dropIndex, 0, layers.splice(dragIndex, 1)[0]);
            _this.layerService.setLayers(layers);
          });
        };
        LayerComponent.prototype.domIndexOf = function(child, parent) {
          return Array.prototype.indexOf.call(parent.children, child);
        };
        LayerComponent.prototype.replaceContextMenu = function(event, layer) {
          event.preventDefault();
          console.log("A context menu for " + layer.name + " will appear in future versions!");
        };
        LayerComponent = __decorate([core_1.Component({
          selector: 'layer-component',
          template: "\n    <md-content flex>\n    <md-list [dragula]=\"'layer-bag'\">\n        <md-list-item *ngFor=\"#layer of layerService.getLayers() | async; #index = index\"\n                      md-ink (click)=\"layerService.setSelectedLayer(layer)\"\n                      [class.md-active]=\"layer === (layerService.getSelectedLayer() | async)\"\n                      (contextmenu)=\"replaceContextMenu($event, layer)\">\n            <div layout=\"column\">\n                <div layout=\"row\">\n                    <button md-button class=\"md-icon-button\"\n                            style=\"margin-left: -16px;\"\n                            aria-label=\"Settings\"\n                            (click)=\"layer.expanded=!layer.expanded\">\n                        <i *ngIf=\"!layer.expanded\" md-icon>expand_more</i>\n                        <i *ngIf=\"layer.expanded\" md-icon>expand_less</i>\n                    </button>\n    \n                    <div class=\"md-list-item-text\" style=\"padding-top: 10px\">\n                        {{layer.name}}\n                    </div>\n    \n                    <button md-button class=\"md-icon-button\"\n                            style=\"margin-right: -16px;\"\n                            aria-label=\"More\"\n                            *ngIf=\"layer === (layerService.getSelectedLayer() | async)\"\n                            (click)=\"replaceContextMenu($event, layer)\">\n                        <i md-icon>more_vert</i>\n                    </button>\n                </div>\n                <div *ngIf=\"layer.expanded\">\n                    {{layer.name}}\n                    <br>{{layer.name}}\n                </div>\n            </div>\n            <md-divider\n                [class.md-active]=\"layer === (layerService.getSelectedLayer() | async)\">\n            </md-divider>\n        </md-list-item>\n    </md-list>\n    </md-content>\n    ",
          styles: ["\n    .md-active {\n        background: #f5f5f5;\n    }\n    md-divider.md-active {\n        border-top-color: #3f51b5;\n    }\n    .md-list-item-text {\n        width: 110px;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n        overflow: hidden;\n    }\n    md-list {\n        height: 100%;\n    }\n    md-content {\n        overflow-x: hidden;\n    }\n    "],
          viewProviders: [ng2_dragula_1.DragulaService],
          changeDetection: core_1.ChangeDetectionStrategy.OnPush,
          directives: [all_1.MATERIAL_DIRECTIVES, ng2_dragula_1.Dragula]
        }), __metadata('design:paramtypes', [ng2_dragula_1.DragulaService, layer_service_1.LayerService])], LayerComponent);
        return LayerComponent;
      }());
      exports_1("LayerComponent", LayerComponent);
    }
  };
});

System.register("app/angular-grid.js", ["angular2/core", "angular2/http", "rxjs/Rx", "./config.model", "./services/layer.service", "./operator.model"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1,
      http_1,
      Rx_1,
      config_model_1,
      layer_service_1,
      operator_model_1;
  var AngularGrid;
  return {
    setters: [function(core_1_1) {
      core_1 = core_1_1;
    }, function(http_1_1) {
      http_1 = http_1_1;
    }, function(Rx_1_1) {
      Rx_1 = Rx_1_1;
    }, function(config_model_1_1) {
      config_model_1 = config_model_1_1;
    }, function(layer_service_1_1) {
      layer_service_1 = layer_service_1_1;
    }, function(operator_model_1_1) {
      operator_model_1 = operator_model_1_1;
    }],
    execute: function() {
      AngularGrid = (function() {
        function AngularGrid(http, changeDetectorRef, layerService) {
          var _this = this;
          this.http = http;
          this.changeDetectorRef = changeDetectorRef;
          this.layerService = layerService;
          this.data = [];
          this.columns = [];
          this.data$ = this.layerService.getSelectedLayer().map(function(layer) {
            if (layer === undefined) {
              return Rx_1.Observable.of([]);
            } else {
              switch (layer.resultType) {
                case operator_model_1.ResultType.POINTS:
                  return _this.http.get(config_model_1.default.MAPPING_URL + '?' + Object.keys(layer.params).map(function(key) {
                    return key + '=' + encodeURIComponent(layer.params[key]);
                  }).join('&') + '&format=csv').map(function(data) {
                    var lines = data.text().split('\n');
                    var columns = lines[0].split(',').map(function(name) {
                      return ({name: name});
                    });
                    var items = [];
                    for (var _i = 0,
                        _a = lines.slice(1, lines.length - 1); _i < _a.length; _i++) {
                      var line = _a[_i];
                      var splitted = line.split(',');
                      var item = {};
                      for (var i in splitted) {
                        item[columns[i].name] = splitted[i];
                      }
                      items.push(item);
                    }
                    return items;
                  });
                default:
                  return Rx_1.Observable.of([]);
              }
            }
          }).concatAll();
          this.columns$ = this.data$.map(function(items) {
            if (items.length > 0) {
              return Object.keys(items[0]).map(function(key) {
                return ({name: key});
              });
            } else {
              return [];
            }
          });
        }
        AngularGrid.prototype.ngOnInit = function() {
          var _this = this;
          this.data$.subscribe(function(items) {
            _this.data = items;
            if (items.length > 0) {
              _this.columns = Object.keys(items[0]).map(function(key) {
                return ({name: key});
              });
            } else {
              _this.columns = [];
            }
            _this.changeDetectorRef.markForCheck();
          });
        };
        __decorate([core_1.Input(), __metadata('design:type', Number)], AngularGrid.prototype, "height", void 0);
        AngularGrid = __decorate([core_1.Component({
          selector: 'angular-grid',
          template: "\n        <vaadin-grid\n            [columns]=\"columns\"\n            [items]=\"data\"\n            [style.height.px]=\"height\">\n        </vaadin-grid>\n    ",
          providers: [],
          changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), __metadata('design:paramtypes', [http_1.Http, core_1.ChangeDetectorRef, layer_service_1.LayerService])], AngularGrid);
        return AngularGrid;
      }());
      exports_1("AngularGrid", AngularGrid);
    }
  };
});

System.register("app/openlayers/map.component.js", ["angular2/core", "openlayers"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1,
      openlayers_1;
  var MapComponent;
  return {
    setters: [function(core_1_1) {
      core_1 = core_1_1;
    }, function(openlayers_1_1) {
      openlayers_1 = openlayers_1_1;
    }],
    execute: function() {
      MapComponent = (function() {
        function MapComponent() {
          this.isSizeChanged = false;
        }
        MapComponent.prototype.resize = function() {
          this.isSizeChanged = true;
        };
        MapComponent.prototype.ngAfterViewInit = function() {
          var _this = this;
          var backgroundLayer = new openlayers_1.default.layer.Tile({source: new openlayers_1.default.source.OSM()});
          this.map = new openlayers_1.default.Map({
            target: this.mapContainer.nativeElement,
            layers: [backgroundLayer],
            view: new openlayers_1.default.View({
              projection: 'EPSG:3857',
              center: [0, 0],
              zoom: 2
            }),
            controls: [],
            logo: false
          });
          this.layers.forEach(function(layerComponent) {
            return _this.map.addLayer(layerComponent.getLayer());
          });
          this.layers.changes.subscribe(function(_) {
            _this.map.getLayers().clear();
            _this.map.getLayers().push(backgroundLayer);
            _this.layers.forEach(function(layerComponent) {
              return _this.map.getLayers().push(layerComponent.getLayer());
            });
          });
        };
        MapComponent.prototype.ngAfterViewChecked = function() {
          if (this.isSizeChanged) {
            this.map.updateSize();
            this.isSizeChanged = false;
          }
        };
        MapComponent.prototype.zoomIn = function() {
          var zoomLevel = this.map.getView().getZoom();
          this.map.getView().setZoom(zoomLevel + 1);
        };
        MapComponent.prototype.zoomOut = function() {
          var zoomLevel = this.map.getView().getZoom();
          this.map.getView().setZoom(zoomLevel - 1);
        };
        MapComponent.prototype.zoomToMap = function() {
          var extent = this.map.getView().getProjection().getExtent();
          this.map.getView().fit(extent, this.map.getSize());
        };
        MapComponent.prototype.zoomToLayer = function(layerIndex) {
          var layer = this.layers.toArray()[layerIndex];
          var extent = layer.getExtent();
          if (extent === undefined) {
            this.zoomToMap();
          } else {
            this.map.getView().fit(extent, this.map.getSize());
          }
        };
        __decorate([core_1.ViewChild('mapContainer'), __metadata('design:type', core_1.ElementRef)], MapComponent.prototype, "mapContainer", void 0);
        __decorate([core_1.Input('height'), __metadata('design:type', Number)], MapComponent.prototype, "height", void 0);
        __decorate([core_1.ContentChildren('olLayer'), __metadata('design:type', core_1.QueryList)], MapComponent.prototype, "layers", void 0);
        MapComponent = __decorate([core_1.Component({
          selector: 'ol-map',
          template: "\n    <div #mapContainer style=\"background: black;\"\n         [style.height.px]=\"height\">\n    </div>\n    <ng-content></ng-content>\n    ",
          styleUrls: [],
          changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), __metadata('design:paramtypes', [])], MapComponent);
        return MapComponent;
      }());
      exports_1("MapComponent", MapComponent);
    }
  };
});

(function() {
var define = System.amdDefine;
(function(root, factory) {
  if (typeof exports === "object") {
    module.exports = factory();
  } else if (typeof define === "function" && define.amd) {
    define("node_modules/openlayers/dist/ol.js", [], factory);
  } else {
    root.ol = factory();
  }
}(this, function() {
  var OPENLAYERS = {};
  var l,
      aa = this;
  function ba(a) {
    return void 0 !== a;
  }
  function u(a, c, d) {
    a = a.split(".");
    d = d || aa;
    a[0] in d || !d.execScript || d.execScript("var " + a[0]);
    for (var e; a.length && (e = a.shift()); )
      !a.length && ba(c) ? d[e] = c : d[e] ? d = d[e] : d = d[e] = {};
  }
  function da(a) {
    a.Zb = function() {
      return a.Jg ? a.Jg : a.Jg = new a;
    };
  }
  function ea(a) {
    var c = typeof a;
    if ("object" == c)
      if (a) {
        if (a instanceof Array)
          return "array";
        if (a instanceof Object)
          return c;
        var d = Object.prototype.toString.call(a);
        if ("[object Window]" == d)
          return "object";
        if ("[object Array]" == d || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice"))
          return "array";
        if ("[object Function]" == d || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call"))
          return "function";
      } else
        return "null";
    else if ("function" == c && "undefined" == typeof a.call)
      return "object";
    return c;
  }
  function fa(a) {
    return "array" == ea(a);
  }
  function ga(a) {
    var c = ea(a);
    return "array" == c || "object" == c && "number" == typeof a.length;
  }
  function ha(a) {
    return "string" == typeof a;
  }
  function ia(a) {
    return "number" == typeof a;
  }
  function ja(a) {
    return "function" == ea(a);
  }
  function ka(a) {
    var c = typeof a;
    return "object" == c && null != a || "function" == c;
  }
  function x(a) {
    return a[la] || (a[la] = ++ma);
  }
  var la = "closure_uid_" + (1E9 * Math.random() >>> 0),
      ma = 0;
  function na(a, c, d) {
    return a.call.apply(a.bind, arguments);
  }
  function oa(a, c, d) {
    if (!a)
      throw Error();
    if (2 < arguments.length) {
      var e = Array.prototype.slice.call(arguments, 2);
      return function() {
        var d = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(d, e);
        return a.apply(c, d);
      };
    }
    return function() {
      return a.apply(c, arguments);
    };
  }
  function pa(a, c, d) {
    pa = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? na : oa;
    return pa.apply(null, arguments);
  }
  function qa(a, c) {
    var d = Array.prototype.slice.call(arguments, 1);
    return function() {
      var c = d.slice();
      c.push.apply(c, arguments);
      return a.apply(this, c);
    };
  }
  var ra = Date.now || function() {
    return +new Date;
  };
  function y(a, c) {
    function d() {}
    d.prototype = c.prototype;
    a.ha = c.prototype;
    a.prototype = new d;
    a.prototype.constructor = a;
    a.gp = function(a, d, g) {
      for (var h = Array(arguments.length - 2),
          k = 2; k < arguments.length; k++)
        h[k - 2] = arguments[k];
      return c.prototype[d].apply(a, h);
    };
  }
  ;
  var sa,
      ta;
  function ua() {}
  ;
  var va;
  var wa = String.prototype.trim ? function(a) {
    return a.trim();
  } : function(a) {
    return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
  };
  function xa(a) {
    if (!ya.test(a))
      return a;
    -1 != a.indexOf("&") && (a = a.replace(za, "&amp;"));
    -1 != a.indexOf("<") && (a = a.replace(Ba, "&lt;"));
    -1 != a.indexOf(">") && (a = a.replace(Ca, "&gt;"));
    -1 != a.indexOf('"') && (a = a.replace(Ea, "&quot;"));
    -1 != a.indexOf("'") && (a = a.replace(Fa, "&#39;"));
    -1 != a.indexOf("\x00") && (a = a.replace(Ga, "&#0;"));
    return a;
  }
  var za = /&/g,
      Ba = /</g,
      Ca = />/g,
      Ea = /"/g,
      Fa = /'/g,
      Ga = /\x00/g,
      ya = /[\x00&<>"']/,
      Ha = String.prototype.repeat ? function(a, c) {
        return a.repeat(c);
      } : function(a, c) {
        return Array(c + 1).join(a);
      };
  function Ja(a, c) {
    var d = ba(c) ? a.toFixed(c) : String(a),
        e = d.indexOf(".");
    -1 == e && (e = d.length);
    return Ha("0", Math.max(0, 2 - e)) + d;
  }
  function Ka(a, c) {
    for (var d = 0,
        e = wa(String(a)).split("."),
        f = wa(String(c)).split("."),
        g = Math.max(e.length, f.length),
        h = 0; 0 == d && h < g; h++) {
      var k = e[h] || "",
          m = f[h] || "",
          n = RegExp("(\\d*)(\\D*)", "g"),
          p = RegExp("(\\d*)(\\D*)", "g");
      do {
        var q = n.exec(k) || ["", "", ""],
            r = p.exec(m) || ["", "", ""];
        if (0 == q[0].length && 0 == r[0].length)
          break;
        d = La(0 == q[1].length ? 0 : parseInt(q[1], 10), 0 == r[1].length ? 0 : parseInt(r[1], 10)) || La(0 == q[2].length, 0 == r[2].length) || La(q[2], r[2]);
      } while (0 == d);
    }
    return d;
  }
  function La(a, c) {
    return a < c ? -1 : a > c ? 1 : 0;
  }
  ;
  function Ma(a, c, d) {
    return Math.min(Math.max(a, c), d);
  }
  var Na = function() {
    var a;
    "cosh" in Math ? a = Math.cosh : a = function(a) {
      a = Math.exp(a);
      return (a + 1 / a) / 2;
    };
    return a;
  }();
  function Oa(a, c, d, e, f, g) {
    var h = f - d,
        k = g - e;
    if (0 !== h || 0 !== k) {
      var m = ((a - d) * h + (c - e) * k) / (h * h + k * k);
      1 < m ? (d = f, e = g) : 0 < m && (d += h * m, e += k * m);
    }
    return Qa(a, c, d, e);
  }
  function Qa(a, c, d, e) {
    a = d - a;
    c = e - c;
    return a * a + c * c;
  }
  function Ra(a) {
    return a * Math.PI / 180;
  }
  ;
  function Sa(a) {
    return function(c) {
      if (c)
        return [Ma(c[0], a[0], a[2]), Ma(c[1], a[1], a[3])];
    };
  }
  function Ta(a) {
    return a;
  }
  ;
  function Ua(a, c) {
    return a > c ? 1 : a < c ? -1 : 0;
  }
  function Va(a, c) {
    return 0 <= a.indexOf(c);
  }
  function Wa(a, c, d) {
    var e = a.length;
    if (a[0] <= c)
      return 0;
    if (!(c <= a[e - 1]))
      if (0 < d)
        for (d = 1; d < e; ++d) {
          if (a[d] < c)
            return d - 1;
        }
      else if (0 > d)
        for (d = 1; d < e; ++d) {
          if (a[d] <= c)
            return d;
        }
      else
        for (d = 1; d < e; ++d) {
          if (a[d] == c)
            return d;
          if (a[d] < c)
            return a[d - 1] - c < c - a[d] ? d - 1 : d;
        }
    return e - 1;
  }
  function Xa(a) {
    return a.reduce(function(a, d) {
      return fa(d) ? a.concat(Xa(d)) : a.concat(d);
    }, []);
  }
  function Ya(a, c) {
    var d,
        e = ga(c) ? c : [c],
        f = e.length;
    for (d = 0; d < f; d++)
      a[a.length] = e[d];
  }
  function Za(a, c) {
    var d = a.indexOf(c),
        e = -1 < d;
    e && a.splice(d, 1);
    return e;
  }
  function $a(a, c) {
    for (var d = a.length >>> 0,
        e,
        f = 0; f < d; f++)
      if (e = a[f], c(e, f, a))
        return e;
    return null;
  }
  function bb(a, c) {
    var d = a.length;
    if (d !== c.length)
      return !1;
    for (var e = 0; e < d; e++)
      if (a[e] !== c[e])
        return !1;
    return !0;
  }
  function cb(a) {
    var c = db,
        d = a.length,
        e = Array(a.length),
        f;
    for (f = 0; f < d; f++)
      e[f] = {
        index: f,
        value: a[f]
      };
    e.sort(function(a, d) {
      return c(a.value, d.value) || a.index - d.index;
    });
    for (f = 0; f < a.length; f++)
      a[f] = e[f].value;
  }
  function eb(a, c) {
    var d;
    return a.every(function(e, f) {
      d = f;
      return !c(e, f, a);
    }) ? -1 : d;
  }
  ;
  function fb(a) {
    return function(c, d, e) {
      if (void 0 !== c)
        return c = Wa(a, c, e), c = Ma(c + d, 0, a.length - 1), a[c];
    };
  }
  function gb(a, c, d) {
    return function(e, f, g) {
      if (void 0 !== e)
        return e = Math.max(Math.floor(Math.log(c / e) / Math.log(a) + (0 < g ? 0 : 0 > g ? 1 : .5)) + f, 0), void 0 !== d && (e = Math.min(e, d)), c / Math.pow(a, e);
    };
  }
  ;
  function hb(a) {
    if (void 0 !== a)
      return 0;
  }
  function ib(a, c) {
    if (void 0 !== a)
      return a + c;
  }
  function jb(a) {
    var c = 2 * Math.PI / a;
    return function(a, e) {
      if (void 0 !== a)
        return a = Math.floor((a + e) / c + .5) * c;
    };
  }
  function kb() {
    var a = Ra(5);
    return function(c, d) {
      if (void 0 !== c)
        return Math.abs(c + d) <= a ? 0 : c + d;
    };
  }
  ;
  function lb(a, c, d) {
    this.center = a;
    this.resolution = c;
    this.rotation = d;
  }
  ;
  var mb = "function" === typeof Object.assign ? Object.assign : function(a, c) {
    if (void 0 === a || null === a)
      throw new TypeError("Cannot convert undefined or null to object");
    for (var d = Object(a),
        e = 1,
        f = arguments.length; e < f; ++e) {
      var g = arguments[e];
      if (void 0 !== g && null !== g)
        for (var h in g)
          g.hasOwnProperty(h) && (d[h] = g[h]);
    }
    return d;
  };
  function nb(a) {
    for (var c in a)
      delete a[c];
  }
  function ob(a) {
    var c = [],
        d;
    for (d in a)
      c.push(a[d]);
    return c;
  }
  function pb(a) {
    for (var c in a)
      return !1;
    return !c;
  }
  ;
  var qb = "olm_" + (1E4 * Math.random() | 0);
  function rb(a) {
    function c(c) {
      var e = a.listener,
          f = a.dg || a.target;
      a.fg && sb(a);
      return e.call(f, c);
    }
    return a.eg = c;
  }
  function tb(a, c, d, e) {
    for (var f,
        g = 0,
        h = a.length; g < h; ++g)
      if (f = a[g], f.listener === c && f.dg === d)
        return e && (f.deleteIndex = g), f;
  }
  function ub(a, c) {
    var d = a[qb];
    return d ? d[c] : void 0;
  }
  function vb(a) {
    var c = a[qb];
    c || (c = a[qb] = {});
    return c;
  }
  function wb(a, c) {
    var d = ub(a, c);
    if (d) {
      for (var e = 0,
          f = d.length; e < f; ++e)
        a.removeEventListener(c, d[e].eg), nb(d[e]);
      d.length = 0;
      if (d = a[qb])
        delete d[c], 0 === Object.keys(d).length && delete a[qb];
    }
  }
  function D(a, c, d, e, f) {
    var g = vb(a),
        h = g[c];
    h || (h = g[c] = []);
    (g = tb(h, d, e, !1)) ? f || (g.fg = !1) : (g = {
      dg: e,
      fg: !!f,
      listener: d,
      target: a,
      type: c
    }, a.addEventListener(c, rb(g)), h.push(g));
    return g;
  }
  function xb(a, c, d, e) {
    return D(a, c, d, e, !0);
  }
  function yb(a, c, d, e) {
    (a = ub(a, c)) && (d = tb(a, d, e, !0)) && sb(d);
  }
  function sb(a) {
    if (a && a.target) {
      a.target.removeEventListener(a.type, a.eg);
      var c = ub(a.target, a.type);
      if (c) {
        var d = "deleteIndex" in a ? a.deleteIndex : c.indexOf(a);
        -1 !== d && c.splice(d, 1);
        0 === c.length && wb(a.target, a.type);
      }
      nb(a);
    }
  }
  ;
  function zb() {
    0 != Ab && (Bb[x(this)] = this);
    this.Ga = this.Ga;
    this.ua = this.ua;
  }
  var Ab = 0,
      Bb = {};
  zb.prototype.Ga = !1;
  zb.prototype.Rd = function() {
    if (!this.Ga && (this.Ga = !0, this.fa(), 0 != Ab)) {
      var a = x(this);
      delete Bb[a];
    }
  };
  function Cb(a, c) {
    a.Ga ? c.call(void 0) : (a.ua || (a.ua = []), a.ua.push(ba(void 0) ? pa(c, void 0) : c));
  }
  zb.prototype.fa = function() {
    if (this.ua)
      for (; this.ua.length; )
        this.ua.shift()();
  };
  function Db(a) {
    a && "function" == typeof a.Rd && a.Rd();
  }
  ;
  function Eb(a, c) {
    this.type = a;
    this.target = c;
  }
  Eb.prototype.preventDefault = Eb.prototype.stopPropagation = function() {
    this.Jn = !0;
  };
  function Fb(a) {
    a.stopPropagation();
  }
  function Gb(a) {
    a.preventDefault();
  }
  ;
  function Hb() {
    zb.call(this);
    this.ta = {};
  }
  y(Hb, zb);
  Hb.prototype.addEventListener = function(a, c) {
    var d = this.ta[a];
    d || (d = this.ta[a] = []);
    -1 === d.indexOf(c) && d.unshift(c);
  };
  Hb.prototype.b = function(a) {
    a = "string" === typeof a ? new Eb(a) : a;
    var c = a.type;
    a.target = this;
    if (c = this.ta[c])
      for (var d = c.length - 1; 0 <= d; --d)
        if (!1 === c[d].call(this, a) || a.Jn)
          return !1;
  };
  Hb.prototype.fa = function() {
    var a = vb(this),
        c;
    for (c in a)
      wb(this, c);
    Hb.ha.fa.call(this);
  };
  function Ib(a, c) {
    return c ? c in a.ta : 0 < Object.keys(a.ta).length;
  }
  Hb.prototype.removeEventListener = function(a, c) {
    var d = this.ta[a];
    d && (d.splice(d.indexOf(c), 1), 0 === d.length && delete this.ta[a]);
  };
  function Jb() {
    Hb.call(this);
    this.g = 0;
  }
  y(Jb, Hb);
  function Kb(a) {
    if (Array.isArray(a))
      for (var c = 0,
          d = a.length; c < d; ++c)
        sb(a[c]);
    else
      sb(a);
  }
  l = Jb.prototype;
  l.u = function() {
    ++this.g;
    this.b("change");
  };
  l.L = function() {
    return this.g;
  };
  l.I = function(a, c, d) {
    if (Array.isArray(a)) {
      for (var e = a.length,
          f = Array(e),
          g = 0; g < e; ++g)
        f[g] = D(this, a[g], c, d);
      return f;
    }
    return D(this, a, c, d);
  };
  l.M = function(a, c, d) {
    if (Array.isArray(a)) {
      for (var e = a.length,
          f = Array(e),
          g = 0; g < e; ++g)
        f[g] = xb(this, a[g], c, d);
      return f;
    }
    return xb(this, a, c, d);
  };
  l.K = function(a, c, d) {
    if (Array.isArray(a))
      for (var e = 0,
          f = a.length; e < f; ++e)
        yb(this, a[e], c, d);
    else
      yb(this, a, c, d);
  };
  l.N = Kb;
  function Lb(a, c, d) {
    Eb.call(this, a);
    this.key = c;
    this.oldValue = d;
  }
  y(Lb, Eb);
  function Mb(a) {
    Jb.call(this);
    x(this);
    this.T = {};
    void 0 !== a && this.C(a);
  }
  y(Mb, Jb);
  var Nb = {};
  function Ob(a) {
    return Nb.hasOwnProperty(a) ? Nb[a] : Nb[a] = "change:" + a;
  }
  l = Mb.prototype;
  l.get = function(a) {
    var c;
    this.T.hasOwnProperty(a) && (c = this.T[a]);
    return c;
  };
  l.O = function() {
    return Object.keys(this.T);
  };
  l.P = function() {
    return mb({}, this.T);
  };
  function Pb(a, c, d) {
    var e;
    e = Ob(c);
    a.b(new Lb(e, c, d));
    a.b(new Lb("propertychange", c, d));
  }
  l.set = function(a, c, d) {
    d ? this.T[a] = c : (d = this.T[a], this.T[a] = c, d !== c && Pb(this, a, d));
  };
  l.C = function(a, c) {
    for (var d in a)
      this.set(d, a[d], c);
  };
  l.R = function(a, c) {
    if (a in this.T) {
      var d = this.T[a];
      delete this.T[a];
      c || Pb(this, a, d);
    }
  };
  function Qb(a, c, d) {
    void 0 === d && (d = [0, 0]);
    d[0] = a[0] + 2 * c;
    d[1] = a[1] + 2 * c;
    return d;
  }
  function Rb(a, c, d) {
    void 0 === d && (d = [0, 0]);
    d[0] = a[0] * c + .5 | 0;
    d[1] = a[1] * c + .5 | 0;
    return d;
  }
  function Sb(a, c) {
    if (fa(a))
      return a;
    void 0 === c ? c = [a, a] : (c[0] = a, c[1] = a);
    return c;
  }
  ;
  var Tb = Array.prototype,
      Ub = Tb.indexOf ? function(a, c, d) {
        return Tb.indexOf.call(a, c, d);
      } : function(a, c, d) {
        d = null == d ? 0 : 0 > d ? Math.max(0, a.length + d) : d;
        if (ha(a))
          return ha(c) && 1 == c.length ? a.indexOf(c, d) : -1;
        for (; d < a.length; d++)
          if (d in a && a[d] === c)
            return d;
        return -1;
      },
      Vb = Tb.forEach ? function(a, c, d) {
        Tb.forEach.call(a, c, d);
      } : function(a, c, d) {
        for (var e = a.length,
            f = ha(a) ? a.split("") : a,
            g = 0; g < e; g++)
          g in f && c.call(d, f[g], g, a);
      },
      Wb = Tb.filter ? function(a, c, d) {
        return Tb.filter.call(a, c, d);
      } : function(a, c, d) {
        for (var e = a.length,
            f = [],
            g = 0,
            h = ha(a) ? a.split("") : a,
            k = 0; k < e; k++)
          if (k in h) {
            var m = h[k];
            c.call(d, m, k, a) && (f[g++] = m);
          }
        return f;
      };
  function Xb(a) {
    return Tb.concat.apply(Tb, arguments);
  }
  function Yb(a) {
    var c = a.length;
    if (0 < c) {
      for (var d = Array(c),
          e = 0; e < c; e++)
        d[e] = a[e];
      return d;
    }
    return [];
  }
  function Zb(a, c, d) {
    return 2 >= arguments.length ? Tb.slice.call(a, c) : Tb.slice.call(a, c, d);
  }
  ;
  function $b(a, c) {
    var d = a % c;
    return 0 > d * c ? d + c : d;
  }
  function ac(a, c, d) {
    return a + d * (c - a);
  }
  ;
  function bc(a, c) {
    a[0] += c[0];
    a[1] += c[1];
    return a;
  }
  function cc(a, c) {
    var d = a[0],
        e = a[1],
        f = c[0],
        g = c[1],
        h = f[0],
        f = f[1],
        k = g[0],
        g = g[1],
        m = k - h,
        n = g - f,
        d = 0 === m && 0 === n ? 0 : (m * (d - h) + n * (e - f)) / (m * m + n * n || 0);
    0 >= d || (1 <= d ? (h = k, f = g) : (h += d * m, f += d * n));
    return [h, f];
  }
  function dc(a, c, d) {
    a = $b(a + 180, 360) - 180;
    var e = Math.abs(3600 * a);
    d = d || 0;
    return Math.floor(e / 3600) + "\u00b0 " + Ja(Math.floor(e / 60 % 60)) + "\u2032 " + Ja(e % 60, d) + "\u2033 " + c.charAt(0 > a ? 1 : 0);
  }
  function ec(a, c, d) {
    return a ? c.replace("{x}", a[0].toFixed(d)).replace("{y}", a[1].toFixed(d)) : "";
  }
  function fc(a, c) {
    for (var d = !0,
        e = a.length - 1; 0 <= e; --e)
      if (a[e] != c[e]) {
        d = !1;
        break;
      }
    return d;
  }
  function gc(a, c) {
    var d = Math.cos(c),
        e = Math.sin(c),
        f = a[1] * d + a[0] * e;
    a[0] = a[0] * d - a[1] * e;
    a[1] = f;
    return a;
  }
  function hc(a, c) {
    var d = a[0] - c[0],
        e = a[1] - c[1];
    return d * d + e * e;
  }
  function ic(a, c) {
    return hc(a, cc(a, c));
  }
  function jc(a, c) {
    return ec(a, "{x}, {y}", c);
  }
  ;
  function kc(a) {
    this.length = a.length || a;
    for (var c = 0; c < this.length; c++)
      this[c] = a[c] || 0;
  }
  kc.prototype.b = 4;
  kc.prototype.set = function(a, c) {
    c = c || 0;
    for (var d = 0; d < a.length && c + d < this.length; d++)
      this[c + d] = a[d];
  };
  kc.prototype.toString = Array.prototype.join;
  "undefined" == typeof Float32Array && (kc.BYTES_PER_ELEMENT = 4, kc.prototype.BYTES_PER_ELEMENT = kc.prototype.b, kc.prototype.set = kc.prototype.set, kc.prototype.toString = kc.prototype.toString, u("Float32Array", kc, void 0));
  function lc(a) {
    this.length = a.length || a;
    for (var c = 0; c < this.length; c++)
      this[c] = a[c] || 0;
  }
  lc.prototype.b = 8;
  lc.prototype.set = function(a, c) {
    c = c || 0;
    for (var d = 0; d < a.length && c + d < this.length; d++)
      this[c + d] = a[d];
  };
  lc.prototype.toString = Array.prototype.join;
  if ("undefined" == typeof Float64Array) {
    try {
      lc.BYTES_PER_ELEMENT = 8;
    } catch (a) {}
    lc.prototype.BYTES_PER_ELEMENT = lc.prototype.b;
    lc.prototype.set = lc.prototype.set;
    lc.prototype.toString = lc.prototype.toString;
    u("Float64Array", lc, void 0);
  }
  ;
  function mc(a, c, d, e, f) {
    a[0] = c;
    a[1] = d;
    a[2] = e;
    a[3] = f;
  }
  ;
  function nc() {
    var a = Array(16);
    oc(a, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    return a;
  }
  function pc() {
    var a = Array(16);
    oc(a, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    return a;
  }
  function oc(a, c, d, e, f, g, h, k, m, n, p, q, r, t, v, w, z) {
    a[0] = c;
    a[1] = d;
    a[2] = e;
    a[3] = f;
    a[4] = g;
    a[5] = h;
    a[6] = k;
    a[7] = m;
    a[8] = n;
    a[9] = p;
    a[10] = q;
    a[11] = r;
    a[12] = t;
    a[13] = v;
    a[14] = w;
    a[15] = z;
  }
  function qc(a, c) {
    a[0] = c[0];
    a[1] = c[1];
    a[2] = c[2];
    a[3] = c[3];
    a[4] = c[4];
    a[5] = c[5];
    a[6] = c[6];
    a[7] = c[7];
    a[8] = c[8];
    a[9] = c[9];
    a[10] = c[10];
    a[11] = c[11];
    a[12] = c[12];
    a[13] = c[13];
    a[14] = c[14];
    a[15] = c[15];
  }
  function rc(a) {
    a[0] = 1;
    a[1] = 0;
    a[2] = 0;
    a[3] = 0;
    a[4] = 0;
    a[5] = 1;
    a[6] = 0;
    a[7] = 0;
    a[8] = 0;
    a[9] = 0;
    a[10] = 1;
    a[11] = 0;
    a[12] = 0;
    a[13] = 0;
    a[14] = 0;
    a[15] = 1;
  }
  function sc(a, c, d) {
    var e = a[0],
        f = a[1],
        g = a[2],
        h = a[3],
        k = a[4],
        m = a[5],
        n = a[6],
        p = a[7],
        q = a[8],
        r = a[9],
        t = a[10],
        v = a[11],
        w = a[12],
        z = a[13],
        C = a[14];
    a = a[15];
    var A = c[0],
        B = c[1],
        L = c[2],
        J = c[3],
        M = c[4],
        P = c[5],
        Aa = c[6],
        I = c[7],
        ca = c[8],
        Da = c[9],
        Ia = c[10],
        ab = c[11],
        Pa = c[12],
        Ec = c[13],
        Uc = c[14];
    c = c[15];
    d[0] = e * A + k * B + q * L + w * J;
    d[1] = f * A + m * B + r * L + z * J;
    d[2] = g * A + n * B + t * L + C * J;
    d[3] = h * A + p * B + v * L + a * J;
    d[4] = e * M + k * P + q * Aa + w * I;
    d[5] = f * M + m * P + r * Aa + z * I;
    d[6] = g * M + n * P + t * Aa + C * I;
    d[7] = h * M + p * P + v * Aa + a * I;
    d[8] = e * ca + k * Da + q * Ia + w * ab;
    d[9] = f * ca + m * Da + r * Ia + z * ab;
    d[10] = g * ca + n * Da + t * Ia + C * ab;
    d[11] = h * ca + p * Da + v * Ia + a * ab;
    d[12] = e * Pa + k * Ec + q * Uc + w * c;
    d[13] = f * Pa + m * Ec + r * Uc + z * c;
    d[14] = g * Pa + n * Ec + t * Uc + C * c;
    d[15] = h * Pa + p * Ec + v * Uc + a * c;
  }
  function tc(a, c) {
    var d = a[0],
        e = a[1],
        f = a[2],
        g = a[3],
        h = a[4],
        k = a[5],
        m = a[6],
        n = a[7],
        p = a[8],
        q = a[9],
        r = a[10],
        t = a[11],
        v = a[12],
        w = a[13],
        z = a[14],
        C = a[15],
        A = d * k - e * h,
        B = d * m - f * h,
        L = d * n - g * h,
        J = e * m - f * k,
        M = e * n - g * k,
        P = f * n - g * m,
        Aa = p * w - q * v,
        I = p * z - r * v,
        ca = p * C - t * v,
        Da = q * z - r * w,
        Ia = q * C - t * w,
        ab = r * C - t * z,
        Pa = A * ab - B * Ia + L * Da + J * ca - M * I + P * Aa;
    0 != Pa && (Pa = 1 / Pa, c[0] = (k * ab - m * Ia + n * Da) * Pa, c[1] = (-e * ab + f * Ia - g * Da) * Pa, c[2] = (w * P - z * M + C * J) * Pa, c[3] = (-q * P + r * M - t * J) * Pa, c[4] = (-h * ab + m * ca - n * I) * Pa, c[5] = (d * ab - f * ca + g * I) * Pa, c[6] = (-v * P + z * L - C * B) * Pa, c[7] = (p * P - r * L + t * B) * Pa, c[8] = (h * Ia - k * ca + n * Aa) * Pa, c[9] = (-d * Ia + e * ca - g * Aa) * Pa, c[10] = (v * M - w * L + C * A) * Pa, c[11] = (-p * M + q * L - t * A) * Pa, c[12] = (-h * Da + k * I - m * Aa) * Pa, c[13] = (d * Da - e * I + f * Aa) * Pa, c[14] = (-v * J + w * B - z * A) * Pa, c[15] = (p * J - q * B + r * A) * Pa);
  }
  function uc(a, c, d) {
    var e = a[1] * c + a[5] * d + 0 * a[9] + a[13],
        f = a[2] * c + a[6] * d + 0 * a[10] + a[14],
        g = a[3] * c + a[7] * d + 0 * a[11] + a[15];
    a[12] = a[0] * c + a[4] * d + 0 * a[8] + a[12];
    a[13] = e;
    a[14] = f;
    a[15] = g;
  }
  function vc(a, c, d) {
    oc(a, a[0] * c, a[1] * c, a[2] * c, a[3] * c, a[4] * d, a[5] * d, a[6] * d, a[7] * d, 1 * a[8], 1 * a[9], 1 * a[10], 1 * a[11], a[12], a[13], a[14], a[15]);
  }
  function wc(a, c) {
    var d = a[0],
        e = a[1],
        f = a[2],
        g = a[3],
        h = a[4],
        k = a[5],
        m = a[6],
        n = a[7],
        p = Math.cos(c),
        q = Math.sin(c);
    a[0] = d * p + h * q;
    a[1] = e * p + k * q;
    a[2] = f * p + m * q;
    a[3] = g * p + n * q;
    a[4] = d * -q + h * p;
    a[5] = e * -q + k * p;
    a[6] = f * -q + m * p;
    a[7] = g * -q + n * p;
  }
  new Float64Array(3);
  new Float64Array(3);
  new Float64Array(4);
  new Float64Array(4);
  new Float64Array(4);
  new Float64Array(16);
  function xc(a) {
    for (var c = yc(),
        d = 0,
        e = a.length; d < e; ++d)
      zc(c, a[d]);
    return c;
  }
  function Ac(a, c, d) {
    return d ? (d[0] = a[0] - c, d[1] = a[1] - c, d[2] = a[2] + c, d[3] = a[3] + c, d) : [a[0] - c, a[1] - c, a[2] + c, a[3] + c];
  }
  function Bc(a, c) {
    return c ? (c[0] = a[0], c[1] = a[1], c[2] = a[2], c[3] = a[3], c) : a.slice();
  }
  function Cc(a, c, d) {
    c = c < a[0] ? a[0] - c : a[2] < c ? c - a[2] : 0;
    a = d < a[1] ? a[1] - d : a[3] < d ? d - a[3] : 0;
    return c * c + a * a;
  }
  function Dc(a, c) {
    return Fc(a, c[0], c[1]);
  }
  function Gc(a, c) {
    return a[0] <= c[0] && c[2] <= a[2] && a[1] <= c[1] && c[3] <= a[3];
  }
  function Fc(a, c, d) {
    return a[0] <= c && c <= a[2] && a[1] <= d && d <= a[3];
  }
  function Hc(a, c) {
    var d = a[1],
        e = a[2],
        f = a[3],
        g = c[0],
        h = c[1],
        k = 0;
    g < a[0] ? k = k | 16 : g > e && (k = k | 4);
    h < d ? k |= 8 : h > f && (k |= 2);
    0 === k && (k = 1);
    return k;
  }
  function yc() {
    return [Infinity, Infinity, -Infinity, -Infinity];
  }
  function Ic(a, c, d, e, f) {
    return f ? (f[0] = a, f[1] = c, f[2] = d, f[3] = e, f) : [a, c, d, e];
  }
  function Jc(a, c) {
    var d = a[0],
        e = a[1];
    return Ic(d, e, d, e, c);
  }
  function Kc(a, c, d, e, f) {
    f = Ic(Infinity, Infinity, -Infinity, -Infinity, f);
    return Lc(f, a, c, d, e);
  }
  function Mc(a, c) {
    return a[0] == c[0] && a[2] == c[2] && a[1] == c[1] && a[3] == c[3];
  }
  function Nc(a, c) {
    c[0] < a[0] && (a[0] = c[0]);
    c[2] > a[2] && (a[2] = c[2]);
    c[1] < a[1] && (a[1] = c[1]);
    c[3] > a[3] && (a[3] = c[3]);
    return a;
  }
  function zc(a, c) {
    c[0] < a[0] && (a[0] = c[0]);
    c[0] > a[2] && (a[2] = c[0]);
    c[1] < a[1] && (a[1] = c[1]);
    c[1] > a[3] && (a[3] = c[1]);
  }
  function Lc(a, c, d, e, f) {
    for (; d < e; d += f) {
      var g = a,
          h = c[d],
          k = c[d + 1];
      g[0] = Math.min(g[0], h);
      g[1] = Math.min(g[1], k);
      g[2] = Math.max(g[2], h);
      g[3] = Math.max(g[3], k);
    }
    return a;
  }
  function Oc(a, c, d) {
    var e;
    return (e = c.call(d, Pc(a))) || (e = c.call(d, Qc(a))) || (e = c.call(d, Rc(a))) ? e : (e = c.call(d, Sc(a))) ? e : !1;
  }
  function Tc(a) {
    var c = 0;
    Vc(a) || (c = Wc(a) * Xc(a));
    return c;
  }
  function Pc(a) {
    return [a[0], a[1]];
  }
  function Qc(a) {
    return [a[2], a[1]];
  }
  function Yc(a) {
    return [(a[0] + a[2]) / 2, (a[1] + a[3]) / 2];
  }
  function Zc(a, c, d, e, f) {
    var g = c * e[0] / 2;
    e = c * e[1] / 2;
    c = Math.cos(d);
    var h = Math.sin(d);
    d = g * c;
    g *= h;
    c *= e;
    var k = e * h,
        m = a[0],
        n = a[1];
    a = m - d + k;
    e = m - d - k;
    h = m + d - k;
    d = m + d + k;
    var k = n - g - c,
        m = n - g + c,
        p = n + g + c,
        g = n + g - c;
    return Ic(Math.min(a, e, h, d), Math.min(k, m, p, g), Math.max(a, e, h, d), Math.max(k, m, p, g), f);
  }
  function Xc(a) {
    return a[3] - a[1];
  }
  function $c(a, c, d) {
    d = d ? d : yc();
    ad(a, c) && (d[0] = a[0] > c[0] ? a[0] : c[0], d[1] = a[1] > c[1] ? a[1] : c[1], d[2] = a[2] < c[2] ? a[2] : c[2], d[3] = a[3] < c[3] ? a[3] : c[3]);
    return d;
  }
  function Sc(a) {
    return [a[0], a[3]];
  }
  function Rc(a) {
    return [a[2], a[3]];
  }
  function Wc(a) {
    return a[2] - a[0];
  }
  function ad(a, c) {
    return a[0] <= c[2] && a[2] >= c[0] && a[1] <= c[3] && a[3] >= c[1];
  }
  function Vc(a) {
    return a[2] < a[0] || a[3] < a[1];
  }
  function bd(a, c) {
    var d = (a[2] - a[0]) / 2 * (c - 1),
        e = (a[3] - a[1]) / 2 * (c - 1);
    a[0] -= d;
    a[2] += d;
    a[1] -= e;
    a[3] += e;
  }
  function cd(a, c, d) {
    a = [a[0], a[1], a[0], a[3], a[2], a[1], a[2], a[3]];
    c(a, a, 2);
    var e = [a[0], a[2], a[4], a[6]],
        f = [a[1], a[3], a[5], a[7]];
    c = Math.min.apply(null, e);
    a = Math.min.apply(null, f);
    e = Math.max.apply(null, e);
    f = Math.max.apply(null, f);
    return Ic(c, a, e, f, d);
  }
  ;
  function dd(a) {
    return function() {
      return a;
    };
  }
  var ed = dd(!1),
      fd = dd(!0),
      gd = dd(null);
  function hd(a) {
    return a;
  }
  function id(a) {
    var c = arguments,
        d = c.length;
    return function() {
      for (var a,
          f = 0; f < d; f++)
        a = c[f].apply(this, arguments);
      return a;
    };
  }
  function jd(a) {
    var c = arguments,
        d = c.length;
    return function() {
      for (var a = 0; a < d; a++)
        if (!c[a].apply(this, arguments))
          return !1;
      return !0;
    };
  }
  ;
  function kd(a) {
    this.radius = a;
  }
  kd.prototype.a = function(a) {
    for (var c = 0,
        d = a.length,
        e = a[d - 1][0],
        f = a[d - 1][1],
        g = 0; g < d; g++)
      var h = a[g][0],
          k = a[g][1],
          c = c + Ra(h - e) * (2 + Math.sin(Ra(f)) + Math.sin(Ra(k))),
          e = h,
          f = k;
    return c * this.radius * this.radius / 2;
  };
  kd.prototype.b = function(a, c) {
    var d = Ra(a[1]),
        e = Ra(c[1]),
        f = (e - d) / 2,
        g = Ra(c[0] - a[0]) / 2,
        d = Math.sin(f) * Math.sin(f) + Math.sin(g) * Math.sin(g) * Math.cos(d) * Math.cos(e);
    return 2 * this.radius * Math.atan2(Math.sqrt(d), Math.sqrt(1 - d));
  };
  kd.prototype.offset = function(a, c, d) {
    var e = Ra(a[1]);
    c /= this.radius;
    var f = Math.asin(Math.sin(e) * Math.cos(c) + Math.cos(e) * Math.sin(c) * Math.cos(d));
    return [180 * (Ra(a[0]) + Math.atan2(Math.sin(d) * Math.sin(c) * Math.cos(e), Math.cos(c) - Math.sin(e) * Math.sin(f))) / Math.PI, 180 * f / Math.PI];
  };
  var ld = new kd(6370997);
  var md = {};
  md.degrees = 2 * Math.PI * ld.radius / 360;
  md.ft = .3048;
  md.m = 1;
  md["us-ft"] = 1200 / 3937;
  function nd(a) {
    this.lb = a.code;
    this.a = a.units;
    this.c = void 0 !== a.extent ? a.extent : null;
    this.i = void 0 !== a.worldExtent ? a.worldExtent : null;
    this.f = void 0 !== a.axisOrientation ? a.axisOrientation : "enu";
    this.g = void 0 !== a.global ? a.global : !1;
    this.b = !(!this.g || !this.c);
    this.l = void 0 !== a.getPointResolution ? a.getPointResolution : this.Xj;
    this.j = null;
    this.o = a.metersPerUnit;
    var c = od,
        d = a.code,
        e = pd || aa.proj4;
    if ("function" == typeof e && void 0 === c[d]) {
      var f = e.defs(d);
      if (void 0 !== f) {
        void 0 !== f.axis && void 0 === a.axisOrientation && (this.f = f.axis);
        void 0 === a.metersPerUnit && (this.o = f.to_meter);
        void 0 === a.units && (this.a = f.units);
        for (var g in c)
          c = e.defs(g), void 0 !== c && (a = qd(g), c === f ? rd([a, this]) : (c = e(g, d), sd(a, this, c.forward, c.inverse)));
      }
    }
  }
  l = nd.prototype;
  l.yj = function() {
    return this.lb;
  };
  l.G = function() {
    return this.c;
  };
  l.mm = function() {
    return this.a;
  };
  l.$b = function() {
    return this.o || md[this.a];
  };
  l.hk = function() {
    return this.i;
  };
  function td(a) {
    return a.f;
  }
  l.Tk = function() {
    return this.g;
  };
  l.uo = function(a) {
    this.g = a;
    this.b = !(!a || !this.c);
  };
  l.nm = function(a) {
    this.c = a;
    this.b = !(!this.g || !a);
  };
  l.Co = function(a) {
    this.i = a;
  };
  l.to = function(a) {
    this.l = a;
  };
  l.Xj = function(a, c) {
    if ("degrees" == this.a)
      return a;
    var d = ud(this, qd("EPSG:4326")),
        e = [c[0] - a / 2, c[1], c[0] + a / 2, c[1], c[0], c[1] - a / 2, c[0], c[1] + a / 2],
        e = d(e, e, 2),
        d = ld.b(e.slice(0, 2), e.slice(2, 4)),
        e = ld.b(e.slice(4, 6), e.slice(6, 8)),
        e = (d + e) / 2,
        d = this.$b();
    void 0 !== d && (e /= d);
    return e;
  };
  l.getPointResolution = function(a, c) {
    return this.l(a, c);
  };
  var od = {},
      vd = {},
      pd = null;
  function rd(a) {
    wd(a);
    a.forEach(function(c) {
      a.forEach(function(a) {
        c !== a && xd(c, a, yd);
      });
    });
  }
  function zd() {
    var a = Ad,
        c = Bd,
        d = Cd;
    Dd.forEach(function(e) {
      a.forEach(function(a) {
        xd(e, a, c);
        xd(a, e, d);
      });
    });
  }
  function Ed(a) {
    od[a.lb] = a;
    xd(a, a, yd);
  }
  function wd(a) {
    var c = [];
    a.forEach(function(a) {
      c.push(Ed(a));
    });
  }
  function Fd(a) {
    return a ? "string" === typeof a ? qd(a) : a : qd("EPSG:3857");
  }
  function xd(a, c, d) {
    a = a.lb;
    c = c.lb;
    a in vd || (vd[a] = {});
    vd[a][c] = d;
  }
  function sd(a, c, d, e) {
    a = qd(a);
    c = qd(c);
    xd(a, c, Gd(d));
    xd(c, a, Gd(e));
  }
  function Gd(a) {
    return function(c, d, e) {
      var f = c.length;
      e = void 0 !== e ? e : 2;
      d = void 0 !== d ? d : Array(f);
      var g,
          h;
      for (h = 0; h < f; h += e)
        for (g = a([c[h], c[h + 1]]), d[h] = g[0], d[h + 1] = g[1], g = e - 1; 2 <= g; --g)
          d[h + g] = c[h + g];
      return d;
    };
  }
  function qd(a) {
    var c;
    if (a instanceof nd)
      c = a;
    else if ("string" === typeof a) {
      c = od[a];
      var d = pd || aa.proj4;
      void 0 === c && "function" == typeof d && void 0 !== d.defs(a) && (c = new nd({code: a}), Ed(c));
    } else
      c = null;
    return c;
  }
  function Hd(a, c) {
    if (a === c)
      return !0;
    var d = a.a === c.a;
    return a.lb === c.lb ? d : ud(a, c) === yd && d;
  }
  function Id(a, c) {
    var d = qd(a),
        e = qd(c);
    return ud(d, e);
  }
  function ud(a, c) {
    var d = a.lb,
        e = c.lb,
        f;
    d in vd && e in vd[d] && (f = vd[d][e]);
    void 0 === f && (f = Jd);
    return f;
  }
  function Jd(a, c) {
    if (void 0 !== c && a !== c) {
      for (var d = 0,
          e = a.length; d < e; ++d)
        c[d] = a[d];
      a = c;
    }
    return a;
  }
  function yd(a, c) {
    var d;
    if (void 0 !== c) {
      d = 0;
      for (var e = a.length; d < e; ++d)
        c[d] = a[d];
      d = c;
    } else
      d = a.slice();
    return d;
  }
  function Kd(a, c, d) {
    return Id(c, d)(a, void 0, a.length);
  }
  function Ld(a, c, d) {
    c = Id(c, d);
    return cd(a, c);
  }
  ;
  function Md() {
    Mb.call(this);
    this.A = yc();
    this.B = -1;
    this.j = {};
    this.s = this.l = 0;
  }
  y(Md, Mb);
  l = Md.prototype;
  l.vb = function(a, c) {
    var d = c ? c : [NaN, NaN];
    this.sb(a[0], a[1], d, Infinity);
    return d;
  };
  l.ig = function(a) {
    return this.xc(a[0], a[1]);
  };
  l.xc = ed;
  l.G = function(a) {
    this.B != this.g && (this.A = this.Pd(this.A), this.B = this.g);
    var c = this.A;
    a ? (a[0] = c[0], a[1] = c[1], a[2] = c[2], a[3] = c[3]) : a = c;
    return a;
  };
  l.Bb = function(a) {
    return this.sd(a * a);
  };
  l.fb = function(a, c) {
    this.Hc(Id(a, c));
    return this;
  };
  function Nd(a, c, d, e, f, g) {
    var h = f[0],
        k = f[1],
        m = f[4],
        n = f[5],
        p = f[12];
    f = f[13];
    for (var q = g ? g : [],
        r = 0; c < d; c += e) {
      var t = a[c],
          v = a[c + 1];
      q[r++] = h * t + m * v + p;
      q[r++] = k * t + n * v + f;
    }
    g && q.length != r && (q.length = r);
    return q;
  }
  ;
  function Od() {
    Md.call(this);
    this.f = "XY";
    this.a = 2;
    this.v = null;
  }
  y(Od, Md);
  function Pd(a) {
    if ("XY" == a)
      return 2;
    if ("XYZ" == a || "XYM" == a)
      return 3;
    if ("XYZM" == a)
      return 4;
  }
  l = Od.prototype;
  l.xc = ed;
  l.Pd = function(a) {
    return Kc(this.v, 0, this.v.length, this.a, a);
  };
  l.Kb = function() {
    return this.v.slice(0, this.a);
  };
  l.ga = function() {
    return this.v;
  };
  l.Lb = function() {
    return this.v.slice(this.v.length - this.a);
  };
  l.Mb = function() {
    return this.f;
  };
  l.sd = function(a) {
    this.s != this.g && (nb(this.j), this.l = 0, this.s = this.g);
    if (0 > a || 0 !== this.l && a <= this.l)
      return this;
    var c = a.toString();
    if (this.j.hasOwnProperty(c))
      return this.j[c];
    var d = this.Mc(a);
    if (d.ga().length < this.v.length)
      return this.j[c] = d;
    this.l = a;
    return this;
  };
  l.Mc = function() {
    return this;
  };
  l.qa = function() {
    return this.a;
  };
  function Qd(a, c, d) {
    a.a = Pd(c);
    a.f = c;
    a.v = d;
  }
  function Rd(a, c, d, e) {
    if (c)
      d = Pd(c);
    else {
      for (c = 0; c < e; ++c) {
        if (0 === d.length) {
          a.f = "XY";
          a.a = 2;
          return;
        }
        d = d[0];
      }
      d = d.length;
      c = 2 == d ? "XY" : 3 == d ? "XYZ" : 4 == d ? "XYZM" : void 0;
    }
    a.f = c;
    a.a = d;
  }
  l.Hc = function(a) {
    this.v && (a(this.v, this.v, this.a), this.u());
  };
  l.Rc = function(a, c) {
    var d = this.ga();
    if (d) {
      var e = d.length,
          f = this.qa(),
          g = d ? d : [],
          h = 0,
          k,
          m;
      for (k = 0; k < e; k += f)
        for (g[h++] = d[k] + a, g[h++] = d[k + 1] + c, m = k + 2; m < k + f; ++m)
          g[h++] = d[m];
      d && g.length != h && (g.length = h);
      this.u();
    }
  };
  function Sd(a, c, d, e) {
    for (var f = 0,
        g = a[d - e],
        h = a[d - e + 1]; c < d; c += e)
      var k = a[c],
          m = a[c + 1],
          f = f + (h * k - g * m),
          g = k,
          h = m;
    return f / 2;
  }
  function Td(a, c, d, e) {
    var f = 0,
        g,
        h;
    g = 0;
    for (h = d.length; g < h; ++g) {
      var k = d[g],
          f = f + Sd(a, c, k, e);
      c = k;
    }
    return f;
  }
  ;
  function Ud(a, c, d, e, f, g, h) {
    var k = a[c],
        m = a[c + 1],
        n = a[d] - k,
        p = a[d + 1] - m;
    if (0 !== n || 0 !== p)
      if (g = ((f - k) * n + (g - m) * p) / (n * n + p * p), 1 < g)
        c = d;
      else if (0 < g) {
        for (f = 0; f < e; ++f)
          h[f] = ac(a[c + f], a[d + f], g);
        h.length = e;
        return;
      }
    for (f = 0; f < e; ++f)
      h[f] = a[c + f];
    h.length = e;
  }
  function Vd(a, c, d, e, f) {
    var g = a[c],
        h = a[c + 1];
    for (c += e; c < d; c += e) {
      var k = a[c],
          m = a[c + 1],
          g = Qa(g, h, k, m);
      g > f && (f = g);
      g = k;
      h = m;
    }
    return f;
  }
  function Wd(a, c, d, e, f) {
    var g,
        h;
    g = 0;
    for (h = d.length; g < h; ++g) {
      var k = d[g];
      f = Vd(a, c, k, e, f);
      c = k;
    }
    return f;
  }
  function Xd(a, c, d, e, f, g, h, k, m, n, p) {
    if (c == d)
      return n;
    var q;
    if (0 === f) {
      q = Qa(h, k, a[c], a[c + 1]);
      if (q < n) {
        for (p = 0; p < e; ++p)
          m[p] = a[c + p];
        m.length = e;
        return q;
      }
      return n;
    }
    for (var r = p ? p : [NaN, NaN],
        t = c + e; t < d; )
      if (Ud(a, t - e, t, e, h, k, r), q = Qa(h, k, r[0], r[1]), q < n) {
        n = q;
        for (p = 0; p < e; ++p)
          m[p] = r[p];
        m.length = e;
        t += e;
      } else
        t += e * Math.max((Math.sqrt(q) - Math.sqrt(n)) / f | 0, 1);
    if (g && (Ud(a, d - e, c, e, h, k, r), q = Qa(h, k, r[0], r[1]), q < n)) {
      n = q;
      for (p = 0; p < e; ++p)
        m[p] = r[p];
      m.length = e;
    }
    return n;
  }
  function Yd(a, c, d, e, f, g, h, k, m, n, p) {
    p = p ? p : [NaN, NaN];
    var q,
        r;
    q = 0;
    for (r = d.length; q < r; ++q) {
      var t = d[q];
      n = Xd(a, c, t, e, f, g, h, k, m, n, p);
      c = t;
    }
    return n;
  }
  ;
  function Zd(a, c) {
    var d = 0,
        e,
        f;
    e = 0;
    for (f = c.length; e < f; ++e)
      a[d++] = c[e];
    return d;
  }
  function $d(a, c, d, e) {
    var f,
        g;
    f = 0;
    for (g = d.length; f < g; ++f) {
      var h = d[f],
          k;
      for (k = 0; k < e; ++k)
        a[c++] = h[k];
    }
    return c;
  }
  function ae(a, c, d, e, f) {
    f = f ? f : [];
    var g = 0,
        h,
        k;
    h = 0;
    for (k = d.length; h < k; ++h)
      c = $d(a, c, d[h], e), f[g++] = c;
    f.length = g;
    return f;
  }
  ;
  function be(a, c, d, e, f) {
    f = void 0 !== f ? f : [];
    for (var g = 0; c < d; c += e)
      f[g++] = a.slice(c, c + e);
    f.length = g;
    return f;
  }
  function ce(a, c, d, e, f) {
    f = void 0 !== f ? f : [];
    var g = 0,
        h,
        k;
    h = 0;
    for (k = d.length; h < k; ++h) {
      var m = d[h];
      f[g++] = be(a, c, m, e, f[g]);
      c = m;
    }
    f.length = g;
    return f;
  }
  ;
  function de(a, c, d, e, f, g, h) {
    var k = (d - c) / e;
    if (3 > k) {
      for (; c < d; c += e)
        g[h++] = a[c], g[h++] = a[c + 1];
      return h;
    }
    var m = Array(k);
    m[0] = 1;
    m[k - 1] = 1;
    d = [c, d - e];
    for (var n = 0,
        p; 0 < d.length; ) {
      var q = d.pop(),
          r = d.pop(),
          t = 0,
          v = a[r],
          w = a[r + 1],
          z = a[q],
          C = a[q + 1];
      for (p = r + e; p < q; p += e) {
        var A = Oa(a[p], a[p + 1], v, w, z, C);
        A > t && (n = p, t = A);
      }
      t > f && (m[(n - c) / e] = 1, r + e < n && d.push(r, n), n + e < q && d.push(n, q));
    }
    for (p = 0; p < k; ++p)
      m[p] && (g[h++] = a[c + p * e], g[h++] = a[c + p * e + 1]);
    return h;
  }
  function ee(a, c, d, e, f, g, h, k) {
    var m,
        n;
    m = 0;
    for (n = d.length; m < n; ++m) {
      var p = d[m];
      a: {
        var q = a,
            r = p,
            t = e,
            v = f,
            w = g;
        if (c != r) {
          var z = v * Math.round(q[c] / v),
              C = v * Math.round(q[c + 1] / v);
          c += t;
          w[h++] = z;
          w[h++] = C;
          var A = void 0,
              B = void 0;
          do
            if (A = v * Math.round(q[c] / v), B = v * Math.round(q[c + 1] / v), c += t, c == r) {
              w[h++] = A;
              w[h++] = B;
              break a;
            }
 while (A == z && B == C);
          for (; c < r; ) {
            var L,
                J;
            L = v * Math.round(q[c] / v);
            J = v * Math.round(q[c + 1] / v);
            c += t;
            if (L != A || J != B) {
              var M = A - z,
                  P = B - C,
                  Aa = L - z,
                  I = J - C;
              M * I == P * Aa && (0 > M && Aa < M || M == Aa || 0 < M && Aa > M) && (0 > P && I < P || P == I || 0 < P && I > P) || (w[h++] = A, w[h++] = B, z = A, C = B);
              A = L;
              B = J;
            }
          }
          w[h++] = A;
          w[h++] = B;
        }
      }
      k.push(h);
      c = p;
    }
    return h;
  }
  ;
  function fe(a, c) {
    Od.call(this);
    this.c = this.o = -1;
    this.la(a, c);
  }
  y(fe, Od);
  l = fe.prototype;
  l.clone = function() {
    var a = new fe(null);
    ge(a, this.f, this.v.slice());
    return a;
  };
  l.sb = function(a, c, d, e) {
    if (e < Cc(this.G(), a, c))
      return e;
    this.c != this.g && (this.o = Math.sqrt(Vd(this.v, 0, this.v.length, this.a, 0)), this.c = this.g);
    return Xd(this.v, 0, this.v.length, this.a, this.o, !0, a, c, d, e);
  };
  l.Ol = function() {
    return Sd(this.v, 0, this.v.length, this.a);
  };
  l.Y = function() {
    return be(this.v, 0, this.v.length, this.a);
  };
  l.Mc = function(a) {
    var c = [];
    c.length = de(this.v, 0, this.v.length, this.a, a, c, 0);
    a = new fe(null);
    ge(a, "XY", c);
    return a;
  };
  l.W = function() {
    return "LinearRing";
  };
  l.la = function(a, c) {
    a ? (Rd(this, c, a, 1), this.v || (this.v = []), this.v.length = $d(this.v, 0, a, this.a), this.u()) : ge(this, "XY", null);
  };
  function ge(a, c, d) {
    Qd(a, c, d);
    a.u();
  }
  ;
  function E(a, c) {
    Od.call(this);
    this.la(a, c);
  }
  y(E, Od);
  l = E.prototype;
  l.clone = function() {
    var a = new E(null);
    a.ba(this.f, this.v.slice());
    return a;
  };
  l.sb = function(a, c, d, e) {
    var f = this.v;
    a = Qa(a, c, f[0], f[1]);
    if (a < e) {
      e = this.a;
      for (c = 0; c < e; ++c)
        d[c] = f[c];
      d.length = e;
      return a;
    }
    return e;
  };
  l.Y = function() {
    return this.v ? this.v.slice() : [];
  };
  l.Pd = function(a) {
    return Jc(this.v, a);
  };
  l.W = function() {
    return "Point";
  };
  l.Ia = function(a) {
    return Fc(a, this.v[0], this.v[1]);
  };
  l.la = function(a, c) {
    a ? (Rd(this, c, a, 0), this.v || (this.v = []), this.v.length = Zd(this.v, a), this.u()) : this.ba("XY", null);
  };
  l.ba = function(a, c) {
    Qd(this, a, c);
    this.u();
  };
  function he(a, c, d, e, f) {
    return !Oc(f, function(f) {
      return !ie(a, c, d, e, f[0], f[1]);
    });
  }
  function ie(a, c, d, e, f, g) {
    for (var h = !1,
        k = a[d - e],
        m = a[d - e + 1]; c < d; c += e) {
      var n = a[c],
          p = a[c + 1];
      m > g != p > g && f < (n - k) * (g - m) / (p - m) + k && (h = !h);
      k = n;
      m = p;
    }
    return h;
  }
  function je(a, c, d, e, f, g) {
    if (0 === d.length || !ie(a, c, d[0], e, f, g))
      return !1;
    var h;
    c = 1;
    for (h = d.length; c < h; ++c)
      if (ie(a, d[c - 1], d[c], e, f, g))
        return !1;
    return !0;
  }
  ;
  function ke(a, c, d, e, f, g, h) {
    var k,
        m,
        n,
        p,
        q,
        r = f[g + 1],
        t = [],
        v = d[0];
    n = a[v - e];
    q = a[v - e + 1];
    for (k = c; k < v; k += e) {
      p = a[k];
      m = a[k + 1];
      if (r <= q && m <= r || q <= r && r <= m)
        n = (r - q) / (m - q) * (p - n) + n, t.push(n);
      n = p;
      q = m;
    }
    v = NaN;
    q = -Infinity;
    t.sort(Ua);
    n = t[0];
    k = 1;
    for (m = t.length; k < m; ++k) {
      p = t[k];
      var w = Math.abs(p - n);
      w > q && (n = (n + p) / 2, je(a, c, d, e, n, r) && (v = n, q = w));
      n = p;
    }
    isNaN(v) && (v = f[g]);
    return h ? (h.push(v, r), h) : [v, r];
  }
  ;
  function le(a, c, d, e, f, g) {
    for (var h = [a[c], a[c + 1]],
        k = [],
        m; c + e < d; c += e) {
      k[0] = a[c + e];
      k[1] = a[c + e + 1];
      if (m = f.call(g, h, k))
        return m;
      h[0] = k[0];
      h[1] = k[1];
    }
    return !1;
  }
  ;
  function me(a, c, d, e, f) {
    var g = Lc(yc(), a, c, d, e);
    return ad(f, g) ? Gc(f, g) || g[0] >= f[0] && g[2] <= f[2] || g[1] >= f[1] && g[3] <= f[3] ? !0 : le(a, c, d, e, function(a, c) {
      var d = !1,
          e = Hc(f, a),
          g = Hc(f, c);
      if (1 === e || 1 === g)
        d = !0;
      else {
        var q = f[0],
            r = f[1],
            t = f[2],
            v = f[3],
            w = c[0],
            z = c[1],
            C = (z - a[1]) / (w - a[0]);
        g & 2 && !(e & 2) && (d = w - (z - v) / C, d = d >= q && d <= t);
        d || !(g & 4) || e & 4 || (d = z - (w - t) * C, d = d >= r && d <= v);
        d || !(g & 8) || e & 8 || (d = w - (z - r) / C, d = d >= q && d <= t);
        d || !(g & 16) || e & 16 || (d = z - (w - q) * C, d = d >= r && d <= v);
      }
      return d;
    }) : !1;
  }
  function ne(a, c, d, e, f) {
    var g = d[0];
    if (!(me(a, c, g, e, f) || ie(a, c, g, e, f[0], f[1]) || ie(a, c, g, e, f[0], f[3]) || ie(a, c, g, e, f[2], f[1]) || ie(a, c, g, e, f[2], f[3])))
      return !1;
    if (1 === d.length)
      return !0;
    c = 1;
    for (g = d.length; c < g; ++c)
      if (he(a, d[c - 1], d[c], e, f))
        return !1;
    return !0;
  }
  ;
  function oe(a, c, d, e) {
    for (var f = 0,
        g = a[d - e],
        h = a[d - e + 1]; c < d; c += e)
      var k = a[c],
          m = a[c + 1],
          f = f + (k - g) * (m + h),
          g = k,
          h = m;
    return 0 < f;
  }
  function pe(a, c, d, e) {
    var f = 0;
    e = void 0 !== e ? e : !1;
    var g,
        h;
    g = 0;
    for (h = c.length; g < h; ++g) {
      var k = c[g],
          f = oe(a, f, k, d);
      if (0 === g) {
        if (e && f || !e && !f)
          return !1;
      } else if (e && !f || !e && f)
        return !1;
      f = k;
    }
    return !0;
  }
  function qe(a, c, d, e, f) {
    f = void 0 !== f ? f : !1;
    var g,
        h;
    g = 0;
    for (h = d.length; g < h; ++g) {
      var k = d[g],
          m = oe(a, c, k, e);
      if (0 === g ? f && m || !f && !m : f && !m || !f && m)
        for (var m = a,
            n = k,
            p = e; c < n - p; ) {
          var q;
          for (q = 0; q < p; ++q) {
            var r = m[c + q];
            m[c + q] = m[n - p + q];
            m[n - p + q] = r;
          }
          c += p;
          n -= p;
        }
      c = k;
    }
    return c;
  }
  function re(a, c, d, e) {
    var f = 0,
        g,
        h;
    g = 0;
    for (h = c.length; g < h; ++g)
      f = qe(a, f, c[g], d, e);
    return f;
  }
  ;
  function F(a, c) {
    Od.call(this);
    this.c = [];
    this.J = -1;
    this.D = null;
    this.U = this.H = this.S = -1;
    this.o = null;
    this.la(a, c);
  }
  y(F, Od);
  l = F.prototype;
  l.fj = function(a) {
    this.v ? Ya(this.v, a.ga()) : this.v = a.ga().slice();
    this.c.push(this.v.length);
    this.u();
  };
  l.clone = function() {
    var a = new F(null);
    a.ba(this.f, this.v.slice(), this.c.slice());
    return a;
  };
  l.sb = function(a, c, d, e) {
    if (e < Cc(this.G(), a, c))
      return e;
    this.H != this.g && (this.S = Math.sqrt(Wd(this.v, 0, this.c, this.a, 0)), this.H = this.g);
    return Yd(this.v, 0, this.c, this.a, this.S, !0, a, c, d, e);
  };
  l.xc = function(a, c) {
    return je(this.Rb(), 0, this.c, this.a, a, c);
  };
  l.Rl = function() {
    return Td(this.Rb(), 0, this.c, this.a);
  };
  l.Y = function(a) {
    var c;
    void 0 !== a ? (c = this.Rb().slice(), qe(c, 0, this.c, this.a, a)) : c = this.v;
    return ce(c, 0, this.c, this.a);
  };
  l.Cb = function() {
    return this.c;
  };
  function se(a) {
    if (a.J != a.g) {
      var c = Yc(a.G());
      a.D = ke(a.Rb(), 0, a.c, a.a, c, 0);
      a.J = a.g;
    }
    return a.D;
  }
  l.Hj = function() {
    return new E(se(this));
  };
  l.Mj = function() {
    return this.c.length;
  };
  l.xg = function(a) {
    if (0 > a || this.c.length <= a)
      return null;
    var c = new fe(null);
    ge(c, this.f, this.v.slice(0 === a ? 0 : this.c[a - 1], this.c[a]));
    return c;
  };
  l.Vd = function() {
    var a = this.f,
        c = this.v,
        d = this.c,
        e = [],
        f = 0,
        g,
        h;
    g = 0;
    for (h = d.length; g < h; ++g) {
      var k = d[g],
          m = new fe(null);
      ge(m, a, c.slice(f, k));
      e.push(m);
      f = k;
    }
    return e;
  };
  l.Rb = function() {
    if (this.U != this.g) {
      var a = this.v;
      pe(a, this.c, this.a) ? this.o = a : (this.o = a.slice(), this.o.length = qe(this.o, 0, this.c, this.a));
      this.U = this.g;
    }
    return this.o;
  };
  l.Mc = function(a) {
    var c = [],
        d = [];
    c.length = ee(this.v, 0, this.c, this.a, Math.sqrt(a), c, 0, d);
    a = new F(null);
    a.ba("XY", c, d);
    return a;
  };
  l.W = function() {
    return "Polygon";
  };
  l.Ia = function(a) {
    return ne(this.Rb(), 0, this.c, this.a, a);
  };
  l.la = function(a, c) {
    if (a) {
      Rd(this, c, a, 2);
      this.v || (this.v = []);
      var d = ae(this.v, 0, a, this.a, this.c);
      this.v.length = 0 === d.length ? 0 : d[d.length - 1];
      this.u();
    } else
      this.ba("XY", null, this.c);
  };
  l.ba = function(a, c, d) {
    Qd(this, a, c);
    this.c = d;
    this.u();
  };
  function te(a, c, d, e) {
    var f = e ? e : 32;
    e = [];
    var g;
    for (g = 0; g < f; ++g)
      Ya(e, a.offset(c, d, 2 * Math.PI * g / f));
    e.push(e[0], e[1]);
    a = new F(null);
    a.ba("XY", e, [e.length]);
    return a;
  }
  function ue(a) {
    var c = a[0],
        d = a[1],
        e = a[2];
    a = a[3];
    c = [c, d, c, a, e, a, e, d, c, d];
    d = new F(null);
    d.ba("XY", c, [c.length]);
    return d;
  }
  function ve(a, c, d) {
    var e = c ? c : 32,
        f = a.qa();
    c = a.f;
    for (var g = new F(null, c),
        e = f * (e + 1),
        f = Array(e),
        h = 0; h < e; h++)
      f[h] = 0;
    g.ba(c, f, [f.length]);
    we(g, a.vd(), a.nf(), d);
    return g;
  }
  function we(a, c, d, e) {
    var f = a.ga(),
        g = a.f,
        h = a.qa(),
        k = a.Cb(),
        m = f.length / h - 1;
    e = e ? e : 0;
    for (var n,
        p,
        q = 0; q <= m; ++q)
      p = q * h, n = e + 2 * $b(q, m) * Math.PI / m, f[p] = c[0] + d * Math.cos(n), f[p + 1] = c[1] + d * Math.sin(n);
    a.ba(g, f, k);
  }
  ;
  function xe(a) {
    Mb.call(this);
    a = a || {};
    this.f = [0, 0];
    var c = {};
    c.center = void 0 !== a.center ? a.center : null;
    this.i = Fd(a.projection);
    var d,
        e,
        f,
        g = void 0 !== a.minZoom ? a.minZoom : 0;
    d = void 0 !== a.maxZoom ? a.maxZoom : 28;
    var h = void 0 !== a.zoomFactor ? a.zoomFactor : 2;
    if (void 0 !== a.resolutions)
      d = a.resolutions, e = d[0], f = d[d.length - 1], d = fb(d);
    else {
      e = Fd(a.projection);
      f = e.G();
      var k = (f ? Math.max(Wc(f), Xc(f)) : 360 * md.degrees / e.$b()) / 256 / Math.pow(2, 0),
          m = k / Math.pow(2, 28);
      e = a.maxResolution;
      void 0 !== e ? g = 0 : e = k / Math.pow(h, g);
      f = a.minResolution;
      void 0 === f && (f = void 0 !== a.maxZoom ? void 0 !== a.maxResolution ? e / Math.pow(h, d) : k / Math.pow(h, d) : m);
      d = g + Math.floor(Math.log(e / f) / Math.log(h));
      f = e / Math.pow(h, d - g);
      d = gb(h, e, d - g);
    }
    this.a = e;
    this.l = f;
    this.c = g;
    g = void 0 !== a.extent ? Sa(a.extent) : Ta;
    (void 0 !== a.enableRotation ? a.enableRotation : 1) ? (e = a.constrainRotation, e = void 0 === e || !0 === e ? kb() : !1 === e ? ib : ia(e) ? jb(e) : ib) : e = hb;
    this.j = new lb(g, d, e);
    void 0 !== a.resolution ? c.resolution = a.resolution : void 0 !== a.zoom && (c.resolution = this.constrainResolution(this.a, a.zoom - this.c));
    c.rotation = void 0 !== a.rotation ? a.rotation : 0;
    this.C(c);
  }
  y(xe, Mb);
  l = xe.prototype;
  l.Qd = function(a) {
    return this.j.center(a);
  };
  l.constrainResolution = function(a, c, d) {
    return this.j.resolution(a, c || 0, d || 0);
  };
  l.constrainRotation = function(a, c) {
    return this.j.rotation(a, c || 0);
  };
  l.Wa = function() {
    return this.get("center");
  };
  l.bd = function(a) {
    var c = this.Wa(),
        d = this.Z(),
        e = this.Ka();
    return Zc(c, d, e, a);
  };
  l.yl = function() {
    return this.i;
  };
  l.Z = function() {
    return this.get("resolution");
  };
  function ye(a) {
    var c = a.a,
        d = Math.log(c / a.l) / Math.log(2);
    return function(a) {
      return c / Math.pow(2, a * d);
    };
  }
  l.Ka = function() {
    return this.get("rotation");
  };
  function ze(a) {
    var c = a.a,
        d = Math.log(c / a.l) / Math.log(2);
    return function(a) {
      return Math.log(c / a) / Math.log(2) / d;
    };
  }
  l.V = function() {
    var a = this.Wa(),
        c = this.i,
        d = this.Z(),
        e = this.Ka();
    return {
      center: [Math.round(a[0] / d) * d, Math.round(a[1] / d) * d],
      projection: void 0 !== c ? c : null,
      resolution: d,
      rotation: e
    };
  };
  l.ik = function() {
    var a,
        c = this.Z();
    if (void 0 !== c) {
      var d,
          e = 0;
      do {
        d = this.constrainResolution(this.a, e);
        if (d == c) {
          a = e;
          break;
        }
        ++e;
      } while (d > this.l);
    }
    return void 0 !== a ? this.c + a : a;
  };
  l.Xe = function(a, c, d) {
    a instanceof Od || (a = ue(a));
    var e = d || {};
    d = void 0 !== e.padding ? e.padding : [0, 0, 0, 0];
    var f = void 0 !== e.constrainResolution ? e.constrainResolution : !0,
        g = void 0 !== e.nearest ? e.nearest : !1,
        h;
    void 0 !== e.minResolution ? h = e.minResolution : void 0 !== e.maxZoom ? h = this.constrainResolution(this.a, e.maxZoom - this.c, 0) : h = 0;
    var k = a.ga(),
        m = this.Ka(),
        e = Math.cos(-m),
        m = Math.sin(-m),
        n = Infinity,
        p = Infinity,
        q = -Infinity,
        r = -Infinity;
    a = a.qa();
    for (var t = 0,
        v = k.length; t < v; t += a)
      var w = k[t] * e - k[t + 1] * m,
          z = k[t] * m + k[t + 1] * e,
          n = Math.min(n, w),
          p = Math.min(p, z),
          q = Math.max(q, w),
          r = Math.max(r, z);
    k = [n, p, q, r];
    c = [c[0] - d[1] - d[3], c[1] - d[0] - d[2]];
    c = Math.max(Wc(k) / c[0], Xc(k) / c[1]);
    c = isNaN(c) ? h : Math.max(c, h);
    f && (h = this.constrainResolution(c, 0, 0), !g && h < c && (h = this.constrainResolution(h, -1, 0)), c = h);
    this.Vb(c);
    m = -m;
    g = (n + q) / 2 + (d[1] - d[3]) / 2 * c;
    d = (p + r) / 2 + (d[0] - d[2]) / 2 * c;
    this.mb([g * e - d * m, d * e + g * m]);
  };
  l.lj = function(a, c, d) {
    var e = this.Ka(),
        f = Math.cos(-e),
        e = Math.sin(-e),
        g = a[0] * f - a[1] * e;
    a = a[1] * f + a[0] * e;
    var h = this.Z(),
        g = g + (c[0] / 2 - d[0]) * h;
    a += (d[1] - c[1] / 2) * h;
    e = -e;
    this.mb([g * f - a * e, a * f + g * e]);
  };
  function Ae(a) {
    return !!a.Wa() && void 0 !== a.Z();
  }
  l.rotate = function(a, c) {
    if (void 0 !== c) {
      var d,
          e = this.Wa();
      void 0 !== e && (d = [e[0] - c[0], e[1] - c[1]], gc(d, a - this.Ka()), bc(d, c));
      this.mb(d);
    }
    this.je(a);
  };
  l.mb = function(a) {
    this.set("center", a);
  };
  function Be(a, c) {
    a.f[1] += c;
  }
  l.Vb = function(a) {
    this.set("resolution", a);
  };
  l.je = function(a) {
    this.set("rotation", a);
  };
  l.Do = function(a) {
    a = this.constrainResolution(this.a, a - this.c, 0);
    this.Vb(a);
  };
  function Ce(a) {
    return Math.pow(a, 3);
  }
  function De(a) {
    return 1 - Ce(1 - a);
  }
  function Ee(a) {
    return 3 * a * a - 2 * a * a * a;
  }
  function Fe(a) {
    return a;
  }
  function Ge(a) {
    return .5 > a ? Ee(2 * a) : 1 - Ee(2 * (a - .5));
  }
  ;
  function He(a) {
    var c = a.source,
        d = a.start ? a.start : Date.now(),
        e = c[0],
        f = c[1],
        g = void 0 !== a.duration ? a.duration : 1E3,
        h = a.easing ? a.easing : Ee;
    return function(a, c) {
      if (c.time < d)
        return c.animate = !0, c.viewHints[0] += 1, !0;
      if (c.time < d + g) {
        var n = 1 - h((c.time - d) / g),
            p = e - c.viewState.center[0],
            q = f - c.viewState.center[1];
        c.animate = !0;
        c.viewState.center[0] += n * p;
        c.viewState.center[1] += n * q;
        c.viewHints[0] += 1;
        return !0;
      }
      return !1;
    };
  }
  function Ie(a) {
    var c = a.rotation ? a.rotation : 0,
        d = a.start ? a.start : Date.now(),
        e = void 0 !== a.duration ? a.duration : 1E3,
        f = a.easing ? a.easing : Ee,
        g = a.anchor ? a.anchor : null;
    return function(a, k) {
      if (k.time < d)
        return k.animate = !0, k.viewHints[0] += 1, !0;
      if (k.time < d + e) {
        var m = 1 - f((k.time - d) / e),
            m = (c - k.viewState.rotation) * m;
        k.animate = !0;
        k.viewState.rotation += m;
        if (g) {
          var n = k.viewState.center;
          n[0] -= g[0];
          n[1] -= g[1];
          gc(n, m);
          bc(n, g);
        }
        k.viewHints[0] += 1;
        return !0;
      }
      return !1;
    };
  }
  function Je(a) {
    var c = a.resolution,
        d = a.start ? a.start : Date.now(),
        e = void 0 !== a.duration ? a.duration : 1E3,
        f = a.easing ? a.easing : Ee;
    return function(a, h) {
      if (h.time < d)
        return h.animate = !0, h.viewHints[0] += 1, !0;
      if (h.time < d + e) {
        var k = 1 - f((h.time - d) / e),
            m = c - h.viewState.resolution;
        h.animate = !0;
        h.viewState.resolution += k * m;
        h.viewHints[0] += 1;
        return !0;
      }
      return !1;
    };
  }
  ;
  function Ke(a, c, d, e) {
    return void 0 !== e ? (e[0] = a, e[1] = c, e[2] = d, e) : [a, c, d];
  }
  function Le(a) {
    var c = a[0],
        d = Array(c),
        e = 1 << c - 1,
        f,
        g;
    for (f = 0; f < c; ++f)
      g = 48, a[1] & e && (g += 1), a[2] & e && (g += 2), d[f] = String.fromCharCode(g), e >>= 1;
    return d.join("");
  }
  ;
  function Me(a, c, d, e) {
    this.ra = a;
    this.va = c;
    this.xa = d;
    this.Aa = e;
  }
  Me.prototype.contains = function(a) {
    return Ne(this, a[1], a[2]);
  };
  function Ne(a, c, d) {
    return a.ra <= c && c <= a.va && a.xa <= d && d <= a.Aa;
  }
  function Oe(a, c) {
    return a.ra == c.ra && a.xa == c.xa && a.va == c.va && a.Aa == c.Aa;
  }
  function Pe(a, c) {
    return a.ra <= c.va && a.va >= c.ra && a.xa <= c.Aa && a.Aa >= c.xa;
  }
  ;
  function Qe(a) {
    this.a = a.html;
    this.b = a.tileRanges ? a.tileRanges : null;
  }
  Qe.prototype.g = function() {
    return this.a;
  };
  function Re(a, c, d) {
    Eb.call(this, a, d);
    this.element = c;
  }
  y(Re, Eb);
  function Se(a) {
    Mb.call(this);
    this.a = a ? a : [];
    Te(this);
  }
  y(Se, Mb);
  l = Se.prototype;
  l.clear = function() {
    for (; 0 < this.ac(); )
      this.pop();
  };
  l.jf = function(a) {
    var c,
        d;
    c = 0;
    for (d = a.length; c < d; ++c)
      this.push(a[c]);
    return this;
  };
  l.forEach = function(a, c) {
    this.a.forEach(a, c);
  };
  l.il = function() {
    return this.a;
  };
  l.item = function(a) {
    return this.a[a];
  };
  l.ac = function() {
    return this.get("length");
  };
  l.ce = function(a, c) {
    this.a.splice(a, 0, c);
    Te(this);
    this.b(new Re("add", c, this));
  };
  l.pop = function() {
    return this.If(this.ac() - 1);
  };
  l.push = function(a) {
    var c = this.a.length;
    this.ce(c, a);
    return c;
  };
  l.remove = function(a) {
    var c = this.a,
        d,
        e;
    d = 0;
    for (e = c.length; d < e; ++d)
      if (c[d] === a)
        return this.If(d);
  };
  l.If = function(a) {
    var c = this.a[a];
    this.a.splice(a, 1);
    Te(this);
    this.b(new Re("remove", c, this));
    return c;
  };
  l.qo = function(a, c) {
    var d = this.ac();
    if (a < d)
      d = this.a[a], this.a[a] = c, this.b(new Re("remove", d, this)), this.b(new Re("add", c, this));
    else {
      for (; d < a; ++d)
        this.ce(d, void 0);
      this.ce(a, c);
    }
  };
  function Te(a) {
    a.set("length", a.a.length);
  }
  ;
  var Ue = /^#(?:[0-9a-f]{3}){1,2}$/i,
      Ve = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i,
      We = /^(?:rgba)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|1|0\.\d{0,10})\)$/i;
  function Xe(a) {
    return fa(a) ? a : Ye(a);
  }
  function Ze(a) {
    if ("string" !== typeof a) {
      var c = a[0];
      c != (c | 0) && (c = c + .5 | 0);
      var d = a[1];
      d != (d | 0) && (d = d + .5 | 0);
      var e = a[2];
      e != (e | 0) && (e = e + .5 | 0);
      a = "rgba(" + c + "," + d + "," + e + "," + a[3] + ")";
    }
    return a;
  }
  var Ye = function() {
    var a = {},
        c = 0;
    return function(d) {
      var e;
      if (a.hasOwnProperty(d))
        e = a[d];
      else {
        if (1024 <= c) {
          e = 0;
          for (var f in a)
            0 === (e++ & 3) && (delete a[f], --c);
        }
        var g,
            h;
        Ue.exec(d) ? (h = 3 == d.length - 1 ? 1 : 2, e = parseInt(d.substr(1 + 0 * h, h), 16), f = parseInt(d.substr(1 + 1 * h, h), 16), g = parseInt(d.substr(1 + 2 * h, h), 16), 1 == h && (e = (e << 4) + e, f = (f << 4) + f, g = (g << 4) + g), e = [e, f, g, 1]) : (h = We.exec(d)) ? (e = Number(h[1]), f = Number(h[2]), g = Number(h[3]), h = Number(h[4]), e = [e, f, g, h], e = $e(e, e)) : (h = Ve.exec(d)) ? (e = Number(h[1]), f = Number(h[2]), g = Number(h[3]), e = [e, f, g, 1], e = $e(e, e)) : e = void 0;
        a[d] = e;
        ++c;
      }
      return e;
    };
  }();
  function $e(a, c) {
    var d = c || [];
    d[0] = Ma(a[0] + .5 | 0, 0, 255);
    d[1] = Ma(a[1] + .5 | 0, 0, 255);
    d[2] = Ma(a[2] + .5 | 0, 0, 255);
    d[3] = Ma(a[3], 0, 1);
    return d;
  }
  ;
  function af(a) {
    return "string" === typeof a || a instanceof CanvasPattern || a instanceof CanvasGradient ? a : Ze(a);
  }
  ;
  var bf;
  a: {
    var cf = aa.navigator;
    if (cf) {
      var df = cf.userAgent;
      if (df) {
        bf = df;
        break a;
      }
    }
    bf = "";
  }
  function ef(a) {
    return -1 != bf.indexOf(a);
  }
  ;
  function ff(a, c) {
    for (var d in a)
      c.call(void 0, a[d], d, a);
  }
  var gf = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
  function hf(a, c) {
    for (var d,
        e,
        f = 1; f < arguments.length; f++) {
      e = arguments[f];
      for (d in e)
        a[d] = e[d];
      for (var g = 0; g < gf.length; g++)
        d = gf[g], Object.prototype.hasOwnProperty.call(e, d) && (a[d] = e[d]);
    }
  }
  ;
  var jf = ef("Opera") || ef("OPR"),
      kf = ef("Trident") || ef("MSIE"),
      lf = ef("Edge"),
      mf = ef("Gecko") && !(-1 != bf.toLowerCase().indexOf("webkit") && !ef("Edge")) && !(ef("Trident") || ef("MSIE")) && !ef("Edge"),
      nf = -1 != bf.toLowerCase().indexOf("webkit") && !ef("Edge");
  function of() {
    var a = bf;
    if (mf)
      return /rv\:([^\);]+)(\)|;)/.exec(a);
    if (lf)
      return /Edge\/([\d\.]+)/.exec(a);
    if (kf)
      return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
    if (nf)
      return /WebKit\/(\S+)/.exec(a);
  }
  function pf() {
    var a = aa.document;
    return a ? a.documentMode : void 0;
  }
  var qf = function() {
    if (jf && aa.opera) {
      var a;
      var c = aa.opera.version;
      try {
        a = c();
      } catch (d) {
        a = c;
      }
      return a;
    }
    a = "";
    (c = of()) && (a = c ? c[1] : "");
    return kf && (c = pf(), c > parseFloat(a)) ? String(c) : a;
  }(),
      rf = {};
  function sf(a) {
    return rf[a] || (rf[a] = 0 <= Ka(qf, a));
  }
  var tf = aa.document,
      uf = tf && kf ? pf() || ("CSS1Compat" == tf.compatMode ? parseInt(qf, 10) : 5) : void 0;
  var vf = !kf || 9 <= uf;
  !mf && !kf || kf && 9 <= uf || mf && sf("1.9.1");
  kf && sf("9");
  function wf(a, c) {
    this.x = ba(a) ? a : 0;
    this.y = ba(c) ? c : 0;
  }
  l = wf.prototype;
  l.clone = function() {
    return new wf(this.x, this.y);
  };
  l.ceil = function() {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this;
  };
  l.floor = function() {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this;
  };
  l.round = function() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this;
  };
  l.scale = function(a, c) {
    var d = ia(c) ? c : a;
    this.x *= a;
    this.y *= d;
    return this;
  };
  function xf(a, c) {
    this.width = a;
    this.height = c;
  }
  l = xf.prototype;
  l.clone = function() {
    return new xf(this.width, this.height);
  };
  l.ij = function() {
    return this.width * this.height;
  };
  l.Oa = function() {
    return !this.ij();
  };
  l.ceil = function() {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this;
  };
  l.floor = function() {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this;
  };
  l.round = function() {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this;
  };
  l.scale = function(a, c) {
    var d = ia(c) ? c : a;
    this.width *= a;
    this.height *= d;
    return this;
  };
  function yf(a) {
    return a ? new zf(Af(a)) : va || (va = new zf);
  }
  function Bf(a) {
    var c = document;
    return ha(a) ? c.getElementById(a) : a;
  }
  function Cf(a, c) {
    ff(c, function(c, e) {
      "style" == e ? a.style.cssText = c : "class" == e ? a.className = c : "for" == e ? a.htmlFor = c : Df.hasOwnProperty(e) ? a.setAttribute(Df[e], c) : 0 == e.lastIndexOf("aria-", 0) || 0 == e.lastIndexOf("data-", 0) ? a.setAttribute(e, c) : a[e] = c;
    });
  }
  var Df = {
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    colspan: "colSpan",
    frameborder: "frameBorder",
    height: "height",
    maxlength: "maxLength",
    role: "role",
    rowspan: "rowSpan",
    type: "type",
    usemap: "useMap",
    valign: "vAlign",
    width: "width"
  };
  function Ef(a, c, d) {
    var e = arguments,
        f = document,
        g = e[0],
        h = e[1];
    if (!vf && h && (h.name || h.type)) {
      g = ["<", g];
      h.name && g.push(' name="', xa(h.name), '"');
      if (h.type) {
        g.push(' type="', xa(h.type), '"');
        var k = {};
        hf(k, h);
        delete k.type;
        h = k;
      }
      g.push(">");
      g = g.join("");
    }
    g = f.createElement(g);
    h && (ha(h) ? g.className = h : fa(h) ? g.className = h.join(" ") : Cf(g, h));
    2 < e.length && Ff(f, g, e);
    return g;
  }
  function Ff(a, c, d) {
    function e(d) {
      d && c.appendChild(ha(d) ? a.createTextNode(d) : d);
    }
    for (var f = 2; f < d.length; f++) {
      var g = d[f];
      !ga(g) || ka(g) && 0 < g.nodeType ? e(g) : Vb(Gf(g) ? Yb(g) : g, e);
    }
  }
  function Hf(a) {
    for (var c; c = a.firstChild; )
      a.removeChild(c);
  }
  function If(a, c, d) {
    a.insertBefore(c, a.childNodes[d] || null);
  }
  function Jf(a) {
    a && a.parentNode && a.parentNode.removeChild(a);
  }
  function Kf(a, c) {
    var d = c.parentNode;
    d && d.replaceChild(a, c);
  }
  function Lf(a) {
    if (ba(a.firstElementChild))
      a = a.firstElementChild;
    else
      for (a = a.firstChild; a && 1 != a.nodeType; )
        a = a.nextSibling;
    return a;
  }
  function Mf(a, c) {
    if (a.contains && 1 == c.nodeType)
      return a == c || a.contains(c);
    if ("undefined" != typeof a.compareDocumentPosition)
      return a == c || Boolean(a.compareDocumentPosition(c) & 16);
    for (; c && a != c; )
      c = c.parentNode;
    return c == a;
  }
  function Af(a) {
    return 9 == a.nodeType ? a : a.ownerDocument || a.document;
  }
  function Gf(a) {
    if (a && "number" == typeof a.length) {
      if (ka(a))
        return "function" == typeof a.item || "string" == typeof a.item;
      if (ja(a))
        return "function" == typeof a.item;
    }
    return !1;
  }
  function zf(a) {
    this.b = a || aa.document || document;
  }
  zf.prototype.C = Cf;
  function Nf() {
    return !0;
  }
  zf.prototype.appendChild = function(a, c) {
    a.appendChild(c);
  };
  zf.prototype.contains = Mf;
  function Of(a) {
    if (a.classList)
      return a.classList;
    a = a.className;
    return ha(a) && a.match(/\S+/g) || [];
  }
  function Pf(a, c) {
    var d;
    a.classList ? d = a.classList.contains(c) : (d = Of(a), d = 0 <= Ub(d, c));
    return d;
  }
  function Qf(a, c) {
    a.classList ? a.classList.add(c) : Pf(a, c) || (a.className += 0 < a.className.length ? " " + c : c);
  }
  function Rf(a, c) {
    a.classList ? a.classList.remove(c) : Pf(a, c) && (a.className = Wb(Of(a), function(a) {
      return a != c;
    }).join(" "));
  }
  function Sf(a, c) {
    Pf(a, c) ? Rf(a, c) : Qf(a, c);
  }
  ;
  function Tf(a, c, d, e) {
    this.top = a;
    this.right = c;
    this.bottom = d;
    this.left = e;
  }
  l = Tf.prototype;
  l.clone = function() {
    return new Tf(this.top, this.right, this.bottom, this.left);
  };
  l.contains = function(a) {
    return this && a ? a instanceof Tf ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1;
  };
  l.ceil = function() {
    this.top = Math.ceil(this.top);
    this.right = Math.ceil(this.right);
    this.bottom = Math.ceil(this.bottom);
    this.left = Math.ceil(this.left);
    return this;
  };
  l.floor = function() {
    this.top = Math.floor(this.top);
    this.right = Math.floor(this.right);
    this.bottom = Math.floor(this.bottom);
    this.left = Math.floor(this.left);
    return this;
  };
  l.round = function() {
    this.top = Math.round(this.top);
    this.right = Math.round(this.right);
    this.bottom = Math.round(this.bottom);
    this.left = Math.round(this.left);
    return this;
  };
  l.scale = function(a, c) {
    var d = ia(c) ? c : a;
    this.left *= a;
    this.right *= a;
    this.top *= d;
    this.bottom *= d;
    return this;
  };
  function Uf(a, c, d, e) {
    this.left = a;
    this.top = c;
    this.width = d;
    this.height = e;
  }
  l = Uf.prototype;
  l.clone = function() {
    return new Uf(this.left, this.top, this.width, this.height);
  };
  l.contains = function(a) {
    return a instanceof Uf ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height : a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height;
  };
  l.distance = function(a) {
    var c = a.x < this.left ? this.left - a.x : Math.max(a.x - (this.left + this.width), 0);
    a = a.y < this.top ? this.top - a.y : Math.max(a.y - (this.top + this.height), 0);
    return Math.sqrt(c * c + a * a);
  };
  l.ceil = function() {
    this.left = Math.ceil(this.left);
    this.top = Math.ceil(this.top);
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this;
  };
  l.floor = function() {
    this.left = Math.floor(this.left);
    this.top = Math.floor(this.top);
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this;
  };
  l.round = function() {
    this.left = Math.round(this.left);
    this.top = Math.round(this.top);
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this;
  };
  l.scale = function(a, c) {
    var d = ia(c) ? c : a;
    this.left *= a;
    this.width *= a;
    this.top *= d;
    this.height *= d;
    return this;
  };
  function Vf(a, c) {
    var d = Af(a);
    return d.defaultView && d.defaultView.getComputedStyle && (d = d.defaultView.getComputedStyle(a, null)) ? d[c] || d.getPropertyValue(c) || "" : "";
  }
  function Wf(a, c, d) {
    var e;
    c instanceof wf ? (e = c.x, c = c.y) : (e = c, c = d);
    a.style.left = Xf(e);
    a.style.top = Xf(c);
  }
  function Yf(a) {
    var c;
    try {
      c = a.getBoundingClientRect();
    } catch (d) {
      return {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      };
    }
    kf && a.ownerDocument.body && (a = a.ownerDocument, c.left -= a.documentElement.clientLeft + a.body.clientLeft, c.top -= a.documentElement.clientTop + a.body.clientTop);
    return c;
  }
  function Zf(a) {
    if (1 == a.nodeType)
      return a = Yf(a), new wf(a.left, a.top);
    a = a.changedTouches ? a.changedTouches[0] : a;
    return new wf(a.clientX, a.clientY);
  }
  function Xf(a) {
    "number" == typeof a && (a = a + "px");
    return a;
  }
  function $f(a) {
    var c = ag;
    if ("none" != (Vf(a, "display") || (a.currentStyle ? a.currentStyle.display : null) || a.style && a.style.display))
      return c(a);
    var d = a.style,
        e = d.display,
        f = d.visibility,
        g = d.position;
    d.visibility = "hidden";
    d.position = "absolute";
    d.display = "inline";
    a = c(a);
    d.display = e;
    d.position = g;
    d.visibility = f;
    return a;
  }
  function ag(a) {
    var c = a.offsetWidth,
        d = a.offsetHeight,
        e = nf && !c && !d;
    return ba(c) && !e || !a.getBoundingClientRect ? new xf(c, d) : (a = Yf(a), new xf(a.right - a.left, a.bottom - a.top));
  }
  function bg(a, c) {
    a.style.display = c ? "" : "none";
  }
  function cg(a, c, d, e) {
    if (/^\d+px?$/.test(c))
      return parseInt(c, 10);
    var f = a.style[d],
        g = a.runtimeStyle[d];
    a.runtimeStyle[d] = a.currentStyle[d];
    a.style[d] = c;
    c = a.style[e];
    a.style[d] = f;
    a.runtimeStyle[d] = g;
    return c;
  }
  function dg(a, c) {
    var d = a.currentStyle ? a.currentStyle[c] : null;
    return d ? cg(a, d, "left", "pixelLeft") : 0;
  }
  function eg(a, c) {
    if (kf) {
      var d = dg(a, c + "Left"),
          e = dg(a, c + "Right"),
          f = dg(a, c + "Top"),
          g = dg(a, c + "Bottom");
      return new Tf(f, e, g, d);
    }
    d = Vf(a, c + "Left");
    e = Vf(a, c + "Right");
    f = Vf(a, c + "Top");
    g = Vf(a, c + "Bottom");
    return new Tf(parseFloat(f), parseFloat(e), parseFloat(g), parseFloat(d));
  }
  var fg = {
    thin: 2,
    medium: 4,
    thick: 6
  };
  function gg(a, c) {
    if ("none" == (a.currentStyle ? a.currentStyle[c + "Style"] : null))
      return 0;
    var d = a.currentStyle ? a.currentStyle[c + "Width"] : null;
    return d in fg ? fg[d] : cg(a, d, "left", "pixelLeft");
  }
  function hg(a) {
    if (kf && !(9 <= uf)) {
      var c = gg(a, "borderLeft"),
          d = gg(a, "borderRight"),
          e = gg(a, "borderTop");
      a = gg(a, "borderBottom");
      return new Tf(e, d, a, c);
    }
    c = Vf(a, "borderLeftWidth");
    d = Vf(a, "borderRightWidth");
    e = Vf(a, "borderTopWidth");
    a = Vf(a, "borderBottomWidth");
    return new Tf(parseFloat(e), parseFloat(d), parseFloat(a), parseFloat(c));
  }
  ;
  function ig(a, c, d) {
    Eb.call(this, a);
    this.map = c;
    this.frameState = void 0 !== d ? d : null;
  }
  y(ig, Eb);
  function jg(a) {
    Mb.call(this);
    this.element = a.element ? a.element : null;
    this.a = this.S = null;
    this.s = [];
    this.render = a.render ? a.render : ua;
    a.target && this.c(a.target);
  }
  y(jg, Mb);
  jg.prototype.fa = function() {
    Jf(this.element);
    jg.ha.fa.call(this);
  };
  jg.prototype.i = function() {
    return this.a;
  };
  jg.prototype.setMap = function(a) {
    this.a && Jf(this.element);
    for (var c = 0,
        d = this.s.length; c < d; ++c)
      sb(this.s[c]);
    this.s.length = 0;
    if (this.a = a)
      (this.S ? this.S : a.A).appendChild(this.element), this.render !== ua && this.s.push(D(a, "postrender", this.render, this)), a.render();
  };
  jg.prototype.c = function(a) {
    this.S = Bf(a);
  };
  function kg() {
    this.g = 0;
    this.f = {};
    this.a = this.b = null;
  }
  l = kg.prototype;
  l.clear = function() {
    this.g = 0;
    this.f = {};
    this.a = this.b = null;
  };
  function lg(a, c) {
    return a.f.hasOwnProperty(c);
  }
  l.forEach = function(a, c) {
    for (var d = this.b; d; )
      a.call(c, d.mc, d.de, this), d = d.xb;
  };
  l.get = function(a) {
    a = this.f[a];
    if (a === this.a)
      return a.mc;
    a === this.b ? (this.b = this.b.xb, this.b.hc = null) : (a.xb.hc = a.hc, a.hc.xb = a.xb);
    a.xb = null;
    a.hc = this.a;
    this.a = this.a.xb = a;
    return a.mc;
  };
  l.rc = function() {
    return this.g;
  };
  l.O = function() {
    var a = Array(this.g),
        c = 0,
        d;
    for (d = this.a; d; d = d.hc)
      a[c++] = d.de;
    return a;
  };
  l.vc = function() {
    var a = Array(this.g),
        c = 0,
        d;
    for (d = this.a; d; d = d.hc)
      a[c++] = d.mc;
    return a;
  };
  l.pop = function() {
    var a = this.b;
    delete this.f[a.de];
    a.xb && (a.xb.hc = null);
    this.b = a.xb;
    this.b || (this.a = null);
    --this.g;
    return a.mc;
  };
  l.replace = function(a, c) {
    this.get(a);
    this.f[a].mc = c;
  };
  l.set = function(a, c) {
    var d = {
      de: a,
      xb: null,
      hc: this.a,
      mc: c
    };
    this.a ? this.a.xb = d : this.b = d;
    this.a = d;
    this.f[a] = d;
    ++this.g;
  };
  function mg(a) {
    kg.call(this);
    this.c = void 0 !== a ? a : 2048;
  }
  y(mg, kg);
  function ng(a) {
    return a.rc() > a.c;
  }
  function og(a, c) {
    for (var d,
        e; ng(a) && !(d = a.b.mc, e = d.ja[0].toString(), e in c && c[e].contains(d.ja)); )
      a.pop().Rd();
  }
  ;
  function pg(a, c) {
    Hb.call(this);
    this.ja = a;
    this.state = c;
    this.a = null;
    this.key = "";
  }
  y(pg, Hb);
  function qg(a) {
    a.b("change");
  }
  pg.prototype.eb = function() {
    return x(this).toString();
  };
  pg.prototype.f = function() {
    return this.ja;
  };
  pg.prototype.V = function() {
    return this.state;
  };
  function rg(a) {
    Mb.call(this);
    this.f = qd(a.projection);
    this.Ca = void 0 !== a.attributions ? a.attributions : null;
    this.D = a.logo;
    this.wa = void 0 !== a.state ? a.state : "ready";
    this.J = void 0 !== a.wrapX ? a.wrapX : !1;
  }
  y(rg, Mb);
  l = rg.prototype;
  l.ne = ua;
  l.ea = function() {
    return this.Ca;
  };
  l.pa = function() {
    return this.D;
  };
  l.sa = function() {
    return this.f;
  };
  l.V = function() {
    return this.wa;
  };
  function sg(a) {
    return a.J;
  }
  l.ma = function(a) {
    this.Ca = a;
    this.u();
  };
  function tg(a, c) {
    a.wa = c;
    a.u();
  }
  ;
  function ug(a) {
    this.minZoom = void 0 !== a.minZoom ? a.minZoom : 0;
    this.a = a.resolutions;
    this.maxZoom = this.a.length - 1;
    this.g = void 0 !== a.origin ? a.origin : null;
    this.c = null;
    void 0 !== a.origins && (this.c = a.origins);
    var c = a.extent;
    void 0 === c || this.g || this.c || (this.g = Sc(c));
    this.i = null;
    void 0 !== a.tileSizes && (this.i = a.tileSizes);
    this.l = void 0 !== a.tileSize ? a.tileSize : this.i ? null : 256;
    this.s = void 0 !== c ? c : null;
    this.b = null;
    void 0 !== a.sizes ? this.b = a.sizes.map(function(a) {
      return new Me(Math.min(0, a[0]), Math.max(a[0] - 1, -1), Math.min(0, a[1]), Math.max(a[1] - 1, -1));
    }, this) : c && vg(this, c);
    this.f = [0, 0];
  }
  var wg = [0, 0, 0];
  function xg(a, c, d, e, f) {
    f = a.Da(c, f);
    for (c = c[0] - 1; c >= a.minZoom; ) {
      if (d.call(null, c, yg(a, f, c, e)))
        return !0;
      --c;
    }
    return !1;
  }
  l = ug.prototype;
  l.G = function() {
    return this.s;
  };
  l.yg = function() {
    return this.maxZoom;
  };
  l.zg = function() {
    return this.minZoom;
  };
  l.Ha = function(a) {
    return this.g ? this.g : this.c[a];
  };
  l.Z = function(a) {
    return this.a[a];
  };
  l.Pb = function() {
    return this.a;
  };
  function zg(a, c, d, e) {
    return c[0] < a.maxZoom ? (e = a.Da(c, e), yg(a, e, c[0] + 1, d)) : null;
  }
  function Ag(a, c, d, e) {
    Bg(a, c[0], c[1], d, !1, wg);
    var f = wg[1],
        g = wg[2];
    Bg(a, c[2], c[3], d, !0, wg);
    a = wg[1];
    c = wg[2];
    void 0 !== e ? (e.ra = f, e.va = a, e.xa = g, e.Aa = c) : e = new Me(f, a, g, c);
    return e;
  }
  function yg(a, c, d, e) {
    d = a.Z(d);
    return Ag(a, c, d, e);
  }
  function Cg(a, c) {
    var d = a.Ha(c[0]),
        e = a.Z(c[0]),
        f = Sb(a.Ua(c[0]), a.f);
    return [d[0] + (c[1] + .5) * f[0] * e, d[1] + (c[2] + .5) * f[1] * e];
  }
  l.Da = function(a, c) {
    var d = this.Ha(a[0]),
        e = this.Z(a[0]),
        f = Sb(this.Ua(a[0]), this.f),
        g = d[0] + a[1] * f[0] * e,
        d = d[1] + a[2] * f[1] * e;
    return Ic(g, d, g + f[0] * e, d + f[1] * e, c);
  };
  l.Zd = function(a, c, d) {
    return Bg(this, a[0], a[1], c, !1, d);
  };
  function Bg(a, c, d, e, f, g) {
    var h = Dg(a, e),
        k = e / a.Z(h),
        m = a.Ha(h);
    a = Sb(a.Ua(h), a.f);
    c = k * Math.floor((c - m[0]) / e + (f ? .5 : 0)) / a[0];
    d = k * Math.floor((d - m[1]) / e + (f ? 0 : .5)) / a[1];
    f ? (c = Math.ceil(c) - 1, d = Math.ceil(d) - 1) : (c = Math.floor(c), d = Math.floor(d));
    return Ke(h, c, d, g);
  }
  l.ud = function(a, c, d) {
    c = this.Z(c);
    return Bg(this, a[0], a[1], c, !1, d);
  };
  l.Ua = function(a) {
    return this.l ? this.l : this.i[a];
  };
  function Dg(a, c) {
    var d = Wa(a.a, c, 0);
    return Ma(d, a.minZoom, a.maxZoom);
  }
  function vg(a, c) {
    for (var d = a.a.length,
        e = Array(d),
        f = a.minZoom; f < d; ++f)
      e[f] = yg(a, c, f);
    a.b = e;
  }
  function Eg(a) {
    var c = a.j;
    if (!c) {
      var c = Fg(a),
          d = Gg(c, void 0, void 0),
          c = new ug({
            extent: c,
            origin: Sc(c),
            resolutions: d,
            tileSize: void 0
          });
      a.j = c;
    }
    return c;
  }
  function Hg(a) {
    var c = {};
    mb(c, void 0 !== a ? a : {});
    void 0 === c.extent && (c.extent = qd("EPSG:3857").G());
    c.resolutions = Gg(c.extent, c.maxZoom, c.tileSize);
    delete c.maxZoom;
    return new ug(c);
  }
  function Gg(a, c, d) {
    c = void 0 !== c ? c : 42;
    var e = Xc(a);
    a = Wc(a);
    d = Sb(void 0 !== d ? d : 256);
    d = Math.max(a / d[0], e / d[1]);
    c += 1;
    e = Array(c);
    for (a = 0; a < c; ++a)
      e[a] = d / Math.pow(2, a);
    return e;
  }
  function Fg(a) {
    a = qd(a);
    var c = a.G();
    c || (a = 180 * md.degrees / a.$b(), c = Ic(-a, -a, a, a));
    return c;
  }
  ;
  function Ig(a) {
    rg.call(this, {
      attributions: a.attributions,
      extent: a.extent,
      logo: a.logo,
      projection: a.projection,
      state: a.state,
      wrapX: a.wrapX
    });
    this.na = void 0 !== a.opaque ? a.opaque : !1;
    this.ya = void 0 !== a.tilePixelRatio ? a.tilePixelRatio : 1;
    this.tileGrid = void 0 !== a.tileGrid ? a.tileGrid : null;
    this.a = new mg(a.Re);
    this.j = [0, 0];
  }
  y(Ig, rg);
  l = Ig.prototype;
  l.lh = function() {
    return ng(this.a);
  };
  l.mh = function(a, c) {
    var d = this.td(a);
    d && og(d, c);
  };
  function Jg(a, c, d, e, f) {
    c = a.td(c);
    if (!c)
      return !1;
    for (var g = !0,
        h,
        k,
        m = e.ra; m <= e.va; ++m)
      for (var n = e.xa; n <= e.Aa; ++n)
        h = a.Db(d, m, n), k = !1, lg(c, h) && (h = c.get(h), (k = 2 === h.V()) && (k = !1 !== f(h))), k || (g = !1);
    return g;
  }
  l.Ud = function() {
    return 0;
  };
  l.af = function() {
    return "";
  };
  l.Db = function(a, c, d) {
    return a + "/" + c + "/" + d;
  };
  l.cf = function() {
    return this.na;
  };
  l.Pb = function() {
    return this.tileGrid.Pb();
  };
  l.Ma = function() {
    return this.tileGrid;
  };
  l.Za = function(a) {
    return this.tileGrid ? this.tileGrid : Eg(a);
  };
  l.td = function(a) {
    var c = this.f;
    return c && !Hd(c, a) ? null : this.a;
  };
  l.uc = function() {
    return this.ya;
  };
  function Kg(a, c, d, e) {
    e = a.Za(e);
    d = a.uc(d);
    c = Sb(e.Ua(c), a.j);
    return 1 == d ? c : Rb(c, d, a.j);
  }
  function Lg(a, c, d) {
    var e = void 0 !== d ? d : a.f;
    d = a.Za(e);
    if (a.J && e.g) {
      var f = c;
      c = f[0];
      a = Cg(d, f);
      e = Fg(e);
      Dc(e, a) ? c = f : (f = Wc(e), a[0] += f * Math.ceil((e[0] - a[0]) / f), c = d.ud(a, c));
    }
    f = c[0];
    e = c[1];
    a = c[2];
    if (d.minZoom > f || f > d.maxZoom)
      d = !1;
    else {
      var g = d.G();
      d = (d = g ? yg(d, g, f) : d.b ? d.b[f] : null) ? Ne(d, e, a) : !0;
    }
    return d ? c : null;
  }
  l.Of = ua;
  function Mg(a, c) {
    Eb.call(this, a);
    this.tile = c;
  }
  y(Mg, Eb);
  function Ng(a) {
    a = a ? a : {};
    this.J = document.createElement("UL");
    this.A = document.createElement("LI");
    this.J.appendChild(this.A);
    bg(this.A, !1);
    this.f = void 0 !== a.collapsed ? a.collapsed : !0;
    this.l = void 0 !== a.collapsible ? a.collapsible : !0;
    this.l || (this.f = !1);
    var c = void 0 !== a.className ? a.className : "ol-attribution",
        d = void 0 !== a.tipLabel ? a.tipLabel : "Attributions",
        e = void 0 !== a.collapseLabel ? a.collapseLabel : "\u00bb";
    this.D = "string" === typeof e ? Ef("SPAN", {}, e) : e;
    e = void 0 !== a.label ? a.label : "i";
    this.H = "string" === typeof e ? Ef("SPAN", {}, e) : e;
    d = Ef("BUTTON", {
      type: "button",
      title: d
    }, this.l && !this.f ? this.D : this.H);
    D(d, "click", this.Bl, this);
    c = Ef("DIV", c + " ol-unselectable ol-control" + (this.f && this.l ? " ol-collapsed" : "") + (this.l ? "" : " ol-uncollapsible"), this.J, d);
    jg.call(this, {
      element: c,
      render: a.render ? a.render : Og,
      target: a.target
    });
    this.B = !0;
    this.o = {};
    this.j = {};
    this.U = {};
  }
  y(Ng, jg);
  function Og(a) {
    if (a = a.frameState) {
      var c,
          d,
          e,
          f,
          g,
          h,
          k,
          m,
          n,
          p,
          q,
          r = a.layerStatesArray,
          t = mb({}, a.attributions),
          v = {},
          w = a.viewState.projection;
      d = 0;
      for (c = r.length; d < c; d++)
        if (h = r[d].layer.da())
          if (p = x(h).toString(), n = h.ea())
            for (e = 0, f = n.length; e < f; e++)
              if (k = n[e], m = x(k).toString(), !(m in t)) {
                if (g = a.usedTiles[p]) {
                  var z = h.Za(w);
                  a: {
                    q = k;
                    var C = w;
                    if (q.b) {
                      var A = void 0,
                          B = void 0,
                          L = void 0,
                          J = void 0;
                      for (J in g)
                        if (J in q.b)
                          for (var L = g[J],
                              M,
                              A = 0,
                              B = q.b[J].length; A < B; ++A) {
                            M = q.b[J][A];
                            if (Pe(M, L)) {
                              q = !0;
                              break a;
                            }
                            var P = yg(z, Fg(C), parseInt(J, 10)),
                                Aa = P.va - P.ra + 1;
                            if (L.ra < P.ra || L.va > P.va)
                              if (Pe(M, new Me($b(L.ra, Aa), $b(L.va, Aa), L.xa, L.Aa)) || L.va - L.ra + 1 > Aa && Pe(M, P)) {
                                q = !0;
                                break a;
                              }
                          }
                      q = !1;
                    } else
                      q = !0;
                  }
                } else
                  q = !1;
                q ? (m in v && delete v[m], t[m] = k) : v[m] = k;
              }
      c = [t, v];
      d = c[0];
      c = c[1];
      for (var I in this.o)
        I in d ? (this.j[I] || (bg(this.o[I], !0), this.j[I] = !0), delete d[I]) : I in c ? (this.j[I] && (bg(this.o[I], !1), delete this.j[I]), delete c[I]) : (Jf(this.o[I]), delete this.o[I], delete this.j[I]);
      for (I in d)
        e = document.createElement("LI"), e.innerHTML = d[I].a, this.J.appendChild(e), this.o[I] = e, this.j[I] = !0;
      for (I in c)
        e = document.createElement("LI"), e.innerHTML = c[I].a, bg(e, !1), this.J.appendChild(e), this.o[I] = e;
      I = !pb(this.j) || !pb(a.logos);
      this.B != I && (bg(this.element, I), this.B = I);
      I && pb(this.j) ? Qf(this.element, "ol-logo-only") : Rf(this.element, "ol-logo-only");
      var ca;
      a = a.logos;
      I = this.U;
      for (ca in I)
        ca in a || (Jf(I[ca]), delete I[ca]);
      for (var Da in a)
        Da in I || (ca = new Image, ca.src = Da, d = a[Da], "" === d ? d = ca : (d = Ef("A", {href: d}), d.appendChild(ca)), this.A.appendChild(d), I[Da] = d);
      bg(this.A, !pb(a));
    } else
      this.B && (bg(this.element, !1), this.B = !1);
  }
  l = Ng.prototype;
  l.Bl = function(a) {
    a.preventDefault();
    Pg(this);
  };
  function Pg(a) {
    Sf(a.element, "ol-collapsed");
    a.f ? Kf(a.D, a.H) : Kf(a.H, a.D);
    a.f = !a.f;
  }
  l.Al = function() {
    return this.l;
  };
  l.Dl = function(a) {
    this.l !== a && (this.l = a, Sf(this.element, "ol-uncollapsible"), !a && this.f && Pg(this));
  };
  l.Cl = function(a) {
    this.l && this.f !== a && Pg(this);
  };
  l.zl = function() {
    return this.f;
  };
  function Qg(a) {
    a = a ? a : {};
    var c = void 0 !== a.className ? a.className : "ol-rotate",
        d = void 0 !== a.label ? a.label : "\u21e7";
    this.f = null;
    "string" === typeof d ? this.f = Ef("SPAN", "ol-compass", d) : (this.f = d, Qf(this.f, "ol-compass"));
    d = Ef("BUTTON", {
      "class": c + "-reset",
      type: "button",
      title: a.tipLabel ? a.tipLabel : "Reset rotation"
    }, this.f);
    D(d, "click", Qg.prototype.B, this);
    c = Ef("DIV", c + " ol-unselectable ol-control", d);
    d = a.render ? a.render : Rg;
    this.l = a.resetNorth ? a.resetNorth : void 0;
    jg.call(this, {
      element: c,
      render: d,
      target: a.target
    });
    this.o = void 0 !== a.duration ? a.duration : 250;
    this.j = void 0 !== a.autoHide ? a.autoHide : !0;
    this.A = void 0;
    this.j && Qf(this.element, "ol-hidden");
  }
  y(Qg, jg);
  Qg.prototype.B = function(a) {
    a.preventDefault();
    if (void 0 !== this.l)
      this.l();
    else {
      a = this.a;
      var c = a.$();
      if (c) {
        var d = c.Ka();
        void 0 !== d && (0 < this.o && (d %= 2 * Math.PI, d < -Math.PI && (d += 2 * Math.PI), d > Math.PI && (d -= 2 * Math.PI), a.Ra(Ie({
          rotation: d,
          duration: this.o,
          easing: De
        }))), c.je(0));
      }
    }
  };
  function Rg(a) {
    if (a = a.frameState) {
      a = a.viewState.rotation;
      if (a != this.A) {
        var c = "rotate(" + a + "rad)";
        if (this.j) {
          var d = this.element;
          0 === a ? Qf(d, "ol-hidden") : Rf(d, "ol-hidden");
        }
        this.f.style.msTransform = c;
        this.f.style.webkitTransform = c;
        this.f.style.transform = c;
      }
      this.A = a;
    }
  }
  ;
  function Sg(a) {
    a = a ? a : {};
    var c = void 0 !== a.className ? a.className : "ol-zoom",
        d = void 0 !== a.delta ? a.delta : 1,
        e = void 0 !== a.zoomOutLabel ? a.zoomOutLabel : "\u2212",
        f = void 0 !== a.zoomOutTipLabel ? a.zoomOutTipLabel : "Zoom out",
        g = Ef("BUTTON", {
          "class": c + "-in",
          type: "button",
          title: void 0 !== a.zoomInTipLabel ? a.zoomInTipLabel : "Zoom in"
        }, void 0 !== a.zoomInLabel ? a.zoomInLabel : "+");
    D(g, "click", qa(Sg.prototype.j, d), this);
    e = Ef("BUTTON", {
      "class": c + "-out",
      type: "button",
      title: f
    }, e);
    D(e, "click", qa(Sg.prototype.j, -d), this);
    c = Ef("DIV", c + " ol-unselectable ol-control", g, e);
    jg.call(this, {
      element: c,
      target: a.target
    });
    this.f = void 0 !== a.duration ? a.duration : 250;
  }
  y(Sg, jg);
  Sg.prototype.j = function(a, c) {
    c.preventDefault();
    var d = this.a,
        e = d.$();
    if (e) {
      var f = e.Z();
      f && (0 < this.f && d.Ra(Je({
        resolution: f,
        duration: this.f,
        easing: De
      })), d = e.constrainResolution(f, a), e.Vb(d));
    }
  };
  function Tg(a) {
    a = a ? a : {};
    var c = new Se;
    (void 0 !== a.zoom ? a.zoom : 1) && c.push(new Sg(a.zoomOptions));
    (void 0 !== a.rotate ? a.rotate : 1) && c.push(new Qg(a.rotateOptions));
    (void 0 !== a.attribution ? a.attribution : 1) && c.push(new Ng(a.attributionOptions));
    return c;
  }
  ;
  var Ug = nf ? "webkitfullscreenchange" : mf ? "mozfullscreenchange" : kf ? "MSFullscreenChange" : "fullscreenchange";
  function Vg() {
    var a = yf().b,
        c = a.body;
    return !!(c.webkitRequestFullscreen || c.mozRequestFullScreen && a.mozFullScreenEnabled || c.msRequestFullscreen && a.msFullscreenEnabled || c.requestFullscreen && a.fullscreenEnabled);
  }
  function Wg(a) {
    a.webkitRequestFullscreen ? a.webkitRequestFullscreen() : a.mozRequestFullScreen ? a.mozRequestFullScreen() : a.msRequestFullscreen ? a.msRequestFullscreen() : a.requestFullscreen && a.requestFullscreen();
  }
  function Xg() {
    var a = yf().b;
    return !!(a.webkitIsFullScreen || a.mozFullScreen || a.msFullscreenElement || a.fullscreenElement);
  }
  ;
  function Yg(a) {
    a = a ? a : {};
    this.f = void 0 !== a.className ? a.className : "ol-full-screen";
    var c = void 0 !== a.label ? a.label : "\u2922";
    this.j = "string" === typeof c ? document.createTextNode(c) : c;
    c = void 0 !== a.labelActive ? a.labelActive : "\u00d7";
    this.l = "string" === typeof c ? document.createTextNode(c) : c;
    c = a.tipLabel ? a.tipLabel : "Toggle full-screen";
    c = Ef("BUTTON", {
      "class": this.f + "-" + Xg(),
      type: "button",
      title: c
    }, this.j);
    D(c, "click", this.J, this);
    D(aa.document, Ug, this.A, this);
    var d = this.f + " ol-unselectable ol-control " + (Vg() ? "" : "ol-unsupported"),
        c = Ef("DIV", d, c);
    jg.call(this, {
      element: c,
      target: a.target
    });
    this.B = void 0 !== a.keys ? a.keys : !1;
    this.o = a.source;
  }
  y(Yg, jg);
  Yg.prototype.J = function(a) {
    a.preventDefault();
    Vg() && (a = this.a) && (Xg() ? (a = yf().b, a.webkitCancelFullScreen ? a.webkitCancelFullScreen() : a.mozCancelFullScreen ? a.mozCancelFullScreen() : a.msExitFullscreen ? a.msExitFullscreen() : a.exitFullscreen && a.exitFullscreen()) : (a = this.o ? Bf(this.o) : a.tc(), this.B ? a.mozRequestFullScreenWithKeys ? a.mozRequestFullScreenWithKeys() : a.webkitRequestFullscreen ? a.webkitRequestFullscreen() : Wg(a) : Wg(a)));
  };
  Yg.prototype.A = function() {
    var a = this.f + "-true",
        c = this.f + "-false",
        d = Lf(this.element),
        e = this.a;
    Xg() ? (Pf(d, c) && (Rf(d, c), Qf(d, a)), Kf(this.l, this.j)) : (Pf(d, a) && (Rf(d, a), Qf(d, c)), Kf(this.j, this.l));
    e && e.Xc();
  };
  function Zg(a) {
    a = a ? a : {};
    var c = document.createElement("DIV");
    c.className = void 0 !== a.className ? a.className : "ol-mouse-position";
    jg.call(this, {
      element: c,
      render: a.render ? a.render : $g,
      target: a.target
    });
    D(this, Ob("projection"), this.El, this);
    a.coordinateFormat && this.Nh(a.coordinateFormat);
    a.projection && this.Xg(qd(a.projection));
    this.A = void 0 !== a.undefinedHTML ? a.undefinedHTML : "";
    this.o = c.innerHTML;
    this.l = this.j = this.f = null;
  }
  y(Zg, jg);
  function $g(a) {
    a = a.frameState;
    a ? this.f != a.viewState.projection && (this.f = a.viewState.projection, this.j = null) : this.f = null;
    ah(this, this.l);
  }
  l = Zg.prototype;
  l.El = function() {
    this.j = null;
  };
  l.rg = function() {
    return this.get("coordinateFormat");
  };
  l.Wg = function() {
    return this.get("projection");
  };
  l.Ak = function(a) {
    this.l = this.a.Td(a);
    ah(this, this.l);
  };
  l.Bk = function() {
    ah(this, null);
    this.l = null;
  };
  l.setMap = function(a) {
    Zg.ha.setMap.call(this, a);
    a && (a = a.a, this.s.push(D(a, "mousemove", this.Ak, this), D(a, "mouseout", this.Bk, this)));
  };
  l.Nh = function(a) {
    this.set("coordinateFormat", a);
  };
  l.Xg = function(a) {
    this.set("projection", a);
  };
  function ah(a, c) {
    var d = a.A;
    if (c && a.f) {
      if (!a.j) {
        var e = a.Wg();
        a.j = e ? ud(a.f, e) : Jd;
      }
      if (e = a.a.La(c))
        a.j(e, e), d = (d = a.rg()) ? d(e) : e.toString();
    }
    a.o && d == a.o || (a.element.innerHTML = d, a.o = d);
  }
  ;
  function bh(a, c) {
    var d = a;
    c && (d = pa(a, c));
    d = ch(d);
    !ja(aa.setImmediate) || aa.Window && aa.Window.prototype && aa.Window.prototype.setImmediate == aa.setImmediate ? (dh || (dh = eh()), dh(d)) : aa.setImmediate(d);
  }
  var dh;
  function eh() {
    var a = aa.MessageChannel;
    "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !ef("Presto") && (a = function() {
      var a = document.createElement("IFRAME");
      a.style.display = "none";
      a.src = "";
      document.documentElement.appendChild(a);
      var c = a.contentWindow,
          a = c.document;
      a.open();
      a.write("");
      a.close();
      var d = "callImmediate" + Math.random(),
          e = "file:" == c.location.protocol ? "*" : c.location.protocol + "//" + c.location.host,
          a = pa(function(a) {
            if (("*" == e || a.origin == e) && a.data == d)
              this.port1.onmessage();
          }, this);
      c.addEventListener("message", a, !1);
      this.port1 = {};
      this.port2 = {postMessage: function() {
          c.postMessage(d, e);
        }};
    });
    if ("undefined" !== typeof a && !ef("Trident") && !ef("MSIE")) {
      var c = new a,
          d = {},
          e = d;
      c.port1.onmessage = function() {
        if (ba(d.next)) {
          d = d.next;
          var a = d.hg;
          d.hg = null;
          a();
        }
      };
      return function(a) {
        e.next = {hg: a};
        e = e.next;
        c.port2.postMessage(0);
      };
    }
    return "undefined" !== typeof document && "onreadystatechange" in document.createElement("SCRIPT") ? function(a) {
      var c = document.createElement("SCRIPT");
      c.onreadystatechange = function() {
        c.onreadystatechange = null;
        c.parentNode.removeChild(c);
        c = null;
        a();
        a = null;
      };
      document.documentElement.appendChild(c);
    } : function(a) {
      aa.setTimeout(a, 0);
    };
  }
  var ch = hd;
  function fh(a, c) {
    this.a = {};
    this.b = [];
    this.g = 0;
    var d = arguments.length;
    if (1 < d) {
      if (d % 2)
        throw Error("Uneven number of arguments");
      for (var e = 0; e < d; e += 2)
        this.set(arguments[e], arguments[e + 1]);
    } else if (a) {
      var f;
      if (a instanceof fh)
        f = a.O(), e = a.vc();
      else {
        var d = [],
            g = 0;
        for (f in a)
          d[g++] = f;
        f = d;
        d = [];
        g = 0;
        for (e in a)
          d[g++] = a[e];
        e = d;
      }
      for (d = 0; d < f.length; d++)
        this.set(f[d], e[d]);
    }
  }
  l = fh.prototype;
  l.rc = function() {
    return this.g;
  };
  l.vc = function() {
    gh(this);
    for (var a = [],
        c = 0; c < this.b.length; c++)
      a.push(this.a[this.b[c]]);
    return a;
  };
  l.O = function() {
    gh(this);
    return this.b.concat();
  };
  l.Oa = function() {
    return 0 == this.g;
  };
  l.clear = function() {
    this.a = {};
    this.g = this.b.length = 0;
  };
  l.remove = function(a) {
    return hh(this.a, a) ? (delete this.a[a], this.g--, this.b.length > 2 * this.g && gh(this), !0) : !1;
  };
  function gh(a) {
    if (a.g != a.b.length) {
      for (var c = 0,
          d = 0; c < a.b.length; ) {
        var e = a.b[c];
        hh(a.a, e) && (a.b[d++] = e);
        c++;
      }
      a.b.length = d;
    }
    if (a.g != a.b.length) {
      for (var f = {},
          d = c = 0; c < a.b.length; )
        e = a.b[c], hh(f, e) || (a.b[d++] = e, f[e] = 1), c++;
      a.b.length = d;
    }
  }
  l.get = function(a, c) {
    return hh(this.a, a) ? this.a[a] : c;
  };
  l.set = function(a, c) {
    hh(this.a, a) || (this.g++, this.b.push(a));
    this.a[a] = c;
  };
  l.forEach = function(a, c) {
    for (var d = this.O(),
        e = 0; e < d.length; e++) {
      var f = d[e],
          g = this.get(f);
      a.call(c, g, f, this);
    }
  };
  l.clone = function() {
    return new fh(this);
  };
  function hh(a, c) {
    return Object.prototype.hasOwnProperty.call(a, c);
  }
  ;
  function ih() {
    this.b = ra();
  }
  new ih;
  ih.prototype.set = function(a) {
    this.b = a;
  };
  ih.prototype.get = function() {
    return this.b;
  };
  function jh(a, c, d) {
    Eb.call(this, a);
    this.b = c;
    a = d ? d : {};
    this.buttons = kh(a);
    this.pressure = lh(a, this.buttons);
    this.bubbles = "bubbles" in a ? a.bubbles : !1;
    this.cancelable = "cancelable" in a ? a.cancelable : !1;
    this.view = "view" in a ? a.view : null;
    this.detail = "detail" in a ? a.detail : null;
    this.screenX = "screenX" in a ? a.screenX : 0;
    this.screenY = "screenY" in a ? a.screenY : 0;
    this.clientX = "clientX" in a ? a.clientX : 0;
    this.clientY = "clientY" in a ? a.clientY : 0;
    this.button = "button" in a ? a.button : 0;
    this.relatedTarget = "relatedTarget" in a ? a.relatedTarget : null;
    this.pointerId = "pointerId" in a ? a.pointerId : 0;
    this.width = "width" in a ? a.width : 0;
    this.height = "height" in a ? a.height : 0;
    this.pointerType = "pointerType" in a ? a.pointerType : "";
    this.isPrimary = "isPrimary" in a ? a.isPrimary : !1;
    c.preventDefault && (this.preventDefault = function() {
      c.preventDefault();
    });
  }
  y(jh, Eb);
  function kh(a) {
    if (a.buttons || mh)
      a = a.buttons;
    else
      switch (a.which) {
        case 1:
          a = 1;
          break;
        case 2:
          a = 4;
          break;
        case 3:
          a = 2;
          break;
        default:
          a = 0;
      }
    return a;
  }
  function lh(a, c) {
    var d = 0;
    a.pressure ? d = a.pressure : d = c ? .5 : 0;
    return d;
  }
  var mh = !1;
  try {
    mh = 1 === (new MouseEvent("click", {buttons: 1})).buttons;
  } catch (a) {}
  ;
  function nh(a, c) {
    var d = document.createElement("CANVAS");
    a && (d.width = a);
    c && (d.height = c);
    return d.getContext("2d");
  }
  var oh = function() {
    var a;
    return function() {
      if (void 0 === a)
        if (aa.getComputedStyle) {
          var c = document.createElement("P"),
              d,
              e = {
                webkitTransform: "-webkit-transform",
                OTransform: "-o-transform",
                msTransform: "-ms-transform",
                MozTransform: "-moz-transform",
                transform: "transform"
              };
          document.body.appendChild(c);
          for (var f in e)
            f in c.style && (c.style[f] = "translate(1px,1px)", d = aa.getComputedStyle(c).getPropertyValue(e[f]));
          Jf(c);
          a = d && "none" !== d;
        } else
          a = !1;
      return a;
    };
  }(),
      ph = function() {
        var a;
        return function() {
          if (void 0 === a)
            if (aa.getComputedStyle) {
              var c = document.createElement("P"),
                  d,
                  e = {
                    webkitTransform: "-webkit-transform",
                    OTransform: "-o-transform",
                    msTransform: "-ms-transform",
                    MozTransform: "-moz-transform",
                    transform: "transform"
                  };
              document.body.appendChild(c);
              for (var f in e)
                f in c.style && (c.style[f] = "translate3d(1px,1px,1px)", d = aa.getComputedStyle(c).getPropertyValue(e[f]));
              Jf(c);
              a = d && "none" !== d;
            } else
              a = !1;
          return a;
        };
      }();
  function qh(a, c) {
    var d = a.style;
    d.WebkitTransform = c;
    d.MozTransform = c;
    d.b = c;
    d.msTransform = c;
    d.transform = c;
    kf && sf("9.0") && (a.style.transformOrigin = "0 0");
  }
  function rh(a, c) {
    var d;
    if (ph()) {
      var e = Array(16);
      for (d = 0; 16 > d; ++d)
        e[d] = c[d].toFixed(6);
      qh(a, "matrix3d(" + e.join(",") + ")");
    } else if (oh()) {
      var e = [c[0], c[1], c[4], c[5], c[12], c[13]],
          f = Array(6);
      for (d = 0; 6 > d; ++d)
        f[d] = e[d].toFixed(6);
      qh(a, "matrix(" + f.join(",") + ")");
    } else
      a.style.left = Math.round(c[12]) + "px", a.style.top = Math.round(c[13]) + "px";
  }
  ;
  var sh = ["experimental-webgl", "webgl", "webkit-3d", "moz-webgl"];
  function th(a, c) {
    var d,
        e,
        f = sh.length;
    for (e = 0; e < f; ++e)
      try {
        if (d = a.getContext(sh[e], c))
          return d;
      } catch (g) {}
    return null;
  }
  ;
  var uh,
      vh = "undefined" !== typeof navigator ? navigator.userAgent.toLowerCase() : "",
      wh = -1 !== vh.indexOf("firefox"),
      xh = -1 !== vh.indexOf("safari") && -1 === vh.indexOf("chrom"),
      yh = -1 !== vh.indexOf("macintosh"),
      zh = aa.devicePixelRatio || 1,
      Ah = !1,
      Bh = function() {
        if (!("HTMLCanvasElement" in aa))
          return !1;
        try {
          var a = nh();
          return a ? (void 0 !== a.setLineDash && (Ah = !0), !0) : !1;
        } catch (c) {
          return !1;
        }
      }(),
      Ch = "DeviceOrientationEvent" in aa,
      Dh = "geolocation" in aa.navigator,
      Eh = "ontouchstart" in aa,
      Fh = "PointerEvent" in aa,
      Gh = !!aa.navigator.msPointerEnabled,
      Hh = !1,
      Ih,
      Jh = [];
  if ("WebGLRenderingContext" in aa)
    try {
      var Kh = th(document.createElement("CANVAS"), {failIfMajorPerformanceCaveat: !0});
      Kh && (Hh = !0, Ih = Kh.getParameter(Kh.MAX_TEXTURE_SIZE), Jh = Kh.getSupportedExtensions());
    } catch (a) {}
  uh = Hh;
  ta = Jh;
  sa = Ih;
  function Lh(a, c) {
    this.b = a;
    this.c = c;
  }
  ;
  function Mh(a) {
    Lh.call(this, a, {
      mousedown: this.Vk,
      mousemove: this.Wk,
      mouseup: this.Zk,
      mouseover: this.Yk,
      mouseout: this.Xk
    });
    this.a = a.g;
    this.g = [];
  }
  y(Mh, Lh);
  function Nh(a, c) {
    for (var d = a.g,
        e = c.clientX,
        f = c.clientY,
        g = 0,
        h = d.length,
        k; g < h && (k = d[g]); g++) {
      var m = Math.abs(f - k[1]);
      if (25 >= Math.abs(e - k[0]) && 25 >= m)
        return !0;
    }
    return !1;
  }
  function Oh(a) {
    var c = Ph(a, a),
        d = c.preventDefault;
    c.preventDefault = function() {
      a.preventDefault();
      d();
    };
    c.pointerId = 1;
    c.isPrimary = !0;
    c.pointerType = "mouse";
    return c;
  }
  l = Mh.prototype;
  l.Vk = function(a) {
    if (!Nh(this, a)) {
      if ((1).toString() in this.a) {
        var c = Oh(a);
        Qh(this.b, Rh, c, a);
        delete this.a[(1).toString()];
      }
      c = Oh(a);
      this.a[(1).toString()] = a;
      Qh(this.b, Sh, c, a);
    }
  };
  l.Wk = function(a) {
    if (!Nh(this, a)) {
      var c = Oh(a);
      Qh(this.b, Th, c, a);
    }
  };
  l.Zk = function(a) {
    if (!Nh(this, a)) {
      var c = this.a[(1).toString()];
      c && c.button === a.button && (c = Oh(a), Qh(this.b, Uh, c, a), delete this.a[(1).toString()]);
    }
  };
  l.Yk = function(a) {
    if (!Nh(this, a)) {
      var c = Oh(a);
      Vh(this.b, c, a);
    }
  };
  l.Xk = function(a) {
    if (!Nh(this, a)) {
      var c = Oh(a);
      Wh(this.b, c, a);
    }
  };
  function Xh(a) {
    Lh.call(this, a, {
      MSPointerDown: this.dl,
      MSPointerMove: this.el,
      MSPointerUp: this.hl,
      MSPointerOut: this.fl,
      MSPointerOver: this.gl,
      MSPointerCancel: this.cl,
      MSGotPointerCapture: this.al,
      MSLostPointerCapture: this.bl
    });
    this.a = a.g;
    this.g = ["", "unavailable", "touch", "pen", "mouse"];
  }
  y(Xh, Lh);
  function Yh(a, c) {
    var d = c;
    ia(c.pointerType) && (d = Ph(c, c), d.pointerType = a.g[c.pointerType]);
    return d;
  }
  l = Xh.prototype;
  l.dl = function(a) {
    this.a[a.pointerId.toString()] = a;
    var c = Yh(this, a);
    Qh(this.b, Sh, c, a);
  };
  l.el = function(a) {
    var c = Yh(this, a);
    Qh(this.b, Th, c, a);
  };
  l.hl = function(a) {
    var c = Yh(this, a);
    Qh(this.b, Uh, c, a);
    delete this.a[a.pointerId.toString()];
  };
  l.fl = function(a) {
    var c = Yh(this, a);
    Wh(this.b, c, a);
  };
  l.gl = function(a) {
    var c = Yh(this, a);
    Vh(this.b, c, a);
  };
  l.cl = function(a) {
    var c = Yh(this, a);
    Qh(this.b, Rh, c, a);
    delete this.a[a.pointerId.toString()];
  };
  l.bl = function(a) {
    this.b.b(new jh("lostpointercapture", a, a));
  };
  l.al = function(a) {
    this.b.b(new jh("gotpointercapture", a, a));
  };
  function Zh(a) {
    Lh.call(this, a, {
      pointerdown: this.Bn,
      pointermove: this.Cn,
      pointerup: this.Fn,
      pointerout: this.Dn,
      pointerover: this.En,
      pointercancel: this.An,
      gotpointercapture: this.jk,
      lostpointercapture: this.Uk
    });
  }
  y(Zh, Lh);
  l = Zh.prototype;
  l.Bn = function(a) {
    $h(this.b, a);
  };
  l.Cn = function(a) {
    $h(this.b, a);
  };
  l.Fn = function(a) {
    $h(this.b, a);
  };
  l.Dn = function(a) {
    $h(this.b, a);
  };
  l.En = function(a) {
    $h(this.b, a);
  };
  l.An = function(a) {
    $h(this.b, a);
  };
  l.Uk = function(a) {
    $h(this.b, a);
  };
  l.jk = function(a) {
    $h(this.b, a);
  };
  function ai(a, c) {
    Lh.call(this, a, {
      touchstart: this.Io,
      touchmove: this.Ho,
      touchend: this.Go,
      touchcancel: this.Fo
    });
    this.a = a.g;
    this.j = c;
    this.g = void 0;
    this.i = 0;
    this.f = void 0;
  }
  y(ai, Lh);
  l = ai.prototype;
  l.Lh = function() {
    this.i = 0;
    this.f = void 0;
  };
  function bi(a, c, d) {
    c = Ph(c, d);
    c.pointerId = d.identifier + 2;
    c.bubbles = !0;
    c.cancelable = !0;
    c.detail = a.i;
    c.button = 0;
    c.buttons = 1;
    c.width = d.webkitRadiusX || d.radiusX || 0;
    c.height = d.webkitRadiusY || d.radiusY || 0;
    c.pressure = d.webkitForce || d.force || .5;
    c.isPrimary = a.g === d.identifier;
    c.pointerType = "touch";
    c.clientX = d.clientX;
    c.clientY = d.clientY;
    c.screenX = d.screenX;
    c.screenY = d.screenY;
    return c;
  }
  function ci(a, c, d) {
    function e() {
      c.preventDefault();
    }
    var f = Array.prototype.slice.call(c.changedTouches),
        g = f.length,
        h,
        k;
    for (h = 0; h < g; ++h)
      k = bi(a, c, f[h]), k.preventDefault = e, d.call(a, c, k);
  }
  l.Io = function(a) {
    var c = a.touches,
        d = Object.keys(this.a),
        e = d.length;
    if (e >= c.length) {
      var f = [],
          g,
          h,
          k;
      for (g = 0; g < e; ++g) {
        h = d[g];
        k = this.a[h];
        var m;
        if (!(m = 1 == h))
          a: {
            m = c.length;
            for (var n = void 0,
                p = 0; p < m; p++)
              if (n = c[p], n.identifier === h - 2) {
                m = !0;
                break a;
              }
            m = !1;
          }
        m || f.push(k.zc);
      }
      for (g = 0; g < f.length; ++g)
        this.Se(a, f[g]);
    }
    c = a.changedTouches[0];
    d = Object.keys(this.a).length;
    if (0 === d || 1 === d && (1).toString() in this.a)
      this.g = c.identifier, void 0 !== this.f && aa.clearTimeout(this.f);
    di(this, a);
    this.i++;
    ci(this, a, this.wn);
  };
  l.wn = function(a, c) {
    this.a[c.pointerId] = {
      target: c.target,
      zc: c,
      uh: c.target
    };
    var d = this.b;
    c.bubbles = !0;
    Qh(d, ei, c, a);
    d = this.b;
    c.bubbles = !1;
    Qh(d, fi, c, a);
    Qh(this.b, Sh, c, a);
  };
  l.Ho = function(a) {
    a.preventDefault();
    ci(this, a, this.$k);
  };
  l.$k = function(a, c) {
    var d = this.a[c.pointerId];
    if (d) {
      var e = d.zc,
          f = d.uh;
      Qh(this.b, Th, c, a);
      e && f !== c.target && (e.relatedTarget = c.target, c.relatedTarget = f, e.target = f, c.target ? (Wh(this.b, e, a), Vh(this.b, c, a)) : (c.target = f, c.relatedTarget = null, this.Se(a, c)));
      d.zc = c;
      d.uh = c.target;
    }
  };
  l.Go = function(a) {
    di(this, a);
    ci(this, a, this.Jo);
  };
  l.Jo = function(a, c) {
    Qh(this.b, Uh, c, a);
    this.b.zc(c, a);
    var d = this.b;
    c.bubbles = !1;
    Qh(d, gi, c, a);
    delete this.a[c.pointerId];
    c.isPrimary && (this.g = void 0, this.f = aa.setTimeout(this.Lh.bind(this), 200));
  };
  l.Fo = function(a) {
    ci(this, a, this.Se);
  };
  l.Se = function(a, c) {
    Qh(this.b, Rh, c, a);
    this.b.zc(c, a);
    var d = this.b;
    c.bubbles = !1;
    Qh(d, gi, c, a);
    delete this.a[c.pointerId];
    c.isPrimary && (this.g = void 0, this.f = aa.setTimeout(this.Lh.bind(this), 200));
  };
  function di(a, c) {
    var d = a.j.g,
        e = c.changedTouches[0];
    if (a.g === e.identifier) {
      var f = [e.clientX, e.clientY];
      d.push(f);
      aa.setTimeout(function() {
        Za(d, f);
      }, 2500);
    }
  }
  ;
  function hi(a) {
    Hb.call(this);
    this.i = a;
    this.g = {};
    this.c = {};
    this.a = [];
    Fh ? ii(this, new Zh(this)) : Gh ? ii(this, new Xh(this)) : (a = new Mh(this), ii(this, a), Eh && ii(this, new ai(this, a)));
    a = this.a.length;
    for (var c,
        d = 0; d < a; d++)
      c = this.a[d], ji(this, Object.keys(c.c));
  }
  y(hi, Hb);
  function ii(a, c) {
    var d = Object.keys(c.c);
    d && (d.forEach(function(a) {
      var d = c.c[a];
      d && (this.c[a] = d.bind(c));
    }, a), a.a.push(c));
  }
  hi.prototype.f = function(a) {
    var c = this.c[a.type];
    c && c(a);
  };
  function ji(a, c) {
    c.forEach(function(a) {
      D(this.i, a, this.f, this);
    }, a);
  }
  function ki(a, c) {
    c.forEach(function(a) {
      yb(this.i, a, this.f, this);
    }, a);
  }
  function Ph(a, c) {
    for (var d = {},
        e,
        f = 0,
        g = li.length; f < g; f++)
      e = li[f][0], d[e] = a[e] || c[e] || li[f][1];
    return d;
  }
  hi.prototype.zc = function(a, c) {
    a.bubbles = !0;
    Qh(this, mi, a, c);
  };
  function Wh(a, c, d) {
    a.zc(c, d);
    var e = c.relatedTarget;
    e && Mf(c.target, e) || (c.bubbles = !1, Qh(a, gi, c, d));
  }
  function Vh(a, c, d) {
    c.bubbles = !0;
    Qh(a, ei, c, d);
    var e = c.relatedTarget;
    e && Mf(c.target, e) || (c.bubbles = !1, Qh(a, fi, c, d));
  }
  function Qh(a, c, d, e) {
    a.b(new jh(c, e, d));
  }
  function $h(a, c) {
    a.b(new jh(c.type, c, c));
  }
  hi.prototype.fa = function() {
    for (var a = this.a.length,
        c,
        d = 0; d < a; d++)
      c = this.a[d], ki(this, Object.keys(c.c));
    hi.ha.fa.call(this);
  };
  var Th = "pointermove",
      Sh = "pointerdown",
      Uh = "pointerup",
      ei = "pointerover",
      mi = "pointerout",
      fi = "pointerenter",
      gi = "pointerleave",
      Rh = "pointercancel",
      li = [["bubbles", !1], ["cancelable", !1], ["view", null], ["detail", null], ["screenX", 0], ["screenY", 0], ["clientX", 0], ["clientY", 0], ["ctrlKey", !1], ["altKey", !1], ["shiftKey", !1], ["metaKey", !1], ["button", 0], ["relatedTarget", null], ["buttons", 0], ["pointerId", 0], ["width", 0], ["height", 0], ["pressure", 0], ["tiltX", 0], ["tiltY", 0], ["pointerType", ""], ["hwTimestamp", 0], ["isPrimary", !1], ["type", ""], ["target", null], ["currentTarget", null], ["which", 0]];
  function ni(a, c, d, e, f) {
    ig.call(this, a, c, f);
    this.originalEvent = d;
    this.pixel = c.Td(d);
    this.coordinate = c.La(this.pixel);
    this.dragging = void 0 !== e ? e : !1;
  }
  y(ni, ig);
  ni.prototype.preventDefault = function() {
    ni.ha.preventDefault.call(this);
    this.originalEvent.preventDefault();
  };
  ni.prototype.stopPropagation = function() {
    ni.ha.stopPropagation.call(this);
    this.originalEvent.stopPropagation();
  };
  function oi(a, c, d, e, f) {
    ni.call(this, a, c, d.b, e, f);
    this.b = d;
  }
  y(oi, ni);
  function pi(a) {
    Hb.call(this);
    this.f = a;
    this.j = 0;
    this.l = !1;
    this.c = [];
    this.g = null;
    a = this.f.a;
    this.T = 0;
    this.A = {};
    this.i = new hi(a);
    this.a = null;
    this.o = D(this.i, Sh, this.Dk, this);
    this.s = D(this.i, Th, this.co, this);
  }
  y(pi, Hb);
  function qi(a, c) {
    var d;
    d = new oi(ri, a.f, c);
    a.b(d);
    0 !== a.j ? (aa.clearTimeout(a.j), a.j = 0, d = new oi(si, a.f, c), a.b(d)) : a.j = aa.setTimeout(function() {
      this.j = 0;
      var a = new oi(ti, this.f, c);
      this.b(a);
    }.bind(a), 250);
  }
  function ui(a, c) {
    c.type == vi || c.type == wi ? delete a.A[c.pointerId] : c.type == xi && (a.A[c.pointerId] = !0);
    a.T = Object.keys(a.A).length;
  }
  l = pi.prototype;
  l.Gg = function(a) {
    ui(this, a);
    var c = new oi(vi, this.f, a);
    this.b(c);
    !this.l && 0 === a.button && qi(this, this.g);
    0 === this.T && (this.c.forEach(sb), this.c.length = 0, this.l = !1, this.g = null, Db(this.a), this.a = null);
  };
  l.Dk = function(a) {
    ui(this, a);
    var c = new oi(xi, this.f, a);
    this.b(c);
    this.g = a;
    0 === this.c.length && (this.a = new hi(document), this.c.push(D(this.a, yi, this.ul, this), D(this.a, vi, this.Gg, this), D(this.i, wi, this.Gg, this)));
  };
  l.ul = function(a) {
    if (a.clientX != this.g.clientX || a.clientY != this.g.clientY) {
      this.l = !0;
      var c = new oi(zi, this.f, a, this.l);
      this.b(c);
    }
    a.preventDefault();
  };
  l.co = function(a) {
    this.b(new oi(a.type, this.f, a, !(!this.g || a.clientX == this.g.clientX && a.clientY == this.g.clientY)));
  };
  l.fa = function() {
    this.s && (sb(this.s), this.s = null);
    this.o && (sb(this.o), this.o = null);
    this.c.forEach(sb);
    this.c.length = 0;
    this.a && (Db(this.a), this.a = null);
    this.i && (Db(this.i), this.i = null);
    pi.ha.fa.call(this);
  };
  var ti = "singleclick",
      ri = "click",
      si = "dblclick",
      zi = "pointerdrag",
      yi = "pointermove",
      xi = "pointerdown",
      vi = "pointerup",
      wi = "pointercancel",
      Ai = {
        ap: ti,
        Qo: ri,
        Ro: si,
        Uo: zi,
        Xo: yi,
        To: xi,
        $o: vi,
        Zo: "pointerover",
        Yo: "pointerout",
        Vo: "pointerenter",
        Wo: "pointerleave",
        So: wi
      };
  function Bi(a) {
    Mb.call(this);
    var c = mb({}, a);
    c.opacity = void 0 !== a.opacity ? a.opacity : 1;
    c.visible = void 0 !== a.visible ? a.visible : !0;
    c.zIndex = void 0 !== a.zIndex ? a.zIndex : 0;
    c.maxResolution = void 0 !== a.maxResolution ? a.maxResolution : Infinity;
    c.minResolution = void 0 !== a.minResolution ? a.minResolution : 0;
    this.C(c);
  }
  y(Bi, Mb);
  function Ci(a) {
    var c = a.Sb(),
        d = a.df(),
        e = a.wb(),
        f = a.G(),
        g = a.Tb(),
        h = a.Nb(),
        k = a.Ob();
    return {
      layer: a,
      opacity: Ma(c, 0, 1),
      H: d,
      visible: e,
      Pc: !0,
      extent: f,
      zIndex: g,
      maxResolution: h,
      minResolution: Math.max(k, 0)
    };
  }
  l = Bi.prototype;
  l.G = function() {
    return this.get("extent");
  };
  l.Nb = function() {
    return this.get("maxResolution");
  };
  l.Ob = function() {
    return this.get("minResolution");
  };
  l.Sb = function() {
    return this.get("opacity");
  };
  l.wb = function() {
    return this.get("visible");
  };
  l.Tb = function() {
    return this.get("zIndex");
  };
  l.cc = function(a) {
    this.set("extent", a);
  };
  l.kc = function(a) {
    this.set("maxResolution", a);
  };
  l.lc = function(a) {
    this.set("minResolution", a);
  };
  l.dc = function(a) {
    this.set("opacity", a);
  };
  l.ec = function(a) {
    this.set("visible", a);
  };
  l.fc = function(a) {
    this.set("zIndex", a);
  };
  function Di() {}
  ;
  function Ei(a, c, d, e, f, g) {
    Eb.call(this, a, c);
    this.vectorContext = d;
    this.frameState = e;
    this.context = f;
    this.glContext = g;
  }
  y(Ei, Eb);
  function Fi(a) {
    var c = mb({}, a);
    delete c.source;
    Bi.call(this, c);
    this.o = this.l = this.j = null;
    a.map && this.setMap(a.map);
    D(this, Ob("source"), this.Jk, this);
    this.Cc(a.source ? a.source : null);
  }
  y(Fi, Bi);
  function Gi(a, c) {
    return a.visible && c >= a.minResolution && c < a.maxResolution;
  }
  l = Fi.prototype;
  l.bf = function(a) {
    a = a ? a : [];
    a.push(Ci(this));
    return a;
  };
  l.da = function() {
    return this.get("source") || null;
  };
  l.df = function() {
    var a = this.da();
    return a ? a.V() : "undefined";
  };
  l.lm = function() {
    this.u();
  };
  l.Jk = function() {
    this.o && (sb(this.o), this.o = null);
    var a = this.da();
    a && (this.o = D(a, "change", this.lm, this));
    this.u();
  };
  l.setMap = function(a) {
    this.j && (sb(this.j), this.j = null);
    a || this.u();
    this.l && (sb(this.l), this.l = null);
    a && (this.j = D(a, "precompose", function(a) {
      var d = Ci(this);
      d.Pc = !1;
      d.zIndex = Infinity;
      a.frameState.layerStatesArray.push(d);
      a.frameState.layerStates[x(this)] = d;
    }, this), this.l = D(this, "change", a.render, a), this.u());
  };
  l.Cc = function(a) {
    this.set("source", a);
  };
  function Hi(a, c, d, e, f) {
    Hb.call(this);
    this.o = f;
    this.extent = a;
    this.f = d;
    this.resolution = c;
    this.state = e;
  }
  y(Hi, Hb);
  function Ii(a) {
    a.b("change");
  }
  Hi.prototype.ea = function() {
    return this.o;
  };
  Hi.prototype.G = function() {
    return this.extent;
  };
  Hi.prototype.Z = function() {
    return this.resolution;
  };
  Hi.prototype.V = function() {
    return this.state;
  };
  function Ji(a, c, d, e, f, g, h, k) {
    rc(a);
    0 === c && 0 === d || uc(a, c, d);
    1 == e && 1 == f || vc(a, e, f);
    0 !== g && wc(a, g);
    0 === h && 0 === k || uc(a, h, k);
    return a;
  }
  function Ki(a, c) {
    return a[0] == c[0] && a[1] == c[1] && a[4] == c[4] && a[5] == c[5] && a[12] == c[12] && a[13] == c[13];
  }
  function Li(a, c, d) {
    var e = a[1],
        f = a[5],
        g = a[13],
        h = c[0];
    c = c[1];
    d[0] = a[0] * h + a[4] * c + a[12];
    d[1] = e * h + f * c + g;
    return d;
  }
  ;
  function Mi(a) {
    Jb.call(this);
    this.a = a;
  }
  y(Mi, Jb);
  l = Mi.prototype;
  l.gb = ua;
  l.yc = function(a, c, d, e) {
    a = a.slice();
    Li(c.pixelToCoordinateMatrix, a, a);
    if (this.gb(a, c, fd, this))
      return d.call(e, this.a);
  };
  l.me = ed;
  l.cd = function(a, c, d) {
    return function(e, f) {
      return Jg(a, c, e, f, function(a) {
        d[e] || (d[e] = {});
        d[e][a.ja.toString()] = a;
      });
    };
  };
  l.pm = function(a) {
    2 === a.target.V() && Ni(this);
  };
  function Oi(a, c) {
    var d = c.V();
    2 != d && 3 != d && D(c, "change", a.pm, a);
    0 == d && (c.load(), d = c.V());
    return 2 == d;
  }
  function Ni(a) {
    var c = a.a;
    c.wb() && "ready" == c.df() && a.u();
  }
  function Pi(a, c) {
    c.lh() && a.postRenderFunctions.push(qa(function(a, c, f) {
      c = x(a).toString();
      a.mh(f.viewState.projection, f.usedTiles[c]);
    }, c));
  }
  function Qi(a, c) {
    if (c) {
      var d,
          e,
          f;
      e = 0;
      for (f = c.length; e < f; ++e)
        d = c[e], a[x(d).toString()] = d;
    }
  }
  function Ri(a, c) {
    var d = c.D;
    void 0 !== d && ("string" === typeof d ? a.logos[d] = "" : ka(d) && (a.logos[d.src] = d.href));
  }
  function Si(a, c, d, e) {
    c = x(c).toString();
    d = d.toString();
    c in a ? d in a[c] ? (a = a[c][d], e.ra < a.ra && (a.ra = e.ra), e.va > a.va && (a.va = e.va), e.xa < a.xa && (a.xa = e.xa), e.Aa > a.Aa && (a.Aa = e.Aa)) : a[c][d] = e : (a[c] = {}, a[c][d] = e);
  }
  function Ti(a, c, d) {
    return [c * (Math.round(a[0] / c) + d[0] % 2 / 2), c * (Math.round(a[1] / c) + d[1] % 2 / 2)];
  }
  function Ui(a, c, d, e, f, g, h, k, m, n) {
    var p = x(c).toString();
    p in a.wantedTiles || (a.wantedTiles[p] = {});
    var q = a.wantedTiles[p];
    a = a.tileQueue;
    var r = d.minZoom,
        t,
        v,
        w,
        z,
        C,
        A;
    for (A = h; A >= r; --A)
      for (v = yg(d, g, A, v), w = d.Z(A), z = v.ra; z <= v.va; ++z)
        for (C = v.xa; C <= v.Aa; ++C)
          h - A <= k ? (t = c.Qb(A, z, C, e, f), 0 == t.V() && (q[t.ja.toString()] = !0, t.eb() in a.g || a.f([t, p, Cg(d, t.ja), w])), void 0 !== m && m.call(n, t)) : c.Of(A, z, C, f);
  }
  ;
  function Vi(a) {
    this.A = a.opacity;
    this.B = a.rotateWithView;
    this.s = a.rotation;
    this.j = a.scale;
    this.J = a.snapToPixel;
  }
  l = Vi.prototype;
  l.qe = function() {
    return this.A;
  };
  l.Xd = function() {
    return this.B;
  };
  l.re = function() {
    return this.s;
  };
  l.se = function() {
    return this.j;
  };
  l.Yd = function() {
    return this.J;
  };
  l.te = function(a) {
    this.A = a;
  };
  l.ue = function(a) {
    this.s = a;
  };
  l.ve = function(a) {
    this.j = a;
  };
  function Wi(a) {
    a = a || {};
    this.c = void 0 !== a.anchor ? a.anchor : [.5, .5];
    this.f = null;
    this.a = void 0 !== a.anchorOrigin ? a.anchorOrigin : "top-left";
    this.l = void 0 !== a.anchorXUnits ? a.anchorXUnits : "fraction";
    this.o = void 0 !== a.anchorYUnits ? a.anchorYUnits : "fraction";
    var c = void 0 !== a.crossOrigin ? a.crossOrigin : null,
        d = void 0 !== a.img ? a.img : null,
        e = void 0 !== a.imgSize ? a.imgSize : null,
        f = a.src;
    void 0 !== f && 0 !== f.length || !d || (f = d.src || x(d).toString());
    var g = void 0 !== a.src ? 0 : 2,
        h = void 0 !== a.color ? Xe(a.color) : null,
        k = Xi.Zb(),
        m = k.get(f, c, h);
    m || (m = new Yi(d, f, e, c, g, h), k.set(f, c, h, m));
    this.b = m;
    this.D = void 0 !== a.offset ? a.offset : [0, 0];
    this.g = void 0 !== a.offsetOrigin ? a.offsetOrigin : "top-left";
    this.i = null;
    this.T = void 0 !== a.size ? a.size : null;
    Vi.call(this, {
      opacity: void 0 !== a.opacity ? a.opacity : 1,
      rotation: void 0 !== a.rotation ? a.rotation : 0,
      scale: void 0 !== a.scale ? a.scale : 1,
      snapToPixel: void 0 !== a.snapToPixel ? a.snapToPixel : !0,
      rotateWithView: void 0 !== a.rotateWithView ? a.rotateWithView : !1
    });
  }
  y(Wi, Vi);
  l = Wi.prototype;
  l.Yb = function() {
    if (this.f)
      return this.f;
    var a = this.c,
        c = this.Eb();
    if ("fraction" == this.l || "fraction" == this.o) {
      if (!c)
        return null;
      a = this.c.slice();
      "fraction" == this.l && (a[0] *= c[0]);
      "fraction" == this.o && (a[1] *= c[1]);
    }
    if ("top-left" != this.a) {
      if (!c)
        return null;
      a === this.c && (a = this.c.slice());
      if ("top-right" == this.a || "bottom-right" == this.a)
        a[0] = -a[0] + c[0];
      if ("bottom-left" == this.a || "bottom-right" == this.a)
        a[1] = -a[1] + c[1];
    }
    return this.f = a;
  };
  l.gc = function() {
    var a = this.b;
    return a.c ? a.c : a.a;
  };
  l.qd = function() {
    return this.b.f;
  };
  l.wd = function() {
    return this.b.g;
  };
  l.pe = function() {
    var a = this.b;
    if (!a.l)
      if (a.s) {
        var c = a.f[0],
            d = a.f[1],
            e = nh(c, d);
        e.fillRect(0, 0, c, d);
        a.l = e.canvas;
      } else
        a.l = a.a;
    return a.l;
  };
  l.Ha = function() {
    if (this.i)
      return this.i;
    var a = this.D;
    if ("top-left" != this.g) {
      var c = this.Eb(),
          d = this.b.f;
      if (!c || !d)
        return null;
      a = a.slice();
      if ("top-right" == this.g || "bottom-right" == this.g)
        a[0] = d[0] - c[0] - a[0];
      if ("bottom-left" == this.g || "bottom-right" == this.g)
        a[1] = d[1] - c[1] - a[1];
    }
    return this.i = a;
  };
  l.Tm = function() {
    return this.b.o;
  };
  l.Eb = function() {
    return this.T ? this.T : this.b.f;
  };
  l.hf = function(a, c) {
    return D(this.b, "change", a, c);
  };
  l.load = function() {
    this.b.load();
  };
  l.Nf = function(a, c) {
    yb(this.b, "change", a, c);
  };
  function Yi(a, c, d, e, f, g) {
    Hb.call(this);
    this.l = null;
    this.a = a ? a : new Image;
    null !== e && (this.a.crossOrigin = e);
    this.c = g ? document.createElement("CANVAS") : null;
    this.j = g;
    this.i = null;
    this.g = f;
    this.f = d;
    this.o = c;
    this.s = !1;
    2 == this.g && Zi(this);
  }
  y(Yi, Hb);
  function Zi(a) {
    var c = nh(1, 1);
    try {
      c.drawImage(a.a, 0, 0), c.getImageData(0, 0, 1, 1);
    } catch (d) {
      a.s = !0;
    }
  }
  Yi.prototype.A = function() {
    this.g = 3;
    this.i.forEach(sb);
    this.i = null;
    this.b("change");
  };
  Yi.prototype.T = function() {
    this.g = 2;
    this.f = [this.a.width, this.a.height];
    this.i.forEach(sb);
    this.i = null;
    Zi(this);
    if (!this.s && null !== this.j) {
      this.c.width = this.a.width;
      this.c.height = this.a.height;
      var a = this.c.getContext("2d");
      a.drawImage(this.a, 0, 0);
      for (var c = a.getImageData(0, 0, this.a.width, this.a.height),
          d = c.data,
          e = this.j[0] / 255,
          f = this.j[1] / 255,
          g = this.j[2] / 255,
          h = 0,
          k = d.length; h < k; h += 4)
        d[h] *= e, d[h + 1] *= f, d[h + 2] *= g;
      a.putImageData(c, 0, 0);
    }
    this.b("change");
  };
  Yi.prototype.load = function() {
    if (0 == this.g) {
      this.g = 1;
      this.i = [xb(this.a, "error", this.A, this), xb(this.a, "load", this.T, this)];
      try {
        this.a.src = this.o;
      } catch (a) {
        this.A();
      }
    }
  };
  function Xi() {
    this.b = {};
    this.a = 0;
  }
  da(Xi);
  Xi.prototype.clear = function() {
    this.b = {};
    this.a = 0;
  };
  Xi.prototype.get = function(a, c, d) {
    a = c + ":" + a + ":" + (d ? Ze(d) : "null");
    return a in this.b ? this.b[a] : null;
  };
  Xi.prototype.set = function(a, c, d, e) {
    this.b[c + ":" + a + ":" + (d ? Ze(d) : "null")] = e;
    ++this.a;
  };
  function $i(a, c) {
    zb.call(this);
    this.i = c;
    this.g = {};
    this.s = {};
  }
  y($i, zb);
  function aj(a) {
    var c = a.viewState,
        d = a.coordinateToPixelMatrix;
    Ji(d, a.size[0] / 2, a.size[1] / 2, 1 / c.resolution, -1 / c.resolution, -c.rotation, -c.center[0], -c.center[1]);
    tc(d, a.pixelToCoordinateMatrix);
  }
  l = $i.prototype;
  l.fa = function() {
    for (var a in this.g)
      Db(this.g[a]);
    $i.ha.fa.call(this);
  };
  function bj() {
    var a = Xi.Zb();
    if (32 < a.a) {
      var c = 0,
          d,
          e;
      for (d in a.b)
        e = a.b[d], 0 !== (c++ & 3) || Ib(e) || (delete a.b[d], --a.a);
    }
  }
  l.qf = function(a, c, d, e, f, g) {
    function h(a, f) {
      var g = x(a).toString(),
          h = c.layerStates[x(f)].Pc;
      if (!(g in c.skippedFeatureUids) || h)
        return d.call(e, a, h ? f : null);
    }
    var k,
        m = c.viewState,
        n = m.resolution,
        p = m.projection,
        m = a;
    if (p.b) {
      var p = p.G(),
          q = Wc(p),
          r = a[0];
      if (r < p[0] || r > p[2])
        m = [r + q * Math.ceil((p[0] - r) / q), a[1]];
    }
    p = c.layerStatesArray;
    for (q = p.length - 1; 0 <= q; --q) {
      var t = p[q],
          r = t.layer;
      if (Gi(t, n) && f.call(g, r) && (t = cj(this, r), r.da() && (k = t.gb(sg(r.da()) ? m : a, c, h, e)), k))
        return k;
    }
  };
  l.gh = function(a, c, d, e, f, g) {
    var h,
        k = c.viewState.resolution,
        m = c.layerStatesArray,
        n;
    for (n = m.length - 1; 0 <= n; --n) {
      h = m[n];
      var p = h.layer;
      if (Gi(h, k) && f.call(g, p) && (h = cj(this, p).yc(a, c, d, e)))
        return h;
    }
  };
  l.hh = function(a, c, d, e) {
    return void 0 !== this.qf(a, c, fd, this, d, e);
  };
  function cj(a, c) {
    var d = x(c).toString();
    if (d in a.g)
      return a.g[d];
    var e = a.Ve(c);
    a.g[d] = e;
    a.s[d] = D(e, "change", a.uk, a);
    return e;
  }
  l.uk = function() {
    this.i.render();
  };
  l.Ce = ua;
  l.ko = function(a, c) {
    for (var d in this.g)
      if (!(c && d in c.layerStates)) {
        var e = d,
            f = this.g[e];
        delete this.g[e];
        sb(this.s[e]);
        delete this.s[e];
        Db(f);
      }
  };
  function dj(a, c) {
    for (var d in a.g)
      if (!(d in c.layerStates)) {
        c.postRenderFunctions.push(a.ko.bind(a));
        break;
      }
  }
  function db(a, c) {
    return a.zIndex - c.zIndex;
  }
  ;
  function ej(a, c) {
    this.o = a;
    this.i = c;
    this.b = [];
    this.a = [];
    this.g = {};
  }
  ej.prototype.clear = function() {
    this.b.length = 0;
    this.a.length = 0;
    nb(this.g);
  };
  function fj(a) {
    var c = a.b,
        d = a.a,
        e = c[0];
    1 == c.length ? (c.length = 0, d.length = 0) : (c[0] = c.pop(), d[0] = d.pop(), gj(a, 0));
    c = a.i(e);
    delete a.g[c];
    return e;
  }
  ej.prototype.f = function(a) {
    var c = this.o(a);
    return Infinity != c ? (this.b.push(a), this.a.push(c), this.g[this.i(a)] = !0, hj(this, 0, this.b.length - 1), !0) : !1;
  };
  ej.prototype.rc = function() {
    return this.b.length;
  };
  ej.prototype.Oa = function() {
    return 0 === this.b.length;
  };
  function gj(a, c) {
    for (var d = a.b,
        e = a.a,
        f = d.length,
        g = d[c],
        h = e[c],
        k = c; c < f >> 1; ) {
      var m = 2 * c + 1,
          n = 2 * c + 2,
          m = n < f && e[n] < e[m] ? n : m;
      d[c] = d[m];
      e[c] = e[m];
      c = m;
    }
    d[c] = g;
    e[c] = h;
    hj(a, k, c);
  }
  function hj(a, c, d) {
    var e = a.b;
    a = a.a;
    for (var f = e[d],
        g = a[d]; d > c; ) {
      var h = d - 1 >> 1;
      if (a[h] > g)
        e[d] = e[h], a[d] = a[h], d = h;
      else
        break;
    }
    e[d] = f;
    a[d] = g;
  }
  function ij(a) {
    var c = a.o,
        d = a.b,
        e = a.a,
        f = 0,
        g = d.length,
        h,
        k,
        m;
    for (k = 0; k < g; ++k)
      h = d[k], m = c(h), Infinity == m ? delete a.g[a.i(h)] : (e[f] = m, d[f++] = h);
    d.length = f;
    e.length = f;
    for (c = (a.b.length >> 1) - 1; 0 <= c; c--)
      gj(a, c);
  }
  ;
  function jj(a, c) {
    ej.call(this, function(c) {
      return a.apply(null, c);
    }, function(a) {
      return a[0].eb();
    });
    this.s = c;
    this.c = 0;
    this.j = {};
  }
  y(jj, ej);
  jj.prototype.f = function(a) {
    var c = jj.ha.f.call(this, a);
    c && D(a[0], "change", this.l, this);
    return c;
  };
  jj.prototype.l = function(a) {
    a = a.target;
    var c = a.V();
    if (2 === c || 3 === c || 4 === c)
      yb(a, "change", this.l, this), a = a.eb(), a in this.j && (delete this.j[a], --this.c), this.s();
  };
  function kj(a, c, d) {
    for (var e = 0,
        f; a.c < c && e < d && 0 < a.rc(); )
      f = fj(a)[0], 0 === f.V() && (a.j[f.eb()] = !0, ++a.c, ++e, f.load());
  }
  ;
  function lj(a, c, d) {
    this.f = a;
    this.g = c;
    this.i = d;
    this.b = [];
    this.a = this.c = 0;
  }
  function mj(a, c) {
    var d = a.f,
        e = a.a,
        f = a.g - e,
        g = Math.log(a.g / a.a) / a.f;
    return He({
      source: c,
      duration: g,
      easing: function(a) {
        return e * (Math.exp(d * a * g) - 1) / f;
      }
    });
  }
  ;
  function nj(a) {
    Mb.call(this);
    this.A = null;
    this.i(!0);
    this.handleEvent = a.handleEvent;
  }
  y(nj, Mb);
  nj.prototype.f = function() {
    return this.get("active");
  };
  nj.prototype.j = function() {
    return this.A;
  };
  nj.prototype.i = function(a) {
    this.set("active", a);
  };
  nj.prototype.setMap = function(a) {
    this.A = a;
  };
  function oj(a, c, d, e, f) {
    if (void 0 !== d) {
      var g = c.Ka(),
          h = c.Wa();
      void 0 !== g && h && f && 0 < f && (a.Ra(Ie({
        rotation: g,
        duration: f,
        easing: De
      })), e && a.Ra(He({
        source: h,
        duration: f,
        easing: De
      })));
      c.rotate(d, e);
    }
  }
  function pj(a, c, d, e, f) {
    var g = c.Z();
    d = c.constrainResolution(g, d, 0);
    qj(a, c, d, e, f);
  }
  function qj(a, c, d, e, f) {
    if (d) {
      var g = c.Z(),
          h = c.Wa();
      void 0 !== g && h && d !== g && f && 0 < f && (a.Ra(Je({
        resolution: g,
        duration: f,
        easing: De
      })), e && a.Ra(He({
        source: h,
        duration: f,
        easing: De
      })));
      if (e) {
        var k;
        a = c.Wa();
        f = c.Z();
        void 0 !== a && void 0 !== f && (k = [e[0] - d * (e[0] - a[0]) / f, e[1] - d * (e[1] - a[1]) / f]);
        c.mb(k);
      }
      c.Vb(d);
    }
  }
  ;
  function rj(a) {
    a = a ? a : {};
    this.a = a.delta ? a.delta : 1;
    nj.call(this, {handleEvent: sj});
    this.c = void 0 !== a.duration ? a.duration : 250;
  }
  y(rj, nj);
  function sj(a) {
    var c = !1,
        d = a.originalEvent;
    if (a.type == si) {
      var c = a.map,
          e = a.coordinate,
          d = d.shiftKey ? -this.a : this.a,
          f = c.$();
      pj(c, f, d, e, this.c);
      a.preventDefault();
      c = !0;
    }
    return !c;
  }
  ;
  function tj(a) {
    a = a.originalEvent;
    return a.altKey && !(a.metaKey || a.ctrlKey) && a.shiftKey;
  }
  function uj(a) {
    a = a.originalEvent;
    return 0 == a.button && !(nf && yh && a.ctrlKey);
  }
  function vj(a) {
    return "pointermove" == a.type;
  }
  function wj(a) {
    return a.type == ti;
  }
  function xj(a) {
    a = a.originalEvent;
    return !a.altKey && !(a.metaKey || a.ctrlKey) && !a.shiftKey;
  }
  function yj(a) {
    a = a.originalEvent;
    return !a.altKey && !(a.metaKey || a.ctrlKey) && a.shiftKey;
  }
  function zj(a) {
    a = a.originalEvent.target.tagName;
    return "INPUT" !== a && "SELECT" !== a && "TEXTAREA" !== a;
  }
  function Aj(a) {
    return "mouse" == a.b.pointerType;
  }
  ;
  function Bj(a) {
    a = a ? a : {};
    nj.call(this, {handleEvent: a.handleEvent ? a.handleEvent : Cj});
    this.Ec = a.handleDownEvent ? a.handleDownEvent : ed;
    this.$c = a.handleDragEvent ? a.handleDragEvent : ua;
    this.Me = a.handleMoveEvent ? a.handleMoveEvent : ua;
    this.Ni = a.handleUpEvent ? a.handleUpEvent : ed;
    this.J = !1;
    this.Ca = {};
    this.l = [];
  }
  y(Bj, nj);
  function Dj(a) {
    for (var c = a.length,
        d = 0,
        e = 0,
        f = 0; f < c; f++)
      d += a[f].clientX, e += a[f].clientY;
    return [d / c, e / c];
  }
  function Cj(a) {
    if (!(a instanceof oi))
      return !0;
    var c = !1,
        d = a.type;
    if (d === xi || d === zi || d === vi)
      d = a.b, a.type == vi ? delete this.Ca[d.pointerId] : a.type == xi ? this.Ca[d.pointerId] = d : d.pointerId in this.Ca && (this.Ca[d.pointerId] = d), this.l = ob(this.Ca);
    this.J && (a.type == zi ? this.$c(a) : a.type == vi && (this.J = this.Ni(a)));
    a.type == xi ? (this.J = a = this.Ec(a), c = this.Dc(a)) : a.type == yi && this.Me(a);
    return !c;
  }
  Bj.prototype.Dc = hd;
  function Ej(a) {
    Bj.call(this, {
      handleDownEvent: Fj,
      handleDragEvent: Gj,
      handleUpEvent: Hj
    });
    a = a ? a : {};
    this.a = a.kinetic;
    this.c = this.o = null;
    this.B = a.condition ? a.condition : xj;
    this.s = !1;
  }
  y(Ej, Bj);
  function Gj(a) {
    var c = Dj(this.l);
    this.a && this.a.b.push(c[0], c[1], Date.now());
    if (this.c) {
      var d = this.c[0] - c[0],
          e = c[1] - this.c[1];
      a = a.map;
      var f = a.$(),
          g = f.V(),
          e = d = [d, e],
          h = g.resolution;
      e[0] *= h;
      e[1] *= h;
      gc(d, g.rotation);
      bc(d, g.center);
      d = f.Qd(d);
      a.render();
      f.mb(d);
    }
    this.c = c;
  }
  function Hj(a) {
    a = a.map;
    var c = a.$();
    if (0 === this.l.length) {
      var d;
      if (d = !this.s && this.a)
        if (d = this.a, 6 > d.b.length)
          d = !1;
        else {
          var e = Date.now() - d.i,
              f = d.b.length - 3;
          if (d.b[f + 2] < e)
            d = !1;
          else {
            for (var g = f - 3; 0 < g && d.b[g + 2] > e; )
              g -= 3;
            var e = d.b[f + 2] - d.b[g + 2],
                h = d.b[f] - d.b[g],
                f = d.b[f + 1] - d.b[g + 1];
            d.c = Math.atan2(f, h);
            d.a = Math.sqrt(h * h + f * f) / e;
            d = d.a > d.g;
          }
        }
      d && (d = this.a, d = (d.g - d.a) / d.f, f = this.a.c, g = c.Wa(), this.o = mj(this.a, g), a.Ra(this.o), g = a.Ta(g), d = a.La([g[0] - d * Math.cos(f), g[1] - d * Math.sin(f)]), d = c.Qd(d), c.mb(d));
      Be(c, -1);
      a.render();
      return !1;
    }
    this.c = null;
    return !0;
  }
  function Fj(a) {
    if (0 < this.l.length && this.B(a)) {
      var c = a.map,
          d = c.$();
      this.c = null;
      this.J || Be(d, 1);
      c.render();
      this.o && Za(c.H, this.o) && (d.mb(a.frameState.viewState.center), this.o = null);
      this.a && (a = this.a, a.b.length = 0, a.c = 0, a.a = 0);
      this.s = 1 < this.l.length;
      return !0;
    }
    return !1;
  }
  Ej.prototype.Dc = ed;
  function Ij(a) {
    a = a ? a : {};
    Bj.call(this, {
      handleDownEvent: Jj,
      handleDragEvent: Kj,
      handleUpEvent: Lj
    });
    this.c = a.condition ? a.condition : tj;
    this.a = void 0;
    this.o = void 0 !== a.duration ? a.duration : 250;
  }
  y(Ij, Bj);
  function Kj(a) {
    if (Aj(a)) {
      var c = a.map,
          d = c.Va();
      a = a.pixel;
      d = Math.atan2(d[1] / 2 - a[1], a[0] - d[0] / 2);
      if (void 0 !== this.a) {
        a = d - this.a;
        var e = c.$(),
            f = e.Ka();
        c.render();
        oj(c, e, f - a);
      }
      this.a = d;
    }
  }
  function Lj(a) {
    if (!Aj(a))
      return !0;
    a = a.map;
    var c = a.$();
    Be(c, -1);
    var d = c.Ka(),
        e = this.o,
        d = c.constrainRotation(d, 0);
    oj(a, c, d, void 0, e);
    return !1;
  }
  function Jj(a) {
    return Aj(a) && uj(a) && this.c(a) ? (a = a.map, Be(a.$(), 1), a.render(), this.a = void 0, !0) : !1;
  }
  Ij.prototype.Dc = ed;
  function Mj(a) {
    this.f = null;
    this.a = document.createElement("div");
    this.a.style.position = "absolute";
    this.a.className = "ol-box " + a;
    this.g = this.c = this.b = null;
  }
  y(Mj, zb);
  Mj.prototype.fa = function() {
    this.setMap(null);
    Mj.ha.fa.call(this);
  };
  function Nj(a) {
    var c = a.c,
        d = a.g;
    a = a.a.style;
    a.left = Math.min(c[0], d[0]) + "px";
    a.top = Math.min(c[1], d[1]) + "px";
    a.width = Math.abs(d[0] - c[0]) + "px";
    a.height = Math.abs(d[1] - c[1]) + "px";
  }
  Mj.prototype.setMap = function(a) {
    if (this.b) {
      this.b.B.removeChild(this.a);
      var c = this.a.style;
      c.left = c.top = c.width = c.height = "inherit";
    }
    (this.b = a) && this.b.B.appendChild(this.a);
  };
  function Oj(a) {
    var c = a.c,
        d = a.g,
        c = [c, [c[0], d[1]], d, [d[0], c[1]]].map(a.b.La, a.b);
    c[4] = c[0].slice();
    a.f ? a.f.la([c]) : a.f = new F([c]);
  }
  Mj.prototype.X = function() {
    return this.f;
  };
  function Pj(a, c, d) {
    Eb.call(this, a);
    this.coordinate = c;
    this.mapBrowserEvent = d;
  }
  y(Pj, Eb);
  function Qj(a) {
    Bj.call(this, {
      handleDownEvent: Rj,
      handleDragEvent: Sj,
      handleUpEvent: Tj
    });
    a = a ? a : {};
    this.a = new Mj(a.className || "ol-dragbox");
    this.c = null;
    this.D = a.condition ? a.condition : fd;
    this.B = a.boxEndCondition ? a.boxEndCondition : Uj;
  }
  y(Qj, Bj);
  function Uj(a, c, d) {
    a = d[0] - c[0];
    c = d[1] - c[1];
    return 64 <= a * a + c * c;
  }
  function Sj(a) {
    if (Aj(a)) {
      var c = this.a,
          d = a.pixel;
      c.c = this.c;
      c.g = d;
      Oj(c);
      Nj(c);
      this.b(new Pj("boxdrag", a.coordinate, a));
    }
  }
  Qj.prototype.X = function() {
    return this.a.X();
  };
  Qj.prototype.s = ua;
  function Tj(a) {
    if (!Aj(a))
      return !0;
    this.a.setMap(null);
    this.B(a, this.c, a.pixel) && (this.s(a), this.b(new Pj("boxend", a.coordinate, a)));
    return !1;
  }
  function Rj(a) {
    if (Aj(a) && uj(a) && this.D(a)) {
      this.c = a.pixel;
      this.a.setMap(a.map);
      var c = this.a,
          d = this.c;
      c.c = this.c;
      c.g = d;
      Oj(c);
      Nj(c);
      this.b(new Pj("boxstart", a.coordinate, a));
      return !0;
    }
    return !1;
  }
  ;
  function Vj(a) {
    a = a ? a : {};
    var c = a.condition ? a.condition : yj;
    this.o = void 0 !== a.duration ? a.duration : 200;
    Qj.call(this, {
      condition: c,
      className: a.className || "ol-dragzoom"
    });
  }
  y(Vj, Qj);
  Vj.prototype.s = function() {
    var a = this.A,
        c = a.$(),
        d = a.Va(),
        e = this.X().G(),
        d = c.constrainResolution(Math.max(Wc(e) / d[0], Xc(e) / d[1])),
        f = c.Z(),
        g = c.Wa();
    a.Ra(Je({
      resolution: f,
      duration: this.o,
      easing: De
    }));
    a.Ra(He({
      source: g,
      duration: this.o,
      easing: De
    }));
    c.mb(Yc(e));
    c.Vb(d);
  };
  function Wj(a) {
    nj.call(this, {handleEvent: Xj});
    a = a || {};
    this.a = void 0 !== a.condition ? a.condition : jd(xj, zj);
    this.c = void 0 !== a.duration ? a.duration : 100;
    this.l = void 0 !== a.pixelDelta ? a.pixelDelta : 128;
  }
  y(Wj, nj);
  function Xj(a) {
    var c = !1;
    if ("keydown" == a.type) {
      var d = a.originalEvent.keyCode;
      if (this.a(a) && (40 == d || 37 == d || 39 == d || 38 == d)) {
        var e = a.map,
            c = e.$(),
            f = c.Z() * this.l,
            g = 0,
            h = 0;
        40 == d ? h = -f : 37 == d ? g = -f : 39 == d ? g = f : h = f;
        d = [g, h];
        gc(d, c.Ka());
        f = this.c;
        if (g = c.Wa())
          f && 0 < f && e.Ra(He({
            source: g,
            duration: f,
            easing: Fe
          })), e = c.Qd([g[0] + d[0], g[1] + d[1]]), c.mb(e);
        a.preventDefault();
        c = !0;
      }
    }
    return !c;
  }
  ;
  function Yj(a) {
    nj.call(this, {handleEvent: Zj});
    a = a ? a : {};
    this.c = a.condition ? a.condition : zj;
    this.a = a.delta ? a.delta : 1;
    this.l = void 0 !== a.duration ? a.duration : 100;
  }
  y(Yj, nj);
  function Zj(a) {
    var c = !1;
    if ("keydown" == a.type || "keypress" == a.type) {
      var d = a.originalEvent.charCode;
      if (this.c(a) && (43 == d || 45 == d)) {
        c = a.map;
        d = 43 == d ? this.a : -this.a;
        c.render();
        var e = c.$();
        pj(c, e, d, void 0, this.l);
        a.preventDefault();
        c = !0;
      }
    }
    return !c;
  }
  ;
  function ak(a) {
    nj.call(this, {handleEvent: bk});
    a = a || {};
    this.c = 0;
    this.J = void 0 !== a.duration ? a.duration : 250;
    this.s = void 0 !== a.useAnchor ? a.useAnchor : !0;
    this.a = null;
    this.o = this.l = void 0;
  }
  y(ak, nj);
  function bk(a) {
    var c = !1;
    if ("wheel" == a.type || "mousewheel" == a.type) {
      var c = a.map,
          d = a.originalEvent;
      this.s && (this.a = a.coordinate);
      var e;
      "wheel" == a.type ? (e = d.deltaY, wh && d.deltaMode === aa.WheelEvent.DOM_DELTA_PIXEL && (e /= zh), d.deltaMode === aa.WheelEvent.DOM_DELTA_LINE && (e *= 40)) : "mousewheel" == a.type && (e = -d.wheelDeltaY, xh && (e /= 3));
      this.c += e;
      void 0 === this.l && (this.l = Date.now());
      e = Math.max(80 - (Date.now() - this.l), 0);
      aa.clearTimeout(this.o);
      this.o = aa.setTimeout(this.B.bind(this, c), e);
      a.preventDefault();
      c = !0;
    }
    return !c;
  }
  ak.prototype.B = function(a) {
    var c = Ma(this.c, -1, 1),
        d = a.$();
    a.render();
    pj(a, d, -c, this.a, this.J);
    this.c = 0;
    this.a = null;
    this.o = this.l = void 0;
  };
  ak.prototype.D = function(a) {
    this.s = a;
    a || (this.a = null);
  };
  function ck(a) {
    Bj.call(this, {
      handleDownEvent: dk,
      handleDragEvent: ek,
      handleUpEvent: fk
    });
    a = a || {};
    this.c = null;
    this.o = void 0;
    this.a = !1;
    this.s = 0;
    this.D = void 0 !== a.threshold ? a.threshold : .3;
    this.B = void 0 !== a.duration ? a.duration : 250;
  }
  y(ck, Bj);
  function ek(a) {
    var c = 0,
        d = this.l[0],
        e = this.l[1],
        d = Math.atan2(e.clientY - d.clientY, e.clientX - d.clientX);
    void 0 !== this.o && (c = d - this.o, this.s += c, !this.a && Math.abs(this.s) > this.D && (this.a = !0));
    this.o = d;
    a = a.map;
    d = Zf(a.a);
    e = Dj(this.l);
    e[0] -= d.x;
    e[1] -= d.y;
    this.c = a.La(e);
    this.a && (d = a.$(), e = d.Ka(), a.render(), oj(a, d, e + c, this.c));
  }
  function fk(a) {
    if (2 > this.l.length) {
      a = a.map;
      var c = a.$();
      Be(c, -1);
      if (this.a) {
        var d = c.Ka(),
            e = this.c,
            f = this.B,
            d = c.constrainRotation(d, 0);
        oj(a, c, d, e, f);
      }
      return !1;
    }
    return !0;
  }
  function dk(a) {
    return 2 <= this.l.length ? (a = a.map, this.c = null, this.o = void 0, this.a = !1, this.s = 0, this.J || Be(a.$(), 1), a.render(), !0) : !1;
  }
  ck.prototype.Dc = ed;
  function gk(a) {
    Bj.call(this, {
      handleDownEvent: hk,
      handleDragEvent: ik,
      handleUpEvent: jk
    });
    a = a ? a : {};
    this.c = null;
    this.s = void 0 !== a.duration ? a.duration : 400;
    this.a = void 0;
    this.o = 1;
  }
  y(gk, Bj);
  function ik(a) {
    var c = 1,
        d = this.l[0],
        e = this.l[1],
        f = d.clientX - e.clientX,
        d = d.clientY - e.clientY,
        f = Math.sqrt(f * f + d * d);
    void 0 !== this.a && (c = this.a / f);
    this.a = f;
    1 != c && (this.o = c);
    a = a.map;
    var f = a.$(),
        d = f.Z(),
        e = Zf(a.a),
        g = Dj(this.l);
    g[0] -= e.x;
    g[1] -= e.y;
    this.c = a.La(g);
    a.render();
    qj(a, f, d * c, this.c);
  }
  function jk(a) {
    if (2 > this.l.length) {
      a = a.map;
      var c = a.$();
      Be(c, -1);
      var d = c.Z(),
          e = this.c,
          f = this.s,
          d = c.constrainResolution(d, 0, this.o - 1);
      qj(a, c, d, e, f);
      return !1;
    }
    return !0;
  }
  function hk(a) {
    return 2 <= this.l.length ? (a = a.map, this.c = null, this.a = void 0, this.o = 1, this.J || Be(a.$(), 1), a.render(), !0) : !1;
  }
  gk.prototype.Dc = ed;
  function kk(a) {
    a = a ? a : {};
    var c = new Se,
        d = new lj(-.005, .05, 100);
    (void 0 !== a.altShiftDragRotate ? a.altShiftDragRotate : 1) && c.push(new Ij);
    (void 0 !== a.doubleClickZoom ? a.doubleClickZoom : 1) && c.push(new rj({
      delta: a.zoomDelta,
      duration: a.zoomDuration
    }));
    (void 0 !== a.dragPan ? a.dragPan : 1) && c.push(new Ej({kinetic: d}));
    (void 0 !== a.pinchRotate ? a.pinchRotate : 1) && c.push(new ck);
    (void 0 !== a.pinchZoom ? a.pinchZoom : 1) && c.push(new gk({duration: a.zoomDuration}));
    if (void 0 !== a.keyboard ? a.keyboard : 1)
      c.push(new Wj), c.push(new Yj({
        delta: a.zoomDelta,
        duration: a.zoomDuration
      }));
    (void 0 !== a.mouseWheelZoom ? a.mouseWheelZoom : 1) && c.push(new ak({duration: a.zoomDuration}));
    (void 0 !== a.shiftDragZoom ? a.shiftDragZoom : 1) && c.push(new Vj({duration: a.zoomDuration}));
    return c;
  }
  ;
  function lk(a) {
    var c = a || {};
    a = mb({}, c);
    delete a.layers;
    c = c.layers;
    Bi.call(this, a);
    this.f = [];
    this.a = {};
    D(this, Ob("layers"), this.wk, this);
    c ? fa(c) && (c = new Se(c.slice())) : c = new Se;
    this.dh(c);
  }
  y(lk, Bi);
  l = lk.prototype;
  l.ae = function() {
    this.wb() && this.u();
  };
  l.wk = function() {
    this.f.forEach(sb);
    this.f.length = 0;
    var a = this.Sc();
    this.f.push(D(a, "add", this.vk, this), D(a, "remove", this.xk, this));
    for (var c in this.a)
      this.a[c].forEach(sb);
    nb(this.a);
    var a = a.a,
        d,
        e;
    c = 0;
    for (d = a.length; c < d; c++)
      e = a[c], this.a[x(e).toString()] = [D(e, "propertychange", this.ae, this), D(e, "change", this.ae, this)];
    this.u();
  };
  l.vk = function(a) {
    a = a.element;
    var c = x(a).toString();
    this.a[c] = [D(a, "propertychange", this.ae, this), D(a, "change", this.ae, this)];
    this.u();
  };
  l.xk = function(a) {
    a = x(a.element).toString();
    this.a[a].forEach(sb);
    delete this.a[a];
    this.u();
  };
  l.Sc = function() {
    return this.get("layers");
  };
  l.dh = function(a) {
    this.set("layers", a);
  };
  l.bf = function(a) {
    var c = void 0 !== a ? a : [],
        d = c.length;
    this.Sc().forEach(function(a) {
      a.bf(c);
    });
    a = Ci(this);
    var e,
        f;
    for (e = c.length; d < e; d++)
      f = c[d], f.opacity *= a.opacity, f.visible = f.visible && a.visible, f.maxResolution = Math.min(f.maxResolution, a.maxResolution), f.minResolution = Math.max(f.minResolution, a.minResolution), void 0 !== a.extent && (f.extent = void 0 !== f.extent ? $c(f.extent, a.extent) : a.extent);
    return c;
  };
  l.df = function() {
    return "ready";
  };
  function mk(a) {
    nd.call(this, {
      code: a,
      units: "m",
      extent: nk,
      global: !0,
      worldExtent: ok
    });
  }
  y(mk, nd);
  mk.prototype.getPointResolution = function(a, c) {
    return a / Na(c[1] / 6378137);
  };
  var pk = 6378137 * Math.PI,
      nk = [-pk, -pk, pk, pk],
      ok = [-180, -85, 180, 85],
      Ad = "EPSG:3857 EPSG:102100 EPSG:102113 EPSG:900913 urn:ogc:def:crs:EPSG:6.18:3:3857 urn:ogc:def:crs:EPSG::3857 http://www.opengis.net/gml/srs/epsg.xml#3857".split(" ").map(function(a) {
        return new mk(a);
      });
  function Bd(a, c, d) {
    var e = a.length;
    d = 1 < d ? d : 2;
    void 0 === c && (2 < d ? c = a.slice() : c = Array(e));
    for (var f = 0; f < e; f += d)
      c[f] = 6378137 * Math.PI * a[f] / 180, c[f + 1] = 6378137 * Math.log(Math.tan(Math.PI * (a[f + 1] + 90) / 360));
    return c;
  }
  function Cd(a, c, d) {
    var e = a.length;
    d = 1 < d ? d : 2;
    void 0 === c && (2 < d ? c = a.slice() : c = Array(e));
    for (var f = 0; f < e; f += d)
      c[f] = 180 * a[f] / (6378137 * Math.PI), c[f + 1] = 360 * Math.atan(Math.exp(a[f + 1] / 6378137)) / Math.PI - 90;
    return c;
  }
  ;
  var qk = new kd(6378137);
  function rk(a, c) {
    nd.call(this, {
      code: a,
      units: "degrees",
      extent: sk,
      axisOrientation: c,
      global: !0,
      metersPerUnit: tk,
      worldExtent: sk
    });
  }
  y(rk, nd);
  rk.prototype.getPointResolution = function(a) {
    return a;
  };
  var sk = [-180, -90, 180, 90],
      tk = Math.PI * qk.radius / 180,
      Dd = [new rk("CRS:84"), new rk("EPSG:4326", "neu"), new rk("urn:ogc:def:crs:EPSG::4326", "neu"), new rk("urn:ogc:def:crs:EPSG:6.6:4326", "neu"), new rk("urn:ogc:def:crs:OGC:1.3:CRS84"), new rk("urn:ogc:def:crs:OGC:2:84"), new rk("http://www.opengis.net/gml/srs/epsg.xml#4326", "neu"), new rk("urn:x-ogc:def:crs:EPSG:4326", "neu")];
  function uk() {
    rd(Ad);
    rd(Dd);
    zd();
  }
  ;
  function vk(a) {
    Fi.call(this, a ? a : {});
  }
  y(vk, Fi);
  function G(a) {
    a = a ? a : {};
    var c = mb({}, a);
    delete c.preload;
    delete c.useInterimTilesOnError;
    Fi.call(this, c);
    this.c(void 0 !== a.preload ? a.preload : 0);
    this.i(void 0 !== a.useInterimTilesOnError ? a.useInterimTilesOnError : !0);
  }
  y(G, Fi);
  G.prototype.a = function() {
    return this.get("preload");
  };
  G.prototype.c = function(a) {
    this.set("preload", a);
  };
  G.prototype.f = function() {
    return this.get("useInterimTilesOnError");
  };
  G.prototype.i = function(a) {
    this.set("useInterimTilesOnError", a);
  };
  var wk = [0, 0, 0, 1],
      xk = [],
      yk = [0, 0, 0, 1];
  function zk(a, c, d, e) {
    0 !== c && (a.translate(d, e), a.rotate(c), a.translate(-d, -e));
  }
  ;
  function Ak(a) {
    a = a || {};
    this.b = void 0 !== a.color ? a.color : null;
    this.a = void 0;
  }
  Ak.prototype.g = function() {
    return this.b;
  };
  Ak.prototype.f = function(a) {
    this.b = a;
    this.a = void 0;
  };
  function Bk(a) {
    void 0 === a.a && (a.a = a.b instanceof CanvasPattern || a.b instanceof CanvasGradient ? x(a.b).toString() : "f" + (a.b ? Ze(a.b) : "-"));
    return a.a;
  }
  ;
  function Ck() {
    this.a = -1;
  }
  ;
  function Dk() {
    this.a = -1;
    this.a = 64;
    this.b = Array(4);
    this.c = Array(this.a);
    this.f = this.g = 0;
    this.b[0] = 1732584193;
    this.b[1] = 4023233417;
    this.b[2] = 2562383102;
    this.b[3] = 271733878;
    this.f = this.g = 0;
  }
  y(Dk, Ck);
  function Ek(a, c, d) {
    d || (d = 0);
    var e = Array(16);
    if (ha(c))
      for (var f = 0; 16 > f; ++f)
        e[f] = c.charCodeAt(d++) | c.charCodeAt(d++) << 8 | c.charCodeAt(d++) << 16 | c.charCodeAt(d++) << 24;
    else
      for (f = 0; 16 > f; ++f)
        e[f] = c[d++] | c[d++] << 8 | c[d++] << 16 | c[d++] << 24;
    c = a.b[0];
    d = a.b[1];
    var f = a.b[2],
        g = a.b[3],
        h = 0,
        h = c + (g ^ d & (f ^ g)) + e[0] + 3614090360 & 4294967295;
    c = d + (h << 7 & 4294967295 | h >>> 25);
    h = g + (f ^ c & (d ^ f)) + e[1] + 3905402710 & 4294967295;
    g = c + (h << 12 & 4294967295 | h >>> 20);
    h = f + (d ^ g & (c ^ d)) + e[2] + 606105819 & 4294967295;
    f = g + (h << 17 & 4294967295 | h >>> 15);
    h = d + (c ^ f & (g ^ c)) + e[3] + 3250441966 & 4294967295;
    d = f + (h << 22 & 4294967295 | h >>> 10);
    h = c + (g ^ d & (f ^ g)) + e[4] + 4118548399 & 4294967295;
    c = d + (h << 7 & 4294967295 | h >>> 25);
    h = g + (f ^ c & (d ^ f)) + e[5] + 1200080426 & 4294967295;
    g = c + (h << 12 & 4294967295 | h >>> 20);
    h = f + (d ^ g & (c ^ d)) + e[6] + 2821735955 & 4294967295;
    f = g + (h << 17 & 4294967295 | h >>> 15);
    h = d + (c ^ f & (g ^ c)) + e[7] + 4249261313 & 4294967295;
    d = f + (h << 22 & 4294967295 | h >>> 10);
    h = c + (g ^ d & (f ^ g)) + e[8] + 1770035416 & 4294967295;
    c = d + (h << 7 & 4294967295 | h >>> 25);
    h = g + (f ^ c & (d ^ f)) + e[9] + 2336552879 & 4294967295;
    g = c + (h << 12 & 4294967295 | h >>> 20);
    h = f + (d ^ g & (c ^ d)) + e[10] + 4294925233 & 4294967295;
    f = g + (h << 17 & 4294967295 | h >>> 15);
    h = d + (c ^ f & (g ^ c)) + e[11] + 2304563134 & 4294967295;
    d = f + (h << 22 & 4294967295 | h >>> 10);
    h = c + (g ^ d & (f ^ g)) + e[12] + 1804603682 & 4294967295;
    c = d + (h << 7 & 4294967295 | h >>> 25);
    h = g + (f ^ c & (d ^ f)) + e[13] + 4254626195 & 4294967295;
    g = c + (h << 12 & 4294967295 | h >>> 20);
    h = f + (d ^ g & (c ^ d)) + e[14] + 2792965006 & 4294967295;
    f = g + (h << 17 & 4294967295 | h >>> 15);
    h = d + (c ^ f & (g ^ c)) + e[15] + 1236535329 & 4294967295;
    d = f + (h << 22 & 4294967295 | h >>> 10);
    h = c + (f ^ g & (d ^ f)) + e[1] + 4129170786 & 4294967295;
    c = d + (h << 5 & 4294967295 | h >>> 27);
    h = g + (d ^ f & (c ^ d)) + e[6] + 3225465664 & 4294967295;
    g = c + (h << 9 & 4294967295 | h >>> 23);
    h = f + (c ^ d & (g ^ c)) + e[11] + 643717713 & 4294967295;
    f = g + (h << 14 & 4294967295 | h >>> 18);
    h = d + (g ^ c & (f ^ g)) + e[0] + 3921069994 & 4294967295;
    d = f + (h << 20 & 4294967295 | h >>> 12);
    h = c + (f ^ g & (d ^ f)) + e[5] + 3593408605 & 4294967295;
    c = d + (h << 5 & 4294967295 | h >>> 27);
    h = g + (d ^ f & (c ^ d)) + e[10] + 38016083 & 4294967295;
    g = c + (h << 9 & 4294967295 | h >>> 23);
    h = f + (c ^ d & (g ^ c)) + e[15] + 3634488961 & 4294967295;
    f = g + (h << 14 & 4294967295 | h >>> 18);
    h = d + (g ^ c & (f ^ g)) + e[4] + 3889429448 & 4294967295;
    d = f + (h << 20 & 4294967295 | h >>> 12);
    h = c + (f ^ g & (d ^ f)) + e[9] + 568446438 & 4294967295;
    c = d + (h << 5 & 4294967295 | h >>> 27);
    h = g + (d ^ f & (c ^ d)) + e[14] + 3275163606 & 4294967295;
    g = c + (h << 9 & 4294967295 | h >>> 23);
    h = f + (c ^ d & (g ^ c)) + e[3] + 4107603335 & 4294967295;
    f = g + (h << 14 & 4294967295 | h >>> 18);
    h = d + (g ^ c & (f ^ g)) + e[8] + 1163531501 & 4294967295;
    d = f + (h << 20 & 4294967295 | h >>> 12);
    h = c + (f ^ g & (d ^ f)) + e[13] + 2850285829 & 4294967295;
    c = d + (h << 5 & 4294967295 | h >>> 27);
    h = g + (d ^ f & (c ^ d)) + e[2] + 4243563512 & 4294967295;
    g = c + (h << 9 & 4294967295 | h >>> 23);
    h = f + (c ^ d & (g ^ c)) + e[7] + 1735328473 & 4294967295;
    f = g + (h << 14 & 4294967295 | h >>> 18);
    h = d + (g ^ c & (f ^ g)) + e[12] + 2368359562 & 4294967295;
    d = f + (h << 20 & 4294967295 | h >>> 12);
    h = c + (d ^ f ^ g) + e[5] + 4294588738 & 4294967295;
    c = d + (h << 4 & 4294967295 | h >>> 28);
    h = g + (c ^ d ^ f) + e[8] + 2272392833 & 4294967295;
    g = c + (h << 11 & 4294967295 | h >>> 21);
    h = f + (g ^ c ^ d) + e[11] + 1839030562 & 4294967295;
    f = g + (h << 16 & 4294967295 | h >>> 16);
    h = d + (f ^ g ^ c) + e[14] + 4259657740 & 4294967295;
    d = f + (h << 23 & 4294967295 | h >>> 9);
    h = c + (d ^ f ^ g) + e[1] + 2763975236 & 4294967295;
    c = d + (h << 4 & 4294967295 | h >>> 28);
    h = g + (c ^ d ^ f) + e[4] + 1272893353 & 4294967295;
    g = c + (h << 11 & 4294967295 | h >>> 21);
    h = f + (g ^ c ^ d) + e[7] + 4139469664 & 4294967295;
    f = g + (h << 16 & 4294967295 | h >>> 16);
    h = d + (f ^ g ^ c) + e[10] + 3200236656 & 4294967295;
    d = f + (h << 23 & 4294967295 | h >>> 9);
    h = c + (d ^ f ^ g) + e[13] + 681279174 & 4294967295;
    c = d + (h << 4 & 4294967295 | h >>> 28);
    h = g + (c ^ d ^ f) + e[0] + 3936430074 & 4294967295;
    g = c + (h << 11 & 4294967295 | h >>> 21);
    h = f + (g ^ c ^ d) + e[3] + 3572445317 & 4294967295;
    f = g + (h << 16 & 4294967295 | h >>> 16);
    h = d + (f ^ g ^ c) + e[6] + 76029189 & 4294967295;
    d = f + (h << 23 & 4294967295 | h >>> 9);
    h = c + (d ^ f ^ g) + e[9] + 3654602809 & 4294967295;
    c = d + (h << 4 & 4294967295 | h >>> 28);
    h = g + (c ^ d ^ f) + e[12] + 3873151461 & 4294967295;
    g = c + (h << 11 & 4294967295 | h >>> 21);
    h = f + (g ^ c ^ d) + e[15] + 530742520 & 4294967295;
    f = g + (h << 16 & 4294967295 | h >>> 16);
    h = d + (f ^ g ^ c) + e[2] + 3299628645 & 4294967295;
    d = f + (h << 23 & 4294967295 | h >>> 9);
    h = c + (f ^ (d | ~g)) + e[0] + 4096336452 & 4294967295;
    c = d + (h << 6 & 4294967295 | h >>> 26);
    h = g + (d ^ (c | ~f)) + e[7] + 1126891415 & 4294967295;
    g = c + (h << 10 & 4294967295 | h >>> 22);
    h = f + (c ^ (g | ~d)) + e[14] + 2878612391 & 4294967295;
    f = g + (h << 15 & 4294967295 | h >>> 17);
    h = d + (g ^ (f | ~c)) + e[5] + 4237533241 & 4294967295;
    d = f + (h << 21 & 4294967295 | h >>> 11);
    h = c + (f ^ (d | ~g)) + e[12] + 1700485571 & 4294967295;
    c = d + (h << 6 & 4294967295 | h >>> 26);
    h = g + (d ^ (c | ~f)) + e[3] + 2399980690 & 4294967295;
    g = c + (h << 10 & 4294967295 | h >>> 22);
    h = f + (c ^ (g | ~d)) + e[10] + 4293915773 & 4294967295;
    f = g + (h << 15 & 4294967295 | h >>> 17);
    h = d + (g ^ (f | ~c)) + e[1] + 2240044497 & 4294967295;
    d = f + (h << 21 & 4294967295 | h >>> 11);
    h = c + (f ^ (d | ~g)) + e[8] + 1873313359 & 4294967295;
    c = d + (h << 6 & 4294967295 | h >>> 26);
    h = g + (d ^ (c | ~f)) + e[15] + 4264355552 & 4294967295;
    g = c + (h << 10 & 4294967295 | h >>> 22);
    h = f + (c ^ (g | ~d)) + e[6] + 2734768916 & 4294967295;
    f = g + (h << 15 & 4294967295 | h >>> 17);
    h = d + (g ^ (f | ~c)) + e[13] + 1309151649 & 4294967295;
    d = f + (h << 21 & 4294967295 | h >>> 11);
    h = c + (f ^ (d | ~g)) + e[4] + 4149444226 & 4294967295;
    c = d + (h << 6 & 4294967295 | h >>> 26);
    h = g + (d ^ (c | ~f)) + e[11] + 3174756917 & 4294967295;
    g = c + (h << 10 & 4294967295 | h >>> 22);
    h = f + (c ^ (g | ~d)) + e[2] + 718787259 & 4294967295;
    f = g + (h << 15 & 4294967295 | h >>> 17);
    h = d + (g ^ (f | ~c)) + e[9] + 3951481745 & 4294967295;
    a.b[0] = a.b[0] + c & 4294967295;
    a.b[1] = a.b[1] + (f + (h << 21 & 4294967295 | h >>> 11)) & 4294967295;
    a.b[2] = a.b[2] + f & 4294967295;
    a.b[3] = a.b[3] + g & 4294967295;
  }
  function Fk(a, c) {
    var d;
    ba(d) || (d = c.length);
    for (var e = d - a.a,
        f = a.c,
        g = a.g,
        h = 0; h < d; ) {
      if (0 == g)
        for (; h <= e; )
          Ek(a, c, h), h += a.a;
      if (ha(c))
        for (; h < d; ) {
          if (f[g++] = c.charCodeAt(h++), g == a.a) {
            Ek(a, f);
            g = 0;
            break;
          }
        }
      else
        for (; h < d; )
          if (f[g++] = c[h++], g == a.a) {
            Ek(a, f);
            g = 0;
            break;
          }
    }
    a.g = g;
    a.f += d;
  }
  ;
  function Gk(a) {
    a = a || {};
    this.b = void 0 !== a.color ? a.color : null;
    this.f = a.lineCap;
    this.g = void 0 !== a.lineDash ? a.lineDash : null;
    this.c = a.lineJoin;
    this.i = a.miterLimit;
    this.a = a.width;
    this.j = void 0;
  }
  l = Gk.prototype;
  l.Zm = function() {
    return this.b;
  };
  l.Jj = function() {
    return this.f;
  };
  l.$m = function() {
    return this.g;
  };
  l.Kj = function() {
    return this.c;
  };
  l.Pj = function() {
    return this.i;
  };
  l.an = function() {
    return this.a;
  };
  l.bn = function(a) {
    this.b = a;
    this.j = void 0;
  };
  l.vo = function(a) {
    this.f = a;
    this.j = void 0;
  };
  l.cn = function(a) {
    this.g = a;
    this.j = void 0;
  };
  l.wo = function(a) {
    this.c = a;
    this.j = void 0;
  };
  l.xo = function(a) {
    this.i = a;
    this.j = void 0;
  };
  l.Bo = function(a) {
    this.a = a;
    this.j = void 0;
  };
  function Hk(a) {
    if (void 0 === a.j) {
      var c = "s" + (a.b ? Ze(a.b) : "-") + "," + (void 0 !== a.f ? a.f.toString() : "-") + "," + (a.g ? a.g.toString() : "-") + "," + (void 0 !== a.c ? a.c : "-") + "," + (void 0 !== a.i ? a.i.toString() : "-") + "," + (void 0 !== a.a ? a.a.toString() : "-"),
          d = new Dk;
      Fk(d, c);
      c = Array((56 > d.g ? d.a : 2 * d.a) - d.g);
      c[0] = 128;
      for (var e = 1; e < c.length - 8; ++e)
        c[e] = 0;
      for (var f = 8 * d.f,
          e = c.length - 8; e < c.length; ++e)
        c[e] = f & 255, f /= 256;
      Fk(d, c);
      c = Array(16);
      for (e = f = 0; 4 > e; ++e)
        for (var g = 0; 32 > g; g += 8)
          c[f++] = d.b[e] >>> g & 255;
      if (8192 >= c.length)
        d = String.fromCharCode.apply(null, c);
      else
        for (d = "", e = 0; e < c.length; e += 8192)
          f = Zb(c, e, e + 8192), d += String.fromCharCode.apply(null, f);
      a.j = d;
    }
    return a.j;
  }
  ;
  function Ik(a) {
    a = a || {};
    this.i = this.b = this.c = null;
    this.f = void 0 !== a.fill ? a.fill : null;
    this.a = void 0 !== a.stroke ? a.stroke : null;
    this.g = a.radius;
    this.T = [0, 0];
    this.o = this.D = this.l = null;
    var c = a.atlasManager,
        d,
        e = null,
        f,
        g = 0;
    this.a && (f = Ze(this.a.b), g = this.a.a, void 0 === g && (g = 1), e = this.a.g, Ah || (e = null));
    var h = 2 * (this.g + g) + 1;
    f = {
      strokeStyle: f,
      Dd: g,
      size: h,
      lineDash: e
    };
    if (void 0 === c)
      this.b = document.createElement("CANVAS"), this.b.height = h, this.b.width = h, d = h = this.b.width, c = this.b.getContext("2d"), this.qh(f, c, 0, 0), this.f ? this.i = this.b : (c = this.i = document.createElement("CANVAS"), c.height = f.size, c.width = f.size, c = c.getContext("2d"), this.ph(f, c, 0, 0));
    else {
      h = Math.round(h);
      (e = !this.f) && (d = this.ph.bind(this, f));
      var g = this.a ? Hk(this.a) : "-",
          k = this.f ? Bk(this.f) : "-";
      this.c && g == this.c[1] && k == this.c[2] && this.g == this.c[3] || (this.c = ["c" + g + k + (void 0 !== this.g ? this.g.toString() : "-"), g, k, this.g]);
      f = Jk(c, this.c[0], h, h, this.qh.bind(this, f), d);
      this.b = f.image;
      this.T = [f.offsetX, f.offsetY];
      d = f.image.width;
      this.i = e ? f.Ig : this.b;
    }
    this.l = [h / 2, h / 2];
    this.D = [h, h];
    this.o = [d, d];
    Vi.call(this, {
      opacity: 1,
      rotateWithView: !1,
      rotation: 0,
      scale: 1,
      snapToPixel: void 0 !== a.snapToPixel ? a.snapToPixel : !0
    });
  }
  y(Ik, Vi);
  l = Ik.prototype;
  l.Yb = function() {
    return this.l;
  };
  l.Qm = function() {
    return this.f;
  };
  l.pe = function() {
    return this.i;
  };
  l.gc = function() {
    return this.b;
  };
  l.wd = function() {
    return 2;
  };
  l.qd = function() {
    return this.o;
  };
  l.Ha = function() {
    return this.T;
  };
  l.Rm = function() {
    return this.g;
  };
  l.Eb = function() {
    return this.D;
  };
  l.Sm = function() {
    return this.a;
  };
  l.hf = ua;
  l.load = ua;
  l.Nf = ua;
  l.qh = function(a, c, d, e) {
    c.setTransform(1, 0, 0, 1, 0, 0);
    c.translate(d, e);
    c.beginPath();
    c.arc(a.size / 2, a.size / 2, this.g, 0, 2 * Math.PI, !0);
    this.f && (c.fillStyle = af(this.f.b), c.fill());
    this.a && (c.strokeStyle = a.strokeStyle, c.lineWidth = a.Dd, a.lineDash && c.setLineDash(a.lineDash), c.stroke());
    c.closePath();
  };
  l.ph = function(a, c, d, e) {
    c.setTransform(1, 0, 0, 1, 0, 0);
    c.translate(d, e);
    c.beginPath();
    c.arc(a.size / 2, a.size / 2, this.g, 0, 2 * Math.PI, !0);
    c.fillStyle = Ze(wk);
    c.fill();
    this.a && (c.strokeStyle = a.strokeStyle, c.lineWidth = a.Dd, a.lineDash && c.setLineDash(a.lineDash), c.stroke());
    c.closePath();
  };
  function Kk(a) {
    a = a || {};
    this.i = null;
    this.f = Lk;
    void 0 !== a.geometry && this.th(a.geometry);
    this.c = void 0 !== a.fill ? a.fill : null;
    this.a = void 0 !== a.image ? a.image : null;
    this.g = void 0 !== a.stroke ? a.stroke : null;
    this.j = void 0 !== a.text ? a.text : null;
    this.b = a.zIndex;
  }
  l = Kk.prototype;
  l.X = function() {
    return this.i;
  };
  l.Ej = function() {
    return this.f;
  };
  l.dn = function() {
    return this.c;
  };
  l.en = function() {
    return this.a;
  };
  l.fn = function() {
    return this.g;
  };
  l.Fa = function() {
    return this.j;
  };
  l.gn = function() {
    return this.b;
  };
  l.th = function(a) {
    ja(a) ? this.f = a : "string" === typeof a ? this.f = function(c) {
      return c.get(a);
    } : a ? void 0 !== a && (this.f = function() {
      return a;
    }) : this.f = Lk;
    this.i = a;
  };
  l.hn = function(a) {
    this.b = a;
  };
  function Mk(a) {
    if (!ja(a)) {
      var c;
      c = fa(a) ? a : [a];
      a = function() {
        return c;
      };
    }
    return a;
  }
  var Nk = null;
  function Ok() {
    if (!Nk) {
      var a = new Ak({color: "rgba(255,255,255,0.4)"}),
          c = new Gk({
            color: "#3399CC",
            width: 1.25
          });
      Nk = [new Kk({
        image: new Ik({
          fill: a,
          stroke: c,
          radius: 5
        }),
        fill: a,
        stroke: c
      })];
    }
    return Nk;
  }
  function Pk() {
    var a = {},
        c = [255, 255, 255, 1],
        d = [0, 153, 255, 1];
    a.Polygon = [new Kk({fill: new Ak({color: [255, 255, 255, .5]})})];
    a.MultiPolygon = a.Polygon;
    a.LineString = [new Kk({stroke: new Gk({
        color: c,
        width: 5
      })}), new Kk({stroke: new Gk({
        color: d,
        width: 3
      })})];
    a.MultiLineString = a.LineString;
    a.Circle = a.Polygon.concat(a.LineString);
    a.Point = [new Kk({
      image: new Ik({
        radius: 6,
        fill: new Ak({color: d}),
        stroke: new Gk({
          color: c,
          width: 1.5
        })
      }),
      zIndex: Infinity
    })];
    a.MultiPoint = a.Point;
    a.GeometryCollection = a.Polygon.concat(a.LineString, a.Point);
    return a;
  }
  function Lk(a) {
    return a.X();
  }
  ;
  function H(a) {
    a = a ? a : {};
    var c = mb({}, a);
    delete c.style;
    delete c.renderBuffer;
    delete c.updateWhileAnimating;
    delete c.updateWhileInteracting;
    Fi.call(this, c);
    this.a = void 0 !== a.renderBuffer ? a.renderBuffer : 100;
    this.B = null;
    this.f = void 0;
    this.c(a.style);
    this.s = void 0 !== a.updateWhileAnimating ? a.updateWhileAnimating : !1;
    this.A = void 0 !== a.updateWhileInteracting ? a.updateWhileInteracting : !1;
  }
  y(H, Fi);
  function Qk(a) {
    return a.get("renderOrder");
  }
  H.prototype.J = function() {
    return this.B;
  };
  H.prototype.D = function() {
    return this.f;
  };
  H.prototype.c = function(a) {
    this.B = void 0 !== a ? a : Ok;
    this.f = null === a ? void 0 : Mk(this.B);
    this.u();
  };
  function K(a) {
    a = a ? a : {};
    var c = mb({}, a);
    delete c.preload;
    delete c.useInterimTilesOnError;
    H.call(this, c);
    this.U(a.preload ? a.preload : 0);
    this.aa(a.useInterimTilesOnError ? a.useInterimTilesOnError : !0);
  }
  y(K, H);
  K.prototype.i = function() {
    return this.get("preload");
  };
  K.prototype.S = function() {
    return this.get("useInterimTilesOnError");
  };
  K.prototype.U = function(a) {
    this.set("preload", a);
  };
  K.prototype.aa = function(a) {
    this.set("useInterimTilesOnError", a);
  };
  function Rk(a, c, d, e, f) {
    this.T = {};
    this.g = a;
    this.J = c;
    this.c = d;
    this.H = e;
    this.$c = f;
    this.i = this.b = this.a = this.wa = this.Ca = this.aa = null;
    this.oa = this.na = this.A = this.S = this.ua = this.ta = 0;
    this.ya = !1;
    this.j = this.qb = 0;
    this.Fb = !1;
    this.Ga = 0;
    this.f = "";
    this.o = this.D = this.oc = this.nc = 0;
    this.U = this.s = this.l = null;
    this.B = [];
    this.Ec = nc();
  }
  function Sk(a, c, d) {
    if (a.i) {
      c = Nd(c, 0, d, 2, a.H, a.B);
      d = a.g;
      var e = a.Ec,
          f = d.globalAlpha;
      1 != a.A && (d.globalAlpha = f * a.A);
      var g = a.qb;
      a.ya && (g += a.$c);
      var h,
          k;
      h = 0;
      for (k = c.length; h < k; h += 2) {
        var m = c[h] - a.ta,
            n = c[h + 1] - a.ua;
        a.Fb && (m = Math.round(m), n = Math.round(n));
        if (0 !== g || 1 != a.j) {
          var p = m + a.ta,
              q = n + a.ua;
          Ji(e, p, q, a.j, a.j, g, -p, -q);
          d.setTransform(e[0], e[1], e[4], e[5], e[12], e[13]);
        }
        d.drawImage(a.i, a.na, a.oa, a.Ga, a.S, m, n, a.Ga, a.S);
      }
      0 === g && 1 == a.j || d.setTransform(1, 0, 0, 1, 0, 0);
      1 != a.A && (d.globalAlpha = f);
    }
  }
  function Tk(a, c, d, e) {
    var f = 0;
    if (a.U && "" !== a.f) {
      a.l && Uk(a, a.l);
      a.s && Vk(a, a.s);
      var g = a.U,
          h = a.g,
          k = a.wa;
      k ? (k.font != g.font && (k.font = h.font = g.font), k.textAlign != g.textAlign && (k.textAlign = h.textAlign = g.textAlign), k.textBaseline != g.textBaseline && (k.textBaseline = h.textBaseline = g.textBaseline)) : (h.font = g.font, h.textAlign = g.textAlign, h.textBaseline = g.textBaseline, a.wa = {
        font: g.font,
        textAlign: g.textAlign,
        textBaseline: g.textBaseline
      });
      c = Nd(c, f, d, e, a.H, a.B);
      for (g = a.g; f < d; f += e) {
        h = c[f] + a.nc;
        k = c[f + 1] + a.oc;
        if (0 !== a.D || 1 != a.o) {
          var m = Ji(a.Ec, h, k, a.o, a.o, a.D, -h, -k);
          g.setTransform(m[0], m[1], m[4], m[5], m[12], m[13]);
        }
        a.s && g.strokeText(a.f, h, k);
        a.l && g.fillText(a.f, h, k);
      }
      0 === a.D && 1 == a.o || g.setTransform(1, 0, 0, 1, 0, 0);
    }
  }
  function Wk(a, c, d, e, f, g) {
    var h = a.g;
    a = Nd(c, d, e, f, a.H, a.B);
    h.moveTo(a[0], a[1]);
    for (c = 2; c < a.length; c += 2)
      h.lineTo(a[c], a[c + 1]);
    g && h.lineTo(a[0], a[1]);
    return e;
  }
  function Xk(a, c, d, e, f) {
    var g = a.g,
        h,
        k;
    h = 0;
    for (k = e.length; h < k; ++h)
      d = Wk(a, c, d, e[h], f, !0), g.closePath();
    return d;
  }
  l = Rk.prototype;
  l.ld = function(a, c) {
    var d = a.toString(),
        e = this.T[d];
    void 0 !== e ? e.push(c) : this.T[d] = [c];
  };
  l.Ic = function(a) {
    if (ad(this.c, a.G())) {
      if (this.a || this.b) {
        this.a && Uk(this, this.a);
        this.b && Vk(this, this.b);
        var c;
        c = this.H;
        var d = this.B,
            e = a.ga();
        c = e ? Nd(e, 0, e.length, a.qa(), c, d) : null;
        d = c[2] - c[0];
        e = c[3] - c[1];
        d = Math.sqrt(d * d + e * e);
        e = this.g;
        e.beginPath();
        e.arc(c[0], c[1], d, 0, 2 * Math.PI);
        this.a && e.fill();
        this.b && e.stroke();
      }
      "" !== this.f && Tk(this, a.vd(), 2, 2);
    }
  };
  l.We = function(a, c) {
    var d = (0, c.f)(a);
    if (d && ad(this.c, d.G())) {
      var e = c.b;
      void 0 === e && (e = 0);
      this.ld(e, function(a) {
        a.hb(c.c, c.g);
        a.yb(c.a);
        a.ib(c.Fa());
        Yk[d.W()].call(a, d, null);
      });
    }
  };
  l.Sd = function(a, c) {
    var d = a.i,
        e,
        f;
    e = 0;
    for (f = d.length; e < f; ++e) {
      var g = d[e];
      Yk[g.W()].call(this, g, c);
    }
  };
  l.Ib = function(a) {
    var c = a.ga();
    a = a.qa();
    this.i && Sk(this, c, c.length);
    "" !== this.f && Tk(this, c, c.length, a);
  };
  l.Hb = function(a) {
    var c = a.ga();
    a = a.qa();
    this.i && Sk(this, c, c.length);
    "" !== this.f && Tk(this, c, c.length, a);
  };
  l.Xb = function(a) {
    if (ad(this.c, a.G())) {
      if (this.b) {
        Vk(this, this.b);
        var c = this.g,
            d = a.ga();
        c.beginPath();
        Wk(this, d, 0, d.length, a.qa(), !1);
        c.stroke();
      }
      "" !== this.f && (a = Zk(a), Tk(this, a, 2, 2));
    }
  };
  l.Jc = function(a) {
    var c = a.G();
    if (ad(this.c, c)) {
      if (this.b) {
        Vk(this, this.b);
        var c = this.g,
            d = a.ga(),
            e = 0,
            f = a.Cb(),
            g = a.qa();
        c.beginPath();
        var h,
            k;
        h = 0;
        for (k = f.length; h < k; ++h)
          e = Wk(this, d, e, f[h], g, !1);
        c.stroke();
      }
      "" !== this.f && (a = $k(a), Tk(this, a, a.length, 2));
    }
  };
  l.Lc = function(a) {
    if (ad(this.c, a.G())) {
      if (this.b || this.a) {
        this.a && Uk(this, this.a);
        this.b && Vk(this, this.b);
        var c = this.g;
        c.beginPath();
        Xk(this, a.Rb(), 0, a.Cb(), a.qa());
        this.a && c.fill();
        this.b && c.stroke();
      }
      "" !== this.f && (a = se(a), Tk(this, a, 2, 2));
    }
  };
  l.Kc = function(a) {
    if (ad(this.c, a.G())) {
      if (this.b || this.a) {
        this.a && Uk(this, this.a);
        this.b && Vk(this, this.b);
        var c = this.g,
            d = al(a),
            e = 0,
            f = a.c,
            g = a.qa(),
            h,
            k;
        h = 0;
        for (k = f.length; h < k; ++h) {
          var m = f[h];
          c.beginPath();
          e = Xk(this, d, e, m, g);
          this.a && c.fill();
          this.b && c.stroke();
        }
      }
      "" !== this.f && (a = bl(a), Tk(this, a, a.length, 2));
    }
  };
  function cl(a) {
    var c = Object.keys(a.T).map(Number);
    c.sort(Ua);
    var d,
        e,
        f,
        g,
        h;
    d = 0;
    for (e = c.length; d < e; ++d)
      for (f = a.T[c[d].toString()], g = 0, h = f.length; g < h; ++g)
        f[g](a);
  }
  function Uk(a, c) {
    var d = a.g,
        e = a.aa;
    e ? e.fillStyle != c.fillStyle && (e.fillStyle = d.fillStyle = c.fillStyle) : (d.fillStyle = c.fillStyle, a.aa = {fillStyle: c.fillStyle});
  }
  function Vk(a, c) {
    var d = a.g,
        e = a.Ca;
    e ? (e.lineCap != c.lineCap && (e.lineCap = d.lineCap = c.lineCap), Ah && !bb(e.lineDash, c.lineDash) && d.setLineDash(e.lineDash = c.lineDash), e.lineJoin != c.lineJoin && (e.lineJoin = d.lineJoin = c.lineJoin), e.lineWidth != c.lineWidth && (e.lineWidth = d.lineWidth = c.lineWidth), e.miterLimit != c.miterLimit && (e.miterLimit = d.miterLimit = c.miterLimit), e.strokeStyle != c.strokeStyle && (e.strokeStyle = d.strokeStyle = c.strokeStyle)) : (d.lineCap = c.lineCap, Ah && d.setLineDash(c.lineDash), d.lineJoin = c.lineJoin, d.lineWidth = c.lineWidth, d.miterLimit = c.miterLimit, d.strokeStyle = c.strokeStyle, a.Ca = {
      lineCap: c.lineCap,
      lineDash: c.lineDash,
      lineJoin: c.lineJoin,
      lineWidth: c.lineWidth,
      miterLimit: c.miterLimit,
      strokeStyle: c.strokeStyle
    });
  }
  l.hb = function(a, c) {
    if (a) {
      var d = a.b;
      this.a = {fillStyle: af(d ? d : wk)};
    } else
      this.a = null;
    if (c) {
      var d = c.b,
          e = c.f,
          f = c.g,
          g = c.c,
          h = c.a,
          k = c.i;
      this.b = {
        lineCap: void 0 !== e ? e : "round",
        lineDash: f ? f : xk,
        lineJoin: void 0 !== g ? g : "round",
        lineWidth: this.J * (void 0 !== h ? h : 1),
        miterLimit: void 0 !== k ? k : 10,
        strokeStyle: Ze(d ? d : yk)
      };
    } else
      this.b = null;
  };
  l.yb = function(a) {
    if (a) {
      var c = a.Yb(),
          d = a.gc(1),
          e = a.Ha(),
          f = a.Eb();
      this.ta = c[0];
      this.ua = c[1];
      this.S = f[1];
      this.i = d;
      this.A = a.A;
      this.na = e[0];
      this.oa = e[1];
      this.ya = a.B;
      this.qb = a.s;
      this.j = a.j;
      this.Fb = a.J;
      this.Ga = f[0];
    } else
      this.i = null;
  };
  l.ib = function(a) {
    if (a) {
      var c = a.b;
      c ? (c = c.b, this.l = {fillStyle: af(c ? c : wk)}) : this.l = null;
      var d = a.j;
      if (d) {
        var c = d.b,
            e = d.f,
            f = d.g,
            g = d.c,
            h = d.a,
            d = d.i;
        this.s = {
          lineCap: void 0 !== e ? e : "round",
          lineDash: f ? f : xk,
          lineJoin: void 0 !== g ? g : "round",
          lineWidth: void 0 !== h ? h : 1,
          miterLimit: void 0 !== d ? d : 10,
          strokeStyle: Ze(c ? c : yk)
        };
      } else
        this.s = null;
      var c = a.g,
          e = a.f,
          f = a.c,
          g = a.i,
          h = a.a,
          d = a.Fa(),
          k = a.l;
      a = a.o;
      this.U = {
        font: void 0 !== c ? c : "10px sans-serif",
        textAlign: void 0 !== k ? k : "center",
        textBaseline: void 0 !== a ? a : "middle"
      };
      this.f = void 0 !== d ? d : "";
      this.nc = void 0 !== e ? this.J * e : 0;
      this.oc = void 0 !== f ? this.J * f : 0;
      this.D = void 0 !== g ? g : 0;
      this.o = this.J * (void 0 !== h ? h : 1);
    } else
      this.f = "";
  };
  var Yk = {
    Point: Rk.prototype.Ib,
    LineString: Rk.prototype.Xb,
    Polygon: Rk.prototype.Lc,
    MultiPoint: Rk.prototype.Hb,
    MultiLineString: Rk.prototype.Jc,
    MultiPolygon: Rk.prototype.Kc,
    GeometryCollection: Rk.prototype.Sd,
    Circle: Rk.prototype.Ic
  };
  function dl(a) {
    Mi.call(this, a);
    this.H = nc();
  }
  y(dl, Mi);
  dl.prototype.c = function(a, c, d) {
    el(this, "precompose", d, a, void 0);
    var e = this.f ? this.f.a() : null;
    if (e) {
      var f = c.extent,
          g = void 0 !== f;
      if (g) {
        var h = a.pixelRatio,
            k = a.size[0] * h,
            m = a.size[1] * h,
            n = a.viewState.rotation,
            p = Sc(f),
            q = Rc(f),
            r = Qc(f),
            f = Pc(f);
        Li(a.coordinateToPixelMatrix, p, p);
        Li(a.coordinateToPixelMatrix, q, q);
        Li(a.coordinateToPixelMatrix, r, r);
        Li(a.coordinateToPixelMatrix, f, f);
        d.save();
        zk(d, -n, k / 2, m / 2);
        d.beginPath();
        d.moveTo(p[0] * h, p[1] * h);
        d.lineTo(q[0] * h, q[1] * h);
        d.lineTo(r[0] * h, r[1] * h);
        d.lineTo(f[0] * h, f[1] * h);
        d.clip();
        zk(d, n, k / 2, m / 2);
      }
      h = this.o;
      k = d.globalAlpha;
      d.globalAlpha = c.opacity;
      d.drawImage(e, 0, 0, +e.width, +e.height, Math.round(h[12]), Math.round(h[13]), Math.round(e.width * h[0]), Math.round(e.height * h[5]));
      d.globalAlpha = k;
      g && d.restore();
    }
    fl(this, d, a);
  };
  function el(a, c, d, e, f) {
    var g = a.a;
    if (Ib(g, c)) {
      var h = e.size[0] * e.pixelRatio,
          k = e.size[1] * e.pixelRatio,
          m = e.viewState.rotation;
      zk(d, -m, h / 2, k / 2);
      a = void 0 !== f ? f : gl(a, e, 0);
      a = new Rk(d, e.pixelRatio, e.extent, a, e.viewState.rotation);
      g.b(new Ei(c, g, a, e, d, null));
      cl(a);
      zk(d, m, h / 2, k / 2);
    }
  }
  function fl(a, c, d, e) {
    el(a, "postcompose", c, d, e);
  }
  function gl(a, c, d) {
    var e = c.viewState,
        f = c.pixelRatio;
    return Ji(a.H, f * c.size[0] / 2, f * c.size[1] / 2, f / e.resolution, -f / e.resolution, -e.rotation, -e.center[0] + d, -e.center[1]);
  }
  ;
  var hl = ["Polygon", "LineString", "Image", "Text"];
  function il(a, c, d) {
    this.na = a;
    this.Ga = c;
    this.f = null;
    this.c = 0;
    this.resolution = d;
    this.ua = this.ta = null;
    this.a = [];
    this.coordinates = [];
    this.aa = nc();
    this.b = [];
    this.U = [];
    this.Ca = nc();
    this.wa = nc();
  }
  y(il, Di);
  function jl(a, c, d, e, f, g) {
    var h = a.coordinates.length,
        k = a.Ye(),
        m = [c[d], c[d + 1]],
        n = [NaN, NaN],
        p = !0,
        q,
        r,
        t;
    for (q = d + f; q < e; q += f)
      n[0] = c[q], n[1] = c[q + 1], t = Hc(k, n), t !== r ? (p && (a.coordinates[h++] = m[0], a.coordinates[h++] = m[1]), a.coordinates[h++] = n[0], a.coordinates[h++] = n[1], p = !1) : 1 === t ? (a.coordinates[h++] = n[0], a.coordinates[h++] = n[1], p = !1) : p = !0, m[0] = n[0], m[1] = n[1], r = t;
    q === d + f && (a.coordinates[h++] = m[0], a.coordinates[h++] = m[1]);
    g && (a.coordinates[h++] = c[d], a.coordinates[h++] = c[d + 1]);
    return h;
  }
  function kl(a, c) {
    a.ta = [0, c, 0];
    a.a.push(a.ta);
    a.ua = [0, c, 0];
    a.b.push(a.ua);
  }
  function ll(a, c, d, e, f, g, h, k, m) {
    var n;
    Ki(e, a.aa) ? n = a.U : (n = Nd(a.coordinates, 0, a.coordinates.length, 2, e, a.U), qc(a.aa, e));
    e = !pb(g);
    var p = 0,
        q = h.length,
        r = 0,
        t,
        v = a.Ca;
    a = a.wa;
    for (var w,
        z,
        C,
        A; p < q; ) {
      var B = h[p],
          L,
          J,
          M,
          P;
      switch (B[0]) {
        case 0:
          r = B[1];
          e && g[x(r).toString()] || !r.X() ? p = B[2] : void 0 === m || ad(m, r.X().G()) ? ++p : p = B[2];
          break;
        case 1:
          c.beginPath();
          ++p;
          break;
        case 2:
          r = B[1];
          t = n[r];
          B = n[r + 1];
          C = n[r + 2] - t;
          r = n[r + 3] - B;
          c.arc(t, B, Math.sqrt(C * C + r * r), 0, 2 * Math.PI, !0);
          ++p;
          break;
        case 3:
          c.closePath();
          ++p;
          break;
        case 4:
          r = B[1];
          t = B[2];
          L = B[3];
          M = B[4] * d;
          var Aa = B[5] * d,
              I = B[6];
          J = B[7];
          var ca = B[8],
              Da = B[9];
          C = B[11];
          A = B[12];
          var Ia = B[13],
              ab = B[14];
          for (B[10] && (C += f); r < t; r += 2) {
            B = n[r] - M;
            P = n[r + 1] - Aa;
            Ia && (B = Math.round(B), P = Math.round(P));
            if (1 != A || 0 !== C) {
              var Pa = B + M,
                  Ec = P + Aa;
              Ji(v, Pa, Ec, A, A, C, -Pa, -Ec);
              c.transform(v[0], v[1], v[4], v[5], v[12], v[13]);
            }
            Pa = c.globalAlpha;
            1 != J && (c.globalAlpha = Pa * J);
            var Ec = ab + ca > L.width ? L.width - ca : ab,
                Uc = I + Da > L.height ? L.height - Da : I;
            c.drawImage(L, ca, Da, Ec, Uc, B, P, Ec * d, Uc * d);
            1 != J && (c.globalAlpha = Pa);
            if (1 != A || 0 !== C)
              tc(v, a), c.transform(a[0], a[1], a[4], a[5], a[12], a[13]);
          }
          ++p;
          break;
        case 5:
          r = B[1];
          t = B[2];
          M = B[3];
          Aa = B[4] * d;
          I = B[5] * d;
          C = B[6];
          A = B[7] * d;
          L = B[8];
          for (J = B[9]; r < t; r += 2) {
            B = n[r] + Aa;
            P = n[r + 1] + I;
            if (1 != A || 0 !== C)
              Ji(v, B, P, A, A, C, -B, -P), c.transform(v[0], v[1], v[4], v[5], v[12], v[13]);
            ca = M.split("\n");
            Da = ca.length;
            1 < Da ? (Ia = Math.round(1.5 * c.measureText("M").width), P -= (Da - 1) / 2 * Ia) : Ia = 0;
            for (ab = 0; ab < Da; ab++)
              Pa = ca[ab], J && c.strokeText(Pa, B, P), L && c.fillText(Pa, B, P), P += Ia;
            if (1 != A || 0 !== C)
              tc(v, a), c.transform(a[0], a[1], a[4], a[5], a[12], a[13]);
          }
          ++p;
          break;
        case 6:
          if (void 0 !== k && (r = B[1], r = k(r)))
            return r;
          ++p;
          break;
        case 7:
          c.fill();
          ++p;
          break;
        case 8:
          r = B[1];
          t = B[2];
          B = n[r];
          P = n[r + 1];
          C = B + .5 | 0;
          A = P + .5 | 0;
          if (C !== w || A !== z)
            c.moveTo(B, P), w = C, z = A;
          for (r += 2; r < t; r += 2)
            if (B = n[r], P = n[r + 1], C = B + .5 | 0, A = P + .5 | 0, C !== w || A !== z)
              c.lineTo(B, P), w = C, z = A;
          ++p;
          break;
        case 9:
          c.fillStyle = B[1];
          ++p;
          break;
        case 10:
          w = void 0 !== B[7] ? B[7] : !0;
          z = B[2];
          c.strokeStyle = B[1];
          c.lineWidth = w ? z * d : z;
          c.lineCap = B[3];
          c.lineJoin = B[4];
          c.miterLimit = B[5];
          Ah && c.setLineDash(B[6]);
          z = w = NaN;
          ++p;
          break;
        case 11:
          c.font = B[1];
          c.textAlign = B[2];
          c.textBaseline = B[3];
          ++p;
          break;
        case 12:
          c.stroke();
          ++p;
          break;
        default:
          ++p;
      }
    }
  }
  function ml(a) {
    var c = a.b;
    c.reverse();
    var d,
        e = c.length,
        f,
        g,
        h = -1;
    for (d = 0; d < e; ++d)
      if (f = c[d], g = f[0], 6 == g)
        h = d;
      else if (0 == g) {
        f[2] = d;
        f = a.b;
        for (g = d; h < g; ) {
          var k = f[h];
          f[h] = f[g];
          f[g] = k;
          ++h;
          --g;
        }
        h = -1;
      }
  }
  function nl(a, c) {
    a.ta[2] = a.a.length;
    a.ta = null;
    a.ua[2] = a.b.length;
    a.ua = null;
    var d = [6, c];
    a.a.push(d);
    a.b.push(d);
  }
  il.prototype.le = ua;
  il.prototype.Ye = function() {
    return this.Ga;
  };
  function pl(a, c, d) {
    il.call(this, a, c, d);
    this.l = this.S = null;
    this.H = this.D = this.J = this.B = this.T = this.A = this.s = this.o = this.j = this.i = this.g = void 0;
  }
  y(pl, il);
  pl.prototype.Ib = function(a, c) {
    if (this.l) {
      kl(this, c);
      var d = a.ga(),
          e = this.coordinates.length,
          d = jl(this, d, 0, d.length, a.qa(), !1);
      this.a.push([4, e, d, this.l, this.g, this.i, this.j, this.o, this.s, this.A, this.T, this.B, this.J, this.D, this.H]);
      this.b.push([4, e, d, this.S, this.g, this.i, this.j, this.o, this.s, this.A, this.T, this.B, this.J, this.D, this.H]);
      nl(this, c);
    }
  };
  pl.prototype.Hb = function(a, c) {
    if (this.l) {
      kl(this, c);
      var d = a.ga(),
          e = this.coordinates.length,
          d = jl(this, d, 0, d.length, a.qa(), !1);
      this.a.push([4, e, d, this.l, this.g, this.i, this.j, this.o, this.s, this.A, this.T, this.B, this.J, this.D, this.H]);
      this.b.push([4, e, d, this.S, this.g, this.i, this.j, this.o, this.s, this.A, this.T, this.B, this.J, this.D, this.H]);
      nl(this, c);
    }
  };
  pl.prototype.le = function() {
    ml(this);
    this.i = this.g = void 0;
    this.l = this.S = null;
    this.H = this.D = this.B = this.T = this.A = this.s = this.o = this.J = this.j = void 0;
  };
  pl.prototype.yb = function(a) {
    var c = a.Yb(),
        d = a.Eb(),
        e = a.pe(1),
        f = a.gc(1),
        g = a.Ha();
    this.g = c[0];
    this.i = c[1];
    this.S = e;
    this.l = f;
    this.j = d[1];
    this.o = a.A;
    this.s = g[0];
    this.A = g[1];
    this.T = a.B;
    this.B = a.s;
    this.J = a.j;
    this.D = a.J;
    this.H = d[0];
  };
  function ql(a, c, d) {
    il.call(this, a, c, d);
    this.g = {
      jd: void 0,
      dd: void 0,
      ed: null,
      fd: void 0,
      gd: void 0,
      hd: void 0,
      gf: 0,
      strokeStyle: void 0,
      lineCap: void 0,
      lineDash: null,
      lineJoin: void 0,
      lineWidth: void 0,
      miterLimit: void 0
    };
  }
  y(ql, il);
  function rl(a, c, d, e, f) {
    var g = a.coordinates.length;
    c = jl(a, c, d, e, f, !1);
    g = [8, g, c];
    a.a.push(g);
    a.b.push(g);
    return e;
  }
  l = ql.prototype;
  l.Ye = function() {
    this.f || (this.f = Bc(this.Ga), 0 < this.c && Ac(this.f, this.resolution * (this.c + 1) / 2, this.f));
    return this.f;
  };
  function sl(a) {
    var c = a.g,
        d = c.strokeStyle,
        e = c.lineCap,
        f = c.lineDash,
        g = c.lineJoin,
        h = c.lineWidth,
        k = c.miterLimit;
    c.jd == d && c.dd == e && bb(c.ed, f) && c.fd == g && c.gd == h && c.hd == k || (c.gf != a.coordinates.length && (a.a.push([12]), c.gf = a.coordinates.length), a.a.push([10, d, h, e, g, k, f], [1]), c.jd = d, c.dd = e, c.ed = f, c.fd = g, c.gd = h, c.hd = k);
  }
  l.Xb = function(a, c) {
    var d = this.g,
        e = d.lineWidth;
    void 0 !== d.strokeStyle && void 0 !== e && (sl(this), kl(this, c), this.b.push([10, d.strokeStyle, d.lineWidth, d.lineCap, d.lineJoin, d.miterLimit, d.lineDash], [1]), d = a.ga(), rl(this, d, 0, d.length, a.qa()), this.b.push([12]), nl(this, c));
  };
  l.Jc = function(a, c) {
    var d = this.g,
        e = d.lineWidth;
    if (void 0 !== d.strokeStyle && void 0 !== e) {
      sl(this);
      kl(this, c);
      this.b.push([10, d.strokeStyle, d.lineWidth, d.lineCap, d.lineJoin, d.miterLimit, d.lineDash], [1]);
      var d = a.Cb(),
          e = a.ga(),
          f = a.qa(),
          g = 0,
          h,
          k;
      h = 0;
      for (k = d.length; h < k; ++h)
        g = rl(this, e, g, d[h], f);
      this.b.push([12]);
      nl(this, c);
    }
  };
  l.le = function() {
    this.g.gf != this.coordinates.length && this.a.push([12]);
    ml(this);
    this.g = null;
  };
  l.hb = function(a, c) {
    var d = c.b;
    this.g.strokeStyle = Ze(d ? d : yk);
    d = c.f;
    this.g.lineCap = void 0 !== d ? d : "round";
    d = c.g;
    this.g.lineDash = d ? d : xk;
    d = c.c;
    this.g.lineJoin = void 0 !== d ? d : "round";
    d = c.a;
    this.g.lineWidth = void 0 !== d ? d : 1;
    d = c.i;
    this.g.miterLimit = void 0 !== d ? d : 10;
    this.g.lineWidth > this.c && (this.c = this.g.lineWidth, this.f = null);
  };
  function tl(a, c, d) {
    il.call(this, a, c, d);
    this.g = {
      kg: void 0,
      jd: void 0,
      dd: void 0,
      ed: null,
      fd: void 0,
      gd: void 0,
      hd: void 0,
      fillStyle: void 0,
      strokeStyle: void 0,
      lineCap: void 0,
      lineDash: null,
      lineJoin: void 0,
      lineWidth: void 0,
      miterLimit: void 0
    };
  }
  y(tl, il);
  function ul(a, c, d, e, f) {
    var g = a.g,
        h = [1];
    a.a.push(h);
    a.b.push(h);
    var k,
        h = 0;
    for (k = e.length; h < k; ++h) {
      var m = e[h],
          n = a.coordinates.length;
      d = jl(a, c, d, m, f, !0);
      d = [8, n, d];
      n = [3];
      a.a.push(d, n);
      a.b.push(d, n);
      d = m;
    }
    c = [7];
    a.b.push(c);
    void 0 !== g.fillStyle && a.a.push(c);
    void 0 !== g.strokeStyle && (g = [12], a.a.push(g), a.b.push(g));
    return d;
  }
  l = tl.prototype;
  l.Ic = function(a, c) {
    var d = this.g,
        e = d.strokeStyle;
    if (void 0 !== d.fillStyle || void 0 !== e) {
      vl(this);
      kl(this, c);
      this.b.push([9, Ze(wk)]);
      void 0 !== d.strokeStyle && this.b.push([10, d.strokeStyle, d.lineWidth, d.lineCap, d.lineJoin, d.miterLimit, d.lineDash]);
      var f = a.ga(),
          e = this.coordinates.length;
      jl(this, f, 0, f.length, a.qa(), !1);
      f = [1];
      e = [2, e];
      this.a.push(f, e);
      this.b.push(f, e);
      e = [7];
      this.b.push(e);
      void 0 !== d.fillStyle && this.a.push(e);
      void 0 !== d.strokeStyle && (d = [12], this.a.push(d), this.b.push(d));
      nl(this, c);
    }
  };
  l.Lc = function(a, c) {
    var d = this.g,
        e = d.strokeStyle;
    if (void 0 !== d.fillStyle || void 0 !== e)
      vl(this), kl(this, c), this.b.push([9, Ze(wk)]), void 0 !== d.strokeStyle && this.b.push([10, d.strokeStyle, d.lineWidth, d.lineCap, d.lineJoin, d.miterLimit, d.lineDash]), d = a.Cb(), e = a.Rb(), ul(this, e, 0, d, a.qa()), nl(this, c);
  };
  l.Kc = function(a, c) {
    var d = this.g,
        e = d.strokeStyle;
    if (void 0 !== d.fillStyle || void 0 !== e) {
      vl(this);
      kl(this, c);
      this.b.push([9, Ze(wk)]);
      void 0 !== d.strokeStyle && this.b.push([10, d.strokeStyle, d.lineWidth, d.lineCap, d.lineJoin, d.miterLimit, d.lineDash]);
      var d = a.c,
          e = al(a),
          f = a.qa(),
          g = 0,
          h,
          k;
      h = 0;
      for (k = d.length; h < k; ++h)
        g = ul(this, e, g, d[h], f);
      nl(this, c);
    }
  };
  l.le = function() {
    ml(this);
    this.g = null;
    var a = this.na;
    if (0 !== a) {
      var c = this.coordinates,
          d,
          e;
      d = 0;
      for (e = c.length; d < e; ++d)
        c[d] = a * Math.round(c[d] / a);
    }
  };
  l.Ye = function() {
    this.f || (this.f = Bc(this.Ga), 0 < this.c && Ac(this.f, this.resolution * (this.c + 1) / 2, this.f));
    return this.f;
  };
  l.hb = function(a, c) {
    var d = this.g;
    if (a) {
      var e = a.b;
      d.fillStyle = af(e ? e : wk);
    } else
      d.fillStyle = void 0;
    c ? (e = c.b, d.strokeStyle = Ze(e ? e : yk), e = c.f, d.lineCap = void 0 !== e ? e : "round", e = c.g, d.lineDash = e ? e.slice() : xk, e = c.c, d.lineJoin = void 0 !== e ? e : "round", e = c.a, d.lineWidth = void 0 !== e ? e : 1, e = c.i, d.miterLimit = void 0 !== e ? e : 10, d.lineWidth > this.c && (this.c = d.lineWidth, this.f = null)) : (d.strokeStyle = void 0, d.lineCap = void 0, d.lineDash = null, d.lineJoin = void 0, d.lineWidth = void 0, d.miterLimit = void 0);
  };
  function vl(a) {
    var c = a.g,
        d = c.fillStyle,
        e = c.strokeStyle,
        f = c.lineCap,
        g = c.lineDash,
        h = c.lineJoin,
        k = c.lineWidth,
        m = c.miterLimit;
    void 0 !== d && c.kg != d && (a.a.push([9, d]), c.kg = c.fillStyle);
    void 0 === e || c.jd == e && c.dd == f && c.ed == g && c.fd == h && c.gd == k && c.hd == m || (a.a.push([10, e, k, f, h, m, g]), c.jd = e, c.dd = f, c.ed = g, c.fd = h, c.gd = k, c.hd = m);
  }
  function wl(a, c, d) {
    il.call(this, a, c, d);
    this.D = this.J = this.B = null;
    this.l = "";
    this.T = this.A = this.s = this.o = 0;
    this.j = this.i = this.g = null;
  }
  y(wl, il);
  wl.prototype.Jb = function(a, c, d, e, f, g) {
    if ("" !== this.l && this.j && (this.g || this.i)) {
      if (this.g) {
        f = this.g;
        var h = this.B;
        if (!h || h.fillStyle != f.fillStyle) {
          var k = [9, f.fillStyle];
          this.a.push(k);
          this.b.push(k);
          h ? h.fillStyle = f.fillStyle : this.B = {fillStyle: f.fillStyle};
        }
      }
      this.i && (f = this.i, h = this.J, h && h.lineCap == f.lineCap && h.lineDash == f.lineDash && h.lineJoin == f.lineJoin && h.lineWidth == f.lineWidth && h.miterLimit == f.miterLimit && h.strokeStyle == f.strokeStyle || (k = [10, f.strokeStyle, f.lineWidth, f.lineCap, f.lineJoin, f.miterLimit, f.lineDash, !1], this.a.push(k), this.b.push(k), h ? (h.lineCap = f.lineCap, h.lineDash = f.lineDash, h.lineJoin = f.lineJoin, h.lineWidth = f.lineWidth, h.miterLimit = f.miterLimit, h.strokeStyle = f.strokeStyle) : this.J = {
        lineCap: f.lineCap,
        lineDash: f.lineDash,
        lineJoin: f.lineJoin,
        lineWidth: f.lineWidth,
        miterLimit: f.miterLimit,
        strokeStyle: f.strokeStyle
      }));
      f = this.j;
      h = this.D;
      h && h.font == f.font && h.textAlign == f.textAlign && h.textBaseline == f.textBaseline || (k = [11, f.font, f.textAlign, f.textBaseline], this.a.push(k), this.b.push(k), h ? (h.font = f.font, h.textAlign = f.textAlign, h.textBaseline = f.textBaseline) : this.D = {
        font: f.font,
        textAlign: f.textAlign,
        textBaseline: f.textBaseline
      });
      kl(this, g);
      f = this.coordinates.length;
      a = jl(this, a, c, d, e, !1);
      a = [5, f, a, this.l, this.o, this.s, this.A, this.T, !!this.g, !!this.i];
      this.a.push(a);
      this.b.push(a);
      nl(this, g);
    }
  };
  wl.prototype.ib = function(a) {
    if (a) {
      var c = a.b;
      c ? (c = c.b, c = af(c ? c : wk), this.g ? this.g.fillStyle = c : this.g = {fillStyle: c}) : this.g = null;
      var d = a.j;
      if (d) {
        var c = d.b,
            e = d.f,
            f = d.g,
            g = d.c,
            h = d.a,
            d = d.i,
            e = void 0 !== e ? e : "round",
            f = f ? f.slice() : xk,
            g = void 0 !== g ? g : "round",
            h = void 0 !== h ? h : 1,
            d = void 0 !== d ? d : 10,
            c = Ze(c ? c : yk);
        if (this.i) {
          var k = this.i;
          k.lineCap = e;
          k.lineDash = f;
          k.lineJoin = g;
          k.lineWidth = h;
          k.miterLimit = d;
          k.strokeStyle = c;
        } else
          this.i = {
            lineCap: e,
            lineDash: f,
            lineJoin: g,
            lineWidth: h,
            miterLimit: d,
            strokeStyle: c
          };
      } else
        this.i = null;
      var m = a.g,
          c = a.f,
          e = a.c,
          f = a.i,
          h = a.a,
          d = a.Fa(),
          g = a.l,
          k = a.o;
      a = void 0 !== m ? m : "10px sans-serif";
      g = void 0 !== g ? g : "center";
      k = void 0 !== k ? k : "middle";
      this.j ? (m = this.j, m.font = a, m.textAlign = g, m.textBaseline = k) : this.j = {
        font: a,
        textAlign: g,
        textBaseline: k
      };
      this.l = void 0 !== d ? d : "";
      this.o = void 0 !== c ? c : 0;
      this.s = void 0 !== e ? e : 0;
      this.A = void 0 !== f ? f : 0;
      this.T = void 0 !== h ? h : 1;
    } else
      this.l = "";
  };
  function xl(a, c, d, e) {
    this.s = a;
    this.c = c;
    this.o = d;
    this.i = e;
    this.g = {};
    this.j = nh(1, 1);
    this.l = nc();
  }
  function yl(a) {
    for (var c in a.g) {
      var d = a.g[c],
          e;
      for (e in d)
        d[e].le();
    }
  }
  xl.prototype.f = function(a, c, d, e, f) {
    var g = this.l;
    Ji(g, .5, .5, 1 / c, -1 / c, -d, -a[0], -a[1]);
    var h = this.j;
    h.clearRect(0, 0, 1, 1);
    var k;
    void 0 !== this.i && (k = yc(), zc(k, a), Ac(k, c * this.i, k));
    return zl(this, h, g, d, e, function(a) {
      if (0 < h.getImageData(0, 0, 1, 1).data[3]) {
        if (a = f(a))
          return a;
        h.clearRect(0, 0, 1, 1);
      }
    }, k);
  };
  xl.prototype.b = function(a, c) {
    var d = void 0 !== a ? a.toString() : "0",
        e = this.g[d];
    void 0 === e && (e = {}, this.g[d] = e);
    d = e[c];
    void 0 === d && (d = new Al[c](this.s, this.c, this.o), e[c] = d);
    return d;
  };
  xl.prototype.Oa = function() {
    return pb(this.g);
  };
  xl.prototype.a = function(a, c, d, e, f, g) {
    var h = Object.keys(this.g).map(Number);
    h.sort(Ua);
    if (!1 !== g) {
      var k = this.c;
      g = k[0];
      var m = k[1],
          n = k[2],
          k = k[3];
      g = [g, m, g, k, n, k, n, m];
      Nd(g, 0, 8, 2, d, g);
      a.save();
      a.beginPath();
      a.moveTo(g[0], g[1]);
      a.lineTo(g[2], g[3]);
      a.lineTo(g[4], g[5]);
      a.lineTo(g[6], g[7]);
      a.closePath();
      a.clip();
    }
    var p,
        q;
    g = 0;
    for (m = h.length; g < m; ++g)
      for (p = this.g[h[g].toString()], n = 0, k = hl.length; n < k; ++n)
        q = p[hl[n]], void 0 !== q && ll(q, a, c, d, e, f, q.a, void 0);
    a.restore();
  };
  function zl(a, c, d, e, f, g, h) {
    var k = Object.keys(a.g).map(Number);
    k.sort(function(a, c) {
      return c - a;
    });
    var m,
        n,
        p,
        q,
        r;
    m = 0;
    for (n = k.length; m < n; ++m)
      for (q = a.g[k[m].toString()], p = hl.length - 1; 0 <= p; --p)
        if (r = q[hl[p]], void 0 !== r && (r = ll(r, c, 1, d, e, f, r.b, g, h)))
          return r;
  }
  var Al = {
    Image: pl,
    LineString: ql,
    Polygon: tl,
    Text: wl
  };
  function Bl(a, c, d, e) {
    this.g = a;
    this.b = c;
    this.c = d;
    this.f = e;
  }
  l = Bl.prototype;
  l.get = function(a) {
    return this.f[a];
  };
  l.Cb = function() {
    return this.c;
  };
  l.G = function() {
    this.a || (this.a = "Point" === this.g ? Jc(this.b) : Kc(this.b, 0, this.b.length, 2));
    return this.a;
  };
  l.Rb = function() {
    return this.b;
  };
  l.ga = Bl.prototype.Rb;
  l.X = function() {
    return this;
  };
  l.om = function() {
    return this.f;
  };
  l.sd = Bl.prototype.X;
  l.qa = function() {
    return 2;
  };
  l.bc = ua;
  l.W = function() {
    return this.g;
  };
  function Cl(a, c) {
    return x(a) - x(c);
  }
  function Dl(a, c) {
    var d = .5 * a / c;
    return d * d;
  }
  function El(a, c, d, e, f, g) {
    var h = !1,
        k,
        m;
    if (k = d.a)
      m = k.wd(), 2 == m || 3 == m ? k.Nf(f, g) : (0 == m && k.load(), k.hf(f, g), h = !0);
    if (f = (0, d.f)(c))
      e = f.sd(e), (0, Fl[e.W()])(a, e, d, c);
    return h;
  }
  var Fl = {
    Point: function(a, c, d, e) {
      var f = d.a;
      if (f) {
        if (2 != f.wd())
          return;
        var g = a.b(d.b, "Image");
        g.yb(f);
        g.Ib(c, e);
      }
      if (f = d.Fa())
        a = a.b(d.b, "Text"), a.ib(f), a.Jb(c.ga(), 0, 2, 2, c, e);
    },
    LineString: function(a, c, d, e) {
      var f = d.g;
      if (f) {
        var g = a.b(d.b, "LineString");
        g.hb(null, f);
        g.Xb(c, e);
      }
      if (f = d.Fa())
        a = a.b(d.b, "Text"), a.ib(f), a.Jb(Zk(c), 0, 2, 2, c, e);
    },
    Polygon: function(a, c, d, e) {
      var f = d.c,
          g = d.g;
      if (f || g) {
        var h = a.b(d.b, "Polygon");
        h.hb(f, g);
        h.Lc(c, e);
      }
      if (f = d.Fa())
        a = a.b(d.b, "Text"), a.ib(f), a.Jb(se(c), 0, 2, 2, c, e);
    },
    MultiPoint: function(a, c, d, e) {
      var f = d.a;
      if (f) {
        if (2 != f.wd())
          return;
        var g = a.b(d.b, "Image");
        g.yb(f);
        g.Hb(c, e);
      }
      if (f = d.Fa())
        a = a.b(d.b, "Text"), a.ib(f), d = c.ga(), a.Jb(d, 0, d.length, c.qa(), c, e);
    },
    MultiLineString: function(a, c, d, e) {
      var f = d.g;
      if (f) {
        var g = a.b(d.b, "LineString");
        g.hb(null, f);
        g.Jc(c, e);
      }
      if (f = d.Fa())
        a = a.b(d.b, "Text"), a.ib(f), d = $k(c), a.Jb(d, 0, d.length, 2, c, e);
    },
    MultiPolygon: function(a, c, d, e) {
      var f = d.c,
          g = d.g;
      if (g || f) {
        var h = a.b(d.b, "Polygon");
        h.hb(f, g);
        h.Kc(c, e);
      }
      if (f = d.Fa())
        a = a.b(d.b, "Text"), a.ib(f), d = bl(c), a.Jb(d, 0, d.length, 2, c, e);
    },
    GeometryCollection: function(a, c, d, e) {
      c = c.i;
      var f,
          g;
      f = 0;
      for (g = c.length; f < g; ++f)
        (0, Fl[c[f].W()])(a, c[f], d, e);
    },
    Circle: function(a, c, d, e) {
      var f = d.c,
          g = d.g;
      if (f || g) {
        var h = a.b(d.b, "Polygon");
        h.hb(f, g);
        h.Ic(c, e);
      }
      if (f = d.Fa())
        a = a.b(d.b, "Text"), a.ib(f), a.Jb(c.vd(), 0, 2, 2, c, e);
    }
  };
  function Gl(a, c, d, e, f, g) {
    this.c = void 0 !== g ? g : null;
    Hi.call(this, a, c, d, void 0 !== g ? 0 : 2, e);
    this.g = f;
  }
  y(Gl, Hi);
  Gl.prototype.i = function(a) {
    this.state = a ? 3 : 2;
    Ii(this);
  };
  Gl.prototype.load = function() {
    0 == this.state && (this.state = 1, Ii(this), this.c(this.i.bind(this)));
  };
  Gl.prototype.a = function() {
    return this.g;
  };
  var Hl = !((ef("Chrome") || ef("CriOS")) && !ef("Opera") && !ef("OPR") && !ef("Edge")) || ef("iPhone") && !ef("iPod") && !ef("iPad") || ef("iPad") || ef("iPod");
  function Il(a, c, d, e) {
    var f = Kd(d, c, a);
    d = c.getPointResolution(e, d);
    c = c.$b();
    void 0 !== c && (d *= c);
    c = a.$b();
    void 0 !== c && (d /= c);
    a = a.getPointResolution(d, f) / d;
    isFinite(a) && 0 < a && (d /= a);
    return d;
  }
  function Jl(a, c, d, e) {
    a = d - a;
    c = e - c;
    var f = Math.sqrt(a * a + c * c);
    return [Math.round(d + a / f), Math.round(e + c / f)];
  }
  function Kl(a, c, d, e, f, g, h, k, m, n, p) {
    var q = nh(Math.round(d * a), Math.round(d * c));
    if (0 === m.length)
      return q.canvas;
    q.scale(d, d);
    var r = yc();
    m.forEach(function(a) {
      Nc(r, a.extent);
    });
    var t = nh(Math.round(d * Wc(r) / e), Math.round(d * Xc(r) / e)),
        v = d / e;
    m.forEach(function(a) {
      t.drawImage(a.image, n, n, a.image.width - 2 * n, a.image.height - 2 * n, (a.extent[0] - r[0]) * v, -(a.extent[3] - r[3]) * v, Wc(a.extent) * v, Xc(a.extent) * v);
    });
    var w = Sc(h);
    k.f.forEach(function(a) {
      var c = a.source,
          f = a.target,
          h = c[1][0],
          k = c[1][1],
          m = c[2][0],
          n = c[2][1];
      a = (f[0][0] - w[0]) / g;
      var p = -(f[0][1] - w[1]) / g,
          v = (f[1][0] - w[0]) / g,
          I = -(f[1][1] - w[1]) / g,
          ca = (f[2][0] - w[0]) / g,
          Da = -(f[2][1] - w[1]) / g,
          f = c[0][0],
          c = c[0][1],
          h = h - f,
          k = k - c,
          m = m - f,
          n = n - c;
      a: {
        h = [[h, k, 0, 0, v - a], [m, n, 0, 0, ca - a], [0, 0, h, k, I - p], [0, 0, m, n, Da - p]];
        k = h.length;
        for (m = 0; m < k; m++) {
          for (var n = m,
              Ia = Math.abs(h[m][m]),
              ab = m + 1; ab < k; ab++) {
            var Pa = Math.abs(h[ab][m]);
            Pa > Ia && (Ia = Pa, n = ab);
          }
          if (0 === Ia) {
            h = null;
            break a;
          }
          Ia = h[n];
          h[n] = h[m];
          h[m] = Ia;
          for (n = m + 1; n < k; n++)
            for (Ia = -h[n][m] / h[m][m], ab = m; ab < k + 1; ab++)
              h[n][ab] = m == ab ? 0 : h[n][ab] + Ia * h[m][ab];
        }
        m = Array(k);
        for (n = k - 1; 0 <= n; n--)
          for (m[n] = h[n][k] / h[n][n], Ia = n - 1; 0 <= Ia; Ia--)
            h[Ia][k] -= h[Ia][n] * m[n];
        h = m;
      }
      h && (q.save(), q.beginPath(), Hl ? (m = (a + v + ca) / 3, n = (p + I + Da) / 3, k = Jl(m, n, a, p), v = Jl(m, n, v, I), ca = Jl(m, n, ca, Da), q.moveTo(k[0], k[1]), q.lineTo(v[0], v[1]), q.lineTo(ca[0], ca[1])) : (q.moveTo(a, p), q.lineTo(v, I), q.lineTo(ca, Da)), q.closePath(), q.clip(), q.transform(h[0], h[2], h[1], h[3], a, p), q.translate(r[0] - f, r[3] - c), q.scale(e / d, -e / d), q.drawImage(t.canvas, 0, 0), q.restore());
    });
    p && (q.save(), q.strokeStyle = "black", q.lineWidth = 1, k.f.forEach(function(a) {
      var c = a.target;
      a = (c[0][0] - w[0]) / g;
      var d = -(c[0][1] - w[1]) / g,
          e = (c[1][0] - w[0]) / g,
          f = -(c[1][1] - w[1]) / g,
          h = (c[2][0] - w[0]) / g,
          c = -(c[2][1] - w[1]) / g;
      q.beginPath();
      q.moveTo(a, d);
      q.lineTo(e, f);
      q.lineTo(h, c);
      q.closePath();
      q.stroke();
    }), q.restore());
    return q.canvas;
  }
  ;
  function Ll(a, c, d, e, f) {
    this.g = a;
    this.c = c;
    var g = {},
        h = Id(this.c, this.g);
    this.a = function(a) {
      var c = a[0] + "/" + a[1];
      g[c] || (g[c] = h(a));
      return g[c];
    };
    this.i = e;
    this.s = f * f;
    this.f = [];
    this.l = !1;
    this.o = this.g.b && !!e && !!this.g.G() && Wc(e) == Wc(this.g.G());
    this.b = this.g.G() ? Wc(this.g.G()) : null;
    this.j = this.c.G() ? Wc(this.c.G()) : null;
    a = Sc(d);
    c = Rc(d);
    e = Qc(d);
    d = Pc(d);
    f = this.a(a);
    var k = this.a(c),
        m = this.a(e),
        n = this.a(d);
    Ml(this, a, c, e, d, f, k, m, n, 10);
    if (this.l) {
      var p = Infinity;
      this.f.forEach(function(a) {
        p = Math.min(p, a.source[0][0], a.source[1][0], a.source[2][0]);
      });
      this.f.forEach(function(a) {
        if (Math.max(a.source[0][0], a.source[1][0], a.source[2][0]) - p > this.b / 2) {
          var c = [[a.source[0][0], a.source[0][1]], [a.source[1][0], a.source[1][1]], [a.source[2][0], a.source[2][1]]];
          c[0][0] - p > this.b / 2 && (c[0][0] -= this.b);
          c[1][0] - p > this.b / 2 && (c[1][0] -= this.b);
          c[2][0] - p > this.b / 2 && (c[2][0] -= this.b);
          Math.max(c[0][0], c[1][0], c[2][0]) - Math.min(c[0][0], c[1][0], c[2][0]) < this.b / 2 && (a.source = c);
        }
      }, this);
    }
    g = {};
  }
  function Ml(a, c, d, e, f, g, h, k, m, n) {
    var p = xc([g, h, k, m]),
        q = a.b ? Wc(p) / a.b : null,
        r = a.g.b && .5 < q && 1 > q,
        t = !1;
    if (0 < n) {
      if (a.c.g && a.j)
        var v = xc([c, d, e, f]),
            t = t | .25 < Wc(v) / a.j;
      !r && a.g.g && q && (t |= .25 < q);
    }
    if (t || !a.i || ad(p, a.i)) {
      if (!(t || isFinite(g[0]) && isFinite(g[1]) && isFinite(h[0]) && isFinite(h[1]) && isFinite(k[0]) && isFinite(k[1]) && isFinite(m[0]) && isFinite(m[1])))
        if (0 < n)
          t = !0;
        else
          return;
      if (0 < n && (t || (q = a.a([(c[0] + e[0]) / 2, (c[1] + e[1]) / 2]), p = r ? ($b(g[0], a.b) + $b(k[0], a.b)) / 2 - $b(q[0], a.b) : (g[0] + k[0]) / 2 - q[0], q = (g[1] + k[1]) / 2 - q[1], t = p * p + q * q > a.s), t)) {
        Math.abs(c[0] - e[0]) <= Math.abs(c[1] - e[1]) ? (r = [(d[0] + e[0]) / 2, (d[1] + e[1]) / 2], p = a.a(r), q = [(f[0] + c[0]) / 2, (f[1] + c[1]) / 2], t = a.a(q), Ml(a, c, d, r, q, g, h, p, t, n - 1), Ml(a, q, r, e, f, t, p, k, m, n - 1)) : (r = [(c[0] + d[0]) / 2, (c[1] + d[1]) / 2], p = a.a(r), q = [(e[0] + f[0]) / 2, (e[1] + f[1]) / 2], t = a.a(q), Ml(a, c, r, q, f, g, p, t, m, n - 1), Ml(a, r, d, e, q, p, h, k, t, n - 1));
        return;
      }
      if (r) {
        if (!a.o)
          return;
        a.l = !0;
      }
      a.f.push({
        source: [g, k, m],
        target: [c, e, f]
      });
      a.f.push({
        source: [g, h, k],
        target: [c, d, e]
      });
    }
  }
  function Nl(a) {
    var c = yc();
    a.f.forEach(function(a) {
      a = a.source;
      zc(c, a[0]);
      zc(c, a[1]);
      zc(c, a[2]);
    });
    return c;
  }
  ;
  function Ol(a, c, d, e, f, g) {
    this.A = c;
    this.s = a.G();
    var h = c.G(),
        k = h ? $c(d, h) : d,
        h = Il(a, c, Yc(k), e);
    this.j = new Ll(a, c, k, this.s, .5 * h);
    this.c = e;
    this.g = d;
    a = Nl(this.j);
    this.l = (this.ob = g(a, h, f)) ? this.ob.f : 1;
    this.Cd = this.i = null;
    f = 2;
    g = [];
    this.ob && (f = 0, g = this.ob.ea());
    Hi.call(this, d, e, this.l, f, g);
  }
  y(Ol, Hi);
  Ol.prototype.fa = function() {
    1 == this.state && (sb(this.Cd), this.Cd = null);
    Ol.ha.fa.call(this);
  };
  Ol.prototype.a = function() {
    return this.i;
  };
  Ol.prototype.Bd = function() {
    var a = this.ob.V();
    2 == a && (this.i = Kl(Wc(this.g) / this.c, Xc(this.g) / this.c, this.l, this.ob.Z(), 0, this.c, this.g, this.j, [{
      extent: this.ob.G(),
      image: this.ob.a()
    }], 0));
    this.state = a;
    Ii(this);
  };
  Ol.prototype.load = function() {
    if (0 == this.state) {
      this.state = 1;
      Ii(this);
      var a = this.ob.V();
      2 == a || 3 == a ? this.Bd() : (this.Cd = D(this.ob, "change", function() {
        var a = this.ob.V();
        if (2 == a || 3 == a)
          sb(this.Cd), this.Cd = null, this.Bd();
      }, this), this.ob.load());
    }
  };
  function Pl(a) {
    rg.call(this, {
      attributions: a.attributions,
      extent: a.extent,
      logo: a.logo,
      projection: a.projection,
      state: a.state
    });
    this.A = void 0 !== a.resolutions ? a.resolutions : null;
    this.a = null;
    this.na = 0;
  }
  y(Pl, rg);
  Pl.prototype.Pb = function() {
    return this.A;
  };
  function Ql(a, c) {
    if (a.A) {
      var d = Wa(a.A, c, 0);
      c = a.A[d];
    }
    return c;
  }
  Pl.prototype.B = function(a, c, d, e) {
    var f = this.f;
    if (f && e && !Hd(f, e)) {
      if (this.a) {
        if (this.na == this.g && Hd(this.a.A, e) && this.a.Z() == c && this.a.f == d && Mc(this.a.G(), a))
          return this.a;
        this.a.Rd();
        this.a = null;
      }
      this.a = new Ol(f, e, a, c, d, function(a, c, d) {
        return this.pd(a, c, d, f);
      }.bind(this));
      this.na = this.g;
      return this.a;
    }
    f && (e = f);
    return this.pd(a, c, d, e);
  };
  Pl.prototype.l = function(a) {
    a = a.target;
    switch (a.V()) {
      case 1:
        this.b(new Rl(Sl, a));
        break;
      case 2:
        this.b(new Rl(Tl, a));
        break;
      case 3:
        this.b(new Rl(Ul, a));
    }
  };
  function Vl(a, c) {
    a.a().src = c;
  }
  function Rl(a, c) {
    Eb.call(this, a);
    this.image = c;
  }
  y(Rl, Eb);
  var Sl = "imageloadstart",
      Tl = "imageloadend",
      Ul = "imageloaderror";
  function Wl(a) {
    Pl.call(this, {
      attributions: a.attributions,
      logo: a.logo,
      projection: a.projection,
      resolutions: a.resolutions,
      state: a.state
    });
    this.aa = a.canvasFunction;
    this.S = null;
    this.U = 0;
    this.oa = void 0 !== a.ratio ? a.ratio : 1.5;
  }
  y(Wl, Pl);
  Wl.prototype.pd = function(a, c, d, e) {
    c = Ql(this, c);
    var f = this.S;
    if (f && this.U == this.g && f.Z() == c && f.f == d && Gc(f.G(), a))
      return f;
    a = a.slice();
    bd(a, this.oa);
    (e = this.aa(a, c, d, [Wc(a) / c * d, Xc(a) / c * d], e)) && (f = new Gl(a, c, d, this.ea(), e));
    this.S = f;
    this.U = this.g;
    return f;
  };
  function Xl(a) {
    Mb.call(this);
    this.i = void 0;
    this.a = "geometry";
    this.c = null;
    this.j = void 0;
    this.f = null;
    D(this, Ob(this.a), this.$d, this);
    void 0 !== a && (a instanceof Md || !a ? this.Pa(a) : this.C(a));
  }
  y(Xl, Mb);
  l = Xl.prototype;
  l.clone = function() {
    var a = new Xl(this.P());
    a.Bc(this.a);
    var c = this.X();
    c && a.Pa(c.clone());
    (c = this.c) && a.lf(c);
    return a;
  };
  l.X = function() {
    return this.get(this.a);
  };
  l.Sa = function() {
    return this.i;
  };
  l.Fj = function() {
    return this.a;
  };
  l.ll = function() {
    return this.c;
  };
  l.bc = function() {
    return this.j;
  };
  l.ml = function() {
    this.u();
  };
  l.$d = function() {
    this.f && (sb(this.f), this.f = null);
    var a = this.X();
    a && (this.f = D(a, "change", this.ml, this));
    this.u();
  };
  l.Pa = function(a) {
    this.set(this.a, a);
  };
  l.lf = function(a) {
    this.j = (this.c = a) ? Yl(a) : void 0;
    this.u();
  };
  l.jc = function(a) {
    this.i = a;
    this.u();
  };
  l.Bc = function(a) {
    yb(this, Ob(this.a), this.$d, this);
    this.a = a;
    D(this, Ob(this.a), this.$d, this);
    this.$d();
  };
  function Yl(a) {
    if (!ja(a)) {
      var c;
      c = fa(a) ? a : [a];
      a = function() {
        return c;
      };
    }
    return a;
  }
  ;
  function Zl(a, c, d, e, f) {
    pg.call(this, a, c);
    this.o = nh();
    this.j = e;
    this.i = null;
    this.c = {
      kd: !1,
      Kf: null,
      Kh: -1,
      Vc: null
    };
    this.A = f;
    this.l = d;
  }
  y(Zl, pg);
  l = Zl.prototype;
  l.fa = function() {
    Zl.ha.fa.call(this);
  };
  l.xl = function() {
    return this.j;
  };
  l.eb = function() {
    return this.l;
  };
  l.load = function() {
    0 == this.state && (this.state = 1, qg(this), this.A(this, this.l), this.s(null, NaN, null));
  };
  l.Ph = function(a) {
    this.i = a;
    this.state = 2;
    qg(this);
  };
  l.Th = function(a) {
    this.s = a;
  };
  function $l() {
    if (!kf)
      return !1;
    try {
      return new ActiveXObject("MSXML2.DOMDocument"), !0;
    } catch (a) {
      return !1;
    }
  }
  var am = kf && $l();
  function bm(a) {
    var c = a.xml;
    if (c)
      return c;
    if ("undefined" != typeof XMLSerializer)
      return (new XMLSerializer).serializeToString(a);
    throw Error("Your browser does not support serializing XML documents");
  }
  ;
  var cm;
  a: if (document.implementation && document.implementation.createDocument)
    cm = document.implementation.createDocument("", "", null);
  else {
    if (am) {
      var dm = new ActiveXObject("MSXML2.DOMDocument");
      if (dm) {
        dm.resolveExternals = !1;
        dm.validateOnParse = !1;
        try {
          dm.setProperty("ProhibitDTD", !0), dm.setProperty("MaxXMLSize", 2048), dm.setProperty("MaxElementDepth", 256);
        } catch (a) {}
      }
      if (dm) {
        cm = dm;
        break a;
      }
    }
    throw Error("Your browser does not support creating new documents");
  }
  var em = cm;
  function fm(a, c) {
    return em.createElementNS(a, c);
  }
  function gm(a, c) {
    a || (a = "");
    return em.createNode(1, c, a);
  }
  var hm = document.implementation && document.implementation.createDocument ? fm : gm;
  function im(a, c) {
    return jm(a, c, []).join("");
  }
  function jm(a, c, d) {
    if (4 == a.nodeType || 3 == a.nodeType)
      c ? d.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : d.push(a.nodeValue);
    else
      for (a = a.firstChild; a; a = a.nextSibling)
        jm(a, c, d);
    return d;
  }
  function km(a) {
    return a.localName;
  }
  function lm(a) {
    var c = a.localName;
    return void 0 !== c ? c : a.baseName;
  }
  var mm = kf ? lm : km;
  function nm(a) {
    return a instanceof Document;
  }
  function om(a) {
    return ka(a) && 9 == a.nodeType;
  }
  var pm = kf ? om : nm;
  function qm(a) {
    return a instanceof Node;
  }
  function rm(a) {
    return ka(a) && void 0 !== a.nodeType;
  }
  var sm = kf ? rm : qm;
  function tm(a, c, d) {
    return a.getAttributeNS(c, d) || "";
  }
  function um(a, c, d) {
    var e = "";
    a = vm(a, c, d);
    void 0 !== a && (e = a.nodeValue);
    return e;
  }
  var wm = document.implementation && document.implementation.createDocument ? tm : um;
  function xm(a, c, d) {
    return a.getAttributeNodeNS(c, d);
  }
  function ym(a, c, d) {
    var e = null;
    a = a.attributes;
    for (var f,
        g,
        h = 0,
        k = a.length; h < k; ++h)
      if (f = a[h], f.namespaceURI == c && (g = f.prefix ? f.prefix + ":" + d : d, g == f.nodeName)) {
        e = f;
        break;
      }
    return e;
  }
  var vm = document.implementation && document.implementation.createDocument ? xm : ym;
  function zm(a, c, d, e) {
    a.setAttributeNS(c, d, e);
  }
  function Am(a, c, d, e) {
    c ? (c = a.ownerDocument.createNode(2, d, c), c.nodeValue = e, a.setAttributeNode(c)) : a.setAttribute(d, e);
  }
  var Bm = document.implementation && document.implementation.createDocument ? zm : Am;
  function Cm(a) {
    return (new DOMParser).parseFromString(a, "application/xml");
  }
  function Dm(a, c) {
    return function(d, e) {
      var f = a.call(c, d, e);
      void 0 !== f && Ya(e[e.length - 1], f);
    };
  }
  function Em(a, c) {
    return function(d, e) {
      var f = a.call(void 0 !== c ? c : this, d, e);
      void 0 !== f && e[e.length - 1].push(f);
    };
  }
  function Fm(a, c) {
    return function(d, e) {
      var f = a.call(void 0 !== c ? c : this, d, e);
      void 0 !== f && (e[e.length - 1] = f);
    };
  }
  function Gm(a) {
    return function(c, d) {
      var e = a.call(this, c, d);
      if (void 0 !== e) {
        var f = d[d.length - 1],
            g = c.localName,
            h;
        g in f ? h = f[g] : h = f[g] = [];
        h.push(e);
      }
    };
  }
  function N(a, c) {
    return function(d, e) {
      var f = a.call(this, d, e);
      void 0 !== f && (e[e.length - 1][void 0 !== c ? c : d.localName] = f);
    };
  }
  function O(a, c) {
    return function(d, e, f) {
      a.call(void 0 !== c ? c : this, d, e, f);
      f[f.length - 1].node.appendChild(d);
    };
  }
  function Hm(a) {
    var c,
        d;
    return function(e, f, g) {
      if (void 0 === c) {
        c = {};
        var h = {};
        h[e.localName] = a;
        c[e.namespaceURI] = h;
        d = Im(e.localName);
      }
      Jm(c, d, f, g);
    };
  }
  function Im(a, c) {
    return function(d, e, f) {
      d = e[e.length - 1].node;
      e = a;
      void 0 === e && (e = f);
      f = c;
      void 0 === c && (f = d.namespaceURI);
      return hm(f, e);
    };
  }
  var Km = Im();
  function Lm(a, c) {
    for (var d = c.length,
        e = Array(d),
        f = 0; f < d; ++f)
      e[f] = a[c[f]];
    return e;
  }
  function Q(a, c, d) {
    d = void 0 !== d ? d : {};
    var e,
        f;
    e = 0;
    for (f = a.length; e < f; ++e)
      d[a[e]] = c;
    return d;
  }
  function Mm(a, c, d, e) {
    for (c = c.firstElementChild; c; c = c.nextElementSibling) {
      var f = a[c.namespaceURI];
      void 0 !== f && (f = f[c.localName], void 0 !== f && f.call(e, c, d));
    }
  }
  function R(a, c, d, e, f) {
    e.push(a);
    Mm(c, d, e, f);
    return e.pop();
  }
  function Jm(a, c, d, e, f, g) {
    for (var h = (void 0 !== f ? f : d).length,
        k,
        m,
        n = 0; n < h; ++n)
      k = d[n], void 0 !== k && (m = c.call(g, k, e, void 0 !== f ? f[n] : void 0), void 0 !== m && a[m.namespaceURI][m.localName].call(g, m, k, e));
  }
  function Nm(a, c, d, e, f, g, h) {
    f.push(a);
    Jm(c, d, e, f, g, h);
    f.pop();
  }
  ;
  function Om(a, c, d, e) {
    return function(f, g, h) {
      var k = new XMLHttpRequest;
      k.open("GET", ja(a) ? a(f, g, h) : a, !0);
      "arraybuffer" == c.W() && (k.responseType = "arraybuffer");
      k.onload = function() {
        if (200 <= k.status && 300 > k.status) {
          var a = c.W(),
              f;
          "json" == a || "text" == a ? f = k.responseText : "xml" == a ? (f = k.responseXML) || (f = Cm(k.responseText)) : "arraybuffer" == a && (f = k.response);
          f && d.call(this, c.Ea(f, {featureProjection: h}), c.Qa(f));
        } else
          e.call(this);
      }.bind(this);
      k.send();
    };
  }
  function Pm(a, c) {
    return Om(a, c, function(a, c) {
      this.g = c;
      this.Ph(a);
    }, function() {
      this.state = 3;
      qg(this);
    });
  }
  function Qm(a, c) {
    return Om(a, c, function(a) {
      this.Gc(a);
    }, ua);
  }
  ;
  function Rm() {
    return [[-Infinity, -Infinity, Infinity, Infinity]];
  }
  ;
  var Sm,
      Tm,
      Um,
      Vm;
  (function() {
    var a = {ia: {}};
    (function() {
      function c(a, d) {
        if (!(this instanceof c))
          return new c(a, d);
        this.Qe = Math.max(4, a || 9);
        this.Yf = Math.max(2, Math.ceil(.4 * this.Qe));
        d && this.Ui(d);
        this.clear();
      }
      function d(a, c) {
        a.bbox = e(a, 0, a.children.length, c);
      }
      function e(a, c, d, e) {
        for (var g = [Infinity, Infinity, -Infinity, -Infinity],
            h; c < d; c++)
          h = a.children[c], f(g, a.Ja ? e(h) : h.bbox);
        return g;
      }
      function f(a, c) {
        a[0] = Math.min(a[0], c[0]);
        a[1] = Math.min(a[1], c[1]);
        a[2] = Math.max(a[2], c[2]);
        a[3] = Math.max(a[3], c[3]);
      }
      function g(a, c) {
        return a.bbox[0] - c.bbox[0];
      }
      function h(a, c) {
        return a.bbox[1] - c.bbox[1];
      }
      function k(a) {
        return (a[2] - a[0]) * (a[3] - a[1]);
      }
      function m(a) {
        return a[2] - a[0] + (a[3] - a[1]);
      }
      function n(a, c) {
        return a[0] <= c[0] && a[1] <= c[1] && c[2] <= a[2] && c[3] <= a[3];
      }
      function p(a, c) {
        return c[0] <= a[2] && c[1] <= a[3] && c[2] >= a[0] && c[3] >= a[1];
      }
      function q(a, c, d, e, f) {
        for (var g = [c, d],
            h; g.length; )
          d = g.pop(), c = g.pop(), d - c <= e || (h = c + Math.ceil((d - c) / e / 2) * e, r(a, c, d, h, f), g.push(c, h, h, d));
      }
      function r(a, c, d, e, f) {
        for (var g,
            h,
            k,
            m,
            n; d > c; ) {
          600 < d - c && (g = d - c + 1, h = e - c + 1, k = Math.log(g), m = .5 * Math.exp(2 * k / 3), n = .5 * Math.sqrt(k * m * (g - m) / g) * (0 > h - g / 2 ? -1 : 1), k = Math.max(c, Math.floor(e - h * m / g + n)), h = Math.min(d, Math.floor(e + (g - h) * m / g + n)), r(a, k, h, e, f));
          g = a[e];
          h = c;
          m = d;
          t(a, c, e);
          for (0 < f(a[d], g) && t(a, c, d); h < m; ) {
            t(a, h, m);
            h++;
            for (m--; 0 > f(a[h], g); )
              h++;
            for (; 0 < f(a[m], g); )
              m--;
          }
          0 === f(a[c], g) ? t(a, c, m) : (m++, t(a, m, d));
          m <= e && (c = m + 1);
          e <= m && (d = m - 1);
        }
      }
      function t(a, c, d) {
        var e = a[c];
        a[c] = a[d];
        a[d] = e;
      }
      c.prototype = {
        all: function() {
          return this.Tf(this.data, []);
        },
        search: function(a) {
          var c = this.data,
              d = [],
              e = this.kb;
          if (!p(a, c.bbox))
            return d;
          for (var f = [],
              g,
              h,
              k,
              m; c; ) {
            g = 0;
            for (h = c.children.length; g < h; g++)
              k = c.children[g], m = c.Ja ? e(k) : k.bbox, p(a, m) && (c.Ja ? d.push(k) : n(a, m) ? this.Tf(k, d) : f.push(k));
            c = f.pop();
          }
          return d;
        },
        load: function(a) {
          if (!a || !a.length)
            return this;
          if (a.length < this.Yf) {
            for (var c = 0,
                d = a.length; c < d; c++)
              this.za(a[c]);
            return this;
          }
          a = this.Vf(a.slice(), 0, a.length - 1, 0);
          this.data.children.length ? this.data.height === a.height ? this.$f(this.data, a) : (this.data.height < a.height && (c = this.data, this.data = a, a = c), this.Xf(a, this.data.height - a.height - 1, !0)) : this.data = a;
          return this;
        },
        za: function(a) {
          a && this.Xf(a, this.data.height - 1);
          return this;
        },
        clear: function() {
          this.data = {
            children: [],
            height: 1,
            bbox: [Infinity, Infinity, -Infinity, -Infinity],
            Ja: !0
          };
          return this;
        },
        remove: function(a) {
          if (!a)
            return this;
          for (var c = this.data,
              d = this.kb(a),
              e = [],
              f = [],
              g,
              h,
              k,
              m; c || e.length; ) {
            c || (c = e.pop(), h = e[e.length - 1], g = f.pop(), m = !0);
            if (c.Ja && (k = c.children.indexOf(a), -1 !== k)) {
              c.children.splice(k, 1);
              e.push(c);
              this.Si(e);
              break;
            }
            m || c.Ja || !n(c.bbox, d) ? h ? (g++, c = h.children[g], m = !1) : c = null : (e.push(c), f.push(g), g = 0, h = c, c = c.children[0]);
          }
          return this;
        },
        kb: function(a) {
          return a;
        },
        Te: function(a, c) {
          return a[0] - c[0];
        },
        Ue: function(a, c) {
          return a[1] - c[1];
        },
        toJSON: function() {
          return this.data;
        },
        Tf: function(a, c) {
          for (var d = []; a; )
            a.Ja ? c.push.apply(c, a.children) : d.push.apply(d, a.children), a = d.pop();
          return c;
        },
        Vf: function(a, c, e, f) {
          var g = e - c + 1,
              h = this.Qe,
              k;
          if (g <= h)
            return k = {
              children: a.slice(c, e + 1),
              height: 1,
              bbox: null,
              Ja: !0
            }, d(k, this.kb), k;
          f || (f = Math.ceil(Math.log(g) / Math.log(h)), h = Math.ceil(g / Math.pow(h, f - 1)));
          k = {
            children: [],
            height: f,
            bbox: null,
            Ja: !1
          };
          var g = Math.ceil(g / h),
              h = g * Math.ceil(Math.sqrt(h)),
              m,
              n,
              p;
          for (q(a, c, e, h, this.Te); c <= e; c += h)
            for (n = Math.min(c + h - 1, e), q(a, c, n, g, this.Ue), m = c; m <= n; m += g)
              p = Math.min(m + g - 1, n), k.children.push(this.Vf(a, m, p, f - 1));
          d(k, this.kb);
          return k;
        },
        Ri: function(a, c, d, e) {
          for (var f,
              g,
              h,
              m,
              n,
              p,
              q,
              r; ; ) {
            e.push(c);
            if (c.Ja || e.length - 1 === d)
              break;
            q = r = Infinity;
            f = 0;
            for (g = c.children.length; f < g; f++)
              h = c.children[f], n = k(h.bbox), p = h.bbox, p = (Math.max(p[2], a[2]) - Math.min(p[0], a[0])) * (Math.max(p[3], a[3]) - Math.min(p[1], a[1])) - n, p < r ? (r = p, q = n < q ? n : q, m = h) : p === r && n < q && (q = n, m = h);
            c = m;
          }
          return c;
        },
        Xf: function(a, c, d) {
          var e = this.kb;
          d = d ? a.bbox : e(a);
          var e = [],
              g = this.Ri(d, this.data, c, e);
          g.children.push(a);
          for (f(g.bbox, d); 0 <= c; )
            if (e[c].children.length > this.Qe)
              this.$i(e, c), c--;
            else
              break;
          this.Oi(d, e, c);
        },
        $i: function(a, c) {
          var e = a[c],
              f = e.children.length,
              g = this.Yf;
          this.Pi(e, g, f);
          f = this.Qi(e, g, f);
          f = {
            children: e.children.splice(f, e.children.length - f),
            height: e.height,
            bbox: null,
            Ja: !1
          };
          e.Ja && (f.Ja = !0);
          d(e, this.kb);
          d(f, this.kb);
          c ? a[c - 1].children.push(f) : this.$f(e, f);
        },
        $f: function(a, c) {
          this.data = {
            children: [a, c],
            height: a.height + 1,
            bbox: null,
            Ja: !1
          };
          d(this.data, this.kb);
        },
        Qi: function(a, c, d) {
          var f,
              g,
              h,
              m,
              n,
              p,
              q;
          n = p = Infinity;
          for (f = c; f <= d - c; f++)
            g = e(a, 0, f, this.kb), h = e(a, f, d, this.kb), m = Math.max(0, Math.min(g[2], h[2]) - Math.max(g[0], h[0])) * Math.max(0, Math.min(g[3], h[3]) - Math.max(g[1], h[1])), g = k(g) + k(h), m < n ? (n = m, q = f, p = g < p ? g : p) : m === n && g < p && (p = g, q = f);
          return q;
        },
        Pi: function(a, c, d) {
          var e = a.Ja ? this.Te : g,
              f = a.Ja ? this.Ue : h,
              k = this.Uf(a, c, d, e);
          c = this.Uf(a, c, d, f);
          k < c && a.children.sort(e);
        },
        Uf: function(a, c, d, g) {
          a.children.sort(g);
          g = this.kb;
          var h = e(a, 0, c, g),
              k = e(a, d - c, d, g),
              n = m(h) + m(k),
              p,
              q;
          for (p = c; p < d - c; p++)
            q = a.children[p], f(h, a.Ja ? g(q) : q.bbox), n += m(h);
          for (p = d - c - 1; p >= c; p--)
            q = a.children[p], f(k, a.Ja ? g(q) : q.bbox), n += m(k);
          return n;
        },
        Oi: function(a, c, d) {
          for (; 0 <= d; d--)
            f(c[d].bbox, a);
        },
        Si: function(a) {
          for (var c = a.length - 1,
              e; 0 <= c; c--)
            0 === a[c].children.length ? 0 < c ? (e = a[c - 1].children, e.splice(e.indexOf(a[c]), 1)) : this.clear() : d(a[c], this.kb);
        },
        Ui: function(a) {
          var c = ["return a", " - b", ";"];
          this.Te = new Function("a", "b", c.join(a[0]));
          this.Ue = new Function("a", "b", c.join(a[1]));
          this.kb = new Function("a", "return [a" + a.join(", a") + "];");
        }
      };
      "undefined" !== typeof a ? a.ia = c : "undefined" !== typeof self ? self.b = c : window.b = c;
    })();
    Sm = a.ia;
  })();
  function Wm(a) {
    this.a = Sm(a);
    this.b = {};
  }
  l = Wm.prototype;
  l.za = function(a, c) {
    var d = [a[0], a[1], a[2], a[3], c];
    this.a.za(d);
    this.b[x(c)] = d;
  };
  l.load = function(a, c) {
    for (var d = Array(c.length),
        e = 0,
        f = c.length; e < f; e++) {
      var g = a[e],
          h = c[e],
          g = [g[0], g[1], g[2], g[3], h];
      d[e] = g;
      this.b[x(h)] = g;
    }
    this.a.load(d);
  };
  l.remove = function(a) {
    a = x(a);
    var c = this.b[a];
    delete this.b[a];
    return null !== this.a.remove(c);
  };
  function Xm(a, c, d) {
    var e = x(d);
    Mc(a.b[e].slice(0, 4), c) || (a.remove(d), a.za(c, d));
  }
  function Ym(a) {
    return a.a.all().map(function(a) {
      return a[4];
    });
  }
  function Zm(a, c) {
    return a.a.search(c).map(function(a) {
      return a[4];
    });
  }
  l.forEach = function(a, c) {
    return $m(Ym(this), a, c);
  };
  function an(a, c, d, e) {
    return $m(Zm(a, c), d, e);
  }
  function $m(a, c, d) {
    for (var e,
        f = 0,
        g = a.length; f < g && !(e = c.call(d, a[f])); f++)
      ;
    return e;
  }
  l.Oa = function() {
    return pb(this.b);
  };
  l.clear = function() {
    this.a.clear();
    this.b = {};
  };
  l.G = function() {
    return this.a.data.bbox;
  };
  function bn(a) {
    a = a || {};
    rg.call(this, {
      attributions: a.attributions,
      logo: a.logo,
      projection: void 0,
      state: "ready",
      wrapX: void 0 !== a.wrapX ? a.wrapX : !0
    });
    this.H = ua;
    void 0 !== a.loader ? this.H = a.loader : void 0 !== a.url && (this.H = Qm(a.url, a.format));
    this.oa = void 0 !== a.strategy ? a.strategy : Rm;
    var c = void 0 !== a.useSpatialIndex ? a.useSpatialIndex : !0;
    this.a = c ? new Wm : null;
    this.S = new Wm;
    this.i = {};
    this.j = {};
    this.l = {};
    this.o = {};
    this.c = null;
    var d,
        e;
    a.features instanceof Se ? (d = a.features, e = d.a) : fa(a.features) && (e = a.features);
    c || void 0 !== d || (d = new Se(e));
    void 0 !== e && cn(this, e);
    void 0 !== d && dn(this, d);
  }
  y(bn, rg);
  l = bn.prototype;
  l.rb = function(a) {
    var c = x(a).toString();
    if (en(this, c, a)) {
      fn(this, c, a);
      var d = a.X();
      d ? (c = d.G(), this.a && this.a.za(c, a)) : this.i[c] = a;
      this.b(new gn("addfeature", a));
    }
    this.u();
  };
  function fn(a, c, d) {
    a.o[c] = [D(d, "change", a.oh, a), D(d, "propertychange", a.oh, a)];
  }
  function en(a, c, d) {
    var e = !0,
        f = d.Sa();
    void 0 !== f ? f.toString() in a.j ? e = !1 : a.j[f.toString()] = d : a.l[c] = d;
    return e;
  }
  l.Gc = function(a) {
    cn(this, a);
    this.u();
  };
  function cn(a, c) {
    var d,
        e,
        f,
        g,
        h = [],
        k = [],
        m = [];
    e = 0;
    for (f = c.length; e < f; e++)
      g = c[e], d = x(g).toString(), en(a, d, g) && k.push(g);
    e = 0;
    for (f = k.length; e < f; e++) {
      g = k[e];
      d = x(g).toString();
      fn(a, d, g);
      var n = g.X();
      n ? (d = n.G(), h.push(d), m.push(g)) : a.i[d] = g;
    }
    a.a && a.a.load(h, m);
    e = 0;
    for (f = k.length; e < f; e++)
      a.b(new gn("addfeature", k[e]));
  }
  function dn(a, c) {
    var d = !1;
    D(a, "addfeature", function(a) {
      d || (d = !0, c.push(a.feature), d = !1);
    });
    D(a, "removefeature", function(a) {
      d || (d = !0, c.remove(a.feature), d = !1);
    });
    D(c, "add", function(a) {
      d || (a = a.element, d = !0, this.rb(a), d = !1);
    }, a);
    D(c, "remove", function(a) {
      d || (a = a.element, d = !0, this.nb(a), d = !1);
    }, a);
    a.c = c;
  }
  l.clear = function(a) {
    if (a) {
      for (var c in this.o)
        this.o[c].forEach(sb);
      this.c || (this.o = {}, this.j = {}, this.l = {});
    } else if (this.a) {
      this.a.forEach(this.Jf, this);
      for (var d in this.i)
        this.Jf(this.i[d]);
    }
    this.c && this.c.clear();
    this.a && this.a.clear();
    this.S.clear();
    this.i = {};
    this.b(new gn("clear"));
    this.u();
  };
  l.mg = function(a, c) {
    if (this.a)
      return this.a.forEach(a, c);
    if (this.c)
      return this.c.forEach(a, c);
  };
  function hn(a, c, d) {
    a.ub([c[0], c[1], c[0], c[1]], function(a) {
      if (a.X().ig(c))
        return d.call(void 0, a);
    });
  }
  l.ub = function(a, c, d) {
    if (this.a)
      return an(this.a, a, c, d);
    if (this.c)
      return this.c.forEach(c, d);
  };
  l.ng = function(a, c, d) {
    return this.ub(a, function(e) {
      if (e.X().Ia(a) && (e = c.call(d, e)))
        return e;
    });
  };
  l.ug = function() {
    return this.c;
  };
  l.oe = function() {
    var a;
    this.c ? a = this.c.a : this.a && (a = Ym(this.a), pb(this.i) || Ya(a, ob(this.i)));
    return a;
  };
  l.tg = function(a) {
    var c = [];
    hn(this, a, function(a) {
      c.push(a);
    });
    return c;
  };
  l.Ze = function(a) {
    return Zm(this.a, a);
  };
  l.pg = function(a) {
    var c = a[0],
        d = a[1],
        e = null,
        f = [NaN, NaN],
        g = Infinity,
        h = [-Infinity, -Infinity, Infinity, Infinity];
    an(this.a, h, function(a) {
      var m = a.X(),
          n = g;
      g = m.sb(c, d, f, g);
      g < n && (e = a, a = Math.sqrt(g), h[0] = c - a, h[1] = d - a, h[2] = c + a, h[3] = d + a);
    });
    return e;
  };
  l.G = function() {
    return this.a.G();
  };
  l.sg = function(a) {
    a = this.j[a.toString()];
    return void 0 !== a ? a : null;
  };
  l.oh = function(a) {
    a = a.target;
    var c = x(a).toString(),
        d = a.X();
    d ? (d = d.G(), c in this.i ? (delete this.i[c], this.a && this.a.za(d, a)) : this.a && Xm(this.a, d, a)) : c in this.i || (this.a && this.a.remove(a), this.i[c] = a);
    d = a.Sa();
    void 0 !== d ? (d = d.toString(), c in this.l ? (delete this.l[c], this.j[d] = a) : this.j[d] !== a && (jn(this, a), this.j[d] = a)) : c in this.l || (jn(this, a), this.l[c] = a);
    this.u();
    this.b(new gn("changefeature", a));
  };
  l.Oa = function() {
    return this.a.Oa() && pb(this.i);
  };
  l.Oc = function(a, c, d) {
    var e = this.S;
    a = this.oa(a, c);
    var f,
        g;
    f = 0;
    for (g = a.length; f < g; ++f) {
      var h = a[f];
      an(e, h, function(a) {
        return Gc(a.extent, h);
      }) || (this.H.call(this, h, c, d), e.za(h, {extent: h.slice()}));
    }
  };
  l.nb = function(a) {
    var c = x(a).toString();
    c in this.i ? delete this.i[c] : this.a && this.a.remove(a);
    this.Jf(a);
    this.u();
  };
  l.Jf = function(a) {
    var c = x(a).toString();
    this.o[c].forEach(sb);
    delete this.o[c];
    var d = a.Sa();
    void 0 !== d ? delete this.j[d.toString()] : delete this.l[c];
    this.b(new gn("removefeature", a));
  };
  function jn(a, c) {
    for (var d in a.j)
      if (a.j[d] === c) {
        delete a.j[d];
        break;
      }
  }
  function gn(a, c) {
    Eb.call(this, a);
    this.feature = c;
  }
  y(gn, Eb);
  function kn(a) {
    this.c = a.source;
    this.ya = nc();
    this.i = nh();
    this.j = [0, 0];
    this.s = null;
    Wl.call(this, {
      attributions: a.attributions,
      canvasFunction: this.kj.bind(this),
      logo: a.logo,
      projection: a.projection,
      ratio: a.ratio,
      resolutions: a.resolutions,
      state: this.c.V()
    });
    this.H = null;
    this.o = void 0;
    this.kh(a.style);
    D(this.c, "change", this.Am, this);
  }
  y(kn, Wl);
  l = kn.prototype;
  l.kj = function(a, c, d, e, f) {
    var g = new xl(.5 * c / d, a, c);
    this.c.Oc(a, c, f);
    var h = !1;
    this.c.ub(a, function(a) {
      var e;
      if (!(e = h)) {
        var f;
        (e = a.bc()) ? f = e.call(a, c) : this.o && (f = this.o(a, c));
        if (f) {
          var p,
              q = !1;
          fa(f) || (f = [f]);
          e = 0;
          for (p = f.length; e < p; ++e)
            q = El(g, a, f[e], Dl(c, d), this.zm, this) || q;
          e = q;
        } else
          e = !1;
      }
      h = e;
    }, this);
    yl(g);
    if (h)
      return null;
    this.j[0] != e[0] || this.j[1] != e[1] ? (this.i.canvas.width = e[0], this.i.canvas.height = e[1], this.j[0] = e[0], this.j[1] = e[1]) : this.i.clearRect(0, 0, e[0], e[1]);
    a = ln(this, Yc(a), c, d, e);
    g.a(this.i, d, a, 0, {});
    this.s = g;
    return this.i.canvas;
  };
  l.ne = function(a, c, d, e, f) {
    if (this.s) {
      var g = {};
      return this.s.f(a, c, 0, e, function(a) {
        var c = x(a).toString();
        if (!(c in g))
          return g[c] = !0, f(a);
      });
    }
  };
  l.wm = function() {
    return this.c;
  };
  l.xm = function() {
    return this.H;
  };
  l.ym = function() {
    return this.o;
  };
  function ln(a, c, d, e, f) {
    return Ji(a.ya, f[0] / 2, f[1] / 2, e / d, -e / d, 0, -c[0], -c[1]);
  }
  l.zm = function() {
    this.u();
  };
  l.Am = function() {
    tg(this, this.c.V());
  };
  l.kh = function(a) {
    this.H = void 0 !== a ? a : Ok;
    this.o = a ? Mk(this.H) : void 0;
    this.u();
  };
  function mn(a) {
    dl.call(this, a);
    this.f = null;
    this.o = nc();
    this.j = this.i = null;
  }
  y(mn, dl);
  mn.prototype.gb = function(a, c, d, e) {
    var f = this.a;
    return f.da().ne(a, c.viewState.resolution, c.viewState.rotation, c.skippedFeatureUids, function(a) {
      return d.call(e, a, f);
    });
  };
  mn.prototype.yc = function(a, c, d, e) {
    if (this.f && this.f.a())
      if (this.a.da() instanceof kn) {
        if (a = a.slice(), Li(c.pixelToCoordinateMatrix, a, a), this.gb(a, c, fd, this))
          return d.call(e, this.a);
      } else if (this.i || (this.i = nc(), tc(this.o, this.i)), c = [0, 0], Li(this.i, a, c), this.j || (this.j = nh(1, 1)), this.j.clearRect(0, 0, 1, 1), this.j.drawImage(this.f ? this.f.a() : null, c[0], c[1], 1, 1, 0, 0, 1, 1), 0 < this.j.getImageData(0, 0, 1, 1).data[3])
        return d.call(e, this.a);
  };
  mn.prototype.l = function(a, c) {
    var d = a.pixelRatio,
        e = a.viewState,
        f = e.center,
        g = e.resolution,
        h = this.a.da(),
        k = a.viewHints,
        m = a.extent;
    void 0 !== c.extent && (m = $c(m, c.extent));
    k[0] || k[1] || Vc(m) || (e = h.B(m, g, d, e.projection)) && Oi(this, e) && (this.f = e);
    if (this.f) {
      var e = this.f,
          k = e.G(),
          m = e.Z(),
          n = e.f,
          g = d * m / (g * n);
      Ji(this.o, d * a.size[0] / 2, d * a.size[1] / 2, g, g, 0, n * (k[0] - f[0]) / m, n * (f[1] - k[3]) / m);
      this.i = null;
      Qi(a.attributions, e.ea());
      Ri(a, h);
    }
    return !!this.f;
  };
  function nn(a) {
    dl.call(this, a);
    this.i = nh();
    this.j = null;
    this.s = yc();
  }
  y(nn, dl);
  nn.prototype.c = function(a, c, d) {
    var e = a.pixelRatio,
        f = a.viewState,
        g = f.center,
        h = f.projection,
        k = a.size,
        f = e / f.resolution,
        m = this.a,
        n = m.da(),
        p = n.Ud(h),
        q = gl(this, a, 0);
    el(this, "precompose", d, a, q);
    Ib(m, "render") ? (this.i.canvas.width = d.canvas.width, this.i.canvas.height = d.canvas.height, m = this.i) : m = d;
    var r = Math.round(e * k[0] / 2),
        k = Math.round(e * k[1] / 2),
        t = m.globalAlpha;
    m.globalAlpha = c.opacity;
    var v = n.Za(h),
        w = this.j,
        z;
    c = n.cf(h) && 1 == c.opacity;
    c || (w.reverse(), z = []);
    for (var C = 0,
        A = w.length; C < A; ++C) {
      var B = w[C],
          L = B.ja,
          J = v.Da(L, this.s),
          M = L[0],
          P = Pc(v.Da(v.ud(g, M))),
          L = Math.round(Wc(J) * f),
          Aa = Math.round(Xc(J) * f),
          I = Math.round((J[0] - P[0]) * f / L) * L + r + Math.round((P[0] - g[0]) * f),
          J = Math.round((P[1] - J[3]) * f / Aa) * Aa + k + Math.round((g[1] - P[1]) * f);
      if (!c) {
        P = [I, J, I + L, J + Aa];
        m.save();
        for (var ca = 0,
            Da = z.length; ca < Da; ++ca) {
          var Ia = z[ca];
          ad(P, Ia) && (m.beginPath(), m.moveTo(P[0], P[1]), m.lineTo(P[0], P[3]), m.lineTo(P[2], P[3]), m.lineTo(P[2], P[1]), m.moveTo(Ia[0], Ia[1]), m.lineTo(Ia[2], Ia[1]), m.lineTo(Ia[2], Ia[3]), m.lineTo(Ia[0], Ia[3]), m.closePath(), m.clip());
        }
        z.push(P);
      }
      M = Kg(n, M, e, h);
      m.drawImage(B.cb(), p, p, M[0], M[1], I, J, L, Aa);
      c || m.restore();
    }
    m != d && (el(this, "render", m, a, q), d.drawImage(m.canvas, 0, 0));
    m.globalAlpha = t;
    fl(this, d, a, q);
  };
  nn.prototype.l = function(a, c) {
    function d(a) {
      a = a.V();
      return 2 == a || 4 == a || 3 == a && !t;
    }
    var e = a.pixelRatio,
        f = a.viewState,
        g = f.projection,
        h = this.a,
        k = h.da(),
        m = k.Za(g),
        n = Dg(m, f.resolution),
        p = m.Z(n),
        q = f.center;
    p == f.resolution ? (q = Ti(q, p, a.size), f = Zc(q, p, f.rotation, a.size)) : f = a.extent;
    void 0 !== c.extent && (f = $c(f, c.extent));
    if (Vc(f))
      return !1;
    p = Ag(m, f, p);
    q = {};
    q[n] = {};
    var r = this.cd(k, g, q),
        t = h.f(),
        v = yc(),
        w = new Me(0, 0, 0, 0),
        z,
        C,
        A,
        B;
    for (A = p.ra; A <= p.va; ++A)
      for (B = p.xa; B <= p.Aa; ++B)
        z = k.Qb(n, A, B, e, g), !d(z) && z.a && (z = z.a), d(z) ? q[n][z.ja.toString()] = z : (C = xg(m, z.ja, r, w, v), C || (z = zg(m, z.ja, w, v)) && r(n + 1, z));
    r = Object.keys(q).map(Number);
    r.sort(Ua);
    var v = [],
        L,
        w = 0;
    for (A = r.length; w < A; ++w)
      for (L in z = r[w], B = q[z], B)
        z = B[L], 2 == z.V() && v.push(z);
    this.j = v;
    Si(a.usedTiles, k, n, p);
    Ui(a, k, m, e, g, f, n, h.a());
    Pi(a, k);
    Ri(a, k);
    return !0;
  };
  nn.prototype.yc = function(a, c, d, e) {
    var f = this.i.canvas,
        g = c.size;
    f.width = g[0];
    f.height = g[1];
    this.c(c, Ci(this.a), this.i);
    if (0 < this.i.getImageData(a[0], a[1], 1, 1).data[3])
      return d.call(e, this.a);
  };
  function on(a) {
    dl.call(this, a);
    this.j = !1;
    this.J = -1;
    this.B = NaN;
    this.A = yc();
    this.i = this.T = null;
    this.s = nh();
  }
  y(on, dl);
  on.prototype.c = function(a, c, d) {
    var e = a.extent,
        f = a.pixelRatio,
        g = c.Pc ? a.skippedFeatureUids : {},
        h = a.viewState,
        k = h.projection,
        h = h.rotation,
        m = k.G(),
        n = this.a.da(),
        p = gl(this, a, 0);
    el(this, "precompose", d, a, p);
    var q = this.i;
    if (q && !q.Oa()) {
      var r;
      Ib(this.a, "render") ? (this.s.canvas.width = d.canvas.width, this.s.canvas.height = d.canvas.height, r = this.s) : r = d;
      var t = r.globalAlpha;
      r.globalAlpha = c.opacity;
      c = a.size[0] * f;
      var v = a.size[1] * f;
      zk(r, -h, c / 2, v / 2);
      q.a(r, f, p, h, g);
      if (n.J && k.b && !Gc(m, e)) {
        for (var k = e[0],
            n = Wc(m),
            w = 0; k < m[0]; )
          --w, p = n * w, p = gl(this, a, p), q.a(r, f, p, h, g), k += n;
        w = 0;
        for (k = e[2]; k > m[2]; )
          ++w, p = n * w, p = gl(this, a, p), q.a(r, f, p, h, g), k -= n;
        p = gl(this, a, 0);
      }
      zk(r, h, c / 2, v / 2);
      r != d && (el(this, "render", r, a, p), d.drawImage(r.canvas, 0, 0));
      r.globalAlpha = t;
    }
    fl(this, d, a, p);
  };
  on.prototype.gb = function(a, c, d, e) {
    if (this.i) {
      var f = this.a,
          g = {};
      return this.i.f(a, c.viewState.resolution, c.viewState.rotation, {}, function(a) {
        var c = x(a).toString();
        if (!(c in g))
          return g[c] = !0, d.call(e, a, f);
      });
    }
  };
  on.prototype.D = function() {
    Ni(this);
  };
  on.prototype.l = function(a) {
    function c(a) {
      var c,
          e = a.bc();
      e ? c = e.call(a, n) : (e = d.f) && (c = e(a, n));
      if (c) {
        if (c) {
          e = !1;
          if (fa(c))
            for (var f = 0,
                g = c.length; f < g; ++f)
              e = El(r, a, c[f], Dl(n, p), this.D, this) || e;
          else
            e = El(r, a, c, Dl(n, p), this.D, this) || e;
          a = e;
        } else
          a = !1;
        this.j = this.j || a;
      }
    }
    var d = this.a,
        e = d.da();
    Qi(a.attributions, e.ea());
    Ri(a, e);
    var f = a.viewHints[0],
        g = a.viewHints[1],
        h = d.s,
        k = d.A;
    if (!this.j && !h && f || !k && g)
      return !0;
    var m = a.extent,
        k = a.viewState,
        f = k.projection,
        n = k.resolution,
        p = a.pixelRatio,
        g = d.g,
        q = d.a,
        h = Qk(d);
    void 0 === h && (h = Cl);
    m = Ac(m, q * n);
    q = k.projection.G();
    e.J && k.projection.b && !Gc(q, a.extent) && (a = Math.max(Wc(m) / 2, Wc(q)), m[0] = q[0] - a, m[2] = q[2] + a);
    if (!this.j && this.B == n && this.J == g && this.T == h && Gc(this.A, m))
      return !0;
    Db(this.i);
    this.i = null;
    this.j = !1;
    var r = new xl(.5 * n / p, m, n, d.a);
    e.Oc(m, n, f);
    if (h) {
      var t = [];
      e.ub(m, function(a) {
        t.push(a);
      }, this);
      t.sort(h);
      t.forEach(c, this);
    } else
      e.ub(m, c, this);
    yl(r);
    this.B = n;
    this.J = g;
    this.T = h;
    this.A = m;
    this.i = r;
    return !0;
  };
  function pn(a, c) {
    var d = /\{z\}/g,
        e = /\{x\}/g,
        f = /\{y\}/g,
        g = /\{-y\}/g;
    return function(h) {
      if (h)
        return a.replace(d, h[0].toString()).replace(e, h[1].toString()).replace(f, function() {
          return (-h[2] - 1).toString();
        }).replace(g, function() {
          var a = c.b ? c.b[h[0]] : null;
          return (a.Aa - a.xa + 1 + h[2]).toString();
        });
    };
  }
  function qn(a, c) {
    for (var d = a.length,
        e = Array(d),
        f = 0; f < d; ++f)
      e[f] = pn(a[f], c);
    return rn(e);
  }
  function rn(a) {
    return 1 === a.length ? a[0] : function(c, d, e) {
      if (c)
        return a[$b((c[1] << c[0]) + c[2], a.length)](c, d, e);
    };
  }
  function sn() {}
  function tn(a) {
    var c = [],
        d = /\{(\d)-(\d)\}/.exec(a) || /\{([a-z])-([a-z])\}/.exec(a);
    if (d) {
      var e = d[2].charCodeAt(0),
          f;
      for (f = d[1].charCodeAt(0); f <= e; ++f)
        c.push(a.replace(d[0], String.fromCharCode(f)));
    } else
      c.push(a);
    return c;
  }
  ;
  function un(a) {
    Ig.call(this, {
      attributions: a.attributions,
      Re: a.Re,
      extent: a.extent,
      logo: a.logo,
      opaque: a.opaque,
      projection: a.projection,
      state: a.state,
      tileGrid: a.tileGrid,
      tilePixelRatio: a.tilePixelRatio,
      wrapX: a.wrapX
    });
    this.tileLoadFunction = a.tileLoadFunction;
    this.tileUrlFunction = this.qc ? this.qc.bind(this) : sn;
    this.urls = null;
    a.urls ? this.Ya(a.urls) : a.url && this.Xa(a.url);
    a.tileUrlFunction && this.Na(a.tileUrlFunction);
  }
  y(un, Ig);
  l = un.prototype;
  l.$a = function() {
    return this.tileLoadFunction;
  };
  l.ab = function() {
    return this.tileUrlFunction;
  };
  l.bb = function() {
    return this.urls;
  };
  l.nh = function(a) {
    a = a.target;
    switch (a.V()) {
      case 1:
        this.b(new Mg("tileloadstart", a));
        break;
      case 2:
        this.b(new Mg("tileloadend", a));
        break;
      case 3:
        this.b(new Mg("tileloaderror", a));
    }
  };
  l.jb = function(a) {
    this.a.clear();
    this.tileLoadFunction = a;
    this.u();
  };
  l.Na = function(a) {
    this.a.clear();
    this.tileUrlFunction = a;
    this.u();
  };
  l.Xa = function(a) {
    a = this.urls = tn(a);
    this.Na(this.qc ? this.qc.bind(this) : qn(a, this.tileGrid));
  };
  l.Ya = function(a) {
    this.urls = a;
    this.Na(this.qc ? this.qc.bind(this) : qn(a, this.tileGrid));
  };
  l.Of = function(a, c, d) {
    a = this.Db(a, c, d);
    lg(this.a, a) && this.a.get(a);
  };
  function vn(a) {
    un.call(this, {
      attributions: a.attributions,
      Re: 128,
      extent: a.extent,
      logo: a.logo,
      opaque: a.opaque,
      projection: a.projection,
      state: a.state,
      tileGrid: a.tileGrid,
      tileLoadFunction: a.tileLoadFunction ? a.tileLoadFunction : wn,
      tileUrlFunction: a.tileUrlFunction,
      tilePixelRatio: a.tilePixelRatio,
      url: a.url,
      urls: a.urls,
      wrapX: void 0 === a.wrapX ? !0 : a.wrapX
    });
    this.c = a.format ? a.format : null;
    this.tileClass = a.tileClass ? a.tileClass : Zl;
  }
  y(vn, un);
  vn.prototype.Qb = function(a, c, d, e, f) {
    var g = this.Db(a, c, d);
    if (lg(this.a, g))
      return this.a.get(g);
    a = [a, c, d];
    e = (c = Lg(this, a, f)) ? this.tileUrlFunction(c, e, f) : void 0;
    e = new this.tileClass(a, void 0 !== e ? 0 : 4, void 0 !== e ? e : "", this.c, this.tileLoadFunction);
    D(e, "change", this.nh, this);
    this.a.set(g, e);
    return e;
  };
  function wn(a, c) {
    a.Th(Pm(c, a.j));
  }
  ;
  function xn(a) {
    dl.call(this, a);
    this.s = nh();
    this.i = !1;
    this.A = [];
    this.T = yc();
    this.J = [NaN, NaN];
    this.j = nc();
  }
  y(xn, dl);
  xn.prototype.c = function(a, c, d) {
    var e = a.pixelRatio,
        f = c.Pc ? a.skippedFeatureUids : {},
        g = a.viewState,
        h = g.center,
        k = g.projection,
        m = g.resolution,
        g = g.rotation,
        n = a.size,
        p = e / m,
        q = this.a,
        r = q.da(),
        t = r.uc(e),
        v = gl(this, a, 0);
    el(this, "precompose", d, a, v);
    Ib(q, "render") ? (this.s.canvas.width = d.canvas.width, this.s.canvas.height = d.canvas.height, q = this.s) : q = d;
    var w = q.globalAlpha;
    q.globalAlpha = c.opacity;
    c = this.A;
    var z = r.tileGrid,
        C,
        A,
        B,
        L,
        J,
        M,
        P,
        Aa,
        I,
        ca,
        Da,
        Ia,
        ab;
    B = 0;
    for (L = c.length; B < L; ++B)
      if (ca = c[B], J = ca.c, Aa = z.Da(ca.ja, this.T), C = ca.ja[0], Ia = Sb(z.Ua(C), this.J), I = "tile-pixels" == ca.g.a, M = z.Z(C), Da = M / t, A = M / m, M = Math.round(e * n[0] / 2), P = Math.round(e * n[1] / 2), ab = Ia[0] * e * A, A *= Ia[1] * e, Ia = Ia[0] * e, ab < Ia / 4 || ab > 4 * Ia)
        I ? (Aa = Sc(Aa), Da = Ji(this.j, M, P, p * Da, p * Da, g, (Aa[0] - h[0]) / Da, (h[1] - Aa[1]) / Da)) : Da = v, J.Vc.a(q, e, Da, g, f);
      else {
        C = Kg(r, C, e, k);
        I ? Da = Ji(this.j, 0, 0, p * Da, p * Da, g, -C[0] / 2, -C[1] / 2) : (Da = Yc(Aa), Da = Ji(this.j, 0, 0, p, -p, -g, -Da[0], -Da[1]));
        ca = ca.o;
        if (J.resolution !== m || J.rotation !== g)
          J.resolution = m, J.rotation = g, ca.canvas.width = ab + .5, ca.canvas.height = A + .5, ca.translate(ab / 2, A / 2), ca.rotate(-g), J.Vc.a(ca, e, Da, g, f, !1);
        J = Ji(this.j, 0, 0, p, -p, 0, -h[0], -h[1]);
        J = Nd(Sc(Aa), 0, 1, 2, J);
        q.drawImage(ca.canvas, Math.round(J[0] + M), Math.round(J[1]) + P);
      }
    q != d && (el(this, "render", q, a, v), d.drawImage(q.canvas, 0, 0));
    q.globalAlpha = w;
    fl(this, d, a, v);
  };
  function yn(a, c, d, e, f) {
    function g(a) {
      var c,
          e = a.bc();
      e ? c = e.call(a, z) : (e = d.f) && (c = e(a, z));
      if (c) {
        fa(c) || (c = [c]);
        var e = A,
            f = C;
        if (c) {
          var g = !1;
          if (fa(c))
            for (var h = 0,
                k = c.length; h < k; ++h)
              g = El(f, a, c[h], e, this.B, this) || g;
          else
            g = El(f, a, c, e, this.B, this) || g;
          a = g;
        } else
          a = !1;
        this.i = this.i || a;
        m.kd = m.kd || a;
      }
    }
    var h = d.g,
        k = Qk(d) || null,
        m = c.c;
    if (m.kd || m.Kh != h || m.Kf != k) {
      Db(m.Vc);
      m.Vc = null;
      m.kd = !1;
      var n = d.da(),
          p = n.tileGrid,
          q = c.ja,
          r = c.g,
          t = "tile-pixels" == r.a,
          v,
          w;
      t ? (v = Kg(n, q[0], e, c.g), v = [0, 0, v[0], v[1]]) : (v = p.Da(q), Hd(f, r) || (w = !0, c.g = f));
      var z = p.Z(q[0]),
          n = t ? n.uc(e) : z;
      m.kd = !1;
      var C = new xl(0, v, n, d.a),
          A = Dl(n, e);
      c = c.i;
      k && k !== m.Kf && c.sort(k);
      n = 0;
      for (p = c.length; n < p; ++n)
        e = c[n], w && e.X().fb(r, f), g.call(a, e);
      yl(C);
      m.Kh = h;
      m.Kf = k;
      m.Vc = C;
      m.resolution = NaN;
    }
  }
  xn.prototype.gb = function(a, c, d, e) {
    var f = c.pixelRatio,
        g = c.viewState.resolution;
    c = c.viewState.rotation;
    var h = this.a,
        k = {},
        m = this.A,
        n = h.da(),
        p = n.tileGrid,
        q,
        r,
        t,
        v,
        w,
        z;
    t = 0;
    for (v = m.length; t < v; ++t)
      z = m[t], r = z.ja, w = n.tileGrid.Da(r, this.T), Dc(w, a) && ("tile-pixels" === z.g.a ? (w = Sc(w), g = n.uc(f), r = p.Z(r[0]) / g, r = [(a[0] - w[0]) / r, (w[1] - a[1]) / r]) : r = a, z = z.c.Vc, q = q || z.f(r, g, c, {}, function(a) {
        var c = x(a).toString();
        if (!(c in k))
          return k[c] = !0, d.call(e, a, h);
      }));
    return q;
  };
  xn.prototype.B = function() {
    Ni(this);
  };
  xn.prototype.l = function(a, c) {
    var d = this.a,
        e = d.da();
    Qi(a.attributions, e.ea());
    Ri(a, e);
    var f = a.viewHints[0],
        g = a.viewHints[1],
        h = d.s,
        k = d.A;
    if (!this.i && !h && f || !k && g)
      return !0;
    h = a.extent;
    c.extent && (h = $c(h, c.extent));
    if (Vc(h))
      return !1;
    for (var g = a.viewState,
        f = g.projection,
        k = g.resolution,
        g = a.pixelRatio,
        m = e.tileGrid,
        n = m.Pb(),
        p = n.length - 1; 0 < p && n[p] < k; )
      --p;
    n = yg(m, h, p);
    Si(a.usedTiles, e, p, n);
    Ui(a, e, m, g, f, h, p, d.i());
    Pi(a, e);
    h = {};
    h[p] = {};
    var q = this.cd(e, f, h),
        r = d.S(),
        t = this.T,
        v = new Me(0, 0, 0, 0),
        w,
        z,
        C;
    for (z = n.ra; z <= n.va; ++z)
      for (C = n.xa; C <= n.Aa; ++C)
        k = e.Qb(p, z, C, g, f), w = k.V(), 2 == w || 4 == w || 3 == w && !r ? h[p][k.ja.toString()] = k : (w = xg(m, k.ja, q, v, t), w || (k = zg(m, k.ja, v, t)) && q(p + 1, k));
    this.i = !1;
    e = Object.keys(h).map(Number);
    e.sort(Ua);
    for (var m = [],
        A,
        p = 0,
        n = e.length; p < n; ++p)
      for (A in k = e[p], q = h[k], q)
        k = q[A], 2 == k.V() && (m.push(k), yn(this, k, d, g, f));
    this.A = m;
    return !0;
  };
  function zn(a, c) {
    $i.call(this, 0, c);
    this.a = nh();
    this.j = nh();
    this.b = this.a.canvas;
    this.b.style.width = "100%";
    this.b.style.height = "100%";
    this.b.className = "ol-unselectable";
    If(a, this.b, 0);
    this.c = this.j.canvas;
    this.o = [0, 0];
    this.A = yc();
    this.f = !0;
    this.l = nc();
  }
  y(zn, $i);
  zn.prototype.Ve = function(a) {
    return a instanceof vk ? new mn(a) : a instanceof G ? new nn(a) : a instanceof K ? new xn(a) : a instanceof H ? new on(a) : null;
  };
  function An(a, c, d) {
    var e = a.i,
        f = a.a;
    if (Ib(e, c)) {
      var g = d.extent,
          h = d.pixelRatio,
          k = d.viewState.rotation,
          m = d.pixelRatio,
          n = d.viewState,
          p = n.resolution;
      a = Ji(a.l, a.b.width / 2, a.b.height / 2, m / p, -m / p, -n.rotation, -n.center[0], -n.center[1]);
      g = new Rk(f, h, g, a, k);
      e.b(new Ei(c, e, g, d, f, null));
      cl(g);
    }
  }
  zn.prototype.W = function() {
    return "canvas";
  };
  zn.prototype.Ce = function(a) {
    if (a) {
      var c,
          d = a.pixelRatio,
          e = a.size[0] * d,
          f = a.size[1] * d;
      this.b.width = e;
      this.b.height = f;
      var g = a.viewState.rotation,
          h;
      if (g) {
        c = this.j;
        h = Zc(this.o, d, g, a.size, this.A);
        var d = Wc(h),
            k = Xc(h);
        this.c.width = d + .5;
        this.c.height = k + .5;
        this.j.translate(Math.round((d - e) / 2), Math.round((k - f) / 2));
      } else
        c = this.a;
      aj(a);
      An(this, "precompose", a);
      d = a.layerStatesArray;
      cb(d);
      var k = a.viewState.resolution,
          m,
          n,
          p,
          q;
      m = 0;
      for (n = d.length; m < n; ++m)
        q = d[m], p = q.layer, p = cj(this, p), Gi(q, k) && "ready" == q.H && p.l(a, q) && p.c(a, q, c);
      g && (this.a.translate(e / 2, f / 2), this.a.rotate(g), this.a.drawImage(this.c, Math.round(h[0]), Math.round(h[1])), this.a.rotate(-g), this.a.translate(-e / 2, -f / 2));
      An(this, "postcompose", a);
      this.f || (bg(this.b, !0), this.f = !0);
      dj(this, a);
      a.postRenderFunctions.push(bj);
    } else
      this.f && (bg(this.b, !1), this.f = !1);
  };
  function Bn(a, c) {
    Mi.call(this, a);
    this.target = c;
  }
  y(Bn, Mi);
  Bn.prototype.i = ua;
  Bn.prototype.o = ua;
  function Cn(a) {
    var c = document.createElement("DIV");
    c.style.position = "absolute";
    Bn.call(this, a, c);
    this.f = null;
    this.c = pc();
  }
  y(Cn, Bn);
  Cn.prototype.gb = function(a, c, d, e) {
    var f = this.a;
    return f.da().ne(a, c.viewState.resolution, c.viewState.rotation, c.skippedFeatureUids, function(a) {
      return d.call(e, a, f);
    });
  };
  Cn.prototype.i = function() {
    Hf(this.target);
    this.f = null;
  };
  Cn.prototype.j = function(a, c) {
    var d = a.viewState,
        e = d.center,
        f = d.resolution,
        g = d.rotation,
        h = this.f,
        k = this.a.da(),
        m = a.viewHints,
        n = a.extent;
    void 0 !== c.extent && (n = $c(n, c.extent));
    m[0] || m[1] || Vc(n) || (d = k.B(n, f, a.pixelRatio, d.projection)) && Oi(this, d) && (h = d);
    h && (m = h.G(), n = h.Z(), d = nc(), Ji(d, a.size[0] / 2, a.size[1] / 2, n / f, n / f, g, (m[0] - e[0]) / n, (e[1] - m[3]) / n), h != this.f && (e = h.a(this), e.style.maxWidth = "none", e.style.position = "absolute", Hf(this.target), this.target.appendChild(e), this.f = h), Ki(d, this.c) || (rh(this.target, d), qc(this.c, d)), Qi(a.attributions, h.ea()), Ri(a, k));
    return !0;
  };
  function Dn(a) {
    var c = document.createElement("DIV");
    c.style.position = "absolute";
    Bn.call(this, a, c);
    this.c = !0;
    this.s = 1;
    this.l = 0;
    this.f = {};
  }
  y(Dn, Bn);
  Dn.prototype.i = function() {
    Hf(this.target);
    this.l = 0;
  };
  Dn.prototype.j = function(a, c) {
    if (!c.visible)
      return this.c && (bg(this.target, !1), this.c = !1), !0;
    var d = a.pixelRatio,
        e = a.viewState,
        f = e.projection,
        g = this.a,
        h = g.da(),
        k = h.Za(f),
        m = h.Ud(f),
        n = Dg(k, e.resolution),
        p = k.Z(n),
        q = e.center,
        r;
    p == e.resolution ? (q = Ti(q, p, a.size), r = Zc(q, p, e.rotation, a.size)) : r = a.extent;
    void 0 !== c.extent && (r = $c(r, c.extent));
    var p = Ag(k, r, p),
        t = {};
    t[n] = {};
    var v = this.cd(h, f, t),
        w = g.f(),
        z = yc(),
        C = new Me(0, 0, 0, 0),
        A,
        B,
        L,
        J;
    for (L = p.ra; L <= p.va; ++L)
      for (J = p.xa; J <= p.Aa; ++J)
        A = h.Qb(n, L, J, d, f), B = A.V(), B = 2 == B || 4 == B || 3 == B && !w, !B && A.a && (A = A.a), B = A.V(), 2 == B ? t[n][A.ja.toString()] = A : 4 == B || 3 == B && !w || (B = xg(k, A.ja, v, C, z), B || (A = zg(k, A.ja, C, z)) && v(n + 1, A));
    var M;
    if (this.l != h.g) {
      for (M in this.f)
        w = this.f[+M], Jf(w.target);
      this.f = {};
      this.l = h.g;
    }
    z = Object.keys(t).map(Number);
    z.sort(Ua);
    var v = {},
        P;
    L = 0;
    for (J = z.length; L < J; ++L) {
      M = z[L];
      M in this.f ? w = this.f[M] : (w = k.ud(q, M), w = new En(k, w), v[M] = !0, this.f[M] = w);
      M = t[M];
      for (P in M) {
        A = w;
        B = M[P];
        var Aa = m,
            I = B.ja,
            ca = I[0],
            Da = I[1],
            Ia = I[2],
            I = I.toString();
        if (!(I in A.a)) {
          var ca = Sb(A.c.Ua(ca), A.l),
              ab = B.cb(A),
              Pa = ab.style;
          Pa.maxWidth = "none";
          var Ec = void 0,
              Uc = void 0;
          0 < Aa ? (Ec = document.createElement("DIV"), Uc = Ec.style, Uc.overflow = "hidden", Uc.width = ca[0] + "px", Uc.height = ca[1] + "px", Pa.position = "absolute", Pa.left = -Aa + "px", Pa.top = -Aa + "px", Pa.width = ca[0] + 2 * Aa + "px", Pa.height = ca[1] + 2 * Aa + "px", Ec.appendChild(ab)) : (Pa.width = ca[0] + "px", Pa.height = ca[1] + "px", Ec = ab, Uc = Pa);
          Uc.position = "absolute";
          Uc.left = (Da - A.g[1]) * ca[0] + "px";
          Uc.top = (A.g[2] - Ia) * ca[1] + "px";
          A.b || (A.b = document.createDocumentFragment());
          A.b.appendChild(Ec);
          A.a[I] = B;
        }
      }
      w.b && (w.target.appendChild(w.b), w.b = null);
    }
    m = Object.keys(this.f).map(Number);
    m.sort(Ua);
    L = nc();
    P = 0;
    for (z = m.length; P < z; ++P)
      if (M = m[P], w = this.f[M], M in t)
        if (A = w.Z(), J = w.Ha(), Ji(L, a.size[0] / 2, a.size[1] / 2, A / e.resolution, A / e.resolution, e.rotation, (J[0] - q[0]) / A, (q[1] - J[1]) / A), w.setTransform(L), M in v) {
          for (--M; 0 <= M; --M)
            if (M in this.f) {
              J = this.f[M].target;
              J.parentNode && J.parentNode.insertBefore(w.target, J.nextSibling);
              break;
            }
          0 > M && If(this.target, w.target, 0);
        } else {
          if (!a.viewHints[0] && !a.viewHints[1]) {
            B = yg(w.c, r, w.g[0], C);
            M = [];
            A = J = void 0;
            for (A in w.a)
              J = w.a[A], B.contains(J.ja) || M.push(J);
            Aa = B = void 0;
            B = 0;
            for (Aa = M.length; B < Aa; ++B)
              J = M[B], A = J.ja.toString(), Jf(J.cb(w)), delete w.a[A];
          }
        }
      else
        Jf(w.target), delete this.f[M];
    c.opacity != this.s && (this.s = this.target.style.opacity = c.opacity);
    c.visible && !this.c && (bg(this.target, !0), this.c = !0);
    Si(a.usedTiles, h, n, p);
    Ui(a, h, k, d, f, r, n, g.a());
    Pi(a, h);
    Ri(a, h);
    return !0;
  };
  function En(a, c) {
    this.target = document.createElement("DIV");
    this.target.style.position = "absolute";
    this.target.style.width = "100%";
    this.target.style.height = "100%";
    this.c = a;
    this.g = c;
    this.i = Sc(a.Da(c));
    this.j = a.Z(c[0]);
    this.a = {};
    this.b = null;
    this.f = pc();
    this.l = [0, 0];
  }
  En.prototype.Ha = function() {
    return this.i;
  };
  En.prototype.Z = function() {
    return this.j;
  };
  En.prototype.setTransform = function(a) {
    Ki(a, this.f) || (rh(this.target, a), qc(this.f, a));
  };
  function Fn(a) {
    this.l = nh();
    var c = this.l.canvas;
    c.style.maxWidth = "none";
    c.style.position = "absolute";
    Bn.call(this, a, c);
    this.c = !1;
    this.B = -1;
    this.T = NaN;
    this.s = yc();
    this.f = this.A = null;
    this.H = nc();
    this.D = nc();
  }
  y(Fn, Bn);
  Fn.prototype.o = function(a, c) {
    var d = a.viewState,
        e = d.center,
        f = d.rotation,
        g = d.resolution,
        d = a.pixelRatio,
        h = a.size[0],
        k = a.size[1],
        m = h * d,
        n = k * d,
        e = Ji(this.H, d * h / 2, d * k / 2, d / g, -d / g, -f, -e[0], -e[1]),
        g = this.l;
    g.canvas.width = m;
    g.canvas.height = n;
    h = Ji(this.D, 0, 0, 1 / d, 1 / d, 0, -(m - h) / 2 * d, -(n - k) / 2 * d);
    rh(g.canvas, h);
    Gn(this, "precompose", a, e);
    (h = this.f) && !h.Oa() && (g.globalAlpha = c.opacity, h.a(g, d, e, f, c.Pc ? a.skippedFeatureUids : {}), Gn(this, "render", a, e));
    Gn(this, "postcompose", a, e);
  };
  function Gn(a, c, d, e) {
    var f = a.l;
    a = a.a;
    Ib(a, c) && (e = new Rk(f, d.pixelRatio, d.extent, e, d.viewState.rotation), a.b(new Ei(c, a, e, d, f, null)), cl(e));
  }
  Fn.prototype.gb = function(a, c, d, e) {
    if (this.f) {
      var f = this.a,
          g = {};
      return this.f.f(a, c.viewState.resolution, c.viewState.rotation, {}, function(a) {
        var c = x(a).toString();
        if (!(c in g))
          return g[c] = !0, d.call(e, a, f);
      });
    }
  };
  Fn.prototype.J = function() {
    Ni(this);
  };
  Fn.prototype.j = function(a) {
    function c(a) {
      var c,
          e = a.bc();
      e ? c = e.call(a, m) : (e = d.f) && (c = e(a, m));
      if (c) {
        if (c) {
          e = !1;
          if (fa(c))
            for (var f = 0,
                g = c.length; f < g; ++f)
              e = El(p, a, c[f], Dl(m, n), this.J, this) || e;
          else
            e = El(p, a, c, Dl(m, n), this.J, this) || e;
          a = e;
        } else
          a = !1;
        this.c = this.c || a;
      }
    }
    var d = this.a,
        e = d.da();
    Qi(a.attributions, e.ea());
    Ri(a, e);
    var f = a.viewHints[0],
        g = a.viewHints[1],
        h = d.s,
        k = d.A;
    if (!this.c && !h && f || !k && g)
      return !0;
    var g = a.extent,
        h = a.viewState,
        f = h.projection,
        m = h.resolution,
        n = a.pixelRatio;
    a = d.g;
    k = d.a;
    h = Qk(d);
    void 0 === h && (h = Cl);
    g = Ac(g, k * m);
    if (!this.c && this.T == m && this.B == a && this.A == h && Gc(this.s, g))
      return !0;
    Db(this.f);
    this.f = null;
    this.c = !1;
    var p = new xl(.5 * m / n, g, m, d.a);
    e.Oc(g, m, f);
    if (h) {
      var q = [];
      e.ub(g, function(a) {
        q.push(a);
      }, this);
      q.sort(h);
      q.forEach(c, this);
    } else
      e.ub(g, c, this);
    yl(p);
    this.T = m;
    this.B = a;
    this.A = h;
    this.s = g;
    this.f = p;
    return !0;
  };
  function Hn(a, c) {
    $i.call(this, 0, c);
    this.f = nh();
    var d = this.f.canvas;
    d.style.position = "absolute";
    d.style.width = "100%";
    d.style.height = "100%";
    d.className = "ol-unselectable";
    If(a, d, 0);
    this.c = nc();
    this.b = document.createElement("DIV");
    this.b.className = "ol-unselectable";
    d = this.b.style;
    d.position = "absolute";
    d.width = "100%";
    d.height = "100%";
    D(this.b, "touchstart", Gb);
    If(a, this.b, 0);
    this.a = !0;
  }
  y(Hn, $i);
  Hn.prototype.fa = function() {
    Jf(this.b);
    Hn.ha.fa.call(this);
  };
  Hn.prototype.Ve = function(a) {
    if (a instanceof vk)
      a = new Cn(a);
    else if (a instanceof G)
      a = new Dn(a);
    else if (a instanceof H)
      a = new Fn(a);
    else
      return null;
    return a;
  };
  function In(a, c, d) {
    var e = a.i;
    if (Ib(e, c)) {
      var f = d.extent,
          g = d.pixelRatio,
          h = d.viewState,
          k = h.rotation,
          m = a.f,
          n = m.canvas;
      Ji(a.c, n.width / 2, n.height / 2, g / h.resolution, -g / h.resolution, -h.rotation, -h.center[0], -h.center[1]);
      a = new Rk(m, g, f, a.c, k);
      e.b(new Ei(c, e, a, d, m, null));
      cl(a);
    }
  }
  Hn.prototype.W = function() {
    return "dom";
  };
  Hn.prototype.Ce = function(a) {
    if (a) {
      var c = this.i;
      if (Ib(c, "precompose") || Ib(c, "postcompose")) {
        var c = this.f.canvas,
            d = a.pixelRatio;
        c.width = a.size[0] * d;
        c.height = a.size[1] * d;
      }
      In(this, "precompose", a);
      c = a.layerStatesArray;
      cb(c);
      var d = a.viewState.resolution,
          e,
          f,
          g,
          h;
      e = 0;
      for (f = c.length; e < f; ++e)
        h = c[e], g = h.layer, g = cj(this, g), If(this.b, g.target, e), Gi(h, d) && "ready" == h.H ? g.j(a, h) && g.o(a, h) : g.i();
      var c = a.layerStates,
          k;
      for (k in this.g)
        k in c || (g = this.g[k], Jf(g.target));
      this.a || (bg(this.b, !0), this.a = !0);
      aj(a);
      dj(this, a);
      a.postRenderFunctions.push(bj);
      In(this, "postcompose", a);
    } else
      this.a && (bg(this.b, !1), this.a = !1);
  };
  function Jn(a) {
    this.b = a;
  }
  function Kn(a) {
    this.b = a;
  }
  y(Kn, Jn);
  Kn.prototype.W = function() {
    return 35632;
  };
  function Ln(a) {
    this.b = a;
  }
  y(Ln, Jn);
  Ln.prototype.W = function() {
    return 35633;
  };
  function Mn() {
    this.b = "precision mediump float;varying vec2 a;varying float b;uniform float k;uniform sampler2D l;void main(void){vec4 texColor=texture2D(l,a);gl_FragColor.rgb=texColor.rgb;float alpha=texColor.a*b*k;if(alpha==0.0){discard;}gl_FragColor.a=alpha;}";
  }
  y(Mn, Kn);
  da(Mn);
  function Nn() {
    this.b = "varying vec2 a;varying float b;attribute vec2 c;attribute vec2 d;attribute vec2 e;attribute float f;attribute float g;uniform mat4 h;uniform mat4 i;uniform mat4 j;void main(void){mat4 offsetMatrix=i;if(g==1.0){offsetMatrix=i*j;}vec4 offsets=offsetMatrix*vec4(e,0.,0.);gl_Position=h*vec4(c,0.,1.)+offsets;a=d;b=f;}";
  }
  y(Nn, Ln);
  da(Nn);
  function On(a, c) {
    this.l = a.getUniformLocation(c, "j");
    this.o = a.getUniformLocation(c, "i");
    this.i = a.getUniformLocation(c, "k");
    this.j = a.getUniformLocation(c, "h");
    this.b = a.getAttribLocation(c, "e");
    this.a = a.getAttribLocation(c, "f");
    this.f = a.getAttribLocation(c, "c");
    this.g = a.getAttribLocation(c, "g");
    this.c = a.getAttribLocation(c, "d");
  }
  ;
  function Pn(a) {
    this.b = void 0 !== a ? a : [];
  }
  ;
  function Qn(a, c) {
    this.A = a;
    this.a = c;
    this.g = {};
    this.i = {};
    this.c = {};
    this.o = this.s = this.j = this.l = null;
    (this.f = Va(ta, "OES_element_index_uint")) && c.getExtension("OES_element_index_uint");
    D(this.A, "webglcontextlost", this.rn, this);
    D(this.A, "webglcontextrestored", this.sn, this);
  }
  function Rn(a, c, d) {
    var e = a.a,
        f = d.b,
        g = String(x(d));
    if (g in a.g)
      e.bindBuffer(c, a.g[g].buffer);
    else {
      var h = e.createBuffer();
      e.bindBuffer(c, h);
      var k;
      34962 == c ? k = new Float32Array(f) : 34963 == c && (k = a.f ? new Uint32Array(f) : new Uint16Array(f));
      e.bufferData(c, k, 35044);
      a.g[g] = {
        Gb: d,
        buffer: h
      };
    }
  }
  function Sn(a, c) {
    var d = a.a,
        e = String(x(c)),
        f = a.g[e];
    d.isContextLost() || d.deleteBuffer(f.buffer);
    delete a.g[e];
  }
  l = Qn.prototype;
  l.fa = function() {
    var a = this.a;
    if (!a.isContextLost()) {
      for (var c in this.g)
        a.deleteBuffer(this.g[c].buffer);
      for (c in this.c)
        a.deleteProgram(this.c[c]);
      for (c in this.i)
        a.deleteShader(this.i[c]);
      a.deleteFramebuffer(this.j);
      a.deleteRenderbuffer(this.o);
      a.deleteTexture(this.s);
    }
  };
  l.qn = function() {
    return this.a;
  };
  function Tn(a) {
    if (!a.j) {
      var c = a.a,
          d = c.createFramebuffer();
      c.bindFramebuffer(c.FRAMEBUFFER, d);
      var e = Un(c, 1, 1),
          f = c.createRenderbuffer();
      c.bindRenderbuffer(c.RENDERBUFFER, f);
      c.renderbufferStorage(c.RENDERBUFFER, c.DEPTH_COMPONENT16, 1, 1);
      c.framebufferTexture2D(c.FRAMEBUFFER, c.COLOR_ATTACHMENT0, c.TEXTURE_2D, e, 0);
      c.framebufferRenderbuffer(c.FRAMEBUFFER, c.DEPTH_ATTACHMENT, c.RENDERBUFFER, f);
      c.bindTexture(c.TEXTURE_2D, null);
      c.bindRenderbuffer(c.RENDERBUFFER, null);
      c.bindFramebuffer(c.FRAMEBUFFER, null);
      a.j = d;
      a.s = e;
      a.o = f;
    }
    return a.j;
  }
  function Vn(a, c) {
    var d = String(x(c));
    if (d in a.i)
      return a.i[d];
    var e = a.a,
        f = e.createShader(c.W());
    e.shaderSource(f, c.b);
    e.compileShader(f);
    return a.i[d] = f;
  }
  function Wn(a, c, d) {
    var e = x(c) + "/" + x(d);
    if (e in a.c)
      return a.c[e];
    var f = a.a,
        g = f.createProgram();
    f.attachShader(g, Vn(a, c));
    f.attachShader(g, Vn(a, d));
    f.linkProgram(g);
    return a.c[e] = g;
  }
  l.rn = function() {
    nb(this.g);
    nb(this.i);
    nb(this.c);
    this.o = this.s = this.j = this.l = null;
  };
  l.sn = function() {};
  l.we = function(a) {
    if (a == this.l)
      return !1;
    this.a.useProgram(a);
    this.l = a;
    return !0;
  };
  function Xn(a, c, d) {
    var e = a.createTexture();
    a.bindTexture(a.TEXTURE_2D, e);
    a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, a.LINEAR);
    a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.LINEAR);
    void 0 !== c && a.texParameteri(3553, 10242, c);
    void 0 !== d && a.texParameteri(3553, 10243, d);
    return e;
  }
  function Un(a, c, d) {
    var e = Xn(a, void 0, void 0);
    a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, c, d, 0, a.RGBA, a.UNSIGNED_BYTE, null);
    return e;
  }
  function Yn(a, c) {
    var d = Xn(a, 33071, 33071);
    a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, a.RGBA, a.UNSIGNED_BYTE, c);
    return d;
  }
  ;
  function Zn(a, c) {
    this.J = this.B = void 0;
    this.o = Yc(c);
    this.T = [];
    this.i = [];
    this.H = void 0;
    this.c = [];
    this.f = [];
    this.ua = this.ta = void 0;
    this.a = [];
    this.D = this.l = null;
    this.S = void 0;
    this.ya = pc();
    this.qb = pc();
    this.U = this.Ga = void 0;
    this.Fb = pc();
    this.wa = this.Ca = this.aa = void 0;
    this.oa = [];
    this.j = [];
    this.b = [];
    this.A = null;
    this.g = [];
    this.s = [];
    this.na = void 0;
  }
  y(Zn, Di);
  function $n(a, c) {
    var d = a.A,
        e = a.l,
        f = a.oa,
        g = a.j,
        h = c.a;
    return function() {
      if (!h.isContextLost()) {
        var a,
            m;
        a = 0;
        for (m = f.length; a < m; ++a)
          h.deleteTexture(f[a]);
        a = 0;
        for (m = g.length; a < m; ++a)
          h.deleteTexture(g[a]);
      }
      Sn(c, d);
      Sn(c, e);
    };
  }
  function ao(a, c, d, e) {
    var f = a.B,
        g = a.J,
        h = a.H,
        k = a.ta,
        m = a.ua,
        n = a.S,
        p = a.Ga,
        q = a.U,
        r = a.aa ? 1 : 0,
        t = a.Ca,
        v = a.wa,
        w = a.na,
        z = Math.cos(t),
        t = Math.sin(t),
        C = a.a.length,
        A = a.b.length,
        B,
        L,
        J,
        M,
        P,
        Aa;
    for (B = 0; B < d; B += e)
      P = c[B] - a.o[0], Aa = c[B + 1] - a.o[1], L = A / 8, J = -v * f, M = -v * (h - g), a.b[A++] = P, a.b[A++] = Aa, a.b[A++] = J * z - M * t, a.b[A++] = J * t + M * z, a.b[A++] = p / m, a.b[A++] = (q + h) / k, a.b[A++] = n, a.b[A++] = r, J = v * (w - f), M = -v * (h - g), a.b[A++] = P, a.b[A++] = Aa, a.b[A++] = J * z - M * t, a.b[A++] = J * t + M * z, a.b[A++] = (p + w) / m, a.b[A++] = (q + h) / k, a.b[A++] = n, a.b[A++] = r, J = v * (w - f), M = v * g, a.b[A++] = P, a.b[A++] = Aa, a.b[A++] = J * z - M * t, a.b[A++] = J * t + M * z, a.b[A++] = (p + w) / m, a.b[A++] = q / k, a.b[A++] = n, a.b[A++] = r, J = -v * f, M = v * g, a.b[A++] = P, a.b[A++] = Aa, a.b[A++] = J * z - M * t, a.b[A++] = J * t + M * z, a.b[A++] = p / m, a.b[A++] = q / k, a.b[A++] = n, a.b[A++] = r, a.a[C++] = L, a.a[C++] = L + 1, a.a[C++] = L + 2, a.a[C++] = L, a.a[C++] = L + 2, a.a[C++] = L + 3;
  }
  Zn.prototype.Hb = function(a, c) {
    this.g.push(this.a.length);
    this.s.push(c);
    var d = a.ga();
    ao(this, d, d.length, a.qa());
  };
  Zn.prototype.Ib = function(a, c) {
    this.g.push(this.a.length);
    this.s.push(c);
    var d = a.ga();
    ao(this, d, d.length, a.qa());
  };
  function bo(a, c) {
    var d = c.a;
    a.T.push(a.a.length);
    a.i.push(a.a.length);
    a.A = new Pn(a.b);
    Rn(c, 34962, a.A);
    a.l = new Pn(a.a);
    Rn(c, 34963, a.l);
    var e = {};
    co(a.oa, a.c, e, d);
    co(a.j, a.f, e, d);
    a.B = void 0;
    a.J = void 0;
    a.H = void 0;
    a.c = null;
    a.f = null;
    a.ta = void 0;
    a.ua = void 0;
    a.a = null;
    a.S = void 0;
    a.Ga = void 0;
    a.U = void 0;
    a.aa = void 0;
    a.Ca = void 0;
    a.wa = void 0;
    a.b = null;
    a.na = void 0;
  }
  function co(a, c, d, e) {
    var f,
        g,
        h,
        k = c.length;
    for (h = 0; h < k; ++h)
      f = c[h], g = x(f).toString(), g in d ? f = d[g] : (f = Yn(e, f), d[g] = f), a[h] = f;
  }
  function eo(a, c, d, e, f, g, h, k, m, n, p) {
    var q = c.a;
    Rn(c, 34962, a.A);
    Rn(c, 34963, a.l);
    var r = Mn.Zb(),
        t = Nn.Zb(),
        t = Wn(c, r, t);
    a.D ? r = a.D : (r = new On(q, t), a.D = r);
    c.we(t);
    q.enableVertexAttribArray(r.f);
    q.vertexAttribPointer(r.f, 2, 5126, !1, 32, 0);
    q.enableVertexAttribArray(r.b);
    q.vertexAttribPointer(r.b, 2, 5126, !1, 32, 8);
    q.enableVertexAttribArray(r.c);
    q.vertexAttribPointer(r.c, 2, 5126, !1, 32, 16);
    q.enableVertexAttribArray(r.a);
    q.vertexAttribPointer(r.a, 1, 5126, !1, 32, 24);
    q.enableVertexAttribArray(r.g);
    q.vertexAttribPointer(r.g, 1, 5126, !1, 32, 28);
    t = a.Fb;
    Ji(t, 0, 0, 2 / (e * g[0]), 2 / (e * g[1]), -f, -(d[0] - a.o[0]), -(d[1] - a.o[1]));
    d = a.qb;
    e = 2 / g[0];
    g = 2 / g[1];
    rc(d);
    d[0] = e;
    d[5] = g;
    d[10] = 1;
    d[15] = 1;
    g = a.ya;
    rc(g);
    0 !== f && wc(g, -f);
    q.uniformMatrix4fv(r.j, !1, t);
    q.uniformMatrix4fv(r.o, !1, d);
    q.uniformMatrix4fv(r.l, !1, g);
    q.uniform1f(r.i, h);
    var v;
    if (void 0 === m)
      fo(a, q, c, k, a.oa, a.T);
    else {
      if (n)
        a: {
          f = c.f ? 5125 : 5123;
          c = c.f ? 4 : 2;
          g = a.g.length - 1;
          for (h = a.j.length - 1; 0 <= h; --h)
            for (q.bindTexture(3553, a.j[h]), n = 0 < h ? a.i[h - 1] : 0, t = a.i[h]; 0 <= g && a.g[g] >= n; ) {
              v = a.g[g];
              d = a.s[g];
              e = x(d).toString();
              if (void 0 === k[e] && d.X() && (void 0 === p || ad(p, d.X().G())) && (q.clear(q.COLOR_BUFFER_BIT | q.DEPTH_BUFFER_BIT), q.drawElements(4, t - v, f, v * c), t = m(d))) {
                a = t;
                break a;
              }
              t = v;
              g--;
            }
          a = void 0;
        }
      else
        q.clear(q.COLOR_BUFFER_BIT | q.DEPTH_BUFFER_BIT), fo(a, q, c, k, a.j, a.i), a = (a = m(null)) ? a : void 0;
      v = a;
    }
    q.disableVertexAttribArray(r.f);
    q.disableVertexAttribArray(r.b);
    q.disableVertexAttribArray(r.c);
    q.disableVertexAttribArray(r.a);
    q.disableVertexAttribArray(r.g);
    return v;
  }
  function fo(a, c, d, e, f, g) {
    var h = d.f ? 5125 : 5123;
    d = d.f ? 4 : 2;
    if (pb(e)) {
      var k;
      a = 0;
      e = f.length;
      for (k = 0; a < e; ++a) {
        c.bindTexture(3553, f[a]);
        var m = g[a];
        c.drawElements(4, m - k, h, k * d);
        k = m;
      }
    } else {
      k = 0;
      var n,
          m = 0;
      for (n = f.length; m < n; ++m) {
        c.bindTexture(3553, f[m]);
        for (var p = 0 < m ? g[m - 1] : 0,
            q = g[m],
            r = p; k < a.g.length && a.g[k] <= q; ) {
          var t = x(a.s[k]).toString();
          void 0 !== e[t] ? (r !== p && c.drawElements(4, p - r, h, r * d), p = r = k === a.g.length - 1 ? q : a.g[k + 1]) : p = k === a.g.length - 1 ? q : a.g[k + 1];
          k++;
        }
        r !== p && c.drawElements(4, p - r, h, r * d);
      }
    }
  }
  Zn.prototype.yb = function(a) {
    var c = a.Yb(),
        d = a.gc(1),
        e = a.qd(),
        f = a.pe(1),
        g = a.A,
        h = a.Ha(),
        k = a.B,
        m = a.s,
        n = a.Eb();
    a = a.j;
    var p;
    0 === this.c.length ? this.c.push(d) : (p = this.c[this.c.length - 1], x(p) != x(d) && (this.T.push(this.a.length), this.c.push(d)));
    0 === this.f.length ? this.f.push(f) : (p = this.f[this.f.length - 1], x(p) != x(f) && (this.i.push(this.a.length), this.f.push(f)));
    this.B = c[0];
    this.J = c[1];
    this.H = n[1];
    this.ta = e[1];
    this.ua = e[0];
    this.S = g;
    this.Ga = h[0];
    this.U = h[1];
    this.Ca = m;
    this.aa = k;
    this.wa = a;
    this.na = n[0];
  };
  function go(a, c, d) {
    this.i = c;
    this.j = a;
    this.c = d;
    this.g = {};
  }
  function ho(a, c) {
    var d = [],
        e;
    for (e in a.g)
      d.push($n(a.g[e], c));
    return id.apply(null, d);
  }
  function io(a, c) {
    for (var d in a.g)
      bo(a.g[d], c);
  }
  go.prototype.b = function(a, c) {
    var d = this.g[c];
    void 0 === d && (d = new jo[c](this.j, this.i), this.g[c] = d);
    return d;
  };
  go.prototype.Oa = function() {
    return pb(this.g);
  };
  go.prototype.a = function(a, c, d, e, f, g, h, k) {
    var m,
        n;
    g = 0;
    for (m = hl.length; g < m; ++g)
      n = this.g[hl[g]], void 0 !== n && eo(n, a, c, d, e, f, h, k, void 0, !1);
  };
  function ko(a, c, d, e, f, g, h, k, m, n) {
    var p = lo,
        q,
        r;
    for (q = hl.length - 1; 0 <= q; --q)
      if (r = a.g[hl[q]], void 0 !== r && (r = eo(r, c, d, e, f, p, g, h, k, m, n)))
        return r;
  }
  go.prototype.f = function(a, c, d, e, f, g, h, k, m, n) {
    var p = c.a;
    p.bindFramebuffer(p.FRAMEBUFFER, Tn(c));
    var q;
    void 0 !== this.c && (q = Ac(Jc(a), e * this.c));
    return ko(this, c, a, e, f, k, m, function(a) {
      var c = new Uint8Array(4);
      p.readPixels(0, 0, 1, 1, p.RGBA, p.UNSIGNED_BYTE, c);
      if (0 < c[3] && (a = n(a)))
        return a;
    }, !0, q);
  };
  function mo(a, c, d, e, f, g, h) {
    var k = d.a;
    k.bindFramebuffer(k.FRAMEBUFFER, Tn(d));
    return void 0 !== ko(a, d, c, e, f, g, h, function() {
      var a = new Uint8Array(4);
      k.readPixels(0, 0, 1, 1, k.RGBA, k.UNSIGNED_BYTE, a);
      return 0 < a[3];
    }, !1);
  }
  var jo = {Image: Zn},
      lo = [1, 1];
  function no(a, c, d, e, f, g) {
    this.a = a;
    this.c = c;
    this.f = g;
    this.l = f;
    this.j = e;
    this.i = d;
    this.g = null;
    this.b = {};
  }
  y(no, Di);
  l = no.prototype;
  l.ld = function(a, c) {
    var d = a.toString(),
        e = this.b[d];
    void 0 !== e ? e.push(c) : this.b[d] = [c];
  };
  l.Ic = function() {};
  l.We = function(a, c) {
    var d = (0, c.f)(a);
    if (d && ad(this.f, d.G())) {
      var e = c.b;
      void 0 === e && (e = 0);
      this.ld(e, function(a) {
        a.hb(c.c, c.g);
        a.yb(c.a);
        a.ib(c.Fa());
        var e = oo[d.W()];
        e && e.call(a, d, null);
      });
    }
  };
  l.Sd = function(a, c) {
    var d = a.i,
        e,
        f;
    e = 0;
    for (f = d.length; e < f; ++e) {
      var g = d[e],
          h = oo[g.W()];
      h && h.call(this, g, c);
    }
  };
  l.Ib = function(a, c) {
    var d = this.a,
        e = (new go(1, this.f)).b(0, "Image");
    e.yb(this.g);
    e.Ib(a, c);
    bo(e, d);
    eo(e, this.a, this.c, this.i, this.j, this.l, 1, {}, void 0, !1);
    $n(e, d)();
  };
  l.Xb = function() {};
  l.Jc = function() {};
  l.Hb = function(a, c) {
    var d = this.a,
        e = (new go(1, this.f)).b(0, "Image");
    e.yb(this.g);
    e.Hb(a, c);
    bo(e, d);
    eo(e, this.a, this.c, this.i, this.j, this.l, 1, {}, void 0, !1);
    $n(e, d)();
  };
  l.Kc = function() {};
  l.Lc = function() {};
  l.Jb = function() {};
  l.hb = function() {};
  l.yb = function(a) {
    this.g = a;
  };
  l.ib = function() {};
  var oo = {
    Point: no.prototype.Ib,
    MultiPoint: no.prototype.Hb,
    GeometryCollection: no.prototype.Sd
  };
  function po() {
    this.b = "precision mediump float;varying vec2 a;uniform float f;uniform sampler2D g;void main(void){vec4 texColor=texture2D(g,a);gl_FragColor.rgb=texColor.rgb;gl_FragColor.a=texColor.a*f;}";
  }
  y(po, Kn);
  da(po);
  function qo() {
    this.b = "varying vec2 a;attribute vec2 b;attribute vec2 c;uniform mat4 d;uniform mat4 e;void main(void){gl_Position=e*vec4(b,0.,1.);a=(d*vec4(c,0.,1.)).st;}";
  }
  y(qo, Ln);
  da(qo);
  function ro(a, c) {
    this.g = a.getUniformLocation(c, "f");
    this.f = a.getUniformLocation(c, "e");
    this.i = a.getUniformLocation(c, "d");
    this.c = a.getUniformLocation(c, "g");
    this.b = a.getAttribLocation(c, "b");
    this.a = a.getAttribLocation(c, "c");
  }
  ;
  function so(a, c) {
    Mi.call(this, c);
    this.f = a;
    this.S = new Pn([-1, -1, 0, 0, 1, -1, 1, 0, -1, 1, 0, 1, 1, 1, 1, 1]);
    this.i = this.pb = null;
    this.j = void 0;
    this.s = nc();
    this.T = pc();
    this.A = null;
  }
  y(so, Mi);
  function to(a, c, d) {
    var e = a.f.f;
    if (void 0 === a.j || a.j != d) {
      c.postRenderFunctions.push(qa(function(a, c, d) {
        a.isContextLost() || (a.deleteFramebuffer(c), a.deleteTexture(d));
      }, e, a.i, a.pb));
      c = Un(e, d, d);
      var f = e.createFramebuffer();
      e.bindFramebuffer(36160, f);
      e.framebufferTexture2D(36160, 36064, 3553, c, 0);
      a.pb = c;
      a.i = f;
      a.j = d;
    } else
      e.bindFramebuffer(36160, a.i);
  }
  so.prototype.ih = function(a, c, d) {
    uo(this, "precompose", d, a);
    Rn(d, 34962, this.S);
    var e = d.a,
        f = po.Zb(),
        g = qo.Zb(),
        f = Wn(d, f, g);
    this.A ? g = this.A : this.A = g = new ro(e, f);
    d.we(f) && (e.enableVertexAttribArray(g.b), e.vertexAttribPointer(g.b, 2, 5126, !1, 16, 0), e.enableVertexAttribArray(g.a), e.vertexAttribPointer(g.a, 2, 5126, !1, 16, 8), e.uniform1i(g.c, 0));
    e.uniformMatrix4fv(g.i, !1, this.s);
    e.uniformMatrix4fv(g.f, !1, this.T);
    e.uniform1f(g.g, c.opacity);
    e.bindTexture(3553, this.pb);
    e.drawArrays(5, 0, 4);
    uo(this, "postcompose", d, a);
  };
  function uo(a, c, d, e) {
    a = a.a;
    if (Ib(a, c)) {
      var f = e.viewState;
      a.b(new Ei(c, a, new no(d, f.center, f.resolution, f.rotation, e.size, e.extent), e, null, d));
    }
  }
  so.prototype.rf = function() {
    this.i = this.pb = null;
    this.j = void 0;
  };
  function vo(a, c) {
    so.call(this, a, c);
    this.o = this.l = this.c = null;
  }
  y(vo, so);
  function wo(a, c) {
    var d = c.a();
    return Yn(a.f.f, d);
  }
  vo.prototype.gb = function(a, c, d, e) {
    var f = this.a;
    return f.da().ne(a, c.viewState.resolution, c.viewState.rotation, c.skippedFeatureUids, function(a) {
      return d.call(e, a, f);
    });
  };
  vo.prototype.sf = function(a, c) {
    var d = this.f.f,
        e = a.pixelRatio,
        f = a.viewState,
        g = f.center,
        h = f.resolution,
        k = f.rotation,
        m = this.c,
        n = this.pb,
        p = this.a.da(),
        q = a.viewHints,
        r = a.extent;
    void 0 !== c.extent && (r = $c(r, c.extent));
    q[0] || q[1] || Vc(r) || (f = p.B(r, h, e, f.projection)) && Oi(this, f) && (m = f, n = wo(this, f), this.pb && a.postRenderFunctions.push(qa(function(a, c) {
      a.isContextLost() || a.deleteTexture(c);
    }, d, this.pb)));
    m && (d = this.f.c.A, xo(this, d.width, d.height, e, g, h, k, m.G()), this.o = null, e = this.s, rc(e), vc(e, 1, -1), uc(e, 0, -1), this.c = m, this.pb = n, Qi(a.attributions, m.ea()), Ri(a, p));
    return !0;
  };
  function xo(a, c, d, e, f, g, h, k) {
    c *= g;
    d *= g;
    a = a.T;
    rc(a);
    vc(a, 2 * e / c, 2 * e / d);
    wc(a, -h);
    uc(a, k[0] - f[0], k[1] - f[1]);
    vc(a, (k[2] - k[0]) / 2, (k[3] - k[1]) / 2);
    uc(a, 1, 1);
  }
  vo.prototype.me = function(a, c) {
    return void 0 !== this.gb(a, c, fd, this);
  };
  vo.prototype.yc = function(a, c, d, e) {
    if (this.c && this.c.a())
      if (this.a.da() instanceof kn) {
        if (a = a.slice(), Li(c.pixelToCoordinateMatrix, a, a), this.gb(a, c, fd, this))
          return d.call(e, this.a);
      } else {
        var f = [this.c.a().width, this.c.a().height];
        if (!this.o) {
          var g = c.size;
          c = nc();
          rc(c);
          uc(c, -1, -1);
          vc(c, 2 / g[0], 2 / g[1]);
          uc(c, 0, g[1]);
          vc(c, 1, -1);
          g = nc();
          tc(this.T, g);
          var h = nc();
          rc(h);
          uc(h, 0, f[1]);
          vc(h, 1, -1);
          vc(h, f[0] / 2, f[1] / 2);
          uc(h, 1, 1);
          var k = nc();
          sc(h, g, k);
          sc(k, c, k);
          this.o = k;
        }
        c = [0, 0];
        Li(this.o, a, c);
        if (!(0 > c[0] || c[0] > f[0] || 0 > c[1] || c[1] > f[1]) && (this.l || (this.l = nh(1, 1)), this.l.clearRect(0, 0, 1, 1), this.l.drawImage(this.c.a(), c[0], c[1], 1, 1, 0, 0, 1, 1), 0 < this.l.getImageData(0, 0, 1, 1).data[3]))
          return d.call(e, this.a);
      }
  };
  function yo() {
    this.b = "precision mediump float;varying vec2 a;uniform sampler2D e;void main(void){gl_FragColor=texture2D(e,a);}";
  }
  y(yo, Kn);
  da(yo);
  function zo() {
    this.b = "varying vec2 a;attribute vec2 b;attribute vec2 c;uniform vec4 d;void main(void){gl_Position=vec4(b*d.xy+d.zw,0.,1.);a=c;}";
  }
  y(zo, Ln);
  da(zo);
  function Ao(a, c) {
    this.g = a.getUniformLocation(c, "e");
    this.f = a.getUniformLocation(c, "d");
    this.b = a.getAttribLocation(c, "b");
    this.a = a.getAttribLocation(c, "c");
  }
  ;
  function Bo(a, c) {
    so.call(this, a, c);
    this.D = yo.Zb();
    this.U = zo.Zb();
    this.c = null;
    this.J = new Pn([0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0]);
    this.B = this.l = null;
    this.o = -1;
    this.H = [0, 0];
  }
  y(Bo, so);
  l = Bo.prototype;
  l.fa = function() {
    Sn(this.f.c, this.J);
    Bo.ha.fa.call(this);
  };
  l.cd = function(a, c, d) {
    var e = this.f;
    return function(f, g) {
      return Jg(a, c, f, g, function(a) {
        var c = lg(e.a, a.eb());
        c && (d[f] || (d[f] = {}), d[f][a.ja.toString()] = a);
        return c;
      });
    };
  };
  l.rf = function() {
    Bo.ha.rf.call(this);
    this.c = null;
  };
  l.sf = function(a, c, d) {
    var e = this.f,
        f = d.a,
        g = a.viewState,
        h = g.projection,
        k = this.a,
        m = k.da(),
        n = m.Za(h),
        p = Dg(n, g.resolution),
        q = n.Z(p),
        r = Kg(m, p, a.pixelRatio, h),
        t = r[0] / Sb(n.Ua(p), this.H)[0],
        v = q / t,
        w = m.Ud(h),
        z = g.center,
        C;
    q == g.resolution ? (z = Ti(z, q, a.size), C = Zc(z, q, g.rotation, a.size)) : C = a.extent;
    q = Ag(n, C, q);
    if (this.l && Oe(this.l, q) && this.o == m.g)
      v = this.B;
    else {
      var A = [q.va - q.ra + 1, q.Aa - q.xa + 1],
          B = Math.pow(2, Math.ceil(Math.log(Math.max(A[0] * r[0], A[1] * r[1])) / Math.LN2)),
          A = v * B,
          L = n.Ha(p),
          J = L[0] + q.ra * r[0] * v,
          v = L[1] + q.xa * r[1] * v,
          v = [J, v, J + A, v + A];
      to(this, a, B);
      f.viewport(0, 0, B, B);
      f.clearColor(0, 0, 0, 0);
      f.clear(16384);
      f.disable(3042);
      B = Wn(d, this.D, this.U);
      d.we(B);
      this.c || (this.c = new Ao(f, B));
      Rn(d, 34962, this.J);
      f.enableVertexAttribArray(this.c.b);
      f.vertexAttribPointer(this.c.b, 2, 5126, !1, 16, 0);
      f.enableVertexAttribArray(this.c.a);
      f.vertexAttribPointer(this.c.a, 2, 5126, !1, 16, 8);
      f.uniform1i(this.c.g, 0);
      d = {};
      d[p] = {};
      var M = this.cd(m, h, d),
          P = k.f(),
          B = !0,
          J = yc(),
          Aa = new Me(0, 0, 0, 0),
          I,
          ca,
          Da;
      for (ca = q.ra; ca <= q.va; ++ca)
        for (Da = q.xa; Da <= q.Aa; ++Da) {
          L = m.Qb(p, ca, Da, t, h);
          if (void 0 !== c.extent && (I = n.Da(L.ja, J), !ad(I, c.extent)))
            continue;
          I = L.V();
          I = 2 == I || 4 == I || 3 == I && !P;
          !I && L.a && (L = L.a);
          I = L.V();
          if (2 == I) {
            if (lg(e.a, L.eb())) {
              d[p][L.ja.toString()] = L;
              continue;
            }
          } else if (4 == I || 3 == I && !P)
            continue;
          B = !1;
          I = xg(n, L.ja, M, Aa, J);
          I || (L = zg(n, L.ja, Aa, J)) && M(p + 1, L);
        }
      c = Object.keys(d).map(Number);
      c.sort(Ua);
      for (var M = new Float32Array(4),
          Ia,
          ab,
          Pa,
          P = 0,
          Aa = c.length; P < Aa; ++P)
        for (Ia in ab = d[c[P]], ab)
          L = ab[Ia], I = n.Da(L.ja, J), ca = 2 * (I[2] - I[0]) / A, Da = 2 * (I[3] - I[1]) / A, Pa = 2 * (I[0] - v[0]) / A - 1, I = 2 * (I[1] - v[1]) / A - 1, mc(M, ca, Da, Pa, I), f.uniform4fv(this.c.f, M), Co(e, L, r, w * t), f.drawArrays(5, 0, 4);
      B ? (this.l = q, this.B = v, this.o = m.g) : (this.B = this.l = null, this.o = -1, a.animate = !0);
    }
    Si(a.usedTiles, m, p, q);
    var Ec = e.l;
    Ui(a, m, n, t, h, C, p, k.a(), function(a) {
      var c;
      (c = 2 != a.V() || lg(e.a, a.eb())) || (c = a.eb() in Ec.g);
      c || Ec.f([a, Cg(n, a.ja), n.Z(a.ja[0]), r, w * t]);
    }, this);
    Pi(a, m);
    Ri(a, m);
    f = this.s;
    rc(f);
    uc(f, (z[0] - v[0]) / (v[2] - v[0]), (z[1] - v[1]) / (v[3] - v[1]));
    0 !== g.rotation && wc(f, g.rotation);
    vc(f, a.size[0] * g.resolution / (v[2] - v[0]), a.size[1] * g.resolution / (v[3] - v[1]));
    uc(f, -.5, -.5);
    return !0;
  };
  l.yc = function(a, c, d, e) {
    if (this.i) {
      var f = [0, 0];
      Li(this.s, [a[0] / c.size[0], (c.size[1] - a[1]) / c.size[1]], f);
      a = [f[0] * this.j, f[1] * this.j];
      c = this.f.c.a;
      c.bindFramebuffer(c.FRAMEBUFFER, this.i);
      f = new Uint8Array(4);
      c.readPixels(a[0], a[1], 1, 1, c.RGBA, c.UNSIGNED_BYTE, f);
      if (0 < f[3])
        return d.call(e, this.a);
    }
  };
  function Do(a, c) {
    so.call(this, a, c);
    this.o = !1;
    this.H = -1;
    this.D = NaN;
    this.B = yc();
    this.l = this.c = this.J = null;
  }
  y(Do, so);
  l = Do.prototype;
  l.ih = function(a, c, d) {
    this.l = c;
    var e = a.viewState,
        f = this.c;
    f && !f.Oa() && f.a(d, e.center, e.resolution, e.rotation, a.size, a.pixelRatio, c.opacity, c.Pc ? a.skippedFeatureUids : {});
  };
  l.fa = function() {
    var a = this.c;
    a && (ho(a, this.f.c)(), this.c = null);
    Do.ha.fa.call(this);
  };
  l.gb = function(a, c, d, e) {
    if (this.c && this.l) {
      var f = c.viewState,
          g = this.a,
          h = {};
      return this.c.f(a, this.f.c, f.center, f.resolution, f.rotation, c.size, c.pixelRatio, this.l.opacity, {}, function(a) {
        var c = x(a).toString();
        if (!(c in h))
          return h[c] = !0, d.call(e, a, g);
      });
    }
  };
  l.me = function(a, c) {
    if (this.c && this.l) {
      var d = c.viewState;
      return mo(this.c, a, this.f.c, d.resolution, d.rotation, this.l.opacity, c.skippedFeatureUids);
    }
    return !1;
  };
  l.yc = function(a, c, d, e) {
    a = a.slice();
    Li(c.pixelToCoordinateMatrix, a, a);
    if (this.me(a, c))
      return d.call(e, this.a);
  };
  l.jh = function() {
    Ni(this);
  };
  l.sf = function(a, c, d) {
    function e(a) {
      var c,
          d = a.bc();
      d ? c = d.call(a, n) : (d = f.f) && (c = d(a, n));
      if (c) {
        if (c) {
          d = !1;
          if (fa(c))
            for (var e = 0,
                g = c.length; e < g; ++e)
              d = El(r, a, c[e], Dl(n, p), this.jh, this) || d;
          else
            d = El(r, a, c, Dl(n, p), this.jh, this) || d;
          a = d;
        } else
          a = !1;
        this.o = this.o || a;
      }
    }
    var f = this.a;
    c = f.da();
    Qi(a.attributions, c.ea());
    Ri(a, c);
    var g = a.viewHints[0],
        h = a.viewHints[1],
        k = f.s,
        m = f.A;
    if (!this.o && !k && g || !m && h)
      return !0;
    var h = a.extent,
        k = a.viewState,
        g = k.projection,
        n = k.resolution,
        p = a.pixelRatio,
        k = f.g,
        q = f.a,
        m = Qk(f);
    void 0 === m && (m = Cl);
    h = Ac(h, q * n);
    if (!this.o && this.D == n && this.H == k && this.J == m && Gc(this.B, h))
      return !0;
    this.c && a.postRenderFunctions.push(ho(this.c, d));
    this.o = !1;
    var r = new go(.5 * n / p, h, f.a);
    c.Oc(h, n, g);
    if (m) {
      var t = [];
      c.ub(h, function(a) {
        t.push(a);
      }, this);
      t.sort(m);
      t.forEach(e, this);
    } else
      c.ub(h, e, this);
    io(r, d);
    this.D = n;
    this.H = k;
    this.J = m;
    this.B = h;
    this.c = r;
    return !0;
  };
  function Eo(a, c) {
    $i.call(this, 0, c);
    this.b = document.createElement("CANVAS");
    this.b.style.width = "100%";
    this.b.style.height = "100%";
    this.b.className = "ol-unselectable";
    If(a, this.b, 0);
    this.T = this.B = 0;
    this.J = nh();
    this.o = !0;
    this.f = th(this.b, {
      antialias: !0,
      depth: !1,
      failIfMajorPerformanceCaveat: !0,
      preserveDrawingBuffer: !1,
      stencil: !0
    });
    this.c = new Qn(this.b, this.f);
    D(this.b, "webglcontextlost", this.qm, this);
    D(this.b, "webglcontextrestored", this.rm, this);
    this.a = new kg;
    this.A = null;
    this.l = new ej(function(a) {
      var c = a[1];
      a = a[2];
      var f = c[0] - this.A[0],
          c = c[1] - this.A[1];
      return 65536 * Math.log(a) + Math.sqrt(f * f + c * c) / a;
    }.bind(this), function(a) {
      return a[0].eb();
    });
    this.D = function() {
      if (!this.l.Oa()) {
        ij(this.l);
        var a = fj(this.l);
        Co(this, a[0], a[3], a[4]);
      }
      return !1;
    }.bind(this);
    this.j = 0;
    Fo(this);
  }
  y(Eo, $i);
  function Co(a, c, d, e) {
    var f = a.f,
        g = c.eb();
    if (lg(a.a, g))
      a = a.a.get(g), f.bindTexture(3553, a.pb), 9729 != a.Mg && (f.texParameteri(3553, 10240, 9729), a.Mg = 9729), 9729 != a.Ng && (f.texParameteri(3553, 10240, 9729), a.Ng = 9729);
    else {
      var h = f.createTexture();
      f.bindTexture(3553, h);
      if (0 < e) {
        var k = a.J.canvas,
            m = a.J;
        a.B !== d[0] || a.T !== d[1] ? (k.width = d[0], k.height = d[1], a.B = d[0], a.T = d[1]) : m.clearRect(0, 0, d[0], d[1]);
        m.drawImage(c.cb(), e, e, d[0], d[1], 0, 0, d[0], d[1]);
        f.texImage2D(3553, 0, 6408, 6408, 5121, k);
      } else
        f.texImage2D(3553, 0, 6408, 6408, 5121, c.cb());
      f.texParameteri(3553, 10240, 9729);
      f.texParameteri(3553, 10241, 9729);
      f.texParameteri(3553, 10242, 33071);
      f.texParameteri(3553, 10243, 33071);
      a.a.set(g, {
        pb: h,
        Mg: 9729,
        Ng: 9729
      });
    }
  }
  l = Eo.prototype;
  l.Ve = function(a) {
    return a instanceof vk ? new vo(this, a) : a instanceof G ? new Bo(this, a) : a instanceof H ? new Do(this, a) : null;
  };
  function Go(a, c, d) {
    var e = a.i;
    if (Ib(e, c)) {
      var f = a.c;
      a = d.viewState;
      a = new no(f, a.center, a.resolution, a.rotation, d.size, d.extent);
      e.b(new Ei(c, e, a, d, null, f));
      c = Object.keys(a.b).map(Number);
      c.sort(Ua);
      var g,
          h;
      d = 0;
      for (e = c.length; d < e; ++d)
        for (f = a.b[c[d].toString()], g = 0, h = f.length; g < h; ++g)
          f[g](a);
    }
  }
  l.fa = function() {
    var a = this.f;
    a.isContextLost() || this.a.forEach(function(c) {
      c && a.deleteTexture(c.pb);
    });
    Db(this.c);
    Eo.ha.fa.call(this);
  };
  l.mj = function(a, c) {
    for (var d = this.f,
        e; 1024 < this.a.rc() - this.j; ) {
      if (e = this.a.b.mc)
        d.deleteTexture(e.pb);
      else if (+this.a.b.de == c.index)
        break;
      else
        --this.j;
      this.a.pop();
    }
  };
  l.W = function() {
    return "webgl";
  };
  l.qm = function(a) {
    a.preventDefault();
    this.a.clear();
    this.j = 0;
    a = this.g;
    for (var c in a)
      a[c].rf();
  };
  l.rm = function() {
    Fo(this);
    this.i.render();
  };
  function Fo(a) {
    a = a.f;
    a.activeTexture(33984);
    a.blendFuncSeparate(770, 771, 1, 771);
    a.disable(2884);
    a.disable(2929);
    a.disable(3089);
    a.disable(2960);
  }
  l.Ce = function(a) {
    var c = this.c,
        d = this.f;
    if (d.isContextLost())
      return !1;
    if (!a)
      return this.o && (bg(this.b, !1), this.o = !1), !1;
    this.A = a.focus;
    this.a.set((-a.index).toString(), null);
    ++this.j;
    Go(this, "precompose", a);
    var e = [],
        f = a.layerStatesArray;
    cb(f);
    var g = a.viewState.resolution,
        h,
        k,
        m,
        n;
    h = 0;
    for (k = f.length; h < k; ++h)
      n = f[h], Gi(n, g) && "ready" == n.H && (m = cj(this, n.layer), m.sf(a, n, c) && e.push(n));
    f = a.size[0] * a.pixelRatio;
    g = a.size[1] * a.pixelRatio;
    if (this.b.width != f || this.b.height != g)
      this.b.width = f, this.b.height = g;
    d.bindFramebuffer(36160, null);
    d.clearColor(0, 0, 0, 0);
    d.clear(16384);
    d.enable(3042);
    d.viewport(0, 0, this.b.width, this.b.height);
    h = 0;
    for (k = e.length; h < k; ++h)
      n = e[h], m = cj(this, n.layer), m.ih(a, n, c);
    this.o || (bg(this.b, !0), this.o = !0);
    aj(a);
    1024 < this.a.rc() - this.j && a.postRenderFunctions.push(this.mj.bind(this));
    this.l.Oa() || (a.postRenderFunctions.push(this.D), a.animate = !0);
    Go(this, "postcompose", a);
    dj(this, a);
    a.postRenderFunctions.push(bj);
  };
  l.qf = function(a, c, d, e, f, g) {
    var h;
    if (this.f.isContextLost())
      return !1;
    var k = c.viewState,
        m = c.layerStatesArray,
        n;
    for (n = m.length - 1; 0 <= n; --n) {
      h = m[n];
      var p = h.layer;
      if (Gi(h, k.resolution) && f.call(g, p) && (h = cj(this, p).gb(a, c, d, e)))
        return h;
    }
  };
  l.hh = function(a, c, d, e) {
    var f = !1;
    if (this.f.isContextLost())
      return !1;
    var g = c.viewState,
        h = c.layerStatesArray,
        k;
    for (k = h.length - 1; 0 <= k; --k) {
      var m = h[k],
          n = m.layer;
      if (Gi(m, g.resolution) && d.call(e, n) && (f = cj(this, n).me(a, c)))
        return !0;
    }
    return f;
  };
  l.gh = function(a, c, d, e, f) {
    if (this.f.isContextLost())
      return !1;
    var g = c.viewState,
        h,
        k = c.layerStatesArray,
        m;
    for (m = k.length - 1; 0 <= m; --m) {
      h = k[m];
      var n = h.layer;
      if (Gi(h, g.resolution) && f.call(e, n) && (h = cj(this, n).yc(a, c, d, e)))
        return h;
    }
  };
  var Ho = ["canvas", "webgl", "dom"];
  function S(a) {
    Mb.call(this);
    var c = Io(a);
    this.nc = void 0 !== a.loadTilesWhileAnimating ? a.loadTilesWhileAnimating : !1;
    this.oc = void 0 !== a.loadTilesWhileInteracting ? a.loadTilesWhileInteracting : !1;
    this.$c = void 0 !== a.pixelRatio ? a.pixelRatio : zh;
    this.Ec = c.logos;
    this.Ca = function() {
      this.i = void 0;
      this.lo.call(this, Date.now());
    }.bind(this);
    this.qb = nc();
    this.Me = nc();
    this.Fb = 0;
    this.f = null;
    this.ya = yc();
    this.D = this.S = null;
    this.a = document.createElement("DIV");
    this.a.className = "ol-viewport";
    this.a.style.position = "relative";
    this.a.style.overflow = "hidden";
    this.a.style.width = "100%";
    this.a.style.height = "100%";
    this.a.style.msTouchAction = "none";
    this.a.style.touchAction = "none";
    Eh && Qf(this.a, "ol-touch");
    this.B = document.createElement("DIV");
    this.B.className = "ol-overlaycontainer";
    this.a.appendChild(this.B);
    this.A = document.createElement("DIV");
    this.A.className = "ol-overlaycontainer-stopevent";
    a = ["click", "dblclick", "mousedown", "touchstart", "mspointerdown", xi, "mousewheel", "wheel"];
    for (var d = 0,
        e = a.length; d < e; ++d)
      D(this.A, a[d], Fb);
    this.a.appendChild(this.A);
    a = new pi(this);
    for (var f in Ai)
      D(a, Ai[f], this.Fg, this);
    Cb(this, qa(Db, a));
    this.wa = c.keyboardEventTarget;
    this.s = null;
    D(this.a, "wheel", this.Nc, this);
    D(this.a, "mousewheel", this.Nc, this);
    this.l = c.controls;
    this.j = c.interactions;
    this.o = c.overlays;
    this.tf = {};
    this.J = new c.no(this.a, this);
    Cb(this, qa(Db, this.J));
    this.U = null;
    this.H = [];
    this.oa = [];
    this.na = new jj(this.ek.bind(this), this.Lk.bind(this));
    this.aa = {};
    D(this, Ob("layergroup"), this.rk, this);
    D(this, Ob("view"), this.Mk, this);
    D(this, Ob("size"), this.Ik, this);
    D(this, Ob("target"), this.Kk, this);
    this.C(c.values);
    this.l.forEach(function(a) {
      a.setMap(this);
    }, this);
    D(this.l, "add", function(a) {
      a.element.setMap(this);
    }, this);
    D(this.l, "remove", function(a) {
      a.element.setMap(null);
    }, this);
    this.j.forEach(function(a) {
      a.setMap(this);
    }, this);
    D(this.j, "add", function(a) {
      a.element.setMap(this);
    }, this);
    D(this.j, "remove", function(a) {
      a.element.setMap(null);
    }, this);
    this.o.forEach(this.cg, this);
    D(this.o, "add", function(a) {
      this.cg(a.element);
    }, this);
    D(this.o, "remove", function(a) {
      var c = a.element.Sa();
      void 0 !== c && delete this.tf[c.toString()];
      a.element.setMap(null);
    }, this);
  }
  y(S, Mb);
  l = S.prototype;
  l.bj = function(a) {
    this.l.push(a);
  };
  l.cj = function(a) {
    this.j.push(a);
  };
  l.ag = function(a) {
    this.sc().Sc().push(a);
  };
  l.bg = function(a) {
    this.o.push(a);
  };
  l.cg = function(a) {
    var c = a.Sa();
    void 0 !== c && (this.tf[c.toString()] = a);
    a.setMap(this);
  };
  l.Ra = function(a) {
    this.render();
    Array.prototype.push.apply(this.H, arguments);
  };
  l.fa = function() {
    yb(this.a, "wheel", this.Nc, this);
    yb(this.a, "mousewheel", this.Nc, this);
    void 0 !== this.c && (aa.removeEventListener("resize", this.c, !1), this.c = void 0);
    this.i && (aa.cancelAnimationFrame(this.i), this.i = void 0);
    Jf(this.a);
    S.ha.fa.call(this);
  };
  l.od = function(a, c, d, e, f) {
    if (this.f)
      return a = this.La(a), this.J.qf(a, this.f, c, void 0 !== d ? d : null, void 0 !== e ? e : fd, void 0 !== f ? f : null);
  };
  l.vl = function(a, c, d, e, f) {
    if (this.f)
      return this.J.gh(a, this.f, c, void 0 !== d ? d : null, void 0 !== e ? e : fd, void 0 !== f ? f : null);
  };
  l.Ok = function(a, c, d) {
    if (!this.f)
      return !1;
    a = this.La(a);
    return this.J.hh(a, this.f, void 0 !== c ? c : fd, void 0 !== d ? d : null);
  };
  l.Bj = function(a) {
    return this.La(this.Td(a));
  };
  l.Td = function(a) {
    var c;
    c = this.a;
    a = Zf(a);
    c = Zf(c);
    c = new wf(a.x - c.x, a.y - c.y);
    return [c.x, c.y];
  };
  l.Ug = function() {
    return this.get("target");
  };
  l.tc = function() {
    var a = this.Ug();
    return void 0 !== a ? Bf(a) : null;
  };
  l.La = function(a) {
    var c = this.f;
    return c ? (a = a.slice(), Li(c.pixelToCoordinateMatrix, a, a)) : null;
  };
  l.zj = function() {
    return this.l;
  };
  l.Tj = function() {
    return this.o;
  };
  l.Sj = function(a) {
    a = this.tf[a.toString()];
    return void 0 !== a ? a : null;
  };
  l.Gj = function() {
    return this.j;
  };
  l.sc = function() {
    return this.get("layergroup");
  };
  l.Tg = function() {
    return this.sc().Sc();
  };
  l.Ta = function(a) {
    var c = this.f;
    return c ? (a = a.slice(0, 2), Li(c.coordinateToPixelMatrix, a, a)) : null;
  };
  l.Va = function() {
    return this.get("size");
  };
  l.$ = function() {
    return this.get("view");
  };
  l.gk = function() {
    return this.a;
  };
  l.ek = function(a, c, d, e) {
    var f = this.f;
    if (!(f && c in f.wantedTiles && f.wantedTiles[c][a.ja.toString()]))
      return Infinity;
    a = d[0] - f.focus[0];
    d = d[1] - f.focus[1];
    return 65536 * Math.log(e) + Math.sqrt(a * a + d * d) / e;
  };
  l.Nc = function(a, c) {
    var d = new ni(c || a.type, this, a);
    this.Fg(d);
  };
  l.Fg = function(a) {
    if (this.f) {
      this.U = a.coordinate;
      a.frameState = this.f;
      var c = this.j.a,
          d;
      if (!1 !== this.b(a))
        for (d = c.length - 1; 0 <= d; d--) {
          var e = c[d];
          if (e.f() && !e.handleEvent(a))
            break;
        }
    }
  };
  l.Gk = function() {
    var a = this.f,
        c = this.na;
    if (!c.Oa()) {
      var d = 16,
          e = d;
      if (a) {
        var f = a.viewHints;
        f[0] && (d = this.nc ? 8 : 0, e = 2);
        f[1] && (d = this.oc ? 8 : 0, e = 2);
      }
      c.c < d && (ij(c), kj(c, d, e));
    }
    c = this.oa;
    d = 0;
    for (e = c.length; d < e; ++d)
      c[d](this, a);
    c.length = 0;
  };
  l.Ik = function() {
    this.render();
  };
  l.Kk = function() {
    var a = this.tc();
    if (this.s) {
      for (var c = 0,
          d = this.s.length; c < d; ++c)
        sb(this.s[c]);
      this.s = null;
    }
    a ? (a.appendChild(this.a), a = this.wa ? this.wa : a, this.s = [D(a, "keydown", this.Nc, this), D(a, "keypress", this.Nc, this)], this.c || (this.c = this.Xc.bind(this), aa.addEventListener("resize", this.c, !1))) : (Jf(this.a), void 0 !== this.c && (aa.removeEventListener("resize", this.c, !1), this.c = void 0));
    this.Xc();
  };
  l.Lk = function() {
    this.render();
  };
  l.Nk = function() {
    this.render();
  };
  l.Mk = function() {
    this.S && (sb(this.S), this.S = null);
    var a = this.$();
    a && (this.S = D(a, "propertychange", this.Nk, this));
    this.render();
  };
  l.sk = function() {
    this.render();
  };
  l.tk = function() {
    this.render();
  };
  l.rk = function() {
    this.D && (this.D.forEach(sb), this.D = null);
    var a = this.sc();
    a && (this.D = [D(a, "propertychange", this.tk, this), D(a, "change", this.sk, this)]);
    this.render();
  };
  l.mo = function() {
    this.i && aa.cancelAnimationFrame(this.i);
    this.Ca();
  };
  l.render = function() {
    void 0 === this.i && (this.i = aa.requestAnimationFrame(this.Ca));
  };
  l.eo = function(a) {
    return this.l.remove(a);
  };
  l.fo = function(a) {
    return this.j.remove(a);
  };
  l.io = function(a) {
    return this.sc().Sc().remove(a);
  };
  l.jo = function(a) {
    return this.o.remove(a);
  };
  l.lo = function(a) {
    var c,
        d,
        e,
        f = this.Va(),
        g = this.$(),
        h = null;
    if (void 0 !== f && 0 < f[0] && 0 < f[1] && g && Ae(g)) {
      var h = g.f.slice(),
          k = this.sc().bf(),
          m = {};
      c = 0;
      for (d = k.length; c < d; ++c)
        m[x(k[c].layer)] = k[c];
      e = g.V();
      h = {
        animate: !1,
        attributions: {},
        coordinateToPixelMatrix: this.qb,
        extent: null,
        focus: this.U ? this.U : e.center,
        index: this.Fb++,
        layerStates: m,
        layerStatesArray: k,
        logos: mb({}, this.Ec),
        pixelRatio: this.$c,
        pixelToCoordinateMatrix: this.Me,
        postRenderFunctions: [],
        size: f,
        skippedFeatureUids: this.aa,
        tileQueue: this.na,
        time: a,
        usedTiles: {},
        viewState: e,
        viewHints: h,
        wantedTiles: {}
      };
    }
    if (h) {
      a = this.H;
      c = f = 0;
      for (d = a.length; c < d; ++c)
        g = a[c], g(this, h) && (a[f++] = g);
      a.length = f;
      h.extent = Zc(e.center, e.resolution, e.rotation, h.size);
    }
    this.f = h;
    this.J.Ce(h);
    h && (h.animate && this.render(), Array.prototype.push.apply(this.oa, h.postRenderFunctions), 0 !== this.H.length || h.viewHints[0] || h.viewHints[1] || Mc(h.extent, this.ya) || (this.b(new ig("moveend", this, h)), Bc(h.extent, this.ya)));
    this.b(new ig("postrender", this, h));
    bh(this.Gk, this);
  };
  l.Sh = function(a) {
    this.set("layergroup", a);
  };
  l.Mf = function(a) {
    this.set("size", a);
  };
  l.wl = function(a) {
    this.set("target", a);
  };
  l.Ao = function(a) {
    this.set("view", a);
  };
  l.ai = function(a) {
    a = x(a).toString();
    this.aa[a] = !0;
    this.render();
  };
  l.Xc = function() {
    var a = this.tc();
    if (a) {
      var c = Af(a),
          d = kf && a.currentStyle;
      d && Nf(yf(c)) && "auto" != d.width && "auto" != d.height && !d.boxSizing ? (c = cg(a, d.width, "width", "pixelWidth"), a = cg(a, d.height, "height", "pixelHeight"), a = new xf(c, a)) : (d = new xf(a.offsetWidth, a.offsetHeight), c = eg(a, "padding"), a = hg(a), a = new xf(d.width - a.left - c.left - c.right - a.right, d.height - a.top - c.top - c.bottom - a.bottom));
      this.Mf([a.width, a.height]);
    } else
      this.Mf(void 0);
  };
  l.ci = function(a) {
    a = x(a).toString();
    delete this.aa[a];
    this.render();
  };
  function Io(a) {
    var c = null;
    void 0 !== a.keyboardEventTarget && (c = "string" === typeof a.keyboardEventTarget ? document.getElementById(a.keyboardEventTarget) : a.keyboardEventTarget);
    var d = {},
        e = {};
    if (void 0 === a.logo || "boolean" === typeof a.logo && a.logo)
      e["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAHGAAABxgEXwfpGAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAhNQTFRF////AP//AICAgP//AFVVQECA////K1VVSbbbYL/fJ05idsTYJFtbbcjbJllmZszWWMTOIFhoHlNiZszTa9DdUcHNHlNlV8XRIVdiasrUHlZjIVZjaMnVH1RlIFRkH1RkH1ZlasvYasvXVsPQH1VkacnVa8vWIVZjIFRjVMPQa8rXIVVkXsXRsNveIFVkIFZlIVVj3eDeh6GmbMvXH1ZkIFRka8rWbMvXIFVkIFVjIFVkbMvWH1VjbMvWIFVlbcvWIFVla8vVIFVkbMvWbMvVH1VkbMvWIFVlbcvWIFVkbcvVbMvWjNPbIFVkU8LPwMzNIFVkbczWIFVkbsvWbMvXIFVkRnB8bcvW2+TkW8XRIFVkIlZlJVloJlpoKlxrLl9tMmJwOWd0Omh1RXF8TneCT3iDUHiDU8LPVMLPVcLPVcPQVsPPVsPQV8PQWMTQWsTQW8TQXMXSXsXRX4SNX8bSYMfTYcfTYsfTY8jUZcfSZsnUaIqTacrVasrVa8jTa8rWbI2VbMvWbcvWdJObdcvUdszUd8vVeJaee87Yfc3WgJyjhqGnitDYjaarldPZnrK2oNbborW5o9bbo9fbpLa6q9ndrL3ArtndscDDutzfu8fJwN7gwt7gxc/QyuHhy+HizeHi0NfX0+Pj19zb1+Tj2uXk29/e3uLg3+Lh3+bl4uXj4ufl4+fl5Ofl5ufl5ujm5+jmySDnBAAAAFp0Uk5TAAECAgMEBAYHCA0NDg4UGRogIiMmKSssLzU7PkJJT1JTVFliY2hrdHZ3foSFhYeJjY2QkpugqbG1tre5w8zQ09XY3uXn6+zx8vT09vf4+Pj5+fr6/P39/f3+gz7SsAAAAVVJREFUOMtjYKA7EBDnwCPLrObS1BRiLoJLnte6CQy8FLHLCzs2QUG4FjZ5GbcmBDDjxJBXDWxCBrb8aM4zbkIDzpLYnAcE9VXlJSWlZRU13koIeW57mGx5XjoMZEUqwxWYQaQbSzLSkYGfKFSe0QMsX5WbjgY0YS4MBplemI4BdGBW+DQ11eZiymfqQuXZIjqwyadPNoSZ4L+0FVM6e+oGI6g8a9iKNT3o8kVzNkzRg5lgl7p4wyRUL9Yt2jAxVh6mQCogae6GmflI8p0r13VFWTHBQ0rWPW7ahgWVcPm+9cuLoyy4kCJDzCm6d8PSFoh0zvQNC5OjDJhQopPPJqph1doJBUD5tnkbZiUEqaCnB3bTqLTFG1bPn71kw4b+GFdpLElKIzRxxgYgWNYc5SCENVHKeUaltHdXx0dZ8uBI1hJ2UUDgq82CM2MwKeibqAvSO7MCABq0wXEPiqWEAAAAAElFTkSuQmCC"] = "http://openlayers.org/";
    else {
      var f = a.logo;
      "string" === typeof f ? e[f] = "" : ka(f) && (e[f.src] = f.href);
    }
    f = a.layers instanceof lk ? a.layers : new lk({layers: a.layers});
    d.layergroup = f;
    d.target = a.target;
    d.view = void 0 !== a.view ? a.view : new xe;
    var f = $i,
        g;
    void 0 !== a.renderer ? fa(a.renderer) ? g = a.renderer : "string" === typeof a.renderer && (g = [a.renderer]) : g = Ho;
    var h,
        k;
    h = 0;
    for (k = g.length; h < k; ++h) {
      var m = g[h];
      if ("canvas" == m) {
        if (Bh) {
          f = zn;
          break;
        }
      } else if ("dom" == m) {
        f = Hn;
        break;
      } else if ("webgl" == m && uh) {
        f = Eo;
        break;
      }
    }
    var n;
    void 0 !== a.controls ? n = fa(a.controls) ? new Se(a.controls.slice()) : a.controls : n = Tg();
    var p;
    void 0 !== a.interactions ? p = fa(a.interactions) ? new Se(a.interactions.slice()) : a.interactions : p = kk();
    a = void 0 !== a.overlays ? fa(a.overlays) ? new Se(a.overlays.slice()) : a.overlays : new Se;
    return {
      controls: n,
      interactions: p,
      keyboardEventTarget: c,
      logos: e,
      overlays: a,
      no: f,
      values: d
    };
  }
  uk();
  function Jo(a) {
    Mb.call(this);
    this.o = a.id;
    this.l = void 0 !== a.insertFirst ? a.insertFirst : !0;
    this.s = void 0 !== a.stopEvent ? a.stopEvent : !0;
    this.f = document.createElement("DIV");
    this.f.className = "ol-overlay-container";
    this.f.style.position = "absolute";
    this.autoPan = void 0 !== a.autoPan ? a.autoPan : !1;
    this.i = void 0 !== a.autoPanAnimation ? a.autoPanAnimation : {};
    this.j = void 0 !== a.autoPanMargin ? a.autoPanMargin : 20;
    this.a = {
      Od: "",
      ee: "",
      De: "",
      Ee: "",
      visible: !0
    };
    this.c = null;
    D(this, Ob("element"), this.mk, this);
    D(this, Ob("map"), this.yk, this);
    D(this, Ob("offset"), this.Ck, this);
    D(this, Ob("position"), this.Ek, this);
    D(this, Ob("positioning"), this.Fk, this);
    void 0 !== a.element && this.Oh(a.element);
    this.Uh(void 0 !== a.offset ? a.offset : [0, 0]);
    this.Xh(void 0 !== a.positioning ? a.positioning : "top-left");
    void 0 !== a.position && this.mf(a.position);
  }
  y(Jo, Mb);
  l = Jo.prototype;
  l.he = function() {
    return this.get("element");
  };
  l.Sa = function() {
    return this.o;
  };
  l.ie = function() {
    return this.get("map");
  };
  l.Ag = function() {
    return this.get("offset");
  };
  l.Vg = function() {
    return this.get("position");
  };
  l.Bg = function() {
    return this.get("positioning");
  };
  l.mk = function() {
    Hf(this.f);
    var a = this.he();
    a && this.f.appendChild(a);
  };
  l.yk = function() {
    this.c && (Jf(this.f), sb(this.c), this.c = null);
    var a = this.ie();
    a && (this.c = D(a, "postrender", this.render, this), Ko(this), a = this.s ? a.A : a.B, this.l ? If(a, this.f, 0) : a.appendChild(this.f));
  };
  l.render = function() {
    Ko(this);
  };
  l.Ck = function() {
    Ko(this);
  };
  l.Ek = function() {
    Ko(this);
    if (void 0 !== this.get("position") && this.autoPan) {
      var a = this.ie();
      if (void 0 !== a && a.tc()) {
        var c = Lo(a.tc(), a.Va()),
            d = this.he(),
            e = d.offsetWidth,
            f = d.currentStyle || window.getComputedStyle(d),
            e = e + (parseInt(f.marginLeft, 10) + parseInt(f.marginRight, 10)),
            f = d.offsetHeight,
            g = d.currentStyle || window.getComputedStyle(d),
            f = f + (parseInt(g.marginTop, 10) + parseInt(g.marginBottom, 10)),
            h = Lo(d, [e, f]),
            d = this.j;
        Gc(c, h) || (e = h[0] - c[0], f = c[2] - h[2], g = h[1] - c[1], h = c[3] - h[3], c = [0, 0], 0 > e ? c[0] = e - d : 0 > f && (c[0] = Math.abs(f) + d), 0 > g ? c[1] = g - d : 0 > h && (c[1] = Math.abs(h) + d), 0 === c[0] && 0 === c[1]) || (d = a.$().Wa(), e = a.Ta(d), c = [e[0] + c[0], e[1] + c[1]], this.i && (this.i.source = d, a.Ra(He(this.i))), a.$().mb(a.La(c)));
      }
    }
  };
  l.Fk = function() {
    Ko(this);
  };
  l.Oh = function(a) {
    this.set("element", a);
  };
  l.setMap = function(a) {
    this.set("map", a);
  };
  l.Uh = function(a) {
    this.set("offset", a);
  };
  l.mf = function(a) {
    this.set("position", a);
  };
  function Lo(a, c) {
    var d = Af(a),
        e = new wf(0, 0),
        f;
    f = d ? Af(d) : document;
    f = !kf || 9 <= uf || Nf(yf(f)) ? f.documentElement : f.body;
    if (a != f) {
      f = Yf(a);
      var g = yf(d).b,
          d = g.scrollingElement ? g.scrollingElement : nf ? g.body || g.documentElement : g.documentElement,
          g = g.parentWindow || g.defaultView,
          d = kf && sf("10") && g.pageYOffset != d.scrollTop ? new wf(d.scrollLeft, d.scrollTop) : new wf(g.pageXOffset || d.scrollLeft, g.pageYOffset || d.scrollTop);
      e.x = f.left + d.x;
      e.y = f.top + d.y;
    }
    return [e.x, e.y, e.x + c[0], e.y + c[1]];
  }
  l.Xh = function(a) {
    this.set("positioning", a);
  };
  function Mo(a, c) {
    a.a.visible !== c && (bg(a.f, c), a.a.visible = c);
  }
  function Ko(a) {
    var c = a.ie(),
        d = a.Vg();
    if (void 0 !== c && c.f && void 0 !== d) {
      var d = c.Ta(d),
          e = c.Va(),
          c = a.f.style,
          f = a.Ag(),
          g = a.Bg(),
          h = f[0],
          f = f[1];
      if ("bottom-right" == g || "center-right" == g || "top-right" == g)
        "" !== a.a.ee && (a.a.ee = c.left = ""), h = Math.round(e[0] - d[0] - h) + "px", a.a.De != h && (a.a.De = c.right = h);
      else {
        "" !== a.a.De && (a.a.De = c.right = "");
        if ("bottom-center" == g || "center-center" == g || "top-center" == g)
          h -= $f(a.f).width / 2;
        h = Math.round(d[0] + h) + "px";
        a.a.ee != h && (a.a.ee = c.left = h);
      }
      if ("bottom-left" == g || "bottom-center" == g || "bottom-right" == g)
        "" !== a.a.Ee && (a.a.Ee = c.top = ""), d = Math.round(e[1] - d[1] - f) + "px", a.a.Od != d && (a.a.Od = c.bottom = d);
      else {
        "" !== a.a.Od && (a.a.Od = c.bottom = "");
        if ("center-left" == g || "center-center" == g || "center-right" == g)
          f -= $f(a.f).height / 2;
        d = Math.round(d[1] + f) + "px";
        a.a.Ee != d && (a.a.Ee = c.top = d);
      }
      Mo(a, !0);
    } else
      Mo(a, !1);
  }
  ;
  function No(a) {
    a = a ? a : {};
    this.j = void 0 !== a.collapsed ? a.collapsed : !0;
    this.l = void 0 !== a.collapsible ? a.collapsible : !0;
    this.l || (this.j = !1);
    var c = void 0 !== a.className ? a.className : "ol-overviewmap",
        d = void 0 !== a.tipLabel ? a.tipLabel : "Overview map",
        e = void 0 !== a.collapseLabel ? a.collapseLabel : "\u00ab";
    this.A = "string" === typeof e ? Ef("SPAN", {}, e) : e;
    e = void 0 !== a.label ? a.label : "\u00bb";
    this.B = "string" === typeof e ? Ef("SPAN", {}, e) : e;
    d = Ef("BUTTON", {
      type: "button",
      title: d
    }, this.l && !this.j ? this.A : this.B);
    D(d, "click", this.Hl, this);
    e = document.createElement("DIV");
    e.className = "ol-overviewmap-map";
    var f = this.f = new S({
      controls: new Se,
      interactions: new Se,
      target: e,
      view: a.view
    });
    a.layers && a.layers.forEach(function(a) {
      f.ag(a);
    }, this);
    var g = Ef("DIV", "ol-overviewmap-box");
    this.o = new Jo({
      position: [0, 0],
      positioning: "bottom-left",
      element: g
    });
    this.f.bg(this.o);
    c = Ef("DIV", c + " ol-unselectable ol-control" + (this.j && this.l ? " ol-collapsed" : "") + (this.l ? "" : " ol-uncollapsible"), e, d);
    jg.call(this, {
      element: c,
      render: a.render ? a.render : Oo,
      target: a.target
    });
  }
  y(No, jg);
  l = No.prototype;
  l.setMap = function(a) {
    var c = this.a;
    a !== c && (c && (c = c.$()) && yb(c, Ob("rotation"), this.be, this), No.ha.setMap.call(this, a), a && (this.s.push(D(a, "propertychange", this.zk, this)), 0 === this.f.Tg().ac() && this.f.Sh(a.sc()), a = a.$())) && (D(a, Ob("rotation"), this.be, this), Ae(a) && (this.f.Xc(), Po(this)));
  };
  l.zk = function(a) {
    "view" === a.key && ((a = a.oldValue) && yb(a, Ob("rotation"), this.be, this), a = this.a.$(), D(a, Ob("rotation"), this.be, this));
  };
  l.be = function() {
    this.f.$().je(this.a.$().Ka());
  };
  function Oo() {
    var a = this.a,
        c = this.f;
    if (a.f && c.f) {
      var d = a.Va(),
          a = a.$().bd(d),
          e = c.Va(),
          d = c.$().bd(e),
          f = c.Ta(Sc(a)),
          c = c.Ta(Qc(a)),
          c = new xf(Math.abs(f[0] - c[0]), Math.abs(f[1] - c[1])),
          f = e[0],
          e = e[1];
      c.width < .1 * f || c.height < .1 * e || c.width > .75 * f || c.height > .75 * e ? Po(this) : Gc(d, a) || (a = this.f, d = this.a.$(), a.$().mb(d.Wa()));
    }
    Qo(this);
  }
  function Po(a) {
    var c = a.a;
    a = a.f;
    var d = c.Va(),
        c = c.$().bd(d),
        d = a.Va();
    a = a.$();
    bd(c, 1 / (.1 * Math.pow(2, Math.log(7.5) / Math.LN2 / 2)));
    a.Xe(c, d);
  }
  function Qo(a) {
    var c = a.a,
        d = a.f;
    if (c.f && d.f) {
      var e = c.Va(),
          f = c.$(),
          g = d.$();
      d.Va();
      var c = f.Ka(),
          h = a.o,
          d = a.o.he(),
          f = f.bd(e),
          e = g.Z(),
          g = Pc(f),
          f = Rc(f),
          k;
      if (a = a.a.$().Wa())
        k = [g[0] - a[0], g[1] - a[1]], gc(k, c), bc(k, a);
      h.mf(k);
      d && (k = new xf(Math.abs((g[0] - f[0]) / e), Math.abs((f[1] - g[1]) / e)), c = Nf(yf(Af(d))), !kf || sf("10") || c && sf("8") ? (d = d.style, mf ? d.MozBoxSizing = "border-box" : nf ? d.WebkitBoxSizing = "border-box" : d.boxSizing = "border-box", d.width = Math.max(k.width, 0) + "px", d.height = Math.max(k.height, 0) + "px") : (a = d.style, c ? (c = eg(d, "padding"), d = hg(d), a.pixelWidth = k.width - d.left - c.left - c.right - d.right, a.pixelHeight = k.height - d.top - c.top - c.bottom - d.bottom) : (a.pixelWidth = k.width, a.pixelHeight = k.height)));
    }
  }
  l.Hl = function(a) {
    a.preventDefault();
    Ro(this);
  };
  function Ro(a) {
    Sf(a.element, "ol-collapsed");
    a.j ? Kf(a.A, a.B) : Kf(a.B, a.A);
    a.j = !a.j;
    var c = a.f;
    a.j || c.f || (c.Xc(), Po(a), xb(c, "postrender", function() {
      Qo(this);
    }, a));
  }
  l.Gl = function() {
    return this.l;
  };
  l.Jl = function(a) {
    this.l !== a && (this.l = a, Sf(this.element, "ol-uncollapsible"), !a && this.j && Ro(this));
  };
  l.Il = function(a) {
    this.l && this.j !== a && Ro(this);
  };
  l.Fl = function() {
    return this.j;
  };
  l.Uj = function() {
    return this.f;
  };
  function So(a) {
    a = a ? a : {};
    var c = void 0 !== a.className ? a.className : "ol-scale-line";
    this.l = document.createElement("DIV");
    this.l.className = c + "-inner";
    this.f = document.createElement("DIV");
    this.f.className = c + " ol-unselectable";
    this.f.appendChild(this.l);
    this.A = null;
    this.o = void 0 !== a.minWidth ? a.minWidth : 64;
    this.j = !1;
    this.D = void 0;
    this.B = "";
    jg.call(this, {
      element: this.f,
      render: a.render ? a.render : To,
      target: a.target
    });
    D(this, Ob("units"), this.U, this);
    this.H(a.units || "metric");
  }
  y(So, jg);
  var Uo = [1, 2, 5];
  So.prototype.J = function() {
    return this.get("units");
  };
  function To(a) {
    (a = a.frameState) ? this.A = a.viewState : this.A = null;
    Vo(this);
  }
  So.prototype.U = function() {
    Vo(this);
  };
  So.prototype.H = function(a) {
    this.set("units", a);
  };
  function Vo(a) {
    var c = a.A;
    if (c) {
      var d = c.projection,
          e = d.$b(),
          c = d.getPointResolution(c.resolution, c.center) * e,
          e = a.o * c,
          d = "",
          f = a.J();
      "degrees" == f ? (d = md.degrees, c /= d, e < d / 60 ? (d = "\u2033", c *= 3600) : e < d ? (d = "\u2032", c *= 60) : d = "\u00b0") : "imperial" == f ? .9144 > e ? (d = "in", c /= .0254) : 1609.344 > e ? (d = "ft", c /= .3048) : (d = "mi", c /= 1609.344) : "nautical" == f ? (c /= 1852, d = "nm") : "metric" == f ? 1 > e ? (d = "mm", c *= 1E3) : 1E3 > e ? d = "m" : (d = "km", c /= 1E3) : "us" == f && (.9144 > e ? (d = "in", c *= 39.37) : 1609.344 > e ? (d = "ft", c /= .30480061) : (d = "mi", c /= 1609.3472));
      for (var f = 3 * Math.floor(Math.log(a.o * c) / Math.log(10)),
          g; ; ) {
        g = Uo[(f % 3 + 3) % 3] * Math.pow(10, Math.floor(f / 3));
        e = Math.round(g / c);
        if (isNaN(e)) {
          bg(a.f, !1);
          a.j = !1;
          return;
        }
        if (e >= a.o)
          break;
        ++f;
      }
      c = g + " " + d;
      a.B != c && (a.l.innerHTML = c, a.B = c);
      a.D != e && (a.l.style.width = e + "px", a.D = e);
      a.j || (bg(a.f, !0), a.j = !0);
    } else
      a.j && (bg(a.f, !1), a.j = !1);
  }
  ;
  function Wo(a) {
    a = a ? a : {};
    this.f = void 0;
    this.l = Xo;
    this.D = null;
    this.U = !1;
    this.H = void 0 !== a.duration ? a.duration : 200;
    var c = void 0 !== a.className ? a.className : "ol-zoomslider",
        d = Ef("BUTTON", {
          type: "button",
          "class": c + "-thumb ol-unselectable"
        }),
        c = Ef("DIV", [c, "ol-unselectable", "ol-control"], d),
        e = new hi(c);
    Cb(this, qa(Db, e));
    D(e, Sh, this.lk, this);
    D(e, Th, this.Dg, this);
    D(e, Uh, this.Eg, this);
    D(c, "click", this.kk, this);
    D(d, "click", Fb);
    jg.call(this, {
      element: c,
      render: a.render ? a.render : Yo
    });
  }
  y(Wo, jg);
  var Xo = 0;
  l = Wo.prototype;
  l.setMap = function(a) {
    Wo.ha.setMap.call(this, a);
    a && a.render();
  };
  function Yo(a) {
    if (a.frameState) {
      if (!this.U) {
        var c = this.element,
            d = $f(c),
            e = Lf(c),
            c = eg(e, "margin"),
            f = new xf(e.offsetWidth, e.offsetHeight),
            e = f.width + c.right + c.left,
            c = f.height + c.top + c.bottom;
        this.D = [e, c];
        e = d.width - e;
        c = d.height - c;
        d.width > d.height ? (this.l = 1, d = new Uf(0, 0, e, 0)) : (this.l = Xo, d = new Uf(0, 0, 0, c));
        this.j = d;
        this.U = !0;
      }
      a = a.frameState.viewState.resolution;
      a !== this.f && (this.f = a, Zo(this, a));
    }
  }
  l.kk = function(a) {
    var c = this.a,
        d = c.$(),
        e = d.Z();
    c.Ra(Je({
      resolution: e,
      duration: this.H,
      easing: De
    }));
    a = $o(this, ap(this, a.offsetX - this.D[0] / 2, a.offsetY - this.D[1] / 2));
    d.Vb(d.constrainResolution(a));
  };
  l.lk = function(a) {
    if (!this.o && a.b.target === this.element.firstElementChild && (Be(this.a.$(), 1), this.B = a.clientX, this.J = a.clientY, this.o = !0, !this.A)) {
      a = this.Dg;
      var c = this.Eg;
      this.A = [D(document, "mousemove", a, this), D(document, "touchmove", a, this), D(document, Th, a, this), D(document, "mouseup", c, this), D(document, "touchend", c, this), D(document, Uh, c, this)];
    }
  };
  l.Dg = function(a) {
    if (this.o) {
      var c = this.element.firstElementChild;
      this.f = $o(this, ap(this, a.clientX - this.B + parseInt(c.style.left, 10), a.clientY - this.J + parseInt(c.style.top, 10)));
      this.a.$().Vb(this.f);
      Zo(this, this.f);
      this.B = a.clientX;
      this.J = a.clientY;
    }
  };
  l.Eg = function() {
    if (this.o) {
      var a = this.a,
          c = a.$();
      Be(c, -1);
      a.Ra(Je({
        resolution: this.f,
        duration: this.H,
        easing: De
      }));
      a = c.constrainResolution(this.f);
      c.Vb(a);
      this.o = !1;
      this.J = this.B = void 0;
      this.A.forEach(sb);
      this.A = null;
    }
  };
  function Zo(a, c) {
    var d;
    d = 1 - ze(a.a.$())(c);
    var e = Lf(a.element);
    1 == a.l ? Wf(e, a.j.left + a.j.width * d) : Wf(e, a.j.left, a.j.top + a.j.height * d);
  }
  function ap(a, c, d) {
    var e = a.j;
    return Ma(1 === a.l ? (c - e.left) / e.width : (d - e.top) / e.height, 0, 1);
  }
  function $o(a, c) {
    return ye(a.a.$())(1 - c);
  }
  ;
  function bp(a) {
    a = a ? a : {};
    this.f = a.extent ? a.extent : null;
    var c = void 0 !== a.className ? a.className : "ol-zoom-extent",
        d = Ef("BUTTON", {
          type: "button",
          title: void 0 !== a.tipLabel ? a.tipLabel : "Fit to extent"
        }, void 0 !== a.label ? a.label : "E");
    D(d, "click", this.j, this);
    c = Ef("DIV", c + " ol-unselectable ol-control", d);
    jg.call(this, {
      element: c,
      target: a.target
    });
  }
  y(bp, jg);
  bp.prototype.j = function(a) {
    a.preventDefault();
    var c = this.a;
    a = c.$();
    var d = this.f ? this.f : a.i.G(),
        c = c.Va();
    a.Xe(d, c);
  };
  function cp(a) {
    Mb.call(this);
    a = a ? a : {};
    this.a = null;
    D(this, Ob("tracking"), this.kl, this);
    this.kf(void 0 !== a.tracking ? a.tracking : !1);
  }
  y(cp, Mb);
  l = cp.prototype;
  l.fa = function() {
    this.kf(!1);
    cp.ha.fa.call(this);
  };
  l.tn = function(a) {
    if (null !== a.alpha) {
      var c = Ra(a.alpha);
      this.set("alpha", c);
      "boolean" === typeof a.absolute && a.absolute ? this.set("heading", c) : ia(a.webkitCompassHeading) && -1 != a.webkitCompassAccuracy && this.set("heading", Ra(a.webkitCompassHeading));
    }
    null !== a.beta && this.set("beta", Ra(a.beta));
    null !== a.gamma && this.set("gamma", Ra(a.gamma));
    this.u();
  };
  l.uj = function() {
    return this.get("alpha");
  };
  l.xj = function() {
    return this.get("beta");
  };
  l.Dj = function() {
    return this.get("gamma");
  };
  l.jl = function() {
    return this.get("heading");
  };
  l.Pg = function() {
    return this.get("tracking");
  };
  l.kl = function() {
    if (Ch) {
      var a = this.Pg();
      a && !this.a ? this.a = D(aa, "deviceorientation", this.tn, this) : a || null === this.a || (sb(this.a), this.a = null);
    }
  };
  l.kf = function(a) {
    this.set("tracking", a);
  };
  function dp() {
    this.defaultDataProjection = null;
  }
  function ep(a, c, d) {
    var e;
    d && (e = {
      dataProjection: d.dataProjection ? d.dataProjection : a.Qa(c),
      featureProjection: d.featureProjection
    });
    return fp(a, e);
  }
  function fp(a, c) {
    var d;
    c && (d = {
      featureProjection: c.featureProjection,
      dataProjection: c.dataProjection ? c.dataProjection : a.defaultDataProjection,
      rightHanded: c.rightHanded
    });
    return d;
  }
  function gp(a, c, d) {
    var e = d ? qd(d.featureProjection) : null;
    d = d ? qd(d.dataProjection) : null;
    return e && d && !Hd(e, d) ? a instanceof Md ? (c ? a.clone() : a).fb(c ? e : d, c ? d : e) : Ld(c ? a.slice() : a, c ? e : d, c ? d : e) : a;
  }
  ;
  var hp = aa.JSON.parse,
      ip = aa.JSON.stringify;
  function jp() {
    this.defaultDataProjection = null;
  }
  y(jp, dp);
  function kp(a) {
    return ka(a) ? a : "string" === typeof a ? (a = hp(a)) ? a : null : null;
  }
  l = jp.prototype;
  l.W = function() {
    return "json";
  };
  l.Ub = function(a, c) {
    return this.Tc(kp(a), ep(this, a, c));
  };
  l.Ea = function(a, c) {
    return this.Af(kp(a), ep(this, a, c));
  };
  l.Uc = function(a, c) {
    return this.Ah(kp(a), ep(this, a, c));
  };
  l.Qa = function(a) {
    return this.Hh(kp(a));
  };
  l.Fd = function(a, c) {
    return ip(this.Yc(a, c));
  };
  l.Wb = function(a, c) {
    return ip(this.He(a, c));
  };
  l.Zc = function(a, c) {
    return ip(this.Je(a, c));
  };
  function lp(a, c, d, e, f, g) {
    var h = NaN,
        k = NaN,
        m = (d - c) / e;
    if (0 !== m)
      if (1 == m)
        h = a[c], k = a[c + 1];
      else if (2 == m)
        h = (1 - f) * a[c] + f * a[c + e], k = (1 - f) * a[c + 1] + f * a[c + e + 1];
      else {
        var k = a[c],
            m = a[c + 1],
            n = 0,
            h = [0],
            p;
        for (p = c + e; p < d; p += e) {
          var q = a[p],
              r = a[p + 1],
              n = n + Math.sqrt((q - k) * (q - k) + (r - m) * (r - m));
          h.push(n);
          k = q;
          m = r;
        }
        d = f * n;
        m = 0;
        n = h.length;
        for (p = !1; m < n; )
          f = m + (n - m >> 1), k = +Ua(h[f], d), 0 > k ? m = f + 1 : (n = f, p = !k);
        f = p ? m : ~m;
        0 > f ? (d = (d - h[-f - 2]) / (h[-f - 1] - h[-f - 2]), c += (-f - 2) * e, h = ac(a[c], a[c + e], d), k = ac(a[c + 1], a[c + e + 1], d)) : (h = a[c + f * e], k = a[c + f * e + 1]);
      }
    return g ? (g[0] = h, g[1] = k, g) : [h, k];
  }
  function mp(a, c, d, e, f, g) {
    if (d == c)
      return null;
    if (f < a[c + e - 1])
      return g ? (d = a.slice(c, c + e), d[e - 1] = f, d) : null;
    if (a[d - 1] < f)
      return g ? (d = a.slice(d - e, d), d[e - 1] = f, d) : null;
    if (f == a[c + e - 1])
      return a.slice(c, c + e);
    c /= e;
    for (d /= e; c < d; )
      g = c + d >> 1, f < a[(g + 1) * e - 1] ? d = g : c = g + 1;
    d = a[c * e - 1];
    if (f == d)
      return a.slice((c - 1) * e, (c - 1) * e + e);
    g = (f - d) / (a[(c + 1) * e - 1] - d);
    d = [];
    var h;
    for (h = 0; h < e - 1; ++h)
      d.push(ac(a[(c - 1) * e + h], a[c * e + h], g));
    d.push(f);
    return d;
  }
  function np(a, c, d, e, f, g) {
    var h = 0;
    if (g)
      return mp(a, h, c[c.length - 1], d, e, f);
    if (e < a[d - 1])
      return f ? (a = a.slice(0, d), a[d - 1] = e, a) : null;
    if (a[a.length - 1] < e)
      return f ? (a = a.slice(a.length - d), a[d - 1] = e, a) : null;
    f = 0;
    for (g = c.length; f < g; ++f) {
      var k = c[f];
      if (h != k) {
        if (e < a[h + d - 1])
          break;
        if (e <= a[k - 1])
          return mp(a, h, k, d, e, !1);
        h = k;
      }
    }
    return null;
  }
  ;
  function T(a, c) {
    Od.call(this);
    this.c = null;
    this.J = this.D = this.o = -1;
    this.la(a, c);
  }
  y(T, Od);
  l = T.prototype;
  l.dj = function(a) {
    this.v ? Ya(this.v, a) : this.v = a.slice();
    this.u();
  };
  l.clone = function() {
    var a = new T(null);
    a.ba(this.f, this.v.slice());
    return a;
  };
  l.sb = function(a, c, d, e) {
    if (e < Cc(this.G(), a, c))
      return e;
    this.J != this.g && (this.D = Math.sqrt(Vd(this.v, 0, this.v.length, this.a, 0)), this.J = this.g);
    return Xd(this.v, 0, this.v.length, this.a, this.D, !1, a, c, d, e);
  };
  l.rj = function(a, c) {
    return le(this.v, 0, this.v.length, this.a, a, c);
  };
  l.Ml = function(a, c) {
    return "XYM" != this.f && "XYZM" != this.f ? null : mp(this.v, 0, this.v.length, this.a, a, void 0 !== c ? c : !1);
  };
  l.Y = function() {
    return be(this.v, 0, this.v.length, this.a);
  };
  l.qg = function(a, c) {
    return lp(this.v, 0, this.v.length, this.a, a, c);
  };
  l.Nl = function() {
    var a = this.v,
        c = this.a,
        d = a[0],
        e = a[1],
        f = 0,
        g;
    for (g = 0 + c; g < this.v.length; g += c)
      var h = a[g],
          k = a[g + 1],
          f = f + Math.sqrt((h - d) * (h - d) + (k - e) * (k - e)),
          d = h,
          e = k;
    return f;
  };
  function Zk(a) {
    a.o != a.g && (a.c = a.qg(.5, a.c), a.o = a.g);
    return a.c;
  }
  l.Mc = function(a) {
    var c = [];
    c.length = de(this.v, 0, this.v.length, this.a, a, c, 0);
    a = new T(null);
    a.ba("XY", c);
    return a;
  };
  l.W = function() {
    return "LineString";
  };
  l.Ia = function(a) {
    return me(this.v, 0, this.v.length, this.a, a);
  };
  l.la = function(a, c) {
    a ? (Rd(this, c, a, 1), this.v || (this.v = []), this.v.length = $d(this.v, 0, a, this.a), this.u()) : this.ba("XY", null);
  };
  l.ba = function(a, c) {
    Qd(this, a, c);
    this.u();
  };
  function U(a, c) {
    Od.call(this);
    this.c = [];
    this.o = this.J = -1;
    this.la(a, c);
  }
  y(U, Od);
  l = U.prototype;
  l.ej = function(a) {
    this.v ? Ya(this.v, a.ga().slice()) : this.v = a.ga().slice();
    this.c.push(this.v.length);
    this.u();
  };
  l.clone = function() {
    var a = new U(null);
    a.ba(this.f, this.v.slice(), this.c.slice());
    return a;
  };
  l.sb = function(a, c, d, e) {
    if (e < Cc(this.G(), a, c))
      return e;
    this.o != this.g && (this.J = Math.sqrt(Wd(this.v, 0, this.c, this.a, 0)), this.o = this.g);
    return Yd(this.v, 0, this.c, this.a, this.J, !1, a, c, d, e);
  };
  l.Pl = function(a, c, d) {
    return "XYM" != this.f && "XYZM" != this.f || 0 === this.v.length ? null : np(this.v, this.c, this.a, a, void 0 !== c ? c : !1, void 0 !== d ? d : !1);
  };
  l.Y = function() {
    return ce(this.v, 0, this.c, this.a);
  };
  l.Cb = function() {
    return this.c;
  };
  l.Lj = function(a) {
    if (0 > a || this.c.length <= a)
      return null;
    var c = new T(null);
    c.ba(this.f, this.v.slice(0 === a ? 0 : this.c[a - 1], this.c[a]));
    return c;
  };
  l.rd = function() {
    var a = this.v,
        c = this.c,
        d = this.f,
        e = [],
        f = 0,
        g,
        h;
    g = 0;
    for (h = c.length; g < h; ++g) {
      var k = c[g],
          m = new T(null);
      m.ba(d, a.slice(f, k));
      e.push(m);
      f = k;
    }
    return e;
  };
  function $k(a) {
    var c = [],
        d = a.v,
        e = 0,
        f = a.c;
    a = a.a;
    var g,
        h;
    g = 0;
    for (h = f.length; g < h; ++g) {
      var k = f[g],
          e = lp(d, e, k, a, .5);
      Ya(c, e);
      e = k;
    }
    return c;
  }
  l.Mc = function(a) {
    var c = [],
        d = [],
        e = this.v,
        f = this.c,
        g = this.a,
        h = 0,
        k = 0,
        m,
        n;
    m = 0;
    for (n = f.length; m < n; ++m) {
      var p = f[m],
          k = de(e, h, p, g, a, c, k);
      d.push(k);
      h = p;
    }
    c.length = k;
    a = new U(null);
    a.ba("XY", c, d);
    return a;
  };
  l.W = function() {
    return "MultiLineString";
  };
  l.Ia = function(a) {
    a: {
      var c = this.v,
          d = this.c,
          e = this.a,
          f = 0,
          g,
          h;
      g = 0;
      for (h = d.length; g < h; ++g) {
        if (me(c, f, d[g], e, a)) {
          a = !0;
          break a;
        }
        f = d[g];
      }
      a = !1;
    }
    return a;
  };
  l.la = function(a, c) {
    if (a) {
      Rd(this, c, a, 2);
      this.v || (this.v = []);
      var d = ae(this.v, 0, a, this.a, this.c);
      this.v.length = 0 === d.length ? 0 : d[d.length - 1];
      this.u();
    } else
      this.ba("XY", null, this.c);
  };
  l.ba = function(a, c, d) {
    Qd(this, a, c);
    this.c = d;
    this.u();
  };
  function op(a, c) {
    var d = a.f,
        e = [],
        f = [],
        g,
        h;
    g = 0;
    for (h = c.length; g < h; ++g) {
      var k = c[g];
      0 === g && (d = k.f);
      Ya(e, k.ga());
      f.push(e.length);
    }
    a.ba(d, e, f);
  }
  ;
  function pp(a, c) {
    Od.call(this);
    this.la(a, c);
  }
  y(pp, Od);
  l = pp.prototype;
  l.gj = function(a) {
    this.v ? Ya(this.v, a.ga()) : this.v = a.ga().slice();
    this.u();
  };
  l.clone = function() {
    var a = new pp(null);
    a.ba(this.f, this.v.slice());
    return a;
  };
  l.sb = function(a, c, d, e) {
    if (e < Cc(this.G(), a, c))
      return e;
    var f = this.v,
        g = this.a,
        h,
        k,
        m;
    h = 0;
    for (k = f.length; h < k; h += g)
      if (m = Qa(a, c, f[h], f[h + 1]), m < e) {
        e = m;
        for (m = 0; m < g; ++m)
          d[m] = f[h + m];
        d.length = g;
      }
    return e;
  };
  l.Y = function() {
    return be(this.v, 0, this.v.length, this.a);
  };
  l.Wj = function(a) {
    var c = this.v ? this.v.length / this.a : 0;
    if (0 > a || c <= a)
      return null;
    c = new E(null);
    c.ba(this.f, this.v.slice(a * this.a, (a + 1) * this.a));
    return c;
  };
  l.ke = function() {
    var a = this.v,
        c = this.f,
        d = this.a,
        e = [],
        f,
        g;
    f = 0;
    for (g = a.length; f < g; f += d) {
      var h = new E(null);
      h.ba(c, a.slice(f, f + d));
      e.push(h);
    }
    return e;
  };
  l.W = function() {
    return "MultiPoint";
  };
  l.Ia = function(a) {
    var c = this.v,
        d = this.a,
        e,
        f,
        g,
        h;
    e = 0;
    for (f = c.length; e < f; e += d)
      if (g = c[e], h = c[e + 1], Fc(a, g, h))
        return !0;
    return !1;
  };
  l.la = function(a, c) {
    a ? (Rd(this, c, a, 1), this.v || (this.v = []), this.v.length = $d(this.v, 0, a, this.a), this.u()) : this.ba("XY", null);
  };
  l.ba = function(a, c) {
    Qd(this, a, c);
    this.u();
  };
  function V(a, c) {
    Od.call(this);
    this.c = [];
    this.J = -1;
    this.D = null;
    this.U = this.H = this.S = -1;
    this.o = null;
    this.la(a, c);
  }
  y(V, Od);
  l = V.prototype;
  l.hj = function(a) {
    if (this.v) {
      var c = this.v.length;
      Ya(this.v, a.ga());
      a = a.Cb().slice();
      var d,
          e;
      d = 0;
      for (e = a.length; d < e; ++d)
        a[d] += c;
    } else
      this.v = a.ga().slice(), a = a.Cb().slice(), this.c.push();
    this.c.push(a);
    this.u();
  };
  l.clone = function() {
    for (var a = new V(null),
        c = this.c.length,
        d = Array(c),
        e = 0; e < c; ++e)
      d[e] = this.c[e].slice();
    qp(a, this.f, this.v.slice(), d);
    return a;
  };
  l.sb = function(a, c, d, e) {
    if (e < Cc(this.G(), a, c))
      return e;
    if (this.H != this.g) {
      var f = this.c,
          g = 0,
          h = 0,
          k,
          m;
      k = 0;
      for (m = f.length; k < m; ++k)
        var n = f[k],
            h = Wd(this.v, g, n, this.a, h),
            g = n[n.length - 1];
      this.S = Math.sqrt(h);
      this.H = this.g;
    }
    f = al(this);
    g = this.c;
    h = this.a;
    k = this.S;
    m = 0;
    var n = [NaN, NaN],
        p,
        q;
    p = 0;
    for (q = g.length; p < q; ++p) {
      var r = g[p];
      e = Yd(f, m, r, h, k, !0, a, c, d, e, n);
      m = r[r.length - 1];
    }
    return e;
  };
  l.xc = function(a, c) {
    var d;
    a: {
      d = al(this);
      var e = this.c,
          f = 0;
      if (0 !== e.length) {
        var g,
            h;
        g = 0;
        for (h = e.length; g < h; ++g) {
          var k = e[g];
          if (je(d, f, k, this.a, a, c)) {
            d = !0;
            break a;
          }
          f = k[k.length - 1];
        }
      }
      d = !1;
    }
    return d;
  };
  l.Ql = function() {
    var a = al(this),
        c = this.c,
        d = 0,
        e = 0,
        f,
        g;
    f = 0;
    for (g = c.length; f < g; ++f)
      var h = c[f],
          e = e + Td(a, d, h, this.a),
          d = h[h.length - 1];
    return e;
  };
  l.Y = function(a) {
    var c;
    void 0 !== a ? (c = al(this).slice(), re(c, this.c, this.a, a)) : c = this.v;
    a = c;
    c = this.c;
    var d = this.a,
        e = 0,
        f = [],
        g = 0,
        h,
        k;
    h = 0;
    for (k = c.length; h < k; ++h) {
      var m = c[h];
      f[g++] = ce(a, e, m, d, f[g]);
      e = m[m.length - 1];
    }
    f.length = g;
    return f;
  };
  function bl(a) {
    if (a.J != a.g) {
      var c = a.v,
          d = a.c,
          e = a.a,
          f = 0,
          g = [],
          h,
          k,
          m = yc();
      h = 0;
      for (k = d.length; h < k; ++h) {
        var n = d[h],
            m = Kc(c, f, n[0], e);
        g.push((m[0] + m[2]) / 2, (m[1] + m[3]) / 2);
        f = n[n.length - 1];
      }
      c = al(a);
      d = a.c;
      e = a.a;
      f = 0;
      h = [];
      k = 0;
      for (m = d.length; k < m; ++k)
        n = d[k], h = ke(c, f, n, e, g, 2 * k, h), f = n[n.length - 1];
      a.D = h;
      a.J = a.g;
    }
    return a.D;
  }
  l.Ij = function() {
    var a = new pp(null);
    a.ba("XY", bl(this).slice());
    return a;
  };
  function al(a) {
    if (a.U != a.g) {
      var c = a.v,
          d;
      a: {
        d = a.c;
        var e,
            f;
        e = 0;
        for (f = d.length; e < f; ++e)
          if (!pe(c, d[e], a.a, void 0)) {
            d = !1;
            break a;
          }
        d = !0;
      }
      d ? a.o = c : (a.o = c.slice(), a.o.length = re(a.o, a.c, a.a));
      a.U = a.g;
    }
    return a.o;
  }
  l.Mc = function(a) {
    var c = [],
        d = [],
        e = this.v,
        f = this.c,
        g = this.a;
    a = Math.sqrt(a);
    var h = 0,
        k = 0,
        m,
        n;
    m = 0;
    for (n = f.length; m < n; ++m) {
      var p = f[m],
          q = [],
          k = ee(e, h, p, g, a, c, k, q);
      d.push(q);
      h = p[p.length - 1];
    }
    c.length = k;
    e = new V(null);
    qp(e, "XY", c, d);
    return e;
  };
  l.Yj = function(a) {
    if (0 > a || this.c.length <= a)
      return null;
    var c;
    0 === a ? c = 0 : (c = this.c[a - 1], c = c[c.length - 1]);
    a = this.c[a].slice();
    var d = a[a.length - 1];
    if (0 !== c) {
      var e,
          f;
      e = 0;
      for (f = a.length; e < f; ++e)
        a[e] -= c;
    }
    e = new F(null);
    e.ba(this.f, this.v.slice(c, d), a);
    return e;
  };
  l.Wd = function() {
    var a = this.f,
        c = this.v,
        d = this.c,
        e = [],
        f = 0,
        g,
        h,
        k,
        m;
    g = 0;
    for (h = d.length; g < h; ++g) {
      var n = d[g].slice(),
          p = n[n.length - 1];
      if (0 !== f)
        for (k = 0, m = n.length; k < m; ++k)
          n[k] -= f;
      k = new F(null);
      k.ba(a, c.slice(f, p), n);
      e.push(k);
      f = p;
    }
    return e;
  };
  l.W = function() {
    return "MultiPolygon";
  };
  l.Ia = function(a) {
    a: {
      var c = al(this),
          d = this.c,
          e = this.a,
          f = 0,
          g,
          h;
      g = 0;
      for (h = d.length; g < h; ++g) {
        var k = d[g];
        if (ne(c, f, k, e, a)) {
          a = !0;
          break a;
        }
        f = k[k.length - 1];
      }
      a = !1;
    }
    return a;
  };
  l.la = function(a, c) {
    if (a) {
      Rd(this, c, a, 3);
      this.v || (this.v = []);
      var d = this.v,
          e = this.a,
          f = this.c,
          g = 0,
          f = f ? f : [],
          h = 0,
          k,
          m;
      k = 0;
      for (m = a.length; k < m; ++k)
        g = ae(d, g, a[k], e, f[h]), f[h++] = g, g = g[g.length - 1];
      f.length = h;
      0 === f.length ? this.v.length = 0 : (d = f[f.length - 1], this.v.length = 0 === d.length ? 0 : d[d.length - 1]);
      this.u();
    } else
      qp(this, "XY", null, this.c);
  };
  function qp(a, c, d, e) {
    Qd(a, c, d);
    a.c = e;
    a.u();
  }
  function rp(a, c) {
    var d = a.f,
        e = [],
        f = [],
        g,
        h,
        k;
    g = 0;
    for (h = c.length; g < h; ++g) {
      var m = c[g];
      0 === g && (d = m.f);
      var n = e.length;
      k = m.Cb();
      var p,
          q;
      p = 0;
      for (q = k.length; p < q; ++p)
        k[p] += n;
      Ya(e, m.ga());
      f.push(k);
    }
    qp(a, d, e, f);
  }
  ;
  function sp(a) {
    a = a ? a : {};
    this.defaultDataProjection = null;
    this.b = a.geometryName;
  }
  y(sp, jp);
  function tp(a, c) {
    if (!a)
      return null;
    var d;
    if (ia(a.x) && ia(a.y))
      d = "Point";
    else if (a.points)
      d = "MultiPoint";
    else if (a.paths)
      d = 1 === a.paths.length ? "LineString" : "MultiLineString";
    else if (a.rings) {
      var e = a.rings,
          f = up(a),
          g = [];
      d = [];
      var h,
          k;
      h = 0;
      for (k = e.length; h < k; ++h) {
        var m = Xa(e[h]);
        oe(m, 0, m.length, f.length) ? g.push([e[h]]) : d.push(e[h]);
      }
      for (; d.length; ) {
        e = d.shift();
        f = !1;
        for (h = g.length - 1; 0 <= h; h--)
          if (Gc((new fe(g[h][0])).G(), (new fe(e)).G())) {
            g[h].push(e);
            f = !0;
            break;
          }
        f || g.push([e.reverse()]);
      }
      a = mb({}, a);
      1 === g.length ? (d = "Polygon", a.rings = g[0]) : (d = "MultiPolygon", a.rings = g);
    }
    return gp((0, vp[d])(a), !1, c);
  }
  function up(a) {
    var c = "XY";
    !0 === a.hasZ && !0 === a.hasM ? c = "XYZM" : !0 === a.hasZ ? c = "XYZ" : !0 === a.hasM && (c = "XYM");
    return c;
  }
  function wp(a) {
    a = a.f;
    return {
      hasZ: "XYZ" === a || "XYZM" === a,
      hasM: "XYM" === a || "XYZM" === a
    };
  }
  var vp = {
    Point: function(a) {
      return void 0 !== a.m && void 0 !== a.z ? new E([a.x, a.y, a.z, a.m], "XYZM") : void 0 !== a.z ? new E([a.x, a.y, a.z], "XYZ") : void 0 !== a.m ? new E([a.x, a.y, a.m], "XYM") : new E([a.x, a.y]);
    },
    LineString: function(a) {
      return new T(a.paths[0], up(a));
    },
    Polygon: function(a) {
      return new F(a.rings, up(a));
    },
    MultiPoint: function(a) {
      return new pp(a.points, up(a));
    },
    MultiLineString: function(a) {
      return new U(a.paths, up(a));
    },
    MultiPolygon: function(a) {
      return new V(a.rings, up(a));
    }
  },
      xp = {
        Point: function(a) {
          var c = a.Y();
          a = a.f;
          if ("XYZ" === a)
            return {
              x: c[0],
              y: c[1],
              z: c[2]
            };
          if ("XYM" === a)
            return {
              x: c[0],
              y: c[1],
              m: c[2]
            };
          if ("XYZM" === a)
            return {
              x: c[0],
              y: c[1],
              z: c[2],
              m: c[3]
            };
          if ("XY" === a)
            return {
              x: c[0],
              y: c[1]
            };
        },
        LineString: function(a) {
          var c = wp(a);
          return {
            hasZ: c.hasZ,
            hasM: c.hasM,
            paths: [a.Y()]
          };
        },
        Polygon: function(a) {
          var c = wp(a);
          return {
            hasZ: c.hasZ,
            hasM: c.hasM,
            rings: a.Y(!1)
          };
        },
        MultiPoint: function(a) {
          var c = wp(a);
          return {
            hasZ: c.hasZ,
            hasM: c.hasM,
            points: a.Y()
          };
        },
        MultiLineString: function(a) {
          var c = wp(a);
          return {
            hasZ: c.hasZ,
            hasM: c.hasM,
            paths: a.Y()
          };
        },
        MultiPolygon: function(a) {
          var c = wp(a);
          a = a.Y(!1);
          for (var d = [],
              e = 0; e < a.length; e++)
            for (var f = a[e].length - 1; 0 <= f; f--)
              d.push(a[e][f]);
          return {
            hasZ: c.hasZ,
            hasM: c.hasM,
            rings: d
          };
        }
      };
  l = sp.prototype;
  l.Tc = function(a, c) {
    var d = tp(a.geometry, c),
        e = new Xl;
    this.b && e.Bc(this.b);
    e.Pa(d);
    c && c.ff && a.attributes[c.ff] && e.jc(a.attributes[c.ff]);
    a.attributes && e.C(a.attributes);
    return e;
  };
  l.Af = function(a, c) {
    var d = c ? c : {};
    if (a.features) {
      var e = [],
          f = a.features,
          g,
          h;
      d.ff = a.objectIdFieldName;
      g = 0;
      for (h = f.length; g < h; ++g)
        e.push(this.Tc(f[g], d));
      return e;
    }
    return [this.Tc(a, d)];
  };
  l.Ah = function(a, c) {
    return tp(a, c);
  };
  l.Hh = function(a) {
    return a.spatialReference && a.spatialReference.wkid ? qd("EPSG:" + a.spatialReference.wkid) : null;
  };
  function yp(a, c) {
    return (0, xp[a.W()])(gp(a, !0, c), c);
  }
  l.Je = function(a, c) {
    return yp(a, fp(this, c));
  };
  l.Yc = function(a, c) {
    c = fp(this, c);
    var d = {},
        e = a.X();
    e && (d.geometry = yp(e, c));
    e = a.P();
    delete e[a.a];
    d.attributes = pb(e) ? {} : e;
    c && c.featureProjection && (d.spatialReference = {wkid: qd(c.featureProjection).lb.split(":").pop()});
    return d;
  };
  l.He = function(a, c) {
    c = fp(this, c);
    var d = [],
        e,
        f;
    e = 0;
    for (f = a.length; e < f; ++e)
      d.push(this.Yc(a[e], c));
    return {features: d};
  };
  function zp(a) {
    Md.call(this);
    this.i = a ? a : null;
    Ap(this);
  }
  y(zp, Md);
  function Bp(a) {
    var c = [],
        d,
        e;
    d = 0;
    for (e = a.length; d < e; ++d)
      c.push(a[d].clone());
    return c;
  }
  function Cp(a) {
    var c,
        d;
    if (a.i)
      for (c = 0, d = a.i.length; c < d; ++c)
        yb(a.i[c], "change", a.u, a);
  }
  function Ap(a) {
    var c,
        d;
    if (a.i)
      for (c = 0, d = a.i.length; c < d; ++c)
        D(a.i[c], "change", a.u, a);
  }
  l = zp.prototype;
  l.clone = function() {
    var a = new zp(null);
    a.Qh(this.i);
    return a;
  };
  l.sb = function(a, c, d, e) {
    if (e < Cc(this.G(), a, c))
      return e;
    var f = this.i,
        g,
        h;
    g = 0;
    for (h = f.length; g < h; ++g)
      e = f[g].sb(a, c, d, e);
    return e;
  };
  l.xc = function(a, c) {
    var d = this.i,
        e,
        f;
    e = 0;
    for (f = d.length; e < f; ++e)
      if (d[e].xc(a, c))
        return !0;
    return !1;
  };
  l.Pd = function(a) {
    Ic(Infinity, Infinity, -Infinity, -Infinity, a);
    for (var c = this.i,
        d = 0,
        e = c.length; d < e; ++d)
      Nc(a, c[d].G());
    return a;
  };
  l.vg = function() {
    return Bp(this.i);
  };
  l.sd = function(a) {
    this.s != this.g && (nb(this.j), this.l = 0, this.s = this.g);
    if (0 > a || 0 !== this.l && a < this.l)
      return this;
    var c = a.toString();
    if (this.j.hasOwnProperty(c))
      return this.j[c];
    var d = [],
        e = this.i,
        f = !1,
        g,
        h;
    g = 0;
    for (h = e.length; g < h; ++g) {
      var k = e[g],
          m = k.sd(a);
      d.push(m);
      m !== k && (f = !0);
    }
    if (f)
      return a = new zp(null), Cp(a), a.i = d, Ap(a), a.u(), this.j[c] = a;
    this.l = a;
    return this;
  };
  l.W = function() {
    return "GeometryCollection";
  };
  l.Ia = function(a) {
    var c = this.i,
        d,
        e;
    d = 0;
    for (e = c.length; d < e; ++d)
      if (c[d].Ia(a))
        return !0;
    return !1;
  };
  l.Oa = function() {
    return 0 === this.i.length;
  };
  l.Qh = function(a) {
    a = Bp(a);
    Cp(this);
    this.i = a;
    Ap(this);
    this.u();
  };
  l.Hc = function(a) {
    var c = this.i,
        d,
        e;
    d = 0;
    for (e = c.length; d < e; ++d)
      c[d].Hc(a);
    this.u();
  };
  l.Rc = function(a, c) {
    var d = this.i,
        e,
        f;
    e = 0;
    for (f = d.length; e < f; ++e)
      d[e].Rc(a, c);
    this.u();
  };
  l.fa = function() {
    Cp(this);
    zp.ha.fa.call(this);
  };
  function Dp(a) {
    a = a ? a : {};
    this.defaultDataProjection = null;
    this.defaultDataProjection = qd(a.defaultDataProjection ? a.defaultDataProjection : "EPSG:4326");
    this.b = a.geometryName;
  }
  y(Dp, jp);
  function Ep(a, c) {
    return a ? gp((0, Fp[a.type])(a), !1, c) : null;
  }
  function Gp(a, c) {
    return (0, Hp[a.W()])(gp(a, !0, c), c);
  }
  var Fp = {
    Point: function(a) {
      return new E(a.coordinates);
    },
    LineString: function(a) {
      return new T(a.coordinates);
    },
    Polygon: function(a) {
      return new F(a.coordinates);
    },
    MultiPoint: function(a) {
      return new pp(a.coordinates);
    },
    MultiLineString: function(a) {
      return new U(a.coordinates);
    },
    MultiPolygon: function(a) {
      return new V(a.coordinates);
    },
    GeometryCollection: function(a, c) {
      var d = a.geometries.map(function(a) {
        return Ep(a, c);
      });
      return new zp(d);
    }
  },
      Hp = {
        Point: function(a) {
          return {
            type: "Point",
            coordinates: a.Y()
          };
        },
        LineString: function(a) {
          return {
            type: "LineString",
            coordinates: a.Y()
          };
        },
        Polygon: function(a, c) {
          var d;
          c && (d = c.rightHanded);
          return {
            type: "Polygon",
            coordinates: a.Y(d)
          };
        },
        MultiPoint: function(a) {
          return {
            type: "MultiPoint",
            coordinates: a.Y()
          };
        },
        MultiLineString: function(a) {
          return {
            type: "MultiLineString",
            coordinates: a.Y()
          };
        },
        MultiPolygon: function(a, c) {
          var d;
          c && (d = c.rightHanded);
          return {
            type: "MultiPolygon",
            coordinates: a.Y(d)
          };
        },
        GeometryCollection: function(a, c) {
          return {
            type: "GeometryCollection",
            geometries: a.i.map(function(a) {
              return Gp(a, c);
            })
          };
        },
        Circle: function() {
          return {
            type: "GeometryCollection",
            geometries: []
          };
        }
      };
  l = Dp.prototype;
  l.Tc = function(a, c) {
    var d = Ep(a.geometry, c),
        e = new Xl;
    this.b && e.Bc(this.b);
    e.Pa(d);
    void 0 !== a.id && e.jc(a.id);
    a.properties && e.C(a.properties);
    return e;
  };
  l.Af = function(a, c) {
    if ("Feature" == a.type)
      return [this.Tc(a, c)];
    if ("FeatureCollection" == a.type) {
      var d = [],
          e = a.features,
          f,
          g;
      f = 0;
      for (g = e.length; f < g; ++f)
        d.push(this.Tc(e[f], c));
      return d;
    }
    return [];
  };
  l.Ah = function(a, c) {
    return Ep(a, c);
  };
  l.Hh = function(a) {
    return (a = a.crs) ? "name" == a.type ? qd(a.properties.name) : "EPSG" == a.type ? qd("EPSG:" + a.properties.code) : null : this.defaultDataProjection;
  };
  l.Yc = function(a, c) {
    c = fp(this, c);
    var d = {type: "Feature"},
        e = a.Sa();
    void 0 !== e && (d.id = e);
    (e = a.X()) ? d.geometry = Gp(e, c) : d.geometry = null;
    e = a.P();
    delete e[a.a];
    pb(e) ? d.properties = null : d.properties = e;
    return d;
  };
  l.He = function(a, c) {
    c = fp(this, c);
    var d = [],
        e,
        f;
    e = 0;
    for (f = a.length; e < f; ++e)
      d.push(this.Yc(a[e], c));
    return {
      type: "FeatureCollection",
      features: d
    };
  };
  l.Je = function(a, c) {
    return Gp(a, fp(this, c));
  };
  function Ip() {
    this.defaultDataProjection = null;
  }
  y(Ip, dp);
  l = Ip.prototype;
  l.W = function() {
    return "xml";
  };
  l.Ub = function(a, c) {
    if (pm(a))
      return Jp(this, a, c);
    if (sm(a))
      return this.yh(a, c);
    if ("string" === typeof a) {
      var d = Cm(a);
      return Jp(this, d, c);
    }
    return null;
  };
  function Jp(a, c, d) {
    a = Kp(a, c, d);
    return 0 < a.length ? a[0] : null;
  }
  l.Ea = function(a, c) {
    if (pm(a))
      return Kp(this, a, c);
    if (sm(a))
      return this.ic(a, c);
    if ("string" === typeof a) {
      var d = Cm(a);
      return Kp(this, d, c);
    }
    return [];
  };
  function Kp(a, c, d) {
    var e = [];
    for (c = c.firstChild; c; c = c.nextSibling)
      1 == c.nodeType && Ya(e, a.ic(c, d));
    return e;
  }
  l.Uc = function(a, c) {
    if (pm(a))
      return this.s(a, c);
    if (sm(a)) {
      var d = this.ye(a, [ep(this, a, c ? c : {})]);
      return d ? d : null;
    }
    return "string" === typeof a ? (d = Cm(a), this.s(d, c)) : null;
  };
  l.Qa = function(a) {
    return pm(a) ? this.Gf(a) : sm(a) ? this.Be(a) : "string" === typeof a ? (a = Cm(a), this.Gf(a)) : null;
  };
  l.Gf = function() {
    return this.defaultDataProjection;
  };
  l.Be = function() {
    return this.defaultDataProjection;
  };
  l.Fd = function(a, c) {
    var d = this.T(a, c);
    return bm(d);
  };
  l.Wb = function(a, c) {
    var d = this.a(a, c);
    return bm(d);
  };
  l.Zc = function(a, c) {
    var d = this.o(a, c);
    return bm(d);
  };
  function Lp(a) {
    a = a ? a : {};
    this.featureType = a.featureType;
    this.featureNS = a.featureNS;
    this.srsName = a.srsName;
    this.schemaLocation = "";
    this.b = {};
    this.b["http://www.opengis.net/gml"] = {
      featureMember: Fm(Lp.prototype.yd),
      featureMembers: Fm(Lp.prototype.yd)
    };
    this.defaultDataProjection = null;
  }
  y(Lp, Ip);
  var Mp = /^[\s\xa0]*$/;
  l = Lp.prototype;
  l.yd = function(a, c) {
    var d = mm(a),
        e;
    if ("FeatureCollection" == d)
      "http://www.opengis.net/wfs" === a.namespaceURI ? e = R([], this.b, a, c, this) : e = R(null, this.b, a, c, this);
    else if ("featureMembers" == d || "featureMember" == d) {
      var f = c[0],
          g = f.featureType;
      e = f.featureNS;
      var h,
          k;
      if (!g && a.childNodes) {
        g = [];
        e = {};
        h = 0;
        for (k = a.childNodes.length; h < k; ++h) {
          var m = a.childNodes[h];
          if (1 === m.nodeType) {
            var n = m.nodeName.split(":").pop();
            if (-1 === g.indexOf(n)) {
              var p = "",
                  q = 0,
                  m = m.namespaceURI,
                  r;
              for (r in e) {
                if (e[r] === m) {
                  p = r;
                  break;
                }
                ++q;
              }
              p || (p = "p" + q, e[p] = m);
              g.push(p + ":" + n);
            }
          }
        }
        f.featureType = g;
        f.featureNS = e;
      }
      "string" === typeof e && (h = e, e = {}, e.p0 = h);
      r = {};
      var g = fa(g) ? g : [g],
          t;
      for (t in e) {
        f = {};
        h = 0;
        for (k = g.length; h < k; ++h)
          (-1 === g[h].indexOf(":") ? "p0" : g[h].split(":")[0]) === t && (f[g[h].split(":").pop()] = "featureMembers" == d ? Em(this.zf, this) : Fm(this.zf, this));
        r[e[t]] = f;
      }
      e = R([], r, a, c);
    }
    e || (e = []);
    return e;
  };
  l.ye = function(a, c) {
    var d = c[0];
    d.srsName = a.firstElementChild.getAttribute("srsName");
    var e = R(null, this.Sf, a, c, this);
    if (e)
      return gp(e, !1, d);
  };
  l.zf = function(a, c) {
    var d,
        e = a.getAttribute("fid") || wm(a, "http://www.opengis.net/gml", "id"),
        f = {},
        g;
    for (d = a.firstElementChild; d; d = d.nextElementSibling) {
      var h = mm(d);
      if (0 === d.childNodes.length || 1 === d.childNodes.length && (3 === d.firstChild.nodeType || 4 === d.firstChild.nodeType)) {
        var k = im(d, !1);
        Mp.test(k) && (k = void 0);
        f[h] = k;
      } else
        "boundedBy" !== h && (g = h), f[h] = this.ye(d, c);
    }
    d = new Xl(f);
    g && d.Bc(g);
    e && d.jc(e);
    return d;
  };
  l.Gh = function(a, c) {
    var d = this.xe(a, c);
    if (d) {
      var e = new E(null);
      e.ba("XYZ", d);
      return e;
    }
  };
  l.Eh = function(a, c) {
    var d = R([], this.Bi, a, c, this);
    if (d)
      return new pp(d);
  };
  l.Dh = function(a, c) {
    var d = R([], this.Ai, a, c, this);
    if (d) {
      var e = new U(null);
      op(e, d);
      return e;
    }
  };
  l.Fh = function(a, c) {
    var d = R([], this.Ci, a, c, this);
    if (d) {
      var e = new V(null);
      rp(e, d);
      return e;
    }
  };
  l.vh = function(a, c) {
    Mm(this.Fi, a, c, this);
  };
  l.Kg = function(a, c) {
    Mm(this.yi, a, c, this);
  };
  l.wh = function(a, c) {
    Mm(this.Gi, a, c, this);
  };
  l.ze = function(a, c) {
    var d = this.xe(a, c);
    if (d) {
      var e = new T(null);
      e.ba("XYZ", d);
      return e;
    }
  };
  l.Pn = function(a, c) {
    var d = R(null, this.Hd, a, c, this);
    if (d)
      return d;
  };
  l.Ch = function(a, c) {
    var d = this.xe(a, c);
    if (d) {
      var e = new fe(null);
      ge(e, "XYZ", d);
      return e;
    }
  };
  l.Ae = function(a, c) {
    var d = R([null], this.Le, a, c, this);
    if (d && d[0]) {
      var e = new F(null),
          f = d[0],
          g = [f.length],
          h,
          k;
      h = 1;
      for (k = d.length; h < k; ++h)
        Ya(f, d[h]), g.push(f.length);
      e.ba("XYZ", f, g);
      return e;
    }
  };
  l.xe = function(a, c) {
    return R(null, this.Hd, a, c, this);
  };
  l.Bi = Object({"http://www.opengis.net/gml": {
      pointMember: Em(Lp.prototype.vh),
      pointMembers: Em(Lp.prototype.vh)
    }});
  l.Ai = Object({"http://www.opengis.net/gml": {
      lineStringMember: Em(Lp.prototype.Kg),
      lineStringMembers: Em(Lp.prototype.Kg)
    }});
  l.Ci = Object({"http://www.opengis.net/gml": {
      polygonMember: Em(Lp.prototype.wh),
      polygonMembers: Em(Lp.prototype.wh)
    }});
  l.Fi = Object({"http://www.opengis.net/gml": {Point: Em(Lp.prototype.xe)}});
  l.yi = Object({"http://www.opengis.net/gml": {LineString: Em(Lp.prototype.ze)}});
  l.Gi = Object({"http://www.opengis.net/gml": {Polygon: Em(Lp.prototype.Ae)}});
  l.Id = Object({"http://www.opengis.net/gml": {LinearRing: Fm(Lp.prototype.Pn)}});
  l.ic = function(a, c) {
    var d = {
      featureType: this.featureType,
      featureNS: this.featureNS
    };
    c && mb(d, ep(this, a, c));
    return this.yd(a, [d]);
  };
  l.Be = function(a) {
    return qd(this.A ? this.A : a.firstElementChild.getAttribute("srsName"));
  };
  function Np(a) {
    a = im(a, !1);
    return Op(a);
  }
  function Op(a) {
    if (a = /^\s*(true|1)|(false|0)\s*$/.exec(a))
      return void 0 !== a[1] || !1;
  }
  function Pp(a) {
    a = im(a, !1);
    if (a = /^\s*(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(Z|(?:([+\-])(\d{2})(?::(\d{2}))?))\s*$/.exec(a)) {
      var c = Date.UTC(parseInt(a[1], 10), parseInt(a[2], 10) - 1, parseInt(a[3], 10), parseInt(a[4], 10), parseInt(a[5], 10), parseInt(a[6], 10)) / 1E3;
      if ("Z" != a[7]) {
        var d = "-" == a[8] ? -1 : 1,
            c = c + 60 * d * parseInt(a[9], 10);
        void 0 !== a[10] && (c += 3600 * d * parseInt(a[10], 10));
      }
      return c;
    }
  }
  function Qp(a) {
    a = im(a, !1);
    return Rp(a);
  }
  function Rp(a) {
    if (a = /^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*$/i.exec(a))
      return parseFloat(a[1]);
  }
  function Sp(a) {
    a = im(a, !1);
    return Tp(a);
  }
  function Tp(a) {
    if (a = /^\s*(\d+)\s*$/.exec(a))
      return parseInt(a[1], 10);
  }
  function W(a) {
    return im(a, !1).trim();
  }
  function Up(a, c) {
    Vp(a, c ? "1" : "0");
  }
  function Wp(a, c) {
    a.appendChild(em.createTextNode(c.toPrecision()));
  }
  function Xp(a, c) {
    a.appendChild(em.createTextNode(c.toString()));
  }
  function Vp(a, c) {
    a.appendChild(em.createTextNode(c));
  }
  ;
  function Yp(a) {
    a = a ? a : {};
    Lp.call(this, a);
    this.b["http://www.opengis.net/gml"].featureMember = Em(Lp.prototype.yd);
    this.schemaLocation = a.schemaLocation ? a.schemaLocation : "http://www.opengis.net/gml http://schemas.opengis.net/gml/2.1.2/feature.xsd";
  }
  y(Yp, Lp);
  l = Yp.prototype;
  l.zh = function(a, c) {
    var d = im(a, !1).replace(/^\s*|\s*$/g, ""),
        e = c[0].srsName,
        f = a.parentNode.getAttribute("srsDimension"),
        g = "enu";
    e && (e = qd(e)) && (g = e.f);
    d = d.split(/[\s,]+/);
    e = 2;
    a.getAttribute("srsDimension") ? e = Tp(a.getAttribute("srsDimension")) : a.getAttribute("dimension") ? e = Tp(a.getAttribute("dimension")) : f && (e = Tp(f));
    for (var h,
        k,
        m = [],
        n = 0,
        p = d.length; n < p; n += e)
      f = parseFloat(d[n]), h = parseFloat(d[n + 1]), k = 3 === e ? parseFloat(d[n + 2]) : 0, "en" === g.substr(0, 2) ? m.push(f, h, k) : m.push(h, f, k);
    return m;
  };
  l.Mn = function(a, c) {
    var d = R([null], this.ui, a, c, this);
    return Ic(d[1][0], d[1][1], d[1][3], d[1][4]);
  };
  l.Qk = function(a, c) {
    var d = R(void 0, this.Id, a, c, this);
    d && c[c.length - 1].push(d);
  };
  l.vn = function(a, c) {
    var d = R(void 0, this.Id, a, c, this);
    d && (c[c.length - 1][0] = d);
  };
  l.Hd = Object({"http://www.opengis.net/gml": {coordinates: Fm(Yp.prototype.zh)}});
  l.Le = Object({"http://www.opengis.net/gml": {
      innerBoundaryIs: Yp.prototype.Qk,
      outerBoundaryIs: Yp.prototype.vn
    }});
  l.ui = Object({"http://www.opengis.net/gml": {coordinates: Em(Yp.prototype.zh)}});
  l.Sf = Object({"http://www.opengis.net/gml": {
      Point: Fm(Lp.prototype.Gh),
      MultiPoint: Fm(Lp.prototype.Eh),
      LineString: Fm(Lp.prototype.ze),
      MultiLineString: Fm(Lp.prototype.Dh),
      LinearRing: Fm(Lp.prototype.Ch),
      Polygon: Fm(Lp.prototype.Ae),
      MultiPolygon: Fm(Lp.prototype.Fh),
      Box: Fm(Yp.prototype.Mn)
    }});
  function Zp(a) {
    a = a ? a : {};
    Lp.call(this, a);
    this.l = void 0 !== a.surface ? a.surface : !1;
    this.c = void 0 !== a.curve ? a.curve : !1;
    this.i = void 0 !== a.multiCurve ? a.multiCurve : !0;
    this.j = void 0 !== a.multiSurface ? a.multiSurface : !0;
    this.schemaLocation = a.schemaLocation ? a.schemaLocation : "http://www.opengis.net/gml http://schemas.opengis.net/gml/3.1.1/profiles/gmlsfProfile/1.0.0/gmlsf.xsd";
  }
  y(Zp, Lp);
  l = Zp.prototype;
  l.Tn = function(a, c) {
    var d = R([], this.zi, a, c, this);
    if (d) {
      var e = new U(null);
      op(e, d);
      return e;
    }
  };
  l.Un = function(a, c) {
    var d = R([], this.Di, a, c, this);
    if (d) {
      var e = new V(null);
      rp(e, d);
      return e;
    }
  };
  l.lg = function(a, c) {
    Mm(this.vi, a, c, this);
  };
  l.bi = function(a, c) {
    Mm(this.Ki, a, c, this);
  };
  l.Xn = function(a, c) {
    return R([null], this.Ei, a, c, this);
  };
  l.Zn = function(a, c) {
    return R([null], this.Ji, a, c, this);
  };
  l.Yn = function(a, c) {
    return R([null], this.Le, a, c, this);
  };
  l.Sn = function(a, c) {
    return R([null], this.Hd, a, c, this);
  };
  l.Sk = function(a, c) {
    var d = R(void 0, this.Id, a, c, this);
    d && c[c.length - 1].push(d);
  };
  l.nj = function(a, c) {
    var d = R(void 0, this.Id, a, c, this);
    d && (c[c.length - 1][0] = d);
  };
  l.Ih = function(a, c) {
    var d = R([null], this.Li, a, c, this);
    if (d && d[0]) {
      var e = new F(null),
          f = d[0],
          g = [f.length],
          h,
          k;
      h = 1;
      for (k = d.length; h < k; ++h)
        Ya(f, d[h]), g.push(f.length);
      e.ba("XYZ", f, g);
      return e;
    }
  };
  l.xh = function(a, c) {
    var d = R([null], this.wi, a, c, this);
    if (d) {
      var e = new T(null);
      e.ba("XYZ", d);
      return e;
    }
  };
  l.On = function(a, c) {
    var d = R([null], this.xi, a, c, this);
    return Ic(d[1][0], d[1][1], d[2][0], d[2][1]);
  };
  l.Qn = function(a, c) {
    for (var d = im(a, !1),
        e = /^\s*([+\-]?\d*\.?\d+(?:[eE][+\-]?\d+)?)\s*/,
        f = [],
        g; g = e.exec(d); )
      f.push(parseFloat(g[1])), d = d.substr(g[0].length);
    if ("" === d) {
      d = c[0].srsName;
      e = "enu";
      d && (e = td(qd(d)));
      if ("neu" === e)
        for (d = 0, e = f.length; d < e; d += 3)
          g = f[d], f[d] = f[d + 1], f[d + 1] = g;
      d = f.length;
      2 == d && f.push(0);
      return 0 === d ? void 0 : f;
    }
  };
  l.Df = function(a, c) {
    var d = im(a, !1).replace(/^\s*|\s*$/g, ""),
        e = c[0].srsName,
        f = a.parentNode.getAttribute("srsDimension"),
        g = "enu";
    e && (g = td(qd(e)));
    d = d.split(/\s+/);
    e = 2;
    a.getAttribute("srsDimension") ? e = Tp(a.getAttribute("srsDimension")) : a.getAttribute("dimension") ? e = Tp(a.getAttribute("dimension")) : f && (e = Tp(f));
    for (var h,
        k,
        m = [],
        n = 0,
        p = d.length; n < p; n += e)
      f = parseFloat(d[n]), h = parseFloat(d[n + 1]), k = 3 === e ? parseFloat(d[n + 2]) : 0, "en" === g.substr(0, 2) ? m.push(f, h, k) : m.push(h, f, k);
    return m;
  };
  l.Hd = Object({"http://www.opengis.net/gml": {
      pos: Fm(Zp.prototype.Qn),
      posList: Fm(Zp.prototype.Df)
    }});
  l.Le = Object({"http://www.opengis.net/gml": {
      interior: Zp.prototype.Sk,
      exterior: Zp.prototype.nj
    }});
  l.Sf = Object({"http://www.opengis.net/gml": {
      Point: Fm(Lp.prototype.Gh),
      MultiPoint: Fm(Lp.prototype.Eh),
      LineString: Fm(Lp.prototype.ze),
      MultiLineString: Fm(Lp.prototype.Dh),
      LinearRing: Fm(Lp.prototype.Ch),
      Polygon: Fm(Lp.prototype.Ae),
      MultiPolygon: Fm(Lp.prototype.Fh),
      Surface: Fm(Zp.prototype.Ih),
      MultiSurface: Fm(Zp.prototype.Un),
      Curve: Fm(Zp.prototype.xh),
      MultiCurve: Fm(Zp.prototype.Tn),
      Envelope: Fm(Zp.prototype.On)
    }});
  l.zi = Object({"http://www.opengis.net/gml": {
      curveMember: Em(Zp.prototype.lg),
      curveMembers: Em(Zp.prototype.lg)
    }});
  l.Di = Object({"http://www.opengis.net/gml": {
      surfaceMember: Em(Zp.prototype.bi),
      surfaceMembers: Em(Zp.prototype.bi)
    }});
  l.vi = Object({"http://www.opengis.net/gml": {
      LineString: Em(Lp.prototype.ze),
      Curve: Em(Zp.prototype.xh)
    }});
  l.Ki = Object({"http://www.opengis.net/gml": {
      Polygon: Em(Lp.prototype.Ae),
      Surface: Em(Zp.prototype.Ih)
    }});
  l.Li = Object({"http://www.opengis.net/gml": {patches: Fm(Zp.prototype.Xn)}});
  l.wi = Object({"http://www.opengis.net/gml": {segments: Fm(Zp.prototype.Zn)}});
  l.xi = Object({"http://www.opengis.net/gml": {
      lowerCorner: Em(Zp.prototype.Df),
      upperCorner: Em(Zp.prototype.Df)
    }});
  l.Ei = Object({"http://www.opengis.net/gml": {PolygonPatch: Fm(Zp.prototype.Yn)}});
  l.Ji = Object({"http://www.opengis.net/gml": {LineStringSegment: Fm(Zp.prototype.Sn)}});
  function $p(a, c, d) {
    d = d[d.length - 1].srsName;
    c = c.Y();
    for (var e = c.length,
        f = Array(e),
        g,
        h = 0; h < e; ++h) {
      g = c[h];
      var k = h,
          m = "enu";
      d && (m = td(qd(d)));
      f[k] = "en" === m.substr(0, 2) ? g[0] + " " + g[1] : g[1] + " " + g[0];
    }
    Vp(a, f.join(" "));
  }
  l.pi = function(a, c, d) {
    var e = d[d.length - 1].srsName;
    e && a.setAttribute("srsName", e);
    e = hm(a.namespaceURI, "pos");
    a.appendChild(e);
    d = d[d.length - 1].srsName;
    a = "enu";
    d && (a = td(qd(d)));
    c = c.Y();
    Vp(e, "en" === a.substr(0, 2) ? c[0] + " " + c[1] : c[1] + " " + c[0]);
  };
  var aq = {"http://www.opengis.net/gml": {
      lowerCorner: O(Vp),
      upperCorner: O(Vp)
    }};
  l = Zp.prototype;
  l.Mo = function(a, c, d) {
    var e = d[d.length - 1].srsName;
    e && a.setAttribute("srsName", e);
    Nm({node: a}, aq, Km, [c[0] + " " + c[1], c[2] + " " + c[3]], d, ["lowerCorner", "upperCorner"], this);
  };
  l.mi = function(a, c, d) {
    var e = d[d.length - 1].srsName;
    e && a.setAttribute("srsName", e);
    e = hm(a.namespaceURI, "posList");
    a.appendChild(e);
    $p(e, c, d);
  };
  l.Ii = function(a, c) {
    var d = c[c.length - 1],
        e = d.node,
        f = d.exteriorWritten;
    void 0 === f && (d.exteriorWritten = !0);
    return hm(e.namespaceURI, void 0 !== f ? "interior" : "exterior");
  };
  l.Ke = function(a, c, d) {
    var e = d[d.length - 1].srsName;
    "PolygonPatch" !== a.nodeName && e && a.setAttribute("srsName", e);
    "Polygon" === a.nodeName || "PolygonPatch" === a.nodeName ? (c = c.Vd(), Nm({
      node: a,
      srsName: e
    }, bq, this.Ii, c, d, void 0, this)) : "Surface" === a.nodeName && (e = hm(a.namespaceURI, "patches"), a.appendChild(e), a = hm(e.namespaceURI, "PolygonPatch"), e.appendChild(a), this.Ke(a, c, d));
  };
  l.Fe = function(a, c, d) {
    var e = d[d.length - 1].srsName;
    "LineStringSegment" !== a.nodeName && e && a.setAttribute("srsName", e);
    "LineString" === a.nodeName || "LineStringSegment" === a.nodeName ? (e = hm(a.namespaceURI, "posList"), a.appendChild(e), $p(e, c, d)) : "Curve" === a.nodeName && (e = hm(a.namespaceURI, "segments"), a.appendChild(e), a = hm(e.namespaceURI, "LineStringSegment"), e.appendChild(a), this.Fe(a, c, d));
  };
  l.oi = function(a, c, d) {
    var e = d[d.length - 1],
        f = e.srsName,
        e = e.surface;
    f && a.setAttribute("srsName", f);
    c = c.Wd();
    Nm({
      node: a,
      srsName: f,
      surface: e
    }, cq, this.f, c, d, void 0, this);
  };
  l.No = function(a, c, d) {
    var e = d[d.length - 1].srsName;
    e && a.setAttribute("srsName", e);
    c = c.ke();
    Nm({
      node: a,
      srsName: e
    }, dq, Im("pointMember"), c, d, void 0, this);
  };
  l.ni = function(a, c, d) {
    var e = d[d.length - 1],
        f = e.srsName,
        e = e.curve;
    f && a.setAttribute("srsName", f);
    c = c.rd();
    Nm({
      node: a,
      srsName: f,
      curve: e
    }, eq, this.f, c, d, void 0, this);
  };
  l.ri = function(a, c, d) {
    var e = hm(a.namespaceURI, "LinearRing");
    a.appendChild(e);
    this.mi(e, c, d);
  };
  l.si = function(a, c, d) {
    var e = this.g(c, d);
    e && (a.appendChild(e), this.Ke(e, c, d));
  };
  l.Oo = function(a, c, d) {
    var e = hm(a.namespaceURI, "Point");
    a.appendChild(e);
    this.pi(e, c, d);
  };
  l.li = function(a, c, d) {
    var e = this.g(c, d);
    e && (a.appendChild(e), this.Fe(e, c, d));
  };
  l.Ie = function(a, c, d) {
    var e = d[d.length - 1],
        f = mb({}, e);
    f.node = a;
    var g;
    fa(c) ? e.dataProjection ? g = Ld(c, e.featureProjection, e.dataProjection) : g = c : g = gp(c, !0, e);
    Nm(f, fq, this.g, [g], d, void 0, this);
  };
  l.hi = function(a, c, d) {
    var e = c.Sa();
    e && a.setAttribute("fid", e);
    var e = d[d.length - 1],
        f = e.featureNS,
        g = c.a;
    e.Ac || (e.Ac = {}, e.Ac[f] = {});
    var h = c.P();
    c = [];
    var k = [],
        m;
    for (m in h) {
      var n = h[m];
      null !== n && (c.push(m), k.push(n), m == g || n instanceof Md ? m in e.Ac[f] || (e.Ac[f][m] = O(this.Ie, this)) : m in e.Ac[f] || (e.Ac[f][m] = O(Vp)));
    }
    m = mb({}, e);
    m.node = a;
    Nm(m, e.Ac, Im(void 0, f), k, d, c);
  };
  var cq = {"http://www.opengis.net/gml": {
      surfaceMember: O(Zp.prototype.si),
      polygonMember: O(Zp.prototype.si)
    }},
      dq = {"http://www.opengis.net/gml": {pointMember: O(Zp.prototype.Oo)}},
      eq = {"http://www.opengis.net/gml": {
          lineStringMember: O(Zp.prototype.li),
          curveMember: O(Zp.prototype.li)
        }},
      bq = {"http://www.opengis.net/gml": {
          exterior: O(Zp.prototype.ri),
          interior: O(Zp.prototype.ri)
        }},
      fq = {"http://www.opengis.net/gml": {
          Curve: O(Zp.prototype.Fe),
          MultiCurve: O(Zp.prototype.ni),
          Point: O(Zp.prototype.pi),
          MultiPoint: O(Zp.prototype.No),
          LineString: O(Zp.prototype.Fe),
          MultiLineString: O(Zp.prototype.ni),
          LinearRing: O(Zp.prototype.mi),
          Polygon: O(Zp.prototype.Ke),
          MultiPolygon: O(Zp.prototype.oi),
          Surface: O(Zp.prototype.Ke),
          MultiSurface: O(Zp.prototype.oi),
          Envelope: O(Zp.prototype.Mo)
        }},
      gq = {
        MultiLineString: "lineStringMember",
        MultiCurve: "curveMember",
        MultiPolygon: "polygonMember",
        MultiSurface: "surfaceMember"
      };
  Zp.prototype.f = function(a, c) {
    return hm("http://www.opengis.net/gml", gq[c[c.length - 1].node.nodeName]);
  };
  Zp.prototype.g = function(a, c) {
    var d = c[c.length - 1],
        e = d.multiSurface,
        f = d.surface,
        g = d.curve,
        d = d.multiCurve,
        h;
    fa(a) ? h = "Envelope" : (h = a.W(), "MultiPolygon" === h && !0 === e ? h = "MultiSurface" : "Polygon" === h && !0 === f ? h = "Surface" : "LineString" === h && !0 === g ? h = "Curve" : "MultiLineString" === h && !0 === d && (h = "MultiCurve"));
    return hm("http://www.opengis.net/gml", h);
  };
  Zp.prototype.o = function(a, c) {
    c = fp(this, c);
    var d = hm("http://www.opengis.net/gml", "geom"),
        e = {
          node: d,
          srsName: this.srsName,
          curve: this.c,
          surface: this.l,
          multiSurface: this.j,
          multiCurve: this.i
        };
    c && mb(e, c);
    this.Ie(d, a, [e]);
    return d;
  };
  Zp.prototype.a = function(a, c) {
    c = fp(this, c);
    var d = hm("http://www.opengis.net/gml", "featureMembers");
    Bm(d, "http://www.w3.org/2001/XMLSchema-instance", "xsi:schemaLocation", this.schemaLocation);
    var e = {
      srsName: this.srsName,
      curve: this.c,
      surface: this.l,
      multiSurface: this.j,
      multiCurve: this.i,
      featureNS: this.featureNS,
      featureType: this.featureType
    };
    c && mb(e, c);
    var e = [e],
        f = e[e.length - 1],
        g = f.featureType,
        h = f.featureNS,
        k = {};
    k[h] = {};
    k[h][g] = O(this.hi, this);
    f = mb({}, f);
    f.node = d;
    Nm(f, k, Im(g, h), a, e);
    return d;
  };
  function hq(a) {
    a = a ? a : {};
    this.defaultDataProjection = null;
    this.defaultDataProjection = qd("EPSG:4326");
    this.b = a.readExtensions;
  }
  y(hq, Ip);
  var iq = [null, "http://www.topografix.com/GPX/1/0", "http://www.topografix.com/GPX/1/1"];
  function jq(a, c, d) {
    a.push(parseFloat(c.getAttribute("lon")), parseFloat(c.getAttribute("lat")));
    "ele" in d ? (a.push(d.ele), delete d.ele) : a.push(0);
    "time" in d ? (a.push(d.time), delete d.time) : a.push(0);
    return a;
  }
  function kq(a, c) {
    var d = c[c.length - 1],
        e = a.getAttribute("href");
    null !== e && (d.link = e);
    Mm(lq, a, c);
  }
  function mq(a, c) {
    c[c.length - 1].extensionsNode_ = a;
  }
  function nq(a, c) {
    var d = c[0],
        e = R({flatCoordinates: []}, oq, a, c);
    if (e) {
      var f = e.flatCoordinates;
      delete e.flatCoordinates;
      var g = new T(null);
      g.ba("XYZM", f);
      gp(g, !1, d);
      d = new Xl(g);
      d.C(e);
      return d;
    }
  }
  function pq(a, c) {
    var d = c[0],
        e = R({
          flatCoordinates: [],
          ends: []
        }, qq, a, c);
    if (e) {
      var f = e.flatCoordinates;
      delete e.flatCoordinates;
      var g = e.ends;
      delete e.ends;
      var h = new U(null);
      h.ba("XYZM", f, g);
      gp(h, !1, d);
      d = new Xl(h);
      d.C(e);
      return d;
    }
  }
  function rq(a, c) {
    var d = c[0],
        e = R({}, sq, a, c);
    if (e) {
      var f = jq([], a, e),
          f = new E(f, "XYZM");
      gp(f, !1, d);
      d = new Xl(f);
      d.C(e);
      return d;
    }
  }
  var tq = {
    rte: nq,
    trk: pq,
    wpt: rq
  },
      uq = Q(iq, {
        rte: Em(nq),
        trk: Em(pq),
        wpt: Em(rq)
      }),
      lq = Q(iq, {
        text: N(W, "linkText"),
        type: N(W, "linkType")
      }),
      oq = Q(iq, {
        name: N(W),
        cmt: N(W),
        desc: N(W),
        src: N(W),
        link: kq,
        number: N(Sp),
        extensions: mq,
        type: N(W),
        rtept: function(a, c) {
          var d = R({}, vq, a, c);
          d && jq(c[c.length - 1].flatCoordinates, a, d);
        }
      }),
      vq = Q(iq, {
        ele: N(Qp),
        time: N(Pp)
      }),
      qq = Q(iq, {
        name: N(W),
        cmt: N(W),
        desc: N(W),
        src: N(W),
        link: kq,
        number: N(Sp),
        type: N(W),
        extensions: mq,
        trkseg: function(a, c) {
          var d = c[c.length - 1];
          Mm(wq, a, c);
          d.ends.push(d.flatCoordinates.length);
        }
      }),
      wq = Q(iq, {trkpt: function(a, c) {
          var d = R({}, xq, a, c);
          d && jq(c[c.length - 1].flatCoordinates, a, d);
        }}),
      xq = Q(iq, {
        ele: N(Qp),
        time: N(Pp)
      }),
      sq = Q(iq, {
        ele: N(Qp),
        time: N(Pp),
        magvar: N(Qp),
        geoidheight: N(Qp),
        name: N(W),
        cmt: N(W),
        desc: N(W),
        src: N(W),
        link: kq,
        sym: N(W),
        type: N(W),
        fix: N(W),
        sat: N(Sp),
        hdop: N(Qp),
        vdop: N(Qp),
        pdop: N(Qp),
        ageofdgpsdata: N(Qp),
        dgpsid: N(Sp),
        extensions: mq
      });
  function yq(a, c) {
    c || (c = []);
    for (var d = 0,
        e = c.length; d < e; ++d) {
      var f = c[d];
      if (a.b) {
        var g = f.get("extensionsNode_") || null;
        a.b(f, g);
      }
      f.set("extensionsNode_", void 0);
    }
  }
  hq.prototype.yh = function(a, c) {
    if (!Va(iq, a.namespaceURI))
      return null;
    var d = tq[a.localName];
    if (!d)
      return null;
    d = d(a, [ep(this, a, c)]);
    if (!d)
      return null;
    yq(this, [d]);
    return d;
  };
  hq.prototype.ic = function(a, c) {
    if (!Va(iq, a.namespaceURI))
      return [];
    if ("gpx" == a.localName) {
      var d = R([], uq, a, [ep(this, a, c)]);
      if (d)
        return yq(this, d), d;
    }
    return [];
  };
  function zq(a, c, d) {
    a.setAttribute("href", c);
    c = d[d.length - 1].properties;
    Nm({node: a}, Aq, Km, [c.linkText, c.linkType], d, Bq);
  }
  function Cq(a, c, d) {
    var e = d[d.length - 1],
        f = e.node.namespaceURI,
        g = e.properties;
    Bm(a, null, "lat", c[1]);
    Bm(a, null, "lon", c[0]);
    switch (e.geometryLayout) {
      case "XYZM":
        0 !== c[3] && (g.time = c[3]);
      case "XYZ":
        0 !== c[2] && (g.ele = c[2]);
        break;
      case "XYM":
        0 !== c[2] && (g.time = c[2]);
    }
    c = Dq[f];
    e = Lm(g, c);
    Nm({
      node: a,
      properties: g
    }, Eq, Km, e, d, c);
  }
  var Bq = ["text", "type"],
      Aq = Q(iq, {
        text: O(Vp),
        type: O(Vp)
      }),
      Fq = Q(iq, "name cmt desc src link number type rtept".split(" ")),
      Gq = Q(iq, {
        name: O(Vp),
        cmt: O(Vp),
        desc: O(Vp),
        src: O(Vp),
        link: O(zq),
        number: O(Xp),
        type: O(Vp),
        rtept: Hm(O(Cq))
      }),
      Hq = Q(iq, "name cmt desc src link number type trkseg".split(" ")),
      Kq = Q(iq, {
        name: O(Vp),
        cmt: O(Vp),
        desc: O(Vp),
        src: O(Vp),
        link: O(zq),
        number: O(Xp),
        type: O(Vp),
        trkseg: Hm(O(function(a, c, d) {
          Nm({
            node: a,
            geometryLayout: c.f,
            properties: {}
          }, Iq, Jq, c.Y(), d);
        }))
      }),
      Jq = Im("trkpt"),
      Iq = Q(iq, {trkpt: O(Cq)}),
      Dq = Q(iq, "ele time magvar geoidheight name cmt desc src link sym type fix sat hdop vdop pdop ageofdgpsdata dgpsid".split(" ")),
      Eq = Q(iq, {
        ele: O(Wp),
        time: O(function(a, c) {
          var d = new Date(1E3 * c),
              d = d.getUTCFullYear() + "-" + Ja(d.getUTCMonth() + 1) + "-" + Ja(d.getUTCDate()) + "T" + Ja(d.getUTCHours()) + ":" + Ja(d.getUTCMinutes()) + ":" + Ja(d.getUTCSeconds()) + "Z";
          a.appendChild(em.createTextNode(d));
        }),
        magvar: O(Wp),
        geoidheight: O(Wp),
        name: O(Vp),
        cmt: O(Vp),
        desc: O(Vp),
        src: O(Vp),
        link: O(zq),
        sym: O(Vp),
        type: O(Vp),
        fix: O(Vp),
        sat: O(Xp),
        hdop: O(Wp),
        vdop: O(Wp),
        pdop: O(Wp),
        ageofdgpsdata: O(Wp),
        dgpsid: O(Xp)
      }),
      Lq = {
        Point: "wpt",
        LineString: "rte",
        MultiLineString: "trk"
      };
  function Mq(a, c) {
    var d = a.X();
    if (d && (d = Lq[d.W()]))
      return hm(c[c.length - 1].node.namespaceURI, d);
  }
  var Nq = Q(iq, {
    rte: O(function(a, c, d) {
      var e = d[0],
          f = c.P();
      a = {
        node: a,
        properties: f
      };
      if (c = c.X())
        c = gp(c, !0, e), a.geometryLayout = c.f, f.rtept = c.Y();
      e = Fq[d[d.length - 1].node.namespaceURI];
      f = Lm(f, e);
      Nm(a, Gq, Km, f, d, e);
    }),
    trk: O(function(a, c, d) {
      var e = d[0],
          f = c.P();
      a = {
        node: a,
        properties: f
      };
      if (c = c.X())
        c = gp(c, !0, e), f.trkseg = c.rd();
      e = Hq[d[d.length - 1].node.namespaceURI];
      f = Lm(f, e);
      Nm(a, Kq, Km, f, d, e);
    }),
    wpt: O(function(a, c, d) {
      var e = d[0],
          f = d[d.length - 1];
      f.properties = c.P();
      if (c = c.X())
        c = gp(c, !0, e), f.geometryLayout = c.f, Cq(a, c.Y(), d);
    })
  });
  hq.prototype.a = function(a, c) {
    c = fp(this, c);
    var d = hm("http://www.topografix.com/GPX/1/1", "gpx");
    Nm({node: d}, Nq, Mq, a, [c]);
    return d;
  };
  function Oq() {
    this.defaultDataProjection = null;
  }
  y(Oq, dp);
  function Pq(a) {
    return "string" === typeof a ? a : "";
  }
  l = Oq.prototype;
  l.W = function() {
    return "text";
  };
  l.Ub = function(a, c) {
    return this.xd(Pq(a), fp(this, c));
  };
  l.Ea = function(a, c) {
    return this.Bf(Pq(a), fp(this, c));
  };
  l.Uc = function(a, c) {
    return this.zd(Pq(a), fp(this, c));
  };
  l.Qa = function(a) {
    Pq(a);
    return this.defaultDataProjection;
  };
  l.Fd = function(a, c) {
    return this.Ge(a, fp(this, c));
  };
  l.Wb = function(a, c) {
    return this.ii(a, fp(this, c));
  };
  l.Zc = function(a, c) {
    return this.Gd(a, fp(this, c));
  };
  function Qq(a) {
    a = a ? a : {};
    this.defaultDataProjection = null;
    this.defaultDataProjection = qd("EPSG:4326");
    this.b = a.altitudeMode ? a.altitudeMode : "none";
  }
  y(Qq, Oq);
  var Rq = /^B(\d{2})(\d{2})(\d{2})(\d{2})(\d{5})([NS])(\d{3})(\d{5})([EW])([AV])(\d{5})(\d{5})/,
      Sq = /^H.([A-Z]{3}).*?:(.*)/,
      Tq = /^HFDTE(\d{2})(\d{2})(\d{2})/,
      Uq = /\r\n|\r|\n/;
  Qq.prototype.xd = function(a, c) {
    var d = this.b,
        e = a.split(Uq),
        f = {},
        g = [],
        h = 2E3,
        k = 0,
        m = 1,
        n,
        p;
    n = 0;
    for (p = e.length; n < p; ++n) {
      var q = e[n],
          r;
      if ("B" == q.charAt(0)) {
        if (r = Rq.exec(q)) {
          var q = parseInt(r[1], 10),
              t = parseInt(r[2], 10),
              v = parseInt(r[3], 10),
              w = parseInt(r[4], 10) + parseInt(r[5], 10) / 6E4;
          "S" == r[6] && (w = -w);
          var z = parseInt(r[7], 10) + parseInt(r[8], 10) / 6E4;
          "W" == r[9] && (z = -z);
          g.push(z, w);
          "none" != d && g.push("gps" == d ? parseInt(r[11], 10) : "barometric" == d ? parseInt(r[12], 10) : 0);
          g.push(Date.UTC(h, k, m, q, t, v) / 1E3);
        }
      } else if ("H" == q.charAt(0))
        if (r = Tq.exec(q))
          m = parseInt(r[1], 10), k = parseInt(r[2], 10) - 1, h = 2E3 + parseInt(r[3], 10);
        else if (r = Sq.exec(q))
          f[r[1]] = r[2].trim(), Tq.exec(q);
    }
    if (0 === g.length)
      return null;
    e = new T(null);
    e.ba("none" == d ? "XYM" : "XYZM", g);
    d = new Xl(gp(e, !1, c));
    d.C(f);
    return d;
  };
  Qq.prototype.Bf = function(a, c) {
    var d = this.xd(a, c);
    return d ? [d] : [];
  };
  var Vq = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;
  function Wq(a, c) {
    if (a)
      for (var d = a.split("&"),
          e = 0; e < d.length; e++) {
        var f = d[e].indexOf("="),
            g = null,
            h = null;
        0 <= f ? (g = d[e].substring(0, f), h = d[e].substring(f + 1)) : g = d[e];
        c(g, h ? decodeURIComponent(h.replace(/\+/g, " ")) : "");
      }
  }
  function Xq(a) {
    if (a[1]) {
      var c = a[0],
          d = c.indexOf("#");
      0 <= d && (a.push(c.substr(d)), a[0] = c = c.substr(0, d));
      d = c.indexOf("?");
      0 > d ? a[1] = "?" : d == c.length - 1 && (a[1] = void 0);
    }
    return a.join("");
  }
  function Yq(a, c, d) {
    if (fa(c))
      for (var e = 0; e < c.length; e++)
        Yq(a, String(c[e]), d);
    else
      null != c && d.push("&", a, "" === c ? "" : "=", encodeURIComponent(String(c)));
  }
  function Zq(a, c) {
    for (var d in c)
      Yq(d, c[d], a);
    return a;
  }
  ;
  function $q(a, c) {
    this.a = this.j = this.g = "";
    this.l = null;
    this.f = this.b = "";
    this.c = !1;
    var d;
    a instanceof $q ? (this.c = ba(c) ? c : a.c, ar(this, a.g), this.j = a.j, this.a = a.a, br(this, a.l), this.b = a.b, cr(this, a.i.clone()), this.f = a.f) : a && (d = String(a).match(Vq)) ? (this.c = !!c, ar(this, d[1] || "", !0), this.j = dr(d[2] || ""), this.a = dr(d[3] || "", !0), br(this, d[4]), this.b = dr(d[5] || "", !0), cr(this, d[6] || "", !0), this.f = dr(d[7] || "")) : (this.c = !!c, this.i = new er(null, 0, this.c));
  }
  $q.prototype.toString = function() {
    var a = [],
        c = this.g;
    c && a.push(fr(c, gr, !0), ":");
    var d = this.a;
    if (d || "file" == c)
      a.push("//"), (c = this.j) && a.push(fr(c, gr, !0), "@"), a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), d = this.l, null != d && a.push(":", String(d));
    if (d = this.b)
      this.a && "/" != d.charAt(0) && a.push("/"), a.push(fr(d, "/" == d.charAt(0) ? hr : ir, !0));
    (d = this.i.toString()) && a.push("?", d);
    (d = this.f) && a.push("#", fr(d, jr));
    return a.join("");
  };
  $q.prototype.clone = function() {
    return new $q(this);
  };
  function ar(a, c, d) {
    a.g = d ? dr(c, !0) : c;
    a.g && (a.g = a.g.replace(/:$/, ""));
  }
  function br(a, c) {
    if (c) {
      c = Number(c);
      if (isNaN(c) || 0 > c)
        throw Error("Bad port number " + c);
      a.l = c;
    } else
      a.l = null;
  }
  function cr(a, c, d) {
    c instanceof er ? (a.i = c, kr(a.i, a.c)) : (d || (c = fr(c, lr)), a.i = new er(c, 0, a.c));
  }
  function mr(a) {
    return a instanceof $q ? a.clone() : new $q(a, void 0);
  }
  function nr(a, c) {
    a instanceof $q || (a = mr(a));
    c instanceof $q || (c = mr(c));
    var d = a,
        e = c,
        f = d.clone(),
        g = !!e.g;
    g ? ar(f, e.g) : g = !!e.j;
    g ? f.j = e.j : g = !!e.a;
    g ? f.a = e.a : g = null != e.l;
    var h = e.b;
    if (g)
      br(f, e.l);
    else if (g = !!e.b)
      if ("/" != h.charAt(0) && (d.a && !d.b ? h = "/" + h : (d = f.b.lastIndexOf("/"), -1 != d && (h = f.b.substr(0, d + 1) + h))), d = h, ".." == d || "." == d)
        h = "";
      else if (-1 != d.indexOf("./") || -1 != d.indexOf("/.")) {
        for (var h = 0 == d.lastIndexOf("/", 0),
            d = d.split("/"),
            k = [],
            m = 0; m < d.length; ) {
          var n = d[m++];
          "." == n ? h && m == d.length && k.push("") : ".." == n ? ((1 < k.length || 1 == k.length && "" != k[0]) && k.pop(), h && m == d.length && k.push("")) : (k.push(n), h = !0);
        }
        h = k.join("/");
      } else
        h = d;
    g ? f.b = h : g = "" !== e.i.toString();
    g ? cr(f, dr(e.i.toString())) : g = !!e.f;
    g && (f.f = e.f);
    return f;
  }
  function dr(a, c) {
    return a ? c ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : "";
  }
  function fr(a, c, d) {
    return ha(a) ? (a = encodeURI(a).replace(c, or), d && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null;
  }
  function or(a) {
    a = a.charCodeAt(0);
    return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
  }
  var gr = /[#\/\?@]/g,
      ir = /[\#\?:]/g,
      hr = /[\#\?]/g,
      lr = /[\#\?@]/g,
      jr = /#/g;
  function er(a, c, d) {
    this.a = this.b = null;
    this.g = a || null;
    this.f = !!d;
  }
  function pr(a) {
    a.b || (a.b = new fh, a.a = 0, a.g && Wq(a.g, function(c, d) {
      var e = decodeURIComponent(c.replace(/\+/g, " "));
      pr(a);
      a.g = null;
      var e = qr(a, e),
          f = a.b.get(e);
      f || a.b.set(e, f = []);
      f.push(d);
      a.a++;
    }));
  }
  l = er.prototype;
  l.rc = function() {
    pr(this);
    return this.a;
  };
  l.remove = function(a) {
    pr(this);
    a = qr(this, a);
    return hh(this.b.a, a) ? (this.g = null, this.a -= this.b.get(a).length, this.b.remove(a)) : !1;
  };
  l.clear = function() {
    this.b = this.g = null;
    this.a = 0;
  };
  l.Oa = function() {
    pr(this);
    return 0 == this.a;
  };
  function rr(a, c) {
    pr(a);
    c = qr(a, c);
    return hh(a.b.a, c);
  }
  l.O = function() {
    pr(this);
    for (var a = this.b.vc(),
        c = this.b.O(),
        d = [],
        e = 0; e < c.length; e++)
      for (var f = a[e],
          g = 0; g < f.length; g++)
        d.push(c[e]);
    return d;
  };
  l.vc = function(a) {
    pr(this);
    var c = [];
    if (ha(a))
      rr(this, a) && (c = Xb(c, this.b.get(qr(this, a))));
    else {
      a = this.b.vc();
      for (var d = 0; d < a.length; d++)
        c = Xb(c, a[d]);
    }
    return c;
  };
  l.set = function(a, c) {
    pr(this);
    this.g = null;
    a = qr(this, a);
    rr(this, a) && (this.a -= this.b.get(a).length);
    this.b.set(a, [c]);
    this.a++;
    return this;
  };
  l.get = function(a, c) {
    var d = a ? this.vc(a) : [];
    return 0 < d.length ? String(d[0]) : c;
  };
  l.toString = function() {
    if (this.g)
      return this.g;
    if (!this.b)
      return "";
    for (var a = [],
        c = this.b.O(),
        d = 0; d < c.length; d++)
      for (var e = c[d],
          f = encodeURIComponent(String(e)),
          e = this.vc(e),
          g = 0; g < e.length; g++) {
        var h = f;
        "" !== e[g] && (h += "=" + encodeURIComponent(String(e[g])));
        a.push(h);
      }
    return this.g = a.join("&");
  };
  l.clone = function() {
    var a = new er;
    a.g = this.g;
    this.b && (a.b = this.b.clone(), a.a = this.a);
    return a;
  };
  function qr(a, c) {
    var d = String(c);
    a.f && (d = d.toLowerCase());
    return d;
  }
  function kr(a, c) {
    c && !a.f && (pr(a), a.g = null, a.b.forEach(function(a, c) {
      var f = c.toLowerCase();
      c != f && (this.remove(c), this.remove(f), 0 < a.length && (this.g = null, this.b.set(qr(this, f), Yb(a)), this.a += a.length));
    }, a));
    a.f = c;
  }
  ;
  function sr(a) {
    a = a || {};
    this.g = a.font;
    this.i = a.rotation;
    this.a = a.scale;
    this.s = a.text;
    this.l = a.textAlign;
    this.o = a.textBaseline;
    this.b = void 0 !== a.fill ? a.fill : new Ak({color: "#333"});
    this.j = void 0 !== a.stroke ? a.stroke : null;
    this.f = void 0 !== a.offsetX ? a.offsetX : 0;
    this.c = void 0 !== a.offsetY ? a.offsetY : 0;
  }
  l = sr.prototype;
  l.Cj = function() {
    return this.g;
  };
  l.Qj = function() {
    return this.f;
  };
  l.Rj = function() {
    return this.c;
  };
  l.jn = function() {
    return this.b;
  };
  l.kn = function() {
    return this.i;
  };
  l.ln = function() {
    return this.a;
  };
  l.mn = function() {
    return this.j;
  };
  l.Fa = function() {
    return this.s;
  };
  l.ck = function() {
    return this.l;
  };
  l.dk = function() {
    return this.o;
  };
  l.so = function(a) {
    this.g = a;
  };
  l.Vh = function(a) {
    this.f = a;
  };
  l.Wh = function(a) {
    this.c = a;
  };
  l.ro = function(a) {
    this.b = a;
  };
  l.nn = function(a) {
    this.i = a;
  };
  l.pn = function(a) {
    this.a = a;
  };
  l.yo = function(a) {
    this.j = a;
  };
  l.Yh = function(a) {
    this.s = a;
  };
  l.Zh = function(a) {
    this.l = a;
  };
  l.zo = function(a) {
    this.o = a;
  };
  function tr(a) {
    a = a ? a : {};
    this.defaultDataProjection = null;
    this.defaultDataProjection = qd("EPSG:4326");
    this.g = a.defaultStyle ? a.defaultStyle : ur;
    this.f = void 0 !== a.extractStyles ? a.extractStyles : !0;
    this.i = void 0 !== a.writeStyles ? a.writeStyles : !0;
    this.b = {};
    this.c = void 0 !== a.showPointNames ? a.showPointNames : !0;
  }
  y(tr, Ip);
  var vr = ["http://www.google.com/kml/ext/2.2"],
      wr = [null, "http://earth.google.com/kml/2.0", "http://earth.google.com/kml/2.1", "http://earth.google.com/kml/2.2", "http://www.opengis.net/kml/2.2"],
      xr = [255, 255, 255, 1],
      yr = new Ak({color: xr}),
      zr = [20, 2],
      Ar = [64, 64],
      Br = new Wi({
        anchor: zr,
        anchorOrigin: "bottom-left",
        anchorXUnits: "pixels",
        anchorYUnits: "pixels",
        crossOrigin: "anonymous",
        rotation: 0,
        scale: .5,
        size: Ar,
        src: "https://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png"
      }),
      Cr = new Gk({
        color: xr,
        width: 1
      }),
      Dr = new sr({
        font: "bold 16px Helvetica",
        fill: yr,
        stroke: new Gk({
          color: [51, 51, 51, 1],
          width: 2
        }),
        scale: .8
      }),
      ur = [new Kk({
        fill: yr,
        image: Br,
        text: Dr,
        stroke: Cr,
        zIndex: 0
      })],
      Er = {
        fraction: "fraction",
        pixels: "pixels"
      };
  function Fr(a, c) {
    var d = null,
        e = [0, 0],
        f = "start";
    a.a && (d = a.a.qd()) && 2 == d.length && (e[0] = a.a.j * d[0] / 2, e[1] = -a.a.j * d[1] / 2, f = "left");
    if (pb(a.Fa()))
      d = new sr({
        text: c,
        offsetX: e[0],
        offsetY: e[1],
        textAlign: f
      });
    else {
      var d = a.Fa(),
          g = {},
          h;
      for (h in d)
        g[h] = d[h];
      d = g;
      d.Yh(c);
      d.Zh(f);
      d.Vh(e[0]);
      d.Wh(e[1]);
    }
    return new Kk({text: d});
  }
  function Gr(a, c, d, e, f) {
    return function() {
      var g = f,
          h = "";
      g && this.X() && (g = "Point" === this.X().W());
      g && (h = this.get("name"), g = g && h);
      if (a)
        return g ? (g = Fr(a[0], h), a.concat(g)) : a;
      if (c) {
        var k = Hr(c, d, e);
        return g ? (g = Fr(k[0], h), k.concat(g)) : k;
      }
      return g ? (g = Fr(d[0], h), d.concat(g)) : d;
    };
  }
  function Hr(a, c, d) {
    return fa(a) ? a : "string" === typeof a ? (!(a in d) && "#" + a in d && (a = "#" + a), Hr(d[a], c, d)) : c;
  }
  function Ir(a) {
    a = im(a, !1);
    if (a = /^\s*#?\s*([0-9A-Fa-f]{8})\s*$/.exec(a))
      return a = a[1], [parseInt(a.substr(6, 2), 16), parseInt(a.substr(4, 2), 16), parseInt(a.substr(2, 2), 16), parseInt(a.substr(0, 2), 16) / 255];
  }
  function Jr(a) {
    a = im(a, !1);
    for (var c = [],
        d = /^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*,\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)(?:\s*,\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?))?\s*/i,
        e; e = d.exec(a); )
      c.push(parseFloat(e[1]), parseFloat(e[2]), e[3] ? parseFloat(e[3]) : 0), a = a.substr(e[0].length);
    return "" !== a ? void 0 : c;
  }
  function Kr(a) {
    var c = im(a, !1);
    return a.baseURI ? nr(a.baseURI, c.trim()).toString() : c.trim();
  }
  function Lr(a) {
    a = Qp(a);
    if (void 0 !== a)
      return Math.sqrt(a);
  }
  function Mr(a, c) {
    return R(null, Nr, a, c);
  }
  function Or(a, c) {
    var d = R({
      v: [],
      fi: []
    }, Pr, a, c);
    if (d) {
      var e = d.v,
          d = d.fi,
          f,
          g;
      f = 0;
      for (g = Math.min(e.length, d.length); f < g; ++f)
        e[4 * f + 3] = d[f];
      d = new T(null);
      d.ba("XYZM", e);
      return d;
    }
  }
  function Qr(a, c) {
    var d = R({}, Rr, a, c),
        e = R(null, Sr, a, c);
    if (e) {
      var f = new T(null);
      f.ba("XYZ", e);
      f.C(d);
      return f;
    }
  }
  function Tr(a, c) {
    var d = R({}, Rr, a, c),
        e = R(null, Sr, a, c);
    if (e) {
      var f = new F(null);
      f.ba("XYZ", e, [e.length]);
      f.C(d);
      return f;
    }
  }
  function Ur(a, c) {
    var d = R([], Vr, a, c);
    if (!d)
      return null;
    if (0 === d.length)
      return new zp(d);
    var e = !0,
        f = d[0].W(),
        g,
        h,
        k;
    h = 1;
    for (k = d.length; h < k; ++h)
      if (g = d[h], g.W() != f) {
        e = !1;
        break;
      }
    if (e) {
      if ("Point" == f) {
        g = d[0];
        e = g.f;
        f = g.ga();
        h = 1;
        for (k = d.length; h < k; ++h)
          g = d[h], Ya(f, g.ga());
        g = new pp(null);
        g.ba(e, f);
        Wr(g, d);
        return g;
      }
      return "LineString" == f ? (g = new U(null), op(g, d), Wr(g, d), g) : "Polygon" == f ? (g = new V(null), rp(g, d), Wr(g, d), g) : "GeometryCollection" == f ? new zp(d) : null;
    }
    return new zp(d);
  }
  function Xr(a, c) {
    var d = R({}, Rr, a, c),
        e = R(null, Sr, a, c);
    if (e) {
      var f = new E(null);
      f.ba("XYZ", e);
      f.C(d);
      return f;
    }
  }
  function Yr(a, c) {
    var d = R({}, Rr, a, c),
        e = R([null], Zr, a, c);
    if (e && e[0]) {
      var f = new F(null),
          g = e[0],
          h = [g.length],
          k,
          m;
      k = 1;
      for (m = e.length; k < m; ++k)
        Ya(g, e[k]), h.push(g.length);
      f.ba("XYZ", g, h);
      f.C(d);
      return f;
    }
  }
  function $r(a, c) {
    var d = R({}, as, a, c);
    if (!d)
      return null;
    var e = "fillStyle" in d ? d.fillStyle : yr,
        f = d.fill;
    void 0 === f || f || (e = null);
    var f = "imageStyle" in d ? d.imageStyle : Br,
        g = "textStyle" in d ? d.textStyle : Dr,
        h = "strokeStyle" in d ? d.strokeStyle : Cr,
        d = d.outline;
    void 0 === d || d || (h = null);
    return [new Kk({
      fill: e,
      image: f,
      stroke: h,
      text: g,
      zIndex: void 0
    })];
  }
  function Wr(a, c) {
    var d = c.length,
        e = Array(c.length),
        f = Array(c.length),
        g,
        h,
        k,
        m;
    k = m = !1;
    for (h = 0; h < d; ++h)
      g = c[h], e[h] = g.get("extrude"), f[h] = g.get("altitudeMode"), k = k || void 0 !== e[h], m = m || f[h];
    k && a.set("extrude", e);
    m && a.set("altitudeMode", f);
  }
  function bs(a, c) {
    Mm(cs, a, c);
  }
  var ds = Q(wr, {value: Fm(W)}),
      cs = Q(wr, {
        Data: function(a, c) {
          var d = a.getAttribute("name");
          if (null !== d) {
            var e = R(void 0, ds, a, c);
            e && (c[c.length - 1][d] = e);
          }
        },
        SchemaData: function(a, c) {
          Mm(es, a, c);
        }
      }),
      Rr = Q(wr, {
        extrude: N(Np),
        altitudeMode: N(W)
      }),
      Nr = Q(wr, {coordinates: Fm(Jr)}),
      Zr = Q(wr, {
        innerBoundaryIs: function(a, c) {
          var d = R(void 0, fs, a, c);
          d && c[c.length - 1].push(d);
        },
        outerBoundaryIs: function(a, c) {
          var d = R(void 0, gs, a, c);
          d && (c[c.length - 1][0] = d);
        }
      }),
      Pr = Q(wr, {when: function(a, c) {
          var d = c[c.length - 1].fi,
              e = im(a, !1);
          if (e = /^\s*(\d{4})($|-(\d{2})($|-(\d{2})($|T(\d{2}):(\d{2}):(\d{2})(Z|(?:([+\-])(\d{2})(?::(\d{2}))?)))))\s*$/.exec(e)) {
            var f = Date.UTC(parseInt(e[1], 10), e[3] ? parseInt(e[3], 10) - 1 : 0, e[5] ? parseInt(e[5], 10) : 1, e[7] ? parseInt(e[7], 10) : 0, e[8] ? parseInt(e[8], 10) : 0, e[9] ? parseInt(e[9], 10) : 0);
            if (e[10] && "Z" != e[10]) {
              var g = "-" == e[11] ? -1 : 1,
                  f = f + 60 * g * parseInt(e[12], 10);
              e[13] && (f += 3600 * g * parseInt(e[13], 10));
            }
            d.push(f);
          } else
            d.push(0);
        }}, Q(vr, {coord: function(a, c) {
          var d = c[c.length - 1].v,
              e = im(a, !1);
          (e = /^\s*([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s+([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s+([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s*$/i.exec(e)) ? d.push(parseFloat(e[1]), parseFloat(e[2]), parseFloat(e[3]), 0) : d.push(0, 0, 0, 0);
        }})),
      Sr = Q(wr, {coordinates: Fm(Jr)}),
      hs = Q(wr, {href: N(Kr)}, Q(vr, {
        x: N(Qp),
        y: N(Qp),
        w: N(Qp),
        h: N(Qp)
      })),
      is = Q(wr, {
        Icon: N(function(a, c) {
          var d = R({}, hs, a, c);
          return d ? d : null;
        }),
        heading: N(Qp),
        hotSpot: N(function(a) {
          var c = a.getAttribute("xunits"),
              d = a.getAttribute("yunits");
          return {
            x: parseFloat(a.getAttribute("x")),
            Qf: Er[c],
            y: parseFloat(a.getAttribute("y")),
            Rf: Er[d]
          };
        }),
        scale: N(Lr)
      }),
      fs = Q(wr, {LinearRing: Fm(Mr)}),
      js = Q(wr, {
        color: N(Ir),
        scale: N(Lr)
      }),
      ks = Q(wr, {
        color: N(Ir),
        width: N(Qp)
      }),
      Vr = Q(wr, {
        LineString: Em(Qr),
        LinearRing: Em(Tr),
        MultiGeometry: Em(Ur),
        Point: Em(Xr),
        Polygon: Em(Yr)
      }),
      ls = Q(vr, {Track: Em(Or)}),
      ns = Q(wr, {
        ExtendedData: bs,
        Link: function(a, c) {
          Mm(ms, a, c);
        },
        address: N(W),
        description: N(W),
        name: N(W),
        open: N(Np),
        phoneNumber: N(W),
        visibility: N(Np)
      }),
      ms = Q(wr, {href: N(Kr)}),
      gs = Q(wr, {LinearRing: Fm(Mr)}),
      os = Q(wr, {
        Style: N($r),
        key: N(W),
        styleUrl: N(function(a) {
          var c = im(a, !1).trim();
          return a.baseURI ? nr(a.baseURI, c).toString() : c;
        })
      }),
      qs = Q(wr, {
        ExtendedData: bs,
        MultiGeometry: N(Ur, "geometry"),
        LineString: N(Qr, "geometry"),
        LinearRing: N(Tr, "geometry"),
        Point: N(Xr, "geometry"),
        Polygon: N(Yr, "geometry"),
        Style: N($r),
        StyleMap: function(a, c) {
          var d = R(void 0, ps, a, c);
          if (d) {
            var e = c[c.length - 1];
            fa(d) ? e.Style = d : "string" === typeof d && (e.styleUrl = d);
          }
        },
        address: N(W),
        description: N(W),
        name: N(W),
        open: N(Np),
        phoneNumber: N(W),
        styleUrl: N(Kr),
        visibility: N(Np)
      }, Q(vr, {
        MultiTrack: N(function(a, c) {
          var d = R([], ls, a, c);
          if (d) {
            var e = new U(null);
            op(e, d);
            return e;
          }
        }, "geometry"),
        Track: N(Or, "geometry")
      })),
      rs = Q(wr, {
        color: N(Ir),
        fill: N(Np),
        outline: N(Np)
      }),
      es = Q(wr, {SimpleData: function(a, c) {
          var d = a.getAttribute("name");
          if (null !== d) {
            var e = W(a);
            c[c.length - 1][d] = e;
          }
        }}),
      as = Q(wr, {
        IconStyle: function(a, c) {
          var d = R({}, is, a, c);
          if (d) {
            var e = c[c.length - 1],
                f = "Icon" in d ? d.Icon : {},
                g;
            g = (g = f.href) ? g : "https://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png";
            var h,
                k,
                m,
                n = d.hotSpot;
            n ? (h = [n.x, n.y], k = n.Qf, m = n.Rf) : "https://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png" === g ? (h = zr, m = k = "pixels") : /^http:\/\/maps\.(?:google|gstatic)\.com\//.test(g) && (h = [.5, 0], m = k = "fraction");
            var p,
                n = f.x,
                q = f.y;
            void 0 !== n && void 0 !== q && (p = [n, q]);
            var r,
                n = f.w,
                f = f.h;
            void 0 !== n && void 0 !== f && (r = [n, f]);
            var t,
                f = d.heading;
            void 0 !== f && (t = Ra(f));
            d = d.scale;
            "https://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png" == g && (r = Ar, void 0 === d && (d = .5));
            h = new Wi({
              anchor: h,
              anchorOrigin: "bottom-left",
              anchorXUnits: k,
              anchorYUnits: m,
              crossOrigin: "anonymous",
              offset: p,
              offsetOrigin: "bottom-left",
              rotation: t,
              scale: d,
              size: r,
              src: g
            });
            e.imageStyle = h;
          }
        },
        LabelStyle: function(a, c) {
          var d = R({}, js, a, c);
          d && (c[c.length - 1].textStyle = new sr({
            fill: new Ak({color: "color" in d ? d.color : xr}),
            scale: d.scale
          }));
        },
        LineStyle: function(a, c) {
          var d = R({}, ks, a, c);
          d && (c[c.length - 1].strokeStyle = new Gk({
            color: "color" in d ? d.color : xr,
            width: "width" in d ? d.width : 1
          }));
        },
        PolyStyle: function(a, c) {
          var d = R({}, rs, a, c);
          if (d) {
            var e = c[c.length - 1];
            e.fillStyle = new Ak({color: "color" in d ? d.color : xr});
            var f = d.fill;
            void 0 !== f && (e.fill = f);
            d = d.outline;
            void 0 !== d && (e.outline = d);
          }
        }
      }),
      ps = Q(wr, {Pair: function(a, c) {
          var d = R({}, os, a, c);
          if (d) {
            var e = d.key;
            e && "normal" == e && ((e = d.styleUrl) && (c[c.length - 1] = e), (d = d.Style) && (c[c.length - 1] = d));
          }
        }});
  l = tr.prototype;
  l.xf = function(a, c) {
    mm(a);
    var d = Q(wr, {
      Document: Dm(this.xf, this),
      Folder: Dm(this.xf, this),
      Placemark: Em(this.Ff, this),
      Style: this.ao.bind(this),
      StyleMap: this.$n.bind(this)
    });
    if (d = R([], d, a, c, this))
      return d;
  };
  l.Ff = function(a, c) {
    var d = R({geometry: null}, qs, a, c);
    if (d) {
      var e = new Xl,
          f = a.getAttribute("id");
      null !== f && e.jc(f);
      var f = c[0],
          g = d.geometry;
      g && gp(g, !1, f);
      e.Pa(g);
      delete d.geometry;
      this.f && e.lf(Gr(d.Style, d.styleUrl, this.g, this.b, this.c));
      delete d.Style;
      e.C(d);
      return e;
    }
  };
  l.ao = function(a, c) {
    var d = a.getAttribute("id");
    if (null !== d) {
      var e = $r(a, c);
      e && (d = a.baseURI ? nr(a.baseURI, "#" + d).toString() : "#" + d, this.b[d] = e);
    }
  };
  l.$n = function(a, c) {
    var d = a.getAttribute("id");
    if (null !== d) {
      var e = R(void 0, ps, a, c);
      e && (d = a.baseURI ? nr(a.baseURI, "#" + d).toString() : "#" + d, this.b[d] = e);
    }
  };
  l.yh = function(a, c) {
    if (!Va(wr, a.namespaceURI))
      return null;
    var d = this.Ff(a, [ep(this, a, c)]);
    return d ? d : null;
  };
  l.ic = function(a, c) {
    if (!Va(wr, a.namespaceURI))
      return [];
    var d;
    d = mm(a);
    if ("Document" == d || "Folder" == d)
      return (d = this.xf(a, [ep(this, a, c)])) ? d : [];
    if ("Placemark" == d)
      return (d = this.Ff(a, [ep(this, a, c)])) ? [d] : [];
    if ("kml" == d) {
      d = [];
      var e;
      for (e = a.firstElementChild; e; e = e.nextElementSibling) {
        var f = this.ic(e, c);
        f && Ya(d, f);
      }
      return d;
    }
    return [];
  };
  l.Vn = function(a) {
    if (pm(a))
      return ss(this, a);
    if (sm(a))
      return ts(this, a);
    if ("string" === typeof a)
      return a = Cm(a), ss(this, a);
  };
  function ss(a, c) {
    var d;
    for (d = c.firstChild; d; d = d.nextSibling)
      if (1 == d.nodeType) {
        var e = ts(a, d);
        if (e)
          return e;
      }
  }
  function ts(a, c) {
    var d;
    for (d = c.firstElementChild; d; d = d.nextElementSibling)
      if (Va(wr, d.namespaceURI) && "name" == d.localName)
        return W(d);
    for (d = c.firstElementChild; d; d = d.nextElementSibling) {
      var e = mm(d);
      if (Va(wr, d.namespaceURI) && ("Document" == e || "Folder" == e || "Placemark" == e || "kml" == e) && (e = ts(a, d)))
        return e;
    }
  }
  l.Wn = function(a) {
    var c = [];
    pm(a) ? Ya(c, us(this, a)) : sm(a) ? Ya(c, vs(this, a)) : "string" === typeof a && (a = Cm(a), Ya(c, us(this, a)));
    return c;
  };
  function us(a, c) {
    var d,
        e = [];
    for (d = c.firstChild; d; d = d.nextSibling)
      1 == d.nodeType && Ya(e, vs(a, d));
    return e;
  }
  function vs(a, c) {
    var d,
        e = [];
    for (d = c.firstElementChild; d; d = d.nextElementSibling)
      if (Va(wr, d.namespaceURI) && "NetworkLink" == d.localName) {
        var f = R({}, ns, d, []);
        e.push(f);
      }
    for (d = c.firstElementChild; d; d = d.nextElementSibling)
      f = mm(d), !Va(wr, d.namespaceURI) || "Document" != f && "Folder" != f && "kml" != f || Ya(e, vs(a, d));
    return e;
  }
  function ws(a, c) {
    var d = Xe(c),
        d = [255 * (4 == d.length ? d[3] : 1), d[2], d[1], d[0]],
        e;
    for (e = 0; 4 > e; ++e) {
      var f = parseInt(d[e], 10).toString(16);
      d[e] = 1 == f.length ? "0" + f : f;
    }
    Vp(a, d.join(""));
  }
  function xs(a, c, d) {
    Nm({node: a}, ys, zs, [c], d);
  }
  function As(a, c, d) {
    var e = {node: a};
    c.Sa() && a.setAttribute("id", c.Sa());
    a = c.P();
    var f = c.bc();
    f && (f = f.call(c, 0)) && (f = fa(f) ? f[0] : f, this.i && (a.Style = f), (f = f.Fa()) && (a.name = f.Fa()));
    f = Bs[d[d.length - 1].node.namespaceURI];
    a = Lm(a, f);
    Nm(e, Cs, Km, a, d, f);
    a = d[0];
    (c = c.X()) && (c = gp(c, !0, a));
    Nm(e, Cs, Ds, [c], d);
  }
  function Es(a, c, d) {
    var e = c.ga();
    a = {node: a};
    a.layout = c.f;
    a.stride = c.qa();
    Nm(a, Fs, Gs, [e], d);
  }
  function Hs(a, c, d) {
    c = c.Vd();
    var e = c.shift();
    a = {node: a};
    Nm(a, Is, Js, c, d);
    Nm(a, Is, Ks, [e], d);
  }
  function Ls(a, c) {
    Wp(a, c * c);
  }
  var Ms = Q(wr, ["Document", "Placemark"]),
      Ps = Q(wr, {
        Document: O(function(a, c, d) {
          Nm({node: a}, Ns, Os, c, d, void 0, this);
        }),
        Placemark: O(As)
      }),
      Ns = Q(wr, {Placemark: O(As)}),
      Qs = {
        Point: "Point",
        LineString: "LineString",
        LinearRing: "LinearRing",
        Polygon: "Polygon",
        MultiPoint: "MultiGeometry",
        MultiLineString: "MultiGeometry",
        MultiPolygon: "MultiGeometry"
      },
      Rs = Q(wr, ["href"], Q(vr, ["x", "y", "w", "h"])),
      Ss = Q(wr, {href: O(Vp)}, Q(vr, {
        x: O(Wp),
        y: O(Wp),
        w: O(Wp),
        h: O(Wp)
      })),
      Ts = Q(wr, ["scale", "heading", "Icon", "hotSpot"]),
      Vs = Q(wr, {
        Icon: O(function(a, c, d) {
          a = {node: a};
          var e = Rs[d[d.length - 1].node.namespaceURI],
              f = Lm(c, e);
          Nm(a, Ss, Km, f, d, e);
          e = Rs[vr[0]];
          f = Lm(c, e);
          Nm(a, Ss, Us, f, d, e);
        }),
        heading: O(Wp),
        hotSpot: O(function(a, c) {
          a.setAttribute("x", c.x);
          a.setAttribute("y", c.y);
          a.setAttribute("xunits", c.Qf);
          a.setAttribute("yunits", c.Rf);
        }),
        scale: O(Ls)
      }),
      Ws = Q(wr, ["color", "scale"]),
      Xs = Q(wr, {
        color: O(ws),
        scale: O(Ls)
      }),
      Ys = Q(wr, ["color", "width"]),
      Zs = Q(wr, {
        color: O(ws),
        width: O(Wp)
      }),
      ys = Q(wr, {LinearRing: O(Es)}),
      $s = Q(wr, {
        LineString: O(Es),
        Point: O(Es),
        Polygon: O(Hs)
      }),
      Bs = Q(wr, "name open visibility address phoneNumber description styleUrl Style".split(" ")),
      Cs = Q(wr, {
        MultiGeometry: O(function(a, c, d) {
          a = {node: a};
          var e = c.W(),
              f,
              g;
          "MultiPoint" == e ? (f = c.ke(), g = at) : "MultiLineString" == e ? (f = c.rd(), g = bt) : "MultiPolygon" == e && (f = c.Wd(), g = ct);
          Nm(a, $s, g, f, d);
        }),
        LineString: O(Es),
        LinearRing: O(Es),
        Point: O(Es),
        Polygon: O(Hs),
        Style: O(function(a, c, d) {
          a = {node: a};
          var e = {},
              f = c.c,
              g = c.g,
              h = c.a;
          c = c.Fa();
          h instanceof Wi && (e.IconStyle = h);
          c && (e.LabelStyle = c);
          g && (e.LineStyle = g);
          f && (e.PolyStyle = f);
          c = dt[d[d.length - 1].node.namespaceURI];
          e = Lm(e, c);
          Nm(a, et, Km, e, d, c);
        }),
        address: O(Vp),
        description: O(Vp),
        name: O(Vp),
        open: O(Up),
        phoneNumber: O(Vp),
        styleUrl: O(Vp),
        visibility: O(Up)
      }),
      Fs = Q(wr, {coordinates: O(function(a, c, d) {
          d = d[d.length - 1];
          var e = d.layout;
          d = d.stride;
          var f;
          "XY" == e || "XYM" == e ? f = 2 : ("XYZ" == e || "XYZM" == e) && (f = 3);
          var g,
              h = c.length,
              k = "";
          if (0 < h) {
            k += c[0];
            for (e = 1; e < f; ++e)
              k += "," + c[e];
            for (g = d; g < h; g += d)
              for (k += " " + c[g], e = 1; e < f; ++e)
                k += "," + c[g + e];
          }
          Vp(a, k);
        })}),
      Is = Q(wr, {
        outerBoundaryIs: O(xs),
        innerBoundaryIs: O(xs)
      }),
      ft = Q(wr, {color: O(ws)}),
      dt = Q(wr, ["IconStyle", "LabelStyle", "LineStyle", "PolyStyle"]),
      et = Q(wr, {
        IconStyle: O(function(a, c, d) {
          a = {node: a};
          var e = {},
              f = c.Eb(),
              g = c.qd(),
              h = {href: c.b.o};
          if (f) {
            h.w = f[0];
            h.h = f[1];
            var k = c.Yb(),
                m = c.Ha();
            m && g && 0 !== m[0] && m[1] !== f[1] && (h.x = m[0], h.y = g[1] - (m[1] + f[1]));
            k && 0 !== k[0] && k[1] !== f[1] && (e.hotSpot = {
              x: k[0],
              Qf: "pixels",
              y: f[1] - k[1],
              Rf: "pixels"
            });
          }
          e.Icon = h;
          f = c.j;
          1 !== f && (e.scale = f);
          c = c.s;
          0 !== c && (e.heading = c);
          c = Ts[d[d.length - 1].node.namespaceURI];
          e = Lm(e, c);
          Nm(a, Vs, Km, e, d, c);
        }),
        LabelStyle: O(function(a, c, d) {
          a = {node: a};
          var e = {},
              f = c.b;
          f && (e.color = f.b);
          (c = c.a) && 1 !== c && (e.scale = c);
          c = Ws[d[d.length - 1].node.namespaceURI];
          e = Lm(e, c);
          Nm(a, Xs, Km, e, d, c);
        }),
        LineStyle: O(function(a, c, d) {
          a = {node: a};
          var e = Ys[d[d.length - 1].node.namespaceURI];
          c = Lm({
            color: c.b,
            width: c.a
          }, e);
          Nm(a, Zs, Km, c, d, e);
        }),
        PolyStyle: O(function(a, c, d) {
          Nm({node: a}, ft, gt, [c.b], d);
        })
      });
  function Us(a, c, d) {
    return hm(vr[0], "gx:" + d);
  }
  function Os(a, c) {
    return hm(c[c.length - 1].node.namespaceURI, "Placemark");
  }
  function Ds(a, c) {
    if (a)
      return hm(c[c.length - 1].node.namespaceURI, Qs[a.W()]);
  }
  var gt = Im("color"),
      Gs = Im("coordinates"),
      Js = Im("innerBoundaryIs"),
      at = Im("Point"),
      bt = Im("LineString"),
      zs = Im("LinearRing"),
      ct = Im("Polygon"),
      Ks = Im("outerBoundaryIs");
  tr.prototype.a = function(a, c) {
    c = fp(this, c);
    var d = hm(wr[4], "kml");
    Bm(d, "http://www.w3.org/2000/xmlns/", "xmlns:gx", vr[0]);
    Bm(d, "http://www.w3.org/2000/xmlns/", "xmlns:xsi", "http://www.w3.org/2001/XMLSchema-instance");
    Bm(d, "http://www.w3.org/2001/XMLSchema-instance", "xsi:schemaLocation", "http://www.opengis.net/kml/2.2 https://developers.google.com/kml/schema/kml22gx.xsd");
    var e = {node: d},
        f = {};
    1 < a.length ? f.Document = a : 1 == a.length && (f.Placemark = a[0]);
    var g = Ms[d.namespaceURI],
        f = Lm(f, g);
    Nm(e, Ps, Km, f, [c], g, this);
    return d;
  };
  (function() {
    var a = {},
        c = {ia: a};
    (function(d) {
      if ("object" === typeof a && "undefined" !== typeof c)
        c.ia = d();
      else {
        var e;
        "undefined" !== typeof window ? e = window : "undefined" !== typeof global ? e = global : "undefined" !== typeof self ? e = self : e = this;
        e.hp = d();
      }
    })(function() {
      return function e(a, c, h) {
        function k(n, q) {
          if (!c[n]) {
            if (!a[n]) {
              var r = "function" == typeof require && require;
              if (!q && r)
                return r(n, !0);
              if (m)
                return m(n, !0);
              r = Error("Cannot find module '" + n + "'");
              throw r.code = "MODULE_NOT_FOUND", r;
            }
            r = c[n] = {ia: {}};
            a[n][0].call(r.ia, function(c) {
              var e = a[n][1][c];
              return k(e ? e : c);
            }, r, r.ia, e, a, c, h);
          }
          return c[n].ia;
        }
        for (var m = "function" == typeof require && require,
            n = 0; n < h.length; n++)
          k(h[n]);
        return k;
      }({
        1: [function(a, c) {
          function g(a) {
            var c;
            a && a.length && (c = a, a = c.length);
            a = new Uint8Array(a || 0);
            c && a.set(c);
            a.Jh = m.Jh;
            a.Pf = m.Pf;
            a.Bh = m.Bh;
            a.ki = m.ki;
            a.Ef = m.Ef;
            a.ji = m.ji;
            a.yf = m.yf;
            a.gi = m.gi;
            a.toString = m.toString;
            a.write = m.write;
            a.slice = m.slice;
            a.jg = m.jg;
            a.Vi = !0;
            return a;
          }
          function h(a) {
            for (var c = a.length,
                e = [],
                f = 0,
                g,
                h; f < c; f++) {
              g = a.charCodeAt(f);
              if (55295 < g && 57344 > g)
                if (h)
                  if (56320 > g) {
                    e.push(239, 191, 189);
                    h = g;
                    continue;
                  } else
                    g = h - 55296 << 10 | g - 56320 | 65536, h = null;
                else {
                  56319 < g || f + 1 === c ? e.push(239, 191, 189) : h = g;
                  continue;
                }
              else
                h && (e.push(239, 191, 189), h = null);
              128 > g ? e.push(g) : 2048 > g ? e.push(g >> 6 | 192, g & 63 | 128) : 65536 > g ? e.push(g >> 12 | 224, g >> 6 & 63 | 128, g & 63 | 128) : e.push(g >> 18 | 240, g >> 12 & 63 | 128, g >> 6 & 63 | 128, g & 63 | 128);
            }
            return e;
          }
          c.ia = g;
          var k = a("ieee754"),
              m,
              n,
              p;
          m = {
            Jh: function(a) {
              return (this[a] | this[a + 1] << 8 | this[a + 2] << 16) + 16777216 * this[a + 3];
            },
            Pf: function(a, c) {
              this[c] = a;
              this[c + 1] = a >>> 8;
              this[c + 2] = a >>> 16;
              this[c + 3] = a >>> 24;
            },
            Bh: function(a) {
              return (this[a] | this[a + 1] << 8 | this[a + 2] << 16) + (this[a + 3] << 24);
            },
            Ef: function(a) {
              return k.read(this, a, !0, 23, 4);
            },
            yf: function(a) {
              return k.read(this, a, !0, 52, 8);
            },
            ji: function(a, c) {
              return k.write(this, a, c, !0, 23, 4);
            },
            gi: function(a, c) {
              return k.write(this, a, c, !0, 52, 8);
            },
            toString: function(a, c, e) {
              var f = a = "";
              e = Math.min(this.length, e || this.length);
              for (c = c || 0; c < e; c++) {
                var g = this[c];
                127 >= g ? (a += decodeURIComponent(f) + String.fromCharCode(g), f = "") : f += "%" + g.toString(16);
              }
              return a += decodeURIComponent(f);
            },
            write: function(a, c) {
              for (var e = a === n ? p : h(a),
                  f = 0; f < e.length; f++)
                this[c + f] = e[f];
            },
            slice: function(a, c) {
              return this.subarray(a, c);
            },
            jg: function(a, c) {
              c = c || 0;
              for (var e = 0; e < this.length; e++)
                a[c + e] = this[e];
            }
          };
          m.ki = m.Pf;
          g.byteLength = function(a) {
            n = a;
            p = h(a);
            return p.length;
          };
          g.isBuffer = function(a) {
            return !(!a || !a.Vi);
          };
        }, {ieee754: 3}],
        2: [function(a, c) {
          (function(g) {
            function h(a) {
              this.Gb = k.isBuffer(a) ? a : new k(a || 0);
              this.ca = 0;
              this.length = this.Gb.length;
            }
            c.ia = h;
            var k = g.Po || a("./buffer");
            h.f = 0;
            h.g = 1;
            h.b = 2;
            h.a = 5;
            var m = Math.pow(2, 63);
            h.prototype = {
              Cf: function(a, c, e) {
                for (e = e || this.length; this.ca < e; ) {
                  var f = this.Ba(),
                      g = this.ca;
                  a(f >> 3, c, this);
                  this.ca === g && this.Eo(f);
                }
                return c;
              },
              Rn: function() {
                var a = this.Gb.Ef(this.ca);
                this.ca += 4;
                return a;
              },
              Nn: function() {
                var a = this.Gb.yf(this.ca);
                this.ca += 8;
                return a;
              },
              Ba: function() {
                var a = this.Gb,
                    c,
                    e,
                    f,
                    g,
                    h;
                c = a[this.ca++];
                if (128 > c)
                  return c;
                c = c & 127;
                f = a[this.ca++];
                if (128 > f)
                  return c | f << 7;
                f = (f & 127) << 7;
                g = a[this.ca++];
                if (128 > g)
                  return c | f | g << 14;
                g = (g & 127) << 14;
                h = a[this.ca++];
                if (128 > h)
                  return c | f | g | h << 21;
                e = a[this.ca++];
                c = (c | f | g | (h & 127) << 21) + 268435456 * (e & 127);
                if (128 > e)
                  return c;
                e = a[this.ca++];
                c += 34359738368 * (e & 127);
                if (128 > e)
                  return c;
                e = a[this.ca++];
                c += 4398046511104 * (e & 127);
                if (128 > e)
                  return c;
                e = a[this.ca++];
                c += 562949953421312 * (e & 127);
                if (128 > e)
                  return c;
                e = a[this.ca++];
                c += 72057594037927936 * (e & 127);
                if (128 > e)
                  return c;
                e = a[this.ca++];
                c += 0x7fffffffffffffff * (e & 127);
                if (128 > e)
                  return c;
                throw Error("Expected varint not more than 10 bytes");
              },
              bo: function() {
                var a = this.ca,
                    c = this.Ba();
                if (c < m)
                  return c;
                for (var e = this.ca - 2; 255 === this.Gb[e]; )
                  e--;
                e < a && (e = a);
                for (var f = c = 0; f < e - a + 1; f++)
                  var g = ~this.Gb[a + f] & 127,
                      c = c + (4 > f ? g << 7 * f : g * Math.pow(2, 7 * f));
                return -c - 1;
              },
              Ad: function() {
                var a = this.Ba();
                return 1 === a % 2 ? (a + 1) / -2 : a / 2;
              },
              Ln: function() {
                return Boolean(this.Ba());
              },
              Hf: function() {
                var a = this.Ba() + this.ca,
                    c = this.Gb.toString("utf8", this.ca, a);
                this.ca = a;
                return c;
              },
              Eo: function(a) {
                a = a & 7;
                if (a === h.f)
                  for (; 127 < this.Gb[this.ca++]; )
                    ;
                else if (a === h.b)
                  this.ca = this.Ba() + this.ca;
                else if (a === h.a)
                  this.ca += 4;
                else if (a === h.g)
                  this.ca += 8;
                else
                  throw Error("Unimplemented type: " + a);
              }
            };
          }).call(this, "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {});
        }, {"./buffer": 1}],
        3: [function(a, c, g) {
          g.read = function(a, c, e, f, g) {
            var q;
            q = 8 * g - f - 1;
            var r = (1 << q) - 1,
                t = r >> 1,
                v = -7;
            g = e ? g - 1 : 0;
            var w = e ? -1 : 1,
                z = a[c + g];
            g += w;
            e = z & (1 << -v) - 1;
            z >>= -v;
            for (v += q; 0 < v; e = 256 * e + a[c + g], g += w, v -= 8)
              ;
            q = e & (1 << -v) - 1;
            e >>= -v;
            for (v += f; 0 < v; q = 256 * q + a[c + g], g += w, v -= 8)
              ;
            if (0 === e)
              e = 1 - t;
            else {
              if (e === r)
                return q ? NaN : Infinity * (z ? -1 : 1);
              q += Math.pow(2, f);
              e = e - t;
            }
            return (z ? -1 : 1) * q * Math.pow(2, e - f);
          };
          g.write = function(a, c, e, f, g, q) {
            var r,
                t = 8 * q - g - 1,
                v = (1 << t) - 1,
                w = v >> 1,
                z = 23 === g ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
            q = f ? 0 : q - 1;
            var C = f ? 1 : -1,
                A = 0 > c || 0 === c && 0 > 1 / c ? 1 : 0;
            c = Math.abs(c);
            isNaN(c) || Infinity === c ? (c = isNaN(c) ? 1 : 0, f = v) : (f = Math.floor(Math.log(c) / Math.LN2), 1 > c * (r = Math.pow(2, -f)) && (f--, r *= 2), c = 1 <= f + w ? c + z / r : c + z * Math.pow(2, 1 - w), 2 <= c * r && (f++, r /= 2), f + w >= v ? (c = 0, f = v) : 1 <= f + w ? (c = (c * r - 1) * Math.pow(2, g), f += w) : (c = c * Math.pow(2, w - 1) * Math.pow(2, g), f = 0));
            for (; 8 <= g; a[e + q] = c & 255, q += C, c /= 256, g -= 8)
              ;
            f = f << g | c;
            for (t += g; 0 < t; a[e + q] = f & 255, q += C, f /= 256, t -= 8)
              ;
            a[e + q - C] |= 128 * A;
          };
        }, {}]
      }, {}, [2])(2);
    });
    Tm = c.ia;
  })();
  (function() {
    var a = {},
        c = {ia: a};
    (function(d) {
      if ("object" === typeof a && "undefined" !== typeof c)
        c.ia = d();
      else {
        var e;
        "undefined" !== typeof window ? e = window : "undefined" !== typeof global ? e = global : "undefined" !== typeof self ? e = self : e = this;
        e.jp = d();
      }
    })(function() {
      return function e(a, c, h) {
        function k(n, q) {
          if (!c[n]) {
            if (!a[n]) {
              var r = "function" == typeof require && require;
              if (!q && r)
                return r(n, !0);
              if (m)
                return m(n, !0);
              r = Error("Cannot find module '" + n + "'");
              throw r.code = "MODULE_NOT_FOUND", r;
            }
            r = c[n] = {ia: {}};
            a[n][0].call(r.ia, function(c) {
              var e = a[n][1][c];
              return k(e ? e : c);
            }, r, r.ia, e, a, c, h);
          }
          return c[n].ia;
        }
        for (var m = "function" == typeof require && require,
            n = 0; n < h.length; n++)
          k(h[n]);
        return k;
      }({
        1: [function(a, c) {
          c.ia.Mi = a("./lib/vectortile.js");
          c.ia.bp = a("./lib/vectortilefeature.js");
          c.ia.cp = a("./lib/vectortilelayer.js");
        }, {
          "./lib/vectortile.js": 2,
          "./lib/vectortilefeature.js": 3,
          "./lib/vectortilelayer.js": 4
        }],
        2: [function(a, c) {
          function g(a, c, e) {
            3 === a && (a = new h(e, e.Ba() + e.ca), a.length && (c[a.name] = a));
          }
          var h = a("./vectortilelayer");
          c.ia = function(a, c) {
            this.layers = a.Cf(g, {}, c);
          };
        }, {"./vectortilelayer": 4}],
        3: [function(a, c) {
          function g(a, c, e, f, g) {
            this.properties = {};
            this.extent = e;
            this.type = 0;
            this.pc = a;
            this.Ne = -1;
            this.Kd = f;
            this.Md = g;
            a.Cf(h, this, c);
          }
          function h(a, c, e) {
            if (1 == a)
              c.fp = e.Ba();
            else if (2 == a)
              for (a = e.Ba() + e.ca; e.ca < a; ) {
                var f = c.Kd[e.Ba()],
                    g = c.Md[e.Ba()];
                c.properties[f] = g;
              }
            else
              3 == a ? c.type = e.Ba() : 4 == a && (c.Ne = e.ca);
          }
          var k = a("point-geometry");
          c.ia = g;
          g.b = ["Unknown", "Point", "LineString", "Polygon"];
          g.prototype.Lg = function() {
            var a = this.pc;
            a.ca = this.Ne;
            for (var c = a.Ba() + a.ca,
                e = 1,
                f = 0,
                g = 0,
                h = 0,
                v = [],
                w; a.ca < c; )
              if (f || (f = a.Ba(), e = f & 7, f = f >> 3), f--, 1 === e || 2 === e)
                g += a.Ad(), h += a.Ad(), 1 === e && (w && v.push(w), w = []), w.push(new k(g, h));
              else if (7 === e)
                w && w.push(w[0].clone());
              else
                throw Error("unknown command " + e);
            w && v.push(w);
            return v;
          };
          g.prototype.bbox = function() {
            var a = this.pc;
            a.ca = this.Ne;
            for (var c = a.Ba() + a.ca,
                e = 1,
                f = 0,
                g = 0,
                h = 0,
                k = Infinity,
                w = -Infinity,
                z = Infinity,
                C = -Infinity; a.ca < c; )
              if (f || (f = a.Ba(), e = f & 7, f = f >> 3), f--, 1 === e || 2 === e)
                g += a.Ad(), h += a.Ad(), g < k && (k = g), g > w && (w = g), h < z && (z = h), h > C && (C = h);
              else if (7 !== e)
                throw Error("unknown command " + e);
            return [k, z, w, C];
          };
        }, {"point-geometry": 5}],
        4: [function(a, c) {
          function g(a, c) {
            this.version = 1;
            this.name = null;
            this.extent = 4096;
            this.length = 0;
            this.pc = a;
            this.Kd = [];
            this.Md = [];
            this.Jd = [];
            a.Cf(h, this, c);
            this.length = this.Jd.length;
          }
          function h(a, c, e) {
            15 === a ? c.version = e.Ba() : 1 === a ? c.name = e.Hf() : 5 === a ? c.extent = e.Ba() : 2 === a ? c.Jd.push(e.ca) : 3 === a ? c.Kd.push(e.Hf()) : 4 === a && c.Md.push(k(e));
          }
          function k(a) {
            for (var c = null,
                e = a.Ba() + a.ca; a.ca < e; )
              c = a.Ba() >> 3, c = 1 === c ? a.Hf() : 2 === c ? a.Rn() : 3 === c ? a.Nn() : 4 === c ? a.bo() : 5 === c ? a.Ba() : 6 === c ? a.Ad() : 7 === c ? a.Ln() : null;
            return c;
          }
          var m = a("./vectortilefeature.js");
          c.ia = g;
          g.prototype.feature = function(a) {
            if (0 > a || a >= this.Jd.length)
              throw Error("feature index out of bounds");
            this.pc.ca = this.Jd[a];
            a = this.pc.Ba() + this.pc.ca;
            return new m(this.pc, a, this.extent, this.Kd, this.Md);
          };
        }, {"./vectortilefeature.js": 3}],
        5: [function(a, c) {
          function g(a, c) {
            this.x = a;
            this.y = c;
          }
          c.ia = g;
          g.prototype = {
            clone: function() {
              return new g(this.x, this.y);
            },
            rotate: function(a) {
              return this.clone().Yi(a);
            },
            round: function() {
              return this.clone().Zi();
            },
            angle: function() {
              return Math.atan2(this.y, this.x);
            },
            Yi: function(a) {
              var c = Math.cos(a);
              a = Math.sin(a);
              var e = a * this.x + c * this.y;
              this.x = c * this.x - a * this.y;
              this.y = e;
              return this;
            },
            Zi: function() {
              this.x = Math.round(this.x);
              this.y = Math.round(this.y);
              return this;
            }
          };
          g.b = function(a) {
            return a instanceof g ? a : Array.isArray(a) ? new g(a[0], a[1]) : a;
          };
        }, {}]
      }, {}, [1])(1);
    });
    Um = c.ia;
  })();
  function ht(a) {
    this.defaultDataProjection = null;
    a = a ? a : {};
    this.defaultDataProjection = new nd({
      code: "",
      units: "tile-pixels"
    });
    this.b = a.featureClass ? a.featureClass : Bl;
    this.g = a.geometryName ? a.geometryName : "geometry";
    this.a = a.layerName ? a.layerName : "layer";
    this.f = a.layers ? a.layers : null;
  }
  y(ht, dp);
  ht.prototype.W = function() {
    return "arraybuffer";
  };
  ht.prototype.Ea = function(a, c) {
    var d = this.f,
        e = new Tm(a),
        e = new Um.Mi(e),
        f = [],
        g = this.b,
        h,
        k,
        m;
    for (m in e.layers)
      if (!d || -1 != d.indexOf(m)) {
        h = e.layers[m];
        for (var n = 0,
            p = h.length; n < p; ++n) {
          if (g === Bl) {
            var q = h.feature(n);
            k = m;
            var r = q.Lg(),
                t = [],
                v = [];
            it(r, v, t);
            var w = q.type,
                z = void 0;
            1 === w ? z = 1 === r.length ? "Point" : "MultiPoint" : 2 === w ? z = 1 === r.length ? "LineString" : "MultiLineString" : 3 === w && (z = "Polygon");
            q = q.properties;
            q[this.a] = k;
            k = new this.b(z, v, t, q);
          } else {
            q = h.feature(n);
            z = m;
            v = c;
            k = new this.b;
            t = q.properties;
            t[this.a] = z;
            z = q.type;
            if (0 === z)
              z = null;
            else {
              q = q.Lg();
              r = [];
              w = [];
              it(q, w, r);
              var C = void 0;
              1 === z ? C = 1 === q.length ? new E(null) : new pp(null) : 2 === z ? 1 === q.length ? C = new T(null) : C = new U(null) : 3 === z && (C = new F(null));
              C.ba("XY", w, r);
              z = C;
            }
            (v = gp(z, !1, fp(this, v))) && (t[this.g] = v);
            k.C(t);
            k.Bc(this.g);
          }
          f.push(k);
        }
      }
    return f;
  };
  ht.prototype.Qa = function() {
    return this.defaultDataProjection;
  };
  ht.prototype.c = function(a) {
    this.f = a;
  };
  function it(a, c, d) {
    for (var e = 0,
        f = 0,
        g = a.length; f < g; ++f) {
      var h = a[f],
          k,
          m;
      k = 0;
      for (m = h.length; k < m; ++k) {
        var n = h[k];
        c.push(n.x, n.y);
      }
      e += 2 * k;
      d.push(e);
    }
  }
  ;
  function jt() {
    this.defaultDataProjection = null;
    this.defaultDataProjection = qd("EPSG:4326");
  }
  y(jt, Ip);
  function kt(a, c) {
    c[c.length - 1].Ed[a.getAttribute("k")] = a.getAttribute("v");
  }
  var lt = [null],
      mt = Q(lt, {
        nd: function(a, c) {
          c[c.length - 1].Qc.push(a.getAttribute("ref"));
        },
        tag: kt
      }),
      ot = Q(lt, {
        node: function(a, c) {
          var d = c[0],
              e = c[c.length - 1],
              f = a.getAttribute("id"),
              g = [parseFloat(a.getAttribute("lon")), parseFloat(a.getAttribute("lat"))];
          e.Og[f] = g;
          var h = R({Ed: {}}, nt, a, c);
          pb(h.Ed) || (g = new E(g), gp(g, !1, d), d = new Xl(g), d.jc(f), d.C(h.Ed), e.features.push(d));
        },
        way: function(a, c) {
          for (var d = c[0],
              e = a.getAttribute("id"),
              f = R({
                Qc: [],
                Ed: {}
              }, mt, a, c),
              g = c[c.length - 1],
              h = [],
              k = 0,
              m = f.Qc.length; k < m; k++)
            Ya(h, g.Og[f.Qc[k]]);
          f.Qc[0] == f.Qc[f.Qc.length - 1] ? (k = new F(null), k.ba("XY", h, [h.length])) : (k = new T(null), k.ba("XY", h));
          gp(k, !1, d);
          d = new Xl(k);
          d.jc(e);
          d.C(f.Ed);
          g.features.push(d);
        }
      }),
      nt = Q(lt, {tag: kt});
  jt.prototype.ic = function(a, c) {
    var d = ep(this, a, c);
    return "osm" == a.localName && (d = R({
      Og: {},
      features: []
    }, ot, a, [d]), d.features) ? d.features : [];
  };
  function pt(a) {
    return a.getAttributeNS("http://www.w3.org/1999/xlink", "href");
  }
  ;
  function qt() {}
  qt.prototype.read = function(a) {
    return pm(a) ? this.a(a) : sm(a) ? this.b(a) : "string" === typeof a ? (a = Cm(a), this.a(a)) : null;
  };
  function rt() {}
  y(rt, qt);
  rt.prototype.a = function(a) {
    for (a = a.firstChild; a; a = a.nextSibling)
      if (1 == a.nodeType)
        return this.b(a);
    return null;
  };
  rt.prototype.b = function(a) {
    return (a = R({}, st, a, [])) ? a : null;
  };
  var tt = [null, "http://www.opengis.net/ows/1.1"],
      st = Q(tt, {
        ServiceIdentification: N(function(a, c) {
          return R({}, ut, a, c);
        }),
        ServiceProvider: N(function(a, c) {
          return R({}, vt, a, c);
        }),
        OperationsMetadata: N(function(a, c) {
          return R({}, wt, a, c);
        })
      }),
      xt = Q(tt, {
        DeliveryPoint: N(W),
        City: N(W),
        AdministrativeArea: N(W),
        PostalCode: N(W),
        Country: N(W),
        ElectronicMailAddress: N(W)
      }),
      yt = Q(tt, {Value: Gm(function(a) {
          return W(a);
        })}),
      zt = Q(tt, {AllowedValues: N(function(a, c) {
          return R({}, yt, a, c);
        })}),
      Bt = Q(tt, {
        Phone: N(function(a, c) {
          return R({}, At, a, c);
        }),
        Address: N(function(a, c) {
          return R({}, xt, a, c);
        })
      }),
      Dt = Q(tt, {HTTP: N(function(a, c) {
          return R({}, Ct, a, c);
        })}),
      Ct = Q(tt, {
        Get: Gm(function(a, c) {
          var d = pt(a);
          return d ? R({href: d}, Et, a, c) : void 0;
        }),
        Post: void 0
      }),
      Ft = Q(tt, {DCP: N(function(a, c) {
          return R({}, Dt, a, c);
        })}),
      wt = Q(tt, {Operation: function(a, c) {
          var d = a.getAttribute("name"),
              e = R({}, Ft, a, c);
          e && (c[c.length - 1][d] = e);
        }}),
      At = Q(tt, {
        Voice: N(W),
        Facsimile: N(W)
      }),
      Et = Q(tt, {Constraint: Gm(function(a, c) {
          var d = a.getAttribute("name");
          return d ? R({name: d}, zt, a, c) : void 0;
        })}),
      Gt = Q(tt, {
        IndividualName: N(W),
        PositionName: N(W),
        ContactInfo: N(function(a, c) {
          return R({}, Bt, a, c);
        })
      }),
      ut = Q(tt, {
        Title: N(W),
        ServiceTypeVersion: N(W),
        ServiceType: N(W)
      }),
      vt = Q(tt, {
        ProviderName: N(W),
        ProviderSite: N(pt),
        ServiceContact: N(function(a, c) {
          return R({}, Gt, a, c);
        })
      });
  function Ht(a, c, d, e) {
    var f;
    void 0 !== e ? f = e : f = [];
    for (var g = e = 0; g < c; ) {
      var h = a[g++];
      f[e++] = a[g++];
      f[e++] = h;
      for (h = 2; h < d; ++h)
        f[e++] = a[g++];
    }
    f.length = e;
  }
  ;
  function It(a) {
    a = a ? a : {};
    this.defaultDataProjection = null;
    this.defaultDataProjection = qd("EPSG:4326");
    this.b = a.factor ? a.factor : 1E5;
    this.a = a.geometryLayout ? a.geometryLayout : "XY";
  }
  y(It, Oq);
  function Jt(a, c, d) {
    var e,
        f = Array(c);
    for (e = 0; e < c; ++e)
      f[e] = 0;
    var g,
        h;
    g = 0;
    for (h = a.length; g < h; )
      for (e = 0; e < c; ++e, ++g) {
        var k = a[g],
            m = k - f[e];
        f[e] = k;
        a[g] = m;
      }
    return Kt(a, d ? d : 1E5);
  }
  function Lt(a, c, d) {
    var e,
        f = Array(c);
    for (e = 0; e < c; ++e)
      f[e] = 0;
    a = Mt(a, d ? d : 1E5);
    var g;
    d = 0;
    for (g = a.length; d < g; )
      for (e = 0; e < c; ++e, ++d)
        f[e] += a[d], a[d] = f[e];
    return a;
  }
  function Kt(a, c) {
    var d = c ? c : 1E5,
        e,
        f;
    e = 0;
    for (f = a.length; e < f; ++e)
      a[e] = Math.round(a[e] * d);
    d = 0;
    for (e = a.length; d < e; ++d)
      f = a[d], a[d] = 0 > f ? ~(f << 1) : f << 1;
    d = "";
    e = 0;
    for (f = a.length; e < f; ++e) {
      for (var g = a[e],
          h = void 0,
          k = ""; 32 <= g; )
        h = (32 | g & 31) + 63, k += String.fromCharCode(h), g >>= 5;
      h = g + 63;
      k += String.fromCharCode(h);
      d += k;
    }
    return d;
  }
  function Mt(a, c) {
    var d = c ? c : 1E5,
        e = [],
        f = 0,
        g = 0,
        h,
        k;
    h = 0;
    for (k = a.length; h < k; ++h) {
      var m = a.charCodeAt(h) - 63,
          f = f | (m & 31) << g;
      32 > m ? (e.push(f), g = f = 0) : g += 5;
    }
    f = 0;
    for (g = e.length; f < g; ++f)
      h = e[f], e[f] = h & 1 ? ~(h >> 1) : h >> 1;
    f = 0;
    for (g = e.length; f < g; ++f)
      e[f] /= d;
    return e;
  }
  l = It.prototype;
  l.xd = function(a, c) {
    var d = this.zd(a, c);
    return new Xl(d);
  };
  l.Bf = function(a, c) {
    return [this.xd(a, c)];
  };
  l.zd = function(a, c) {
    var d = Pd(this.a),
        e = Lt(a, d, this.b);
    Ht(e, e.length, d, e);
    d = be(e, 0, e.length, d);
    return gp(new T(d, this.a), !1, fp(this, c));
  };
  l.Ge = function(a, c) {
    var d = a.X();
    return d ? this.Gd(d, c) : "";
  };
  l.ii = function(a, c) {
    return this.Ge(a[0], c);
  };
  l.Gd = function(a, c) {
    a = gp(a, !0, fp(this, c));
    var d = a.ga(),
        e = a.qa();
    Ht(d, d.length, e, d);
    return Jt(d, e, this.b);
  };
  function Nt(a) {
    a = a ? a : {};
    this.defaultDataProjection = null;
    this.defaultDataProjection = qd(a.defaultDataProjection ? a.defaultDataProjection : "EPSG:4326");
  }
  y(Nt, jp);
  function Ot(a, c) {
    var d = [],
        e,
        f,
        g,
        h;
    g = 0;
    for (h = a.length; g < h; ++g)
      e = a[g], 0 < g && d.pop(), 0 <= e ? f = c[e] : f = c[~e].slice().reverse(), d.push.apply(d, f);
    e = 0;
    for (f = d.length; e < f; ++e)
      d[e] = d[e].slice();
    return d;
  }
  function Pt(a, c, d, e, f) {
    a = a.geometries;
    var g = [],
        h,
        k;
    h = 0;
    for (k = a.length; h < k; ++h)
      g[h] = Qt(a[h], c, d, e, f);
    return g;
  }
  function Qt(a, c, d, e, f) {
    var g = a.type,
        h = Rt[g];
    c = "Point" === g || "MultiPoint" === g ? h(a, d, e) : h(a, c);
    d = new Xl;
    d.Pa(gp(c, !1, f));
    void 0 !== a.id && d.jc(a.id);
    a.properties && d.C(a.properties);
    return d;
  }
  Nt.prototype.Af = function(a, c) {
    if ("Topology" == a.type) {
      var d,
          e = null,
          f = null;
      a.transform && (d = a.transform, e = d.scale, f = d.translate);
      var g = a.arcs;
      if (d) {
        d = e;
        var h = f,
            k,
            m;
        k = 0;
        for (m = g.length; k < m; ++k)
          for (var n = g[k],
              p = d,
              q = h,
              r = 0,
              t = 0,
              v = void 0,
              w = void 0,
              z = void 0,
              w = 0,
              z = n.length; w < z; ++w)
            v = n[w], r += v[0], t += v[1], v[0] = r, v[1] = t, St(v, p, q);
      }
      d = [];
      h = ob(a.objects);
      k = 0;
      for (m = h.length; k < m; ++k)
        "GeometryCollection" === h[k].type ? (n = h[k], d.push.apply(d, Pt(n, g, e, f, c))) : (n = h[k], d.push(Qt(n, g, e, f, c)));
      return d;
    }
    return [];
  };
  function St(a, c, d) {
    a[0] = a[0] * c[0] + d[0];
    a[1] = a[1] * c[1] + d[1];
  }
  Nt.prototype.Qa = function() {
    return this.defaultDataProjection;
  };
  var Rt = {
    Point: function(a, c, d) {
      a = a.coordinates;
      c && d && St(a, c, d);
      return new E(a);
    },
    LineString: function(a, c) {
      var d = Ot(a.arcs, c);
      return new T(d);
    },
    Polygon: function(a, c) {
      var d = [],
          e,
          f;
      e = 0;
      for (f = a.arcs.length; e < f; ++e)
        d[e] = Ot(a.arcs[e], c);
      return new F(d);
    },
    MultiPoint: function(a, c, d) {
      a = a.coordinates;
      var e,
          f;
      if (c && d)
        for (e = 0, f = a.length; e < f; ++e)
          St(a[e], c, d);
      return new pp(a);
    },
    MultiLineString: function(a, c) {
      var d = [],
          e,
          f;
      e = 0;
      for (f = a.arcs.length; e < f; ++e)
        d[e] = Ot(a.arcs[e], c);
      return new U(d);
    },
    MultiPolygon: function(a, c) {
      var d = [],
          e,
          f,
          g,
          h,
          k,
          m;
      k = 0;
      for (m = a.arcs.length; k < m; ++k) {
        e = a.arcs[k];
        f = [];
        g = 0;
        for (h = e.length; g < h; ++g)
          f[g] = Ot(e[g], c);
        d[k] = f;
      }
      return new V(d);
    }
  };
  function Tt(a) {
    a = a ? a : {};
    this.c = a.featureType;
    this.g = a.featureNS;
    this.b = a.gmlFormat ? a.gmlFormat : new Zp;
    this.f = a.schemaLocation ? a.schemaLocation : "http://www.opengis.net/wfs http://schemas.opengis.net/wfs/1.1.0/wfs.xsd";
    this.defaultDataProjection = null;
  }
  y(Tt, Ip);
  Tt.prototype.ic = function(a, c) {
    var d = {
      featureType: this.c,
      featureNS: this.g
    };
    mb(d, ep(this, a, c ? c : {}));
    d = [d];
    this.b.b["http://www.opengis.net/gml"].featureMember = Em(Lp.prototype.yd);
    (d = R([], this.b.b, a, d, this.b)) || (d = []);
    return d;
  };
  Tt.prototype.j = function(a) {
    if (pm(a))
      return Ut(a);
    if (sm(a))
      return R({}, Vt, a, []);
    if ("string" === typeof a)
      return a = Cm(a), Ut(a);
  };
  Tt.prototype.i = function(a) {
    if (pm(a))
      return Wt(this, a);
    if (sm(a))
      return Xt(this, a);
    if ("string" === typeof a)
      return a = Cm(a), Wt(this, a);
  };
  function Wt(a, c) {
    for (var d = c.firstChild; d; d = d.nextSibling)
      if (1 == d.nodeType)
        return Xt(a, d);
  }
  var Yt = {"http://www.opengis.net/gml": {boundedBy: N(Lp.prototype.ye, "bounds")}};
  function Xt(a, c) {
    var d = {},
        e = Tp(c.getAttribute("numberOfFeatures"));
    d.numberOfFeatures = e;
    return R(d, Yt, c, [], a.b);
  }
  var Zt = {"http://www.opengis.net/wfs": {
      totalInserted: N(Sp),
      totalUpdated: N(Sp),
      totalDeleted: N(Sp)
    }},
      $t = {"http://www.opengis.net/ogc": {FeatureId: Em(function(a) {
            return a.getAttribute("fid");
          })}},
      au = {"http://www.opengis.net/wfs": {Feature: function(a, c) {
            Mm($t, a, c);
          }}},
      Vt = {"http://www.opengis.net/wfs": {
          TransactionSummary: N(function(a, c) {
            return R({}, Zt, a, c);
          }, "transactionSummary"),
          InsertResults: N(function(a, c) {
            return R([], au, a, c);
          }, "insertIds")
        }};
  function Ut(a) {
    for (a = a.firstChild; a; a = a.nextSibling)
      if (1 == a.nodeType)
        return R({}, Vt, a, []);
  }
  var bu = {"http://www.opengis.net/wfs": {PropertyName: O(Vp)}};
  function cu(a, c) {
    var d = hm("http://www.opengis.net/ogc", "Filter"),
        e = hm("http://www.opengis.net/ogc", "FeatureId");
    d.appendChild(e);
    e.setAttribute("fid", c);
    a.appendChild(d);
  }
  var du = {"http://www.opengis.net/wfs": {
      Insert: O(function(a, c, d) {
        var e = d[d.length - 1],
            e = hm(e.featureNS, e.featureType);
        a.appendChild(e);
        Zp.prototype.hi(e, c, d);
      }),
      Update: O(function(a, c, d) {
        var e = d[d.length - 1],
            f = e.featureType,
            g = e.featurePrefix,
            g = g ? g : "feature",
            h = e.featureNS;
        a.setAttribute("typeName", g + ":" + f);
        Bm(a, "http://www.w3.org/2000/xmlns/", "xmlns:" + g, h);
        f = c.Sa();
        if (void 0 !== f) {
          for (var g = c.O(),
              h = [],
              k = 0,
              m = g.length; k < m; k++) {
            var n = c.get(g[k]);
            void 0 !== n && h.push({
              name: g[k],
              value: n
            });
          }
          Nm({
            node: a,
            srsName: e.srsName
          }, du, Im("Property"), h, d);
          cu(a, f);
        }
      }),
      Delete: O(function(a, c, d) {
        var e = d[d.length - 1];
        d = e.featureType;
        var f = e.featurePrefix,
            f = f ? f : "feature",
            e = e.featureNS;
        a.setAttribute("typeName", f + ":" + d);
        Bm(a, "http://www.w3.org/2000/xmlns/", "xmlns:" + f, e);
        c = c.Sa();
        void 0 !== c && cu(a, c);
      }),
      Property: O(function(a, c, d) {
        var e = hm("http://www.opengis.net/wfs", "Name");
        a.appendChild(e);
        Vp(e, c.name);
        void 0 !== c.value && null !== c.value && (e = hm("http://www.opengis.net/wfs", "Value"), a.appendChild(e), c.value instanceof Md ? Zp.prototype.Ie(e, c.value, d) : Vp(e, c.value));
      }),
      Native: O(function(a, c) {
        c.Lo && a.setAttribute("vendorId", c.Lo);
        void 0 !== c.po && a.setAttribute("safeToIgnore", c.po);
        void 0 !== c.value && Vp(a, c.value);
      })
    }},
      eu = {"http://www.opengis.net/wfs": {Query: O(function(a, c, d) {
            var e = d[d.length - 1],
                f = e.featurePrefix,
                g = e.featureNS,
                h = e.propertyNames,
                k = e.srsName;
            a.setAttribute("typeName", (f ? f + ":" : "") + c);
            k && a.setAttribute("srsName", k);
            g && Bm(a, "http://www.w3.org/2000/xmlns/", "xmlns:" + f, g);
            c = mb({}, e);
            c.node = a;
            Nm(c, bu, Im("PropertyName"), h, d);
            if (e = e.bbox)
              h = hm("http://www.opengis.net/ogc", "Filter"), c = d[d.length - 1].geometryName, f = hm("http://www.opengis.net/ogc", "BBOX"), h.appendChild(f), g = hm("http://www.opengis.net/ogc", "PropertyName"), Vp(g, c), f.appendChild(g), Zp.prototype.Ie(f, e, d), a.appendChild(h);
          })}};
  Tt.prototype.l = function(a) {
    var c = hm("http://www.opengis.net/wfs", "GetFeature");
    c.setAttribute("service", "WFS");
    c.setAttribute("version", "1.1.0");
    a && (a.handle && c.setAttribute("handle", a.handle), a.outputFormat && c.setAttribute("outputFormat", a.outputFormat), void 0 !== a.maxFeatures && c.setAttribute("maxFeatures", a.maxFeatures), a.resultType && c.setAttribute("resultType", a.resultType), void 0 !== a.startIndex && c.setAttribute("startIndex", a.startIndex), void 0 !== a.count && c.setAttribute("count", a.count));
    Bm(c, "http://www.w3.org/2001/XMLSchema-instance", "xsi:schemaLocation", this.f);
    var d = a.featureTypes;
    a = [{
      node: c,
      srsName: a.srsName,
      featureNS: a.featureNS ? a.featureNS : this.g,
      featurePrefix: a.featurePrefix,
      geometryName: a.geometryName,
      bbox: a.bbox,
      propertyNames: a.propertyNames ? a.propertyNames : []
    }];
    var e = mb({}, a[a.length - 1]);
    e.node = c;
    Nm(e, eu, Im("Query"), d, a);
    return c;
  };
  Tt.prototype.A = function(a, c, d, e) {
    var f = [],
        g = hm("http://www.opengis.net/wfs", "Transaction");
    g.setAttribute("service", "WFS");
    g.setAttribute("version", "1.1.0");
    var h,
        k;
    e && (h = e.gmlOptions ? e.gmlOptions : {}, e.handle && g.setAttribute("handle", e.handle));
    Bm(g, "http://www.w3.org/2001/XMLSchema-instance", "xsi:schemaLocation", this.f);
    a && (k = {
      node: g,
      featureNS: e.featureNS,
      featureType: e.featureType,
      featurePrefix: e.featurePrefix
    }, mb(k, h), Nm(k, du, Im("Insert"), a, f));
    c && (k = {
      node: g,
      featureNS: e.featureNS,
      featureType: e.featureType,
      featurePrefix: e.featurePrefix
    }, mb(k, h), Nm(k, du, Im("Update"), c, f));
    d && Nm({
      node: g,
      featureNS: e.featureNS,
      featureType: e.featureType,
      featurePrefix: e.featurePrefix
    }, du, Im("Delete"), d, f);
    e.nativeElements && Nm({
      node: g,
      featureNS: e.featureNS,
      featureType: e.featureType,
      featurePrefix: e.featurePrefix
    }, du, Im("Native"), e.nativeElements, f);
    return g;
  };
  Tt.prototype.Gf = function(a) {
    for (a = a.firstChild; a; a = a.nextSibling)
      if (1 == a.nodeType)
        return this.Be(a);
    return null;
  };
  Tt.prototype.Be = function(a) {
    if (a.firstElementChild && a.firstElementChild.firstElementChild)
      for (a = a.firstElementChild.firstElementChild, a = a.firstElementChild; a; a = a.nextElementSibling)
        if (0 !== a.childNodes.length && (1 !== a.childNodes.length || 3 !== a.firstChild.nodeType)) {
          var c = [{}];
          this.b.ye(a, c);
          return qd(c.pop().srsName);
        }
    return null;
  };
  function fu(a) {
    a = a ? a : {};
    this.defaultDataProjection = null;
    this.b = void 0 !== a.splitCollection ? a.splitCollection : !1;
  }
  y(fu, Oq);
  function gu(a) {
    a = a.Y();
    return 0 === a.length ? "" : a[0] + " " + a[1];
  }
  function hu(a) {
    a = a.Y();
    for (var c = [],
        d = 0,
        e = a.length; d < e; ++d)
      c.push(a[d][0] + " " + a[d][1]);
    return c.join(",");
  }
  function iu(a) {
    var c = [];
    a = a.Vd();
    for (var d = 0,
        e = a.length; d < e; ++d)
      c.push("(" + hu(a[d]) + ")");
    return c.join(",");
  }
  function ju(a) {
    var c = a.W();
    a = (0, ku[c])(a);
    c = c.toUpperCase();
    return 0 === a.length ? c + " EMPTY" : c + "(" + a + ")";
  }
  var ku = {
    Point: gu,
    LineString: hu,
    Polygon: iu,
    MultiPoint: function(a) {
      var c = [];
      a = a.ke();
      for (var d = 0,
          e = a.length; d < e; ++d)
        c.push("(" + gu(a[d]) + ")");
      return c.join(",");
    },
    MultiLineString: function(a) {
      var c = [];
      a = a.rd();
      for (var d = 0,
          e = a.length; d < e; ++d)
        c.push("(" + hu(a[d]) + ")");
      return c.join(",");
    },
    MultiPolygon: function(a) {
      var c = [];
      a = a.Wd();
      for (var d = 0,
          e = a.length; d < e; ++d)
        c.push("(" + iu(a[d]) + ")");
      return c.join(",");
    },
    GeometryCollection: function(a) {
      var c = [];
      a = a.vg();
      for (var d = 0,
          e = a.length; d < e; ++d)
        c.push(ju(a[d]));
      return c.join(",");
    }
  };
  l = fu.prototype;
  l.xd = function(a, c) {
    var d = this.zd(a, c);
    if (d) {
      var e = new Xl;
      e.Pa(d);
      return e;
    }
    return null;
  };
  l.Bf = function(a, c) {
    var d = [],
        e = this.zd(a, c);
    this.b && "GeometryCollection" == e.W() ? d = e.i : d = [e];
    for (var f = [],
        g = 0,
        h = d.length; g < h; ++g)
      e = new Xl, e.Pa(d[g]), f.push(e);
    return f;
  };
  l.zd = function(a, c) {
    var d;
    d = new lu(new mu(a));
    d.b = nu(d.a);
    return (d = ou(d)) ? gp(d, !1, c) : null;
  };
  l.Ge = function(a, c) {
    var d = a.X();
    return d ? this.Gd(d, c) : "";
  };
  l.ii = function(a, c) {
    if (1 == a.length)
      return this.Ge(a[0], c);
    for (var d = [],
        e = 0,
        f = a.length; e < f; ++e)
      d.push(a[e].X());
    d = new zp(d);
    return this.Gd(d, c);
  };
  l.Gd = function(a, c) {
    return ju(gp(a, !0, c));
  };
  function mu(a) {
    this.a = a;
    this.b = -1;
  }
  function pu(a, c) {
    return "0" <= a && "9" >= a || "." == a && !(void 0 !== c && c);
  }
  function nu(a) {
    var c = a.a.charAt(++a.b),
        d = {
          position: a.b,
          value: c
        };
    if ("(" == c)
      d.type = 2;
    else if ("," == c)
      d.type = 5;
    else if (")" == c)
      d.type = 3;
    else if (pu(c) || "-" == c) {
      d.type = 4;
      var e,
          c = a.b,
          f = !1,
          g = !1;
      do {
        if ("." == e)
          f = !0;
        else if ("e" == e || "E" == e)
          g = !0;
        e = a.a.charAt(++a.b);
      } while (pu(e, f) || !g && ("e" == e || "E" == e) || g && ("-" == e || "+" == e));
      a = parseFloat(a.a.substring(c, a.b--));
      d.value = a;
    } else if ("a" <= c && "z" >= c || "A" <= c && "Z" >= c) {
      d.type = 1;
      c = a.b;
      do
        e = a.a.charAt(++a.b);
 while ("a" <= e && "z" >= e || "A" <= e && "Z" >= e);
      a = a.a.substring(c, a.b--).toUpperCase();
      d.value = a;
    } else {
      if (" " == c || "\t" == c || "\r" == c || "\n" == c)
        return nu(a);
      if ("" === c)
        d.type = 6;
      else
        throw Error("Unexpected character: " + c);
    }
    return d;
  }
  function lu(a) {
    this.a = a;
  }
  l = lu.prototype;
  l.match = function(a) {
    if (a = this.b.type == a)
      this.b = nu(this.a);
    return a;
  };
  function ou(a) {
    var c = a.b;
    if (a.match(1)) {
      var d = c.value;
      if ("GEOMETRYCOLLECTION" == d) {
        a: {
          if (a.match(2)) {
            c = [];
            do
              c.push(ou(a));
 while (a.match(5));
            if (a.match(3)) {
              a = c;
              break a;
            }
          } else if (qu(a)) {
            a = [];
            break a;
          }
          throw Error(ru(a));
        }
        return new zp(a);
      }
      var e = su[d],
          c = tu[d];
      if (!e || !c)
        throw Error("Invalid geometry type: " + d);
      a = e.call(a);
      return new c(a);
    }
    throw Error(ru(a));
  }
  l.vf = function() {
    if (this.match(2)) {
      var a = uu(this);
      if (this.match(3))
        return a;
    } else if (qu(this))
      return null;
    throw Error(ru(this));
  };
  l.uf = function() {
    if (this.match(2)) {
      var a = vu(this);
      if (this.match(3))
        return a;
    } else if (qu(this))
      return [];
    throw Error(ru(this));
  };
  l.wf = function() {
    if (this.match(2)) {
      var a = wu(this);
      if (this.match(3))
        return a;
    } else if (qu(this))
      return [];
    throw Error(ru(this));
  };
  l.yn = function() {
    if (this.match(2)) {
      var a;
      if (2 == this.b.type)
        for (a = [this.vf()]; this.match(5); )
          a.push(this.vf());
      else
        a = vu(this);
      if (this.match(3))
        return a;
    } else if (qu(this))
      return [];
    throw Error(ru(this));
  };
  l.xn = function() {
    if (this.match(2)) {
      var a = wu(this);
      if (this.match(3))
        return a;
    } else if (qu(this))
      return [];
    throw Error(ru(this));
  };
  l.zn = function() {
    if (this.match(2)) {
      for (var a = [this.wf()]; this.match(5); )
        a.push(this.wf());
      if (this.match(3))
        return a;
    } else if (qu(this))
      return [];
    throw Error(ru(this));
  };
  function uu(a) {
    for (var c = [],
        d = 0; 2 > d; ++d) {
      var e = a.b;
      if (a.match(4))
        c.push(e.value);
      else
        break;
    }
    if (2 == c.length)
      return c;
    throw Error(ru(a));
  }
  function vu(a) {
    for (var c = [uu(a)]; a.match(5); )
      c.push(uu(a));
    return c;
  }
  function wu(a) {
    for (var c = [a.uf()]; a.match(5); )
      c.push(a.uf());
    return c;
  }
  function qu(a) {
    var c = 1 == a.b.type && "EMPTY" == a.b.value;
    c && (a.b = nu(a.a));
    return c;
  }
  function ru(a) {
    return "Unexpected `" + a.b.value + "` at position " + a.b.position + " in `" + a.a.a + "`";
  }
  var tu = {
    POINT: E,
    LINESTRING: T,
    POLYGON: F,
    MULTIPOINT: pp,
    MULTILINESTRING: U,
    MULTIPOLYGON: V
  },
      su = {
        POINT: lu.prototype.vf,
        LINESTRING: lu.prototype.uf,
        POLYGON: lu.prototype.wf,
        MULTIPOINT: lu.prototype.yn,
        MULTILINESTRING: lu.prototype.xn,
        MULTIPOLYGON: lu.prototype.zn
      };
  function xu() {
    this.version = void 0;
  }
  y(xu, qt);
  xu.prototype.a = function(a) {
    for (a = a.firstChild; a; a = a.nextSibling)
      if (1 == a.nodeType)
        return this.b(a);
    return null;
  };
  xu.prototype.b = function(a) {
    this.version = a.getAttribute("version").trim();
    return (a = R({version: this.version}, yu, a, [])) ? a : null;
  };
  function zu(a, c) {
    return R({}, Au, a, c);
  }
  function Bu(a, c) {
    return R({}, Cu, a, c);
  }
  function Du(a, c) {
    var d = zu(a, c);
    if (d) {
      var e = [Tp(a.getAttribute("width")), Tp(a.getAttribute("height"))];
      d.size = e;
      return d;
    }
  }
  function Eu(a, c) {
    return R([], Fu, a, c);
  }
  var Gu = [null, "http://www.opengis.net/wms"],
      yu = Q(Gu, {
        Service: N(function(a, c) {
          return R({}, Hu, a, c);
        }),
        Capability: N(function(a, c) {
          return R({}, Iu, a, c);
        })
      }),
      Iu = Q(Gu, {
        Request: N(function(a, c) {
          return R({}, Ju, a, c);
        }),
        Exception: N(function(a, c) {
          return R([], Ku, a, c);
        }),
        Layer: N(function(a, c) {
          return R({}, Lu, a, c);
        })
      }),
      Hu = Q(Gu, {
        Name: N(W),
        Title: N(W),
        Abstract: N(W),
        KeywordList: N(Eu),
        OnlineResource: N(pt),
        ContactInformation: N(function(a, c) {
          return R({}, Mu, a, c);
        }),
        Fees: N(W),
        AccessConstraints: N(W),
        LayerLimit: N(Sp),
        MaxWidth: N(Sp),
        MaxHeight: N(Sp)
      }),
      Mu = Q(Gu, {
        ContactPersonPrimary: N(function(a, c) {
          return R({}, Nu, a, c);
        }),
        ContactPosition: N(W),
        ContactAddress: N(function(a, c) {
          return R({}, Ou, a, c);
        }),
        ContactVoiceTelephone: N(W),
        ContactFacsimileTelephone: N(W),
        ContactElectronicMailAddress: N(W)
      }),
      Nu = Q(Gu, {
        ContactPerson: N(W),
        ContactOrganization: N(W)
      }),
      Ou = Q(Gu, {
        AddressType: N(W),
        Address: N(W),
        City: N(W),
        StateOrProvince: N(W),
        PostCode: N(W),
        Country: N(W)
      }),
      Ku = Q(Gu, {Format: Em(W)}),
      Lu = Q(Gu, {
        Name: N(W),
        Title: N(W),
        Abstract: N(W),
        KeywordList: N(Eu),
        CRS: Gm(W),
        EX_GeographicBoundingBox: N(function(a, c) {
          var d = R({}, Pu, a, c);
          if (d) {
            var e = d.westBoundLongitude,
                f = d.southBoundLatitude,
                g = d.eastBoundLongitude,
                d = d.northBoundLatitude;
            return void 0 === e || void 0 === f || void 0 === g || void 0 === d ? void 0 : [e, f, g, d];
          }
        }),
        BoundingBox: Gm(function(a) {
          var c = [Rp(a.getAttribute("minx")), Rp(a.getAttribute("miny")), Rp(a.getAttribute("maxx")), Rp(a.getAttribute("maxy"))],
              d = [Rp(a.getAttribute("resx")), Rp(a.getAttribute("resy"))];
          return {
            crs: a.getAttribute("CRS"),
            extent: c,
            res: d
          };
        }),
        Dimension: Gm(function(a) {
          return {
            name: a.getAttribute("name"),
            units: a.getAttribute("units"),
            unitSymbol: a.getAttribute("unitSymbol"),
            "default": a.getAttribute("default"),
            multipleValues: Op(a.getAttribute("multipleValues")),
            nearestValue: Op(a.getAttribute("nearestValue")),
            current: Op(a.getAttribute("current")),
            values: W(a)
          };
        }),
        Attribution: N(function(a, c) {
          return R({}, Qu, a, c);
        }),
        AuthorityURL: Gm(function(a, c) {
          var d = zu(a, c);
          if (d)
            return d.name = a.getAttribute("name"), d;
        }),
        Identifier: Gm(W),
        MetadataURL: Gm(function(a, c) {
          var d = zu(a, c);
          if (d)
            return d.type = a.getAttribute("type"), d;
        }),
        DataURL: Gm(zu),
        FeatureListURL: Gm(zu),
        Style: Gm(function(a, c) {
          return R({}, Ru, a, c);
        }),
        MinScaleDenominator: N(Qp),
        MaxScaleDenominator: N(Qp),
        Layer: Gm(function(a, c) {
          var d = c[c.length - 1],
              e = R({}, Lu, a, c);
          if (e) {
            var f = Op(a.getAttribute("queryable"));
            void 0 === f && (f = d.queryable);
            e.queryable = void 0 !== f ? f : !1;
            f = Tp(a.getAttribute("cascaded"));
            void 0 === f && (f = d.cascaded);
            e.cascaded = f;
            f = Op(a.getAttribute("opaque"));
            void 0 === f && (f = d.opaque);
            e.opaque = void 0 !== f ? f : !1;
            f = Op(a.getAttribute("noSubsets"));
            void 0 === f && (f = d.noSubsets);
            e.noSubsets = void 0 !== f ? f : !1;
            (f = Rp(a.getAttribute("fixedWidth"))) || (f = d.fixedWidth);
            e.fixedWidth = f;
            (f = Rp(a.getAttribute("fixedHeight"))) || (f = d.fixedHeight);
            e.fixedHeight = f;
            ["Style", "CRS", "AuthorityURL"].forEach(function(a) {
              a in d && (e[a] = (e[a] || []).concat(d[a]));
            });
            "EX_GeographicBoundingBox BoundingBox Dimension Attribution MinScaleDenominator MaxScaleDenominator".split(" ").forEach(function(a) {
              a in e || (e[a] = d[a]);
            });
            return e;
          }
        })
      }),
      Qu = Q(Gu, {
        Title: N(W),
        OnlineResource: N(pt),
        LogoURL: N(Du)
      }),
      Pu = Q(Gu, {
        westBoundLongitude: N(Qp),
        eastBoundLongitude: N(Qp),
        southBoundLatitude: N(Qp),
        northBoundLatitude: N(Qp)
      }),
      Ju = Q(Gu, {
        GetCapabilities: N(Bu),
        GetMap: N(Bu),
        GetFeatureInfo: N(Bu)
      }),
      Cu = Q(Gu, {
        Format: Gm(W),
        DCPType: Gm(function(a, c) {
          return R({}, Su, a, c);
        })
      }),
      Su = Q(Gu, {HTTP: N(function(a, c) {
          return R({}, Tu, a, c);
        })}),
      Tu = Q(Gu, {
        Get: N(zu),
        Post: N(zu)
      }),
      Ru = Q(Gu, {
        Name: N(W),
        Title: N(W),
        Abstract: N(W),
        LegendURL: Gm(Du),
        StyleSheetURL: N(zu),
        StyleURL: N(zu)
      }),
      Au = Q(Gu, {
        Format: N(W),
        OnlineResource: N(pt)
      }),
      Fu = Q(Gu, {Keyword: Em(W)});
  function Uu(a) {
    a = a ? a : {};
    this.g = "http://mapserver.gis.umn.edu/mapserver";
    this.b = new Yp;
    this.f = a.layers ? a.layers : null;
    this.defaultDataProjection = null;
  }
  y(Uu, Ip);
  Uu.prototype.ic = function(a, c) {
    var d = {
      featureType: this.featureType,
      featureNS: this.featureNS
    };
    c && mb(d, ep(this, a, c));
    var e = [d];
    a.setAttribute("namespaceURI", this.g);
    var f = mm(a),
        d = [];
    if (0 !== a.childNodes.length) {
      if ("msGMLOutput" == f)
        for (var g = 0,
            h = a.childNodes.length; g < h; g++) {
          var k = a.childNodes[g];
          if (1 === k.nodeType) {
            var m = e[0],
                n = k.localName.replace("_layer", "");
            if (!this.f || Va(this.f, n)) {
              n = n + "_feature";
              m.featureType = n;
              m.featureNS = this.g;
              var p = {};
              p[n] = Em(this.b.zf, this.b);
              m = Q([m.featureNS, null], p);
              k.setAttribute("namespaceURI", this.g);
              (k = R([], m, k, e, this.b)) && Ya(d, k);
            }
          }
        }
      "FeatureCollection" == f && (e = R([], this.b.b, a, [{}], this.b)) && (d = e);
    }
    return d;
  };
  function Vu() {
    this.g = new rt;
  }
  y(Vu, qt);
  Vu.prototype.a = function(a) {
    for (a = a.firstChild; a; a = a.nextSibling)
      if (1 == a.nodeType)
        return this.b(a);
    return null;
  };
  Vu.prototype.b = function(a) {
    this.version = a.getAttribute("version").trim();
    var c = this.g.b(a);
    if (!c)
      return null;
    c.version = this.version;
    return (c = R(c, Wu, a, [])) ? c : null;
  };
  function Xu(a) {
    var c = W(a).split(" ");
    if (c && 2 == c.length)
      return a = +c[0], c = +c[1], isNaN(a) || isNaN(c) ? void 0 : [a, c];
  }
  var Yu = [null, "http://www.opengis.net/wmts/1.0"],
      Zu = [null, "http://www.opengis.net/ows/1.1"],
      Wu = Q(Yu, {Contents: N(function(a, c) {
          return R({}, $u, a, c);
        })}),
      $u = Q(Yu, {
        Layer: Gm(function(a, c) {
          return R({}, av, a, c);
        }),
        TileMatrixSet: Gm(function(a, c) {
          return R({}, bv, a, c);
        })
      }),
      av = Q(Yu, {
        Style: Gm(function(a, c) {
          var d = R({}, cv, a, c);
          if (d) {
            var e = "true" === a.getAttribute("isDefault");
            d.isDefault = e;
            return d;
          }
        }),
        Format: Gm(W),
        TileMatrixSetLink: Gm(function(a, c) {
          return R({}, dv, a, c);
        }),
        Dimension: Gm(function(a, c) {
          return R({}, ev, a, c);
        }),
        ResourceURL: Gm(function(a) {
          var c = a.getAttribute("format"),
              d = a.getAttribute("template");
          a = a.getAttribute("resourceType");
          var e = {};
          c && (e.format = c);
          d && (e.template = d);
          a && (e.resourceType = a);
          return e;
        })
      }, Q(Zu, {
        Title: N(W),
        Abstract: N(W),
        WGS84BoundingBox: N(function(a, c) {
          var d = R([], fv, a, c);
          return 2 != d.length ? void 0 : xc(d);
        }),
        Identifier: N(W)
      })),
      cv = Q(Yu, {LegendURL: Gm(function(a) {
          var c = {};
          c.format = a.getAttribute("format");
          c.href = pt(a);
          return c;
        })}, Q(Zu, {
        Title: N(W),
        Identifier: N(W)
      })),
      dv = Q(Yu, {TileMatrixSet: N(W)}),
      ev = Q(Yu, {
        Default: N(W),
        Value: Gm(W)
      }, Q(Zu, {Identifier: N(W)})),
      fv = Q(Zu, {
        LowerCorner: Em(Xu),
        UpperCorner: Em(Xu)
      }),
      bv = Q(Yu, {
        WellKnownScaleSet: N(W),
        TileMatrix: Gm(function(a, c) {
          return R({}, gv, a, c);
        })
      }, Q(Zu, {
        SupportedCRS: N(W),
        Identifier: N(W)
      })),
      gv = Q(Yu, {
        TopLeftCorner: N(Xu),
        ScaleDenominator: N(Qp),
        TileWidth: N(Sp),
        TileHeight: N(Sp),
        MatrixWidth: N(Sp),
        MatrixHeight: N(Sp)
      }, Q(Zu, {Identifier: N(W)}));
  function hv(a) {
    Mb.call(this);
    a = a || {};
    this.a = null;
    this.c = Jd;
    this.f = void 0;
    D(this, Ob("projection"), this.pl, this);
    D(this, Ob("tracking"), this.ql, this);
    void 0 !== a.projection && this.Sg(qd(a.projection));
    void 0 !== a.trackingOptions && this.$h(a.trackingOptions);
    this.ge(void 0 !== a.tracking ? a.tracking : !1);
  }
  y(hv, Mb);
  l = hv.prototype;
  l.fa = function() {
    this.ge(!1);
    hv.ha.fa.call(this);
  };
  l.pl = function() {
    var a = this.Qg();
    a && (this.c = ud(qd("EPSG:4326"), a), this.a && this.set("position", this.c(this.a)));
  };
  l.ql = function() {
    if (Dh) {
      var a = this.Rg();
      a && void 0 === this.f ? this.f = aa.navigator.geolocation.watchPosition(this.Gn.bind(this), this.Hn.bind(this), this.Cg()) : a || void 0 === this.f || (aa.navigator.geolocation.clearWatch(this.f), this.f = void 0);
    }
  };
  l.Gn = function(a) {
    a = a.coords;
    this.set("accuracy", a.accuracy);
    this.set("altitude", null === a.altitude ? void 0 : a.altitude);
    this.set("altitudeAccuracy", null === a.altitudeAccuracy ? void 0 : a.altitudeAccuracy);
    this.set("heading", null === a.heading ? void 0 : Ra(a.heading));
    this.a ? (this.a[0] = a.longitude, this.a[1] = a.latitude) : this.a = [a.longitude, a.latitude];
    var c = this.c(this.a);
    this.set("position", c);
    this.set("speed", null === a.speed ? void 0 : a.speed);
    a = te(qk, this.a, a.accuracy);
    a.Hc(this.c);
    this.set("accuracyGeometry", a);
    this.u();
  };
  l.Hn = function(a) {
    a.type = "error";
    this.ge(!1);
    this.b(a);
  };
  l.sj = function() {
    return this.get("accuracy");
  };
  l.tj = function() {
    return this.get("accuracyGeometry") || null;
  };
  l.vj = function() {
    return this.get("altitude");
  };
  l.wj = function() {
    return this.get("altitudeAccuracy");
  };
  l.nl = function() {
    return this.get("heading");
  };
  l.ol = function() {
    return this.get("position");
  };
  l.Qg = function() {
    return this.get("projection");
  };
  l.ak = function() {
    return this.get("speed");
  };
  l.Rg = function() {
    return this.get("tracking");
  };
  l.Cg = function() {
    return this.get("trackingOptions");
  };
  l.Sg = function(a) {
    this.set("projection", a);
  };
  l.ge = function(a) {
    this.set("tracking", a);
  };
  l.$h = function(a) {
    this.set("trackingOptions", a);
  };
  function iv(a, c, d) {
    Od.call(this);
    this.Lf(a, c ? c : 0, d);
  }
  y(iv, Od);
  l = iv.prototype;
  l.clone = function() {
    var a = new iv(null),
        c = this.v.slice();
    Qd(a, this.f, c);
    a.u();
    return a;
  };
  l.sb = function(a, c, d, e) {
    var f = this.v;
    a -= f[0];
    var g = c - f[1];
    c = a * a + g * g;
    if (c < e) {
      if (0 === c)
        for (e = 0; e < this.a; ++e)
          d[e] = f[e];
      else
        for (e = this.nf() / Math.sqrt(c), d[0] = f[0] + e * a, d[1] = f[1] + e * g, e = 2; e < this.a; ++e)
          d[e] = f[e];
      d.length = this.a;
      return c;
    }
    return e;
  };
  l.xc = function(a, c) {
    var d = this.v,
        e = a - d[0],
        d = c - d[1];
    return e * e + d * d <= jv(this);
  };
  l.vd = function() {
    return this.v.slice(0, this.a);
  };
  l.Pd = function(a) {
    var c = this.v,
        d = c[this.a] - c[0];
    return Ic(c[0] - d, c[1] - d, c[0] + d, c[1] + d, a);
  };
  l.nf = function() {
    return Math.sqrt(jv(this));
  };
  function jv(a) {
    var c = a.v[a.a] - a.v[0];
    a = a.v[a.a + 1] - a.v[1];
    return c * c + a * a;
  }
  l.W = function() {
    return "Circle";
  };
  l.Ia = function(a) {
    var c = this.G();
    return ad(a, c) ? (c = this.vd(), a[0] <= c[0] && a[2] >= c[0] || a[1] <= c[1] && a[3] >= c[1] ? !0 : Oc(a, this.ig, this)) : !1;
  };
  l.Kl = function(a) {
    var c = this.a,
        d = this.v[c] - this.v[0],
        e = a.slice();
    e[c] = e[0] + d;
    for (d = 1; d < c; ++d)
      e[c + d] = a[d];
    Qd(this, this.f, e);
    this.u();
  };
  l.Lf = function(a, c, d) {
    if (a) {
      Rd(this, d, a, 0);
      this.v || (this.v = []);
      d = this.v;
      a = Zd(d, a);
      d[a++] = d[0] + c;
      var e;
      c = 1;
      for (e = this.a; c < e; ++c)
        d[a++] = d[c];
      d.length = a;
    } else
      Qd(this, "XY", null);
    this.u();
  };
  l.Ll = function(a) {
    this.v[this.a] = this.v[0] + a;
    this.u();
  };
  function kv(a, c, d) {
    for (var e = [],
        f = a(0),
        g = a(1),
        h = c(f),
        k = c(g),
        m = [g, f],
        n = [k, h],
        p = [1, 0],
        q = {},
        r = 1E5,
        t,
        v,
        w,
        z,
        C; 0 < --r && 0 < p.length; )
      w = p.pop(), f = m.pop(), h = n.pop(), g = w.toString(), g in q || (e.push(h[0], h[1]), q[g] = !0), z = p.pop(), g = m.pop(), k = n.pop(), C = (w + z) / 2, t = a(C), v = c(t), Oa(v[0], v[1], h[0], h[1], k[0], k[1]) < d ? (e.push(k[0], k[1]), g = z.toString(), q[g] = !0) : (p.push(z, C, C, w), n.push(k, v, v, h), m.push(g, t, t, f));
    return e;
  }
  function lv(a, c, d, e, f) {
    var g = qd("EPSG:4326");
    return kv(function(e) {
      return [a, c + (d - c) * e];
    }, Id(g, e), f);
  }
  function mv(a, c, d, e, f) {
    var g = qd("EPSG:4326");
    return kv(function(e) {
      return [c + (d - c) * e, a];
    }, Id(g, e), f);
  }
  ;
  function nv(a) {
    a = a || {};
    this.c = this.l = null;
    this.g = this.i = Infinity;
    this.f = this.j = -Infinity;
    this.B = this.T = Infinity;
    this.D = this.J = -Infinity;
    this.ua = void 0 !== a.targetSize ? a.targetSize : 100;
    this.H = void 0 !== a.maxLines ? a.maxLines : 100;
    this.b = [];
    this.a = [];
    this.ta = void 0 !== a.strokeStyle ? a.strokeStyle : ov;
    this.A = this.o = void 0;
    this.s = null;
    this.setMap(void 0 !== a.map ? a.map : null);
  }
  var ov = new Gk({color: "rgba(0,0,0,0.2)"}),
      pv = [90, 45, 30, 20, 10, 5, 2, 1, .5, .2, .1, .05, .01, .005, .002, .001];
  function qv(a, c, d, e, f, g, h) {
    var k = h;
    c = lv(c, d, e, a.c, f);
    k = void 0 !== a.b[k] ? a.b[k] : new T(null);
    k.ba("XY", c);
    ad(k.G(), g) && (a.b[h++] = k);
    return h;
  }
  function rv(a, c, d, e, f) {
    var g = f;
    c = mv(c, a.f, a.g, a.c, d);
    g = void 0 !== a.a[g] ? a.a[g] : new T(null);
    g.ba("XY", c);
    ad(g.G(), e) && (a.a[f++] = g);
    return f;
  }
  l = nv.prototype;
  l.rl = function() {
    return this.l;
  };
  l.Oj = function() {
    return this.b;
  };
  l.Vj = function() {
    return this.a;
  };
  l.Hg = function(a) {
    var c = a.vectorContext,
        d = a.frameState,
        e = d.extent;
    a = d.viewState;
    var f = a.center,
        g = a.projection,
        h = a.resolution;
    a = d.pixelRatio;
    a = h * h / (4 * a * a);
    if (!this.c || !Hd(this.c, g)) {
      var k = qd("EPSG:4326"),
          m = g.G(),
          n = g.i,
          p = Ld(n, k, g),
          q = n[2],
          r = n[1],
          t = n[0],
          v = p[3],
          w = p[2],
          z = p[1],
          p = p[0];
      this.i = n[3];
      this.g = q;
      this.j = r;
      this.f = t;
      this.T = v;
      this.B = w;
      this.J = z;
      this.D = p;
      this.o = Id(k, g);
      this.A = Id(g, k);
      this.s = this.A(Yc(m));
      this.c = g;
    }
    k = 0;
    g.b && (g = g.G(), k = Wc(g), d = d.focus[0], d < g[0] || d > g[2]) && (k *= Math.ceil((g[0] - d) / k), e = [e[0] + k, e[1], e[2] + k, e[3]]);
    d = this.s[0];
    g = this.s[1];
    k = -1;
    n = Math.pow(this.ua * h, 2);
    q = [];
    r = [];
    h = 0;
    for (m = pv.length; h < m; ++h) {
      t = pv[h] / 2;
      q[0] = d - t;
      q[1] = g - t;
      r[0] = d + t;
      r[1] = g + t;
      this.o(q, q);
      this.o(r, r);
      t = Math.pow(r[0] - q[0], 2) + Math.pow(r[1] - q[1], 2);
      if (t <= n)
        break;
      k = pv[h];
    }
    h = k;
    if (-1 == h)
      this.b.length = this.a.length = 0;
    else {
      d = this.A(f);
      f = d[0];
      d = d[1];
      g = this.H;
      k = [Math.max(e[0], this.D), Math.max(e[1], this.J), Math.min(e[2], this.B), Math.min(e[3], this.T)];
      k = Ld(k, this.c, "EPSG:4326");
      n = k[3];
      r = k[1];
      f = Math.floor(f / h) * h;
      q = Ma(f, this.f, this.g);
      m = qv(this, q, r, n, a, e, 0);
      for (k = 0; q != this.f && k++ < g; )
        q = Math.max(q - h, this.f), m = qv(this, q, r, n, a, e, m);
      q = Ma(f, this.f, this.g);
      for (k = 0; q != this.g && k++ < g; )
        q = Math.min(q + h, this.g), m = qv(this, q, r, n, a, e, m);
      this.b.length = m;
      d = Math.floor(d / h) * h;
      f = Ma(d, this.j, this.i);
      m = rv(this, f, a, e, 0);
      for (k = 0; f != this.j && k++ < g; )
        f = Math.max(f - h, this.j), m = rv(this, f, a, e, m);
      f = Ma(d, this.j, this.i);
      for (k = 0; f != this.i && k++ < g; )
        f = Math.min(f + h, this.i), m = rv(this, f, a, e, m);
      this.a.length = m;
    }
    c.hb(null, this.ta);
    a = 0;
    for (f = this.b.length; a < f; ++a)
      h = this.b[a], c.Xb(h, null);
    a = 0;
    for (f = this.a.length; a < f; ++a)
      h = this.a[a], c.Xb(h, null);
  };
  l.setMap = function(a) {
    this.l && (this.l.K("postcompose", this.Hg, this), this.l.render());
    a && (a.I("postcompose", this.Hg, this), a.render());
    this.l = a;
  };
  function sv(a, c, d, e, f, g, h) {
    Hi.call(this, a, c, d, 0, e);
    this.l = f;
    this.g = new Image;
    null !== g && (this.g.crossOrigin = g);
    this.i = {};
    this.c = null;
    this.state = 0;
    this.j = h;
  }
  y(sv, Hi);
  sv.prototype.a = function(a) {
    if (void 0 !== a) {
      var c;
      a = x(a);
      if (a in this.i)
        return this.i[a];
      pb(this.i) ? c = this.g : c = this.g.cloneNode(!1);
      return this.i[a] = c;
    }
    return this.g;
  };
  sv.prototype.s = function() {
    this.state = 3;
    this.c.forEach(sb);
    this.c = null;
    Ii(this);
  };
  sv.prototype.A = function() {
    void 0 === this.resolution && (this.resolution = Xc(this.extent) / this.g.height);
    this.state = 2;
    this.c.forEach(sb);
    this.c = null;
    Ii(this);
  };
  sv.prototype.load = function() {
    0 == this.state && (this.state = 1, Ii(this), this.c = [xb(this.g, "error", this.s, this), xb(this.g, "load", this.A, this)], this.j(this, this.l));
  };
  function tv(a, c, d, e, f) {
    pg.call(this, a, c);
    this.l = d;
    this.g = new Image;
    null !== e && (this.g.crossOrigin = e);
    this.c = {};
    this.j = null;
    this.o = f;
  }
  y(tv, pg);
  l = tv.prototype;
  l.fa = function() {
    1 == this.state && uv(this);
    this.a && Db(this.a);
    tv.ha.fa.call(this);
  };
  l.cb = function(a) {
    if (void 0 !== a) {
      var c = x(a);
      if (c in this.c)
        return this.c[c];
      a = pb(this.c) ? this.g : this.g.cloneNode(!1);
      return this.c[c] = a;
    }
    return this.g;
  };
  l.eb = function() {
    return this.l;
  };
  l.sl = function() {
    this.state = 3;
    uv(this);
    qg(this);
  };
  l.tl = function() {
    this.state = this.g.naturalWidth && this.g.naturalHeight ? 2 : 4;
    uv(this);
    qg(this);
  };
  l.load = function() {
    0 == this.state && (this.state = 1, qg(this), this.j = [xb(this.g, "error", this.sl, this), xb(this.g, "load", this.tl, this)], this.o(this, this.l));
  };
  function uv(a) {
    a.j.forEach(sb);
    a.j = null;
  }
  ;
  function vv(a) {
    a = a ? a : {};
    nj.call(this, {handleEvent: fd});
    this.c = a.formatConstructors ? a.formatConstructors : [];
    this.o = a.projection ? qd(a.projection) : null;
    this.a = null;
    this.target = a.target ? a.target : null;
  }
  y(vv, nj);
  function wv(a) {
    a = a.dataTransfer.files;
    var c,
        d,
        e;
    c = 0;
    for (d = a.length; c < d; ++c) {
      e = a.item(c);
      var f = new FileReader;
      f.addEventListener("load", qa(this.l, e).bind(this));
      f.readAsText(e);
    }
  }
  function xv(a) {
    a.stopPropagation();
    a.preventDefault();
    a.dataTransfer.dropEffect = "copy";
  }
  vv.prototype.l = function(a, c) {
    var d = c.target.result,
        e = this.A,
        f = this.o;
    f || (f = e.$().i);
    var e = this.c,
        g = [],
        h,
        k;
    h = 0;
    for (k = e.length; h < k; ++h) {
      var m = new e[h];
      var n = {featureProjection: f};
      try {
        g = m.Ea(d, n);
      } catch (p) {
        g = null;
      }
      if (g && 0 < g.length)
        break;
    }
    this.b(new yv(zv, this, a, g, f));
  };
  vv.prototype.setMap = function(a) {
    this.a && (this.a.forEach(sb), this.a = null);
    vv.ha.setMap.call(this, a);
    a && (a = this.target ? this.target : a.a, this.a = [D(a, "drop", wv, this), D(a, "dragenter", xv, this), D(a, "dragover", xv, this), D(a, "drop", xv, this)]);
  };
  var zv = "addfeatures";
  function yv(a, c, d, e, f) {
    Eb.call(this, a, c);
    this.features = e;
    this.file = d;
    this.projection = f;
  }
  y(yv, Eb);
  function Av(a, c) {
    this.x = a;
    this.y = c;
  }
  y(Av, wf);
  Av.prototype.clone = function() {
    return new Av(this.x, this.y);
  };
  Av.prototype.scale = wf.prototype.scale;
  Av.prototype.rotate = function(a) {
    var c = Math.cos(a);
    a = Math.sin(a);
    var d = this.y * c + this.x * a;
    this.x = this.x * c - this.y * a;
    this.y = d;
    return this;
  };
  function Bv(a) {
    a = a ? a : {};
    Bj.call(this, {
      handleDownEvent: Cv,
      handleDragEvent: Dv,
      handleUpEvent: Ev
    });
    this.s = a.condition ? a.condition : yj;
    this.a = this.c = void 0;
    this.o = 0;
    this.B = void 0 !== a.duration ? a.duration : 400;
  }
  y(Bv, Bj);
  function Dv(a) {
    if (Aj(a)) {
      var c = a.map,
          d = c.Va();
      a = a.pixel;
      a = new Av(a[0] - d[0] / 2, d[1] / 2 - a[1]);
      d = Math.atan2(a.y, a.x);
      a = Math.sqrt(a.x * a.x + a.y * a.y);
      var e = c.$();
      c.render();
      if (void 0 !== this.c) {
        var f = d - this.c;
        oj(c, e, e.Ka() - f);
      }
      this.c = d;
      void 0 !== this.a && (d = this.a * (e.Z() / a), qj(c, e, d));
      void 0 !== this.a && (this.o = this.a / a);
      this.a = a;
    }
  }
  function Ev(a) {
    if (!Aj(a))
      return !0;
    a = a.map;
    var c = a.$();
    Be(c, -1);
    var d = this.o - 1,
        e = c.Ka(),
        e = c.constrainRotation(e, 0);
    oj(a, c, e, void 0, void 0);
    var e = c.Z(),
        f = this.B,
        e = c.constrainResolution(e, 0, d);
    qj(a, c, e, void 0, f);
    this.o = 0;
    return !1;
  }
  function Cv(a) {
    return Aj(a) && this.s(a) ? (Be(a.map.$(), 1), this.a = this.c = void 0, !0) : !1;
  }
  ;
  function Fv(a, c) {
    Eb.call(this, a);
    this.feature = c;
  }
  y(Fv, Eb);
  function Gv(a) {
    Bj.call(this, {
      handleDownEvent: Hv,
      handleEvent: Iv,
      handleUpEvent: Jv
    });
    this.wa = null;
    this.U = !1;
    this.oc = a.source ? a.source : null;
    this.Fb = a.features ? a.features : null;
    this.aj = a.snapTolerance ? a.snapTolerance : 12;
    this.aa = a.type;
    this.c = Kv(this.aa);
    this.qb = a.minPoints ? a.minPoints : this.c === Lv ? 3 : 2;
    this.ya = a.maxPoints ? a.maxPoints : Infinity;
    var c = a.geometryFunction;
    if (!c)
      if ("Circle" === this.aa)
        c = function(a, c) {
          var d = c ? c : new iv([NaN, NaN]);
          d.Lf(a[0], Math.sqrt(hc(a[0], a[1])));
          return d;
        };
      else {
        var d,
            c = this.c;
        c === Mv ? d = E : c === Nv ? d = T : c === Lv && (d = F);
        c = function(a, c) {
          var g = c;
          g ? g.la(a) : g = new d(a);
          return g;
        };
      }
    this.D = c;
    this.S = this.B = this.a = this.H = this.o = this.s = null;
    this.jj = a.clickTolerance ? a.clickTolerance * a.clickTolerance : 36;
    this.na = new H({
      source: new bn({
        useSpatialIndex: !1,
        wrapX: a.wrapX ? a.wrapX : !1
      }),
      style: a.style ? a.style : Ov()
    });
    this.nc = a.geometryName;
    this.ti = a.condition ? a.condition : xj;
    this.oa = a.freehandCondition ? a.freehandCondition : yj;
    D(this, Ob("active"), this.ei, this);
  }
  y(Gv, Bj);
  function Ov() {
    var a = Pk();
    return function(c) {
      return a[c.X().W()];
    };
  }
  l = Gv.prototype;
  l.setMap = function(a) {
    Gv.ha.setMap.call(this, a);
    this.ei();
  };
  function Iv(a) {
    var c = !this.U;
    this.U && a.type === zi ? (Pv(this, a), c = !1) : a.type === yi ? c = Qv(this, a) : a.type === si && (c = !1);
    return Cj.call(this, a) && c;
  }
  function Hv(a) {
    if (this.ti(a))
      return this.wa = a.pixel, !0;
    if (this.c !== Nv && this.c !== Lv || !this.oa(a))
      return !1;
    this.wa = a.pixel;
    this.U = !0;
    this.s || Rv(this, a);
    return !0;
  }
  function Jv(a) {
    this.U = !1;
    var c = this.wa,
        d = a.pixel,
        e = c[0] - d[0],
        c = c[1] - d[1],
        d = !0;
    e * e + c * c <= this.jj && (Qv(this, a), this.s ? this.c === Sv ? this.md() : Tv(this, a) ? this.md() : Pv(this, a) : (Rv(this, a), this.c === Mv && this.md()), d = !1);
    return d;
  }
  function Qv(a, c) {
    if (a.s) {
      var d = c.coordinate,
          e = a.o.X(),
          f;
      a.c === Mv ? f = a.a : a.c === Lv ? (f = a.a[0], f = f[f.length - 1], Tv(a, c) && (d = a.s.slice())) : (f = a.a, f = f[f.length - 1]);
      f[0] = d[0];
      f[1] = d[1];
      a.D(a.a, e);
      a.H && a.H.X().la(d);
      e instanceof F && a.c !== Lv ? (a.B || (a.B = new Xl(new T(null))), e = e.xg(0), d = a.B.X(), d.ba(e.f, e.ga())) : a.S && (d = a.B.X(), d.la(a.S));
      Uv(a);
    } else
      d = c.coordinate.slice(), a.H ? a.H.X().la(d) : (a.H = new Xl(new E(d)), Uv(a));
    return !0;
  }
  function Tv(a, c) {
    var d = !1;
    if (a.o) {
      var e = !1,
          f = [a.s];
      a.c === Nv ? e = a.a.length > a.qb : a.c === Lv && (e = a.a[0].length > a.qb, f = [a.a[0][0], a.a[0][a.a[0].length - 2]]);
      if (e)
        for (var e = c.map,
            g = 0,
            h = f.length; g < h; g++) {
          var k = f[g],
              m = e.Ta(k),
              n = c.pixel,
              d = n[0] - m[0],
              m = n[1] - m[1],
              n = a.U && a.oa(c) ? 1 : a.aj;
          if (d = Math.sqrt(d * d + m * m) <= n) {
            a.s = k;
            break;
          }
        }
    }
    return d;
  }
  function Rv(a, c) {
    var d = c.coordinate;
    a.s = d;
    a.c === Mv ? a.a = d.slice() : a.c === Lv ? (a.a = [[d.slice(), d.slice()]], a.S = a.a[0]) : (a.a = [d.slice(), d.slice()], a.c === Sv && (a.S = a.a));
    a.S && (a.B = new Xl(new T(a.S)));
    d = a.D(a.a);
    a.o = new Xl;
    a.nc && a.o.Bc(a.nc);
    a.o.Pa(d);
    Uv(a);
    a.b(new Fv("drawstart", a.o));
  }
  function Pv(a, c) {
    var d = c.coordinate,
        e = a.o.X(),
        f,
        g;
    if (a.c === Nv)
      a.s = d.slice(), g = a.a, g.push(d.slice()), f = g.length > a.ya, a.D(g, e);
    else if (a.c === Lv) {
      g = a.a[0];
      g.push(d.slice());
      if (f = g.length > a.ya)
        a.s = g[0];
      a.D(a.a, e);
    }
    Uv(a);
    f && a.md();
  }
  l.ho = function() {
    var a = this.o.X(),
        c,
        d;
    this.c === Nv ? (c = this.a, c.splice(-2, 1), this.D(c, a)) : this.c === Lv && (c = this.a[0], c.splice(-2, 1), d = this.B.X(), d.la(c), this.D(this.a, a));
    0 === c.length && (this.s = null);
    Uv(this);
  };
  l.md = function() {
    var a = Vv(this),
        c = this.a,
        d = a.X();
    this.c === Nv ? (c.pop(), this.D(c, d)) : this.c === Lv && (c[0].pop(), c[0].push(c[0][0]), this.D(c, d));
    "MultiPoint" === this.aa ? a.Pa(new pp([c])) : "MultiLineString" === this.aa ? a.Pa(new U([c])) : "MultiPolygon" === this.aa && a.Pa(new V([c]));
    this.b(new Fv("drawend", a));
    this.Fb && this.Fb.push(a);
    this.oc && this.oc.rb(a);
  };
  function Vv(a) {
    a.s = null;
    var c = a.o;
    c && (a.o = null, a.H = null, a.B = null, a.na.da().clear(!0));
    return c;
  }
  l.Sl = function(a) {
    var c = a.X();
    this.o = a;
    this.a = c.Y();
    a = this.a[this.a.length - 1];
    this.s = a.slice();
    this.a.push(a.slice());
    Uv(this);
    this.b(new Fv("drawstart", this.o));
  };
  l.Dc = ed;
  function Uv(a) {
    var c = [];
    a.o && c.push(a.o);
    a.B && c.push(a.B);
    a.H && c.push(a.H);
    a = a.na.da();
    a.clear(!0);
    a.Gc(c);
  }
  l.ei = function() {
    var a = this.A,
        c = this.f();
    a && c || Vv(this);
    this.na.setMap(c ? a : null);
  };
  function Kv(a) {
    var c;
    "Point" === a || "MultiPoint" === a ? c = Mv : "LineString" === a || "MultiLineString" === a ? c = Nv : "Polygon" === a || "MultiPolygon" === a ? c = Lv : "Circle" === a && (c = Sv);
    return c;
  }
  var Mv = "Point",
      Nv = "LineString",
      Lv = "Polygon",
      Sv = "Circle";
  function Wv(a, c, d) {
    Eb.call(this, a);
    this.features = c;
    this.mapBrowserPointerEvent = d;
  }
  y(Wv, Eb);
  function Xv(a) {
    Bj.call(this, {
      handleDownEvent: Yv,
      handleDragEvent: Zv,
      handleEvent: $v,
      handleUpEvent: aw
    });
    this.ya = a.deleteCondition ? a.deleteCondition : jd(xj, wj);
    this.oa = this.c = null;
    this.wa = [0, 0];
    this.D = this.U = !1;
    this.a = new Wm;
    this.H = void 0 !== a.pixelTolerance ? a.pixelTolerance : 10;
    this.s = this.na = !1;
    this.o = null;
    this.S = new H({
      source: new bn({
        useSpatialIndex: !1,
        wrapX: !!a.wrapX
      }),
      style: a.style ? a.style : bw(),
      updateWhileAnimating: !0,
      updateWhileInteracting: !0
    });
    this.aa = {
      Point: this.Zl,
      LineString: this.Zg,
      LinearRing: this.Zg,
      Polygon: this.$l,
      MultiPoint: this.Xl,
      MultiLineString: this.Wl,
      MultiPolygon: this.Yl,
      GeometryCollection: this.Vl
    };
    this.B = a.features;
    this.B.forEach(this.pf, this);
    D(this.B, "add", this.Tl, this);
    D(this.B, "remove", this.Ul, this);
  }
  y(Xv, Bj);
  l = Xv.prototype;
  l.pf = function(a) {
    var c = a.X();
    c.W() in this.aa && this.aa[c.W()].call(this, a, c);
    (c = this.A) && cw(this, this.wa, c);
    D(a, "change", this.Yg, this);
  };
  function dw(a, c) {
    a.D || (a.D = !0, a.b(new Wv("modifystart", a.B, c)));
  }
  function ew(a, c) {
    fw(a, c);
    a.c && 0 === a.B.ac() && (a.S.da().nb(a.c), a.c = null);
    yb(c, "change", a.Yg, a);
  }
  function fw(a, c) {
    var d = a.a,
        e = [];
    d.forEach(function(a) {
      c === a.feature && e.push(a);
    });
    for (var f = e.length - 1; 0 <= f; --f)
      d.remove(e[f]);
  }
  l.setMap = function(a) {
    this.S.setMap(a);
    Xv.ha.setMap.call(this, a);
  };
  l.Tl = function(a) {
    this.pf(a.element);
  };
  l.Yg = function(a) {
    this.s || (a = a.target, ew(this, a), this.pf(a));
  };
  l.Ul = function(a) {
    ew(this, a.element);
  };
  l.Zl = function(a, c) {
    var d = c.Y(),
        d = {
          feature: a,
          geometry: c,
          ka: [d, d]
        };
    this.a.za(c.G(), d);
  };
  l.Xl = function(a, c) {
    var d = c.Y(),
        e,
        f,
        g;
    f = 0;
    for (g = d.length; f < g; ++f)
      e = d[f], e = {
        feature: a,
        geometry: c,
        depth: [f],
        index: f,
        ka: [e, e]
      }, this.a.za(c.G(), e);
  };
  l.Zg = function(a, c) {
    var d = c.Y(),
        e,
        f,
        g,
        h;
    e = 0;
    for (f = d.length - 1; e < f; ++e)
      g = d.slice(e, e + 2), h = {
        feature: a,
        geometry: c,
        index: e,
        ka: g
      }, this.a.za(xc(g), h);
  };
  l.Wl = function(a, c) {
    var d = c.Y(),
        e,
        f,
        g,
        h,
        k,
        m,
        n;
    h = 0;
    for (k = d.length; h < k; ++h)
      for (e = d[h], f = 0, g = e.length - 1; f < g; ++f)
        m = e.slice(f, f + 2), n = {
          feature: a,
          geometry: c,
          depth: [h],
          index: f,
          ka: m
        }, this.a.za(xc(m), n);
  };
  l.$l = function(a, c) {
    var d = c.Y(),
        e,
        f,
        g,
        h,
        k,
        m,
        n;
    h = 0;
    for (k = d.length; h < k; ++h)
      for (e = d[h], f = 0, g = e.length - 1; f < g; ++f)
        m = e.slice(f, f + 2), n = {
          feature: a,
          geometry: c,
          depth: [h],
          index: f,
          ka: m
        }, this.a.za(xc(m), n);
  };
  l.Yl = function(a, c) {
    var d = c.Y(),
        e,
        f,
        g,
        h,
        k,
        m,
        n,
        p,
        q,
        r;
    m = 0;
    for (n = d.length; m < n; ++m)
      for (p = d[m], h = 0, k = p.length; h < k; ++h)
        for (e = p[h], f = 0, g = e.length - 1; f < g; ++f)
          q = e.slice(f, f + 2), r = {
            feature: a,
            geometry: c,
            depth: [h, m],
            index: f,
            ka: q
          }, this.a.za(xc(q), r);
  };
  l.Vl = function(a, c) {
    var d,
        e = c.i;
    for (d = 0; d < e.length; ++d)
      this.aa[e[d].W()].call(this, a, e[d]);
  };
  function gw(a, c) {
    var d = a.c;
    d ? d.X().la(c) : (d = new Xl(new E(c)), a.c = d, a.S.da().rb(d));
  }
  function hw(a, c) {
    return a.index - c.index;
  }
  function Yv(a) {
    cw(this, a.pixel, a.map);
    this.o = [];
    this.D = !1;
    var c = this.c;
    if (c) {
      var d = [],
          c = c.X().Y(),
          e = xc([c]),
          e = Zm(this.a, e),
          f = {};
      e.sort(hw);
      for (var g = 0,
          h = e.length; g < h; ++g) {
        var k = e[g],
            m = k.ka,
            n = x(k.feature),
            p = k.depth;
        p && (n += "-" + p.join("-"));
        f[n] || (f[n] = Array(2));
        if (fc(m[0], c) && !f[n][0])
          this.o.push([k, 0]), f[n][0] = k;
        else if (fc(m[1], c) && !f[n][1]) {
          if ("LineString" !== k.geometry.W() && "MultiLineString" !== k.geometry.W() || !f[n][0] || 0 !== f[n][0].index)
            this.o.push([k, 1]), f[n][1] = k;
        } else
          x(m) in this.oa && !f[n][0] && !f[n][1] && d.push([k, c]);
      }
      d.length && dw(this, a);
      for (a = d.length - 1; 0 <= a; --a)
        this.Rk.apply(this, d[a]);
    }
    return !!this.c;
  }
  function Zv(a) {
    this.U = !1;
    dw(this, a);
    a = a.coordinate;
    for (var c = 0,
        d = this.o.length; c < d; ++c) {
      for (var e = this.o[c],
          f = e[0],
          g = f.depth,
          h = f.geometry,
          k = h.Y(),
          m = f.ka,
          e = e[1]; a.length < h.qa(); )
        a.push(0);
      switch (h.W()) {
        case "Point":
          k = a;
          m[0] = m[1] = a;
          break;
        case "MultiPoint":
          k[f.index] = a;
          m[0] = m[1] = a;
          break;
        case "LineString":
          k[f.index + e] = a;
          m[e] = a;
          break;
        case "MultiLineString":
          k[g[0]][f.index + e] = a;
          m[e] = a;
          break;
        case "Polygon":
          k[g[0]][f.index + e] = a;
          m[e] = a;
          break;
        case "MultiPolygon":
          k[g[1]][g[0]][f.index + e] = a, m[e] = a;
      }
      f = h;
      this.s = !0;
      f.la(k);
      this.s = !1;
    }
    gw(this, a);
  }
  function aw(a) {
    for (var c,
        d = this.o.length - 1; 0 <= d; --d)
      c = this.o[d][0], Xm(this.a, xc(c.ka), c);
    this.D && (this.b(new Wv("modifyend", this.B, a)), this.D = !1);
    return !1;
  }
  function $v(a) {
    if (!(a instanceof oi))
      return !0;
    var c;
    a.map.$().f.slice()[1] || a.type != yi || this.J || (this.wa = a.pixel, cw(this, a.pixel, a.map));
    if (this.c && this.ya(a))
      if (a.type == ti && this.U)
        c = !0;
      else {
        this.c.X();
        dw(this, a);
        c = this.o;
        var d = {},
            e,
            f,
            g,
            h,
            k,
            m,
            n,
            p,
            q;
        for (k = c.length - 1; 0 <= k; --k)
          if (g = c[k], p = g[0], h = p.geometry, f = h.Y(), q = x(p.feature), p.depth && (q += "-" + p.depth.join("-")), n = e = m = void 0, 0 === g[1] ? (e = p, m = p.index) : 1 == g[1] && (n = p, m = p.index + 1), q in d || (d[q] = [n, e, m]), g = d[q], void 0 !== n && (g[0] = n), void 0 !== e && (g[1] = e), void 0 !== g[0] && void 0 !== g[1]) {
            e = f;
            q = !1;
            n = m - 1;
            switch (h.W()) {
              case "MultiLineString":
                f[p.depth[0]].splice(m, 1);
                q = !0;
                break;
              case "LineString":
                f.splice(m, 1);
                q = !0;
                break;
              case "MultiPolygon":
                e = e[p.depth[1]];
              case "Polygon":
                e = e[p.depth[0]], 4 < e.length && (m == e.length - 1 && (m = 0), e.splice(m, 1), q = !0, 0 === m && (e.pop(), e.push(e[0]), n = e.length - 1));
            }
            q && (this.a.remove(g[0]), this.a.remove(g[1]), e = h, this.s = !0, e.la(f), this.s = !1, f = {
              depth: p.depth,
              feature: p.feature,
              geometry: p.geometry,
              index: n,
              ka: [g[0].ka[0], g[1].ka[1]]
            }, this.a.za(xc(f.ka), f), iw(this, h, m, p.depth, -1), this.c && (this.S.da().nb(this.c), this.c = null));
          }
        c = !0;
        this.b(new Wv("modifyend", this.B, a));
        this.D = !1;
      }
    a.type == ti && (this.U = !1);
    return Cj.call(this, a) && !c;
  }
  function cw(a, c, d) {
    function e(a, c) {
      return ic(f, a.ka) - ic(f, c.ka);
    }
    var f = d.La(c),
        g = d.La([c[0] - a.H, c[1] + a.H]),
        h = d.La([c[0] + a.H, c[1] - a.H]),
        g = xc([g, h]),
        g = Zm(a.a, g);
    if (0 < g.length) {
      g.sort(e);
      var h = g[0].ka,
          k = cc(f, h),
          m = d.Ta(k);
      if (Math.sqrt(hc(c, m)) <= a.H) {
        c = d.Ta(h[0]);
        d = d.Ta(h[1]);
        c = hc(m, c);
        d = hc(m, d);
        a.na = Math.sqrt(Math.min(c, d)) <= a.H;
        a.na && (k = c > d ? h[1] : h[0]);
        gw(a, k);
        d = {};
        d[x(h)] = !0;
        c = 1;
        for (m = g.length; c < m; ++c)
          if (k = g[c].ka, fc(h[0], k[0]) && fc(h[1], k[1]) || fc(h[0], k[1]) && fc(h[1], k[0]))
            d[x(k)] = !0;
          else
            break;
        a.oa = d;
        return;
      }
    }
    a.c && (a.S.da().nb(a.c), a.c = null);
  }
  l.Rk = function(a, c) {
    for (var d = a.ka,
        e = a.feature,
        f = a.geometry,
        g = a.depth,
        h = a.index,
        k; c.length < f.qa(); )
      c.push(0);
    switch (f.W()) {
      case "MultiLineString":
        k = f.Y();
        k[g[0]].splice(h + 1, 0, c);
        break;
      case "Polygon":
        k = f.Y();
        k[g[0]].splice(h + 1, 0, c);
        break;
      case "MultiPolygon":
        k = f.Y();
        k[g[1]][g[0]].splice(h + 1, 0, c);
        break;
      case "LineString":
        k = f.Y();
        k.splice(h + 1, 0, c);
        break;
      default:
        return;
    }
    this.s = !0;
    f.la(k);
    this.s = !1;
    k = this.a;
    k.remove(a);
    iw(this, f, h, g, 1);
    var m = {
      ka: [d[0], c],
      feature: e,
      geometry: f,
      depth: g,
      index: h
    };
    k.za(xc(m.ka), m);
    this.o.push([m, 1]);
    d = {
      ka: [c, d[1]],
      feature: e,
      geometry: f,
      depth: g,
      index: h + 1
    };
    k.za(xc(d.ka), d);
    this.o.push([d, 0]);
    this.U = !0;
  };
  function iw(a, c, d, e, f) {
    an(a.a, c.G(), function(a) {
      a.geometry === c && (void 0 === e || void 0 === a.depth || bb(a.depth, e)) && a.index > d && (a.index += f);
    });
  }
  function bw() {
    var a = Pk();
    return function() {
      return a.Point;
    };
  }
  ;
  function jw(a, c, d, e) {
    Eb.call(this, a);
    this.selected = c;
    this.deselected = d;
    this.mapBrowserEvent = e;
  }
  y(jw, Eb);
  function kw(a) {
    nj.call(this, {handleEvent: lw});
    var c = a ? a : {};
    this.J = c.condition ? c.condition : wj;
    this.B = c.addCondition ? c.addCondition : ed;
    this.D = c.removeCondition ? c.removeCondition : ed;
    this.H = c.toggleCondition ? c.toggleCondition : yj;
    this.s = c.multi ? c.multi : !1;
    this.l = c.filter ? c.filter : fd;
    this.c = new H({
      source: new bn({
        useSpatialIndex: !1,
        features: c.features,
        wrapX: c.wrapX
      }),
      style: c.style ? c.style : mw(),
      updateWhileAnimating: !0,
      updateWhileInteracting: !0
    });
    if (c.layers)
      if (ja(c.layers))
        a = function(a) {
          return c.layers(a);
        };
      else {
        var d = c.layers;
        a = function(a) {
          return Va(d, a);
        };
      }
    else
      a = fd;
    this.o = a;
    this.a = {};
    a = this.c.da().c;
    D(a, "add", this.am, this);
    D(a, "remove", this.dm, this);
  }
  y(kw, nj);
  l = kw.prototype;
  l.bm = function() {
    return this.c.da().c;
  };
  l.cm = function(a) {
    a = x(a);
    return this.a[a];
  };
  function lw(a) {
    if (!this.J(a))
      return !0;
    var c = this.B(a),
        d = this.D(a),
        e = this.H(a),
        f = !c && !d && !e,
        g = a.map,
        h = this.c.da().c,
        k = [],
        m = [],
        n = !1;
    if (f)
      g.od(a.pixel, function(a, c) {
        if (this.l(a, c)) {
          m.push(a);
          var d = x(a);
          this.a[d] = c;
          return !this.s;
        }
      }, this, this.o), 0 < m.length && 1 == h.ac() && h.item(0) == m[0] || (n = !0, 0 !== h.ac() && (k = Array.prototype.concat(h.a), h.clear()), h.jf(m), 0 === m.length ? nb(this.a) : 0 < k.length && k.forEach(function(a) {
        a = x(a);
        delete this.a[a];
      }, this));
    else {
      g.od(a.pixel, function(a, f) {
        if (this.l(a, f)) {
          if (!c && !e || Va(h.a, a))
            (d || e) && Va(h.a, a) && (k.push(a), g = x(a), delete this.a[g]);
          else {
            m.push(a);
            var g = x(a);
            this.a[g] = f;
          }
          return !this.s;
        }
      }, this, this.o);
      for (f = k.length - 1; 0 <= f; --f)
        h.remove(k[f]);
      h.jf(m);
      if (0 < m.length || 0 < k.length)
        n = !0;
    }
    n && this.b(new jw("select", m, k, a));
    return vj(a);
  }
  l.setMap = function(a) {
    var c = this.A,
        d = this.c.da().c;
    c && d.forEach(c.ci, c);
    kw.ha.setMap.call(this, a);
    this.c.setMap(a);
    a && d.forEach(a.ai, a);
  };
  function mw() {
    var a = Pk();
    Ya(a.Polygon, a.LineString);
    Ya(a.GeometryCollection, a.LineString);
    return function(c) {
      return a[c.X().W()];
    };
  }
  l.am = function(a) {
    a = a.element;
    var c = this.A;
    c && c.ai(a);
  };
  l.dm = function(a) {
    a = a.element;
    var c = this.A;
    c && c.ci(a);
  };
  function nw(a) {
    Bj.call(this, {
      handleEvent: ow,
      handleDownEvent: fd,
      handleUpEvent: pw
    });
    a = a ? a : {};
    this.s = a.source ? a.source : null;
    this.o = a.features ? a.features : null;
    this.wa = [];
    this.D = {};
    this.H = {};
    this.U = {};
    this.B = {};
    this.S = null;
    this.c = void 0 !== a.pixelTolerance ? a.pixelTolerance : 10;
    this.na = qw.bind(this);
    this.a = new Wm;
    this.aa = {
      Point: this.jm,
      LineString: this.bh,
      LinearRing: this.bh,
      Polygon: this.km,
      MultiPoint: this.hm,
      MultiLineString: this.gm,
      MultiPolygon: this.im,
      GeometryCollection: this.fm
    };
  }
  y(nw, Bj);
  l = nw.prototype;
  l.rb = function(a, c) {
    var d = void 0 !== c ? c : !0,
        e = a.X(),
        f = this.aa[e.W()];
    if (f) {
      var g = x(a);
      this.U[g] = e.G(yc());
      f.call(this, a, e);
      d && (this.H[g] = D(e, "change", this.pk.bind(this, a), this), this.D[g] = D(a, Ob(a.a), this.em, this));
    }
  };
  l.pj = function(a) {
    this.rb(a);
  };
  l.qj = function(a) {
    this.nb(a);
  };
  l.$g = function(a) {
    var c;
    a instanceof gn ? c = a.feature : a instanceof Re && (c = a.element);
    this.rb(c);
  };
  l.ah = function(a) {
    var c;
    a instanceof gn ? c = a.feature : a instanceof Re && (c = a.element);
    this.nb(c);
  };
  l.em = function(a) {
    a = a.target;
    this.nb(a, !0);
    this.rb(a, !0);
  };
  l.pk = function(a) {
    if (this.J) {
      var c = x(a);
      c in this.B || (this.B[c] = a);
    } else
      this.di(a);
  };
  l.nb = function(a, c) {
    var d = void 0 !== c ? c : !0,
        e = x(a),
        f = this.U[e];
    if (f) {
      var g = this.a,
          h = [];
      an(g, f, function(c) {
        a === c.feature && h.push(c);
      });
      for (f = h.length - 1; 0 <= f; --f)
        g.remove(h[f]);
      d && (Kb(this.H[e]), delete this.H[e], Kb(this.D[e]), delete this.D[e]);
    }
  };
  l.setMap = function(a) {
    var c = this.A,
        d = this.wa,
        e;
    this.o ? e = this.o : this.s && (e = this.s.oe());
    c && (d.forEach(Kb), d.length = 0, e.forEach(this.qj, this));
    nw.ha.setMap.call(this, a);
    a && (this.o ? d.push(D(this.o, "add", this.$g, this), D(this.o, "remove", this.ah, this)) : this.s && d.push(D(this.s, "addfeature", this.$g, this), D(this.s, "removefeature", this.ah, this)), e.forEach(this.pj, this));
  };
  l.Dc = ed;
  l.di = function(a) {
    this.nb(a, !1);
    this.rb(a, !1);
  };
  l.fm = function(a, c) {
    var d,
        e = c.i;
    for (d = 0; d < e.length; ++d)
      this.aa[e[d].W()].call(this, a, e[d]);
  };
  l.bh = function(a, c) {
    var d = c.Y(),
        e,
        f,
        g,
        h;
    e = 0;
    for (f = d.length - 1; e < f; ++e)
      g = d.slice(e, e + 2), h = {
        feature: a,
        ka: g
      }, this.a.za(xc(g), h);
  };
  l.gm = function(a, c) {
    var d = c.Y(),
        e,
        f,
        g,
        h,
        k,
        m,
        n;
    h = 0;
    for (k = d.length; h < k; ++h)
      for (e = d[h], f = 0, g = e.length - 1; f < g; ++f)
        m = e.slice(f, f + 2), n = {
          feature: a,
          ka: m
        }, this.a.za(xc(m), n);
  };
  l.hm = function(a, c) {
    var d = c.Y(),
        e,
        f,
        g;
    f = 0;
    for (g = d.length; f < g; ++f)
      e = d[f], e = {
        feature: a,
        ka: [e, e]
      }, this.a.za(c.G(), e);
  };
  l.im = function(a, c) {
    var d = c.Y(),
        e,
        f,
        g,
        h,
        k,
        m,
        n,
        p,
        q,
        r;
    m = 0;
    for (n = d.length; m < n; ++m)
      for (p = d[m], h = 0, k = p.length; h < k; ++h)
        for (e = p[h], f = 0, g = e.length - 1; f < g; ++f)
          q = e.slice(f, f + 2), r = {
            feature: a,
            ka: q
          }, this.a.za(xc(q), r);
  };
  l.jm = function(a, c) {
    var d = c.Y(),
        d = {
          feature: a,
          ka: [d, d]
        };
    this.a.za(c.G(), d);
  };
  l.km = function(a, c) {
    var d = c.Y(),
        e,
        f,
        g,
        h,
        k,
        m,
        n;
    h = 0;
    for (k = d.length; h < k; ++h)
      for (e = d[h], f = 0, g = e.length - 1; f < g; ++f)
        m = e.slice(f, f + 2), n = {
          feature: a,
          ka: m
        }, this.a.za(xc(m), n);
  };
  function ow(a) {
    var c,
        d,
        e = a.pixel,
        f = a.coordinate;
    c = a.map;
    var g = c.La([e[0] - this.c, e[1] + this.c]);
    d = c.La([e[0] + this.c, e[1] - this.c]);
    var g = xc([g, d]),
        h = Zm(this.a, g),
        k = !1,
        g = !1,
        m = null;
    d = null;
    0 < h.length && (this.S = f, h.sort(this.na), h = h[0].ka, m = cc(f, h), d = c.Ta(m), Math.sqrt(hc(e, d)) <= this.c && (g = !0, e = c.Ta(h[0]), f = c.Ta(h[1]), e = hc(d, e), f = hc(d, f), k = Math.sqrt(Math.min(e, f)) <= this.c)) && (m = e > f ? h[1] : h[0], d = c.Ta(m), d = [Math.round(d[0]), Math.round(d[1])]);
    c = m;
    g && (a.coordinate = c.slice(0, 2), a.pixel = d);
    return Cj.call(this, a);
  }
  function pw() {
    var a = ob(this.B);
    a.length && (a.forEach(this.di, this), this.B = {});
    return !1;
  }
  function qw(a, c) {
    return ic(this.S, a.ka) - ic(this.S, c.ka);
  }
  ;
  function rw(a, c, d) {
    Eb.call(this, a);
    this.features = c;
    this.coordinate = d;
  }
  y(rw, Eb);
  function sw(a) {
    Bj.call(this, {
      handleDownEvent: tw,
      handleDragEvent: uw,
      handleMoveEvent: vw,
      handleUpEvent: ww
    });
    this.s = void 0;
    this.a = null;
    this.c = void 0 !== a.features ? a.features : null;
    this.o = null;
  }
  y(sw, Bj);
  function tw(a) {
    this.o = xw(this, a.pixel, a.map);
    return !this.a && this.o ? (this.a = a.coordinate, vw.call(this, a), this.b(new rw("translatestart", this.c, a.coordinate)), !0) : !1;
  }
  function ww(a) {
    return this.a ? (this.a = null, vw.call(this, a), this.b(new rw("translateend", this.c, a.coordinate)), !0) : !1;
  }
  function uw(a) {
    if (this.a) {
      a = a.coordinate;
      var c = a[0] - this.a[0],
          d = a[1] - this.a[1];
      if (this.c)
        this.c.forEach(function(a) {
          var e = a.X();
          e.Rc(c, d);
          a.Pa(e);
        });
      else if (this.o) {
        var e = this.o.X();
        e.Rc(c, d);
        this.o.Pa(e);
      }
      this.a = a;
      this.b(new rw("translating", this.c, a));
    }
  }
  function vw(a) {
    var c = a.map.tc();
    if (a = a.map.od(a.pixel, function(a) {
      return a;
    })) {
      var d = !1;
      this.c && Va(this.c.a, a) && (d = !0);
      this.s = c.style.cursor;
      c.style.cursor = this.a ? "-webkit-grabbing" : d ? "-webkit-grab" : "pointer";
      c.style.cursor = this.a ? d ? "grab" : "pointer" : "grabbing";
    } else
      c.style.cursor = void 0 !== this.s ? this.s : "", this.s = void 0;
  }
  function xw(a, c, d) {
    var e = null;
    c = d.od(c, function(a) {
      return a;
    });
    a.c && Va(a.c.a, c) && (e = c);
    return e;
  }
  ;
  function X(a) {
    a = a ? a : {};
    var c = mb({}, a);
    delete c.gradient;
    delete c.radius;
    delete c.blur;
    delete c.shadow;
    delete c.weight;
    H.call(this, c);
    this.i = null;
    this.aa = void 0 !== a.shadow ? a.shadow : 250;
    this.U = void 0;
    this.S = null;
    D(this, Ob("gradient"), this.qk, this);
    this.Rh(a.gradient ? a.gradient : yw);
    this.Mh(void 0 !== a.blur ? a.blur : 15);
    this.fh(void 0 !== a.radius ? a.radius : 8);
    D(this, Ob("blur"), this.ef, this);
    D(this, Ob("radius"), this.ef, this);
    this.ef();
    var d = a.weight ? a.weight : "weight",
        e;
    "string" === typeof d ? e = function(a) {
      return a.get(d);
    } : e = d;
    this.c(function(a) {
      a = e(a);
      a = void 0 !== a ? Ma(a, 0, 1) : 1;
      var c = 255 * a | 0,
          d = this.S[c];
      d || (d = [new Kk({image: new Wi({
          opacity: a,
          src: this.U
        })})], this.S[c] = d);
      return d;
    }.bind(this));
    this.set("renderOrder", null);
    D(this, "render", this.Hk, this);
  }
  y(X, H);
  var yw = ["#00f", "#0ff", "#0f0", "#ff0", "#f00"];
  l = X.prototype;
  l.og = function() {
    return this.get("blur");
  };
  l.wg = function() {
    return this.get("gradient");
  };
  l.eh = function() {
    return this.get("radius");
  };
  l.qk = function() {
    for (var a = this.wg(),
        c = nh(1, 256),
        d = c.createLinearGradient(0, 0, 1, 256),
        e = 1 / (a.length - 1),
        f = 0,
        g = a.length; f < g; ++f)
      d.addColorStop(f * e, a[f]);
    c.fillStyle = d;
    c.fillRect(0, 0, 1, 256);
    this.i = c.getImageData(0, 0, 1, 256).data;
  };
  l.ef = function() {
    var a = this.eh(),
        c = this.og(),
        d = a + c + 1,
        e = 2 * d,
        e = nh(e, e);
    e.shadowOffsetX = e.shadowOffsetY = this.aa;
    e.shadowBlur = c;
    e.shadowColor = "#000";
    e.beginPath();
    c = d - this.aa;
    e.arc(c, c, a, 0, 2 * Math.PI, !0);
    e.fill();
    this.U = e.canvas.toDataURL();
    this.S = Array(256);
    this.u();
  };
  l.Hk = function(a) {
    a = a.context;
    var c = a.canvas,
        c = a.getImageData(0, 0, c.width, c.height),
        d = c.data,
        e,
        f,
        g;
    e = 0;
    for (f = d.length; e < f; e += 4)
      if (g = 4 * d[e + 3])
        d[e] = this.i[g], d[e + 1] = this.i[g + 1], d[e + 2] = this.i[g + 2];
    a.putImageData(c, 0, 0);
  };
  l.Mh = function(a) {
    this.set("blur", a);
  };
  l.Rh = function(a) {
    this.set("gradient", a);
  };
  l.fh = function(a) {
    this.set("radius", a);
  };
  function zw(a, c, d, e) {
    function f() {
      delete aa[h];
      g.parentNode.removeChild(g);
    }
    var g = aa.document.createElement("script"),
        h = "olc_" + x(c);
    g.async = !0;
    g.src = a + (-1 == a.indexOf("?") ? "?" : "&") + (e || "callback") + "=" + h;
    var k = aa.setTimeout(function() {
      f();
      d && d();
    }, 1E4);
    aa[h] = function(a) {
      aa.clearTimeout(k);
      f();
      c(a);
    };
    aa.document.getElementsByTagName("head")[0].appendChild(g);
  }
  ;
  function Aw(a, c, d, e, f, g, h, k, m, n, p) {
    pg.call(this, f, 0);
    this.J = void 0 !== p ? p : !1;
    this.B = h;
    this.T = k;
    this.i = null;
    this.c = {};
    this.j = c;
    this.o = e;
    this.s = g ? g : f;
    this.g = [];
    this.Wc = null;
    this.l = 0;
    g = e.Da(this.s);
    k = this.o.G();
    f = this.j.G();
    g = k ? $c(g, k) : g;
    if (0 === Tc(g))
      this.state = 4;
    else if ((k = a.G()) && (f ? f = $c(f, k) : f = k), e = e.Z(this.s[0]), e = Il(a, d, Yc(g), e), !isFinite(e) || 0 >= e)
      this.state = 4;
    else if (this.A = new Ll(a, d, g, f, e * (void 0 !== n ? n : .5)), 0 === this.A.f.length)
      this.state = 4;
    else if (this.l = Dg(c, e), d = Nl(this.A), f && (a.b ? (d[1] = Ma(d[1], f[1], f[3]), d[3] = Ma(d[3], f[1], f[3])) : d = $c(d, f)), Tc(d))
      if (a = yg(c, d, this.l), 100 > (a.va - a.ra + 1) * (a.Aa - a.xa + 1)) {
        for (c = a.ra; c <= a.va; c++)
          for (d = a.xa; d <= a.Aa; d++)
            (n = m(this.l, c, d, h)) && this.g.push(n);
        0 === this.g.length && (this.state = 4);
      } else
        this.state = 3;
    else
      this.state = 4;
  }
  y(Aw, pg);
  Aw.prototype.fa = function() {
    1 == this.state && (this.Wc.forEach(sb), this.Wc = null);
    Aw.ha.fa.call(this);
  };
  Aw.prototype.cb = function(a) {
    if (void 0 !== a) {
      var c = x(a);
      if (c in this.c)
        return this.c[c];
      a = pb(this.c) ? this.i : this.i.cloneNode(!1);
      return this.c[c] = a;
    }
    return this.i;
  };
  Aw.prototype.Bd = function() {
    var a = [];
    this.g.forEach(function(c) {
      c && 2 == c.V() && a.push({
        extent: this.j.Da(c.ja),
        image: c.cb()
      });
    }, this);
    this.g.length = 0;
    if (0 === a.length)
      this.state = 3;
    else {
      var c = this.s[0],
          d = this.o.Ua(c),
          e = ia(d) ? d : d[0],
          d = ia(d) ? d : d[1],
          c = this.o.Z(c),
          f = this.j.Z(this.l),
          g = this.o.Da(this.s);
      this.i = Kl(e, d, this.B, f, this.j.G(), c, g, this.A, a, this.T, this.J);
      this.state = 2;
    }
    qg(this);
  };
  Aw.prototype.load = function() {
    if (0 == this.state) {
      this.state = 1;
      qg(this);
      var a = 0;
      this.Wc = [];
      this.g.forEach(function(c) {
        var d = c.V();
        if (0 == d || 1 == d) {
          a++;
          var e;
          e = D(c, "change", function() {
            var d = c.V();
            if (2 == d || 3 == d || 4 == d)
              sb(e), a--, 0 === a && (this.Wc.forEach(sb), this.Wc = null, this.Bd());
          }, this);
          this.Wc.push(e);
        }
      }, this);
      this.g.forEach(function(a) {
        0 == a.V() && a.load();
      });
      0 === a && aa.setTimeout(this.Bd.bind(this), 0);
    }
  };
  function Y(a) {
    un.call(this, {
      attributions: a.attributions,
      extent: a.extent,
      logo: a.logo,
      opaque: a.opaque,
      projection: a.projection,
      state: a.state,
      tileGrid: a.tileGrid,
      tileLoadFunction: a.tileLoadFunction ? a.tileLoadFunction : Bw,
      tilePixelRatio: a.tilePixelRatio,
      tileUrlFunction: a.tileUrlFunction,
      url: a.url,
      urls: a.urls,
      wrapX: a.wrapX
    });
    this.crossOrigin = void 0 !== a.crossOrigin ? a.crossOrigin : null;
    this.tileClass = void 0 !== a.tileClass ? a.tileClass : tv;
    this.i = {};
    this.o = {};
    this.oa = a.reprojectionErrorThreshold;
    this.B = !1;
  }
  y(Y, un);
  l = Y.prototype;
  l.lh = function() {
    if (ng(this.a))
      return !0;
    for (var a in this.i)
      if (ng(this.i[a]))
        return !0;
    return !1;
  };
  l.mh = function(a, c) {
    var d = this.td(a);
    og(this.a, this.a == d ? c : {});
    for (var e in this.i) {
      var f = this.i[e];
      og(f, f == d ? c : {});
    }
  };
  l.Ud = function(a) {
    return this.f && a && !Hd(this.f, a) ? 0 : this.$e();
  };
  l.$e = function() {
    return 0;
  };
  l.cf = function(a) {
    return this.f && a && !Hd(this.f, a) ? !1 : Y.ha.cf.call(this, a);
  };
  l.Za = function(a) {
    var c = this.f;
    return !this.tileGrid || c && !Hd(c, a) ? (c = x(a).toString(), c in this.o || (this.o[c] = Eg(a)), this.o[c]) : this.tileGrid;
  };
  l.td = function(a) {
    var c = this.f;
    if (!c || Hd(c, a))
      return this.a;
    a = x(a).toString();
    a in this.i || (this.i[a] = new mg);
    return this.i[a];
  };
  function Cw(a, c, d, e, f, g, h) {
    c = [c, d, e];
    f = (d = Lg(a, c, g)) ? a.tileUrlFunction(d, f, g) : void 0;
    f = new a.tileClass(c, void 0 !== f ? 0 : 4, void 0 !== f ? f : "", a.crossOrigin, a.tileLoadFunction);
    f.key = h;
    D(f, "change", a.nh, a);
    return f;
  }
  l.Qb = function(a, c, d, e, f) {
    if (this.f && f && !Hd(this.f, f)) {
      var g = this.td(f);
      c = [a, c, d];
      a = this.Db.apply(this, c);
      if (lg(g, a))
        return g.get(a);
      var h = this.f;
      d = this.Za(h);
      var k = this.Za(f),
          m = Lg(this, c, f);
      e = new Aw(h, d, f, k, c, m, this.uc(e), this.$e(), function(a, c, d, e) {
        return Dw(this, a, c, d, e, h);
      }.bind(this), this.oa, this.B);
      g.set(a, e);
      return e;
    }
    return Dw(this, a, c, d, e, f);
  };
  function Dw(a, c, d, e, f, g) {
    var h = null,
        k = a.Db(c, d, e),
        m = a.af();
    if (lg(a.a, k)) {
      if (h = a.a.get(k), h.key != m) {
        var n = h;
        h.a && h.a.key == m ? (h = h.a, 2 == n.V() && (h.a = n)) : (h = Cw(a, c, d, e, f, g, m), 2 == n.V() ? h.a = n : n.a && 2 == n.a.V() && (h.a = n.a, n.a = null));
        h.a && (h.a.a = null);
        a.a.replace(k, h);
      }
    } else
      h = Cw(a, c, d, e, f, g, m), a.a.set(k, h);
    return h;
  }
  l.zb = function(a) {
    if (this.B != a) {
      this.B = a;
      for (var c in this.i)
        this.i[c].clear();
      this.u();
    }
  };
  l.Ab = function(a, c) {
    var d = qd(a);
    d && (d = x(d).toString(), d in this.o || (this.o[d] = c));
  };
  function Bw(a, c) {
    a.cb().src = c;
  }
  ;
  function Ew(a) {
    Y.call(this, {
      crossOrigin: "anonymous",
      opaque: !0,
      projection: qd("EPSG:3857"),
      reprojectionErrorThreshold: a.reprojectionErrorThreshold,
      state: "loading",
      tileLoadFunction: a.tileLoadFunction,
      wrapX: void 0 !== a.wrapX ? a.wrapX : !0
    });
    this.l = void 0 !== a.culture ? a.culture : "en-us";
    this.c = void 0 !== a.maxZoom ? a.maxZoom : -1;
    zw("https://dev.virtualearth.net/REST/v1/Imagery/Metadata/" + a.imagerySet + "?uriScheme=https&include=ImageryProviders&key=" + a.key, this.s.bind(this), void 0, "jsonp");
  }
  y(Ew, Y);
  var Fw = new Qe({html: '<a class="ol-attribution-bing-tos" href="http://www.microsoft.com/maps/product/terms.html">Terms of Use</a>'});
  Ew.prototype.s = function(a) {
    if (200 != a.statusCode || "OK" != a.statusDescription || "ValidCredentials" != a.authenticationResultCode || 1 != a.resourceSets.length || 1 != a.resourceSets[0].resources.length)
      tg(this, "error");
    else {
      var c = a.brandLogoUri;
      -1 == c.indexOf("https") && (c = c.replace("http", "https"));
      var d = a.resourceSets[0].resources[0],
          e = -1 == this.c ? d.zoomMax : this.c;
      a = Fg(this.f);
      var f = Hg({
        extent: a,
        minZoom: d.zoomMin,
        maxZoom: e,
        tileSize: d.imageWidth == d.imageHeight ? d.imageWidth : [d.imageWidth, d.imageHeight]
      });
      this.tileGrid = f;
      var g = this.l;
      this.tileUrlFunction = rn(d.imageUrlSubdomains.map(function(a) {
        var c = [0, 0, 0],
            e = d.imageUrl.replace("{subdomain}", a).replace("{culture}", g);
        return function(a) {
          if (a)
            return Ke(a[0], a[1], -a[2] - 1, c), e.replace("{quadkey}", Le(c));
        };
      }));
      if (d.imageryProviders) {
        var h = ud(qd("EPSG:4326"), this.f);
        a = d.imageryProviders.map(function(a) {
          var c = a.attribution,
              d = {};
          a.coverageAreas.forEach(function(a) {
            var c = a.zoomMin,
                g = Math.min(a.zoomMax, e);
            a = a.bbox;
            a = cd([a[1], a[0], a[3], a[2]], h);
            var k,
                m;
            for (k = c; k <= g; ++k)
              m = k.toString(), c = yg(f, a, k), m in d ? d[m].push(c) : d[m] = [c];
          });
          return new Qe({
            html: c,
            tileRanges: d
          });
        });
        a.push(Fw);
        this.ma(a);
      }
      this.D = c;
      tg(this, "ready");
    }
  };
  function Gw(a) {
    bn.call(this, {
      attributions: a.attributions,
      extent: a.extent,
      logo: a.logo,
      projection: a.projection,
      wrapX: a.wrapX
    });
    this.B = void 0;
    this.U = void 0 !== a.distance ? a.distance : 20;
    this.A = [];
    this.s = a.source;
    this.s.I("change", Gw.prototype.na, this);
  }
  y(Gw, bn);
  Gw.prototype.aa = function() {
    return this.s;
  };
  Gw.prototype.Oc = function(a, c, d) {
    this.s.Oc(a, c, d);
    c !== this.B && (this.clear(), this.B = c, Hw(this), this.Gc(this.A));
  };
  Gw.prototype.na = function() {
    this.clear();
    Hw(this);
    this.Gc(this.A);
    this.u();
  };
  function Hw(a) {
    if (void 0 !== a.B) {
      a.A.length = 0;
      for (var c = yc(),
          d = a.U * a.B,
          e = a.s.oe(),
          f = {},
          g = 0,
          h = e.length; g < h; g++) {
        var k = e[g];
        x(k).toString() in f || (k = k.X().Y(), Jc(k, c), Ac(c, d, c), k = a.s.Ze(c), k = k.filter(function(a) {
          a = x(a).toString();
          return a in f ? !1 : f[a] = !0;
        }), a.A.push(Iw(k)));
      }
    }
  }
  function Iw(a) {
    for (var c = a.length,
        d = [0, 0],
        e = 0; e < c; e++) {
      var f = a[e].X().Y();
      bc(d, f);
    }
    c = 1 / c;
    d[0] *= c;
    d[1] *= c;
    d = new Xl(new E(d));
    d.set("features", a);
    return d;
  }
  ;
  function Jw(a) {
    Pl.call(this, {
      projection: a.projection,
      resolutions: a.resolutions
    });
    this.U = void 0 !== a.crossOrigin ? a.crossOrigin : null;
    this.o = void 0 !== a.displayDpi ? a.displayDpi : 96;
    this.j = a.params || {};
    this.S = a.url;
    this.c = void 0 !== a.imageLoadFunction ? a.imageLoadFunction : Vl;
    this.aa = void 0 !== a.hidpi ? a.hidpi : !0;
    this.oa = void 0 !== a.metersPerUnit ? a.metersPerUnit : 1;
    this.s = void 0 !== a.ratio ? a.ratio : 1;
    this.ya = void 0 !== a.useOverlay ? a.useOverlay : !1;
    this.i = null;
    this.H = 0;
  }
  y(Jw, Pl);
  l = Jw.prototype;
  l.tm = function() {
    return this.j;
  };
  l.pd = function(a, c, d) {
    c = Ql(this, c);
    d = this.aa ? d : 1;
    var e = this.i;
    if (e && this.H == this.g && e.Z() == c && e.f == d && Gc(e.G(), a))
      return e;
    1 != this.s && (a = a.slice(), bd(a, this.s));
    var f = [Wc(a) / c * d, Xc(a) / c * d];
    if (void 0 !== this.S) {
      var e = this.S,
          g = Yc(a),
          h = this.oa,
          k = Wc(a),
          m = Xc(a),
          n = f[0],
          p = f[1],
          q = .0254 / this.o,
          f = {
            OPERATION: this.ya ? "GETDYNAMICMAPOVERLAYIMAGE" : "GETMAPIMAGE",
            VERSION: "2.0.0",
            LOCALE: "en",
            CLIENTAGENT: "ol.source.ImageMapGuide source",
            CLIP: "1",
            SETDISPLAYDPI: this.o,
            SETDISPLAYWIDTH: Math.round(f[0]),
            SETDISPLAYHEIGHT: Math.round(f[1]),
            SETVIEWSCALE: p * k > n * m ? k * h / (n * q) : m * h / (p * q),
            SETVIEWCENTERX: g[0],
            SETVIEWCENTERY: g[1]
          };
      mb(f, this.j);
      e = Xq(Zq([e], f));
      e = new sv(a, c, d, this.ea(), e, this.U, this.c);
      D(e, "change", this.l, this);
    } else
      e = null;
    this.i = e;
    this.H = this.g;
    return e;
  };
  l.sm = function() {
    return this.c;
  };
  l.vm = function(a) {
    mb(this.j, a);
    this.u();
  };
  l.um = function(a) {
    this.i = null;
    this.c = a;
    this.u();
  };
  function Kw(a) {
    var c = void 0 !== a.attributions ? a.attributions : null,
        d = a.imageExtent,
        e = void 0 !== a.crossOrigin ? a.crossOrigin : null,
        f = void 0 !== a.imageLoadFunction ? a.imageLoadFunction : Vl;
    Pl.call(this, {
      attributions: c,
      logo: a.logo,
      projection: qd(a.projection)
    });
    this.c = new sv(d, void 0, 1, c, a.url, e, f);
    this.i = a.imageSize ? a.imageSize : null;
    D(this.c, "change", this.l, this);
  }
  y(Kw, Pl);
  Kw.prototype.pd = function(a) {
    return ad(a, this.c.G()) ? this.c : null;
  };
  Kw.prototype.l = function(a) {
    if (2 == this.c.V()) {
      var c = this.c.G(),
          d = this.c.a(),
          e,
          f;
      this.i ? (e = this.i[0], f = this.i[1]) : (e = d.width, f = d.height);
      c = Math.ceil(Wc(c) / (Xc(c) / f));
      if (c != e) {
        var g = document.createElement("canvas");
        g.width = c;
        g.height = f;
        g.getContext("2d").drawImage(d, 0, 0, e, f, 0, 0, g.width, g.height);
        this.c.g = g;
      }
    }
    Kw.ha.l.call(this, a);
  };
  function Lw(a) {
    a = a || {};
    Pl.call(this, {
      attributions: a.attributions,
      logo: a.logo,
      projection: a.projection,
      resolutions: a.resolutions
    });
    this.oa = void 0 !== a.crossOrigin ? a.crossOrigin : null;
    this.j = a.url;
    this.H = void 0 !== a.imageLoadFunction ? a.imageLoadFunction : Vl;
    this.i = a.params || {};
    this.s = !0;
    Mw(this);
    this.aa = a.serverType;
    this.ya = void 0 !== a.hidpi ? a.hidpi : !0;
    this.c = null;
    this.S = [0, 0];
    this.U = 0;
    this.o = void 0 !== a.ratio ? a.ratio : 1.5;
  }
  y(Lw, Pl);
  var Nw = [101, 101];
  l = Lw.prototype;
  l.Bm = function(a, c, d, e) {
    if (void 0 !== this.j) {
      var f = Zc(a, c, 0, Nw),
          g = {
            SERVICE: "WMS",
            VERSION: "1.3.0",
            REQUEST: "GetFeatureInfo",
            FORMAT: "image/png",
            TRANSPARENT: !0,
            QUERY_LAYERS: this.i.LAYERS
          };
      mb(g, this.i, e);
      e = Math.floor((f[3] - a[1]) / c);
      g[this.s ? "I" : "X"] = Math.floor((a[0] - f[0]) / c);
      g[this.s ? "J" : "Y"] = e;
      return Ow(this, f, Nw, 1, qd(d), g);
    }
  };
  l.Dm = function() {
    return this.i;
  };
  l.pd = function(a, c, d, e) {
    if (void 0 === this.j)
      return null;
    c = Ql(this, c);
    1 == d || this.ya && void 0 !== this.aa || (d = 1);
    a = a.slice();
    var f = (a[0] + a[2]) / 2,
        g = (a[1] + a[3]) / 2,
        h = c / d,
        k = Wc(a) / h,
        h = Xc(a) / h,
        m = this.c;
    if (m && this.U == this.g && m.Z() == c && m.f == d && Gc(m.G(), a))
      return m;
    if (1 != this.o) {
      var m = this.o * Wc(a) / 2,
          n = this.o * Xc(a) / 2;
      a[0] = f - m;
      a[1] = g - n;
      a[2] = f + m;
      a[3] = g + n;
    }
    f = {
      SERVICE: "WMS",
      VERSION: "1.3.0",
      REQUEST: "GetMap",
      FORMAT: "image/png",
      TRANSPARENT: !0
    };
    mb(f, this.i);
    this.S[0] = Math.ceil(k * this.o);
    this.S[1] = Math.ceil(h * this.o);
    e = Ow(this, a, this.S, d, e, f);
    this.c = new sv(a, c, d, this.ea(), e, this.oa, this.H);
    this.U = this.g;
    D(this.c, "change", this.l, this);
    return this.c;
  };
  l.Cm = function() {
    return this.H;
  };
  function Ow(a, c, d, e, f, g) {
    g[a.s ? "CRS" : "SRS"] = f.lb;
    "STYLES" in a.i || (g.STYLES = new String(""));
    if (1 != e)
      switch (a.aa) {
        case "geoserver":
          e = 90 * e + .5 | 0;
          g.FORMAT_OPTIONS = "FORMAT_OPTIONS" in g ? g.FORMAT_OPTIONS + (";dpi:" + e) : "dpi:" + e;
          break;
        case "mapserver":
          g.MAP_RESOLUTION = 90 * e;
          break;
        case "carmentaserver":
        case "qgis":
          g.DPI = 90 * e;
      }
    g.WIDTH = d[0];
    g.HEIGHT = d[1];
    d = f.f;
    var h;
    a.s && "ne" == d.substr(0, 2) ? h = [c[1], c[0], c[3], c[2]] : h = c;
    g.BBOX = h.join(",");
    return Xq(Zq([a.j], g));
  }
  l.Em = function() {
    return this.j;
  };
  l.Fm = function(a) {
    this.c = null;
    this.H = a;
    this.u();
  };
  l.Gm = function(a) {
    a != this.j && (this.j = a, this.c = null, this.u());
  };
  l.Hm = function(a) {
    mb(this.i, a);
    Mw(this);
    this.c = null;
    this.u();
  };
  function Mw(a) {
    a.s = 0 <= Ka(a.i.VERSION || "1.3.0", "1.3");
  }
  ;
  function Pw(a) {
    var c = void 0 !== a.projection ? a.projection : "EPSG:3857",
        d = void 0 !== a.tileGrid ? a.tileGrid : Hg({
          extent: Fg(c),
          maxZoom: a.maxZoom,
          tileSize: a.tileSize
        });
    Y.call(this, {
      attributions: a.attributions,
      crossOrigin: a.crossOrigin,
      logo: a.logo,
      opaque: a.opaque,
      projection: c,
      reprojectionErrorThreshold: a.reprojectionErrorThreshold,
      tileGrid: d,
      tileLoadFunction: a.tileLoadFunction,
      tilePixelRatio: a.tilePixelRatio,
      tileUrlFunction: a.tileUrlFunction,
      url: a.url,
      urls: a.urls,
      wrapX: void 0 !== a.wrapX ? a.wrapX : !0
    });
  }
  y(Pw, Y);
  function Qw(a) {
    a = a || {};
    var c;
    void 0 !== a.attributions ? c = a.attributions : c = [Rw];
    Pw.call(this, {
      attributions: c,
      crossOrigin: void 0 !== a.crossOrigin ? a.crossOrigin : "anonymous",
      opaque: void 0 !== a.opaque ? a.opaque : !0,
      maxZoom: void 0 !== a.maxZoom ? a.maxZoom : 19,
      reprojectionErrorThreshold: a.reprojectionErrorThreshold,
      tileLoadFunction: a.tileLoadFunction,
      url: void 0 !== a.url ? a.url : "https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      wrapX: a.wrapX
    });
  }
  y(Qw, Pw);
  var Rw = new Qe({html: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.'});
  function Sw(a) {
    a = a || {};
    var c = Tw[a.layer];
    this.c = a.layer;
    Pw.call(this, {
      attributions: c.attributions,
      crossOrigin: "anonymous",
      logo: "https://developer.mapquest.com/content/osm/mq_logo.png",
      maxZoom: c.maxZoom,
      reprojectionErrorThreshold: a.reprojectionErrorThreshold,
      opaque: c.opaque,
      tileLoadFunction: a.tileLoadFunction,
      url: void 0 !== a.url ? a.url : "https://otile{1-4}-s.mqcdn.com/tiles/1.0.0/" + this.c + "/{z}/{x}/{y}.jpg"
    });
  }
  y(Sw, Pw);
  var Uw = new Qe({html: 'Tiles Courtesy of <a href="http://www.mapquest.com/">MapQuest</a>'}),
      Tw = {
        osm: {
          maxZoom: 19,
          opaque: !0,
          attributions: [Uw, Rw]
        },
        sat: {
          maxZoom: 18,
          opaque: !0,
          attributions: [Uw, new Qe({html: "Portions Courtesy NASA/JPL-Caltech and U.S. Depart. of Agriculture, Farm Service Agency"})]
        },
        hyb: {
          maxZoom: 18,
          opaque: !1,
          attributions: [Uw, Rw]
        }
      };
  Sw.prototype.l = function() {
    return this.c;
  };
  (function() {
    var a = {},
        c = {ia: a};
    (function(d) {
      if ("object" === typeof a && "undefined" !== typeof c)
        c.ia = d();
      else {
        var e;
        "undefined" !== typeof window ? e = window : "undefined" !== typeof global ? e = global : "undefined" !== typeof self ? e = self : e = this;
        e.ip = d();
      }
    })(function() {
      return function e(a, c, h) {
        function k(n, q) {
          if (!c[n]) {
            if (!a[n]) {
              var r = "function" == typeof require && require;
              if (!q && r)
                return r(n, !0);
              if (m)
                return m(n, !0);
              r = Error("Cannot find module '" + n + "'");
              throw r.code = "MODULE_NOT_FOUND", r;
            }
            r = c[n] = {ia: {}};
            a[n][0].call(r.ia, function(c) {
              var e = a[n][1][c];
              return k(e ? e : c);
            }, r, r.ia, e, a, c, h);
          }
          return c[n].ia;
        }
        for (var m = "function" == typeof require && require,
            n = 0; n < h.length; n++)
          k(h[n]);
        return k;
      }({
        1: [function(a, c, g) {
          a = a("./processor");
          g.Hi = a;
        }, {"./processor": 2}],
        2: [function(a, c) {
          function g(a) {
            return function(c) {
              var e = c.buffers,
                  f = c.meta,
                  g = c.width,
                  h = c.height,
                  k = e.length,
                  m = e[0].byteLength,
                  C;
              if (c.imageOps) {
                m = Array(k);
                for (C = 0; C < k; ++C)
                  m[C] = new ImageData(new Uint8ClampedArray(e[C]), g, h);
                g = a(m, f).data;
              } else {
                g = new Uint8ClampedArray(m);
                h = Array(k);
                c = Array(k);
                for (C = 0; C < k; ++C)
                  h[C] = new Uint8ClampedArray(e[C]), c[C] = [0, 0, 0, 0];
                for (e = 0; e < m; e += 4) {
                  for (C = 0; C < k; ++C) {
                    var A = h[C];
                    c[C][0] = A[e];
                    c[C][1] = A[e + 1];
                    c[C][2] = A[e + 2];
                    c[C][3] = A[e + 3];
                  }
                  C = a(c, f);
                  g[e] = C[0];
                  g[e + 1] = C[1];
                  g[e + 2] = C[2];
                  g[e + 3] = C[3];
                }
              }
              return g.buffer;
            };
          }
          function h(a, c) {
            var e = Object.keys(a.lib || {}).map(function(c) {
              return "var " + c + " = " + a.lib[c].toString() + ";";
            }).concat(["var __minion__ = (" + g.toString() + ")(", a.operation.toString(), ");", 'self.addEventListener("message", function(__event__) {', "var buffer = __minion__(__event__.data);", "self.postMessage({buffer: buffer, meta: __event__.data.meta}, [buffer]);", "});"]),
                e = URL.createObjectURL(new Blob(e, {type: "text/javascript"})),
                e = new Worker(e);
            e.addEventListener("message", c);
            return e;
          }
          function k(a, c) {
            var e = g(a.operation);
            return {postMessage: function(a) {
                setTimeout(function() {
                  c({data: {
                      buffer: e(a),
                      fe: a.fe
                    }});
                }, 0);
              }};
          }
          function m(a) {
            this.Oe = !!a.Pk;
            var c;
            0 === a.threads ? c = 0 : this.Oe ? c = 1 : c = a.threads || 1;
            var e = [];
            if (c)
              for (var f = 0; f < c; ++f)
                e[f] = h(a, this.Zf.bind(this, f));
            else
              e[0] = k(a, this.Zf.bind(this, 0));
            this.Nd = e;
            this.ad = [];
            this.Wi = a.Kn || Infinity;
            this.Ld = 0;
            this.Fc = {};
            this.Pe = null;
          }
          m.prototype.In = function(a, c, e) {
            this.Ti({
              wc: a,
              fe: c,
              gg: e
            });
            this.Wf();
          };
          m.prototype.Ti = function(a) {
            for (this.ad.push(a); this.ad.length > this.Wi; )
              this.ad.shift().gg(null, null);
          };
          m.prototype.Wf = function() {
            if (0 === this.Ld && 0 < this.ad.length) {
              var a = this.Pe = this.ad.shift(),
                  c = a.wc[0].width,
                  e = a.wc[0].height,
                  f = a.wc.map(function(a) {
                    return a.data.buffer;
                  }),
                  g = this.Nd.length;
              this.Ld = g;
              if (1 === g)
                this.Nd[0].postMessage({
                  buffers: f,
                  meta: a.fe,
                  imageOps: this.Oe,
                  width: c,
                  height: e
                }, f);
              else
                for (var h = 4 * Math.ceil(a.wc[0].data.length / 4 / g),
                    k = 0; k < g; ++k) {
                  for (var m = k * h,
                      C = [],
                      A = 0,
                      B = f.length; A < B; ++A)
                    C.push(f[k].slice(m, m + h));
                  this.Nd[k].postMessage({
                    buffers: C,
                    meta: a.fe,
                    imageOps: this.Oe,
                    width: c,
                    height: e
                  }, C);
                }
            }
          };
          m.prototype.Zf = function(a, c) {
            this.ep || (this.Fc[a] = c.data, --this.Ld, 0 === this.Ld && this.Xi());
          };
          m.prototype.Xi = function() {
            var a = this.Pe,
                c = this.Nd.length,
                e,
                f;
            if (1 === c)
              e = new Uint8ClampedArray(this.Fc[0].buffer), f = this.Fc[0].meta;
            else {
              var g = a.wc[0].data.length;
              e = new Uint8ClampedArray(g);
              f = Array(g);
              for (var g = 4 * Math.ceil(g / 4 / c),
                  h = 0; h < c; ++h) {
                var k = h * g;
                e.set(new Uint8ClampedArray(this.Fc[h].buffer), k);
                f[h] = this.Fc[h].meta;
              }
            }
            this.Pe = null;
            this.Fc = {};
            a.gg(null, new ImageData(e, a.wc[0].width, a.wc[0].height), f);
            this.Wf();
          };
          c.ia = m;
        }, {}]
      }, {}, [1])(1);
    });
    Vm = c.ia;
  })();
  function Vw(a) {
    this.H = null;
    this.ya = void 0 !== a.operationType ? a.operationType : "pixel";
    this.qb = void 0 !== a.threads ? a.threads : 1;
    this.c = Ww(a.sources);
    for (var c = 0,
        d = this.c.length; c < d; ++c)
      D(this.c[c], "change", this.u, this);
    this.i = nh();
    this.aa = new jj(function() {
      return 1;
    }, this.u.bind(this));
    for (var c = Xw(this.c),
        d = {},
        e = 0,
        f = c.length; e < f; ++e)
      d[x(c[e].layer)] = c[e];
    this.j = this.o = null;
    this.U = {
      animate: !1,
      attributions: {},
      coordinateToPixelMatrix: nc(),
      extent: null,
      focus: null,
      index: 0,
      layerStates: d,
      layerStatesArray: c,
      logos: {},
      pixelRatio: 1,
      pixelToCoordinateMatrix: nc(),
      postRenderFunctions: [],
      size: [0, 0],
      skippedFeatureUids: {},
      tileQueue: this.aa,
      time: Date.now(),
      usedTiles: {},
      viewState: {rotation: 0},
      viewHints: [],
      wantedTiles: {}
    };
    Pl.call(this, {});
    void 0 !== a.operation && this.s(a.operation, a.lib);
  }
  y(Vw, Pl);
  Vw.prototype.s = function(a, c) {
    this.H = new Vm.Hi({
      operation: a,
      Pk: "image" === this.ya,
      Kn: 1,
      lib: c,
      threads: this.qb
    });
    this.u();
  };
  function Yw(a, c, d) {
    var e = a.o;
    return !e || a.g !== e.oo || d !== e.resolution || !Mc(c, e.extent);
  }
  Vw.prototype.B = function(a, c, d, e) {
    d = !0;
    for (var f,
        g = 0,
        h = this.c.length; g < h; ++g)
      if (f = this.c[g].a.da(), "ready" !== f.V()) {
        d = !1;
        break;
      }
    if (!d)
      return null;
    if (!Yw(this, a, c))
      return this.j;
    d = this.i.canvas;
    f = Math.round(Wc(a) / c);
    g = Math.round(Xc(a) / c);
    if (f !== d.width || g !== d.height)
      d.width = f, d.height = g;
    f = mb({}, this.U);
    f.viewState = mb({}, f.viewState);
    var g = Yc(a),
        h = Math.round(Wc(a) / c),
        k = Math.round(Xc(a) / c);
    f.extent = a;
    f.focus = Yc(a);
    f.size[0] = h;
    f.size[1] = k;
    h = f.viewState;
    h.center = g;
    h.projection = e;
    h.resolution = c;
    this.j = e = new Gl(a, c, 1, this.ea(), d, this.S.bind(this, f));
    this.o = {
      extent: a,
      resolution: c,
      oo: this.g
    };
    return e;
  };
  Vw.prototype.S = function(a, c) {
    for (var d = this.c.length,
        e = Array(d),
        f = 0; f < d; ++f) {
      var g;
      g = this.c[f];
      var h = a,
          k = a.layerStatesArray[f];
      if (g.l(h, k)) {
        var m = h.size[0],
            n = h.size[1];
        if (Zw) {
          var p = Zw.canvas;
          p.width !== m || p.height !== n ? Zw = nh(m, n) : Zw.clearRect(0, 0, m, n);
        } else
          Zw = nh(m, n);
        g.c(h, k, Zw);
        g = Zw.getImageData(0, 0, m, n);
      } else
        g = null;
      if (g)
        e[f] = g;
      else
        return;
    }
    d = {};
    this.b(new $w(ax, a, d));
    this.H.In(e, d, this.oa.bind(this, a, c));
    kj(a.tileQueue, 16, 16);
  };
  Vw.prototype.oa = function(a, c, d, e, f) {
    d ? c(d) : e && (this.b(new $w(bx, a, f)), Yw(this, a.extent, a.viewState.resolution / a.pixelRatio) || this.i.putImageData(e, 0, 0), c(null));
  };
  var Zw = null;
  function Xw(a) {
    return a.map(function(a) {
      return Ci(a.a);
    });
  }
  function Ww(a) {
    for (var c = a.length,
        d = Array(c),
        e = 0; e < c; ++e) {
      var f = e,
          g = a[e],
          h = null;
      g instanceof Ig ? (g = new G({source: g}), h = new nn(g)) : g instanceof Pl && (g = new vk({source: g}), h = new mn(g));
      d[f] = h;
    }
    return d;
  }
  function $w(a, c, d) {
    Eb.call(this, a);
    this.extent = c.extent;
    this.resolution = c.viewState.resolution / c.pixelRatio;
    this.data = d;
  }
  y($w, Eb);
  var ax = "beforeoperations",
      bx = "afteroperations";
  var cx = {
    terrain: {
      tb: "jpg",
      opaque: !0
    },
    "terrain-background": {
      tb: "jpg",
      opaque: !0
    },
    "terrain-labels": {
      tb: "png",
      opaque: !1
    },
    "terrain-lines": {
      tb: "png",
      opaque: !1
    },
    "toner-background": {
      tb: "png",
      opaque: !0
    },
    toner: {
      tb: "png",
      opaque: !0
    },
    "toner-hybrid": {
      tb: "png",
      opaque: !1
    },
    "toner-labels": {
      tb: "png",
      opaque: !1
    },
    "toner-lines": {
      tb: "png",
      opaque: !1
    },
    "toner-lite": {
      tb: "png",
      opaque: !0
    },
    watercolor: {
      tb: "jpg",
      opaque: !0
    }
  },
      dx = {
        terrain: {
          minZoom: 4,
          maxZoom: 18
        },
        toner: {
          minZoom: 0,
          maxZoom: 20
        },
        watercolor: {
          minZoom: 3,
          maxZoom: 16
        }
      };
  function ex(a) {
    var c = a.layer.indexOf("-"),
        c = -1 == c ? a.layer : a.layer.slice(0, c),
        d = cx[a.layer];
    Pw.call(this, {
      attributions: fx,
      crossOrigin: "anonymous",
      maxZoom: dx[c].maxZoom,
      opaque: d.opaque,
      reprojectionErrorThreshold: a.reprojectionErrorThreshold,
      tileLoadFunction: a.tileLoadFunction,
      url: void 0 !== a.url ? a.url : "https://stamen-tiles-{a-d}.a.ssl.fastly.net/" + a.layer + "/{z}/{x}/{y}." + d.tb
    });
  }
  y(ex, Pw);
  var fx = [new Qe({html: 'Map tiles by <a href="http://stamen.com/">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0/">CC BY 3.0</a>.'}), Rw];
  function gx(a) {
    a = a || {};
    Y.call(this, {
      attributions: a.attributions,
      crossOrigin: a.crossOrigin,
      logo: a.logo,
      projection: a.projection,
      reprojectionErrorThreshold: a.reprojectionErrorThreshold,
      tileGrid: a.tileGrid,
      tileLoadFunction: a.tileLoadFunction,
      url: a.url,
      urls: a.urls,
      wrapX: void 0 !== a.wrapX ? a.wrapX : !0
    });
    this.c = a.params || {};
    this.l = yc();
  }
  y(gx, Y);
  gx.prototype.s = function() {
    return this.c;
  };
  gx.prototype.uc = function(a) {
    return a;
  };
  gx.prototype.qc = function(a, c, d) {
    var e = this.tileGrid;
    e || (e = this.Za(d));
    if (!(e.Pb().length <= a[0])) {
      var f = e.Da(a, this.l),
          g = Sb(e.Ua(a[0]), this.j);
      1 != c && (g = Rb(g, c, this.j));
      e = {
        F: "image",
        FORMAT: "PNG32",
        TRANSPARENT: !0
      };
      mb(e, this.c);
      var h = this.urls;
      h ? (d = d.lb.split(":").pop(), e.SIZE = g[0] + "," + g[1], e.BBOX = f.join(","), e.BBOXSR = d, e.IMAGESR = d, e.DPI = Math.round(e.DPI ? e.DPI * c : 90 * c), a = (1 == h.length ? h[0] : h[$b((a[1] << a[0]) + a[2], h.length)]).replace(/MapServer\/?$/, "MapServer/export").replace(/ImageServer\/?$/, "ImageServer/exportImage"), a = Xq(Zq([a], e))) : a = void 0;
      return a;
    }
  };
  gx.prototype.A = function(a) {
    mb(this.c, a);
    this.u();
  };
  function hx(a, c, d) {
    pg.call(this, a, 2);
    this.i = c;
    this.c = d;
    this.g = {};
  }
  y(hx, pg);
  hx.prototype.cb = function(a) {
    a = void 0 !== a ? x(a) : -1;
    if (a in this.g)
      return this.g[a];
    var c = this.i,
        d = nh(c[0], c[1]);
    d.strokeStyle = "black";
    d.strokeRect(.5, .5, c[0] + .5, c[1] + .5);
    d.fillStyle = "black";
    d.textAlign = "center";
    d.textBaseline = "middle";
    d.font = "24px sans-serif";
    d.fillText(this.c, c[0] / 2, c[1] / 2);
    return this.g[a] = d.canvas;
  };
  function ix(a) {
    Ig.call(this, {
      opaque: !1,
      projection: a.projection,
      tileGrid: a.tileGrid,
      wrapX: void 0 !== a.wrapX ? a.wrapX : !0
    });
  }
  y(ix, Ig);
  ix.prototype.Qb = function(a, c, d) {
    var e = this.Db(a, c, d);
    if (lg(this.a, e))
      return this.a.get(e);
    var f = Sb(this.tileGrid.Ua(a));
    a = [a, c, d];
    c = (c = Lg(this, a)) ? Lg(this, c).toString() : "";
    f = new hx(a, f, c);
    this.a.set(e, f);
    return f;
  };
  function jx(a) {
    Y.call(this, {
      attributions: a.attributions,
      crossOrigin: a.crossOrigin,
      projection: qd("EPSG:3857"),
      reprojectionErrorThreshold: a.reprojectionErrorThreshold,
      state: "loading",
      tileLoadFunction: a.tileLoadFunction,
      wrapX: void 0 !== a.wrapX ? a.wrapX : !0
    });
    if (a.jsonp)
      zw(a.url, this.l.bind(this), this.c.bind(this));
    else {
      var c = new XMLHttpRequest;
      c.addEventListener("load", this.A.bind(this));
      c.addEventListener("error", this.s.bind(this));
      c.open("GET", a.url);
      c.send();
    }
  }
  y(jx, Y);
  jx.prototype.A = function(a) {
    a = a.target;
    if (200 <= a.status && 300 > a.status) {
      var c;
      try {
        c = JSON.parse(a.responseText);
      } catch (d) {
        this.c();
        return;
      }
      this.l(c);
    } else
      this.c();
  };
  jx.prototype.s = function() {
    this.c();
  };
  jx.prototype.l = function(a) {
    var c = qd("EPSG:4326"),
        d = this.f,
        e;
    void 0 !== a.bounds && (e = cd(a.bounds, ud(c, d)));
    var f = a.minzoom || 0,
        g = a.maxzoom || 22;
    this.tileGrid = d = Hg({
      extent: Fg(d),
      maxZoom: g,
      minZoom: f
    });
    this.tileUrlFunction = qn(a.tiles, d);
    if (void 0 !== a.attribution && !this.ea()) {
      c = void 0 !== e ? e : c.G();
      e = {};
      for (var h; f <= g; ++f)
        h = f.toString(), e[h] = [yg(d, c, f)];
      this.ma([new Qe({
        html: a.attribution,
        tileRanges: e
      })]);
    }
    tg(this, "ready");
  };
  jx.prototype.c = function() {
    tg(this, "error");
  };
  function kx(a) {
    Ig.call(this, {
      projection: qd("EPSG:3857"),
      state: "loading"
    });
    this.l = void 0 !== a.preemptive ? a.preemptive : !0;
    this.i = sn;
    this.c = void 0;
    zw(a.url, this.Jm.bind(this));
  }
  y(kx, Ig);
  l = kx.prototype;
  l.bk = function() {
    return this.c;
  };
  l.oj = function(a, c, d, e, f) {
    this.tileGrid ? (c = this.tileGrid.Zd(a, c), lx(this.Qb(c[0], c[1], c[2], 1, this.f), a, d, e, f)) : !0 === f ? bh(function() {
      d.call(e, null);
    }) : d.call(e, null);
  };
  l.Jm = function(a) {
    var c = qd("EPSG:4326"),
        d = this.f,
        e;
    void 0 !== a.bounds && (e = cd(a.bounds, ud(c, d)));
    var f = a.minzoom || 0,
        g = a.maxzoom || 22;
    this.tileGrid = d = Hg({
      extent: Fg(d),
      maxZoom: g,
      minZoom: f
    });
    this.c = a.template;
    var h = a.grids;
    if (h) {
      this.i = qn(h, d);
      if (void 0 !== a.attribution) {
        c = void 0 !== e ? e : c.G();
        for (e = {}; f <= g; ++f)
          h = f.toString(), e[h] = [yg(d, c, f)];
        this.ma([new Qe({
          html: a.attribution,
          tileRanges: e
        })]);
      }
      tg(this, "ready");
    } else
      tg(this, "error");
  };
  l.Qb = function(a, c, d, e, f) {
    var g = this.Db(a, c, d);
    if (lg(this.a, g))
      return this.a.get(g);
    a = [a, c, d];
    c = Lg(this, a, f);
    e = this.i(c, e, f);
    e = new mx(a, void 0 !== e ? 0 : 4, void 0 !== e ? e : "", this.tileGrid.Da(a), this.l);
    this.a.set(g, e);
    return e;
  };
  l.Of = function(a, c, d) {
    a = this.Db(a, c, d);
    lg(this.a, a) && this.a.get(a);
  };
  function mx(a, c, d, e, f) {
    pg.call(this, a, c);
    this.l = d;
    this.g = e;
    this.o = f;
    this.j = this.i = this.c = null;
  }
  y(mx, pg);
  l = mx.prototype;
  l.cb = function() {
    return null;
  };
  l.getData = function(a) {
    if (!this.c || !this.i || !this.j)
      return null;
    var c = this.c[Math.floor((1 - (a[1] - this.g[1]) / (this.g[3] - this.g[1])) * this.c.length)];
    if ("string" !== typeof c)
      return null;
    a = c.charCodeAt(Math.floor((a[0] - this.g[0]) / (this.g[2] - this.g[0]) * c.length));
    93 <= a && a--;
    35 <= a && a--;
    a -= 32;
    return a in this.i ? this.j[this.i[a]] : null;
  };
  function lx(a, c, d, e, f) {
    0 == a.state && !0 === f ? (xb(a, "change", function() {
      d.call(e, this.getData(c));
    }, a), nx(a)) : !0 === f ? bh(function() {
      d.call(e, this.getData(c));
    }, a) : d.call(e, a.getData(c));
  }
  l.eb = function() {
    return this.l;
  };
  l.nk = function() {
    this.state = 3;
    qg(this);
  };
  l.Im = function(a) {
    this.c = a.grid;
    this.i = a.keys;
    this.j = a.data;
    this.state = 4;
    qg(this);
  };
  function nx(a) {
    0 == a.state && (a.state = 1, zw(a.l, a.Im.bind(a), a.nk.bind(a)));
  }
  l.load = function() {
    this.o && nx(this);
  };
  function ox(a) {
    a = a || {};
    var c = a.params || {};
    Y.call(this, {
      attributions: a.attributions,
      crossOrigin: a.crossOrigin,
      logo: a.logo,
      opaque: !("TRANSPARENT" in c ? c.TRANSPARENT : 1),
      projection: a.projection,
      reprojectionErrorThreshold: a.reprojectionErrorThreshold,
      tileGrid: a.tileGrid,
      tileLoadFunction: a.tileLoadFunction,
      url: a.url,
      urls: a.urls,
      wrapX: void 0 !== a.wrapX ? a.wrapX : !0
    });
    this.s = void 0 !== a.gutter ? a.gutter : 0;
    this.c = c;
    this.aa = "";
    px(this);
    this.l = !0;
    this.A = a.serverType;
    this.S = void 0 !== a.hidpi ? a.hidpi : !0;
    this.H = "";
    qx(this);
    this.U = yc();
    rx(this);
  }
  y(ox, Y);
  l = ox.prototype;
  l.Km = function(a, c, d, e) {
    d = qd(d);
    var f = this.tileGrid;
    f || (f = this.Za(d));
    c = f.Zd(a, c);
    if (!(f.Pb().length <= c[0])) {
      var g = f.Z(c[0]),
          h = f.Da(c, this.U),
          f = Sb(f.Ua(c[0]), this.j),
          k = this.s;
      0 !== k && (f = Qb(f, k, this.j), h = Ac(h, g * k, h));
      k = {
        SERVICE: "WMS",
        VERSION: "1.3.0",
        REQUEST: "GetFeatureInfo",
        FORMAT: "image/png",
        TRANSPARENT: !0,
        QUERY_LAYERS: this.c.LAYERS
      };
      mb(k, this.c, e);
      e = Math.floor((h[3] - a[1]) / g);
      k[this.l ? "I" : "X"] = Math.floor((a[0] - h[0]) / g);
      k[this.l ? "J" : "Y"] = e;
      return sx(this, c, f, h, 1, d, k);
    }
  };
  l.$e = function() {
    return this.s;
  };
  l.af = function() {
    return this.aa;
  };
  l.Db = function(a, c, d) {
    return this.H + ox.ha.Db.call(this, a, c, d);
  };
  l.Lm = function() {
    return this.c;
  };
  function sx(a, c, d, e, f, g, h) {
    var k = a.urls;
    if (k) {
      h.WIDTH = d[0];
      h.HEIGHT = d[1];
      h[a.l ? "CRS" : "SRS"] = g.lb;
      "STYLES" in a.c || (h.STYLES = new String(""));
      if (1 != f)
        switch (a.A) {
          case "geoserver":
            d = 90 * f + .5 | 0;
            h.FORMAT_OPTIONS = "FORMAT_OPTIONS" in h ? h.FORMAT_OPTIONS + (";dpi:" + d) : "dpi:" + d;
            break;
          case "mapserver":
            h.MAP_RESOLUTION = 90 * f;
            break;
          case "carmentaserver":
          case "qgis":
            h.DPI = 90 * f;
        }
      g = g.f;
      a.l && "ne" == g.substr(0, 2) && (a = e[0], e[0] = e[1], e[1] = a, a = e[2], e[2] = e[3], e[3] = a);
      h.BBOX = e.join(",");
      return Xq(Zq([1 == k.length ? k[0] : k[$b((c[1] << c[0]) + c[2], k.length)]], h));
    }
  }
  l.uc = function(a) {
    return this.S && void 0 !== this.A ? a : 1;
  };
  function qx(a) {
    var c = 0,
        d = [];
    if (a.urls) {
      var e,
          f;
      e = 0;
      for (f = a.urls.length; e < f; ++e)
        d[c++] = a.urls[e];
    }
    a.H = d.join("#");
  }
  function px(a) {
    var c = 0,
        d = [],
        e;
    for (e in a.c)
      d[c++] = e + "-" + a.c[e];
    a.aa = d.join("/");
  }
  l.qc = function(a, c, d) {
    var e = this.tileGrid;
    e || (e = this.Za(d));
    if (!(e.Pb().length <= a[0])) {
      1 == c || this.S && void 0 !== this.A || (c = 1);
      var f = e.Z(a[0]),
          g = e.Da(a, this.U),
          e = Sb(e.Ua(a[0]), this.j),
          h = this.s;
      0 !== h && (e = Qb(e, h, this.j), g = Ac(g, f * h, g));
      1 != c && (e = Rb(e, c, this.j));
      f = {
        SERVICE: "WMS",
        VERSION: "1.3.0",
        REQUEST: "GetMap",
        FORMAT: "image/png",
        TRANSPARENT: !0
      };
      mb(f, this.c);
      return sx(this, a, e, g, c, d, f);
    }
  };
  l.Mm = function(a) {
    mb(this.c, a);
    qx(this);
    px(this);
    rx(this);
    this.u();
  };
  function rx(a) {
    a.l = 0 <= Ka(a.c.VERSION || "1.3.0", "1.3");
  }
  ;
  function tx(a) {
    this.j = a.matrixIds;
    ug.call(this, {
      extent: a.extent,
      origin: a.origin,
      origins: a.origins,
      resolutions: a.resolutions,
      tileSize: a.tileSize,
      tileSizes: a.tileSizes,
      sizes: a.sizes
    });
  }
  y(tx, ug);
  tx.prototype.o = function() {
    return this.j;
  };
  function ux(a, c) {
    var d = [],
        e = [],
        f = [],
        g = [],
        h = [],
        k;
    k = qd(a.SupportedCRS.replace(/urn:ogc:def:crs:(\w+):(.*:)?(\w+)$/, "$1:$3"));
    var m = k.$b(),
        n = "ne" == k.f.substr(0, 2);
    a.TileMatrix.sort(function(a, c) {
      return c.ScaleDenominator - a.ScaleDenominator;
    });
    a.TileMatrix.forEach(function(a) {
      e.push(a.Identifier);
      var c = 2.8E-4 * a.ScaleDenominator / m,
          k = a.TileWidth,
          t = a.TileHeight;
      n ? f.push([a.TopLeftCorner[1], a.TopLeftCorner[0]]) : f.push(a.TopLeftCorner);
      d.push(c);
      g.push(k == t ? k : [k, t]);
      h.push([a.MatrixWidth, -a.MatrixHeight]);
    });
    return new tx({
      extent: c,
      origins: f,
      resolutions: d,
      matrixIds: e,
      tileSizes: g,
      sizes: h
    });
  }
  ;
  function Z(a) {
    function c(a) {
      a = "KVP" == e ? Xq(Zq([a], g)) : a.replace(/\{(\w+?)\}/g, function(a, c) {
        return c.toLowerCase() in g ? g[c.toLowerCase()] : a;
      });
      return function(c) {
        if (c) {
          var d = {
            TileMatrix: f.j[c[0]],
            TileCol: c[1],
            TileRow: -c[2] - 1
          };
          mb(d, h);
          c = a;
          return c = "KVP" == e ? Xq(Zq([c], d)) : c.replace(/\{(\w+?)\}/g, function(a, c) {
            return d[c];
          });
        }
      };
    }
    this.U = void 0 !== a.version ? a.version : "1.0.0";
    this.A = void 0 !== a.format ? a.format : "image/jpeg";
    this.c = void 0 !== a.dimensions ? a.dimensions : {};
    this.l = "";
    vx(this);
    this.H = a.layer;
    this.s = a.matrixSet;
    this.S = a.style;
    var d = a.urls;
    void 0 === d && void 0 !== a.url && (d = tn(a.url));
    var e = this.aa = void 0 !== a.requestEncoding ? a.requestEncoding : "KVP",
        f = a.tileGrid,
        g = {
          layer: this.H,
          style: this.S,
          tilematrixset: this.s
        };
    "KVP" == e && mb(g, {
      Service: "WMTS",
      Request: "GetTile",
      Version: this.U,
      Format: this.A
    });
    var h = this.c,
        k = d && 0 < d.length ? rn(d.map(c)) : sn;
    Y.call(this, {
      attributions: a.attributions,
      crossOrigin: a.crossOrigin,
      logo: a.logo,
      projection: a.projection,
      reprojectionErrorThreshold: a.reprojectionErrorThreshold,
      tileClass: a.tileClass,
      tileGrid: f,
      tileLoadFunction: a.tileLoadFunction,
      tilePixelRatio: a.tilePixelRatio,
      tileUrlFunction: k,
      urls: d,
      wrapX: void 0 !== a.wrapX ? a.wrapX : !1
    });
  }
  y(Z, Y);
  l = Z.prototype;
  l.Aj = function() {
    return this.c;
  };
  l.Nm = function() {
    return this.A;
  };
  l.af = function() {
    return this.l;
  };
  l.Om = function() {
    return this.H;
  };
  l.Nj = function() {
    return this.s;
  };
  l.$j = function() {
    return this.aa;
  };
  l.Pm = function() {
    return this.S;
  };
  l.fk = function() {
    return this.U;
  };
  function vx(a) {
    var c = 0,
        d = [],
        e;
    for (e in a.c)
      d[c++] = e + "-" + a.c[e];
    a.l = d.join("/");
  }
  l.Ko = function(a) {
    mb(this.c, a);
    vx(this);
    this.u();
  };
  function wx(a) {
    a = a || {};
    var c = a.size,
        d = c[0],
        e = c[1],
        f = [],
        g = 256;
    switch (void 0 !== a.tierSizeCalculation ? a.tierSizeCalculation : "default") {
      case "default":
        for (; d > g || e > g; )
          f.push([Math.ceil(d / g), Math.ceil(e / g)]), g += g;
        break;
      case "truncated":
        for (; d > g || e > g; )
          f.push([Math.ceil(d / g), Math.ceil(e / g)]), d >>= 1, e >>= 1;
    }
    f.push([1, 1]);
    f.reverse();
    for (var g = [1],
        h = [0],
        e = 1,
        d = f.length; e < d; e++)
      g.push(1 << e), h.push(f[e - 1][0] * f[e - 1][1] + h[e - 1]);
    g.reverse();
    var c = [0, -c[1], c[0], 0],
        c = new ug({
          extent: c,
          origin: Sc(c),
          resolutions: g
        }),
        k = a.url;
    Y.call(this, {
      attributions: a.attributions,
      crossOrigin: a.crossOrigin,
      logo: a.logo,
      reprojectionErrorThreshold: a.reprojectionErrorThreshold,
      tileClass: xx,
      tileGrid: c,
      tileUrlFunction: function(a) {
        if (a) {
          var c = a[0],
              d = a[1];
          a = -a[2] - 1;
          return k + "TileGroup" + ((d + a * f[c][0] + h[c]) / 256 | 0) + "/" + c + "-" + d + "-" + a + ".jpg";
        }
      }
    });
  }
  y(wx, Y);
  function xx(a, c, d, e, f) {
    tv.call(this, a, c, d, e, f);
    this.i = {};
  }
  y(xx, tv);
  xx.prototype.cb = function(a) {
    var c = void 0 !== a ? x(a).toString() : "";
    if (c in this.i)
      return this.i[c];
    a = xx.ha.cb.call(this, a);
    if (2 == this.state) {
      if (256 == a.width && 256 == a.height)
        return this.i[c] = a;
      var d = nh(256, 256);
      d.drawImage(a, 0, 0);
      return this.i[c] = d.canvas;
    }
    return a;
  };
  function Jk(a, c, d, e, f, g) {
    if (d + a.b > a.g || e + a.b > a.g)
      return null;
    f = yx(a, !1, c, d, e, f);
    if (!f)
      return null;
    a = yx(a, !0, c, d, e, void 0 !== g ? g : gd);
    return {
      offsetX: f.offsetX,
      offsetY: f.offsetY,
      image: f.image,
      Ig: a.image
    };
  }
  function yx(a, c, d, e, f, g) {
    var h = c ? a.i : a.c,
        k,
        m,
        n;
    m = 0;
    for (n = h.length; m < n; ++m) {
      k = h[m];
      a: {
        var p = k,
            q = d,
            r = e,
            t = f,
            v = g,
            w = void 0,
            z = void 0;
        k = void 0;
        z = 0;
        for (k = p.a.length; z < k; ++z)
          if (w = p.a[z], w.width >= r + p.b && w.height >= t + p.b) {
            k = {
              offsetX: w.x + p.b,
              offsetY: w.y + p.b,
              image: p.g
            };
            p.f[q] = k;
            v.call(void 0, p.c, w.x + p.b, w.y + p.b);
            q = p;
            r = r + p.b;
            p = t + p.b;
            v = t = void 0;
            w.width - r > w.height - p ? (t = {
              x: w.x + r,
              y: w.y,
              width: w.width - r,
              height: w.height
            }, v = {
              x: w.x,
              y: w.y + p,
              width: r,
              height: w.height - p
            }, zx(q, z, t, v)) : (t = {
              x: w.x + r,
              y: w.y,
              width: w.width - r,
              height: p
            }, v = {
              x: w.x,
              y: w.y + p,
              width: w.width,
              height: w.height - p
            }, zx(q, z, t, v));
            break a;
          }
        k = null;
      }
      if (k)
        return k;
      k || m !== n - 1 || (c ? (k = Math.min(2 * a.f, a.g), a.f = k) : (k = Math.min(2 * a.a, a.g), a.a = k), k = new Ax(k, a.b), h.push(k), ++n);
    }
  }
  function Ax(a, c) {
    this.b = c;
    this.a = [{
      x: 0,
      y: 0,
      width: a,
      height: a
    }];
    this.f = {};
    this.g = document.createElement("CANVAS");
    this.g.width = a;
    this.g.height = a;
    this.c = this.g.getContext("2d");
  }
  Ax.prototype.get = function(a) {
    return this.f[a] || null;
  };
  function zx(a, c, d, e) {
    c = [c, 1];
    0 < d.width && 0 < d.height && c.push(d);
    0 < e.width && 0 < e.height && c.push(e);
    a.a.splice.apply(a.a, c);
  }
  ;
  function Bx(a) {
    this.T = this.f = this.c = null;
    this.o = void 0 !== a.fill ? a.fill : null;
    this.ta = [0, 0];
    this.b = a.points;
    this.g = void 0 !== a.radius ? a.radius : a.radius1;
    this.i = void 0 !== a.radius2 ? a.radius2 : this.g;
    this.l = void 0 !== a.angle ? a.angle : 0;
    this.a = void 0 !== a.stroke ? a.stroke : null;
    this.H = this.ua = this.D = null;
    var c = a.atlasManager,
        d = "",
        e = "",
        f = 0,
        g = null,
        h,
        k = 0;
    this.a && (h = Ze(this.a.b), k = this.a.a, void 0 === k && (k = 1), g = this.a.g, Ah || (g = null), e = this.a.c, void 0 === e && (e = "round"), d = this.a.f, void 0 === d && (d = "round"), f = this.a.i, void 0 === f && (f = 10));
    var m = 2 * (this.g + k) + 1,
        d = {
          strokeStyle: h,
          Dd: k,
          size: m,
          lineCap: d,
          lineDash: g,
          lineJoin: e,
          miterLimit: f
        };
    if (void 0 === c) {
      this.f = document.createElement("CANVAS");
      this.f.height = m;
      this.f.width = m;
      var c = m = this.f.width,
          n = this.f.getContext("2d");
      this.sh(d, n, 0, 0);
      this.o ? this.T = this.f : (n = this.T = document.createElement("CANVAS"), n.height = d.size, n.width = d.size, n = n.getContext("2d"), this.rh(d, n, 0, 0));
    } else
      m = Math.round(m), (e = !this.o) && (n = this.rh.bind(this, d)), f = this.a ? Hk(this.a) : "-", g = this.o ? Bk(this.o) : "-", this.c && f == this.c[1] && g == this.c[2] && this.g == this.c[3] && this.i == this.c[4] && this.l == this.c[5] && this.b == this.c[6] || (this.c = ["r" + f + g + (void 0 !== this.g ? this.g.toString() : "-") + (void 0 !== this.i ? this.i.toString() : "-") + (void 0 !== this.l ? this.l.toString() : "-") + (void 0 !== this.b ? this.b.toString() : "-"), f, g, this.g, this.i, this.l, this.b]), n = Jk(c, this.c[0], m, m, this.sh.bind(this, d), n), this.f = n.image, this.ta = [n.offsetX, n.offsetY], c = n.image.width, this.T = e ? n.Ig : this.f;
    this.D = [m / 2, m / 2];
    this.ua = [m, m];
    this.H = [c, c];
    Vi.call(this, {
      opacity: 1,
      rotateWithView: void 0 !== a.rotateWithView ? a.rotateWithView : !1,
      rotation: void 0 !== a.rotation ? a.rotation : 0,
      scale: 1,
      snapToPixel: void 0 !== a.snapToPixel ? a.snapToPixel : !0
    });
  }
  y(Bx, Vi);
  l = Bx.prototype;
  l.Yb = function() {
    return this.D;
  };
  l.Um = function() {
    return this.l;
  };
  l.Vm = function() {
    return this.o;
  };
  l.pe = function() {
    return this.T;
  };
  l.gc = function() {
    return this.f;
  };
  l.qd = function() {
    return this.H;
  };
  l.wd = function() {
    return 2;
  };
  l.Ha = function() {
    return this.ta;
  };
  l.Wm = function() {
    return this.b;
  };
  l.Xm = function() {
    return this.g;
  };
  l.Zj = function() {
    return this.i;
  };
  l.Eb = function() {
    return this.ua;
  };
  l.Ym = function() {
    return this.a;
  };
  l.hf = ua;
  l.load = ua;
  l.Nf = ua;
  l.sh = function(a, c, d, e) {
    var f;
    c.setTransform(1, 0, 0, 1, 0, 0);
    c.translate(d, e);
    c.beginPath();
    this.i !== this.g && (this.b *= 2);
    for (d = 0; d <= this.b; d++)
      e = 2 * d * Math.PI / this.b - Math.PI / 2 + this.l, f = 0 === d % 2 ? this.g : this.i, c.lineTo(a.size / 2 + f * Math.cos(e), a.size / 2 + f * Math.sin(e));
    this.o && (c.fillStyle = af(this.o.b), c.fill());
    this.a && (c.strokeStyle = a.strokeStyle, c.lineWidth = a.Dd, a.lineDash && c.setLineDash(a.lineDash), c.lineCap = a.lineCap, c.lineJoin = a.lineJoin, c.miterLimit = a.miterLimit, c.stroke());
    c.closePath();
  };
  l.rh = function(a, c, d, e) {
    c.setTransform(1, 0, 0, 1, 0, 0);
    c.translate(d, e);
    c.beginPath();
    this.i !== this.g && (this.b *= 2);
    var f;
    for (d = 0; d <= this.b; d++)
      f = 2 * d * Math.PI / this.b - Math.PI / 2 + this.l, e = 0 === d % 2 ? this.g : this.i, c.lineTo(a.size / 2 + e * Math.cos(f), a.size / 2 + e * Math.sin(f));
    c.fillStyle = wk;
    c.fill();
    this.a && (c.strokeStyle = a.strokeStyle, c.lineWidth = a.Dd, a.lineDash && c.setLineDash(a.lineDash), c.stroke());
    c.closePath();
  };
  u("ol.animation.bounce", function(a) {
    var c = a.resolution,
        d = a.start ? a.start : Date.now(),
        e = void 0 !== a.duration ? a.duration : 1E3,
        f = a.easing ? a.easing : Ge;
    return function(a, h) {
      if (h.time < d)
        return h.animate = !0, h.viewHints[0] += 1, !0;
      if (h.time < d + e) {
        var k = f((h.time - d) / e),
            m = c - h.viewState.resolution;
        h.animate = !0;
        h.viewState.resolution += k * m;
        h.viewHints[0] += 1;
        return !0;
      }
      return !1;
    };
  }, OPENLAYERS);
  u("ol.animation.pan", He, OPENLAYERS);
  u("ol.animation.rotate", Ie, OPENLAYERS);
  u("ol.animation.zoom", Je, OPENLAYERS);
  u("ol.Attribution", Qe, OPENLAYERS);
  Qe.prototype.getHTML = Qe.prototype.g;
  Re.prototype.element = Re.prototype.element;
  u("ol.Collection", Se, OPENLAYERS);
  Se.prototype.clear = Se.prototype.clear;
  Se.prototype.extend = Se.prototype.jf;
  Se.prototype.forEach = Se.prototype.forEach;
  Se.prototype.getArray = Se.prototype.il;
  Se.prototype.item = Se.prototype.item;
  Se.prototype.getLength = Se.prototype.ac;
  Se.prototype.insertAt = Se.prototype.ce;
  Se.prototype.pop = Se.prototype.pop;
  Se.prototype.push = Se.prototype.push;
  Se.prototype.remove = Se.prototype.remove;
  Se.prototype.removeAt = Se.prototype.If;
  Se.prototype.setAt = Se.prototype.qo;
  u("ol.colorlike.asColorLike", af, OPENLAYERS);
  u("ol.coordinate.add", bc, OPENLAYERS);
  u("ol.coordinate.createStringXY", function(a) {
    return function(c) {
      return jc(c, a);
    };
  }, OPENLAYERS);
  u("ol.coordinate.format", ec, OPENLAYERS);
  u("ol.coordinate.rotate", gc, OPENLAYERS);
  u("ol.coordinate.toStringHDMS", function(a, c) {
    return a ? dc(a[1], "NS", c) + " " + dc(a[0], "EW", c) : "";
  }, OPENLAYERS);
  u("ol.coordinate.toStringXY", jc, OPENLAYERS);
  u("ol.DeviceOrientation", cp, OPENLAYERS);
  cp.prototype.getAlpha = cp.prototype.uj;
  cp.prototype.getBeta = cp.prototype.xj;
  cp.prototype.getGamma = cp.prototype.Dj;
  cp.prototype.getHeading = cp.prototype.jl;
  cp.prototype.getTracking = cp.prototype.Pg;
  cp.prototype.setTracking = cp.prototype.kf;
  u("ol.easing.easeIn", Ce, OPENLAYERS);
  u("ol.easing.easeOut", De, OPENLAYERS);
  u("ol.easing.inAndOut", Ee, OPENLAYERS);
  u("ol.easing.linear", Fe, OPENLAYERS);
  u("ol.easing.upAndDown", Ge, OPENLAYERS);
  u("ol.extent.boundingExtent", xc, OPENLAYERS);
  u("ol.extent.buffer", Ac, OPENLAYERS);
  u("ol.extent.containsCoordinate", Dc, OPENLAYERS);
  u("ol.extent.containsExtent", Gc, OPENLAYERS);
  u("ol.extent.containsXY", Fc, OPENLAYERS);
  u("ol.extent.createEmpty", yc, OPENLAYERS);
  u("ol.extent.equals", Mc, OPENLAYERS);
  u("ol.extent.extend", Nc, OPENLAYERS);
  u("ol.extent.getBottomLeft", Pc, OPENLAYERS);
  u("ol.extent.getBottomRight", Qc, OPENLAYERS);
  u("ol.extent.getCenter", Yc, OPENLAYERS);
  u("ol.extent.getHeight", Xc, OPENLAYERS);
  u("ol.extent.getIntersection", $c, OPENLAYERS);
  u("ol.extent.getSize", function(a) {
    return [a[2] - a[0], a[3] - a[1]];
  }, OPENLAYERS);
  u("ol.extent.getTopLeft", Sc, OPENLAYERS);
  u("ol.extent.getTopRight", Rc, OPENLAYERS);
  u("ol.extent.getWidth", Wc, OPENLAYERS);
  u("ol.extent.intersects", ad, OPENLAYERS);
  u("ol.extent.isEmpty", Vc, OPENLAYERS);
  u("ol.extent.applyTransform", cd, OPENLAYERS);
  u("ol.Feature", Xl, OPENLAYERS);
  Xl.prototype.clone = Xl.prototype.clone;
  Xl.prototype.getGeometry = Xl.prototype.X;
  Xl.prototype.getId = Xl.prototype.Sa;
  Xl.prototype.getGeometryName = Xl.prototype.Fj;
  Xl.prototype.getStyle = Xl.prototype.ll;
  Xl.prototype.getStyleFunction = Xl.prototype.bc;
  Xl.prototype.setGeometry = Xl.prototype.Pa;
  Xl.prototype.setStyle = Xl.prototype.lf;
  Xl.prototype.setId = Xl.prototype.jc;
  Xl.prototype.setGeometryName = Xl.prototype.Bc;
  u("ol.featureloader.tile", Pm, OPENLAYERS);
  u("ol.featureloader.xhr", Qm, OPENLAYERS);
  u("ol.Geolocation", hv, OPENLAYERS);
  hv.prototype.getAccuracy = hv.prototype.sj;
  hv.prototype.getAccuracyGeometry = hv.prototype.tj;
  hv.prototype.getAltitude = hv.prototype.vj;
  hv.prototype.getAltitudeAccuracy = hv.prototype.wj;
  hv.prototype.getHeading = hv.prototype.nl;
  hv.prototype.getPosition = hv.prototype.ol;
  hv.prototype.getProjection = hv.prototype.Qg;
  hv.prototype.getSpeed = hv.prototype.ak;
  hv.prototype.getTracking = hv.prototype.Rg;
  hv.prototype.getTrackingOptions = hv.prototype.Cg;
  hv.prototype.setProjection = hv.prototype.Sg;
  hv.prototype.setTracking = hv.prototype.ge;
  hv.prototype.setTrackingOptions = hv.prototype.$h;
  u("ol.Graticule", nv, OPENLAYERS);
  nv.prototype.getMap = nv.prototype.rl;
  nv.prototype.getMeridians = nv.prototype.Oj;
  nv.prototype.getParallels = nv.prototype.Vj;
  nv.prototype.setMap = nv.prototype.setMap;
  u("ol.has.DEVICE_PIXEL_RATIO", zh, OPENLAYERS);
  u("ol.has.CANVAS", Bh, OPENLAYERS);
  u("ol.has.DEVICE_ORIENTATION", Ch, OPENLAYERS);
  u("ol.has.GEOLOCATION", Dh, OPENLAYERS);
  u("ol.has.TOUCH", Eh, OPENLAYERS);
  u("ol.has.WEBGL", uh, OPENLAYERS);
  sv.prototype.getImage = sv.prototype.a;
  tv.prototype.getImage = tv.prototype.cb;
  u("ol.Kinetic", lj, OPENLAYERS);
  u("ol.loadingstrategy.all", Rm, OPENLAYERS);
  u("ol.loadingstrategy.bbox", function(a) {
    return [a];
  }, OPENLAYERS);
  u("ol.loadingstrategy.tile", function(a) {
    return function(c, d) {
      var e = Dg(a, d),
          f = yg(a, c, e),
          g = [],
          e = [e, 0, 0];
      for (e[1] = f.ra; e[1] <= f.va; ++e[1])
        for (e[2] = f.xa; e[2] <= f.Aa; ++e[2])
          g.push(a.Da(e));
      return g;
    };
  }, OPENLAYERS);
  u("ol.Map", S, OPENLAYERS);
  S.prototype.addControl = S.prototype.bj;
  S.prototype.addInteraction = S.prototype.cj;
  S.prototype.addLayer = S.prototype.ag;
  S.prototype.addOverlay = S.prototype.bg;
  S.prototype.beforeRender = S.prototype.Ra;
  S.prototype.forEachFeatureAtPixel = S.prototype.od;
  S.prototype.forEachLayerAtPixel = S.prototype.vl;
  S.prototype.hasFeatureAtPixel = S.prototype.Ok;
  S.prototype.getEventCoordinate = S.prototype.Bj;
  S.prototype.getEventPixel = S.prototype.Td;
  S.prototype.getTarget = S.prototype.Ug;
  S.prototype.getTargetElement = S.prototype.tc;
  S.prototype.getCoordinateFromPixel = S.prototype.La;
  S.prototype.getControls = S.prototype.zj;
  S.prototype.getOverlays = S.prototype.Tj;
  S.prototype.getOverlayById = S.prototype.Sj;
  S.prototype.getInteractions = S.prototype.Gj;
  S.prototype.getLayerGroup = S.prototype.sc;
  S.prototype.getLayers = S.prototype.Tg;
  S.prototype.getPixelFromCoordinate = S.prototype.Ta;
  S.prototype.getSize = S.prototype.Va;
  S.prototype.getView = S.prototype.$;
  S.prototype.getViewport = S.prototype.gk;
  S.prototype.renderSync = S.prototype.mo;
  S.prototype.render = S.prototype.render;
  S.prototype.removeControl = S.prototype.eo;
  S.prototype.removeInteraction = S.prototype.fo;
  S.prototype.removeLayer = S.prototype.io;
  S.prototype.removeOverlay = S.prototype.jo;
  S.prototype.setLayerGroup = S.prototype.Sh;
  S.prototype.setSize = S.prototype.Mf;
  S.prototype.setTarget = S.prototype.wl;
  S.prototype.setView = S.prototype.Ao;
  S.prototype.updateSize = S.prototype.Xc;
  ni.prototype.originalEvent = ni.prototype.originalEvent;
  ni.prototype.pixel = ni.prototype.pixel;
  ni.prototype.coordinate = ni.prototype.coordinate;
  ni.prototype.dragging = ni.prototype.dragging;
  ni.prototype.preventDefault = ni.prototype.preventDefault;
  ni.prototype.stopPropagation = ni.prototype.stopPropagation;
  ig.prototype.map = ig.prototype.map;
  ig.prototype.frameState = ig.prototype.frameState;
  Lb.prototype.key = Lb.prototype.key;
  Lb.prototype.oldValue = Lb.prototype.oldValue;
  u("ol.Object", Mb, OPENLAYERS);
  Mb.prototype.get = Mb.prototype.get;
  Mb.prototype.getKeys = Mb.prototype.O;
  Mb.prototype.getProperties = Mb.prototype.P;
  Mb.prototype.set = Mb.prototype.set;
  Mb.prototype.setProperties = Mb.prototype.C;
  Mb.prototype.unset = Mb.prototype.R;
  u("ol.Observable", Jb, OPENLAYERS);
  u("ol.Observable.unByKey", Kb, OPENLAYERS);
  Jb.prototype.changed = Jb.prototype.u;
  Jb.prototype.dispatchEvent = Jb.prototype.b;
  Jb.prototype.getRevision = Jb.prototype.L;
  Jb.prototype.on = Jb.prototype.I;
  Jb.prototype.once = Jb.prototype.M;
  Jb.prototype.un = Jb.prototype.K;
  Jb.prototype.unByKey = Jb.prototype.N;
  u("ol.inherits", y, OPENLAYERS);
  u("ol.Overlay", Jo, OPENLAYERS);
  Jo.prototype.getElement = Jo.prototype.he;
  Jo.prototype.getId = Jo.prototype.Sa;
  Jo.prototype.getMap = Jo.prototype.ie;
  Jo.prototype.getOffset = Jo.prototype.Ag;
  Jo.prototype.getPosition = Jo.prototype.Vg;
  Jo.prototype.getPositioning = Jo.prototype.Bg;
  Jo.prototype.setElement = Jo.prototype.Oh;
  Jo.prototype.setMap = Jo.prototype.setMap;
  Jo.prototype.setOffset = Jo.prototype.Uh;
  Jo.prototype.setPosition = Jo.prototype.mf;
  Jo.prototype.setPositioning = Jo.prototype.Xh;
  u("ol.render.toContext", function(a, c) {
    var d = a.canvas,
        e = c ? c : {},
        f = e.pixelRatio || zh;
    if (e = e.size)
      d.width = e[0] * f, d.height = e[1] * f, d.style.width = e[0] + "px", d.style.height = e[1] + "px";
    d = [0, 0, d.width, d.height];
    e = Ji(nc(), 0, 0, f, f, 0, 0, 0);
    return new Rk(a, f, d, e, 0);
  }, OPENLAYERS);
  u("ol.size.toSize", Sb, OPENLAYERS);
  pg.prototype.getTileCoord = pg.prototype.f;
  Zl.prototype.getFormat = Zl.prototype.xl;
  Zl.prototype.setFeatures = Zl.prototype.Ph;
  Zl.prototype.setLoader = Zl.prototype.Th;
  u("ol.View", xe, OPENLAYERS);
  xe.prototype.constrainCenter = xe.prototype.Qd;
  xe.prototype.constrainResolution = xe.prototype.constrainResolution;
  xe.prototype.constrainRotation = xe.prototype.constrainRotation;
  xe.prototype.getCenter = xe.prototype.Wa;
  xe.prototype.calculateExtent = xe.prototype.bd;
  xe.prototype.getProjection = xe.prototype.yl;
  xe.prototype.getResolution = xe.prototype.Z;
  xe.prototype.getRotation = xe.prototype.Ka;
  xe.prototype.getZoom = xe.prototype.ik;
  xe.prototype.fit = xe.prototype.Xe;
  xe.prototype.centerOn = xe.prototype.lj;
  xe.prototype.rotate = xe.prototype.rotate;
  xe.prototype.setCenter = xe.prototype.mb;
  xe.prototype.setResolution = xe.prototype.Vb;
  xe.prototype.setRotation = xe.prototype.je;
  xe.prototype.setZoom = xe.prototype.Do;
  u("ol.xml.getAllTextContent", im, OPENLAYERS);
  u("ol.xml.parse", Cm, OPENLAYERS);
  Qn.prototype.getGL = Qn.prototype.qn;
  Qn.prototype.useProgram = Qn.prototype.we;
  u("ol.tilegrid.TileGrid", ug, OPENLAYERS);
  ug.prototype.getMaxZoom = ug.prototype.yg;
  ug.prototype.getMinZoom = ug.prototype.zg;
  ug.prototype.getOrigin = ug.prototype.Ha;
  ug.prototype.getResolution = ug.prototype.Z;
  ug.prototype.getResolutions = ug.prototype.Pb;
  ug.prototype.getTileCoordExtent = ug.prototype.Da;
  ug.prototype.getTileCoordForCoordAndResolution = ug.prototype.Zd;
  ug.prototype.getTileCoordForCoordAndZ = ug.prototype.ud;
  ug.prototype.getTileSize = ug.prototype.Ua;
  u("ol.tilegrid.createXYZ", Hg, OPENLAYERS);
  u("ol.tilegrid.WMTS", tx, OPENLAYERS);
  tx.prototype.getMatrixIds = tx.prototype.o;
  u("ol.tilegrid.WMTS.createFromCapabilitiesMatrixSet", ux, OPENLAYERS);
  u("ol.style.AtlasManager", function(a) {
    a = a || {};
    this.a = void 0 !== a.initialSize ? a.initialSize : 256;
    this.g = void 0 !== a.maxSize ? a.maxSize : void 0 !== sa ? sa : 2048;
    this.b = void 0 !== a.space ? a.space : 1;
    this.c = [new Ax(this.a, this.b)];
    this.f = this.a;
    this.i = [new Ax(this.f, this.b)];
  }, OPENLAYERS);
  u("ol.style.Circle", Ik, OPENLAYERS);
  Ik.prototype.getFill = Ik.prototype.Qm;
  Ik.prototype.getImage = Ik.prototype.gc;
  Ik.prototype.getRadius = Ik.prototype.Rm;
  Ik.prototype.getStroke = Ik.prototype.Sm;
  u("ol.style.Fill", Ak, OPENLAYERS);
  Ak.prototype.getColor = Ak.prototype.g;
  Ak.prototype.setColor = Ak.prototype.f;
  u("ol.style.Icon", Wi, OPENLAYERS);
  Wi.prototype.getAnchor = Wi.prototype.Yb;
  Wi.prototype.getImage = Wi.prototype.gc;
  Wi.prototype.getOrigin = Wi.prototype.Ha;
  Wi.prototype.getSrc = Wi.prototype.Tm;
  Wi.prototype.getSize = Wi.prototype.Eb;
  Wi.prototype.load = Wi.prototype.load;
  u("ol.style.Image", Vi, OPENLAYERS);
  Vi.prototype.getOpacity = Vi.prototype.qe;
  Vi.prototype.getRotateWithView = Vi.prototype.Xd;
  Vi.prototype.getRotation = Vi.prototype.re;
  Vi.prototype.getScale = Vi.prototype.se;
  Vi.prototype.getSnapToPixel = Vi.prototype.Yd;
  Vi.prototype.setOpacity = Vi.prototype.te;
  Vi.prototype.setRotation = Vi.prototype.ue;
  Vi.prototype.setScale = Vi.prototype.ve;
  u("ol.style.RegularShape", Bx, OPENLAYERS);
  Bx.prototype.getAnchor = Bx.prototype.Yb;
  Bx.prototype.getAngle = Bx.prototype.Um;
  Bx.prototype.getFill = Bx.prototype.Vm;
  Bx.prototype.getImage = Bx.prototype.gc;
  Bx.prototype.getOrigin = Bx.prototype.Ha;
  Bx.prototype.getPoints = Bx.prototype.Wm;
  Bx.prototype.getRadius = Bx.prototype.Xm;
  Bx.prototype.getRadius2 = Bx.prototype.Zj;
  Bx.prototype.getSize = Bx.prototype.Eb;
  Bx.prototype.getStroke = Bx.prototype.Ym;
  u("ol.style.Stroke", Gk, OPENLAYERS);
  Gk.prototype.getColor = Gk.prototype.Zm;
  Gk.prototype.getLineCap = Gk.prototype.Jj;
  Gk.prototype.getLineDash = Gk.prototype.$m;
  Gk.prototype.getLineJoin = Gk.prototype.Kj;
  Gk.prototype.getMiterLimit = Gk.prototype.Pj;
  Gk.prototype.getWidth = Gk.prototype.an;
  Gk.prototype.setColor = Gk.prototype.bn;
  Gk.prototype.setLineCap = Gk.prototype.vo;
  Gk.prototype.setLineDash = Gk.prototype.cn;
  Gk.prototype.setLineJoin = Gk.prototype.wo;
  Gk.prototype.setMiterLimit = Gk.prototype.xo;
  Gk.prototype.setWidth = Gk.prototype.Bo;
  u("ol.style.Style", Kk, OPENLAYERS);
  Kk.prototype.getGeometry = Kk.prototype.X;
  Kk.prototype.getGeometryFunction = Kk.prototype.Ej;
  Kk.prototype.getFill = Kk.prototype.dn;
  Kk.prototype.getImage = Kk.prototype.en;
  Kk.prototype.getStroke = Kk.prototype.fn;
  Kk.prototype.getText = Kk.prototype.Fa;
  Kk.prototype.getZIndex = Kk.prototype.gn;
  Kk.prototype.setGeometry = Kk.prototype.th;
  Kk.prototype.setZIndex = Kk.prototype.hn;
  u("ol.style.Text", sr, OPENLAYERS);
  sr.prototype.getFont = sr.prototype.Cj;
  sr.prototype.getOffsetX = sr.prototype.Qj;
  sr.prototype.getOffsetY = sr.prototype.Rj;
  sr.prototype.getFill = sr.prototype.jn;
  sr.prototype.getRotation = sr.prototype.kn;
  sr.prototype.getScale = sr.prototype.ln;
  sr.prototype.getStroke = sr.prototype.mn;
  sr.prototype.getText = sr.prototype.Fa;
  sr.prototype.getTextAlign = sr.prototype.ck;
  sr.prototype.getTextBaseline = sr.prototype.dk;
  sr.prototype.setFont = sr.prototype.so;
  sr.prototype.setOffsetX = sr.prototype.Vh;
  sr.prototype.setOffsetY = sr.prototype.Wh;
  sr.prototype.setFill = sr.prototype.ro;
  sr.prototype.setRotation = sr.prototype.nn;
  sr.prototype.setScale = sr.prototype.pn;
  sr.prototype.setStroke = sr.prototype.yo;
  sr.prototype.setText = sr.prototype.Yh;
  sr.prototype.setTextAlign = sr.prototype.Zh;
  sr.prototype.setTextBaseline = sr.prototype.zo;
  u("ol.Sphere", kd, OPENLAYERS);
  kd.prototype.geodesicArea = kd.prototype.a;
  kd.prototype.haversineDistance = kd.prototype.b;
  u("ol.source.BingMaps", Ew, OPENLAYERS);
  u("ol.source.BingMaps.TOS_ATTRIBUTION", Fw, OPENLAYERS);
  u("ol.source.Cluster", Gw, OPENLAYERS);
  Gw.prototype.getSource = Gw.prototype.aa;
  u("ol.source.ImageCanvas", Wl, OPENLAYERS);
  u("ol.source.ImageMapGuide", Jw, OPENLAYERS);
  Jw.prototype.getParams = Jw.prototype.tm;
  Jw.prototype.getImageLoadFunction = Jw.prototype.sm;
  Jw.prototype.updateParams = Jw.prototype.vm;
  Jw.prototype.setImageLoadFunction = Jw.prototype.um;
  u("ol.source.Image", Pl, OPENLAYERS);
  Rl.prototype.image = Rl.prototype.image;
  u("ol.source.ImageStatic", Kw, OPENLAYERS);
  u("ol.source.ImageVector", kn, OPENLAYERS);
  kn.prototype.getSource = kn.prototype.wm;
  kn.prototype.getStyle = kn.prototype.xm;
  kn.prototype.getStyleFunction = kn.prototype.ym;
  kn.prototype.setStyle = kn.prototype.kh;
  u("ol.source.ImageWMS", Lw, OPENLAYERS);
  Lw.prototype.getGetFeatureInfoUrl = Lw.prototype.Bm;
  Lw.prototype.getParams = Lw.prototype.Dm;
  Lw.prototype.getImageLoadFunction = Lw.prototype.Cm;
  Lw.prototype.getUrl = Lw.prototype.Em;
  Lw.prototype.setImageLoadFunction = Lw.prototype.Fm;
  Lw.prototype.setUrl = Lw.prototype.Gm;
  Lw.prototype.updateParams = Lw.prototype.Hm;
  u("ol.source.MapQuest", Sw, OPENLAYERS);
  Sw.prototype.getLayer = Sw.prototype.l;
  u("ol.source.OSM", Qw, OPENLAYERS);
  u("ol.source.OSM.ATTRIBUTION", Rw, OPENLAYERS);
  u("ol.source.Raster", Vw, OPENLAYERS);
  Vw.prototype.setOperation = Vw.prototype.s;
  $w.prototype.extent = $w.prototype.extent;
  $w.prototype.resolution = $w.prototype.resolution;
  $w.prototype.data = $w.prototype.data;
  u("ol.source.Source", rg, OPENLAYERS);
  rg.prototype.getAttributions = rg.prototype.ea;
  rg.prototype.getLogo = rg.prototype.pa;
  rg.prototype.getProjection = rg.prototype.sa;
  rg.prototype.getState = rg.prototype.V;
  rg.prototype.setAttributions = rg.prototype.ma;
  u("ol.source.Stamen", ex, OPENLAYERS);
  u("ol.source.TileArcGISRest", gx, OPENLAYERS);
  gx.prototype.getParams = gx.prototype.s;
  gx.prototype.updateParams = gx.prototype.A;
  u("ol.source.TileDebug", ix, OPENLAYERS);
  u("ol.source.TileImage", Y, OPENLAYERS);
  Y.prototype.setRenderReprojectionEdges = Y.prototype.zb;
  Y.prototype.setTileGridForProjection = Y.prototype.Ab;
  u("ol.source.TileJSON", jx, OPENLAYERS);
  u("ol.source.Tile", Ig, OPENLAYERS);
  Ig.prototype.getTileGrid = Ig.prototype.Ma;
  Mg.prototype.tile = Mg.prototype.tile;
  u("ol.source.TileUTFGrid", kx, OPENLAYERS);
  kx.prototype.getTemplate = kx.prototype.bk;
  kx.prototype.forDataAtCoordinateAndResolution = kx.prototype.oj;
  u("ol.source.TileWMS", ox, OPENLAYERS);
  ox.prototype.getGetFeatureInfoUrl = ox.prototype.Km;
  ox.prototype.getParams = ox.prototype.Lm;
  ox.prototype.updateParams = ox.prototype.Mm;
  un.prototype.getTileLoadFunction = un.prototype.$a;
  un.prototype.getTileUrlFunction = un.prototype.ab;
  un.prototype.getUrls = un.prototype.bb;
  un.prototype.setTileLoadFunction = un.prototype.jb;
  un.prototype.setTileUrlFunction = un.prototype.Na;
  un.prototype.setUrl = un.prototype.Xa;
  un.prototype.setUrls = un.prototype.Ya;
  u("ol.source.Vector", bn, OPENLAYERS);
  bn.prototype.addFeature = bn.prototype.rb;
  bn.prototype.addFeatures = bn.prototype.Gc;
  bn.prototype.clear = bn.prototype.clear;
  bn.prototype.forEachFeature = bn.prototype.mg;
  bn.prototype.forEachFeatureInExtent = bn.prototype.ub;
  bn.prototype.forEachFeatureIntersectingExtent = bn.prototype.ng;
  bn.prototype.getFeaturesCollection = bn.prototype.ug;
  bn.prototype.getFeatures = bn.prototype.oe;
  bn.prototype.getFeaturesAtCoordinate = bn.prototype.tg;
  bn.prototype.getFeaturesInExtent = bn.prototype.Ze;
  bn.prototype.getClosestFeatureToCoordinate = bn.prototype.pg;
  bn.prototype.getExtent = bn.prototype.G;
  bn.prototype.getFeatureById = bn.prototype.sg;
  bn.prototype.removeFeature = bn.prototype.nb;
  gn.prototype.feature = gn.prototype.feature;
  u("ol.source.VectorTile", vn, OPENLAYERS);
  u("ol.source.WMTS", Z, OPENLAYERS);
  Z.prototype.getDimensions = Z.prototype.Aj;
  Z.prototype.getFormat = Z.prototype.Nm;
  Z.prototype.getLayer = Z.prototype.Om;
  Z.prototype.getMatrixSet = Z.prototype.Nj;
  Z.prototype.getRequestEncoding = Z.prototype.$j;
  Z.prototype.getStyle = Z.prototype.Pm;
  Z.prototype.getVersion = Z.prototype.fk;
  Z.prototype.updateDimensions = Z.prototype.Ko;
  u("ol.source.WMTS.optionsFromCapabilities", function(a, c) {
    var d = $a(a.Contents.Layer, function(a) {
      return a.Identifier == c.layer;
    }),
        e = a.Contents.TileMatrixSet,
        f,
        g;
    f = 1 < d.TileMatrixSetLink.length ? "projection" in c ? eb(d.TileMatrixSetLink, function(a) {
      return $a(e, function(c) {
        return c.Identifier == a.TileMatrixSet;
      }).SupportedCRS.replace(/urn:ogc:def:crs:(\w+):(.*:)?(\w+)$/, "$1:$3") == c.projection;
    }) : eb(d.TileMatrixSetLink, function(a) {
      return a.TileMatrixSet == c.matrixSet;
    }) : 0;
    0 > f && (f = 0);
    g = d.TileMatrixSetLink[f].TileMatrixSet;
    var h = d.Format[0];
    "format" in c && (h = c.format);
    f = eb(d.Style, function(a) {
      return "style" in c ? a.Title == c.style : a.isDefault;
    });
    0 > f && (f = 0);
    f = d.Style[f].Identifier;
    var k = {};
    "Dimension" in d && d.Dimension.forEach(function(a) {
      var c = a.Identifier,
          d = a.Default;
      void 0 === d && (d = a.Value[0]);
      k[c] = d;
    });
    var m = $a(a.Contents.TileMatrixSet, function(a) {
      return a.Identifier == g;
    }),
        n;
    n = "projection" in c ? qd(c.projection) : qd(m.SupportedCRS.replace(/urn:ogc:def:crs:(\w+):(.*:)?(\w+)$/, "$1:$3"));
    var p = d.WGS84BoundingBox,
        q,
        r;
    void 0 !== p && (r = qd("EPSG:4326").G(), r = p[0] == r[0] && p[2] == r[2], q = Ld(p, "EPSG:4326", n), (p = n.G()) && (Gc(p, q) || (q = void 0)));
    var m = ux(m, q),
        t = [];
    q = c.requestEncoding;
    q = void 0 !== q ? q : "";
    if (a.hasOwnProperty("OperationsMetadata") && a.OperationsMetadata.hasOwnProperty("GetTile") && 0 !== q.indexOf("REST"))
      for (var d = a.OperationsMetadata.GetTile.DCP.HTTP.Get,
          p = 0,
          v = d.length; p < v; ++p) {
        var w = $a(d[p].Constraint, function(a) {
          return "GetEncoding" == a.name;
        }).AllowedValues.Value;
        0 < w.length && Va(w, "KVP") && (q = "KVP", t.push(d[p].href));
      }
    else
      q = "REST", d.ResourceURL.forEach(function(a) {
        "tile" == a.resourceType && (h = a.format, t.push(a.template));
      });
    return {
      urls: t,
      layer: c.layer,
      matrixSet: g,
      format: h,
      projection: n,
      requestEncoding: q,
      tileGrid: m,
      style: f,
      dimensions: k,
      wrapX: r
    };
  }, OPENLAYERS);
  u("ol.source.XYZ", Pw, OPENLAYERS);
  u("ol.source.Zoomify", wx, OPENLAYERS);
  Ei.prototype.vectorContext = Ei.prototype.vectorContext;
  Ei.prototype.frameState = Ei.prototype.frameState;
  Ei.prototype.context = Ei.prototype.context;
  Ei.prototype.glContext = Ei.prototype.glContext;
  Bl.prototype.get = Bl.prototype.get;
  Bl.prototype.getExtent = Bl.prototype.G;
  Bl.prototype.getGeometry = Bl.prototype.X;
  Bl.prototype.getProperties = Bl.prototype.om;
  Bl.prototype.getType = Bl.prototype.W;
  u("ol.render.VectorContext", Di, OPENLAYERS);
  no.prototype.drawAsync = no.prototype.ld;
  no.prototype.drawCircleGeometry = no.prototype.Ic;
  no.prototype.drawFeature = no.prototype.We;
  no.prototype.drawGeometryCollectionGeometry = no.prototype.Sd;
  no.prototype.drawPointGeometry = no.prototype.Ib;
  no.prototype.drawLineStringGeometry = no.prototype.Xb;
  no.prototype.drawMultiLineStringGeometry = no.prototype.Jc;
  no.prototype.drawMultiPointGeometry = no.prototype.Hb;
  no.prototype.drawMultiPolygonGeometry = no.prototype.Kc;
  no.prototype.drawPolygonGeometry = no.prototype.Lc;
  no.prototype.drawText = no.prototype.Jb;
  no.prototype.setFillStrokeStyle = no.prototype.hb;
  no.prototype.setImageStyle = no.prototype.yb;
  no.prototype.setTextStyle = no.prototype.ib;
  Rk.prototype.drawAsync = Rk.prototype.ld;
  Rk.prototype.drawCircleGeometry = Rk.prototype.Ic;
  Rk.prototype.drawFeature = Rk.prototype.We;
  Rk.prototype.drawPointGeometry = Rk.prototype.Ib;
  Rk.prototype.drawMultiPointGeometry = Rk.prototype.Hb;
  Rk.prototype.drawLineStringGeometry = Rk.prototype.Xb;
  Rk.prototype.drawMultiLineStringGeometry = Rk.prototype.Jc;
  Rk.prototype.drawPolygonGeometry = Rk.prototype.Lc;
  Rk.prototype.drawMultiPolygonGeometry = Rk.prototype.Kc;
  Rk.prototype.setFillStrokeStyle = Rk.prototype.hb;
  Rk.prototype.setImageStyle = Rk.prototype.yb;
  Rk.prototype.setTextStyle = Rk.prototype.ib;
  u("ol.proj.common.add", uk, OPENLAYERS);
  u("ol.proj.METERS_PER_UNIT", md, OPENLAYERS);
  u("ol.proj.Projection", nd, OPENLAYERS);
  nd.prototype.getCode = nd.prototype.yj;
  nd.prototype.getExtent = nd.prototype.G;
  nd.prototype.getUnits = nd.prototype.mm;
  nd.prototype.getMetersPerUnit = nd.prototype.$b;
  nd.prototype.getWorldExtent = nd.prototype.hk;
  nd.prototype.isGlobal = nd.prototype.Tk;
  nd.prototype.setGlobal = nd.prototype.uo;
  nd.prototype.setExtent = nd.prototype.nm;
  nd.prototype.setWorldExtent = nd.prototype.Co;
  nd.prototype.setGetPointResolution = nd.prototype.to;
  nd.prototype.getPointResolution = nd.prototype.getPointResolution;
  u("ol.proj.setProj4", function(a) {
    pd = a;
  }, OPENLAYERS);
  u("ol.proj.addEquivalentProjections", rd, OPENLAYERS);
  u("ol.proj.addProjection", Ed, OPENLAYERS);
  u("ol.proj.addCoordinateTransforms", sd, OPENLAYERS);
  u("ol.proj.fromLonLat", function(a, c) {
    return Kd(a, "EPSG:4326", void 0 !== c ? c : "EPSG:3857");
  }, OPENLAYERS);
  u("ol.proj.toLonLat", function(a, c) {
    return Kd(a, void 0 !== c ? c : "EPSG:3857", "EPSG:4326");
  }, OPENLAYERS);
  u("ol.proj.get", qd, OPENLAYERS);
  u("ol.proj.getTransform", Id, OPENLAYERS);
  u("ol.proj.transform", Kd, OPENLAYERS);
  u("ol.proj.transformExtent", Ld, OPENLAYERS);
  u("ol.layer.Heatmap", X, OPENLAYERS);
  X.prototype.getBlur = X.prototype.og;
  X.prototype.getGradient = X.prototype.wg;
  X.prototype.getRadius = X.prototype.eh;
  X.prototype.setBlur = X.prototype.Mh;
  X.prototype.setGradient = X.prototype.Rh;
  X.prototype.setRadius = X.prototype.fh;
  u("ol.layer.Image", vk, OPENLAYERS);
  vk.prototype.getSource = vk.prototype.da;
  u("ol.layer.Layer", Fi, OPENLAYERS);
  Fi.prototype.getSource = Fi.prototype.da;
  Fi.prototype.setMap = Fi.prototype.setMap;
  Fi.prototype.setSource = Fi.prototype.Cc;
  u("ol.layer.Base", Bi, OPENLAYERS);
  Bi.prototype.getExtent = Bi.prototype.G;
  Bi.prototype.getMaxResolution = Bi.prototype.Nb;
  Bi.prototype.getMinResolution = Bi.prototype.Ob;
  Bi.prototype.getOpacity = Bi.prototype.Sb;
  Bi.prototype.getVisible = Bi.prototype.wb;
  Bi.prototype.getZIndex = Bi.prototype.Tb;
  Bi.prototype.setExtent = Bi.prototype.cc;
  Bi.prototype.setMaxResolution = Bi.prototype.kc;
  Bi.prototype.setMinResolution = Bi.prototype.lc;
  Bi.prototype.setOpacity = Bi.prototype.dc;
  Bi.prototype.setVisible = Bi.prototype.ec;
  Bi.prototype.setZIndex = Bi.prototype.fc;
  u("ol.layer.Group", lk, OPENLAYERS);
  lk.prototype.getLayers = lk.prototype.Sc;
  lk.prototype.setLayers = lk.prototype.dh;
  u("ol.layer.Tile", G, OPENLAYERS);
  G.prototype.getPreload = G.prototype.a;
  G.prototype.getSource = G.prototype.da;
  G.prototype.setPreload = G.prototype.c;
  G.prototype.getUseInterimTilesOnError = G.prototype.f;
  G.prototype.setUseInterimTilesOnError = G.prototype.i;
  u("ol.layer.Vector", H, OPENLAYERS);
  H.prototype.getSource = H.prototype.da;
  H.prototype.getStyle = H.prototype.J;
  H.prototype.getStyleFunction = H.prototype.D;
  H.prototype.setStyle = H.prototype.c;
  u("ol.layer.VectorTile", K, OPENLAYERS);
  K.prototype.getPreload = K.prototype.i;
  K.prototype.getUseInterimTilesOnError = K.prototype.S;
  K.prototype.setPreload = K.prototype.U;
  K.prototype.setUseInterimTilesOnError = K.prototype.aa;
  u("ol.interaction.DoubleClickZoom", rj, OPENLAYERS);
  u("ol.interaction.DoubleClickZoom.handleEvent", sj, OPENLAYERS);
  u("ol.interaction.DragAndDrop", vv, OPENLAYERS);
  u("ol.interaction.DragAndDrop.handleEvent", fd, OPENLAYERS);
  yv.prototype.features = yv.prototype.features;
  yv.prototype.file = yv.prototype.file;
  yv.prototype.projection = yv.prototype.projection;
  Pj.prototype.coordinate = Pj.prototype.coordinate;
  Pj.prototype.mapBrowserEvent = Pj.prototype.mapBrowserEvent;
  u("ol.interaction.DragBox", Qj, OPENLAYERS);
  Qj.prototype.getGeometry = Qj.prototype.X;
  u("ol.interaction.DragPan", Ej, OPENLAYERS);
  u("ol.interaction.DragRotateAndZoom", Bv, OPENLAYERS);
  u("ol.interaction.DragRotate", Ij, OPENLAYERS);
  u("ol.interaction.DragZoom", Vj, OPENLAYERS);
  Fv.prototype.feature = Fv.prototype.feature;
  u("ol.interaction.Draw", Gv, OPENLAYERS);
  u("ol.interaction.Draw.handleEvent", Iv, OPENLAYERS);
  Gv.prototype.removeLastPoint = Gv.prototype.ho;
  Gv.prototype.finishDrawing = Gv.prototype.md;
  Gv.prototype.extend = Gv.prototype.Sl;
  u("ol.interaction.Draw.createRegularPolygon", function(a, c) {
    return function(d, e) {
      var f = d[0],
          g = d[1],
          h = Math.sqrt(hc(f, g)),
          k = e ? e : ve(new iv(f), a);
      we(k, f, h, c ? c : Math.atan((g[1] - f[1]) / (g[0] - f[0])));
      return k;
    };
  }, OPENLAYERS);
  u("ol.interaction.Interaction", nj, OPENLAYERS);
  nj.prototype.getActive = nj.prototype.f;
  nj.prototype.getMap = nj.prototype.j;
  nj.prototype.setActive = nj.prototype.i;
  u("ol.interaction.defaults", kk, OPENLAYERS);
  u("ol.interaction.KeyboardPan", Wj, OPENLAYERS);
  u("ol.interaction.KeyboardPan.handleEvent", Xj, OPENLAYERS);
  u("ol.interaction.KeyboardZoom", Yj, OPENLAYERS);
  u("ol.interaction.KeyboardZoom.handleEvent", Zj, OPENLAYERS);
  Wv.prototype.features = Wv.prototype.features;
  Wv.prototype.mapBrowserPointerEvent = Wv.prototype.mapBrowserPointerEvent;
  u("ol.interaction.Modify", Xv, OPENLAYERS);
  u("ol.interaction.Modify.handleEvent", $v, OPENLAYERS);
  u("ol.interaction.MouseWheelZoom", ak, OPENLAYERS);
  u("ol.interaction.MouseWheelZoom.handleEvent", bk, OPENLAYERS);
  ak.prototype.setMouseAnchor = ak.prototype.D;
  u("ol.interaction.PinchRotate", ck, OPENLAYERS);
  u("ol.interaction.PinchZoom", gk, OPENLAYERS);
  u("ol.interaction.Pointer", Bj, OPENLAYERS);
  u("ol.interaction.Pointer.handleEvent", Cj, OPENLAYERS);
  jw.prototype.selected = jw.prototype.selected;
  jw.prototype.deselected = jw.prototype.deselected;
  jw.prototype.mapBrowserEvent = jw.prototype.mapBrowserEvent;
  u("ol.interaction.Select", kw, OPENLAYERS);
  kw.prototype.getFeatures = kw.prototype.bm;
  kw.prototype.getLayer = kw.prototype.cm;
  u("ol.interaction.Select.handleEvent", lw, OPENLAYERS);
  kw.prototype.setMap = kw.prototype.setMap;
  u("ol.interaction.Snap", nw, OPENLAYERS);
  nw.prototype.addFeature = nw.prototype.rb;
  nw.prototype.removeFeature = nw.prototype.nb;
  rw.prototype.features = rw.prototype.features;
  rw.prototype.coordinate = rw.prototype.coordinate;
  u("ol.interaction.Translate", sw, OPENLAYERS);
  u("ol.geom.Circle", iv, OPENLAYERS);
  iv.prototype.clone = iv.prototype.clone;
  iv.prototype.getCenter = iv.prototype.vd;
  iv.prototype.getRadius = iv.prototype.nf;
  iv.prototype.getType = iv.prototype.W;
  iv.prototype.intersectsExtent = iv.prototype.Ia;
  iv.prototype.setCenter = iv.prototype.Kl;
  iv.prototype.setCenterAndRadius = iv.prototype.Lf;
  iv.prototype.setRadius = iv.prototype.Ll;
  iv.prototype.transform = iv.prototype.fb;
  u("ol.geom.Geometry", Md, OPENLAYERS);
  Md.prototype.getClosestPoint = Md.prototype.vb;
  Md.prototype.getExtent = Md.prototype.G;
  Md.prototype.simplify = Md.prototype.Bb;
  Md.prototype.transform = Md.prototype.fb;
  u("ol.geom.GeometryCollection", zp, OPENLAYERS);
  zp.prototype.clone = zp.prototype.clone;
  zp.prototype.getGeometries = zp.prototype.vg;
  zp.prototype.getType = zp.prototype.W;
  zp.prototype.intersectsExtent = zp.prototype.Ia;
  zp.prototype.setGeometries = zp.prototype.Qh;
  zp.prototype.applyTransform = zp.prototype.Hc;
  zp.prototype.translate = zp.prototype.Rc;
  u("ol.geom.LinearRing", fe, OPENLAYERS);
  fe.prototype.clone = fe.prototype.clone;
  fe.prototype.getArea = fe.prototype.Ol;
  fe.prototype.getCoordinates = fe.prototype.Y;
  fe.prototype.getType = fe.prototype.W;
  fe.prototype.setCoordinates = fe.prototype.la;
  u("ol.geom.LineString", T, OPENLAYERS);
  T.prototype.appendCoordinate = T.prototype.dj;
  T.prototype.clone = T.prototype.clone;
  T.prototype.forEachSegment = T.prototype.rj;
  T.prototype.getCoordinateAtM = T.prototype.Ml;
  T.prototype.getCoordinates = T.prototype.Y;
  T.prototype.getCoordinateAt = T.prototype.qg;
  T.prototype.getLength = T.prototype.Nl;
  T.prototype.getType = T.prototype.W;
  T.prototype.intersectsExtent = T.prototype.Ia;
  T.prototype.setCoordinates = T.prototype.la;
  u("ol.geom.MultiLineString", U, OPENLAYERS);
  U.prototype.appendLineString = U.prototype.ej;
  U.prototype.clone = U.prototype.clone;
  U.prototype.getCoordinateAtM = U.prototype.Pl;
  U.prototype.getCoordinates = U.prototype.Y;
  U.prototype.getLineString = U.prototype.Lj;
  U.prototype.getLineStrings = U.prototype.rd;
  U.prototype.getType = U.prototype.W;
  U.prototype.intersectsExtent = U.prototype.Ia;
  U.prototype.setCoordinates = U.prototype.la;
  u("ol.geom.MultiPoint", pp, OPENLAYERS);
  pp.prototype.appendPoint = pp.prototype.gj;
  pp.prototype.clone = pp.prototype.clone;
  pp.prototype.getCoordinates = pp.prototype.Y;
  pp.prototype.getPoint = pp.prototype.Wj;
  pp.prototype.getPoints = pp.prototype.ke;
  pp.prototype.getType = pp.prototype.W;
  pp.prototype.intersectsExtent = pp.prototype.Ia;
  pp.prototype.setCoordinates = pp.prototype.la;
  u("ol.geom.MultiPolygon", V, OPENLAYERS);
  V.prototype.appendPolygon = V.prototype.hj;
  V.prototype.clone = V.prototype.clone;
  V.prototype.getArea = V.prototype.Ql;
  V.prototype.getCoordinates = V.prototype.Y;
  V.prototype.getInteriorPoints = V.prototype.Ij;
  V.prototype.getPolygon = V.prototype.Yj;
  V.prototype.getPolygons = V.prototype.Wd;
  V.prototype.getType = V.prototype.W;
  V.prototype.intersectsExtent = V.prototype.Ia;
  V.prototype.setCoordinates = V.prototype.la;
  u("ol.geom.Point", E, OPENLAYERS);
  E.prototype.clone = E.prototype.clone;
  E.prototype.getCoordinates = E.prototype.Y;
  E.prototype.getType = E.prototype.W;
  E.prototype.intersectsExtent = E.prototype.Ia;
  E.prototype.setCoordinates = E.prototype.la;
  u("ol.geom.Polygon", F, OPENLAYERS);
  F.prototype.appendLinearRing = F.prototype.fj;
  F.prototype.clone = F.prototype.clone;
  F.prototype.getArea = F.prototype.Rl;
  F.prototype.getCoordinates = F.prototype.Y;
  F.prototype.getInteriorPoint = F.prototype.Hj;
  F.prototype.getLinearRingCount = F.prototype.Mj;
  F.prototype.getLinearRing = F.prototype.xg;
  F.prototype.getLinearRings = F.prototype.Vd;
  F.prototype.getType = F.prototype.W;
  F.prototype.intersectsExtent = F.prototype.Ia;
  F.prototype.setCoordinates = F.prototype.la;
  u("ol.geom.Polygon.circular", te, OPENLAYERS);
  u("ol.geom.Polygon.fromExtent", ue, OPENLAYERS);
  u("ol.geom.Polygon.fromCircle", ve, OPENLAYERS);
  u("ol.geom.SimpleGeometry", Od, OPENLAYERS);
  Od.prototype.getFirstCoordinate = Od.prototype.Kb;
  Od.prototype.getLastCoordinate = Od.prototype.Lb;
  Od.prototype.getLayout = Od.prototype.Mb;
  Od.prototype.applyTransform = Od.prototype.Hc;
  Od.prototype.translate = Od.prototype.Rc;
  u("ol.format.EsriJSON", sp, OPENLAYERS);
  sp.prototype.readFeature = sp.prototype.Ub;
  sp.prototype.readFeatures = sp.prototype.Ea;
  sp.prototype.readGeometry = sp.prototype.Uc;
  sp.prototype.readProjection = sp.prototype.Qa;
  sp.prototype.writeGeometry = sp.prototype.Zc;
  sp.prototype.writeGeometryObject = sp.prototype.Je;
  sp.prototype.writeFeature = sp.prototype.Fd;
  sp.prototype.writeFeatureObject = sp.prototype.Yc;
  sp.prototype.writeFeatures = sp.prototype.Wb;
  sp.prototype.writeFeaturesObject = sp.prototype.He;
  u("ol.format.Feature", dp, OPENLAYERS);
  u("ol.format.GeoJSON", Dp, OPENLAYERS);
  Dp.prototype.readFeature = Dp.prototype.Ub;
  Dp.prototype.readFeatures = Dp.prototype.Ea;
  Dp.prototype.readGeometry = Dp.prototype.Uc;
  Dp.prototype.readProjection = Dp.prototype.Qa;
  Dp.prototype.writeFeature = Dp.prototype.Fd;
  Dp.prototype.writeFeatureObject = Dp.prototype.Yc;
  Dp.prototype.writeFeatures = Dp.prototype.Wb;
  Dp.prototype.writeFeaturesObject = Dp.prototype.He;
  Dp.prototype.writeGeometry = Dp.prototype.Zc;
  Dp.prototype.writeGeometryObject = Dp.prototype.Je;
  u("ol.format.GPX", hq, OPENLAYERS);
  hq.prototype.readFeature = hq.prototype.Ub;
  hq.prototype.readFeatures = hq.prototype.Ea;
  hq.prototype.readProjection = hq.prototype.Qa;
  hq.prototype.writeFeatures = hq.prototype.Wb;
  hq.prototype.writeFeaturesNode = hq.prototype.a;
  u("ol.format.IGC", Qq, OPENLAYERS);
  Qq.prototype.readFeature = Qq.prototype.Ub;
  Qq.prototype.readFeatures = Qq.prototype.Ea;
  Qq.prototype.readProjection = Qq.prototype.Qa;
  u("ol.format.KML", tr, OPENLAYERS);
  tr.prototype.readFeature = tr.prototype.Ub;
  tr.prototype.readFeatures = tr.prototype.Ea;
  tr.prototype.readName = tr.prototype.Vn;
  tr.prototype.readNetworkLinks = tr.prototype.Wn;
  tr.prototype.readProjection = tr.prototype.Qa;
  tr.prototype.writeFeatures = tr.prototype.Wb;
  tr.prototype.writeFeaturesNode = tr.prototype.a;
  u("ol.format.MVT", ht, OPENLAYERS);
  ht.prototype.setLayers = ht.prototype.c;
  u("ol.format.OSMXML", jt, OPENLAYERS);
  jt.prototype.readFeatures = jt.prototype.Ea;
  jt.prototype.readProjection = jt.prototype.Qa;
  u("ol.format.Polyline", It, OPENLAYERS);
  u("ol.format.Polyline.encodeDeltas", Jt, OPENLAYERS);
  u("ol.format.Polyline.decodeDeltas", Lt, OPENLAYERS);
  u("ol.format.Polyline.encodeFloats", Kt, OPENLAYERS);
  u("ol.format.Polyline.decodeFloats", Mt, OPENLAYERS);
  It.prototype.readFeature = It.prototype.Ub;
  It.prototype.readFeatures = It.prototype.Ea;
  It.prototype.readGeometry = It.prototype.Uc;
  It.prototype.readProjection = It.prototype.Qa;
  It.prototype.writeGeometry = It.prototype.Zc;
  u("ol.format.TopoJSON", Nt, OPENLAYERS);
  Nt.prototype.readFeatures = Nt.prototype.Ea;
  Nt.prototype.readProjection = Nt.prototype.Qa;
  u("ol.format.WFS", Tt, OPENLAYERS);
  Tt.prototype.readFeatures = Tt.prototype.Ea;
  Tt.prototype.readTransactionResponse = Tt.prototype.j;
  Tt.prototype.readFeatureCollectionMetadata = Tt.prototype.i;
  Tt.prototype.writeGetFeature = Tt.prototype.l;
  Tt.prototype.writeTransaction = Tt.prototype.A;
  Tt.prototype.readProjection = Tt.prototype.Qa;
  u("ol.format.WKT", fu, OPENLAYERS);
  fu.prototype.readFeature = fu.prototype.Ub;
  fu.prototype.readFeatures = fu.prototype.Ea;
  fu.prototype.readGeometry = fu.prototype.Uc;
  fu.prototype.writeFeature = fu.prototype.Fd;
  fu.prototype.writeFeatures = fu.prototype.Wb;
  fu.prototype.writeGeometry = fu.prototype.Zc;
  u("ol.format.WMSCapabilities", xu, OPENLAYERS);
  xu.prototype.read = xu.prototype.read;
  u("ol.format.WMSGetFeatureInfo", Uu, OPENLAYERS);
  Uu.prototype.readFeatures = Uu.prototype.Ea;
  u("ol.format.WMTSCapabilities", Vu, OPENLAYERS);
  Vu.prototype.read = Vu.prototype.read;
  u("ol.format.GML2", Yp, OPENLAYERS);
  u("ol.format.GML3", Zp, OPENLAYERS);
  Zp.prototype.writeGeometryNode = Zp.prototype.o;
  Zp.prototype.writeFeatures = Zp.prototype.Wb;
  Zp.prototype.writeFeaturesNode = Zp.prototype.a;
  u("ol.format.GML", Zp, OPENLAYERS);
  Zp.prototype.writeFeatures = Zp.prototype.Wb;
  Zp.prototype.writeFeaturesNode = Zp.prototype.a;
  Lp.prototype.readFeatures = Lp.prototype.Ea;
  u("ol.events.condition.altKeyOnly", function(a) {
    a = a.originalEvent;
    return a.altKey && !(a.metaKey || a.ctrlKey) && !a.shiftKey;
  }, OPENLAYERS);
  u("ol.events.condition.altShiftKeysOnly", tj, OPENLAYERS);
  u("ol.events.condition.always", fd, OPENLAYERS);
  u("ol.events.condition.click", function(a) {
    return a.type == ri;
  }, OPENLAYERS);
  u("ol.events.condition.never", ed, OPENLAYERS);
  u("ol.events.condition.pointerMove", vj, OPENLAYERS);
  u("ol.events.condition.singleClick", wj, OPENLAYERS);
  u("ol.events.condition.doubleClick", function(a) {
    return a.type == si;
  }, OPENLAYERS);
  u("ol.events.condition.noModifierKeys", xj, OPENLAYERS);
  u("ol.events.condition.platformModifierKeyOnly", function(a) {
    a = a.originalEvent;
    return !a.altKey && (yh ? a.metaKey : a.ctrlKey) && !a.shiftKey;
  }, OPENLAYERS);
  u("ol.events.condition.shiftKeyOnly", yj, OPENLAYERS);
  u("ol.events.condition.targetNotEditable", zj, OPENLAYERS);
  u("ol.events.condition.mouseOnly", Aj, OPENLAYERS);
  u("ol.control.Attribution", Ng, OPENLAYERS);
  u("ol.control.Attribution.render", Og, OPENLAYERS);
  Ng.prototype.getCollapsible = Ng.prototype.Al;
  Ng.prototype.setCollapsible = Ng.prototype.Dl;
  Ng.prototype.setCollapsed = Ng.prototype.Cl;
  Ng.prototype.getCollapsed = Ng.prototype.zl;
  u("ol.control.Control", jg, OPENLAYERS);
  jg.prototype.getMap = jg.prototype.i;
  jg.prototype.setMap = jg.prototype.setMap;
  jg.prototype.setTarget = jg.prototype.c;
  u("ol.control.defaults", Tg, OPENLAYERS);
  u("ol.control.FullScreen", Yg, OPENLAYERS);
  u("ol.control.MousePosition", Zg, OPENLAYERS);
  u("ol.control.MousePosition.render", $g, OPENLAYERS);
  Zg.prototype.getCoordinateFormat = Zg.prototype.rg;
  Zg.prototype.getProjection = Zg.prototype.Wg;
  Zg.prototype.setCoordinateFormat = Zg.prototype.Nh;
  Zg.prototype.setProjection = Zg.prototype.Xg;
  u("ol.control.OverviewMap", No, OPENLAYERS);
  u("ol.control.OverviewMap.render", Oo, OPENLAYERS);
  No.prototype.getCollapsible = No.prototype.Gl;
  No.prototype.setCollapsible = No.prototype.Jl;
  No.prototype.setCollapsed = No.prototype.Il;
  No.prototype.getCollapsed = No.prototype.Fl;
  No.prototype.getOverviewMap = No.prototype.Uj;
  u("ol.control.Rotate", Qg, OPENLAYERS);
  u("ol.control.Rotate.render", Rg, OPENLAYERS);
  u("ol.control.ScaleLine", So, OPENLAYERS);
  So.prototype.getUnits = So.prototype.J;
  u("ol.control.ScaleLine.render", To, OPENLAYERS);
  So.prototype.setUnits = So.prototype.H;
  u("ol.control.Zoom", Sg, OPENLAYERS);
  u("ol.control.ZoomSlider", Wo, OPENLAYERS);
  u("ol.control.ZoomSlider.render", Yo, OPENLAYERS);
  u("ol.control.ZoomToExtent", bp, OPENLAYERS);
  u("ol.color.asArray", Xe, OPENLAYERS);
  u("ol.color.asString", Ze, OPENLAYERS);
  Mb.prototype.changed = Mb.prototype.u;
  Mb.prototype.dispatchEvent = Mb.prototype.b;
  Mb.prototype.getRevision = Mb.prototype.L;
  Mb.prototype.on = Mb.prototype.I;
  Mb.prototype.once = Mb.prototype.M;
  Mb.prototype.un = Mb.prototype.K;
  Mb.prototype.unByKey = Mb.prototype.N;
  Se.prototype.get = Se.prototype.get;
  Se.prototype.getKeys = Se.prototype.O;
  Se.prototype.getProperties = Se.prototype.P;
  Se.prototype.set = Se.prototype.set;
  Se.prototype.setProperties = Se.prototype.C;
  Se.prototype.unset = Se.prototype.R;
  Se.prototype.changed = Se.prototype.u;
  Se.prototype.dispatchEvent = Se.prototype.b;
  Se.prototype.getRevision = Se.prototype.L;
  Se.prototype.on = Se.prototype.I;
  Se.prototype.once = Se.prototype.M;
  Se.prototype.un = Se.prototype.K;
  Se.prototype.unByKey = Se.prototype.N;
  cp.prototype.get = cp.prototype.get;
  cp.prototype.getKeys = cp.prototype.O;
  cp.prototype.getProperties = cp.prototype.P;
  cp.prototype.set = cp.prototype.set;
  cp.prototype.setProperties = cp.prototype.C;
  cp.prototype.unset = cp.prototype.R;
  cp.prototype.changed = cp.prototype.u;
  cp.prototype.dispatchEvent = cp.prototype.b;
  cp.prototype.getRevision = cp.prototype.L;
  cp.prototype.on = cp.prototype.I;
  cp.prototype.once = cp.prototype.M;
  cp.prototype.un = cp.prototype.K;
  cp.prototype.unByKey = cp.prototype.N;
  Xl.prototype.get = Xl.prototype.get;
  Xl.prototype.getKeys = Xl.prototype.O;
  Xl.prototype.getProperties = Xl.prototype.P;
  Xl.prototype.set = Xl.prototype.set;
  Xl.prototype.setProperties = Xl.prototype.C;
  Xl.prototype.unset = Xl.prototype.R;
  Xl.prototype.changed = Xl.prototype.u;
  Xl.prototype.dispatchEvent = Xl.prototype.b;
  Xl.prototype.getRevision = Xl.prototype.L;
  Xl.prototype.on = Xl.prototype.I;
  Xl.prototype.once = Xl.prototype.M;
  Xl.prototype.un = Xl.prototype.K;
  Xl.prototype.unByKey = Xl.prototype.N;
  hv.prototype.get = hv.prototype.get;
  hv.prototype.getKeys = hv.prototype.O;
  hv.prototype.getProperties = hv.prototype.P;
  hv.prototype.set = hv.prototype.set;
  hv.prototype.setProperties = hv.prototype.C;
  hv.prototype.unset = hv.prototype.R;
  hv.prototype.changed = hv.prototype.u;
  hv.prototype.dispatchEvent = hv.prototype.b;
  hv.prototype.getRevision = hv.prototype.L;
  hv.prototype.on = hv.prototype.I;
  hv.prototype.once = hv.prototype.M;
  hv.prototype.un = hv.prototype.K;
  hv.prototype.unByKey = hv.prototype.N;
  tv.prototype.getTileCoord = tv.prototype.f;
  S.prototype.get = S.prototype.get;
  S.prototype.getKeys = S.prototype.O;
  S.prototype.getProperties = S.prototype.P;
  S.prototype.set = S.prototype.set;
  S.prototype.setProperties = S.prototype.C;
  S.prototype.unset = S.prototype.R;
  S.prototype.changed = S.prototype.u;
  S.prototype.dispatchEvent = S.prototype.b;
  S.prototype.getRevision = S.prototype.L;
  S.prototype.on = S.prototype.I;
  S.prototype.once = S.prototype.M;
  S.prototype.un = S.prototype.K;
  S.prototype.unByKey = S.prototype.N;
  ni.prototype.map = ni.prototype.map;
  ni.prototype.frameState = ni.prototype.frameState;
  oi.prototype.originalEvent = oi.prototype.originalEvent;
  oi.prototype.pixel = oi.prototype.pixel;
  oi.prototype.coordinate = oi.prototype.coordinate;
  oi.prototype.dragging = oi.prototype.dragging;
  oi.prototype.stopPropagation = oi.prototype.stopPropagation;
  oi.prototype.map = oi.prototype.map;
  oi.prototype.frameState = oi.prototype.frameState;
  Jo.prototype.get = Jo.prototype.get;
  Jo.prototype.getKeys = Jo.prototype.O;
  Jo.prototype.getProperties = Jo.prototype.P;
  Jo.prototype.set = Jo.prototype.set;
  Jo.prototype.setProperties = Jo.prototype.C;
  Jo.prototype.unset = Jo.prototype.R;
  Jo.prototype.changed = Jo.prototype.u;
  Jo.prototype.dispatchEvent = Jo.prototype.b;
  Jo.prototype.getRevision = Jo.prototype.L;
  Jo.prototype.on = Jo.prototype.I;
  Jo.prototype.once = Jo.prototype.M;
  Jo.prototype.un = Jo.prototype.K;
  Jo.prototype.unByKey = Jo.prototype.N;
  Zl.prototype.getTileCoord = Zl.prototype.f;
  xe.prototype.get = xe.prototype.get;
  xe.prototype.getKeys = xe.prototype.O;
  xe.prototype.getProperties = xe.prototype.P;
  xe.prototype.set = xe.prototype.set;
  xe.prototype.setProperties = xe.prototype.C;
  xe.prototype.unset = xe.prototype.R;
  xe.prototype.changed = xe.prototype.u;
  xe.prototype.dispatchEvent = xe.prototype.b;
  xe.prototype.getRevision = xe.prototype.L;
  xe.prototype.on = xe.prototype.I;
  xe.prototype.once = xe.prototype.M;
  xe.prototype.un = xe.prototype.K;
  xe.prototype.unByKey = xe.prototype.N;
  tx.prototype.getMaxZoom = tx.prototype.yg;
  tx.prototype.getMinZoom = tx.prototype.zg;
  tx.prototype.getOrigin = tx.prototype.Ha;
  tx.prototype.getResolution = tx.prototype.Z;
  tx.prototype.getResolutions = tx.prototype.Pb;
  tx.prototype.getTileCoordExtent = tx.prototype.Da;
  tx.prototype.getTileCoordForCoordAndResolution = tx.prototype.Zd;
  tx.prototype.getTileCoordForCoordAndZ = tx.prototype.ud;
  tx.prototype.getTileSize = tx.prototype.Ua;
  Ik.prototype.getOpacity = Ik.prototype.qe;
  Ik.prototype.getRotateWithView = Ik.prototype.Xd;
  Ik.prototype.getRotation = Ik.prototype.re;
  Ik.prototype.getScale = Ik.prototype.se;
  Ik.prototype.getSnapToPixel = Ik.prototype.Yd;
  Ik.prototype.setOpacity = Ik.prototype.te;
  Ik.prototype.setRotation = Ik.prototype.ue;
  Ik.prototype.setScale = Ik.prototype.ve;
  Wi.prototype.getOpacity = Wi.prototype.qe;
  Wi.prototype.getRotateWithView = Wi.prototype.Xd;
  Wi.prototype.getRotation = Wi.prototype.re;
  Wi.prototype.getScale = Wi.prototype.se;
  Wi.prototype.getSnapToPixel = Wi.prototype.Yd;
  Wi.prototype.setOpacity = Wi.prototype.te;
  Wi.prototype.setRotation = Wi.prototype.ue;
  Wi.prototype.setScale = Wi.prototype.ve;
  Bx.prototype.getOpacity = Bx.prototype.qe;
  Bx.prototype.getRotateWithView = Bx.prototype.Xd;
  Bx.prototype.getRotation = Bx.prototype.re;
  Bx.prototype.getScale = Bx.prototype.se;
  Bx.prototype.getSnapToPixel = Bx.prototype.Yd;
  Bx.prototype.setOpacity = Bx.prototype.te;
  Bx.prototype.setRotation = Bx.prototype.ue;
  Bx.prototype.setScale = Bx.prototype.ve;
  rg.prototype.get = rg.prototype.get;
  rg.prototype.getKeys = rg.prototype.O;
  rg.prototype.getProperties = rg.prototype.P;
  rg.prototype.set = rg.prototype.set;
  rg.prototype.setProperties = rg.prototype.C;
  rg.prototype.unset = rg.prototype.R;
  rg.prototype.changed = rg.prototype.u;
  rg.prototype.dispatchEvent = rg.prototype.b;
  rg.prototype.getRevision = rg.prototype.L;
  rg.prototype.on = rg.prototype.I;
  rg.prototype.once = rg.prototype.M;
  rg.prototype.un = rg.prototype.K;
  rg.prototype.unByKey = rg.prototype.N;
  Ig.prototype.getAttributions = Ig.prototype.ea;
  Ig.prototype.getLogo = Ig.prototype.pa;
  Ig.prototype.getProjection = Ig.prototype.sa;
  Ig.prototype.getState = Ig.prototype.V;
  Ig.prototype.setAttributions = Ig.prototype.ma;
  Ig.prototype.get = Ig.prototype.get;
  Ig.prototype.getKeys = Ig.prototype.O;
  Ig.prototype.getProperties = Ig.prototype.P;
  Ig.prototype.set = Ig.prototype.set;
  Ig.prototype.setProperties = Ig.prototype.C;
  Ig.prototype.unset = Ig.prototype.R;
  Ig.prototype.changed = Ig.prototype.u;
  Ig.prototype.dispatchEvent = Ig.prototype.b;
  Ig.prototype.getRevision = Ig.prototype.L;
  Ig.prototype.on = Ig.prototype.I;
  Ig.prototype.once = Ig.prototype.M;
  Ig.prototype.un = Ig.prototype.K;
  Ig.prototype.unByKey = Ig.prototype.N;
  un.prototype.getTileGrid = un.prototype.Ma;
  un.prototype.getAttributions = un.prototype.ea;
  un.prototype.getLogo = un.prototype.pa;
  un.prototype.getProjection = un.prototype.sa;
  un.prototype.getState = un.prototype.V;
  un.prototype.setAttributions = un.prototype.ma;
  un.prototype.get = un.prototype.get;
  un.prototype.getKeys = un.prototype.O;
  un.prototype.getProperties = un.prototype.P;
  un.prototype.set = un.prototype.set;
  un.prototype.setProperties = un.prototype.C;
  un.prototype.unset = un.prototype.R;
  un.prototype.changed = un.prototype.u;
  un.prototype.dispatchEvent = un.prototype.b;
  un.prototype.getRevision = un.prototype.L;
  un.prototype.on = un.prototype.I;
  un.prototype.once = un.prototype.M;
  un.prototype.un = un.prototype.K;
  un.prototype.unByKey = un.prototype.N;
  Y.prototype.getTileLoadFunction = Y.prototype.$a;
  Y.prototype.getTileUrlFunction = Y.prototype.ab;
  Y.prototype.getUrls = Y.prototype.bb;
  Y.prototype.setTileLoadFunction = Y.prototype.jb;
  Y.prototype.setTileUrlFunction = Y.prototype.Na;
  Y.prototype.setUrl = Y.prototype.Xa;
  Y.prototype.setUrls = Y.prototype.Ya;
  Y.prototype.getTileGrid = Y.prototype.Ma;
  Y.prototype.getAttributions = Y.prototype.ea;
  Y.prototype.getLogo = Y.prototype.pa;
  Y.prototype.getProjection = Y.prototype.sa;
  Y.prototype.getState = Y.prototype.V;
  Y.prototype.setAttributions = Y.prototype.ma;
  Y.prototype.get = Y.prototype.get;
  Y.prototype.getKeys = Y.prototype.O;
  Y.prototype.getProperties = Y.prototype.P;
  Y.prototype.set = Y.prototype.set;
  Y.prototype.setProperties = Y.prototype.C;
  Y.prototype.unset = Y.prototype.R;
  Y.prototype.changed = Y.prototype.u;
  Y.prototype.dispatchEvent = Y.prototype.b;
  Y.prototype.getRevision = Y.prototype.L;
  Y.prototype.on = Y.prototype.I;
  Y.prototype.once = Y.prototype.M;
  Y.prototype.un = Y.prototype.K;
  Y.prototype.unByKey = Y.prototype.N;
  Ew.prototype.setRenderReprojectionEdges = Ew.prototype.zb;
  Ew.prototype.setTileGridForProjection = Ew.prototype.Ab;
  Ew.prototype.getTileLoadFunction = Ew.prototype.$a;
  Ew.prototype.getTileUrlFunction = Ew.prototype.ab;
  Ew.prototype.getUrls = Ew.prototype.bb;
  Ew.prototype.setTileLoadFunction = Ew.prototype.jb;
  Ew.prototype.setTileUrlFunction = Ew.prototype.Na;
  Ew.prototype.setUrl = Ew.prototype.Xa;
  Ew.prototype.setUrls = Ew.prototype.Ya;
  Ew.prototype.getTileGrid = Ew.prototype.Ma;
  Ew.prototype.getAttributions = Ew.prototype.ea;
  Ew.prototype.getLogo = Ew.prototype.pa;
  Ew.prototype.getProjection = Ew.prototype.sa;
  Ew.prototype.getState = Ew.prototype.V;
  Ew.prototype.setAttributions = Ew.prototype.ma;
  Ew.prototype.get = Ew.prototype.get;
  Ew.prototype.getKeys = Ew.prototype.O;
  Ew.prototype.getProperties = Ew.prototype.P;
  Ew.prototype.set = Ew.prototype.set;
  Ew.prototype.setProperties = Ew.prototype.C;
  Ew.prototype.unset = Ew.prototype.R;
  Ew.prototype.changed = Ew.prototype.u;
  Ew.prototype.dispatchEvent = Ew.prototype.b;
  Ew.prototype.getRevision = Ew.prototype.L;
  Ew.prototype.on = Ew.prototype.I;
  Ew.prototype.once = Ew.prototype.M;
  Ew.prototype.un = Ew.prototype.K;
  Ew.prototype.unByKey = Ew.prototype.N;
  bn.prototype.getAttributions = bn.prototype.ea;
  bn.prototype.getLogo = bn.prototype.pa;
  bn.prototype.getProjection = bn.prototype.sa;
  bn.prototype.getState = bn.prototype.V;
  bn.prototype.setAttributions = bn.prototype.ma;
  bn.prototype.get = bn.prototype.get;
  bn.prototype.getKeys = bn.prototype.O;
  bn.prototype.getProperties = bn.prototype.P;
  bn.prototype.set = bn.prototype.set;
  bn.prototype.setProperties = bn.prototype.C;
  bn.prototype.unset = bn.prototype.R;
  bn.prototype.changed = bn.prototype.u;
  bn.prototype.dispatchEvent = bn.prototype.b;
  bn.prototype.getRevision = bn.prototype.L;
  bn.prototype.on = bn.prototype.I;
  bn.prototype.once = bn.prototype.M;
  bn.prototype.un = bn.prototype.K;
  bn.prototype.unByKey = bn.prototype.N;
  Gw.prototype.addFeature = Gw.prototype.rb;
  Gw.prototype.addFeatures = Gw.prototype.Gc;
  Gw.prototype.clear = Gw.prototype.clear;
  Gw.prototype.forEachFeature = Gw.prototype.mg;
  Gw.prototype.forEachFeatureInExtent = Gw.prototype.ub;
  Gw.prototype.forEachFeatureIntersectingExtent = Gw.prototype.ng;
  Gw.prototype.getFeaturesCollection = Gw.prototype.ug;
  Gw.prototype.getFeatures = Gw.prototype.oe;
  Gw.prototype.getFeaturesAtCoordinate = Gw.prototype.tg;
  Gw.prototype.getFeaturesInExtent = Gw.prototype.Ze;
  Gw.prototype.getClosestFeatureToCoordinate = Gw.prototype.pg;
  Gw.prototype.getExtent = Gw.prototype.G;
  Gw.prototype.getFeatureById = Gw.prototype.sg;
  Gw.prototype.removeFeature = Gw.prototype.nb;
  Gw.prototype.getAttributions = Gw.prototype.ea;
  Gw.prototype.getLogo = Gw.prototype.pa;
  Gw.prototype.getProjection = Gw.prototype.sa;
  Gw.prototype.getState = Gw.prototype.V;
  Gw.prototype.setAttributions = Gw.prototype.ma;
  Gw.prototype.get = Gw.prototype.get;
  Gw.prototype.getKeys = Gw.prototype.O;
  Gw.prototype.getProperties = Gw.prototype.P;
  Gw.prototype.set = Gw.prototype.set;
  Gw.prototype.setProperties = Gw.prototype.C;
  Gw.prototype.unset = Gw.prototype.R;
  Gw.prototype.changed = Gw.prototype.u;
  Gw.prototype.dispatchEvent = Gw.prototype.b;
  Gw.prototype.getRevision = Gw.prototype.L;
  Gw.prototype.on = Gw.prototype.I;
  Gw.prototype.once = Gw.prototype.M;
  Gw.prototype.un = Gw.prototype.K;
  Gw.prototype.unByKey = Gw.prototype.N;
  Pl.prototype.getAttributions = Pl.prototype.ea;
  Pl.prototype.getLogo = Pl.prototype.pa;
  Pl.prototype.getProjection = Pl.prototype.sa;
  Pl.prototype.getState = Pl.prototype.V;
  Pl.prototype.setAttributions = Pl.prototype.ma;
  Pl.prototype.get = Pl.prototype.get;
  Pl.prototype.getKeys = Pl.prototype.O;
  Pl.prototype.getProperties = Pl.prototype.P;
  Pl.prototype.set = Pl.prototype.set;
  Pl.prototype.setProperties = Pl.prototype.C;
  Pl.prototype.unset = Pl.prototype.R;
  Pl.prototype.changed = Pl.prototype.u;
  Pl.prototype.dispatchEvent = Pl.prototype.b;
  Pl.prototype.getRevision = Pl.prototype.L;
  Pl.prototype.on = Pl.prototype.I;
  Pl.prototype.once = Pl.prototype.M;
  Pl.prototype.un = Pl.prototype.K;
  Pl.prototype.unByKey = Pl.prototype.N;
  Wl.prototype.getAttributions = Wl.prototype.ea;
  Wl.prototype.getLogo = Wl.prototype.pa;
  Wl.prototype.getProjection = Wl.prototype.sa;
  Wl.prototype.getState = Wl.prototype.V;
  Wl.prototype.setAttributions = Wl.prototype.ma;
  Wl.prototype.get = Wl.prototype.get;
  Wl.prototype.getKeys = Wl.prototype.O;
  Wl.prototype.getProperties = Wl.prototype.P;
  Wl.prototype.set = Wl.prototype.set;
  Wl.prototype.setProperties = Wl.prototype.C;
  Wl.prototype.unset = Wl.prototype.R;
  Wl.prototype.changed = Wl.prototype.u;
  Wl.prototype.dispatchEvent = Wl.prototype.b;
  Wl.prototype.getRevision = Wl.prototype.L;
  Wl.prototype.on = Wl.prototype.I;
  Wl.prototype.once = Wl.prototype.M;
  Wl.prototype.un = Wl.prototype.K;
  Wl.prototype.unByKey = Wl.prototype.N;
  Jw.prototype.getAttributions = Jw.prototype.ea;
  Jw.prototype.getLogo = Jw.prototype.pa;
  Jw.prototype.getProjection = Jw.prototype.sa;
  Jw.prototype.getState = Jw.prototype.V;
  Jw.prototype.setAttributions = Jw.prototype.ma;
  Jw.prototype.get = Jw.prototype.get;
  Jw.prototype.getKeys = Jw.prototype.O;
  Jw.prototype.getProperties = Jw.prototype.P;
  Jw.prototype.set = Jw.prototype.set;
  Jw.prototype.setProperties = Jw.prototype.C;
  Jw.prototype.unset = Jw.prototype.R;
  Jw.prototype.changed = Jw.prototype.u;
  Jw.prototype.dispatchEvent = Jw.prototype.b;
  Jw.prototype.getRevision = Jw.prototype.L;
  Jw.prototype.on = Jw.prototype.I;
  Jw.prototype.once = Jw.prototype.M;
  Jw.prototype.un = Jw.prototype.K;
  Jw.prototype.unByKey = Jw.prototype.N;
  Kw.prototype.getAttributions = Kw.prototype.ea;
  Kw.prototype.getLogo = Kw.prototype.pa;
  Kw.prototype.getProjection = Kw.prototype.sa;
  Kw.prototype.getState = Kw.prototype.V;
  Kw.prototype.setAttributions = Kw.prototype.ma;
  Kw.prototype.get = Kw.prototype.get;
  Kw.prototype.getKeys = Kw.prototype.O;
  Kw.prototype.getProperties = Kw.prototype.P;
  Kw.prototype.set = Kw.prototype.set;
  Kw.prototype.setProperties = Kw.prototype.C;
  Kw.prototype.unset = Kw.prototype.R;
  Kw.prototype.changed = Kw.prototype.u;
  Kw.prototype.dispatchEvent = Kw.prototype.b;
  Kw.prototype.getRevision = Kw.prototype.L;
  Kw.prototype.on = Kw.prototype.I;
  Kw.prototype.once = Kw.prototype.M;
  Kw.prototype.un = Kw.prototype.K;
  Kw.prototype.unByKey = Kw.prototype.N;
  kn.prototype.getAttributions = kn.prototype.ea;
  kn.prototype.getLogo = kn.prototype.pa;
  kn.prototype.getProjection = kn.prototype.sa;
  kn.prototype.getState = kn.prototype.V;
  kn.prototype.setAttributions = kn.prototype.ma;
  kn.prototype.get = kn.prototype.get;
  kn.prototype.getKeys = kn.prototype.O;
  kn.prototype.getProperties = kn.prototype.P;
  kn.prototype.set = kn.prototype.set;
  kn.prototype.setProperties = kn.prototype.C;
  kn.prototype.unset = kn.prototype.R;
  kn.prototype.changed = kn.prototype.u;
  kn.prototype.dispatchEvent = kn.prototype.b;
  kn.prototype.getRevision = kn.prototype.L;
  kn.prototype.on = kn.prototype.I;
  kn.prototype.once = kn.prototype.M;
  kn.prototype.un = kn.prototype.K;
  kn.prototype.unByKey = kn.prototype.N;
  Lw.prototype.getAttributions = Lw.prototype.ea;
  Lw.prototype.getLogo = Lw.prototype.pa;
  Lw.prototype.getProjection = Lw.prototype.sa;
  Lw.prototype.getState = Lw.prototype.V;
  Lw.prototype.setAttributions = Lw.prototype.ma;
  Lw.prototype.get = Lw.prototype.get;
  Lw.prototype.getKeys = Lw.prototype.O;
  Lw.prototype.getProperties = Lw.prototype.P;
  Lw.prototype.set = Lw.prototype.set;
  Lw.prototype.setProperties = Lw.prototype.C;
  Lw.prototype.unset = Lw.prototype.R;
  Lw.prototype.changed = Lw.prototype.u;
  Lw.prototype.dispatchEvent = Lw.prototype.b;
  Lw.prototype.getRevision = Lw.prototype.L;
  Lw.prototype.on = Lw.prototype.I;
  Lw.prototype.once = Lw.prototype.M;
  Lw.prototype.un = Lw.prototype.K;
  Lw.prototype.unByKey = Lw.prototype.N;
  Pw.prototype.setRenderReprojectionEdges = Pw.prototype.zb;
  Pw.prototype.setTileGridForProjection = Pw.prototype.Ab;
  Pw.prototype.getTileLoadFunction = Pw.prototype.$a;
  Pw.prototype.getTileUrlFunction = Pw.prototype.ab;
  Pw.prototype.getUrls = Pw.prototype.bb;
  Pw.prototype.setTileLoadFunction = Pw.prototype.jb;
  Pw.prototype.setTileUrlFunction = Pw.prototype.Na;
  Pw.prototype.setUrl = Pw.prototype.Xa;
  Pw.prototype.setUrls = Pw.prototype.Ya;
  Pw.prototype.getTileGrid = Pw.prototype.Ma;
  Pw.prototype.getAttributions = Pw.prototype.ea;
  Pw.prototype.getLogo = Pw.prototype.pa;
  Pw.prototype.getProjection = Pw.prototype.sa;
  Pw.prototype.getState = Pw.prototype.V;
  Pw.prototype.setAttributions = Pw.prototype.ma;
  Pw.prototype.get = Pw.prototype.get;
  Pw.prototype.getKeys = Pw.prototype.O;
  Pw.prototype.getProperties = Pw.prototype.P;
  Pw.prototype.set = Pw.prototype.set;
  Pw.prototype.setProperties = Pw.prototype.C;
  Pw.prototype.unset = Pw.prototype.R;
  Pw.prototype.changed = Pw.prototype.u;
  Pw.prototype.dispatchEvent = Pw.prototype.b;
  Pw.prototype.getRevision = Pw.prototype.L;
  Pw.prototype.on = Pw.prototype.I;
  Pw.prototype.once = Pw.prototype.M;
  Pw.prototype.un = Pw.prototype.K;
  Pw.prototype.unByKey = Pw.prototype.N;
  Sw.prototype.setRenderReprojectionEdges = Sw.prototype.zb;
  Sw.prototype.setTileGridForProjection = Sw.prototype.Ab;
  Sw.prototype.getTileLoadFunction = Sw.prototype.$a;
  Sw.prototype.getTileUrlFunction = Sw.prototype.ab;
  Sw.prototype.getUrls = Sw.prototype.bb;
  Sw.prototype.setTileLoadFunction = Sw.prototype.jb;
  Sw.prototype.setTileUrlFunction = Sw.prototype.Na;
  Sw.prototype.setUrl = Sw.prototype.Xa;
  Sw.prototype.setUrls = Sw.prototype.Ya;
  Sw.prototype.getTileGrid = Sw.prototype.Ma;
  Sw.prototype.getAttributions = Sw.prototype.ea;
  Sw.prototype.getLogo = Sw.prototype.pa;
  Sw.prototype.getProjection = Sw.prototype.sa;
  Sw.prototype.getState = Sw.prototype.V;
  Sw.prototype.setAttributions = Sw.prototype.ma;
  Sw.prototype.get = Sw.prototype.get;
  Sw.prototype.getKeys = Sw.prototype.O;
  Sw.prototype.getProperties = Sw.prototype.P;
  Sw.prototype.set = Sw.prototype.set;
  Sw.prototype.setProperties = Sw.prototype.C;
  Sw.prototype.unset = Sw.prototype.R;
  Sw.prototype.changed = Sw.prototype.u;
  Sw.prototype.dispatchEvent = Sw.prototype.b;
  Sw.prototype.getRevision = Sw.prototype.L;
  Sw.prototype.on = Sw.prototype.I;
  Sw.prototype.once = Sw.prototype.M;
  Sw.prototype.un = Sw.prototype.K;
  Sw.prototype.unByKey = Sw.prototype.N;
  Qw.prototype.setRenderReprojectionEdges = Qw.prototype.zb;
  Qw.prototype.setTileGridForProjection = Qw.prototype.Ab;
  Qw.prototype.getTileLoadFunction = Qw.prototype.$a;
  Qw.prototype.getTileUrlFunction = Qw.prototype.ab;
  Qw.prototype.getUrls = Qw.prototype.bb;
  Qw.prototype.setTileLoadFunction = Qw.prototype.jb;
  Qw.prototype.setTileUrlFunction = Qw.prototype.Na;
  Qw.prototype.setUrl = Qw.prototype.Xa;
  Qw.prototype.setUrls = Qw.prototype.Ya;
  Qw.prototype.getTileGrid = Qw.prototype.Ma;
  Qw.prototype.getAttributions = Qw.prototype.ea;
  Qw.prototype.getLogo = Qw.prototype.pa;
  Qw.prototype.getProjection = Qw.prototype.sa;
  Qw.prototype.getState = Qw.prototype.V;
  Qw.prototype.setAttributions = Qw.prototype.ma;
  Qw.prototype.get = Qw.prototype.get;
  Qw.prototype.getKeys = Qw.prototype.O;
  Qw.prototype.getProperties = Qw.prototype.P;
  Qw.prototype.set = Qw.prototype.set;
  Qw.prototype.setProperties = Qw.prototype.C;
  Qw.prototype.unset = Qw.prototype.R;
  Qw.prototype.changed = Qw.prototype.u;
  Qw.prototype.dispatchEvent = Qw.prototype.b;
  Qw.prototype.getRevision = Qw.prototype.L;
  Qw.prototype.on = Qw.prototype.I;
  Qw.prototype.once = Qw.prototype.M;
  Qw.prototype.un = Qw.prototype.K;
  Qw.prototype.unByKey = Qw.prototype.N;
  Vw.prototype.getAttributions = Vw.prototype.ea;
  Vw.prototype.getLogo = Vw.prototype.pa;
  Vw.prototype.getProjection = Vw.prototype.sa;
  Vw.prototype.getState = Vw.prototype.V;
  Vw.prototype.setAttributions = Vw.prototype.ma;
  Vw.prototype.get = Vw.prototype.get;
  Vw.prototype.getKeys = Vw.prototype.O;
  Vw.prototype.getProperties = Vw.prototype.P;
  Vw.prototype.set = Vw.prototype.set;
  Vw.prototype.setProperties = Vw.prototype.C;
  Vw.prototype.unset = Vw.prototype.R;
  Vw.prototype.changed = Vw.prototype.u;
  Vw.prototype.dispatchEvent = Vw.prototype.b;
  Vw.prototype.getRevision = Vw.prototype.L;
  Vw.prototype.on = Vw.prototype.I;
  Vw.prototype.once = Vw.prototype.M;
  Vw.prototype.un = Vw.prototype.K;
  Vw.prototype.unByKey = Vw.prototype.N;
  ex.prototype.setRenderReprojectionEdges = ex.prototype.zb;
  ex.prototype.setTileGridForProjection = ex.prototype.Ab;
  ex.prototype.getTileLoadFunction = ex.prototype.$a;
  ex.prototype.getTileUrlFunction = ex.prototype.ab;
  ex.prototype.getUrls = ex.prototype.bb;
  ex.prototype.setTileLoadFunction = ex.prototype.jb;
  ex.prototype.setTileUrlFunction = ex.prototype.Na;
  ex.prototype.setUrl = ex.prototype.Xa;
  ex.prototype.setUrls = ex.prototype.Ya;
  ex.prototype.getTileGrid = ex.prototype.Ma;
  ex.prototype.getAttributions = ex.prototype.ea;
  ex.prototype.getLogo = ex.prototype.pa;
  ex.prototype.getProjection = ex.prototype.sa;
  ex.prototype.getState = ex.prototype.V;
  ex.prototype.setAttributions = ex.prototype.ma;
  ex.prototype.get = ex.prototype.get;
  ex.prototype.getKeys = ex.prototype.O;
  ex.prototype.getProperties = ex.prototype.P;
  ex.prototype.set = ex.prototype.set;
  ex.prototype.setProperties = ex.prototype.C;
  ex.prototype.unset = ex.prototype.R;
  ex.prototype.changed = ex.prototype.u;
  ex.prototype.dispatchEvent = ex.prototype.b;
  ex.prototype.getRevision = ex.prototype.L;
  ex.prototype.on = ex.prototype.I;
  ex.prototype.once = ex.prototype.M;
  ex.prototype.un = ex.prototype.K;
  ex.prototype.unByKey = ex.prototype.N;
  gx.prototype.setRenderReprojectionEdges = gx.prototype.zb;
  gx.prototype.setTileGridForProjection = gx.prototype.Ab;
  gx.prototype.getTileLoadFunction = gx.prototype.$a;
  gx.prototype.getTileUrlFunction = gx.prototype.ab;
  gx.prototype.getUrls = gx.prototype.bb;
  gx.prototype.setTileLoadFunction = gx.prototype.jb;
  gx.prototype.setTileUrlFunction = gx.prototype.Na;
  gx.prototype.setUrl = gx.prototype.Xa;
  gx.prototype.setUrls = gx.prototype.Ya;
  gx.prototype.getTileGrid = gx.prototype.Ma;
  gx.prototype.getAttributions = gx.prototype.ea;
  gx.prototype.getLogo = gx.prototype.pa;
  gx.prototype.getProjection = gx.prototype.sa;
  gx.prototype.getState = gx.prototype.V;
  gx.prototype.setAttributions = gx.prototype.ma;
  gx.prototype.get = gx.prototype.get;
  gx.prototype.getKeys = gx.prototype.O;
  gx.prototype.getProperties = gx.prototype.P;
  gx.prototype.set = gx.prototype.set;
  gx.prototype.setProperties = gx.prototype.C;
  gx.prototype.unset = gx.prototype.R;
  gx.prototype.changed = gx.prototype.u;
  gx.prototype.dispatchEvent = gx.prototype.b;
  gx.prototype.getRevision = gx.prototype.L;
  gx.prototype.on = gx.prototype.I;
  gx.prototype.once = gx.prototype.M;
  gx.prototype.un = gx.prototype.K;
  gx.prototype.unByKey = gx.prototype.N;
  ix.prototype.getTileGrid = ix.prototype.Ma;
  ix.prototype.getAttributions = ix.prototype.ea;
  ix.prototype.getLogo = ix.prototype.pa;
  ix.prototype.getProjection = ix.prototype.sa;
  ix.prototype.getState = ix.prototype.V;
  ix.prototype.setAttributions = ix.prototype.ma;
  ix.prototype.get = ix.prototype.get;
  ix.prototype.getKeys = ix.prototype.O;
  ix.prototype.getProperties = ix.prototype.P;
  ix.prototype.set = ix.prototype.set;
  ix.prototype.setProperties = ix.prototype.C;
  ix.prototype.unset = ix.prototype.R;
  ix.prototype.changed = ix.prototype.u;
  ix.prototype.dispatchEvent = ix.prototype.b;
  ix.prototype.getRevision = ix.prototype.L;
  ix.prototype.on = ix.prototype.I;
  ix.prototype.once = ix.prototype.M;
  ix.prototype.un = ix.prototype.K;
  ix.prototype.unByKey = ix.prototype.N;
  jx.prototype.setRenderReprojectionEdges = jx.prototype.zb;
  jx.prototype.setTileGridForProjection = jx.prototype.Ab;
  jx.prototype.getTileLoadFunction = jx.prototype.$a;
  jx.prototype.getTileUrlFunction = jx.prototype.ab;
  jx.prototype.getUrls = jx.prototype.bb;
  jx.prototype.setTileLoadFunction = jx.prototype.jb;
  jx.prototype.setTileUrlFunction = jx.prototype.Na;
  jx.prototype.setUrl = jx.prototype.Xa;
  jx.prototype.setUrls = jx.prototype.Ya;
  jx.prototype.getTileGrid = jx.prototype.Ma;
  jx.prototype.getAttributions = jx.prototype.ea;
  jx.prototype.getLogo = jx.prototype.pa;
  jx.prototype.getProjection = jx.prototype.sa;
  jx.prototype.getState = jx.prototype.V;
  jx.prototype.setAttributions = jx.prototype.ma;
  jx.prototype.get = jx.prototype.get;
  jx.prototype.getKeys = jx.prototype.O;
  jx.prototype.getProperties = jx.prototype.P;
  jx.prototype.set = jx.prototype.set;
  jx.prototype.setProperties = jx.prototype.C;
  jx.prototype.unset = jx.prototype.R;
  jx.prototype.changed = jx.prototype.u;
  jx.prototype.dispatchEvent = jx.prototype.b;
  jx.prototype.getRevision = jx.prototype.L;
  jx.prototype.on = jx.prototype.I;
  jx.prototype.once = jx.prototype.M;
  jx.prototype.un = jx.prototype.K;
  jx.prototype.unByKey = jx.prototype.N;
  kx.prototype.getTileGrid = kx.prototype.Ma;
  kx.prototype.getAttributions = kx.prototype.ea;
  kx.prototype.getLogo = kx.prototype.pa;
  kx.prototype.getProjection = kx.prototype.sa;
  kx.prototype.getState = kx.prototype.V;
  kx.prototype.setAttributions = kx.prototype.ma;
  kx.prototype.get = kx.prototype.get;
  kx.prototype.getKeys = kx.prototype.O;
  kx.prototype.getProperties = kx.prototype.P;
  kx.prototype.set = kx.prototype.set;
  kx.prototype.setProperties = kx.prototype.C;
  kx.prototype.unset = kx.prototype.R;
  kx.prototype.changed = kx.prototype.u;
  kx.prototype.dispatchEvent = kx.prototype.b;
  kx.prototype.getRevision = kx.prototype.L;
  kx.prototype.on = kx.prototype.I;
  kx.prototype.once = kx.prototype.M;
  kx.prototype.un = kx.prototype.K;
  kx.prototype.unByKey = kx.prototype.N;
  ox.prototype.setRenderReprojectionEdges = ox.prototype.zb;
  ox.prototype.setTileGridForProjection = ox.prototype.Ab;
  ox.prototype.getTileLoadFunction = ox.prototype.$a;
  ox.prototype.getTileUrlFunction = ox.prototype.ab;
  ox.prototype.getUrls = ox.prototype.bb;
  ox.prototype.setTileLoadFunction = ox.prototype.jb;
  ox.prototype.setTileUrlFunction = ox.prototype.Na;
  ox.prototype.setUrl = ox.prototype.Xa;
  ox.prototype.setUrls = ox.prototype.Ya;
  ox.prototype.getTileGrid = ox.prototype.Ma;
  ox.prototype.getAttributions = ox.prototype.ea;
  ox.prototype.getLogo = ox.prototype.pa;
  ox.prototype.getProjection = ox.prototype.sa;
  ox.prototype.getState = ox.prototype.V;
  ox.prototype.setAttributions = ox.prototype.ma;
  ox.prototype.get = ox.prototype.get;
  ox.prototype.getKeys = ox.prototype.O;
  ox.prototype.getProperties = ox.prototype.P;
  ox.prototype.set = ox.prototype.set;
  ox.prototype.setProperties = ox.prototype.C;
  ox.prototype.unset = ox.prototype.R;
  ox.prototype.changed = ox.prototype.u;
  ox.prototype.dispatchEvent = ox.prototype.b;
  ox.prototype.getRevision = ox.prototype.L;
  ox.prototype.on = ox.prototype.I;
  ox.prototype.once = ox.prototype.M;
  ox.prototype.un = ox.prototype.K;
  ox.prototype.unByKey = ox.prototype.N;
  vn.prototype.getTileLoadFunction = vn.prototype.$a;
  vn.prototype.getTileUrlFunction = vn.prototype.ab;
  vn.prototype.getUrls = vn.prototype.bb;
  vn.prototype.setTileLoadFunction = vn.prototype.jb;
  vn.prototype.setTileUrlFunction = vn.prototype.Na;
  vn.prototype.setUrl = vn.prototype.Xa;
  vn.prototype.setUrls = vn.prototype.Ya;
  vn.prototype.getTileGrid = vn.prototype.Ma;
  vn.prototype.getAttributions = vn.prototype.ea;
  vn.prototype.getLogo = vn.prototype.pa;
  vn.prototype.getProjection = vn.prototype.sa;
  vn.prototype.getState = vn.prototype.V;
  vn.prototype.setAttributions = vn.prototype.ma;
  vn.prototype.get = vn.prototype.get;
  vn.prototype.getKeys = vn.prototype.O;
  vn.prototype.getProperties = vn.prototype.P;
  vn.prototype.set = vn.prototype.set;
  vn.prototype.setProperties = vn.prototype.C;
  vn.prototype.unset = vn.prototype.R;
  vn.prototype.changed = vn.prototype.u;
  vn.prototype.dispatchEvent = vn.prototype.b;
  vn.prototype.getRevision = vn.prototype.L;
  vn.prototype.on = vn.prototype.I;
  vn.prototype.once = vn.prototype.M;
  vn.prototype.un = vn.prototype.K;
  vn.prototype.unByKey = vn.prototype.N;
  Z.prototype.setRenderReprojectionEdges = Z.prototype.zb;
  Z.prototype.setTileGridForProjection = Z.prototype.Ab;
  Z.prototype.getTileLoadFunction = Z.prototype.$a;
  Z.prototype.getTileUrlFunction = Z.prototype.ab;
  Z.prototype.getUrls = Z.prototype.bb;
  Z.prototype.setTileLoadFunction = Z.prototype.jb;
  Z.prototype.setTileUrlFunction = Z.prototype.Na;
  Z.prototype.setUrl = Z.prototype.Xa;
  Z.prototype.setUrls = Z.prototype.Ya;
  Z.prototype.getTileGrid = Z.prototype.Ma;
  Z.prototype.getAttributions = Z.prototype.ea;
  Z.prototype.getLogo = Z.prototype.pa;
  Z.prototype.getProjection = Z.prototype.sa;
  Z.prototype.getState = Z.prototype.V;
  Z.prototype.setAttributions = Z.prototype.ma;
  Z.prototype.get = Z.prototype.get;
  Z.prototype.getKeys = Z.prototype.O;
  Z.prototype.getProperties = Z.prototype.P;
  Z.prototype.set = Z.prototype.set;
  Z.prototype.setProperties = Z.prototype.C;
  Z.prototype.unset = Z.prototype.R;
  Z.prototype.changed = Z.prototype.u;
  Z.prototype.dispatchEvent = Z.prototype.b;
  Z.prototype.getRevision = Z.prototype.L;
  Z.prototype.on = Z.prototype.I;
  Z.prototype.once = Z.prototype.M;
  Z.prototype.un = Z.prototype.K;
  Z.prototype.unByKey = Z.prototype.N;
  wx.prototype.setRenderReprojectionEdges = wx.prototype.zb;
  wx.prototype.setTileGridForProjection = wx.prototype.Ab;
  wx.prototype.getTileLoadFunction = wx.prototype.$a;
  wx.prototype.getTileUrlFunction = wx.prototype.ab;
  wx.prototype.getUrls = wx.prototype.bb;
  wx.prototype.setTileLoadFunction = wx.prototype.jb;
  wx.prototype.setTileUrlFunction = wx.prototype.Na;
  wx.prototype.setUrl = wx.prototype.Xa;
  wx.prototype.setUrls = wx.prototype.Ya;
  wx.prototype.getTileGrid = wx.prototype.Ma;
  wx.prototype.getAttributions = wx.prototype.ea;
  wx.prototype.getLogo = wx.prototype.pa;
  wx.prototype.getProjection = wx.prototype.sa;
  wx.prototype.getState = wx.prototype.V;
  wx.prototype.setAttributions = wx.prototype.ma;
  wx.prototype.get = wx.prototype.get;
  wx.prototype.getKeys = wx.prototype.O;
  wx.prototype.getProperties = wx.prototype.P;
  wx.prototype.set = wx.prototype.set;
  wx.prototype.setProperties = wx.prototype.C;
  wx.prototype.unset = wx.prototype.R;
  wx.prototype.changed = wx.prototype.u;
  wx.prototype.dispatchEvent = wx.prototype.b;
  wx.prototype.getRevision = wx.prototype.L;
  wx.prototype.on = wx.prototype.I;
  wx.prototype.once = wx.prototype.M;
  wx.prototype.un = wx.prototype.K;
  wx.prototype.unByKey = wx.prototype.N;
  Aw.prototype.getTileCoord = Aw.prototype.f;
  Mi.prototype.changed = Mi.prototype.u;
  Mi.prototype.dispatchEvent = Mi.prototype.b;
  Mi.prototype.getRevision = Mi.prototype.L;
  Mi.prototype.on = Mi.prototype.I;
  Mi.prototype.once = Mi.prototype.M;
  Mi.prototype.un = Mi.prototype.K;
  Mi.prototype.unByKey = Mi.prototype.N;
  so.prototype.changed = so.prototype.u;
  so.prototype.dispatchEvent = so.prototype.b;
  so.prototype.getRevision = so.prototype.L;
  so.prototype.on = so.prototype.I;
  so.prototype.once = so.prototype.M;
  so.prototype.un = so.prototype.K;
  so.prototype.unByKey = so.prototype.N;
  vo.prototype.changed = vo.prototype.u;
  vo.prototype.dispatchEvent = vo.prototype.b;
  vo.prototype.getRevision = vo.prototype.L;
  vo.prototype.on = vo.prototype.I;
  vo.prototype.once = vo.prototype.M;
  vo.prototype.un = vo.prototype.K;
  vo.prototype.unByKey = vo.prototype.N;
  Bo.prototype.changed = Bo.prototype.u;
  Bo.prototype.dispatchEvent = Bo.prototype.b;
  Bo.prototype.getRevision = Bo.prototype.L;
  Bo.prototype.on = Bo.prototype.I;
  Bo.prototype.once = Bo.prototype.M;
  Bo.prototype.un = Bo.prototype.K;
  Bo.prototype.unByKey = Bo.prototype.N;
  Do.prototype.changed = Do.prototype.u;
  Do.prototype.dispatchEvent = Do.prototype.b;
  Do.prototype.getRevision = Do.prototype.L;
  Do.prototype.on = Do.prototype.I;
  Do.prototype.once = Do.prototype.M;
  Do.prototype.un = Do.prototype.K;
  Do.prototype.unByKey = Do.prototype.N;
  Bn.prototype.changed = Bn.prototype.u;
  Bn.prototype.dispatchEvent = Bn.prototype.b;
  Bn.prototype.getRevision = Bn.prototype.L;
  Bn.prototype.on = Bn.prototype.I;
  Bn.prototype.once = Bn.prototype.M;
  Bn.prototype.un = Bn.prototype.K;
  Bn.prototype.unByKey = Bn.prototype.N;
  Cn.prototype.changed = Cn.prototype.u;
  Cn.prototype.dispatchEvent = Cn.prototype.b;
  Cn.prototype.getRevision = Cn.prototype.L;
  Cn.prototype.on = Cn.prototype.I;
  Cn.prototype.once = Cn.prototype.M;
  Cn.prototype.un = Cn.prototype.K;
  Cn.prototype.unByKey = Cn.prototype.N;
  Dn.prototype.changed = Dn.prototype.u;
  Dn.prototype.dispatchEvent = Dn.prototype.b;
  Dn.prototype.getRevision = Dn.prototype.L;
  Dn.prototype.on = Dn.prototype.I;
  Dn.prototype.once = Dn.prototype.M;
  Dn.prototype.un = Dn.prototype.K;
  Dn.prototype.unByKey = Dn.prototype.N;
  Fn.prototype.changed = Fn.prototype.u;
  Fn.prototype.dispatchEvent = Fn.prototype.b;
  Fn.prototype.getRevision = Fn.prototype.L;
  Fn.prototype.on = Fn.prototype.I;
  Fn.prototype.once = Fn.prototype.M;
  Fn.prototype.un = Fn.prototype.K;
  Fn.prototype.unByKey = Fn.prototype.N;
  dl.prototype.changed = dl.prototype.u;
  dl.prototype.dispatchEvent = dl.prototype.b;
  dl.prototype.getRevision = dl.prototype.L;
  dl.prototype.on = dl.prototype.I;
  dl.prototype.once = dl.prototype.M;
  dl.prototype.un = dl.prototype.K;
  dl.prototype.unByKey = dl.prototype.N;
  mn.prototype.changed = mn.prototype.u;
  mn.prototype.dispatchEvent = mn.prototype.b;
  mn.prototype.getRevision = mn.prototype.L;
  mn.prototype.on = mn.prototype.I;
  mn.prototype.once = mn.prototype.M;
  mn.prototype.un = mn.prototype.K;
  mn.prototype.unByKey = mn.prototype.N;
  nn.prototype.changed = nn.prototype.u;
  nn.prototype.dispatchEvent = nn.prototype.b;
  nn.prototype.getRevision = nn.prototype.L;
  nn.prototype.on = nn.prototype.I;
  nn.prototype.once = nn.prototype.M;
  nn.prototype.un = nn.prototype.K;
  nn.prototype.unByKey = nn.prototype.N;
  on.prototype.changed = on.prototype.u;
  on.prototype.dispatchEvent = on.prototype.b;
  on.prototype.getRevision = on.prototype.L;
  on.prototype.on = on.prototype.I;
  on.prototype.once = on.prototype.M;
  on.prototype.un = on.prototype.K;
  on.prototype.unByKey = on.prototype.N;
  xn.prototype.changed = xn.prototype.u;
  xn.prototype.dispatchEvent = xn.prototype.b;
  xn.prototype.getRevision = xn.prototype.L;
  xn.prototype.on = xn.prototype.I;
  xn.prototype.once = xn.prototype.M;
  xn.prototype.un = xn.prototype.K;
  xn.prototype.unByKey = xn.prototype.N;
  Bi.prototype.get = Bi.prototype.get;
  Bi.prototype.getKeys = Bi.prototype.O;
  Bi.prototype.getProperties = Bi.prototype.P;
  Bi.prototype.set = Bi.prototype.set;
  Bi.prototype.setProperties = Bi.prototype.C;
  Bi.prototype.unset = Bi.prototype.R;
  Bi.prototype.changed = Bi.prototype.u;
  Bi.prototype.dispatchEvent = Bi.prototype.b;
  Bi.prototype.getRevision = Bi.prototype.L;
  Bi.prototype.on = Bi.prototype.I;
  Bi.prototype.once = Bi.prototype.M;
  Bi.prototype.un = Bi.prototype.K;
  Bi.prototype.unByKey = Bi.prototype.N;
  Fi.prototype.getExtent = Fi.prototype.G;
  Fi.prototype.getMaxResolution = Fi.prototype.Nb;
  Fi.prototype.getMinResolution = Fi.prototype.Ob;
  Fi.prototype.getOpacity = Fi.prototype.Sb;
  Fi.prototype.getVisible = Fi.prototype.wb;
  Fi.prototype.getZIndex = Fi.prototype.Tb;
  Fi.prototype.setExtent = Fi.prototype.cc;
  Fi.prototype.setMaxResolution = Fi.prototype.kc;
  Fi.prototype.setMinResolution = Fi.prototype.lc;
  Fi.prototype.setOpacity = Fi.prototype.dc;
  Fi.prototype.setVisible = Fi.prototype.ec;
  Fi.prototype.setZIndex = Fi.prototype.fc;
  Fi.prototype.get = Fi.prototype.get;
  Fi.prototype.getKeys = Fi.prototype.O;
  Fi.prototype.getProperties = Fi.prototype.P;
  Fi.prototype.set = Fi.prototype.set;
  Fi.prototype.setProperties = Fi.prototype.C;
  Fi.prototype.unset = Fi.prototype.R;
  Fi.prototype.changed = Fi.prototype.u;
  Fi.prototype.dispatchEvent = Fi.prototype.b;
  Fi.prototype.getRevision = Fi.prototype.L;
  Fi.prototype.on = Fi.prototype.I;
  Fi.prototype.once = Fi.prototype.M;
  Fi.prototype.un = Fi.prototype.K;
  Fi.prototype.unByKey = Fi.prototype.N;
  H.prototype.setMap = H.prototype.setMap;
  H.prototype.setSource = H.prototype.Cc;
  H.prototype.getExtent = H.prototype.G;
  H.prototype.getMaxResolution = H.prototype.Nb;
  H.prototype.getMinResolution = H.prototype.Ob;
  H.prototype.getOpacity = H.prototype.Sb;
  H.prototype.getVisible = H.prototype.wb;
  H.prototype.getZIndex = H.prototype.Tb;
  H.prototype.setExtent = H.prototype.cc;
  H.prototype.setMaxResolution = H.prototype.kc;
  H.prototype.setMinResolution = H.prototype.lc;
  H.prototype.setOpacity = H.prototype.dc;
  H.prototype.setVisible = H.prototype.ec;
  H.prototype.setZIndex = H.prototype.fc;
  H.prototype.get = H.prototype.get;
  H.prototype.getKeys = H.prototype.O;
  H.prototype.getProperties = H.prototype.P;
  H.prototype.set = H.prototype.set;
  H.prototype.setProperties = H.prototype.C;
  H.prototype.unset = H.prototype.R;
  H.prototype.changed = H.prototype.u;
  H.prototype.dispatchEvent = H.prototype.b;
  H.prototype.getRevision = H.prototype.L;
  H.prototype.on = H.prototype.I;
  H.prototype.once = H.prototype.M;
  H.prototype.un = H.prototype.K;
  H.prototype.unByKey = H.prototype.N;
  X.prototype.getSource = X.prototype.da;
  X.prototype.getStyle = X.prototype.J;
  X.prototype.getStyleFunction = X.prototype.D;
  X.prototype.setStyle = X.prototype.c;
  X.prototype.setMap = X.prototype.setMap;
  X.prototype.setSource = X.prototype.Cc;
  X.prototype.getExtent = X.prototype.G;
  X.prototype.getMaxResolution = X.prototype.Nb;
  X.prototype.getMinResolution = X.prototype.Ob;
  X.prototype.getOpacity = X.prototype.Sb;
  X.prototype.getVisible = X.prototype.wb;
  X.prototype.getZIndex = X.prototype.Tb;
  X.prototype.setExtent = X.prototype.cc;
  X.prototype.setMaxResolution = X.prototype.kc;
  X.prototype.setMinResolution = X.prototype.lc;
  X.prototype.setOpacity = X.prototype.dc;
  X.prototype.setVisible = X.prototype.ec;
  X.prototype.setZIndex = X.prototype.fc;
  X.prototype.get = X.prototype.get;
  X.prototype.getKeys = X.prototype.O;
  X.prototype.getProperties = X.prototype.P;
  X.prototype.set = X.prototype.set;
  X.prototype.setProperties = X.prototype.C;
  X.prototype.unset = X.prototype.R;
  X.prototype.changed = X.prototype.u;
  X.prototype.dispatchEvent = X.prototype.b;
  X.prototype.getRevision = X.prototype.L;
  X.prototype.on = X.prototype.I;
  X.prototype.once = X.prototype.M;
  X.prototype.un = X.prototype.K;
  X.prototype.unByKey = X.prototype.N;
  vk.prototype.setMap = vk.prototype.setMap;
  vk.prototype.setSource = vk.prototype.Cc;
  vk.prototype.getExtent = vk.prototype.G;
  vk.prototype.getMaxResolution = vk.prototype.Nb;
  vk.prototype.getMinResolution = vk.prototype.Ob;
  vk.prototype.getOpacity = vk.prototype.Sb;
  vk.prototype.getVisible = vk.prototype.wb;
  vk.prototype.getZIndex = vk.prototype.Tb;
  vk.prototype.setExtent = vk.prototype.cc;
  vk.prototype.setMaxResolution = vk.prototype.kc;
  vk.prototype.setMinResolution = vk.prototype.lc;
  vk.prototype.setOpacity = vk.prototype.dc;
  vk.prototype.setVisible = vk.prototype.ec;
  vk.prototype.setZIndex = vk.prototype.fc;
  vk.prototype.get = vk.prototype.get;
  vk.prototype.getKeys = vk.prototype.O;
  vk.prototype.getProperties = vk.prototype.P;
  vk.prototype.set = vk.prototype.set;
  vk.prototype.setProperties = vk.prototype.C;
  vk.prototype.unset = vk.prototype.R;
  vk.prototype.changed = vk.prototype.u;
  vk.prototype.dispatchEvent = vk.prototype.b;
  vk.prototype.getRevision = vk.prototype.L;
  vk.prototype.on = vk.prototype.I;
  vk.prototype.once = vk.prototype.M;
  vk.prototype.un = vk.prototype.K;
  vk.prototype.unByKey = vk.prototype.N;
  lk.prototype.getExtent = lk.prototype.G;
  lk.prototype.getMaxResolution = lk.prototype.Nb;
  lk.prototype.getMinResolution = lk.prototype.Ob;
  lk.prototype.getOpacity = lk.prototype.Sb;
  lk.prototype.getVisible = lk.prototype.wb;
  lk.prototype.getZIndex = lk.prototype.Tb;
  lk.prototype.setExtent = lk.prototype.cc;
  lk.prototype.setMaxResolution = lk.prototype.kc;
  lk.prototype.setMinResolution = lk.prototype.lc;
  lk.prototype.setOpacity = lk.prototype.dc;
  lk.prototype.setVisible = lk.prototype.ec;
  lk.prototype.setZIndex = lk.prototype.fc;
  lk.prototype.get = lk.prototype.get;
  lk.prototype.getKeys = lk.prototype.O;
  lk.prototype.getProperties = lk.prototype.P;
  lk.prototype.set = lk.prototype.set;
  lk.prototype.setProperties = lk.prototype.C;
  lk.prototype.unset = lk.prototype.R;
  lk.prototype.changed = lk.prototype.u;
  lk.prototype.dispatchEvent = lk.prototype.b;
  lk.prototype.getRevision = lk.prototype.L;
  lk.prototype.on = lk.prototype.I;
  lk.prototype.once = lk.prototype.M;
  lk.prototype.un = lk.prototype.K;
  lk.prototype.unByKey = lk.prototype.N;
  G.prototype.setMap = G.prototype.setMap;
  G.prototype.setSource = G.prototype.Cc;
  G.prototype.getExtent = G.prototype.G;
  G.prototype.getMaxResolution = G.prototype.Nb;
  G.prototype.getMinResolution = G.prototype.Ob;
  G.prototype.getOpacity = G.prototype.Sb;
  G.prototype.getVisible = G.prototype.wb;
  G.prototype.getZIndex = G.prototype.Tb;
  G.prototype.setExtent = G.prototype.cc;
  G.prototype.setMaxResolution = G.prototype.kc;
  G.prototype.setMinResolution = G.prototype.lc;
  G.prototype.setOpacity = G.prototype.dc;
  G.prototype.setVisible = G.prototype.ec;
  G.prototype.setZIndex = G.prototype.fc;
  G.prototype.get = G.prototype.get;
  G.prototype.getKeys = G.prototype.O;
  G.prototype.getProperties = G.prototype.P;
  G.prototype.set = G.prototype.set;
  G.prototype.setProperties = G.prototype.C;
  G.prototype.unset = G.prototype.R;
  G.prototype.changed = G.prototype.u;
  G.prototype.dispatchEvent = G.prototype.b;
  G.prototype.getRevision = G.prototype.L;
  G.prototype.on = G.prototype.I;
  G.prototype.once = G.prototype.M;
  G.prototype.un = G.prototype.K;
  G.prototype.unByKey = G.prototype.N;
  K.prototype.getSource = K.prototype.da;
  K.prototype.getStyle = K.prototype.J;
  K.prototype.getStyleFunction = K.prototype.D;
  K.prototype.setStyle = K.prototype.c;
  K.prototype.setMap = K.prototype.setMap;
  K.prototype.setSource = K.prototype.Cc;
  K.prototype.getExtent = K.prototype.G;
  K.prototype.getMaxResolution = K.prototype.Nb;
  K.prototype.getMinResolution = K.prototype.Ob;
  K.prototype.getOpacity = K.prototype.Sb;
  K.prototype.getVisible = K.prototype.wb;
  K.prototype.getZIndex = K.prototype.Tb;
  K.prototype.setExtent = K.prototype.cc;
  K.prototype.setMaxResolution = K.prototype.kc;
  K.prototype.setMinResolution = K.prototype.lc;
  K.prototype.setOpacity = K.prototype.dc;
  K.prototype.setVisible = K.prototype.ec;
  K.prototype.setZIndex = K.prototype.fc;
  K.prototype.get = K.prototype.get;
  K.prototype.getKeys = K.prototype.O;
  K.prototype.getProperties = K.prototype.P;
  K.prototype.set = K.prototype.set;
  K.prototype.setProperties = K.prototype.C;
  K.prototype.unset = K.prototype.R;
  K.prototype.changed = K.prototype.u;
  K.prototype.dispatchEvent = K.prototype.b;
  K.prototype.getRevision = K.prototype.L;
  K.prototype.on = K.prototype.I;
  K.prototype.once = K.prototype.M;
  K.prototype.un = K.prototype.K;
  K.prototype.unByKey = K.prototype.N;
  nj.prototype.get = nj.prototype.get;
  nj.prototype.getKeys = nj.prototype.O;
  nj.prototype.getProperties = nj.prototype.P;
  nj.prototype.set = nj.prototype.set;
  nj.prototype.setProperties = nj.prototype.C;
  nj.prototype.unset = nj.prototype.R;
  nj.prototype.changed = nj.prototype.u;
  nj.prototype.dispatchEvent = nj.prototype.b;
  nj.prototype.getRevision = nj.prototype.L;
  nj.prototype.on = nj.prototype.I;
  nj.prototype.once = nj.prototype.M;
  nj.prototype.un = nj.prototype.K;
  nj.prototype.unByKey = nj.prototype.N;
  rj.prototype.getActive = rj.prototype.f;
  rj.prototype.getMap = rj.prototype.j;
  rj.prototype.setActive = rj.prototype.i;
  rj.prototype.get = rj.prototype.get;
  rj.prototype.getKeys = rj.prototype.O;
  rj.prototype.getProperties = rj.prototype.P;
  rj.prototype.set = rj.prototype.set;
  rj.prototype.setProperties = rj.prototype.C;
  rj.prototype.unset = rj.prototype.R;
  rj.prototype.changed = rj.prototype.u;
  rj.prototype.dispatchEvent = rj.prototype.b;
  rj.prototype.getRevision = rj.prototype.L;
  rj.prototype.on = rj.prototype.I;
  rj.prototype.once = rj.prototype.M;
  rj.prototype.un = rj.prototype.K;
  rj.prototype.unByKey = rj.prototype.N;
  vv.prototype.getActive = vv.prototype.f;
  vv.prototype.getMap = vv.prototype.j;
  vv.prototype.setActive = vv.prototype.i;
  vv.prototype.get = vv.prototype.get;
  vv.prototype.getKeys = vv.prototype.O;
  vv.prototype.getProperties = vv.prototype.P;
  vv.prototype.set = vv.prototype.set;
  vv.prototype.setProperties = vv.prototype.C;
  vv.prototype.unset = vv.prototype.R;
  vv.prototype.changed = vv.prototype.u;
  vv.prototype.dispatchEvent = vv.prototype.b;
  vv.prototype.getRevision = vv.prototype.L;
  vv.prototype.on = vv.prototype.I;
  vv.prototype.once = vv.prototype.M;
  vv.prototype.un = vv.prototype.K;
  vv.prototype.unByKey = vv.prototype.N;
  Bj.prototype.getActive = Bj.prototype.f;
  Bj.prototype.getMap = Bj.prototype.j;
  Bj.prototype.setActive = Bj.prototype.i;
  Bj.prototype.get = Bj.prototype.get;
  Bj.prototype.getKeys = Bj.prototype.O;
  Bj.prototype.getProperties = Bj.prototype.P;
  Bj.prototype.set = Bj.prototype.set;
  Bj.prototype.setProperties = Bj.prototype.C;
  Bj.prototype.unset = Bj.prototype.R;
  Bj.prototype.changed = Bj.prototype.u;
  Bj.prototype.dispatchEvent = Bj.prototype.b;
  Bj.prototype.getRevision = Bj.prototype.L;
  Bj.prototype.on = Bj.prototype.I;
  Bj.prototype.once = Bj.prototype.M;
  Bj.prototype.un = Bj.prototype.K;
  Bj.prototype.unByKey = Bj.prototype.N;
  Qj.prototype.getActive = Qj.prototype.f;
  Qj.prototype.getMap = Qj.prototype.j;
  Qj.prototype.setActive = Qj.prototype.i;
  Qj.prototype.get = Qj.prototype.get;
  Qj.prototype.getKeys = Qj.prototype.O;
  Qj.prototype.getProperties = Qj.prototype.P;
  Qj.prototype.set = Qj.prototype.set;
  Qj.prototype.setProperties = Qj.prototype.C;
  Qj.prototype.unset = Qj.prototype.R;
  Qj.prototype.changed = Qj.prototype.u;
  Qj.prototype.dispatchEvent = Qj.prototype.b;
  Qj.prototype.getRevision = Qj.prototype.L;
  Qj.prototype.on = Qj.prototype.I;
  Qj.prototype.once = Qj.prototype.M;
  Qj.prototype.un = Qj.prototype.K;
  Qj.prototype.unByKey = Qj.prototype.N;
  Ej.prototype.getActive = Ej.prototype.f;
  Ej.prototype.getMap = Ej.prototype.j;
  Ej.prototype.setActive = Ej.prototype.i;
  Ej.prototype.get = Ej.prototype.get;
  Ej.prototype.getKeys = Ej.prototype.O;
  Ej.prototype.getProperties = Ej.prototype.P;
  Ej.prototype.set = Ej.prototype.set;
  Ej.prototype.setProperties = Ej.prototype.C;
  Ej.prototype.unset = Ej.prototype.R;
  Ej.prototype.changed = Ej.prototype.u;
  Ej.prototype.dispatchEvent = Ej.prototype.b;
  Ej.prototype.getRevision = Ej.prototype.L;
  Ej.prototype.on = Ej.prototype.I;
  Ej.prototype.once = Ej.prototype.M;
  Ej.prototype.un = Ej.prototype.K;
  Ej.prototype.unByKey = Ej.prototype.N;
  Bv.prototype.getActive = Bv.prototype.f;
  Bv.prototype.getMap = Bv.prototype.j;
  Bv.prototype.setActive = Bv.prototype.i;
  Bv.prototype.get = Bv.prototype.get;
  Bv.prototype.getKeys = Bv.prototype.O;
  Bv.prototype.getProperties = Bv.prototype.P;
  Bv.prototype.set = Bv.prototype.set;
  Bv.prototype.setProperties = Bv.prototype.C;
  Bv.prototype.unset = Bv.prototype.R;
  Bv.prototype.changed = Bv.prototype.u;
  Bv.prototype.dispatchEvent = Bv.prototype.b;
  Bv.prototype.getRevision = Bv.prototype.L;
  Bv.prototype.on = Bv.prototype.I;
  Bv.prototype.once = Bv.prototype.M;
  Bv.prototype.un = Bv.prototype.K;
  Bv.prototype.unByKey = Bv.prototype.N;
  Ij.prototype.getActive = Ij.prototype.f;
  Ij.prototype.getMap = Ij.prototype.j;
  Ij.prototype.setActive = Ij.prototype.i;
  Ij.prototype.get = Ij.prototype.get;
  Ij.prototype.getKeys = Ij.prototype.O;
  Ij.prototype.getProperties = Ij.prototype.P;
  Ij.prototype.set = Ij.prototype.set;
  Ij.prototype.setProperties = Ij.prototype.C;
  Ij.prototype.unset = Ij.prototype.R;
  Ij.prototype.changed = Ij.prototype.u;
  Ij.prototype.dispatchEvent = Ij.prototype.b;
  Ij.prototype.getRevision = Ij.prototype.L;
  Ij.prototype.on = Ij.prototype.I;
  Ij.prototype.once = Ij.prototype.M;
  Ij.prototype.un = Ij.prototype.K;
  Ij.prototype.unByKey = Ij.prototype.N;
  Vj.prototype.getGeometry = Vj.prototype.X;
  Vj.prototype.getActive = Vj.prototype.f;
  Vj.prototype.getMap = Vj.prototype.j;
  Vj.prototype.setActive = Vj.prototype.i;
  Vj.prototype.get = Vj.prototype.get;
  Vj.prototype.getKeys = Vj.prototype.O;
  Vj.prototype.getProperties = Vj.prototype.P;
  Vj.prototype.set = Vj.prototype.set;
  Vj.prototype.setProperties = Vj.prototype.C;
  Vj.prototype.unset = Vj.prototype.R;
  Vj.prototype.changed = Vj.prototype.u;
  Vj.prototype.dispatchEvent = Vj.prototype.b;
  Vj.prototype.getRevision = Vj.prototype.L;
  Vj.prototype.on = Vj.prototype.I;
  Vj.prototype.once = Vj.prototype.M;
  Vj.prototype.un = Vj.prototype.K;
  Vj.prototype.unByKey = Vj.prototype.N;
  Gv.prototype.getActive = Gv.prototype.f;
  Gv.prototype.getMap = Gv.prototype.j;
  Gv.prototype.setActive = Gv.prototype.i;
  Gv.prototype.get = Gv.prototype.get;
  Gv.prototype.getKeys = Gv.prototype.O;
  Gv.prototype.getProperties = Gv.prototype.P;
  Gv.prototype.set = Gv.prototype.set;
  Gv.prototype.setProperties = Gv.prototype.C;
  Gv.prototype.unset = Gv.prototype.R;
  Gv.prototype.changed = Gv.prototype.u;
  Gv.prototype.dispatchEvent = Gv.prototype.b;
  Gv.prototype.getRevision = Gv.prototype.L;
  Gv.prototype.on = Gv.prototype.I;
  Gv.prototype.once = Gv.prototype.M;
  Gv.prototype.un = Gv.prototype.K;
  Gv.prototype.unByKey = Gv.prototype.N;
  Wj.prototype.getActive = Wj.prototype.f;
  Wj.prototype.getMap = Wj.prototype.j;
  Wj.prototype.setActive = Wj.prototype.i;
  Wj.prototype.get = Wj.prototype.get;
  Wj.prototype.getKeys = Wj.prototype.O;
  Wj.prototype.getProperties = Wj.prototype.P;
  Wj.prototype.set = Wj.prototype.set;
  Wj.prototype.setProperties = Wj.prototype.C;
  Wj.prototype.unset = Wj.prototype.R;
  Wj.prototype.changed = Wj.prototype.u;
  Wj.prototype.dispatchEvent = Wj.prototype.b;
  Wj.prototype.getRevision = Wj.prototype.L;
  Wj.prototype.on = Wj.prototype.I;
  Wj.prototype.once = Wj.prototype.M;
  Wj.prototype.un = Wj.prototype.K;
  Wj.prototype.unByKey = Wj.prototype.N;
  Yj.prototype.getActive = Yj.prototype.f;
  Yj.prototype.getMap = Yj.prototype.j;
  Yj.prototype.setActive = Yj.prototype.i;
  Yj.prototype.get = Yj.prototype.get;
  Yj.prototype.getKeys = Yj.prototype.O;
  Yj.prototype.getProperties = Yj.prototype.P;
  Yj.prototype.set = Yj.prototype.set;
  Yj.prototype.setProperties = Yj.prototype.C;
  Yj.prototype.unset = Yj.prototype.R;
  Yj.prototype.changed = Yj.prototype.u;
  Yj.prototype.dispatchEvent = Yj.prototype.b;
  Yj.prototype.getRevision = Yj.prototype.L;
  Yj.prototype.on = Yj.prototype.I;
  Yj.prototype.once = Yj.prototype.M;
  Yj.prototype.un = Yj.prototype.K;
  Yj.prototype.unByKey = Yj.prototype.N;
  Xv.prototype.getActive = Xv.prototype.f;
  Xv.prototype.getMap = Xv.prototype.j;
  Xv.prototype.setActive = Xv.prototype.i;
  Xv.prototype.get = Xv.prototype.get;
  Xv.prototype.getKeys = Xv.prototype.O;
  Xv.prototype.getProperties = Xv.prototype.P;
  Xv.prototype.set = Xv.prototype.set;
  Xv.prototype.setProperties = Xv.prototype.C;
  Xv.prototype.unset = Xv.prototype.R;
  Xv.prototype.changed = Xv.prototype.u;
  Xv.prototype.dispatchEvent = Xv.prototype.b;
  Xv.prototype.getRevision = Xv.prototype.L;
  Xv.prototype.on = Xv.prototype.I;
  Xv.prototype.once = Xv.prototype.M;
  Xv.prototype.un = Xv.prototype.K;
  Xv.prototype.unByKey = Xv.prototype.N;
  ak.prototype.getActive = ak.prototype.f;
  ak.prototype.getMap = ak.prototype.j;
  ak.prototype.setActive = ak.prototype.i;
  ak.prototype.get = ak.prototype.get;
  ak.prototype.getKeys = ak.prototype.O;
  ak.prototype.getProperties = ak.prototype.P;
  ak.prototype.set = ak.prototype.set;
  ak.prototype.setProperties = ak.prototype.C;
  ak.prototype.unset = ak.prototype.R;
  ak.prototype.changed = ak.prototype.u;
  ak.prototype.dispatchEvent = ak.prototype.b;
  ak.prototype.getRevision = ak.prototype.L;
  ak.prototype.on = ak.prototype.I;
  ak.prototype.once = ak.prototype.M;
  ak.prototype.un = ak.prototype.K;
  ak.prototype.unByKey = ak.prototype.N;
  ck.prototype.getActive = ck.prototype.f;
  ck.prototype.getMap = ck.prototype.j;
  ck.prototype.setActive = ck.prototype.i;
  ck.prototype.get = ck.prototype.get;
  ck.prototype.getKeys = ck.prototype.O;
  ck.prototype.getProperties = ck.prototype.P;
  ck.prototype.set = ck.prototype.set;
  ck.prototype.setProperties = ck.prototype.C;
  ck.prototype.unset = ck.prototype.R;
  ck.prototype.changed = ck.prototype.u;
  ck.prototype.dispatchEvent = ck.prototype.b;
  ck.prototype.getRevision = ck.prototype.L;
  ck.prototype.on = ck.prototype.I;
  ck.prototype.once = ck.prototype.M;
  ck.prototype.un = ck.prototype.K;
  ck.prototype.unByKey = ck.prototype.N;
  gk.prototype.getActive = gk.prototype.f;
  gk.prototype.getMap = gk.prototype.j;
  gk.prototype.setActive = gk.prototype.i;
  gk.prototype.get = gk.prototype.get;
  gk.prototype.getKeys = gk.prototype.O;
  gk.prototype.getProperties = gk.prototype.P;
  gk.prototype.set = gk.prototype.set;
  gk.prototype.setProperties = gk.prototype.C;
  gk.prototype.unset = gk.prototype.R;
  gk.prototype.changed = gk.prototype.u;
  gk.prototype.dispatchEvent = gk.prototype.b;
  gk.prototype.getRevision = gk.prototype.L;
  gk.prototype.on = gk.prototype.I;
  gk.prototype.once = gk.prototype.M;
  gk.prototype.un = gk.prototype.K;
  gk.prototype.unByKey = gk.prototype.N;
  kw.prototype.getActive = kw.prototype.f;
  kw.prototype.getMap = kw.prototype.j;
  kw.prototype.setActive = kw.prototype.i;
  kw.prototype.get = kw.prototype.get;
  kw.prototype.getKeys = kw.prototype.O;
  kw.prototype.getProperties = kw.prototype.P;
  kw.prototype.set = kw.prototype.set;
  kw.prototype.setProperties = kw.prototype.C;
  kw.prototype.unset = kw.prototype.R;
  kw.prototype.changed = kw.prototype.u;
  kw.prototype.dispatchEvent = kw.prototype.b;
  kw.prototype.getRevision = kw.prototype.L;
  kw.prototype.on = kw.prototype.I;
  kw.prototype.once = kw.prototype.M;
  kw.prototype.un = kw.prototype.K;
  kw.prototype.unByKey = kw.prototype.N;
  nw.prototype.getActive = nw.prototype.f;
  nw.prototype.getMap = nw.prototype.j;
  nw.prototype.setActive = nw.prototype.i;
  nw.prototype.get = nw.prototype.get;
  nw.prototype.getKeys = nw.prototype.O;
  nw.prototype.getProperties = nw.prototype.P;
  nw.prototype.set = nw.prototype.set;
  nw.prototype.setProperties = nw.prototype.C;
  nw.prototype.unset = nw.prototype.R;
  nw.prototype.changed = nw.prototype.u;
  nw.prototype.dispatchEvent = nw.prototype.b;
  nw.prototype.getRevision = nw.prototype.L;
  nw.prototype.on = nw.prototype.I;
  nw.prototype.once = nw.prototype.M;
  nw.prototype.un = nw.prototype.K;
  nw.prototype.unByKey = nw.prototype.N;
  sw.prototype.getActive = sw.prototype.f;
  sw.prototype.getMap = sw.prototype.j;
  sw.prototype.setActive = sw.prototype.i;
  sw.prototype.get = sw.prototype.get;
  sw.prototype.getKeys = sw.prototype.O;
  sw.prototype.getProperties = sw.prototype.P;
  sw.prototype.set = sw.prototype.set;
  sw.prototype.setProperties = sw.prototype.C;
  sw.prototype.unset = sw.prototype.R;
  sw.prototype.changed = sw.prototype.u;
  sw.prototype.dispatchEvent = sw.prototype.b;
  sw.prototype.getRevision = sw.prototype.L;
  sw.prototype.on = sw.prototype.I;
  sw.prototype.once = sw.prototype.M;
  sw.prototype.un = sw.prototype.K;
  sw.prototype.unByKey = sw.prototype.N;
  Md.prototype.get = Md.prototype.get;
  Md.prototype.getKeys = Md.prototype.O;
  Md.prototype.getProperties = Md.prototype.P;
  Md.prototype.set = Md.prototype.set;
  Md.prototype.setProperties = Md.prototype.C;
  Md.prototype.unset = Md.prototype.R;
  Md.prototype.changed = Md.prototype.u;
  Md.prototype.dispatchEvent = Md.prototype.b;
  Md.prototype.getRevision = Md.prototype.L;
  Md.prototype.on = Md.prototype.I;
  Md.prototype.once = Md.prototype.M;
  Md.prototype.un = Md.prototype.K;
  Md.prototype.unByKey = Md.prototype.N;
  Od.prototype.getClosestPoint = Od.prototype.vb;
  Od.prototype.getExtent = Od.prototype.G;
  Od.prototype.simplify = Od.prototype.Bb;
  Od.prototype.transform = Od.prototype.fb;
  Od.prototype.get = Od.prototype.get;
  Od.prototype.getKeys = Od.prototype.O;
  Od.prototype.getProperties = Od.prototype.P;
  Od.prototype.set = Od.prototype.set;
  Od.prototype.setProperties = Od.prototype.C;
  Od.prototype.unset = Od.prototype.R;
  Od.prototype.changed = Od.prototype.u;
  Od.prototype.dispatchEvent = Od.prototype.b;
  Od.prototype.getRevision = Od.prototype.L;
  Od.prototype.on = Od.prototype.I;
  Od.prototype.once = Od.prototype.M;
  Od.prototype.un = Od.prototype.K;
  Od.prototype.unByKey = Od.prototype.N;
  iv.prototype.getFirstCoordinate = iv.prototype.Kb;
  iv.prototype.getLastCoordinate = iv.prototype.Lb;
  iv.prototype.getLayout = iv.prototype.Mb;
  iv.prototype.getClosestPoint = iv.prototype.vb;
  iv.prototype.getExtent = iv.prototype.G;
  iv.prototype.simplify = iv.prototype.Bb;
  iv.prototype.get = iv.prototype.get;
  iv.prototype.getKeys = iv.prototype.O;
  iv.prototype.getProperties = iv.prototype.P;
  iv.prototype.set = iv.prototype.set;
  iv.prototype.setProperties = iv.prototype.C;
  iv.prototype.unset = iv.prototype.R;
  iv.prototype.changed = iv.prototype.u;
  iv.prototype.dispatchEvent = iv.prototype.b;
  iv.prototype.getRevision = iv.prototype.L;
  iv.prototype.on = iv.prototype.I;
  iv.prototype.once = iv.prototype.M;
  iv.prototype.un = iv.prototype.K;
  iv.prototype.unByKey = iv.prototype.N;
  zp.prototype.getClosestPoint = zp.prototype.vb;
  zp.prototype.getExtent = zp.prototype.G;
  zp.prototype.simplify = zp.prototype.Bb;
  zp.prototype.transform = zp.prototype.fb;
  zp.prototype.get = zp.prototype.get;
  zp.prototype.getKeys = zp.prototype.O;
  zp.prototype.getProperties = zp.prototype.P;
  zp.prototype.set = zp.prototype.set;
  zp.prototype.setProperties = zp.prototype.C;
  zp.prototype.unset = zp.prototype.R;
  zp.prototype.changed = zp.prototype.u;
  zp.prototype.dispatchEvent = zp.prototype.b;
  zp.prototype.getRevision = zp.prototype.L;
  zp.prototype.on = zp.prototype.I;
  zp.prototype.once = zp.prototype.M;
  zp.prototype.un = zp.prototype.K;
  zp.prototype.unByKey = zp.prototype.N;
  fe.prototype.getFirstCoordinate = fe.prototype.Kb;
  fe.prototype.getLastCoordinate = fe.prototype.Lb;
  fe.prototype.getLayout = fe.prototype.Mb;
  fe.prototype.getClosestPoint = fe.prototype.vb;
  fe.prototype.getExtent = fe.prototype.G;
  fe.prototype.simplify = fe.prototype.Bb;
  fe.prototype.transform = fe.prototype.fb;
  fe.prototype.get = fe.prototype.get;
  fe.prototype.getKeys = fe.prototype.O;
  fe.prototype.getProperties = fe.prototype.P;
  fe.prototype.set = fe.prototype.set;
  fe.prototype.setProperties = fe.prototype.C;
  fe.prototype.unset = fe.prototype.R;
  fe.prototype.changed = fe.prototype.u;
  fe.prototype.dispatchEvent = fe.prototype.b;
  fe.prototype.getRevision = fe.prototype.L;
  fe.prototype.on = fe.prototype.I;
  fe.prototype.once = fe.prototype.M;
  fe.prototype.un = fe.prototype.K;
  fe.prototype.unByKey = fe.prototype.N;
  T.prototype.getFirstCoordinate = T.prototype.Kb;
  T.prototype.getLastCoordinate = T.prototype.Lb;
  T.prototype.getLayout = T.prototype.Mb;
  T.prototype.getClosestPoint = T.prototype.vb;
  T.prototype.getExtent = T.prototype.G;
  T.prototype.simplify = T.prototype.Bb;
  T.prototype.transform = T.prototype.fb;
  T.prototype.get = T.prototype.get;
  T.prototype.getKeys = T.prototype.O;
  T.prototype.getProperties = T.prototype.P;
  T.prototype.set = T.prototype.set;
  T.prototype.setProperties = T.prototype.C;
  T.prototype.unset = T.prototype.R;
  T.prototype.changed = T.prototype.u;
  T.prototype.dispatchEvent = T.prototype.b;
  T.prototype.getRevision = T.prototype.L;
  T.prototype.on = T.prototype.I;
  T.prototype.once = T.prototype.M;
  T.prototype.un = T.prototype.K;
  T.prototype.unByKey = T.prototype.N;
  U.prototype.getFirstCoordinate = U.prototype.Kb;
  U.prototype.getLastCoordinate = U.prototype.Lb;
  U.prototype.getLayout = U.prototype.Mb;
  U.prototype.getClosestPoint = U.prototype.vb;
  U.prototype.getExtent = U.prototype.G;
  U.prototype.simplify = U.prototype.Bb;
  U.prototype.transform = U.prototype.fb;
  U.prototype.get = U.prototype.get;
  U.prototype.getKeys = U.prototype.O;
  U.prototype.getProperties = U.prototype.P;
  U.prototype.set = U.prototype.set;
  U.prototype.setProperties = U.prototype.C;
  U.prototype.unset = U.prototype.R;
  U.prototype.changed = U.prototype.u;
  U.prototype.dispatchEvent = U.prototype.b;
  U.prototype.getRevision = U.prototype.L;
  U.prototype.on = U.prototype.I;
  U.prototype.once = U.prototype.M;
  U.prototype.un = U.prototype.K;
  U.prototype.unByKey = U.prototype.N;
  pp.prototype.getFirstCoordinate = pp.prototype.Kb;
  pp.prototype.getLastCoordinate = pp.prototype.Lb;
  pp.prototype.getLayout = pp.prototype.Mb;
  pp.prototype.getClosestPoint = pp.prototype.vb;
  pp.prototype.getExtent = pp.prototype.G;
  pp.prototype.simplify = pp.prototype.Bb;
  pp.prototype.transform = pp.prototype.fb;
  pp.prototype.get = pp.prototype.get;
  pp.prototype.getKeys = pp.prototype.O;
  pp.prototype.getProperties = pp.prototype.P;
  pp.prototype.set = pp.prototype.set;
  pp.prototype.setProperties = pp.prototype.C;
  pp.prototype.unset = pp.prototype.R;
  pp.prototype.changed = pp.prototype.u;
  pp.prototype.dispatchEvent = pp.prototype.b;
  pp.prototype.getRevision = pp.prototype.L;
  pp.prototype.on = pp.prototype.I;
  pp.prototype.once = pp.prototype.M;
  pp.prototype.un = pp.prototype.K;
  pp.prototype.unByKey = pp.prototype.N;
  V.prototype.getFirstCoordinate = V.prototype.Kb;
  V.prototype.getLastCoordinate = V.prototype.Lb;
  V.prototype.getLayout = V.prototype.Mb;
  V.prototype.getClosestPoint = V.prototype.vb;
  V.prototype.getExtent = V.prototype.G;
  V.prototype.simplify = V.prototype.Bb;
  V.prototype.transform = V.prototype.fb;
  V.prototype.get = V.prototype.get;
  V.prototype.getKeys = V.prototype.O;
  V.prototype.getProperties = V.prototype.P;
  V.prototype.set = V.prototype.set;
  V.prototype.setProperties = V.prototype.C;
  V.prototype.unset = V.prototype.R;
  V.prototype.changed = V.prototype.u;
  V.prototype.dispatchEvent = V.prototype.b;
  V.prototype.getRevision = V.prototype.L;
  V.prototype.on = V.prototype.I;
  V.prototype.once = V.prototype.M;
  V.prototype.un = V.prototype.K;
  V.prototype.unByKey = V.prototype.N;
  E.prototype.getFirstCoordinate = E.prototype.Kb;
  E.prototype.getLastCoordinate = E.prototype.Lb;
  E.prototype.getLayout = E.prototype.Mb;
  E.prototype.getClosestPoint = E.prototype.vb;
  E.prototype.getExtent = E.prototype.G;
  E.prototype.simplify = E.prototype.Bb;
  E.prototype.transform = E.prototype.fb;
  E.prototype.get = E.prototype.get;
  E.prototype.getKeys = E.prototype.O;
  E.prototype.getProperties = E.prototype.P;
  E.prototype.set = E.prototype.set;
  E.prototype.setProperties = E.prototype.C;
  E.prototype.unset = E.prototype.R;
  E.prototype.changed = E.prototype.u;
  E.prototype.dispatchEvent = E.prototype.b;
  E.prototype.getRevision = E.prototype.L;
  E.prototype.on = E.prototype.I;
  E.prototype.once = E.prototype.M;
  E.prototype.un = E.prototype.K;
  E.prototype.unByKey = E.prototype.N;
  F.prototype.getFirstCoordinate = F.prototype.Kb;
  F.prototype.getLastCoordinate = F.prototype.Lb;
  F.prototype.getLayout = F.prototype.Mb;
  F.prototype.getClosestPoint = F.prototype.vb;
  F.prototype.getExtent = F.prototype.G;
  F.prototype.simplify = F.prototype.Bb;
  F.prototype.transform = F.prototype.fb;
  F.prototype.get = F.prototype.get;
  F.prototype.getKeys = F.prototype.O;
  F.prototype.getProperties = F.prototype.P;
  F.prototype.set = F.prototype.set;
  F.prototype.setProperties = F.prototype.C;
  F.prototype.unset = F.prototype.R;
  F.prototype.changed = F.prototype.u;
  F.prototype.dispatchEvent = F.prototype.b;
  F.prototype.getRevision = F.prototype.L;
  F.prototype.on = F.prototype.I;
  F.prototype.once = F.prototype.M;
  F.prototype.un = F.prototype.K;
  F.prototype.unByKey = F.prototype.N;
  Yp.prototype.readFeatures = Yp.prototype.Ea;
  Zp.prototype.readFeatures = Zp.prototype.Ea;
  Zp.prototype.readFeatures = Zp.prototype.Ea;
  jg.prototype.get = jg.prototype.get;
  jg.prototype.getKeys = jg.prototype.O;
  jg.prototype.getProperties = jg.prototype.P;
  jg.prototype.set = jg.prototype.set;
  jg.prototype.setProperties = jg.prototype.C;
  jg.prototype.unset = jg.prototype.R;
  jg.prototype.changed = jg.prototype.u;
  jg.prototype.dispatchEvent = jg.prototype.b;
  jg.prototype.getRevision = jg.prototype.L;
  jg.prototype.on = jg.prototype.I;
  jg.prototype.once = jg.prototype.M;
  jg.prototype.un = jg.prototype.K;
  jg.prototype.unByKey = jg.prototype.N;
  Ng.prototype.getMap = Ng.prototype.i;
  Ng.prototype.setMap = Ng.prototype.setMap;
  Ng.prototype.setTarget = Ng.prototype.c;
  Ng.prototype.get = Ng.prototype.get;
  Ng.prototype.getKeys = Ng.prototype.O;
  Ng.prototype.getProperties = Ng.prototype.P;
  Ng.prototype.set = Ng.prototype.set;
  Ng.prototype.setProperties = Ng.prototype.C;
  Ng.prototype.unset = Ng.prototype.R;
  Ng.prototype.changed = Ng.prototype.u;
  Ng.prototype.dispatchEvent = Ng.prototype.b;
  Ng.prototype.getRevision = Ng.prototype.L;
  Ng.prototype.on = Ng.prototype.I;
  Ng.prototype.once = Ng.prototype.M;
  Ng.prototype.un = Ng.prototype.K;
  Ng.prototype.unByKey = Ng.prototype.N;
  Yg.prototype.getMap = Yg.prototype.i;
  Yg.prototype.setMap = Yg.prototype.setMap;
  Yg.prototype.setTarget = Yg.prototype.c;
  Yg.prototype.get = Yg.prototype.get;
  Yg.prototype.getKeys = Yg.prototype.O;
  Yg.prototype.getProperties = Yg.prototype.P;
  Yg.prototype.set = Yg.prototype.set;
  Yg.prototype.setProperties = Yg.prototype.C;
  Yg.prototype.unset = Yg.prototype.R;
  Yg.prototype.changed = Yg.prototype.u;
  Yg.prototype.dispatchEvent = Yg.prototype.b;
  Yg.prototype.getRevision = Yg.prototype.L;
  Yg.prototype.on = Yg.prototype.I;
  Yg.prototype.once = Yg.prototype.M;
  Yg.prototype.un = Yg.prototype.K;
  Yg.prototype.unByKey = Yg.prototype.N;
  Zg.prototype.getMap = Zg.prototype.i;
  Zg.prototype.setMap = Zg.prototype.setMap;
  Zg.prototype.setTarget = Zg.prototype.c;
  Zg.prototype.get = Zg.prototype.get;
  Zg.prototype.getKeys = Zg.prototype.O;
  Zg.prototype.getProperties = Zg.prototype.P;
  Zg.prototype.set = Zg.prototype.set;
  Zg.prototype.setProperties = Zg.prototype.C;
  Zg.prototype.unset = Zg.prototype.R;
  Zg.prototype.changed = Zg.prototype.u;
  Zg.prototype.dispatchEvent = Zg.prototype.b;
  Zg.prototype.getRevision = Zg.prototype.L;
  Zg.prototype.on = Zg.prototype.I;
  Zg.prototype.once = Zg.prototype.M;
  Zg.prototype.un = Zg.prototype.K;
  Zg.prototype.unByKey = Zg.prototype.N;
  No.prototype.getMap = No.prototype.i;
  No.prototype.setMap = No.prototype.setMap;
  No.prototype.setTarget = No.prototype.c;
  No.prototype.get = No.prototype.get;
  No.prototype.getKeys = No.prototype.O;
  No.prototype.getProperties = No.prototype.P;
  No.prototype.set = No.prototype.set;
  No.prototype.setProperties = No.prototype.C;
  No.prototype.unset = No.prototype.R;
  No.prototype.changed = No.prototype.u;
  No.prototype.dispatchEvent = No.prototype.b;
  No.prototype.getRevision = No.prototype.L;
  No.prototype.on = No.prototype.I;
  No.prototype.once = No.prototype.M;
  No.prototype.un = No.prototype.K;
  No.prototype.unByKey = No.prototype.N;
  Qg.prototype.getMap = Qg.prototype.i;
  Qg.prototype.setMap = Qg.prototype.setMap;
  Qg.prototype.setTarget = Qg.prototype.c;
  Qg.prototype.get = Qg.prototype.get;
  Qg.prototype.getKeys = Qg.prototype.O;
  Qg.prototype.getProperties = Qg.prototype.P;
  Qg.prototype.set = Qg.prototype.set;
  Qg.prototype.setProperties = Qg.prototype.C;
  Qg.prototype.unset = Qg.prototype.R;
  Qg.prototype.changed = Qg.prototype.u;
  Qg.prototype.dispatchEvent = Qg.prototype.b;
  Qg.prototype.getRevision = Qg.prototype.L;
  Qg.prototype.on = Qg.prototype.I;
  Qg.prototype.once = Qg.prototype.M;
  Qg.prototype.un = Qg.prototype.K;
  Qg.prototype.unByKey = Qg.prototype.N;
  So.prototype.getMap = So.prototype.i;
  So.prototype.setMap = So.prototype.setMap;
  So.prototype.setTarget = So.prototype.c;
  So.prototype.get = So.prototype.get;
  So.prototype.getKeys = So.prototype.O;
  So.prototype.getProperties = So.prototype.P;
  So.prototype.set = So.prototype.set;
  So.prototype.setProperties = So.prototype.C;
  So.prototype.unset = So.prototype.R;
  So.prototype.changed = So.prototype.u;
  So.prototype.dispatchEvent = So.prototype.b;
  So.prototype.getRevision = So.prototype.L;
  So.prototype.on = So.prototype.I;
  So.prototype.once = So.prototype.M;
  So.prototype.un = So.prototype.K;
  So.prototype.unByKey = So.prototype.N;
  Sg.prototype.getMap = Sg.prototype.i;
  Sg.prototype.setMap = Sg.prototype.setMap;
  Sg.prototype.setTarget = Sg.prototype.c;
  Sg.prototype.get = Sg.prototype.get;
  Sg.prototype.getKeys = Sg.prototype.O;
  Sg.prototype.getProperties = Sg.prototype.P;
  Sg.prototype.set = Sg.prototype.set;
  Sg.prototype.setProperties = Sg.prototype.C;
  Sg.prototype.unset = Sg.prototype.R;
  Sg.prototype.changed = Sg.prototype.u;
  Sg.prototype.dispatchEvent = Sg.prototype.b;
  Sg.prototype.getRevision = Sg.prototype.L;
  Sg.prototype.on = Sg.prototype.I;
  Sg.prototype.once = Sg.prototype.M;
  Sg.prototype.un = Sg.prototype.K;
  Sg.prototype.unByKey = Sg.prototype.N;
  Wo.prototype.getMap = Wo.prototype.i;
  Wo.prototype.setMap = Wo.prototype.setMap;
  Wo.prototype.setTarget = Wo.prototype.c;
  Wo.prototype.get = Wo.prototype.get;
  Wo.prototype.getKeys = Wo.prototype.O;
  Wo.prototype.getProperties = Wo.prototype.P;
  Wo.prototype.set = Wo.prototype.set;
  Wo.prototype.setProperties = Wo.prototype.C;
  Wo.prototype.unset = Wo.prototype.R;
  Wo.prototype.changed = Wo.prototype.u;
  Wo.prototype.dispatchEvent = Wo.prototype.b;
  Wo.prototype.getRevision = Wo.prototype.L;
  Wo.prototype.on = Wo.prototype.I;
  Wo.prototype.once = Wo.prototype.M;
  Wo.prototype.un = Wo.prototype.K;
  Wo.prototype.unByKey = Wo.prototype.N;
  bp.prototype.getMap = bp.prototype.i;
  bp.prototype.setMap = bp.prototype.setMap;
  bp.prototype.setTarget = bp.prototype.c;
  bp.prototype.get = bp.prototype.get;
  bp.prototype.getKeys = bp.prototype.O;
  bp.prototype.getProperties = bp.prototype.P;
  bp.prototype.set = bp.prototype.set;
  bp.prototype.setProperties = bp.prototype.C;
  bp.prototype.unset = bp.prototype.R;
  bp.prototype.changed = bp.prototype.u;
  bp.prototype.dispatchEvent = bp.prototype.b;
  bp.prototype.getRevision = bp.prototype.L;
  bp.prototype.on = bp.prototype.I;
  bp.prototype.once = bp.prototype.M;
  bp.prototype.un = bp.prototype.K;
  bp.prototype.unByKey = bp.prototype.N;
  return OPENLAYERS.ol;
}));

})();
System.register("app/openlayers/layer.component.js", ["angular2/core", "openlayers", "../config.model"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1,
      openlayers_1,
      config_model_1;
  var MapLayerComponent,
      PointLayerComponent,
      RasterLayerComponent;
  return {
    setters: [function(core_1_1) {
      core_1 = core_1_1;
    }, function(openlayers_1_1) {
      openlayers_1 = openlayers_1_1;
    }, function(config_model_1_1) {
      config_model_1 = config_model_1_1;
    }],
    execute: function() {
      MapLayerComponent = (function() {
        function MapLayerComponent() {}
        MapLayerComponent.prototype.isFirstChange = function(changes) {
          for (var property in changes) {
            if (changes[property].isFirstChange()) {
              return true;
            }
          }
          return false;
        };
        __decorate([core_1.Input(), __metadata('design:type', Object)], MapLayerComponent.prototype, "params", void 0);
        __decorate([core_1.Input(), __metadata('design:type', Object)], MapLayerComponent.prototype, "style", void 0);
        MapLayerComponent = __decorate([core_1.Component({
          selector: 'ol-layer',
          template: '',
          changeDetection: core_1.ChangeDetectionStrategy.Detached
        }), __metadata('design:paramtypes', [])], MapLayerComponent);
        return MapLayerComponent;
      }());
      exports_1("MapLayerComponent", MapLayerComponent);
      PointLayerComponent = (function(_super) {
        __extends(PointLayerComponent, _super);
        function PointLayerComponent() {
          _super.apply(this, arguments);
        }
        PointLayerComponent.prototype.getLayer = function() {
          return this.layer;
        };
        PointLayerComponent.prototype.ngOnChanges = function(changes) {
          var _this = this;
          if (!this.isFirstChange(changes)) {
            return;
          }
          this.source = new openlayers_1.default.source.Vector({
            format: new openlayers_1.default.format.GeoJSON(),
            url: config_model_1.default.MAPPING_URL + '?' + Object.keys(this.params).map(function(key) {
              return key + '=' + encodeURIComponent(_this.params[key]);
            }).join('&') + '&format=geojson',
            wrapX: false
          });
          this.layer = new openlayers_1.default.layer.Vector({
            source: this.source,
            style: new openlayers_1.default.style.Style({image: new openlayers_1.default.style.Circle({
                radius: 5,
                fill: new openlayers_1.default.style.Fill({color: this.style.color}),
                stroke: new openlayers_1.default.style.Stroke({
                  color: '#000000',
                  width: 1
                })
              })})
          });
        };
        PointLayerComponent.prototype.getExtent = function() {
          return this.source.getExtent();
        };
        PointLayerComponent = __decorate([core_1.Component({
          selector: 'ol-point-layer',
          template: '',
          changeDetection: core_1.ChangeDetectionStrategy.Detached
        }), __metadata('design:paramtypes', [])], PointLayerComponent);
        return PointLayerComponent;
      }(MapLayerComponent));
      exports_1("PointLayerComponent", PointLayerComponent);
      RasterLayerComponent = (function(_super) {
        __extends(RasterLayerComponent, _super);
        function RasterLayerComponent() {
          _super.apply(this, arguments);
        }
        RasterLayerComponent.prototype.getLayer = function() {
          return this.layer;
        };
        RasterLayerComponent.prototype.ngOnChanges = function(changes) {
          if (!this.isFirstChange(changes)) {
            return;
          }
          this.source = new openlayers_1.default.source.TileWMS({
            url: config_model_1.default.MAPPING_URL,
            params: this.params,
            wrapX: false
          });
          this.layer = new openlayers_1.default.layer.Tile({
            source: this.source,
            opacity: this.style.opacity
          });
        };
        RasterLayerComponent.prototype.getExtent = function() {
          return this.layer.getExtent();
        };
        RasterLayerComponent = __decorate([core_1.Component({
          selector: 'ol-raster-layer',
          template: '',
          changeDetection: core_1.ChangeDetectionStrategy.Detached
        }), __metadata('design:paramtypes', [])], RasterLayerComponent);
        return RasterLayerComponent;
      }(MapLayerComponent));
      exports_1("RasterLayerComponent", RasterLayerComponent);
    }
  };
});

System.registerDynamic("node_modules/ng2-material/components/content/content.js", ["angular2/core"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('angular2/core');
  var MdContent = (function() {
    function MdContent() {}
    MdContent = __decorate([core_1.Directive({selector: 'md-content'}), __metadata('design:paramtypes', [])], MdContent);
    return MdContent;
  }());
  exports.MdContent = MdContent;
  return module.exports;
});

System.registerDynamic("node_modules/ng2-material/components/dialog/dialog_config.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var MdDialogConfig = (function() {
    function MdDialogConfig() {
      this.width = null;
      this.height = null;
      this.container = null;
      this.sourceEvent = null;
      this.clickClose = true;
      this.context = {};
    }
    MdDialogConfig.prototype.parent = function(element) {
      this.container = element;
      return this;
    };
    MdDialogConfig.prototype.clickOutsideToClose = function(enabled) {
      this.clickClose = enabled;
      return this;
    };
    MdDialogConfig.prototype.title = function(text) {
      this.context.title = text;
      return this;
    };
    MdDialogConfig.prototype.textContent = function(text) {
      this.context.textContent = text;
      return this;
    };
    MdDialogConfig.prototype.ariaLabel = function(text) {
      this.context.ariaLabel = text;
      return this;
    };
    MdDialogConfig.prototype.ok = function(text) {
      this.context.ok = text;
      return this;
    };
    MdDialogConfig.prototype.cancel = function(text) {
      this.context.cancel = text;
      return this;
    };
    MdDialogConfig.prototype.targetEvent = function(ev) {
      this.sourceEvent = ev;
      return this;
    };
    return MdDialogConfig;
  }());
  exports.MdDialogConfig = MdDialogConfig;
  return module.exports;
});

System.registerDynamic("node_modules/ng2-material/components/dialog/dialog_container.js", ["angular2/core", "../../core/key_codes"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var __param = (this && this.__param) || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  var core_1 = $__require('angular2/core');
  var core_2 = $__require('angular2/core');
  var core_3 = $__require('angular2/core');
  var core_4 = $__require('angular2/core');
  var key_codes_1 = $__require('../../core/key_codes');
  var core_5 = $__require('angular2/core');
  var core_6 = $__require('angular2/core');
  var core_7 = $__require('angular2/core');
  var core_8 = $__require('angular2/core');
  var MdDialogContainer = (function() {
    function MdDialogContainer() {
      this.contentRef = null;
      this.dialogRef = null;
    }
    MdDialogContainer.prototype.wrapFocus = function() {};
    MdDialogContainer.prototype.documentKeypress = function(event) {
      if (event.keyCode == key_codes_1.KeyCodes.ESCAPE) {
        this.dialogRef.close();
      }
    };
    MdDialogContainer = __decorate([core_3.Component({
      selector: 'md-dialog-container',
      host: {
        'class': 'md-dialog',
        'tabindex': '0',
        '(body:keydown)': 'documentKeypress($event)'
      }
    }), core_2.View({
      encapsulation: core_1.ViewEncapsulation.None,
      template: "\n    <md-dialog-content></md-dialog-content>\n    <div tabindex=\"0\" (focus)=\"wrapFocus()\"></div>",
      directives: [core_5.forwardRef(function() {
        return MdDialogContent;
      })]
    }), __metadata('design:paramtypes', [])], MdDialogContainer);
    return MdDialogContainer;
  }());
  exports.MdDialogContainer = MdDialogContainer;
  var MdDialogContent = (function() {
    function MdDialogContent(dialogContainer, elementRef) {
      dialogContainer.contentRef = elementRef;
    }
    MdDialogContent = __decorate([core_6.Directive({selector: 'md-dialog-content'}), __param(0, core_7.Host()), __param(0, core_8.SkipSelf()), __metadata('design:paramtypes', [MdDialogContainer, core_4.ElementRef])], MdDialogContent);
    return MdDialogContent;
  }());
  exports.MdDialogContent = MdDialogContent;
  return module.exports;
});

System.registerDynamic("node_modules/ng2-material/components/button/button.js", ["angular2/core", "angular2/src/facade/async", "angular2/src/facade/lang", "../../core/util/ink"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('angular2/core');
  var async_1 = $__require('angular2/src/facade/async');
  var lang_1 = $__require('angular2/src/facade/lang');
  var core_2 = $__require('angular2/core');
  var ink_1 = $__require('../../core/util/ink');
  var BUTTON_TEMPLATE = "<span class=\"md-button-wrapper\"><ng-content></ng-content></span>";
  var MdButton = (function() {
    function MdButton(_element) {
      this._element = _element;
      this.isMouseDown = false;
      this.isKeyboardFocused = false;
    }
    MdButton.prototype.onMousedown = function(event) {
      var _this = this;
      this.isMouseDown = true;
      async_1.TimerWrapper.setTimeout(function() {
        _this.isMouseDown = false;
      }, 100);
      if (this._element && ink_1.Ink.canApply(this._element.nativeElement)) {
        ink_1.Ink.rippleEvent(this._element.nativeElement, event);
      }
    };
    MdButton.prototype.onFocus = function() {
      this.isKeyboardFocused = !this.isMouseDown;
    };
    MdButton.prototype.onBlur = function() {
      this.isKeyboardFocused = false;
    };
    MdButton = __decorate([core_1.Component({
      selector: '[md-button]:not(a), [md-fab]:not(a), [md-raised-button]:not(a)',
      host: {
        '(mousedown)': 'onMousedown($event)',
        '(focus)': 'onFocus()',
        '(blur)': 'onBlur()',
        '[class.md-button-focus]': 'isKeyboardFocused'
      }
    }), core_1.View({
      template: BUTTON_TEMPLATE,
      encapsulation: core_1.ViewEncapsulation.None
    }), __metadata('design:paramtypes', [core_2.ElementRef])], MdButton);
    return MdButton;
  }());
  exports.MdButton = MdButton;
  var MdAnchor = (function(_super) {
    __extends(MdAnchor, _super);
    function MdAnchor() {
      _super.apply(this, arguments);
    }
    Object.defineProperty(MdAnchor.prototype, "disabled", {
      get: function() {
        return this.disabled_;
      },
      set: function(value) {
        this.disabled_ = lang_1.isPresent(value) && this.disabled !== false;
      },
      enumerable: true,
      configurable: true
    });
    MdAnchor.prototype.onClick = function(event) {
      if (this.disabled) {
        event.preventDefault();
      }
    };
    MdAnchor.prototype.ngOnChanges = function(_) {
      this.tabIndex = this.disabled ? -1 : 0;
    };
    Object.defineProperty(MdAnchor.prototype, "isAriaDisabled", {
      get: function() {
        return this.disabled ? 'true' : 'false';
      },
      enumerable: true,
      configurable: true
    });
    MdAnchor = __decorate([core_1.Component({
      selector: 'a[md-button], a[md-raised-button], a[md-fab]',
      inputs: ['disabled'],
      host: {
        '(click)': 'onClick($event)',
        '(mousedown)': 'onMousedown()',
        '(focus)': 'onFocus()',
        '(blur)': 'onBlur()',
        '[tabIndex]': 'tabIndex',
        '[class.md-button-focus]': 'isKeyboardFocused',
        '[attr.aria-disabled]': 'isAriaDisabled'
      }
    }), core_1.View({
      template: BUTTON_TEMPLATE,
      encapsulation: core_1.ViewEncapsulation.None
    }), __metadata('design:paramtypes', [])], MdAnchor);
    return MdAnchor;
  }(MdButton));
  exports.MdAnchor = MdAnchor;
  return module.exports;
});

System.registerDynamic("node_modules/ng2-material/components/dialog/dialog_ref.js", ["angular2/src/facade/promise", "../../core/util/animate", "angular2/src/facade/lang"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var promise_1 = $__require('angular2/src/facade/promise');
  var animate_1 = $__require('../../core/util/animate');
  var lang_1 = $__require('angular2/src/facade/lang');
  var MdDialogRef = (function() {
    function MdDialogRef() {
      this._subscription = null;
      this._contentRef = null;
      this.containerRef = null;
      this.isClosed = false;
      this.contentRefDeferred = promise_1.PromiseWrapper.completer();
      this.whenClosedDeferred = promise_1.PromiseWrapper.completer();
    }
    Object.defineProperty(MdDialogRef.prototype, "backdropRef", {
      set: function(value) {
        var _this = this;
        this._backdropRef = value;
        if (this._backdropRef) {
          this._subscription = this._backdropRef.instance.onHiding.subscribe(function() {
            _this._subscription.unsubscribe();
            _this.close();
          });
        }
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MdDialogRef.prototype, "contentRef", {
      set: function(value) {
        this._contentRef = value;
        this.contentRefDeferred.resolve(value);
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MdDialogRef.prototype, "instance", {
      get: function() {
        if (lang_1.isPresent(this._contentRef)) {
          return this._contentRef.instance;
        }
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MdDialogRef.prototype, "whenClosed", {
      get: function() {
        return this.whenClosedDeferred.promise;
      },
      enumerable: true,
      configurable: true
    });
    MdDialogRef.prototype.close = function(result) {
      var _this = this;
      if (result === void 0) {
        result = null;
      }
      if (this.isClosed) {
        return this.whenClosedDeferred.promise;
      }
      if (this._subscription) {
        this._subscription.unsubscribe();
      }
      this.isClosed = true;
      return animate_1.Animate.leave(this.containerRef.location.nativeElement, 'md-active').then(function() {
        var otherAsync = Promise.resolve();
        if (_this._backdropRef) {
          otherAsync = _this._backdropRef.instance.hide();
        }
        return _this.contentRefDeferred.promise.then(function(_) {
          otherAsync.then(function() {
            _this.whenClosedDeferred.resolve(result);
          });
        });
      });
    };
    return MdDialogRef;
  }());
  exports.MdDialogRef = MdDialogRef;
  return module.exports;
});

System.registerDynamic("node_modules/ng2-material/components/dialog/dialog_basic.js", ["angular2/common", "../button/button", "angular2/core", "./dialog_ref"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var common_1 = $__require('angular2/common');
  var button_1 = $__require('../button/button');
  var core_1 = $__require('angular2/core');
  var core_2 = $__require('angular2/core');
  var dialog_ref_1 = $__require('./dialog_ref');
  var core_3 = $__require('angular2/core');
  var MdDialogBasic = (function() {
    function MdDialogBasic(dialog) {
      this.dialog = dialog;
      this.title = '';
      this.textContent = '';
      this.cancel = '';
      this.ok = '';
      this.type = 'alert';
    }
    __decorate([core_3.Input(), __metadata('design:type', String)], MdDialogBasic.prototype, "title", void 0);
    __decorate([core_3.Input(), __metadata('design:type', String)], MdDialogBasic.prototype, "textContent", void 0);
    __decorate([core_3.Input(), __metadata('design:type', String)], MdDialogBasic.prototype, "cancel", void 0);
    __decorate([core_3.Input(), __metadata('design:type', String)], MdDialogBasic.prototype, "ok", void 0);
    __decorate([core_3.Input(), __metadata('design:type', String)], MdDialogBasic.prototype, "type", void 0);
    MdDialogBasic = __decorate([core_2.Component({selector: 'md-dialog-basic'}), core_1.View({
      template: "\n  <h2 class=\"md-title\">{{ title }}</h2>\n  <p>{{ textContent }}</p>\n  <md-dialog-actions>\n    <button md-button *ngIf=\"cancel != ''\" type=\"button\" (click)=\"dialog.close(false)\">\n      <span>{{ cancel }}</span>\n    </button>\n    <button md-button *ngIf=\"ok != ''\" class=\"md-primary\" type=\"button\" (click)=\"dialog.close(true)\">\n      <span>{{ ok }}</span>\n    </button>\n  </md-dialog-actions>",
      directives: [button_1.MdButton, common_1.NgIf]
    }), __metadata('design:paramtypes', [dialog_ref_1.MdDialogRef])], MdDialogBasic);
    return MdDialogBasic;
  }());
  exports.MdDialogBasic = MdDialogBasic;
  return module.exports;
});

System.registerDynamic("node_modules/ng2-material/components/dialog/dialog.js", ["angular2/core", "angular2/src/facade/lang", "./dialog_ref", "./dialog_config", "./dialog_container", "../backdrop/backdrop", "angular2/src/platform/dom/dom_adapter", "../../core/util/animate", "./dialog_basic"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  function __export(m) {
    for (var p in m)
      if (!exports.hasOwnProperty(p))
        exports[p] = m[p];
  }
  var core_1 = $__require('angular2/core');
  var lang_1 = $__require('angular2/src/facade/lang');
  var dialog_ref_1 = $__require('./dialog_ref');
  var dialog_config_1 = $__require('./dialog_config');
  var dialog_container_1 = $__require('./dialog_container');
  var backdrop_1 = $__require('../backdrop/backdrop');
  var dom_adapter_1 = $__require('angular2/src/platform/dom/dom_adapter');
  var animate_1 = $__require('../../core/util/animate');
  __export($__require('./dialog_config'));
  __export($__require('./dialog_container'));
  __export($__require('./dialog_ref'));
  __export($__require('./dialog_basic'));
  var MdDialog = (function() {
    function MdDialog(componentLoader, rootRenderer) {
      this.componentLoader = componentLoader;
      this._renderer = null;
      this._defaultContainer = dom_adapter_1.DOM.query('body');
      var type = new core_1.RenderComponentType("__md-dialog-" + MdDialog._uniqueId++, core_1.ViewEncapsulation.None, []);
      this._renderer = rootRenderer.renderComponent(type);
    }
    MdDialog.prototype.open = function(type, elementRef, options) {
      var _this = this;
      if (options === void 0) {
        options = new dialog_config_1.MdDialogConfig();
      }
      var dialogRef = new dialog_ref_1.MdDialogRef();
      var bindings = core_1.Injector.resolve([core_1.APPLICATION_COMMON_PROVIDERS, core_1.provide(dialog_ref_1.MdDialogRef, {useValue: dialogRef})]);
      var backdropRefPromise = this._openBackdrop(elementRef, bindings, options);
      return this.componentLoader.loadNextToLocation(dialog_container_1.MdDialogContainer, elementRef, bindings).then(function(containerRef) {
        var dialogElement = containerRef.location.nativeElement;
        _this._renderer.setElementClass(dialogElement, 'md-dialog-absolute', !!options.container);
        dom_adapter_1.DOM.appendChild(options.container || _this._defaultContainer, dialogElement);
        if (lang_1.isPresent(options.width)) {
          _this._renderer.setElementStyle(dialogElement, 'width', options.width);
        }
        if (lang_1.isPresent(options.height)) {
          _this._renderer.setElementStyle(dialogElement, 'height', options.height);
        }
        dialogRef.containerRef = containerRef;
        return _this.componentLoader.loadNextToLocation(type, containerRef.instance.contentRef, bindings).then(function(contentRef) {
          Object.keys(options.context).forEach(function(key) {
            contentRef.instance[key] = options.context[key];
          });
          dialogRef.contentRef = contentRef;
          containerRef.instance.dialogRef = dialogRef;
          backdropRefPromise.then(function(backdropRef) {
            dialogRef.backdropRef = backdropRef;
            dialogRef.whenClosed.then(function(_) {
              backdropRef.instance.hide().then(function() {
                containerRef.dispose();
                contentRef.dispose();
                backdropRef.dispose();
              });
            });
          });
          return animate_1.Animate.enter(dialogElement, 'md-active').then(function() {
            return dialogRef;
          });
        });
      });
    };
    MdDialog.prototype._openBackdrop = function(elementRef, bindings, options) {
      var _this = this;
      return this.componentLoader.loadNextToLocation(backdrop_1.MdBackdrop, elementRef, bindings).then(function(componentRef) {
        var backdrop = componentRef.instance;
        backdrop.clickClose = options.clickClose;
        _this._renderer.setElementClass(componentRef.location.nativeElement, 'md-backdrop', true);
        _this._renderer.setElementClass(componentRef.location.nativeElement, 'md-opaque', true);
        _this._renderer.setElementClass(componentRef.location.nativeElement, 'md-backdrop-absolute', !!options.container);
        dom_adapter_1.DOM.appendChild(options.container || _this._defaultContainer, componentRef.location.nativeElement);
        return backdrop.show().then(function() {
          return componentRef;
        });
      });
    };
    MdDialog.prototype.alert = function(message, okMessage) {
      throw 'Not implemented';
    };
    MdDialog.prototype.confirm = function(message, okMessage, cancelMessage) {
      throw 'Not implemented';
    };
    MdDialog._uniqueId = 0;
    MdDialog = __decorate([core_1.Injectable(), __metadata('design:paramtypes', [core_1.DynamicComponentLoader, core_1.RootRenderer])], MdDialog);
    return MdDialog;
  }());
  exports.MdDialog = MdDialog;
  return module.exports;
});

System.registerDynamic("node_modules/ng2-material/components/divider/divider.js", ["angular2/core"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('angular2/core');
  var core_2 = $__require('angular2/core');
  var MdDivider = (function() {
    function MdDivider() {}
    MdDivider = __decorate([core_1.Component({selector: 'md-divider'}), core_1.View({
      template: '',
      encapsulation: core_2.ViewEncapsulation.None
    }), __metadata('design:paramtypes', [])], MdDivider);
    return MdDivider;
  }());
  exports.MdDivider = MdDivider;
  return module.exports;
});

System.registerDynamic("node_modules/ng2-material/components/icon/icon.js", ["angular2/core"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('angular2/core');
  var MdIcon = (function() {
    function MdIcon() {}
    MdIcon = __decorate([core_1.Directive({
      selector: '[md-icon], .md-icon',
      host: {'[class.material-icons]': 'true'}
    }), __metadata('design:paramtypes', [])], MdIcon);
    return MdIcon;
  }());
  exports.MdIcon = MdIcon;
  return module.exports;
});

System.registerDynamic("node_modules/ng2-material/components/ink/ink.js", ["angular2/core", "../../core/util/ink"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('angular2/core');
  var ink_1 = $__require('../../core/util/ink');
  var MdInk = (function() {
    function MdInk(_element) {
      this._element = _element;
      this.inked = new core_1.EventEmitter(false);
    }
    MdInk.prototype.onMousedown = function(event) {
      var _this = this;
      if (this._element && ink_1.Ink.canApply(this._element.nativeElement)) {
        ink_1.Ink.rippleEvent(this._element.nativeElement, event).then(function() {
          _this.inked.emit(_this);
        });
      }
    };
    __decorate([core_1.Output(), __metadata('design:type', core_1.EventEmitter)], MdInk.prototype, "inked", void 0);
    MdInk = __decorate([core_1.Directive({
      selector: '[md-ink]',
      host: {'(mousedown)': 'onMousedown($event)'}
    }), __metadata('design:paramtypes', [core_1.ElementRef])], MdInk);
    return MdInk;
  }());
  exports.MdInk = MdInk;
  return module.exports;
});

System.registerDynamic("node_modules/ng2-material/components/form/validators.js", ["angular2/src/facade/lang", "angular2/common", "angular2/core", "../../core/util/util"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var lang_1 = $__require('angular2/src/facade/lang');
  var common_1 = $__require('angular2/common');
  var core_1 = $__require('angular2/core');
  var util_1 = $__require('../../core/util/util');
  var lang_2 = $__require('angular2/src/facade/lang');
  var PATTERN_VALIDATOR = lang_1.CONST_EXPR(new core_1.Provider(common_1.NG_VALIDATORS, {
    useExisting: core_1.forwardRef(function() {
      return MdPatternValidator;
    }),
    multi: true
  }));
  var MdPatternValidator = (function() {
    function MdPatternValidator() {}
    MdPatternValidator.inline = function(pattern) {
      return function validate(control) {
        if (control.value === '' || new RegExp(pattern).test(control.value)) {
          return null;
        }
        return {mdPattern: true};
      };
    };
    MdPatternValidator.prototype.validate = function(control) {
      return MdPatternValidator.inline(this.mdPattern)(control);
    };
    __decorate([core_1.Input(), __metadata('design:type', String)], MdPatternValidator.prototype, "mdPattern", void 0);
    MdPatternValidator = __decorate([core_1.Directive({
      selector: '[mdPattern]',
      providers: [PATTERN_VALIDATOR]
    }), __metadata('design:paramtypes', [])], MdPatternValidator);
    return MdPatternValidator;
  }());
  exports.MdPatternValidator = MdPatternValidator;
  var MAXLENGTH_VALIDATOR = lang_1.CONST_EXPR(new core_1.Provider(common_1.NG_VALIDATORS, {
    useExisting: core_1.forwardRef(function() {
      return MdMaxLengthValidator;
    }),
    multi: true
  }));
  var MdMaxLengthValidator = (function() {
    function MdMaxLengthValidator() {}
    MdMaxLengthValidator.inline = function(length) {
      return function validate(control) {
        if (!control.value || control.value.length <= length) {
          return null;
        }
        return {mdMaxLength: true};
      };
    };
    MdMaxLengthValidator.prototype.validate = function(control) {
      return MdMaxLengthValidator.inline(this.mdMaxLength)(control);
    };
    __decorate([core_1.Input(), __metadata('design:type', String)], MdMaxLengthValidator.prototype, "mdMaxLength", void 0);
    MdMaxLengthValidator = __decorate([core_1.Directive({
      selector: '[mdMaxLength]',
      providers: [MAXLENGTH_VALIDATOR]
    }), __metadata('design:paramtypes', [])], MdMaxLengthValidator);
    return MdMaxLengthValidator;
  }());
  exports.MdMaxLengthValidator = MdMaxLengthValidator;
  var MAXVALUE_VALIDATOR = lang_1.CONST_EXPR(new core_1.Provider(common_1.NG_VALIDATORS, {
    useExisting: core_1.forwardRef(function() {
      return MdMaxValueValidator;
    }),
    multi: true
  }));
  var MdMaxValueValidator = (function() {
    function MdMaxValueValidator() {}
    MdMaxValueValidator.inline = function(length) {
      return function validate(control) {
        if (lang_2.NumberWrapper.isNaN(control.value) || control.value <= length) {
          return null;
        }
        return {mdMax: true};
      };
    };
    MdMaxValueValidator.prototype.validate = function(control) {
      return MdMaxValueValidator.inline(this.mdMax)(control);
    };
    __decorate([core_1.Input(), __metadata('design:type', String)], MdMaxValueValidator.prototype, "mdMax", void 0);
    MdMaxValueValidator = __decorate([core_1.Directive({
      selector: '[mdMax]',
      providers: [MAXVALUE_VALIDATOR]
    }), __metadata('design:paramtypes', [])], MdMaxValueValidator);
    return MdMaxValueValidator;
  }());
  exports.MdMaxValueValidator = MdMaxValueValidator;
  var MINVALUE_VALIDATOR = lang_1.CONST_EXPR(new core_1.Provider(common_1.NG_VALIDATORS, {
    useExisting: core_1.forwardRef(function() {
      return MdMinValueValidator;
    }),
    multi: true
  }));
  var MdMinValueValidator = (function() {
    function MdMinValueValidator() {}
    MdMinValueValidator.inline = function(length) {
      return function validate(control) {
        if (lang_2.NumberWrapper.isNaN(control.value) || control.value >= length) {
          return null;
        }
        return {mdMin: true};
      };
    };
    MdMinValueValidator.prototype.validate = function(control) {
      return MdMinValueValidator.inline(this.mdMin)(control);
    };
    __decorate([core_1.Input(), __metadata('design:type', String)], MdMinValueValidator.prototype, "mdMin", void 0);
    MdMinValueValidator = __decorate([core_1.Directive({
      selector: '[mdMin]',
      providers: [MINVALUE_VALIDATOR]
    }), __metadata('design:paramtypes', [])], MdMinValueValidator);
    return MdMinValueValidator;
  }());
  exports.MdMinValueValidator = MdMinValueValidator;
  var NUMBER_REQUIRED_VALIDATOR = lang_1.CONST_EXPR(new core_1.Provider(common_1.NG_VALIDATORS, {
    useExisting: core_1.forwardRef(function() {
      return MdNumberRequiredValidator;
    }),
    multi: true
  }));
  var MdNumberRequiredValidator = (function() {
    function MdNumberRequiredValidator() {}
    MdNumberRequiredValidator.inline = function() {
      return function validate(control) {
        var isNum = !lang_2.NumberWrapper.isNaN(control.value) && util_1.isNumber(control.value);
        return isNum ? null : {mdNumberRequired: true};
      };
    };
    MdNumberRequiredValidator.prototype.validate = function(control) {
      return MdNumberRequiredValidator.inline()(control);
    };
    MdNumberRequiredValidator = __decorate([core_1.Directive({
      selector: '[mdNumberRequired]',
      providers: [NUMBER_REQUIRED_VALIDATOR]
    }), __metadata('design:paramtypes', [])], MdNumberRequiredValidator);
    return MdNumberRequiredValidator;
  }());
  exports.MdNumberRequiredValidator = MdNumberRequiredValidator;
  exports.INPUT_VALIDATORS = [MdMaxLengthValidator, MdPatternValidator, MdMaxValueValidator, MdMinValueValidator, MdNumberRequiredValidator];
  return module.exports;
});

System.registerDynamic("node_modules/ng2-material/components/form/messages.js", ["angular2/core", "angular2/common", "angular2/src/facade/lang"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var __param = (this && this.__param) || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  var core_1 = $__require('angular2/core');
  var common_1 = $__require('angular2/common');
  var lang_1 = $__require('angular2/src/facade/lang');
  var MdMessage = (function() {
    function MdMessage() {
      this.okay = true;
    }
    __decorate([core_1.Input('md-message'), __metadata('design:type', String)], MdMessage.prototype, "errorKey", void 0);
    MdMessage = __decorate([core_1.Directive({
      selector: '[md-message]',
      host: {'[style.display]': 'okay ? "none" : "inherit"'}
    }), __metadata('design:paramtypes', [])], MdMessage);
    return MdMessage;
  }());
  exports.MdMessage = MdMessage;
  var MdMessages = (function() {
    function MdMessages(messages, form) {
      this.messages = messages;
      this.form = form;
      this._unsubscribe = null;
    }
    Object.defineProperty(MdMessages.prototype, "valid", {
      get: function() {
        if (this.property instanceof common_1.NgControlName) {
          var ctrl_1 = this.property;
          return !!ctrl_1.valid;
        }
        var prop = this.property;
        var group = this.form.control;
        var ctrl = group.controls[prop];
        return ctrl && ctrl.valid;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MdMessages.prototype, "isTouched", {
      get: function() {
        if (this.property instanceof common_1.NgControlName) {
          return this.property.touched;
        }
        var prop = this.property;
        var group = this.form.control;
        var ctrl = group.controls[prop];
        return ctrl && ctrl.touched;
      },
      enumerable: true,
      configurable: true
    });
    MdMessages.prototype.ngOnInit = function() {
      if (this.property instanceof common_1.NgControlName) {
        var ctrl = this.property;
        this.form = ctrl.formDirective;
        this._unsubscribe = ctrl.update.subscribe(this._valueChanged.bind(this));
      } else {
        if (!this.form) {
          throw new Error('md-messages cannot bind to text property without a parent NgFormModel');
        }
        var prop = this.property;
        var group = this.form.control;
        if (!group) {
          throw new Error('md-messages cannot bind to text property without a ControlGroup');
        }
        var ctrl = group.controls[prop];
        if (!ctrl) {
          throw new Error("md-messages cannot find property(" + prop + ") in ControlGroup!");
        }
        this._unsubscribe = ctrl.valueChanges.subscribe(this._valueChanged.bind(this));
      }
    };
    MdMessages.prototype.ngOnDestroy = function() {
      this._unsubscribe.unsubscribe();
    };
    MdMessages.prototype._valueChanged = function() {
      var errors = null;
      if (this.property instanceof common_1.NgControlName) {
        var ctrl = this.property;
        errors = ctrl.errors;
      } else {
        var prop = this.property;
        var group = this.form.control;
        var ctrl = group.controls[prop];
        errors = ctrl.errors;
      }
      if (errors) {
        this.messages.toArray().forEach(function(m) {
          m.okay = !m.errorKey ? !errors : !lang_1.isPresent(errors[m.errorKey]);
        });
      }
    };
    __decorate([core_1.Input('md-messages'), __metadata('design:type', Object)], MdMessages.prototype, "property", void 0);
    MdMessages = __decorate([core_1.Directive({
      selector: '[md-messages]',
      host: {
        'md-messages': '',
        '[style.display]': '(valid || !isTouched) ? "none" : "inherit"',
        '[class.md-valid]': 'valid && isTouched',
        '[class.md-invalid]': '!valid && isTouched'
      }
    }), __param(0, core_1.Query(MdMessage)), __param(1, core_1.Optional()), __param(1, core_1.SkipSelf()), __param(1, core_1.Host()), __metadata('design:paramtypes', [core_1.QueryList, common_1.NgFormModel])], MdMessages);
    return MdMessages;
  }());
  exports.MdMessages = MdMessages;
  return module.exports;
});

System.registerDynamic("node_modules/ng2-material/components/input/input.js", ["angular2/core", "angular2/common", "angular2/src/facade/async", "angular2/src/facade/lang", "angular2/src/platform/dom/dom_adapter"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('angular2/core');
  var common_1 = $__require('angular2/common');
  var async_1 = $__require('angular2/src/facade/async');
  var lang_1 = $__require('angular2/src/facade/lang');
  var dom_adapter_1 = $__require('angular2/src/platform/dom/dom_adapter');
  var MdInput = (function() {
    function MdInput() {
      this.mdChange = new async_1.EventEmitter();
      this.mdFocusChange = new async_1.EventEmitter(false);
    }
    Object.defineProperty(MdInput.prototype, "value", {
      get: function() {
        return !lang_1.isBlank(this._value) ? this._value : '';
      },
      set: function(value) {
        this._value = value;
        async_1.ObservableWrapper.callEmit(this.mdChange, this.value);
      },
      enumerable: true,
      configurable: true
    });
    MdInput.prototype.setHasFocus = function(hasFocus) {
      async_1.ObservableWrapper.callEmit(this.mdFocusChange, hasFocus);
    };
    __decorate([core_1.Input('value'), __metadata('design:type', String), __metadata('design:paramtypes', [String])], MdInput.prototype, "value", null);
    __decorate([core_1.Input(), __metadata('design:type', String)], MdInput.prototype, "placeholder", void 0);
    __decorate([core_1.Output('valueChange'), __metadata('design:type', async_1.EventEmitter)], MdInput.prototype, "mdChange", void 0);
    __decorate([core_1.Output(), __metadata('design:type', async_1.EventEmitter)], MdInput.prototype, "mdFocusChange", void 0);
    MdInput = __decorate([core_1.Directive({
      selector: 'input[md-input],input.md-input,textarea[md-input],textarea.md-input',
      host: {
        'class': 'md-input',
        '[value]': 'value',
        '(input)': 'value=$event.target.value',
        '(focus)': 'setHasFocus(true)',
        '(blur)': 'setHasFocus(false)'
      },
      providers: [common_1.FORM_PROVIDERS]
    }), __metadata('design:paramtypes', [])], MdInput);
    return MdInput;
  }());
  exports.MdInput = MdInput;
  var MdInputContainer = (function() {
    function MdInputContainer(_element) {
      this._element = _element;
      this._input = null;
      this.inputHasValue = false;
      this.inputHasFocus = false;
      this.inputHasPlaceholder = false;
    }
    MdInputContainer.prototype.ngOnChanges = function(_) {
      this.inputHasValue = this._input.value !== '';
      this.inputHasPlaceholder = !!dom_adapter_1.DOM.querySelector(this._element.nativeElement, 'label') && !!this._input.placeholder;
    };
    MdInputContainer.prototype.ngAfterContentInit = function() {
      var _this = this;
      if (this._input === null) {
        return;
      }
      async_1.TimerWrapper.setTimeout(function() {
        return _this.ngOnChanges({});
      }, 0);
      async_1.ObservableWrapper.subscribe(this._input.mdChange, function(value) {
        _this.inputHasValue = value !== '';
      });
      async_1.ObservableWrapper.subscribe(this._input.mdFocusChange, function(hasFocus) {
        _this.inputHasFocus = hasFocus;
      });
    };
    __decorate([core_1.ContentChild(MdInput), __metadata('design:type', MdInput)], MdInputContainer.prototype, "_input", void 0);
    MdInputContainer = __decorate([core_1.Component({
      selector: 'md-input-container',
      host: {
        '[class.md-input-has-value]': 'inputHasValue',
        '[class.md-input-has-placeholder]': 'inputHasPlaceholder',
        '[class.md-input-focused]': 'inputHasFocus'
      }
    }), core_1.View({template: "<ng-content></ng-content><div class=\"md-errors-spacer\"></div>"}), __metadata('design:paramtypes', [core_1.ElementRef])], MdInputContainer);
    return MdInputContainer;
  }());
  exports.MdInputContainer = MdInputContainer;
  return module.exports;
});

System.registerDynamic("node_modules/ng2-material/components/list/list.js", ["angular2/core", "angular2/src/platform/dom/dom_adapter"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('angular2/core');
  var dom_adapter_1 = $__require('angular2/src/platform/dom/dom_adapter');
  var core_2 = $__require('angular2/core');
  var core_3 = $__require('angular2/core');
  var core_4 = $__require('angular2/core');
  var MdList = (function() {
    function MdList() {}
    MdList = __decorate([core_1.Directive({
      selector: 'md-list',
      host: {'role': 'list'}
    }), __metadata('design:paramtypes', [])], MdList);
    return MdList;
  }());
  exports.MdList = MdList;
  var MdListItem = (function() {
    function MdListItem(_element) {
      this._element = _element;
    }
    MdListItem.prototype.ngAfterViewInit = function() {
      this.setupToggleAria();
    };
    MdListItem.prototype.setupToggleAria = function() {
      var toggleTypes = ['md-switch', 'md-checkbox'];
      var toggle;
      var el = this._element.nativeElement;
      for (var i = 0,
          toggleType; toggleType = toggleTypes[i]; ++i) {
        if (toggle = dom_adapter_1.DOM.querySelector(el, toggleType)) {
          if (!toggle.hasAttribute('aria-label')) {
            var p = dom_adapter_1.DOM.querySelector(el, 'p');
            if (!p)
              return;
            toggle.setAttribute('aria-label', 'Toggle ' + p.textContent);
          }
        }
      }
    };
    MdListItem = __decorate([core_3.Component({
      selector: 'md-list-item',
      host: {'role': 'listitem'},
      properties: ['wrap']
    }), core_4.View({template: "\n    <div class=\"md-no-style md-list-item-inner\">\n      <ng-content></ng-content>\n    </div>"}), __metadata('design:paramtypes', [core_2.ElementRef])], MdListItem);
    return MdListItem;
  }());
  exports.MdListItem = MdListItem;
  return module.exports;
});

System.registerDynamic("node_modules/ng2-material/components/progress_linear/progress_linear.js", ["angular2/core", "angular2/src/facade/lang", "angular2/src/facade/math"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('angular2/core');
  var lang_1 = $__require('angular2/src/facade/lang');
  var lang_2 = $__require('angular2/src/facade/lang');
  var math_1 = $__require('angular2/src/facade/math');
  var core_2 = $__require('angular2/core');
  var ProgressMode = (function() {
    function ProgressMode() {}
    ProgressMode.DETERMINATE = 'determinate';
    ProgressMode.INDETERMINATE = 'indeterminate';
    ProgressMode.BUFFER = 'buffer';
    ProgressMode.QUERY = 'query';
    __decorate([lang_1.CONST(), __metadata('design:type', Object)], ProgressMode, "DETERMINATE", void 0);
    __decorate([lang_1.CONST(), __metadata('design:type', Object)], ProgressMode, "INDETERMINATE", void 0);
    __decorate([lang_1.CONST(), __metadata('design:type', Object)], ProgressMode, "BUFFER", void 0);
    __decorate([lang_1.CONST(), __metadata('design:type', Object)], ProgressMode, "QUERY", void 0);
    ProgressMode = __decorate([lang_1.CONST(), __metadata('design:paramtypes', [])], ProgressMode);
    return ProgressMode;
  }());
  exports.ProgressMode = ProgressMode;
  var MdProgressLinear = (function() {
    function MdProgressLinear() {
      this.mode = ProgressMode.DETERMINATE;
      this.primaryBarTransform = '';
      this.secondaryBarTransform = '';
    }
    MdProgressLinear.clamp = function(v) {
      return math_1.Math.max(0, math_1.Math.min(100, v));
    };
    Object.defineProperty(MdProgressLinear.prototype, "value", {
      get: function() {
        return this.value_;
      },
      set: function(v) {
        if (lang_2.isPresent(v)) {
          this.value_ = MdProgressLinear.clamp(v);
        }
      },
      enumerable: true,
      configurable: true
    });
    MdProgressLinear.prototype.ngOnChanges = function(_) {
      if (this.mode === ProgressMode.QUERY || this.mode === ProgressMode.INDETERMINATE) {
        return;
      }
      if (!lang_2.isBlank(this.value)) {
        this.primaryBarTransform = this.transformForValue(this.value);
      }
      if (this.mode === ProgressMode.BUFFER && !lang_2.isBlank(this.bufferValue)) {
        this.secondaryBarTransform = this.transformForValue(this.bufferValue);
      }
    };
    MdProgressLinear.prototype.transformForValue = function(value) {
      var scale = value / 100;
      var translateX = (value - 100) / 2;
      return "translateX(" + translateX + "%) scale(" + scale + ", 1)";
    };
    __decorate([core_2.Input('value'), __metadata('design:type', Number)], MdProgressLinear.prototype, "value_", void 0);
    __decorate([core_2.Input(), __metadata('design:type', Number)], MdProgressLinear.prototype, "bufferValue", void 0);
    __decorate([core_2.Input(), __metadata('design:type', String)], MdProgressLinear.prototype, "mode", void 0);
    MdProgressLinear = __decorate([core_1.Component({
      selector: 'md-progress-linear',
      inputs: ['value', 'bufferValue', 'mode'],
      host: {
        'role': 'progressbar',
        'aria-valuemin': '0',
        'aria-valuemax': '100',
        '[attr.aria-valuenow]': 'value',
        '[attr.mode]': 'mode'
      }
    }), core_1.View({
      template: "\n    <div class=\"md-progress-linear-container md-ready\">\n      <div class=\"md-progress-linear-dashed\"></div>\n      <div class=\"md-progress-linear-bar md-progress-linear-bar1\"\n          [style.-webkit-transform]=\"secondaryBarTransform\"\n          [style.transform]=\"secondaryBarTransform\"></div>\n      <div class=\"md-progress-linear-bar md-progress-linear-bar2\"\n          [style.-webkit-transform]=\"primaryBarTransform\"\n          [style.transform]=\"primaryBarTransform\"></div>\n    </div>",
      directives: [],
      encapsulation: core_1.ViewEncapsulation.None
    }), __metadata('design:paramtypes', [])], MdProgressLinear);
    return MdProgressLinear;
  }());
  exports.MdProgressLinear = MdProgressLinear;
  return module.exports;
});

System.registerDynamic("node_modules/ng2-material/components/progress_circular/progress_circular.js", ["angular2/core", "angular2/src/facade/lang", "../progress_linear/progress_linear", "angular2/src/facade/math"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('angular2/core');
  var lang_1 = $__require('angular2/src/facade/lang');
  var progress_linear_1 = $__require('../progress_linear/progress_linear');
  var math_1 = $__require('angular2/src/facade/math');
  var ProgressMode = (function() {
    function ProgressMode() {}
    ProgressMode.DETERMINATE = 'determinate';
    ProgressMode.INDETERMINATE = 'indeterminate';
    __decorate([lang_1.CONST(), __metadata('design:type', Object)], ProgressMode, "DETERMINATE", void 0);
    __decorate([lang_1.CONST(), __metadata('design:type', Object)], ProgressMode, "INDETERMINATE", void 0);
    ProgressMode = __decorate([lang_1.CONST(), __metadata('design:paramtypes', [])], ProgressMode);
    return ProgressMode;
  }());
  var Defaults = (function() {
    function Defaults() {}
    Defaults.DEFAULT_PROGRESS_SIZE = 100;
    Defaults.DEFAULT_SCALING = 0.5;
    Defaults.DEFAULT_HALF_TRANSITION = 'transform 0.1s linear';
    __decorate([lang_1.CONST(), __metadata('design:type', Object)], Defaults, "DEFAULT_PROGRESS_SIZE", void 0);
    __decorate([lang_1.CONST(), __metadata('design:type', Object)], Defaults, "DEFAULT_SCALING", void 0);
    __decorate([lang_1.CONST(), __metadata('design:type', Object)], Defaults, "DEFAULT_HALF_TRANSITION", void 0);
    Defaults = __decorate([lang_1.CONST(), __metadata('design:paramtypes', [])], Defaults);
    return Defaults;
  }());
  var MdProgressCircular = (function(_super) {
    __extends(MdProgressCircular, _super);
    function MdProgressCircular() {
      _super.apply(this, arguments);
      this.defaultHalfTransition = Defaults.DEFAULT_HALF_TRANSITION;
    }
    Object.defineProperty(MdProgressCircular.prototype, "diameter", {
      get: function() {
        return this.diameter_;
      },
      set: function(v) {
        if (lang_1.isPresent(v)) {
          this.diameter_ = v;
        }
      },
      enumerable: true,
      configurable: true
    });
    MdProgressCircular.prototype.ngOnInit = function() {
      this.updateScale();
    };
    MdProgressCircular.prototype.ngOnChanges = function(_) {
      if (this.mode === ProgressMode.INDETERMINATE || lang_1.isBlank(this.value)) {
        return;
      }
      this.gapTransition = (this.value <= 50) ? '' : 'borderBottomColor 0.1s linear';
      this.transformLeftHalf(this.value);
      this.transformRightHalf(this.value);
    };
    MdProgressCircular.prototype.transformLeftHalf = function(value) {
      var rotation = (value <= 50) ? 135 : (((value - 50) / 50 * 180) + 135);
      this.leftHalfTransform = "rotate(" + rotation + "deg)";
    };
    MdProgressCircular.prototype.transformRightHalf = function(value) {
      var rotation = (value >= 50) ? 45 : (value / 50 * 180 - 135);
      this.rightHalfTransform = "rotate(" + rotation + "deg)";
    };
    MdProgressCircular.prototype.updateScale = function() {
      this.outerSize = 100 * this.getDiameterRatio() + 'px';
      this.diameterTransformation = "translate(-50%, -50%) scale( " + this.getDiameterRatio() + " )";
    };
    MdProgressCircular.prototype.getDiameterRatio = function() {
      if (!this.diameter)
        return Defaults.DEFAULT_SCALING;
      var match = /([0-9]*)%/.exec(this.diameter);
      var value = math_1.Math.max(0, (match && match[1] / 100) || parseFloat(this.diameter));
      return (value > 1) ? value / Defaults.DEFAULT_PROGRESS_SIZE : value;
    };
    MdProgressCircular.prototype.webkit = function(style) {
      return "-webkit-" + style;
    };
    __decorate([core_1.Input('diameter'), __metadata('design:type', String)], MdProgressCircular.prototype, "diameter_", void 0);
    __decorate([core_1.Input(), __metadata('design:type', String)], MdProgressCircular.prototype, "mode", void 0);
    MdProgressCircular = __decorate([core_1.Component({
      selector: 'md-progress-circular',
      inputs: ['value', 'diameter'],
      host: {
        'role': 'progressbar',
        'aria-valuemin': '0',
        'aria-valuemax': '100',
        '[attr.aria-valuenow]': 'value',
        '[style.width]': 'outerSize',
        '[style.height]': 'outerSize'
      }
    }), core_1.View({
      template: "\n    <div class=\"md-scale-wrapper\"\n     [style.-webkit-transform]=\"diameterTransformation\"\n     [style.transform]=\"diameterTransformation\">\n      <div class=\"md-spinner-wrapper\">\n        <div class=\"md-inner\">\n          <div class=\"md-gap\"\n          [style.-webkit-transition]=\"gapTransition\"\n          [style.transition]=\"gapTransition\"></div>\n          <div class=\"md-left\">\n            <div class=\"md-half-circle\"\n              [style.-webkit-transform]=\"leftHalfTransform\"\n              [style.transform]=\"leftHalfTransform\"\n              [style.-webkit-transition]=\"defaultHalfTransition\"\n              [style.transition]=\"defaultHalfTransition\"></div>\n          </div>\n          <div class=\"md-right\">\n            <div class=\"md-half-circle\"\n              [style.-webkit-transform]=\"rightHalfTransform\"\n              [style.transform]=\"rightHalfTransform\"\n              [style.-webkit-transition]=\"defaultHalfTransition\"\n              [style.transition]=\"defaultHalfTransition\"></div>\n          </div>\n        </div>\n      </div>\n    </div>",
      directives: [],
      encapsulation: core_1.ViewEncapsulation.None
    }), __metadata('design:paramtypes', [])], MdProgressCircular);
    return MdProgressCircular;
  }(progress_linear_1.MdProgressLinear));
  exports.MdProgressCircular = MdProgressCircular;
  return module.exports;
});

System.registerDynamic("node_modules/ng2-material/components/peekaboo/peekaboo.js", ["angular2/core", "../../core/util/media", "angular2/src/facade/lang"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('angular2/core');
  var media_1 = $__require('../../core/util/media');
  var core_2 = $__require('angular2/core');
  var lang_1 = $__require('angular2/src/facade/lang');
  var lang_2 = $__require('angular2/src/facade/lang');
  var lang_3 = $__require('angular2/src/facade/lang');
  var PeekabooAction = (function() {
    function PeekabooAction() {}
    PeekabooAction.SHOW = 'show';
    PeekabooAction.HIDE = 'hide';
    __decorate([lang_1.CONST(), __metadata('design:type', Object)], PeekabooAction, "SHOW", void 0);
    __decorate([lang_1.CONST(), __metadata('design:type', Object)], PeekabooAction, "HIDE", void 0);
    PeekabooAction = __decorate([lang_1.CONST(), __metadata('design:paramtypes', [])], PeekabooAction);
    return PeekabooAction;
  }());
  exports.PeekabooAction = PeekabooAction;
  var MdPeekaboo = (function() {
    function MdPeekaboo(media) {
      var _this = this;
      this.media = media;
      this.break = 100;
      this._active = false;
      this._breakXs = -1;
      this._breakSm = -1;
      this._breakMd = -1;
      this._breakLg = -1;
      this._breakXl = -1;
      this._breakpoint = null;
      this._mediaListeners = [];
      this._windowScroll = this.evaluate.bind(this);
      window.addEventListener('scroll', this._windowScroll);
      MdPeekaboo.SIZES.forEach(function(size) {
        _this._watchMediaQuery(size);
        if (media_1.Media.hasMedia(size)) {
          _this._breakpoint = size;
        }
      });
      this.evaluate();
    }
    MdPeekaboo.MakeNumber = function(value) {
      return lang_3.isString(value) ? lang_2.NumberWrapper.parseInt(value, 10) : value;
    };
    Object.defineProperty(MdPeekaboo.prototype, "active", {
      get: function() {
        return this._active;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MdPeekaboo.prototype, "scrollTop", {
      get: function() {
        return window.pageYOffset || document.documentElement.scrollTop;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MdPeekaboo.prototype, "breakXs", {
      get: function() {
        return this._breakXs;
      },
      set: function(value) {
        this._breakXs = MdPeekaboo.MakeNumber(value);
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MdPeekaboo.prototype, "breakSm", {
      get: function() {
        return this._breakSm;
      },
      set: function(value) {
        this._breakSm = MdPeekaboo.MakeNumber(value);
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MdPeekaboo.prototype, "breakMd", {
      get: function() {
        return this._breakMd;
      },
      set: function(value) {
        this._breakMd = MdPeekaboo.MakeNumber(value);
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MdPeekaboo.prototype, "breakLg", {
      get: function() {
        return this._breakLg;
      },
      set: function(value) {
        this._breakLg = MdPeekaboo.MakeNumber(value);
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MdPeekaboo.prototype, "breakXl", {
      get: function() {
        return this._breakXl;
      },
      set: function(value) {
        this._breakXl = MdPeekaboo.MakeNumber(value);
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MdPeekaboo.prototype, "breakpoint", {
      get: function() {
        return this._breakpoint;
      },
      set: function(size) {
        this._breakpoint = size;
        this.evaluate();
      },
      enumerable: true,
      configurable: true
    });
    MdPeekaboo.prototype.ngOnDestroy = function() {
      this._mediaListeners.forEach(function(l) {
        l.destroy();
      });
      this._mediaListeners = [];
      window.removeEventListener('scroll', this._windowScroll);
    };
    MdPeekaboo.prototype._watchMediaQuery = function(size) {
      var _this = this;
      var l = this.media.listen(media_1.Media.getQuery(size));
      l.onMatched.subscribe(function(mql) {
        _this.breakpoint = size;
      });
      this._mediaListeners.push(l);
    };
    MdPeekaboo.prototype.evaluate = function() {
      var top = this.scrollTop;
      var bp = this.break;
      switch (this._breakpoint) {
        case 'xl':
          if (this._breakXl !== -1) {
            bp = this._breakXl;
            break;
          }
        case 'lg':
          if (this._breakLg !== -1) {
            bp = this._breakLg;
            break;
          }
        case 'md':
          if (this._breakMd !== -1) {
            bp = this._breakMd;
            break;
          }
        case 'sm':
          if (this._breakSm !== -1) {
            bp = this._breakSm;
            break;
          }
        case 'xs':
          if (this._breakXs !== -1) {
            bp = this._breakXs;
            break;
          }
      }
      if (top >= bp && !this._active) {
        this._active = true;
      } else if (top < bp && this._active) {
        this._active = false;
      }
      return bp;
    };
    MdPeekaboo.SIZES = ['xs', 'sm', 'md', 'lg', 'xl'];
    __decorate([core_2.Input(), __metadata('design:type', Number)], MdPeekaboo.prototype, "break", void 0);
    __decorate([core_2.Input(), __metadata('design:type', String)], MdPeekaboo.prototype, "breakAction", void 0);
    __decorate([core_2.Input(), __metadata('design:type', Number), __metadata('design:paramtypes', [Number])], MdPeekaboo.prototype, "breakXs", null);
    __decorate([core_2.Input(), __metadata('design:type', Number), __metadata('design:paramtypes', [Number])], MdPeekaboo.prototype, "breakSm", null);
    __decorate([core_2.Input(), __metadata('design:type', Number), __metadata('design:paramtypes', [Number])], MdPeekaboo.prototype, "breakMd", null);
    __decorate([core_2.Input(), __metadata('design:type', Number), __metadata('design:paramtypes', [Number])], MdPeekaboo.prototype, "breakLg", null);
    __decorate([core_2.Input(), __metadata('design:type', Number), __metadata('design:paramtypes', [Number])], MdPeekaboo.prototype, "breakXl", null);
    MdPeekaboo = __decorate([core_1.Directive({
      selector: '[md-peekaboo]',
      inputs: ['break', 'breakXs', 'breakSm', 'breakMd', 'breakLg', 'breakXl'],
      host: {
        '[class.md-peekaboo-active]': 'active',
        '[attr.breakAction]': 'breakAction'
      }
    }), __metadata('design:paramtypes', [media_1.Media])], MdPeekaboo);
    return MdPeekaboo;
  }());
  exports.MdPeekaboo = MdPeekaboo;
  return module.exports;
});

System.registerDynamic("node_modules/ng2-material/components/radio/radio_button.js", ["angular2/core", "angular2/src/facade/lang", "angular2/src/facade/async", "./radio_dispatcher", "../../core/key_codes", "../../core/util/util"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var __param = (this && this.__param) || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  var core_1 = $__require('angular2/core');
  var lang_1 = $__require('angular2/src/facade/lang');
  var async_1 = $__require('angular2/src/facade/async');
  var radio_dispatcher_1 = $__require('./radio_dispatcher');
  var key_codes_1 = $__require('../../core/key_codes');
  var core_2 = $__require('angular2/core');
  var util_1 = $__require('../../core/util/util');
  var _uniqueIdCounter = 0;
  var MdRadioGroup = (function() {
    function MdRadioGroup(tabindex, disabled, radioDispatcher) {
      this.change = new async_1.EventEmitter(false);
      this.name_ = "md-radio-group-" + _uniqueIdCounter++;
      this.radios_ = [];
      this.disabled_ = false;
      this.selectedRadioId = '';
      this.radioDispatcher = radioDispatcher;
      this.disabled = lang_1.isPresent(disabled);
      this.tabindex = util_1.parseTabIndexAttribute(tabindex);
    }
    Object.defineProperty(MdRadioGroup.prototype, "value", {
      get: function() {
        return this.value_;
      },
      set: function(value) {
        this.value_ = value;
        this._setChildValue(value);
      },
      enumerable: true,
      configurable: true
    });
    MdRadioGroup.prototype.getName = function() {
      return this.name_;
    };
    Object.defineProperty(MdRadioGroup.prototype, "disabled", {
      get: function() {
        return this.disabled_;
      },
      set: function(value) {
        this.disabled_ = lang_1.isPresent(value) && value !== false;
      },
      enumerable: true,
      configurable: true
    });
    MdRadioGroup.prototype.ngOnChanges = function(_) {
      this.disabled = lang_1.isPresent(this.disabled) && this.disabled !== false;
      if (lang_1.isPresent(this.value) && this.value !== '') {
        this.radioDispatcher.notify(this.name_);
        this._setChildValue(this.value);
      }
    };
    MdRadioGroup.prototype._setChildValue = function(value) {
      var button = this.getChildByValue(value);
      if (button) {
        this.selectedRadioId = button.id;
        this.activedescendant = button.id;
        button.checked = true;
      }
    };
    MdRadioGroup.prototype.updateValue = function(value, id) {
      this.value = value;
      this.selectedRadioId = id;
      this.activedescendant = id;
      async_1.ObservableWrapper.callEmit(this.change, value);
    };
    MdRadioGroup.prototype.register = function(radio) {
      this.radios_.push(radio);
    };
    MdRadioGroup.prototype.unregister = function(radio) {
      this.radios_ = this.radios_.filter(function(r) {
        return r.id !== radio.id;
      });
    };
    MdRadioGroup.prototype.onKeydown = function(event) {
      if (this.disabled) {
        return;
      }
      switch (event.keyCode) {
        case key_codes_1.KeyCodes.UP:
          this.stepSelectedRadio(-1);
          event.preventDefault();
          break;
        case key_codes_1.KeyCodes.DOWN:
          this.stepSelectedRadio(1);
          event.preventDefault();
          break;
      }
    };
    MdRadioGroup.prototype.getSelectedRadioIndex = function() {
      for (var i = 0; i < this.radios_.length; i++) {
        if (this.radios_[i].id === this.selectedRadioId) {
          return i;
        }
      }
      return -1;
    };
    MdRadioGroup.prototype.getChildByValue = function(value) {
      for (var i = 0; i < this.radios_.length; i++) {
        if (this.radios_[i].value === value) {
          return this.radios_[i];
        }
      }
      return null;
    };
    MdRadioGroup.prototype.stepSelectedRadio = function(step) {
      var index = this.getSelectedRadioIndex() + step;
      if (index < 0 || index >= this.radios_.length) {
        return;
      }
      var radio = this.radios_[index];
      if (radio.disabled) {
        this.stepSelectedRadio(step + (step < 0 ? -1 : 1));
        return;
      }
      this.updateValue(radio.value, radio.id);
      radio.checked = true;
    };
    __decorate([core_2.Output('valueChange'), __metadata('design:type', async_1.EventEmitter)], MdRadioGroup.prototype, "change", void 0);
    __decorate([core_2.Input('value'), __metadata('design:type', Object)], MdRadioGroup.prototype, "value_", void 0);
    MdRadioGroup = __decorate([core_1.Component({
      selector: 'md-radio-group',
      inputs: ['disabled', 'value'],
      host: {
        'role': 'radiogroup',
        '[attr.aria-disabled]': 'disabled',
        '[attr.aria-activedescendant]': 'activedescendant',
        '(keydown)': 'onKeydown($event)',
        '[tabindex]': 'tabindex'
      }
    }), core_1.View({
      template: "<ng-content></ng-content>",
      encapsulation: core_1.ViewEncapsulation.None
    }), __param(0, core_1.Attribute('tabindex')), __param(1, core_1.Attribute('disabled')), __metadata('design:paramtypes', [String, String, radio_dispatcher_1.MdRadioDispatcher])], MdRadioGroup);
    return MdRadioGroup;
  }());
  exports.MdRadioGroup = MdRadioGroup;
  var MdRadioButton = (function() {
    function MdRadioButton(radioGroup, id, value, checked, tabindex, radioDispatcher) {
      var _this = this;
      this.radioGroup = radioGroup;
      this.radioDispatcher = radioDispatcher;
      this.value = value ? value : null;
      this.checked = lang_1.isPresent(checked) ? true : false;
      this.id = lang_1.isPresent(id) ? id : "md-radio-" + _uniqueIdCounter++;
      radioDispatcher.listen(function(name) {
        if (name === _this.name) {
          _this.checked = false;
        }
      });
      if (lang_1.isPresent(radioGroup)) {
        this.name = radioGroup.getName();
        this.radioGroup.register(this);
        if (this.checked) {
          this.radioGroup.updateValue(this.value, this.id);
        }
      }
      if (!lang_1.isPresent(radioGroup)) {
        this.tabindex = util_1.parseTabIndexAttribute(tabindex);
      } else {
        this.tabindex = -1;
      }
    }
    MdRadioButton.prototype.ngOnInit = function() {
      if (lang_1.isPresent(this.radioGroup)) {
        this.name = this.radioGroup.getName();
      }
    };
    MdRadioButton.prototype.ngOnDestroy = function() {
      if (lang_1.isPresent(this.radioGroup)) {
        this.radioGroup.unregister(this);
      }
    };
    MdRadioButton.prototype.isDisabled = function() {
      return this.disabled || (lang_1.isPresent(this.disabled) && lang_1.StringWrapper.equals(this.disabled, '')) || (lang_1.isPresent(this.radioGroup) && this.radioGroup.disabled);
    };
    Object.defineProperty(MdRadioButton.prototype, "disabled", {
      get: function() {
        return this.disabled_ || (this.radioGroup && this.radioGroup.disabled);
      },
      set: function(value) {
        this.disabled_ = lang_1.isPresent(value) && value !== false;
      },
      enumerable: true,
      configurable: true
    });
    MdRadioButton.prototype.select = function(event) {
      if (this.isDisabled()) {
        event.stopPropagation();
        return;
      }
      this.radioDispatcher.notify(this.name);
      this.checked = true;
      if (lang_1.isPresent(this.radioGroup)) {
        this.radioGroup.updateValue(this.value, this.id);
      }
    };
    MdRadioButton.prototype.onKeydown = function(event) {
      if (event.keyCode === key_codes_1.KeyCodes.SPACE) {
        event.preventDefault();
        this.select(event);
      }
    };
    MdRadioButton = __decorate([core_1.Component({
      selector: 'md-radio-button',
      inputs: ['id', 'name', 'value', 'checked', 'disabled'],
      host: {
        'role': 'radio',
        '[id]': 'id',
        '[tabindex]': 'tabindex',
        '[attr.aria-checked]': 'checked',
        '[attr.disabled]': 'disabled ? "" : undefined',
        '[attr.aria-disabled]': 'disabled',
        '(keydown)': 'onKeydown($event)',
        '(click)': 'select($event)'
      }
    }), core_1.View({
      template: "\n    <label role=\"radio\" class=\"md-radio-root\" [class.md-radio-checked]=\"checked\">\n      <div class=\"md-radio-container\">\n        <div class=\"md-radio-off\"></div>\n        <div class=\"md-radio-on\"></div>\n      </div>\n      <div class=\"md-radio-label\">\n        <ng-content></ng-content>\n      </div>\n    </label>",
      directives: [],
      encapsulation: core_1.ViewEncapsulation.None
    }), __param(0, core_1.Optional()), __param(0, core_1.SkipSelf()), __param(0, core_1.Host()), __param(1, core_1.Attribute('id')), __param(2, core_1.Attribute('value')), __param(3, core_1.Attribute('checked')), __param(4, core_1.Attribute('tabindex')), __metadata('design:paramtypes', [MdRadioGroup, String, String, String, String, radio_dispatcher_1.MdRadioDispatcher])], MdRadioButton);
    return MdRadioButton;
  }());
  exports.MdRadioButton = MdRadioButton;
  return module.exports;
});

System.registerDynamic("node_modules/ng2-material/components/radio/radio_dispatcher.js", ["angular2/core"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('angular2/core');
  var MdRadioDispatcher = (function() {
    function MdRadioDispatcher() {
      this.listeners_ = [];
    }
    MdRadioDispatcher.prototype.notify = function(name) {
      this.listeners_.forEach(function(listener) {
        return listener(name);
      });
    };
    MdRadioDispatcher.prototype.listen = function(listener) {
      this.listeners_.push(listener);
    };
    MdRadioDispatcher = __decorate([core_1.Injectable(), __metadata('design:paramtypes', [])], MdRadioDispatcher);
    return MdRadioDispatcher;
  }());
  exports.MdRadioDispatcher = MdRadioDispatcher;
  return module.exports;
});

System.registerDynamic("node_modules/ng2-material/core/key_codes.js", ["angular2/src/facade/lang"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var lang_1 = $__require('angular2/src/facade/lang');
  var KeyCodes = (function() {
    function KeyCodes() {}
    KeyCodes.ESCAPE = 27;
    KeyCodes.SPACE = 32;
    KeyCodes.UP = 38;
    KeyCodes.DOWN = 40;
    __decorate([lang_1.CONST(), __metadata('design:type', Object)], KeyCodes, "ESCAPE", void 0);
    __decorate([lang_1.CONST(), __metadata('design:type', Object)], KeyCodes, "SPACE", void 0);
    __decorate([lang_1.CONST(), __metadata('design:type', Object)], KeyCodes, "UP", void 0);
    __decorate([lang_1.CONST(), __metadata('design:type', Object)], KeyCodes, "DOWN", void 0);
    KeyCodes = __decorate([lang_1.CONST(), __metadata('design:paramtypes', [])], KeyCodes);
    return KeyCodes;
  }());
  exports.KeyCodes = KeyCodes;
  return module.exports;
});

System.registerDynamic("node_modules/ng2-material/components/checkbox/checkbox.js", ["angular2/core", "angular2/src/facade/lang", "../../core/key_codes", "../../core/util/util"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('angular2/core');
  var lang_1 = $__require('angular2/src/facade/lang');
  var key_codes_1 = $__require('../../core/key_codes');
  var core_2 = $__require('angular2/core');
  var util_1 = $__require('../../core/util/util');
  var MdCheckbox = (function() {
    function MdCheckbox() {
      this.checkedChange = new core_2.EventEmitter(false);
      this.checked = false;
      this.disabled_ = false;
    }
    Object.defineProperty(MdCheckbox.prototype, "tabindex", {
      get: function() {
        return this._tabindex;
      },
      set: function(value) {
        this._tabindex = util_1.parseTabIndexAttribute(value);
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MdCheckbox.prototype, "disabled", {
      get: function() {
        return this.disabled_;
      },
      set: function(value) {
        this.disabled_ = lang_1.isPresent(value) && value !== false;
      },
      enumerable: true,
      configurable: true
    });
    MdCheckbox.prototype.onKeydown = function(event) {
      if (event.keyCode === key_codes_1.KeyCodes.SPACE) {
        event.preventDefault();
        this.toggle(event);
      }
    };
    MdCheckbox.prototype.toggle = function(event) {
      if (this.disabled) {
        event.stopPropagation();
        return;
      }
      this.checked = !this.checked;
      this.checkedChange.emit(this.checked);
    };
    __decorate([core_2.Output(), __metadata('design:type', core_2.EventEmitter)], MdCheckbox.prototype, "checkedChange", void 0);
    __decorate([core_2.Input(), __metadata('design:type', Boolean)], MdCheckbox.prototype, "checked", void 0);
    __decorate([core_2.Input('disabled'), __metadata('design:type', Boolean)], MdCheckbox.prototype, "disabled_", void 0);
    __decorate([core_2.Input('tabindex'), __metadata('design:type', Number)], MdCheckbox.prototype, "_tabindex", void 0);
    MdCheckbox = __decorate([core_1.Component({
      selector: 'md-checkbox',
      inputs: ['checked', 'disabled'],
      host: {
        'role': 'checkbox',
        '[attr.aria-checked]': 'checked',
        '[attr.aria-disabled]': 'disabled',
        '[tabindex]': 'tabindex',
        '(keydown)': 'onKeydown($event)',
        '(click)': 'toggle($event)'
      }
    }), core_1.View({
      template: "\n    <div class=\"md-checkbox-container\">\n      <div class=\"md-checkbox-icon\"></div>\n    </div>\n    <div class=\"md-checkbox-label\"><ng-content></ng-content></div>",
      directives: [],
      encapsulation: core_1.ViewEncapsulation.None
    }), __metadata('design:paramtypes', [])], MdCheckbox);
    return MdCheckbox;
  }());
  exports.MdCheckbox = MdCheckbox;
  return module.exports;
});

System.registerDynamic("node_modules/ng2-material/components/switcher/switch.js", ["angular2/core", "../checkbox/checkbox"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('angular2/core');
  var checkbox_1 = $__require('../checkbox/checkbox');
  var MdSwitch = (function(_super) {
    __extends(MdSwitch, _super);
    function MdSwitch() {
      _super.apply(this, arguments);
    }
    MdSwitch = __decorate([core_1.Component({
      selector: 'md-switch',
      inputs: ['checked', 'disabled'],
      host: {
        'role': 'checkbox',
        '[attr.aria-checked]': 'checked',
        '[attr.aria-disabled]': 'disabled_',
        '(keydown)': 'onKeydown($event)',
        '(click)': 'toggle($event)'
      }
    }), core_1.View({
      template: "\n    <div class=\"md-switch-container\">\n      <div class=\"md-switch-bar\"></div>\n      <div class=\"md-switch-thumb-container\">\n        <div class=\"md-switch-thumb\"></div>\n      </div>\n    </div>\n    <div class=\"md-switch-label\">\n      <ng-content></ng-content>\n    </div>",
      directives: [],
      encapsulation: core_1.ViewEncapsulation.None
    }), __metadata('design:paramtypes', [])], MdSwitch);
    return MdSwitch;
  }(checkbox_1.MdCheckbox));
  exports.MdSwitch = MdSwitch;
  return module.exports;
});

System.registerDynamic("node_modules/ng2-material/components/subheader/subheader.js", ["angular2/core"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('angular2/core');
  var MdSubheader = (function() {
    function MdSubheader() {}
    MdSubheader = __decorate([core_1.Component({
      selector: 'md-subheader',
      host: {'class': 'md-subheader'}
    }), core_1.View({template: "\n    <div class=\"md-subheader-inner\">\n      <span class=\"md-subheader-content\"><ng-content></ng-content></span>\n    </div>"}), __metadata('design:paramtypes', [])], MdSubheader);
    return MdSubheader;
  }());
  exports.MdSubheader = MdSubheader;
  return module.exports;
});

System.registerDynamic("node_modules/ng2-material/components/backdrop/backdrop.js", ["../../core/util/animate", "angular2/core", "angular2/src/platform/dom/dom_adapter"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var animate_1 = $__require('../../core/util/animate');
  var core_1 = $__require('angular2/core');
  var dom_adapter_1 = $__require('angular2/src/platform/dom/dom_adapter');
  var MdBackdrop = (function() {
    function MdBackdrop(element) {
      this.element = element;
      this.clickClose = false;
      this.hideScroll = true;
      this.onHiding = new core_1.EventEmitter(false);
      this.onHidden = new core_1.EventEmitter(false);
      this.onShowing = new core_1.EventEmitter();
      this.onShown = new core_1.EventEmitter();
      this.transitionClass = 'md-active';
      this.transitionAddClass = true;
      this._visible = false;
      this._transitioning = false;
      this._previousOverflow = null;
      this._body = dom_adapter_1.DOM.query('body');
    }
    Object.defineProperty(MdBackdrop.prototype, "visible", {
      get: function() {
        return this._visible;
      },
      set: function(value) {
        this.toggle(value);
      },
      enumerable: true,
      configurable: true
    });
    MdBackdrop.prototype.onClick = function() {
      if (this.clickClose && !this._transitioning && this.visible) {
        this.hide();
      }
    };
    MdBackdrop.prototype.hide = function() {
      return this.toggle(false);
    };
    MdBackdrop.prototype.show = function() {
      return this.toggle(true);
    };
    MdBackdrop.prototype.toggle = function(visible) {
      var _this = this;
      if (visible === void 0) {
        visible = !this.visible;
      }
      if (visible === this._visible) {
        return Promise.resolve();
      }
      var beginEvent = visible ? this.onShowing : this.onHiding;
      var endEvent = visible ? this.onShown : this.onHidden;
      this._visible = visible;
      this._transitioning = true;
      beginEvent.emit(this);
      var action = visible ? (this.transitionAddClass ? animate_1.Animate.enter : animate_1.Animate.leave) : (this.transitionAddClass ? animate_1.Animate.leave : animate_1.Animate.enter);
      if (visible && this.hideScroll && this.element && !this._previousOverflow) {
        var style = dom_adapter_1.DOM.getStyle(this._body, 'overflow');
        if (style !== 'hidden') {
          this._previousOverflow = style;
          dom_adapter_1.DOM.setStyle(this._body, 'overflow', 'hidden');
        }
      } else if (!visible && this.hideScroll && this.element && this._previousOverflow !== null) {
        dom_adapter_1.DOM.setStyle(this._body, 'overflow', this._previousOverflow);
        this._previousOverflow = null;
      }
      return action(this.element.nativeElement, this.transitionClass).then(function() {
        _this._transitioning = false;
        endEvent.emit(_this);
      });
    };
    __decorate([core_1.Input(), __metadata('design:type', Boolean)], MdBackdrop.prototype, "clickClose", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Boolean)], MdBackdrop.prototype, "hideScroll", void 0);
    __decorate([core_1.Output(), __metadata('design:type', core_1.EventEmitter)], MdBackdrop.prototype, "onHiding", void 0);
    __decorate([core_1.Output(), __metadata('design:type', core_1.EventEmitter)], MdBackdrop.prototype, "onHidden", void 0);
    __decorate([core_1.Output(), __metadata('design:type', core_1.EventEmitter)], MdBackdrop.prototype, "onShowing", void 0);
    __decorate([core_1.Output(), __metadata('design:type', core_1.EventEmitter)], MdBackdrop.prototype, "onShown", void 0);
    __decorate([core_1.Input(), __metadata('design:type', String)], MdBackdrop.prototype, "transitionClass", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Object)], MdBackdrop.prototype, "transitionAddClass", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Boolean)], MdBackdrop.prototype, "visible", null);
    MdBackdrop = __decorate([core_1.Component({
      selector: 'md-backdrop',
      host: {
        'class': 'md-backdrop',
        '(click)': 'onClick()'
      }
    }), core_1.View({
      template: '',
      encapsulation: core_1.ViewEncapsulation.None
    }), __metadata('design:paramtypes', [core_1.ElementRef])], MdBackdrop);
    return MdBackdrop;
  }());
  exports.MdBackdrop = MdBackdrop;
  return module.exports;
});

System.registerDynamic("node_modules/ng2-material/components/sidenav/sidenav.js", ["angular2/core", "../backdrop/backdrop", "angular2/src/facade/lang", "./sidenav_service", "angular2/src/facade/async"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var __param = (this && this.__param) || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  var core_1 = $__require('angular2/core');
  var backdrop_1 = $__require('../backdrop/backdrop');
  var lang_1 = $__require('angular2/src/facade/lang');
  var sidenav_service_1 = $__require('./sidenav_service');
  var async_1 = $__require('angular2/src/facade/async');
  var SidenavAlignment = (function() {
    function SidenavAlignment() {}
    SidenavAlignment.LEFT = 'left';
    SidenavAlignment.RIGHT = 'right';
    __decorate([lang_1.CONST(), __metadata('design:type', Object)], SidenavAlignment, "LEFT", void 0);
    __decorate([lang_1.CONST(), __metadata('design:type', Object)], SidenavAlignment, "RIGHT", void 0);
    SidenavAlignment = __decorate([lang_1.CONST(), __metadata('design:paramtypes', [])], SidenavAlignment);
    return SidenavAlignment;
  }());
  exports.SidenavAlignment = SidenavAlignment;
  var SidenavStyle = (function() {
    function SidenavStyle() {}
    SidenavStyle.OVER = 'over';
    SidenavStyle.SIDE = 'side';
    __decorate([lang_1.CONST(), __metadata('design:type', Object)], SidenavStyle, "OVER", void 0);
    __decorate([lang_1.CONST(), __metadata('design:type', Object)], SidenavStyle, "SIDE", void 0);
    SidenavStyle = __decorate([lang_1.CONST(), __metadata('design:paramtypes', [])], SidenavStyle);
    return SidenavStyle;
  }());
  exports.SidenavStyle = SidenavStyle;
  var MdSidenav = (function(_super) {
    __extends(MdSidenav, _super);
    function MdSidenav(element, service, renderer, container) {
      _super.call(this, element);
      this.element = element;
      this.service = service;
      this.renderer = renderer;
      this.container = container;
      this.name = 'default';
      this._align = SidenavAlignment.LEFT;
      this._style = SidenavStyle.OVER;
      this.backdropRef = null;
      this.transitionClass = 'md-closed';
      this.transitionAddClass = false;
      this.renderer.setElementClass(this.element.nativeElement, this.transitionClass, !this.transitionAddClass);
    }
    Object.defineProperty(MdSidenav.prototype, "align", {
      get: function() {
        return this._align;
      },
      set: function(value) {
        this._align = value === SidenavAlignment.RIGHT ? SidenavAlignment.RIGHT : SidenavAlignment.LEFT;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MdSidenav.prototype, "style", {
      get: function() {
        return this._style;
      },
      set: function(value) {
        var _this = this;
        this._style = value === SidenavStyle.SIDE ? SidenavStyle.SIDE : SidenavStyle.OVER;
        if (this.container) {
          async_1.TimerWrapper.setTimeout(function() {
            _this.container.updateStyle(_this);
          }, 0);
        }
      },
      enumerable: true,
      configurable: true
    });
    MdSidenav.prototype.ngOnInit = function() {
      this.service.register(this);
    };
    MdSidenav.prototype.ngOnDestroy = function() {
      this.service.unregister(this);
      this.backdropRef = null;
    };
    MdSidenav.prototype.toggle = function(visible) {
      if (this.backdropRef) {
        this.backdropRef.toggle(visible);
      }
      return _super.prototype.toggle.call(this, visible);
    };
    __decorate([core_1.Input(), __metadata('design:type', String)], MdSidenav.prototype, "name", void 0);
    __decorate([core_1.Output(), __metadata('design:type', core_1.EventEmitter)], MdSidenav.prototype, "onHiding", void 0);
    __decorate([core_1.Output(), __metadata('design:type', core_1.EventEmitter)], MdSidenav.prototype, "onHidden", void 0);
    __decorate([core_1.Output(), __metadata('design:type', core_1.EventEmitter)], MdSidenav.prototype, "onShowing", void 0);
    __decorate([core_1.Output(), __metadata('design:type', core_1.EventEmitter)], MdSidenav.prototype, "onShown", void 0);
    __decorate([core_1.Input(), __metadata('design:type', String), __metadata('design:paramtypes', [String])], MdSidenav.prototype, "align", null);
    __decorate([core_1.Input(), __metadata('design:type', String), __metadata('design:paramtypes', [String])], MdSidenav.prototype, "style", null);
    MdSidenav = __decorate([core_1.Component({
      selector: 'md-sidenav',
      host: {
        '[class.md-style-side]': 'style=="side"',
        '[class.md-whiteframe-z2]': 'visible',
        '[class.md-sidenav-left]': 'align!="right"',
        '[class.md-sidenav-right]': 'align=="right"'
      },
      template: "<ng-content></ng-content>",
      directives: [backdrop_1.MdBackdrop]
    }), __param(1, core_1.Inject(core_1.forwardRef(function() {
      return sidenav_service_1.SidenavService;
    }))), __param(3, core_1.Optional()), __param(3, core_1.SkipSelf()), __param(3, core_1.Host()), __param(3, core_1.Inject(core_1.forwardRef(function() {
      return MdSidenavContainer;
    }))), __metadata('design:paramtypes', [core_1.ElementRef, sidenav_service_1.SidenavService, core_1.Renderer, MdSidenavContainer])], MdSidenav);
    return MdSidenav;
  }(backdrop_1.MdBackdrop));
  exports.MdSidenav = MdSidenav;
  var MdSidenavContainer = (function() {
    function MdSidenavContainer(_app) {
      this._app = _app;
      this._unsubscribe = null;
      this.isPushed = false;
    }
    MdSidenavContainer.prototype.ngOnDestroy = function() {
      this.children.toArray().forEach(function(m) {
        m.backdropRef = null;
      });
      this._unsubscribe.unsubscribe();
    };
    MdSidenavContainer.prototype.ngAfterViewInit = function() {
      var _this = this;
      this.children.toArray().forEach(function(m) {
        m.backdropRef = _this._backdrop;
      });
      this._unsubscribe = this._backdrop.onHiding.subscribe(function() {
        _this.children.toArray().forEach(function(m) {
          m.visible = false;
        });
      });
    };
    MdSidenavContainer.prototype.updateStyle = function(child) {
      var pushed = false;
      this.children && this.children.toArray().forEach(function(m) {
        if (m.style === SidenavStyle.SIDE) {
          pushed = true;
        }
      });
      this.isPushed = pushed;
      this._app && this._app.tick();
    };
    __decorate([core_1.ContentChildren(MdSidenav), __metadata('design:type', core_1.QueryList)], MdSidenavContainer.prototype, "children", void 0);
    __decorate([core_1.ViewChild(backdrop_1.MdBackdrop), __metadata('design:type', backdrop_1.MdBackdrop)], MdSidenavContainer.prototype, "_backdrop", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Boolean)], MdSidenavContainer.prototype, "isPushed", void 0);
    MdSidenavContainer = __decorate([core_1.Component({
      selector: 'md-sidenav-container',
      template: "\n    <md-backdrop class=\"md-opaque\" clickClose=\"true\"></md-backdrop>\n    <ng-content></ng-content>",
      directives: [backdrop_1.MdBackdrop],
      host: {'[class.md-pushed]': 'isPushed'}
    }), __param(0, core_1.Optional()), __metadata('design:paramtypes', [core_1.ApplicationRef])], MdSidenavContainer);
    return MdSidenavContainer;
  }());
  exports.MdSidenavContainer = MdSidenavContainer;
  return module.exports;
});

System.registerDynamic("node_modules/ng2-material/components/sidenav/sidenav_service.js", ["angular2/core"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('angular2/core');
  var SidenavService = (function() {
    function SidenavService() {
      this._instances = [];
    }
    SidenavService.prototype.show = function(name) {
      var instance = this.find(name);
      if (!instance) {
        return Promise.reject('invalid container');
      }
      return instance.show();
    };
    SidenavService.prototype.hide = function(name) {
      var instance = this.find(name);
      if (!instance) {
        return Promise.reject('invalid container');
      }
      return instance.hide();
    };
    SidenavService.prototype.find = function(name) {
      return this._instances.filter(function(c) {
        return c.name === name;
      })[0] || null;
    };
    SidenavService.prototype.register = function(instance) {
      this._instances.push(instance);
    };
    SidenavService.prototype.unregister = function(instance) {
      this._instances = this._instances.filter(function(c) {
        return c.name !== instance.name;
      });
    };
    SidenavService = __decorate([core_1.Injectable(), __metadata('design:paramtypes', [])], SidenavService);
    return SidenavService;
  }());
  exports.SidenavService = SidenavService;
  return module.exports;
});

System.registerDynamic("node_modules/ng2-material/core/util/util.js", ["angular2/src/facade/lang"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var lang_1 = $__require('angular2/src/facade/lang');
  var lang_2 = $__require('angular2/src/facade/lang');
  function debounce(func, wait, scope) {
    var timer;
    return function debounced() {
      var context = scope,
          args = Array.prototype.slice.call(arguments);
      clearTimeout(timer);
      timer = setTimeout(function() {
        timer = undefined;
        func.apply(context, args);
      }, wait || 10);
    };
  }
  exports.debounce = debounce;
  function throttle(func, delay, scope) {
    var recent;
    return function throttled() {
      var context = scope;
      var args = arguments;
      var now = new Date().getTime();
      if (!recent || (now - recent > delay)) {
        func.apply(context, args);
        recent = now;
      }
    };
  }
  exports.throttle = throttle;
  function rAF(callback) {
    window.requestAnimationFrame(callback);
  }
  exports.rAF = rAF;
  function parseTabIndexAttribute(attr) {
    return lang_1.isPresent(attr) ? lang_2.NumberWrapper.parseInt(attr, 10) : 0;
  }
  exports.parseTabIndexAttribute = parseTabIndexAttribute;
  function isNumber(value) {
    return Object.prototype.toString.call(value) === '[object Number]';
  }
  exports.isNumber = isNumber;
  return module.exports;
});

System.registerDynamic("node_modules/ng2-material/components/toolbar/toolbar.js", ["angular2/core", "../../core/util/util", "angular2/src/platform/dom/dom_adapter", "angular2/src/facade/lang"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('angular2/core');
  var util_1 = $__require('../../core/util/util');
  var core_2 = $__require('angular2/core');
  var dom_adapter_1 = $__require('angular2/src/platform/dom/dom_adapter');
  var lang_1 = $__require('angular2/src/facade/lang');
  var lang_2 = $__require('angular2/src/facade/lang');
  var lang_3 = $__require('angular2/src/facade/lang');
  var MdToolbar = (function() {
    function MdToolbar(el) {
      this.el = el;
      this._mdShrinkSpeed = 0.5;
      this._debouncedContentScroll = null;
      this._debouncedUpdateHeight = null;
      this._content = null;
      this._toolbarHeight = 0;
      this._cancelScrollShrink = null;
      this._previousScrollTop = 0;
      this._currentY = 0;
      this._mdScrollShrink = false;
      this._debouncedContentScroll = util_1.throttle(this.onContentScroll, 10, this);
      this._debouncedUpdateHeight = util_1.debounce(this.updateToolbarHeight, 5 * 1000, this);
    }
    Object.defineProperty(MdToolbar.prototype, "mdShrinkSpeed", {
      get: function() {
        return this._mdShrinkSpeed;
      },
      set: function(value) {
        this._mdShrinkSpeed = lang_2.isString(value) ? lang_3.NumberWrapper.parseFloat(value) : value;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MdToolbar.prototype, "mdScrollShrink", {
      get: function() {
        return this._mdScrollShrink;
      },
      set: function(value) {
        this._mdScrollShrink = !!lang_1.isPresent(value);
      },
      enumerable: true,
      configurable: true
    });
    MdToolbar.prototype.ngAfterContentInit = function() {
      this.disableScrollShrink();
      if (!this.mdScrollShrink) {
        return;
      }
      this._content = dom_adapter_1.DOM.querySelector(dom_adapter_1.DOM.parentElement(this.el.nativeElement), 'md-content');
      if (!this._content) {
        return;
      }
      this._cancelScrollShrink = dom_adapter_1.DOM.onAndCancel(this._content, 'scroll', this._debouncedContentScroll);
      dom_adapter_1.DOM.setAttribute(this._content, 'scroll-shrink', 'true');
      util_1.rAF(this.updateToolbarHeight.bind(this));
    };
    MdToolbar.prototype.ngOnChanges = function(changes) {
      this.updateToolbarHeight();
    };
    MdToolbar.prototype.ngOnDestroy = function() {
      this.disableScrollShrink();
    };
    MdToolbar.prototype.disableScrollShrink = function() {
      if (this._cancelScrollShrink) {
        this._cancelScrollShrink();
        this._cancelScrollShrink = null;
      }
    };
    MdToolbar.prototype.updateToolbarHeight = function() {
      this._toolbarHeight = dom_adapter_1.DOM.getProperty(this.el.nativeElement, 'offsetHeight');
      if (this._content) {
        var margin = (-this._toolbarHeight * this.mdShrinkSpeed) + 'px';
        dom_adapter_1.DOM.setStyle(this._content, "margin-top", margin);
        dom_adapter_1.DOM.setStyle(this._content, "margin-bottom", margin);
        this.onContentScroll();
      }
    };
    MdToolbar.prototype.onContentScroll = function(e) {
      var _this = this;
      var scrollTop = e ? e.target.scrollTop : this._previousScrollTop;
      this._debouncedUpdateHeight();
      this._currentY = Math.min(this._toolbarHeight / this.mdShrinkSpeed, Math.max(0, this._currentY + scrollTop - this._previousScrollTop));
      var toolbarXform = "translate3d(0," + -this._currentY * this.mdShrinkSpeed + "px,0)";
      var contentXform = "translate3d(0," + (this._toolbarHeight - this._currentY) * this.mdShrinkSpeed + "px,0)";
      dom_adapter_1.DOM.setStyle(this._content, '-webkit-transform', contentXform);
      dom_adapter_1.DOM.setStyle(this._content, 'transform', contentXform);
      dom_adapter_1.DOM.setStyle(this.el.nativeElement, '-webkit-transform', toolbarXform);
      dom_adapter_1.DOM.setStyle(this.el.nativeElement, 'transform', toolbarXform);
      this._previousScrollTop = scrollTop;
      util_1.rAF(function() {
        var hasWhiteFrame = dom_adapter_1.DOM.hasClass(_this.el.nativeElement, 'md-whiteframe-z1');
        if (hasWhiteFrame && !_this._currentY) {
          dom_adapter_1.DOM.removeClass(_this.el.nativeElement, 'md-whiteframe-z1');
        } else if (!hasWhiteFrame && _this._currentY) {
          dom_adapter_1.DOM.addClass(_this.el.nativeElement, 'md-whiteframe-z1');
        }
      });
    };
    __decorate([core_1.Input(), __metadata('design:type', Number), __metadata('design:paramtypes', [Number])], MdToolbar.prototype, "mdShrinkSpeed", null);
    __decorate([core_1.Input(), __metadata('design:type', Boolean), __metadata('design:paramtypes', [Boolean])], MdToolbar.prototype, "mdScrollShrink", null);
    MdToolbar = __decorate([core_1.Directive({
      selector: 'md-toolbar',
      inputs: ['mdShrinkSpeed', 'mdScrollShrink']
    }), __metadata('design:paramtypes', [core_2.ElementRef])], MdToolbar);
    return MdToolbar;
  }());
  exports.MdToolbar = MdToolbar;
  return module.exports;
});

System.registerDynamic("node_modules/ng2-material/core/util/ink.js", ["angular2/src/facade/lang", "angular2/src/platform/dom/dom_adapter", "./animate"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var lang_1 = $__require('angular2/src/facade/lang');
  var dom_adapter_1 = $__require('angular2/src/platform/dom/dom_adapter');
  var animate_1 = $__require('./animate');
  var Ink = (function() {
    function Ink() {}
    Ink.canApply = function(element) {
      return !dom_adapter_1.DOM.hasAttribute(element, 'md-no-ink');
    };
    Ink.getSize = function(fit, width, height) {
      return fit ? Math.max(width, height) : Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
    };
    Ink.ripple = function(element, left, top) {
      var fit = lang_1.isPresent(dom_adapter_1.DOM.getAttribute(element, 'md-fab'));
      var container = dom_adapter_1.DOM.querySelector(element, '.md-ripple-container');
      if (!container) {
        container = dom_adapter_1.DOM.createElement('div');
        dom_adapter_1.DOM.addClass(container, 'md-ripple-container');
        dom_adapter_1.DOM.appendChild(element, container);
      }
      var ripple = dom_adapter_1.DOM.createElement('div');
      dom_adapter_1.DOM.addClass(ripple, 'md-ripple');
      var getInitialStyles = function() {
        var color = dom_adapter_1.DOM.getComputedStyle(element).color || 'rgb(0,0,0)';
        var size = Ink.getSize(fit, element.clientWidth, element.clientHeight);
        return {
          'background-color': color,
          left: left + "px",
          top: top + "px",
          width: size + "px",
          height: size + "px"
        };
      };
      return animate_1.Animate.setStyles(ripple, getInitialStyles()).then(function() {
        return dom_adapter_1.DOM.appendChild(container, ripple);
      }).then(function() {
        return dom_adapter_1.DOM.addClass(ripple, 'md-ripple-placed');
      }).then(function() {
        return animate_1.Animate.wait();
      }).then(function() {
        return dom_adapter_1.DOM.addClass(ripple, 'md-ripple-scaled');
      }).then(function() {
        return dom_adapter_1.DOM.addClass(ripple, 'md-ripple-active');
      }).then(function() {
        return animate_1.Animate.wait(450);
      }).then(function() {
        return dom_adapter_1.DOM.removeClass(ripple, 'md-ripple-active');
      }).then(function() {
        return animate_1.Animate.wait(650);
      }).then(function() {
        return dom_adapter_1.DOM.removeChild(container, ripple);
      });
    };
    Ink.rippleEvent = function(element, event) {
      var rippleX = event.offsetX;
      var rippleY = event.offsetY;
      if (element !== event.srcElement) {
        var rect = dom_adapter_1.DOM.getBoundingClientRect(element);
        rippleX = event.clientX - rect.left;
        rippleY = event.clientY - rect.top;
      }
      return Ink.ripple(element, rippleX, rippleY);
    };
    return Ink;
  }());
  exports.Ink = Ink;
  return module.exports;
});

System.registerDynamic("node_modules/ng2-material/components/tabs/tabs.js", ["angular2/core", "../../core/util/ink", "angular2/common"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var __param = (this && this.__param) || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  var core_1 = $__require('angular2/core');
  var ink_1 = $__require('../../core/util/ink');
  var core_2 = $__require('angular2/core');
  var common_1 = $__require('angular2/common');
  var core_3 = $__require('angular2/core');
  var core_4 = $__require('angular2/core');
  var MdTab = (function() {
    function MdTab(viewContainer, templateRef) {
      this.viewContainer = viewContainer;
      this.templateRef = templateRef;
      this.disabled = false;
      this._active = false;
    }
    Object.defineProperty(MdTab.prototype, "active", {
      get: function() {
        return this._active;
      },
      set: function(active) {
        if (active == this._active) {
          return;
        }
        this._active = active;
        if (active) {
          this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
          this.viewContainer.remove(0);
        }
      },
      enumerable: true,
      configurable: true
    });
    __decorate([core_1.Input(), __metadata('design:type', String)], MdTab.prototype, "label", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Boolean)], MdTab.prototype, "disabled", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Boolean), __metadata('design:paramtypes', [Boolean])], MdTab.prototype, "active", null);
    MdTab = __decorate([core_1.Directive({selector: '[md-tab]'}), __metadata('design:paramtypes', [core_1.ViewContainerRef, core_1.TemplateRef])], MdTab);
    return MdTab;
  }());
  exports.MdTab = MdTab;
  var MdTabs = (function() {
    function MdTabs(panes, _element) {
      var _this = this;
      this.panes = panes;
      this._element = _element;
      this.mdNoScroll = false;
      this._selected = 0;
      this.panes.changes.subscribe(function(_) {
        _this.panes.toArray().forEach(function(p, index) {
          p.active = index === _this._selected;
        });
      });
    }
    Object.defineProperty(MdTabs.prototype, "selected", {
      get: function() {
        return this._selected;
      },
      set: function(index) {
        var panes = this.panes.toArray();
        var pane = null;
        if (index >= 0 && index < panes.length) {
          pane = panes[index];
        }
        this.selectedTab = pane;
        this._selected = index;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MdTabs.prototype, "selectedTab", {
      get: function() {
        var result = null;
        this.panes.toArray().forEach(function(p) {
          if (p.active) {
            result = p;
          }
        });
        return result;
      },
      set: function(value) {
        var _this = this;
        this.panes.toArray().forEach(function(p, index) {
          p.active = p == value;
          if (p.active) {
            _this._selected = index;
          }
        });
      },
      enumerable: true,
      configurable: true
    });
    MdTabs.prototype.onTabClick = function(pane, event) {
      if (event && ink_1.Ink.canApply(this._element.nativeElement)) {
        ink_1.Ink.rippleEvent(event.target, event);
      }
      this.selectedTab = pane;
    };
    __decorate([core_1.Input(), __metadata('design:type', Boolean)], MdTabs.prototype, "mdNoScroll", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Number)], MdTabs.prototype, "selected", null);
    MdTabs = __decorate([core_1.Component({
      selector: 'md-tabs',
      template: "\n    <md-tabs-wrapper>\n      <md-tab-data></md-tab-data>\n      <md-tabs-canvas role=\"tablist\">\n        <md-pagination-wrapper>\n          <md-tab-item tabindex=\"-1\"\n                       class=\"md-tab\"\n                       (click)=\"onTabClick(pane,$event)\"\n                       [class.md-active]=\"selectedTab == pane\"\n                       [disabled]=\"pane.disabled\"\n                       [style.max-width]=\"maxTabWidth + 'px'\"\n                       *ngFor=\"#pane of panes\"\n                       role=\"tab\">\n            {{pane.label}}\n          </md-tab-item>\n          <md-ink-bar></md-ink-bar>\n        </md-pagination-wrapper>\n      </md-tabs-canvas>\n    </md-tabs-wrapper>\n    <md-tabs-content-wrapper>\n      <md-tab-content role=\"tabpanel\" class=\"md-active\"\n                      [class.md-no-scroll]=\"mdNoScroll\">\n        <ng-content></ng-content>\n      </md-tab-content>\n    </md-tabs-content-wrapper>",
      directives: [common_1.NgFor],
      properties: ['selected'],
      encapsulation: core_2.ViewEncapsulation.None
    }), __param(0, core_3.Query(MdTab)), __metadata('design:paramtypes', [core_1.QueryList, core_4.ElementRef])], MdTabs);
    return MdTabs;
  }());
  exports.MdTabs = MdTabs;
  return module.exports;
});

System.registerDynamic("node_modules/ng2-material/core/util/media.js", ["angular2/core", "rxjs/Subject"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('angular2/core');
  var Subject_1 = $__require('rxjs/Subject');
  exports.MEDIA = {
    'xs': '(max-width: 599px)',
    'gt-xs': '(min-width: 600px)',
    'sm': '(min-width: 600px) and (max-width: 959px)',
    'gt-sm': '(min-width: 960px)',
    'md': '(min-width: 960px) and (max-width: 1279px)',
    'gt-md': '(min-width: 1280px)',
    'lg': '(min-width: 1280px) and (max-width: 1919px)',
    'gt-lg': '(min-width: 1920px)',
    'xl': '(min-width: 1920px)'
  };
  exports.MEDIA_PRIORITY = ['xl', 'gt-lg', 'lg', 'gt-md', 'md', 'gt-sm', 'sm', 'gt-xs', 'xs'];
  var MediaListener = (function() {
    function MediaListener(query, _mql, _media) {
      var _this = this;
      this.query = query;
      this._mql = _mql;
      this._media = _media;
      this.onMatched = new Subject_1.Subject();
      this._destroyed = false;
      this._listener = function(mql) {
        return _this.onMatched.next(mql);
      };
      this._mql.addListener(this._listener);
    }
    Object.defineProperty(MediaListener.prototype, "matches", {
      get: function() {
        return !this._destroyed && this._mql.matches;
      },
      enumerable: true,
      configurable: true
    });
    MediaListener.prototype.destroy = function() {
      if (!this._destroyed) {
        this._mql.removeListener(this._listener);
        this._media.unregisterListener(this);
        this._destroyed = true;
        this._listener = null;
        this._mql = null;
      }
    };
    return MediaListener;
  }());
  exports.MediaListener = MediaListener;
  var Media = (function() {
    function Media() {
      this._cache = {};
    }
    Media.prototype.listen = function(query) {
      var listener = this._cache[query];
      if (!listener) {
        listener = this._cache[query] = {
          mql: window.matchMedia(query),
          references: 0
        };
      }
      listener.references++;
      return new MediaListener(query, listener.mql, this);
    };
    Media.prototype.unregisterListener = function(listener) {
      var cached = this._cache[listener.query];
      if (cached) {
        cached.references--;
        delete this._cache[listener.query];
      }
    };
    Media.prototype.hasMedia = function(size) {
      return Media.hasMedia(size);
    };
    Media.hasMedia = function(size) {
      var query = Media.getQuery(size);
      if (!query) {
        return false;
      }
      return window.matchMedia(query).matches;
    };
    Media.getQuery = function(size) {
      var query = exports.MEDIA[size];
      if (!query) {
        console.warn("unknown media query size " + size + ". Expected one of [" + exports.MEDIA_PRIORITY.join(',') + "]");
        return null;
      }
      return query;
    };
    Media = __decorate([core_1.Injectable(), __metadata('design:paramtypes', [])], Media);
    return Media;
  }());
  exports.Media = Media;
  return module.exports;
});

System.registerDynamic("node_modules/ng2-material/core/util/animate.js", ["angular2/src/platform/dom/dom_adapter", "angular2/src/facade/async"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var dom_adapter_1 = $__require('angular2/src/platform/dom/dom_adapter');
  var async_1 = $__require('angular2/src/facade/async');
  var Animate = (function() {
    function Animate() {}
    Animate.enter = function(el, cssClass) {
      dom_adapter_1.DOM.removeClass(el, cssClass);
      return new Promise(function(resolve) {
        dom_adapter_1.DOM.addClass(el, cssClass + '-add');
        async_1.TimerWrapper.setTimeout(function() {
          var duration = Animate.getTransitionDuration(el, true);
          var callTimeout = setTimeout(function() {
            return done();
          }, duration);
          var done = function() {
            dom_adapter_1.DOM.removeClass(el, cssClass + '-add-active');
            dom_adapter_1.DOM.removeClass(el, cssClass + '-add');
            clearTimeout(callTimeout);
            removeListener();
            resolve();
          };
          var removeListener = dom_adapter_1.DOM.onAndCancel(el, Animate.TRANSITION_EVENT, done);
          dom_adapter_1.DOM.addClass(el, cssClass + '-add-active');
          dom_adapter_1.DOM.addClass(el, cssClass);
        }, 1);
      });
    };
    Animate.leave = function(el, cssClass) {
      return new Promise(function(resolve) {
        dom_adapter_1.DOM.addClass(el, cssClass + '-remove');
        async_1.TimerWrapper.setTimeout(function() {
          var duration = Animate.getTransitionDuration(el, true);
          var callTimeout = setTimeout(function() {
            return done();
          }, duration);
          var done = function() {
            dom_adapter_1.DOM.removeClass(el, cssClass + '-remove-active');
            dom_adapter_1.DOM.removeClass(el, cssClass + '-remove');
            clearTimeout(callTimeout);
            removeListener();
            resolve();
          };
          var removeListener = dom_adapter_1.DOM.onAndCancel(el, Animate.TRANSITION_EVENT, done);
          dom_adapter_1.DOM.addClass(el, cssClass + '-remove-active');
          dom_adapter_1.DOM.removeClass(el, cssClass);
        }, 1);
      });
    };
    Animate.getTransitionDuration = function(element, includeDelay) {
      if (includeDelay === void 0) {
        includeDelay = false;
      }
      var prefixes = ['', 'moz', 'webkit', 'ms', 'o', 'khtml'];
      var style = window.getComputedStyle(element);
      for (var i = 0; i < prefixes.length; i++) {
        var durationProperty = (i === 0 ? '' : "-" + prefixes[i] + "-") + "transition-duration";
        var duration = style[durationProperty];
        if (!duration) {
          continue;
        }
        duration = (duration.indexOf('ms') > -1) ? parseFloat(duration) : parseFloat(duration) * 1000;
        if (duration === 0) {
          continue;
        }
        if (includeDelay) {
          var delayProperty = (i === 0 ? '' : "-" + prefixes[i] + "-") + "transition-delay";
          var delay = style[delayProperty];
          if (typeof delay !== 'undefined') {
            duration += (delay.indexOf('ms') > -1) ? parseFloat(delay) : parseFloat(delay) * 1000;
          }
        }
        return duration;
      }
      return -1;
    };
    Animate.setTransitionDuration = function(element, delayMs) {
      dom_adapter_1.DOM.setStyle(element, 'transition-duration', delayMs + "ms");
    };
    Animate.whichTransitionEvent = function() {
      var t;
      var el = document.createElement('fakeelement');
      var transitions = {
        'transition': 'transitionend',
        'OTransition': 'oTransitionEnd',
        'MozTransition': 'transitionend',
        'WebkitTransition': 'webkitTransitionEnd'
      };
      for (t in transitions) {
        if (el.style[t] !== undefined) {
          return transitions[t];
        }
      }
    };
    Animate.animateStyles = function(element, styles, durationMs) {
      var saveDuration = Animate.getTransitionDuration(element);
      Animate.setTransitionDuration(element, durationMs);
      return new Promise(function(animResolve, animReject) {
        var callTimeout = setTimeout(function() {
          return done();
        }, durationMs);
        var done = function() {
          clearTimeout(callTimeout);
          removeListener();
          if (saveDuration !== -1) {
            Animate.setTransitionDuration(element, saveDuration);
          } else {
            dom_adapter_1.DOM.removeStyle(element, 'transition-duration');
          }
          animResolve();
        };
        var removeListener = dom_adapter_1.DOM.onAndCancel(element, Animate.TRANSITION_EVENT, done);
        Object.keys(styles).forEach(function(key) {
          dom_adapter_1.DOM.setStyle(element, key, "" + styles[key]);
        });
      });
    };
    Animate.setStyles = function(element, styles) {
      var saveDuration = Animate.getTransitionDuration(element);
      Animate.setTransitionDuration(element, 0);
      return new Promise(function(resolve, reject) {
        Object.keys(styles).forEach(function(key) {
          dom_adapter_1.DOM.setStyle(element, key, "" + styles[key]);
        });
        if (saveDuration !== -1) {
          Animate.setTransitionDuration(element, saveDuration);
        } else {
          dom_adapter_1.DOM.removeStyle(element, 'transition-duration');
        }
        resolve();
      });
    };
    Animate.wait = function(milliseconds) {
      if (milliseconds === void 0) {
        milliseconds = 10;
      }
      return new Promise(function(resolve) {
        async_1.TimerWrapper.setTimeout(function() {
          return resolve();
        }, milliseconds);
      });
    };
    Animate.TRANSITION_EVENT = Animate.whichTransitionEvent();
    return Animate;
  }());
  exports.Animate = Animate;
  return module.exports;
});

System.registerDynamic("node_modules/ng2-material/all.js", ["angular2/src/facade/lang", "./components/button/button", "./components/checkbox/checkbox", "./components/content/content", "./components/dialog/dialog", "./components/divider/divider", "./components/icon/icon", "./components/ink/ink", "./components/form/validators", "./components/form/messages", "./components/input/input", "./components/list/list", "./components/progress_linear/progress_linear", "./components/progress_circular/progress_circular", "./components/peekaboo/peekaboo", "./components/radio/radio_button", "./components/radio/radio_dispatcher", "./components/switcher/switch", "./components/subheader/subheader", "./components/sidenav/sidenav", "./components/sidenav/sidenav_service", "./components/toolbar/toolbar", "./components/tabs/tabs", "./core/util/media", "./core/util/animate"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  function __export(m) {
    for (var p in m)
      if (!exports.hasOwnProperty(p))
        exports[p] = m[p];
  }
  var lang_1 = $__require('angular2/src/facade/lang');
  var button_1 = $__require('./components/button/button');
  __export($__require('./components/button/button'));
  var checkbox_1 = $__require('./components/checkbox/checkbox');
  __export($__require('./components/checkbox/checkbox'));
  var content_1 = $__require('./components/content/content');
  __export($__require('./components/content/content'));
  __export($__require('./components/dialog/dialog'));
  var dialog_2 = $__require('./components/dialog/dialog');
  var divider_1 = $__require('./components/divider/divider');
  __export($__require('./components/divider/divider'));
  var icon_1 = $__require('./components/icon/icon');
  __export($__require('./components/icon/icon'));
  var ink_1 = $__require('./components/ink/ink');
  __export($__require('./components/ink/ink'));
  var validators_1 = $__require('./components/form/validators');
  __export($__require('./components/form/validators'));
  var messages_1 = $__require('./components/form/messages');
  __export($__require('./components/form/messages'));
  var input_1 = $__require('./components/input/input');
  __export($__require('./components/input/input'));
  var list_1 = $__require('./components/list/list');
  __export($__require('./components/list/list'));
  var progress_linear_1 = $__require('./components/progress_linear/progress_linear');
  __export($__require('./components/progress_linear/progress_linear'));
  var progress_circular_1 = $__require('./components/progress_circular/progress_circular');
  __export($__require('./components/progress_circular/progress_circular'));
  var peekaboo_1 = $__require('./components/peekaboo/peekaboo');
  __export($__require('./components/peekaboo/peekaboo'));
  var radio_button_1 = $__require('./components/radio/radio_button');
  var radio_dispatcher_1 = $__require('./components/radio/radio_dispatcher');
  __export($__require('./components/radio/radio_button'));
  __export($__require('./components/radio/radio_dispatcher'));
  var switch_1 = $__require('./components/switcher/switch');
  __export($__require('./components/switcher/switch'));
  var subheader_1 = $__require('./components/subheader/subheader');
  __export($__require('./components/subheader/subheader'));
  var sidenav_1 = $__require('./components/sidenav/sidenav');
  var sidenav_service_1 = $__require('./components/sidenav/sidenav_service');
  __export($__require('./components/sidenav/sidenav'));
  __export($__require('./components/sidenav/sidenav_service'));
  var toolbar_1 = $__require('./components/toolbar/toolbar');
  __export($__require('./components/toolbar/toolbar'));
  var tabs_1 = $__require('./components/tabs/tabs');
  __export($__require('./components/tabs/tabs'));
  var media_1 = $__require('./core/util/media');
  __export($__require('./core/util/media'));
  __export($__require('./core/util/animate'));
  exports.MATERIAL_DIRECTIVES = lang_1.CONST_EXPR([button_1.MdAnchor, button_1.MdButton, checkbox_1.MdCheckbox, content_1.MdContent, divider_1.MdDivider, icon_1.MdIcon, ink_1.MdInk, input_1.MdInput, input_1.MdInputContainer, validators_1.MdPatternValidator, validators_1.MdMaxLengthValidator, validators_1.MdMinValueValidator, validators_1.MdMaxValueValidator, validators_1.MdNumberRequiredValidator, messages_1.MdMessage, messages_1.MdMessages, list_1.MdList, list_1.MdListItem, peekaboo_1.MdPeekaboo, progress_linear_1.MdProgressLinear, progress_circular_1.MdProgressCircular, radio_button_1.MdRadioButton, radio_button_1.MdRadioGroup, sidenav_1.MdSidenav, sidenav_1.MdSidenavContainer, subheader_1.MdSubheader, switch_1.MdSwitch, toolbar_1.MdToolbar, tabs_1.MdTab, tabs_1.MdTabs]);
  exports.MATERIAL_PROVIDERS = [dialog_2.MdDialog, media_1.Media, sidenav_service_1.SidenavService, radio_dispatcher_1.MdRadioDispatcher, validators_1.INPUT_VALIDATORS];
  return module.exports;
});

System.register("app/services/mapping-data-sources.service.js", ["angular2/core", "angular2/http"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1,
      http_1;
  var MappingDataSourcesService;
  return {
    setters: [function(core_1_1) {
      core_1 = core_1_1;
    }, function(http_1_1) {
      http_1 = http_1_1;
    }],
    execute: function() {
      MappingDataSourcesService = (function() {
        function MappingDataSourcesService(http) {
          this.http = http;
        }
        MappingDataSourcesService.prototype.getSources = function() {
          return this.http.get('/assets/mapping-data-sources.json').map(function(res) {
            return res.json();
          }).map(function(json) {
            var arr = [];
            for (var source in json['sourcelist']) {
              var details = json['sourcelist'][source];
              arr.push({
                source: source,
                name: details.name,
                channels: details.channels.map(function(value, index) {
                  value.id = index;
                  return value;
                }),
                colorizer: details.colorizer,
                coords: details.coords
              });
            }
            return arr;
          });
        };
        MappingDataSourcesService = __decorate([core_1.Injectable(), __metadata('design:paramtypes', [http_1.Http])], MappingDataSourcesService);
        return MappingDataSourcesService;
      }());
      exports_1("MappingDataSourcesService", MappingDataSourcesService);
    }
  };
});

System.register("app/pipes/mapping-data-sources.pipe.js", ["angular2/core"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1;
  var MappingDataSourceFilter;
  return {
    setters: [function(core_1_1) {
      core_1 = core_1_1;
    }],
    execute: function() {
      MappingDataSourceFilter = (function() {
        function MappingDataSourceFilter() {}
        MappingDataSourceFilter.prototype.transform = function(items, _a) {
          var term = _a[0];
          return items.filter(function(item) {
            return item.name.toLowerCase().indexOf(term.toLowerCase()) >= 0;
          });
        };
        MappingDataSourceFilter = __decorate([core_1.Pipe({name: 'mappingDataSourceFilter'}), core_1.Injectable(), __metadata('design:paramtypes', [])], MappingDataSourceFilter);
        return MappingDataSourceFilter;
      }());
      exports_1("MappingDataSourceFilter", MappingDataSourceFilter);
    }
  };
});

System.register("app/add-data.component.js", ["angular2/core", "ng2-material/all", "./services/layer.service", "./layer.model", "./operator.model", "./services/mapping-data-sources.service", "./pipes/mapping-data-sources.pipe"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1,
      all_1,
      layer_service_1,
      layer_model_1,
      operator_model_1,
      mapping_data_sources_service_1,
      mapping_data_sources_pipe_1;
  var AddDataComponent;
  return {
    setters: [function(core_1_1) {
      core_1 = core_1_1;
    }, function(all_1_1) {
      all_1 = all_1_1;
    }, function(layer_service_1_1) {
      layer_service_1 = layer_service_1_1;
    }, function(layer_model_1_1) {
      layer_model_1 = layer_model_1_1;
    }, function(operator_model_1_1) {
      operator_model_1 = operator_model_1_1;
    }, function(mapping_data_sources_service_1_1) {
      mapping_data_sources_service_1 = mapping_data_sources_service_1_1;
    }, function(mapping_data_sources_pipe_1_1) {
      mapping_data_sources_pipe_1 = mapping_data_sources_pipe_1_1;
    }],
    execute: function() {
      AddDataComponent = (function() {
        function AddDataComponent(_mappingDataSourcesService, _layerService) {
          var _this = this;
          this._mappingDataSourcesService = _mappingDataSourcesService;
          this._layerService = _layerService;
          this.sources = [];
          this.search_term = '';
          _mappingDataSourcesService.getSources().subscribe(function(x) {
            return _this.sources = x;
          });
        }
        AddDataComponent.prototype.add = function(source, channel) {
          var op = new operator_model_1.Operator("source", operator_model_1.ResultType.RASTER, new Map().set('channel', channel.id).set('sourcename', source.source), "EPSG:" + source.coords.epsg, channel.name);
          var layer = new layer_model_1.Layer(op);
          this._layerService.addLayer(layer);
        };
        AddDataComponent = __decorate([core_1.Component({
          selector: 'add-data-component',
          template: "\n    <div style=\"height:100%\" layout=\"column\">\n    <md-input-container class=\"md-block\" style=\"margin-bottom: 0px; padding-bottom: 0px;\">\n      <label>Search term</label>\n      <input md-input (valueChange)=\"search_term = $event\">\n    </md-input-container>\n\n    <md-content flex=\"grow\">\n      <md-list>\n        <template ngFor #source [ngForOf]=\"sources | mappingDataSourceFilter:search_term\" #i=\"index\">\n          <md-subheader class=\"md-primary\">{{source.name}}</md-subheader>\n          <md-list-item class=\"md-2-line\" style=\"cursor: pointer;\"\n                        *ngFor=\"#channel of source.channels\" (click)=\"add(source, channel)\">\n            <img src=\"http://placehold.it/100x100\" alt=\"placeholder\"/>\n            <div class=\"md-list-item-text\" layout=\"column\">\n              <p>{{channel.name}}</p>\n              <p>{{channel.datatype}}</p>\n            </div>\n          </md-list-item>\n          <md-divider></md-divider>\n        </template>\n      </md-list>\n    </md-content>\n    </div>\n    ",
          styles: ["\n    md-list-item {\n      cursor: pointer;\n    }\n    md-list-item:hover {\n      background-color: #f5f5f5;\n    }\n    img {\n      padding: 5px 5px 5px 0px;\n    }\n    "],
          providers: [mapping_data_sources_service_1.MappingDataSourcesService],
          directives: [all_1.MATERIAL_DIRECTIVES],
          pipes: [mapping_data_sources_pipe_1.MappingDataSourceFilter]
        }), __metadata('design:paramtypes', [mapping_data_sources_service_1.MappingDataSourcesService, layer_service_1.LayerService])], AddDataComponent);
        return AddDataComponent;
      }());
      exports_1("AddDataComponent", AddDataComponent);
    }
  };
});

System.register("app/services/layer.service.js", ["angular2/core", "rxjs/Rx", "../layer.model", "../operator.model"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1,
      Rx_1,
      layer_model_1,
      operator_model_1;
  var LayerService;
  return {
    setters: [function(core_1_1) {
      core_1 = core_1_1;
    }, function(Rx_1_1) {
      Rx_1 = Rx_1_1;
    }, function(layer_model_1_1) {
      layer_model_1 = layer_model_1_1;
    }, function(operator_model_1_1) {
      operator_model_1 = operator_model_1_1;
    }],
    execute: function() {
      LayerService = (function() {
        function LayerService() {
          this.layers$ = new Rx_1.BehaviorSubject([]);
          this.selectedLayer$ = new Rx_1.BehaviorSubject(undefined);
          this.layers$.next([new layer_model_1.Layer(new operator_model_1.Operator('source', operator_model_1.ResultType.RASTER, new Map().set('channel', 0).set('sourcename', 'srtm'), 'EPSG:4326', 'SRTM')), new layer_model_1.Layer(new operator_model_1.Operator('gfbiopointsource', operator_model_1.ResultType.POINTS, new Map().set('datasource', 'GBIF').set('query', '{"globalAttributes":{"speciesName":"Puma concolor"},"localAttributes":{}}'), 'EPSG:4326', 'Puma Concolor'))]);
        }
        LayerService.prototype.getLayers = function() {
          return this.layers$;
        };
        LayerService.prototype.getLayersOnce = function() {
          return this.layers$.getValue();
        };
        LayerService.prototype.setLayers = function(layers) {
          if (layers.indexOf(this.selectedLayer$.getValue()) === -1) {
            this.setSelectedLayer(undefined);
          }
          this.layers$.next(layers);
        };
        LayerService.prototype.addLayer = function(layer) {
          var layers = this.layers$.getValue();
          this.setLayers([layer].concat(layers));
        };
        LayerService.prototype.removeLayer = function(layer) {
          var layers = this.layers$.getValue();
          var index = layers.indexOf(layer);
          if (index >= 0) {
            layers.splice(index, 1);
            this.setLayers(layers);
          }
        };
        LayerService.prototype.setSelectedLayer = function(layer) {
          this.selectedLayer$.next(layer);
        };
        LayerService.prototype.getSelectedLayer = function() {
          return this.selectedLayer$.asObservable();
        };
        LayerService.prototype.getSelectedLayerOnce = function() {
          return this.selectedLayer$.getValue();
        };
        LayerService = __decorate([core_1.Injectable(), __metadata('design:paramtypes', [])], LayerService);
        return LayerService;
      }());
      exports_1("LayerService", LayerService);
    }
  };
});

System.register("app/config.model.js", [], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  return {
    setters: [],
    execute: function() {
      exports_1("default", {MAPPING_URL: '/cgi-bin/mapping'});
    }
  };
});

System.register("app/layer.model.js", ["./operator.model", "./config.model"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var operator_model_1,
      config_model_1;
  var Layer;
  return {
    setters: [function(operator_model_1_1) {
      operator_model_1 = operator_model_1_1;
    }, function(config_model_1_1) {
      config_model_1 = config_model_1_1;
    }],
    execute: function() {
      Layer = (function() {
        function Layer(operator) {
          this.expanded = false;
          this._operator = operator;
        }
        Object.defineProperty(Layer.prototype, "name", {
          get: function() {
            return this.operator.name;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Layer.prototype, "url", {
          get: function() {
            return config_model_1.default.MAPPING_URL;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Layer.prototype, "operator", {
          get: function() {
            return this._operator;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Layer.prototype, "params", {
          get: function() {
            var time = '2010-06-06T18:00:00.000Z';
            switch (this.operator.resultType) {
              case operator_model_1.ResultType.RASTER:
                {
                  var operator = this.operator.getProjectedOperator('EPSG:3857');
                  return {
                    'SERVICE': 'WMS',
                    'VERSION': '1.3.0',
                    'REQUEST': 'GetMap',
                    'FORMAT': 'image/png',
                    'TRANSPARENT': true,
                    'LAYERS': operator.toQueryJSON(),
                    'COLORS': 'gray',
                    'DEBUG': 1,
                    'TIME': time
                  };
                }
              case operator_model_1.ResultType.POINTS:
                {
                  var operator = this.operator.getProjectedOperator('EPSG:3857');
                  return {
                    'pointquery': operator.toQueryJSON(),
                    'COLORS': 'hsv',
                    'CRS': 'EPSG:3857',
                    'TIME': time
                  };
                }
            }
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Layer.prototype, "resultType", {
          get: function() {
            return this.operator.resultType;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Layer.prototype, "style", {
          get: function() {
            switch (this.operator.resultType) {
              case operator_model_1.ResultType.RASTER:
                return {opacity: 0.5};
              case operator_model_1.ResultType.POINTS:
                return {color: '#FF0000'};
            }
          },
          enumerable: true,
          configurable: true
        });
        return Layer;
      }());
      exports_1("Layer", Layer);
    }
  };
});

System.register("app/operator.model.js", [], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var ResultType,
      Operator;
  return {
    setters: [],
    execute: function() {
      (function(ResultType) {
        ResultType[ResultType["RASTER"] = 1] = "RASTER";
        ResultType[ResultType["POINTS"] = 2] = "POINTS";
        ResultType[ResultType["LINES"] = 3] = "LINES";
        ResultType[ResultType["POLYGONS"] = 4] = "POLYGONS";
        ResultType[ResultType["PLOT"] = 4242] = "PLOT";
      })(ResultType || (ResultType = {}));
      exports_1("ResultType", ResultType);
      Operator = (function() {
        function Operator(operatorType, resultType, parameters, projection, displayName, rasterSources, pointSources, lineSources, polygonSources) {
          if (rasterSources === void 0) {
            rasterSources = [];
          }
          if (pointSources === void 0) {
            pointSources = [];
          }
          if (lineSources === void 0) {
            lineSources = [];
          }
          if (polygonSources === void 0) {
            polygonSources = [];
          }
          this.rasterSources = [];
          this.pointSources = [];
          this.lineSources = [];
          this.polygonSources = [];
          this._id = Operator.nextOperatorId;
          this.name = displayName;
          this.operatorType = operatorType, this._resultType = resultType;
          this.parameters = parameters;
          this._projection = projection;
          var sources = [[rasterSources, this.rasterSources, ResultType.RASTER], [pointSources, this.pointSources, ResultType.POINTS], [lineSources, this.lineSources, ResultType.LINES], [polygonSources, this.polygonSources, ResultType.POLYGONS]];
          for (var _i = 0,
              sources_1 = sources; _i < sources_1.length; _i++) {
            var _a = sources_1[_i],
                source = _a[0],
                sink = _a[1],
                sinkType = _a[2];
            for (var _b = 0,
                source_1 = source; _b < source_1.length; _b++) {
              var operator = source_1[_b];
              if (operator.resultType == sinkType) {
                sink.push(operator);
              } else {
                throw Error('The Operator in array rasterSources is not of type RASTER.');
              }
            }
          }
        }
        Object.defineProperty(Operator, "nextOperatorId", {
          get: function() {
            return this._operatorId++;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Operator.prototype, "id", {
          get: function() {
            return this._id;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Operator.prototype, "resultType", {
          get: function() {
            return this._resultType;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Operator.prototype, "projection", {
          get: function() {
            return this._projection;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Operator.prototype, "sourceCount", {
          get: function() {
            return this.rasterSources.length + this.pointSources.length + this.lineSources.length + this.polygonSources.length;
          },
          enumerable: true,
          configurable: true
        });
        Operator.prototype.getAnySource = function(id) {
          for (var _i = 0,
              _a = this.rasterSources; _i < _a.length; _i++) {
            var source = _a[_i];
            if (source.id == id) {
              return source;
            }
          }
          throw Error("getAnySource: no source found with id " + id + " in " + JSON.stringify(this));
        };
        Operator.prototype.hasSources = function() {
          return this.rasterSources.length > 0 || this.pointSources.length > 0 || this.lineSources.length > 0 || this.polygonSources.length > 0;
        };
        Operator.prototype.getSources = function(sourceType) {
          switch (sourceType) {
            case ResultType.RASTER:
              return this.rasterSources;
            case ResultType.POINTS:
              return this.pointSources;
            case ResultType.LINES:
              return this.lineSources;
            case ResultType.POLYGONS:
              return this.polygonSources;
            default:
              throw Error('Invalid Source Type');
          }
        };
        Operator.prototype.getProjectedOperator = function(projection) {
          if (projection == this.projection) {
            return this;
          } else {
            var parameters = new Map();
            parameters.set('src_projection', this.projection);
            parameters.set('dest_projection', projection);
            return new Operator('projection', this.resultType, parameters, projection, "Projection of #" + this.id, this.resultType == ResultType.RASTER ? [this] : [], this.resultType == ResultType.POINTS ? [this] : [], this.resultType == ResultType.LINES ? [this] : [], this.resultType == ResultType.POLYGONS ? [this] : []);
          }
        };
        Operator.prototype.toQueryDict = function() {
          var dict = {'type': this.operatorType};
          if (this.parameters.size > 0) {
            var params_1 = {};
            this.parameters.forEach(function(value, key, map) {
              params_1[key] = value;
            });
            dict['params'] = params_1;
          }
          if (this.hasSources()) {
            var sources = {};
            var sourcesList = [[ResultType[ResultType.RASTER].toLowerCase(), this.rasterSources], [ResultType[ResultType.POINTS].toLowerCase(), this.pointSources], [ResultType[ResultType.LINES].toLowerCase(), this.lineSources], [ResultType[ResultType.POLYGONS].toLowerCase(), this.polygonSources]];
            for (var _i = 0,
                sourcesList_1 = sourcesList; _i < sourcesList_1.length; _i++) {
              var _a = sourcesList_1[_i],
                  sourceString = _a[0],
                  source = _a[1];
              if (source.length > 0) {
                sources[sourceString] = [];
                for (var _b = 0,
                    source_2 = source; _b < source_2.length; _b++) {
                  var operator = source_2[_b];
                  sources[sourceString].push(operator.toQueryDict());
                }
              }
            }
            dict['sources'] = sources;
          }
          return dict;
        };
        Operator.prototype.toQueryJSON = function() {
          return JSON.stringify(this.toQueryDict());
        };
        Operator.prototype.toDict = function() {
          var dict = {
            id: this._id,
            name: this.name,
            resultType: this._resultType,
            operatorType: this.operatorType,
            parameters: Array.from(this.parameters.entries()),
            projection: this._projection,
            symbology: this.symbology
          };
          if (this.hasSources()) {
            var sources = {};
            var sourcesList = [[ResultType[ResultType.RASTER], this.rasterSources], [ResultType[ResultType.POINTS], this.pointSources], [ResultType[ResultType.LINES], this.lineSources], [ResultType[ResultType.POLYGONS], this.polygonSources]];
            for (var _i = 0,
                sourcesList_2 = sourcesList; _i < sourcesList_2.length; _i++) {
              var _a = sourcesList_2[_i],
                  sourceString = _a[0],
                  source = _a[1];
              if (source.length > 0) {
                sources[sourceString] = [];
                for (var _b = 0,
                    source_3 = source; _b < source_3.length; _b++) {
                  var operator = source_3[_b];
                  sources[sourceString].push(operator.toDict());
                }
              }
            }
            dict['sources'] = sources;
          }
          return dict;
        };
        Operator.prototype.toJSON = function() {
          return JSON.stringify(this.toDict());
        };
        Operator.fromJSON = function(json) {
          return this.fromDict(JSON.parse(json));
        };
        Operator.fromDict = function(operatorDict) {
          var operator = new Operator(operatorDict.operatorType, operatorDict.resultType, new Map(operatorDict.parameters), operatorDict.projection, operatorDict.name);
          operator._id = operatorDict.id;
          operator.symbology = operatorDict.symbology;
          if (operatorDict.sources !== undefined) {
            for (var sourceType in operatorDict.sources) {
              var sourceOperators = operatorDict.sources[sourceType];
              for (var _i = 0,
                  sourceOperators_1 = sourceOperators; _i < sourceOperators_1.length; _i++) {
                var sourceOperator = sourceOperators_1[_i];
                switch (sourceType) {
                  case ResultType[ResultType.RASTER]:
                    operator.rasterSources.push(Operator.fromDict(sourceOperator));
                    break;
                  case ResultType[ResultType.POINTS]:
                    operator.pointSources.push(Operator.fromDict(sourceOperator));
                    break;
                  case ResultType[ResultType.LINES]:
                    operator.lineSources.push(Operator.fromDict(sourceOperator));
                    break;
                  case ResultType[ResultType.POLYGONS]:
                    operator.polygonSources.push(Operator.fromDict(sourceOperator));
                    break;
                }
              }
            }
          }
          return operator;
        };
        Operator._operatorId = 1;
        return Operator;
      }());
      exports_1("Operator", Operator);
    }
  };
});

System.register("app/services/storage.service.js", ["angular2/core", "./layer.service", "../layer.model", "../operator.model"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1,
      layer_service_1,
      layer_model_1,
      operator_model_1;
  var StorageService;
  return {
    setters: [function(core_1_1) {
      core_1 = core_1_1;
    }, function(layer_service_1_1) {
      layer_service_1 = layer_service_1_1;
    }, function(layer_model_1_1) {
      layer_model_1 = layer_model_1_1;
    }, function(operator_model_1_1) {
      operator_model_1 = operator_model_1_1;
    }],
    execute: function() {
      StorageService = (function() {
        function StorageService(layerService) {
          this.layerService = layerService;
          this.loadLayers();
          this.storeLayersSetup();
        }
        StorageService.prototype.loadLayers = function() {
          var layersJSON = localStorage.getItem('layers');
          if (layersJSON === null) {
            this.layerService.setLayers([new layer_model_1.Layer(new operator_model_1.Operator('source', operator_model_1.ResultType.RASTER, new Map().set('channel', 0).set('sourcename', 'srtm'), 'EPSG:4326', 'SRTM')), new layer_model_1.Layer(new operator_model_1.Operator('gfbiopointsource', operator_model_1.ResultType.POINTS, new Map().set('datasource', 'GBIF').set('query', '{"globalAttributes":{"speciesName":"Puma concolor"},"localAttributes":{}}'), 'EPSG:4326', 'Puma Concolor'))]);
          } else {
            var layers = [];
            var layerDicts = JSON.parse(layersJSON);
            for (var _i = 0,
                layerDicts_1 = layerDicts; _i < layerDicts_1.length; _i++) {
              var layerDict = layerDicts_1[_i];
              var layer = new layer_model_1.Layer(operator_model_1.Operator.fromJSON(layerDict.operator));
              layer.expanded = layerDict.expanded;
              layers.push(layer);
            }
            this.layerService.setLayers(layers);
          }
        };
        StorageService.prototype.storeLayersSetup = function() {
          this.layerService.getLayers().subscribe(function(layers) {
            var layerStrings = [];
            for (var _i = 0,
                layers_1 = layers; _i < layers_1.length; _i++) {
              var layer = layers_1[_i];
              layerStrings.push({
                operator: layer.operator.toJSON(),
                expanded: layer.expanded
              });
            }
            localStorage.setItem('layers', JSON.stringify(layerStrings));
          });
        };
        StorageService.prototype.addLayerListVisibleObservable = function(layerListVisible$) {
          layerListVisible$.subscribe(function(visible) {
            localStorage.setItem('layerListVisible', JSON.stringify(visible));
          });
        };
        StorageService.prototype.getLayerListVisible = function() {
          var layerListVisible = localStorage.getItem('layerListVisible');
          if (layerListVisible === null) {
            return true;
          } else {
            return JSON.parse(layerListVisible);
          }
        };
        StorageService.prototype.addDataTableVisibleObservable = function(dataTableVisible$) {
          dataTableVisible$.subscribe(function(visible) {
            localStorage.setItem('dataTableVisible', JSON.stringify(visible));
          });
        };
        StorageService.prototype.getDataTableVisible = function() {
          var dataTableVisible = localStorage.getItem('dataTableVisible');
          if (dataTableVisible === null) {
            return true;
          } else {
            return JSON.parse(dataTableVisible);
          }
        };
        StorageService = __decorate([core_1.Injectable(), __metadata('design:paramtypes', [layer_service_1.LayerService])], StorageService);
        return StorageService;
      }());
      exports_1("StorageService", StorageService);
    }
  };
});

System.register("app/app.component.js", ["angular2/core", "angular2/common", "angular2/http", "rxjs/Rx", "ng2-material/all", "./info-area.component", "./tab.component", "./info-bar.component", "./layer.component", "./angular-grid", "./openlayers/map.component", "./openlayers/layer.component", "./add-data.component", "./operator.model", "./services/layer.service", "./services/storage.service"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1,
      common_1,
      http_1,
      Rx_1,
      all_1,
      info_area_component_1,
      tab_component_1,
      info_bar_component_1,
      layer_component_1,
      angular_grid_1,
      map_component_1,
      layer_component_2,
      add_data_component_1,
      operator_model_1,
      layer_service_1,
      storage_service_1;
  var AppComponent;
  return {
    setters: [function(core_1_1) {
      core_1 = core_1_1;
    }, function(common_1_1) {
      common_1 = common_1_1;
    }, function(http_1_1) {
      http_1 = http_1_1;
    }, function(Rx_1_1) {
      Rx_1 = Rx_1_1;
    }, function(all_1_1) {
      all_1 = all_1_1;
    }, function(info_area_component_1_1) {
      info_area_component_1 = info_area_component_1_1;
    }, function(tab_component_1_1) {
      tab_component_1 = tab_component_1_1;
    }, function(info_bar_component_1_1) {
      info_bar_component_1 = info_bar_component_1_1;
    }, function(layer_component_1_1) {
      layer_component_1 = layer_component_1_1;
    }, function(angular_grid_1_1) {
      angular_grid_1 = angular_grid_1_1;
    }, function(map_component_1_1) {
      map_component_1 = map_component_1_1;
    }, function(layer_component_2_1) {
      layer_component_2 = layer_component_2_1;
    }, function(add_data_component_1_1) {
      add_data_component_1 = add_data_component_1_1;
    }, function(operator_model_1_1) {
      operator_model_1 = operator_model_1_1;
    }, function(layer_service_1_1) {
      layer_service_1 = layer_service_1_1;
    }, function(storage_service_1_1) {
      storage_service_1 = storage_service_1_1;
    }],
    execute: function() {
      AppComponent = (function() {
        function AppComponent(zone, layerService, sidenavService, storageService) {
          this.zone = zone;
          this.layerService = layerService;
          this.sidenavService = sidenavService;
          this.storageService = storageService;
          this.LAYER_IS_POINTS = operator_model_1.ResultType.POINTS;
          this.LAYER_IS_RASTER = operator_model_1.ResultType.RASTER;
          this.layersReverse$ = layerService.getLayers().map(function(layers) {
            return layers.slice(0).reverse();
          });
          this.hasSelectedLayer$ = layerService.getSelectedLayer().map(function(value) {
            return value !== undefined;
          });
          this.layerListVisible$ = new Rx_1.BehaviorSubject(this.storageService.getLayerListVisible());
          this.storageService.addLayerListVisibleObservable(this.layerListVisible$);
          this.dataTableVisible$ = new Rx_1.BehaviorSubject(this.storageService.getDataTableVisible());
          this.storageService.addDataTableVisibleObservable(this.dataTableVisible$);
        }
        AppComponent.prototype.ngOnInit = function() {
          var _this = this;
          var windowHeight$ = new Rx_1.BehaviorSubject(window.innerHeight);
          Rx_1.Observable.fromEvent(window, 'resize').map(function(_) {
            return window.innerHeight;
          }).subscribe(windowHeight$);
          this.layerListVisible$.map(function() {
            return window.innerHeight;
          }).subscribe(windowHeight$);
          this.dataTableVisible$.map(function() {
            return window.innerHeight;
          }).subscribe(windowHeight$);
          var remainingHeight$ = windowHeight$.map(function(height) {
            return height - 180;
          }).map(function(height) {
            return Math.max(height, 0);
          });
          this.middleContainerHeight$ = remainingHeight$.map(function(height) {
            if (_this.dataTableVisible$.getValue()) {
              return Math.ceil(3 / 5 * height);
            } else {
              return Math.max(height - 40, 0);
            }
          });
          this.bottomContainerHeight$ = remainingHeight$.map(function(height) {
            if (_this.dataTableVisible$.getValue()) {
              return Math.floor(2 / 5 * height);
            } else {
              return 40;
            }
          });
        };
        AppComponent.prototype.ngAfterViewInit = function() {
          var _this = this;
          this.middleContainerHeight$.subscribe(function() {
            _this.mapComponent.resize();
          });
          this.bottomContainerHeight$.subscribe(function() {
            _this.mapComponent.resize();
          });
        };
        AppComponent.prototype.getMapIndexOfSelectedLayer = function() {
          var layers = this.layerService.getLayersOnce();
          var selectedLayer = this.layerService.getSelectedLayerOnce();
          var index = layers.indexOf(selectedLayer);
          return layers.length - index - 1;
        };
        __decorate([core_1.ViewChild(map_component_1.MapComponent), __metadata('design:type', map_component_1.MapComponent)], AppComponent.prototype, "mapComponent", void 0);
        AppComponent = __decorate([core_1.Component({
          selector: 'wave-app',
          template: "\n    <div class=\"topContainer md-whiteframe-5dp\" layout=\"row\">\n        <div class=\"infoArea\">\n            <info-area-component [layerListVisible]=\"layerListVisible$\">\n            </info-area-component>\n        </div>\n        <div flex=\"grow\">\n            <tab-component\n                [layerSelected]=\"hasSelectedLayer$ | async\"\n                (removeLayer)=\"layerService.removeLayer(layerService.getSelectedLayerOnce())\"\n                (zoomIn)=\"mapComponent.zoomIn()\" (zoomOut)=\"mapComponent.zoomOut()\"\n                (zoomLayer)=\"mapComponent.zoomToLayer(getMapIndexOfSelectedLayer())\"\n                (zoomMap)=\"mapComponent.zoomToMap()\"\n                (addData)=\"sidenavService.show('right')\">\n            </tab-component>\n        </div>\n    </div>\n    <div class=\"middleContainer md-whiteframe-5dp\"\n        [style.height.px]=\"middleContainerHeight$ | async\" layout=\"row\">\n        <div class=\"layers\" *ngIf=\"layerListVisible$ | async\">\n            <layer-component [layers]=\"layers\">\n            </layer-component>\n        </div>\n        <div flex=\"grow\">\n            <ol-map [height]=\"middleContainerHeight$ | async\">\n                <div *ngFor=\"#layer of layersReverse$ | async; #index = index\"\n                     [ngSwitch]=\"layer.resultType\">\n                    <ol-point-layer #olLayer *ngSwitchWhen=\"LAYER_IS_POINTS\"\n                                    [params]=\"layer.params\"\n                                    [style]=\"layer.style\"></ol-point-layer>\n                    <ol-raster-layer #olLayer *ngSwitchWhen=\"LAYER_IS_RASTER\"\n                                    [params]=\"layer.params\"\n                                    [style]=\"layer.style\"></ol-raster-layer>\n                </div>\n            </ol-map>\n        </div>\n    </div>\n    <div class=\"bottomContainer md-whiteframe-5dp\"\n        [style.height.px]=\"bottomContainerHeight$ | async\">\n        <md-toolbar class=\"infoBar\">\n            <info-bar-component [dataTableVisible]=\"dataTableVisible$\">\n            </info-bar-component>\n        </md-toolbar>\n        <div class=\"dataTable\" *ngIf=\"dataTableVisible$ | async\">\n            <angular-grid [height]=\"(bottomContainerHeight$ | async) - 40\">\n            </angular-grid>\n        </div>\n    </div>\n    <md-sidenav-container>\n        <md-sidenav name=\"right\" align=\"right\" layout=\"column\"\n                style=\"over\">\n            <add-data-component style=\"height:100%\"></add-data-component>\n        </md-sidenav>\n    </md-sidenav-container>\n    ",
          styles: ["\n    .topContainer {\n        position: absolute;\n        top: 0px;\n        height: 180px;\n        left: 0px;\n        right: 0px;\n    }\n    .infoArea {\n        width: 200px;\n        min-width: 200px;\n    }\n    .middleContainer {\n        position: absolute;\n        top: 180px;\n        left: 0px;\n        right: 0px;\n    }\n    .middleContainer .layers {\n        width: 200px;\n    }\n    .bottomContainer {\n        position: absolute;\n        bottom: 0px;\n        left: 0px;\n        right: 0px;\n\n        overflow: hidden;\n    }\n    .bottomContainer .infoBar {\n        min-height: 40px;\n        height: 40px;\n    }\n    "],
          directives: [common_1.COMMON_DIRECTIVES, all_1.MATERIAL_DIRECTIVES, info_area_component_1.InfoAreaComponent, tab_component_1.TabComponent, layer_component_1.LayerComponent, map_component_1.MapComponent, layer_component_2.PointLayerComponent, layer_component_2.RasterLayerComponent, info_bar_component_1.InfoBarComponent, angular_grid_1.AngularGrid, add_data_component_1.AddDataComponent],
          changeDetection: core_1.ChangeDetectionStrategy.OnPush,
          providers: [layer_service_1.LayerService, storage_service_1.StorageService, all_1.SidenavService, http_1.HTTP_PROVIDERS]
        }), __metadata('design:paramtypes', [core_1.NgZone, layer_service_1.LayerService, all_1.SidenavService, storage_service_1.StorageService])], AppComponent);
        return AppComponent;
      }());
      exports_1("AppComponent", AppComponent);
    }
  };
});

System.register("app/main.js", ["angular2/platform/browser", "./app.component"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var browser_1,
      app_component_1;
  return {
    setters: [function(browser_1_1) {
      browser_1 = browser_1_1;
    }, function(app_component_1_1) {
      app_component_1 = app_component_1_1;
    }],
    execute: function() {
      browser_1.bootstrap(app_component_1.AppComponent).catch(function(err) {
        return console.error(err);
      });
    }
  };
});

//# sourceMappingURL=outfile.js.map