import React from 'react'
import styles from './common.module.css';

const CircularProgressBar = ({ percentage }) => {
    return (
        <div className={styles.circularProgress}>
            <div className={styles.innerCircle}>
                <span>{percentage}%</span>
                <span>COMPLETE</span>
            </div>
        </div>
    );
};

export default CircularProgressBar;
