import React, { useState } from 'react';
import Styles from "./VehicleInfoComponent.module.css";
import { Col, Form, Offcanvas, Row, Table } from 'react-bootstrap';
import Image from 'next/image';
import ButtonComp from '../Button';
import DragDropFilePicker, { ComponentViewContext } from '../DragDropFilePicker';
import { FileUploadSection, FormGroup } from '../VehicleBasicDetailsComponent/BasicDetails';

const Fuel = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const fuelData = [
        { company: 'Shell', date: 'Apr 22, 2023', odometer: 247322, usage: '20000km', volume: '500ltr', fuelEconomy: '4.1', cost: '960 SAR', costPerKm: '0.98 SAR/km', logo: '/shell_logo.jpg' },
        { company: 'Shell', date: 'Apr 22, 2023', odometer: 247322, usage: '20000km', volume: '500ltr', fuelEconomy: '4.3', cost: '960 SAR', costPerKm: '0.98 SAR/km', logo: '/shell_logo.jpg' },
        { company: 'Aramco', date: 'Apr 21, 2023', odometer: 247322, usage: '20000km', volume: '500ltr', fuelEconomy: '3.9', cost: '960 SAR', costPerKm: '0.98 SAR/km', logo: '/aramco_logo.png' },
        { company: 'Aramco', date: 'Apr 21, 2023', odometer: 247322, usage: '20000km', volume: '500ltr', fuelEconomy: '4.7', cost: '960 SAR', costPerKm: '0.98 SAR/km', logo: '/aramco_logo.png' },
        { company: 'Shell', date: 'Apr 22, 2023', odometer: 247322, usage: '20000km', volume: '500ltr', fuelEconomy: '4.3', cost: '960 SAR', costPerKm: '0.98 SAR/km', logo: '/shell_logo.jpg' }
    ];
    const brands = [
        { name: "Tata Motors", value: "tata", image: "https://i.pinimg.com/736x/a1/d5/af/a1d5afdace642c517d0cff0962a68679.jpg" },
        { name: "Volvo", value: "volvo", image: "https://i.pinimg.com/236x/69/d8/2e/69d82ee77bd68993db195bfb996f06c9.jpg" },
        { name: "Mahindra", value: "mahindra", image: "https://i.pinimg.com/736x/f2/2c/55/f22c552e14c6386c2ae424575db195d2.jpg" },
        { name: "Toyota", value: "toyota", image: "https://i.pinimg.com/736x/27/b7/de/27b7de9c188db33b73b49b79f9a9e99f.jpg" },
        { name: "Nissan", value: "nissan", image: "https://i.pinimg.com/736x/59/a5/26/59a526a3f6146549714f829936da41b4.jpg" },
        { name: "Mercedes Benz", value: "mercedes", image: "https://i.pinimg.com/736x/09/08/5d/09085dbe5d997954d49d53cd38a4f30d.jpg" },
        { name: "Eicher", value: "eicher", image: "https://i.pinimg.com/236x/0f/f1/b8/0ff1b8acfbc8559be650bf445699dceb.jpg" },
    ];
    const [selectedOptions, setSelectedOptions] = useState({
        vehicleType: "long",
        brand: "tata",
    });
    const handleOptionChange = (key, value) => {
        setSelectedOptions((prev) => ({ ...prev, [key]: value }));
    };
    return (
        <>
            <div className={`${Styles.whiteBg} mt-4`}>
                <div className='d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap'>
                    <div className={Styles.headerTbl}>
                        <h1>4960 SAR</h1>
                        <p>Refuelling in 340km</p>
                    </div>
                    <ButtonComp text='Add Fuel Record' onClick={handleShow} />
                </div>
                <Table className={Styles.table} responsive>
                    <thead>
                        <tr>
                            <th>Company</th>
                            <th>Odometer</th>
                            <th>Usage</th>
                            <th>Volume</th>
                            <th>Fuel Economy</th>
                            <th>Cost</th>
                            <th>Cost/km</th>
                            <th>Attachments</th>
                        </tr>
                    </thead>
                    <tbody>
                        {fuelData.map((data, index) => (
                            <tr key={index}>
                                <td className={Styles.name}>
                                    <Image src={data.logo} alt={`${data.company} logo`} className='fit-content' height={42} width={42} style={{ borderRadius: "100px", objectFit: "contain" }} />
                                    <div>
                                        <div>{data.company}</div><small>{data.date}</small>
                                    </div>
                                </td>
                                <td className=''>{data.odometer}</td>
                                <td>{data.usage}</td>
                                <td>{data.volume}</td>
                                <td>{data.fuelEconomy} km/liter</td>
                                <td>{data.cost}</td>
                                <td>{data.costPerKm}</td>
                                <td>
                                    <a href="#" style={{ color: "#FE6A57" }}><i className="bi bi-paperclip"></i></a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
            <Offcanvas show={show} onHide={handleClose} backdrop="static" placement='end'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title><h1 className={Styles.sidebarTitle}>Add Fuel Log</h1></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className={Styles.sideBody}>
                    <Row className='gy-4'>
                        <Col lg={12}>
                            <label className="com-label">Brand & Model of Vehicle*</label>
                            <div className={Styles.BrandMain}>
                                <div className={Styles.BrandSection}>
                                    {brands.map(({ name, value, image }) => (
                                        <div
                                            key={value}
                                            className={`${Styles.Brand} ${selectedOptions.brand === value ? Styles.SelectedBrand : ""}`}
                                            onClick={() => handleOptionChange("brand", value)}
                                        >  <Image src={image} alt="" height={42} width={42} />
                                            {selectedOptions.brand === value && (
                                                <i className="bi bi-check-circle-fill"></i>
                                            )}

                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={12}>
                            <FormGroup label="Odometer Reading*">
                                <Form.Control type="text" placeholder="XXXXXXXXX" className='com-input' />
                            </FormGroup>
                        </Col>
                        <Col lg={6} md={12}>
                            <FormGroup label="Fuel (in liters)*">
                                <Form.Control type="text" placeholder="Fuel (in liters):*" className='com-input' />
                            </FormGroup>
                        </Col>
                        <Col lg={6} md={12}>
                            <FormGroup label="Date">
                                <Form.Control type="date" className='com-input' />
                            </FormGroup>
                        </Col>
                        <Col lg={6} md={12}>
                            <FormGroup label="Time*">
                                <Form.Control type="time" className='com-input' />
                            </FormGroup>
                        </Col>
                        <Col lg={6} md={12}>
                            <FormGroup label="Cost/liters:*">
                                <Form.Control type="date" className='com-input' />
                            </FormGroup>
                        </Col>
                        <Col lg={12}>
                            <FileUploadSection
                                handleDrop={() => { }}
                                handleUpload={() => { }}
                                multiple={true}
                                allowedFileTypes=".pdf, .doc, .docx, .xlsx, .jpeg"
                                viewContext={ComponentViewContext.BoxedView}
                                fileSize="Upload up to 5 files"
                            />
                        </Col>
                    </Row>
                    <div className='d-flex align-items-center justify-content-between'>
                        <ButtonComp text='Cancel' className='outlineButton' onClick={(handleClose)} />
                        <ButtonComp text='Add Fuel Record' onClick={(handleClose)} />
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>

    );

}

export default Fuel;
