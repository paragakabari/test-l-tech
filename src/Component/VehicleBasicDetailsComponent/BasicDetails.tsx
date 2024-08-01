import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import DragDropFilePicker, { ComponentViewContext } from '../DragDropFilePicker';
import Styles from "./VehicleBasicDetailsComponent.module.css";

export const FormGroup = ({ label, children }) => (
    <div className="form-group">
        <label className="com-label">{label}</label>
        {children}
    </div>
);

export const FileUploadSection = ({ label, handleDrop, handleUpload, multiple, allowedFileTypes, viewContext, fileSize }: { label?: string, handleDrop: any, handleUpload: any, multiple: any, allowedFileTypes: any, viewContext?: any, fileSize: any }) => (
    <div className="upload-vat cursor-pointer">
        {
            label &&
            <label className="com-label">{label}</label>
        }
        <DragDropFilePicker
            handleDrop={handleDrop}
            handleUpload={handleUpload}
            multiple={multiple}
            allowedFileTypes={allowedFileTypes}
            viewContext={viewContext}
            FileSize={fileSize}
        />
    </div>
);

const BasicDetails = () => {
    return (
        <div className={Styles.whiteBg}>
            <Row className='gy-4'>
                <Col lg={4} md={6} sm={12}>
                    <FormGroup label="Vehicle Istimara No *">
                        <select className="form-control selectBox">
                            <option value="">Select the City names</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                        </select>
                    </FormGroup>
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <FormGroup label="Vehicle Istimara Location*">
                        <select className="form-control selectBox">
                            <option value="">Riyadh, Saudi Arabia, 999999</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                        </select>
                    </FormGroup>
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <FormGroup label="Istimara Expiry Date*">
                        <select className="form-control selectBox">
                            <option value="">Select the date</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                        </select>
                    </FormGroup>
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <FormGroup label="Istimara Expiry Date*">
                        <Form.Control type="text" placeholder="XXXXXXXXX" className='com-input' />
                    </FormGroup>
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <FormGroup label="Chassis No. *">
                        <Form.Control type="text" placeholder="XXXXXXXXX" className='com-input' />
                    </FormGroup>
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <FormGroup label="Long Haul permit. *">
                        <Form.Control type="text" placeholder="XXXXXXXXX" className='com-input' />
                    </FormGroup>
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <FormGroup label="Engine No.">
                        <Form.Control type="text" placeholder="XXXXXXXXX" className='com-input' />
                    </FormGroup>
                </Col>
            </Row>
            <Row className='mt-2 gy-4'>
                <Col lg={6} md={12} sm={12}>
                    <FileUploadSection
                        label="Attach Istimara Documents *"
                        handleDrop={() => { }}
                        handleUpload={() => { }}
                        multiple={true}
                        allowedFileTypes=".pdf, .doc, .docx, .xlsx, .jpeg"
                        viewContext={ComponentViewContext.BoxedView}
                        fileSize="PDF, Docx, Doc Max Size 10 MB"
                    />
                </Col>
                <Col lg={6} md={12} sm={12}>
                    <FileUploadSection
                        label="PUC Certificate*"
                        handleDrop={() => { }}
                        handleUpload={() => { }}
                        multiple={true}
                        allowedFileTypes=".pdf, .doc, .docx, .xlsx, .jpeg"
                        viewContext={ComponentViewContext.BoxedView}
                        fileSize="PDF, Docx, Doc Max Size 10 MB"
                    />
                </Col>
                <Col lg={12} md={12} sm={12}>
                    <FileUploadSection
                        label="Vehicle Pictures with the License Plate*"
                        handleDrop={() => { }}
                        handleUpload={() => { }}
                        multiple={true}
                        allowedFileTypes=".pdf, .doc, .docx, .xlsx, .jpeg"
                        viewContext={ComponentViewContext.BoxedView}
                        fileSize="Upload up to 5 files"
                    />
                </Col>
            </Row>
        </div>
    );
};

export default BasicDetails;
