import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "CyberSlayerCorpz — Digital Engineering",
  description: "Fast-turnaround websites and digital systems for growing businesses.",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 500 500%22><rect width=%22500%22 height=%22500%22 rx=%22100%22 fill=%22%2318181B%22/><g stroke-width=%2216%22 stroke-linecap=%22square%22><polygon points=%22250,110 360,180 360,320 250,390 140,320 140,180%22 stroke=%22%23FFFFFF%22 fill=%22none%22/><path d=%22M 250 110 V 250 M 360 180 L 250 250 M 140 180 L 250 250%22 stroke=%22%23A1A1AA%22 stroke-width=%2210%22 fill=%22none%22/></g></svg>",
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
