# Bildauflösung und DPI

*Farben und Bilder · Selbstlernmodul · ca. 40 Minuten*

[[anleitung]]
**So arbeiten Sie**

- Arbeiten Sie die Teile **der Reihe nach** durch; jeder baut auf dem vorherigen auf.
- **Theorie** lesen — **Aufgabe** schriftlich lösen — **Kontrolle** zum Selbstprüfen. Lesen Sie erst weiter, wenn es stimmt.
- Wenn Sie hängen bleiben: zuerst den Theorieteil davor nochmals lesen, dann die Lehrperson fragen.
- Sie brauchen einen Taschenrechner.

Richtwerte: Teile 1–5 ca. 15 Min. · Teile 6–7 ca. 17 Min. · Teile 8–10 ca. 8 Min.
[[/anleitung]]

## Teil 1 — Was Sie schon wissen

In der letzten Lektion haben Sie gesehen: Ein digitales Bild besteht aus lauter kleinen quadratischen Bildpunkten, den **Pixeln**. Wenn Sie weit genug in ein Foto hineinzoomen, werden diese Quadrate sichtbar. Und: Je mehr Pixel ein Bild auf gleicher Fläche hat, desto schärfer wirkt es.

[[aufgabe:Aufgabe 1 — kurze Aufrischung]]
Ein Bild hat 1000 × 800 Pixel. Wie viele Pixel sind das insgesamt?

[[antwort:2]]
[[/aufgabe]]

[[kontrolle]]
1000 × 800 = 800 000 Pixel, also 0,8 Megapixel. Falls Sie unsicher waren: Pixelanzahl = Breite × Höhe, und 1 Megapixel = 1 000 000 Pixel.
[[/kontrolle]]

## Teil 2 — Das Problem

Stellen Sie sich vor, Sie lassen ein Foto zweimal ausdrucken: einmal in Postkartengrösse, einmal als grosses Plakat.

Der kleine Ausdruck sieht gestochen scharf aus. Der grosse ist deutlich unscharf, man erkennt Klötzchen. Dabei ist es **exakt dieselbe Datei** — es wurde nichts verändert und nichts nachbearbeitet.

[[aufgabe:Aufgabe 2]]
Notieren Sie in ein bis zwei Sätzen Ihre Vermutung: Woran könnte das liegen?

[[antwort:3]]

Es gibt hier noch kein Richtig oder Falsch. Sie überprüfen Ihre Vermutung am Ende von Teil 7 selbst.
[[/aufgabe]]

## Teil 3 — Theorie: Bildauflösung

Die **Bildauflösung** gibt an, aus wie vielen Pixeln ein Bild besteht. Man schreibt sie als Breite × Höhe, zum Beispiel **2400 × 1600 Pixel**. Daraus berechnet man die gesamte Pixelanzahl:

> **Pixelanzahl = Breite × Höhe**  
> 2400 × 1600 = 3 840 000 Pixel ≈ 3,84 Megapixel

Das Entscheidende: **Die Bildauflösung steckt in der Datei.** Sie ändert sich nicht, wenn Sie das Bild grösser oder kleiner anzeigen, verschieben oder drucken. Ein Bild mit 2400 × 1600 Pixeln hat immer 2400 × 1600 Pixel — auf dem Handy, am Beamer, auf dem Plakat.

[[merksatz]]
Mehr Pixel = mehr Details im Bild.
[[/merksatz]]

[[aufgabe:Aufgabe 3]]
Rechnen Sie die Megapixel aus. Runden Sie auf eine Nachkommastelle.

| Gerät | Auflösung | Megapixel |
|---|---|---|
| Ältere Handykamera | 4000 × 3000 | |
| Aktuelle Handykamera | 8160 × 6120 | |
| Handy-Bildschirm | 2400 × 1080 | |
| Bildschirm im Schulzimmer | 1920 × 1080 | |
| 4K-Fernseher | 3840 × 2160 | |
[[/aufgabe]]

[[kontrolle]]
12,0 — 49,9 — 2,6 — 2,1 — 8,3 Megapixel. Die Herstellerangabe „50 Megapixel" ist gerundet (8160 × 6120 = 49,9). Beachten Sie, wie wenige Pixel selbst grosse Bildschirme im Vergleich zur Kamera darstellen. Darauf kommen wir in Teil 8 zurück.
[[/kontrolle]]

Ein Bildschirm zeigt immer nur so viele Pixel, wie er selbst hat — auch der grösste Fernseher im Wohnzimmer bleibt weit unter dem, was die Kamera aufnimmt:

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

