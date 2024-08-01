"use client";
import { HeroSecond } from "@/Common/heroSecond";
import Sidebar from "@/Common/Sidebar";
import ButtonComp from "@/Component/Button";
import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import Styles from "./manageContracts.module.css";
import { useRouter } from "next/navigation";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import Image from "next/image";

ChartJS.register(ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const barData = {
    labels: ['Apr', 'May', 'Jun'],
    datasets: [
        {
            label: 'Expired',
            data: [3, 2, 2],
            backgroundColor: '#2F9637',
            barThickness: 5,
        },
        {
            label: 'Active',
            data: [7, 3, 8],
            backgroundColor: '#FC6A57',
            barThickness: 5,
        },
    ],
};

const barOptions = {
    responsive: true,
    plugins: {
        legend: {
            display: true,
            // position: "bottom",

            labels: {
                usePointStyle: true,
                pointStyle: 'circle',
                padding: 20,
            },
        },
        tooltip: {
            enabled: true,
        },
    },
    scales: {
        x: {
            display: false,
            stacked: true,
            grid: {
                display: false,
            },
        },
        y: {
            display: false,
            stacked: true,
            beginAtZero: true,
            grid: {
                display: false,
            },
            ticks: {
                stepSize: 1,
            },
        },
    },
};

const data = {
    datasets: [
        {
            data: [4, 13],
            backgroundColor: ["#DDDDDD", "#fff"],
        },
    ],
};

const typeData = {
    datasets: [
        {
            data: [4, 13],
            backgroundColor: ["#6B255D", "#20B213"],
        },
    ],
};

const options = {
    cutout: "80%",
    maintainAspectRatio: true,
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
    },
};

