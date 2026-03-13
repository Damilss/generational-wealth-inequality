import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Generational Wealth Inequality",
  description:
    "Single-page multilingual argument layout for ENGL 133 on generational wealth inequality.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
