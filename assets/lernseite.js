/* lernseite.js — lädt inhalt.md, rendert es, baut Inhaltsverzeichnis und
   Fortschrittsbalken. Zusätzlich: Druck-Menü oben rechts, das aus derselben
   Seite heraus wahlweise ein Arbeitsblatt (arbeitsblatt.md, ohne oder mit
   Kontrollen) oder die Nachlese-Fassung mit allen Lösungen druckt.
   Für alle Lernseiten identisch; pro Seite werden nur inhalt.md und
   – optional – arbeitsblatt.md geschrieben. */
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

  function alleDetailsOeffnen() {
    Array.prototype.forEach.call(document.querySelectorAll('#inhalt details'), function (d) {
      d.open = true;
    });
  }

  /* ================================================================
     Druck-Menü
     ================================================================ */

  var VARIANTEN = [
    { id: 'arbeitsblatt', text: 'Arbeitsblatt (ohne Lösungen)',
      klasse: 'drucken-arbeitsblatt', brauchtArbeitsblatt: true },
    { id: 'arbeitsblatt-kontrollen', text: 'Arbeitsblatt mit Kontrollen',
      klasse: 'drucken-arbeitsblatt-kontrollen', brauchtArbeitsblatt: true },
    { id: 'lernseite', text: 'Lernseite (mit allen Lösungen)',
      klasse: 'drucken-lernseite', brauchtArbeitsblatt: false }
  ];

  var knopf, menue;

  function druckMenueBauen() {
    var wrap = document.createElement('div');
    wrap.className = 'drucken';

    knopf = document.createElement('button');
    knopf.type = 'button';
    knopf.className = 'drucken-knopf';
    knopf.id = 'drucken-knopf';
    knopf.setAttribute('aria-label', 'Drucken');
    knopf.setAttribute('aria-haspopup', 'menu');
    knopf.setAttribute('aria-expanded', 'false');
    knopf.setAttribute('aria-controls', 'drucken-menue');
    knopf.innerHTML =
      '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" ' +
      'stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      '<path d="M6 9V3h12v6"/>' +
      '<path d="M6 18H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2"/>' +
      '<rect x="6" y="13" width="12" height="8" rx="1"/></svg>';

    menue = document.createElement('div');
    menue.className = 'drucken-menue';
    menue.id = 'drucken-menue';
    menue.setAttribute('role', 'menu');
    menue.setAttribute('aria-label', 'Druckvariante wählen');
    menue.hidden = true;

    VARIANTEN.forEach(function (v) {
      var item = document.createElement('button');
      item.type = 'button';
      item.className = 'drucken-eintrag';
      item.setAttribute('role', 'menuitem');
      item.textContent = v.text;
      item.dataset.variante = v.id;
      if (v.brauchtArbeitsblatt) item.dataset.brauchtArbeitsblatt = '1';
      item.addEventListener('click', function () {
        menueSchliessen(false);
        druckStarten(v);
      });
      menue.appendChild(item);
    });

    var hinweis = document.createElement('p');
    hinweis.className = 'drucken-hinweis';
    hinweis.textContent =
      'Im Druckdialog „Hintergrundgrafiken“ aktivieren, sonst fehlen Farbflächen und Schreiblinien.';
    menue.appendChild(hinweis);

    knopf.addEventListener('click', function () {
      if (menue.hidden) menueOeffnen(); else menueSchliessen(true);
    });
    knopf.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown' || e.key === 'Down') { e.preventDefault(); menueOeffnen(false); }
      else if (e.key === 'ArrowUp' || e.key === 'Up') { e.preventDefault(); menueOeffnen(true); }
    });
    menue.addEventListener('keydown', menueTaste);
    document.addEventListener('click', function (e) {
      if (!wrap.contains(e.target)) menueSchliessen(false);
    });

    wrap.appendChild(knopf);
    wrap.appendChild(menue);
    document.body.appendChild(wrap);

    arbeitsblattFreischalten(false);
  }

  function eintraege() {
    return Array.prototype.filter.call(menue.querySelectorAll('.drucken-eintrag'), function (b) {
      return !b.hidden;
    });
  }

  function menueOeffnen(ansEnde) {
    menue.hidden = false;
    knopf.setAttribute('aria-expanded', 'true');
    var liste = eintraege();
    if (liste.length) (ansEnde ? liste[liste.length - 1] : liste[0]).focus();
  }

  function menueSchliessen(fokusZumKnopf) {
    if (menue.hidden) return;
    menue.hidden = true;
    knopf.setAttribute('aria-expanded', 'false');
    if (fokusZumKnopf) knopf.focus();
  }

  function menueTaste(e) {
    var liste = eintraege();
    var i = liste.indexOf(document.activeElement);
    switch (e.key) {
      case 'ArrowDown': case 'Down':
        e.preventDefault(); (liste[i + 1] || liste[0]).focus(); break;
      case 'ArrowUp': case 'Up':
        e.preventDefault(); (liste[i - 1] || liste[liste.length - 1]).focus(); break;
      case 'Home':
        e.preventDefault(); if (liste[0]) liste[0].focus(); break;
      case 'End':
        e.preventDefault(); if (liste.length) liste[liste.length - 1].focus(); break;
      case 'Escape': case 'Esc':
        e.preventDefault(); menueSchliessen(true); break;
      case 'Tab':
        menueSchliessen(false); break;
    }
  }

  function arbeitsblattFreischalten(vorhanden) {
    Array.prototype.forEach.call(menue.querySelectorAll('[data-braucht-arbeitsblatt]'), function (b) {
      b.hidden = !vorhanden;
    });
  }

  function druckStarten(v) {
    var wurzel = document.documentElement;
    if (v.id === 'lernseite') alleDetailsOeffnen();
    wurzel.classList.add(v.klasse);

    var mm = window.matchMedia ? window.matchMedia('print') : null;
    function aufraeumen() {
      wurzel.classList.remove(v.klasse);
      window.removeEventListener('afterprint', aufraeumen);
      if (mm && mm.removeEventListener) mm.removeEventListener('change', beiWechsel);
    }
    function beiWechsel(e) { if (!e.matches) aufraeumen(); }
    window.addEventListener('afterprint', aufraeumen);
    if (mm && mm.addEventListener) mm.addEventListener('change', beiWechsel);

    window.print();
  }

  /* ================================================================
     Arbeitsblatt aus arbeitsblatt.md
     ================================================================ */

  // Marken müssen als eigener Block bei marked ankommen. Steht eine Marke ohne
  // Leerzeile direkt an einer Tabelle oder einem Absatz, zieht Markdown sie sonst
  // hinein. Darum vorab jede Zeile, die NUR aus einer Marke besteht, mit
  // Leerzeilen umgeben – das zerlegt keine Tabelle und keine Liste, weil eine
  // solche Zeile weder Zeilenumbruch-Pipe noch Aufzählungszeichen enthält.
  // Codeblöcke (``` / ~~~) bleiben unangetastet.
  function markdownVorbereiten(md) {
    var zeilen = String(md).replace(/\r\n?/g, '\n').split('\n');
    var raus = [];
    var imCode = false;
    for (var i = 0; i < zeilen.length; i++) {
      var z = zeilen[i];
      if (/^\s*(```|~~~)/.test(z)) imCode = !imCode;
      var istMarkenZeile = !imCode && /^\s*\[\[\/?[a-zA-Z]+(?::[^\]]*)?\]\]\s*$/.test(z);
      if (istMarkenZeile) {
        if (raus.length && raus[raus.length - 1].trim() !== '') raus.push('');
        raus.push(z.trim());
        if (i + 1 < zeilen.length && zeilen[i + 1].trim() !== '') raus.push('');
      } else {
        raus.push(z);
      }
    }
    return raus.join('\n');
  }

  function markeAusText(s) {
    var t = String(s).replace(/<[^>]+>/g, '').trim();
    var m = t.match(/^\[\[(\/?[a-zA-Z]+)(?::\s*([\s\S]*?))?\s*\]\]$/);
    return m ? { name: m[1].toLowerCase(), arg: (m[2] || '').trim() } : null;
  }

  function istMarke(el) {
    return el && el.tagName === 'P' ? markeAusText(el.textContent) : null;
  }

  // Marken, die (mangels Leerzeile) mit Nachbarzeilen in einem <p> gelandet
  // sind, in eigene <p> auftrennen. DOM-basiert, damit Tabellen und Listen
  // heil bleiben.
  function markenZeilenTrennen(root) {
    Array.prototype.slice.call(root.querySelectorAll('p')).forEach(function (p) {
      var zeilen = p.innerHTML.split('\n');
      if (zeilen.length < 2) return;
      if (!zeilen.some(function (z) { return markeAusText(z); })) return;

      var neu = [];
      var puffer = [];
      function pufferLeeren() {
        if (puffer.join('\n').replace(/<[^>]+>/g, '').trim() !== '') {
          var np = document.createElement('p');
          np.innerHTML = puffer.join('\n');
          neu.push(np);
        }
        puffer = [];
      }
      zeilen.forEach(function (z) {
        if (markeAusText(z)) {
          pufferLeeren();
          var mp = document.createElement('p');
          mp.textContent = z.replace(/<[^>]+>/g, '').trim();
          neu.push(mp);
        } else {
          puffer.push(z);
        }
      });
      pufferLeeren();

      neu.forEach(function (n) { p.parentNode.insertBefore(n, p); });
      p.remove();
    });
  }

  var BLOCKMARKEN = {
    anleitung: 'anleitung', aufgabe: 'aufgabe', kontrolle: 'kontrolle',
    merksatz: 'merksatz', checkliste: 'checkliste'
  };

  function blockMarkenAufloesen(root) {
    var weiter = true;
    while (weiter) {
      weiter = false;
      var kinder = root.children;
      for (var i = 0; i < kinder.length; i++) {
        var m = istMarke(kinder[i]);
        if (!m || !BLOCKMARKEN[m.name]) continue;

        var div = document.createElement('div');
        div.className = BLOCKMARKEN[m.name];
        if (m.name === 'aufgabe' && m.arg) {
          var titel = document.createElement('p');
          titel.className = 'aufgabe-titel';
          titel.textContent = m.arg;
          div.appendChild(titel);
        }

        var j = -1;
        for (var k = i + 1; k < kinder.length; k++) {
          var s = istMarke(kinder[k]);
          if (s && s.name === '/' + m.name) { j = k; break; }
        }
        var ende = j === -1 ? kinder.length : j;
        var verschieben = [];
        for (var x = i + 1; x < ende; x++) verschieben.push(kinder[x]);
        verschieben.forEach(function (n) { div.appendChild(n); });

        if (m.name === 'aufgabe' && div.querySelectorAll('table').length >= 2) {
          div.classList.add('teilbar');
        }
        if (m.name === 'checkliste') {
          var ul = div.querySelector('ul');
          if (ul) ul.classList.add('checkliste-liste');
        }

        root.replaceChild(div, kinder[i]);
        for (var y = 0; y < root.children.length; y++) {
          var sc = istMarke(root.children[y]);
          if (sc && sc.name === '/' + m.name) { root.children[y].remove(); break; }
        }
        weiter = true;
        break;
      }
    }
  }

  function namensfeld() {
    var div = document.createElement('div');
    div.className = 'namensfeld';
    ['Name', 'Klasse', 'Datum'].forEach(function (label) {
      var feld = document.createElement('span');
      feld.className = 'nf-feld';
      var l = document.createElement('span');
      l.className = 'nf-label';
      l.textContent = label;
      var linie = document.createElement('span');
      linie.className = 'nf-linie';
      feld.appendChild(l);
      feld.appendChild(linie);
      div.appendChild(feld);
    });
    return div;
  }

  function antwortfeld(arg) {
    var n = parseInt(arg, 10);
    if (!(n >= 1 && n <= 4)) n = 2;
    var div = document.createElement('div');
    div.className = 'antwort z' + n;
    for (var i = 0; i < n; i++) {
      var linie = document.createElement('span');
      linie.className = 'antwort-linie';
      div.appendChild(linie);
    }
    return div;
  }

  function einzelmarkenAufloesen(root) {
    Array.prototype.slice.call(root.querySelectorAll('p')).forEach(function (p) {
      var m = istMarke(p);
      if (!m) return;
      if (m.name === 'namensfeld') {
        p.parentNode.replaceChild(namensfeld(), p);
      } else if (m.name === 'antwort') {
        p.parentNode.replaceChild(antwortfeld(m.arg), p);
      }
    });
  }

  // Nach jeder ##-Überschrift einen unsichtbaren Reserve-Block einziehen: passt
  // Titel + rund ein Seitenviertel Inhalt nicht mehr auf die Seite, wandert die
  // Überschrift im Druck auf die nächste – so beginnt kein „Teil“ zuunterst.
  // Die Höhe steckt in arbeitsblatt.css (.teil-reserve).
  function teilUmbruchVorbereiten(root) {
    Array.prototype.forEach.call(root.querySelectorAll('h2'), function (h) {
      var reserve = document.createElement('div');
      reserve.className = 'teil-reserve';
      reserve.setAttribute('aria-hidden', 'true');
      h.parentNode.insertBefore(reserve, h.nextSibling);
    });
  }

  function ausfuelltabellen(root) {
    Array.prototype.forEach.call(root.querySelectorAll('table'), function (t) {
      var zellen = t.querySelectorAll('tbody td');
      var leere = Array.prototype.filter.call(zellen, function (td) {
        return td.textContent.trim() === '';
      });
      if (!leere.length) return;
      t.classList.add('ausfuellen');
      leere.forEach(function (td) { td.classList.add('leer'); });
    });
  }

  function arbeitsblattBauen(md) {
    var sec = document.createElement('section');
    sec.id = 'arbeitsblatt';
    sec.hidden = true;
    sec.innerHTML = marked.parse(markdownVorbereiten(md));
    markenZeilenTrennen(sec);
    blockMarkenAufloesen(sec);
    einzelmarkenAufloesen(sec);
    ausfuelltabellen(sec);
    teilUmbruchVorbereiten(sec);
    document.body.appendChild(sec);
  }

  /* ================================================================
     Start
     ================================================================ */

  druckMenueBauen();

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

  fetch('arbeitsblatt.md')
    .then(function (r) {
      if (r.status === 404) return null;          // 404 = diese Seite hat kein Arbeitsblatt
      if (!r.ok) throw new Error('Status ' + r.status);
      return r.text();
    })
    .then(function (md) {
      if (md == null) return;
      arbeitsblattBauen(md);
      arbeitsblattFreischalten(true);
    })
    .catch(function () {
      /* Arbeitsblatt nicht ladbar → Menü zeigt nur „Lernseite (mit allen Lösungen)“ */
    });
})();
