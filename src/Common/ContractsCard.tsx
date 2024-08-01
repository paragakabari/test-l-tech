import React from 'react'
import Styles from "./common.module.css"
import { Bubble } from 'react-chartjs-2'
import { Chart as ChartJS, Tooltip, Legend, PointElement, LinearScale, Title } from 'chart.js'; import { useTranslations } from 'next-intl';

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
const ContractsCard = ({ onClick }: { onClick?: () => void }) => {
    return (
        <div className={`${Styles.ContractsCardMainBox} w-100`} >

            <div className={Styles.chartMAin}>
                <div className='d-flex justify-content-between align-items-center'>
                    <h1>Inquiries</h1>
                    <div className={`${Styles.roundTag} cursor-pointer`} onClick={onClick}><i className="bi bi-arrow-up-right"></i></div>
                </div>
                <div className={Styles.chartWrapper2}>
                    <Bubble data={data} options={options} />
                </div>
                <div className='d-flex gap-3 flex-wrap mt-3'>
                    <div className={Styles.ContractsCardBubbleLabel}>
                        <h5 style={{ color: "#448B6B" }}>07</h5>
                        <p>Active</p>
                    </div>
                    <div className={Styles.ContractsCardBubbleLabel}>
                        <h5 style={{ color: "#3D87E1" }}>07</h5>
                        <p>Pending</p>
                    </div>
                    <div className={Styles.ContractsCardBubbleLabel}>
                        <h5 style={{ color: "#F0B14D" }}>07</h5>
                        <p>Under Maintenance</p>
                    </div>
                    <div className={Styles.ContractsCardBubbleLabel}>
                        <h5 style={{ color: "#707070" }}>07</h5>
                        <p>Inactive</p>
                    </div>
                    <div className={Styles.ContractsCardBubbleLabel}>
                        <h5 style={{ color: "#FE6A57" }}>07</h5>
                        <p>Rejected</p>
                    </div>
                    <div className={Styles.ContractsCardBubbleLabel}>
                        <h5 style={{ color: "#FE6A57" }}>07</h5>
                        <p>Inactive</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContractsCard