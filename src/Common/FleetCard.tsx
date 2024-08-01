"usw client"
import React from 'react'
import Styles from "./common.module.css"
import Image from 'next/image'
const FleetCard = () => {
    return (
        <div className={`${Styles.whiteBgSide}  w-100`}>
            <h1>Add Your Fleet</h1>
            <div className={Styles.whiteBgSideContent}>
                <div className="d-flex gap-4 align-items-center">
                    <div className={Styles.truckImg}>
                        <Image src="https://i.pinimg.com/736x/5f/fa/7a/5ffa7a4019d88dd0b8288de8413bf072.jpg" alt="" height={90} width={90} style={{ borderRadius: '20px' }} />
                        <div className={Styles.Brand}>
                            <Image src="https://i.pinimg.com/236x/69/d8/2e/69d82ee77bd68993db195bfb996f06c9.jpg" alt="" height={32} width={32} />
                        </div>
                    </div>
                    <div className={Styles.truckDetails}>
                        <p>Volvo FM - 1998</p>
                        <small>FM10 6x4 1998–2003</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FleetCard