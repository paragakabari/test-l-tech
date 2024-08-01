"use client"
import React from 'react'
import Styles from "./contractLists.module.css"
import { HeroSecond } from '@/Common/heroSecond'
import { HeroFirst } from '@/Common/heroFirst';
import { Col, Container, Row } from 'react-bootstrap';
import ButtonComp from '@/Component/Button';
import CommonTable from '@/Component/CommonTable';
import { shortenName } from '@/Utils/utilies';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const page = ({ params: { locale } }) => {
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
    const router = useRouter();
    const data = [
        { id: 'EPF-2023-COM001-CON_0001', name: 'SIMS', shipmentsProcessed: 11, poPosted: 10, invoice: '10 Total', from: 'Jeddah', to: 'Mecca', deliveryItemType: 'Hazardous Fluids', contractStartDate: '15-03-2023', image: "https://images.unsplash.com/photo-1675855545137-1eb0459c0f4a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 'EPF-2023-COM001-CON_0001', name: 'CAT', shipmentsProcessed: 11, poPosted: 10, invoice: '10 Total', from: 'Jeddah', to: 'Mecca', deliveryItemType: 'Hazardous Fluids', contractStartDate: '15-03-2023' },
        { id: 'EPF-2023-COM001-CON_0001', name: 'TV', shipmentsProcessed: 11, poPosted: 10, invoice: '10 Total', from: 'Jeddah', to: 'Mecca', deliveryItemType: 'Hazardous Fluids', contractStartDate: '15-03-2023', image: "https://images.unsplash.com/photo-1473445730015-841f29a9490b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 'EPF-2023-COM001-CON_0001', name: 'Unknown', shipmentsProcessed: 11, poPosted: 10, invoice: '10 Total', from: 'Jeddah', to: 'Mecca', deliveryItemType: 'Hazardous Fluids', contractStartDate: '15-03-2023' },
        { id: 'EPF-2023-COM001-CON_0001', name: 'SIMS', shipmentsProcessed: 11, poPosted: 10, invoice: '10 Total', from: 'Jeddah', to: 'Mecca', deliveryItemType: 'Hazardous Fluids', contractStartDate: '15-03-2023' },
        { id: 'EPF-2023-COM001-CON_0001', name: 'CAT', shipmentsProcessed: 11, poPosted: 10, invoice: '10 Total', from: 'Jeddah', to: 'Mecca', deliveryItemType: 'Hazardous Fluids', contractStartDate: '15-03-2023' },
        { id: 'EPF-2023-COM001-CON_0001', name: 'TV', shipmentsProcessed: 11, poPosted: 10, invoice: '10 Total', from: 'Jeddah', to: 'Mecca', deliveryItemType: 'Hazardous Fluids', contractStartDate: '15-03-2023' },
    ];

    const columns = [
        {
            label: 'Contract Details',
            key: 'name',
            render: (value: any, row: any) => (
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
                    {/* <div className={Styles.avatar}> {row.name ? shortenName(row.name) : ""} </div> */}
                    <div>
                        <span className={Styles.departmentName}>{row.id}</span>
                        <small className={`${Styles.smallText} cursor-pointer`}  >Single Pickup Single Drop off</small>
                    </div>
                </div>
            ),
        },
        {
            label: 'Shipments Processed',
            key: 'shipmentsProcessed',
            render: (value: any, row: any) => (
                <span>{value}</span>
            ),
        },
        {
            label: 'PO Posted',
            key: 'poPosted',
            render: (value: any, row: any) => (
                <span>{value}</span>
            ),
        },
        {
            label: 'Invoice',
            key: 'invoice',
            render: (value: any, row: any) => (
                <div className='text-center'>
                    <span>{value}</span>
                    <div className={Styles.pending}>3 Pending</div>
                </div>
            ),
        },
        {
            label: 'From',
            key: 'from',
            render: (value: any, row: any) => (
                <span>{value}</span>
            ),
        },
        {
            label: 'To',
            key: 'to',
            render: (value: any, row: any) => (
                <span>{value}</span>
            ),
        },
        {
            label: 'Delivery Item Type',
            key: 'deliveryItemType',
            render: (value: any, row: any) => (
                <div className={Styles.deliveryItemType}>
                    <Image height={40} width={40} alt='' src="/barrels.png" />
                    <p>{value}</p>
                </div>
            ),
        },
        {
            label: 'Contract Start Date',
            key: 'contractStartDate',
            render: (value: any, row: any) => (
                <span>{value}</span>
            ),
        },
        {
            label: 'Actions',
            key: 'actions',
            render: (value: any, row: any) => (
                <div className={Styles.actionButtons}>
                    <div className={`${Styles.actionButton} ${Styles.editButton}`} onClick={() => router.push(`/${locale}/carrier/orders/contractOverview`)}>
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
            <HeroFirst BoldText='Contract Lists' breadcrumb={breadcrumb} />
            <Container fluid className={Styles.layout + " px-5"}>
                <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12}>
                        <Row className='gy-4'>
                            <Col lg={12}>
                                <div className='d-flex justify-content-end gap-2 w-100'>
                                    <ButtonComp text='Rise New Inquiry' />
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className={Styles.tableMainBg}>
                                    <div className={`d-flex w-100 justify-content-between align-items-center mb-4 ${Styles.tblHeader}`}>
                                        <div className={`d-flex gap-5 w-100 ${Styles.SearchInputMain}`}>
                                            <input className={Styles.SearchInput} placeholder="Search product by name, id, category" />
                                            <div className={Styles.filterButton}>
                                                <p>Filter</p>
                                                <i className="bi bi-filter"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='contractList'>
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

export default page
