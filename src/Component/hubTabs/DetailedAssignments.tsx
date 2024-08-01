import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import ButtonComp from '@/Component/Button';
import Styles from "./hubTabs.module.css";

const DetailedAssignments = ({ handleSaveAndExit, isHub, DetailedInformationTitle }) => (
    <div className={Styles.whiteBg}>
        <Row className="gy-4">
            <Col lg={12}>
                <p className='fs-5'>{DetailedInformationTitle}</p>
            </Col>
            <Col sm={12} className={Styles.formContainerMain}>
                <label className="com-label">Location Name*</label>
                <Form.Select>
                    <option>Riyadh</option>
                </Form.Select>
            </Col>
            <Col sm={12} className={Styles.formContainerMain}>
                <label className="com-label">Address</label>
                <Form.Control type="text" placeholder="Enter Address" />
            </Col>
            <Col lg={4} md={6} sm={12} className={Styles.formContainerMain}>
                <label className="com-label">Latitude*</label>
                <Form.Control type="text" placeholder="Enter Latitude" />
            </Col>
            <Col lg={4} md={6} sm={12} className={Styles.formContainerMain}>
                <label className="com-label">Longitude*</label>
                <Form.Control type="text" placeholder="Enter Longitude" />
            </Col>
            <Col lg={4} md={12} sm={12} className='align-self-center'>
                <div className={Styles.dragPin}>
                    <div className='d-block'>
                        <div className={Styles.orTag}>OR</div>
                    </div>
                    <div className='d-flex gap-2 align-items-center'>
                        <p>Drag the pin on the map to capture the details</p>
                        <i className="bi bi-geo-fill"></i>
                    </div>
                </div>
            </Col>
            {isHub ? (
                <>
                    <Col lg={6} md={12} className={Styles.formContainerMain}>
                        <label className="com-label">Hub manager*</label>
                        <Form.Control type="text" placeholder="Assign a Hub manager" />
                    </Col>
                    <Col lg={6} md={12} className={Styles.formContainerMain}>
                        <label className="com-label">Hub Capacity (tons)*</label>
                        <Form.Control type="text" placeholder="Hub Capacity" />
                    </Col>
                    <Col lg={4} md={12} className={Styles.formContainerMain}>
                        <label className="com-label">Concrete Slab (Inch)*</label>
                        <Form.Control type="text" placeholder="Choose a value" />
                    </Col>
                    <Col lg={4} md={12} className={Styles.formContainerMain}>
                        <label className="com-label">Aisle width (Feet) *</label>
                        <Form.Control type="text" placeholder="Enter the area" />
                    </Col>
                    <Col lg={4} md={12} className={Styles.formContainerMain}>
                        <label className="com-label">Grade of Floor*</label>
                        <Form.Control type="text" placeholder="Select the floor" />
                    </Col>
                    <Col md={12} className={Styles.formContainerMain}>
                        <ButtonComp text='Proceed Next' className='d-flex ms-auto' onClick={handleSaveAndExit} />
                    </Col>
                </>
            ) : (
                <>
                    <Col lg={6} md={12} className={Styles.formContainerMain}>
                        <label className="com-label">Center manager*</label>
                        <Form.Control type="text" placeholder="Center manager" />
                    </Col>
                    <Col lg={6} md={12} className='align-self-end'>
                        <ButtonComp text='Proceed Next' className='d-flex ms-auto' onClick={handleSaveAndExit} />
                    </Col>
                </>
            )}
        </Row>
    </div>
);

export default DetailedAssignments;
