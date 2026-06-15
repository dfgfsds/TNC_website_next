
import Image from "next/image";
import WhyChooseTNComputers from "../components/WhyChooseTNComputers";
import PcFaqSection from "../components/pcFaq";
export async function generateMetadata() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "TN Computers",
    "image": "https://www.tncomputers.in/tn-computers-logo.png",
    "@id": "https://www.tncomputers.in/",
    "url": "https://www.tncomputers.in/",
    "telephone": "+917429667788",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "126 B, Vanniar St, Bangaru Colony, K. K. Nagar",
      "addressLocality": "Chennai",
      "addressRegion": "TN",
      "postalCode": "600078",
      "addressCountry": "IN"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"
      ],
      "opens": "09:30",
      "closes": "21:00"
    },
    "sameAs": [
      "https://www.facebook.com/tncomputershardware",
      "https://www.instagram.com/tn__computers/"
    ]
  };

  return {
    title: "Custom PC Build in Chennai | PC Assembly Experts in India",
    description: "Get expert custom PC build in Chennai at TN Computers. Gaming PCs, workstation & home PCs with genuine parts, best pricing & local support.",
    keywords: "Custom PC Build in Chennai, Gaming PC Chennai, Workstation PC Chennai, Home PC Chennai, PC Assembly Chennai",
    author: "TN Computers",
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: "https://www.tncomputers.in/custom-pc-build",
    },
    openGraph: {
      title: "Custom PC Build in Chennai | PC Assembly Experts in India",
      description: "Get expert custom PC build in Chennai at TN Computers. Gaming PCs, workstation & home PCs with genuine parts, best pricing & local support.",
      url: "https://www.tncomputers.in/custom-pc-build",
      siteName: "TN Computers",
      type: "website",
      images: [
        {
          url: "https://www.tncomputers.in//prebuilt-pcs.jpg",
          width: 1200,
          height: 630,
          alt: "Custom PC Build in Chennai - TN Computers"
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom PC Build in Chennai | PC Assembly Experts in India",
      description: "Get expert custom PC build in Chennai at TN Computers. Gaming PCs, workstation & home PCs with genuine parts, best pricing & local support.",
      images: ["https://www.tncomputers.in/prebuilt-pcs.jpg"],
    },
    other: {
      "application/ld+json": JSON.stringify(schema),
    }
   
  };
}




