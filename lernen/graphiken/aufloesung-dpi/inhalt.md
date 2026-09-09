# Bildauflösung und DPI

*FMS · Farben und Bilder · Lektion 1b · Lesezeit ca. 10 Minuten*

Diese Seite enthält alles aus dem Selbstlernmodul, das Sie im Unterricht bearbeitet haben — zum Nachlesen, wenn Sie gefehlt haben, und zum Nacharbeiten vor einer Prüfung. Die Lösungen sind eingeklappt: erst selbst überlegen, dann aufklappen.

---

## Worum es geht

Ein Foto wird zweimal ausgedruckt: einmal in Postkartengrösse, einmal als Plakat. Der kleine Ausdruck ist gestochen scharf, der grosse deutlich unscharf — obwohl es **exakt dieselbe Datei** ist. Warum?

Die Antwort steckt in zwei Begriffen, die oft verwechselt werden: **Bildauflösung** und **DPI**.

---

## Bildauflösung

Die **Bildauflösung** gibt an, aus wie vielen Pixeln ein Bild besteht, angegeben als Breite × Höhe:

> **2400 × 1600 Pixel**

Daraus berechnet man die gesamte Pixelanzahl:

> **Pixelanzahl = Breite × Höhe**  
> 2400 × 1600 = 3 840 000 Pixel ≈ 3,84 Megapixel (1 Megapixel = 1 000 000 Pixel)

**Das Entscheidende:** Die Bildauflösung steckt in der Datei. Sie ändert sich nicht, wenn Sie das Bild grösser oder kleiner anzeigen, verschieben oder drucken.

> **Mehr Pixel = mehr Details im Bild.**

<details>
<summary>Übung: Megapixel berechnen</summary>

| Gerät | Auflösung | Megapixel |
|---|---|---|
| Ältere Handykamera | 4000 × 3000 | 12,0 |
| Aktuelle Handykamera | 8160 × 6120 | 49,9 |
| Handy-Bildschirm | 2400 × 1080 | 2,6 |
| Bildschirm im Schulzimmer | 1920 × 1080 | 2,1 |
| 4K-Fernseher | 3840 × 2160 | 8,3 |

Die Herstellerangabe „50 Megapixel" ist gerundet — 8160 × 6120 ergibt genau 49,9 Millionen Pixel. Beachten Sie ausserdem, wie wenige Pixel ein Bildschirm im Vergleich zu einer Kamera darstellt. Das wird gleich wichtig.

</details>

---

## Was ein Bildschirm anzeigt

Ein Bildschirm kann immer nur so viele Pixel zeigen, wie er selbst besitzt — auch wenn das Bild viel mehr hat. Und das sind erstaunlich wenige: Selbst ein grosser 4K-Fernseher zeigt nur rund einen Sechstel der Pixel, die eine aktuelle Handykamera aufnimmt. Auf dem Handy-Bildschirm sehen Sie noch weniger.

<svg viewBox="0 0 620 300" role="img" aria-label="Ineinanderliegende Rechtecke nach Pixelzahl: Handy-Bildschirm 2,6 Megapixel, 4K-Fernseher 8,3 Megapixel, Foto der Handykamera 50 Megapixel." style="display:block;width:100%;height:auto">
<rect x="6" y="6" width="384" height="288" fill="var(--accent)" fill-opacity="0.10" stroke="var(--accent)" stroke-width="1.5"></rect>
<rect x="6" y="6" width="181" height="102" fill="var(--accent)" fill-opacity="0.16" stroke="var(--accent)" stroke-width="1.5"></rect>
<rect x="6" y="6" width="113" height="51" fill="var(--accent)" fill-opacity="0.30" stroke="var(--accent)" stroke-width="1.5"></rect>
<g font-family="'IBM Plex Mono', ui-monospace, monospace" font-size="13" fill="currentColor">
<rect x="410" y="40" width="14" height="14" fill="var(--accent)" fill-opacity="0.30" stroke="var(--accent)"></rect>
<text x="432" y="47" font-weight="600">Handy-Bildschirm</text>
<text x="432" y="65">2400 × 1080 · ≈ 2,6 MP</text>
<rect x="410" y="98" width="14" height="14" fill="var(--accent)" fill-opacity="0.16" stroke="var(--accent)"></rect>
<text x="432" y="105" font-weight="600">4K-Fernseher</text>
<text x="432" y="123">3840 × 2160 · ≈ 8,3 MP</text>
<rect x="410" y="156" width="14" height="14" fill="var(--accent)" fill-opacity="0.10" stroke="var(--accent)"></rect>
<text x="432" y="163" font-weight="600">Foto der Handykamera</text>
<text x="432" y="181">8160 × 6120 · ≈ 50 MP</text>
</g>
</svg>

