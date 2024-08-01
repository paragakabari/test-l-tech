import React from 'react';
import Styles from "./createNewInquirySpsdComponent.module.css";
import { Col, Form, Row } from 'react-bootstrap';
import ButtonComp from '../Button';
import Image from 'next/image';

const services = [
  { name: "Insurance", image: "/Insurance.png" },
  { name: "Live Tracking", image: "/LiveTracking.png" },
  { name: "Packaging", image: "/Packaging.png" },
  { name: "Weight IOT", image: "/WeightIOT.png" },
  { name: "Dashcam", image: "/Dashcam.png" },
  { name: "Certifications", image: "/Certifications.png" },
];

const Service = () => {
  return (
    <div className={`${Styles.tabsMain} d-flex gap-3 mt-4`}>
      <div className='d-block mt-2'>
        <div className={Styles.inquiryCheck}>
          <i className="bi bi-check2"></i>
        </div>
      </div>
      <div className='w-100'>
        <div className={Styles.shipText}>
          <p>Services Needed</p>
          <span>Seamless Shipping Solutions</span>
        </div>
        <Row className='gy-4'>
          <Col md={12}>
            <div className={`${Styles.typeBg} w-100`}>
              <Row className='gy-4'>
                <Col lg={12}>
                  <div className={Styles.servicesTitle}>
                    <p>Services</p>
                    <div className='d-flex align-items-center gap-3'>
                      <p>Want all Services</p>
                      <div className={Styles.serviceCheck}>
                        <i className="bi bi-check2"></i>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={12}>
                  <Row className='gy-4'>
                    {services.map((service, index) => (
                      <Col lg={2} md={3} sm={6} key={index}>
                        <div className={Styles.serviceSelection}>
                          <Image src={service.image} alt='' width={50} height={50} />
                          <span>{service.name}</span>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </Col>
                <Col lg={3} sm={12}>
                  <label className="com-label fw-normal">
                    Value you want to Insure
                  </label>
                  <div className='input-prefix'>
                    <Form.Control type="text" placeholder="1000" className='com-input' />
                    <p>SAR</p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col md={12}>
            <div className='d-flex justify-content-end mt-4'>
              <ButtonComp text='Proceed Next' />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Service;
