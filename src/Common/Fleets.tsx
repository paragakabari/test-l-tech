import React from 'react'
import Styles from "./common.module.css"
import { useTranslations } from 'next-intl';
const Fleets = ({ Fleets, VehiclesType, InTransit, InService, InServices, onClick }: { Fleets?: number, VehiclesType?: number, InTransit?: number, InService?: number, InServices?: number, onClick?: () => void }) => {
    const t = useTranslations("Index");
    return (
        <div className={Styles.fleetsCardMain}>
            <div className={`d-flex justify-content-between gap-2 ${Styles.fleetsCardMainB}`}>
                <div>
                    <h1>{Fleets}<span>{t("Fleets")}</span> </h1>
                    <h6>{VehiclesType} {t("Types_Of_Vehicles")}</h6>
                </div>
                <div className={`${Styles.roundTag} cursor-pointer`}><i className="bi bi-arrow-up-right" onClick={onClick}></i></div>
            </div>
            <h3>{t("14_Available_For_Delivery")}</h3>
            <div className='d-flex gap-3 flex-wrap mt-3'>
                <div>
                    <h5>{InTransit}</h5>
                    <p>{t("In_Transit")}</p>
                </div>
                <div>
                    <h5>{InService}</h5>
                    <p>{t("In_Service")}</p>
                </div>
                <div>
                    <h5>{InServices}</h5>
                    <p>{t("In_Service")}</p>
                </div>
            </div>
        </div>
    )
}

export default Fleets