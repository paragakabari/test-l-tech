'use client'
import React, { useState } from 'react'
import Styles from "./departments.module.css"
import { HeroSecond } from '@/Common/heroSecond'
import { Button, Col, Container, Row } from 'react-bootstrap';
import Sidebar from '@/Common/Sidebar';
import ButtonComp from '@/Component/Button';
import CommonTable from '@/Component/CommonTable';
import { shortenName } from '@/Utils/utilies';
import Card from '@/Common/Card';
import { useRouter } from 'next/navigation'
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
            'text': "Departments",
            'link': '/'
        }
    ];

    const data = [
        { id: 'SM', name: 'Sales & Marketing', access: '7 Access', members: 0, createdOn: '15-03-2023', status: 'ACTIVE' },
        { id: 'DR1', name: 'Driver', access: '3 Access', members: 5, createdOn: '15-03-2023', status: 'ACTIVE' },
        { id: 'EX1', name: 'Department Name', access: 'Assign Access', members: 0, createdOn: '15-03-2023', status: 'ACTIVE' },
        { id: 'DR2', name: 'Warehouse Manager', access: 'Warehouse Manager', members: 13, createdOn: '15-03-2023', status: 'ACTIVE' },
        { id: 'EX2', name: 'Fleet Manager', access: '6 Access', members: 0, createdOn: '16-03-2023', status: 'ACTIVE' },
        { id: 'HR', name: 'Human Resource', access: '6 Access', members: 2, createdOn: '15-03-2023', status: 'ACTIVE' },
    ];

    const columns = [
        {
            label: 'Department Name',
            key: 'name',
            render: (value: any, row: any) => (
                <div className='d-flex align-items-center gap-3'>
                    <div className={Styles.avatar}> {row.name ? shortenName(row.name) : ""} </div>
                    <div>
                        <span className={Styles.departmentName}>{value}</span>
                        <small className={`${Styles.smallText} cursor-pointer`} onClick={() => {
                            router.push(`/${locale}/carrier/workspace/accessRole`)
                        }} >{row.access}</small>
                    </div>
                </div>
            ),
        },
        {
            label: 'Members',
            key: 'members',
            render: (value: any, row: any) => (
                <>
                    <span className={Styles.noMembers}>{value === 0 ? 'No members added' : `${value} Members`}</span> <br />
                    <span className={Styles.addMembers} onClick={() => {
                        router.push(`/${locale}/carrier/workspace/addUser`)
                    }}>Add Members</span>
                </>
            ),
        },
        {
            label: 'Created on',
            key: 'createdOn',
            render: (value: any, row: any) => (
                <span className={Styles.createdOn}>{value}</span>
            ),
        },
        {
            label: '',
            key: 'status',
            render: (value: any, row: any) => (
                <div className={Styles.statusButton}>{row.status}</div>
            ),
        },
        {
            label: 'Actions',
            key: 'actions',
            render: (value: any, row: any) => (
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
            <HeroSecond BoldText='06 Departments' breadcrumb={breadcrumb} />
            <Container fluid className={Styles.layout + " px-5"}>
                <Row>
                    <Col xxl={2} xl={0} lg={0} md={0} sm={0}>
                        <Sidebar locale={locale} />
                    </Col>
                    <Col xxl={10} xl={12} lg={12} md={12} sm={12} className={Styles.layoutSecond}>
                        <Row className='gy-4'>
                            <Col lg={12}>
                                <div className='d-flex justify-content-end gap-2 w-100'>
                                    <ButtonComp text='Add new Department' onClick={() => {
                                        router.push(`/${locale}/carrier/workspace/addDepartments`)
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
                                    {listView === false && (

                                        <CommonTable columns={columns} data={data} />
                                    )}
                                    {listView === true && (

                                        <div className={Styles.cardView}>
                                            {data.map((rec, i) => {
                                                return (
                                                    <Card rec={rec} isFooter={true} />
                                                )
                                            })}
                                        </div>
                                    )}
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Page
