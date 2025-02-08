import { useState } from "react";
import "./App.css";
import { LoadingScreen } from "./compnents/LoadingScreen"; // Corrected typo in `components`
import "./index.css";
import { Navbar } from "./compnents/sections/Navbar";
import { MobileMenu } from "./compnents/MobileMenu";
import { Home } from "./compnents/sections/Home";
import { About } from "./compnents/sections/About";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div className={`min-h-screen transition-opacity duration-700 
        ${isLoaded ? "opacity-100" : "opacity-0"} 
        bg-black text-gray-100`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
      </div>
    </>
  );
}

export default App;
