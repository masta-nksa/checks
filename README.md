# checks – Self-Check-Plattform

Statische Multiple-Choice-Selbstchecks für verschiedene Unterrichtsgefässe.
Kein Build-Schritt, kein Jekyll – reines HTML/CSS/JS aus dem `main`-Branch.

**Live:** <https://masta-nksa.github.io/checks/>

Pfadschema: ein Ordner pro Themengebiet, darin ein Ordner pro Check –
`https://masta-nksa.github.io/checks/graphiken/pixel/`.
Das Gefäss (FMS, Freifach, Gym) steht nicht im Pfad, sondern in `manifest.json`;
so bleibt die URL kurz und gültig, auch wenn ein Thema das Gefäss wechselt.

Die Checks sind **thematisch** gruppiert und bewusst **nicht** an einzelne Lektionen
gebunden – ein Check kann jederzeit und unabhängig vom Lektionsstand gelöst werden.

## Neuen Check anlegen (drei Handgriffe)

1. Einen bestehenden Check-Ordner kopieren und umbenennen
   (z. B. `graphiken/pixel/` → `zahlensysteme/binaer/`).
2. `fragen.json` inhaltlich ersetzen.
3. In `manifest.json` beim passenden Thema einen Eintrag ergänzen
   (oder ein neues Thema anlegen).

`index.html` im Check-Ordner wird **nie** angefasst – sie ist für alle Checks identisch
und findet `assets/` selbst, unabhängig von der Ordnertiefe.

## Format `fragen.json`

```json
{
  "titel": "Pixel-Check",
  "eyebrow": "FMS · Farben und Bilder",
  "intro": "Sechs Fragen zu …",
  "quellen": ["inf-schule.de/…"],
  "fragen": [
    {
      "q": "Fragetext, einfaches HTML erlaubt (<i>, <b>)",
      "opts": ["Option A", "Option B", "Option C"],
      "a": 1,
      "fb": "Begründung, wird nach dem Klick eingeblendet."
    }
  ]
}
```

- `a` = Nullindex der richtigen Option.
- `opts` = 2 bis 4 Optionen; die Buchstaben A–D vergibt die Engine.
- `quellen` und `eyebrow` sind optional. Im `eyebrow` steht das Thema, keine Lektionsnummer.
- Datei als **UTF-8** speichern (Umlaute, «·», «→»).

## Format `manifest.json`

```json
{
  "themen": [
    {
      "thema": "Zahlensysteme",
      "gefaess": "FMS",
      "checks": [
        {
          "titel": "Binär-Check",
          "untertitel": "Stellenwerte, Zweierpotenzen, Umrechnung",
          "pfad": "zahlensysteme/binaer/"
        }
      ]
    }
  ]
}
```

Die Reihenfolge der Themen und der Checks innerhalb eines Themas ist genau die
Reihenfolge in dieser Datei – sinnvollerweise von den Grundlagen zu den Anwendungen.
`gefaess` und `untertitel` sind optional.

Neben `checks` kennt ein Thema optional `lernseiten` («Zum Nachlesen») und
`werkzeuge` («Zum Ausprobieren», Kennzeichnung «Werkzeug»). Ein Eintrag in
`werkzeuge` hat dieselben Felder wie ein Check (`titel`, `untertitel`, `pfad`),
verweist aber auf eine eigenständige Seite statt auf einen Fragenkatalog.

## Werkzeug: Struktogramm-Baukasten (Käfer)

`algorithmen/baukasten/` ist kein Check, sondern ein eigenes Werkzeug (reines
HTML/CSS/JS, keine Bibliotheken, es wird nichts gesendet). Bausteine werden per
Drag and Drop (Maus und Touch) oder per Antippen/Tastatur ins Struktogramm
gesetzt; der Käfer führt das Programm auf einem Feld aus.

