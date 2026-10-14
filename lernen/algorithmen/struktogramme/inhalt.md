# Algorithmen sichtbar machen

*Algorithmen · Lektion 2 · Lesezeit ca. 10 Minuten*

Diese Seite enthält den Stoff der zweiten Lektion zum Nachlesen und Repetieren. Die Aufgaben stehen im Dossier.

---

## Von der langen zur kurzen Fassung

Sie müssen 12 Wasserflaschen vom Lieferwagen in den Keller tragen. Ihre Kiste fasst 4 Flaschen. Ein Plan, der jeden Schritt ausschreibt, hat zwölf Zeilen: dreimal «Flaschen einpacken», «tragen», «auspacken», «zurückbringen». Das geht auch kürzer:

> **Wiederhole 3-mal:** Flaschen einpacken, tragen, auspacken, zurückbringen.

Die zweite Fassung ist kürzer, übersichtlicher und leichter zu ändern: Bei 120 Flaschen ändern Sie nur die Zahl. Wer so denkt, hat ein **Muster** erkannt und eine **Wiederholung** gefunden.

## Die drei Bausteine

Jeder Algorithmus besteht aus nur **drei Bausteinen**:

| Baustein | Bedeutung | Beispiel |
|---|---|---|
| **Sequenz** | Schritte laufen nacheinander ab. | Tür öffnen, hineingehen, Tür schliessen |
| **Verzweigung** | Je nach Bedingung wird der eine oder der andere Weg gewählt. | Wenn es regnet: Schirm, sonst nicht |
| **Wiederholung** | Schritte werden mehrmals ausgeführt, eine feste Anzahl oder solange eine Bedingung gilt. | 10-mal Namen schreiben; rühren, solange Klumpen zu sehen sind |

Auch grosse Programme bestehen aus nichts anderem als diesen drei Bausteinen, nur sehr viel mehr davon.

## Das Struktogramm

Ein **Struktogramm** zeigt einen Algorithmus als Aufbau aus Kästen. Gelesen wird **von oben nach unten**.

<div style="break-inside:avoid"><p><b>Sequenz:</b> Die Kästen folgen untereinander.</p><svg viewBox="0 0 216 96" role="img" aria-label="Sequenz im Struktogramm" style="display:block;width:100%;height:auto;max-width:216px">
<rect x="3" y="3" width="210" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/>
<text x="108.0" y="22.5" text-anchor="middle" font-size="13" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">Schritt A</text>
<rect x="3" y="33" width="210" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/>
<text x="108.0" y="52.5" text-anchor="middle" font-size="13" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">Schritt B</text>
<rect x="3" y="63" width="210" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/>
<text x="108.0" y="82.5" text-anchor="middle" font-size="13" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">Schritt C</text>
</svg></div>

**Wiederholung:** Der farbige Kopf nennt, wie oft oder wie lange. Was darunter eingerückt steht, wird wiederholt.

<div style="display:flex;gap:8mm;flex-wrap:wrap">
<div style="width:46%"><svg viewBox="0 0 216 96" role="img" aria-label="Wiederholung im Struktogramm" style="display:block;width:100%;height:auto;max-width:216px">
<rect x="3" y="3" width="210" height="90" fill="none" stroke="currentColor" stroke-width="1.4"/>
<rect x="3" y="3" width="210" height="30" fill="var(--accent)" fill-opacity="0.10" stroke="currentColor" stroke-width="1.4"/>
<text x="13" y="22.5" font-size="13" font-weight="600" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">wiederhole 4-mal</text>
<rect x="29" y="33" width="184" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/>
<text x="121.0" y="52.5" text-anchor="middle" font-size="13" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">Schritt A</text>
<rect x="29" y="63" width="184" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/>
<text x="121.0" y="82.5" text-anchor="middle" font-size="13" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">Schritt B</text>
</svg></div>
<div style="width:46%"><svg viewBox="0 0 216 66" role="img" aria-label="Wiederholung mit Bedingung im Struktogramm" style="display:block;width:100%;height:auto;max-width:216px">
<rect x="3" y="3" width="210" height="60" fill="none" stroke="currentColor" stroke-width="1.4"/>
<rect x="3" y="3" width="210" height="30" fill="var(--accent)" fill-opacity="0.10" stroke="currentColor" stroke-width="1.4"/>
<text x="13" y="22.5" font-size="13" font-weight="600" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">solange Bedingung gilt</text>
<rect x="29" y="33" width="184" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/>
<text x="121.0" y="52.5" text-anchor="middle" font-size="13" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">Schritt A</text>
</svg></div>
</div>

<div style="break-inside:avoid"><p><b>Verzweigung:</b> Oben steht die Bedingung. Trifft sie zu, geht es links weiter (<i>Ja</i>), sonst rechts (<i>Nein</i>).</p><svg viewBox="0 0 266 82" role="img" aria-label="Verzweigung im Struktogramm" style="display:block;width:100%;height:auto;max-width:266px">
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
</svg></div>

Der Wasserflaschen-Plan als Struktogramm:

<svg viewBox="0 0 426 126" role="img" aria-label="Struktogramm Wasserflaschen tragen" style="display:block;width:100%;height:auto;max-width:426px">
<rect x="3" y="3" width="420" height="120" fill="none" stroke="currentColor" stroke-width="1.4"/>
<rect x="3" y="3" width="420" height="30" fill="var(--accent)" fill-opacity="0.10" stroke="currentColor" stroke-width="1.4"/>
<text x="13" y="22.5" font-size="13" font-weight="600" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">wiederhole 3-mal</text>
<rect x="29" y="33" width="394" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/>
<text x="226.0" y="52.5" text-anchor="middle" font-size="13" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">4 Flaschen ins Harass legen</text>
<rect x="29" y="63" width="394" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/>
<text x="226.0" y="82.5" text-anchor="middle" font-size="13" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">Harass ins Schulhaus tragen</text>
<rect x="29" y="93" width="394" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/>
<text x="226.0" y="112.5" text-anchor="middle" font-size="13" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">Flaschen auspacken, Harass zurückbringen</text>
</svg>

