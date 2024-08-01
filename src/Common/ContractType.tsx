import React from 'react'
import Styles from "./common.module.css"
import { ProgressBar } from 'react-bootstrap'
const ContractType = () => {
    return (
        <div className={Styles.ContractTypeMain}>
            <div className='w-100'>
                <h1>Contract Type</h1>
                <div className={Styles.DropOffMain}>
                    <div className={`${Styles.DropOff} DropOff`}>
                        <p>Single Pickup Single Drop off</p>
                        <ProgressBar now={60} />
                    </div>
                    <div className={`${Styles.DropOff} DropOff`}>
                        <p>Single Pickup Multiple Drop off</p>
                        <ProgressBar now={50} />
                    </div>
                    <div className={`${Styles.DropOff} DropOff`}>
                        <p>Multiple Pickup Single Drop off</p>
                        <ProgressBar now={10} />
                    </div>
                    <div className={`${Styles.DropOff} DropOff`}>
                        <p>Multiple Pickup Multiple Drop off</p>
                        <ProgressBar now={40} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContractType