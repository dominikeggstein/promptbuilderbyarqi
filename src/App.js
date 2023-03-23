import React from "react";
import PromptBuilder from "./components/PromptBuilder";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <PromptBuilder />
      <Footer />
    </div>
  );
}

export default App;
