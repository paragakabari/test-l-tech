"use client"
import { HeroSecond } from '@/Common/heroSecond'
import Sidebar from '@/Common/Sidebar'
import ButtonComp from '@/Component/Button'
import React, { useState } from 'react'
import { Col, Container, Modal, Nav, Row } from 'react-bootstrap'
import Styles from "./managePOs.module.css"
import { useRouter } from 'next/navigation'
import Total from '@/Component/publishedInquiresTabs/Total'

const page = ({ params: { locale } }) => {
    const [modalShow, setModalShow] = React.useState(false);
    const breadcrumb = [
        {
            'text': "Dashboard",
            'link': "/shipper/dashboard"
        },
        {
            'text': "Order Management",
            'link': '/'
        },
        {
            'text': "Manage PO’s",
            'link': '/'
        },
    ];

    const router = useRouter();

    const [changeNav, setChangeNav] = useState("All Active Po’s");


    return (
        <div className='position-relative'>
            <div className={Styles.secondDashBoard}>
                <HeroSecond BoldText='Manage POs' breadcrumb={breadcrumb} />
                <Container fluid className={Styles.layout + " px-5"}>
                    <Row>
                        <Col xxl={2} xl={0} lg={0} md={0} sm={0}>
                            <Sidebar locale={locale} shipper={true} />
                        </Col>
                        <Col xxl={10} xl={12} lg={12} md={12} sm={12} className={`${Styles.layoutSecond} ${Styles.publishedInquires}`}>
                            <Row className="gy-4">
                                <Col lg={12}>
                                    <div className='d-flex justify-content-end gap-2 w-100'>
                                        <ButtonComp text='Crete New PO' onClick={() => router.push(`/${locale}/shipper/orderManagement/createNewPO`)} />
                                    </div>
                                </Col>
                                <Col lg={12} className={`empTabPublishedInquires ${Styles.empTabPublishedInquires}`}>
                                    <Nav variant="underline" className={Styles.tabKey}>
                                        {[
                                            "All Active Po’s",
                                            "Pending",
                                            "Invoice Raised",
                                            "Drafts",
                                            "Discarded",
                                            "Revised",
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
                                        {changeNav === "All Active Po’s" && <Total />}
                                        {changeNav === "Pending" && <></>}
                                        {changeNav === "Invoice Raised" && <></>}
                                        {changeNav === "Drafts" && <></>}
                                        {changeNav === "Discarded" && <></>}
                                        {changeNav === "Revised" && <></>}
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div >
            <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={modalShow}
                onHide={() => setModalShow(false)}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <div className={`${Styles.warehouseDeleteModalHeader} p-2`}>
                            <h1>Delete Inquiries</h1>
                            <p>Are you sure you want to delete the information</p>
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className={`${Styles.warehouseDeleteModalBody} p-2 pb-5`}>
                        <div className='mb-2 pb-0' style={{ fontSize: "12px", fontWeight: 500 }}>Choose Reason for Deleting</div>
                        <select className="form-control selectBox">
                            <option value="">Order got cancelled</option>
                            <option value="">Option 1</option>
                            <option value="">Option 2</option>
                            <option value="">Option 3</option>
                        </select>
                    </div>
                    <div className='d-flex w-100 justify-content-between p-2 pt-5'>
                        <ButtonComp className="outlineButton" text="Yes, Delete it!" />
                        <ButtonComp text="Don't, Delete it!" />
                    </div>
                </Modal.Body>
            </Modal>

        </div>
    )
}

export default page
