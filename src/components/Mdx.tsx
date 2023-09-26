import * as React from "react"
import Image from "next/image"
import { useMDXComponent } from "next-contentlayer/hooks"
import clsx from "clsx"

const components = {
  code: (props: any) => (
    <code
      className={clsx(
        "relative rounded bg-gray-500 text-neutral-100 dark:bg-gray-800 px-[0.3rem] py-[0.2rem] font-mono text-sm",
        props.className,
      )}
      {...props}
    />
  ),
  Image,
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
