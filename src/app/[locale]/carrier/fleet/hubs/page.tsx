"use client"
import React, { useState } from 'react';
import Styles from "./hubs.module.css";
import { HeroSecond } from '@/Common/heroSecond';
import { Col, Container, Row } from 'react-bootstrap';
import Sidebar from '@/Common/Sidebar';
import ButtonComp from '@/Component/Button';
import { useRouter } from 'next/navigation';
import CommonTable from '@/Component/CommonTable';
import Card from '@/Common/Card';
import { shortenName } from '@/Utils/utilies';

const Page = ({ params: { locale } }) => {

    const router = useRouter();

    const [listView, setListView] = useState(false);
    const breadcrumb = [
        {
            'text': "Dashboard",
            'link': "/carrier/dashboard-second"
        },
        {
            'text': "Workspace",
            'link': '/carrier/workspace/dashboard'
        },
        {
            'text': "Hub",
            'link': '/'
        }
    ];

    const data = [
        { id: 1, name: 'Riyadh', department: 'State Hub', doj: '15-03-2023', status: 'ACTIVE', distribution: '34 DC Mapped' },
        { id: 2, name: 'Hub name', department: 'State Hub', doj: '15-03-2023', status: 'ACTIVE', distribution: '34 DC Mapped' },
        { id: 3, name: 'Hub name', department: 'State Hub', doj: '15-03-2023', status: 'ACTIVE', distribution: '34 DC Mapped' },
        { id: 4, name: 'Hub name', department: 'State Hub', doj: '15-03-2023', status: 'ACTIVE', distribution: '34 DC Mapped' },
        { id: 5, name: 'Hub name', department: 'State Hub', doj: '15-03-2023', status: 'ACTIVE', distribution: '34 DC Mapped' },
    ];

    const columns = [
        {
            label: 'Hub Name',
            key: 'name',
            render: (value) => (
                <div className='text-start'>
                    <span className={Styles.memberName}>{value}</span>
                    <div className={Styles.departmentNameText}>State Hub</div>
                </div>
            ),
        },
        {
            label: 'POC',
            key: 'department',
            render: () => (
                <div className="d-flex gap-2 align-items-center justify-content-center">
                    <div className={Styles.roundBox}></div>
                    <p className='fs-6 fw-light'>Hubmanager Name</p>
                </div>
            ),
        },
        {
            label: 'Distribution Centres',
            key: 'distribution',
            render: (value) => (
                <div>
                    <div className="fs-6">{value}</div>
                </div>
            ),
        },
        {
            label: 'Created on',
            key: 'doj',
            render: (value) => (
                <div>
                    <div className="fs-6">{value}</div>
                </div>
            ),
        },
        {
            label: '',
            key: 'status',
            render: (value) => (
                <div className={Styles.statusButtonContainer}>
                    <ButtonComp text={value} className={value === 'ACTIVE' ? 'activeButton' : 'resendButton'} />
                </div>
            ),
        },
        {
            label: 'Actions',
            key: 'actions',
            render: (value, row) => (
                <div className={Styles.actionButtons}>
                    <div className={`${Styles.actionButton} ${Styles.editButton}`}>
                        <i className="bi bi-pencil-fill"></i>
                    </div>

                    <div className={`${Styles.actionButton} ${Styles.deleteButton}`}>
                        <i className="bi bi-trash3-fill"></i>
                    </div>
                </div>
            ),
        },
    ];

    return (
        <div className='position-relative'>
            <HeroSecond BoldText='05 Hub' breadcrumb={breadcrumb} />
            <Container fluid className={Styles.layout + " px-5"}>
                <Row>
                    <Col xxl={2} xl={0} lg={0} md={0} sm={0}>
                        <Sidebar locale={locale} />
                    </Col>

                    <Col xxl={10} xl={12} lg={12} md={12} sm={12} className={Styles.layoutSecond}>
                        <Row className='gy-4'>
                            <Col lg={12}>
                                <div className='d-flex justify-content-end gap-2 w-100'>
                                    <ButtonComp text='Add New Hub' onClick={() => {
                                        router.push(`/${locale}/carrier/workspace/hubCreation`)
                                    }} />
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className={Styles.tableMainBg}>
                                    <div className={`d-flex w-100 justify-content-between align-items-center mb-4 ${Styles.tblHeader}`}>
                                        <div className={`d-flex gap-2 ${Styles.SearchInputMain}`}>
                                            <input className={Styles.SearchInput} placeholder="Search product by name, id, category" />
                                            <div className={Styles.filterButton}>
                                                <p>Filter</p>
                                                <i className="bi bi-filter"></i>
                                            </div>
                                        </div>
                                        <div className='d-flex gap-2'>
                                            <ButtonComp text='List View' className={listView === false ? 'darkButton' : "outlineButton"} onClick={() => setListView(false)} />
                                            <ButtonComp text='Card view' className={listView === true ? 'darkButton' : "outlineButton"} onClick={() => setListView(true)} />
                                        </div>
                                    </div>
                                    <div className={Styles.hubTable}>
                                        <CommonTable columns={columns} data={data} />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Page;
