'use client'
import React, { useRef, useState } from 'react';
import { Button, Image, Modal } from "react-bootstrap";
import { useTranslations } from 'next-intl';
import styles from './CommonTable.module.css';

export enum ComponentViewContext {
  HorizontalView,
  BoxedView
}
interface DragDropUploadInterface {
  id?: string,
  name?: string,
  handleDrop: (e: File[]) => void;
  handleUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  viewContext?: ComponentViewContext,
  allowedFileTypes?: string,
  multiple?: boolean,
  maxFiles?: number,
  FileSize?: string
}

const DragDropFilePicker = ({
  id,
  name,
  handleDrop,
  FileSize,
  handleUpload,
  viewContext,
  allowedFileTypes,
  multiple = false,
  maxFiles = 1
}: DragDropUploadInterface) => {
  const t = useTranslations("Index");
  const [dragging, setDragging] = useState(false);
  const [showFileTypesNotSupportedModal, setShowFileTypesNotSupportedModal] = useState<boolean>(false);
  const [unsupportedFiles, setUnsupportedFiles] = useState<string[]>();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleLinkClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDropHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(false);
    let droppedFiles: FileList = event.dataTransfer.files,
      nonSupportedFiles: string[] = [],
      supportedFiles: File[] = [];
    if (allowedFileTypes && droppedFiles.length > 0) {
      Array.from(droppedFiles).forEach((file: any) => {
        let filename: string = file?.name,
          fileExtension: string | undefined = filename?.split(".").pop();
        if (fileExtension && allowedFileTypes.includes(fileExtension)) supportedFiles.push(file);
        else nonSupportedFiles.push(filename);
      });
      if (nonSupportedFiles.length > 0) {
        setUnsupportedFiles(nonSupportedFiles);
        setShowFileTypesNotSupportedModal(true);
      }
    }
    handleDrop(supportedFiles);
  }

  return (
    (ComponentViewContext.HorizontalView === viewContext) ?
      <div className={styles.customFileUpload}>
        <div className="d-flex justify-content-between align-items-center position-relative">
          <div
            className={`col-lg-6 ${styles.dragDropSection} ${dragging ? styles.dragging : ""}`}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={(e) => {
              e.preventDefault();
              handleDropHandler(e);
            }}
          >
            <div className="fs-7 text-black">{t("drag_drop")}</div>
            <div className="fw-light fs-9">
              {t("to_upload_file")}
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <span className={styles.verticalSpacer}>{t("or")}</span>
          </div>
          <div className={`col-lg-6 ${styles.browseFileSection}`}>
            <div className="fs-7 text-black">{t("browse_file")}</div>
            <div className="fw-light fs-9">
              <a
                href="#"
                className="text-primary"
                onClick={handleLinkClick}
              >
                {t("click_here")}
              </a>{" "}
              {t("to_upload")}
              <input
                id={id}
                className="d-none"
                name={name}
                multiple={multiple}
                ref={fileInputRef}
                type="file"
                accept={allowedFileTypes}
                onChange={(e) => {
                  setDragging(false);
                  handleUpload(e);
                }}
              />
            </div>
          </div>
        </div>
      </div> :
      <div className={styles.dragdropWrapper}>
        <div className="d-flex align-items-center position-relative gap-2">
          <div className='dragdrop-image'>
            <Image src={'/upload.svg'} alt={''} />
          </div>
          <div
            className={`d-flex ${dragging ? styles.dragging : ""}`}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={(e) => {
              e.preventDefault();
              handleDropHandler(e);
            }}
            onClick={handleLinkClick}
          >
            <div className={'ms-2'}>
              <div className="text-black fs-10 fw-bold cursor-pointer">{t("drag_files_click")}</div>
              <div className={styles.fileSize}>{FileSize}</div>
              {
                maxFiles === 5 &&
                <div className="text-black fw-light fs-10">{t("upload_five_files")}</div>
              }
            </div>
            <div className="fw-light">
              <input
                id={id}
                className="d-none"
                name={name}
                multiple={multiple}
                ref={fileInputRef}
                type="file"
                accept={allowedFileTypes}
                onChange={handleUpload}
              />
            </div>
          </div>
        </div>
        <Modal show={showFileTypesNotSupportedModal} onHide={() => setShowFileTypesNotSupportedModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>{t("type_not_allowed")}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{t("following_files_not_allowed")} <br />{unsupportedFiles?.join(',')}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowFileTypesNotSupportedModal(false)}>
              {t("close")}
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
  )
}

export default DragDropFilePicker;
