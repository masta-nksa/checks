# Ordnung muss sein

*Algorithmen · Lektion 3 · Lesezeit ca. 12 Minuten*

Diese Seite enthält den Stoff der dritten Lektion zum Nachlesen, wenn Sie gefehlt haben, und zum Repetieren. Die Aufgaben stehen im Dossier. Die Aktivität im Unterricht folgt dem Vorgehen von «Sortieren interaktiv» ([oinf.ch](https://oinf.ch/kurs/codes-und-algorithmen/sortieren-interaktiv/)).

---

## Sortieren: Weshalb?

**Sortieren** heisst, Daten nach einem **Kriterium** in eine Reihenfolge zu bringen: alphabetisch, nach Zahl, nach Datum, nach Preis. Das lohnt sich aus drei Gründen:

- **Schneller suchen.** In einer alphabetisch sortierten Liste können Sie gezielt springen. In einer ungeordneten Liste müssen Sie im schlimmsten Fall jeden Eintrag lesen.
- **Bessere Übersicht.** Höchste Note, tiefster Preis, ältester Eintrag sind sofort zu sehen. Trends und Unterschiede fallen auf.
- **Vorbereitung.** Viele weitere Verfahren (Suchen, Zusammenführen, Filtern) arbeiten nur mit sortierten Daten effizient.

Das **Sortierkriterium** legt fest, was «grösser» und «kleiner» bedeutet. Bei Namen ist es die Reihenfolge im Alphabet, bei Personen zum Beispiel die Körpergrösse oder das Geburtsdatum. Der Sortieralgorithmus bleibt derselbe, nur der Vergleich ändert sich. Das ist die **Allgemeinheit** aus Lektion 1.

## Bubble Sort

Bubble Sort vergleicht immer zwei **Nachbarn** und tauscht sie, wenn sie in der falschen Reihenfolge stehen. Der grösste Wert wandert dabei Schritt für Schritt nach rechts, wie eine Blase, die aufsteigt.

> **Plan:** Vergleiche von links nach rechts immer zwei Nachbarn. Ist der linke Wert grösser als der rechte, tausche die beiden. Am Ende der Reihe steht der grösste Wert ganz rechts und ist fertig. Beginne von vorne und vergleiche nur noch die Werte, die noch nicht fertig sind. Wiederhole, bis nur noch ein Wert übrig ist.

Ein Beispiel mit der Liste **5, 2, 4, 1, 3**. Die dunklen Balken sind jeweils bereits an ihrem endgültigen Platz:

<svg viewBox="0 0 420 262" role="img" aria-label="Bubble Sort Beispiel: 5, 2, 4, 1, 3" style="display:block;width:100%;height:auto;max-width:420px">
<text x="4" y="33.0" font-size="12.5" font-weight="600" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">Start</text>
<rect x="150" y="24.0" width="22" height="25.0" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="1"/>
<text x="161.0" y="61" text-anchor="middle" font-size="11" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">5</text>
<rect x="176" y="39.0" width="22" height="10.0" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="1"/>
<text x="187.0" y="61" text-anchor="middle" font-size="11" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">2</text>
<rect x="202" y="29.0" width="22" height="20.0" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="1"/>
<text x="213.0" y="61" text-anchor="middle" font-size="11" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">4</text>
<rect x="228" y="44.0" width="22" height="5.0" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="1"/>
<text x="239.0" y="61" text-anchor="middle" font-size="11" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">1</text>
<rect x="254" y="34.0" width="22" height="15.0" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="1"/>
<text x="265.0" y="61" text-anchor="middle" font-size="11" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">3</text>
<line x1="144" y1="49" x2="290" y2="49" stroke="currentColor" stroke-opacity="0.4"/>
<text x="4" y="97.0" font-size="12.5" font-weight="600" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">Nach Durchgang 1</text>
<rect x="150" y="103.0" width="22" height="10.0" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="1"/>
<text x="161.0" y="125" text-anchor="middle" font-size="11" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">2</text>
<rect x="176" y="93.0" width="22" height="20.0" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="1"/>
<text x="187.0" y="125" text-anchor="middle" font-size="11" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">4</text>
<rect x="202" y="108.0" width="22" height="5.0" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="1"/>
<text x="213.0" y="125" text-anchor="middle" font-size="11" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">1</text>
<rect x="228" y="98.0" width="22" height="15.0" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="1"/>
<text x="239.0" y="125" text-anchor="middle" font-size="11" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">3</text>
<rect x="254" y="88.0" width="22" height="25.0" fill="var(--accent)" stroke="currentColor" stroke-width="1"/>
<text x="265.0" y="125" text-anchor="middle" font-size="11" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">5</text>
<line x1="144" y1="113" x2="290" y2="113" stroke="currentColor" stroke-opacity="0.4"/>
<text x="4" y="161.0" font-size="12.5" font-weight="600" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">Nach Durchgang 2</text>
<rect x="150" y="167.0" width="22" height="10.0" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="1"/>
<text x="161.0" y="189" text-anchor="middle" font-size="11" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">2</text>
<rect x="176" y="172.0" width="22" height="5.0" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="1"/>
<text x="187.0" y="189" text-anchor="middle" font-size="11" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">1</text>
<rect x="202" y="162.0" width="22" height="15.0" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="1"/>
<text x="213.0" y="189" text-anchor="middle" font-size="11" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">3</text>
<rect x="228" y="157.0" width="22" height="20.0" fill="var(--accent)" stroke="currentColor" stroke-width="1"/>
<text x="239.0" y="189" text-anchor="middle" font-size="11" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">4</text>
<rect x="254" y="152.0" width="22" height="25.0" fill="var(--accent)" stroke="currentColor" stroke-width="1"/>
<text x="265.0" y="189" text-anchor="middle" font-size="11" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">5</text>
<line x1="144" y1="177" x2="290" y2="177" stroke="currentColor" stroke-opacity="0.4"/>
<text x="4" y="225.0" font-size="12.5" font-weight="600" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">Nach Durchgang 3</text>
<rect x="150" y="236.0" width="22" height="5.0" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="1"/>
<text x="161.0" y="253" text-anchor="middle" font-size="11" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">1</text>
<rect x="176" y="231.0" width="22" height="10.0" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="1"/>
<text x="187.0" y="253" text-anchor="middle" font-size="11" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">2</text>
<rect x="202" y="226.0" width="22" height="15.0" fill="var(--accent)" stroke="currentColor" stroke-width="1"/>
<text x="213.0" y="253" text-anchor="middle" font-size="11" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">3</text>
<rect x="228" y="221.0" width="22" height="20.0" fill="var(--accent)" stroke="currentColor" stroke-width="1"/>
<text x="239.0" y="253" text-anchor="middle" font-size="11" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">4</text>
<rect x="254" y="216.0" width="22" height="25.0" fill="var(--accent)" stroke="currentColor" stroke-width="1"/>
<text x="265.0" y="253" text-anchor="middle" font-size="11" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">5</text>
<line x1="144" y1="241" x2="290" y2="241" stroke="currentColor" stroke-opacity="0.4"/>
</svg>

**Durchgang 1:** 5 und 2 tauschen, 5 und 4 tauschen, 5 und 1 tauschen, 5 und 3 tauschen. Die 5 steht ganz rechts.
**Durchgang 2:** 2 und 4 bleiben, 4 und 1 tauschen, 4 und 3 tauschen. Die 4 steht an ihrem Platz.
**Durchgang 3:** 2 und 1 tauschen, 2 und 3 bleiben. Die Liste ist sortiert.
**Durchgang 4:** Nur noch 1 und 2 sind zu vergleichen, es ist nichts mehr zu tauschen. Bei fünf Werten genügen immer vier Durchgänge.

## Merge Sort

Merge Sort geht anders vor: Es zerlegt die Aufgabe in viele kleine, ganz einfache Teile und fügt sie wieder zusammen. Eine Schlange mit einem einzigen Wert ist schon sortiert. Zwei sortierte Schlangen lassen sich leicht zu **einer** sortierten Schlange verschmelzen: Man vergleicht immer nur die **vordersten** beiden Werte («Reisverschluss»).

> **Plan:** Jeder Wert ist zuerst eine eigene Schlange. Verschmelze immer zwei benachbarte Schlangen: Vergleiche die vordersten beiden Werte, der kleinere kommt als Nächster in die neue Schlange. Ist eine Schlange leer, hänge den Rest der anderen an. Wiederhole mit den neuen Schlangen, bis nur noch eine übrig ist.

Ein Beispiel mit **6, 2, 7, 1, 5, 3, 8, 4**:

<svg viewBox="0 0 520 262" role="img" aria-label="Merge Sort Beispiel: 6, 2, 7, 1, 5, 3, 8, 4" style="display:block;width:100%;height:auto;max-width:520px">
<text x="4" y="33.0" font-size="12.5" font-weight="600" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">Start (8 Schlangen)</text>
<rect x="180" y="19.0" width="22" height="30.0" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="1"/>
<text x="191.0" y="61" text-anchor="middle" font-size="11" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">6</text>
<rect x="216" y="39.0" width="22" height="10.0" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="1"/>
<text x="227.0" y="61" text-anchor="middle" font-size="11" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">2</text>
<rect x="252" y="14.0" width="22" height="35.0" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="1"/>
<text x="263.0" y="61" text-anchor="middle" font-size="11" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">7</text>
<rect x="288" y="44.0" width="22" height="5.0" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="1"/>
<text x="299.0" y="61" text-anchor="middle" font-size="11" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">1</text>
<rect x="324" y="24.0" width="22" height="25.0" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="1"/>
<text x="335.0" y="61" text-anchor="middle" font-size="11" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">5</text>
<rect x="360" y="34.0" width="22" height="15.0" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="1"/>
<text x="371.0" y="61" text-anchor="middle" font-size="11" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">3</text>
<rect x="396" y="9.0" width="22" height="40.0" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="1"/>
<text x="407.0" y="61" text-anchor="middle" font-size="11" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">8</text>
<rect x="432" y="29.0" width="22" height="20.0" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="1"/>
<text x="443.0" y="61" text-anchor="middle" font-size="11" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">4</text>
<line x1="174" y1="49" x2="468" y2="49" stroke="currentColor" stroke-opacity="0.4"/>
<text x="4" y="97.0" font-size="12.5" font-weight="600" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">Nach Runde 1 (4 Schlangen)</text>
<rect x="180" y="103.0" width="22" height="10.0" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="1"/>
<text x="191.0" y="125" text-anchor="middle" font-size="11" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">2</text>
<rect x="206" y="83.0" width="22" height="30.0" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="1"/>
<text x="217.0" y="125" text-anchor="middle" font-size="11" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">6</text>
<rect x="242" y="108.0" width="22" height="5.0" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="1"/>
<text x="253.0" y="125" text-anchor="middle" font-size="11" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">1</text>
<rect x="268" y="78.0" width="22" height="35.0" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="1"/>
<text x="279.0" y="125" text-anchor="middle" font-size="11" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">7</text>
<rect x="304" y="98.0" width="22" height="15.0" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="1"/>
<text x="315.0" y="125" text-anchor="middle" font-size="11" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">3</text>
<rect x="330" y="88.0" width="22" height="25.0" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="1"/>
<text x="341.0" y="125" text-anchor="middle" font-size="11" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">5</text>
<rect x="366" y="93.0" width="22" height="20.0" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="1"/>
<text x="377.0" y="125" text-anchor="middle" font-size="11" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">4</text>
<rect x="392" y="73.0" width="22" height="40.0" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="1"/>
<text x="403.0" y="125" text-anchor="middle" font-size="11" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">8</text>
<line x1="174" y1="113" x2="428" y2="113" stroke="currentColor" stroke-opacity="0.4"/>
<text x="4" y="161.0" font-size="12.5" font-weight="600" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">Nach Runde 2 (2 Schlangen)</text>
<rect x="180" y="172.0" width="22" height="5.0" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="1"/>
<text x="191.0" y="189" text-anchor="middle" font-size="11" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">1</text>
<rect x="206" y="167.0" width="22" height="10.0" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="1"/>
<text x="217.0" y="189" text-anchor="middle" font-size="11" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">2</text>
<rect x="232" y="147.0" width="22" height="30.0" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="1"/>
<text x="243.0" y="189" text-anchor="middle" font-size="11" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">6</text>
<rect x="258" y="142.0" width="22" height="35.0" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="1"/>
<text x="269.0" y="189" text-anchor="middle" font-size="11" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">7</text>
<rect x="294" y="162.0" width="22" height="15.0" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="1"/>
<text x="305.0" y="189" text-anchor="middle" font-size="11" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">3</text>
<rect x="320" y="157.0" width="22" height="20.0" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="1"/>
<text x="331.0" y="189" text-anchor="middle" font-size="11" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">4</text>
<rect x="346" y="152.0" width="22" height="25.0" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="1"/>
<text x="357.0" y="189" text-anchor="middle" font-size="11" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">5</text>
<rect x="372" y="137.0" width="22" height="40.0" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="1"/>
<text x="383.0" y="189" text-anchor="middle" font-size="11" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">8</text>
<line x1="174" y1="177" x2="408" y2="177" stroke="currentColor" stroke-opacity="0.4"/>
<text x="4" y="225.0" font-size="12.5" font-weight="600" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">Nach Runde 3 (1 Schlange)</text>
<rect x="180" y="236.0" width="22" height="5.0" fill="var(--accent)" stroke="currentColor" stroke-width="1"/>
<text x="191.0" y="253" text-anchor="middle" font-size="11" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">1</text>
<rect x="206" y="231.0" width="22" height="10.0" fill="var(--accent)" stroke="currentColor" stroke-width="1"/>
<text x="217.0" y="253" text-anchor="middle" font-size="11" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">2</text>
<rect x="232" y="226.0" width="22" height="15.0" fill="var(--accent)" stroke="currentColor" stroke-width="1"/>
<text x="243.0" y="253" text-anchor="middle" font-size="11" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">3</text>
<rect x="258" y="221.0" width="22" height="20.0" fill="var(--accent)" stroke="currentColor" stroke-width="1"/>
<text x="269.0" y="253" text-anchor="middle" font-size="11" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">4</text>
<rect x="284" y="216.0" width="22" height="25.0" fill="var(--accent)" stroke="currentColor" stroke-width="1"/>
<text x="295.0" y="253" text-anchor="middle" font-size="11" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">5</text>
<rect x="310" y="211.0" width="22" height="30.0" fill="var(--accent)" stroke="currentColor" stroke-width="1"/>
<text x="321.0" y="253" text-anchor="middle" font-size="11" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">6</text>
<rect x="336" y="206.0" width="22" height="35.0" fill="var(--accent)" stroke="currentColor" stroke-width="1"/>
<text x="347.0" y="253" text-anchor="middle" font-size="11" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">7</text>
<rect x="362" y="201.0" width="22" height="40.0" fill="var(--accent)" stroke="currentColor" stroke-width="1"/>
<text x="373.0" y="253" text-anchor="middle" font-size="11" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">8</text>
<line x1="174" y1="241" x2="398" y2="241" stroke="currentColor" stroke-opacity="0.4"/>
</svg>

Nach drei Runden ist alles sortiert, weil sich die Anzahl der Schlangen jede Runde halbiert: 8 → 4 → 2 → 1. Bei 26 Personen sind es fünf Runden (26 → 13 → 7 → 4 → 2 → 1).

*Das Verschmelzen von Hand:* Zwei Schlangen **2, 5, 8** und **1, 4, 9**. Vorne stehen 2 und 1: Die 1 ist kleiner, sie kommt als Erste. Dann 2 und 4: die 2. Dann 5 und 4: die 4. Dann 5 und 9: die 5. Dann 8 und 9: die 8. Die linke Schlange ist leer, die 9 wird angehängt. Ergebnis: **1, 2, 4, 5, 8, 9**.

## Zwei Verfahren, ein Problem

| | Bubble Sort | Merge Sort |
|---|---|---|
| Grundidee | Nachbarn vergleichen und tauschen | Schlangen verschmelzen |
| Was bleibt am Ende eines Schritts? | der grösste Wert steht fest | zwei Schlangen sind eine geworden |
| Einfach zu verstehen? | ja | etwas anspruchsvoller |
| Welches ist schneller bei vielen Werten? | wird später genauer angeschaut | wird später genauer angeschaut |

Beide Verfahren sind **Algorithmen** im Sinn von Lektion 1: eindeutig, ausführbar, allgemein und endlich. Sie lösen dasselbe Problem auf verschiedenen Wegen. Welcher Weg der bessere ist, klären wir in Lektion 4.

## Begriffsübersicht

| Begriff | Bedeutung |
|---|---|
| Sortieren | Daten nach einem Kriterium in eine Reihenfolge bringen |
| Sortierkriterium | Regel, die festlegt, was «grösser» und «kleiner» heisst |
| Bubble Sort | Sortieren durch wiederholtes Vergleichen und Tauschen von Nachbarn |
| Durchgang | einmal die Reihe von links nach rechts durchlaufen (Bubble Sort) |
| Merge Sort | Sortieren durch Verschmelzen sortierter Schlangen |
| Schlange | bereits sortierte Teilfolge |
| Runde | alle Schlangen verschmelzen paarweise (Merge Sort) |
