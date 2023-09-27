import { allBlogPosts } from "contentlayer/generated"
import { Metadata } from "next"
import Link from "next/link"
import React from "react"

export const metadata: Metadata = {
  title: "Dewansh's Blogs",
  description: "Blogs written by Dewansh Thakur",
}

const page = () => {
  const blogs = allBlogPosts
  return (
    <div className="flex flex-col mt-10 w-full max-w-6xl">
      <div className="text-lg font-medium">blogs</div>
      <div>
        {blogs.map((blog) => (
          <div className="my-4" key={blog.slugAsParams}>
            <Link href={blog.slug}>{blog.title}</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default page
