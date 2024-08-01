import React from 'react'
import Styles from "./VehicleInfoComponent.module.css"
import ButtonComp from '../Button'
import Link from 'next/link'
import { Table } from 'react-bootstrap'
const Location = () => {
    const tableData = [
        { picLocation: 'Location Name', picLocationDate: 'Apr 22, 2023', dropLocation: 'Location Name', dropLocationDate: 'Apr 22, 2023', distanceTravelled: '678393', name: 'Drake B', position: 'Driver', shipmentInfo: '#SN-45354', },
        { picLocation: 'Location Name', picLocationDate: 'Apr 22, 2023', dropLocation: 'Location Name', dropLocationDate: 'Apr 22, 2023', distanceTravelled: '678393', name: 'Drake B', position: 'Driver', shipmentInfo: '#SN-45354', },
        { picLocation: 'Location Name', picLocationDate: 'Apr 22, 2023', dropLocation: 'Location Name', dropLocationDate: 'Apr 22, 2023', distanceTravelled: '678393', name: 'Drake B', position: 'Driver', shipmentInfo: '#SN-45354', },
    ];

    return (
        <div className={`${Styles.whiteBg} mt-4`}>
            <div className='d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap'>
                <div className={Styles.headerTbl}>
                    <h1 className={Styles.tabMainTitle}>Location Details</h1>
                </div>
                <Link href="" className={Styles.mapLink}>View On Map</Link>
            </div>
            <Table className={Styles.table} responsive>
                <thead>
                    <tr>
                        <th>Pickup</th>
                        <th>Drop Off</th>
                        <th>Distance Travelled</th>
                        <th>Driver Information</th>
                        <th>Shipment Info</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((data, index) => (
                        <tr key={index}>
                            <td>
                                <div className={`${Styles.ServiceNo} d-flex gap-2 align-items-center`}>
                                    <i className="bi bi-geo-alt-fill"></i>
                                    <div>
                                        <div>{data.picLocation}</div>
                                        <small>{data.picLocationDate}</small>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className={`${Styles.ServiceNo} d-flex gap-2 align-items-center`}>
                                    <i className="bi bi-geo-alt-fill"></i>
                                    <div>
                                        <div>{data.dropLocation}</div>
                                        <small>{data.dropLocationDate}</small>
                                    </div>
                                </div>
                            </td>
                            <td className={Styles.Odometer}>{data.distanceTravelled}</td>
                            <td>
                                <div className={Styles.scheduledBy}>
                                    <div className={Styles.initials}>{data.name.split(' ').map(n => n[0]).join('')}</div>
                                    <div>
                                        <div className={Styles.scheduledByText}>{data.name}</div>
                                        <small>{data.position}</small>
                                    </div>
                                </div>
                            </td>
                            <td className={Styles.Resolved}>{data.shipmentInfo}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default Location