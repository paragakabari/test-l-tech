"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Col, Container, Row } from 'react-bootstrap';
import Styles from "./inquiriesSubmissions.module.css";
import ButtonComp from '@/Component/Button';
import CommonTable from '@/Component/CommonTable';
import SubmissionsCard from '@/Common/SubmissionsCard';
import { HeroThree } from '@/Common/HeroThree';
import { InquiriesReceivedCard } from '@/Common/InquiriesReceivedCard';

const Page = ({ params: { locale } }) => {
    const router = useRouter();
    const [cardView, setCardView] = useState(false);

    const breadcrumb = [
        { text: "Dashboard", link: "/carrier/dashboard-second" },
        { text: "Order Management", link: '/carrier/orders/manageInquiriesSubmissions' },
        { text: "Inquiries / Submissions", link: '/' }
    ];

    const data = [
        { id: 1, pickup: 'Al-Nasr Street, Riyadh', dropoff: 'King Fahd Road, Jeddah', itemType: 'Package', weight: '400 kg', dimensions: '10*8*12', quantity: 9 },
        { id: 2, pickup: 'Al-Nasr Street, Riyadh', dropoff: 'King Fahd Road, Jeddah', itemType: 'Package', weight: '300 kg', dimensions: '10*8*12', quantity: 7 },
        { id: 3, pickup: 'Al-Nasr Street, Riyadh', dropoff: 'King Fahd Road, Jeddah', itemType: 'Package', weight: '600 kg', dimensions: '10*8*12', quantity: 7 },
        { id: 4, pickup: 'Al-Nasr Street, Riyadh', dropoff: 'King Fahd Road, Jeddah', itemType: 'Package', weight: '400 kg', dimensions: '10*8*12', quantity: 9 },
        { id: 5, pickup: 'Al-Nasr Street, Riyadh', dropoff: 'King Fahd Road, Jeddah', itemType: 'Chair', weight: '600 kg', dimensions: '10*8*12', quantity: 8 },
        { id: 6, pickup: 'Al-Nasr Street, Riyadh', dropoff: 'King Fahd Road, Jeddah', itemType: 'Engine', weight: '900 kg', dimensions: '10*8*12', quantity: 8 },
        { id: 7, pickup: 'Al-Nasr Street, Riyadh', dropoff: 'King Fahd Road, Jeddah', itemType: 'Chair', weight: '500 kg', dimensions: '10*8*12', quantity: 9 },
    ];

    const columns = [
        { label: 'Pickup', key: 'pickup' },
        { label: 'Drop-Off', key: 'dropoff' },
        { label: 'Item Type', key: 'itemType' },
        { label: 'Weight', key: 'weight' },
        { label: 'Dimensions', key: 'dimensions', className: 'fw-bold' },
        { label: 'Quantity', key: 'quantity', className: 'fw-bold' },
        {
            label: 'Actions',
            key: 'actions',
            render: (value, row) => (
                <div className={Styles.actionButtons}>
                    <div className={Styles.actionButton} style={{ color: "#4586EE" }}>
                        <i className="bi bi-eye-fill"></i>
                    </div>
                    <div className={Styles.actionButton} style={{ color: "#3DBF88" }}>
                        <i className="bi bi-send-fill"></i>
                    </div>
                </div>
            )
        },
    ];

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
            imageUrl: "/networking.png",
            cardType: "TOTAL"
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
            imageUrl: "/networking.png",
            cardType: "TOTAL"
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
            imageUrl: "/networking.png",
            cardType: "TOTAL"
        },
    ];

    const submitted = [
        {
            inquiryId: "#INQ_38_233432",
            date: "13 Jul 2023",
            time: "3:37 AM",
            location1: "Al-Nasr Street Riyadh",
            location2: "King Fahd Road Jeddah",
            weight: "400 KG",
            dimensions: "10*8*12",
            quantity: "09",
            imageUrl: "/networking.png",
            cardType: "SUBMITTED"
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
            imageUrl: "/networking.png",
            cardType: "SUBMITTED"
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
            imageUrl: "/networking.png",
            cardType: "SUBMITTED"
        },
    ];

    const pending = [
        {
            inquiryId: "#INQ_38_233432",
            date: "13 Jul 2023",
            time: "3:37 AM",
            location1: "Al-Nasr Street Riyadh",
            location2: "King Fahd Road Jeddah",
            weight: "400 KG",
            dimensions: "10*8*12",
            quantity: "09",
            imageUrl: "/networking.png",
            cardType: "PENDING"
        },
    ];

    const requested = [
        {
            inquiryId: "#INQ_38_233432",
            date: "13 Jul 2023",
            time: "3:37 AM",
            location1: "Al-Nasr Street Riyadh",
            location2: "King Fahd Road Jeddah",
            weight: "400 KG",
            dimensions: "10*8*12",
            quantity: "09",
            imageUrl: "/networking.png",
            cardType: "REQUESTED",
        },
    ];
    const awarded = [
        {
            inquiryId: "#INQ_38_233432",
            date: "13 Jul 2023",
            time: "3:37 AM",
            location1: "Al-Nasr Street Riyadh",
            location2: "King Fahd Road Jeddah",
            weight: "400 KG",
            dimensions: "10*8*12",
            quantity: "09",
            imageUrl: "/networking.png",
            cardType: "REQUESTED",
        },
    ];

    const renderInquiriesSection = (title, inquiries) => (
        <div className='d-block'>
            <p className={Styles.inquiriesSubmissionsTitle}>{title}</p>
            <div className={Styles.inquiriesSubmissionsCol}>
                {inquiries.map((inquiry, index) => (
                    <div key={index}>
                        <InquiriesReceivedCard {...inquiry} blueButton={Styles.blueButton} onSendProposal={() => router.push(`/${locale}/carrier/orders/SendProposal`)} />
                    </div>
                ))}
            </div>
        </div>
    );

    const renderSubmissionsCards = () => (
        <>
            <Col lg={2} md={4} sm={6} className='d-flex'>
                <SubmissionsCard cardColor="#fff" bgColor1="#FF6A57" bgColor2="#FDBA77" number={12} text='Total Inquiries' borderUnset="unset" icon='<i class="bi bi-list-check"></i>' />
            </Col>
            <Col lg={2} md={4} sm={6} className='d-flex'>
                <SubmissionsCard cardColor="#0EBC93" number={10} text='Total Submissions' icon='<i class="bi bi-clipboard2-check-fill"></i>' />
            </Col>
            <Col lg={2} md={4} sm={6} className='d-flex'>
                <SubmissionsCard cardColor="#FFB74B" number={4} text='Pending' icon='<i class="bi bi-clock-fill"></i>' />
            </Col>
            <Col lg={2} md={4} sm={6} className='d-flex'>
                <SubmissionsCard cardColor="#4586EE" number={4} text='Request For Requote' icon='<i class="bi bi-sign-turn-slight-left-fill"></i>' />
            </Col>
            <Col lg={2} md={4} sm={6} className='d-flex'>
                <SubmissionsCard cardColor="#359B70" number={0} text='Awarded' icon='<i class="bi bi-hand-thumbs-up-fill"></i>' />
            </Col>
            <Col lg={2} md={4} sm={6} className='d-flex'>
                <SubmissionsCard cardColor="#FF6A57" number={2} text='Rejected' icon='<i class="bi bi-x-circle-fill"></i>' />
            </Col>
        </>
    );

    return (
        <div className='position-relative'>
            <HeroThree BoldText='Inquiries/ Submissions' breadcrumb={breadcrumb} />
            <Container fluid className={`${Styles.layout} px-5`}>
                <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} className={Styles.layoutSecond}>
                        <Row className='gy-4'>
                            {cardView ? (
                                <>
                                    <Col lg={12}>
                                        <div className='d-flex justify-content-end gap-2 w-100'>
                                            <ButtonComp text='List View' className={`${Styles.whiteOutlineButton} outlineButton`} onClick={() => setCardView(false)} />
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                        <div className={Styles.inquiriesSubmissions}>
                                            {renderInquiriesSection('Total Inquires (06)', inquiries)}
                                            {renderInquiriesSection('Submitted (04)', submitted)}
                                            {renderInquiriesSection('Pending (01)', pending)}
                                            {renderInquiriesSection('Requested For Requote (02)', requested)}
                                            {renderInquiriesSection('Awarded (0)', awarded)}
                                        </div>
                                    </Col>
                                </>
                            ) : (
                                <>
                                    <Col lg={12}>
                                        <div className='d-flex justify-content-end gap-2 w-100'>
                                            <ButtonComp text='Compact View' className={`${Styles.whiteOutlineButton} outlineButton`} onClick={() => setCardView(true)} />
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                        <Row className='gy-4'>
                                            {renderSubmissionsCards()}
                                            <Col lg={12}>
                                                <div className={Styles.tableMainBg}>
                                                    <div className={`d-flex w-100 justify-content-between align-items-center mb-4 ${Styles.tblHeader}`}>
                                                        <div className={`d-flex gap-2 w-100 ${Styles.SearchInputMain}`}>
                                                            <input className={Styles.SearchInput} placeholder="Search product by name, id, category" />
                                                            <div className={Styles.filterButton}>
                                                                <p>Filter</p>
                                                                <i className="bi bi-filter"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={Styles.IsTbl}>
                                                        <CommonTable columns={columns} data={data} />
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>
                                </>
                            )}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Page;
