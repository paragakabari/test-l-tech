"use client"
import React, { useEffect, useRef } from 'react'
import Styles from "./VehicleBasicDetailsComponent.module.css"
import { Button, Col, Form, Modal, Row, Table } from 'react-bootstrap'
import { FileUploadSection, FormGroup } from './BasicDetails'
import DragDropFilePicker, { ComponentViewContext } from '../DragDropFilePicker';
import Link from 'next/link';
import ButtonComp from '../Button';
import lottie from 'lottie-web';

const PhotosDocs = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const animationContainer = useRef(null);

    useEffect(() => {
        lottie.loadAnimation({
            container: animationContainer.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: '/file.json'
        });
    }, []);

    const documents = [
        { name: 'Document name will be visible here', number: '28476827423', link: '#' },
        { name: 'Document name will be visible here', number: '28476827423', link: '#' },
        { name: 'Document name will be visible here', number: '28476827423', link: '#' },
    ];
    return (
        <div className={Styles.whiteBg}>
            <Row className='gy-4'>
                <Col lg={12}>
                    <h1 className='com-title'>Vehicle Documents</h1>
                </Col>
                <Col lg={6} md={6}>
                    <FormGroup label="Invoice of Truck*:">
                        <Form.Control type="text" placeholder="23874628934283" className='com-input' />
                    </FormGroup>
                </Col>
                <Col lg={6} md={6}>
                    <FormGroup label="">
                        <FileUploadSection
                            handleDrop={() => { }}
                            handleUpload={() => { }}
                            multiple={true}
                            allowedFileTypes=".pdf, .doc, .docx, .xlsx, .jpeg"
                            viewContext={ComponentViewContext.BoxedView}
                            fileSize="Upload up to 5 files"
                        />
                    </FormGroup>
                </Col>
                <Col lg={12}>
                    <Link href="" className={Styles.linkMain}>DON’T WANT TO ADD THE DOCUMENTS</Link>
                </Col>
                <Col lg={12}>
                    <Table className={Styles.table} responsive>
                        <thead>
                            <tr>
                                <th>Document Name</th>
                                <th>License No.</th>
                                <th>Attachments</th>
                            </tr>
                        </thead>
                        <tbody>
                            {documents.map((doc, index) => (
                                <tr key={index}>
                                    <td className={Styles.name}>{doc.name}</td>
                                    <td className={Styles.number}>{doc.number}</td>
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
                <Col lg={8} md={6} sm={12}>
                    <FormGroup label="Please Provide Document Name:*">
                        <Form.Control type="text" placeholder="Document name" className='com-input' />
                    </FormGroup>
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <FormGroup label="License No*">
                        <Form.Control type="text" placeholder="License Number" className='com-input' />
                    </FormGroup>
                </Col>
                <Col lg={12}>
                    <FileUploadSection
                        handleDrop={() => { }}
                        handleUpload={() => { }}
                        multiple={true}
                        allowedFileTypes=".pdf, .doc, .docx, .xlsx, .jpeg"
                        viewContext={ComponentViewContext.BoxedView}
                        fileSize="Upload up to 5 files"
                    />
                </Col>
                <Col md={12} className="d-flex justify-content-end">
                    <ButtonComp text='Add Document' onClick={() => setModalShow(true)} />
                </Col>
            </Row>
            <Modal
                size="lg"
                show={modalShow}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >

                <Modal.Body className={Styles.thankText}>
                    <div ref={animationContainer} className={Styles.fileAnimation}></div>
                    <h4>Document Added Successfully</h4>
                    <p>
                        Your document is saved with us.
                    </p>
                    <ButtonComp text='Thank You' onClick={() => setModalShow(false)} />
                </Modal.Body>

            </Modal>
        </div>
    )
}

export default PhotosDocs