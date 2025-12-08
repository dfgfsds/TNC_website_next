'use client';

import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { useEffect, useState } from 'react';
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
      <div className="border h-fit p-4 rounded">
        <Image
          src={product.image_urls[0]}
          alt={product.name}
          width={500}
          height={400}
          className="w-full h-[300px] object-contain"
        />
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
