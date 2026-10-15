# Ordnung muss sein

*Algorithmen · Lektion 3 · Dossier*

[[namensfeld]]

[[anleitung]]
**Heute**

- Sie sortieren die Klasse, und zwar mit **zwei verschiedenen Verfahren**: Bubble Sort und Merge Sort.
- Sie halten beide Verfahren als Plan in Worten fest und prüfen ihn mit den vier Anforderungen aus Lektion 1.
- Sie führen beide Verfahren an kurzen Listen von Hand durch.

Arbeiten Sie die Aufgaben der Reihe nach durch. Wer vor dem Ende der Lektion fertig ist, macht einfach mit der nächsten Aufgabe weiter. Nach Teil 6 folgt der Selbstcheck, das Take-Away steht ganz am Schluss.
[[/anleitung]]

## Teil 1 — Zwei Listen

Sie suchen den Namen **Keller**. Liste A ist durcheinander, Liste B alphabetisch sortiert. In Liste A müssen Sie **von oben nach unten** lesen, in Liste B dürfen Sie **springen**.

<div style="display:flex;gap:6mm;margin:2mm 0 4mm"><div style="flex:1;border:1.2px solid currentColor;border-radius:2px;padding:2mm 3mm"><b>Liste A (durcheinander)</b><ol style="columns:2;column-gap:6mm;margin:1.5mm 0 0;padding-left:6mm;font-size:9.5pt;line-height:1.5"><li>Suter</li><li>Graf</li><li>Zürcher</li><li>Roth</li><li>Baumann</li><li>Wyss</li><li>Egger</li><li>Steiner</li><li>Vogel</li><li>Frei</li><li>Müller</li><li>Zimmermann</li><li>Aebi</li><li>Schmid</li><li>Brunner</li><li>Meier</li><li>Keller</li><li>Huber</li><li>Gerber</li><li>Weber</li></ol></div><div style="flex:1;border:1.2px solid currentColor;border-radius:2px;padding:2mm 3mm"><b>Liste B (alphabetisch)</b><ol style="columns:2;column-gap:6mm;margin:1.5mm 0 0;padding-left:6mm;font-size:9.5pt;line-height:1.5"><li>Aebi</li><li>Baumann</li><li>Brunner</li><li>Egger</li><li>Frei</li><li>Gerber</li><li>Graf</li><li>Huber</li><li>Keller</li><li>Meier</li><li>Müller</li><li>Roth</li><li>Schmid</li><li>Steiner</li><li>Suter</li><li>Vogel</li><li>Weber</li><li>Wyss</li><li>Zimmermann</li><li>Zürcher</li></ol></div></div>

[[aufgabe:Aufgabe 1 — suchen]]
**a)** Wie viele Namen mussten Sie in Liste A lesen, bis Sie Keller gefunden haben?

[[antwort:1]]

**b)** Wie viele Namen mussten Sie in Liste B anschauen? Beschreiben Sie, wie Sie vorgegangen sind.

[[antwort:2]]

**c)** Stellen Sie sich beide Listen mit 10 000 Namen vor. Was würde sich ändern?

[[antwort:2]]

[[/aufgabe]]

## Teil 2 — Sortieren: Weshalb?

**Sortieren** heisst, Daten nach einem **Kriterium** in eine Reihenfolge zu bringen: alphabetisch, nach Zahl, nach Datum, nach Preis. Das lohnt sich aus drei Gründen:

- **Schneller suchen:** In einer sortierten Liste kann man gezielt springen (wie in Liste B).
- **Bessere Übersicht:** Höchste Note, tiefster Preis, ältester Eintrag sind sofort zu sehen.
- **Vorbereitung:** Viele weitere Verfahren arbeiten nur mit sortierten Daten effizient.

[[aufgabe:Aufgabe 2 — Kriterien]]
Nach welchem Kriterium sortiert man sinnvoll? Geben Sie zu jeder Liste **ein** Kriterium an.

| Liste | Sinnvolles Kriterium |
|---|---|
| Klassenliste | |
| Fussball-Rangliste | |
| Wörterbuch | |
| Online-Shop (Suchergebnisse) | |
| Fotos auf dem Handy | |

Wann ist «nach Name» ein **unpassendes** Kriterium? Nennen Sie ein Beispiel.

[[antwort:1]]
[[/aufgabe]]

## Teil 3 — Wir sortieren live: Bubble Sort

[[anleitung]]
**So sortieren wir uns (mit dem Badge)**

