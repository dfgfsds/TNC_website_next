import ProductCard from '../components/ProductCard'

export default function ProductGrid({ products,isLoading }: any) {
  return (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products?.map((product: any) => (
        <ProductCard key={product.id} product={product} isLoading={isLoading}/>
      ))}
    </div>
  );
}
