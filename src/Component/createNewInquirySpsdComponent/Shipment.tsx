import React from 'react'
import Styles from "./createNewInquirySpsdComponent.module.css"
import { Col, Row } from 'react-bootstrap'
import ButtonComp from '../Button'

const Shipment = () => {
    return (
        <div className={`${Styles.tabsMain} d-flex gap-3 mt-4`}>
            <div className='d-block mt-2'>
                <div className={Styles.inquiryCheck}>
                    <i className="bi bi-check2"></i>
                </div>
            </div>
            <div className='w-100'>
                <div className={Styles.shipText}>
                    <p>Shipment Details</p>
                    <span>Seamless Shipping Solutions</span>
                </div>
                <Row className='gy-4'>
                    <Col lg={6} md={12}>
                        <div className={`${Styles.typeBg} w-100`}>
                            <p className={Styles.ConsignorTitle}>Consignor Details</p>
                            <div className={Styles.ConsignorAddress}>
                                <span>Pick Up Location</span>
                                <p>Aisha, Bint Abu Bakr St., Al<br /> Badeia’ah Dist , Riyadh - 01-1720017</p>
                            </div>
                            <div className='mb-3'>
                                <label className="com-label fw-normal">
                                    Company Name
                                </label>
                                <div className={Styles.searchInput}>
                                    <input type="text" placeholder="Search Company name" />
                                </div>
                            </div>
                            <div className='mb-3'>
                                <label className="com-label fw-normal">
                                    Contact Email
                                </label>
                                <div className={Styles.searchInput}>
                                    <input type="text" placeholder="Enter Company Email" />
                                </div>
                            </div>
                            <div className='mb-3'>
                                <label className="com-label fw-normal">
                                    Contact Number
                                </label>
                                <div className={Styles.searchInput}>
                                    <input type="text" placeholder="Enter Company Contact Number" />
                                </div>
                            </div>
                            <div className='mb-3'>
                                <label className="com-label fw-normal">
                                    Contact Person Name
                                </label>
                                <div className={Styles.searchInput}>
                                    <input type="text" placeholder="Full Name" />
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} md={12}>
                        <div className={`${Styles.typeBg} w-100`}>
                            <p className={Styles.ConsignorTitle}>Consignee Details</p>
                            <div className={Styles.ConsignorAddress}>
                                <span>Pick Up Location</span>
                                <p>Aisha, Bint Abu Bakr St., Al<br /> Badeia’ah Dist , Riyadh - 01-1720017</p>
                            </div>
                            <div className='mb-3'>
                                <label className="com-label fw-normal">
                                    Company Name
                                </label>
                                <div className={Styles.searchInput}>
                                    <input type="text" placeholder="Search Company name" />
                                </div>
                            </div>
                            <div className='mb-3'>
                                <label className="com-label fw-normal">
                                    Contact Email
                                </label>
                                <div className={Styles.searchInput}>
                                    <input type="text" placeholder="Enter Company Email" />
                                </div>
                            </div>
                            <div className='mb-3'>
                                <label className="com-label fw-normal">
                                    Contact Number
                                </label>
                                <div className={Styles.searchInput}>
                                    <input type="text" placeholder="Enter Company Contact Number" />
                                </div>
                            </div>
                            <div className='mb-3'>
                                <label className="com-label fw-normal">
                                    Contact Person Name
                                </label>
                                <div className={Styles.searchInput}>
                                    <input type="text" placeholder="Full Name" />
                                </div>
                            </div>
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

export default Shipment