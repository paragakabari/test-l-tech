import React from 'react'
import Styles from "./VehicleBasicDetailsComponent.module.css"
import { Col, Form, Row, Table } from 'react-bootstrap'
import { FileUploadSection, FormGroup } from './BasicDetails'
import DragDropFilePicker, { ComponentViewContext } from '../DragDropFilePicker';
import Image from 'next/image';
import ButtonComp from '../Button';

const ServiceDetails = () => {
    const documents = [
        { name: '01', number: '0045373', size: '22/04/2018', link: '#' },
        { name: '02', number: '0345290', size: '22/04/2020', link: '#' },
        { name: '03', number: '0743789', size: '22/04/2023', link: '#' },
    ];
    return (
        <>
            <div className={`${Styles.whiteBg} mb-4`}>
                <Row className='gy-4'>
                    <Col lg={12}>
                        <h1 className='com-title'>Service History of Vehicle</h1>
                    </Col>
                    <Col lg={12}>
                        <Table className={Styles.table} responsive>
                            <thead>
                                <tr>
                                    <th>Service no.</th>
                                    <th>Odometer Rating</th>
                                    <th>Completion Date</th>
                                    <th>Attachments</th>
                                </tr>
                            </thead>
                            <tbody>
                                {documents.map((doc, index) => (
                                    <tr key={index}>
                                        <td className={Styles.name}>{doc.name}</td>
                                        <td className={Styles.number}>{doc.number}</td>
                                        <td className={Styles.size}>{doc.size}</td>
                                        <td>
                                            <a href={doc.link} style={{ color: "#FE6A57" }}><i className="bi bi-paperclip"></i></a>
                                        </td>
                                        <td>
                                            <a href={doc.link} style={{ color: "#272727" }}><i className="bi bi-x-circle"></i></a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </div>
            <div className={Styles.whiteBg}>
                <Row className='gy-4'>
                    <Col lg={12}>
                        <h1 className='com-title'>Add Service History of Vehicle</h1>
                    </Col>
                    <Col lg={5} md={4} sm={12}>
                        <Image src="/speed.png" width={299} height={250} alt="" className="" />
                    </Col>
                    <Col lg={7} md={8} sm={12}>
                        <Row className='gy-4'>
                            <Col lg={12}>
                                <FormGroup label="Last Service Done Date:*">
                                    <Form.Control type="date" className='com-input' />
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
                            <Col md={12} className="d-flex justify-content-end">
                                <ButtonComp text='Submit Service' />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default ServiceDetails