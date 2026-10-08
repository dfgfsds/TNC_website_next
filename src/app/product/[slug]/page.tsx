'use client';

import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai'; // from dev branch

import { useCartStore } from '../../hooks/useCartStore';
import toast from 'react-hot-toast';

import { useProducts } from '../../../../context/ProductsContext';
import { postCartitemApi } from '../../../../api-endpoints/CartsApi';
import { InvalidateQueryFilters, useQueryClient } from '@tanstack/react-query';

import LoginModal from '@/app/components/LoginModal/page';

import { useUser } from '../../../../context/UserContext';
import { useVendor } from '../../../../context/VendorContext';
import { useCartItem } from '../../../../context/CartItemContext';
import { slugConvert } from '../../../../lib/utils';

export default function ProductPage() {
  const { slug } = useParams();

  const router = useRouter();
  const { products } = useProducts();

  const product = products?.data?.find((p: any) => slugConvert(p.name) === slug);

  const [activeColor, setActiveColor] = useState(product?.colors?.[0] || '#000');
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const addToCart = useCartStore((state) => state.addToCart);
  const [signInmodal, setSignInModal] = useState(false);
  const [getCartId, setCartId] = useState<string | null>(null);
  const { cartItem }: any = useCartItem();
  const { user } = useUser();
  const { vendorId } = useVendor();
  const queryClient = useQueryClient();

  useEffect(() => {
    const storedCartId = localStorage.getItem('cartId');
    setCartId(storedCartId);
  }, []);

  const scrollRef = useRef<HTMLDivElement>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeftPos = useRef(0);

  const cartCount = cartItem?.data?.length || 0;
  const isInCart = cartItem?.data?.some((item: any) => item.product?.toString() === slug);


  const handleAddCart = async (id: any, qty: any) => {
    const payload = {
      cart: getCartId,
      product: id,
      user: user?.data?.id,
      vendor: vendorId,
      quantity: qty,
      created_by: user?.data?.name || 'user',
    };
    try {
      const response = await postCartitemApi(``, payload);
      if (response) {
        queryClient.invalidateQueries(['getCartitemsData'] as InvalidateQueryFilters);
        toast.success('Added to cart');
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
      toast.error('Failed to add to cart');
    }
  };

  if (!product) {
    return <p className="text-center mt-10 text-red-500">Product not found</p>;
  }

  return (
  <div className="max-w-6xl mx-auto p-4">    
    <div className=" grid md:grid-cols-2 gap-8">
      {/* Image */}
      <div className="flex flex-col gap-4">
        <div className="border h-fit p-4 rounded">
          <Image
            src={activeImage || product.image_urls?.[0]}
            alt={product.name}
            width={500}
            height={400}
            className="w-full h-[300px] object-contain"
          />
        </div>
        {product.image_urls && product.image_urls.length > 0 && (
          <div 
            ref={scrollRef}
            className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide select-none cursor-grab active:cursor-grabbing" 
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onMouseEnter={() => {
              if (scrollRef.current) {
                scrollRef.current.onwheel = (e) => {
                  e.preventDefault();
                  scrollRef.current!.scrollLeft += e.deltaY;
                };
              }
            }}
            onMouseLeave={() => {
              isDown.current = false;
              if (scrollRef.current) {
                scrollRef.current.onwheel = null;
              }
            }}
            onMouseDown={(e) => {
              isDown.current = true;
              if (scrollRef.current) {
                startX.current = e.pageX - scrollRef.current.offsetLeft;
                scrollLeftPos.current = scrollRef.current.scrollLeft;
              }
            }}
            onMouseUp={() => {
              isDown.current = false;
            }}
            onMouseMove={(e) => {
              if (!isDown.current) return;
              e.preventDefault();
              if (scrollRef.current) {
                const x = e.pageX - scrollRef.current.offsetLeft;
                const walk = (x - startX.current) * 2;
                scrollRef.current.scrollLeft = scrollLeftPos.current - walk;
              }
            }}
          >
            <style jsx>{`
              .scrollbar-hide::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            {product.image_urls.map((url: string, index: number) => (
              <div 
                key={index} 
                className={`border p-1 rounded cursor-pointer flex-shrink-0 ${
                  (activeImage || product.image_urls[0]) === url ? 'border-[#a100fe] ring-1 ring-[#a100fe]' : 'border-gray-200 hover:border-gray-300'
                }`}
                onMouseEnter={() => setActiveImage(url)}
                onClick={() => setActiveImage(url)}
              >
                <Image
                  src={url}
                  alt={`${product.name} - ${index + 1}`}
                  width={80}
                  height={80}
                  className="w-20 h-20 object-contain"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Details */}
      <div>
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <div className="flex mt-4">
          <p className="text-red-600 text-xl mt-1 font-semibold"> ₹{product?.price}</p>
          <p className="text-gray-600 text-lg mt-1 font-semibold line-through ml-4"> ₹{product?.discount}</p>
        </div>

                <div className="mt-6 text-sm text-gray-500">
          <p>
            Categories: <span className="text-red-500">{product.category_name}</span>
          </p>
        </div>


        {/* Buttons */}
        <div className="mt-6 flex gap-3">

          {isInCart ?
            <button
              onClick={(e) => router.push('/cart')}
              className="px-6 py-2 bg-[#a100fe] text-white rounded-lg text-sm font-medium hover:bg-[#a100fe] transition-all duration-300 transform hover:scale-105 hover:shadow-md"
            >
              Go to cart
            </button>
            :

            <button
              onClick={(e) => {
                e.stopPropagation();
                if (user?.data?.id) {
                  handleAddCart(product.id, 1);
                } else {
                  setSignInModal(true);
                }
              }}
              className="px-6 py-2 bg-[#a100fe] text-white rounded-lg text-sm font-medium hover:bg-[#a100fe] transition-all duration-300 transform hover:scale-105 hover:shadow-md"
            >
              Add to cart
            </button>
          }

        </div>


        <div className="mt-6 text-sm text-gray-600 space-y-1">
          <p>📦 1–4 Days Delivery</p>
          <p>✅ 100% Original and Quality</p>
          <p>🛡️ Extended Warranty</p>
        </div>

       
      </div>


      {signInmodal && (
        <LoginModal open={signInmodal} handleClose={() => setSignInModal(false)} vendorId={vendorId} />
      )}
    </div>
    <div className='mt-4 md:mt-20 border-t '>
     <h2 className="mt-6 font-bold text-sm uppercase">Description</h2>
        <p className="text-sm text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: product?.description }} />
        </div>
        </div>

  );
}
