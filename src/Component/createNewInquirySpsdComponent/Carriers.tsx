import React from 'react';
import Styles from "./createNewInquirySpsdComponent.module.css";
import { Col, Row } from 'react-bootstrap';
import ButtonComp from '../Button';
import QualifiedCard from './QualifiedCard';

const Carriers = ({ privateInquiryOnClick, publicInquiryOnClick }) => {
  const qualifiedSuppliers = [
    {
      profileAvatar: 'SH',
      name: 'Samera Hamed',
      companyName: 'SIM Construction Systems',
      category: 'Building and Construction Machinery and Accessories',
      orders: 4,
      image: "https://images.unsplash.com/photo-1473445730015-841f29a9490b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      profileAvatar: 'SH',
      name: 'Samera Hamed',
      companyName: 'SIM Construction Systems',
      category: 'Building and Construction Machinery and Accessories',
      orders: 4,
      image: "https://images.unsplash.com/photo-1473445730015-841f29a9490b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      profileAvatar: 'SH',
      name: 'Samera Hamed',
      companyName: 'SIM Construction Systems',
      category: 'Building and Construction Machinery and Accessories',
      orders: 4,
      image: "https://images.unsplash.com/photo-1473445730015-841f29a9490b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      profileAvatar: 'SH',
      name: 'Samera Hamed',
      companyName: 'SIM Construction Systems',
      category: 'Building and Construction Machinery and Accessories',
      orders: 4,
      image: "https://images.unsplash.com/photo-1473445730015-841f29a9490b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      profileAvatar: 'SH',
      name: 'Samera Hamed',
      companyName: 'SIM Construction Systems',
      category: 'Building and Construction Machinery and Accessories',
      orders: 4,
      image: "https://images.unsplash.com/photo-1473445730015-841f29a9490b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
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
          <p>Choose Carrier Companies</p>
          <span>Seamless Shipping Solutions</span>
        </div>
        <Row className='gy-4'>
          <Col md={12}>
            <div className={`${Styles.typeBg} w-100`}>
              <Row className='gy-4'>
                <Col md={12}>
                  <div className='d-flex align-items-center'>
                    <div className={`${Styles.CarrierTab} ${Styles.CarrierTabActive}`}>Your Qualified Carriers</div>
                    <div className={Styles.CarrierTab}>eProcure Carrier Network</div>
                    <div className={Styles.CarrierTab}>eProcure Carrier Network</div>
                  </div>
                  <div className={`d-flex w-100 justify-content-between align-items-center mb-4 ${Styles.tblHeader} ${Styles.CarrierTblHeader}`}>
                    <div className={`d-flex gap-2 ${Styles.SearchInputMain}`}>
                      <input className={Styles.SearchInput} placeholder="Search product by name, id, category" />
                      <div className={Styles.filterButton}>
                        <p>Filter</p>
                        <i className="bi bi-filter"></i>
                      </div>
                    </div>
                    <div className='d-flex gap-2'>
                      <ButtonComp text='List View' className="outlineButton" />
                      <ButtonComp text='Card view' className='darkButton' />
                    </div>
                  </div>
                </Col>
                <Col lg={5} md={6} sm={12} className={Styles.QualifiedCardMain}>
                  <div className={Styles.servicesTitle}>
                    <p>8 Qualified Suppliers</p>
                    <div className='d-flex align-items-center gap-3'>
                      <p>Select All</p>
                      <div className={Styles.serviceCheck}>
                        <i className="bi bi-check2"></i>
                      </div>
                    </div>
                  </div>
                  <div className={Styles.QualifiedCards}>
                    {qualifiedSuppliers.map((supplier, index) => (
                      <QualifiedCard
                        key={index}
                        profileAvatar={supplier.profileAvatar}
                        name={supplier.name}
                        companyName={supplier.companyName}
                        category={supplier.category}
                        orders={supplier.orders}
                        image={supplier.image}
                      />
                    ))}
                  </div>
                </Col>
                <Col lg={7} md={6} sm={12}>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463877.31242950493!2d46.49288193599672!3d24.725455372447055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2sin!4v1720444962315!5m2!1sen!2sin" width="100%" height="430" style={{ border: 0, borderRadius: "10px" }} loading="lazy"></iframe>
                </Col>
              </Row>
            </div>
          </Col>
          <Col lg={12}>
            <div className='d-flex justify-content-between gap-3 flex-wrap'>
              <ButtonComp text="Save" className='whiteButton' />
              <div className='d-flex gap-3'>
                <ButtonComp text='Private Inquiry' className='darkButton' onClick={privateInquiryOnClick} />
                <ButtonComp text='Public Inquiry' onClick={publicInquiryOnClick} />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Carriers;
