"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Container, Row, Col, Modal } from "react-bootstrap";
import Styles from "../contract/contract.module.css";
import ProposalDetails from "../contract/contractTabComp/ProposalDetails";
import TemplateSelection from "../contract/contractTabComp/TemplateSelection";
import AdditionalServices from "../contract/contractTabComp/AdditionalServices";
import UploadDocs from "../contract/contractTabComp/UploadDocs";
import RoutePreference from "../contract/contractTabComp/RoutePreference";
import CostPackages from "../contract/contractTabComp/CostPackages";
import TotalCost from "../contract/contractTabComp/TotalCost";
import { HeroThree } from "@/Common/HeroThree";
import { ContractTabLayout } from "@/Common/ContractTabLayout";
import ProposalSummary from "../contract/contractTabComp/ProposalSummary";
import ButtonComp from "@/Component/Button";



const ContractPage = ({ params: { locale } }) => {
    const [currentTab, setCurrentTab] = useState(1);
    const [selectedTab, setSelectedTab] = useState([1]);
    const [modalShow, setModalShow] = React.useState(false);
    const router = useRouter();

    const handleSaveAndExit = () => {
        if (currentTab < 7) {
            setCurrentTab((prev) => prev + 1);
            setSelectedTab((prev) => [currentTab + 1, ...prev]);
        } else {
            setModalShow(true)
        }
    };

    const breadcrumb = [
        { text: "Dashboard", link: "/carrier/dashboard-second" },
        { text: "Order Management", link: '/carrier/orders/manageInquiriesSubmissions' },
        { text: "Manage Inquiries", link: "/" },
    ];

    const renderCurrentTab = () => {
        switch (currentTab) {
            case 1:
                return <ProposalDetails handleSaveAndExit={handleSaveAndExit} />;
            case 2:
                return <div className="mt-4"><TemplateSelection handleSaveAndExit={handleSaveAndExit} /></div>;
            case 3:
                return <AdditionalServices handleSaveAndExit={handleSaveAndExit} />;
            case 4:
                return <UploadDocs handleSaveAndExit={handleSaveAndExit} />;
            case 5:
                return <RoutePreference handleSaveAndExit={handleSaveAndExit} />;
            case 6:
                return <CostPackages handleSaveAndExit={handleSaveAndExit} />;
            case 7:
                return <TotalCost handleSaveAndExit={handleSaveAndExit} />;
            default:
                return null;
        }
    };

    return (
        <div>
            <HeroThree BoldText="Send Proposal" breadcrumb={breadcrumb} />
            <Container fluid className={`${Styles.layout} px-5`}>
                <Row className="">
                    <Col xxl={10} xl={10} lg={12} md={12} sm={12} className={`${Styles.layoutSecond} overflow-x-auto`}>
                        <ContractTabLayout selectedTab={selectedTab} currentTab={currentTab} />
                    </Col>
                    <Col xxl={9} xl={9} lg={12} md={12} sm={12} className={`${Styles.layoutSecond} ${Styles.layoutSecondRes}`}>
                        {renderCurrentTab()}
                    </Col>
                    <Col xxl={3} xl={3} lg={12} md={12} sm={12} className={`${Styles.layoutSecond} ${Styles.layoutSecondRes}`}>
                        <ProposalSummary />
                    </Col>
                </Row>
            </Container>
            <Modal
                size="lg"
                show={modalShow}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >

                <Modal.Body className={Styles.thankText}>
                    <div className={Styles.fileAnimation}></div>
                    <h5 className="fw-bold">Your Proposal has been sent!</h5>
                    <p>You cant find it under Inquiry management {">"} Submissions</p>
                    <ButtonComp text='Okay' className="px-5 mt-4" onClick={() => router.push(`/${locale}/carrier/orders/manageInquiriesSubmissions`)} />
                </Modal.Body>

            </Modal>
        </div>
    );
};

export default ContractPage;
