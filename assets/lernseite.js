/* lernseite.js — lädt inhalt.md, rendert es und baut das Inhaltsverzeichnis.
   Für alle Lernseiten identisch; pro Seite wird nur inhalt.md geschrieben. */
(function () {
  'use strict';

  var inhalt = document.getElementById('inhalt');
  var ivz = document.getElementById('inhaltsverzeichnis');
  var ivzListe = document.getElementById('ivz-liste');
  var balken = document.getElementById('fortschritt-balken');

  function slug(text) {
    return text.toLowerCase()
      .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
      .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  }

  function fehler(text) {
    inhalt.innerHTML = '<div class="fehler"><p><strong>Die Seite konnte nicht geladen werden.</strong></p>' +
      '<p>' + text + ' Versuchen Sie es später nochmals oder melden Sie sich bei Ihrer Lehrperson.</p></div>';
  }

  function kopfBauen() {
    var h1 = inhalt.querySelector('h1');
    if (!h1) return;
    document.title = h1.textContent;
    var eyebrow = h1.nextElementSibling;
    if (eyebrow && eyebrow.tagName === 'P' && eyebrow.querySelector('em') &&
        eyebrow.textContent.trim() === eyebrow.querySelector('em').textContent.trim()) {
      eyebrow.classList.add('eyebrow');
      inhalt.insertBefore(eyebrow, h1);
    }
  }

  function ivzBauen() {
    var titel = inhalt.querySelectorAll('h2');
    if (titel.length < 3) return;
    Array.prototype.forEach.call(titel, function (h) {
      if (!h.id) h.id = slug(h.textContent);
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = '#' + h.id;
      a.textContent = h.textContent;
      li.appendChild(a);
      ivzListe.appendChild(li);
    });
    ivz.hidden = false;
  }

  function fortschritt() {
    if (!balken) return;
    var hoehe = document.documentElement.scrollHeight - window.innerHeight;
    var anteil = hoehe > 0 ? (window.scrollY / hoehe) * 100 : 0;
    balken.style.width = Math.min(100, Math.max(0, anteil)) + '%';
  }

  function aktivMarkieren() {
    var links = ivzListe.querySelectorAll('a');
    var aktiv = null;
    Array.prototype.forEach.call(links, function (a) {
      var ziel = document.getElementById(a.hash.slice(1));
      if (ziel && ziel.getBoundingClientRect().top < 120) aktiv = a;
      a.classList.remove('aktiv');
    });
    if (aktiv) aktiv.classList.add('aktiv');
  }

  fetch('inhalt.md')
    .then(function (r) {
      if (!r.ok) throw new Error('Status ' + r.status);
      return r.text();
    })
    .then(function (md) {
      inhalt.innerHTML = marked.parse(md);
      kopfBauen();
      ivzBauen();
      fortschritt();
      window.addEventListener('scroll', function () {
        fortschritt();
        aktivMarkieren();
      }, { passive: true });
      window.addEventListener('beforeprint', function () {
        Array.prototype.forEach.call(document.querySelectorAll('details'), function (d) {
          d.open = true;
        });
      });
    })
    .catch(function (e) {
      fehler('Der Inhalt dieser Lernseite ist zurzeit nicht erreichbar (' + e.message + ').');
    });
})();
