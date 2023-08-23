/* eslint-disable @next/next/no-img-element */
"use client"
import { getPosts } from "@/sanity/sanity-ultis"
import Link from "next/link"
import { useEffect, useState } from "react"
import { TypedObject } from "sanity"

export type postType = {
  _id: string
  slug: string
  title: string
  author: {
    fullName: string
    image: string
    occupation: string
  }
  image: string
  body: object[]
  categories: { title: string }[]
  publishedAt: Date
}

function BlogBody() {
  const [posts, setPosts] = useState<null | postType[]>(null)
  const [errorMessage, setErrorMessage] = useState<string>("")

  useEffect(() => {
    getPosts()
      .then((data) => {
        setPosts(data)
      })
      .catch((error) => {
        setErrorMessage("Failed to fetch data from server")
        console.log(error)
      })
  }, [])

  return (
    <div className="grid gap-12 grid-cols-3 p-28 ">
      {posts &&
        posts.map((post) => (
          <div
            key={post._id}
            className="rounded-lg border-2 border-black h-[400px]"
          >
            <img
              src={post.image}
              alt="post_image"
              className="h-1/2 rounded-t-lg w-full"
            />
            {/* information of posts */}
            <section className="p-6 h-1/2">
              <div className="h-1/2">
                <h1 className="text-2xl font-bold ">{post.title}</h1>
              </div>

              <div className="flex justify-between items-center h-1/2">
                {/* author image with details */}
                <div className="flex gap-4 ">
                  <img
                    src={post.author.image}
                    alt="author_image"
                    className="w-[40px] h-[40px] rounded-full my-auto"
                  />
                  <div>
                    <h3 className="text-gray-600 underline underline-offset-4 ">
                      {post.author.fullName}
                    </h3>
                    <h5 className="text-gray-500 text-sm">
                      {post.author.occupation}
                    </h5>
                  </div>
                </div>
                <div>
                  <Link href={`/${post.slug}`}>
                    <button className="bg-black text-gray-100 px-3 py-2 rounded-md max-h-[50px] max-w-[100px]">
                      See more
                    </button>
                  </Link>
                </div>
              </div>
            </section>
          </div>
        ))}
    </div>
  )
}

export default BlogBody
