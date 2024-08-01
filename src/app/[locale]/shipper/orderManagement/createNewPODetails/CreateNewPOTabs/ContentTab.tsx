import React from 'react'
import Styles from "../contractTab.module.css"
import { Col, Row } from 'react-bootstrap'
import TemplateCard from '@/Common/TemplateCard'
import TemplateCardLayout from '@/Common/TemplateCardLayout'
import Image from 'next/image'
import ButtonComp from '@/Component/Button'

const ContentTab = () => {
    return (
        <div>
            <Row className="gy-4">
                <Col lg={4} md={6} sm={12}>
                    <TemplateCardLayout title='Service RFP' description='RFP'>
                        <Image src="/template.png" height={500} width={500} alt='' className={Styles.templateImg} />
                    </TemplateCardLayout>
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <TemplateCardLayout title='Office Set Up RFP' description='RFP'>
                        <Image src="/template.png" height={500} width={500} alt='' className={Styles.templateImg} />
                    </TemplateCardLayout>
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <TemplateCardLayout title='Warehouse Supplies RFP' description='RFP'>
                        <Image src="/template.png" height={500} width={500} alt='' className={Styles.templateImg} />
                    </TemplateCardLayout>
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <TemplateCardLayout title='New Template by Kinjal' description='RFP'>
                        <div className={Styles.NewTemp}>
                            <p>[Your Company’s Name]</p>
                            <p>[Your Company’s Address]</p>
                            <p>[City, State, Zip Code]</p>
                            <p>[Phone Number]</p>
                            <p>[Email Address]</p>
                            <p>[Website]</p>
                            <br />
                            <p>[Date]</p>
                            <br />
                            <p>[Recipient’s Name]</p>
                            <p>[Recipient’s Title]</p>
                            <p>[Recipient’s Company]</p>
                            <p>[Recipient’s Address]</p>
                            <p>[City, State, Zip Code]</p>
                            <br />
                            <small>Subject: Request for Proposal (RFP) - [Project Name] </small>
                            <br />
                            <small>Dear [Recipient’s Name]</small>
                            <br />
                            <small>We are pleased to invite you to submit a proposal for [Project Name]. [Your Company’s Name] is seeking a qualified and experienced [service or product] provider to [briefly describe the project objectives or requirements]. We believe that your company has the expertise and capabilities to meet our needs, and we would like to invite you to participate in this competitive bidding process. Attached to this letter, you will find the detailed Request for Proposal (RFP) document, which includes: Introduction: A brief overview of the project and our organization. Project Description: Detailed information about the project goals, scope, and requirements. Proposal Guidelines: Instructions on how to prepare and submit your proposal, including the format, timeline, and evaluation criteria. Proposal Content: The specific information we require in your proposal, such as company background, methodology, timeline, cost breakdown, and references. Terms and Conditions: The terms and conditions governing the proposal submission and subsequent contract. We kindly request that you carefully review the RFP document and provide a comprehensive proposal in response. If you have any questions or require further clarification, please submit your inquiries in writing by [deadline for questions], and we will promptly respond to them. We will also be hosting a pre-proposal meeting on [date] at [time] to address any additional questions or concerns you may have. Important Dates: RFP Release Date: [Date] Deadline for Questions: [Date] Pre-Proposal Meeting: [Date] Proposal Submission Deadline: [Date] Evaluation Period: [Dates] Final Decision: [Date] We look forward to receiving your proposal by the submission deadline. Should you require any further information or have any queries, please do not hesitate to contact [Your Name] at [Your Phone Number] or [Your Email Address]. Thank you for considering this opportunity, and we look forward to your participation. Sincerely, [Your Name] [Your Title] [Your Company's Name]</small>
                        </div>
                    </TemplateCardLayout>
                </Col>
                <Col lg={4} md={6} sm={12} className="d-flex">
                    <div className={Styles.createNew}>
                        <i className="bi bi-plus-lg"></i>
                        <p>Create New<br />Template</p>
                    </div>
                </Col>
                <Col lg={12}>
                    <div className='w-100 mt-4'>
                        <ButtonComp text='Proceed Next' className='ms-auto d-block ' />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default ContentTab