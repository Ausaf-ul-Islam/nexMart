import { Poppins } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import { Toaster } from "react-hot-toast";
import SideBar from "@/components/SideBar";
import Head from "next/head";  // Import Head from next/head

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export const metadata = {
  title: "NexMart | E-commerce Web",
  description: "NexMart is an e-commerce web application built using Next.js, Sanity, and Firebase. Explore a variety of products with seamless user experience and modern web technologies.",
  keywords: "NexMart, E-commerce, Next.js, Sanity, Firebase, Online Shopping, React",
  robots: "index, follow",
  openGraph: {
    title: "NexMart | E-commerce Web",
    description: "Discover NexMart, an advanced e-commerce web application featuring a wide range of products and a modern shopping experience powered by Next.js and Firebase.",
    type: "website",
    url: "https://nexmart.com",  // replace with your actual domain
    locale: "en_US",
    image: "./favicon.ico",  // replace with actual image URL
  },
  twitter: {
    card: "summary_large_image",
    title: "NexMart | E-commerce Web",
    description: "Explore NexMart's e-commerce platform for a seamless shopping experience with modern web technologies.",
    image: "https://nexmart.com/preview-image.png",  // replace with actual image URL
  },
  canonical: "https://nexmart.com",  // replace with your actual URL
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* Character Encoding */}
        <meta charSet="UTF-8" />

        {/* Responsive Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Title (SEO-Friendly) */}
        <title>{metadata.title}</title>

        {/* Meta Description (SEO-Friendly) */}
        <meta name="description" content={metadata.description} />

        {/* Meta Keywords */}
        <meta name="keywords" content={metadata.keywords} />

        {/* Robots Tag */}
        <meta name="robots" content={metadata.robots} />

        {/* Open Graph Tags */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:image" content={metadata.openGraph.image || "/default-image.png"} />
        <meta property="og:locale" content={metadata.openGraph.locale} />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.image || "/default-image.png"} />

        {/* Canonical Link */}
        <link rel="canonical" href={metadata.canonical} />

        {/* Favicons */}
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />

        {/* Google Site Verification */}
        <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE" />
      </Head>
      <body className={poppins.className}>
        <Layout>
          <Header />
          {children}
          <Footer />
          <SideBar />
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
