import React from "react"
import { FaFolder, FaGithub, FaRegFolder } from "react-icons/fa"
import { GoArrowUpRight } from "react-icons/go"

const Projects = () => {
  return (
    <div className="hero relative flex flex-col gap-4 w-full min-h-screen px-4 pb-4 md:px-6 text-white dark:text-black bg-red-500">
      <div className="absolute h-10 w-10 top-0 left-4 md:left-6 dark:bg-black bg-white"></div>
      <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold uppercase mt-16 md:mt-24">
        Projects.
      </h2>
      <p className="text-xl uppercase tracking-widest">
        These are some noteworthy projects
      </p>
      <div className="flex flex-col md:grid grid-cols-2 sm:gap-4 gap-10 py-8 sm:p-2 mt-8 bg-white dark:bg-black p-2">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  )
}

const ProjectCard = ({
  title,
  description,
  gHLink,
  link,
}: {
  title: string
  description: string
  gHLink?: string
  link: string
}) => {
  return (
    <div className="sm:p-4 group max-w-xl cursor-pointer border-dashed sm:border-2 border-transparent hover:border-red-500 text-neutral-600 dark:text-neutral-400 transition-colors">
      <div className="flex group-hover:text-red-500 text-neutral-700 dark:text-neutral-300 gap-4 items-center mb-4 sm:mb-6">
        <FaFolder className="text-2xl opacity-40" />
        <h4 className="font-bold text-xl">p5.js-web-editor</h4>
        <FaGithub className="text-2xl opacity-50 ml-auto" />
        <GoArrowUpRight className="text-2xl text-red-500" />
      </div>
      <p className="font-medium text-sm sm:text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
        ipsa, ea aliquid ab sed iure quisquam dolores perferendis hic obcaecati,
        odio assumenda dignissimos qui repudiandae doloribus, velit incidunt
        maxime soluta?
      </p>
    </div>
  )
}

export default Projects
