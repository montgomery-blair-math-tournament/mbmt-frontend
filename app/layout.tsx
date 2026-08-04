import { Geist, Geist_Mono, Nunito_Sans, Slabo_27px, Outfit, Oxanium } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";

const oxaniumHeading = Oxanium({subsets:['latin'],variable:'--font-heading'});

const outfit = Outfit({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

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

export const metadata = {
    title: "MBMT",
    description: "Montgomery Blair Math Tournament",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning className={cn("font-sans", outfit.variable, oxaniumHeading.variable)}>
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${slabo27px.variable} ${nunitoSans.variable} antialiased`}
                suppressHydrationWarning
            >
                <div className="min-h-screen w-full flex flex-col font-nunito-sans">
                    <Navbar />
                    <main className="flex flex-col flex-1 bg-background">
                        {children}
                    </main>
                </div>
            </body>
        </html>
    );
}
