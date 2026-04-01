import type { Metadata } from "next";
import { Geist_Mono, Nunito_Sans, Slabo_27px } from "next/font/google";
import "./globals.css";
import Main from "@/components/Main";
import Navbar from "@/components/Navbar";

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const slabo27px = Slabo_27px({
    variable: "--font-slabo-27px",
    weight: "400",
    subsets: ["latin"],
});

const nunitoSans = Nunito_Sans({
    variable: "--font-nunito-sans",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "MBMT",
    description: "Montgomery Blair Math Tournament",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${geistMono.variable} ${slabo27px.variable} ${nunitoSans.variable} h-full antialiased`}
        >
            <body className="min-h-full flex flex-col">
                <Navbar />
                <Main>{children}</Main>
            </body>
        </html>
    );
}
