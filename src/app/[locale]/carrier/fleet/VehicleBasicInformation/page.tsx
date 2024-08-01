"use client";
import React, { useState } from "react";
import Styles from "./VehicleBasicInformation.module.css";
import { HeroFirst } from "@/Common/heroFirst";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { useRouter } from "next/navigation";
import VehicleBasicInformationCard from "@/Common/VehicleBasicInformationCard";
import Overview from "@/Component/VehicleInfoComponent/Overview";
import Fuel from "@/Component/VehicleInfoComponent/Fuel";
import Meter from "@/Component/VehicleInfoComponent/Meter";
import Service from "@/Component/VehicleInfoComponent/Service";
import Inspection from "@/Component/VehicleInfoComponent/Inspection";
import Issues from "@/Component/VehicleInfoComponent/Issues";
import Expense from "@/Component/VehicleInfoComponent/Expense";
import Location from "@/Component/VehicleInfoComponent/Location";

const Page = ({ params: { locale } }) => {
  const [changeNav, setChangeNav] = useState("Overview");

  const router = useRouter();
  const breadcrumb = [
    { text: "Dashboard", link: "/carrier/dashboard-second" },
    { text: "Fleet Management", link: '/carrier/fleet/dashboard' },
    { text: "Manage Fleet", link: "/" },
  ];
  const vehicleInfo = {
    idleTime: "13 Mins",
    vehicleImage:
      "https://images.unsplash.com/photo-1591768793355-74d04bb6608f?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    driverImage:
      "https://images.unsplash.com/photo-1626565244872-206f4c1f9e57?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    vehicleInfo: "Trailer Volvo FH 16, 2021",
    status: "MOVING",
    rating: "4.1",
    driver: {
      image:
        "https://images.unsplash.com/photo-1626565244872-206f4c1f9e57?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Nouf Mohammad",
      contact: "+1 677 5883 735",
    },
    speedInfo: {
      runtime: "800",
      maxSpeed: "80",
      avgSpeed: "35",
    },
    distanceCovered: "10,000",
  };
  return (
    <div className="position-relative">
      <HeroFirst
        BoldText="Vehicle Name Logic: Max Payload"
        Description="(XD7234—2022-BENZ-2334-23423445)"
        breadcrumb={breadcrumb}
        action={true}
      />
      <Container fluid className={`${Styles.layout} px-5`}>
        <Row className="gy-4">
          <Col xxl={2} xl={3} lg={4} md={12} sm={12} className={Styles.proMain}>
            <VehicleBasicInformationCard {...vehicleInfo} />
          </Col>

          <Col
            xxl={10}
            xl={9}
            lg={8}
            md={12}
            sm={12}
            className={`empTab ${Styles.empTab}`}
          >
            <Row>
              <Col sm={12}>
                <Nav variant="underline" className={Styles.tabKey}>
                  {[
                    "Overview",
                    "Fuel",
                    "Meter",
                    "Service",
                    "Inspection",
                    "Issues",
                    "Expense",
                    "Location",
                  ].map((key) => (
                    <Nav.Item key={key} onClick={() => setChangeNav(key)}>
                      <Nav.Link eventKey={key} className={`${Styles.navLink} `}>
                        {key
                          .split("-")
                          .map(
                            (word) =>
                              word.charAt(0).toUpperCase() + word.slice(1)
                          )
                          .join(" ")}
                      </Nav.Link>
                    </Nav.Item>
                  ))}
                </Nav>
              </Col>
            </Row>
            <Row>
              <Col sm={12}>
                {changeNav === "Overview" && <Overview />}
                {changeNav === "Fuel" && <Fuel />}
                {changeNav === "Meter" && <Meter />}
                {changeNav === "Service" && <Service />}
                {changeNav === "Inspection" && <Inspection />}
                {changeNav === "Issues" && <Issues />}
                {changeNav === "Expense" && <Expense />}
                {changeNav === "Location" && <Location />}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Page;
