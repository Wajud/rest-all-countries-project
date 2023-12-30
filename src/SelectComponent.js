import { useState } from "react";
import Select from "react-select";

const options = [
  { value: "", label: "Filter by Region" },
  { value: "africa", label: "Africa" },
  { value: "americas", label: "America" },
  { value: "asia", label: "Asia" },
  { value: "europe", label: "Europe" },
  { value: "oceania", label: "Oceania" },
];

const SelectComponent = ({ filterByRegion }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="my-4">
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        styles={{
          control: (baseStyles) => ({
            ...baseStyles,
            borderColor: "#ef9a9a",
            color: "white",
            backgroundColor: "hsl(207,26%,17%)",
          }),
        }}
        className="hover:bg-red-400"
      />
    </div>
  );
};

export default SelectComponent;
