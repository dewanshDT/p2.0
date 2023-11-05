"use client"

import React, { useRef, useState, useEffect } from "react"
import { ProgressBar } from ".."
import clsx from "clsx"

const Loader = () => {
  const [per, setPer] = useState(0)
  const interval = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (interval.current) clearInterval(interval.current)

    interval.current = setInterval(() => {
      setPer((prev) => prev + 10)

      if (per >= 100) {
        clearInterval(interval.current as NodeJS.Timeout)
      }
    }, 150)
  }, [per]) // Empty dependency array to ensure it runs only once

  useEffect(() => {
    if (per >= 100) {
      clearInterval(interval.current as NodeJS.Timeout)
    }
  }, [per])

  return (
    <div
      className={clsx(
        "absolute transition-transform duration-1000 delay-1000 p-6 h-screen top-0 left-0 w-screen bg-black z-10 flex flex-col items-center justify-center",
        { "-translate-y-full": per >= 100 },
      )}
    >
      <div className="flex flex-col w-full max-w-2xl">
        <h5 className="text-sm sm:text-lg text-white font-light">{per}%</h5>
        <ProgressBar percentage={per} />
        <div className="flex flex-col gap-1 mt-4 text-sm text-[#10bbbb]">
          <p style={{ opacity: per > 30 ? 1 : 0 }}>
            <span className="text-white">$</span> Namaste, loading resources . .
            .
          </p>
          <p style={{ opacity: per > 70 ? 1 : 0 }}>
            <span className="text-white">$</span> almost there
          </p>
          <p style={{ opacity: per > 90 ? 1 : 0 }} className="text-red-500">
            <span className="text-white">$</span> launching{" > > >"}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Loader
