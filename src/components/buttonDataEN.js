const buttonDataEN = [
  { title: "Topic", options: [{ type: "input" }] },
  { title: "Task", options: ["Article", "Interview", "Paragraph", "Title Ideas", "Blog", "Email", "Brainstorm", "Product Description", "Press Release", "Analysis", "Report", { type: "input" }], multipleChoice: false },
  { title: "Style", options: ["Academic", "Formal", "Informal", "Narrative", "Persuasive", "Informative", "Descriptive", "Ironic", "Sarcastic", { type: "input" }], multipleChoice: true },
  { title: "Target Audience", options: ["Builder", "Entrepreneur", "Team Member", "Company-Internal", "Company-External", "Investors", "Professionals", "Seniors", "Children", "Students", "Parents", { type: "input" }], multipleChoice: true },
  { title: "Structure", options: ["Heading", "Subtitle", "Introduction", "Main Part", "Summary", "List", "Instruction", "Case Study", "Critique", "Comparison", "FAQ", { type: "input" }], multipleChoice: true },
  { title: "Call to Action", options: ["Learn More", "Contact Us", { type: "input" }] },
  { title: "Length", options: [{ type: "slider" }] },
];
export default buttonDataEN;
