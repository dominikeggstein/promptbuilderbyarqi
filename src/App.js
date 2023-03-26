import React from "react";
import { BrowserRouter } from "react-router-dom";
import Prompt from "./components/Prompt";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Prompt />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
