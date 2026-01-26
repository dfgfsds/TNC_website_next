import type { Metadata } from "next";
import Cart from "./cart";

export const metadata: Metadata = {
  title: "Shopping Cart | TN Computers Online Store",
  description:
    "Review products in your TN Computers cart. Update quantities, remove items and proceed to secure checkout for computer parts and accessories.",

  robots: {
    index: false,
    follow: false,
  },

};

export default function Page() {
  return <Cart />;
}
