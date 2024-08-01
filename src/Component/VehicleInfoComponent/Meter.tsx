import React, { useState } from 'react'
import Styles from "./VehicleInfoComponent.module.css"
import ButtonComp from '../Button'
import Image from 'next/image';
import { Col, Form, Offcanvas, Row, Table } from 'react-bootstrap';
import { FileUploadSection, FormGroup } from '../VehicleBasicDetailsComponent/BasicDetails';
import DragDropFilePicker, { ComponentViewContext } from '../DragDropFilePicker';

const Meter = () => {
    const [show, setShow] = useState(false);
    const [meatorData, setMeatorData] = useState(false);
    const [meatorTblData, setMeatorTblData] = useState(true); // Set to true to display the table data
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const tableData = [
        { meterValue: '748940', recordedDate: 'Apr 22, 2023, 12:45PM', void: '––', source: 'GPS Integration Apr 22, 2023, 12:45PM', attachments: 'Apr 22, 2023, 12:45PM' },
        { meterValue: '748940', recordedDate: 'Apr 22, 2023, 12:45PM', void: '––', source: 'GPS Integration Apr 22, 2023, 12:45PM', attachments: 'Apr 22, 2023, 12:45PM' },
        { meterValue: '748940', recordedDate: 'Apr 22, 2023, 12:45PM', void: '––', source: 'GPS Integration Apr 22, 2023, 12:45PM', attachments: 'Apr 22, 2023, 12:45PM' }
    ];

    return (
        <>
            <div className={`${Styles.whiteBg} mt-4`}>
                <div className='d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap'>
                    <div className={Styles.headerTbl}>
                        <h1 className={Styles.tabMainTitle}>Meter History Log</h1>
                    </div>
                    <ButtonComp text='Add Meter History' onClick={handleShow} />
                </div>
                {meatorData &&
                    <div className={Styles.emptyBox}>
                        <Image src="/meator.png" width={277} height={123} alt='' />
                        <h1>No Meter History added yet.</h1>
                        <h5>Add your first history log.</h5>
                    </div>
                }
                {meatorTblData &&
                    <Table className={Styles.table} responsive>
                        <thead>
                            <tr>
                                <th>Meter Value</th>
                                <th>Recorded Date</th>
                                <th>Void</th>
                                <th>Source</th>
                                <th>Attachments</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((data, index) => (
                                <tr key={index}>
                                    <td>{data.meterValue}</td>
                                    <td>{data.recordedDate}</td>
                                    <td>{data.void}</td>
                                    <td>{data.source}</td>
                                    <td>
                                        <a href="#" style={{ color: "#FE6A57" }}>
                                            <i className="bi bi-paperclip"></i>
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                }
            </div>
            <Offcanvas show={show} onHide={handleClose} backdrop="static" placement='end'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title><h1 className={Styles.sidebarTitle}>Add Meter History</h1></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className={Styles.sideBody}>
                    <Row className='gy-4'>
                        <Col md={12}>
                            <FormGroup label="Meter Value:*">
                                <Form.Control type="text" placeholder="Fuel (in liters):*" className='com-input' />
                            </FormGroup>
                        </Col>
                        <Col lg={6} md={12}>
                            <FormGroup label="Date">
                                <Form.Control type="date" className='com-input' />
                            </FormGroup>
                        </Col>
                        <Col lg={6} md={12}>
                            <FormGroup label="Time*">
                                <Form.Control type="time" className='com-input' />
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
                    </Row>
                    <div className='d-flex align-items-center justify-content-between'>
                        <ButtonComp text='Cancel' className='outlineButton' onClick={() => { handleClose(); setMeatorData(true); setMeatorTblData(false); }} />
                        <ButtonComp text='Add Fuel Record' onClick={() => {
                            handleClose();
                            setMeatorData(false);
                            setMeatorTblData(true);
                        }} />
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default Meter
