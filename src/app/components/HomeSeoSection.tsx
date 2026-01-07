
import { useState } from "react";

export default function HomeSeoSection() {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Your existing code above... */}

            {/* Collapsible Info Section */}
            <div className="bg-[#f5f7fc] px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl">


                    {/* HIDDEN CONTENT */}
                    <div
                        className={`transition-all duration-500 overflow-hidden ${open ? "max-h-[4000px] mt-6" : "max-h-0"
                            }`}
                    >

                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-start my-4">
                            Explore Our Wide Range of Products
                        </h2>

                        {/* FIRST PARAGRAPH ALWAYS VISIBLE */}
                        <p className="text-gray-700 text-lg text-start leading-relaxed">
                            At <b>TN Computers</b>, we pride ourselves on offering a diverse selection of computing products to meet every need:
                        </p>

                        <div className="text-gray-700 text-lg text-start space-y-4 leading-relaxed">


                            <ul className="list-disc text-start ml-6 mt-4 space-y-1">
                                <li><b>New Laptops and Computers –</b> All major brands available, including Dell, HP, Lenovo, ASUS, Acer, and more.
                                </li>
                                <li><b>Refurbished Laptops and Desktops –</b> Quality-tested systems that deliver performance at affordable prices.
                                </li>
                                <li><b>Custom PC and Laptop Builds –</b> Tailored machines designed for gaming, professional work, or personal use.
                                </li>
                                <li><b>Gaming PCs and Laptops –</b> Powerful, ready-to-use rigs for smooth gameplay and top-tier performance.
                                </li>
                                <li><b>IT Accessories –</b> Keyboards, mice, monitors, storage devices, and more.
                                </li>

                            </ul>

                            <p>
                                Whether you need to build a PC online or select a custom PC builder, TN Computers is your one-stop destination in Chennai.
                            </p>

                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-start my-4">Why Choose TN Computers – Best Laptop Shop in Chennai</h2>
                            <p>Choosing the right computer store can be overwhelming, but at TN Computers, we make it simple. Our Chennai showroom stands out because:</p>

                            <ul className="list-disc ml-6 space-y-1">
                                <li><b>Trusted Expertise –</b> Our team has years of experience in computer sales, repair, and custom builds.</li>
                                <li><b>Affordable Prices –</b> We offer Best Computer shop in Chennai and other quality systems at unbeatable rates.
                                </li>
                                <li><b>Customization Options –</b>  From gaming PC build Chennai to professional workstations, we tailor solutions to your needs.</li>
                                <li><b>After-Sales Support –</b> Enjoy peace of mind with our dedicated service and support.
                                </li>
                                <li><b>Wide Selection –</b> Find everything from laptop showroom in Chennai favorites to rare, high-performance machines.</li>
                            </ul>
                            <p className="mt-3">Whether you’re a student, professional, or gamer, our goal is to provide a seamless experience from browsing to purchase.</p>



                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-start my-4">Refurbished and Gaming Systems</h2>
                            <p>
                                Looking for value without compromise? TN Computers is your go-to for refurbished gaming PC laptops and a computer shop in Chennai. Each system is rigorously tested to ensure reliability and performance. Gaming laptops, high-speed desktops, and professional workstations are all available at competitive prices.
                            </p>

                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-start my-4">Custom PC Builder – Build Your Dream Machine</h2>

                            <p className="mt-3">

                                Want a PC that’s perfectly suited to your needs? Our custom PC builder service allows you to design a system with the latest components. Whether it’s for gaming PC build Chennai, office work, or creative projects, we help you create a high-performance machine that fits your budget. With TN Computers, building a PC online has never been easier.
                            </p>
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-start my-4">Visit Our Laptop Showroom in Chennai</h2>

                            <p className="mt-3">Step into our laptop showroom in Chennai to explore our full range of products, get expert advice, and see machines in action. From new laptops and custom PC builds to refurbished systems, we provide hands-on experience to help you make the right choice.</p>


                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-start my-4">Shop With Confidence – Best Computer Shop in Chennai</h2>
                            <p>At TN Computers, we combine quality, affordability, and service to ensure every customer leaves satisfied. Whether you’re buying your first laptop, upgrading your gaming setup, or building a custom PC, we are recognized as the Best Computer shop in Chennai for good reason.</p>

                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <span className="mt-3 h-2 w-2 rounded-full  bg-gray-600"></span>
                                    <div className="flex gap-2">
                                        <h3 className="font-semibold">Laptop Store Chennai</h3>
                                        <p className="text-gray-600">- All brands and models available.</p>
                                    </div>
                                </li>

                                <li className="flex items-start gap-3">
                                    <span className="mt-3 h-2 w-2 rounded-full  bg-gray-600"></span>
                                    <div className="flex gap-2">
                                        <h3 className="font-semibold">Refurbished Laptops in Chennai </h3>
                                        <p className="text-gray-600">- Tested and trusted systems.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-3 h-2 w-2 rounded-full  bg-gray-600"></span>
                                    <div className="flex gap-2">
                                        <h3 className="font-semibold">Gaming PC Build Chennai</h3>
                                        <p className="text-gray-600">- Powerful machines for serious gamers.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-3 h-2 w-2 rounded-full  bg-gray-600"></span>
                                    <div className="flex gap-2">
                                        <h3 className="font-semibold">Custom PC Builder</h3>
                                        <p className="text-gray-600">- Tailored solutions to meet your needs.</p>
                                    </div>
                                </li>
                            </ul>

                            <p>Experience technology like never before with TN Computers – your trusted partner for laptops, desktops, and accessories in Chennai.</p>

                        </div>
                    </div>

                    {/* READ MORE / LESS BUTTON */}
                    <div className="mt-6 text-center">
                        <button
                            onClick={() => setOpen(!open)}
                            className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow hover:bg-purple-700 transition"
                        >
                            {open ? "Read Less" : "Read More"}
                        </button>
                    </div>
                </div>
            </div>




        </>
    );
}
