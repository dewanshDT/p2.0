import { ProjectCard } from "@/components"
import React from "react"
import { twMerge } from "tailwind-merge"
import editor from "../../../public/images/Editor.png"
import trs from "../../../public/images/trs.png"
import vidhaan from "../../../public/images/vidhaan.png"
import gray from "../../../public/images/gray.png"

interface Props extends React.HtmlHTMLAttributes<HTMLDivElement> {}

const projects = [
  {
    title: "p5.js-web-editor",
    description:
      "Made the editor useable across smaller devices like Tablets and Mobile phones by developing a complete new UI, making it more accessible and also improved performance and UX.",
    tags: [
      "ui/ux",
      "react",
      "express",
      "webpack",
      "styled components",
      "sass",
      "testing",
    ],
    link: "https://editor.p5js.org/",
    gHLink: "https://github.com/processing/p5.js-web-editor",
    apiUrl: "https://api.github.com/repos/processing/p5.js-web-editor",
    banner: editor,
  },
  {
    title: "The Research School",
    description:
      "A complete AI powered platform for research scholars and Professors which includes features like AI Question bank, Live Webinars with transcripts and note taking  and many more.",
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
    link: "https://theresearchschool.com",
    gHLink: "https://github.com/Research-School",
    banner: trs,
  },
  {
    title: "Vidhaan",
    description:
      "AI based analytics dashboard for University Grants Commission's Lawyers to handle cases.",
    tags: [
      "ui/ux",
      "next.js",
      "django",
      "d3",
      "firebase",
      "postgresql",
      "typescript",
    ],
    link: "https://vidhaanweb.vercel.app/",
    gHLink: "https://github.com/Vidhaan-org/vidhaanweb",
    apiUrl: "https://api.github.com/repos/Vidhaan-org/vidhaanweb",
    banner: vidhaan,
  },
  {
    title: "Dew-Grey",
    description:
      "A minimal Visual Studio Code theme pack, (Published on marketplace).",
    tags: ["ui/ux", "javascript", "personalization"],
    link: "https://marketplace.visualstudio.com/items?itemName=DEW.dew-grey",
    gHLink: "https://github.com/dewanshDT/DEW-GREY",
    apiUrl: "https://api.github.com/repos/dewanshDT/DEW-GREY",
    banner: gray,
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
      <ul className="mt-10 sm:mt-28 flex flex-col gap-8 sm:gap-32">
        {projects.map((project, index) => (
          <li key={project.title}>
            <ProjectCard {...project} index={index} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Projects
