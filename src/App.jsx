import { useState } from "react";
import "./App.css";
import { LoadingScreen } from "./compnents/LoadingScreen"; // Corrected typo in `components`
import "./index.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
    </>
  );
}

export default App;
