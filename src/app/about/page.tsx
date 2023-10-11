import Image from "next/image"
import React from "react"
import me from "../../../public/me.jpeg"
import { FaXTwitter } from "react-icons/fa6"
import Link from "next/link"
import { AUTHOR_TWITTER_HANDLE } from "@/lib/constants"
import { FaInstagram, FaLinkedinIn } from "react-icons/fa"
import { AiOutlineMail } from "react-icons/ai"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About: Dewansh",
  description: "About Dewansh Thakur",
}

const about = () => {
  return (
    <div className="flex flex-col mt-10 w-full px-4 max-w-6xl">
      <div className="text-xl font-bold text-neutral-400 dark:text-neutral-700 uppercase tracking-widest">
        About
      </div>
      <div className="flex flex-col sm:mx-4 my-6">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex p-2 border-dashed border-neutral-300 dark:border-neutral-800 border-2 w-max sm:w-auto sm:mr-auto md:mr-0">
            <Image
              src={me}
              alt="Dewansh Thakur picture"
              width={300}
              height={300}
            />
          </div>
          <div className="flex flex-col gap-1">
            <div className="h1 text-2xl sm:text-4xl font-light">
              Dewansh Singh Thakur
            </div>
            <h2 className="text-red-500 font-semibold">Full Stack Developer</h2>
            <p className="text-sm font-medium mt-4 dark:text-neutral-300 text-neutral-700  max-w-sm">
              I&apos;m a software engineer based in India. I&apos;m currently
              contributing to open source technologies.
            </p>
            <div className="mt-6 flex gap-2">
              <Link
                href="mailto:dewansh.dt@gmail.com"
                target="_blank"
                aria-label="click to email Dewansh"
              >
                <div className="p-2 text-neutral-800 dark:text-neutral-200 dark:bg-neutral-800 bg-neutral-300  cursor-pointer">
                  <AiOutlineMail />
                </div>
              </Link>
              <Link
                href={AUTHOR_TWITTER_HANDLE}
                target="_blank"
                aria-label="Dewansh's twitter handle"
              >
                <div className="p-2 text-neutral-800 dark:text-neutral-200 dark:bg-neutral-800 bg-neutral-300  cursor-pointer">
                  <FaXTwitter />
                </div>
              </Link>
              <Link
                href="https://www.linkedin.com/in/dewanshthakur/"
                target="_blank"
                aria-label="Dewansh's linkedIn profile"
              >
                <div className="p-2 text-neutral-800 dark:text-neutral-200 dark:bg-neutral-800 bg-neutral-300  cursor-pointer">
                  <FaLinkedinIn />
                </div>
              </Link>
              <Link
                href="https://www.instagram.com/dewanshthakur_/"
                target="_blank"
                aria-label="Dewansh's Instagram profile"
              >
                <div className="p-2 text-neutral-800 dark:text-neutral-200 dark:bg-neutral-800 bg-neutral-300  cursor-pointer">
                  <FaInstagram />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default about
