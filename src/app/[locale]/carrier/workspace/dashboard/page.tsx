"use client"
import { HeroSecond } from '@/Common/heroSecond'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Styles from "./dashboard.module.css"
import Sidebar from '@/Common/Sidebar'
import ButtonComp from '@/Component/Button'
import TrackShippments from '@/Common/TrackShippments'
import AddCard from '@/Common/AddCard'
import OrderCard from '@/Common/OrderCard'
import DepartmentCard from '@/Common/DepartmentCard'
import ConsignmentCard from '@/Common/ConsignmentCard'
import DriversAll from '@/Common/DriversAll'
import HubCard from '@/Common/HubCard'
import { useRouter } from 'next/navigation'

const Page = ({ params: { locale } }) => {
    const router = useRouter();
    const breadcrumb = [
        {
            'text': "Dashboard",
            'link': `/carrier/dashboard-second`
        },
        {
            'text': "Workspace",
            'link': '/carrier/workspace/dashboard'
        }
    ];
    return (

        <div className='position-relative'>
            <HeroSecond BoldText='Workspace' breadcrumb={breadcrumb} />
            <Container fluid className={Styles.layout + " px-5"}>

                <Row>
                    <Col xxl={2} xl={0} lg={0} md={0} sm={0}>
                        <Sidebar locale={locale} />
                    </Col>
                    <Col xxl={10} xl={12} lg={12} md={12} sm={12} className={Styles.layoutSecond}>
                        <Row className='gy-4'>
                            <Col xl={12} lg={12} md={12} sm={12}>
                                <div className='d-flex justify-content-end gap-2 w-100'>
                                    <ButtonComp text='Import' className="secondButton" />
                                    <ButtonComp text='Add New User' onClick={() => {
                                        router.push(`/${locale}/carrier/workspace/addUser`)
                                    }} />
                                </div>
                            </Col>
                            <Col xxl={9} xl={9} lg={12} md={12} sm={12}>
                                <Row className='gy-4'>
                                    <Col xl={6} lg={6} md={12} sm={12}>
                                        <Row className='gy-4'>
                                            <Col xl={6} lg={6} md={6} sm={6}>
                                                <AddCard text="Total Employees" number={34} className={Styles.bgRed} locale={locale} onNavigate={() => {
                                                    router.push(`/${locale}/carrier/workspace/addUser`)
                                                }} />
                                            </Col>
                                            <Col xl={6} lg={6} md={6} sm={6}>
                                                <AddCard text="Total Departments" number={6} locale={locale} onNavigate={() => {
                                                    router.push(`/${locale}/carrier/workspace/departments`)
                                                }} />
                                            </Col>
                                            <Col xl={12} lg={12} md={12} sm={12}>
                                                <DepartmentCard />
                                            </Col>
                                            <Col xl={12} lg={12} md={12} sm={12}>
                                                <ConsignmentCard />
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xl={6} lg={6} md={12} sm={12}>
                                        <Row className='gy-4'>
                                            <Col xl={12} lg={12} md={12} sm={12}><OrderCard /></Col>
                                            <Col xl={12} lg={12} md={12} sm={12}><DriversAll locale={locale} /></Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xxl={3} xl={3} lg={12} md={12} sm={12}>
                                <TrackShippments title="Locate my Drivers" PlaceHolder="Search by Driver name" mapSize={228} />
                                <div className='mt-3'><HubCard text="Hubs" number={5} className={Styles.bgGreen} onClick={() => router.push(`/${locale}/carrier/workspace/hubCreation`)} /></div>
                                <div className='mt-3'><HubCard text="Distribution Center" number={129} className={Styles.bgBlue} onClick={() => router.push(`/${locale}/carrier/workspace/distributionCenter`)} /></div>
                                <div className='mt-3'><ButtonComp text='Assign Access Roles' className='blackButton w-100' onClick={() => {
                                    router.push(`/${locale}/carrier/workspace/accessRole`)
                                }} /></div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}

export default Page