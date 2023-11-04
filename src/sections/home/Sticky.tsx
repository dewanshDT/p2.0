import React from "react"

const Sticky = () => {
  return (
    <div className="flex flex-row min-h-[400vh]">
      <div className="w-full bg-red-500 h-60 sticky top-96">sticky</div>
      <div className="w-full h-full"></div>
    </div>
  )
}

export default Sticky
