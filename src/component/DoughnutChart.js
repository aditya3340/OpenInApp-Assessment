
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import {TbPointFilled} from "react-icons/tb"

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  datasets: [
    {
      data: [55, 31, 41],
      backgroundColor: ["#98D89E", "#F6DC7D", "#EE8484"],
    },
  ],
};

const DoughnutChart = () => {
  return (
    <div
      id="mainGraphContainer"
      className="mx-10 md:mx-2 p-5 rounded-2xl  min-w-[50%] md:max-w-[98%]  m-auto  my-5 border-2 drop-shadow bg-white "
    >
      <div className=" pb-6 m-auto mb-3 h-full flex flex-col justify-between items-between ">
        <div className="flex justify-between items-center ">
          <h3 className="font-bold text-2xl">Top Products</h3>
        </div>
        <div className="flex p-2  justify-between  m-auto">
          <div className="max-w-[150px] lg:max-w-[200px] ">
            <Doughnut data={data}  />
          </div>
          <div className=" flex flex-col justify-evenly items-start ml-4 w-full text-xs md:text-base">
            <div className="flex flex-col justify-center items-start">
              <div className="flex justify-center items-center font-bold ">
                <TbPointFilled className="text-[#98D89E]"/>
                <h1 className="mr-4 ">Basic Tees</h1>
              </div>
              <p className="ml-4 ">55%</p>
            </div>
            <div className="flex flex-col justify-center items-start text-xs md:text-base">
              <div className="flex justify-center items-center font-bold">
                <TbPointFilled className="text-[#F6DC7D]"/>
                <h1 className="mr-4 ">Custom Short Pants</h1>
              </div>
              <p className="ml-4 ">31%</p>
            </div>
            <div className="flex flex-col justify-center items-start text-xs md:text-base">
              <div className="flex justify-center items-center font-bold">
                <TbPointFilled className="text-[#EE8484]"/>
                <h1 className="mr-4">Super Hoodies</h1>
              </div>
              <p className="ml-4">41%</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoughnutChart;
