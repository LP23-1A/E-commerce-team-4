"use client";
import { Chart as ChartJS, plugins } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

export const  Chartreg = () =>{
  return (
    <div className="bg-white rounded-xl">
      <h1 className="">Идэвхтэй бүс нутаг</h1>
      <div>
        <Bar
          style={{ maxWidth: "fit" ,height: "100vh" }}
          data={{
            labels: ["Улаанбаатар", "Дархан ", "Эрдэнэт ", "Бусад"],
            datasets: [
              {
                indexAxis: "y",
                label: "Идэвхтэй бүс",
                backgroundColor: "#000",
                hoverBackgroundColor: "#000",
                hoverBorderColor: "#000",
                data: [100, 225, 270, 225],
                borderRadius: 10,
                borderWidth: 1,
                borderSkipped: false,
                barPercentage: 0.2,
                categoryPercentage: 0.8,
              },
            ],
          }}
        />
      </div>
    </div>
  );
}