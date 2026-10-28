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

  /** The smaller copy of a photo, for tiles that show many at once. */
  function thumbPath(slug, n) {
    return "assets/img/works/" + slug + "/t/" + (n < 10 ? "0" + n : n) + ".jpg";
  }

  function coverPath(w) {
    return thumbPath(w.slug, w.cover || 1);
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
    renderWorkPage();
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

  /** Home: one large box per body of work, two to a row. */
  function renderCategories() {
    var host = document.querySelector("[data-categories]");
    if (!host) return;
    host.innerHTML = "";

    var boxes = S.categories.map(function (c) {
      return { href: c.page, label: c.label[lang], range: c.range, desc: t("cat." + c.id + ".desc") };
    });
    boxes.push({ href: "teaching.html", label: t("nav.teaching"), range: S.teaching.period,
                 desc: t("cat.teaching.desc") });

    boxes.forEach(function (b) {
      var a = el("a", "box");
      a.href = b.href;
      a.appendChild(el("h3", null, b.label));
      a.appendChild(el("span", "box-range", b.range));
      a.appendChild(el("p", null, b.desc));
      host.appendChild(a);
    });
  }

  function workHref(w) {
    return "work.html?w=" + encodeURIComponent(w.slug);
  }

  /** A square tile: the cover photograph, its title shown on hover. */
  function makeCard(w) {
    var a = el("a", "tile");
    a.href = workHref(w);

    var img = el("img");
    img.src = coverPath(w);
    img.alt = f(w.title);
    img.loading = "lazy";
    img.decoding = "async";
    a.appendChild(img);

    var cap = el("span", "tile-cap");
    cap.appendChild(el("span", "tile-title", f(w.title)));
    cap.appendChild(el("span", "tile-year", w.year));
    a.appendChild(cap);

    return a;
  }

  function renderGrids() {
    document.querySelectorAll("[data-grid]").forEach(function (host) {
      var list;
      var catAttr = host.getAttribute("data-grid");

      if (catAttr === "all") {
        renderGroupedTiles(host);
        return;
      } else if (catAttr === "selected") {
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

  /** Home: the works body by body, each under a heading row that spans the
      grid. A body with an odd number of works ends on a box that leads to
      its own page, so every row stays two wide. */
  function renderGroupedTiles(host) {
    host.innerHTML = "";

    S.categories.forEach(function (c) {
      var list = worksIn(c.id);
      if (!list.length) return;

      var head = el("div", "tiles-head");
      head.id = "works-" + c.id;
      var name = el("a", "tiles-name", c.label[lang]);
      name.href = c.page;
      head.appendChild(name);
      head.appendChild(el("span", "tiles-range", c.range + "  ·  " + list.length));
      host.appendChild(head);

      list.forEach(function (w) { host.appendChild(makeCard(w)); });

      if (list.length % 2) {
        var more = el("a", "tile tile-more");
        more.href = c.page;
        var inner = el("span", "tile-more-inner");
        inner.appendChild(el("span", "tile-more-name", c.label[lang]));
        inner.appendChild(el("span", "tile-more-desc", t("cat." + c.id + ".desc")));
        inner.appendChild(el("span", "tile-more-go", t("home.viewall") + " →"));
        more.appendChild(inner);
        host.appendChild(more);
      }
    });
  }

  /* ------------------------------------------------------------ work page */

  /** The work named by ?w=slug, or null. */
  function currentWork() {
    var slug = new URLSearchParams(location.search).get("w") || "";
    return S.works.filter(function (w) { return w.slug === slug; })[0] || null;
  }

  function infoLine(parent, label, value) {
    if (!value) return;
    var p = el("p", "work-field");
    p.appendChild(el("span", "work-label", label));
    p.appendChild(document.createTextNode(value));
    parent.appendChild(p);
  }

  /** A caption column that stays put, and every photograph stacked beside it. */
  function renderWorkPage() {
    var host = document.querySelector("[data-work]");
    if (!host) return;

    var w = currentWork();
    if (!w) { location.replace("index.html"); return; }

    var cat = S.categories.filter(function (c) { return c.id === w.cat; })[0];
    var siblings = worksIn(w.cat);
    var at = siblings.indexOf(w);
    var prev = siblings[(at - 1 + siblings.length) % siblings.length];
    var next = siblings[(at + 1) % siblings.length];

    document.title = f(w.title) + " · " + (lang === "ko" ? "유준오" : "Junoh Yu");
    host.innerHTML = "";

    var side = el("aside", "work-side");
    var info = el("div", "work-info");

    if (cat) {
      var crumb = el("a", "work-cat", cat.label[lang]);
      crumb.href = cat.page;
      info.appendChild(crumb);
    }
    info.appendChild(el("h1", "work-title", f(w.title)));
    if (w.subtitle) info.appendChild(el("p", "work-subtitle", f(w.subtitle)));
    info.appendChild(el("p", "work-year", w.year));

    infoLine(info, t("lb.venue"), f(w.venue));
    infoLine(info, t("lb.dimensions"), f(w.dimensions));
    infoLine(info, t("lb.materials"), f(w.materials));

    var url = w.video || w.link;
    if (url) {
      var label = w.video ? t("lb.watch") : (w.linkLabel ? f(w.linkLabel) : t("lb.visit"));
      var a = el("a", "work-link", label + " ↗");
      a.href = url;
      a.target = "_blank";
      a.rel = "noopener";
      info.appendChild(a);
    }
    side.appendChild(info);

    var nav = el("nav", "work-nav");
    var p = el("a", "work-prev");
    p.href = workHref(prev);
    p.setAttribute("aria-label", t("work.prev") + ": " + f(prev.title));
    p.appendChild(el("span", "arw", "←"));
    p.appendChild(el("span", "work-nav-label", t("work.prev")));
    var n = el("a", "work-next");
    n.href = workHref(next);
    n.setAttribute("aria-label", t("work.next") + ": " + f(next.title));
    n.appendChild(el("span", "work-nav-label", t("work.next")));
    n.appendChild(el("span", "arw", "→"));
    nav.appendChild(p);
    nav.appendChild(n);
    side.appendChild(nav);

    host.appendChild(side);

    var shots = el("div", "work-images");
    for (var i = 1; i <= w.images; i++) {
      (function (n) {
        var b = el("button", "work-shot");
        b.type = "button";
        b.setAttribute("aria-label", f(w.title) + " — " + n + " / " + w.images);
        var img = el("img");
        img.src = imgPath(w.slug, n);
        img.alt = f(w.title) + " — " + n;
        /* the first photo is above the fold; the rest can wait */
        if (n > 1) img.loading = "lazy";
        img.decoding = "async";
        b.appendChild(img);
        b.addEventListener("click", function () { lb.show(w, n); });
        shots.appendChild(b);
      })(i);
    }
    host.appendChild(shots);
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

  /* a project leads with one large still; whatever else there is follows
     underneath at a single, even size however many there are */
  function shotGallery(shots) {
    var box = el("div", "a-gallery");
    box.appendChild(shotRow(shots, 0, 1, "a-shots a-shots-hero"));
    if (shots.length > 1) box.appendChild(shotRow(shots, 1, shots.length, "a-shots a-shots-rest"));
    return box;
  }

  /* with no stills, the first video's frame stands in as the lead image */
  function heroLink(m) {
    var a = el("a", "a-hero-link");
    a.href = m.href;
    a.target = "_blank";
    a.rel = "noopener";
    var img = el("img");
    img.src = m.img;
    img.alt = m.alt || "";
    img.loading = "lazy";
    img.decoding = "async";
    a.appendChild(img);
    var cap = el("span", "a-hero-cap");
    if (m.label) rich(cap.appendChild(el("b")), f(m.label));
    if (m.type) cap.appendChild(el("em", null, m.type));
    a.appendChild(cap);
    return a;
  }

  /* shots[from..to) as buttons; the lightbox still steps through them all */
  function shotRow(shots, from, to, cls) {
    var row = el("div", cls || "a-shots");
    from = from || 0;
    shots.slice(from, to == null ? shots.length : to).forEach(function (sh, i) {
      var btn = el("button", "a-shot");
      btn.type = "button";
      var img = el("img");
      img.src = sh.src;
      img.alt = sh.alt || "";
      img.loading = "lazy";
      img.decoding = "async";
      btn.appendChild(img);
      btn.addEventListener("click", function () { lb.showShots(shots, from + i + 1); });
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
    var media = w.media || [];
    if (w.shots && w.shots.length) {
      art.appendChild(shotGallery(w.shots));
    } else {
      var still = media.filter(function (m) { return m.img && !m.kind; })[0];
      if (still) {
        art.appendChild(heroLink(still));
        media = media.filter(function (m) { return m !== still; });
      }
    }
    if (media.length) art.appendChild(mediaRow(media));
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

  /* A photograph fills the whole screen. Three slides sit side by side —
     the previous photo, this one, the next — so a finger can drag the
     neighbour into view and let go; once the slide settles the three are
     re-filled around the new index and the strip jumps back to the middle. */

  var lb = {
    open: false,
    work: null,
    list: [],          /* [{src, alt}] */
    index: 0,          /* zero-based into list */
    root: null,
    track: null,
    moving: false,
    autoFs: false,     /* we asked for full screen, so we leave it on close */

    build: function () {
      if (this.root) return;

      var root = el("div", "lb");
      root.setAttribute("role", "dialog");
      root.setAttribute("aria-modal", "true");

      root.innerHTML =
        '<div class="lb-stage">' +
          '<div class="lb-track">' +
            '<figure class="lb-slide"><img alt="" draggable="false"></figure>' +
            '<figure class="lb-slide"><img alt="" draggable="false"></figure>' +
            '<figure class="lb-slide"><img alt="" draggable="false"></figure>' +
          '</div>' +
        '</div>' +
        '<div class="lb-top">' +
          '<span class="lb-counter"></span>' +
          '<button class="lb-btn lb-fs" type="button"><i aria-hidden="true"></i></button>' +
          '<button class="lb-btn lb-close" type="button">&#10005;</button>' +
        '</div>' +
        '<button class="lb-nav lb-prev" type="button">&#8592;</button>' +
        '<button class="lb-nav lb-next" type="button">&#8594;</button>' +
        '<div class="lb-cap">' +
          '<p class="lb-title"></p>' +
          '<p class="lb-sub"></p>' +
        '</div>';

      document.body.appendChild(root);
      this.root = root;
      this.track = root.querySelector(".lb-track");
      this.imgs = root.querySelectorAll(".lb-slide img");

      root.querySelector(".lb-close").addEventListener("click", this.hide.bind(this));
      root.querySelector(".lb-prev").addEventListener("click", function () { lb.go(-1); });
      root.querySelector(".lb-next").addEventListener("click", function () { lb.go(1); });
      root.querySelector(".lb-fs").addEventListener("click", function () { lb.toggleFs(); });

      var stage = root.querySelector(".lb-stage");

      /* with a mouse, the left third of the picture goes back, the rest
         goes on; a tap from a finger is handled by the touch code below */
      stage.addEventListener("click", function (ev) {
        if (Date.now() - lb.lastTouch < 600) return;
        if (lb.list.length < 2) { lb.hide(); return; }
        lb.go(ev.clientX < window.innerWidth / 3 ? -1 : 1);
      });
      stage.addEventListener("mousemove", function (ev) {
        stage.classList.toggle("is-back", ev.clientX < window.innerWidth / 3);
      });

      this.bindTouch(stage);

      this.track.addEventListener("transitionend", function (ev) {
        if (ev.target === lb.track) lb.settle();
      });
    },

    /* --------------------------------------------------------- gestures */

    lastTouch: 0,

    bindTouch: function (stage) {
      var x0 = 0, y0 = 0, t0 = 0, dx = 0, dy = 0, axis = null, live = false;

      function zoomed() {
        return window.visualViewport && window.visualViewport.scale > 1.01;
      }

      stage.addEventListener("touchstart", function (ev) {
        lb.lastTouch = Date.now();
        /* two fingers pinch, and a zoomed-in photo pans — neither swipes */
        if (ev.touches.length !== 1 || lb.moving || zoomed()) { live = false; return; }
        live = true;
        axis = null;
        dx = dy = 0;
        x0 = ev.touches[0].clientX;
        y0 = ev.touches[0].clientY;
        t0 = Date.now();
      }, { passive: true });

      stage.addEventListener("touchmove", function (ev) {
        if (!live) return;
        if (ev.touches.length !== 1) { live = false; lb.snap(); return; }
        dx = ev.touches[0].clientX - x0;
        dy = ev.touches[0].clientY - y0;

        if (!axis && (Math.abs(dx) > 8 || Math.abs(dy) > 8)) {
          axis = Math.abs(dx) > Math.abs(dy) ? "x" : "y";
        }
        if (!axis) return;
        ev.preventDefault();

        if (axis === "x") {
          /* a lone photo has nowhere to go, so it only gives a little */
          lb.drag(lb.list.length > 1 ? dx : dx / 4, 0);
        } else {
          lb.drag(0, Math.max(0, dy));
        }
      }, { passive: false });

      stage.addEventListener("touchend", function () {
        lb.lastTouch = Date.now();
        if (!live) return;
        live = false;

        var ms = Math.max(1, Date.now() - t0);
        var w = window.innerWidth;

        if (!axis) {             /* a tap shows or hides the captions */
          lb.root.classList.toggle("is-bare");
          return;
        }
        if (axis === "x" && lb.list.length > 1 &&
            (Math.abs(dx) > w * 0.18 || (Math.abs(dx) > 30 && Math.abs(dx) / ms > 0.45))) {
          lb.go(dx < 0 ? 1 : -1);
          return;
        }
        if (axis === "y" && (dy > 120 || (dy > 40 && dy / ms > 0.5))) {
          lb.hide();
          return;
        }
        lb.snap();
      });

      stage.addEventListener("touchcancel", function () { live = false; lb.snap(); });
    },

    /** Follow the finger: sideways moves the strip, downwards lifts the photo. */
    drag: function (x, y) {
      this.track.style.transition = "none";
      this.track.style.transform = "translate3d(calc(-100vw + " + x + "px), " + y + "px, 0)";
      this.root.style.setProperty("--lb-fade", String(Math.max(0.35, 1 - y / 500)));
    },

    snap: function () {
      this.track.style.transition = "";
      this.track.style.transform = "";
      this.root.style.removeProperty("--lb-fade");
    },

    /* ------------------------------------------------------ navigation */

    go: function (dir) {
      if (this.moving || this.list.length < 2) return;
      this.moving = true;
      this.pending = dir;
      this.track.style.transition = "";
      this.track.style.transform = "translate3d(" + (dir > 0 ? "-200vw" : "0px") + ", 0, 0)";
      /* in case transitionend never fires (reduced motion, a hidden tab) */
      clearTimeout(this.timer);
      this.timer = setTimeout(function () { lb.settle(); }, 520);
    },

    settle: function () {
      if (!this.moving) return;
      clearTimeout(this.timer);
      var n = this.list.length;
      this.index = (this.index + this.pending + n) % n;
      this.moving = false;
      this.track.style.transition = "none";
      this.track.style.transform = "";
      this.fill();
      /* let the jump back land before transitions return */
      void this.track.offsetWidth;
      this.track.style.transition = "";
    },

    prev: function () { this.go(-1); },
    next: function () { this.go(1); },

    /* --------------------------------------------------------- opening */

    show: function (work, index) {
      var list = [];
      for (var i = 1; i <= work.images; i++) {
        list.push({ src: imgPath(work.slug, i), alt: f(work.title) + " — " + i });
      }
      this.work = work;
      this.openList(list, (index || 1) - 1);
    },

    /* the archive pages hand over a plain list of {src, alt} */
    showShots: function (shots, index) {
      this.work = null;
      this.openList(shots, (index || 1) - 1);
    },

    openList: function (list, index) {
      this.build();
      this.list = list;
      this.index = Math.max(0, Math.min(index, list.length - 1));
      this.open = true;
      this.moving = false;
      this.root.classList.remove("is-bare");
      this.snap();

      document.documentElement.classList.add("lb-lock");
      this.root.classList.add("is-open");
      requestAnimationFrame(function () { lb.root.classList.add("is-visible"); });

      this.refresh();
      this.enterFs();
    },

    hide: function () {
      if (!this.open) return;
      this.open = false;
      document.documentElement.classList.remove("lb-lock");
      this.root.classList.remove("is-visible");
      this.leaveFs();

      var root = this.root;
      setTimeout(function () {
        if (!lb.open) { root.classList.remove("is-open"); lb.snap(); }
      }, 300);
    },

    count: function () { return this.list.length; },

    /* ------------------------------------------------------ full screen */

    fsElement: function () {
      return document.fullscreenElement || document.webkitFullscreenElement || null;
    },

    canFs: function () {
      var r = this.root;
      return !!(r && (r.requestFullscreen || r.webkitRequestFullscreen));
    },

    enterFs: function () {
      if (!this.canFs() || this.fsElement()) return;
      var r = this.root;
      var p = r.requestFullscreen ? r.requestFullscreen() : r.webkitRequestFullscreen();
      this.autoFs = true;
      if (p && p.catch) p.catch(function () { lb.autoFs = false; });
    },

    leaveFs: function () {
      if (!this.fsElement()) return;
      this.leaving = true;
      if (document.exitFullscreen) document.exitFullscreen().catch(function () {});
      else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
    },

    toggleFs: function () {
      if (this.fsElement()) { this.autoFs = false; this.leaveFs(); }
      else this.enterFs();
    },

    /* ---------------------------------------------------------- drawing */

    fill: function () {
      var n = this.list.length;
      var at = this.index;
      var pick = [(at - 1 + n) % n, at, (at + 1) % n];
      for (var k = 0; k < 3; k++) {
        var shot = this.list[pick[k]];
        var img = this.imgs[k];
        /* a lone photo leaves its neighbours empty */
        if (n < 2 && k !== 1) { img.removeAttribute("src"); img.alt = ""; continue; }
        if (img.getAttribute("src") !== shot.src) img.src = shot.src;
        img.alt = k === 1 ? (shot.alt || "") : "";
      }

      var r = this.root;
      var many = n > 1;
      r.querySelector(".lb-prev").hidden = !many;
      r.querySelector(".lb-next").hidden = !many;
      r.querySelector(".lb-counter").textContent = many ? (at + 1) + " / " + n : "";
      r.classList.toggle("is-single", !many);

      if (this.work) {
        var w = this.work;
        r.querySelector(".lb-title").textContent = f(w.title);
        r.querySelector(".lb-sub").textContent = [w.year, f(w.venue)].filter(Boolean).join("  ·  ");
      } else {
        r.querySelector(".lb-title").textContent = this.list[at].alt || "";
        r.querySelector(".lb-sub").textContent = "";
      }

      /* the photo after next is fetched early, so a quick run of swipes
         never lands on an empty frame */
      if (n > 3) new Image().src = this.list[(at + 2) % n].src;
    },

    refresh: function () {
      if (!this.root) return;
      this.fill();
      this.labels();
    },

    labels: function () {
      var r = this.root;
      r.querySelector(".lb-close").setAttribute("aria-label", t("lb.close"));
      r.querySelector(".lb-prev").setAttribute("aria-label", t("lb.prev"));
      r.querySelector(".lb-next").setAttribute("aria-label", t("lb.next"));
      var fs = r.querySelector(".lb-fs");
      fs.setAttribute("aria-label", t("lb.fullscreen"));
      fs.hidden = !this.canFs();
    }
  };

  /* leaving full screen with the browser's own Escape also closes the photo,
     unless it was the full-screen button that asked to leave */
  ["fullscreenchange", "webkitfullscreenchange"].forEach(function (name) {
    document.addEventListener(name, function () {
      if (lb.fsElement()) return;
      if (lb.leaving) { lb.leaving = false; return; }
      if (lb.open && lb.autoFs) lb.hide();
      lb.autoFs = false;
    });
  });

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

  /** Old links that opened a work as #slug now go to the work's own page. */
  function openFromHash() {
    var slug = location.hash.replace(/^#/, "");
    if (!slug) return;
    var w = S.works.filter(function (x) { return x.slug === slug; })[0];
    if (w) location.replace(workHref(w));
  }

  /* ------------------------------------------------------------------ go */

  lang = readStoredLang();

  /* a work page lights up its own body of work in the nav */
  if (document.body.dataset.page === "work") {
    var shown = currentWork();
    if (shown) document.body.dataset.page = shown.cat;
  }

  /* the header gains a backing once the page moves under it */
  function onScroll() {
    document.documentElement.classList.toggle("is-scrolled", window.scrollY > 40);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  initChrome();
  applyLang();
  openFromHash();
})();