## Teil 4 — Theorie: Zoll

Damit die nächste Rechnung funktioniert, brauchen Sie eine Einheit:

[[merksatz]]
1 Zoll (englisch: inch) = 2,54 cm
[[/merksatz]]

Zoll ist die Einheit, in der Druck- und Bildschirmgrössen traditionell angegeben werden — deshalb taucht sie gleich beim nächsten Begriff auf. Rechnen Sie am Schluss jeder Aufgabe in Zentimeter um, sonst können Sie sich die Grösse nicht vorstellen.

[[aufgabe:Aufgabe 4]]
Wie viele Zentimeter sind 5 Zoll?

[[antwort:1]]
[[/aufgabe]]

[[kontrolle]]
5 × 2,54 = 12,7 cm.
[[/kontrolle]]

## Teil 5 — Theorie: DPI

**DPI** steht für *dots per inch*, auf Deutsch **Punkte pro Zoll**. Die Zahl sagt, wie viele Bildpunkte beim Ausgeben auf **einem Zoll Länge** untergebracht werden. 300 DPI heisst also: auf jedem Zoll Papier liegen 300 Punkte nebeneinander.

Stellen Sie sich eine Strecke von einem Zoll vor. Einmal verteilen Sie 72 Punkte darauf, einmal 300. Im zweiten Fall ist jeder Punkt viel kleiner und liegt viel dichter am nächsten — das Auge kann sie nicht mehr einzeln unterscheiden, und der Druck wirkt scharf.

[[merksatz]]
Höhere DPI = die Punkte liegen dichter beieinander = schärferer Druck.
[[/merksatz]]

DPI beschreibt also **nicht das Bild selbst**, sondern **wie dicht die vorhandenen Pixel auf dem Papier verteilt werden**. Das ist der wichtigste Unterschied zur Bildauflösung aus Teil 3.

*Randnotiz:* Bei Bildschirmen wäre eigentlich **PPI** (*pixels per inch*, Pixel pro Zoll) der korrekte Begriff, weil ein Bildschirm Pixel anzeigt und kein Drucker Punkte setzt. In der Praxis sagen fast alle trotzdem DPI. Wir bleiben deshalb bei DPI — Sie sollten den Begriff PPI aber schon einmal gehört haben.

## Teil 6 — Die Druckgrösse berechnen

Bildauflösung und DPI zusammen ergeben die **Druckgrösse**, also die physische Grösse des Bildes auf Papier:

> **Druckgrösse (in Zoll) = Pixelzahl ÷ DPI**  
> **Druckgrösse (in cm) = Druckgrösse (in Zoll) × 2,54**

Breite und Höhe rechnen Sie dabei **getrennt**. Sie erhalten also immer zwei Zahlen.

### Beispiel zum Mitrechnen

Ein Bild mit 1800 × 1200 Pixeln, gedruckt mit **300 DPI**:

- Breite: 1800 ÷ 300 = 6 Zoll → 6 × 2,54 = **15,24 cm**
- Höhe: 1200 ÷ 300 = 4 Zoll → 4 × 2,54 = **10,16 cm**

Dasselbe Bild, aber mit **150 DPI** gedruckt:

- Breite: 1800 ÷ 150 = 12 Zoll → **30,48 cm**
- Höhe: 1200 ÷ 150 = 8 Zoll → **20,32 cm**

Die Datei ist in beiden Fällen identisch. Nur die Verteilung der Pixel auf dem Papier ist eine andere.

[[aufgabe:Aufgabe 5 — die Lernaufgabe]]
Sie haben zwei digitale Bilder: **Bild A: 2400 × 1800 Pixel** und **Bild B: 3600 × 2400 Pixel**. Berechnen Sie für beide die Druckgrösse bei 300, 150 und 72 DPI — in Zoll **und** in Zentimeter.

**Hinweise, falls Sie stecken bleiben:**

1. Rechnen Sie Breite und Höhe getrennt.
2. Teilen Sie die Pixelzahl durch die DPI. Das Ergebnis ist eine Länge in **Zoll**, noch nicht in Zentimeter.
3. Erst ganz am Schluss mit 2,54 multiplizieren.
4. Bei 72 DPI geht die Division nicht glatt auf. Runden Sie auf eine Nachkommastelle.

**Bild A — 2400 × 1800 Pixel**

| DPI | Breite in Zoll | Höhe in Zoll | Breite in cm | Höhe in cm |
|---|---|---|---|---|
| 300 | | | | |
| 150 | | | | |
| 72 | | | | |

