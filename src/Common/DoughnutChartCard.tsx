"use client";
import React from "react";
import Styles from "./common.module.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  datasets: [
    {
      data: [15, 17],
      backgroundColor: ["#FF7777", "#77E5FF"],
    },
  ],
};
const DoughnutChartCard = () => {
  return (
    <div className={Styles.DoughnutChartCard}>
      <h1>32</h1>
      <p>Total Deliveries</p>
      <div className="d-flex mt-3">
        <div className="d-flex">
          <div className={Styles.labelMain} style={{ borderColor: "#77E5FF" }}>
            <h3>15</h3>
            <span>Outbound</span>
          </div>
          <div className={Styles.labelMain} style={{ borderColor: "#FF7777" }}>
            <h3>17</h3>
            <span>Local</span>
          </div>
        </div>
        <Doughnut data={data} />
      </div>
    </div>
  );
};

export default DoughnutChartCard;
