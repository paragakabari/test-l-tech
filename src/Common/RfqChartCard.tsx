import React from 'react'
import Styles from "./common.module.css"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useTranslations } from 'next-intl';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    datasets: [
        {
            data: [4, 13, 10],
            backgroundColor: ["#FF7777", "#B749F2", "#77E5FF"],
        },

    ],

};
const options = {
    cutout: '80%',
    maintainAspectRatio: true,
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
    },
};
const RfqChartCard = () => {
    const t = useTranslations("Index");
    return (
        <div className={Styles.RfqChartCardMAin}>
            <div className='d-flex justify-content-between align-items-center'>
                <h1>{t("RFQs")}</h1>
                <div className={Styles.roundTag}><i className="bi bi-arrow-up-right"></i></div>
            </div>
            <div className={Styles.RfqChartChart}>
                <Doughnut data={data} options={options} />
            </div>
        </div>
    )
}

export default RfqChartCard