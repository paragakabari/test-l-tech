"use client";
import React from 'react';
import Styles from "./contractTab.module.css";
import { Col, Container, Nav, Row, Tab, Table } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import { HeroFirst } from '@/Common/heroFirst';
import ContractSideCard from '@/Common/ContractSideCard';
import ContractOverview from '@/Component/contractTabs/ContractOverview';
import ContractPaymentTerms from '@/Component/contractTabs/ContractPaymentTerms';
import ContractRouteOfShipment from '@/Component/contractTabs/ContractRouteOfShipment';
import ContractDocuments from '@/Component/contractTabs/ContractDocuments';

const Page = ({ params: { locale } }) => {
    const router = useRouter();
    const breadcrumb = [
        { text: "Dashboard", link: "/shipper/dashboard" },
        { text: "Contracts", link: '/' },
    ];

    const tabContents = (
        <div>

        </div>
    );
    const terms = [
        { title: 'Terms & Conditions', size: '121 kb' },
        { title: 'Privacy Policy', size: '98 kb' }
    ];

    const handleChatClick = () => {
        console.log('Chat clicked');
    };

    const handleDocumentsClick = () => {
        console.log('Documents clicked');
    };

    const handleViewAllDocs = () => {
        console.log('View all docs clicked');
    };
    return (
        <div className='position-relative'>
            <HeroFirst BoldText='CN_92347_6234' breadcrumb={breadcrumb} onClick={() => router.push(`/${locale}/carrier/orders/contract`)} />
            <Container fluid className={`${Styles.layout} px-5`}>
                <Row className='gy-4'>
                    <Col xxl={2} xl={3} lg={4} md={12} sm={12} className={Styles.proMain}>
                        <ContractSideCard
                            avatar="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            name="Sudais"
                            rfqNumber="RFQ_23_RFQ0001"
                            startDate="15-10-2023"
                            duration="30 DAYS"
                            endDate="15-11-2023"
                            contactName="Mohammad Pakher"
                            contactTitle="Managing Director"
                            email="yusuf.abdul@scs.com"
                            phone="+15148720311"
                            terms={terms}
                            onChatClick={handleChatClick}
                            onDocumentsClick={handleDocumentsClick}
                            viewAllDocs={handleViewAllDocs}
                        />
                    </Col>

                    <Col xxl={10} xl={9} lg={8} md={12} sm={12} className={`empTab ${Styles.empTab}`}>
                        <Tab.Container defaultActiveKey="Overview">
                            <Row>
                                <Col sm={12}>
                                    <Nav variant="underline" className={Styles.tabKey}>
                                        {['Overview', 'Payment Terms', 'Route of Shipment', 'Documents', 'Contract', 'Proposal', 'Active PO’s'].map(key => (
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
                                        <Tab.Pane eventKey="Overview">
                                            <ContractOverview />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="Payment Terms">
                                            <ContractPaymentTerms />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="Route of Shipment">
                                            <ContractRouteOfShipment />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="Documents">
                                            <ContractDocuments />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="Contract">
                                            <h1>Contract</h1>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="Proposal">
                                            <h1>Proposal</h1>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="Active PO’s">
                                            <h1>Active PO’s</h1>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Page;
