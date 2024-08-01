import React, { useState } from 'react';
import Styles from "./VehicleInfoComponent.module.css";
import ButtonComp from '../Button';
import Image from 'next/image';
import { Col, Form, Offcanvas, Row, Table } from 'react-bootstrap';
import { FormGroup } from '../VehicleBasicDetailsComponent/BasicDetails';

const Service = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [emptyBox, setEmptyBox] = useState(false);
    const [serviceData, setServiceData] = useState(true);

    const tableData = [
        { serviceNo: 'SC_3894', issues: '19 Issues', odometer: '678393', serviceAddress: 'MS Auto Services', scheduledBy: 'Nouf K', scheduledDate: '22/04/2023 10:56 AM', downtime: '48 hrs', resolved: '15/19', status: 'Delayed' },
        { serviceNo: 'SC_3894', issues: '9 Issues', odometer: '678393', serviceAddress: 'MS Auto Services', scheduledBy: 'Mustafa P', scheduledDate: '22/04/2023 10:56 AM', downtime: '30 hrs', resolved: '8/9', status: 'On-time' },
        { serviceNo: 'SC_3894', issues: '19 Issues', odometer: '678393', serviceAddress: 'MS Auto Services', scheduledBy: 'Ashfaque S', scheduledDate: '22/04/2023 10:56 AM', downtime: '40 hrs', resolved: '10/12', status: 'Delayed' }
    ];

    const getStatusBadge = (status) => {
        switch (status) {
            case 'On-time':
                return <span className={Styles.onTime}>ON-TIME</span>;
            case 'Delayed':
                return <span className={Styles.delayed}>DELAYED</span>;
            default:
                return <span>{status}</span>;
        }
    };

    return (
        <>
            <div className={`${Styles.whiteBg} mt-4`}>
                <div className='d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap'>
                    <div className={Styles.headerTbl}>
                        <h1 className={Styles.tabMainTitle}>Servicing Records</h1>
                    </div>
                    <ButtonComp text='Add New Record' onClick={handleShow} />
                </div>
                {emptyBox &&
                    <div className={Styles.emptyBox}>
                        <Image src="/service.png" width={277} height={250} alt='' />
                        <h1>No Servicing details added yet.</h1>
                        <h5>Add your first service records</h5>
                    </div>
                }
                {serviceData &&
                    <Table className={Styles.table} responsive>
                        <thead>
                            <tr>
                                <th>Service No.</th>
                                <th>Odometer</th>
                                <th>Service Address</th>
                                <th>Scheduled By</th>
                                <th>Downtime</th>
                                <th>Resolved</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((data, index) => (
                                <tr key={index}>
                                    <td className={Styles.ServiceNo}>
                                        <div>
                                            <div>{data.serviceNo}</div>
                                            <small>{data.issues}</small>
                                        </div>
                                    </td>
                                    <td className={Styles.Odometer}>{data.odometer}</td>
                                    <td className={Styles.ServiceAddress}>{data.serviceAddress}<br /><span>Location name</span></td>
                                    <td>
                                        <div className={Styles.scheduledBy}>
                                            <div className={Styles.initials}>{data.scheduledBy.split(' ').map(n => n[0]).join('')}</div>
                                            <div>
                                                <div  className={Styles.scheduledByText}>{data.scheduledBy}</div>
                                                <small>{data.scheduledDate}</small>
                                            </div>
                                        </div>
                                    </td>
                                    <td className={Styles.Downtime}>{data.downtime}</td>
                                    <td className={Styles.Resolved}>{data.resolved}</td>
                                    <td>{getStatusBadge(data.status)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                }
            </div>
            <Offcanvas show={show} onHide={handleClose} backdrop="static" placement='end'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title><h1 className={Styles.sidebarTitle}>Add Schedule Service</h1></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className={Styles.sideBody}>
                    <Row className='gy-4'>
                        <Col md={12}>
                            <FormGroup label="Vendor *">
                                <Form.Control type="text" placeholder="Select Vendor Name" className='com-input' />
                            </FormGroup>
                        </Col>
                        <Col md={12}>
                            <FormGroup label="Service Center Location *">
                                <Form.Control type="text" placeholder="Location" className='com-input' />
                            </FormGroup>
                        </Col>
                        <Col lg={6} md={12}>
                            <FormGroup label="Odometer Reading *">
                                <Form.Control type="text" placeholder="XXXXXX" className='com-input' />
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
                            <FormGroup label="Actual Date">
                                <Form.Control type="date" className='com-input' />
                            </FormGroup>
                        </Col>
                        <Col lg={6} md={12}>
                            <FormGroup label="Actual Time">
                                <Form.Control type="time" className='com-input' />
                            </FormGroup>
                        </Col>
                        <Col lg={6} md={12}>
                            <FormGroup label="Completion Date">
                                <Form.Control type="date" className='com-input' />
                            </FormGroup>
                        </Col>
                        <Col lg={6} md={12}>
                            <FormGroup label="Completion Time">
                                <Form.Control type="time" className='com-input' />
                            </FormGroup>
                        </Col>
                        <Col lg={6} md={12}>
                            <FormGroup label="Next Service Due on">
                                <Form.Control type="date" className='com-input' />
                            </FormGroup>
                        </Col>
                        <Col lg={6} md={12}>
                            <FormGroup label="Set Reminder">
                                <Form.Control type="time" className='com-input' />
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

export default Service;
