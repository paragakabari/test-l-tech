import React from 'react'
import Styles from "./common.module.css"
const FirstEmployee = ({ span, title, linkName, onClick }: { span: string, title: string, linkName: string, onClick?: () => void }) => {
    return (
        <div className={`${Styles.RedCard} cursor-pointer`} onClick={onClick}>
            <h4><span>{span}</span><br />{title}</h4>
            <div className='d-flex gap-2 align-items-center'>
                <p>{linkName}</p>
                <i className="bi bi-arrow-right"></i>
            </div>
        </div>
    )
}

export default FirstEmployee