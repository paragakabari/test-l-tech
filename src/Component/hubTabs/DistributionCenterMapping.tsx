import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ButtonComp from '@/Component/Button';
import DistributionMapping from '@/Common/DistributionMapping';
import Styles from "./hubTabs.module.css";

const DistributionCenterMapping = ({ handleSaveAndExit, mappingTitle, distributionData }) => (
    <div className={Styles.whiteBg}>
        <Row className="gy-4">
            <Col lg={12}>
                <p className='fs-5'>{mappingTitle}</p>
            </Col>
            <Col lg={12}>
                {distributionData.map((data, index) => (
                    <DistributionMapping key={index} {...data} />
                ))}
            </Col>
            <Col sm={12}>
                <ButtonComp text='Proceed Next' className='d-flex ms-auto' onClick={handleSaveAndExit} />
            </Col>
        </Row>
    </div>
);

export default DistributionCenterMapping;
