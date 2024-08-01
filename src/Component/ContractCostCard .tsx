import Styles from './CommonTable.module.css';

const ContractCostCard = () => {
    return (
        <div className={Styles.ContractCostCard}>
            <h4 className='fs-5 fw-bold'>Contract Cost Card</h4>
            <div className={Styles.costBox}>
                <div className={`${Styles.costDetails} d-flex justify-content-between gap-3`}>
                    <div>
                        <h5>Base Fare (800 Km)</h5>
                        <small>Preferred by Distance</small>
                    </div>
                    <div className={Styles.flexCol}>
                        <div className={Styles.textEnd}>
                            <h5>Base Fare (800 Km)</h5>
                            <small>Preferred by Distance</small>
                        </div>
                        <div className={Styles.textEnd}>
                            <h5>800 SAR</h5>
                            <small>Every additional 50 Km</small>
                        </div>
                    </div>
                </div>
                <div className={`${Styles.costDetails} d-flex justify-content-between gap-3 mt-4`}>
                    <div>
                        <h5>Base Fare (800 Km)</h5>
                        <small>Preferred by Distance</small>
                    </div>
                    <div className={Styles.flexCol}>
                        <div className={Styles.textEnd}>
                            <h5>Base Fare (800 Km)</h5>
                            <small>Preferred by Distance</small>
                        </div>
                        <div className={Styles.textEnd}>
                            <h5>800 SAR</h5>
                            <small>Every additional 50 Km</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${Styles.costBox}`}>
                <div className={`${Styles.costDetails} d-flex justify-content-between w-100`}>
                    <div className={`${Styles.flexCol} w-100`}>
                        <h5>Services</h5>
                        <div className={`${Styles.costDetails} d-flex justify-content-between`}>
                            <p className='fw-medium'>Packaging Cost:</p>
                            <p className='fw-medium'>200 SAR</p>
                        </div>
                        <div className={`${Styles.costDetails} d-flex justify-content-between`}>
                            <p className='fw-medium'>Full Value Insurance:</p>
                            <p className='fw-medium'>100 SAR</p>
                        </div>
                        <div className={`${Styles.costDetails} d-flex justify-content-between`}>
                            <p className='fw-medium'>Dash cam::</p>
                            <p className='fw-medium'>200 SAR</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${Styles.costBox}`}>
                <div className={`${Styles.costDetails} d-flex justify-content-between w-100`}>
                    <div className={`${Styles.flexCol} w-100`}>
                        <h5>Taxes & Discount:</h5>
                        <div className={`${Styles.costDetails} d-flex justify-content-between`}>
                            <p className='fw-medium'>Tax (%):</p>
                            <p className='fw-medium'>10%</p>
                        </div>
                        <div className={`${Styles.costDetails} d-flex justify-content-between`}>
                            <p className='fw-medium'>Discount:</p>
                            <p className='fw-medium'>10%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContractCostCard;
