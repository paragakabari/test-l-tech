"use client"
import React from 'react';
import Styles from "./fleetDashboard.module.css";
import { HeroSecond } from '@/Common/heroSecond';
import { Col, Container, Row } from 'react-bootstrap';
import Sidebar from '@/Common/Sidebar';
import { useRouter } from 'next/navigation';
import AddCard from '@/Common/AddCard';
import OrderCard from '@/Common/OrderCard';
import { useTranslations } from 'next-intl';
import TrackShippments from '@/Common/TrackShippments';
import ButtonComp from '@/Component/Button';
import { ShipmentChart } from '@/Common/ShipmentChart';
import RfqChartCard from '@/Common/RfqChartCard';
import Fleets from '@/Common/Fleets';
import { Contracts } from '@/Common/Contracts';
import ConsignmentCard from '@/Common/ConsignmentCard';
import HubCard from '@/Common/HubCard';
import ManagementCard from '@/Common/ManagementCard';

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
    const breadcrumb = [
        { text: 'Dashboard', link: "/carrier/dashboard-second" },
        { text: 'Fleet Management', link: '/carrier/fleet/dashboard' },
    ];

    const router = useRouter();
    const t = useTranslations("Index");

    const handleAddVehicleClick = () => {
        router.push(`/${locale}/carrier/fleet/addNewFleet`)
    };
    const handleOnNavigate = () => {
        router.push(`/${locale}/carrier/orders/contractManagement`);
    };
    const handleFleetManagementClick = () => {
        router.push(`/${locale}/carrier/fleet/fleetManagement`);
    };

    return (
        <div className='position-relative'>
            <HeroSecond BoldText='Fleet Management' breadcrumb={breadcrumb} />
            <Container fluid className={`${Styles.layout} px-5`}>
                <Row>
                    <Col xxl={2}>
                        <Sidebar locale={locale} />
                    </Col>
                    <Col xxl={10} xl={12} lg={12} md={12} sm={12} className={Styles.layoutSecond}>
                        <Row className='gy-4'>
                            <Col xl={12} lg={12} md={12} sm={12}>
                                <div className='d-flex justify-content-end gap-2 w-100'>
                                    <ButtonComp text='Add New Vehicle' onClick={handleAddVehicleClick} />
                                </div>
                            </Col>
                            <Col xxl={9} xl={9} lg={12} md={12} sm={12}>
                                <Row className='gy-4'>
                                    <Col xl={3} lg={6} md={6} sm={12}>
                                        <AddCard text={t("Total_Shipments")} number={26} className={Styles.bgRed} locale={locale} />
                                    </Col>
                                    <Col xl={3} lg={6} md={6} sm={12}>
                                        <AddCard text="Total Contracts" number={3} locale={locale} onNavigate={handleOnNavigate} />
                                    </Col>
                                    <Col xl={6} lg={12} md={6} sm={12}>
                                        <OrderCard />
                                    </Col>
                                    <Col xl={4} lg={6} md={12} sm={12}>
                                        <div className='d-flex flex-column gap-4'>
                                            <ShipmentChart />
                                            <Fleets Fleets={189} VehiclesType={14} InTransit={143} InService={17} InServices={17} onClick={handleFleetManagementClick} />
                                            <RfqChartCard />
                                        </div>
                                    </Col>
                                    <Col xl={8} lg={6} md={12} sm={12}>
                                        <div className='d-flex flex-column gap-4'>
                                            <HubCard text="Hubs" number={5} className={Styles.bgGreen} onClick={() => router.push(`/${locale}/carrier/workspace/hubCreation`)} />
                                            <HubCard text="Distribution Center" number={129} className={Styles.bgBlue} onClick={() => router.push(`/${locale}/carrier/workspace/distributionCenter`)} />
                                            <Contracts contractData={contractData} />
                                            <div className='d-flex gap-4 w-100'>
                                                <ManagementCard text='Create PO For Contracts' className={Styles.bgLightYellow} />
                                                <ManagementCard text='View Invoices' className={Styles.bgLightBlue} />
                                            </div>
                                            <ConsignmentCard />
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xxl={3} xl={3} lg={12} md={12} sm={12}>
                                <TrackShippments title='Track Shipments' PlaceHolder='Search by shipment' mapSize={482} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Page;
