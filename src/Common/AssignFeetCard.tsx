import React from 'react'
import Styles from "./common.module.css"
import { Bubble } from 'react-chartjs-2'
import { Chart as ChartJS, Tooltip, Legend, PointElement, LinearScale, Title } from 'chart.js'; import { useTranslations } from 'next-intl';
import ButtonComp from '@/Component/Button';
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
const AssignFeetCard = () => {
    return (
        <div className={Styles.AssignFeetCard}>
            <div className={Styles.chartMAin}>
                <div className={Styles.chartWrapper2}>
                    <Bubble data={data} options={options} />
                </div>
                <div className='d-flex gap-3 flex-wrap mt-3'>
                    <div className={Styles.BubbleLabel}>
                        <h5 style={{ color: "#448B6B" }}>07</h5>
                        <p>Active</p>
                    </div>
                    <div className={Styles.BubbleLabel}>
                        <h5 style={{ color: "#3D87E1" }}>07</h5>
                        <p>Pending</p>
                    </div>
                    <div className={Styles.BubbleLabel}>
                        <h5 style={{ color: "#F0B14D" }}>07</h5>
                        <p>Under Maintenance</p>
                    </div>
                    <div className={Styles.BubbleLabel}>
                        <h5 style={{ color: "#707070" }}>07</h5>
                        <p>Inactive</p>
                    </div>
                    <div className={Styles.BubbleLabel}>
                        <h5 style={{ color: "#FE6A57" }}>07</h5>
                        <p>Rejected</p>
                    </div>
                    <div className={Styles.BubbleLabel}>
                        <h5 style={{ color: "#FE6A57" }}>07</h5>
                        <p>Inactive</p>
                    </div>
                </div>
            </div>
            <div className={Styles.AssignFeetCardMap}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463877.31242950493!2d46.49288193599672!3d24.725455372447055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2sin!4v1718779238690!5m2!1sen!2sin" width="100%" height="350" loading="lazy"></iframe>
            </div>
            <ButtonComp text='Assign Fleet' className={`${Styles.darkBtn} darkButton`} />
        </div>
    )
}

export default AssignFeetCard 