# Konzept: Lernseiten

Die Lernseiten sind der Nachlese- und Nacharbeitsteil neben den Self-Checks.
Eine Lernseite enthält denselben Stoff wie das Selbstlernmodul aus dem
Unterricht — zum Nachlesen bei Absenz und zum Repetieren vor einer Prüfung.

Sie liegen im selben Repo wie die Checks (`masta-nksa/checks`) und teilen sich
Design und Farbtokens mit der Self-Check-Plattform. Die Plattform selbst bleibt
davon unberührt.

## Ordnerstruktur

```
lernen/
└── <thema>/
    └── <seite>/
        ├── index.html        Stub, für alle Lernseiten identisch
        ├── inhalt.md         der Inhalt dieser Lernseite (Nachlese-Fassung)
        └── arbeitsblatt.md   optional: druckbares Arbeitsblatt für die SuS
```

Keine Lektionsnummern in den Pfaden (Konvention aus `manifest.json`).
Für eine neue Lernseite wird ein bestehender Ordner kopiert und `inhalt.md`
(und ggf. `arbeitsblatt.md`) ersetzt. Eintrag in `manifest.json` im Array
`lernseiten` des passenden Themas, vor den `checks`.

## Der Stub `index.html`

Bindet die drei Assets aus `assets/` ein (`../../../assets/…` für die Tiefe
`lernen/<thema>/<seite>/`):

- `lernseite.css` — Darstellung der Lernseite, hell/dunkel, eigenes `@media print`
- `arbeitsblatt.css` — druckbares Arbeitsblatt (am Bildschirm unsichtbar)
- `marked.min.js` — Markdown-Renderer (v15, ohne CDN)
- `lernseite.js` — die Engine

## Die Engine `lernseite.js`

Lädt `inhalt.md` relativ zur Seite, rendert es mit `marked` und danach:

- Die erste `# `-Überschrift wird zum `document.title`.
- Die kursive Zeile direkt darunter wird zur Eyebrow-Zeile über den Titel gezogen.
- Aus allen `##`-Überschriften entsteht das Inhaltsverzeichnis (ab drei Stück,
  sonst ausgeblendet); die aktive Überschrift wird beim Scrollen markiert.
- Ein Fortschrittsbalken oben zeigt die Leseposition.
- Vor dem Drucken (`beforeprint`) werden alle `<details>` aufgeklappt.
- Schlägt `fetch` fehl, erscheint eine verständliche Meldung statt einer leeren Seite.

### Konventionen für `inhalt.md`

- Erste Zeile `# Titel`, zweite Zeile kursiv als Eyebrow:
  `*FMS · Thema · Lesezeit ca. X Minuten*`
- Merksätze als Blockzitat (`> …`). Mehrzeilige Blockzitate brauchen zwei
  Leerzeichen am Zeilenende, sonst laufen die Zeilen zusammen.
- Lösungen immer in `<details><summary>Frage</summary> … </details>`, mit
  Leerzeilen um den Inhalt, damit Markdown darin gerendert wird.
- Am Schluss darf ein Querlink auf den zugehörigen Check stehen
  (relativ, z. B. `../../../graphiken/pixel/`).

## Druckfunktion

