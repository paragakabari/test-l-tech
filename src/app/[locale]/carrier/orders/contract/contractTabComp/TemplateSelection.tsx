import React, { useState } from 'react'
import Styles from "../contract.module.css"
import { Col, Row } from 'react-bootstrap'
import TemplateCard from '@/Common/TemplateCard'
import ButtonComp from '@/Component/Button'

const TemplateSelection = ({ handleSaveAndExit }) => {
    const [selectTemplate, setSelectTemplate] = useState(true);
    return (
        <Row className="gy-4">
            <Col lg={12} className="mb-3">
                <h1 className={Styles.templateTitle}>Select Proposal Templates</h1>
            </Col>
            {selectTemplate ? (
                <>
                    <Col lg={4} md={6} sm={12}>
                        <TemplateCard subject="Application for Consignment Delivery Opportunity"
                            companyName="[Company/Organisation Name]"
                            experienceYears={12}
                            experienceMonths={12} />
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <TemplateCard subject="Application for Consignment Delivery Opportunity"
                            companyName="[Company/Organisation Name]"
                            experienceYears={12}
                            experienceMonths={12} />
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <TemplateCard subject="Application for Consignment Delivery Opportunity"
                            companyName="[Company/Organisation Name]"
                            experienceYears={12}
                            experienceMonths={12} />
                    </Col>
                    <Col lg={4} md={6} sm={12} className="d-flex">
                        <div className={Styles.createNew}>
                            <i className="bi bi-plus-lg"></i>
                            <p>Create New<br />Template</p>
                        </div>
                    </Col>
                    <Col lg={12}>
                        <div className="d-flex justify-content-end">
                            <ButtonComp
                                text="Select Template"
                                className="px-5"
                                onClick={() => setSelectTemplate(false)}
                            // onClick={handleSaveAndExit}
                            />
                        </div>
                    </Col>
                </>
            ) : (
                <>
                    <Col lg={12}>
                        <div className={Styles.selectTem}>
                            <h2 className={Styles.selectTemTitle}>New Proposal Template</h2>
                            <div className={Styles.selectTemContent}>
                                <p><strong>Subject:</strong> Application for Consignment Delivery Opportunity</p>
                                <p>Dear <b>[Company / Organization]</b>,</p>
                                <p>
                                    I am writing to express my interest in becoming a delivery driver for your consignment services.
                                    With a strong commitment to safe and efficient delivery, I am confident in my ability to contribute
                                    positively to your team.
                                </p>
                                <p>Here's a brief overview of my qualifications:</p>
                                <ol>
                                    <li>
                                        <strong>Experience:</strong> I have [X years/months] of experience as a delivery driver, ensuring prompt and secure delivery of packages to various destinations.
                                    </li>
                                    <li>
                                        <strong>Reliability:</strong> I understand the importance of timely deliveries and am dedicated to meeting and exceeding expectations consistently.
                                    </li>
                                    <li>
                                        <strong>Route Optimisation:</strong>Proficient in utilising GPS navigation systems and route planning tools to ensure optimal delivery routes, saving time and resources.
                                    </li>
                                    <li>
                                        <strong>Customer Service:</strong> I prioritise customer satisfaction and communicate effectively to address any delivery-related inquiries or concerns.
                                    </li>
                                    <li>
                                        <strong>Vehicle Maintenance:</strong>  I maintain my vehicle in excellent condition, ensuring reliability and safety throughout the delivery process.
                                    </li>
                                </ol>
                                <p>I am excited about the opportunity to contribute my skills to your consignment delivery team and provide exceptional service to your clients. Please find my attached resume for your review.</p>
                                <p>I look forward to the possibility of discussing how I can be an asset to your organization. Thank you for considering my application.</p>
                            </div>
                        </div>

                    </Col>
                    <Col lg={12} className="mb-3">
                        <div className="d-flex justify-content-between">
                            <ButtonComp
                                text="Back"
                                className="outlineButton"
                                onClick={() => setSelectTemplate(true)}
                            />
                            <ButtonComp
                                text="Add This Template"
                                className="px-5"
                                onClick={handleSaveAndExit}
                            />
                        </div>
                    </Col>
                </>
            )}
        </Row>
    )
}

export default TemplateSelection