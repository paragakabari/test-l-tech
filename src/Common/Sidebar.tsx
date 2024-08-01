"use client";
import React, { useState } from "react";
import Styles from "./common.module.css";
import Link from "next/link";
import SidebarItem from "./SidebarItem";
import Image from "next/image";
import { useTranslations } from "next-intl";


const Sidebar = ({ locale, shipper = false }) => {
  const t = useTranslations("Index");
  const sidebarItems = [
    {
      title: "Orders Management",
      id: "Orders-Management",
      links: [
        { href: `/${locale}/carrier/orders/manageInquiriesSubmissions`, label: "Inquiries/ Submissions" },
        { href: `/${locale}/carrier/orders/contractManagement`, label: "Contracts" },
        { href: `/${locale}/carrier/orders/activeOrder`, label: "Active Orders" },
      ],
    },
    {
      title: "Fleet Management",
      id: "Fleet-Management",
      links: [
        { href: "", label: "Fleet" },
        { href: "", label: "Inspection" },
        { href: "", label: "Insurance" },
        { href: "", label: "Fuel" },
        { href: `/${locale}/carrier/fleet/hubs`, label: "Hub & Distribution Centre" },
      ],
    },
    {
      title: "Workspace Management",
      id: "Workspace-Management",
      links: [
        { href: `/${locale}/carrier/workspace/profileBusiness`, label: "Profile/Business" },
        { href: "", label: "Bank Setup" },
        { href: "", label: "User Management" },
        { href: "", label: "Manage Invoices" },
        { href: "", label: "Invoice Settings" },
        { href: "", label: "Platform Integration" },
        { href: "", label: "Subscription Management" },
      ],
    },
  ];
  const shipperSidebarItems = [
    {
      title: "Orders Management",
      id: "Orders-Management",
      links: [
        { href: `/${locale}/shipper/FreightManagement/publishedInquires`, label: "Manage Inquiries" },
        { href: `/${locale}/shipper/contract/manageContracts`, label: "Contracts" },
        { href: `/${locale}/shipper/FreightManagement/verifiedCarriers`, label: "Active Orders" },
      ],
    },
    {
      title: "Sourcing Management",
      id: "Sourcing-Management",
      links: [
        { href: `/${locale}/shipper/FreightManagement/publishedInquires`, label: "Manage RFQS" },
        { href: "", label: "Manage Proposals" },
        { href: `/${locale}/shipper/orderManagement/managePOs`, label: "Manage POs" },
        { href: "", label: "Manage Invoices" },
      ],
    },
    {
      title: "Workspace Management",
      id: "Workspace-Management",
      links: [
        { href: ``, label: "Profile/Business" },
        { href: "", label: "Bank Setup" },
        { href: "", label: "User Management" },
        { href: "", label: "Department" },
        { href: "", label: "Invoice Settings" },
        { href: "", label: "Platform Integration" },
        { href: `/${locale}/shipper/workspace/warehouses`, label: "Warehouse" },
      ],
    },
  ];
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const renderSidebarContent = () => (
    <div className={Styles.sidebarBody}>
      <Link href="">Dashboard</Link>
      {sidebarItems.map((item) => (
        <SidebarItem
          key={item.id}
          title={item.title}
          links={item.links}
          id={item.id}
        />
      ))}
      <Link href="">Logout</Link>
    </div>
  );
  const renderShipperSidebarContent = () => (
    <div className={Styles.sidebarBody}>
      <Link href="">Dashboard</Link>
      {shipperSidebarItems.map((item) => (
        <SidebarItem
          key={item.id}
          title={item.title}
          links={item.links}
          id={item.id}
        />
      ))}
      <Link href="">Logout</Link>
    </div>
  );

  console.log(shipper, "shipper");

  return (
    <>
      <i
        className={`bi bi-justify-right ${Styles.sidebarResponsiveIcon}`}
        onClick={toggleSidebar}
      ></i>
      <div className={Styles.sidebarMain}>
        <div className={Styles.sideHeader}>
          <div className={Styles.ImgIcon}>
            <Image src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" height={50} width={50} alt="" />
          </div>
          <div>
            <p>Mohammad Hussain</p>
            <span>Carrier Admin</span>
          </div>
        </div>
        {shipper ? (
          renderShipperSidebarContent()
        ) :
          renderSidebarContent()}
      </div>

      <div
        className={`${Styles.sidebar} ${isSidebarOpen ? Styles.open : ""}`}
        style={{ background: "#fff", paddingTop: "0px", zIndex: 999 }}
      >
        <div className={`${Styles.sideHeader} w-100 position-relative`}>
          <div
            className={Styles.closeBtn}
            onClick={toggleSidebar}
            style={{ top: "50%", transform: "translateY(-65%)" }}
          >
            <i
              className="bi bi-x-lg"
              style={{ color: "#000", fontSize: "20px" }}
            ></i>
          </div>
          <div className={Styles.ImgIcon}>
            <Image src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" height={50} width={50} alt="" />
          </div>
          <div>
            <p>{t("Mohammad_Hussain")}</p>
            <span>Carrier Admin</span>
          </div>
        </div>
        {shipper ? (
          renderShipperSidebarContent()
        ) :
          renderSidebarContent()}
      </div>
    </>
  );
};

export default Sidebar;
