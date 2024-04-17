import { ClerkProvider } from "@clerk/nextjs"
import type { Metadata } from "next"
import { IBM_Plex_Sans } from "next/font/google"
import { cn } from "../lib/utils"
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
    // Pass the appearance to the ClerkProvider component
    <ClerkProvider
      appearance={{
        variables: { colorPrimary: "#624cf5" },
      }}
    >
      <html lang="en">
        <body className={cn("font-IBMPlex antialiased", IBMPLEX.variable)}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
