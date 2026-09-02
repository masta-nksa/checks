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
