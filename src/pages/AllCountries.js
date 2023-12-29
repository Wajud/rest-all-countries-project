import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AllCountries = () => {
  const navigate = useNavigate();
  const [countries, setCountries] = useState(null);
  const [filteredCountries, setFilteredCountries] = useState(countries);

  const url = "https://restcountries.com/v3.1/all";

  let emptyArray = [];

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        for (let i = 0; i < 100; i++) {
          emptyArray.push(data[i]);
        }
        setCountries(emptyArray);
        setFilteredCountries(emptyArray);
        localStorage.setItem("allCountries", JSON.stringify(data));
      })
      .catch((error) => {
        console.log("something went wrong", error);
      });
  }, []);

  function sendToDetailsPage(index) {
    const pickedCountry = countries.filter(
      (country) => country.name.common == countries[index].name.common
    )[0];
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

  return (
    <div className="mt-6 px-6">
      <input
        type="text"
        placeholder="Search for a country..."
        className="bg-white shadow-lg block w-[85%] md:max-w-[30rem] mx-auto mb-8 py-2 px-2 rounded-md"
        onChange={runFilter}
      />
      <div className="flex flex-col md:flex-row flex-wrap gap-12 md:gap-6">
        {filteredCountries ? (
          filteredCountries.map((country, index) => (
            <div
              className="w-[85%] md:max-w-60 mx-auto rounded-md overflow-hidden flex flex-col gap-2 bg-white cursor-pointer"
              onClick={() => sendToDetailsPage(index)}
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
