"use client"
import React, { useState } from 'react'
import Styles from "./publishedInquiresTabs.module.css"
import ButtonComp from '../Button'
import CommonTable from '../CommonTable';
import { Col, Row } from 'react-bootstrap';
import { Bubble } from 'react-chartjs-2';
import { Chart as ChartJS, Tooltip, Legend, PointElement, LinearScale, Title } from 'chart.js'; import { useTranslations } from 'next-intl';
;

ChartJS.register(PointElement, LinearScale, Tooltip, Legend, Title);

const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false,
        },
        tooltip: {
            enabled: true,
        },
    },
    scales: {
        x: {
            display: false,
        },
        y: {
            display: false,
        },
    },
};

const chartData = {
    datasets: [
        {
            label: 'Completed',
            data: [{ x: 1, y: 1, r: 50 }],
            backgroundColor: '#5EAA64',
        },
        {
            label: 'In Transit',
            data: [{ x: 2, y: 2, r: 20 }],
            backgroundColor: '#FDA953',
        },
        {
            label: 'Pending',
            data: [{ x: 3, y: 3, r: 25 }],
            backgroundColor: '#FF6A57',
        },
        {
            label: 'Failed',
            data: [{ x: 4, y: 4, r: 7 }],
            backgroundColor: '#933C8E',
        },
    ],
};
const Total = () => {
    const [listView, setListView] = useState(false);
    const statusColors = {
        'Awarded': 'linear-gradient(to right, #28A61C , #70CE1E)',
        'Pending': 'linear-gradient(to right, #FE6401 , #FE6500)',
        'Revision Requested': 'linear-gradient(to right, #933C8E , #933C8E)',
    };
    const data = [
        { INQNumber: 'EPF_23_RFQ0001', pickup: 'Riyad', dropOff: 'Jeddah', bidsReceived: 18, postedDate: '15-03-2023', deliveryItemType: '', status: 'Awarded' },
        { INQNumber: 'EPF_23_RFQ0001', pickup: 'Riyad', dropOff: 'Jeddah', bidsReceived: 18, postedDate: '15-03-2023', deliveryItemType: '', status: 'Pending' },
        { INQNumber: 'EPF_23_RFQ0001', pickup: 'Riyad', dropOff: 'Jeddah', bidsReceived: 18, postedDate: '15-03-2023', deliveryItemType: '', status: 'Revision Requested' },
        { INQNumber: 'EPF_23_RFQ0001', pickup: 'Riyad', dropOff: 'Jeddah', bidsReceived: 18, postedDate: '15-03-2023', deliveryItemType: '', status: 'Awarded' },
        { INQNumber: 'EPF_23_RFQ0001', pickup: 'Riyad', dropOff: 'Jeddah', bidsReceived: 18, postedDate: '15-03-2023', deliveryItemType: '', status: 'Pending' },
        { INQNumber: 'EPF_23_RFQ0001', pickup: 'Riyad', dropOff: 'Jeddah', bidsReceived: 18, postedDate: '15-03-2023', deliveryItemType: '', status: 'Revision Requested' },
        { INQNumber: 'EPF_23_RFQ0001', pickup: 'Riyad', dropOff: 'Jeddah', bidsReceived: 18, postedDate: '15-03-2023', deliveryItemType: '', status: 'Awarded' },
        { INQNumber: 'EPF_23_RFQ0001', pickup: 'Riyad', dropOff: 'Jeddah', bidsReceived: 18, postedDate: '15-03-2023', deliveryItemType: '', status: 'Pending' },
        { INQNumber: 'EPF_23_RFQ0001', pickup: 'Riyad', dropOff: 'Jeddah', bidsReceived: 18, postedDate: '15-03-2023', deliveryItemType: '', status: 'Revision Requested' },
        { INQNumber: 'EPF_23_RFQ0001', pickup: 'Riyad', dropOff: 'Jeddah', bidsReceived: 18, postedDate: '15-03-2023', deliveryItemType: '', status: 'Awarded' },
    ];
    const statusData = [
        { label: "Awarded", count: 12, color: "#5EAA64" },
        { label: "Revision Requested", count: 8, color: "#FDA953" },
        { label: "Pending", count: 6, color: "#FF6A57" },
        { label: "Drafted", count: 4, color: "#933C8E" },
    ]
    const columns = [
        {
            label: 'INQ Number',
            key: 'INQNumber',
            render: value => <span className=''>{value}</span>,
        },
        {
            label: 'Pickup',
            key: 'pickup',
            render: value => <div className='text-center'>{value}</div>,
        },
        {
            label: 'Drop Off',
            key: 'dropOff',
            render: value => <div className='text-center'>{value}</div>,
        },
        {
            label: 'Bids Received',
            key: 'bidsReceived',
            render: value => <div className='text-center'>{value}</div>,
        },
        {
            label: 'Posted Date',
            key: 'postedDate',
            render: value => <div className='text-center'>{value}</div>,
        },
        {
            label: 'Delivery Item Type',
            key: 'deliveryItemType',
            render: value => <span>{value}</span>,
        },
        {
            label: 'Status',
            key: 'status',
            render: value => (
                <div
                    className='text-center mx-auto'
                    style={{
                        backgroundImage: statusColors[value] || '#933C8E',
                        color: 'white',
                        padding: '5px 10px',
                        borderRadius: '100px',
                        textAlign: 'center',
                        width: 'fit-content',
                        fontSize: '10px'
                    }}
                >
                    {value}
                </div>
            ),
        },
        {
            label: 'Actions',
            key: 'actions',
            render: (value, row) => {
                return (
                    <div className={`${Styles.actionButtons} justify-content-center`}>
                        {row.status === "Awarded" ?
                            (<div className={`${Styles.actionButton}`}>
                                <i className="bi bi-eye-fill"></i>
                            </div>) : (
                                <>
                                    <div className={`${Styles.actionButton}`}>
                                        <i className="bi bi-eye-fill"></i>
                                    </div>
                                    <div className={`${Styles.actionButton}`}>
                                        <i className="bi bi-pencil-fill"></i>
                                    </div>
                                    <div className={`${Styles.actionButton}`}>
                                        <i className="bi bi-trash3-fill"></i>
                                    </div>
                                </>
                            )
                        }
                    </div>
                )
            }
        },
    ];
    return (
        <div className={Styles.totalTabMain}>
            <Row className='gy-4 mb-4'>
                <Col lg={6} md={5} sm={12} className={Styles.totalTabHeader}>
                    <div className={Styles.chartDataWraper}>
                        <Bubble data={chartData} options={options} />
                    </div>
                    <div className='text-center'>
                        <h1>32</h1>
                        <p>Total</p>
                    </div>
                </Col>
                <Col lg={2} md={1} sm={12}>
                    <span className={Styles.totalTabMainHr}></span>
                </Col>
                <Col lg={4} md={5} sm={12} className='d-flex flex-column gap-2 '>
                    {statusData.map((status, index) => (
                        <div key={index} className='d-flex justify-content-between align-items-center'>
                            <div className='d-flex gap-2 align-items-center'>
                                <div className={Styles.chartColor} style={{ background: status.color }}></div>
                                <p>{status.label}</p>
                            </div>
                            <p>{status.count}</p>
                        </div>
                    ))}
                </Col>
            </Row>
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
    )
}

export default Total