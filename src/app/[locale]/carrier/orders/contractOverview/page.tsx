"use client";
import React from 'react';
import Styles from "./contractOverview.module.css";
import { Col, Container, Nav, Row, Tab, Table } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import ButtonComp from '@/Component/Button';
import { HeroFirst } from '@/Common/heroFirst';
import { ContractsCard } from '@/Common/ProfileCard';

const Page = ({ params: { locale } }) => {
    const router = useRouter();
    const breadcrumb = [
        { text: "Dashboard", link: "/carrier/dashboard-second" },
        { text: "Order Management", link: '/carrier/orders/manageInquiriesSubmissions' },
        { text: "Contracts", link: '/' }
    ];

    const profileData = {
        logoSrc: "https://images.unsplash.com/photo-1565891741441-64926e441838?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        contractCode: "EPS-356",
        companyName: "SIM Constructions",
        industry: "Electronic Components and Supplies",
        status: "ACTIVE",
        contactName: "Samera Hamed",
        contactInitials: "SH",
        contactPhone: "+966112401777",
        address: "7173 Eastern Ring Branch Rd, King Abdullah Dt., Riyadh 12422, Saudi Arabia",
        additionalPhone: "+15148720311",
        email: "info@scs.com",
        website: "www.scsl.com",
        additionalLocation: "London, UK"
    };

    const tabContents = (
        <div>

        </div>
    );

    return (
        <div className='position-relative'>
            <HeroFirst BoldText='EPF-2023-COM001-CON_0001' breadcrumb={breadcrumb} action={true} onClick={() => router.push(`/${locale}/carrier/orders/contract`)} />
            <Container fluid className={`${Styles.layout} px-5`}>
                <Row className='gy-4'>
                    <Col xxl={2} xl={3} lg={4} md={12} sm={12} className={Styles.proMain}>
                        <ContractsCard {...profileData} />
                    </Col>

                    <Col xxl={10} xl={9} lg={8} md={12} sm={12} className={`empTab ${Styles.empTab}`}>
                        <Tab.Container defaultActiveKey="overview">
                            <Row>
                                <Col sm={12}>
                                    <Nav variant="underline" className={Styles.tabKey}>
                                        {['overview', 'services', 'description', 'data-Files', 'payment-terms', 'proposal', 'cost-card'].map(key => (
                                            <Nav.Item key={key}>
                                                <Nav.Link eventKey={key} className={Styles.navLink}>{key.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</Nav.Link>
                                            </Nav.Item>
                                        ))}
                                    </Nav>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={12}>
                                    <div className={Styles.tabContainer}>
                                        <Tab.Content>
                                            {['overview', 'services', 'description', 'data-Files', 'payment-terms', 'proposal', 'cost-card'].map(key => (
                                                <Tab.Pane eventKey={key} key={key}>
                                                    {tabContents}
                                                </Tab.Pane>
                                            ))}
                                        </Tab.Content>
                                    </div>
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