1. Stellen Sie sich in einer Reihe auf. Platz 1 ist links. Die Person auf Platz 1 erhält den **Badge**.
2. Wer den Badge hat, vergleicht den eigenen Wert (zum Beispiel Körpergrösse in cm) mit dem Wert der Person **rechts** daneben. Ist der eigene Wert **grösser**, tauschen die beiden die Plätze und der Badge bleibt bei ihr. Sonst gibt sie den Badge nach rechts weiter.
3. Das wiederholt sich, bis der Badge ganz **rechts** angekommen ist. Die Person ganz rechts ist **fertig** und wird nicht mehr verglichen. Das war ein **Durchgang**.
4. Neuer Durchgang: Der Badge geht wieder an Platz 1. Es wird bis zur letzten Person verglichen, die noch nicht fertig ist.
5. Ende: wenn nur noch eine Person übrig ist.

Die Person neben der Reihe **protokolliert** nach jedem Durchgang die Reihenfolge.
[[/anleitung]]

[[aufgabe:Aufgabe 3 — Protokoll Bubble Sort]]
Tragen Sie die Werte (zum Beispiel Körpergrösse in cm) in der Reihenfolge der Plätze ein. Eine Zeile pro Durchgang. Benutzen Sie nur so viele Spalten, wie Personen in der Reihe stehen.

| Durchgang | Platz 1 | Platz 2 | Platz 3 | Platz 4 | Platz 5 | Platz 6 | Platz 7 |
|---|---|---|---|---|---|---|---|
| Start |  |  |  |  |  |  |  |
| 1 |  |  |  |  |  |  |  |
| 2 |  |  |  |  |  |  |  |
| 3 |  |  |  |  |  |  |  |
| 4 |  |  |  |  |  |  |  |
| 5 |  |  |  |  |  |  |  |
| 6 |  |  |  |  |  |  |  |

**a)** Wer steht nach dem ersten Durchgang am richtigen Platz? Was ist an dieser Person besonders?

[[antwort:2]]

**b)** Wie viele Durchgänge waren bei Ihrer Reihe nötig?

[[antwort:1]]

*Kontrollhinweis: Nach jedem Durchgang steht ein weiterer Wert endgültig an seinem Platz.*
[[/aufgabe]]

## Teil 4 — Wir sortieren live: Merge Sort

[[anleitung]]
**So sortieren wir uns (Schlangen verschmelzen)**

1. Am Anfang ist **jede Person eine Schlange** der Länge 1.
2. Zwei benachbarte Schlangen verschmelzen zu **einer** neuen Schlange, nach dem **Reisverschluss-Prinzip**: Die vordersten Personen beider Schlangen vergleichen ihre Werte. Die Person mit dem **kleineren** Wert kommt als Nächste in die neue Schlange. Das wiederholt sich, bis eine Schlange leer ist. Der Rest der anderen Schlange wird einfach angehängt.
3. Alle Schlangen verschmelzen gleichzeitig. Das ist eine **Runde**. Bleibt eine Schlange übrig, weil es eine ungerade Anzahl gibt, rückt sie unverändert in die nächste Runde.
4. Weitere Runden, bis nur noch **eine** Schlange übrig ist.
[[/anleitung]]

[[aufgabe:Aufgabe 4 — Protokoll Merge Sort]]
Notieren Sie nach jeder Runde, wie viele Schlangen es gibt und wie lang die längste ist.

| Runde | Anzahl Schlangen | Länge der längsten Schlange |
|---|---|---|
| Start |  |  |
| 1 |  |  |
| 2 |  |  |
| 3 |  |  |
| 4 |  |  |
| 5 |  |  |

**a)** Wie viele Runden waren nötig?

[[antwort:1]]

**b)** Was ist beim Verschmelzen anders als bei Bubble Sort? Was fällt Ihnen auf?

[[antwort:2]]

*Kontrollhinweis: Mit jeder Runde halbiert sich ungefähr die Anzahl der Schlangen.*
[[/aufgabe]]

## Teil 5 — Die Pläne in Worten

[[aufgabe:Aufgabe 5 — Pläne aufschreiben]]
Schreiben Sie beide Verfahren als **Plan** auf, so genau, dass eine Person, die nicht dabei war, sie ausführen könnte.

**Bubble Sort:**

[[antwort:5]]

**Merge Sort:**

[[antwort:5]]

Prüfen Sie Ihren Plan mit den vier Anforderungen aus Lektion 1. Ist er …?

| Anforderung | Erfüllt? Warum? |
|---|---|
| eindeutig | |
| ausführbar | |
| allgemein (funktioniert er auch für Geburtsdatum oder Schuhgrösse?) | |
| endlich | |
[[/aufgabe]]

Vergleichen Sie Ihre Fassung mit diesen Mustern:

