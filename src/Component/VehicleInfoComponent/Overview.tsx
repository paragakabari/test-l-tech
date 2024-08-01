import React from 'react';
import { Card, ProgressBar, Table, Button, Dropdown, Col, Row, NavDropdown } from 'react-bootstrap';
import Styles from "./VehicleInfoComponent.module.css";
import { Line } from 'react-chartjs-2';
import GoogleMapReact from "google-map-react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import ButtonComp from '../Button';
import Timeline from '../Timeline';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const eventsData = [
    {
        status: 'Current Status',
        time: '03:40',
        description: 'Moving',
        details: 'Arab Mashreq Route 80M\n60 Km/Hr • 600 Km Covered',
        icon: '<i class="bi bi-send-fill"></i>',
        statusColor: '#5088E7',
    },
    {
        status: 'Issue Raised',
        time: '02:40',
        description: 'Issue with vehicle',
        details: 'Issue 38',
        icon: '<i class="bi bi-exclamation-lg"></i>',
        statusColor: '#DB615C',
        resolvedCard: true,
        buttonText: "RESOLVE",
    },
    {
        status: 'Idle',
        time: '01:40',
        description: 'Idle for 13 Min',
        details: '',
        icon: '<i class="bi bi-pause"></i>',
        statusColor: '#EF7562',
    },
    {
        status: 'Lunch Break',
        time: '11:30',
        description: 'Stopped for lunch break',
        details: '',
        icon: '<i class="bi bi-cup-hot-fill"></i>',
        statusColor: '#F6BB41',

    },
];
const Overview = () => {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
            {
                label: 'Current',
                data: [3, 4, 3.5, 4.5, 4, 5, 6],
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                fill: false,
                tension: 0.1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Month',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Km/L',
                },
                min: 0,
                max: 10,
            },
        },
    };
    const defaultProps = {
        center: {
            lat: 24.7136,
            lng: 46.6753,
        },
        zoom: 15,
    };


    return (
        <div className={`${Styles.dashboard} mt-4`}>
            <Row className='gy-4'>
                <Col xxl={9} xl={12} lg={12}>
                    <Row className='gy-4'>
                        <Col md={12} lg={12} xl={6} className='d-flex'>
                            <Card className={`${Styles.dashboardCard} w-100`}>
                                <Card.Body>
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <div className={Styles.cardTitle}>Vehicle Health</div>
                                        <div className={Styles.newDrop}>
                                            <NavDropdown
                                                id="nav-dropdown-dark-example"
                                                title=" Current"
                                            >
                                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.2">
                                                    Another action
                                                </NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                                <NavDropdown.Divider />
                                                <NavDropdown.Item href="#action/3.4">
                                                    Separated link
                                                </NavDropdown.Item>
                                            </NavDropdown>
                                        </div>
                                    </div>
                                    <div className={Styles.progressContainer}>
                                        <div className='d-block'>
                                            <div className={Styles.progressIcon}><i className="bi bi-droplet-half" style={{ color: '#688AF7' }}></i></div>
                                        </div>
                                        <span className={Styles.progressLabel}>Oil Pressure</span>
                                        <ProgressBar now={80} className={`${Styles.ProgressBar} blue-progress`} />
                                        <small>80%</small>
                                    </div>
                                    <div className={Styles.progressContainer}>
                                        <div className='d-block'>
                                            <div className={Styles.progressIcon}><i className="bi bi-wind" style={{ color: '#825EE7' }}></i></div>
                                        </div>
                                        <span className={Styles.progressLabel}>Air Pressure</span>
                                        <ProgressBar now={60} className={`${Styles.ProgressBar} Royal-Blue-progress`} />
                                        <small>80%</small>
                                    </div>
                                    <div className={Styles.progressContainer}>
                                        <div className='d-block'>
                                            <div className={Styles.progressIcon}><i className="bi bi-battery-charging" style={{ color: '#CA3E78' }}></i></div>
                                        </div>
                                        <span className={Styles.progressLabel}>Battery Health</span>
                                        <ProgressBar now={30} className={`${Styles.ProgressBar} Mulberry-progress`} />
                                        <small>80%</small>
                                    </div>
                                    <div className={Styles.progressContainer}>
                                        <div className='d-block'>
                                            <div className={Styles.progressIcon}><i className="bi bi-water" style={{ color: '#EE7765' }}></i></div>
                                        </div>
                                        <span className={Styles.progressLabel}>Water Temperature</span>
                                        <ProgressBar now={10} className={`${Styles.ProgressBar} Bittersweet-progress`} />
                                        <small>80%</small>
                                    </div>
                                    <div className={Styles.progressContainerMetrics}>
                                        <div className={Styles.progressContainerMetric}>
                                            <p>1</p>
                                            <small>Total Trips</small>
                                        </div>
                                        <div className={Styles.progressContainerMetric}>
                                            <p>600 km</p>
                                            <small>Total Distance Driven</small>
                                        </div>
                                        <div className={Styles.progressContainerMetric}>
                                            <p>60 km/h</p>
                                            <small>Highest Speed</small>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={12} lg={12} xl={6} className='d-flex'>
                            <Card className={`${Styles.dashboardCard} w-100`}>
                                <Card.Body>
                                    <div className={Styles.cardTitle}>Fuel Efficiency</div>
                                    <div className={Styles.chartContainer}>
                                        <Line data={data} options={options} />
                                    </div>
                                    <div className={Styles.metrics}>
                                        <div className={Styles.metric}>
                                            <div className='d-block'>
                                                <div className={Styles.progressIcon}><i className="bi bi-fuel-pump-fill" style={{ color: '#745ACB' }}></i></div>
                                            </div>
                                            <div>
                                                <p>7,965 Ltr</p>
                                                <p className={Styles.metSmall}>Fuel Consumed</p>
                                            </div>
                                        </div>
                                        <div className={Styles.metric}>
                                            <div className='d-block'>
                                                <div className={Styles.progressIcon}></div>
                                            </div>
                                            <div>
                                                <p>4,000 SAR</p>
                                                <p className={Styles.metSmall}>Fuel SAR</p>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={12}>
                            <Card className={Styles.dashboardCard}>
                                <Card.Body>
                                    <div className={Styles.issueLogHeader}>
                                        <div className='d-flex align-items-center gap-3'>
                                            <div className={Styles.cardTitle}>Issue Log (06)</div>
                                            <Dropdown className="outlineDropdown">
                                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                    Resolved
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="#/action-1">Resolved</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-2">Unresolved</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                        <ButtonComp text='Open New Issue' />
                                    </div>

                                    <div className={Styles.issueLog}>
                                        <Row className='gy-4 p-0 m-0'>
                                            {[...Array(6)].map((_, index) => (
                                                <Col md={6}>
                                                    <Card key={index} className={Styles.issueLogCard}>
                                                        <Card.Body className='p-0 m-0'>
                                                            <Card.Text>
                                                                <div className='d-flex justify-content-between'>
                                                                    <p className={Styles.cardHeadTitle}>ISSUE 24</p> <span className={Styles.resolvedCard}>RESOLVED</span>
                                                                </div>
                                                                <p className={Styles.cardHeadTitleText}>Issue with vehicle</p>
                                                                <p className={Styles.CardDetailsText}>
                                                                    Due to the extent of the damage, the vehicle is currently unable to meet the requirements for
                                                                    safe and reliable delivery services.
                                                                </p>
                                                            </Card.Text>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                            ))}
                                        </Row>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={12}>
                            <Card className={Styles.dashboardCard}>
                                <Card.Body>
                                    <div className={Styles.timeCardHeader}>
                                        <h1>Active Log</h1>
                                        <Dropdown className="outlineDropdown">
                                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                All Activities
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Resolved</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Unresolved</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <Timeline events={eventsData} />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xxl={3} xl={12} lg={12}>
                    <div className={Styles.mapOverview}>
                        <div className={Styles.mapContainer}>
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: "" }}
                                defaultCenter={defaultProps.center}
                                defaultZoom={defaultProps.zoom}
                            />
                            <div className={Styles.overviewDistance}>
                                <div className={Styles.dIconOverview}><i className="bi bi-send-fill"></i></div>
                                <div>
                                    <p>Current Location</p>
                                    <h4>Sana Highway-12</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Overview;
