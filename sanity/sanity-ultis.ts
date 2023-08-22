import { apiVersion, dataset, projectId } from "@/sanity.config"
import { createClient, groq } from "next-sanity"

// config file for initial setup
export const config = { projectId, dataset, apiVersion, useCdn: true }

export async function getPosts() {
  const client = createClient(config)

  return client.fetch(groq`*[_type == "post"]{
  _id,title,
  "slug":slug.current,
  author->{
          "fullName":firstName+lastName,
          "image":image.asset->url,
           occupation
          },
   publishedAt,
   categories[]->{title},
   body,
   "image":mainImage.asset->url,
      
}`)
}
