"use client"

import { FaGithub } from "react-icons/fa"
import { CursorHighlight } from ".."
import Link from "next/link"
import { FiArrowUpRight } from "react-icons/fi"
import Image, { StaticImageData } from "next/image"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { AiOutlineFork, AiOutlineStar } from "react-icons/ai"

interface Props {
  title: string
  description: string
  gHLink: string
  apiUrl?: string
  link: string
  index: number
  banner: StaticImageData
  tags: string[]
}

const ProjectCard: React.FC<Props> = ({
  title,
  description,
  gHLink,
  link,
  index,
  banner,
  tags,
  apiUrl,
}) => {
  const [stats, setStats] = useState({ forks: 0, stars: 0 })
  useEffect(() => {
    if (apiUrl) {
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          setStats({ forks: data.forks, stars: data.stargazers_count })
        })
        .catch((error) => {
          console.error("Error:", error)
        })
    }
  })
  return (
    <motion.div
      transition={{ ease: "easeIn" }}
      initial={{ opacity: 0.5, translateY: 200 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ once: true }}
      className="flex flex-col w-full md:min-h-[60vh]"
    >
      {/* header */}
      <div className="flex gap-4 w-full items-center">
        <div className="flex border border-red-500">
          <span className="bg-red-500 font-bold text-xl sm:text-2xl dark:text-black text-white sm:h-10 sm:w-10 h-8 w-8 flex items-center justify-center">
            {index + 1}
          </span>
          <span className="flex items-center font-medium text-base sm:text-xl px-3 h-8 sm:h-10">
            {title}
          </span>
        </div>
        <CursorHighlight className="h-8 w-8 sm:h-10 sm:w-10 flex items-center justify-center border text-2xl sm:text-3xl bg-neutral-400 dark:bg-neutral-700 border-neutral-400 dark:border-neutral-700 dark:text-black text-white">
          <Link href={link} target="_blank">
            <FiArrowUpRight className="hover:-translate-y-0.5 group-hover:scale-110 transition-transform" />
          </Link>
        </CursorHighlight>
      </div>
      {/* info */}
      <div className="flex flex-col-reverse w-full h-full flex-grow md:grid grid-cols-2 gap-8 mt-8">
        <div className="flex flex-col gap-6 my-2">
          <p className="dark:text-neutral-300 text-sm sm:text-base">
            {description}
          </p>
          <div className="flex flex-col gap-8 my-auto">
            <div className="flex gap-2 flex-wrap max-w-sm">
              {tags.map((tag) => (
                <div
                  key={tag}
                  className="dark:bg-neutral-800 bg-neutral-200 text-red-500 uppercase px-[.5em] py-[.1em] text-xs sm:text-sm"
                >
                  {tag}
                </div>
              ))}
            </div>
            <div className="flex gap-4 text-neutral-400 dark:text-neutral-500">
              <CursorHighlight className="text-2xl p-1 w-max hover:text-red-500">
                <Link href={gHLink} target="_blank">
                  <FaGithub />
                </Link>
              </CursorHighlight>
              {apiUrl && (
                <>
                  <div className="flex items-center gap-2 p-1">
                    <AiOutlineFork className="text-2xl" />
                    <span className="text-red-500">{stats.forks}</span>
                  </div>
                  <div className="flex items-center gap-2  p-1">
                    <AiOutlineStar className="text-2xl" />
                    <span className="text-red-500">{stats.stars}</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        <motion.div
          transition={{ delay: 0.2 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="hidden md:flex flex-col items-center justify-center md:ml-auto"
        >
          <Image alt={title} src={banner} height={520} />
        </motion.div>
      </div>
      <div className="w-full mt-8 sm:border-b-8 border-dashed border-neutral-200 dark:border-neutral-900 max-w-xl ml-auto"></div>
    </motion.div>
  )
}

export default ProjectCard