Das Bild wird beim Anzeigen also verkleinert — die Datei selbst bleibt gleich gross.

> **Ein Bild kann mehr Pixel haben, als der Bildschirm zeigen kann.**

---

## Zoll

> **1 Zoll (englisch: inch) = 2,54 cm**

Zoll ist die Einheit, in der Druck- und Bildschirmgrössen traditionell angegeben werden — deshalb taucht sie beim nächsten Begriff auf. Rechnen Sie am Schluss jeder Rechnung in Zentimeter um, sonst können Sie sich die Grösse nicht vorstellen.

---

## DPI

**DPI** steht für *dots per inch*, auf Deutsch **Punkte pro Zoll**. Die Zahl sagt, wie viele Bildpunkte beim Ausgeben auf **einem Zoll Länge** untergebracht werden.

> 300 DPI heisst: auf jedem Zoll Papier liegen 300 Punkte nebeneinander.

Stellen Sie sich eine Strecke von einem Zoll vor. Einmal verteilen Sie 72 Punkte darauf, einmal 300. Im zweiten Fall ist jeder Punkt viel kleiner und liegt dichter am nächsten — das Auge kann sie nicht mehr einzeln unterscheiden, und der Druck wirkt scharf.

> **Höhere DPI = die Punkte liegen dichter beieinander = schärferer Druck.**

DPI beschreibt also **nicht das Bild selbst**, sondern **wie dicht die vorhandenen Pixel auf dem Papier verteilt werden**. Das ist der wichtigste Unterschied zur Bildauflösung.

*Randnotiz:* Bei Bildschirmen wäre eigentlich **PPI** (*pixels per inch*) der korrekte Begriff, weil ein Bildschirm Pixel anzeigt und kein Drucker Punkte setzt. In der Praxis sagen fast alle trotzdem DPI.

---

## Die Druckgrösse berechnen

Bildauflösung und DPI zusammen ergeben die **Druckgrösse**, also die physische Grösse auf Papier:

> **Druckgrösse (in Zoll) = Pixelzahl ÷ DPI**  
> **Druckgrösse (in cm) = Druckgrösse (in Zoll) × 2,54**

Breite und Höhe werden **getrennt** gerechnet.

### Beispiel

Ein Bild mit 1800 × 1200 Pixeln bei 300 DPI:

- Breite: 1800 ÷ 300 = 6 Zoll → 6 × 2,54 = **15,24 cm**
- Höhe: 1200 ÷ 300 = 4 Zoll → 4 × 2,54 = **10,16 cm**

Dasselbe Bild bei 150 DPI:

- Breite: 1800 ÷ 150 = 12 Zoll → **30,48 cm**
- Höhe: 1200 ÷ 150 = 8 Zoll → **20,32 cm**

Die Datei ist identisch. Nur die Verteilung der Pixel auf dem Papier ist eine andere.

---

## Die Lernaufgabe

Berechnen Sie die Druckgrösse bei 300, 150 und 72 DPI — in Zoll und in Zentimeter, Breite und Höhe getrennt.

- **Bild A: 2400 × 1800 Pixel**
- **Bild B: 3600 × 2400 Pixel**

<details>
<summary>Lösung Bild A (2400 × 1800 Pixel)</summary>

| DPI | Breite in Zoll | Höhe in Zoll | Breite in cm | Höhe in cm |
|---|---|---|---|---|
| 300 | 2400 ÷ 300 = 8 | 1800 ÷ 300 = 6 | 20,3 | 15,2 |
| 150 | 2400 ÷ 150 = 16 | 1800 ÷ 150 = 12 | 40,6 | 30,5 |
| 72 | 2400 ÷ 72 = 33,3 | 1800 ÷ 72 = 25 | 84,7 | 63,5 |

