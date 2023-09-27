import React from "react"

const Footer = () => {
  return (
    <footer className="w-full flex mt-6 flex-col items-center">
      <div className="max-w-6xl px-4 py-6 w-full flex justify-between items-center">
        <div className="px-2 py3 dark:bg-neutral-900 bg-neutral-200">
          © {new Date().getFullYear()} Dewansh Thakur
        </div>
      </div>
    </footer>
  )
}

export default Footer
