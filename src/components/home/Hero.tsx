import Link from "next/link"
import React from "react"

const Hero = () => {
  return (
    <div className="flex flex-col gap-4">
      <h5 className="text-lg tracking-widest uppercase dark:text-neutral-300">
        👋 hello there, I&apos;m
      </h5>
      <h1 className="text-4xl sm:text-8xl font-bold ">Dewansh Thakur</h1>
      <h1 className="hidden">My alternate name is Devansh Thakur</h1>
      <p className="text-lg tracking-widest uppercase dark:text-neutral-300 max-w-4xl">
        I&apos;m a Web Developer & Designer with a passion for creating
        innovative products. With over 4 years of experience, I&apos;ve built
        web apps and designed web pages for clients in the US and India. My
        expertise extends beyond UI design and web development, as I excel in
        DevOps, full-stack development, and system design, ensuring robust and
        well-rounded solutions for the market.
      </p>
      <div className="flex my-16 gap-6">
        <Link
          className="font-semibold hover:shadow-highlight-red-300 dark:hover:shadow-highlight-red-500"
          href="/blog"
        >
          Blogs
        </Link>
        <Link
          className="font-semibold hover:shadow-highlight-red-300 dark:hover:shadow-highlight-red-500"
          href="/blog"
        >
          Archive 2020
        </Link>
      </div>
    </div>
  )
}

export default Hero
