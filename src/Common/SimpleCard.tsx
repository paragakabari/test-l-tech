import React from 'react'
import Styles from "./common.module.css"

const SimpleCard = ({ description, title, onClick }: { description: string, title: number, onClick?: () => void }) => {
    return (
        <div className={`${Styles.simpleCardMain} cursor-pointer w-100`} onClick={onClick}>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}

export default SimpleCard