[[merksatz]]
**Bubble Sort:** Vergleiche von links nach rechts immer zwei Nachbarn. Ist der linke Wert grösser als der rechte, tausche die beiden. Am Ende der Reihe steht der grösste Wert ganz rechts und ist fertig. Beginne von vorne und vergleiche nur noch die Werte, die noch nicht fertig sind. Wiederhole, bis nur noch ein Wert übrig ist.
[[/merksatz]]

[[merksatz]]
**Merge Sort:** Jeder Wert ist zuerst eine eigene Schlange. Verschmelze immer zwei benachbarte Schlangen: Vergleiche die vordersten beiden Werte, der kleinere kommt als Nächster in die neue Schlange. Ist eine Schlange leer, hänge den Rest der anderen an. Wiederhole mit den neuen Schlangen, bis nur noch eine übrig ist.
[[/merksatz]]

Beide Pläne funktionieren für **jedes** Kriterium (Körpergrösse, Geburtsdatum, Alphabet). Man muss nur festlegen, was «grösser» und «kleiner» heisst. Das ist die **Allgemeinheit** eines Algorithmus.

## Teil 6 — Nachvollziehen

[[aufgabe:Aufgabe 6 — Bubble Sort von Hand]]
Sortieren Sie die Liste **7, 3, 5, 2** mit Bubble Sort. Notieren Sie nach jedem Durchgang die Reihenfolge.

| Durchgang | Platz 1 | Platz 2 | Platz 3 | Platz 4 |
|---|---|---|---|---|
| Start | 7 | 3 | 5 | 2 |
| 1 |  |  |  |  |
| 2 |  |  |  |  |
| 3 |  |  |  |  |

*Kontrollhinweis: Nach dem ersten Durchgang steht die 7 ganz rechts.*
[[/aufgabe]]

[[aufgabe:Aufgabe 7 — Schlangen verschmelzen]]
Zwei Schlangen sind bereits sortiert: **2, 5, 8** und **1, 4, 9**. Verschmelzen Sie sie nach dem Reisverschluss-Prinzip.

| Schritt | Vordere Werte (links / rechts) | Wer kommt in die neue Schlange? | Neue Schlange bisher |
|---|---|---|---|
| 1 |  |  |  |
| 2 |  |  |  |
| 3 |  |  |  |
| 4 |  |  |  |
| 5 |  |  |  |
| 6 |  |  |  |

*Kontrollhinweis: Fünf Schritte brauchen einen Vergleich, beim letzten ist keiner mehr nötig.*
[[/aufgabe]]

## Selbstcheck

[[checkliste]]
- Ich kann erklären, was Sortieren bedeutet, und Sortierkriterien nennen.
- Ich kann Bubble Sort an einer kurzen Liste von Hand durchführen.
- Ich kann zwei sortierte Schlangen nach dem Reisverschluss-Prinzip verschmelzen und Merge Sort an einer kurzen Liste durchführen.
- Ich kann einen Plan in Worten mit den vier Anforderungen prüfen.
[[/checkliste]]

[[aufgabe:Aufgabe 8 — der erste Durchgang]]
Führen Sie nur den **ersten Durchgang** von Bubble Sort mit der Liste **4, 1, 6, 3, 2** aus. Schreiben Sie die Liste danach auf. Welcher Wert «blubbert» an seine endgültige Stelle?

[[antwort:2]]
[[/aufgabe]]

[[aufgabe:Aufgabe 9 — Merge Sort in Runden]]
Sortieren Sie **6, 2, 7, 1, 5, 3, 8, 4** mit Merge Sort. Schreiben Sie nach jeder Runde die Schlangen auf (eckige Klammern).

| Runde | Die Schlangen |
|---|---|
| Start | [6] [2] [7] [1] [5] [3] [8] [4] |
| 1 |  |
| 2 |  |
| 3 |  |

Wie viele Runden brauchen Sie?

[[antwort:1]]
[[/aufgabe]]

[[aufgabe:Aufgabe 10 — Sonderfälle]]
Wie viele **Tauschvorgänge** braucht Bubble Sort bei der Liste **1, 2, 3, 4, 5** (schon sortiert) und bei **5, 4, 3, 2, 1** (genau umgekehrt)? Was bedeutet das?

[[antwort:3]]
[[/aufgabe]]

[[aufgabe:Take-Away]]
Vervollständigen Sie mit eigenen Worten:

**Bubble Sort funktioniert so: …**

[[antwort:2]]

**Merge Sort funktioniert so: …**

[[antwort:2]]
[[/aufgabe]]

## Ausblick

Beide Verfahren sortieren richtig. Welches ist **besser**? Das klären wir in der nächsten Lektion, indem wir zählen, wie viele Vergleiche sie brauchen.
