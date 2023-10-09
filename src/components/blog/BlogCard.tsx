import { formatDate } from "@/lib/utils"
import { BlogPost } from "contentlayer/generated"
import Image from "next/image"
import Link from "next/link"
import React from "react"

interface Props {
  blog: BlogPost
}

const BlogCard: React.FC<Props> = ({ blog }) => {
  return (
    <Link href={blog.slug}>
      <div className="flex flex-col group max-w-md p-4">
        <div className="text-sm flex items-center gap-1 text-neutral-700 dark:text-neutral-300 pb-2">
          <span className="text-xl">[</span> {formatDate(blog.published)}
          <span className="text-xl">]</span>
        </div>
        <div className="flex border-dashed border-neutral-300 dark:border-neutral-800 border-2  mb-4 relative overflow-hidden w-full h-52">
          {blog.banner && (
            <Image
              height={400}
              width={800}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              alt={`${blog.title} by Dewansh Thakur`}
              src={blog.banner}
            />
          )}
        </div>
        <h4 className="text-lg mb-2 font-semibold relative text-neutral-800 dark:text-neutral-200">
          {blog.title}
        </h4>
        <p className="text-neutral-600 line-clamp-2 dark:text-neutral-400">
          {blog.description}
        </p>
      </div>
    </Link>
  )
}

export default BlogCard
