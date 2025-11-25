import "./App.css";

import pic from "./temp.png";
import bg from "./bg2.png";
import { useState } from "react";

function App() {
  const [temp, setTemp] = useState("");
  console.log(temp);
  const [from, setFrom] = useState("c");
  const [to, setTo] = useState("f");
  // const [result, setResult] = useState("");
  const [displayResult, setDisplayResult] = useState("");

  const HandleConversion = () => {
    let value = parseFloat(temp);
    if (isNaN(value)) {
      setDisplayResult("Enter a Valid Number");
      return;
    }
    let converted;
    if (from === "c" && to === "f") {
      converted = (value * 9) / 5 + 32;
    } else if (from === "f" && to === "c") {
      converted = ((value - 32) * 5) / 9;
    } else if (from === "c" && to === "k") {
      converted = value + 273.15;
    } else if (from === "k" && to === "c") {
      converted = value - 273.15;
    } else if (from === "f" && to === "k") {
      let c = ((value - 32) * 5) / 9;
      converted = c + 273.15;
    } else if (from === "k" && to === "f") {
      let k = value - 273.15;
      converted = (k * 9) / 5 + 32;
    } else {
      converted = value;
    }
 
    let display;
    if (to === "k") {
      display = `${converted.toFixed(2)} K`;
    } else {
      display = `${converted.toFixed(2)}°${to.toUpperCase()}`;
    }
    setDisplayResult(display);
  };

  return (
    <>
      <div
        className="min-h-screen  bg-cover bg-center  flex flex-col justify-center items-center "
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="flex justify-center items-center space-x-4 mb-10">
          <h1 className="text-4xl font-semibold text-white-200  ">
            Temperature Converter
          </h1>
          <img
            className="w-15 h-15 rounded-full object-cover border-2 border-gray"
            src={pic}
            alt=""
          />
        </div>
        <div className="flex   mb-18 w-1/2 h-64 bg-gray rounded-lg shadow-lg shadow-blue-100/50 ">
          <div>
            <input
              type="text"
              value={temp}
              onChange={(e) => setTemp(e.target.value)}
              placeholder="Enter The Temp"
              className="  mt-10 ml-40 w-80 h-10 text-center text-2xl border-gray-300 focus:outline-none outline:none border-r-0   rounded-r-2xl"
            />
            <button
              onClick={HandleConversion}
              className="cursor-pointer h-10  w-20 bg-blue-400  rounded-l-2xl border  hover:bg-slate-400 rounded-2xl"
            >
              Search
            </button>
            <div className=" ml-20 mt-4   font-semibold flex justify-center items-center space-x-4 gap-10">
              <div className="flex justify-center item-center gap">
                <label htmlFor="" className="text-2xl ">
                  From
                  <select
                    name=""
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                    id=""
                    className="h-12 pl-10 px-3 rounded-md boder border-gray-300 focus:outline-none cursor-pointer"
                  >
                    <option value="c" className="text-2xl">
                      Celsius (°C)
                    </option>
                    <option value="f">Fahrenheit (°F)</option>
                    <option value="k">Kelvin (K)</option>
                  </select>
                </label>
              </div>
              {/* to */}
              <div className="flex item-center gap mr-2">
                <label htmlFor="" className="text-2xl ">
                  To
                  <select
                    name=""
                    id=""
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                    className="h-12 px-3 pl-8 rounded-md boder border-gray-300 focus:outline-none cursor-pointer"
                  >
                    <option value="c">Celsius (°C)</option>
                    <option value="f"> Fahrenheit(°F)</option>
                    <option value="k">Kelvin (K)</option>
                  </select>
                </label>
              </div>
            </div>
          </div>
        </div>

        <p className="text-2xl font-semibold text-4xl">{displayResult}</p>
      </div>
    </>
  );
}

export default App;
