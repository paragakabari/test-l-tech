"use client"

import ButtonComp from '@/Component/Button'
import React, { useState } from 'react'
import { Col, Container, Form, Modal, Nav, Row } from 'react-bootstrap'
import Styles from "./publishedInquiresOverviewSecond.module.css"
import { useRouter } from 'next/navigation'
import { HeroThree } from '@/Common/HeroThree'
import CommonTable from '@/Component/CommonTable'
import Image from 'next/image'
import { shortenName } from '@/Utils/utilies'

const page = ({ params: { locale } }) => {
    const [modalShow, setModalShow] = React.useState(false);
    const breadcrumb = [
        {
            'text': "Dashboard",
            'link': "/shipper/dashboard"
        },
        {
            'text': "Freight Management",
            'link': '/shipper/e-ProcureFrieght'
        },
        {
            'text': "Published Inquires",
            'link': '/'
        },
    ];

    const router = useRouter();

    const [changeNav, setChangeNav] = useState("Order Details");

    const data = [
        { carrierName: 'ILS logistics Pvt. Ltd.', quotation: { quo: '9300 SAR', days: "7 days" }, transportMode: 'Road Transport', submissionDate: '15-03-2023', lastRevision: '15-03-2023', revisions: '4', currentStatus: 'AWARDED',image: "https://i.pinimg.com/736x/a1/d5/af/a1d5afdace642c517d0cff0962a68679.jpg" },
        { carrierName: 'DHL logistics Pvt. Ltd.', quotation: { quo: '50900 SAR', days: "8 days" }, transportMode: '14,530 SAR', submissionDate: '15-03-2023', lastRevision: '15-03-2023', revisions: '3', currentStatus: 'Pending', image: "https://i.pinimg.com/236x/69/d8/2e/69d82ee77bd68993db195bfb996f06c9.jpg" },
        { carrierName: 'Uniworld logistics Pvt. Ltd.', quotation: { quo: '8900 SAR', days: "7 days" }, transportMode: '14,530 SAR', submissionDate: '15-03-2023', lastRevision: '15-03-2023', revisions: '1', currentStatus: 'Pending',  image: "https://i.pinimg.com/736x/f2/2c/55/f22c552e14c6386c2ae424575db195d2.jpg"  },
        { carrierName: 'Kerry logistics Pvt. Ltd.', quotation: { quo: '1200 SAR', days: "19 days" }, transportMode: '14,530 SAR', submissionDate: '15-03-2023', lastRevision: '15-03-2023', revisions: '1', currentStatus: 'Revision Requested', image: "https://i.pinimg.com/736x/27/b7/de/27b7de9c188db33b73b49b79f9a9e99f.jpg" },
        { carrierName: 'ILS logistics Pvt. Ltd.', quotation: { quo: '800 SAR', days: "11 days" }, transportMode: '14,530 SAR', submissionDate: '15-03-2023', lastRevision: '15-03-2023', revisions: '0', currentStatus: 'Rejected', image: "https://i.pinimg.com/736x/59/a5/26/59a526a3f6146549714f829936da41b4.jpg" },
        { carrierName: 'ILS logistics Pvt. Ltd.', quotation: { quo: '8100 SAR', days: "8 days" }, transportMode: '14,530 SAR', submissionDate: '15-03-2023', lastRevision: '15-03-2023', revisions: '0', currentStatus: 'Rejected', image: "https://i.pinimg.com/736x/09/08/5d/09085dbe5d997954d49d53cd38a4f30d.jpg" },
    ];

    const columns = [
        {
            label: 'Carrier Name',
            key: 'carrierName',
            render: (value: any, row: any) => (
                <div className='d-flex align-items-center gap-3 cursor-pointer'>
                    <div className='d-block'>
                        <div className={Styles.avatar}>
                            {row.image ? (
                                <Image src={row.image} alt='' height={50} width={50} />
                            ) : (
                                <div className={Styles.shortenedName}>
                                    {shortenName(row.carrierName)}
                                </div>
                            )}
                        </div>
                    </div>
                    <div>
                        <span className={Styles.departmentName}>{value}</span>
                    </div>
                </div>
            ),
        },
        {
            label: 'Quotation',
            key: 'quotation',
            render: (value: any, row: any) => (
                <>
                    <span className="fw-bold">{value?.quo}</span><br />
                    <small className={Styles.noMembers}>{value?.days}</small>
                </>
            ),
        },
        {
            label: 'Transport Mode',
            key: 'transportMode',
            render: (value: any, row: any) => (
                <span className={Styles.createdOn}>{value}</span>
            ),
        },
        {
            label: 'Submission Date',
            key: 'submissionDate',
            render: (value: any, row: any) => (
                <span className={Styles.createdOn}>{value}</span>
            ),
        },
        {
            label: 'Last Revision',
            key: 'lastRevision',
            render: (value: any, row: any) => (
                <span className={Styles.createdOn}>{value}</span>
            ),
        },
        {
            label: 'Revisions',
            key: 'revisions',
            render: (value: any, row: any) => (
                <div className='d-flex gap-2 justify-content-center'>
                    <span className={Styles.noMembers}>{value}</span>
                    <i className="bi bi-file-earmark-text"></i>
                </div>
            ),
        },
        {
            label: 'Current Status',
            key: 'currentStatus',
            render: (value: any, row: any) => (
                <span className={Styles.createdOn}>{value}</span>
            ),
        },
    ];

    return (
        <div className='position-relative'>
            <div className={Styles.secondDashBoard}>
                <HeroThree BoldText='Inquiry EPF_23_RFQ0001' breadcrumb={breadcrumb} />
                <Container fluid className={Styles.layout + " px-5"}>
                    <Row>
                        <Col sm={12} className={`${Styles.layoutSecond} ${Styles.publishedInquires}`}>
                            <Row className="gy-4">
                                <Col lg={12} className={`empTabPublishedInquires ${Styles.empTabPublishedInquires}`}>
                                    <Nav variant="underline" className={Styles.tabKey}>
                                        {[
                                            "Overview",
                                            "Bids Received",
                                            "Bid Awarded",
                                            "Order Details",
                                        ].map((key) => (
                                            <Nav.Item key={key} onClick={() => setChangeNav(key)}>
                                                <Nav.Link eventKey={key} className={`${Styles.navLink} `}>
                                                    {key
                                                        .split("-")
                                                        .map(
                                                            (word) =>
                                                                word.charAt(0).toUpperCase() + word.slice(1)
                                                        )
                                                        .join(" ")}
                                                </Nav.Link>
                                            </Nav.Item>
                                        ))}
                                    </Nav>
                                </Col>

                                <Col lg={12} md={12} sm={12} xl={12}>
                                    <div className={Styles.tableMainBg}>
                                        {changeNav === "Overview" && <></>}
                                        {changeNav === "Bid Awarded" &&
                                            <div className={`${Styles.typeBg} ${Styles.BidAwardedTableMain} w-100`}>
                                                <CommonTable columns={columns} data={data} />
                                            </div>
                                        }
                                        {changeNav === "Bids Received" && <></>}
                                        {changeNav === "Order Details" &&
                                            <div>
                                                <Row className='gy-4'>
                                                    <Col lg={8} md={12}>
                                                        <Row className='gy-4'>
                                                            <Col lg={12}>
                                                                <div className={Styles.TBDBox}>
                                                                    <h1>TBD with Bhagyesh</h1>
                                                                </div>
                                                            </Col>
                                                            <Col lg={12}>
                                                                <Col md={12}>
                                                                    <div className={`${Styles.typeBg} w-100`}>
                                                                        <Row className='gy-4'>
                                                                            <Col lg={12}>
                                                                                <div className='d-flex gap-3 align-items-center justify-content-between'>
                                                                                    <p className='fw-bold' style={{ fontSize: '18px', color: "#FF6A57" }}>Pickup From</p>
                                                                                    <p className='fs-6' style={{ color: "#707070" }}>Single</p>
                                                                                </div>
                                                                            </Col>
                                                                            <Col lg={12}>
                                                                                <hr className='m-0 p-0' />
                                                                            </Col>
                                                                            <Col lg={4} md={6} sm={12}>
                                                                                <div>
                                                                                    <label className="com-label fw-normal">
                                                                                        Country / Territory
                                                                                    </label>
                                                                                    <div className={Styles.searchInput}>
                                                                                        <Form.Control as="select" className={Styles.selectInput}>
                                                                                            <option>
                                                                                                Saudi Arabia
                                                                                            </option>
                                                                                            <option>
                                                                                                India
                                                                                            </option>
                                                                                        </Form.Control>
                                                                                    </div>
                                                                                </div>
                                                                            </Col>
                                                                            <Col lg={8} md={6} sm={12}>
                                                                                <div>
                                                                                    <label className="com-label fw-normal">
                                                                                        Full Address
                                                                                    </label>
                                                                                    <div className={Styles.searchInput}>
                                                                                        <input type="text" placeholder="Enter Company Email" value="Aisha, Bint Abu Bakr St., Al Badeia’ah Dist , Riyadh - 01-1720017" />
                                                                                        <i className="bi bi-search"></i>
                                                                                    </div>
                                                                                </div>
                                                                            </Col>
                                                                            <Col lg={12}>

                                                                                <div className='position-relative'>
                                                                                    <div className={`${Styles.locationMap} cursor-pointer`}>
                                                                                        <div><i className="bi bi-arrows-fullscreen"></i></div>
                                                                                        <p>PINNED ADDRESS ON MAP</p>
                                                                                    </div>
                                                                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463877.31242950493!2d46.49288193599672!3d24.725455372447055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2sin!4v1722231009093!5m2!1sen!2sin" width="100%" height="70" style={{ border: 0, borderRadius: '10px', marginTop: '30px' }} loading="lazy"></iframe>
                                                                                </div>
                                                                            </Col>
                                                                        </Row>
                                                                    </div>
                                                                </Col>
                                                            </Col>
                                                            <Col lg={12}>
                                                                <Col md={12}>
                                                                    <div className={`${Styles.typeBg} w-100`}>
                                                                        <Row className='gy-4'>
                                                                            <Col lg={12}>
                                                                                <div className='d-flex gap-3 align-items-center'>
                                                                                    <p className='fw-bold' style={{ fontSize: '18px' }}>Consignor Details</p>
                                                                                    <div className={Styles.ConsignorAddress}>
                                                                                        <span>Pick Up Location</span>
                                                                                        <p>Aisha, Bint Abu Bakr St., Al Badeia’ah Dist , Riyadh - 01-1720017</p>
                                                                                    </div>
                                                                                </div>
                                                                            </Col>
                                                                            <Col lg={6} md={6} sm={12}>
                                                                                <div>
                                                                                    <label className="com-label fw-normal">
                                                                                        Company Name
                                                                                    </label>
                                                                                    <div className={Styles.searchInput}>
                                                                                        <input type="text" placeholder="Search Company name" />
                                                                                    </div>
                                                                                </div>
                                                                            </Col>
                                                                            <Col lg={6} md={6} sm={12}>
                                                                                <div>
                                                                                    <label className="com-label fw-normal">
                                                                                        Contact Email
                                                                                    </label>
                                                                                    <div className={Styles.searchInput}>
                                                                                        <input type="text" placeholder="Enter Company Email" />
                                                                                    </div>
                                                                                </div>
                                                                            </Col>
                                                                            <Col lg={6} md={6} sm={12}>
                                                                                <div>
                                                                                    <label className="com-label fw-normal">
                                                                                        Contact Number
                                                                                    </label>
                                                                                    <div className={Styles.searchInput}>
                                                                                        <input type="text" placeholder="Enter Company Contact Number" />
                                                                                    </div>
                                                                                </div>
                                                                            </Col>
                                                                            <Col lg={6} md={6} sm={12}>
                                                                                <div>
                                                                                    <label className="com-label fw-normal">
                                                                                        Contact Person Name
                                                                                    </label>
                                                                                    <div className={Styles.searchInput}>
                                                                                        <input type="text" placeholder="Full Name" />
                                                                                    </div>
                                                                                </div>
                                                                            </Col>
                                                                        </Row>
                                                                    </div>
                                                                </Col>
                                                            </Col>
                                                            <Col lg={12}>
                                                                <Col md={12}>
                                                                    <div className={`${Styles.typeBg} w-100`}>
                                                                        <Row className='gy-4'>
                                                                            <Col lg={12}>
                                                                                <div className='d-flex gap-3 align-items-center justify-content-between'>
                                                                                    <p className='fw-bold' style={{ fontSize: '18px', color: "#FF6A57" }}>Drop off Details</p>
                                                                                    <p className='fs-6' style={{ color: "#707070" }}>Single Point Drop Off</p>
                                                                                </div>
                                                                            </Col>
                                                                            <Col lg={12}>
                                                                                <hr className='m-0 p-0' />
                                                                            </Col>
                                                                            <Col lg={8} md={12}>
                                                                                <div className={Styles.DropOffDetailsText}>
                                                                                    <div>
                                                                                        <p className='fw-bold'>Address</p>
                                                                                        <p>7173 Eastern Ring Branch Rd, King Abdullah Dt., Riyadh 12422, Saudi Arabia</p>
                                                                                    </div>
                                                                                    <div className='d-flex grid gap-5 row-gap-2  flex-wrap'>
                                                                                        <div>
                                                                                            <p className='fw-bold'>Country</p>
                                                                                            <p>Saudi Arabia</p>
                                                                                        </div>
                                                                                        <div>
                                                                                            <p className='fw-bold'>State / Province</p>
                                                                                            <p>Riyadh</p>
                                                                                        </div>
                                                                                        <div>
                                                                                            <p className='fw-bold'>Town/ City</p>
                                                                                            <p>Abdullah Dt.</p>
                                                                                        </div>
                                                                                        <div>
                                                                                            <p className='fw-bold'>Postal / Zip</p>
                                                                                            <p>12422</p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div>
                                                                                        <p className='fw-bold'>Latitude Longitude</p>
                                                                                        <p>24.7176974 / 46.7594279</p>
                                                                                    </div>
                                                                                </div>
                                                                            </Col>
                                                                            <Col lg={4} md={12}>
                                                                                <div className={Styles.DropOffDetailsBox}>
                                                                                    <div className={Styles.DropOffDetailsBoxAvatar}>TM</div>
                                                                                    <h1>Taufik Malikdar</h1>
                                                                                    <div className='d-flex gap-3 align-items-center'>
                                                                                        <i className="bi bi-envelope"></i>
                                                                                        <span>taufik.mallikdar@xyz.com</span>
                                                                                    </div>
                                                                                    <div className='d-flex gap-3 align-items-center'>
                                                                                        <i className="bi bi-telephone"></i>
                                                                                        <span>+966-7023098909</span>
                                                                                    </div>
                                                                                </div>
                                                                            </Col>
                                                                        </Row>
                                                                    </div>
                                                                </Col>
                                                            </Col>
                                                            <Col lg={12}>
                                                                <div className='d-flex justify-content-end'>
                                                                    <ButtonComp text='Create Your Order' onClick={() => setModalShow(true)} />
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                    <Col lg={4} md={12}>
                                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463878.29488595825!2d46.82252880000001!3d24.725191849999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f02bf310de56f%3A0x4cfb2dc47de997ce!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1687342655205!5m2!1sen!2sus" width="100%" height="370" loading="lazy" className={Styles.map}></iframe>
                                                    </Col>
                                                </Row>
                                            </div>
                                        }
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div >
            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                    <div className={Styles.congratulationsModal}>
                        <h1 className='text-center'>Congratulations!! <br />Your order is successfully generated.</h1>
                        <div className={Styles.congratulationsModalBox}>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='d-flex gap-3'>
                                    <div className={Styles.congratulationsModalImage}></div>
                                    <div>
                                        <h5 className='fw-bold'>SAR 9300</h5>
                                        <p>PO_29949009</p>
                                        <span>Road Transport • Date - 23 Jan 2023</span>
                                    </div>
                                </div>
                                <div className='text-end'>
                                    <h5>SAR 9300</h5>
                                    <p style={{ opacity: '50%' }}>7 Days</p>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center gap-2'>
                            <ButtonComp text='Go to Dashboard' className='lightButton' />
                            <ButtonComp text='Thank You' />
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default page
