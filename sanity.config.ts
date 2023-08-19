import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk"
import { schemaTypes } from "./sanity/schemas"

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!

export default defineConfig({
  projectId,
  dataset,
  title: "cms_personal_blog",
  apiVersion: "2023-08-19",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemaTypes },
})
