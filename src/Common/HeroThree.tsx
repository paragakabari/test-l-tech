import React from "react";
import Styles from "./common.module.css";
import { Col, Row } from "react-bootstrap";
import Breadcrumbs from "@/Component/Breadcrumbs";
export const HeroThree = ({

  BoldText = "",
  FirstLink = "",
  SecondLink = "",
  breadcrumb = [],
  Description =""
}: {
  Title?: string;
  BoldText?: string;
  Description?: string;
  FirstLink?: string;
  SecondLink?: string;
  breadcrumb?: any;
}) => {

  return (
    <div className={`${Styles.heroMain} ${Styles.heroSecond}`}>
      <div className={`${Styles.heroPadding}  container-fluid px-5 pb-4`}>
        <Row className="justify-content-end">
          <Col xxl={12} xl={12} lg={12} md={12} sm={12} >

            <Breadcrumbs breadcrumbArray={breadcrumb} />
            <h1>{BoldText}</h1>
            <p>{Description}</p>
          </Col>
        </Row>
      </div>
    </div >
  );
};
