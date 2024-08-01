"use client";
import React, { useState } from "react";
import Styles from "./trackNow.module.css";
import GoogleMapReact from "google-map-react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Page = () => {
    const [locationDropdown, setLocationDropdown] = useState(false);
    const [vehiclesDropdown, setVehiclesDropdown] = useState(false);
    const [status, setStatus] = useState<string>("");

    const handleStatusClick = (status: any) => {
        setStatus(status);
    };

    const defaultProps = {
        center: {
            lat: 24.7136,
            lng: 46.6753,
        },
        zoom: 15,
    };

    return (
        <Container fluid className={Styles.appContainer}>
            <Row>
                <Col xl={2} lg={3} md={4} className={Styles.sidebar}>
                    <div className={Styles.header}>
                        <h3>TRACK YOUR FLEETS</h3>
                        <p>GEOGRAPHICAL UNITS</p>
                    </div>
                    <div className={Styles.section}>
                        <Form.Group className={Styles.formGroup}>
                            <Form.Label className="fw-light">Locations</Form.Label>
                            <div className={Styles.searchInputCheck}>
                                <div className="position-relative">
                                    <Form.Control
                                        type="text"
                                        placeholder="Al-"
                                        className={Styles.locationInput}
                                        onFocus={() => setLocationDropdown(true)}
                                    />
                                    <i
                                        className={`bi bi-x-lg cursor-pointer ${Styles.closeIcon}`}
                                        onClick={() => setLocationDropdown(false)}
                                    ></i>
                                </div>
                                {locationDropdown && (
                                    <div className={`${Styles.locationList} check-main`}>
                                        <Form.Check
                                            type="checkbox"
                                            label="Select All"
                                            className={Styles.formCheck}
                                        />
                                        <Form.Check
                                            type="checkbox"
                                            label="Al-Bijadiyah"
                                            className={Styles.formCheck}
                                            defaultChecked
                                        />
                                        <Form.Check
                                            type="checkbox"
                                            label="Al-Duwadimi"
                                            className={Styles.formCheck}
                                        />
                                        <Form.Check
                                            type="checkbox"
                                            label="Al-Muzahmiya"
                                            className={Styles.formCheck}
                                        />
                                    </div>
                                )}
                            </div>
                        </Form.Group>
                    </div>
                    <div className={Styles.section}>
                        <p className={Styles.filterByTitle}>Filter By</p>
                        <div className={Styles.filterButtons}>
                            <Button
                                variant="primary"
                                className={`${Styles.filterButton} ${vehiclesDropdown ? Styles.filterButtonActive : ""
                                    }`}
                                onClick={() => setVehiclesDropdown(true)}
                            >
                                Vehicles
                            </Button>
                            <Button
                                variant="light"
                                className={`${Styles.filterButton} ${vehiclesDropdown ? "" : Styles.filterButtonActive
                                    }`}
                                onClick={() => setVehiclesDropdown(false)}
                            >
                                Drivers
                            </Button>
                        </div>
                        {vehiclesDropdown && (
                            <>
                                <Form.Control
                                    type="text"
                                    placeholder="Search Vehicle name/ no."
                                    className={Styles.searchInput}
                                />
                                <Form.Group className={Styles.formGroup}>
                                    <Form.Label>Vehicle Properties</Form.Label>
                                    <Form.Control as="select" className={Styles.selectInput}>
                                        <option>Select the vehicle type</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className={Styles.formGroup}>
                                    <Form.Label>Vehicle Capacity</Form.Label>
                                    <Form.Control as="select" className={Styles.selectInput}>
                                        <option>Select the range</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Label>Vehicle Status</Form.Label>
                                <div className={`${Styles.vehicleStatus} vehicleStatus`}>
                                    <Form.Check
                                        type="checkbox"
                                        label="Moving"
                                        className={Styles.formCheck}
                                    />
                                    <Form.Check
                                        type="checkbox"
                                        label="Idle"
                                        className={Styles.formCheck}
                                    />
                                    <Form.Check
                                        type="checkbox"
                                        label="Ignition On"
                                        className={Styles.formCheck}
                                    />
                                    <Form.Check
                                        type="checkbox"
                                        label="Stop"
                                        className={Styles.formCheck}
                                    />
                                    <Form.Check
                                        type="checkbox"
                                        label="All"
                                        className={Styles.formCheck}
                                    />
                                </div>
                            </>
                        )}
                    </div>
                </Col>
                <Col xl={10} lg={9} md={8} className={Styles.mapContainer}>
                    <div className={Styles.map}>
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: "" }}
                            defaultCenter={defaultProps.center}
                            defaultZoom={defaultProps.zoom}
                        />
                    </div>
                    <div className={Styles.statusOverlay}>
                        <div className={Styles.statusItem}>
                            <p>05</p>
                            <span>
                                Vehicles
                                <br />
                                Moving
                            </span>
                        </div>
                        <div className={Styles.statusItem}>
                            <p>02</p>
                            <span>
                                Trucks
                                <br />
                                Delayed
                            </span>
                        </div>
                        <div className={Styles.statusItem}>
                            <p>07</p>
                            <span>
                                Alerts
                                <br />
                                Raised
                            </span>
                        </div>
                        <div className={Styles.statusItem}>
                            <p>5</p>
                            <span>
                                Times
                                <br />
                                Fuel Refilled
                            </span>
                        </div>
                        <Button variant="link" className={Styles.viewMoreButton}>
                            View More
                        </Button>
                    </div>
                    <div className={Styles.containerSide}>
                        <div>
                            <div className={Styles.iconWrapper}>
                                <i
                                    className="bi bi-bell"
                                    style={{ fontSize: "24px", color: "white" }}
                                ></i>
                                <div className={Styles.alertCount}>129</div>
                            </div>
                            <div className={Styles.label}>Alerts</div>
                        </div>
                        <div
                            className={Styles.status}
                            onClick={() => handleStatusClick("stopped")}
                        >
                            <div className="position-relative">
                                <div
                                    className={`${Styles.statusCircle} ${Styles.stopped}`}
                                ></div>
                                {status === "stopped" && (
                                    <i className="bi bi-check-circle-fill"></i>
                                )}
                            </div>
                            <span className={`${Styles.label} ${Styles.stoppedText}`}>
                                Stopped
                            </span>
                        </div>
                        <div
                            className={Styles.status}
                            onClick={() => handleStatusClick("idle")}
                        >
                            <div className="position-relative">
                                <div className={`${Styles.statusCircle} ${Styles.idle}`}></div>
                                {status === "idle" && (
                                    <i className="bi bi-check-circle-fill"></i>
                                )}
                            </div>
                            <span className={`${Styles.label} ${Styles.idleText}`}>Idle</span>
                        </div>
                        <div
                            className={Styles.status}
                            onClick={() => handleStatusClick("moving")}
                        >
                            <div className="position-relative">
                                <div
                                    className={`${Styles.statusCircle} ${Styles.moving}`}
                                ></div>
                                {status === "moving" && (
                                    <i className="bi bi-check-circle-fill"></i>
                                )}
                            </div>
                            <span className={`${Styles.label} ${Styles.movingText}`}>
                                Moving
                            </span>
                        </div>
                        <div
                            className={Styles.status}
                            onClick={() => handleStatusClick("ignited")}
                        >
                            <div className="position-relative">
                                <div
                                    className={`${Styles.statusCircle} ${Styles.ignited}`}
                                ></div>
                                {status === "ignited" && (
                                    <i className="bi bi-check-circle-fill"></i>
                                )}
                            </div>
                            <span className={`${Styles.label} ${Styles.ignitedText}`}>
                                Ignited
                            </span>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Page;
