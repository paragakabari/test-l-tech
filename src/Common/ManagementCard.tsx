import React from 'react'
import Styles from "./common.module.css"
const ManagementCard = ({ text, onClick, className }: { text: string, onClick?: () => void, className?: string }) => {
    return (
        <div className={`${Styles.mainCardBg} w-50 ${className}`}>
            <p>{text}</p>
            <div className={Styles.arrowMain} onClick={onClick}>
                <i className="bi bi-arrow-up-right"></i>
            </div>
        </div>
    )
}

export default ManagementCard