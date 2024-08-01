import React, { useState } from 'react';
import Styles from './VehicleInfoComponent.module.css';
import ButtonComp from '../Button';
import { Col, Form, Offcanvas, Row, Table } from 'react-bootstrap';
import { FormGroup } from '../VehicleBasicDetailsComponent/BasicDetails';

const tableData = [
    { ExpenseFor: 'Toll', ExpenseForDate: 'Toll chargers of SAR 283 at ‘Location Name', distanceTravelled: '678393', SubmissionDate: 'Apr 22, 2023 12:45PM', name: 'Drake B', position: 'Driver', Frequency: 'Once', amt: '283', manual: 'Manual' },
    { ExpenseFor: 'Overspeed Fine', ExpenseForDate: 'Over speeding Fine', distanceTravelled: '678393', SubmissionDate: 'Apr 22, 2023 12:45PM', name: 'Drake B', position: 'Driver', Frequency: 'Once', amt: '1000', manual: 'Manual' },
];

const ExpenseHistory = ({ setExpenseDetails, handleShow }) => (
    <>
        <div className='d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap'>
            <div className={Styles.headerTbl}>
                <h1 className={Styles.tabMainTitle}>Expense History</h1>
            </div>
            <ButtonComp text='Add New Expense' onClick={handleShow} />
        </div>
        <Table className={Styles.table} responsive>
            <thead>
                <tr>
                    <th>Expense For</th>
                    <th>Odometer Reading</th>
                    <th>Submission Date</th>
                    <th>SRC</th>
                    <th>Reported By</th>
                    <th>Frequency</th>
                    <th className='text-center'>Amt</th>
                </tr>
            </thead>
            <tbody>
                {tableData.map((data, index) => (
                    <tr key={index}>
                        <td>
                            <div className={`${Styles.ServiceNo} `}>
                                <div>
                                    <div className='cursor-pointer' onClick={() => setExpenseDetails(true)}>{data.ExpenseFor}</div>
                                    <small>{data.ExpenseForDate}</small>
                                </div>
                            </div>
                        </td>
                        <td className={Styles.Odometer}>{data.distanceTravelled}</td>
                        <td className={Styles.Odometer}>{data.SubmissionDate}</td>
                        <td className={Styles.Odometer}></td>
                        <td>
                            <div className={Styles.scheduledBy}>
                                <div className={Styles.initials}>{data.name.split(' ').map(n => n[0]).join('')}</div>
                                <div>
                                    <div className={Styles.scheduledByText}>{data.name}</div>
                                    <small>{data.position}</small>
                                </div>
                            </div>
                        </td>
                        <td className={Styles.Odometer}>{data.Frequency}</td>
                        <td>
                            <div className='text-center'>
                                <div className={Styles.scheduledByText}>{data.amt}</div>
                                <small>SAR</small>
                            </div>
                        </td>
                        <td >
                            <a href='#' style={{ color: '#FE6A57' }}>
                                <i className='bi bi-paperclip'></i>
                            </a>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    </>
);

const ExpenseDetails = ({ data, setExpenseDetails }) => (
    <>
        <div className='d-flex align-items-center justify-content-between flex-wrap'>
            <div className='d-flex align-items-center gap-5'>
                <i className="bi bi-arrow-left cursor-pointer" style={{ fontSize: '30px' }} onClick={() => setExpenseDetails(false)}></i>
                <h1 className={Styles.tabMainTitle}>Overspeed Fine</h1>
            </div>
            <div className={Styles.rightHeader}>
                <p>SHIPMENT INFO</p>
                <small>PO_WU939499999</small>
                <i className="bi bi-paperclip"></i>
            </div>
        </div>

        <Table responsive className={`${Styles.table} ${Styles.ExpenseDetailsTable} mt-4`}>
            <thead>
                <tr>
                    <th>EXPENSE TYPE</th>
                    <th>VENDOR NAME</th>
                    <th>SOURCE</th>
                    <th>REPORTED BY</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <div className={`${Styles.ServiceNo} `}>
                            <div>
                                <div className='cursor-pointer' onClick={() => setExpenseDetails(true)}>{data.ExpenseFor}</div>
                                <small>{data.ExpenseForDate}</small>
                            </div>
                        </div>
                    </td>
                    <td className={Styles.Odometer}>{data.distanceTravelled}</td>
                    <td className={Styles.Odometer}>{data.manual}</td>
                    <td>
                        <div className={Styles.scheduledBy}>
                            <div className={Styles.initials}>{data.name.split(' ').map(n => n[0]).join('')}</div>
                            <div>
                                <div className={Styles.scheduledByText}>{data.name}</div>
                                <small>{data.position}</small>
                            </div>
                        </div>
                    </td>
                    <td className={Styles.Odometer}>{data.Frequency}</td>
                    <td>
                        <div className='text-center'>
                            <div className={Styles.scheduledByText}>{data.amt}</div>
                            <small>SAR</small>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td colSpan={6} className={Styles.expenseTypeMain}>
                        <p>EXPENSE TYPE</p>
                        <small>Two tickets: one for not having seatbelt on and another for over speeding.</small>
                    </td>
                </tr>
            </tbody>
        </Table>

        <div className={Styles.SupportingFiles}>
            <h2>Supporting Files</h2>
            <Table responsive className={`${Styles.table} ${Styles.secTable}`}>
                <thead>
                    <tr>
                        <th>File Type</th>
                        <th>File Name</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={Styles.secTd}>Image</td>
                        <td className={Styles.secTd}>Image_12</td>
                        <td className={Styles.secTd}>Image of fine paper</td>
                        <td className={Styles.secTd}>
                            <i className="bi bi-paperclip"></i>
                            <i className="bi bi-download"></i>
                        </td>
                    </tr>
                    <tr>
                        <td className={Styles.secTd}>Document</td>
                        <td className={Styles.secTd}>Fine Receipt</td>
                        <td className={Styles.secTd}>PDF file</td>
                        <td className={Styles.secTd}>
                            <i className="bi bi-paperclip"></i>
                            <i className="bi bi-download"></i>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
        <div className={Styles.TakeAction}>
            <h5>Description</h5>
            <Form.Control as="textarea" placeholder="Write your notes" rows={3} className='com-textarea' style={{ borderRadius: "10px" }} />
        </div>
        <div className='d-flex justify-content-end mt-4'>
            <ButtonComp text='Update The Status' />
        </div>
    </>
);

const AddExpenseOffcanvas = ({ show, handleClose, handleType, expenseType, selectBox, setSelectBox }) => (
    <Offcanvas show={show} onHide={handleClose} backdrop="static" placement='end'>
        <Offcanvas.Header closeButton>
            <Offcanvas.Title><h1 className={Styles.sidebarTitle}>Expense Type</h1></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className={Styles.sideBody}>
            <Row className='gy-4'>
                <Col md={12}>
                    <div className={Styles.expenseType}>
                        <Row className='gy-4'>
                            <Col lg={12}>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <input type="text" placeholder='Select Expense Type' className={Styles.hiddenSearch} onFocus={() => setSelectBox(true)} />
                                    <i className="bi bi-search"></i>
                                </div>
                            </Col>
                            {selectBox && (
                                <>
                                    <Col lg={6} md={12} onClick={() => handleType("over")}>
                                        <div className={`${Styles.expenseTypeText} cursor-pointer ${expenseType === "over" ? "expenseTypeSelected" : ""}`}>Over speed Fine</div>
                                    </Col>
                                    <Col lg={6} md={12} onClick={() => handleType("fees")}>
                                        <div className={`${Styles.expenseTypeText} cursor-pointer ${expenseType === "fees" ? "expenseTypeSelected" : ""}`}>Fees & Charges</div>
                                    </Col>
                                    <Col lg={6} md={12} onClick={() => handleType("quarterly")}>
                                        <div className={`${Styles.expenseTypeText} cursor-pointer ${expenseType === "quarterly" ? "expenseTypeSelected" : ""}`}>Quarterly Servicing</div>
                                    </Col>
                                    <Col lg={6} md={12} onClick={() => handleType("toll")}>
                                        <div className={`${Styles.expenseTypeText} cursor-pointer ${expenseType === "toll" ? "expenseTypeSelected" : ""}`}>Toll Charges</div>
                                    </Col>
                                    <Col lg={6} md={12} onClick={() => handleType("repair")}>
                                        <div className={`${Styles.expenseTypeText} cursor-pointer ${expenseType === "repair" ? "expenseTypeSelected" : ""}`}>Repair Service</div>
                                    </Col>
                                    <Col lg={6} md={12} onClick={() => handleType("miscellaneous")}>
                                        <div className={`${Styles.expenseTypeText} cursor-pointer ${expenseType === "miscellaneous" ? "expenseTypeSelected" : ""}`}>Miscellaneous</div>
                                    </Col>
                                </>
                            )}
                        </Row>
                    </div>
                </Col>

                <Col lg={6} md={12}>
                    <FormGroup label="Expense Amount *">
                        <Form.Control type="text" placeholder="Amount" className='com-input' />
                    </FormGroup>
                </Col>
                <Col lg={6} md={12}>
                    <FormGroup label="Submission for">
                        <Form.Control type="date" className='com-input' />
                    </FormGroup>
                </Col>
                <Col md={12}>
                    <FormGroup label="Add Comments *">
                        <Form.Control as="textarea" placeholder="Write your notes" rows={3} className='com-textarea' />
                    </FormGroup>
                </Col>
            </Row>
            <div className='d-flex align-items-center justify-content-between'>
                <ButtonComp text='Cancel' className='outlineButton' onClick={handleClose} />
                <ButtonComp text='Add Your Comment' onClick={handleClose} />
            </div>
        </Offcanvas.Body>
    </Offcanvas>
);

const Expense = () => {
    const [show, setShow] = useState(false);
    const [expenseType, setExpenseType] = useState('');
    const [selectBox, setSelectBox] = useState(false);
    const [expenseDetails, setExpenseDetails] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleType = (name) => setExpenseType(name);

    return (
        <>
            <div className={`${Styles.whiteBg} mt-4`}>
                {expenseDetails ? (
                    <ExpenseDetails data={tableData[1]} setExpenseDetails={setExpenseDetails} />
                ) : (
                    <ExpenseHistory setExpenseDetails={setExpenseDetails} handleShow={handleShow} />
                )}
            </div>
            <AddExpenseOffcanvas
                show={show}
                handleClose={handleClose}
                handleType={handleType}
                expenseType={expenseType}
                selectBox={selectBox}
                setSelectBox={setSelectBox}
            />
        </>
    );
};

export default Expense;
