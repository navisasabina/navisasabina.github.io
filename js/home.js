/* Home page only: Sasha's Bot and the certificate filter. */
(function () {
  /* ---------- Edit these if your contact details change ---------- */
  var WHATSAPP = '6281374474451';
  var EMAIL = 'sashasabina33@gmail.com';
  var CV_URL = 'https://drive.google.com/file/d/12Fx4HCUnsCTxRotioL4jZY6_vNzBQTTS/view?usp=share_link';

  var GREETING = "Hi! I'm Sasha's little helper. What would you like to do?";
  var REPLIES = {
    email: { text: 'Sure! She checks her inbox every day.', href: 'mailto:' + EMAIL + '?subject=Hi%20Sasha!', label: 'Write an email', bg: '#9C4F5B' },
    wa: { text: 'Quickest way to reach her. Tap below to start a chat.', href: 'https://wa.me/' + WHATSAPP + '?text=Hi%20Sasha!%20I%20saw%20your%20portfolio.', label: 'Open WhatsApp', bg: '#2F7D55' },
    cv: { text: "Here's her CV. It opens in Google Drive.", href: CV_URL, label: 'Open CV', bg: '#2E2326' },
    about: { text: "Sasha studies IT at President University (GPA 3.64). Right now she's the IT intern at RS Awal Bros Botania in Batam. From January 2027 she's free for a 3-4 month internship in IT support, business analysis or UI/UX, remote is fine too." }
  };
  /* --------------------------------------------------------------- */

  var chat = document.getElementById('chatBox');
  var options = document.getElementById('chatOptions');
  var reset = document.getElementById('chatReset');
  var timer = null;

  function el(tag, style, text) {
    var e = document.createElement(tag);
    if (style) e.style.cssText = style;
    if (text != null) e.textContent = text;
    return e;
  }
  function scroll() { if (chat) chat.scrollTop = chat.scrollHeight; }

  function botBubble(r) {
    var wrap = el('div', 'align-self:flex-start;max-width:85%;display:flex;flex-direction:column;gap:8px');
    wrap.className = 'bubble';
    wrap.appendChild(el('div', 'background:var(--surface);border:1px solid var(--line);border-radius:18px 18px 18px 6px;padding:12px 16px;font-size:15px;line-height:1.5', r.text));
    if (r.href) {
      var a = el('a', 'align-self:flex-start;text-decoration:none;background:' + r.bg + ';color:#FFFFFF;border-radius:999px;padding:12px 18px;font-size:14px;font-weight:600;min-height:44px;display:inline-flex;align-items:center', r.label + ' ↗');
      a.href = r.href; a.target = '_blank'; a.rel = 'noopener';
      wrap.appendChild(a);
    }
    chat.appendChild(wrap);
  }
  function meBubble(text) {
    var b = el('div', 'align-self:flex-end;max-width:80%;background:var(--accent);color:var(--onAccent);border-radius:18px 18px 6px 18px;padding:12px 16px;font-size:15px;line-height:1.5', text);
    b.className = 'bubble';
    chat.appendChild(b);
  }
  function typing() {
    var t = el('div', 'align-self:flex-start;background:var(--surface);border:1px solid var(--line);border-radius:18px 18px 18px 6px;padding:12px 16px;font-size:18px;letter-spacing:3px;color:var(--soft)');
    t.innerHTML = '<span class="dot">•</span><span class="dot">•</span><span class="dot">•</span>';
    chat.appendChild(t);
    return t;
  }

  if (chat && options) {
    options.addEventListener('click', function (e) {
      var btn = e.target.closest('button[data-k]');
      if (!btn) return;
      var k = btn.getAttribute('data-k');
      meBubble(btn.textContent.trim());
      var t = typing();
      scroll();
      clearTimeout(timer);
      timer = setTimeout(function () {
        t.remove();
        botBubble(REPLIES[k]);
        scroll();
      }, 700);
    });
  }
  if (reset && chat) {
    reset.addEventListener('click', function () {
      clearTimeout(timer);
      chat.innerHTML = '';
      botBubble({ text: GREETING });
    });
  }

  /* Certificate filter */
  var chips = document.querySelectorAll('.fchip[data-k]');
  var certs = document.querySelectorAll('.cert[data-t]');
  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      var k = chip.getAttribute('data-k');
      chips.forEach(function (c) { c.setAttribute('aria-pressed', c === chip ? 'true' : 'false'); });
      certs.forEach(function (c) {
        c.style.display = (k === 'all' || c.getAttribute('data-t') === k) ? '' : 'none';
      });
    });
  });
})();
