import React from 'react'
import Styles from "./common.module.css";
import { useTranslations } from 'next-intl';
export const InvitationsReceivedCard = () => {
    const t = useTranslations("Index");
    return (
        <div className={Styles.InvitationsReceivedCard}>
            <div className='d-flex justify-content-between'>
                <h1>{t("14")}</h1>
                <div className={Styles.roundTag}><i className="bi bi-arrow-up-right"></i></div>
            </div>
            <p>{t("Invitations_Received")}<br />{t("from_Shippers")}</p>
        </div>
    )
}
