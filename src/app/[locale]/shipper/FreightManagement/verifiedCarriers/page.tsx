"use client"
import { HeroSecond } from '@/Common/heroSecond'
import Sidebar from '@/Common/Sidebar'
import ButtonComp from '@/Component/Button'
import React, { useState } from 'react'
import { Col, Container, Modal, Nav, Row } from 'react-bootstrap'
import Styles from "./verifiedCarriers.module.css"
import { useRouter } from 'next/navigation'
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
            'text': "Verified Carriers",
            'link': '/'
        },
    ];

    const router = useRouter();

    const [changeNav, setChangeNav] = useState("Total");

    const data = [
        { carrierName: 'ILS logistics Pvt. Ltd.', shipment: '2 Shipments', cost: '14,530 SAR', image: "https://images.unsplash.com/photo-1473445730015-841f29a9490b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { carrierName: 'DHL logistics Pvt. Ltd.', shipment: '6 Shipments', cost: '14,530 SAR', image: "https://i.pinimg.com/736x/5f/f0/86/5ff0863ee36927c504e2e8a46657763e.jpg" },
        { carrierName: 'Uniworld logistics Pvt. Ltd.', shipment: '2 Shipments', cost: '14,530 SAR', image: 'https://images.unsplash.com/photo-1620288627223-53302f4e8c74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZ2lzdGljcyUyMGxvZ298ZW58MHx8MHx8fDA%3D' },
        { carrierName: 'Kerry logistics Pvt. Ltd.', shipment: '2 Shipments', cost: '14,530 SAR', image: "https://images.unsplash.com/photo-1619454016518-697bc231e7cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZ2lzdGljcyUyMGxvZ298ZW58MHx8MHx8fDA%3D" },
        { carrierName: 'ILS logistics Pvt. Ltd.', shipment: '2 Shipments', cost: '14,530 SAR', image: 'https://images.unsplash.com/photo-1617566347924-ad5ebdaa014e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxvZ2lzdGljcyUyMGxvZ298ZW58MHx8MHx8fDA%3D' },
        { carrierName: 'ILS logistics Pvt. Ltd.', shipment: '2 Shipments', cost: '14,530 SAR' },
    ];

    const columns = [
        {
            label: '',
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
            label: '',
            key: 'shipment',
            render: (value: any, row: any) => (
                <span className={Styles.createdOn}>{value}</span>
            ),
        },
        {
            label: '',
            key: 'cost',
            render: (value: any, row: any) => (
                <span className={Styles.createdOn}>{value}</span>
            ),
        },
    ];
    return (
        <div className='position-relative'>
            <div className={Styles.secondDashBoard}>
                <HeroSecond BoldText='Verified Carriers' breadcrumb={breadcrumb} />
                <Container fluid className={Styles.layout + " px-5"}>
                    <Row>
                        <Col xxl={2} xl={0} lg={0} md={0} sm={0}>
                            <Sidebar locale={locale} shipper={true} />
                        </Col>
                        <Col xxl={10} xl={12} lg={12} md={12} sm={12} className={`${Styles.layoutSecond} ${Styles.publishedInquires}`}>
                            <Row className="gy-4">
                                <Col lg={12}>
                                    <div className='d-flex justify-content-end gap-2 w-100'>
                                        <ButtonComp text='Invite Carriers' />
                                    </div>
                                </Col>
                                <Col lg={12} >
                                    <div className={Styles.VerifiedCarriers}>
                                        <Row className='gy-4'>
                                            <Col lg={3} md={12}>
                                                <Row className='gy-4'>
                                                    <Col lg={6} md={6} className='d-flex'>
                                                        <div className={Styles.VerifiedCarriersCards} style={{ backgroundColor: '#FF6A5710' }}>
                                                            <h1>08</h1>
                                                            <p>Carriers<br /> Verified</p>
                                                        </div>
                                                    </Col>
                                                    <Col lg={6} md={6} className='d-flex'>
                                                        <div className={Styles.VerifiedCarriersCards} style={{ backgroundColor: '#5284D310' }}>
                                                            <h1>16</h1>
                                                            <p>Total<br /> Shippments</p>
                                                        </div>
                                                    </Col>
                                                    <Col md={12} className='d-flex'>
                                                        <div className={Styles.VerifiedCarriersCards} style={{ backgroundColor: '#077B9010' }}>
                                                            <h1>34.67K</h1>
                                                            <p>Total Payments for Shippments</p>
                                                        </div>
                                                    </Col>
                                                    <Col md={12} className='d-flex'>
                                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463878.29488595825!2d46.82252880000001!3d24.725191849999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2sin!4v1720781020386!5m2!1sen!2sin" width="100%" height="170" style={{ border: 0, borderRadius: '20px' }}></iframe>
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col lg={9} md={12}>
                                                <div className={`d-flex gap-2 ${Styles.SearchInputMain}`}>
                                                    <input className={Styles.SearchInput} placeholder="Search product by name, id, category" />
                                                    <div className={Styles.filterButton}>
                                                        <p>Filter</p>
                                                        <i className="bi bi-filter"></i>
                                                    </div>
                                                </div>
                                                <CommonTable columns={columns} data={data} />
                                            </Col>
                                        </Row>
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
