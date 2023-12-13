# Übungsaufgabe: Umstellung von Lowdb auf Mongoose für MongoDB in einer Anwendung
**Ziel:** 
Ändere eine vorhandene Anwendung, die bisher `lowdb` für die Datenverwaltung verwendet, um nun `Mongoose` für MongoDB zu nutzen. Richte eine Verbindung zur MongoDB-Datenbank her und ersetze das bestehende Lowdb-Datenschema durch Mongoose-Modelle. Implementiere die notwendigen Umgebungsvariablen mit dotenv, um eine flexible Konfiguration zu ermöglichen. Überprüfe alle Middleware, Controller und Routen, um sicherzustellen, dass sie mit dem neuen Mongoose-Setup kompatibel sind.

Schritte:
**1. Mongoose einrichten:** 

- Installiere mongoose über npm.
- Richte eine Verbindung zur MongoDB-Datenbank ein.
- Verwende dotenv für die Konfiguration der Umgebungsvariablen, um sensible Informationen wie die Datenbank-URL sicher zu speichern.
  
**2. Erstellen von Mongoose-Modellen:**

- Erstelle Mongoose-Schemas und -Modelle, die das Datenmodell der Anwendung darstellen.
- Definiere die Struktur der Daten, die in der MongoDB-Datenbank gespeichert werden sollen.
  
**3. Ersetzen des Lowdb-Schemas durch Mongoose:**

- Passe den Code an, um lowdb durch die neuen Mongoose-Modelle zu ersetzen.
- Ändere die Methodenaufrufe für Datenbankoperationen entsprechend (Erstellen, Lesen, Aktualisieren, Löschen).

  
**4. Anpassung von Middleware, Controllern und Routen:**

- Überprüfe und aktualisiere alle Middleware, Controller und Routen, um sicherzustellen, dass sie mit dem neuen Mongoose-Setup kompatibel sind.
- Passe Anfragen und Antworten an, um mit den neuen Mongoose-Modellen zu arbeiten.
- Aktualisiere die Fehlerbehandlung und Validierung nach Bedarf.
  
**5. Testen und Validieren:**

- Führe gründliche Tests durch, um sicherzustellen, dass die Anwendung nach der Umstellung auf Mongoose ordnungsgemäß funktioniert.
- Teste verschiedene Szenarien, um sicherzustellen, dass Datenbankoperationen wie erwartet ausgeführt werden und die Anwendung korrekt arbeitet.


**Hinweise:** 
**- Migrationsschritt für Schritt durchführen:** Nimm dir Zeit für jede Änderung und überprüfe sie sorgfältig, bevor du mit dem nächsten Schritt fortfährst. 

Diese Aufgabe erfordert Sorgfalt und Testing, um sicherzustellen, dass die Anwendung nach der Umstellung reibungslos funktioniert und dass die Daten konsistent gespeichert und abgerufen werden können.  


Viel Spaß beim Coding 👷‍♀️😃
# Record
