"use client"
import React, { useState } from 'react'
import Styles from "./profileBusiness.module.css"
import { HeroThree } from '@/Common/HeroThree'
import { Col, Container, Form, Row } from 'react-bootstrap'
import { BusinessProfileTab } from '@/Common/BusinessProfileTab'
import Image from 'next/image'
import ButtonComp from '@/Component/Button'
import ProfileBusinessCard from '@/Common/ProfileBusinessCard'
const page = () => {
    const [selectedTab, setSelectedTab] = useState<number[]>([1]);
    const [currentTab, setCurrentTab] = useState(1);
    const [emptyBox, setEmptyBox] = useState(1);
    const [orgDetails, setOrgDetails] = useState(false);
    const breadcrumb = [
        {
            text: "Dashboard",
            link: "/carrier/dashboard-second",
        },
        {
            text: "Workspace Management",
            link: "/",
        },
    ];
    const handleSaveAndExit = () => {
        if (currentTab < 4) {
            setCurrentTab((prev) => prev + 1);
            setSelectedTab((prev) => [currentTab + 1, ...prev]);
        }
    };


    return (
        <div>
            <HeroThree BoldText="Business Profile" breadcrumb={breadcrumb} />
            <Container fluid className={Styles.layout + " px-5"}>
                <Row>
                    <Col lg={12}
                        className={`${Styles.layoutSecond} ${Styles.tabResp}`}
                    >
                        <BusinessProfileTab
                            selectedTab={selectedTab}
                            currentTab={currentTab}
                        />
                    </Col>
                    <Row className='mt-5 p-0 m-0'>
                        <Col
                            xxl={9}
                            xl={9}
                            lg={12}
                            md={12}
                            sm={12}
                            className={``}
                        >
                            {currentTab === 1 && (

                                <div
                                    className={`${Styles.formContainer} ${Styles.formContainerMain}`}
                                >
                                    {
                                        emptyBox === 1 &&
                                        <div className={Styles.emptyDetails}>
                                            <Image src="/book.png" alt="" height={150} width={150} />
                                            <p>By Changing CR Number, All information saved / submitted against this CR will be transferred to new CR number after successful verification</p>
                                            <ButtonComp text="Continue" className='px-5 ms-auto d-block' onClick={() => setEmptyBox(2)} />
                                        </div>
                                    }
                                    {emptyBox === 2 &&
                                        <div className={Styles.emptyDetails}>
                                            <h4 className='fs-5 fw-bold'>CR Number</h4>
                                            <Form.Group controlId="firstName" className="mb-3 mt-5">
                                                <Form.Label>Enter Your CR Number</Form.Label>
                                                <Form.Control type="text" placeholder="Enter Your CR Number" value="099900" />
                                            </Form.Group>
                                            <ButtonComp text="Continue" className='px-5 ms-auto d-block mt-5' onClick={() => {
                                                setOrgDetails(true)
                                                setEmptyBox(null)
                                            }} />
                                        </div>}

                                    {orgDetails &&
                                        <Form>
                                            <h4 className='fs-5 fw-bold mb-5'>CR Number: 099900</h4>
                                            <Row className='gy-4'>
                                                <Col md={12}>
                                                    <Form.Group>
                                                        <Form.Label>Company Name</Form.Label>
                                                        <Form.Control type="text" placeholder="Company Name" value="Red Sea Logistics" />
                                                    </Form.Group>
                                                </Col>
                                                <Col md={6}>
                                                    <Form.Group>
                                                        <Form.Label>Company Website</Form.Label>
                                                        <Form.Control type="text" placeholder="Company Website" value="www.redsealogistics.sa" />
                                                    </Form.Group>
                                                </Col>
                                                <Col md={6}>
                                                    <Form.Group>
                                                        <Form.Label>Company Email Id</Form.Label>
                                                        <Form.Control
                                                            type="email"
                                                            placeholder="Company Email Id"
                                                            value="info@redsealogistics.sa"
                                                        />
                                                    </Form.Group>
                                                </Col>
                                                <Col md={6}>
                                                    <Form.Group>
                                                        <Form.Label>Issue Date</Form.Label>
                                                        <Form.Control
                                                            type="date"
                                                            placeholder="Select the date"
                                                        />
                                                    </Form.Group>
                                                </Col>
                                                <Col md={6}>
                                                    <Form.Group>
                                                        <Form.Label>Expiry Date</Form.Label>
                                                        <Form.Control
                                                            type="date"
                                                            placeholder="Select the date"
                                                        />
                                                    </Form.Group>
                                                </Col>
                                                <Col md={6}>
                                                    <Form.Group>
                                                        <Form.Label>Business Types</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Business Types"
                                                            value="Logistics"
                                                        />
                                                    </Form.Group>
                                                </Col>
                                                <Col md={6}>
                                                    <Form.Group>
                                                        <Form.Label>Activity Description</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Activity Description"
                                                            value="Logistics & Supply Chain"
                                                        />
                                                    </Form.Group>
                                                </Col>
                                                <Col md={6}>
                                                    <Form.Group>
                                                        <Form.Label>Town City</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Town City"
                                                            value="Jeddah"
                                                        />
                                                    </Form.Group>
                                                </Col>
                                                <Col md={6}>
                                                    <Form.Group>
                                                        <Form.Label>District</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="District"
                                                            value="Jeddah"
                                                        />
                                                    </Form.Group>
                                                </Col>
                                                <Col md={6}>
                                                    <Form.Group>
                                                        <Form.Label>State/Province</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="State/Province"
                                                            value="Makkah Region"
                                                        />
                                                    </Form.Group>
                                                </Col>
                                                <Col md={6}>
                                                    <Form.Group>
                                                        <Form.Label>Country</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Country"
                                                            value="Saudi Arabia"
                                                        />
                                                    </Form.Group>
                                                </Col>
                                                <Col md={6}>
                                                    <Form.Group>
                                                        <Form.Label>Postal/Zip</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Postal/Zip"
                                                            value="067869"
                                                        />
                                                    </Form.Group>
                                                </Col>
                                                <Col md={12}>
                                                    <Form.Group controlId="comments">
                                                        <Form.Label>Comments</Form.Label>
                                                        <Form.Control
                                                            as="textarea"
                                                            rows={3}
                                                            placeholder="You can add your comments here"
                                                        />
                                                    </Form.Group>
                                                </Col>
                                                <Col md={12}>
                                                    <ButtonComp text="Submit Details" className='px-5 ms-auto d-block mt-5' onClick={handleSaveAndExit} />
                                                </Col>
                                            </Row>
                                        </Form>
                                    }
                                </div>
                            )}
                            {currentTab === 2 && (
                                <div
                                    className={`${Styles.formContainer} ${Styles.formContainerMain}`}
                                >
                                    <h4 className='fs-5 fw-bold mb-5'>CR Number: 099900</h4>
                                    <Row className='gy-4'>
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label>Company Registration License*</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Company Registration License"
                                                    value="LI299302"
                                                />
                                                <div className={Styles.uploadBox}>
                                                    <label className={Styles.fileInputLabel}>
                                                        <input
                                                            type="file"
                                                            multiple
                                                            className={Styles.fileInput}
                                                        />
                                                        <Image height={30} width={30} src="/img-upl.png" alt="" />
                                                        <div className={Styles.uploadText}>
                                                            <p>Drop files or click to upload</p>
                                                            <span>Upload up to 5 files</span>
                                                        </div>
                                                    </label>
                                                </div>
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label>VAT Certificate*</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Enter VAT Certificate Number"
                                                />
                                                <div className={Styles.uploadBox}>
                                                    <label className={Styles.fileInputLabel}>
                                                        <input
                                                            type="file"
                                                            multiple
                                                            className={Styles.fileInput}
                                                        />
                                                        <Image height={30} width={30} src="/img-upl.png" alt="" />
                                                        <div className={Styles.uploadText}>
                                                            <p>Drop files or click to upload</p>
                                                            <span>Upload up to 5 files</span>
                                                        </div>
                                                    </label>
                                                </div>
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label>Zakat Certificate*</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Enter Zakat Certificate Number"
                                                />
                                                <div className={Styles.uploadBox}>
                                                    <label className={Styles.fileInputLabel}>
                                                        <input
                                                            type="file"
                                                            multiple
                                                            className={Styles.fileInput}
                                                        />
                                                        <Image height={30} width={30} src="/img-upl.png" alt="" />
                                                        <div className={Styles.uploadText}>
                                                            <p>Drop files or click to upload</p>
                                                            <span>Upload up to 5 files</span>
                                                        </div>
                                                    </label>
                                                </div>
                                            </Form.Group>
                                        </Col>
                                        <Col lg={12}>
                                            <hr />
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label>Social Insurance Certificate</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Social Insurance Certificate"
                                                    value="LI299302"
                                                />
                                                <div className={Styles.uploadBox}>
                                                    <label className={Styles.fileInputLabel}>
                                                        <input
                                                            type="file"
                                                            multiple
                                                            className={Styles.fileInput}
                                                        />
                                                        <Image height={30} width={30} src="/img-upl.png" alt="" />
                                                        <div className={Styles.uploadText}>
                                                            <p>Drop files or click to upload</p>
                                                            <span>Upload up to 5 files</span>
                                                        </div>
                                                    </label>
                                                </div>
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label>Ministry of Transport License*</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Enter VAT Certificate Number"

                                                />
                                                <div className={Styles.uploadBox}>
                                                    <label className={Styles.fileInputLabel}>
                                                        <input
                                                            type="file"
                                                            multiple
                                                            className={Styles.fileInput}
                                                        />
                                                        <Image height={30} width={30} src="/img-upl.png" alt="" />
                                                        <div className={Styles.uploadText}>
                                                            <p>Drop files or click to upload</p>
                                                            <span>Upload up to 5 files</span>
                                                        </div>
                                                    </label>
                                                </div>
                                            </Form.Group>
                                        </Col>
                                        <Col md={12}>
                                            <ButtonComp text="Submit Details" className='px-5 ms-auto d-block mt-5' onClick={handleSaveAndExit} />
                                        </Col>
                                    </Row>
                                </div>
                            )}
                            {currentTab === 3 && (
                                <div
                                    className={`${Styles.formContainer} ${Styles.formContainerMain}`}
                                >
                                    <h4 className='fs-5 fw-bold mb-5'>CR Number: 099900</h4>
                                    <Row className='gy-4'>
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label>First Name</Form.Label>
                                                <Form.Control type="text" placeholder="First Name" value="Aziz" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label>Last Name</Form.Label>
                                                <Form.Control type="text" placeholder="Last Name" value="Ahmed" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label>Date of Birth</Form.Label>
                                                <Form.Control type="date" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label>Gender</Form.Label>
                                                <Form.Select>
                                                    <option>Male</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                        <Col md={12}>
                                            <hr />
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label>Official Email Id </Form.Label>
                                                <Form.Control type="text" placeholder="Official Email Id" value="aziz.ahmed@redsealogistics.sa" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label>Relationship with The Company</Form.Label>
                                                <Form.Control type="text" placeholder="Relationship with The Company" value="Driver" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label>Contact Number</Form.Label>
                                                <Form.Control type="text" placeholder="Contact Number" value="+1 884 373 4858" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={12}>
                                            <hr />
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label>Town/City</Form.Label>
                                                <Form.Control type="text" placeholder="Town/City" value="Jeddah" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label>District</Form.Label>
                                                <Form.Control type="text" placeholder="District" value="Jeddah" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label>State/Province</Form.Label>
                                                <Form.Control type="text" placeholder="State/Province" value="Makkah Region" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label>Postal/Zip</Form.Label>
                                                <Form.Control type="text" placeholder="Postal/Zip" value="067869" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label>Country</Form.Label>
                                                <Form.Control type="text" placeholder="Country" value="Saudi Arabia" />
                                            </Form.Group>
                                        </Col>

                                        <Col md={12}>
                                            <Form.Group controlId="comments">
                                                <Form.Label>Company Head Office Address</Form.Label>
                                                <Form.Control
                                                    as="textarea"
                                                    rows={3}
                                                    value="1010 Red Sea Port, Jeddah, Saudi Arabia"
                                                    placeholder="Company Head Office Address"
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col md={12}>
                                            <ButtonComp text="Submit Details" className='px-5 ms-auto d-block mt-5' onClick={handleSaveAndExit} />
                                        </Col>
                                    </Row>
                                </div>
                            )}
                            {currentTab === 4 && (
                                <div
                                    className={`${Styles.formContainer} ${Styles.formContainerMain}`}
                                >
                                    <h4 className='fs-5 fw-bold mb-5'>CR Number: 099900</h4>
                                    <Row className='gy-4'>
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label>Driving License*</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Enter Driving License Number"
                                                />
                                                <div className={Styles.uploadBox}>
                                                    <label className={Styles.fileInputLabel}>
                                                        <input
                                                            type="file"
                                                            multiple
                                                            className={Styles.fileInput}
                                                        />
                                                        <Image height={30} width={30} src="/img-upl.png" alt="" />
                                                        <div className={Styles.uploadText}>
                                                            <p>Drop files or click to upload</p>
                                                            <span>Upload up to 5 files</span>
                                                        </div>
                                                    </label>
                                                </div>
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label>Iqama Card*</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Enter Iqama Card Number"
                                                />
                                                <div className={Styles.uploadBox}>
                                                    <label className={Styles.fileInputLabel}>
                                                        <input
                                                            type="file"
                                                            multiple
                                                            className={Styles.fileInput}
                                                        />
                                                        <Image height={30} width={30} src="/img-upl.png" alt="" />
                                                        <div className={Styles.uploadText}>
                                                            <p>Drop files or click to upload</p>
                                                            <span>Upload up to 5 files</span>
                                                        </div>
                                                    </label>
                                                </div>
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label>Passport*</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Enter Passport Number"
                                                />
                                                <div className={Styles.uploadBox}>
                                                    <label className={Styles.fileInputLabel}>
                                                        <input
                                                            type="file"
                                                            multiple
                                                            className={Styles.fileInput}
                                                        />
                                                        <Image height={30} width={30} src="/img-upl.png" alt="" />
                                                        <div className={Styles.uploadText}>
                                                            <p>Drop files or click to upload</p>
                                                            <span>Upload up to 5 files</span>
                                                        </div>
                                                    </label>
                                                </div>
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label>National Identity Card*</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Enter National Identity Card"
                                                />
                                                <div className={Styles.uploadBox}>
                                                    <label className={Styles.fileInputLabel}>
                                                        <input
                                                            type="file"
                                                            multiple
                                                            className={Styles.fileInput}
                                                        />
                                                        <Image height={30} width={30} src="/img-upl.png" alt="" />
                                                        <div className={Styles.uploadText}>
                                                            <p>Drop files or click to upload</p>
                                                            <span>Upload up to 5 files</span>
                                                        </div>
                                                    </label>
                                                </div>
                                            </Form.Group>
                                        </Col>
                                        <Col md={12}>
                                            <ButtonComp text="Submit Details" className='px-5 ms-auto d-block mt-5' onClick={handleSaveAndExit} />
                                        </Col>
                                    </Row>
                                </div>
                            )}
                        </Col>
                        <Col
                            xxl={3}
                            xl={3}
                            lg={12}
                            md={12}
                            sm={12}
                            className={` d-flex`}
                        >
                            <ProfileBusinessCard />
                        </Col>
                    </Row>
                </Row>
            </Container>
        </div>
    )
}

export default page