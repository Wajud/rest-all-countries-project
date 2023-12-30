import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AllCountries = ({ nightMode }) => {
  const navigate = useNavigate();
  const [countries, setCountries] = useState(null);
  const [filteredCountries, setFilteredCountries] = useState(countries);

  const url = "https://restcountries.com/v3.1/all";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        setFilteredCountries(data);
        localStorage.setItem("allCountries", JSON.stringify(data));
      })
      .catch((error) => {
        console.log("something went wrong", error);
      });
  }, []);

  function sendToDetailsPage(item) {
    const pickedCountry = countries.filter(
      (country) => country.name.common == item.name.common
    )[0];
    localStorage.setItem("pickedCountry", JSON.stringify(pickedCountry));
    navigate(`/countries/${pickedCountry.name.common}`);
  }

  function runFilter(e) {
    const searchTerm = e.target.value;
    const passData = countries.filter((country) =>
      country.name.common.includes(searchTerm)
    );
    setFilteredCountries(passData);
  }

  function filterByRegion(e) {
    const selectedRegion = e.target.value;
    const countriesInRegion =
      selectedRegion == ""
        ? countries
        : countries.filter(
            (country) => country.region.toLowerCase() == selectedRegion
          );
    setFilteredCountries(countriesInRegion);
    console.log(selectedRegion);
  }

  return (
    <div
      className={`pt-6 ${
        nightMode
          ? "bg-[hsl(207,26%,17%)] text-[hsl(0,0%,100%)]"
          : "bg-[hsl(0,0%,98%)] text-[hsl(200,15%,8%)]"
      }`}
    >
      <div className="w-[90%] md:w-[95%] mx-auto mb-6 flex flex-col gap-6 md:flex-row justify-between md:items-start">
        <input
          type="text"
          placeholder="Search for a country..."
          className={`shadow-md block w-full md:w-[28rem] py-2 px-2 rounded-md  ${
            nightMode
              ? "bg-[hsl(209,23%,22%)] text-[hsl(0,0%,100%)]"
              : "bg-[ hsl(0,0%,100%)] text-[hsl(200,15%,8%)]"
          }`}
          onChange={runFilter}
        />
        <form className="w-40 relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4 absolute top-[0.75rem] right-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>

          <select
            name="region"
            onChange={filterByRegion}
            className={`outline-none focus:outline-none px-4 py-2 rounded-md  appearance-none flex flex-col gap-8 w-full ${
              nightMode
                ? "bg-[hsl(209,23%,22%)] text-[hsl(0,0%,100%)]"
                : "bg-[hsl(0,0%,100%)] text-[hsl(200,15%,8%)]"
            } `}
          >
            <option value="" className="mt-4">
              Filter by Region
            </option>
            <option value="africa">Africa</option>
            <option value="americas">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </form>
      </div>

      <div className="w-[90%] md:w-[95%] mx-auto flex flex-col md:grid md:grid-cols-5 flex-wrap gap-12 md:gap-6">
        {filteredCountries ? (
          filteredCountries.map((country, index) => (
            <div
              className={`rounded-md overflow-hidden flex flex-col gap-2 cursor-pointer ${
                nightMode
                  ? "bg-[hsl(209,23%,22%)] text-[hsl(0,0%,100%)]"
                  : "bg-[hsl(0,0%,100%)] text-[hsl(200,15%,8%)]"
              }`}
              onClick={() => sendToDetailsPage(country)}
              id={index}
            >
              <img
                src={country.flags.png}
                alt=""
                className="w-full h-44 md:h-36 object-fit"
              />
              <div className="py-2">
                <h1 className="font-bold text-lg px-4 mb-2">
                  {country.name.common}
                </h1>
                <p className="font-semibold px-4 mb-2">
                  Population:{" "}
                  <span className="font-normal">{country.population}</span>
                </p>
                <p className="font-semibold px-4 mb-2">
                  Region: <span className="font-normal">{country.region}</span>
                </p>
                <p className="font-semibold px-4 mb-2">
                  Capital:{" "}
                  <span className="font-normal">{country.capital}</span>
                </p>
                <p className="font-semibold px-4 mb-2">
                  Number: <span className="font-normal">{index + 1}</span>
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="h-[85vh] w-full flex items-center justify-center text-center font-semibold text-lg md:col-span-5">
            <p className="text-center">Countries are being fetched...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllCountries;
