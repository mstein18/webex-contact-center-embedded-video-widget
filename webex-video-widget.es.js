import pt from "webex";
import M from "@wxcc-desktop/sdk";
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const D = globalThis, K = D.ShadowRoot && (D.ShadyCSS === void 0 || D.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, F = Symbol(), G = /* @__PURE__ */ new WeakMap();
let at = class {
  constructor(t, e, i) {
    if (this._$cssResult$ = !0, i !== F) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (K && t === void 0) {
      const i = e !== void 0 && e.length === 1;
      i && (t = G.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), i && G.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const ut = (o) => new at(typeof o == "string" ? o : o + "", void 0, F), ft = (o, ...t) => {
  const e = o.length === 1 ? o[0] : t.reduce((i, s, r) => i + ((n) => {
    if (n._$cssResult$ === !0) return n.cssText;
    if (typeof n == "number") return n;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + n + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + o[r + 1], o[0]);
  return new at(e, o, F);
}, gt = (o, t) => {
  if (K) o.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const i = document.createElement("style"), s = D.litNonce;
    s !== void 0 && i.setAttribute("nonce", s), i.textContent = e.cssText, o.appendChild(i);
  }
}, Q = K ? (o) => o : (o) => o instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const i of t.cssRules) e += i.cssText;
  return ut(e);
})(o) : o;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: $t, defineProperty: mt, getOwnPropertyDescriptor: _t, getOwnPropertyNames: yt, getOwnPropertySymbols: vt, getPrototypeOf: At } = Object, m = globalThis, X = m.trustedTypes, bt = X ? X.emptyScript : "", I = m.reactiveElementPolyfillSupport, O = (o, t) => o, z = { toAttribute(o, t) {
  switch (t) {
    case Boolean:
      o = o ? bt : null;
      break;
    case Object:
    case Array:
      o = o == null ? o : JSON.stringify(o);
  }
  return o;
}, fromAttribute(o, t) {
  let e = o;
  switch (t) {
    case Boolean:
      e = o !== null;
      break;
    case Number:
      e = o === null ? null : Number(o);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(o);
      } catch {
        e = null;
      }
  }
  return e;
} }, J = (o, t) => !$t(o, t), Y = { attribute: !0, type: String, converter: z, reflect: !1, useDefault: !1, hasChanged: J };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), m.litPropertyMetadata ?? (m.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let w = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = Y) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const i = Symbol(), s = this.getPropertyDescriptor(t, i, e);
      s !== void 0 && mt(this.prototype, t, s);
    }
  }
  static getPropertyDescriptor(t, e, i) {
    const { get: s, set: r } = _t(this.prototype, t) ?? { get() {
      return this[e];
    }, set(n) {
      this[e] = n;
    } };
    return { get: s, set(n) {
      const l = s == null ? void 0 : s.call(this);
      r == null || r.call(this, n), this.requestUpdate(t, l, i);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? Y;
  }
  static _$Ei() {
    if (this.hasOwnProperty(O("elementProperties"))) return;
    const t = At(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(O("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(O("properties"))) {
      const e = this.properties, i = [...yt(e), ...vt(e)];
      for (const s of i) this.createProperty(s, e[s]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [i, s] of e) this.elementProperties.set(i, s);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, i] of this.elementProperties) {
      const s = this._$Eu(e, i);
      s !== void 0 && this._$Eh.set(s, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const i = new Set(t.flat(1 / 0).reverse());
      for (const s of i) e.unshift(Q(s));
    } else t !== void 0 && e.push(Q(t));
    return e;
  }
  static _$Eu(t, e) {
    const i = e.attribute;
    return i === !1 ? void 0 : typeof i == "string" ? i : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var t;
    this._$ES = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (t = this.constructor.l) == null || t.forEach((e) => e(this));
  }
  addController(t) {
    var e;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t), this.renderRoot !== void 0 && this.isConnected && ((e = t.hostConnected) == null || e.call(t));
  }
  removeController(t) {
    var e;
    (e = this._$EO) == null || e.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(), e = this.constructor.elementProperties;
    for (const i of e.keys()) this.hasOwnProperty(i) && (t.set(i, this[i]), delete this[i]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return gt(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var t;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$EO) == null || t.forEach((e) => {
      var i;
      return (i = e.hostConnected) == null ? void 0 : i.call(e);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$EO) == null || t.forEach((e) => {
      var i;
      return (i = e.hostDisconnected) == null ? void 0 : i.call(e);
    });
  }
  attributeChangedCallback(t, e, i) {
    this._$AK(t, i);
  }
  _$ET(t, e) {
    var r;
    const i = this.constructor.elementProperties.get(t), s = this.constructor._$Eu(t, i);
    if (s !== void 0 && i.reflect === !0) {
      const n = (((r = i.converter) == null ? void 0 : r.toAttribute) !== void 0 ? i.converter : z).toAttribute(e, i.type);
      this._$Em = t, n == null ? this.removeAttribute(s) : this.setAttribute(s, n), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var r, n;
    const i = this.constructor, s = i._$Eh.get(t);
    if (s !== void 0 && this._$Em !== s) {
      const l = i.getPropertyOptions(s), a = typeof l.converter == "function" ? { fromAttribute: l.converter } : ((r = l.converter) == null ? void 0 : r.fromAttribute) !== void 0 ? l.converter : z;
      this._$Em = s;
      const c = a.fromAttribute(e, l.type);
      this[s] = c ?? ((n = this._$Ej) == null ? void 0 : n.get(s)) ?? c, this._$Em = null;
    }
  }
  requestUpdate(t, e, i) {
    var s;
    if (t !== void 0) {
      const r = this.constructor, n = this[t];
      if (i ?? (i = r.getPropertyOptions(t)), !((i.hasChanged ?? J)(n, e) || i.useDefault && i.reflect && n === ((s = this._$Ej) == null ? void 0 : s.get(t)) && !this.hasAttribute(r._$Eu(t, i)))) return;
      this.C(t, e, i);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, e, { useDefault: i, reflect: s, wrapped: r }, n) {
    i && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t) && (this._$Ej.set(t, n ?? e ?? this[t]), r !== !0 || n !== void 0) || (this._$AL.has(t) || (this.hasUpdated || i || (e = void 0), this._$AL.set(t, e)), s === !0 && this._$Em !== t && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (e) {
      Promise.reject(e);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var i;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [r, n] of this._$Ep) this[r] = n;
        this._$Ep = void 0;
      }
      const s = this.constructor.elementProperties;
      if (s.size > 0) for (const [r, n] of s) {
        const { wrapped: l } = n, a = this[r];
        l !== !0 || this._$AL.has(r) || a === void 0 || this.C(r, void 0, n, a);
      }
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), (i = this._$EO) == null || i.forEach((s) => {
        var r;
        return (r = s.hostUpdate) == null ? void 0 : r.call(s);
      }), this.update(e)) : this._$EM();
    } catch (s) {
      throw t = !1, this._$EM(), s;
    }
    t && this._$AE(e);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var e;
    (e = this._$EO) == null || e.forEach((i) => {
      var s;
      return (s = i.hostUpdated) == null ? void 0 : s.call(i);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$Eq && (this._$Eq = this._$Eq.forEach((e) => this._$ET(e, this[e]))), this._$EM();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
};
w.elementStyles = [], w.shadowRootOptions = { mode: "open" }, w[O("elementProperties")] = /* @__PURE__ */ new Map(), w[O("finalized")] = /* @__PURE__ */ new Map(), I == null || I({ ReactiveElement: w }), (m.reactiveElementVersions ?? (m.reactiveElementVersions = [])).push("2.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const k = globalThis, V = k.trustedTypes, tt = V ? V.createPolicy("lit-html", { createHTML: (o) => o }) : void 0, lt = "$lit$", $ = `lit$${Math.random().toFixed(9).slice(2)}$`, ht = "?" + $, Et = `<${ht}>`, b = document, U = () => b.createComment(""), T = (o) => o === null || typeof o != "object" && typeof o != "function", Z = Array.isArray, wt = (o) => Z(o) || typeof (o == null ? void 0 : o[Symbol.iterator]) == "function", L = `[ 	
\f\r]`, P = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, et = /-->/g, it = />/g, y = RegExp(`>|${L}(?:([^\\s"'>=/]+)(${L}*=${L}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), st = /'/g, ot = /"/g, ct = /^(?:script|style|textarea|title)$/i, St = (o) => (t, ...e) => ({ _$litType$: o, strings: t, values: e }), W = St(1), x = Symbol.for("lit-noChange"), d = Symbol.for("lit-nothing"), nt = /* @__PURE__ */ new WeakMap(), v = b.createTreeWalker(b, 129);
function dt(o, t) {
  if (!Z(o) || !o.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return tt !== void 0 ? tt.createHTML(t) : t;
}
const xt = (o, t) => {
  const e = o.length - 1, i = [];
  let s, r = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", n = P;
  for (let l = 0; l < e; l++) {
    const a = o[l];
    let c, p, h = -1, f = 0;
    for (; f < a.length && (n.lastIndex = f, p = n.exec(a), p !== null); ) f = n.lastIndex, n === P ? p[1] === "!--" ? n = et : p[1] !== void 0 ? n = it : p[2] !== void 0 ? (ct.test(p[2]) && (s = RegExp("</" + p[2], "g")), n = y) : p[3] !== void 0 && (n = y) : n === y ? p[0] === ">" ? (n = s ?? P, h = -1) : p[1] === void 0 ? h = -2 : (h = n.lastIndex - p[2].length, c = p[1], n = p[3] === void 0 ? y : p[3] === '"' ? ot : st) : n === ot || n === st ? n = y : n === et || n === it ? n = P : (n = y, s = void 0);
    const g = n === y && o[l + 1].startsWith("/>") ? " " : "";
    r += n === P ? a + Et : h >= 0 ? (i.push(c), a.slice(0, h) + lt + a.slice(h) + $ + g) : a + $ + (h === -2 ? l : g);
  }
  return [dt(o, r + (o[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), i];
};
class R {
  constructor({ strings: t, _$litType$: e }, i) {
    let s;
    this.parts = [];
    let r = 0, n = 0;
    const l = t.length - 1, a = this.parts, [c, p] = xt(t, e);
    if (this.el = R.createElement(c, i), v.currentNode = this.el.content, e === 2 || e === 3) {
      const h = this.el.content.firstChild;
      h.replaceWith(...h.childNodes);
    }
    for (; (s = v.nextNode()) !== null && a.length < l; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const h of s.getAttributeNames()) if (h.endsWith(lt)) {
          const f = p[n++], g = s.getAttribute(h).split($), N = /([.?@])?(.*)/.exec(f);
          a.push({ type: 1, index: r, name: N[2], strings: g, ctor: N[1] === "." ? Mt : N[1] === "?" ? Pt : N[1] === "@" ? Ot : j }), s.removeAttribute(h);
        } else h.startsWith($) && (a.push({ type: 6, index: r }), s.removeAttribute(h));
        if (ct.test(s.tagName)) {
          const h = s.textContent.split($), f = h.length - 1;
          if (f > 0) {
            s.textContent = V ? V.emptyScript : "";
            for (let g = 0; g < f; g++) s.append(h[g], U()), v.nextNode(), a.push({ type: 2, index: ++r });
            s.append(h[f], U());
          }
        }
      } else if (s.nodeType === 8) if (s.data === ht) a.push({ type: 2, index: r });
      else {
        let h = -1;
        for (; (h = s.data.indexOf($, h + 1)) !== -1; ) a.push({ type: 7, index: r }), h += $.length - 1;
      }
      r++;
    }
  }
  static createElement(t, e) {
    const i = b.createElement("template");
    return i.innerHTML = t, i;
  }
}
function C(o, t, e = o, i) {
  var n, l;
  if (t === x) return t;
  let s = i !== void 0 ? (n = e._$Co) == null ? void 0 : n[i] : e._$Cl;
  const r = T(t) ? void 0 : t._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== r && ((l = s == null ? void 0 : s._$AO) == null || l.call(s, !1), r === void 0 ? s = void 0 : (s = new r(o), s._$AT(o, e, i)), i !== void 0 ? (e._$Co ?? (e._$Co = []))[i] = s : e._$Cl = s), s !== void 0 && (t = C(o, s._$AS(o, t.values), s, i)), t;
}
class Ct {
  constructor(t, e) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = e;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    const { el: { content: e }, parts: i } = this._$AD, s = ((t == null ? void 0 : t.creationScope) ?? b).importNode(e, !0);
    v.currentNode = s;
    let r = v.nextNode(), n = 0, l = 0, a = i[0];
    for (; a !== void 0; ) {
      if (n === a.index) {
        let c;
        a.type === 2 ? c = new H(r, r.nextSibling, this, t) : a.type === 1 ? c = new a.ctor(r, a.name, a.strings, this, t) : a.type === 6 && (c = new kt(r, this, t)), this._$AV.push(c), a = i[++l];
      }
      n !== (a == null ? void 0 : a.index) && (r = v.nextNode(), n++);
    }
    return v.currentNode = b, s;
  }
  p(t) {
    let e = 0;
    for (const i of this._$AV) i !== void 0 && (i.strings !== void 0 ? (i._$AI(t, i, e), e += i.strings.length - 2) : i._$AI(t[e])), e++;
  }
}
class H {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
  }
  constructor(t, e, i, s) {
    this.type = 2, this._$AH = d, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = i, this.options = s, this._$Cv = (s == null ? void 0 : s.isConnected) ?? !0;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const e = this._$AM;
    return e !== void 0 && (t == null ? void 0 : t.nodeType) === 11 && (t = e.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, e = this) {
    t = C(this, t, e), T(t) ? t === d || t == null || t === "" ? (this._$AH !== d && this._$AR(), this._$AH = d) : t !== this._$AH && t !== x && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : wt(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== d && T(this._$AH) ? this._$AA.nextSibling.data = t : this.T(b.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var r;
    const { values: e, _$litType$: i } = t, s = typeof i == "number" ? this._$AC(t) : (i.el === void 0 && (i.el = R.createElement(dt(i.h, i.h[0]), this.options)), i);
    if (((r = this._$AH) == null ? void 0 : r._$AD) === s) this._$AH.p(e);
    else {
      const n = new Ct(s, this), l = n.u(this.options);
      n.p(e), this.T(l), this._$AH = n;
    }
  }
  _$AC(t) {
    let e = nt.get(t.strings);
    return e === void 0 && nt.set(t.strings, e = new R(t)), e;
  }
  k(t) {
    Z(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let i, s = 0;
    for (const r of t) s === e.length ? e.push(i = new H(this.O(U()), this.O(U()), this, this.options)) : i = e[s], i._$AI(r), s++;
    s < e.length && (this._$AR(i && i._$AB.nextSibling, s), e.length = s);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var i;
    for ((i = this._$AP) == null ? void 0 : i.call(this, !1, !0, e); t !== this._$AB; ) {
      const s = t.nextSibling;
      t.remove(), t = s;
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 && (this._$Cv = t, (e = this._$AP) == null || e.call(this, t));
  }
}
class j {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, i, s, r) {
    this.type = 1, this._$AH = d, this._$AN = void 0, this.element = t, this.name = e, this._$AM = s, this.options = r, i.length > 2 || i[0] !== "" || i[1] !== "" ? (this._$AH = Array(i.length - 1).fill(new String()), this.strings = i) : this._$AH = d;
  }
  _$AI(t, e = this, i, s) {
    const r = this.strings;
    let n = !1;
    if (r === void 0) t = C(this, t, e, 0), n = !T(t) || t !== this._$AH && t !== x, n && (this._$AH = t);
    else {
      const l = t;
      let a, c;
      for (t = r[0], a = 0; a < r.length - 1; a++) c = C(this, l[i + a], e, a), c === x && (c = this._$AH[a]), n || (n = !T(c) || c !== this._$AH[a]), c === d ? t = d : t !== d && (t += (c ?? "") + r[a + 1]), this._$AH[a] = c;
    }
    n && !s && this.j(t);
  }
  j(t) {
    t === d ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class Mt extends j {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === d ? void 0 : t;
  }
}
class Pt extends j {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== d);
  }
}
class Ot extends j {
  constructor(t, e, i, s, r) {
    super(t, e, i, s, r), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = C(this, t, e, 0) ?? d) === x) return;
    const i = this._$AH, s = t === d && i !== d || t.capture !== i.capture || t.once !== i.once || t.passive !== i.passive, r = t !== d && (i === d || s);
    s && this.element.removeEventListener(this.name, this, i), r && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e;
    typeof this._$AH == "function" ? this._$AH.call(((e = this.options) == null ? void 0 : e.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class kt {
  constructor(t, e, i) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = i;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    C(this, t);
  }
}
const q = k.litHtmlPolyfillSupport;
q == null || q(R, H), (k.litHtmlVersions ?? (k.litHtmlVersions = [])).push("3.3.1");
const Ut = (o, t, e) => {
  const i = (e == null ? void 0 : e.renderBefore) ?? t;
  let s = i._$litPart$;
  if (s === void 0) {
    const r = (e == null ? void 0 : e.renderBefore) ?? null;
    i._$litPart$ = s = new H(t.insertBefore(U(), r), r, void 0, e ?? {});
  }
  return s._$AI(o), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const A = globalThis;
class S extends w {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var e;
    const t = super.createRenderRoot();
    return (e = this.renderOptions).renderBefore ?? (e.renderBefore = t.firstChild), t;
  }
  update(t) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = Ut(e, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t;
    super.connectedCallback(), (t = this._$Do) == null || t.setConnected(!0);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(), (t = this._$Do) == null || t.setConnected(!1);
  }
  render() {
    return x;
  }
}
var rt;
S._$litElement$ = !0, S.finalized = !0, (rt = A.litElementHydrateSupport) == null || rt.call(A, { LitElement: S });
const B = A.litElementPolyfillSupport;
B == null || B({ LitElement: S });
(A.litElementVersions ?? (A.litElementVersions = [])).push("4.2.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Tt = (o) => (t, e) => {
  e !== void 0 ? e.addInitializer(() => {
    customElements.define(o, t);
  }) : customElements.define(o, t);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Rt = { attribute: !0, type: String, converter: z, reflect: !1, hasChanged: J }, Ht = (o = Rt, t, e) => {
  const { kind: i, metadata: s } = e;
  let r = globalThis.litPropertyMetadata.get(s);
  if (r === void 0 && globalThis.litPropertyMetadata.set(s, r = /* @__PURE__ */ new Map()), i === "setter" && ((o = Object.create(o)).wrapped = !0), r.set(e.name, o), i === "accessor") {
    const { name: n } = e;
    return { set(l) {
      const a = t.get.call(this);
      t.set.call(this, l), this.requestUpdate(n, a, o);
    }, init(l) {
      return l !== void 0 && this.C(n, void 0, o, l), l;
    } };
  }
  if (i === "setter") {
    const { name: n } = e;
    return function(l) {
      const a = this[n];
      t.call(this, l), this.requestUpdate(n, a, o);
    };
  }
  throw Error("Unsupported decorator location: " + i);
};
function Nt(o) {
  return (t, e) => typeof e == "object" ? Ht(o, t, e) : ((i, s, r) => {
    const n = s.hasOwnProperty(r);
    return s.constructor.createProperty(r, i), n ? Object.getOwnPropertyDescriptor(s, r) : void 0;
  })(o, t, e);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function E(o) {
  return Nt({ ...o, state: !0, attribute: !1 });
}
var Dt = Object.defineProperty, zt = Object.getOwnPropertyDescriptor, _ = (o, t, e, i) => {
  for (var s = i > 1 ? void 0 : i ? zt(t, e) : t, r = o.length - 1, n; r >= 0; r--)
    (n = o[r]) && (s = (i ? n(t, e, s) : n(s)) || s);
  return i && s && Dt(t, e, s), s;
};
let u = class extends S {
  constructor() {
    super(...arguments), this.webex = null, this.meeting = null, this.webexInitialized = !1, this.agentInfo = null, this.currentTask = null, this.isMuted = !1, this.isVideoOff = !1;
  }
  // Lifecycle: Called when component is added to DOM
  connectedCallback() {
    super.connectedCallback(), this.initializeDesktopSDK();
  }
  // Lifecycle: Called when component is removed from DOM
  disconnectedCallback() {
    super.disconnectedCallback(), this.cleanup();
  }
  // Initialize Webex Contact Center Desktop SDK
  async initializeDesktopSDK() {
    var o;
    try {
      await M.init(), console.log("Desktop SDK initialized");
      const t = (o = M.agentStateInfo) == null ? void 0 : o.latestData;
      this.agentInfo = t, console.log("Agent Info:", t), M.agentContact.addEventListener((e) => {
        console.log("Agent Contact Event:", e), this.handleContactEvent(e);
      });
      try {
        const e = await M.actions.getTaskMap();
        console.log("Current Tasks:", e);
      } catch (e) {
        console.log("No current tasks:", e);
      }
    } catch (t) {
      console.error("Error initializing Desktop SDK:", t);
    }
  }
  // Initialize Webex Meetings SDK
  async initializeWebex() {
    try {
      const o = await M.actions.getAccessToken();
      this.webex = await pt.init({
        credentials: {
          access_token: o
        }
      }), await this.webex.meetings.register(), console.log("Webex SDK initialized and registered"), this.webexInitialized = !0;
    } catch (o) {
      console.error("Error initializing Webex:", o);
    }
  }
  // Handle contact center events
  async handleContactEvent(o) {
    switch (console.log("Contact Event Type:", o.type), o.type) {
      case "OFFERED":
        console.log("Call offered:", o.data), this.currentTask = o.data;
        break;
      case "CONNECTED":
        console.log("Call connected, joining video..."), await this.joinVideoMeeting(o.data);
        break;
      case "ENDED":
        console.log("Call ended"), await this.leaveMeeting();
        break;
    }
  }
  // Join a video meeting
  async joinVideoMeeting(o) {
    try {
      this.webex || await this.initializeWebex();
      const t = o.destination || o.callerId || "test@example.com";
      this.meeting = await this.webex.meetings.create(t), await this.meeting.join({
        enableMultistream: !1,
        moderator: !1
      });
      const e = await this.meeting.getMediaStreams({
        sendAudio: !0,
        sendVideo: !0,
        receiveAudio: !0,
        receiveVideo: !0
      });
      await this.meeting.addMedia({
        localStream: e,
        mediaSettings: {
          receiveVideo: !0,
          receiveAudio: !0,
          receiveShare: !1,
          sendVideo: !0,
          sendAudio: !0,
          sendShare: !1
        }
      }), this.meeting.on("media:ready", (i) => {
        this.attachMediaStream(i);
      }), this.meeting.on("meeting:participantJoined", (i) => {
        console.log("Participant joined:", i);
      }), console.log("Successfully joined video meeting"), this.requestUpdate();
    } catch (t) {
      console.error("Error joining video meeting:", t);
    }
  }
  // Attach media streams to video elements
  attachMediaStream(o) {
    setTimeout(() => {
      var i, s;
      const t = (i = this.shadowRoot) == null ? void 0 : i.querySelector("#local-video"), e = (s = this.shadowRoot) == null ? void 0 : s.querySelector("#remote-video");
      o.type === "local" && t ? (t.srcObject = o.stream, console.log("Local video attached")) : o.type === "remoteVideo" && e && (e.srcObject = o.stream, console.log("Remote video attached"));
    }, 100);
  }
  // Leave the current meeting
  async leaveMeeting() {
    try {
      this.meeting && (await this.meeting.leave(), this.meeting = null, this.isMuted = !1, this.isVideoOff = !1, this.requestUpdate());
    } catch (o) {
      console.error("Error leaving meeting:", o);
    }
  }
  // Toggle mute/unmute
  async toggleMute() {
    if (this.meeting)
      try {
        this.isMuted ? (await this.meeting.unmuteAudio(), this.isMuted = !1) : (await this.meeting.muteAudio(), this.isMuted = !0), this.requestUpdate();
      } catch (o) {
        console.error("Error toggling mute:", o);
      }
  }
  // Toggle video on/off
  async toggleVideo() {
    if (this.meeting)
      try {
        this.isVideoOff ? (await this.meeting.unmuteVideo(), this.isVideoOff = !1) : (await this.meeting.muteVideo(), this.isVideoOff = !0), this.requestUpdate();
      } catch (o) {
        console.error("Error toggling video:", o);
      }
  }
  // Cleanup when component is removed
  async cleanup() {
    this.meeting && await this.leaveMeeting();
  }
  // Render the component
  render() {
    var o;
    return W`
      <div class="video-container">
        ${this.meeting ? W`
          <div class="status">
            Connected to: ${((o = this.currentTask) == null ? void 0 : o.callerId) || "Customer"}
          </div>
          <div class="video-grid">
            <video id="remote-video" autoplay playsinline></video>
            <video id="local-video" autoplay muted playsinline></video>
          </div>
          <div class="controls">
            <button class="btn-primary" @click=${this.toggleMute}>
              ${this.isMuted ? "🔇 Unmute" : "🔊 Mute"}
            </button>
            <button class="btn-primary" @click=${this.toggleVideo}>
              ${this.isVideoOff ? "📹 Start Video" : "🚫 Stop Video"}
            </button>
            <button class="btn-danger" @click=${this.leaveMeeting}>
              ❌ End Call
            </button>
          </div>
        ` : W`
          <div class="waiting">
            <p>🎥 Video Widget Ready</p>
            <p style="font-size: 14px; color: #888;">
              ${this.webexInitialized ? "Waiting for incoming call..." : "Initializing Webex..."}
            </p>
          </div>
        `}
      </div>
    `;
  }
};
u.shadowRootOptions = { ...S.shadowRootOptions, mode: "open" };
u.styles = ft`
    :host {
      display: block;
      width: 100%;
      height: 100%;
      font-family: 'CiscoSansTT', Arial, sans-serif;
    }

    .video-container {
      display: flex;
      flex-direction: column;
      height: 100%;
      background: #000;
      position: relative;
    }

    .video-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      padding: 10px;
      flex: 1;
    }

    .video-single {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
      flex: 1;
    }

    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 8px;
      background: #1a1a1a;
    }

    .controls {
      display: flex;
      justify-content: center;
      gap: 15px;
      padding: 20px;
      background: rgba(0, 0, 0, 0.8);
    }

    button {
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
      font-weight: 600;
      transition: background-color 0.3s;
    }

    .btn-primary {
      background: #007aa3;
      color: white;
    }

    .btn-primary:hover {
      background: #005a7a;
    }

    .btn-danger {
      background: #d32f2f;
      color: white;
    }

    .btn-danger:hover {
      background: #9a0007;
    }

    .status {
      padding: 10px;
      text-align: center;
      background: #1a1a1a;
      color: #fff;
      font-size: 14px;
    }

    .waiting {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      color: #fff;
      font-size: 18px;
      gap: 20px;
    }

    .error {
      color: #ff6b6b;
      padding: 20px;
      text-align: center;
    }
  `;
_([
  E()
], u.prototype, "webex", 2);
_([
  E()
], u.prototype, "meeting", 2);
_([
  E()
], u.prototype, "webexInitialized", 2);
_([
  E()
], u.prototype, "agentInfo", 2);
_([
  E()
], u.prototype, "currentTask", 2);
_([
  E()
], u.prototype, "isMuted", 2);
_([
  E()
], u.prototype, "isVideoOff", 2);
u = _([
  Tt("webex-video-widget")
], u);
export {
  u as WebexVideoWidget
};
