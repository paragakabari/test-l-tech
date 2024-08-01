import React from 'react';
import Styles from "./common.module.css";
import { Form } from 'react-bootstrap';

interface DistributionMappingProps {
    areaName: string;
    mappedAreas: number;
    total: number;
    code: string;
    deliveries: number;
    pickups: number;
    color: string;
}

const DistributionMapping: React.FC<DistributionMappingProps> = ({ 
    areaName, 
    mappedAreas, 
    total, 
    code, 
    deliveries, 
    pickups, 
    color 
}) => {
    return (
        <div className={Styles.DistributionMappingMain}>
            <div className="d-flex gap-3 align-items-center">
                <Form.Check type="checkbox" />
                <div className={Styles.flexboxMain}>
                    <div>
                        <p>{areaName}</p>
                        <span>{mappedAreas} Areas mapped</span><br />
                        <span>{total}</span>
                    </div>
                    <div className={Styles.tooltipSection}>
                        <h4>[{code}]</h4>
                        <div style={{ background: color }}></div>
                    </div>
                </div>
            </div>
            <div className={Styles.avgSection}>
                <small>Avg {deliveries} Deliveries</small>
                <span></span>
                <small>Avg {pickups} Pickups</small>
            </div>
        </div>
    );
}

export default DistributionMapping;
