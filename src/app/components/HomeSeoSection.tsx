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
    Quote,
    Layers,
    SlidersHorizontal,
    Sparkles,
    Check,
    HardDrive,
    Zap,
    Box,
    Headphones,
    Settings,
    Activity,
    Compass
} from "lucide-react";

export default function HomeSeoSection() {
    const [open, setOpen] = useState(false);

    return (
        <section className="mt-6 space-y-8">
            
            {/* FIRST SECTION (ALWAYS VISIBLE - ULTRA CLEAN CARD) */}
            {/* 1. H2 - One-Stop Computer Store in Chennai for Every Requirement */}
            <div className="relative group bg-white/95 backdrop-blur-md border border-purple-100/90 rounded-[2rem] p-7 sm:p-10 lg:p-12 shadow-xl shadow-purple-900/5 hover:shadow-2xl hover:shadow-purple-900/10 transition-all duration-300">
                <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-40"></div>
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-100 text-xs font-extrabold uppercase tracking-widest text-purple-700">
                        <Compass className="w-3.5 h-3.5" /> Full Spectrum IT Store
                    </div>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-5">
                    One-Stop Computer Store in Chennai for Every Requirement
                </h2>
                
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-5 font-normal">
                    A good computer purchase starts with understanding how you will use the system. Processor speed, RAM, SSD capacity, graphics performance, display quality, cooling, connectivity, and upgradeability all influence the overall experience.
                </p>
                
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-normal">
                    As a local computer store in Chennai, we aim to make technology purchasing easier by explaining specifications in practical terms. Instead of simply choosing the most expensive configuration, customers can compare options according to their workload, budget, performance expectations, and future requirements.
                </p>
            </div>

            {/* REMAINING SECTIONS (INSIDE SEE MORE COLLAPSIBLE) */}
            <div
                className={`transition-all duration-700 ease-in-out overflow-hidden ${
                    open ? "max-h-[35000px] opacity-100 space-y-10" : "max-h-0 opacity-0"
                }`}
            >
                {/* 2. H2 - Professional Computer Shop in Chennai for Business & Gaming */}
                <div className="relative bg-gradient-to-br from-purple-50/80 via-fuchsia-50/40 to-white border border-purple-100 rounded-[2rem] p-7 sm:p-10 shadow-lg shadow-purple-900/5 space-y-6">
                    <div>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100/70 text-xs font-bold text-purple-800 uppercase tracking-wider mb-3">
                            <Sparkles className="w-3 h-3" /> Commercial &amp; Enthusiast
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight mb-4">
                            Professional Computer Shop in Chennai for Business &amp; Gaming
                        </h2>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                            For office applications, accounting, communication, productivity, and development, TN Computers provides business-ready computers, gaming-ready systems, and customized configurations built for the specific way each system will be used.
                        </p>
                    </div>

                    {/* H3 - For businesses, our solutions can support */}
                    <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 sm:p-7 border border-purple-100 shadow-sm space-y-4">
                        <h3 className="text-lg sm:text-xl font-bold text-purple-950 flex items-center gap-2.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600"></div>
                            For businesses, our solutions can support:
                        </h3>
                        <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
                            {[
                                "Office and productivity systems",
                                "Professional workstations",
                                "Developer and programming PCs",
                                "Computers for startups and small businesses",
                                "Upgrade-ready desktop configurations",
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center gap-3 bg-purple-50/60 hover:bg-purple-50 border border-purple-100/80 rounded-xl px-4 py-3.5 text-sm sm:text-base font-semibold text-gray-800 transition-colors shadow-xs"
                                >
                                    <div className="w-5 h-5 rounded-full bg-purple-600 text-white flex items-center justify-center flex-shrink-0 text-xs">
                                        ✓
                                    </div>
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white/80 rounded-2xl p-5 border border-purple-100/60">
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                            For gamers, requirements often shift toward dedicated graphics, faster processors, high-speed memory, NVMe storage, and performance-focused cooling — and we can help compare performance-focused gaming PCs, graphics cards, monitors, gaming peripherals, and other components to match.
                        </p>
                    </div>
                </div>

                {/* 3. H2 - Laptop Store Chennai for Students, Professionals & Businesses */}
                <div className="bg-white border border-purple-100 rounded-[2rem] p-7 sm:p-10 shadow-lg shadow-purple-900/5 space-y-6">
                    <div>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 text-xs font-bold text-purple-700 uppercase tracking-wider mb-3">
                            <Laptop className="w-3.5 h-3.5" /> Mobility &amp; Workstations
                        </span>
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
                                gradient: "from-purple-500 to-indigo-500",
                            },
                            {
                                title: "Performance",
                                desc: "the appropriate processor, RAM, SSD, and graphics capabilities for your applications",
                                gradient: "from-fuchsia-500 to-pink-500",
                            },
                            {
                                title: "Portability",
                                desc: "lightweight and compact options for students and professionals on the move",
                                gradient: "from-violet-500 to-purple-500",
                            },
                            {
                                title: "Productivity",
                                desc: "suitable configurations for office work, programming, browsing, and multitasking",
                                gradient: "from-blue-500 to-cyan-500",
                            },
                            {
                                title: "Creative workloads",
                                desc: "stronger processors, additional memory, dedicated graphics, and better displays where required",
                                gradient: "from-amber-500 to-orange-500",
                            },
                            {
                                title: "Gaming",
                                desc: "laptops with suitable GPUs, processors, cooling systems, and high-refresh-rate displays",
                                gradient: "from-emerald-500 to-teal-500",
                            },
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="group bg-gradient-to-b from-purple-50/40 to-white border border-purple-100 hover:border-purple-300 rounded-2xl p-5 sm:p-6 shadow-xs hover:shadow-md transition-all duration-300"
                            >
                                <div className="flex items-center gap-2 mb-2">
                                    <span className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r ${item.gradient}`}></span>
                                    <h4 className="text-base font-bold text-gray-900 group-hover:text-purple-700 transition-colors">
                                        {item.title}
                                    </h4>
                                </div>
                                <p className="text-sm sm:text-base text-gray-600 leading-relaxed pl-4 border-l-2 border-purple-100 group-hover:border-purple-300 transition-colors">
                                    — {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-gradient-to-r from-purple-50 via-fuchsia-50/50 to-purple-50 border border-purple-100/90 rounded-2xl p-5 sm:p-6">
                        <p className="text-gray-800 text-base sm:text-lg leading-relaxed font-medium">
                            💡 For customers looking for an affordable laptop store in Chennai, the goal is to find the right balance between price and performance — not to compromise on the specifications that actually matter for your use case.
                        </p>
                    </div>
                </div>

                {/* 4. H2 - Gaming PC Chennai for High-Performance Builds */}
                <div className="relative bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 rounded-[2.25rem] p-7 sm:p-10 lg:p-12 text-white shadow-2xl shadow-purple-950/40 border border-purple-800/40 space-y-6 overflow-hidden">
                    
                    {/* Futuristic background glow */}
                    <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/15 rounded-full blur-3xl pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-fuchsia-600/15 rounded-full blur-3xl pointer-events-none"></div>

                    <div className="relative space-y-4">
                        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/20 border border-purple-400/30 text-xs font-black uppercase tracking-widest text-purple-300">
                            <Gamepad2 className="w-4 h-4 text-purple-400" /> High-Performance Rigs
                        </span>
                        
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight tracking-tight">
                            Gaming PC Chennai for High-Performance Builds
                        </h2>
                        
                        <p className="text-purple-100/90 text-base sm:text-lg leading-relaxed font-normal">
                            A gaming PC should be balanced around the games you play and the performance you expect — not built around a single powerful component. TN Computers offers gaming PC Chennai solutions for every level of gamer, from entry-level setups to high-performance configurations, considering the complete system rather than one part in isolation.
                        </p>
                    </div>

                    <div className="relative space-y-4 pt-2">
                        <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                            <Zap className="w-5 h-5 text-amber-400" />
                            A well-balanced build typically includes:
                        </h3>
                        <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
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
                                    className="flex items-center gap-3 bg-white/10 hover:bg-white/15 border border-white/15 rounded-xl px-4 py-3.5 text-sm sm:text-base font-medium text-purple-50 backdrop-blur-md transition-colors"
                                >
                                    <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative pt-3 space-y-4 border-t border-white/10">
                        <p className="text-purple-200 text-base sm:text-lg leading-relaxed">
                            If you&apos;re searching for a trusted gaming PC shop in Chennai, our team can help you compare configurations based on your budget, preferred games, resolution, and refresh rate. As an experienced custom PC builder Chennai, we also plan builds for esports, streaming, video editing, 3D rendering, and other performance-focused workloads — so your custom gaming PC Chennai setup is built around how you&apos;ll actually use it, not just what&apos;s available.
                        </p>

                        <p className="text-purple-200 text-base sm:text-lg leading-relaxed">
                            For competitive gamers and esports users, components can be selected specifically around consistent frame rates and responsive gameplay, with future upgrade potential built into the plan from the start.
                        </p>
                    </div>
                </div>

                {/* 5. H2 - PC Building Service Chennai with Custom Configuration */}
                <div className="bg-white border border-purple-100 rounded-[2rem] p-7 sm:p-10 shadow-lg shadow-purple-900/5 space-y-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 text-xs font-bold text-purple-700 uppercase tracking-wider">
                        <Cpu className="w-3.5 h-3.5" /> Precision Assembly
                    </span>
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
                <div className="bg-gradient-to-br from-slate-50 to-purple-50/30 border border-slate-200/80 rounded-[2rem] p-7 sm:p-10 shadow-lg shadow-purple-900/5 space-y-6">
                    <div>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-3">
                            <ShieldCheck className="w-3.5 h-3.5" /> Certified Quality Testing
                        </span>
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
                        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <Check className="w-5 h-5 text-emerald-600" /> Consider:
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
                                    className="bg-white border border-gray-200/90 hover:border-purple-300 rounded-xl px-4 py-3.5 text-center text-sm font-semibold text-gray-800 shadow-xs hover:shadow transition-all"
                                >
                                    <span className="text-xs text-purple-600 font-bold block mb-0.5">#{idx + 1}</span>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-3 pt-2">
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                            Customers searching for affordable refurbished laptops in Chennai can compare options based on actual usability instead of focusing only on the lowest price.
                        </p>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-semibold text-purple-950 bg-white p-4 rounded-xl border border-purple-100">
                            For those considering used laptops Chennai, checking specifications, physical condition, battery health, and available support is particularly important.
                        </p>
                    </div>
                </div>

                {/* 7. H2 - PC Components Chennai for Upgrades & New Builds */}
                <div className="bg-white border border-purple-100 rounded-[2rem] p-7 sm:p-10 shadow-lg shadow-purple-900/5 space-y-6">
                    <div>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 text-xs font-bold text-purple-700 uppercase tracking-wider mb-3">
                            <HardDrive className="w-3.5 h-3.5" /> Hardware &amp; Upgrades
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight mb-4">
                            PC Components Chennai for Upgrades &amp; New Builds
                        </h2>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                            Building or upgrading a computer requires compatible components. TN Computers provides access to PC components Chennai customers may need for new systems and upgrades.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-base font-bold text-gray-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                            <Box className="w-4 h-4 text-purple-600" />
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
                                    className="flex items-center gap-2.5 bg-gradient-to-r from-purple-50/60 to-white border border-purple-100 hover:border-purple-300 rounded-xl px-4 py-3 text-sm sm:text-base font-semibold text-gray-800 hover:text-purple-700 transition-all shadow-xs"
                                >
                                    <div className="w-2 h-2 rounded-full bg-purple-600 flex-shrink-0"></div>
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed bg-purple-50/40 p-5 rounded-xl border border-purple-100">
                        Whether you&apos;re upgrading an existing system or sourcing parts for a new build, selecting compatible RAM, SSDs, graphics cards, or cooling solutions can improve performance without needing to replace the entire system.
                    </p>
                </div>

                {/* 8. H2 - Gaming Accessories Chennai for Complete Setups */}
                <div className="bg-gradient-to-r from-purple-50/70 via-white to-fuchsia-50/70 border border-purple-100 rounded-[2rem] p-7 sm:p-10 shadow-lg shadow-purple-900/5 space-y-6">
                    <div>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-fuchsia-100 text-xs font-bold text-fuchsia-800 uppercase tracking-wider mb-3">
                            <Headphones className="w-3.5 h-3.5" /> Battle-Station Gear
                        </span>
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

                    <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
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
                                className="bg-white border border-gray-200 hover:border-fuchsia-300 rounded-xl px-4 py-3.5 text-sm sm:text-base font-semibold text-gray-800 shadow-xs hover:shadow flex items-center gap-2.5 transition-all"
                            >
                                <Gamepad2 className="w-4 h-4 text-fuchsia-600 flex-shrink-0" />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="space-y-3 pt-2">
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                            Choosing accessories based on comfort, response, connectivity, durability, and intended usage can make a significant difference during long gaming sessions.
                        </p>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                            For customers looking for a gaming shop in Chennai, combining the right PC with suitable peripherals can create a more complete and enjoyable setup.
                        </p>
                    </div>
                </div>

                {/* 9. H2 - Laptop Repair Chennai & Computer Repair Chennai */}
                <div className="bg-white border border-purple-100 rounded-[2rem] p-7 sm:p-10 shadow-lg shadow-purple-900/5 space-y-6">
                    <div>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-100 text-xs font-bold text-amber-800 uppercase tracking-wider mb-3">
                            <Settings className="w-3.5 h-3.5" /> Technical Diagnostics
                        </span>
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
                        <h3 className="text-base font-bold text-gray-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                            <Wrench className="w-4 h-4 text-purple-600" />
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
                                    className="flex items-center gap-3 bg-slate-50 hover:bg-purple-50/50 border border-slate-200/80 hover:border-purple-200 rounded-xl px-4 py-3.5 text-sm sm:text-base font-medium text-gray-800 transition-all shadow-xs"
                                >
                                    <Wrench className="w-4 h-4 text-purple-600 flex-shrink-0" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <p className="text-gray-800 text-base sm:text-lg leading-relaxed bg-gradient-to-r from-purple-50 to-fuchsia-50/40 border border-purple-100 rounded-2xl p-5 sm:p-6 font-medium">
                        🛠️ Customers looking for an expert laptop upgrade service in Chennai can also explore whether increasing RAM or replacing older storage can improve the performance of an existing system.
                    </p>
                </div>

                {/* 10. H3 - Why Choose TN Computers? */}
                <div className="relative bg-gradient-to-br from-purple-950 via-fuchsia-950 to-slate-950 rounded-[2.25rem] p-7 sm:p-10 lg:p-12 text-white shadow-2xl shadow-purple-950/40 border border-purple-800/40 space-y-8 overflow-hidden">
                    
                    <div className="relative">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-400/20 border border-purple-400/30 text-xs font-bold text-purple-300 uppercase tracking-widest mb-3">
                            <Sparkles className="w-3.5 h-3.5" /> The TN Advantage
                        </span>
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black leading-tight mb-4 tracking-tight">
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
                                className="bg-white/10 hover:bg-white/15 border border-white/15 rounded-xl px-4 py-3.5 text-center text-sm font-semibold text-purple-50 backdrop-blur-md transition-all shadow-xs"
                            >
                                {item}
                            </div>
                        ))}
                    </div>

                    <p className="text-purple-100 text-base sm:text-lg leading-relaxed">
                        For customers searching for a computer shop KK Nagar, TN Computers is a convenient local destination bringing together laptops, desktops, gaming PCs, custom PC builds, refurbished computers, components, accessories, upgrades, and technical services — whether you&apos;re a student purchasing your first laptop, a professional upgrading your workstation, a business setting up office computers, or a gamer planning a custom system.
                    </p>

                    {/* 4 Simple Questions */}
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-8 space-y-4">
                        <h4 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                            <HelpCircle className="w-5 h-5 text-purple-300" />
                            If you are comparing a Computer Shop in Chennai, start with four simple questions:
                        </h4>
                        <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
                            {[
                                "What will you use the computer for?",
                                "What is your realistic budget?",
                                "What level of performance do you need?",
                                "Will you need future upgrades?",
                            ].map((q, idx) => (
                                <div
                                    key={idx}
                                    className="bg-black/30 rounded-xl p-5 border border-white/10 text-sm font-medium text-purple-100 flex flex-col justify-between hover:border-purple-400/50 transition-all"
                                >
                                    <span className="text-xs font-black text-purple-300 uppercase tracking-widest mb-2">
                                        Question 0{idx + 1}
                                    </span>
                                    <p className="text-white font-bold text-sm sm:text-base leading-snug">{q}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <p className="text-purple-200 text-base sm:text-lg leading-relaxed">
                        The right computer is not always the most expensive configuration. It is the system that provides the performance you need today while giving you practical options for tomorrow. Explore TN Computers for laptops, desktops, gaming PCs, custom PC builds, refurbished laptops, PC components, gaming accessories, upgrades, repairs, and professional technology support in Chennai.
                    </p>
                </div>

            </div>

            {/* SEE MORE / SEE LESS TOGGLE BUTTON */}
            <div className="pt-4 text-center">
                <button
                    onClick={() => setOpen(!open)}
                    className="group inline-flex items-center gap-3 px-9 py-4 rounded-2xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white font-extrabold shadow-xl shadow-purple-500/25 hover:shadow-2xl hover:shadow-purple-500/35 transition-all duration-300 hover:scale-[1.03] active:scale-95 text-base sm:text-lg cursor-pointer"
                >
                    {open ? (
                        <>
                            <span>See Less</span>
                            <ChevronUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
                        </>
                    ) : (
                        <>
                            <span>See More</span>
                            <ChevronDown className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                        </>
                    )}
                </button>
            </div>

        </section>
    );
}