**Bild B — 3600 × 2400 Pixel**

| DPI | Breite in Zoll | Höhe in Zoll | Breite in cm | Höhe in cm |
|---|---|---|---|---|
| 300 | | | | |
| 150 | | | | |
| 72 | | | | |
[[/aufgabe]]

[[kontrolle]]
Bei Bild A und 300 DPI muss **8 × 6 Zoll** herauskommen, also **20,3 × 15,2 cm** (ungefähr A5). Bei Bild B und 72 DPI muss **50 × 33,3 Zoll** herauskommen, also **127 × 84,7 cm** — mehr als ein Meter breit. Stimmen diese beiden Eckwerte, haben Sie richtig gerechnet.

**Falls etwas nicht stimmt:** Der häufigste Fehler ist, DPI durch Pixel zu teilen statt umgekehrt. Machen Sie die Plausibilitätsprobe — ein gedrucktes Bild kann nicht 0,125 cm breit sein.
[[/kontrolle]]

## Teil 7 — Was Sie beobachtet haben

[[aufgabe:Aufgabe 6]]
Schauen Sie Ihre ausgefüllten Tabellen an und beantworten Sie:

**a)** Wie verändert sich die physische Grösse, wenn Sie die DPI verringern?

[[antwort:2]]

**b)** Welche DPI ergeben ein kleines, scharfes Bild?

[[antwort:1]]

**c)** Welche DPI führen zu einem grossen, unscharfen Bild?

[[antwort:1]]

**d)** Vergleichen Sie Bild A und Bild B bei derselben DPI-Zahl. Welches wird grösser gedruckt — und warum?

[[antwort:2]]
[[/aufgabe]]

[[kontrolle]]
- **a)** Die Grösse nimmt zu. Genauer: Halbieren Sie die DPI, verdoppeln sich Breite und Höhe — die Fläche wird sogar viermal so gross. Von 300 auf 150 DPI wird aus 20,3 × 15,2 cm also 40,6 × 30,5 cm.
- **b)** Die hohe DPI-Zahl, hier 300. Die Punkte liegen dicht beieinander.
- **c)** Die niedrige DPI-Zahl, hier 72. Dieselben Pixel werden über eine viel grössere Fläche verteilt, jedes einzelne wird dadurch gross und sichtbar.
- **d)** Bild B, weil es mehr Pixel hat. Bei gleicher DPI gilt: mehr Pixel = mehr Zoll = grösserer Druck bei gleichbleibender Schärfe.
[[/kontrolle]]

[[aufgabe:Zurück zu Aufgabe 2]]
Genau das ist mit den beiden Ausdrucken aus Teil 2 passiert. Der kleine Ausdruck hatte eine hohe DPI-Zahl, der grosse eine niedrige — dieselbe Datei, andere Verteilung. Es sind **keine Details verloren gegangen**, sie wurden nur auseinandergezogen, bis man die einzelnen Pixel sieht.

Ergänzen Sie Ihre Vermutung von Aufgabe 2: Lagen Sie richtig? Was würden Sie jetzt anders formulieren?

[[antwort:3]]
[[/aufgabe]]

[[merksatz]]
Die Pixelanzahl bestimmt die Details, die DPI bestimmt, wie diese Details auf dem Papier verteilt werden.
[[/merksatz]]

## Teil 8 — Transfer: zu zweit besprechen

Besprechen Sie die beiden Fragen mit Ihrer Sitznachbarin oder Ihrem Sitznachbarn und halten Sie danach beide je eine Antwort schriftlich fest.

[[aufgabe:Aufgabe 7]]
**a)** Warum ist eine Bildschirmauflösung von z. B. 72 DPI für den Druck nicht ausreichend?

[[antwort:3]]

**b)** Wie hängt die Qualität eines Drucks mit der Pixelanzahl und der DPI zusammen?

[[antwort:3]]
[[/aufgabe]]

[[kontrolle]]
- **a)** Ein Bild, das für den Bildschirm gedacht ist, enthält entsprechend wenige Pixel — mehr könnte der Bildschirm gar nicht anzeigen (siehe Aufgabe 3: nur 2,1 Megapixel). Für guten Druck braucht man aber rund 300 DPI. Von so einem Bildschirmbild bliebe bei 300 DPI nur eine sehr kleine scharfe Fläche übrig.
- **b)** Beide zusammen ergeben die Qualität. Die Pixelanzahl setzt die Obergrenze an Details — was nicht in der Datei steckt, kann kein Drucker ergänzen. Die DPI bestimmt, wie fein diese Details verteilt werden. Für gross **und** scharf brauchen Sie beides.
[[/kontrolle]]

