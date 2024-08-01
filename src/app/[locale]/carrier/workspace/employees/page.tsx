"use client"
import React, { useState } from 'react';
import Styles from "./employees.module.css";
import { HeroSecond } from '@/Common/heroSecond';
import { Col, Container, Row } from 'react-bootstrap';
import Sidebar from '@/Common/Sidebar';
import ButtonComp from '@/Component/Button';
import { useRouter } from 'next/navigation';
import CommonTable from '@/Component/CommonTable';
import Card from '@/Common/Card';
import { shortenName } from '@/Utils/utilies';
import Image from 'next/image';

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
            'text': "Employees",
            'link': '/'
        }
    ];

    const data = [
        { id: 1, name: 'Mishba Hisab', department: 'Driver', doj: '15-03-2023', status: 'RESEND INVITE', image: 'https://plus.unsplash.com/premium_photo-1664541336896-b3d5f7dec9a3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { id: 2, name: 'Kadeer Ramu', department: 'Driver', doj: '15-03-2023', status: 'ACTIVE', image: 'https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D' },
        { id: 3, name: 'Haamid Mustab', department: 'Driver', doj: '15-03-2023', status: 'RESEND INVITE', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D' },
        { id: 4, name: 'Aaftab Aalam', department: 'Driver', doj: '15-03-2023', status: 'RESEND INVITE', image: 'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHVzZXJ8ZW58MHx8MHx8fDA%3D' },
        { id: 5, name: 'Mishba Hisab', department: 'Driver', doj: '15-03-2023', status: 'RESEND INVITE', image: 'https://plus.unsplash.com/premium_photo-1664099905313-f391570783fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHVzZXJ8ZW58MHx8MHx8fDA%3D' },
        { id: 6, name: 'Kadeer Ramu', department: 'Driver', doj: '15-03-2023', status: 'ACTIVE', image: 'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHVzZXJ8ZW58MHx8MHx8fDA%3D' },
        { id: 7, name: 'Haamid Mustab', department: 'Driver', doj: '15-03-2023', status: 'RESEND INVITE', image: 'https://images.unsplash.com/photo-1521310192545-4ac7951413f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHVzZXJ8ZW58MHx8MHx8fDA%3D' },
        { id: 8, name: 'Aaftab Aalam', department: 'Driver', doj: '15-03-2023', status: 'RESEND INVITE', image: 'https://plus.unsplash.com/premium_photo-1670071482460-5c08776521fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHVzZXJ8ZW58MHx8MHx8fDA%3D' },
        { id: 9, name: 'Haamid Mustab', department: 'Driver', doj: '15-03-2023', status: 'RESEND INVITE', image: 'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHVzZXJ8ZW58MHx8MHx8fDA%3D' },
    ];

    const columns = [
        {
            label: 'Members',
            key: 'name',
            render: (value, row) => (
                <div className='d-flex align-items-center gap-3'>
                    <div className={Styles.avatar}>
                        {row.image ? (
                            <Image src={row.image} alt='' height={50} width={50} />
                        ) : (
                            <div className={Styles.shortenedName}>
                                {shortenName(row.name)}
                            </div>
                        )}
                    </div>
                    <div>
                        <span className={Styles.memberName}>{value}</span>
                        <div className={Styles.lastLogin}>Last Login:</div>
                        <div className={Styles.lastLogin}>10 hours ago 2:10 PM</div>
                    </div>
                </div>
            ),
        },
        {
            label: 'Department',
            key: 'department',
            render: (value) => (
                <div>
                    <div className={Styles.departmentNameText}>{value}</div>
                    <div className={Styles.changeDepartment}>Change</div>
                </div>
            ),
        },
        {
            label: 'DOJ',
            key: 'doj',
            render: (value) => (
                <div>
                    <div className={Styles.doj}>Sent On</div>
                    <div className={Styles.doj}>{value}</div>
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
                    <div className={`${Styles.actionButton} ${Styles.editButton}`} onClick={() => {
                        router.push(`/${locale}/carrier/workspace/employeePreview`)
                    }}>
                        <i className="bi bi-pencil-fill"></i>
                    </div>
                    <div className={`${Styles.actionButton} ${Styles.closeButton}`}>
                        <i className="bi bi-x-circle-fill"></i>
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
            <HeroSecond BoldText='3 Drivers' breadcrumb={breadcrumb} />
            <Container fluid className={Styles.layout + " px-5"}>
                <Row>
                    <Col xxl={2} xl={0} lg={0} md={0} sm={0}>
                        <Sidebar locale={locale} />
                    </Col>

                    <Col xxl={10} xl={12} lg={12} md={12} sm={12} className={Styles.layoutSecond}>
                        <Row className='gy-4'>
                            <Col lg={12}>
                                <div className='d-flex justify-content-end gap-2 w-100'>
                                    <ButtonComp text='Add New User' onClick={() => {
                                        router.push(`/${locale}/carrier/workspace/addUser`)
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
                                            {data.map((rec, i) => (
                                                <Card key={i} rec={rec} />
                                            ))}
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

export default Page;
