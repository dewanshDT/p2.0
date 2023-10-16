import Link from "next/link"
import React from "react"
import { ShuffleText } from ".."

const Hero = () => {
  return (
    <div className="hero flex flex-col gap-4 w-full h-screen justify-center">
      <h5 className="text-lg tracking-widest uppercase dark:text-neutral-300">
        Hello there, I&apos;m
      </h5>
      <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold uppercase">
        Dewansh Thakur
      </h1>
      <p className="text-lg tracking-widest uppercase dark:text-neutral-300 max-w-5xl">
        I&apos;m a Web Developer & Designer with a passion for creating
        innovative products. With over 4 years of experience, I&apos;ve built
        web apps and designed web pages for clients in US and India. My
        expertise extends beyond UI design and web development, as I excel in
        DevOps, full-stack development, and system design, ensuring robust and
        well-rounded solutions for the market.
      </p>
      <div className="flex my-16 gap-8">
        <Link
          className="font-semibold hover:shadow-highlight-red-300 dark:hover:shadow-highlight-red-500"
          href="/blog"
        >
          Blogs
        </Link>
        <Link
          className="font-semibold hover:shadow-highlight-red-300 dark:hover:shadow-highlight-red-500"
          target="_blank"
          href="https://2020.dewansh.space/"
        >
          Archive 2020
        </Link>
      </div>
    </div>
  )
}

export default Hero
