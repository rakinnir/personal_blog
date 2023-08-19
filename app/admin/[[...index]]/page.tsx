"use client"
import config from "@/sanity.config"
import { NextStudio } from "next-sanity/studio"

function AdminPanel() {
  return <NextStudio config={config} />
}

export default AdminPanel
