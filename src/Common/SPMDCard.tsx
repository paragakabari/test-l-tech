import React from 'react'
import Styles from "./common.module.css"
import ButtonComp from '@/Component/Button'

const SPMDCard = () => {
    return (
        <div className={Styles.spmdCardMain}>
            <div className='position-relative'>
                <ButtonComp text='SPMD' className='position-absolute' />
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463877.31242950493!2d46.49288193599672!3d24.725455372447055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2sin!4v1721040277847!5m2!1sen!2sin" width="100%" height="292" style={{ border: 0, borderRadius: '20px' }} ></iframe>
            </div>
            <div className={Styles.spmdCardText}>
                <div className={Styles.spmdCardTextBox}>
                    <span></span>
                    <p>Riyadh</p>
                </div>
                <div className={Styles.spmdCardTextBox}>
                    <span></span>
                    <p>Hail</p>
                </div>
                <div className={Styles.spmdCardTextBox}>
                    <span></span>
                    <p>Yanbu</p>
                </div>
            </div>
        </div>
    )
}

export default SPMDCard