import { Link, Outlet } from "react-router-dom";
import Card from "./components/Card";
import CloudArr from "./cloudData.json";
import Footer from "./page/Footer";

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

function App() {
  return (
    <div className="bg-[#F2EEE5] text-[#BE7575]">
      <h1 className="text-4xl text-center py-4 pt-8">Types of Clouds</h1>
      <h2 className="bg-[#C2E8CE] py-4 m-8 text-2xl text-center mt-8">
        <Link to="/cloud-atlas/quiz">Try Quiz</Link>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-4 my-8 ">
        {CloudArr.map((entry) => (
          <Card entry={entry} />
        ))}
      </div>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
