// app/components/AboutContent.tsx

import React from "react";

export default function AboutContent() {
    return (
        <section className="bg-white py-12 px-4 sm:px-6 md:px-12 lg:px-20 text-gray-800">
            <div className="max-w-5xl mx-auto space-y-10">

                {/* Who We Are */}
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-gray-900">Who We Are</h2>
                    <p className="text-gray-700 leading-relaxed">
                        At <span className="font-semibold text-purple-600">TN Computers</span>, we are a team of skilled
                        technicians, laptop experts, and professional custom PC builders dedicated to delivering genuine
                        products and personalised guidance. Whether you need a brand-new laptop, a performance workstation,
                        a gaming PC, or a budget-friendly refurbished device, our focus remains on quality, transparency,
                        and long-term value.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        TN Computers was established with one simple purpose — to make high-performance computing accessible
                        to everyone. Over time, we have grown into a reputable computer store known for our authentic
                        products, customer-friendly service, and dependable after-sales support.
                    </p>
                </div>

                {/* What We Offer */}
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-gray-900">What We Offer</h2>
                    <p className="text-gray-700">TN Computers provides a comprehensive range of systems, components, and tech accessories to meet every requirement:</p>

                    <div className="space-y-3">
                        <h3 className="text-xl font-semibold text-gray-900">Brand-New Laptops & Desktops</h3>
                        <p className="text-gray-700">
                            We offer the latest laptops and desktops from top global brands—perfect for work, study, and
                            home use. Customers trust us for high-performance, durable, and efficient machines.
                        </p>
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-xl font-semibold text-gray-900">Custom PC Building Services</h3>
                        <p className="text-gray-700">
                            We specialize in building custom PCs for gaming, editing, animation, programming, and professional workloads.
                            Customers can also build their PC online by choosing components to create a perfectly optimised system.
                        </p>
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-xl font-semibold text-gray-900">Used & Refurbished Gaming PCs</h3>
                        <p className="text-gray-700">
                            Explore our curated collection of used gaming desktops and refurbished gaming laptops—each device fully tested, upgraded, and fine-tuned for smooth gaming at affordable prices.
                        </p>
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-xl font-semibold text-gray-900">Refurbished Laptops & Desktops</h3>
                        <p className="text-gray-700">
                            Ideal for students, professionals, freelancers, and home use. Every device undergoes strict
                            component testing and performance optimisation to ensure reliability.
                        </p>
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-xl font-semibold text-gray-900">IT Accessories & Electronic Essentials</h3>
                        <ul className="list-disc ml-6 space-y-1 text-gray-700">
                            <li>Keyboards & mouse devices</li>
                            <li>Pen drives & external storage</li>
                            <li>SSDs & RAM</li>
                            <li>Chargers & cables</li>
                            <li>CCTV cameras & routers</li>
                            <li>UPS & power backup solutions</li>
                        </ul>
                        <p className="text-gray-700">
                            We also offer Bluetooth speakers, home theater systems, and soundbars for a rich home entertainment experience.
                        </p>
                    </div>
                </div>

                {/* Why Customers Choose Us */}
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-gray-900">Why Customers Choose TN Computers</h2>

                    <ul className="list-disc ml-6 space-y-1 text-gray-700">
                        <li>Genuine & branded products</li>
                        <li>Expert product recommendations</li>
                        <li>High-quality custom PC builds</li>
                        <li>Budget-friendly refurbished systems</li>
                        <li>Competitive pricing</li>
                        <li>Strong after-sales support</li>
                    </ul>

                    <p className="text-gray-700">
                        From basic computing to high-end gaming, we deliver the right system for every user.
                    </p>
                </div>

                {/* Reliable Tech Partner */}
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-gray-900">Your Reliable Tech Partner</h2>
                    <p className="text-gray-700 leading-relaxed">
                        TN Computers continues to grow as a leading laptop and computer store in Chennai. Whether youre looking
                        for powerful new devices, value-packed refurbished systems, or professional custom PC builds, we ensure
                        you get the perfect balance of performance, reliability, and affordability.
                    </p>
                </div>
            </div>
        </section>
    );
}
