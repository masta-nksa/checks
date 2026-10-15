# Algorithmen sichtbar machen

*Algorithmen · Lektion 2 · Dossier*

[[namensfeld]]

[[anleitung]]
**Heute**

- Sie lernen drei Bausteine kennen, aus denen jeder Algorithmus besteht: **Sequenz, Verzweigung, Wiederholung**.
- Sie lesen und zeichnen **Struktogramme**, eine Schreibweise, die man auf einen Blick versteht.
- Sie lernen die vier Denkschritte des **Computational Thinking** kennen.

Arbeiten Sie die Aufgaben der Reihe nach durch. Wer vor dem Ende der Lektion fertig ist, macht einfach mit der nächsten Aufgabe weiter. Nach Teil 6 folgt der Selbstcheck, das Take-Away steht ganz am Schluss.
[[/anleitung]]

## Teil 1 — Kürzer aufschreiben

Beim Pausenverkauf liefert ein Lieferwagen **12 Wasserflaschen** an. Ihre Kiste («Harass») fasst **4 Flaschen**. Der Lieferwagen steht vor dem Schulhaus, die Flaschen müssen in den Keller.

[[aufgabe:Aufgabe 1 — dasselbe, kürzer]]
**a)** Schreiben Sie auf, was jemand tun muss, damit alle 12 Flaschen im Keller sind. Schreiben Sie **jeden Schritt aus**, auch wenn er sich wiederholt.

[[antwort:4]]

**b)** Schreiben Sie denselben Plan nochmals, **so kurz wie möglich**. Sie dürfen Wörter wie «wiederhole» verwenden.

[[antwort:3]]

**c)** Wie viele Zeilen hat Ihre Fassung a), wie viele Fassung b)? Was würde sich ändern, wenn es 120 Flaschen wären?

[[antwort:2]]
[[/aufgabe]]

## Teil 2 — Die drei Bausteine

Jeder Algorithmus besteht aus nur **drei Bausteinen**:

| Baustein | Bedeutung | Beispiel |
|---|---|---|
| **Sequenz** | Schritte laufen nacheinander ab. | «Öffne die Tür, gehe hinein, schliesse die Tür.» |
| **Verzweigung** | Je nach Bedingung wird der eine oder der andere Weg gewählt. | «Wenn es regnet, nimm den Schirm, sonst nicht.» |
| **Wiederholung** | Schritte werden mehrmals ausgeführt, entweder eine feste Anzahl oder solange eine Bedingung gilt. | «Wiederhole 10-mal …» oder «Rühre, solange Klumpen zu sehen sind.» |

[[aufgabe:Aufgabe 2 — Bausteine erkennen]]
Welcher Baustein steckt in jedem Satz? Schreiben Sie *Sequenz*, *Verzweigung* oder *Wiederholung*.

| Satz | Baustein |
|---|---|
| 1. «Stelle den Wecker, lösche das Licht, schlafe.» | |
| 2. «Schreibe zehnmal deinen Namen auf.» | |
| 3. «Ist die Zahl gerade, teile sie durch 2, sonst addiere 1.» | |
| 4. «Rühre, bis der Teig glatt ist.» | |
| 5. «Wenn der Bus schon da ist, renne, sonst gehe normal.» | |
| 6. «Packe das Pausenbrot, die Flasche und den Apfel ein.» | |
[[/aufgabe]]

<div style="break-before:page"></div>

## Teil 3 — Das Struktogramm

Ein **Struktogramm** zeigt einen Algorithmus als Aufbau aus Kästen. Es wird immer **von oben nach unten** gelesen. Was **eingerückt** unter einem Kopf steht, gehört dazu. Jeder Baustein hat sein Symbol:

