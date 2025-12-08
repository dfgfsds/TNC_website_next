import Link from "next/link";
import Image from "next/image";

export default function BlogCard({ blog }: { blog: any }) {
  // Get first 80 words of the excerpt
  const excerptWords = blog.excerpt.split(" ").slice(0, 20).join(" ");

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition flex flex-col">
      {/* Image */}
      <div className="relative w-full h-56">
        <Image src={blog.image} alt={blog.title} fill className="object-cover" />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between flex-grow p-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{blog.title}</h3>
          <p className="text-sm text-gray-600 mt-2">{excerptWords}...</p>
        </div>
        <div className="mt-6">
          <div className="text-xs text-gray-400">
            {blog.date} · by {blog.author}
          </div>
          <Link
            href={`/blog/${blog.slug}`}
            className="inline-block mt-2 text-purple-600 hover:underline font-medium text-sm"
          >
            Read More →
          </Link>
        </div>
      </div>
    </div>
  );
}
