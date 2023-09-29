import BlogCard from "@/components/blog/BlogCard"
import { allBlogPosts } from "contentlayer/generated"
import { Metadata } from "next"
import Link from "next/link"
import React from "react"

export const metadata: Metadata = {
  title: "Dewansh's Blog",
  description: "Blogs written by Dewansh Thakur",
}

const page = () => {
  const blogs = allBlogPosts.filter((blog) => blog.visible === true)
  return (
    <div className="flex flex-col mt-10 w-full px-4 max-w-6xl">
      <div className="text-xl font-bold text-neutral-400 dark:text-neutral-700 uppercase tracking-widest">
        blogs
      </div>
      <div className="flex flex-col lg:grid grid-cols-2 h-full">
        {blogs.map((blog) => (
          <div
            className="w-full my-4 flex flex-col justify-center items-center"
            key={blog.slugAsParams}
          >
            <BlogCard blog={blog} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default page
