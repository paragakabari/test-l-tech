"use client";
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Styles from "./dashboard-second.module.css";
import { HeroFirst } from '@/Common/heroFirst';
import AddCard from '@/Common/AddCard';
import OrderCard from '@/Common/OrderCard';
import PublicInquires from '@/Common/publicInquires';
import { InvitationsReceivedCard } from '@/Common/InvitationsReceivedCard';
import RfqCard from '@/Common/RfqCard';
import RfqChartCard from '@/Common/RfqChartCard';
import Notification from '@/Common/Notification';
import Fleets from '@/Common/Fleets';
import { Contracts } from '@/Common/Contracts';
import Drivers from '@/Common/Drivers';
import TrackShippments from '@/Common/TrackShippments';
import { ShipmentChart } from '@/Common/ShipmentChart';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

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
const driversData = [
    { driverName: "Sadiq_Mirza", driverNo: "+96-894985048", rating: "4.2", driverImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { driverName: "Sadiq_Mirza", driverNo: "+96-894985048", rating: "4.2", driverImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { driverName: "Sadiq_Mirza", driverNo: "+96-894985048", rating: "4.2", driverImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { driverName: "Sadiq_Mirza", driverNo: "+96-894985048", rating: "4.2", driverImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { driverName: "Sadiq_Mirza", driverNo: "+96-894985048", rating: "4.2", driverImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { driverName: "Sadiq_Mirza", driverNo: "+96-894985048", rating: "4.2", driverImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { driverName: "Sadiq_Mirza", driverNo: "+96-894985048", rating: "4.2", driverImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { driverName: "Sadiq_Mirza", driverNo: "+96-894985048", rating: "4.2", driverImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { driverName: "Sadiq_Mirza", driverNo: "+96-894985048", rating: "4.2", driverImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];

const Page = ({ params: { locale } }) => {
    const t = useTranslations("Index");
    const dataInquires = [
        {
            id: t("23423"),
            title: t("e-Procure"),
            location: t("Hittin_Riyadh"),
            category: t("Hardware"),
            weight: t("2_kg"),
            quantity: t("quantity"),
            totalWeight: t("totalWeight")
        },
        {
            id: t("23424"),
            title: t("Tech_Supply"),
            location: t("Olaya_Riyadh"),
            category: t("Electronics"),
            weight: t("1_5_kg"),
            quantity: t("300"),
            totalWeight: t("450_kg")
        },
        {
            id: t("23425"),
            title: t("Build_Corp"),
            location: t("Malaz_Riyadh"),
            category: t("Construction"),
            weight: t("3_kg"),
            quantity: t("200"),
            totalWeight: t("600_kg")
        },
        {
            id: t("23423"),
            title: t("e-Procure"),
            location: t("Hittin_Riyadh"),
            category: t("Hardware"),
            weight: t("2_kg"),
            quantity: t("quantity"),
            totalWeight: t("totalWeight")
        },
        {
            id: t("23424"),
            title: t("Tech_Supply"),
            location: t("Olaya_Riyadh"),
            category: t("Electronics"),
            weight: t("1_5_kg"),
            quantity: t("300"),
            totalWeight: t("450_kg")
        },
    ];
    const router = useRouter();
    return (
        <div className={Styles.secondDashBoard}>
            <HeroFirst
                Title={t("heroText1")}
                BoldText={t("heroText2")}
                Description={t("heroText3")}
            />
            <div >
                <Container fluid className={`${Styles.layout} px-5`}>
                    <Row className="gy-4">
                        <Col lg={12} md={12} sm={12} xl={9}>
                            <Row className="gy-4">
                                <Col lg={6} md={6} sm={12} xl={2}>
                                    <AddCard text={t("Total_Shipments")} number={26} className={Styles.bgRed} locale={locale} />
                                </Col>
                                <Col lg={6} md={6} sm={12} xl={2}>
                                    <AddCard text={t("Available_Vehicles_for_Delivery")} number={14} locale={locale} onNavigate={() => router.push(`/${locale}/carrier/fleet/addNewFleet`)} />
                                </Col>
                                <Col lg={12} md={6} sm={12} xl={6}>
                                    <OrderCard />
                                </Col>
                                <Col lg={6} md={6} sm={12} xl={2}>
                                    <AddCard text={t("Total_Employees")} number={34} locale={locale} onNavigate={() => router.push(`/${locale}/carrier/workspace/employees`)} />
                                </Col>
                                <Col lg={12} md={12} sm={12}>
                                    <PublicInquires label={t("Inquires_Received")} data={dataInquires} />
                                </Col>
                                <Col lg={6} md={6} sm={12} xl={3}>
                                    <InvitationsReceivedCard />
                                </Col>
                                <Col lg={6} md={6} sm={12} xl={9} className="d-flex">
                                    <RfqCard />
                                </Col>
                                {/* <Col lg={4} md={12} sm={12} className={Styles.empty}></Col> */}
                                <Col lg={6} md={12} sm={12} xl={4}>
                                    <ShipmentChart />
                                    <div className="mt-4">
                                        <RfqChartCard />
                                    </div>
                                </Col>
                                <Col lg={6} md={12} sm={12} xl={8}>
                                    <Row className="gy-4">
                                        <Col lg={12} md={12} sm={12} xl={6}>
                                            <Notification />
                                            <div className="mt-4">
                                                <Fleets Fleets={189} VehiclesType={14} InTransit={143} InService={17} InServices={17} />
                                            </div>
                                        </Col>
                                        <Col lg={12} md={12} sm={12} xl={6} className="d-flex">
                                            <Contracts contractData={contractData} />
                                        </Col>
                                        <Col lg={12} md={12} sm={12} xl={12} className="d-flex">
                                            <Drivers totalDrivers={13} data={driversData} onNavigate={() => router.push(`/${locale}/carrier/workspace/employeePreview`)} />
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={12} md={12} sm={12} xl={3}>
                            <TrackShippments title={t("Track_Shippments")} PlaceHolder={t("Search_by_shipment")} mapSize={600} />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div >
    );
};

export default Page;
