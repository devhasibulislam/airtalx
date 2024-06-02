// src/App.js
import React from "react";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/navbar";
import { RouteA } from "./routes/route";

function App() {
  return (
    <div>
      <nav className="">
        <Navbar />
      </nav>
      <div className="p-4">
        <RouteA />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
