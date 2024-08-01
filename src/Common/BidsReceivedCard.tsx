import React from 'react'
import Styles from "./common.module.css"
import Image from 'next/image'
const BidsReceivedCard = () => {
    return (
        <div className={Styles.BidsReceivedCard}>
            <div className='d-flex align-items-center gap-2 justify-content-between px-2'>
                <h1>Bids Received</h1>
                <p>View All</p>
            </div>
            <div className={Styles.bidRecCardMain}>
                <div className={Styles.bidRecCard}>
                    <div className={Styles.bidRecCardHeader}>
                        <div>
                            <p>EPF_23_RFQ0001</p>
                            <p className='mt-1'><small>Posted on </small>15 May 2023</p>
                        </div>
                        <span>Pending</span>
                    </div>
                    <div className={Styles.bidRecCardBody}>
                        <div className={Styles.bidRecCardLocation}>
                            <div className='d-flex gap-2 align-items-center'>
                                <i className="bi bi-geo-alt-fill"></i>
                                <p>Riyad</p>
                            </div>
                            <span></span>
                            <div className='d-flex gap-2 align-items-center'>
                                <i className="bi bi-geo-alt-fill"></i>
                                <p>Jeddah</p>
                            </div>
                        </div>
                        <div className={Styles.bidRecCardAvatar}>
                            <p>09 BIDS</p>
                            <div className={`${Styles.userIcon} ${Styles.bidRecCardAvatarIcon}`}>
                                <Image
                                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    height={40}
                                    width={40}
                                    alt=""
                                />
                                <Image
                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    height={40}
                                    width={40}
                                    alt=""
                                    style={{ marginLeft: "-10px" }}
                                />
                                <Image
                                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    height={40}
                                    width={40}
                                    alt=""
                                    style={{ marginLeft: "-10px" }}
                                />
                                <div>5+</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BidsReceivedCard