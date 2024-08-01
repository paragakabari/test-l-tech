import React, { useState } from 'react'
import Styles from "./CommonTable.module.css"
const TimelineCollapse = ({ children, title, description }: { children: React.ReactNode, description: string, title: string }) => {
    const [show, setShow] = useState(true);
    return (
        <div className={Styles.customAcc}>
            <div className={`${Styles.customAccHeader} cursor-pointer`} onClick={() => setShow(!show)}>
                <div className="d-flex align-items-center gap-3">
                    <div className="d-block">
                        <div className={Styles.TemplateCheckBox}>
                            <i className="bi bi-check2"></i>
                        </div>
                    </div>
                    <div>
                        <p>{title}</p>
                        <small>{description}</small>
                    </div>
                </div>
                {show ? (
                    <i className="bi bi-chevron-up cursor-pointer"></i>
                ) : (
                    <i className="bi bi-chevron-down cursor-pointer"></i>
                )}

            </div>
            {show &&
                <div className={Styles.customAccBody}>
                    {children}
                </div>
            }
        </div>
    )
}

export default TimelineCollapse