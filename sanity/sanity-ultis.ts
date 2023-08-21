import { apiVersion, dataset, projectId } from "@/sanity.config"
import { createClient, groq } from "next-sanity"

export async function getPosts() {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
  })

  const data = await client.fetch(groq`*[_type == "post"]{
  _id,
  catergories,
  body,
  title,
  author,
  "slug":slug.current,
  mainImage,
  publishedAt
}`)

  return data
}
