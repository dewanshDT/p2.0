import { CursorHighlight } from "@/components"
import Link from "next/link"
import React from "react"
import { FaGithub } from "react-icons/fa"
import { GoArrowUpRight } from "react-icons/go"
import { RiGitRepositoryFill } from "react-icons/ri"
import { twMerge } from "tailwind-merge"

interface Props extends React.HtmlHTMLAttributes<HTMLDivElement> {}

const projects = [
  {
    title: "p5.js-web-editor",
    description:
      "Made the editor useable across smaller devices like Tablets and Mobile phones by developing a complete new UI, making it more accessible and also improved performance and UX.",
    link: "https://editor.p5js.org/",
    gHLink: "https://github.com/processing/p5.js-web-editor",
  },
  {
    title: "The Research School",
    description:
      "A complete AI powered platform for research scholars and Professors which includes features like AI Question bank, Live Webinars with transcripts and note taking  and many more.",
    link: "https://theresearchschool.com",
    gHLink: "https://github.com/Research-School",
  },
  {
    title: "Vidhaan",
    description:
      "AI based analytics dashboard for University Grants Commission's Lawyers to handle cases.",
    link: "https://github.com/Vidhaan-org/vidhaanweb",
    gHLink: "https://github.com/Vidhaan-org/vidhaanweb",
  },
  {
    title: "Dew-Grey",
    description:
      "A minimal Visual Studio Code theme pack, (Published on marketplace).",
    link: "https://marketplace.visualstudio.com/items?itemName=DEW.dew-grey",
    gHLink: "https://github.com/dewanshDT/DEW-GREY",
  },
]

const Projects: React.FC<Props> = (props) => {
  return (
    <section
      {...props}
      className={twMerge(
        "projects flex flex-col gap-4 w-full min-h-screen ",
        props.className,
      )}
    >
      <h2 className="text-6xl font-bold uppercase">Projects.</h2>
      <ul className="mt-10 sm:mt-12 flex flex-col gap-10 sm:gap-14">
        {projects.map((project) => (
          <li key={project.title}>
            <ProjectCard {...project} />
          </li>
        ))}
      </ul>
    </section>
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
  gHLink: string
  link: string
}) => {
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

export default Projects
