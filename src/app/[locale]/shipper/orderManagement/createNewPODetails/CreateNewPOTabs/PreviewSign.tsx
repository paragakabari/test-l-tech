import React, { useState } from 'react'
import Styles from "../contractTab.module.css"
import Image from 'next/image'
import ButtonComp from '@/Component/Button'
import { Col, Modal, Row } from 'react-bootstrap'
const PreviewSign = () => {
    const [eSign, setESign] = useState(false);
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <div className={Styles.PreviewSignMainWhiteBg}>
                <div className={Styles.PreviewSignMainWhitTab}>
                    <p className={`${!eSign ? Styles.PreviewActiveTab : ""}`} onClick={() => setESign(false)}>Preview</p>
                    <p className={`${eSign ? Styles.PreviewActiveTab : ""}`} onClick={() => setESign(true)}>e-Signature</p>
                </div>
                {!eSign ?
                    <div className={Styles.PreviewSign}>
                        <div className='d-flex justify-content-between flex-wrap gap-2'>
                            <Image src="/spsLogo.png" className={Styles.spsLogo} alt="" height={500} width={500} />
                            <div className='text-end'>
                                <p>7174, Northen Ring Branch Road, <br />Hittin, Riyadh 13513, Saudi Arabia <br />+969999988888</p>
                            </div>
                        </div>
                        <h5 className='text-center'>Contract for Cleaning Services Contract</h5>
                        <div className='d-flex justify-content-between flex-wrap gap-2'>
                            <div>
                                <p><b>Order Id:</b> 1775</p>
                                <p><b>Contract Amount:</b> 21600 SAR</p>
                            </div>
                            <div>
                                <p><b>Created On: </b>Jun 1, 2023 | 12:50:12 PM UTC</p>
                                <p><b>Valid Until: </b>Jun 16, 2023 | 08:59:59 PM UTC</p>
                            </div>
                        </div>
                        <p>Cleaning Services Contract</p>
                        <p>This agreement for cleaning services between SPS (hereafter referred to as "Client") and Jumpo INC. (hereafter referred to as
                            "Contractor") is made and entered into upon the</p>
                        <p>The office stated in this agreement is found at the below address</p>
                        <p>The Client would like to have the above mentioned house maintained on a regular basis. The Client and Contractor hereby agree to the following terms:</p>
                        <p>1. Client will give Contractor access to the inside of the house during regular business hours and any additional mutually agreed upon times.</p>
                        <p>2. Client will provide for the use by the Contractor in performance of this contract the following supplies and equipment</p>
                        <p>3. Client will pay Contractor $ 1000 on the first day of each month for services to be performed during the rest of the month</p>
                    </div> : <div>
                        <Row className="gy-4" style={{ marginTop: '20px' }}>
                            <Col lg={8} md={12}>
                                <p className='fw-medium mb-3'>Full Signature</p>
                                <div className={Styles.drawSec}>
                                    Draw here
                                </div>
                            </Col>
                            <Col lg={4} md={12}>
                                <p className='fw-medium mb-3'>Initials</p>
                                <div className={Styles.drawSec}>
                                    Draw here
                                </div>
                            </Col>
                        </Row>
                    </div>
                }
            </div>
            <div className='w-100 mt-4'>
                <ButtonComp text='Proceed Next' className='ms-auto d-block ' onClick={() => setModalShow(true)} />
            </div>
            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                    <div className={Styles.congratulationsModal}>
                        <h1 className='text-center'>Congratulations!! <br />Your order is successfully generated.</h1>
                        <div className={Styles.congratulationsModalBox}>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='d-flex gap-3'>
                                    <div className={Styles.preAvatar}>
                                        <Image src="https://svstaticfiles.blob.core.windows.net/carrier-logos/smsa-express.svg" alt='' height={60} width={60} />
                                    </div>
                                    <div>
                                        <h5 className='fw-bold'>SMSA</h5>
                                        <p>PO_29949009</p>
                                        <span>Road Transport • Date - 23 Jan 2023</span>
                                    </div>
                                </div>
                                <div className='text-end'>
                                    <h5>SAR 9300</h5>
                                    <p style={{ opacity: '50%' }}>7 Days</p>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center gap-2'>
                            <ButtonComp text='Go to Dashboard' className='lightButton' />
                            <ButtonComp text='Thank You' />
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>

    )
}

export default PreviewSign