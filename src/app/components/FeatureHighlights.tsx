// app/components/FeatureHighlights.tsx
import {
  FaShippingFast,
  FaUndo,
  FaLock,
  FaHeadset,
} from "react-icons/fa";
import CustomerReviewSection from "./CustomerReviewSection";
import BrandsSection from "./BrandsSection";
import FaqSection from "./faqSection";


export default function FeatureHighlights() {
  const features = [
    {
      icon: <FaShippingFast className="w-10 h-10 text-[#9333ea]" />,
      title: "Worldwide Shipping",
      desc: "Enjoy delivery on every order from TN Computers.",
    },
    {
      icon: <FaUndo className="w-10 h-10 text-[#9333ea]" />,
      title: "Laptops & Monitors",
      desc: "Quality-checked laptops at affordable prices.",
    },
    {
      icon: <FaLock className="w-10 h-10 text-[#9333ea]" />,
      title: "Secure Payments",
      desc: "Secure checkout verified by TN Computers.",
    },
    {
      icon: <FaHeadset className="w-10 h-10 text-[#9333ea]" />,
      title: "Online Customer Service",
      desc: (
        <>
          Call our TN Computers expert{" "}
          <span className="text-[#9333ea] font-semibold">
            +91 - 7429667788
          </span>
        </>
      ),
    },
  ];


  return (
    <section className="bg-[#fff] py-10">

      <div className="w-full max-w-5xl mx-auto my-8 md:my-12 px-4">
        <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg">
          {/* <iframe
            src="https://www.youtube.com/embed/c3L9aaxKMaw?si=lyBmxAhmX3_HsmRU"
            title="TN Computers Introduction Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe> */}
          <iframe
            src="https://www.youtube.com/embed/c3L9aaxKMaw?si=lyBmxAhmX3_HsmRU"
            title="TN Computers Introduction Video"
            loading="lazy"        // 🔥 ADD THIS
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          />

        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-y border-gray-300">
          {features.map((item, i) => (
            <div
              key={i}
              className={`flex flex-col items-center text-center py-6 px-4 ${i !== features.length - 1 ? "border-b sm:border-b-0 lg:border-r" : ""
                } border-gray-300`}
            >
              {item.icon}
              <h4 className="text-base font-bold text-black mt-4">{item.title}</h4>
              <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <CustomerReviewSection />
      <BrandsSection />
      <FaqSection />

      {/* <section className="relative py-16 px-4 ">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_60%)]"></div>

        <div className="relative max-w-5xl mx-auto">
          <div className="backdrop-blur-2xl bg-gradient-to-br from-[#8b40f5] via-[#8b40f5] to-[#8b40f5] border border-white/20 rounded-3xl p-8 md:p-12 text-center shadow-[0_20px_80px_rgba(161,0,254,0.45)]">

            <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Upgrade Your Technology with Chennai’s
              <br /><span className="text-white">Top Laptop Store</span>
            </h3>

            <p className="mt-4 text-gray-50 max-w-3xl mx-auto text-base md:text-lg">
              Visit <span className="font-semibold text-white">TN Computers</span> today or call us to discover your perfect laptop or custom PC.
              Enjoy unbeatable prices, expert guidance, and unparalleled support.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/shop"
                className="px-8 py-3 rounded-xl bg-white text-[#6a00ff] hover:bg-[#f5e9ff] font-semibold transition-all duration-300 shadow-lg"
              >
                Explore Laptops
              </a>

              <a
                href="tel:+917429667788"
                className="px-8 py-3 rounded-xl border border-white/40 text-white hover:bg-white hover:text-[#6a00ff] font-semibold transition-all duration-300"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section> */}

      <section className="relative py-16 px-4">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_60%)]"></div>

        <div className="relative max-w-5xl mx-auto">
          <div className="backdrop-blur-xl bg-gradient-to-br from-[#8b40f5] via-[#8b40f5] to-[#8b40f5] border border-white/20 rounded-3xl p-8 md:p-12 text-center shadow-[0_20px_80px_rgba(161,0,254,0.45)]">

            <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Upgrade Your Technology with Chennai’s
              <span className="block mt-1 text-white">
                Top Laptop Store
              </span>
            </h3>

            <p className="mt-4 text-gray-50 max-w-3xl mx-auto text-base md:text-lg">
              Visit <span className="font-semibold text-white">TN Computers</span> today or call us to discover your perfect laptop or custom PC.
              Enjoy unbeatable prices, expert guidance, and unparalleled support.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/shop"
                className="px-8 py-3 rounded-xl bg-white text-[#6a00ff] hover:bg-[#f5e9ff] font-semibold transition-all duration-300 shadow-lg"
              >
                Explore Laptops
              </a>

              <a
                href="tel:+917429667788"
                className="px-8 py-3 rounded-xl border border-white/40 text-white hover:bg-white hover:text-[#6a00ff] font-semibold transition-all duration-300"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

    </section>
  );
}
