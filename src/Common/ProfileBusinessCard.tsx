import { SectionHeader } from '@/app/[locale]/carrier/orders/contract/contractTabComp/ProposalSummary';
import React, { useState } from 'react'
import Styles from "./common.module.css"
import Image from 'next/image';
const ProfileBusinessCard = () => {
    const [expandedSection, setExpandedSection] = useState<string | null>(null);

    const toggleSection = (section: string) => {
        setExpandedSection(expandedSection === section ? null : section);
    };
    return (
        <div className={Styles.BusinessProfileMain}>
            <h1>Business Profile</h1>
            <div className={Styles.crNumber}>
                CR Number: 099900
            </div>
            <SectionHeader title="Organization Details" section="ORGANIZATION_DETAILS" expandedSection={expandedSection} toggleSection={toggleSection} />
            {expandedSection === 'ORGANIZATION_DETAILS' && (
                <div className={Styles.sideDetails}>
                    <div>
                        <p>Company Name</p>
                        <span>Red Sea Logistics</span>
                    </div>
                    <div>
                        <p>Company Website</p>
                        <span>www.redsealogistics.sa</span>
                    </div>
                    <div>
                        <p>Company Email Id</p>
                        <span>info@redsealogistics.sa</span>
                    </div>
                    <div>
                        <p>Issue Date</p>
                        <span>Tulip Inn Downtown, Muscat, Oman Zip Code</span>
                    </div>
                    <hr className='opacity-5' />
                    <div>
                        <p>Business Types</p>
                        <span>Logistics</span>
                    </div>
                    <div>
                        <p>Activity Description</p>
                        <span>Logistics & Supply Chain</span>
                    </div>
                    <div>
                        <p>Company Address</p>
                        <span>1010 Red Sea Port, Jeddah, Saudi Arabia</span>
                    </div>
                    <div className={Styles.dateBox}>
                        <div className='text-center'>
                            <p>Issue Date</p>
                            <span>16-04-2023</span>
                        </div>
                        <div className='text-center'>
                            <p>Expiry Date</p>
                            <span>16-06-2024</span>
                        </div>
                    </div>

                </div>

            )
            }
            <SectionHeader title="Company KYC" section="COMPANY_KYC" expandedSection={expandedSection} toggleSection={toggleSection} />
            {
                expandedSection === 'COMPANY_KYC' && (
                    <div className={Styles.sideDetails}>
                        <div>
                            <p>Company Registration License</p>
                            <span>LI299302</span>
                        </div>
                        <div className=''>
                            <div className={Styles.docPreview}>
                                <Image src="/pdf-icon.png" alt="" height={30} width={30} />
                            </div>
                            <span>License.pdf</span>
                        </div>
                    </div>
                )
            }
            <SectionHeader title="Primary Contact Details" section="PRIMARY_CONTACT_DETAILS" expandedSection={expandedSection} toggleSection={toggleSection} />
            {
                expandedSection === 'PRIMARY_CONTACT_DETAILS' && (
                    <div className={Styles.sideDetails}>
                        <div>
                            <p>First Name</p>
                            <span>Aziz</span>
                        </div>
                        <div>
                            <p>Last Name</p>
                            <span>Ahmed</span>
                        </div>
                        <div>
                            <p>Date of Birth</p>
                            <span>20-07-2000</span>
                        </div>
                        <div>
                            <p>Gender</p>
                            <span>Male</span>
                        </div>
                        <div>
                            <p>Official Email Id</p>
                            <span>aziz.ahmed@redsealogistics.sa</span>
                        </div>
                        <div>
                            <p>Relationship with The Company</p>
                            <span>Driver</span>
                        </div>
                        <div>
                            <p>Contact Number</p>
                            <span>+1 884 373 4858</span>
                        </div>
                        <div>
                            <p>Company Head Office Address</p>
                            <span>1010 Red Sea Port, Jeddah, Saudi Arabia</span>
                        </div>
                    </div>
                )
            }
            <SectionHeader title="KYC Details" section="KYC_DETAILS" expandedSection={expandedSection} toggleSection={toggleSection} />
            {
                expandedSection === 'KYC_DETAILS' && (
                    <div className={Styles.sideDetails}>
                        <div>
                            <p>Driving License</p>
                            <span>Driving License Number: LI299302</span>
                        </div>
                        <div className=''>
                            <div className={Styles.docPreview}>
                                <Image src="/pdf-icon.png" alt="" height={30} width={30} />
                            </div>
                            <span>License.pdf</span>
                        </div>
                        <div>
                            <p>National Identity Card</p>
                            <span>National Identity Card: LI299302</span>
                        </div>
                        <div className=''>
                            <div className={Styles.docPreview}>
                                <Image src="/pdf-icon.png" alt="" height={30} width={30} />
                            </div>
                            <span>License.pdf</span>
                        </div>
                    </div>
                )
            }

        </div >
    )
}

export default ProfileBusinessCard