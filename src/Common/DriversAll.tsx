"use client"
import React from 'react';
import Styles from "./common.module.css";
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const DriverCard = ({ name, deliveries, rating, imgUrl, locale }) => {
    const router = useRouter();
    return (
        <div className={Styles.driverCard}>
            <div className='d-flex gap-3 align-items-center'>
                <div className={Styles.driverImg}>
                    <Image src={imgUrl} alt={name} height={44} width={44} />
                    <span></span>
                </div>
                <div>
                    <p>{name}</p>
                    <div className='d-flex gap-4 align-items-center'>
                        <span>{deliveries} Deliveries</span>
                        <div className='d-flex align-items-center gap-2'>
                            <span>{rating}</span>
                            <i className="bi bi-star"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className={Styles.rightIcon} onClick={() => {
                router.push(`/${locale}/carrier/workspace/employeePreview`)
            }}><i className="bi bi-arrow-right"></i></div>
        </div>
    );
}

const DriversAll = ({ locale }) => {
    const drivers = [
        {
            name: 'Muzzambil Shaikh',
            deliveries: 13,
            rating: 4.6,
            imgUrl: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            name: 'Muzzambil Shaikh',
            deliveries: 13,
            rating: 4.6,
            imgUrl: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            name: 'Muzzambil Shaikh',
            deliveries: 13,
            rating: 4.6,
            imgUrl: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            name: 'Muzzambil Shaikh',
            deliveries: 13,
            rating: 4.6,
            imgUrl: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            name: 'Muzzambil Shaikh',
            deliveries: 13,
            rating: 4.6,
            imgUrl: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            name: 'Muzzambil Shaikh',
            deliveries: 13,
            rating: 4.6,
            imgUrl: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
    ];
    const router = useRouter();
    return (
        <div className={Styles.DriversAll}>
            <div className='d-flex justify-content-between align-items-center'>
                <h3 className='cursor-pointer' onClick={() => {
                    router.push(`/${locale}/carrier/workspace/employees`)
                }}>My Drivers</h3>
                <div className='cursor-pointer' onClick={() => {
                    router.push(`/${locale}/carrier/workspace/addUser`)
                }}>Add driver</div>
            </div>
            <div className={Styles.allDriverCard}>
                {drivers.map((driver, index) => (
                    <DriverCard
                        key={index}
                        name={driver.name}
                        deliveries={driver.deliveries}
                        rating={driver.rating}
                        imgUrl={driver.imgUrl}
                        locale={locale}
                    />
                ))}
            </div>
        </div>
    );
}

export default DriversAll;
