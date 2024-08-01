import React, { useState } from 'react'
import Styles from "./CommonTable.module.css"
import { Fade } from 'react-bootstrap';

type FadeCompProps = {
    title: string;
    id: string;
    isOpen: boolean;
    onToggle: () => void;
    children: React.ReactNode;
};
const FadeComp = ({ title, isOpen, onToggle, id, children }: FadeCompProps) => {
    const [open, setOpen] = useState(false);
    return (
        <div className={`${Styles.whiteBg} ${Styles.whiteBgCustomPadding}`}>
            <div
                className={`${Styles.FadeMain} d-flex gap-2 justify-content-between flex-row `} style={{ cursor: 'pointer' }}
                onClick={onToggle}
                aria-controls={id}
                aria-expanded={isOpen}
            >
                <p>{title}</p>
                <i className={`bi ${isOpen ? 'bi-chevron-up' : 'bi-chevron-down'}`}></i>
            </div>
            <Fade in={isOpen} className={`${Styles.FadeDetails} FadeDetails`}>
                <div id={id}>
                    {children}
                </div>
            </Fade>
        </div>
    )
}

export default FadeComp