/* ============================================================
   check.js – Engine aller Self-Checks
   Laedt fragen.json relativ zur eigenen Seite und rendert
   Kopf, Fragekarten, Feedback, Zaehler und Loesungsschluessel.
   Pro Check wird nur fragen.json geschrieben, nie diese Datei.
   ============================================================ */
(function () {
  "use strict";

  var KEYS = ["A", "B", "C", "D"];
  var root;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }

  function start() {
  root = document.getElementById("check");
  if (!root) return;

  fetch("fragen.json", { cache: "no-cache" })
    .then(function (r) {
      if (!r.ok) throw new Error("HTTP " + r.status);
      return r.json();
    })
    .then(function (data) {
      validate(data);
      build(data);
    })
    .catch(function (err) {
      oops(err);
    });
  }

  /* ---------- Validierung ---------------------------------- */

  function validate(d) {
    if (!d || !Array.isArray(d.fragen) || d.fragen.length === 0) {
      throw new Error("Feld \u201efragen\u201c fehlt oder ist leer.");
    }
    d.fragen.forEach(function (f, i) {
      var nr = "Frage " + (i + 1) + ": ";
      if (typeof f.q !== "string") throw new Error(nr + "Feld \u201eq\u201c fehlt.");
      if (!Array.isArray(f.opts) || f.opts.length < 2 || f.opts.length > 4) {
        throw new Error(nr + "\u201eopts\u201c braucht 2 bis 4 Optionen.");
      }
      if (typeof f.a !== "number" || f.a < 0 || f.a >= f.opts.length) {
        throw new Error(nr + "\u201ea\u201c zeigt auf keine vorhandene Option.");
      }
    });
  }

  /* ---------- Aufbau --------------------------------------- */

  function build(data) {
    var titel = data.titel || "Self-Check";
    document.title = titel;

    root.textContent = "";

    var head = el("header");
    if (data.eyebrow) head.append(el("span", "eyebrow", data.eyebrow));
    head.append(el("h1", null, titel));
    if (data.intro) head.append(el("p", "lead", data.intro));

    var rule = el("div", "pixelrule");
    rule.setAttribute("aria-hidden", "true");
    for (var i = 0; i < 40; i++) rule.append(document.createElement("i"));
    head.append(rule);

    if (Array.isArray(data.quellen) && data.quellen.length) {
      var src = el("div", "sources");
      data.quellen.forEach(function (q) { src.append(el("span", null, q)); });
      head.append(src);
    }

    var quiz = el("div");
    quiz.id = "quiz";

    var score = el("div", "score");
    score.id = "score";
    var doneEl = el("span", null, "0");
    var rightEl = el("b", null, "0");
    var doneWrap = el("b");
    doneWrap.append(doneEl, document.createTextNode("/" + data.fragen.length));
    score.append(
      document.createTextNode("Beantwortet: "), doneWrap,
      document.createTextNode(" \u00b7 Richtig: "), rightEl
    );
    var reset = el("button", "reset", "neu starten");
    reset.type = "button";
    score.append(reset);

    var solution = el("div", "solution");
    var key = data.fragen.map(function (f, i) {
      return (i + 1) + " " + KEYS[f.a];
    }).join(" \u00b7 ");
    solution.append(el("h2", null, "L\u00f6sungsschl\u00fcssel"), el("p", null, key));

    root.append(head, quiz, score, solution);

    var done = 0, right = 0;

    function render() {
      quiz.textContent = "";
      done = 0; right = 0;
      doneEl.textContent = "0";
      rightEl.textContent = "0";

      data.fragen.forEach(function (item, i) {
        var card = document.createElement("section");
        card.className = "q";

        var qhead = el("div", "qhead");
        var num = el("span", "qnum", String(i + 1).padStart(2, "0"));
        var text = el("p", "qtext");
        text.innerHTML = item.q;
        qhead.append(num, text);

        var opts = el("div", "opts");
        var fb = el("div", "fb");

        var buttons = item.opts.map(function (opt, j) {
          var b = document.createElement("button");
          b.className = "opt";
          b.type = "button";
          var k = el("span", "key", KEYS[j]);
          var label = document.createElement("span");
          label.innerHTML = opt;
          b.append(k, label);

          b.addEventListener("click", function () {
            buttons.forEach(function (other, m) {
              other.disabled = true;
              if (m === item.a) other.classList.add("correct");
              else if (m === j) other.classList.add("wrong");
              else other.classList.add("dim");
            });
            var ok = j === item.a;
            fb.innerHTML =
              (ok ? "<b>Richtig.</b> "
                  : "<b>Nicht ganz.</b> Richtig ist " + KEYS[item.a] + ". ") +
              (item.fb || "");
            fb.style.borderLeftColor = ok ? "var(--ok)" : "var(--no)";
            fb.classList.add("show");
            done++; if (ok) right++;
            doneEl.textContent = done;
            rightEl.textContent = right;
          });
          return b;
        });

        buttons.forEach(function (b) { opts.append(b); });
        card.append(qhead, opts, fb);
        quiz.append(card);
      });
    }

    reset.addEventListener("click", function () {
      render();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    render();
  }

  /* ---------- Fehlerfall ----------------------------------- */

  function oops(err) {
    root.textContent = "";
    var box = el("div", "oops");
    box.append(el("h2", null, "Der Check kann nicht geladen werden."));
    var p = el("p");
    p.innerHTML =
      "Die Datei <code>fragen.json</code> fehlt oder enth\u00e4lt einen Fehler. " +
      "Bitte melden Sie das der Lehrperson.<br>" +
      "<code>" + String(err && err.message ? err.message : err) + "</code>";
    box.append(p);
    root.append(box);
    console.error("[check.js]", err);
  }

  /* ---------- Mini-Helfer ---------------------------------- */

  function el(tag, cls, txt) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (txt != null) n.textContent = txt;
    return n;
  }
})();
