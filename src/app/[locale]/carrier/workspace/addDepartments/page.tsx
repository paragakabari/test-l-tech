"use client"
import Sidebar from '@/Common/Sidebar';
import { HeroSecond } from '@/Common/heroSecond'
import React, { useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap';
import Styles from "./addDepartments.module.css"
import Image from 'next/image';
import ButtonComp from '@/Component/Button';
import { useRouter } from 'next/navigation'


const Page = ({ params: { locale } }) => {
    const router = useRouter();
    const breadcrumb = [
        {
            'text': "Dashboard",
            'link': "/carrier/dashboard-second"
        },
        {
            'text': "Workspace",
            'link': '/carrier/workspace/dashboard'
        },
        {
            'text': "Departments",
            'link': '/'
        }
    ];
    const departmentData = [
        "Accounts & Billing",
        "Human Resources",
        "Executive",
        "Finance",
        "Legal",
        "Development",
        "Procurement",
        "Administration",
        "IT",
        "Other",
    ];

    const [selectedDepart, setSelectedDepart] = useState("");
    return (
        <div className='position-relative'>
            <HeroSecond BoldText='Add Department' breadcrumb={breadcrumb} />
            <Container fluid className={Styles.layout + " px-5"}>
                <Row>
                    <Col xxl={2} xl={0} lg={0} md={0} sm={0}>
                        <Sidebar locale={locale} />
                    </Col>

                    <Col xxl={10} xl={12} lg={12} md={12} sm={12} className={Styles.layoutSecond}>
                        <Row className='gy-4'>
                            <Col lg={12}>
                                <div className='d-flex justify-content-end gap-2 w-100'>
                                    <ButtonComp text='Import' className='blueButton' />
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className={`bg-white rounded-5 p-5 w-100  align-items-center ${Styles.addDepartMain}`}>
                                    <div className="d-flex justify-content-center text-left align-items-center gap-3 flex-wrap">
                                        <Image
                                            className={Styles.departImg}
                                            src="/department.png"
                                            alt="department-img"
                                            width={170}
                                            height={170}
                                        />
                                        <p className={Styles.departTitle}>Start adding your organizational departments</p>
                                    </div>
                                    <div className={`d-flex justify-content-center text-left gap-4 flex-wrap w-75 mt-5 mx-auto ${Styles.dataMain}`}>
                                        {departmentData?.map((record: string, index: number) => {
                                            return (
                                                <div className="position-relative">
                                                    <div
                                                        key={index}
                                                        className={`${record === selectedDepart ? Styles?.active : ""} cursor-pointer ${Styles.record}`}
                                                        onClick={() => setSelectedDepart(record)}
                                                    >
                                                        {record}
                                                    </div>
                                                    {record === selectedDepart && selectedDepart !== "Other" && (
                                                        <div className={`d-flex position-absolute rounded-circle justify-content-center align-items-center ${Styles.checkedImgMain}`}>
                                                            <i className="bi bi-check-lg checked-img"></i>
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                    {selectedDepart === "Other" && (
                                        <div className={`${Styles.inputDepartmentMain} mt-4 w-50`}>
                                            <Form.Group controlId="searchField">
                                                <Form.Control
                                                    type="text"
                                                    className={`${Styles.inputDepartment} text-black w-60`}
                                                    placeholder={"Enter a new department name"}
                                                />
                                            </Form.Group>
                                        </div>
                                    )}
                                    <div className='w-100 d-flex justify-content-center mt-3'>
                                        <ButtonComp text='Add New Department' onClick={() => {
                                            router.push(`/${locale}/carrier/workspace/departments`)
                                        }} />
                                    </div>
                                </div>
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Page