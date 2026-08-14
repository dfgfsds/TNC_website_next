'use client'

import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useState, useRef, useEffect } from 'react'
import {
  FaHeart,
  FaShoppingCart,
  FaUser,
  FaBars,
  FaTimes,
} from 'react-icons/fa'
import { FiChevronDown } from 'react-icons/fi'
import { BiSearch } from 'react-icons/bi'
import { useCartStore } from '../store/cartStore'
import { useOutsideClick } from '../hooks/useOutsideClick'
import Image from 'next/image'
import logoImg from "../../../public/tn-computers-logo.png"
import { useCategories } from '../../../context/CategoriesContext'
import LoginModal from './LoginModal/page'
import { useVendor } from '../../../context/VendorContext'
import { useUser } from '../../../context/UserContext'
import { useCartItem } from '../../../context/CartItemContext'
import { useProducts } from '../../../context/ProductsContext'
import { slugConvert } from '../../../lib/utils'
import { postDeviceLogoutApi } from '../../../api-endpoints/authendication'
import { getDeviceId } from '../../../lib/deviceId'
import { auth } from '../../../lib/firebase'
import { signOut } from 'firebase/auth'

const NavbarPage = () => {
  const { products } = useProducts();
  const finalProducts = products.data;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [mobileSearch, setMobileSearch] = useState('')
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()
  const { cartItem }: any = useCartItem();
  const { categories } = useCategories()
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [results, setResults] = useState({
    products: [],
    related: [],
  });

  const [signInModal, setSignInModal] = useState(false);
  const { vendorId } = useVendor();
  const { user, setUser } = useUser();


  const userMenuRef = useRef(null)

  useOutsideClick(userMenuRef, () => setUserMenuOpen(false))

  const cartCount = cartItem?.data?.length || 0;

  // Pre-fill search input if ?q=... is present in URL

  useEffect(() => {
    const prevSearch = searchParams.get('q')
    if (prevSearch) {
      setSearchTerm(prevSearch)
      setMobileSearch(prevSearch)
    }
  }, [searchParams])


  const handleLogout = async () => {
    try {
      const currentUserId = user?.data?.id || (typeof window !== 'undefined' ? localStorage.getItem('userId') : null);
      if (currentUserId && vendorId) {
        await postDeviceLogoutApi({
          vendor_id: vendorId,
          device_id: getDeviceId(),
          user_id: currentUserId,
        });
      }
    } catch (err) {
      console.error("Device logout API error:", err);
    }

    try {
      await signOut(auth);
    } catch (fbErr) {
      console.error("Firebase signOut error:", fbErr);
    }

    if (typeof window !== 'undefined') {
      localStorage.removeItem("userId");
      localStorage.removeItem("userName");
      localStorage.removeItem("email");
      localStorage.removeItem("cartId");
      localStorage.clear();
    }
    setUser(null);
    setUserMenuOpen(false);
    setMobileMenuOpen(false);
    router.push('/');
  };


  const NAV_LINKS = [
    { path: '/', label: 'Home' },
    { path: '/shop', label: 'Shop' },
    { path: '/categories', label: 'Categories' },
    { path: '/custom-pc-build', label: 'Custom PC' },
    { path: '/about-us', label: 'About' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact-us', label: 'Contact' },
  ];

  useEffect(() => {
    if (!isOpen) return;

    const tid = setTimeout(() => {
      if (query.trim().length > 2) {
        fetchSearchResults(query.trim());
      } else {
        setShowDropdown(false);
      }
    }, 300);

    return () => clearTimeout(tid);
  }, [query, isOpen]);

  // fetchSearchResults
  const fetchSearchResults = (term: any) => {
    if (!products?.data) return;

    const lower = term.toLowerCase();
    const activeProducts = finalProducts?.filter((p: any) => {
      return String(p?.status).toLowerCase() === "true";
    });

    const titleMatches = activeProducts.filter((p: any) =>
      p.name?.toLowerCase().includes(lower)
    );

    const related = activeProducts
      .filter(
        (p: any) =>
          !titleMatches.includes(p) &&
          (p.description?.toLowerCase().includes(lower) ||
            p.category_name?.toLowerCase().includes(lower))
      )
      .slice(0, 5);

    setResults({ products: titleMatches, related: related });
    setShowDropdown(true);
  };

  return (
    <header className="w-full relative md:sticky top-0 z-50 bg-white shadow-sm">
      {/* Top Notification Bar */}
      <div className=" bg-[#a100fe] text-white text-xs md-text-base text-center py-2 md-py-3 font-bold tracking-wide">
        ENJOY FAST & FREE SHIPPING STOREWIDE!
      </div>


      {/* ===== MOBILE HEADER ===== */}
      <div className="flex md:hidden flex-col items-center justify-center bg-slate-50 text-white md-pt-3 pt-1 py-3 px-4">
        <div className="mt-2 text-xs mb-2 font-bold">
          <Image src={logoImg} alt="RAZOX" width={200} height={40} className="h-18 w-40" />
        </div>
        {/* Top Row: Hamburger - Logo - Icons */}
        <div className="w-full flex items-center justify-between">
          <button onClick={() => setMobileMenuOpen(true)} className="text-2xl text-black">
            <FaBars />
          </button>



          <div className="flex items-center gap-4">
            <FaUser className="text-lg text-black" onClick={() => user ? router.push('/profile') : setSignInModal(true)} />

            <div className="relative">
              <FaHeart className="text-lg text-black" />
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">0</span>
            </div>

            <Link href="/cart" aria-label="View Cart">
              <div className="relative">
                <FaShoppingCart className="text-lg text-black" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                )}
              </div>
            </Link>
          </div>
        </div>

        {/* Language Selection */}

      </div>

      {/* ===== MOBILE SEARCH BAR ===== */}
      <div className="md:hidden bg-[#f1f1f1] px-4 py-3">
        {/* hello jabeer */}
        <form
          className="relative"
        >
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setIsOpen(true);
            }}
            placeholder="Search..."
            className="w-full py-2 mt-4 px-4 rounded-md text-sm border border-gray-300 mb-2"
          />
          <button type="submit" className="absolute right-4 top-1/2 -translate-y-1/2">
            <BiSearch className="text-gray-500" />
          </button>

          {isOpen && showDropdown && (
            <div
              className="absolute top-full left-0 right-0 z-50 bg-white border border-gray-200 shadow-lg rounded-md 
                 max-h-[250px] overflow-y-auto text-sm mt-1"
            >
              {results.products.length > 0 ? (
                results.products.map((item: any, i: any) => (
                  <div
                    key={i}
                    onClick={() => {
                      setShowDropdown(false);
                      setQuery('');
                      setIsOpen(false);
                      router.push(`/product/${item?.id}`);
                      setMobileMenuOpen(false);
                    }}
                    className="flex gap-3 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {item.image_urls?.[0] && (
                      <Image
                        src={item.image_urls[0]}
                        alt={item.name}
                        width={40}
                        height={40}
                        className="rounded object-cover"
                      />
                    )}
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-red-700">₹{Number(item.price)}</p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="px-4 py-6 text-center text-gray-500">
                  No products found
                </div>
              )}
            </div>
          )}
        </form>

      </div>

      {/* ===== DESKTOP HEADER ===== */}
      <div className="hidden md:block relative bg-white text-black shadow">
        <div className="hidden xl:block absolute bottom-[-1px] left-0 w-[105px] h-[20px] bg-[#a100fe] z-10" style={{ clipPath: 'polygon(0 0, 80% 0%, 100% 100%, 0% 100%)' }} />
        <div className="hidden xl:block absolute bottom-[-1px] right-0 w-[105px] h-[20px] bg-[#a100fe] z-10" style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)' }} />

        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">

          {/* Logo */}
          <div className="w-36">
            <Image alt='logo' className='h-14 w-auto' src={logoImg} width={200} height={80} />
          </div>

          {/* Navigation Links */}
          <div className="flex gap-6 items-center text-sm font-semibold">
            {NAV_LINKS.map(({ path, label }) => (
              <Link
                key={path}
                href={path}
                className={`hover:text-[#a100fe] ${pathname === path ? 'text-[#a100fe] font-bold' : ''}`}
              >
                {label}
              </Link>
            ))}
          </div>


          {/* ===== DESKTOP SEARCH BAR ===== */}
          <form className="max-w-md mx-6 relative w-full">
            <input
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setIsOpen(true);
              }}
              placeholder="Start your search here..."
              className="w-full py-2 px-4 pr-10 rounded-md text-black text-sm border border-gray-300 outline-none"
            />
            <button type="submit">
              <BiSearch className="absolute right-3 top-2.5 text-gray-500" />
            </button>

            {isOpen && showDropdown && (
              <div
                className="absolute top-full mt-2 left-0 right-0 z-50 bg-white border border-gray-200 shadow-lg rounded-md 
                 max-h-[300px] overflow-y-auto text-sm"
              >
                {results.products.length > 0 ? (
                  <>
                    <p className="px-4 py-2 font-bold text-gray-500 border-b">PRODUCTS</p>
                    {results.products.map((item: any, i: any) => (
                      <div
                        key={i}
                        onClick={() => {
                          setShowDropdown(false);
                          setQuery('');
                          setIsOpen(false);
                          router.push(`/product/${slugConvert(item?.name)}`);
                        }}
                        className="flex gap-3 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        {item.image_urls?.[0] && (
                          <Image
                            src={item.image_urls[0]}
                            alt={item.name}
                            width={50}
                            height={50}
                            className="rounded object-cover"
                          />
                        )}
                        <div>
                          <p className="font-medium">{item.name}</p>
                          <p className="text-red-700">₹{Number(item.price)}</p>
                        </div>
                      </div>
                    ))}
                  </>
                ) : (
                  <div className="px-4 py-6 text-center text-gray-500">
                    No products found for <span className="font-semibold">“{query}”</span>
                  </div>
                )}
              </div>
            )}
          </form>


          <div className="flex items-center gap-4 text-sm relative">
            <div className="relative" ref={userMenuRef}>
              <FaUser
                className="text-lg text-black cursor-pointer hover:text-[#a100fe] transition-colors"
                onClick={() => user ? setUserMenuOpen(!userMenuOpen) : setSignInModal(true)}
              />
              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-100 shadow-xl rounded-lg z-20 py-1 divide-y divide-gray-100">
                  {user ? (
                    <>
                      <div className="px-4 py-2.5 text-sm font-semibold text-gray-800 bg-gray-50/50">
                        {user?.data?.name || 'Welcome'}
                      </div>
                      <div className="py-1">
                        <Link
                          href="/profile"
                          onClick={() => setUserMenuOpen(false)}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#a100fe] transition-colors"
                        >
                          Profile
                        </Link>
                        <button
                          type="button"
                          className="w-full text-left block px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                          onClick={handleLogout}
                        >
                          Logout
                        </button>
                      </div>
                    </>
                  ) : (
                    <div
                      onClick={() => {
                        setUserMenuOpen(false);
                        setSignInModal(true);
                      }}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#a100fe] cursor-pointer"
                    >
                      Login
                    </div>
                  )}
                </div>
              )}
            </div>

            <Link href="/cart" aria-label="View Cart">
              <div className="relative cursor-pointer">
                <FaShoppingCart className="text-xl" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                )}
              </div>
            </Link>
          </div>
        </div>
      </div>


      <div className={`fixed inset-0 z-40 md:hidden transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="absolute inset-0 bg-black opacity-50" onClick={() => setMobileMenuOpen(false)} />
        <div className="relative bg-white w-3/4 h-full px-6 py-6 text-black shadow-lg z-50 flex flex-col justify-between overflow-y-auto">
          <div>
            <div className="flex justify-between items-center mb-6">
              <Image src={logoImg} alt="RAZOX" width={140} height={35} className="h-10 w-auto" />
              <button onClick={() => setMobileMenuOpen(false)} className="text-xl p-1 text-gray-600 hover:text-black">
                <FaTimes />
              </button>
            </div>

            <nav className="flex flex-col gap-4 text-sm font-semibold">
              {NAV_LINKS.map(({ path, label }) => (
                <Link
                  key={path}
                  href={path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-1 transition-colors ${pathname === path ? 'text-[#a100fe] font-bold' : 'hover:text-[#a100fe]'}`}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="mt-8 border-t pt-4">
            {user ? (
              <div className="space-y-3">
                <div className="text-sm font-bold text-gray-900">
                  Hi, {user?.data?.name || 'Customer'}
                </div>
                <Link
                  href="/profile"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm text-gray-700 hover:text-[#a100fe]"
                >
                  My Profile & Orders
                </Link>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="block text-sm text-red-600 font-medium hover:text-red-700"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setSignInModal(true);
                }}
                className="w-full bg-[#a100fe] text-white py-2 rounded-lg text-sm font-medium hover:bg-[#8e00e0] transition-colors"
              >
                Sign In / Register
              </button>
            )}
          </div>
        </div>
      </div>


      <div className="hidden md:block bg-[#a100fe] shadow overflow-x-auto">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-center gap-6 text-sm font-bold text-white uppercase whitespace-nowrap">
          {categories?.data
            ?.filter((item: any) =>
              finalProducts?.some(
                (p: any) => slugConvert(p.category_name) === slugConvert(item.name)
              )
            )
            ?.slice(4, 13)
            .map((item: any, index: number) => (
              <div key={index} className="cursor-pointer" onClick={() => router.push(`/categories/${slugConvert(item.name)}`)}>{item?.name}</div>
            ))}
        </div>
      </div>

      {signInModal && (
        <LoginModal
          open={signInModal}
          handleClose={() => setSignInModal(false)}
          vendorId={vendorId}
        />
      )}


    </header>
  )
}

export default NavbarPage
