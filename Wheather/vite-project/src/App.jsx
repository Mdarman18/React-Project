import { useState } from "react";
import axios from "axios";
import "./App.css";
import { SearchBar } from "./component/S";
import { ReportCard } from "./component/Report";
import video from "./video.mp4";
function App() {
  const [wheather, setWheather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const API_KEY = import.meta.env.VITE_API_KEY;
  const URL = `https://api.openweathermap.org/data/2.5/weather`;
  const fetch = async (city) => {
    setLoading(true);
    setErr("");
    try {
      const url = `${URL}?q=${city}&units=metric&appid=${API_KEY}`;
      const result = await axios.get(url);
      console.log(result.data);
      setWheather(result.data);
    } catch (error) {
      console.log(error);
      if (error.result && error.result.status === 404) {
        setErr("City not found.Please try again");
      } else {
        setErr("An error occurred.Please try again later ");
      }
      setWheather(null);
    } finally {
      setLoading(null);
    }
  };

  return (
    <>
      <div
        className={`min-h-screen flex flex-col items-center justify-center bg-blue-100 relative overflow-hidden`}
      >
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src={video} type="video/mp4" />
        </video>
        <div className="bg-black/20 absolute w-full h-full z-1"></div>
        <div className="bg-black/70 text-white rounded-lg shadow-lg p-8 max-w-md w-full z-10">
          <h1 className="text-3xl font-bold text-center mb-6  ">
            Wheather App
          </h1>
          <SearchBar fetch={fetch} />
          {loading && <p className="text-center mt-4">Loading...</p>}
          {Error && <p className="text-red-500 text-center mt-4">{err}</p>}
          {wheather && <ReportCard wheather={wheather} />}
        </div>
      </div>
    </>
  );
}

export default App;
