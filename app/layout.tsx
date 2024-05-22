import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Container } from "react-bootstrap";
import "./globals.css";
import NavLink from "./ui/nav-link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Email App",
  description: "Designed by Love",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavLink />
        <Container>
          {children}
        </Container>
      </body>
    </html>
  );
}
