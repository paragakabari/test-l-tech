"use client"
import React from 'react';
import styles from './common.module.css';
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
const DepartmentCard: React.FC = () => {
    return (
        <div className={styles.card2}>
            <div className=''>
                <h3>Departmentwise Employees</h3>
                <ul className={styles.list}>
                    <li>05 Admin</li>
                    <li>03 Warehouse Manager</li>
                    <li>04 Fleet Manager</li>
                    <li>02 Finance</li>
                    <li>13 Driver</li>
                    <li>02 Sales & Marketing</li>
                </ul>
                <a href="#" className={styles.viewAll}>VIEW ALL</a>
            </div>
            <div className={styles.chart}>
                <Doughnut data={data} />
            </div>

        </div>
    );
}

export default DepartmentCard;
