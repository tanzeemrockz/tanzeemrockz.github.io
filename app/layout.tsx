import type { Metadata } from "next"
import { DM_Sans, Geist_Mono } from "next/font/google"
import "./globals.css"

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans", weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], style: ["normal", "italic"] })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

export const metadata: Metadata = {
  title: "CyberSlayerCorpz - Indie Software Studio",
  description: "Fast-turnaround websites and digital systems for growing businesses.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
