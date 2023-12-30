import { useState, createContext } from "react";
// import AllCountries from "./pages/AllCountries";
import ReCountries from "./pages/ReCountries";
import Navbar from "./components/Navbar";
import Details from "./pages/Details";
import { Route, Routes } from "react-router-dom";

export const NightModeContext = createContext();

function App() {
  const [nightMode, setNightMode] = useState(false);
  const [darkTextColor, setDarkTextColor] = useState(false);

  const [darkBgColor, setDarkBgColor] = useState("hsl(207,26%,17%)");
  const [lightBgColor, setLightBgColor] = useState("hsl(0,0%,98%)");
  const [bgColor, setBgColor] = useState("hsl(0,0%,98%)");

  return (
    <div
      className={
        "min-h-screen" + " " + nightMode == true
          ? "bg-[hsl(207,26%,17%)]"
          : "bg-[hsl(0,0%,98%)]"
      }
    >
      <Navbar nightMode={nightMode} setNightMode={setNightMode} />
      <Routes>
        <Route path="/" element={<ReCountries nightMode={nightMode} />} />
        <Route path="/details" element={<Details nightMode={nightMode} />} />
      </Routes>
    </div>
  );
}

export default App;
