"use client";

import { useState } from "react";
import {
    ChevronDown,
    ChevronUp,
    Laptop,
    Monitor,
    Cpu,
    Gamepad2,
    ShieldCheck,
    Wrench,
    CheckCircle2,
    HelpCircle,
    Star,
    Quote
} from "lucide-react";

export default function HomeSeoSection() {
    const [open, setOpen] = useState(false);
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    const testimonials = [
        {
            title: "Great PC Build Experience",
            quote: "Got my PC built at TN Computers and I’m very happy with the performance. The staff were friendly, explained everything clearly, and guided me throughout the purchase. Overall, the experience was smooth and satisfying.",
            author: "Vejaysundaram R",
            rating: 5,
        },
        {
            title: "Affordable Laptop Purchase",
            quote: "I purchased an Acer Aspire 3 laptop from TN Computers at a very affordable price. The customer handling was really good, and I’m completely satisfied with the service. A great place to explore branded products.",
            author: "Udhaya Kumar",
            rating: 5,
        },
        {
            title: "Excellent Laptop Pricing & Support",
            quote: "I bought a brand-new Lenovo laptop from TN Computers and was really impressed with the pricing. The team provided good customer service and made the overall buying experience easy and comfortable.",
            author: "Mr. Praveen",
            rating: 5,
        },
        {
            title: "Quality Gaming PC at a Great Budget",
            quote: "I bought a new gaming PC and was very happy with the product and the suggestions provided by the team. The PC quality was better than I expected for my budget. Very satisfied with the overall experience.",
            author: "Bala Balalakshmi",
            rating: 5,
        },
        {
            title: "Friendly & Knowledgeable Team",
            quote: "The staff were knowledgeable, friendly, and patient. They explained the differences between laptop models clearly and answered all my questions without rushing me into a decision. I really appreciated the genuine guidance.",
            author: "ZS ROSE",
            rating: 5,
        },
        {
            title: "Good Service & Affordable Pricing",
            quote: "I purchased a PC from TN Computers and was satisfied with the affordable pricing, product quality, and service. The staff had good hardware knowledge and provided helpful guidance throughout the purchase. A recommended place for PCs and laptops.",
            author: "Lokesh Karthik",
            rating: 5,
        },
    ];

    const faqs = [
        {
            question: "Which is a reliable computer store in Chennai for laptops, desktops and gaming PCs?",
            answer: "TN Computers is a one-stop destination in KK Nagar for laptops, desktops, gaming PCs, custom builds, upgrades and repairs — with staff who explain specs in practical terms instead of pushing the priciest configuration.",
        },
        {
            question: "What makes TN Computers the best computer shop in Chennai for students and businesses?",
            answer: "TN Computers matches configurations to real usage — budget-friendly builds for students, office-ready systems for businesses, and performance builds for gamers — rather than one-size-fits-all setups.",
        },
        {
            question: "Where can I buy quality PC accessories in Chennai for a gaming setup?",
            answer: "TN Computers stocks gaming keyboards, mice, headsets, monitors and controllers, chosen for comfort, response time and durability during long sessions.",
        },
        {
            question: "Which is an affordable laptop store in Chennai for students and professionals?",
            answer: "TN Computers helps balance price and performance — prioritizing portability and battery life for students, processing power for professionals — without compromising on what actually matters for your use case.",
        },
        {
            question: "How do I get a custom PC build in Chennai for gaming or video editing?",
            answer: "TN Computers plans builds around your actual workload — gaming, streaming, 3D rendering or editing — checking every component works together, not just performs well individually. The same team also sources PC components in Chennai for future upgrades, so your build stays compatible long-term.",
        },
        {
            question: "Are affordable refurbished laptops in Chennai a good option for budget buyers?",
            answer: "Yes — if you check processor generation, battery health, screen condition and warranty support. TN Computers evaluates these factors so you get real usability, not just a low price tag.",
        },
    ];

    return (
        <section className="mt-8">

            {/* FIRST SECTION (ALWAYS VISIBLE) */}
            {/* 1. H2 - One-Stop Computer Store in Chennai for Every Requirement */}
            <div className="bg-white border border-purple-100 rounded-3xl p-6 sm:p-10 shadow-sm space-y-5">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight">
                    One-Stop Computer Store in Chennai for Every Requirement
                </h2>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    A good computer purchase starts with understanding how you will use the system. Processor speed, RAM, SSD capacity, graphics performance, display quality, cooling, connectivity, and upgradeability all influence the overall experience.
                </p>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    As a local computer store in Chennai, we aim to make technology purchasing easier by explaining specifications in practical terms. Instead of simply choosing the most expensive configuration, customers can compare options according to their workload, budget, performance expectations, and future requirements.
                </p>
            </div>

            {/* REMAINING SECTIONS (INSIDE SEE MORE COLLAPSIBLE) */}
            <div
                className={`transition-all duration-700 ease-in-out overflow-hidden ${open ? "max-h-[35000px] opacity-100 mt-10 space-y-12" : "max-h-0 opacity-0"
                    }`}
            >
                {/* 2. H2 - Professional Computer Shop in Chennai for Business & Gaming */}
                <div className="bg-gradient-to-br from-purple-50/70 via-fuchsia-50/40 to-white border border-purple-100 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight mb-4">
                            Professional Computer Shop in Chennai for Business &amp; Gaming
                        </h2>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                            For office applications, accounting, communication, productivity, and development, TN Computers provides business-ready computers, gaming-ready systems, and customized configurations built for the specific way each system will be used.
                        </p>
                    </div>

                    {/* H3 - For businesses, our solutions can support */}
                    <div className="bg-white rounded-2xl p-6 border border-purple-100/90 shadow-sm space-y-4">
                        <h3 className="text-lg sm:text-xl font-bold text-purple-900">
                            For businesses, our solutions can support:
                        </h3>
                        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                            {[
                                "Office and productivity systems",
                                "Professional workstations",
                                "Developer and programming PCs",
                                "Computers for startups and small businesses",
                                "Upgrade-ready desktop configurations",
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center gap-3 bg-purple-50/60 border border-purple-100 rounded-xl px-4 py-3 text-sm sm:text-base font-semibold text-gray-800"
                                >
                                    <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                        For gamers, requirements often shift toward dedicated graphics, faster processors, high-speed memory, NVMe storage, and performance-focused cooling — and we can help compare performance-focused gaming PCs, graphics cards, monitors, gaming peripherals, and other components to match.
                    </p>
                </div>

                {/* 3. H2 - Laptop Store Chennai for Students, Professionals & Businesses */}
                <div className="bg-white border border-purple-100 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight mb-4">
                            Laptop Store Chennai for Students, Professionals &amp; Businesses
                        </h2>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
                            Choosing the right laptop depends on portability, performance, storage, display requirements, battery expectations, and budget. TN Computers provides a one-stop laptop store Chennai experience, where product selection is based on actual usage rather than unnecessary specifications.
                        </p>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                            A trusted laptop store in Chennai for students may prioritize affordability, portability, battery life, and everyday performance, while a professional laptop showroom in Chennai should also help customers compare processors, memory, SSD storage, displays, graphics, and upgrade possibilities. Our recommendations can consider:
                        </p>
                    </div>

                    {/* 6 Recommendations Cards */}
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                title: "Budget",
                                desc: "configurations that provide practical value within your spending range",
                            },
                            {
                                title: "Performance",
                                desc: "the appropriate processor, RAM, SSD, and graphics capabilities for your applications",
                            },
                            {
                                title: "Portability",
                                desc: "lightweight and compact options for students and professionals on the move",
                            },
                            {
                                title: "Productivity",
                                desc: "suitable configurations for office work, programming, browsing, and multitasking",
                            },
                            {
                                title: "Creative workloads",
                                desc: "stronger processors, additional memory, dedicated graphics, and better displays where required",
                            },
                            {
                                title: "Gaming",
                                desc: "laptops with suitable GPUs, processors, cooling systems, and high-refresh-rate displays",
                            },
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-purple-50/30 border border-purple-100 rounded-2xl p-5 hover:bg-purple-50/70 hover:border-purple-200 transition-all"
                            >
                                <h4 className="text-base font-bold text-purple-700 mb-1.5 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-purple-600"></span>
                                    {item.title}
                                </h4>
                                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                    — {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed bg-purple-50/60 border border-purple-100 rounded-2xl p-5">
                        For customers looking for an affordable laptop store in Chennai, the goal is to find the right balance between price and performance — not to compromise on the specifications that actually matter for your use case.
                    </p>
                </div>

                {/* 4. H2 - Gaming PC Chennai for High-Performance Builds */}
                <div className="bg-gradient-to-br from-gray-950 via-purple-950 to-gray-900 rounded-3xl p-6 sm:p-10 text-white shadow-xl space-y-6">
                    <div className="space-y-4">
                        <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight">
                            Gaming PC Chennai for High-Performance Builds
                        </h2>
                        <p className="text-purple-100 text-base sm:text-lg leading-relaxed">
                            A gaming PC should be balanced around the games you play and the performance you expect — not built around a single powerful component. TN Computers offers gaming PC Chennai solutions for every level of gamer, from entry-level setups to high-performance configurations, considering the complete system rather than one part in isolation.
                        </p>
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-white">
                            A well-balanced build typically includes:
                        </h3>
                        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                            {[
                                "Powerful CPUs paired with dedicated graphics cards",
                                "High-speed DDR RAM and NVMe SSD storage",
                                "Performance cooling, airflow, and cabinet selection",
                                "Reliable power supplies matched to component load",
                                "High-refresh-rate monitors and gaming peripherals",
                                "Motherboard compatibility for current and future upgrades",
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center gap-3 bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-sm sm:text-base font-medium text-purple-100 backdrop-blur-sm"
                                >
                                    <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <p className="text-purple-200 text-base sm:text-lg leading-relaxed">
                        If you&apos;re searching for a trusted gaming PC shop in Chennai, our team can help you compare configurations based on your budget, preferred games, resolution, and refresh rate. As an experienced custom PC builder Chennai, we also plan builds for esports, streaming, video editing, 3D rendering, and other performance-focused workloads — so your custom gaming PC Chennai setup is built around how you&apos;ll actually use it, not just what&apos;s available.
                    </p>

                    <p className="text-purple-200 text-base sm:text-lg leading-relaxed border-t border-white/10 pt-4">
                        For competitive gamers and esports users, components can be selected specifically around consistent frame rates and responsive gameplay, with future upgrade potential built into the plan from the start.
                    </p>
                </div>

                {/* 5. H2 - PC Building Service Chennai with Custom Configuration */}
                <div className="bg-white border border-purple-100 rounded-3xl p-6 sm:p-10 shadow-sm space-y-4">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight">
                        PC Building Service Chennai with Custom Configuration
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                        A professional PC building service Chennai should consider compatibility and system stability as carefully as individual component performance. TN Computers can assist with component selection and complete PC configurations based on your requirements — checking that every part works together, not just that each one performs well on its own.
                    </p>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                        From motherboard and power supply compatibility to proper cooling and airflow, our approach focuses on getting the fundamentals right so your system stays reliable long after it&apos;s built, whatever workload it&apos;s built for.
                    </p>
                </div>

                {/* 6. H2 - Refurbished Laptops Chennai for Value-Focused Buyers */}
                <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-10 space-y-6">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight mb-4">
                            Refurbished Laptops Chennai for Value-Focused Buyers
                        </h2>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-3">
                            For students, startups, home users, and professionals with limited budgets, refurbished systems can be a practical alternative when selected carefully.
                        </p>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                            TN Computers helps customers exploring refurbished laptops Chennai options evaluate important factors before purchase.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-4">
                            Consider:
                        </h3>
                        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                            {[
                                "Processor generation",
                                "RAM capacity",
                                "SSD storage",
                                "Battery condition",
                                "Screen condition",
                                "Keyboard and touchpad",
                                "Ports and connectivity",
                                "Physical condition",
                                "Operating system",
                                "Service or warranty support",
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-center text-sm font-semibold text-gray-800 shadow-sm"
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                        Customers searching for affordable refurbished laptops in Chennai can compare options based on actual usability instead of focusing only on the lowest price.
                    </p>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-medium">
                        For those considering used laptops Chennai, checking specifications, physical condition, battery health, and available support is particularly important.
                    </p>
                </div>

                {/* 7. H2 - PC Components Chennai for Upgrades & New Builds */}
                <div className="bg-white border border-purple-100 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight mb-4">
                            PC Components Chennai for Upgrades &amp; New Builds
                        </h2>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                            Building or upgrading a computer requires compatible components. TN Computers provides access to PC components Chennai customers may need for new systems and upgrades.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-base font-bold text-gray-900 uppercase tracking-wider mb-4">
                            Available categories can include:
                        </h3>
                        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                            {[
                                "Processors",
                                "Motherboards",
                                "RAM",
                                "SSDs",
                                "Graphics cards",
                                "Power supplies",
                                "PC cabinets",
                                "CPU coolers",
                                "Case fans",
                                "Monitors",
                                "Keyboards and mice",
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center gap-2.5 bg-purple-50/50 border border-purple-100 rounded-xl px-4 py-3 text-sm sm:text-base font-medium text-gray-800 hover:bg-purple-50 transition-colors"
                                >
                                    <div className="w-2 h-2 rounded-full bg-purple-600 flex-shrink-0"></div>
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                        Whether you&apos;re upgrading an existing system or sourcing parts for a new build, selecting compatible RAM, SSDs, graphics cards, or cooling solutions can improve performance without needing to replace the entire system.
                    </p>
                </div>

                {/* 8. H2 - Gaming Accessories Chennai for Complete Setups */}
                <div className="bg-gradient-to-r from-purple-50/60 via-white to-fuchsia-50/60 border border-purple-100 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight mb-4">
                            Gaming Accessories Chennai for Complete Setups
                        </h2>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-3">
                            A gaming setup is more than the computer itself.
                        </p>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                            TN Computers can help customers explore gaming accessories Chennai options such as:
                        </p>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            "Gaming keyboards",
                            "Gaming mice",
                            "Headsets",
                            "Mouse pads",
                            "Monitors",
                            "Controllers",
                            "Other gaming peripherals",
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm sm:text-base font-semibold text-gray-800 shadow-sm flex items-center gap-2"
                            >
                                <Gamepad2 className="w-4 h-4 text-purple-600 flex-shrink-0" />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>

                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                        Choosing accessories based on comfort, response, connectivity, durability, and intended usage can make a significant difference during long gaming sessions.
                    </p>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                        For customers looking for a gaming shop in Chennai, combining the right PC with suitable peripherals can create a more complete and enjoyable setup.
                    </p>
                </div>

                {/* 9. H2 - Laptop Repair Chennai & Computer Repair Chennai */}
                <div className="bg-white border border-purple-100 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight mb-4">
                            Laptop Repair Chennai &amp; Computer Repair Chennai
                        </h2>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-3">
                            Technical problems can affect work, study, gaming, and business operations. Before replacing a device, it can be useful to identify whether the issue can be resolved through repair, maintenance, or an upgrade.
                        </p>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                            TN Computers supports customers looking for laptop repair Chennai and computer repair Chennai services.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-base font-bold text-gray-900 uppercase tracking-wider mb-4">
                            Common requirements include:
                        </h3>
                        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                            {[
                                "Laptop troubleshooting",
                                "Desktop troubleshooting",
                                "SSD upgrades",
                                "RAM upgrades",
                                "Hardware replacement",
                                "Operating system support",
                                "Storage upgrades",
                                "Performance optimization",
                                "General maintenance",
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm sm:text-base font-medium text-gray-800"
                                >
                                    <Wrench className="w-4 h-4 text-purple-600 flex-shrink-0" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed bg-purple-50/50 border border-purple-100 rounded-2xl p-5">
                        Customers looking for an expert laptop upgrade service in Chennai can also explore whether increasing RAM or replacing older storage can improve the performance of an existing system.
                    </p>
                </div>

                {/* 10. H3 - Why Choose TN Computers? */}
                <div className="bg-gradient-to-br from-purple-900 via-fuchsia-950 to-violet-950 rounded-3xl p-6 sm:p-10 text-white shadow-xl space-y-8">
                    <div>
                        <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight mb-4">
                            Why Choose TN Computers?
                        </h3>
                        <p className="text-purple-100 text-base sm:text-lg leading-relaxed">
                            Technology purchases are easier when customers receive clear information and practical assistance. TN Computers focuses on providing:
                        </p>
                    </div>

                    {/* 10 Focus Points */}
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                        {[
                            "Reliable local support",
                            "Expert product guidance",
                            "Customized configurations",
                            "Competitive pricing",
                            "Genuine hardware options",
                            "Upgrade assistance",
                            "Gaming-focused solutions",
                            "Business-ready systems",
                            "Student-friendly options",
                            "Service-focused technical support",
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-center text-sm font-semibold text-purple-50 backdrop-blur-sm"
                            >
                                {item}
                            </div>
                        ))}
                    </div>

                    <p className="text-purple-100 text-base sm:text-lg leading-relaxed">
                        For customers searching for a computer shop KK Nagar, TN Computers is a convenient local destination bringing together laptops, desktops, gaming PCs, custom PC builds, refurbished computers, components, accessories, upgrades, and technical services — whether you&apos;re a student purchasing your first laptop, a professional upgrading your workstation, a business setting up office computers, or a gamer planning a custom system.
                    </p>

                    {/* 4 Simple Questions */}
                    <div className="bg-white/10 border border-white/20 rounded-2xl p-6 sm:p-8 space-y-4">
                        <h4 className="text-lg sm:text-xl font-bold text-white">
                            If you are comparing a Computer Shop in Chennai, start with four simple questions:
                        </h4>
                        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                            {[
                                "What will you use the computer for?",
                                "What is your realistic budget?",
                                "What level of performance do you need?",
                                "Will you need future upgrades?",
                            ].map((q, idx) => (
                                <div
                                    key={idx}
                                    className="bg-black/30 rounded-xl p-4 border border-white/10 text-sm font-medium text-purple-100 flex flex-col justify-between"
                                >
                                    <span className="text-xs font-bold text-purple-300 uppercase tracking-widest mb-1.5">
                                        Question 0{idx + 1}
                                    </span>
                                    <p className="text-white font-semibold text-sm sm:text-base leading-snug">{q}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <p className="text-purple-200 text-base sm:text-lg leading-relaxed">
                        The right computer is not always the most expensive configuration. It is the system that provides the performance you need today while giving you practical options for tomorrow. Explore TN Computers for laptops, desktops, gaming PCs, custom PC builds, refurbished laptops, PC components, gaming accessories, upgrades, repairs, and professional technology support in Chennai.
                    </p>
                </div>

                {/* 11. Testimonial: */}
                {/* <div className="space-y-6 pt-4">
                    <div className="text-center max-w-3xl mx-auto">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 border border-purple-200 text-xs font-bold uppercase tracking-wider text-purple-800 mb-2">
                            <Quote className="w-3.5 h-3.5" /> Customer Feedback
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                            Testimonial:
                        </h3>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {testimonials.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white border border-purple-100 rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
                            >
                                <div>
                              
                                    <div className="flex items-center gap-1 text-amber-400 mb-3">
                                        {[...Array(item.rating)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-amber-400" />
                                        ))}
                                    </div>

                                    <h4 className="text-lg font-bold text-gray-900 mb-2.5">
                                        {item.title}
                                    </h4>

                                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed italic mb-6">
                                        {item.quote}
                                    </p>
                                </div>

                                <div className="pt-4 border-t border-gray-100">
                                    <p className="font-bold text-gray-900 text-sm">
                                        — {item.author}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div> */}

                {/* 12. FAQ: */}
                {/* <div className="space-y-6 pt-4">
                    <div className="text-center max-w-3xl mx-auto">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 border border-purple-200 text-xs font-bold uppercase tracking-wider text-purple-800 mb-2">
                            <HelpCircle className="w-3.5 h-3.5" /> Direct Answers
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                            FAQ:
                        </h3>
                    </div>

                    <div className="space-y-4 max-w-4xl mx-auto">
                        {faqs.map((faq, index) => {
                            const isOpen = activeFaq === index;
                            return (
                                <div
                                    key={index}
                                    className="border border-purple-100 rounded-2xl overflow-hidden bg-white shadow-sm transition-all"
                                >
                                    <button
                                        onClick={() => toggleFaq(index)}
                                        className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-purple-50/50 transition-colors"
                                    >
                                        <span className="font-bold text-gray-900 text-base sm:text-lg">
                                            {index + 1}. Q: {faq.question}
                                        </span>
                                        <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 text-purple-700">
                                            {isOpen ? (
                                                <ChevronUp className="w-5 h-5" />
                                            ) : (
                                                <ChevronDown className="w-5 h-5" />
                                            )}
                                        </div>
                                    </button>
                                    {isOpen && (
                                        <div className="px-6 pb-6 pt-2 text-gray-700 text-sm sm:text-base leading-relaxed border-t border-purple-50 bg-purple-50/20">
                                            <strong className="text-purple-900">A: </strong>
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div> */}

            </div>

            {/* SEE MORE / SEE LESS TOGGLE BUTTON */}
            <div className="mt-8 text-center">
                <button
                    onClick={() => setOpen(!open)}
                    className="inline-flex items-center gap-2.5 px-8 sm:px-10 py-4 rounded-2xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white font-bold shadow-lg shadow-purple-200 hover:shadow-xl hover:shadow-purple-300 transition-all duration-300 hover:scale-[1.02] active:scale-95 text-base sm:text-lg cursor-pointer"
                >
                    {open ? (
                        <>
                            See Less <ChevronUp className="w-5 h-5" />
                        </>
                    ) : (
                        <>
                            See More <ChevronDown className="w-5 h-5" />
                        </>
                    )}
                </button>
            </div>

        </section>
    );
}