<div style="display:flex;gap:8mm;align-items:flex-start"><div style="width:48%"><p><b>Sequenz:</b> Die Kästen folgen untereinander.</p><svg viewBox="0 0 216 96" role="img" aria-label="Sequenz im Struktogramm" style="display:block;width:100%;height:auto;max-width:216px">
<rect x="3" y="3" width="210" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/>
<text x="108.0" y="22.5" text-anchor="middle" font-size="13" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">Schritt A</text>
<rect x="3" y="33" width="210" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/>
<text x="108.0" y="52.5" text-anchor="middle" font-size="13" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">Schritt B</text>
<rect x="3" y="63" width="210" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/>
<text x="108.0" y="82.5" text-anchor="middle" font-size="13" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">Schritt C</text>
</svg><p><b>Verzweigung:</b> Oben steht die Bedingung. Trifft sie zu, geht es links weiter (<i>Ja</i>), sonst rechts (<i>Nein</i>).</p><svg viewBox="0 0 266 82" role="img" aria-label="Verzweigung im Struktogramm" style="display:block;width:100%;height:auto;max-width:266px">
<rect x="3" y="3" width="260" height="76" fill="none" stroke="currentColor" stroke-width="1.4"/>
<rect x="3" y="3" width="260" height="46" fill="var(--accent)" fill-opacity="0.10" stroke="currentColor" stroke-width="1.4"/>
<line x1="3" y1="3" x2="133.0" y2="49" stroke="currentColor" stroke-width="1.4"/>
<line x1="263" y1="3" x2="133.0" y2="49" stroke="currentColor" stroke-width="1.4"/>
<line x1="133.0" y1="49" x2="133.0" y2="79" stroke="currentColor" stroke-width="1.4"/>
<text x="133.0" y="20" text-anchor="middle" font-size="13" font-weight="600" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">Bedingung?</text>
<text x="11" y="43" font-size="11" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">Ja</text>
<text x="255" y="43" text-anchor="end" font-size="11" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">Nein</text>
<rect x="3" y="49" width="130.0" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/>
<text x="68.0" y="68.5" text-anchor="middle" font-size="13" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">Schritt A</text>
<rect x="133.0" y="49" width="130.0" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/>
<text x="198.0" y="68.5" text-anchor="middle" font-size="13" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">Schritt B</text>
</svg></div><div style="width:48%"><p><b>Wiederholung:</b> Der farbige Kopf nennt, wie oft oder wie lange. Was eingerückt darunter steht, wird wiederholt.</p><svg viewBox="0 0 216 96" role="img" aria-label="Wiederholung im Struktogramm" style="display:block;width:100%;height:auto;max-width:216px">
<rect x="3" y="3" width="210" height="90" fill="none" stroke="currentColor" stroke-width="1.4"/>
<rect x="3" y="3" width="210" height="30" fill="var(--accent)" fill-opacity="0.10" stroke="currentColor" stroke-width="1.4"/>
<rect x="3" y="33" width="26" height="60" fill="var(--accent)" fill-opacity="0.10" stroke="currentColor" stroke-width="1.4"/>
<text x="13" y="22.5" font-size="13" font-weight="600" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">wiederhole 4-mal</text>
<rect x="29" y="33" width="184" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/>
<text x="121.0" y="52.5" text-anchor="middle" font-size="13" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">Schritt A</text>
<rect x="29" y="63" width="184" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/>
<text x="121.0" y="82.5" text-anchor="middle" font-size="13" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">Schritt B</text>
</svg><svg viewBox="0 0 216 66" role="img" aria-label="Wiederholung mit Bedingung im Struktogramm" style="display:block;width:100%;height:auto;max-width:216px">
<rect x="3" y="3" width="210" height="60" fill="none" stroke="currentColor" stroke-width="1.4"/>
<rect x="3" y="3" width="210" height="30" fill="var(--accent)" fill-opacity="0.10" stroke="currentColor" stroke-width="1.4"/>
<rect x="3" y="33" width="26" height="30" fill="var(--accent)" fill-opacity="0.10" stroke="currentColor" stroke-width="1.4"/>
<text x="13" y="22.5" font-size="13" font-weight="600" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">solange Bedingung gilt</text>
<rect x="29" y="33" width="184" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/>
<text x="121.0" y="52.5" text-anchor="middle" font-size="13" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">Schritt A</text>
</svg></div></div>

Der Wasserflaschen-Plan aus Teil 1 als Struktogramm:

