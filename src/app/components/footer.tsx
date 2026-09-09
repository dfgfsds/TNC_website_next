import Link from 'next/link';
import Image from 'next/image';
import logoImg from '../../../public/tn-computers-logo.png';
import TopFooter from './TopFooter';
import razorpayLogo from '../../../public/razorpay_logo.jpeg';

export default function Footer() {
  return (
    <footer className="bg-[#9333ea] text-gray-500 relative">
      <TopFooter />

      <div className="max-w-7xl mx-auto">
        {/* Top Contact & Newsletter */}
        <div className="border-b border-slate-400 px-4 py-10 lg:px-16">
          <div className="flex flex-col lg:flex-row justify-between gap-10 text-white">

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className='space-y-9'>
                {/* Phone */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-md">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 512 512" aria-hidden="true">
                      <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.1l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
                    </svg>
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
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 512 512" aria-hidden="true">
                      <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.5c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.6zm-270.8 72c7.4 5.4 22.8 17.7 28.5 17.7s21.2-12.3 28.5-17.7c76.7-55.9 123.6-91 140.7-104.2 8.7-6.7 13.8-17.2 13.8-28.3 0-21.4-17.3-38.7-38.7-38.7H57.7C36.3 91.6 19 108.9 19 130.3c0 11.1 5.1 21.6 13.8 28.3 17.1 13.2 64 48.3 140.7 104.2z" />
                    </svg>
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
              loading="lazy"
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
              <li><Link href="/connect">Connect</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-3">Contact</h4>
            <a
              href="https://maps.app.goo.gl/LXbeantKiekEFgzP9"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:opacity-80 transition-opacity"
            >
              <p className="text-gray-100">No: 126 B, Vanniar Street</p>
              <p className="text-gray-100">Bangaru Colony, KK Nagar</p>
              <p className="text-gray-100">Chennai – 600078</p>
            </a>

            <div className="flex gap-4 mt-4">
              <a
                href="https://www.facebook.com/tncomputershardware"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TN Computers Facebook Page"
              >
                <svg className="w-5 h-5 text-white hover:text-blue-500 transition-colors" fill="currentColor" viewBox="0 0 320 512" aria-hidden="true">
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                </svg>
              </a>

              <a
                href="https://x.com/Tncomputerstech"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TN Computers X (Twitter) Profile"
              >
                <svg className="w-5 h-5 text-white hover:text-sky-400 transition-colors" fill="currentColor" viewBox="0 0 512 512" aria-hidden="true">
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                </svg>
              </a>

              <a
                href="https://www.youtube.com/@TN_Computers"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TN Computers YouTube Channel"
              >
                <svg className="w-5 h-5 text-white hover:text-red-500 transition-colors" fill="currentColor" viewBox="0 0 576 512" aria-hidden="true">
                  <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.583V175.185l142.739 81.241-142.739 81.24z" />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/tn__computers/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TN Computers Instagram Profile"
              >
                <svg className="w-5 h-5 text-white hover:text-pink-500 transition-colors" fill="currentColor" viewBox="0 0 448 512" aria-hidden="true">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </a>
            </div>

            {/* Play Store App Download */}
            <div className="mt-6">
              <Link
                href="https://play.google.com/store/apps/details?id=in.tncomputers.app&hl=en_IN"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-transform hover:scale-105"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  alt="Get it on Google Play"
                  width={165}
                  height={64}
                  loading="lazy"
                  className="h-16 w-auto"
                />
              </Link>
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

          <div className="mt-4 md:mt-0">
            <Image
              src={razorpayLogo}
              alt="Razorpay"
              width={140}
              height={45}
              loading="lazy"
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
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      </Link>
    </footer>
  );
}

