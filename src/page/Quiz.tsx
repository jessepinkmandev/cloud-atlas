import { useState } from "react";
import { Link } from "react-router-dom";
import CloudArr from "../cloudData.json";
import Footer from "./Footer";

export const Quiz = () => {
  const [answer, setAnswer] = useState("");
  const [word, setWord] = useState(() => {
    return CloudArr[Math.floor(Math.random() * CloudArr.length)];
  });
  console.log(word.name);

  const correct = () => {
    return (
      <div className="mx-24 pb-8 text-center">
        <h1 className="bg-[#C2E8CE] py-4 text-4xl mb-4">Correct Answer</h1>
        <p className="text-xl">{word.details}</p>
        <button
          onClick={resetQuiz}
          className="bg-[#C2E8CE] px-8 py-2 text-xl mt-4"
        >
          Next Question
        </button>
      </div>
    );
  };

  const resetQuiz = () => {
    window.location.reload();
  };

  return (
    <div className="bg-[#F2EEE5] text-[#BE7575]">
      <div className="flex-row text-center pt-8 text-3xl ">
        <h1 className="mb-12 ">This is a quiz page</h1>
        <h1 className="bg-[#C2E8CE] mx-24 py-4">
          <Link to="/cloud-atlas/">Home Page</Link>
        </h1>
      </div>

      <div className="grid place-items-center pb-4">
        <img className=" w-[400px] h-[300px] mt-8" src={word.src} alt="" />
        <input
          onChange={(e) => setAnswer(e.target.value)}
          className="border-2 mt-8"
          type="text"
          placeholder="Input Name Here"
        />
      </div>
      {answer.toLocaleLowerCase() === word.name.toLocaleLowerCase()
        ? correct()
        : null}
      <Footer />
    </div>
  );
};
