
"use client";

import { useState, useMemo } from "react";
import { getProducts } from "@/lib/products";
import type { Product } from "@/lib/types";
import { ProductCard } from "@/components/product/ProductCard";
import { ProductFilters } from "@/components/product/ProductFilters";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Filter } from "lucide-react";

export default function ProductsPage() {
  const allProducts = useMemo(() => getProducts(), []);
  const [filters, setFilters] = useState({
    search: "",
    category: "All",
    scentFamily: "All",
    priceRange: [0, 450],
    notes: [] as string[],
  });
  const [sort, setSort] = useState("popularity");
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const filteredAndSortedProducts = useMemo(() => {
    let products = [...allProducts];

    // Filter by search term
    if (filters.search) {
      products = products.filter((p) =>
        p.name.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    // Filter by category
    if (filters.category !== "All") {
      products = products.filter(
        (p) => p.category === filters.category
      );
    }

    // Filter by scent family
    if (filters.scentFamily !== "All") {
      products = products.filter(
        (p) => p.scentFamily === filters.scentFamily
      );
    }
    
    // Filter by notes
    if (filters.notes.length > 0) {
      products = products.filter((p) => {
        const productNotes = [
          ...p.notes.top,
          ...p.notes.middle,
          ...p.notes.base,
        ].map(note => note.toLowerCase());
        return filters.notes.every(note => productNotes.includes(note.toLowerCase()));
      });
    }

    // Filter by price range
    products = products.filter(
      (p) => p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]
    );

    // Sort products
    switch (sort) {
      case "price-asc":
        products.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        products.sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        products.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        products.sort((a, b) => b.name.localeCompare(a.name));
        break;
      // Default to popularity (initial order)
      default:
        break;
    }

    return products;
  }, [allProducts, filters, sort]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-headline font-bold">Our Collection</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Explore our exquisite range of fragrances, crafted for every personality and occasion.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="hidden md:block w-full md:w-1/4 lg:w-1/5">
          <ProductFilters filters={filters} setFilters={setFilters} />
        </aside>
        <main className="w-full md:w-3/4 lg:w-4/5">
          <div className="flex justify-between items-center mb-6">
            <p className="text-sm text-muted-foreground">
              Showing {filteredAndSortedProducts.length} of {allProducts.length} products
            </p>
            <div className="flex items-center gap-2">
              <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="md:hidden">
                    <Filter className="h-4 w-4" />
                    <span className="sr-only">Filters</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] sm:w-[340px]">
                   <SheetHeader className="mb-4">
                    <SheetTitle>Filters</SheetTitle>
                  </SheetHeader>
                  <ProductFilters filters={filters} setFilters={setFilters} />
                </SheetContent>
              </Sheet>

              <Select value={sort} onValueChange={setSort}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popularity">Popularity</SelectItem>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                  <SelectItem value="name-asc">Name: A to Z</SelectItem>
                  <SelectItem value="name-desc">Name: Z to A</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Separator className="mb-6"/>
          {filteredAndSortedProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
              {filteredAndSortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
             <div className="flex flex-col items-center justify-center text-center py-20">
                <h3 className="text-2xl font-headline">No Products Found</h3>
                <p className="mt-2 text-muted-foreground">
                  Try adjusting your filters to find what you're looking for.
                </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
