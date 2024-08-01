import React from 'react'
import Styles from "./VehicleBasicDetailsComponent.module.css"
import { Col, Form, Row } from 'react-bootstrap'
import { FileUploadSection, FormGroup } from './BasicDetails'
import DragDropFilePicker, { ComponentViewContext } from '../DragDropFilePicker';
import Link from 'next/link';


const AdditionalInfo = () => {
    return (
        <div className={Styles.whiteBg}>
            <Row className='gy-4'>
                <Col lg={12}>
                    <h1 className='com-title'>Additional Information</h1>
                </Col>
                <Col lg={12}>
                    <Form.Check label="Have Temperature Control Unit" className='mt-2' />
                    <div className={Styles.docUpload}>
                        <Row className='gy-4'>
                            <Col lg={12}><h2>Please Upload Proof Document:*</h2></Col>
                            <Col lg={6} md={6}>
                                <FileUploadSection
                                    handleDrop={() => { }}
                                    handleUpload={() => { }}
                                    multiple={true}
                                    allowedFileTypes=".pdf, .doc, .docx, .xlsx, .jpeg"
                                    viewContext={ComponentViewContext.BoxedView}
                                    fileSize="Upload up to 5 files"
                                />
                            </Col>
                            <Col lg={6} md={6}>
                                <Form.Control type="text" placeholder="Add Comments" className='com-input long-Input' />
                            </Col>
                            <Col lg={12}><h2>Please Upload Proof Document:*</h2></Col>
                            <Col lg={6} md={6}>
                                <FileUploadSection
                                    handleDrop={() => { }}
                                    handleUpload={() => { }}
                                    multiple={true}
                                    allowedFileTypes=".pdf, .doc, .docx, .xlsx, .jpeg"
                                    viewContext={ComponentViewContext.BoxedView}
                                    fileSize="Upload up to 5 files"
                                />
                            </Col>
                            <Col lg={6} md={6}>
                                <Form.Control type="text" placeholder="Add Comments" className='com-input long-Input' />
                            </Col>
                            <Col lg={12}>
                                <Link href="" className={Styles.linkMain}>Add More</Link>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col lg={12}>
                    <Form.Check label="Authorized to transport hazardous goods" className='mt-2' />
                </Col>
                <Col lg={12}>
                    <Form.Check label="Lorem Ipsum" className='mt-2' />
                </Col>
                <Col lg={12}>
                    <Form.Check label="Lorem Ipsum" className='mt-2' />
                </Col>
                <Col lg={12}>
                    <Form.Check label="Lorem Ipsum" className='mt-2' />
                </Col>
                <Col lg={12}>
                    <Form.Check label="Lorem Ipsum" className='mt-2' />
                </Col>
            </Row>
        </div>
    )
}

export default AdditionalInfo