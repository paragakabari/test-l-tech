import React, { useState } from 'react';
import Styles from './CommonTable.module.css';

const ToggleSwitch: React.FC = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleSwitch = () => {
        setIsActive(!isActive);
    };

    return (
        <div className={Styles.toggleSwitchContainer} onClick={toggleSwitch}>
            <div className={`${Styles.toggleSwitchLabel} ${isActive ? Styles.active : ''}`}>
                {isActive ? 'Pass' : 'Fail'}
                <div className={`${Styles.toggleSwitchCircle} ${isActive ? Styles.active : ''}`} />
            </div>
        </div>
    );
};

export default ToggleSwitch;
