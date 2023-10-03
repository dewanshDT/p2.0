import Link from "next/link"

export default function Home() {
  return (
    <div className="flex min-h-screen max-w-6xl px-4 flex-col items-center justify-center">
      <div className="flex flex-col gap-2">
        <h5 className="text-base">👋 hello there</h5>
        <h1 className="text-6xl sm:text-8xl font-bold">It&apos;s Dewansh</h1>
        <code className="text-neutral-500">{"// work in progress"}</code>
        <div className="flex my-4">
          <Link
            className="font-bold hover:shadow-highlight-red-300 dark:hover:shadow-highlight-red-500"
            href="/blog"
          >
            Blogs
          </Link>
        </div>
      </div>
    </div>
  )
}
