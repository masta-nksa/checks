# Welche Methode ist besser?

*Algorithmen · Lektion 4 · Dossier*

[[namensfeld]]

[[anleitung]]
**Heute**

- Sie vergleichen Bubble Sort und Merge Sort, indem Sie **Vergleiche zählen**.
- Sie entdecken, warum sich Sortieren lohnt: Sie spielen **Zahlenraten** und finden eine schnelle Suchstrategie.
- Sie brauchen für die Aufgaben **Zahlenkarten 1 bis 8**. Schneiden Sie sie aus dem Anhang aus (am Ende des Dossiers). Ein Kartensatz pro Zweiergruppe genügt.

Arbeiten Sie die Aufgaben der Reihe nach durch. Wer vor dem Ende der Lektion fertig ist, macht einfach mit der nächsten Aufgabe weiter. Nach Aufgabe 5 folgt der Selbstcheck, das Take-Away steht ganz am Schluss.
[[/anleitung]]

## Teil 1 — Was heisst «besser»?

In der letzten Lektion haben Sie zwei Verfahren kennengelernt, die beide **richtig** sortieren. Welches ist besser?

«Besser» kann vieles heissen. Wir verwenden hier ein Mass, das nicht vom Gerät abhängt: **Wie viele Schritte braucht das Verfahren?** Bei Sortierverfahren zählt man dazu die **Vergleiche**, denn jeder Vergleich kostet Zeit.

[[merksatz]]
Ein Algorithmus ist **besser**, wenn er für dieselbe Aufgabe **weniger Schritte** braucht.
[[/merksatz]]

[[aufgabe:Aufgabe 1 — Vergleiche zählen]]
Legen Sie die Karten in der angegebenen Reihenfolge hin und sortieren Sie mit **Bubble Sort** (mit der Regel aus Lektion 3: Nach jedem Durchgang bleibt der grösste Wert fest und wird nicht mehr verglichen). Zählen Sie jeden Vergleich und jeden Tausch.

| Anzahl Karten | Startreihenfolge | Vergleiche | Tausche |
|---|---|---|---|
| 4 | 4, 2, 3, 1 | | |
| 5 | 5, 2, 4, 1, 3 | | |
| 6 | 6, 2, 5, 1, 4, 3 | | |

**a)** Was fällt Ihnen bei der Anzahl der **Vergleiche** auf?

[[antwort:2]]

**b)** Und bei der Anzahl der **Tausche**?

[[antwort:2]]

*Kontrollhinweis: Die Vergleiche hängen nur von der Anzahl der Karten ab, nicht von der Reihenfolge.*
[[/aufgabe]]

## Teil 2 — Eine Formel für Bubble Sort

Bei 5 Karten sind es 4 Vergleiche im ersten Durchgang, 3 im zweiten, 2 im dritten und 1 im vierten. Insgesamt 4 + 3 + 2 + 1 = **10**:

<svg viewBox="0 0 330 124" role="img" aria-label="Vergleiche pro Durchgang" style="display:block;width:100%;height:auto;max-width:330px">
<circle cx="14" cy="14" r="7.5" fill="var(--accent)" fill-opacity="0.85"/>
<circle cx="36" cy="14" r="7.5" fill="var(--accent)" fill-opacity="0.85"/>
<circle cx="58" cy="14" r="7.5" fill="var(--accent)" fill-opacity="0.85"/>
<circle cx="80" cy="14" r="7.5" fill="var(--accent)" fill-opacity="0.85"/>
<text x="116" y="18.5" font-size="12.5" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">Durchgang 1: 4 Vergleiche</text>
<circle cx="14" cy="40" r="7.5" fill="var(--accent)" fill-opacity="0.85"/>
<circle cx="36" cy="40" r="7.5" fill="var(--accent)" fill-opacity="0.85"/>
<circle cx="58" cy="40" r="7.5" fill="var(--accent)" fill-opacity="0.85"/>
<text x="116" y="44.5" font-size="12.5" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">Durchgang 2: 3 Vergleiche</text>
<circle cx="14" cy="66" r="7.5" fill="var(--accent)" fill-opacity="0.85"/>
<circle cx="36" cy="66" r="7.5" fill="var(--accent)" fill-opacity="0.85"/>
<text x="116" y="70.5" font-size="12.5" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">Durchgang 3: 2 Vergleiche</text>
<circle cx="14" cy="92" r="7.5" fill="var(--accent)" fill-opacity="0.85"/>
<text x="116" y="96.5" font-size="12.5" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">Durchgang 4: 1 Vergleiche</text>
</svg>

