import React from 'react'
import Styles from "./contractTabs.module.css"
import { Col, Row } from 'react-bootstrap'
import SPMDCard from '@/Common/SPMDCard'

const ContractOverview = () => {
    return (
        <Row className="gy-4">
            <Col xl={8} lg={12}>
                <Row className='gy-4'>
                    <Col lg={4} md={6} sm={12} className='d-flex'>
                        <div className={Styles.simpleWhiteCard}>
                            <h1>112</h1>
                            <small className='mb-4'>Shipments Processed</small>
                            <hr />
                            <p>29 Active Shipments</p>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12} className='d-flex'>
                        <div className={Styles.simpleWhiteCard}>
                            <h1>189</h1>
                            <small className='mb-4'>PO Generated</small>
                            <hr />
                            <p>12 Ongoing POs</p>
                        </div>
                    </Col>
                    <Col lg={4} md={12} sm={12} className='d-flex'>
                        <div className={Styles.simpleWhiteCard}>
                            <h1>67</h1>
                            <small className='mb-4'>Invoices Raised</small>
                            <hr />
                            <h2>SAR 8499095</h2>
                            <p>Total Payment</p>
                        </div>
                    </Col>
                    <Col sm={12}>
                        <div className={Styles.ContractOverviewDetails}>
                            <p className='fs-6 fw-bold mb-2'>Contract Details</p>
                            <div className='d-flex gap-5 row-gap-2 flex-wrap'>
                                <div className=''>
                                    <small>Start Date</small>
                                    <p>17/06/2023</p>
                                </div>
                                <div className=''>
                                    <small>RFQ Duration</small>
                                    <p>90 (in days)</p>
                                </div>
                                <div className=''>
                                    <small>Item Unit Type</small>
                                    <p>Kilo Gram</p>
                                </div>
                                <div className=''>
                                    <small>Estimated weight delivery range</small>
                                    <p>500-600 Kgs</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12}>
                        <div className={Styles.ContractOverviewDetails}>
                            <p className='fs-6 fw-bold mb-2'>Description</p>
                            <small>I will need these items to be collected by the carrier maximum within 2 days of order received and tracking should be real time.</small>
                        </div>
                    </Col>
                    <Col sm={12}>
                        <div className={`${Styles.ContractOverviewDetails} d-flex gap-5 row-gap-2 flex-wrap`}>
                            <div>
                                <p className='fs-6 fw-bold mb-2'>Additional Services</p>
                                <p>- Loading </p>
                                <p>- Packaging </p>
                                <p>- Forklifting </p>
                            </div>
                            <div>
                                <p className='fs-6 fw-bold mb-2'>Additional Licensing Requirement</p>
                                <p>- A commercial invoice </p>
                                <p>- A bill of lading </p>
                                <p>- A certificate of origin </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Col>
            <Col xl={4} lg={12}>
                <SPMDCard />
            </Col>
        </Row>
    )
}

export default ContractOverview