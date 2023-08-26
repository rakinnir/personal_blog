import { Dispatch, SetStateAction } from "react"

export type ContextValueType = {
  posts: postType[] | null
  setPosts: Dispatch<SetStateAction<postType[] | null>>
  errorMessages: string
  setErrorMessages: Dispatch<SetStateAction<string>>
}

export type postType = {
  _id: string
  title: string
  slug: string
  author: {
    fullName: string
    image: string
    occupation: string
  }
  publishedAt: Date
  categories: { title: string }[]
  body: object[]
  image: string
}
