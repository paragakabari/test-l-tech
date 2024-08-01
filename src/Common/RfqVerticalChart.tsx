import React, { Suspense } from 'react';
import Styles from './common.module.css';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useTranslations } from 'next-intl';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const labels = Array.from({ length: 13 }, (_, i) => (i + 1).toString());

const data = {
    labels,
    datasets: [
        {
            data: labels.map(() => Math.random() * 10),
            backgroundColor: '#FF6347',
            barThickness: 4,

        },
    ],
};

const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        x: {
            display: false,
        },
        y: {
            display: false,
        },
    },
    plugins: {
        legend: {
            display: false,
        },
        tooltip: {
            enabled: false,
        },
    },
};


const RfqVerticalChart: React.FC = () => {
    const t = useTranslations("Index");
    return (
        <Suspense>
            <div className={Styles.RfqCardMain}>
                <div className='d-flex justify-content-between align-items-end flex-wrap'>
                    <div>
                        <h1>{t("RFQs")}</h1>
                        <div className='d-flex gap-5'>
                            <div>
                                <h6>{t("13")}</h6>
                                <span>{t("Public")}</span>
                            </div>
                        </div>
                    </div>
                    <div className={Styles.chartContainer}>
                        <Bar options={options} data={data} />
                    </div>
                </div>
            </div>
        </Suspense>
    );
}

export default RfqVerticalChart;
