import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AllCountries = () => {
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
    console.log(pickedCountry);
    localStorage.setItem("pickedCountry", JSON.stringify(pickedCountry));
    navigate("/details");
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
    <div className="mt-6 px-6">
      <input
        type="text"
        placeholder="Search for a country..."
        className="bg-white shadow-lg block w-[85%] md:max-w-[30rem] mx-auto mb-4 py-2 px-2 rounded-md"
        onChange={runFilter}
      />
      <form className="">
        <select
          name="region"
          onChange={filterByRegion}
          className="outline-none focus:outline-none px-4 py-2 rounded-md mb-4"
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
      <div className="flex flex-col md:flex-row flex-wrap gap-12 md:gap-6">
        {filteredCountries ? (
          filteredCountries.map((country, index) => (
            <div
              className="w-[85%] md:max-w-60 mx-auto rounded-md overflow-hidden flex flex-col gap-2 bg-white cursor-pointer"
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
          <div className="bg-gray-200 h-[90vh] w-full flex items-center justify-center text-center font-semibold text-lg">
            "Countries are being fetched..."
          </div>
        )}
      </div>
    </div>
  );
};

export default AllCountries;
