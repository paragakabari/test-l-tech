import React from 'react'
import Styles from "./common.module.css"
const ConsignmentCard = () => {
    return (
        <div className={Styles.ConsignmentCard}>
            <p>Assign driver to Fleet for <b>Consignment Delivery</b></p>
            <i className="bi bi-arrow-right-circle-fill"></i>
        </div>
    )
}

export default ConsignmentCard