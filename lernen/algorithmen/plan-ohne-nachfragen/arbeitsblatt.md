# Plan ohne Nachfragen

*Algorithmen · Lektion 1 · Dossier*

[[namensfeld]]

[[anleitung]]
**Heute**

- Sie erleben, was passiert, wenn jemand einen Plan **genau so** ausführt, wie er gesagt wird.
- Sie halten fest, was einen guten Plan ausmacht, und lernen den Begriff **Algorithmus** kennen.
- Alles geht mit Stift und Papier. Kurze Stichworte genügen.

Arbeiten Sie die Aufgaben der Reihe nach durch. Wer vor dem Ende der Lektion fertig ist, macht einfach mit der nächsten Aufgabe weiter. Nach Aufgabe 4 folgt der Selbstcheck, das Take-Away steht ganz am Schluss.
[[/anleitung]]

## Teil 1 — Der Roboter

Ihre Lehrperson spielt einen Roboter. Im Raum sind ein **START** und ein **ZIEL** am Boden markiert. Die Klasse soll den Roboter mit Befehlen vom Start zum Ziel bringen. Der Roboter führt aus, was er versteht, und meldet einen **Fehler**, wenn er etwas nicht versteht. Er stellt keine Rückfragen und hilft nicht mit. Zwei Freiwillige schreiben die Befehle an der Tafel mit.

[[aufgabe:Aufgabe 1 — beobachten]]
Notieren Sie vier Befehle, die die Klasse gegeben hat, und wie der Roboter reagiert hat. Mindestens zwei davon sollen Befehle sein, bei denen etwas **nicht** wie gewünscht geklappt hat. Was hat jeweils gefehlt?

| Befehl der Klasse | Reaktion des Roboters | Was hat gefehlt? |
|---|---|---|
| | | |
| | | |
| | | |
| | | |
[[/aufgabe]]

<div style="break-before:page"></div>

## Teil 2 — Partnerzeichnen

Jetzt sind Sie der Roboter. Arbeiten Sie zu zweit: Eine Person **sagt an**, die andere **zeichnet** auf das Punktraster (unten). Die zeichnende Person sieht die Vorlage nie.

[[anleitung]]
**Runde 1: ohne Rückfragen**

- Person A erhält eine Karte mit einer Figur und zeigt sie nicht her.
- A beschreibt die Figur **nur mit Worten**. Kein Zeigen, keine Gesten, kein Blick aufs Blatt von B.
- B zeichnet und darf **nichts fragen**.
- Zum Schluss vergleichen Sie die Zeichnung mit der Karte.

**Runde 2: mit Rückfragen.** Die Rollen werden getauscht, es gibt eine neue Karte, und jetzt darf die zeichnende Person nachfragen. Sonst bleibt alles gleich.
[[/anleitung]]

[[aufgabe:Aufgabe 2 — Zeichnung und Protokoll]]
Zeichnen Sie in das passende Raster und füllen Sie danach das Protokoll aus (Passung: 1 = gar nicht, 5 = identisch).

<div style="display:flex;gap:8mm;flex-wrap:wrap">
<div style="width:46%"><svg viewBox="0 0 172 190" role="img" aria-label="Punktraster zum Zeichnen" style="display:block;width:100%;height:auto">
<text x="14" y="12" font-size="11" font-weight="600" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">Runde 1: Zeichnung</text>
<defs><pattern id="pd1" width="24" height="24" x="2.0" y="20.0" patternUnits="userSpaceOnUse"><circle cx="12.0" cy="12.0" r="1.9" fill="currentColor" fill-opacity="0.6"/></pattern></defs>
<rect x="1" y="19" width="170" height="170" rx="3" fill="url(#pd1)" stroke="currentColor" stroke-opacity="0.45" stroke-width="1"/>
</svg></div>
<div style="width:46%"><svg viewBox="0 0 172 190" role="img" aria-label="Punktraster zum Zeichnen" style="display:block;width:100%;height:auto">
<text x="14" y="12" font-size="11" font-weight="600" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">Runde 2: Zeichnung</text>
<defs><pattern id="pd2" width="24" height="24" x="2.0" y="20.0" patternUnits="userSpaceOnUse"><circle cx="12.0" cy="12.0" r="1.9" fill="currentColor" fill-opacity="0.6"/></pattern></defs>
<rect x="1" y="19" width="170" height="170" rx="3" fill="url(#pd2)" stroke="currentColor" stroke-opacity="0.45" stroke-width="1"/>
</svg></div>
</div>

