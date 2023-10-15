import { Layout } from "@/components"
import "./globals.css"
import type { Metadata } from "next"
import { Source_Code_Pro } from "next/font/google"
import clsx from "clsx"

const sourceCodePro = Source_Code_Pro({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-source-code-pro",
})

export const metadata: Metadata = {
  robots: "index, follow",
  other: {
    "google-site-verification": "RC9v78jTGJ9wP1PKUT0phmL6C_iuWQz9rd-iPIP1NaI",
    "google-bot": "index, follow",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={clsx(
          sourceCodePro.className,
          sourceCodePro.variable,
          "dark:bg-black bg-white dark:text-white",
        )}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
