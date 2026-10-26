// OPH Med tab: kiosk-style picker (same flow as the ORNGLOCK order tab).
// Category -> condition -> tap meds into an Rx list -> copy. "?" opens the notes (condition first, then drug background).
(function () {
  var TYPE_INFO = { d: ["💧", "Drops / ointment"], o: ["💊", "Oral / systemic"], i: ["💉", "Injection / intravitreal"], p: ["⚙️", "Procedure / other"] };
  var WHY_HEADING = { d: "When / why", o: "When / why", i: "When / why", p: "Why" };
  var RECENT_KEY = "cgmh_ophmed_recent_v1";
  var view = { cat: null, item: null, query: "" };
  var tray = new Map(); // key -> {item, text}
  var root;

  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  // Notes allow **bold** and *italic* only; everything else is escaped.
  function rich(s) { return esc(s).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>").replace(/\*(.+?)\*/g, "<i>$1</i>"); }
  function norm(s) { return String(s).normalize("NFKC").toLowerCase(); }
  function catIndex(slug) { for (var i = 0; i < OPHMED_MENU.length; i++) if (OPHMED_MENU[i].slug === slug) return i; return -1; }
  function medKey(c, i, m) { return OPHMED_MENU[c].slug + ":" + i + ":" + m; }
  function medLine(med) { return med[1]; }

  // Recently opened conditions: per-device convenience, storage may be unavailable.
  function loadRecent() {
    try {
      return JSON.parse(localStorage.getItem(RECENT_KEY) || "[]").map(function (e) {
        var c = catIndex(e[0]); if (c < 0) return null;
        var i = OPHMED_MENU[c].items.findIndex(function (it) { return it.name === e[1]; });
        return i < 0 ? null : { cat: c, item: i };
      }).filter(Boolean);
    } catch (e) { return []; }
  }
  function rememberRecent(c, i) {
    var entry = [OPHMED_MENU[c].slug, OPHMED_MENU[c].items[i].name];
    var list = loadRecent().map(function (r) { return [OPHMED_MENU[r.cat].slug, OPHMED_MENU[r.cat].items[r.item].name]; })
      .filter(function (e) { return e[0] !== entry[0] || e[1] !== entry[1]; });
    try { localStorage.setItem(RECENT_KEY, JSON.stringify([entry].concat(list).slice(0, 6))); } catch (e) {}
  }

  function tile(cls, attrs, icon, label, sub) {
    return '<button class="' + cls + '" type="button" ' + attrs + '><span class="om-tile-icon" aria-hidden="true">' + icon + '</span><span class="om-tile-name">' + esc(label) + (sub ? "<small>" + esc(sub) + "</small>" : "") + "</span></button>";
  }

  function homeView() {
    var recent = loadRecent();
    var h = '<h1 class="om-title" tabindex="-1">💊 OPH Med</h1><p class="om-hint">Pick a condition → tap the meds you want into the Rx list → copy. Tap <b>?</b> for why, doses, trials and drug background.</p>';
    if (recent.length) h += '<section class="om-section"><h2>🕘 Recent</h2><div class="om-chips">' + recent.map(function (r) {
      return '<button class="om-chip" type="button" data-om="item" data-cat="' + r.cat + '" data-index="' + r.item + '">' + esc(OPHMED_MENU[r.cat].items[r.item].name) + "</button>";
    }).join("") + "</div></section>";
    h += '<section class="om-section"><h2>⭐ Quick open</h2><div class="om-grid">' + OPHMED_HOME.hot.map(function (t) {
      return tile("om-tile om-tile-hot", 'data-om="item" data-cat="' + catIndex(t.slug) + '" data-index="' + t.item + '"', t.icon, t.label, t.sub);
    }).join("") + "</div></section>";
    h += '<section class="om-section"><h2>By category</h2><div class="om-grid">' + OPHMED_MENU.map(function (c, ci) {
      return tile("om-tile", 'data-om="cat" data-cat="' + ci + '"', c.icon, c.title, c.blurb);
    }).join("") + "</div></section>";
    h += '<p class="om-disclaim">Teaching summary — check doses, renal/hepatic adjustment, allergies, the current label and Taiwan NHI criteria before prescribing.</p>';
    return h;
  }

  function catView(ci) {
    var c = OPHMED_MENU[ci];
    return '<button class="om-back" type="button" data-om="home">‹ Home</button>'
      + '<h1 class="om-title" tabindex="-1">' + c.icon + " " + esc(c.title) + "</h1>"
      + '<div class="om-list">' + c.items.map(function (it, i) {
        return '<button class="om-item" type="button" data-om="item" data-cat="' + ci + '" data-index="' + i + '"><span class="om-item-name">' + esc(it.name) + "</span>"
          + (it.hint ? '<span class="om-item-hint">' + esc(it.hint) + "</span>" : "") + '<span class="om-item-arrow" aria-hidden="true">›</span></button>';
      }).join("") + "</div>";
  }

  function itemView(ci, ii) {
    var c = OPHMED_MENU[ci], it = c.items[ii];
    // Groups follow the order the condition lists them (retina pages lead with injections).
    var types = [];
    it.meds.forEach(function (m) { if (types.indexOf(m[0]) < 0) types.push(m[0]); });
    var groups = types.map(function (type) {
      var rows = it.meds.map(function (m, mi) { return [m, mi]; }).filter(function (r) { return r[0][0] === type; });
      if (!rows.length) return "";
      return '<section class="om-group om-type-' + type + '"><h2>' + TYPE_INFO[type][0] + " " + TYPE_INFO[type][1] + "</h2>" + rows.map(function (r) {
        var m = r[0], mi = r[1], key = medKey(ci, ii, mi), picked = tray.has(key);
        var hasWhy = m[2] || (m[4] && OPHMED_DRUGS[m[4]]);
        return '<div class="om-order' + (picked ? " picked" : "") + '">'
          + '<button class="om-pick" type="button" data-om="pick" data-key="' + key + '" data-index="' + mi + '" aria-pressed="' + picked + '"><span class="om-check" aria-hidden="true">' + (picked ? "✓" : "+") + '</span><span class="om-order-text">' + esc(m[1]) + (m[3] ? '<em class="om-when">' + esc(m[3]) + "</em>" : "") + "</span></button>"
          + (hasWhy ? '<button class="om-why" type="button" data-om="why" data-index="' + mi + '" aria-label="Notes: ' + esc(m[1]) + '" aria-expanded="false">?</button>' : "")
          + "</div>";
      }).join("") + "</section>";
    }).join("");
    return '<button class="om-back" type="button" data-om="cat" data-cat="' + ci + '">‹ ' + esc(c.title) + "</button>"
      + '<h1 class="om-title" tabindex="-1">' + esc(it.name) + "</h1>"
      + (it.hint ? '<p class="om-hint">' + esc(it.hint) + "</p>" : "")
      + (it.note ? '<details class="om-note" open><summary>📖 Background</summary><div class="om-note-body">' + it.note + "</div></details>" : "")
      + groups;
  }

  function searchView() {
    var q = norm(view.query.trim()), terms = q.split(/\s+/).filter(Boolean), hits = [];
    OPHMED_MENU.forEach(function (c, ci) {
      c.items.forEach(function (it, ii) {
        var hay = norm([c.title, it.name, it.hint || ""].concat(it.meds.map(function (m) {
          var d = m[4] && OPHMED_DRUGS[m[4]];
          return m[1] + " " + (m[2] || "") + " " + (d ? d.name : "");
        })).join(" "));
        if (terms.every(function (t) { return hay.indexOf(t) >= 0; })) {
          var named = norm(it.name).indexOf(q) >= 0 ? 0 : 1;
          hits.push([named, ci, ii]);
        }
      });
    });
    hits.sort(function (a, b) { return a[0] - b[0]; });
    var refHits = refCount(view.query.trim());
    var ref = refHits ? '<p class="om-hint" style="margin-top:14px">Also in the reference tables: <button class="om-chip" type="button" data-om="ref">📚 ' + refHits + " section" + (refHits > 1 ? "s" : "") + " ›</button></p>" : "";
    if (!hits.length) return '<h1 class="om-title" tabindex="-1">Nothing for “' + esc(view.query) + '”</h1><p class="om-hint">Try a drug, class or condition (e.g. “timolol”, “PGA”, “uveitis”). Esc clears.</p>' + ref;
    return '<h1 class="om-title" tabindex="-1">Results · ' + hits.length + "</h1>"
      + '<div class="om-list">' + hits.map(function (h) {
        var c = OPHMED_MENU[h[1]], it = c.items[h[2]];
        return '<button class="om-item" type="button" data-om="item" data-cat="' + h[1] + '" data-index="' + h[2] + '"><span class="om-item-name">' + esc(it.name) + '</span><span class="om-item-hint">' + c.icon + " " + esc(c.title) + (it.hint ? " · " + esc(it.hint) : "") + '</span><span class="om-item-arrow" aria-hidden="true">›</span></button>';
      }).join("") + "</div>" + ref;
  }

  // The old reference tables (Taiwan formulary, glaucoma therapy, drug toxicity…) live below in #ophmed-list.
  function refCount(q) {
    var list = document.getElementById("ophmed-list"); if (!list || !q) return 0;
    q = q.toLowerCase();
    return Array.prototype.filter.call(list.querySelectorAll("details.subguide"), function (d) { return d.textContent.toLowerCase().indexOf(q) >= 0; }).length;
  }
  // From search results: back to home (where the tables are shown), filtered to the same words.
  function openRef() {
    var q = view.query.trim(), box = document.getElementById("om-ref"), input = document.getElementById("ophmed-search");
    go(null);
    box.open = true;
    if (input) { input.value = q; if (typeof ophmedFilter === "function") ophmedFilter(); }
    box.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function render() {
    var body = root.querySelector(".om-body");
    body.innerHTML = view.query.trim() ? searchView() : view.cat !== null && view.item !== null ? itemView(view.cat, view.item) : view.cat !== null ? catView(view.cat) : homeView();
    root.querySelector(".om-fab-back").hidden = view.cat === null && !view.query.trim();
    // Reference tables only on the home screen, so condition pages stay short.
    document.getElementById("om-ref").hidden = view.cat !== null || !!view.query.trim();
    updateCounts();
  }

  function go(cat, item) {
    hideWhy();
    view.cat = cat; view.item = item === undefined ? null : item; view.query = "";
    root.querySelector("#om-search").value = "";
    if (view.item !== null) rememberRecent(cat, view.item);
    render();
    var top = root.getBoundingClientRect().top + scrollY - 60;
    if (scrollY > top) scrollTo({ top: Math.max(0, top) });
    var t = root.querySelector(".om-title"); if (t) t.focus({ preventScroll: true });
  }

  function currentItem() { return OPHMED_MENU[view.cat].items[view.item]; }

  function togglePick(btn) {
    var it = currentItem(), med = it.meds[Number(btn.dataset.index)], key = btn.dataset.key;
    if (tray.has(key)) tray.delete(key); else tray.set(key, { item: it.name, text: medLine(med) });
    var picked = tray.has(key);
    btn.setAttribute("aria-pressed", String(picked));
    btn.closest(".om-order").classList.toggle("picked", picked);
    btn.querySelector(".om-check").textContent = picked ? "✓" : "+";
    updateCounts();
  }

  function updateCounts() {
    root.querySelectorAll(".om-tray-btn b").forEach(function (n) { n.textContent = tray.size; });
    root.querySelectorAll(".om-tray-btn").forEach(function (n) { n.setAttribute("aria-label", "Rx list, " + tray.size + " items"); });
  }

  function showWhy(btn) {
    var pop = root.querySelector(".om-pop");
    if (pop.dataset.for === btn.dataset.index && !pop.hidden) return hideWhy();
    hideWhy();
    var med = currentItem().meds[Number(btn.dataset.index)], h = "";
    if (med[2]) h += '<strong class="om-pop-h">' + WHY_HEADING[med[0]] + "</strong>" + med[2].split("｜").map(function (l) { return "<span>" + rich(l) + "</span>"; }).join("");
    var d = med[4] && OPHMED_DRUGS[med[4]];
    if (d) {
      h += '<strong class="om-pop-h">About the drug — ' + esc(d.name) + "</strong>";
      d.sec.forEach(function (s) { h += '<span class="om-pop-k">' + esc(s[0]) + "</span>" + s.slice(1).map(function (l) { return "<span>" + rich(l) + "</span>"; }).join(""); });
    }
    pop.innerHTML = h;
    pop.dataset.for = btn.dataset.index; pop.hidden = false;
    btn.setAttribute("aria-expanded", "true");
    var box = btn.getBoundingClientRect(), width = Math.min(d ? 520 : 380, innerWidth - 24);
    pop.style.width = width + "px";
    pop.style.left = Math.max(12, Math.min(box.right - width, innerWidth - width - 12)) + scrollX + "px";
    var height = pop.offsetHeight, below = box.bottom + 8;
    var top = below + height > innerHeight - 12 ? Math.max(60, box.top - height - 8) : below;
    pop.style.top = top + scrollY + "px";
  }
  function hideWhy() {
    var pop = root && root.querySelector(".om-pop"); if (!pop || pop.hidden) return;
    pop.hidden = true;
    var b = root.querySelector('.om-why[data-index="' + pop.dataset.for + '"]'); if (b) b.setAttribute("aria-expanded", "false");
  }

  function trayText() {
    var by = new Map();
    tray.forEach(function (v) { if (!by.has(v.item)) by.set(v.item, []); by.get(v.item).push(v.text); });
    return Array.from(by).map(function (e) { return "【" + e[0] + "】\n" + e[1].map(function (l) { return "- " + l; }).join("\n"); }).join("\n\n");
  }
  function renderTray() {
    var dlg = root.querySelector(".om-tray");
    dlg.querySelector(".om-tray-list").innerHTML = tray.size ? Array.from(tray).map(function (e) {
      return "<li><span><small>" + esc(e[1].item) + "</small>" + esc(e[1].text) + '</span><button type="button" class="om-remove" data-om="remove" data-key="' + e[0] + '" aria-label="Remove ' + esc(e[1].text) + '">×</button></li>';
    }).join("") : '<li class="om-empty">Nothing picked yet.</li>';
    dlg.querySelector('[data-om="copy"]').disabled = !tray.size;
    dlg.querySelector('[data-om="clear"]').disabled = !tray.size;
  }
  function copy(text) {
    var done = function () { if (typeof toast === "function") toast("Copied Rx list"); };
    if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(text).then(done, fallback); else fallback();
    function fallback() { var t = document.createElement("textarea"); t.value = text; document.body.appendChild(t); t.select(); try { document.execCommand("copy"); done(); } catch (e) {} t.remove(); }
  }

  // Esc / floating back: popup, then search, then condition, then category.
  function goBack() {
    var pop = root.querySelector(".om-pop");
    if (!pop.hidden) return hideWhy();
    if (view.query.trim()) { view.query = ""; root.querySelector("#om-search").value = ""; return render(); }
    if (view.item !== null) return go(view.cat);
    if (view.cat !== null) go(null);
  }

  function onClick(e) {
    var t = e.target.closest("[data-om]");
    if (!t || !root.contains(t)) { if (!e.target.closest(".om-pop")) hideWhy(); return; }
    var a = t.dataset.om;
    if (a !== "why") hideWhy();
    if (a === "back") goBack();
    else if (a === "home") go(null);
    else if (a === "cat") go(Number(t.dataset.cat));
    else if (a === "item") go(Number(t.dataset.cat), Number(t.dataset.index));
    else if (a === "pick") togglePick(t);
    else if (a === "why") showWhy(t);
    else if (a === "ref") openRef();
    else if (a === "tray") { renderTray(); root.querySelector(".om-tray").showModal(); }
    else if (a === "close") root.querySelector(".om-tray").close();
    else if (a === "remove") { tray.delete(t.dataset.key); renderTray(); render(); }
    else if (a === "clear") { tray.clear(); renderTray(); render(); }
    else if (a === "copy") copy(trayText());
  }
  function init() {
    root = document.getElementById("om");
    if (!root || typeof OPHMED_MENU === "undefined") return;
    root.innerHTML = '<div class="om-top">'
      + '<label class="om-search"><span aria-hidden="true">⌕</span><input id="om-search" type="search" placeholder="Search condition or drug: uveitis, timolol, faricimab…" autocomplete="off" spellcheck="false" aria-label="Search condition or drug"></label>'
      + '<button class="om-tray-btn" type="button" data-om="tray" aria-label="Rx list, 0 items">🧾<span class="om-tray-label"> Rx list</span> <b>0</b></button></div>'
      + '<div class="om-body"></div><div class="om-pop" role="tooltip" hidden></div>'
      + '<button class="om-fab-back" type="button" data-om="back" aria-label="Back" hidden>‹ Back</button>'
      + '<dialog class="om-tray" aria-labelledby="om-tray-title"><div class="om-tray-head"><h2 id="om-tray-title">🧾 Rx list</h2><button class="om-big" type="button" data-om="close" aria-label="Close">×</button></div>'
      + '<ul class="om-tray-list"></ul><div class="om-tray-actions"><button class="om-big om-primary" type="button" data-om="copy">📋 Copy all</button><button class="om-big" type="button" data-om="clear">Clear</button></div></dialog>';
    root.addEventListener("input", function (e) { if (e.target.id !== "om-search") return; view.query = e.target.value; hideWhy(); render(); });
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", function (e) {
      var tab = document.getElementById("tab-ophmed");
      if (e.key !== "Escape" || !tab || !tab.classList.contains("active") || root.querySelector(".om-tray").open) return;
      e.preventDefault(); goBack();
    });
    addEventListener("resize", hideWhy);
    render();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