| Runde | Anzahl Anweisungen | Passung (1 bis 5) | Was hat gefehlt? |
|---|---|---|---|
| 1 | | | |
| 2 | | | |

**a)** Was hat in Runde 2 besser funktioniert als in Runde 1, und warum?

[[antwort:2]]

**b)** Auf welche Wörter haben Sie sich geeinigt, damit die Anweisungen klar waren?

[[antwort:2]]
[[/aufgabe]]

## Teil 3 — Was ist ein Algorithmus?

Sie haben soeben **Algorithmen** geschrieben und ausgeführt: einen Plan, mit dem man eine Aufgabe löst, auch ohne die Aufgabe zu verstehen.

[[merksatz]]
Ein Algorithmus ist eine eindeutige Handlungsanweisung zur Lösung eines Problems. Er besteht aus endlich vielen, klar festgelegten Schritten und wandelt eine **Eingabe** in eine **Ausgabe** um.
[[/merksatz]]

Fast jeder Algorithmus folgt dem **EVA-Prinzip**: Eingabe, Verarbeitung, Ausgabe.

<svg viewBox="0 0 560 120" role="img" aria-label="Eingabe, Verarbeitung, Ausgabe" style="display:block;width:100%;height:auto;max-width:560px">
<rect x="10" y="22" width="160" height="76" rx="6" fill="var(--accent)" fill-opacity="0.10" stroke="currentColor" stroke-width="1.4"/>
<text x="90" y="56" text-anchor="middle" font-size="26" font-weight="700" fill="var(--accent)" font-family="'IBM Plex Sans', system-ui, sans-serif">E</text>
<text x="90" y="82" text-anchor="middle" font-size="14" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">Eingabe</text>
<rect x="200" y="22" width="160" height="76" rx="6" fill="var(--accent)" fill-opacity="0.10" stroke="currentColor" stroke-width="1.4"/>
<text x="280" y="56" text-anchor="middle" font-size="26" font-weight="700" fill="var(--accent)" font-family="'IBM Plex Sans', system-ui, sans-serif">V</text>
<text x="280" y="82" text-anchor="middle" font-size="14" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">Verarbeitung</text>
<rect x="390" y="22" width="160" height="76" rx="6" fill="var(--accent)" fill-opacity="0.10" stroke="currentColor" stroke-width="1.4"/>
<text x="470" y="56" text-anchor="middle" font-size="26" font-weight="700" fill="var(--accent)" font-family="'IBM Plex Sans', system-ui, sans-serif">A</text>
<text x="470" y="82" text-anchor="middle" font-size="14" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">Ausgabe</text>
<line x1="170" y1="60" x2="196" y2="60" stroke="currentColor" stroke-width="1.4"/>
<polygon points="200,60 192,55 192,65" fill="currentColor"/>
<line x1="360" y1="60" x2="386" y2="60" stroke="currentColor" stroke-width="1.4"/>
<polygon points="390,60 382,55 382,65" fill="currentColor"/>
</svg>

**Beispiel Getränkeautomat:** Münzen und Wahltaste sind die Eingabe. Der Automat prüft den Betrag, wählt das Getränk und berechnet das Rückgeld (Verarbeitung). Getränk und Rückgeld sind die Ausgabe. Wie der Automat das macht, müssen Sie nicht wissen, um ihn zu benutzen.

Damit ein Plan wirklich als Algorithmus taugt, muss er vier Anforderungen erfüllen:

| Anforderung | Bedeutung | Beispiel aus Teil 1 und 2 |
|---|---|---|
| eindeutig | Jeder Schritt ist klar festgelegt, es gibt keinen Spielraum. | «Gehe vorwärts» sagt nicht, wie viele Schritte. |
| ausführbar | Wer den Plan ausführt, kann jeden Schritt wirklich machen. | «Gehe zum Ziel» geht nur, wenn der Roboter weiss, was ein Ziel ist. Er kennt nur drei Befehle. |
| allgemein | Der Plan löst nicht nur einen Einzelfall, sondern alle Fälle derselben Art. | «Gehe 3 Kästchen nach rechts» zeichnet genau eine Figur, «Zeichne ein Quadrat der Seitenlänge s» passt für jede Grösse. |
| endlich | Der Plan kommt nach endlich vielen Schritten ans Ziel. | «Gehe immer weiter nach rechts» hört nie auf. |

[[aufgabe:Aufgabe 3 — Eingabe, Verarbeitung, Ausgabe]]
Ergänzen Sie die Tabelle. Die erste Zeile ist als Muster ausgefüllt.

