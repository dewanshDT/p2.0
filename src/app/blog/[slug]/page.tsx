import { AUTHOR_TWITTER_HANDLE } from "@/lib/constants"
import Head from "next/head"
import React, { useMemo } from "react"
import { allBlogPosts } from "contentlayer/generated"
import { notFound } from "next/navigation"
import { Mdx } from "@/components"
import { Metadata } from "next"

interface Props {
  params: {
    slug: string
  }
}

function getBlogFromSlug(slug: string) {
  const blog = allBlogPosts.find((blog) => blog.slugAsParams === slug)

  if (!blog) notFound()

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

  const { title, description, body, tags } = getBlogFromSlug(slug)

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://dewansh.space/blog/${slug}`}
        />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content={AUTHOR_TWITTER_HANDLE} />
        <meta name="twitter:creator" content={AUTHOR_TWITTER_HANDLE} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Head>
      <div className="max-w-3xl mx-6 dark:text-neutral-300 text-neutral-700">
        <Mdx code={body.code} />
      </div>
    </>
  )
}

export default Page
