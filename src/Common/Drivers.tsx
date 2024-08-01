"use client"
import React from 'react'
import Styles from "./common.module.css"
import Link from 'next/link'
import { useKeenSlider } from "keen-slider/react"
import { useTranslations } from 'next-intl'
import Image from 'next/image'

interface PublicInquiriesCardProps {
    driverName?: string;
    driverNo?: string;
    rating?: string;
    totalDrivers?: number;
    driverImage?: string;
    onNavigate?: () => void;
}

const Drivers = ({ data, totalDrivers, onNavigate }: any) => {
    const t = useTranslations("Index");
    const [ref] = useKeenSlider<HTMLDivElement>({
        loop: true,
        mode: "free",
        slides: { perView: 3.5, spacing: 15 },
        breakpoints: {
            '(max-width: 1200px)': {
                slides: { perView: 1.5, spacing: 15 },
            },
            '(max-width: 900px)': {
                slides: { perView: 2.5, spacing: 15 },
            },
            '(max-width: 768px)': {
                slides: { perView: 1.5, spacing: 10 },
            },
            '(max-width: 480px)': {
                slides: { perView: 1, spacing: 5 },
            },
        },
    })
    return (
        <div className={Styles.DriverMain}>
            <div className='d-flex justify-content-between align-items-center mb-3'>
                <h1>{totalDrivers} {t("Drivers")}</h1>
                <Link href="">{t("View_All")}</Link>
            </div>
            <div ref={ref} className="keen-slider">
                {data?.map((rec: PublicInquiriesCardProps, i: number) => (
                    <div className={`${Styles.DriverCard} keen-slider__slide cursor-pointer`} onClick={onNavigate}>
                        <div className={`d-flex justify-content-between align-items-center ${Styles.cardHeader}`}>
                            <div >
                                <h2>{t(rec?.driverName)}</h2>
                                <p>{rec?.driverNo}</p>
                            </div>
                            <div className={Styles.CardImg}>
                                <Image src={rec?.driverImage} height={34} width={34} alt='' />
                            </div>
                        </div>
                        <h4>3 {t("Consignment_Delivered")}</h4>
                        <div className='d-flex align-items-center gap-2 align-items-center'>
                            <span>{t("Rating")} - {rec?.rating}</span>
                            <i className="bi bi-star-fill"></i>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Drivers;