Bei n Karten ist das **n · (n − 1) ÷ 2** Vergleiche. Die Formel gilt nur für Bubble Sort in der Fassung, in der der letzte Wert nach jedem Durchgang fest bleibt.

[[aufgabe:Aufgabe 2 — die Formel anwenden]]
Berechnen Sie die Anzahl Vergleiche von Bubble Sort.

| Anzahl Karten | Vergleiche (Formel) |
|---|---|
| 10 | |
| 20 | |
| 100 | |

Überprüfen Sie die Formel an Ihren Werten aus Aufgabe 1 (4, 5 und 6 Karten).

[[antwort:1]]
[[/aufgabe]]

## Teil 3 — Bubble Sort gegen Merge Sort

Für Merge Sort gibt es eine andere Rechnung. Die **höchste** Anzahl Vergleiche, die es braucht, ist für diese Anzahlen von Werten bekannt:

<svg viewBox="0 0 460 250" role="img" aria-label="Vergleiche: Bubble Sort und Merge Sort" style="display:block;width:100%;height:auto;max-width:460px">
<line x1="30" y1="200" x2="450" y2="200" stroke="currentColor" stroke-opacity="0.5"/>
<rect x="55" y="192.5" width="40" height="7.5" fill="currentColor" fill-opacity="0.30" stroke="currentColor" stroke-width="1"/>
<text x="75" y="187.5" text-anchor="middle" font-size="12" font-weight="600" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">6</text>
<rect x="101" y="193.75" width="40" height="6.25" fill="var(--accent)" fill-opacity="1" stroke="currentColor" stroke-width="1"/>
<text x="121" y="188.75" text-anchor="middle" font-size="12" font-weight="600" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">5</text>
<text x="98" y="218" text-anchor="middle" font-size="12.5" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">4 Werte</text>
<rect x="190" y="165.0" width="40" height="35.0" fill="currentColor" fill-opacity="0.30" stroke="currentColor" stroke-width="1"/>
<text x="210" y="160.0" text-anchor="middle" font-size="12" font-weight="600" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">28</text>
<rect x="236" y="178.75" width="40" height="21.25" fill="var(--accent)" fill-opacity="1" stroke="currentColor" stroke-width="1"/>
<text x="256" y="173.75" text-anchor="middle" font-size="12" font-weight="600" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">17</text>
<text x="233" y="218" text-anchor="middle" font-size="12.5" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">8 Werte</text>
<rect x="325" y="50.0" width="40" height="150.0" fill="currentColor" fill-opacity="0.30" stroke="currentColor" stroke-width="1"/>
<text x="345" y="45.0" text-anchor="middle" font-size="12" font-weight="600" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">120</text>
<rect x="371" y="138.75" width="40" height="61.25" fill="var(--accent)" fill-opacity="1" stroke="currentColor" stroke-width="1"/>
<text x="391" y="133.75" text-anchor="middle" font-size="12" font-weight="600" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">49</text>
<text x="368" y="218" text-anchor="middle" font-size="12.5" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">16 Werte</text>
<rect x="40" y="226" width="13" height="13" fill="currentColor" fill-opacity="0.30" stroke="currentColor"/>
<text x="58" y="237" font-size="12" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">Bubble Sort</text>
<rect x="170" y="226" width="13" height="13" fill="var(--accent)" stroke="currentColor"/>
<text x="188" y="237" font-size="12" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">Merge Sort (höchstens)</text>
</svg>

