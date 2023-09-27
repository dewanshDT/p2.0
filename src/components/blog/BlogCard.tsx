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
      <div className="flex flex-col max-w-md p-4">
        <div className="text-sm text-neutral-700 dark:text-neutral-300 pb-2">
          {formatDate(blog.published)}
        </div>
        <div className="flex border-dashed border-neutral-300 dark:border-neutral-800 border-2  mb-4 relative overflow-hidden w-full h-52">
          {blog.banner && (
            <Image
              height={400}
              width={800}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              alt="blog banner"
              src={blog.banner}
            />
          )}
        </div>
        <h4 className="text-lg mb-2 font-semibold text-neutral-800 dark:text-neutral-200">
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
