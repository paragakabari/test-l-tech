import React from 'react'
import Styles from "../contract.module.css"
import { Form } from 'react-bootstrap'
import ButtonComp from '@/Component/Button'

const AdditionalServices = ({ handleSaveAndExit }) => {
    return (
        <div className={Styles.formContainer}>
            <h1>Additional Services</h1>
            <div className={Styles.checkTabMAin}>
                <Form.Check
                    type="checkbox"
                    label="Insurance"
                />
                <Form.Check
                    type="checkbox"
                    label="Live Tracking"
                />
                <Form.Check
                    type="checkbox"
                    label="Packing"
                />
                <Form.Check
                    type="checkbox"
                    label="White IOT"
                />
                <Form.Check
                    type="checkbox"
                    label="Dashcam"
                />
            </div>
            <div className="d-flex justify-content-end mt-3">
                <ButtonComp
                    text="Add Services"
                    className="px-5"
                    onClick={handleSaveAndExit}
                />
            </div>
        </div>
    )
}

export default AdditionalServices