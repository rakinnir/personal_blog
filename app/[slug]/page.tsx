/* eslint-disable @next/next/no-img-element */
"use client"
import { Footer, Header } from "@/components"
import { postType } from "@/components/BlogBody"
import { dataset, projectId } from "@/sanity.config"
import { getPost } from "@/sanity/sanity-ultis"
import { useEffect, useState } from "react"
import PortableText from "react-portable-text"
import Link from "next/link"

export default function Page({ params }: { params: { slug: string } }) {
  const [post, setPost] = useState<postType | undefined>()
  const [errorMessage, setErrorMessage] = useState<string | undefined>()
  const slug = params.slug

  useEffect(() => {
    getPost(slug)
      .then((data) => {
        setPost(data)
      })
      .catch((error) => {
        setErrorMessage("fetching error")
        console.log(error)
      })
  }, [slug])

  console.log(post?.body)

  return (
    <>
      {post && (
        <div>
          <Header />
          {/* blog post  */}
          <div className="p-12 w-[80%] grid justify-center items-center gap-12 mx-auto">
            {/* mainImage of blog */}
            <img
              src={post.image}
              alt="blog_mainImage"
              className="mx-auto w-full"
            />

            {/* header section of blog  */}
            <section className="grid gap-8">
              <h1 className=" text-6xl font-bold max-w-[30ch]">{post.title}</h1>
              <div className="flex justify-between items-center">
                <div className="flex gap-4">
                  <img
                    src={post.author.image}
                    alt="author_image"
                    className="w-[50px] h-[50px] rounded-full my-auto"
                  />
                  <div>
                    <h3 className="text-gray-600 underline underline-offset-4 text-lg">
                      {post.author.fullName}
                    </h3>
                    <h5 className="text-gray-500">{post.author.occupation}</h5>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-gray-600">
                    {post.publishedAt.toString() &&
                      new Date(post.publishedAt?.toString()).toLocaleString()}
                  </h3>
                  <h3 className="text-gray-600 underline font-semibold underline-offset-4">
                    Categories :
                    {post.categories.map((category) => (
                      <span key={category.title}>{category.title},</span>
                    ))}
                  </h3>
                </div>
              </div>
            </section>
            {/* body section */}
            <section>
              <PortableText
                content={post.body}
                projectId={projectId}
                dataset={dataset}
                serializers={{
                  h1: (props: any) => (
                    <h1 className="text-4xl mb-8" {...props} />
                  ),
                  h2: (props: any) => (
                    <h1 className="text-3xl mb-8" {...props} />
                  ),
                  h3: (props: any) => (
                    <h1 className="text-2xl mb-8" {...props} />
                  ),
                  h4: (props: any) => (
                    <h1 className="text-xl mb-8" {...props} />
                  ),
                  normal: (props: any) => <h1 className="mb-8" {...props} />,
                  blockquote: (props: any) => (
                    <blockquote
                      {...props}
                      className="font-semibold text-gray-700 bg-gray-500 py-3 px-12 rounded-md bg-opacity-50"
                    />
                  ),

                  li: ({ children }: any) => (
                    <li className="ml-4 list-disc font-semibold mb-2">
                      {children}
                    </li>
                  ),
                  Strong: ({ children }: any) => <strong>{children}</strong>,
                  Emphasis: ({ children }: any) => <em>{children}</em>,
                  link: ({ children, href }: any) => (
                    <a
                      href={href}
                      className="text-purple-800 underline underline-offset-2"
                    >
                      {children}
                    </a>
                  ),
                }}
              />
            </section>
          </div>
          <Footer />
        </div>
      )}
    </>
  )
}
