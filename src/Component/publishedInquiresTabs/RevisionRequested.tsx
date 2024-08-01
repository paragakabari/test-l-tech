"use client"
import React, { useState } from 'react'
import Styles from "./publishedInquiresTabs.module.css"
import ButtonComp from '../Button'
import CommonTable from '../CommonTable';
import { Col, Row } from 'react-bootstrap';
import Image from 'next/image';

const RevisionRequested = () => {
    const [listView, setListView] = useState(false);

    const data = [
        { INQNumber: 'EPF_23_RFQ0001', pickup: 'Riyad', dropOff: 'Jeddah', bidsReceived: 18, postedDate: '15-03-2023', },
        { INQNumber: 'EPF_23_RFQ0001', pickup: 'Riyad', dropOff: 'Jeddah', bidsReceived: 18, postedDate: '15-03-2023', },
        { INQNumber: 'EPF_23_RFQ0001', pickup: 'Riyad', dropOff: 'Jeddah', bidsReceived: 18, postedDate: '15-03-2023', },
        { INQNumber: 'EPF_23_RFQ0001', pickup: 'Riyad', dropOff: 'Jeddah', bidsReceived: 18, postedDate: '15-03-2023', },
        { INQNumber: 'EPF_23_RFQ0001', pickup: 'Riyad', dropOff: 'Jeddah', bidsReceived: 18, postedDate: '15-03-2023', },
        { INQNumber: 'EPF_23_RFQ0001', pickup: 'Riyad', dropOff: 'Jeddah', bidsReceived: 18, postedDate: '15-03-2023', },
        { INQNumber: 'EPF_23_RFQ0001', pickup: 'Riyad', dropOff: 'Jeddah', bidsReceived: 18, postedDate: '15-03-2023', },
        { INQNumber: 'EPF_23_RFQ0001', pickup: 'Riyad', dropOff: 'Jeddah', bidsReceived: 18, postedDate: '15-03-2023', },
        { INQNumber: 'EPF_23_RFQ0001', pickup: 'Riyad', dropOff: 'Jeddah', bidsReceived: 18, postedDate: '15-03-2023', },
        { INQNumber: 'EPF_23_RFQ0001', pickup: 'Riyad', dropOff: 'Jeddah', bidsReceived: 18, postedDate: '15-03-2023', },
    ];
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
            render: value =>
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
                    <Image
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        height={40}
                        width={40}
                        alt=""
                        style={{ marginLeft: "-10px" }}
                    />
                    <Image
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        height={40}
                        width={40}
                        alt=""
                        style={{ marginLeft: "-10px" }}
                    />
                    <div>5+</div>
                </div>,
        },
        {
            label: 'Posted Date',
            key: 'postedDate',
            render: value => <div className='text-center'>{value}</div>,
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
        <div className={`${Styles.totalTabMain} ${Styles.RevisionRequestedTab}`}>
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

export default RevisionRequested