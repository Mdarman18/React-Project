import { useState } from "react";
import "./App.css";
import pic from "./new.jpg";
import weight from "./weight.jpg";
import { FaHeart } from "react-icons/fa";

function App() {
  const [user, setUser] = useState("");
  const [height, setHeight] = useState("");
  const [display, setDisplay] = useState("");
  const [text, setText] = useState("");
  const [link, setLink] = useState("");
  const HandleSubmit = (e) => {
    e.preventDefault();
    const weight = parseFloat(user);
    const Height = parseFloat(height);
    if (weight > height) {
      alert("Enter valid Height");
      setDisplay("");
      setHeight("");
      setUser("");
      return;
    }
    if (!weight || weight <= 0 || isNaN(weight)) {
      alert("Enter Valid Weight And Height ");

      setDisplay("");
      setHeight("");
      setUser("");
      return;
    }

    if (!Height || Height <= 0 || isNaN(Height)) {
      alert("Enter valid height");
      setDisplay("");
      setHeight("");
      setUser("");
      return;
    }
    const HeightMeter = height / 100;
    const BMC = (weight / HeightMeter ** 2).toFixed(2);
    setDisplay(BMC);
    if (BMC < 18.5) {
      setText("Underweight");
      setLink("https://www.medicalnewstoday.com/articles/323446");
    } else if (BMC > 18.5 && BMC < 24.9) {
      setText("Healthy Weight");
      setLink("https://www.medicalnewstoday.com/articles/323446");
    } else if (BMC > 24.5 && BMC < 29.5) {
      setLink("https://www.medicalnewstoday.com/articles/323446");
      setText("Overweight");
    } else if (BMC > 29.5 && BMC < 39.5) {
      setText("Obesity Class");
      setLink("https://www.medicalnewstoday.com/articles/323446");
    } else if (BMC > 40) {
      setText("Severe Obesity");
      setLink("https://www.medicalnewstoday.com/articles/323446");
    }
  };
  return (
    <>
      <div className="min-h-screen bg-blue-200 flex flex-col justify-between items-center ">
        <img
          className="h-[150px] w-[400px] object rounded-[8px]  mt-[10px]"
          src={weight}
          alt=""
        />
        <div className="mt-[] flex  items-center gap-[10px]">
          <h1 className="text-[3.45rem]  text-black-[600] font-semibold ">
            Body Mass Calculator
          </h1>
          <img
            className="h-[60px] w-[60px] object rounded-[60px] text-[1.45rem]"
            src={pic}
            alt=""
          />
        </div>

        <div className=" shadow-[0px_0px_10px_rgba(0,0,0,0.6)] bg-gray-300 w-[500px] h-[200px] grid items-center gap-[10px] rounded-[12px] ">
          <div className="pt-[10px] ">
            <label htmlFor="" className="ml-[10px] mt-[20px] text-[1.55rem]">
              Enter The Weight :-
            </label>

            <input
              type="text"
              className="h-14px w-[220px] ml-[25px] mt-[10px] text-[1.1rem] rounded-[8px]  text-center border border-solid border-black focus:outline-none"
              onChange={(e) => setUser(e.target.value)}
              name="weight"
              value={user}
              placeholder="Enter The weight(in k.g)"
            />
          </div>
          <div>
            <label htmlFor="" className="ml-[10px] text-[1.55rem] font-[400]">
              Enter The Height :-
            </label>

            <input
              type="text"
              className="h-14px w-[220px] ml-[25px] mt-[10px] rounded-[8px] text-[1.1rem]  text-center border border-solid border-black-[600] focus:outline-none"
              name=""
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder=" Enter The Height (in c.m)"
            />
          </div>
          <div>
            <button
              className=" h-[35px] text-[1.4rem] w-[90px] rounded-[14px] ml-[220px] text-gray bg-white-200 hover:bg-red-500 cursor-pointer"
              onClick={HandleSubmit}
            >
              Click me
            </button>
          </div>
        </div>
        {display && !isNaN(display) && (
          <div className=" w-[500px] mt-[10px] text-center grid rounded-[12px] bg-slate-400  hover:bg-red-500   transition-colors duration-2000 ">
            <h2 className="mt-[10px] text-[1.54rem]">
              Body Mass Index (BMI) :- {display}
            </h2>
            <div>
              <h3>{text}</h3>
              <a className="pl-[390px] text-[1rem] text-blue-800 underline decoration-blue-800" href={link}>
                Read More
              </a>
            </div>
          </div>
        )}
        <div className="flex justify-end pt-[40px] pr-[30px]">
          <h1 className=" text-[1rem] animate-pulse transition duration-300 hover:text-blue-600 ">
            {" "}
            Web Dev by
            <a href="">@Only_Arman18</a>
          </h1>
          <FaHeart className="pb-[1px] pl-[5px] text-[1.45rem] cursor-pointer text-red-600 hover:text-red-800 animate-pulse" />
        </div>
      </div>
    </>
  );
}

export default App;
