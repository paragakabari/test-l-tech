import React from 'react';
import Styles from "./publishedInquiresOverviewTab.module.css";
import { Col, Row } from 'react-bootstrap';
import Image from 'next/image';

const userIcons = [
    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

export const UserIcons = () => (
    <div className={`${Styles.userIcon}`}>
        {userIcons.map((src, idx) => (
            <Image
                key={idx}
                src={src}
                height={40}
                width={40}
                alt=""
                style={{ marginLeft: idx === 0 ? "0" : "-10px" }}
            />
        ))}
    </div>
);

const ShipmentDetails = () => (
    <div className={Styles.OverviewBg}>
        <Row className='gy-4'>
            <Col lg={6} md={12}>
                <h1 className={Styles.overviewTitle}>Shipment Details</h1>
                <div className={Styles.shipmentBox}>
                    <div className={Styles.shipmentBoxDetails}>
                        <p>24/12/2023</p>
                        <p>6:45pm</p>
                        <small>Scheduled Pickup</small>
                    </div>
                    <span className='text-center'>4 Days</span>
                    <div className={Styles.shipmentBoxDetails}>
                        <p>24/12/2023</p>
                        <p>6:45pm</p>
                        <small>Scheduled Pickup</small>
                    </div>
                </div>
                <div className='d-flex gap-3 mt-3'>
                    <div className={Styles.shipmentBoxDetailsFlex}>
                        <p className='mb-2'>Value Insured</p>
                        <h6>Full</h6>
                    </div>
                    <div className={Styles.shipmentBoxDetailsFlex}>
                        <p className='mb-2'>Value of Shipment</p>
                        <h6>2994474 <span>SAR</span></h6>
                    </div>
                </div>
            </Col>
            <Col lg={6} md={12}>
                <h1 className={Styles.overviewTitle}>Value of Shipment</h1>
                <div className="d-flex flex-wrap gap-3" style={{ marginTop: '12px' }}>
                    {['Insurance', 'Dashcam', 'Weightiot', 'Tracking'].map((tag, idx) => (
                        <span key={idx} className={Styles.darkTag}>{tag}</span>
                    ))}
                </div>
                <div className={Styles.ConsignmentDetails}>
                    <h1 className={Styles.overviewTitle}>Value of Shipment</h1>
                    <p>Assorted Auto Spare Parts </p>
                    <p>4 Boxes </p>
                    <p>50 engine pistons </p>
                    <p>50 sets of brake pads </p>
                    <p>50 spark plugs </p>
                    <p>50 air filters</p>
                </div>
            </Col>
        </Row>
    </div>
);

const FileUploadBox = ({ fileName, fileSize }) => (
    <Col lg={4} md={6} sm={12}>
        <div className={Styles.fileUploadBox}>
            <h5>{fileName}</h5>
            <span>{fileSize}</span>
            <div className='d-flex justify-content-between align-items-end'>
                <small>View</small>
                <Image src="/pdf-icon.png" height={35} width={26} alt='' style={{ objectFit: "contain" }} />
            </div>
        </div>
    </Col>
);

const RecentBid = ({ src, company, date, transport, duration, price, oldPrice }) => (
    <div className='mt-3 d-flex justify-content-between align-items-center gap-2'>
        <div className='d-flex gap-2 align-items-center flex-wrap'>
            <div className={`${Styles.userIcon}`}>
                <Image src={src} height={45} width={45} alt="" />
            </div>
            <div>
                <p>{company}</p>
                <small>{date} • {transport} • {duration}</small>
            </div>
        </div>
        <div className='text-end'>
            <p className='fw-semibold'>{price}</p>
            <div className='d-flex align-items-center gap-2 justify-content-end'>
                <i className="bi bi-caret-down-fill" style={{ color: "#FF6A57" }}></i>
                <small>{oldPrice}</small>
            </div>
        </div>
    </div>
);

const
    Overview = () => {
        const fileUploads = [
            { fileName: "File name.pdf", fileSize: "44kb" },
            { fileName: "File name.pdf", fileSize: "44kb" },
            { fileName: "File name.pdf", fileSize: "44kb" }
        ];

        const recentBids = [
            {
                src: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                company: "SMSA",
                date: "15-03-2023",
                transport: "Road Transport",
                duration: "7 d",
                price: "SAR 9300",
                oldPrice: "SAR 9500"
            },
            {
                src: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                company: "SMSA",
                date: "15-03-2023",
                transport: "Road Transport",
                duration: "7 d",
                price: "SAR 9300",
                oldPrice: "SAR 9500"
            },
            {
                src: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                company: "SMSA",
                date: "15-03-2023",
                transport: "Road Transport",
                duration: "7 d",
                price: "SAR 9300",
                oldPrice: "SAR 9500"
            },
            {
                src: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                company: "SMSA",
                date: "15-03-2023",
                transport: "Road Transport",
                duration: "7 d",
                price: "SAR 9300",
                oldPrice: "SAR 9500"
            },
        ];

        return (
            <Row className='gy-4'>
                <Col lg={8} md={12}>
                    <Row className='gy-4'>
                        <Col md={12}>
                            <div className={Styles.OverviewBg}>
                                <Row className='gy-3'>
                                    <Col lg={12} className='d-flex justify-content-between gap-4 flex-wrap align-items-center'>
                                        <div>
                                            <small>EPF_23_RFQ0001</small>
                                            <p>Single Pick-up & Single Drop-off</p>
                                        </div>
                                        <div className='d-flex gap-3 align-items-center'>
                                            <UserIcons />
                                            <span className={Styles.tag}>Pending</span>
                                        </div>
                                    </Col>
                                    <Col lg={8} md={6}>
                                        <div className={`${Styles.OverviewBgModalTrackCard}`}>
                                            <div>
                                                <div className={Styles.bgTransplant}>
                                                    <div className={Styles.darkDot}></div>
                                                </div>
                                                <small>Sabt Aljarah</small>
                                                <h6>06, Sabt Aljarah 85486</h6>
                                            </div>
                                            <span></span>
                                            <div className='text-end'>
                                                <div className={`${Styles.bgTransplant} ms-auto`} style={{ background: '#E5E5FE' }}>
                                                    <i className="bi bi-geo-alt-fill" style={{ color: "#FF6A57" }}></i>
                                                </div>
                                                <small>Green Duba ,Jeddah</small>
                                                <h6>Multiple Locations</h6>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6} className='align-self-center'>
                                        <div className={`${Styles.OverviewDestText} d-flex justify-content-between align-items-center`}>
                                            <div className='text-center'>
                                                <p>Distance</p>
                                                <h5>800 kms</h5>
                                            </div>
                                            <div className='text-center'>
                                                <p>Timeline</p>
                                                <h5>7 Days</h5>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col md={12}>
                            <ShipmentDetails />
                        </Col>
                        <Col md={12}>
                            <div className={Styles.OverviewBg}>
                                <Row className='gy-4'>
                                    <Col lg={12}>
                                        <h1 className={Styles.overviewTitle}>Data Files</h1>
                                    </Col>
                                    {fileUploads.map((file, idx) => (
                                        <FileUploadBox key={idx} {...file} />
                                    ))}
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col lg={4} md={12}>
                    <Row className='gy-4'>
                        <Col lg={12}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463878.29488595825!2d46.82252880000001!3d24.725191849999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f02bf310de56f%3A0x4cfb2dc47de997ce!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1687342655205!5m2!1sen!2sus" width="100%" height="370" loading="lazy" className={Styles.map}></iframe>
                        </Col>
                        <Col lg={12}>
                            <div className={Styles.OverviewBg}>
                                <h1 className={Styles.overviewTitle}>Recent Bids</h1>
                                {recentBids.map((bid, idx) => (
                                    <RecentBid key={idx} {...bid} />
                                ))}
                                <div className='text-center mt-4'><p className='fs-6 cursor-pointer'>View All</p></div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    };

export default Overview;
