import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Yogi Trianto | Fullstack Developer Portfolio",
  description: "Portfolio of Yogi Trianto, a passionate Fullstack Developer specializing in React, Node.js, and Enterprise Solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-grid`}>
        {children}
      </body>
    </html>
  );
}
