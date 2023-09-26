import { AUTHOR_TWITTER_HANDLE } from "@/lib/constants"
import Head from "next/head"
import React, { useMemo } from "react"
import { allBlogPosts } from "contentlayer/generated"
import { notFound } from "next/navigation"
import { Mdx } from "@/components"

export async function generateStaticParams() {
  return allBlogPosts.map((doc) => ({
    slug: doc.slugAsParams,
  }))
}

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

const Page: React.FC<Props> = ({ params }) => {
  const { slug } = params

  const { title, description, body, tags } = getBlogFromSlug(slug)
  console.log(tags)

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
      <Mdx code={body.code} />
    </>
  )
}

export default Page
