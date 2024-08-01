import React from 'react'
import Styles from "./hubTabs.module.css"
const HubSide = ({ isHub }) => {
    return (
        <div className={Styles.HubSideMain}>
            <h1>Get started <br /> <small>CREATE YOUR HUB</small></h1>
            <div className={Styles.hubCountry}>
                <span>State Hub</span>
                <h6>Saudi Arabia</h6>
            </div>
            <div className={Styles.hubCity}>
                <div className=' d-flex justify-content-between align-items-center'>
                    <div className={`${Styles.hubCityDesc}`}>
                        <h2>Riyadh <span>[RI]</span></h2>
                        <small>30 Areas mapped</small><br />
                        <small>15,234</small>
                    </div>
                    <div className={Styles.avgSection}>
                        <small>Avg 12 Deliveries</small>
                        <span></span>
                        <small>Avg 70 Pickups</small>
                    </div>
                </div>
                <p className='fs-6 mt-2'><strong>City -</strong> Name</p>
            </div>
            <div className={Styles.sideDetails}>
                <h3>Detailed Info</h3>
                <h4 className='mt-2'>Mumbai Location HUB</h4>
                <p className='mt-2'>4161, Mansuriyah, 8053, Saudi Arabia, Riyadh 14531, Saudi Arabia</p>
                <div className='d-flex align-items-center gap-3 mt-3'>
                    <div>
                        <p><strong>Lat</strong></p>
                        <p>24.549130</p>
                    </div>
                    <div>
                        <p><strong>Lon</strong></p>
                        <p>46.784850</p>
                    </div>
                </div>
                <div className='d-flex align-items-center gap-2 mt-3'>
                    <span>FL</span>
                    <div className=''>
                        <h4>Fristname Lastname</h4>
                        {isHub ? (
                            <small>Capacity - 1000 kg ton</small>
                        ) : (
                            <></>
                        )}
                    </div>
                </div>
            </div>
            {isHub ? (
                <div className={Styles.descCenter}>
                    <h4 >25 Distribution Centre</h4>
                    <div className={Styles.flexContent}>
                        <p>Ad-Dawādmī</p><p>|</p>
                        <p>Al-Majma’ah</p><p>|</p>
                        <p>Al-Ḥarīq</p><p>|</p>
                        <p>Riyadh</p><p>|</p>
                        <p>Al-Muzāḥimiyah</p><p>|</p>
                        <p>Al-Ghāṭ</p><p>|</p>
                        <p>‘Afïf</p>
                    </div>
                </div>
            ) : (
                <></>
            )}

        </div>
    )
}

export default HubSide