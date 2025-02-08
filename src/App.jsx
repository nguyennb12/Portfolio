import { useState } from "react";
import "./App.css";
import { LoadingScreen } from "./compnents/LoadingScreen"; // Corrected typo in `components`
import "./index.css";
import { Navbar } from "./compnents/sections/Navbar";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}  {""}
      <div className={`min-h-screen transition-opacity duraction-700 
        ${isLoaded ? "opacity-100" : "opacity-0"} 
        bg-black text-gray-100`}
      >
        <Navbar />
      </div>
    </>
  );
}

export default App;
