'use client'
import React from 'react'
import Styles from "./common.module.css"
import Link from 'next/link'
import { useKeenSlider } from "keen-slider/react"
import { useTranslations } from 'next-intl'

interface PublicInquiriesCardProps {
    id?: string;
    title?: string;
    location?: string;
    category?: string;
    weight?: string;
    quantity?: string;
    totalWeight?: string;
}

const PublicInquires = ({ data, label }: { data: PublicInquiriesCardProps[], label?: string }) => {
    const [ref] = useKeenSlider<HTMLDivElement>({
        loop: true,
        mode: "free",
        slides: { perView: 3.5, spacing: 15 },
        breakpoints: {
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
    const t = useTranslations("Index");
    return (
        <div className={Styles.publicInquires}>
            <div className='row'>
                <div className='col-lg-2 col-md-12'>
                    <div className='p-3'>
                        <h3>{label}</h3>
                        <Link href="">{t("View_All")}</Link>
                    </div>
                </div>
                <div className='col-lg-10 col-md-12'>

                    <div ref={ref} className="keen-slider">
                        {data?.map((rec: PublicInquiriesCardProps, i: number) => (

                            <div className="keen-slider__slide" key={i}>
                                <div className={Styles.publicInquiresCard}>
                                    <span>#{rec?.id}</span>
                                    <h6>{rec?.title}</h6>
                                    <p>{rec?.location}</p>
                                    <h5 className='mt-1 mb-2'>{rec?.category}</h5>
                                    <div className={Styles.publicInquiresCardBottom}>
                                        <div>
                                            <span>{t("Wtg")}</span>
                                            <h6>{rec?.weight}</h6>
                                        </div>
                                        <div>
                                            <span>{t("Qty")}</span>
                                            <h6>{rec?.quantity}</h6>
                                        </div>
                                        <div>
                                            <span>{t("Total_Wtg")}</span>
                                            <h6>{rec?.totalWeight}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PublicInquires