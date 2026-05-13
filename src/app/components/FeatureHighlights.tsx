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

      {/* <section className="relative py-16 px-4">
 
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
      </section> */}

      <section className="relative py-20 px-4 overflow-hidden">
        {/* BACKGROUND EFFECTS */}
        <div className="absolute inset-0 bg-[#f5f7fc]" />

        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-500/20 blur-[140px] rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-fuchsia-500/20 blur-[140px] rounded-full"></div>

        <div className="relative max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-[40px] border border-white/20 bg-gradient-to-br from-[#9333ea] via-[#7e22ce] to-[#6d28d9] shadow-[0_25px_100px_rgba(147,51,234,0.45)]">

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_35%)]"></div>

            {/* FLOATING CIRCLES */}
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-fuchsia-400/20 rounded-full blur-3xl"></div>

            <div className="relative z-10 px-6 sm:px-10 lg:px-16 py-14 lg:py-16">

              {/* BADGE */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold text-white backdrop-blur-md shadow-lg">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                Trusted Laptop Showroom in Chennai
              </div>

              {/* MAIN CONTENT */}
              <div className="mt-8 grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">

                {/* LEFT */}
                <div>

                  {/* HEADING */}
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight max-w-4xl">
                    Visit TN Computers
                    <span className="block mt-2 text-white/90">
                      Trusted Laptop Showroom in Chennai
                    </span>
                  </h2>

                  {/* DESCRIPTION */}
                  <p className="mt-7 text-lg sm:text-xl text-white/85 leading-relaxed max-w-3xl">
                    Experience the latest laptops, gaming PCs, desktops, and
                    accessories at our Chennai showroom.
                  </p>

                  {/* DESTINATION TEXT */}
                  <div className="mt-10">
                    <p className="text-white font-semibold text-xl mb-5">
                      Your trusted destination for:
                    </p>

                    {/* SERVICE PILLS */}
                    <div className="flex flex-wrap gap-4">
                      {[
                        "Laptop store in Chennai",
                        "Desktop store in Chennai",
                        "Gaming PC shop in Chennai",
                        "Custom PC builders in Chennai",
                        "Refurbished laptops in Chennai",
                        "Computer accessories shop Chennai",
                      ].map((item, idx) => (
                        <div
                          key={idx}
                          className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 px-5 py-4 text-white font-semibold backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-[#6d28d9] hover:scale-[1.02]"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* BOTTOM TEXT */}
                  <p className="mt-10 text-white/85 text-lg leading-relaxed max-w-3xl">
                    Upgrade your technology with Chennai’s most reliable computer
                    store today.
                  </p>

                  {/* BUTTONS */}
                  <div className="mt-10 flex flex-col sm:flex-row gap-5">

                    <a
                      href="/shop"
                      className="group inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-white text-[#6d28d9] font-bold text-lg shadow-xl hover:bg-[#f5e9ff] transition-all duration-300 hover:scale-[1.03]"
                    >
                      Explore Laptops
                    </a>

                    <a
                      href="tel:+917429667788"
                      className="inline-flex items-center justify-center px-8 py-4 rounded-2xl border border-white/30 bg-white/5 text-white font-bold text-lg backdrop-blur-md hover:bg-white hover:text-[#6d28d9] transition-all duration-300 hover:scale-[1.03]"
                    >
                      Call Now
                    </a>
                  </div>
                </div>

                {/* RIGHT SIDE CARD */}
                <div className="relative">

                  <div className="relative rounded-[32px] border border-white/20 bg-white/10 p-8 backdrop-blur-xl shadow-2xl">

                    {/* GLOW */}
                    <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>

                    <div className="relative z-10">

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-white/70 text-sm font-medium">
                            TN Computers
                          </p>

                          <h3 className="mt-1 text-2xl font-extrabold text-white">
                            Chennai’s Trusted PC Store
                          </h3>
                        </div>

                        <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center text-3xl">
                          💻
                        </div>
                      </div>

                      {/* STATS */}
                      <div className="mt-8 grid grid-cols-2 gap-4">

                        <div className="rounded-2xl bg-white/10 border border-white/10 p-5">
                          <h4 className="text-3xl font-black text-white">
                            1000+
                          </h4>
                          <p className="mt-1 text-white/70 text-sm">
                            Happy Customers
                          </p>
                        </div>

                        <div className="rounded-2xl bg-white/10 border border-white/10 p-5">
                          <h4 className="text-3xl font-black text-white">
                            500+
                          </h4>
                          <p className="mt-1 text-white/70 text-sm">
                            Gaming PCs Built
                          </p>
                        </div>

                        <div className="rounded-2xl bg-white/10 border border-white/10 p-5">
                          <h4 className="text-3xl font-black text-white">
                            EMI
                          </h4>
                          <p className="mt-1 text-white/70 text-sm">
                            Available
                          </p>
                        </div>

                        <div className="rounded-2xl bg-white/10 border border-white/10 p-5">
                          <h4 className="text-3xl font-black text-white">
                            RTX
                          </h4>
                          <p className="mt-1 text-white/70 text-sm">
                            Gaming Builds
                          </p>
                        </div>
                      </div>

                      {/* PHONE */}
                      {/* <a
                  href="tel:+917429667788"
                  className="mt-8 flex items-center justify-center rounded-2xl bg-white text-[#6d28d9] px-6 py-4 font-bold text-lg hover:bg-[#f5e9ff] transition-all duration-300"
                >
                  📞 +91 74296 67788
                </a> */}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

    </section>
  );
}
