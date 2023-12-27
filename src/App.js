import { useState, createContext } from "react";
import AllCountries from "./pages/AllCountries";
// import Trying from "./pages/Trying";
import Navbar from "./pages/components/Navbar";
import Details from "./pages/Details";
import { Route, Routes } from "react-router-dom";

export const NightModeContext = createContext();

function App() {
  const [nightMode, setNightMode] = useState(false);
  const [textColor, setTextColor] = useState("hsl(200,15%,8%)");
  const [bgColor, setBgColor] = useState("hsl(0,0%,98%)");
  // const textColor = nightMode ? "hsl(0,0%,100%)" : "hsl(200,15%,8%)";
  // const bgColor = nightMode ? "hsl(207,26%,17%)" : "hsl(0,0%,98%)";
  // const bgColor = nightMode ? "#333333" : "#FFFFFF";
  const cardColor = nightMode ? "" : "";

  return (
    <NightModeContext.Provider value={{ nightMode, setNightMode }}>
      <div className="bg-gray-100">
        <Navbar
          bgColor={bgColor}
          setBgColor={setBgColor}
          textColor={textColor}
          setTextColor={setTextColor}
        />
        <Routes>
          <Route path="/" element={<AllCountries />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </div>
    </NightModeContext.Provider>
  );
}

export default App;
