import React from "react"
import Image from "next/image"
import Link from "next/link"

import { Metadata } from "next"
import { FaXTwitter } from "react-icons/fa6"
import { AUTHOR_TWITTER_HANDLE } from "@/lib/constants"
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa"
import { AiOutlineMail } from "react-icons/ai"

import me from "../../../public/me.jpg"
import CursorHighlight from "@/components/core/CursorHighlight"
import { GoArrowUpRight } from "react-icons/go"

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
          <div className="flex p-2 border-dashed border-neutral-300 dark:border-neutral-700 border-2 w-max sm:w-auto sm:mr-auto md:mr-0">
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
              <CursorHighlight>
                <Link
                  href="mailto:me@dewansh.space"
                  target="_blank"
                  aria-label="click to email Dewansh"
                >
                  <div className="p-2 text-neutral-800 dark:text-neutral-200 dark:bg-neutral-800 bg-neutral-300">
                    <AiOutlineMail />
                  </div>
                </Link>
              </CursorHighlight>
              <CursorHighlight>
                <Link
                  href="https://github.com/dewanshDT"
                  target="_blank"
                  aria-label="Dewansh's GitHub"
                >
                  <div className="p-2 text-neutral-800 dark:text-neutral-200 dark:bg-neutral-800 bg-neutral-300">
                    <FaGithub />
                  </div>
                </Link>
              </CursorHighlight>
              <CursorHighlight>
                <Link
                  href={AUTHOR_TWITTER_HANDLE}
                  target="_blank"
                  aria-label="Dewansh's twitter handle"
                >
                  <div className="p-2 text-neutral-800 dark:text-neutral-200 dark:bg-neutral-800 bg-neutral-300">
                    <FaXTwitter />
                  </div>
                </Link>
              </CursorHighlight>
              <CursorHighlight>
                <Link
                  href="https://www.linkedin.com/in/dewanshthakur/"
                  target="_blank"
                  aria-label="Dewansh's linkedIn profile"
                >
                  <div className="p-2 text-neutral-800 dark:text-neutral-200 dark:bg-neutral-800 bg-neutral-300">
                    <FaLinkedinIn />
                  </div>
                </Link>
              </CursorHighlight>
              <CursorHighlight>
                <Link
                  href="https://www.instagram.com/dewanshthakur_/"
                  target="_blank"
                  aria-label="Dewansh's Instagram profile"
                >
                  <div className="p-2 text-neutral-800 dark:text-neutral-200 dark:bg-neutral-800 bg-neutral-300">
                    <FaInstagram />
                  </div>
                </Link>
              </CursorHighlight>
            </div>
            <CursorHighlight className="w-max font-semibold mt-4">
              <Link
                href="resume.pdf"
                target="_blank"
                className="flex items-end gap-1"
              >
                <span>Résumé</span>
              </Link>
            </CursorHighlight>
          </div>
        </div>
      </div>
    </div>
  )
}

export default about
