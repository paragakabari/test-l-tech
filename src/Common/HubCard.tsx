import React from 'react'
import Styles from "./common.module.css"
const HubCard = ({ number, text, className, onClick }) => {
    return (
        <div className={`${Styles.HubCardMain} ${className}`} >
            <div className='d-flex gap-2 align-items-center'>
                <h1>{number}</h1>
                <p>{text}</p>
            </div>
            <i className="bi bi-plus-circle cursor-pointer" onClick={onClick}></i>
        </div>
    )
}

export default HubCard