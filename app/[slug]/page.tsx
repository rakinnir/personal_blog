"use client"
import { postType } from "@/components/BlogBody"
import { getPost } from "@/sanity/sanity-ultis"
import { useEffect, useState } from "react"

export default function Page({ params }: { params: { slug: string } }) {
  const [post, setPost] = useState<postType | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const slug = params.slug

  useEffect(() => {
    getPost(slug)
      .then((data) => {
        console.log(data)
        setPost(data)
      })
      .catch((error) => {
        setErrorMessage("fetching error")
        console.log(error)
      })
  }, [slug])

  return (
    <div>
      <h1>{post && post.title}</h1>
    </div>
  )
}
