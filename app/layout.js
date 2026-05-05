import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Yogi Trianto | IT Engineer",
  description: "Portfolio of Yogi Trianto, an IT Engineer specializing in System, Automation & Monitoring.",
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
