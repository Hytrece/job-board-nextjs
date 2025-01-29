import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"
import { BlogCard } from "@/components/blog-card"
import { CategoryFilter } from "@/components/category-filter"
import { Pagination } from "@/components/pagination"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative mt-32 h-[500px]">
        <Image
          src="/placeholder.svg?height=500&width=1920"
          alt="Hero background"
          width={1920}
          height={500}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/40">
          <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-16 text-white">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold mb-4">Exploring the Wonders of Hiking</h1>
              <p className="text-lg opacity-90">
                An iconic landmark, this post unveils the secrets that make this destination a travelers paradise.
              </p>
              <div className="flex items-center gap-4 mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gray-200" />
                  <span>Theodore Reginald</span>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <span>4 Jan 2024</span>
                  <span>10 mins read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Blog</h2>
          <p className="text-gray-600">
            Here, we share travel tips, destination guides, and stories that inspire your next adventure.
          </p>
        </div>

        <CategoryFilter />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        <div className="mt-12">
          <Pagination />
        </div>
      </section>
    </div>
  )
}

const blogPosts = [
  {
    id: 1,
    title: "Unveiling the Secrets Beyond the Tourist Trails",
    excerpt: "Dive into the local culture, discover hidden spots, and experience the authentic charm that often...",
    category: "Destination",
    image: "/placeholder.svg?height=300&width=400",
    author: {
      name: "Seraphina Isabella",
      avatar: "/placeholder.svg?height=40&width=40"
    },
    date: "30 Jan 2024",
    readTime: "10 mins read"
  },
  // Add more blog posts here...
]

