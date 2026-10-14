# Plan ohne Nachfragen

*Algorithmen · Lektion 1 · Lesezeit ca. 8 Minuten*

Diese Seite enthält den Stoff der ersten Lektion zum Nachlesen, wenn Sie gefehlt haben, und zum Repetieren. Die Aufgaben stehen im Dossier. Erst selbst überlegen, dann Lösungen bei der Lehrperson holen.

---

## Der Roboter

Stellen Sie sich einen Roboter vor, der nur drei Befehle versteht: «gehe n Schritte vorwärts» (n ist eine Zahl), «drehe dich nach rechts» und «drehe dich nach links». Alles andere beantwortet er mit einer Fehlermeldung. Sie wollen ihn von einem **START** zu einem **ZIEL** bringen.

- Sie sagen: «Gehe zum Ziel.» Der Roboter meldet: «Fehler: Befehl unbekannt.» Er weiss nicht, was ein Ziel ist.
- Sie sagen: «Gehe vorwärts.» Der Roboter meldet: «Fehler: Zahl fehlt.» Er weiss nicht, wie weit.
- Sie sagen: «Gehe 5 Schritte vorwärts.» Der Roboter geht genau fünf Schritte, auch wenn das Ziel schon nach drei erreicht war.
- Sie sagen: «Drehe dich nach links.» Er dreht sich nach **seiner** linken Seite, nicht nach Ihrer.

Das ist kein Fehler des Roboters. Er tut genau das, was der Plan verlangt. Der Fehler steckt im **Plan**. Ein Computer verhält sich genauso: Er führt aus, was im Programm steht, meldet eine Fehlermeldung, wenn er einen Befehl nicht kennt, und denkt nicht mit.

## Partnerzeichnen

Wenn zwei Personen zusammenarbeiten, eine sagt an und die andere zeichnet, ohne die Vorlage zu sehen, zeigt sich dasselbe:

- **Ohne Rückfragen** entstehen oft Figuren, die nur entfernt an die Vorlage erinnern. Anweisungen wie «oben ein Dach» oder «ein Stück nach rechts» lassen zu viel offen.
- **Mit Rückfragen** gelingt es meist besser, aber es braucht viele zusätzliche Sätze.
- Am besten funktioniert, wenn beide sich auf **feste Wörter** einigen, zum Beispiel «ein Kästchen nach rechts», «zwei Kästchen nach oben». Dann ist jeder Schritt klar.

Genau dieses Einigen auf eine feste Sprache ist die Grundidee jeder Programmiersprache.

## Was ist ein Algorithmus?

Ein **Algorithmus** ist ein Plan, mit dem man ein Problem löst, auch ohne das Problem zu verstehen:

> **Ein Algorithmus ist eine eindeutige Handlungsanweisung zur Lösung eines Problems.**
> Er besteht aus endlich vielen, klar festgelegten Schritten und wandelt eine Eingabe in eine Ausgabe um.

Ein Algorithmus muss nicht in einem Computer laufen. Ein Rezept ist ein Algorithmus: Die Zutaten sind die Eingabe, das Kochen nach Rezept ist die Verarbeitung, das Gericht die Ausgabe.

## Eingabe, Verarbeitung, Ausgabe

Fast jeder Algorithmus folgt dem **EVA-Prinzip**:

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

Ein Getränkeautomat nimmt Münzen und eine Wahl entgegen (Eingabe), prüft den Betrag und berechnet das Rückgeld (Verarbeitung) und gibt Getränk und Wechselgeld aus (Ausgabe). Wer den Automaten benutzt, muss nicht wissen, wie er intern arbeitet. Er muss nur wissen, was er hineingeben muss und was er zurückbekommt.

## Vier Anforderungen

Ein Plan ist nur dann ein Algorithmus, wenn er vier Anforderungen erfüllt:

| Anforderung | Bedeutung | Beispiel |
|---|---|---|
| **eindeutig** | Jeder Schritt ist klar festgelegt, es gibt keinen Spielraum. | «Rühre, bis es gut ist» ist nicht eindeutig: Wer entscheidet, wann es gut ist? |
| **ausführbar** | Wer den Plan ausführt, kann jeden Schritt wirklich machen. | «Gehe zum Ziel» geht nur, wenn der Roboter weiss, was ein Ziel ist. Er kennt nur drei Befehle. |
| **allgemein** | Der Plan löst nicht nur einen Einzelfall, sondern alle Fälle derselben Art. | «Rechne 4 + 9» ist ein Einzelfall. «Addiere zwei beliebige Zahlen» ist allgemein. |
| **endlich** | Der Plan kommt nach endlich vielen Schritten ans Ziel. | «Gehe immer weiter nach rechts» hört nie auf. |

Welcher Schritt «ausführbar» ist, hängt vom Ausführenden ab. Für einen Menschen ist «gehe zur Tür» ausführbar, für einen Roboter ohne Beine nicht.

> Ein Algorithmus ist ein Plan, den jemand ausführen kann, der nicht mitdenkt.

## Begriffsübersicht

| Begriff | Bedeutung |
|---|---|
| Algorithmus | eindeutige Handlungsanweisung aus endlich vielen Schritten, die ein Problem löst |
| EVA-Prinzip | Eingabe → Verarbeitung → Ausgabe |
| eindeutig | kein Spielraum bei der Ausführung |
| ausführbar | jeder Schritt kann vom Ausführenden wirklich gemacht werden |
| allgemein | gilt für alle Fälle derselben Art, nicht nur für einen |
| endlich | kommt nach endlich vielen Schritten zum Ende |

## Ausblick

In Lektion 2 lernen Sie, Algorithmen so aufzuschreiben, dass man sie auf einen Blick versteht: im **Struktogramm**. Dort sehen Sie auch, wie man Wiederholungen kurz und eindeutig ausdrückt.

*Quelle der Definition und der vier Anforderungen: Kurs «Codes & Algorithmen» auf [oinf.ch](https://oinf.ch/kurs/codes-und-algorithmen/algorithmen/), sinngemäss wiedergegeben.*
