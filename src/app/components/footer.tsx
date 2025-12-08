'use client'
import Link from 'next/link';
import Image from 'next/image'
import { Phone } from "lucide-react";
import logoImg from "../../../public/tn-computers-logo.png"

import {
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from 'react-icons/fa'

import { MdEmail } from 'react-icons/md'
import TopFooter from './TopFooter'

export default function Footer() {
  return (
    <>
      <footer className="bg-[#9333ea] text-gray-500">
        <TopFooter />
        <div className='max-w-7xl mx-auto'>
          {/* Top Contact & Newsletter Section */}
          <div className="relative bg-[#9333ea] text-white border-b border-slate-400 px-4 py-10 lg:px-16 footer-notch overflow-hidden">
            <div className="relative z-20 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 lg:gap-20">

              {/* Phone Section */}
              <div className="flex items-center gap-2 md:gap-4">
                <FaPhoneAlt className="text-White w-8 h-8" />
                <div>
                  <p className="text-sm text-gray-100">Order and Service</p>
                  <p className="text-2xl font-bold text-gray-100">+91 - 7429667788</p>
                </div>
              </div>
              {/* Newsletter Section */}
              <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
                <p className="text-lg font-semibold">Subscribe to our mailing list</p>
                <p className="text-sm text-gray-100">
                  Sign up for special perks starting now with a 10% Off Coupon!
                </p>
                <div className="flex flex-col sm:flex-row mt-3 w-full sm:max-w-md">
                  <input
                    type="email"
                    placeholder="Enter your email..."
                    className="px-4 py-2 rounded-md sm:rounded-l-md sm:rounded-r-none text-black focus:outline-none mb-2 sm:mb-0 flex-1"
                  />
                  <button className="bg-white text-black font-semibold px-4 py-2 rounded-md sm:rounded-l-none sm:rounded-r-md hover:text-red-500 flex items-center justify-center gap-1">
                    Subscribe <span className="text-red-600">▸</span>
                  </button>
                </div>
              </div>

            </div>
          </div>


          {/* Footer Links Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 py-10 text-sm">
            {/* About Us */}
            <div className="text-left">
              <div className="flex justify-start">
                <Image
                  alt="logo"
                  className="h-14 w-36 bg-white object-contain"
                  src={logoImg}
                  width={100}
                  height={40}
                />
              </div>
              <h4 className="font-bold text-white mt-3 mb-3">About Us</h4>
              <p className="text-gray-300">
                Tn computers is your destination for quality products at great prices. We believe in providing exceptional service and a seamless shopping experience.
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-left">
              <h4 className="font-bold text-white mb-3">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="/about-us" className="hover:text-white transition-colors duration-200">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us" className="hover:text-white transition-colors duration-200">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/refund-policy" className="hover:text-white transition-colors duration-200">
                    Refund Policy
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="hover:text-white transition-colors duration-200">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white transition-colors duration-200">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            {/* Customer */}
            <div className="text-left">
              <h4 className="font-bold text-white mb-3">Menu</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="/about-us" className="hover:text-white transition-colors duration-200">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/categories" className="hover:text-white transition-colors duration-200">
                    Categories
                  </Link>
                </li>
                <li>
                  <Link href="/shop" className="hover:text-white transition-colors duration-200">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us" className="hover:text-white transition-colors duration-200">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="text-left">
              <h4 className="font-bold text-white mb-3">Contact</h4>
              <p className="text-gray-100">No: 126 B, Vanniar Street,</p>
              <p className="text-gray-100">Bangaru Colony, KK Nagar,</p>
              <p className="text-gray-100">Chennai – 600078</p>
              <p className="text-white font-semibold mt-2">Send Message ➤</p>
              <p className="text-gray-100 mt-1">Mon - Fri: 9am - 5pm</p>
              <div className="flex gap-4 mt-4">
                <a href="https://www.facebook.com/tncomputershardware" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF className="hover:text-blue-500 text-white text-xl cursor-pointer" />
                </a>
                <a href="https://x.com/Tncomputerstech" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="hover:text-sky-400 text-white text-xl cursor-pointer" />
                </a>
                <a href="https://www.youtube.com/@TN_Computers" target="_blank" rel="noopener noreferrer">
                  <FaYoutube className="hover:text-red-500 text-white text-xl cursor-pointer" />
                </a>
                <a href="https://www.instagram.com/tn__computers/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="hover:text-pink-500 text-white text-xl cursor-pointer" />
                </a>
              </div>
            </div>
          </div>



          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row justify-between items-center px-6 py-6 border-t border-white">
            <p className="text-gray-400 text-sm">
              Copyright © 2025 <a href='https://www.ftdigitalsolutions.in/' className="text-slate-300 font-semibold">Ft Digital Solutions ( Agency ).</a>   All rights reserved
            </p>
            <div className="flex gap-2 mt-4 md:mt-0">
              <img src="/assets/mastercard.svg" alt="mastercard" className="w-12" />
              <img src="/assets/visa.svg" alt="visa" className="w-12" />
              <img src="/assets/paypal.svg" alt="paypal" className="w-12 " />

            </div>
          </div>
        </div>
   <Link
      href="tel:+917429667788"
      className="fixed bottom-32 md:bottom-24  left-4 z-50 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-r from-blue-700 to-blue-600 text-white shadow-lg border border-blue-600 transition-transform duration-300 hover:scale-110 hover:shadow-2xl"
      aria-label="Call Us"
    >
      {/* Pulsing Ring */}
      {/* <span className="absolute w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-blue-500 opacity-75 animate-ping"></span> */}

      {/* Call Icon */}
      <Phone size={22} className="sm:size-[28px] relative z-10" />
    </Link>

      </footer>
    </>
  )
}