> **Struktogramm:** von oben nach unten lesen. Eingerückt heisst: gehört zum Kasten darüber. Rahmen mit Kopf heisst: Wiederholung. Dreieck mit Ja und Nein heisst: Verzweigung.

## Ein Struktogramm ausführen

Um ein Struktogramm auszuführen, spielen Sie den Computer: Sie gehen Kasten für Kasten durch und notieren, was sich ändert. Beispiel:

<svg viewBox="0 0 286 126" role="img" aria-label="Struktogramm Rechnen" style="display:block;width:100%;height:auto;max-width:286px">
<rect x="3" y="3" width="280" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/>
<text x="143.0" y="22.5" text-anchor="middle" font-size="13" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">z ← 1</text>
<rect x="3" y="33" width="280" height="60" fill="none" stroke="currentColor" stroke-width="1.4"/>
<rect x="3" y="33" width="280" height="30" fill="var(--accent)" fill-opacity="0.10" stroke="currentColor" stroke-width="1.4"/>
<text x="13" y="52.5" font-size="13" font-weight="600" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">wiederhole n-mal</text>
<rect x="29" y="63" width="254" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/>
<text x="156.0" y="82.5" text-anchor="middle" font-size="13" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">z ← z · 2</text>
<rect x="3" y="93" width="280" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/>
<text x="143.0" y="112.5" text-anchor="middle" font-size="13" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">Ausgabe: z</text>
</svg>

Bei **n = 3**: z startet bei 1. Die Wiederholung läuft dreimal, jedes Mal wird z verdoppelt: 1 → 2 → 4 → 8. Ausgabe: 8. Der Algorithmus berechnet 2 hoch n, also die Zweierpotenz.

*Hinweis zum Zeichen ←:* «z ← 1» heisst: z **bekommt** den Wert 1. Es ist keine Gleichung, sondern eine Anweisung.

## Der Käfer

Ein Käfer läuft auf einem Feld und kennt drei Befehle: **vorwärts**, **rechts drehen**, **links drehen**. Er ist ein einfacher Roboter. Ein Struktogramm sagt ihm genau, was er tun soll:

<svg viewBox="0 0 246 126" role="img" aria-label="Käfer-Struktogramm 1" style="display:block;width:100%;height:auto;max-width:246px">
<rect x="3" y="3" width="240" height="120" fill="none" stroke="currentColor" stroke-width="1.4"/>
<rect x="3" y="3" width="240" height="30" fill="var(--accent)" fill-opacity="0.10" stroke="currentColor" stroke-width="1.4"/>
<text x="13" y="22.5" font-size="13" font-weight="600" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">wiederhole 4-mal</text>
<rect x="29" y="33" width="214" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/>
<text x="136.0" y="52.5" text-anchor="middle" font-size="13" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">vorwärts</text>
<rect x="29" y="63" width="214" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/>
<text x="136.0" y="82.5" text-anchor="middle" font-size="13" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">vorwärts</text>
<rect x="29" y="93" width="214" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/>
<text x="136.0" y="112.5" text-anchor="middle" font-size="13" fill="currentColor" font-family="'IBM Plex Sans', system-ui, sans-serif">rechts drehen</text>
</svg>

Der Käfer läuft viermal: zwei Felder vor, nach rechts drehen. Dabei zeichnet er im Gedanken ein Quadrat. Sie sehen: Mit **Wiederholung** kommt man mit drei Kästchen aus, statt zwölf Zeilen zu schreiben.

Mit einer **Verzweigung** kann der Käfer auf Hindernisse reagieren: «Wenn das Feld vorne frei ist, gehe vorwärts, sonst drehe nach rechts.» Das Struktogramm dazu enthält eine Verzweigung innerhalb einer Wiederholung. Bausteine dürfen ineinander stecken.

## Computational Thinking

Wer einen Algorithmus entwirft, geht meist in vier Denkschritten vor, die man zusammen **Computational Thinking** («informatisches Denken») nennt:

| Denkschritt | Bedeutung |
|---|---|
| **Zerlegen** | Das grosse Problem in kleine Teilprobleme aufteilen |
| **Muster erkennen** | Gleiches erkennen, das sich wiederholt |
| **Abstrahieren** | Unwichtiges weglassen, aufs Wesentliche achten |
| **Schrittfolge formulieren** | Die Lösung als genauen Plan aufschreiben |

Die Einteilung in vier Teile ist eine verbreitete Konvention. Der Begriff geht auf Jeannette Wing (2006) zurück.

## Begriffsübersicht

| Begriff | Bedeutung |
|---|---|
| Sequenz | Schritte nacheinander |
| Verzweigung | Wahl zwischen zwei Wegen je nach Bedingung |
| Wiederholung | Schritte mehrmals ausführen (feste Anzahl oder solange eine Bedingung gilt) |
| Struktogramm | Darstellung eines Algorithmus aus Kästen, von oben nach unten gelesen |
| Bedingung | Aussage, die zutrifft oder nicht (zum Beispiel «Alter < 16?») |
| Computational Thinking | Zerlegen, Muster erkennen, Abstrahieren, Schrittfolge formulieren |

## Jetzt selbst prüfen

Wenn Sie den Selbstcheck im Dossier sicher abhaken können, testen Sie sich im [Algorithmus-Check](../../../algorithmen/begriff/) — ein paar Fragen zu Anforderungen, Bausteinen und Struktogrammen.
