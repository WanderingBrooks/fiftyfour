import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "When is the next 54 leaving?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
