// app/components/FeatureHighlights.tsx
import {
  FaShippingFast,
  FaUndo,
  FaLock,
  FaHeadset,
} from "react-icons/fa";

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
          <iframe
            src="https://www.youtube.com/embed/c3L9aaxKMaw?si=lyBmxAhmX3_HsmRU"
            title="TN Computers Introduction Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-y border-gray-300">
          {features.map((item, i) => (
            <div
              key={i}
              className={`flex flex-col items-center text-center py-6 px-4 ${
                i !== features.length - 1 ? "border-b sm:border-b-0 lg:border-r" : ""
              } border-gray-300`}
            >
              {item.icon}
              <h4 className="text-base font-bold text-black mt-4">{item.title}</h4>
              <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
