import { useEffect, useState } from "react";
import "./App.css";
import pic from "./clock.png";
import { MdDateRange } from "react-icons/md";

function App() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 10);
    return () => clearInterval(timer);
  }, []);
  let hours = time.getHours().toString().padStart(2, "0");
  const min = time.getMinutes().toString().padStart(2, "0");
  const sec = time.getSeconds().toString().padStart(2, "0");

  //----------------------display date----------
  const day = time.getDate();
  const month = time.toLocaleString("default", { month: "long" });
  const year = time.getFullYear();
  const weekday = time.toLocaleString("default", { weekday: "long" });
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  return (
    <>
      <div className="min-h-screen bg-blue-300 text-white flex flex-col  justify-center items-center">
        <div className="flex items-center justify-center space-x-4 mt-15 ">
          <h1 className="text-8xl text-gray-100  ">Digital-Clock </h1>
          <img
            className="w-30 h-30 rounded-full object-cover border-4 border-white"
            src={pic}
            alt=""
          />
        </div>
        <div className="flex flex-wrap items-center justify-center   ml-10 text-5xl font-bold mb-4 font-mono  gap-25 pt-20 ">
          <div className="flex justify-center items-center bg-red-400 w-24 h-16 border text-5xl rounded-lg cursor-pointer  ">
            {hours}
          </div>
          <span className="animate-pulse">:Hour</span>
          <div className="flex justify-center items-center bg-red-400  w-24 h-16  border text-5xl rounded-lg  cursor-pointer  ">
            {min}
          </div>
          <span className="animate-pulse">:Min</span>
          <div className="flex justify-center items-center bg-red-400  w-24 h-16  border text-5xl rounded-lg  cursor-pointer ">
            {sec}
          </div>
          <span className="animate-pulse">:Sec</span>
          {/* <div className="flex justify-center items-center bg-red-400 w-24 h-16  text-5xl  border  rounded-lg  cursor-pointer ">
            {miliseconds}
          </div> */}
          <div className="   flex text-5xl text-gray-900 font-semibold justify-center items-center bg-blue-200  w-18 h-15 border  rounded-lg  cursor-pointer">
            {ampm}
          </div>
        </div>
        <div className="flex flex-col items-center mt-8">
          <p className="text-4xl flex items-center gap-3 text-white">
            <MdDateRange className="text-blue-800" /> Today's Date
          </p>
          <p className="text-3xl font-semibold text-gray-900 pt-5">
            {weekday}, {day} {month} {year}
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
