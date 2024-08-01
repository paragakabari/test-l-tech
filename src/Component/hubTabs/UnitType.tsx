import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import ButtonComp from '@/Component/Button';
import Styles from "./hubTabs.module.css";
import Image from 'next/image';

const UnitType = ({ types, selectedOptions, handleOptionChange, handleSaveAndExit, UnitTitle }) => (
    <div className={Styles.whiteBg}>
        <Row className="gy-4">
            <Col xl={12}>
                <label className="com-label">{UnitTitle}</label>
                <div className={Styles.VehicleSelect}>
                    {types.map(({ name, value }) => (
                        <span
                            key={value}
                            className={`${selectedOptions.vehicleType === value ? Styles.selected : ""}`}
                            onClick={() => handleOptionChange("vehicleType", value)}
                        >
                            {name}
                        </span>
                    ))}
                </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
                <label className="com-label">Country</label>
                <div className={`${Styles.CountrySelection} d-flex align-items-center gap-3`}>
                    <div className={Styles.countryImg}>
                        <Image src="https://images.unsplash.com/photo-1675855547482-16834b36d4d9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" height={50} width={50} alt="" />
                    </div>
                    <div>
                        <p>Saudi Arabia</p>
                        <span>Non Editable</span>
                    </div>
                </div>
            </Col>
            <Col lg={8} md={6} sm={12} className={Styles.formContainerMain}>
                <label className="com-label">Select Province</label>
                <Form.Select>
                    <option>Single selection</option>
                </Form.Select>
            </Col>
            <Col sm={12} className={Styles.formContainerMain}>
                <label className="com-label">Select City</label>
                <Form.Select>
                    <option>Riyadh</option>
                </Form.Select>
            </Col>
            <Col sm={12}>
                <ButtonComp text='Proceed Next' className='d-flex ms-auto' onClick={handleSaveAndExit} />
            </Col>
        </Row>
    </div>
);

export default UnitType;
