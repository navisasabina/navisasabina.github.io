/* Shared behaviour for every page: light/dark dial and image zoom. */
(function () {
  var SUN = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"></path></svg>';
  var MOON = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"></path></svg>';

  var root = document.getElementById('themeRoot');
  var dial = document.getElementById('themeDial');

  function getSaved() {
    try {
      var s = localStorage.getItem('sasha-theme');
      if (s) return s === 'dark';
    } catch (e) {}
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  function apply(dark) {
    if (!root) return;
    root.classList.toggle('t-dark', dark);
    root.classList.toggle('t-light', !dark);
    if (dial) {
      var label = dark ? 'Switch to light mode' : 'Switch to dark mode';
      dial.setAttribute('aria-label', label);
      dial.setAttribute('title', label);
      var knob = dial.querySelector('.knob');
      if (knob) knob.innerHTML = dark ? MOON : SUN;
    }
  }

  apply(getSaved());

  if (dial) {
    dial.addEventListener('click', function () {
      var dark = !root.classList.contains('t-dark');
      try { localStorage.setItem('sasha-theme', dark ? 'dark' : 'light'); } catch (e) {}
      apply(dark);
    });
  }

  /* Click any image (that isn't a link) to see it bigger. */
  var box = null;
  function closeBox() {
    if (box) { box.remove(); box = null; document.body.style.overflow = ''; }
  }
  function openBox(src, alt) {
    closeBox();
    box = document.createElement('div');
    box.className = 'lightbox';
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-modal', 'true');
    box.setAttribute('aria-label', 'Image preview');
    box.style.cssText = 'position:fixed;inset:0;z-index:100;background:rgba(20,14,12,0.88);backdrop-filter:blur(6px);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:72px 20px 28px;cursor:zoom-out';
    var img = document.createElement('img');
    img.src = src; img.alt = alt || '';
    img.style.cssText = 'max-width:min(1400px,100%);max-height:calc(100vh - 150px);object-fit:contain;border-radius:16px;background:#FFFFFF;box-shadow:0 40px 80px -20px rgba(0,0,0,0.6)';
    var cap = document.createElement('p');
    cap.textContent = alt || '';
    cap.style.cssText = 'margin:0;max-width:720px;text-align:center;font-size:14px;line-height:1.5;color:#F6F1EA';
    var btn = document.createElement('button');
    btn.type = 'button'; btn.setAttribute('aria-label', 'Close preview'); btn.textContent = '×';
    btn.style.cssText = 'position:absolute;top:16px;right:16px;width:48px;height:48px;border-radius:999px;border:none;background:#FFFFFF;color:#2E2326;font-size:24px;line-height:1;cursor:pointer';
    box.appendChild(img); box.appendChild(cap); box.appendChild(btn);
    box.addEventListener('click', closeBox);
    document.body.appendChild(box);
    document.body.style.overflow = 'hidden';
    btn.focus();
  }
  document.addEventListener('click', function (e) {
    var t = e.target;
    if (t && t.tagName === 'IMG' && !t.closest('a') && !t.closest('.lightbox')) {
      openBox(t.currentSrc || t.src, t.alt);
    }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeBox();
  });
})();
