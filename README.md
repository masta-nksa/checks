# checks – Self-Check-Plattform

Statische Multiple-Choice-Selbstchecks für verschiedene Unterrichtsgefässe.
Kein Build-Schritt, kein Jekyll – reines HTML/CSS/JS aus dem `main`-Branch.

**Live:** <https://masta-nksa.github.io/checks/>

Pfadschema: ein Ordner pro Themengebiet, darin ein Ordner pro Check –
`https://masta-nksa.github.io/checks/graphiken/pixel/`.
Das Gefäss (FMS, Freifach, Gym) steht nicht im Pfad, sondern in `manifest.json`;
so bleibt die URL kurz und gültig, auch wenn ein Thema das Gefäss wechselt.

## Neuen Check anlegen (drei Handgriffe)

1. Einen bestehenden Check-Ordner kopieren und umbenennen
   (z. B. `graphiken/pixel/` → `zahlensysteme/binaer/`).
2. `fragen.json` inhaltlich ersetzen.
3. In `manifest.json` eine Zeile ergänzen.

`index.html` im Check-Ordner wird **nie** angefasst – sie ist für alle Checks identisch
und findet `assets/` selbst, unabhängig von der Ordnertiefe.

## Format `fragen.json`

```json
{
  "titel": "Pixel-Check",
  "eyebrow": "FMS · Farben und Bilder · Lektion 1",
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
- `quellen` und `eyebrow` sind optional.
- Datei als **UTF-8** speichern (Umlaute, «·», «→»).

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
