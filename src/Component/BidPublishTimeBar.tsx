import React from 'react'
import Styles from "./CommonTable.module.css";
import Image from 'next/image';

const bidData = [
    {
        status: 'INQ Sent',
        date: '12-03-2023 12:00:00',
        type: 'Road Transport',
        amount: '57893',
        currency: 'SAR',
        icon: '/contract.png',
        showBubble: false
    },
    {
        status: 'Quotation Received',
        date: '14-03-2023',
        type: 'Road Transport',
        amount: '57893',
        currency: 'SAR',
        icon: '/contract.png',
        showBubble: false
    },
    {
        status: 'Quotation Received',
        date: '14-03-2023',
        type: '',
        amount: '',
        currency: '',
        icon: '/bubble-chat.png',
        bubbleIcon: '/bubble-chat.png',
        showBubble: true
    },
    {
        status: 'Quotation Received',
        date: '14-03-2023',
        type: 'Road Transport',
        amount: '57893',
        currency: 'SAR',
        icon: '/contract.png',
        bubbleIcon: '/bubble-chat.png',
        showBubble: true
    }
];

const BidPublishTimeBar = () => {
    return (
        <div className={Styles.BidPublishTimeBarMain}>
            {bidData.map((bid, index) => (
                <div key={index} className={Styles.BidPublishTimeBar}>
                    <div className='d-block'>
                        <div className={Styles.BidPublishTimeBarDot}></div>
                    </div>
                    <div className={`${Styles.BidPublishTimeBarDetails} ${bid.showBubble ? 'd-flex justify-content-between gap-2 flex-wrap align-items-center' : ''}`}>
                        <div>
                            <p className='fw-bold'>{bid.status}</p>
                            <small>{bid.date}</small>
                        </div>
                        {bid.showBubble && (
                            <Image height={27} width={27} alt='' src={bid.bubbleIcon} />
                        )}
                        {bid.type && (
                            <div className={Styles.RoadTransport}>
                                <div className='d-flex gap-2 align-items-center'>
                                    <Image height={20} width={20} src={bid.icon} alt='' className={Styles.RoadTransportImg} />
                                    <span>{bid.type}</span>
                                </div>
                                <div>
                                    <p>{bid.amount}</p>
                                    <span>{bid.currency}</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BidPublishTimeBar;
