"use client";
import React, { FC } from "react";
import styles from "./common.module.css";

const ActiveTab: FC = () => <div className={`${styles.activeTabBorder} mt-2`} />;
const CheckImg = ({ locale }: { locale: string }) => (
  <div
    className={`d-flex position-absolute rounded-circle justify-content-center align-items-center ${styles.checkedImgMain} ${locale === "en" ? styles.translateMinus : styles.translatePlus}`}
  >
    <i className={`bi bi-check-lg ${styles.checkedImg}`}></i>
  </div>
);

interface TabProps {
  label: string;
  locale: string;
  isActive: boolean;
  isBorder: boolean;
}

const Tab: FC<TabProps> = ({ isBorder, label, isActive, locale }) => (
  <div className={`${styles.title} ${isActive ? styles.active : ""} position-relative`}>
    {isActive && <CheckImg locale={locale} />}
    {label}
  </div>
);

interface BusinessProfileTabLayoutProps {
  selectedTab: number[];
  currentTab: number;
}

export const BusinessProfileTab: FC<BusinessProfileTabLayoutProps> = ({ selectedTab, currentTab }) => {
  const tabs = [
    { key: 1, label: "Organisation Details" },
    { key: 2, label: "Company KYC" },
    { key: 3, label: "Primary Contact Details" },
    { key: 4, label: "KYC Documents" },
  ];

  return (
    <div className={`${styles.infoTabs} position-relative`}>
      <div className={`d-flex gap-5 ${styles.checkImgActive}`}>
        {tabs.map((tab) => (
          <Tab
            key={tab.key}
            locale={"en"}
            label={tab.label}
            isBorder={tab.key === currentTab}
            isActive={selectedTab.includes(tab.key)}
          />
        ))}
      </div>
    </div>
  );
};
