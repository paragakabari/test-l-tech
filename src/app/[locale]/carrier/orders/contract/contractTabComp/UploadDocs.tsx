import React, { useState } from 'react'
import Styles from "../contract.module.css"
import { Form } from 'react-bootstrap'
import Image from 'next/image'
import ButtonComp from '@/Component/Button'

type FileType = {
    name: string;
    type: string;
};
const UploadDocs = ({ handleSaveAndExit }) => {
    const [files, setFiles] = useState<FileType[]>([]);
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const newFiles = Array.from(event.target.files).map((file) => ({
                name: file.name,
                type: file.type,
            }));
            setFiles((prevFiles) => [...prevFiles, ...newFiles]);
        }
    };
    return (
        <div
            className={`${Styles.formContainer} ${Styles.formContainerMain}`}
        >
            <h1>Document Checklist</h1>
            <div className={Styles.checkTabMAin}>
                <Form.Check
                    type="checkbox"
                    label="Insurance"
                />
                <Form.Check
                    type="checkbox"
                    label="Bill of Landing"
                />
                <Form.Check
                    type="checkbox"
                    label="Hozardous License"
                />
            </div>
            <div className={Styles.uploadBox}>
                <label className={Styles.fileInputLabel}>
                    <input
                        type="file"
                        multiple
                        className={Styles.fileInput}
                        onChange={handleFileChange}
                    />
                    <Image height={30} width={30} src="/img-upl.png" alt="" />
                    <div className={Styles.uploadText}>
                        <p>Drop files or click to upload</p>
                        <span>Upload up to 5 files</span>
                    </div>
                </label>
            </div>
            {files.length > 0 && (

                <div className={Styles.uploadedFiles}>
                    <h3>Uploaded Documents</h3>
                    <div className={Styles.filesGrid}>
                        {files.map((file, index) => (
                            <div className="">
                                <div key={index} className={Styles.file}>
                                    <div className={Styles.fileIcon}>
                                        {file.type.includes('pdf') ? (
                                            <div className={Styles.pdfIcon}></div>
                                        ) : (
                                            <div className={Styles.docIcon}></div>
                                        )}
                                    </div>
                                </div>
                                <span className={Styles.fileName}>{file.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            <div className="d-flex justify-content-end mt-3">
                <ButtonComp
                    text="Add Document"
                    className="px-5"
                    onClick={handleSaveAndExit}
                />
            </div>
        </div>
    )
}

export default UploadDocs