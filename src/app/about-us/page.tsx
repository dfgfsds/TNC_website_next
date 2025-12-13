import AnimatedAbout from "./AnimatedAbout";
import TabsSection from "../components/tabsSection";
import aboutimg from "../../../public/tn-about.jpg"


import {
  Laptop,
  Wrench,
  Gamepad2,
  RefreshCcw,
  Keyboard,
  HardDrive,
  MemoryStick,
  Plug,
  Video,
  Zap,
  CheckCircle
} from 'lucide-react'

export async function generateMetadata() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Store",
    "name": "TN Computers",
    "url": "https://www.tncomputers.in",
    "description": "TN Computers is a trusted laptop store in Chennai offering new laptops, refurbished systems, gaming PCs, and custom-built computers.",
    "image": `https://www.tncomputers.in/${aboutimg.src}`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "India"
    },
    "sameAs": [
      "https://www.facebook.com/tncomputershardware",
      "https://www.youtube.com/@TN_Computers"
    ]
  };

  return {
    title: "About Us | TN Computers – Trusted Laptop Store in Chennai",
    description:
      "Learn about TN Computers, one of Chennai’s most trusted laptop stores offering new laptops, custom PCs, refurbished systems, gaming desktops, and expert support.",
    keywords:
      "laptop store in chennai, best laptop shop in chennai, refurbished laptops chennai, custom pc builders chennai, used laptops chennai, gaming pc chennai",
    robots: {
      index: true,
      follow: true,
    },
    author: "TN Computers",
    alternates: {
      canonical: "https://www.tncomputers.in/about-us",
    },
    openGraph: {
      title: "About Us | TN Computers – Trusted Laptop Store in Chennai",
      description:
        "TN Computers offers new laptops, desktops, custom-built PCs, used & refurbished systems, and IT accessories with expert support in Chennai.",
      url: "https://www.tncomputers.in/about-us",
      type: "website",
      images: [
        {
          url: "https://www.tncomputers.in/tn-about.jpg",
          width: 1200,
          height: 630,
          alt: "TN Computers About Us Banner",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "About Us | TN Computers – Trusted Laptop Store in Chennai",
      description:
        "Discover TN Computers — Chennai’s go-to store for laptops, custom PCs, refurbished systems, and tech accessories.",
      images: ["https://www.tncomputers.in/tn-about.jpg"],
    },
    other: {
      "application/ld+json": JSON.stringify(schema),
    },
    icons: {
      icon: "https://www.tncomputers.in/favicon.ico",
    },
  };
}


export default function AboutPage() {
  const points = [
    'Genuine & branded products',

    'High-quality custom PC builds',
    'Expert product recommendations',
    'Budget-friendly refurbished systems',
    'Competitive pricing',
    'Strong after-sales support',
  ]

  return (
    <>
      

      <div>
        <AnimatedAbout />
        <div className="text-gray-700 mt-3 p-4  max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-center font-bold text-gray-900 leading-tight">Who We Are</h2>
          {/* <div className="w-24 h-1 bg-slate-900 mx-auto rounded-full"></div> */}
          <p className="mt-5 text-center text-base sm:text-lg text-gray-700 leading-relaxed">TN Computers, we are a team of skilled technicians, laptop experts, and professional custom PC builders dedicated to delivering genuine products and personalised guidance. Whether you need a brand-new laptop, a performance workstation, a gaming PC, or a budget-friendly refurbished device, our focus remains on quality, transparency, and long-term value.</p>
          <p className="mt-4 text-center text-base sm:text-lg text-gray-700 leading-relaxed">TN Computers was established with one simple purpose — to make high-performance computing accessible to everyone. Over time, we have grown into a reputable computer store known for our authentic products, customer-friendly service, and dependable after-sales support.</p>
        </div>

        <section id="offer" className="py-10 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6">

            {/* Heading */}
            <div className="text-center mb-8 sm:mb-10">
              <h2 className="text-3xl sm:text-4xl text-center font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
                What We Offer
              </h2>
              <p className="text-base sm:text-xl text-slate-600 mt-4 sm:mt-6 max-w-4xl mx-auto">
                TN Computers provides a comprehensive range of systems, components, and tech accessories to meet every requirement:
              </p>
            </div>

            {/* Offer Cards */}
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-12 max-w-6xl mx-auto mb-8 sm:mb-10">

              {[
                {
                  icon: Laptop,
                  title: 'Brand-New Laptops & Desktops',
                  desc: 'We offer the latest laptops and desktops from top global brands, making us a preferred choice for customers seeking durable, efficient, and high-performance machines for work, study, or home use.'
                },
                {
                  icon: Wrench,
                  title: 'Custom PC Building Services',
                  desc: 'We specialize in building custom PCs tailored for gaming, editing, programming, animation, and professional workloads. Customers can also build their PC online by choosing components to create a perfectly optimized system.'
                },
                {
                  icon: Gamepad2,
                  title: 'Used & Refurbished Gaming PCs',
                  desc: 'Gamers can explore our curated selection of used gaming desktops and refurbished gaming laptops. Every device is tested, upgraded, and fine-tuned to deliver smooth gaming performance at an affordable price.'
                },
                {
                  icon: RefreshCcw,
                  title: 'Refurbished Laptops & Desktops',
                  desc: 'We offer reliable, certified refurbished systems ideal for office work, students, designers, freelancers, and home use. Each device undergoes strict quality checks, component testing, and performance optimisation.'
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 sm:p-10 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all border border-slate-200"
                >
                  <h3 className="text-xl sm:text-3xl font-bold text-slate-900 mb-4 sm:mb-6 flex items-start sm:items-center gap-3">
                    <item.icon className="w-10 h-10 sm:w-14 sm:h-14 bg-purple-100 text-gray-700 rounded-xl p-2" />
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-lg text-slate-700 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Accessories Section */}
            <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-2xl border border-slate-200 max-w-5xl mx-auto">
              <h3 className="text-2xl sm:text-4xl font-bold text-slate-900 mb-6 sm:mb-12 text-center">
                IT Accessories & Electronic Essentials
              </h3>

              <p className="text-base sm:text-xl text-slate-600 mb-8 sm:mb-12 text-center max-w-3xl mx-auto">
                In addition to computers, TN Computers also provides a wide range of accessories
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8 text-center">
                {[
                  { icon: Keyboard, label: 'Keyboards & Mouse' },
                  { icon: HardDrive, label: 'Pen Drives & Storage' },
                  { icon: MemoryStick, label: 'SSDs & RAM' },
                  { icon: Plug, label: 'Chargers & Cables' },
                  { icon: Video, label: 'CCTV & Routers' },
                  { icon: Zap, label: 'UPS & Power Backup' }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="p-4 sm:p-8 rounded-xl hover:scale-105 transition-transform"
                  >
                    <item.icon className="w-8 h-8 sm:w-10 sm:h-10 mx-auto text-slate-700 mb-3" />
                    <p className="text-sm sm:text-base font-medium text-slate-800">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>

              <p className="text-sm sm:text-lg text-slate-600 mt-8 sm:mt-12 text-center italic">
                We also offer Bluetooth speakers, home theater systems, and soundbars that deliver rich, immersive audio for home entertainment.
              </p>
            </div>
          </div>
        </section>
        <section id="why-choose" className="py-10 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6">

            {/* Heading */}
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-4 sm:mb-6">
                Why Customers Choose TN Computers
              </h2>
              <p className="text-base sm:text-xl text-slate-600 max-w-2xl mx-auto">
                Customers across India trust TN Computers 
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
              {points.map((point, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-6 sm:p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all border border-slate-200"
                >
                  <CheckCircle className="w-6 h-6 sm:w-6 sm:h-6 text-[#9333ea] flex-shrink-0 mt-1" />
                  <p className="text-base sm:text-lg font-medium  text-slate-800">
                    {point}
                  </p>
                </div>
              ))}
            </div>
           
          </div>
           <p className="text-base sm:text-xl text-center mt-5 text-slate-600 max-w-3xl mx-auto">

              From basic computing needs to high-end gaming requirements, we deliver the right system for every user.
            </p>
        </section>
        <section className="py-10 sm:py-16">
           <h2 className="text-2xl md:text-4xl font-black text-center text-slate-900 mb-4 sm:mb-6">
            Your Reliable Tech Partner
              </h2>

              <p className="text-base sm:text-lg text-center mt-5 text-slate-700 max-w-7xl mx-auto">TN Computers continues to grow as a leading laptop and computer store in Chennai, offering powerful devices, custom PC builds, and value-packed refurbished systems. Whether you’re searching for the best laptop store in Chennai and a dependable place for refurbished and custom-built computers, TN Computers ensures you get the perfect balance of performance, reliability, and affordability.</p>

        </section>
        <TabsSection />
      
      </div>
    </>
  );
}
