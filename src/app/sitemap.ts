import { SITE_URL } from "@/lib/constants"
import { allBlogPosts } from "contentlayer/generated"
import { MetadataRoute } from "next"

interface SiteMap {
  url: string
  lastModified?: string | Date | undefined
  changeFrequency?:
    | "yearly"
    | "monthly"
    | "weekly"
    | "always"
    | "hourly"
    | "daily"
    | "never"
    | undefined
  priority?: number | undefined
}

export default function sitemap(): MetadataRoute.Sitemap {
  const siteMap: SiteMap[] = [
    {
      url: `${SITE_URL}/sitemap.xml`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ]

  const blogs = allBlogPosts
    .filter((blog) => blog.visible === true)
    .sort(
      (a, b) =>
        new Date(b.published).getTime() - new Date(a.published).getTime(),
    )

  blogs.forEach((blog) =>
    siteMap.push({
      url: `${SITE_URL}${blog.slug}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    }),
  )

  return siteMap
}
