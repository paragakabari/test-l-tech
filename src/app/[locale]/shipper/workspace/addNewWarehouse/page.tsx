"use client"
import React, { useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import Styles from "./addNewWarehouse.module.css"
import { HeroThree } from '@/Common/HeroThree'
import ButtonComp from '@/Component/Button'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { FileUploadSection } from '@/Component/VehicleBasicDetailsComponent/BasicDetails'
import Image from 'next/image'
const Page = ({ params: { locale } }) => {
    const router = useRouter();
    const [warehouseInformation, setWarehouseInformation] = useState(false);
    const breadcrumb = [
        {
            'text': "Dashboard",
            'link': "/shipper/dashboard"
        },
        {
            'text': "Workspace",
            'link': ''
        },
        {
            'text': "Warehouses",
            'link': '/'
        },
    ];
    return (
        <div className='position-relative'>
            <div className={Styles.secondDashBoard}>
                <HeroThree BoldText='Add New Warehouse' breadcrumb={breadcrumb} />
                <Container fluid className={Styles.layout + " px-5"}>
                    <div className={Styles.whiteBg}>
                        {
                            warehouseInformation ? (
                                <Row className='gy-4'>
                                    <Col lg={12}>
                                        <h1>Warehouse Manager Information</h1>
                                    </Col>
                                    <Col lg={5} md={6} sm={12} className={Styles.formContainerMain}>
                                        <label className="com-label">Manager Name</label>
                                        <Form.Control type="text" placeholder="Select the Manager Name" />
                                    </Col>
                                    <Col lg={2} md={6} sm={12} className={Styles.formContainerMain}>
                                        <label className="com-label">Contact Number</label>
                                        <Form.Control type="text" placeholder="Select the City names" />
                                    </Col>
                                    <Col lg={5} md={6} sm={12} className={Styles.formContainerMain}>
                                        <label className="com-label">Emailer Address</label>
                                        <Form.Control type="text" placeholder="Address Line 1" />
                                    </Col>
                                    <Col lg={12}>
                                        <Link href="" className='primaryLink'>Add More Managers</Link>
                                    </Col>
                                    <Col lg={12}>
                                        <hr />
                                    </Col>
                                    <Col lg={12}>
                                        <h1>Address Proof *</h1>
                                    </Col>
                                    <Col lg={12}>
                                        <FileUploadSection
                                            handleDrop={() => { }}
                                            handleUpload={() => { }}
                                            multiple={true}
                                            allowedFileTypes=".pdf, .doc, .docx, .xlsx, .jpeg"
                                            // viewContext={ComponentViewContext.BoxedView}
                                            fileSize="Upload up to 5 files"
                                        />
                                    </Col>
                                    <Col lg={12}>
                                        <ButtonComp text='Submit Warehouse' onClick={() => router.push(`/${locale}/shipper/workspace/warehouses`)} />
                                    </Col>
                                </Row>
                            ) : (

                                <Row className={`gy-4`}>
                                    <Col xl={6} lg={12}>
                                        <Row className={`gy-4`}>
                                            <Col lg={4} md={6} sm={12}>
                                                <label className="com-label">Country</label>
                                                <div className={`${Styles.CountrySelection} d-flex align-items-center gap-3`}>
                                                    <div className={Styles.countryImg}><Image src="https://images.unsplash.com/photo-1675855547482-16834b36d4d9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" height={50} width={50} alt="" /></div>
                                                    <div>
                                                        <p>Saudi Arabia</p>
                                                        <span>Non Editable</span>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={8} md={6} sm={12} className={Styles.formContainerMain}>
                                                <label className="com-label">Select Province</label>
                                                <Form.Select>
                                                    <option>Single selection</option>
                                                </Form.Select>
                                            </Col>
                                            <Col sm={12} className={Styles.formContainerMain}>
                                                <label className="com-label">Location Name*</label>
                                                <Form.Select>
                                                    <option>Riyadh</option>
                                                </Form.Select>
                                            </Col>
                                            <Col lg={4} md={6} sm={12} className={Styles.formContainerMain}>
                                                <label className="com-label">Latitude*</label>
                                                <Form.Control type="text" placeholder="Enter Latitude" />
                                            </Col>
                                            <Col lg={4} md={6} sm={12} className={Styles.formContainerMain}>
                                                <label className="com-label">Longitude*</label>
                                                <Form.Control type="text" placeholder="Enter Longitude" />
                                            </Col>
                                            <Col lg={4} md={12} sm={12} className='align-self-center'>
                                                <div className={Styles.dragPin}>
                                                    <div className='d-block'>
                                                        <div className={Styles.orTag}>OR</div>
                                                    </div>
                                                    <div className='d-flex gap-2 align-items-center'>
                                                        <p>Drag the pin on the map to capture the details</p>
                                                        <i className="bi bi-geo-fill"></i>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xl={6} lg={12}>
                                        <Row className={`gy-4`}>
                                            <Col lg={8} md={6} sm={12} className={Styles.formContainerMain}>
                                                <label className="com-label">Select City</label>
                                                <Form.Select>
                                                    <option>Select City</option>
                                                </Form.Select>
                                            </Col>
                                            <Col lg={4} md={6} sm={12} className={Styles.formContainerMain}>
                                                <label className="com-label">Postal/Zip*</label>
                                                <Form.Control type="text" placeholder="Zip COde" />
                                            </Col>
                                            <Col lg={12} className={Styles.formContainerMain}>
                                                <label className="com-label">Address*</label>
                                                <Form.Control type="text" placeholder="Address Line 1" className='mb-2' />
                                                <Form.Control type="text" placeholder="Address Line 2" className='mb-2' />
                                                <Form.Control type="text" placeholder="Address Line 3" />
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col lg={12}>
                                        <hr />
                                    </Col>

                                    <Col xl={2} lg={6} className={Styles.formContainerMain}>
                                        <label className="com-label">Concrete Slab (Inch)*</label>
                                        <Form.Control type="text" placeholder="Choose a value" />
                                    </Col>
                                    <Col xl={2} lg={6} className={Styles.formContainerMain}>
                                        <label className="com-label">Aisle width (Feet) *</label>
                                        <Form.Control type="text" placeholder="Enter the area" />
                                    </Col>
                                    <Col xl={2} lg={6} className={Styles.formContainerMain}>
                                        <label className="com-label">Grade of Floor*</label>
                                        <Form.Control type="text" placeholder="Select the floor" />
                                    </Col>
                                    <Col xl={3} lg={6} className={Styles.formContainerMain}>
                                        <label className="com-label">Warehouse by Pallet Size (No of Pallets) *</label>
                                        <Form.Control type="text" placeholder="Select the City names" />
                                    </Col>
                                    <Col lg={6} md={12}>
                                        <Form.Check
                                            type="checkbox"
                                            label="Is Active"
                                        />
                                    </Col>
                                    <Col lg={6} md={12}>
                                        <div className='d-flex justify-content-end gap-2 w-100'>
                                            <ButtonComp text='Save and Edit Later' className='outlineButton' onClick={() => router.push(`/${locale}/shipper/workspace/warehouses`)} />
                                            <ButtonComp text='More Information' onClick={() => setWarehouseInformation(true)} />
                                        </div>
                                    </Col>
                                </Row>
                            )}
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Page