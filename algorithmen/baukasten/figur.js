/* ============================================================
   figur.js – eigenes Bild statt Käfer
   Foto aufnehmen oder wählen, im Dialog rund zuschneiden (verschieben, zoomen),
   als kleines Bild im Browser speichern (localStorage). Nichts wird gesendet,
   das Originalfoto wird nach dem Zuschneiden verworfen.
   Schnittstelle zu app.js: BaukastenFigur.bild() liefert die Daten-URL oder null,
   BaukastenFigur.onChange wird nach jeder Änderung aufgerufen.
   ============================================================ */
(function () {
  "use strict";

  var SPEICHER = "checks.baukasten.figur.v1";
  var S = 320;              // Zeichenfläche (px, quadratisch)
  var R = 140;              // Radius des Ausschnitts
  var C = S / 2;            // Mittelpunkt
  var AUSGABE = 128;        // Kantenlänge des gespeicherten Bildes
  var MAX_ZOOM = 4;
  var SCHRITT = 12;         // Pfeiltasten: Pixel pro Druck

  var $ = function (id) { return document.getElementById(id); };
  var dialog = $("bildDialog"), canvas = $("bildCanvas"), zoomEl = $("bildZoom");
  var api = { onChange: null, bild: function () { return aktuell; } };
  window.BaukastenFigur = api;

  var aktuell = null;
  var figurDialog = $("figurDialog");

  /* ---------- Speicher ---------- */

  function laden() {
    try {
      var v = localStorage.getItem(SPEICHER);
      if (typeof v === "string" && /^data:image\/(png|webp|jpeg);base64,[A-Za-z0-9+\/=]+$/.test(v)) aktuell = v;
    } catch (e) { aktuell = null; }
  }
  function speichern() {
    try {
      if (aktuell) localStorage.setItem(SPEICHER, aktuell); else localStorage.removeItem(SPEICHER);
    } catch (e) { /* ohne Speicher: Bild gilt nur bis zum Neuladen */ }
  }
  function geaendert() {
    if (typeof api.onChange === "function") api.onChange();
  }

  /* ---------- Zuschneiden ---------- */

  var bild = null;          // ImageBitmap oder HTMLImageElement
  var bw = 0, bh = 0;       // Bildgrösse
  var basis = 1;            // kleinster Massstab: Ausschnitt ist ganz bedeckt
  var zoom = 1;
  var ox = 0, oy = 0;       // linke obere Ecke des Bildes auf der Zeichenfläche
  var zeiger = {};          // aktive Pointer: id -> {x, y}
  var pinch = null;
  var letzteQuelle = null;  // "kamera" | "datei": für «Neu aufnehmen»

  function skala() { return basis * zoom; }

  function begrenzen() {
    var k = skala();
    ox = Math.min(C - R, Math.max(C + R - bw * k, ox));
    oy = Math.min(C - R, Math.max(C + R - bh * k, oy));
  }

  function zeichnen() {
    var ctx = canvas.getContext("2d");
    var k = skala();
    ctx.clearRect(0, 0, S, S);
    ctx.fillStyle = "#222";
    ctx.fillRect(0, 0, S, S);
    ctx.drawImage(bild, ox, oy, bw * k, bh * k);
    ctx.fillStyle = "rgba(0,0,0,.6)";
    ctx.beginPath();
    ctx.rect(0, 0, S, S);
    ctx.arc(C, C, R, 0, Math.PI * 2, true);
    ctx.fill("evenodd");
    ctx.strokeStyle = "#fff";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(C, C, R, 0, Math.PI * 2);
    ctx.stroke();
  }

  // Zoom ändern, dabei bleibt der Bildpunkt unter (ax, ay) stehen.
  function zoomSetzen(neu, ax, ay) {
    neu = Math.min(MAX_ZOOM, Math.max(1, neu));
    var alt = skala();
    var px = (ax - ox) / alt, py = (ay - oy) / alt;
    zoom = neu;
    var k = skala();
    ox = ax - px * k;
    oy = ay - py * k;
    begrenzen();
    zoomEl.value = String(Math.round(zoom * 100));
    zeichnen();
  }

  function oeffnen(b, breite, hoehe) {
    bild = b; bw = breite; bh = hoehe;
    basis = Math.max((2 * R) / bw, (2 * R) / bh);
    zoom = 1;
    ox = C - (bw * basis) / 2;
    oy = C - (bh * basis) / 2;
    zoomEl.value = "100";
    begrenzen();
    zeichnen();
    if (!dialog.open) dialog.showModal();
    canvas.focus();
  }

  function schliessen() {
    if (dialog.open) dialog.close();
    if (bild && typeof bild.close === "function") bild.close();
    bild = null;
    zeiger = {}; pinch = null;
  }

  function uebernehmen() {
    if (!bild) return;
    var k = skala();
    var out = document.createElement("canvas");
    out.width = out.height = AUSGABE;
    var ctx = out.getContext("2d");
    ctx.beginPath();
    ctx.arc(AUSGABE / 2, AUSGABE / 2, AUSGABE / 2, 0, Math.PI * 2);
    ctx.clip();
    ctx.drawImage(bild, (C - R - ox) / k, (C - R - oy) / k, (2 * R) / k, (2 * R) / k, 0, 0, AUSGABE, AUSGABE);
    var url = out.toDataURL("image/webp", 0.85);
    if (!/^data:image\/(png|webp);base64,/.test(url)) url = out.toDataURL("image/png");
    aktuell = url;
    speichern();
    schliessen();
    geaendert();
  }

  /* ---------- Datei einlesen ---------- */

  function einlesen(datei, quelle) {
    if (!datei || !/^image\//.test(datei.type)) return;
    letzteQuelle = quelle;
    var weiter = function (b, w, h) { oeffnen(b, w, h); };
    var ueberImg = function () {
      var url = URL.createObjectURL(datei), img = new Image();
      img.onload = function () { URL.revokeObjectURL(url); weiter(img, img.naturalWidth, img.naturalHeight); };
      img.onerror = function () { URL.revokeObjectURL(url); meldung("Das Bild konnte nicht gelesen werden."); };
      img.src = url;
    };
    if (window.createImageBitmap) {
      // imageOrientation: Handy-Fotos mit EXIF-Drehung stehen richtig herum.
      createImageBitmap(datei, { imageOrientation: "from-image" })
        .then(function (b) { weiter(b, b.width, b.height); })
        .catch(ueberImg);
    } else ueberImg();
  }

  function meldung(text) {
    var m = $("bildMeldung");
    m.textContent = text;
    m.hidden = !text;
  }

  /* ---------- Bedienung ---------- */

  function zeigerPos(e) {
    var r = canvas.getBoundingClientRect();
    return { x: (e.clientX - r.left) * (S / r.width), y: (e.clientY - r.top) * (S / r.height) };
  }
  function abstand() {
    var ids = Object.keys(zeiger);
    var a = zeiger[ids[0]], b = zeiger[ids[1]];
    return { d: Math.hypot(a.x - b.x, a.y - b.y), x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
  }

  canvas.addEventListener("pointerdown", function (e) {
    if (!bild) return;
    canvas.setPointerCapture(e.pointerId);
    zeiger[e.pointerId] = zeigerPos(e);
    if (Object.keys(zeiger).length === 2) { var a = abstand(); pinch = { d: a.d, zoom: zoom }; }
    e.preventDefault();
  });
  canvas.addEventListener("pointermove", function (e) {
    if (!bild || !zeiger[e.pointerId]) return;
    var neu = zeigerPos(e), alt = zeiger[e.pointerId];
    zeiger[e.pointerId] = neu;
    if (Object.keys(zeiger).length >= 2 && pinch) {
      var a = abstand();
      zoomSetzen(pinch.zoom * (a.d / pinch.d), a.x, a.y);
    } else {
      ox += neu.x - alt.x;
      oy += neu.y - alt.y;
      begrenzen();
      zeichnen();
    }
  });
  function loslassen(e) {
    delete zeiger[e.pointerId];
    if (Object.keys(zeiger).length < 2) pinch = null;
  }
  canvas.addEventListener("pointerup", loslassen);
  canvas.addEventListener("pointercancel", loslassen);

  canvas.addEventListener("wheel", function (e) {
    if (!bild) return;
    e.preventDefault();
    var p = zeigerPos(e);
    zoomSetzen(zoom * (e.deltaY < 0 ? 1.08 : 1 / 1.08), p.x, p.y);
  }, { passive: false });

  canvas.addEventListener("keydown", function (e) {
    if (!bild) return;
    var d = { ArrowLeft: [-SCHRITT, 0], ArrowRight: [SCHRITT, 0], ArrowUp: [0, -SCHRITT], ArrowDown: [0, SCHRITT] }[e.key];
    if (d) { ox += d[0]; oy += d[1]; begrenzen(); zeichnen(); e.preventDefault(); }
    else if (e.key === "+" || e.key === "=") { zoomSetzen(zoom * 1.1, C, C); e.preventDefault(); }
    else if (e.key === "-" || e.key === "_") { zoomSetzen(zoom / 1.1, C, C); e.preventDefault(); }
  });

  zoomEl.addEventListener("input", function () {
    if (bild) zoomSetzen(Number(zoomEl.value) / 100, C, C);
  });

  /* ---------- Knöpfe ---------- */

  var dateiKamera = $("bildDateiKamera"), dateiWahl = $("bildDateiWahl");
  function menueZu() { if (figurDialog.open) figurDialog.close(); }
  $("knopfBildKamera").addEventListener("click", function () { menueZu(); meldung(""); dateiKamera.value = ""; dateiKamera.click(); });
  $("knopfBildWahl").addEventListener("click", function () { menueZu(); meldung(""); dateiWahl.value = ""; dateiWahl.click(); });
  $("figurZu").addEventListener("click", menueZu);
  dateiKamera.addEventListener("change", function () { einlesen(dateiKamera.files[0], "kamera"); });
  dateiWahl.addEventListener("change", function () { einlesen(dateiWahl.files[0], "datei"); });

  $("knopfBildWeg").addEventListener("click", function () { menueZu(); aktuell = null; speichern(); geaendert(); });
  $("bildOk").addEventListener("click", uebernehmen);
  $("bildAbbruch").addEventListener("click", schliessen);
  $("bildNeu").addEventListener("click", function () {
    var quelle = letzteQuelle;
    schliessen();
    (quelle === "kamera" ? dateiKamera : dateiWahl).value = "";
    (quelle === "kamera" ? dateiKamera : dateiWahl).click();
  });
  dialog.addEventListener("cancel", function () { if (bild && typeof bild.close === "function") bild.close(); bild = null; zeiger = {}; pinch = null; });

  // Versteckt: dreimal schnell auf den Käfer (oder das Bild) klicken öffnet das Figur-Menü.
  var klicks = 0, klickZeit = 0;
  $("feld").addEventListener("click", function (e) {
    if (!e.target.closest || !e.target.closest(".bk-kaefer")) { klicks = 0; return; }
    var jetzt = Date.now();
    klicks = jetzt - klickZeit < 700 ? klicks + 1 : 1;
    klickZeit = jetzt;
    if (klicks >= 3) {
      klicks = 0;
      $("knopfBildWeg").hidden = !aktuell;
      if (!figurDialog.open) figurDialog.showModal();
    }
  });

  laden();
  $("knopfBildWeg").hidden = !aktuell;
})();
