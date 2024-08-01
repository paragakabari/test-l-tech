import React from "react";
import Styles from "./common.module.css";
import { Col, Row } from "react-bootstrap";
import Breadcrumbs from "@/Component/Breadcrumbs";
export const HeroSecond = ({

  BoldText = "",
  FirstLink = "",
  SecondLink = "",
  breadcrumb = []
}: {
  Title?: string;
  BoldText?: string;
  Description?: string;
  FirstLink?: string;
  SecondLink?: string;
  breadcrumb?: any
}) => {

  return (
    <div className={`${Styles.heroMain} ${Styles.heroSecond}`}>
      <div className={`${Styles.heroPadding} ${Styles.heroPaddingSecond} container-fluid px-5`}>
        <Row className="justify-content-end">
          <Col xxl={10} xl={12} lg={12} md={12} sm={12} >

            <Breadcrumbs breadcrumbArray={breadcrumb} />

            <h1>{BoldText}</h1>
          </Col>
        </Row>
      </div>
    </div >
  );
};
