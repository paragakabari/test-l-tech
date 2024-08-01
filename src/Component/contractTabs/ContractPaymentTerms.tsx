import React from 'react'
import Styles from "./contractTabs.module.css"
import { Col, Row } from 'react-bootstrap'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
    datasets: [
        {
            data: [40, 13],
            backgroundColor: ["#F8BCBC", "#3E77D3"],
        },
    ],
};

const options = {
    cutout: '0%',
    maintainAspectRatio: true,
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
    },
};
const ContractPaymentTerms = () => {
    return (
        <Row className="gy-4">
            <Col lg={8} md={12}>
                <div className={Styles.ContractPaymentTermsMain}>
                    <div className={Styles.ContractPaymentTermsMainTop}>
                        <div className='d-flex gap-3 justify-content-between align-items-center'>
                            <div>
                                <h1>Payment Terms & Division</h1>
                                <p>Based On Distance</p>
                            </div>
                            <div style={{ height: '80PX', width: '80PX' }}>
                                <Doughnut data={data} options={options} />
                            </div>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <div className={Styles.milestone}>
                            <div className='d-flex gap-3 align-items-center flex-wrap'>
                                <div>
                                    <label className='com-label'>MILESTONE 1</label>
                                    <input type='text' value="10 %" className='com-input px-3 w-100' />
                                </div>
                                <div>
                                    <label className='com-label'>23 Dec 2023</label>
                                    <input type='text' placeholder="Po Signed" className='com-input px-3 w-100' />
                                </div>
                            </div>
                            <div className='text-end ms-auto'>
                                <p>TOTAL</p>
                                <small>7915.5 SAR</small>
                            </div>
                        </div>
                        <div className={`${Styles.milestone} ${Styles.milestone2} mt-3`}>
                            <div className='d-flex gap-3 align-items-center flex-wrap'>
                                <div>
                                    <label className='com-label'>MILESTONE 2</label>
                                    <input type='text' value="10 %" className='com-input px-3 w-100' />
                                </div>
                                <div>
                                    <label className='com-label'>27 Dec 2023</label>
                                    <input type='text' placeholder="Shipment Items Picked Up" className='com-input px-3 w-100' />
                                </div>
                            </div>
                            <div className='text-end ms-auto'>
                                <p>TOTAL</p>
                                <small>70969.5 SAR</small>
                            </div>
                        </div>
                    </div>
                    <div className={Styles.paymentOptionMain}>
                        <Row className='gy-4'>
                            <Col lg={12}>
                                <small className='fw-bold'>PAYMENT OPTION SELECTED</small>
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <div className={Styles.paymentBox}>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div>
                                            <p className='fw-semibold'>Base Cost</p>
                                            <small>(Per Trip/800Km)</small>
                                        </div>
                                        <div className='d-flex align-items-center gap-2'><p className='fw-semibold'>990</p><small>SAR</small></div>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center mt-3'>
                                        <div>
                                            <p className='fw-semibold'>Additional Cost</p>
                                            <small>Every Additional 50Km</small>
                                        </div>
                                        <div className='d-flex align-items-center gap-2'><p className='fw-semibold'>150</p><small>SAR</small></div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <div className={Styles.paymentBox} style={{ opacity: 0.5 }}>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div>
                                            <p className='fw-semibold'>Base Cost</p>
                                            <small>(Per Trip/800Km)</small>
                                        </div>
                                        <div className='d-flex align-items-center gap-2'><p className='fw-semibold'>990</p><small>SAR</small></div>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center mt-3'>
                                        <div>
                                            <p className='fw-semibold'>Additional Cost</p>
                                            <small>Every Additional 50Km</small>
                                        </div>
                                        <div className='d-flex align-items-center gap-2'><p className='fw-semibold'>150</p><small>SAR</small></div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Col>
            <Col lg={4} md={12} >
                <div className={Styles.publishedInquiresPrice}>
                    <div className={Styles.priceBackupText}>
                        <h1>PRICE BREAKUP</h1>
                        <div className={Styles.boldTextPrice}>
                            <div className='d-flex justify-content-between align-items-center mt-4'>
                                <div>
                                    <p className='fw-semibold'>Base Cost</p>
                                    <small>(Per Trip/800Km)</small>
                                </div>
                                <div className='d-flex align-items-center gap-2'><p className='fw-semibold'>990</p><small>SAR</small></div>
                            </div>
                            <div className='d-flex justify-content-between align-items-center mt-2'>
                                <div>
                                    <p className='fw-semibold'>Additional Cost</p>
                                    <small>Every Additional 50Km</small>
                                </div>
                                <div className='d-flex align-items-center gap-2'><p className='fw-semibold'>150</p><small>SAR</small></div>
                            </div>
                            <div className='d-flex align-items-center justify-content-between mt-2'>
                                <p className='fs-6 fw-bold'>Services</p>
                                <div className='d-flex gap-2 align-items-center'><p className='fs-6 fw-bold'>1197</p><small>SAR</small></div>
                            </div>
                            <span></span>
                            <div className='d-flex align-items-center justify-content-between'>
                                <small>Packaging Cost</small>
                                <div className='d-flex gap-2 align-items-center'><small>399</small><small>SAR</small></div>
                            </div>
                            <span></span>
                            <div className='d-flex align-items-center justify-content-between'>
                                <small>Full Value Insurance</small>
                                <div className='d-flex gap-2 align-items-center'><small>399</small><small>SAR</small></div>
                            </div>
                            <span></span>
                            <div className='d-flex align-items-center justify-content-between'>
                                <small>Dashcam</small>
                                <div className='d-flex gap-2 align-items-center'><small>399</small><small>SAR</small></div>
                            </div>
                            <div className='d-flex align-items-center justify-content-between mt-4'>
                                <p className='fs-6 fw-bold'>Sub-Total</p>
                                <div className='d-flex gap-2 align-items-center'><p className='fs-6 fw-bold'>35187</p><small>SAR</small></div>
                            </div>
                            <div className='d-flex align-items-center justify-content-between'>
                                <p className='fs-6 fw-bold'>Tax (%) 10 %</p>
                                <div className='d-flex gap-2 align-items-center'><p className='fs-6 fw-bold'>3518.7</p><small>SAR</small></div>
                            </div>
                            <div className={Styles.DiscountTag}>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <div>
                                        <p className='fs-6 fw-bold'>Discount 10 %</p>
                                    </div>
                                    <div className='d-flex gap-2 align-items-center'><p className='fs-6 fw-bold'>3518.7</p><small>SAR</small></div>
                                </div>
                            </div>
                            <div className='d-flex align-items-center justify-content-between mt-2'>
                                <div>
                                    <p className='fs-6 fw-bold'>Total Base Cost</p>
                                    <small>Per Trip</small>
                                </div>
                                <div className='d-flex gap-2 align-items-center'><p className='fs-6 fw-bold'>35187</p><small>SAR</small></div>
                            </div>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    )
}

export default ContractPaymentTerms