<svg viewBox="0 0 426 126" role="img" aria-label="Struktogramm Wasserflaschen tragen" style="display:block;width:100%;height:auto;max-width:426px">
<rect x="3" y="3" width="420" height="120" fill="none" stroke="currentColor" stroke-width="1.4"/>
<rect x="3" y="3" width="420" height="30" fill="var(--accent)" fill-opacity="0.10" stroke="currentColor" stroke-width="1.4"/>
<rect x="3" y="33" width="26" height="90" fill="var(--accent)" fill-opacity="0.10" stroke="currentColor" stroke-width="1.4"/>
<text x="13" y="22.5" font-size="13" font-weight="600" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">wiederhole 3-mal</text>
<rect x="29" y="33" width="394" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/>
<text x="226.0" y="52.5" text-anchor="middle" font-size="13" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">4 Flaschen ins Harass legen</text>
<rect x="29" y="63" width="394" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/>
<text x="226.0" y="82.5" text-anchor="middle" font-size="13" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">Harass ins Schulhaus tragen</text>
<rect x="29" y="93" width="394" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/>
<text x="226.0" y="112.5" text-anchor="middle" font-size="13" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">Flaschen auspacken, Harass zurückbringen</text>
</svg>

## Teil 4 — Streifen ordnen

[[aufgabe:Aufgabe 3 — Getränkeautomat]]
Ein Getränkeautomat verlangt **2 Fr.** Auf den **Streifen** im Anhang steht, was er tut, aber durcheinander. Schneiden Sie die Streifen aus und legen Sie sie zu zweit so, dass der Automat richtig arbeitet: Er nimmt Münzen, **solange** der Betrag kleiner als 2 Fr. ist, gibt dann das Getränk aus und gibt Rückgeld aus, wenn zu viel bezahlt wurde, **sonst** meldet er «Passend bezahlt». Zeichnen Sie das Ergebnis als Struktogramm in das Feld (Rahmen mit Kopf für die Wiederholung, Dreieck für die Verzweigung).

<svg viewBox="0 0 640 235" role="img" aria-label="Zeichenfläche für das Struktogramm" style="display:block;width:100%;height:auto;max-width:640px">
<defs><pattern id="bb51" width="21" height="21" patternUnits="userSpaceOnUse"><path d="M21 0H0V21" fill="none" stroke="currentColor" stroke-opacity="0.14"/></pattern></defs>
<rect x="1" y="1" width="638" height="233" rx="3" fill="url(#bb51)" stroke="currentColor" stroke-opacity="0.45"/>
</svg>
[[/aufgabe]]

<div style="break-before:page"></div>

## Teil 5 — Struktogramme lesen

Ein **Käfer** läuft auf einem Feld aus Kästchen. Er kennt drei Befehle: **vorwärts** (ein Feld in Blickrichtung), **rechts drehen** und **links drehen** (jeweils eine Vierteldrehung, er bleibt dabei auf seinem Feld). Das Dreieck zeigt, wo er startet und wohin er schaut.

[[aufgabe:Aufgabe 4 — der Käfer, Wiederholung]]
Führen Sie das Struktogramm aus und zeichnen Sie den **Weg** des Käfers in beiden Situationen ein.