Rechenweg für die erste Zeile: 2400 ÷ 300 = 8 Zoll; 8 × 2,54 = 20,32 cm. 1800 ÷ 300 = 6 Zoll; 6 × 2,54 = 15,24 cm.

Zur Vorstellung: bei 300 DPI etwa A5, bei 150 DPI etwa A3, bei 72 DPI fast einen Meter breit — und dann sichtbar unscharf.

</details>

<details>
<summary>Lösung Bild B (3600 × 2400 Pixel)</summary>

| DPI | Breite in Zoll | Höhe in Zoll | Breite in cm | Höhe in cm |
|---|---|---|---|---|
| 300 | 3600 ÷ 300 = 12 | 2400 ÷ 300 = 8 | 30,5 | 20,3 |
| 150 | 3600 ÷ 150 = 24 | 2400 ÷ 150 = 16 | 61,0 | 40,6 |
| 72 | 3600 ÷ 72 = 50 | 2400 ÷ 72 = 33,3 | 127,0 | 84,7 |

Bild B bei 72 DPI wäre 1,27 m breit.

</details>

**Häufigster Fehler:** DPI durch Pixel teilen statt umgekehrt. Machen Sie die Plausibilitätsprobe — ein gedrucktes Bild kann nicht 0,125 cm breit sein.

---

## Was die Tabellen zeigen

<details>
<summary>Wie verändert sich die Grösse, wenn die DPI sinkt?</summary>

Sie nimmt zu. Genauer: Halbieren Sie die DPI, verdoppeln sich Breite und Höhe — die Fläche wird viermal so gross. Von 300 auf 150 DPI wird aus 20,3 × 15,2 cm also 40,6 × 30,5 cm. Die Datei bleibt dabei unverändert.

</details>

<details>
<summary>Welche DPI ergeben ein kleines, scharfes Bild — welche ein grosses, unscharfes?</summary>

Die **hohe** DPI-Zahl (hier 300) ergibt das kleine, scharfe Bild: viele Punkte pro Zoll, dicht beieinander.

Die **niedrige** DPI-Zahl (hier 72) ergibt das grosse, unscharfe: dieselben Pixel über eine viel grössere Fläche verteilt, jedes einzelne wird gross und sichtbar.

</details>

<details>
<summary>Welches Bild wird bei gleicher DPI grösser gedruckt?</summary>

Bild B, weil es mehr Pixel hat (3600 × 2400 statt 2400 × 1800). Bei gleicher DPI gilt: mehr Pixel = mehr Zoll = grösserer Druck bei gleichbleibender Schärfe.

</details>

**Und damit zurück zur Ausgangsfrage:** Beim kleinen Ausdruck war die DPI-Zahl hoch, beim grossen niedrig — dieselbe Datei, andere Verteilung. Es sind keine Details verloren gegangen, sie wurden nur auseinandergezogen, bis man die einzelnen Pixel sieht.

---

## Der Merksatz

> **Die Pixelanzahl bestimmt die Details, die DPI bestimmt, wie diese Details auf dem Papier verteilt werden.**

---

## Zwei Transferfragen

<details>
<summary>Warum reicht eine Bildschirmauflösung von 72 DPI für den Druck nicht?</summary>

Ein Bild, das für den Bildschirm gedacht ist, enthält entsprechend wenige Pixel — mehr könnte der Bildschirm gar nicht anzeigen (ein Schulzimmer-Bildschirm schafft 2,1 Megapixel, eine aktuelle Handykamera rund 50). Für guten Druck braucht man aber rund 300 DPI. Von so einem Bildschirmbild bliebe bei 300 DPI nur eine sehr kleine scharfe Fläche übrig.

</details>

<details>
<summary>Wie hängt die Druckqualität mit Pixelanzahl und DPI zusammen?</summary>

Beide zusammen ergeben die Qualität:

- Die **Pixelanzahl** setzt die Obergrenze an Details. Was nicht in der Datei steckt, kann kein Drucker ergänzen.
- Die **DPI** bestimmt, wie fein diese vorhandenen Details auf dem Papier verteilt werden.

Für einen Druck, der **gross und scharf** ist, brauchen Sie beides.

</details>

---

## Der häufigste Denkfehler

