import React from 'react';
import Styles from "./common.module.css";
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
const StepsFollow = ({ locale, data, src }: { locale: string, data: any, src?: string }) => {
    const t = useTranslations("Index");
    return (
        <div className={Styles.StepsFollowMain}>
            <Image className={Styles.StepsFollowImg} src="/side-img.png" alt='' width={500} height={500} />
            <p>{t("Before_ship")}<br /> {t("your")} <Link href="">{t("First_Consignment")}</Link><br /> <b>{t("Few_follow")}</b></p>
            <div className={`${locale == "en" ? Styles.StepsFollowStep : Styles.StepsFollowStepAR}`}>
                {data?.map((step: any, index: number) => (
                    <div key={index} className='d-flex gap-4 position-relative z-3'>
                        <div className='d-block'>
                            <div className={Styles.stepCount}>
                                <Image src={step.src} width={23} height={23} alt='' />
                            </div>
                        </div>
                        <div>
                            <h6>{step.title}</h6>
                            <p>{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
};

export default StepsFollow;
