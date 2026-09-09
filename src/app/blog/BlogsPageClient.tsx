"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { formatDate, slugConvert } from "../../../lib/utils";
import { baseUrl } from "../../../api-endpoints/ApiUrls";
import { useVendor } from "../../../context/VendorContext";

interface Blog {
    id: number;
    title: string;
    excerpt: string;
    image: string;
    banner_url?: string;
    created_at?: string;
    date: string;
    author: string;
}

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.2, duration: 0.6 },
    }),
};

const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Organization",
            "@id": "https://www.tncomputers.in/#organization",
            "name": "TN Computers",
            "url": "https://www.tncomputers.in/",
            "logo": {
                "@type": "ImageObject",
                "@id": "https://www.tncomputers.in/#logo",
                "url": "https://www.tncomputers.in/_next/static/media/tn-computers-logo.5bf25c46.png",
                "contentUrl": "https://www.tncomputers.in/_next/static/media/tn-computers-logo.5bf25c46.png"
            },
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "No: 126 B, Vanniar Street, Bangaru Colony, KK Nagar",
                "addressLocality": "Chennai",
                "postalCode": "600078",
                "addressRegion": "Tamil Nadu",
                "addressCountry": "IN"
            }
        },
        {
            "@type": "WebSite",
            "@id": "https://www.tncomputers.in/#website",
            "url": "https://www.tncomputers.in/",
            "name": "TN Computers",
            "description": "TN Computers provides laptops, desktop PCs, gaming PCs, refurbished computers, and computer accessories in Chennai.",
            "publisher": {
                "@id": "https://www.tncomputers.in/#organization"
            },
            "inLanguage": "en-IN"
        },
        {
            "@type": "Blog",
            "@id": "https://www.tncomputers.in/blog#blog",
            "url": "https://www.tncomputers.in/blog",
            "name": "TN Computers Blog",
            "headline": "Computer & Laptop Buying Guides & Reviews",
            "description": "Explore computer and laptop buying guides, PC reviews, gaming PC tips, refurbished laptop advice, and IT accessory guides from TN Computers in Chennai.",
            "isPartOf": {
                "@id": "https://www.tncomputers.in/#website"
            },
            "publisher": {
                "@id": "https://www.tncomputers.in/#organization"
            },
            "inLanguage": "en-IN",
            "about": [
                { "@type": "Thing", "name": "Laptops" },
                { "@type": "Thing", "name": "Desktop Computers" },
                { "@type": "Thing", "name": "Gaming PCs" },
                { "@type": "Thing", "name": "Computer Accessories" },
                { "@type": "Thing", "name": "PC Components" },
                { "@type": "Thing", "name": "Refurbished Laptops" }
            ],
            "keywords": "computer buying guide Chennai, laptop buying guide Chennai, laptop reviews Chennai, PC reviews Chennai, gaming PC guide Chennai, custom PC builds Chennai, refurbished laptops Chennai, computer accessories Chennai, PC components Chennai"
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.tncomputers.in/blog#breadcrumb",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://www.tncomputers.in/"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Blog",
                    "item": "https://www.tncomputers.in/blog"
                }
            ]
        }
    ]
};

export default function BlogsPageClient() {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);
    const { vendorId } = useVendor();

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get(
                    `${baseUrl}/blog/?vendor_id=${vendorId}`
                );
                setBlogs(response.data?.blogs || []);
            } catch (error) {
                console.error("Error fetching blogs:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, [vendorId]);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />

            <section className="bg-white py-16 px-6 md:px-20">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">
                            Computer & Laptop Buying Guides & Reviews
                        </h1>
                        <h2 className="text-lg text-gray-500 max-w-3xl mx-auto">
                            Get expert tips, honest reviews, gaming PC advice, and the latest computer trends from TN Computers.
                        </h2>
                    </motion.div>

                    {loading ? (
                        <p className="text-center text-gray-500">Loading blogs...</p>
                    ) : blogs.length === 0 ? (
                        <p className="text-center text-gray-500">No blogs found.</p>
                    ) : (
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {blogs.map((blog: any, i: number) => (
                                <motion.div
                                    key={blog.id}
                                    custom={i}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={cardVariants}
                                    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
                                >
                                    <div className="relative w-full h-56">
                                        <Image
                                            src={blog.banner_url || blog.image}
                                            alt={blog.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    <div className="flex flex-col justify-between flex-grow p-6">
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-800">
                                                {blog.title}
                                            </h3>
                                            <p className="text-sm text-gray-600 mt-2">
                                                {blog.excerpt}
                                            </p>
                                        </div>

                                        <div className="mt-6">
                                            <div className="text-xs text-gray-400">
                                                {formatDate(blog.created_at || blog.date)} · by {blog.author}
                                            </div>
                                            <Link
                                                href={`/blog/${slugConvert(blog?.title)}`}
                                                className="inline-block mt-2 text-purple-600 hover:underline font-medium text-sm"
                                            >
                                                Read More →
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}