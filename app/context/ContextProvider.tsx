"use client"

import { getPosts } from "@/sanity/sanity-ultis"
import { ContextValueType, postType } from "@/type"
import { createContext, useEffect, useState } from "react"

type Props = {
  children: React.ReactNode
}

export const context = createContext<ContextValueType | null>(null)

function ContextProvider({ children }: Props) {
  const [posts, setPosts] = useState<postType[] | null>(null)
  const [errorMessages, setErrorMessages] = useState("")

  const contextValue: ContextValueType = {
    posts,
    setPosts,
    errorMessages,
    setErrorMessages,
  }

  // all posts for homepage
  useEffect(() => {
    getPosts()
      .then((data) => {
        setPosts(data)
      })
      .catch((error) => {
        setErrorMessages("Failed to fetch data from server")
      })
  }, [])

  return <context.Provider value={contextValue}>{children}</context.Provider>
}

export default ContextProvider
