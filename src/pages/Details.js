import React from "react";
import { Link } from "react-router-dom";

const Details = () => {
  const pickedCountry = JSON.parse(localStorage.getItem("pickedCountry"));
  console.log(pickedCountry);
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

      {/* <div
              className="w-[85%] md:max-w-60 mx-auto rounded-md overflow-hidden flex flex-col gap-2 bg-white"
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
            </div> */}
    </div>
  );
};

export default Details;