export default function BuildPC() {
  return (
    <main className="bg-[#f0f5ff] overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative text-gray-800 py-24 px-4 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

        <div className="md:w-1/2 space-y-6 z-10">
          <h1 className="text-2xl md:text-4xl font-extrabold">
            Custom PC Build in Chennai <span className="text-purple-700">– TN Computers</span>
          </h1>
          <p className=" opacity-90">
            Looking for a Custom PC Build in Chennai that perfectly matches your needs and budget? TN Computers is your trusted destination for building high‑performance, reliable, and future‑ready custom PCs. Whether you need a gaming PC, professional workstation, or an affordable home/office system, we design and assemble PCs tailored exactly to your requirements.
          </p>
          <button className="bg-purple-700 text-white px-8 py-3 rounded-lg font-bold hover:scale-105 transition">
            START BUILD
          </button>
        </div>

        <div className="md:w-1/2 z-10">
          <Image
            src="/about1.webp"
            alt="Custom PC"
            width={600}
            height={600}
            className="rounded-2xl shadow-2xl hover:scale-105 transition"
          />
        </div>

        {/* Glow Shapes */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-pink-500 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-0 -left-20 w-72 h-72 bg-blue-500 rounded-full opacity-30 blur-3xl"></div>
    
    
      </section>

      <WhyChooseTNComputers />

  <section className="relative py-8 overflow-hidden bg-white">

    <div className="max-w-7xl mx-auto px-4">

 
      <div className="text-center mb-14">
        <h2 className="text-2xl md:text-4xl font-extrabold">
          Customize Every Component
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Choose the right components based on performance, budget, and future upgrades.
        </p>
      </div>

    
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">

        <div className="bg-white rounded-2xl border shadow-sm p-4 sm:p-6 hover:shadow-lg transition">
          <h3 className="font-semibold text-gray-800">Processor</h3>
          <p className="text-sm text-gray-500">Intel / AMD</p>
        </div>

        <div className="bg-white rounded-2xl border shadow-sm p-4 sm:p-6 hover:shadow-lg transition">
          <h3 className="font-semibold text-gray-800">Motherboard</h3>
          <p className="text-sm text-gray-500">Gaming / Pro</p>
        </div>

        <div className="bg-white rounded-2xl border shadow-sm p-4 sm:p-6 hover:shadow-lg transition">
          <h3 className="font-semibold text-gray-800">RAM</h3>
          <p className="text-sm text-gray-500">DDR4 / DDR5</p>
        </div>

        <div className="bg-white rounded-2xl border shadow-sm p-4 sm:p-6 hover:shadow-lg transition">
          <h3 className="font-semibold text-gray-800">Storage</h3>
          <p className="text-sm text-gray-500">SSD & HDD</p>
        </div>

        <div className="bg-white rounded-2xl border shadow-sm p-4 sm:p-6 hover:shadow-lg transition">
          <h3 className="font-semibold text-gray-800">Graphics</h3>
          <p className="text-sm text-gray-500">NVIDIA / AMD</p>
        </div>

        <div className="bg-white rounded-2xl border shadow-sm p-4 sm:p-6 hover:shadow-lg transition">
          <h3 className="font-semibold text-gray-800">Power Supply</h3>
          <p className="text-sm text-gray-500">SMPS</p>
        </div>

        <div className="bg-white rounded-2xl border shadow-sm p-4 sm:p-6 hover:shadow-lg transition">
          <h3 className="font-semibold text-gray-800">Cabinet</h3>
          <p className="text-sm text-gray-500">High Airflow</p>
        </div>

        <div className="bg-white rounded-2xl border shadow-sm p-4 sm:p-6 hover:shadow-lg transition">
          <h3 className="font-semibold text-gray-800">Cooling</h3>
          <p className="text-sm text-gray-500">Air / Liquid</p>
        </div>

      </div>

    </div>
  </section>



  
  <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">


      <div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-3 sm:mb-4">
          Why Custom PC Instead of Branded PCs?
        </h2>

      
        <ul className="space-y-3 sm:space-y-4">
          <li className="flex items-start gap-3">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 mt-1 text-purple-600" fill="none" stroke="currentColor" stroke-width="2"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-700 text-sm sm:text-base">
              Better performance for your budget
            </span>
          </li>

          <li className="flex items-start gap-3">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 mt-1 text-purple-600" fill="none" stroke="currentColor" stroke-width="2"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-700 text-sm sm:text-base">
              Fully upgradeable & future-proof
            </span>
          </li>

          <li className="flex items-start gap-3">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 mt-1 text-purple-600" fill="none" stroke="currentColor" stroke-width="2"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-700 text-sm sm:text-base">
              No unnecessary pre-installed software
            </span>
          </li>

          <li className="flex items-start gap-3">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 mt-1 text-purple-600" fill="none" stroke="currentColor" stroke-width="2"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-700 text-sm sm:text-base">
              Component-level warranty
            </span>
          </li>

          <li className="flex items-start gap-3">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 mt-1 text-purple-600" fill="none" stroke="currentColor" stroke-width="2"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-700 text-sm sm:text-base">
              Custom design & airflow optimization
            </span>
          </li>
        </ul>

          <p className="text-gray-600 text-sm sm:text-base mt-5 sm:mt-6">
         A custom PC gives you complete control over performance and cost.
        </p>

      </div>

      
      <div className="order-first lg:order-last">
         <Image
            src="/prebuilt-pcs.jpg"
            alt="Custom PC"
            width={600}
            height={600}
            className="rounded-2xl shadow-2xl hover:scale-105 transition"
          />
      </div>

    </div>
  </section>


  
  <section className="bg-white">
    <div className="max-w-7xl mx-auto px-4 py-16 ">

    <h2 className="text-3xl font-semibold text-center mb-14">
      Custom PC Build Process at TN Computers
    </h2>

    <div className="space-y-10">

      <div className="flex md:justify-start">
        <div className="bg-[#f0f5ff] p-6 rounded-xl w-full md:w-1/2">
          01 — Requirement discussion & budget planning
        </div>
      </div>

      <div className="flex md:justify-end">
        <div className="bg-[#f0f5ff] p-6 rounded-xl w-full md:w-1/2">
          02 — Component selection & configuration
        </div>
      </div>

      <div className="flex md:justify-start">
        <div className="bg-[#f0f5ff] p-6 rounded-xl w-full md:w-1/2">
          03 — Professional assembly & cable management
        </div>
      </div>

      <div className="flex md:justify-end">
        <div className="bg-[#f0f5ff] p-6 rounded-xl w-full md:w-1/2">
          04 — Performance testing & stress testing
        </div>
      </div>

      <div className="flex md:justify-start">
        <div className="bg-[#f0f5ff] p-6 rounded-xl w-full md:w-1/2">
          05 — Final delivery & setup support
        </div>
      </div>

    </div>
</div>
  </section>

    <section className="bg-white">

    <div className="bg-[#f0f5ff] rounded-lg shadow-md max-w-7xl mx-auto px-4 py-12">

      <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">
        Best Place for Custom PC Build in Chennai
      </h2>

      <div className="w-16 h-1 bg-purple-600 mb-6"></div>

      <p className="text-gray-700 leading-relaxed mb-4">
        Located in Chennai, <strong>TN Computers</strong> has built a strong reputation for delivering
        reliable and high-performance custom PCs. Our team stays updated with the latest
        hardware trends to ensure you get the best value and performance.
      </p>

      <p className="text-gray-700 leading-relaxed">
        Whether you are a gamer, professional, or business owner, TN Computers is your
        go-to solution for <strong>Custom PC Build in Chennai</strong>
      </p>

    </div>

  </section>
  <div className="bg-white">
<PcFaqSection/>
     
</div>


    </main>
  );
}
