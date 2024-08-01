import Styles from './common.module.css';

interface InvoiceItemProps {
    poNumber: string;
    poAmount: string;
    locationType: string;
    fromLocation: string;
    toLocation: string;
    status: 'Confirmed' | 'Pending';
}

const InvoiceItem: React.FC<InvoiceItemProps> = ({ poNumber, poAmount, locationType, fromLocation, toLocation, status }) => {
    const statusClass = status === 'Confirmed' ? Styles.invoiceItemConfirmed : Styles.invoiceItemPending;
    const statusTextClass = status === 'Confirmed' ? Styles.confirmedStatus : Styles.pendingStatus;

    return (
        <div className={`${Styles.invoiceItem} ${statusClass} ms-5`}>
            <div className={Styles.invoiceItemText}>
                <p>{poNumber}</p>
                <span>PO Number</span><br />
                <small>Posted on : 9 Aug 2023</small>
            </div>
            <div className={Styles.invoiceItemText}>
                <p>{poAmount}</p>
                <span>PO Amount</span>
            </div>
            <div className={Styles.invoiceItemText}>
                <p>{locationType}</p>
                <span>Location Type</span>
            </div>
            <div className={Styles.invoiceItemText}>
                <p>{fromLocation}</p>
                <span>From Location</span>
            </div>
            <div className={Styles.invoiceItemText}>
                <p>{toLocation}</p>
                <span>To Location</span>
            </div>
            <p className={`${Styles.statusText} ${statusTextClass}`}>{status}</p>
            <div className={Styles.icons}>
                <i className="bi bi-eye"></i>
                <i className="bi bi-pencil-square"></i>
            </div>
        </div>
    );
};

export default InvoiceItem;
