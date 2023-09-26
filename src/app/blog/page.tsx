import { allBlogPosts } from "contentlayer/generated"
import Link from "next/link"
import React from "react"

const page = () => {
  const blogs = allBlogPosts
  return (
    <div>
      {blogs.map((blog) => (
        <p key={blog.slugAsParams}>
          <Link href={blog.slug}>{blog.title}</Link>
        </p>
      ))}
    </div>
  )
}

export default page
