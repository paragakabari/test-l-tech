import React from 'react'
import Styles from "./createNewInquirySpsdComponent.module.css"
import { Col, Form, Row } from 'react-bootstrap'
import ButtonComp from '../Button'

const Consignment = () => {
    return (
        <div className={`${Styles.tabsMain} d-flex gap-3 mt-4`}>
            <div className='d-block mt-2'>
                <div className={Styles.inquiryCheck}>
                    <i className="bi bi-check2"></i>
                </div>
            </div>
            <div className='w-100'>
                <div className={Styles.shipText}>
                    <p>Consignment Details</p>
                    <span>Seamless Shipping Solutions</span>
                </div>
                <Row className='gy-4'>
                    <Col md={12}>
                        <div className={`${Styles.typeBg} w-100`}>
                            <Row className='gy-4'>
                                <Col lg={4} md={6} sm={12}>
                                    <label className="com-label fw-normal">
                                        Scheduled Pick Up Date
                                    </label>
                                    <div className={Styles.searchInput}>
                                        <input type="text" placeholder="DD/MM/YYYY HH:MM" />
                                    </div>
                                </Col>
                                <Col lg={4} md={6} sm={12}>
                                    <label className="com-label fw-normal">
                                        Scheduled Drop Off Date
                                    </label>
                                    <div className={Styles.searchInput}>
                                        <input type="text" placeholder="DD/MM/YYYY HH:MM" />
                                    </div>
                                </Col>
                                <Col sm={12}>
                                    <label className="com-label fw-normal">
                                        Consignment Details
                                    </label>
                                    <div className={Styles.detailsBox}>
                                        Description will be auto-filled in based on order details imported.<br />Sequence will be Product Name, Quantity<br />Total weight = Product weight * qty<br />Dimensions = Dimension for 1 * qty
                                    </div>
                                </Col>
                                <Col sm={12}>
                                    <div className='d-flex flex-wrap gap-3 align-items-center'>
                                        <label className="com-label fw-normal mb-0" style={{ minWidth: "250px" }}>
                                            Type Of Freight
                                        </label>
                                        <div className={Styles.selectBoxCus}>Full Truck Load</div>
                                        <div className={Styles.selectBoxCus}>Less than Truck Load</div>
                                    </div>
                                </Col>
                                <Col lg={8} sm={12}>

                                    <label className="com-label fw-normal">
                                        Value of the Shipment
                                    </label>
                                    <div className='d-flex flex-wrap align-items-center gap-3'>
                                        <div className='input-prefix'>
                                            <Form.Control type="text" placeholder="00,000" className='com-input' />
                                            <p>SAR</p>
                                        </div>
                                        <span className={Styles.inputInfo}>Value of the Shipment in Words</span>
                                    </div>
                                </Col>
                                <Col sm={12}>
                                    <label className="com-label fw-normal">
                                        Type Of Freight
                                    </label>
                                    <div className='d-flex flex-wrap gap-3 align-items-center'>
                                        <div className={Styles.selectBoxCus}>Partially Insured</div>
                                        <div className={Styles.selectBoxCus}>Not Insured</div>
                                        <div className={Styles.selectBoxCus}>Fully Insured</div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col md={12}>
                        <div className='d-flex justify-content-end mt-4'>
                            <ButtonComp text='Proceed Next' />
                        </div>
                    </Col>
                </Row>
            </div>
        </div>

    )
}

export default Consignment