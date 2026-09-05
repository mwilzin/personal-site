**Stand:** 5. September 2026  
**Verantwortlich:** Marc-Aurel Wilzin  
**Kontakt:** [kapitel@mwilzin.de](mailto:kapitel@mwilzin.de)  
**App:** Kapitel (Bundle-ID `de.mwilzin.Kapitel`)

Diese Datenschutzrichtlinie gilt für die Nutzung der App **Kapitel** auf iPhone, iPad und Mac. Sie informiert dich gemäß der Datenschutz-Grundverordnung (DSGVO) und ergänzender deutscher Vorschriften darüber, welche personenbezogenen Daten bei der Nutzung verarbeitet werden.

---

## 1. Kurzüberblick

- Kapitel betreibt **keinen eigenen Server** und kein Entwickler-Backend für deine Studiendaten.
- Daten bleiben **auf deinem Gerät** und – sofern du iCloud nutzt – in **deinem persönlichen Apple-iCloud-Konto**.
- Universitäts-Zugangsdaten und Campus-Inhalte werden nur an die **von dir genutzten Hochschulsysteme** (derzeit Universität Tübingen: ZDV-IdP, ILIAS, Moodle, optional Alma-Kalender) gesendet, nicht an den Entwickler.
- Es gibt **keine Werbung**, **kein Tracking** zu Werbezwecken und **keine Analytics-/Crash-SDKs** von Drittanbietern in der App.

---

## 2. Verantwortlicher

Verantwortlich für die Datenverarbeitung im Sinne der DSGVO ist:

**Marc-Aurel Wilzin**  
E-Mail: kapitel@mwilzin.de

Wenn du Fragen zum Datenschutz hast oder Rechte ausüben möchtest, genügt eine E-Mail an die genannte Adresse.

---

## 3. Welche Daten werden verarbeitet?

### 3.1 Daten, die du eingibst oder erstellst

| Daten | Zweck | Speicherung |
|-------|--------|-------------|
| Universitäts-Login (ZDV-Benutzername und Passwort), sofern du dich anmeldest | Anmeldung an Hochschulportalen, Abruf von Kursen, Dateien und Fristen | Sicher in der **iCloud-Schlüsselbund** (Apple Keychain, geräteübergreifend synchronisierbar) |
| Optional: URL deines Stundenplan-/Kalender-Feeds (iCal) | Anzeige von Vorlesungen auf dem Home-Bildschirm | Schlüsselbund / App-Zustand |
| Notizen, PDFs, LaTeX-, Board- und Flashcard-Dateien | Lernen und Organisation | App-Bibliothek (lokal und/oder **iCloud Drive**) |
| To-dos / Abgaben, Status, verknüpfte Dateien | Aufgabenverwaltung | Gerät und optional **privates CloudKit** |
| Lernaktivität / Streak | Fortschritt und Motivation | Gerät und optional **privates CloudKit** |
| Fokus- und Pausen-Einstellungen, Fokus-Sitzungen | Fokus-Timer, geräteübergreifende Fortsetzung | Gerät und optional **iCloud Key-Value Store** |
| Screen-Time-Auswahl (zu blockierende Apps/Websites), sofern aktiviert | Schutz während Fokus-Sitzungen | **Nur auf dem Gerät** über Apple Screen Time / Family Controls |

### 3.2 Daten, die von Hochschulsystemen abgerufen werden

Wenn du dich mit einem Universitätskonto anmeldest (derzeit Universität Tübingen), kann Kapitel nach erfolgreicher Authentifizierung u. a. abrufen:

- Kurs- und Mitgliedschaftsinformationen (z. B. ILIAS, Moodle)
- Fristen / Kalenderereignisse
- Kursmaterialien / Dateien, die du zum Download auswählst
- Stundenplan-Einträge über den von dir hinterlegten iCal-Link (z. B. Alma)

Diese Daten dienen ausschließlich der Darstellung und Organisation in Kapitel. Der Abruf erfolgt **direkt zwischen deinem Gerät und den Servern der Hochschule** bzw. dem hinterlegten Kalender-Host.

