"use client"

import ButtonComp from '@/Component/Button'
import React, { useState } from 'react'
import { Col, Container, Modal, Nav, Row } from 'react-bootstrap'
import Styles from "./publishedInquiresOverview.module.css"
import { useRouter } from 'next/navigation'
import { HeroThree } from '@/Common/HeroThree'
import Overview from '@/Component/publishedInquiresOverviewTab/Overview'
import BidsReceived from '@/Component/publishedInquiresOverviewTab/BidsReceived'
import BidAwarded from '@/Component/publishedInquiresOverviewTab/BidAwarded'

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

    const [changeNav, setChangeNav] = useState("Overview");


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
                                        <ButtonComp text='Edit Inquiry' onClick={() => router.push(`/${locale}/shipper/FreightManagement/bidsPublished`)} />
                                        <div className={Styles.overActionButton}>
                                            <i className="bi bi-three-dots"></i>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={12} className={`empTabPublishedInquires ${Styles.empTabPublishedInquires}`}>
                                    <Nav variant="underline" className={Styles.tabKey}>
                                        {[
                                            "Overview",
                                            "Bids Received",
                                            "Bid Awarded",
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
                                        {changeNav === "Overview" && <Overview />}
                                        {changeNav === "Bid Awarded" && <BidAwarded />}
                                        {changeNav === "Bids Received" && <BidsReceived onClick={() => router.push(`/${locale}/shipper/FreightManagement/bidsPublished`)} />}

                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div >

        </div>
    )
}

export default page
