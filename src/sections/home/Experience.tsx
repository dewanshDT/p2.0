"use client"

import React from "react"
import clsx from "clsx"
import { useScroll, motion, useTransform } from "framer-motion"
import { twMerge } from "tailwind-merge"
import Link from "next/link"
import { CursorHighlight } from "@/components"

const experiences: {
  title: string
  start: string
  end: string
  company: string
  tags: string[]
  description: string
  link: string
}[] = [
  {
    title: "Full Stack Developer",
    start: "april 2023",
    end: "present",
    company: "The Research School",
    link: "https://theresearchschool.com",
    tags: [
      "ui/ux",
      "next.js",
      "django",
      "postgresql",
      "aws",
      "stripe",
      "tailwind",
      "typescript",
      "open ai api",
    ],
    description:
      "Made an educational platform for the company, this focuses Research students and is able to conduct webinars, solve research exam questions using AI, and can index best research papers on a given topic.",
  },
  {
    title: "Google Summer of Code Contributor",
    start: "may 2023",
    end: "september 2023",
    link: "https://editor.p5js.org",
    company: "Processing Foundation, New York",
    tags: [
      "ui/ux",
      "react",
      "express",
      "webpack",
      "styled components",
      "sass",
      "testing",
    ],
    description:
      "Worked on the p5.js web editor open source project, enabling it to work across all the mobile devices. developed a new UI for the editor and refactored the old code to latest versions",
  },
  {
    title: "Full Stack Developer",
    start: "may 2022",
    end: "september 2022",
    link: "https://ayuryuj.com",
    company: "Ayuryuj",
    tags: [
      "next.js",
      "mongo db",
      "postgresql",
      "aws",
      "razorpay",
      "tailwind",
      "typescript",
      "agora",
    ],
    description:
      "Build a platform capable of online consultation for doctors with patients through custom agora implementation in next js, along with a fully capable online store for medicines.",
  },
  {
    title: "Web Development Lead",
    start: "september 2021",
    end: "september 2022",
    link: "https://gdsc.community.dev/bhilai-institute-of-technology-durg/",
    company: "Google Developers Students Club, BIT Durg",
    tags: ["mentoring", "public speaking", "web dev"],
    description:
      "Served as the Web development lead of the GDSC community of our college, educating many students by organizing various events and bootcamps.",
  },
]

function isDivisibleBy5(num: number) {
  return num % 5 === 0
}

interface Props extends React.HtmlHTMLAttributes<HTMLDivElement> {}

const Experience: React.FC<Props> = (props) => {
  const { scrollYProgress } = useScroll()
  const x = useTransform(scrollYProgress, [0, 1], [-1, -10000])

  return (
    <section
      {...props}
      className={twMerge("experience h-[600vh] sm:h-[600vh]", props.className)}
    >
      <div className="sticky top-20 flex flex-col gap-4 w-full min-h-screen">
        <h2 className="text-4xl sm:text-6xl font-bold uppercase">
          Experience.
        </h2>
        <div className="flex overflow-hidden w-full relative h-full flex-1 mt-6 sm:mt-10">
          <div className="experience-overlay pointer-events-none absolute top-0 left-0 w-full h-full z-[5]"></div>
          <motion.div
            className={clsx(
              "min-w-[100vw] border-t-2 border-r-2 border-l-2 dark:bg-neutral-950 bg-neutral-50 pb-4 border-red-500 absolute top-0",
              "flex",
            )}
            style={{ left: x }}
          >
            <div className="h-full flex">{innerDivs(89)}</div>

            {experiences.map((exp, index) => {
              return (
                <>
                  <ExpCard key={exp.title} {...exp} />
                  <div key={exp.title} className="h-full flex">
                    {innerDivs(
                      index === experiences.length - 1 ? 79 : 59,
                      index === 0 ? 90 : 60 * (index + 1) + 30,
                    )}
                  </div>
                </>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const ExpCard = ({
  title,
  company,
  description,
  start,
  end,
  tags,
  link,
}: {
  title: string
  company: string
  description: string
  start: string
  end: string
  tags: string[]
  link: string
}) => {
  return (
    <div className="w-6 relative">
      <div className="absolute top-0 left-0 w-[80vw] md:w-[50vw] h-ful border-l-2 border-red-500 pt-32 pl-6 pb-1">
        <motion.div
          transition={{ delay: 0.2 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          // viewport={{ once: true }}
          className="flex-col"
        >
          <div className="text-red-500 text-sm uppercase">
            {start} - {end}
          </div>
          <h3 className="text-xl sm:text-2xl font-light mt-10">{title}</h3>
          <Link href={link}>
            <CursorHighlight className="w-max max-w-full">
              <h5 className="sm:text-xl mt-2 text-neutral-500 dark:text-neutral-400 font-semibold">
                {company}
              </h5>
            </CursorHighlight>
          </Link>
          <p className="text-sm sm:text-base tracking-wide mt-3 max-w-lg">
            {description}
          </p>
          <div className="flex gap-2 flex-wrap max-w-sm mt-4">
            {tags.map((tag) => (
              <div
                key={tag}
                className="dark:bg-neutral-900 bg-neutral-200 text-red-500 uppercase px-[.5em] py-[.1em] text-xs sm:text-sm"
              >
                {tag}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

const innerDivs = (num: number, start: number = 0) =>
  Array.from({ length: num }, (_, index) => (
    <motion.div
      transition={{ delay: 0.2, duration: 0.2 }}
      initial={{ height: 0 }}
      whileInView={{ height: isDivisibleBy5(index + 1) ? 64 : 40 }}
      // viewport={{ once: true }}
      key={index}
      className={clsx(
        "w-6 border-l-2 relative",
        {
          "h-16 border-neutral-400 dark:border-neutral-500": isDivisibleBy5(
            index + 1,
          ),
        },
        {
          "h-10 border-neutral-300 dark:border-neutral-700": !isDivisibleBy5(
            index + 1,
          ),
        },
      )}
    >
      {isDivisibleBy5(index + 1) && (
        <div className="absolute -bottom-1 left-2 opacity-50 text-xs">
          {(index + start + 1) / 5}
        </div>
      )}
    </motion.div>
  ))

export default Experience
