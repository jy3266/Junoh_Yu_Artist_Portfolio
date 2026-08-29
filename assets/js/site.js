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
    renderBio();
    renderCV();
    if (lb.open) lb.refresh();
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

  function renderTeaching() {
    var host = document.querySelector("[data-teaching]");
    if (!host) return;

    var T = S.teaching;
    host.innerHTML = "";

    /* headline counts: 2 universities · 4 courses · 41 teams */
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
      head.appendChild(el("h3", "school-name", f(school.name)));
      head.appendChild(el("p", "school-meta", [f(school.role), school.since].join("  ·  ")));
      block.appendChild(head);

      school.courses.forEach(function (c) {
        var row = el("div", "cv-row");
        row.appendChild(el("span", "cv-year", c.teams + " " + t("teaching.teams")));

        var what = el("div", "cv-what");
        what.appendChild(document.createTextNode(f(c.title)));
        if (c.note) what.appendChild(el("small", null, f(c.note)));
        row.appendChild(what);

        row.appendChild(el("span", "cv-where", ""));
        block.appendChild(row);
      });

      host.appendChild(block);
    });

    /* N.I.M.A exhibition */
    var ex = el("section", "cv-block reveal");
    ex.appendChild(el("h3", "cv-title", t("teaching.exhibition.title")));
    var exBody = el("div", "prose");
    exBody.appendChild(el("p", "lead", t("teaching.exhibition.sub")));
    exBody.appendChild(el("p", null, t("teaching.exhibition.desc")));
    ex.appendChild(exBody);
    host.appendChild(ex);

    /* link out to the full archive */
    var row = el("div", "btn-row reveal");
    var a = el("a", "btn", t("teaching.archive") + "  ↗");
    a.href = T.archive;
    a.target = "_blank";
    a.rel = "noopener";
    row.appendChild(a);
    var cvLink = el("a", "btn", t("nav.cv"));
    cvLink.href = "cv.html";
    row.appendChild(cvLink);
    host.appendChild(row);

    host.appendChild(el("p", "note reveal", t("teaching.cvnote")));
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

    prev: function () {
      if (!this.work) return;
      this.index = this.index > 1 ? this.index - 1 : this.work.images;
      this.refresh();
    },

    next: function () {
      if (!this.work) return;
      this.index = this.index < this.work.images ? this.index + 1 : 1;
      this.refresh();
    },

    refresh: function () {
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

    var page = document.body.dataset.page;
    if (page) {
      var active = document.querySelector('.nav a[data-page="' + page + '"]');
      if (active) active.classList.add("is-active");
    }
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
