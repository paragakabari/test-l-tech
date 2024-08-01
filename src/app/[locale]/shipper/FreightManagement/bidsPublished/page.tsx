"use client"
import React, { useState } from 'react';
import Styles from "./bidsPublished.module.css";
import { HeroThree } from '@/Common/HeroThree';
import { Col, Container, Modal, Row } from 'react-bootstrap';
import ButtonComp from '@/Component/Button';
import BidPublishTimeBar from '@/Component/BidPublishTimeBar';
import Image from 'next/image';

const BidCard = ({ companyName, amount, duration, draftStatus }) => {
    return (
        <div className={Styles.bidWhiteBg}>
            <div className='d-flex gap-2 align-items-center'>
                <h1>{companyName}</h1>
                <div className='d-flex'>
                    <div className={Styles.bidWhiteBgAvatar}>
                        <Image src="https://images.unsplash.com/photo-1473445730015-841f29a9490b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt='' height={60} width={60} />
                    </div>
                </div>
            </div>
            <div className={Styles.sideInfoBid}>
                <div>
                    <p>{amount}</p>
                    <small>{duration}</small>
                </div>
                <span>{draftStatus}</span>
            </div>
            <BidPublishTimeBar />
        </div>
    );
};

const AddressCard = ({ title, subtitle, address, country, state, city, postal, latLng, email, phone }) => {
    return (
        <div className={Styles.bidWhiteBg}>
            <div className={Styles.pickupBox}>
                <div className={Styles.pickupBoxHead}>
                    <h1>{title}</h1>
                    <p>{subtitle}</p>
                </div>
                <div className='mb-2'>
                    <p className='fw-bold'>Address</p>
                    <p>{address}</p>
                </div>
                <div className='d-flex align-items-center gap-2p'>
                    <p className={Styles.pickupBoxTitle}>Country</p>
                    <p>{country}</p>
                </div>
                <div className='d-flex align-items-center gap-2p'>
                    <p className={Styles.pickupBoxTitle}>State / Province</p>
                    <p>{state}</p>
                </div>
                <div className='d-flex align-items-center gap-2p'>
                    <p className={Styles.pickupBoxTitle}>Town/ City</p>
                    <p>{city}</p>
                </div>
                <div className='d-flex align-items-center gap-2p'>
                    <p className={Styles.pickupBoxTitle}>Postal / Zip</p>
                    <p>{postal}</p>
                </div>
                <div className='d-flex align-items-center gap-2p'>
                    <p className={Styles.pickupBoxTitle}>Latitude Longitude</p>
                    <p>{latLng}</p>
                </div>
                <div className={Styles.pickupBoxFooter}>
                    <div className='d-flex gap-2 align-items-center'><i className="bi bi-envelope"></i><p>{email}</p></div>
                    <div className='d-flex gap-2 align-items-center'><i className="bi bi-telephone-fill"></i><p>{phone}</p></div>
                </div>
            </div>
        </div>
    );
};

const SubmissionSummaryCard = ({ amount, date, draftStatus }) => {
    return (
        <div className={Styles.RoadTransportBox}>
            <div className='d-flex align-items-center justify-content-between mb-2'>
                <Image height={30} width={30} src="/contract.png" alt='' />
                <div className={Styles.RoadTransportTitle}>
                    <p>{amount}</p>
                    <small>SAR</small>
                </div>
            </div>
            <div>
                <h6>Road Transport</h6>
                <small>{date} • {draftStatus}</small>
            </div>
        </div>
    );
};