### 3.3 Daten, die nicht erhoben werden

Kapitel erhebt insbesondere **nicht**:

- Werbekennungen zu Tracking-Zwecken
- Analyse- oder Nutzungsstatistiken über Drittanbieter-SDKs
- Crash-Reports über Drittanbieter-Dienste
- Zahlungsdaten (sofern in der jeweiligen Version keine In-App-Käufe angeboten werden)

---

## 4. Zweck und Rechtsgrundlagen

Die Verarbeitung erfolgt zu folgenden Zwecken und auf folgender Rechtsgrundlage:

1. **Bereitstellung der App-Funktionen** (Bibliothek, Lernen, To-dos, Fokus, Campus-Sync) – Art. 6 Abs. 1 lit. b DSGVO (Vertrag / vorvertragliche Maßnahmen bzw. Nutzung der von dir angefragten Funktionen).
2. **Speicherung von Zugangsdaten und Synchronisation über Apple-Dienste**, die du aktivierst – Art. 6 Abs. 1 lit. b DSGVO sowie, soweit erforderlich, Art. 6 Abs. 1 lit. a DSGVO (Einwilligung, z. B. Systemberechtigungen für Mitteilungen oder Screen Time).
3. **Kommunikation mit Hochschulsystemen** auf deine Veranlassung – Art. 6 Abs. 1 lit. b DSGVO.
4. **Beantwortung von Support-Anfragen** (z. B. E-Mail an kapitel@mwilzin.de) – Art. 6 Abs. 1 lit. b bzw. lit. f DSGVO.

---

## 5. Empfänger und Weitergabe

### 5.1 Apple

Wenn du mit deiner Apple-ID iCloud nutzt, können App-Daten über folgende Apple-Dienste synchronisiert werden:

- **iCloud Drive** (Bibliotheksdateien)
- **CloudKit** (private Datenbank; u. a. To-dos, Lernaktivität)
- **iCloud-Schlüsselbund** (Hochschul-Zugangsdaten, Kalender-URL)
- **iCloud Key-Value Store** (u. a. Editor-/Fokus-Zustand)

