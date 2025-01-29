import Image from "next/image"
import Link from "next/link"
import { BlogPost } from "@/components/blog-post"
import { CategoryFilter } from "@/components/category-filter"
import { Pagination } from "@/components/pagination"
import { BlogCard } from "@/components/blog-card"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto mt-32 px-4 py-8">
        <BlogPost />
        <section className="mt-24 px-10">
          <h2 className="text-2xl font-bold mb-4">More Articles</h2>
          <CategoryFilter />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
          <div className="mt-12">
            <Pagination />
          </div>
        </section>
      </main>
    </div>
  )
}

const blogPosts = [
  {
    id: 1,
    title: "Unveiling the Secrets Beyond the Tourist Trails",
    excerpt: "Dive into the local culture, discover hidden spots, and experience the authentic charm that often...",
    category: "Destination",
    image: "/blogwriter2.jpg",
    author: {
      name: "Seraphina Isabella",
      avatar: "/placeholder.svg?height=40&width=40"
    },
    date: "30 Jan 2024",
    readTime: "10 mins read"
  },
  // Add more blog posts here...
]

