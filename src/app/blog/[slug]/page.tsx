import React from "react"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import { allBlogPosts } from "contentlayer/generated"

import { AUTHOR_TWITTER_HANDLE } from "@/lib/constants"
import { Mdx } from "@/components"
import { table } from "console"
import { formatDate } from "@/lib/utils"
import Image from "next/image"

interface Props {
  params: {
    slug: string
  }
}

function getBlogFromSlug(slug: string) {
  const blog = allBlogPosts.find((blog) => blog.slugAsParams === slug)

  if (!blog || !blog.visible) notFound()

  return blog
}
export async function generateStaticParams() {
  return allBlogPosts.map((doc) => ({
    slug: doc.slugAsParams,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const doc = getBlogFromSlug(params.slug)

  if (!doc) {
    return {}
  }

  const url = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
  return {
    title: doc.title,
    description: doc.description,
    openGraph: {
      title: doc.title,
      description: doc.description,
      type: "article",
      url: `${url}${doc.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: doc.title,
      site: AUTHOR_TWITTER_HANDLE,
      creator: AUTHOR_TWITTER_HANDLE,
      description: doc.description,
    },
  }
}

const Page: React.FC<Props> = ({ params }) => {
  const { slug } = params

  const { title, description, body, tags, published, banner } =
    getBlogFromSlug(slug)

  return (
    <div className="max-w-6xl flex flex-col px-4 pt-4 md:pt-10 w-full">
      <div className="max-w-3xl dark:text-neutral-300 text-neutral-800">
        <div className="flex my-6 flex-col">
          <h1 className="sm:text-4xl text-3xl text-neutral-900 dark:text-neutral-100 font-bold mb-4">
            {title}
          </h1>
          <h2 className="text-2xl text-neutral-500 dark:text-neutral-500 font-semibold">
            {description}
          </h2>
          <div className="text-neutral-600 dark:text-neutral-400 my-2 font-semibold">
            {formatDate(published)}
          </div>
          {tags && (
            <div className="flex gap-3 my-4 flex-wrap">
              {tags.map((tag) => (
                <div
                  key={tag}
                  className="rounded dark:bg-neutral-800 bg-neutral-200 im px-[0.3rem] py-[0.12rem] text-sm"
                >
                  {tag}
                </div>
              ))}
            </div>
          )}
        </div>
        {banner && (
          <Image
            width={800}
            height={600}
            className="my-6"
            src={banner}
            alt="banner"
          />
        )}
        <Mdx code={body.code} />
      </div>
    </div>
  )
}

export default Page
