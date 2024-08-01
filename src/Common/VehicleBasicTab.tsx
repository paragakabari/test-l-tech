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
  currentTab: number;
  index: number
}

const Tab: FC<TabProps> = ({ index, isBorder, label, isActive, locale, currentTab }) => (
  <div className={`${styles.title} ${isActive ? styles.active : ""} position-relative`}>
    {currentTab >= index && <CheckImg locale={locale} />}
    {label}
  </div>
);

interface BusinessTabLayoutProps {
  selectedTab: number[];
  currentTab: number;
}

export const VehicleBasicTab: FC<BusinessTabLayoutProps> = ({ selectedTab, currentTab }) => {
  const tabs = [
    { key: 1, label: "Basic Details" },
    { key: 2, label: "Specifications" },
    { key: 3, label: "Financial Details" },
    { key: 4, label: "Insurance" },
    { key: 5, label: "Service Details" },
    { key: 6, label: "Photos & Docs" },
    { key: 7, label: "Additional Info" },
  ];



  return (
    <div className={`${styles.infoTabs} position-relative`}>
      <div className={`d-flex gap-5 ${styles.checkImgActive}`}>
        {tabs.map((tab, i) => (
          <Tab
            key={tab.key}
            locale={"en"}
            index={i + 1}
            label={tab.label}
            isBorder={tab.key === currentTab}
            currentTab={currentTab}
            isActive={selectedTab.includes(tab.key)}
          />
        ))}
      </div>
    </div>
  );
};
