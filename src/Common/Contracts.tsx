// Contracts.tsx
import React from "react";
import Link from "next/link";
import Styles from "./common.module.css";
import { ProgressBar } from "react-bootstrap";
import { useTranslations } from "next-intl";

export const ContractCard = ({ contract }: { contract: any }) => {
  const t = useTranslations("Index");
  return (
    <div className={Styles.ContractsCard}>
      <h1>{t(contract?.id)}</h1>
      <p>
        {contract?.shipments} {t("Shipments")} | {contract.days} {t("Days")}
      </p>
      <div className="d-flex gap-3 align-items-center mt-2">
        <ProgressBar now={contract.progress} />
        <span className="text-center text-nowrap">
          {contract.daysLeft} {t("days_left")}
        </span>
      </div>
    </div>
  );
};
export const ContractCardVertical = ({ contract, onClick }: { contract: any, onClick?: () => void }) => {
  const t = useTranslations("Index");
  return (
    <div className={`${Styles.ContractsCard} ${Styles.ContractsCardVertical} cursor-pointer`} onClick={onClick}>
      <div className={Styles.ContractsCardTextVertical}>
        <h1>{t(contract?.id)}</h1>
        <p>
          {contract?.shipments} {t("Shipments")} | {contract.days} {t("Days")}
        </p>
      </div>
      <div className="d-flex gap-3 align-items-center mt-2 w-100">
        <span className="text-center text-nowrap">
          {contract.daysLeft} {t("days_left")}
        </span>
        <ProgressBar now={contract.progress} />

      </div>
    </div>
  );
};
export const Contracts = ({ contractData }: { contractData: any }) => {
  const t = useTranslations("Index");
  return (
    <div className={Styles?.ContractsMain}>
      <div className="d-flex justify-content-between align-items-center">
        <h1>{contractData.length}{t("Contracts")}</h1>
        <Link href="">{t("ADD_NEW")}</Link>
      </div>
      <div className={Styles?.ContractsCardMain}>
        {contractData.map((contract: any) => (
          <ContractCard contract={contract} />
        ))}
      </div>
    </div>
  );
};
export const ContractsVertical = ({ contractData, AddNew = "", onClick }: { contractData: any, AddNew?: string, onClick?: () => void }) => {
  const t = useTranslations("Index");
  return (
    <div className={Styles?.ContractsMain}>
      <div className="d-flex justify-content-between align-items-center">
        <h1>{contractData.length}{t("Contracts")}</h1>
        <Link href={AddNew}>{t("ADD_NEW")}</Link>
      </div>
      <div className={Styles?.ContractsCardMain}>
        {contractData.map((contract: any) => (
          <ContractCardVertical contract={contract} onClick={onClick} />
        ))}
      </div>
    </div>
  );
};

