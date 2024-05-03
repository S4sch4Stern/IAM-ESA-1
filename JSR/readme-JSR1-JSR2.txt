Dieser Ordner enthält alle Anforderungen bis zum Ende von Aufgabe JSR (Seite 21).

Bitte beachten Sie die Aus- und Entkommentierungshinweisen in der Datei JSR:

- der Live Server link muss auf dem eigenen Server in der jsr.js Datei angepasst werden.

- die Projektsturktur ab dieser Ordnerbezeichnung (IAM-ESA-1/.../...) oder einer nachfolgenden
in die IDE hinzufügen  bzw. vom eignen Live Server aufrufen, um Fehler beim Laden der JSON-Datei zu vermeiden.
Der Serverlink zur JSON-Datei muss in Zeile 130 & 131 jsr.js 
const apiUrl = "http://...../IAM-ESA-1/JSR/data/listitems.json" angepasst werden.


DOKU ABGRENZUNG ANFORDERUNGEN JSR1 ALERT DIALOG ZU JSR2 CONFIRM DIALOG UND TITEL HINZUFÜGEN
- für den Vergleich bzw. Prüfung der Funktionalitäten "nur" alert (JSR1 Anforderungen) und
"mit delete" confirm Dialog (JSR2 Anfordeurngen) für die li-Elemente sind
entsprechende Hinweise in den Kommentaren enthalten.

- der aktuelle Stand der Kommentierung befindet sich in dem Zustand,
dass die li-Elemente den alert Dialog und die Optionen-Elemente den delete-confirm Dialog auslösen.

AUSKOMMENTIEREN:
-für die Rückführung der jsr.js Datei in den Zustand begrenzt auf die den Anforderungen aus JRS1 müssen 
die Funktionen erste Funktion createLiElements (ab Zeile 37) und die addElement Funktion (ab Zeile 158)
auskommentiert werden.

ENTKOMMENTIEREN:
Die zweite Funktion createLiElements (ab Zeile 237) muss für die Anforderungen JSR1 entkommentiert werden,
damit die li-elemente und deren Option-Buttons lediglich den alert ausgeben.
