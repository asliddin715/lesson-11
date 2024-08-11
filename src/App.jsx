import "./App.css";
import React from "react";
import Carusel from "./components/Carousel";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import LineChart from "./components/LineChart";

// Register the necessary chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function App() {
  return (
    <div className="App w-[1440px] m-auto">
       <div className="mb-12">
        <h2 className="text-center text-gray-500 text-[30px] font-[500] mb-5">Mahsulotlar Ro'yxati</h2>
        <Carusel />
      </div>
      <div className="w-[1000px] m-auto mb-10">
        <h3 className="text-center text-[rgba(75,192,192,1)] text-[30px] font-[500] mb-5">Kunlik telefonga ketadigan vaqt</h3>
        <LineChart />
      </div>
     
    </div>
  );
}

