import React from 'react';
import styles from './common.module.css';

interface TemplateCardProps {
    subject: string;
    companyName: string;
    experienceYears: number;
    experienceMonths: number;
}

const TemplateCard: React.FC<TemplateCardProps> = ({ subject, companyName, experienceYears, experienceMonths }) => {
    return (
        <div className={styles.TemplateCard}>
            <div className='d-flex justify-content-between gap-2 align-items-center'>
                <div>
                    <h2 className={styles.TemplateCardTitle}>My Template</h2>
                    <h3 className={styles.TemplateCardSubtitle}>Proposal 2</h3>
                </div>
                <div className={styles.TemplateCheckBox}>
                    <i className="bi bi-check2"></i>
                </div>
            </div>
            <div className={styles.TemplateCardContent}>
                <p><strong>Subject:</strong> {subject}</p>
                <p>Dear {companyName},</p>
                <p>
                    I am writing to express my interest in becoming a delivery driver for your consignment services.
                    With a strong commitment to safe and efficient delivery, I am confident in my ability to contribute
                    positively to your team.
                </p>
                <p>Here's a brief overview of my qualifications:</p>
                <ol>
                    <li>
                        <strong>Experience:</strong> I have {experienceYears} years/{experienceMonths} months of experience as a
                        delivery driver, ensuring prompt and secure delivery of packages to ...
                    </li>
                </ol>
            </div>
        </div>
    );
};

export default TemplateCard;
