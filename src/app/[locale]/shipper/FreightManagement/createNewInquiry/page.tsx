"use client"
import React, { useState } from 'react'
import Styles from "./createNewInquiry.module.css"
import { HeroThree } from '@/Common/HeroThree'
import { Col, Container, Row } from 'react-bootstrap'
import ButtonComp from '@/Component/Button'
import CommonTable from '@/Component/CommonTable'
import { useRouter } from 'next/navigation'

const Page = ({ params: { locale } }) => {
    const breadcrumb = [
        {
            'text': "Dashboard",
            'link': "/shipper/dashboard"
        },
        {
            'text': "Freight Management",
            'link': '/shipper/e-ProcureFrieght'
        },
        {
            'text': "Published Inquires",
            'link': '/'
        },
    ];
    const router = useRouter();
    const [listView, setListView] = useState(false);

    const data = [
        { orderNumber: 'EPF_23_RFQ0001', pickup: 'Jeddah', marketplace: 'e-Procure', pickupType: 'Fragile', dimension: 'Add', weight: 'Add', qty: 'Add' },
        { orderNumber: 'EPF_23_RFQ0001', pickup: 'Doha', marketplace: 'Alibaba', pickupType: 'Hardware', dimension: 'Add', weight: 'Add', qty: 'Add' },
        { orderNumber: 'EPF_23_RFQ0001', pickup: 'Riyad', marketplace: 'e-Procure', pickupType: 'Photo Printers', dimension: 'Add', weight: 'Add', qty: 'Add' },
        { orderNumber: 'EPF_23_RFQ0001', pickup: 'Jeddah', marketplace: 'Amazon', pickupType: 'Pet Supplies', dimension: 'Add', weight: 'Add', qty: 'Add' },
    ];

    const columns = [
        {
            label: '',
            key: 'checkbox',
            render: () => (
                <div className={Styles.checkboxWrapper}>
                    <input type="checkbox" className={Styles.checkbox} />
                </div>
            ),
        },
        {
            label: 'Order Number',
            key: 'orderNumber',
            render: (value) => (
                <div>
                    <span className='fw-light'>{value}</span>
                </div>
            ),
        },
        {
            label: 'Pickup',
            key: 'pickup',
            render: (value) => <span className='fw-light'>{value}</span>,
        },
        {
            label: 'Marketplace',
            key: 'marketplace',
            render: (value) => <span className='fw-light'>{value}</span>,
        },
        {
            label: 'Pickup Type',
            key: 'pickupType',
            render: (value) => <span className='fw-light'>{value}</span>,
        },
        {
            label: 'Dimension',
            key: 'dimension',
            render: (value) => <span className='fw-light opacity-4'>{value}</span>,
        },
        {
            label: 'Weight',
            key: 'weight',
            render: (value) => <span className='fw-light opacity-4'>{value}</span>,
        },
        {
            label: 'Qty',
            key: 'qty',
            render: (value) => <span className='fw-light opacity-4'>{value}</span>,
        },
        {
            label: 'Actions',
            key: 'actions',
            render: (value, row) => (
                <div className={Styles.actionButtons}>
                    <div className={`${Styles.actionButton} ${Styles.postInquiryButton}`}>
                        <span className='text-danger fw-light cursor-pointer' onClick={() => router.push(`/${locale}/shipper/FreightManagement/createNewInquirySpsd`)}>Post Inquiry</span>
                    </div>
                </div>
            ),
        },
    ];

    return (
        <div className='position-relative'>
            <div className={Styles.secondDashBoard}>
                <HeroThree BoldText='Create New Inquiry' breadcrumb={breadcrumb} Description="Pending orders Listing (Imported from various Marketplace)" />
                <Container fluid className={Styles.layout + " px-5"}>
                    <Row>
                        <Col lg={12} className={Styles.layoutSecond}>
                            <div className='d-flex justify-content-end gap-2 w-100'>
                                <ButtonComp text='Post Inquiry' onClick={() => router.push(`/${locale}/shipper/FreightManagement/createNewInquirySpsd`)} />
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
                                <CommonTable columns={columns} data={data} />
                            </div>
                        </Col>
                    </Row>
                </Container >
            </div>
        </div>
    )
}

export default Page
