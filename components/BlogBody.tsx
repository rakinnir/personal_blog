"use client"
import { getPosts } from "@/sanity/sanity-ultis"

type post = {}

async function BlogBody() {
  const posts = await getPosts()
  console.log(posts[0])
  return <div></div>
}

export default BlogBody
