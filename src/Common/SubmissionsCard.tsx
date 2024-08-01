import React from 'react'
import Styles from "./common.module.css"
const SubmissionsCard = ({ cardColor, number, text, icon, bgColor1, bgColor2, borderUnset }: { cardColor: string, number: number, text: string, icon: any, bgColor1?: string, bgColor2?: string, borderUnset?: string }) => {
    return (
        <div className={Styles.SubmissionsCard} style={{ borderColor: `${cardColor}`, backgroundImage: `linear-gradient(135deg, ${bgColor1}, ${bgColor2})`, border: `${borderUnset}` }}>
            <h1 style={{ color: `${cardColor}` }}>{number}</h1>
            <p style={{ color: `${cardColor}` }}>{text}</p>
            <div className='d-flex justify-content-end' style={{ color: `${cardColor}` }} dangerouslySetInnerHTML={{ __html: icon }} />
        </div>
    )
}

export default SubmissionsCard