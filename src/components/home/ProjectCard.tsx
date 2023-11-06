"use client"

import { FaGithub } from "react-icons/fa"
import { CursorHighlight } from ".."
import Link from "next/link"
import { GoArrowUpRight } from "react-icons/go"

interface Props {
  title: string
  description: string
  gHLink: string
  link: string
}

const ProjectCard: React.FC<Props> = ({ title, description, gHLink, link }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="info flex flex-col gap-2">
        <h5 className="text-xl flex items-center gap-2">
          <span>{title}</span>
        </h5>
        <p className="dark:text-neutral-300 text-sm sm:text-base tracking-widest">
          {description}
        </p>
        <div className="mt-4 flex gap-4 items-center text-2xl dark:text-neutral-300">
          <CursorHighlight>
            <Link href={gHLink} target="_blank">
              <FaGithub />
            </Link>
          </CursorHighlight>
          <CursorHighlight>
            <Link href={link} target="_blank">
              <GoArrowUpRight />
            </Link>
          </CursorHighlight>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
