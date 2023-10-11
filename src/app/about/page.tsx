import Image from "next/image"
import React from "react"
import me from "../../../public/me.jpeg"

const about = () => {
  return (
    <div className="flex flex-col mt-10 w-full px-4 max-w-6xl">
      <div className="text-xl font-bold text-neutral-400 dark:text-neutral-700 uppercase tracking-widest">
        About
      </div>
      <div className="flex flex-col mx-4 my-6">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex p-2 border-dashed border-neutral-300 dark:border-neutral-800 border-2 w-max">
            <Image
              src={me}
              alt="Dewansh Thakur picture"
              width={300}
              height={300}
            />
          </div>
          <div className="flex flex-col gap-1">
            <div className="h1 text-2xl font-light">Dewansh Sing Thakur</div>
            <h2 className="text-sm text-red-500 font-medium">
              Full Stack Developer
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default about
