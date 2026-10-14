# Welche Methode ist besser?

*Algorithmen · Lektion 4 · Lesezeit ca. 12 Minuten*

Diese Seite enthält den Stoff der vierten Lektion zum Nachlesen und Repetieren. Die Aufgaben stehen im Dossier.

---

## Was heisst «besser»?

Bubble Sort und Merge Sort sortieren beide **richtig**. Trotzdem sind sie nicht gleich gut. Als Mass für «besser» verwenden wir die **Anzahl der Schritte**: Ein Algorithmus ist besser, wenn er für dieselbe Aufgabe weniger Schritte braucht. Wir zählen die Schritte nicht in Sekunden, weil die Dauer vom Gerät abhängt. Bei Sortierverfahren zählt man die **Vergleiche**.

## Vergleiche bei Bubble Sort

Bei Bubble Sort bleibt nach jedem Durchgang der grösste Wert fest und wird nicht mehr verglichen. Bei 5 Werten sind das 4 + 3 + 2 + 1 = **10 Vergleiche**, unabhängig davon, wie die Werte anfangs liegen:

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

Bei **n** Werten gilt:

> **Vergleiche = n · (n − 1) ÷ 2**

| Werte | 4 | 5 | 6 | 10 | 20 | 100 |
|---|---|---|---|---|---|---|
| Vergleiche | 6 | 10 | 15 | 45 | 190 | 4950 |

Die Anzahl der **Tausche** hängt dagegen von der Anfangsreihenfolge ab. Eine schon sortierte Liste braucht keinen Tausch, eine umgekehrt sortierte tauscht bei jedem Vergleich.

## Bubble Sort und Merge Sort im Vergleich

Merge Sort verschmilzt Schlangen. Die **höchste** Anzahl Vergleiche steigt viel langsamer als bei Bubble Sort:

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

| Anzahl Werte | Bubble Sort | Merge Sort (höchstens) |
|---|---|---|
| 4 | 6 | 5 |
| 8 | 28 | 17 |
| 16 | 120 | 49 |
| 1024 | 523 776 | 9 217 |

Bei wenigen Werten ist der Unterschied klein. Bei 1024 Werten braucht Bubble Sort rund **57-mal** so viele Vergleiche. Wenn ein Mensch pro Vergleich eine Sekunde braucht, sind das rund **6 Tage** gegenüber **2,6 Stunden**.

> **Merke:** Bei wenigen Daten sind beide Verfahren ähnlich gut, bei vielen Daten wird der Unterschied riesig. Bubble Sort ist dafür einfacher zu verstehen.

## Wozu überhaupt sortieren?

Sortieren kostet Aufwand. Es lohnt sich, weil man danach viel **schneller suchen** kann.

Beim **Zahlenraten** von 1 bis 100 mit Ja/Nein-Fragen halbiert jede Frage den Bereich:

| Frage | Bereich danach |
|---|---|
| Start | 100 Zahlen |
| 1 | höchstens 50 |
| 2 | höchstens 25 |
| 3 | höchstens 13 |
| 4 | höchstens 7 |
| 5 | höchstens 4 |
| 6 | höchstens 2 |
| 7 | 1 Zahl, gefunden |

Es sind höchstens **7 Fragen**, weil 2⁷ = 128 grösser als 100 ist. Bei 1 000 Zahlen sind es 10, bei einer Million nur 20.

Genau so funktioniert die **binäre Suche** in einer sortierten Liste: Man schaut in die Mitte, entscheidet, ob der gesuchte Wert davor oder dahinter liegt, und halbiert so immer weiter. In einer unsortierten Liste geht das nicht, denn dann sagt der Wert in der Mitte nichts darüber, wo der gesuchte Eintrag liegt. Dort muss man im schlimmsten Fall jeden Eintrag lesen.

> **Sortieren kostet einmal Aufwand und spart danach bei jedem Suchen.** Wer nur ein einziges Mal sucht, sortiert besser nicht.

## Begriffsübersicht

| Begriff | Bedeutung |
|---|---|
| besser | braucht für dieselbe Aufgabe weniger Schritte |
| Vergleich | Prüfen, welcher von zwei Werten grösser ist; Zähleinheit bei Sortierverfahren |
| n · (n − 1) ÷ 2 | Anzahl Vergleiche bei Bubble Sort mit n Werten |
| binäre Suche | Suche in einer sortierten Liste durch ständiges Halbieren |
| Zweierpotenz | 2, 4, 8, 16, … (2 hoch n): bestimmt, wie oft man halbieren kann |

## Jetzt selbst prüfen

Wenn Sie den Selbstcheck im Dossier sicher abhaken können, testen Sie sich im [Sortier-Check](../../../algorithmen/sortieren/) — ein paar Fragen zu Bubble Sort, Merge Sort und binärer Suche.
