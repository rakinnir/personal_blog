import Link from "next/link"

function Header() {
  return (
    <div className="fixed w-full z-[9999] top-0 left-0 px-28 bg-gray-100 py-12">
      <div className="flex items-center justify-between ">
        <div>
          <Link href="/">
            <h1 className="text-5xl font-bold italic font-mono">hypoblog</h1>
          </Link>
        </div>

        <div className="flex gap-12">
          <button className=" rounded-md px-5 py-3  hover:bg-black hover:text-white transition-all duration-300 ease-in-out border-2 border-black font-semibold hover:scale-110">
            Sign In
          </button>
          <button className="bg-black rounded-md px-5 py-3 text-white hover:bg-white hover:text-black transition-all duration-300 ease-in-out border-2 border-black font-semibold hover:scale-110">
            Log In
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