<div style="display:flex;gap:4mm;align-items:flex-start"><div style="width:36%"><svg viewBox="0 0 246 126" role="img" aria-label="Käfer-Struktogramm 1" style="display:block;width:100%;height:auto;max-width:246px">
<rect x="3" y="3" width="240" height="120" fill="none" stroke="currentColor" stroke-width="1.4"/>
<rect x="3" y="3" width="240" height="30" fill="var(--accent)" fill-opacity="0.10" stroke="currentColor" stroke-width="1.4"/>
<rect x="3" y="33" width="26" height="90" fill="var(--accent)" fill-opacity="0.10" stroke="currentColor" stroke-width="1.4"/>
<text x="13" y="22.5" font-size="13" font-weight="600" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">wiederhole 4-mal</text>
<rect x="29" y="33" width="214" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/>
<text x="136.0" y="52.5" text-anchor="middle" font-size="13" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">vorwärts</text>
<rect x="29" y="63" width="214" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/>
<text x="136.0" y="82.5" text-anchor="middle" font-size="13" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">vorwärts</text>
<rect x="29" y="93" width="214" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/>
<text x="136.0" y="112.5" text-anchor="middle" font-size="13" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">rechts drehen</text>
</svg></div><div style="width:30%"><svg viewBox="0 0 197 215" role="img" aria-label="Kaefer-Feld" style="display:block;width:100%;height:auto;max-width:197px">
<text x="4" y="12" font-size="11" font-weight="600" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">Situation A</text>
<rect x="4.0" y="184.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="4.0" y="157.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="4.0" y="130.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="4.0" y="103.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="4.0" y="76.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="4.0" y="49.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="4.0" y="22.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="31.0" y="184.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="31.0" y="157.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="31.0" y="130.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="31.0" y="103.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="31.0" y="76.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="31.0" y="49.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="31.0" y="22.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="58.0" y="184.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="58.0" y="157.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="58.0" y="130.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="58.0" y="103.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="58.0" y="76.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="58.0" y="49.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="58.0" y="22.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="85.0" y="184.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="85.0" y="157.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="85.0" y="130.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="85.0" y="103.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="85.0" y="76.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="85.0" y="49.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="85.0" y="22.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="112.0" y="184.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="112.0" y="157.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="112.0" y="130.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="112.0" y="103.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="112.0" y="76.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="112.0" y="49.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="112.0" y="22.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="139.0" y="184.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="139.0" y="157.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="139.0" y="130.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="139.0" y="103.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="139.0" y="76.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="139.0" y="49.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="139.0" y="22.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="166.0" y="184.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="166.0" y="157.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="166.0" y="130.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="166.0" y="103.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="166.0" y="76.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="166.0" y="49.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="166.0" y="22.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="4" y="22" width="189" height="189" fill="none" stroke="currentColor" stroke-width="2.4"/>
<polygon points="44.5,161.59 50.98,176.17 38.02,176.17" fill="var(--accent)" stroke="currentColor" stroke-width="1.2"/>
</svg></div><div style="width:30%"><svg viewBox="0 0 197 215" role="img" aria-label="Kaefer-Feld" style="display:block;width:100%;height:auto;max-width:197px">
<text x="4" y="12" font-size="11" font-weight="600" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">Situation B</text>
<rect x="4.0" y="184.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="4.0" y="157.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="4.0" y="130.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="4.0" y="103.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="4.0" y="76.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="4.0" y="49.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="4.0" y="22.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="31.0" y="184.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="31.0" y="157.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="31.0" y="130.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="31.0" y="103.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="31.0" y="76.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="31.0" y="49.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="31.0" y="22.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="58.0" y="184.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="58.0" y="157.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="58.0" y="130.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="58.0" y="103.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="58.0" y="76.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="58.0" y="49.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="58.0" y="22.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="85.0" y="184.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="85.0" y="157.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="85.0" y="130.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="85.0" y="103.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="85.0" y="76.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="85.0" y="49.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="85.0" y="22.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="112.0" y="184.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="112.0" y="157.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="112.0" y="130.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="112.0" y="103.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="112.0" y="76.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="112.0" y="49.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="112.0" y="22.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="139.0" y="184.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="139.0" y="157.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="139.0" y="130.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="139.0" y="103.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="139.0" y="76.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="139.0" y="49.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="139.0" y="22.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="166.0" y="184.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="166.0" y="157.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="166.0" y="130.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="166.0" y="103.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="166.0" y="76.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="166.0" y="49.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="166.0" y="22.0" width="27" height="27" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="4" y="22" width="189" height="189" fill="none" stroke="currentColor" stroke-width="2.4"/>
<polygon points="125.5,71.41 119.02,56.83 131.98,56.83" fill="var(--accent)" stroke="currentColor" stroke-width="1.2"/>
</svg></div></div>

In welcher Form läuft der Käfer? Beschreiben Sie in einem Satz, was der Algorithmus zeichnet.

[[antwort:1]]
[[/aufgabe]]

