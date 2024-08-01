import React from 'react';
import styles from './CommonTable.module.css';

const TimelineResponsive = ({ events }: any) => {
    return (
        <div className={`${styles.timeline} ${styles.timeResponsive}`}>
            {events.map((event, index) => (
                <div className={styles.event} key={index}>
                    <div className={styles.content}>
                        <div className='d-block'>
                            <div className={`${styles.icon} d-flex justify-content-center align-items-center`} style={{ background: event.statusColor, height: "30px", width: '30px', borderRadius: '100px', fontSize: '16px', color: '#fff' }}>
                                <div dangerouslySetInnerHTML={{ __html: event.icon }} />
                            </div>
                        </div>
                        <div className='d-flex justify-content-between align-items-center w-100'>
                            <div>
                                <div className={`${styles.timeTitle} d-flex gap-2 align-items-center`}>
                                    <div className={styles.status}>{event.status}</div>
                                    <div className={styles.time}>{event.time}</div>
                                </div>
                                <div className={styles.description}>{event.description}</div>
                                <div className={styles.details}>{event.details}</div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TimelineResponsive;
