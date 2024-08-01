"use client"
import { HeroFirst } from '@/Common/heroFirst';
import ButtonComp from '@/Component/Button';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Styles from "./fleetManagement.module.css";
import CommonTable from '@/Component/CommonTable';
import { shortenName } from '@/Utils/utilies';
import AssignFeetCard from '@/Common/AssignFeetCard';

const Page = ({ params: { locale } }) => {
    const breadcrumb = [
        { text: 'Dashboard', link: "/carrier/dashboard-second" },
        { text: 'Fleet Management', link: '/carrier/fleet/dashboard' },
        { text: 'Manage Fleet', link: '/' },
    ];
    const router = useRouter();
    const [listView, setListView] = useState(false);
    const data = [
        { VehicleId: '7625-TNJ Volvo FH16 2021', FleetSubType: 'Straight Truck', IstimaraNo: '7625-TNJ', InsuranceId: 'INS839', MaxPayload: '20000', LoadAllocated: 'NA', AvailableCapacity: 'NA', AllocatedPOs: '09', CurrentStatus: 'Under Review', Driver: 'NA', ServiceDueOn: '15-03-2023', Status: 'Pending' },
        { VehicleId: '7625-TNJ Volvo FH16 2021', FleetSubType: 'Straight Truck', IstimaraNo: '7625-TNJ', InsuranceId: 'INS839', MaxPayload: '20000', LoadAllocated: 'NA', AvailableCapacity: 'NA', AllocatedPOs: '09', CurrentStatus: 'In-transit', Driver: 'NA', ServiceDueOn: '15-03-2023', Status: 'Pending' },
        { VehicleId: '7625-TNJ Volvo FH16 2021', FleetSubType: 'Vehicle Name Logic', IstimaraNo: '7625-TNJ', InsuranceId: 'INS839', MaxPayload: '20000', LoadAllocated: 'NA', AvailableCapacity: 'NA', AllocatedPOs: '09', CurrentStatus: 'Allocated', Driver: 'Mustafa', ServiceDueOn: '15-03-2023', Status: 'Pending' },
        { VehicleId: '7625-TNJ Volvo FH16 2021', FleetSubType: 'Straight Truck', IstimaraNo: '7625-TNJ', InsuranceId: 'INS839', MaxPayload: '20000', LoadAllocated: 'NA', AvailableCapacity: 'NA', AllocatedPOs: '09', CurrentStatus: 'Allocated', Driver: 'Not Assigned', ServiceDueOn: '15-03-2023', Status: 'Pending' },
        { VehicleId: '7625-TNJ Volvo FH16 2021', FleetSubType: 'Straight Truck', IstimaraNo: '7625-TNJ', InsuranceId: 'INS839', MaxPayload: '20000', LoadAllocated: 'NA', AvailableCapacity: 'NA', AllocatedPOs: '09', CurrentStatus: 'Sold', Driver: 'NA', ServiceDueOn: '15-03-2023', Status: 'Pending' },
        { VehicleId: '7625-TNJ Volvo FH16 2021', FleetSubType: 'Straight Truck', IstimaraNo: '7625-TNJ', InsuranceId: 'INS839', MaxPayload: '20000', LoadAllocated: 'NA', AvailableCapacity: 'NA', AllocatedPOs: '09', CurrentStatus: 'In-transit', Driver: 'Sajjidd M.', ServiceDueOn: '15-03-2023', Status: 'Pending' },
        { VehicleId: '7625-TNJ Volvo FH16 2021', FleetSubType: 'Straight Truck', IstimaraNo: '7625-TNJ', InsuranceId: 'INS839', MaxPayload: '20000', LoadAllocated: 'NA', AvailableCapacity: 'NA', AllocatedPOs: '09', CurrentStatus: 'Idle', Driver: 'NA', ServiceDueOn: '15-03-2023', Status: 'Pending' },
        { VehicleId: '7625-TNJ Volvo FH16 2021', FleetSubType: 'Straight Truck', IstimaraNo: '7625-TNJ', InsuranceId: 'INS839', MaxPayload: '20000', LoadAllocated: 'NA', AvailableCapacity: 'NA', AllocatedPOs: '09', CurrentStatus: 'Idle', Driver: 'NA', ServiceDueOn: '15-03-2023', Status: 'Pending' },
    ];

    const columns = [
        {
            label: 'Vehicle Id',
            key: 'VehicleId',
            render: (value, row) => (
                <div className='d-flex gap-2 align-items-center cursor-pointer' onClick={() => router.push(`/${locale}/carrier/fleet/VehicleBasicInformation`)}>
                    <div className={Styles.status}></div>
                    <div className={Styles.VehicleId}>{value}</div>
                </div>
            )
        },
        {
            label: 'Fleet Sub Type',
            key: 'FleetSubType',
            render: (value, row) => (
                <div>
                    <div className={Styles.FleetSubType}>{value}</div>
                    <small className={Styles.smallId}>Istimara No. - {row.IstimaraNo}</small><br />
                    <small className={Styles.smallId}>Insurance ID. - {row.InsuranceId}</small>
                </div>
            ),
        },
        {
            label: 'Max Payload',
            key: 'MaxPayload',
            render: (value, row) => (
                <div className={Styles.MaxPayload}>{value}</div>
            )
        },
        {
            label: 'Load Allocated',
            key: 'LoadAllocated',
            render: (value, row) => (
                <div className={Styles.FW12}>{value}</div>
            )
        },
        {
            label: 'Available Capacity',
            key: 'AvailableCapacity',
            render: (value, row) => (
                <div className={Styles.FW12}>{value}</div>
            )
        },
        {
            label: 'Allocated POs',
            key: 'AllocatedPOs',
            render: (value, row) => (
                <div className={Styles.FW12}>{value}</div>
            )
        },
        {
            label: 'Current Status',
            key: 'CurrentStatus',
            render: (value, row) => (
                <div className={Styles.FW12}>{value}</div>
            )
        },
        {
            label: 'Driver',
            key: 'Driver',
            render: (value, row) => (
                <div className={Styles.FW12}>{value}</div>
            )
        },
        {
            label: 'Service Due on',
            key: 'ServiceDueOn',
            render: (value, row) => (
                <div className={Styles.FW12}>{value}</div>
            )
        },
        {
            label: 'Status',
            key: 'Status',
            render: (value, row) => (
                <div className={Styles.FW12Red}>{value}</div>
            )
        },
    ];

    return (
        <div>
            <HeroFirst BoldText='Fleet Management' breadcrumb={breadcrumb} />
            <Container fluid className={Styles.layout + " px-5"}>
                <Row className='gy-4'>
                    <Col xxl={10} xl={9} lg={9} md={12} sm={12} className={Styles.layoutSecond}>
                        <Row className='gy-4'>
                            <Col lg={12}>
                                <div className='d-flex justify-content-end gap-2 w-100'>
                                    <ButtonComp text='Add new Vehicle' onClick={() => {
                                        router.push(`/${locale}/carrier/fleet/addNewFleet`)
                                    }} />
                                </div>
                            </Col>
                            <Col lg={12} className={Styles.ManageFleet}>
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
                                    <div className={Styles.FleetManagementTbl}>
                                        <CommonTable columns={columns} data={data} />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col xxl={2} xl={3} lg={3} md={12} sm={12}>
                        <AssignFeetCard />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Page;
