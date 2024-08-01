import React from 'react';
import { Col } from 'react-bootstrap';
import Styles from "./hubTabs.module.css";

const HubTab = ({ selectedTab }) => (
    <Col lg={2} md={3}>
        <div className='d-flex flex-column gap-3'>
            <div className={`${Styles.newTab} ${selectedTab.includes(1) ? Styles.newTabActive : ""}`}>
                <p>Unit Type & Country Definition</p>
            </div>
            <div className={`${Styles.newTab} ${selectedTab.includes(2) ? Styles.newTabActive : ""}`}>
                <p>Detailed Information & Assignments</p>
            </div>
            <div className={`${Styles.newTab} ${selectedTab.includes(3) ? Styles.newTabActive : ""}`}>
                <p>Map Distribution Center</p>
            </div>
        </div>
    </Col>
);

export default HubTab;
