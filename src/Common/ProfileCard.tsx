// components/ProfileCard.tsx

import React from 'react';
import Styles from './common.module.css';
import Image from 'next/image';
import ButtonComp from '@/Component/Button';

interface ProfileCardProps {
    email: string;
    dob: string;
    phone: string;
    department: string;
    designation: string;
    address: string;
    trips: number;
    cities: number;
    shipments: number;
    experience: string;
}
interface ContractCardProps {
    logoSrc: string;
    contractCode: string;
    companyName: string;
    industry: string;
    status: string;
    contactName: string;
    contactInitials: string;
    contactPhone: string;
    address: string;
    additionalPhone: string;
    email: string;
    website: string;
    additionalLocation: string;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
    email,
    dob,
    phone,
    department,
    designation,
    address,
    trips,
    cities,
    shipments,
    experience,
}) => {
    return (
        <div className={Styles.cardProfile}>
            <div className={Styles.profile}>
                <img
                    src="https://plus.unsplash.com/premium_photo-1661637707438-5914a8e1bea2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Profile"
                    className={Styles.avatarProfile}
                />
                <span className={Styles.status}></span>
            </div>
            <div className={Styles.infoProfile}>
                <p><i className={`bi bi-envelope-paper-fill ${Styles.icon}`}></i> {email}</p>
                <div className="d-flex justify-content-between align-items-center">
                    <p><i className={`bi bi-cake2-fill ${Styles.icon}`}></i> {dob}</p>
                    <span className={Styles.age}>43 yrs Old</span>
                </div>
                <p><i className={`bi bi-telephone-fill ${Styles.icon}`}></i> {phone}</p>
            </div>
            <div className={Styles.details}>
                <div>
                    <div className={Styles.label}>Department</div>
                    <div className={Styles.value}>{department}</div>
                </div>
                <div>
                    <div className={Styles.label}>Designation</div>
                    <div className={Styles.value}>{designation}</div>
                </div>
            </div>
            <div className={Styles.address}>
                <i className={`bi bi-geo-alt-fill ${Styles.icon}`}></i> {address}
            </div>
            <div className={Styles.statistics}>
                <div className='text-center'>
                    <div className={Styles.stat}>{trips}</div>
                    <div className={Styles.statLabel}>Trips</div>
                </div>
                <div className='text-center'>
                    <div className={Styles.stat}>{cities}</div>
                    <div className={Styles.statLabel}>Cities</div>
                </div>
                <div className='text-center'>
                    <div className={Styles.stat}>{shipments}</div>
                    <div className={Styles.statLabel}>Shipments</div>
                </div>
                <div className='text-center'>
                    <div className={Styles.stat}>{experience}</div>
                    <div className={Styles.statLabel}>Yrs of Exp.</div>
                </div>
            </div>
        </div>
    );
};
export const ContractsCard: React.FC<ContractCardProps> = ({
    logoSrc,
    contractCode,
    companyName,
    industry,
    status,
    contactName,
    contactInitials,
    contactPhone,
    address,
    additionalPhone,
    email,
    website,
    additionalLocation
}) => {
    return (
        <div className={Styles.contractCard}>
            <div className={Styles.contractHeader}>
                <Image height={50} width={50} src={logoSrc} alt="Company Logo" className={Styles.contractLogo} />
                <div>
                    <p>{contractCode}</p>
                    <h4>{companyName}</h4>
                </div>
            </div>
            <div className={Styles.contractDetails}>
                <p>Industry</p>
                <h3>{industry}</h3>
                <div className={Styles.contractStatus}>{status}</div>
            </div>
            <div className={`${Styles.contractInfo} mt-2 mb-4`}>
                <div className={Styles.contractInfoAvatar}>{contactInitials}</div>
                <div>
                    <strong>{contactName}</strong>
                    <div>{contactPhone}</div>
                </div>
            </div>
            <div className={Styles.IconText}>
                <i className={`bi bi-geo-alt-fill ${Styles.contractIcon}`}></i>
                <span>{address}</span>
            </div>
            <div className="d-flex justify-content-between my-3">
                <ButtonComp text='View Documents' className={`outlineButton ${Styles.contractorOutlineButton}`} />
                <ButtonComp text='Connect' className={`outlineButton ${Styles.contractorOutlineButton}`} />
            </div>
            <div className={Styles.additionalInfo}>
                <div className={Styles.IconText}>
                    <i className={`bi bi-telephone ${Styles.contractIcon}`}></i>
                    <span>{additionalPhone}</span>
                </div>
                <div className={Styles.IconText}>
                    <i className={`bi bi-envelope ${Styles.contractIcon}`}></i>
                    <span>{email}</span>
                </div>
                <div className={Styles.IconText}>
                    <i className={`bi bi-globe ${Styles.contractIcon}`}></i>
                    <span>{website}</span>
                </div>
                <div className={Styles.IconText}>
                    <i className={`bi bi-geo-alt ${Styles.contractIcon}`}></i>
                    <span>{additionalLocation}</span>
                </div>
            </div>
        </div>
    );
};