[[aufgabe:Aufgabe 5 — der Käfer, Verzweigung]]
Dunkle Felder sind Hindernisse. Der Käfer darf sie und den Rand nicht betreten. «Feld vorne frei» heisst: Dort ist weder ein Hindernis noch der Rand. Zeichnen Sie den Weg ein. Auch das **Drehen** zählt als ein Durchlauf.

<div style="display:flex;gap:6mm;align-items:flex-start"><div style="width:58%"><svg viewBox="0 0 306 112" role="img" aria-label="Käfer-Struktogramm 2" style="display:block;width:100%;height:auto;max-width:306px">
<rect x="3" y="3" width="300" height="106" fill="none" stroke="currentColor" stroke-width="1.4"/>
<rect x="3" y="3" width="300" height="30" fill="var(--accent)" fill-opacity="0.10" stroke="currentColor" stroke-width="1.4"/>
<rect x="3" y="33" width="26" height="76" fill="var(--accent)" fill-opacity="0.10" stroke="currentColor" stroke-width="1.4"/>
<text x="13" y="22.5" font-size="13" font-weight="600" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">wiederhole 10-mal</text>
<rect x="29" y="33" width="274" height="76" fill="none" stroke="currentColor" stroke-width="1.4"/>
<rect x="29" y="33" width="274" height="46" fill="var(--accent)" fill-opacity="0.10" stroke="currentColor" stroke-width="1.4"/>
<line x1="29" y1="33" x2="166.0" y2="79" stroke="currentColor" stroke-width="1.4"/>
<line x1="303" y1="33" x2="166.0" y2="79" stroke="currentColor" stroke-width="1.4"/>
<line x1="166.0" y1="79" x2="166.0" y2="109" stroke="currentColor" stroke-width="1.4"/>
<text x="166.0" y="50" text-anchor="middle" font-size="13" font-weight="600" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">Feld vorne frei?</text>
<text x="37" y="73" font-size="11" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">Ja</text>
<text x="295" y="73" text-anchor="end" font-size="11" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">Nein</text>
<rect x="29" y="79" width="137.0" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/>
<text x="97.5" y="98.5" text-anchor="middle" font-size="13" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">vorwärts</text>
<rect x="166.0" y="79" width="137.0" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/>
<text x="234.5" y="98.5" text-anchor="middle" font-size="13" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">rechts drehen</text>
</svg></div><div style="width:34%"><svg viewBox="0 0 178 196" role="img" aria-label="Kaefer-Feld" style="display:block;width:100%;height:auto;max-width:178px">
<text x="4" y="12" font-size="11" font-weight="600" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">Käfer-Feld</text>
<rect x="4.0" y="158.0" width="34" height="34" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="4.0" y="124.0" width="34" height="34" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="4.0" y="90.0" width="34" height="34" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="4.0" y="56.0" width="34" height="34" fill="currentColor" fill-opacity="0.55" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="4.0" y="22.0" width="34" height="34" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="38.0" y="158.0" width="34" height="34" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="38.0" y="124.0" width="34" height="34" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="38.0" y="90.0" width="34" height="34" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="38.0" y="56.0" width="34" height="34" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="38.0" y="22.0" width="34" height="34" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="72.0" y="158.0" width="34" height="34" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="72.0" y="124.0" width="34" height="34" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="72.0" y="90.0" width="34" height="34" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="72.0" y="56.0" width="34" height="34" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="72.0" y="22.0" width="34" height="34" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="106.0" y="158.0" width="34" height="34" fill="currentColor" fill-opacity="0.55" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="106.0" y="124.0" width="34" height="34" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="106.0" y="90.0" width="34" height="34" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="106.0" y="56.0" width="34" height="34" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="106.0" y="22.0" width="34" height="34" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="140.0" y="158.0" width="34" height="34" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="140.0" y="124.0" width="34" height="34" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="140.0" y="90.0" width="34" height="34" fill="currentColor" fill-opacity="0.55" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="140.0" y="56.0" width="34" height="34" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="140.0" y="22.0" width="34" height="34" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/>
<rect x="4" y="22" width="170" height="170" fill="none" stroke="currentColor" stroke-width="2.4"/>
<polygon points="21,163.78 29.16,182.14 12.84,182.14" fill="var(--accent)" stroke="currentColor" stroke-width="1.2"/>
</svg></div></div>

