import React from 'react'
import Styles from "./common.module.css"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useTranslations } from 'next-intl';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    datasets: [
        {
            data: [4, 13],
            backgroundColor: ["#1B7171", "#FF7777"],
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
const RfqCard = () => {
    const t = useTranslations("Index");
    return (
        <div className={Styles.RfqCardMain}>
            <div className='d-flex justify-content-between align-items-center'>
                <div>
                    <h1>{t("RFQs")}</h1>
                    <div className='d-flex gap-5'>
                        <div>
                            <h6>13</h6>
                            <span>{t("Public")}</span>
                        </div>
                        <div>
                            <h6>4</h6>
                            <span>{t("Private")}</span>
                        </div>
                    </div>
                </div>
                <div style={{ height: '70px', width: '70px' }}>
                    <Doughnut data={data} options={options} />
                </div>
            </div>
        </div>
    )
}

export default RfqCard