import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const orbitron = Orbitron({ subsets: ["latin"], variable: '--font-orbitron' });

export const metadata: Metadata = {
  metadataBase: new URL('https://cybertech-solutions.vercel.app'),
  title: {
    default: "CyberTech Solutions | Future of IT",
    template: "%s | CyberTech Solutions"
  },
  description: "CyberTech Solutions provides cutting-edge Web Development, App Development, UI/UX Design, and AI Solutions. Empowering businesses with futuristic digital experiences.",
  keywords: ["IT Company", "Web Development", "App Development", "UI/UX Design", "AI Solutions", "CyberTech", "Software Agency"],
  authors: [{ name: "CyberTech Team" }],
  creator: "CyberTech Solutions",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cybertech-solutions.vercel.app",
    title: "CyberTech Solutions | Future of IT",
    description: "Futuristic IT Solutions for the Modern World. Web, Mobile, AI, and Design.",
    siteName: "CyberTech Solutions",
    images: [
      {
        url: "/icon.png", // Uses the favicon as OG image for now, ideally should be a larger banner
        width: 800,
        height: 600,
        alt: "CyberTech Solutions Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CyberTech Solutions | Future of IT",
    description: "Futuristic IT Solutions for the Modern World.",
    images: ["/icon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Chatbot from "../components/Chatbot";
import CyberCursor from "../components/animations/CyberCursor";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${orbitron.variable}`}>
        <CyberCursor />
        <Navbar />
        {children}
        <Chatbot />
        <Footer />
      </body>
    </html>
  );
}
