"use client";
import React, { useState } from "react";
import Styles from "./addNewFleet.module.css";
import { HeroFirst } from "@/Common/heroFirst";
import {
    Col,
    Container,
    Row,
} from "react-bootstrap";
import ButtonComp from "@/Component/Button";
import FleetCard from "@/Common/FleetCard";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Page = ({ params: { locale } }) => {
    const router = useRouter();
    const breadcrumb = [
        { text: "Dashboard", link: "/carrier/dashboard-second" },
        { text: "Fleet", link: "/carrier/fleet/dashboard" },
        { text: "Add New Fleet", link: "/" },
    ];

    const types = [
        { name: "Long Haul", value: "long" },
        { name: "Small Vehicle - Local", value: "local" },
        { name: "Heavy Duty - Long Haul", value: "haul" },
    ];

    const brands = [
        { name: "Tata Motors", value: "tata", image: "https://i.pinimg.com/736x/a1/d5/af/a1d5afdace642c517d0cff0962a68679.jpg" },
        { name: "Volvo", value: "volvo", image: "https://i.pinimg.com/236x/69/d8/2e/69d82ee77bd68993db195bfb996f06c9.jpg" },
        { name: "Mahindra", value: "mahindra", image: "https://i.pinimg.com/736x/f2/2c/55/f22c552e14c6386c2ae424575db195d2.jpg" },
        { name: "Toyota", value: "toyota", image: "https://i.pinimg.com/736x/27/b7/de/27b7de9c188db33b73b49b79f9a9e99f.jpg" },
        { name: "Nissan", value: "nissan", image: "https://i.pinimg.com/736x/59/a5/26/59a526a3f6146549714f829936da41b4.jpg" },
        { name: "Mercedes Benz", value: "mercedes", image: "https://i.pinimg.com/736x/09/08/5d/09085dbe5d997954d49d53cd38a4f30d.jpg" },
        { name: "Eicher", value: "eicher", image: "https://i.pinimg.com/236x/0f/f1/b8/0ff1b8acfbc8559be650bf445699dceb.jpg" },
    ];

    const [selectedOptions, setSelectedOptions] = useState({
        vehicleType: "long",
        brand: "tata",
    });

    const handleOptionChange = (key, value) => {
        setSelectedOptions((prev) => ({ ...prev, [key]: value }));
    };

    return (
        <div>
            <HeroFirst BoldText="Add New Fleet" breadcrumb={breadcrumb} />
            <Container fluid className={`${Styles.layout} px-5`}>
                <Row className="gy-4">
                    <Col
                        xxl={9}
                        xl={9}
                        lg={12}
                        md={12}
                        sm={12}
                        className={Styles.layoutSecond}
                    >
                        <div className={Styles.whiteBg}>
                            <Row className="gy-4">
                                <Col xl={12}>
                                    <label className="com-label">Vehicle Type*</label>
                                    <div className={Styles.VehicleSelect}>
                                        {types.map(({ name, value }) => (
                                            <span
                                                key={value}
                                                className={`${selectedOptions.vehicleType === value ? Styles.selected : ""}`}
                                                onClick={() => handleOptionChange("vehicleType", value)}
                                            >
                                                {name}
                                            </span>
                                        ))}
                                    </div>
                                </Col>
                                <Col xl={12} lg={12}>
                                    <label className="com-label">Brand & Model of Vehicle*</label>
                                    <div className={Styles.BrandMain}>
                                        <div className={Styles.BrandSection}>
                                            {brands.map(({ name, value, image }) => (
                                                <div
                                                    key={value}
                                                    className={`${Styles.Brand} ${selectedOptions.brand === value ? Styles.SelectedBrand : ""}`}
                                                    onClick={() => handleOptionChange("brand", value)}
                                                >
                                                    <Image src={image} alt="" height={42} width={42} />
                                                    {selectedOptions.brand === value && (
                                                        <i className="bi bi-check-circle-fill"></i>
                                                    )}

                                                </div>
                                            ))}
                                        </div>
                                        <div className="form-group">
                                            <select className="form-control selectBox">
                                                <option value="">Others</option>
                                                <option value="">Option 1</option>
                                                <option value="">Option 2</option>
                                                <option value="">Option 3</option>
                                            </select>
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={6} md={12}>
                                    <div className="form-group">
                                        <label className="com-label">Model Make Year</label>
                                        <select className="form-control selectBox">
                                            <option value="">Select Model Make Year</option>
                                            <option value="">Option 1</option>
                                            <option value="">Option 2</option>
                                            <option value="">Option 3</option>
                                        </select>
                                    </div>
                                </Col>
                                <Col xl={6} md={12}>
                                    <div className="form-group">
                                        <label className="com-label">Select Model Subtype</label>
                                        <select className="form-control selectBox">
                                            <option value="">Select Model Subtype</option>
                                            <option value="">Option 1</option>
                                            <option value="">Option 2</option>
                                            <option value="">Option 3</option>
                                        </select>
                                    </div>
                                </Col>
                                <Col
                                    xl={12}
                                    className="d-flex justify-content-between align-items-center flex-wrap gap-2"
                                >
                                    <ButtonComp text="Back" className="outlineButton" />
                                    <ButtonComp text="Proceed Next" onClick={() => router.push(`/${locale}/carrier/fleet/VehicleBasicDetails`)} />
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col xxl={3} xl={3} lg={12} md={12} sm={12} className="d-flex">
                        <FleetCard />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Page;
