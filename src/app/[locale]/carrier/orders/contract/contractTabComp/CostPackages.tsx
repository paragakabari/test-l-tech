import React, { useState } from 'react'
import Styles from "../contract.module.css"
import { Col, Form, Row } from 'react-bootstrap'
import SliderComp from '@/Component/Slider'
import ButtonComp from '@/Component/Button'
const CostPackages = ({ handleSaveAndExit }) => {
    const [selectButton, setSelectButton] = useState(1);
    const [distance, setDistance] = useState({
        perTrip: 800,
        everyAdd: 200,
    })
    const marks = {
        0: "0",
        100: "100 SAR",
        200: "200 SAR",
        400: "400 SAR",
        800: "800 SAR",
        1000: "1000 SAR",
    };
    const onSliderChange = (e, name) => {
        setDistance({
            ...distance,
            [name]: e
        })
    }
    return (
        <div className={Styles.formContainer}>

            <Row className="gy-4">
                <Col lg={12} className="mb-3">
                    <h1>Cost Preference</h1>
                </Col>
                <Col lg={12}>
                    <div className="d-flex gap-3 align-items-center flex-wrap">
                        <div className="d-flex gap-2 cursor-pointer">
                            <div className={`${Styles.selectButton} ${selectButton === 1 ? "selectedButton" : ""}`} onClick={() => setSelectButton(1)}>
                                <div className={Styles.selectButtonCheckIcon}>
                                    <i className="bi bi-check2"></i>
                                </div>
                                <p>Based on Distance</p>
                            </div>
                        </div>
                        <div className="d-flex gap-2 cursor-pointer">
                            <div className={`${Styles.selectButton} ${selectButton === 2 ? "selectedButton" : ""}`} onClick={() => setSelectButton(2)}>
                                <div className={Styles.selectButtonCheckIcon}>
                                    <i className="bi bi-check2"></i>
                                </div>
                                <p>Based on Package Weight</p>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={12}>
                    <div className={Styles.distAmt}>

                        <SliderComp
                            label="Distance Amount"
                            subLabel="Per Trip / 800 km"
                            subLabelValue={`${distance.perTrip} SAR`}
                            marks={marks}
                            step={null}
                            defaultValue={800}
                            max={1000}
                            dotStyle={{ display: 'none' }}
                            onChange={(e) => onSliderChange(e, "perTrip")}
                        />
                        <SliderComp
                            label="Distance Amount"
                            subLabel="Every Additional 50 km"
                            subLabelValue={`${distance.everyAdd} SAR`}
                            marks={marks}
                            step={null}
                            defaultValue={200}
                            max={1000}
                            dotStyle={{ display: 'none' }}
                            onChange={(e) => onSliderChange(e, "everyAdd")}
                        />

                    </div>
                </Col>
                <Col lg={12}>
                    <h1>Service Cost</h1>
                </Col>
                <Col lg={6} md={6} sm={12}>
                    <Form.Check type="checkbox" label="Cost for Insurance (in SAR)" />
                    <Form.Control type="text" placeholder="Amount" value="200 SAR" className='com-input mt-4' />
                </Col>
                <Col lg={6} md={6} sm={12}>
                    <Form.Check type="checkbox" label="Cost for Dashcam (in SAR)" />
                    <Form.Control type="text" placeholder="Amount" value="200 SAR" className='com-input mt-4' />
                </Col>
                <Col lg={6} md={6} sm={12}>
                    <Form.Check type="checkbox" label="Cost for Live Tracking (in SAR)" />
                    <Form.Control type="text" placeholder="Amount" value="200 SAR" className='com-input mt-4' />
                </Col>
                <Col lg={6} md={6} sm={12}>
                    <Form.Check type="checkbox" label="Cost for Weight IOT (in SAR)" />
                    <Form.Control type="text" placeholder="Add Cost of Weight" className='com-input mt-4' />
                </Col>
                <Col lg={6} md={6} sm={12}>
                    <Form.Check type="checkbox" label="Cost for Packaging (in SAR)" />
                    <Form.Control type="text" placeholder="Add Cost for Packaging" className='com-input mt-4' />
                </Col>
                <Col lg={6} md={6} sm={12} className="d-flex align-items-end">
                    <div className={Styles.addAdditional}>
                        <i className="bi bi-plus-circle"></i>
                        <span>Add Additional Cost Items</span>
                    </div>
                </Col>
                <div className="d-flex justify-content-end mt-4">
                    <ButtonComp
                        text="Add Cost Preference"
                        className="px-5"
                        onClick={handleSaveAndExit}
                    />
                </div>
            </Row>

        </div>
    )
}

export default CostPackages