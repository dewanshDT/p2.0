import { Layout } from "@/components"
import "./globals.css"
import type { Metadata } from "next"
import { Source_Code_Pro } from "next/font/google"
import clsx from "clsx"
import { AUTHOR_TWITTER_HANDLE, SITE_URL } from "@/lib/constants"

const sourceCodePro = Source_Code_Pro({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-source-code-pro",
})

export const metadata: Metadata = {
  robots: "index, follow",
  openGraph: {
    title: "Dewansh Thakur",
    description:
      "I'm a Web Developer & Designer. I build web apps, and design web applications for my clients in US and India.",
    type: "website",
    url: `${SITE_URL}`,
    images: `${SITE_URL}/icons/android-chrome-512x512.png`,
  },
  keywords: [
    "Dewansh Thakur",
    "Devansh",
    "Devansh Thakur",
    "Web Developer",
    "Thakur",
    "Dewanssh",
    "Devash",
  ],
  authors: [
    {
      name: "Dewansh Thakur",
      url: SITE_URL,
    },
  ],
  creator: "Dewansh Thakur",
  twitter: {
    card: "summary_large_image",
    title: "Dewansh Thakur",
    description:
      "I'm a Web Developer & Designer. I build web apps, and design web applications for my clients in US and India.",
    site: AUTHOR_TWITTER_HANDLE,
    creator: "@thakurdewansh",
    images: `${SITE_URL}/icons/android-chrome-512x512.png`,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "icons/favicon-16x16.png",
    apple: "icons/apple-touch-icon.png",
  },
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
