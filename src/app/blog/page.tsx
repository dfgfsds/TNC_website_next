'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const blogs = [
  {
    id: 1,
    title: 'Best Desktop PCs for Gaming & Work in 2025',
    excerpt: 'Discover the most powerful and budget-friendly desktops ideal for gaming and productivity.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFijbgfj11dvgHLbCOUasx8A70nmUcn63ugg&s',
    date: 'July 10, 2025',
    author: 'Monish',
  },
  {
    id: 2,
    title: 'Top Accessories Every Computer Setup Needs',
    excerpt: 'From RGB keyboards to ergonomic chairs, here’s what will elevate your desktop experience.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlLvV0F6A84ZLIFcNXNXb_StEQicTE5VTZnQ&usqp=CAU',
    date: 'July 8, 2025',
    author: 'TN Computer Team',
  },
  {
    id: 3,
    title: 'How to Choose the Right Monitor for Your Needs',
    excerpt: 'Understand resolution, refresh rate, and panel types before buying your next monitor.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgjGYRHR8ja2RLCdlQVFVB-wg4jS9VGyjjWw&usqp=CAU',
    date: 'July 6, 2025',
    author: 'TN Experts',
  },
];
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

export default function Blogs() {
  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">TN Computer Blog</h2>
          <p className="text-gray-500">Tips, trends, and advice for all things desktop, gaming, and IT accessories.</p>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, i) => (
            <motion.div
              key={blog.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative w-full h-56">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between flex-grow p-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{blog.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">{blog.excerpt}</p>
                </div>

                <div className="mt-6">
                  <div className="text-xs text-gray-400">{blog.date} · by {blog.author}</div>
                  <a
                    href="#"
                    className="inline-block mt-2 text-[#9333ea] hover:underline font-medium text-sm"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
