import React from "react"
import Header from "./Header"
import Footer from "./Footer"

interface Props {
  children?: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="w-full flex flex-col items-center min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
