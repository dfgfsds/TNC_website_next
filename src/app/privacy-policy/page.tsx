import type { Metadata } from "next";

import PrivacyPolicyPage from "./PrivacyClient";

export const metadata: Metadata = {
  title: "Privacy Policy | TN Computers India",
  description:
    "Read TN Computers privacy policy to understand how we collect, use and protect your personal information on our website.",
};

export default function Page() {
  return <PrivacyPolicyPage />;
}
