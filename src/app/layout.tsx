import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { IBM_Plex_Sans } from "next/font/google"
import "./globals.css"

const IBMPLEX = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex",
})

export const metadata: Metadata = {
  title: "Photo Editor AI",
  description: "Edit your photos with AI",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn("font-IBMPlex antialiased", IBMPLEX.variable)}>
        {children}
      </body>
    </html>
  )
}
