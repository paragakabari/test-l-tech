import React from 'react'
import Styles from "./common.module.css"
const TrackShippments = ({ title, PlaceHolder, mapSize }: { title?: string, PlaceHolder?: string, mapSize?: number }) => {
    ;
    return (
        <div className={Styles.TrackShippments}>
            <div className={Styles.TrackShippmentsHead}>
                <div className="d-flex align-items-center justify-content-between mb-3">
                    <h1>{title}</h1>
                    <i className="bi bi-list"></i>
                </div>
                <input className={Styles.SearchInput} placeholder={PlaceHolder} />
            </div>
            <iframe className={Styles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463877.31242950493!2d46.49288193599672!3d24.725455372447055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2sin!4v1717658293789!5m2!1sen!2sin"
                width="100%" height={mapSize} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
    )
}

export default TrackShippments