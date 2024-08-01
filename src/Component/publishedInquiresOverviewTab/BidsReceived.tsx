import React, { useState } from 'react'
import Styles from "./publishedInquiresOverviewTab.module.css"
import { Col, Row } from 'react-bootstrap'
import SimpleCard from '@/Common/SimpleCard'
import CommonTable from '../CommonTable'
import ButtonComp from '../Button'
import { UserIcons } from './Overview'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { shortenName } from '@/Utils/utilies';

const BidsReceived = ({ onClick }: { onClick: () => void }) => {
    const router = useRouter();
    const [listView, setListView] = useState(false);
    const [details, setDetails] = useState(false);
    const data = [
        { carrierName: 'ILS logistics Pvt. Ltd.', quotation: { quo: '9300 SAR', days: "7 days" }, transportMode: 'Road Transport', submissionDate: '15-03-2023', lastRevision: '15-03-2023', revisions: 4, currentStatus: 'Revision Requested', image: "https://images.unsplash.com/photo-1473445730015-841f29a9490b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { carrierName: 'DHL logistics Pvt. Ltd.', quotation: { quo: '50900 SAR', days: "8 days" }, transportMode: '14,530 SAR', submissionDate: '15-03-2023', lastRevision: '15-03-2023', revisions: 3, currentStatus: 'Pending', image: "https://i.pinimg.com/736x/5f/f0/86/5ff0863ee36927c504e2e8a46657763e.jpg" },
        { carrierName: 'Uniworld logistics Pvt. Ltd.', quotation: { quo: '8900 SAR', days: "7 days" }, transportMode: '14,530 SAR', submissionDate: '15-03-2023', lastRevision: '15-03-2023', revisions: 1, currentStatus: 'Pending', image: 'https://images.unsplash.com/photo-1620288627223-53302f4e8c74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZ2lzdGljcyUyMGxvZ298ZW58MHx8MHx8fDA%3D' },
        { carrierName: 'Kerry logistics Pvt. Ltd.', quotation: { quo: '1200 SAR', days: "19 days" }, transportMode: '14,530 SAR', submissionDate: '15-03-2023', lastRevision: '15-03-2023', revisions: 1, currentStatus: 'Revision Requested', image: "https://images.unsplash.com/photo-1619454016518-697bc231e7cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZ2lzdGljcyUyMGxvZ298ZW58MHx8MHx8fDA%3D" },
        { carrierName: 'ILS logistics Pvt. Ltd.', quotation: { quo: '800 SAR', days: "11 days" }, transportMode: '14,530 SAR', submissionDate: '15-03-2023', lastRevision: '15-03-2023', revisions: 1, currentStatus: 'Rejected' },
        { carrierName: 'ILS logistics Pvt. Ltd.', quotation: { quo: '8100 SAR', days: "8 days" }, transportMode: '14,530 SAR', submissionDate: '15-03-2023', lastRevision: '15-03-2023', revisions: 1, currentStatus: 'Rejected', image: 'https://images.unsplash.com/photo-1617566347924-ad5ebdaa014e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxvZ2lzdGljcyUyMGxvZ298ZW58MHx8MHx8fDA%3D' },
    ];

    const columns = [
        {
            label: 'Carrier Name',
            key: 'carrierName',
            render: (value: any, row: any) => (
                <div className='d-flex align-items-center gap-3 cursor-pointer' onClick={onClick}>
                    <div className='d-block'>
                        <div className={Styles.tabAvatar}>
                            {row.image ? (
                                <Image src={row.image} alt='' height={50} width={50} />
                            ) : (
                                <div className={Styles.shortenedName}>
                                    {shortenName(row.carrierName)}
                                </div>
                            )}
                        </div>
                    </div>
                    <div>
                        <span className={Styles.departmentName}>{value}</span>
                    </div>
                </div>
            ),
        },
        {
            label: 'Quotation',
            key: 'quotation',
            render: (value: any, row: any) => (
                <>
                    <span className="fw-bold">{value?.quo}</span><br />
                    <small className={Styles.noMembers}>{value?.days}</small>
                </>
            ),
        },
        {
            label: !details && 'Transport Mode',
            key: !details && 'transportMode',
            render: (value: any, row: any) => (
                !details && <span className={Styles.createdOn}>{value}</span>
            ),
        },
        {
            label: 'Submission Date',
            key: 'submissionDate',
            render: (value: any, row: any) => (
                <span className={Styles.createdOn}>{value}</span>
            ),
        },
        {
            label: 'Last Revision',
            key: 'lastRevision',
            render: (value: any, row: any) => (
                <span className={Styles.createdOn}>{value}</span>
            ),
        },
        {
            label: 'Revisions',
            key: 'revisions',
            render: (value: any, row: any) => (
                <div className='d-flex gap-2 justify-content-center'>
                    <span className={Styles.noMembers}>{value}</span>
                    <i className="bi bi-file-earmark-text"></i>
                </div>
            ),
        },
        {
            label: 'Current Status',
            key: 'currentStatus',
            render: (value: any, row: any) => (
                <span className={Styles.createdOn}>{value}</span>
            ),
        },
        {
            label: 'Actions',
            key: 'actions',
            render: (value: any, row: any) => (
                <div className={`${Styles.actionButtons} justify-content-center`}>
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
        <div>
            <Row className="gy-4">
                <Col lg={4} md={12}>
                    <div className={Styles.redCard} onClick={() => setDetails(!details)}>
                        <div className='d-flex justify-content-between align-items-center flex-wrap gap-3'>
                            <div>
                                <small>INQ Number</small>
                                <h1>EPF_23_RFQ0001</h1>
                            </div>
                            {details &&
                                <UserIcons />
                            }
                        </div>
                        <div className='d-flex align-items-center justify-content-between mt-3 pt-3' style={{ borderTop: "1px solid #F4F4F457" }}>
                            <p>Single Pick-up & Single Drop-off</p>
                            <span>{details ? ("TARGETED") : ('PUBLIC')}</span>
                        </div>
                    </div>
                </Col>
                <Col lg={2} md={3} sm={6} className='d-flex'>
                    <SimpleCard title={25} description='Views' />
                </Col>
                <Col lg={2} md={3} sm={6} className='d-flex'>
                    <SimpleCard title={9} description='Responses' />
                </Col>
                <Col lg={2} md={3} sm={6} className='d-flex'>
                    <SimpleCard title={15} description='Revision Requested' />
                </Col>
                <Col lg={2} md={3} sm={6} className='d-flex'>
                    <SimpleCard title={15} description='Revision Received' />
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
                        <div className={Styles.CarrierBidsReceivedTbl}>
                            <CommonTable columns={columns} data={data} />
                        </div>
                    </div>
                </Col>
            </Row>
        </div >
    )
}

export default BidsReceived
