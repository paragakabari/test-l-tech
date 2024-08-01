import React from 'react'
import Styles from "./common.module.css"
import { Bubble } from 'react-chartjs-2';
import { Chart as ChartJS, Tooltip, Legend, PointElement, LinearScale, Title } from 'chart.js'; import { useTranslations } from 'next-intl';
;

ChartJS.register(PointElement, LinearScale, Tooltip, Legend, Title);

const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false,
        },
        tooltip: {
            enabled: true,
        },
    },
    scales: {
        x: {
            display: false,
        },
        y: {
            display: false,
        },
    },
};

const data = {
    datasets: [
        {
            label: 'Completed',
            data: [{ x: 1, y: 1, r: 48 }],
            backgroundColor: '#0088cc',
        },
        {
            label: 'In Transit',
            data: [{ x: 2, y: 2, r: 20 }],
            backgroundColor: '#4b0082',
        },
        {
            label: 'Pending',
            data: [{ x: 3, y: 3, r: 25 }],
            backgroundColor: '#ffa500',
        },
        {
            label: 'Failed',
            data: [{ x: 4, y: 4, r: 7 }],
            backgroundColor: '#ff6347',
        },
    ],
};
export const ShipmentChart = () => {
    const t = useTranslations("Index");
    return (
        <div className={Styles.RfqChartCardMAin}>
            <div className='d-flex justify-content-between align-items-center'>
                <h1>{t("Shippments")}</h1>
                <div className={Styles.roundTag}><i className="bi bi-arrow-up-right"></i></div>
            </div>
            <div className={Styles.chartWrapper}>
                <Bubble data={data} options={options} />
            </div>
            <div className={Styles.legend}>
                <div>
                    <span className={Styles.completed}>07 {t("Completed")}</span>
                    <span className={Styles.pending}>08 {t("Pending")}</span>
                </div>
                <div>
                    <span className={Styles.inTransit}>01 {t("In_Transit")}</span>
                    <span className={Styles.failed}>12 {t("Failed")}</span>
                </div>
            </div>
        </div>
    )
}
export const ShipmentChartVertical = ({ onClick }: { onClick?: () => void }) => {
    const t = useTranslations("Index");
    return (
        <div className={Styles.RfqChartCardMAin}>
            <div className='d-flex justify-content-between align-items-center'>
                <h1>{t("Shippments")}</h1>
                <div className={`${Styles.roundTag} cursor-pointer`}><i className="bi bi-arrow-up-right" onClick={onClick}></i></div>
            </div>
            <div className='d-flex flex-wrap justify-content-around gap-4'>
                <div className={Styles.chartWrapper2}>
                    <Bubble data={data} options={options} />
                </div>
                <div className={Styles.legend2}>
                    <span><span className={`${Styles.completed} fw-bold`}>07</span> {t("Completed")}</span>
                    <span><span className={`${Styles.pending} fw-bold`}>08</span> {t("Pending")}</span>
                    <span><span className={`${Styles.inTransit} fw-bold`}>01</span> {t("In_Transit")}</span>
                    <span><span className={`${Styles.failed} fw-bold`}>12</span> {t("Failed")}</span>
                </div>
            </div>
        </div>
    )
}