const Page = ({ params: { locale } }) => {
    const breadcrumb = [
        { 'text': "Dashboard", 'link': "/shipper/dashboard" },
        { 'text': "Freight Management", 'link': '/shipper/e-ProcureFrieght' },
        { 'text': "Published Inquires", 'link': '/' },
    ];

    const addressDetails = {
        address: "7173 Eastern Ring Branch Rd, King Abdullah Dt., Riyadh 12422, Saudi Arabia",
        country: "Saudi Arabia",
        state: "Riyadh",
        city: "Abdullah Dt.",
        postal: "12422",
        latLng: "24.7176974 / 46.7594279",
        email: "abc@abc.com",
        phone: "XXXXXXXXXXX"
    };
    const [requestRequote, setRequestRequote] = useState(false);
    const [awardNow, setAwardNow] = useState(false);
    const [exit, setExit] = useState(false);
    return (
        <div className='position-relative'>
            <div className={Styles.secondDashBoard}>
                <HeroThree BoldText='Inquiry EPF_23_RFQ0001' breadcrumb={breadcrumb} />
                <Container fluid className={Styles.layout + " px-5"}>
                    <Row>
                        <Col sm={12} className={`${Styles.layoutSecond} ${Styles.publishedInquires}`}>
                            <Row className="gy-4">
                                <Col lg={12}>
                                    <div className='d-flex justify-content-end gap-2 w-100'>
                                        <ButtonComp text='Request Requote' className='violetButton' onClick={() => setRequestRequote(true)} />
                                        <ButtonComp text='Award Now' className='greenButton' onClick={() => setAwardNow(true)} />
                                        <ButtonComp text='Edit Inquiry' onClick={() => setExit(true)} />
                                        <div className={Styles.overActionButton}>
                                            <i className="bi bi-three-dots"></i>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={12}>
                                    <Row className='gy-4'>
                                        <Col xxl={2} xl={4} lg={4} md={4} sm={12}>
                                            <BidCard
                                                companyName='Uniworld logistics Pvt. Ltd.'
                                                amount='8900 SAR'
                                                duration='7 days'
                                                draftStatus='1st Draft'
                                            />
                                        </Col>
                                        <Col xxl={7} xl={8} lg={8} md={8} sm={12}>
                                            <Row className='gy-4'>
                                                <Col xl={6} lg={12} md={12}>
                                                    <AddressCard
                                                        title='Pickup Points'
                                                        subtitle='Single Point Pickup'
                                                        {...addressDetails}
                                                    />
                                                </Col>
                                                <Col xl={6} lg={12} md={12}>
                                                    <AddressCard
                                                        title='Drop off Details'
                                                        subtitle='Single Point Drop off'
                                                        {...addressDetails}
                                                    />
                                                </Col>
                                                <Col md={12} className={Styles.SubmissionSummaryMain}>
                                                    <Row className='gy-4'>
                                                        <Col lg={4} md={12} className='align-self-center'>
                                                            <h1>Submission Summary</h1>
                                                        </Col>
                                                        <Col lg={4} md={6} sm={6}>
                                                            <SubmissionSummaryCard
                                                                amount='57893'
                                                                date='15-03-2023'
                                                                draftStatus='1st Draft'
                                                            />
                                                        </Col>
                                                        <Col lg={4} md={6} sm={6}>
                                                            <SubmissionSummaryCard
                                                                amount='57893'
                                                                date='15-03-2023'
                                                                draftStatus='1st Draft'
                                                            />
                                                        </Col>
                                                    </Row>
                                                </Col>
                                                <Col md={12}>
                                                    <Row className='gy-4'>
                                                        <Col lg={12}>
                                                            <div className={Styles.ProposalCopy}>
                                                                <h1>Proposal Copy</h1>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col xxl={3} xl={12} lg={12} md={12} sm={12} className='d-flex flex-column'>
                                            <div className={Styles.publishedInquiresPrice}>
                                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463878.29488595825!2d46.82252880000001!3d24.725191849999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2sin!4v1720691951980!5m2!1sen!2sin" width="100%" height="250" style={{ border: 0 }}></iframe>
                                                <div className={Styles.priceBackupText}>
                                                    <h1>PRICE BREAKUP</h1>
                                                    <div className={Styles.boldTextPrice}>
                                                        <div className='d-flex align-items-center justify-content-between mt-4'>
                                                            <p className='fs-6 fw-bold'>Base Fare</p>
                                                            <div className='d-flex gap-2 align-items-center'><p className='fs-6 fw-bold'>33990</p><small>SAR</small></div>
                                                        </div>
                                                        <div className='d-flex align-items-center justify-content-between mt-2'>
                                                            <p className='fs-6 fw-bold'>Services Included</p>
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
                                                        <div className='d-flex align-items-center justify-content-between mt-2'>
                                                            <p className='fs-6 fw-bold'>Tax (%) 10 %</p>
                                                            <div className='d-flex gap-2 align-items-center'><p className='fs-6 fw-bold'>3518.7</p><small>SAR</small></div>
                                                        </div>
                                                        <div className={Styles.DiscountTag}>
                                                            <div className='d-flex align-items-center justify-content-between'>
                                                                <p className='fs-6 fw-bold'>Total Payable</p>
                                                                <div className='d-flex gap-2 align-items-center'><p className='fs-6 fw-bold'>35187</p><small>SAR</small></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <span className={Styles.deviderMain}></span>
                                                <div className={Styles.priceBackupText}>
                                                    <div className='d-flex align-items-center justify-content-between'>
                                                        <p className='fs-6 fw-bold'>Total Payable</p>
                                                        <div className='d-flex gap-2 align-items-center'><p className='fs-6 fw-bold'>35187</p><small>SAR</small></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Modal
                show={requestRequote}
                onHide={() => setRequestRequote(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                    <div className={Styles.RequoteRequestBody}>
                        <div className={Styles.closeButton} onClick={() => setRequestRequote(false)} >
                            <i className="bi bi-x-lg"></i>
                        </div>
                        <div className={Styles.modalAnimation}></div>
                        <h1>Requote Request</h1>
                        <h1>V 1.0</h1>
                        <p>Please provide Comments/pointer</p>
                        <textarea placeholder='Please add the comments' />
                        <ButtonComp text='Send Request' className='mx-auto d-block mt-4' />
                    </div>
                </Modal.Body>
            </Modal>
            <Modal
                show={exit}
                onHide={() => setExit(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                    <div className={Styles.RequoteRequestBody}>
                        <div className={Styles.closeButton} onClick={() => setExit(false)} >
                            <i className="bi bi-x-lg"></i>
                        </div>
                        <div className='py-5'>
                            <h1>Are you sure, you want to leave this page? This might discard your order.</h1>
                            <div className='d-flex gap-3 justify-content-center mt-4'>
                                <ButtonComp text='No Dont Exit' className='lightButton' />
                                <ButtonComp text='Send Request' className='' />
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
            <Modal
                show={requestRequote}
                onHide={() => setRequestRequote(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                    <div className={Styles.RequoteRequestBody}>
                        <div className={Styles.closeButton} onClick={() => setRequestRequote(false)} >
                            <i className="bi bi-x-lg"></i>
                        </div>
                        <div className={Styles.modalAnimation}></div>
                        <h1>Requote Request</h1>
                        <h1>V 1.0</h1>
                        <p>Please provide Comments/pointer</p>
                        <textarea placeholder='Please add the comments' />
                        <ButtonComp text='Send Request' className='mx-auto d-block mt-4' />
                    </div>
                </Modal.Body>
            </Modal>
            <Modal
                show={awardNow}
                onHide={() => setAwardNow(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                    <div className={Styles.RequoteRequestBody}>
                        <div className={Styles.closeButton} onClick={() => setAwardNow(false)} >
                            <i className="bi bi-x-lg"></i>
                        </div>

                        <p>We are awarding the shipment to</p>
                        <div className={Styles.logBox}>
                            <div>
                                <div className='d-flex gap-3 align-items-center'>
                                    <div className={Styles.logBoxAvatar}>
                                        <Image src="https://i.pinimg.com/736x/5f/f0/86/5ff0863ee36927c504e2e8a46657763e.jpg " alt='' height={60} width={60} />
                                    </div>
                                    <div>
                                        <p className='text-start'>DHL logistics</p>
                                        <span>Road Transport</span>
                                    </div>
                                </div>
                                <h6 className='mt-3'>Proposal_2.Pdf</h6>
                            </div>
                            <div className='text-center'>
                                <p>7 Days</p>
                                <h6 className='fw-bold'>SAR 33900</h6>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between mt-4'>
                            <ButtonComp text='Cancel' className='outlineButton' />
                            <ButtonComp text='Send Request' className='' />
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default Page;
