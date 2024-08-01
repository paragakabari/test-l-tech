// components/Card.tsx

import React from "react";
import Styles from "./common.module.css";
import Image from "next/image";

type CardProps = {
    rec: any;
    isFooter?: any;
};
const Card: React.FC<CardProps> = ({ rec, isFooter = false }) => {
    console.log(isFooter, "isFooter");

    return (
        <div className={Styles.card}>
            <div className={Styles.departmentsCardHeader}>
                <div className="d-flex gap-3">
                    <div className={Styles.avatar}> SM </div>
                    <div>
                        <span className={Styles.departmentName}>{rec?.name}</span>
                        <small className={Styles.smallText}>{rec?.createdOn}</small>
                        <small className={Styles.smallText}>{rec?.doj}</small>
                    </div>
                </div>
                <i className="bi bi-three-dots-vertical"></i>
            </div>
            {isFooter ? (
                <div className={Styles.departmentsCardFooter}>
                    <div className={Styles.userIcon}>
                        <Image
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            height={40}
                            width={40}
                            alt=""
                        />
                        <Image
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            height={40}
                            width={40}
                            alt=""
                            style={{ marginLeft: "-10px" }}
                        />
                        <div>11+</div>
                    </div>
                    <div className="">
                        <span className={Styles.noMembers}>{rec?.members} Members</span>{" "}
                        <br />
                        <span className={Styles.addMembers}>Add Members</span>
                    </div>
                </div>
            ) : (
                <div className={Styles.departmentsCardFooter}>
                    <div>
                        <div className={Styles.lastLogin}>Last Login:</div>
                        <div className={Styles.lastLogin}>10 hours ago 2:10 PM</div>
                    </div>
                    <div className="text-end">
                        <div className={Styles.departmentNameText}>{rec?.department}</div>
                        <div className={Styles.changeDepartment}>Change</div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Card;
