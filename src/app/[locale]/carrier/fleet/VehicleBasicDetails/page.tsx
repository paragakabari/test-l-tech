"use client"
import React, { useState } from 'react'
import Styles from "./VehicleBasicDetails.module.css"
import { HeroThree } from '@/Common/HeroThree'
import { Col, Container, Modal, Row } from 'react-bootstrap';
import FleetCard from '@/Common/FleetCard';
import { BusinessTabLayout } from '@/Common/BusinessTabLayout';
import { VehicleBasicTab } from '@/Common/VehicleBasicTab';
import ButtonComp from '@/Component/Button';
import { useRouter } from 'next/navigation';
import BasicDetails from '@/Component/VehicleBasicDetailsComponent/BasicDetails';
import Specifications from '@/Component/VehicleBasicDetailsComponent/Specifications';
import FinancialDetails from '@/Component/VehicleBasicDetailsComponent/FinancialDetails';
import Insurance from '@/Component/VehicleBasicDetailsComponent/Insurance';
import PhotosDocs from '@/Component/VehicleBasicDetailsComponent/PhotosDocs';
import AdditionalInfo from '@/Component/VehicleBasicDetailsComponent/AdditionalInfo';
import ServiceDetails from '@/Component/VehicleBasicDetailsComponent/ServiceDetails';

const Page = ({ params: { locale } }) => {
    const router = useRouter();
    const [currentTab, setCurrentTab] = useState(1);
    const handleSaveAndExit = () => {
        if (currentTab < 7) {
            setCurrentTab((prev) => prev + 1);
            setSelectedTab((prev) => [currentTab + 1, ...prev]);
        } else {
            setModalShow(true)
        }
    };
    const handleBack = () => {
        setCurrentTab((prev) => prev - 1);
        setSelectedTab((prev) => [currentTab - 1, ...prev]);
    };
    const [selectedTab, setSelectedTab] = useState<number[]>([1]);
    const breadcrumb = [
        {
            text: "Dashboard",
            link: "/carrier/dashboard-second",
        },
        {
            text: "Fleet",
            link: "/carrier/fleet/dashboard"
        },
        {
            text: "Add Details - Volvo FM - 1998",
            link: "/",
        },
    ];
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div>
            <HeroThree BoldText="Volvo FM - 1998" breadcrumb={breadcrumb} />
            <Container fluid className={`${Styles.layout} px-5`}>
                <Row className="gy-4">
                    <Col
                        xxl={9}
                        xl={9}
                        lg={12}
                        md={12}
                        sm={12}
                    >
                        <Row className='gy-4'>
                            <Col xl={12}>
                                <div style={{ overflow: 'auto' }}>
                                    <VehicleBasicTab
                                        selectedTab={selectedTab}
                                        currentTab={currentTab}
                                    />
                                </div>
                                <div className='mt-5'>
                                    {currentTab === 1 && (
                                        <BasicDetails />
                                    )}
                                    {currentTab === 2 && (
                                        <Specifications />
                                    )}
                                    {currentTab === 3 && (
                                        <FinancialDetails />
                                    )}
                                    {currentTab === 4 && (
                                        <Insurance />
                                    )}
                                    {currentTab === 5 && (
                                        <ServiceDetails />
                                    )}
                                    {currentTab === 6 && (
                                        <PhotosDocs />
                                    )}
                                    {currentTab === 7 && (
                                        <AdditionalInfo />
                                    )}
                                </div>
                            </Col>
                            <Col xxl={12} className="d-flex justify-content-between align-items-center flex-wrap gap-2">
                                <ButtonComp text="Back" className="outlineButton" onClick={() => handleBack()} disable={currentTab === 1} />
                                <ButtonComp text="Proceed Next" onClick={() => handleSaveAndExit()} />
                            </Col>
                        </Row>
                    </Col>
                    <Col xxl={3} xl={3} lg={12} md={12} sm={12} className="d-flex">
                        <FleetCard />
                    </Col>
                </Row>
            </Container>
            <Modal
                size="xl"
                show={modalShow}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >

                <Modal.Body className={Styles.thankText}>
                    <div className={Styles.fileAnimation}></div>
                    <h4>Hello 👋, Thanks for sharing details with e-Procurement Freight.</h4>
                    <p>
                        We will be assessing your Fleet creation request and will share Status update. You will be notified for every status update.
                    </p>
                    <div className='d-flex flex-wrap gap-2 justify-content-center'>
                        <ButtonComp text='Add Another Vehicle' className='lightButton' onClick={() => router.push(`/${locale}/carrier/fleet/addNewFleet`)} />
                        <ButtonComp text='Happy Shipping' onClick={() => router.push(`/${locale}/carrier/fleet/dashboard`)} />
                    </div>
                </Modal.Body>

            </Modal>
        </div>
    )
}

export default Page