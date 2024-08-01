"use client";
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import Styles from "./hubCreation.module.css";
import { HeroThree } from '@/Common/HeroThree';
import HubSidebar from '../../../../../Component/hubTabs/HubTab';
import UnitType from '../../../../../Component/hubTabs/UnitType';
import DetailedAssignments from '../../../../../Component/hubTabs/DetailedAssignments';
import DistributionCenterMapping from '../../../../../Component/hubTabs/DistributionCenterMapping';
import HubTab from '../../../../../Component/hubTabs/HubTab';
import HubSide from '@/Component/hubTabs/HubSide';
import HubModal from '@/Component/hubTabs/HubModal';

const HubCreationPage = ({ params: { locale } }) => {
    const router = useRouter();
    const breadcrumb = [
        { 'text': "Dashboard", 'link': "/carrier/dashboard-second" },
        { 'text': "Workspace", 'link': '/carrier/workspace/dashboard' },
        { 'text': "Hub Creation", 'link': '/' }
    ];

    const types = [
        { name: "State Hub", value: "State Hub" },
        { name: "Local Distribution Center", value: "Local Distribution Center" },
        { name: "Warehouse", value: "Warehouse" },
    ];

    const [selectedOptions, setSelectedOptions] = useState({ vehicleType: "State Hub" });
    const [currentTab, setCurrentTab] = useState(1);
    const [selectedTab, setSelectedTab] = useState([1]);
    const [modalShow, setModalShow] = useState(false);
    const handleOptionChange = (key, value) => {
        setSelectedOptions(prev => ({ ...prev, [key]: value }));
    };

    const handleSaveAndExit = () => {
        if (currentTab < 3) {
            setCurrentTab(prev => prev + 1);
            setSelectedTab(prev => [currentTab + 1, ...prev]);
        }
        else {
            setModalShow(true)
        }
    };

    const distributionData = [
        { areaName: "Ad-Dawādmī", mappedAreas: 30, total: 15234, code: "AD_D", deliveries: 12, pickups: 70, color: "#79CCA6" },
        { areaName: "Ad-Dawādmī", mappedAreas: 30, total: 15234, code: "AD_D", deliveries: 12, pickups: 70, color: "#79CCA6" },
        { areaName: "Ad-Dawādmī", mappedAreas: 30, total: 15234, code: "AD_D", deliveries: 12, pickups: 70, color: "#FECB57" },
        { areaName: "Ad-Dawādmī", mappedAreas: 30, total: 15234, code: "AD_D", deliveries: 12, pickups: 70, color: "#FECB57" },
        { areaName: "Ad-Dawādmī", mappedAreas: 30, total: 15234, code: "AD_D", deliveries: 12, pickups: 70, color: "#FA354C" },
        { areaName: "Ad-Dawādmī", mappedAreas: 30, total: 15234, code: "AD_D", deliveries: 12, pickups: 70, color: "#FECB57" },
        { areaName: "Ad-Dawādmī", mappedAreas: 30, total: 15234, code: "AD_D", deliveries: 12, pickups: 70, color: "#FA354C" },
    ];

    return (
        <div className='position-relative'>
            <HeroThree BoldText='Create New Hub' breadcrumb={breadcrumb} />
            <Container fluid className={Styles.layout + " px-5"}>
                <Row className={`${Styles.layoutSecond} gy-4`}>
                    <HubTab selectedTab={selectedTab} />
                    {currentTab === 1 && (
                        <Col lg={7} md={9}>
                            <UnitType
                                types={types}
                                UnitTitle="Unit Type"
                                selectedOptions={selectedOptions}
                                handleOptionChange={handleOptionChange}
                                handleSaveAndExit={handleSaveAndExit}
                            />
                        </Col>
                    )}
                    {currentTab === 2 && (
                        <Col lg={7} md={9}>
                            <DetailedAssignments
                                DetailedInformationTitle="Detailed Information & Assignments"
                                handleSaveAndExit={handleSaveAndExit}
                                isHub={true}
                            />
                        </Col>
                    )}
                    {currentTab === 3 && (
                        <Col lg={7} md={9}>
                            <DistributionCenterMapping
                                mappingTitle="Distribution Center Mapping"
                                handleSaveAndExit={handleSaveAndExit}
                                distributionData={distributionData}
                            />
                        </Col>
                    )}
                    <Col lg={3} md={12}>
                        <HubSide isHub={true} />
                    </Col>
                </Row>
            </Container>

            <HubModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                isHub={true}
                setCurrentTab={setCurrentTab}
                setModalShow={setModalShow}
                proceedDashboard={() => router.push(`/${locale}/carrier/fleet/dashboard`)}
            />
        </div>
    );
};

export default HubCreationPage;
