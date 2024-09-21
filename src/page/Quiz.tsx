import { useState } from "react";
import { Link } from "react-router-dom";
import CloudArr from "../cloudData.json";
import Footer from "./Footer";

// const CloudArr = [
//   {
//     name: "Cirrus",
//     src: "https://www.weather.gov/images/lmk/soo/CirrusField-color.jpg",
//     details: "some data about A",
//   },
//   {
//     name: "Cirrocumulus",
//     src: "https://www.weather.gov/images/lmk/soo/ben1.jpg",
//     details: "some data about B",
//   },
//   {
//     name: "Cirrostratus",
//     src: "https://www.weather.gov/images/lmk/soo/cirrostratus.jpg",
//     details: "some data about A",
//   },
//   {
//     name: "Altostratus",
//     src: "https://www.weather.gov/images/lmk/soo/altostratus.jpg",
//     details: "some data about B",
//   },
//   {
//     name: "Altocumulus",
//     src: "https://www.weather.gov/images/lmk/soo/altocumulus.jpg",
//     details: "some data about A",
//   },
//   {
//     name: "Nimbostratus",
//     src: "https://www.weather.gov/images/lmk/soo/nimbostratus12.jpg",
//     details: "some data about B",
//   },
//   {
//     name: "Stratus",
//     src: "https://www.weather.gov/images/lmk/soo/stratus.jpg",
//     details: "some data about A",
//   },
//   {
//     name: "Stratocumulus",
//     src: "https://www.weather.gov/images/lmk/soo/stratocumulus.jpg",
//     details: "some data about B",
//   },
//   {
//     name: "Cumulus",
//     src: "https://www.weather.gov/images/lmk/soo/mayfield_ky.jpg",
//     details: "some data about A",
//   },
//   {
//     name: "Cumulonimbus",
//     src: "https://www.weather.gov/images/lmk/soo/cumulonimbus2.jpg",
//     details: "some data about B",
//   },
//   {
//     name: "Lenticular",
//     src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Lenticular_Cloud_over_Harold%27s_Cross_Dublin_Ireland_30-6-15.jpg/640px-Lenticular_Cloud_over_Harold%27s_Cross_Dublin_Ireland_30-6-15.jpg",
//     details: "some data about A",
//   },
//   {
//     name: "Mammatus",
//     src: "https://www.weather.gov/images/lmk/soo/mammatus.jpg",
//     details: "some data about B",
//   },
// ];

export const Quiz = () => {
  const [answer, setAnswer] = useState("");
  const [word, setWord] = useState(() => {
    return CloudArr[Math.floor(Math.random() * CloudArr.length)];
  });
  console.log(word.name);
  console.log(setWord);

  const correct = () => {
    return (
      <div className="mx-24 pb-8 text-center">
        <h1 className="bg-[#C2E8CE] py-4 text-4xl mb-4">Correct Answer</h1>
        <p className="text-xl">{word.details}</p>
      </div>
    );
  };

  //   const get = () => {
  //     const cloud = CloudArr[Math.floor(Math.random() * CloudArr.length)];
  //     console.log(cloud);
  //     const { name, src } = cloud;
  //     console.log(name);
  //     return name;
  //   };
  //   useEffect(() => {
  //     get();
  //   }, []);

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
