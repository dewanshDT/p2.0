import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="flex flex-col gap-2">
        <h5 className="text-base">👋 hello there</h5>
        <h1 className="text-8xl font-bold">It&apos;s Dewansh</h1>
        <code className="text-neutral-500">{"// work in progress"}</code>
        <div className="flex my-4">
          <Link className="font-bold" href="/blog">
            Blogs
          </Link>
        </div>
      </div>
    </main>
  )
}
