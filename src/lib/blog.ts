import { cache } from "react";
import { baseUrl } from "../../api-endpoints/ApiUrls";
import { slugConvert } from "../../lib/utils";

export const DEFAULT_VENDOR_ID = 66;

export interface BlogPost {
  id: number;
  banner_url?: string;
  created_at: string;
  created_by?: string;
  updated_at?: string;
  updated_by?: string;
  deleted_at?: string | null;
  deleted_by?: string | null;
  delete_status?: boolean;
  title: string;
  subtitle?: string;
  description?: string;
  content: string;
  author?: string;
  likes?: number;
  meta_tags?: any[];
  meta_keywords?: string[] | string;
  meta_title?: string;
  meta_description?: string;
  canonical_tag?: string;
  robots_tag?: string;
  url_description?: string;
  og_tags?: string;
  twitter_tags?: string;
  image_src_tags?: string;
  schema?: string;
  url_slug?: string;
  vendor?: number;
  user?: number;
}

/**
 * Strips HTML tags and collapses whitespace for clean text
 */
export function stripHtml(html: string): string {
  if (!html) return "";
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Fetch blog post with memoization across generateMetadata & page render
 */
export const getBlog = cache(async (idOrSlug: string): Promise<BlogPost | null> => {
  if (!idOrSlug) return null;
  const decoded = decodeURIComponent(idOrSlug).trim();
  const target = decoded.toLowerCase();

  // If numeric ID, try direct endpoint first
  if (/^\d+$/.test(decoded)) {
    try {
      const res = await fetch(`${baseUrl}/blog/${decoded}/`, {
        next: { revalidate: 60 },
      });
      if (res.ok) {
        const data = await res.json();
        if (data?.blog) return data.blog;
        if (data?.id) return data;
      }
    } catch (e) {
      console.error("Direct blog fetch failed, falling back to list:", e);
    }
  }

  // Fetch blogs list by vendor_id
  try {
    const res = await fetch(`${baseUrl}/blog/?vendor_id=${DEFAULT_VENDOR_ID}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    const data = await res.json();
    const blogs: BlogPost[] =
      data?.blogs || data?.results || (Array.isArray(data) ? data : []);

    const found = blogs.find((b) => {
      const bSlug = typeof b.url_slug === "string" ? b.url_slug.toLowerCase().trim() : "";
      const bTitleSlug = typeof b.title === "string" ? slugConvert(b.title).toLowerCase().trim() : "";
      const bUrlSlugConverted = typeof b.url_slug === "string" ? slugConvert(b.url_slug).toLowerCase() : "";
      const bId = String(b.id);
      return (
        (bSlug && bSlug === target) ||
        (bTitleSlug && bTitleSlug === target) ||
        (bUrlSlugConverted && bUrlSlugConverted === target) ||
        bId === target
      );
    });

    return found || null;
  } catch (error) {
    console.error("Error fetching blog list:", error);
    return null;
  }
});
