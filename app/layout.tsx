import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "./component/Home/Navigation/ResponsiveNav";
import MobileNav from "./component/Home/Navigation/MobileNav";
import Footer from "./component/Home/Footer/Footer";
import ScrollToTop from "./component/Helper/ScrollToTop";

const font = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Investment template",
  description: "Investment template next js 14",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ResponsiveNav />
        {children}
        <Footer/>
        <ScrollToTop/>
      </body>
    </html>
  );
};














