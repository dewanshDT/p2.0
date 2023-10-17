import Link from "next/link"
import React from "react"
import { GoArrowUpRight } from "react-icons/go"
import { twMerge } from "tailwind-merge"

interface Props extends React.HtmlHTMLAttributes<HTMLDivElement> {}

const Hero: React.FC<Props> = (props) => {
  return (
    <div
      {...props}
      className={twMerge(
        "hero flex flex-col gap-4 w-full min-h-screen justify-center",
        props.className,
      )}
    >
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
      <Link
        className="font-medium hover:shadow-highlight-red-300 dark:hover:shadow-highlight-red-500 w-max"
        href="/about"
      >
        Know more...
      </Link>
      <div className="flex my-16 gap-8">
        <Link
          className="px-4 py-2 gap-3 flex items-end border-red-500 border-2"
          href="/blog"
        >
          <span>Blogs</span>
          {/* <GoArrowUpRight className="text-xl" /> */}
        </Link>
        <Link
          className="px-4 py-2 gap-3 flex items-end border-red-500 border-2"
          target="_blank"
          href="https://2020.dewansh.space/"
        >
          Archive 2022
          <GoArrowUpRight className="text-xl" />
        </Link>
      </div>
    </div>
  )
}

export default Hero
