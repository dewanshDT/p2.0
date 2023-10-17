"use client"
import { AnimatePresence, motion } from "framer-motion"

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="w-full flex flex-col items-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
    >
      {children}
      <motion.div
        className="dark:bg-black bg-white absolute top-0 left-0 w-full h-screen origin-top pointer-events-none"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
    </motion.div>
  )
}