## Teil 9 — Der häufigste Denkfehler

Die DPI-Zahl lässt sich in jedem Bildprogramm mit zwei Klicks ändern. Viele glauben deshalb, man könne ein Bild einfach „auf 300 DPI hochstellen“ und es werde besser.

**Das stimmt nicht.** Durch das Umstellen der DPI entstehen **keine neuen Pixel**. Ein Bild mit 600 × 400 Pixeln bleibt ein Bild mit 600 × 400 Pixeln. Bei 300 DPI wird es einfach nur klein gedruckt: 600 ÷ 300 = 2 Zoll = 5,1 cm breit, 400 ÷ 300 = 1,3 Zoll = 3,4 cm hoch.

Fehlende Details lassen sich nachträglich nicht herbeirechnen. **Wer gross drucken will, muss von Anfang an genügend Pixel aufnehmen.**

### Faustregeln für die Praxis

| Verwendung | Übliche DPI | Warum |
|---|---|---|
| Bildschirm, Web, Social Media | 72–96 | Der Bildschirm zeigt ohnehin nicht mehr Punkte an |
| Guter Druck: Foto, Flyer, Broschüre | 300 | Aus normalem Leseabstand erkennt das Auge keine Punkte mehr |
| Plakat, aus mehreren Metern betrachtet | 100–150 | Grosser Abstand verzeiht gröbere Punkte |

## Teil 10 — Zusatzaufgabe (wenn Sie früher fertig sind)

[[aufgabe:Aufgabe 8]]
Sie möchten ein Plakat im Format A4 (21 × 29,7 cm) mit 300 DPI drucken.

**a)** Wie viele Pixel muss Ihr Bild mindestens haben? *Tipp: rückwärts rechnen — zuerst cm in Zoll, dann mit der DPI multiplizieren.*

[[antwort:2]]

**b)** Wie vielen Megapixeln entspricht das?

[[antwort:1]]

**c)** Eine aktuelle Handykamera nimmt Fotos mit rund 50 Megapixeln auf (siehe Aufgabe 3). Reicht das?

[[antwort:2]]
[[/aufgabe]]

[[kontrolle]]
a) ca. 2480 × 3508 Pixel. b) ca. 8,7 Megapixel. c) Ja, locker — ein 50-Megapixel-Foto hat 8160 × 6120 Pixel, weit mehr als nötig. Selbst eine ältere 12-Megapixel-Kamera (4000 × 3000) würde reichen. Weil das Seitenverhältnis nicht exakt zu A4 passt, müssten Sie aber einen Streifen wegschneiden.
[[/kontrolle]]

## Selbstcheck: Haben Sie alles?

Gehen Sie die Liste durch. Was Sie nicht abhaken können, lesen Sie im genannten Teil nochmals nach.

[[checkliste]]
- Ich kann erklären, was die Bildauflösung eines Bildes ist. (Teil 3)
- Ich weiss, dass 1 Zoll 2,54 cm sind. (Teil 4)
- Ich kann erklären, was DPI bedeutet, und wofür das „D“ steht. (Teil 5)
- Ich kann den Unterschied zwischen Bildauflösung und DPI in einem Satz sagen. (Teil 5)
- Ich kann die Druckgrösse eines Bildes in cm berechnen. (Teil 6)
- Ich kann sagen, was passiert, wenn ich die DPI halbiere. (Teil 7)
- Ich kann begründen, warum ein Bildschirmbild für den Druck oft nicht reicht. (Teil 8)
- Ich weiss, warum „einfach auf 300 DPI hochstellen“ ein Bild nicht besser macht. (Teil 9)
[[/checkliste]]

[[aufgabe:Take-Away]]
Vervollständigen Sie zum Abschluss die beiden Sätze mit eigenen Worten.

**Bildauflösung ist …**

[[antwort:2]]

**Wenn ich die DPI halbiere, dann …**

[[antwort:2]]
[[/aufgabe]]

## Ausblick

Sie wissen jetzt, wie viele Pixel ein Bild hat und wie gross man es drucken kann. In der nächsten Lektion schauen wir uns an, wie man ein solches Pixelbild nicht mit Farbstiften, sondern nur mit den Zahlen 0 und 1 aufschreiben kann — so, dass ein Computer daraus wieder das Bild zeichnen kann.
