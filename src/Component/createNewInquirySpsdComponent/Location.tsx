import React, { useState } from 'react'
import Styles from "./createNewInquirySpsdComponent.module.css"
import { Col, Row } from 'react-bootstrap'
import ButtonComp from '../Button';

const Location = () => {
    const [location, setLocation] = useState(false);
    const types = [
        { name: "Single Pick-up", value: "Single Pick-up" },
        { name: "Multiple Pick-up", value: "Multiple Pick-up" },
    ];
    const dropTypes = [
        { name: "Single Drop Off", value: "Single Drop Off" },
        { name: "Multiple Drop Off", value: "Multiple Drop Off" },
    ];
    const [selectedOptions, setSelectedOptions] = useState({
        vehicleType: "Single Pick-up",
        brand: "tata",
    });

    const handleOptionChange = (key, value) => {
        setSelectedOptions((prev) => ({ ...prev, [key]: value }));
    };
    return (
        <div className='mt-4'>
            <div className={`${Styles.tabsMain} d-flex gap-3`}>
                <div className='d-block mt-2'>
                    <div className={Styles.inquiryCheck}>
                        <i className="bi bi-check2"></i>
                    </div>
                </div>
                <div className='w-100'>
                    <div className={Styles.shipText}>
                        <p>Shipment Details</p>
                        <span>Seamless Shipping Solutions</span>
                    </div>
                    <div className=''>
                        <Row className='gy-4'>
                            <Col lg={6} md={12}>
                                <div className={Styles.typeBg}>
                                    <p>Pickup Type</p>
                                    <div className={Styles.VehicleSelect}>
                                        {types.map(({ name, value }) => (
                                            <span
                                                key={value}
                                                className={selectedOptions.vehicleType === value ? Styles.selected : ""}
                                                onClick={() => handleOptionChange("vehicleType", value)}
                                            >
                                                {name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6} md={12}>
                                <div className={Styles.typeBg}>
                                    <p>Drop Off Type</p>
                                    <div className={Styles.VehicleSelect}>
                                        {dropTypes.map(({ name, value }) => (
                                            <span
                                                key={value}
                                                className={selectedOptions.vehicleType === value ? Styles.selected : ""}
                                                onClick={() => handleOptionChange("vehicleType", value)}
                                            >
                                                {name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
            <div className='w-100'>
                <div className='d-flex gap-3'>
                    <div className='d-block mt-4'>
                        <div className={Styles.locationDrop}>
                            <p>A</p>
                        </div>
                    </div>
                    <div className={`${Styles.typeBg} w-100`}>
                        <p className={Styles.typeBgTitle}>Pickup From</p>
                        <h6>Full Address</h6>
                        <div className={Styles.searchInput}>
                            <input type="text" placeholder="Search by start typing your address." />
                            <i className="bi bi-search"></i>
                        </div>
                        <div className='position-relative'>
                            <div className={`${Styles.locationMap} cursor-pointer`} onClick={() => setLocation(true)}>
                                <div><i className="bi bi-arrows-fullscreen"></i></div>
                                <p>LOCATE ON MAP</p>
                            </div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463877.31242950493!2d46.49288193599672!3d24.725455372447055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2sin!4v1722231009093!5m2!1sen!2sin" width="100%" height="70" style={{ border: 0, borderRadius: '10px', marginTop: '30px' }} loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
                <div className='d-flex gap-3'>
                    <div className='d-block mt-4'>
                        <div className={Styles.locationDrop}>
                            <p>B</p>
                        </div>
                    </div>
                    {location ? (
                        <div className={`${Styles.typeBg} w-100`}>
                            <p className={Styles.typeBgTitle}>Dropoff To</p>
                            <h6>Full Address</h6>
                            <div className={Styles.searchInput}>
                                <input type="text" placeholder="Search by start typing your address." />
                                <i className="bi bi-search"></i>
                            </div>
                            <div className='position-relative'>
                                <div className={`${Styles.locationMap} cursor-pointer`} onClick={() => setLocation(true)}>
                                    <div><i className="bi bi-arrows-fullscreen"></i></div>
                                    <p>LOCATE ON MAP</p>
                                </div>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463877.31242950493!2d46.49288193599672!3d24.725455372447055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2sin!4v1722231009093!5m2!1sen!2sin" width="100%" height="70" style={{ border: 0, borderRadius: '10px', marginTop: '30px' }} loading="lazy"></iframe>
                            </div>
                        </div>
                    ) : (
                        <div className={Styles.dashedBox}>
                            Drop Off At
                        </div>
                    )}
                </div>
                {location ? (
                    <div className='d-flex justify-content-end mt-4'>
                        <ButtonComp text='Proceed Next' />
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </div>
    )
}

export default Location