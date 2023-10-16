import { Hero } from "@/components"
import { SITE_URL } from "@/lib/constants"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Dewansh Thakur: Full Stack Developer & Designer",
  description:
    "I'm a Web Developer & Designer. I build web apps, and design web applications for my clients in US and India.",
}

export default function Home() {
  return (
    <div className="flex min-h-screen max-w-6xl w-full px-4 flex-col">
      <Hero />
      <span className="text-neutral-400">
        &#47;&#47; work in progress, check back often!
      </span>
    </div>
  )
}
