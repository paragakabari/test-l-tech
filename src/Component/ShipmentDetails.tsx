import Styles from './CommonTable.module.css';

const ShipmentDetails = () => {
    return (
        <div className={Styles.ContractCostCard}>
            <h4 className='fs-5 fw-bold'>Shipment Details</h4>
            <div className={`${Styles.costBox}`}>
                <div className={`${Styles.costDetails} d-flex justify-content-between w-100`}>
                    <div className={`${Styles.flexCol} w-100`}>
                        <div className={`${Styles.costDetails} d-flex justify-content-between fs-5`}>
                            <p className='fw-semibold'>Total Distance (Km):</p>
                            <p className='fw-semibold'>950 Km</p>
                        </div>
                        <div className={`${Styles.costDetails} d-flex justify-content-between`}>
                            <p className='fw-medium'>Base Cost For 800 Km:</p>
                            <p className='fw-medium'>200 SAR</p>
                        </div>
                        <div className={`${Styles.costDetails} d-flex justify-content-between`}>
                            <p className='fw-medium'>Additional Distance Cost For 150 Km:</p>
                            <p className='fw-medium'>100 SAR</p>
                        </div>
                        <div className={`${Styles.costDetails} d-flex justify-content-between fs-5`}>
                            <p className='fw-semibold'>Total Cost For Distance: </p>
                            <p className='fw-semibold'>800 SAR</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${Styles.costBox}`}>
                <div className={`${Styles.costDetails} d-flex justify-content-between w-100`}>
                    <div className={`${Styles.flexCol} w-100`}>
                        <div className={`${Styles.costDetails} d-flex justify-content-between fs-5`}>
                            <p className='fw-semibold'>Total Weight (Kg): </p>
                            <p className='fw-semibold'>590 Kg</p>
                        </div>
                        <div className={`${Styles.costDetails} d-flex justify-content-between`}>
                            <p className='fw-medium'>Base Cost For 600 Kg: </p>
                            <p className='fw-medium'>600 SAR</p>
                        </div>
                        <div className={`${Styles.costDetails} d-flex justify-content-between`}>
                            <p className='fw-medium'>Additional Weight Cost: </p>
                            <p className='fw-medium'>0 SAR</p>
                        </div>
                        <div className={`${Styles.costDetails} d-flex justify-content-between fs-5`}>
                            <p className='fw-semibold'>Total Cost For Weight:  </p>
                            <p className='fw-semibold'>600 SAR</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${Styles.costBox}`}>
                <div className={`${Styles.costDetails} d-flex justify-content-between w-100`}>
                    <div className={`${Styles.flexCol} w-100`}>
                        <h5>Services</h5>
                        <div className={`${Styles.costDetails} d-flex justify-content-between`}>
                            <p className='fw-medium'>Packaging Cost: </p>
                            <p className='fw-medium'>200 SAR</p>
                        </div>
                        <div className={`${Styles.costDetails} d-flex justify-content-between`}>
                            <p className='fw-medium'>Full Value Insurance: </p>
                            <p className='fw-medium'>100 SAR</p>
                        </div>
                        <div className={`${Styles.costDetails} d-flex justify-content-between`}>
                            <p className='fw-medium'>Dash cam::</p>
                            <p className='fw-medium'>200 SAR</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${Styles.costDetails} d-flex justify-content-between`}>
                <p className='fw-medium'>Total:</p>
                <p className='fw-medium fs-4'>3296 SAR</p>
            </div>
        </div>
    );
};

export default ShipmentDetails;
