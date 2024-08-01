import React from 'react';
import Image from 'next/image';
import Styles from './common.module.css';
import ButtonComp from '@/Component/Button';

export interface InquiriesReceivedCardProps {
    inquiryId: string;
    date: string;
    time: string;
    location1: string;
    location2: string;
    weight: string;
    dimensions: string;
    quantity: string;
    imageUrl: string;
    blueButton?: string;
    cardType?: string;
    onViewDetails?: () => void;
    onSendProposal?: () => void;
}

const cardTypeStyles = {
    '': "#136bb1",
    'TOTAL': "#136bb1",
    'SUBMITTED': "#3DBF88",
    'PENDING': "#FFB74B",
    'REQUESTED': "#4586EE"
};

export const InquiriesReceivedCard = ({
    inquiryId,
    date,
    time,
    location1,
    location2,
    weight,
    dimensions,
    quantity,
    imageUrl,
    onViewDetails,
    onSendProposal,
    blueButton,
    cardType = ""
}: InquiriesReceivedCardProps) => {

    const renderButtons = () => {
        switch (cardType) {
            case 'TOTAL':
            case '':
                return (
                    <>
                        <ButtonComp text='View Details' className={`${Styles.blueOutlineButton} outlineButton`} onClick={onViewDetails} />
                        <ButtonComp text='Send Proposal' onClick={onSendProposal} className={blueButton} />
                    </>
                );
            case 'SUBMITTED':
            case 'REQUESTED':
                return (
                    <ButtonComp text='View Details' className={`${Styles.blueOutlineButton} outlineButton w-100`} onClick={onViewDetails} />
                );
            case 'PENDING':
            default:
                return null;
        }
    };

    return (
        <div className={Styles.InquiriesReceivedCard}>
            <div className={Styles.InquiriesReceivedCardBefore} style={{ background: cardTypeStyles[cardType] }}></div>

            <div className='d-flex justify-content-between align-items-center'>
                <div>
                    <h3>{inquiryId}</h3>
                    <small>{`${date} | ${time}`}</small>
                </div>
                <i className="bi bi-three-dots-vertical"></i>
            </div>

            <div className='d-flex justify-content-between mt-3'>
                <div className={Styles.InquiriesReceivedCardLocation}>
                    <div className="d-flex align-items-center gap-3">
                        <i className="bi bi-geo-alt-fill" style={{ color: "#136BB1" }}></i>
                        <p className="m-0 p-0">{location1}</p>
                    </div>
                    <span></span>
                    <div className="d-flex align-items-center gap-3">
                        <i className="bi bi-geo-alt-fill" style={{ color: "rgb(255, 106, 87)" }}></i>
                        <p className="m-0 p-0">{location2}</p>
                    </div>
                </div>
                <div className={Styles.InquiriesReceivedCardImage}>
                    <Image height={30} width={30} src={imageUrl} alt='' />
                </div>
            </div>

            <div className={Styles.InquiriesReceivedCardFooter}>
                <div className='text-center'>
                    <h2>{weight}</h2>
                    <small>Weight</small>
                </div>
                <span></span>
                <div className='text-center'>
                    <h2>{dimensions}</h2>
                    <small>Dimensions</small>
                </div>
                <span></span>
                <div className='text-center'>
                    <h2>{quantity}</h2>
                    <small>Qty</small>
                </div>
            </div>

            <div className={Styles.InquiriesReceivedCardButton}>
                {renderButtons()}
            </div>
        </div>
    );
};
