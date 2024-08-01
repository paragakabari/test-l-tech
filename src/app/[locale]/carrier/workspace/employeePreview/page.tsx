"use client";
import React from 'react';
import Styles from "./employeePreview.module.css";
import { Col, Container, Nav, Row, Tab, Table } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import ButtonComp from '@/Component/Button';
import { HeroFirst } from '@/Common/heroFirst';
import { ProfileCard } from '@/Common/ProfileCard';

const Page = ({ params: { locale } }) => {
    const router = useRouter();
    const breadcrumb = [
        { text: "Dashboard", link: "/carrier/dashboard-second" },
        { text: "Workspace", link: '/carrier/workspace/dashboard' },
        { text: "Employees", link: '/' }
    ];

    const profileData = {
        email: 'kadeerramu@gmail.com',
        dob: 'April 22, 1980',
        phone: '+96-894985048',
        department: 'Transport',
        designation: 'Driver',
        address: '7173 Eastern Ring Branch Rd, King Abdullah Dt., Riyadh 12422, Saudi Arabia',
        trips: 34,
        cities: 19,
        shipments: 400,
        experience: '14+',
    };

    const documents = [
        { name: 'Driving License', number: 'DL-84623742934', size: '12 kb', link: '#' },
        { name: 'KYC documents', number: 'Doc names', size: '211 kb', link: '#' },
        { name: 'Iqama Card', number: 'BHD39933', size: '81 kb', link: '#' },
        { name: 'Experience letter', number: 'PUC Number', size: '13 kb', link: '#' },
    ];

    const tabContents = (
        <div>
            <ButtonComp className={Styles.liveTrackingButton} text='Live Tracking' />
            <div className={Styles.consignmentInfo}>
                3 Consignments Delivered
                <br />
                Rating - 4.2 <span role="img" aria-label="star">⭐</span>
            </div>
        </div>
    );
    const tabDocuments = (
        <div className={Styles.containerTable}>
            <div className={Styles.header}>
                <h2>Documents Assigned</h2>
                <a href="#" className={Styles.addMore}>Add More Documents</a>
            </div>
            <Table className={Styles.table} responsive>
                <tbody>
                    {documents.map((doc, index) => (
                        <tr key={index}>
                            <td className={Styles.name}>{doc.name}</td>
                            <td className={Styles.number}>{doc.number}</td>
                            <td className={Styles.size}>{doc.size}</td>
                            <td className={Styles.view}><a href={doc.link}>View</a></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );

    return (
        <div className='position-relative'>
            <HeroFirst BoldText='Kadeer Ramu' Description="Driver" breadcrumb={breadcrumb} />
            <Container fluid className={`${Styles.layout} px-5`}>
                <Row className='gy-4'>
                    <Col xxl={2} xl={3} lg={4} md={12} sm={12} className={Styles.proMain}>
                        <ProfileCard {...profileData} />
                    </Col>

                    <Col xxl={10} xl={9} lg={8} md={12} sm={12} className={`empTab ${Styles.empTab}`}>
                        <Tab.Container defaultActiveKey="overview">
                            <Row>
                                <Col sm={12}>
                                    <Nav variant="underline" className={Styles.tabKey}>
                                        {['overview', 'documents', 'trips', 'permissionset'].map(key => (
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
                                            <Tab.Pane eventKey="overview">
                                                {tabContents}
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="documents">
                                                {tabDocuments}
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="trips">
                                                <ButtonComp className={Styles.liveTrackingButton} text='Live Tracking' />
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="permissionset">
                                                {/* Content for Permission Set */}
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </div>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Page;
