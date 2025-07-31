"use client";

import { useWishlist } from '@/hooks/use-wishlist';
import { ProductCard } from '@/components/product/ProductCard';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import Link from 'next/link';

export default function WishlistPage() {
  const { wishlistItems } = useWishlist();

  return (
    <div className="flex-grow bg-secondary">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-headline font-bold mb-8">My Wishlist</h1>

        {wishlistItems.length === 0 ? (
          <div className="text-center py-20 border-2 border-dashed rounded-lg">
            <Heart className="mx-auto h-24 w-24 text-muted-foreground/50" />
            <h2 className="mt-6 text-2xl font-semibold">Your wishlist is empty.</h2>
            <p className="mt-2 text-muted-foreground">Add your favorite fragrances to your wishlist to save them for later.</p>
            <Button asChild className="mt-6">
              <Link href="/products">Find Products</Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-8">
            {wishlistItems.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
