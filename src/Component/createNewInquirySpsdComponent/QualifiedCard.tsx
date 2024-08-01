import React from 'react';
import Styles from "./createNewInquirySpsdComponent.module.css"
import Image from 'next/image';

const QualifiedCard = ({ profileAvatar, name, companyName, category, orders, image }) => {
    return (
        <div className={Styles.QualifiedCard}>
            <div className='position-relative'>
                <div className={Styles.QualifiedCardProfile}>
                    <Image src={image} alt="" height={100} width={100} />
                </div>
                <span className={Styles.QualifiedCardProfileStatus}></span>
            </div>
            <div className='w-100 position-relative'>
                <i className="bi bi-three-dots"></i>
                <p>{companyName}</p>
                <small>{category}</small>
                <div className='d-flex align-items-center justify-content-between'>
                    <div className='d-flex align-items-center gap-2'>
                        <div className={Styles.QualifiedCardProfileAvatar}>{profileAvatar}</div>
                        <span>{name}</span>
                    </div>
                    <small>{orders} orders</small>
                </div>
            </div>
        </div>
    );
};

export default QualifiedCard;
