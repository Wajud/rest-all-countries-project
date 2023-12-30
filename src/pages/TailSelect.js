import { Select, Option } from "@material-tailwind/react";

export function SelectDefault({ filterByRegion }) {
  return (
    <div className="w-72l bg-[#202c37] rounded-md">
      <Select
        label="Filter by Region"
        className=" text-white font-semibold outline-none border-none active:border-none active:outline-none rounded-md bg-[#202c37]"
      >
        <Option value="africa">Africa</Option>
        <Option value="asia">Asia</Option>
        <Option value="americas">America</Option>
        <Option value="europe">Europe</Option>
        <Option value="oceania">Oceania</Option>
      </Select>
    </div>
  );
}
