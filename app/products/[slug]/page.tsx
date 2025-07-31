import { notFound } from "next/navigation";
import Image from "next/image";
import { getProductBySlug, getProducts } from "@/lib/products";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { AddToCartButton } from "@/components/product/AddToCartButton";
import { ProductCard } from "@/components/product/ProductCard";
import type { Metadata, ResolvingMetadata } from 'next'
import { StarRating } from "@/components/product/StarRating";
import { ProductReviews } from "@/components/product/ProductReviews";

type Props = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const product = getProductBySlug(params.slug);
 
  if (!product) {
    return {
      title: 'Product not found'
    }
  }
 
  return {
    title: product.name,
    description: product.description,
  }
}

export async function generateStaticParams() {
  const products = getProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getProducts()
    .filter(p => p.scentFamily === product.scentFamily && p.id !== product.id)
    .slice(0, 4);

  return (
    <>
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src={product.image}
              alt={product.name}
              data-ai-hint="perfume bottle"
              width={800}
              height={800}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <div>
            <div className="flex gap-2 mb-2">
              <Badge variant="outline">{product.category}</Badge>
              <Badge variant="secondary">{product.scentFamily}</Badge>
            </div>
            <h1 className="text-4xl font-headline font-bold mb-4">{product.name}</h1>

            <a href="#reviews" className="flex items-center gap-2 mb-4 group">
              <StarRating rating={product.rating} />
              <span className="text-sm text-muted-foreground group-hover:underline">
                ({product.reviewCount} reviews)
              </span>
            </a>

            <p className="text-3xl font-light text-primary mb-6">${product.price.toFixed(2)}</p>
            <p className="text-lg text-muted-foreground mb-8">{product.description}</p>
            
            <AddToCartButton product={product} />

            <Separator className="my-8" />

            <div>
              <h2 className="text-xl font-semibold mb-4">Scent Profile</h2>
              <div className="space-y-3 text-muted-foreground">
                <p><strong>Top Notes:</strong> {product.notes.top.join(", ")}</p>
                <p><strong>Middle Notes:</strong> {product.notes.middle.join(", ")}</p>
                <p><strong>Base Notes:</strong> {product.notes.base.join(", ")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-secondary py-16 md:py-24 mt-12">
        <div className="container mx-auto px-4">
          <ProductReviews product={product} />
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24">
        <h2 className="text-3xl font-headline text-center mb-12">You May Also Like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {relatedProducts.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </>
  );
}
