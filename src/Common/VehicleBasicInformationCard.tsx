import React from 'react'
import Styles from "./common.module.css"
import Image from 'next/image'
const VehicleBasicInformationCard = ({ idleTime, vehicleImage, driverImage, vehicleInfo, status, rating, driver, speedInfo, distanceCovered }: any) => {
    return (
        <div className={Styles.VehicleBasicInformationCardMain}>
            <div className={Styles.VehicleBasicInformationCardHeader}>
                <div className={Styles.VehicleBasicInformationCardHeaderMain}>
                    Vehicle Is Idle Since {idleTime}
                </div>
                <div className={Styles.VehicleImageSection}>
                    <Image src={driverImage} height={1000} width={1000} alt='Driver' className={Styles.DriverImage} />
                    <Image src={vehicleImage} height={1000} width={1000} alt='Vehicle' className={Styles.VehicleImage} />
                </div>
            </div>
            <div className={Styles.VehicleBasicInformationCardBody}>
                <div className={Styles.VehicleBasicInfoText}>
                    <h4>Vehicle Info</h4>
                    <p>{vehicleInfo}</p>
                </div>
                <div className='d-flex flex-wrap gap-2 justify-content-between align-items-center my-3'>
                    <div className={Styles.smallTag}>{status}</div>
                    <div className={Styles.smallTag}>{rating}</div>
                </div>
                <div className={Styles.DriverInformation}>
                    <h4>Driver Info</h4>
                    <div className={Styles.DriverInformationSub}>
                        <Image src={driver.image} height={1000} width={1000} alt='Driver' className={Styles.DriverImage} />
                        <div>
                            <h4>{driver.name}</h4>
                            <p>{driver.contact}</p>
                        </div>
                    </div>
                </div>
                <div className={Styles.speedInfoMain}>
                    <h4 className='mb-2'>Speed Info</h4>
                    <div className={Styles.speedInfo}>
                        <div className='text-center'>
                            <h4>{speedInfo.runtime} Hrs</h4>
                            <p>Runtime</p>
                        </div>
                        <div className='text-center'>
                            <h4>{speedInfo.maxSpeed} km/h</h4>
                            <p>Max Speed</p>
                        </div>
                        <div className='text-center'>
                            <h4>{speedInfo.avgSpeed} km/h</h4>
                            <p>Avg. Speed</p>
                        </div>
                    </div>
                </div>
                <div className={Styles.distance}>
                    <div className={Styles.dIcon}><i className="bi bi-truck"></i></div>
                    <div>
                        <p>Distance Covered</p>
                        <h4>{distanceCovered} Km</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VehicleBasicInformationCard