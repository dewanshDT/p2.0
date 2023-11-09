import React from "react"
import { twMerge } from "tailwind-merge"

interface Props extends React.HtmlHTMLAttributes<HTMLDivElement> {}

const Experience: React.FC<Props> = (props) => {
  return (
    <section
      {...props}
      className={twMerge(
        "projects flex flex-col gap-4 w-full min-h-screen ",
        props.className,
      )}
    >
      <h2 className="text-6xl font-bold uppercase">Experience.</h2>
    </section>
  )
}

export default Experience
