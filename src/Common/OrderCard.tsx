"use client"
import React from 'react'
import Styles from "./common.module.css"
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import { useTranslations } from 'next-intl';
const percentage = 22;
const OrderCard = () => {
    const t = useTranslations("Index");
    return (
        <div className={Styles.ordersCardMain}>
            <div className={Styles.CircularProgressbarMAin}>
                <CircularProgressbar value={percentage} text={`${percentage}`} strokeWidth={3} className={Styles.CircularProgressbar} />
                <span>{t("Total_Orders")}</span>
            </div>
            <div className={Styles.CircularProgressbarText}>
                <div className='d-flex justify-content-between align-items-center'>
                    <span>{t("Ongoing_Orders")}</span>
                    <h4>14</h4>
                </div>
                <div className='d-flex justify-content-between align-items-center'>
                    <span>{t("Fulfilled_Orders")}</span>
                    <h4>08</h4>
                </div>
            </div>
        </div>
    )
}

export default OrderCard