Oben rechts auf jeder Lernseite sitzt ein Druck-Button (Druckersymbol,
`aria-haspopup="menu"`, Label „Drucken", per Tastatur bedienbar). Ein Klick
öffnet ein Menü mit drei Varianten:

| Menüeintrag | `<html>`-Klasse | Ergebnis im Ausdruck |
|---|---|---|
| Arbeitsblatt (ohne Lösungen) | `drucken-arbeitsblatt` | Aufgaben mit leeren Antwortfeldern; Kontroll-/Lösungsblöcke ausgeblendet |
| Arbeitsblatt mit Kontrollen | `drucken-arbeitsblatt-kontrollen` | dasselbe, aber die Kontrollblöcke werden mitgedruckt (Selbstlernphasen) |
| Lernseite (mit allen Lösungen) | `drucken-lernseite` | die Nachlese-Fassung, alle `<details>` aufgeklappt (bisheriges Verhalten) |

Jeder Eintrag setzt die Klasse auf `<html>`, ruft `window.print()` und entfernt
die Klasse im `afterprint`-Ereignis wieder. Am Bildschirm ändert sich dadurch
nichts. Ein direkter `Ctrl/Cmd+P`-Druck ohne Menü verhält sich wie Variante 3.

Existiert für die Seite keine `arbeitsblatt.md` (HTTP 404), zeigt das Menü nur
Eintrag 3. Der Button verschwindet nie.

Im Menü steht ein Hinweis: im Druckdialog „Hintergrundgrafiken" aktivieren,
sonst fehlen Farbflächen und Schreiblinien.

### `arbeitsblatt.md` und die Platzhalter-Marken

`lernseite.js` lädt zusätzlich `arbeitsblatt.md`, rendert es mit `marked` in
einen zweiten Container `<section id="arbeitsblatt" hidden>` und löst darin
anschliessend per DOM-Ersetzung folgende Marken auf (jede Marke auf einer
eigenen Zeile; die Engine sorgt selbst für die nötigen Leerzeilen):

| Marke | Ergebnis |
|---|---|
| `[[namensfeld]]` | Zeile mit drei Linien: Name · Klasse · Datum |
| `[[anleitung]] … [[/anleitung]]` | getönter Kasten mit der Arbeitsanleitung |
| `[[aufgabe:Titel]] … [[/aufgabe]]` | Aufgabenkarte, Titel als Monospace-Label in Akzentfarbe |
| `[[antwort:n]]` | leeres Antwortfeld mit Schreiblinien, `n` = 1–4 Zeilen |
| `[[kontrolle]] … [[/kontrolle]]` | Kontrollblock (Variante 1 ausgeblendet, Variante 2 gedruckt) |
| `[[merksatz]] … [[/merksatz]]` | hervorgehobener Merksatz |
| `[[checkliste]] … [[/checkliste]]` | Liste mit leeren Ankreuzkästchen |
| `[[seitenumbruch]]` | erzwingt im Druck einen Seitenumbruch an dieser Stelle |

Tabellen im Arbeitsblatt, die leere Zellen enthalten, werden automatisch zu
Ausfülltabellen: leere Zellen bekommen Mindesthöhe und hellen Hintergrund, die
erste Spalte bleibt als Monospace-Label stehen. Eine Aufgabe mit mehreren
Tabellen darf über mehrere Seiten umbrechen (`.aufgabe.teilbar`, automatisch).

Jede `##`-Überschrift bekommt im Druck automatisch etwas Reserve: passt der
Titel plus rund ein Seitenviertel Inhalt nicht mehr auf die Seite, rückt der
ganze Abschnitt auf die nächste — so beginnt kein Teil im unteren Seitenviertel. Wo ein Teil
zwingend oben auf einer neuen Seite starten soll, setzt man zusätzlich
`[[seitenumbruch]]` davor.

### `arbeitsblatt.css`

Baut auf denselben Farbtokens auf (Akzent `#0f6b63`) und gestaltet die Klassen
`.aufgabe`, `.antwort` (`.z1`–`.z4`), `.kontrolle`, `.merksatz`, `.checkliste`,
`.namensfeld` und die Ausfülltabellen für A4. `#arbeitsblatt` ist am Bildschirm
`display: none` und wird im Druck sichtbar, sobald `<html>` eine der beiden
Arbeitsblatt-Klassen trägt — dann ist umgekehrt `.huelle` (Lernseite,
Inhaltsverzeichnis, Fortschrittsbalken, Druck-Button) ausgeblendet.
`@page { size: A4; margin: 16mm 15mm }`, `print-color-adjust: exact`,
`break-inside: avoid` für Aufgaben-, Kontroll-, Merksatz- und Tabellenblöcke.

### Neue Lernseite mit Arbeitsblatt

1. Ordner unter `lernen/<thema>/<seite>/` anlegen (bestehenden kopieren).
2. `inhalt.md` schreiben (Nachlese-Fassung, Konventionen oben).
3. Optional `arbeitsblatt.md` schreiben; als Vorlage dient
   `lernen/graphiken/aufloesung-dpi/arbeitsblatt.md`.
4. Eintrag in `manifest.json` ergänzen.
5. Lokal prüfen: `python3 -m http.server`, Seite öffnen, alle drei
   Druckvarianten in der Druckvorschau kontrollieren, Menü mit Tastatur testen,
   Dunkelmodus am Bildschirm gegenprüfen.
