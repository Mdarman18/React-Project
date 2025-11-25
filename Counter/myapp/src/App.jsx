import Forward from "./Forwrd";
import "./App.css";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import Confetti from "react-confetti";
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("light");
  const [showConfetti, setShowConfetti] = useState(false);
  const [show, setShow] = useState(false);
  function HandleToggle() {
    setTheme((prev) => (prev === "light" ? "Dark" : "light"));
  }
  const HandleIncerse = () => {
    setCount((prev) => {
      const newCount = prev + 1;
      if (newCount % 10 === 0) {
        setShowConfetti(true);
        setShow(true);
      }
      return newCount;
    });
  };
  const Handledecerse = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const Handlereset = () => {
    setCount(0);
    setShowConfetti(false);
    setShow(false);
  };
  useEffect(() => {
    let timer;
    if (showConfetti) {
      timer = setTimeout(() => {
        setShowConfetti(false);
        setShow(false);
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [showConfetti]);
  return (
    <div
      className={`min-h-screen flex flex-col justify-center items-center ${
        theme === "light" ? "bg-white text-gray-900" : "bg-gray-900 text-white"
      }`}
    >
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          style={{ poistion: "fixed", top: 0, left: 0, zIndex: 9999 }}
        />
      )}

      <h1 className="text-3xl font-bold mb-10">
        Animated Counter With Theme Toggle
      </h1>
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        key={count}
        className={`text-6xl font-bold text-center ${
          count > 0 && count % 10 === 0 ? "text-green-500" : ""
        }`}
      >
        {count}
      </motion.div>
      <div className="flex flex-col gap-5 mt-13 ">
        <button
          disabled={show}
          className="px-10 py-2 text-white rounded bg-blue-500 hover:bg-blue-600 cursor-pointer"
          onClick={HandleIncerse}
        >
          Increase
        </button>
        <button
          disabled={show}
          className="px-10 py-2 text-white rounded bg-green-500 hover:bg-green-600 cursor-pointer"
          onClick={Handledecerse}
        >
          Decrease
        </button>
        <button
          className="px-10 py-2 text-white rounded bg-red-500 hover:bg-red-600 cursor-pointer"
          onClick={Handlereset}
          disabled={show}
        >
          Reset
        </button>
        <button
          disabled={show}
          className="px-10 py-2 text-white rounded bg-gray-500 hover:bg-gray-600 cursor-pointer"
          onClick={HandleToggle}
        >
          Toggle{theme === "light" ? "Dark" : "light"}Theme
        </button>
      </div>
    </div>
  );
}
export default App;
