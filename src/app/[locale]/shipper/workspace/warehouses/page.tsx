"use client"
import { HeroSecond } from '@/Common/heroSecond'
import Sidebar from '@/Common/Sidebar'
import ButtonComp from '@/Component/Button'
import React, { useState } from 'react'
import { Col, Container, Modal, Row } from 'react-bootstrap'
import Styles from "./warehouses.module.css"
import CommonTable from '@/Component/CommonTable'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const page = ({ params: { locale } }) => {
    const [modalShow, setModalShow] = React.useState(false);
    const breadcrumb = [
        {
            'text': "Dashboard",
            'link': "/shipper/dashboard"
        },
        {
            'text': "Workspace",
            'link': '/carrier/workspace/dashboard'
        },
        {
            'text': "Warehouses",
            'link': '/'
        },
    ];

    const router = useRouter();
    const [listView, setListView] = useState(false);

    const data = [
        { warehouseName: 'WAR0234324-01', location: 'Jeddah', capacity: '4500 tons/sq m', manager: 'RW', contact: 'XXXXXXXXXX', createdOn: '15-03-2023', status: 'ACTIVE' },
        { warehouseName: 'WAR0234324-01', location: 'Jeddah', capacity: '4500 tons/sq m', manager: 'RW', contact: 'XXXXXXXXXX', createdOn: '15-03-2023', status: 'ACTIVE' },
        { warehouseName: 'WAR0234324-01', location: 'Jeddah', capacity: '4500 tons/sq m', manager: 'RW', contact: 'XXXXXXXXXX', createdOn: '15-03-2023', status: 'ACTIVE' },
        { warehouseName: 'WAR0234324-01', location: 'Jeddah', capacity: '4500 tons/sq m', manager: 'RW', contact: 'XXXXXXXXXX', createdOn: '15-03-2023', status: 'ACTIVE' },
    ];

    const columns = [
        {
            label: 'Warehouse Name',
            key: 'warehouseName',
            render: (value, row) => (
                <div>
                    <span className='fw-bold'>{value}</span><br />
                    <small className='fw-light'>{row.location}</small>
                </div>
            ),
        },
        {
            label: 'Capacity',
            key: 'capacity',
            render: value => <span>{value}</span>,
        },
        {
            label: 'Manager',
            key: 'manager',
            render: value => <span className={Styles.managerIcon}>{value}</span>,
        },
        {
            label: 'Contact',
            key: 'contact',
            render: value => <span>{value}</span>,
        },
        {
            label: 'Created on',
            key: 'createdOn',
            render: value => <span>{value}</span>,
        },
        {
            label: '',
            key: 'status',
            render: value => <div className={Styles.statusButton}>{value}</div>,
        },
        {
            label: 'Actions',
            key: 'actions',
            render: (value, row) => (
                <div className={Styles.actionButtons}>
                    <div className={`${Styles.actionButton} ${Styles.editButton}`}>
                        <i className="bi bi-pencil-fill"></i>
                    </div>
                    <div className={`${Styles.actionButton} ${Styles.deleteButton}`} onClick={() => setModalShow(true)}>
                        <i className="bi bi-trash3-fill"></i>
                    </div>
                </div>
            ),
        },
    ];

    return (
        <div className='position-relative'>
            <div className={Styles.secondDashBoard}>
                <HeroSecond BoldText='04 Warehouse Address' breadcrumb={breadcrumb} />
                <Container fluid className={Styles.layout + " px-5"}>
                    <Row>
                        <Col xxl={2} xl={0} lg={0} md={0} sm={0}>
                            <Sidebar locale={locale} shipper={true} />
                        </Col>
                        <Col xxl={10} xl={12} lg={12} md={12} sm={12} className={Styles.layoutSecond}>
                            <Row className="gy-4">
                                <Col lg={12}>
                                    <div className='d-flex justify-content-end gap-2 w-100'>
                                        <ButtonComp text='Import' className='secondButton' />
                                        <ButtonComp text='Add New Warehouse' onClick={() => router.push(`/${locale}/shipper/workspace/addNewWarehouse`)} />
                                    </div>
                                </Col>
                                <Col lg={12} md={12} sm={12} xl={12}>
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
                                        <div className={Styles.WarehouseAddressTblMain}>
                                            <CommonTable columns={columns} data={data} />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div >
            <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={modalShow}
                onHide={() => setModalShow(false)}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <div className={`${Styles.warehouseDeleteModalHeader} p-2`}>
                            <h1>Delete Warehouse Address</h1>
                            <p>Are you sure you want to delete the information</p>
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className={`${Styles.warehouseDeleteModalBody} p-2 pb-5`}>
                        <p>There are 3 Manager associated.</p>
                        <div className={`${Styles.userIcon}`}>
                            <Image
                                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                height={40}
                                width={40}
                                alt=""
                            />
                            <Image
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                height={40}
                                width={40}
                                alt=""
                                style={{ marginLeft: "-10px" }}
                            />
                            <div>1+</div>
                        </div>
                    </div>
                    <div className='d-flex w-100 justify-content-between p-2 pt-5'>
                        <ButtonComp className="outlineButton" text="Yes, Delete it!" />
                        <ButtonComp text="Don't, Delete it!" />
                    </div>
                </Modal.Body>

            </Modal>

        </div>
    )
}

export default page
