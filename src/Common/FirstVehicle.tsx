import React from 'react'
import Styles from "./common.module.css"
import { useTranslations } from 'next-intl';
const FirstVehicle = () => {
    const t = useTranslations("Index");
    return (
        <div className={Styles.WhiteCard}>
            <h4>{t("Looks")}<br />{t("Added_fleets")}</h4>
            <div className='d-flex gap-2 align-items-center'>
                <p>{t("ADD_VEHICLE")}</p>
                <i className="bi bi-arrow-right"></i>
            </div>
        </div>
    )
}

export default FirstVehicle