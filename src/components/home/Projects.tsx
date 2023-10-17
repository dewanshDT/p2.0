import Link from "next/link"
import React from "react"
import { FaFolder, FaGithub, FaRegFolder } from "react-icons/fa"
import { GoArrowUpRight } from "react-icons/go"
import { RiGitRepositoryFill } from "react-icons/ri"

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
        <ProjectCard
          title="p5.js-web-editor"
          description="Made the editor useable across smaller devices like Tablets and Mobile phones by developing a complete new UI, making it more accessible and also improved performance and UX."
          link="https://editor.p5js.org/"
          gHLink="https://github.com/processing/p5.js-web-editor"
        />
        <ProjectCard
          title="The Research School"
          description="A complete AI powered platform for research scholars and Professors which includes features like AI Question bank, Live Webinars with transcripts and note taking  and many more."
          link="https://theresearchschool.com"
        />
        <ProjectCard
          title="Vidhaan"
          description="AI based analytics dashboard for University Grants Commission's Lawyers to handle cases."
          link="https://github.com/Vidhaan-org/vidhaanweb"
          gHLink="https://github.com/Vidhaan-org/vidhaanweb"
        />
        <ProjectCard
          title="Dew-Grey"
          description="A minimal Visual Studio Code theme pack, (Published on marketplace)."
          link="https://marketplace.visualstudio.com/items?itemName=DEW.dew-grey"
          gHLink="https://github.com/dewanshDT/DEW-GREY"
        />
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
    <div className="sm:p-4 group w-full cursor-default border-dashed sm:border-2 border-transparent hover:border-red-500 text-neutral-600 dark:text-neutral-400 transition-colors">
      <div className="flex group-hover:text-red-500 text-neutral-700 dark:text-neutral-300 gap-4 items-center mb-4 sm:mb-6">
        <RiGitRepositoryFill className="text-2xl opacity-40" />
        <Link href={link} target="_blank" className="w-full">
          <h4 className="font-bold text-xl mr-auto">{title}</h4>
        </Link>
        {gHLink && (
          <Link href={gHLink} target="_blank">
            <FaGithub className="text-2xl opacity-50" />
          </Link>
        )}
        <GoArrowUpRight className="text-2xl text-red-500" />
      </div>
      <p className="font-medium text-sm sm:text-base">{description}</p>
    </div>
  )
}

export default Projects
