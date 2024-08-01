"use client";
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import { HeroSecond } from '@/Common/heroSecond';
import Sidebar from '@/Common/Sidebar';
import ContractsCard from '@/Common/ContractsCard';
import PackageTypeInquiryChart from '@/Common/PackageTypeInquiryChart';
import ButtonComp from '@/Component/Button';

import Styles from './dashboard.module.css';
import { InquiriesReceivedCard } from '@/Common/InquiriesReceivedCard';

const Page = ({ params: { locale } }) => {
    const router = useRouter();
    const breadcrumb = [
        { text: "Dashboard", link: "/carrier/dashboard-second" },
        { text: "Order Management", link: '/carrier/orders/manageInquiriesSubmissions' }
    ];

    const handleFilterRequest = () => {
        router.push(`/${locale}/carrier/workspace/addUser`);
    };

    const inquiries = [
        {
            inquiryId: "#INQ_38_233432",
            date: "13 Jul 2023",
            time: "3:37 AM",
            location1: "Al-Nasr Street Riyadh",
            location2: "King Fahd Road Jeddah",
            weight: "400 KG",
            dimensions: "10*8*12",
            quantity: "09",
            imageUrl: "/networking.png"
        },
        {
            inquiryId: "#INQ_38_233432",
            date: "13 Jul 2023",
            time: "3:37 AM",
            location1: "Al-Nasr Street Riyadh",
            location2: "King Fahd Road Jeddah",
            weight: "400 KG",
            dimensions: "10*8*12",
            quantity: "09",
            imageUrl: "/networking.png"
        },
        {
            inquiryId: "#INQ_38_233432",
            date: "13 Jul 2023",
            time: "3:37 AM",
            location1: "Al-Nasr Street Riyadh",
            location2: "King Fahd Road Jeddah",
            weight: "400 KG",
            dimensions: "10*8*12",
            quantity: "09",
            imageUrl: "/networking.png"
        },
        {
            inquiryId: "#INQ_38_233432",
            date: "13 Jul 2023",
            time: "3:37 AM",
            location1: "Al-Nasr Street Riyadh",
            location2: "King Fahd Road Jeddah",
            weight: "400 KG",
            dimensions: "10*8*12",
            quantity: "09",
            imageUrl: "/networking.png"
        },
        {
            inquiryId: "#INQ_38_233432",
            date: "13 Jul 2023",
            time: "3:37 AM",
            location1: "Al-Nasr Street Riyadh",
            location2: "King Fahd Road Jeddah",
            weight: "400 KG",
            dimensions: "10*8*12",
            quantity: "09",
            imageUrl: "/networking.png"
        },
        {
            inquiryId: "#INQ_38_233432",
            date: "13 Jul 2023",
            time: "3:37 AM",
            location1: "Al-Nasr Street Riyadh",
            location2: "King Fahd Road Jeddah",
            weight: "400 KG",
            dimensions: "10*8*12",
            quantity: "09",
            imageUrl: "/networking.png"
        },
    ];

    return (
        <div className='position-relative'>
            <HeroSecond BoldText='Manage Inquiries/ Submissions' breadcrumb={breadcrumb} />
            <Container fluid className={`${Styles.layout} px-5`}>
                <Row>
                    <Col xxl={2} xl={0} lg={0} md={0} sm={0}>
                        <Sidebar locale={locale} />
                    </Col>
                    <Col xxl={10} xl={12} lg={12} md={12} sm={12} className={Styles.layoutSecond}>
                        <Row className='gy-4'>
                            <Col xl={12} lg={12} md={12} sm={12}>
                                <div className='d-flex justify-content-end gap-2 w-100'>
                                    <ButtonComp text='Filter Request' onClick={handleFilterRequest} />
                                </div>
                            </Col>
                            <Col xxl={12}>
                                <Row className='gy-4'>
                                    <Col xl={5} lg={6} md={12} className='d-flex'>
                                        <ContractsCard onClick={() => router.push(`/${locale}/carrier/orders/inquirieSubmissions`)} />
                                    </Col>
                                    <Col xl={5} lg={6} md={12} className='d-flex'>
                                        <PackageTypeInquiryChart />
                                    </Col>
                                    <Col xl={2} lg={12} md={12}>
                                        <div className='d-flex gap-4 flex-wrap'>
                                            <div className={Styles.smallCard}>
                                                <div className='d-flex justify-content-between align-items-center'>
                                                    <h1>07</h1>
                                                    <i className="bi bi-clipboard2-check-fill"></i>
                                                </div>
                                                <p>Proposals Sent</p>
                                            </div>
                                            <div className={Styles.smallCard} style={{ background: '#39CE8B', color: "#fff" }}>
                                                <div className='d-flex justify-content-between align-items-center'>
                                                    <h1>07</h1>
                                                    <i className="bi bi-star-fill" style={{ color: "#fff" }}></i>
                                                </div>
                                                <p>Awarded</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={12} lg={12} md={12}>
                                        <h1 className={Styles.comTitle}>Inquiries Received</h1>
                                    </Col>
                                    {inquiries.map((inquiry, index) => (
                                        <Col key={index} xl={4} lg={6} md={6} sm={12}>
                                            <InquiriesReceivedCard {...inquiry} onSendProposal={() => router.push(`/${locale}/carrier/orders/SendProposal`)} />
                                        </Col>
                                    ))}
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Page;
