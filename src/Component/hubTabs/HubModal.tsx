import React from 'react';
import Styles from "./hubTabs.module.css";
import { Modal } from 'react-bootstrap';
import ButtonComp from '../Button';
import Lottie from 'lottie-react';
import animationData from '../../../public/animation_lki6rjft.json';
import Image from 'next/image';

const HubModal = (
    { show, onHide, isHub, proceedDashboard, setCurrentTab, setModalShow }
) => {
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <div className={Styles.hubModal}>
                    <div className={Styles.lotiAnimation}>
                        {isHub ? (
                            <Lottie animationData={animationData} />
                        ) : (
                            <Image src="/Distribution.png" height={400} width={400} className='img-fluid mb-4' alt='' />
                        )}

                    </div>
                    {isHub ? (
                        <h4>State Hub Added Successfully</h4>
                    ) : (
                        <h4>Distribution Center Added Successfully</h4>
                    )}

                    <p>
                        Load your trucks soon
                    </p>
                    <div className='d-flex justify-content-center gap-3 flex-wrap'>
                        {isHub ? (
                            <ButtonComp text='Add Another Hub' className='lightButton' onClick={() => { setCurrentTab(1); setModalShow(false) }} />
                        ) : (
                            <ButtonComp text='Add Another Center' className='lightButton' onClick={() => { setCurrentTab(1); setModalShow(false) }} />
                        )}

                        <ButtonComp text='Proceed to Dashboard' onClick={proceedDashboard} />
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default HubModal;
