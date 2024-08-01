import React, { useState } from 'react';
import Styles from "./VehicleInfoComponent.module.css";
import ButtonComp from '../Button';
import Image from 'next/image';
import { Col, Form, Offcanvas, Row, Table } from 'react-bootstrap';
import { FormGroup } from '../VehicleBasicDetailsComponent/BasicDetails';
const Issues = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [emptyBox, setEmptyBox] = useState(false);
    const [serviceData, setServiceData] = useState(true);

    const tableData = [
        { issueId: 'Iss_12', issuesDate: '18/01/2023 20:00', odometer: '678393', scheduledBy: 'Nouf K', position: 'Driver', issue: 'Loose Hand brake', status: 'High' },
        { issueId: 'Iss_12', issuesDate: '18/01/2023 20:00', odometer: '678393', scheduledBy: 'Nouf K', position: 'Driver', issue: 'Loose Hand brake', status: 'High' },
        { issueId: 'Iss_12', issuesDate: '18/01/2023 20:00', odometer: '678393', scheduledBy: 'Nouf K', position: 'Driver', issue: 'Loose Hand brake', status: 'High' },
    ];

    const getStatusBadge = (status) => {
        switch (status) {
            case 'High':
                return <span className={Styles.onTime}>High</span>;
            case 'Low':
                return <span className={Styles.delayed}>Low</span>;
            default:
                return <span>{status}</span>;
        }
    };
    return (
        <>
            <div className={`${Styles.whiteBg} mt-4`}>
                <div className='d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap'>
                    <div className={Styles.headerTbl}>
                        <h1 className={Styles.tabMainTitle}>Issues</h1>
                    </div>
                    <ButtonComp text='Add New Issue' onClick={handleShow} />
                </div>

                <Table className={Styles.table} responsive>
                    <tbody>
                        {tableData.map((data, index) => (
                            <tr key={index}>
                                <td className={Styles.ServiceNo}>
                                    <div>
                                        <div>{data.issueId}</div>
                                        <small>{data.issuesDate}</small>
                                    </div>
                                </td>
                                <td className={Styles.Odometer}>{data.odometer}</td>
                                <td className={Styles.Downtime}>{data.issue}</td>
                                <td>
                                    <div className={Styles.scheduledBy}>
                                        <div className={Styles.initials}>{data.scheduledBy.split(' ').map(n => n[0]).join('')}</div>
                                        <div>
                                            <div className={Styles.scheduledByText}>{data.scheduledBy}</div>
                                            <small>{data.position}</small>
                                        </div>
                                    </div>
                                </td>
                                <td>{getStatusBadge(data.status)}</td>
                                <td><i className="bi bi-three-dots-vertical cursor-pointer"></i></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

            </div>
            <Offcanvas show={show} onHide={handleClose} backdrop="static" placement='end'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title><h1 className={Styles.sidebarTitle}>Add New Issue</h1></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className={Styles.sideBody}>
                    <Row className='gy-4'>
                        <Col md={12}>
                            <FormGroup label="Issue Title *">
                                <Form.Control type="text" placeholder="Issue title" className='com-input' />
                            </FormGroup>
                        </Col>
                        <Col md={12}>
                            <FormGroup label="Issue Description *">
                                <Form.Control as="textarea" placeholder='Issue Description' rows={3} className='com-textarea' />
                            </FormGroup>
                        </Col>
                        <Col lg={6} md={12}>
                            <FormGroup label="Reported By *">
                                <select className="form-control selectBox selectBoxSide">
                                    <option value="">Select Name</option>
                                    <option value="">Option 1</option>
                                    <option value="">Option 2</option>
                                    <option value="">Option 3</option>
                                </select>
                            </FormGroup>
                        </Col>
                        <Col lg={6} md={12}>
                            <FormGroup label="Assigned To *">
                                <select className="form-control selectBox selectBoxSide">
                                    <option value="">Select Name</option>
                                    <option value="">Option 1</option>
                                    <option value="">Option 2</option>
                                    <option value="">Option 3</option>
                                </select>
                            </FormGroup>
                        </Col>
                        <Col lg={6} md={12}>
                            <FormGroup label="Odometer Reading *">
                                <Form.Control type="text" placeholder="XXXXXXX" className='com-input' />
                            </FormGroup>
                        </Col>
                        <Col lg={6} md={12}>
                            <FormGroup label="Total Downtime:*">
                                <Form.Control type="text" placeholder="Enter Total downtime" className='com-input' />
                            </FormGroup>
                        </Col>
                        <Col lg={6} md={12}>
                            <FormGroup label="Scheduled Date">
                                <Form.Control type="date" className='com-input' />
                            </FormGroup>
                        </Col>
                        <Col lg={6} md={12}>
                            <FormGroup label="Scheduled Time">
                                <Form.Control type="time" className='com-input' />
                            </FormGroup>
                        </Col>
                        <Col lg={6} md={12}>
                            <FormGroup label="Overdue Settings">
                                <Form.Control type="date" className='com-input' />
                            </FormGroup>
                        </Col>
                        <Col lg={6} md={12}>
                            <FormGroup label="Due After Meter Value *">
                                <Form.Control type="text" placeholder="Km" className='com-input' />
                            </FormGroup>
                        </Col>
                    </Row>
                    <div className='d-flex align-items-center justify-content-between'>
                        <ButtonComp text='Cancel' className='outlineButton' onClick={() => { handleClose(); setEmptyBox(true); setServiceData(false); }} />
                        <ButtonComp text='Add Fuel Record' onClick={() => {
                            handleClose();
                            setEmptyBox(false);
                            setServiceData(true);
                        }} />
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default Issues