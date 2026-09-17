import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";


export const metadata: Metadata = {
  title: "Soundrich Hearing – Hearing Test & Hearing Solutions",
  description:
    "Get professional hearing care, hearing tests and personalized hearing solutions from Soundrich Hearing. Book a hearing test or speak to our team today.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header/>
        
        {children}
        
        <Footer/>
        </body>
    </html>
  );
}
