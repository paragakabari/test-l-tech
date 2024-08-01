import React, { ReactNode } from 'react';
import styles from './common.module.css';

interface TemplateCardLayoutProps {
    title: string;
    description: string;
    children: ReactNode;
}

const TemplateCardLayout: React.FC<TemplateCardLayoutProps> = ({ description, title, children }) => {
    return (
        <div className={styles.TemplateCard}>
            <div className='d-flex justify-content-between gap-2 align-items-center'>
                <div>
                    <h2 className={styles.TemplateCardTitle}>{title}</h2>
                    <h3 className={styles.TemplateCardSubtitle}>{description}</h3>
                </div>
                <div className={styles.TemplateCheckBox}>
                    <i className="bi bi-check2"></i>
                </div>
            </div>
            <div className={styles.TemplateCardContent}>
                {children}
            </div>
        </div>
    );
};

export default TemplateCardLayout;
