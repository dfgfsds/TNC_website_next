import FaqSection from "../components/contactFaq";
import ContactSection from "./ContactSection";
import logo from "../../../public/logo.png";

export async function generateMetadata() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ComputerStore",
    "@id": "https://www.tncomputers.in",
    name: "TN Computers",
    url: "https://www.tncomputers.in/contact-us",
    image: `https://www.tncomputers.in/tn-computers-logo.png`,
    telephone: "+91-7429667788",
 
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: "126 B, Vanniar St, Bangaru Colony, K. K. Nagar",
      addressLocality: "Chennai",
      addressRegion: "TN",
      postalCode: "600078",
      addressCountry: "IN",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "22:00",
    },
    sameAs: [
      "https://www.facebook.com/tncomputershardware",
      "https://www.instagram.com/tn__computers/",
      "https://www.youtube.com/@TN_Computers",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-7429667788",
      contactType: "sales",
      areaServed: "Chennai",
      availableLanguage: ["English", "Tamil"],
    },
  };

  return {
    title: "Contact TN Computers | Best Laptop Showroom in Chennai",
    description:
      "Visit TN Computers, the trusted laptop store in Chennai. Contact us for new & refurbished laptops, custom gaming PC builds, and expert IT advice. Call or visit our showroom today!",
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: "https://www.tncomputers.in/contact-us",
    },
    openGraph: {
      title: "Contact TN Computers | Best Laptop Showroom in Chennai",
      description:
        "Reach TN Computers for laptops, refurbished systems, gaming PCs & IT accessories. Call us or visit our Chennai showroom today!",
      url: "https://www.tncomputers.in/contact-us",
      type: "website",
      images: [
        {
          url: "https://www.tncomputers.in/tn-computers-logo.png",
          width: 1200,
          height: 630,
          alt: "TN Computers Contact Page",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Contact TN Computers | Best Laptop Showroom in Chennai",
      description:
        "Get in touch with TN Computers for expert laptop guidance, refurbished systems & gaming setups.",
      images: ["https://www.tncomputers.in/tn-computers-logo.png"],
    },
    other: {
      "application/ld+json": JSON.stringify(schema),
    },
    icons: {
      icon: "https://www.tncomputers.in/favicon.ico",
    },
  };
}


export default function ContactPage() {
  return (
    <div>
     <section className="bg-white py-10 sm:py-12">
  <div className="container mx-auto px-4 sm:px-6 max-w-6xl text-center">
    
    <h1 className="text-2xl md:text-4xl  font-extrabold text-[#9333ea] leading-tight">
      TN Computers <br/>
      <span className="block text-gray-700 mt-3">
        The Premier Laptop Showroom in Chennai
      </span>
    </h1>

    <p className="mt-6 text-base sm:text-lg text-gray-700 leading-relaxed">
  <b> Welcome to TN Computers.</b> Whether you are looking to upgrade your professional workstation, searching for budget-friendly refurbished systems, or need expert advice on a custom gaming rig, we are here to assist you.
    </p>

    <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
      As a leading laptop store in Chennai, we believe in bridging the gap between technology and your specific needs. Reach out to us via phone, email, or visit our showroom to experience the best in computing technology.
    </p>

  </div>
</section>

      <ContactSection />
      <FaqSection/>

   
    </div>
  );
}
