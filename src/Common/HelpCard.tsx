import React from 'react'
import Styles from "./common.module.css"
import { useTranslations } from 'next-intl';
const HelpCard = () => {
    const t = useTranslations("Index");
    return (
        <div className={Styles.blueCard}>
            <h4>{t("Tell_more")}<br />{t("About_company")}</h4>
            <div className='d-flex gap-2 align-items-center'>
                <p>{t("HELP_YOU")}</p>
                <i className="bi bi-arrow-right"></i>
            </div>
        </div>
    )
}

export default HelpCard