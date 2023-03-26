const buttonData = [
    { title: "Thema", options: [{ type: "input" }] },
    { title: "Aufgabe", options: ["Artikel", "Absatz", "Titel-Ideen", "Blog", "E-Mail", "Brainstorm",{ type: "input" }], multipleChoice: false },
    { title: "Stil", options: ["Akademisch", "Seriös", "Ironisch", "Sarkastisch",{ type: "input" }], multipleChoice: true },
    { title: "Zielgruppe", options: ["Bauherr", "Unternehmer", "Teammitglied", "Firma-Intern", "Firma-Entern", { type: "input" }], multipleChoice: true },
    { title: "Länge", options: [{ type: "slider" }] },
    { title: "Call to Action", options: [{ type: "input" }] },
    { title: "Form", options: ["Überschrift", "Untertitel", "Einleitung", "Hauptteil", "FAQ", "Zusammenfassung",{ type: "input" }], multipleChoice: true },
];
export default buttonData;


