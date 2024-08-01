import React from 'react';
import Styles from "./common.module.css";

interface AddCardProps {
    number: number;
    text: string;
    className?: string;
    locale?: string;
    onNavigate?: () => void;
}

const AddCard: React.FC<AddCardProps> = ({ locale, number, text, className, onNavigate }) => {

    return (
        <div className={`${Styles.AddCardMain} ${className}`}>
            <h1>{number}</h1>
            <p>{text}</p>
            <i style={{ right: locale === "en" ? "16px" : "", left: locale === "en" ? "" : "16px", cursor:'pointer' }} className="bi bi-plus-circle" onClick={onNavigate}></i>
        </div >
    );
};

export default AddCard;