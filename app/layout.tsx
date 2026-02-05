import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OracleVision — NFT Minter",
  description: "Mint OracleVision on Ethereum Mainnet.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
