import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import Cursor from "../Cursor"
import CursorProvider from "@/context/cursor/CursorProvider"
import { Loader } from ".."

interface Props {
  children?: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <CursorProvider>
      <Header />
      <main className="flex flex-col items-center min-h-screen">
        {children}
      </main>
      <Footer />
      <Cursor />
      <Loader />
    </CursorProvider>
  )
}

export default Layout
