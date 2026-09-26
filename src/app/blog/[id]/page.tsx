import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatDate, slugConvert } from "../../../../lib/utils";
import { BlogPost, getBlog, stripHtml } from "@/lib/blog";

// ISR cache: Revalidate blog pages every 60 seconds
export const revalidate = 60;

interface PageProps {
    params: {
        id: string;
    };
}

/**
 * Server-Side Dynamic SEO Metadata Generation
 */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const blog = await getBlog(params.id);

    if (!blog) {
        return {
            title: "Blog Not Found | TN Computers",
            description: "The requested blog post could not be found.",
            robots: { index: false, follow: false },
        };
    }

    const title = blog.meta_title?.trim() || blog.title;
    const rawDescription =
        blog.meta_description?.trim() ||
        blog.url_description?.trim() ||
        (blog.description ? stripHtml(blog.description) : "") ||
        stripHtml(blog.content || "").slice(0, 160);

    const cleanDescription = stripHtml(rawDescription).slice(0, 160);

    const canonicalUrl =
        blog.canonical_tag?.trim() ||
        `https://www.tncomputers.in/blog/${blog.url_slug || slugConvert(blog.title) || params.id}`;

    const bannerImage =
        blog.banner_url ||
        "https://www.tncomputers.in/_next/static/media/tn-computers-logo.5bf25c46.png";

    const imageAlt = blog.image_src_tags?.trim() || blog.title;

    // Extract keywords
    let keywords: string[] = [];
    if (Array.isArray(blog.meta_keywords) && blog.meta_keywords.length > 0) {
        keywords = blog.meta_keywords.map((k) => String(k).trim()).filter(Boolean);
    } else if (typeof blog.meta_keywords === "string" && blog.meta_keywords.trim()) {
        keywords = blog.meta_keywords.split(",").map((k) => k.trim()).filter(Boolean);
    }

    if (keywords.length === 0 && blog.schema) {
        try {
            const parsed = JSON.parse(blog.schema);
            if (Array.isArray(parsed.keywords)) {
                keywords = parsed.keywords.map((k: any) => String(k).trim()).filter(Boolean);
            }
        } catch {
            // ignore
        }
    }

    // Parse robots meta directives
    const robotsStr = (blog.robots_tag || "index, follow").toLowerCase();
    const shouldIndex = !robotsStr.includes("noindex");
    const shouldFollow = !robotsStr.includes("nofollow");

    return {
        title: `${title} | TN Computers`,
        description: cleanDescription,
        keywords: keywords.length > 0 ? keywords : undefined,
        alternates: {
            canonical: canonicalUrl,
        },
        robots: {
            index: shouldIndex,
            follow: shouldFollow,
            googleBot: {
                index: shouldIndex,
                follow: shouldFollow,
                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },
        openGraph: {
            title,
            description: cleanDescription,
            url: canonicalUrl,
            siteName: "TN Computers",
            locale: "en_IN",
            type: "article",
            publishedTime: blog.created_at,
            modifiedTime: blog.updated_at || blog.created_at,
            authors: [blog.author || "TN Computers"],
            images: [
                {
                    url: bannerImage,
                    width: 1200,
                    height: 630,
                    alt: imageAlt,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description: cleanDescription,
            images: [bannerImage],
            site: "@tncomputers",
            creator: "@tncomputers",
        },
        other: {
            ...(blog.image_src_tags ? { image_src: bannerImage } : {}),
            "article:published_time": blog.created_at,
            ...(blog.updated_at ? { "article:modified_time": blog.updated_at } : {}),
            ...(blog.author ? { "article:author": blog.author } : {}),
        },
    };
}

/**
 * Builds structured JSON-LD schemas for BlogPosting and Breadcrumbs
 */
function buildSchemas(blog: BlogPost, canonicalUrl: string) {
    let blogPostingSchema: any = null;

    if (blog.schema) {
        try {
            // Replace placeholder YOUR_FEATURED_IMAGE_URL with real banner
            const sanitized = blog.schema.replace(
                /YOUR_FEATURED_IMAGE_URL/g,
                blog.banner_url || "https://www.tncomputers.in/_next/static/media/tn-computers-logo.5bf25c46.png"
            );
            blogPostingSchema = JSON.parse(sanitized);
        } catch (e) {
            console.error("Error parsing blog schema JSON:", e);
        }
    }

    if (!blogPostingSchema || typeof blogPostingSchema !== "object") {
        blogPostingSchema = {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: blog.meta_title || blog.title,
            description: blog.meta_description || blog.url_description || "",
            mainEntityOfPage: {
                "@type": "WebPage",
                "@id": canonicalUrl,
            },
        };
    }

    // Ensure mandatory Rich Snippet fields are properly populated
    if (!blogPostingSchema["@context"]) blogPostingSchema["@context"] = "https://schema.org";
    if (!blogPostingSchema["@type"]) blogPostingSchema["@type"] = "BlogPosting";
    if (!blogPostingSchema.headline) blogPostingSchema.headline = blog.meta_title || blog.title;
    if (!blogPostingSchema.description) {
        blogPostingSchema.description =
            blog.meta_description || blog.url_description || stripHtml(blog.content || "").slice(0, 160);
    }

    if (!blogPostingSchema.image && blog.banner_url) {
        blogPostingSchema.image = [blog.banner_url];
    } else if (Array.isArray(blogPostingSchema.image)) {
        blogPostingSchema.image = blogPostingSchema.image.map((img: string) =>
            img === "YOUR_FEATURED_IMAGE_URL" ? (blog.banner_url || img) : img
        );
    }

    if (!blogPostingSchema.datePublished && blog.created_at) {
        blogPostingSchema.datePublished = blog.created_at;
    }
    if (!blogPostingSchema.dateModified) {
        blogPostingSchema.dateModified = blog.updated_at || blog.created_at;
    }
    if (!blogPostingSchema.author) {
        blogPostingSchema.author = {
            "@type": "Organization",
            name: blog.author || "TN Computers",
            url: "https://www.tncomputers.in/",
        };
    }
    if (!blogPostingSchema.publisher) {
        blogPostingSchema.publisher = {
            "@type": "Organization",
            name: "TN Computers",
            url: "https://www.tncomputers.in/",
            logo: {
                "@type": "ImageObject",
                url: "https://www.tncomputers.in/_next/static/media/tn-computers-logo.5bf25c46.png",
            },
        };
    }
    if (!blogPostingSchema.mainEntityOfPage) {
        blogPostingSchema.mainEntityOfPage = {
            "@type": "WebPage",
            "@id": canonicalUrl,
        };
    }

    // Breadcrumb schema
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.tncomputers.in",
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: "https://www.tncomputers.in/blog",
            },
            {
                "@type": "ListItem",
                position: 3,
                name: blog.title,
                item: canonicalUrl,
            },
        ],
    };

    return { blogPostingSchema, breadcrumbSchema };
}

