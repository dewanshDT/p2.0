import React, { createContext, useContext, useState } from "react"

interface Props {
  children: React.ReactNode
}

interface Dimensions {
  width: number | string | undefined
  height: number | string | undefined
}

interface Position {
  x: number
  y: number
}

interface Context {
  cursorPosition: Position | undefined
  followerDimensions: Dimensions | undefined
  setFollowerDimensions: React.Dispatch<
    React.SetStateAction<Dimensions | undefined>
  >
  setCursorPosition: React.Dispatch<React.SetStateAction<Position | undefined>>
}

const CursorContext = createContext<Context>({} as Context)

export const useCursor = () => useContext(CursorContext)

const CursorProvider: React.FC<Props> = ({ children }) => {
  const [followerDimensions, setFollowerDimensions] = useState<Dimensions>()
  const [cursorPosition, setCursorPosition] = useState<Position>()

  return (
    <CursorContext.Provider
      value={{
        followerDimensions,
        setFollowerDimensions,
        cursorPosition,
        setCursorPosition,
      }}
    >
      {children}
    </CursorContext.Provider>
  )
}

export default CursorProvider
