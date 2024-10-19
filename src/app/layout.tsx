import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import { getLocale, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import Contact from "@/components/contact/contact";
import Testimonials from "@/components/testimonials/testimonials";

// Import Swiper styles
import "swiper/css";
import { pageMetadata } from "../../constants";

const DMSansItalic = localFont({
  src: "./fonts/DMSans-Italic-VariableFont_opsz,wght.ttf",
  variable: "--font-dm-sans-italic",
  weight: "400 700",
});

const DMSans = localFont({
  src: "./fonts/DMSans-VariableFont_opsz,wght.ttf",
  variable: "--font-dm-sans",
  weight: "400 700",
});

const Ultra = localFont({
  src: "./fonts/Ultra-Regular.ttf",
  variable: "--font-ultra",
  weight: "400",
});

const Oswald = localFont({
  src: "./fonts/Oswald-VariableFont_wght.ttf",
  variable: "--font-oswald",
  weight: "300 400 700",
});

export const metadata: Metadata = {
  title: pageMetadata.home.title,
  description: pageMetadata.home.description,
  keywords: pageMetadata.home.keywords,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${Ultra.variable} ${DMSansItalic.variable} ${DMSans.variable} ${Oswald.variable} antialiased flex flex-col justify-between min-h-screen`}
      >
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
          <Testimonials />
          <Contact />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
