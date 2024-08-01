import React from 'react'
import Styles from "../contract.module.css"
import { Col, Row } from 'react-bootstrap'
import TimelineCollapse from '@/Component/TimelineCollapse'
import Timeline from '@/Component/Timeline'
import ButtonComp from '@/Component/Button'

const eventsData = [
    {
        status: 'Pick up',
        time: '11:30 AM',
        description: 'Shamsi Port, Bahar AI Jameel',
        details: 'Arab Mashreq Route 80M\n00 Km/Hr • 00 Km Covered',
        icon: '<i class="bi bi-geo-alt-fill"></i>',
        statusColor: '#5088E7',
    },
    {
        status: 'Pick up 2',
        time: 'EST Time 02:40',
        description: 'Mirage Plaza, Rub Al Khali',
        details: 'Arab Mashreq Route 80M\n160 Km • 160 Km Covered',
        icon: '<div class="pickup"></div>',
        statusColor: '#596D92',
        resolvedCard: true,
        buttonText: "Consignment #24",
    },
    {
        status: 'Pick up 3',
        time: 'EST Time 05:40',
        description: 'Safa Cove, Al Bahrayn',
        details: 'Arab Mashreq Route 80M\n260 Km • 420 Km Covered',
        icon: '<div class="pickup"></div>',
        statusColor: '#596D92',
        resolvedCard: true,
        buttonText: "Consignment #24",
    },
    {
        status: 'Destination',
        time: 'EST Time 07:30 PM',
        description: 'Sunflower Valley, Wadi Al Malak',
        details: 'Arab Mashreq Route 80M\n360 Km • 780 Km Covered',
        icon: '<i class="bi bi-geo-alt-fill"></i>',
        statusColor: '#FF6A57',

    },
];
const RoutePreference = ({ handleSaveAndExit }) => {
    return (
        <div className={Styles.formContainer}>

            <Row className="gy-4">
                <Col lg={12} className="mb-3">
                    <h1>Select your Route Preference</h1>
                </Col>

                <Col lg={12}>
                    <div className="d-flex flex-column gap-3">
                        <TimelineCollapse title="Via Arab Mashreq Route" description="Recommended Route">
                            <Timeline events={eventsData} />
                        </TimelineCollapse>
                        <TimelineCollapse title="Via Azraq Oasis Route" description="Route 2">
                            <Timeline events={eventsData} />
                        </TimelineCollapse>
                        <TimelineCollapse title="Via Azraq Oasis Route" description="Route 2">
                            <Timeline events={eventsData} />
                        </TimelineCollapse>
                    </div>
                </Col>
                <div className="d-flex justify-content-end mt-3">
                    <ButtonComp
                        text="Add Route"
                        className="px-5"
                        onClick={handleSaveAndExit}
                    />
                </div>
            </Row>
        </div>
    )
}

export default RoutePreference