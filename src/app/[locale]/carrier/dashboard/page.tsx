"use client";
import { HeroFirst } from "@/Common/heroFirst";
import React from "react";
import Styles from "./dashboard.module.css";
import FirstEmployee from "@/Common/FirstEmployee";
import FirstVehicle from "@/Common/FirstVehicle";
import HelpCard from "@/Common/HelpCard";
import { useKeenSlider } from "keen-slider/react";
import PublicInquires from "@/Common/publicInquires";
import { InvitationsReceivedCard } from "@/Common/InvitationsReceivedCard";
import RfqCard from "@/Common/RfqCard";
import StepsFollow from "@/Common/StepsFollow";
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslations } from "next-intl";
import RfqVerticalChart from "@/Common/RfqVerticalChart";

const Page = ({ params: { locale } }) => {
  const t = useTranslations("Index");
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free",
    slides: { perView: 2.5, spacing: 15 },
    breakpoints: {
      '(max-width: 900px)': {
        slides: { perView: 1.5, spacing: 15 },
      },
      '(max-width: 768px)': {
        slides: { perView: 1, spacing: 10 },
      },

    },
  });

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

  const stepsFollowData = [
    {
      title: t("SF1"),
      description: t("SFF1"),
      src: "/adduser.png"
    },
    {
      title: t("SF2"),
      description: t("SFF2"),
      src: "/addusers.png"
    },
    {
      title: t("SF3"),
      description: t("SFF3"),
      src: "/truck.png"
    },
    {
      title: t("SF4"),
      description: t("SFF4"),
      src: "/bank.png"
    },
    {
      title: t("SF5"),
      description: t("SFF5"),
      src: "/thumb.png"
    }
  ];
  return (
    <div className={Styles.dashboard}>
      <HeroFirst
        Title={t("heroText1")}
        BoldText={t("heroText2")}
        Description={t("heroText3")}
      />
      <Container fluid className={Styles.layout + " px-5"}>
        <Row className="gy-4">
          <Col lg={12} md={12} sm={12} xl={9}>
            <Row className="gy-4">
              <Col lg={12} md={12}>
                <div ref={ref} className="keen-slider">
                  <div className="keen-slider__slide d-flex">
                    <FirstEmployee span={t("LetsBy")} title={t("AddingDetails")} linkName={t("ADD_EMPLOYEE")} />
                  </div>
                  <div className="keen-slider__slide d-flex"><FirstVehicle /></div>
                  <div className="keen-slider__slide d-flex"><HelpCard /></div>
                </div>
              </Col>
              <Col lg={12} md={12}>
                <PublicInquires data={dataInquires} label={t("Public_Inquires")} />
              </Col>
              <Col lg={3} md={6} sm={12}>
                <InvitationsReceivedCard />
              </Col>
              <Col lg={9} md={6} sm={12} className="d-flex">
                <RfqVerticalChart />
              </Col>
            </Row>
          </Col>
          <Col lg={12} md={12} sm={12} xl={3}>
            <StepsFollow data={stepsFollowData} locale={locale} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Page;
