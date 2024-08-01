"use client"
import React, { useState } from 'react';
import Styles from "./common.module.css";
import Link from 'next/link';
import { Fade } from 'react-bootstrap';

const SidebarItem = ({ title, links, id }) => {
    const [open, setOpen] = useState(true);

    return (
        <div className={`${Styles.subLink} subLink`}>
            <div
                className='d-flex gap-2 justify-content-between flex-row ' style={{ cursor: 'pointer' }}
                onClick={() => setOpen(!open)}
                aria-controls={id}
                aria-expanded={open}
            >
                <p>{title}</p>
                <i className={`bi ${open ? 'bi-chevron-up' : 'bi-chevron-down'}`}></i>
            </div>
            <Fade in={open} className={Styles.subLinkMain}>
                <div id={id}>
                    {links.map((link, index) => (
                        <Link key={index} href={link.href}>{link.label}</Link>
                    ))}
                </div>
            </Fade>
        </div>
    );
};

export default SidebarItem;
