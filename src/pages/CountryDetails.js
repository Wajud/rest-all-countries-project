import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CountryDetails = ({ nightMode }) => {
  const enteringCountry = JSON.parse(localStorage.getItem("pickedCountry"));
  const allCountries = JSON.parse(localStorage.getItem("allCountries"));
  const [pickedCountry, setPickedCountry] = useState(enteringCountry);

  const navigate = useNavigate();

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

    localStorage.setItem("pickedCountry", JSON.stringify(clickedCountry));
    setPickedCountry(clickedCountry);
    navigate(`/countries/${clickedCountry.name.common}`);
  }

  return (
    <div
      className={
        nightMode
          ? "bg-[hsl(207,26%,17%)] text-[hsl(0,0%,100%)]"
          : "bg-[hsl(0,0%,98%)] text-[hsl(200,15%,8%)]"
      }
    >
      <div className={`pt-4 pb-10 w-[90%] mx-auto min-h-[100vh]`}>
        <Link to="/">
          <div
            className={`w-fit my-4 shadow-lg flex gap-2 items-center px-4 py-1 rounded-sm ${
              nightMode
                ? "bg-[hsl(209,23%,22%)] text-[hsl(0,0%,100%)]"
                : "bg-[hsl(0,0%,100%)] text-[hsl(200,15%,8%)]"
            }`}
          >
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
        <section className="flex flex-col md:flex-row md:justify-between md:items-start md:gap-32">
          <img
            src={pickedCountry.flags.png}
            alt="flag"
            className="mt-8 w-[90%] max-w-80 h-52 md:scale-[120%] md:mt-16 object-cover rounded-sm"
          />
          <div className="md:w-[50%] md:flex-1">
            <div className="md:flex justify-between md:pt-12">
              <div className="w-[90%] md:w-full mt-12 md:mt-0 mb-12 md:gap-6">
                <p className="font-bold text-2xl mb-8">
                  {pickedCountry.name.common}
                </p>
                <div className="flex flex-col gap-2">
                  <p className="font-semibold">
                    Native Language:{" "}
                    <span className="font-normal">
                      {pickedCountry.name.common}
                    </span>
                  </p>
                  <p className="font-semibold">
                    Population:{" "}
                    <span className="font-normal">
                      {pickedCountry.population}
                    </span>
                  </p>
                  <p className="font-semibold">
                    Region:{" "}
                    <span className="font-normal">{pickedCountry.region}</span>
                  </p>
                  <p className="font-semibold">
                    Sub Region:{" "}
                    <span className="font-normal">
                      {pickedCountry.subregion}
                    </span>
                  </p>
                  <p className="font-semibold">
                    Capital:{" "}
                    <span className="font-normal">{pickedCountry.capital}</span>
                  </p>
                </div>
              </div>

              <div className="w-[90%] md:w-full flex flex-col gap-2 md:mt-16">
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
            </div>

            <h2 className="font-semibold mt-12 md:mt-2 mb-6">
              Border Countries
            </h2>
            <div className="flex items-start gap-2 flex-wrap">
              {borderingCountriesHolder?.length > 0 ? (
                borderingCountriesHolder?.map((country, index) => (
                  <p
                    className={`w-24 min-w-fit text-center px-2 py-1 shadow-lg rounded-sm cursor-pointer ${
                      nightMode
                        ? "bg-[hsl(209,23%,22%)] text-[hsl(0,0%,100%)]"
                        : "bg-[hsl(0,0%,100%)] text-[hsl(200,15%,8%)]"
                    }`}
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
        </section>
      </div>
    </div>
  );
};

export default CountryDetails;
