import React, { useState } from 'react'
import Styles from "../contractTab.module.css"
import { Col, Row } from 'react-bootstrap'
import { PackageTblCustom } from '@/Component/createNewInquirySpsdComponent/Package'
import ButtonComp from '@/Component/Button'
import Image from 'next/image'
const ContractDetails = () => {
    const [option, setOption] = useState(false);
    const [details, setDetails] = useState(false);
    const [showPackage, setShowPackage] = useState(false);
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
        <div>
            {details ?
                <>
                    <div className={Styles.createNewPODetailsWhiteBg}>
                        <Row className="gy-4">
                            <Col sm={12}>
                                <p className='cursor-pointer' onClick={() => setDetails(false)}>BACK</p>
                            </Col>
                            <Col lg={8} md={6} sm={12}>
                                <div className={`${Styles.custSelectText} d-flex gap-3 align-items-center`}>
                                    <div className={Styles.custSelectAvatar}>
                                        <Image src="https://i.pinimg.com/736x/5f/f0/86/5ff0863ee36927c504e2e8a46657763e.jpg"  alt="" height={60} width={60} />
                                    </div>
                                    <div>
                                        <small>CN_786-01</small>
                                        <p>DHL</p>
                                        <span>RFQ_23_RFQ0001</span>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={2} md={3} sm={3}>
                                <div className={Styles.detailsTxt}>
                                    <p className='fw-light'>Estimated weight delivery range:</p>
                                    <h6>500-600 kg</h6>
                                </div>
                            </Col>
                            <Col lg={2} md={3} sm={3}>
                                <div className={Styles.detailsTxt}>
                                    <p>Start Date : <span className='fw-bold fs-6'>17/06/2023</span></p>
                                    <p>RFQ Duration : <span className='fw-bold'>90 (in days)</span></p>
                                    <p>Item Unit type : <span className='fw-bold'>Kilo Gram</span></p>
                                </div>
                            </Col>
                            <Col sm={12}>
                                <hr />
                            </Col>
                            <Col sm={12}>
                                <p style={{ fontSize: "18px" }}>Services & licensing Details</p>
                            </Col>
                            <Col lg={8} md={8}>
                                <div className={`${Styles.ContractOverviewDetails} d-flex gap-5 row-gap-2 flex-wrap p-0`}>
                                    <div>
                                        <p className='fs-6 fw-bold mb-2'>Additional Services</p>
                                        <p>- Loading </p>
                                        <p>- Packaging </p>
                                        <p>- Forklifting </p>
                                    </div>
                                    <div>
                                        <p className='fs-6 fw-bold mb-2'>Additional Licensing Requirement</p>
                                        <p>- A commercial invoice </p>
                                        <p>- A bill of lading </p>
                                        <p>- A certificate of origin </p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={4}>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className='text-center'>
                                        <p className='fs-6 fw-bold mb-2'>Riyadh</p>
                                        <i className="bi bi-geo-alt-fill"></i>
                                        <p className='fw-light'>15-10-2023</p>
                                    </div>
                                    <span className={Styles.sideBarContractsDateSpan}>30 DAYS</span>
                                    <div className='text-center'>
                                        <p className='fs-6 fw-bold mb-2'>Jeddah</p>
                                        <i className="bi bi-geo-alt-fill"></i>
                                        <p className='fw-light'>15-11-2023</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    {showPackage &&
                        <div className={`${Styles.createNewPODetailsWhiteBg} mt-3`}>
                            <h1>Package Details</h1>
                            <PackageTblCustom data={packageData} className={Styles.pDDetails} />
                        </div>
                    }

                    <div className='w-100 mt-4'>
                        <ButtonComp text='Proceed Next' className='ms-auto d-block ' onClick={() => setShowPackage(true)} />
                    </div>

                </>
                : (
                    <div className={Styles.createNewPODetailsWhiteBg}>
                        <Row className="gap-4">
                            <Col lg={8}>
                                <label className='mb-2 fw-medium'>Choose the Contract/INQ Number:</label>
                                <div className={Styles.custSelect}>
                                    <div className='d-flex justify-content-between align-items-center cursor-pointer' onClick={() => setOption(!option)}>
                                        <p>Suggested contract based on pick, drop and item type</p>
                                        <i className="bi bi-chevron-down"></i>
                                    </div>
                                    {option &&
                                        <div>
                                            <hr className='opacity-5' />
                                            <div className='d-flex justify-content-between gap-2 cursor-pointer' onClick={() => setDetails(true)}>
                                                <div className={`${Styles.custSelectText} d-flex gap-3 align-items-center`}>
                                                    <div className={Styles.custSelectAvatar}>
                                                        <Image src="https://i.pinimg.com/736x/5f/f0/86/5ff0863ee36927c504e2e8a46657763e.jpg" alt="" height={60} width={60} />
                                                    </div>
                                                    <div>
                                                        <small>CN_786-01</small>
                                                        <p>DHL</p>
                                                        <span>RFQ_23_RFQ0001</span>
                                                    </div>
                                                </div>
                                                <input type="checkbox" />
                                            </div>
                                            <hr className='opacity-5' />
                                            <div className='d-flex justify-content-between gap-2 cursor-pointer' onClick={() => setDetails(true)}>
                                                <div className={`${Styles.custSelectText} d-flex gap-3 align-items-center`}>
                                                    <div className={Styles.custSelectAvatar}>
                                                        <Image src="https://i.pinimg.com/736x/5f/f0/86/5ff0863ee36927c504e2e8a46657763e.jpg" alt="" height={60} width={60} />
                                                    </div>
                                                    <div>
                                                        <small>CN_786-01</small>
                                                        <p>DHL</p>
                                                        <span>RFQ_23_RFQ0001</span>
                                                    </div>
                                                </div>
                                                <input type="checkbox" />
                                            </div>
                                        </div>
                                    }
                                </div>
                            </Col>
                        </Row>
                    </div>

                )}
        </div>
    )
}

export default ContractDetails