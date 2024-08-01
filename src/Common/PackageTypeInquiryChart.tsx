import React from 'react';
import { Line } from 'react-chartjs-2';
import Styles from './common.module.css';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const PackageTypeInquiryChart: React.FC = () => {
    const data = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                data: [1, 2, 5, 4, 2, 3, 1],
                borderColor: '#0000FF',
                backgroundColor: 'rgba(0, 0, 255, 0.1)',
                borderWidth: 2,
                pointRadius: 6,
                pointBackgroundColor: '#0000FF',
                tension: 0.4,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            // font: {
            //     size: 18,
            //     weight: 'bold',
            // },
            title: {
                display: true,
                color: '#000000',
                padding: {
                    top: 20,
                    bottom: 20,
                },
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    font: {
                        size: 14,
                    },
                    color: '#000000',
                },
            },
            y: {
                beginAtZero: true,
                grid: {
                    display: false,
                },
                ticks: {
                    display: false,
                },
            },
        },
    };

    return (
        <div className={`${Styles.ContractsCardMainBox} p-3 w-100`}>
            <h1>Package Type Inquiry</h1>
            <Line data={data} options={options} />
        </div>
    );
};

export default PackageTypeInquiryChart;