/**
 * Server-Rendered Blog Detail Page
 */
export default async function BlogDetailPage({ params }: PageProps) {
    const blog = await getBlog(params.id);

    if (!blog) {
        notFound();
    }

    const canonicalUrl =
        blog.canonical_tag?.trim() ||
        `https://www.tncomputers.in/blog/${blog.url_slug || slugConvert(blog.title) || params.id}`;

    const { blogPostingSchema, breadcrumbSchema } = buildSchemas(blog, canonicalUrl);

    return (
        <>
            {/* 🔹 Server-Side Structured Data (JSON-LD) for Search Engines */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            <main className="bg-white min-h-screen py-10 md:py-16">
                <article className="max-w-4xl mx-auto px-4 sm:px-6">
                    {/* 🔹 Breadcrumb Navigation for SEO & Users */}
                    <nav aria-label="Breadcrumb" className="mb-6">
                        <ol className="flex items-center space-x-2 text-sm text-gray-500 flex-wrap">
                            <li>
                                <Link href="/" className="hover:text-purple-600 transition">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <span className="mx-1 text-gray-400">/</span>
                            </li>
                            <li>
                                <Link href="/blog" className="hover:text-purple-600 transition">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <span className="mx-1 text-gray-400">/</span>
                            </li>
                            <li
                                className="text-gray-900 font-medium truncate max-w-xs md:max-w-md"
                                title={blog.title}
                            >
                                {blog.title}
                            </li>
                        </ol>
                    </nav>

                    {/* 🔹 Blog Header */}
                    <header className="mb-8">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
                            {blog.title}
                        </h1>
                        {blog.subtitle && (
                            <p className="text-lg md:text-xl text-gray-600 mb-4 font-normal">
                                {blog.subtitle}
                            </p>
                        )}

                        {/* Author, Date & Meta info */}
                        <div className="flex items-center text-sm text-gray-500 py-3 border-y border-gray-100 gap-4 flex-wrap">
                            <div className="flex items-center gap-2">
                                <span className="font-semibold text-gray-800">
                                    By {blog.author || "TN Computers"}
                                </span>
                            </div>
                            <span>•</span>
                            <time dateTime={blog.created_at} className="text-gray-500">
                                {formatDate(blog.created_at)}
                            </time>
                            {blog.updated_at && blog.updated_at !== blog.created_at && (
                                <>
                                    <span>•</span>
                                    <span className="text-xs text-gray-400">
                                        Updated: {formatDate(blog.updated_at)}
                                    </span>
                                </>
                            )}
                        </div>
                    </header>

                    {/* 🔹 Featured Banner Image */}
                    {blog.banner_url && (
                        <figure className="relative w-full h-64 sm:h-80 md:h-[450px] mb-10 overflow-hidden rounded-xl shadow-sm bg-gray-100">
                            <Image
                                src={blog.banner_url}
                                alt={blog.image_src_tags || blog.title}
                                fill
                                priority
                                sizes="(max-width: 768px) 100vw, 896px"
                                className="object-cover"
                            />
                            {blog.image_src_tags && (
                                <figcaption className="sr-only">
                                    {blog.image_src_tags}
                                </figcaption>
                            )}
                        </figure>
                    )}

                    {/* 🔹 Blog Rich Content (Server Rendered) */}
                    <div
                        className="blog-prose prose prose-gray max-w-none text-gray-800"
                        dangerouslySetInnerHTML={{ __html: blog.content }}
                    />

                    {/* 🔹 Blog Footer Navigation */}
                    <footer className="mt-14 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
                        <Link
                            href="/blog"
                            className="inline-flex items-center px-5 py-2.5 rounded-lg bg-gray-100 hover:bg-purple-50 text-gray-700 hover:text-purple-700 font-medium transition"
                        >
                            ← Back to all blogs
                        </Link>

                        <span className="text-sm text-gray-400">
                            Published by {blog.author || "TN Computers"}
                        </span>
                    </footer>
                </article>
            </main>
        </>
    );
}
