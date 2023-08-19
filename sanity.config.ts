import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk"
import { schemaTypes } from "./sanity/schemas"

export default defineConfig({
  projectId: "3w66thlq",
  dataset: "production",
  title: "cms_personal_blog",
  apiVersion: "2023-08-19",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemaTypes },
})
