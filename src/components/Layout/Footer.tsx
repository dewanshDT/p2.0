import React from "react"

const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center">
      <div className="max-w-6xl w-full">
        © {new Date().getFullYear()} Dewansh Thakur
      </div>
    </footer>
  )
}

export default Footer
