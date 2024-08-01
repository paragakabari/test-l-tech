import React from 'react'
import Styles from "./common.module.css"
import { useTranslations } from 'next-intl';
const Notification = () => {
  const t = useTranslations("Index");
  return (
    <div className={Styles.NotificationMAin}>
      <div className={Styles.Notification}>
        <p>{t("Create_PO_For_Contracts")}</p>
        <div className={Styles.roundTag}><i className="bi bi-arrow-up-right"></i></div>
      </div>
      <div className={Styles.Notification} style={{ background: '#A6E3C7' }}>
        <p>{t("Create_PO_For_Contracts")}</p>
        <div className={Styles.roundTag}><i className="bi bi-arrow-up-right"></i></div>
      </div>
      <div className={Styles.Notification} style={{ background: '#DEB5C0' }}>
        <p>{t("Create_PO_For_Contracts")}</p>
        <div className={Styles.roundTag}><i className="bi bi-arrow-up-right"></i></div>
      </div>
    </div>
  )
}

export default Notification