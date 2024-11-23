import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";

import "../globals.css";
import NavBar from "@/components/NavBar";
import ToasterProvider from "@/lib/providers/ToasterProvider";

export const metadata: Metadata = {
  title: "WinPC Shop",
  description: "WinPC Ecommerce Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ClerkProvider>
          <ToasterProvider />
          <NavBar />
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