Auf welchem Feld und mit welcher Blickrichtung endet der Käfer?

[[antwort:1]]
[[/aufgabe]]

[[aufgabe:Aufgabe 6 — Rechnen im Struktogramm]]
Im Kasten «z ← 1» wird dem Merkzettel z der Wert 1 zugewiesen. Der Pfeil bedeutet: «z bekommt den Wert».

<svg viewBox="0 0 286 126" role="img" aria-label="Struktogramm Rechnen" style="display:block;width:100%;height:auto;max-width:286px">
<rect x="3" y="3" width="280" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/>
<text x="143.0" y="22.5" text-anchor="middle" font-size="13" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">z ← 1</text>
<rect x="3" y="33" width="280" height="60" fill="none" stroke="currentColor" stroke-width="1.4"/>
<rect x="3" y="33" width="280" height="30" fill="var(--accent)" fill-opacity="0.10" stroke="currentColor" stroke-width="1.4"/>
<rect x="3" y="63" width="26" height="30" fill="var(--accent)" fill-opacity="0.10" stroke="currentColor" stroke-width="1.4"/>
<text x="13" y="52.5" font-size="13" font-weight="600" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">wiederhole n-mal</text>
<rect x="29" y="63" width="254" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/>
<text x="156.0" y="82.5" text-anchor="middle" font-size="13" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">z ← z · 2</text>
<rect x="3" y="93" width="280" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/>
<text x="143.0" y="112.5" text-anchor="middle" font-size="13" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">Ausgabe: z</text>
</svg>

Führen Sie das Struktogramm für verschiedene n aus:

| n | Ausgabe |
|---|---|
| 3 | |
| 5 | |
| 7 | |

Was berechnet der Algorithmus? Erinnern Sie sich an die Zahlensysteme!

[[antwort:1]]
[[/aufgabe]]

## Teil 6 — Computational Thinking

Wer einen Algorithmus entwirft, geht meist in vier Denkschritten vor. Man nennt sie zusammen **Computational Thinking** («informatisches Denken»):

| Denkschritt | Bedeutung | Beispiel: 12 Flaschen tragen |
|---|---|---|
| **Zerlegen** | Das grosse Problem in kleine Teilprobleme aufteilen. | Flaschen einpacken, tragen, auspacken, zurückbringen |
| **Muster erkennen** | Gleiches erkennen, das sich wiederholt. | Jeder Gang läuft gleich ab |
| **Abstrahieren** | Unwichtiges weglassen, aufs Wesentliche achten. | Egal, welche Marke die Flaschen haben: nur die Anzahl zählt |
| **Schrittfolge formulieren** | Die Lösung als genauen Plan aufschreiben. | Das Struktogramm aus Teil 3 |

## Selbstcheck

[[checkliste]]
- Ich kann Sequenz, Verzweigung und Wiederholung erkennen.
- Ich kann ein Struktogramm von oben nach unten lesen und mit gegebenen Werten ausführen.
- Ich kann an einem Struktogramm zeigen, was wiederholt wird und was verzweigt.
- Ich kann die vier Denkschritte des Computational Thinking nennen.
[[/checkliste]]

[[aufgabe:Aufgabe 7 — Denkschritte zuordnen]]
Welcher Denkschritt steckt in jeder Aussage? Schreiben Sie *Zerlegen*, *Muster erkennen*, *Abstrahieren* oder *Schrittfolge*.

| Aussage | Denkschritt |
|---|---|
| 1. «Ein Haus besteht aus Quadrat und Dreieck, zeichnen wir beide einzeln.» | |
| 2. «Ich habe jetzt dreimal dasselbe gemacht. Das lässt sich kürzer schreiben.» | |
| 3. «Ob das Quadrat blau oder rot ist, spielt für den Plan keine Rolle.» | |
| 4. «Ich schreibe Schritt für Schritt auf, was der Roboter tun muss.» | |
[[/aufgabe]]

