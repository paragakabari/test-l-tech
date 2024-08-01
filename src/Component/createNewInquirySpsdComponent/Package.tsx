import React from 'react';
import Styles from "./createNewInquirySpsdComponent.module.css";
import { Col, Row } from 'react-bootstrap';
import ButtonComp from '../Button';

export const PackageTblCustom = ({ data, className }: any) => (
  <>
    {data.map((item, index) => (
      <Col md={12} key={index}>
        <div className={`${Styles.PackageTblCustom} ${className}`} >
          <div>
            <p>{item.itemName}</p>
            <span>{item.itemType}</span>
          </div>
          <div className='d-flex gap-4 align-items-center'>
            <p>{item.qty} Qty</p>
            <div className={Styles.statusDot}></div>
            <p>{item.dimensions}</p>
          </div>
        </div>
      </Col>
    ))}
  </>
);

const Package = () => {
  const packageData = [
    {
      itemName: "Amazon Electronics Goods",
      itemType: "Item Type",
      qty: "4500",
      dimensions: "45 * 345 * 65"
    },
    {
      itemName: "Clothing Materials and Fabric",
      itemType: "Item Type",
      qty: "4500",
      dimensions: "45 * 345 * 65"
    },
    {
      itemName: "Cycling Accessories",
      itemType: "Item Type",
      qty: "4500",
      dimensions: "45 * 345 * 65"
    }
  ];

  return (
    <div className={`${Styles.tabsMain} d-flex gap-3 mt-4`}>
      <div className='d-block mt-2'>
        <div className={Styles.inquiryCheck}>
          <i className="bi bi-check2"></i>
        </div>
      </div>
      <div className='w-100'>
        <div className={Styles.shipText}>
          <p>Package Details</p>
          <span>Seamless Shipping Solutions</span>
        </div>
        <Row className='gy-2' style={{ marginTop: '20px' }}>
          <PackageTblCustom data={packageData} />
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

export default Package;