[[aufgabe:Aufgabe 3 — die Verfahren vergleichen]]
Berechnen Sie die Spalte für Bubble Sort mit der Formel aus Teil 2 (nehmen Sie den Taschenrechner). Die Spalte für Merge Sort ist vorgegeben.

| Anzahl Werte | Bubble Sort (Formel) | Merge Sort (höchstens, vorgegeben) |
|---|---|---|
| 4 | | 5 |
| 8 | | 17 |
| 16 | | 49 |
| 1 024 | | 9 217 |

**a)** Bei wie vielen Werten ist der Unterschied noch **klein**, bei wie vielen **gross**?

[[antwort:2]]

**b)** Ein Mensch braucht für einen Vergleich **1 Sekunde**. Wie lange dauert das Sortieren von 1024 Werten mit jedem Verfahren? Rechnen Sie in Tage bzw. Stunden um (1 Tag = 86 400 Sekunden, 1 Stunde = 3600 Sekunden).

[[antwort:3]]

*Kontrollhinweis: Bei 1024 Werten braucht Bubble Sort rund 57-mal so viele Vergleiche wie Merge Sort.*
[[/aufgabe]]

[[merksatz]]
Bei **wenigen** Daten sind beide Verfahren ähnlich gut. Bei **vielen** Daten wird der Unterschied riesig: Bubble Sort braucht viel mehr Vergleiche. Bubble Sort ist dafür **einfacher** zu verstehen.
[[/merksatz]]

## Teil 4 — Wozu überhaupt sortieren?

Sie kennen Liste A (durcheinander) und Liste B (sortiert) aus der letzten Lektion. Jetzt spielen Sie das Prinzip dahinter.

[[anleitung]]
**Zahlenraten**

- Person A denkt sich eine Zahl von **1 bis 100** aus und schreibt sie verdeckt auf.
- Person B darf nur Fragen der Form «**Ist die Zahl grösser als …?**» stellen. A antwortet nur mit **Ja** oder **Nein**.
- B zählt die Fragen, bis die Zahl feststeht. Danach tauschen Sie die Rollen.
[[/anleitung]]

[[aufgabe:Aufgabe 4 — Zahlenraten spielen]]
Spielen Sie drei Runden und tragen Sie das Protokoll ein.

| Runde | Gesuchte Zahl | Anzahl Fragen |
|---|---|---|
| 1 | | |
| 2 | | |
| 3 | | |

**a)** Welche Strategie hat am wenigsten Fragen gebraucht?

[[antwort:2]]

**b)** Wie viele Fragen braucht man im **schlimmsten Fall**, wenn man die Strategie perfekt anwendet?

[[antwort:1]]
[[/aufgabe]]

[[aufgabe:Aufgabe 5 — wie viele Fragen?]]
Bei jeder Frage halbiert sich der Bereich. Wie viele Ja/Nein-Fragen brauchen Sie **höchstens**, um eine Zahl in diesem Bereich zu finden? Erinnern Sie sich an die Zweierpotenzen (2, 4, 8, 16, 32, 64, 128, …).

| Zahlenbereich | Höchstens so viele Fragen |
|---|---|
| 1 bis 2 | |
| 1 bis 4 | |
| 1 bis 8 | |
| 1 bis 16 | |
| 1 bis 100 | |
| 1 bis 1000 | |
| 1 bis 1 000 000 | |

*Kontrollhinweis: Bei 1 bis 100 sind es 7 Fragen, weil 2 hoch 7 gleich 128 ist.*
[[/aufgabe]]

[[merksatz]]
Wer **halbiert**, kommt mit wenigen Fragen aus: 1 000 000 Möglichkeiten brauchen nur **20** Fragen. Das geht nur, wenn die Daten **sortiert** sind. Dieses Suchverfahren heisst **binäre Suche**.
[[/merksatz]]

## Selbstcheck

