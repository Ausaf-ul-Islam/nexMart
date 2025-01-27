import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import { Toaster } from "react-hot-toast";
import SideBar from "@/components/SideBar";


const poppins = Poppins({
  subsets: ['latin'], // Choose the subset for better optimization
  weight: ['500', '700'], // Add the font weights you need
  style: ['normal', 'italic'], // Optional: specify styles
  display: 'swap', // Optional: specify `font-display`  
});

export const metadata: Metadata = {
  title: "NexMart E-commerce Web",
  description: "NexMart is an e-commerce web application built using Next.js, Sanity, Firebase",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={poppins.className}>
        <Layout>
          <Header />
          {children}
          <Footer />
          <SideBar/>
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: "#000000",
                color: "#FFFFFF",
              },
            }}
          />
        </Layout>
      </body>
    </html>
  );
}
