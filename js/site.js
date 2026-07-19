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
    // ---- Language-aware CV: EN → English PDF, FR → French PDF (download + preview) ----
    var CV_EN = 'assets/Parv_KAUR_CV_EN.pdf', CV_FR = 'assets/Parv_KAUR_CV_FR.pdf';
    document.querySelectorAll('a[data-cv], a[href$="Parv_KAUR_Resume.pdf"]').forEach(function (a) {
      a.setAttribute('data-cv', '');
      a.href = fr ? CV_FR : CV_EN;
      a.setAttribute('download', fr ? 'Parv KAUR - CV (FR).pdf' : 'Parv KAUR - CV (EN).pdf');
      a.removeAttribute('target'); a.removeAttribute('rel');
    });
    var cvFrame = document.querySelector('[data-cv-frame], .cv-preview-frame iframe');
    if (cvFrame) cvFrame.src = (fr ? CV_FR : CV_EN) + '#view=FitH';
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
