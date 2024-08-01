import type { Metadata } from "next";
import { Lexend_Deca, Tajawal } from "next/font/google";
import "./globals.css";
import Header from "@/Common/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css"
import 'keen-slider/keen-slider.min.css'
import { ReactNode } from "react";
import { NextIntlClientProvider, useMessages } from "next-intl";
import MainLayout from "@/Component/MainLayout";

const Lexend = Lexend_Deca({
  subsets: ['latin'],
})
const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ['200', '300', '400', '500', '700', '800', '900']
});
export const metadata: Metadata = {
  title: "Logist-Tech",
  description: "Logist-Tech is a web application that allows users to create and manage procurement requests.",
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: ReactNode;
  params: {
    locale: string;
  };
}>) {
  const messages = useMessages();

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <head>
        <link rel="manifest" href="manifest.json" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={locale === "ar" ? tajawal.className : Lexend.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <MainLayout locale={locale}>{children}</MainLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
