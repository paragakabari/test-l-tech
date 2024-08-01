import React from 'react'
import Styles from "./VehicleBasicDetailsComponent.module.css"
import { Col, Form, Row } from 'react-bootstrap'
import { FileUploadSection, FormGroup } from './BasicDetails'
import DragDropFilePicker, { ComponentViewContext } from '../DragDropFilePicker';
import Image from 'next/image';

const Insurance = () => {
    return (
        <div className={Styles.whiteBg}>
            <Row className='gy-4'>
                <Col lg={12}>
                    <h1 className='com-title'>Insurance Details</h1>
                </Col>
                <Col lg={5} md={4} sm={12}>
                    <div className={Styles.InsuranceImg}>
                        <Image src="/card.png" height={500} width={500} alt="" />
                    </div>
                </Col>
                <Col lg={7} md={8} sm={12}>
                    <Row className='gy-4'>
                        <Col lg={12}>
                            <FormGroup label="Provider Name">
                                <Form.Control type="text" placeholder="Type to search the insurance Provider name" className='com-input' />
                            </FormGroup>
                        </Col>
                        <Col lg={12}>
                            <FormGroup label="Insurance No./ID:*">
                                <Form.Control type="text" placeholder="30" className='com-input' />
                            </FormGroup>
                        </Col>
                        <Col lg={6} md={12}>
                            <FormGroup label="Expiry Date:*">
                                <Form.Control type="date" className='com-input' />
                            </FormGroup>
                        </Col>
                        <Col lg={6} md={12}>
                            <FormGroup label="Set Reminder*">
                                <Form.Check label="Not Required" disabled className='mt-2' />
                            </FormGroup>
                        </Col>
                        <Col md={12}>

                            <FileUploadSection
                                label="Please upload Insurance Document :*"
                                handleDrop={() => { }}
                                handleUpload={() => { }}
                                multiple={true}
                                allowedFileTypes=".pdf, .doc, .docx, .xlsx, .jpeg"
                                viewContext={ComponentViewContext.BoxedView}
                                fileSize="PDF, Docx, Doc Max Size 10 MB"
                            />

                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default Insurance