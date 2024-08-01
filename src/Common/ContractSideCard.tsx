import React from 'react';
import Styles from "./common.module.css"
import Image from 'next/image';

const ContractSideCard = ({
    avatar,
    name,
    rfqNumber,
    startDate,
    duration,
    endDate,
    contactName,
    contactTitle,
    email,
    phone,
    terms,
    onChatClick,
    onDocumentsClick,
    viewAllDocs
}) => {
    return (
        <div className={Styles.sideBarContracts}>
            <div className={Styles.sideBarContractsHeader}>
                <div className={Styles.sideBarContractsAvatar}>
                    <Image src={avatar} alt="" height={60} width={60} />
                </div>
                <div>
                    <h1>{name}</h1>
                    <p>{rfqNumber}</p>
                </div>
            </div>
            <div className={Styles.sideBarContractsDate}>
                <p>{startDate}</p>
                <span>{duration}</span>
                <p>{endDate}</p>
            </div>
            <div className={Styles.sideBarContractsIntroMain}>
                <div className={Styles.sideBarContractsIntro}>
                    <div className={Styles.sideBarContractsName}>MP</div>
                    <div>
                        <h2>{contactName}</h2>
                        <p>{contactTitle}</p>
                    </div>
                </div>
                <div className={Styles.sideBarContractsContact}>
                    <div className='d-flex gap-2 align-items-center'>
                        <i className="bi bi-envelope"></i>
                        <p>{email}</p>
                    </div>
                    <div className='d-flex gap-2 align-items-center'>
                        <i className="bi bi-telephone"></i>
                        <p>{phone}</p>
                    </div>
                </div>
            </div>
            <div className={Styles.sideBarContractsChat}>
                <div className='text-center' onClick={onChatClick}>
                    <div className={Styles.sideBarContractsChatIconBg}>
                        <i className="bi bi-chat-left-dots-fill"></i>
                    </div>
                    <p>Chat</p>
                </div>
                <div className='text-center' onClick={onDocumentsClick}>
                    <div className={Styles.sideBarContractsChatIconBg}>
                        <i className="bi bi-file-earmark-fill"></i>
                    </div>
                    <p>Documents</p>
                </div>
            </div>
            <div className={Styles.termsBoxMain}>
                {terms.map((term, index) => (
                    <div className={`${Styles.termsBox} ${index > 0 ? 'mt-2' : ''}`} key={index}>
                        <div className={Styles.termsBoxTag}>PDF</div>
                        <div>
                            <p>{term.title}</p>
                            <small>{term.size}</small>
                        </div>
                    </div>
                ))}
            </div>
            <div className={Styles.viewAllLinkMain} onClick={viewAllDocs}>
                <p>VIEW ALL DOCS</p>
            </div>
        </div>
    );
};

export default ContractSideCard;
