/* ============================================================
   PARV KAUR — shared site behaviour
   ============================================================ */
(function () {
  /* ---------- Mobile menu ---------- */
  var burger = document.querySelector('.burger');
  if (burger) {
    burger.addEventListener('click', function () {
      document.body.classList.toggle('menu-open');
    });
    document.querySelectorAll('.nav-links a').forEach(function (a) {
      a.addEventListener('click', function () { document.body.classList.remove('menu-open'); });
    });
  }

  /* ---------- Active nav link ---------- */
  var page = document.body.getAttribute('data-page');
  if (page) {
    document.querySelectorAll('.nav-links a[data-nav]').forEach(function (a) {
      if (a.getAttribute('data-nav') === page) a.classList.add('active');
    });
  }

  /* ============================================================
     LANGUAGE (EN / FR)
     EN is the HTML default. FR strings come from window.I18N_FR,
     a map of  data-i18n key  ->  French string.
     ============================================================ */
  var STORE = 'pk_lang';
  var dict = window.I18N_FR || {};

  function originalText(el) {
    if (el.dataset.en === undefined) el.dataset.en = el.innerHTML;
    return el.dataset.en;
  }

  function applyLang(lang) {
    var fr = lang === 'fr';
    document.documentElement.lang = fr ? 'fr' : 'en';
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var en = originalText(el);
      if (fr && dict[key] !== undefined) el.innerHTML = dict[key];
      else el.innerHTML = en;
    });
    // placeholders
    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-ph');
      if (el.dataset.enPh === undefined) el.dataset.enPh = el.getAttribute('placeholder') || '';
      if (fr && dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
      else el.setAttribute('placeholder', el.dataset.enPh);
    });
    document.querySelectorAll('.lang button').forEach(function (b) {
      b.classList.toggle('on', b.getAttribute('data-lang') === (fr ? 'fr' : 'en'));
    });
    try { localStorage.setItem(STORE, fr ? 'fr' : 'en'); } catch (e) {}
  }

  var saved = 'en';
  try { saved = localStorage.getItem(STORE) || 'en'; } catch (e) {}

  document.querySelectorAll('.lang button').forEach(function (b) {
    b.addEventListener('click', function () { applyLang(b.getAttribute('data-lang')); });
  });
  applyLang(saved);

  /* ---------- Scroll reveal ---------- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(function (r) { io.observe(r); });
    // safety net: never leave content hidden if the observer is slow / capture context
    setTimeout(function () { reveals.forEach(function (r) { r.classList.add('in'); }); }, 1400);
  } else {
    reveals.forEach(function (r) { r.classList.add('in'); });
  }

  /* ============================================================
     HERO / NAV OPTIONS  (home page only)
     Toggles body classes + persists. Lets Parv compare layouts.
     ============================================================ */
  var opt = document.querySelector('[data-options]');
  if (opt) {
    var OKEY = 'pk_opts';
    var state = { hero: 'split', nav: 'center' };
    try { state = Object.assign(state, JSON.parse(localStorage.getItem(OKEY) || '{}')); } catch (e) {}

    function applyOpts() {
      document.body.setAttribute('data-hero', state.hero);
      document.body.setAttribute('data-navstyle', state.nav);
      opt.querySelectorAll('button[data-opt]').forEach(function (b) {
        var g = b.getAttribute('data-opt'), v = b.getAttribute('data-val');
        b.classList.toggle('on', state[g] === v);
      });
      try { localStorage.setItem(OKEY, JSON.stringify(state)); } catch (e) {}
    }
    opt.querySelectorAll('button[data-opt]').forEach(function (b) {
      b.addEventListener('click', function () {
        state[b.getAttribute('data-opt')] = b.getAttribute('data-val');
        applyOpts();
      });
    });
    var tgl = opt.querySelector('[data-options-toggle]');
    if (tgl) tgl.addEventListener('click', function () { opt.classList.toggle('open'); });
    applyOpts();
  }

  /* ---------- Contact form (no backend) ---------- */
  document.querySelectorAll('form[data-contact]').forEach(function (f) {
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = f.querySelector('[type=submit]');
      if (btn) {
        var t = btn.querySelector('span') || btn;
        var orig = t.textContent;
        t.textContent = document.documentElement.lang === 'fr' ? 'Message envoyé ✓' : 'Message sent ✓';
        btn.disabled = true;
        setTimeout(function () { t.textContent = orig; btn.disabled = false; f.reset(); }, 2600);
      }
    });
  });
})();
