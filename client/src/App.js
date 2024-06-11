// src/App.js
import React, { useEffect, useState } from "react";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/navbar.jsx";
import { RouteA } from "./routes/route.js"; // Ensure this path is correct

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
      if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, []);

  return (
    <div className={` fullbodymood min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <nav>
        <Navbar />
      </nav>
      <div>
        <RouteA />
      </div>
      <div className=" w-full">
        <Footer />
      </div>
    </div>
  );
}

export default App;
