"use client"
import React, { useState } from 'react'
import Styles from "./createNewInquirySpsd.module.css"
import { HeroThree } from '@/Common/HeroThree'
import { Col, Container, Modal, Nav, Row } from 'react-bootstrap'
import ButtonComp from '@/Component/Button'
import { useRouter } from 'next/navigation'
import Location from '@/Component/createNewInquirySpsdComponent/Location'
import Shipment from '@/Component/createNewInquirySpsdComponent/Shipment'
import Consignment from '@/Component/createNewInquirySpsdComponent/Consignment'
import Package from '@/Component/createNewInquirySpsdComponent/Package'
import Service from '@/Component/createNewInquirySpsdComponent/Service'
import Documents from '@/Component/createNewInquirySpsdComponent/Documents'
import Carriers from '@/Component/createNewInquirySpsdComponent/Carriers'

const Page = ({ params: { locale } }) => {
    const [changeNav, setChangeNav] = useState("Location");
    const [privateInquiryModalShow, setPrivateInquiryModalShow] = useState(false);
    const [publicInquiryModalShow, setPublicInquiryModalShow] = useState(false);
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
    return (
        <div className='position-relative'>
            <div className={Styles.secondDashBoard}>
                <HeroThree BoldText='Create New Inquiry' breadcrumb={breadcrumb} />
                <Container fluid className={`${Styles.layout} px-5`}>
                    <Row className='gy-4'>
                        <Col sm={12} className={`empTab ${Styles.empTab}`}>
                            <Nav variant="underline" className={Styles.tabKey}>
                                {[
                                    "Location",
                                    "Shipment",
                                    "Consignment",
                                    "Package",
                                    "Service",
                                    "Documents",
                                    "Carriers",
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
                        <Col sm={12}>
                            <Row className='gy-4'>
                                <Col sm={12} lg={9}>
                                    {changeNav === "Location" && <Location />}
                                    {changeNav === "Shipment" && <Shipment />}
                                    {changeNav === "Consignment" && <Consignment />}
                                    {changeNav === "Package" && <Package />}
                                    {changeNav === "Service" && <Service />}
                                    {changeNav === "Documents" && <Documents />}
                                    {changeNav === "Carriers" && <Carriers privateInquiryOnClick={() => setPrivateInquiryModalShow(true)} publicInquiryOnClick={() => setPublicInquiryModalShow(true)} />}
                                </Col>
                                <Col sm={12} lg={3} className='d-flex'>
                                    <div className={Styles.newInqSide}>
                                        <h1>New Inquiry</h1>
                                        <p>AS-2023-COM001-RFQ_0001</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Modal
                show={privateInquiryModalShow}
                onHide={() => setPrivateInquiryModalShow(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body className={Styles.inquiryModals}>
                    <h1>Your Inquiry <br /><span>AS-2023-COM001-RFQ_0001</span><br /> has been posted publicly for carriers to see.</h1>
                    <p>
                        Thanks !
                    </p>
                    <div className='d-flex gap-3 justify-content-center flex-wrap'>
                        <ButtonComp text='View RFPs' className='lightButton' />
                        <ButtonComp text='Great goto Dashboard' onClick={() => router.push(`/${locale}/shipper/e-ProcureFrieght`)} />
                    </div>
                </Modal.Body>
            </Modal>
            <Modal
                show={publicInquiryModalShow}
                onHide={() => setPublicInquiryModalShow(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body className={Styles.inquiryModals}>
                    <h1>  Your Inquiry <br /><span>AS-2023-COM001-RFQ_0001</span> <br /> has been shared with selected carriers to respond.</h1>
                    <p>
                        We will keep you posted for every update from carrier. Thanks!
                    </p>
                    <div className={Styles.modalTrackCard}>
                        <div>
                            <small>Sabt Aljarah</small>
                            <h6>06, Sabt Aljarah 85486</h6>
                        </div>
                        <span></span>
                        <div className='text-end'>
                            <small>Green Duba ,Jeddah</small>
                            <h6>Multiple Locations</h6>
                        </div>
                    </div>
                    <div className='d-flex gap-3 justify-content-center flex-wrap'>
                        <ButtonComp text='View Inquiry' className='lightButton' />
                        <ButtonComp text='Great goto Dashboard' onClick={() => router.push(`/${locale}/shipper/e-ProcureFrieght`)} />
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Page