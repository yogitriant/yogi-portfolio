import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Yogi Trianto | IT Officer",
  description: "Portfolio of Yogi Trianto, an IT Officer specializing in Technical Support, System Monitoring, Automation, Quality Assurance & AI-Driven Development.",
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
