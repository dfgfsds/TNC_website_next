import CategoriesBasedProduct from '@/app/components/CategoriesBasedProduct';
import categorySeo from '@/app/data/categorySeo.json';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props) {
  const seo = categorySeo[params.slug as keyof typeof categorySeo];

  return {
    title: seo?.metaTitle || 'Computer Shop in Chennai | TN Computers',
    description:
      seo?.metaDescription ||
      'Buy computers, laptops & accessories at best price in Chennai',
  };
}

export default function CategoriesProduct() {
  return <CategoriesBasedProduct />;
}
