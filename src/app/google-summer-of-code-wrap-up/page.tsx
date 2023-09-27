"use client"

import { redirect } from "next/navigation"
import React, { useEffect } from "react"

const Page = () => {
  useEffect(() => {
    if (redirect) redirect("/blog/google-summer-of-code-wrap-up")
  }, [])
  return <div>page</div>
}

export default Page
