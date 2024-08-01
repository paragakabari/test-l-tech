"use client"
import React, { useState } from 'react'
import Styles from "./publishedInquiresTabs.module.css"
import ButtonComp from '../Button'
import CommonTable from '../CommonTable';
import { Col, Row } from 'react-bootstrap';

const Awarded = ({ deleteModal }) => {
    const [listView, setListView] = useState(false);
    const statusColors = {
        'PO Generated': '#C184FE',
        'Order Pickup': '#008182',
        'Ongoing Shipment': '#FF7F00',
        'Order Delivered': '#461465',
        'Revision Requested': '#933C8E',
        'Awarded': '#FF007E',
    };
    const data = [
        { INQNumber: 'EPF_23_RFQ0001', pickup: 'Riyad', dropOff: 'ILS', postedDate: '15-03-2023', deliveryItemType: 'SAR 190393', status: 'PO Generated' },
        { INQNumber: 'EPF_23_RFQ0001', pickup: 'Riyad', dropOff: 'Lorem', postedDate: '15-03-2023', deliveryItemType: 'SAR 190393', status: 'Order Pickup' },
        { INQNumber: 'EPF_23_RFQ0001', pickup: 'Riyad', dropOff: 'Lorem', postedDate: '15-03-2023', deliveryItemType: 'SAR 190393', status: 'Ongoing Shipment' },
        { INQNumber: 'EPF_23_RFQ0001', pickup: 'Riyad', dropOff: 'Lorem', postedDate: '15-03-2023', deliveryItemType: 'SAR 190393', status: 'Order Delivered' },
        { INQNumber: 'EPF_23_RFQ0001', pickup: 'Riyad', dropOff: 'DHL', postedDate: '15-03-2023', deliveryItemType: 'SAR 190393', status: 'Revision Requested' },
        { INQNumber: 'EPF_23_RFQ0001', pickup: 'Riyad', dropOff: 'DHL', postedDate: '15-03-2023', deliveryItemType: 'SAR 190393', status: 'Awarded' },
        { INQNumber: 'EPF_23_RFQ0001', pickup: 'Riyad', dropOff: 'ILS', postedDate: '15-03-2023', deliveryItemType: 'SAR 190393', status: 'PO Generated' },
        { INQNumber: 'EPF_23_RFQ0001', pickup: 'Riyad', dropOff: 'DHL', postedDate: '15-03-2023', deliveryItemType: 'SAR 190393', status: 'Order Pickup' },
        { INQNumber: 'EPF_23_RFQ0001', pickup: 'Riyad', dropOff: 'Lorem', postedDate: '15-03-2023', deliveryItemType: 'SAR 190393', status: 'Ongoing Shipment' },
        { INQNumber: 'EPF_23_RFQ0001', pickup: 'Riyad', dropOff: 'DHL', postedDate: '15-03-2023', deliveryItemType: 'SAR 190393', status: 'Order Delivered' },
    ];
    const statusData = [
        { label: "Awarded", count: 12, color: "#5EAA64" },
        { label: "Revision Requested", count: 8, color: "#FDA953" },
        { label: "Pending", count: 6, color: "#FF6A57" },
        { label: "Drafted", count: 4, color: "#933C8E" },
    ]
    const columns = [
        {
            label: '',
            key: 'INQNumber',
            render: value => <span className=''>{value}</span>,
        },
        {
            label: '',
            key: 'pickup',
            render: value => <div className='text-center'>{value}</div>,
        },
        {
            label: '',
            key: 'dropOff',
            render: value => <div className='text-center'>{value}</div>,
        },
        {
            label: '',
            key: 'bidsReceived',
            render: value => <div className='text-center'>{value}</div>,
        },
        {
            label: '',
            key: 'postedDate',
            render: value => <div className='text-center'>{value}</div>,
        },
        {
            label: '',
            key: 'deliveryItemType',
            render: value => <div className='text-center'>{value}</div>,
        },
        {
            label: '',
            key: 'status',
            render: value => (
                <div
                    className='text-center mx-auto'
                    style={{
                        backgroundColor: statusColors[value] || '#933C8E',
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
            label: '',
            key: 'actions',
            render: (value, row) => {
                return (
                    <div className={`${Styles.actionButtons} justify-content-center`}>
                        {row.status === "Awarded" || row.status === "Ongoing Shipment" ?
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
                                    <div className={`${Styles.actionButton} cursor-pointer`} onClick={deleteModal}>
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

export default Awarded