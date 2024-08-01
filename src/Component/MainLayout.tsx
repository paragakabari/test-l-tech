"use client";

import Header from "@/Common/Header";
import { usePathname } from "@/navigation";
import React, { useEffect } from "react";

const MainLayout = ({ children, locale }) => {
    const pathname = usePathname();
    const avoidHeaderFoot = [];

    const reveal = () => {
        const reveals = document.querySelectorAll(".reveal");

        reveals.forEach((element) => {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 10;

            if (elementTop < windowHeight - elementVisible) {
                element.classList.add("active");
            } else {
                element.classList.remove("active");
            }
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", reveal);

        return () => {
            window.removeEventListener("scroll", reveal);
        };
    }, []);
    return (
        <div
        >
            {!avoidHeaderFoot.includes(pathname) && <Header locale={locale} />}
            {children}
        </div>
    );
};

export default MainLayout;
