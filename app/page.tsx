import { BlogBody, Footer, Header } from "@/components"
import ContextProvider from "./context/ContextProvider"

export default function Home() {
  return (
    <ContextProvider>
      <div className="px-28">
        <Header />
        <BlogBody />
        <Footer />
      </div>
    </ContextProvider>
  )
}
