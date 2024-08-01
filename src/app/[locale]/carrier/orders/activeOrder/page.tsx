"use client"
import React, { useState } from 'react';
import Styles from "./activeOrder.module.css";
import { HeroFirst } from '@/Common/heroFirst';
import { useRouter } from 'next/navigation';
import { Col, Container, Form, Nav, Row, Tab } from 'react-bootstrap';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ButtonComp from '@/Component/Button';
import InvoiceItem from '@/Common/InvoiceItem';
import { Doughnut } from 'react-chartjs-2';
import TimelineCollapse from '@/Component/TimelineCollapse';
import TimelineResponsive from '@/Component/TimelineResponsive';
import ContractCostCard from '@/Component/ContractCostCard ';
import ShipmentDetails from '@/Component/ShipmentDetails';
import Image from 'next/image';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
    datasets: [
        {
            data: [13, 13],
            backgroundColor: ["#3DBF88", "#FE6A57"],
        },
    ],
};

const options = {
    cutout: '70%',
    maintainAspectRatio: true,
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
    },
};

const eventsData = [
    {
        status: 'Pick up',
        time: '11:30 AM',
        description: 'Shamsi Port, Bahar AI Jameel',
        details: 'Arab Mashreq Route 80M\n00 Km/Hr • 00 Km Covered',
        icon: '<i class="bi bi-geo-alt-fill"></i>',
        statusColor: '#5088E7',
    },
    {
        status: 'Pick up 2',
        time: 'EST Time 02:40',
        description: 'Mirage Plaza, Rub Al Khali',
        details: 'Arab Mashreq Route 80M\n160 Km • 160 Km Covered',
        icon: '<div class="pickup"></div>',
        statusColor: '#596D92',
    },
    {
        status: 'Pick up 3',
        time: 'EST Time 05:40',
        description: 'Safa Cove, Al Bahrayn',
        details: 'Arab Mashreq Route 80M\n260 Km • 420 Km Covered',
        icon: '<div class="pickup"></div>',
        statusColor: '#596D92',
    },
    {
        status: 'Destination',
        time: 'EST Time 07:30 PM',
        description: 'Sunflower Valley, Wadi Al Malak',
        details: 'Arab Mashreq Route 80M\n360 Km • 780 Km Covered',
        icon: '<i class="bi bi-geo-alt-fill"></i>',
        statusColor: '#FF6A57',
    },
];
const Page: React.FC = () => {
    const router = useRouter();
    const [collapsedIndex, setCollapsedIndex] = useState<number | null>(null);

    const breadcrumb = [
        { text: "Dashboard", link: "/carrier/dashboard-second" },
        { text: "Order Management", link: '/carrier/orders/manageInquiriesSubmissions' },
        { text: "Active Orders", link: '/' },
    ];

    const handleCollapseToggle = (index: number) => {
        setCollapsedIndex(collapsedIndex === index ? null : index);
    };

    const renderPOsContainer = (index: number) => (
        <div className={Styles.ActivePOsContainer} key={index}>
            <div className={Styles.summary}>
                <div className={Styles.totalHeader}>
                    <p>RFQ 32 0001</p>
                    <span>Contract Number</span>
                </div>
                <div className={Styles.totalHeader}>
                    <p>46682 SAR</p>
                    <span>Total PO Amount</span>
                </div>
                <div className={Styles.totalHeader}>
                    <p>02</p>
                    <span>Invoices</span>
                </div>
                <div style={{ height: '46px', width: '46px' }}>
                    <Doughnut data={data} options={options} />
                </div>
                <i className="bi bi-chevron-down" onClick={() => handleCollapseToggle(index)} style={{ cursor: 'pointer' }}></i>
            </div>
            {collapsedIndex === index && (
                <div className={`${Styles.invoiceItems} mt-4`}>
                    <InvoiceItem
                        poNumber="PO 23567"
                        poAmount="23341 SAR"
                        locationType="SPSD"
                        fromLocation="Riyadh"
                        toLocation="Mecca"
                        status="Confirmed"
                    />
                    <InvoiceItem
                        poNumber="PO 23567"
                        poAmount="23341 SAR"
                        locationType="SPSD"
                        fromLocation="Riyadh"
                        toLocation="Mecca"
                        status="Pending"
                    />
                </div>
            )}
        </div>
    );

    const tabContentsActivePOs = (
        <div className='mt-5 d-flex flex-column gap-3'>
            {[0, 1, 2].map(index => renderPOsContainer(index))}
        </div>
    );

    const tabDocumentsNewPORequests = (
        <div className='w-100'>
            <Row>
                <Col xl={9} lg={12} md={12} sm={12} className='mt-5'>
                    <Row className='gy-4'>
                        <Col md={12}>
                            <div className={`${Styles.whiteBgCom} gap-3 d-flex align-items-center justify-content-between py-3 flex-wrap`}>
                                <p className='fs-5 fw-semibold'>PO View Page: PO_86868686</p>
                                <div className={Styles.viewButton}>
                                    <Image src="/pdf-icon.png" height={30} width={30} alt="" />
                                    <p className='fw-bold fs-5'>View PDF</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={12}>
                            <div className={Styles.whiteBgCom}>
                                <h5 className='fw-bold mb-4'>Contract Details</h5>
                                <div className='d-flex gap-5 flex-wrap'>
                                    <div className={Styles.cDetails}>
                                        <span>Start Date</span>
                                        <p>17/06/2023</p>
                                    </div>
                                    <div className={Styles.cDetails}>
                                        <span>RFQ Duration</span>
                                        <p>90 (in days)</p>
                                    </div>
                                    <div className={Styles.cDetails}>
                                        <span>Item Unit Type</span>
                                        <p>Kilo Gram</p>
                                    </div>
                                    <div className={Styles.cDetails}>
                                        <span>Estimated weight delivery range</span>
                                        <p>500-600</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={12} className='d-flex'>
                            <div className={Styles.whiteBgCom}>
                                <h5 className='fw-bold mb-4'>Servicing & Licensing Details</h5>
                                <div className={`${Styles.cDetails} ${Styles.sDetails}`}>
                                    <span>Additional Services</span>
                                    <p>Loading, Packaging, Froklifting</p>
                                </div>
                                <div className={`${Styles.cDetails} ${Styles.sDetails} mt-4`}>
                                    <span>Additional Licensing Requirement</span>
                                    <p>A Commercial Invoice, A Bill of Loading, A Certificate of Origin</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={12}>
                            <div className={Styles.whiteBgCom}>
                                <h4 className='mb-4 fw-bold'>Package Details</h4>
                                <Row className='gy-4'>
                                    <Col lg={6} md={12} >
                                        <div className="com-label-second">Item</div>
                                        <Form.Control type="text" value="Fluid Cans" className='com-input-second' disabled />
                                    </Col>
                                    <Col lg={6} md={12}>
                                        <div className="com-label-second">Item Type</div>
                                        <select className="form-control selectBox com-input-second">
                                            <option value="">Non Hazardous Fluid</option>
                                            <option value="">Option 1</option>
                                            <option value="">Option 2</option>
                                            <option value="">Option 3</option>
                                        </select>
                                    </Col>
                                    <Col lg={6} md={12}>
                                        <div className="com-label-second">Package Type</div>
                                        <select className="form-control selectBox com-input-second">
                                            <option value="">Cans</option>
                                            <option value="">Option 1</option>
                                            <option value="">Option 2</option>
                                            <option value="">Option 3</option>
                                        </select>
                                    </Col>
                                    <Col lg={6} md={12} >
                                        <div className="com-label-second">Quantity</div>
                                        <Form.Control type="text" value="12" className='com-input-second' disabled />
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col lg={6} md={12} className='d-flex'>
                            <ContractCostCard />
                        </Col>
                        <Col lg={6} md={12}>
                            <ShipmentDetails />
                        </Col>
                        <Col md={12}>
                            <div className={Styles.whiteBgCom}>
                                <h4 className='mb-2 fw-bold'>Payment Terms</h4>
                                <div className="horizontal-scroll">
                                    <table className='w-100 overflow-x-auto' >
                                        <thead>
                                            <tr>
                                                <th className='py-4 px-2 fs-5'>Milestone Division</th>
                                                <th className='text-center  px-2 py-4 fs-5'>Value %</th>
                                                <th className='text-center px-2 py-4 fs-5'>Invoice Raise</th>
                                                <th className='text-center px-2 py-4 fs-5'>Invoice Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className='fs-5 fw-semibold'>Milestone 1</td>
                                                <td className='p-2'><Form.Control type="text" placeholder="Amount" value="10" className='com-input' /></td>
                                                <td className='p-2'><Form.Control type="text" placeholder="Amount" value="PO Signed" className='com-input' /></td>
                                                <td className='p-2'><Form.Control type="text" placeholder="Amount" value="329" className='com-input' /></td>
                                            </tr>
                                            <tr>
                                                <td className='fs-5 fw-semibold'>Milestone 2</td>
                                                <td className='p-2'><Form.Control type="text" placeholder="Amount" value="20" className='com-input' /></td>
                                                <td className='p-2'><Form.Control type="text" placeholder="Amount" value="Shipment Delivered" className='com-input' /></td>
                                                <td className='p-2'><Form.Control type="text" placeholder="Amount" value="698" className='com-input' /></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className='d-flex gap-3 justify-content-end flex-wrap'>
                                <ButtonComp text="Suggestion Revision" className='outlineButton' />
                                <ButtonComp text="Confirm & Initiate Shipment Method" />
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col xl={3} lg={12} md={12} sm={12} className={Styles.tabDocumentsNewPORequestsRight}>
                    <TimelineCollapse title="Via Arab Mashreq Route" description="Recommended Route">
                        <TimelineResponsive events={eventsData} />
                    </TimelineCollapse>
                </Col>

            </Row>
        </div>

    );

    return (
        <div className='position-relative'>
            <HeroFirst BoldText='Active Orders' breadcrumb={breadcrumb} />
            <Container fluid className={`${Styles.layout} px-5`}>
                <div className={`empTab ${Styles.empTab}`}>
                    <Tab.Container defaultActiveKey="Active POs">
                        <Row>
                            <Col sm={12}>
                                <Nav variant="underline" className={Styles.tabKey}>
                                    {['Active POs', 'New PO Requests', 'Invoices'].map(key => (
                                        <Nav.Item key={key}>
                                            <Nav.Link eventKey={key} className={Styles.navLink}>
                                                {key.charAt(0).toUpperCase() + key.slice(1)}
                                            </Nav.Link>
                                        </Nav.Item>
                                    ))}
                                </Nav>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <div className={Styles.tabContainer}>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="Active POs">
                                            {tabContentsActivePOs}
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="New PO Requests">
                                            {tabDocumentsNewPORequests}
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="Invoices">
                                            {/* Add content for Invoices here */}
                                        </Tab.Pane>
                                    </Tab.Content>
                                </div>
                            </Col>
                        </Row>
                    </Tab.Container>
                </div>
            </Container>
        </div>
    );
}

export default Page;
