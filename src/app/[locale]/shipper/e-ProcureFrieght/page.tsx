"use client"
import React from 'react'
import Styles from "./e-ProcureFrieght.module.css"
import { Col, Container, Row } from 'react-bootstrap'
import AddCard from '@/Common/AddCard'
import OrderCard from '@/Common/OrderCard'
import PublicInquires from '@/Common/publicInquires'
import { ShipmentChart } from '@/Common/ShipmentChart'
import TrackShippments from '@/Common/TrackShippments'
import { useTranslations } from 'next-intl'
import { HeroSecond } from '@/Common/heroSecond'
import Sidebar from '@/Common/Sidebar'
import ButtonComp from '@/Component/Button'
import { useRouter } from 'next/navigation'
import BidsReceivedCard from '@/Common/BidsReceivedCard'
import SimpleCard from '@/Common/SimpleCard'

const Page = ({ params: { locale } }) => {
    const t = useTranslations("Index");
    const dataInquires = [
        {
            id: t("23423"),
            title: t("e-Procure"),
            location: t("Hittin_Riyadh"),
            category: t("Hardware"),
            weight: t("2_kg"),
            quantity: t("quantity"),
            totalWeight: t("totalWeight")
        },
        {
            id: t("23424"),
            title: t("Tech_Supply"),
            location: t("Olaya_Riyadh"),
            category: t("Electronics"),
            weight: t("1_5_kg"),
            quantity: t("300"),
            totalWeight: t("450_kg")
        },
        {
            id: t("23425"),
            title: t("Build_Corp"),
            location: t("Malaz_Riyadh"),
            category: t("Construction"),
            weight: t("3_kg"),
            quantity: t("200"),
            totalWeight: t("600_kg")
        },
        {
            id: t("23423"),
            title: t("e-Procure"),
            location: t("Hittin_Riyadh"),
            category: t("Hardware"),
            weight: t("2_kg"),
            quantity: t("quantity"),
            totalWeight: t("totalWeight")
        },
        {
            id: t("23424"),
            title: t("Tech_Supply"),
            location: t("Olaya_Riyadh"),
            category: t("Electronics"),
            weight: t("1_5_kg"),
            quantity: t("300"),
            totalWeight: t("450_kg")
        },
    ];
    const breadcrumb = [
        {
            'text': "Dashboard",
            'link': "/shipper/dashboard"
        },
        {
            'text': "E-ProcureFrieght",
            'link': '/'
        },
    ];
    const router = useRouter();
    return (
        <div className='position-relative'>
            <div className={Styles.secondDashBoard}>
                <HeroSecond BoldText='e-Procure Freight Dashboard' breadcrumb={breadcrumb} />

                <Container fluid className={Styles.layout + " px-5"}>
                    <Row>
                        <Col xxl={2} xl={0} lg={0} md={0} sm={0}>
                            <Sidebar locale={locale} shipper={true} />
                        </Col>
                        <Col xxl={10} xl={12} lg={12} md={12} sm={12} className={Styles.layoutSecond}>
                            <Row className="gy-4">
                                <Col lg={12}>
                                    <div className='d-flex justify-content-end gap-2 w-100'>
                                        <ButtonComp text='New Custom REP' onClick={() => router.push(`/${locale}/shipper/FreightManagement/createNewInquiry`)} />
                                    </div>
                                </Col>
                                <Col lg={12} md={12} sm={12} xl={9}>
                                    <Row className="gy-4">
                                        <Col lg={6} md={6} sm={12} xl={3}>
                                            <AddCard text="Published Inquires" number={13} className={Styles.bgRed} locale={locale} />
                                        </Col>
                                        <Col lg={6} md={6} sm={12} xl={3}>
                                            <AddCard text="Bids Received For inquiry Raised" number={5} locale={locale} />
                                        </Col>
                                        <Col lg={12} md={12} sm={12} xl={6}>
                                            <OrderCard />
                                        </Col>

                                        <Col lg={6} md={12} sm={12} xl={4}>
                                            <ShipmentChart />
                                        </Col>
                                        <Col lg={6} md={12} sm={12} xl={8} className='d-flex'>
                                            <BidsReceivedCard />
                                        </Col>
                                        <Col lg={12} md={12} sm={12}>
                                            <PublicInquires label="Public Inquires" data={dataInquires} />
                                        </Col>
                                        <Col lg={3} md={6} sm={12}>
                                            <SimpleCard title={4} description="Warehouses" onClick={() => router.push(`/${locale}/shipper/workspace/warehouses`)} />
                                        </Col>
                                        <Col lg={3} md={6} sm={12}>
                                            <SimpleCard title={8} description="RFPs Awarded" />
                                        </Col>
                                        <Col lg={3} md={6} sm={12}>
                                            <SimpleCard title={14} description="Verified Carriers" />
                                        </Col>
                                        <Col lg={3} md={6} sm={12}>
                                            <SimpleCard title={24} description="Contracts" />
                                        </Col>
                                    </Row>
                                </Col>
                                <Col lg={12} md={12} sm={12} xl={3}>
                                    <TrackShippments title={t("Track_Shippments")} PlaceHolder={t("Search_by_shipment")} mapSize={600} />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>

            </div >
        </div>
    )
}

export default Page