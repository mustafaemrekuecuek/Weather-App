# Weather App

Diese Weather App ist ein einfaches, aber leistungsstarkes Tool, das aktuelle Wetterdaten für eine angegebene Stadt bereitstellt. Die App wurde mit Node.js und Express erstellt und verwendet die OpenWeatherMap API, um Wetterdaten abzurufen.

## Features

- Aktuelle Wetterdaten: Temperatur, Windgeschwindigkeit, Sonnenauf- und -untergangszeiten usw.
- Eingabeüberprüfung für Standortanfragen.
- Umrechnung von Unix-Zeitstempeln in lesbare Zeitangaben.

## Installation

Stellen Sie sicher, dass Sie Node.js und npm auf Ihrem System installiert haben. Führen Sie dann die folgenden Schritte aus:

1. Klonen Sie das Repository:
  git clone https://github.com/mustafaemrekuecuek/Weather-App.git

2. Installieren Sie die Abhängigkeiten:
  npm install

3. Erstellen Sie eine .env-Datei im Wurzelverzeichnis des Projekts und fügen Sie Ihren OpenWeatherMap API-Key hinzu:
  API=Ihr_API_Key

5. Starten Sie den Server:
   node index.js
   
## Nutzung
Gehen Sie zur Startseite und geben Sie den Namen einer Stadt in das Suchfeld ein. Die Wetterdaten der Stadt werden daraufhin angezeigt.

## Lizenz

Dieses Projekt ist unter der MIT Lizenz lizenziert - siehe die [LICENSE.md](LICENSE) Datei für Details.
