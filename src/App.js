import { useState } from "react";
import AllCountries from "./pages/AllCountries";
import Navbar from "./components/Navbar";
import CountryDetails from "./pages/CountryDetails";
import { Route, Routes } from "react-router-dom";

function App() {
  const [nightMode, setNightMode] = useState(false);

  return (
    <div
      className={
        "min-h-screen" + " " + nightMode
          ? "bg-[hsl(207,26%,17%)]"
          : "bg-[hsl(0,0%,98%)]"
      }
    >
      <Navbar nightMode={nightMode} setNightMode={setNightMode} />
      <Routes>
        <Route path="/" element={<AllCountries nightMode={nightMode} />} />
        <Route
          path="/countries/:countryName"
          element={<CountryDetails nightMode={nightMode} />}
        />
      </Routes>
    </div>
  );
}

export default App;
