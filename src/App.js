import { useState, createContext } from "react";
import AllCountries from "./pages/AllCountries";
import Navbar from "./components/Navbar";
import Details from "./pages/Details";
import { Route, Routes } from "react-router-dom";

export const NightModeContext = createContext();

function App() {
  const [nightMode, setNightMode] = useState(false);

  return (
    <NightModeContext.Provider value={{ nightMode, setNightMode }}>
      <div className="bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<AllCountries />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </div>
    </NightModeContext.Provider>
  );
}

export default App;
