import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const soraSans = Sora({
  subsets: ['latin'],
  display: 'swap',
}) 

export const metadata: Metadata = {
  title: "Illustration Based Portfolio Website Template",
  description: "Illustration Based Portfolio Website Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${soraSans.className} antialiased flex justify-center`}
      >
        {children}
      </body>
    </html>
  );
}
