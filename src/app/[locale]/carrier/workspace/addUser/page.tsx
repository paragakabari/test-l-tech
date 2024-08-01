"use client";
import { BusinessTabLayout } from "@/Common/BusinessTabLayout";
import { HeroThree } from "@/Common/HeroThree";
import React, { useState } from "react";
import { Button, Col, Container, Dropdown, Form, FormControl, Modal, Row } from "react-bootstrap";
import Styles from "./addUser.module.css";
import ButtonComp from "@/Component/Button";
import Image from "next/image";
import Link from "next/link";
import CommonTable from "@/Component/CommonTable";
import { useRouter } from "next/navigation";


type FileType = {
    name: string;
    type: string;
};
const page = ({ params: { locale } }) => {
    const [currentTab, setCurrentTab] = useState(1);
    const [selectedTab, setSelectedTab] = useState<number[]>([1]);
    const [files, setFiles] = useState<FileType[]>([]);
    const router = useRouter();

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const newFiles = Array.from(event.target.files).map((file) => ({
                name: file.name,
                type: file.type,
            }));
            setFiles((prevFiles) => [...prevFiles, ...newFiles]);
        }
    };

    const handleSaveAndExit = () => {
        if (currentTab < 3) {
            setCurrentTab((prev) => prev + 1);
            setSelectedTab((prev) => [currentTab + 1, ...prev]);
        } else {
            router.push(`/${locale}/carrier/workspace/employees`);
        }
    };

    const breadcrumb = [
        {
            text: "Dashboard",
            link:"/carrier/dashboard-second",
        },
        {
            text: "Workspace",
            link: '/carrier/workspace/dashboard',
        },
        {
            text: "User Management",
            link: "/",
        },
    ];
    const [show, setShow] = useState(false);

    const data = [
        { module: 'Dashboard', fullControl: true, modify: true, readExecute: true, approver: true, read: true, write: true, noAccess: false },
        { module: 'Administration', fullControl: true, modify: true, readExecute: true, approver: true, read: true, write: true, noAccess: false },
        { module: 'Manage Roles & Permissions', fullControl: false, modify: false, readExecute: false, approver: false, read: false, write: false, noAccess: true, parent: 'Administration' },
        { module: 'User Management', fullControl: false, modify: false, readExecute: false, approver: false, read: false, write: false, noAccess: true, parent: 'Administration' },
        { module: 'Manage Fleets', fullControl: false, modify: true, readExecute: false, approver: true, read: false, write: false, noAccess: false },
        { module: 'Manage Vendors', fullControl: false, modify: false, readExecute: false, approver: false, read: false, write: false, noAccess: true },
        { module: 'Manage RFQ’s', fullControl: false, modify: false, readExecute: false, approver: false, read: false, write: false, noAccess: true },
    ];

    const columns = [
        {
            label: 'Modules',
            key: 'module',
            render: (value, row) => (
                <div className='d-flex align-items-center gap-3'>
                    <div className={Styles.checkboxContainer}>
                        <input type="checkbox" checked={row.fullControl || row.modify || row.readExecute || row.approver || row.read || row.write} readOnly />
                    </div>
                    <div>
                        <span className={Styles.moduleName}>{value}</span>
                    </div>
                </div>
            ),
        },
        {
            label: 'Full Control',
            key: 'fullControl',
            render: (value) => (
                <div className={Styles.checkboxContainer}>
                    <input type="checkbox" checked={value} readOnly />
                </div>
            ),
        },
        {
            label: 'Modify',
            key: 'modify',
            render: (value) => (
                <div className={Styles.checkboxContainer}>
                    <input type="checkbox" checked={value} readOnly />
                </div>
            ),
        },
        {
            label: 'Read & Execute',
            key: 'readExecute',
            render: (value) => (
                <div className={Styles.checkboxContainer}>
                    <input type="checkbox" checked={value} readOnly />
                </div>
            ),
        },
        {
            label: 'Approver',
            key: 'approver',
            render: (value) => (
                <div className={Styles.checkboxContainer}>
                    <input type="checkbox" checked={value} readOnly />
                </div>
            ),
        },
        {
            label: 'Read',
            key: 'read',
            render: (value) => (
                <div className={Styles.checkboxContainer}>
                    <input type="checkbox" checked={value} readOnly />
                </div>
            ),
        },
        {
            label: 'Write',
            key: 'write',
            render: (value) => (
                <div className={Styles.checkboxContainer}>
                    <input type="checkbox" checked={value} readOnly />
                </div>
            ),
        },
        {
            label: 'No Access',
            key: 'noAccess',
            render: (value) => (
                <div className={Styles.checkboxContainer}>
                    <input type="checkbox" checked={value} readOnly />
                </div>
            ),
        },
    ];

    return (
        <div>
            <HeroThree BoldText="Add User" breadcrumb={breadcrumb} />
            <Container fluid className={Styles.layout + " px-5"}>
                <Row>
                    <Col
                        xxl={10}
                        xl={10}
                        lg={12}
                        md={12}
                        sm={12}
                        className={Styles.layoutSecond}
                    >
                        <BusinessTabLayout
                            selectedTab={selectedTab}
                            currentTab={currentTab}
                        />
                    </Col>
                    <Col
                        xxl={9}
                        xl={9}
                        lg={12}
                        md={12}
                        sm={12}
                        className={`${Styles.layoutSecond} ${Styles.layoutSecondRes}`}
                    >
                        {currentTab === 1 && (

                            <div
                                className={`${Styles.formContainer} ${Styles.formContainerMain}`}
                            >
                                <h3 className={Styles.title}>Personal Information</h3>
                                <div className={Styles.profilePicContainer}>
                                    <Image
                                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt="Profile"
                                        height={150}
                                        width={150}
                                        className={Styles.profilePic}
                                    />
                                    <div className={Styles.editIcon}>
                                        <i className={`bi bi-pencil`}></i>
                                    </div>
                                </div>
                                <Form>
                                    <Row>
                                        <Col md={6}>
                                            <Form.Group controlId="firstName" className="mb-3">
                                                <Form.Label>First Name</Form.Label>
                                                <Form.Control type="text" placeholder="First Name" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group controlId="lastName" className="mb-3">
                                                <Form.Label>Last Name</Form.Label>
                                                <Form.Control type="text" placeholder="Last Name" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={6}>
                                            <Form.Group controlId="emailId" className="mb-3">
                                                <Form.Label>Email Id</Form.Label>
                                                <Form.Control
                                                    type="email"
                                                    placeholder="Please provide your email Id"
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group controlId="birthDate" className="mb-3">
                                                <Form.Label>Birth Date</Form.Label>
                                                <Form.Control
                                                    type="date"
                                                    placeholder="Select the date"
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={6}>
                                            <Form.Group controlId="cityProvince" className="mb-3">
                                                <Form.Label>City/Province</Form.Label>
                                                <Form.Select>
                                                    <option>Please select your city</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group controlId="zipCode" className="mb-3">
                                                <Form.Label>Zip Code</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Please enter your area zip code"
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={6}>
                                            <Form.Group controlId="country" className="mb-3">
                                                <Form.Label>Country</Form.Label>
                                                <Form.Select>
                                                    <option>Please select your country</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group controlId="address" className="mb-3">
                                                <Form.Label>Address</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Please enter your address here"
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Form.Group controlId="comments" className="mb-3">
                                        <Form.Label>Comments</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows={3}
                                            placeholder="You can add your comments here"
                                        />
                                    </Form.Group>
                                </Form>
                            </div>
                        )}
                        {currentTab === 2 && (

                            <div
                                className={`${Styles.formContainer} ${Styles.formContainerMain}`}
                            >
                                <div className="d-flex justify-content-between align-items-center mb-5">
                                    <h3 className={`${Styles.title}`}>Assignment</h3>
                                    <Link href="" onClick={() => setShow(true)}>Manage Permissions</Link>
                                </div>
                                <Form>
                                    <Row>
                                        <Col md={12}>
                                            <Form.Group controlId="cityProvince" className="mb-3">
                                                <Form.Label>Office Location</Form.Label>
                                                <Form.Select>
                                                    <option>Please select your office location</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={6}>
                                            <Form.Group controlId="firstName" className="mb-3">
                                                <Form.Label>Official Email Id</Form.Label>
                                                <Form.Control
                                                    type="email"
                                                    placeholder="Please select your official email id"
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group controlId="lastName" className="mb-3">
                                                <Form.Label>Contact Number</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Please enter your contact number"
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={12}>
                                            <Form.Group controlId="cityProvince">
                                                <Form.Label>Department</Form.Label>
                                                <Form.Select>
                                                    <option>Please select your department</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                        )}
                        {currentTab === 3 && (

                            <div
                                className={`${Styles.formContainer} ${Styles.formContainerMain}`}
                            >
                                <div className={Styles.header}>
                                    <h2>Verification Documents</h2>
                                    <p>Please upload Photo Id, Driving License, & Insurance Card</p>
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
                            </div>
                        )}
                        <div className="d-flex justify-content-end">
                            <ButtonComp
                                text="Save & Exit"
                                className="px-5"
                                onClick={() => handleSaveAndExit()}
                            />
                        </div>
                    </Col>
                    <Col
                        xxl={3}
                        xl={3}
                        lg={12}
                        md={12}
                        sm={12}
                        className={`${Styles.layoutSecond} d-flex`}
                    >
                        <div className={`${Styles.formContainer} w-100`}>
                            <div className={Styles.SideHeader}>
                                <h1>User Profile</h1>
                            </div>
                            <div className={Styles.profile}>
                                <Image height={50} width={50} src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Profile" className={Styles.avatar} />
                                <div className={Styles.userInfo}>
                                    <h2>Nouf Mohammad</h2>
                                    <p>driver@eprocure.com</p>
                                </div>
                            </div>
                            <div className={Styles.section}>
                                <h3>Personal Info</h3>
                                <div>
                                    <p><strong>Birth Date</strong></p>
                                    <p>13/04/1986</p>
                                </div>
                                <div>
                                    <p><strong>Address</strong></p>
                                    <p>Tulip Inn Downtown, Muscat, Oman Zip code: 099900</p>
                                </div>
                            </div>
                            <div className={Styles.section}>
                                <h3>Work Info</h3>
                                <div>
                                    <p><strong>Official Email Id</strong></p>
                                    <p>driver@eprocure.com</p>
                                </div>
                                <div>
                                    <p><strong>Contact Number</strong></p>
                                    <p>Tulip Inn Downtown, Muscat, Oman Zip code: 099900</p>
                                </div>
                                <div>
                                    <p><strong>Department</strong></p>
                                    <p>Driver</p>
                                </div>
                                <div>
                                    <p><strong>Office Location</strong></p>
                                    <p>Tulip Inn Downtown, Muscat, Oman Zip code: 099900</p>
                                </div>
                            </div>
                            <div className={Styles.section}>
                                <div>
                                    <p><strong>Comments</strong></p>
                                    <p>3+ Years of Experience with long trips</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Modal
                show={show}
                centered
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >

                <Modal.Body className="permissions-modal-main">
                    <div className="permissions-modal-header flex-wrap gap-2">
                        <h1>Manage Permissions</h1>
                        <ButtonComp text="Save & Next" onClick={() => setShow(false)} />
                    </div>
                    <div className={`permissions-modal ${Styles.perTbl}`}>

                        <div className={Styles.formContainerSecond}>
                            <Form className={`d-flex w-100 gap-3 align-items-center ${Styles.tblHeader}`}>
                                <FormControl
                                    type="text"
                                    placeholder="Search product by name, id, category"
                                    className={`mr-2 ${Styles.customInput}`}
                                />
                                <Dropdown>
                                    <Dropdown.Toggle variant="light" id="dropdown-basic" className={Styles.customDropdownToggle}>
                                        Select the Menu
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className={`${Styles.customDropdownMenu} ${Styles.customDropdownMenuR}`}>
                                        <Dropdown.Item href="#/action-1">Menu 1</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Menu 2</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Menu 3</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Dropdown>
                                    <Dropdown.Toggle variant="light" id="dropdown-basic" className={Styles.customDropdownToggle}>
                                        Select Sub-Menu
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className={`${Styles.customDropdownMenu} ${Styles.customDropdownMenuR}`}>
                                        <Dropdown.Item href="#/action-1">Sub-Menu 1</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Sub-Menu 2</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Sub-Menu 3</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Form>
                        </div>
                        <CommonTable columns={columns} data={data} />
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default page;
