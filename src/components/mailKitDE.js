const mailKitDE = [
  { title: "Thema", options: [{ type: "input" }] },
  { title: "Aufgabe", options: ["Newsletter", "E-Mail-Kampagne", "Einladungs-E-Mail", "Follow-up-E-Mail", "Willkommens-E-Mail", "Abonnementbestätigung", "E-Mail-Vorlage", "Bewerbungsemail", { type: "input" }], multipleChoice: false },
  { title: "Stil", options: ["Formell", "Informell", "Persönlich", "Professionell", "Freundlich", "Informativ", "Überzeugend", "Kurz und bündig", { type: "input" }], multipleChoice: true },
  { title: "Zielgruppe", options: ["Kunden", "Abonnenten", "Mitarbeiter", "Geschäftspartner", "Investoren", "Bewerber", "Lieferanten", { type: "input" }], multipleChoice: true },
  { title: "Form", options: ["Betreffzeile", "Anrede", "Einleitung", "Hauptteil", "Schluss", "Signatur", "PS", "Handlungsaufforderung", { type: "input" }], multipleChoice: true },
  {
    title: "Call to Action",
    options: [
      "Ihre Antwort erwartend",
      "Kontaktieren Sie uns",
      "Ein Angebot anfordern",
      "Ein Gespräch vereinbaren",
      "Nächsten Termin vereinbaren",
      "Erinnerung",
      "Nachfassen nach Funkstille",
      "Zeitrahmen setzen",
      "Abschluss",
      { type: "input" },
    ],
  },
  { title: "Länge", options: [{ type: "slider" }] },
];

export default mailKitDE;
