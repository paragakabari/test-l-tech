import React from 'react'
import Styles from "../contract.module.css"
import { Col, Row } from 'react-bootstrap'
import ButtonComp from '@/Component/Button'

const TotalCost = ({ handleSaveAndExit }) => {
    return (
        <div className={Styles.formContainer}>
            <Row className="gy-4">
                <Col lg={12} className="mb-3">
                    <h1>Total Cost</h1>
                </Col>
                <Col lg={12}>
                    <div className={Styles.costBox}>
                        <div className={`${Styles.costDetails} d-flex justify-content-between gap-3`}>
                            <div>
                                <h5>Base Fare (800 Km)</h5>
                                <small>Preferred by Distance</small>
                            </div>
                            <div className={Styles.flexCol}>
                                <div className={Styles.textEnd}>
                                    <h5>Base Fare (800 Km)</h5>
                                    <small>Preferred by Distance</small>
                                </div>
                                <div className={Styles.textEnd}>
                                    <h5>800 SAR</h5>
                                    <small>Every additional 50 Km</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${Styles.costBox} mt-3`}>
                        <div className={`${Styles.costDetails} d-flex justify-content-between w-100`}>
                            <div className={`${Styles.flexCol} w-100`}>
                                <h5>Services Included</h5>
                                <div className={`${Styles.costDetails} d-flex justify-content-between`}>
                                    <p>Insurance Cost:</p>
                                    <p>200 SAR</p>
                                </div>
                                <div className={`${Styles.costDetails} d-flex justify-content-between`}>
                                    <p>Dashcam Cost:</p>
                                    <p>100 SAR</p>
                                </div>
                                <div className={`${Styles.costDetails} d-flex justify-content-between`}>
                                    <p>Live Tracking Cost:</p>
                                    <p>200 SAR</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={Styles.Divider}></div>
                    <div className={`${Styles.costBox}`}>
                        <div className={`${Styles.costDetails} d-flex justify-content-between w-100`}>
                            <div className={`${Styles.flexCol} w-100`}>
                                <div className={`${Styles.costDetails} d-flex justify-content-between`}>
                                    <p>Total Service Cost:</p>
                                    <p>641,300 SAR</p>
                                </div>
                                <div className={`${Styles.costDetails} d-flex justify-content-between`}>
                                    <p>Tax (%):</p>
                                    <p>10%</p>
                                </div>
                                <div className={`${Styles.costDetails} d-flex justify-content-between`}>
                                    <p>Discount:</p>
                                    <p>10%</p>
                                </div>
                                <div className={`${Styles.costDetails} d-flex justify-content-between`}>
                                    <h4>Total Cost</h4>
                                    <h1>769,0560 SAR</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <div className="d-flex justify-content-end mt-3">
                    <ButtonComp
                        text="Send Proposal"
                        className="px-5"
                        onClick={handleSaveAndExit}
                    />
                </div>
            </Row>
        </div>
    )
}

export default TotalCost