import React from 'react'
import Styles from "./contractTabs.module.css"
import { Col, Row } from 'react-bootstrap'
import SPMDCard from '@/Common/SPMDCard'

const stops = [
    { id: 0, name: 'Pickup Location Name', location: 'Riyadh', active: true },
    { id: 1, name: 'First Stop name will be visible here', location: 'Riyadh', active: true },
    { id: 2, name: 'Second Stop name will be visible here', location: 'Riyadh', active: false },
    { id: 3, name: 'Third Stop name will be visible here', location: 'Hail', active: false },
    { id: 4, name: 'Forth Stop name will be visible here', location: 'On the way somewhere, Yanbu', active: false },
    { id: 5, name: 'Forth Stop name will be visible here', location: 'Final Destination', active: false }
]

const ContractRouteOfShipment = () => {
    return (
        <Row className="gy-4">
            <Col lg={8}>
                {stops.map((stop, index) => (
                    <div key={index} className={`${Styles.ContractRouteMain} d-flex align-items-center gap-3 position-relative pb-3`}>
                        <div className={`${Styles.numberBoxMain} d-block`}>
                            <div className={`${Styles.NumberBox} ${stop.active ? Styles.NumberBoxActive : ''}`}>{stop.id}</div>
                        </div>
                        <div className={Styles.shipmentCardBox}>
                            <p>{stop.name}</p>
                            <span>{stop.location}</span>
                        </div>
                    </div>
                ))}
            </Col>
            <Col lg={4}>
                <SPMDCard />
            </Col>
        </Row>
    )
}

export default ContractRouteOfShipment
