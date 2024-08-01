"use client";
import React, { useState } from "react";
import Styles from "./completeProfile.module.css";
import { HeroFour } from "@/Common/HeroFour";
import { Col, Container, Form, Modal, Row } from "react-bootstrap";
import CompleteProfileTab from "@/Common/CompleteProfileTab";
import ButtonComp from "@/Component/Button";
import { FileUploadSection } from "@/Component/VehicleBasicDetailsComponent/BasicDetails";
import CircularProgressBar from "@/Common/CircularProgressBar";
import Lottie from 'lottie-react';
import animationData from '../../../../../public/celebration.json';
import { useRouter } from "next/navigation";

const Page = ({ params: { locale } }) => {
    const router = useRouter();
    const [selectedTab, setSelectedTab] = useState<number[]>([1]);
    const [currentTab, setCurrentTab] = useState(1);
    const [modalShow, setModalShow] = React.useState(false);
    const handleSaveAndExit = () => {
        if (currentTab < 4) {
            setCurrentTab((prev) => prev + 1);
            setSelectedTab((prev) => [currentTab + 1, ...prev]);
        }
        else {
            setModalShow(true)
        }
    };

    const types = [
        { name: "PRIVATE", value: "PRIVATE" },
        { name: "GOVERNMENT", value: "GOVERNMENT" },
        { name: "SEMI-GOVERNMENT", value: "SEMI-GOVERNMENT" },
    ];

    const [selectedOptions, setSelectedOptions] = useState({
        vehicleType: "PRIVATE",
        brand: "tata",
    });

    const handleOptionChange = (key, value) => {
        setSelectedOptions((prev) => ({ ...prev, [key]: value }));
    };

    const renderFirstTab = () => (
        <Row className="gy-4">
            <Col lg={12}>
                <label className={Styles.lightBoldLabel}>
                    <strong>Company</strong> Name*
                </label>
                <div className={Styles.searchInput}>
                    <input type="text" placeholder="Company Registration number eg: 23874628934283" />
                </div>
            </Col>
            <Col lg={6} md={12}>
                <label className={Styles.lightBoldLabel}>
                    <strong>Company Registration </strong> Number*
                </label>
                <div className={Styles.searchInput}>
                    <input type="text" placeholder="Company Registration number eg: 23874628934283" />
                </div>
            </Col>
            <Col lg={6} md={12} className="align-self-end">
                <FileUploadSection
                    handleDrop={() => { }}
                    handleUpload={() => { }}
                    multiple
                    allowedFileTypes=".pdf, .doc, .docx, .xlsx, .jpeg"
                    fileSize="Upload up to 5 files"
                />
            </Col>
            <Col lg={12}>
                <label className={Styles.lightBoldLabel}>
                    What is the <strong>business type?</strong>
                </label>
                <div className={Styles.VehicleSelect}>
                    {types.map(({ name, value }) => (
                        <span
                            key={value}
                            className={selectedOptions.vehicleType === value ? Styles.selected : ""}
                            onClick={() => handleOptionChange("vehicleType", value)}
                        >
                            {name}
                        </span>
                    ))}
                </div>
            </Col>
            <Col lg={6} md={12}>
                <label className={Styles.lightBoldLabel}>
                    Which <strong>industry</strong> do you belong to?
                </label>
                <div className={Styles.searchInput}>
                    <input type="text" placeholder="" value="Office Stationary And Equipment" />
                    <i className="bi bi-search"></i>
                </div>
            </Col>
            <Col lg={6} md={12}>
                <label className={Styles.lightBoldLabel}>
                    Which <strong>sector</strong> does the industry belong to?
                </label>
                <div className={Styles.flexSearch}>
                    <div className={Styles.searchInput}>
                        <input type="text" placeholder="Search Sector" />
                        <i className="bi bi-search"></i>
                    </div>
                    <div className={Styles.searchInput}>
                        <input type="text" placeholder="Search sub Sector" />
                        <i className="bi bi-search"></i>
                    </div>
                </div>
            </Col>
        </Row>
    );

    const renderSecondTab = () => (
        <Row className="gy-4">
            <Col lg={12}>
                <label className="fs-5 fw-bold mb-3">Zakat Number*</label>
                <Row className="gy-4">
                    <Col lg={6} md={12} className="align-self-center">
                        <div className={Styles.searchInput}>
                            <input type="text" placeholder="Please provide zakat number" />
                        </div>
                    </Col>
                    <Col lg={6} md={12}>
                        <FileUploadSection
                            handleDrop={() => { }}
                            handleUpload={() => { }}
                            multiple
                            allowedFileTypes=".pdf, .doc, .docx, .xlsx, .jpeg"
                            fileSize="Upload up to 5 files"
                        />
                    </Col>
                </Row>
            </Col>
            <Col lg={12}>
                <label className="fs-5 fw-bold mb-3">VAT Number*</label>
                <Row className="gy-4">
                    <Col lg={6} md={12} className="align-self-center">
                        <div className={Styles.searchInput}>
                            <input type="text" placeholder="Please provide VAT number" />
                        </div>
                    </Col>
                    <Col lg={6} md={12}>
                        <FileUploadSection
                            handleDrop={() => { }}
                            handleUpload={() => { }}
                            multiple
                            allowedFileTypes=".pdf, .doc, .docx, .xlsx, .jpeg"
                            fileSize="Upload up to 5 files"
                        />
                    </Col>
                </Row>
            </Col>
        </Row>
    );

    return (
        <div>
            <HeroFour BoldText="Let’s Complete your Profile" />
            <Container fluid className={`${Styles.layout} px-5`}>
                <Row>
                    <Col sm={12}>
                        <div className={Styles.CompleteProfileTabMain}>
                            <CompleteProfileTab currentTab={currentTab} />
                        </div>
                    </Col>
                    <Col lg={9} md={12} className="mt-5">
                        <div className={Styles.profileBg}>
                            {currentTab === 1 && renderFirstTab()}
                            {currentTab === 2 && renderSecondTab()}
                            {currentTab === 3 && <></>}
                            {currentTab === 4 && <></>}
                            <ButtonComp text="Proceed" onClick={handleSaveAndExit} className="mt-5 px-5" />
                        </div>
                    </Col>
                    <Col lg={3} md={12} className="mt-5 d-flex">
                        <div className={Styles.profileS}>
                            <CircularProgressBar percentage={18} />
                        </div>
                    </Col>
                </Row>
            </Container>
            <Modal show={modalShow} onHide={() => setModalShow(false)} dialogClassName="modal-90w"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Body className={Styles.profileModal}>
                    <div className={Styles.lotiAnimation}>
                        <Lottie animationData={animationData} loop={false} />
                    </div>
                    <h1>Hello 👋, Thanks for sharing details with e-Procurement Freight.</h1>
                    <p>We will be assessing your credentials and will share our confirmation over email.<br /> Please keep checking your mailbox for our response. </p>
                    <div className="d-flex justify-content-center gap-4 flex-wrap z-3 position-relative">

                        <ButtonComp text="Happy Shipping" onClick={() => router.push(`/${locale}/shipper/e-ProcureFrieght`)} />
                        <ButtonComp text="Active Ur Account" className="darkButton" />
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Page;
