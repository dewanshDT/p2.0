import * as React from "react"
import Image from "next/image"
import { useMDXComponent } from "next-contentlayer/hooks"
import clsx from "clsx"
import { twMerge } from "tailwind-merge"

const components = {
  h1: (props: any) => (
    <h1
      {...props}
      className={twMerge(
        props.className,
        "mt-2 mb-4 scroll-m-20 text-4xl font-bold tracking-tight",
      )}
    />
  ),
  h2: (props: any) => (
    <h2
      {...props}
      className={twMerge(
        props.className,
        "mt-14 mb-4 scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0",
      )}
    />
  ),
  h3: (props: any) => (
    <h3
      {...props}
      className={twMerge(
        props.className,
        "mt-8 mb-4 scroll-m-20 text-2xl font-semibold tracking-tight",
      )}
    />
  ),
  h4: (props: any) => (
    <h4
      {...props}
      className={twMerge(
        props.className,
        "mt-8 mb-4 scroll-m-20 text-xl font-semibold tracking-tight",
      )}
    />
  ),
  h5: (props: any) => (
    <h5
      {...props}
      className={twMerge(
        props.className,
        "mt-8 mb-4 scroll-m-20 text-lg font-semibold tracking-tight",
      )}
    />
  ),
  h6: (props: any) => (
    <h6
      {...props}
      className={twMerge(
        props.className,
        "mt-8 mb-4 scroll-m-20 text-base font-semibold tracking-tight",
      )}
    />
  ),
  a: (props: any) => (
    <a
      className={twMerge(
        "font-medium underline underline-offset-2 hover:text-red-500",
        props.className,
      )}
      {...props}
    />
  ),
  p: (props: any) => (
    <p
      className={twMerge(
        "text-base mb-4 leading-loose [&:not(:first-child)]:mt-6",
        props.className,
      )}
      {...props}
    />
  ),
  ul: (props: any) => (
    <ul
      className={twMerge("my-6 ml-6 list-disc", props.className)}
      {...props}
    />
  ),
  ol: (props: any) => (
    <ol
      className={twMerge("my-6 ml-6 list-decimal", props.className)}
      {...props}
    />
  ),
  li: (props: any) => (
    <li
      className={twMerge(
        "my-2 leading-loose marker:text-neutral-400",
        props.className,
      )}
      {...props}
    />
  ),
  blockquote: (props: any) => (
    <blockquote
      className={twMerge(
        "my-6 border-l-4 pl-4 dark:border-neutral-700 border-neutral-300 italic dark:[&>*]:text-neutral-300 [&>*]:text-neutral-900 [&>*]:font-semibold",
        props.className,
      )}
      {...props}
    />
  ),
  table: (props: any) => (
    <table {...props} className={twMerge("my-8", props.className)} />
  ),
  tr: (props: any) => (
    <tr className={twMerge("m-0 p-0", props.className)} {...props} />
  ),
  th: (props: any) => (
    <th
      className={twMerge(
        "border-b dark:border-neutral-700 border-neutral-400 pr-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        props.className,
      )}
      {...props}
    />
  ),
  td: (props: any) => (
    <td
      className={twMerge(
        "border-t text-sm leading-relaxed dark:border-neutral-900 border-neutral-100 pr-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        props.className,
      )}
      {...props}
    />
  ),
  pre: (props: any) => (
    <pre
      className={twMerge(
        "my-6 overflow-x-auto rounded-lg w-full p-2 !bg-neutral-900 [&>code]:!bg-transparent",
        props.className,
      )}
      {...props}
    />
  ),
  code: (props: any) => (
    <code
      className={clsx(
        "relative w-full rounded font-mono font-medium dark:bg-neutral-800 bg-neutral-200 im px-[0.3rem] py-[0.12rem] text-sm",
        props.className,
      )}
      {...props}
    />
  ),
  hr: (props: any) => (
    <hr {...props} className={twMerge("my-8", props.className)} />
  ),
  Image: (props: any) => (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image className={twMerge("my-6 w-auto", props.className)} {...props} />
  ),
}

interface MdxProps {
  code: string
}

function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return (
    <div className="mdx">
      <Component components={components} />
    </div>
  )
}

export default Mdx