- `aufgaben.json`: die Aufgaben (Feld, Palette, Bausteinlimit, Ziel). **Keine Lösungen.**
- `labyrinth.json`: zweite Reihe «Labyrinth» (10 Levels nach Blockly Games, Maze; Karten und
  Bausteinlimits aus <https://github.com/google/blockly-games>, Apache-Lizenz 2.0), gleiches
  Format. Aufruf direkt per `algorithmen/baukasten/?reihe=labyrinth`, sonst über die Reihenwahl
  oben im Baukasten. Das Feld wird als Zeichenkarte angegeben (`feld.karte`, oberste Zeile zuerst:
  `#` Mauer, `.` Weg, `S` Start, `Z` Ziel); Start und Ziel ergeben sich daraus.
- Palette-Optionen (zusätzlich zu `befehle`, `wiederholung`, `verzweigung`): `bis: true` bietet
  «wiederhole bis Ziel»; `bedingungen` (`frei`, `freiLinks`, `freiRechts`) legt fest, welche
  «Feld … frei?»-Verzweigungen es gibt; `sonst: false` blendet den Sonst-Zweig aus.
- Aufgabenfeld `maxTiefe` (Standard 3): wie viele Ebenen Wiederholungen und Verzweigungen
  ineinander stecken dürfen. Die Labyrinth-Levels mit Verzweigung (6 bis 10) erlauben 6.
- `engine.js`: Interpreter, Prüfung und Programmbaum als reine Funktionen (ohne DOM).
  Befehle, Bedingungen und Ziel-Typen stehen in Tabellen und sind erweiterbar.
- Die Prüfung vergleicht das **Ergebnis** (Endfeld, besuchte Felder, Bausteinlimit),
  nie ein Muster. Lösungen und Tests gehören nicht in dieses Repo.
- Gelöste Aufgaben merkt sich der Browser in `localStorage` (Schlüssel `checks.baukasten.v1`).
- Easter Egg, versteckt: **Dreifachklick auf den Käfer** (drei Klicks innerhalb von 0,7 s) öffnet
  das Figur-Menü (`figur.js`): «Foto aufnehmen» (Kamera-Vorschau mit Auslöser, am Computer wie am Handy; der Browser fragt
  zuerst nach der Erlaubnis, ohne Kamera bleibt «Bild wählen») oder «Bild wählen»,
  danach Zuschneiden in einem runden Ausschnitt (verschieben, zoomen, auch per Tastatur).
  Gespeichert wird nur der kleine Ausschnitt (128 px) in `localStorage`
  (`checks.baukasten.figur.v1`); das Foto wird nicht gesendet und danach verworfen. Das Bild
  bleibt aufrecht, ein Zeiger am Rand zeigt die Blickrichtung. Ein weiterer Dreifachklick auf das
  Bild öffnet das Menü wieder; dort entfernt «Zurück zum Käfer» das Bild.
- Der Stand der Bausteine jeder Aufgabe bleibt im Browser erhalten (`checks.baukasten.prog.v1`),
  auch nach Seitenwechsel oder Neuladen. «Alles löschen» leert die Aufgabe; «Rückgängig» holt
  die Bausteine zurück, solange die Seite offen ist.

## Papierversion

Check-Seite im Browser drucken (Strg+P). Die Druckansicht zeigt Ankreuzkästchen
statt Farbflächen, blendet Begründungen und Zähler aus und hängt am Ende einen
Lösungsschlüssel an. Damit entfällt die separate Word-Variante fürs OneNote.

## OneNote

OneNote führt kein JavaScript aus. In die OneNote-Seite kommt der **Link** auf den
Check (optional zusätzlich ein QR-Code als Bild), nicht der HTML-Code.

## QR-Codes auf der Übersicht

Optional: eine `qrcode.min.js` (z. B. davidshimjs/qrcodejs) nach `assets/` legen.
Die Übersichtsseite erkennt die Bibliothek selbst und zeigt dann pro Check einen QR-Code.
Fehlt die Datei, bleibt die Übersicht unverändert funktionsfähig.

## GitHub Pages einrichten

Settings → Pages → Source: „Deploy from a branch“, Branch `main`, Ordner `/ (root)`.
Repo öffentlich. Die leere Datei `.nojekyll` im Root muss bestehen bleiben.

## Lokal testen

```
python -m http.server 8000
```
… und `http://localhost:8000/` öffnen.