const Page = ({ params: { locale } }) => {
    const breadcrumb = [
        {
            text: "Dashboard",
            link: "/shipper/dashboard"
        },
        {
            text: "Contracts",
            link: "/",
        },
    ];

    const contractData = [
        {
            contract: 'CN_786-01',
            cmp: 'DHL',
            rfq: 'RFQ_23_RFQ0001',
            duration: '15-10-2023',
            daysLeft: '30 DAYS',
            location: 'SPSD',
            from: 'Riyadh',
            to: 'Jeddah',
            activePOs: 18,
            activeInvoices: 5,
            deliveryType: 'Hazardous Fluids',
            contact: 'AB',
            contactColor: '#AB47BC',
            image: "https://images.unsplash.com/photo-1473445730015-841f29a9490b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            contract: 'CN_786-01',
            cmp: 'DHL',
            rfq: 'RFQ_23_RFQ0001',
            duration: '05-11-2023',
            daysLeft: '10 DAYS',
            location: 'SPMD',
            from: 'Riyadh',
            to: 'Hail, Yanbu',
            activePOs: 18,
            activeInvoices: 5,
            deliveryType: 'Hazardous Fluids',
            contact: 'MP',
            contactColor: '#FF7043',
            image: "https://images.unsplash.com/photo-1473445730015-841f29a9490b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            contract: 'CN_786-01',
            cmp: 'DHL',
            rfq: 'RFQ_23_RFQ0001',
            duration: '15-10-2023',
            daysLeft: '30 DAYS',
            location: 'SPSD',
            from: 'Riyadh',
            to: 'Jeddah',
            activePOs: 18,
            activeInvoices: 5,
            deliveryType: 'Hazardous Fluids',
            contact: 'TM',
            contactColor: '#009688',
            image: "https://images.unsplash.com/photo-1473445730015-841f29a9490b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            contract: 'CN_786-01',
            cmp: 'DHL',
            rfq: 'RFQ_23_RFQ0001',
            duration: '15-10-2023',
            daysLeft: '30 DAYS',
            location: 'SPSD',
            from: 'Taif',
            to: 'Jeddah',
            activePOs: 18,
            activeInvoices: 5,
            deliveryType: 'Hazardous Fluids',
            contact: 'YA',
            contactColor: '#673AB7',
            image: "https://images.unsplash.com/photo-1473445730015-841f29a9490b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }
    ];

    const router = useRouter();

    return (
        <div className="position-relative">
            <div className={Styles.secondDashBoard}>
                <HeroSecond BoldText="Manage Contracts" breadcrumb={breadcrumb} />
                <Container fluid className={`${Styles.layout} px-5`}>
                    <Row>
                        <Col xxl={2} xl={0} lg={0} md={0} sm={0}>
                            <Sidebar locale={locale} shipper={true} />
                        </Col>
                        <Col xxl={10} xl={12} lg={12} md={12} sm={12} className={Styles.layoutSecond}>
                            <Row className="gy-4">
                                <Col lg={12}>
                                    <div className="d-flex justify-content-end gap-2 w-100 flex-wrap">
                                        <div className={`${Styles.manageContractsHeader} position-relative`}>
                                            <input type="text" placeholder="Search by contract name" className={Styles.ManageContractsSearch} />
                                            <i className="bi bi-search"></i>
                                        </div>
                                        <ButtonComp text="Create New" onClick={() => router.push(`/${locale}/shipper/orderManagement/managePOs`)} />
                                    </div>
                                </Col>
                                <Col lg={12}>
                                    <Row className="gy-4">
                                        <Col lg={3} md={12} className="d-flex">
                                            <div className={Styles.ContractsCards}>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <h1 className="fw-normal">26</h1>
                                                    <div style={{ height: "60px", width: "60px" }}>
                                                        <Doughnut data={data} options={options} />
                                                    </div>
                                                </div>
                                                <p>Contracts</p>
                                                <div className="d-flex gap-5 row-gap-2 mt-4">
                                                    <div className="">
                                                        <h5>08</h5>
                                                        <span className="cursor-pointer" onClick={() => router.push(`/${locale}/shipper/FreightManagement/verifiedCarriers`)}>Active</span>
                                                    </div>
                                                    <div className="">
                                                        <h5>18</h5>
                                                        <span>Expired</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={6} md={12} className="d-flex">
                                            <div className={Styles.ContractsTypeCards}>
                                                <div className="d-flex gap-3 align-items-center justify-content-end mb-3">
                                                    <span>D</span>
                                                    <span className={Styles.ContractsTypeCardsActive}>W</span>
                                                    <span>M</span>
                                                    <span>Y</span>
                                                </div>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div>
                                                        <h1 className="fw-bold">TYPE</h1>
                                                        <div className="d-flex gap-3 align-items-center">
                                                            <div className={Styles.typeLabel} style={{ background: "#20B213" }}></div>
                                                            <p>Active</p>
                                                        </div>
                                                        <div className="d-flex gap-3 align-items-center">
                                                            <div className={Styles.typeLabel} style={{ background: "#6B255D" }}></div>
                                                            <p>Expired</p>
                                                        </div>
                                                    </div>
                                                    <div style={{ height: "125px", width: "125px" }}>
                                                        <Doughnut data={typeData} options={options} />
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={3} md={12} className="d-flex">
                                            <div className={`${Styles.ContractsTypeCards} ${Styles.ContractsTypeBarCards}`}>
                                                <h3>Sourcing Trend</h3>
                                                <div className="d-flex gap-3 align-items-center justify-content-end mb-3">
                                                    <span>Q1</span>
                                                    <span className={Styles.ContractsTypeCardsActive}>Q2</span>
                                                    <span>Q3</span>
                                                    <span>Q4</span>
                                                </div>
                                                <div className="d-flex justify-content-center align-items-center" style={{ height: '100px' }}>
                                                    <Bar data={barData} options={barOptions} />
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className={Styles.ManageContractsTitle}>
                                                <h1>Contracts</h1>
                                                <div className={Styles.filterButton}>
                                                    <p>Filter</p>
                                                    <i className="bi bi-filter"></i>
                                                </div>
                                            </div>
                                            <Table className={Styles.table} responsive>
                                                <thead className={Styles.ContractsTblHead}>
                                                    <tr>
                                                        <th className="align-middle">Contract Details</th>
                                                        <th className="text-center align-middle">Contract Duration</th>
                                                        <th className="text-center align-middle">Location</th>
                                                        <th className="text-center align-middle">From - To</th>
                                                        <th className="text-center align-middle">Active POs</th>
                                                        <th className="text-center align-middle">Active Invoices</th>
                                                        <th className="text-center align-middle">Delivery Item Type</th>
                                                        <th className="text-center align-middle">Contact Person</th>
                                                        <th className="text-center align-middle">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {contractData.map((contract, index) => (
                                                        <tr key={index}>
                                                            <td className="align-middle">
                                                                <div className={`${Styles.contractMain} d-flex gap-3 align-items-center`}>
                                                                    <div className={Styles.contractMainAvatar}>
                                                                        <Image src={contract.image} alt='' height={50} width={50} />
                                                                    </div>
                                                                    <div>
                                                                        <p className="fw-light">{contract.contract}</p>
                                                                        <p className="fs-6 fw-semibold">{contract.cmp}</p>
                                                                        <p>{contract.rfq}</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-center align-middle">
                                                                <div className={Styles.contractTbl}>
                                                                    <p className="text-nowrap">{contract.duration}</p><small className="text-nowrap">{contract.daysLeft}</small><p className="text-nowrap">{contract.duration}</p>
                                                                </div>
                                                            </td>
                                                            <td className="text-center align-middle">
                                                                <div className={Styles.locationTag}>{contract.location}</div>
                                                            </td>
                                                            <td className="text-center align-middle">
                                                                <div className={Styles.fromTo}>
                                                                    <div className="d-flex align-items-center gap-2">
                                                                        <i className="bi bi-geo-alt-fill"></i>
                                                                        <p>{contract.from}</p>
                                                                    </div>
                                                                    <span></span>
                                                                    <div className="d-flex align-items-center gap-2">
                                                                        <i className="bi bi-geo-alt-fill"></i>
                                                                        <p>{contract.to}</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-center align-middle">
                                                                <p className={Styles.activePOs}>{contract.activePOs}</p>
                                                            </td>
                                                            <td className="text-center align-middle">
                                                                <p className={Styles.activePOs}>
                                                                    {contract.activeInvoices}
                                                                </p>
                                                            </td>
                                                            <td className="text-center align-middle">{contract.deliveryType}</td>
                                                            <td className="text-center align-middle"><div className="d-flex flex-column align-items-center justify-content-center mx-auto" style={{ backgroundColor: contract.contactColor, color: 'white', borderRadius: '50%', textAlign: 'center', height: '41px', width: '41px' }}>{contract.contact}</div></td>
                                                            <td className="text-center align-middle cursor-pointer" onClick={() => router.push(`/${locale}/shipper/contract/contractTab`)} >...</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </Table>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Page;
