import Slider, { SliderProps } from 'rc-slider';
import React from 'react';
import 'rc-slider/assets/index.css';
import Styles from './CommonTable.module.css';

interface CustomSliderProps extends SliderProps {
    label: string;
    subLabel: string;
    subLabelValue: string;
}

const SliderComp: React.FC<CustomSliderProps> = ({ label, subLabel, subLabelValue, ...sliderProps }) => {
    return (
        <div className='custom-slider'>
            <div className={Styles.cusSliderLabelMain}>
                <h2>{label}</h2>
                <div className={Styles.cusSliderLabelBox}>
                    <h4>{subLabelValue}</h4>
                    <small>{subLabel}</small>
                </div>
            </div>
            <Slider {...sliderProps} />
        </div>
    );
};

export default SliderComp;
