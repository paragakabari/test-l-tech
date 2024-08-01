"use client"
import React, { useState } from "react";
import Styles from "./common.module.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { shortenName } from '@/Utils/utilies';
const Header = ({ locale }: { locale: string }) => {
  const route = useRouter();
  const pathname = usePathname();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };


  const languageChange = () => {

    const newLocale = locale === "en" ? "ar" : "en";
    const pathParts = pathname.split("/").filter((part) => part && part !== "en" && part !== "ar");
    const newPath = `/${newLocale}/${pathParts.join("/")}`;
    route.push(newPath);
  };
  const fullPath = pathname?.split("/carrier");
  const currentRoute = fullPath[fullPath?.length - 1].split("/")[1]
  const t = useTranslations("Index");

  return (
    <div className={Styles.HeaderMain}>
      <div className="container-fluid">
        <div className="col-12 d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-5">
            <Image
              src="/WhiteLogo-Logist-Tech.svg"
              alt=""
              width={150}
              height={50}
            />
            <div className={`d-flex gap-4 ${Styles.links}`}>
              <Link href={`/${locale}/carrier/dashboard`} className={`${currentRoute === "dashboard" ? Styles.active : ""}`}>
                {t("Dashboard")}

              </Link>
              <Link href={`/${locale}/carrier/orders/manageInquiriesSubmissions`} className={`${currentRoute === "orders" ? Styles.active : ""}`}>{t("Orders")}</Link>
              <Link href={`/${locale}/carrier/fleet/dashboard`} className={`${currentRoute === "fleet" ? Styles.active : ""}`}>{t("Fleet")}</Link>
              <Link href={`/${locale}/carrier/workspace/dashboard`} className={`${currentRoute === "workspace" ? Styles.active : ""}`}>{t("Workspace")}</Link>
              <Link href={`/${locale}/carrier/track-now`} className={`${currentRoute === "track-now" ? Styles.active : ""}`}>{t("Track_Now")}</Link>
            </div>
          </div>
          <div className={`d-flex gap-4 align-items-center ${Styles.respHeader}`}>
            <div className="d-flex align-items-center gap-2 pointer" onClick={languageChange}>
              <i className="bi bi-globe-americas"></i>
              <p className="pointer mb-0" >
                {locale == "en" ? "EN" : "عربي"}
              </p>
            </div>
            <i className="bi bi-bell"></i>
            <span className={Styles.span}></span>
            <div className={Styles.info}>
              <h6>{t("Mohmmad_Hussain")}</h6>
              <p>{t("Carrier_Admin")}</p>
            </div>
            <div className={Styles.UserIcon}>MH</div>
            <div className={Styles.responsiveMenuIcon} onClick={toggleSidebar}>
              <i className="bi bi-list"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Off-canvas sidebar */}
      <div className={`${Styles.sidebar} ${isSidebarOpen ? Styles.open : ""} mt-0 pt-0`}>
        <div className={Styles.sidebarContent}>
          <div className={Styles.sidebarContentHeader}>
            <Image
              src="/WhiteLogo-Logist-Tech.svg"
              alt=""
              width={150}
              height={50}
            />
            <i className={`${Styles.closeBtn} ${Styles.closeBtnSidebar} bi bi-x-lg`} onClick={toggleSidebar}></i>
          </div>
          <Link href={`/${locale}/carrier/dashboard`} className={`${currentRoute === "dashboard" ? Styles.active : ""}`}>
            {t("Dashboard")}
          </Link>
          <Link href={`/${locale}/carrier/orders/manageInquiriesSubmissions`} className={`${currentRoute === "orders" ? Styles.active : ""}`}>{t("Orders")}</Link>
          <Link href={`/${locale}/carrier/fleet/dashboard`} className={`${currentRoute === "fleet" ? Styles.active : ""}`}>{t("Fleet")}</Link>
          <Link href={`/${locale}/carrier/workspace/dashboard`} className={`${currentRoute === "workspace" ? Styles.active : ""}`}>{t("Workspace")}</Link>
          <Link href={`/${locale}/carrier/track-now`} className={`${currentRoute === "track-now" ? Styles.active : ""}`}>{t("Track_Now")}</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
