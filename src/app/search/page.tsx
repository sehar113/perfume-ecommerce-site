
"use client";

import { useState, useEffect, Suspense, useMemo } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { getProducts } from '@/lib/products';
import type { Product } from '@/lib/types';
import { ProductCard } from '@/components/product/ProductCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Loader2, Search, Wand2, Star } from 'lucide-react';
import { searchProducts } from '@/ai/flows/search-products';
import { HourglassLoader } from '@/components/layout/HourglassLoader';
import Link from 'next/link';

// Hand-pick some popular product IDs for the trending section
const trendingProductIds = [44, 45, 47, 49];

function SearchComponent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';

  const [searchTerm, setSearchTerm] = useState(initialQuery);
  const [displayedQuery, setDisplayedQuery] = useState(initialQuery);
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const allProducts = useMemo(() => getProducts(), []);
  const trendingProducts = useMemo(() => 
    trendingProductIds.map(id => allProducts.find(p => p.id === id)).filter((p): p is Product => p !== undefined),
    [allProducts]
  );

  useEffect(() => {
    const performSearch = async () => {
      if (!displayedQuery) {
        setProducts([]);
        return;
      }

      setIsLoading(true);
      setError(null);

      // 1. Basic local search
      const lowercasedQuery = displayedQuery.toLowerCase();
      const directMatches = allProducts.filter(p => 
        p.name.toLowerCase().includes(lowercasedQuery) || 
        p.description.toLowerCase().includes(lowercasedQuery) ||
        p.scentFamily.toLowerCase().includes(lowercasedQuery)
      );

      if (directMatches.length > 0) {
        setProducts(directMatches);
        setIsLoading(false);
        return;
      }
      
      // 2. If no direct matches, use AI for related items
      try {
        const productNames = allProducts.map(p => p.name);
        const result = await searchProducts({ query: displayedQuery, productNames });
        const aiRecommendedProducts = result.recommendations
            .map(name => allProducts.find(p => p.name === name))
            .filter((p): p is Product => p !== undefined);
        
        setProducts(aiRecommendedProducts);
        if(aiRecommendedProducts.length === 0){
          setError("Our AI couldn't find any related products for your search.");
        }
      } catch (e) {
        console.error("AI search failed:", e);
        setError("We couldn't find any products matching your search, and our AI assistant is currently unavailable.");
        setProducts([]);
      } finally {
        setIsLoading(false);
      }
    };

    performSearch();
  }, [displayedQuery, allProducts]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setDisplayedQuery(searchTerm);
    router.push(`/search?q=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-headline font-bold text-center mb-4">Search Our Collection</h1>
        <p className="text-lg text-muted-foreground text-center mb-8">
          Find your next signature scent.
        </p>
        <form onSubmit={handleSearch} className="flex gap-2 mb-12">
          <Input
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="e.g., 'summer floral' or 'Oud Mystique'"
            className="h-12 text-lg"
          />
          <Button type="submit" size="lg" className="h-12" disabled={isLoading}>
            <Search className="h-5 w-5" />
          </Button>
        </form>
      </div>

      <div>
        {isLoading ? (
          <div className="flex flex-col items-center justify-center text-center py-20">
            <HourglassLoader text="Looking for the perfect scent for you..."/>
          </div>
        ) : error ? (
           <div className="flex flex-col items-center justify-center text-center py-20 bg-destructive/10 rounded-lg">
                <h3 className="text-2xl font-headline text-destructive">{error}</h3>
                <p className="mt-2 text-muted-foreground">
                  Please try a different search term.
                </p>
            </div>
        ) : products.length > 0 ? (
          <>
            <h2 className="text-2xl font-headline mb-6">
              Search Results for "{displayedQuery}"
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        ) : displayedQuery ? (
          <div className="flex flex-col items-center justify-center text-center py-20">
              <h3 className="text-2xl font-headline">No Products Found for "{displayedQuery}"</h3>
              <p className="mt-2 text-muted-foreground">
                Try adjusting your search to find what you're looking for.
              </p>
          </div>
        ) : (
           <div className="text-center py-8">
              <h3 className="text-2xl font-headline mb-8">Trending Products</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto">
                {trendingProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
              </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function SearchPage() {
    return (
        <Suspense fallback={<div className="flex items-center justify-center flex-grow"><HourglassLoader text="Loading search..."/></div>}>
            <SearchComponent />
        </Suspense>
    )
}
