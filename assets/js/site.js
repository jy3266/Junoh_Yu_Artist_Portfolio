/* ==========================================================================
   Junoh Yu — site behaviour: i18n, grids, lightbox
   ========================================================================== */

(function () {
  "use strict";

  var S = window.SITE;
  var STORE_KEY = "jy-lang";
  var lang = "ko";

  /* ------------------------------------------------------------ helpers */

  function t(key) {
    var e = S.ui[key];
    return e ? e[lang] : key;
  }

  /** Field may be a plain string or a {ko, en} object. */
  function f(value) {
    if (value == null) return "";
    return typeof value === "string" ? value : value[lang] || value.en || "";
  }

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  function imgPath(slug, n) {
    return "assets/img/works/" + slug + "/" + (n < 10 ? "0" + n : n) + ".jpg";
  }

  function coverPath(w) {
    return imgPath(w.slug, w.cover || 1);
  }

  function worksIn(cat) {
    return S.works.filter(function (w) { return w.cat === cat; });
  }

  /* ------------------------------------------------------------ language */

  function readStoredLang() {
    try {
      var v = localStorage.getItem(STORE_KEY);
      if (v === "ko" || v === "en") return v;
    } catch (e) { /* private mode */ }
    var nav = (navigator.language || "").toLowerCase();
    return nav.indexOf("ko") === 0 ? "ko" : "en";
  }

  function storeLang(v) {
    try { localStorage.setItem(STORE_KEY, v); } catch (e) { /* ignore */ }
  }

  function applyLang() {
    document.documentElement.setAttribute("lang", lang);

    document.querySelectorAll("[data-i18n]").forEach(function (n) {
      n.textContent = t(n.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-label]").forEach(function (n) {
      n.setAttribute("aria-label", t(n.getAttribute("data-i18n-label")));
    });

    document.querySelectorAll(".lang button").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
    });

    render();
  }

  function setLang(v) {
    if (v === lang) return;
    lang = v;
    storeLang(v);
    applyLang();
  }

  /* -------------------------------------------------------------- render */

  function render() {
    renderTitle();
    renderCategories();
    renderGrids();
    renderTeaching();
    renderArchive();
    renderBio();
    renderCV();
    if (lb.open && lb.work) lb.refresh();
    observeReveals();
  }

  function renderTitle() {
    var key = document.body.dataset.titleKey;
    if (!key) return;
    var base = lang === "ko" ? "유준오" : "Junoh Yu";
    document.title = key === "home" ? base + (lang === "ko" ? " — 시각 및 설치 작가" : " — Visual & Installation Artist")
                                    : t(key) + " · " + base;
  }

  function renderCategories() {
    var host = document.querySelector("[data-categories]");
    if (!host) return;
    host.innerHTML = "";

    S.categories.forEach(function (c, i) {
      var a = el("a", "cat-card");
      a.href = c.page;
      a.appendChild(el("span", "n", String(i + 1).padStart(2, "0") + " / " + c.range));
      a.appendChild(el("h3", null, c.label[lang]));
      a.appendChild(el("p", null, t("cat." + c.id + ".desc")));
      a.appendChild(el("span", "go", t("home.viewall")));
      host.appendChild(a);
    });
  }

  function makeCard(w) {
    var a = el("a", "card reveal");
    a.href = "#" + w.slug;
    a.setAttribute("role", "button");

    var media = el("div", "card-media");
    var img = el("img");
    img.src = coverPath(w);
    img.alt = f(w.title);
    img.loading = "lazy";
    img.decoding = "async";
    media.appendChild(img);

    if (w.images > 1) {
      media.appendChild(el("span", "card-count", w.images + (lang === "ko" ? "장" : " images")));
    }
    a.appendChild(media);

    var body = el("div", "card-body");
    body.appendChild(el("h3", "card-title", f(w.title)));

    var meta = [w.year];
    if (w.dimensions) meta.push(f(w.dimensions));
    body.appendChild(el("p", "card-meta", meta.join("  ·  ")));
    a.appendChild(body);

    a.addEventListener("click", function (ev) {
      ev.preventDefault();
      lb.show(w, 1);
    });

    return a;
  }

  function renderGrids() {
    document.querySelectorAll("[data-grid]").forEach(function (host) {
      var list;
      var catAttr = host.getAttribute("data-grid");

      if (catAttr === "selected") {
        var picks = ["a-weather-within", "breathe-again", "interspecies-water-talk",
                     "liberated-memory", "experiential-cycle", "rebreathe-v2"];
        list = picks.map(function (s) {
          return S.works.filter(function (w) { return w.slug === s; })[0];
        }).filter(Boolean);
      } else {
        list = worksIn(catAttr);
      }

      host.innerHTML = "";
      list.forEach(function (w) { host.appendChild(makeCard(w)); });
    });
  }

  /** Photo panel that steps to the next image on each click. */
  function makePhotoPanel(photos, altText) {
    var slug = photos.slug;
    var count = photos.count;
    var path = function (n) {
      return "assets/img/teaching/" + slug + "/" + (n < 10 ? "0" + n : n) + ".jpg";
    };

    var wrap = el("div");

    var btn = el("button", "school-photo");
    btn.type = "button";

    var img = el("img");
    img.alt = altText;
    img.loading = "lazy";
    img.decoding = "async";

    /* a portrait image (an exhibition poster, say) is letterboxed rather
       than cropped to the landscape frame */
    img.addEventListener("load", function () {
      img.classList.toggle("is-portrait", img.naturalHeight > img.naturalWidth * 1.05);
    });
    img.src = path(1);
    btn.appendChild(img);

    var counter = el("span", "photo-count", "1 / " + count);
    btn.appendChild(counter);
    wrap.appendChild(btn);
    wrap.appendChild(el("p", "photo-cap", t("teaching.photocap")));

    /* preload the rest so the swap never flashes an empty frame */
    for (var n = 2; n <= count; n++) { new Image().src = path(n); }

    var index = 1;
    var busy = false;

    btn.addEventListener("click", function () {
      if (busy || count < 2) return;
      busy = true;
      index = index < count ? index + 1 : 1;

      btn.classList.add("is-swapping");
      setTimeout(function () {
        img.src = path(index);
        counter.textContent = index + " / " + count;
        btn.classList.remove("is-swapping");
        busy = false;
      }, 220);
    });

    return wrap;
  }

  /* the statement is long, so it stays folded away until asked for; the
     choice survives a language switch, which rebuilds the whole section */
  var statementOpen = false;

  /** The teaching statement, behind a disclosure its label opens. */
  function makeStatement(st) {
    var sec = el("section", "statement reveal");
    if (statementOpen) sec.classList.add("is-open");

    var btn = el("button", "statement-toggle");
    btn.type = "button";
    btn.id = "statement-toggle";
    btn.setAttribute("aria-expanded", String(statementOpen));
    btn.setAttribute("aria-controls", "statement-panel");
    btn.appendChild(el("span", "statement-label", f(st.label)));
    btn.appendChild(el("span", "statement-sign"));
    sec.appendChild(btn);

    btn.addEventListener("click", function () {
      statementOpen = sec.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", String(statementOpen));
    });

    var panel = el("div", "statement-panel");
    panel.id = "statement-panel";
    panel.setAttribute("role", "region");
    panel.setAttribute("aria-labelledby", "statement-toggle");

    var clip = el("div", "statement-clip");
    var body = el("div", "prose statement-body");

    st.blocks.forEach(function (b) {
      var v = f(b);

      if (b.t === "q") {
        var ul = el("ul", "statement-q");
        v.forEach(function (line) { ul.appendChild(el("li", null, line)); });
        body.appendChild(ul);
        return;
      }

      if (b.t === "pull") {
        var q = el("blockquote", "statement-pull");
        v.forEach(function (line) { q.appendChild(el("p", null, line)); });
        body.appendChild(q);
        return;
      }

      if (b.t === "chain") {
        body.appendChild(el("p", "statement-chain", v));
        return;
      }

      body.appendChild(el("p", b.t === "lead" ? "lead" : null, v));
    });

    clip.appendChild(body);
    panel.appendChild(clip);
    sec.appendChild(panel);
    return sec;
  }

  function renderTeaching() {
    var host = document.querySelector("[data-teaching]");
    if (!host) return;

    var T = S.teaching;
    host.innerHTML = "";

    if (T.statement) host.appendChild(makeStatement(T.statement));

    /* headline counts: 3 universities · 6 courses · 67 teams */
    var courseCount = 0;
    var teamCount = 0;
    T.schools.forEach(function (s) {
      courseCount += s.courses.length;
      s.courses.forEach(function (c) { teamCount += c.teams; });
    });

    var stats = el("div", "stat-row reveal");
    [[T.schools.length, "teaching.stats.schools"],
     [courseCount, "teaching.stats.courses"],
     [teamCount, "teaching.stats.teams"]].forEach(function (pair) {
      var s = el("div", "stat");
      s.appendChild(el("span", "stat-n", String(pair[0])));
      s.appendChild(el("span", "stat-l", t(pair[1])));
      stats.appendChild(s);
    });
    host.appendChild(stats);

    T.schools.forEach(function (school) {
      var block = el("section", "cv-block reveal");

      var head = el("div", "school-head");

      /* the name is a link when the school has a page of its own */
      var nameText = f(school.name);
      if (school.page) {
        var h3 = el("h3", "school-name");
        var link = el("a", "school-link");
        link.href = school.page;
        link.appendChild(document.createTextNode(nameText));
        link.appendChild(el("span", "arw", "\u2197"));
        h3.appendChild(link);
        head.appendChild(h3);
      } else {
        head.appendChild(el("h3", "school-name", nameText));
      }

      head.appendChild(el("p", "school-meta", [f(school.role), school.since].join("  ·  ")));
      block.appendChild(head);

      var body = el("div", "school-body");

      var left = el("div");
      if (school.photos) left.appendChild(makePhotoPanel(school.photos, f(school.name)));
      body.appendChild(left);

      var right = el("div");
      school.courses.forEach(function (c) {
        var row = el(school.page ? "a" : "div", "cv-row" + (school.page ? " cv-row-link" : ""));
        if (school.page) row.href = school.page + (c.tab ? "#" + c.tab : "");
        row.appendChild(el("span", "cv-year", c.teams + " " + t("teaching.teams")));

        var what = el("div", "cv-what");
        what.appendChild(document.createTextNode(f(c.title)));
        if (c.note) what.appendChild(el("small", null, f(c.note)));
        row.appendChild(what);

        right.appendChild(row);
      });

      if (school.page) {
        var open = el("a", "school-open");
        open.href = school.page;
        open.appendChild(document.createTextNode(t("teaching.open")));
        open.appendChild(el("span", "arw", "\u2192"));
        right.appendChild(open);
      }

      body.appendChild(right);

      block.appendChild(body);
      host.appendChild(block);
    });

    /* N.I.M.A exhibition */
    var ex = el("section", "cv-block reveal");

    var exHead = el("div", "school-head");
    var exTitle = el("h3", "school-name");
    var exLink = el("a", "school-link");
    exLink.href = "teaching-skku.html#nima";
    exLink.appendChild(document.createTextNode(t("teaching.exhibition.title")));
    exLink.appendChild(el("span", "arw", "↗"));
    exTitle.appendChild(exLink);
    exHead.appendChild(exTitle);
    exHead.appendChild(el("p", "school-meta", t("teaching.exhibition.sub")));
    ex.appendChild(exHead);

    var exBody = el("div", "school-body");

    var exLeft = el("div");
    if (T.exhibitionPhotos) {
      exLeft.appendChild(makePhotoPanel(T.exhibitionPhotos, t("teaching.exhibition.title")));
    }
    exBody.appendChild(exLeft);

    var exText = el("div");
    var intro = el("div", "prose");
    intro.appendChild(el("p", null, t("teaching.exhibition.desc")));
    exText.appendChild(intro);

    var E = T.exhibition;
    if (E) {
      var meta = el("dl", "ex-meta");
      [["teaching.ex.venue", E.venue],
       ["teaching.ex.curated", E.curated],
       ["teaching.ex.support", E.support],
       ["teaching.ex.scale", E.scale]].forEach(function (pair) {
        if (!pair[1]) return;
        meta.appendChild(el("dt", null, t(pair[0])));
        meta.appendChild(el("dd", null, f(pair[1])));
      });
      exText.appendChild(meta);
    }
    exBody.appendChild(exText);

    ex.appendChild(exBody);

    /* the ten works, full width under the photo and the details */
    if (E && E.works && E.works.length) {
      var worksWrap = el("div", "ex-works-wrap");
      worksWrap.appendChild(el("h4", "ex-works-title", t("teaching.ex.works")));

      var list = el("ol", "ex-works");
      E.works.forEach(function (w) {
        var li = el("li");
        li.appendChild(el("span", "w-title", f(w.title)));
        li.appendChild(el("span", "w-credit", f(w.credit)));
        list.appendChild(li);
      });
      worksWrap.appendChild(list);
      worksWrap.appendChild(el("p", "note", t("teaching.ex.source")));
      ex.appendChild(worksWrap);
    }

    host.appendChild(ex);

    /* link out to the full archive */
    var row = el("div", "btn-row reveal");
    var a = el("a", "btn", t("teaching.archive") + "  ↗");
    a.href = T.archive;
    a.target = "_blank";
    a.rel = "noopener";
    row.appendChild(a);
    var cvLink = el("a", "btn", t("nav.cv"));
    cvLink.href = "about.html#cv";
    row.appendChild(cvLink);
    host.appendChild(row);

    host.appendChild(el("p", "note reveal", t("teaching.cvnote")));
  }

  /* ---------------------------------------------------------- archive */

  /* The per-university pages are carried over from the teaching archive.
     Emphasis the source held mid-sentence survives as a \u0001…\u0002 pair. */

  /** Appends text to `node`, turning the emphasis marks into <b>. */
  function rich(node, value) {
    var parts = String(value == null ? "" : value).split(/[\u0001\u0002]/);
    parts.forEach(function (part, i) {
      if (part === "") return;
      /* odd slices sat between the marks */
      var target = i % 2 ? node.appendChild(el("b")) : node;
      part.split("\n").forEach(function (line, n) {
        if (n) target.appendChild(el("br"));
        target.appendChild(document.createTextNode(line));
      });
    });
    return node;
  }

  function richEl(tag, cls, value) {
    return rich(el(tag, cls), value);
  }

  function chipRow(items) {
    var row = el("div", "a-chips");
    items.forEach(function (c) {
      var a = el("a", "a-chip a-chip-" + (c.kind || "link"));
      a.href = c.href;
      a.target = "_blank";
      a.rel = "noopener";
      rich(a, f(c.label));
      row.appendChild(a);
    });
    return row;
  }

  function mediaRow(items) {
    var row = el("div", "a-media");
    items.forEach(function (m) {
      var a = el("a", "a-card");
      a.href = m.href;
      a.target = "_blank";
      a.rel = "noopener";

      var thumb = el("span", "a-thumb" + (m.kind ? " a-thumb-" + m.kind : ""));
      if (m.img) {
        var img = el("img");
        img.src = m.img;
        img.alt = m.alt || "";
        img.loading = "lazy";
        img.decoding = "async";
        thumb.appendChild(img);
      }
      a.appendChild(thumb);

      var meta = el("span", "a-card-meta");
      if (m.label) rich(meta.appendChild(el("b")), f(m.label));
      if (m.type) meta.appendChild(el("em", null, m.type));
      a.appendChild(meta);

      row.appendChild(a);
    });
    return row;
  }

  function shotRow(shots) {
    var row = el("div", "a-shots");
    shots.forEach(function (sh, i) {
      var btn = el("button", "a-shot");
      btn.type = "button";
      var img = el("img");
      img.src = sh.src;
      img.alt = sh.alt || "";
      img.loading = "lazy";
      img.decoding = "async";
      btn.appendChild(img);
      btn.addEventListener("click", function () { lb.showShots(shots, i + 1); });
      row.appendChild(btn);
    });
    return row;
  }

  function factList(items) {
    var dl = el("dl", "ex-meta a-facts");
    items.forEach(function (it) {
      dl.appendChild(richEl("dt", null, f(it.label)));
      var dd = el("dd");
      if (it.href) {
        var a = el("a", "a-inline-link");
        a.href = it.href;
        a.target = "_blank";
        a.rel = "noopener";
        rich(a, f(it.value));
        a.appendChild(el("span", "arw", "↗"));
        dd.appendChild(a);
      } else {
        rich(dd, f(it.value));
      }
      dl.appendChild(dd);
    });
    return dl;
  }

  function blockHead(text) {
    return richEl("h3", "a-block-title", f(text));
  }

  function renderBlock(b) {
    if (b.k === "live") {
      return richEl("p", "a-live", f(b.text));
    }

    if (b.k === "title") {
      return richEl("h2", "a-title", f(b.text));
    }

    if (b.k === "p") {
      return richEl("p", "a-p", f(b.text));
    }

    if (b.k === "poster") {
      var fig = el("div", "a-poster");
      var btn = el("button", "a-shot a-shot-poster");
      btn.type = "button";
      var img = el("img");
      img.src = b.src;
      img.alt = b.alt || "";
      btn.appendChild(img);
      btn.addEventListener("click", function () { lb.showShots([{ src: b.src, alt: b.alt }], 1); });
      fig.appendChild(btn);
      return fig;
    }

    if (b.k === "facts") {
      return factList(b.items);
    }

    if (b.k === "files") {
      return chipRow(b.items);
    }

    if (b.k === "meter") {
      var sec = el("section", "a-sec reveal");
      if (b.heading) sec.appendChild(blockHead(b.heading));
      var grid = el("div", "a-meters");
      b.items.forEach(function (it) {
        var cell = el("div", "a-meter");
        var top = el("div", "a-meter-top");
        if (it.label) rich(top.appendChild(el("b")), f(it.label));
        if (it.value) top.appendChild(el("em", null, it.value));
        cell.appendChild(top);

        var bar = el("div", "a-bar");
        var fill = el("i");
        fill.style.width = (it.pct == null ? 100 : it.pct) + "%";
        bar.appendChild(fill);
        cell.appendChild(bar);

        if (it.note) cell.appendChild(richEl("p", "a-meter-note", f(it.note)));
        grid.appendChild(cell);
      });
      sec.appendChild(grid);
      if (b.note) sec.appendChild(richEl("p", "note", f(b.note)));
      return sec;
    }

    if (b.k === "plan") {
      var planSec = el("section", "a-sec reveal");
      if (b.heading) planSec.appendChild(blockHead(b.heading));
      var list = el("ol", "a-plan");
      b.items.forEach(function (it) {
        var li = el("li", it.key ? "is-key" : null);
        li.appendChild(el("span", "a-when", it.when));
        li.appendChild(richEl("div", "a-what", f(it.text)));
        list.appendChild(li);
      });
      planSec.appendChild(list);
      return planSec;
    }

    if (b.k === "lists") {
      var listSec = el("section", "a-sec reveal");
      if (b.heading) listSec.appendChild(blockHead(b.heading));
      var cols = el("div", "a-lists");
      b.items.forEach(function (it) {
        var col = el("div", "a-list");
        if (it.label) col.appendChild(richEl("h4", null, f(it.label)));
        var ul = el("ul");
        (it.lines || []).forEach(function (line) { ul.appendChild(richEl("li", null, f(line))); });
        col.appendChild(ul);
        cols.appendChild(col);
      });
      listSec.appendChild(cols);
      return listSec;
    }

    if (b.k === "text") {
      var textSec = el("section", "a-sec reveal");
      if (b.heading) textSec.appendChild(blockHead(b.heading));
      (b.text || []).forEach(function (para) { textSec.appendChild(richEl("p", "a-p", f(para))); });
      if (b.media) textSec.appendChild(mediaRow(b.media));
      if (b.files) textSec.appendChild(chipRow(b.files));
      return textSec;
    }

    if (b.k === "works") {
      var worksSec = el("section", "a-sec reveal");
      if (b.heading) worksSec.appendChild(blockHead(b.heading));
      var wrap = el("div", "a-works");
      b.items.forEach(function (w) { wrap.appendChild(renderWork(w)); });
      worksSec.appendChild(wrap);
      return worksSec;
    }

    return null;
  }

  function renderWork(w) {
    var art = el("article", "a-work");

    var head = el("div", "a-work-head");
    if (w.tag) head.appendChild(el("span", "a-tag", w.tag));
    if (w.title) head.appendChild(richEl("h4", null, f(w.title)));
    if (w.people) head.appendChild(richEl("p", "a-people", f(w.people)));
    art.appendChild(head);

    if (w.credit) art.appendChild(richEl("p", "a-credit", f(w.credit)));

    /* a note that points onward ("→ later shown at …") belongs with the
       heading; a note about the source recording reads better at the end */
    var notes = w.notes || [];
    var lead = notes.filter(function (n) { return /^→/.test(n.ko); });
    var trail = notes.filter(function (n) { return !/^→/.test(n.ko); });
    lead.forEach(function (n) { art.appendChild(richEl("p", "a-note", f(n))); });

    (w.body || []).forEach(function (para) { art.appendChild(richEl("p", "a-blurb", f(para))); });
    if (w.shots) art.appendChild(shotRow(w.shots));
    if (w.media) art.appendChild(mediaRow(w.media));
    if (w.files) art.appendChild(chipRow(w.files));
    trail.forEach(function (n) { art.appendChild(richEl("p", "a-note a-note-end", f(n))); });

    return art;
  }

  /* the chosen course survives a language switch, which rebuilds the page */
  var archiveCourse = null;

  function renderArchive() {
    var host = document.querySelector("[data-archive]");
    if (!host) return;

    var A = window.ARCHIVE && window.ARCHIVE[host.getAttribute("data-archive")];
    if (!A) return;
    host.innerHTML = "";

    var intro = el("section", "a-intro reveal");
    if (A.title) intro.appendChild(richEl("h2", "a-uni", f(A.title)));
    (A.intro || []).forEach(function (para) { intro.appendChild(richEl("p", "a-p", f(para))); });
    if (A.byline) intro.appendChild(richEl("p", "a-byline", A.byline));
    host.appendChild(intro);

    var courses = A.courses || [];
    if (!archiveCourse || !courses.filter(function (c) { return c.id === archiveCourse; }).length) {
      var fromHash = location.hash.replace(/^#/, "");
      archiveCourse = courses.filter(function (c) { return c.id === fromHash; }).length
        ? fromHash : (courses[0] && courses[0].id);
    }

    var tabs = el("div", "a-tabs");
    tabs.setAttribute("role", "tablist");
    tabs.setAttribute("aria-label", t("teaching.courselist"));

    var panel = el("div", "a-panel");
    panel.id = "a-panel";
    panel.setAttribute("role", "tabpanel");

    function show(id, focus) {
      archiveCourse = id;
      var course = courses.filter(function (c) { return c.id === id; })[0];
      if (!course) return;

      tabs.querySelectorAll(".a-tab").forEach(function (b) {
        var on = b.dataset.course === id;
        b.classList.toggle("is-active", on);
        b.setAttribute("aria-selected", String(on));
        b.tabIndex = on ? 0 : -1;
      });

      panel.innerHTML = "";
      panel.setAttribute("aria-labelledby", "a-tab-" + id);
      course.blocks.forEach(function (b) {
        var node = renderBlock(b);
        if (node) panel.appendChild(node);
      });
      observeReveals();

      if (focus) {
        history.replaceState(null, "", location.pathname + location.search + "#" + id);
        if (panel.scrollIntoView) panel.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    }

    courses.forEach(function (c) {
      var btn = el("button", "a-tab");
      btn.type = "button";
      btn.id = "a-tab-" + c.id;
      btn.dataset.course = c.id;
      btn.setAttribute("role", "tab");
      btn.setAttribute("aria-controls", "a-panel");
      rich(btn.appendChild(el("span", "a-tab-name")), f(c.short));
      if (c.count) {
        btn.appendChild(el("span", "a-tab-n", c.live ? t("archive.now") : c.count));
      }
      btn.addEventListener("click", function () { show(c.id, true); });
      tabs.appendChild(btn);
    });

    host.appendChild(tabs);
    host.appendChild(panel);

    if (A.foot) {
      var foot = el("section", "a-sec a-foot reveal");
      if (A.foot.heading) foot.appendChild(blockHead(A.foot.heading));
      (A.foot.text || []).forEach(function (para) { foot.appendChild(richEl("p", "a-p", f(para))); });
      host.appendChild(foot);
    }

    var row = el("div", "btn-row reveal");
    var back = el("a", "btn", t("teaching.back"));
    back.href = "teaching.html";
    row.appendChild(back);
    var out = el("a", "btn", t("teaching.archive") + "  ↗");
    out.href = S.teaching.archive;
    out.target = "_blank";
    out.rel = "noopener";
    row.appendChild(out);
    host.appendChild(row);

    host.appendChild(el("p", "note reveal", t("teaching.source")));

    show(archiveCourse, false);
  }

  function renderBio() {
    var host = document.querySelector("[data-bio]");
    if (!host) return;
    var limit = parseInt(host.getAttribute("data-bio"), 10);
    var paras = S.bio[lang];
    if (limit > 0) paras = paras.slice(0, limit);

    host.innerHTML = "";
    paras.forEach(function (p, i) {
      host.appendChild(el("p", i === 0 ? "lead" : null, p));
    });
  }

  function renderCV() {
    var host = document.querySelector("[data-cv]");
    if (!host) return;
    host.innerHTML = "";

    var blocks = [
      ["education", "cv.education"],
      ["teaching", "cv.teaching"],
      ["awards", "cv.awards"],
      ["exhibitions", "cv.exhibitions"],
      ["publications", "cv.publications"]
    ];

    blocks.forEach(function (b) {
      var rows = S.cv[b[0]];
      if (!rows || !rows.length) return;

      var section = el("section", "cv-block reveal");
      section.appendChild(el("h3", "cv-title", t(b[1])));

      rows.forEach(function (r) {
        var row = el("div", "cv-row");
        row.appendChild(el("span", "cv-year", r.year));

        var what = el("div", "cv-what");
        what.appendChild(document.createTextNode(f(r.what)));
        if (r.note) what.appendChild(el("small", null, f(r.note)));

        if (r.link) {
          var link = el("a", "cv-link", f(r.linkLabel) + "  ↗");
          link.href = r.link;
          link.target = "_blank";
          link.rel = "noopener";
          what.appendChild(link);
        }

        row.appendChild(what);

        row.appendChild(el("span", "cv-where", f(r.where)));
        section.appendChild(row);
      });

      host.appendChild(section);
    });
  }

  /* ------------------------------------------------------------ lightbox */

  var lb = {
    open: false,
    work: null,
    shots: null,
    index: 1,
    root: null,

    build: function () {
      if (this.root) return;

      var root = el("div", "lb");
      root.setAttribute("role", "dialog");
      root.setAttribute("aria-modal", "true");

      root.innerHTML =
        '<div class="lb-bar">' +
          '<div class="lb-heading">' +
            '<h2 class="lb-title"></h2>' +
            '<p class="lb-sub"></p>' +
          '</div>' +
          '<button class="lb-close" type="button">&#10005;</button>' +
        '</div>' +
        '<div class="lb-stage">' +
          '<button class="lb-nav lb-prev" type="button">&#8592;</button>' +
          '<img alt="">' +
          '<button class="lb-nav lb-next" type="button">&#8594;</button>' +
        '</div>' +
        '<div class="lb-foot">' +
          '<div class="lb-details"></div>' +
          '<span class="lb-counter"></span>' +
        '</div>';

      document.body.appendChild(root);
      this.root = root;

      root.querySelector(".lb-close").addEventListener("click", this.hide.bind(this));
      root.querySelector(".lb-prev").addEventListener("click", this.prev.bind(this));
      root.querySelector(".lb-next").addEventListener("click", this.next.bind(this));

      root.addEventListener("click", function (ev) {
        if (ev.target === root || ev.target.classList.contains("lb-stage")) lb.hide();
      });
    },

    show: function (work, index) {
      this.build();
      this.work = work;
      this.shots = null;
      this.index = index || 1;
      this.open = true;

      document.body.style.overflow = "hidden";
      this.root.classList.add("is-open");
      requestAnimationFrame(function () { lb.root.classList.add("is-visible"); });

      this.refresh();
    },

    /* the archive pages hand over a plain list of {src, alt} */
    showShots: function (shots, index) {
      this.build();
      this.work = null;
      this.shots = shots;
      this.index = index || 1;
      this.open = true;

      document.body.style.overflow = "hidden";
      this.root.classList.add("is-open");
      requestAnimationFrame(function () { lb.root.classList.add("is-visible"); });

      this.refresh();
    },

    hide: function () {
      if (!this.open) return;
      this.open = false;
      document.body.style.overflow = "";
      this.root.classList.remove("is-visible");

      var root = this.root;
      setTimeout(function () {
        if (!lb.open) root.classList.remove("is-open");
      }, 300);

      if (location.hash) {
        history.replaceState(null, "", location.pathname + location.search);
      }
    },

    count: function () {
      if (this.shots) return this.shots.length;
      return this.work ? this.work.images : 0;
    },

    prev: function () {
      var n = this.count();
      if (!n) return;
      this.index = this.index > 1 ? this.index - 1 : n;
      this.refresh();
    },

    next: function () {
      var n = this.count();
      if (!n) return;
      this.index = this.index < n ? this.index + 1 : 1;
      this.refresh();
    },

    refresh: function () {
      if (this.shots) return this.refreshShots();

      var w = this.work;
      if (!w) return;
      var r = this.root;

      r.querySelector(".lb-title").textContent = f(w.title);
      r.querySelector(".lb-sub").textContent =
        [w.year, f(w.venue)].filter(Boolean).join("  ·  ");

      var img = r.querySelector(".lb-stage img");
      img.src = imgPath(w.slug, this.index);
      img.alt = f(w.title) + " — " + this.index;

      var multi = w.images > 1;
      r.querySelector(".lb-prev").hidden = !multi;
      r.querySelector(".lb-next").hidden = !multi;
      r.querySelector(".lb-counter").textContent = multi ? this.index + " / " + w.images : "";

      var d = r.querySelector(".lb-details");
      d.innerHTML = "";

      if (w.dimensions) {
        var dim = el("div");
        dim.appendChild(el("b", null, t("lb.dimensions")));
        dim.appendChild(document.createTextNode(f(w.dimensions)));
        d.appendChild(dim);
      }
      if (w.materials) {
        var mat = el("div");
        mat.appendChild(el("b", null, t("lb.materials")));
        mat.appendChild(document.createTextNode(f(w.materials)));
        d.appendChild(mat);
      }

      var url = w.video || w.link;
      if (url) {
        var label = w.video ? t("lb.watch")
                            : (w.linkLabel ? f(w.linkLabel) : t("lb.visit"));
        var a = el("a", "link-video", label + "  ↗");
        a.href = url;
        a.target = "_blank";
        a.rel = "noopener";
        d.appendChild(a);
      }

      this.labels();
    },

    refreshShots: function () {
      var r = this.root;
      var list = this.shots;
      var shot = list[this.index - 1];

      r.querySelector(".lb-title").textContent = shot.alt || "";
      r.querySelector(".lb-sub").textContent = "";

      var img = r.querySelector(".lb-stage img");
      img.src = shot.src;
      img.alt = shot.alt || "";

      var many = list.length > 1;
      r.querySelector(".lb-prev").hidden = !many;
      r.querySelector(".lb-next").hidden = !many;
      r.querySelector(".lb-counter").textContent = many ? this.index + " / " + list.length : "";
      r.querySelector(".lb-details").innerHTML = "";

      this.labels();
    },

    labels: function () {
      var r = this.root;
      r.querySelector(".lb-close").setAttribute("aria-label", t("lb.close"));
      r.querySelector(".lb-prev").setAttribute("aria-label", t("lb.prev"));
      r.querySelector(".lb-next").setAttribute("aria-label", t("lb.next"));
    }
  };

  document.addEventListener("keydown", function (ev) {
    if (!lb.open) return;
    if (ev.key === "Escape") lb.hide();
    else if (ev.key === "ArrowLeft") lb.prev();
    else if (ev.key === "ArrowRight") lb.next();
  });

  /* -------------------------------------------------------------- reveal */

  var io = null;

  function observeReveals() {
    var nodes = document.querySelectorAll(".reveal:not(.is-in)");
    if (!nodes.length) return;

    if (!("IntersectionObserver" in window)) {
      nodes.forEach(function (n) { n.classList.add("is-in"); });
      return;
    }

    if (!io) {
      io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;
          var n = e.target;
          var siblings = Array.prototype.slice.call(n.parentNode.children);
          var delay = Math.min(siblings.indexOf(n), 7) * 70;
          n.style.transitionDelay = delay + "ms";
          n.classList.add("is-in");
          io.unobserve(n);
        });
      }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
    }

    nodes.forEach(function (n) { io.observe(n); });
  }

  /* ---------------------------------------------------------------- chrome */

  function initChrome() {
    document.querySelectorAll(".lang button").forEach(function (b) {
      b.addEventListener("click", function () { setLang(b.dataset.lang); });
    });

    var toggle = document.querySelector(".nav-toggle");
    var nav = document.querySelector(".nav");
    if (toggle && nav) {
      toggle.addEventListener("click", function () {
        var openNow = nav.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", String(openNow));
      });
      nav.addEventListener("click", function (ev) {
        if (ev.target.tagName === "A") {
          nav.classList.remove("is-open");
          toggle.setAttribute("aria-expanded", "false");
        }
      });
    }

    initNavGroups();

    var page = document.body.dataset.page;
    if (page) {
      var active = document.querySelector('.nav [data-page="' + page + '"]');
      if (active) {
        active.classList.add("is-active");
        /* a child page also lights up the group it sits in */
        var group = active.closest(".nav-group");
        if (group) {
          var parent = group.querySelector(".nav-parent");
          if (parent) parent.classList.add("is-active");
        }
      }
    }
  }

  /** Grouped nav items open on hover; click and Escape work without a pointer. */
  function initNavGroups() {
    var groups = Array.prototype.slice.call(document.querySelectorAll(".nav-group"));
    if (!groups.length) return;

    function close(g) {
      g.removeAttribute("data-open");
      var b = g.querySelector(".nav-parent");
      if (b) b.setAttribute("aria-expanded", "false");
    }

    function closeAll(except) {
      groups.forEach(function (g) { if (g !== except) close(g); });
    }

    groups.forEach(function (g) {
      var btn = g.querySelector(".nav-parent");
      if (!btn) return;

      btn.addEventListener("click", function () {
        var opening = g.getAttribute("data-open") !== "true";
        closeAll(g);
        if (opening) {
          g.setAttribute("data-open", "true");
          btn.setAttribute("aria-expanded", "true");
        } else {
          close(g);
        }
      });

      g.addEventListener("mouseleave", function () { close(g); });

      /* focus keeps a keyboard-opened menu up, but only while it is inside */
      g.addEventListener("focusout", function (ev) {
        if (!g.contains(ev.relatedTarget)) close(g);
      });
    });

    document.addEventListener("click", function (ev) {
      if (!ev.target.closest(".nav-group")) closeAll(null);
    });

    document.addEventListener("keydown", function (ev) {
      if (ev.key === "Escape") closeAll(null);
    });
  }

  /** Open a work directly from #slug on load. */
  function openFromHash() {
    var slug = location.hash.replace(/^#/, "");
    if (!slug) return;
    var w = S.works.filter(function (x) { return x.slug === slug; })[0];
    if (w) lb.show(w, 1);
  }

  /* ------------------------------------------------------------------ go */

  lang = readStoredLang();
  initChrome();
  applyLang();
  openFromHash();
})();
