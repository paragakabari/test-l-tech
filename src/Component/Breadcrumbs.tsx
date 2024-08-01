'use client'
import React from 'react';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';

interface IBreadcrumbs {
  breadcrumbArray: BreadCrumbArray[]
}

type BreadCrumbArray = {
  text: string,
  link: string
}
const Breadcrumbs = ({ breadcrumbArray }: IBreadcrumbs) => {
  const bread = useTranslations("bread");
  return (
    <div className="heading-wrapper position-relative">
      <nav className='breadcrumb-divider' aria-label="breadcrumb">
        <ol className="breadcrumb">
          {
            breadcrumbArray?.map((breadcrumb: BreadCrumbArray, index: number) => {
              return ((index + 1 === breadcrumbArray.length) ?
                <li key={index} className="breadcrumb-item text-white active"
                  aria-current="page">{breadcrumb.text}</li>
                :
                <li key={index} className="breadcrumb-item">
                  <Link href={breadcrumb.link} className='p-0 text-white'>{breadcrumb.text}</Link>
                </li>
              )
            })
          }
        </ol>
      </nav>
    </div>
  )
}

export default Breadcrumbs;