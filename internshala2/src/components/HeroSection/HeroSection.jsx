import React, { useState } from "react";
import internshalaImg from "../../assets/internshala2-hero-display-img.png";

const HeroSection = () => {
  const [textDecorate, setTextDecorate] = useState({
    Study: true,
    Quiz: false,
    Test: false,
    Game: false,
    Others: false,
  });

  const onHandleDecorate = (val) => {
    if (val === "Study") {
      setTextDecorate({
        Study: true,
        Quiz: false,
        Test: false,
        Game: false,
        Others: false,
      });
    } else if (val === "Quiz") {
      setTextDecorate({
        Study: false,
        Quiz: true,
        Test: false,
        Game: false,
        Others: false,
      });
    } else if (val === "Test") {
      setTextDecorate({
        Study: false,
        Quiz: false,
        Test: true,
        Game: false,
        Others: false,
      });
    } else if (val === "Game") {
      setTextDecorate({
        Study: false,
        Quiz: false,
        Test: false,
        Game: true,
        Others: false,
      });
    } else if (val === "Others") {
      setTextDecorate({
        Study: false,
        Quiz: false,
        Test: false,
        Game: false,
        Others: true,
      });
    }
  };

  return (
    <div className="md:w-4/5 m-auto my-5 text-gray-500">
      <div className="hidden md:flex space-x-2">
        <div>
          <span className="material-symbols-outlined">Home</span>
        </div>
        <div>
          <span className="material-symbols-outlined">navigate_next</span>
        </div>
        <div>
          <span>FlashCard</span>
        </div>
        <div>
          <span className="material-symbols-outlined">navigate_next</span>
        </div>
        <div>
          <span>Mathematics</span>
        </div>
        <div>
          <span className="material-symbols-outlined">navigate_next</span>
        </div>
        <div>
          <span className="text-gradient font-semibold">
            Relations and Function
          </span>
        </div>
      </div>
      <div className="mx-2 md:mx-0 my-4">
        <span className="text-gradient text-4xl font-semibold">
          Relations and Functions (Mathematics)
        </span>
      </div>

      <div className="flex m-4 space-x-6 w-1/2 md:m-auto md:my-5">
        <div
          className={
            textDecorate.Study
              ? "text-blue-800 border-b-2 border-blue-800 cursor-pointer text-lg"
              : "cursor-pointer text-lg"
          }
          onClick={() => onHandleDecorate("Study")}
        >
          Study
        </div>
        <div
          className={
            textDecorate.Quiz
              ? "text-blue-800 border-b-2 border-blue-800 cursor-pointer text-lg"
              : "cursor-pointer text-lg"
          }
          onClick={() => onHandleDecorate("Quiz")}
        >
          Quiz
        </div>
        <div
          className={
            textDecorate.Test
              ? "text-blue-800 border-b-2 border-blue-800 cursor-pointer text-lg"
              : "cursor-pointer text-lg"
          }
          onClick={() => onHandleDecorate("Test")}
        >
          Test
        </div>
        <div
          className={
            textDecorate.Game
              ? "text-blue-800 border-b-2 border-blue-800 cursor-pointer text-lg"
              : "cursor-pointer text-lg"
          }
          onClick={() => onHandleDecorate("Game")}
        >
          Game
        </div>
        <div
          className={
            textDecorate.Others
              ? "text-blue-800 border-b-2 border-blue-800 cursor-pointer text-lg"
              : "cursor-pointer text-lg"
          }
          onClick={() => onHandleDecorate("Others")}
        >
          Others
        </div>
      </div>

      <div className="w-5/6 md:w-3/5 m-auto px-4 py-2 bg-blue-gradient rounded-3xl">
        <div className="flex justify-between text-white">
          <div>
            <span className="material-symbols-outlined">lightbulb</span>
          </div>
          <div>
            <span className="material-symbols-outlined">Volume_up</span>
          </div>
        </div>
        <div className="text-center my-32 text-white text-4xl">
          <span>9 + 6 + 7x - 2x -3</span>
        </div>
      </div>
      <div className="w-4/5 md:w-2/4 m-auto flex justify-between my-4 space-x-4">
        <div>
          <button>
            <span className="material-symbols-outlined text-gradient font-bold text-4xl">
              refresh
            </span>
          </button>
        </div>
        <div className="flex justify-between space-x-2">
          <div className="rounded-full bg-blue-gradient text-white px-3 py-2">
            <button>
              <span className="material-symbols-outlined font-bold">
                arrow_back_ios
              </span>
            </button>
          </div>
          <div className="text-black">
            <span className="text-3xl font-semibold">01/10</span>
          </div>
          <div className="rounded-full bg-blue-gradient text-white px-3 py-2">
            <button>
              <span className="material-symbols-outlined font-bold">
                arrow_forward_ios
              </span>
            </button>
          </div>
        </div>
        <div>
          <button>
            <span className="material-symbols-outlined text-gradient font-bold text-4xl">
              fullscreen
            </span>
          </button>
        </div>
      </div>
      <div className="md:flex justify-between">
        <div className="w-4/5 m-auto">
          <img src={internshalaImg} alt="internshala" />
        </div>
        <div className="text-center my-5">
          <button className="space-x-2">
            <span className="bg-blue-gradient rounded-full px-2 py-2">
              <span className="material-symbols-outlined text-white">add</span>
            </span>
            <span className="text-gradient font-semibold text-2xl">
              Create Flashcard
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
