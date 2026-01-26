import type { Metadata } from "next";

import TermsPage from "./terms";

export const metadata: Metadata = {
  title: "Terms and Conditions | TN Computers",
  description:
    "View the terms and conditions for using TN Computers website, products, services, payments and customer responsibilities.",
};

export default function Page() {
  return <TermsPage/>;
}
