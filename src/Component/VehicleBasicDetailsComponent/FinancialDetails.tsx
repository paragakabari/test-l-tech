"use client"
import React, { useState } from 'react'
import Styles from "./VehicleBasicDetailsComponent.module.css"
import { Col, Form, Row } from 'react-bootstrap'
import { FormGroup } from './BasicDetails'
import Image from 'next/image'

const CargoTypes = [
    { name: "Loan", value: "Loan" },
    { name: "Non Finance", value: "Non Finance" },
];
const Lender = [
    { url: "https://plus.unsplash.com/premium_photo-1718204434029-d710f571cf14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Al-Rajhi Bank", value: "Al-Rajhi Bank" },
    { url: "https://plus.unsplash.com/premium_photo-1718204434029-d710f571cf14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Banque Saudi Fransi", value: "Banque Saudi Fransi" },
    { url: "https://plus.unsplash.com/premium_photo-1718204434029-d710f571cf14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Arab National Bank", value: "Arab National Bank" },
    { url: "https://plus.unsplash.com/premium_photo-1718204434029-d710f571cf14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Saudi National Bank", value: "Saudi National Bank" },
    { url: "https://plus.unsplash.com/premium_photo-1718204434029-d710f571cf14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Saudi British Bank", value: "Saudi British Bank" },
    { url: "https://plus.unsplash.com/premium_photo-1718204434029-d710f571cf14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Saudi Investment Bank", value: "Saudi Investment Bank" },

];

const FinancialDetails = () => {
    const [selectedOptions, setSelectedOptions] = useState({
        vehicleType: "long",
        brand: "tata",
    });


    const handleOptionChange = (key, value) => {
        setSelectedOptions((prev) => ({ ...prev, [key]: value }));
    };
    return (
        <Row className="gy-4">
            <Col lg={6} md={12}>
                <div className={`${Styles.whiteBg} ${Styles.whiteBgCustomPadding}`}>
                    <Row className='gy-4'>
                        <Col lg={12}>
                            <h1 className='com-title'>Purchase Details</h1>
                        </Col>
                        <Col md={12}>
                            <FormGroup label="Purchase Vendor">
                                <Form.Control type="text" placeholder="Alaris Pvt. Ltd." className='com-input' />
                            </FormGroup>
                        </Col>
                        <Col lg={6} md={12}>
                            <FormGroup label="Purchase Date">
                                <Form.Control type="date" placeholder="DD - MM - YYYY" className='com-input' />
                            </FormGroup>
                        </Col>
                        <Col lg={6} md={12}>
                            <FormGroup label="Purchase Price">
                                <div className='position-relative'>
                                    <Form.Control type="text" placeholder="30" className='com-input' />
                                    <p className='cmPrefix'>SAR</p>
                                </div>
                            </FormGroup>
                        </Col>
                    </Row>
                </div>
            </Col>
            <Col lg={6} md={12}>
                <div className={`${Styles.whiteBg} ${Styles.whiteBgCustomPadding}`}>
                    <Row className='gy-4'>
                        <Col lg={12}>
                            <h1 className='com-title'>Warranty Details</h1>
                        </Col>
                        <Col md={12}>
                            <FormGroup label="Purchase Date">
                                <Form.Control type="date" placeholder="DD - MM - YYYY" className='com-input' />
                            </FormGroup>
                        </Col>
                        <Col lg={6} md={12}>
                            <FormGroup label="Purchase Date">
                                <div className='position-relative'>
                                    <Form.Control type="text" placeholder="1000 " className='com-input' />
                                    <p className='cmPrefix'>Km</p>
                                </div>
                            </FormGroup>
                        </Col>
                        <Col lg={6} md={12}>
                            <FormGroup label="Set Reminder">
                                <Form.Control type="text" placeholder="15 days prior" className='com-input' />
                            </FormGroup>
                        </Col>
                    </Row>
                </div>
            </Col>
            <Col lg={12}>
                <div className={Styles.whiteBg}>
                    <Row className='gy-4'>
                        <Col lg={12}>
                            <h1 className='com-title'>Loan & Finance Details</h1>
                        </Col>
                        <Col md={12}>
                            <div className='d-flex gap-2 align-items-center'>
                                {CargoTypes.map(({ name, value }) => (
                                    <span
                                        key={value}
                                        className={`${selectedOptions.vehicleType === value ? Styles.selected : ""} ${Styles.customCheck}`}
                                        onClick={() => handleOptionChange("vehicleType", value)}
                                    >
                                        {name}
                                    </span>
                                ))}
                            </div>
                        </Col>
                        <Col md={12}>
                            <FormGroup label="Lender">
                                <Row className='gy-4'>
                                    {Lender.map(({ name, value, url }) => (
                                        <Col lg={6} md={12}>
                                            <div className={`${selectedOptions.vehicleType === value ? Styles.selected : ""} ${Styles.customCheckImg}`} onClick={() => handleOptionChange("vehicleType", value)} key={value}>
                                                <Image height={50} width={50} alt='' src={url} />
                                                <span>
                                                    {name}
                                                </span>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            </FormGroup>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <FormGroup label="Amount of Loan">
                                <p className='com-p'>Total principal amt at the start of the loan</p>
                                <div className='position-relative'>
                                    <Form.Control type="text" placeholder="3000000 " className='com-input' />
                                    <p className='cmPrefix'>SAR</p>
                                </div>

                            </FormGroup>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <FormGroup label="Date of Loan">
                                <p className='com-p'>Date the agreement was signed</p>
                                <Form.Control type="date" className='com-input' />
                            </FormGroup>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <FormGroup label="Annual Percentage Rate (APR) %">
                                <Form.Control type="text" placeholder="14 %" className='com-input' />
                            </FormGroup>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <FormGroup label="Down Payment">
                                <p className='com-p'>Total down payment made at the start of the loan</p>
                                <div className='position-relative'>
                                    <Form.Control type="text" placeholder="3000000 " className='com-input' />
                                    <p className='cmPrefix'>SAR</p>
                                </div>
                            </FormGroup>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <FormGroup label="Date of Loan">
                                <p className='com-p'>Total amount that will be paid each month including any taxes and fees</p>
                                <div className='position-relative'>
                                    <Form.Control type="text" placeholder="3000000 " className='com-input' />
                                    <p className='cmPrefix'>SAR</p>
                                </div>
                            </FormGroup>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <FormGroup label="Number of Payments">
                                <p className='com-p'>Number of payments until the loan is paid off</p>
                                <Form.Control type="text" placeholder="14 %" className='com-input' />

                            </FormGroup>
                        </Col>
                        <Col lg={3} md={6} sm={12}>
                            <FormGroup label="First Payment Date">
                                <Form.Control type="date" className='com-input' />
                            </FormGroup>
                        </Col>
                        <Col lg={3} md={6} sm={12}>
                            <FormGroup label="Loan End Date">
                                <Form.Control type="date" className='com-input' />
                            </FormGroup>
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <FormGroup label="Account Number">
                                <Form.Control type="text" placeholder="XXXXXXXXXXXXXXXXXXX" className='com-input' />
                                <p className='com-p'>Used to identify the loan with the lender</p>
                            </FormGroup>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>

    )
}

export default FinancialDetails