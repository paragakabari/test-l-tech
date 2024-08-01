"use client";
import React, { useState } from 'react';
import Styles from "./contractTab.module.css";
import { Col, Container, Nav, Row, Tab, Table } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import { HeroFirst } from '@/Common/heroFirst';
import ContractDetails from './CreateNewPOTabs/ContractDetails';
import PaymentTerms from './CreateNewPOTabs/PaymentTerms';
import ContentTab from './CreateNewPOTabs/ContentTab';
import PreviewSign from './CreateNewPOTabs/PreviewSign';


const Page = ({ params: { locale } }) => {
    const router = useRouter();

    const breadcrumb = [
        { text: "Dashboard", link: "/shipper/dashboard" },
        { text: "Order Management", link: '/' },
        { text: "Manage PO’s", link: '/' },
    ];


    return (
        <div className='position-relative'>
            <HeroFirst BoldText='Create New PO' breadcrumb={breadcrumb} onClick={() => router.push(`/${locale}/carrier/orders/contract`)} />
            <Container fluid className={`${Styles.layout} px-5`}>
                <Row className='gy-4'>
                    <Col xxl={10} xl={9} lg={8} md={12} sm={12} className={`empTab ${Styles.empTab}`}>
                        <Tab.Container defaultActiveKey="Overview">
                            <Row>
                                <Col sm={12}>
                                    <Nav variant="underline" className={Styles.tabKey}>
                                        {['Contract Details', 'Payment Terms', 'Content', 'Preview & Sign'].map(key => (
                                            <Nav.Item key={key}>
                                                <Nav.Link eventKey={key} className={Styles.navLink}>{key.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</Nav.Link>
                                            </Nav.Item>
                                        ))}
                                    </Nav>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={12} className='mt-4'>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="Contract Details" defaultValue="Contract Details" >
                                            <ContractDetails />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="Payment Terms">
                                            <PaymentTerms />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="Content">
                                            <ContentTab />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="Preview & Sign">
                                            <PreviewSign />
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </Col>
                    <Col xxl={2} xl={3} lg={4} md={12} sm={12} className='d-flex'>
                        <div className={Styles.OrderSideBar}>
                            <div className={Styles.OrderSideBarText}>
                                <p className='fs-6 fw-medium mb-2'>Order_1728</p>
                                <div className='d-flex gap-2 align-items-center mb-2'>
                                    <small>Posted on </small>
                                    <p className='fs-6 fw-medium'>15 May 2023</p>
                                </div>
                                <div className='d-flex gap-2 align-items-center mb-2'>
                                    <i className="bi bi-geo-alt-fill"></i>
                                    <h5>Jeddah</h5>
                                </div>
                                <h5 className='fw-light mb-2'>Marketplace - e-Procure</h5>
                                <div className={Styles.FragileTag}>Fragile</div>
                                <h1 className='mt-5'>12 ORDERS <p className='fs-6 fw-light'>SELECTED FOR PO</p></h1>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div >
    );
}

export default Page;
