import { ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from "next/image";
const blogPosts = [
  {
    title: "Top 5 Working Holiday Destinations for 2024",
    excerpt: "Discover the most exciting countries offering amazing opportunities for work and travel this year.",
    image: "/newzealand/bg.jpg",
    author: "Emma Thompson",
    date: "May 15, 2024"
  },
  {
    title: "How to Budget for Your Working Holiday Adventure",
    excerpt: "Learn essential tips for managing your finances while working and traveling abroad.",
    image: "/newzealand/bg.jpg",
    author: "Michael Chen",
    date: "April 28, 2024"
  },
  {
    title: "Cultural Etiquette: Navigating Work Life Abroad",
    excerpt: "Understand and respect cultural differences to make the most of your international work experience.",
    image: "/newzealand/bg.jpg",
    author: "Sophie Martin",
    date: "April 10, 2024"
  }
]

export default function BlogPreviewSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Latest from Our Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white relative rounded-lg shadow-md overflow-hidden">
              <Image src={post.image} alt={post.title} fill={true} objectFit="cover" className="z-[-10]"/>
              <div className="p-6 z-10">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{post.author}</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="group">
            Read More Articles
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  )
}