'use client';
import { useParams } from 'next/navigation';
import { useProducts } from '../../../../context/ProductsContext';
import { useCategories } from '../../../../context/CategoriesContext';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, SearchCheck } from 'lucide-react';
import { useEffect, useState } from 'react';
import { deleteCartitemsApi, postCartitemApi, updateCartitemsApi } from '../../../../api-endpoints/CartsApi';
import { InvalidateQueryFilters, useQueryClient } from '@tanstack/react-query';
import { useVendor } from '../../../../context/VendorContext';
import { useCartItem } from '../../../../context/CartItemContext';
import LoginModal from '@/app/components/LoginModal/page';
import ProductGrid from '@/app/components/ProductGrid';

export default function CategoriesBasedProduct() {
    const { id } = useParams();
    const [getUserId, setUserId] = useState<string | null>(null);
    const [getCartId, setCartId] = useState<string | null>(null);
    const [getUserName, setUserName] = useState<string | null>(null);
    const [signInmodal, setSignInModal] = useState(false);
    const { products, isLoading }: any = useProducts();
    const { categories }: any = useCategories();
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);
    const queryClient = useQueryClient();
    const { vendorId } = useVendor();
    const { cartItem }: any = useCartItem();

    useEffect(() => {
        const storedUserId = localStorage.getItem('userId');
        const storedCartId = localStorage.getItem('cartId');
        const storedUserName = localStorage.getItem('userName');

        setUserId(storedUserId);
        setCartId(storedCartId);
        setUserName(storedUserName);
    }, []);

    // Find the category name by ID
    const category = categories?.data?.find(
        (cat: any) => cat.id?.toString() === id
    );
    const categoryName = category?.name || 'Category';

    // Filter products by category ID
    const filteredProducts = products?.data?.filter(
        (product: any) => product.category?.toString() === id
    );

    const handleUpdateCart = async (id: any, type: any, qty: any) => {
        try {
            if (qty === 1) {
                const updateApi = await deleteCartitemsApi(`${id}`)
                if (updateApi) {
                    queryClient.invalidateQueries(['getCartitemsData'] as InvalidateQueryFilters);
                }
            } else {
                const response = await updateCartitemsApi(`${id}/${type}/`)
                if (response) {
                    queryClient.invalidateQueries(['getCartitemsData'] as InvalidateQueryFilters);
                }
            }

        } catch (error) {

        }
    }

    const handleAddCart = async (id: any, qty: any) => {
        const payload = {
            cart: getCartId,
            product: id,
            user: getUserId,
            vendor: vendorId,
            quantity: qty,
            created_by: getUserName ? getUserName : 'user'
        }
        try {
            const response = await postCartitemApi(``, payload)
            if (response) {
                queryClient.invalidateQueries(['getCartitemsData'] as InvalidateQueryFilters);
            }
        } catch (error) {

        }
    }

    const filteredMatchingProductsArray = filteredProducts?.map((product: any, index: number) => {
        const matchingCartItem = cartItem?.data?.find((item: any) => item?.product === product?.id);
        if (matchingCartItem) {
            return {
                ...product,
                Aid: index,
                cartQty: matchingCartItem?.quantity,
                cartId: matchingCartItem.id,
            };
        }
        return product;
    });

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold  text-blue-500 mb-6 mt-6 text-center">
                {categoryName} Products
            </h1>

            {isLoading ? (
                <p className="text-center text-gray-500">Loading...</p>
            ) : filteredMatchingProductsArray?.length > 0 ? (
                <ProductGrid products={filteredMatchingProductsArray} />

            ) : (
                <p className="text-center text-gray-500">No products found for this category.</p>
            )}
            {signInmodal && (
                <LoginModal open={signInmodal} handleClose={() => setSignInModal(false)} vendorId={vendorId} />
            )}
        </div>
    );
}