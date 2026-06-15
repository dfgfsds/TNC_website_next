'use client';

import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { Phone } from 'lucide-react';
import logoImg from '../../../public/tn-computers-logo.png';
import TopFooter from './TopFooter';
import razorpayLogo from '../../../public/razorpay_logo.jpeg';
import { FaEnvelope } from 'react-icons/fa';

/* 🔥 Lazy-loaded icons (PageSpeed friendly) */
const FaPhoneAlt = dynamic(() => import('react-icons/fa').then(m => m.FaPhoneAlt));
const FaFacebookF = dynamic(() => import('react-icons/fa').then(m => m.FaFacebookF));
const FaXTwitter = dynamic(() => import('react-icons/fa6').then(m => m.FaXTwitter));
const FaYoutube = dynamic(() => import('react-icons/fa').then(m => m.FaYoutube));
const FaInstagram = dynamic(() => import('react-icons/fa').then(m => m.FaInstagram));
const SiRazorpay = dynamic(() => import('react-icons/si').then(m => m.SiRazorpay));

export default function Footer() {
  return (
    <footer className="bg-[#9333ea] text-gray-500 relative">
      <TopFooter />

      <div className="max-w-7xl mx-auto">
        {/* Top Contact & Newsletter */}
        <div className="border-b border-slate-400 px-4 py-10 lg:px-16">
          <div className="flex flex-col lg:flex-row justify-between gap-10 text-white">

            {/* Phone */}
            {/* <div className="flex items-center gap-4">
              <FaPhoneAlt className="w-8 h-8 text-white" />
              <div>
                <p className="text-sm text-gray-100">Order and Service</p>
                <a
                  href="tel:+917429667788"
                  className="text-2xl font-bold text-gray-100 hover:underline"
                >
                  +91 74296 67788
                </a>
              </div>
            </div> */}

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className='space-y-9'>
                {/* Phone */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-md">
                    <FaPhoneAlt className="w-7 h-7 text-white" />
                  </div>

                  <div>
                    <a
                      href="tel:+917429667788"
                      className="text-2xl font-bold text-gray-100 hover:underline"
                    >
                      +91 74296 67788
                    </a>

                    <p className="text-sm text-gray-200 mt-1">
                      Order and Service
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-md">
                    <FaEnvelope className="w-7 h-7 text-white" />
                  </div>

                  <div>
                    <a
                      href="mailto:info@tncomputers.in"
                      className="text-xl font-bold text-gray-100 hover:underline break-all"
                    >
                      info@tncomputers.in
                    </a>

                    <p className="text-sm text-gray-200 mt-1">
                      Email Support
                    </p>
                  </div>
                </div>
              </div>

            </div>


            {/* Newsletter */}
            <div className="w-full lg:w-1/2">
              <p className="text-lg font-semibold">Subscribe to our mailing list</p>
              <p className="text-sm text-gray-100">
                Sign up for special perks and get a 10% OFF coupon!
              </p>

              <div className="flex flex-col sm:flex-row mt-3 sm:max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email..."
                  className="flex-1 px-4 py-2 rounded-md sm:rounded-r-none text-black outline-none"
                />
                <button className="bg-white text-black font-semibold px-4 py-2 rounded-md sm:rounded-l-none hover:text-red-500">
                  Subscribe ▸
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 py-10 text-sm">

          {/* About */}
          <div>
            <Image
              src={logoImg}
              alt="TN Computers Logo"
              width={140}
              height={60}
              className="bg-white rounded p-2"
            />
            <h4 className="font-bold text-white mt-4 mb-3">About Us</h4>
            <p className="text-gray-300">
              TN Computers is your destination for quality laptops, PCs, and accessories at great prices with expert support.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-3">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/about-us">About Us</Link></li>
              <li><Link href="/contact-us">Contact Us</Link></li>
              <li><Link href="/refund-policy">Refund Policy</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Menu */}
          <div>
            <h4 className="font-bold text-white mb-3">Menu</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/about-us">About</Link></li>
              <li><Link href="/categories">Categories</Link></li>
              <li><Link href="/shop">Shop</Link></li>
              <li><Link href="/contact-us">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-3">Contact</h4>
            <p className="text-gray-100">No: 126 B, Vanniar Street</p>
            <p className="text-gray-100">Bangaru Colony, KK Nagar</p>
            <p className="text-gray-100">Chennai – 600078</p>
            {/* <p className="text-gray-100 mt-2">Mon – Fri: 9am – 5pm</p> */}

            <div className="flex gap-4 mt-4"> 
              <a
                href="https://www.facebook.com/tncomputershardware"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TN Computers Facebook Page"
              >
                <FaFacebookF className="text-xl text-white hover:text-blue-500" />
              </a>

              <a
                href="https://x.com/Tncomputerstech"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TN Computers X (Twitter) Profile"
              >
                <FaXTwitter className="text-xl text-white hover:text-sky-400" />
              </a>

              <a
                href="https://www.youtube.com/@TN_Computers"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TN Computers YouTube Channel"
              >
                <FaYoutube className="text-xl text-white hover:text-red-500" />
              </a>

              <a
                href="https://www.instagram.com/tn__computers/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TN Computers Instagram Profile"
              >
                <FaInstagram className="text-xl text-white hover:text-pink-500" />
              </a>
            </div>

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center px-6 py-6 border-t border-white mx-24">
          <p className="text-gray-400 text-sm">
            © 2026{' '}
            <a
              href="https://www.ftdigitalsolutions.in/"
              className="text-slate-300 font-semibold"
              target="_blank"
            >
              FT Digital Solutions
            </a>. All rights reserved.
          </p>

          {/* <div className="flex gap-3 mt-4 md:mt-0">
            <SiRazorpay className="text-4xl text-white" />
          </div> */}

          <div className="mt-4 md:mt-0">
            <Image
              src={razorpayLogo}
              alt="Razorpay"
              width={140}
              height={45}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Floating Call Button */}
      <Link
        href="tel:+917429667788"
        aria-label="Call Us"
        className="fixed bottom-16 md:bottom-6 right-4 z-50 flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-700 to-blue-600 text-white shadow-lg hover:scale-110 transition"
      >
        <Phone size={26} />
      </Link>
    </footer>
  );
}
