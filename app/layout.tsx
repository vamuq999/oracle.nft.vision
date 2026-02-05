import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OracleVision NFT Minter",
  description: "Mint OracleVision on Ethereum Mainnet.",
  applicationName: "OracleVision",
  keywords: ["OracleVision", "NFT", "Mint", "Ethereum", "Web3", "Voltara"],
  metadataBase: new URL("https://oraclenftvision.vercel.app"),
  openGraph: {
    title: "OracleVision NFT Minter",
    description: "A clean, prestige-grade mint portal for OracleVision.",
    url: "https://oraclenftvision.vercel.app",
    siteName: "OracleVision",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "OracleVision NFT Minter",
    description: "Mint OracleVision on Ethereum Mainnet."
  },
  icons: {
    icon: "/favicon.ico"
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#05070b"
};




export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
