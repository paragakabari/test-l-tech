import React from 'react'
import Styles from "./common.module.css"

const CompleteProfileTab = ({ currentTab }: any) => {
    return (
        <div className={Styles.profileStepMain}>
            <div className={`${Styles.profileFirst} ${currentTab === 1 ? Styles.profileActive : ""} d-flex gap-3 align-items-center`}>
                <div className='d-block'>
                    <div className={Styles.profileStep} />
                </div>
                {currentTab === 1 && (
                    <div>
                        <small>Step 1/4</small>
                        <p>Organization Details</p>
                    </div>
                )}
            </div>
            <div className={`${Styles.profileFirst} ${currentTab === 2 ? Styles.profileActive : ""} d-flex gap-3 align-items-center`}>
                <div className='d-block'>
                    <div className={Styles.profileStep} />
                </div>
                {currentTab === 2 && (
                    <div>
                        <small>Step 2/4</small>
                        <p>KYC Document</p>
                    </div>
                )}
            </div>
            <div className={`${Styles.profileFirst} ${currentTab === 3 ? Styles.profileActive : ""} d-flex gap-3 align-items-center`}>
                <div className='d-block'>
                    <div className={Styles.profileStep} />
                </div>
                {currentTab === 3 && (
                    <div>
                        <small>Step 3/4</small>
                        <p>Personal Information</p>
                    </div>
                )}
            </div>
            <div className={`${Styles.profileFirst} ${currentTab === 4 ? Styles.profileActive : ""} d-flex gap-3 align-items-center`}>
                <div className='d-block'>
                    <div className={Styles.profileStep} />
                </div>
                {currentTab === 4 && (
                    <div>
                        <small>Step 4/4</small>
                        <p>Organization Details</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CompleteProfileTab