[[aufgabe:Aufgabe 8 — Eintrittspreis]]
Ein Kino verlangt vom Alter abhängig einen Preis: **Unter 16 Jahren: 10 Fr., ab 65 Jahren: 12 Fr., alle anderen: 16 Fr.** Das Alter wird eingegeben, der Preis ausgegeben. Zeichnen Sie das Struktogramm. *Tipp: Eine Verzweigung darf in einer anderen Verzweigung stecken.*

<svg viewBox="0 0 640 290" role="img" aria-label="Leere Zeichenflaeche" style="display:block;width:100%;height:auto;max-width:640px">
<defs><pattern id="bb1" width="21" height="21" patternUnits="userSpaceOnUse"><path d="M21 0H0V21" fill="none" stroke="currentColor" stroke-opacity="0.14"/></pattern></defs>
<rect x="1" y="1" width="638" height="288" rx="3" fill="url(#bb1)" stroke="currentColor" stroke-opacity="0.45"/>
</svg>
[[/aufgabe]]

[[aufgabe:Aufgabe 9 — gerade oder ungerade]]
Eine Zahl n wird eingegeben. Ist n **gerade**, wird sie halbiert. Ist n **ungerade**, wird sie mit 3 multipliziert und 1 addiert. Danach wird n ausgegeben. Zeichnen Sie das Struktogramm.

<svg viewBox="0 0 640 220" role="img" aria-label="Leere Zeichenflaeche" style="display:block;width:100%;height:auto;max-width:640px">
<defs><pattern id="bb2" width="21" height="21" patternUnits="userSpaceOnUse"><path d="M21 0H0V21" fill="none" stroke="currentColor" stroke-opacity="0.14"/></pattern></defs>
<rect x="1" y="1" width="638" height="218" rx="3" fill="url(#bb2)" stroke="currentColor" stroke-opacity="0.45"/>
</svg>
[[/aufgabe]]

[[aufgabe:Take-Away]]
Vervollständigen Sie mit eigenen Worten:

**Die drei Bausteine eines Algorithmus heissen …**

[[antwort:2]]

**Im Struktogramm erkenne ich eine Wiederholung daran, dass …**

[[antwort:2]]
[[/aufgabe]]

## Online-Check 1 (freiwillig)

Testen Sie sich selbst: Unter **masta-nksa.github.io/checks/algorithmen/begriff/** finden Sie den **Algorithmus-Check**. Er fragt nach dem Begriff, den vier Anforderungen und dem Lesen von Struktogrammen und gibt sofort Rückmeldung.

## Anhang — Streifen zum Ausschneiden (Aufgabe 3)

Schneiden Sie die Streifen aus. Die Reihenfolge hier ist **nicht** die richtige.

<div style="border:1.5px dashed currentColor;padding:2.5mm 4mm;margin:2mm 0">Rückgeld ausgeben</div>
<div style="border:1.5px dashed currentColor;padding:2.5mm 4mm;margin:2mm 0">Betrag erhöhen</div>
<div style="border:1.5px dashed currentColor;padding:2.5mm 4mm;margin:2mm 0">Ist der Betrag grösser als 2 Fr.?</div>
<div style="border:1.5px dashed currentColor;padding:2.5mm 4mm;margin:2mm 0">Getränk ausgeben</div>
<div style="border:1.5px dashed currentColor;padding:2.5mm 4mm;margin:2mm 0">Meldung «Passend bezahlt»</div>
<div style="border:1.5px dashed currentColor;padding:2.5mm 4mm;margin:2mm 0">Wiederhole, solange der Betrag kleiner als 2 Fr. ist</div>
<div style="border:1.5px dashed currentColor;padding:2.5mm 4mm;margin:2mm 0">Münze einwerfen</div>
<div style="display:flex;gap:6mm">
<div style="border:1.5px dashed currentColor;padding:2.5mm 4mm;margin:2mm 0;width:22%;text-align:center">Ja</div>
<div style="border:1.5px dashed currentColor;padding:2.5mm 4mm;margin:2mm 0;width:22%;text-align:center">Nein</div>
</div>