[[checkliste]]
- Ich kann erklären, was «besser» bei einem Algorithmus heisst.
- Ich kann die Anzahl Vergleiche von Bubble Sort mit der Formel berechnen.
- Ich kann zwei Sortierverfahren über die Anzahl Vergleiche vergleichen.
- Ich kann erklären, warum sortierte Daten schneller durchsucht werden können.
[[/checkliste]]

[[aufgabe:Aufgabe 6 — Merge Sort selbst zählen]]
Legen Sie die acht Karten in der Reihenfolge **5, 8, 2, 7, 1, 6, 3, 4** hin. Sortieren Sie mit **Merge Sort** und zählen Sie jeden Vergleich. Schreiben Sie auf, wie viele es waren.

[[antwort:2]]

Im besten Fall sind es 12, im schlechtesten 17 Vergleiche. Wo liegen Sie?
[[/aufgabe]]

[[aufgabe:Aufgabe 7 — das Telefonbuch]]
Ein Telefonbuch hat rund **1 000 000** Einträge, alphabetisch sortiert.

**a)** Wie viele Einträge muss man im schlimmsten Fall anschauen, wenn man gezielt halbiert? Wie viele, wenn das Buch unsortiert wäre?

[[antwort:2]]

**b)** Sortieren mit Merge Sort kostet für 1 Million Einträge rund **20 Millionen** Vergleiche. Wie oft muss man suchen, bis sich das Sortieren «lohnt»?

[[antwort:2]]
[[/aufgabe]]

[[aufgabe:Aufgabe 8 — lohnt sich Sortieren immer?]]
Sie wollen in einer Liste mit 1 000 Einträgen **ein einziges Mal** einen Namen finden. Lohnt es sich, die Liste erst zu sortieren? Begründen Sie.

[[antwort:3]]
[[/aufgabe]]

[[aufgabe:Take-Away]]
Vervollständigen Sie mit eigenen Worten:

**Wenn viele Daten sortiert werden müssen, ist … besser, weil …**

[[antwort:2]]

**Sortierte Daten kann man schneller durchsuchen, weil …**

[[antwort:2]]
[[/aufgabe]]

## Online-Check 2 (freiwillig)

Testen Sie sich selbst: Unter **masta-nksa.github.io/checks/algorithmen/sortieren/** finden Sie den **Sortier-Check**. Er fragt nach Durchgängen, Vergleichen und der binären Suche und gibt sofort Rückmeldung.

## Anhang — Zahlenkarten zum Ausschneiden

Schneiden Sie die acht Karten aus. Eine Zweiergruppe braucht einen Satz.

<div style="display:flex;gap:4mm;flex-wrap:wrap"><div style="border:1.5px dashed currentColor;width:16mm;height:22mm;display:flex;align-items:center;justify-content:center;font-size:20pt;font-weight:600">1</div><div style="border:1.5px dashed currentColor;width:16mm;height:22mm;display:flex;align-items:center;justify-content:center;font-size:20pt;font-weight:600">2</div><div style="border:1.5px dashed currentColor;width:16mm;height:22mm;display:flex;align-items:center;justify-content:center;font-size:20pt;font-weight:600">3</div><div style="border:1.5px dashed currentColor;width:16mm;height:22mm;display:flex;align-items:center;justify-content:center;font-size:20pt;font-weight:600">4</div><div style="border:1.5px dashed currentColor;width:16mm;height:22mm;display:flex;align-items:center;justify-content:center;font-size:20pt;font-weight:600">5</div><div style="border:1.5px dashed currentColor;width:16mm;height:22mm;display:flex;align-items:center;justify-content:center;font-size:20pt;font-weight:600">6</div><div style="border:1.5px dashed currentColor;width:16mm;height:22mm;display:flex;align-items:center;justify-content:center;font-size:20pt;font-weight:600">7</div><div style="border:1.5px dashed currentColor;width:16mm;height:22mm;display:flex;align-items:center;justify-content:center;font-size:20pt;font-weight:600">8</div></div>
