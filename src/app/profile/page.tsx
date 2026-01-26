import type { Metadata } from "next";

import Profile from "./profile";

export const metadata: Metadata = {
  title: "My Account | TN Computers Customer Profile",
  description:
    "Access your TN Computers account to manage profile details, view orders, track purchases and update personal information easily.",

  robots: {
    index: false,
    follow: false,
  },

};

export default function Page() {
  return <Profile />;
}
