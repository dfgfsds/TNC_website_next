import ContactSection from "./ContactSection";

export default function ContactPage() {
  return (
    <div>
      <title>Contact TN Computers | Best Laptop Showroom in Chennai</title>
      <meta
        name="description"
        content="Visit TN Computers, the trusted laptop store in Chennai. Contact us for new & refurbished laptops, custom gaming PC builds, and expert IT advice. Call or visit our showroom today!"
      />

      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://tncomputers.in/contact-us" />

      {/* Open Graph Tags */}
      <meta
        property="og:title"
        content="Contact TN Computers | Best Laptop Showroom in Chennai"
      />
      <meta
        property="og:description"
        content="Reach TN Computers for laptops, refurbished systems, gaming PCs & IT accessories. Call us or visit our Chennai showroom today!"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://tncomputers.in/contact-us" />
      <meta
        property="og:image"
        content="https://tncomputers.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftn-computers-logo.5bf25c46.png&w=640&q=75"
      />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Contact TN Computers | Best Laptop Showroom in Chennai"
      />
      <meta
        name="twitter:description"
        content="Get in touch with TN Computers for expert laptop guidance, refurbished systems & gaming setups."
      />
      <meta
        name="twitter:image"
        content="https://tncomputers.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftn-computers-logo.5bf25c46.png&w=640&q=75"
      />

      {/* JSON-LD Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ComputerStore",
          "name": "TN Computers",
          "image": "https://tncomputers.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftn-computers-logo.5bf25c46.png&w=640&q=75",
          "@id": "https://tncomputers.in",
          "url": "https://tncomputers.in/contact-us",
          "telephone": "+91-7429667788",
          "priceRange": "₹₹",
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
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday"
            ],
            "opens": "09:00",
            "closes": "22:00"
          },
          "sameAs": [
            "https://www.facebook.com/tncomputershardware",
            "https://www.instagram.com/tn__computers/",
            "https://www.youtube.com/@TN_Computers"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-7429667788",
            "contactType": "sales",
            "areaServed": "Chennai",
            "availableLanguage": ["English", "Tamil"]
          }
        })
      }} />
      <ContactSection />

      {/* ---------- Extra Content Below Contact Form ---------- */}

      <section className="px-6 md:px-20 py-16 max-w-5xl mx-auto">

        {/* Main H1 Content */}
        <h1 className="text-4xl font-bold text-gray-900 mt-10 mb-4">
          TN Computers – The Premier Laptop Showroom in Chennai
        </h1>

        <p className="text-gray-700 leading-relaxed mb-6">
          Welcome to TN Computers. Whether you are looking to upgrade your
          professional workstation, searching for budget-friendly refurbished
          systems, or need expert advice on a custom gaming rig, we are here to assist you.
          As a leading laptop store in Chennai, we bridge the gap between technology
          and your specific needs. Reach out via phone, email, or visit our showroom
          to experience the best in computing technology.
        </p>

        {/* ---------------- FAQ SECTION ---------------- */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
          Frequently Asked Questions (FAQs)
        </h2>

        <div className="space-y-6">

          <div>
            <p className="font-semibold text-lg text-gray-800">
              Q: Where is your laptop showroom in Chennai located?
            </p>
            <p className="text-gray-600">
              A: TN Computers is conveniently located at No.126 B, Vanniar Street,
              Bangaru Colony, KK Nagar, Chennai. Check the map above for directions.
            </p>
          </div>

          <div>
            <p className="font-semibold text-lg text-gray-800">
              Q: Do you sell refurbished laptops?
            </p>
            <p className="text-gray-600">
              A: Yes! We sell high-quality, quality-checked business and gaming laptops
              at affordable prices.
            </p>
          </div>

          <div>
            <p className="font-semibold text-lg text-gray-800">
              Q: Can you help me build a custom gaming PC?
            </p>
            <p className="text-gray-600">
              A: Absolutely! We specialize in custom gaming PC builds tailored to
              your performance needs.
            </p>
          </div>

          <div>
            <p className="font-semibold text-lg text-gray-800">
              Q: Do you offer a warranty on your products?
            </p>
            <p className="text-gray-600">
              A: Yes, all brand-new products include standard warranty. Refurbished
              systems and custom builds include TN Computers service warranty.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
