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
        className="bg-red-500 absolute top-0 left-0 w-full h-screen origin-bottom"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="bg-red-500 absolute top-0 left-0 w-full h-screen origin-top"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
    </motion.div>
  )
}