Es gelten die Datenschutzbestimmungen von Apple:  
[https://www.apple.com/legal/privacy/](https://www.apple.com/legal/privacy/)

Der Entwickler hat **keinen Zugriff** auf den Inhalt deines privaten iCloud-Kontos.

### 5.2 Universität / Campus-Dienste

Bei Nutzung der Campus-Funktionen kommuniziert dein Gerät mit den jeweiligen Hochschulsystemen, derzeit insbesondere:

- Identitätsprovider der Universität Tübingen (`idp.uni-tuebingen.de`)
- ILIAS (`ovidius.uni-tuebingen.de`)
- Moodle (`moodle.zdv.uni-tuebingen.de`)
- optional dein hinterlegter Stundenplan-Host (z. B. Alma)

Dort gelten die Datenschutzhinweise der jeweiligen Hochschule bzw. des Portals. Kapitel ist nur Client; die Hochschule ist für die Verarbeitung auf ihren Systemen selbst verantwortlich.

### 5.3 Sonstige Dritte

- Wenn du in Markdown-Inhalten **externe Bilder** oder **YouTube-Links** einbindest, kann beim Anzeigen eine Verbindung zu den jeweiligen Anbietern entstehen. Das geschieht nur durch von dir eingefügte Inhalte.
- Es werden **keine Daten an Werbenetzwerke oder Analyseanbieter** verkauft oder zu Tracking-Zwecken weitergegeben.

---

## 6. Speicherdauer

- **Lokale und iCloud-Daten** bleiben gespeichert, solange du die App nutzt bzw. die Daten nicht löschst.
- Du kannst Inhalte in der App löschen, dich vom Universitätskonto abmelden (Zugangsdaten aus dem Schlüsselbund entfernen) und die App deinstallieren.
- Daten in iCloud kannst du zusätzlich über die Systemeinstungen von Apple verwalten bzw. löschen.
- E-Mail-Support-Korrespondenz wird nur so lange aufbewahrt, wie es zur Bearbeitung der Anfrage erforderlich ist.

---

## 7. Berechtigungen auf dem Gerät

Je nach Funktion kann Kapitel Systemberechtigungen anfragen, zum Beispiel:

- **Mitteilungen** – Erinnerungen und Fokus-Benachrichtigungen
- **Screen Time / Family Controls** – optionales Blockieren ablenkender Apps während Fokus-Sitzungen
- **Fotos** – nur wenn du Bilder z. B. in ein Board importierst
- **iCloud** – Synchronisation deiner Bibliothek und App-Daten
- **Live Activities** – Anzeige laufender Fokus-Sitzungen

Diese Berechtigungen kannst du in den Systemeinstungen widerrufen. Manche Funktionen stehen dann nur eingeschränkt zur Verfügung.

---

## 8. Kein Tracking / keine Werbung

Kapitel verwendet die Daten **nicht** für personalisierte Werbung und **nicht** zum Tracking über Apps und Websites hinweg im Sinne der Apple-App-Tracking-Transparenz. Es findet **kein Verkauf** personenbezogener Daten statt.

---

## 9. Sicherheit

Technische Maßnahmen umfassen u. a.:

- Speicherung von Hochschul-Zugangsdaten im System-Schlüsselbund (mit optionaler iCloud-Schlüsselbund-Synchronisation)
- Transportverschlüsselung (HTTPS) bei Verbindungen zu Hochschul- und Apple-Diensten
- Speicherung von Studiendaten in der Sandbox der App bzw. in deinem privaten iCloud-Bereich

Trotz sorgfältiger Absicherung kann keine absolute Sicherheit bei der Übertragung über das Internet garantiert werden.

---

## 10. Deine Rechte

Du hast nach der DSGVO – soweit die Voraussetzungen vorliegen – insbesondere folgende Rechte:

- Auskunft (Art. 15 DSGVO)
- Berichtigung (Art. 16 DSGVO)
- Löschung (Art. 17 DSGVO)
- Einschränkung der Verarbeitung (Art. 18 DSGVO)
- Datenübertragbarkeit (Art. 20 DSGVO)
- Widerspruch gegen Verarbeitungen auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (Art. 21 DSGVO)
- Widerruf erteilter Einwilligungen mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO)

Zur Ausübung reicht eine E-Mail an **kapitel@mwilzin.de**.

Außerdem hast du das Recht, dich bei einer Datenschutzaufsichtsbehörde zu beschweren. Zuständig ist in der Regel die Aufsichtsbehörde deines Wohnsitzes; für Baden-Württemberg z. B. der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg.

---

## 11. Kinder und Jugendliche

Kapitel richtet sich an Studierende und vergleichbare Nutzerinnen und Nutzer. Die App ist nicht zur Nutzung durch Kinder unter 16 Jahren ohne Zustimmung der Erziehungsberechtigten bestimmt, soweit dies nach geltendem Recht erforderlich ist.

---

## 12. Änderungen dieser Richtlinie

Diese Datenschutzrichtlinie kann angepasst werden, wenn sich Funktionen der App oder Rechtslagen ändern. Die jeweils aktuelle Fassung wird mit dem Datum „Stand“ gekennzeichnet und – sofern über einen Web-Link im App Store hinterlegt – dort bereitgestellt.

---

## 13. App-Store-Hinweis (Apple Privacy Nutrition Label)

Für die Angaben in App Store Connect gilt sinngemäß:

- **Keine Daten** werden vom Entwickler zum Tracking verwendet.
- Verarbeitete Datenkategorien dienen der **App-Funktionalität** (z. B. Nutzerinhalte, Zugangsdaten für Campus-Funktionen, ggf. Nutzungsdaten nur lokal/in deinem iCloud-Konto).
- Es besteht **kein** Entwickler-Backend, das diese Daten zentral speichert.

Die verbindlichen Checkboxen in App Store Connect sind bei jeder Version anhand der tatsächlich ausgelieferten Funktionen zu prüfen.

---

*Bei Widersprüchen zwischen einer übersetzten Fassung und dieser deutschen Fassung gilt die deutsche Fassung.*
