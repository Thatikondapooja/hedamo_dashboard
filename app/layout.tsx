import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import RootLayoutClient from "@/components/layout/root-layout-client"
import "./globals.css"



export const metadata: Metadata = {
  title: "Hedamo - Product Transparency Dashboard",
  description: "AI-powered product transparency and management system",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <RootLayoutClient>{children}</RootLayoutClient>
        <Analytics />
      </body>
    </html>
  )
}