Die DPI-Zahl lässt sich in jedem Bildprogramm mit zwei Klicks ändern. Viele glauben deshalb, man könne ein Bild „auf 300 DPI hochstellen“ und es werde besser.

**Das stimmt nicht.** Durch das Umstellen der DPI entstehen **keine neuen Pixel**. Ein Bild mit 600 × 400 Pixeln bleibt ein Bild mit 600 × 400 Pixeln. Bei 300 DPI wird es einfach nur klein gedruckt: 600 ÷ 300 = 2 Zoll = 5,1 cm breit, 400 ÷ 300 = 1,3 Zoll = 3,4 cm hoch.

Fehlende Details lassen sich nachträglich nicht herbeirechnen. **Wer gross drucken will, muss von Anfang an genügend Pixel aufnehmen.**

### Faustregeln für die Praxis

| Verwendung | Übliche DPI | Warum |
|---|---|---|
| Bildschirm, Web, Social Media | 72–96 DPI | Der Bildschirm zeigt ohnehin nicht mehr Punkte an |
| Guter Druck: Foto, Flyer, Broschüre | 300 DPI | Aus normalem Leseabstand erkennt das Auge keine Punkte mehr |
| Plakat, aus mehreren Metern betrachtet | 100–150 DPI genügen | Grosser Abstand verzeiht gröbere Punkte |

---

## Zusatzaufgabe

Sie möchten ein Plakat im Format A4 (21 × 29,7 cm) mit 300 DPI drucken. Wie viele Pixel muss Ihr Bild mindestens haben, wie vielen Megapixeln entspricht das, und reicht eine aktuelle Handykamera (rund 50 Megapixel)?

<details>
<summary>Lösung</summary>

- Breite: 21 ÷ 2,54 = 8,27 Zoll → 8,27 × 300 ≈ **2480 Pixel**
- Höhe: 29,7 ÷ 2,54 = 11,69 Zoll → 11,69 × 300 ≈ **3508 Pixel**
- 2480 × 3508 ≈ 8 700 000 Pixel ≈ **8,7 Megapixel**
- Ja, eine aktuelle Handykamera reicht locker: ein 50-Megapixel-Foto hat 8160 × 6120 Pixel, beide Seiten sind weit länger als nötig. Weil das Seitenverhältnis 4:3 nicht exakt zu A4 passt, müssten Sie aber einen Streifen wegschneiden. (Schon eine ältere 12-Megapixel-Kamera mit 4000 × 3000 Pixeln würde übrigens genügen.)

</details>

---

## Selbstcheck

Können Sie das alles? Was nicht, lesen Sie oben im entsprechenden Abschnitt nach.

- Erklären, was die Bildauflösung eines Bildes ist
- Wissen, dass 1 Zoll 2,54 cm sind
- Erklären, was DPI bedeutet und wofür das „D“ steht
- Den Unterschied zwischen Bildauflösung und DPI in einem Satz sagen
- Die Druckgrösse eines Bildes in cm berechnen
- Sagen, was passiert, wenn man die DPI halbiert
- Begründen, warum ein Bildschirmbild für den Druck oft nicht reicht
- Erklären, warum „einfach auf 300 DPI hochstellen“ ein Bild nicht besser macht

## Begriffsübersicht

| Begriff | Bedeutung |
|---|---|
| Pixel | Einzelner quadratischer Bildpunkt |
| Bildauflösung | Anzahl Pixel eines Bildes, als Breite × Höhe |
| Pixelanzahl | Breite × Höhe (Gesamtzahl der Pixel) |
| Megapixel | 1 000 000 Pixel |
| Zoll (inch) | Längeneinheit, 1 Zoll = 2,54 cm |
| DPI | Punkte pro Zoll bei der Ausgabe (Druck) |
| PPI | Pixel pro Zoll (fachlich korrekter Begriff für Bildschirme) |
| Druckgrösse | Physische Grösse auf Papier = Pixelanzahl ÷ DPI |
| Bildschirmauflösung | Pixelanzahl, die ein Bildschirm darstellen kann (z. B. 1920 × 1080) |

---

## Jetzt selbst prüfen

Wenn Sie den Selbstcheck oben sicher abhaken können, testen Sie sich im [Pixel-Check](../../../graphiken/pixel/) — ein paar Multiple-Choice-Fragen zu Pixel, Auflösung und Schärfe.
