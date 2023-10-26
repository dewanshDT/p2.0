import React, { createContext, useContext, useState } from "react"

interface Props {
  children: React.ReactNode
}

interface Dimensions {
  width: number | string | undefined
  height: number | string | undefined
}

interface Context {
  followerDimensions: Dimensions | undefined
  setFollowerDimensions: React.Dispatch<
    React.SetStateAction<Dimensions | undefined>
  >
}

const CursorContext = createContext<Context>({} as Context)

export const useCursor = () => useContext(CursorContext)

const CursorProvider: React.FC<Props> = ({ children }) => {
  const [followerDimensions, setFollowerDimensions] = useState<Dimensions>()

  return (
    <CursorContext.Provider
      value={{ followerDimensions, setFollowerDimensions }}
    >
      {children}
    </CursorContext.Provider>
  )
}

export default CursorProvider
