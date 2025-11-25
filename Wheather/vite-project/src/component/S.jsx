import { useState } from "react";

export const SearchBar = ({ fetch }) => {
  const [city, setCity] = useState("");
  const hndleSubmit = (e) => {
    e.preventDefault();
    if (city) {
      fetch(city.trim());
      setCity("");
    }
  };
  return (
    <form onSubmit={hndleSubmit} className="flex " action="">
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        type="text"
        placeholder="Enter City Name"
        className=" flex-1 p-2 border border-gray-300  outline-none border-r-0 rounded-l-lg"
      />
      <button
        className="bg-blue-500 border cursor-pointer p-2  hover:bg-blue-700 border-l-0 rounded-r-lg"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};
