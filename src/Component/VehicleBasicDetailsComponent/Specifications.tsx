import React, { useState } from 'react'
import Styles from "./VehicleBasicDetailsComponent.module.css"
import FadeComp from '../FadeComp';
import { Col, Form, Row, Table } from 'react-bootstrap';
import ButtonComp from '../Button';
import Image from 'next/image';

const CargoTypes = [
    { name: "30", value: "30" },
    { name: "40", value: "40" },
    { name: "50", value: "50" },
    { name: "60", value: "60" },
    { name: "70", value: "70" },
    { name: "Other", value: "other" },
];
const Passenger = [
    { name: "30", value: "30" },
    { name: "40", value: "40" },
    { name: "50", value: "50" },
    { name: "60", value: "60" },
    { name: "70", value: "70" },
    { name: "Other", value: "other" },
];
const Interior = [
    { name: "30", value: "30" },
    { name: "40", value: "40" },
    { name: "50", value: "50" },
    { name: "60", value: "60" },
    { name: "70", value: "70" },
    { name: "Other", value: "other" },
];
const GroundClearance = [
    { name: "30 cm", value: "30" },
];
const range = [
    { name: "Range 1", value: "Range1" },
    { name: "Range 2", value: "Range2" },
];
const Aspiration = [
    { name: "Turbocharger", value: "Turbocharger" },
    { name: "Naturally Aspirated", value: "Naturally Aspirated" },
    { name: "Twin Turbo Charger", value: "Twin Turbo Charger" },
];
const CamType = [
    { name: "DOHC", value: "DOHC" },
    { name: "OHV", value: "OHV" },
];
const Cylinders = [
    { name: "3", value: "3" },
    { name: "4", value: "4" },
    { name: "5", value: "5" },
    { name: "Add", value: "Add" },
];
const FuelInduction = [
    { name: "Common Rail Direct Injection", value: "Common Rail Direct Injection" },
    { name: "Sequential Port Fuel", value: "Sequential Port Fuel" },
    { name: "Injection", value: "Injection" },
    { name: "Sequential Multiport Fuel Injection", value: "Sequential Multiport Fuel Injection" },
];
const DriveType = [
    { name: "4X4", value: "4X4" },
    { name: "6X4", value: "6X4" },
    { name: "FWD", value: "FWD" },
    { name: "RWD", value: "RWD" },
];
const BrakeSystem = [
    { name: "Air", value: "Air" },
    { name: "Hydraulic", value: "Hydraulic" },
];
const FuelType = [
    { name: "Deisel", value: "Deisel" },
    { name: "Petrol", value: "Petrol" },
    { name: "ECV", value: "ECV" },
    { name: "HEV", value: "HEV" },
    { name: "LPG", value: "LPG" },
    { name: "Bio Diesel", value: "Bio Diesel" },
    { name: "Ethanol", value: "Ethanol" },
    { name: "Alternative", value: "Alternative" },
];
const FuelTankMaterial = [
    { name: "Plastic", value: "Plastic" },
    { name: "Metal", value: "Metal" },
    { name: "Others", value: "Others" },
];
const BedLength = [
    { name: "30 cm", value: "30" },
];
const Specifications = () => {
    const [openId, setOpenId] = useState<number>(1);
    const [selectedOptions, setSelectedOptions] = useState({
        vehicleType: "long",
        brand: "tata",
    });


    const handleOptionChange = (key, value) => {
        setSelectedOptions((prev) => ({ ...prev, [key]: value }));
    };

    const handleToggle = (id: number) => {
        setOpenId(openId === id ? null : id);
    };
    return (
        <div className={Styles.SpecificationsMain}>
            <FadeComp id="DimensionDetails" title="Dimension Details" isOpen={openId === 1}
                onToggle={() => handleToggle(1)}>
                <div className='mt-4'>
                    <Row>
                        <Col lg={5} md={12}>
                            <div className={Styles.vImg}>
                                <Image src="/backDia.png" alt='' height={290} width={290} />
                            </div>
                        </Col>
                        <Col lg={7} md={12}>
                            <div className={Styles.DimensionDetailsSec}>
                                <h5>External Dimensions (in cm)</h5>
                                <div className='d-flex gap-2 align-items-center'>
                                    <Form.Control type="text" placeholder="Length" className='com-input' />
                                    <Form.Control type="text" placeholder="Width" className='com-input' />
                                    <Form.Control type="text" placeholder="Height" className='com-input' />
                                    <p>Area - 4.3m</p>
                                </div>
                            </div>
                            <div className={Styles.DimensionDetailsSec}>
                                <h5>Internal Dimensions (in cm)</h5>
                                <div className='d-flex gap-2 align-items-center'>
                                    <Form.Control type="text" placeholder="Length" className='com-input' />
                                    <Form.Control type="text" placeholder="Width" className='com-input' />
                                    <Form.Control type="text" placeholder="Height" className='com-input' />
                                    <p>Area - 4.3m</p>
                                </div>
                            </div>
                            <div className={Styles.DimensionDetailsSec}>
                                <h5>Doorway (in cm)</h5>
                                <div className='d-flex gap-2 align-items-center'>
                                    <Form.Control type="text" placeholder="Length" className='com-input' />
                                    <Form.Control type="text" placeholder="Width" className='com-input' />
                                </div>
                            </div>
                            <div className={Styles.DimensionDetailsSec}>
                                <h5>Passenger Volume (Cm3)</h5>
                                <div className='d-flex gap-2 align-items-center'>
                                    {Passenger.map(({ name, value }) => (
                                        <span
                                            key={value}
                                            className={`${selectedOptions.vehicleType === value ? Styles.selected : ""} ${Styles.customCheck}`}
                                            onClick={() => handleOptionChange("vehicleType", value)}
                                        >
                                            {name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className={Styles.DimensionDetailsSec}>
                                <h5>Cargo Volume (Cm3)</h5>
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
                            </div>
                            <div className={Styles.DimensionDetailsSec}>
                                <h5>Interior Volume (Cm3)</h5>
                                <div className='d-flex gap-2 align-items-center'>
                                    {Interior.map(({ name, value }) => (
                                        <span
                                            key={value}
                                            className={`${selectedOptions.vehicleType === value ? Styles.selected : ""} ${Styles.customCheck}`}
                                            onClick={() => handleOptionChange("vehicleType", value)}
                                        >
                                            {name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className={Styles.DimensionDetailsSec}>
                                <h5>Ground Clearance</h5>
                                <div className='d-flex gap-2 align-items-center'>
                                    {GroundClearance.map(({ name, value }) => (
                                        <span
                                            key={value}
                                            className={`${selectedOptions.vehicleType === value ? Styles.selected : ""} ${Styles.customCheck}`}
                                            onClick={() => handleOptionChange("vehicleType", value)}
                                        >
                                            {name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className={Styles.DimensionDetailsSec}>
                                <h5>Bed Length</h5>
                                <div className='d-flex gap-2 align-items-center'>
                                    {BedLength.map(({ name, value }) => (
                                        <span
                                            key={value}
                                            className={`${selectedOptions.vehicleType === value ? Styles.selected : ""} ${Styles.customCheck}`}
                                            onClick={() => handleOptionChange("vehicleType", value)}
                                        >
                                            {name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Col>
                        <Col xxl={12} className="d-flex justify-content-between align-items-center flex-wrap gap-2">
                            <ButtonComp text="Add Specifications" onClick={() => handleToggle(openId + 1)} />
                        </Col>
                    </Row>
                </div>
            </FadeComp>
            <FadeComp id="TextureDetails" title="Texture Details" isOpen={openId === 2} onToggle={() => handleToggle(2)}>
                <div className='mt-4'>
                    <Row>
                        <Col lg={12}>
                            <div className={Styles.SpecificationsComInput}>
                                <h5>External Dimensions (in cm)</h5>
                                <Form.Control type="text" placeholder="125 mm Sandwich panel construction with GRP Sheet + PU Foams + Aluminium T Grating" className='com-input' />
                            </div>
                            <div className={`${Styles.SpecificationsComInput} mt-4`}>
                                <h5>Roof</h5>
                                <Form.Control type="text" placeholder="125mm PU Foam" className='com-input' />
                            </div>
                            <div className={`${Styles.SpecificationsComInput} mt-4`}>
                                <h5>Headboard/Front panel</h5>
                                <Form.Control type="text" placeholder="1.6mm corrugated MS panels + 100mm PU foams + 0.5mm SS Sheet (Food grade)" className='com-input' />
                            </div>
                            <div className={`${Styles.SpecificationsComInput} mt-4`}>
                                <h5>Side Panel</h5>
                                <Form.Control type="text" placeholder="1.6mm corrugated MS panels + 100mm PU foams + 0.5mm SS Sheet (Food grade)" className='com-input' />
                            </div>
                            <div className={`${Styles.SpecificationsComInput} mt-4`}>
                                <h5>Door</h5>
                                <Form.Control type="text" placeholder="1.6mm corrugated MS panels + 100mm PU foams + 0.5mm SS Sheet (Food grade)" className='com-input' />
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <div className={`${Styles.SpecificationsComInput} mt-4`}>
                                <h5>Painting & Rust Prevention</h5>
                                <Form.Control type="text" placeholder="Polyurethane (PU) finish paint" className='com-input' />
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <div className={`${Styles.SpecificationsComInput} mt-4`}>
                                <h5>Operating Temperature range</h5>
                                <div className='d-flex gap-2 align-items-center'>
                                    {range.map(({ name, value }) => (
                                        <span
                                            key={value}
                                            className={`${selectedOptions.vehicleType === value ? Styles.selected : ""} ${Styles.customCheck}`}
                                            onClick={() => handleOptionChange("vehicleType", value)}
                                        >
                                            {name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className={`${Styles.SpecificationsComInput} mt-4`}>
                                <h5>Ambient Temperature</h5>
                                <Form.Control type="text" placeholder="30" className='com-input' />
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className={`${Styles.SpecificationsComInput} mt-4`}>
                                <h5>Insulation Density</h5>
                                <Form.Control type="text" placeholder="30 kg\Cm3" className='com-input' />
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className={`${Styles.SpecificationsComInput} mt-4`}>
                                <h5>Tanker Material</h5>
                                <select className="form-control selectBox">
                                    <option value="">Aluminium</option>
                                    <option value="">Option 1</option>
                                    <option value="">Option 2</option>
                                    <option value="">Option 3</option>
                                </select>
                            </div>
                        </Col>
                        <Col sm={12}>
                            <div className={`${Styles.SpecificationsComInput} mt-4`}>
                                <h5>Color *</h5>
                                <div className='d-flex gap-2 flex-wrap'>
                                    <div className="colorBox" style={{ background: '#49000E' }}></div>
                                    <div className="colorBox" style={{ background: '#003C3B' }}></div>
                                    <div className="colorBox" style={{ background: '#21507E' }}></div>
                                    <div className="colorBox" style={{ background: '#FEB103' }}></div>
                                    <div className="colorBox" style={{ background: '#E8CC4B' }}></div>
                                    <div className="colorBox" style={{ background: '#018C89' }}></div>
                                    <div className="colorBox" style={{ background: '#CAC686' }}></div>
                                    <div className="colorBox" style={{ background: '#A8987F' }}></div>
                                    <div className="colorBox" style={{ background: '#086982' }}></div>
                                    <div className="colorBox" style={{ background: '#657453' }}></div>
                                    <div className="colorBox" style={{ background: '#8E0019' }}></div>
                                    <div className="colorBox" style={{ background: '#C4E0F3' }}></div>
                                    <div className="colorBox" style={{ background: '#FFF6B5' }}></div>
                                    <div className="colorBox" style={{ background: '#A84106' }}></div>
                                    <div className="colorBox" style={{ background: '#0F1648' }}></div>
                                    <div className="colorBox" style={{ background: '#6B7F97' }}></div>
                                </div>
                            </div>
                        </Col>
                        <Col xxl={12} className="d-flex justify-content-between align-items-center flex-wrap gap-2 mt-4">

                            <ButtonComp text="Back" className="outlineButton" onClick={() => handleToggle(openId - 1)} />
                            <ButtonComp text="Add Specifications" onClick={() => handleToggle(openId + 1)} />
                        </Col>
                    </Row>
                </div>
            </FadeComp>
            <FadeComp id="VehicleWeight" title="Vehicle Weight" isOpen={openId === 3} onToggle={() => handleToggle(3)}>
                <div className='mt-4'>
                    <Row className='gy-4'>
                        <Col lg={4} md={6} sm={12}>
                            <div className={`${Styles.SpecificationsComInput}`}>
                                <h5>Curb Weight *</h5>
                                <Form.Control type="text" placeholder="30 kg" className='com-input' />
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className={`${Styles.SpecificationsComInput}`}>
                                <h5>Gross vehicle mass (GVM)*</h5>
                                <Form.Control type="text" placeholder="30 kg" className='com-input' />
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className={`${Styles.SpecificationsComInput}`}>
                                <h5>Tare Weight</h5>
                                <Form.Control type="text" placeholder="Aluminium" className='com-input' />
                            </div>
                        </Col>
                        <Col xxl={12} className="d-flex justify-content-between align-items-center flex-wrap gap-2">
                            <ButtonComp text="Back" className="outlineButton" onClick={() => handleToggle(openId - 1)} />
                            <ButtonComp text="Add Specifications" onClick={() => handleToggle(openId + 1)} />
                        </Col>
                    </Row>
                </div>
            </FadeComp>
            <FadeComp id="VehicleCapacity" title="Vehicle Capacity" isOpen={openId === 4} onToggle={() => handleToggle(4)}>
                <div className='mt-4'>
                    <Row className='gy-4'>
                        <Col lg={4} md={6} sm={12}>
                            <div className={`${Styles.SpecificationsComInput}`}>
                                <h5>GCW Approval*</h5>
                                <Form.Control type="text" placeholder="90000 kg" className='com-input' />
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className={`${Styles.SpecificationsComInput}`}>
                                <h5>Capacity in No of euro Pallet Size</h5>
                                <div className='d-flex gap-2 align-items-center'>
                                    {range.map(({ name, value }) => (
                                        <span
                                            key={value}
                                            className={`${selectedOptions.vehicleType === value ? Styles.selected : ""} ${Styles.customCheck}`}
                                            onClick={() => handleOptionChange("vehicleType", value)}
                                        >
                                            {name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className={`${Styles.SpecificationsComInput}`}>
                                <h5>Brake Towing Capacity</h5>
                                <Form.Control type="text" placeholder="XXXXXX" className='com-input' />
                            </div>
                        </Col>
                        <Col xxl={12} className="d-flex justify-content-between align-items-center flex-wrap gap-2">
                            <ButtonComp text="Back" className="outlineButton" onClick={() => handleToggle(openId - 1)} />
                            <ButtonComp text="Add Specifications" onClick={() => handleToggle(openId + 1)} />
                        </Col>
                    </Row>
                </div>
            </FadeComp>
            <FadeComp id="FuelEconomy" title="Fuel Economy" isOpen={openId === 5} onToggle={() => handleToggle(5)}>
                <div className='mt-4'>
                    <Row className='gy-4'>
                        <Col lg={4} md={6} sm={12}>
                            <div className={`${Styles.SpecificationsComInput}`}>
                                <h5>While Moving in City</h5>
                                <Form.Control type="text" placeholder="6 Km/Litre" className='com-input' />
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className={`${Styles.SpecificationsComInput}`}>
                                <h5>While Moving on Highway</h5>
                                <Form.Control type="text" placeholder="10 Km/Litre" className='com-input' />
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className={`${Styles.SpecificationsComInput}`}>
                                <h5>Combined</h5>
                                <Form.Control type="text" placeholder="8.2 Km/Litre" className='com-input' />
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className={`${Styles.SpecificationsComInput}`}>
                                <h5>While Idle *</h5>
                                <Form.Control type="text" placeholder="6 Litre/hr" className='com-input' />
                            </div>
                        </Col>
                        <Col xxl={12} className="d-flex justify-content-between align-items-center flex-wrap gap-2">
                            <ButtonComp text="Back" className="outlineButton" onClick={() => handleToggle(openId - 1)} />
                            <ButtonComp text="Add Specifications" onClick={() => handleToggle(openId + 1)} />
                        </Col>
                    </Row>
                </div>
            </FadeComp>
            <FadeComp id="Engine" title="Engine" isOpen={openId === 6} onToggle={() => handleToggle(6)}>
                <div className='mt-4'>
                    <Row className='gy-4'>
                        <Col lg={12}>
                            <div className={`${Styles.SpecificationsComInput}`}>
                                <h5>Engine Summary</h5>
                                <Form.Control type="text" placeholder="125 mm Sandwich panel construction with GRP Sheet + PU Foams + Aluminium T Grating" className='com-input' />
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className={`${Styles.SpecificationsComInput}`}>
                                <h5>Engine Brand</h5>
                                <Form.Control type="text" placeholder="Alaris Pvt. Ltd." className='com-input' />
                            </div>
                        </Col>
                        <Col lg={8} md={6} sm={12}>
                            <div className={`${Styles.SpecificationsComInput}`}>
                                <h5>Aspiration</h5>
                                <div className='d-flex gap-2 align-items-center flex-wrap'>
                                    {Aspiration.map(({ name, value }) => (
                                        <span
                                            key={value}
                                            className={`${selectedOptions.vehicleType === value ? Styles.selected : ""} ${Styles.customCheck}`}
                                            onClick={() => handleOptionChange("vehicleType", value)}
                                        >
                                            {name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className={`${Styles.SpecificationsComInput}`}>
                                <h5>Block Type</h5>
                                <Form.Control type="text" placeholder="6" className='com-input' />
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className={`${Styles.SpecificationsComInput}`}>
                                <h5>Bore</h5>
                                <div className='position-relative'>
                                    <Form.Control type="text" placeholder="30" className='com-input' />
                                    <p className='cmPrefix'>cm</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className={`${Styles.SpecificationsComInput}`}>
                                <h5>Cam Type</h5>
                                <div className='d-flex gap-2 align-items-center flex-wrap'>
                                    {CamType.map(({ name, value }) => (
                                        <span
                                            key={value}
                                            className={`${selectedOptions.vehicleType === value ? Styles.selected : ""} ${Styles.customCheck}`}
                                            onClick={() => handleOptionChange("vehicleType", value)}
                                        >
                                            {name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className={`${Styles.SpecificationsComInput}`}>
                                <h5>Compression Ratio</h5>
                                <Form.Control type="text" placeholder="Alaris Pvt. Ltd." className='com-input' />
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className={`${Styles.SpecificationsComInput}`}>
                                <h5>Cylinders</h5>
                                <div className='d-flex gap-2 align-items-center flex-wrap'>
                                    {Cylinders.map(({ name, value }) => (
                                        <span
                                            key={value}
                                            className={`${selectedOptions.vehicleType === value ? Styles.selected : ""} ${Styles.customCheck}`}
                                            onClick={() => handleOptionChange("vehicleType", value)}
                                        >
                                            {name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className={`${Styles.SpecificationsComInput}`}>
                                <h5>Displacement</h5>
                                <div className='position-relative'>
                                    <Form.Control type="text" placeholder="30" className='com-input' />
                                    <p className='cmPrefix'>cm</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className={`${Styles.SpecificationsComInput}`}>
                                <h5>Max Power</h5>
                                <Form.Control type="text" placeholder="Alaris Pvt. Ltd. kw" className='com-input' />
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className={`${Styles.SpecificationsComInput}`}>
                                <h5>Range Torque</h5>
                                <div className='d-flex gap-2'>
                                    <Form.Control type="text" placeholder="Min kw" className='com-input' />
                                    <Form.Control type="text" placeholder="Max kw" className='com-input' />
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className={`${Styles.SpecificationsComInput}`}>
                                <h5>Max Engine Rotation Speed</h5>
                                <Form.Control type="text" placeholder="1700 RPM" className='com-input' />
                            </div>
                        </Col>
                        <Col lg={12}>
                            <Row className='gy-4'>
                                <Col lg={8} md={12} sm={12}>
                                    <Row className='gy-4'>
                                        <Col lg={12}>
                                            <div className={`${Styles.SpecificationsComInput}`}>
                                                <h5>Fuel Induction</h5>
                                                <div className='d-flex gap-2 align-items-center flex-wrap'>
                                                    {FuelInduction.map(({ name, value }) => (
                                                        <span
                                                            key={value}
                                                            className={`${selectedOptions.vehicleType === value ? Styles.selected : ""} ${Styles.customCheck}`}
                                                            onClick={() => handleOptionChange("vehicleType", value)}
                                                        >
                                                            {name}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={6} md={12} sm={12}>
                                            <div className={`${Styles.SpecificationsComInput}`}>
                                                <h5>Stroke</h5>
                                                <div className='position-relative'>
                                                    <Form.Control type="text" placeholder="30" className='com-input' />
                                                    <p className='cmPrefix'>cm</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={6} md={12} sm={12}>
                                            <div className={`${Styles.SpecificationsComInput}`}>
                                                <h5>Valves</h5>
                                                <Form.Control type="text" placeholder="30" className='com-input' />
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col lg={4} md={12} sm={12} className='d-flex justify-content-center align-self-center'>
                                    <Image src="/Engine.png" width={279} height={179} alt="" className="" />
                                </Col>
                            </Row>
                        </Col>
                        <Col xxl={12} className="d-flex justify-content-between align-items-center flex-wrap gap-2">
                            <ButtonComp text="Back" className="outlineButton" onClick={() => handleToggle(openId - 1)} />
                            <ButtonComp text="Add Specifications" onClick={() => handleToggle(openId + 1)} />
                        </Col>
                    </Row>
                </div>
            </FadeComp>
            <FadeComp id="Transmission" title="Transmission" isOpen={openId === 7} onToggle={() => handleToggle(7)}>
                <div className='mt-4'>
                    <Row className='gy-4'>
                        <Col lg={12}>
                            <div className={`${Styles.SpecificationsComInput}`}>
                                <h5>Transmission Summary</h5>
                                <Form.Control type="text" placeholder="125 mm Sandwich panel construction with GRP Sheet + PU Foams + Aluminium T Grating" className='com-input' />
                            </div>
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <div className={`${Styles.SpecificationsComInput}`}>
                                <h5>Transmission Type</h5>
                                <div className='d-flex gap-2 align-items-center flex-wrap'>
                                    {DriveType.map(({ name, value }) => (
                                        <span
                                            key={value}
                                            className={`${selectedOptions.vehicleType === value ? Styles.selected : ""} ${Styles.customCheck}`}
                                            onClick={() => handleOptionChange("vehicleType", value)}
                                        >
                                            {name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <div className={`${Styles.SpecificationsComInput}`}>
                                <h5>Transmission Gears</h5>
                                <Form.Control type="text" placeholder="30" className='com-input' />
                            </div>
                        </Col>
                        <Col xxl={12} className="d-flex justify-content-between align-items-center flex-wrap gap-2">
                            <ButtonComp text="Back" className="outlineButton" onClick={() => handleToggle(openId - 1)} />
                            <ButtonComp text="Add Specifications" onClick={() => handleToggle(openId + 1)} />
                        </Col>
                    </Row>
                </div>
            </FadeComp>
            <FadeComp id="WheelsTyres" title="Wheels & Tyres" isOpen={openId === 8} onToggle={() => handleToggle(8)}>
                <div className='mt-4'>
                    <Row className='gy-4'>
                        <Col lg={3} md={6} sm={12}>
                            <div className={`${Styles.SpecificationsComInput}`}>
                                <h5>Brake System</h5>
                                <div className='d-flex gap-2 align-items-center flex-wrap'>
                                    {BrakeSystem.map(({ name, value }) => (
                                        <span
                                            key={value}
                                            className={`${selectedOptions.vehicleType === value ? Styles.selected : ""} ${Styles.customCheck}`}
                                            onClick={() => handleOptionChange("vehicleType", value)}
                                        >
                                            {name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <div className={`${Styles.SpecificationsComInput}`}>
                                <h5>Wheelbase</h5>
                                <Form.Control type="text" placeholder="Alaris Pvt. Ltd." className='com-input' />
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className={Styles.WheelsTyresTblMain}>
                                <Table className={`w-100 ${Styles.WheelsTyresTbl}`} responsive>
                                    <thead>
                                        <tr>
                                            <td></td>
                                            <td>FRONT TYRE</td>
                                            <td>REAR TYRE</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Track Width</td>
                                            <td>
                                                <div className='position-relative'>
                                                    <Form.Control type="text" placeholder="30" className='com-input' />
                                                    <p className='cmPrefix'>cm</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className='position-relative'>
                                                    <Form.Control type="text" placeholder="30" className='com-input' />
                                                    <p className='cmPrefix'>cm</p>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Wheel Diameter</td>
                                            <td>
                                                <div className='position-relative'>
                                                    <Form.Control type="text" placeholder="30" className='com-input' />
                                                    <p className='cmPrefix'>cm</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className='position-relative'>
                                                    <Form.Control type="text" placeholder="30" className='com-input' />
                                                    <p className='cmPrefix'>cm</p>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Tyre Type</td>
                                            <td>
                                                <div className='position-relative'>
                                                    <Form.Control type="text" placeholder="30" className='com-input' />
                                                    <p className='cmPrefix'>cm</p>
                                                </div>
                                            </td>
                                            <td> <Form.Control type="text" placeholder="Tyre Type" className='com-input' /></td>
                                        </tr>
                                        <tr>
                                            <td>Tyre Pressure</td>
                                            <td>
                                                <div className='position-relative'>
                                                    <Form.Control type="text" placeholder="30" className='com-input' />
                                                    <p className='cmPrefix'>bar</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className='position-relative'>
                                                    <Form.Control type="text" placeholder="30" className='com-input' />
                                                    <p className='cmPrefix'>bar</p>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </Col>
                        <Col xxl={12} className="d-flex justify-content-between align-items-center flex-wrap gap-2">
                            <ButtonComp text="Back" className="outlineButton" onClick={() => handleToggle(openId - 1)} />
                            <ButtonComp text="Add Specifications" onClick={() => handleToggle(openId + 1)} />
                        </Col>
                    </Row>
                </div>
            </FadeComp>
            <FadeComp id="Fuel" title="Fuel" isOpen={openId === 9} onToggle={() => handleToggle(9)}>
                <div className='mt-4'>
                    <Row className='gy-4'>
                        <Col lg={12}>
                            <div className={`${Styles.SpecificationsComInput}`}>
                                <h5>Transmission Type</h5>
                                <div className='d-flex gap-2 align-items-center flex-wrap'>
                                    {FuelType.map(({ name, value }) => (
                                        <span
                                            key={value}
                                            className={`${selectedOptions.vehicleType === value ? Styles.selected : ""} ${Styles.customCheck}`}
                                            onClick={() => handleOptionChange("vehicleType", value)}
                                        >
                                            {name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className={`${Styles.SpecificationsComInput}`}>
                                <h5>Fuel Quality (Octane Rating)</h5>
                                <Form.Control type="text" placeholder="45" className='com-input' />
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <div className={`${Styles.SpecificationsComInput}`}>
                                <h5>Fuel Tank Material</h5>
                                <div className='d-flex gap-2 align-items-center flex-wrap'>
                                    {FuelTankMaterial.map(({ name, value }) => (
                                        <span
                                            key={value}
                                            className={`${selectedOptions.vehicleType === value ? Styles.selected : ""} ${Styles.customCheck}`}
                                            onClick={() => handleOptionChange("vehicleType", value)}
                                        >
                                            {name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className={`${Styles.SpecificationsComInput}`}>
                                <h5>Fuel Tank 1 Capacity</h5>
                                <div className='position-relative'>
                                    <Form.Control type="text" placeholder="420" className='com-input' />
                                    <p className='cmPrefix'>Litres</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className={`${Styles.SpecificationsComInput}`}>
                                <h5>Fuel Tank 2 Capacity</h5>
                                <div className='position-relative'>
                                    <Form.Control type="text" placeholder="420" className='com-input' />
                                    <p className='cmPrefix'>Litres</p>
                                </div>
                            </div>
                        </Col>
                        <Col xxl={12} className="d-flex justify-content-between align-items-center flex-wrap gap-2">
                            <ButtonComp text="Back" className="outlineButton" onClick={() => handleToggle(openId - 1)} />
                            <ButtonComp text="Add Specifications" onClick={() => handleToggle(openId + 1)} />
                        </Col>
                    </Row>
                </div>
            </FadeComp>
            <FadeComp id="Oil" title="Oil" isOpen={openId === 10} onToggle={() => handleToggle(10)}>
                <div className='mt-4'>
                    <Row className='gy-4'>
                        <Col lg={4} md={6} sm={12}>
                            <div className={`${Styles.SpecificationsComInput}`}>
                                <h5>Fuel Tank 1 Capacity</h5>
                                <div className='position-relative'>
                                    <Form.Control type="text" placeholder="420" className='com-input' />
                                    <p className='cmPrefix'>Litres</p>
                                </div>
                            </div>
                        </Col>
                        <Col xxl={12} className="d-flex justify-content-between align-items-center flex-wrap gap-2">
                            <ButtonComp text="Back" className="outlineButton" onClick={() => handleToggle(openId - 1)} />

                        </Col>
                    </Row>
                </div>
            </FadeComp>
        </div>
    )
}

export default Specifications