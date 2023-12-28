import React, { useState } from "react";
import { Link } from "react-router-dom";

const Details = () => {
  const enteringCountry = JSON.parse(localStorage.getItem("pickedCountry"));
  const allCountries = JSON.parse(localStorage.getItem("allCountries"));
  const [pickedCountry, setPickedCountry] = useState(enteringCountry);

  const borderingCountries = pickedCountry.borders;
  let borderingCountriesHolder = [];

  if (borderingCountries) {
    borderingCountries.forEach((country) => {
      const borderingCountry = allCountries.filter(
        (current) => current.cca3 == country
      )[0];
      borderingCountriesHolder.push(borderingCountry);
    });
  }

  function updatePickedCountry(index) {
    const clickedCountry = allCountries.filter(
      (country) =>
        country.name.common == borderingCountriesHolder[index].name.common
    )[0];

    localStorage.setItem("pickedCountry", JSON.stringify(pickedCountry));
    setPickedCountry(clickedCountry);
  }

  return (
    <div className="pt-4 pb-10 w-[90%] mx-auto">
      <Link to="/">
        <div className="w-fit my-4 shadow-md flex gap-2 items-center px-4 py-1 bg-white border border-gray-200 rounde-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
          <p>Back</p>
        </div>
      </Link>
      <img
        src={pickedCountry.flags.png}
        alt="flag"
        className="mt-8 w-[90%] max-w-80  h-52  object-cover rounded-sm"
      />
      <div className="w-[90%] mt-12 mb-12">
        <p className="font-semibold text-xl mb-4">
          {pickedCountry.name.common}
        </p>
        <div className="flex flex-col gap-2">
          <p className="font-semibold">
            Native Language:{" "}
            <span className="font-normal">{pickedCountry.name.common}</span>
          </p>
          <p className="font-semibold">
            Population:{" "}
            <span className="font-normal">{pickedCountry.population}</span>
          </p>
          <p className="font-semibold">
            Region: <span className="font-normal">{pickedCountry.region}</span>
          </p>
          <p className="font-semibold">
            Sub Region:{" "}
            <span className="font-normal">{pickedCountry.subregion}</span>
          </p>
          <p className="font-semibold">
            Capital:{" "}
            <span className="font-normal">{pickedCountry.capital}</span>
          </p>
        </div>
      </div>

      <div className="w-[90%] flex flex-col gap-2 ">
        <p className="font-semibold">
          Top Level Domain:{" "}
          <span className="font-normal">{pickedCountry.tld[0]}</span>
        </p>
        <p className="font-semibold">
          Currencies:{" "}
          <span className="font-normal">
            {Object.keys(pickedCountry.currencies)[0]}
          </span>
        </p>
        <p className="font-semibold">
          Languages:{" "}
          <span className="font-normal">
            {Object.values(pickedCountry.languages).join(", ")}
          </span>
        </p>
      </div>

      <h2 className="font-semibold mt-12 mb-6">Border Countries</h2>
      <div className="flex items-start gap-2 flex-wrap">
        {borderingCountriesHolder?.length > 0 ? (
          borderingCountriesHolder.map((country, index) => (
            <p
              className="w-24 min-w-fit text-center px-2 py-1 border border-gray-200 rounded-sm cursor-pointer"
              onClick={() => updatePickedCountry(index)}
            >
              {country.name.common}
            </p>
          ))
        ) : (
          <p className="">Has no bordering country</p>
        )}
      </div>
    </div>
  );
};

export default Details;
