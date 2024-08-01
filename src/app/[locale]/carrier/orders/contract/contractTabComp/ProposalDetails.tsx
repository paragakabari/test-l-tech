import React from 'react'
import Styles from "../contract.module.css"
import { Col, Form, Row } from 'react-bootstrap'
import ButtonComp from '@/Component/Button'
const ProposalDetails = ({ handleSaveAndExit }) => {
    return (
        <div className={Styles.formContainer}>
            <Row className="gy-4">
                <Col lg={12} className="mb-3">
                    <h1>Record Proposal</h1>
                </Col>

                <Col lg={12}>
                    <div className="com-label-second">Suggested Vehicles</div>
                    <select className="form-control selectBox com-input-second">
                        <option value="">Trailer Volvo FH 16, 2021</option>
                        <option value="">Option 1</option>
                        <option value="">Option 2</option>
                        <option value="">Option 3</option>
                    </select>
                </Col>
                <Col lg={6} md={12} >
                    <div className="com-label-second">Earliest Pickup</div>
                    <Form.Control type="date" className='com-input-second' />
                </Col>
                <Col lg={6} md={12}>
                    <div className="com-label-second">Expected Delivery Time</div>
                    <Form.Control type="text" placeholder="No. of day for delivery" className='com-input-second' />
                </Col>
                <Col lg={12}>
                    <div className="com-label-second">Comments</div>
                    <Form.Control as="textarea" placeholder="Write any comments and suggestions for this consignment" rows={3} className='com-textarea' />
                </Col>
                <Col lg={12}>
                    <div className="d-flex justify-content-end">
                        <ButtonComp
                            text="Submit Details"
                            className="px-5"
                            onClick={handleSaveAndExit}
                        />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default ProposalDetails