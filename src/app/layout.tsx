import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from './components/Navigation'
import { ThemeProvider } from './components/ThemeProvider'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arishith Pakalapati - Full Stack Developer",
  description: "Portfolio of Arishith Pakalapati - Java Full Stack Developer with 3+ years of experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}>
        <ThemeProvider>
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
