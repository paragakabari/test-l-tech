import React, { useState } from 'react';
import Styles from '../contract.module.css';
import TimelineResponsive from '@/Component/TimelineResponsive';
import TimelineCollapse from '@/Component/TimelineCollapse';



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
    },
    {
        status: 'Pick up 3',
        time: 'EST Time 05:40',
        description: 'Safa Cove, Al Bahrayn',
        details: 'Arab Mashreq Route 80M\n260 Km • 420 Km Covered',
        icon: '<div class="pickup"></div>',
        statusColor: '#596D92',
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

export const SectionHeader = ({ title, section, expandedSection, toggleSection }) => (
    <div className='d-flex justify-content-between align-items-center cursor-pointer' onClick={() => toggleSection(section)}>
        <h3>{title}</h3>
        <i className={`bi bi-chevron-down ${expandedSection === section ? Styles.expanded : ''}`}></i>
    </div>
);

const ProposalSummary = () => {
    const [expandedSection, setExpandedSection] = useState<string | null>(null);

    const toggleSection = (section: string) => {
        setExpandedSection(expandedSection === section ? null : section);
    };

    return (
        <div className={Styles.proposalSummary}>
            <h1 className={Styles.SummaryTitle}>Proposal Summary</h1>
            <div className={Styles.proposalSummaryHeader}>
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Profile" className={Styles.proposalSummaryProfilePic} />
                <div>
                    <h2>Nouf Mohammad</h2>
                    <p>driver@eprocure.com</p>
                </div>
            </div>
            <div className={Styles.proposalSummaryProposal}>
                <h3>PROPOSAL</h3>
                <p>
                    Dear [Company/Organisation Name],<br />
                    I am writing to express my interest in becoming a delivery driver for your consignment services.
                    With a strong commitment to safe and efficient delivery, I am confident in my ability to contribute
                    positively to your team.
                </p>
            </div>
            <div className={Styles.proposalSummarySection}>
                <SectionHeader title="DELIVERY TERMS" section="DELIVERY_TERMS" expandedSection={expandedSection} toggleSection={toggleSection} />
                {expandedSection === 'DELIVERY_TERMS' && (
                    <div className={`${Styles.proposalSummaryDelivery} ${Styles.proposalSummaryBody}`}>
                        <p className={Styles.Trailer}>Trailer Volvo FH 16, 2021</p>
                        <small>Suggested Vehicle</small>
                        <div className={Styles.proposalSummaryDeliveryDates}>
                            <div className='text-center'>
                                <strong>7 Aug, 2023</strong>
                                <p>Earliest Pick up</p>
                            </div>
                            <div className='text-center'>
                                <strong>02 Days</strong>
                                <p>Est Delivery Time</p>
                            </div>
                        </div>
                        <div className={Styles.Comments}>
                            <strong>Comments:</strong>
                            <p>3+ Years of Experience with long trips</p>
                        </div>
                    </div>
                )}
            </div>
            <div className={Styles.proposalSummarySection}>
                <SectionHeader title="ROUTE PREFERENCE" section="ROUTE_PREFERENCE" expandedSection={expandedSection} toggleSection={toggleSection} />
                {expandedSection === 'ROUTE_PREFERENCE' && (
                    <div className={`${Styles.proposalSummaryDocs} ${Styles.proposalSummaryBody}`}>
                        <div className='w-100'>
                            <TimelineCollapse title="Via Arab Mashreq Route" description="Recommended Route">
                                <TimelineResponsive events={eventsData} />
                            </TimelineCollapse>
                        </div>
                    </div>
                )}
            </div>
            <div className={Styles.proposalSummarySection}>
                <SectionHeader title="COST PREFERENCE" section="COST_PREFERENCE_1" expandedSection={expandedSection} toggleSection={toggleSection} />
                {expandedSection === 'COST_PREFERENCE_1' && (
                    <div className={`${Styles.proposalSummaryBody}`}>
                        <div className={Styles.borderBox}>
                            <div className={`${Styles.flexText} d-flex flex-wrap justify-content-between align-items-center`}>
                                <div>
                                    <h5>Base Fare (800 KM)</h5>
                                    <p>Preferred by Distance</p>
                                </div>
                                <h5>640,000 SAR</h5>
                            </div>
                        </div>
                        <div className={`${Styles.borderBox} mt-2`}>
                            <h5>Base Fare (800 KM)</h5>
                            <div className={`${Styles.flexText} d-flex flex-wrap justify-content-between align-items-center`}>
                                <h6>Insurance Cost:</h6>
                                <h6>200 SAR</h6>
                            </div>
                            <div className={`${Styles.flexText} d-flex flex-wrap justify-content-between align-items-center`}>
                                <h6>Dashcam Cost:</h6>
                                <h6>100 SAR</h6>
                            </div>
                            <div className={`${Styles.flexText} d-flex flex-wrap justify-content-between align-items-center`}>
                                <h6>Live Tracking Cost:</h6>
                                <h6>100 SAR</h6>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className={Styles.proposalSummarySection}>
                <SectionHeader title="UPLOADED DOCS" section="UPLOADED_DOCS" expandedSection={expandedSection} toggleSection={toggleSection} />
                {expandedSection === 'UPLOADED_DOCS' && (
                    <div className={`${Styles.proposalSummaryDocs} ${Styles.proposalSummaryBody}`}>
                        <div>
                            <div className={Styles.proposalSummaryDoc}></div>
                            <small className={Styles.docText}>hazardous LI.pdf</small>
                        </div>
                        <div>
                            <div className={Styles.proposalSummaryDoc}></div>
                            <small className={Styles.docText}>Insurance C.Doc</small>
                        </div>
                        <div>
                            <div className={Styles.proposalSummaryDoc}></div>
                            <small className={Styles.docText}>hazardous LI.pdf</small>
                        </div>
                    </div>
                )}
            </div>
            <div className={Styles.proposalSummarySection}>
                <SectionHeader title="COST PREFERENCE" section="COST_PREFERENCE_2" expandedSection={expandedSection} toggleSection={toggleSection} />
                {expandedSection === 'COST_PREFERENCE_2' && (
                    <div className={`${Styles.proposalSummaryBody}`}>
                        <div className={`${Styles.borderBox}`}>
                            <div className={`${Styles.flexText} d-flex flex-wrap justify-content-between align-items-center`}>
                                <h6>Total Service Cost:</h6>
                                <h6>640,000 SAR</h6>
                            </div>
                            <div className={`${Styles.flexText} d-flex flex-wrap justify-content-between align-items-center`}>
                                <h6>Tax (%):</h6>
                                <h6>10%</h6>
                            </div>
                            <div className={`${Styles.flexText} d-flex flex-wrap justify-content-between align-items-center`}>
                                <h6>Discount:</h6>
                                <h6>10%</h6>
                            </div>
                        </div>
                        <div className={`${Styles.borderBox} mt-2`}>
                            <div className={`${Styles.flexText} d-flex flex-wrap justify-content-between align-items-center`}>
                                <h6>Total Service Cost:</h6>
                                <h5>768,600 SAR</h5>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProposalSummary;
