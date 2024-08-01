import React from "react";
import Styles from "./common.module.css";
import Breadcrumbs from "@/Component/Breadcrumbs";
export const HeroFirst = ({
  Title = "",
  BoldText = "",
  Description = "",
  breadcrumb = [],
  action = false,
  onClick
}: {
  Title?: string;
  BoldText?: string;
  Description?: string;
  breadcrumb?: any;
  action?: boolean;
  onClick?: () => void;
}) => {
  return (
    <div className={Styles.heroMain}>
      <div className={`${Styles.heroPadding} container-fluid px-5`}>
        <div className="row">
          <div className="col-12 position-relative">
            <Breadcrumbs breadcrumbArray={breadcrumb} />
            <p>{Title}</p>
            <h1>{BoldText}</h1>
            <p>{Description}</p>
            {action &&
              <div className='action-Button' onClick={onClick}>
                <i className="bi bi-three-dots"></i>
                <p>Actions</p>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
};
