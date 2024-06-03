// src/App.js
import React from "react";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/navbar";
import { RouteA } from "./routes/route";

function App() {
  return (
    <div className="h-screen">
      <nav className="">
        <Navbar />
      </nav>
      <div >
        <RouteA />
      </div>
      <div >
        <Footer />
      </div>
    </div>
  );
}

export default App;
