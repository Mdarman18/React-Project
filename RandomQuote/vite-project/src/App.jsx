import { useEffect, useState } from "react";
import "./App.css";
import pic from "./success.jpg";
import axios from "axios";
import { FaFacebook, FaHeart, FaInstagram, FaShare } from "react-icons/fa";

function App() {
  const [quote, setQuote] = useState([]);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const fetchInitialQuote = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/quotes/random");
        setQuote([res.data]);
        setIdx(0); // first quote index
      } catch (err) {
        console.log(err);
      }
    };

    fetchInitialQuote();
  }, []);
  const Prev = () => {
    if (idx > 0) {
      setIdx((prev) => prev - 1);
    }
  };
  const Next = async () => {
    if (idx < quote.length - 1) {
      // Move to next already fetched quote
      setIdx((prev) => prev + 1);
    } else {
      // Fetch new quote and then move idx
      try {
        const res = await axios.get("https://dummyjson.com/quotes/random");
        setQuote((prev) => {
          const newQuotes = [...prev, res.data];
          setIdx(newQuotes.length - 1); // set idx to newly added quote
          return newQuotes;
        });
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <>
      <div className=" min-h-screen bg-gray-100 flex flex-col justify-center items-center">
        <div className="flex items-center flex-col ">
          <img
            className="h-24 w-72 border border-white-100  border-white/50 object-cover rounded-4xl "
            src={pic}
            alt=""
          />
          <h2 className="text-3xl text-red-400 pt-2"> Quotes-Generator</h2>
        </div>
        <div className="  flex flex-col mb-[40px] items-center bg-blue-300  border border-black/50 rounded-[18px]  shadow-[0_5px_20px_rgb(0_0_0_/_70%)] mt-3">
          <h1 className="text-[1.95rem] text-[#F2F2F2] pt-[10px]">
            Quote of the Day
          </h1>
          <div className="mt-[20px] ">
            <h2 className="text-[1.45rem] text-center">
              {quote[idx] ? `"${quote[idx].quote}"` : "Loading..."}
            </h2>
            <div className="ml-[600px]">
              <h3 className="text-[1.1rem] mt-[1px]">~{quote[idx]?.author}</h3>
            </div>
          </div>
          <div className=" flex gap-[300px] mt-[35px] text-[1.25rem] ">
            <button
              onClick={Prev}
              className=" bg-[#A8B2D0] h-[50px] w-[130px] text-center rounded-[40px] cursor-pointer hover:bg-green-600"
            >
              Prev
            </button>
            <button
              onClick={Next}
              className="h-[50px] w-[130px] text-[1.34rem]  bg-blue-400 text-center rounded-[40px] cursor-pointer hover:bg-slate-600"
            >
              New Quote
            </button>
          </div>
          <div className="flex gap-[4px] mb-[10px] mt-[25px] ml-[550px]">
            <p className="text-[1.36rem] text-center cursor-pointer">Share</p>
            <FaShare className="text-center mt-[13px] text-[10px] cursor-pointer" />
            <div className="flex gap-[23px] mt-[px] ml-[10px]">
              <FaInstagram className="text-[2.24rem] text-red-600  cursor-pointer hover:text-red-800 rounded-[10px] " />
              <FaFacebook className=" text-[2.24rem] text-bule-300 cursor-pointer hover:text-blue-600 rounded-[10px]" />
            </div>
          </div>
        </div>
        <div className="flex pb-[20px]">
          <h1 className="pl-[900px] text-[1rem]">
            Web Dev by
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline "
            >
              @Only_Arman18
            </a>
          </h1>
          <FaHeart className="pb-[1px] pl-[5px] text-[1.45rem] cursor-pointer text-red-600 hover:text-red-900" />
        </div>
      </div>
    </>
  );
}

export default App;