| Beispiel | Eingabe | Verarbeitung | Ausgabe |
|---|---|---|---|
| Getränkeautomat | Münzen, Wahltaste | Betrag prüfen, Rückgeld berechnen | Getränk, Rückgeld |
| Taschenrechner (5 + 17) | | | |
| Toaster | | | |
| Navigations-App | | | |
[[/aufgabe]]

[[aufgabe:Aufgabe 4 — Anweisungen prüfen]]
Hier stehen sechs Anweisungen. Welche der vier Anforderungen ist jeweils **verletzt**? Schreiben Sie *eindeutig*, *ausführbar*, *allgemein* oder *endlich*. Wenn nichts verletzt ist, schreiben Sie *keine*.

| Anweisung | Verletzte Anforderung |
|---|---|
| 1. «Gib eine Prise Salz dazu.» | |
| 2. «Rühre, bis es gut ist.» | |
| 3. «Springe in einer Sekunde auf den Mond.» | |
| 4. «Gehe drei Schritte vorwärts.» | |
| 5. «Schritt 1: Schreibe die Zahl 1. Schritt 2: Schreibe die nächste Zahl. Schritt 3: Weiter bei Schritt 2.» | |
| 6. «Rechne 4 + 9 und schreibe 13 auf.» | |

Verbessern Sie nun Anweisung 1 oder 2 so, dass sie **eindeutig** wird.

[[antwort:2]]

*Kontrollhinweis: Eine der sechs Anweisungen ist in Ordnung.*
[[/aufgabe]]

## Selbstcheck

[[checkliste]]
- Ich kann in eigenen Worten sagen, was ein Algorithmus ist.
- Ich kann die vier Anforderungen nennen: eindeutig, ausführbar, allgemein, endlich.
- Ich kann an einer Anweisung zeigen, welche Anforderung verletzt ist.
- Ich kann Eingabe, Verarbeitung und Ausgabe an einem Beispiel zeigen.
[[/checkliste]]

[[aufgabe:Aufgabe 5 — Vorgeschmack auf die Turtle]]
Der Roboter auf Papier kennt die drei Befehle aus Teil 1: «gehe n Kästchen vorwärts», «drehe dich nach rechts» und «drehe dich nach links» (Vierteldrehung). Schreiben Sie einen Plan für ein **Quadrat mit Seitenlänge 3** und markieren Sie darin Stellen, die sich wiederholen.

[[antwort:3]]
[[/aufgabe]]

[[aufgabe:Aufgabe 6 — grösste von drei Zahlen]]
Dieser Plan findet die grösste von drei Zahlen a, b und c:

1. Ist a grösser als b? Dann merken Sie sich a, sonst b.
2. Vergleichen Sie die gemerkte Zahl mit c.
3. Ist c grösser? Dann merken Sie sich c.
4. Geben Sie die gemerkte Zahl aus.

Führen Sie den Plan für diese drei Fälle aus:

| a | b | c | gemerkte Zahl nach Schritt 1 | Ausgabe |
|---|---|---|---|---|
| 4 | 9 | 7 | | |
| 15 | 2 | 6 | | |
| 3 | 8 | 20 | | |

Funktioniert der Plan auch für **vier** Zahlen? Was müssten Sie ergänzen? Und für 100 Zahlen?

[[antwort:3]]
[[/aufgabe]]

[[aufgabe:Aufgabe 7 — eigener Alltagsalgorithmus]]
Wählen Sie eine Alltagsaufgabe (Znüni vorbereiten, Velo-Pneu aufpumpen, Handy ausschalten, Tee kochen) und schreiben Sie einen Plan, den Ihre Partnerin **ohne Rückfrage** ausführen kann. Tauschen Sie dann und testen Sie.

[[antwort:4]]

**Test:** Wo hat es gehakt, und welche Anforderung war nicht erfüllt?

[[antwort:2]]
[[/aufgabe]]

[[aufgabe:Take-Away]]
Vervollständigen Sie mit eigenen Worten:

**Ein Algorithmus ist …**

[[antwort:2]]

**Eine Frage, die ich noch habe:**

[[antwort:2]]
[[/aufgabe]]

## Ausblick

Beim Roboter und beim Partnerzeichnen haben wir die Pläne **in Worten** aufgeschrieben. Das war langsam und missverständlich. Nächstes Mal lernen Sie eine Schreibweise, die man auf einen Blick versteht: das **Struktogramm**.
