// app/providers.tsx
'use client';

import { ReactNode, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { VendorProvider } from '../../../context/VendorContext';
import { PolicyProvider } from '../../../context/PolicyContext';
import { CategoriesProvider } from '../../../context/CategoriesContext';
import { ProductsProvider } from '../../../context/ProductsContext';
import { UserProvider } from '../../../context/UserContext';
import { CartItemProvider } from '../../../context/CartItemContext';

export function AppProviders({ children }: { children: ReactNode }) {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            <VendorProvider>
                <PolicyProvider>
                    <CategoriesProvider>
                        <ProductsProvider>
                            <UserProvider>
                                <CartItemProvider>
                                    {children}
                                </CartItemProvider>
                            </UserProvider>
                        </ProductsProvider>
                    </CategoriesProvider>
                </PolicyProvider>
            </VendorProvider>
        </QueryClientProvider>
    );
}
