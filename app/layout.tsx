import { Oswald } from "next/font/google";
import NavBar from "@/components/Navbar";
import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";

// Ensure metadata is server-side
export const metadata: Metadata = {
  title: "Harsh Interior",
  description: "An Interior Company",
};

const oswald = Oswald({
  weight: ["200", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-oswald",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={oswald.variable}>
      <body className="bg-white font-sans antialiased">
        <NavBar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
