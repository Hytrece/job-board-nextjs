import Image from "next/image"
import Link from "next/link"

interface BlogCardProps {
  post: {
    title: string
    excerpt: string
    category: string
    image: string
    author: {
      name: string
      avatar: string
    }
    date: string
    readTime: string
  }
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <div className="relative h-48">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
        />
        <div className="absolute top-4 left-4 bg-white px-2 py-1 rounded-full text-sm">
          {post.category}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">
          <Link href="#" className="hover:text-blue-600">
            {post.title}
          </Link>
        </h3>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="text-sm text-gray-600">{post.author.name}</span>
          </div>
          <div className="text-sm text-gray-500">
            <span>{post.date}</span>
            <span className="mx-2">•</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

