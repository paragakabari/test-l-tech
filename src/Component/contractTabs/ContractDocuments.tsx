import React from 'react';
import Styles from "./contractTabs.module.css";
import { Table } from 'react-bootstrap';

const ContractDocuments = () => {
    const documents = [
        { name: 'Terms & Conditions', type: 'PDF', size: '121 kb', status: 'Validated', date: '18-12-2023', link: '#' },
        { name: 'Terms & Conditions', type: 'PDF', size: '121 kb', status: 'Validated', date: '18-12-2023', link: '#' },
        { name: 'Terms & Conditions', type: 'PDF', size: '121 kb', status: 'Validated', date: '18-12-2023', link: '#' },
    ];

    return (
        <>
            <h1 className={Styles.documentTitle}>3 Documents</h1>
            <Table className={Styles.table} responsive>
                <tbody>
                    {documents.map((doc, index) => (
                        <tr key={index}>
                            <td className={Styles.name}>
                                <div className='d-flex align-items-center gap-3'>
                                    <div className={Styles.TermsAvatar}>PDF</div>
                                    <p className='fw-bold'>{doc.name}</p>
                                </div>
                            </td>
                            <td className='align-middle font-13'>{doc.type}</td>
                            <td className='align-middle font-13'>{doc.size}</td>
                            <td className={`${Styles.status} align-middle font-13`} style={{ color: "#00C7B1" }}>{doc.status}</td>
                            <td className='align-middle font-13'>{doc.date}</td>
                            <td className='align-middle'>
                                <div className='d-flex gap-3'>
                                    <a href={doc.link} style={{ color: "#272727" }}><i className="bi bi-cloud-download"></i></a>
                                    <a href={doc.link} style={{ color: "#272727" }}><i className="bi bi-file-earmark-text"></i></a>
                                    <a href={doc.link} style={{ color: "#272727" }}><i className="bi bi-trash"></i></a>
                                </div>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
};

export default ContractDocuments;
