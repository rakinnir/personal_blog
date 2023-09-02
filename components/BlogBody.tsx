/* eslint-disable @next/next/no-img-element */
"use client"

import { context } from "@/app/context/ContextProvider"
import { ContextValueType, postType } from "@/type"
import Link from "next/link"
import { useContext, useState } from "react"

function BlogBody() {
  const { posts, allCategories } = useContext(context) as ContextValueType
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  // post by category
  const filterFunction = (post: postType) => {
    if (selectedCategories.length === 0) {
      return true
    }

    let matchedValue = 0
    post.categories.map((cat: { title: string }) => {
      if (selectedCategories.includes(cat.title)) {
        matchedValue++
      }
    })

    return matchedValue > 0
  }

  return (
    <div className="mt-[300px] grid grid-cols-[70%_30%] gap-16">
      <div className="grid gap-12 grid-cols-2">
        {posts &&
          posts.filter(filterFunction).map((post) => (
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
      <div className="flex gap-6 font-semibold">
        {/* {categories} */}
        {allCategories?.map((category, index) => (
          <button
            key={index}
            className={`border-2 border-gray-400 rounded-md p-3 h-[50px]  transition-colors duration-300 ${
              selectedCategories.includes(category.title)
                ? "bg-black text-white border-black"
                : "bg-white text-black hover:bg-black hover:text-white"
            }`}
            onClick={() => {
              if (!selectedCategories?.includes(category.title)) {
                setSelectedCategories(() => [
                  ...selectedCategories,
                  category.title,
                ])
              } else {
                setSelectedCategories((selectedCategories) =>
                  selectedCategories.filter((cat) => cat !== category.title)
                )
              }
            }}
          >
            {category.title}
          </button>
        ))}
      </div>
    </div>
  )
}

export default BlogBody
