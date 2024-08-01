import React, { useState } from 'react';
import Styles from './VehicleInfoComponent.module.css';
import ButtonComp from '../Button';
import Image from 'next/image';
import { Col, Form, Offcanvas, Row, Table } from 'react-bootstrap';
import ToggleSwitch from '../ToggleSwitch';
import { FileUploadSection, FormGroup } from '../VehicleBasicDetailsComponent/BasicDetails';
import DragDropFilePicker, { ComponentViewContext } from '../DragDropFilePicker';
const tableData = [
    { serviceNo: 'INS748940', issues: 'Apr 22, 2023, 12:45PM', odometer: '678393', inspectingUser: 'Sam Evans', web: 'Web App', inspectionForm: 'Simple Inspection Form', receipt: '' }
];


const historyItems = [
    { itemName: 'Odometer Reading', image: "/Odometer.png" },
    { itemName: 'Interior Cleanliness', image: "/Interior.png" },
    { itemName: 'Oil Life Left', image: "/Oil.png" },
    { itemName: 'Horn', image: "/Horn.png" },
    { itemName: 'Lighting Devices and Reflectors', image: "/Lighting.png" },
    { itemName: 'Steering Mechanism', image: "/Steering.png" },
    { itemName: 'Coupling Devices', image: "/Coupling.png" },
    { itemName: 'Parking Brake', image: "/Parking.png" },
    { itemName: 'Windshield and Wipers/Washers', image: "/Windshield.png" },
]

const InspectionHistoryTable = ({ data }) => (
    <Table className={Styles.table} responsive>
        <thead>
            <tr>
                <th>Submission No.</th>
                <th>Odometer Reading</th>
                <th>Inspecting User</th>
                <th>Inspection Form</th>
                <th>Failed Items</th>
                <th>Receipt</th>
            </tr>
        </thead>
        <tbody>
            {data.map((item, index) => (
                <tr key={index}>
                    <td className={Styles.ServiceNo}>
                        <div>
                            <div>{item.serviceNo}</div>
                            <small>{item.issues}</small>
                        </div>
                    </td>
                    <td className={Styles.Odometer}>{item.odometer}</td>
                    <td className={Styles.ServiceNo}>
                        <div>
                            <div>{item.inspectingUser}</div>
                            <small>{item.web}</small>
                        </div>
                    </td>
                    <td className={Styles.Downtime}>{item.inspectionForm}</td>
                    <td>
                        <div className='d-flex gap-2'>
                            <div className={Styles.tblImg}>
                                <Image src="/Interior.png" height={35} width={35} alt='' />
                            </div>
                            <div className={Styles.tblImg}><Image src="/Horn.png" height={35} width={35} alt='' /></div>
                            <div className={Styles.tblImg}><Image src="/Steering.png" height={35} width={35} alt='' /></div>
                            <div className={Styles.tblImg}><Image src="/Coupling.png" height={35} width={35} alt='' /></div>
                        </div>
                    </td>
                    <td>
                        <a href='#' style={{ color: '#FE6A57' }}>
                            <i className='bi bi-paperclip'></i>
                        </a>
                    </td>
                </tr>
            ))}
        </tbody>
    </Table>
);

const HistoryItem = ({ item, handleShow, image }) => (
    <div className={Styles.addHistoryMain}>
        <div className={Styles.addHistoryText}>
            <div className={Styles.tblImg}>
                <Image src={image} alt='' height={35} width={35} />
            </div>
            <p>{item}</p>
        </div>
        <div className={Styles.addHistoryTag}>
            {item === 'Odometer Reading' ? (
                <Form.Control type='text' placeholder='' className='com-input' />
            ) : (
                <ToggleSwitch />
            )}
        </div>
        <div className={Styles.addHistoryIcon}>
            <i className='bi bi-images'></i>
            <i className='bi bi-chat' onClick={handleShow}></i>
        </div>
    </div>
);

const Inspection = () => {
    const [historyData, setHistoryData] = useState(false);
    const [emptyData, setEmptyData] = useState(true);

    const handleAddHistory = () => {
        setHistoryData(true);
        setEmptyData(false);
    };
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className={`${Styles.whiteBg} mt-4 `}>
                <div className='d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap'>
                    <div className={Styles.headerTbl}>
                        <h1 className={Styles.tabMainTitle}>Inspection History</h1>
                    </div>
                    {emptyData && <ButtonComp text='Add History' onClick={handleAddHistory} />}
                </div>
                {emptyData ? (
                    <div className={Styles.emptyBox}>
                        <Image src='/Inspection.png' width={350} height={250} alt='' />
                        <h1>No Inspections added yet.</h1>
                        <h5>Add your first inspection</h5>
                    </div>
                ) : (
                    <InspectionHistoryTable data={tableData} />
                )}
            </div>
            {historyData &&
                <>
                    <div className={Styles.addHistory}>
                        {historyItems.map((item, index) => (
                            <HistoryItem key={index} item={item.itemName} handleShow={handleShow} image={item.image} />
                        ))}
                    </div>

                    <div className={Styles.signOff}>
                        <Row className='gy-4'>
                            <Col md={12}><h1>Sign Offs</h1></Col>
                            <Col lg={6} md={12}>
                                <h2>Remarks</h2>
                                <Form.Control as="textarea" rows={3} className='com-textarea' />
                            </Col>
                            <Col lg={6} md={12}>
                                <h2>Driver’s Signature</h2>
                                <Form.Control as="textarea" rows={3} className='com-textarea' />
                            </Col>
                            <Col md={12} className='d-flex justify-content-between'>
                                <ButtonComp text='Cancel' className='outlineButton' />
                                <ButtonComp text='Submit Logs' />
                            </Col>
                        </Row>
                    </div>
                </>
            }
            <Offcanvas show={show} onHide={handleClose} backdrop="static" placement='end'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title><h1 className={Styles.sidebarTitle}>Add Comment/Remark</h1></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className={Styles.sideBody}>
                    <Row className='gy-4'>
                        <Col md={12}>
                            <FormGroup label="Add Comments *">
                                <Form.Control as="textarea" placeholder='Write your notes' rows={3} className='com-textarea' />
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
                        <ButtonComp text='Cancel' className='outlineButton' onClick={(handleClose)} />
                        <ButtonComp text='Add Your Comments' onClick={(handleClose)} />
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default Inspection;
