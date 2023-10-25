import Link from "next/link"
import React from "react"
import { GoArrowUpRight } from "react-icons/go"
import { twMerge } from "tailwind-merge"
import { Button } from ".."

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
        I&apos;m a Web Developer & open source contributor with a passion for
        creating innovative products. With over 4 years of experience, I&apos;ve
        built web apps and designed web pages for clients in US and India. My
        expertise extends beyond UI design and Full Stack development, as
        I&apos;m also learning DevOps, and system design, ensuring robust and
        well-rounded solutions for the market.
      </p>
      <Link
        className="font-medium hover:shadow-highlight-red-300 dark:hover:shadow-highlight-red-500 w-max"
        href="/about"
      >
        Know more...
      </Link>
      <div className="flex my-16 gap-8">
        <Link href="/blog">
          <Button>Blogs</Button>
          {/* <GoArrowUpRight className="text-xl" /> */}
        </Link>
        <Link target="_blank" href="https://2020.dewansh.space/">
          <Button arrow>Archive 2022</Button>
        </Link>
      </div>
    </div>
  )
}

export default Hero
