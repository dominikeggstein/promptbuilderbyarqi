const mailKitEN = [
  { title: "Subject", options: [{ type: "input" }] },
  { title: "Task", options: ["Newsletter", "Email campaign", "Invitation email", "Follow-up email", "Welcome email", "Subscription confirmation", "Email template", "Job application email", { type: "input" }], multipleChoice: false },
  { title: "Style", options: ["Formal", "Informal", "Personal", "Professional", "Friendly", "Informative", "Persuasive", "Short and concise", { type: "input" }], multipleChoice: true },
  { title: "Target audience", options: ["Customers", "Subscribers", "Employees", "Business partners", "Investors", "Applicants", "Suppliers", { type: "input" }], multipleChoice: true },
  { title: "Form", options: ["Subject line", "Salutation", "Introduction", "Body", "Conclusion", "Signature", "PS", "Call to action", { type: "input" }], multipleChoice: true },
  {
    title: "Call to Action",
    options: [
      "Awaiting your answer",
      "Contact us",
      "Request a quote",
      "Schedule a call",
      "Setting the next meeting",
      "Giving them a nudge",
      "Following up after radio silence",
      "Setting a timeframe",
      "Wrapping up",
      { type: "input" },
    ],
  },
  { title: "Length", options: [{ type: "slider" }] },
];

export default mailKitEN;
