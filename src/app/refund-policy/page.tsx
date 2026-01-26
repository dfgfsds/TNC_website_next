import type { Metadata } from "next";
import RefundPolicy from "./refundPolicy";


export const metadata: Metadata = {
  title: "Refund & Return Policy | TN Computers",
  description:
    "Check TN Computers refund and return policy for product cancellations, replacements, eligibility and processing timelines.",
};

export default function Page() {
  return <RefundPolicy/>;
}
