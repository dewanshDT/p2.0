"use client"

import React from "react"
import clsx from "clsx"
import { useScroll, motion, useTransform } from "framer-motion"
import { twMerge } from "tailwind-merge"

const experiences: {
  title: string
  start: string
  end: string
  company: string
  description: string
}[] = [
  {
    title: "Tech Lead",
    start: "april 2023",
    end: "present",
    company: "The Research School",
    description:
      "Made an educational platform for the company, this focuses Research students and is able to conduct webinars, solve research exam questions using AI, and can index best research papers on a given topic.",
  },
  {
    title: "Google Summer of Code Contributor",
    start: "may 2023",
    end: "september 2023",
    company: "Processing Foundation, New York",
    description:
      "Worked on the p5.js web editor open source project, enabling it to work across all the mobile devices. developed a new UI for the editor and refactored the old code to latest versions",
  },
  {
    title: "Full Stack Developer",
    start: "may 2022",
    end: "september 2022",
    company: "Ayuryuj",
    description:
      "Build a platform capable of online consultation for doctors with patients through custom agora implementation in next js, along with a fully capable online store for medicines.",
  },
  {
    title: "Web Development Lead",
    start: "september 2021",
    end: "september 2022",
    company: "Google Developers Students Club, BIT Durg",
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

  const innerDivs = (num: number) =>
    Array.from({ length: num }, (_, index) => (
      <motion.div
        transition={{ delay: 0.2, duration: 0.2 }}
        initial={{ height: 0 }}
        whileInView={{ height: isDivisibleBy5(index + 1) ? 64 : 40 }}
        key={index}
        className={clsx(
          "w-6 border-l-2 ",
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
      ></motion.div>
    ))

  return (
    <section
      {...props}
      className={twMerge("experience h-[600vh] sm:h-[670vh]", props.className)}
    >
      <div className="sticky top-20 flex flex-col gap-4 w-full min-h-screen">
        <h2 className="text-6xl font-bold uppercase">Experience.</h2>
        <div className="flex overflow-hidden w-full relative h-full flex-1 mt-6 sm:mt-20">
          <motion.div
            className={clsx(
              "min-w-[100vw] border-t border-red-500 absolute top-0",
              "flex",
            )}
            style={{ left: x }}
          >
            <div className="h-full flex">{innerDivs(89)}</div>

            {experiences.map((exp) => {
              return (
                <>
                  <ExpCard key={exp.title} {...exp} />
                  <div key={exp.title} className="h-full flex">
                    {innerDivs(59)}
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
}: {
  title: string
  company: string
  description: string
  start: string
  end: string
}) => {
  return (
    <div className="w-6 relative">
      <div className="absolute top-0 left-0 w-[80vw] md:w-[50vw] h-ful border-l-2 border-red-500 pt-32 pl-6 pb-2">
        <motion.div
          transition={{ delay: 0.2 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex-col"
        >
          <div className="text-red-500 text-sm uppercase">
            {start} - {end}
          </div>
          <h3 className="text-3xl sm:text-4xl font-light mt-14">{title}</h3>
          <h5 className="sm:text-xl mt-2 text-neutral-500 dark:text-neutral-400 font-semibold">
            {company}
          </h5>
          <p className="text-sm sm:text-base tracking-wide mt-6 max-w-lg">
            {description}
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Experience
