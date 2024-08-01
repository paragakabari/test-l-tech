"use client"
import React from 'react'
import Styles from "./contractManagement.module.css"
import { HeroSecond } from '@/Common/heroSecond'
import { Col, Container, Row } from 'react-bootstrap'
import Sidebar from '@/Common/Sidebar'
import ButtonComp from '@/Component/Button'
import { ShipmentChartVertical } from '@/Common/ShipmentChart'
import ContractType from '@/Common/ContractType'
import { ContractsVertical } from '@/Common/Contracts'
import { VendorsCardList } from '@/Common/VendorsCard'
import { useRouter } from 'next/navigation'
export interface Contract {
    id: string;
    shipments: number;
    days: number;
    progress: number;
    daysLeft: number;
}

const contractData: Contract[] = [
    {
        id: 'EPF_2023_COM001_CON_0001',
        shipments: 10,
        days: 60,
        progress: 60,
        daysLeft: 15,
    },
    {
        id: 'EPF_2023_COM001_CON_0001',
        shipments: 8,
        days: 45,
        progress: 80,
        daysLeft: 9,
    },
    {
        id: 'EPF_2023_COM001_CON_0001',
        shipments: 10,
        days: 60,
        progress: 60,
        daysLeft: 15,
    },
    {
        id: 'EPF_2023_COM001_CON_0001',
        shipments: 8,
        days: 45,
        progress: 80,
        daysLeft: 9,
    },
    {
        id: 'EPF_2023_COM001_CON_0001',
        shipments: 10,
        days: 60,
        progress: 60,
        daysLeft: 15,
    },
    {
        id: 'EPF_2023_COM001_CON_0001',
        shipments: 8,
        days: 45,
        progress: 80,
        daysLeft: 9,
    },
];
const Page = ({ params: { locale } }) => {
    const router = useRouter();
    const breadcrumb = [
        { text: 'Dashboard', link: "/carrier/dashboard-second" },
        { text: 'Order Management', link: '/carrier/orders/manageInquiriesSubmissions' },
        { text: 'Contracts', link: '/' },
    ];
    const vendorsData = [
        { src: "https://images.unsplash.com/photo-1717167172109-d4c95ddfa5c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8", text: "SIMS Construction", cid: "#2345234", shipments: 23 },
        { src: "https://images.unsplash.com/photo-1718301166305-421b59a63acf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8", text: "CAT company name", cid: "#2345234", shipments: 18 },
        { src: "https://images.unsplash.com/photo-1718382341271-070ac4697558?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D", text: "XYZ company name", cid: "#2345234", shipments: 18 },
        { src: "https://images.unsplash.com/photo-1718040506078-5a7b90746511?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D", text: "CAT company name", cid: "#2345234", shipments: 18 },
        { src: "https://images.unsplash.com/photo-1717167172109-d4c95ddfa5c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8", text: "SIMS Construction", cid: "#2345234", shipments: 23 },
        { src: "https://images.unsplash.com/photo-1718301166305-421b59a63acf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8", text: "CAT company name", cid: "#2345234", shipments: 18 },
        { src: "https://images.unsplash.com/photo-1718382341271-070ac4697558?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D", text: "XYZ company name", cid: "#2345234", shipments: 18 },
        { src: "https://images.unsplash.com/photo-1718040506078-5a7b90746511?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D", text: "CAT company name", cid: "#2345234", shipments: 18 },
    ];
    return (
        <div className='position-relative'>
            <HeroSecond BoldText='Manage Contracts' breadcrumb={breadcrumb} />
            <Container fluid className={`${Styles.layout} px-5`}>
                <Row>
                    <Col xxl={2}>
                        <Sidebar locale={locale} />
                    </Col>
                    <Col xxl={10} xl={12} lg={12} md={12} sm={12} className={Styles.layoutSecond}>
                        <Row className='gy-4'>
                            <Col xl={12} lg={12} md={12} sm={12}>
                                <div className='d-flex justify-content-end gap-2 w-100'>
                                    <ButtonComp text='New Contract' />
                                </div>
                            </Col>
                            <Col lg={12}>
                                <Row className='gy-4'>
                                    <Col xxl={7} xl={7} lg={6} md={12} sm={12}>
                                        <ShipmentChartVertical onClick={() => router.push(`/${locale}/carrier/workspace/contractLists`)} />
                                    </Col>
                                    <Col xxl={5} xl={5} lg={6} md={12} sm={12}>
                                        <ContractType />
                                    </Col>
                                    <Col xxl={8} xl={8} lg={6} md={12} sm={12}>
                                        <ContractsVertical contractData={contractData} AddNew={`/${locale}/carrier/workspace/contractLists`} onClick={() => router.push(`/${locale}/carrier/orders/contractOverview`)} />
                                    </Col>
                                    <Col xxl={4} xl={4} lg={6} md={12} sm={12}>
                                        <VendorsCardList data={vendorsData} onClick={() => router.push(`/${locale}/carrier/orders/contractOverview`)} />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Page